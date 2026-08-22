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

# For each book, let's download pages 1, 2, 3, 4, 5 and the last 5 pages
all_toc_pages = {}

for b in books:
    bname = b['name']
    pages = b['pages']
    total = len(pages)
    
    # Check indices 1, 2, 3, 4, 5, and total-5 to total-1
    test_indices = [1, 2, 3, 4, 5, total-5, total-4, total-3, total-2, total-1]
    
    print(f"\n========================================================")
    print(f"📖 Đang quét Mục lục: {bname} ({total} trang)")
    
    for idx in test_indices:
        if 0 <= idx < total:
            url = pages[idx]
            fname = f"{b['grade']}_{b['semester']}_p{idx+1}.png"
            fpath = TOC_DIR / fname
            txt_path = TOC_DIR / f"{fname}.txt"
            
            # Download if not present
            if not fpath.exists():
                try:
                    req = urllib.request.Request(url, headers=headers)
                    with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
                        with open(fpath, 'wb') as out_f:
                            out_f.write(resp.read())
                except Exception as e:
                    print(f"  Error downloading {fname}: {e}")
                    continue
            
            # OCR if not present
            if not txt_path.exists():
                cmd = [
                    str(TESSERACT),
                    str(fpath),
                    str(TOC_DIR / fname),
                    "--tessdata-dir", str(TESSDATA_DIR),
                    "-l", "vie"
                ]
                try:
                    subprocess.run(cmd, capture_output=True, check=True)
                except Exception as e:
                    print(f"  OCR error {fname}: {e}")
                    continue
            
            # Read OCR
            if txt_path.exists():
                with open(txt_path, 'r', encoding='utf-8') as f:
                    txt = f.read()
                if "MỤC LỤC" in txt.upper() or "CHỦ ĐỀ" in txt.upper() or "BÀI 1." in txt.upper() or "BÀI 1:" in txt.upper() or "BÀI 1 " in txt.upper():
                    print(f"  🎯 PHÁT HIỆN MỤC LỤC TẠI TRANG: {fname} (Page {idx+1})")
                    if bname not in all_toc_pages:
                        all_toc_pages[bname] = []
                    all_toc_pages[bname].append((idx+1, txt))

out_toc_file = WORKSPACE / "scripts" / "math_toc_extracted.json"
with open(out_toc_file, 'w', encoding='utf-8') as f:
    json.dump({k: [p[0] for p in v] for k, v in all_toc_pages.items()}, f, ensure_ascii=False, indent=2)

print(f"\n✅ Đã phát hiện Mục lục cho các sách: {list(all_toc_pages.keys())}")
