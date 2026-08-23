# -*- coding: utf-8 -*-
"""Generate primary Vietnamese reading audio with deterministic poetry pauses."""

import argparse
import hashlib
import json
import os
import subprocess
import sys
import time
from pathlib import Path

import numpy as np
import soundfile as sf
import torch

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")

WORKSPACE = Path(r"C:\Users\TVCHUONG\Desktop\AI\06_eLearning")
AUTO_MEDIA = Path(r"C:\Users\TVCHUONG\Desktop\AI\07_AutoMedia")
sys.path.insert(0, str(AUTO_MEDIA / "src"))

from vieneu import Vieneu

PRIMARY_DIR = WORKSPACE / "public" / "audio" / "curriculum"
BACKUP_PRIMARY = WORKSPACE / "backup_audio_wav" / "curriculum" / "primary"
MANIFEST_PATH = WORKSPACE / "src" / "data" / "curriculum" / "vietnamese" / "audioManifest.generated.json"
TASKS_PATH = WORKSPACE / "scripts" / "target_293_structured_reading_passages.json"
SYNC_METADATA_SCRIPT = WORKSPACE / "scripts" / "sync_vietnamese_audio_metadata.mjs"
POETRY_TARGET_WPM = 128.0


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("--poems-only", action="store_true", help="Chỉ tạo lại bài thơ đã đối chiếu")
    parser.add_argument("--lesson-id", action="append", default=[], help="Chỉ tạo mã bài này; có thể lặp")
    parser.add_argument("--force", action="store_true", help="Tạo lại dù prosodyHash đã khớp")
    return parser.parse_args()


