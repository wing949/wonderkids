# -*- coding: utf-8 -*-
import os
import sys
import glob
import subprocess
from pathlib import Path

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = Path(r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning")
TOC_DIR = WORKSPACE / "tmp_math_toc"
TESSERACT = Path(r"C:\Program Files\Tesseract-OCR\tesseract.exe")
TESSDATA_DIR = WORKSPACE

print(f"Checking Tesseract: {TESSERACT.exists()}")

image_files = sorted(glob.glob(str(TOC_DIR / "*.png")))
print(f"Found {len(image_files)} candidate images")

for img in image_files:
    fname = Path(img).stem
    txt_out = TOC_DIR / f"{fname}.txt"
    
    # Run tesseract
    cmd = [
        str(TESSERACT),
        str(img),
        str(TOC_DIR / fname),
        "--tessdata-dir", str(TESSDATA_DIR),
        "-l", "vie"
    ]
    try:
        subprocess.run(cmd, capture_output=True, check=True)
        if txt_out.exists():
            with open(txt_out, 'r', encoding='utf-8') as f:
                content = f.read()
            # Check if this page is a MỤC LỤC page
            if "MỤC LỤC" in content.upper() or "CHỦ ĐỀ" in content.upper() or "BÀI" in content.upper():
                print(f"\n========================================================")
                print(f"🎯 [MỤC LỤC TÌM THẤY] Page: {fname}")
                print("--------------------------------------------------------")
                lines = [line.strip() for line in content.split('\n') if line.strip()]
                for l in lines[:25]:
                    print(f"  {l}")
    except Exception as e:
        print(f"Error on {fname}: {e}")
