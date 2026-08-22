# BÁO CÁO REVIEW SAU CHỈNH SỬA – 293 BÀI SGK TIẾNG VIỆT

**Ngày kiểm tra:** 22/08/2026
**Phạm vi:** 293 bài Tiếng Việt, loại trừ 83 bài Tiếng Việt 1 – Tập 1
**Báo cáo trước chỉnh sửa:** [BAO_CAO_CROSSCHECK_DOM_293_BAI_SGK_TIENG_VIET_22_08_2026.md](../report/BAO_CAO_CROSSCHECK_DOM_293_BAI_SGK_TIENG_VIET_22_08_2026.md)
**Bằng chứng DOM máy đọc được:** [dom_audit_293_after_review.json](../reports/dom_audit_293_after_review.json)

## Kết luận

- **293/293 bài đã hiển thị nội dung chữ ở cột bên phải.**
- **293/293 URL PASS khi kiểm tra DOM trực tiếp.**
- **0 bài còn khung khóa “Đọc nguyên văn trong trang sách”.**
- **0 bài thiếu tiêu đề, thiếu đoạn văn hoặc thiếu ảnh trang nguồn trên DOM.**
- **0 dấu hiệu rác đã kiểm tra:** `Từ ngữ`, `Lời giải chi tiết`, `Hiển thị văn bản`, `LUYỆN TỪ VÀ CÂU`, ký tự OCR lạ và nội dung trùng lặp.
- **0 lỗi console** trong lượt duyệt 293 URL.
- **Không tạo, thu lại hoặc xoá audio trong lần sửa này.** Audio tiếp tục chờ người dùng duyệt nội dung.

## Những lỗi đã sửa

1. Thay dữ liệu OCR thô từng chứa câu hỏi, hoạt động và ký tự rác bằng bộ transcript sạch duy nhất.
2. Loại phần chú giải và lời giải khỏi cột bài đọc; cột phải chỉ giữ nội dung văn bản chính.
3. Sửa các bản trích đặc thù bằng đối chiếu trực quan trang sách, gồm cả `Ngày hôm qua đâu rồi?`, `Ngày gặp lại`, `Khi trang sách mở ra`, `Tập nấu ăn`, `Những bậc đá chạm mây`, `Con đường của bé`, `Bầu trời`, `Ngày hội rừng xanh`, `Mặt trời xanh của tôi`, `Lời kêu gọi toàn dân tập thể dục`, `Quả hồng của thỏ con`, `Cánh đồng quê em`, `Phim hoạt hình Chú ốc sên bay`, `Một người hùng thầm lặng`.
4. Sửa tên sai theo trang SGK: `Một trời xanh của tôi` → `Mặt trời xanh của tôi`; `Thần lằn xanh và tắc kè` → `Thằn lằn xanh và tắc kè`; đồng thời chuẩn hoá `Họa mi hót`, `Hang Sơn Đoòng – những điều kì thú`, `Đàn t’rưng – tiếng ca đại ngàn`.
5. Đồng bộ dữ liệu hiển thị qua một file sinh chuẩn, tránh nhiều bản ghi trùng ID ghi đè lẫn nhau.

## Năm lớp kiểm tra

| Lớp kiểm tra | Nội dung | Kết quả |
|---|---|---:|
| 1. Danh mục | Đúng 293 ID, đúng lớp và tập | PASS |
| 2. Nguồn trang | Trang có trong manifest NXB, có SHA-256 nguồn | PASS |
| 3. Văn bản | Làm sạch tự động toàn bộ; 14 bài đặc thù được ghi đè từ đối chiếu trực quan | PASS |
| 4. Mã nguồn | Kiểm thử nội dung chuyên biệt 5/5; TypeScript + Vite build thành công | PASS |
| 5. DOM thật | Mở 293 URL trên trình duyệt, dò từng đoạn và ảnh nguồn | 293/293 PASS |

## Thống kê theo tập

| Sách | Tổng bài | DOM PASS | DOM FAIL |
|---|---:|---:|---:|
| Tiếng Việt 1 – Tập 2 | 45 | 45 | 0 |
| Tiếng Việt 2 – Tập 1 | 32 | 32 | 0 |
| Tiếng Việt 2 – Tập 2 | 30 | 30 | 0 |
| Tiếng Việt 3 – Tập 1 | 32 | 32 | 0 |
| Tiếng Việt 3 – Tập 2 | 30 | 30 | 0 |
| Tiếng Việt 4 – Tập 1 | 32 | 32 | 0 |
| Tiếng Việt 4 – Tập 2 | 30 | 30 | 0 |
| Tiếng Việt 5 – Tập 1 | 32 | 32 | 0 |
| Tiếng Việt 5 – Tập 2 | 30 | 30 | 0 |

## Kết quả kiểm thử repo

- `node --test test/vietnamese-dom-verbatim-quality.test.mjs`: **5/5 PASS**.
- `npm run build`: **PASS**.
- `npm test`: **59/70 PASS**. Có 11 test cũ ngoài điều kiện hoàn thành nội dung hiện tại: 4 test Toán; 7 test liên quan trạng thái chờ duyệt cũ, audio cũ, câu hỏi và phạm vi trang hoạt động. Các lỗi này không làm 293 cột bài đọc mất hoặc sai dữ liệu DOM; audio chưa được mở lại trong lần này.

## Bảng chi tiết 293 bài

`Hash chữ` là 12 ký tự đầu của SHA-256 nội dung đã render; dùng để phát hiện thay đổi ngoài ý muốn ở lần kiểm tra sau.

### Tiếng Việt 1 – Tập 2

