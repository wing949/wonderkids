# -*- coding: utf-8 -*-
import os
import sys
import re
import json

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"

for grade in range(1, 6):
    fpath = os.path.join(WORKSPACE, 'src', 'data', 'curriculum', 'math', f'grade{grade}.ts')
    if not os.path.exists(fpath):
        continue
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract topics
    # Split by { "id": or { id:
    items = []
    blocks = re.findall(r'\{\s*["\']?id["\']?\s*:\s*["\']([^"\']+)["\'].*?["\']?title["\']?\s*:\s*["\']([^"\']+)["\'](?:.*?["\']?unit["\']?\s*:\s*["\']([^"\']+)["\'])?(?:.*?["\']?semester["\']?\s*:\s*(\d+))?', content, re.DOTALL)
    
    print(f"\n========================================================")
    print(f"📊 HIỆN CÓ TRÊN APPS: TOÁN LỚP {grade} ({len(blocks)} bài)")
    print("--------------------------------------------------------")
    for b in blocks:
        item_id, title, unit, sem = b
        sem_str = f"Học kì {sem}" if sem else "Chưa gán HK"
        print(f"  • [{item_id}] {title} | {unit} | {sem_str}")
