import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

# Revert sgkActivities.ts to git checkout first or regenerate properly
with open('src/data/curriculum/vietnamese/sgkActivities.ts', 'r', encoding='utf-8') as f:
    orig = f.read()

# Let's find the dictionary before our modification
# Let's clean up any bad additions
marker = "  'tv-g2-t1-b19': ["
if marker in orig:
    orig = orig[:orig.find(marker)] + "};\n"

G2_T1_ACTIVITIES = {
    'tv-g2-t1-b19': [
        ('open', 87, 'Đọc hiểu • 1', 'Trong bảng chữ cái tiếng Việt, chữ A đứng ở vị trí nào?', 'Chữ A đứng ở đầu bảng chữ cái tiếng Việt.'),
        ('open', 87, 'Đọc hiểu • 2', 'Chữ A mơ ước điều gì?', 'Chữ A mơ ước chỉ một mình làm ra một cuốn sách.'),
        ('open', 87, 'Đọc hiểu • 3', 'Chữ A nhận ra điều gì?', 'Chữ A nhận ra nếu chỉ một mình thì chẳng thể nói được với ai điều gì.'),
        ('choice', 87, 'Đọc hiểu • 4', 'Chữ A muốn nhắn nhủ điều gì với các bạn?', [('Chăm viết chữ cái', False), ('Chăm đọc sách', True), ('Chăm xếp các chữ cái', False)], 'Chữ A nhắn nhủ các bạn hãy chăm đọc sách hằng ngày.'),
        ('open', 87, 'Luyện tập • 1', 'Nói tiếp lời của chữ A để cảm ơn các bạn chữ: Cảm ơn các bạn. Nhờ có các bạn, chúng ta đã (...).', 'Cảm ơn các bạn. Nhờ có các bạn, chúng ta đã cùng nhau tạo nên những cuốn sách thật hay.'),
        ('choice', 87, 'Luyện tập • 2', 'Những từ ngữ nào dưới đây chỉ cảm xúc?', [('Vui sướng, ngạc nhiên', True), ('Nổi tiếng, đứng đầu', False)], 'Vui sướng và ngạc nhiên là các từ chỉ cảm xúc.')
    ],
    'tv-g2-t1-b20': [
        ('open', 90, 'Đọc hiểu • 1', 'Chi tiết nào cho thấy nhím nâu rất nhút nhát?', 'Khi thấy nhím trắng chào, nhím nâu lúng túng, nói lí nhí rồi nấp vào bụi cây.'),
        ('open', 90, 'Đọc hiểu • 2', 'Kể về những lần nhím trắng và nhím nâu gặp nhau.', 'Lần đầu gặp trong rừng, lần sau gặp khi mùa đông đến trú mưa.'),
        ('open', 90, 'Đọc hiểu • 3', 'Theo em, vì sao nhím nâu nhận lời kết bạn cùng nhím trắng?', 'Vì nhím nâu thấy nhím trắng tốt bụng và không có bạn thì rất buồn.'),
        ('open', 90, 'Đọc hiểu • 4', 'Nhờ đâu nhím trắng và nhím nâu có những ngày mùa đông vui vẻ, ấm áp?', 'Nhờ cả hai cùng dọn dẹp, trang trí chỗ ở và cùng sống bên nhau.')
    ],
    'tv-g2-t1-b21': [
        ('open', 95, 'Đọc hiểu • 1', 'Kể tên những sự vật giống cánh diều được nhắc tới trong bài thơ.', 'Hạt cau phơi trên nong trời, vầng trăng vàng, chiếc thuyền, lưỡi liềm.'),
        ('choice', 95, 'Đọc hiểu • 2', 'Hai câu thơ “Sao trời trôi qua/ Diều thành trăng vàng” tả cánh diều vào lúc nào?', [('Vào buổi sáng', False), ('Vào buổi chiều', False), ('Vào ban đêm', True)], 'Khi đêm xuống có sao trời và trăng sáng.'),
        ('choice', 95, 'Đọc hiểu • 3', 'Khổ thơ cuối bài muốn nói điều gì?', [('Cánh diều làm thôn quê đông vui hơn.', False), ('Cánh diều làm thôn quê giàu có hơn.', False), ('Cánh diều làm cảnh thôn quê tươi đẹp hơn.', True)], 'Tiếng diều làm cảnh sắc làng quê thêm tươi đẹp.'),
        ('open', 95, 'Đọc hiểu • 4', 'Em thích nhất khổ thơ nào trong bài? Vì sao?', 'Chia sẻ khổ thơ em thích nhất và lý do.')
    ],
    'tv-g2-t1-b22': [
        ('open', 98, 'Đọc hiểu • 1', 'Đồ chơi lê-gô còn được các bạn nhỏ gọi là gì?', 'Đồ chơi lê-gô còn được gọi là đồ chơi lắp ráp.'),
        ('open', 98, 'Đọc hiểu • 2', 'Nêu cách chơi lê-gô.', 'Lắp ráp các khối nhỏ thành nhà cửa, xe cộ theo ý thích rồi tháo rời ghép vật khác.'),
        ('open', 98, 'Đọc hiểu • 3', 'Trò chơi lê-gô đem lại lợi ích gì?', 'Giúp phát triển trí tưởng tượng, khả năng sáng tạo và tính kiên nhẫn.')
    ],
    'tv-g2-t1-b23': [
        ('open', 102, 'Đọc hiểu • 1', 'Những người chơi làm thành rồng rắn bằng cách nào?', 'Năm sáu bạn túm áo nhau nối đuôi nhau làm rồng rắn.'),
        ('open', 102, 'Đọc hiểu • 2', 'Rồng rắn đến gặp thầy thuốc để làm gì?', 'Để hỏi thăm và xin thuốc cho con.'),
        ('open', 102, 'Đọc hiểu • 3', 'Chuyện gì xảy ra nếu khúc đuôi bị thầy thuốc bắt được?', 'Nếu khúc đuôi bị bắt thì đổi vai làm thầy thuốc.'),
        ('open', 102, 'Đọc hiểu • 4', 'Nếu bạn khúc giữa để bị đứt hàng thì bạn đó phải làm gì?', 'Nếu bạn khúc giữa để đứt hàng thì đổi vai làm khúc đuôi.')
    ],
    'tv-g2-t1-b24': [
        ('open', 105, 'Đọc hiểu • 1', 'Kể tên những đồ chơi bé đã nặn trong bài thơ.', 'Bé nặn quả thị, quả na, chiếc cối nhỏ và thằng chuột.'),
        ('open', 105, 'Đọc hiểu • 2', 'Bé nặn đồ chơi để tặng cho những ai?', 'Tặng cha mẹ, bà và chú mèo.'),
        ('open', 105, 'Đọc hiểu • 3', 'Việc bé nặn đồ chơi tặng mọi người thể hiện điều gì?', 'Thể hiện tình cảm yêu thương, hiếu thảo và chu đáo của bé.')
    ],
    'tv-g2-t1-b25': [
        ('open', 110, 'Đọc hiểu • 1', 'Tìm những chi tiết cho thấy chị em Nết, Na sống bên nhau rất đầm ấm.', 'Nết cái gì cũng nhường em, đêm đông ôm em vào lòng ủ ấm.'),
        ('open', 110, 'Đọc hiểu • 2', 'Nước lũ dâng cao, chị Nết đưa Na đến nơi an toàn bằng cách nào?', 'Nết cõng em chạy theo dân làng đến nơi an toàn dù chân rớm máu.'),
        ('open', 110, 'Đọc hiểu • 3', 'Nói về điều kì lạ xảy ra khi Nết cõng em chạy lũ.', 'Bụt phẩy quạt thần chữa lành chân Nết và mọc lên những khóm hoa đỏ thắm.'),
        ('open', 110, 'Đọc hiểu • 4', 'Theo em, vì sao dân làng đặt tên loài hoa ấy là hoa tỉ muội?', 'Vì hoa kết chùm bông lớn che chở cho nụ nhỏ như tình chị em.')
    ],
    'tv-g2-t1-b26': [
        ('open', 113, 'Đọc hiểu • 1', 'Bạn nhỏ đã hỏi mẹ điều gì?', 'Bạn nhỏ hỏi: “Mẹ ơi em bé từ đâu đến nhà ta?”.'),
        ('open', 113, 'Đọc hiểu • 2', 'Trong khổ thơ đầu, bạn nhỏ tả em của mình như thế nào?', 'Nụ cười như tia nắng, bàn tay như nụ hoa, bước chân lẫm chẫm.'),
        ('open', 113, 'Đọc hiểu • 3', 'Trong khổ thơ thứ hai và thứ ba, bạn nhỏ đoán em bé từ đâu đến?', 'Từ sao xuống, từ biển lên, trong quả nhãn, hoặc từ mây rơi xuống.'),
        ('choice', 113, 'Đọc hiểu • 4', 'Em bé mang đến những gì cho gia đình bạn nhỏ?', [('Nắng vàng và biển rộng', False), ('Tình yêu thương', True), ('Mây và hoa', False)], 'Em bé mang tình yêu thương vào ngôi nhà.')
    ],
    'tv-g2-t1-b27': [
        ('open', 117, 'Đọc hiểu • 1', 'Trong đêm hè oi bức, mẹ đã làm gì để con ngủ ngon?', 'Mẹ ngồi đưa võng ru con và dùng tay quạt mát cho con.'),
        ('open', 117, 'Đọc hiểu • 2', 'Những dòng thơ nào cho thấy mẹ đã thức rất nhiều vì con?', '“Những ngôi sao thức ngoài kia / Chẳng bằng mẹ đã thức vì chúng con.”'),
        ('choice', 117, 'Đọc hiểu • 3', 'Theo em, câu thơ cuối bài muốn nói điều gì?', [('Có mẹ quạt mát, con ngủ ngon lành.', False), ('Tay mẹ quạt mát hơn cả gió trời.', False), ('Mẹ là niềm hạnh phúc và luôn chở che cho cuộc đời con.', True)], 'Mẹ là ngọn gió yêu thương che chở cho con suốt cuộc đời.')
    ],
    'tv-g2-t1-b28': [
        ('open', 120, 'Đọc hiểu • 1', 'Hai bố con Hường chơi trò chơi gì cùng nhau?', 'Hai bố con Hường chơi trò “ăn cỗ”.'),
        ('open', 120, 'Đọc hiểu • 2', 'Khi chơi, hai bố con xưng hô với nhau như thế nào?', 'Xưng hô là “tôi” và gọi nhau là “bác”.'),
        ('open', 120, 'Đọc hiểu • 3', 'Nhìn hai tay Hường đón bát cơm, mẹ nhớ tới điều gì?', 'Mẹ nhớ lúc hai bố con chơi ăn cỗ và bố dạy con nhận đồ bằng hai tay.'),
        ('choice', 120, 'Đọc hiểu • 4', 'Khi chơi cùng bố, Hường đã được bố dạy nết ngoan nào?', [('Biết nấu ăn', False), ('Có cử chỉ và lời nói lễ phép', True), ('Chăm làm và biết giúp đỡ bố mẹ', False)], 'Bố đã dạy Hường lễ phép khi mời cơm và nhận đồ bằng hai tay.')
    ],
    'tv-g2-t1-b29': [
        ('open', 124, 'Đọc hiểu • 1', 'Ngày cháu còn thấp bé, cháu cài then nào và nhờ bà cài then nào?', 'Cháu cài then dưới và nhờ bà cài then trên.'),
        ('open', 124, 'Đọc hiểu • 2', 'Khi cháu lớn lên, việc cài then cửa thay đổi như thế nào?', 'Cháu cài then trên, còn bà lưng còng cài then dưới.'),
        ('open', 124, 'Đọc hiểu • 3', 'Khi về nhà mới, mỗi lần đẩy cửa, cháu nhớ đến ai?', 'Mỗi lần đẩy cửa, cháu lại nhớ bà khôn nguôi.')
    ],
    'tv-g2-t1-b30': [
        ('open', 127, 'Đọc hiểu • 1', 'Vì sao ông phải chống gậy và nhấc chân bước lên thềm khó khăn?', 'Vì chân ông bị đau, sưng tấy, đi lại khập khiễng.'),
        ('open', 127, 'Đọc hiểu • 2', 'Thấy ông nhăn nhó, Việt đã làm gì để giúp ông?', 'Việt chạy lại gần bảo ông vịn vào vai cháu để cháu đỡ ông lên thềm.'),
        ('open', 127, 'Đọc hiểu • 3', 'Khi bước lên thềm, ông đã khen ngợi Việt điều gì?', 'Ông khen: “Bé thế mà khoẻ / Vì nó thương ông!”.')
    ],
    'tv-g2-t1-b31': [
        ('open', 131, 'Đọc hiểu • 1', 'Khi thấy mẹ đau bụng dữ dội, Ê-đi-xơn đã làm gì?', 'Ê-đi-xơn liền chạy đi mời bác sĩ đến khám cho mẹ.'),
        ('open', 131, 'Đọc hiểu • 2', 'Ê-đi-xơn đã làm cách nào để bác sĩ có đủ ánh sáng phẫu thuật cứu mẹ?', 'Cậu mượn gương về, thắp nến đặt trước gương để ánh sáng phản chiếu khắp phòng.'),
        ('open', 131, 'Đọc hiểu • 3', 'Những việc làm của Ê-đi-xơn cho thấy tình cảm của cậu dành cho mẹ như thế nào?', 'Ê-đi-xơn rất yêu thương, hiếu thảo và nhanh trí cứu mẹ.')
    ],
    'tv-g2-t1-b32': [
        ('open', 134, 'Đọc hiểu • 1', 'Tìm chi tiết cho thấy An rất thích chơi chong chóng.', 'An thích chạy nhanh cho chong chóng quay và nghe tiếng gió u u lướt qua.'),
        ('open', 134, 'Đọc hiểu • 2', 'Vì sao An luôn thắng khi thi chơi chong chóng cùng bé Mai?', 'Vì An chạy nhanh hơn nên chong chóng quay lâu hơn.'),
        ('open', 134, 'Đọc hiểu • 3', 'An đã nghĩ ra cách gì để bé Mai không buồn và cười vui?', 'An cho em giơ trước quạt máy và phùng má thổi phù phù cho chong chóng em quay.')
    ]
}

