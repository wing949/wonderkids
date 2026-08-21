import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    manifests = json.load(f)

print(f"Total books in manifest: {len(manifests)}")
for b in manifests:
    print(f"Grade {b['grade']} - Semester {b['semester']}: {b['title']} - Total Pages: {len(b['pages'])} - Reader: {b['readerUrl']}")
    if len(b['pages']) > 15:
        sample_page = b['pages'][10]
        print(f"   Sample page {sample_page['readerIndex']}: {sample_page['imageUrl']}")
