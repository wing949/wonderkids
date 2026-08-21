# Báo cáo kiểm duyệt Tiếng Việt theo SGK

Ngày cập nhật: 2026-08-21

Nguồn: 10 đường dẫn đọc sách chính thức do quản trị cung cấp.

## Kết luận

- Đã lập manifest cho **10/10 sách nguồn**, tổng cộng **1.584 trang**; từng ảnh trang có SHA-256 và được cache riêng ngoài Git.
- Đã lập **danh mục 376 bài theo mục lục SGK**; mỗi bài đều có lớp, tập, tên bài và trang mở bài để đối chiếu.
- **Chưa phát hành nguyên văn SGK chưa duyệt.** Hiện có **14 bài** đã trích nguyên văn và **119 hoạt động** có trang/tiểu ý nguồn; cần tiếp tục đối chiếu các tiểu ý còn lại trước khi công bố hoàn tất từng bài.
- OCR đã rà 1.584/1.584 trang; **376/376 bài** đã có trang mở bài từ mục lục, trong đó **14 bài** có thêm ánh xạ trang đã kiểm tra trực quan và **0 bài** chưa có trang.
- Hiện có **14 transcript SGK đã duyệt**. Văn bản/audio chính của **362 bài** đã bị khóa để không phát nội dung tự sinh thay cho SGK.
- Có **362 bài trong danh mục SGK chờ đối chiếu nguyên văn**; chúng không được gắn nhãn Luyện thêm và không sinh câu hỏi hoặc audio.
- Kho kỹ thuật hiện có một file chính và một fallback hợp lệ cho **14/376 bài**. Chỉ **14/14 transcript SGK đã duyệt** có hash transcript và trang nguồn khớp để được phép dùng cặp audio này làm giọng đọc SGK.

## Thống kê

