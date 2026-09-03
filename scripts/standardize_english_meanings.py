import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

# 1. STANDARDIZATION FOR GRADE 2 FLASHCARDS (80 words)
G2_FLASHCARD_MEANINGS = {
    'gloves': 'đôi găng tay',
    'honey': 'mật ong',
    'mother': 'mẹ',
    'son': 'con trai',
    'baby': 'em bé',
    'cake': 'bánh ngọt',
    'grapes': 'chùm nho',
    'table': 'cái bàn',
    'mike': 'Mike',
    'bike': 'xe đạp',
    'five': 'số 5',
    'slide': 'cầu trượt',
    'beach': 'bãi biển',
    'ice cream': 'kem',
    'peach': 'quả đào',
    'tea': 'trà',
    'bee': 'con ong',
    'sheep': 'con cừu',
    'sweets': 'kẹo',
    'tree': 'cái cây',
    'bread': 'bánh mì',
    'breakfast': 'bữa sáng',
    'head': 'đầu',
    'sweater': 'áo len',
    'boat': 'con thuyền',
    'coach': 'xe khách',
    'coast': 'bờ biển',
    'coat': 'áo khoác',
    'balloon': 'quả bóng bay',
    'food': 'thức ăn',
    'school': 'trường học',
    'scooter': 'xe trượt scooter',
    'blouse': 'áo sơ mi nữ',
    'house': 'ngôi nhà',
    'mouse': 'con chuột',
    'trousers': 'quần dài',
    'baker': 'thợ làm bánh',
    'dancer': 'vũ công',
    'driver': 'tài xế',
    'teacher': 'giáo viên',
    'black': 'màu đen',
    'blackberries': 'quả mâm xôi đen',
    'blanket': 'cái chăn',
    'blossom': 'hoa',
    'brian': 'Brian',
    'branch': 'cành cây',
    'bridge': 'cây cầu',
    'brush': 'bàn chải',
    'clock': 'đồng hồ',
    'clothes': 'quần áo',
    'cloud': 'đám mây',
    'clown': 'chú hề',
    'cheese': 'phô mai',
    'cherries': 'quả anh đào',
    'chicken': 'con gà',
    'chocolate': 'sô-cô-la',
    'shoes': 'đôi giày',
    'shop': 'cửa hàng',
    'shorts': 'quần soóc',
    't-shirt': 'áo thun',
    'plane': 'máy bay',
    'plant': 'cây, thực vật',
    'plate': 'cái đĩa',
    'plum': 'quả mận',
    'skating': 'trượt patin',
    'skiing': 'trượt tuyết',
    'skirt': 'chân váy',
    'sky': 'bầu trời',
    'train': 'tàu hỏa',
    'tray': 'cái khay',
    'trolley': 'xe đẩy hàng',
    'truck': 'xe tải',
    'brother': 'anh trai, em trai',
    'feathers': 'lông vũ',
    'grandfather': 'ông',
    'grandmother': 'bà',
    'mouth': 'miệng',
    'throat': 'cổ họng',
    'thumb': 'ngón tay cái',
    'tooth': 'răng',
}

# Update grade2PdfFlashcardsData.ts
with open('src/data/curriculum/english/grade2PdfFlashcardsData.ts', 'r', encoding='utf-8') as f:
    fc_content = f.read()

for word, meaning in G2_FLASHCARD_MEANINGS.items():
    # regex match word block and replace its meaning
    pattern = rf"(word:\s*'{re.escape(word)}',\s*phonetic:\s*'[^']+',\s*meaning:\s*)'[^']+'"
    fc_content = re.sub(pattern, rf"\1'{meaning}'", fc_content)

with open('src/data/curriculum/english/grade2PdfFlashcardsData.ts', 'w', encoding='utf-8') as f:
    f.write(fc_content)
print("Updated grade2PdfFlashcardsData.ts with clean standardized meanings!")

# 2. STANDARDIZATION FOR SGK READING PASSAGES (Clean up verbose explanations)
with open('src/data/curriculum/english/readingPassages.ts', 'r', encoding='utf-8') as f:
    rp_content = f.read()

READING_PASSAGE_CLEANUPS = {
    'quả bóng (dùng để chơi đá bóng, ném bóng)': 'quả bóng',
    'xe đạp (phương tiện hai bánh bé đi dạo)': 'xe đạp',
    'cuốn sách (chứa các câu chuyện và bài học bổ ích)': 'cuốn sách',
    'bánh ngọt, bánh kem sinh nhật': 'bánh ngọt',
    'con mèo (bạn mèo nhỏ đáng yêu)': 'con mèo',
    'cái tách, cái cốc uống nước': 'cái tách, cốc',
    'quả táo (trái cây màu đỏ ngọt giòn)': 'quả táo',
    'con quay đồ chơi, đỉnh trên cùng': 'con quay',
    'người hâm mộ, cổ động viên': 'cổ động viên',
    'câu đố, bài kiểm tra nhanh': 'câu đố',
    'cộng (+)': 'cộng',
    'trừ (-)': 'trừ',
    'xin chào (lịch sự)': 'xin chào',
    'chào bạn (thân mật)': 'chào bạn',
    'mắt (dùng để nhìn)': 'mắt',
    'mũi (dùng để ngửi)': 'mũi',
    'miệng (dùng để nói và ăn)': 'miệng',
    'tai (dùng để nghe)': 'tai',
    'tay (bàn tay dùng để cầm nắm)': 'bàn tay',
    'chân (dùng để đi lại)': 'chân',
}

for old, new in READING_PASSAGE_CLEANUPS.items():
    rp_content = rp_content.replace(f'"meaning": "{old}"', f'"meaning": "{new}"')

with open('src/data/curriculum/english/readingPassages.ts', 'w', encoding='utf-8') as f:
    f.write(rp_content)
print("Updated readingPassages.ts with clean standardized meanings!")
