# -*- coding: utf-8 -*-
from PIL import Image
import os

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
p8_path = os.path.join(WORKSPACE, 'tmp_pages', 'english_g2', 'page_08.png')
out_dir = os.path.join(WORKSPACE, 'public', 'images', 'sgk_english', 'g2')

img8 = Image.open(p8_path)
w, h = img8.size

# Activity 5 clean icons:
pizza_clean = img8.crop((int(w * 0.19), int(h * 0.82), int(w * 0.35), int(h * 0.88)))
pizza_clean.save(os.path.join(out_dir, 'u1_pizza_clean.png'))

popcorn_clean = img8.crop((int(w * 0.46), int(h * 0.82), int(w * 0.59), int(h * 0.88)))
popcorn_clean.save(os.path.join(out_dir, 'u1_popcorn_clean.png'))

pasta_clean = img8.crop((int(w * 0.71), int(h * 0.82), int(w * 0.84), int(h * 0.88)))
pasta_clean.save(os.path.join(out_dir, 'u1_pasta_clean.png'))

print("Saved clean icons!")
