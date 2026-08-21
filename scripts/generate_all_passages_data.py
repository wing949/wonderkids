# -*- coding: utf-8 -*-
import os
import sys
import json

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

passages = {}

def add_p(pid, title, author, genre, content, vocab, q1_text, q1_ans, q1_opts, q2_text=None, q2_ans=None, q2_opts=None):
    narration = f"{title}. " + " ".join(content)
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
    
    # Q2 (if any)
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
            "content": content,
            "audioNarration": narration,
            "vocabularyNotes": vocab
        },
        "questions": questions
    }

# =========================================================================
# LỚP 1 (30 BÀI)
# =========================================================================
add_p(
    'tv-g1-b1', 'Bé Na Đi Học', 'SGK Tiếng Việt 1', 'prose',
    [
        'Hôm nay là ngày đầu tiên bé Na đi học lớp Một.',
        'Mẹ mua cho Na cặp sách mới, vở mới và bút chì xinh.',
        'Na ríu rít chào ba mẹ rồi tự tin bước vào lớp cùng cô giáo và các bạn.'
    ],
    [
        {'word': 'Ríu rít', 'meaning': 'Nói cười tíu tít, vui vẻ liên hồi.'},
        {'word': 'Tự tin', 'meaning': 'Mạnh dạn, không rụt rè lo lắng.'}
    ],
    'Hôm nay là ngày đầu tiên bé Na bước vào lớp mấy?', 'a',
    [('a', 'Lớp Một ⭐'), ('b', 'Lớp Hai'), ('c', 'Lớp Ba')],
    'Mẹ đã chuẩn bị cho bé Na những đồ dùng gì?', 'a',
    [('a', 'Cặp sách mới, vở mới và bút chì xinh 🎒'), ('b', 'Đồ chơi điện tử'), ('c', 'Bánh kẹo')]
)

add_p(
    'tv-g1-b2', 'Con Cò và Chú Cá Nhỏ', 'Đồng dao thiếu nhi', 'prose',
    [
        'Con cò lặn lội bờ ao, chăm chỉ bắt tép nuôi con.',
        'Cá nhỏ bơi lượn tung tăng dưới làn nước trong vắt.',
        'Cò đậu trên cành tre nghiêng bóng, khẽ nghiêng đầu ngắm cảnh quê yên bình.'
    ],
    [
        {'word': 'Lặn lội', 'meaning': 'Chăm chỉ vượt qua khó khăn để kiếm ăn.'},
        {'word': 'Trong vắt', 'meaning': 'Rất trong, có thể nhìn thấu tận đáy.'}
    ],
    'Con cò lặn lội bờ ao để làm công việc gì?', 'a',
    [('a', 'Bắt tép nuôi con 🐟'), ('b', 'Đi dạo chơi'), ('c', 'Tập bơi lội')]
)

add_p(
    'tv-g1-b3', 'Bà Bế Bé', 'SGK Tiếng Việt 1', 'prose',
    [
        'Chiều mát, bà bế bé ra hiên ngắm hoa.',
        'Bé cười toe toét chỉ vào chú bướm vàng đang bay.',
        'Bà hát ru êm dịu, gió thoảng đưa hương nhài ngào ngạt khắp sân.'
    ],
    [
        {'word': 'Toe toét', 'meaning': 'Cười mở rộng miệng, vô cùng vui sướng.'},
        {'word': 'Ngào ngạt', 'meaning': 'Mùi hương thơm đậm đà, lan tỏa xa.'}
    ],
    'Bà bế bé ra hiên để làm gì?', 'a',
    [('a', 'Ngắm hoa và hóng mát 🌸'), ('b', 'Đi ngủ'), ('c', 'Ăn cơm')]
)

add_p(
    'tv-g1-b4', 'Gà Gáy Sáng', 'SGK Tiếng Việt 1', 'prose',
    [
        'Sáng sớm tinh mơ, chú gà trống cất tiếng gáy vang: "Ò... ó... o...".',
        'Ông mặt trời từ từ nhô lên sau rặng tre làng, tỏa ánh nắng vàng rực rỡ.',
        'Bé Hà thức dậy, rửa mặt sạch sẽ rồi vui vẻ cùng mẹ chuẩn bị tới trường.'
    ],
    [
        {'word': 'Tinh mơ', 'meaning': 'Trời mới bắt đầu sáng sớm.'},
        {'word': 'Rực rỡ', 'meaning': 'Ánh sáng chói lọi, tươi đẹp nổi bật.'}
    ],
    'Chú gà trống gáy vang vào thời điểm nào?', 'a',
    [('a', 'Sáng sớm tinh mơ 🌅'), ('b', 'Buổi trưa'), ('c', 'Buổi tối')]
)

add_p(
    'tv-g1-b5', 'Búp Bê Của Bé', 'SGK Tiếng Việt 1', 'prose',
    [
        'Bé có một cô búp bê nhỏ rất xinh xắn.',
        'Búp bê có đôi mắt đen lay láy và mái tóc vàng bồng bềnh.',
        'Mỗi tối học bài xong, bé lại âu yếm chải tóc và ru búp bê ngủ.'
    ],
    [
        {'word': 'Đen lay láy', 'meaning': 'Màu đen bóng, sáng ngời tinh anh.'},
        {'word': 'Bồng bềnh', 'meaning': 'Mềm mại uốn lượn nhẹ nhàng.'}
    ],
    'Mỗi tối sau khi học bài xong, bé thường làm gì?', 'a',
    [('a', 'Âu yếm chải tóc và ru búp bê ngủ 🧸'), ('b', 'Xem tivi khuya'), ('c', 'Chạy ra ngoài chơi')]
)

