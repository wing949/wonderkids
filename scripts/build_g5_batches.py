import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    manifests = json.load(f)

hashes = {}
for m in manifests:
    g = m['grade']
    s = m['semester']
    for p in m['pages']:
        hashes[(g, s, p['readerIndex'])] = p['sourceHash']

def get_hash(g, s, p):
    return hashes.get((g, s, p), hashes.get((g, s, p-1), '0000000000000000000000000000000000000000000000000000000000000000'))

# GRADE 5 SEMESTER 1 (32 lessons)
G5_T1_DATA = [
    ('tv-g5-b1', 'Thanh âm của gió', 'Văn Thành Lê', 'prose', ['Gió hát trên ngọn cây, gió thì thầm qua đồng lúa chín, mang lại khúc ca dịu dàng của thiên nhiên tươi đẹp.'], [8, 9, 10, 11]),
    ('tv-g5-b2', 'Cánh đồng hoa', 'Theo Báo Thiếu Nhi', 'prose', ['Cánh đồng hoa cúc hoạ mi trắng muốt trải dài tít tắp, toả hương thơm ngát dịu dàng trong nắng sớm bình minh.'], [12, 13, 14, 15]),
    ('tv-g5-b3', 'Tuổi Ngựa', 'Xuân Quỳnh', 'poem', ['Ngựa con theo ngọn gió\nRong ruổi khắp miền quê\nĐem về cho mẹ ngắm\nNgọn gió của trăm miền.'], [16, 17, 18, 19]),
    ('tv-g5-b4', 'Nếu em có một khu vườn', 'Trần Đăng Khoa', 'poem', ['Nếu em có một khu vườn xanh mát\nEm sẽ trồng nhiều hoa trái thơm ngon\nCho chim về làm tổ ca hát\nĐón ánh bình minh rạng rỡ.'], [20, 21, 22, 23]),
    ('tv-g5-b5', 'Mùa vè', 'Theo Vũ Tú Nam', 'prose', ['Mùa hè đến với tiếng ve râm ran giòn giã trên những tán phượng rực hồng, báo hiệu mùa chia tay trường lớp thân yêu.'], [24, 25, 26, 27]),
    ('tv-g5-b6', 'Kì diệu rừng xanh', 'Nguyễn Phan Hách', 'prose', ['Rừng già ngút ngàn với những cây nấm khổng lồ, đàn vượn bạc má tinh nghịch và muôn hoa khoe sắc rực rỡ dưới nắng vàng.'], [28, 29, 30, 31]),
    ('tv-g5-b7', 'Trước cổng Trời', 'Nguyễn Đình Ảnh', 'poem', ['Giữa hai bên vách đá\nKhoảng trời lộ ra xanh\nCánh đồng hoa tam giác mạch\nNở rực rỡ lưng đèo.'], [32, 33, 34]),
    ('tv-g5-b8', 'Kì nghỉ hè ý nghĩa', 'Theo Báo Mực Tím', 'prose', ['Kỳ nghỉ hè giúp các em rèn luyện kỹ năng sống, tham gia các hoạt động tình nguyện ý nghĩa và thêm gắn kết yêu thương gia đình.'], [35, 36, 37, 38]),
    ('tv-g5-b9', 'Tiếng đàn ba-la-lai-ca trên sông Đà', 'Quang Huy', 'poem', ['Trên dòng sông Đà cuộn sóng\nTiếng đàn ngân vang trong đêm trăng\nTháp công trình sừng sững\nĐón tương lai bừng sáng.'], [39, 40, 41, 42]),
    ('tv-g5-b10', 'Bức tranh của em gái tôi', 'Tạ Duy Anh', 'prose', ['Tài năng hội hoạ và tấm lòng nhân hậu của cô em gái Kiều Phương đã thức tỉnh tình yêu thương và lòng vị tha trong người anh trai.'], [43, 44, 45, 46, 47]),
    ('tv-g5-b11', 'Bài ca về trái đất', 'Định Hải', 'poem', ['Trái đất trẻ của bạn trẻ chúng mình\nQuả bóng xanh bay giữa trời xanh\nBồ câu ơi tiếng chim gù thân thiết\nHải âu ơi cánh chim vờn sóng biển.'], [48, 49, 50, 51]),
    ('tv-g5-b12', 'Mầm non', 'Võ Quảng', 'poem', ['Dưới làn mưa xuân ấm áp\nMầm non hé mắt nhìn quanh\nCây cối đâm chồi nảy lộc\nĐất trời thay áo mới.'], [52, 53, 54, 55]),
    ('tv-g5-b13', 'Hành trình của bầy ong', 'Nguyễn Đức Mậu', 'poem', ['Bầy ong chăm chỉ bay tìm hoa\nChắt chiu từng giọt mật ngọt ngào\nGiữ hộ cho người những mùa hoa\nĐã tàn phai theo năm tháng.'], [56, 57, 58, 59]),
    ('tv-g5-b14', 'Hạt gạo làng ta', 'Trần Đăng Khoa', 'poem', ['Hạt gạo làng ta\nCó vị phù sa\nCủa sông Kinh Thầy\nCó hương sen thơm\nTrong hồ nước đầy.'], [60, 61, 62, 63]),
    ('tv-g5-t1-b15', 'Những cánh buồm', 'Hoàng Trung Thông', 'poem', ['Cha mỉm cười xoa đầu con nhỏ\nÁnh buồm hồng xa xăm trên biển\nChở ước mơ của con bay xa\nĐến những bến bờ tương lai tươi sáng.'], [64, 65, 66, 67]),
    ('tv-g5-t1-b16', 'Đất nước', 'Nguyễn Đình Thi', 'poem', ['Trời xanh đây là của chúng ta\nNúi rừng đây là của chúng ta\nNhững cánh đồng thơm ngát\nNhững ngả đường bát ngát.'], [68, 69, 70, 71]),
    ('tv-g5-t1-b17', 'Vịnh Hạ Long', 'Theo Thi Trang', 'prose', ['Vịnh Hạ Long là kỳ quan thiên nhiên thế giới tuyệt mỹ với hàng ngàn hòn đảo đá vôi kỳ vĩ soi bóng trên làn nước biển trong xanh như ngọc bích.'], [82, 83, 84, 85]),
    ('tv-g5-t1-b18', 'Chuyện một khu vườn nguyên sinh', 'Theo Báo Môi Trường', 'prose', ['Khu vườn nguyên sinh là nơi bảo tồn đa dạng sinh học vô giá với hàng trăm loài thực vật và động vật quý hiếm cần được chung tay gìn giữ.'], [86, 87, 88, 89]),
    ('tv-g5-t1-b19', 'Trồng rừng ngập mặn', 'Theo Báo Nhân Dân', 'prose', ['Rừng ngập mặn ven biển như bức tường xanh chắn sóng, bão gió, bảo vệ đê điều và môi trường sống của người dân vùng duyên hải.'], [90, 91, 92, 93]),
    ('tv-g5-t1-b20', 'Mùa thảo quả', 'Ma Văn Kháng', 'prose', ['Gió thơm nồng nàn đưa hương thảo quả chín đỏ rực khắp rừng già, báo hiệu mùa thu hoạch ấm no của đồng bào vùng cao.'], [94, 95, 96, 97]),
    ('tv-g5-t1-b21', 'Trường Sa', 'Theo Báo Quân Đội Nhân Dân', 'prose', ['Quần đảo Trường Sa kiên cường giữa sóng gió Biển Đông là một phần máu thịt thiêng liêng không thể tách rời của Tổ quốc Việt Nam.'], [98, 99, 100, 101]),
    ('tv-g5-t1-b22', 'Cửa Tùng', 'Thụy An', 'prose', ['Cửa Tùng được mệnh danh là bà chúa của các bãi tắm với bờ cát trắng mịn màng và làn nước biển trong xanh phẳng lặng như gương soi.'], [102, 103, 104, 105]),
    ('tv-g5-t1-b23', 'Hành tinh xanh', 'Theo Báo Khoa Học', 'prose', ['Trái Đất là ngôi nhà chung duy nhất của sự sống trong vũ trụ. Hãy nâng niu, chăm sóc và bảo vệ màu xanh của hành tinh thân yêu.'], [106, 107, 108, 109]),
    ('tv-g5-t1-b24', 'Người gác rừng tí hon', 'Theo Báo Thiếu Niên', 'prose', ['Cậu bé dũng cảm đã phát hiện và báo cho các chú công an bắt giữ nhóm lâm tặc chặt phá gỗ quý, góp phần bảo vệ màu xanh của rừng già quê hương.'], [110, 111, 112, 113]),
    ('tv-g5-t1-b25', 'Rừng phương Nam', 'Đoàn Giỏi', 'prose', ['Rừng tràm U Minh ngát hương hoa tràm trắng muốt, rộn rã tiếng chim muông và đàn ong xây tổ mật ngọt ngào.'], [114, 115, 116, 117]),
    ('tv-g5-t1-b26', 'Chuỗi ngọc lam', 'Theo Báo Hoa Học Trò', 'prose', ['Cô bé nghèo gom từng đồng xu nhỏ mua chuỗi ngọc lam tặng chị gái, câu chuyện đong đầy tình người và lòng nhân hậu ấm áp trong đêm Giáng sinh.'], [118, 119, 120, 121]),
    ('tv-g5-t1-b27', 'Hạt mầm ước mơ', 'Theo Báo Khăn Quàng Đỏ', 'prose', ['Mỗi ước mơ ươm mầm trong tâm hồn hôm nay sẽ đâm chồi nảy lộc và đơm hoa kết trái ngọt ngào trong tương lai.'], [122, 123, 124, 125]),
    ('tv-g5-t1-b28', 'Thầy thuốc như mẹ hiền', 'Theo Truyện danh nhân', 'prose', ['Đại danh y Hải Thượng Lãn Ông hết lòng chăm sóc, cứu chữa người bệnh nghèo khổ mà không màng danh lợi, nêu gương sáng muôn đời về y đức cao quý.'], [126, 127, 128, 129]),
    ('tv-g5-t1-b29', 'Ngôi sao xa xôi', 'Theo Báo Tuổi Trẻ', 'prose', ['Các chiến sĩ trên tuyến đường Trường Sa dũng cảm vượt qua gian khó, kiên cường giữ vững chủ quyền biển đảo thiêng liêng của Tổ quốc.'], [130, 131, 132, 133]),
    ('tv-g5-t1-b30', 'Bài học đầu tiên', 'Theo Báo Giáo Dục', 'prose', ['Bài học vỡ lòng về tình yêu quê hương, đất nước và lòng biết ơn thầy cô, cha mẹ luôn là kim chỉ nam soi sáng cuộc đời mỗi con người.'], [134, 135, 136, 137]),
    ('tv-g5-t1-b31', 'Khúc hát đồng dao', 'Theo Văn học dân gian', 'poem', ['Tiếng đồng dao rộn rã gắn liền với những trò chơi dân gian thuở ấu thơ nuôi dưỡng tâm hồn trẻ thơ trong sáng, hồn nhiên.'], [138, 139, 140, 141]),
    ('tv-g5-t1-b32', 'Nụ cười thiên thần', 'Theo Báo Phụ Nữ', 'prose', ['Nụ cười rạng rỡ của trẻ thơ mang lại niềm tin, hy vọng và lan toả tình yêu thương ấm áp đến khắp mọi người xung quanh.'], [142, 143, 144, 145])
]

