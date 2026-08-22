import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    manifests = json.load(f)

book_hashes = {}
for m in manifests:
    g = m['grade']
    s = m['semester']
    book_id = f"tv-g{g}-t{s}"
    for p in m['pages']:
        book_hashes[(book_id, p['readerIndex'])] = p['sourceHash']

with open('scripts/all_376_lessons_catalog.json', 'r', encoding='utf-8') as f:
    catalog_376 = {l['id'].replace('-l', '-b'): l for l in json.load(f)}

with open('src/data/curriculum/vietnamese/sgkTranscripts.ts', 'r', encoding='utf-8') as f:
    sgk_ts = f.read()

# Replace sourceHash for each lesson in sgkTranscripts
for lid, cat in catalog_376.items():
    g = cat['grade']
    s = cat['semester']
    book_id = f"tv-g{g}-t{s}"
    sp = cat['startPage']
    correct_hash = book_hashes.get((book_id, sp))
    if not correct_hash:
        continue
    
    # Match the lesson block
    pattern = rf"('{lid}':\s*\{{[\s\S]*?sourceHash:\s*')([a-f0-9]+)(')"
    match = re.search(pattern, sgk_ts)
    if match:
        old_hash = match.group(2)
        if old_hash != correct_hash:
            sgk_ts = re.sub(pattern, rf"\g<1>{correct_hash}\g<3>", sgk_ts)

with open('src/data/curriculum/vietnamese/sgkTranscripts.ts', 'w', encoding='utf-8') as f:
    f.write(sgk_ts)

print("Synchronized all sourceHashes in sgkTranscripts.ts!")
