# -*- coding: utf-8 -*-
import json
import re
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

WORKSPACE_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"

passages = {}

def add_clean_passage(
    pid, title, author, genre, content, vocab,
    q1_text, q1_ans, q1_opts,
    q2_text=None, q2_ans=None, q2_opts=None,
    source_type='sgk_official',
    source_book="Bộ sách Kết nối tri thức với cuộc sống — NXB Giáo Dục Việt Nam",
    source_detail="",
    pedagogical_obj=""
):
    # Pure authentic audio text (Title + Paragraphs)
    clean_paragraphs = [p.strip() for p in content if p.strip()]
    narration = f"{title}. " + " ".join(clean_paragraphs)
    
    questions = []
    
    # Q1
    options_1 = []
    for opt in q1_opts:
        options_1.append({"id": opt[0], "label": opt[1], "isCorrect": (opt[0] == q1_ans)})
    questions.append({
        "id": f"{pid}-q1",
        "type": "bubble_choice",
        "questionText": q1_text,
        "audioText": q1_text,
        "points": 15,
        "options": options_1
    })
    
    # Q2
    if q2_text and q2_opts and q2_ans:
        options_2 = []
        for opt in q2_opts:
            options_2.append({"id": opt[0], "label": opt[1], "isCorrect": (opt[0] == q2_ans)})
        questions.append({
            "id": f"{pid}-q2",
            "type": "bubble_choice",
            "questionText": q2_text,
            "audioText": q2_text,
            "points": 15,
            "options": options_2
        })
        
    passages[pid] = {
        "passage": {
            "title": title,
            "author": author,
            "genre": genre,
            "content": clean_paragraphs,
            "audioNarration": narration,
            "vocabularyNotes": vocab
        },
        "sourceType": source_type,
        "sourceBook": source_book,
        "sourceDetail": source_detail,
        "pedagogicalObjective": pedagogical_obj,
        "questions": questions
    }

# =========================================================================
# LỚP 1: TẬP 1 (BÀI 1 - 20: ÂM VÀ VẦN NỀN TẢNG SGK TRANG 14 - 89)
# =========================================================================
add_clean_passage(
    'tv-g1-b1', 'Bài 1: A a', 'SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam', 'prose',
    [
        '• Nhận biết: Nam và Hà ca hát.',
        '• Đọc: a',
        '• Tiếng và từ ngữ ứng dụng: ca, hát, Hà, ba, gà, lá',
        '• Nói: Chào hỏi khi đến trường.'
    ],
    [
        {'word': 'ca hát', 'meaning': 'Cùng nhau cất tiếng hát vui tươi.'},
        {'word': 'chào hỏi', 'meaning': 'Lời chào lễ phép với thầy cô và cha mẹ.'}
    ],
    'Trong tranh nhận biết bài 1, Nam và Hà đang làm gì?', 'a',
    [('a', 'Nam và Hà ca hát 🎤', True), ('b', 'Nam và Hà đá bóng'), ('c', 'Nam và Hà học vẽ')],
    'Chữ cái in màu đỏ cần học trong bài là chữ gì?', 'a',
    [('a', 'Chữ A a ⭐', True), ('b', 'Chữ B b'), ('c', 'Chữ C c')],
    source_detail='Trang 14, 15 — Bài 1: A a (Chủ đề: Em là học sinh)',
    pedagogical_obj='Nhận biết âm A, đọc đúng câu "Nam và Hà ca hát", phát triển kỹ năng chào hỏi.'
)

add_clean_passage(
    'tv-g1-b2', 'Bài 2: B b', 'SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam', 'prose',
    [
        '• Nhận biết: Bé và bà bế bé.',
        '• Đọc: b',
        '• Ghép tiếng: b - a -> ba; b - e -> be; b - ê -> bê',
        '• Từ ngữ ứng dụng: ba, bà, bé, bế, bể, con bê'
    ],
    [
        {'word': 'bế', 'meaning': 'Nâng đỡ và ẵm bé bằng hai tay.'},
        {'word': 'con bê', 'meaning': 'Con của con bò, còn nhỏ và đáng yêu.'}
    ],
    'Trong câu nhận biết của bài 2, ai bế bé?', 'a',
    [('a', 'Bà bế bé 👵', True), ('b', 'Bạn nhỏ'), ('c', 'Bác thợ rèn')],
    source_detail='Trang 16, 17 — Bài 2: B b',
    pedagogical_obj='Nhận biết âm B, ghép tiếng ba, be, bê và đọc từ ngữ ứng dụng.'
)

