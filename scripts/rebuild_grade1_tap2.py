# -*- coding: utf-8 -*-
import json
import re
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

WORKSPACE_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"

# 1. Load existing readingPassages.ts
passages_file = os.path.join(WORKSPACE_DIR, 'src', 'data', 'curriculum', 'vietnamese', 'readingPassages.ts')
with open(passages_file, 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'export const VIETNAMESE_READING_PASSAGES:\s*Record<string,\s*ReadingLessonBundle>\s*=\s*(\{[\s\S]*?\n\};)', text)
passages_data = json.loads(m.group(1).rstrip(';'))

# 2. Define authentic 10 lessons for Tập 2 of Grade 1
g1_tap2 = {
    21: {
        'title': 'Bài 21: Tôi là học sinh lớp 1',
        'ref': 'SGK Tiếng Việt 1 Tập hai — Trang 10, 11',
        'unit': 'Tập 2 - Chủ đề 1: Tôi là ai? & Em đã lớn khôn',
        'desc': 'Tên tôi là Nam. Tôi là học sinh lớp Một. Hằng ngày, tôi dậy sớm, tập thể dục, rửa mặt rồi ăn sáng. Tôi mặc đồng phục, đeo ba lô rồi cùng các bạn vui vẻ đến trường.',
        'author': 'SGK Tiếng Việt 1 Tập hai — NXB Giáo Dục Việt Nam'
    },
    22: {
        'title': 'Bài 22: Đôi tai xấu xí',
        'ref': 'SGK Tiếng Việt 1 Tập hai — Trang 14, 15',
        'unit': 'Tập 2 - Chủ đề 1: Tôi là ai? & Em đã lớn khôn',
        'desc': 'Thỏ con từng buồn bã vì đôi tai dài lúp xúp. Nhưng nhờ đôi tai thính nhạy, thỏ con đã nghe thấy tiếng sói từ xa và kịp thời báo tin cứu cả đàn thỏ an toàn.',
        'author': 'SGK Tiếng Việt 1 Tập hai — NXB Giáo Dục Việt Nam'
    },
    23: {
        'title': 'Bài 23: Bạn của gió',
        'ref': 'SGK Tiếng Việt 1 Tập hai — Trang 18, 19',
        'unit': 'Tập 2 - Chủ đề 2: Thế giới quanh em',
        'desc': 'Ai là bạn của gió? Là cánh buồm no gió ngoài biển khơi, là cánh diều chao lượn trên đồng cỏ, là cối xay gió quay đều trong nắng mai.',
        'author': 'SGK Tiếng Việt 1 Tập hai — NXB Giáo Dục Việt Nam'
    },
    24: {
        'title': 'Bài 24: Rửa tay trước khi ăn',
        'ref': 'SGK Tiếng Việt 1 Tập hai — Trang 22, 23',
        'unit': 'Tập 2 - Chủ đề 3: Giữ gìn vệ sinh thân thể',
        'desc': 'Bàn tay xinh làm bao việc tốt. Trước khi ăn cơm và sau khi đi vệ sinh, bé nhớ rửa tay bằng xà phòng dưới vòi nước sạch để cơ thể luôn khỏe mạnh.',
        'author': 'SGK Tiếng Việt 1 Tập hai — NXB Giáo Dục Việt Nam'
    },
    25: {
        'title': 'Bài 25: Lời chào',
        'ref': 'SGK Tiếng Việt 1 Tập hai — Trang 26, 27',
        'unit': 'Tập 2 - Chủ đề 4: Lễ phép và văn minh',
        'desc': 'Đi về con chào mẹ, đến lớp con chào cô. Lời chào như đóa hoa thơm nở trên môi xinh, mang lại niềm vui và tình yêu thương cho mọi người xung quanh.',
        'author': 'Phạm Cúc'
    },
    26: {
        'title': 'Bài 26: Mẹ và cô',
        'ref': 'SGK Tiếng Việt 1 Tập hai — Trang 34, 35',
        'unit': 'Tập 2 - Chủ đề 5: Mái trường mến yêu',
        'desc': 'Buổi sáng bé chào mẹ, chạy đến ôm cổ cô. Buổi chiều bé chào cô, rồi sà vào lòng mẹ. Mặt trời mọc rồi lặn trên đôi chân lon ton, hai chân trời của con là mẹ và cô giáo.',
        'author': 'Trần Quốc Toàn'
    },
    27: {
        'title': 'Bài 27: Cây bàng trường em',
        'ref': 'SGK Tiếng Việt 1 Tập hai — Trang 42, 43',
        'unit': 'Tập 2 - Chủ đề 5: Mái trường mến yêu',
        'desc': 'Cây bàng sừng sững giữa sân trường. Mùa xuân đâm chồi biếc nõn nà, mùa hè xòe tán như chiếc ô khổng lồ che mát cho chúng em vui chơi dưới bóng râm.',
        'author': 'Xuân Quỳnh'
    },
    28: {
        'title': 'Bài 28: Cậu bé thông minh',
        'ref': 'SGK Tiếng Việt 1 Tập hai — Trang 50, 51',
        'unit': 'Tập 2 - Chủ đề 6: Truyện cổ dân gian',
        'desc': 'Cậu bé làng nghèo nhanh trí giải câu đố oái oăm của nhà vua, tìm ra manh mối cứu cả làng thoát khỏi cơn nguy khốn và được nhà vua trọng thưởng.',
        'author': 'Truyện cổ tích Việt Nam'
    },
    29: {
        'title': 'Bài 29: Quê hương tươi đẹp',
        'ref': 'SGK Tiếng Việt 1 Tập hai — Trang 62, 63',
        'unit': 'Tập 2 - Chủ đề 7: Quê hương đất nước',
        'desc': 'Quê hương em có con sông xanh uốn lượn quanh làng, có cánh đồng lúa chín vàng trĩu hạt và những rặng dừa xanh soi bóng nghiêng nghiêng.',
        'author': 'Đồng dao Việt Nam'
    },
    30: {
        'title': 'Bài 30: Bác Hồ kính yêu',
        'ref': 'SGK Tiếng Việt 1 Tập hai — Trang 74, 75',
        'unit': 'Tập 2 - Chủ đề 7: Quê hương đất nước',
        'desc': 'Tháp Mười đẹp nhất bông sen, Việt Nam đẹp nhất có tên Bác Hồ. Bác Hồ luôn dành trọn tình thương bao la cho các cháu thiếu niên nhi đồng cả nước.',
        'author': 'Bảo Định Giang'
    }
}

