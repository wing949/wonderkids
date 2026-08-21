# -*- coding: utf-8 -*-
import json
import re
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/curriculum/vietnamese/readingPassages.ts', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'export const VIETNAMESE_READING_PASSAGES:\s*Record<string,\s*ReadingLessonBundle>\s*=\s*(\{[\s\S]*?\n\};)', text)
data = json.loads(m.group(1).rstrip(';'))

for g in range(1, 6):
    with open(f'src/data/curriculum/vietnamese/grade{g}.ts', 'r', encoding='utf-8') as f:
        gtext = f.read()
    g_ids = re.findall(r"id:\s*'([^']+)'", gtext)
    g_titles = re.findall(r"title:\s*'([^']+)'", gtext)
    
    print(f"=== LỚP {g} ({len(g_ids)} topics) ===")
    mismatches = 0
    for gid, gtitle in zip(g_ids, g_titles):
        norm = gid.replace('-l', '-b')
        if norm in data:
            ptitle = data[norm]['passage']['title']
            gt = gtitle.split(':', 1)[-1].strip().lower()
            pt = ptitle.split(':', 1)[-1].strip().lower()
            if gt != pt and gtitle != ptitle:
                print(f"  ⚠️ Mismatch in {gid}:")
                print(f"     grade{g}.ts:        \"{gtitle}\"")
                print(f"     readingPassages.ts: \"{ptitle}\"")
                mismatches += 1
    if mismatches == 0:
        print("  ✅ 100% matched!")
