# -*- coding: utf-8 -*-
import json
import re
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

WORKSPACE_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"

with open(os.path.join(WORKSPACE_DIR, 'src', 'data', 'curriculum', 'vietnamese', 'readingPassages.ts'), 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'export const VIETNAMESE_READING_PASSAGES:\s*Record<string,\s*ReadingLessonBundle>\s*=\s*(\{[\s\S]*?\n\};)', text)
passages_data = json.loads(m.group(1).rstrip(';'))

unit_names_g1 = {
    range(1, 6): "Tập 1 - Chủ đề 1: Em là học sinh",
    range(6, 11): "Tập 1 - Chủ đề 2: Âm chữ cái mở rộng",
    range(11, 16): "Tập 1 - Chủ đề 3: Các âm ghép đôi",
    range(16, 19): "Tập 1 - Chủ đề 4: Âm ghép phức hợp",
    range(19, 26): "Tập 1 - Chủ đề 5: Vần có âm cuối n, t",
    range(26, 31): "Tập 2 - Chủ đề 6: Em đã lớn khôn & Đọc hiểu"
}

def get_unit_g1(num):
    for r, name in unit_names_g1.items():
        if num in r:
            return name
    return "Tập 1 - Chủ đề: Tiếng Việt 1"

for grade in range(1, 6):
    g_keys = [k for k in passages_data.keys() if k.startswith(f'tv-g{grade}-b')]
    # Sort numerically
    g_keys.sort(key=lambda x: int(x.split('-b')[-1]))
    
    topics = []
    for k in g_keys:
        num = int(k.split('-b')[-1])
        item = passages_data[k]
        passage = item['passage']
        title = passage['title']
        source_detail = item.get('sourceDetail', '')
        source_book = item.get('sourceBook', '')
        pedagogical_obj = item.get('pedagogicalObjective', '')
        
        # Determine semester
        semester = 1 if (grade == 1 and num <= 25) or (grade == 2 and num <= 18) or (grade == 3 and num <= 14) or (grade == 4 and num <= 15) or (grade == 5 and num <= 13) else 2
        
        # Determine unit
        if grade == 1:
            unit = get_unit_g1(num)
        elif grade == 2:
            unit = f"Tập {semester} - Chủ đề {((num - 1) // 4) + 1}: Em lớn lên từng ngày" if semester == 1 else f"Tập 2 - Chủ đề {((num - 1) // 4) + 1}: Vẻ đẹp non sông"
        elif grade == 3:
            unit = f"Tập {semester} - Chủ đề {((num - 1) // 4) + 1}: Mái trường & Cuộc sống"
        elif grade == 4:
            unit = f"Tập {semester} - Chủ đề {((num - 1) // 4) + 1}: Chân trời tri thức & Quê hương"
        else:
            unit = f"Tập {semester} - Chủ đề {((num - 1) // 4) + 1}: Khát vọng vươn lên & Đất nước"

        page_ref = source_detail.split('—')[0].strip() if '—' in source_detail else source_detail
        if not page_ref:
            page_ref = f"SGK Tiếng Việt {grade} — Bài {num}"

        desc = f"Học và luyện đọc diễn cảm bài \"{title}\", mở rộng vốn từ và rèn luyện kỹ năng đọc hiểu chuẩn GDPT 2018."
        if grade == 1 and num <= 25:
            desc = f"Khám phá câu nhận biết, luyện đọc âm vần và từ ngữ ứng dụng chuẩn SGK Tiếng Việt 1 cho bài \"{title}\"."

        summary = f"Bài học \"{title}\" bồi dưỡng năng lực ngôn ngữ và phẩm chất tốt đẹp cho học sinh Lớp {grade}."
        
        key_points = [
            f"Đọc to, rõ ràng và phát âm chuẩn xác từng từ trong bài.",
            f"Hiểu được nội dung và ý nghĩa sâu sắc mà bài học gửi gắm."
        ]
        
        mascot_tip = f"MiuMiu: Cùng luyện đọc to, rõ ràng và truyền cảm bài \"{title}\" cùng cô giáo nhé!"

        topics.append({
            "id": k,
            "semester": semester,
            "lessonNumber": num,
            "title": f"Bài {num}: {title.replace(f'Bài {num}: ', '')}" if not title.startswith(f"Bài {num}") else title,
            "unit": unit,
            "textbookPageRef": page_ref,
            "sourceType": item.get('sourceType', 'sgk_official'),
            "sourceBook": source_book,
            "sourceDetail": source_detail,
            "pedagogicalObjective": pedagogical_obj,
            "description": desc,
            "summary": summary,
            "keyPoints": key_points,
            "mascotTip": mascot_tip
        })

    # Render TS file
    target_file = os.path.join(WORKSPACE_DIR, 'src', 'data', 'curriculum', 'vietnamese', f'grade{grade}.ts')
    ts_content = f"""import {{ CurriculumTopic }} from '../types';

export const VIETNAMESE_GRADE_{grade}_TOPICS: CurriculumTopic[] = {json.dumps(topics, ensure_ascii=False, indent=2)};
"""
    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"✅ Đã đồng bộ 100% file grade{grade}.ts ({len(topics)} topics) khớp hoàn toàn với readingPassages.ts!")

print("\n🎉 HOÀN TẤT ĐỒNG BỘ TOÀN BỘ 5 KHỐI LỚP TIẾNG VIỆT!")
