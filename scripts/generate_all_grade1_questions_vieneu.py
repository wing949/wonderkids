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

PRIMARY_DIR = WORKSPACE / "public" / "audio" / "questions"
BACKUP_DIR = WORKSPACE / "backup_audio_wav" / "questions"
BACKUP_PRIMARY = BACKUP_DIR / "primary"
MANIFEST_PATH = WORKSPACE / "src" / "data" / "curriculum" / "questionAudioManifest.generated.json"
TASKS_PATH = WORKSPACE / "scripts" / "target_grade1_questions_tasks.json"

PRIMARY_DIR.mkdir(parents=True, exist_ok=True)
BACKUP_PRIMARY.mkdir(parents=True, exist_ok=True)

def enrich_expressive_text(raw_text: str, category: str = "", item_type: str = "") -> str:
    """
    Tối ưu ngữ điệu sư phạm truyền cảm cho Cô Giáo Vy:
    - Tạo khoảng nghỉ tự nhiên (...) giữa các câu, các vế câu
    - Tạo nhịp điệu diễn cảm, ngắt nghỉ đúng chỗ cho các bài thơ/câu thơ
    - Tách biệt nhịp rõ ràng giữa Tiêu đề câu hỏi (Bài 1, Câu hỏi) và Nội dung bài
    """
    if not raw_text:
        return ""
    
    text = raw_text.strip()
    
    # 1. Tách tiêu đề câu hỏi / loại bài tập với khoảng nghỉ êm ái
    text = re.sub(r'^(Bài\s+\d+)\s*\(([^)]+)\)\s*:\s*', r'\1, \2:... ', text, flags=re.IGNORECASE)
    text = re.sub(r'^(Bài\s+\d+)\s*:\s*', r'\1:... ', text, flags=re.IGNORECASE)
    text = re.sub(r'^(Câu\s+\d+)\s*:\s*', r'\1:... ', text, flags=re.IGNORECASE)
    
    # 2. Xử lý câu thơ / nhiều dòng / khổ thơ
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    if len(lines) > 1:
        formatted_lines = []
        for line in lines:
            if not line.endswith(('.', '!', '?', '...', ':', ',')):
                line += '...'
            formatted_lines.append(line)
        text = ' '.join(formatted_lines)
    
    # 3. Tạo khoảng nghỉ tự nhiên giữa các câu hoàn chỉnh
    text = re.sub(r'([.!?])\s+([A-ZÀ-Ỹ0-9])', r'\1... \2', text)
    
    # 4. Tạo nhịp điệu cho dấu hai chấm, dấu chấm phẩy
    text = re.sub(r':\s*', r':... ', text)
    text = re.sub(r';\s*', r';... ', text)
    
    # 5. Dấu ngoặc kép trích dẫn tên bài / từ ngữ
    text = re.sub(r'([“"«])', r' \1', text)
    text = re.sub(r'([”"»])', r'\1 ', text)
    
    # 6. Chuẩn hóa dấu chấm lửng và khoảng trắng
    text = re.sub(r'\.{4,}', '...', text)
    text = re.sub(r'\s+', ' ', text).strip()
    
    return text

print("=" * 70, flush=True)
print("🚀 THU ÂM CÂU HỎI & GAME LỚP 1 — DIỄN CẢM & NGẮT NGHỈ CHUẨN SƯ PHẠM", flush=True)
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
    all_tasks = json.load(f)

print(f"📚 Tổng số câu hỏi & game cần thu âm: {len(all_tasks)} mục.", flush=True)

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

for idx, task in enumerate(all_tasks, 1):
    task_id = task["id"]
    raw_text = task["text"]
    category = task["category"]
    lesson_id = task["lessonId"]
    item_type = task["type"]

    # Áp dụng ngữ điệu diễn cảm & ngắt nghỉ
    expressive_text = enrich_expressive_text(raw_text, category, item_type)
    text_hash = hashlib.sha256(expressive_text.encode('utf-8')).hexdigest()

    primary_mp3 = PRIMARY_DIR / f"{task_id}.mp3"
    backup_pri_wav = BACKUP_PRIMARY / f"{task_id}.wav"

    # Check if already synthesized with exact textHash and valid file
    if primary_mp3.exists():
        curr = manifest.get(task_id, {})
        if (
            curr.get("textHash") == text_hash
            and curr.get("primaryVoice") == "Cô Giáo Vy"
            and curr.get("isExpressive") is True
            and primary_mp3.stat().st_size > 500
        ):
            count_skipped += 1
            if count_skipped % 50 == 0 or idx == len(all_tasks):
                print(f"⏩ [{idx}/{len(all_tasks)}] Đã có sẵn & chuẩn diễn cảm: {task_id} (Bỏ qua: {count_skipped})", flush=True)
            continue

    item_start = time.time()
    if (count_success + 1) % 10 == 1 or idx == len(all_tasks):
        print(f"[{idx}/{len(all_tasks)}] 🎙️ Đang thu âm diễn cảm [{category}]: {task_id} ({len(expressive_text)} ký tự)...", flush=True)

    try:
        # Primary: Cô Giáo Vy with temperature for rich musicality
        pri_out = tts.infer(text=expressive_text, voice=primary_voice, temperature=0.38)
        pri_mp3_size = save_mp3_and_wav(pri_out, backup_pri_wav, primary_mp3)

        manifest[task_id] = {
            "id": task_id,
            "primaryPath": f"/audio/questions/{task_id}.mp3",
            "primaryVoice": "Cô Giáo Vy",
            "textHash": text_hash,
            "category": category,
            "lessonId": lesson_id,
            "type": item_type,
            "isExpressive": True
        }

        count_success += 1

        if count_success % 10 == 0:
            with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
                json.dump(manifest, f, ensure_ascii=False, indent=2)

            elapsed_total = time.time() - start_time
            avg_per_item = elapsed_total / max(1, count_success)
            remain_items = len(all_tasks) - (count_success + count_skipped)
            eta_min = (remain_items * avg_per_item) / 60

            print(
                f"   ✅ [Tiến độ {count_success + count_skipped}/{len(all_tasks)}] {task_id} "
                f"({pri_mp3_size:,} bytes | {time.time()-item_start:.2f}s) — ETA: {eta_min:.1f} phút",
                flush=True,
            )

    except Exception as e:
        count_failed += 1
        print(f"   ❌ Lỗi khi thu âm {task_id}: {e}", flush=True)

# Final save
with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
    json.dump(manifest, f, ensure_ascii=False, indent=2)

total_time = time.time() - start_time
print("\n" + "=" * 70, flush=True)
print(f"🎉 HOÀN THÀNH TOÀN BỘ THU ÂM CÂU HỎI & GAME LỚP 1 (CÔ GIÁO VY DIỄN CẢM)!", flush=True)
print(f"   ⏱️ Tổng thời gian: {total_time/60:.1f} phút", flush=True)
print(f"   ✅ Thu âm mới thành công: {count_success} mục", flush=True)
print(f"   ⏩ Đã có sẵn & bỏ qua: {count_skipped} mục", flush=True)
print(f"   ❌ Thất bại: {count_failed} mục", flush=True)
print(f"   📁 Manifest cập nhật: {len(manifest)} mục tại {MANIFEST_PATH.name}", flush=True)
print(f"   🎙️ Giọng chính: Cô Giáo Vy (Diễn cảm & Ngắt nghỉ câu)", flush=True)
print("=" * 70 + "\n", flush=True)
