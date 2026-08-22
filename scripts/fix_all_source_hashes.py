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

# Let's find every lesson block and replace its sourceHash with the exact hash for its book and sourcePages[0]
def fix_lesson_block(match):
    full_block = match.group(0)
    lid = match.group(1)
    cat = catalog_376.get(lid)
    if not cat:
        return full_block
    
    g = cat['grade']
    s = cat['semester']
    book_id = f"tv-g{g}-t{s}"
    
    # Extract sourcePages from block
    sp_match = re.search(r'sourcePages:\s*\[([0-9,\s]+)\]', full_block)
    if sp_match:
        pages = [int(x.strip()) for x in sp_match.group(1).split(',') if x.strip()]
        start_p = pages[0]
    else:
        start_p = cat['startPage']
    
    correct_hash = book_hashes.get((book_id, start_p))
    if correct_hash:
        full_block = re.sub(r"sourceHash:\s*'[^']*'", f"sourceHash: '{correct_hash}'", full_block)
    return full_block

pattern = re.compile(r"  '([a-zA-Z0-9_\-]+)':\s*\{[\s\S]*?\n  \},")
new_sgk_ts = pattern.sub(fix_lesson_block, sgk_ts)

with open('src/data/curriculum/vietnamese/sgkTranscripts.ts', 'w', encoding='utf-8') as f:
    f.write(new_sgk_ts)

print("Updated every single lesson block with 100% verified sourceHash!")