| Chỉ số | Kết quả |
|---|---:|
| Sách nguồn đã lập manifest | 10/10 |
| Trang nguồn đã lập checksum | 1.584 |
| Danh mục bài theo mục lục SGK | 376 |
| Bài SGK đã xác minh | 14 |
| Danh mục SGK chờ đối chiếu nguyên văn | 362 |
| Trang mở bài đã xác định | 376/376 |
| Ánh xạ đã kiểm tra trực quan | 14 |
| Mục chưa khớp trang | 0 |
| Transcript SGK đã xác minh | 14 |
| Transcript SGK có audio khớp transcript | 14/14 |
| Bài đang khóa văn bản/audio chính | 362 |
| Hoạt động SGK đã xác minh | 119 |
| Luyện thêm trong bài | 0 |
| Cặp audio chính/fallback đạt kiểm tra file | 14/376 |

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
| tv-g1-b1 | 1/1 | Bài 1: A a | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b2 | 1/1 | Bài 2: B b | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b3 | 1/1 | Bài 3: C c | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b4 | 1/1 | Bài 4: E e - Ê ê | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b5 | 1/1 | Bài 5: Ôn tập và kể chuyện | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b6 | 1/1 | Bài 6: O o | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b7 | 1/1 | Bài 7: Ô ô | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b8 | 1/1 | Bài 8: D d - Đ đ | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b9 | 1/1 | Bài 9: Ơ ơ | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b10 | 1/1 | Bài 10: Ôn tập và kể chuyện | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b11 | 1/1 | Bài 11: I i - K k | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b12 | 1/1 | Bài 12: H h - L l | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b13 | 1/1 | Bài 13: U u - Ư ư | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b14 | 1/1 | Bài 14: Ch ch - Kh kh | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b15 | 1/1 | Bài 15: Ôn tập và kể chuyện | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b16 | 1/1 | Bài 16: M m - N n | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b17 | 1/1 | Bài 17: G g - Gi gi | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b18 | 1/1 | Bài 18: Gh gh - Nh nh | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b19 | 1/1 | Bài 19: Ng ng - Ngh ngh | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b20 | 1/1 | Bài 20: Ôn tập và kể chuyện | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b21 | 1/1 | Bài 21: R r - S s | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b22 | 1/1 | Bài 22: T t - Tr tr | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b23 | 1/1 | Bài 23: Th th - ia | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b24 | 1/1 | Bài 24: ua - ưa | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b25 | 1/1 | Bài 25: Ôn tập và kể chuyện | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b26 | 1/1 | Bài 26: Ph ph - Qu qu | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b27 | 1/1 | Bài 27: V v - X x | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b28 | 1/1 | Bài 28: Y y | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b29 | 1/1 | Bài 29: Luyện tập chính tả | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b30 | 1/1 | Bài 30: Ôn tập và kể chuyện | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b31 | 1/1 | Bài 31: an - ăn - ân | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b32 | 1/1 | Bài 32: on - ôn - ơn | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b33 | 1/1 | Bài 33: en - ên - in - un | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b34 | 1/1 | Bài 34: am - ăm - âm | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b35 | 1/1 | Bài 35: Ôn tập và kể chuyện | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b36 | 1/1 | Bài 36: om - ôm - ơm | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b37 | 1/1 | Bài 37: em - êm - im - um | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b38 | 1/1 | Bài 38: ai - ay - ây | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b39 | 1/1 | Bài 39: oi - ôi - ơi | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b40 | 1/1 | Bài 40: Ôn tập và kể chuyện | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b41 | 1/1 | Bài 41: ui - ưi | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b42 | 1/1 | Bài 42: ao - eo | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b43 | 1/1 | Bài 43: au - âu - êu | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b44 | 1/1 | Bài 44: iu - ưu | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b45 | 1/1 | Bài 45: Ôn tập và kể chuyện | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b46 | 1/1 | Bài 46: ac - ăc - âc | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b47 | 1/1 | Bài 47: oc - ôc - uc - ưc | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b48 | 1/1 | Bài 48: at - ăt - ât | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b49 | 1/1 | Bài 49: ot - ôt - ơt | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b50 | 1/1 | Bài 50: Ôn tập và kể chuyện | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b51 | 1/1 | Bài 51: et - êt - it | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b52 | 1/1 | Bài 52: ut - ưt | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b53 | 1/1 | Bài 53: ap - ăp - âp | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b54 | 1/1 | Bài 54: op - ôp - ơp | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b55 | 1/1 | Bài 55: Ôn tập và kể chuyện | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b56 | 1/1 | Bài 56: ep - êp - ip - up | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b57 | 1/1 | Bài 57: anh - ênh - inh | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b58 | 1/1 | Bài 58: ach - êch - ich | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b59 | 1/1 | Bài 59: ang - ăng - âng | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b60 | 1/1 | Bài 60: Ôn tập và kể chuyện | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b61 | 1/1 | Bài 61: ong - ông - ung - ưng | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b62 | 1/1 | Bài 62: iêc - iên - iêp | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b63 | 1/1 | Bài 63: iêng - iêm - yên | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b64 | 1/1 | Bài 64: iêt - iêu - yêu | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b65 | 1/1 | Bài 65: Ôn tập và kể chuyện | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b66 | 1/1 | Bài 66: uôi - uôm | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b67 | 1/1 | Bài 67: uôc - uôt | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b68 | 1/1 | Bài 68: uôn - uông | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b69 | 1/1 | Bài 69: ươi - ươu | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b70 | 1/1 | Bài 70: Ôn tập và kể chuyện | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b71 | 1/1 | Bài 71: ươc - ươt | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b72 | 1/1 | Bài 72: ươm - ươp | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b73 | 1/1 | Bài 73: ươn - ương | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b74 | 1/1 | Bài 74: oa - oe | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b75 | 1/1 | Bài 75: Ôn tập và kể chuyện | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b76 | 1/1 | Bài 76: oan - oăn - oat - oăt | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b77 | 1/1 | Bài 77: oai - uê - uy | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b78 | 1/1 | Bài 78: uân - uât | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b79 | 1/1 | Bài 79: uyên - uyêt | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b80 | 1/1 | Bài 80: Ôn tập và kể chuyện | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b81 | 1/1 | Bài 81: Ôn tập | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b82 | 1/1 | Bài 82: Ôn tập | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t1-b83 | 1/1 | Bài 83: Voi, hổ và khỉ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b21 | 1/2 | Bài 1: Tôi là học sinh lớp 1 | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b22 | 1/2 | Bài 2: Đôi tai xấu xí | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b23 | 1/2 | Bài 3: Bạn của gió | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b24 | 1/2 | Bài 4: Giải thưởng tình bạn | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b25 | 1/2 | Bài 5: Sinh nhật của voi con | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b26 | 1/2 | Bài 6: Nụ hôn trên bàn tay | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b27 | 1/2 | Bài 7: Làm anh | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b28 | 1/2 | Bài 8: Cả nhà đi chơi núi | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b29 | 1/2 | Bài 9: Quạt cho bà ngủ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-b30 | 1/2 | Bài 10: Bữa cơm gia đình | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b11 | 1/2 | Bài 11: Ngôi nhà | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b12 | 1/2 | Bài 12: Tôi đi học | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b13 | 1/2 | Bài 13: Đi học | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b14 | 1/2 | Bài 14: Hoa yêu thương | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b15 | 1/2 | Bài 15: Cây bàng và lớp học | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b16 | 1/2 | Bài 16: Bác trống trường | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b17 | 1/2 | Bài 17: Giờ ra chơi | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b18 | 1/2 | Bài 18: Rửa tay trước khi ăn | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b19 | 1/2 | Bài 19: Lời chào đi trước | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b20 | 1/2 | Bài 20: Khi mẹ vắng nhà | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b21 | 1/2 | Bài 21: Nếu không may bị lạc | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b22 | 1/2 | Bài 22: Đèn giao thông | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b23 | 1/2 | Bài 23: Kiến và chim bồ câu | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b24 | 1/2 | Bài 24: Câu chuyện của rễ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b25 | 1/2 | Bài 25: Câu hỏi của sói | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b26 | 1/2 | Bài 26: Chú bé chăn cừu | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b27 | 1/2 | Bài 27: Tiếng vọng của núi | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b28 | 1/2 | Bài 28: Loài chim của biển cả | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b29 | 1/2 | Bài 29: Bảy sắc cầu vồng | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b30 | 1/2 | Bài 30: Chúa tể rừng xanh | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b31 | 1/2 | Bài 31: Cuộc thi tài năng rừng xanh | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b32 | 1/2 | Bài 32: Cây liễu dẻo dai | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b33 | 1/2 | Bài 33: Tia nắng đi đâu? | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b34 | 1/2 | Bài 34: Trong giấc mơ buổi sáng | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b35 | 1/2 | Bài 35: Ngày mới bắt đầu | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b36 | 1/2 | Bài 36: Hỏi mẹ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b37 | 1/2 | Bài 37: Những cánh cò | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b38 | 1/2 | Bài 38: Buổi trưa hè | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b39 | 1/2 | Bài 39: Hoa phượng | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b40 | 1/2 | Bài 40: Cậu bé thông minh | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b41 | 1/2 | Bài 41: Lính cứu hoả | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b42 | 1/2 | Bài 42: Lớn lên bạn làm gì? | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b43 | 1/2 | Bài 43: Ruộng bậc thang ở Sa Pa | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b44 | 1/2 | Bài 44: Nhớ ơn | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g1-t2-b45 | 1/2 | Bài 45: Du lịch biển Việt Nam | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-b1 | 2/1 | Bài 1: Tôi là học sinh lớp 2 | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g2-b2 | 2/1 | Bài 2: Ngày hôm qua đâu rồi? | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g2-b3 | 2/1 | Bài 3: Niềm vui của Bi và Bống | visually_reviewed | verified_sgk_transcript | 3 | 0 |
| tv-g2-b4 | 2/1 | Bài 4: Làm việc thật là vui | visually_reviewed | verified_sgk_transcript | 3 | 0 |
| tv-g2-b5 | 2/1 | Bài 5: Em có xinh không? | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g2-b6 | 2/1 | Bài 6: Một giờ học | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g2-b7 | 2/1 | Bài 7: Cây xấu hổ | visually_reviewed | verified_sgk_transcript | 3 | 0 |
| tv-g2-b8 | 2/1 | Bài 8: Cầu thủ dự bị | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g2-b9 | 2/1 | Bài 9: Cô giáo lớp em | visually_reviewed | verified_sgk_transcript | 10 | 0 |
| tv-g2-b10 | 2/1 | Bài 10: Thời khoá biểu | visually_reviewed | verified_sgk_transcript | 10 | 0 |
| tv-g2-b11 | 2/1 | Bài 11: Cái trống trường em | visually_reviewed | verified_sgk_transcript | 12 | 0 |
| tv-g2-b12 | 2/1 | Bài 12: Danh sách học sinh | visually_reviewed | verified_sgk_transcript | 21 | 0 |
| tv-g2-b13 | 2/1 | Bài 13: Yêu lắm trường ơi! | visually_reviewed | verified_sgk_transcript | 14 | 0 |
| tv-g2-b14 | 2/1 | Bài 14: Em học vẽ | visually_reviewed | verified_sgk_transcript | 23 | 0 |
| tv-g2-b15 | 2/1 | Bài 15: Cuốn sách của em | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-b16 | 2/1 | Bài 16: Khi trang sách mở ra | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-b17 | 2/1 | Bài 17: Gọi bạn | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-b18 | 2/1 | Bài 18: Tớ nhớ cậu | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t1-b19 | 2/1 | Bài 19: Chữ A và những người bạn | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t1-b20 | 2/1 | Bài 20: Nhím nâu kết bạn | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t1-b21 | 2/1 | Bài 21: Thả diều | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t1-b22 | 2/1 | Bài 22: Tớ là lê-gô | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t1-b23 | 2/1 | Bài 23: Rồng rắn lên mây | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t1-b24 | 2/1 | Bài 24: Nặn đồ chơi | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t1-b25 | 2/1 | Bài 25: Sự tích hoa tỉ muội | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t1-b26 | 2/1 | Bài 26: Em mang về yêu thương | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t1-b27 | 2/1 | Bài 27: Mẹ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t1-b28 | 2/1 | Bài 28: Trò chơi của bố | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t1-b29 | 2/1 | Bài 29: Cánh cửa nhớ bà | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t1-b30 | 2/1 | Bài 30: Thương ông | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t1-b31 | 2/1 | Bài 31: Ánh sáng của yêu thương | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t1-b32 | 2/1 | Bài 32: Chơi chong chóng | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-b19 | 2/2 | Bài 1: Chuyện bốn mùa | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-b20 | 2/2 | Bài 2: Mùa nước nổi | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-b21 | 2/2 | Bài 3: Hoa mi hót | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-b22 | 2/2 | Bài 4: Tết đến rồi | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-b23 | 2/2 | Bài 5: Giọt nước và biển lớn | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-b24 | 2/2 | Bài 6: Mùa vàng | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-b25 | 2/2 | Bài 7: Hạt thóc | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-b26 | 2/2 | Bài 8: Luỹ tre | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-b27 | 2/2 | Bài 9: Vè chim | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-b28 | 2/2 | Bài 10: Khủng long | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-b29 | 2/2 | Bài 11: Sự tích cây thì là | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-b30 | 2/2 | Bài 12: Bờ tre đón khách | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t2-b13 | 2/2 | Bài 13: Tiếng chổi tre | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t2-b14 | 2/2 | Bài 14: Cỏ non cười rồi | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t2-b15 | 2/2 | Bài 15: Những con sao biển | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t2-b16 | 2/2 | Bài 16: Tạm biệt cánh cam | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t2-b17 | 2/2 | Bài 17: Những cách chào độc đáo | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t2-b18 | 2/2 | Bài 18: Thư viện biết đi | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t2-b19 | 2/2 | Bài 19: Cảm ơn anh hà mã | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t2-b20 | 2/2 | Bài 20: Từ chú bồ câu đến in-tơ-nét | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t2-b21 | 2/2 | Bài 21: Mai An Tiêm | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t2-b22 | 2/2 | Bài 22: Thư gửi bố ngoài đảo | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t2-b23 | 2/2 | Bài 23: Bóp nát quả cam | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t2-b24 | 2/2 | Bài 24: Chiếc rễ đa tròn | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t2-b25 | 2/2 | Bài 25: Đất nước chúng mình | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t2-b26 | 2/2 | Bài 26: Trên các miền đất nước | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t2-b27 | 2/2 | Bài 27: Chuyện quả bầu | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t2-b28 | 2/2 | Bài 28: Khám phá đáy biển ở Trường Sa | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t2-b29 | 2/2 | Bài 29: Hồ Gươm | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g2-t2-b30 | 2/2 | Bài 30: Cánh đồng quê em | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b1 | 3/1 | Bài 1: Ngày gặp lại | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b2 | 3/1 | Bài 2: Về thăm quê | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b3 | 3/1 | Bài 3: Cánh rừng trong nắng | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b4 | 3/1 | Bài 4: Lần đầu ra biển | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b5 | 3/1 | Bài 5: Nhật kí tập bơi | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b6 | 3/1 | Bài 6: Tập nấu ăn | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b7 | 3/1 | Bài 7: Mùa hè lấp lánh | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b8 | 3/1 | Bài 8: Tạm biệt mùa hè | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b9 | 3/1 | Bài 9: Đi học vui sao | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b10 | 3/1 | Bài 10: Con đường đến trường | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b11 | 3/1 | Bài 11: Lời giải toán đặc biệt | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b12 | 3/1 | Bài 12: Bài tập làm văn | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b13 | 3/1 | Bài 13: Bàn tay cô giáo | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b14 | 3/1 | Bài 14: Cuộc họp của chữ viết | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t1-b15 | 3/1 | Bài 15: Thư viện | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t1-b16 | 3/1 | Bài 16: Ngày em vào Đội | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t1-b17 | 3/1 | Bài 17: Ngưỡng cửa | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t1-b18 | 3/1 | Bài 18: Món quà đặc biệt | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t1-b19 | 3/1 | Bài 19: Khi cả nhà bé tí | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t1-b20 | 3/1 | Bài 20: Trò chuyện cùng mẹ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t1-b21 | 3/1 | Bài 21: Tia nắng bé nhỏ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t1-b22 | 3/1 | Bài 22: Để cháu nắm tay ông | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t1-b23 | 3/1 | Bài 23: Tôi yêu em tôi | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t1-b24 | 3/1 | Bài 24: Bạn nhỏ trong nhà | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t1-b25 | 3/1 | Bài 25: Những bậc đá chạm mây | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t1-b26 | 3/1 | Bài 26: Đi tìm mặt trời | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t1-b27 | 3/1 | Bài 27: Những chiếc áo ấm | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t1-b28 | 3/1 | Bài 28: Con đường của bé | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t1-b29 | 3/1 | Bài 29: Ngôi nhà trong cỏ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t1-b30 | 3/1 | Bài 30: Những ngọn hải đăng | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t1-b31 | 3/1 | Bài 31: Người làm đồ chơi | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t1-b32 | 3/1 | Bài 32: Cây bút thần | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b15 | 3/2 | Bài 1: Bầu trời | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b16 | 3/2 | Bài 2: Mưa | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b17 | 3/2 | Bài 3: Cóc kiện Trời | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b18 | 3/2 | Bài 4: Những cái tên đáng yêu | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b19 | 3/2 | Bài 5: Ngày hội rừng xanh | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b20 | 3/2 | Bài 6: Cây gạo | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b21 | 3/2 | Bài 7: Một trời xanh của tôi | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b22 | 3/2 | Bài 8: Bầy voi rừng Trường Sơn | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b23 | 3/2 | Bài 9: Lời kêu gọi toàn dân tập thể dục | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b24 | 3/2 | Bài 10: Quả hồng của thỏ con | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-b25 | 3/2 | Bài 11: Chuyện bên cửa sổ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t2-b12 | 3/2 | Bài 12: Tay trái và tay phải | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t2-b13 | 3/2 | Bài 13: Mèo đi câu cá | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t2-b14 | 3/2 | Bài 14: Học nghề | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t2-b15 | 3/2 | Bài 15: Ngày như thế nào là đẹp? | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t2-b16 | 3/2 | Bài 16: A lô, tớ đây | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t2-b17 | 3/2 | Bài 17: Đất nước là gì? | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t2-b18 | 3/2 | Bài 18: Núi quê tôi | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t2-b19 | 3/2 | Bài 19: Sông Hương | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t2-b20 | 3/2 | Bài 20: Tiếng nước mình | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t2-b21 | 3/2 | Bài 21: Nhà rông | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t2-b22 | 3/2 | Bài 22: Sự tích ông Đùng, bà Đùng | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t2-b23 | 3/2 | Bài 23: Hai Bà Trưng | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t2-b24 | 3/2 | Bài 24: Cùng Bác qua suối | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t2-b25 | 3/2 | Bài 25: Ngọn lửa Ô-lim-pích | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t2-b26 | 3/2 | Bài 26: Rô-bốt ở quanh ta | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t2-b27 | 3/2 | Bài 27: Thư của ông Trái Đất gửi các bạn nhỏ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t2-b28 | 3/2 | Bài 28: Những điều nhỏ tớ làm cho Trái Đất | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t2-b29 | 3/2 | Bài 29: Bác sĩ Y-éc-xanh | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g3-t2-b30 | 3/2 | Bài 30: Một mái nhà chung | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b1 | 4/1 | Bài 1: Điều kì diệu | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b2 | 4/1 | Bài 2: Thi nhạc | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b3 | 4/1 | Bài 3: Anh em sinh đôi | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b4 | 4/1 | Bài 4: Công chúa và người dẫn chuyện | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b5 | 4/1 | Bài 5: Thần lằn xanh và tắc kè | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b6 | 4/1 | Bài 6: Nghệ sĩ trống | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b7 | 4/1 | Bài 7: Những bức chân dung | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b8 | 4/1 | Bài 8: Đò ngang | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b9 | 4/1 | Bài 9: Bầu trời trong quả trứng | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b10 | 4/1 | Bài 10: Tiếng nói của cỏ cây | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b11 | 4/1 | Bài 11: Tập làm văn | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t1-b12 | 4/1 | Bài 12: Nhà phát minh 6 tuổi | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t1-b13 | 4/1 | Bài 13: Con vẹt xanh | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t1-b14 | 4/1 | Bài 14: Chân trời cuối phố | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t1-b15 | 4/1 | Bài 15: Gặt chữ trên non | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t1-b16 | 4/1 | Bài 16: Trước ngày xa quê | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t1-b17 | 4/1 | Bài 17: Vẽ màu | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t1-b18 | 4/1 | Bài 18: Đồng cỏ nở hoa | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t1-b19 | 4/1 | Bài 19: Thanh âm của núi | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t1-b20 | 4/1 | Bài 20: Bầu trời mùa thu | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t1-b21 | 4/1 | Bài 21: Làm thỏ con bằng giấy | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t1-b22 | 4/1 | Bài 22: Bức tường có nhiều phép lạ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t1-b23 | 4/1 | Bài 23: Bét-tô-ven và bản xô-nát Ánh trăng | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t1-b24 | 4/1 | Bài 24: Người tìm đường lên các vì sao | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t1-b25 | 4/1 | Bài 25: Bay cùng ước mơ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t1-b26 | 4/1 | Bài 26: Con trai người làm vườn | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t1-b27 | 4/1 | Bài 27: Nếu em có một khu vườn | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t1-b28 | 4/1 | Bài 28: Bốn mùa mơ ước | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t1-b29 | 4/1 | Bài 29: Ở Vương quốc Tương Lai | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t1-b30 | 4/1 | Bài 30: Cánh chim nhỏ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t1-b31 | 4/1 | Bài 31: Nếu chúng mình có phép lạ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t1-b32 | 4/1 | Bài 32: Anh Ba | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b12 | 4/2 | Bài 1: Hải Thượng Lãn Ông | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b13 | 4/2 | Bài 2: Vệt phấn trên mặt bàn | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b14 | 4/2 | Bài 3: Ông Bụt đã đến | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b15 | 4/2 | Bài 4: Quả ngọt cuối mùa | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b16 | 4/2 | Bài 5: Tờ báo tường của tôi | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b17 | 4/2 | Bài 6: Tiếng ru | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b18 | 4/2 | Bài 7: Con muốn làm một cái cây | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b19 | 4/2 | Bài 8: Trên khóm tre đầu ngõ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b20 | 4/2 | Bài 9: Sự tích con Rồng cháu Tiên | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b21 | 4/2 | Bài 10: Cảm xúc Trường Sa | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-b22 | 4/2 | Bài 11: Sáng tháng Năm | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t2-b12 | 4/2 | Bài 12: Chàng trai làng Phù Ủng | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t2-b13 | 4/2 | Bài 13: Vườn của ông tôi | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t2-b14 | 4/2 | Bài 14: Trong lời mẹ hát | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t2-b15 | 4/2 | Bài 15: Người thầy đầu tiên của bố tôi | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t2-b16 | 4/2 | Bài 16: Ngựa biên phòng | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t2-b17 | 4/2 | Bài 17: Cây đa quê hương | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t2-b18 | 4/2 | Bài 18: Bước mùa xuân | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t2-b19 | 4/2 | Bài 19: Đi hội chùa Hương | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t2-b20 | 4/2 | Bài 20: Chiều ngoại ô | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t2-b21 | 4/2 | Bài 21: Những cánh buồm | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t2-b22 | 4/2 | Bài 22: Cái cầu | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t2-b23 | 4/2 | Bài 23: Đường đi Sa Pa | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t2-b24 | 4/2 | Bài 24: Quê ngoại | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t2-b25 | 4/2 | Bài 25: Khu bảo tồn động vật hoang dã Ngô-rông-gô-rô | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t2-b26 | 4/2 | Bài 26: Ngôi nhà của yêu thương | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t2-b27 | 4/2 | Bài 27: Băng tan | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t2-b28 | 4/2 | Bài 28: Chuyến du lịch thú vị | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t2-b29 | 4/2 | Bài 29: Lễ hội ở Nhật Bản | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g4-t2-b30 | 4/2 | Bài 30: Ngày hội | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b1 | 5/1 | Bài 1: Thanh âm của gió | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b2 | 5/1 | Bài 2: Cánh đồng hoa | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b3 | 5/1 | Bài 3: Tuổi Ngựa | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b4 | 5/1 | Bài 4: Bến sông tuổi thơ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b5 | 5/1 | Bài 5: Tiếng hạt nảy mầm | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b6 | 5/1 | Bài 6: Ngôi sao sân cỏ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b7 | 5/1 | Bài 7: Bộ sưu tập độc đáo | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b8 | 5/1 | Bài 8: Hành tinh kì lạ | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b9 | 5/1 | Bài 9: Trước cổng trời | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b10 | 5/1 | Bài 10: Kì diệu rừng xanh | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b11 | 5/1 | Bài 11: Hang Sơn Đoòng - những điều kì thú | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b12 | 5/1 | Bài 12: Những hòn đảo trên vịnh Hạ Long | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b13 | 5/1 | Bài 13: Mầm non | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b14 | 5/1 | Bài 14: Những ngọn núi nóng rẫy | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b15 | 5/1 | Bài 15: Bài ca về mặt trời | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b16 | 5/1 | Bài 16: Xin chào, Xa-ha-ra | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t1-b17 | 5/1 | Bài 17: Thư gửi các học sinh | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t1-b18 | 5/1 | Bài 18: Tấm gương tự học | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t1-b19 | 5/1 | Bài 19: Trải nghiệm để sáng tạo | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t1-b20 | 5/1 | Bài 20: Khổ luyện thành tài | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t1-b21 | 5/1 | Bài 21: Thế giới trong trang sách | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t1-b22 | 5/1 | Bài 22: Từ những câu chuyện ấu thơ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t1-b23 | 5/1 | Bài 23: Giới thiệu sách Dế Mèn phiêu lưu kí | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t1-b24 | 5/1 | Bài 24: Tinh thần học tập của nhà Phi-lít | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t1-b25 | 5/1 | Bài 25: Tiếng đàn ba-la-lai-ca trên sông Đà | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t1-b26 | 5/1 | Bài 26: Trí tưởng tượng phong phú | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t1-b27 | 5/1 | Bài 27: Tranh làng Hồ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t1-b28 | 5/1 | Bài 28: Tập hát quan họ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t1-b29 | 5/1 | Bài 29: Phim hoạt hình Chú ốc sên bay | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t1-b30 | 5/1 | Bài 30: Nghệ thuật múa ba lê | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t1-b31 | 5/1 | Bài 31: Một ngôi chùa độc đáo | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t1-b32 | 5/1 | Bài 32: Sự tích chú Tễu | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b17 | 5/2 | Bài 1: Tiếng hát của người đá | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b18 | 5/2 | Bài 2: Khúc hát ru những em bé lớn trên lưng mẹ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b19 | 5/2 | Bài 3: Hạt gạo làng ta | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b20 | 5/2 | Bài 4: Hộp quà màu thiên thanh | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b21 | 5/2 | Bài 5: Giỏ hoa tháng Năm | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b22 | 5/2 | Bài 6: Thư của bố | ocr_matched | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b23 | 5/2 | Bài 7: Đoàn thuyền đánh cá | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b24 | 5/2 | Bài 8: Khu rừng của Mát | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-b25 | 5/2 | Bài 9: Hội thổi cơm thi ở Đồng Vân | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t2-b10 | 5/2 | Bài 10: Những búp chè trên cây cổ thụ | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t2-b11 | 5/2 | Bài 11: Hương cốm mùa thu | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t2-b12 | 5/2 | Bài 12: Vũ điệu trên nền thổ cẩm | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t2-b13 | 5/2 | Bài 13: Đàn trưng - tiếng ca đại ngàn | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t2-b14 | 5/2 | Bài 14: Đường quê Đồng Tháp Mười | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t2-b15 | 5/2 | Bài 15: Xuồng ba lá quê tôi | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t2-b16 | 5/2 | Bài 16: Về thăm Đất Mũi | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t2-b17 | 5/2 | Bài 17: Nghìn năm văn hiến | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t2-b18 | 5/2 | Bài 18: Người thầy của muôn đời | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t2-b19 | 5/2 | Bài 19: Danh y Tuệ Tĩnh | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t2-b20 | 5/2 | Bài 20: Cụ Đồ Chiểu | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t2-b21 | 5/2 | Bài 21: Anh hùng Lao động Trần Đại Nghĩa | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t2-b22 | 5/2 | Bài 22: Bộ đội về làng | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t2-b23 | 5/2 | Bài 23: Về ngôi nhà đang xây | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t2-b24 | 5/2 | Bài 24: Việt Nam quê hương ta | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t2-b25 | 5/2 | Bài 25: Bài ca trái đất | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t2-b26 | 5/2 | Bài 26: Những con hạc giấy | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t2-b27 | 5/2 | Bài 27: Một người hùng thầm lặng | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t2-b28 | 5/2 | Bài 28: Giờ Trái Đất | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t2-b29 | 5/2 | Bài 29: Điện thoại di động | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |
| tv-g5-t2-b30 | 5/2 | Bài 30: Thành phố thông minh Mát-xđa | catalog_page_confirmed | catalog_page_pending_transcript | 0 | 0 |

## Cổng phát hành

Một bài chỉ được tính vào nội dung SGK khi có trích dẫn trang, hash nguồn, trạng thái `verified`, ánh xạ một-một giữa từng tiểu ý SGK và hoạt động app, cùng cặp audio khớp transcript. OCR chỉ là bản nháp; không tự động trở thành nội dung đã duyệt.
