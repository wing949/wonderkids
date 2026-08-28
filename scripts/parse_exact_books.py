# -*- coding: utf-8 -*-
import os, sys, json, re, fitz, subprocess

sys.stdout.reconfigure(encoding='utf-8')

ROOT_DIR = r'c:\Users\TVCHUONG\Desktop\AI\06_eLearning'
PDF_DIR = os.path.join(ROOT_DIR, 'refer', 'Violympic')
OUT_DIR = os.path.join(ROOT_DIR, 'src', 'data', 'practice', 'data')
os.makedirs(OUT_DIR, exist_ok=True)

TESS_EXE = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
TESSDATA_DIR = os.path.join(ROOT_DIR, '.cache', 'tessdata')

def ocr_page(doc, p_idx):
    page = doc[p_idx]
    pix = page.get_pixmap(dpi=200)
    img_path = f'temp_p_{os.getpid()}.png'
    pix.save(img_path)
    cmd = [TESS_EXE, img_path, 'stdout', '-l', 'vie+eng', '--tessdata-dir', TESSDATA_DIR, '--psm', '6']
    res = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8', errors='replace')
    if os.path.exists(img_path):
        os.remove(img_path)
    return res.stdout

print('Ready to extract exact book questions')
