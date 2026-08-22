import json
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('scripts/all_376_lessons_catalog.json', 'r', encoding='utf-8') as f:
    all_376 = json.load(f)

with open('src/data/curriculum/vietnamese/sgkTranscripts.ts', 'r', encoding='utf-8') as f:
    sgk_ts = f.read()

missing = []
for l in all_376:
    lid = l['id']
    if f"'{lid}':" not in sgk_ts:
        missing.append(l)

print(f"Missing {len(missing)} lessons:")
for m in missing:
    print(f"- {m['id']} (Grade {m['grade']} Sem {m['semester']}): {m['title']} (page {m['startPage']})")
