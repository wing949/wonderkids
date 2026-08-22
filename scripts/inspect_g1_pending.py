import json
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('scripts/all_376_lessons_catalog.json', 'r', encoding='utf-8') as f:
    all_376 = json.load(f)

g1_lessons = [l for l in all_376 if l['grade'] == 1]
print(f"Total Grade 1 lessons: {len(g1_lessons)}")

with open('src/data/curriculum/vietnamese/sgkTranscripts.ts', 'r', encoding='utf-8') as f:
    sgk_ts = f.read()

g1_t1_pending = [l for l in g1_lessons if l['semester'] == 1 and f"'{l['id']}':" not in sgk_ts]
g1_t2_pending = [l for l in g1_lessons if l['semester'] == 2 and f"'{l['id']}':" not in sgk_ts]

print(f"Grade 1 Semester 1 pending: {len(g1_t1_pending)}")
print(f"Grade 1 Semester 2 pending: {len(g1_t2_pending)}")

with open('scripts/g1_pending_list.json', 'w', encoding='utf-8') as f:
    json.dump({'g1_t1': g1_t1_pending, 'g1_t2': g1_t2_pending}, f, ensure_ascii=False, indent=2)

print("Saved g1_pending_list.json")