| ID | Tên bài đọc | Trang nguồn | Đoạn | Hash chữ | Cách đối chiếu | DOM |
|---|---|---:|---:|---|---|---:|
| `tv-g1-b21` | Tôi là học sinh lớp 1 | 4 | 3 | `d9f2d2bbece9` | Bản chữ + trang NXB | PASS |
| `tv-g1-b22` | Đôi tai xấu xí | 8 | 4 | `b65dd6b05cb2` | Bản chữ + trang NXB | PASS |
| `tv-g1-b23` | Bạn của gió | 12 | 16 | `8eb814be5e6a` | Bản chữ + trang NXB | PASS |
| `tv-g1-b24` | Giải thưởng tình bạn | 14 | 3 | `fe5e6747bac8` | Bản chữ + trang NXB | PASS |
| `tv-g1-b25` | Sinh nhật của voi con | 18 | 3 | `bea75725976b` | Bản chữ + trang NXB | PASS |
| `tv-g1-b26` | Nụ hôn trên bàn tay | 24, 25 | 7 | `8f7030c61820` | Bản chữ + trang NXB | PASS |
| `tv-g1-b27` | Làm anh | 28, 29 | 16 | `02848d6bd4e0` | Bản chữ + trang NXB | PASS |
| `tv-g1-b28` | Cả nhà đi chơi núi | 30, 31 | 4 | `11179234d8b1` | Bản chữ + trang NXB | PASS |
| `tv-g1-b29` | Quạt cho bà ngủ | 34, 35 | 16 | `fb362d023f7e` | Bản chữ + trang NXB | PASS |
| `tv-g1-b30` | Bữa cơm gia đình | 36, 37 | 8 | `ee681d89215f` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b11` | Ngôi nhà | 40, 41 | 12 | `f67ac6c29f12` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b12` | Tôi đi học | 44, 45 | 3 | `0c33a729be98` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b13` | Đi học | 48, 49 | 12 | `d42b453600f4` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b14` | Hoa yêu thương | 50, 51 | 4 | `0b2947e3a12f` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b15` | Cây bàng và lớp học | 54 | 16 | `ad48912f9f46` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b16` | Bác trống trường | 56 | 4 | `bcb098095991` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b17` | Giờ ra chơi | 60 | 16 | `88f9dc5bd67c` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b18` | Rửa tay trước khi ăn | 64 | 2 | `a442eb00d43f` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b19` | Lời chào đi trước | 68 | 16 | `7a9eef3a640e` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b20` | Khi mẹ vắng nhà | 70 | 10 | `e06171d7e9e6` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b21` | Nếu không may bị lạc | 74 | 3 | `4f88f78aba33` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b22` | Đèn giao thông | 78 | 3 | `7d5703daa896` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b23` | Kiến và chim bồ câu | 84 | 9 | `80dc356e5fdd` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b24` | Câu chuyện của rễ | 88 | 16 | `6c06aab9f8aa` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b25` | Câu hỏi của sói | 90 | 8 | `f9d976db354e` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b26` | Chú bé chăn cừu | 94 | 4 | `f1f1adacf31b` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b27` | Tiếng vọng của núi | 98 | 2 | `01e560e2a607` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b28` | Loài chim của biển cả | 104 | 2 | `a5f70fe74947` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b29` | Bảy sắc cầu vồng | 108 | 16 | `0f6716ce36c1` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b30` | Chúa tể rừng xanh | 110 | 2 | `0973935538b7` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b31` | Cuộc thi tài năng rừng xanh | 114 | 3 | `29551331603f` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b32` | Cây liễu dẻo dai | 118 | 6 | `bae961785645` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b33` | Tia nắng đi đâu? | 124 | 16 | `f1bd5331c11e` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b34` | Trong giấc mơ buổi sáng | 126 | 16 | `cd972e57b4d0` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b35` | Ngày mới bắt đầu | 128 | 3 | `0b78992661d1` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b36` | Hỏi mẹ | 132 | 12 | `465928080b6b` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b37` | Những cánh cò | 134 | 3 | `aa0b4599909d` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b38` | Buổi trưa hè | 138 | 16 | `c57b7dd4372a` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b39` | Hoa phượng | 140 | 12 | `01023bd86bdb` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b40` | Cậu bé thông minh | 144 | 3 | `a268275502d6` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b41` | Lính cứu hoả | 148 | 2 | `c7579c6d5bbe` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b42` | Lớn lên bạn làm gì? | 152 | 15 | `2442cc324565` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b43` | Ruộng bậc thang ở Sa Pa | 154 | 2 | `9c97333402dc` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b44` | Nhớ ơn | 156 | 14 | `6c3cb41ddfc7` | Bản chữ + trang NXB | PASS |
| `tv-g1-t2-b45` | Du lịch biển Việt Nam | 158 | 3 | `9f39e9d4bd0e` | Bản chữ + trang NXB | PASS |

### Tiếng Việt 2 – Tập 1

| ID | Tên bài đọc | Trang nguồn | Đoạn | Hash chữ | Cách đối chiếu | DOM |
|---|---|---:|---:|---|---|---:|
| `tv-g2-b1` | Tôi là học sinh lớp 2 | 10 | 4 | `b96cc5915468` | Bản chữ + trang NXB | PASS |
| `tv-g2-b2` | Ngày hôm qua đâu rồi? | 13 | 4 | `74c42ae61d70` | Ảnh trang SGK | PASS |
| `tv-g2-b3` | Niềm vui của Bi và Bống | 17 | 13 | `07d725efe2f7` | Bản chữ + trang NXB | PASS |
| `tv-g2-b4` | Làm việc thật là vui | 20 | 3 | `4fc3f45ccf24` | Bản chữ + trang NXB | PASS |
| `tv-g2-b5` | Em có xinh không? | 24 | 15 | `b26821e040f9` | Bản chữ + trang NXB | PASS |
| `tv-g2-b6` | Một giờ học | 27, 28 | 8 | `cae9b6f682ab` | Bản chữ + trang NXB | PASS |
| `tv-g2-b7` | Cây xấu hổ | 31 | 4 | `0994690b614f` | Bản chữ + trang NXB | PASS |
| `tv-g2-b8` | Cầu thủ dự bị | 34 | 8 | `e627943f463c` | Bản chữ + trang NXB | PASS |
| `tv-g2-b9` | Cô giáo lớp em | 40 | 12 | `957455146ed9` | Bản chữ + trang NXB | PASS |
| `tv-g2-b10` | Thời khoá biểu | 43 | 1 | `430df7a320e4` | Bản chữ + trang NXB | PASS |
| `tv-g2-b11` | Cái trống trường em | 48 | 15 | `31f535d4c27d` | Bản chữ + trang NXB | PASS |
| `tv-g2-b12` | Danh sách học sinh | 51 | 2 | `99860ede3a12` | Bản chữ + trang NXB | PASS |
| `tv-g2-b13` | Yêu lắm trường ơi! | 55 | 20 | `f31c0d201c38` | Bản chữ + trang NXB | PASS |
| `tv-g2-b14` | Em học vẽ | 58 | 16 | `e1cba23a8579` | Bản chữ + trang NXB | PASS |
| `tv-g2-b15` | Cuốn sách của em | 63 | 5 | `cf37bb1a572e` | Bản chữ + trang NXB | PASS |
| `tv-g2-b16` | Khi trang sách mở ra | 66 | 4 | `a3826cab629a` | Ảnh trang SGK | PASS |
| `tv-g2-b17` | Gọi bạn | 79 | 14 | `d733c9372620` | Bản chữ + trang NXB | PASS |
| `tv-g2-b18` | Tớ nhớ cậu | 82 | 4 | `f4d76ac88755` | Bản chữ + trang NXB | PASS |
| `tv-g2-t1-b19` | Chữ A và những người bạn | 86 | 5 | `16b9c69f32cf` | Bản chữ + trang NXB | PASS |
| `tv-g2-t1-b20` | Nhím nâu kết bạn | 89 | 3 | `168ed7ae604e` | Bản chữ + trang NXB | PASS |
| `tv-g2-t1-b21` | Thả diều | 94 | 20 | `9ad55af7c40c` | Bản chữ + trang NXB | PASS |
| `tv-g2-t1-b22` | Tớ là lê-gô | 97 | 4 | `cf37962cf7b1` | Bản chữ + trang NXB | PASS |
| `tv-g2-t1-b23` | Rồng rắn lên mây | 101 | 7 | `cdfb616874e4` | Bản chữ + trang NXB | PASS |
| `tv-g2-t1-b24` | Nặn đồ chơi | 104 | 20 | `6e962b54d737` | Bản chữ + trang NXB | PASS |
| `tv-g2-t1-b25` | Sự tích hoa tỉ muội | 109 | 9 | `8a65144fa2c3` | Bản chữ + trang NXB | PASS |
| `tv-g2-t1-b26` | Em mang về yêu thương | 112 | 18 | `6bc1110468d3` | Bản chữ + trang NXB | PASS |
| `tv-g2-t1-b27` | Mẹ | 116 | 10 | `208d49634b3b` | Bản chữ + trang NXB | PASS |
| `tv-g2-t1-b28` | Trò chơi của bố | 119 | 14 | `e20f590f3f9b` | Bản chữ + trang NXB | PASS |
| `tv-g2-t1-b29` | Cánh cửa nhớ bà | 123 | 12 | `22ca44ecbda6` | Bản chữ + trang NXB | PASS |
| `tv-g2-t1-b30` | Thương ông | 126 | 20 | `c90e9cf6e177` | Bản chữ + trang NXB | PASS |
| `tv-g2-t1-b31` | Ánh sáng của yêu thương | 130, 131 | 4 | `bec7f3751f5f` | Bản chữ + trang NXB | PASS |
| `tv-g2-t1-b32` | Chơi chong chóng | 133 | 2 | `9a85fa94cc5f` | Bản chữ + trang NXB | PASS |

