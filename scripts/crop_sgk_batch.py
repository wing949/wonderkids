import os
import sys
from PIL import Image

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
g1_dir = os.path.join(WORKSPACE, 'tmp_pages', 'english_g1')
g2_dir = os.path.join(WORKSPACE, 'tmp_pages', 'english_g2')

g1_out = os.path.join(WORKSPACE, 'public', 'images', 'sgk_english', 'g1')
g2_out = os.path.join(WORKSPACE, 'public', 'images', 'sgk_english', 'g2')
os.makedirs(g1_out, exist_ok=True)
os.makedirs(g2_out, exist_ok=True)

# Grade 1 Unit 1 correct crops (page 8)
p8_g1 = Image.open(os.path.join(g1_dir, 'page_08.png'))
w1, h1 = p8_g1.size
p8_g1.crop((int(w1 * 0.14), int(h1 * 0.54), int(w1 * 0.27), int(h1 * 0.64))).save(os.path.join(g1_out, 'u1_ball_hd.png'))
p8_g1.crop((int(w1 * 0.28), int(h1 * 0.54), int(w1 * 0.46), int(h1 * 0.64))).save(os.path.join(g1_out, 'u1_bike_hd.png'))
p8_g1.crop((int(w1 * 0.72), int(h1 * 0.53), int(w1 * 0.83), int(h1 * 0.64))).save(os.path.join(g1_out, 'u1_book_hd.png'))

# Grade 1 Unit 2 (In the dining room - Cake, Car, Cat) -> Page 11
if os.path.exists(os.path.join(g1_dir, 'page_11.png')):
    p11_g1 = Image.open(os.path.join(g1_dir, 'page_11.png'))
    w, h = p11_g1.size
    p11_g1.crop((int(w * 0.14), int(h * 0.54), int(w * 0.28), int(h * 0.64))).save(os.path.join(g1_out, 'u2_cake_hd.png'))
    p11_g1.crop((int(w * 0.32), int(h * 0.54), int(w * 0.48), int(h * 0.64))).save(os.path.join(g1_out, 'u2_car_hd.png'))
    p11_g1.crop((int(w * 0.58), int(h * 0.54), int(w * 0.70), int(h * 0.64))).save(os.path.join(g1_out, 'u2_cat_hd.png'))

# Grade 2 Unit 3 (At the seaside - Sail, Sailing boat, Sand, Sea) -> Page 14
if os.path.exists(os.path.join(g2_dir, 'page_14.png')):
    p14_g2 = Image.open(os.path.join(g2_dir, 'page_14.png'))
    w, h = p14_g2.size
    p14_g2.crop((int(w * 0.14), int(h * 0.54), int(w * 0.28), int(h * 0.64))).save(os.path.join(g2_out, 'u3_sail_hd.png'))
    p14_g2.crop((int(w * 0.32), int(h * 0.54), int(w * 0.48), int(h * 0.64))).save(os.path.join(g2_out, 'u3_sand_hd.png'))
    p14_g2.crop((int(w * 0.58), int(h * 0.54), int(w * 0.70), int(h * 0.64))).save(os.path.join(g2_out, 'u3_sea_hd.png'))

print("✅ Successfully cropped SGK English illustrations batch!")
