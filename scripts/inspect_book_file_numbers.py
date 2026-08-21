import urllib.request
import json
import re

with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    manifests = json.load(f)

# Let's inspect the first 25 pages of each book
for m in manifests:
    g = m['grade']
    s = m['semester']
    title = m['title']
    pages = m['pages']
    
    print(f"Book: Grade {g} - Sem {s} - {title}")
    # Let's print the mapping between readerIndex and file number
    for idx in range(min(5, len(pages))):
        p = pages[idx]
        fname = p['imageUrl'].split('/')[-1]
        print(f"   readerIndex {p['readerIndex']} -> {fname}")
