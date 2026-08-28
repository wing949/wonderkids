# -*- coding: utf-8 -*-
import os
import sys
import json
import urllib.request
import ssl

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
manifest_path = os.path.join(WORKSPACE, 'scripts', 'english_books_manifest.json')
with open(manifest_path, 'r', encoding='utf-8') as f:
    manifest = json.load(f)

g2_book = next(b for b in manifest if b['grade'] == 2)
print(f"Total pages in G2: {len(g2_book['pages'])}")

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

out_dir = os.path.join(WORKSPACE, 'tmp_pages', 'english_g2')
os.makedirs(out_dir, exist_ok=True)

# Download pages 1 to 15 to find Unit 1 and Unit 2
for idx, page_url in enumerate(g2_book['pages'][:15]):
    page_num = idx + 1
    out_file = os.path.join(out_dir, f"page_{page_num:02d}.png")
    if not os.path.exists(out_file):
        print(f"Downloading page {page_num} -> {page_url}")
        req = urllib.request.Request(page_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, context=ctx) as resp:
            with open(out_file, 'wb') as out_f:
                out_f.write(resp.read())
    else:
        print(f"Page {page_num} already exists.")

print("Done downloading sample pages for English G2!")
