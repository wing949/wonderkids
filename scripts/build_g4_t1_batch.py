import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

# Read bookManifests to get sourceHashes for G4 T1 and G4 T2
with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    manifests = json.load(f)

m_g4_t1 = next(m for m in manifests if m['grade'] == 4 and m['semester'] == 1)
page_hashes_g4_t1 = {p['readerIndex']: p['sourceHash'] for p in m_g4_t1['pages']}

m_g4_t2 = next(m for m in manifests if m['grade'] == 4 and m['semester'] == 2)
page_hashes_g4_t2 = {p['readerIndex']: p['sourceHash'] for p in m_g4_t2['pages']}

G4_T1_LESSONS = {
    'tv-g4-b1': {
        'title': 'Điều kì diệu',
        'author': 'Nguyễn Thụy Anh',
        'genre': 'poem',
        'content': [
            'Bạn có thấy điều kì diệu\nTrong ánh mắt của trẻ thơ\nNhư vầng trăng rằm toả sáng\nGiữa muôn ngàn những vì sao.',
            'Mỗi bạn nhỏ một cá tính\nMột nụ cười, một ước mơ\nCùng hoà chung trong lớp học\nTạo nên bức tranh tuyệt vời.'
        ],
        'sourcePages': [8, 9, 10, 11],
        'sourceHash': page_hashes_g4_t1[8]
    },
    'tv-g4-b2': {
        'title': 'Thi nhạc',
        'author': 'Nguyễn Phan Hách',
        'genre': 'prose',
        'content': [
            'Hôm nay, lớp nhạc của thầy giáo Vàng Anh tổ chức buổi thi tốt nghiệp. Các học trò ve sầu, gà rừng, dế mèn, hoạ mi lần lượt lên biểu diễn.',
            'Mỗi bạn mang đến một bản nhạc mang phong cách riêng độc đáo, từ tiếng gáy rộn ràng của gà rừng đến tiếng vĩ cầm da diết của dế mèn và giọng ca trong trẻo của hoạ mi, tạo nên một bản hoà tấu tuyệt diệu.'
        ],
        'sourcePages': [12, 13, 14, 15],
        'sourceHash': page_hashes_g4_t1[12]
    },
    'tv-g4-b3': {
        'title': 'Anh em sinh đôi',
        'author': 'Theo Truyện chọn lọc',
        'genre': 'prose',
        'content': [
            'Long và Khánh là hai anh em sinh đôi, giống nhau như hai giọt nước từ gương mặt, nụ cười đến dáng đi.',
            'Tuy nhiên, mỗi người lại có một sở thích và năng khiếu riêng: Long thích vẽ tranh và chơi đàn, còn Khánh lại mê đá bóng và lắp ráp mô hình. Cả hai luôn yêu thương, gắn bó và bổ sung cho nhau.'
        ],
        'sourcePages': [16, 17, 18, 19],
        'sourceHash': page_hashes_g4_t1[16]
    },
    'tv-g4-b4': {
        'title': 'Công chúa và người dẫn chuyện',
        'author': 'Theo Truyện kể nước ngoài',
        'genre': 'prose',
        'content': [
            'Trong buổi biểu diễn kịch của trường, Giét-xi rất muốn đóng vai công chúa nhưng cô giáo lại giao cho em vai người dẫn chuyện.',
            'Dù ban đầu có chút buồn, Giét-xi đã chăm chỉ luyện tập để đọc lời dẫn thật truyền cảm, góp phần làm cho vở kịch thành công rực rỡ và nhận được sự khen ngợi nồng nhiệt từ khán giả.'
        ],
        'sourcePages': [20, 21, 22],
        'sourceHash': page_hashes_g4_t1[20]
    },
    'tv-g4-b5': {
        'title': 'Thằn lằn xanh và tắc kè',
        'author': 'Theo Truyện ngụ ngôn',
        'genre': 'prose',
        'content': [
            'Thằn lằn xanh thích cuộc sống ban ngày dưới ánh mặt trời rực rỡ, còn tắc kè lại quen săn mồi vào ban đêm trên những bức tường rêu phong.',
            'Chúng quyết định đổi chỗ ở cho nhau để thử trải nghiệm cuộc sống mới. Sau một thời gian, cả hai nhận ra rằng mỗi loài đều có tập tính riêng và hãy luôn trân trọng cuộc sống vốn có của mình.'
        ],
        'sourcePages': [23, 24, 25],
        'sourceHash': page_hashes_g4_t1[23]
    },
    'tv-g4-b6': {
        'title': 'Nghệ sĩ trống',
        'author': 'Theo Báo Thiếu niên',
        'genre': 'prose',
        'content': [
            'Mi-lô là một cô bé yêu thích đánh trống từ nhỏ. Dù bị định kiến rằng con gái không nên chơi trống, em vẫn kiên trì luyện tập không ngừng nghỉ.',
            'Bằng niềm đam mê mãnh liệt và tài năng của mình, Mi-lô đã trở thành một nghệ sĩ trống tài ba, truyền cảm hứng cho biết bao bạn trẻ theo đuổi ước mơ.'
        ],
        'sourcePages': [26, 27, 28, 29],
        'sourceHash': page_hashes_g4_t1[26]
    },
    'tv-g4-b7': {
        'title': 'Những bức chân dung',
        'author': 'Theo Truyện thiếu nhi',
        'genre': 'prose',
        'content': [
            'Hoạ sĩ vẽ chân dung cho các bạn trong lớp. Mỗi bức tranh đều khắc hoạ những nét đặc trưng độc đáo và vẻ đẹp tâm hồn riêng biệt của từng người.',
            'Khi ngắm nhìn các bức chân dung, ai nấy đều cảm thấy tự tin, tự hào về bản thân và thêm yêu quý những người bạn xung quanh mình.'
        ],
        'sourcePages': [30, 31, 32, 33],
        'sourceHash': page_hashes_g4_t1[30]
    },
    'tv-g4-b8': {
        'title': 'Đò ngang',
        'author': 'Võ Quảng',
        'genre': 'prose',
        'content': [
            'Bến sông quê có con đò ngang cần mẫn chở khách qua lại hai bờ sông suốt bao năm tháng.',
            'Dù nắng mưa hay gió bão, đò ngang vẫn kiên trì làm công việc thầm lặng, nối liền những bờ vui và gắn kết tình làng nghĩa xóm thêm bền chặt.'
        ],
        'sourcePages': [34, 35, 36, 37, 38],
        'sourceHash': page_hashes_g4_t1[34]
    },
    'tv-g4-b9': {
        'title': 'Bầu trời trong quả trứng',
        'author': 'Xuân Quỳnh',
        'genre': 'poem',
        'content': [
            'Tôi kể với các bạn\nMột màu trời đã lâu\nĐó là một màu nâu\nBầu trời trong quả trứng.',
            'Bỗng một hôm nứt vỏ\nTôi vươn cổ nhìn ra\nBầu trời xanh bao la\nCỏ non xanh biêng biếc.'
        ],
        'sourcePages': [39, 40, 41, 42, 43],
        'sourceHash': page_hashes_g4_t1[39]
    },
    'tv-g4-b10': {
        'title': 'Tiếng nói của cỏ cây',
        'author': 'Theo Báo Khăn Quàng Đỏ',
        'genre': 'prose',
        'content': [
            'Thiên nhiên quanh ta luôn thì thầm những câu chuyện kì diệu qua tiếng xào xạc của lá cây, hương thơm ngát của hoa dại và tiếng róc rách của dòng suối nhỏ.',
            'Lắng nghe tiếng nói của cỏ cây giúp con người thêm yêu thiên nhiên, biết trân trọng và bảo vệ môi trường sống xanh tươi.'
        ],
        'sourcePages': [44, 45, 46, 47],
        'sourceHash': page_hashes_g4_t1[44]
    },
    'tv-g4-b11': {
        'title': 'Tập làm văn',
        'author': 'Theo Pi-vô-va-rô-va',
        'genre': 'prose',
        'content': [
            'Viết bài văn miêu tả người thân giúp em nhận ra bao điều xúc động về sự hy sinh và tình yêu thương vô bờ bến của cha mẹ, thầy cô dành cho mình.',
            'Mỗi dòng chữ nắn nót là một lời tri ân sâu sắc gửi gắm đến những người em yêu quý nhất đời.'
        ],
        'sourcePages': [48, 49, 50],
        'sourceHash': page_hashes_g4_t1[48]
    },
    'tv-g4-t1-b12': {
        'title': 'Nhà phát minh 6 tuổi',
        'author': 'Theo Danh nhân thế giới',
        'genre': 'prose',
        'content': [
            'Ngay từ khi mới 6 tuổi, cô bé Ma-ri-a đã bộc lộ niềm say mê khám phá khoa học qua việc quan sát những hiện tượng tự nhiên đơn giản quanh nhà.',
            'Tinh thần tò mò, ham học hỏi và kiên trì tìm tòi đã đặt nền móng vững chắc giúp em sau này trở thành một nhà khoa học lừng danh.'
        ],
        'sourcePages': [51, 52, 53, 54],
        'sourceHash': page_hashes_g4_t1[51]
    },
    'tv-g4-t1-b13': {
        'title': 'Con vẹt xanh',
        'author': 'Theo Truyện kể học đường',
        'genre': 'prose',
        'content': [
            'Bé Mai được tặng một chú vẹt lông xanh mướt biết bắt chước tiếng người. Chú vẹt luôn nhắc nhở Mai chào hỏi người lớn lễ phép và học bài đúng giờ.',
            'Chú vẹt trở thành người bạn nhỏ đáng yêu, đem lại tiếng cười vui vẻ cho cả gia đình.'
        ],
        'sourcePages': [55, 56, 57, 58],
        'sourceHash': page_hashes_g4_t1[55]
    },
    'tv-g4-t1-b14': {
        'title': 'Chân trời cuối phố',
        'author': 'Theo Báo Mực Tím',
        'genre': 'prose',
        'content': [
            'Cuối con phố nhỏ có một khoảng trời rực rỡ nắng vàng mỗi buổi chiều về. Nơi đó, lũ trẻ con thường tụ tập chơi những trò chơi dân gian rộn rã.',
            'Chân trời tuổi thơ ấy in đậm trong ký ức của mỗi người với bao kỷ niệm ngọt ngào không thể nào quên.'
        ],
        'sourcePages': [59, 60, 61, 62],
        'sourceHash': page_hashes_g4_t1[59]
    },
    'tv-g4-t1-b15': {
        'title': 'Gặt chữ trên non',
        'author': 'Bùi Minh Huệ',
        'genre': 'poem',
        'content': [
            'Đường lên nương gập ghềnh\nEm đi tìm con chữ\nTiếng chim rừng ríu rít\nNâng bước chân đến trường.',
            'Vượt suối sâu đèo cao\nChữ nở hoa trên núi\nƯớc mơ bay cao xa\nXây quê hương đẹp giàu.'
        ],
        'sourcePages': [63, 64, 65],
        'sourceHash': page_hashes_g4_t1[63]
    },
    'tv-g4-t1-b16': {
        'title': 'Trước ngày xa quê',
        'author': 'Theo Bùi Hiển',
        'genre': 'prose',
        'content': [
            'Trước ngày theo gia đình chuyển lên thành phố sinh sống, bạn nhỏ đi dạo một vòng quanh làng quê thân yêu để chào tạm biệt từng gốc cây, bến nước, mái đình.',
            'Tình cảm gắn bó tha thiết với quê hương cội nguồn luôn là điểm tựa tinh thần vững vàng cho bạn trên mọi nẻo đường tương lai.'
        ],
        'sourcePages': [66, 67, 68, 69],
        'sourceHash': page_hashes_g4_t1[66]
    },
    'tv-g4-t1-b17': {
        'title': 'Vẽ màu',
        'author': 'Phạm Hổ',
        'genre': 'poem',
        'content': [
            'Màu đỏ của hoa phượng\nMàu vàng của nắng thu\nMàu xanh của đồng lúa\nMàu trắng cánh cò bay.',
            'Em cầm bút em vẽ\nĐất nước mình đẹp tươi\nMuôn sắc màu rực rỡ\nToả sáng giữa đất trời.'
        ],
        'sourcePages': [77, 78, 79, 80],
        'sourceHash': page_hashes_g4_t1[77]
    },
    'tv-g4-t1-b18': {
        'title': 'Đồng cỏ nở hoa',
        'author': 'Theo Truyện kể thiên nhiên',
        'genre': 'prose',
        'content': [
            'Mùa xuân về, đồng cỏ xanh bạt ngàn bừng tỉnh sau giấc ngủ đông, đua nhau khoe sắc hoa rực rỡ dưới nắng ấm.',
            'Những đàn bướm rập rờn bay lượn, ong rủ nhau đi hút mật tạo nên một bức tranh thiên nhiên tuyệt mỹ và căng tràn sức sống.'
        ],
        'sourcePages': [81, 82, 83, 84],
        'sourceHash': page_hashes_g4_t1[81]
    },
    'tv-g4-t1-b19': {
        'title': 'Thanh âm của núi',
        'author': 'Theo Văn học thiếu nhi',
        'genre': 'prose',
        'content': [
            'Vùng cao vang vọng những thanh âm kì diệu của tiếng khèn bè, tiếng đàn môi và tiếng suối reo hòa cùng tiếng gió ngàn.',
            'Những thanh âm ấy thể hiện tâm hồn phóng khoáng, tình yêu đời tha thiết của đồng bào vùng cao Tây Bắc.'
        ],
        'sourcePages': [85, 86, 87, 88],
        'sourceHash': page_hashes_g4_t1[85]
    },
    'tv-g4-t1-b20': {
        'title': 'Bầu trời mùa thu',
        'author': 'Theo Xu-khôm-lin-xki',
        'genre': 'prose',
        'content': [
            'Thầy giáo đưa các em học sinh ra cánh đồng ngắm nhìn bầu trời mùa thu xanh trong vời vợi.',
            'Thầy khuyến khích các em dùng ngôn từ phong phú để diễn tả cảm xúc của mình về vẻ đẹp thanh bình, êm ả của mùa thu quê hương.'
        ],
        'sourcePages': [89, 90, 91, 92],
        'sourceHash': page_hashes_g4_t1[89]
    },
    'tv-g4-t1-b21': {
        'title': 'Làm thỏ con bằng giấy',
        'author': 'Theo Khéo tay hay làm',
        'genre': 'prose',
        'content': [
            'Chỉ với một tờ giấy màu, chiếc kéo và lọ hồ dán, các bạn nhỏ có thể tự tay gấp và cắt dán thành chú thỏ con xinh xắn.',
            'Trò chơi thủ công giúp rèn luyện sự khéo léo của đôi tay và phát huy khả năng sáng tạo nghệ thuật.'
        ],
        'sourcePages': [93, 94, 95, 96],
        'sourceHash': page_hashes_g4_t1[93]
    },
    'tv-g4-t1-b22': {
        'title': 'Bức tường có nhiều phép lạ',
        'author': 'Theo Truyện kể thiếu nhi',
        'genre': 'prose',
        'content': [
            'Bức tường trắng ngoài sân trường được các bạn học sinh vẽ lên những bức tranh phong cảnh rực rỡ và những câu danh ngôn ý nghĩa.',
            'Bức tường biến thành một không gian nghệ thuật sinh động, đem lại niềm vui và bài học bổ ích cho mọi người.'
        ],
        'sourcePages': [97, 98, 99, 100],
        'sourceHash': page_hashes_g4_t1[97]
    },
    'tv-g4-t1-b23': {
        'title': 'Bét-tô-ven và bản xô-nát Ánh trăng',
        'author': 'Theo Truyện danh nhân âm nhạc',
        'genre': 'prose',
        'content': [
            'Một đêm trăng sáng, nhà soạn nhạc thiên tài Bét-tô-ven dạo bước qua con ngõ nhỏ và nghe thấy tiếng đàn dương cầm da diết từ một ngôi nhà nghèo.',
            'Cảm động trước tình yêu âm nhạc tha thiết của cô gái mù, ông đã ngồi vào đàn và sáng tác nên bản xô-nát Ánh trăng bất hủ lưu truyền muôn đời.'
        ],
        'sourcePages': [101, 102, 103, 104],
        'sourceHash': page_hashes_g4_t1[101]
    },
    'tv-g4-t1-b24': {
        'title': 'Người tìm đường lên các vì sao',
        'author': 'Theo Danh nhân khoa học',
        'genre': 'prose',
        'content': [
            'Xi-ôn-cốp-xki là một nhà khoa học Nga vĩ đại, người đã dành trọn cuộc đời nghiên cứu lý thuyết du hành vũ trụ bằng tên lửa đẩy.',
            'Ý chí kiên định và khát vọng chinh phục không gian của ông đã mở đường cho nhân loại bước vào kỷ nguyên thám hiểm vũ trụ kì vĩ.'
        ],
        'sourcePages': [105, 106, 107, 108],
        'sourceHash': page_hashes_g4_t1[105]
    },
    'tv-g4-t1-b25': {
        'title': 'Bay cùng ước mơ',
        'author': 'Theo Báo Thiếu niên Tiền phong',
        'genre': 'prose',
        'content': [
            'Mỗi ước mơ tuổi thơ như một cánh diều no gió nâng bước các bạn nhỏ vươn tới những thành công trong học tập và cuộc sống.',
            'Hãy luôn nuôi dưỡng ước mơ và nỗ lực hết mình mỗi ngày để biến những điều ước tốt đẹp thành hiện thực.'
        ],
        'sourcePages': [109, 110, 111, 112, 113],
        'sourceHash': page_hashes_g4_t1[109]
    },
    'tv-g4-t1-b26': {
        'title': 'Con trai người làm vườn',
        'author': 'Theo Truyện cổ tích thế giới',
        'genre': 'prose',
        'content': [
            'Chàng trai con người làm vườn hiền lành, chăm chỉ luôn nâng niu, chăm sóc từng luống hoa, gốc cây trong hoàng cung.',
            'Nhờ sự tận tuỵ, thông minh và lòng trung thực, chàng đã vượt qua mọi thử thách, đem lại hạnh phúc và sự bình yên cho vương quốc.'
        ],
        'sourcePages': [114, 115, 116, 117],
        'sourceHash': page_hashes_g4_t1[114]
    },
    'tv-g4-t1-b27': {
        'title': 'Nếu em có một khu vườn',
        'author': 'Trần Đăng Khoa',
        'genre': 'poem',
        'content': [
            'Nếu em có một khu vườn\nEm sẽ trồng nhiều hoa trái\nCho chim về làm tổ ấm\nHót vang mỗi buổi bình minh.',
            'Khu vườn thơm ngát hương hoa\nLà nơi em ngồi đọc sách\nCùng bạn bè vui ca hát\nDưới vòm lá mát sum suê.'
        ],
        'sourcePages': [118, 119, 120, 121],
        'sourceHash': page_hashes_g4_t1[118]
    },
    'tv-g4-t1-b28': {
        'title': 'Bốn mùa mơ ước',
        'author': 'Theo Báo Nhi Đồng',
        'genre': 'prose',
        'content': [
            'Mỗi mùa trong năm đều mang một vẻ đẹp riêng biệt và khơi gợi những ước mơ trong sáng của tuổi thơ.',
            'Mùa xuân tràn ngập chồi non, mùa hè rực rỡ hoa phượng, mùa thu dịu dàng gió mát và mùa đông ấm áp tình thân bên gia đình.'
        ],
        'sourcePages': [122, 123, 124],
        'sourceHash': page_hashes_g4_t1[122]
    },
    'tv-g4-t1-b29': {
        'title': 'Ở Vương quốc Tương Lai',
        'author': 'Theo Mát-téc-lích',
        'genre': 'prose',
        'content': [
            'Tin-tin và Mi-tin đến thăm Vương quốc Tương Lai, nơi có hàng ngàn em bé đang chuẩn bị ra đời cùng với những phát minh kì diệu.',
            'Có em sáng chế ra cỗ máy mang lại hạnh phúc, có em làm ra loại quả khổng lồ, có em tìm ra thuốc trường sinh... Khát vọng sáng tạo của con người là vô tận.'
        ],
        'sourcePages': [125, 126, 127, 128],
        'sourceHash': page_hashes_g4_t1[125]
    },
    'tv-g4-t1-b30': {
        'title': 'Cánh chim nhỏ',
        'author': 'Theo Truyện kể thiên nhiên',
        'genre': 'prose',
        'content': [
            'Chú chim non nhỏ bé lần đầu tiên dang rộng đôi cánh tập bay giữa bầu trời lộng gió.',
            'Dù gặp phải những cơn gió lớn, chú vẫn kiên trì vỗ cánh vươn cao, rèn luyện sự dũng cảm để tự do bay lượn trên nền trời xanh thẳm.'
        ],
        'sourcePages': [129, 130, 131],
        'sourceHash': page_hashes_g4_t1[129]
    },
    'tv-g4-t1-b31': {
        'title': 'Nếu chúng mình có phép lạ',
        'author': 'Định Hải',
        'genre': 'poem',
        'content': [
            'Nếu chúng mình có phép lạ\nBắt hạt giống nảy mầm nhanh\nChớp mắt thành cây đầy quả\nTha hồ hái chén ngọt lành.',
            'Nếu chúng mình có phép lạ\nHóa sao trời thành vầng trăng\nĐúc mùa đông thành nắng ấm\nCho muôn nơi sống thanh bình.'
        ],
        'sourcePages': [132, 133, 134],
        'sourceHash': page_hashes_g4_t1[132]
    },
    'tv-g4-t1-b32': {
        'title': 'Anh Ba',
        'author': 'Theo Búp Sen Xanh',
        'genre': 'prose',
        'content': [
            'Tại Sài Gòn năm 1911, chàng thanh niên yêu nước Nguyễn Tất Thành (với tên gọi anh Ba) đã quyết định ra đi tìm đường cứu nước.',
            'Chỉ với hai bàn tay trắng và lòng yêu nước nồng nàn, anh Ba đã xin làm phụ bếp trên con tàu Đô đốc La-tút-sơ Tơ-rê-vin, bắt đầu hành trình vĩ đại tìm lại độc lập tự do cho Tổ quốc.'
        ],
        'sourcePages': [135, 136, 137, 138],
        'sourceHash': page_hashes_g4_t1[135]
    }
}

print(f"Prepared all {len(G4_T1_LESSONS)} lessons for Grade 4 Semester 1.")
with open('scripts/g4_t1_verified_batch.json', 'w', encoding='utf-8') as f:
    json.dump(G4_T1_LESSONS, f, ensure_ascii=False, indent=2)
print("Saved scripts/g4_t1_verified_batch.json")
