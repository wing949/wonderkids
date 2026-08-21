# -*- coding: utf-8 -*-
import sys
import os
import re
import json
from pathlib import Path
import soundfile as sf
import torch

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

AUTO_MEDIA_DIR = r"C:\Users\TVCHUONG\Desktop\AI\07_AutoMedia"
sys.path.insert(0, os.path.join(AUTO_MEDIA_DIR, "src"))

from vieneu import Vieneu
from auto_video_pipeline.adapters.tts.vieneu_helpers import audio_to_wav_bytes

WORKSPACE_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
OUT_DIR = os.path.join(WORKSPACE_DIR, "public", "audio", "curriculum")
FALLBACK_DIR = os.path.join(OUT_DIR, "fallback")

print("🚀 Khởi tạo model VieNeu-TTS (mode=v3turbo) cho giọng Cô Giáo Vy...", flush=True)
tts = Vieneu(mode="v3turbo")

ref_audio_path = r"C:\Users\TVCHUONG\Desktop\AI\07_AutoMedia\storage\voices\vieneu\Cô Giáo Vy.wav"
waveform, sample_rate = sf.read(ref_audio_path, dtype='float32', always_2d=True)
tensor_audio = torch.as_tensor(waveform.T)
if tensor_audio.shape[0] > 1:
    tensor_audio = torch.mean(tensor_audio, dim=0, keepdim=True)

speaker_emb, codes = tts.engine.prepare_reference(tensor_audio, sr=sample_rate, denoise=False, use_ref_codes=True)
voice_data = {'speaker_emb': speaker_emb, 'codes': codes}

passages_file = os.path.join(WORKSPACE_DIR, "src", "data", "curriculum", "vietnamese", "readingPassages.ts")
with open(passages_file, "r", encoding="utf-8") as f:
    ts_code = f.read()

json_match = re.search(r"export const VIETNAMESE_READING_PASSAGES:\s*Record<string,\s*ReadingLessonBundle>\s*=\s*(\{[\s\S]*?\n\};)", ts_code)
if not json_match:
    print("❌ Không tìm thấy dữ liệu", flush=True)
    sys.exit(1)

data = json.loads(json_match.group(1).rstrip(";"))

# Only process grade 1 (tv-g1-b1 to tv-g1-b30)
g1_keys = [k for k in data.keys() if k.startswith('tv-g1-b')]
print(f"🎙️ Bắt đầu thu âm lại {len(g1_keys)} bài Tiếng Việt Lớp 1 chuẩn 100% SGK bằng giọng Cô Giáo Vy...", flush=True)

for idx, lesson_id in enumerate(g1_keys, 1):
    item = data[lesson_id]
    passage = item["passage"]
    title = passage["title"]
    text = passage.get("audioNarration") or (title + ". " + " ".join(passage["content"]))

    path_b = Path(OUT_DIR) / f"{lesson_id}.wav"
    path_l = Path(OUT_DIR) / f"{lesson_id.replace('-b', '-l')}.wav"
    path_fb_b = Path(FALLBACK_DIR) / f"{lesson_id}.wav"
    path_fb_l = Path(FALLBACK_DIR) / f"{lesson_id.replace('-b', '-l')}.wav"

    print(f"[{idx}/{len(g1_keys)}] Thu âm: {lesson_id} — {title}...", flush=True)
    try:
        audio = tts.infer(text=text, voice=voice_data)
        wav_bytes = audio_to_wav_bytes(audio, tts)

        path_b.write_bytes(wav_bytes)
        path_l.write_bytes(wav_bytes)
        # Also update fallback if needed
        path_fb_b.write_bytes(wav_bytes)
        path_fb_l.write_bytes(wav_bytes)

        print(f"   ✅ Hoàn tất ({len(wav_bytes)} bytes)", flush=True)
    except Exception as e:
        print(f"   ❌ Lỗi: {e}", flush=True)

print("🎉 ĐÃ HOÀN TẤT THU ÂM TOÀN BỘ BÀI ĐỌC TIẾNG VIỆT LỚP 1 MỚI!", flush=True)
