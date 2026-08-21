# -*- coding: utf-8 -*-
"""Add an audible provenance disclosure to every Vietnamese lesson asset.

Primary assets keep the Cô Giáo Vy voice. Fallback assets use Cô Mỹ Duyên.
Grade-1 fallback files that were duplicates of the primary voice are rebuilt
with Cô Mỹ Duyên before the disclosure is attached.
"""

import hashlib
import io
import json
import os
import re
import sys
import wave
from pathlib import Path

import soundfile as sf
import torch

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")

WORKSPACE = Path(__file__).resolve().parents[1]
AUTO_MEDIA = Path(r"C:\Users\TVCHUONG\Desktop\AI\07_AutoMedia")
sys.path.insert(0, str(AUTO_MEDIA / "src"))

from vieneu import Vieneu  # noqa: E402
from auto_video_pipeline.adapters.tts.vieneu_helpers import audio_to_wav_bytes  # noqa: E402

DISCLOSURE_TEXT = "Đây là nội dung do WonderKids biên soạn, không phải nguyên văn sách giáo khoa."
PRIMARY_DIR = WORKSPACE / "public" / "audio" / "curriculum"
FALLBACK_DIR = PRIMARY_DIR / "fallback"
PASSAGES_PATH = WORKSPACE / "src" / "data" / "curriculum" / "vietnamese" / "readingPassages.ts"
SILENCE_FRAMES = 12_000  # 0.25 seconds at 48 kHz.


def wav_parts(wav_bytes: bytes):
    with wave.open(io.BytesIO(wav_bytes), "rb") as reader:
        params = reader.getparams()
        frames = reader.readframes(reader.getnframes())
    return params, frames


def wav_bytes(params, frames: bytes) -> bytes:
    output = io.BytesIO()
    with wave.open(output, "wb") as writer:
        writer.setparams(params)
        writer.writeframes(frames)
    return output.getvalue()


def wav_format(params):
    return (params.nchannels, params.sampwidth, params.framerate, params.comptype)


def audio_bytes(tts, text: str, voice) -> bytes:
    return audio_to_wav_bytes(tts.infer(text=text, voice=voice), tts)


def prepend_disclosure(path: Path, disclosure_params, disclosure_frames: bytes):
    current = path.read_bytes()
    current_params, current_frames = wav_parts(current)
    if current_frames.startswith(disclosure_frames):
        return False
    if wav_format(current_params) != wav_format(disclosure_params):
        raise RuntimeError(f"Thông số WAV không khớp: {path}")
    silence = bytes(SILENCE_FRAMES * current_params.nchannels * current_params.sampwidth)
    path.write_bytes(wav_bytes(current_params, disclosure_frames + silence + current_frames))
    return True


def load_passages():
    source = PASSAGES_PATH.read_text(encoding="utf-8")
    match = re.search(
        r"export const VIETNAMESE_READING_PASSAGES:\s*Record<string,\s*ReadingLessonBundle>\s*=\s*(\{[\s\S]*?\n\};)",
        source,
    )
    if not match:
        raise RuntimeError("Không đọc được readingPassages.ts")
    return json.loads(match.group(1).rstrip(";"))


def main():
    primary_files = sorted(PRIMARY_DIR.glob("tv-g*-b*.wav"))
    duplicate_fallbacks = {
        path.name
        for path in primary_files
        if (FALLBACK_DIR / path.name).exists()
        and hashlib.sha256(path.read_bytes()).digest()
        == hashlib.sha256((FALLBACK_DIR / path.name).read_bytes()).digest()
    }

    print("Khởi tạo VieNeu-TTS...", flush=True)
    tts = Vieneu(mode="v3turbo")
    fallback_voice = tts.get_preset_voice("Mỹ Duyên")

    ref_path = AUTO_MEDIA / "storage" / "voices" / "vieneu" / "Cô Giáo Vy.wav"
    waveform, sample_rate = sf.read(ref_path, dtype="float32", always_2d=True)
    tensor_audio = torch.as_tensor(waveform.T)
    if tensor_audio.shape[0] > 1:
        tensor_audio = torch.mean(tensor_audio, dim=0, keepdim=True)
    speaker_emb, codes = tts.engine.prepare_reference(
        tensor_audio, sr=sample_rate, denoise=False, use_ref_codes=True
    )
    primary_voice = {"speaker_emb": speaker_emb, "codes": codes}

    primary_disclosure = audio_bytes(tts, DISCLOSURE_TEXT, primary_voice)
    fallback_disclosure = audio_bytes(tts, DISCLOSURE_TEXT, fallback_voice)
    primary_params, primary_frames = wav_parts(primary_disclosure)
    fallback_params, fallback_frames = wav_parts(fallback_disclosure)

    passages = load_passages()
    rebuilt = 0
    for file_name in sorted(duplicate_fallbacks):
        lesson_id = file_name.removesuffix(".wav")
        passage = passages.get(lesson_id) or passages.get(lesson_id.replace("-b", "-l"))
        if not passage:
            raise RuntimeError(f"Thiếu transcript: {lesson_id}")
        reading = passage["passage"]
        narration = reading.get("audioNarration") or f'{reading["title"]}. {" ".join(reading["content"])}'
        body_params, body_frames = wav_parts(audio_bytes(tts, narration, fallback_voice))
        if wav_format(body_params) != wav_format(fallback_params):
            raise RuntimeError(f"Thông số fallback không khớp: {lesson_id}")
        silence = bytes(SILENCE_FRAMES * body_params.nchannels * body_params.sampwidth)
        (FALLBACK_DIR / file_name).write_bytes(
            wav_bytes(body_params, fallback_frames + silence + body_frames)
        )
        rebuilt += 1
        print(f"Đã dựng lại fallback Mỹ Duyên: {lesson_id}", flush=True)

    primary_updated = sum(
        prepend_disclosure(path, primary_params, primary_frames) for path in primary_files
    )
    fallback_updated = sum(
        prepend_disclosure(path, fallback_params, fallback_frames)
        for path in sorted(FALLBACK_DIR.glob("tv-g*-b*.wav"))
    )

    metadata = {
        "audibleDisclosureText": DISCLOSURE_TEXT,
        "primaryDisclosurePcmBytes": len(primary_frames),
        "primaryDisclosurePcmSha256": hashlib.sha256(primary_frames).hexdigest(),
        "fallbackDisclosurePcmBytes": len(fallback_frames),
        "fallbackDisclosurePcmSha256": hashlib.sha256(fallback_frames).hexdigest(),
        "primaryUpdated": primary_updated,
        "fallbackUpdated": fallback_updated,
        "fallbackRebuiltWithMyDuyen": rebuilt,
    }
    print(json.dumps(metadata, ensure_ascii=False, indent=2), flush=True)


if __name__ == "__main__":
    main()
