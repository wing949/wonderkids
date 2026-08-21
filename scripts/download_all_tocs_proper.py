import urllib.request
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

os.makedirs('tmp_toc/all', exist_ok=True)

with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    manifests = json.load(f)

for m in manifests:
    g = m['grade']
    s = m['semester']
    pages = m['pages']
    
    # In Vietnamese textbooks, TOC is typically at pages 3, 4, 5, 6, 7 or at the very end
    print(f"\n--- Grade {g} Sem {s} ---")
    for p_idx in [2, 3, 4, 5, 6, 7]:
        if p_idx < len(pages):
            p = pages[p_idx]
            fname = p['imageUrl'].split('/')[-1]
            out_path = f"tmp_toc/all/g{g}_s{s}_p{p_idx+1}_{fname}"
            if not os.path.exists(out_path):
                req = urllib.request.Request(p['imageUrl'], headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req, timeout=10) as resp, open(out_path, 'wb') as out_f:
                    out_f.write(resp.read())
                print(f"Downloaded p{p_idx+1}: {fname}")
            else:
                print(f"Have p{p_idx+1}: {fname}")
