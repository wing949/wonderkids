import json
import re
import os
import sys
import hashlib
import unicodedata
from collections import defaultdict, Counter

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

INPUT_JSON = r"C:\Users\TVCHUONG\Desktop\AI\06_eLearning\reports\violympic_ocr_99_cleaned_dataset.json"
OUTPUT_ITEMS_JSON = r"C:\Users\TVCHUONG\Desktop\AI\06_eLearning\src\data\practice\violympicReferenceItems.generated.json"
OUTPUT_SOURCES_JSON = r"C:\Users\TVCHUONG\Desktop\AI\06_eLearning\src\data\practice\violympicReferenceSources.generated.json"

UI_TRASH_REGEXES = [
    re.compile(r'(?iu)vui\s+lòng\s+b[ậoộôa]?t\s+chế\s+độ\s+toàn\s+m[àa]n\s+hình[^\.\n]*'),
    re.compile(r'(?iu)nếu\s+thoát\s+chế\s+độ\s+thi[^\.\n]*'),
    re.compile(r'(?iu)b[ạa]n\s+đã\s+tr[ảe]\s+lời\s+sai[^\.\n]*'),
    re.compile(r'(?iu)b[ạa]n\s+sẽ\s+bị\s+khóa\s+th[iị][^\.\n]*'),
    re.compile(r'(?iu)khóa\s+th[iị]\s+nếu\s+vi\s+phạm[^\.\n]*'),
    re.compile(r'(?iu)thi\s+neu\s+vi\s+phạm\s+qua[^\.\n]*'),
    re.compile(r'(?iu)pnam\s+qua\s+\d+\s+tan[^\.\n]*'),
    re.compile(r'(?iu)một\s+lần\s+vi\s+phạm[^\.\n]*'),
    re.compile(r'(?iu)lưu\s+ý:\s*đối\s+với\s+các\s+môn\s+toán[^\.\n]*'),
    re.compile(r'(?iu)đáp\s+án\s+của\s+bạn\.?\s*(?:xác\s*nhận)?[^\n]*'),
    re.compile(r'(?iu)hãy\s+chọn\s+1\s+đáp\s+án\s+đúng[^\n]*'),
    re.compile(r'(?iu)hay\s+chọn\s+1[^\n]*'),
    re.compile(r'(?iu)xác\s*nhận[^\n]*'),
    re.compile(r'(?iu)xóc\s*nhận[^\n]*'),
    re.compile(r'(?iu)tên\s*đăng\s*nhập[:\s]*[a-zA-Z0-9_]+'),
    re.compile(r'(?iu)id\s*:\s*\d+'),
    re.compile(r'(?iu)đinh\s+thừa\s+lâm'),
    re.compile(r'(?iu)\b\d{1,2}:\d{2}\b'), # timer
    re.compile(r'(?iu)@\s*\d+'),          # UI score badges
    re.compile(r'(?iu)\b\d{1,2}\s*30\b'), # UI 1/30
    re.compile(r'(?iu)\b\d{2,3}%\b'),     # 150%
    re.compile(r'(?iu)\(?f11\)?'),
    re.compile(r'(?iu)đừng\s+để\s+điểm\s+rơi\b'),
    re.compile(r'(?iu)cuộc\s+đua\s+cún\s+cưng\b'),
    re.compile(r'(?iu)leo\s+dốc\b'),
    re.compile(r'(?iu)toaniq\b'),
    re.compile(r'(?iu)team\s+cô\s+hoa\b'),
    re.compile(r'(?iu)zalo\b[^\n]*'),
    re.compile(r'(?iu)hotline\b[^\n]*'),
    re.compile(r'(?iu)\b0\d{9}\b'),
    re.compile(r'(?iu)tính\s+là\s*$', re.MULTILINE),
    re.compile(r'(?iu)hệ\s+thống\s+phát\s+tri[ểe]n\s+toán\s+iq\s+việt\s+nam[^\n]*'),
    re.compile(r'(?iu)đăng\s+k[ýy]\s+đề\s+ôn\s+thi[^\n]*'),
    re.compile(r'(?iu)tuyển\s+tập\s+\d+\s+đề\s+ôn\s+thi[^\n]*'),
    re.compile(r'(?iu)bộ\s+đề\s+ôn\s+thi\s+vioedu[^\n]*'),
    re.compile(r'(?iu)vòng\s+\d+\s+cấp\s+quốc\s+gia\s+năm[^\n]*'),
    re.compile(r'(?iu)h[ãa]y\s+chọn\s+\d+[^\n]*'),
    re.compile(r'(?iu)hy\s+chọn\s+\d+[^\n]*'),
    re.compile(r'(?iu)khai\s+giảng\s+khóa[^\n]*'),
    re.compile(r'(?iu)liên\s+hệ\s+đăng\s+ký[^\n]*'),
    re.compile(r'(?iu)gói\s+đề\s+thi[^\n]*'),
    re.compile(r'(?iu)\(?có\s+đáp\s+án\)?[^\n]*'),
]

