# Báo cáo triển khai Kho Luyện Đề lớp 1–5

Ngày kiểm tra: **24/08/2026**

## 1. Phạm vi phát hành

Kho mới gồm nội dung **WonderKids tự biên soạn**, đối chiếu theo chương trình GDPT 2018 và nhóm chủ điểm ôn luyện công khai. Nội dung không phải đề thi Violympic chính thức, không sử dụng logo hoặc tuyên bố hợp tác với Violympic.

Nguồn xác định phạm vi môn: [Thể lệ Violympic năm học 2026–2027](https://violympic.vn/news/detail/11931/6). Nguồn chủ điểm tham khảo: [Tin hướng dẫn Violympic](https://violympic.vn/news/category/19).

| Môn | Lớp | Đề/lớp | Số đề | Hoạt động | Kết quả |
|---|---:|---:|---:|---:|---|
| Toán | 1–5 | 12 | 60 | 1.800 | PASS |
| Tiếng Việt | 1–5 | 12 | 60 | 1.800 | PASS |
| Tiếng Anh | 1–5 | 12 | 60 | 1.800 | PASS |
| Toán bằng tiếng Anh | 1–5 | 12 | 60 | 1.800 | PASS |
| **Tổng** | **20 tổ hợp** |  | **240** | **7.200** | **PASS** |

Bộ 18 vòng Toán lớp 2 từ PDF cũ nằm riêng trong **Đề tham khảo cũ**, trạng thái `source_review_pending`, không tính vào 240 đề và chưa được mở làm bài.

## 2. Kết quả kiểm tra dữ liệu

| Hạng mục | Kết quả |
|---|---:|
| Báo cáo cấp đề | 240/240 PASS |
| Đề đúng 3 phần × 10 hoạt động | 240/240 |
| Hoạt động có đáp án, lời giải, chủ điểm, độ khó và nguồn | 7.200/7.200 |
| Câu trùng nguyên văn trong cùng một đề | 0 |
| Câu Toán/Toán tiếng Anh được giải lại độc lập | 3.600/3.600 |
| Phạm vi số Toán lớp 1 | Đến 100; không vượt 100 |
| Phạm vi số Toán lớp 2 | Đến 1.000; không vượt 1.000 |
| Câu cơ bản | 3.600 |
| Câu vận dụng | 2.640 |
| Câu thử thách có nhãn | 960/960 |
| Câu nghe yêu cầu audio | 0 |
| Audio bắt buộc còn thiếu | 0 |

Hệ thống cũng ghi nhận **624 nhóm tái sử dụng khuôn tương tác** sau khi loại số liệu và mã câu. Đây là các khuôn như chọn đáp án, sắp xếp hoặc ghép cặp có dữ kiện khác nhau; chúng được ghi nhận để kiểm soát gần trùng nhưng không phải câu trùng nguyên văn.

Ma trận Toán đã bổ sung mạch nhân–chia, thời gian, bảng số liệu, so sánh, phân số, diện tích, số thập phân, tỉ số phần trăm, chuyển động và thể tích theo cấp lớp. Lớp 3 chỉ dùng phân số đơn vị; lớp 4 học phân số bằng nhau; lớp 5 kết hợp phân số và số thập phân. Trạng thái `published` chỉ được tạo khi toàn bộ câu và toàn bộ đề vượt qua cổng kiểm tra cấu trúc, đáp án, độ phủ chủ điểm, phạm vi số, câu trùng, phân bố độ khó và metadata nguồn.

## 3. Báo cáo theo từng môn–lớp

Mỗi dòng dưới đây tương ứng 12 báo cáo đề; báo cáo máy chi tiết được sinh bởi `getPracticeSetAuditReports()` trong `src/data/practice/audit.ts`.

| Môn | Lớp 1 | Lớp 2 | Lớp 3 | Lớp 4 | Lớp 5 |
|---|---:|---:|---:|---:|---:|
| Toán | 12/12 | 12/12 | 12/12 | 12/12 | 12/12 |
| Tiếng Việt | 12/12 | 12/12 | 12/12 | 12/12 | 12/12 |
| Tiếng Anh | 12/12 | 12/12 | 12/12 | 12/12 | 12/12 |
| Toán bằng tiếng Anh | 12/12 | 12/12 | 12/12 | 12/12 | 12/12 |

## 4. Kiểm tra DOM và responsive

- Render DOM tự động: **240/240 đề PASS**; đúng tiêu đề, ba phần, câu 1/30 và không có `undefined`, `null` hoặc `NaN`.
- Mobile 360 px: không tràn ngang; nút thao tác chính cao tối thiểu 48 px.
- Tablet 768 px: không tràn ngang; lưới danh sách đúng hai cột.
- Desktop 1440 px: đủ bốn môn, không tràn ngang, không có lỗi console.
- URL câu đang làm: `/luyen-de/.../de-11?cau=2` khôi phục đúng sau F5.
- Câu trả lời đã chọn vẫn được giữ sau F5.

## 5. Kiểm tra hồi quy

- Toàn bộ kiểm thử repo: **123/123 PASS**.
- Build TypeScript và Vite: **PASS**.
- Đấu Trường hiện tại được giữ riêng tại `/dau-truong`.
- Các bài học SGK, quản trị, phụ huynh và audio hiện hữu không bị thay đổi bởi dữ liệu Kho Luyện Đề.

## 6. Trạng thái cuối

**ĐẠT điều kiện dữ liệu và giao diện để phát hành kho 240 đề văn bản.** Audio là tùy chọn; kho hiện không có dạng câu nghe nên không có câu nào bị phát hành khi thiếu audio hoặc transcript.
