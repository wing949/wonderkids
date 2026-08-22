# Bằng chứng, báo cáo và cổng phát hành

## Bộ bằng chứng tối thiểu

Mỗi lần báo cáo phải nêu lệnh/phép kiểm tra vừa chạy, thời điểm/phạm vi và số lượng thực tế. Tối thiểu gồm:

1. **Nguồn:** URL/manifest sách và hash/trang liên quan.
2. **Dữ liệu:** tổng bài, trạng thái, thiếu/trùng ID, nguồn/trang/hash, tổng hoạt động và sai lệch.
3. **Nội dung:** số bài đã so nguyên văn, danh sách bài sai đã sửa, số bài còn pending.
4. **Runtime/DOM:** route, F5, tiêu đề, nội dung, số hoạt động, mobile/desktop và ảnh/log lỗi khi có.
5. **Audio:** manifest, transcript hash, file chính/fallback, file lỗi/thiếu/trùng và kiểm tra URL production nếu đã deploy.
6. **Kỹ thuật:** test liên quan, build và lỗi còn lại. Phân biệt lỗi trong phạm vi với lỗi có sẵn ngoài phạm vi.

## Báo cáo đầu ra

- Báo cáo Markdown công khai/tóm tắt: tổng quan theo môn/lớp/tập, PASS/FAIL/pending, lỗi đã sửa, lỗi còn lại, trạng thái DOM/audio/build.
- CSV chi tiết khi rà soát hàng loạt: một hàng cho mỗi bài hoặc mỗi hoạt động theo yêu cầu. Có cột nguồn SGK, nội dung app, trang, tiểu ý, trạng thái khớp, câu hỏi/audio và ghi chú.
- Không ghi `100% PASS` nếu không có kiểm tra toàn bộ tương ứng. Mẫu đại diện phải được gọi đúng là mẫu đại diện.

## Cổng phát hành

Một phạm vi chỉ được đề nghị phát hành khi:

- 100% bài trong phạm vi có trạng thái nguồn đúng;
- 0 bài/hoạt động thiếu, thừa hoặc ánh xạ trùng theo mô hình đã chọn;
- 0 rác OCR/nội dung bài bên cạnh trong DOM;
- mọi route được kiểm tra tự động và các lỗi DOM trực quan đã được sửa rồi kiểm tra lại;
- audio bắt buộc đạt 100% manifest/transcript/file; file chính không trùng fallback;
- test liên quan và build thành công trên trạng thái cuối;
- báo cáo được tái sinh từ dữ liệu cuối, không dùng số liệu trước khi sửa.

## Commit, push và deploy

- Chỉ commit/push/deploy khi người dùng yêu cầu hoặc workflow hiện tại đã trao quyền rõ ràng.
- Trước commit, xem diff theo phạm vi, không đưa file cache/PDF/ảnh nguồn/tệp tạm hoặc thay đổi của người dùng vào commit.
- Sau push, xác nhận commit ở remote. Sau deploy, xác nhận deployment Ready, alias production, DOM production và URL asset; commit thành công không đồng nghĩa website đã cập nhật.
- Nếu production khác local, điều tra deployment/cache/bundle trước khi sửa dữ liệu lần nữa.

## Mẫu kết luận

Nêu ngắn gọn theo thứ tự:

- Đã kiểm tra/sửa bao nhiêu trên tổng bao nhiêu.
- PASS/FAIL/pending theo từng cổng.
- Bằng chứng chính (test, build, DOM, audio/production).
- Đường dẫn báo cáo.
- Việc chưa làm và lý do; trạng thái commit/push/deploy.
