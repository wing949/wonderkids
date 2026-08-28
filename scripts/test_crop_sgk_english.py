# -*- coding: utf-8 -*-
from PIL import Image
import os

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
p7_path = os.path.join(WORKSPACE, 'tmp_pages', 'english_g2', 'page_07.png')
p8_path = os.path.join(WORKSPACE, 'tmp_pages', 'english_g2', 'page_08.png')

out_dir = os.path.join(WORKSPACE, 'public', 'images', 'sgk_english', 'g2')
os.makedirs(out_dir, exist_ok=True)

img7 = Image.open(p7_path)
img8 = Image.open(p8_path)
w, h = img8.size
print(f"Page 8 size: {w}x{h}")

# On page 8 (img8), let's crop:
# Activity 4:
# 1a Popcorn: box in (left, top, right, bottom)
# 1b Noodles:
# 2a Pasta:
# 2b Pizza:

# Let's crop relative to w and h
# Activity 4 is around y: 0.52 to 0.67
# Popcorn (1a): x: 0.15 to 0.32, y: 0.53 to 0.63
popcorn_crop = img8.crop((int(w * 0.15), int(h * 0.53), int(w * 0.31), int(h * 0.63)))
popcorn_crop.save(os.path.join(out_dir, 'u1_popcorn.png'))

# Pasta (2a): x: 0.55 to 0.73, y: 0.54 to 0.63
pasta_crop = img8.crop((int(w * 0.55), int(h * 0.54), int(w * 0.73), int(h * 0.63)))
pasta_crop.save(os.path.join(out_dir, 'u1_pasta.png'))

# Pizza (2b): x: 0.73 to 0.90, y: 0.54 to 0.63
pizza_crop = img8.crop((int(w * 0.73), int(h * 0.54), int(w * 0.90), int(h * 0.63)))
pizza_crop.save(os.path.join(out_dir, 'u1_pizza.png'))

# Main scene from page 7 (img7)
w7, h7 = img7.size
scene_crop = img7.crop((int(w7 * 0.05), int(h7 * 0.25), int(w7 * 0.95), int(h7 * 0.90)))
scene_crop.save(os.path.join(out_dir, 'u1_scene.png'))

print("Saved cropped SGK images to public/images/sgk_english/g2/")
