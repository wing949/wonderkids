# BÁO CÁO RÀ SOÁT MÔN TOÁN — 22/08/2026

## Kết luận

- Danh mục ứng dụng có **345/345 bài Toán**: lớp 1 có 41 bài, lớp 2 có 75 bài, lớp 3 có 81 bài, lớp 4 có 73 bài và lớp 5 có 75 bài.
- Đã đối chiếu trực quan mục lục của **10 tập sách Toán lớp 1–5**; tên bài, thứ tự, tập và trang bắt đầu trong danh mục chạy của ứng dụng đã được chuẩn hóa theo sách NXB Giáo Dục Việt Nam.
- Đã bổ sung các bài còn thiếu: Bài 41 lớp 1; Bài 74 và Bài 75 lớp 2.
- **1.725 câu hỏi hiện tại là bài luyện bổ trợ do hệ thống tạo**, không phải bản chép nguyên văn các hoạt động trong SGK. Giao diện và dữ liệu đã ghi đúng trạng thái `system_generated / reference_only`.
- Không thay đổi audio trong đợt rà soát này.

## Phân bố danh mục

| Khối | Tập 1 | Tập 2 | Tổng | Kết quả tên/trang |
|---|---:|---:|---:|---|
| Lớp 1 | 20 | 21 | 41 | Đạt |
| Lớp 2 | 36 | 39 | 75 | Đạt |
| Lớp 3 | 44 | 37 | 81 | Đạt |
| Lớp 4 | 37 | 36 | 73 | Đạt |
| Lớp 5 | 35 | 40 | 75 | Đạt |
| **Tổng** | **172** | **173** | **345** | **Đạt** |

## Lỗi đã phát hiện và chỉnh sửa

| Hạng mục | Trước rà soát | Sau chỉnh sửa |
|---|---|---|
| Tổng số bài | 342 | 345 |
| Tên bài/trang | Có dữ liệu cũ sinh theo công thức và sai mục lục | Dùng bảng mục lục đã đối chiếu cho cả 10 tập |
| Học kỳ/tập | Một số bài kế thừa nhãn cũ | Xác định theo đúng tập 1/tập 2 |
| Nguồn nội dung bổ trợ | Có thể bị hiểu là nội dung SGK đã duyệt | Ghi `system_generated / reference_only` |
| Nhãn trên thẻ/màn làm bài | Có thể hiện biểu tượng SGK đơn thuần | Hiện `Luyện bổ trợ • tham chiếu ...` |
| Câu hỏi lớp 5 Bài 1 | Có nội dung bị trộn sang phân số, vận tốc, phần trăm | Chỉ còn câu luyện bám chủ đề ôn tập số tự nhiên |
| Phương án nhiễu | Có chuỗi rác kiểu “Kết quả khác ...” | Đã thay bằng lựa chọn số hợp lệ hoặc lựa chọn trung tính |
| Gợi ý kiến thức | Có nguy cơ nhận gợi ý đọc hiểu của Tiếng Việt | Giữ đúng gợi ý theo môn Toán |

## Nguồn chính thức

- Toán 1: Tập 1 `4698216815`, Tập 2 `4712748878`.
- Toán 2: Tập 1 `4698648594`, Tập 2 `4713893812`.
- Toán 3: Tập 1 `4698702815`, Tập 2 `4714081721`.
- Toán 4: Tập 1 `4714093295`, Tập 2 `4698870230`.
- Toán 5: Tập 1 `4699756373`, Tập 2 `4714103431`.

Các URL đầy đủ được lưu trong manifest danh mục Toán của ứng dụng.

## Kiểm tra hiển thị và đường dẫn

- Lượt DOM trực tiếp trước nhóm chỉnh sửa cuối: **345/345 URL bài Toán mở được**, không có “không tìm thấy”, `undefined` hoặc `[object Object]`.
- Trên phiên bản mã cuối: kiểm thử tự động xác nhận toàn bộ mã bài tạo đúng URL `/bai-hoc/{id}` và khôi phục đúng bài khi tải lại/chia sẻ; kiểm thử nhãn xác nhận nội dung bổ trợ không còn mang nhãn SGK đã duyệt.
- Lượt mở trình duyệt mới sau chỉnh sửa cuối chưa chạy lại được vì trình duyệt tích hợp khóa trang lỗi kết nối cũ theo chính sách an toàn. Vì vậy báo cáo **không tuyên bố** có lượt DOM trực tiếp mới cho bản cuối.

## Bằng chứng kiểm thử

- Nhóm kiểm thử Toán, Tiếng Anh, nguồn, thẻ và đường dẫn: **21/21 pass**.
- Build TypeScript + Vite: **pass**.
- Kiểm tra thay đổi lỗi khoảng trắng/cú pháp bản vá: **pass**; chỉ có cảnh báo chuẩn hóa LF/CRLF của Git trên Windows.
- Toàn bộ kho kiểm thử: **69/76 pass**. Bảy lỗi còn lại đều thuộc dữ liệu, audio hoặc bố cục Tiếng Việt đang được thay đổi song song; nhóm Toán/Tiếng Anh không có lỗi.

## Giới hạn cần hiểu đúng

- Danh mục tên bài và trang đã được đối chiếu; **các câu hỏi bổ trợ chưa được ánh xạ từng câu/từng tiểu ý với bài tập SGK**.
- Không thể kết luận “1.725/1.725 câu trùng nguyên văn SGK”. Muốn đạt mức đó cần manifest hoạt động theo từng trang, đáp án, tiểu ý và kiểm duyệt trực quan giống quy trình Tiếng Việt.