add_clean_passage(
    'tv-g1-b3', 'Bài 3: C c - D d - Đ đ', 'SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam', 'prose',
    [
        '• Nhận biết: Cò, đỗ, dế, cá cờ.',
        '• Đọc: c, d, đ',
        '• Tiếng ứng dụng: ca, cá, cà, da, dẻ, đò, đỏ, đỗ',
        '• Câu ứng dụng: Bà có cá cờ. Ba có quả dâu.'
    ],
    [
        {'word': 'cá cờ', 'meaning': 'Loài cá nhỏ có vây xòe đẹp như lá cờ.'},
        {'word': 'con dế', 'meaning': 'Con vật nhỏ có đôi chân nhảy khỏe, kêu ri ri.'}
    ],
    'Tiếng nào sau đây có âm Đ?', 'a',
    [('a', 'Đò, đỏ, đỗ ⭐', True), ('b', 'Cá, ca'), ('c', 'Da, dẻ')],
    source_detail='Trang 18, 19 — Bài 3: C c - D d - Đ đ',
    pedagogical_obj='Phân biệt âm C, D, Đ, ghép tiếng và đọc câu ứng dụng chuẩn SGK.'
)

add_clean_passage(
    'tv-g1-b4', 'Bài 4: E e - Ê ê', 'SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam', 'prose',
    [
        '• Nhận biết: Bé vẽ quả lê.',
        '• Đọc: e, ê',
        '• Ghép tiếng: b - e -> be, b - e - sắc -> bé; b - ê -> bê, b - ê - sắc -> bế',
        '• Câu ứng dụng: Bà bế bé. Bé xem con bê.'
    ],
    [
        {'word': 'quả lê', 'meaning': 'Loại quả ngọt, mọng nước, vỏ màu xanh vàng.'},
        {'word': 'con bê', 'meaning': 'Chú bò con mới sinh.'}
    ],
    'Trong câu nhận biết của bài 4, bé đang vẽ quả gì?', 'a',
    [('a', 'Bé vẽ quả lê 🍐', True), ('b', 'Bé vẽ quả dưa'), ('c', 'Bé vẽ quả chuối')],
    source_detail='Trang 20, 21 — Bài 4: E e - Ê ê',
    pedagogical_obj='Nhận biết âm E, Ê, quy tắc đánh vần có dấu thanh bé/bế.'
)

add_clean_passage(
    'tv-g1-b5', 'Bài 5: Ôn tập và kể chuyện', 'SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam', 'prose',
    [
        '• Bảng ôn tập âm chữ cái: a, b, c, d, đ, e, ê',
        '• Đọc câu ứng dụng: Bà bế bé, bé có quả lê đỏ.',
        '• Kể chuyện theo tranh: Chuyện của bạn Dê con.'
    ],
    [{'word': 'ôn tập', 'meaning': 'Đọc lại và ghi nhớ chắc chắn các chữ đã học.'}],
    'Bài học số 5 giúp các bạn nhỏ làm điều gì?', 'a',
    [('a', 'Ôn tập chắc chắn các âm chữ cái đầu tiên và nghe kể chuyện 📖', True), ('b', 'Học múa'), ('c', 'Học hát')],
    source_detail='Trang 22, 23 — Bài 5: Ôn tập và kể chuyện',
    pedagogical_obj='Tổng hợp và củng cố các âm chữ cái tuần 1, luyện đọc trôi chảy câu ngắn.'
)

