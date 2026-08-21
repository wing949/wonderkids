import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    manifests = json.load(f)

for m in manifests:
    g = m['grade']
    s = m['semester']
    title = m['title']
    pages = m['pages']
    print(f"\n==================== {title} (Lớp {g}, Tập {s}) ====================")
    print(f"Total pages: {len(pages)}")
    for idx in range(min(20, len(pages))):
        p = pages[idx]
        url = p['imageUrl']
        # Extract filename part
        fname = url.split('/')[-1]
        print(f"readerIndex: {p['readerIndex']:2d} | fname: {fname}")
