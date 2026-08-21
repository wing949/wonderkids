import urllib.request
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

os.makedirs('tmp_toc', exist_ok=True)

with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    manifests = json.load(f)

for m in manifests:
    g = m['grade']
    s = m['semester']
    pages = m['pages']
    total = len(pages)
    
    print(f"\nDownloading TOC for Grade {g}, Sem {s} (Total pages: {total}):")
    # In Vietnamese textbooks, TOC (Mục lục) is either at the front (pages 3-6) or at the back (last 3 pages)
    toc_indices = [2, 3, 4, 5, total - 4, total - 3, total - 2, total - 1]
    for idx in toc_indices:
        if 0 <= idx < total:
            p = pages[idx]
            fname = p['imageUrl'].split('/')[-1]
            out_path = f"tmp_toc/g{g}_s{s}_p{idx+1}_{fname}"
            if not os.path.exists(out_path):
                try:
                    req = urllib.request.Request(p['imageUrl'], headers={'User-Agent': 'Mozilla/5.0'})
                    with urllib.request.urlopen(req, timeout=10) as resp, open(out_path, 'wb') as out_f:
                        out_f.write(resp.read())
                    print(f"   Downloaded p{idx+1}: {fname}")
                except Exception as e:
                    print(f"   Failed p{idx+1}: {e}")
            else:
                print(f"   Already have p{idx+1}: {fname}")