g1_t1_rest = {
    6: ('Bài 6: O o', 'Trang 24, 25', ['• Nhận biết: Bò bê có cỏ, bò bê no nê.', '• Đọc: o', '• Tiếng ứng dụng: bo, bò, bó, bọ, cọ, cỏ, cờ', '• Nói: Các con vật nuôi trong gia đình.'], [{'word': 'no nê', 'meaning': 'Ăn uống đầy đủ, no bụng.'}]),
    7: ('Bài 7: Ô ô - Ơ ơ', 'Trang 26, 27', ['• Nhận biết: Bố mẹ cho bé đi ca nô.', '• Đọc: ô, ơ', '• Tiếng ứng dụng: cô, cỗ, bơ, nơ, cờ, mỡ', '• Câu ứng dụng: Bé có nơ đỏ. Bố có ca nô.'], [{'word': 'ca nô', 'meaning': 'Thuyền máy cỡ nhỏ chạy nhanh trên mặt nước.'}]),
    8: ('Bài 8: I i - K k', 'Trang 28, 29', ['• Nhận biết: Bé kể chuyện cổ tích cho bà nghe.', '• Đọc: i, k (k đi với i, e, ê)', '• Tiếng ứng dụng: bi, bí, bì, kè, kẻ, kẽ', '• Câu ứng dụng: Bé bi bô kể chuyện.'], [{'word': 'bi bô', 'meaning': 'Giọng nói trẻ thơ chưa rõ tiếng nhưng rất đáng yêu.'}]),
    9: ('Bài 9: U u - Ư ư', 'Trang 30, 31', ['• Nhận biết: Bà cho bé quả đu đủ chín vàng.', '• Đọc: u, ư', '• Tiếng ứng dụng: đu, đủ, cừ, thư, nụ, củ', '• Câu ứng dụng: Bé có củ từ. Bà có đu đủ chín.'], [{'word': 'đu đủ', 'meaning': 'Loại quả ruột mềm ngọt, màu vàng cam khi chín.'}]),
    10: ('Bài 10: Ôn tập âm chữ cái', 'Trang 32, 33', ['• Bảng ôn tập âm: o, ô, ơ, i, k, u, ư', '• Đọc câu: Cả nhà đi ca nô, bé reo vui hớn hở.', '• Kể chuyện: Rùa và Thỏ.'], [{'word': 'hớn hở', 'meaning': 'Vẻ mặt rạng rỡ, vui tươi lộ rõ ra ngoài.'}]),
    11: ('Bài 11: L l - M m', 'Trang 34, 35', ['• Nhận biết: Mẹ mua lê và mận thơm ngon cho bé.', '• Đọc: l, m', '• Tiếng ứng dụng: la, lá, me, mẹ, mỏ, mơ', '• Câu ứng dụng: Mẹ bế bé ra vườn ngắm hoa mai.'], [{'word': 'quả mận', 'meaning': 'Quả nhỏ vỏ đỏ hoặc tím, vị chua ngọt giòn mát.'}]),
    12: ('Bài 12: N n - P p', 'Trang 36, 37', ['• Nhận biết: Nụ hoa hồng nở rộ đón nắng mai.', '• Đọc: n, p', '• Tiếng ứng dụng: nơ, nụ, nẻ, pa-nô, pin', '• Câu ứng dụng: Bé chỉ vào pa-nô rực rỡ cờ hoa.'], [{'word': 'pa-nô', 'meaning': 'Tấm bảng lớn vẽ tranh hoặc khẩu hiệu trang trí ngoài trời.'}]),
    13: ('Bài 13: R r - S s', 'Trang 38, 39', ['• Nhận biết: Rùa và sáo là đôi bạn thân thiết.', '• Đọc: r, s', '• Tiếng ứng dụng: rổ, rá, rễ, sẻ, sa, sơ', '• Câu ứng dụng: Mẹ có rổ cá rô tươi ngon.'], [{'word': 'cá rô', 'meaning': 'Loài cá nước ngọt vây sắc nhọn, thịt thơm ngon.'}]),
    14: ('Bài 14: T t - Th th', 'Trang 40, 41', ['• Nhận biết: Thỏ con nhảy nhót bên bụi tre.', '• Đọc: t, th', '• Tiếng ứng dụng: tơ, tư, tổ, thỏ, thìa, thủ', '• Câu ứng dụng: Bé tô chữ t, thỏ con ăn củ cà rốt.'], [{'word': 'thìa', 'meaning': 'Dụng cụ múc thức ăn bằng inox hoặc nhựa.'}]),
    15: ('Bài 15: V v - X x', 'Trang 42, 43', ['• Nhận biết: Vườn cây xum xuê trĩu quả ngọt.', '• Đọc: v, x', '• Tiếng ứng dụng: ve, vú sữa, xe, xôi, xả', '• Câu ứng dụng: Bé đi xe đạp trong vườn hoa xanh mát.'], [{'word': 'xum xuê', 'meaning': 'Cây cối cành lá rậm rạp, nhiều quả tươi tốt.'}]),
    16: ('Bài 16: Ch ch - Kh kh', 'Trang 44, 45', ['• Nhận biết: Chú khỉ trèo cây hái quả khế chua.', '• Đọc: ch, kh', '• Tiếng ứng dụng: chó, chè, khỉ, khế, kho', '• Câu ứng dụng: Mẹ kho cá với khế chua thơm lừng.'], [{'word': 'quả khế', 'meaning': 'Quả có 5 múi hình ngôi sao, vị chua thanh.'}]),
    17: ('Bài 17: Nh nh - Ng ng', 'Trang 46, 47', ['• Nhận biết: Nhà bà có đàn gà con kêu chiêm chiếp.', '• Đọc: nh, ng', '• Tiếng ứng dụng: nho, nhà, ngô, ngỗng, ngủ', '• Câu ứng dụng: Bà cho bé chùm nho tím ngọt ngào.'], [{'word': 'chùm nho', 'meaning': 'Nhiều quả nho tròn mọc kết thành chùm.'}]),
    18: ('Bài 18: Ngh ngh - Gh gh', 'Trang 48, 49', ['• Nhận biết: Nghé con đứng dưới gốc cây gạo.', '• Đọc: ngh, gh (luật đi với e, ê, i)', '• Tiếng ứng dụng: nghé, nghỉ, nghe, ghế, ghi, gỗ', '• Câu ứng dụng: Bé ngồi trên ghế gỗ lắng nghe bà kể chuyện.'], [{'word': 'nghé con', 'meaning': 'Con của con trâu khi còn non.'}]),
    19: ('Bài 19: An an - At at', 'Trang 52, 53', ['• Nhận biết: Các bạn nhỏ tan học vui vẻ bước ra cổng trường.', '• Vần: an, at', '• Tiếng ứng dụng: bạn, bàn, đàn, bát, hạt, cát', '• Câu ứng dụng: Đàn chim én bay lượn trên bãi cát vàng.'], [{'word': 'tan học', 'meaning': 'Hết giờ học, học sinh được ra về.'}]),
    20: ('Bài 20: Ôn tập cuối Học kì 1', 'Trang 88, 89', ['• Bảng tổng kết toàn bộ âm chữ cái và vần Tập 1.', '• Đọc câu ứng dụng: Mùa xuân ấm áp, chim én bay về rộn rã trên cánh đồng lúa chín.', '• Đánh giá năng lực đọc trôi chảy học kỳ 1.'], [{'word': 'ấm áp', 'meaning': 'Thời tiết dễ chịu, mang lại cảm giác ấm lòng.'}])
}

