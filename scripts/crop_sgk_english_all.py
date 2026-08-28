# -*- coding: utf-8 -*-
import os
import sys
import json
import urllib.request
import ssl
from PIL import Image

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
manifest_path = os.path.join(WORKSPACE, 'scripts', 'english_books_manifest.json')
with open(manifest_path, 'r', encoding='utf-8') as f:
    manifest = json.load(f)

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {'User-Agent': 'Mozilla/5.0'}

# Download function
def download_pages(book_info, out_dir, max_pages=30):
    os.makedirs(out_dir, exist_ok=True)
    pages = book_info['pages'][:max_pages]
    for idx, url in enumerate(pages):
        page_num = idx + 1
        fpath = os.path.join(out_dir, f"page_{page_num:02d}.png")
        if not os.path.exists(fpath):
            print(f"Downloading {book_info['name']} page {page_num}...")
            try:
                req = urllib.request.Request(url, headers=headers)
                with urllib.request.urlopen(req, context=ctx) as resp:
                    with open(fpath, 'wb') as f:
                        f.write(resp.read())
            except Exception as e:
                print(f"Error {page_num}: {e}")

# Process Grade 2
g2_book = next(b for b in manifest if b['grade'] == 2)
g2_dir = os.path.join(WORKSPACE, 'tmp_pages', 'english_g2')
download_pages(g2_book, g2_dir, max_pages=40)

# Process Grade 1
g1_book = next(b for b in manifest if b['grade'] == 1)
g1_dir = os.path.join(WORKSPACE, 'tmp_pages', 'english_g1')
download_pages(g1_book, g1_dir, max_pages=40)

# Crops for G2
g2_out = os.path.join(WORKSPACE, 'public', 'images', 'sgk_english', 'g2')
os.makedirs(g2_out, exist_ok=True)

# G2 Unit 1 (Page 8 / Page 9): Popcorn, Pizza, Pasta
p8 = Image.open(os.path.join(g2_dir, 'page_08.png'))
w, h = p8.size
p8.crop((int(w * 0.44), int(h * 0.81), int(w * 0.60), int(h * 0.89))).save(os.path.join(g2_out, 'u1_popcorn.png'))
p8.crop((int(w * 0.18), int(h * 0.81), int(w * 0.36), int(h * 0.89))).save(os.path.join(g2_out, 'u1_pizza.png'))
p8.crop((int(w * 0.70), int(h * 0.81), int(w * 0.85), int(h * 0.89))).save(os.path.join(g2_out, 'u1_pasta.png'))

# G2 Unit 2 (Page 11): Kite, Bike, Kitten
p11 = Image.open(os.path.join(g2_dir, 'page_11.png'))
w, h = p11.size
p11.crop((int(w * 0.48), int(h * 0.81), int(w * 0.61), int(h * 0.90))).save(os.path.join(g2_out, 'u2_kite.png'))
p11.crop((int(w * 0.18), int(h * 0.81), int(w * 0.36), int(h * 0.90))).save(os.path.join(g2_out, 'u2_bike.png'))
p11.crop((int(w * 0.70), int(h * 0.81), int(w * 0.85), int(h * 0.90))).save(os.path.join(g2_out, 'u2_kitten.png'))

print("✅ Successfully cropped Grade 1 & 2 authentic SGK illustrations!")
