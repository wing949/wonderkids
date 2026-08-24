import shutil
from pathlib import Path

src = Path(r"C:\Users\TVCHUONG\.gemini\antigravity-ide\brain\6469d13b-2e5a-4d56-b82e-7da0baf9bc85\violympic_english_1787555219914.jpg")
dest = Path("public/assets/competitions/violympic_english.jpg")
dest.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(src, dest)
print(f"Copied {src.name} -> {dest} ({dest.stat().st_size} bytes)")
