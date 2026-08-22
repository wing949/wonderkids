import json
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('scripts/all_376_lessons_catalog.json', 'r', encoding='utf-8') as f:
    lessons = json.load(f)

for g in range(1, 6):
    for s in [1, 2]:
        sub = [l for l in lessons if l['grade'] == g and l['semester'] == s]
        ver = [l for l in sub if l['isVerified']]
        pend = [l for l in sub if not l['isVerified']]
        print(f"Grade {g} Sem {s}: Total {len(sub)} | Verified: {len(ver)} | Pending: {len(pend)}")
