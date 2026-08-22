import urllib.request
import json
import os

with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    manifests = json.load(f)

m_g2_t1 = next(m for m in manifests if m['grade'] == 2 and m['semester'] == 1)
pages = m_g2_t1['pages']

for p_idx in [8, 9]:
    p = pages[p_idx]
    fname = p['imageUrl'].split('/')[-1]
    out_path = f"tmp_pages/tocs/g2_s1_p{p_idx+1}_{fname}"
    if not os.path.exists(out_path):
        req = urllib.request.Request(p['imageUrl'], headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as resp, open(out_path, 'wb') as out_f:
            out_f.write(resp.read())
        print(f"Downloaded G2 S1 p{p_idx+1}: {fname}")
    else:
        print(f"Have G2 S1 p{p_idx+1}: {fname}")
