# -*- coding: utf-8 -*-
from PIL import Image
import os

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
g2_dir = os.path.join(WORKSPACE, 'tmp_pages', 'english_g2')
g2_out = os.path.join(WORKSPACE, 'public', 'images', 'sgk_english', 'g2')

p11 = Image.open(os.path.join(g2_dir, 'page_11.png'))
w, h = p11.size

# Kite:
p11.crop((int(w * 0.18), int(h * 0.55), int(w * 0.30), int(h * 0.66))).save(os.path.join(g2_out, 'u2_kite_hd.png'))
# Bike:
p11.crop((int(w * 0.33), int(h * 0.56), int(w * 0.49), int(h * 0.65))).save(os.path.join(g2_out, 'u2_bike_hd.png'))
# Kitten:
p11.crop((int(w * 0.58), int(h * 0.56), int(w * 0.69), int(h * 0.65))).save(os.path.join(g2_out, 'u2_kitten_hd.png'))

print("Saved Unit 2 HD crops!")