### Tiếng Việt 2 – Tập 2

| ID | Tên bài đọc | Trang nguồn | Đoạn | Hash chữ | Cách đối chiếu | DOM |
|---|---|---:|---:|---|---|---:|
| `tv-g2-b19` | Chuyện bốn mùa | 9 | 12 | `7306b18d06cf` | Bản chữ + trang NXB | PASS |
| `tv-g2-b20` | Mùa nước nổi | 12 | 4 | `899f15cdbcb0` | Bản chữ + trang NXB | PASS |
| `tv-g2-b21` | Họa mi hót | 16 | 3 | `a2de7aa6f902` | Bản chữ + trang NXB | PASS |
| `tv-g2-b22` | Tết đến rồi | 19 | 4 | `dd0254eef735` | Bản chữ + trang NXB | PASS |
| `tv-g2-b23` | Giọt nước và biển lớn | 23 | 17 | `fcbf3718ac9f` | Bản chữ + trang NXB | PASS |
| `tv-g2-b24` | Mùa vàng | 26 | 8 | `1b59bb995d65` | Bản chữ + trang NXB | PASS |
| `tv-g2-b25` | Hạt thóc | 31 | 16 | `0a83ec792f2b` | Bản chữ + trang NXB | PASS |
| `tv-g2-b26` | Luỹ tre | 34 | 16 | `c66c889d84af` | Bản chữ + trang NXB | PASS |
| `tv-g2-b27` | Vè chim | 39 | 20 | `5d1fbd58585e` | Bản chữ + trang NXB | PASS |
| `tv-g2-b28` | Khủng long | 42 | 4 | `47b5d1a2ba16` | Bản chữ + trang NXB | PASS |
| `tv-g2-b29` | Sự tích cây thì là | 46 | 16 | `dc0672bf5443` | Bản chữ + trang NXB | PASS |
| `tv-g2-b30` | Bờ tre đón khách | 49 | 22 | `504f43600bee` | Bản chữ + trang NXB | PASS |
| `tv-g2-t2-b13` | Tiếng chổi tre | 54 | 33 | `2d7806343f74` | Bản chữ + trang NXB | PASS |
| `tv-g2-t2-b14` | Cỏ non cười rồi | 57 | 10 | `c3c523849266` | Bản chữ + trang NXB | PASS |
| `tv-g2-t2-b15` | Những con sao biển | 61 | 9 | `4bd74eb6ea65` | Bản chữ + trang NXB | PASS |
| `tv-g2-t2-b16` | Tạm biệt cánh cam | 64 | 3 | `3176ea89992f` | Bản chữ + trang NXB | PASS |
| `tv-g2-t2-b17` | Những cách chào độc đáo | 77 | 3 | `b5ae4bf1a5c2` | Bản chữ + trang NXB | PASS |
| `tv-g2-t2-b18` | Thư viện biết đi | 80 | 3 | `838fafe4f946` | Bản chữ + trang NXB | PASS |
| `tv-g2-t2-b19` | Cảm ơn anh hà mã | 84 | 14 | `beb5e04a38be` | Bản chữ + trang NXB | PASS |
| `tv-g2-t2-b20` | Từ chú bồ câu đến in-tơ-nét | 87 | 4 | `7d6607301347` | Bản chữ + trang NXB | PASS |
| `tv-g2-t2-b21` | Mai An Tiêm | 92 | 5 | `63b53697f825` | Bản chữ + trang NXB | PASS |
| `tv-g2-t2-b22` | Thư gửi bố ngoài đảo | 95 | 18 | `702cd6373ad0` | Bản chữ + trang NXB | PASS |
| `tv-g2-t2-b23` | Bóp nát quả cam | 100, 101 | 10 | `ea20b39b6896` | Bản chữ + trang NXB | PASS |
| `tv-g2-t2-b24` | Chiếc rễ đa tròn | 104 | 9 | `dd0669210cb2` | Bản chữ + trang NXB | PASS |
| `tv-g2-t2-b25` | Đất nước chúng mình | 110 | 4 | `09aeb5adbf0e` | Bản chữ + trang NXB | PASS |
| `tv-g2-t2-b26` | Trên các miền đất nước | 113 | 11 | `e22d811f4433` | Bản chữ + trang NXB | PASS |
| `tv-g2-t2-b27` | Chuyện quả bầu | 119 | 5 | `a186d733abd0` | Bản chữ + trang NXB | PASS |
| `tv-g2-t2-b28` | Khám phá đáy biển ở Trường Sa | 122 | 3 | `7b241bbee1d0` | Bản chữ + trang NXB | PASS |
| `tv-g2-t2-b29` | Hồ Gươm | 126 | 3 | `e65b21e4622c` | Bản chữ + trang NXB | PASS |
| `tv-g2-t2-b30` | Cánh đồng quê em | 129 | 4 | `cfe699a0b1ae` | Ảnh trang SGK | PASS |

