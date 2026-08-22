import json
with open('src/data/curriculum/vietnamese/sgkTranscripts.ts', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r"'tv-g1-b1':\s*\{(.*?)\n  \},", text, re.DOTALL)
if m:
    print(m.group(0))
