from PIL import Image
from pathlib import Path

logo_dir = Path("public/assets/competitions/logos")
for img_path in logo_dir.glob("*.png"):
    with Image.open(img_path) as im:
        print(f"{img_path.name}: {im.size}, mode={im.mode}")
