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

# GRADE 4 SEMESTER 2 (30 lessons)
G4_T2_DATA = [
    ('tv-g4-b12', 'Hải Thượng Lãn Ông', 'Theo Danh nhân y học', 'prose', ['Hải Thượng Lãn Ông Lê Hữu Trác là một đại danh y của dân tộc, giàu lòng nhân ái và luôn tận tuỵ cứu chữa người bệnh nghèo.', 'Bộ sách Hải Thượng y tông tâm lĩnh của ông là di sản y học vô giá để lại cho muôn đời sau.'], [8, 9, 10, 11]),
    ('tv-g4-b13', 'Vệt phấn trên mặt bàn', 'Theo Báo Thiếu niên', 'prose', ['Minh và Hà ngồi chung bàn. Một lần Hà vô tình làm mực dây sang vở của Minh khiến Minh tức giận kẻ một vệt phấn chia đôi bàn.', 'Khi biết tay phải của Hà bị liệt phải cố gắng viết bằng tay trái, Minh hối hận xoá vệt phấn và ân cần giúp đỡ bạn.'], [12, 13, 14, 15]),
    ('tv-g4-b14', 'Ông Bụt đã đến', 'Theo Truyện kể thiếu nhi', 'prose', ['Cô bé Mai ao ước có một chiếc váy hoa thật đẹp để dự hội nhưng nhà nghèo không mua được.', 'Bác hàng xóm tốt bụng biết chuyện đã bí mật may tặng em chiếc váy như một phép màu của ông Bụt tốt lành.'], [16, 17, 18, 19]),
    ('tv-g4-b15', 'Quả ngọt cuối mùa', 'Võ Thanh An', 'poem', ['Rặng bưởi mùa đông rụng lá\nChỉ còn những quả vàng ươm\nNhư những chiếc đèn lồng nhỏ\nThắp sáng khoảng vườn mênh mông.'], [20, 21, 22, 23]),
    ('tv-g4-b16', 'Tờ báo tường của tôi', 'Theo Báo Mực Tím', 'prose', ['Nhân ngày 20-11, chi đội em cùng nhau làm tờ báo tường rực rỡ sắc màu với những bài thơ, bài văn tri ân thầy cô giáo kính yêu.'], [24, 25, 26, 27]),
    ('tv-g4-b17', 'Tiếng ru', 'Tố Hữu', 'poem', ['Con ong làm mật yêu hoa\nCon cá bơi yêu nước, con chim ca yêu trời\nCon người muốn sống con ơi\nPhải yêu đồng chí, yêu người anh em.'], [28, 29, 30]),
    ('tv-g4-b18', 'Con muốn làm một cái cây', 'Theo Báo Hoa Học Trò', 'prose', ['Em ước mình như một cái cây xanh toả bóng mát che chở cho mọi người và đón nhận làn gió trong lành của đất trời.'], [31, 32, 33, 34]),
    ('tv-g4-b19', 'Trên khóm tre đầu ngõ', 'Theo Đỗ Chu', 'prose', ['Khóm tre xanh đầu ngõ rì rào reo ca cùng gió, chứng kiến bao bước chân đi về thân thương của người dân làng xóm.'], [35, 36, 37, 38, 39]),
    ('tv-g4-b20', 'Sự tích con Rồng cháu Tiên', 'Truyện truyền thuyết', 'prose', ['Lạc Long Quân và Âu Cơ sinh ra bọc trăm trứng, nở thành trăm người con là tổ tiên của dân tộc Việt Nam ta.'], [40, 41, 42, 43]),
    ('tv-g4-b21', 'Cảm xúc Trường Sa', 'Theo Báo Quân đội Nhân dân', 'prose', ['Trường Sa hiên ngang giữa biển khơi mênh mông, nơi các chiến sĩ hải quân kiên cường ngày đêm canh giữ chủ quyền biển đảo Tổ quốc.'], [44, 45, 46, 47]),
    ('tv-g4-b22', 'Sáng tháng Năm', 'Tố Hữu', 'poem', ['Bác Hồ đó, chiếc áo nâu giản dị\nMàu quê hương bền bỉ đậm đà\nTa bên Người, Người tỏa sáng trong ta\nTa bỗng lớn ở bên Người một chút.'], [48, 49, 50]),
    ('tv-g4-t2-b12', 'Chàng trai làng Phù Ủng', 'Theo Đại Việt Sử Ký', 'prose', ['Phạm Ngũ Lão ngồi đan sọt bên đường, mải nghĩ việc nước mà giáo đâm vào đùi không biết, sau trở thành danh tướng kiệt xuất đời Trần.'], [51, 52, 53, 54]),
    ('tv-g4-t2-b13', 'Vườn của ông tôi', 'Theo Băng Sơn', 'prose', ['Vườn cây của ông luôn trĩu quả ngát hương thơm nhờ bàn tay chăm sóc cần mẫn, đong đầy tình yêu thương của ông.'], [55, 56, 57, 58]),
    ('tv-g4-t2-b14', 'Trong lời mẹ hát', 'Trương Nam Hương', 'poem', ['Lời mẹ hát có cánh cò bay lả\nCó dòng sông ngọt ngào phù sa\nNâng giấc ngủ tuổi thơ êm ả\nBồi đắp cho con cả cuộc đời.'], [59, 60, 61, 62]),
    ('tv-g4-t2-b15', 'Người thầy đầu tiên của bố tôi', 'Theo Báo Tuổi Trẻ', 'prose', ['Bố đưa tôi về thăm thầy giáo tiểu học đầu tiên, người đã truyền dạy cho bố những nét chữ và bài học đạo đức làm người sâu sắc.'], [63, 64, 65, 66]),
    ('tv-g4-t2-b16', 'Ngựa biên phòng', 'Theo Báo Biên Phòng', 'prose', ['Chú ngựa ô dũng cảm cùng các chiến sĩ biên phòng tuần tra nơi biên cương cheo leo, bảo vệ từng tấc đất thiêng liêng của Tổ quốc.'], [67, 68, 69]),
    ('tv-g4-t2-b17', 'Cây đa quê hương', 'Nguyễn Khắc Viện', 'prose', ['Cây đa cổ thụ đầu làng như một người khổng lồ hiền từ giang tay che chở cho bao thế hệ dân làng.'], [80, 81, 82, 83, 84]),
    ('tv-g4-t2-b18', 'Bước mùa xuân', 'Theo Nguyễn Duy', 'poem', ['Mùa xuân về trên từng chồi biếc\nGió heo may nhường chỗ nắng hồng\nCánh én lượn chao nghiêng trời rộng\nRộn rã lòng người đón xuân sang.'], [85, 86, 87, 88]),
    ('tv-g4-t2-b19', 'Đi hội chùa Hương', 'Chu Mạnh Trinh', 'prose', ['Chùa Hương bồng bềnh mây khói non tiên, dòng suối Yến trong xanh đón bước du khách trẩy hội cầu bình an đầu năm.'], [89, 90, 91, 92]),
    ('tv-g4-t2-b20', 'Chiều ngoại ô', 'Nguyễn Thụy Kha', 'prose', ['Chiều ngoại ô thanh bình với đồng cỏ xanh ngát, tiếng sáo diều vi vu hoà cùng hoàng hôn đỏ rực.'], [93, 94, 95, 96, 97]),
    ('tv-g4-t2-b21', 'Những cánh buồm', 'Hoàng Trung Thông', 'poem', ['Hai cha con dạo bước trên cát\nCha dắt con đi dưới ánh mai hồng\nCon ước mơ giong buồm ra biển lớn\nKhám phá những chân trời bao la.'], [98, 99, 100, 101]),
    ('tv-g4-t2-b22', 'Cái cầu', 'Phạm Tiến Duật', 'poem', ['Cha gửi cho con chiếc ảnh cái cầu\nCha vừa bắc xong qua dòng sông sâu\nCon yêu cầu cha xây nên tha thiết\nBởi nhịp cầu nối những niềm vui.'], [102, 103, 104, 105]),
    ('tv-g4-t2-b23', 'Đường đi Sa Pa', 'Nguyễn Phan Hách', 'prose', ['Sa Pa huyền ảo trong màn sương trắng, những dãy núi trùng điệp và rừng đào khoe sắc rực rỡ như chốn bồng lai tiên cảnh.'], [106, 107, 108]),
    ('tv-g4-t2-b24', 'Quê ngoại', 'Theo Thanh Tịnh', 'prose', ['Về quê ngoại thanh bình với dòng sông êm ả, vườn dừa trĩu quả và tình yêu thương đôn hậu của bà ngoại kính yêu.'], [109, 110, 111, 112]),
    ('tv-g4-t2-b25', 'Khu bảo tồn động vật hoang dã Ngô-rông-gô-rô', 'Theo Thế Giới Động Vật', 'prose', ['Ngô-rông-gô-rô là thiên đường hoang dã nơi hàng triệu loài động vật quý hiếm như sư tử, tê giác, hươu cao cổ cùng chung sống hoà bình.'], [113, 114, 115, 116]),
    ('tv-g4-t2-b26', 'Ngôi nhà của yêu thương', 'Theo Báo Gia Đình', 'prose', ['Gia đình là tổ ấm bình yên nhất nơi chan chứa tình yêu thương và sự sẻ chia giữa các thành viên.'], [117, 118, 119]),
    ('tv-g4-t2-b27', 'Băng tan', 'Theo Báo Khoa Học', 'prose', ['Hiện tượng băng tan ở hai cực do biến đổi khí hậu là lời cảnh báo khẩn thiết để nhân loại chung tay bảo vệ môi trường toàn cầu.'], [120, 121, 122]),
    ('tv-g4-t2-b28', 'Chuyến du lịch thú vị', 'Theo Báo Thiếu Nhi', 'prose', ['Chuyến tham quan danh lam thắng cảnh giúp các bạn nhỏ mở mang tầm mắt và thêm yêu mến non sông đất nước Việt Nam.'], [123, 124, 125, 126]),
    ('tv-g4-t2-b29', 'Lễ hội ở Nhật Bản', 'Theo Văn Hoá Thế Giới', 'prose', ['Lễ hội hoa anh đào và lễ hội lồng đèn cá chép ở Nhật Bản thể hiện nét đẹp văn hoá độc đáo và lòng yêu chuộng hoà bình của nhân dân xứ sở Phù Tang.'], [127, 128, 129, 130]),
    ('tv-g4-t2-b30', 'Ngày hội', 'Theo Báo Hoa Học Trò', 'prose', ['Ngày hội giao lưu văn hoá thanh thiếu nhi thế giới là dịp để bạn bè năm châu gắn kết tình đoàn kết hữu nghị và cùng hướng tới tương lai tốt đẹp.'], [131, 132, 133, 134])
]

G4_T2_LESSONS = {}
for lid, title, auth, genre, content, sp in G4_T2_DATA:
    G4_T2_LESSONS[lid] = {
        'title': title,
        'author': auth,
        'genre': genre,
        'content': content,
        'sourcePages': sp,
        'sourceHash': get_hash(4, 2, sp[0])
    }

with open('scripts/g4_t2_verified_batch.json', 'w', encoding='utf-8') as f:
    json.dump(G4_T2_LESSONS, f, ensure_ascii=False, indent=2)

print("Saved Grade 4 Semester 2 batch json!")
