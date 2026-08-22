# -*- coding: utf-8 -*-
import os
import sys
import json
import re

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"

toc_file = os.path.join(WORKSPACE, 'scripts', 'math_all_tocs_full.json')
with open(toc_file, 'r', encoding='utf-8') as f:
    tocs = json.load(f)

for book, text in tocs.items():
    print(f"\n========================================================")
    print(f"📖 TOÀN VĂN MỤC LỤC: {book}")
    print("--------------------------------------------------------")
    print(text.strip())
