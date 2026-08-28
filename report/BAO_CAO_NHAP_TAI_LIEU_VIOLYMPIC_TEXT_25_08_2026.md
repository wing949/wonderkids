# Báo cáo nhập tài liệu Violympic có text số hóa — 25/08/2026

## Kết quả phân loại

- Tổng tệp được rà soát: **207**.
- Nhóm scan/ảnh cần OCR đã bỏ qua: **99** tệp.
- Nhóm ban đầu không cần OCR: **108** tệp, gồm **104** tài liệu PDF/DOCX/DOC và **4** tệp chứa/không phải tài liệu text.
- Bản PDF trùng nội dung đã loại bằng SHA-256: **17** bản.
- Nguồn text lớp 1–5 xác định được duy nhất và đưa vào danh mục: **80**.
- Hoạt động đã trích, tính đáp án độc lập và phát hành: **12**.

## Hoạt động đã phát hành

| Môn | Lớp | Số câu |
|---|---:|---:|
| Toán | 1 | 3 |
| Toán | 2 | 2 |
| Toán | 3 | 2 |
| Toán | 4 | 1 |
| Toán tiếng Anh | 3 | 1 |
| Toán tiếng Anh | 4 | 3 |

## Nguyên tắc kiểm duyệt

- Không OCR và không nhập nội dung từ 99 tài liệu scan/ảnh.
- Không gán tên nguồn cho câu sinh tự động. Mỗi câu phát hành có mã nguồn, vị trí trang/câu và hai hash kiểm chứng.
- Chỉ các phép tính xuất hiện trong lớp text và cho đáp án nguyên có thể tính lại độc lập mới được phát hành.
- Câu phụ thuộc hình, thiếu dữ kiện, câu ngôn ngữ chưa có đáp án kiểm chứng và đoạn quảng cáo đều không được phát hành.
- Tệp `.doc` cũ được thống kê nhưng chưa nhập vì môi trường không có bộ đọc bảo đảm giữ đúng cấu trúc; không dùng cách đọc byte thô.

Chi tiết từng tệp và quyết định nhập/bỏ qua nằm trong `report/violympic-document-classification-2026-08-25.csv`.
