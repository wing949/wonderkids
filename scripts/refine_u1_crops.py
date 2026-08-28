# -*- coding: utf-8 -*-
from PIL import Image
import os

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
g2_dir = os.path.join(WORKSPACE, 'tmp_pages', 'english_g2')
g2_out = os.path.join(WORKSPACE, 'public', 'images', 'sgk_english', 'g2')

p9 = Image.open(os.path.join(g2_dir, 'page_09.png'))
w, h = p9.size

# Clean tight crop for Pasta
pasta = p9.crop((int(w * 0.145), int(h * 0.475), int(w * 0.285), int(h * 0.542)))
pasta.save(os.path.join(g2_out, 'u1_pasta_hd.png'))

# Clean tight crop for Popcorn
popcorn = p9.crop((int(w * 0.715), int(h * 0.465), int(w * 0.855), int(h * 0.545)))
popcorn.save(os.path.join(g2_out, 'u1_popcorn_hd.png'))

# Clean tight crop for Pizza
pizza = p9.crop((int(w * 0.425), int(h * 0.465), int(w * 0.575), int(h * 0.542)))
pizza.save(os.path.join(g2_out, 'u1_pizza_hd.png'))

print("Refined crops saved!")
