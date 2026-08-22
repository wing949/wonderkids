import json
import re

with open("src/data/curriculum/vietnamese/officialCatalog.ts", "r", encoding="utf-8") as f:
    text = f.read()

# Parse GRADE_X_TX arrays
rows_by_grade_sem = {}

for g in [1, 2, 3, 4, 5]:
    for sem in [1, 2]:
        var_name = f"GRADE_{g}_T{sem}"
        m = re.search(var_name + r":\s*CatalogRow\[\]\s*=\s*\[([\s\S]*?)\];", text)
        if m:
            content = m.group(1)
            # Find all ['Title', Page]
            items = re.findall(r"\['([^']+)',\s*(\d+)\]", content)
            rows_by_grade_sem[(g, sem)] = [(t, int(p)) for t, p in items]

LEGACY_T1_COUNTS = { 1: 20, 2: 18, 3: 14, 4: 11, 5: 16 }
LEGACY_T2_COUNTS = { 1: 10, 2: 12, 3: 11, 4: 11, 5: 9 }

def get_stable_id(grade, semester, lesson_number):
    if semester == 1 and lesson_number <= LEGACY_T1_COUNTS[grade]:
        return f"tv-g{grade}-b{lesson_number}"
    if semester == 2 and lesson_number <= LEGACY_T2_COUNTS[grade]:
        return f"tv-g{grade}-b{LEGACY_T1_COUNTS[grade] + lesson_number}"
    return f"tv-g{grade}-t{semester}-b{lesson_number}"

catalog = []

for (g, sem), rows in rows_by_grade_sem.items():
    for idx, (title, start_page) in enumerate(rows):
        lesson_num = idx + 1
        stable_id = get_stable_id(g, sem, lesson_num)
        
        # Calculate end page
        if idx + 1 < len(rows):
            end_page = max(start_page, rows[idx + 1][1] - 1)
        else:
            end_page = start_page + 3
            
        catalog.append({
            "id": stable_id,
            "grade": g,
            "semester": sem,
            "lessonNumber": lesson_num,
            "title": f"Bài {lesson_num}: {title}",
            "startPage": start_page,
            "endPage": end_page
        })

print(f"Generated {len(catalog)} official catalog lessons from officialCatalog.ts.")
with open("scripts/all_376_lessons_catalog.json", "w", encoding="utf-8") as f:
    json.dump(catalog, f, ensure_ascii=False, indent=2)
