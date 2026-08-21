# -*- coding: utf-8 -*-
import json
import re
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"

with open(os.path.join(WORKSPACE_DIR, 'src', 'data', 'curriculum', 'vietnamese', 'readingPassages.ts'), 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'export const VIETNAMESE_READING_PASSAGES:\s*Record<string,\s*ReadingLessonBundle>\s*=\s*(\{[\s\S]*?\n\};)', text)
passages_data = json.loads(m.group(1).rstrip(';'))

g1_keys = [k for k in passages_data.keys() if k.startswith('tv-g1-b')]
g1_keys.sort(key=lambda x: int(x.split('-b')[-1]))

topics = []
for k in g1_keys:
    num = int(k.split('-b')[-1])
    item = passages_data[k]
    passage = item['passage']
    title = passage['title']
    semester = 1 if num <= 20 else 2
    source_detail = item.get('sourceDetail', '')
    source_book = item.get('sourceBook', '')
    pedagogical_obj = item.get('pedagogicalObjective', '')
    
    if semester == 1:
        unit = f"Tập 1 - Chủ đề {((num - 1) // 5) + 1}: Âm, Chữ cái & Vần cơ bản"
        desc = f"Khám phá câu nhận biết, học âm vần và từ ngữ ứng dụng chuẩn SGK Tiếng Việt 1 cho bài \"{title}\"."
    else:
        unit = f"Tập 2 - Chủ đề {((num - 21) // 3) + 1}: Đọc hiểu văn bản theo chủ điểm"
        desc = f"Luyện đọc diễn cảm và tìm hiểu nội dung bài đọc \"{title}\" chuẩn SGK Tiếng Việt 1 Tập hai."
        
    page_ref = source_detail.split('—')[0].strip() if '—' in source_detail else source_detail

    topics.append({
        "id": k,
        "semester": semester,
        "lessonNumber": num,
        "title": title,
        "unit": unit,
        "textbookPageRef": page_ref,
        "sourceType": "sgk_official",
        "sourceBook": source_book,
        "sourceDetail": source_detail,
        "pedagogicalObjective": pedagogical_obj,
        "description": desc,
        "summary": f"Bài học \"{title}\" chuẩn SGK Tiếng Việt 1 (NXB Giáo Dục Việt Nam).",
        "keyPoints": [
            "Đọc to, rõ ràng và chuẩn xác từng câu trong bài.",
            "Nắm vững ý nghĩa và bài học giáo dục nhân văn."
        ],
        "mascotTip": f"MiuMiu: Cùng cô giáo đọc thật hay bài \"{title}\" nhé bạn nhỏ!"
    })

target_file = os.path.join(WORKSPACE_DIR, 'src', 'data', 'curriculum', 'vietnamese', 'grade1.ts')
with open(target_file, 'w', encoding='utf-8') as f:
    f.write(f"import {{ CurriculumTopic }} from '../types';\n\nexport const VIETNAMESE_GRADE_1_TOPICS: CurriculumTopic[] = {json.dumps(topics, ensure_ascii=False, indent=2)};\n")

print("✅ Đã đồng bộ hoàn hảo 100% file grade1.ts!")
