import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    manifests = json.load(f)

m_g2_t1 = next(m for m in manifests if m['grade'] == 2 and m['semester'] == 1)
pages = m_g2_t1['pages']

print(f"Total pages in G2 T1: {len(pages)}")
# Let's inspect pages from index 80 to 145 (readerIndex 80 to 145)
# Print page index and image url
for idx in range(80, len(pages)):
    p = pages[idx]
    fname = p['imageUrl'].split('/')[-1]
    print(f"ReaderIndex {p['readerIndex']} (Printed Page ~{p['readerIndex']}): {fname}")
