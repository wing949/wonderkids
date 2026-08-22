# -*- coding: utf-8 -*-
import os
import sys
import json
import re

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"

catalog_file = os.path.join(WORKSPACE, 'src', 'data', 'curriculum', 'math', 'officialMathCatalog.ts')
with open(catalog_file, 'r', encoding='utf-8') as f:
    cat_text = f.read()

json_match = re.search(r'export const OFFICIAL_MATH_342_CATALOG: MathCurriculumTopic\[\] = (\[.*?\]);', cat_text, re.DOTALL)
if not json_match:
    print("Cannot find catalog JSON in officialMathCatalog.ts")
    sys.exit(1)

catalog = json.loads(json_match.group(1))

# Re-write grade1.ts to grade5.ts with CLEAN CurriculumTopic structure and exact .ts imports
for g in range(1, 6):
    g_lessons = [item for item in catalog if item['grade'] == g]
    out_file = os.path.join(WORKSPACE, 'src', 'data', 'curriculum', 'math', f'grade{g}.ts')
    
    topics = []
    for item in g_lessons:
        topic_obj = {
            "id": item['id'],
            "semester": item['semester'],
            "lessonNumber": item['lessonNumber'],
            "title": item['title'],
            "unit": item['unit'],
            "textbookPageRef": item['textbookPageRef'],
            "description": item['description'],
            "summary": f"Nội dung trọng tâm của {item['title']} chuẩn SGK NXB Giáo Dục Việt Nam.",
            "keyPoints": [
                f"Nắm vững định nghĩa và tính chất của {item['title']}.",
                "Rèn luyện kĩ năng tính toán và tư duy trực quan.",
                "Vận dụng linh hoạt vào các bài toán thực tế đời sống."
            ],
            "mascotTip": item['mascotTip']
        }
        topics.append(topic_obj)
    
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write("import { CurriculumTopic } from '../types.ts';\n\n")
        f.write(f"export const MATH_GRADE_{g}_TOPICS: CurriculumTopic[] = ")
        f.write(json.dumps(topics, ensure_ascii=False, indent=2))
        f.write(";\n")
    
    print(f"✅ Đã làm sạch dữ liệu Lớp {g}: {len(topics)} bài học tại {out_file}")

print("\n🎉 Hoàn tất làm sạch toàn bộ 5 khối lớp môn Toán!")
