# -*- coding: utf-8 -*-
import sys
import os
import re
import json
import time
from pathlib import Path
import soundfile as sf
import torch

# Ensure UTF-8 stdout on Windows
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

AUTO_MEDIA_DIR = r"C:\Users\TVCHUONG\Desktop\AI\07_AutoMedia"
sys.path.insert(0, os.path.join(AUTO_MEDIA_DIR, "src"))

from vieneu import Vieneu
from auto_video_pipeline.adapters.tts.vieneu_helpers import audio_to_wav_bytes

WORKSPACE_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
OUT_DIR = os.path.join(WORKSPACE_DIR, "public", "audio", "curriculum")
FEEDBACK_DIR = os.path.join(WORKSPACE_DIR, "public", "audio", "feedback")

os.makedirs(OUT_DIR, exist_ok=True)
os.makedirs(FEEDBACK_DIR, exist_ok=True)

print("🚀 Khởi tạo model VieNeu-TTS (mode=v3turbo) cho giọng Cô Giáo Vy...", flush=True)
tts = Vieneu(mode="v3turbo")

ref_audio_path = r"C:\Users\TVCHUONG\Desktop\AI\07_AutoMedia\storage\voices\vieneu\Cô Giáo Vy.wav"
print(f"🎙️ Đang nạp mẫu giọng Cô Giáo Vy từ: {ref_audio_path}", flush=True)

waveform, sample_rate = sf.read(ref_audio_path, dtype='float32', always_2d=True)
tensor_audio = torch.as_tensor(waveform.T)
if tensor_audio.shape[0] > 1:
    tensor_audio = torch.mean(tensor_audio, dim=0, keepdim=True)

speaker_emb, codes = tts.engine.prepare_reference(tensor_audio, sr=sample_rate, denoise=False, use_ref_codes=True)
voice_data = {'speaker_emb': speaker_emb, 'codes': codes}
print("✅ Giọng Cô Giáo Vy đã được nạp thành công!", flush=True)

# -------------------------------------------------------------------------
# PHẦN 1: THU ÂM CÁC CÂU KHEN NGỢI & ĐỘNG VIÊN (FEEDBACK SFX)
# -------------------------------------------------------------------------
feedback_phrases = [
    ("dung-roi", "Đúng rồi!"),
    ("gioi-qua", "Giỏi quá!"),
    ("chinh-xac", "Chính xác rồi!"),
    ("xuat-sac", "Xuất sắc lắm!"),
    ("be-gioi-qua", "Bé giỏi quá!"),
    ("tuyet-voi", "Tuyệt vời!"),
    ("co-len-nao", "Cố lên nào!"),
    ("thu-lai-nhe", "Bé thử lại một lần nữa nhé!")
]

print(f"\n🌟 Bắt đầu thu âm {len(feedback_phrases)} câu khen ngợi / động viên...", flush=True)
for file_key, text in feedback_phrases:
    print(f"   🎙️ Đang thu âm câu: \"{text}\" -> {file_key}.wav...", flush=True)
    try:
        audio = tts.infer(text=text, voice=voice_data)
        wav_bytes = audio_to_wav_bytes(audio, tts)
        wav_path = os.path.join(FEEDBACK_DIR, f"{file_key}.wav")
        Path(wav_path).write_bytes(wav_bytes)
        print(f"      ✅ Hoàn tất {file_key}.wav ({len(wav_bytes)} bytes)", flush=True)
    except Exception as e:
        print(f"      ❌ Lỗi khi thu âm câu {file_key}: {e}", flush=True)

# -------------------------------------------------------------------------
# PHẦN 2: THU ÂM 132 BÀI ĐỌC TIẾNG VIỆT LỚP 1 - LỚP 5
# -------------------------------------------------------------------------
passages_file = os.path.join(WORKSPACE_DIR, "src", "data", "curriculum", "vietnamese", "readingPassages.ts")
with open(passages_file, "r", encoding="utf-8") as f:
    ts_code = f.read()

json_match = re.search(r"export const VIETNAMESE_READING_PASSAGES:\s*Record<string,\s*ReadingLessonBundle>\s*=\s*(\{[\s\S]*?\n\};)", ts_code)
if not json_match:
    print("❌ Không thể đọc danh sách bài đọc từ readingPassages.ts", flush=True)
    sys.exit(1)

json_str = json_match.group(1).rstrip(";")
data = json.loads(json_str)

tasks = []
for lesson_id, item in data.items():
    passage = item.get("passage", {})
    title = passage.get("title", "")
    content = passage.get("content", [])
    audio_narration = passage.get("audioNarration")
    if not audio_narration:
        audio_narration = f"{title}. " + " ".join(content)

    normalized_b = lesson_id.replace("-l", "-b")
    tasks.append({
        "id": normalized_b,
        "title": title,
        "text": audio_narration
    })

print(f"\n📚 Bắt đầu thu âm toàn bộ {len(tasks)} bài đọc bằng giọng Cô Giáo Vy...", flush=True)

success_count = 0
for idx, task in enumerate(tasks, 1):
    lesson_id = task["id"]
    title = task["title"]
    text = task["text"]

    path_b = Path(OUT_DIR) / f"{lesson_id}.wav"
    path_l = Path(OUT_DIR) / f"{lesson_id.replace('-b', '-l')}.wav"

    print(f"[{idx}/{len(tasks)}] Đang thu âm: {lesson_id} — {title}...", flush=True)
    try:
        audio = tts.infer(text=text, voice=voice_data)
        wav_bytes = audio_to_wav_bytes(audio, tts)

        path_b.write_bytes(wav_bytes)
        path_l.write_bytes(wav_bytes)

        success_count += 1
        print(f"   ✅ Hoàn tất ({len(wav_bytes)} bytes)", flush=True)
    except Exception as e:
        print(f"   ❌ Lỗi khi thu âm {lesson_id}: {e}", flush=True)

print(f"\n🎉 HOÀN TẤT 100%! ĐÃ THU ÂM THÀNH CÔNG {success_count}/{len(tasks)} BÀI ĐỌC BẰNG GIỌNG CÔ GIÁO VY.", flush=True)
