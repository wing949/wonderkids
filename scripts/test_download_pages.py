import json
import urllib.request
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

os.makedirs('tmp_check_pages', exist_ok=True)

with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    manifests = json.load(f)

for m in manifests:
    g = m['grade']
    s = m['semester']
    pages = m['pages']
    
    # Check page around index 10 to 17
    print(f"\nChecking Grade {g}, Sem {s}:")
    for test_idx in [9, 10, 14, 15, 16, 17]:
        if test_idx < len(pages):
            p = pages[test_idx]
            fname = p['imageUrl'].split('/')[-1]
            out_path = f"tmp_check_pages/g{g}_s{s}_idx{test_idx}_{fname}"
            if not os.path.exists(out_path):
                try:
                    req = urllib.request.Request(p['imageUrl'], headers={'User-Agent': 'Mozilla/5.0'})
                    with urllib.request.urlopen(req, timeout=10) as resp, open(out_path, 'wb') as out_f:
                        out_f.write(resp.read())
                    print(f"   Downloaded idx {test_idx}: {fname} -> {os.path.getsize(out_path)} bytes")
                except Exception as e:
                    print(f"   Failed idx {test_idx}: {e}")
            else:
                print(f"   Already have idx {test_idx}: {fname}")
