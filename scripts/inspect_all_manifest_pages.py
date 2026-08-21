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
    
    print(f"\n==================== {title} (Lop {g}, Tap {s}) ====================")
    # Print pages from index 8 to 22
    for p in pages[8:22]:
        fname = p['imageUrl'].split('/')[-1]
        m_page = re.search(r'page-(\d+)', fname)
        file_page_num = m_page.group(1) if m_page else "?"
        print(f"readerIndex: {p['readerIndex']:2d} -> File: page-{file_page_num:>2s} | fname: {fname}")