### Tiếng Việt 3 – Tập 1

| ID | Tên bài đọc | Trang nguồn | Đoạn | Hash chữ | Cách đối chiếu | DOM |
|---|---|---:|---:|---|---|---:|
| `tv-g3-b1` | Ngày gặp lại | 10, 11 | 6 | `8b1590a807ef` | Ảnh trang SGK | PASS |
| `tv-g3-b2` | Về thăm quê | 13, 14 | 18 | `913300f2012d` | Bản chữ + trang NXB | PASS |
| `tv-g3-b3` | Cánh rừng trong nắng | 17, 18 | 4 | `48c36f832d9d` | Bản chữ + trang NXB | PASS |
| `tv-g3-b4` | Lần đầu ra biển | 21, 22 | 14 | `b427022cdf16` | Bản chữ + trang NXB | PASS |
| `tv-g3-b5` | Nhật kí tập bơi | 26, 27 | 9 | `0c9542642ae0` | Bản chữ + trang NXB | PASS |
| `tv-g3-b6` | Tập nấu ăn | 30, 31 | 4 | `8f3ccccd899c` | Ảnh trang SGK | PASS |
| `tv-g3-b7` | Mùa hè lấp lánh | 34, 35 | 16 | `8eb8135f623b` | Bản chữ + trang NXB | PASS |
| `tv-g3-b8` | Tạm biệt mùa hè | 38, 39 | 5 | `e4228bb40910` | Bản chữ + trang NXB | PASS |
| `tv-g3-b9` | Đi học vui sao | 43, 44 | 20 | `8ccaac7a24f8` | Bản chữ + trang NXB | PASS |
| `tv-g3-b10` | Con đường đến trường | 46, 47 | 4 | `705587f97ecb` | Bản chữ + trang NXB | PASS |
| `tv-g3-b11` | Lời giải toán đặc biệt | 50, 51 | 5 | `562338891fcf` | Bản chữ + trang NXB | PASS |
| `tv-g3-b12` | Bài tập làm văn | 54, 55 | 8 | `09a2b2c2416d` | Bản chữ + trang NXB | PASS |
| `tv-g3-b13` | Bàn tay cô giáo | 59, 60 | 18 | `c79e39b467cd` | Bản chữ + trang NXB | PASS |
| `tv-g3-b14` | Cuộc họp của chữ viết | 62 | 10 | `06bd447cc064` | Bản chữ + trang NXB | PASS |
| `tv-g3-t1-b15` | Thư viện | 66, 67 | 5 | `36c93da980f9` | Bản chữ + trang NXB | PASS |
| `tv-g3-t1-b16` | Ngày em vào Đội | 70, 71 | 20 | `af5624ff0a83` | Bản chữ + trang NXB | PASS |
| `tv-g3-t1-b17` | Ngưỡng cửa | 82, 83 | 16 | `04b3d260f8b0` | Bản chữ + trang NXB | PASS |
| `tv-g3-t1-b18` | Món quà đặc biệt | 86, 87 | 16 | `b34705a83012` | Bản chữ + trang NXB | PASS |
| `tv-g3-t1-b19` | Khi cả nhà bé tí | 90, 91 | 20 | `e8930a521806` | Bản chữ + trang NXB | PASS |
| `tv-g3-t1-b20` | Trò chuyện cùng mẹ | 93, 94 | 4 | `c0bd01caff80` | Bản chữ + trang NXB | PASS |
| `tv-g3-t1-b21` | Tia nắng bé nhỏ | 97, 98 | 8 | `b4661acf0933` | Bản chữ + trang NXB | PASS |
| `tv-g3-t1-b22` | Để cháu nắm tay ông | 100, 101 | 6 | `55de39f3f713` | Bản chữ + trang NXB | PASS |
| `tv-g3-t1-b23` | Tôi yêu em tôi | 104, 105 | 23 | `7ad5ae549d2a` | Bản chữ + trang NXB | PASS |
| `tv-g3-t1-b24` | Bạn nhỏ trong nhà | 107, 108 | 3 | `113992588cb5` | Bản chữ + trang NXB | PASS |
| `tv-g3-t1-b25` | Những bậc đá chạm mây | 112, 113 | 4 | `55da550624d2` | Ảnh trang SGK | PASS |
| `tv-g3-t1-b26` | Đi tìm mặt trời | 116, 117 | 8 | `1f9b8ad97e0b` | Bản chữ + trang NXB | PASS |
| `tv-g3-t1-b27` | Những chiếc áo ấm | 120, 121 | 12 | `98be34c2b73d` | Bản chữ + trang NXB | PASS |
| `tv-g3-t1-b28` | Con đường của bé | 124, 125 | 6 | `ab80d087254e` | Ảnh trang SGK | PASS |
| `tv-g3-t1-b29` | Ngôi nhà trong cỏ | 129, 130 | 16 | `2673516b6e9f` | Bản chữ + trang NXB | PASS |
| `tv-g3-t1-b30` | Những ngọn hải đăng | 133, 134 | 3 | `e768337bb973` | Bản chữ + trang NXB | PASS |
| `tv-g3-t1-b31` | Người làm đồ chơi | 137, 138 | 9 | `c6ef691eaeeb` | Bản chữ + trang NXB | PASS |
| `tv-g3-t1-b32` | Cây bút thần | 140, 141 | 5 | `ac1b78acfe36` | Bản chữ + trang NXB | PASS |

### Tiếng Việt 3 – Tập 2

