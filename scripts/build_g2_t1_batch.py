import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

# Read bookManifests to get sourceHashes
with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    manifests = json.load(f)

m_g2_t1 = next(m for m in manifests if m['grade'] == 2 and m['semester'] == 1)
page_hashes_g2_t1 = {p['readerIndex']: p['sourceHash'] for p in m_g2_t1['pages']}

G2_T1_LESSONS = {
    'tv-g2-t1-b19': {
        'title': 'Chữ A và những người bạn',
        'author': 'Theo Trần Hoài Dương',
        'genre': 'prose',
        'content': [
            'Tôi là chữ A. Từ lâu, tôi đã nổi tiếng. Hễ nhắc đến tên tôi, ai cũng biết. Khi vui sướng quá, người ta thường reo lên tên tôi. Khi ngạc nhiên, sửng sốt, người ta cũng gọi tên tôi.',
            'Tôi đứng đầu bảng chữ cái tiếng Việt. Trong bảng chữ cái của nhiều nước, tôi cũng được người ta trân trọng xếp ở đầu hàng. Hằng năm, cứ đến ngày khai trường, rất nhiều trẻ em làm quen với tôi trước tiên.',
            'Tôi luôn mơ ước chỉ mình tôi làm ra một cuốn sách. Nhưng rồi, tôi nhận ra rằng, nếu chỉ một mình, tôi chẳng thể nói được với ai điều gì. Một cuốn sách chỉ toàn chữ A không thể là cuốn sách mà mọi người muốn đọc. Để có cuốn sách hay, tôi cần các bạn B, C, D, Đ, E,...',
            'Chúng tôi luôn ở bên nhau và cần có nhau trên những trang sách.\nCác bạn nhỏ hãy gặp chúng tôi hằng ngày nhé!'
        ],
        'sourcePages': [86, 87, 88],
        'sourceHash': page_hashes_g2_t1[86]
    },
    'tv-g2-t1-b20': {
        'title': 'Nhím nâu kết bạn',
        'author': 'Theo Minh Anh',
        'genre': 'prose',
        'content': [
            'Trong khu rừng nọ, có chú nhím nâu hiền lành, nhút nhát. Một buổi sáng, chú đang kiếm quả cây thì thấy nhím trắng chạy tới. Nhím trắng vồn vã: “Chào bạn! Rất vui được gặp bạn!”. Nhím nâu lúng túng, nói lí nhí: “Chào bạn!”, rồi nấp vào bụi cây. Chú cuộn tròn người lại mà vẫn sợ hãi.',
            'Mùa đông đến, nhím nâu đi tìm nơi để trú ngụ. Bất chợt, mưa kéo đến. Nhím nâu vội bước vào cái hang nhỏ. Thì ra là nhà nhím trắng. Nhím nâu run run: “Xin lỗi, tôi không biết đây là nhà của bạn.”. Nhím trắng tươi cười: “Đừng ngại! Gặp lại bạn, tôi rất vui. Tôi ở đây một mình, buồn lắm. Bạn ở lại cùng tôi nhé!”.',
            '“Nhím trắng tốt bụng quá. Bạn ấy nói đúng, không có bạn bè thì thật buồn.”. Nghĩ thế, nhím nâu mạnh dạn hẳn lên. Chú nhận lời kết bạn với nhím trắng. Cả hai cùng thu dọn, trang trí chỗ ở cho đẹp. Chúng trải qua những ngày vui vẻ, ấm áp vì không phải sống một mình giữa mùa đông lạnh giá.'
        ],
        'sourcePages': [89, 90, 91, 92, 93],
        'sourceHash': page_hashes_g2_t1[89]
    },
    'tv-g2-t1-b21': {
        'title': 'Thả diều',
        'author': 'Trần Đăng Khoa',
        'genre': 'poem',
        'content': [
            'Cánh diều no gió\nSáo nó thổi vang\nSao trời trôi qua\nDiều thành trăng vàng.',
            'Cánh diều no gió\nTiếng nó trong ngần\nDiều hay chiếc thuyền\nTrôi trên sông Ngân.',
            'Cánh diều no gió\nTiếng nó chơi vơi\nDiều là hạt cau\nPhơi trên nong trời.',
            'Trời như cánh đồng\nXong mùa gặt hái\nDiều em – lưỡi liềm\nAi quên bỏ lại.',
            'Cánh diều no gió\nNhạc trời réo vang\nTiếng diều xanh lúa\nUốn cong tre làng.'
        ],
        'sourcePages': [94, 95, 96],
        'sourceHash': page_hashes_g2_t1[94]
    },
    'tv-g2-t1-b22': {
        'title': 'Tớ là lê-gô',
        'author': 'Bảo Châu',
        'genre': 'prose',
        'content': [
            'Tớ là lê-gô. Nhiều bạn gọi tớ là đồ chơi lắp ráp. Các bạn có nhận ra tớ không?',
            'Để tớ giới thiệu với các bạn về gia đình của tớ nhé. Tớ có rất nhiều anh chị em. Chúng tớ là những khối nhỏ đầy màu sắc. Hầu hết chúng tớ có hình viên gạch. Một số thành viên có hình nhân vật tí hon và các hình xinh xắn khác.',
            'Từ những mảnh ghép nhỏ bé, chúng tớ kết hợp với nhau để tạo ra cả một thế giới kì diệu. Các bạn có thể lắp ráp nhà cửa, xe cộ, người máy,... theo ý thích. Sau đó, các bạn tháo rời ra để ghép thành những vật khác.',
            'Chúng tớ giúp các bạn có trí tưởng tượng phong phú, khả năng sáng tạo và tính kiên nhẫn.\nNào, các bạn đã sẵn sàng chơi cùng chúng tớ chưa?'
        ],
        'sourcePages': [97, 98, 99, 100],
        'sourceHash': page_hashes_g2_t1[97]
    },
    'tv-g2-t1-b23': {
        'title': 'Rồng rắn lên mây',
        'author': 'Vũ Thanh tổng hợp',
        'genre': 'prose',
        'content': [
            'Rồng rắn lên mây là một trò chơi vui nhộn. Năm, sáu bạn túm áo nhau làm rồng rắn. Một bạn làm thầy thuốc, đứng đối diện với rồng rắn.\nRồng rắn vừa đi vòng vèo vừa hát:\nRồng rắn lên mây\nThấy cây núc nác\nHỏi thăm thầy thuốc\nCó nhà hay không?',
            'Nếu thầy nói “không” thì rồng rắn đi tiếp. Nếu thầy nói “có” thì rồng rắn hỏi xin thuốc cho con và đồng ý cho thầy bắt khúc đuôi.',
            'Thầy thuốc tìm cách bắt khúc đuôi. Bạn làm đầu dang tay cản thầy thuốc, bạn làm đuôi tìm cách tránh thầy. Nếu bạn khúc đuôi để thầy bắt được thì đổi vai làm thầy thuốc. Nếu bạn khúc giữa để đứt thì đổi vai làm đuôi. Trò chơi cứ thế tiếp tục.'
        ],
        'sourcePages': [101, 102, 103],
        'sourceHash': page_hashes_g2_t1[101]
    },
    'tv-g2-t1-b24': {
        'title': 'Nặn đồ chơi',
        'author': 'Nguyễn Ngọc Ký',
        'genre': 'poem',
        'content': [
            'Bên thềm gió mát,\nBé nặn đồ chơi.\nMèo nằm vẫy đuôi,\nTròn xoe đôi mắt.',
            'Đây là quả thị,\nĐây là quả na,\nQuả này phần mẹ,\nQuả này phần cha.',
            'Đây chiếc cối nhỏ\nBé nặn thật tròn,\nBiếu bà đấy nhé,\nGiã trầu thêm ngon.',
            'Đây là thằng chuột\nTặng riêng chú mèo,\nMèo ta thích chí\nVểnh râu “meo meo”!',
            'Ngoài hiên đã nắng,\nBé nặn xong rồi.\nĐừng sờ vào đấy,\nBé còn đang phơi.'
        ],
        'sourcePages': [104, 105, 106, 107],
        'sourceHash': page_hashes_g2_t1[104]
    },
    'tv-g2-t1-b25': {
        'title': 'Sự tích hoa tỉ muội',
        'author': 'Theo Trần Mạnh Hùng',
        'genre': 'prose',
        'content': [
            'Ngày xưa, có hai chị em Nết và Na mồ côi cha mẹ, sống trong ngôi nhà nhỏ bên sườn núi. Nết thương Na, cái gì cũng nhường em. Đêm đông, gió ù ù lùa vào nhà, Nết vòng tay ôm em:\n– Em rét không?\nNa ôm choàng lấy chị, cười rúc rích:\n– Ấm quá!\nNết ôm em chặt hơn, thầm thì:\n– Mẹ bảo chị em mình là hai bông hoa hồng, chị là bông to, em là bông nhỏ. Chị em mình mãi bên nhau nhé!\nNa gật đầu. Hai chị em cứ thế ôm nhau ngủ.',
            'Năm ấy, nước lũ dâng cao, Nết cõng em chạy theo dân làng đến nơi an toàn. Hai bàn chân Nết rớm máu. Thấy vậy, Bụt thương lắm. Bụt liền phẩy chiếc quạt thần. Kì lạ thay, bàn chân Nết bỗng lành hẳn. Nơi bàn chân Nết đi qua mọc lên những khóm hoa đỏ thắm. Hoa kết thành chùm, bông hoa lớn che chở cho nụ hoa bé nhỏ. Chúng cũng đẹp như tình chị em của Nết và Na.\nDân làng đặt tên cho loài hoa ấy là hoa tỉ muội.'
        ],
        'sourcePages': [109, 110, 111],
        'sourceHash': page_hashes_g2_t1[109]
    },
    'tv-g2-t1-b26': {
        'title': 'Em mang về yêu thương',
        'author': 'Minh Đăng',
        'genre': 'poem',
        'content': [
            'Mẹ, mẹ ơi em bé\nTừ đâu đến nhà ta\nNụ cười như tia nắng\nBàn tay như nụ hoa\nBước chân đi lẫm chẫm\nTiếng cười vang sân nhà?',
            'Hay bé từ sao xuống\nHay từ biển bước lên\nHay bé trong quả nhãn\nÔng trồng cạnh hàng hiên?',
            'Hay bé theo cơn gió\nNằm cuộn tròn trong mây\nRồi biến thành giọt nước\nRơi xuống nhà mình đây?',
            'Mỗi sáng em thức giấc\nLà như thể mây, hoa\nCùng nắng vàng biển rộng\nMang yêu thương vào nhà.'
        ],
        'sourcePages': [112, 113, 114, 115],
        'sourceHash': page_hashes_g2_t1[112]
    },
    'tv-g2-t1-b27': {
        'title': 'Mẹ',
        'author': 'Trần Quốc Minh',
        'genre': 'poem',
        'content': [
            'Lặng rồi cả tiếng con ve\nCon ve cũng mệt vì hè nắng oi.\nNhà em vẫn tiếng ạ ơi\nKẽo cà tiếng võng mẹ ngồi mẹ ru.\nLời ru có gió mùa thu\nBàn tay mẹ quạt mẹ đưa gió về.',
            'Những ngôi sao thức ngoài kia\nChẳng bằng mẹ đã thức vì chúng con.\nĐêm nay con ngủ giấc tròn\nMẹ là ngọn gió của con suốt đời.'
        ],
        'sourcePages': [116, 117, 118],
        'sourceHash': page_hashes_g2_t1[116]
    },
    'tv-g2-t1-b28': {
        'title': 'Trò chơi của bố',
        'author': 'Theo Phong Thu',
        'genre': 'prose',
        'content': [
            'Bố luôn dành cho Hường những điều ngạc nhiên. Lúc rảnh rỗi, hai bố con ngồi chơi với nhau như đôi bạn cùng tuổi.\nCó lần, hai bố con chơi trò chơi “ăn cỗ”. Hường đưa cái bát nhựa cho bố:\n– Mời bác xơi!\nBố đỡ bằng hai tay hẳn hoi và nói:\n– Xin bác. Mời bác xơi!\n– Bác xơi nữa không ạ?\n– Cảm ơn bác! Tôi đủ rồi.',
            'Hai bố con cùng phá lên cười. Lát sau, hai bố con đổi cho nhau. Bố hỏi:\n– Bác xơi gì ạ?\n– Dạ, xin bác bát miến ạ.\n– Đây, mời bác.\nHường đưa tay ra cầm lấy cái bát nhựa. Bố bảo:\n– Ấy, bác phải đỡ bằng hai tay. Tôi đưa cho bác bằng hai tay cơ mà!',
            'Năm nay, bố đi công tác xa. Đến bữa ăn, nhìn hai bàn tay của Hường lễ phép đón bát cơm, mẹ lại nhớ đến lúc hai bố con chơi với nhau. Mẹ nghĩ, Hường không biết rằng ngay trong trò chơi ấy, bố đã dạy con một nết ngoan.'
        ],
        'sourcePages': [119, 120, 121, 122],
        'sourceHash': page_hashes_g2_t1[119]
    },
    'tv-g2-t1-b29': {
        'title': 'Cánh cửa nhớ bà',
        'author': 'Đoàn Thị Lam Luyến',
        'genre': 'poem',
        'content': [
            'Ngày cháu còn thấp bé\nCánh cửa có hai then\nCháu chỉ cài then dưới\nNhờ bà cài then trên.',
            'Mỗi năm cháu lớn lên\nBà lưng còng cắm cúi\nCháu cài được then trên\nBà chỉ cài then dưới...',
            'Nay cháu về nhà mới\nBao cánh cửa – ô trời\nMỗi lần tay đẩy cửa\nLại nhớ bà khôn nguôi.'
        ],
        'sourcePages': [123, 124, 125],
        'sourceHash': page_hashes_g2_t1[123]
    },
    'tv-g2-t1-b30': {
        'title': 'Thương ông',
        'author': 'Tú Mỡ',
        'genre': 'poem',
        'content': [
            'Ông bị đau chân\nNó sưng nó tấy,\nĐi phải chống gậy\nKhập khiễng, khập khà,\nBước lên thềm nhà\nNhấc chân quá khó.\nThấy ông nhăn nhó,\nViệt chơi ngoài sân\nLon ton lại gần,\nÂu yếm, nhanh nhảu:\n– Ông vịn vai cháu,\nCháu đỡ ông lên.',
            'Ông bước lên thềm\nTrong lòng sung sướng,\nQuẳng gậy, cúi xuống\nQuên cả đớn đau,\nÔm cháu xoa đầu:\n– Hoan hô thằng bé!\nBé thế mà khoẻ\nVì nó thương ông.'
        ],
        'sourcePages': [126, 127, 128, 129],
        'sourceHash': page_hashes_g2_t1[126]
    },
    'tv-g2-t1-b31': {
        'title': 'Ánh sáng của yêu thương',
        'author': 'Theo Chuyện kể mẫu giáo, NXB Giáo dục, 1979',
        'genre': 'prose',
        'content': [
            'Hôm ấy, bố vắng nhà, mẹ bị đau bụng dữ dội. Ê-đi-xơn liền chạy đi mời bác sĩ.\nBác sĩ đến khám bệnh và cho biết mẹ của Ê-đi-xơn đau ruột thừa, phải mổ gấp. Nhưng trời cứ tối dần, với ánh đèn dầu tù mù, chẳng thể làm gì được. Ê-đi-xơn lo lắng. Thấy mẹ đau đớn, cậu mếu máo: “Xin bác sĩ cứu mẹ cháu!”. Bác sĩ ái ngại nói: “Đủ ánh sáng, bác mới mổ được cháu ạ!”.',
            'Thương mẹ, Ê-đi-xơn ôm đầu suy nghĩ. Làm thế nào để cứu mẹ bây giờ? Đột nhiên, cậu trông thấy ánh sáng của ngọn đèn hắt lại từ mảnh sắt tây trên tủ. Nét mặt cậu rạng rỡ hẳn lên. Ê-đi-xơn vội chạy sang nhà hàng xóm, mượn về một tấm gương. Lát sau, đèn nến trong nhà được cậu thắp lên và đặt trước gương. Căn phòng bỗng ngập tràn ánh sáng.',
            'Nhìn căn phòng sáng trưng, bác sĩ rất ngạc nhiên, bắt tay ngay vào việc. Ca mổ thành công, mẹ của Ê-đi-xơn đã được cứu sống.'
        ],
        'sourcePages': [130, 131, 132],
        'sourceHash': page_hashes_g2_t1[130]
    },
    'tv-g2-t1-b32': {
        'title': 'Chơi chong chóng',
        'author': 'Theo Tuệ Nhi',
        'genre': 'prose',
        'content': [
            'An yêu thích những chiếc chong chóng giấy. Mỗi chiếc chong chóng chỉ có một cái cán nhỏ và dài, một đầu gắn bốn cánh giấy mỏng, xinh như một bông hoa. Nhưng mỗi lần quay, nó mang lại bao nhiêu là tiếng cười và sự háo hức. An thích chạy thật nhanh để những cánh giấy không ngừng quay trong gió. Gió lướt qua cánh chong chóng tạo ra tiếng u u rất lạ.',
            'An thường rủ bé Mai chơi chong chóng và thi xem ai thắng. Hai anh em chạy quanh sân cho chong chóng quay, rồi đột ngột dừng lại. Chong chóng của ai dừng quay trước thì người đó thua. An chạy nhanh hơn nên chong chóng quay lâu hơn. Thua mãi, Mai buồn thiu. An liền cho em giơ chong chóng ra trước quạt máy, còn mình thì phùng má thổi phù phù cho chong chóng quay. Mai cười toe vì thắng. Bây giờ, cũng giống như anh, Mai cũng rất mê những chiếc chong chóng.'
        ],
        'sourcePages': [133, 134, 135, 136],
        'sourceHash': page_hashes_g2_t1[133]
    }
}

print(f"Prepared {len(G2_T1_LESSONS)} verified lessons for Grade 2 Semester 1.")
with open('scripts/g2_t1_verified_batch.json', 'w', encoding='utf-8') as f:
    json.dump(G2_T1_LESSONS, f, ensure_ascii=False, indent=2)
print("Saved scripts/g2_t1_verified_batch.json")