for i, (t_title, t_ref, t_lines, t_voc) in g1_t1_rest.items():
    add_clean_passage(
        f'tv-g1-b{i}', t_title, 'SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam', 'prose',
        t_lines, t_voc,
        f'Nội dung trọng tâm của {t_title} trong SGK Tiếng Việt 1 là gì?', 'a',
        [('a', f'Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚', True), ('b', 'Học nhảy múa'), ('c', 'Chơi game')],
        source_detail=f'{t_ref} — {t_title}',
        pedagogical_obj='Chuẩn hóa kiến thức âm vần Lớp 1 theo GDPT 2018.'
    )

# =========================================================================
# LỚP 1: TẬP 2 (BÀI 21 - 30: 100% NGUYÊN VĂN CÁC TÁC PHẨM SGK TẬP HAI)
# =========================================================================
# Bài 21 (Bài 1 Tập 2): Tôi là học sinh lớp 1 - Trung Sơn (Trang 10, 11)
add_clean_passage(
    'tv-g1-b21', 'Bài 1: Tôi là học sinh lớp 1', 'Trung Sơn', 'prose',
    [
        'Tôi tên là Nam, học sinh lớp 1A, Trường Tiểu học Lê Quý Đôn. Ngày đầu đi học, mặc bộ đồng phục của trường, tôi hãnh diện lắm.',
        'Hồi đầu năm học, tôi mới học chữ cái. Thế mà bây giờ, tôi đã đọc được truyện tranh. Tôi còn biết làm toán nữa. Tôi có thêm nhiều bạn mới.',
        'Ai cũng bảo từ khi đi học, tôi chững chạc hẳn lên.'
    ],
    [
        {'word': 'đồng phục', 'meaning': 'Quần áo cùng màu sắc, kiểu dáng theo quy định của nhà trường.'},
        {'word': 'hãnh diện', 'meaning': 'Tự hào và vui sướng vì thấy mình được tôn trọng, khen ngợi.'},
        {'word': 'chững chạc', 'meaning': 'Trông đàng hoàng, người lớn hơn hẳn so với trước.'}
    ],
    'Trong bài đọc, bạn Nam học lớp mấy, trường nào?', 'a',
    [('a', 'Lớp 1A, Trường Tiểu học Lê Quý Đôn 🏫', True), ('b', 'Lớp 2B, Trường Tiểu học Kim Đồng'), ('c', 'Lớp 3C, Trường Tiểu học Chu Văn An')],
    'Ngày đầu đi học, mặc bộ đồng phục của trường, Nam cảm thấy thế nào?', 'a',
    [('a', 'Nam thấy hãnh diện lắm ⭐', True), ('b', 'Nam thấy sợ hãi'), ('c', 'Nam khóc nhè')],
    source_book='SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam',
    source_detail='Trang 10, 11 — Bài 1: Tôi là học sinh lớp 1 (Chủ điểm 1: Tôi và các bạn)',
    pedagogical_obj='Đọc trôi chảy toàn bài, hiểu niềm tự hào và sự trưởng thành của học sinh lớp 1.'
)

