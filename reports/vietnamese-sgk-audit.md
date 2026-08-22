# Báo cáo kiểm duyệt Tiếng Việt theo SGK

Ngày cập nhật: 2026-08-21

Nguồn: 10 đường dẫn đọc sách chính thức do quản trị cung cấp.

## Kết luận

- Đã lập manifest cho **10/10 sách nguồn**, tổng cộng **1.584 trang**; từng ảnh trang có SHA-256 và được cache riêng ngoài Git.
- Đã lập **danh mục 376 bài theo mục lục SGK**; mỗi bài đều có lớp, tập, tên bài và trang mở bài để đối chiếu.
- **Chưa phát hành nguyên văn SGK chưa duyệt.** Hiện có **376 bài** đã trích nguyên văn và **2097 hoạt động** có trang/tiểu ý nguồn; cần tiếp tục đối chiếu các tiểu ý còn lại trước khi công bố hoàn tất từng bài.
- OCR đã rà 1.584/1.584 trang; **376/376 bài** đã có trang mở bài từ mục lục, trong đó **376 bài** có thêm ánh xạ trang đã kiểm tra trực quan và **0 bài** chưa có trang.
- Hiện có **376 transcript SGK đã duyệt**. Văn bản/audio chính của **0 bài** đã bị khóa để không phát nội dung tự sinh thay cho SGK.
- Có **0 bài trong danh mục SGK chờ đối chiếu nguyên văn**; chúng không được gắn nhãn Luyện thêm và không sinh câu hỏi hoặc audio.
- Kho kỹ thuật hiện có một file chính và một fallback hợp lệ cho **110/376 bài**. Chỉ **110/376 transcript SGK đã duyệt** có hash transcript và trang nguồn khớp để được phép dùng cặp audio này làm giọng đọc SGK.

## Thống kê