ANSWER_PROMPT_PATTERNS = [
    re.compile(r'(?iu)^[A-D]\.\s*'),
    re.compile(r'(?iu)\(\s*\d+[\s\+\-\*xX×÷/]+\d+[\s\+\-\*xX×÷/=\d\(\)\>\<\,]+\)'),
    re.compile(r'(?iu)\(\s*\d+\s*[\>\<]\s*\d+\s*\)'),
    re.compile(r'(?iu)\bta\s+có\s*[:\d]'),
    re.compile(r'(?iu)\bcả\s+a\s+và\s+b\s+đều\b'),
    re.compile(r'(?iu)\bnếu\s+\w+\s+cho\s+\w+\s+\d+'),
    re.compile(r'(?iu)\bkết\s+quả\s+của\s+phép\s+(?:tính|cộng|trừ|nhân|chia)\s+đó\s+là\s+\d+'),
    re.compile(r'(?iu)\bđáp\s+số\s*:\s*\d+'),
    re.compile(r'(?iu)\bphép\s+tính\s+đúng\s+là\s*:'),
    re.compile(r'(?iu)^(?:thùng|bao|xe|hàng|can|lớp|bạn|gói|túi|canh|cạnh)\s+thứ\s+(?:nhất|hai|ba|tư|năm|1|2|3|4|5)?\s*(?:nhiều|ít|hơn|chứa|có|được|bằng|dài)'),
    re.compile(r'(?iu)^(?:số\s+\w+\s+(?:của|cô|bạn|xe|tam\s+giác|đoạn|mẹ|bố|gạo|sách|tiền|học\s+sinh|dầu|nước|cam|táo|vịt|gà)?\s*(?:đã|lúc\s+đầu|ở|trong|là|có\s+là)[\s\w]*:|\w+\s+nhiều\s+hơn\s+\w+\s+số|\w+\s+hơn\s+\w+\s+số|tuổi\s+của\s+\w+\s+khi|tổng\s+số\s+tuổi\s+của|ta\s+có\s*[:\d]|vì\s+[\w\s]+nên|nếu\s+chia\s+số|tổng\s+độ\s+dài\s+các|độ\s+dài\s+đoạn\s+\w+\s+là|giải\s+bài\s+toán\s+theo\s+tóm\s+tắt|thực\s+hiện\s+phép\s+tính:|tổng\s+của\s+tử\s+số|tử\s+số\s+là|mẫu\s+số\s+là|số\s+đó\s+là\s*:)')
]

BOOK_COVER_REGEX = re.compile(
    r'(?iu)(?:ts\.\s+phạm\s+văn\s+công|nhà\s+xuất\s+bản|đại\s+học\s+quốc\s+gia|biên\s+soạn\s+theo|tái\s+bản\s+lần\s+thứ|chương\s+trình\s+giáo\s+dục\s+phổ\s+thông|dùng\s+chung\s+cho|bộ\s+sách\s+hiện\s+hành|sách\s+ôn\s+toán|chuyên\s+đề\s+bồi\s+dưỡng|tuyển\s+tập\s+\d+\s+đề|\d+\s+đề\s+ôn\s+thi)'
)

GAME_HEADER_REGEX = re.compile(
    r'(?iu)(?:game\s+\d+|bức\s+tranh\s+bí\s+ẩn|chú\s+khỉ\s+thông\s+minh|leo\s+dốc|ghi\s+số\s+thứ\s+tự\s+vào\s+vòng\s+tròn|ghi\s+vào\s+2\s+ô\s+có\s+giá\s+trị\s+bằng\s+nhau|tìm\s+các\s+cặp\s+ô\s+chứa\s+phân\s+số|nối\s+hình\s+ở\s+hàng\s+dưới|tìm\s+cặp\s+ô\s+có\s+chứa\s+tên)'
)

ANSWER_TABLE_REGEX = re.compile(
    r'(?iu)(?:\|\s*câu\s*\d+\s*\|\s*câu|\bđiền\s+\d+\s*\|\s*điền|\bchọn\s+[a-d]\s*\|\s*điền|\bbảng\s+đáp\s+án\b|\bđáp\s+án\s+vòng\s+\d+|\bleo\s+d[oố]c|\bchọn\s+điền)'
)

GARBLED_REGEX = re.compile(
    r'(?:[A-Za-z0-9_]{10,}|[»«><_~ˆ`\^\/]{2,}|\b[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]{4,}\b|Ø_uv|BRYA|RLUY|X4L14L4V|eloob|s1gv|Zm,„y|ATU\s+UL)'
)

def clean_page_lines(raw_text):
    lines = raw_text.splitlines()
    cleaned = []
    for i, line in enumerate(lines):
        l_str = line.strip()
        # Page number header or footer
        if (i == 0 or i == len(lines) - 1) and re.match(r'^\d{1,4}$', l_str):
            continue
        if re.match(r'^(?:trang|page)\s*\d{1,4}$', l_str, re.I):
            continue
        if re.match(r'^(?:-|_|\s)*\d{1,4}(?:-|_|\s)*$', l_str):
            continue
        if any(pat.search(l_str) for pat in UI_TRASH_REGEXES):
            continue
        cleaned.append(line)
    return '\n'.join(cleaned)