def sha256_file(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def trim_silence(audio: np.ndarray, sample_rate: int) -> np.ndarray:
    """Trim model-added edge silence so configured pauses stay deterministic."""
    samples = np.asarray(audio, dtype=np.float32).reshape(-1)
    if samples.size == 0:
        raise ValueError("VieNeu trả về audio rỗng")
    peak = float(np.max(np.abs(samples)))
    if peak <= 1e-7:
        raise ValueError("VieNeu trả về audio im lặng")
    # Match the production silence detector (~-35 dB) so model-added edge
    # silence is removed before our explicit pedagogical pauses are inserted.
    active = np.flatnonzero(np.abs(samples) >= max(peak * 0.02, 0.01))
    if active.size == 0:
        return samples
    keep = int(sample_rate * 0.04)
    start = max(0, int(active[0]) - keep)
    end = min(samples.size, int(active[-1]) + keep + 1)
    return samples[start:end]


def synthesize_plan(tts, voice, plan: dict) -> tuple[np.ndarray, int]:
    sample_rate = int(getattr(tts, "sample_rate", 48000))
    parts = []
    for segment_index, segment in enumerate(plan["segments"], 1):
        synthesis_text = segment["synthesisText"].strip()
        if not synthesis_text:
            continue
        print(
            f"      · đoạn {segment_index}/{len(plan['segments'])}: {synthesis_text[:52]}",
            flush=True,
        )
        output = tts.infer(
            text=synthesis_text,
            voice=voice,
            temperature=0.38,
            silence_p=0.12,
            crossfade_p=0.0,
            max_chars=256,
        )
        speech = trim_silence(np.asarray(output), sample_rate)
        parts.append(speech)
        pause_ms = int(segment.get("pauseAfterMs", 0))
        if pause_ms > 0:
            parts.append(np.zeros(round(sample_rate * pause_ms / 1000), dtype=np.float32))
    if not parts:
        raise ValueError("Kế hoạch ngắt nghỉ không có đoạn đọc")
    return np.concatenate(parts), sample_rate


def select_effective_tempo(audio: np.ndarray, sample_rate: int, plan: dict) -> float:
    """Keep the generated poem below the classroom reading-speed ceiling."""
    base_tempo = float(plan.get("tempo", 1.0))
    if plan.get("genre") != "poem":
        return base_tempo
    word_count = sum(len(segment.get("text", "").split()) for segment in plan["segments"])
    raw_duration = len(audio) / sample_rate
    if word_count <= 0 or raw_duration <= 0:
        return base_tempo
    projected_wpm = word_count * 60 * base_tempo / raw_duration
    if projected_wpm <= 135:
        return base_tempo
    adaptive_tempo = POETRY_TARGET_WPM * raw_duration / (word_count * 60)
    return max(0.5, min(base_tempo, adaptive_tempo))


def write_atomic_audio(audio: np.ndarray, sample_rate: int, tempo: float, wav_path: Path, mp3_path: Path):
    token = f"{os.getpid()}-{time.time_ns()}"
    raw_wav = wav_path.with_name(f".{wav_path.stem}-{token}-raw.wav")
    final_wav = wav_path.with_name(f".{wav_path.stem}-{token}.wav")
    final_mp3 = mp3_path.with_name(f".{mp3_path.stem}-{token}.mp3")
    try:
        sf.write(raw_wav, audio, sample_rate, subtype="FLOAT")
        subprocess.run([
            "ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
            "-i", str(raw_wav), "-filter:a", f"atempo={tempo}",
            "-c:a", "pcm_f32le", str(final_wav),
        ], check=True)
        subprocess.run([
            "ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
            "-i", str(final_wav), "-vn", "-ar", "44100", "-ac", "2",
            "-b:a", "128k", str(final_mp3),
        ], check=True)
        info = sf.info(final_wav)
        if info.duration <= 0 or final_mp3.stat().st_size <= 10000:
            raise ValueError("File audio đầu ra không hợp lệ")
        os.replace(final_wav, wav_path)
        os.replace(final_mp3, mp3_path)
        return round(info.duration * 1000), mp3_path.stat().st_size
    finally:
        for temporary in (raw_wav, final_wav, final_mp3):
            if temporary.exists():
                temporary.unlink()


def main():
    args = parse_args()
    PRIMARY_DIR.mkdir(parents=True, exist_ok=True)
    BACKUP_PRIMARY.mkdir(parents=True, exist_ok=True)

    print("🔎 Đồng bộ transcript, thể loại và kế hoạch ngắt nghỉ...", flush=True)
    subprocess.run(["node", str(SYNC_METADATA_SCRIPT)], cwd=WORKSPACE, check=True)

    tasks = json.loads(TASKS_PATH.read_text(encoding="utf-8"))
    requested_ids = set(args.lesson_id)
    selected = [
        task for task in tasks
        if (not requested_ids or task["lessonId"] in requested_ids)
        and (not args.poems_only or task["readingPassage"].get("genre") == "poem")
    ]
    missing_ids = requested_ids - {task["lessonId"] for task in selected}
    if missing_ids:
        raise SystemExit(f"Không tìm thấy bài phù hợp: {', '.join(sorted(missing_ids))}")
    if not selected:
        raise SystemExit("Không có bài nào phù hợp để tạo audio")

    manifest = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    pending = []
    for task in selected:
        lesson_id = task["lessonId"]
        plan = task["prosodyPlan"]
        primary_mp3 = PRIMARY_DIR / f"{lesson_id}.mp3"
        current = manifest.get(lesson_id, {})
        ready = (
            primary_mp3.exists()
            and primary_mp3.stat().st_size > 10000
            and current.get("prosodyVersion") == plan["version"]
            and current.get("prosodyHash") == plan["prosodyHash"]
            and current.get("primaryVoice") == "Cô Giáo Vy"
            and current.get("audioSha256") == sha256_file(primary_mp3)
        )
        if args.force or not ready:
            pending.append(task)

    print(
        f"📚 Phạm vi: {len(selected)} bài; cần tạo mới: {len(pending)}; đã đạt: {len(selected) - len(pending)}.",
        flush=True,
    )
    if not pending:
        return

    print("🚀 Khởi tạo VieNeu-TTS v3turbo trên GPU...", flush=True)
    tts = Vieneu(mode="v3turbo")
    ref_path = AUTO_MEDIA / "storage" / "voices" / "vieneu" / "Cô Giáo Vy.wav"
    waveform, reference_rate = sf.read(str(ref_path), dtype="float32", always_2d=True)
    tensor_audio = torch.as_tensor(waveform.T)
    if tensor_audio.shape[0] > 1:
        tensor_audio = torch.mean(tensor_audio, dim=0, keepdim=True)
    speaker_emb, codes = tts.engine.prepare_reference(
        tensor_audio,
        sr=reference_rate,
        denoise=False,
        use_ref_codes=True,
    )
    primary_voice = {"speaker_emb": speaker_emb, "codes": codes}

    success = 0
    failed = []
    started = time.time()
    for index, task in enumerate(pending, 1):
        lesson_id = task["lessonId"]
        plan = task["prosodyPlan"]
        print(
            f"[{index}/{len(pending)}] 🎙️ {lesson_id} — {task['readingPassage']['title']} "
            f"({plan['stanzaCount']} khổ, {plan['lineCount']} dòng)",
            flush=True,
        )
        try:
            audio, sample_rate = synthesize_plan(tts, primary_voice, plan)
            effective_tempo = select_effective_tempo(audio, sample_rate, plan)
            wav_path = BACKUP_PRIMARY / f"{lesson_id}.wav"
            mp3_path = PRIMARY_DIR / f"{lesson_id}.mp3"
            duration_ms, mp3_size = write_atomic_audio(
                audio,
                sample_rate,
                effective_tempo,
                wav_path,
                mp3_path,
            )
            previous = manifest.get(lesson_id, {})
            manifest[lesson_id] = {
                "lessonId": lesson_id,
                "primaryPath": f"/audio/curriculum/{lesson_id}.mp3",
                "primaryVoice": "Cô Giáo Vy",
                "transcriptHash": task["textHash"],
                "lessonVersion": max(1, int(previous.get("lessonVersion", 1))) + 1,
                "sourcePages": task["sourcePages"],
                "genre": task["readingPassage"]["genre"],
                "prosodyVersion": plan["version"],
                "prosodyHash": plan["prosodyHash"],
                "segmentCount": len(plan["segments"]),
                "stanzaCount": plan["stanzaCount"],
                "lineCount": plan["lineCount"],
                "durationMs": duration_ms,
                "effectiveTempo": round(effective_tempo, 5),
                "wordsPerMinute": round(
                    sum(len(segment.get("text", "").split()) for segment in plan["segments"])
                    * 60000 / duration_ms,
                    1,
                ),
                "audioSha256": sha256_file(mp3_path),
                "isExpressive": True,
            }
            MANIFEST_PATH.write_text(
                json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
                encoding="utf-8",
            )
            success += 1
            print(f"   ✅ {duration_ms / 1000:.1f}s · {mp3_size:,} bytes", flush=True)
        except Exception as error:
            failed.append({"lessonId": lesson_id, "error": str(error)})
            print(f"   ❌ {error}", flush=True)

    print(
        f"🏁 Hoàn tất sau {(time.time() - started) / 60:.1f} phút: "
        f"{success}/{len(pending)} thành công, {len(failed)} lỗi.",
        flush=True,
    )
    if failed:
        print(json.dumps(failed, ensure_ascii=False, indent=2), flush=True)
        raise SystemExit(1)


if __name__ == "__main__":
    main()
