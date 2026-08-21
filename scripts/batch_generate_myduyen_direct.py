# -*- coding: utf-8 -*-
import sys
import os
import re
import json

# Ensure UTF-8 stdout on Windows
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

# Add 07_AutoMedia to python path
AUTO_MEDIA_DIR = r"C:\Users\TVCHUONG\Desktop\AI\07_AutoMedia"
sys.path.insert(0, os.path.join(AUTO_MEDIA_DIR, "src"))

from vieneu import Vieneu
from auto_video_pipeline.adapters.tts.vieneu_helpers import audio_to_wav_bytes

WORKSPACE_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
OUT_DIR = os.path.join(WORKSPACE_DIR, "public", "audio", "curriculum")
os.makedirs(OUT_DIR, exist_ok=True)

# Read readingPassages.ts
passages_file = os.path.join(WORKSPACE_DIR, "src", "data", "curriculum", "vietnamese", "readingPassages.ts")
with open(passages_file, "r", encoding="utf-8") as f:
    ts_code = f.read()

# Extract json object
json_match = re.search(r"export const VIETNAMESE_READING_PASSAGES:\s*Record<string,\s*ReadingLessonBundle>\s*=\s*(\{[\s\S]*?\n\};)", ts_code)
if json_match:
    json_str = json_match.group(1).rstrip(";")
    data = json.loads(json_str)
else:
    print("❌ Could not parse VIETNAMESE_READING_PASSAGES JSON from readingPassages.ts")
    sys.exit(1)

print("🚀 Khởi tạo model VieNeu-TTS (mode=v3turbo) cho giọng Cô Mỹ Duyên...")
tts = Vieneu(mode="v3turbo")
voice_data = tts.get_preset_voice("Mỹ Duyên")
print("✅ Model VieNeu-TTS & Voice Profile [Mỹ Duyên] đã sẵn sàng!")

tasks = []
for lesson_id, item in data.items():
    passage = item.get("passage", {})
    title = passage.get("title", "")
    content = passage.get("content", [])
    audio_narration = passage.get("audioNarration")
    if not audio_narration:
        audio_narration = f"{title}. " + " ".join(content)

    normalized_b = lesson_id.replace("-l", "-b")
    wav_path = os.path.join(OUT_DIR, f"{normalized_b}.wav")

    tasks.append({
        "id": normalized_b,
        "title": title,
        "text": audio_narration,
        "wav_path": wav_path
    })

print(f"📊 Tổng số bài đọc cần cập nhật âm thanh chuẩn: {len(tasks)} bài\n", flush=True)

success_count = 0
for idx, task in enumerate(tasks, 1):
    print(f"[{idx}/{len(tasks)}] Đang thu âm bài đọc: {task['id']} — {task['title']}...", flush=True)
    try:
        audio = tts.infer(text=task["text"], voice=voice_data)
        wav_bytes = audio_to_wav_bytes(audio, tts)

        wav_path_b = task["wav_path"]
        wav_path_l = os.path.join(OUT_DIR, f"{task['id'].replace('-b', '-l')}.wav")

        with open(wav_path_b, "wb") as f:
            f.write(wav_bytes)
        with open(wav_path_l, "wb") as f:
            f.write(wav_bytes)

        success_count += 1
        print(f"   ✅ Hoàn tất ({len(wav_bytes)} bytes)", flush=True)
    except Exception as e:
        print(f"   ❌ Lỗi khi thu âm {task['id']}: {e}", flush=True)

print(f"\n🎉 HOÀN TẤT 100%! ĐÃ CẬP NHẬT THÀNH CÔNG {success_count}/{len(tasks)} FILE AUDIO BÀI ĐỌC THUẦN TÚY GIỌNG CÔ MỸ DUYÊN.", flush=True)
