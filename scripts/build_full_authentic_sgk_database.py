# -*- coding: utf-8 -*-
import sys
import os
import re
import json
from pathlib import Path

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

WORKSPACE = Path(r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning")

# 1. Load OCR database across all 10 books
ocr_by_book = {}
for g in [1, 2, 3, 4, 5]:
    for s in [1, 2]:
        p = WORKSPACE / "scripts" / f"ocr_verbatim_g{g}_t{s}.json"
        if p.exists():
            with open(p, "r", encoding="utf-8") as f:
                ocr_by_book[f"g{g}_t{s}"] = json.load(f)

# Load catalog
with open(WORKSPACE / "scripts" / "all_376_lessons_catalog.json", "r", encoding="utf-8") as f:
    catalog = json.load(f)

print(f"Loaded OCR books for {len(ocr_by_book)} volumes and {len(catalog)} lessons.")
