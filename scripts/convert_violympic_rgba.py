from PIL import Image
from pathlib import Path

path = Path("public/assets/competitions/logos/violympic_logo.png")
with Image.open(path) as im:
    rgba = im.convert("RGBA")
    rgba.save(path)
print("Violympic logo converted to RGBA PNG!")