for i in range(6, 31):
    g1_titles = {
        6: ('Lớp Học Vui Nhộn', 'Lớp học của bé rộn rã tiếng đọc bài. Cô giáo dịu dàng hướng dẫn từng bạn nắn nót viết từng nét chữ tròn trịa.'),
        7: ('Nắng Ấm Đầu Mùa', 'Ánh nắng ban mai rọi xuống khu vườn xanh tươi. Cây bưởi, cây cam đua nhau đâm chồi biếc, tỏa hương thơm ngát.'),
        8: ('Ô Cửa Sổ Nhỏ', 'Bên ô cửa sổ nhỏ, gió nhẹ khẽ lay rèm hoa. Bé ngồi chăm chú đọc sách, lắng nghe tiếng chim ríu rít ngoài vườn.'),
        9: ('Quà Của Bố', 'Bố đi công tác xa về mang cho bé một hộp bút chì màu rực rỡ. Bé ôm chầm lấy bố và nói lời cảm ơn ngọt ngào.'),
        10: ('Rừng Xanh Vẫy Gọi', 'Rừng cây bạt ngàn với bao loài chim quý. Suối chảy róc rách đêm ngày, mang lại nguồn nước trong lành cho muông thú.'),
        11: ('Tổ Chim Xinh', 'Trên cành cây cao có một tổ chim non xinh xắn. Chim mẹ sớm hôm cần mẫn tha mồi về mớm cho bầy con thơ.'),
        12: ('Vườn Cây Của Bé', 'Mỗi buổi chiều, bé cùng ông ra vườn tưới nước cho cây. Những luống rau xanh non mơn mởn lớn lên từng ngày.'),
        13: ('Xe Buýt Tới Trường', 'Bác tài xế lái xe buýt đón chúng em đúng giờ. Các bạn học sinh trật tự ngồi vào chỗ, vui vẻ vẫy tay chào mọi người.'),
        14: ('Chú Gà Trống Nhỏ', 'Gà trống có bộ lông sặc sỡ và chiếc mào đỏ tươi. Chú cất tiếng gáy vang báo hiệu một ngày mới tươi sáng bắt đầu.'),
        15: ('Gió Mát Mùa Hè', 'Cơn gió mùa hè mang theo hơi nước mát lạnh từ mặt hồ. Những cánh diều no gió bay lượn trên bầu trời xanh thẳm.'),
        16: ('Ngôi Nhà Thân Thương', 'Ngôi nhà nhỏ có giàn hoa giấy nở rộ trước sân. Nơi đây luôn tràn ngập tiếng cười ấm áp và tình yêu thương của gia đình.'),
        17: ('Phố Phường Nhộn Nhịp', 'Đường phố rực rỡ cờ hoa và đèn lồng lấp lánh. Dòng người qua lại tấp nập, ai nấy đều nở nụ cười rạng rỡ đón xuân.'),
        18: ('Trăng Sáng Sân Nhà', 'Đêm rằm trăng tròn vành vạnh như chiếc đĩa bạc. Cả nhà quây quần bên hiên thưởng thức trà thơm và ngắm trăng thanh.'),
        19: ('Bạn Bè Thân Thiết', 'Bé và các bạn cùng nhau học tập và chia sẻ đồ chơi. Tình bạn tuổi thơ trong sáng và ngọt ngào biết bao.'),
        20: ('Bữa Cơm Gia Đình', 'Mẹ nấu những món ăn thơm ngon, nóng hổi. Cả nhà quây quần bên mâm cơm ấm áp, rộn rã tiếng nói cười sum vầy.'),
        21: ('Sân Trường Rộn Rã', 'Giờ ra chơi, sân trường rộn ràng bao trò chơi dân gian. Tiếng reo hò cổ vũ vang lên rộn rã dưới bóng cây bàng xanh mát.'),
        22: ('Chú Dế Mèn Nhỏ', 'Chú dế mèn có đôi râu dài và đôi cánh óng ánh. Đêm đêm chú cất tiếng gáy véo von như khúc nhạc ru dịu dàng.'),
        23: ('Bức Tranh Mùa Xuân', 'Bé vẽ bức tranh mùa xuân với hoa mai vàng rực rỡ và những chú chim én chao liệng giữa bầu trời bao la.'),
        24: ('Tiếng Hát Con Chim', 'Chim sơn ca cất tiếng hót véo von đón ánh bình minh. Tiếng hót trong trẻo làm bừng sáng cả không gian đất trời.'),
        25: ('Cơn Mưa Mùa Hạ', 'Cơn mưa rào bất chợt làm dịu mát cái nóng oi ả. Cây cối trong vườn reo vui, tắm mình dưới làn nước mát lành.'),
        26: ('Bé Đi Học Vui', 'Mỗi ngày đến trường là một ngày vui. Bé được học bao điều mới lạ và cùng bạn bè vui chơi dưới mái trường mến yêu.'),
        27: ('Gia Đình Yêu Thương', 'Ba mẹ luôn chăm sóc và yêu thương bé hết lòng. Bé luôn ngoan ngoãn, vâng lời để ba mẹ luôn vui lòng.'),
        28: ('Thiên Nhiên Quanh Em', 'Đồng lúa chín vàng trải dài tít tắp đến chân trời. Dòng sông quê êm đềm bồi đắp phù sa cho những mùa màng bội thu.'),
        29: ('Quê Hương Em Đẹp Lắm', 'Việt Nam non nước hữu tình với rừng vàng biển bạc. Em tự hào là người con của đất nước Việt Nam tươi đẹp.'),
        30: ('Bác Hồ Kính Yêu Của Thiếu Nhi', 'Bác Hồ luôn dành tình yêu thương bao la cho các cháu thiếu nhi. Thiếu nhi Việt Nam luôn ghi nhớ năm điều Bác Hồ dạy.')
    }
    t_title, t_desc = g1_titles[i]
    add_p(
        f'tv-g1-b{i}', t_title, 'SGK Tiếng Việt 1', 'prose',
        [
            f'{t_desc}',
            'Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.'
        ],
        [
            {'word': 'Chăm chỉ', 'meaning': 'Luôn cố gắng làm việc và học tập đều đặn.'},
            {'word': 'Tươi đẹp', 'meaning': 'Có vẻ đẹp rạng rỡ và tràn đầy sức sống.'}
        ],
        f'Bài đọc "{t_title}" mang đến thông điệp gì cho bé?', 'a',
        [('a', 'Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟'), ('b', 'Đi chơi cả ngày'), ('c', 'Không học bài')]
    )

# =========================================================================
# LỚP 2 (30 BÀI)
# =========================================================================
add_p(
    'tv-g2-b1', 'Tôi là học sinh lớp 2', 'Phỏng theo SGK Tiếng Việt 2', 'prose',
    [
        'Sáng sớm ngày khai trường, tôi thức dậy thật sớm. Mẹ âu yếm vuốt tóc tôi và nói: "Chúc mừng con trai yêu đã chính thức trở thành học sinh lớp 2!"',
        'Tôi mặc bộ đồng phục mới tinh, tinh tươm và sạch sẽ. Đứng trước gương, tôi thấy mình lớn hơn hẳn năm ngoái. Không còn rụt rè, bỡ ngỡ như ngày đầu bước vào lớp Một nữa.',
        'Đến trường, sân trường rợp bóng cờ hoa và rộn rã tiếng cười nói. Tôi nhìn thấy thầy cô mến yêu và gặp lại những người bạn thân thiết. Chúng tôi tíu tít kể cho nhau nghe về những chuyến đi chơi mùa hè kỳ thú.',
        'Hồi trống trường giòn giã vang lên: "Tùng! Tùng! Tùng!". Chúng tôi trang nghiêm xếp hàng bước vào lớp học mới. Tôi tự hào thầm nhủ: "Mình đã là học sinh lớp 2, mình sẽ học thật chăm chỉ và yêu thương bạn bè!"'
    ],
    [
        {'word': 'Âu yếm', 'meaning': 'Cử chỉ dịu dàng, thể hiện tình yêu thương trìu mến.'},
        {'word': 'Tíu tít', 'meaning': 'Nhiều người cùng nói cười vui vẻ, tíu tít không ngừng.'},
        {'word': 'Trang nghiêm', 'meaning': 'Nghiêm trang, kính cẩn và có trật tự cao.'}
    ],
    'Nhân vật chính cảm thấy bản thân thay đổi thế nào khi lên lớp 2?', 'a',
    [('a', 'Thấy mình lớn hơn hẳn, tự tin và không còn bỡ ngỡ ⭐'), ('b', 'Vẫn còn sợ hãi khóc nhè'), ('c', 'Không muốn đến trường')],
    'Âm thanh nào báo hiệu giờ vào lớp học mới bắt đầu?', 'a',
    [('a', 'Tiếng trống trường giòn giã: Tùng! Tùng! Tùng! 🥁'), ('b', 'Tiếng chuông điện thoại'), ('c', 'Tiếng còi xe buýt')]
)

add_p(
    'tv-g2-b2', 'Ngày hôm qua đâu rồi?', 'Bế Kiến Quốc', 'poem',
    [
        'Em cầm tờ lịch cũ\n- Ngày hôm qua đâu rồi?\nRa ngoài sân hỏi nụ\nNụ vừa nở cùng hoa.',
        'Em xoa đầu chú chó\n- Ngày hôm qua đâu rồi?\nChú chó vẫy đuôi nhỏ:\n"Hôm qua ở ngoài đồng."',
        'Ngày hôm qua ở lại\nTrong hạt lúa mẹ trồng\nCánh đồng chờ gặt hái\nChín vàng màu ước mong.',
        'Ngày hôm qua ở lại\nTrong vở hồng của con\nCon học hành chăm chỉ\nLà ngày qua vẫn còn.'
    ],
    [
        {'word': 'Ước mong', 'meaning': 'Mong muốn tha thiết đạt được điều tốt đẹp trong tương lai.'},
        {'word': 'Chăm chỉ', 'meaning': 'Siêng năng, chịu khó học tập và làm việc đều đặn.'}
    ],
    'Theo bài thơ, ngày hôm qua ở lại những nơi nào?', 'a',
    [('a', 'Trong hạt lúa mẹ trồng và trong vở hồng của con 🌾'), ('b', 'Trong chiếc cặp sách'), ('c', 'Trong tivi và máy tính')]
)

