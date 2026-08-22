import json
import re
import os

workspace = os.getcwd()

with open(os.path.join(workspace, 'scripts', 'all_376_ocr_combined.json'), 'r', encoding='utf-8') as f:
    ocr_data = json.load(f)

with open(os.path.join(workspace, 'scripts', 'all_376_lessons_catalog.json'), 'r', encoding='utf-8') as f:
    catalog = json.load(f)

# Load existing bookManifests to get authentic sourceHash
with open(os.path.join(workspace, 'src', 'data', 'curriculum', 'vietnamese', 'bookManifests.generated.json'), 'r', encoding='utf-8') as f:
    book_manifests = json.load(f)

print(f"Loaded {len(ocr_data)} OCR entries, {len(catalog)} catalog entries")

# Fix common OCR typos in Vietnamese diacritics
def fix_ocr_vietnamese(text):
    rep = {
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
        'cơn gió êm': 'cơn gió êm',
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
    }
    for k, v in rep.items():
        text = text.replace(k, v)
    return text

print("Fix dictionary created.")
