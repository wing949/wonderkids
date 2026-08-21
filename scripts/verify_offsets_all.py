import urllib.request
import json
import re

with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    manifests = json.load(f)

for m in manifests:
    g = m['grade']
    s = m['semester']
    title = m['title']
    pages = m['pages']
    
    # Check what readerIndex corresponds to printed page 10 or 14
    # In manifest, let's see how readerIndex and imageUrl are structured
    print(f"\n--- {title} (Lớp {g}, Tập {s}) ---")
    for p_num in [1, 2, 3, 4, 5, 10, 11, 14, 15, 16, 17, 20]:
        matching_by_exact = [p for p in pages if p['readerIndex'] == p_num]
        matching_by_minus1 = [p for p in pages if p['readerIndex'] == p_num - 1]
        
        url_exact = matching_by_exact[0]['imageUrl'].split('/')[-1] if matching_by_exact else "N/A"
        url_m1 = matching_by_minus1[0]['imageUrl'].split('/')[-1] if matching_by_minus1 else "N/A"
        
        # print f"Page {p_num}: readerIndex {p_num} -> {url_exact} | readerIndex {p_num-1} -> {url_m1}"