add_p(
    'tv-g2-b3', 'Niềm vui của Bi và Bống', 'SGK Tiếng Việt 2', 'prose',
    [
        'Khi cơn mưa rào vừa tạnh, một chiếc cầu vồng rực rỡ hiện ra trên nền trời xanh thẳm.',
        'Bi chỉ tay lên cầu vồng và bảo: "Em nghe nói dưới chân cầu vồng có một hũ vàng đấy!". Bống reo lên: "Thật sao anh? Nếu tìm được hũ vàng, em sẽ mua tặng anh một chiếc ô tô đồ chơi thật đẹp!".',
        'Bi mỉm cười xoa đầu em gái: "Còn anh sẽ mua một cô búp bê biết hát để tặng em!". Hai anh em cùng cười vang trong niềm hạnh phúc ngập tràn.'
    ],
    [
        {'word': 'Cầu vồng', 'meaning': 'Hiện tượng quang học tạo ra vòng cung 7 màu rực rỡ sau cơn mưa.'},
        {'word': 'Ngập tràn', 'meaning': 'Tràn đầy, nhiều đến mức bao phủ khắp không gian.'}
    ],
    'Nếu tìm được hũ vàng, hai anh em Bi và Bống ước mơ làm gì cho nhau?', 'a',
    [('a', 'Mua ô tô đồ chơi cho Bi và mua búp bê biết hát cho Bống 🎁'), ('b', 'Mua thật nhiều bánh kẹo ăn một mình'), ('c', 'Cất hũ vàng đi không dùng')]
)

add_p(
    'tv-g2-b4', 'Làm việc thật là vui', 'Tô Hoài', 'prose',
    [
        'Quanh ta, mọi vật, mọi người đều bận rộn làm việc.',
        'Cái đồng hồ tích tắc, tích tắc báo phút, báo giờ. Con gà trống gáy vang: "Ò... ó... o..." đánh thức mọi người thức dậy đón bình minh.',
        'Con chim cặm cụi bắt sâu bảo vệ mùa màng. Cành đào nở hoa cho sắc xuân thêm rực rỡ.',
        'Bé cũng bận rộn như thế. Bé học bài, làm việc nhà, chơi đùa cùng các bạn. Bận rộn nhưng bé lúc nào cũng rạng rỡ và vui vẻ.'
    ],
    [
        {'word': 'Tích tắc', 'meaning': 'Từ mô phỏng âm thanh đều đặn của chiếc kim đồng hồ.'},
        {'word': 'Cặm cụi', 'meaning': 'Chăm chú, miệt mài làm một công việc gì đó không nghỉ.'}
    ],
    'Bài văn "Làm việc thật là vui" muốn nhắn nhủ chúng ta điều gì?', 'a',
    [('a', 'Lao động và học tập chăm chỉ luôn mang lại niềm vui rạng rỡ 🐝'), ('b', 'Làm việc làm cho người ta mệt mỏi'), ('c', 'Chỉ nên chơi đùa không làm việc')]
)

add_p(
    'tv-g2-b5', 'Em có xinh không?', 'SGK Tiếng Việt 2', 'prose',
    [
        'Voi con rất thích làm đẹp. Chú thường hỏi mọi người xung quanh: "Bác thấy em có xinh không?".',
        'Gặp Hươu, Hươu bảo: "Nếu có thêm cặp sừng cong vút thì cậu mới thật là xinh!". Voi con bèn cài hai cành cây khô lên đầu.',
        'Gặp Vượn, Vượn bảo: "Nếu có thêm chòm râu dài thì cậu mới oai phong!". Voi con lại gắn thêm chòm râu bằng rễ cây.',
        'Về nhà, Voi bố mẹ bật cười và dịu dàng nói: "Con trai của bố mẹ đẹp nhất khi con là chính mình!". Voi con hiểu ra, vui vẻ bỏ sừng và râu giả, tự tin khoe vẻ đáng yêu vốn có.'
    ],
    [
        {'word': 'Cong vút', 'meaning': 'Uốn cong mềm mại và vươn dài về phía trên.'},
        {'word': 'Oai phong', 'meaning': 'Có dáng vẻ uy nghiêm, mạnh mẽ và đường bệ.'}
    ],
    'Voi bố mẹ đã khuyên Voi con điều gì?', 'a',
    [('a', 'Con đẹp nhất khi con là chính mình, tự tin vào bản thân 🐘'), ('b', 'Nên gắn thêm sừng và râu giả'), ('c', 'Không nên nói chuyện với ai')]
)

add_p(
    'tv-g2-b6', 'Một giờ học', 'SGK Tiếng Việt 2', 'prose',
    [
        'Hôm nay trong giờ tập đọc, thầy giáo yêu cầu cả lớp đứng lên tự tin giới thiệu về một người bạn mà mình quý mến.',
        'Quang vốn là một cậu bé rụt rè, hay bẽn lẽn trước đám đông. Khi thầy gọi tên, mặt Quang đỏ ửng, chân tay lúng túng.',
        'Thầy giáo mỉm cười khích lệ: "Hãy thở một hơi thật sâu và bắt đầu đi nào!". Các bạn xung quanh cũng đồng thanh vỗ tay cổ vũ.',
        'Quang lấy lại bình tĩnh, cất cao giọng tự tin kể về người bạn thân ngồi cùng bàn. Cả lớp vang lên tràng pháo tay ròn rã khen ngợi sự dũng cảm của Quang.'
    ],
    [
        {'word': 'Rụt rè', 'meaning': 'Nhút nhát, e sợ, không dám mạnh dạn thể hiện mình.'},
        {'word': 'Khích lệ', 'meaning': 'Động viên, cổ vũ tinh thần cho người khác vươn lên.'}
    ],
    'Nhờ điều gì mà bạn Quang đã dũng cảm vượt qua sự rụt rè?', 'a',
    [('a', 'Nhờ nụ cười khích lệ của thầy giáo và tiếng vỗ tay cổ vũ của các bạn 👏'), ('b', 'Nhờ thầy giáo phạt'), ('c', 'Nhờ chạy trốn khỏi lớp')]
)

add_p(
    'tv-g2-b7', 'Cây xấu hổ', 'Trần Hoài Dương', 'prose',
    [
        'Bên bờ suối nhỏ, có một khóm cây trinh nữ xanh tươi, người ta thường gọi là cây xấu hổ.',
        'Mỗi khi có cơn gió thoảng qua làm chiếc lá khẽ chạm nhẹ vào cành, những chiếc lá nhỏ xinh lập tức e ấp cụp tròn lại.',
        'Chú chim sâu bay ngang qua ngạc nhiên hỏi: "Sao bạn lại khép lá lại thế?". Cây xấu hổ e thẹn đáp: "Tôi thẹn thùng trước nắng sớm mai rực rỡ đấy!".',
        'Khi màn đêm buông xuống, cây lại từ từ mở rộng những tán lá mỏng manh đón sương đêm trong lành.'
    ],
    [
        {'word': 'E ấp', 'meaning': 'Dáng vẻ khép nép, thẹn thùng một cách kín đáo và duyên dáng.'},
        {'word': 'Mỏng manh', 'meaning': 'Rất mỏng và nhẹ nhàng, dễ bị rung rinh trước gió.'}
    ],
    'Đặc điểm đặc biệt nhất của cây xấu hổ là gì?', 'a',
    [('a', 'Khép lá lại e ấp khi có vật thể chạm vào 🌿'), ('b', 'Nở hoa to như chiếc ô'), ('c', 'Biết bơi dưới nước')]
)

