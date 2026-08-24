import shutil
from pathlib import Path

source_dir = Path(r"C:\Users\TVCHUONG\.gemini\antigravity-ide\brain\6469d13b-2e5a-4d56-b82e-7da0baf9bc85")
dest_dir = Path(r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning\public\assets\mascots")
dest_dir.mkdir(parents=True, exist_ok=True)

# Find lion and dino files
lion_files = list(source_dir.glob("mascot_lion*.jpg"))
dino_files = list(source_dir.glob("mascot_dino*.jpg"))

if lion_files:
    latest_lion = max(lion_files, key=lambda p: p.stat().st_mtime)
    shutil.copy2(latest_lion, dest_dir / "mascot_lion.jpg")
    print(f"Copied {latest_lion.name} -> public/assets/mascots/mascot_lion.jpg")

if dino_files:
    latest_dino = max(dino_files, key=lambda p: p.stat().st_mtime)
    shutil.copy2(latest_dino, dest_dir / "mascot_dino.jpg")
    print(f"Copied {latest_dino.name} -> public/assets/mascots/mascot_dino.jpg")

print("All copies done!")
