import shutil
from pathlib import Path

src = Path(r"C:\Users\TVCHUONG\.gemini\antigravity-ide\brain\6469d13b-2e5a-4d56-b82e-7da0baf9bc85\math_en_owl_dolphin_1787555894100.jpg")
dest = Path("public/assets/competitions/math_en_competition.jpg")
shutil.copy2(src, dest)
print(f"Copied Owl & Dolphin Mascot -> {dest} ({dest.stat().st_size} bytes)")
