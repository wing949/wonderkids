# -*- coding: utf-8 -*-
from PIL import Image
import os

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
g1_dir = os.path.join(WORKSPACE, 'tmp_pages', 'english_g1')
g1_out = os.path.join(WORKSPACE, 'public', 'images', 'sgk_english', 'g1')
os.makedirs(g1_out, exist_ok=True)

# Let's inspect page 6, 7, 8 in Grade 1
# Unit 1: In the school playground (Letter B - b: Bill, Ba, book, ball, bike)
p7 = Image.open(os.path.join(g1_dir, 'page_07.png'))
w, h = p7.size
print(f"G1 page 7 size: {w}x{h}")

# Save full scene
p7.crop((int(w * 0.05), int(h * 0.25), int(w * 0.95), int(h * 0.90))).save(os.path.join(g1_out, 'u1_scene.png'))

# Page 8 in G1:
p8 = Image.open(os.path.join(g1_dir, 'page_08.png'))
w8, h8 = p8.size
# Crop book, ball, bike
p8.crop((int(w8 * 0.15), int(h8 * 0.52), int(w8 * 0.32), int(h8 * 0.65))).save(os.path.join(g1_out, 'u1_book_hd.png'))
p8.crop((int(w8 * 0.35), int(h8 * 0.52), int(w8 * 0.52), int(h8 * 0.65))).save(os.path.join(g1_out, 'u1_ball_hd.png'))
p8.crop((int(w8 * 0.55), int(h8 * 0.52), int(w8 * 0.72), int(h8 * 0.65))).save(os.path.join(g1_out, 'u1_bike_hd.png'))

print("Saved Grade 1 Unit 1 cropped illustrations!")
