# BÁO CÁO RÀ SOÁT MÔN TIẾNG ANH — 22/08/2026

## Kết luận

- Danh mục có **92/92 Unit**: lớp 1 có 16, lớp 2 có 16, lớp 3 có 20, lớp 4 có 20 và lớp 5 có 20.
- Tên Unit, tập và trang bắt đầu đã được chuẩn hóa theo book map của bộ **Global Success** trên hệ thống NXB Giáo Dục Việt Nam.
- Đoạn đọc, mô tả và **460 câu hỏi hiện tại là nội dung luyện bổ trợ do WonderKids tạo**; chúng không còn được ghi tác giả hoặc trình bày như nguyên văn SGK.
- Không thay đổi audio trong đợt rà soát này.

## Phân bố danh mục

| Khối | Số Unit | Tên Unit/trang | Trạng thái nội dung app |
|---|---:|---|---|
| Lớp 1 | 16 | Đạt | Luyện bổ trợ — tham chiếu |
| Lớp 2 | 16 | Đạt | Luyện bổ trợ — tham chiếu |
| Lớp 3 | 20 | Đạt | Luyện bổ trợ — tham chiếu |
| Lớp 4 | 20 | Đạt | Luyện bổ trợ — tham chiếu |
| Lớp 5 | 20 | Đạt | Luyện bổ trợ — tham chiếu |
| **Tổng** | **92** | **Đạt** | **Không tự nhận là nguyên văn SGK** |

## Lỗi đã phát hiện và chỉnh sửa

- Thay tên Unit cũ tự nối hoặc sai book map bằng tên chính thức ngắn gọn.
- Sửa các mốc sai tiêu biểu: lớp 1 Unit 9 `In the shop`, Unit 12 `At the lake`; lớp 2 Unit 14 `At home`; lớp 3 Unit 12 `Jobs`; lớp 4 Unit 10 `Our summer holidays`; lớp 5 Unit 18 `Means of transport`.
- Sửa trang bắt đầu, tập sách và URL nguồn chính thức cho toàn bộ danh mục.
- Giữ nguyên cú pháp tên `Unit N: ...`, không chèn thêm tiền tố sai `Bài N:`.
- Đổi nhãn thẻ và màn làm bài thành `Luyện bổ trợ • tham chiếu ...` khi nội dung chưa được xác minh nguyên văn.
- Bỏ tác giả sai `Global Success English SGK` khỏi đoạn luyện do hệ thống tạo.
- Loại phương án nhiễu lẫn tiếng Việt khỏi câu hỏi Tiếng Anh.
- Ngăn môn Tiếng Anh nhận nhầm gợi ý đọc hiểu của môn Tiếng Việt.

## Nguồn chính thức

- Tiếng Anh 1: `sgk-tieng-anh-1-global-success.4914061146`.
- Tiếng Anh 2: `tieng-anh-2-global-success.4914084740`.
- Tiếng Anh 3: Tập 1 `4537411435`, Tập 2 `4914101275`.
- Tiếng Anh 4: Tập 1 `4914111660`, Tập 2 `4914832178`.
- Tiếng Anh 5: Tập 1 `4914842460`, Tập 2 `4914843136`.

Các URL đầy đủ được lưu trong manifest danh mục Tiếng Anh của ứng dụng.

## Kiểm tra hiển thị và đường dẫn

- Lượt DOM trực tiếp trước nhóm chỉnh sửa cuối: **92/92 màn đọc** và **92/92 màn câu hỏi** mở được; lần chuyển chậm ở Unit 6 lớp 4 đã pass khi kiểm tra lại.
- Trên phiên bản mã cuối: kiểm thử tự động xác nhận toàn bộ mã Unit tạo đúng URL `/bai-hoc/{id}`, giữ nguyên tên `Unit N: ...`, và dùng đúng nhãn luyện bổ trợ.
- Lượt mở trình duyệt mới sau chỉnh sửa cuối chưa chạy lại được vì trình duyệt tích hợp khóa trang lỗi kết nối cũ theo chính sách an toàn. Vì vậy báo cáo **không tuyên bố** có lượt DOM trực tiếp mới cho bản cuối.

## Bằng chứng kiểm thử

- Nhóm kiểm thử Toán, Tiếng Anh, nguồn, thẻ và đường dẫn: **21/21 pass**.
- Build TypeScript + Vite: **pass**.
- Kiểm tra thay đổi lỗi khoảng trắng/cú pháp bản vá: **pass**; chỉ có cảnh báo chuẩn hóa LF/CRLF của Git trên Windows.
- Toàn bộ kho kiểm thử: **69/76 pass**. Bảy lỗi còn lại đều thuộc dữ liệu, audio hoặc bố cục Tiếng Việt đang được thay đổi song song; nhóm Toán/Tiếng Anh không có lỗi.

## Giới hạn cần hiểu đúng

- Vòng này xác minh danh mục, tên Unit, trang mở đầu, nguồn tham chiếu và tính trung thực của nhãn hiển thị.
- Chưa trích nguyên văn toàn bộ hội thoại, bài nghe, bài đọc, câu lệnh và từng bài tập của 92 Unit; do đó trạng thái vẫn là `reference_only`, không phải `verified`.
- Muốn đạt chuẩn từng hoạt động đúng SGK cần manifest theo Lesson 1/2/3, trang, transcript nghe, đáp án và kiểm duyệt trực quan trước khi phát hành như nội dung SGK.