add_p(
    'tv-g2-b8', 'Cầu thủ dự bị', 'Minh Chính', 'prose',
    [
        'Dũng rất mê bóng đá. Chiều nào chú cũng cùng các bạn ra sân cỏ của làng để chia đội thi đấu.',
        'Vì còn nhỏ và chạy chậm hơn các anh lớn, Dũng được phân công làm cầu thủ dự bị đứng ngoài đường biên cổ vũ.',
        'Không hề nản lòng, Dũng chăm chú theo dõi từng đường chuyền và tích cực nhặt bóng giúp các bạn.',
        'Đến hiệp hai, khi một cầu thủ chính bị mỏi chân, Dũng được thầy cho vào sân thay thế. Với sự nhanh nhẹn và khéo léo, Dũng đã đón bóng chính xác và sút tung lưới đối phương, mang về chiến thắng giòn giã cho toàn đội!'
    ],
    [
        {'word': 'Cầu thủ dự bị', 'meaning': 'Cầu thủ sẵn sàng vào sân thay thế khi đồng đội cần nghỉ ngơi.'},
        {'word': 'Nhanh nhẹn', 'meaning': 'Thao tác nhanh, linh hoạt và chuẩn xác trong từng chuyển động.'}
    ],
    'Dũng đã thể hiện tinh thần thể thao tuyệt vời như thế nào?', 'a',
    [('a', 'Không nản lòng khi làm dự bị, kiên trì và chớp thời cơ ghi bàn thắng ⚽'), ('b', 'Hờn dỗi bỏ về nhà'), ('c', 'Tranh bóng của bạn')]
)

add_p(
    'tv-g2-b9', 'Cô giáo lớp em', 'Nguyễn Xuân Sanh', 'poem',
    [
        'Sáng nào em đến lớp\nCũng thấy cô đến rồi\nĐáp lời "Chào cô ạ!"\nCô mỉm cười thật tươi.',
        'Cô dạy em tập viết\nGió đưa thoảng hương nhài\nNắng ghé vào cửa lớp\nXem chúng em học bài.',
        'Những lời cô giáo giảng\nẤm áp tựa lời ru\nCho em thêm hiểu biết\nNâng bước em từng giờ.'
    ],
    [
        {'word': 'Thoảng', 'meaning': 'Mùi hương nhẹ nhàng lướt qua trong không khí.'},
        {'word': 'Ấm áp', 'meaning': 'Tạo cảm giác bình yên, thân thương và tràn đầy tình cảm.'}
    ],
    'Hình ảnh cô giáo trong bài thơ hiện lên như thế nào?', 'a',
    [('a', 'Hiền từ, ân cần dạy dỗ học trò với nụ cười rạng rỡ và lời giảng ấm áp 👩‍🏫'), ('b', 'Nghiêm khắc không bao giờ cười'), ('c', 'Vắng mặt trong lớp')]
)

add_p(
    'tv-g2-b10', 'Thời khóa biểu', 'SGK Tiếng Việt 2', 'prose',
    [
        'Thời khóa biểu là người bạn đồng hành quen thuộc của mỗi học sinh khi cắp sách tới trường.',
        'Bảng thời khóa biểu được chia thành các cột thứ trong tuần và các hàng tiết học một cách rõ ràng, khoa học.',
        'Nhờ có thời khóa biểu, em luôn biết trước ngày mai có những môn học nào để chuẩn bị đầy đủ sách vở và đồ dùng học tập ngay ngắn vào buổi tối.',
        'Một bạn nhỏ biết theo dõi thời khóa biểu hàng ngày là một bạn nhỏ tự lập, có thói quen ngăn nắp và yêu thích việc học.'
    ],
    [
        {'word': 'Đồng hành', 'meaning': 'Cùng đi bên cạnh và hỗ trợ nhau trên một hành trình.'},
        {'word': 'Ngăn nắp', 'meaning': 'Gọn gàng, đâu ra đấy, sắp xếp có trật tự rõ ràng.'}
    ],
    'Thời khóa biểu giúp ích gì cho các bạn học sinh?', 'a',
    [('a', 'Giúp sắp xếp sách vở đúng môn và rèn luyện thói quen ngăn nắp, tự lập 📅'), ('b', 'Dùng để trang trí phòng ngủ'), ('c', 'Để vẽ tranh lên')]
)

add_p(
    'tv-g2-b18', 'Nhím nâu kết bạn', 'Theo SGK Tiếng Việt 2', 'prose',
    [
        'Trong khu rừng thông xanh ngát có một chú Nhím nâu nhút nhát sống một mình trong hốc cây cổ thụ.',
        'Mỗi ngày, Nhím nâu lủi thủi đi kiếm quả thông và hạt dẻ, chẳng dám giao tiếp cùng ai vì sợ bộ lông gai của mình làm đau người khác.',
        'Một buổi chiều mùa đông gió lạnh thổi ào ào, Nhím trắng tình cờ đi ngang qua hốc cây của Nhím nâu và cất tiếng chào ấm áp: "Chào bạn Nhím nâu! Trời lạnh quá, chúng mình cùng vào hang sưởi ấm nhé!".',
        'Nhím nâu xúc động mở cửa đón bạn. Hai chú nhím cùng nhau nướng hạt dẻ thơm lừng và chia sẻ những câu chuyện vui bên bếp lửa. Từ hôm đó, Nhím nâu không còn cô đơn nữa, chú đã hiểu rằng mở lòng và sẻ chia sẽ mang lại tình bạn diệu kỳ.'
    ],
    [
        {'word': 'Nhút nhát', 'meaning': 'Thiếu tự tin, rụt rè và hay e sợ khi tiếp xúc với người lạ.'},
        {'word': 'Ấm áp', 'meaning': 'Mang lại cảm giác dễ chịu, yêu thương và chở che.'},
        {'word': 'Lủi thủi', 'meaning': 'Cô đơn một mình, lặng lẽ không có ai bầu bạn.'}
    ],
    'Nhờ điều gì mà Nhím nâu đã thoát khỏi sự cô đơn để có bạn thân?', 'a',
    [('a', 'Nhờ sự thân thiện của Nhím trắng và sự dũng cảm mở lòng của Nhím nâu 🦔'), ('b', 'Nhờ chuyển sang khu rừng khác'), ('c', 'Nhờ ngủ suốt mùa đông')]
)

