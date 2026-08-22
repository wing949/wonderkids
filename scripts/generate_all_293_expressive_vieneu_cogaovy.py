# -*- coding: utf-8 -*-
import sys
import os
import time
import json
import re
import hashlib
import subprocess
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
BACKUP_DIR = WORKSPACE / "backup_audio_wav" / "curriculum"
BACKUP_PRIMARY = BACKUP_DIR / "primary"
MANIFEST_PATH = WORKSPACE / "src" / "data" / "curriculum" / "vietnamese" / "audioManifest.generated.json"
TASKS_PATH = WORKSPACE / "scripts" / "target_293_structured_reading_passages.json"

PRIMARY_DIR.mkdir(parents=True, exist_ok=True)
BACKUP_PRIMARY.mkdir(parents=True, exist_ok=True)

def enrich_reading_passage_prosody(passage: dict) -> tuple[str, bool]:
    """
    Chuẩn hóa ngữ điệu sư phạm truyền cảm cho Cô Giáo Vy:
    - Khoảng nghỉ tự nhiên sau Tiêu đề bài đọc
    - Ngắt nhịp cuối mỗi dòng thơ / khổ thơ đối với các bài thơ
    - Khoảng dừng thở tự nhiên giữa các câu văn và lời thoại nhân vật đối với văn xuôi
    - Khoảng nghỉ trang trọng trước tên tác giả
    """
    title = passage.get("title", "").strip()
    content_lines = passage.get("content", [])
    author = passage.get("author", "").strip()
    
    parts = []
    
    # 1. Tiêu đề
    clean_title = re.sub(r'[*#_~`💡✨⭐🔊🎉🏖️•—]', '', title).strip()
    if clean_title:
        parts.append(f"{clean_title}:... ")
        
    # 2. Phân loại Thơ hay Văn xuôi
    non_empty_lines = [l.strip() for l in content_lines if l.strip()]
    avg_words = sum(len(l.split()) for l in non_empty_lines) / max(1, len(non_empty_lines))
    is_poem = len(non_empty_lines) >= 4 and avg_words <= 9
    
    for line in non_empty_lines:
        l = re.sub(r'[*#_~`💡✨⭐🔊🎉🏖️•]', '', line).strip()
        if not l:
            continue
            
        if is_poem:
            # Ngắt nhịp cuối dòng thơ
            if not l.endswith(('.', '!', '?', '...', ':', ';')):
                l += '...'
            elif l.endswith(','):
                l = l[:-1] + '... '
            parts.append(l)
        else:
            # Văn xuôi: tạo khoảng nghỉ tự nhiên giữa các câu và lời thoại
            l = re.sub(r'([.!?])\s+([A-ZÀ-Ỹ0-9])', r'\1... \2', l)
            l = re.sub(r':\s*', r':... ', l)
            l = re.sub(r';\s*', r';... ', l)
            l = re.sub(r'\s*–\s*', r'... – ', l)
            parts.append(l)
            
    if author:
        clean_author = re.sub(r'[*#_~`💡✨⭐🔊🎉🏖️•()Theo\s+]', '', author).strip()
        if clean_author:
            parts.append(f"... Tác giả: {clean_author}.")
            
    full_text = ' '.join(parts)
    full_text = re.sub(r'\.{4,}', '...', full_text)
    full_text = re.sub(r'\s+', ' ', full_text).strip()
    return full_text, is_poem

print("=" * 70, flush=True)
print("🚀 THU ÂM LẠI 293 BÀI TIẾNG VIỆT SGK — DIỄN CẢM & NGẮT NGHỈ CHUẨN SƯ PHẠM", flush=True)
print("=" * 70, flush=True)

tts = Vieneu(mode="v3turbo")

# Primary Voice: Cô Giáo Vy (Cloned reference)
ref_path = AUTO_MEDIA / "storage" / "voices" / "vieneu" / "Cô Giáo Vy.wav"
print(f"🎙️ Đang nạp giọng chính: Cô Giáo Vy từ {ref_path.name}...", flush=True)
waveform, sample_rate = sf.read(str(ref_path), dtype='float32', always_2d=True)
tensor_audio = torch.as_tensor(waveform.T)
if tensor_audio.shape[0] > 1:
    tensor_audio = torch.mean(tensor_audio, dim=0, keepdim=True)
speaker_emb, codes = tts.engine.prepare_reference(tensor_audio, sr=sample_rate, denoise=False, use_ref_codes=True)
primary_voice = {'speaker_emb': speaker_emb, 'codes': codes}

print("✅ Đã sẵn sàng: Giọng Cô Giáo Vy ⭐ (Diễn cảm, ngắt nghỉ câu & bài thơ)!\n", flush=True)

# Load tasks
with open(TASKS_PATH, "r", encoding="utf-8") as f:
    all_lessons = json.load(f)

print(f"📚 Tổng số bài đọc SGK cần thu âm lại: {len(all_lessons)} bài.", flush=True)