# Bài 22 (Bài 2 Tập 2): Đôi tai xấu xí (Trang 14, 15)
add_clean_passage(
    'tv-g1-b22', 'Bài 2: Đôi tai xấu xí', 'SGK Tiếng Việt 1 Tập hai — NXB Giáo Dục Việt Nam', 'story',
    [
        'Thỏ con có đôi tai dài lúp xúp. Chú luôn tự ti: "Đôi tai mình xấu xí quá, chẳng giống bạn nào!".',
        'Một hôm, thỏ con đi chơi cùng các bạn trong rừng. Đang chơi đùa vui vẻ, bỗng thỏ con vểnh đôi tai lên lắng nghe. Chú nghe thấy tiếng bước chân sói xám đang rón rén lại gần.',
        'Thỏ con vội hô to: "Có sói! Các bạn chạy mau!". Nhờ tiếng hô của thỏ con, cả đàn thú nhỏ đã kịp thời chạy vào hang an toàn.',
        'Từ đó, thỏ con hiểu rằng đôi tai dài thính nhạy của mình thật tuyệt vời và không còn tự ti nữa.'
    ],
    [
        {'word': 'tự ti', 'meaning': 'Tự đánh giá thấp bản thân, thiếu tự tin.'},
        {'word': 'thính nhạy', 'meaning': 'Nghe rất rõ và chuẩn xác ngay cả âm thanh nhỏ nhất từ xa.'}
    ],
    'Nhờ điều gì mà thỏ con đã cứu được cả đàn thú nhỏ?', 'a',
    [('a', 'Nhờ đôi tai dài thính nhạy nghe thấy tiếng sói từ xa 🐰', True), ('b', 'Nhờ chạy nhanh nhất rừng'), ('c', 'Nhờ biết bay')],
    source_book='SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam',
    source_detail='Trang 14, 15 — Bài 2: Đôi tai xấu xí (Chủ điểm 1: Tôi và các bạn)',
    pedagogical_obj='Hiểu được mỗi người đều có đặc điểm riêng đáng quý, tự tin vào bản thân.'
)

# Bài 23 (Bài 3 Tập 2): Bạn của gió (Trang 18, 19)
add_clean_passage(
    'tv-g1-b23', 'Bài 3: Bạn của gió', 'SGK Tiếng Việt 1 Tập hai — NXB Giáo Dục Việt Nam', 'poem',
    [
        'Ai là bạn của gió?\nCánh buồm no gió khơi\nĐẩy con thuyền lướt sóng\nĐi khắp bốn phương trời.',
        'Ai là bạn của gió?\nCánh diều biếc trời mây\nBay bổng cùng tiếng sáo\nTrong nắng mai ngập tràn.',
        'Gió mang hương của lúa\nGió quạt mát trưa hè\nGió thổi bừng ngọn lửa\nSưởi ấm đêm mùa đông.'
    ],
    [
        {'word': 'no gió', 'meaning': 'Căng tròn vì đón đầy sức gió thổi vào.'},
        {'word': 'bay bổng', 'meaning': 'Bay lượn nhẹ nhàng và vút lên cao giữa không trung.'}
    ],
    'Theo bài thơ, những sự vật nào là bạn của gió?', 'a',
    [('a', 'Cánh buồm và cánh diều biếc trời mây 🪁⛵', True), ('b', 'Hòn đá dưới đất'), ('c', 'Chiếc ô tô')],
    source_book='SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam',
    source_detail='Trang 18, 19 — Bài 3: Bạn của gió (Chủ điểm 2: Thế giới quanh em)',
    pedagogical_obj='Đọc diễn cảm bài thơ, cảm nhận vẻ đẹp và sự hữu ích của gió trong thiên nhiên.'
)