act_chunks = []
for lid, acts in G2_T1_ACTIVITIES.items():
    acts_ts_lines = []
    for a in acts:
        if a[0] == 'open':
            line = f"    openQuestion({json.dumps(lid)}, {a[1]}, {json.dumps(a[2], ensure_ascii=False)}, {json.dumps(a[3], ensure_ascii=False)}, {json.dumps(a[4], ensure_ascii=False)}),"
        else:
            opts_str = json.dumps(a[4], ensure_ascii=False).replace('false', 'false').replace('true', 'true')
            line = f"    choiceQuestion({json.dumps(lid)}, {a[1]}, {json.dumps(a[2], ensure_ascii=False)}, {json.dumps(a[3], ensure_ascii=False)}, {opts_str}, {json.dumps(a[5], ensure_ascii=False)}),"
        acts_ts_lines.append(line)
    acts_body = "\n".join(acts_ts_lines)
    chunk = f"  '{lid}': [\n{acts_body}\n  ],"
    act_chunks.append(chunk)

all_act_code = "\n".join(act_chunks)

final_code = orig.rstrip()
if final_code.endswith("};"):
    final_code = final_code[:-2]

final_code += "\n" + all_act_code + "\n};\n\n"
final_code += """export function getVerifiedVietnameseSgkActivities(lessonId: string): Question[] {
  return VERIFIED_SGK_ACTIVITIES[lessonId.replace('-l', '-b')] || [];
}

export function getVerifiedVietnameseSgkActivityPages(lessonId: string): number[] {
  return [...new Set(getVerifiedVietnameseSgkActivities(lessonId).map((question) => question.sourcePage).filter((page): page is number => Number.isInteger(page)))];
}
"""

with open('src/data/curriculum/vietnamese/sgkActivities.ts', 'w', encoding='utf-8') as f:
    f.write(final_code)

print("Regenerated sgkActivities.ts perfectly!")
