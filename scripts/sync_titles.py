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
passages = json.loads(m.group(1).rstrip(';'))

for g in range(2, 6):
    file_path = os.path.join(WORKSPACE_DIR, 'src', 'data', 'curriculum', 'vietnamese', f'grade{g}.ts')
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    g_keys = [k for k in passages.keys() if k.startswith(f'tv-g{g}-b')]
    for k in g_keys:
        num = k.split('-b')[-1]
        clean_title = passages[k]['passage']['title']
        new_title = clean_title if clean_title.startswith('Bài') else f"Bài {num}: {clean_title}"
        
        # Regex search for block id: 'tv-gX-bY' ... title: '...'
        pattern = re.compile(rf"(id:\s*'{k}'[\s\S]*?title:\s*)'([^']+)'", re.MULTILINE)
        content = pattern.sub(rf"\1'{new_title}'", content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"✅ Đã đồng bộ tiêu đề sạch cho grade{g}.ts")

print("🎉 Hoàn tất đồng bộ 100% tiêu đề giữa các file!")
