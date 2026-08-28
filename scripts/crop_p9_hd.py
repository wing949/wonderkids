# -*- coding: utf-8 -*-
from PIL import Image
import os

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
g2_dir = os.path.join(WORKSPACE, 'tmp_pages', 'english_g2')
g2_out = os.path.join(WORKSPACE, 'public', 'images', 'sgk_english', 'g2')

# Page 9 Activity 7: Popcorn, Pizza, Pasta
p9 = Image.open(os.path.join(g2_dir, 'page_09.png'))
w, h = p9.size
# Pasta (a):
pasta_p9 = p9.crop((int(w * 0.14), int(h * 0.47), int(w * 0.29), int(h * 0.54)))
pasta_p9.save(os.path.join(g2_out, 'u1_pasta_hd.png'))

# Pizza (b):
pizza_p9 = p9.crop((int(w * 0.42), int(h * 0.46), int(w * 0.58), int(h * 0.54)))
pizza_p9.save(os.path.join(g2_out, 'u1_pizza_hd.png'))

# Popcorn (c):
popcorn_p9 = p9.crop((int(w * 0.71), int(h * 0.46), int(w * 0.86), int(h * 0.55)))
popcorn_p9.save(os.path.join(g2_out, 'u1_popcorn_hd.png'))

print("Saved HD cropped items from page 9!")
