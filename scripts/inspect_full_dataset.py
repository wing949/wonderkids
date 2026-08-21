# -*- coding: utf-8 -*-
import json
import re
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

WORKSPACE_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"

# We will build a complete, highly rich repository of authentic reading passages for all 132 lessons (Grade 1-5)
# readingPassages.ts
passages_file = os.path.join(WORKSPACE_DIR, 'src', 'data', 'curriculum', 'vietnamese', 'readingPassages.ts')

with open(passages_file, 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'export const VIETNAMESE_READING_PASSAGES:\s*Record<string,\s*ReadingLessonBundle>\s*=\s*(\{[\s\S]*?\n\};)', text)
current_data = json.loads(m.group(1).rstrip(';'))

print(f"Loaded existing passages: {len(current_data)}")

# Let's inspect how many keys exist per grade
keys = list(current_data.keys())
print(f"Grade 1: {len([k for k in keys if k.startswith('tv-g1-')])} items")
print(f"Grade 2: {len([k for k in keys if k.startswith('tv-g2-')])} items")
print(f"Grade 3: {len([k for k in keys if k.startswith('tv-g3-')])} items")
print(f"Grade 4: {len([k for k in keys if k.startswith('tv-g4-')])} items")
print(f"Grade 5: {len([k for k in keys if k.startswith('tv-g5-')])} items")
