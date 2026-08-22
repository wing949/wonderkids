# KẾ HOẠCH CHI TIẾT: GAME HÓA CỘT BÊN PHẢI CHO TIẾNG VIỆT 1 – TẬP 1

Tài liệu thiết kế kiến trúc và giải pháp công nghệ nhằm chuyển đổi cột nội dung bên phải thành **Khu Vui Học & Luyện Tập Tương Tác Âm Vần (Phonics Mini-Game Zone)** cho toàn bộ 20 bài học Tiếng Việt Lớp 1 – Tập 1 (SGK Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam).

---

## 🎯 1. Mục Tiêu & Nguyên Tắc Cốt Lõi

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                    GIAO DIỆN HỌC TẬP TIẾNG VIỆT 1 - TẬP 1 (CHIA 2 CỘT CÂN ĐỐI)                  │
├───────────────────────────────────────────────┬─────────────────────────────────────────────────┤
│             CỘT TRÁI (GIỮ NGUYÊN)             │            CỘT PHẢI (GAME HÓA MỚI)              │
│        📖 TRANG SÁCH SGK NGUYÊN BẢN           │      🎮 KHU VUI HỌC TƯƠNG TÁC (MINI-GAME)       │
│                                               │                                                 │
│ • Ảnh scan sắc nét từ taphuan.nxbgd.vn        │ • Mini game tương tác 100% bám sát bài học      │
│ • Đối chiếu chuẩn xác số trang in             │ • Linh vật Cáo MiuMiu đồng hành & cổ vũ         │
│ • Nút lật trang trước / sau mượt mà           │ • Thao tác Touch/Click lớn, nút 3D Tactile      │
│ • Nền tảng pháp lý & sư phạm chuẩn GDPT 2018 │ • Giọng đọc mẫu tự nhiên & âm thanh khen ngợi   │
└───────────────────────────────────────────────┴─────────────────────────────────────────────────┘
```

### Nguyên tắc bất di bất dịch:
1. **Tuyệt đối trung thành 100% với SGK**: Không tự ý tạo thêm từ, tiếng hoặc âm ngoài phạm vi bài học Tiếng Việt 1 Tập 1. Mọi chữ, tiếng, từ ngữ và hình ảnh minh họa đều được trích xuất trực tiếp từ bài học tương ứng.
2. **Phù hợp đặc điểm nhận thức của trẻ 6 tuổi**: Hạn chế tối đa văn bản chữ dài ở cột phải; thay vào đó là **Hình ảnh trực quan + Âm thanh giọng đọc rõ ràng + Thao tác kéo thả/chạm dễ dàng**.
3. **Đa dạng gameplay theo tiến trình học**: Mỗi bài học có 1–3 mini game phù hợp mục tiêu (từ nhận diện âm chữ đơn giản ở các bài đầu, đến ghép tiếng, chọn hình, nghe chọn và ôn tập tổng hợp ở các bài sau).

---

## 🧩 2. Kiến Trúc 10 Nhóm Mini Game Âm Vần

| Nhóm Game | Tên Trò Chơi | Cơ Chế Tương Tác (Gameplay) | Mục Tiêu Sư Phạm & Bài Áp Dụng |
| :---: | :--- | :--- | :--- |
| **Nhóm 1** | **Nhận diện chữ cái** *(Letter Pick)* | Màn hình hiển thị 3–4 khối kẹo chữ cái 3D. Giọng đọc yêu cầu: *"Bé hãy tìm chữ a nhé!"*. Bé bấm chọn đúng chữ mục tiêu. Vị trí xáo trộn ngẫu nhiên sau mỗi lượt. | Bài 1 (A a), Bài 2 (B b), Bài 6 (O o), Bài 7 (Ô, Ơ), Bài 8 (I, K), Bài 9 (U, Ư)... |
| **Nhóm 2** | **Tìm chữ trên mây** *(Cloud Letters)* | Các đám mây mang chữ cái bồng bềnh trôi nhẹ. Bé tìm và chạm đúng chữ cái của bài để mây phát sáng cầu vồng. | Bài 1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 15... |
| **Nhóm 3** | **Ghép chữ thành tiếng** *(Drag & Assemble)* | Cho các thẻ chữ cái rời (ví dụ: `c` + `a` $\rightarrow$ `ca`; `b` + `a` + `\` $\rightarrow$ `bà`). Bé kéo thả chữ cái vào khay gỗ để tạo thành tiếng có nghĩa trong SGK. | Bài 2 (`bà`, `bế`), Bài 3 (`cá`, `dế`, `đò`), Bài 4 (`bé`, `vẽ`, `lê`), Bài 16, 17, 18, 19... |
| **Nhóm 4** | **Nghe âm – Chọn chữ** *(Listen & Pick)* | Hệ thống phát âm một âm hoặc tiếng. Bé lắng nghe và chọn đúng thẻ chữ cái tương ứng. Có nút 🔊 để nghe lại không giới hạn. | Toàn bộ 20 bài học (kết hợp rèn luyện thính giác - thị giác - phản xạ). |
| **Nhóm 5** | **Nhìn hình – Chọn tiếng/từ** *(Word-Picture Match)* | Hiển thị hình vẽ minh họa trong SGK (ví dụ: cá cờ, dế mèn, quả lê, con dê). Bé bấm chọn đúng chữ/tiếng tương ứng với hình. | Bài 3 (`cá cờ`), Bài 4 (`quả lê`), Bài 5 (`chú dê`), Bài 11 (`mận`, `lê`), Bài 16 (`quả khế`)... |
| **Nhóm 6** | **Khu vườn săn chữ** *(Garden Letter Hunt)* | Khung cảnh khu vườn pastel cùng Cáo MiuMiu. Chữ cái mục tiêu lấp ló trên cành cây, giỏ quả hoặc hộp quà. Bé chạm vào để thu thập sao. | Bài 4, Bài 7, Bài 9, Bài 11, Bài 15... |
| **Nhóm 7** | **Đập bóng / Bắt chữ** *(Bubble Pop)* | Các bong bóng xà phòng ngũ sắc mang các chữ cái bay từ dưới lên. Bé nhanh tay chạm vỡ bong bóng chứa chữ đúng. Tăng dần phản xạ thị giác. | Bài 1, Bài 3, Bài 6, Bài 8, Bài 13, Bài 14... |
| **Nhóm 8** | **Xếp đúng thứ tự tiếng** *(Order Sequence)* | Các thành phần của tiếng hoặc câu ngắn trong SGK bị xáo trộn (ví dụ: `Hà` - `và` - `Nam` - `ca hát`). Bé kéo thả xếp lại câu hoàn chỉnh. | Bài 1 (`Nam và Hà ca hát`), Bài 2 (`Bà bế bé`), Bài 19 (`Bé tan học`)... |
| **Nhóm 9** | **Thử thách nghe âm** *(Phonics Audio Challenge)* | Nghe giọng đọc phát âm mẫu chuẩn (âm đơn, âm ghép `ch`, `kh`, `nh`, `ng`, `ngh`, `gh` hoặc vần `an`, `at`) và chọn đúng cặp âm/vần. | Bài 16 (`ch`, `kh`), Bài 17 (`nh`, `ng`), Bài 18 (`ngh`, `gh`), Bài 19 (`an`, `at`)... |
| **Nhóm 10** | **Đại hội Ôn tập & Ngôi sao** *(Unit Review Challenge)* | Vòng quay ôn tập tổng hợp kết hợp nhiều mini game nhỏ, kiểm tra toàn bộ bảng chữ cái và các tiếng đã học trong chặng. Tặng cúp huy hiệu cho bé. | **Bài 5** (Ôn tập âm 1-4), **Bài 10** (Ôn tập âm 6-9), **Bài 20** (Ôn tập cuối Học kì 1). |

---

## 📚 3. Ma Trận Dữ Liệu 20 Bài Học Tiếng Việt 1 (Tập 1)

| Mã Bài | Tên Bài Học SGK | Âm/Vần Dạy | Tiếng/Từ Khóa Chuẩn SGK | Cụm Mini-Game Được Cấu Hình |
| :---: | :--- | :---: | :--- | :--- |
| `tv-g1-b1` | **Bài 1: A a** | `a`, `A` | `ca`, `hát`, `Nam`, `Hà`, `ca hát` | **Game 1** (Nhận diện chữ A) + **Game 7** (Bắt bóng chữ A) + **Game 8** (Xếp câu "Nam và Hà ca hát") |
| `tv-g1-b2` | **Bài 2: B b** | `b`, `B`, dấu huyền `\` | `ba`, `bà`, `bé`, `bế`, `bà bế bé` | **Game 1** (Nhận diện B) + **Game 3** (Ghép `b` + `a` + `\` = `bà`) + **Game 4** (Nghe chọn) |
| `tv-g1-b3` | **Bài 3: C c - D d - Đ đ** | `c`, `d`, `đ`, dấu sắc `/` | `cá`, `cờ`, `dế`, `đò`, `cá cờ`, `dế mèn` | **Game 1** (Chọn C, D, Đ) + **Game 5** (Chọn hình cá cờ, dế) + **Game 7** (Bắt chữ) |
| `tv-g1-b4` | **Bài 4: E e - Ê ê** | `e`, `ê`, dấu hỏi `?` | `be`, `bẻ`, `bê`, `lê`, `vẽ`, `quả lê` | **Game 1** (Nhận diện E, Ê) + **Game 5** (Chọn hình quả lê) + **Game 3** (Ghép `b` + `ê` = `bê`) |
| `tv-g1-b5` | **Bài 5: Ôn tập & Kể chuyện** | `a, b, c, d, đ, e, ê` | `ba, bà, bé, bê, cá, dế, dê con` | **Game 10** (Vòng quay ôn tập tổng hợp chặng 1 + Huy hiệu Ngôi sao) |
| `tv-g1-b6` | **Bài 6: O o** | `o`, `O`, dấu ngã `~` | `bò`, `cỏ`, `cò`, `gà`, `bò gặm cỏ` | **Game 1** (Nhận diện O) + **Game 2** (Tìm chữ trên mây) + **Game 5** (Hình chú bò, cỏ) |
| `tv-g1-b7` | **Bài 7: Ô ô - Ơ ơ** | `ô`, `ơ`, dấu nặng `.` | `bố`, `cô`, `hổ`, `cờ`, `nơ`, `bờ hồ` | **Game 1** (Đội nón Ô, đeo râu Ơ) + **Game 4** (Nghe âm tìm chữ) + **Game 3** (Ghép chữ) |
| `tv-g1-b8` | **Bài 8: I i - K k** | `i`, `k` | `bi`, `kì`, `kẻ`, `kệ`, `kính`, `kê` | **Game 1** (Nhận diện I, K) + **Game 4** (Quy tắc chính tả K đi với i, e, ê) + **Game 7** (Đập bóng) |
| `tv-g1-b9` | **Bài 9: U u - Ư ư** | `u`, `ư` | `đu`, `đủ`, `củ`, `từ`, `lá thư`, `đu đủ` | **Game 1** (Nhận diện U, Ư) + **Game 5** (Hình quả đu đủ, lá thư) + **Game 3** (Ghép tiếng) |
| `tv-g1-b10` | **Bài 10: Ôn tập âm chữ cái** | `o, ô, ơ, i, k, u, ư` | `bố mẹ, đu đủ, bờ hồ, cô bé` | **Game 10** (Đại hội rùa và thỏ ôn tập bảng chữ cái + Bảng vàng điểm sao) |
| `tv-g1-b11` | **Bài 11: L l - M m** | `l`, `m` | `lá`, `me`, `mận`, `lê`, `mẹ`, `me chua` | **Game 1** (Nhận diện L, M) + **Game 6** (Khu vườn hái mận và lê) + **Game 4** (Nghe chọn) |
| `tv-g1-b12` | **Bài 12: N n - P p** | `n`, `p` | `nơ`, `nụ`, `pa`, `nụ hoa`, `nơ đỏ` | **Game 1** (Nhận diện N, P) + **Game 5** (Chọn hình nụ hoa sen) + **Game 3** (Ghép tiếng) |
| `tv-g1-b13` | **Bài 13: R r - S s** | `r`, `s` | `rổ`, `rá`, `sẻ`, `sáo`, `chim sẻ`, `cây si` | **Game 1** (Nhận diện R, S) + **Game 4** (Phân biệt R và S) + **Game 5** (Hình chim sẻ) |
| `tv-g1-b14` | **Bài 14: T t - Th th** | `t`, `th` | `tổ`, `tạ`, `thỏ`, `thìa`, `chú thỏ`, `lá tía tô`| **Game 1** (Nhận diện T, Th) + **Game 3** (Ghép `t` + `h` = `th`) + **Game 5** (Hình chú thỏ) |
| `tv-g1-b15` | **Bài 15: V v - X x** | `v`, `x` | `vở`, `ve`, `xe`, `xôi`, `xe đạp`, `vú sữa` | **Game 1** (Nhận diện V, X) + **Game 6** (Chuyến xe giao quà) + **Game 4** (Nghe chọn) |
| `tv-g1-b16` | **Bài 16: Ch ch - Kh kh** | `ch`, `kh` | `chợ`, `chó`, `khế`, `khỉ`, `quả khế`, `chú khỉ`| **Game 9** (Nghe âm Ch, Kh) + **Game 5** (Hình quả khế, chú khỉ) + **Game 3** (Ghép chữ) |
| `tv-g1-b17` | **Bài 17: Nh nh - Ng ng** | `nh`, `ng` | `nhà`, `nho`, `ngô`, `nghé`, `chùm nho`, `cây ngô`| **Game 9** (Nghe âm Nh, Ng) + **Game 5** (Hình chùm nho, bắp ngô) + **Game 7** (Bắt bóng) |
| `tv-g1-b18` | **Bài 18: Ngh ngh - Gh gh** | `ngh`, `gh` | `nghé`, `nghỉ`, `ghế`, `ghi`, `con nghé`, `ghế gỗ`| **Game 9** (Quy tắc Ngh, Gh đi với i, e, ê) + **Game 5** (Hình chú nghé con) + **Game 3** |
| `tv-g1-b19` | **Bài 19: An an - At at** | `an`, `at` | `bàn`, `bạn`, `bát`, `hát`, `tan học`, `ca hát`| **Game 3** (Ghép vần `an`, `at`) + **Game 4** (Nghe chọn vần) + **Game 8** (Xếp câu) |
| `tv-g1-b20` | **Bài 20: Ôn tập cuối HK 1** | Toàn bộ âm vần HK1 | Toàn bộ từ ngữ trọng tâm HK1 | **Game 10** (Vương quốc Chữ Cái: Đại tiệc tổng kết Học kì 1 + Trao cúp Trạng Nguyên) |

---

## 🎨 4. Thiết Kế Giao Diện UI/UX Khu Vui Học (Cột Phải)

```
┌────────────────────────────────────────────────────────────────────────┐
│  🦊 KHU VUI HỌC CÙNG CÁO MIUMIU                         ⭐ 3/3 Sao    │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │ 🔊 "Bé hãy bấm vào chữ A màu đỏ đang tỏa sáng nhé!"            │   │
│   └────────────────────────────────────────────────────────────────┘   │
│                                                                        │
│                    ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️                       │
│                                                                        │
│         ┌───────────┐      ┌───────────┐      ┌───────────┐            │
│         │     A     │      │     B     │      │     C     │            │
│         │   (Đỏ)    │      │  (Xanh)   │      │  (Vàng)   │            │
│         └───────────┘      └───────────┘      └───────────┘            │
│            [3D Pop]           [3D Pop]           [3D Pop]              │
│                                                                        │
│                    ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️                       │
│                                                                        │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │ 🦊 Cáo MiuMiu: "Đúng rồi! Bé giỏi quá, bé nhận được 1 sao! ⭐"  │   │
│   └────────────────────────────────────────────────────────────────┘   │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│  [ 🔊 Nghe Lại ]           [ 💡 Gợi Ý ]           [ 🔄 Chơi Lại ]      │
└────────────────────────────────────────────────────────────────────────┘
```

### Các thành phần chính của Component:
1. **Header Vui Học**:
   - Tiêu đề game vui tươi: `🎮 Thử Thách Cùng Cáo MiuMiu`.
   - Thanh tiến trình kẹo ngọt (Candy Progress Bar) với số sao thu thập ($1/3$, $2/3$, $3/3$).
2. **Khu vực Trò chơi Trung tâm (Game Stage)**:
   - Thẻ trò chơi 3D nổi bật (`WashiCard` với góc bo lớn $32\text{px}$, viền pastel mềm).
   - Các nút chữ/hình ảnh kích thước lớn ($80\text{px} \times 80\text{px}$ đến $120\text{px} \times 120\text{px}$), hỗ trợ Touch cực nhạy cho trẻ nhỏ.
   - Hiệu ứng chuyển động nảy bật (`framer-motion` scale pop, sparkle particles khi chọn đúng).
3. **Thanh Điều Khiển Thân Thiện**:
   - `🔊 Nghe lại`: Phát lại audio hướng dẫn và âm thanh mẫu.
   - `💡 Gợi ý`: Cáo MiuMiu làm chữ cái mục tiêu rung rinh hoặc phát sáng nhẹ.
   - `🔄 Chơi lại`: Reset lượt chơi với vị trí xáo trộn ngẫu nhiên.
4. **Phản Hồi Sư Phạm Tích Cực**:
   - Chọn đúng: Âm thanh tươi vui `soundManager.play('correct')`, pháo hoa sao vàng `triggerStarBurst()`, MiuMiu nhảy múa khen ngợi.
   - Chọn chưa đúng: Âm thanh nhẹ nhàng `soundManager.play('tap')`, MiuMiu mỉm cười *"Bé thử lại lần nữa nhé!"*, không trừ điểm hay tạo áp lực.

---

## 🏗️ 5. Cấu Trúc File & Module Đề Xuất (Khi Triển Khai)

```
src/
├── data/
│   └── curriculum/
│       └── vietnamese/
│           ├── grade1PhonicsGames.ts         # [MỚI] Bộ dữ liệu 20 bài game chuẩn SGK 100%
│           └── grade1.ts                      # Tích hợp gameConfig vào từng bài học
├── components/
│   └── exercise/
│       ├── Grade1PhonicsGameZone.tsx         # [MỚI] Khung container chính cho cột phải Lớp 1 HK1
│       └── phonicsGames/                     # [MỚI] Thư mục các Mini Game chuyên biệt
│           ├── LetterPickGame.tsx             # Game 1: Nhận diện chữ cái
│           ├── FloatingLettersGame.tsx        # Game 2: Tìm chữ trên mây
│           ├── LetterAssembleGame.tsx         # Game 3: Kéo thả ghép tiếng
│           ├── ListenAndPickGame.tsx          # Game 4: Nghe âm chọn chữ
│           ├── PictureMatchGame.tsx           # Game 5: Nhìn hình chọn tiếng
│           ├── BubblePopGame.tsx              # Game 7: Bắt bong bóng chữ
│           ├── OrderSequenceGame.tsx          # Game 8: Xếp thứ tự tiếng/câu
│           └── UnitReviewGame.tsx             # Game 10: Ôn tập tổng hợp & Trao cúp
└── utils/
    └── phonicsAudioHelper.ts                 # Helper phát âm chuẩn âm vần & giọng đọc câu lệnh
