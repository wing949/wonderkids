# -*- coding: utf-8 -*-
import os
import sys
import json

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
REPORTS_DIR = os.path.join(WORKSPACE, 'reports')
os.makedirs(REPORTS_DIR, exist_ok=True)

# Exact Official SGK Math Breakdown (Bộ Kết nối tri thức với cuộc sống - GDPT 2018)
SGK_MATH_SUMMARY = [
    {
        "grade": 1,
        "t1_lessons": 21,
        "t1_range": "Bài 1 -> Bài 21",
        "t1_url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-1-tap-mot.4698216815",
        "t2_lessons": 19,
        "t2_range": "Bài 22 -> Bài 40",
        "t2_url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-1-tap-hai.4712748878",
        "total_sgk": 40,
        "app_lessons": 20,
        "app_status": "Đang có 20 bài tóm lược (chủ yếu là bài số lẻ/chọn lọc)",
        "diff": 20
    },
    {
        "grade": 2,
        "t1_lessons": 36,
        "t1_range": "Bài 1 -> Bài 36",
        "t1_url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-2-tap-mot.4698648594",
        "t2_lessons": 37,
        "t2_range": "Bài 37 -> Bài 73",
        "t2_url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-2-tap-hai.4713893812",
        "total_sgk": 73,
        "app_lessons": 35,
        "app_status": "Đang có 35 bài tóm lược",
        "diff": 38
    },
    {
        "grade": 3,
        "t1_lessons": 44,
        "t1_range": "Bài 1 -> Bài 44",
        "t1_url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-3-tap-mot.4698702815",
        "t2_lessons": 37,
        "t2_range": "Bài 45 -> Bài 81",
        "t2_url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-3-tap-hai.4714081721",
        "total_sgk": 81,
        "app_lessons": 18,
        "app_status": "Đang có 18 bài tóm lược",
        "diff": 63
    },
    {
        "grade": 4,
        "t1_lessons": 37,
        "t1_range": "Bài 1 -> Bài 37",
        "t1_url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-4-tap-mot.4714093295",
        "t2_lessons": 36,
        "t2_range": "Bài 38 -> Bài 73",
        "t2_url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-4-tap-hai.4698870230",
        "total_sgk": 73,
        "app_lessons": 15,
        "app_status": "Đang có 15 bài tóm lược",
        "diff": 58
    },
    {
        "grade": 5,
        "t1_lessons": 35,
        "t1_range": "Bài 1 -> Bài 35",
        "t1_url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-5-tap-mot.4699756373",
        "t2_lessons": 40,
        "t2_range": "Bài 36 -> Bài 75",
        "t2_url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-5-tap-hai.4714103431",
        "total_sgk": 75,
        "app_lessons": 13,
        "app_status": "Đang có 13 bài tóm lược",
        "diff": 62
    }
]

total_sgk_all = sum(x['total_sgk'] for x in SGK_MATH_SUMMARY)
total_app_all = sum(x['app_lessons'] for x in SGK_MATH_SUMMARY)
total_diff_all = total_sgk_all - total_app_all

