import urllib.request
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    manifests = json.load(f)

# Find TV3 T1
m_g3_s1 = next(m for m in manifests if m['grade'] == 3 and m['semester'] == 1)
pages = m_g3_s1['pages']

for p_idx in [4, 5, 6, 7, 8]:
    p = pages[p_idx]
    fname = p['imageUrl'].split('/')[-1]
    out_path = f"tmp_toc/g3_s1_front_p{p_idx+1}_{fname}"
    if not os.path.exists(out_path):
        req = urllib.request.Request(p['imageUrl'], headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as resp, open(out_path, 'wb') as out_f:
            out_f.write(resp.read())
        print(f"Downloaded front p{p_idx+1}: {fname}")
    else:
        print(f"Already have front p{p_idx+1}: {fname}")