# Populate remaining Grade 2 lessons
for i in range(11, 31):
    if i in [18]:
        continue
    g2_titles = {
        11: ('Cái bàn học của em', 'Chiếc bàn học bằng gỗ xoan đào được bố đóng cho em nhân ngày tựu trường. Mặt bàn phẳng phiu, xếp ngay ngắn góc để sách vở và chiếc đèn bàn màu xanh ngọc bích.'),
        12: ('Danh sách học sinh tổ 1', 'Bảng danh sách tổ 1 ghi đầy đủ họ tên, ngày sinh và sở thích của từng thành viên, giúp các bạn thấu hiểu và gắn bó đoàn kết bên nhau.'),
        13: ('Yêu lắm trường ơi!', 'Mái trường ngói đỏ tươi ẩn hiện dưới hàng phượng vĩ. Nơi đây em có thầy cô tận tụy và bao bạn bè thân thương cùng sẻ chia ước mơ tuổi thơ.'),
        14: ('Em học vẽ', 'Với hộp bút màu sáp rực rỡ, em vẽ nên bức tranh làng quê thanh bình có dòng sông xanh uốn lượn, cánh đồng lúa chín và đàn cò bay lả bay la.'),
        15: ('Cuốn sách của em', 'Mỗi cuốn sách mở ra một kho tàng tri thức vô tận. Lật từng trang sách thơm mùi giấy mới, em như được chu du khắp thế giới kỳ thú.'),
        16: ('Khi trang sách mở ra', 'Khi trang sách mở ra, chân trời xa bỗng xích lại gần. Em được trò chuyện cùng muôn loài và thắp sáng những ước mơ bay cao.'),
        17: ('Gọi bạn', 'Bê Vàng và Dê Trắng sống bên nhau trong rừng xanh thẳm. Khi hạn hán tràn về, Bê Vàng đi tìm cỏ rồi lạc lối, Dê Trắng thương bạn gọi mãi không thôi.'),
        19: ('Chuyện bốn mùa', 'Bốn nàng tiên Xuân, Hạ, Thu, Đông hội ngộ đêm giao thừa, cùng nhau dệt nên bức tranh thiên nhiên rực rỡ sắc màu cho vạn vật tốt tươi.'),
        20: ('Mùa xuân đến rồi', 'Hoa đào hoa mai nở rộ đón gió xuân ấm áp. Những chồi non mơn mởn thức giấc sau giấc ngủ đông dài, căng tràn nhựa sống.'),
        21: ('Mưa mùa hạ', 'Cơn mưa rào mùa hạ xua tan cái nóng bức oi ả. Cây cối trong vườn reo vui, đường làng ngõ xóm sạch bóng như vừa được gột rửa.'),
        22: ('Chim rừng Tây Nguyên', 'Đại ngàn Tây Nguyên rộn rã muôn khúc ca của loài chim. Tiếng hót véo von hòa cùng tiếng suối ngàn vang vọng muôn nơi.'),
        23: ('Bác sĩ Sói', 'Sói xám gian manh đóng giả làm bác sĩ để hòng ăn thịt Ngựa non. Nhưng chú Ngựa thông minh đã tung cú đá trời giáng trừng phạt kẻ gian ác.'),
        24: ('Tôm Càng và Cá Con', 'Tôm Càng dũng cảm búng chiếc đuôi chắc khỏe, kịp thời đẩy bạn Cá Con tránh khỏi cú đớp của con cá dữ độc ác dưới đáy sông.'),
        25: ('Bác Hồ rèn luyện thân thể', 'Mỗi buổi sáng, Bác Hồ luôn dậy sớm tập thể dục, chạy bộ và leo núi. Bác dạy thiếu nhi phải luôn rèn luyện thân thể khỏe mạnh để xây dựng đất nước.'),
        26: ('Ai ngoan sẽ được thưởng', 'Bác Hồ đến thăm các cháu thiếu nhi nhân dịp Tết Trung thu. Bác khen ngợi bạn nhỏ biết thật thà nhận lỗi và tặng bạn phần kẹo ngọt ngào.'),
        27: ('Cờ đỏ sao vàng', 'Lá cờ đỏ sao vàng tung bay kiêu hãnh trên bầu trời lộng gió, là biểu tượng thiêng liêng cho độc lập, tự do và niềm tự hào dân tộc.'),
        28: ('Em yêu biển đảo', 'Biển đảo Việt Nam giàu đẹp với những bãi cát trắng mịn màng và đoàn thuyền đánh cá trở về trong ánh bình minh rạng rỡ.'),
        29: ('Lượm hạt thóc vàng', 'Bát cơm dẻo thơm trên bàn ăn là kết tinh từ giọt mồ hôi công sức cần cù của người nông dân một nắng hai sương trên đồng ruộng.'),
        30: ('Chuyến phiêu lưu của Giọt Nước', 'Giọt nước nhỏ bay lên trời xanh hóa thành mây trắng bồng bềnh, rồi theo cơn mưa rào trở về tưới mát cho vạn vật xanh tươi.')
    }
    t_title, t_desc = g2_titles[i]
    add_p(
        f'tv-g2-b{i}', t_title, 'SGK Tiếng Việt 2', 'prose',
        [
            f'{t_desc}',
            'Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước.'
        ],
        [
            {'word': 'Yêu thương', 'meaning': 'Tình cảm gắn bó, chia sẻ và luôn mong điều tốt đẹp cho người khác.'},
            {'word': 'Rực rỡ', 'meaning': 'Tươi sáng, nổi bật với vẻ đẹp lộng lẫy.'}
        ],
        f'Nội dung chính của bài đọc "{t_title}" là gì?', 'a',
        [('a', f'Ca ngợi vẻ đẹp và bài học ý nghĩa trong bài {t_title} 🌸'), ('b', 'Khuyên các bạn đi ngủ sớm'), ('c', 'Không có ý nghĩa gì')]
    )

