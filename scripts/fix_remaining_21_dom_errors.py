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

# Load DOM audit report
with open(WORKSPACE / "scripts" / "dom_2way_audit_report.json", "r", encoding="utf-8") as f:
    report = json.load(f)

failed_items = report["failed"]
print(f"Fixing {len(failed_items)} remaining lessons...")

from build_100_percent_real_reading_texts import REAL_READING_PASSAGES

TYPO_REPLACEMENTS = [
    (r'\bNột\b', 'Một'),
    (r'\btoy\b', 'tay'),
    (r'\bmớt\b', 'mắt'),
    (r'\bquở\b', 'quả'),
    (r'\bbởn\b', 'bàn'),
    (r'\bnhõng\b', 'nhàng'),
    (r'\btờgiấy\b', 'tờ giấy'),
    (r'\bvðo\b', 'vào'),
    (r'\bnõo\b', 'nào'),
    (r'\bđỡ\b', 'đã'),
    (r'\blõ\b', 'là'),
    (r'\bvöo\b', 'vào'),
    (r'\bchốc\b', 'chắc'),
    (r'\bcóc\b', 'các'),
    (r'\bmùag\b', 'mùa'),
    (r'\bmùg\b', 'mùa'),
    (r'\bhề\b', 'hè'),
    (r'\bthỏ\b', 'thả'),
    (r'\bcôu\b', 'câu'),
    (r'\bcộu\b', 'cậu'),
]

for item in failed_items:
    lid = item["lessonId"]
    if lid in REAL_READING_PASSAGES:
        cleaned_paras = []
        for p in REAL_READING_PASSAGES[lid]["content"]:
            for pattern, rep in TYPO_REPLACEMENTS:
                p = re.sub(pattern, rep, p, flags=re.IGNORECASE)
            cleaned_paras.append(p)
        REAL_READING_PASSAGES[lid]["content"] = cleaned_paras

# Save updated REAL_READING_PASSAGES
with open(WORKSPACE / "scripts" / "build_100_percent_real_reading_texts.py", "w", encoding="utf-8") as f:
    f.write("# -*- coding: utf-8 -*-\nimport sys\n\nREAL_READING_PASSAGES = " + json.dumps(REAL_READING_PASSAGES, ensure_ascii=False, indent=4) + "\n")

print("Saved updated REAL_READING_PASSAGES.")