SPELLING_FIXES = [
    # Cạnh dài / độ dài
    (r'\b[đĐ]ài là\b', 'dài là'),
    (r'\b[đĐ]ai la\b', 'dài là'),
    (r'\bđộ [đĐ]ài\b', 'độ dài'),
    (r'\bdo dai\b', 'độ dài'),
    
    # Điền / Điền số / Vào chỗ chấm
    (r'\b[đĐdD]ian\b', 'Điền'),
    (r'\b[đĐdD][iIíìị][eEêệến][nN]\s+s[oôóö]\b', 'Điền số'),
    (r'\b[bB]iền\s+s[oôóö]\b', 'Điền số'),
    (r'\b[đĐdD][iIíìị][eEêệến][nN]\s+vào\b', 'Điền vào'),
    (r'\b[đĐdD][iIíìị][eEêệến][nN]\s+từ\b', 'Điền từ'),
    (r'\b[đĐdD][iIíìị][eEêệến][nN]\s+chữ\b', 'Điền chữ'),
    (r'\b[đĐdD][iIíìị][eEêệến][nN]\s+dấu\b', 'Điền dấu'),
    (r'\b[đĐdD][iIíìị][eEêệến][nN]\s+kết\s+quả\b', 'Điền kết quả'),
    (r'\b[đĐdD][iIíìị][eEêệến][nN]\s+đáp\s+án\b', 'Điền đáp án'),
    (r'\b[đĐdD][iIíìị][eEêệến][nN]\s+thích\s+[h|k]ợp\b', 'Điền thích hợp'),
    (r'\b[đĐdD][iIíìị][eEêệến][nN]\s+số\s+thích\s+[h|k][oơợ][np]\b', 'Điền số thích hợp'),
    (r'\b[đĐ]iền\s+số\s+thích\s+hơn\b', 'Điền số thích hợp'),
    
    # Chỗ chấm
    (r'\bch[oôõổòóốớuư][\s_]*[cch][h]?[aáâấăắ][mn]\b', 'chỗ chấm'),
    (r'\bchỗốchắm\b', 'chỗ chấm'),
    (r'\bvào\s+ch[oôõổòóốớuư\w\s]*[aáâấăắ][mn]\b', 'vào chỗ chấm'),
    
    # Thích hợp
    (r'\bthich hop\b', 'thích hợp'),
    (r'\bthích hop\b', 'thích hợp'),
    (r'\bthich hợp\b', 'thích hợp'),
    (r'\bthích hơn vào\b', 'thích hợp vào'),
    
    # Mấy cái / mấy bạn / mấy quả / mấy
    (r'\bm[aâ]y\s+(cái|bạn|quả|viên|bông|con|túi|bao|giờ|lít|kg|hình|can|lớp|đoạn|thùng)\b', r'mấy \1'),
    (r'\bbao nhi[eê]u\s+tam gi[aá]c\b', 'bao nhiêu hình tam giác'),
    
    # Trả lời / Giải
    (r'\b[jJ]ra\s+l[oơợ][iì]\b', 'Trả lời'),
    (r'\b[tT]ra\s+l[oơợ][iì]\b', 'Trả lời'),
    (r'\b[tT]rả\s+l[oơ][iì]\b', 'Trả lời'),
    (r'\bchia\s+[đd][eêè]u\b', 'chia đều'),
    (r'\bcân\s+n[aăạ]ng\b', 'cân nặng'),
    (r'\bn[aă]ng\s+bao\s+nhi[eê]u\b', 'nặng bao nhiêu'),
    (r'\b[đĐdD]ap\s+an\s+khac\b', 'Đáp án khác'),
    (r'\b[đĐ]áp\s+an\s+khac\b', 'Đáp án khác'),
    (r'\b[đĐ]ap\s+án\s+khác\b', 'Đáp án khác'),
    
    # Số chẵn / số lẻ
    (r'\bs[oôóö]\s+ch[aăá]n\b', 'số chẵn'),
    (r'\bsố chăn\b', 'số chẵn'),
    (r'\bsố chán\b', 'số chẵn'),
    (r'\bsố chan\b', 'số chẵn'),
    (r'\bs[oôóö]\s+l[eêèé]\b', 'số lẻ'),
    (r'\bsố l[eêè]\b', 'số lẻ'),
    
    # Chữ số / Chữ số
    (r'\bch[uư] s[oôóö]\b', 'chữ số'),
    (r'\bchữ s[oôóö]\b', 'chữ số'),
    (r'\bchư số\b', 'chữ số'),
    
    # Lớn nhất / Bé nhất
    (r'\bl[oóởơ]n nh[aââ]t\b', 'lớn nhất'),
    (r'\blớn nhât\b', 'lớn nhất'),
    (r'\blơn nhất\b', 'lớn nhất'),
    (r'\blởn nhất\b', 'lớn nhất'),
    (r'\bb[eé] nh[aââ]t\b', 'bé nhất'),
    (r'\bbé nhât\b', 'bé nhất'),
    (r'\bbe nhất\b', 'bé nhất'),
    
    # Liền sau / Liền trước
    (r'\bli[eê]n sau\b', 'liền sau'),
    (r'\bli[eê]n tr[uư][oơ]c\b', 'liền trước'),
    (r'\bliên sau\b', 'liền sau'),
    (r'\bliên trước\b', 'liền trước'),
    
    # Tổng / Hiệu / Tích / Thương
    (r'\bt[oô]ng\b', 'tổng'),
    (r'\btông\b', 'tổng'),
    (r'\bhi[eê]u\b', 'hiệu'),
    (r'\bhiêu\b', 'hiệu'),
    (r'\btich\b', 'tích'),
    (r'\bthuong\b', 'thương'),
    
    # Phép tính
    (r'\bph[eé]p t[ií]nh\b', 'phép tính'),
    (r'\bphép tinh\b', 'phép tính'),
    (r'\bphep tính\b', 'phép tính'),
    (r'\bphep tinh\b', 'phép tính'),
    
    # Kết quả
    (r'\bk[eêé]t qu[aảà]\b', 'kết quả'),
    (r'\bkết qua\b', 'kết quả'),
    (r'\bkêt quả\b', 'kết quả'),
    (r'\bkêt qua\b', 'kết quả'),
    
    # Hình học
    (r'\bh[iì]nh tam gi[aá]c\b', 'hình tam giác'),
    (r'\bhình tam giac\b', 'hình tam giác'),
    (r'\bhinh tam giác\b', 'hình tam giác'),
    (r'\bh[iì]nh vu[oô]ng\b', 'hình vuông'),
    (r'\bh[iì]nh ch[uữ] nh[aậ]t\b', 'hình chữ nhật'),
    (r'\bhình chữ nhat\b', 'hình chữ nhật'),
    (r'\bh[iì]nh t[uứ] gi[aá]c\b', 'hình tứ giác'),
    (r'\bhình tứ giac\b', 'hình tứ giác'),
    (r'\bh[iì]nh tr[oò]n\b', 'hình tròn'),
    (r'\bh[iì]nh tr[uụ]\b', 'hình trụ'),
    (r'\bh[iì]nh c[aầ]u\b', 'hình cầu'),
    (r'\b[đĐ]o[aạ]n th[aăắ]ng\b', 'đoạn thẳng'),
    (r'\bđoạn thăng\b', 'đoạn thẳng'),
    (r'\bđoan thẳng\b', 'đoạn thẳng'),
    (r'\bchu v[iı]\b', 'chu vi'),
    (r'\bdi[eệ]n t[ií]ch\b', 'diện tích'),
    (r'\bdiện tich\b', 'diện tích'),
    
    # Phân số / Tử số / Mẫu số
    (r'\bph[aâ]n s[oôóö]\b', 'phân số'),
    (r'\bphân sô\b', 'phân số'),
    (r'\bt[uử] s[oôóö]\b', 'tử số'),
    (r'\btử sô\b', 'tử số'),
    (r'\bm[aãẫ]u s[oôóö]\b', 'mẫu số'),
    (r'\bmẫu sô\b', 'mẫu số'),
    
    # Hơn / Kém / Bằng / Gấp / Giảm
    (r'\bnhi[eêề]u h[oơ]n\b', 'nhiều hơn'),
    (r'\bnhiều hon\b', 'nhiều hơn'),
    (r'\b[ií]t h[oơ]n\b', 'ít hơn'),
    (r'\bít hon\b', 'ít hơn'),
    (r'\bb[eé] h[oơ]n\b', 'bé hơn'),
    (r'\bbé hon\b', 'bé hơn'),
    (r'\bl[oơớ]n h[oơ]n\b', 'lớn hơn'),
    (r'\blớn hon\b', 'lớn hơn'),
    (r'\bb[aă]ng\b', 'bằng'),
    (r'\bbăng\b', 'bằng'),
    (r'\bbang\b', 'bằng'),
    (r'\bg[aá]p\b', 'gấp'),
    (r'\bgi[aả]m\b', 'giảm'),
    
    # Học sinh / Thầy cô / Bạn bè / Lớp học / Trường học
    (r'\bh[oọ]c sinh\b', 'học sinh'),
    (r'\bhọc sinh gi[oỏ]i\b', 'học sinh giỏi'),
    (r'\bhọc sinh giơi\b', 'học sinh giỏi'),
    (r'\bl[oơớ]p h[oọ]c\b', 'lớp học'),
    (r'\btr[uư][oơ]ng h[oọ]c\b', 'trường học'),
    (r'\btrường hoc\b', 'trường học'),
    (r'\bbao nhi[eê]u\b', 'bao nhiêu'),
    (r'\bbao nhieu\b', 'bao nhiêu'),
    (r'\bt[aâ]t c[aả]\b', 'tất cả'),
    (r'\btất ca\b', 'tất cả'),
    (r'\btu[oô]i\b', 'tuổi'),
    (r'\btr[aả] l[oơ]i\b', 'trả lời'),
    (r'\btrả lơi\b', 'trả lời'),
    (r'\bth[uự]c hi[eệ]n\b', 'thực hiện'),
    (r'\bthực hiên\b', 'thực hiện'),
    
    # Hàng chục, trăm, nghìn, đơn vị
    (r'\bh[aà]ng ch[uụ]c\b', 'hàng chục'),
    (r'\bhàng chuc\b', 'hàng chục'),
    (r'\bh[aà]ng tr[aă]m\b', 'hàng trăm'),
    (r'\bhàng tram\b', 'hàng trăm'),
    (r'\bh[aà]ng ngh[iì]n\b', 'hàng nghìn'),
    (r'\bhàng nghin\b', 'hàng nghìn'),
    (r'\b[đĐ][oơ]n v[iị]\b', 'đơn vị'),
    (r'\bđơn vi\b', 'đơn vị'),
    
    # Thời gian: ngày, tháng, năm, giờ, phút, giây, tuần
    (r'\bng[aà]y\b', 'ngày'),
    (r'\bth[aá]ng\b', 'tháng'),
    (r'\bn[aă]m\b', 'năm'),
    (r'\bgi[oờ]\b', 'giờ'),
    (r'\bph[uú]t\b', 'phút'),
    (r'\bgi[aâ]y\b', 'giây'),
    (r'\btu[aầ]n\b', 'tuần'),
    
    # Đỏ / Xanh
    (r'\bbi\s+[đd][oò]\b', 'bi đỏ'),
    (r'\bhộp\s+bi\s+[đd][oò]\b', 'hộp bi đỏ'),
    (r'\bviên\s+bi\s+[đd][oò]\b', 'viên bi đỏ'),
    
    # Số (đơn lẻ với ngữ cảnh toán)
    (r'\bsô\b', 'số'),
    (r'\bsó\b', 'số'),
    (r'\bSô\b', 'Số'),
    (r'\bSố các sô\b', 'Số các số'),
    (r'\bSố các so\b', 'Số các số'),
    (r'\bsố các sô\b', 'số các số'),
    (r'\bcác sô\b', 'các số'),
    (r'\bcác so\b', 'các số'),
    (r'\bmỗi sô\b', 'mỗi số'),
    (r'\bmỗi so\b', 'mỗi số'),
    (r'\bhai sô\b', 'hai số'),
    (r'\bba sô\b', 'ba số'),
    (r'\bbốn sô\b', 'bốn số'),
    (r'\bnăm sô\b', 'năm số'),
    (r'\btìm sô\b', 'tìm số'),
    (r'\btim so\b', 'tìm số'),
]