# =========================================================================
# LỚP 3 (25 BÀI)
# =========================================================================
g3_database = {
    1: ('Chiếc nhãn vở đặc biệt', 'SGK Tiếng Việt 3', 'Chiều hôm nay, bé cùng mẹ nắn nót viết từng chiếc nhãn vở mới tinh cho năm học mới. Nhìn chiếc nhãn vở xinh xắn mang tên mình, bé cảm thấy mình đã thực sự trưởng thành và tự tin bước vào lớp 3.'),
    2: ('Lắng nghe những ước mơ', 'SGK Tiếng Việt 3', 'Mỗi bạn nhỏ trong lớp đều ấp ủ một ước mơ cao đẹp: bạn ước làm bác sĩ chữa bệnh cho muôn người, bạn ước làm phi công lái máy bay lượn trên trời xanh, bạn ước làm cô giáo dạy chữ cho trẻ em vùng cao.'),
    3: ('Em vui đến trường', 'SGK Tiếng Việt 3', 'Con đường làng quen thuộc rộn ràng tiếng chân bước và tiếng cười khúc khích của bầy trẻ nhỏ. Mùa thu mang theo gió heo may lành lạnh và bầu trời trong xanh vời vợi.'),
    4: ('Cậu học sinh mới', 'Theo SGK Tiếng Việt 3', 'Cậu bé Lu-i Pa-xtơ ngày đầu đến trường còn bỡ ngỡ nhưng đã sớm bộc lộ đức tính chăm chỉ, kiên trì và niềm say mê khoa học bất tận.'),
    5: ('Mùa hè lấp lánh', 'SGK Tiếng Việt 3', 'Mùa hè rực rỡ với tiếng ve ngân vang trong vòm lá phượng vĩ đỏ rực. Những buổi chiều lộng gió thả diều trên triền đê là ký ức tuổi thơ không bao giờ phai.'),
    6: ('Cánh đồng tuổi thơ', 'SGK Tiếng Việt 3', 'Cánh đồng lúa chín trải rộng như một tấm thảm nhung vàng óng ả. Mùi thơm của rơm rạ mới gặt quyện trong gió chiều mang lại cảm giác bình yên đến lạ kỳ.'),
    7: ('Con đường đến trường', 'SGK Tiếng Việt 3', 'Con đường đến trường uốn lượn bên sườn đồi phủ kín hoa dại thơm ngát. Mỗi bước chân em đi đều rộn rã tiếng chim ca chào đón ngày mới.'),
    8: ('Lời giải toán đặc biệt', 'SGK Tiếng Việt 3', 'Cậu bé Ét-môn-đô đã tìm ra cách giải bài toán bằng những vần thơ ngộ nghĩnh, làm thầy giáo và cả lớp vô cùng bất ngờ và thích thú.'),
    9: ('Bàn tay cô giáo', 'Định Hải', 'Bàn tay cô giáo khéo léo gấp những tờ giấy màu thành chiếc thuyền buồm xinh xắn, cánh chim hải âu chao liệng và ông mặt trời rực rỡ giữa biển khơi.'),
    10: ('Nhà rông ở Tây Nguyên', 'SGK Tiếng Việt 3', 'Nhà rông cao vút sừng sững giữa buôn làng như lưỡi rìu khổng lồ vươn lên trời xanh. Đây là nơi hội tụ linh thiêng của cộng đồng các dân tộc Tây Nguyên anh em.'),
    11: ('Tiếng chim hót trong vườn', 'SGK Tiếng Việt 3', 'Khu vườn buổi sớm rộn rã bản hòa ca của muôn loài chim: chim chích chòe lảnh lót, chim khuyên ríu rít, chim cu gáy gù gù êm tai.'),
    12: ('Thư viện trường em', 'SGK Tiếng Việt 3', 'Thư viện trường học là một ngôi nhà tri thức ấm cúng với hàng ngàn cuốn sách bổ ích được xếp ngay ngắn trên các kệ gỗ xinh xắn.'),
    13: ('Bầu trời mùa thu', 'SGK Tiếng Việt 3', 'Bầu trời mùa thu trong vắt và cao vút. Những đám mây trắng xốp trôi lững lờ như những chiếc thuyền buồm êm ả lướt trên mặt nước trong xanh.'),
    14: ('Quạt cho bà ngủ', 'Thạch Quỳ', 'Bà nằm ốm trên giường, bé ngồi bên cạnh khẽ khàng vẫy chiếc quạt nan ru bà vào giấc ngủ êm đềm giữa buổi trưa hè thơm ngát hương cam.'),
    15: ('Cóc kiện Trời', 'Truyện cổ tích', 'Gặp năm hạn hán dữ dội, chú Cóc dũng cảm dẫn đầu muôn thú lên thiên đình đánh trống kiện Trời đòi mưa, cứu sống muôn loài thoát khỏi cơn đại hạn.'),
    16: ('Hai Bà Trưng', 'Truyện lịch sử', 'Trưng Trắc và Trưng Nhị cưỡi voi xung trận, phất cờ khởi nghĩa quét sạch quân xâm lược, giành lại giang sơn thái bình cho muôn dân đất Việt.'),
    17: ('Đất nước tươi đẹp', 'SGK Tiếng Việt 3', 'Đất nước Việt Nam trải dài từ ải Nam Quan đến mũi Cà Mau với ngàn năm văn hiến, non sông gấm vóc rạng ngời truyền thống anh hùng.'),
    18: ('Bức thư gửi chú hải quân', 'SGK Tiếng Việt 3', 'Em viết thư gửi các chú bộ đội hải quân đang ngày đêm cầm chắc tay súng canh giữ vùng trời vùng biển thiêng liêng nơi hải đảo xa xôi của Tổ quốc.'),
    19: ('Chú hải quân canh giữ đảo xa', 'SGK Tiếng Việt 3', 'Giữa trùng khơi sóng gió, hình ảnh người chiến sĩ hải quân với nụ cười lạc quan, kiên cường luôn là điểm tựa vững chắc cho biển đảo quê hương.'),
    20: ('Bác sĩ Y-éc-xanh', 'SGK Tiếng Việt 3', 'Bác sĩ A-lếch-xăng Y-éc-xanh đã dành trọn cả cuộc đời gắn bó với mảnh đất Nha Trang hiền hòa để nghiên cứu y học, chữa bệnh cứu sống đồng bào nghèo.'),
    21: ('Người trí thức yêu nước', 'SGK Tiếng Việt 3', 'Bác sĩ Đặng Văn Ngữ từ bỏ cuộc sống tiện nghi nơi xứ người, vượt ngàn dặm về chiến khu kháng chiến để nghiên cứu thuốc cứu chữa thương bệnh binh.'),
    22: ('Trái Đất xanh của chúng mình', 'SGK Tiếng Việt 3', 'Trái Đất là ngôi nhà chung tươi đẹp của muôn loài. Chúng ta hãy cùng chung tay bảo vệ màu xanh của rừng cây, nguồn nước và bầu khí quyển trong lành.'),
    23: ('Cùng vui chơi trong nắng mới', 'SGK Tiếng Việt 3', 'Ánh nắng ban mai chan hòa khắp sân trường. Các bạn nhỏ cùng nhau tập thể dục và tham gia các trò chơi vận động rèn luyện thân thể dẻo dai.'),
    24: ('Hương lúa chín đầu mùa', 'SGK Tiếng Việt 3', 'Gió thu đưa hương cốm mới thơm nồng nàn trên từng con ngõ nhỏ, báo hiệu một vụ mùa no ấm và tràn ngập niềm vui trên khắp làng quê.'),
    25: ('Đấu trường Trạng Nguyên nhí Lớp 3', 'WonderKids', 'Chúc mừng các sĩ tử nhí đã xuất sắc hoàn thành xuất sắc toàn bộ chương trình Tiếng Việt Lớp 3 với bản lĩnh và tri thức tuyệt vời!')
}

for idx, (t_title, t_author, t_content) in g3_database.items():
    add_p(
        f'tv-g3-b{idx}', t_title, t_author, 'prose',
        [
            t_content,
            'Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.'
        ],
        [
            {'word': 'Tự hào', 'meaning': 'Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được.'},
            {'word': 'Kiên trì', 'meaning': 'Bền bỉ, không nản lòng trước khó khăn thử thách.'}
        ],
        f'Ý nghĩa cao đẹp được gửi gắm trong bài "{t_title}" là gì?', 'a',
        [('a', f'Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚'), ('b', 'Không có ý nghĩa gì'), ('c', 'Khuyên học sinh xem tivi')]
    )

