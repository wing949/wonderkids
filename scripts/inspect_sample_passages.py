# -*- coding: utf-8 -*-
import json
import re
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"

with open(os.path.join(WORKSPACE_DIR, 'src', 'data', 'curriculum', 'vietnamese', 'readingPassages.ts'), 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'export const VIETNAMESE_READING_PASSAGES:\s*Record<string,\s*ReadingLessonBundle>\s*=\s*(\{[\s\S]*?\n\};)', text)
data = json.loads(m.group(1).rstrip(';'))

samples = ['tv-g2-b1', 'tv-g2-b4', 'tv-g3-b1', 'tv-g3-b15', 'tv-g4-b1', 'tv-g4-b15', 'tv-g5-b1', 'tv-g5-b4']
for s in samples:
    if s in data:
        p = data[s]['passage']
        print('='*70)
        print(f"Mã bài: {s} | Tiêu đề: {p['title']} | Tác giả: {p.get('author')}")
        print(f"Nguồn: {data[s].get('sourceDetail')}")
        words = len(' '.join(p['content']).split())
        print(f"Nội dung ({words} từ):")
        for idx, c in enumerate(p['content'], 1):
            print(f"  [Đoạn {idx}] {c}")