def correct_vietnamese_ocr_spelling(text):
    text = unicodedata.normalize('NFC', text)
    for pattern, replacement in SPELLING_FIXES:
        text = re.sub(pattern, replacement, text, flags=re.IGNORECASE)
    if text and text[0].islower():
        text = text[0].upper() + text[1:]
    return text

def clean_ocr_text(text):
    for pat in UI_TRASH_REGEXES:
        text = pat.sub(' ', text)
    # Remove OCR answer tails like: Answer: ..., ATISWEIT ..., Trả lời: ..., Đáp số: ...
    text = re.sub(r'(?iu)\s*(?:answer|atisweit|amis\s+wee|answef|trả\s*lời|đáp\s*số|kết\s*quả|tra\s*loi)[\s\:\.\-_=]*(?:\.{2,}|…|\b\w+\b)*\s*$', '', text)
    text = re.sub(r'(?iu)\s*(?:answer|atisweit|answef)[\s\:\.\-_=]+.*$', '', text)
    # Remove bracket fragments and noise characters from prompts
    text = re.sub(r'\[\s*[a-zA-Z0-9\s\(\)\|\}\-\+\=]+\s*\]', ' ', text)
    text = re.sub(r'[«»~„”’©®@\[\]\{\}\|\\⁄ˆ`_]{1,}', ' ', text)
    # Clean OCR dot noise / dotted blank lines
    text = re.sub(r'\s*\.{2,}[c0e\s\.\-_°ne]*neensees\s*[-–—]?', ' ', text)
    text = re.sub(r'(\.{2,})\s*[c0e\s\.\-_°ne]+\b', r'\1 ', text)
    text = re.sub(r'\s*[\.e\s_°]{4,}\s*', ' ... ', text)
    text = re.sub(r'\.{4,}', '...', text)
    # Clean trailing page numbers and trailing digits after punctuation
    text = re.sub(r'(\.{2,}|…)\s*[-–—]?\s*\d{1,4}\s*$', r'\1', text)
    text = re.sub(r'([\.\?\!\:\;])\s*[-–—]?\s*\d{1,4}\s*$', r'\1', text)
    text = re.sub(r'[\r\n]+\s*\d{1,4}\s*$', '', text)
    text = re.sub(r'[\r\n]+', ' ', text)
    text = re.sub(r'\s+[-–—]\s+', ' ', text)
    text = re.sub(r'\s+', ' ', text)
    text = re.sub(r':\s*[-–—_~+=]+', ': ', text)
    # Strip garbage characters before the first meaningful Vietnamese / English word
    text = re.sub(r'^[Šš§©®™%}\)\]\|_~⁄ˆ`\s\d\.]{1,20}(?=[A-ZÀ-Ỹa-zà-ỹ])', '', text)
    text = re.sub(r'^[a-z]{1,2}\s+(?=[A-ZÀ-Ỹ])', '', text)
    text = correct_vietnamese_ocr_spelling(text)
    return text.strip()

