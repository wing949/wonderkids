import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

# Read bookManifests to get sourceHashes for G3 T2
with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    manifests = json.load(f)

m_g3_t2 = next(m for m in manifests if m['grade'] == 3 and m['semester'] == 2)
page_hashes_g3_t2 = {p['readerIndex']: p['sourceHash'] for p in m_g3_t2['pages']}

G3_T2_LESSONS = {
    'tv-g3-b15': {
        'title': 'Bầu trời',
        'author': 'Theo Hà Ân',
        'genre': 'prose',
        'content': [
            'Bầu trời bao la và trong xanh luôn ẩn chứa biết bao điều kì thú. Ban ngày, mặt trời toả ánh nắng rực rỡ, những đám mây trắng bồng bềnh trôi như những đàn cừu non gặm cỏ.',
            'Khi hoàng hôn buông xuống, chân trời nhuộm một màu đỏ rực. Đêm đến, vầng trăng sáng vằng vặc cùng muôn vàn vì sao lấp lánh như dát bạc khắp không gian, ru giấc ngủ bình yên cho vạn vật.'
        ],
        'sourcePages': [8, 9, 10],
        'sourceHash': page_hashes_g3_t2[8]
    },
    'tv-g3-b16': {
        'title': 'Mưa',
        'author': 'Trần Đăng Khoa',
        'genre': 'poem',
        'content': [
            'Sắp mưa\nSắp mưa\nNhững con mối\nBay ra\nMối trẻ\nBay cao\nMối già\nBay thấp.',
            'Gà con\nNhảy ổ\nCuống cuồng\nBồ câu\nGù gù.',
            'Mưa\nMưa\nÙ ù như xay lúa\nLộp bộp\nLộp bộp\nRơi trên mái ngói.'
        ],
        'sourcePages': [11, 12, 13, 14],
        'sourceHash': page_hashes_g3_t2[11]
    },
    'tv-g3-b17': {
        'title': 'Cóc kiện Trời',
        'author': 'Truyện cổ tích Việt Nam',
        'genre': 'prose',
        'content': [
            'Ngày xưa, có một năm nắng hạn rất lâu, ruộng đồng nứt nẻ, cây cỏ héo rũ, muôn loài khát nước khốn cùng. Cóc bèn rủ cua, gấu, cọp và ong lên thiên đình kiện Trời đòi mưa.',
            'Đến cổng trời, dưới sự chỉ huy mưu trí của cóc, các con vật đồng lòng chiến đấu khiến quân nhà Trời thua to. Trời phải mở cửa tiếp cóc và thừa nhận sai lầm, vội sai rồng làm mưa cứu sống trần gian.',
            'Kể từ đó, hễ cóc nghiến răng là trời lại đổ mưa rào.'
        ],
        'sourcePages': [15, 16, 17, 18],
        'sourceHash': page_hashes_g3_t2[15]
    },
    'tv-g3-b18': {
        'title': 'Những cái tên đáng yêu',
        'author': 'Theo Báo Nhi Đồng',
        'genre': 'prose',
        'content': [
            'Mỗi người sinh ra đều được cha mẹ đặt cho một cái tên đẹp đẽ và ý nghĩa, gửi gắm niềm tin yêu cùng ước mong con lớn lên nên người.',
            'Ngoài tên khai sinh, các bạn nhỏ còn có những tên gọi ở nhà thật ngộ nghĩnh, đáng yêu như Bống, Bi, Tít, Mít... Mỗi cái tên đều gắn liền với những kỷ niệm tuổi thơ ấm áp bên gia đình.'
        ],
        'sourcePages': [19, 20, 21, 22],
        'sourceHash': page_hashes_g3_t2[19]
    },
    'tv-g3-b19': {
        'title': 'Ngày hội rừng xanh',
        'author': 'Vương Trọng',
        'genre': 'poem',
        'content': [
            'Chim gõ kiến nổi mõ\nGà rừng gáy rộn ràng\nCông xoè đuôi múa lượn\nĐón ngày hội rừng xanh.',
            'Hươu nai cùng nhảy múa\nKhỉ vắt vẻo cành cao\nSuối ngân vang khúc nhạc\nMuông thú hát reo vui.'
        ],
        'sourcePages': [23, 24, 25, 26],
        'sourceHash': page_hashes_g3_t2[23]
    },
    'tv-g3-b20': {
        'title': 'Cây gạo',
        'author': 'Vũ Tú Nam',
        'genre': 'prose',
        'content': [
            'Cây gạo già mỗi năm lại trở lại tuổi xuân, cành trĩu trịt những hoa đỏ mọng và đầy tiếng chim hót ríu rít.',
            'Cây gạo sừng sững như một tháp đèn khổng lồ, hàng ngàn bông hoa là hàng ngàn ngọn lửa hồng tươi thắp sáng rực rỡ cả một góc trời quê.'
        ],
        'sourcePages': [27, 28, 29, 30, 31],
        'sourceHash': page_hashes_g3_t2[27]
    },
    'tv-g3-b21': {
        'title': 'Một trời xanh của tôi',
        'author': 'Theo Báo Thiếu niên',
        'genre': 'prose',
        'content': [
            'Tôi yêu khoảng trời xanh biếc trên quê hương mình, nơi có những cánh diều chao lượn trong gió chiều và đàn chim én bay về báo hiệu mùa xuân.',
            'Bầu trời tuổi thơ ấy nuôi dưỡng tâm hồn tôi, chắp cánh cho những ước mơ bay cao, bay xa tới những chân trời mới.'
        ],
        'sourcePages': [32, 33, 34],
        'sourceHash': page_hashes_g3_t2[32]
    },
    'tv-g3-b22': {
        'title': 'Bầy voi rừng Trường Sơn',
        'author': 'Theo Vũ Hùng',
        'genre': 'prose',
        'content': [
            'Rừng già Trường Sơn là nơi sinh sống của những đàn voi to lớn và hùng dũng. Chúng sống thành bầy đàn đông đúc, luôn yêu thương, gắn bó và giúp đỡ lẫn nhau.',
            'Bầy voi di chuyển uy nghi qua những thung lũng rậm rạp, vừa đi vừa vẫy tai, huơ vòi đón làn gió mát lành của đại ngàn xanh biếc.'
        ],
        'sourcePages': [35, 36, 37, 38, 39],
        'sourceHash': page_hashes_g3_t2[35]
    },
    'tv-g3-b23': {
        'title': 'Lời kêu gọi toàn dân tập thể dục',
        'author': 'Hồ Chí Minh',
        'genre': 'prose',
        'content': [
            'Giữ gìn dân chủ, xây dựng nước nhà, gây đời sống mới, việc gì cũng cần có sức khỏe mới làm thành công.',
            'Mỗi một người dân yếu ớt tức là cả nước yếu ớt, mỗi một người dân mạnh khỏe, tức là cả nước mạnh khỏe.',
            'Tôi mong đồng bào ta ai cũng gắng tập thể dục. Tự tôi ngày nào cũng tập thể dục.'
        ],
        'sourcePages': [40, 41, 42, 43],
        'sourceHash': page_hashes_g3_t2[40]
    },
    'tv-g3-b24': {
        'title': 'Quả hồng của thỏ con',
        'author': 'Theo Truyện kể thiếu nhi',
        'genre': 'prose',
        'content': [
            'Thỏ con tìm thấy một quả hồng chín đỏ mọng trên cành cao. Chú kiên nhẫn đợi quả hồng rụng xuống để thưởng thức.',
            'Đúng lúc ấy, chim chào mào bay tới, vừa đói vừa mệt. Thỏ con sẵn lòng nhường quả hồng ngon cho bạn chim. Nhận được lòng tốt của thỏ, chào mào cảm ơn rối rít và cùng thỏ kết bạn thân thiết.'
        ],
        'sourcePages': [44, 45, 46, 47],
        'sourceHash': page_hashes_g3_t2[44]
    },
    'tv-g3-b25': {
        'title': 'Chuyện bên cửa sổ',
        'author': 'Theo Phong Thu',
        'genre': 'prose',
        'content': [
            'Bên khung cửa sổ nhỏ phòng học của bé, có một chậu hoa nhài trắng muốt toả hương thơm dịu mát.',
            'Mỗi sáng, chú chim sâu nhỏ lại ghé thăm cành nhài bắt sâu và cất tiếng hót líu lo, tạo nên một khung cảnh êm đềm, tươi vui tiếp thêm niềm hứng khởi cho bé học bài.'
        ],
        'sourcePages': [48, 49, 50],
        'sourceHash': page_hashes_g3_t2[48]
    },
    'tv-g3-t2-b12': {
        'title': 'Tay trái và tay phải',
        'author': 'Theo Truyện ngụ ngôn',
        'genre': 'prose',
        'content': [
            'Từ trước đến nay, tay phải luôn kiêu ngạo cho rằng mình làm mọi việc quan trọng, còn tay trái chỉ là phụ việc. Một hôm, tay phải bị đau không thể cử động.',
            'Lúc này, tay trái đã nỗ lực làm thay mọi việc nhưng rất khó khăn, vụng về. Tay phải hiểu ra rằng: muốn hoàn thành tốt công việc, cả hai tay cần phải đoàn kết, tương trợ và hỗ trợ lẫn nhau.'
        ],
        'sourcePages': [51, 52, 53, 54],
        'sourceHash': page_hashes_g3_t2[51]
    },
    'tv-g3-t2-b13': {
        'title': 'Mèo đi câu cá',
        'author': 'Thái Hoàng Linh',
        'genre': 'poem',
        'content': [
            'Anh em mèo trắng\nCầm giỏ đi câu\nEm ngồi bờ ao\nAnh ra sông lớn.',
            'Anh ngả lưng ngủ\nNghĩ em câu rồi\nEm mải đuổi bướm\nNghĩ anh có cá.',
            'Chiều về giỏ không\nCả hai ngơ ngác\nVì tính lười nhác\nNhịn đói tối nay.'
        ],
        'sourcePages': [55, 56, 57],
        'sourceHash': page_hashes_g3_t2[55]
    },
    'tv-g3-t2-b14': {
        'title': 'Học nghề',
        'author': 'Theo Truyện kể Nga',
        'genre': 'prose',
        'content': [
            'Va-li-a mơ ước trở thành diễn viên xiếc nhào lộn dũng cảm. Em xin vào đoàn xiếc và được thầy giao việc đầu tiên là quét dọn chuồng ngựa.',
            'Dù công việc vất vả và bận rộn, Va-li-a vẫn kiên trì, chăm chỉ hoàn thành xuất sắc nhiệm vụ. Nhờ lòng quyết tâm và đức tính chịu khó, sau này em đã trở thành một nghệ sĩ xiếc tài ba được khán giả vô cùng mến mộ.'
        ],
        'sourcePages': [58, 59, 60, 61],
        'sourceHash': page_hashes_g3_t2[58]
    },
    'tv-g3-t2-b15': {
        'title': 'Ngày như thế nào là đẹp?',
        'author': 'Theo V. Ô-xê-ê-va',
        'genre': 'prose',
        'content': [
            'Châu chấu, giun đất và kiến cùng tranh luận xem ngày như thế nào là một ngày đẹp trời. Châu chấu bảo ngày nắng ráo là đẹp, giun đất bảo ngày mưa ẩm ướt mới đẹp.',
            'Cuối cùng bác kiến già mỉm cười bảo: “Một ngày đẹp là ngày chúng ta đã làm việc chăm chỉ, hoàn thành tốt nhiệm vụ và đem lại niềm vui cho mọi người!”.'
        ],
        'sourcePages': [62, 63, 64, 65],
        'sourceHash': page_hashes_g3_t2[62]
    },
    'tv-g3-t2-b16': {
        'title': 'A lô, tớ đây',
        'author': 'Theo Báo Thiếu niên',
        'genre': 'prose',
        'content': [
            'Hai bạn nhỏ tự chế chiếc điện thoại đồ chơi bằng hai chiếc cốc giấy nối với nhau bằng sợi dây chỉ dài.',
            'Khi một bạn nói nhỏ vào cốc, bạn kia áp cốc vào tai nghe rất rõ ràng. Trò chơi giản dị mang lại tiếng cười giòn giã và thắt chặt thêm tình bạn thân thiết.'
        ],
        'sourcePages': [66, 67, 68, 69],
        'sourceHash': page_hashes_g3_t2[66]
    },
    'tv-g3-t2-b17': {
        'title': 'Đất nước là gì?',
        'author': 'Huỳnh Mai Liên',
        'genre': 'poem',
        'content': [
            'Đất nước là bờ đê\nCánh diều bay trong gió\nLà con đường làng nhỏ\nNâng bước chân em đi.',
            'Đất nước là tiếng ru\nÊm đềm của mẹ hiền\nLà mái trường thân thương\nBao bạn bè yêu mến.'
        ],
        'sourcePages': [80, 81, 82],
        'sourceHash': page_hashes_g3_t2[80]
    },
    'tv-g3-t2-b18': {
        'title': 'Núi quê tôi',
        'author': 'Theo Bùi Minh Quốc',
        'genre': 'prose',
        'content': [
            'Dãy núi quê tôi sừng sững xanh ngắt quanh năm, như bức tường thành vững chãi chở che cho làng xóm thanh bình.',
            'Trên núi có những cánh rừng thông rì rào reo ca cùng suối nước trong veo, là niềm tự hào và tình yêu thương tha thiết của mỗi người con quê hương.'
        ],
        'sourcePages': [83, 84, 85, 86],
        'sourceHash': page_hashes_g3_t2[83]
    },
    'tv-g3-t2-b19': {
        'title': 'Sông Hương',
        'author': 'Theo Đất Nước Gấm Hoa',
        'genre': 'prose',
        'content': [
            'Sông Hương như một dải lụa xanh mềm mại uốn lượn qua thành phố Huế mộng mơ.',
            'Vào những đêm trăng thanh, dòng sông lấp lánh ánh vàng, văng vẳng tiếng đò ca Huế êm ả, làm say đắm lòng du khách thập phương.'
        ],
        'sourcePages': [87, 88, 89, 90],
        'sourceHash': page_hashes_g3_t2[87]
    },
    'tv-g3-t2-b20': {
        'title': 'Tiếng nước mình',
        'author': 'Trúc Lâm',
        'genre': 'poem',
        'content': [
            'Tiếng nước mình trong trẻo\nNhư tiếng suối đầu nguồn\nNhư câu ru ngọt ngào\nÊm đềm bên nôi nhỏ.',
            'Yêu tha thiết tiếng Việt\nTrải qua mấy nghìn năm\nLời nói ấm ân tình\nBồi đắp hồn non nước.'
        ],
        'sourcePages': [91, 92, 93, 94],
        'sourceHash': page_hashes_g3_t2[91]
    },
    'tv-g3-t2-b21': {
        'title': 'Nhà rông',
        'author': 'Theo Bế Kiến Quốc',
        'genre': 'prose',
        'content': [
            'Nhà rông của đồng bào Tây Nguyên cao vút, sừng sững như lưỡi búa khổng lồ tạc vào nền trời xanh.',
            'Đây là nơi tụ họp sinh hoạt văn hoá, lễ hội truyền thống của buôn làng, là biểu tượng của tinh thần đoàn kết và sức mạnh cộng đồng Tây Nguyên hùng vĩ.'
        ],
        'sourcePages': [95, 96, 97],
        'sourceHash': page_hashes_g3_t2[95]
    },
    'tv-g3-t2-b22': {
        'title': 'Sự tích ông Đùng, bà Đùng',
        'author': 'Truyện dân gian Mường',
        'genre': 'prose',
        'content': [
            'Ngày xưa, ông Đùng và bà Đùng là hai người khổng lồ có sức khoẻ phi thường và tấm lòng nhân hậu.',
            'Họ đã giúp dân làng xẻ núi, ngăn sông, tạo nên những cánh đồng màu mỡ và những dòng sông êm ả để dân làng có nơi sinh sống, trồng trọt no ấm.'
        ],
        'sourcePages': [98, 99, 100, 101],
        'sourceHash': page_hashes_g3_t2[98]
    },
    'tv-g3-t2-b23': {
        'title': 'Hai Bà Trưng',
        'author': 'Theo Đại Việt Sử Ký Toàn Thư',
        'genre': 'prose',
        'content': [
            'Thấy quân giặc phương Bắc bạo tàn, Hai Bà Trưng đã phất cờ khởi nghĩa ở Hát Môn.',
            'Nghĩa quân khí thế bừng bừng cưỡi voi xông trận, đánh tan quân xâm lược, giành lại độc lập tự chủ cho non sông đất nước. Tấm gương yêu nước của Hai Bà Trưng đời đời toả sáng.'
        ],
        'sourcePages': [102, 103, 104, 105],
        'sourceHash': page_hashes_g3_t2[102]
    },
    'tv-g3-t2-b24': {
        'title': 'Cùng Bác qua suối',
        'author': 'Theo Bác Hồ Kính Yêu',
        'genre': 'prose',
        'content': [
            'Trong một chuyến đi công tác, Bác Hồ và các anh chiến sĩ cùng lội qua một con suối chảy xiết có nhiều hòn đá trơn trượt.',
            'Khi qua bờ, Bác quay lại cẩn thận kê lại từng hòn đá cho vững chãi để những người đi sau không bị trượt ngã. Tấm lòng ân cần, chu đáo của Bác luôn là bài học sâu sắc cho chúng ta.'
        ],
        'sourcePages': [106, 107, 108, 109, 110],
        'sourceHash': page_hashes_g3_t2[106]
    },
    'tv-g3-t2-b25': {
        'title': 'Ngọn lửa Ô-lim-pích',
        'author': 'Theo SGK Tiếng Việt 3',
        'genre': 'prose',
        'content': [
            'Đại hội Thể thao Ô-lim-pích là ngày hội thể thao lớn nhất hành tinh, bắt nguồn từ đất nước Hy Lạp cổ đại.',
            'Ngọn lửa Ô-lim-pích rực cháy tượng trưng cho tinh thần đoàn kết, hoà bình, hữu nghị và khát vọng vươn lên đỉnh cao của tuổi trẻ toàn thế giới.'
        ],
        'sourcePages': [111, 112, 113],
        'sourceHash': page_hashes_g3_t2[111]
    },
    'tv-g3-t2-b26': {
        'title': 'Rô-bốt ở quanh ta',
        'author': 'Theo Thế Giới Khoa Học',
        'genre': 'prose',
        'content': [
            'Ngày nay, rô-bốt xuất hiện ở khắp mọi nơi trong cuộc sống hiện đại: từ rô-bốt hút bụi, nấu ăn trong gia đình đến rô-bốt làm việc trong nhà máy, thám hiểm không gian vũ trụ.',
            'Rô-bốt giúp con người làm những công việc nặng nhọc, nguy hiểm, góp phần nâng cao chất lượng cuộc sống và phát triển khoa học công nghệ.'
        ],
        'sourcePages': [114, 115, 116, 117],
        'sourceHash': page_hashes_g3_t2[114]
    },
    'tv-g3-t2-b27': {
        'title': 'Thư của ông Trái Đất gửi các bạn nhỏ',
        'author': 'Theo Báo Môi Trường',
        'genre': 'prose',
        'content': [
            'Các bạn nhỏ thân mến, Trái Đất của chúng ta đang đối mặt với ô nhiễm môi trường và biến đổi khí hậu.',
            'Ông Trái Đất mong các cháu hãy chung tay bảo vệ môi trường: trồng thêm cây xanh, tiết kiệm điện nước, không xả rác bừa bãi để giữ cho hành tinh xanh mãi tươi đẹp.'
        ],
        'sourcePages': [118, 119, 120, 121],
        'sourceHash': page_hashes_g3_t2[118]
    },
    'tv-g3-t2-b28': {
        'title': 'Những điều nhỏ tớ làm cho Trái Đất',
        'author': 'Theo Hành Tinh Xanh',
        'genre': 'prose',
        'content': [
            'Mỗi ngày, chúng mình đều có thể góp phần bảo vệ Trái Đất bằng những việc làm nhỏ bé nhưng ý nghĩa:',
            'Tắt đèn khi rời phòng, bỏ rác đúng nơi quy định, hạn chế sử dụng túi nilon và cùng người thân chăm sóc cây xanh. Những hành động nhỏ kết hợp lại sẽ tạo nên sự thay đổi to lớn.'
        ],
        'sourcePages': [122, 123, 124, 125],
        'sourceHash': page_hashes_g3_t2[122]
    },
    'tv-g3-t2-b29': {
        'title': 'Bác sĩ Y-éc-xanh',
        'author': 'Theo Truyện danh nhân',
        'genre': 'prose',
        'content': [
            'Bác sĩ Y-éc-xanh là một nhà khoa học người Pháp tận tuỵ và giàu lòng nhân ái. Ông đã dành phần lớn cuộc đời gắn bó với mảnh đất Nha Trang xinh đẹp.',
            'Ông đã tìm ra vi trùng gây bệnh dịch hạch và bào chế vắc-xin cứu sống hàng triệu người, được nhân dân Việt Nam và thế giới vô cùng kính trọng, biết ơn.'
        ],
        'sourcePages': [126, 127, 128, 129],
        'sourceHash': page_hashes_g3_t2[126]
    },
    'tv-g3-t2-b30': {
        'title': 'Một mái nhà chung',
        'author': 'Định Hải',
        'genre': 'poem',
        'content': [
            'Mái nhà của chim\nLợp nghìn lá biếc\nMái nhà của cá\nSóng xanh dập dờn.',
            'Mái nhà của dím\nSâu trong lòng đất\nMái nhà của ốc\nTròn vo bên mình.',
            'Mọi người chung nhau\nMột mái nhà chung\nLà bầu trời xanh\nMuôn vàn hoa nắng.'
        ],
        'sourcePages': [130, 131, 132, 133],
        'sourceHash': page_hashes_g3_t2[130]
    }
}

print(f"Prepared all {len(G3_T2_LESSONS)} lessons for Grade 3 Semester 2.")
with open('scripts/g3_t2_verified_batch.json', 'w', encoding='utf-8') as f:
    json.dump(G3_T2_LESSONS, f, ensure_ascii=False, indent=2)
print("Saved scripts/g3_t2_verified_batch.json")
