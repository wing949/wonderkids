# -*- coding: utf-8 -*-
import os, sys, json, re

sys.stdout.reconfigure(encoding='utf-8')

ROOT_DIR = r'c:\Users\TVCHUONG\Desktop\AI\06_eLearning'
OUT_DIR = os.path.join(ROOT_DIR, 'src', 'data', 'practice', 'data')
os.makedirs(OUT_DIR, exist_ok=True)

# ----------------- GRADE 2 EXACT QUESTIONS (from TS. Pham Van Cong) -----------------
def get_grade2_exact_questions():
    # Vòng 1 exact questions from Image 1 / Page 5-8 of book:
    v1_items = [
        # Phần 1: Khởi động (Câu 1 đến 10)
        {
            'q': 'Số lớn nhất có 2 chữ số khác nhau là số nào?',
            'a': '98',
            'exp': 'Số có 2 chữ số lớn nhất là 99, nhưng yêu cầu các chữ số khác nhau nên số đó là 98. Đáp số: 98.',
            'type': 'short_answer'
        },
        {
            'q': 'Số lớn nhất có 2 chữ số mà tổng các chữ số bằng 10 là số nào?',
            'a': '91',
            'exp': 'Để số lớn nhất thì chữ số hàng chục phải lớn nhất (bằng 9). Chữ số hàng đơn vị là: 10 - 9 = 1. Vậy số đó là 91. Đáp số: 91.',
            'type': 'short_answer'
        },
        {
            'q': 'Số bé nhất có 2 chữ số có hiệu các chữ số bằng 2 là số nào?',
            'a': '13',
            'exp': 'Để số bé nhất thì chữ số hàng chục là 1, chữ số hàng đơn vị là: 1 + 2 = 3 (hoặc số 20 với 2 - 0 = 2). Theo đề bài số bé nhất là 13 (hoặc 20). Đáp số: 13.',
            'type': 'short_answer'
        },
        {
            'q': 'Lớp 2A có 15 học sinh nam và 13 học sinh nữ. Hỏi lớp 2A có tất cả bao nhiêu học sinh?',
            'a': '28',
            'exp': 'Lớp 2A có tất cả số học sinh là: 15 + 13 = 28 (bạn). Đáp số: 28 bạn.',
            'type': 'short_answer'
        },
        {
            'q': 'Nhà bác An nuôi 32 con gà và 45 con vịt. Hỏi tổng số cả gà và vịt nhà bác An đã nuôi tất cả là bao nhiêu con?',
            'a': '77',
            'exp': 'Tổng số gà và vịt nhà bác An nuôi là: 32 + 45 = 77 (con). Đáp số: 77 con.',
            'type': 'short_answer'
        },
        {
            'q': 'Một cửa hàng buổi sáng bán được 20 chiếc quạt, buổi chiều bán được 15 chiếc quạt. Hỏi ngày hôm đó cửa hàng bán được tất cả bao nhiêu chiếc quạt?',
            'a': '35',
            'exp': 'Ngày hôm đó cửa hàng bán được số chiếc quạt là: 20 + 15 = 35 (chiếc). Đáp số: 35 chiếc.',
            'type': 'short_answer'
        },
        {
            'q': 'Người ta bỏ vào hộp 25 viên bi màu đỏ và 21 viên bi màu xanh. Hỏi trong hộp có tất cả bao nhiêu viên bi?',
            'a': '46',
            'exp': 'Trong hộp có tất cả số viên bi là: 25 + 21 = 46 (viên). Đáp số: 46 viên bi.',
            'type': 'short_answer'
        },
        {
            'q': 'Cô giáo nhận về 35 quyển sách Toán và 33 quyển sách Tiếng Việt. Hỏi cô giáo đã nhận về tất cả bao nhiêu quyển sách cả hai loại?',
            'a': '68',
            'exp': 'Cô giáo nhận về tất cả số quyển sách là: 35 + 33 = 68 (quyển). Đáp số: 68 quyển.',
            'type': 'short_answer'
        },
        {
            'q': 'Có bao nhiêu số có 2 chữ số mà tổng các chữ số của mỗi số đó đều bằng 8?',
            'a': '8',
            'exp': 'Các số có 2 chữ số có tổng các chữ số bằng 8 là: 17, 71, 26, 62, 35, 53, 44 và 80. Vậy có tất cả 8 số. Đáp số: 8 số.',
            'type': 'short_answer'
        },
        {
            'q': 'Có bao nhiêu số có 2 chữ số mà hiệu các chữ số của mỗi số đều bằng 6?',
            'a': '7',
            'exp': 'Các số có 2 chữ số có hiệu các chữ số bằng 6 là: 17, 71, 28, 82, 39, 93 và 60. Vậy có tất cả 7 số. Đáp số: 7 số.',
            'type': 'short_answer'
        },

        # Phần 2: Vận dụng (Câu 11 đến 20)
        {
            'q': 'Trên bãi cỏ có 19 con trâu và 15 con bò. Hỏi trên bãi cỏ có tất cả bao nhiêu con trâu và bò?',
            'a': '34',
            'exp': 'Trên bãi cỏ có tất cả số con trâu và bò là: 19 + 15 = 34 (con). Đáp số: 34 con.',
            'type': 'short_answer'
        },
        {
            'q': 'Một lớp học có 18 bạn nam và 12 bạn nữ. Hỏi lớp học đó có tất cả bao nhiêu học sinh?',
            'a': '30',
            'exp': 'Lớp học đó có tất cả số học sinh là: 18 + 12 = 30 (bạn). Đáp số: 30 bạn.',
            'type': 'short_answer'
        },
        {
            'q': 'Trong sân có 29 con gà mái và 16 con gà trống. Hỏi trong sân có tất cả bao nhiêu con gà?',
            'a': '45',
            'exp': 'Trong sân có tất cả số con gà là: 29 + 16 = 45 (con). Đáp số: 45 con.',
            'type': 'short_answer'
        },
        {
            'q': 'An cân nặng 29kg, bố An cân nặng 64kg. Hỏi cả hai bố con cân nặng bao nhiêu ki-lô-gam?',
            'a': '93',
            'exp': 'Cả hai bố con cân nặng là: 29 + 64 = 93 (kg). Đáp số: 93 kg.',
            'type': 'short_answer'
        },
        {
            'q': 'Bạn Việt cân nặng 26kg, bạn Hà cân nặng 24kg. Hỏi cả hai bạn cân nặng bao nhiêu ki-lô-gam?',
            'a': '50',
            'exp': 'Cả hai bạn cân nặng là: 26 + 24 = 50 (kg). Đáp số: 50 kg.',
            'type': 'short_answer'
        },
        {
            'q': 'Tìm số lớn nhất có 2 chữ số mà tổng các chữ số của số đó bằng 11.',
            'a': '92',
            'exp': 'Để số lớn nhất thì chữ số hàng chục phải là 9. Chữ số hàng đơn vị là: 11 - 9 = 2. Vậy số đó là 92. Đáp số: 92.',
            'type': 'short_answer'
        },
        {
            'q': 'Tìm số lớn nhất có 2 chữ số mà tổng các chữ số của số đó bằng 12.',
            'a': '93',
            'exp': 'Để số lớn nhất thì chữ số hàng chục phải là 9. Chữ số hàng đơn vị là: 12 - 9 = 3. Vậy số đó là 93. Đáp số: 93.',
            'type': 'short_answer'
        },
        {
            'q': 'Tìm số bé nhất có 2 chữ số mà tổng các chữ số của số đó bằng 13.',
            'a': '49',
            'exp': 'Để số bé nhất thì chữ số hàng chục phải bé nhất có thể. Vì hàng đơn vị tối đa là 9 nên hàng chục bé nhất là: 13 - 9 = 4. Vậy số đó là 49. Đáp số: 49.',
            'type': 'short_answer'
        },
        {
            'q': 'Hiện nay Lan 9 tuổi, anh hơn Lan 6 tuổi. Hỏi năm nay anh bao nhiêu tuổi?',
            'a': '15',
            'exp': 'Tuổi của anh hiện nay là: 9 + 6 = 15 (tuổi). Đáp số: 15 tuổi.',
            'type': 'short_answer'
        },
        {
            'q': 'Năm nay mẹ 39 tuổi. Biết bố hơn mẹ 5 tuổi. Tính tuổi của bố hiện nay.',
            'a': '44',
            'exp': 'Tuổi của bố hiện nay là: 39 + 5 = 44 (tuổi). Đáp số: 44 tuổi.',
            'type': 'short_answer'
        },

        # Phần 3: Chinh phục đỉnh cao (Câu 21 đến 30)
        {
            'q': 'Biết An cân nặng 29kg và Bình cân nặng hơn An là 5kg. Hỏi Bình cân nặng bao nhiêu ki-lô-gam?',
            'a': '34',
            'exp': 'Bình cân nặng số ki-lô-gam là: 29 + 5 = 34 (kg). Đáp số: 34 kg.',
            'type': 'short_answer'
        },
        {
            'q': 'Mai có 28 con tem. Biết Lan có nhiều hơn Mai 14 con tem. Hỏi Lan có bao nhiêu con tem?',
            'a': '42',
            'exp': 'Số con tem Lan có là: 28 + 14 = 42 (con tem). Đáp số: 42 con tem.',
            'type': 'short_answer'
        },
        {
            'q': 'Tổng số điểm kiểm tra các môn cuối năm học của Mai là 48 điểm. Biết điểm của Lan nhiều hơn của Mai là 5 điểm. Hỏi tổng số điểm kiểm tra các môn cuối năm học của Lan là bao nhiêu điểm?',
            'a': '53',
            'exp': 'Tổng số điểm kiểm tra của Lan là: 48 + 5 = 53 (điểm). Đáp số: 53 điểm.',
            'type': 'short_answer'
        },
        {
            'q': 'Bạn Hồng cao 93cm, bạn Hà cao hơn bạn Hồng 6cm. Hỏi bạn Hà cao bao nhiêu xăng-ti-mét?',
            'a': '99',
            'exp': 'Bạn Hà cao số xăng-ti-mét là: 93 + 6 = 99 (cm). Đáp số: 99 cm.',
            'type': 'short_answer'
        },
        {
            'q': 'Khối 2 của Trường Tiểu học Kim Đồng có 49 học sinh nam và 47 học sinh nữ. Hỏi khối 2 của trường có tất cả bao nhiêu học sinh?',
            'a': '96',
            'exp': 'Khối 2 có tất cả số học sinh là: 49 + 47 = 96 (học sinh). Đáp số: 96 học sinh.',
            'type': 'short_answer'
        },
        {
            'q': 'An cân nặng 28kg, bố An cân nặng 67kg. Hỏi cả hai bố con An cân nặng tất cả bao nhiêu ki-lô-gam?',
            'a': '95',
            'exp': 'Cả hai bố con An cân nặng là: 28 + 67 = 95 (kg). Đáp số: 95 kg.',
            'type': 'short_answer'
        },
        {
            'q': 'Một phép cộng gồm 2 số hạng có tổng bằng 25. Nếu tăng mỗi số hạng của tổng thêm 5 thì tổng mới sẽ là bao nhiêu?',
            'a': 'b',
            'opts': [
                {'id': 'a', 'label': '30'},
                {'id': 'b', 'label': '35'},
                {'id': 'c', 'label': '15'},
                {'id': 'd', 'label': '40'}
            ],
            'exp': 'Khi tăng mỗi số hạng thêm 5 thì tổng mới sẽ tăng thêm: 5 + 5 = 10. Tổng mới là: 25 + 10 = 35. Chọn B.',
            'type': 'single_choice'
        },
        {
            'q': 'Tổng của 12 và 34 lớn hơn hiệu của 34 và 12 là bao nhiêu?',
            'a': 'b',
            'opts': [
                {'id': 'a', 'label': '12'},
                {'id': 'b', 'label': '24'},
                {'id': 'c', 'label': '34'},
                {'id': 'd', 'label': '56'}
            ],
            'exp': 'Tổng của 12 và 34 là: 12 + 34 = 46. Hiệu của 34 và 12 là: 34 - 12 = 22. Tổng lớn hơn hiệu là: 46 - 22 = 24. Chọn B.',
            'type': 'single_choice'
        },
        {
            'q': 'Năm nay anh 16 tuổi. Biết 2 năm nữa thì tuổi anh gấp đôi tuổi em. Hỏi năm nay em bao nhiêu tuổi?',
            'a': 'b',
            'opts': [
                {'id': 'a', 'label': '6 tuổi'},
                {'id': 'b', 'label': '7 tuổi'},
                {'id': 'c', 'label': '8 tuổi'},
                {'id': 'd', 'label': '9 tuổi'}
            ],
            'exp': 'Hai năm nữa tuổi anh là: 16 + 2 = 18 (tuổi). Hai năm nữa tuổi em là: 18 : 2 = 9 (tuổi). Năm nay tuổi em là: 9 - 2 = 7 (tuổi). Chọn B.',
            'type': 'single_choice'
        },
        {
            'q': 'Số nào thích hợp điền vào chỗ chấm trong dãy số: 1; 3; 6; 10; 15; ... ?',
            'a': 'b',
            'opts': [
                {'id': 'a', 'label': '20'},
                {'id': 'b', 'label': '21'},
                {'id': 'c', 'label': '30'},
                {'id': 'd', 'label': '32'}
            ],
            'exp': 'Quy luật dãy số: 1 + 2 = 3; 3 + 3 = 6; 6 + 4 = 10; 10 + 5 = 15; Số tiếp theo là: 15 + 6 = 21. Chọn B.',
            'type': 'single_choice'
        }
    ]
    return v1_items

print('Grade 2 questions template ready')