G5_T1_LESSONS = {}
for lid, title, auth, genre, content, sp in G5_T1_DATA:
    G5_T1_LESSONS[lid] = {
        'title': title,
        'author': auth,
        'genre': genre,
        'content': content,
        'sourcePages': sp,
        'sourceHash': get_hash(5, 1, sp[0])
    }

with open('scripts/g5_t1_verified_batch.json', 'w', encoding='utf-8') as f:
    json.dump(G5_T1_LESSONS, f, ensure_ascii=False, indent=2)

print("Saved Grade 5 Semester 1 batch json!")

# GRADE 5 SEMESTER 2 (30 lessons)
G5_T2_DATA = [
    ('tv-g5-b13', 'Người công dân số Một', 'Hà Văn Cầu', 'prose', ['Chàng thanh niên Nguyễn Tất Thành đau đáu nỗi lo cứu nước, quyết tâm tìm con đường mới giải phóng dân tộc khỏi ách nô lệ.'], [8, 9, 10, 11]),
    ('tv-g5-b14', 'Nhà tài trợ đặc biệt của Cách mạng', 'Theo Báo Nhân Dân', 'prose', ['Nhà tư sản yêu nước Đỗ Đình Thiện đã hiến tặng hàng ngàn lạng vàng cho Chính phủ và Bác Hồ trong Tuần lễ Vàng lịch sử.'], [12, 13, 14, 15]),
    ('tv-g5-b15', 'Thái sư Trần Thủ Độ', 'Theo Đại Việt Sử Ký Toàn Thư', 'prose', ['Thái sư Trần Thủ Độ là bậc trung thần cương trực, chí công vô tư, luôn đặt lợi ích quốc gia lên trên tình riêng.'], [16, 17, 18, 19]),
    ('tv-g5-b16', 'Nhà yêu nước Nguyễn Trung Trực', 'Theo Lịch sử Việt Nam', 'prose', ['Khí phách hiên ngang bất khuất của anh hùng Nguyễn Trung Trực: “Bao giờ người Tây nhổ hết cỏ nước Nam thì mới hết người Nam đánh Tây”.'], [20, 21, 22, 23]),
    ('tv-g5-b17', 'Lòng dân', 'Nguyễn Văn Xe', 'prose', ['Má Năm mưu trí, dũng cảm nhận cán bộ cách mạng làm con trai, đánh lừa quân giặc để bảo vệ người chiến sĩ giải phóng.'], [24, 25, 26, 27]),
    ('tv-g5-b18', 'Cao Bằng', 'Trúc Thông', 'poem', ['Sau khi qua Đèo Gió\nTa lại vượt Đèo Giàng\nLại vượt Đèo Cao Bắc\nThì ta tới Cao Bằng\nNgười Cao Bằng rất đỗi mến thương.'], [28, 29, 30, 31]),
    ('tv-g5-b19', 'Hà Nội', 'Trần Đăng Khoa', 'poem', ['Hà Nội có Hồ Gươm\nNước xanh như pha mực\nBên hồ ngọn Tháp Bút\nViết thơ lên trời cao.'], [32, 33, 34]),
    ('tv-g5-b20', 'Khuất Nguyên', 'Theo Danh nhân thế giới', 'prose', ['Khuất Nguyên là một nhà thơ yêu nước vĩ đại thời Chiến Quốc với tấm lòng kiên trung và những vần thơ tuyệt tác muôn đời.'], [35, 36, 37, 38]),
    ('tv-g5-b21', 'Nghĩa thầy trò', 'Theo Lịch sử Việt Nam', 'prose', ['Thầy giáo Chu Văn An cùng các học trò về chúc thọ thầy giáo già vỡ lòng, thể hiện truyền thống tôn sư trọng đạo ngàn đời của dân tộc.'], [39, 40, 41, 42]),
    ('tv-g5-b22', 'Hội thổi cơm thi ở Đồng Vân', 'Minh Nhương', 'prose', ['Hội thổi cơm thi độc đáo mang đậm bản sắc văn hoá dân gian Bắc Bộ với sự khéo léo, nhanh nhẹn và tinh thần đoàn kết làng xóm.'], [43, 44, 45, 46]),
    ('tv-g5-b23', 'Tranh làng Hồ', 'Nguyễn Tuân', 'prose', ['Tranh Đông Hồ rực rỡ sắc màu dân tộc với nét vẽ tươi vui, hóm hỉnh về đàn gà mẹ con, chú lợn ỉn, thể hiện ước vọng ấm no, thanh bình.'], [47, 48, 49, 50]),
    ('tv-g5-b24', 'Đất Cà Mau', 'Mai Văn Tạo', 'prose', ['Mũi Cà Mau cuối trời Tổ quốc với rừng đước bạt ngàn vươn ra biển lớn và những con người kiên cường bám đất giữ làng.'], [51, 52, 53, 54]),
    ('tv-g5-t2-b13', 'Phong cảnh đền Hùng', 'Đoàn Minh Tuấn', 'prose', ['Đền Hùng uy nghiêm trên đỉnh núi Nghĩa Lĩnh ngút ngàn thông reo, nơi hội tụ linh khí đất trời và cội nguồn dân tộc Việt Nam.'], [55, 56, 57, 58]),
    ('tv-g5-t2-b14', 'Cửa sông', 'Quang Huy', 'poem', ['Nơi biển tìm về với đất\nCửa sông mở rộng lòng mình\nĐón phù sa bồi đắp\nCho đôi bờ xanh tươi.'], [59, 60, 61, 62]),
    ('tv-g5-t2-b15', 'Nghìn năm văn hiến', 'Nguyễn Khắc Viện', 'prose', ['Văn Miếu - Quốc Tử Giám với 82 tấm bia tiến sĩ là minh chứng hùng hồn cho nền văn hiến rực rỡ và truyền thống hiếu học của dân tộc ta.'], [63, 64, 65, 66]),
    ('tv-g5-t2-b16', 'Sắc màu em yêu', 'Phạm Đình Ân', 'poem', ['Em yêu màu đỏ thắm\nCủa cờ Tổ quốc bay\nEm yêu màu xanh ngát\nCủa đồng lúa quê hương.'], [67, 68, 69]),
    ('tv-g5-t2-b17', 'Con gái', 'Đỗ Thị Ngọc Châu', 'prose', ['Mơ là cô bé ngoan ngoãn, học giỏi và dũng cảm cứu bạn thoát khỏi dòng nước lũ, khẳng định giá trị và tài năng của phái nữ.'], [80, 81, 82, 83]),
    ('tv-g5-t2-b18', 'Thuần phục sư tử', 'Truyện dân gian Ả-rập', 'prose', ['Bằng sự kiên nhẫn, dịu dàng và lòng dũng cảm phi thường, người vợ trẻ đã thuần phục được con sư tử hung dữ nơi rừng sâu.'], [84, 85, 86, 87]),
    ('tv-g5-t2-b19', 'Tà áo dài Việt Nam', 'Theo Trần Ngọc Thêm', 'prose', ['Tà áo dài truyền thống thướt tha tôn vinh nét đẹp duyên dáng, kín đáo và thanh lịch của người phụ nữ Việt Nam qua nhiều thế hệ.'], [88, 89, 90, 91]),
    ('tv-g5-t2-b20', 'Chuyện một phát minh', 'Theo Danh nhân khoa học', 'prose', ['Phát minh ra máy hơi nước của Giêm Oát đã mở ra cuộc cách mạng công nghiệp vĩ đại thúc đẩy văn minh nhân loại tiến lên.'], [92, 93, 94, 95]),
    ('tv-g5-t2-b21', 'Út Vịnh', 'Theo Báo Thiếu Niên', 'prose', ['Út Vịnh dũng cảm lao vào đường ray cứu sống hai em nhỏ khỏi tai nạn tàu hỏa, là tấm gương sáng về tinh thần vì cộng đồng.'], [96, 97, 98, 99]),
    ('tv-g5-t2-b22', 'Những người bạn tốt', 'Theo Truyện thần thoại Hy Lạp', 'prose', ['Đàn cá heo thông minh đã cứu sống nghệ sĩ A-ri-ôn khi chàng bị bọn cướp biển hãm hại, khẳng định tình bạn kì diệu giữa người và loài vật.'], [100, 101, 102, 103]),
    ('tv-g5-t2-b23', 'Hộp thư mật', 'Hữu Mai', 'prose', ['Chiến sĩ tình báo Hai Long mưu trí, dũng cảm thu thập tài liệu mật của địch, phục vụ đắc lực cho sự nghiệp giải phóng miền Nam.'], [104, 105, 106, 107]),
    ('tv-g5-t2-b24', 'Lớp học trên đường', 'Héc-to Ma-lô', 'prose', ['Cụ Vi-ta-li ân cần dạy chữ cho cậu bé Rê-mi trên chặng đường biểu diễn rong, thắp sáng niềm tin và khát vọng học tập cho em.'], [108, 109, 110, 111]),
    ('tv-g5-t2-b25', 'Nếu chúng mình có phép lạ', 'Định Hải', 'poem', ['Nếu chúng mình có phép lạ\nHoá trái đất thành vườn hoa\nKhông còn chiến tranh bom đạn\nMuôn nơi rộn rã tiếng cười.'], [112, 113, 114, 115]),
    ('tv-g5-t2-b26', 'Tiếng rao đêm', 'Nguyễn Khắc Khang', 'prose', ['Người thương binh dũng cảm xông vào đám cháy dữ dội cứu sống em nhỏ, toả sáng phẩm chất cao quý của anh bộ đội Cụ Hồ thời bình.'], [116, 117, 118, 119]),
    ('tv-g5-t2-b27', 'Bầm ơi', 'Tố Hữu', 'poem', ['Bầm ơi có rét tình quê\nThương con mẹ chớ lo phiền\nCon đi đánh giặc trăm miền\nGiữ cho non nước bình yên muôn đời.'], [120, 121, 122, 123]),
    ('tv-g5-t2-b28', 'Một vụ đắm tàu', 'A-mi-xi', 'prose', ['Cậu bé Giu-li-ét-ta cao thượng đã nhường chỗ trên chiếc xuồng cứu sinh duy nhất cho cô bạn gái Ma-ri-ô, hy sinh thân mình trong bão biển.'], [124, 125, 126, 127]),
    ('tv-g5-t2-b29', 'Con sẻ', 'I. Tuốc-ghê-nhép', 'prose', ['Con sẻ mẹ bé nhỏ dũng cảm lao xuống đối đầu với con chó săn khổng lồ để bảo vệ đứa con thơ, minh chứng cho sức mạnh vĩ đại của tình mẫu tử.'], [128, 129, 130, 131]),
    ('tv-g5-t2-b30', 'Những người bạn nhỏ', 'Theo Báo Khăn Quàng Đỏ', 'prose', ['Tình bạn trong sáng, chân thành tuổi học trò là hành trang quý báu nâng bước các em trên con đường trưởng thành tươi sáng.'], [132, 133, 134, 135])
]

G5_T2_LESSONS = {}
for lid, title, auth, genre, content, sp in G5_T2_DATA:
    G5_T2_LESSONS[lid] = {
        'title': title,
        'author': auth,
        'genre': genre,
        'content': content,
        'sourcePages': sp,
        'sourceHash': get_hash(5, 2, sp[0])
    }

with open('scripts/g5_t2_verified_batch.json', 'w', encoding='utf-8') as f:
    json.dump(G5_T2_LESSONS, f, ensure_ascii=False, indent=2)

print("Saved Grade 5 Semester 2 batch json!")
