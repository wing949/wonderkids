import sys
import os
import shutil
import glob
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')


BRAIN_DIR = r"C:\Users\TVCHUONG\.gemini\antigravity\brain\5459c139-ea01-454d-8f01-8b2b7e516ce3"
TARGET_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning\public\assets\curriculum"
os.makedirs(TARGET_DIR, exist_ok=True)

image_mappings = {
    "tv_g1_nam_3d": "tv-g1-b21.jpg",
    "tv_g2_rooster_3d": "tv-g2-b4.jpg",
    "tv_g3_coc_3d": "tv-g3-b15.jpg",
    "tv_g4_demen_3d": "tv-g4-b1.jpg",
    "tv_g5_letter_3d": "tv-g5-b1.jpg",
}

for prefix, target_name in image_mappings.items():
    matches = glob.glob(os.path.join(BRAIN_DIR, f"{prefix}_*.jpg"))
    if matches:
        latest = sorted(matches)[-1]
        dest = os.path.join(TARGET_DIR, target_name)
        shutil.copy2(latest, dest)
        print(f"✅ Đã sao chép: {latest} -> {dest}")
    else:
        print(f"❌ Không tìm thấy ảnh với prefix {prefix}")

print("\n🎉 Hoàn tất sao chép các ảnh 3D Pixar chuẩn vào public/assets/curriculum/!")