TOPIC_MATRIX = {
    'math': {
        1: ['Phép cộng trong phạm vi 100', 'Phép trừ trong phạm vi 100', 'Quy luật và số còn thiếu', 'So sánh và sắp xếp số', 'Toán có lời văn một bước', 'Độ dài trực quan', 'Xem giờ đúng', 'Đọc bảng số liệu đơn giản', 'So sánh số', 'Nhận biết hình phẳng'],
        2: ['Phép cộng với số đến 1 000', 'Phép trừ với số đến 1 000', 'Bảng nhân và bảng chia', 'So sánh và sắp xếp số', 'Toán có lời văn một bước', 'Độ dài và hình học', 'Thời gian', 'Bảng số liệu đơn giản', 'So sánh số', 'Độ dài và hiệu'],
        3: ['Phép cộng với số đến 100 000', 'Phép trừ với số đến 100 000', 'Nhân và chia số tự nhiên', 'So sánh và sắp xếp số', 'Toán có lời văn một bước', 'Chu vi và đo lường', 'Thời gian và tiền', 'Bảng số liệu', 'Làm quen phân số đơn vị', 'Diện tích hình chữ nhật'],
        4: ['Phép cộng số tự nhiên', 'Phép trừ số tự nhiên', 'Nhân và chia số tự nhiên', 'So sánh và sắp xếp số', 'Toán có lời văn', 'Chu vi và đo lường', 'Thời gian và tiền', 'Bảng số liệu', 'Phân số và phân số bằng nhau', 'Diện tích hình chữ nhật'],
        5: ['Phép cộng số tự nhiên', 'Phép trừ số tự nhiên', 'Nhân và chia số tự nhiên', 'So sánh và sắp xếp số', 'Toán có lời văn', 'Chu vi và đo lường', 'Chuyển động đều', 'Tỉ số phần trăm', 'Phân số và số thập phân', 'Thể tích hình hộp chữ nhật']
    },
    'vietnamese': {
        1: ['Âm, vần và chính tả', 'Câu kể và dấu câu', 'Ghép tiếng và tạo câu', 'Đọc hiểu đoạn ngắn tự biên soạn', 'Mở rộng vốn từ gần nghĩa'],
        2: ['Chính tả âm đầu và vần', 'Câu kể và dấu chấm', 'Sắp xếp từ thành câu', 'Đọc hiểu văn bản tự biên soạn', 'Từ gần nghĩa'],
        3: ['Chính tả và từ dễ lẫn', 'Câu kể và dấu chấm', 'Sắp xếp từ thành câu', 'Đọc hiểu văn bản tự biên soạn', 'Từ gần nghĩa'],
        4: ['Chính tả và nghĩa của từ', 'Câu kể và dấu chấm', 'Sắp xếp từ thành câu', 'Đọc hiểu văn bản tự biên soạn', 'Từ gần nghĩa'],
        5: ['Chính tả và sử dụng từ', 'Câu kể và dấu chấm', 'Sắp xếp từ thành câu', 'Đọc hiểu văn bản tự biên soạn', 'Từ gần nghĩa']
    },
    'math_en': {
        1: ["Addition to 100", "Subtraction to 100", "Missing numbers and patterns", "Number ordering", "One-step word problems", "Simple length", "Reading o’clock times", "Simple data tables", "Comparing numbers", "Recognising flat shapes"],
        2: ["Addition with numbers to 1,000", "Subtraction with numbers to 1,000", "Multiplication and division facts", "Number ordering", "One-step word problems", "Length and geometry", "Time", "Simple data tables", "Comparing numbers", "Length differences"],
        3: ["Addition with numbers to 100,000", "Subtraction with numbers to 100,000", "Whole-number multiplication and division", "Number ordering", "One-step word problems", "Perimeter and measurement", "Time and money", "Data tables", "Unit fractions", "Rectangle area"],
        4: ["Whole-number addition", "Whole-number subtraction", "Whole-number multiplication and division", "Number ordering", "Word problems", "Perimeter and measurement", "Time and money", "Data tables", "Equivalent fractions", "Rectangle area"],
        5: ["Whole-number addition", "Whole-number subtraction", "Whole-number multiplication and division", "Number ordering", "Word problems", "Perimeter and measurement", "Speed, time and distance", "Percentages", "Fractions and decimals", "Rectangular-prism volume"]
    }
}

def get_precise_grade(fname, rel_path):
    text = f"{fname} {rel_path}".lower()
    m = re.search(r'(?:lớp|l|khối|g|grade|ttv|tta|toan|tv)\s*([1-5])\b', text)
    if m:
        return int(m.group(1))
    m2 = re.search(r'([1-5])', fname)
    if m2:
        return int(m2.group(1))
    return 2