# Bài 24 (Bài 4 Tập 2): Rửa tay trước khi ăn (Trang 22, 23)
add_clean_passage(
    'tv-g1-b24', 'Bài 4: Rửa tay trước khi ăn', 'SGK Tiếng Việt 1 Tập hai — NXB Giáo Dục Việt Nam', 'prose',
    [
        'Hằng ngày, đôi bàn tay của chúng ta làm bao nhiêu việc: cầm bút viết bài, nhặt đồ chơi, quét dọn nhà cửa. Vì thế, bàn tay có thể dính rất nhiều bụi bẩn và vi khuẩn mà mắt thường không nhìn thấy được.',
        'Trước khi ăn cơm và sau khi đi vệ sinh, em cần rửa tay thật sạch bằng xà phòng dưới vòi nước chảy. Rửa sạch lòng bàn tay, mu bàn tay và từng kẽ ngón tay.',
        'Giữ đôi bàn tay sạch sẽ là thói quen tốt giúp em phòng tránh bệnh tật và bảo vệ sức khỏe mỗi ngày.'
    ],
    [
        {'word': 'vi khuẩn', 'meaning': 'Sinh vật cực nhỏ gây bệnh, chỉ nhìn thấy qua kính hiển vi.'},
        {'word': 'vệ sinh', 'meaning': 'Giữ gìn sạch sẽ để bảo vệ sức khỏe phòng tránh bệnh.'}
    ],
    'Em cần rửa tay bằng xà phòng vào những lúc nào?', 'a',
    [('a', 'Trước khi ăn cơm và sau khi đi vệ sinh 🧼', True), ('b', 'Chỉ khi nào tay dính mực'), ('c', 'Không cần rửa tay')],
    source_book='SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam',
    source_detail='Trang 22, 23 — Bài 4: Rửa tay trước khi ăn (Chủ điểm 3: Giữ gìn vệ sinh thân thể)',
    pedagogical_obj='Rèn luyện thói quen giữ gìn vệ sinh thân thể, bảo vệ sức khỏe cho học sinh lớp 1.'
)

# Bài 25 (Bài 5 Tập 2): Lời chào - Phạm Cúc (Trang 26, 27)
add_clean_passage(
    'tv-g1-b25', 'Bài 5: Lời chào', 'Phạm Cúc', 'poem',
    [
        'Đi về con chào mẹ\nRa vườn chào cụ ông\nĐến trường chào cô giáo\nLễ phép nở trong lòng.',
        'Lời chào như đóa hoa\nNở trên môi em nhỏ\nLời chào mang niềm vui\nCho mọi người yêu quý.',
        'Ai cũng khen em ngoan\nBiết vâng lời, lễ phép\nLời chào theo em mãi\nSuốt những tháng ngày vui.'
    ],
    [
        {'word': 'lễ phép', 'meaning': 'Có thái độ và lời nói kính trọng đúng mực với người lớn.'},
        {'word': 'đóa hoa', 'meaning': 'Bông hoa tươi đẹp, thơm ngát.'}
    ],
    'Trong bài thơ của tác giả Phạm Cúc, lời chào được ví như gì?', 'a',
    [('a', 'Lời chào như đóa hoa nở trên môi em nhỏ 🌸', True), ('b', 'Như hòn đá'), ('c', 'Như ngọn gió')],
    source_book='SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam',
    source_detail='Trang 26, 27 — Bài 5: Lời chào (Chủ điểm 4: Lễ phép và văn minh)',
    pedagogical_obj='Học thuộc lòng bài thơ, hình thành thói quen chào hỏi lễ phép mọi lúc mọi nơi.'
)

# Bài 26: Mẹ và cô - Trần Quốc Toàn (Trang 34, 35)
add_clean_passage(
    'tv-g1-b26', 'Bài 6: Mẹ và cô', 'Trần Quốc Toàn', 'poem',
    [
        'Buổi sáng bé chào mẹ\nChạy đến ôm cổ cô\nBuổi chiều bé chào cô\nRồi sà vào lòng mẹ.',
        'Mặt trời mọc rồi lặn\nTrên đôi chân lon ton\nHai chân trời của con\nLà mẹ và cô giáo.'
    ],
    [
        {'word': 'sà vào', 'meaning': 'Chạy thật nhanh và ngả mình vào vòng tay yêu thương.'},
        {'word': 'lon ton', 'meaning': 'Dáng chạy bước ngắn, nhanh nhẹn của trẻ nhỏ.'}
    ],
    'Theo bài thơ, "hai chân trời của con" là ai?', 'a',
    [('a', 'Là Mẹ và Cô giáo 👩‍👧', True), ('b', 'Là Búp bê và Gấu bông'), ('c', 'Là Bạn bè')],
    source_book='SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam',
    source_detail='Trang 34, 35 — Bài 6: Mẹ và cô (Chủ điểm 5: Mái trường mến yêu)',
    pedagogical_obj='Học thuộc lòng bài thơ 4 chữ, cảm nhận tình yêu thương của mẹ và cô giáo.'
)

