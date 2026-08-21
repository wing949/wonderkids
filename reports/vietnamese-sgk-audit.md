# Báo cáo kiểm duyệt Tiếng Việt theo SGK

Ngày cập nhật: 2026-08-21

Nguồn: 10 đường dẫn đọc sách chính thức do quản trị cung cấp.

## Kết luận

- Đã lập manifest cho **10/10 sách nguồn**, tổng cộng **1.584 trang**; từng ảnh trang có SHA-256 và được cache riêng ngoài Git.
- **Chưa phát hành nội dung SGK chưa duyệt.** Hiện có **0 bài SGK đã qua cổng kiểm duyệt**.
- OCR đã rà 1.584/1.584 trang; **47/129 mục có nguồn SGK** tìm được trang mở bài, trong đó **3 mục** đã kiểm tra trực quan và **82 mục** chưa được phép gắn trang.
- Hiện có **1 transcript SGK đã duyệt**. Văn bản/audio chính của **108 bài** đã bị khóa để không phát nội dung tự sinh thay cho SGK.
- 132 gói nội dung cũ vẫn được giữ trong từng bài dưới dạng **Luyện thêm**, không tính là bài tập SGK.
- Kho kỹ thuật có đủ một file chính và một fallback cho **132/132 bài**. Chỉ **1/1 transcript SGK đã duyệt** được phép dùng cặp audio này làm giọng đọc SGK.

## Thống kê

| Chỉ số | Kết quả |
|---|---:|
| Sách nguồn đã lập manifest | 10/10 |
| Trang nguồn đã lập checksum | 1.584 |
| Bài SGK đã xác minh | 0 |
| Trang mở bài khớp OCR/đối chiếu | 47/129 |
| Ánh xạ đã kiểm tra trực quan | 3 |
| Mục chưa khớp trang | 82 |
| Transcript SGK đã xác minh | 1 |
| Transcript SGK có đủ audio chính/fallback | 1/1 |
| Bài đang khóa văn bản/audio chính | 108 |
| Hoạt động SGK đã xác minh | 0 |
| Luyện thêm trong bài | 135 |
| Cặp audio chính/fallback đạt kiểm tra file | 132/132 |

## Tiến độ từng sách

| Mã sách | Lớp | Tập | Số trang | Trạng thái nhập | Được phát hành | Manifest hash |
|---|---:|---:|---:|---|---|---|
| tv-g1-t1 | 1 | 1 | 186 | source_indexed | Không | `6ec670559ea6…` |
| tv-g1-t2 | 1 | 2 | 178 | source_indexed | Không | `b3a591f44c4f…` |
| tv-g2-t1 | 2 | 1 | 146 | source_indexed | Không | `517dc3e22c5d…` |
| tv-g2-t2 | 2 | 2 | 146 | source_indexed | Không | `16415956a90d…` |
| tv-g3-t1 | 3 | 1 | 154 | source_indexed | Không | `f77ac39903b7…` |
| tv-g3-t2 | 3 | 2 | 146 | source_indexed | Không | `aa636728b120…` |
| tv-g4-t1 | 4 | 1 | 150 | source_indexed | Không | `10e1ab5d032b…` |
| tv-g4-t2 | 4 | 2 | 146 | source_indexed | Không | `551c4586204d…` |
| tv-g5-t1 | 5 | 1 | 170 | source_indexed | Không | `8f4ba99d9859…` |
| tv-g5-t2 | 5 | 2 | 162 | source_indexed | Không | `0b732e18e8c9…` |

## Kiểm kê từng bài trong ứng dụng

