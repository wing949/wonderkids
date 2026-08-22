# -*- coding: utf-8 -*-
import os
import sys
import json
import urllib.request
import ssl
import subprocess
from pathlib import Path

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = Path(r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning")
manifest_file = WORKSPACE / "scripts" / "math_books_manifest.json"
with open(manifest_file, 'r', encoding='utf-8') as f:
    books = json.load(f)

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

TOC_DIR = WORKSPACE / "tmp_math_toc"
TESSERACT = Path(r"C:\Program Files\Tesseract-OCR\tesseract.exe")
TESSDATA_DIR = WORKSPACE

# Map exact TOC page numbers:
# Tap 1 -> Page 5 & 6
# Tap 2 -> Page 3 & 4
toc_map = {}

for b in books:
    bname = b['name']
    grade = b['grade']
    sem = b['semester']
    pages = b['pages']
    
    pages_to_get = [5, 6] if sem == 1 else [3, 4]
    
    print(f"\n========================================================")
    print(f"📘 TẢI & OCR MỤC LỤC CHUẨN XÁC: {bname}")
    
    book_toc_text = []
    
    for p_num in pages_to_get:
        idx = p_num - 1
        if idx < len(pages):
            url = pages[idx]
            fname = f"{grade}_{sem}_p{p_num}_toc.png"
            fpath = TOC_DIR / fname
            txt_path = TOC_DIR / f"{grade}_{sem}_p{p_num}_toc.txt"
            
            # Download
            if not fpath.exists():
                req = urllib.request.Request(url, headers=headers)
                with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
                    with open(fpath, 'wb') as out_f:
                        out_f.write(resp.read())
            
            # OCR
            cmd = [
                str(TESSERACT),
                str(fpath),
                str(TOC_DIR / f"{grade}_{sem}_p{p_num}_toc"),
                "--tessdata-dir", str(TESSDATA_DIR),
                "-l", "vie"
            ]
            subprocess.run(cmd, capture_output=True, check=True)
            
            if txt_path.exists():
                with open(txt_path, 'r', encoding='utf-8') as f:
                    txt = f.read()
                print(f"--- [Trang {p_num}] ---")
                print(txt[:300] + ("..." if len(txt) > 300 else ""))
                book_toc_text.append(txt)
    
    toc_map[f"Toán {grade} Tập {sem}"] = "\n\n".join(book_toc_text)

# Save all full TOCs into a JSON file
with open(WORKSPACE / "scripts" / "math_all_tocs_full.json", 'w', encoding='utf-8') as f:
    json.dump(toc_map, f, ensure_ascii=False, indent=2)

print("\n🎉 Hoàn tất trích xuất toàn bộ Mục lục 10 cuốn sách Toán!")