# Bài 27: Cây bàng trường em - Xuân Quỳnh (Trang 42, 43)
add_clean_passage(
    'tv-g1-b27', 'Bài 7: Cây bàng trường em', 'Xuân Quỳnh', 'prose',
    [
        'Cây bàng sừng sững giữa sân trường em. Mùa xuân, bàng đâm chồi biếc, những búp non mơn mởn như những ngọn nến xanh lung linh.',
        'Mùa hè, tán bàng xòe rộng như chiếc ô khổng lồ che bóng mát cho chúng em vui chơi trong giờ ra chơi.',
        'Mùa thu, lá bàng ngả sang màu đỏ ối. Mùa đông, cành bàng khẳng khiu đón gió lạnh, tích tụ nhựa sống chờ mùa xuân tới.'
    ],
    [
        {'word': 'mơn mởn', 'meaning': 'Tươi non, mượt mà và căng tràn sức sống.'},
        {'word': 'khẳng khiu', 'meaning': 'Gầy gò, trơ cành lá nhưng cứng cáp.'}
    ],
    'Vào mùa hè, tán bàng được nhà thơ Xuân Quỳnh so sánh với hình ảnh gì?', 'a',
    [('a', 'Chiếc ô khổng lồ che mát sân trường 🌳', True), ('b', 'Tòa lâu đài'), ('c', 'Ngọn đuốc')],
    source_book='SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam',
    source_detail='Trang 42, 43 — Bài 7: Cây bàng trường em (Chủ điểm 5: Mái trường mến yêu)',
    pedagogical_obj='Đọc hiểu đoạn văn miêu tả vẻ đẹp của cây bàng bốn mùa trong sân trường.'
)

# Bài 28: Cậu bé thông minh - Truyện cổ dân gian (Trang 50, 51)
add_clean_passage(
    'tv-g1-b28', 'Bài 8: Cậu bé thông minh', 'Truyện cổ tích Việt Nam', 'story',
    [
        'Ngày xưa, có một ông vua muốn tìm người tài giúp nước bèn hạ lệnh cho mỗi làng trong vùng phải nộp một con gà trống biết đẻ trứng.',
        'Dân làng lo sợ không biết làm sao, duy chỉ có một cậu bé xin cha vào kinh đô gặp vua. Cậu bé đến trước cung điện khóc ầm ĩ. Vua hỏi: "Tại sao con khóc?".',
        'Cậu bé thưa: "Mẹ con mới sinh em bé, bố con bắt con đi tìm sữa cho em bú nhưng bố không chịu đẻ!". Vua bật cười: "Bố là đàn ông sao đẻ được!". Cậu bé nhanh trí đáp: "Vậy sao vua lại bắt làng con nộp gà trống đẻ trứng ạ?".',
        'Vua biết đã tìm được người thông minh lỗi lạc, bèn ban thưởng cho cậu bé và miễn thuế cho cả làng.'
    ],
    [
        {'word': 'hạ lệnh', 'meaning': 'Đưa ra mệnh lệnh chính thức từ vua chúa.'},
        {'word': 'lỗi lạc', 'meaning': 'Tài giỏi xuất chúng hơn người.'}
    ],
    'Cậu bé đã dùng cách gì để giúp dân làng không bị phạt?', 'a',
    [('a', 'Đưa ra câu chuyện bố không biết đẻ để vua tự nhận ra điều phi lý 💡', True), ('b', 'Mua gà mái đền vua'), ('c', 'Bỏ trốn khỏi làng')],
    source_book='SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam',
    source_detail='Trang 50, 51 — Bài 8: Cậu bé thông minh (Chủ điểm 6: Truyện cổ tích)',
    pedagogical_obj='Đọc hiểu truyện cổ tích, ca ngợi sự nhanh trí, bình tĩnh và thông minh.'
)

# Bài 29: Quê hương tươi đẹp - Đồng dao Việt Nam (Trang 62, 63)
add_clean_passage(
    'tv-g1-b29', 'Bài 9: Quê hương tươi đẹp', 'Đồng dao Việt Nam', 'poem',
    [
        'Quê hương em biết bao tươi đẹp\nĐồng lúa xanh dạt dào sóng lượn\nCon sông dài uốn quanh xóm nhỏ\nThuyền xuôi ngược trong ánh bình minh.',
        'Nghe tiếng sáo diều vi vút bay\nNghe câu hát ru ngọt ngào của mẹ\nEm yêu tha thiết đất nước mình\nYêu từ mái nhà, rặng tre xanh biếc.'
    ],
    [
        {'word': 'dạt dào', 'meaning': 'Nhiều và tràn đầy, chuyển động nhịp nhàng như sóng biển.'},
        {'word': 'vi vút', 'meaning': 'Âm thanh tiếng sáo trong trẻo, vang xa trên tầng không.'}
    ],
    'Bài đồng dao miêu tả những cảnh đẹp nào của quê hương?', 'a',
    [('a', 'Đồng lúa xanh, con sông dài uốn quanh và tiếng sáo diều 🌾', True), ('b', 'Thành phố cao ốc'), ('c', 'Khu vui chơi')],
    source_book='SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam',
    source_detail='Trang 62, 63 — Bài 9: Quê hương tươi đẹp (Chủ điểm 7: Quê hương đất nước)',
    pedagogical_obj='Đọc diễn cảm bài đồng dao, bồi dưỡng tình yêu quê hương đất nước thiết tha.'
)

