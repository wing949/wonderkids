# -*- coding: utf-8 -*-
import os
import sys
from PIL import Image

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"

# Crop helper function
def crop_box(src_img_path, box_ratio, out_path):
    if not os.path.exists(src_img_path):
        return False
    try:
        img = Image.open(src_img_path)
        w, h = img.size
        left = int(w * box_ratio[0])
        top = int(h * box_ratio[1])
        right = int(w * box_ratio[2])
        bottom = int(h * box_ratio[3])
        cropped = img.crop((left, top, right, bottom))
        os.makedirs(os.path.dirname(out_path), exist_ok=True)
        cropped.save(out_path)
        return True
    except Exception as e:
        print(f"Error cropping {src_img_path}: {e}")
        return False

# Grade 1
g1_dir = os.path.join(WORKSPACE, 'tmp_pages', 'english_g1')
g1_out = os.path.join(WORKSPACE, 'public', 'images', 'sgk_english', 'g1')

# Grade 2
g2_dir = os.path.join(WORKSPACE, 'tmp_pages', 'english_g2')
g2_out = os.path.join(WORKSPACE, 'public', 'images', 'sgk_english', 'g2')

# Grade 3
g3_dir = os.path.join(WORKSPACE, 'tmp_pages', 'english_g3')
g3_out = os.path.join(WORKSPACE, 'public', 'images', 'sgk_english', 'g3')

# Grade 4
g4_dir = os.path.join(WORKSPACE, 'tmp_pages', 'english_g4')
g4_out = os.path.join(WORKSPACE, 'public', 'images', 'sgk_english', 'g4')

# Grade 5
g5_dir = os.path.join(WORKSPACE, 'tmp_pages', 'english_g5')
g5_out = os.path.join(WORKSPACE, 'public', 'images', 'sgk_english', 'g5')

# Crop Grade 3 items (Unit 1 Hello, Unit 2 Names, Unit 3 Friends, Unit 4 Body, Unit 5 Hobbies)
if os.path.exists(os.path.join(g3_dir, 'page_12.png')):
    crop_box(os.path.join(g3_dir, 'page_12.png'), (0.10, 0.40, 0.45, 0.65), os.path.join(g3_out, 'u1_hello.png'))
    crop_box(os.path.join(g3_dir, 'page_12.png'), (0.55, 0.40, 0.90, 0.65), os.path.join(g3_out, 'u1_goodbye.png'))

if os.path.exists(os.path.join(g3_dir, 'page_26.png')):
    # Unit 4: Body (eye, ear, nose, mouth)
    crop_box(os.path.join(g3_dir, 'page_26.png'), (0.12, 0.45, 0.32, 0.60), os.path.join(g3_out, 'u4_eye.png'))
    crop_box(os.path.join(g3_dir, 'page_26.png'), (0.34, 0.45, 0.54, 0.60), os.path.join(g3_out, 'u4_ear.png'))
    crop_box(os.path.join(g3_dir, 'page_26.png'), (0.56, 0.45, 0.76, 0.60), os.path.join(g3_out, 'u4_nose.png'))
    crop_box(os.path.join(g3_dir, 'page_26.png'), (0.78, 0.45, 0.98, 0.60), os.path.join(g3_out, 'u4_mouth.png'))

# Grade 4 items
if os.path.exists(os.path.join(g4_dir, 'page_12.png')):
    crop_box(os.path.join(g4_dir, 'page_12.png'), (0.10, 0.40, 0.48, 0.65), os.path.join(g4_out, 'u1_vietnam.png'))
    crop_box(os.path.join(g4_dir, 'page_12.png'), (0.52, 0.40, 0.90, 0.65), os.path.join(g4_out, 'u1_america.png'))

# Grade 5 items
if os.path.exists(os.path.join(g5_dir, 'page_12.png')):
    crop_box(os.path.join(g5_dir, 'page_12.png'), (0.10, 0.40, 0.48, 0.65), os.path.join(g5_out, 'u1_address.png'))
    crop_box(os.path.join(g5_dir, 'page_12.png'), (0.52, 0.40, 0.90, 0.65), os.path.join(g5_out, 'u1_street.png'))

print("SGK Primary English crop completed for all grades!")
