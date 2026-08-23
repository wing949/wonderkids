---
name: vietnamese-expressive-reading-audio
description: Phân tích thể loại, cấu trúc khổ/dòng, ngắt nghỉ và kiểm chứng audio bài đọc SGK Tiếng Việt trong WonderKids; dùng khi sửa transcript đọc, tạo hoặc thu lại audio Cô Giáo Vy, đánh giá thơ/văn, kiểm tra manifest, tốc độ, khoảng nghỉ hoặc nút Nghe toàn bộ.
---

# Phân tích và đọc audio Tiếng Việt

Áp dụng skill này cho audio bài đọc Tiếng Việt trong WonderKids. Mục tiêu là giữ nguyên văn bản đã duyệt, đọc đúng thể loại và chỉ phát hành tệp đã kiểm chứng bằng dữ liệu thực.

## Bất biến bắt buộc

- Transcript hiển thị phải giữ nguyên nội dung SGK đã duyệt. Không thêm dấu chấm lửng, sửa câu hoặc ghép dòng chỉ để điều khiển TTS.
- Nhịp đọc nằm trong `prosodyPlan`, tách khỏi transcript hiển thị.
- Luồng chính luôn là **Cô Giáo Vy**. Chính sách hiện tại không dùng fallback; manifest phải có `fallbackFiles: 0` và `fallbackPolicy: disabled`.
- Khi một audio lỗi, chỉ tạo lại luồng chính của đúng bài lỗi. Không tạo lại bài đã đạt và không thay giọng.
- Audio bắt đầu bằng tên bài rồi tới nguyên văn nội dung. Không đọc nhãn nguồn, trạng thái kiểm toán, “WonderKids biên soạn”, tác giả hoặc thông tin provenance trừ khi người dùng yêu cầu rõ.
- Không phát hành khi transcript, trang nguồn, `transcriptHash`, `prosodyHash` hoặc checksum audio không khớp.

## 1. Phân tích thể loại và cấu trúc

Không suy đoán thơ chỉ từ số chữ trung bình hoặc câu ngắn. Xác định `genre` theo thứ tự:

1. Metadata đã đối chiếu với trang SGK.
2. Bố cục trực quan trên trang sách: xuống dòng thơ, khổ thơ, tên thể loại hoặc mục Đọc.
3. Cấu trúc văn bản gốc đã duyệt.

Dùng một trong các giá trị rõ ràng: `poem`, `prose`, `story`. Nếu chưa đủ bằng chứng, giữ trạng thái chưa duyệt và không sinh audio như thể đã xác minh.

Với thơ:

- Giữ từng dòng thơ thành một segment riêng.
- Giữ ranh giới khổ thơ theo SGK; dòng trống hoặc dấu đánh số khổ chỉ là thông tin cấu trúc.
- Các ký hiệu cấu trúc như `(1)`, `(2)` không được đọc nếu chúng không thuộc lời thơ.
- Không dùng dấu câu để tự chia khổ vì câu hỏi, dấu chấm than và dấu chấm có thể nằm giữa cùng một khổ.
- Nếu dữ liệu phẳng không giữ được khổ, đối chiếu trang SGK và khai báo ranh giới cụ thể theo `lessonId`; không đoán mò.

Với văn xuôi hoặc truyện:

- Giữ đúng đoạn văn và dấu câu.
- Không áp nhịp thơ, không tách mỗi dòng OCR thành một câu đọc riêng.
- Lời thoại cần có nhịp tự nhiên nhưng không sửa nội dung để ép ngữ điệu.

## 2. Kế hoạch ngắt nghỉ

Mỗi bài phải có `prosodyPlan` xác định được bằng dữ liệu:

- `genre`, `version`, `prosodyHash`
- `segments[]` gồm `text`, `synthesisText`, `pauseAfterMs`, chỉ số dòng/khổ khi có
- `stanzaCount`, `lineCount`, `segmentCount`, `tempo`

Chuẩn thơ hiện hành trước khi giảm tốc:

- Sau tiêu đề: khoảng 640 ms.
- Sau mỗi dòng: khoảng 320 ms.
- Sau dòng cuối khổ: khoảng 560 ms.
- Tempo cơ sở: `0.8`, tạo khoảng nghỉ cảm nhận xấp xỉ 800/400/700 ms sau khi giảm tốc.