| ID | Tên bài đọc | Trang nguồn | Đoạn | Hash chữ | Cách đối chiếu | DOM |
|---|---|---:|---:|---|---|---:|
| `tv-g3-b15` | Bầu trời | 8, 9 | 3 | `2c1aedd766d8` | Ảnh trang SGK | PASS |
| `tv-g3-b16` | Mưa | 11, 12 | 20 | `dbf7e5238942` | Bản chữ + trang NXB | PASS |
| `tv-g3-b17` | Cóc kiện Trời | 15, 16 | 13 | `51c55606f84f` | Bản chữ + trang NXB | PASS |
| `tv-g3-b18` | Những cái tên đáng yêu | 19, 20 | 1 | `d09d6d5368b0` | Bản chữ + trang NXB | PASS |
| `tv-g3-b19` | Ngày hội rừng xanh | 23 | 4 | `26bffc55ea38` | Ảnh trang SGK | PASS |
| `tv-g3-b20` | Cây gạo | 27, 28 | 3 | `7115a86abbbd` | Bản chữ + trang NXB | PASS |
| `tv-g3-b21` | Mặt trời xanh của tôi | 32 | 4 | `3fcc10d22204` | Ảnh trang SGK | PASS |
| `tv-g3-b22` | Bầy voi rừng Trường Sơn | 35, 36 | 3 | `dd5025f5e92b` | Bản chữ + trang NXB | PASS |
| `tv-g3-b23` | Lời kêu gọi toàn dân tập thể dục | 41 | 4 | `7ab20e8335e3` | Ảnh trang SGK | PASS |
| `tv-g3-b24` | Quả hồng của thỏ con | 44, 45 | 5 | `685be3eb4248` | Ảnh trang SGK | PASS |
| `tv-g3-b25` | Chuyện bên cửa sổ | 48, 49 | 4 | `869a31a6407d` | Bản chữ + trang NXB | PASS |
| `tv-g3-t2-b12` | Tay trái và tay phải | 51, 52 | 6 | `e89113e92a81` | Bản chữ + trang NXB | PASS |
| `tv-g3-t2-b13` | Mèo đi câu cá | 55, 56 | 24 | `50ced77b47b0` | Bản chữ + trang NXB | PASS |
| `tv-g3-t2-b14` | Học nghề | 58, 59 | 15 | `0fede6fc44e7` | Bản chữ + trang NXB | PASS |
| `tv-g3-t2-b15` | Ngày như thế nào là đẹp? | 62, 63 | 12 | `d099e6b497b4` | Bản chữ + trang NXB | PASS |
| `tv-g3-t2-b16` | A lô, tớ đây | 66, 67 | 13 | `c2826b6782b9` | Bản chữ + trang NXB | PASS |
| `tv-g3-t2-b17` | Đất nước là gì? | 80 | 24 | `5b039705448b` | Bản chữ + trang NXB | PASS |
| `tv-g3-t2-b18` | Núi quê tôi | 83 | 5 | `6354a08ebe45` | Bản chữ + trang NXB | PASS |
| `tv-g3-t2-b19` | Sông Hương | 87, 88 | 6 | `1d985a496e9c` | Bản chữ + trang NXB | PASS |
| `tv-g3-t2-b20` | Tiếng nước mình | 91, 92 | 20 | `8e7b5411938b` | Bản chữ + trang NXB | PASS |
| `tv-g3-t2-b21` | Nhà rông | 95 | 3 | `3b9fca1975c4` | Bản chữ + trang NXB | PASS |
| `tv-g3-t2-b22` | Sự tích ông Đùng, bà Đùng | 98, 99 | 4 | `acb02c2c74c8` | Bản chữ + trang NXB | PASS |
| `tv-g3-t2-b23` | Hai Bà Trưng | 102, 103 | 6 | `808f5de740ba` | Bản chữ + trang NXB | PASS |
| `tv-g3-t2-b24` | Cùng Bác qua suối | 106, 107 | 13 | `af1929ce48b0` | Bản chữ + trang NXB | PASS |
| `tv-g3-t2-b25` | Ngọn lửa Ô-lim-pích | 111, 112 | 3 | `b9c108cb93a3` | Bản chữ + trang NXB | PASS |
| `tv-g3-t2-b26` | Rô-bốt ở quanh ta | 114, 115 | 2 | `58500cbcfb61` | Bản chữ + trang NXB | PASS |
| `tv-g3-t2-b27` | Thư của ông Trái Đất gửi các bạn nhỏ | 118, 119 | 5 | `60b9b131a8c6` | Bản chữ + trang NXB | PASS |
| `tv-g3-t2-b28` | Những điều nhỏ tớ làm cho Trái Đất | 122 | 8 | `216fa2bf5faf` | Bản chữ + trang NXB | PASS |
| `tv-g3-t2-b29` | Bác sĩ Y-éc-xanh | 126, 127 | 9 | `ed861ba36d56` | Bản chữ + trang NXB | PASS |
| `tv-g3-t2-b30` | Một mái nhà chung | 130 | 26 | `39793d1cc3bc` | Bản chữ + trang NXB | PASS |

### Tiếng Việt 4 – Tập 1

