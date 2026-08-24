import shutil
from pathlib import Path

brain_dir = Path(r"C:\Users\TVCHUONG\.gemini\antigravity-ide\brain\6469d13b-2e5a-4d56-b82e-7da0baf9bc85")
dest_dir = Path(r"public/assets/competitions")
dest_dir.mkdir(parents=True, exist_ok=True)

# Find latest generated images
mapping = {
    "ioe_competition.jpg": list(brain_dir.glob("ioe_competition_card_*.jpg"))[-1],
    "trangnguyen_competition.jpg": list(brain_dir.glob("trangnguyen_card_*.jpg"))[-1],
    "violympic_math.jpg": list(brain_dir.glob("violympic_math_card_*.jpg"))[-1],
    "math_en_competition.jpg": list(brain_dir.glob("math_en_card_*.jpg"))[-1],
}

for name, src in mapping.items():
    dest = dest_dir / name
    shutil.copy2(src, dest)
    print(f"Copied {src.name} -> {dest} ({dest.stat().st_size} bytes)")
