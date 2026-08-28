import os
from pathlib import Path
from PIL import Image

ARTIFACTS_DIR = Path(r"C:\Users\TVCHUONG\.gemini\antigravity-ide\brain\6469d13b-2e5a-4d56-b82e-7da0baf9bc85")
TARGET_DIR = Path(r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning\public\assets\curriculum\english")
TARGET_DIR.mkdir(parents=True, exist_ok=True)

IMAGE_NAMES = [
    ("school_classroom", "school_classroom.webp"),
    ("zoo_animals", "zoo_animals.webp"),
    ("family_home", "family_home.webp"),
    ("sports_playground", "sports_playground.webp"),
    ("food_market", "food_market.webp"),
    ("transport_city", "transport_city.webp"),
    ("jobs_professions", "jobs_professions.webp"),
    ("weather_seasons", "weather_seasons.webp"),
]

for prefix, target_name in IMAGE_NAMES:
    matching_files = sorted(ARTIFACTS_DIR.glob(f"{prefix}_*.jpg"), key=os.path.getmtime, reverse=True)
    if matching_files:
        src = matching_files[0]
        dest = TARGET_DIR / target_name
        with Image.open(src) as img:
            img.convert("RGB").save(dest, "WEBP", quality=85, method=6)
            size_kb = dest.stat().st_size / 1024
            print(f"[OK] Converted {target_name} ({size_kb:.1f} KB)")
    else:
        print(f"[WARN] Not found: {prefix}")