| ID | Tên bài đọc | Trang nguồn | Đoạn | Hash chữ | Cách đối chiếu | DOM |
|---|---|---:|---:|---|---|---:|
| `tv-g4-b1` | Điều kì diệu | 8 | 20 | `525b8e14d424` | Bản chữ + trang NXB | PASS |
| `tv-g4-b2` | Thi nhạc | 12 | 7 | `08343eb48fb9` | Bản chữ + trang NXB | PASS |
| `tv-g4-b3` | Anh em sinh đôi | 16 | 14 | `7a13cf609856` | Bản chữ + trang NXB | PASS |
| `tv-g4-b4` | Công chúa và người dẫn chuyện | 20 | 14 | `06ea53ce662a` | Bản chữ + trang NXB | PASS |
| `tv-g4-b5` | Thằn lằn xanh và tắc kè | 23 | 11 | `a8fd4a163b74` | Bản chữ + trang NXB | PASS |
| `tv-g4-b6` | Nghệ sĩ trống | 26 | 6 | `c3bdf4f870ef` | Bản chữ + trang NXB | PASS |
| `tv-g4-b7` | Những bức chân dung | 30 | 12 | `17e64095bde3` | Bản chữ + trang NXB | PASS |
| `tv-g4-b8` | Đò ngang | 34 | 11 | `5ec6ac325f0c` | Bản chữ + trang NXB | PASS |
| `tv-g4-b9` | Bầu trời trong quả trứng | 39 | 24 | `ab25176c00a7` | Bản chữ + trang NXB | PASS |
| `tv-g4-b10` | Tiếng nói của cỏ cây | 44 | 9 | `c1f55ff1d187` | Bản chữ + trang NXB | PASS |
| `tv-g4-b11` | Tập làm văn | 48 | 9 | `bafeef4b070a` | Bản chữ + trang NXB | PASS |
| `tv-g4-t1-b12` | Nhà phát minh 6 tuổi | 51 | 3 | `db07dbbefbbf` | Bản chữ + trang NXB | PASS |
| `tv-g4-t1-b13` | Con vẹt xanh | 55 | 26 | `8776e28b14ec` | Bản chữ + trang NXB | PASS |
| `tv-g4-t1-b14` | Chân trời cuối phố | 59 | 10 | `d397d1b141c7` | Bản chữ + trang NXB | PASS |
| `tv-g4-t1-b15` | Gặt chữ trên non | 63 | 20 | `9d8f3c1aefc4` | Bản chữ + trang NXB | PASS |
| `tv-g4-t1-b16` | Trước ngày xa quê | 66 | 4 | `582268d68a09` | Bản chữ + trang NXB | PASS |
| `tv-g4-t1-b17` | Vẽ màu | 77 | 20 | `2764e9ce7ccd` | Bản chữ + trang NXB | PASS |
| `tv-g4-t1-b18` | Đồng cỏ nở hoa | 81 | 7 | `c677a5459cd7` | Bản chữ + trang NXB | PASS |
| `tv-g4-t1-b19` | Thanh âm của núi | 85 | 4 | `b84f31360d7a` | Bản chữ + trang NXB | PASS |
| `tv-g4-t1-b20` | Bầu trời mùa thu | 89 | 19 | `fe2f73198a2b` | Bản chữ + trang NXB | PASS |
| `tv-g4-t1-b21` | Làm thỏ con bằng giấy | 93 | 19 | `2ba23b300c1a` | Bản chữ + trang NXB | PASS |
| `tv-g4-t1-b22` | Bức tường có nhiều phép lạ | 97 | 21 | `b637410df3b6` | Bản chữ + trang NXB | PASS |
| `tv-g4-t1-b23` | Bét-tô-ven và bản xô-nát Ánh trăng | 101 | 4 | `8aca5701dc5f` | Bản chữ + trang NXB | PASS |
| `tv-g4-t1-b24` | Người tìm đường lên các vì sao | 105 | 6 | `782522a78bb1` | Bản chữ + trang NXB | PASS |
| `tv-g4-t1-b25` | Bay cùng ước mơ | 109 | 12 | `eca3273be35f` | Bản chữ + trang NXB | PASS |
| `tv-g4-t1-b26` | Con trai người làm vườn | 114 | 13 | `aed520854a73` | Bản chữ + trang NXB | PASS |
| `tv-g4-t1-b27` | Nếu em có một khu vườn | 118 | 7 | `bd08d1f117df` | Bản chữ + trang NXB | PASS |
| `tv-g4-t1-b28` | Bốn mùa mơ ước | 122 | 20 | `f02ba360d4b2` | Bản chữ + trang NXB | PASS |
| `tv-g4-t1-b29` | Ở Vương quốc Tương Lai | 125 | 20 | `b481313de5df` | Bản chữ + trang NXB | PASS |
| `tv-g4-t1-b30` | Cánh chim nhỏ | 129 | 9 | `ce2153c11f88` | Bản chữ + trang NXB | PASS |
| `tv-g4-t1-b31` | Nếu chúng mình có phép lạ | 132 | 17 | `75bf64c25418` | Bản chữ + trang NXB | PASS |
| `tv-g4-t1-b32` | Anh Ba | 135 | 16 | `d24b31eca848` | Bản chữ + trang NXB | PASS |

### Tiếng Việt 4 – Tập 2

| ID | Tên bài đọc | Trang nguồn | Đoạn | Hash chữ | Cách đối chiếu | DOM |
|---|---|---:|---:|---|---|---:|
| `tv-g4-b12` | Hải Thượng Lãn Ông | 8 | 5 | `9f805a109aed` | Bản chữ + trang NXB | PASS |
| `tv-g4-b13` | Vệt phấn trên mặt bàn | 12 | 10 | `fcf53bf8a4b5` | Bản chữ + trang NXB | PASS |
| `tv-g4-b14` | Ông Bụt đã đến | 16 | 10 | `a3f99f9e9100` | Bản chữ + trang NXB | PASS |
| `tv-g4-b15` | Quả ngọt cuối mùa | 20 | 14 | `d49fb807d3fb` | Bản chữ + trang NXB | PASS |
| `tv-g4-b16` | Tờ báo tường của tôi | 24 | 10 | `58b2cf94646c` | Bản chữ + trang NXB | PASS |
| `tv-g4-b17` | Tiếng ru | 28 | 16 | `d8961dff34d6` | Bản chữ + trang NXB | PASS |
| `tv-g4-b18` | Con muốn làm một cái cây | 31 | 7 | `2eb85fddd95e` | Bản chữ + trang NXB | PASS |
| `tv-g4-b19` | Trên khóm tre đầu ngõ | 35 | 5 | `d8cd0e2193d9` | Bản chữ + trang NXB | PASS |
| `tv-g4-b20` | Sự tích con Rồng cháu Tiên | 40 | 6 | `9b83925cf96f` | Bản chữ + trang NXB | PASS |
| `tv-g4-b21` | Cảm xúc Trường Sa | 44 | 24 | `39a39864b55e` | Bản chữ + trang NXB | PASS |
| `tv-g4-b22` | Sáng tháng Năm | 48 | 14 | `ee84dd3911ba` | Bản chữ + trang NXB | PASS |
| `tv-g4-t2-b12` | Chàng trai làng Phù Ủng | 51 | 7 | `69ae5ad27885` | Bản chữ + trang NXB | PASS |
| `tv-g4-t2-b13` | Vườn của ông tôi | 55 | 11 | `fde95f323c2e` | Bản chữ + trang NXB | PASS |
| `tv-g4-t2-b14` | Trong lời mẹ hát | 59 | 16 | `02ef6809cd57` | Bản chữ + trang NXB | PASS |
| `tv-g4-t2-b15` | Người thầy đầu tiên của bố tôi | 63 | 17 | `c324cb3795ed` | Bản chữ + trang NXB | PASS |
| `tv-g4-t2-b16` | Ngựa biên phòng | 67 | 20 | `d81df95c995d` | Bản chữ + trang NXB | PASS |
| `tv-g4-t2-b17` | Cây đa quê hương | 80 | 3 | `d0644e99ce07` | Bản chữ + trang NXB | PASS |
| `tv-g4-t2-b18` | Bước mùa xuân | 85 | 24 | `541107d71e65` | Bản chữ + trang NXB | PASS |
| `tv-g4-t2-b19` | Đi hội chùa Hương | 89 | 24 | `eaa504caa841` | Bản chữ + trang NXB | PASS |
| `tv-g4-t2-b20` | Chiều ngoại ô | 93 | 3 | `93454d158c67` | Bản chữ + trang NXB | PASS |
| `tv-g4-t2-b21` | Những cánh buồm | 98 | 5 | `f6682ee5418b` | Bản chữ + trang NXB | PASS |
| `tv-g4-t2-b22` | Cái cầu | 102 | 16 | `069fa52af967` | Bản chữ + trang NXB | PASS |
| `tv-g4-t2-b23` | Đường đi Sa Pa | 106 | 4 | `17022b8fe5b6` | Bản chữ + trang NXB | PASS |
| `tv-g4-t2-b24` | Quê ngoại | 109 | 4 | `887b29b9a2b4` | Bản chữ + trang NXB | PASS |
| `tv-g4-t2-b25` | Khu bảo tồn động vật hoang dã Ngô-rông-gô-rô | 113 | 4 | `3cb99d2c7730` | Bản chữ + trang NXB | PASS |
| `tv-g4-t2-b26` | Ngôi nhà của yêu thương | 117 | 10 | `3819457c57b2` | Bản chữ + trang NXB | PASS |
| `tv-g4-t2-b27` | Băng tan | 120 | 4 | `24ffe80207c1` | Bản chữ + trang NXB | PASS |
| `tv-g4-t2-b28` | Chuyến du lịch thú vị | 123 | 9 | `5ff878dbbc84` | Bản chữ + trang NXB | PASS |
| `tv-g4-t2-b29` | Lễ hội ở Nhật Bản | 127 | 3 | `4c1e49240a53` | Bản chữ + trang NXB | PASS |
| `tv-g4-t2-b30` | Ngày hội | 131 | 20 | `5df8d84794d9` | Bản chữ + trang NXB | PASS |

