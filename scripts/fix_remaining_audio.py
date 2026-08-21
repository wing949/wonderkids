# -*- coding: utf-8 -*-
import sys
import os
import re
import json
from pathlib import Path

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

passages_file = os.path.join(WORKSPACE_DIR, "src", "data", "curriculum", "vietnamese", "readingPassages.ts")
with open(passages_file, "r", encoding="utf-8") as f:
    ts_code = f.read()

json_match = re.search(r"export const VIETNAMESE_READING_PASSAGES:\s*Record<string,\s*ReadingLessonBundle>\s*=\s*(\{[\s\S]*?\n\};)", ts_code)
json_str = json_match.group(1).rstrip(";")
data = json.loads(json_str)

tts = Vieneu(mode="v3turbo")
voice_data = tts.get_preset_voice("Mỹ Duyên")

final_ids = ['tv-g4-b4', 'tv-g4-b18']

for lesson_id in final_ids:
    item = data.get(lesson_id)
    passage = item.get("passage", {})
    title = passage.get("title", "")
    content = passage.get("content", [])
    audio_narration = passage.get("audioNarration", f"{title}. " + " ".join(content))

    norm_b = lesson_id.replace("-l", "-b")
    norm_l = lesson_id.replace("-b", "-l")

    path_b = Path(OUT_DIR) / f"{norm_b}.wav"
    path_l = Path(OUT_DIR) / f"{norm_l}.wav"

    print(f"🎙️ Đang thu âm: {lesson_id} - {title}...", flush=True)
    audio = tts.infer(text=audio_narration, voice=voice_data)
    wav_bytes = audio_to_wav_bytes(audio, tts)

    path_b.write_bytes(wav_bytes)
    path_l.write_bytes(wav_bytes)
    print(f"   ✅ Thành công {lesson_id} ({len(wav_bytes)} bytes)", flush=True)

print("🎉 100% HOÀN TẤT TOÀN BỘ KHO ÂM THANH!", flush=True)
