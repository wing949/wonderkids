# Quy trình nguồn, trích xuất và cross-check

## 1. Chốt nguồn chuẩn

- Ưu tiên trang/PDF/ảnh sách chính thức của NXB Giáo dục Việt Nam hoặc nguồn chính thức mà người dùng chỉ định.
- Lưu manifest sách: mã sách, bộ sách, lớp, tập, URL, danh sách trang/ảnh, checksum và trạng thái nhập liệu.
- Cache PDF/ảnh nguồn ngoài Git nếu repo quy định như vậy. Không ghi đè hoặc xóa nguồn/audio cũ nếu chưa xác định chính xác phạm vi và quyền thực hiện.
- Nguồn giải bài, blog, OCR hoặc bản chép lại chỉ dùng để tìm kiếm/gợi ý. Mọi khẳng định “nguyên văn SGK” phải quay lại trang sách chính thức.

## 2. Lập bảng kiểm kê trước khi chỉnh sửa

Mỗi hàng ứng với một bài, tối thiểu có:

`subject, grade, semester, lessonId, lessonNumber, title, sourceBook, sourcePages, sourceStatus, transcriptStatus, activityCountSgk, activityCountApp, audioStatus, domStatus, notes`.

Ghi tổng theo lớp/tập và tìm ngay:

- ID trùng hoặc thiếu thứ tự;
- tên bài/trang/tập không thuộc manifest;
- bài đã phát hành nhưng chưa `verified`;
- bài có audio nhưng không có transcript hoặc manifest;
- đường dẫn bài không phân giải được.

## 3. Trích xuất có truy vết

1. Xác định ranh giới bài từ mục lục và trang mở đầu/kết thúc.
2. OCR hoặc nhập văn bản theo khối: tiêu đề, tác giả, bài đọc, câu lệnh, hoạt động, tiểu ý, đáp án/hướng dẫn.
3. Giữ xuống dòng, dấu câu, lời thoại, ký hiệu toán học và chính tả có ý nghĩa. Loại watermark/header/footer/số trang khỏi nội dung app nhưng không khỏi ảnh đối chiếu.
4. Gắn `sourcePage`, `sourceLabel`, `sourceHash` và trạng thái `draft` cho từng khối.
5. Không dùng mô tả, provenance hoặc ghi chú kiểm toán làm `cardPreview` hay transcript audio.

## 4. Năm vòng cross-check

Mỗi vòng có mục đích khác nhau; “đọc lại năm lần” không được tính là cross-check năm vòng.

### Vòng 1 — Danh mục và cấu trúc

- Đúng tổng số bài, thứ tự, lớp, tập/học kỳ, tên bài và trang.
- ID duy nhất; route sinh đúng; không có bài rơi khỏi danh sách.

### Vòng 2 — Nội dung trực quan với SGK

- So từng đoạn/câu/dòng/biểu thức với ảnh trang chính thức.
- Kiểm tra dấu tiếng Việt, dấu câu, lời thoại, tác giả, công thức, đơn vị và ranh giới bài.
- Gỡ rác OCR, watermark, tiêu đề lặp, footer và nội dung từ bài bên cạnh.

### Vòng 3 — Hoạt động, câu hỏi và đáp án

- Đếm từng hoạt động và từng tiểu ý a/b/c.
- Đảm bảo ánh xạ một-một, không thiếu/thừa/trùng.
- Xác minh dạng chấm điểm: tự động chỉ khi đáp án rõ; đọc/nói/nghe/quan sát/viết mở dùng tự xác nhận.
- Tách riêng `appExtensions`; không gọi câu hỏi tự sinh là bài tập SGK.

### Vòng 4 — Runtime, route và DOM

- Mở danh sách và bài học thật; kiểm tra dữ liệu đã render chứ không chỉ đọc file nguồn.
- Kiểm tra tiêu đề, nội dung, nguồn/trang, số câu hỏi, nút thao tác, popup và trạng thái khóa.
- F5 và mở URL trực tiếp phải giữ đúng bài. Kiểm tra desktop và mobile: không tràn, không cắt nội dung cần đọc, touch target đủ lớn.
- Với lô lớn, quét DOM toàn bộ bằng script; sau đó kiểm tra trực quan các lỗi và mẫu đại diện theo từng lớp/tập. Không suy từ vài ảnh mẫu thành 100%.

### Vòng 5 — Độc lập và production

- Đối chiếu lại từ manifest/báo cáo sang SGK theo chiều ngược, ưu tiên người kiểm tra hoặc phương pháp khác vòng 2.
- Chạy test/build trên worktree cuối cùng.
- Nếu đã được phép deploy, kiểm tra URL production, asset status và DOM production; không dùng kết quả localhost để tuyên bố production PASS.

Sau mỗi vòng, sửa lỗi ở dữ liệu/pipeline gốc, tái sinh nếu cần và chạy lại mọi vòng bị tác động.

## 5. Chuẩn hóa hiển thị

- Thẻ bài: nhãn nguồn/trang ngắn, tên chính xác, ba dòng `Nội dung`, `Mục tiêu`, `Rèn luyện` có giới hạn ký tự và chiều cao ổn định.
- Popup/chi tiết bài: hiển thị đủ ba mục, không dùng dấu ba chấm thay nội dung đầy đủ.
- Trang bài học: bố trí nguồn SGK và nội dung app dễ đọc; không lặp nhãn/tiêu đề; cột và mép trên cân đối; responsive không tràn.
- Nút bị khóa phải có lý do đúng trạng thái. Khi asset hợp lệ đã phát hành, DOM không được còn `disabled`.