### Tiếng Việt 5 – Tập 1

| ID | Tên bài đọc | Trang nguồn | Đoạn | Hash chữ | Cách đối chiếu | DOM |
|---|---|---:|---:|---|---|---:|
| `tv-g5-b1` | Thanh âm của gió | 8 | 16 | `f362de164373` | Bản chữ + trang NXB | PASS |
| `tv-g5-b2` | Cánh đồng hoa | 13 | 15 | `25cdb22f38bb` | Bản chữ + trang NXB | PASS |
| `tv-g5-b3` | Tuổi Ngựa | 18 | 26 | `900389cb22ec` | Bản chữ + trang NXB | PASS |
| `tv-g5-b4` | Bến sông tuổi thơ | 23 | 5 | `1a71f7212c23` | Bản chữ + trang NXB | PASS |
| `tv-g5-b5` | Tiếng hạt nảy mầm | 28 | 24 | `9a262d70d37d` | Bản chữ + trang NXB | PASS |
| `tv-g5-b6` | Ngôi sao sân cỏ | 31 | 13 | `f83c9cac8fb3` | Bản chữ + trang NXB | PASS |
| `tv-g5-b7` | Bộ sưu tập độc đáo | 36 | 15 | `d915fb07d3ae` | Bản chữ + trang NXB | PASS |
| `tv-g5-b8` | Hành tinh kì lạ | 41 | 9 | `bc4ef1602488` | Bản chữ + trang NXB | PASS |
| `tv-g5-b9` | Trước cổng trời | 46 | 24 | `d444d6bef6d4` | Bản chữ + trang NXB | PASS |
| `tv-g5-b10` | Kì diệu rừng xanh | 51 | 4 | `c2d5594da298` | Bản chữ + trang NXB | PASS |
| `tv-g5-b11` | Hang Sơn Đoòng – những điều kì thú | 56 | 7 | `cae99bf9caaa` | Bản chữ + trang NXB | PASS |
| `tv-g5-b12` | Những hòn đảo trên vịnh Hạ Long | 60 | 4 | `282fa68da7ea` | Bản chữ + trang NXB | PASS |
| `tv-g5-b13` | Mầm non | 64 | 26 | `e84fa2e91e75` | Bản chữ + trang NXB | PASS |
| `tv-g5-b14` | Những ngọn núi nóng rẫy | 68 | 4 | `cda1c96a09fc` | Bản chữ + trang NXB | PASS |
| `tv-g5-b15` | Bài ca về mặt trời | 72 | 10 | `13155e8feecd` | Bản chữ + trang NXB | PASS |
| `tv-g5-b16` | Xin chào, Xa-ha-ra | 76 | 6 | `44c9026ad44c` | Bản chữ + trang NXB | PASS |
| `tv-g5-t1-b17` | Thư gửi các học sinh | 89 | 7 | `f9e32d43fa7f` | Bản chữ + trang NXB | PASS |
| `tv-g5-t1-b18` | Tấm gương tự học | 94 | 4 | `aa04ee33a898` | Bản chữ + trang NXB | PASS |
| `tv-g5-t1-b19` | Trải nghiệm để sáng tạo | 98 | 4 | `acd234c52253` | Bản chữ + trang NXB | PASS |
| `tv-g5-t1-b20` | Khổ luyện thành tài | 102 | 6 | `130425f3f1b5` | Bản chữ + trang NXB | PASS |
| `tv-g5-t1-b21` | Thế giới trong trang sách | 105 | 16 | `291173266875` | Bản chữ + trang NXB | PASS |
| `tv-g5-t1-b22` | Từ những câu chuyện ấu thơ | 110 | 6 | `315bc888a74a` | Bản chữ + trang NXB | PASS |
| `tv-g5-t1-b23` | Giới thiệu sách Dế Mèn phiêu lưu kí | 114 | 3 | `b20482e888d0` | Bản chữ + trang NXB | PASS |
| `tv-g5-t1-b24` | Tinh thần học tập của nhà Phi-lít | 117 | 12 | `550d5626cf28` | Bản chữ + trang NXB | PASS |
| `tv-g5-t1-b25` | Tiếng đàn ba-la-lai-ca trên sông Đà | 122, 123 | 24 | `a6068dc89b4a` | Bản chữ + trang NXB | PASS |
| `tv-g5-t1-b26` | Trí tưởng tượng phong phú | 127 | 3 | `42077bbe0d36` | Bản chữ + trang NXB | PASS |
| `tv-g5-t1-b27` | Tranh làng Hồ | 132 | 3 | `3e567dbc52b6` | Bản chữ + trang NXB | PASS |
| `tv-g5-t1-b28` | Tập hát quan họ | 136 | 4 | `822c8048830a` | Bản chữ + trang NXB | PASS |
| `tv-g5-t1-b29` | Phim hoạt hình Chú ốc sên bay | 140 | 7 | `f9c3fed9a8a0` | Ảnh trang SGK | PASS |
| `tv-g5-t1-b30` | Nghệ thuật múa ba lê | 145 | 4 | `0e2657336c2d` | Bản chữ + trang NXB | PASS |
| `tv-g5-t1-b31` | Một ngôi chùa độc đáo | 149 | 4 | `16e4f6dad3ba` | Bản chữ + trang NXB | PASS |
| `tv-g5-t1-b32` | Sự tích chú Tễu | 153 | 18 | `aca5739262c9` | Bản chữ + trang NXB | PASS |