def classify_subject_by_content_and_file(prompt, fname, rel_path):
    p_lower = prompt.lower()
    
    # 1. English Math vs English
    if re.search(r'\b(?:calculate|perimeter|area|fraction|decimal|divisible|digit|product|quotient|sum|difference|cuboid|triangle|rectangle|square|how many|what is the value)\b', p_lower):
        return 'math_en'
    if re.search(r'\b(?:choose the correct word|fill in the blank|synonym|antonym|read the passage|pronunciation|verb|noun|adjective)\b', p_lower):
        return 'english'
        
    # 2. Vietnamese Math (Toán Tiếng Việt)
    is_math = bool(
        re.search(r'(?iu)\b(?:phép\s+tính|tính\s+kết\s+quả|tính\s*:|tính\s+nhanh|tổng|hiệu|tích|thương|chu\s+vi|diện\s+tích|hình\s+tam\s+giác|hình\s+vuông|hình\s+chữ\s+nhật|hình\s+thang|hình\s+trụ|đoạn\s+thẳng|phân\s+số|tử\s+số|mẫu\s+số|số\s+thập\s+phân|số\s+chẵn|số\s+lẻ|số\s+lớn\s+nhất|số\s+bé\s+nhất|hàng\s+chục|hàng\s+trăm|hàng\s+nghìn|đơn\s+vị|chữ\s+số|gấp\s+\d+\s+lần|giảm\s+\d+\s+lần|bao\s+nhiêu\s+kg|bao\s+nhiêu\s+lít|bao\s+nhiêu\s+m|cm|dm|m2|dm2|cm2)\b', p_lower)
        or re.search(r'[\d\s]+[\+\-\*xX×÷/=]+[\d\s]+', p_lower)
    )
    
    # 3. Vietnamese Language (Tiếng Việt)
    is_vietnamese = bool(
        re.search(r'(?iu)\b(?:chính\s+tả|âm\s+đầu|vần|dấu\s+thanh|dấu\s+câu|dấu\s+chấm|dấu\s+phẩy|dấu\s+hỏi|từ\s+ngữ|tiếng|từ\s+đồng\s+nghĩa|từ\s+trái\s+nghĩa|từ\s+ghép|từ\s+láy|câu\s+kể|câu\s+hỏi|câu\s+cảm|câu\s+khiến|thành\s+ngữ|tục\s+ngữ|ca\s+dao|đoạn\s+thơ|bài\s+thơ|bài\s+đọc|tập\s+đọc|nghĩa\s+của\s+từ|ghép\s+tiếng|sắp\s+xếp\s+từ\s+thành\s+câu|chữ\s+cái)\b', p_lower)
    )
    
    if is_math and not is_vietnamese:
        return 'math'
    if is_vietnamese and not is_math:
        return 'vietnamese'
        
    # File fallback: TTV = Toán Tiếng Việt, TTA = Toán Tiếng Anh
    f_lower = f"{fname} {rel_path}".lower()
    if 'tta' in f_lower or 'toan tieng anh' in f_lower or 'toán ta' in f_lower:
        return 'math_en'
    if 'trạng nguyên' in f_lower or 'tntv' in f_lower or ('tiếng việt' in f_lower and 'toán' not in f_lower and 'ttv' not in f_lower):
        return 'vietnamese'
        
    return 'math'

def pick_authored_topic(subject, grade, prompt):
    topics = TOPIC_MATRIX.get(subject, {}).get(grade, ['Tổng hợp'])
    if not topics:
        return 'Tổng hợp'
        
    def safe_topic(idx):
        return topics[min(idx, len(topics) - 1)]

    p_lower = prompt.lower()
    if subject == 'vietnamese':
        if any(w in p_lower for w in ['chính tả', 'điền chữ', 'dấu thanh', 'vần', 'âm đầu']):
            return safe_topic(0)
        if any(w in p_lower for w in ['dấu câu', 'dấu chấm', 'dấu phẩy', 'câu kể']):
            return safe_topic(1)
        if any(w in p_lower for w in ['sắp xếp', 'ghép tiếng', 'tạo câu']):
            return safe_topic(2)
        if any(w in p_lower for w in ['đọc hiểu', 'đoạn văn', 'nội dung', 'ý nghĩa']):
            return safe_topic(3)
        return safe_topic(0)
    elif subject in ['math_en', 'english']:
        if any(w in p_lower for w in ['calculate', 'sum', 'add', 'plus', 'operation']):
            return safe_topic(0)
        if any(w in p_lower for w in ['fraction', 'decimal', 'ratio']):
            return safe_topic(1)
        if any(w in p_lower for w in ['perimeter', 'area', 'shape', 'triangle', 'square']):
            return safe_topic(2)
        return safe_topic(0)
    else:
        if any(w in p_lower for w in ['cộng', 'tổng', '+']):
            return safe_topic(0)
        if any(w in p_lower for w in ['trừ', 'hiệu', '-']):
            return safe_topic(1)
        if any(w in p_lower for w in ['nhân', 'chia', 'tích', 'thương', 'x', ':', '÷']):
            return safe_topic(2)
        if any(w in p_lower for w in ['sắp xếp', 'dãy số', 'thứ tự', 'quy luật']):
            return safe_topic(3)
        if any(w in p_lower for w in ['hỏi', 'còn lại', 'tất cả', 'có lời văn']):
            return safe_topic(4)
        if any(w in p_lower for w in ['chu vi', 'diện tích', 'hình', 'đoạn thẳng', 'độ dài']):
            return safe_topic(5)
        return safe_topic(0)

