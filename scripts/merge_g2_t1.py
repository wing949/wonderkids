import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

# 1. Update sgkTranscripts.ts
with open('scripts/g2_t1_verified_batch.json', 'r', encoding='utf-8') as f:
    g2_t1_transcripts = json.load(f)

with open('src/data/curriculum/vietnamese/sgkTranscripts.ts', 'r', encoding='utf-8') as f:
    sgk_ts = f.read()

# Generate TS code for g2_t1_transcripts
ts_chunks = []
for lid, data in g2_t1_transcripts.items():
    content_lines = ",\n".join([f"      {json.dumps(p, ensure_ascii=False)}" for p in data['content']])
    ts_chunk = f"""  '{lid}': {{
    title: {json.dumps(data['title'], ensure_ascii=False)},
    author: {json.dumps(data['author'], ensure_ascii=False)},
    genre: '{data['genre']}',
    content: [
{content_lines}
    ],
    sourcePages: {json.dumps(data['sourcePages'])},
    sourceHash: '{data['sourceHash']}',
  }},"""
    ts_chunks.append(ts_chunk)

all_g2_t1_code = "\n".join(ts_chunks)

# Insert before 'export const VERIFIED_SGK_LESSON_IDS'
insert_idx = sgk_ts.find("export const VERIFIED_SGK_LESSON_IDS")
if insert_idx != -1:
    new_sgk_ts = sgk_ts[:insert_idx] + all_g2_t1_code + "\n};\n\n" + sgk_ts[insert_idx:]
    # Fix the closing bracket before export
    new_sgk_ts = re.sub(r'\}\s*;\s*\n\s*export const VERIFIED_SGK_LESSON_IDS', '};\n\nexport const VERIFIED_SGK_LESSON_IDS', new_sgk_ts)
    with open('src/data/curriculum/vietnamese/sgkTranscripts.ts', 'w', encoding='utf-8') as f:
        f.write(new_sgk_ts)
    print("Updated sgkTranscripts.ts with 14 Grade 2 Sem 1 lessons!")