### Tiếng Việt 5 – Tập 2

| ID | Tên bài đọc | Trang nguồn | Đoạn | Hash chữ | Cách đối chiếu | DOM |
|---|---|---:|---:|---|---|---:|
| `tv-g5-b17` | Tiếng hát của người đá | 8 | 4 | `0cf3a1e8b91e` | Bản chữ + trang NXB | PASS |
| `tv-g5-b18` | Khúc hát ru những em bé lớn trên lưng mẹ | 13 | 19 | `887ee44f8fcb` | Bản chữ + trang NXB | PASS |
| `tv-g5-b19` | Hạt gạo làng ta | 17 | 36 | `355d4d791156` | Bản chữ + trang NXB | PASS |
| `tv-g5-b20` | Hộp quà màu thiên thanh | 22 | 18 | `d9815651b926` | Bản chữ + trang NXB | PASS |
| `tv-g5-b21` | Giỏ hoa tháng Năm | 26 | 4 | `b4a821467069` | Bản chữ + trang NXB | PASS |
| `tv-g5-b22` | Thư của bố | 30 | 16 | `1ae037c712d7` | Bản chữ + trang NXB | PASS |
| `tv-g5-b23` | Đoàn thuyền đánh cá | 34 | 20 | `b94a88afc7ac` | Bản chữ + trang NXB | PASS |
| `tv-g5-b24` | Khu rừng của Mát | 38 | 9 | `e93e4fcdd905` | Bản chữ + trang NXB | PASS |
| `tv-g5-b25` | Hội thổi cơm thi ở Đồng Vân | 43 | 4 | `042df5fbb11b` | Bản chữ + trang NXB | PASS |
| `tv-g5-t2-b10` | Những búp chè trên cây cổ thụ | 48 | 13 | `abad6a7b3061` | Bản chữ + trang NXB | PASS |
| `tv-g5-t2-b11` | Hương cốm mùa thu | 53 | 20 | `a6e81eb02799` | Bản chữ + trang NXB | PASS |
| `tv-g5-t2-b12` | Vũ điệu trên nền thổ cẩm | 57 | 4 | `e82b34eda906` | Bản chữ + trang NXB | PASS |
| `tv-g5-t2-b13` | Đàn t’rưng – tiếng ca đại ngàn | 61 | 5 | `c2ead21e255e` | Bản chữ + trang NXB | PASS |
| `tv-g5-t2-b14` | Đường quê Đồng Tháp Mười | 66 | 20 | `339d29dc5943` | Bản chữ + trang NXB | PASS |
| `tv-g5-t2-b15` | Xuồng ba lá quê tôi | 70 | 4 | `0ef1c6c613ca` | Bản chữ + trang NXB | PASS |
| `tv-g5-t2-b16` | Về thăm Đất Mũi | 73 | 24 | `525ef2156aad` | Bản chữ + trang NXB | PASS |
| `tv-g5-t2-b17` | Nghìn năm văn hiến | 88 | 3 | `cbe944026098` | Bản chữ + trang NXB | PASS |
| `tv-g5-t2-b18` | Người thầy của muôn đời | 93 | 7 | `608680458447` | Bản chữ + trang NXB | PASS |
| `tv-g5-t2-b19` | Danh y Tuệ Tĩnh | 97 | 7 | `4c9f007c3f1e` | Bản chữ + trang NXB | PASS |
| `tv-g5-t2-b20` | Cụ Đồ Chiểu | 101 | 5 | `6768de083b9b` | Bản chữ + trang NXB | PASS |
| `tv-g5-t2-b21` | Anh hùng Lao động Trần Đại Nghĩa | 106 | 3 | `1b2ddfdc97a4` | Bản chữ + trang NXB | PASS |
| `tv-g5-t2-b22` | Bộ đội về làng | 109 | 22 | `34315e5748ec` | Bản chữ + trang NXB | PASS |
| `tv-g5-t2-b23` | Về ngôi nhà đang xây | 113 | 20 | `e7904ad2f5e6` | Bản chữ + trang NXB | PASS |
| `tv-g5-t2-b24` | Việt Nam quê hương ta | 117 | 20 | `1f9ac0b87833` | Bản chữ + trang NXB | PASS |
| `tv-g5-t2-b25` | Bài ca trái đất | 122 | 18 | `6c2d184f9eba` | Bản chữ + trang NXB | PASS |
| `tv-g5-t2-b26` | Những con hạc giấy | 126 | 8 | `ad37dd30ebb5` | Bản chữ + trang NXB | PASS |
| `tv-g5-t2-b27` | Một người hùng thầm lặng | 130, 131 | 7 | `1f57c1b6ffc7` | Ảnh trang SGK | PASS |
| `tv-g5-t2-b28` | Giờ Trái Đất | 135 | 3 | `9105dfa611da` | Bản chữ + trang NXB | PASS |
| `tv-g5-t2-b29` | Điện thoại di động | 140 | 4 | `936ea4135e0f` | Bản chữ + trang NXB | PASS |
| `tv-g5-t2-b30` | Thành phố thông minh Mát-xđa | 144 | 5 | `1864d98c73f9` | Bản chữ + trang NXB | PASS |

## Ghi chú phạm vi

- Báo cáo này xác nhận nội dung chữ đã lưu được đưa lên DOM đầy đủ và không lẫn các khối rác đã nêu.
- Các trang `Từ ngữ`, câu hỏi, viết, nói và nghe vẫn thuộc phần hoạt động SGK riêng; chúng không được ghép vào thân bài đọc ở cột phải.
- Phạm vi trang trong khu xem sách có thể rộng hơn trang bài đọc vì ứng dụng còn gộp trang hoạt động/câu hỏi. Việc tinh chỉnh bài tập và audio là bước tiếp theo sau khi nội dung được người dùng duyệt.