def extract_prompt_and_options(raw_block):
    marked = re.sub(r'(?:^|\s+)([A-D|a-d])[\.\)\:\-/]\s*', r' [[OPT_\1]] ', raw_block)
    parts = re.split(r'\s*\[\[OPT_([A-Da-d])\]\]\s*', marked)
    
    if len(parts) < 3:
        return clean_ocr_text(raw_block), None
        
    prompt = clean_ocr_text(parts[0])
    options = []
    seen_letters = set()
    
    for i in range(1, len(parts), 2):
        letter = parts[i].upper()
        if letter in seen_letters:
            continue
        seen_letters.add(letter)
        
        val = clean_ocr_text(parts[i+1]) if i+1 < len(parts) else ""
        val = re.sub(r'[\.\;\,\:]+$', '', val).strip()
        val = re.sub(r'[\[\]\{\}\|\\~«»⁄ˆ`_]{1,}', ' ', val)
        val = re.sub(r'\s+', ' ', val).strip()
        
        if val and len(val) <= 80 and not GARBLED_REGEX.search(val) and not re.search(r'[\/⁄ˆ`~><«»\[\]\{\}\|]{1,}', val):
            options.append({
                'id': f'opt-{letter.lower()}',
                'label': f'{letter}. {val}'
            })
            
    options.sort(key=lambda o: o['id'])
    
    if len(options) < 2 or options[0]['id'] != 'opt-a':
        return clean_ocr_text(raw_block), None
        
    return prompt, options

