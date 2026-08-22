import json
with open('src/data/curriculum/vietnamese/sgkTranscripts.ts', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r"'tv-g1-b1':\s*\{(.*?)\n  \},", text, re.DOTALL)
if m:
    with open('scripts/b1_out.txt', 'w', encoding='utf-8') as out:
        out.write(m.group(0))
    print("Wrote scripts/b1_out.txt")
