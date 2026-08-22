# -*- coding: utf-8 -*-
import sys
import os
import json
import shutil
import subprocess
from pathlib import Path

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

WORKSPACE = Path(r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning")
AUDIO_DIR = WORKSPACE / "public" / "audio" / "curriculum"
FALLBACK_DIR = AUDIO_DIR / "fallback"
BACKUP_DIR = WORKSPACE / "backup_audio_wav"
BACKUP_PRIMARY = BACKUP_DIR / "curriculum"
BACKUP_FALLBACK = BACKUP_PRIMARY / "fallback"
MANIFEST_PATH = WORKSPACE / "src" / "data" / "curriculum" / "vietnamese" / "audioManifest.generated.json"

BACKUP_PRIMARY.mkdir(parents=True, exist_ok=True)
BACKUP_FALLBACK.mkdir(parents=True, exist_ok=True)

print("=" * 70, flush=True)
print("🚀 BẮT ĐẦU CHUYỂN ĐỔI WAV SANG MP3 & BACKUP FILE GỐC VÀO LOCAL", flush=True)
print("=" * 70, flush=True)

# 1. Collect all WAV files in primary and fallback
primary_wavs = list(AUDIO_DIR.glob("*.wav"))
fallback_wavs = list(FALLBACK_DIR.glob("*.wav"))

print(f"📦 Tìm thấy {len(primary_wavs)} file WAV chính và {len(fallback_wavs)} file WAV fallback.", flush=True)

success_pri = 0
success_fb = 0

# Convert Primary WAV -> MP3
for i, wav_path in enumerate(primary_wavs, 1):
    lesson_id = wav_path.stem
    mp3_path = AUDIO_DIR / f"{lesson_id}.mp3"
    backup_path = BACKUP_PRIMARY / wav_path.name

    # Convert using ffmpeg
    try:
        cmd = [
            "ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
            "-i", str(wav_path),
            "-vn", "-ar", "44100", "-ac", "2", "-b:a", "128k",
            str(mp3_path)
        ]
        subprocess.run(cmd, check=True)
        # Move WAV to backup
        shutil.copy2(str(wav_path), str(backup_path))
        wav_path.unlink()
        success_pri += 1
        if i % 25 == 0 or i == len(primary_wavs):
            print(f"   [Chính {i}/{len(primary_wavs)}] ✓ Đã nén MP3 & backup: {lesson_id}.mp3 ({mp3_path.stat().st_size:,} bytes)", flush=True)
    except Exception as e:
        print(f"   ❌ Lỗi chuyển đổi {wav_path.name}: {e}", flush=True)

# Convert Fallback WAV -> MP3
for i, wav_path in enumerate(fallback_wavs, 1):
    lesson_id = wav_path.stem
    mp3_path = FALLBACK_DIR / f"{lesson_id}.mp3"
    backup_path = BACKUP_FALLBACK / wav_path.name

    # Convert using ffmpeg
    try:
        cmd = [
            "ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
            "-i", str(wav_path),
            "-vn", "-ar", "44100", "-ac", "2", "-b:a", "128k",
            str(mp3_path)
        ]
        subprocess.run(cmd, check=True)
        # Move WAV to backup
        shutil.copy2(str(wav_path), str(backup_path))
        wav_path.unlink()
        success_fb += 1
        if i % 25 == 0 or i == len(fallback_wavs):
            print(f"   [Fallback {i}/{len(fallback_wavs)}] ✓ Đã nén MP3 & backup: {lesson_id}.mp3 ({mp3_path.stat().st_size:,} bytes)", flush=True)
    except Exception as e:
        print(f"   ❌ Lỗi chuyển đổi fallback {wav_path.name}: {e}", flush=True)

# 2. Update Manifest with .mp3 paths
if MANIFEST_PATH.exists():
    with open(MANIFEST_PATH, "r", encoding="utf-8") as f:
        manifest = json.load(f)

    for lid, entry in manifest.items():
        if "primaryPath" in entry:
            entry["primaryPath"] = entry["primaryPath"].replace(".wav", ".mp3")
        if "fallbackPath" in entry:
            entry["fallbackPath"] = entry["fallbackPath"].replace(".wav", ".mp3")

    with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)
    print(f"\n📝 Đã cập nhật toàn bộ đường dẫn MP3 trong manifest: {MANIFEST_PATH.name}", flush=True)

print("\n" + "=" * 70, flush=True)
print("🎉 HOÀN TẤT CHUYỂN ĐỔI SANG MP3 & BACKUP LOCAL THÀNH CÔNG!")
print(f"   - File MP3 chính hoàn tất: {success_pri}")
print(f"   - File MP3 fallback hoàn tất: {success_fb}")
print(f"   - File WAV gốc đã lưu an toàn tại: {BACKUP_DIR.name}/")
print("=" * 70 + "\n", flush=True)
