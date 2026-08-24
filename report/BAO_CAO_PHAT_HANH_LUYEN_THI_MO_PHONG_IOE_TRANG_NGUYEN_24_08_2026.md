# Báo cáo phát hành Luyện thi mô phỏng IOE và Trạng Nguyên

Ngày kiểm tra: 24/08/2026

## Phạm vi

| Phân hệ | Lớp | Số đề | Số hoạt động | Audio |
|---|---:|---:|---:|---:|
| IOE mô phỏng | 1–5 | 60 | 3.100 | 620 |
| Trạng Nguyên mô phỏng | 1–5 | 60 | 1.800 | 0 |
| **Tổng** | **1–5** | **120** | **4.900** | **620** |

Toàn bộ câu hỏi là nội dung WonderKids tự biên soạn có đối chiếu phạm vi và cấu trúc công bố; không phải đề thi chính thức và không sao chép logo hoặc giao diện của đơn vị tổ chức.

## Kết quả cổng dữ liệu

- PASS: đủ 10 gói kỳ thi–lớp và đúng 12 đề cho mỗi gói.
- PASS: IOE đúng 3.100 hoạt động; Trạng Nguyên đúng 1.800 hoạt động.
- PASS: đề IOE 1–10 có 30 câu, 6 câu nghe; đề 11–12 có 100 câu ở lớp 1–2 và 200 câu ở lớp 3–5.
- PASS: đề Trạng Nguyên có 30 câu, 30 phút và 300 điểm.
- PASS: mỗi câu có đáp án, lời giải, chủ điểm, độ khó, nhãn nguồn và hash.
- PASS: không có ID trùng hoặc câu trùng nguyên văn trong cùng đề.
- PASS: nội dung tự biên soạn được ghi nhãn rõ, không trình bày như đề thi chính thức.

## Kết quả audio IOE

- PASS: 620/620 file MP3 tĩnh tồn tại.
- PASS: 620/620 file giải mã được bằng `ffprobe`.
- PASS: 620/620 file dùng giọng `en-US-JennyNeural`; không có fallback và không gọi TTS trực tuyến lúc học.
- PASS: `transcriptHash`, `sourceHash`, `fileHash`, thời lượng và đường dẫn được lưu trong manifest.
- PASS: mỗi câu nghe có một asset riêng; chuyển câu/rời màn hình hủy audio cũ.
- PASS: đề luyện cho phép 0.8x/1.0x và nghe lại; đề thi thử khóa 1.0x, tối đa hai lượt.
- PASS: F5 giữ lại số lượt nghe; transcript chỉ xuất hiện sau khi nộp bài.

Lệnh kiểm tra độc lập: `npm run verify:ioe-audio`.

## Kết quả DOM, route và responsive

- PASS: quét SSR DOM đủ 4.900/4.900 hoạt động, khôi phục đúng item theo query `?cau=`.
- PASS: URL câu 200 mở đúng `/luyen-de/ioe/lop-5/de-12?cau=200` và hiện nút nộp bài.
- PASS: kiểm tra trực tiếp trên trình duyệt xác nhận play audio, bộ đếm lượt nghe và F5.
- PASS: không tràn ngang ở viewport 360×780 và 768×1024.
- PASS: trước khi nộp chỉ render câu hiện tại; không đưa 100–200 câu vào DOM cùng lúc.

## Regression và build

- PASS: `npm test` — 137/137 test đạt sau lần tinh chỉnh nội dung cuối.
- PASS: `npm run build` — TypeScript và Vite build thành công sau lần tinh chỉnh nội dung cuối.
- PASS: test riêng quét DOM đủ 4.900 câu và test chống để lộ đáp án trong câu điền từ.

## Nguồn đối chiếu cấu trúc

- IOE 2026–2027: https://ioe.vn/chi-tiet/tin-tu-ban-to-chuc/tin-tu-ban-to-chuc-1-7774
- IOE lớp 1–2: https://ioe.vn/chi-tiet/tin-tu-ban-to-chuc/04-diem-moi-can-biet-trong-ky-thi-ioe-cap-truong-nam-hoc-20252026-1-7412
- IOE thi trải nghiệm: https://ioe.vn/chi-tiet/tin-tu-ban-to-chuc/btc-thong-bao-to-chuc-thi-trai-nghiem-ioe-cap-truong-khoi-ththcs-nam-hoc-20252026-1-7409
- Trạng Nguyên Tiếng Việt 2026–2027: https://trangnguyen.edu.vn/tin-tuc/the-le-san-choi-trang-nguyen-tieng-viet-nam-hoc-2026-2027
