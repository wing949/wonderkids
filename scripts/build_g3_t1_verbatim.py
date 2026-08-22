import json
import re

with open('scripts/g3_t1_extracted_lines.json', 'r', encoding='utf-8') as f:
    lessons = json.load(f)

print(f"Loaded {len(lessons)} lessons for G3 T1")

for l in lessons:
    print(f"\n--- BÀI {l['lessonNumber']}: {l['title']} ---")
    text = "\n".join(l['lines'])
    # Filter out exercise boilerplate like "Trao đổi với bạn...", "ĐỌC", "Từ ngữ", question sections
    print(text[:300])
