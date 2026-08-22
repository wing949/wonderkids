# -*- coding: utf-8 -*-
import os
import sys
import json
import urllib.request
import ssl
import subprocess

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
manifest_file = os.path.join(WORKSPACE, 'scripts', 'math_books_manifest.json')
with open(manifest_file, 'r', encoding='utf-8') as f:
    books = json.load(f)

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

TOC_DIR = os.path.join(WORKSPACE, 'tmp_math_toc')
os.makedirs(TOC_DIR, exist_ok=True)

# For each book, download candidate TOC pages (First 4 pages and Last 4 pages)
for b in books:
    print(f"\n📘 {b['name']} ({b['totalPages']} trang):")
    pages = b['pages']
    
    # Candidate indices: 0, 1, 2, 3, total-3, total-2, total-1
    candidate_indices = [0, 1, 2, 3, len(pages)-3, len(pages)-2, len(pages)-1]
    
    for idx in candidate_indices:
        if 0 <= idx < len(pages):
            url = pages[idx]
            fname = f"{b['grade']}_{b['semester']}_p{idx+1}.png"
            fpath = os.path.join(TOC_DIR, fname)
            if not os.path.exists(fpath):
                try:
                    req = urllib.request.Request(url, headers=headers)
                    with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
                        with open(fpath, 'wb') as out_f:
                            out_f.write(resp.read())
                    print(f"  ✓ Đã tải: {fname}")
                except Exception as e:
                    print(f"  ❌ Lỗi tải {fname}: {e}")
            else:
                print(f"  (Đã có): {fname}")

print(f"\n✅ Hoàn tất tải các trang đầu và trang cuối ứng viên Mục lục vào {TOC_DIR}")
