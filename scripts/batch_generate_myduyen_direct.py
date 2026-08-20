import sys
import os
import re
from pathlib import Path

# Ensure UTF-8 stdout on Windows
if sys.platform == 'win32':
    import codecs
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

# Add 07_AutoMedia to python path so we can import vieneu and helpers
AUTO_MEDIA_DIR = r"C:\Users\TVCHUONG\Desktop\AI\07_AutoMedia"
sys.path.insert(0, os.path.join(AUTO_MEDIA_DIR, "src"))

from vieneu import Vieneu
from auto_video_pipeline.adapters.tts.vieneu_helpers import audio_to_wav_bytes

WORKSPACE_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
OUT_DIR = os.path.join(WORKSPACE_DIR, "public", "audio", "curriculum")
os.makedirs(OUT_DIR, exist_ok=True)

print("🚀 Khởi tạo model VieNeu-TTS (mode=v3turbo) cho giọng Cô Mỹ Duyên...")
tts = Vieneu(mode="v3turbo")
voice_data = tts.get_preset_voice("Mỹ Duyên")
print("✅ Model VieNeu-TTS & Voice Profile [Mỹ Duyên] đã sẵn sàng!")

# Scan all lessons from grade 1 to 5
grades = [1, 2, 3, 4, 5]
tasks = []

for g in grades:
    file_path = os.path.join(WORKSPACE_DIR, "src", "data", "curriculum", "vietnamese", f"grade{g}.ts")
    if not os.path.exists(file_path):
        continue
    with open(file_path, "r", encoding="utf-8") as f:
        code = f.read()

    topic_blocks = code.split("{ id: '")[1:] if "{ id: '" in code else code.split("{\n    id: '")[1:]
    if not topic_blocks:
        # Fallback split
        topic_blocks = re.split(r"\{\s*id:\s*'", code)[1:]

    for block in topic_blocks:
        id_match = re.search(r"^(tv-g\d+-[bl]\d+)'", block)
        if not id_match:
            continue
        lesson_id = id_match.group(1)
        normalized_b = lesson_id.replace("-l", "-b")
        wav_path = os.path.join(OUT_DIR, f"{normalized_b}.wav")

        title_match = re.search(r"title:\s*'([^']+)'", block)
        desc_match = re.search(r"description:\s*'([^']+)'", block)
        sum_match = re.search(r"summary:\s*'([^']+)'", block)

        title = title_match.group(1) if title_match else normalized_b
        desc = desc_match.group(1) if desc_match else ""
        summary = sum_match.group(1) if sum_match else ""

        clean_title = re.sub(r"^Bài \d+:\s*", "", title)
        full_text = f"{clean_title}. {desc} {summary}".strip()

        tasks.append({
            "grade": g,
            "id": normalized_b,
            "title": title,
            "text": full_text,
            "wav_path": wav_path,
            "already_exists": os.path.exists(wav_path)
        })

total_lessons = len(tasks)
already_done = sum(1 for t in tasks if t["already_exists"])
remaining_tasks = [t for t in tasks if not t["already_exists"]]

print(f"📊 Tổng số bài học Tiếng Việt Lớp 1-5: {total_lessons} bài")
print(f"✅ Đã có sẵn file Audio: {already_done} bài")
print(f"🎙️ Cần thu âm bổ sung: {len(remaining_tasks)} bài\n")

success_count = 0
for idx, task in enumerate(remaining_tasks, 1):
    print(f"[{idx}/{len(remaining_tasks)}] [Lớp {task['grade']}] Đang thu âm: {task['id']} — {task['title']}...")
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
        print(f"   ✅ Hoàn tất ({len(wav_bytes)} bytes)")
    except Exception as e:
        print(f"   ❌ Lỗi khi thu âm {task['id']}: {e}")

print(f"\n🎉 HOÀN TẤT 100%! ĐÃ THU ÂM THÀNH CÔNG {success_count}/{len(remaining_tasks)} BÀI HỌC CÒN LẠI.")
print(f"🌟 TỔNG SỐ BÀI HỌC CÓ AUDIO CÔ MỸ DUYÊN HIỆN TẠI: {already_done + success_count}/{total_lessons} ({((already_done + success_count)/total_lessons)*100:.1f}%)")
