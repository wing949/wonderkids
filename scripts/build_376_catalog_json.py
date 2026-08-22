import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

# Read sgkTranscripts.ts
with open('src/data/curriculum/vietnamese/sgkTranscripts.ts', 'r', encoding='utf-8') as f:
    sgk_code = f.read()

verified_ids = set(re.findall(r"'([a-z0-9-]+)':\s*\{", sgk_code))
print(f"Verified IDs count: {len(verified_ids)}")

# Read officialCatalog.ts
with open('src/data/curriculum/vietnamese/officialCatalog.ts', 'r', encoding='utf-8') as f:
    cat_code = f.read()

LEGACY_T1 = {1: 20, 2: 18, 3: 14, 4: 11, 5: 16}
LEGACY_T2 = {1: 10, 2: 12, 3: 11, 4: 11, 5: 9}

def stable_id(grade, sem, num):
    if sem == 1 and num <= LEGACY_T1[grade]:
        return f"tv-g{grade}-b{num}"
    if sem == 2 and num <= LEGACY_T2[grade]:
        return f"tv-g{grade}-b{LEGACY_T1[grade] + num}"
    return f"tv-g{grade}-t{sem}-b{num}"

all_lessons = []

for g in range(1, 6):
    for s in [1, 2]:
        var_name = f"GRADE_{g}_T{s}"
        m = re.search(rf"const {var_name}: CatalogRow\[\] = \[(.*?)\];", cat_code, re.DOTALL)
        if m:
            rows = re.findall(r"\['([^']+)',\s*(\d+)\]", m.group(1))
            for i, (title, p_str) in enumerate(rows):
                num = i + 1
                lid = stable_id(g, s, num)
                p_start = int(p_str)
                # Next lesson page or book end page
                if i + 1 < len(rows):
                    p_end = int(rows[i+1][1]) - 1
                else:
                    p_end = p_start + 3 # default estimate
                is_ver = lid in verified_ids
                all_lessons.append({
                    'id': lid,
                    'grade': g,
                    'semester': s,
                    'lessonNumber': num,
                    'title': f"Bài {num}: {title}",
                    'sourceTitle': title,
                    'startPage': p_start,
                    'endPage': p_end,
                    'isVerified': is_ver
                })

print(f"Total catalog lessons: {len(all_lessons)}")
pending = [l for l in all_lessons if not l['isVerified']]
print(f"Pending lessons: {len(pending)}")

with open('scripts/all_376_lessons_catalog.json', 'w', encoding='utf-8') as f:
    json.dump(all_lessons, f, ensure_ascii=False, indent=2)

print("Saved scripts/all_376_lessons_catalog.json")
