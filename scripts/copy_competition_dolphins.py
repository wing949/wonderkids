import shutil
from pathlib import Path

src_violympic = Path(r"C:\Users\TVCHUONG\.gemini\antigravity-ide\brain\6469d13b-2e5a-4d56-b82e-7da0baf9bc85\violympic_dolphin_1787555449076.jpg")
dest_violympic = Path("public/assets/competitions/violympic_english.jpg")
shutil.copy2(src_violympic, dest_violympic)
print(f"Copied Violympic English Dolphin -> {dest_violympic} ({dest_violympic.stat().st_size} bytes)")

src_ioe = Path(r"C:\Users\TVCHUONG\.gemini\antigravity-ide\brain\6469d13b-2e5a-4d56-b82e-7da0baf9bc85\ioe_dolphin_cup_1787555474988.jpg")
dest_ioe = Path("public/assets/competitions/ioe_competition.jpg")
shutil.copy2(src_ioe, dest_ioe)
print(f"Copied IOE Dolphin -> {dest_ioe} ({dest_ioe.stat().st_size} bytes)")
