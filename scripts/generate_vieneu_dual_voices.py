# -*- coding: utf-8 -*-
import sys
import os
import re
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

PRIMARY_DIR.mkdir(parents=True, exist_ok=True)
FALLBACK_DIR.mkdir(parents=True, exist_ok=True)

print("🚀 Khởi tạo model VieNeu-TTS (mode=v3turbo)...", flush=True)
tts = Vieneu(mode="v3turbo")

# 1. Primary Voice: Cô Giáo Vy (Cloned)
ref_path = AUTO_MEDIA / "storage" / "voices" / "vieneu" / "Cô Giáo Vy.wav"
print(f"🎙️ Đang nạp giọng chính: Cô Giáo Vy từ {ref_path.name}...", flush=True)
waveform, sample_rate = sf.read(str(ref_path), dtype='float32', always_2d=True)
tensor_audio = torch.as_tensor(waveform.T)
if tensor_audio.shape[0] > 1:
    tensor_audio = torch.mean(tensor_audio, dim=0, keepdim=True)
speaker_emb, codes = tts.engine.prepare_reference(tensor_audio, sr=sample_rate, denoise=False, use_ref_codes=True)
primary_voice = {'speaker_emb': speaker_emb, 'codes': codes}

# 2. Fallback Voice: Mỹ Duyên (Preset)
print("🎙️ Đang nạp giọng fallback: Mỹ Duyên (preset)...", flush=True)
fallback_voice = tts.get_preset_voice("Mỹ Duyên")

print("✅ Đã sẵn sàng cả 2 giọng: Cô Giáo Vy (Chính) & Mỹ Duyên (Fallback)!\n", flush=True)

# Load verified transcripts
with open(WORKSPACE / "scripts" / "all_transcripts_for_audio.json", "r", encoding="utf-8") as f:
    transcripts_map = json.load(f)

# Filter: Bỏ qua Tiếng Việt Lớp 1 Tập 1
target_lessons = []
for lesson_id, item in transcripts_map.items():
    book_id = item.get('bookId', '')
    if book_id == 'tv-g1-t1':
        continue # Bỏ qua Tiếng Việt 1 Tập 1
    target_lessons.append(item)

print(f"📚 Tổng số bài đọc cần thu âm chuẩn SGK (Bỏ qua Tiếng Việt 1 Tập 1): {len(target_lessons)} bài.", flush=True)

manifest = {}
if MANIFEST_PATH.exists():
    try:
        with open(MANIFEST_PATH, "r", encoding="utf-8") as f:
            manifest = json.load(f)
    except Exception:
        manifest = {}

# Clean manifest of Grade 1 Semester 1 if any
g1_t1_keys = [k for k in list(manifest.keys()) if k.startswith("tv-g1-t1-") or (k.startswith("tv-g1-b") and not k.startswith("tv-g1-t2"))]
for k in g1_t1_keys:
    manifest.pop(k, None)

count = 0
skipped = 0

for i, item in enumerate(target_lessons, 1):
    lesson_id = item['lessonId']
    reading = item['readingPassage']
    title = reading['title']
    narration = reading.get('audioNarration')
    if not narration:
        narration = f"Bài đọc: {title}. Tác giả: {reading['author']}. " + " ".join(reading.get('content', []))
        
    source_pages = reading.get('sourcePages', item.get('sourcePages', []))
    text_hash = hashlib.sha256(narration.encode('utf-8')).hexdigest()
    
    primary_wav = PRIMARY_DIR / f"{lesson_id}.wav"
    fallback_wav = FALLBACK_DIR / f"{lesson_id}.wav"
    
    # Check if already synthesized with identical hash & correct voice
    if primary_wav.exists() and fallback_wav.exists():
        curr_entry = manifest.get(lesson_id, {})
        if curr_entry.get('transcriptHash') == text_hash and curr_entry.get('primaryVoice') == 'Cô Giáo Vy' and curr_entry.get('fallbackVoice') == 'Mỹ Duyên':
            skipped += 1
            count += 1
            continue
            
    print(f"[{i}/{len(target_lessons)}] 🎙️ Đang thu âm ({lesson_id}): {title}...", flush=True)
    
    try:
        # 1. Primary: Cô Giáo Vy
        pri_out = tts.infer(text=narration, voice=primary_voice)
        pri_wav_bytes = audio_to_wav_bytes(pri_out, tts)
        primary_wav.write_bytes(pri_wav_bytes)
        
        # 2. Fallback: Mỹ Duyên
        fb_out = tts.infer(text=narration, voice=fallback_voice)
        fb_wav_bytes = audio_to_wav_bytes(fb_out, tts)
        fallback_wav.write_bytes(fb_wav_bytes)
        
        manifest[lesson_id] = {
            "lessonId": lesson_id,
            "primaryPath": f"/audio/curriculum/{lesson_id}.wav",
            "fallbackPath": f"/audio/curriculum/fallback/{lesson_id}.wav",
            "primaryVoice": "Cô Giáo Vy",
            "fallbackVoice": "Mỹ Duyên",
            "transcriptHash": text_hash,
            "lessonVersion": max(2, int(manifest.get(lesson_id, {}).get("lessonVersion", 0)) + 1),
            "sourcePages": source_pages
        }
        
        with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
            json.dump(manifest, f, ensure_ascii=False, indent=2)
            
        count += 1
        print(f"   ✓ Hoàn tất [Cô Giáo Vy + Mỹ Duyên]: {lesson_id} ({len(pri_wav_bytes):,} + {len(fb_wav_bytes):,} bytes)", flush=True)
    except Exception as err:
        print(f"   ❌ Lỗi bài {lesson_id}: {err}", flush=True)

print(f"\n🎉 HOÀN THÀNH THU ÂM TOÀN BỘ {count}/{len(target_lessons)} BÀI HỌC SGK!", flush=True)
print(f"   - Giọng chính: Cô Giáo Vy")
print(f"   - Giọng fallback: Mỹ Duyên")
print(f"   - Đã bỏ qua: 83 bài Tiếng Việt 1 Tập 1")
print(f"   - Đã cập nhật vào: {MANIFEST_PATH.name}")
