# -*- coding: utf-8 -*-
import sys
import os
import time
import json
import hashlib
from pathlib import Path
import soundfile as sf
import torch

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

WORKSPACE = Path(r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning")
AUTO_MEDIA = Path(r"C:\Users\TVCHUONG\Desktop\AI\07_AutoMedia")
sys.path.insert(0, str(AUTO_MEDIA / "src"))

from vieneu import Vieneu
from auto_video_pipeline.adapters.tts.vieneu_helpers import audio_to_wav_bytes

PRIMARY_DIR = WORKSPACE / "public" / "audio" / "curriculum"
FALLBACK_DIR = PRIMARY_DIR / "fallback"
MANIFEST_PATH = WORKSPACE / "src" / "data" / "curriculum" / "vietnamese" / "audioManifest.generated.json"
TASKS_PATH = WORKSPACE / "scripts" / "target_293_audio_tasks.json"

PRIMARY_DIR.mkdir(parents=True, exist_ok=True)
FALLBACK_DIR.mkdir(parents=True, exist_ok=True)

print("=" * 70, flush=True)
print("🚀 KHỞI ĐỘNG HỆ THỐNG THU ÂM VIENEU-TTS (v3turbo) TRÊN GPU RTX 4070 SUPER", flush=True)
print("=" * 70, flush=True)

tts = Vieneu(mode="v3turbo")

# 1. Primary Voice: Cô Giáo Vy (Cloned reference)
ref_path = AUTO_MEDIA / "storage" / "voices" / "vieneu" / "Cô Giáo Vy.wav"
print(f"🎙️ Đang nạp giọng chính: Cô Giáo Vy từ {ref_path.name}...", flush=True)
waveform, sample_rate = sf.read(str(ref_path), dtype='float32', always_2d=True)
tensor_audio = torch.as_tensor(waveform.T)
if tensor_audio.shape[0] > 1:
    tensor_audio = torch.mean(tensor_audio, dim=0, keepdim=True)
speaker_emb, codes = tts.engine.prepare_reference(tensor_audio, sr=sample_rate, denoise=False, use_ref_codes=True)
primary_voice = {'speaker_emb': speaker_emb, 'codes': codes}

# 2. Fallback Voice: Mỹ Uyên (Preset Mỹ Duyên)
print("🎙️ Đang nạp giọng dự phòng: Mỹ Uyên (preset Mỹ Duyên)...", flush=True)
fallback_voice = tts.get_preset_voice("Mỹ Duyên")

print("✅ Đã sẵn sàng: Giọng chính [Cô Giáo Vy] ⭐ & Giọng fallback [Mỹ Uyên]!\n", flush=True)

# Load tasks
with open(TASKS_PATH, "r", encoding="utf-8") as f:
    target_lessons = json.load(f)

print(f"📚 Tổng số bài Tiếng Việt cần thu âm: {len(target_lessons)} bài (Loại trừ 83 bài Tập 1 Lớp 1).\n", flush=True)

# Load or init manifest
manifest = {}
if MANIFEST_PATH.exists():
    try:
        with open(MANIFEST_PATH, "r", encoding="utf-8") as f:
            manifest = json.load(f)
    except Exception:
        manifest = {}

# Clean manifest of Grade 1 Semester 1 if any existed
for k in list(manifest.keys()):
    if k.startswith("tv-g1-t1-") or (k.startswith("tv-g1-b") and not k.startswith("tv-g1-t2") and int(k.replace("tv-g1-b", "") or 0) > 80):
        pass

count_success = 0
count_skipped = 0
count_failed = 0
start_time = time.time()

for idx, item in enumerate(target_lessons, 1):
    lesson_id = item["lessonId"]
    title = item["title"]
    text = item["text"]
    text_hash = item["textHash"]
    source_pages = item.get("sourcePages", [])

    primary_wav = PRIMARY_DIR / f"{lesson_id}.wav"
    fallback_wav = FALLBACK_DIR / f"{lesson_id}.wav"

    # Check if already synthesized with exact textHash and correct voice
    if primary_wav.exists() and fallback_wav.exists():
        curr = manifest.get(lesson_id, {})
        if (
            curr.get("transcriptHash") == text_hash
            and curr.get("primaryVoice") == "Cô Giáo Vy"
            and primary_wav.stat().st_size > 1000
            and fallback_wav.stat().st_size > 1000
        ):
            count_skipped += 1
            if count_skipped % 20 == 0 or idx == len(target_lessons):
                print(f"⏩ [{idx}/{len(target_lessons)}] Đã có sẵn & khớp hash: {lesson_id} (Đã bỏ qua: {count_skipped})", flush=True)
            continue

    item_start = time.time()
    print(f"[{idx}/{len(target_lessons)}] 🎙️ Đang thu âm: {lesson_id} — {title} ({len(text)} ký tự)...", flush=True)

    try:
        # 1. Thu âm giọng chính: Cô Giáo Vy
        pri_out = tts.infer(text=text, voice=primary_voice)
        pri_wav_bytes = audio_to_wav_bytes(pri_out, tts)
        primary_wav.write_bytes(pri_wav_bytes)

        # 2. Thu âm giọng fallback: Mỹ Uyên
        fb_out = tts.infer(text=text, voice=fallback_voice)
        fb_wav_bytes = audio_to_wav_bytes(fb_out, tts)
        fallback_wav.write_bytes(fb_wav_bytes)

        manifest[lesson_id] = {
            "lessonId": lesson_id,
            "primaryPath": f"/audio/curriculum/{lesson_id}.wav",
            "fallbackPath": f"/audio/curriculum/fallback/{lesson_id}.wav",
            "primaryVoice": "Cô Giáo Vy",
            "fallbackVoice": "Mỹ Uyên",
            "transcriptHash": text_hash,
            "lessonVersion": max(2, int(manifest.get(lesson_id, {}).get("lessonVersion", 0)) + 1),
            "sourcePages": source_pages,
        }

        # Lưu manifest ngay sau từng bài để không mất tiến độ
        with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
            json.dump(manifest, f, ensure_ascii=False, indent=2)

        count_success += 1
        elapsed_item = time.time() - item_start
        total_elapsed = time.time() - start_time
        avg_per_item = total_elapsed / (count_success + count_skipped)
        remain_items = len(target_lessons) - (count_success + count_skipped)
        eta_sec = remain_items * avg_per_item

        print(
            f"   ✅ [Xong {count_success + count_skipped}/{len(target_lessons)}] {lesson_id} "
            f"({len(pri_wav_bytes):,} bytes | {elapsed_item:.1f}s) — ETA: {eta_sec/60:.1f} phút",
            flush=True,
        )

    except Exception as e:
        count_failed += 1
        print(f"   ❌ Lỗi khi thu âm bài {lesson_id}: {e}", flush=True)

# Lọc lại manifest đảm bảo 100% chỉ có 293 bài hợp lệ
final_manifest = {}
for item in target_lessons:
    lid = item["lessonId"]
    if lid in manifest:
        final_manifest[lid] = manifest[lid]

with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
    json.dump(final_manifest, f, ensure_ascii=False, indent=2)

total_time = time.time() - start_time
print("\n" + "=" * 70, flush=True)
print(f"🎉 HOÀN THÀNH TOÀN BỘ TIẾN TRÌNH THU ÂM 293 BÀI SGK TIẾNG VIỆT!", flush=True)
print(f"   ⏱️ Tổng thời gian: {total_time/60:.1f} phút", flush=True)
print(f"   ✅ Thu âm mới thành công: {count_success} bài", flush=True)
print(f"   ⏩ Đã có sẵn & bỏ qua: {count_skipped} bài", flush=True)
print(f"   ❌ Thất bại: {count_failed} bài", flush=True)
print(f"   📁 Manifest cập nhật: {len(final_manifest)} bài tại {MANIFEST_PATH.name}", flush=True)
print(f"   🎙️ Giọng chính: Cô Giáo Vy | Giọng Fallback: Mỹ Uyên", flush=True)
print("=" * 70 + "\n", flush=True)
