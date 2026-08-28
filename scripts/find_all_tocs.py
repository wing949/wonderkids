# -*- coding: utf-8 -*-
import os, sys, pymupdf, subprocess, tempfile, re
sys.stdout.reconfigure(encoding='utf-8')

TESS_EXE = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
TESSDATA_DIR = r"C:\Users\TVCHUONG\Desktop\AI\06_eLearning\.cache\tessdata"

def ocr_page(page, psm=6):
    pix = page.get_pixmap(dpi=150)
    with tempfile.NamedTemporaryFile(suffix='.png', delete=False) as tf:
        tmp_name = tf.name
    try:
        pix.save(tmp_name)
        cmd = [TESS_EXE, tmp_name, 'stdout', '-l', 'vie+eng', '--tessdata-dir', TESSDATA_DIR, '--psm', str(psm)]
        res = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8', errors='replace', timeout=30)
        return res.stdout.strip()
    finally:
        if os.path.exists(tmp_name):
            os.remove(tmp_name)

books = [
    ('Lớp 1', r'refer/Violympic/L1 gốc Violympic.pdf'),
    ('Lớp 2', r'refer/Violympic/L2 gốc Violympic.pdf'),
    ('Lớp 3', r'refer/Violympic/L3 gốc Violympic.pdf'),
    ('Lớp 4', r'refer/Violympic/L4 gốc Violympic.pdf'),
]

for label, p in books:
    doc = pymupdf.open(p)
    print("==================================================")
    print("SEARCHING ALL PAGES IN: " + label + " (" + str(len(doc)) + " pages)")
    print("==================================================")
    
    # Check pages 1..10 and last 10 pages for TOC
    check_indices = list(range(0, min(10, len(doc)))) + list(range(max(0, len(doc)-10), len(doc)))
    for pno in check_indices:
        page = doc[pno]
        txt = ocr_page(page)
        if re.search(r'(?i)(mục\s*lục|muc\s*luc)', txt) or re.search(r'(?i)(bộ\s*đề\s*số|vòng\s*1\b|phần\s*thứ)', txt):
            print("--- [" + label + "] PAGE " + str(pno+1) + " ---")
            print(txt)
            print("-----------------------------------")
