import shutil
from pathlib import Path

src = Path(r"C:\Users\TVCHUONG\.gemini\antigravity-ide\brain\6469d13b-2e5a-4d56-b82e-7da0baf9bc85\violympic_vietnamese_fox_1787556008833.jpg")
dest = Path("public/assets/competitions/violympic_vietnamese.jpg")
shutil.copy2(src, dest)
print(f"Copied Violympic Vietnamese Fox -> {dest} ({dest.stat().st_size} bytes)")