# 2. Update sgkActivities.ts
G2_T1_ACTIVITIES = {
    'tv-g2-t1-b19': [
        {'type': 'open', 'prompt': 'Trong bảng chữ cái tiếng Việt, chữ A đứng ở vị trí nào?', 'sourcePage': 87, 'sgkItemCode': 'Đọc.1', 'referenceAnswer': 'Chữ A đứng ở đầu bảng chữ cái tiếng Việt.'},
        {'type': 'open', 'prompt': 'Chữ A mơ ước điều gì?', 'sourcePage': 87, 'sgkItemCode': 'Đọc.2', 'referenceAnswer': 'Chữ A mơ ước chỉ một mình làm ra một cuốn sách.'},
        {'type': 'open', 'prompt': 'Chữ A nhận ra điều gì?', 'sourcePage': 87, 'sgkItemCode': 'Đọc.3', 'referenceAnswer': 'Chữ A nhận ra nếu chỉ một mình thì chẳng thể nói được với ai điều gì, cần có các chữ cái khác để tạo nên cuốn sách hay.'},
        {'type': 'choice', 'prompt': 'Chữ A muốn nhắn nhủ điều gì với các bạn?', 'sourcePage': 87, 'sgkItemCode': 'Đọc.4', 'options': ['Chăm viết chữ cái', 'Chăm đọc sách', 'Chăm xếp các chữ cái'], 'correctIndex': 1, 'explanation': 'Chữ A nhắn nhủ: “Các bạn nhỏ hãy gặp chúng tôi hằng ngày nhé!” tức là hãy chăm đọc sách.'},
        {'type': 'open', 'prompt': 'Nói tiếp lời của chữ A để cảm ơn các bạn chữ: Cảm ơn các bạn. Nhờ có các bạn, chúng ta đã (...).', 'sourcePage': 87, 'sgkItemCode': 'Luyện tập.1', 'referenceAnswer': 'Cảm ơn các bạn. Nhờ có các bạn, chúng ta đã cùng nhau tạo nên những cuốn sách thật hay và ý nghĩa.'},
        {'type': 'choice', 'prompt': 'Những từ ngữ nào dưới đây chỉ cảm xúc?', 'sourcePage': 87, 'sgkItemCode': 'Luyện tập.2', 'options': ['vui sướng, ngạc nhiên', 'nổi tiếng, đứng đầu'], 'correctIndex': 0, 'explanation': 'Vui sướng và ngạc nhiên là những từ chỉ cảm xúc của con người.'}
    ],
    'tv-g2-t1-b20': [
        {'type': 'open', 'prompt': 'Chi tiết nào cho thấy nhím nâu rất nhút nhát?', 'sourcePage': 90, 'sgkItemCode': 'Đọc.1', 'referenceAnswer': 'Khi thấy nhím trắng chào, nhím nâu lúng túng, nói lí nhí rồi nấp vào bụi cây, cuộn tròn người lại vì sợ hãi.'},
        {'type': 'open', 'prompt': 'Kể về những lần nhím trắng và nhím nâu gặp nhau.', 'sourcePage': 90, 'sgkItemCode': 'Đọc.2', 'referenceAnswer': 'Lần đầu gặp trong rừng khi kiếm quả, nhím nâu sợ hãi trốn vào bụi cây. Lần hai khi mùa đông đến, nhím nâu vào trú mưa trong hang của nhím trắng và được nhím trắng niềm nở mời ở lại.'},
        {'type': 'open', 'prompt': 'Theo em, vì sao nhím nâu nhận lời kết bạn cùng nhím trắng?', 'sourcePage': 90, 'sgkItemCode': 'Đọc.3', 'referenceAnswer': 'Vì nhím nâu thấy nhím trắng rất tốt bụng và hiểu rằng không có bạn bè thì rất buồn.'},
        {'type': 'open', 'prompt': 'Nhờ đâu nhím trắng và nhím nâu có những ngày mùa đông vui vẻ, ấm áp?', 'sourcePage': 90, 'sgkItemCode': 'Đọc.4', 'referenceAnswer': 'Nhờ cả hai đã cùng nhau dọn dẹp, trang trí chỗ ở và cùng chia sẻ cuộc sống bên nhau, không phải ở một mình giữa mùa đông lạnh giá.'}
    ],
    'tv-g2-t1-b21': [
        {'type': 'open', 'prompt': 'Kể tên những sự vật giống cánh diều được nhắc tới trong bài thơ.', 'sourcePage': 95, 'sgkItemCode': 'Đọc.1', 'referenceAnswer': 'Cánh diều được so sánh với hạt cau phơi trên nong trời, vầng trăng vàng, chiếc thuyền trôi trên sông Ngân, và chiếc lưỡi liềm.'},
        {'type': 'choice', 'prompt': 'Hai câu thơ “Sao trời trôi qua/ Diều thành trăng vàng” tả cánh diều vào lúc nào?', 'sourcePage': 95, 'sgkItemCode': 'Đọc.2', 'options': ['Vào buổi sáng', 'Vào buổi chiều', 'Vào ban đêm'], 'correctIndex': 2, 'explanation': 'Khi trời tối có sao và trăng là vào ban đêm.'},
        {'type': 'choice', 'prompt': 'Khổ thơ cuối bài muốn nói điều gì?', 'sourcePage': 95, 'sgkItemCode': 'Đọc.3', 'options': ['Cánh diều làm thôn quê đông vui hơn.', 'Cánh diều làm thôn quê giàu có hơn.', 'Cánh diều làm cảnh thôn quê tươi đẹp hơn.'], 'correctIndex': 2, 'explanation': 'Tiếng diều sáo réo vang làm cho khung cảnh làng quê thêm thanh bình, tươi đẹp.'},
        {'type': 'open', 'prompt': 'Em thích nhất khổ thơ nào trong bài? Vì sao?', 'sourcePage': 95, 'sgkItemCode': 'Đọc.4', 'referenceAnswer': 'Học sinh chia sẻ khổ thơ mình yêu thích nhất và lý do (ví dụ: hình ảnh cánh diều đẹp, tiếng sáo diều êm đềm).' }
    ],
    'tv-g2-t1-b22': [
        {'type': 'open', 'prompt': 'Đồ chơi lê-gô còn được các bạn nhỏ gọi là gì?', 'sourcePage': 98, 'sgkItemCode': 'Đọc.1', 'referenceAnswer': 'Đồ chơi lê-gô còn được gọi là đồ chơi lắp ráp.'},
        {'type': 'open', 'prompt': 'Nêu cách chơi lê-gô.', 'sourcePage': 98, 'sgkItemCode': 'Đọc.2', 'referenceAnswer': 'Từ những mảnh ghép nhỏ bé kết hợp với nhau để lắp ráp nhà cửa, xe cộ, người máy theo ý thích, sau đó có thể tháo rời ra để ghép thành những vật khác.'},
        {'type': 'open', 'prompt': 'Trò chơi lê-gô đem lại lợi ích gì?', 'sourcePage': 98, 'sgkItemCode': 'Đọc.3', 'referenceAnswer': 'Lê-gô giúp các bạn nhỏ có trí tưởng tượng phong phú, khả năng sáng tạo và rèn luyện tính kiên nhẫn.'}
    ],
    'tv-g2-t1-b23': [
        {'type': 'open', 'prompt': 'Những người chơi làm thành rồng rắn bằng cách nào?', 'sourcePage': 102, 'sgkItemCode': 'Đọc.1', 'referenceAnswer': 'Năm, sáu bạn túm áo nhau nối đuôi nhau làm thành rồng rắn.'},
        {'type': 'open', 'prompt': 'Rồng rắn đến gặp thầy thuốc để làm gì?', 'sourcePage': 102, 'sgkItemCode': 'Đọc.2', 'referenceAnswer': 'Rồng rắn đến gặp thầy thuốc để hỏi thăm và xin thuốc chữa bệnh cho con.'},
        {'type': 'open', 'prompt': 'Chuyện gì xảy ra nếu khúc đuôi bị thầy thuốc bắt được?', 'sourcePage': 102, 'sgkItemCode': 'Đọc.3', 'referenceAnswer': 'Nếu bạn khúc đuôi để thầy bắt được thì bạn ấy sẽ phải đổi vai làm thầy thuốc.'},
        {'type': 'open', 'prompt': 'Nếu bạn khúc giữa để bị đứt hàng thì bạn đó phải làm gì?', 'sourcePage': 102, 'sgkItemCode': 'Đọc.4', 'referenceAnswer': 'Nếu bạn khúc giữa để đứt hàng thì bạn đó phải đổi vai làm khúc đuôi.'}
    ],
    'tv-g2-t1-b24': [
        {'type': 'open', 'prompt': 'Kể tên những đồ chơi bé đã nặn trong bài thơ.', 'sourcePage': 105, 'sgkItemCode': 'Đọc.1', 'referenceAnswer': 'Bé đã nặn: quả thị, quả na, chiếc cối nhỏ và thằng chuột.'},
        {'type': 'open', 'prompt': 'Bé nặn đồ chơi để tặng cho những ai?', 'sourcePage': 105, 'sgkItemCode': 'Đọc.2', 'referenceAnswer': 'Bé nặn tặng quả thị và quả na cho cha mẹ, nặn cối nhỏ biếu bà, và nặn thằng chuột tặng riêng chú mèo.'},
        {'type': 'open', 'prompt': 'Việc bé nặn đồ chơi tặng mọi người thể hiện điều gì?', 'sourcePage': 105, 'sgkItemCode': 'Đọc.3', 'referenceAnswer': 'Thể hiện tình cảm yêu thương, quan tâm, hiếu thảo và sự chu đáo của bé dành cho tất cả mọi người trong gia đình.'}
    ],
    'tv-g2-t1-b25': [
        {'type': 'open', 'prompt': 'Tìm những chi tiết cho thấy chị em Nết, Na sống bên nhau rất đầm ấm.', 'sourcePage': 110, 'sgkItemCode': 'Đọc.1', 'referenceAnswer': 'Nết thương Na cái gì cũng nhường em; đêm đông lạnh Nết ôm em vào lòng ủ ấm, hai chị em trò chuyện thủ thỉ và ôm nhau ngủ.'},
        {'type': 'open', 'prompt': 'Nước lũ dâng cao, chị Nết đưa Na đến nơi an toàn bằng cách nào?', 'sourcePage': 110, 'sgkItemCode': 'Đọc.2', 'referenceAnswer': 'Nết cõng em trên lưng chạy theo dân làng đến nơi an toàn, dù hai bàn chân rớm máu.'},
        {'type': 'open', 'prompt': 'Nói về điều kì lạ xảy ra khi Nết cõng em chạy lũ.', 'sourcePage': 110, 'sgkItemCode': 'Đọc.3', 'referenceAnswer': 'Bụt thương hai chị em nên phẩy quạt thần làm chân Nết lành lặn, và nơi chân Nết đi qua mọc lên những khóm hoa đỏ thắm kết thành chùm che chở cho nhau.'},
        {'type': 'open', 'prompt': 'Theo em, vì sao dân làng đặt tên loài hoa ấy là hoa tỉ muội?', 'sourcePage': 110, 'sgkItemCode': 'Đọc.4', 'referenceAnswer': 'Vì hoa mọc thành chùm bông lớn che chở cho nụ nhỏ, tượng trưng cho tình chị em (tỉ muội) yêu thương đùm bọc lẫn nhau.'}
    ],
    'tv-g2-t1-b26': [
        {'type': 'open', 'prompt': 'Bạn nhỏ đã hỏi mẹ điều gì?', 'sourcePage': 113, 'sgkItemCode': 'Đọc.1', 'referenceAnswer': 'Bạn nhỏ hỏi mẹ: “Mẹ ơi em bé từ đâu đến nhà ta?”.'},
        {'type': 'open', 'prompt': 'Trong khổ thơ đầu, bạn nhỏ tả em của mình như thế nào?', 'sourcePage': 113, 'sgkItemCode': 'Đọc.2', 'referenceAnswer': 'Nụ cười như tia nắng, bàn tay như nụ hoa, bước chân đi lẫm chẫm và tiếng cười vang sân nhà.'},
        {'type': 'open', 'prompt': 'Trong khổ thơ thứ hai và thứ ba, bạn nhỏ đoán em bé từ đâu đến?', 'sourcePage': 113, 'sgkItemCode': 'Đọc.3', 'referenceAnswer': 'Bạn nhỏ đoán em bé từ sao rơi xuống, từ biển bước lên, trong quả nhãn ngoài hiên, hoặc theo cơn gió cuộn trong mây rồi hoá thành giọt nước rơi xuống.'},
        {'type': 'choice', 'prompt': 'Em bé mang đến những gì cho gia đình bạn nhỏ?', 'sourcePage': 113, 'sgkItemCode': 'Đọc.4', 'options': ['Nắng vàng và biển rộng', 'Tình yêu thương', 'Mây và hoa'], 'correctIndex': 1, 'explanation': 'Mỗi sáng em thức giấc mang yêu thương vào nhà.'}
    ],
    'tv-g2-t1-b27': [
        {'type': 'open', 'prompt': 'Trong đêm hè oi bức, mẹ đã làm gì để con ngủ ngon?', 'sourcePage': 117, 'sgkItemCode': 'Đọc.1', 'referenceAnswer': 'Mẹ ngồi kẽo cà đưa võng ru con và dùng bàn tay quạt mát đưa gió về cho con ngủ ngon.'},
        {'type': 'open', 'prompt': 'Những dòng thơ nào cho thấy mẹ đã thức rất nhiều vì con?', 'sourcePage': 117, 'sgkItemCode': 'Đọc.2', 'referenceAnswer': '“Những ngôi sao thức ngoài kia / Chẳng bằng mẹ đã thức vì chúng con.”'},
        {'type': 'choice', 'prompt': 'Theo em, câu thơ cuối bài muốn nói điều gì?', 'sourcePage': 117, 'sgkItemCode': 'Đọc.3', 'options': ['Có mẹ quạt mát, con ngủ ngon lành.', 'Tay mẹ quạt mát hơn cả gió trời.', 'Mẹ là niềm hạnh phúc và luôn chở che cho cuộc đời con.'], 'correctIndex': 2, 'explanation': '“Mẹ là ngọn gió của con suốt đời” thể hiện tình mẫu tử thiêng liêng, mẹ luôn đồng hành chở che cho con suốt cuộc đời.'}
    ],
    'tv-g2-t1-b28': [
        {'type': 'open', 'prompt': 'Hai bố con Hường chơi trò chơi gì cùng nhau?', 'sourcePage': 120, 'sgkItemCode': 'Đọc.1', 'referenceAnswer': 'Hai bố con Hường chơi trò “ăn cỗ”.'},
        {'type': 'open', 'prompt': 'Khi chơi, hai bố con xưng hô với nhau như thế nào?', 'sourcePage': 120, 'sgkItemCode': 'Đọc.2', 'referenceAnswer': 'Hai bố con xưng hô lễ phép như người lớn: xưng là “tôi”, gọi nhau là “bác”.'},
        {'type': 'open', 'prompt': 'Nhìn hai tay Hường đón bát cơm, mẹ nhớ tới điều gì?', 'sourcePage': 120, 'sgkItemCode': 'Đọc.3', 'referenceAnswer': 'Mẹ nhớ tới những lúc hai bố con cùng chơi trò ăn cỗ và bố đã ân cần dạy Hường phải đón nhận đồ vật bằng cả hai tay.'},
        {'type': 'choice', 'prompt': 'Khi chơi cùng bố, Hường đã được bố dạy nết ngoan nào?', 'sourcePage': 120, 'sgkItemCode': 'Đọc.4', 'options': ['Biết nấu ăn', 'Có cử chỉ và lời nói lễ phép', 'Chăm làm và biết giúp đỡ bố mẹ'], 'correctIndex': 1, 'explanation': 'Bố đã khéo léo dạy Hường cử chỉ nhận đồ bằng hai tay và lời mời ăn cơm lễ phép.'}
    ],
    'tv-g2-t1-b29': [
        {'type': 'open', 'prompt': 'Ngày cháu còn thấp bé, cháu cài then nào và nhờ bà cài then nào?', 'sourcePage': 124, 'sgkItemCode': 'Đọc.1', 'referenceAnswer': 'Ngày cháu còn thấp bé, cháu cài then dưới và nhờ bà cài then trên.'},
        {'type': 'open', 'prompt': 'Khi cháu lớn lên, việc cài then cửa thay đổi như thế nào?', 'sourcePage': 124, 'sgkItemCode': 'Đọc.2', 'referenceAnswer': 'Khi cháu lớn lên, cháu đã với tới và cài được then trên, còn bà lưng còng cắm cúi cài then dưới.'},
        {'type': 'open', 'prompt': 'Khi về nhà mới, mỗi lần đẩy cửa, cháu nhớ đến ai?', 'sourcePage': 124, 'sgkItemCode': 'Đọc.3', 'referenceAnswer': 'Mỗi lần đẩy cửa, cháu lại nhớ bà khôn nguôi.'}
    ],
    'tv-g2-t1-b30': [
        {'type': 'open', 'prompt': 'Vì sao ông phải chống gậy và nhấc chân bước lên thềm khó khăn?', 'sourcePage': 127, 'sgkItemCode': 'Đọc.1', 'referenceAnswer': 'Vì chân ông bị đau, nó sưng nó tấy, đi lại khập khiễng.'},
        {'type': 'open', 'prompt': 'Thấy ông nhăn nhó, Việt đã làm gì để giúp ông?', 'sourcePage': 127, 'sgkItemCode': 'Đọc.2', 'referenceAnswer': 'Việt lon ton chạy lại gần, âu yếm bảo ông vịn vào vai cháu để cháu đỡ ông bước lên thềm.'},
        {'type': 'open', 'prompt': 'Khi bước lên thềm, ông đã khen ngợi Việt điều gì?', 'sourcePage': 127, 'sgkItemCode': 'Đọc.3', 'referenceAnswer': 'Ông hoan hô cháu: “Bé thế mà khoẻ / Vì nó thương ông!”.'}
    ],
    'tv-g2-t1-b31': [
        {'type': 'open', 'prompt': 'Khi thấy mẹ đau bụng dữ dội, Ê-đi-xơn đã làm gì?', 'sourcePage': 131, 'sgkItemCode': 'Đọc.1', 'referenceAnswer': 'Ê-đi-xơn liền chạy đi mời bác sĩ đến khám cho mẹ.'},
        {'type': 'open', 'prompt': 'Ê-đi-xơn đã làm cách nào để bác sĩ có đủ ánh sáng phẫu thuật cứu mẹ?', 'sourcePage': 131, 'sgkItemCode': 'Đọc.2', 'referenceAnswer': 'Cậu mượn một tấm gương về, thắp nến lên và đặt trước gương để ánh sáng phản chiếu làm bừng sáng cả căn phòng.'},
        {'type': 'open', 'prompt': 'Những việc làm của Ê-đi-xơn cho thấy tình cảm của cậu dành cho mẹ như thế nào?', 'sourcePage': 131, 'sgkItemCode': 'Đọc.3', 'referenceAnswer': 'Ê-đi-xơn rất hiếu thảo, vô cùng yêu thương mẹ, thông minh và nhanh trí tìm mọi cách cứu mẹ.'}
    ],
    'tv-g2-t1-b32': [
        {'type': 'open', 'prompt': 'Tìm chi tiết cho thấy An rất thích chơi chong chóng.', 'sourcePage': 134, 'sgkItemCode': 'Đọc.1', 'referenceAnswer': 'An thích chạy thật nhanh để cánh chong chóng quay tít trong gió và thích nghe tiếng gió u u lướt qua cánh chong chóng.'},
        {'type': 'open', 'prompt': 'Vì sao An luôn thắng khi thi chơi chong chóng cùng bé Mai?', 'sourcePage': 134, 'sgkItemCode': 'Đọc.2', 'referenceAnswer': 'Vì An chạy nhanh hơn nên chong chóng của An quay lâu hơn.'},
        {'type': 'open', 'prompt': 'An đã nghĩ ra cách gì để bé Mai không buồn và cười vui?', 'sourcePage': 134, 'sgkItemCode': 'Đọc.3', 'referenceAnswer': 'An cho em giơ chong chóng trước quạt máy, còn mình thì phùng má thổi phù phù cho chong chóng của em quay để em thắng.'}
    ]
}