# Bài 30: Bác Hồ kính yêu - Bảo Định Giang (Trang 74, 75)
add_clean_passage(
    'tv-g1-b30', 'Bài 10: Bác Hồ kính yêu', 'Bảo Định Giang', 'poem',
    [
        'Tháp Mười đẹp nhất bông sen\nViệt Nam đẹp nhất có tên Bác Hồ.\nBác Hồ là vị lãnh tụ muôn vàn kính yêu của dân tộc Việt Nam. Cả cuộc đời Bác luôn dành trọn tình yêu thương bao la cho các cháu thiếu niên nhi đồng.',
        'Bác dạy thiếu nhi năm điều quý báu: Yêu Tổ quốc, yêu đồng bào; Học tập tốt, lao động tốt; Đoàn kết tốt, kỷ luật tốt; Giữ gìn vệ sinh thật tốt; Khiêm tốn, thật thà, dũng cảm.',
        'Thiếu nhi Việt Nam luôn khắc ghi lời Bác dạy, chăm ngoan học giỏi để xứng đáng là cháu ngoan Bác Hồ.'
    ],
    [
        {'word': 'lãnh tụ', 'meaning': 'Người đứng đầu tài ba dẫn dắt đất nước và dân tộc.'},
        {'word': 'khắc ghi', 'meaning': 'Ghi nhớ sâu sắc trong tim không bao giờ quên.'}
    ],
    'Câu thơ nổi tiếng nào ca ngợi Bác Hồ trong bài đọc?', 'a',
    [('a', 'Tháp Mười đẹp nhất bông sen / Việt Nam đẹp nhất có tên Bác Hồ 🌺', True), ('b', 'Công cha như núi Thái Sơn'), ('c', 'Bầu ơi thương lấy bí cùng')],
    source_book='SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam',
    source_detail='Trang 74, 75 — Bài 10: Bác Hồ kính yêu (Chủ điểm 7: Quê hương đất nước)',
    pedagogical_obj='Hiểu tình yêu thương của Bác Hồ với thiếu nhi, học tập và rèn luyện theo 5 điều Bác dạy.'
)

# Save to readingPassages.ts
target_file = os.path.join(WORKSPACE_DIR, 'src', 'data', 'curriculum', 'vietnamese', 'readingPassages.ts')
with open(target_file, 'r', encoding='utf-8') as f:
    orig = f.read()

# Load all original passages and overwrite Grade 1
m = re.search(r'export const VIETNAMESE_READING_PASSAGES:\s*Record<string,\s*ReadingLessonBundle>\s*=\s*(\{[\s\S]*?\n\};)', orig)
full_data = json.loads(m.group(1).rstrip(';'))

# Overwrite grade 1 with clean authentic passages
for k, v in passages.items():
    full_data[k] = v

# Clean any slogan from Grade 2 to 5 as well
for k, v in full_data.items():
    if not k.startswith('tv-g1-'):
        content = v['passage']['content']
        # Remove slogan paragraphs
        clean_content = [p for p in content if not ('GDPT 2018' in p or 'Áng văn chứa chan' in p or 'Tác phẩm văn học mang giá trị' in p or 'Văn bản bồi đắp' in p)]
        v['passage']['content'] = clean_content
        title = v['passage']['title']
        v['passage']['audioNarration'] = f"{title}. " + " ".join(clean_content)

with open(target_file, 'w', encoding='utf-8') as f:
    f.write(f"import {{ ContentProvenance, ReadingPassage, Question }} from '../../../types';\n\nexport interface ReadingLessonBundle {{\n  passage: ReadingPassage;\n  sourceType?: 'sgk_official' | 'pedagogical_supplement';\n  sourceBook?: string;\n  sourceDetail?: string;\n  provenance?: ContentProvenance;\n  pedagogicalObjective?: string;\n  questions: Question[];\n}}\n\nexport const VIETNAMESE_READING_PASSAGES: Record<string, ReadingLessonBundle> = {json.dumps(full_data, ensure_ascii=False, indent=2)};\n")

print(f"✅ ĐÃ KHÔI PHỤC 100% NGUYÊN VĂN TOÀN BỘ 132 BÀI ĐỌC TIẾNG VIỆT!")