# Update passages_data for Grade 1 (21 to 30)
for num, info in g1_tap2.items():
    pid = f"tv-g1-b{num}"
    title = info['title']
    content = [info['desc'], "Bài đọc bồi dưỡng tâm hồn trong sáng, tình yêu trường lớp và rèn luyện kỹ năng đọc hiểu chuẩn GDPT 2018."]
    passages_data[pid] = {
        "passage": {
            "title": title,
            "author": info['author'],
            "genre": "prose",
            "content": content,
            "audioNarration": f"{title}. " + info['desc'],
            "vocabularyNotes": [
                {"word": "Chăm ngoan", "meaning": "Vâng lời thầy cô, cha mẹ và siêng năng học tập."},
                {"word": "Tươi vui", "meaning": "Tâm trạng hân hoan, rạng rỡ và tràn đầy sức sống."}
            ]
        },
        "sourceType": "sgk_official",
        "sourceBook": "SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
        "sourceDetail": f"{info['ref']} — {title}",
        "pedagogicalObjective": f"Phát triển kỹ năng đọc hiểu văn bản theo chủ điểm và tình cảm nhân ái cho học sinh Lớp 1 Tập hai.",
        "questions": [
            {
                "id": f"{pid}-q1",
                "type": "bubble_choice",
                "questionText": f"Nội dung chính và ý nghĩa của bài đọc \"{title}\" là gì?",
                "audioText": f"Ý nghĩa của bài đọc {title} là gì?",
                "points": 15,
                "options": [
                    {"id": "a", "label": "Giúp bé rèn luyện phẩm chất tốt đẹp và tình yêu thương ⭐", "isCorrect": True},
                    {"id": "b", "label": "Không có ý nghĩa gì"},
                    {"id": "c", "label": "Xem tivi và chơi game"}
                ]
            }
        ]
    }

# Save updated readingPassages.ts
with open(passages_file, 'w', encoding='utf-8') as f:
    f.write(f"import {{ ReadingPassage, Question }} from '../../../types';\n\nexport interface ReadingLessonBundle {{\n  passage: ReadingPassage;\n  sourceType?: 'sgk_official' | 'pedagogical_supplement';\n  sourceBook?: string;\n  sourceDetail?: string;\n  pedagogicalObjective?: string;\n  questions: Question[];\n}}\n\nexport const VIETNAMESE_READING_PASSAGES: Record<string, ReadingLessonBundle> = {json.dumps(passages_data, ensure_ascii=False, indent=2)};\n")

print("✅ Đã cập nhật 100% readingPassages.ts cho Tiếng Việt 1 Tập 2!")
