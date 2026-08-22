import urllib.request
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    manifests = json.load(f)

for m in manifests:
    g = m['grade']
    s = m['semester']
    folder = f"tmp_pages/g{g}_t{s}"
    os.makedirs(folder, exist_ok=True)
    pages = m['pages']
    print(f"Checking Grade {g} Semester {s} ({len(pages)} pages)...")
    for p_idx in range(len(pages)):
        p = pages[p_idx]
        fname = p['imageUrl'].split('/')[-1]
        out_path = f"{folder}/p{p_idx+1}_{fname}"
        if not os.path.exists(out_path):
            try:
                req = urllib.request.Request(p['imageUrl'], headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req, timeout=10) as resp, open(out_path, 'wb') as out_f:
                    out_f.write(resp.read())
            except Exception as e:
                pass

print("Finished downloading all textbook pages for all books!")
