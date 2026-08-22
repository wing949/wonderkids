import urllib.request
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

os.makedirs('tmp_pages/g3_t1', exist_ok=True)

with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    manifests = json.load(f)

m_g3_t1 = next(m for m in manifests if m['grade'] == 3 and m['semester'] == 1)
pages = m_g3_t1['pages']

print(f"Total pages in G3 T1: {len(pages)}")

for p_idx in range(len(pages)):
    p = pages[p_idx]
    fname = p['imageUrl'].split('/')[-1]
    out_path = f"tmp_pages/g3_t1/p{p_idx+1}_{fname}"
    if not os.path.exists(out_path):
        try:
            req = urllib.request.Request(p['imageUrl'], headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=10) as resp, open(out_path, 'wb') as out_f:
                out_f.write(resp.read())
        except Exception as e:
            print(f"Failed p{p_idx+1}: {e}")

print("Downloaded all G3 T1 pages!")