md_content = f"""# 📊 BÁO CÁO RÀ SOÁT & CROSS-CHECK MÔN TOÁN (LỚP 1 — 5)
*Đối chiếu chi tiết 10 cuốn SGK Toán Kết nối tri thức với cuộc sống (NXB Giáo Dục Việt Nam) và Ứng dụng WonderKids*

---

## 🎯 1. TỔNG QUAN KẾT QUẢ ĐỐI CHIẾU SỐ LƯỢNG BÀI HỌC

| Khối Lớp | SGK Tập 1 (Số bài & Dải bài) | SGK Tập 2 (Số bài & Dải bài) | Tổng Bài Học SGK Chuẩn | Số Bài Hiện Có Trên App | Chênh Lệch / Cần Bổ Sung | Tình Trạng Hiện Tại Trên App |
| :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Toán 1** | **21 bài** *(Bài 1 $\\rightarrow$ 21)* | **19 bài** *(Bài 22 $\\rightarrow$ 40)* | **40 bài** | **20 bài** | ⚠️ **Thiếu 20 bài** | Đang có 20 bài tóm lược/chọn lọc |
| **Toán 2** | **36 bài** *(Bài 1 $\\rightarrow$ 36)* | **37 bài** *(Bài 37 $\\rightarrow$ 73)* | **73 bài** | **35 bài** | ⚠️ **Thiếu 38 bài** | Đang có 35 bài tóm lược/chọn lọc |
| **Toán 3** | **44 bài** *(Bài 1 $\\rightarrow$ 44)* | **37 bài** *(Bài 45 $\\rightarrow$ 81)* | **81 bài** | **18 bài** | ⚠️ **Thiếu 63 bài** | Đang có 18 bài tóm lược/chọn lọc |
| **Toán 4** | **37 bài** *(Bài 1 $\\rightarrow$ 37)* | **36 bài** *(Bài 38 $\\rightarrow$ 73)* | **73 bài** | **15 bài** | ⚠️ **Thiếu 58 bài** | Đang có 15 bài tóm lược/chọn lọc |
| **Toán 5** | **35 bài** *(Bài 1 $\\rightarrow$ 35)* | **40 bài** *(Bài 36 $\\rightarrow$ 75)* | **75 bài** | **13 bài** | ⚠️ **Thiếu 62 bài** | Đang có 13 bài tóm lược/chọn lọc |
| **TỔNG CỘNG** | **173 bài** | **169 bài** | **342 bài** | **101 bài** | ⚠️ **Thiếu 241 bài** | **Cần mở rộng toàn diện từ 101 $\\rightarrow$ 342 bài** |

---

## 🔍 2. NGUYÊN NHÂN CHÊNH LỆCH VÀ BẢN CHẤT CỦA BỘ DỮ LIỆU HIỆN TẠI

1. **Trên App hiện tại**:
   - Bộ dữ liệu môn Toán trong `src/data/curriculum/math/` (`grade1.ts` đến `grade5.ts`) đang ở giai đoạn **Core Framework / Rút gọn**:
     - Thường chỉ lấy các bài số lẻ (ví dụ: Bài 1, 3, 5, 7, 9, 11, 13...) hoặc các bài chuyên đề lý thuyết chính.
     - Lược bỏ các bài **Luyện tập**, **Luyện tập chung**, **Thực hành và trải nghiệm** và **Ôn tập chủ đề** của SGK.
2. **Theo chuẩn SGK NXB Giáo Dục Việt Nam (GDPT 2018)**:
   - Các bài **Luyện tập chung** và **Thực hành trải nghiệm** là một phần học chính thức bắt buộc được đánh số bài riêng (ví dụ: *Bài 6: Luyện tập chung*, *Bài 43: Thực hành và trải nghiệm sử dụng máy tính cầm tay*...).
   - Đầy đủ toàn bộ 10 cuốn sách Toán Lớp 1 - 5 có đúng **342 bài học**.

---

## 📑 3. DANH SÁCH CHI TIẾT 10 LINK MỤC LỤC SGK TOÁN CHÍNH THỨC

1. 📘 **Toán 1 - Tập 1** (21 bài): [sgk-toan-1-tap-mot.4698216815](https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-1-tap-mot.4698216815)
2. 📘 **Toán 1 - Tập 2** (19 bài): [sgk-toan-1-tap-hai.4712748878](https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-1-tap-hai.4712748878)
3. 📘 **Toán 2 - Tập 1** (36 bài): [sgk-toan-2-tap-mot.4698648594](https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-2-tap-mot.4698648594)
4. 📘 **Toán 2 - Tập 2** (37 bài): [sgk-toan-2-tap-hai.4713893812](https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-2-tap-hai.4713893812)
5. 📘 **Toán 3 - Tập 1** (44 bài): [sgk-toan-3-tap-mot.4698702815](https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-3-tap-mot.4698702815)
6. 📘 **Toán 3 - Tập 2** (37 bài): [sgk-toan-3-tap-hai.4714081721](https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-3-tap-hai.4714081721)
7. 📘 **Toán 4 - Tập 1** (37 bài): [sgk-toan-4-tap-mot.4714093295](https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-4-tap-mot.4714093295)
8. 📘 **Toán 4 - Tập 2** (36 bài): [sgk-toan-4-tap-hai.4698870230](https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-4-tap-hai.4698870230)
9. 📘 **Toán 5 - Tập 1** (35 bài): [sgk-toan-5-tap-mot.4699756373](https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-5-tap-mot.4699756373)
10. 📘 **Toán 5 - Tập 2** (40 bài): [sgk-toan-5-tap-hai.4714103431](https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-5-tap-hai.4714103431)

---

## 🚀 4. ĐỀ XUẤT KẾ HOẠCH NÂNG CẤP & ĐỒNG BỘ 100% NỘI DUNG

1. **Bước 1 (Đã hoàn thành)**: Trích xuất toàn văn Mục lục và phân bổ số trang của 10 cuốn sách Toán từ `taphuan.nxbgd.vn`.
2. **Bước 2**: Khởi tạo bộ dữ liệu đầy đủ 342 bài học chuẩn cho môn Toán (bổ sung 241 bài học còn thiếu vào `grade1.ts` đến `grade5.ts`).
3. **Bước 3**: Tạo bộ câu hỏi tương tác, đồ họa số học 3D trực quan cùng Mascot **Cú BoBo** cho toàn bộ 342 bài học.
"""

report_file = os.path.join(REPORTS_DIR, 'math-sgk-crosscheck-audit.md')
with open(report_file, 'w', encoding='utf-8') as f:
    f.write(md_content)

print(f"✅ Đã tạo báo cáo audit môn Toán tại: {report_file}")