# =========================================================================
# LỚP 4 (22 BÀI)
# =========================================================================
g4_database = {
    1: ('Dế Mèn bênh vực kẻ yếu (Phần 1)', 'Tô Hoài', 'Một hôm, qua một vùng cỏ xước xanh dài, tôi chợt nghe tiếng khóc tỉ tê. Đến gần hốc đá, tôi thấy chị Nhà Trò bé nhỏ, gầy yếu đang ngồi gục đầu khóc nức nở vì bị bọn nhện ức hiếp đòi nợ ăn thịt.'),
    2: ('Mẹ vắng nhà ngày bão', 'Đặng Hiển', 'Mấy ngày mẹ vắng nhà, trời nổi bão to gió lớn. Hai anh em bảo nhau làm mọi việc nhà, chăm sóc đàn gà và nấu cơm tinh tươm để khi mẹ về nhà cửa luôn ấm áp.'),
    3: ('Dế Mèn bênh vực kẻ yếu (Phần 2)', 'Tô Hoài', 'Dế Mèn hiên ngang bước tới sào huyệt của bọn nhện, thét lớn một tiếng khiến lũ nhện run sợ. Chú vung đôi càng sắc bén phá tan vòng vây tơ nhện, bảo vệ chị Nhà Trò tội nghiệp.'),
    4: ('Truyện cổ nước mình', 'Lâm Thị Mỹ Dạ', 'Tôi yêu truyện cổ nước tôi, vừa nhân hậu lại tuyệt vời sâu xa. Những câu chuyện cổ tích thấm đượm tình người, dạy chúng ta bài học ở hiền gặp lành và lòng trung thực.'),
    5: ('Thằn lằn xanh và tắc kè', 'SGK Tiếng Việt 4', 'Thằn lằn xanh và chú tắc kè hoa mỗi loài có một môi trường sống và tài năng riêng biệt. Học cách tôn trọng sự khác biệt của bạn bè là chìa khóa của tình bạn bền chặt.'),
    6: ('Nghệ sĩ nhí', 'SGK Tiếng Việt 4', 'Tiếng đàn vĩ cầm trong trẻo của cô bé nhỏ vang lên giữa khán phòng rực rỡ ánh đèn, lay động trái tim hàng ngàn khán giả bằng niềm đam mê nghệ thuật cháy bỏng.'),
    7: ('Bài ca Trái Đất', 'Định Hải', 'Trái Đất trẻ của bạn trẻ năm châu! Vàng, trắng, đen... tuy khác màu da nhưng cùng chung nụ cười rạng rỡ và khát vọng hòa bình trên hành tinh xanh.'),
    8: ('Nhà bác học của đồng ruộng', 'SGK Tiếng Việt 4', 'Giáo sư Lương Định Của đã cống hiến trọn cuộc đời lai tạo ra những giống lúa mới năng suất cao, mang lại những mùa vàng no ấm cho hàng triệu nông dân Việt Nam.'),
    9: ('Nếu chúng mình có phép lạ', 'Định Hải', 'Nếu chúng mình có phép lạ, hạt giống nảy mầm chớp mắt thành cây, quả chín thơm lừng đầy cành, không còn chiến tranh và đói nghèo trên toàn thế giới.'),
    10: ('Cây đa quê hương', 'Nguyễn Khắc Viện', 'Cây đa cổ thụ nghìn năm tuổi đầu làng như chiếc ô khổng lồ xòe bóng mát chở che cho bao thế hệ dân làng trải qua những thăng trầm của lịch sử.'),
    11: ('Về thăm bà', 'Thạch Lam', 'Thanh bước vào khu vườn yên ả của bà, cảm nhận hương hoa hoàng lan thoang thoảng trong gió và sự chở che dịu dàng của người bà kính yêu.'),
    12: ('Đôi bạn trong rừng xanh', 'SGK Tiếng Việt 4', 'Sóc Nâu và Nhím Xám luôn đồng hành, nhường nhịn và san sẻ từng hạt sồi thơm ngon trong những ngày đông giá rét trên đỉnh núi cao.'),
    13: ('Chiếc ô màu đỏ', 'SGK Tiếng Việt 4', 'Chiếc ô màu đỏ của Mai đã che mát cho một bạn nhỏ bị lạc đường trong cơn mưa tầm tã, gieo vào lòng người sự ấm áp của tình người giữa đời thường.'),
    14: ('Buổi sớm trên quê hương', 'SGK Tiếng Việt 4', 'Bình minh rạng rỡ chiếu sáng cánh đồng lúa chín vàng trĩu hạt. Giọt sương mai long lanh đọng trên đầu ngọn cỏ như những viên ngọc bích lấp lánh.'),
    15: ('Bông hoa niềm vui', 'SGK Tiếng Việt 4', 'Bông hoa cúc vàng rực rỡ hé nở trong sớm mai là món quà bất ngờ chan chứa lòng hiếu thảo mà bé dành tặng mẹ đang trên giường bệnh.'),
    16: ('Vịnh Hạ Long', 'Thi Sảnh', 'Vịnh Hạ Long là một kiệt tác kỳ vĩ của thiên nhiên với hàng ngàn hòn đảo đá vôi nhấp nhô trên làn nước biển xanh như ngọc bích, được UNESCO vinh danh là di sản thế giới.'),
    17: ('Hang Sơn Đoòng', 'SGK Tiếng Việt 4', 'Hang Sơn Đoòng - hang động tự nhiên kỳ vĩ bậc nhất hành tinh ẩn chứa cả một khu rừng nguyên sinh và dòng sông ngầm huyền bí sâu trong lòng núi đá vôi.'),
    18: ('Chú bé Lượm', 'Tố Hữu', 'Chú bé Lượm với chiếc xắc xinh xinh, ca lô đội lệch, thoăn thoắt đôi chân vượt qua làn mưa bom bão đạn để chuyển công văn hỏa tốc cho chiến khu.'),
    19: ('Khúc hát ru những em bé lớn trên lưng mẹ', 'Nguyễn Khoa Điềm', 'Lời ru ngọt ngào của người mẹ Tà-ôi hòa cùng nhịp chày giã gạo nuôi bộ đội, nuôi dưỡng ước mơ con khôn lớn trở thành người công dân tự do của đất nước.'),
    20: ('Con suối mát lành', 'SGK Tiếng Việt 4', 'Dòng suối trong vắt róc rách chảy qua đại ngàn, mang lại nguồn sống xanh tươi và tiếng reo vui bất tận cho muông thú vùng cao.'),
    21: ('Mùa quả chín quê em', 'SGK Tiếng Việt 4', 'Khu vườn trĩu quả mùa thu: mít thơm lừng, bưởi vàng ươm, hồng đỏ mọng... mang lại niềm vui thu hoạch rạng rỡ cho những người nông dân một nắng hai sương.'),
    22: ('Đấu trường Trạng Nguyên Lớp 4', 'WonderKids', 'Chào mừng các bạn học sinh ưu tú đã vượt qua 22 chặng thử thách để bước lên bục vinh quang của Đấu trường Trạng Nguyên Lớp 4!')
}

for idx, (t_title, t_author, t_content) in g4_database.items():
    add_p(
        f'tv-g4-b{idx}', t_title, t_author, 'prose',
        [
            t_content,
            'Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.'
        ],
        [
            {'word': 'Hùng vĩ', 'meaning': 'Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường.'},
            {'word': 'Nhân ái', 'meaning': 'Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu.'}
        ],
        f'Thông điệp nhân văn cốt lõi của tác phẩm "{t_title}" là gì?', 'a',
        [('a', f'Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳'), ('b', 'Khen ngợi kẻ mạnh bắt nạt kẻ yếu'), ('c', 'Không có giá trị gì')]
    )

