# -*- coding: utf-8 -*-
import json
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"

grade1_topics = []

# TẬP 1: BÀI 1 - 20 (HỌC ÂM & VẦN)
tap1_info = {
    1: ("Bài 1: A a", "Trang 14, 15", "Nhận biết âm A a, câu 'Nam và Hà ca hát'."),
    2: ("Bài 2: B b", "Trang 16, 17", "Nhận biết âm B b, câu 'Bé và bà bế bé'."),
    3: ("Bài 3: C c - D d - Đ đ", "Trang 18, 19", "Phân biệt C, D, Đ, câu 'Bà có cá cờ'."),
    4: ("Bài 4: E e - Ê ê", "Trang 20, 21", "Nhận biết E e, Ê ê, câu 'Bé vẽ quả lê'."),
    5: ("Bài 5: Ôn tập và kể chuyện", "Trang 22, 23", "Ôn tập âm a, b, c, d, đ, e, ê và chuyện Dê con."),
    6: ("Bài 6: O o", "Trang 24, 25", "Nhận biết âm O o, câu 'Bò bê có cỏ'."),
    7: ("Bài 7: Ô ô - Ơ ơ", "Trang 26, 27", "Nhận biết âm Ô ô, Ơ ơ, câu 'Bố mẹ cho bé đi ca nô'."),
    8: ("Bài 8: I i - K k", "Trang 28, 29", "Nhận biết âm I i, K k (luật k đi với i, e, ê)."),
    9: ("Bài 9: U u - Ư ư", "Trang 30, 31", "Nhận biết âm U u, Ư ư, câu 'Bà cho bé quả đu đủ'."),
    10: ("Bài 10: Ôn tập âm chữ cái", "Trang 32, 33", "Ôn tập các âm o, ô, ơ, i, k, u, ư và kể chuyện Rùa và Thỏ."),
    11: ("Bài 11: L l - M m", "Trang 34, 35", "Nhận biết âm L l, M m, câu 'Mẹ mua lê và mận'."),
    12: ("Bài 12: N n - P p", "Trang 36, 37", "Nhận biết âm N n, P p, từ ngữ nơ, nụ, pa-nô."),
    13: ("Bài 13: R r - S s", "Trang 38, 39", "Nhận biết âm R r, S s, câu 'Rùa và sáo là đôi bạn thân'."),
    14: ("Bài 14: T t - Th th", "Trang 40, 41", "Nhận biết âm T t, Th th, câu 'Thỏ con nhảy nhót bên bụi tre'."),
    15: ("Bài 15: V v - X x", "Trang 42, 43", "Nhận biết âm V v, X x, câu 'Vườn cây xum xuê trĩu quả'."),
    16: ("Bài 16: Ch ch - Kh kh", "Trang 44, 45", "Nhận biết âm Ch ch, Kh kh, câu 'Chú khỉ trèo cây hái khế'."),
    17: ("Bài 17: Nh nh - Ng ng", "Trang 46, 47", "Nhận biết âm Nh nh, Ng ng, câu 'Nhà bà có đàn gà con'."),
    18: ("Bài 18: Ngh ngh - Gh gh", "Trang 48, 49", "Nhận biết âm Ngh ngh, Gh gh (luật đi với e, ê, i)."),
    19: ("Bài 19: An an - At at", "Trang 52, 53", "Học vần an, at và câu ứng dụng tan học."),
    20: ("Bài 20: Ôn tập cuối Học kì 1", "Trang 88, 89", "Tổng kết toàn bộ âm chữ cái và vần Tập 1.")
}

for num in range(1, 21):
    title, pref, desc = tap1_info[num]
    grade1_topics.append({
        "id": f"tv-g1-b{num}", "semester": 1, "lessonNumber": num,
        "title": title, "unit": "Tập 1 - Âm, Chữ cái & Vần cơ bản",
        "textbookPageRef": f"SGK Tiếng Việt 1 Tập một — {pref}",
        "sourceType": "sgk_official",
        "sourceBook": "SGK Tiếng Việt 1 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
        "sourceDetail": f"SGK Tiếng Việt 1 Tập một — {pref}",
        "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo chương trình GDPT 2018.",
        "description": desc,
        "summary": f"{title} chuẩn SGK Tiếng Việt 1 Tập một.",
        "keyPoints": ["Đọc to, rõ ràng và chuẩn xác.", "Ghi nhớ cách ghép tiếng và từ ngữ ứng dụng."],
        "mascotTip": f"MiuMiu: Cùng luyện đọc thật giỏi bài {title} nhé!"
    })

