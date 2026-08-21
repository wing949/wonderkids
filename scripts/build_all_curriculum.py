# -*- coding: utf-8 -*-
import json
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

WORKSPACE_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"

# Import all 5 grade data modules
from data_grade1 import G1_DATA
from data_grade2 import G2_DATA
from data_grade3 import G3_DATA
from data_grade4 import G4_DATA
from data_grade5 import G5_DATA

all_grades = [
    (1, G1_DATA, 'grade1.ts', 'VIETNAMESE_GRADE_1_TOPICS'),
    (2, G2_DATA, 'grade2.ts', 'VIETNAMESE_GRADE_2_TOPICS'),
    (3, G3_DATA, 'grade3.ts', 'VIETNAMESE_GRADE_3_TOPICS'),
    (4, G4_DATA, 'grade4.ts', 'VIETNAMESE_GRADE_4_TOPICS'),
    (5, G5_DATA, 'grade5.ts', 'VIETNAMESE_GRADE_5_TOPICS'),
]

full_reading_bundles = {}

for g_num, g_dict, filename, varname in all_grades:
    topics_list = []
    keys_sorted = sorted(g_dict.keys(), key=lambda x: int(x.split('-b')[-1]))
    
    for idx, key in enumerate(keys_sorted, 1):
        item = g_dict[key]
        passage = {
            "title": item["title"],
            "author": item["author"],
            "genre": item["genre"],
            "content": item["content"],
            "audioNarration": f"{item['title']}. " + " ".join(item["content"]).replace('\n', ' '),
            "vocabularyNotes": item["vocabularyNotes"]
        }
        
        bundle = {
            "passage": passage,
            "sourceType": item.get("sourceType", "sgk_official"),
            "sourceBook": item.get("sourceBook"),
            "sourceDetail": item.get("sourceDetail"),
            "pedagogicalObjective": item.get("pedagogicalObjective"),
            "questions": item.get("questions", [])
        }
        full_reading_bundles[key] = bundle
        
        # Build CurriculumTopic
        # Determine semester
        num = int(key.split('-b')[-1])
        if g_num == 1:
            sem = 1 if num <= 20 else 2
        elif g_num == 2:
            sem = 1 if num <= 18 else 2
        elif g_num == 3:
            sem = 1 if num <= 14 else 2
        elif g_num == 4:
            sem = 1 if num <= 11 else 2
        elif g_num == 5:
            sem = 1 if num <= 16 else 2
        else:
            sem = 1
            
        topic = {
            "id": key,
            "semester": sem,
            "lessonNumber": num,
            "title": item["title"],
            "unit": item.get("sourceDetail", "").split(" — ")[-1] if " — " in item.get("sourceDetail", "") else f"Lớp {g_num} Tập {sem}",
            "textbookPageRef": item.get("sourceDetail"),
            "sourceType": item.get("sourceType", "sgk_official"),
            "sourceBook": item.get("sourceBook"),
            "sourceDetail": item.get("sourceDetail"),
            "pedagogicalObjective": item.get("pedagogicalObjective"),
            "description": f"Bài đọc \"{item['title']}\" (Tác giả: {item['author']}) chuẩn SGK Tiếng Việt {g_num} Tập {sem}.",
            "summary": f"Bài đọc \"{item['title']}\" — {item.get('sourceDetail')}",
            "keyPoints": [
                "Đọc to, rõ ràng, trôi chảy và diễn cảm toàn bộ bài học.",
                "Nắm vững nội dung bài đọc và từ ngữ chú giải chuẩn SGK GDPT 2018."
            ],
            "mascotTip": f"MiuMiu: Cùng luyện đọc thật hay bài \"{item['title']}\" của tác giả {item['author']} nhé!"
        }
        topics_list.append(topic)
        
    # Write grade file
    grade_file_path = os.path.join(WORKSPACE_DIR, 'src', 'data', 'curriculum', 'vietnamese', filename)
    with open(grade_file_path, 'w', encoding='utf-8') as f:
        f.write(f"import {{ CurriculumTopic }} from '../types';\n\nexport const {varname}: CurriculumTopic[] = {json.dumps(topics_list, ensure_ascii=False, indent=2)};\n")
    print(f"✅ Đã tạo {filename} với {len(topics_list)} bài học chuẩn xác!")

# Write readingPassages.ts
passages_file_path = os.path.join(WORKSPACE_DIR, 'src', 'data', 'curriculum', 'vietnamese', 'readingPassages.ts')
with open(passages_file_path, 'w', encoding='utf-8') as f:
    f.write(f"import {{ ContentProvenance, ReadingPassage, Question }} from '../../../types';\n\nexport interface ReadingLessonBundle {{\n  passage: ReadingPassage;\n  sourceType?: 'sgk_official' | 'pedagogical_supplement';\n  sourceBook?: string;\n  sourceDetail?: string;\n  provenance?: ContentProvenance;\n  pedagogicalObjective?: string;\n  questions: Question[];\n}}\n\nexport const VIETNAMESE_READING_PASSAGES: Record<string, ReadingLessonBundle> = {json.dumps(full_reading_bundles, ensure_ascii=False, indent=2)};\n")

print(f"\n🎉 HOÀN TẤT NẠP NGUYÊN VĂN TOÀN BỘ {len(full_reading_bundles)} BÀI ĐỌC TIẾNG VIỆT (LỚP 1 - 5)!")