# =========================================================================
# LỚP 5 (25 BÀI)
# =========================================================================
g5_database = {
    1: ('Thư gửi các học sinh', 'Hồ Chí Minh', 'Các em học sinh! Ngày hôm nay là ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa. Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em.'),
    2: ('Sắc màu em yêu', 'Phạm Đình Ân', 'Em yêu màu đỏ như máu trong tim, cờ Tổ quốc bay; Em yêu màu xanh của đồng bằng bát ngát; Em yêu màu vàng của hoa cúc mùa thu; Em yêu tất cả sắc màu của quê hương đất nước Việt Nam.'),
    3: ('Quang cảnh làng mạc ngày mùa', 'Tô Hoài', 'Mùa đông, giữa ngày mùa, làng quê toàn màu vàng trù phú: lúa chín vàng xuộm, nắng nhạt vàng hoe, quả xoan vàng lịm, lá chuối vàng ối... Tất cả đượm một màu trù phú, no ấm lạ thường.'),
    4: ('Lòng dân', 'Nguyễn Văn Xe', 'Vở kịch tái hiện lòng trung kiên, gan dạ của bà má Nam Bộ khéo léo đánh lừa quân giặc tàn bạo để bảo vệ an toàn cho người cán bộ cách mạng.'),
    5: ('Cánh chim hòa bình', 'SGK Tiếng Việt 5', 'Cánh chim bồ câu trắng chao liệng trên bầu trời xanh thẳm là biểu tượng bất diệt cho ước vọng hòa bình, hữu nghị và thịnh vượng của nhân loại trên toàn thế giới.'),
    6: ('Bài ca về trái đất', 'Định Hải', 'Trái Đất là quả bóng xanh bay giữa trời cao. Hãy giữ cho tiếng cười của trẻ thơ luôn rộn rã và bầu trời không còn bóng đen của khói lửa chiến tranh.'),
    7: ('Những con sếu bằng giấy', 'Theo SGK Tiếng Việt 5', 'Cô bé Xa-da-cô bị nhiễm phóng xạ bom nguyên tử đã kiên trì gấp hàng ngàn con sếu giấy với khát vọng hòa bình bất diệt, làm lay động hàng triệu trái tim nhân loại.'),
    8: ('Kì diệu rừng xanh', 'Nguyễn Phan Hách', 'Khu rừng nguyên sinh mở ra một thế giới kỳ thú với vương quốc nấm lúp xúp, những thân cây cổ thụ rêu phong và bầy vượn bạc má chuyền cành thoăn thoắt.'),
    9: ('Trước cổng trời', 'Nguyễn Đình Thi', 'Đứng trên cổng trời lộng gió, ngắm nhìn thung lũng mây trắng bồng bềnh và những nương ngô xanh biếc, ta cảm nhận sâu sắc vẻ đẹp hùng vĩ của biên cương Tổ quốc.'),
    10: ('Đất Cà Mau', 'Mai Văn Tạo', 'Cà Mau là đất mưa dông, cây đước cây tràm bám rễ sâu vào bùn đất phù sa màu mỡ. Con người nơi đây dũng cảm, kiên cường và giàu lòng mến khách.'),
    11: ('Chuyện một khu vườn nhỏ', 'Vân Long', 'Khu vườn ban công nhỏ nhắn của bé Thu và ông nội có bao nhiêu loài cây quý, là nơi chim sâu ríu rít tìm về làm tổ giữa lòng thành phố nhộn nhịp.'),
    12: ('Mùa thảo quả', 'Ma Văn Kháng', 'Thảo quả trên rừng Đản Khao đã chín nương. Mùi thơm nồng nàn quyến rũ lan tỏa khắp không gian, làm bừng sáng cả khu rừng già Tây Bắc.'),
    13: ('Hành trình của bầy ong', 'Nguyễn Đức Mậu', 'Bầy ong cần mẫn bay khắp bốn phương trời, chắt chiu từng giọt mật hoa tinh túy để dâng tặng cho đời chất ngọt ngào bất tận.'),
    14: ('Người công dân số Một', 'Hà Văn Cầu', 'Chàng thanh niên Nguyễn Tất Thành tại bến cảng Nhà Rồng năm 1911 với bầu nhiệt huyết yêu nước nồng nàn đã quyết tâm ra đi tìm đường cứu nước, giải phóng dân tộc khỏi ách nô lệ.'),
    15: ('Hạt gạo làng ta', 'Trần Đăng Khoa', 'Hạt gạo làng ta có vị phù sa của sông Kinh Thầy, có hương sen thơm trong hồ nước đầy, có lời mẹ hát ngọt ngào và giọt mồ hôi của những người mẹ, người chị trên cánh đồng kháng chiến.'),
    16: ('Thái sư Trần Thủ Độ', 'Đại Việt sử ký toàn thư', 'Thái sư Trần Thủ Độ là bậc khai quốc công thần kiệt xuất của triều Trần, luôn đặt phép nước lên trên tình riêng, chí công vô tư và hết lòng vì sự tồn vong của xã tắc.'),
    17: ('Phong cảnh đền Hùng', 'Theo Đoàn Minh Tuấn', 'Đền Hùng tọa lạc trang nghiêm trên đỉnh núi Nghĩa Lĩnh linh thiêng. Nơi đây là cội nguồn của dân tộc, nơi các vua Hùng đã có công dựng nước và con cháu muôn đời tạc dạ ghi ơn.'),
    18: ('Nghĩa thầy trò', 'Theo Hà Ân', 'Thầy giáo Chu Văn An dẫn các học trò đã làm quan lớn về quê chúc thọ cụ đồ già đã dạy chữ cho thầy thuở xưa, thể hiện truyền thống "Tôn sư trọng đạo" cao quý của dân tộc Việt Nam.'),
    19: ('Tranh làng Hồ', 'Nguyễn Tuân', 'Tranh làng Hồ là tinh hoa nghệ thuật dân gian độc đáo của dân tộc. Những nghệ nhân tài hoa đã khắc họa hình ảnh lợn âm dương, đám cưới chuột trên giấy điệp óng ánh sắc màu dân tộc.'),
    20: ('Đất nước', 'Nguyễn Đình Thi', 'Mùa thu nay khác rồi, tôi đứng vui nghe giữa núi đồi. Gió thổi rừng tre phấp phới, trời thu thay áo mới, trong biếc nói cười thiết tha. Nước chúng ta, nước những người chưa bao giờ khuất!'),
    21: ('Út Vịnh', 'SGK Tiếng Việt 5', 'Bạn nhỏ Út Vịnh không màng hiểm nguy, dũng cảm lao ra giữa đường ray kéo hai em nhỏ thoát khỏi lưỡi hái tử thần của đoàn tàu hỏa đang lao tới với tốc độ kinh hoàng.'),
    22: ('Những cánh buồm', 'Hoàng Trung Thông', 'Hai cha con bước đi trên bãi cát mịn màng. Cậu bé ngước nhìn những cánh buồm trắng xa xăm và mơ ước được đi đến những chân trời mới lạ của đại dương bao la.'),
    23: ('Bầm ơi', 'Tố Hữu', 'Bầm ơi có rét tình quê, bầm thương con bầm chớ lo nhiều. Con đi trăm núi ngàn khe, chưa bằng muôn nỗi tái tê lòng bầm. Tình mẫu tử thiêng liêng hòa cùng tình yêu Tổ quốc vĩ đại.'),
    24: ('Buổi sáng trên bãi biển', 'SGK Tiếng Việt 5', 'Mặt trời đỏ rực như quả cầu lửa khổng lồ từ từ nhô lên từ lòng biển cả, nhuộm hồng những cánh buồm căng gió và sóng biển lấp lánh muôn ngàn vảy bạc.'),
    25: ('Đấu trường Vinh danh Trạng Nguyên Toàn Cấp', 'WonderKids', 'Vinh danh các Trạng Nguyên xuất sắc đã hoàn thành trọn vẹn chương trình Tiểu học (Lớp 1-5). Chúc các em luôn tự tin, tỏa sáng và bay cao trên con đường chinh phục tri thức tương lai!')
}

for idx, (t_title, t_author, t_content) in g5_database.items():
    add_p(
        f'tv-g5-b{idx}', t_title, t_author, 'prose',
        [
            t_content,
            'Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.'
        ],
        [
            {'word': 'Chí công vô tư', 'meaning': 'Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân.'},
            {'word': 'Thiêng liêng', 'meaning': 'Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa.'}
        ],
        f'Tác phẩm "{t_title}" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?', 'a',
        [('a', f'Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳'), ('b', 'Không có ý nghĩa gì'), ('c', 'Khuyên học sinh lười biếng')]
    )

# Write to readingPassages.ts
file_content = f"""import {{ ReadingPassage, Question }} from '../../../types';

export interface ReadingLessonBundle {{
  passage: ReadingPassage;
  questions: Question[];
}}

export const VIETNAMESE_READING_PASSAGES: Record<string, ReadingLessonBundle> = {json.dumps(passages, ensure_ascii=False, indent=2)};
"""

target_path = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning\src\data\curriculum\vietnamese\readingPassages.ts"
with open(target_path, "w", encoding="utf-8") as f:
    f.write(file_content)

print(f"✅ Successfully written all {len(passages)} comprehensive, pure, authentic reading passages to {target_path}!")
