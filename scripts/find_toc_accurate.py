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
    ('Lớp 5', r'refer/Violympic/L5 gốc Violympic.pdf'),
]

for label, p in books:
    doc = pymupdf.open(p)
    print("==================================================")
    print("BOOK: " + label + " (" + str(len(doc)) + " pages)")
    print("==================================================")
    
    # Check first 6 pages and last 6 pages for TOC or Key section headings
    check_indices = list(range(0, min(6, len(doc)))) + list(range(max(0, len(doc)-6), len(doc)))
    for pno in check_indices:
        page = doc[pno]
        txt = ocr_page(page)
        lines = [l.strip() for l in txt.splitlines() if l.strip()]
        has_muc_luc = any("MỤC LỤC" in l.upper() or "MUC LUC" in l.upper() for l in lines)
        has_phan = any("PHẦN THỨ" in l.upper() or "HƯỚNG DẪN GIẢI" in l.upper() for l in lines)
        print("Page " + str(pno+1) + " (Printed text sample):")
        for l in lines[:4]:
            print("   " + l)
        if has_muc_luc:
            print("   >>> [FOUND MUC LUC ON PAGE " + str(pno+1) + "] <<<")
            print("--- FULL TOC ---")
            print(txt)
            print("----------------")
        if has_phan:
            print("   >>> [FOUND SECTION HEADING ON PAGE " + str(pno+1) + "] <<<")