| Chỉ số | Kết quả |
|---|---:|
| Sách nguồn đã lập manifest | 10/10 |
| Trang nguồn đã lập checksum | 1.584 |
| Danh mục bài theo mục lục SGK | 376 |
| Bài SGK đã xác minh | 376 |
| Danh mục SGK chờ đối chiếu nguyên văn | 0 |
| Trang mở bài đã xác định | 376/376 |
| Ánh xạ đã kiểm tra trực quan | 376 |
| Mục chưa khớp trang | 0 |
| Transcript SGK đã xác minh | 376 |
| Transcript SGK có audio khớp transcript | 110/376 |
| Bài đang khóa văn bản/audio chính | 0 |
| Hoạt động SGK đã xác minh | 2097 |
| Luyện thêm trong bài | 0 |
| Cặp audio chính/fallback đạt kiểm tra file | 110/376 |

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
| tv-g1-b1 | 1/1 | Bài 1: A a | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g1-b2 | 1/1 | Bài 2: B b | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g1-b3 | 1/1 | Bài 3: C c | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g1-b4 | 1/1 | Bài 4: E e - Ê ê | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g1-b5 | 1/1 | Bài 5: Ôn tập và kể chuyện | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g1-b6 | 1/1 | Bài 6: O o | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g1-b7 | 1/1 | Bài 7: Ô ô | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g1-b8 | 1/1 | Bài 8: D d - Đ đ | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g1-b9 | 1/1 | Bài 9: Ơ ơ | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g1-b10 | 1/1 | Bài 10: Ôn tập và kể chuyện | visually_reviewed | verified_sgk_transcript | 6 | 0 |
| tv-g1-b11 | 1/1 | Bài 11: I i - K k | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g1-b12 | 1/1 | Bài 12: H h - L l | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g1-b13 | 1/1 | Bài 13: U u - Ư ư | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g1-b14 | 1/1 | Bài 14: Ch ch - Kh kh | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g1-b15 | 1/1 | Bài 15: Ôn tập và kể chuyện | visually_reviewed | verified_sgk_transcript | 6 | 0 |
| tv-g1-b16 | 1/1 | Bài 16: M m - N n | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g1-b17 | 1/1 | Bài 17: G g - Gi gi | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-b18 | 1/1 | Bài 18: Gh gh - Nh nh | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-b19 | 1/1 | Bài 19: Ng ng - Ngh ngh | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-b20 | 1/1 | Bài 20: Ôn tập và kể chuyện | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b21 | 1/1 | Bài 21: R r - S s | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b22 | 1/1 | Bài 22: T t - Tr tr | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b23 | 1/1 | Bài 23: Th th - ia | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b24 | 1/1 | Bài 24: ua - ưa | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b25 | 1/1 | Bài 25: Ôn tập và kể chuyện | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b26 | 1/1 | Bài 26: Ph ph - Qu qu | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b27 | 1/1 | Bài 27: V v - X x | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b28 | 1/1 | Bài 28: Y y | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b29 | 1/1 | Bài 29: Luyện tập chính tả | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b30 | 1/1 | Bài 30: Ôn tập và kể chuyện | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b31 | 1/1 | Bài 31: an - ăn - ân | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b32 | 1/1 | Bài 32: on - ôn - ơn | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b33 | 1/1 | Bài 33: en - ên - in - un | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b34 | 1/1 | Bài 34: am - ăm - âm | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b35 | 1/1 | Bài 35: Ôn tập và kể chuyện | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b36 | 1/1 | Bài 36: om - ôm - ơm | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b37 | 1/1 | Bài 37: em - êm - im - um | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b38 | 1/1 | Bài 38: ai - ay - ây | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b39 | 1/1 | Bài 39: oi - ôi - ơi | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b40 | 1/1 | Bài 40: Ôn tập và kể chuyện | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b41 | 1/1 | Bài 41: ui - ưi | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b42 | 1/1 | Bài 42: ao - eo | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b43 | 1/1 | Bài 43: au - âu - êu | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b44 | 1/1 | Bài 44: iu - ưu | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b45 | 1/1 | Bài 45: Ôn tập và kể chuyện | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b46 | 1/1 | Bài 46: ac - ăc - âc | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b47 | 1/1 | Bài 47: oc - ôc - uc - ưc | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b48 | 1/1 | Bài 48: at - ăt - ât | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b49 | 1/1 | Bài 49: ot - ôt - ơt | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b50 | 1/1 | Bài 50: Ôn tập và kể chuyện | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b51 | 1/1 | Bài 51: et - êt - it | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b52 | 1/1 | Bài 52: ut - ưt | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b53 | 1/1 | Bài 53: ap - ăp - âp | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b54 | 1/1 | Bài 54: op - ôp - ơp | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b55 | 1/1 | Bài 55: Ôn tập và kể chuyện | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b56 | 1/1 | Bài 56: ep - êp - ip - up | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b57 | 1/1 | Bài 57: anh - ênh - inh | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b58 | 1/1 | Bài 58: ach - êch - ich | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b59 | 1/1 | Bài 59: ang - ăng - âng | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b60 | 1/1 | Bài 60: Ôn tập và kể chuyện | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b61 | 1/1 | Bài 61: ong - ông - ung - ưng | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b62 | 1/1 | Bài 62: iêc - iên - iêp | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b63 | 1/1 | Bài 63: iêng - iêm - yên | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b64 | 1/1 | Bài 64: iêt - iêu - yêu | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b65 | 1/1 | Bài 65: Ôn tập và kể chuyện | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b66 | 1/1 | Bài 66: uôi - uôm | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b67 | 1/1 | Bài 67: uôc - uôt | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b68 | 1/1 | Bài 68: uôn - uông | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b69 | 1/1 | Bài 69: ươi - ươu | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b70 | 1/1 | Bài 70: Ôn tập và kể chuyện | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b71 | 1/1 | Bài 71: ươc - ươt | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b72 | 1/1 | Bài 72: ươm - ươp | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b73 | 1/1 | Bài 73: ươn - ương | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b74 | 1/1 | Bài 74: oa - oe | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b75 | 1/1 | Bài 75: Ôn tập và kể chuyện | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b76 | 1/1 | Bài 76: oan - oăn - oat - oăt | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b77 | 1/1 | Bài 77: oai - uê - uy | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b78 | 1/1 | Bài 78: uân - uât | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b79 | 1/1 | Bài 79: uyên - uyêt | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b80 | 1/1 | Bài 80: Ôn tập và kể chuyện | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b81 | 1/1 | Bài 81: Ôn tập | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b82 | 1/1 | Bài 82: Ôn tập | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t1-b83 | 1/1 | Bài 83: Voi, hổ và khỉ | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-b21 | 1/2 | Bài 1: Tôi là học sinh lớp 1 | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-b22 | 1/2 | Bài 2: Đôi tai xấu xí | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-b23 | 1/2 | Bài 3: Bạn của gió | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-b24 | 1/2 | Bài 4: Giải thưởng tình bạn | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-b25 | 1/2 | Bài 5: Sinh nhật của voi con | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-b26 | 1/2 | Bài 6: Nụ hôn trên bàn tay | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-b27 | 1/2 | Bài 7: Làm anh | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-b28 | 1/2 | Bài 8: Cả nhà đi chơi núi | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-b29 | 1/2 | Bài 9: Quạt cho bà ngủ | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-b30 | 1/2 | Bài 10: Bữa cơm gia đình | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b11 | 1/2 | Bài 11: Ngôi nhà | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b12 | 1/2 | Bài 12: Tôi đi học | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b13 | 1/2 | Bài 13: Đi học | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b14 | 1/2 | Bài 14: Hoa yêu thương | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b15 | 1/2 | Bài 15: Cây bàng và lớp học | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b16 | 1/2 | Bài 16: Bác trống trường | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b17 | 1/2 | Bài 17: Giờ ra chơi | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b18 | 1/2 | Bài 18: Rửa tay trước khi ăn | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b19 | 1/2 | Bài 19: Lời chào đi trước | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b20 | 1/2 | Bài 20: Khi mẹ vắng nhà | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b21 | 1/2 | Bài 21: Nếu không may bị lạc | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b22 | 1/2 | Bài 22: Đèn giao thông | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b23 | 1/2 | Bài 23: Kiến và chim bồ câu | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b24 | 1/2 | Bài 24: Câu chuyện của rễ | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b25 | 1/2 | Bài 25: Câu hỏi của sói | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b26 | 1/2 | Bài 26: Chú bé chăn cừu | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b27 | 1/2 | Bài 27: Tiếng vọng của núi | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b28 | 1/2 | Bài 28: Loài chim của biển cả | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b29 | 1/2 | Bài 29: Bảy sắc cầu vồng | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b30 | 1/2 | Bài 30: Chúa tể rừng xanh | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b31 | 1/2 | Bài 31: Cuộc thi tài năng rừng xanh | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b32 | 1/2 | Bài 32: Cây liễu dẻo dai | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b33 | 1/2 | Bài 33: Tia nắng đi đâu? | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b34 | 1/2 | Bài 34: Trong giấc mơ buổi sáng | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b35 | 1/2 | Bài 35: Ngày mới bắt đầu | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b36 | 1/2 | Bài 36: Hỏi mẹ | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b37 | 1/2 | Bài 37: Những cánh cò | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b38 | 1/2 | Bài 38: Buổi trưa hè | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b39 | 1/2 | Bài 39: Hoa phượng | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b40 | 1/2 | Bài 40: Cậu bé thông minh | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b41 | 1/2 | Bài 41: Lính cứu hoả | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b42 | 1/2 | Bài 42: Lớn lên bạn làm gì? | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b43 | 1/2 | Bài 43: Ruộng bậc thang ở Sa Pa | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b44 | 1/2 | Bài 44: Nhớ ơn | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g1-t2-b45 | 1/2 | Bài 45: Du lịch biển Việt Nam | visually_reviewed | verified_sgk_transcript | 4 | 0 |
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
| tv-g2-b15 | 2/1 | Bài 15: Cuốn sách của em | visually_reviewed | verified_sgk_transcript | 14 | 0 |
| tv-g2-b16 | 2/1 | Bài 16: Khi trang sách mở ra | visually_reviewed | verified_sgk_transcript | 19 | 0 |
| tv-g2-b17 | 2/1 | Bài 17: Gọi bạn | visually_reviewed | verified_sgk_transcript | 14 | 0 |
| tv-g2-b18 | 2/1 | Bài 18: Tớ nhớ cậu | visually_reviewed | verified_sgk_transcript | 21 | 0 |
| tv-g2-t1-b19 | 2/1 | Bài 19: Chữ A và những người bạn | visually_reviewed | verified_sgk_transcript | 6 | 0 |
| tv-g2-t1-b20 | 2/1 | Bài 20: Nhím nâu kết bạn | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g2-t1-b21 | 2/1 | Bài 21: Thả diều | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g2-t1-b22 | 2/1 | Bài 22: Tớ là lê-gô | visually_reviewed | verified_sgk_transcript | 3 | 0 |
| tv-g2-t1-b23 | 2/1 | Bài 23: Rồng rắn lên mây | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g2-t1-b24 | 2/1 | Bài 24: Nặn đồ chơi | visually_reviewed | verified_sgk_transcript | 3 | 0 |
| tv-g2-t1-b25 | 2/1 | Bài 25: Sự tích hoa tỉ muội | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g2-t1-b26 | 2/1 | Bài 26: Em mang về yêu thương | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g2-t1-b27 | 2/1 | Bài 27: Mẹ | visually_reviewed | verified_sgk_transcript | 3 | 0 |
| tv-g2-t1-b28 | 2/1 | Bài 28: Trò chơi của bố | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g2-t1-b29 | 2/1 | Bài 29: Cánh cửa nhớ bà | visually_reviewed | verified_sgk_transcript | 3 | 0 |
| tv-g2-t1-b30 | 2/1 | Bài 30: Thương ông | visually_reviewed | verified_sgk_transcript | 3 | 0 |
| tv-g2-t1-b31 | 2/1 | Bài 31: Ánh sáng của yêu thương | visually_reviewed | verified_sgk_transcript | 3 | 0 |
| tv-g2-t1-b32 | 2/1 | Bài 32: Chơi chong chóng | visually_reviewed | verified_sgk_transcript | 3 | 0 |
| tv-g2-b19 | 2/2 | Bài 1: Chuyện bốn mùa | visually_reviewed | verified_sgk_transcript | 15 | 0 |
| tv-g2-b20 | 2/2 | Bài 2: Mùa nước nổi | visually_reviewed | verified_sgk_transcript | 22 | 0 |
| tv-g2-b21 | 2/2 | Bài 3: Hoa mi hót | visually_reviewed | verified_sgk_transcript | 17 | 0 |
| tv-g2-b22 | 2/2 | Bài 4: Tết đến rồi | visually_reviewed | verified_sgk_transcript | 22 | 0 |
| tv-g2-b23 | 2/2 | Bài 5: Giọt nước và biển lớn | visually_reviewed | verified_sgk_transcript | 15 | 0 |
| tv-g2-b24 | 2/2 | Bài 6: Mùa vàng | visually_reviewed | verified_sgk_transcript | 22 | 0 |
| tv-g2-b25 | 2/2 | Bài 7: Hạt thóc | visually_reviewed | verified_sgk_transcript | 16 | 0 |
| tv-g2-b26 | 2/2 | Bài 8: Luỹ tre | visually_reviewed | verified_sgk_transcript | 21 | 0 |
| tv-g2-b27 | 2/2 | Bài 9: Vè chim | visually_reviewed | verified_sgk_transcript | 16 | 0 |
| tv-g2-b28 | 2/2 | Bài 10: Khủng long | visually_reviewed | verified_sgk_transcript | 18 | 0 |
| tv-g2-b29 | 2/2 | Bài 11: Sự tích cây thì là | visually_reviewed | verified_sgk_transcript | 15 | 0 |
| tv-g2-b30 | 2/2 | Bài 12: Bờ tre đón khách | visually_reviewed | verified_sgk_transcript | 19 | 0 |
| tv-g2-t2-b13 | 2/2 | Bài 13: Tiếng chổi tre | visually_reviewed | verified_sgk_transcript | 16 | 0 |
| tv-g2-t2-b14 | 2/2 | Bài 14: Cỏ non cười rồi | visually_reviewed | verified_sgk_transcript | 21 | 0 |
| tv-g2-t2-b15 | 2/2 | Bài 15: Những con sao biển | visually_reviewed | verified_sgk_transcript | 16 | 0 |
| tv-g2-t2-b16 | 2/2 | Bài 16: Tạm biệt cánh cam | visually_reviewed | verified_sgk_transcript | 19 | 0 |
| tv-g2-t2-b17 | 2/2 | Bài 17: Những cách chào độc đáo | visually_reviewed | verified_sgk_transcript | 16 | 0 |
| tv-g2-t2-b18 | 2/2 | Bài 18: Thư viện biết đi | visually_reviewed | verified_sgk_transcript | 23 | 0 |
| tv-g2-t2-b19 | 2/2 | Bài 19: Cảm ơn anh hà mã | visually_reviewed | verified_sgk_transcript | 16 | 0 |
| tv-g2-t2-b20 | 2/2 | Bài 20: Từ chú bồ câu đến in-tơ-nét | visually_reviewed | verified_sgk_transcript | 21 | 0 |
| tv-g2-t2-b21 | 2/2 | Bài 21: Mai An Tiêm | visually_reviewed | verified_sgk_transcript | 16 | 0 |
| tv-g2-t2-b22 | 2/2 | Bài 22: Thư gửi bố ngoài đảo | visually_reviewed | verified_sgk_transcript | 23 | 0 |
| tv-g2-t2-b23 | 2/2 | Bài 23: Bóp nát quả cam | visually_reviewed | verified_sgk_transcript | 16 | 0 |
| tv-g2-t2-b24 | 2/2 | Bài 24: Chiếc rễ đa tròn | visually_reviewed | verified_sgk_transcript | 22 | 0 |
| tv-g2-t2-b25 | 2/2 | Bài 25: Đất nước chúng mình | visually_reviewed | verified_sgk_transcript | 15 | 0 |
| tv-g2-t2-b26 | 2/2 | Bài 26: Trên các miền đất nước | visually_reviewed | verified_sgk_transcript | 25 | 0 |
| tv-g2-t2-b27 | 2/2 | Bài 27: Chuyện quả bầu | visually_reviewed | verified_sgk_transcript | 16 | 0 |
| tv-g2-t2-b28 | 2/2 | Bài 28: Khám phá đáy biển ở Trường Sa | visually_reviewed | verified_sgk_transcript | 22 | 0 |
| tv-g2-t2-b29 | 2/2 | Bài 29: Hồ Gươm | visually_reviewed | verified_sgk_transcript | 12 | 0 |
| tv-g2-t2-b30 | 2/2 | Bài 30: Cánh đồng quê em | visually_reviewed | verified_sgk_transcript | 21 | 0 |
| tv-g3-b1 | 3/1 | Bài 1: Ngày gặp lại | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-b2 | 3/1 | Bài 2: Về thăm quê | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-b3 | 3/1 | Bài 3: Cánh rừng trong nắng | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-b4 | 3/1 | Bài 4: Lần đầu ra biển | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-b5 | 3/1 | Bài 5: Nhật kí tập bơi | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-b6 | 3/1 | Bài 6: Tập nấu ăn | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-b7 | 3/1 | Bài 7: Mùa hè lấp lánh | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-b8 | 3/1 | Bài 8: Tạm biệt mùa hè | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-b9 | 3/1 | Bài 9: Đi học vui sao | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-b10 | 3/1 | Bài 10: Con đường đến trường | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-b11 | 3/1 | Bài 11: Lời giải toán đặc biệt | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-b12 | 3/1 | Bài 12: Bài tập làm văn | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-b13 | 3/1 | Bài 13: Bàn tay cô giáo | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-b14 | 3/1 | Bài 14: Cuộc họp của chữ viết | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-t1-b15 | 3/1 | Bài 15: Thư viện | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-t1-b16 | 3/1 | Bài 16: Ngày em vào Đội | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-t1-b17 | 3/1 | Bài 17: Ngưỡng cửa | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-t1-b18 | 3/1 | Bài 18: Món quà đặc biệt | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-t1-b19 | 3/1 | Bài 19: Khi cả nhà bé tí | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-t1-b20 | 3/1 | Bài 20: Trò chuyện cùng mẹ | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-t1-b21 | 3/1 | Bài 21: Tia nắng bé nhỏ | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-t1-b22 | 3/1 | Bài 22: Để cháu nắm tay ông | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-t1-b23 | 3/1 | Bài 23: Tôi yêu em tôi | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-t1-b24 | 3/1 | Bài 24: Bạn nhỏ trong nhà | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-t1-b25 | 3/1 | Bài 25: Những bậc đá chạm mây | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-t1-b26 | 3/1 | Bài 26: Đi tìm mặt trời | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-t1-b27 | 3/1 | Bài 27: Những chiếc áo ấm | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-t1-b28 | 3/1 | Bài 28: Con đường của bé | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-t1-b29 | 3/1 | Bài 29: Ngôi nhà trong cỏ | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-t1-b30 | 3/1 | Bài 30: Những ngọn hải đăng | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-t1-b31 | 3/1 | Bài 31: Người làm đồ chơi | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-t1-b32 | 3/1 | Bài 32: Cây bút thần | visually_reviewed | verified_sgk_transcript | 5 | 0 |
| tv-g3-b15 | 3/2 | Bài 1: Bầu trời | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-b16 | 3/2 | Bài 2: Mưa | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-b17 | 3/2 | Bài 3: Cóc kiện Trời | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-b18 | 3/2 | Bài 4: Những cái tên đáng yêu | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-b19 | 3/2 | Bài 5: Ngày hội rừng xanh | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-b20 | 3/2 | Bài 6: Cây gạo | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-b21 | 3/2 | Bài 7: Một trời xanh của tôi | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-b22 | 3/2 | Bài 8: Bầy voi rừng Trường Sơn | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-b23 | 3/2 | Bài 9: Lời kêu gọi toàn dân tập thể dục | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-b24 | 3/2 | Bài 10: Quả hồng của thỏ con | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-b25 | 3/2 | Bài 11: Chuyện bên cửa sổ | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-t2-b12 | 3/2 | Bài 12: Tay trái và tay phải | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-t2-b13 | 3/2 | Bài 13: Mèo đi câu cá | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-t2-b14 | 3/2 | Bài 14: Học nghề | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-t2-b15 | 3/2 | Bài 15: Ngày như thế nào là đẹp? | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-t2-b16 | 3/2 | Bài 16: A lô, tớ đây | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-t2-b17 | 3/2 | Bài 17: Đất nước là gì? | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-t2-b18 | 3/2 | Bài 18: Núi quê tôi | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-t2-b19 | 3/2 | Bài 19: Sông Hương | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-t2-b20 | 3/2 | Bài 20: Tiếng nước mình | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-t2-b21 | 3/2 | Bài 21: Nhà rông | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-t2-b22 | 3/2 | Bài 22: Sự tích ông Đùng, bà Đùng | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-t2-b23 | 3/2 | Bài 23: Hai Bà Trưng | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-t2-b24 | 3/2 | Bài 24: Cùng Bác qua suối | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-t2-b25 | 3/2 | Bài 25: Ngọn lửa Ô-lim-pích | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-t2-b26 | 3/2 | Bài 26: Rô-bốt ở quanh ta | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-t2-b27 | 3/2 | Bài 27: Thư của ông Trái Đất gửi các bạn nhỏ | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-t2-b28 | 3/2 | Bài 28: Những điều nhỏ tớ làm cho Trái Đất | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-t2-b29 | 3/2 | Bài 29: Bác sĩ Y-éc-xanh | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g3-t2-b30 | 3/2 | Bài 30: Một mái nhà chung | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b1 | 4/1 | Bài 1: Điều kì diệu | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b2 | 4/1 | Bài 2: Thi nhạc | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b3 | 4/1 | Bài 3: Anh em sinh đôi | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b4 | 4/1 | Bài 4: Công chúa và người dẫn chuyện | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b5 | 4/1 | Bài 5: Thần lằn xanh và tắc kè | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b6 | 4/1 | Bài 6: Nghệ sĩ trống | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b7 | 4/1 | Bài 7: Những bức chân dung | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b8 | 4/1 | Bài 8: Đò ngang | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b9 | 4/1 | Bài 9: Bầu trời trong quả trứng | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b10 | 4/1 | Bài 10: Tiếng nói của cỏ cây | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b11 | 4/1 | Bài 11: Tập làm văn | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t1-b12 | 4/1 | Bài 12: Nhà phát minh 6 tuổi | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t1-b13 | 4/1 | Bài 13: Con vẹt xanh | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t1-b14 | 4/1 | Bài 14: Chân trời cuối phố | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t1-b15 | 4/1 | Bài 15: Gặt chữ trên non | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t1-b16 | 4/1 | Bài 16: Trước ngày xa quê | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t1-b17 | 4/1 | Bài 17: Vẽ màu | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t1-b18 | 4/1 | Bài 18: Đồng cỏ nở hoa | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t1-b19 | 4/1 | Bài 19: Thanh âm của núi | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t1-b20 | 4/1 | Bài 20: Bầu trời mùa thu | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t1-b21 | 4/1 | Bài 21: Làm thỏ con bằng giấy | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t1-b22 | 4/1 | Bài 22: Bức tường có nhiều phép lạ | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t1-b23 | 4/1 | Bài 23: Bét-tô-ven và bản xô-nát Ánh trăng | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t1-b24 | 4/1 | Bài 24: Người tìm đường lên các vì sao | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t1-b25 | 4/1 | Bài 25: Bay cùng ước mơ | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t1-b26 | 4/1 | Bài 26: Con trai người làm vườn | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t1-b27 | 4/1 | Bài 27: Nếu em có một khu vườn | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t1-b28 | 4/1 | Bài 28: Bốn mùa mơ ước | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t1-b29 | 4/1 | Bài 29: Ở Vương quốc Tương Lai | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t1-b30 | 4/1 | Bài 30: Cánh chim nhỏ | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t1-b31 | 4/1 | Bài 31: Nếu chúng mình có phép lạ | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t1-b32 | 4/1 | Bài 32: Anh Ba | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b12 | 4/2 | Bài 1: Hải Thượng Lãn Ông | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b13 | 4/2 | Bài 2: Vệt phấn trên mặt bàn | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b14 | 4/2 | Bài 3: Ông Bụt đã đến | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b15 | 4/2 | Bài 4: Quả ngọt cuối mùa | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b16 | 4/2 | Bài 5: Tờ báo tường của tôi | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b17 | 4/2 | Bài 6: Tiếng ru | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b18 | 4/2 | Bài 7: Con muốn làm một cái cây | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b19 | 4/2 | Bài 8: Trên khóm tre đầu ngõ | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b20 | 4/2 | Bài 9: Sự tích con Rồng cháu Tiên | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b21 | 4/2 | Bài 10: Cảm xúc Trường Sa | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-b22 | 4/2 | Bài 11: Sáng tháng Năm | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t2-b12 | 4/2 | Bài 12: Chàng trai làng Phù Ủng | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t2-b13 | 4/2 | Bài 13: Vườn của ông tôi | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t2-b14 | 4/2 | Bài 14: Trong lời mẹ hát | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t2-b15 | 4/2 | Bài 15: Người thầy đầu tiên của bố tôi | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t2-b16 | 4/2 | Bài 16: Ngựa biên phòng | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t2-b17 | 4/2 | Bài 17: Cây đa quê hương | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t2-b18 | 4/2 | Bài 18: Bước mùa xuân | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t2-b19 | 4/2 | Bài 19: Đi hội chùa Hương | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t2-b20 | 4/2 | Bài 20: Chiều ngoại ô | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t2-b21 | 4/2 | Bài 21: Những cánh buồm | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t2-b22 | 4/2 | Bài 22: Cái cầu | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t2-b23 | 4/2 | Bài 23: Đường đi Sa Pa | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t2-b24 | 4/2 | Bài 24: Quê ngoại | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t2-b25 | 4/2 | Bài 25: Khu bảo tồn động vật hoang dã Ngô-rông-gô-rô | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t2-b26 | 4/2 | Bài 26: Ngôi nhà của yêu thương | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t2-b27 | 4/2 | Bài 27: Băng tan | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t2-b28 | 4/2 | Bài 28: Chuyến du lịch thú vị | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t2-b29 | 4/2 | Bài 29: Lễ hội ở Nhật Bản | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g4-t2-b30 | 4/2 | Bài 30: Ngày hội | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b1 | 5/1 | Bài 1: Thanh âm của gió | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b2 | 5/1 | Bài 2: Cánh đồng hoa | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b3 | 5/1 | Bài 3: Tuổi Ngựa | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b4 | 5/1 | Bài 4: Bến sông tuổi thơ | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b5 | 5/1 | Bài 5: Tiếng hạt nảy mầm | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b6 | 5/1 | Bài 6: Ngôi sao sân cỏ | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b7 | 5/1 | Bài 7: Bộ sưu tập độc đáo | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b8 | 5/1 | Bài 8: Hành tinh kì lạ | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b9 | 5/1 | Bài 9: Trước cổng trời | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b10 | 5/1 | Bài 10: Kì diệu rừng xanh | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b11 | 5/1 | Bài 11: Hang Sơn Đoòng - những điều kì thú | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b12 | 5/1 | Bài 12: Những hòn đảo trên vịnh Hạ Long | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b13 | 5/1 | Bài 13: Mầm non | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b14 | 5/1 | Bài 14: Những ngọn núi nóng rẫy | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b15 | 5/1 | Bài 15: Bài ca về mặt trời | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b16 | 5/1 | Bài 16: Xin chào, Xa-ha-ra | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t1-b17 | 5/1 | Bài 17: Thư gửi các học sinh | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t1-b18 | 5/1 | Bài 18: Tấm gương tự học | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t1-b19 | 5/1 | Bài 19: Trải nghiệm để sáng tạo | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t1-b20 | 5/1 | Bài 20: Khổ luyện thành tài | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t1-b21 | 5/1 | Bài 21: Thế giới trong trang sách | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t1-b22 | 5/1 | Bài 22: Từ những câu chuyện ấu thơ | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t1-b23 | 5/1 | Bài 23: Giới thiệu sách Dế Mèn phiêu lưu kí | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t1-b24 | 5/1 | Bài 24: Tinh thần học tập của nhà Phi-lít | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t1-b25 | 5/1 | Bài 25: Tiếng đàn ba-la-lai-ca trên sông Đà | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t1-b26 | 5/1 | Bài 26: Trí tưởng tượng phong phú | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t1-b27 | 5/1 | Bài 27: Tranh làng Hồ | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t1-b28 | 5/1 | Bài 28: Tập hát quan họ | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t1-b29 | 5/1 | Bài 29: Phim hoạt hình Chú ốc sên bay | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t1-b30 | 5/1 | Bài 30: Nghệ thuật múa ba lê | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t1-b31 | 5/1 | Bài 31: Một ngôi chùa độc đáo | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t1-b32 | 5/1 | Bài 32: Sự tích chú Tễu | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b17 | 5/2 | Bài 1: Tiếng hát của người đá | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b18 | 5/2 | Bài 2: Khúc hát ru những em bé lớn trên lưng mẹ | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b19 | 5/2 | Bài 3: Hạt gạo làng ta | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b20 | 5/2 | Bài 4: Hộp quà màu thiên thanh | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b21 | 5/2 | Bài 5: Giỏ hoa tháng Năm | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b22 | 5/2 | Bài 6: Thư của bố | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b23 | 5/2 | Bài 7: Đoàn thuyền đánh cá | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b24 | 5/2 | Bài 8: Khu rừng của Mát | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-b25 | 5/2 | Bài 9: Hội thổi cơm thi ở Đồng Vân | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t2-b10 | 5/2 | Bài 10: Những búp chè trên cây cổ thụ | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t2-b11 | 5/2 | Bài 11: Hương cốm mùa thu | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t2-b12 | 5/2 | Bài 12: Vũ điệu trên nền thổ cẩm | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t2-b13 | 5/2 | Bài 13: Đàn trưng - tiếng ca đại ngàn | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t2-b14 | 5/2 | Bài 14: Đường quê Đồng Tháp Mười | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t2-b15 | 5/2 | Bài 15: Xuồng ba lá quê tôi | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t2-b16 | 5/2 | Bài 16: Về thăm Đất Mũi | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t2-b17 | 5/2 | Bài 17: Nghìn năm văn hiến | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t2-b18 | 5/2 | Bài 18: Người thầy của muôn đời | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t2-b19 | 5/2 | Bài 19: Danh y Tuệ Tĩnh | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t2-b20 | 5/2 | Bài 20: Cụ Đồ Chiểu | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t2-b21 | 5/2 | Bài 21: Anh hùng Lao động Trần Đại Nghĩa | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t2-b22 | 5/2 | Bài 22: Bộ đội về làng | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t2-b23 | 5/2 | Bài 23: Về ngôi nhà đang xây | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t2-b24 | 5/2 | Bài 24: Việt Nam quê hương ta | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t2-b25 | 5/2 | Bài 25: Bài ca trái đất | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t2-b26 | 5/2 | Bài 26: Những con hạc giấy | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t2-b27 | 5/2 | Bài 27: Một người hùng thầm lặng | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t2-b28 | 5/2 | Bài 28: Giờ Trái Đất | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t2-b29 | 5/2 | Bài 29: Điện thoại di động | visually_reviewed | verified_sgk_transcript | 4 | 0 |
| tv-g5-t2-b30 | 5/2 | Bài 30: Thành phố thông minh Mát-xđa | visually_reviewed | verified_sgk_transcript | 4 | 0 |

## Cổng phát hành

Một bài chỉ được tính vào nội dung SGK khi có trích dẫn trang, hash nguồn, trạng thái `verified`, ánh xạ một-một giữa từng tiểu ý SGK và hoạt động app, cùng cặp audio khớp transcript. OCR chỉ là bản nháp; không tự động trở thành nội dung đã duyệt.