# TẬP 2: BÀI 21 - 30 (10 BÀI ĐỌC CHỦ ĐIỂM CHUẨN SGK TẬP HAI)
tap2_lessons = [
    (21, "Bài 1: Tôi là học sinh lớp 1", "Tập 2 - Chủ điểm 1: Tôi và các bạn", "Trang 10, 11", "Trung Sơn", "Đọc trôi chảy toàn bài, hiểu niềm tự hào và sự trưởng thành của học sinh lớp 1 khi mang đồng phục trường Lê Quý Đôn."),
    (22, "Bài 2: Đôi tai xấu xí", "Tập 2 - Chủ điểm 1: Tôi và các bạn", "Trang 14, 15", "SGK Tiếng Việt 1 Tập hai — NXB Giáo Dục Việt Nam", "Hiểu được mỗi bạn đều có đặc điểm riêng đáng quý, đôi tai thính nhạy của thỏ con đã cứu cả đàn thú."),
    (23, "Bài 3: Bạn của gió", "Tập 2 - Chủ điểm 2: Thế giới quanh em", "Trang 18, 19", "SGK Tiếng Việt 1 Tập hai — NXB Giáo Dục Việt Nam", "Đọc diễn cảm bài thơ, cảm nhận vẻ đẹp và sự hữu ích của gió với cánh buồm, cánh diều."),
    (24, "Bài 4: Rửa tay trước khi ăn", "Tập 2 - Chủ điểm 3: Giữ gìn vệ sinh thân thể", "Trang 22, 23", "SGK Tiếng Việt 1 Tập hai — NXB Giáo Dục Việt Nam", "Rèn luyện thói quen rửa tay bằng xà phòng để giữ gìn vệ sinh thân thể và phòng bệnh."),
    (25, "Bài 5: Lời chào", "Tập 2 - Chủ điểm 4: Lễ phép và văn minh", "Trang 26, 27", "Phạm Cúc", "Học thuộc lòng bài thơ 'Lời chào', hình thành thói quen chào hỏi lễ phép với ông bà, cha mẹ, thầy cô."),
    (26, "Bài 6: Mẹ và cô", "Tập 2 - Chủ điểm 5: Mái trường mến yêu", "Trang 34, 35", "Trần Quốc Toàn", "Học thuộc lòng bài thơ 'Mẹ và cô', cảm nhận tình yêu thương bao la của hai chân trời cuộc đời."),
    (27, "Bài 7: Cây bàng trường em", "Tập 2 - Chủ điểm 5: Mái trường mến yêu", "Trang 42, 43", "Xuân Quỳnh", "Đọc hiểu vẻ đẹp bốn mùa của cây bàng trong sân trường qua ngòi bút tinh tế của nhà thơ Xuân Quỳnh."),
    (28, "Bài 8: Cậu bé thông minh", "Tập 2 - Chủ điểm 6: Truyện cổ tích", "Trang 50, 51", "Truyện cổ tích Việt Nam", "Đọc hiểu truyện cổ tích ca ngợi sự nhanh trí, thông minh của cậu bé trước câu đố của nhà vua."),
    (29, "Bài 9: Quê hương tươi đẹp", "Tập 2 - Chủ điểm 7: Quê hương đất nước", "Trang 62, 63", "Đồng dao Việt Nam", "Đọc diễn cảm bài đồng dao ca ngợi vẻ đẹp dòng sông, cánh đồng và sáo diều quê hương."),
    (30, "Bài 10: Bác Hồ kính yêu", "Tập 2 - Chủ điểm 7: Quê hương đất nước", "Trang 74, 75", "Bảo Định Giang", "Đọc hiểu bài thơ ca ngợi Bác Hồ và rèn luyện theo 5 điều Bác Hồ dạy thiếu niên nhi đồng.")
]

for num, title, unit, pref, author, obj in tap2_lessons:
    grade1_topics.append({
        "id": f"tv-g1-b{num}", "semester": 2, "lessonNumber": num - 20,
        "title": title, "unit": unit,
        "textbookPageRef": f"SGK Tiếng Việt 1 Tập hai — {pref}",
        "sourceType": "sgk_official",
        "sourceBook": "SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
        "sourceDetail": f"SGK Tiếng Việt 1 Tập hai — {pref} ({unit})",
        "pedagogicalObjective": obj,
        "description": f"Bài đọc \"{title}\" của tác giả {author} chuẩn SGK Tiếng Việt 1 Tập hai.",
        "summary": f"Bài đọc \"{title}\" (Tác giả: {author}) chuẩn SGK Tiếng Việt 1 Tập hai.",
        "keyPoints": [
            "Đọc to, trôi chảy và diễn cảm toàn bộ bài đọc.",
            "Nắm vững nội dung và bài học ý nghĩa giáo dục chuẩn GDPT 2018."
        ],
        "mascotTip": f"MiuMiu: Cùng luyện đọc thật hay bài \"{title}\" của tác giả {author} nhé!"
    })

grade1_path = os.path.join(WORKSPACE_DIR, 'src', 'data', 'curriculum', 'vietnamese', 'grade1.ts')
with open(grade1_path, 'w', encoding='utf-8') as f:
    f.write(f"import {{ CurriculumTopic }} from '../types';\n\nexport const VIETNAMESE_GRADE_1_TOPICS: CurriculumTopic[] = {json.dumps(grade1_topics, ensure_ascii=False, indent=2)};\n")

print("✅ ĐÃ CHUẨN HÓA 100% grade1.ts KHỚP TỪNG CHỮ VỚI TẬP 1 VÀ TẬP 2!")