Tốc độ kiểm định cho học sinh tiểu học: 100–135 từ/phút; vùng ưu tiên 110–130. Nếu kết quả thật vượt 135 từ/phút, tính tempo thích nghi từ số từ và thời lượng âm thanh, hướng tới khoảng 128 từ/phút. Không tăng tốc bài vốn đã chậm và không nới ngưỡng kiểm thử chỉ để đạt.

## 3. Sinh audio

Thiết lập chuẩn:

- Engine: `Vieneu(mode="v3turbo")` trên GPU.
- Reference voice duy nhất: `Cô Giáo Vy.wav`.
- `temperature`: khoảng `0.38`; `silence_p`: khoảng `0.12`; không crossfade giữa các dòng thơ.
- Tạo thơ theo từng segment, không truyền cả bài thơ thành một chuỗi.
- Cắt im lặng thừa ở đầu/cuối output của từng segment trước khi chèn khoảng nghỉ sư phạm.
- Ghép segment và khoảng lặng, sau đó mới áp tempo.
- Master WAV lưu tại `backup_audio_wav/curriculum/primary/` và không đưa vào Git.
- MP3 production: `public/audio/curriculum/{lessonId}.mp3`, 128 kbps stereo, 44.1 kHz.
- Thay tệp theo cách nguyên tử; không để tệp dở dang thay thế audio đang dùng.

Trong repo này, ưu tiên dùng pipeline hiện có:

```powershell
python scripts/generate_all_293_expressive_vieneu_cogaovy.py --poems-only
python scripts/generate_all_293_expressive_vieneu_cogaovy.py --lesson-id <lessonId> --force
```

Lệnh đầu chỉ tạo các bài chưa khớp metadata/checksum. Lệnh thứ hai chỉ dùng khi đã xác định bài cụ thể cần thu lại.

## 4. Manifest và điều kiện mở nút nghe

Mỗi tệp chính cần lưu tối thiểu:

- `lessonId`, `primaryPath`, `primaryVoice`
- `transcriptHash`, `lessonVersion`, `sourcePages`, `genre`
- `prosodyVersion`, `prosodyHash`, `segmentCount`, `stanzaCount`, `lineCount`
- `durationMs`, `effectiveTempo`, `wordsPerMinute`, `audioSha256`, `isExpressive`

Không thêm trường fallback. Nút **Nghe toàn bộ** chỉ được mở khi file tồn tại, giải mã được, checksum và toàn bộ metadata khớp transcript đang hiển thị.

## 5. Quy trình rà soát và sửa lỗi

1. Đọc transcript, metadata nguồn và ảnh trang SGK; xác định thể loại.
2. So sánh tên bài, nội dung, thứ tự dòng/đoạn và ranh giới khổ.
3. Sửa dữ liệu nguồn trước; chạy đồng bộ để tạo lại task và `prosodyPlan`.
4. Chạy kiểm thử cấu trúc trước khi sinh audio.
5. Chỉ sinh lại các luồng chính chưa đạt.
6. Kiểm tra tệp thật bằng `ffprobe` và `ffmpeg silencedetect`:
   - thời lượng hợp lệ;
   - tốc độ 100–135 từ/phút;
   - đủ khoảng nghỉ dòng;
   - đủ khoảng nghỉ dài theo số khổ.
7. Nghe ít nhất một bài thơ đại diện sau khi đo tự động. Đánh giá rõ: khoảng nghỉ sau tiêu đề, cuối dòng, cuối khổ, tốc độ, phát âm và cảm xúc.
8. Nếu còn bài vượt tốc hoặc sai nhịp, chỉ xử lý lại danh sách lỗi rồi chạy toàn bộ kiểm định lần nữa.

## 6. Cổng phát hành

Chạy mới và đọc đầy đủ kết quả trước khi kết luận:

```powershell
node --test test/vietnamese-poetry-prosody.test.mjs
node --test test/vietnamese-audio-metadata.test.mjs
npm run verify:vietnamese-audio
npm run verify:vietnamese-poetry-audio
npm test
npm run build
```

Chỉ báo hoàn thành khi:

- 100% bài thơ đạt kiểm tra khổ/dòng và tốc độ;
- 293/293 audio chính hợp lệ;
- 0 fallback, 0 file thiếu, 0 lỗi giải mã, 0 lệch trang/hash;
- toàn bộ test và build thành công;
- kiểm tra DOM liên quan tới nút nghe đạt nếu thay đổi ảnh hưởng giao diện.

Không commit hoặc push nếu người dùng chưa yêu cầu.
