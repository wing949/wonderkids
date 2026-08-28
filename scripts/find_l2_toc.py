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

doc = pymupdf.open(r'refer/Violympic/L2 gốc Violympic.pdf')
print("Total pages in L2: " + str(len(doc)))

for pno in list(range(0, 10)) + list(range(135, len(doc))):
    page = doc[pno]
    txt = ocr_page(page)
    print("=== L2 Page " + str(pno+1) + " ===")
    print(txt[:400])
