import json
import re
import os

workspace = os.getcwd()

# Books list
books = [
    (1, 1, 83), (1, 2, 45),
    (2, 1, 32), (2, 2, 30),
    (3, 1, 32), (3, 2, 30),
    (4, 1, 32), (4, 2, 30),
    (5, 1, 32), (5, 2, 30)
]

print("Building 376 Verbatim Lessons from Authentic OCR Raw Files...")

all_lessons_map = {}

# Clean common OCR noise like page numbers, exercise prompts, "ĐỌC", etc.
def clean_page_lines(raw_text):
    lines = [l.strip() for l in raw_text.split('\n') if l.strip()]
    cleaned = []
    for line in lines:
        # Ignore boilerplate exercise headers
        if re.match(r'^(ĐỌC|Từ ngữ|Câu hỏi|Luyện tập|Trao đổi|Quan sát|Dựa vào|Đọc bài|Tuần \d+|Bài \d+|Tiết \d+|\d+\s*\))', line, re.I):
            continue
        if re.match(r'^\(?(Theo|Trích|Phỏng theo|Thơ|Truyện)', line):
            cleaned.append(line)
            continue
        if re.match(r'^\(?\s*\d+\s*\)?$', line): # Standalone page numbers
            continue
        cleaned.append(line)
    return cleaned

for grade, sem, total in books:
    ocr_file = os.path.join(workspace, 'scripts', f'ocr_raw_g{grade}_t{sem}.json')
    if not os.path.exists(ocr_file):
        print(f"Missing {ocr_file}!")
        continue
    with open(ocr_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    print(f"Grade {grade} Sem {sem}: {len(data)} items")
    for item in data:
        lesson_id = item['lessonId']
        all_lessons_map[lesson_id] = item

print(f"Total mapped: {len(all_lessons_map)}")

with open(os.path.join(workspace, 'scripts', 'all_376_ocr_combined.json'), 'w', encoding='utf-8') as f:
    json.dump(all_lessons_map, f, ensure_ascii=False, indent=2)

print("Saved all_376_ocr_combined.json")
