import json
import re
import os

workspace = os.getcwd()

with open(os.path.join(workspace, 'scripts', 'all_376_ocr_combined.json'), 'r', encoding='utf-8') as f:
    ocr_map = json.load(f)

# Comprehensive Vietnamese diacritic and OCR artifact corrector
TYPO_MAP = {
    'ngy': 'ngày', 'Ngy': 'Ngày', 'NGY': 'NGÀY',
    'chgy': 'chạy', 'Chgy': 'Chạy',
    'dgy': 'dạy', 'Dgy': 'Dạy',
    'mơi': 'mai', 'Mơi': 'Mai',
    'bơi': 'bài', 'Bơi': 'Bài',
    'cỏm gióc': 'cảm giác', 'Cỏm gióc': 'Cảm giác',
    'mỡ': 'mà', 'Mỡ': 'Mà',
    'năo': 'nào', 'Năo': 'Nào',
    'nhơ': 'nhà', 'Nhơ': 'Nhà',
    'thột': 'thật', 'Thột': 'Thật',
    'bối': 'bãi', 'Bối': 'Bãi',
    'cót': 'cát', 'Cót': 'Cát',
    'quó': 'quá', 'Quó': 'Quá',
    'lợ': 'lạ', 'Lợ': 'Lạ',
    'uø': 'ưa', 'Uø': 'Ưa',
    'chôn': 'chân', 'Chôn': 'Chân',
    'mối': 'mãi', 'Mối': 'Mãi',
    'tạp': 'tập', 'Tạp': 'Tập',
    'đóng yêu': 'đáng yêu', 'Đóng yêu': 'Đáng yêu',
    'múc': 'mức', 'Múc': 'Mức',
    'bỏo': 'bảo', 'Bỏo': 'Bảo',
    'võ về': 'vỗ về', 'Võ về': 'Vỗ về',
    'lọc tiên': 'lạc tiên', 'Lọc tiên': 'Lạc tiên',
    'phỏng phốt': 'thoang thoảng',
    'vớt vẻo': 'vắt vẻo', 'Vớt vẻo': 'Vắt vẻo',
    'mốp mô': 'nhấp nhô',
    'hơi bên': 'hai bên', 'Hơi bên': 'Hai bên',
    'cây có dợi': 'cây cỏ dại',
    'hới vời': 'hái vài',
    'nhấm nhớp': 'nhấm nháp',
    'đó dăm': 'đá dăm',
    'thổi loẹt xoẹt': 'thái loẹt xoẹt',
    'hót khúc': 'hát khúc',
    'thôn thương': 'thân thương',
    'Ngoơn ngoõn': 'Ngoan ngoãn',
    'ngoơn ngoõn': 'ngoan ngoãn',
    'nóng lợi có kem': 'nắng lại có kem',
    'rốt nhiều': 'rất nhiều', 'Rốt nhiều': 'Rất nhiều',
    'hợt gạo': 'hạt gạo', 'Hợt gạo': 'Hạt gạo',
    'đỡ thấy': 'đã thấy', 'Đỡ thấy': 'Đã thấy',
    'Sóng noy': 'Sáng nay', 'sóng noy': 'sáng nay',
    'Bình mình': 'Bình minh', 'bình mình': 'bình minh',
    'lăn gió mót': 'làn gió mát',
    'Iơn mơn': 'Mơn man', 'iơn mơn': 'mơn man',
    'đôi mớ đờo': 'đôi má đào',
    'Nðy đy': 'Này đây', 'nðy đy': 'này đây',
    'Dập dòn': 'Dập dờn', 'dập dòn': 'dập dờn',
    'cónh cò': 'cánh cò', 'Cónh cò': 'Cánh cò',
    'Cõ dạy': 'Cô dạy', 'cõ dạy': 'cô dạy',
    'dạy hót': 'dạy hát', 'Dạy hót': 'Dạy hát',
    'khéo tay': 'khéo tay',
    'rơ chơi': 'ra chơi', 'Rơ chơi': 'Ra chơi',
    'cũng bạn': 'cùng bạn', 'Cũng bạn': 'Cùng bạn',
    'nóo nức': 'náo nức', 'Nóo nức': 'Náo nức',
    'lợi túm tụm': 'lại túm tụm',
    'say su': 'say sưa', 'Say su': 'Say sưa',
    'Tơn học': 'Tan học', 'tơn học': 'tan học',
    'ùg chạy': 'ùa chạy', 'Ùg chạy': 'Ùa chạy',
    'lúg chín': 'lúa chín', 'Lúg chín': 'Lúa chín',
    'nhịp hớt': 'nhịp hát', 'Nhịp hớt': 'Nhịp hát',
    'lờ': 'là', 'Lờ': 'Là',
    'cới': 'cái', 'Cới': 'Cái',
    'bổi': 'bài', 'Bổi': 'Bài',
    'cõu': 'câu', 'Cõu': 'Câu',
    'hề': 'hè', 'Hề': 'Hè',
    'vỗn': 'vẫn', 'Vỗn': 'Vẫn',
    'vò': 'và', 'Vò': 'Và',
    'mờ': 'mà', 'Mờ': 'Mà',
    'cỏ': 'cả', 'Cỏ': 'Cả',
    'bð': 'bà', 'Bð': 'Bà',
    'nghèo ấy': 'nghèo ấy',
    'gồn gũi': 'gần gũi',
    'bóc': 'bác', 'Bóc': 'Bác',
    'tỏo tồn': 'tảo tần', 'Tỏo tồn': 'Tảo tần',
    'chóu': 'cháu', 'Chóu': 'Cháu',
    'bánh m': 'bánh mì', 'Bánh m': 'Bánh mì',
}

def clean_ocr(text):
    for k, v in TYPO_MAP.items():
        text = text.replace(k, v)
    return text

cleaned_count = 0
for lesson_id, data in ocr_map.items():
    if data.get('rawOcr'):
        for page in data['rawOcr']:
            page['cleanedText'] = clean_ocr(page['text'])
        cleaned_count += 1

with open(os.path.join(workspace, 'scripts', 'all_376_ocr_cleaned.json'), 'w', encoding='utf-8') as f:
    json.dump(ocr_map, f, ensure_ascii=False, indent=2)

print(f"Cleaned {cleaned_count} lesson OCR entries.")