with open('src/data/curriculum/vietnamese/sgkActivities.ts', 'r', encoding='utf-8') as f:
    act_ts = f.read()

# Build TS chunk for activities
act_chunks = []
for lid, acts in G2_T1_ACTIVITIES.items():
    acts_ts_lines = []
    for a in acts:
        if a['type'] == 'open':
            line = f"    openQuestion({json.dumps(a['prompt'], ensure_ascii=False)}, {a['sourcePage']}, {json.dumps(a['sgkItemCode'], ensure_ascii=False)}, {json.dumps(a['referenceAnswer'], ensure_ascii=False)}),"
        else:
            line = f"    choiceQuestion({json.dumps(a['prompt'], ensure_ascii=False)}, {a['sourcePage']}, {json.dumps(a['sgkItemCode'], ensure_ascii=False)}, {json.dumps(a['options'], ensure_ascii=False)}, {a['correctIndex']}, {json.dumps(a['explanation'], ensure_ascii=False)}),"
        acts_ts_lines.append(line)
    acts_body = "\n".join(acts_ts_lines)
    chunk = f"  '{lid}': [\n{acts_body}\n  ],"
    act_chunks.append(chunk)

all_act_code = "\n".join(act_chunks)
insert_act_idx = act_ts.rfind("};")
if insert_act_idx != -1:
    new_act_ts = act_ts[:insert_act_idx] + all_act_code + "\n};\n"
    with open('src/data/curriculum/vietnamese/sgkActivities.ts', 'w', encoding='utf-8') as f:
        f.write(new_act_ts)
    print("Updated sgkActivities.ts with 14 Grade 2 Sem 1 lessons!")

# 3. Update lessonPageMappings.generated.json
with open('src/data/curriculum/vietnamese/lessonPageMappings.generated.json', 'r', encoding='utf-8') as f:
    mappings = json.load(f)

for lid, data in g2_t1_transcripts.items():
    num = int(re.search(r'b(\d+)', lid).group(1))
    mappings[lid] = {
        'lessonId': lid,
        'bookId': 'tv-g2-t1',
        'sourcePages': data['sourcePages'],
        'matchedTitle': f"Bài {num}: {data['title']}",
        'matchedText': data['title'],
        'confidence': 1,
        'status': 'visually_reviewed'
    }

with open('src/data/curriculum/vietnamese/lessonPageMappings.generated.json', 'w', encoding='utf-8') as f:
    json.dump(mappings, f, ensure_ascii=False, indent=2)

print("Updated lessonPageMappings.generated.json!")