```

---

## 🔒 6. Kế Hoạch Kiểm Thử & Tiêu Chí Nghiệm Thu (Verification Plan)

### A. Kiểm Thử Độ Chuẩn Xác Dữ Liệu SGK (Data Integrity)
- Viết test tự động (`test/vietnamese-grade1-phonics-games.test.mjs`) kiểm tra $100\%$ các chữ, tiếng, từ ngữ trong `grade1PhonicsGames.ts` đối chiếu với nội dung trang in SGK trên `taphuan.nxbgd.vn`.
- Đảm bảo **0% từ ngữ bịa đặt hay vượt chương trình**.

### B. Kiểm Thử Giao Diện & Trải Nghiệm (UI/UX Responsiveness)
- Kiểm tra hiển thị 2 cột trên Desktop / iPad / Màn hình cảm ứng:
  - Cột trái: Trang sách SGK cuộn/lật trang ổn định.
  - Cột phải: Mini-game chiếm trọn khu vực, nút bấm to rõ, không bị vỡ layout hay che khuất.
- Thao tác kéo thả và chạm cảm ứng mượt mà $60\text{fps}$.

### C. Kiểm Thử Hệ Thống Âm Thanh & Giọng Đọc
- Nút 🔊 phát đúng giọng đọc câu lệnh và âm vần chuẩn tiếng Việt.
- Âm thanh khen ngợi và hiệu ứng sao nổ đúng thời điểm khi bé hoàn thành.

---

> [!IMPORTANT]
> **Cam kết**: Đây là bản **Kế hoạch Thiết kế (Plan)** hoàn chỉnh. Theo đúng chỉ thị của bạn, **không có bất kỳ dòng code nào bị thay đổi trong hệ thống** cho đến khi bạn duyệt và yêu cầu triển khai.