# Load or init manifest
manifest = {}
if MANIFEST_PATH.exists():
    try:
        with open(MANIFEST_PATH, "r", encoding="utf-8") as f:
            manifest = json.load(f)
    except Exception:
        manifest = {}

count_success = 0
count_skipped = 0
count_failed = 0
start_time = time.time()

def save_mp3_and_wav(audio_obj, wav_file: Path, mp3_file: Path):
    wav_bytes = audio_to_wav_bytes(audio_obj, tts)
    wav_file.write_bytes(wav_bytes)
    cmd = [
        "ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
        "-i", str(wav_file),
        "-vn", "-ar", "44100", "-ac", "2", "-b:a", "128k",
        str(mp3_file)
    ]
    subprocess.run(cmd, check=True)
    return mp3_file.stat().st_size

for idx, lesson in enumerate(all_lessons, 1):
    lesson_id = lesson["lessonId"]
    passage = lesson["readingPassage"]
    raw_hash = lesson["rawTranscriptHash"]
    source_pages = lesson["sourcePages"]

    expressive_text, is_poem = enrich_reading_passage_prosody(passage)
    prosody_hash = hashlib.sha256(expressive_text.encode('utf-8')).hexdigest()

    primary_mp3 = PRIMARY_DIR / f"{lesson_id}.mp3"
    backup_pri_wav = BACKUP_PRIMARY / f"{lesson_id}.wav"

    # Check if already synthesized with new expressive prosody hash
    if primary_mp3.exists():
        curr = manifest.get(lesson_id, {})
        if (
            curr.get("prosodyHash") == prosody_hash
            and curr.get("primaryVoice") == "Cô Giáo Vy"
            and curr.get("isExpressive") is True
            and primary_mp3.stat().st_size > 10000
        ):
            count_skipped += 1
            if count_skipped % 20 == 0 or idx == len(all_lessons):
                print(f"⏩ [{idx}/{len(all_lessons)}] Đã có sẵn & chuẩn diễn cảm: {lesson_id} (Bỏ qua: {count_skipped})", flush=True)
            continue

    item_start = time.time()
    type_str = "Thơ" if is_poem else "Văn xuôi"
    print(f"[{idx}/{len(all_lessons)}] 🎙️ Đang thu âm diễn cảm [{type_str}]: {lesson_id} — {lesson['title']} ({len(expressive_text)} ký tự)...", flush=True)

    try:
        # Primary: Cô Giáo Vy with temperature for expressive musicality
        pri_out = tts.infer(text=expressive_text, voice=primary_voice, temperature=0.38)
        pri_mp3_size = save_mp3_and_wav(pri_out, backup_pri_wav, primary_mp3)

        manifest[lesson_id] = {
            "lessonId": lesson_id,
            "primaryPath": f"/audio/curriculum/{lesson_id}.mp3",
            "fallbackPath": f"/audio/curriculum/{lesson_id}.mp3",
            "primaryVoice": "Cô Giáo Vy",
            "fallbackVoice": "Cô Giáo Vy",
            "transcriptHash": raw_hash,
            "prosodyHash": prosody_hash,
            "lessonVersion": 2,
            "sourcePages": source_pages,
            "isExpressive": True,
            "isPoem": is_poem
        }

        count_success += 1

        with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
            json.dump(manifest, f, ensure_ascii=False, indent=2)

        elapsed_total = time.time() - start_time
        avg_per_item = elapsed_total / max(1, count_success)
        remain_items = len(all_lessons) - (count_success + count_skipped)
        eta_min = (remain_items * avg_per_item) / 60

        print(
            f"   ✅ [Tiến độ {count_success + count_skipped}/{len(all_lessons)}] {lesson_id} "
            f"({pri_mp3_size:,} bytes | {time.time()-item_start:.1f}s) — ETA: {eta_min:.1f} phút",
            flush=True,
        )

    except Exception as e:
        count_failed += 1
        print(f"   ❌ Lỗi khi thu âm {lesson_id}: {e}", flush=True)

# Final save
with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
    json.dump(manifest, f, ensure_ascii=False, indent=2)

total_time = time.time() - start_time
print("\n" + "=" * 70, flush=True)
print(f"🎉 HOÀN THÀNH TOÀN BỘ THU ÂM LẠI 293 BÀI TIẾNG VIỆT SGK (CÔ GIÁO VY DIỄN CẢM)!", flush=True)
print(f"   ⏱️ Tổng thời gian: {total_time/60:.1f} phút", flush=True)
print(f"   ✅ Thu âm mới thành công: {count_success} bài", flush=True)
print(f"   ⏩ Đã có sẵn & bỏ qua: {count_skipped} bài", flush=True)
print(f"   ❌ Thất bại: {count_failed} bài", flush=True)
print(f"   📁 Manifest cập nhật: {len(manifest)} bài tại {MANIFEST_PATH.name}", flush=True)
print(f"   🎙️ Giọng chính: Cô Giáo Vy (Diễn cảm, ngắt nghỉ câu & ngắt nhịp thơ)", flush=True)
print("=" * 70 + "\n", flush=True)