| Mã bài | Lớp/Tập | Tên hiển thị | Ánh xạ trang | Trạng thái bài đọc | Hoạt động SGK | Luyện thêm |
|---|---|---|---|---|---:|---:|
| tv-g1-b1 | 1/1 | A a | ocr_matched | supplement_reading_allowed | 0 | 1 |
| tv-g1-b2 | 1/1 | B b | unmatched | supplement_reading_allowed | 0 | 1 |
| tv-g1-b3 | 1/1 | C c - D d - Đ đ | unmatched | supplement_reading_allowed | 0 | 1 |
| tv-g1-b4 | 1/1 | E e - Ê ê | ocr_matched | supplement_reading_allowed | 0 | 1 |
| tv-g1-b5 | 1/1 | Ôn tập và kể chuyện | ocr_matched | supplement_reading_allowed | 0 | 1 |
| tv-g1-b6 | 1/1 | O o | ocr_matched | supplement_reading_allowed | 0 | 1 |
| tv-g1-b7 | 1/1 | Ô ô - Ơ ơ | ocr_matched | supplement_reading_allowed | 0 | 1 |
| tv-g1-b8 | 1/1 | I i - K k | ocr_matched | supplement_reading_allowed | 0 | 1 |
| tv-g1-b9 | 1/1 | U u - Ư ư | ocr_matched | supplement_reading_allowed | 0 | 1 |
| tv-g1-b10 | 1/1 | Ôn tập âm chữ cái | unmatched | supplement_reading_allowed | 0 | 1 |
| tv-g1-b11 | 1/1 | L l - M m | unmatched | supplement_reading_allowed | 0 | 1 |
| tv-g1-b12 | 1/1 | N n - P p | unmatched | supplement_reading_allowed | 0 | 1 |
| tv-g1-b13 | 1/1 | R r - S s | ocr_matched | supplement_reading_allowed | 0 | 1 |
| tv-g1-b14 | 1/1 | T t - Th th | unmatched | supplement_reading_allowed | 0 | 1 |
| tv-g1-b15 | 1/1 | V v - X x | ocr_matched | supplement_reading_allowed | 0 | 1 |
| tv-g1-b16 | 1/1 | Ch ch - Kh kh | ocr_matched | supplement_reading_allowed | 0 | 1 |
| tv-g1-b17 | 1/1 | Nh nh - Ng ng | unmatched | supplement_reading_allowed | 0 | 1 |
| tv-g1-b18 | 1/1 | Ngh ngh - Gh gh | unmatched | supplement_reading_allowed | 0 | 1 |
| tv-g1-b19 | 1/1 | An an - At at | unmatched | supplement_reading_allowed | 0 | 1 |
| tv-g1-b20 | 1/1 | Ôn tập cuối Học kì 1 | unmatched | supplement_reading_allowed | 0 | 1 |
| tv-g1-b21 | 1/2 | Tôi là học sinh lớp 1 | unmatched | blocked_until_sgk_transcript_verified | 0 | 2 |
| tv-g1-b22 | 1/2 | Đôi tai xấu xí | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g1-b23 | 1/2 | Bạn của gió | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g1-b24 | 1/2 | Rửa tay trước khi ăn | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g1-b25 | 1/2 | Lời chào | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g1-b26 | 1/2 | Mẹ và cô | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g1-b27 | 1/2 | Cây bàng trường em | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g1-b28 | 1/2 | Cậu bé thông minh | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g1-b29 | 1/2 | Quê hương tươi đẹp | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g1-b30 | 1/2 | Bác Hồ kính yêu | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b1 | 2/1 | Tôi là học sinh lớp 2 | visually_reviewed | verified_sgk_transcript | 0 | 1 |
| tv-g2-b2 | 2/1 | Ngày hôm qua đâu rồi? | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b3 | 2/1 | Niềm vui của Bi và Bống | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b4 | 2/1 | Làm việc thật là vui | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b5 | 2/1 | Em có xinh không? | visually_reviewed | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b6 | 2/1 | Một giờ học | visually_reviewed | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b7 | 2/1 | Cây xấu hổ | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b8 | 2/1 | Cầu thủ dự bị | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b9 | 2/1 | Cô giáo lớp em | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b10 | 2/1 | Thời khóa biểu | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b11 | 2/1 | Cái bàn học của em | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b12 | 2/1 | Danh sách học sinh tổ 1 | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b13 | 2/1 | Yêu lắm trường ơi! | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b14 | 2/1 | Em học vẽ | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b15 | 2/1 | Cuốn sách của em | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b16 | 2/1 | Khi trang sách mở ra | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b17 | 2/1 | Gọi bạn | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b18 | 2/1 | Nhím nâu kết bạn | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b19 | 2/2 | Chuyện bốn mùa | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b20 | 2/2 | Mùa vàng | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b21 | 2/2 | Mưa mùa hạ | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b22 | 2/2 | Chim rừng Tây Nguyên | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b23 | 2/2 | Bác sĩ Sói | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b24 | 2/2 | Tôm Càng và Cá Con | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b25 | 2/2 | Bác Hồ rèn luyện thân thể | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b26 | 2/2 | Ai ngoan sẽ được thưởng | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b27 | 2/2 | Cờ đỏ sao vàng | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b28 | 2/2 | Em yêu biển đảo quê hương | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b29 | 2/2 | Lượm hạt thóc vàng | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g2-b30 | 2/2 | Chuyến phiêu lưu của Giọt Nước | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b1 | 3/1 | Chiếc nhãn vở đặc biệt | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b2 | 3/1 | Lắng nghe những ước mơ | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b3 | 3/1 | Em vui đến trường | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b4 | 3/1 | Cậu học sinh mới | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b5 | 3/1 | Mùa hè lấp lánh | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b6 | 3/1 | Cánh đồng tuổi thơ | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b7 | 3/1 | Con đường đến trường | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b8 | 3/1 | Lời giải toán đặc biệt | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b9 | 3/1 | Bàn tay cô giáo | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b10 | 3/1 | Nhà rông ở Tây Nguyên | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b11 | 3/1 | Tiếng chim hót trong vườn | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b12 | 3/1 | Thư viện trường em | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b13 | 3/1 | Bầu trời mùa thu | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b14 | 3/1 | Quạt cho bà ngủ | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b15 | 3/2 | Cóc kiện Trời | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b16 | 3/2 | Hai Bà Trưng | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b17 | 3/2 | Đất nước tươi đẹp | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b18 | 3/2 | Bức thư gửi chú hải quân | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b19 | 3/2 | Chú hải quân canh giữ đảo xa | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b20 | 3/2 | Bác sĩ Y-éc-xanh | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b21 | 3/2 | Người trí thức yêu nước | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b22 | 3/2 | Trái Đất xanh của chúng mình | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b23 | 3/2 | Cùng vui chơi trong nắng mới | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b24 | 3/2 | Hương lúa chín đầu mùa | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g3-b25 | 3/2 | Đấu trường Trạng Nguyên nhí Lớp 3 | unmatched | supplement_reading_allowed | 0 | 1 |
| tv-g4-b1 | 4/1 | Dế Mèn bênh vực kẻ yếu (Phần 1) | unmatched | blocked_until_sgk_transcript_verified | 0 | 2 |
| tv-g4-b2 | 4/1 | Truyện cổ nước mình | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g4-b3 | 4/1 | Thư thăm bạn | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g4-b4 | 4/1 | Dế Mèn bênh vực kẻ yếu (Phần 2) | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g4-b5 | 4/1 | Mười năm cõng bạn đi học | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g4-b6 | 4/1 | Bài ca Trái Đất | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g4-b7 | 4/1 | Những hạt thóc giống | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g4-b8 | 4/1 | Nếu chúng mình có phép lạ | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g4-b9 | 4/1 | Về thăm bà | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g4-b10 | 4/1 | Cây đa quê hương | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g4-b11 | 4/1 | Bông hoa niềm vui | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g4-b12 | 4/2 | Bốn anh tài (Phần 1) | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g4-b13 | 4/2 | Bốn anh tài (Phần 2) | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g4-b14 | 4/2 | Trống đồng Đông Sơn | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g4-b15 | 4/2 | Vịnh Hạ Long | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g4-b16 | 4/2 | Kỳ quan Hang Sơn Đoòng | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g4-b17 | 4/2 | Nhà bác học của đồng ruộng | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g4-b18 | 4/2 | Chiếc lá | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g4-b19 | 4/2 | Chú bé Lượm | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g4-b20 | 4/2 | Khúc hát ru những em bé lớn trên lưng mẹ | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g4-b21 | 4/2 | Vương quốc nụ cười | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g4-b22 | 4/2 | Đại hội Trạng Nguyên Tiếng Việt 4 | unmatched | supplement_reading_allowed | 0 | 1 |
| tv-g5-b1 | 5/1 | Thư gửi các học sinh | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 2 |
| tv-g5-b2 | 5/1 | Quang cảnh làng mạc ngày mùa | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b3 | 5/1 | Sắc màu em yêu | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b4 | 5/1 | Lòng dân (Phần 1) | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b5 | 5/1 | Lòng dân (Phần 2) | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b6 | 5/1 | Bài ca về trái đất | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b7 | 5/1 | Một chuyên gia máy xúc | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b8 | 5/1 | Kì diệu rừng xanh | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b9 | 5/1 | Trước cổng trời | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b10 | 5/1 | Đất Cà Mau | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b11 | 5/1 | Mùa thảo quả | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b12 | 5/1 | Hành trình của bầy ong | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b13 | 5/1 | Người gác rừng tí hon | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b14 | 5/1 | Trồng rừng ngập mặn | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b15 | 5/1 | Hạt gạo làng ta | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b16 | 5/1 | Chuỗi ngọc lam | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b17 | 5/2 | Người công dân số Một (Phần 1) | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b18 | 5/2 | Người công dân số Một (Phần 2) | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b19 | 5/2 | Thái sư Trần Thủ Độ | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b20 | 5/2 | Phong cảnh đền Hùng | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b21 | 5/2 | Đất nước | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b22 | 5/2 | Nghĩa thầy trò | ocr_matched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b23 | 5/2 | Tranh làng Hồ | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b24 | 5/2 | Út Vịnh | unmatched | blocked_until_sgk_transcript_verified | 0 | 1 |
| tv-g5-b25 | 5/2 | Đại hội Trạng Nguyên Tiếng Việt 5 Toàn Quốc | unmatched | supplement_reading_allowed | 0 | 1 |

## Cổng phát hành

Một bài chỉ được tính vào nội dung SGK khi có trích dẫn trang, hash nguồn, trạng thái `verified`, ánh xạ một-một giữa từng tiểu ý SGK và hoạt động app, cùng cặp audio khớp transcript. OCR chỉ là bản nháp; không tự động trở thành nội dung đã duyệt.
