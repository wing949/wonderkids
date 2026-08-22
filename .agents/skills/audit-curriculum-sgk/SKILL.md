---
name: audit-curriculum-sgk
description: Rà soát, đối chiếu, chỉnh sửa và kiểm chứng nội dung chương trình Tiếng Việt, Toán hoặc Tiếng Anh trong WonderKids theo SGK chính thức; dùng khi nhập bài, sửa sai nguồn/trang/nội dung/câu hỏi/audio, kiểm tra DOM hoặc chuẩn bị phát hành chương trình học.
---

# Rà soát chương trình SGK

Mục tiêu là tạo một chuỗi bằng chứng có thể kiểm tra lại từ nguồn sách đến dữ liệu, giao diện và audio. Không đánh dấu bài là đúng SGK chỉ vì tên bài hoặc ảnh trang có vẻ phù hợp.

## Chọn phạm vi trước khi làm

1. Xác định môn, lớp, tập/học kỳ, bộ sách, số bài và các đầu ra người dùng yêu cầu.
2. Ghi lại số lượng ban đầu theo từng trạng thái: chưa nhập, bản nháp/OCR, đã đối chiếu, đã phát hành, thiếu audio.
3. Phân biệt yêu cầu chỉ rà soát với yêu cầu được phép chỉnh sửa, commit, push hoặc deploy. Không suy rộng quyền ghi hay phát hành.
4. Kiểm tra worktree và giữ nguyên thay đổi không thuộc phạm vi.

## Quy trình bắt buộc

1. Đọc [quy trình nguồn và đối chiếu](references/workflow.md) trước mọi lần nhập, rà soát hoặc sửa nội dung.
2. Đọc đúng phần môn học trong [quy tắc theo môn](references/subject-rules.md). Không áp dụng quy tắc “nguyên văn bài đọc” của Tiếng Việt cho nội dung luyện bổ trợ Toán/Tiếng Anh.
3. Tạo kiểm thử hoặc phép kiểm tra thất bại tái hiện sai lệch trước khi sửa mã/dữ liệu khi có thể.
4. Sửa ở nguồn dữ liệu gốc hoặc pipeline sinh dữ liệu; không vá riêng chữ đang hiển thị nếu lần sinh sau sẽ ghi đè.
5. Thực hiện đủ năm vòng cross-check khác mục đích, sửa mọi bài sai rồi chạy lại vòng bị ảnh hưởng.
6. Đọc [cổng bằng chứng và phát hành](references/evidence-release.md), kiểm tra DOM thực tế và chỉ báo cáo PASS theo đúng số bài đã chứng minh.

## Bất biến dữ liệu

- Mọi nội dung nhận là SGK phải có ít nhất: bộ sách, lớp, tập, bài, `sourcePages`, nhãn nguồn, hash nguồn và trạng thái kiểm duyệt.
- `verified` chỉ dành cho nội dung đã so trực tiếp với trang sách. OCR, mục lục hoặc nguồn giải bài bên thứ ba không đủ để xác minh nguyên văn.
- Nội dung app tự tạo phải được gắn là bổ trợ trong dữ liệu/chi tiết nguồn; không được giả là câu chữ, câu hỏi hoặc hoạt động trong SGK.
- Một hoạt động app chỉ ánh xạ tới một hoạt động/tiểu ý SGK. Phần bổ trợ không được cộng vào số hoạt động SGK.
- Thẻ bài hiển thị thông tin hữu ích cho trẻ; provenance chi tiết nằm trong bài hoặc báo cáo, không làm tiêu đề thẻ.
- URL bài học phải tồn tại độc lập, chia sẻ được và giữ đúng trạng thái khi tải lại.
- Audio bài đọc dùng đúng một file chính và một fallback cùng transcript. Khi lỗi phải hủy sạch luồng cũ trước khi phát fallback của chính bài đó.

## Điều kiện dừng

Không công bố hoàn thành nếu còn bất kỳ mục nào sau đây:

- thiếu nguồn hoặc chưa xác định đúng sách/lớp/tập/bài/trang;
- nội dung được gắn `verified` nhưng chưa so trực quan với SGK;
- thiếu/thừa hoặc ánh xạ trùng hoạt động/câu hỏi;
- DOM khác dữ liệu, có rác OCR, bị cắt sai, tràn mobile hoặc F5 sai bài;
- audio thiếu, sai transcript/hash/trang, file chính trùng fallback hoặc đường dẫn production lỗi;
- kiểm thử/build thất bại trong phạm vi thay đổi;
- báo cáo chỉ dùng mẫu nhưng lại tuyên bố toàn bộ.

Khi chưa đạt, báo số PASS/FAIL thực tế, danh sách lỗi còn lại và bước tiếp theo. Không đổi nhãn thành PASS để làm đẹp báo cáo.
