import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    manifests = json.load(f)

# Build map of (grade, semester, readerIndex) -> sourceHash
page_hashes = {}
for m in manifests:
    g = m['grade']
    s = m['semester']
    for p in m['pages']:
        page_hashes[(g, s, p['readerIndex'])] = p['sourceHash']

with open('src/data/curriculum/vietnamese/sgkTranscripts.ts', 'r', encoding='utf-8') as f:
    sgk = f.read()

matches = re.findall(r"'([a-z0-9-]+)':\s*\{.*?sourcePages:\s*\[(.*?)\].*?sourceHash:\s*'([a-f0-9]+)'", sgk, re.DOTALL)
print(f"Found {len(matches)} transcript blocks")
for lid, p_str, h in matches[:10]:
    pages = [int(x.strip()) for x in p_str.split(',') if x.strip()]
    g = int(re.search(r'g(\d+)', lid).group(1))
    s = 1 if ('-b' in lid and int(re.search(r'-b(\d+)', lid).group(1)) <= 18) else 2
    if 't1' in lid: s = 1
    if 't2' in lid: s = 2
    
    first_p_hash = page_hashes.get((g, s, pages[0])) if pages else None
    print(f"Lesson {lid}: pages={pages}, sourceHash={h[:16]}..., first_page_hash={first_p_hash[:16] if first_p_hash else 'None'}...")
    if first_p_hash == h:
        print("   -> MATCHES first page hash!")
    else:
        matched_page = [p for p in pages if page_hashes.get((g, s, p)) == h]
        print(f"   -> Matched pages: {matched_page}")
