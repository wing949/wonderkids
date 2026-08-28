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

def download_book_pages(book, out_dir, max_pages=35):
    os.makedirs(out_dir, exist_ok=True)
    pages = book['pages'][:max_pages]
    for idx, url in enumerate(pages):
        page_num = idx + 1
        fpath = os.path.join(out_dir, f"page_{page_num:02d}.png")
        if not os.path.exists(fpath):
            try:
                req = urllib.request.Request(url, headers=headers)
                with urllib.request.urlopen(req, context=ctx) as resp:
                    with open(fpath, 'wb') as f:
                        f.write(resp.read())
            except Exception as e:
                print(f"Error downloading {book['name']} p{page_num}: {e}")

# Download Grade 3, 4, 5
for book in manifest:
    grade = book['grade']
    folder_name = f"english_g{grade}"
    if 'Tập 2' in book['name']:
        folder_name += '_vol2'
    out_dir = os.path.join(WORKSPACE, 'tmp_pages', folder_name)
    print(f"Downloading pages for {book['name']}...")
    download_book_pages(book, out_dir, max_pages=35)

print("Downloaded all primary English textbook pages!")
