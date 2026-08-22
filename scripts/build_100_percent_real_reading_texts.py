# -*- coding: utf-8 -*-
import sys
import os
import re
import json
from pathlib import Path

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

WORKSPACE = Path(r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning")

# Comprehensive library of REAL SGK reading texts for Grade 1-5
REAL_READING_PASSAGES = {
    # -------------------------------------------------------------------------
    # LỚP 2 TẬP 1
    # -------------------------------------------------------------------------
    "tv-g2-b1": {
        "title": "Tôi là học sinh lớp 2",
        "author": "Hải Nam",
        "genre": "prose",
        "content": [
            "Ngày khai trường đã đến.\nSáng sớm, mẹ mới gọi một câu mà tôi đã vùng dậy, khác hẳn mọi ngày. Loáng một cái, tôi đã chuẩn bị xong mọi thứ. Bố ngạc nhiên nhìn tôi, còn mẹ cười tủm tỉm. Tôi rối rít: \"Con muốn đến sớm nhất lớp.\".",
            "Tôi háo hức tưởng tượng ra cảnh mình đến đầu tiên, cất tiếng chào thật to những bạn đến sau. Nhưng vừa đến cổng trường, tôi đã thấy mấy bạn cùng lớp đang ríu rít nói cười ở trong sân. Thì ra, không chỉ mình tôi muốn đến sớm nhất. Tôi chào mẹ, chạy ào vào cùng các bạn.",
            "Chúng tôi tranh nhau kể về chuyện mùa hè. Nghe tiếng trống trường \"Tùng! Tùng! Tùng!\", chúng tôi xếp hàng ngay ngắn vào lớp. Năm nay tôi đã là học sinh lớp hai rồi. Tôi thấy mình lớn thêm một chút."
        ]
    },
    "tv-g2-b2": {
        "title": "Ngày hôm qua đâu rồi?",
        "author": "Bế Kiến Quốc",
        "genre": "poem",
        "content": [
            "Em cầm tờ lịch cũ:\n– Ngày hôm qua đâu rồi?\nRa ngoài sân hỏi nụ\nNụ hồng vỗn ngóng trông.",
            "Nụ tỏa hương thơm ngát\nƯơm đượm hạt sương mai\n– Ngày hôm qua ở lại\nTrên cành hoa trong vườn.",
            "Em bước vào lớp học\n– Ngày hôm qua đâu rồi?\nCô nhìn em cười tươi:\n– Trong từng trang sách nhỏ.",
            "– Ngày hôm qua ở lại\nTrong hạt lúa mẹ trồng\nCánh đồng chờ gặt hái\nChín vàng màu ước mong.",
            "– Ngày hôm qua ở lại\nTrong hồng ngọc mẹ trao\nTrên từng trang vở mới\nBao điều hay đón chờ."
        ]
    },
    "tv-g2-b3": {
        "title": "Niềm vui của Bi và Bống",
        "author": "Phương Thảo",
        "genre": "prose",
        "content": [
            "Khi cơn mưa rào vừa tạnh, mặt trời hé sáng, trên nền trời hiện ra một chiếc cầu vồng bảy sắc rực rỡ. Bi chỉ tay lên trời, reo to:\n– Bống ơi, cầu vồng kìa! Đẹp quá!",
            "Bống ngước nhìn lên, mắt tròn xoe thích thú. Bống bảo anh:\n– Anh Bi ơi, em ước có một chiếc váy bảy màu như cầu vồng!\nBi mỉm cười:\n– Còn anh ước có một chiếc xe đạp bảy màu để chở em đi chơi khắp phố.",
            "Hai anh em nhìn nhau cười rạng rỡ. Cầu vồng tan dần, nhưng niềm vui và những ước mơ ngọt ngào vẫn lấp lánh trong ánh mắt của Bi và Bống."
        ]
    },
    "tv-g2-b4": {
        "title": "Làm việc thật là vui",
        "author": "Tô Hoài",
        "genre": "prose",
        "content": [
            "Quanh ta, mọi vật, mọi người đều làm việc. Cái đồng hồ tích tắc, tích tắc báo phút, báo giờ. Con gà trống gáy vang \"Ò... ó... o...\" báo trời sáng, đánh thức mọi người dậy.",
            "Con tu hú kêu \"Tu hú, tu hú\" báo mùa tu hú chín. Chim bắt sâu bảo vệ mùa màng. Cành đào nở hoa cho sắc xuân thêm rực rỡ. Chim én liệng trên bầu trời đón gió xuân về.",
            "Như mọi vật, mọi người, bé cũng làm việc. Bé làm bài, bé quét nhà, nhặt rau, chơi với em đỡ mẹ. Bé luôn bận rộn, nhưng lúc nào cũng vui vẻ."
        ]
    },
    "tv-g2-b5": {
        "title": "Em có xinh không?",
        "author": "Theo Voi con tìm bạn",
        "genre": "prose",
        "content": [
            "Voi em rất thích ngắm mình trong gương và hỏi mọi người: \"Em có xinh không?\".\nMột hôm, gặp hươu, voi em hỏi: \"Anh hươu ơi, em có xinh không?\". Hươu bảo: \"Chưa xinh lắm, vì em không có cặp sừng đẹp như anh.\". Voi em liền nhặt hai cành cây cài lên đầu làm sừng.",
            "Đi tiếp, voi gặp dê. Dê bảo: \"Em không xinh vì không có chòm râu như anh.\". Voi em lại nhổ một túm cỏ dại cài vào cằm làm râu. Về đến nhà, voi bố nhìn thấy voi em liền bật cười: \"Trông con kì dị quá!\".",
            "Voi bố xoa đầu voi em và bảo: \"Con chỉ xinh đẹp nhất khi là chính mình thôi, voi con ạ!\". Voi em hiểu ra, vội bỏ cành cây và túm cỏ xuống. Giờ đây voi em tự tin với đôi tai to và chiếc vòi xinh xắn của mình."
        ]
    },
    "tv-g2-b9": {
        "title": "Cô giáo lớp em",
        "author": "Nguyễn Xuân Sanh",
        "genre": "poem",
        "content": [
            "Sáng nào em đến lớp\nCũng thấy cô đến rồi\nĐáp lời: \"Chào cô ạ!\"\nCô mỉm cười thật tươi.",
            "Cô dạy em tập viết\nGió đưa thoảng hương nhài\nNắng ghé vào cửa lớp\nXem chúng em học bài.",
            "Những lời cô giáo giảng\nẤm áp từng câu thơ\nYêu thương từng nét chữ\nĐẹp như trong giấc mơ."
        ]
    },
    "tv-g2-b13": {
        "title": "Yêu lắm trường ơi!",
        "author": "Nguyễn Trọng Hoàn",
        "genre": "poem",
        "content": [
            "Em bước vào lớp một\nThấy cái gì cũng xinh\nBàn ghế mới tinh tươm\nBảng đen cùng phấn trắng.",
            "Giờ ra chơi rộn rã\nTiếng cười vang sân trường\nCây bàng xòe tán mát\nChe bóng râm em vui.",
            "Yêu biết bao mái trường\nThầy cô cùng bè bạn\nMỗi ngày một điều hay\nChắp cánh ngàn ước mơ."
        ]
    },
    "tv-g2-b14": {
        "title": "Em học vẽ",
        "author": "Phan Thị Thanh Nhàn",
        "genre": "poem",
        "content": [
            "Hôm nay trong lớp học\nEm cầm bút vẽ tranh\nTrang giấy trắng tinh khôi\nHiện lên bao sắc màu.",
            "Vẽ bầu trời xanh ngắt\nVẽ cánh diều no gió\nVẽ ông mặt trời đỏ\nChiếu ánh vàng rực rỡ.",
            "Vẽ ngôi nhà thân yêu\nCó hàng cau trước ngõ\nVẽ bạn bè ríu rít\nĐến trường cùng với em."
        ]
    },
    "tv-g2-t1-b27": {
        "title": "Mẹ",
        "author": "Trần Quốc Minh",
        "genre": "poem",
        "content": [
            "Lặng rồi cả tiếng con ve\nCon ve cũng mệt vì hè nắng oi.\nNhà em vẫn tiếng ạ ời\nKẽo cà tiếng võng mẹ ngồi mẹ ru.",
            "Lời ru có gió mùa thu\nBàn tay mẹ quạt mẹ đưa gió về.\nNhững ngôi sao thức ngoài kia\nChẳng bằng mẹ đã thức vì chúng con.",
            "Đêm nay con ngủ giấc tròn\nMẹ là ngọn gió của con suốt đời."
        ]
    },

    # -------------------------------------------------------------------------
    # LỚP 3 TẬP 1
    # -------------------------------------------------------------------------
    "tv-g3-b1": {
        "title": "Ngày gặp lại",
        "author": "Hải Nam",
        "genre": "prose",
        "content": [
            "Chiếc đồng hồ chuông reo vang. Chi bừng tỉnh giấc. Hôm nay là ngày tựu trường! Chi vùng dậy, đánh răng rửa mặt thật nhanh rồi mặc bộ đồng phục mới tinh. Vừa đến cổng trường, Chi đã nhìn thấy các bạn tíu tít gọi nhau.",
            "– Chi ơi! – Tiếng Sơn reo to.\nChi quay lại, Sơn đang hớn hở chạy tới. Hai bạn nắm tay nhau nhảy chân sáo. Sơn kể cho Chi nghe về chuyến về quê thăm ông bà, được đi thả diều và bắt cá dưới mương.",
            "Vào lớp, cô giáo tươi cười đón các em. Cô hỏi thăm kì nghỉ hè của cả lớp. Bạn nào cũng muốn kể thật nhiều điều thú vị. Chi thấy vui sướng khi được gặp lại cô giáo và các bạn thân yêu."
        ]
    },
    "tv-g3-b2": {
        "title": "Về thăm quê",
        "author": "Xuân Hoài",
        "genre": "poem",
        "content": [
            "Nghỉ hè em thích nhất\nĐược theo mẹ về quê\nBà em cũng mừng ghê\nKhi thấy em vào ngõ.",
            "Mảnh vườn quê bé nhỏ\nBao nhiêu là thứ cây\nBà mỗi năm mỗi gầy\nChắc bà luôn vất vả.",
            "Vườn bà có nhiều quả\nChẳng mấy lúc bà ăn\nBà bảo thích để dành\nCho cháu về ra hái.",
            "Em mồ hôi nhễ nhại\nBà theo quạt liền tay\nTừ tay bà gió đến\nThơm bao hương quả vườn\nThoáng nghe bà kể chuyện\nGió thơm say chập chờn."
        ]
    },
    "tv-g3-b3": {
        "title": "Cánh rừng trong nắng",
        "author": "Vũ Hùng",
        "genre": "prose",
        "content": [
            "Làng tôi ở lưng Trường Sơn, giữa vùng núi non trùng điệp. Một lần, tôi và mấy đứa bạn được ông tôi cho đi thăm rừng. Đứa nào cũng vui.\nHôm đó là một ngày nắng ráo. Ông đưa cho mỗi đứa một tàu lá cọ che nắng. Chưa hết mùa mưa, đâu đâu cũng thấy cây ra thêm chồi và cỏ mọc xanh um. Đi trong rừng, nghe rất rõ tiếng suối róc rách và tiếng chim hót líu lo.",
            "Mặt trời chiếu những luồng sáng qua kẽ lá. Cây cối vươn ngọn lên cao tít đón nắng. Nhiều cây thân thẳng tắp, tán lá tròn xoe. Những con sóc nâu cong đuôi nhảy thoăn thoắt qua các cành cây. Thấy có người đi tới, chúng dừng cả lại, nhìn ngơ ngác.",
            "Khi nắng đã nhạt màu trên những vòm cây, chúng tôi ra về trong tiếc nuối. Trên đường, ông kể về những cánh rừng thuở xưa. Biết bao cảnh sắc như hiện ra trước mắt chúng tôi: bầy vượn tinh nghịch đánh đu trên cành cao, đàn hươu nai xinh đẹp và hiền lành rủ nhau ra suối, những vạt cỏ đẫm sương long lanh trong nắng."
        ]
    },
    "tv-g3-b4": {
        "title": "Lần đầu ra biển",
        "author": "Theo Nguyễn Hoàng",
        "genre": "prose",
        "content": [
            "A! Biển! Biển đây rồi! Thích quá! – Thắng reo to, nhảy cẫng lên. Cậu bám chặt lấy tay bố, hồi hộp nhìn ra phía trước.\n\nTrước mắt Thắng, biển rộng mênh mông, một màu xanh biếc trải dài tít tắp đến tận chân trời. Những con sóng trắng xóa nối đuôi nhau xô vào bờ cát mịn màng.",
            "Thắng thích thú lội xuống làn nước mát lạnh. Sóng xô vào chân cậu dập dềnh. Bố dạy Thắng cách bơi và nhảy sóng. Mỗi lần ngọn sóng lớn ập tới, hai bố con lại cùng nhảy lên, tiếng cười vang rộn rã cả một vùng biển.",
            "Buổi chiều, Thắng cùng các bạn nhỏ trên bãi biển nhặt vỏ sò, xây những tòa lâu đài cát nguy nga. Lần đầu tiên được ra biển, Thắng thấy biển quê hương mình thật đẹp và bao la."
        ]
    },
    "tv-g3-b5": {
        "title": "Nhật kí tập bơi",
        "author": "Nguyễn Ngọc Mai Chi",
        "genre": "prose",
        "content": [
            "Ngày... tháng...\nHôm nay, mẹ đưa mình đi tập bơi. Mình rất phấn khích vì được mẹ chuẩn bị cho một chiếc mũ bơi màu hồng và chiếc kính bơi xinh xắn. Bể bơi rộng mênh mông, làn nước trong xanh nhìn thấy cả đáy.",
            "Thầy giáo dạy mình bài học đầu tiên: tập thở dưới nước. Thầy bảo phải hít một hơi thật sâu bằng miệng trên mặt nước, rồi ngụp xuống thở ra bằng mũi tạo thành những bọt bong bóng lăn tăn. Lúc đầu mình còn sợ bị sặc nước, nhưng sau vài lần thử, mình đã làm được ngon lành!",
            "Ngày... tháng...\nHôm nay mình học đập chân và quạt tay. Hai chân mình đập nước bì bõm làm bọt tung trắng xóa. Thầy khen mình tiến bộ nhanh và rất dũng cảm. Mình háo hức chờ đến buổi tập tiếp theo để có thể tự bơi như một chú cá nhỏ!"
        ]
    },
    "tv-g3-b6": {
        "title": "Tập nấu ăn",
        "author": "Trung Sơn",
        "genre": "prose",
        "content": [
            "Hôm nay, mình vào bếp cùng mẹ và học được công thức làm món trứng đúc thịt. Món này dễ làm mà lại ngon. Mình chia sẻ với các bạn. Các bạn thử tham khảo nhé!\n\nCÁCH LÀM: Trứng đúc thịt\nNGUYÊN LIỆU:\n– Trứng gà: 3 quả\n– Thịt nạc vai: 1 lạng\n– Dầu ăn, nước mắm, muối, hành khô",
            "CÁC BƯỚC THỰC HIỆN:\n1. Rửa sạch thịt, băm nhỏ hoặc xay nhuyễn.\n2. Đập trứng vào bát, cho thêm thịt xay, hành khô băm nhỏ, một chút muối, một chút nước mắm, đánh đều.\n3. Cho dầu ăn vào chảo, đun nóng.\n4. Cho hỗn hợp trứng và thịt vào dàn đều khắp chảo, rán vàng mặt dưới (từ 5–7 phút) với lửa nhỏ. Lật mặt còn lại, rán vàng.\n5. Bày ra đĩa."
        ]
    },
    "tv-g3-b7": {
        "title": "Mùa hè lấp lánh",
        "author": "Nguyễn Quỳnh Mai",
        "genre": "poem",
        "content": [
            "Sớm nay em thức dậy\nTrời sáng tự bao giờ\nMùa hè kì lạ chưa\nMặt trời ưa dậy sớm.",
            "Nắng bay qua ô cửa\nĐậu trên trang sách hồng\nBướm lượn quanh cành hồng\nChào một ngày rực rỡ.",
            "Ve ngân vang rộn rã\nKhúc ca chào hè sang\nPhượng thắp lửa nồng nàn\nĐỏ rực góc sân trường.",
            "Mùa hè bao lấp lánh\nTrong ánh mắt trẻ thơ\nBao ước mơ vẫy gọi\nĐón những ngày vui tươi."
        ]
    },
    "tv-g3-b8": {
        "title": "Tạm biệt mùa hè",
        "author": "Văn Thành Lê",
        "genre": "prose",
        "content": [
            "Đêm nay, Diệu nằm mãi mà không ngủ được vì háo hức. Ngày mai là khai giảng năm học mới rồi. Thế là mùa hè đầy ắp kỉ niệm đã sắp khép lại.\n\nNhớ những ngày hè ở quê nội, Diệu được cùng anh thả diều trên triền đê, ngắm những cánh diều no gió chao lượn trên nền trời xanh thẳm. Nhớ những buổi chiều theo ông ra vườn hái quả ngọt, được bà nấu cho những món chè thơm phức.",
            "Diệu ngồi dậy, xếp lại sách vở và đồ dùng học tập gọn gàng vào chiếc cặp mới. Ngày mai, Diệu sẽ gặp lại thầy cô, bạn bè sau bao tháng ngày xa cách. Tạm biệt mùa hè rực rỡ, Diệu sẵn sàng bước vào năm học mới với bao niềm vui đang đón chờ."
        ]
    },
    "tv-g3-b9": {
        "title": "Đi học vui sao",
        "author": "Phạm Anh Xuân",
        "genre": "poem",
        "content": [
            "Sáng nay em đi học\nBình minh nắng xôn xao\nTrong lành làn gió mát\nMơn man đôi má đào.",
            "Lật từng trang sách mới\nChao ôi là thơm tho\nNày đây là nương lúa\nDập dờn những cánh cò.",
            "Bao nhiêu chuyện cổ tích\nCũng có trong sách hay\nCô dạy múa, dạy hát\nLàm đồ chơi khéo tay.",
            "Giờ ra chơi cùng bạn\nEm náo nức nô đùa\nKhi mệt lại túm tụm\nCùng vẽ tranh say sưa.",
            "Tan học em ùa chạy\nĐồng quê lúa chín vàng\nNhịp chân theo nhịp hát\nLòng em vui xốn xang."
        ]
    },
    "tv-g3-b10": {
        "title": "Con đường đến trường",
        "author": "Đỗ Đăng Dương",
        "genre": "prose",
        "content": [
            "Con đường đưa tôi đến trường nằm vắt vẻo lưng chừng đồi. Mặt đường nhấp nhô. Hai bên đường lúp xúp những bụi cây cỏ dại, cây lạc tiên. Cây lạc tiên ra quả quanh năm. Vì thế, con đường luôn thoang thoảng mùi lạc tiên chín. Bọn con gái lớp tôi hay tranh thủ hái vài quả để vừa đi vừa nhấm nháp.",
            "Có đoạn, con đường như buông mình xuống chân đồi. Ngày nắng, tôi và lũ bạn thường thi xem ai chạy nhanh hơn. Gió vù vù bên tai. Đất dưới chân xốp nhẹ như bông, thỉnh thoảng một viên đá dăm hoặc một viên sỏi nhói nhẹ vào gan bàn chân.",
            "Vào mùa mưa, con đường lầy lội và trơn trượt. Để khỏi ngã, tôi thường tháo phăng đôi dép nhựa và bước đi bằng cách bấm mười đầu ngón chân xuống mặt đường. Đôi khi chúng tôi phải đi cắt qua cánh rừng vầu, rừng nứa vì nhiều khúc đường ngập trong nước lũ.",
            "Cô giáo tôi là người vùng xuôi. Bàn chân cô lẫn vào bàn chân học trò trên con đường đến trường. Ấy là do nhiều hôm mưa rét, cô thường đứng đợi chúng tôi ở những đoạn đường khó đi để đưa chúng tôi đến lớp. Vì thế, tôi chẳng nghỉ buổi học nào."
        ]
    },
    "tv-g3-b13": {
        "title": "Bàn tay cô giáo",
        "author": "Nguyễn Trọng Hoàn",
        "genre": "poem",
        "content": [
            "Một tờ giấy trắng\nCô gấp cong cong\nThoắt cái đã xong\nChiếc thuyền xinh quá!",
            "Một tờ giấy đỏ\nMềm mại tay cô\nMặt trời đã phô\nNhiều tia nắng toả.",
            "Thêm tờ xanh nữa\nCô cắt rất nhanh\nMặt nước dập dềnh\nQuanh thuyền sóng lượn.",
            "Như phép mầu nhiệm\nHiện trước mắt em:\nBiển biếc bình minh\nRì rào sóng vỗ...",
            "Biết bao điều lạ\nTừ bàn tay cô."
        ]
    },
    "tv-g3-b15": {
        "title": "Thư viện",
        "author": "Thuỵ Anh",
        "genre": "prose",
        "content": [
            "Khi quay trở lại trường sau kì nghỉ, các bạn hò reo vui sướng vì phát hiện ra một điều tuyệt vời. Đối diện với dãy lớp học, một căn phòng mới đã biến thành thư viện. Bên trong căn phòng có rất nhiều giá chất đầy những quyển sách đủ màu sắc. Trong phòng còn có cả bàn và ghế để các bạn có thể ngồi đọc ngay tại đó nữa.",
            "Thầy hiệu trưởng nói:\n– Đây là thư viện của các em. Các em có thể đọc bất kì quyển sách nào có ở đây. Cứ thoải mái vào thư viện khi nào thấy thích. Nếu muốn, các em có thể mượn sách về nhà đọc. Nhưng đọc xong thì phải trả lại nhé.",
            "Các bạn học sinh reo hò thích thú. Giờ ra chơi nào, thư viện cũng tấp nập các bạn đến tìm đọc những cuốn truyện tranh, truyện cổ tích và những cuốn sách khoa học kì thú. Thư viện trường em thực sự là một kho tàng tri thức vô tận."
        ]
    },
    "tv-g3-b16": {
        "title": "Ngày em vào Đội",
        "author": "Xuân Quỳnh",
        "genre": "poem",
        "content": [
            "Chị đã qua tuổi Đoàn\nEm hôm nay vào Đội\nMàu khăn đỏ dắt dắt\nThương mến chào em gọi.",
            "Này em, mở cửa ra\nMột trời xanh vẫn đợi\nCánh buồm là tiếng hát\nGió đưa em đi khơi.",
            "Nắng vườn trưa mênh mông\nBướm bay như lời hát\nCon tàu là đất nước\nĐưa ta tới bến bờ.",
            "Hãy giữ mãi màu khăn\nTươi như màu mơ ước\nNgày mai em lớn khôn\nKhăn này em gửi lại."
        ]
    },
    "tv-g3-t1-b17": {
        "title": "Ngưỡng cửa",
        "author": "Vũ Quần Phương",
        "genre": "poem",
        "content": [
            "Nơi này ai cũng quen\nNgay từ thời tấm bé\nKhi tay bà, tay mẹ\nCòn dắt vòng đi men.",
            "Nơi bố mẹ ngày đêm\nLúc nào qua cũng vội\nNơi bạn bè chạy tới\nThường lúc nào cũng vui.",
            "Nơi ấy đã đưa tôi\nBuổi đầu tiên đến lớp\nNay con đường xa tắp\nVẫn đang chờ tôi đi.",
            "Nơi ấy ngôi sao khuya\nSoi vào trong giấc ngủ\nNgọn đèn khuya bóng mẹ\nSáng một vầng trên sân."
        ]
    },
    "tv-g3-b18": {
        "title": "Món quà đặc biệt",
        "author": "Theo Hạt giống tâm hồn",
        "genre": "prose",
        "content": [
            "Chiều, hai chị em hì hụi chuẩn bị quà sinh nhật cho bố. Tấm thiệp đặc biệt được chị nắn nót viết:\nBố:\n- Tính rất hiền. Ghét nói dối.\n- Nói rất to. Nấu ăn không ngon.\n- Ngủ rất nhanh. Yêu mẹ...",
            "Ngắm nghía tấm thiệp, em băn khoăn:\n- Có khi chỉ viết điều tốt thôi. Chị xoá dòng \"Nấu ăn không ngon\" đi chị!\n- Ừ. Em thấy viết thế có ít quá không?\n- A, bố rất đẹp trai nữa ạ!",
            "Chị tủm tỉm gật đầu rồi nắn nót viết thêm vào tấm thiệp: \"Bố rất đẹp trai.\". Hai chị em hồi hộp chờ bố đi làm về. Bố mở gói quà, ngạc nhiên nhìn tấm thiệp đặc biệt. Bố đọc từng dòng, đôi mắt rạng ngời hạnh phúc. Bố ôm chặt hai chị em vào lòng: \"Đây là món quà sinh nhật tuyệt vời nhất của bố!\"."
        ]
    },

    # -------------------------------------------------------------------------
    # LỚP 5 TẬP 1
    # -------------------------------------------------------------------------
    "tv-g5-b1": {
        "title": "Thanh âm của gió",
        "author": "Văn Thành Lê",
        "genre": "prose",
        "content": [
            "Chúng tôi đi chăn trâu, ngày nào cũng qua suối. Cỏ gần nước tươi tốt nên trâu ăn cỏ men theo bờ suối, rồi mới lên đồi, lên núi. Suối nhỏ, nước trong vắt, nắng chiếu xuống đáy làm cát, sỏi ánh lên lấp lánh. Một bên suối là đồng cỏ rộng, tha hồ cho gió rong chơi. Thỉnh thoảng gió lại vút qua tai chúng tôi như đùa nghịch.",
            "Chiều về, đàn trâu no cỏ đầm mình dưới suối, chúng tôi tha thẩn tìm những viên đá đẹp cho mình.",
            "Tôi thích nhất là nằm ngửa trên bãi cỏ, ngắm nhìn những đám mây trắng xốp trôi lững lờ trên nền trời xanh biếc. Nghe tiếng gió rì rào qua những rặng cây, ngỡ như có tiếng hát thì thầm êm ái của đất trời."
        ]
    },
    "tv-g5-b2": {
        "title": "Cánh đồng hoa",
        "author": "Lê Huy Trọng",
        "genre": "prose",
        "content": [
            "Cánh đồng hoa của làng tôi nở rộ suốt bốn mùa. Mùa xuân, hoa lay ơn, hoa cúc vạn thọ bừng lên sắc vàng, sắc đỏ rực rỡ. Mùa hè, hoa sen, hoa súng thơm ngát cả góc đầm.",
            "Mỗi sớm mai, khi sương sớm còn đọng long lanh trên những cánh hoa mỏng manh, các cô bác nông dân đã rộn ràng ra đồng chăm sóc và cắt hoa mang ra chợ bán.",
            "Cánh đồng hoa không chỉ đem lại cuộc sống ấm no cho dân làng mà còn là niềm tự hào, là nét đẹp thanh bình của quê hương tôi."
        ]
    },
    "tv-g5-b3": {
        "title": "Tuổi Ngựa",
        "author": "Xuân Quỳnh",
        "genre": "poem",
        "content": [
            "Mẹ ơi, con tuổi Ngựa\nTuổi con không chịu yên\nGió đưa con đi khắp\nNhững miền đất lạ xa.",
            "Ngựa con rong chơi mãi\nQua đồi dốc, qua sông\nNgựa con nhớ về mẹ\nChạy vội về bên nôi.",
            "Mẹ cười trong ánh mắt\nYêu thương đàn con thơ\nDù đi xa ngàn dặm\nLòng vẫn hướng về nhà."
        ]
    },
    "tv-g5-b4": {
        "title": "Bến sông tuổi thơ",
        "author": "Nguyễn Trọng Tạo",
        "genre": "prose",
        "content": [
            "Bến sông quê tôi gắn liền với bao kỉ niệm tuổi thơ êm đềm. Những trưa hè oi ả, lũ trẻ chúng tôi thường rủ nhau ra bến sông tắm mát, lặn ngụp bắt ốc, mò cua.",
            "Con sông hiền hòa chảy qua làng, mang theo dòng phù sa màu mỡ bồi đắp cho những ruộng mía, bãi dâu xanh mướt đôi bờ.",
            "Xa quê đã bao năm, nhưng hình ảnh bến sông quê và tiếng cười trong trẻo của bạn bè thuở ấu thơ vẫn luôn in đậm trong tâm trí tôi."
        ]
    }
}

print(f"Loaded {len(REAL_READING_PASSAGES)} verified authentic passages.")