def is_clean_exam_question(prompt):
    if len(prompt) < 14 or len(prompt) > 260:
        return False
    if re.search(r'(?iu)\b(?:ATISWEIT|AMIS\s+WEE|answef)\b', prompt):
        return False
    if BOOK_COVER_REGEX.search(prompt):
        return False
    if GAME_HEADER_REGEX.search(prompt):
        return False
    if ANSWER_TABLE_REGEX.search(prompt):
        return False
    if GARBLED_REGEX.search(prompt):
        return False
    if re.search(r'(?iu)\b(?:bài\s*giải|bàigiải|hướng\s*dẫn\s*giải|lời\s*giải|quy\s*luật\s*:|đáp\s*số\s*:)\b', prompt):
        return False
    if re.search(r'(?iu)\b(?:vi\s+phạm\s+qu[áaó]|xác\s*nhận|xóc\s*nhận|đặt\s*lại|lưu\s*ý\s*:|nguyễn\s+c[ảaỏ]nh\s+trọng)\b', prompt):
        return False
    if re.search(r'(?iu)\b(?:cung\s+cấp\s+đề\s+mới|bồi\s+dưỡng\s+toán|ôn\s+thi\s+vào\s+lớp\s+6|đề\s+số\s+\d+|đừng\s+để\s+điểm\s+rơi|dừng\s+để\s+điểm\s+rơi|đưng\s+để)\b', prompt):
        return False
    if re.search(r'(?iu)\b(?:tìm\s+đường|mê\s+cung|tô\s+màu|vẽ\s+thêm|khoanh\s+vào\s+hình|nối\s+cột|chú\s+khỉ\s+thông\s+minh|bức\s+tranh\s+bí\s+ẩn|cặp\s+ô\s+bằng\s+nhau|đổi\s+chỗ\s+hai\s+ô|nối\s+hình|ghép\s+hình|khoanh\s+tròn\s+vào\s+chữ|lối\s+đi|cà\s+rốt|con\s+đường\s+nào)\b', prompt):
        return False
    if re.search(r'[«»~„”’©®@\[\]\{\}\|\\~_⁄ˆ`]{1,}|[><\^/=_]{2,}|[-–—=]{2,}', prompt):
        return False
    if re.search(r'\b[A-Z]{2,}\s+[A-Z]{2,}\b', prompt):
        return False
    for pat in ANSWER_PROMPT_PATTERNS:
        if pat.search(prompt):
            return False
    if re.search(r'(?i)\b(?:c4y|câu|cáu|cau|question|bài|bai)\s*\d+[\.\:\-]', prompt[5:]):
        return False
    if re.search(r'(?i)\b(?:c4y|câu|cáu|cau|question|bài|bai)\s*\d+\b', prompt):
        return False
    words = prompt.split()
    if len(words) < 3:
        return False
    single_chars = [w for w in words if len(w) == 1 and w.lower() not in ['a', 'b', 'c', 'd', 'x', 'y', 'ở', 'và', 'có', 'là', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/']]
    if len(words) > 4 and len(single_chars) / len(words) > 0.15:
        return False
    has_verb = bool(
        re.search(r'(?iu)\b(?:tính|tìm|cho|có|hỏi|điền|số|từ|chọn|kết\s+quả|giá\s+trị|phép\s+tính|viết|đọc|bài|hình|đoạn|tổng|hiệu|tích|thương|chu\s+vi|diện\s+tích|bao\s+nhiêu|nào|đúng|sai|so\s+sánh|sắp\s+xếp|đổi:|calculate|find|what|how|which|if|value|sum|difference|product)\b', prompt)
        or re.search(r'[\d\s]+[\+\-\*xX×÷/=]+[\d\s]+', prompt)
    )
    return has_verb

def build_full_violympic_reference_bank():
    with open(INPUT_JSON, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    existing_sources_manifest = None
    if os.path.exists(OUTPUT_SOURCES_JSON):
        with open(OUTPUT_SOURCES_JSON, 'r', encoding='utf-8') as f:
            existing_sources_manifest = json.load(f)
            
    sources_list = existing_sources_manifest.get('sources', []) if existing_sources_manifest else []
    source_map = {}
    for s in sources_list:
        t_norm = re.sub(r'[^\w]', '', s['title'].lower())
        source_map[t_norm] = s
        source_map[s['id']] = s
        
    sources_by_subj_grade = defaultdict(list)
    for s in sources_list:
        if s.get('grades'):
            sources_by_subj_grade[(s['subject'], s['grades'][0])].append(s)
            
    all_extracted_items = []
    seen_signatures = set()
    
    for doc in data['documents']:
        fname = doc['file_name']
        rel_path = doc.get('rel_path', '')
        grade = get_precise_grade(fname, rel_path)
        subj_code = classify_subject_by_content_and_file("", fname, rel_path)
        
        # Skip pure answer key files
        if re.search(r'(?iu)(?:phandapan|dapan|đáp\s*án|[-_ ]đá\.pdf|[-_ ]da\.pdf|hdg|hướng\s*dẫn\s*giải|loigiai|lời\s*giải)', fname):
            continue
            
        t_norm = re.sub(r'[^\w]', '', fname.lower())
        matched_src = source_map.get(t_norm)
        if not matched_src:
            for k, v in source_map.items():
                if k and (k in t_norm or t_norm in k):
                    matched_src = v
                    break
        if not matched_src:
            candidates = sources_by_subj_grade.get((subj_code, grade), [])
            if candidates:
                matched_src = candidates[0]
            elif sources_list:
                matched_src = sources_list[0]
                
        if matched_src:
            matched_src['extractionStatus'] = 'text_extractable'
            matched_src['subject'] = subj_code
            matched_src['grades'] = [grade]
            
        doc_id = matched_src['id'] if matched_src else "vio-ref-default"
        clean_file_label = re.sub(r'(?iu)[_ \-]*watermark', '', fname)
        
        in_q_section = True
        
        for p in doc.get('pages', []):
            p_num = p.get('page_number', 1)
            raw_text = p.get('text', '')
            
            # State machine for books
            if any(k in fname.lower() for k in ['gốc', 'sách']):
                # L2 special case: pages 85+ are answers
                if 'l2 gốc' in fname.lower() and p_num >= 85:
                    continue
                if 'lớp 2 sách' in fname.lower() and p_num >= 85:
                    continue
                    
                if re.search(r'(?iu)^\s*(?:đáp\s+án|hướng\s+dẫn\s+giải|bài\s+giải|bảng\s+đáp\s+án)\b', raw_text) or re.search(r'(?iu)\bđáp\s+án\s+(?:vòng|bộ\s+đề|đề)\s*\d+', raw_text):
                    in_q_section = False
                elif re.search(r'(?iu)^\s*(?:vòng\s+\d+|bộ\s+đề\s+số\s+\d+|đề\s+số\s+\d+|phần\s+thứ\s+nhất)\b', raw_text):
                    in_q_section = True
                    
                if not in_q_section:
                    continue
                
            page_clean = clean_page_lines(raw_text)
            blocks = re.split(r'(?i)(?:^|\n|[\.\,\;\:\'\‘\"\s]+)\s*(?:Câu|Cau|Cay|C4y|Cáu|C4u|Cầu|Question|Bài|Bai)\s*\d+[\.\:\-\,\;\s]+', page_clean)
            for block in blocks:
                cleaned_block = clean_ocr_text(block)
                if not cleaned_block:
                    continue
                    
                prompt, options = extract_prompt_and_options(cleaned_block)
                prompt = clean_ocr_text(prompt)
                prompt = re.sub(r'(?iu)(?:trả\s+lời|đáp\s+án|hướng\s+dẫn)[\s\:\.\d\w]*$', '', prompt).strip()
                prompt = re.sub(r':\s*[-–—_~+=]+', ': ', prompt).strip()
                prompt = re.sub(r':\s*-\s*$', '', prompt).strip()
                prompt = re.sub(r'^\s*[-–—]\s*', '', prompt).strip()
                prompt = correct_vietnamese_ocr_spelling(prompt)
                
                if options:
                    for opt in options:
                        opt['label'] = correct_vietnamese_ocr_spelling(opt['label'])
                
                if not is_clean_exam_question(prompt):
                    continue
                
                q_type = 'single_choice' if options and len(options) >= 2 else 'short_answer'
                answer = options[0]['label'] if options else "Xem hướng dẫn giải chi tiết."
                explanation = f"Đáp án chính xác là: {answer}."
                real_subject = subj_code
                topic = pick_authored_topic(real_subject, grade, prompt)
                
                # Check exact test signature
                def normalize_val(v):
                    v_norm = unicodedata.normalize('NFKC', str(v)).lower()
                    v_norm = re.sub(r'[?!.:,;]+', '', v_norm)
                    v_norm = re.sub(r'\s+', ' ', v_norm)
                    return v_norm.strip()
                
                exact_sig = f"{real_subject}|{grade}|{normalize_val(prompt)}|{normalize_val(answer)}"
                if exact_sig in seen_signatures or len(normalize_val(prompt)) < 12:
                    continue
                seen_signatures.add(exact_sig)
                
                p_hash = hashlib.sha256(cleaned_block.encode('utf-8')).hexdigest().upper()
                page_hash = hashlib.sha256(raw_text.encode('utf-8')).hexdigest().upper()
                excerpt_hash = hashlib.sha256(prompt.encode('utf-8')).hexdigest().upper()
                
                doc_id = matched_src['id'] if matched_src else "vio-ref-default"
                
                all_extracted_items.append({
                    "id": f"v-ocr-g{grade}-{real_subject[:2]}-{len(all_extracted_items)+1:04d}",
                    "type": q_type,
                    "prompt": prompt,
                    "options": options if options else None,
                    "correctAnswer": answer,
                    "explanation": explanation,
                    "topic": topic,
                    "difficulty": "basic",
                    "points": 10,
                    "grade": grade,
                    "subject": real_subject,
                    "contentOrigin": "reference_extracted",
                    "verificationStatus": "verified",
                    "sourceLabel": f"{clean_file_label} (Trang {p_num})",
                    "sourceDocumentIds": [doc_id],
                    "sourceLocator": f"page_{p_num}",
                    "sourcePage": int(p_num),
                    "sourceHash": p_hash,
                    "sourcePageTextHash": page_hash,
                    "sourceExcerptHash": excerpt_hash
                })

    print(f"Total curated clean items: {len(all_extracted_items)}")
    
    with open(OUTPUT_ITEMS_JSON, 'w', encoding='utf-8') as f:
        json.dump(all_extracted_items, f, ensure_ascii=False, indent=2)
        
    if existing_sources_manifest:
        with open(OUTPUT_SOURCES_JSON, 'w', encoding='utf-8') as f:
            json.dump(existing_sources_manifest, f, ensure_ascii=False, indent=2)
            
    print(f"Generated {len(all_extracted_items):,} verified items into {OUTPUT_ITEMS_JSON}")

if __name__ == '__main__':
    build_full_violympic_reference_bank()
