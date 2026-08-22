# Quy tắc riêng theo môn

## Tiếng Việt

- Bài đọc trong vùng “Theo SGK” phải khớp nguyên văn trang sách về nội dung, thứ tự, dấu câu, lời thoại, khổ thơ/đoạn văn và tác giả.
- Chỉ dùng bài đọc tự xây dựng khi SGK thực sự không có bài đọc phù hợp, điển hình một số bài âm/vần lớp 1 tập 1; phải gắn rõ là nội dung bổ trợ và không mang metadata SGK giả.
- Trích cả câu lệnh, hoạt động đọc/viết/nói-nghe, tiểu ý và nội dung tạo câu hỏi/audio.
- Transcript đọc toàn bài bắt đầu bằng tên bài và nội dung; không đọc câu công bố “WonderKids biên soạn”, provenance hay ghi chú kiểm toán.
- Audio chỉ mở khi bài có transcript được phép phát và asset manifest hợp lệ. Với bài SGK đã xác minh, kiểm tra `transcriptHash`, phiên bản bài, `sourcePages`, file chính và fallback.
- Shadowing dùng đúng transcript đang hiển thị. Chạm từ/câu không được khởi tạo giọng hoặc bài khác.

Các tệp/kiểm tra trọng yếu trong repo hiện tại:

- `src/data/curriculum/vietnamese/officialCatalog.ts`
- `src/data/curriculum/vietnamese/sgkReadingTranscripts.generated.json`
- `src/data/curriculum/vietnamese/audioManifest.generated.json`
- `src/utils/vietnameseReadingPolicy.ts`
- `scripts/verify_vietnamese_audio_manifest.mjs`
- `test/vietnamese-sgk-rollout.test.mjs`

## Toán

- Xác minh đúng bộ sách, lớp, tập, số bài, tên bài, trang và mạch kiến thức.
- Giữ nguyên biểu thức, dấu so sánh, phân số, số thập phân, hình học, đơn vị và điều kiện đề. Không để LaTeX thô xuất hiện trên UI.
- Phân biệt rõ: tên/trang đã đối chiếu với mục lục không đồng nghĩa câu hỏi app là nguyên văn SGK.
- Nếu chưa trích nguyên văn bài tập, provenance phải là `reference_only`/bổ trợ; mô tả và câu hỏi app không được gắn là hoạt động SGK.
- Khi trích bài tập SGK, tách từng câu/tiểu ý, giữ hình/biểu bảng cần thiết và ánh xạ một-một trước khi chấm tự động.
- Kiểm tra phép tính và đáp án bằng một phương pháp độc lập, không chỉ so chuỗi.

Các tệp/kiểm tra trọng yếu:

- `src/data/curriculum/math/officialMathCatalog.ts`
- `src/data/curriculum/math/officialMathCorrections.ts`
- `test/math-english-official-source-audit.test.mjs`

## Tiếng Anh

- Xác minh đúng sách Global Success đang dùng, lớp, Unit, tập, trang và tên Unit; không tự nối chủ đề trong ngoặc vào tên chính thức.
- Giữ nguyên tiếng Anh, chính tả, viết hoa, dấu câu, contraction, mẫu câu và thứ tự hội thoại khi nhận là nội dung SGK.
- Không để phương án/giải thích tiếng Việt lẫn vào câu hỏi tiếng Anh trừ khi hoạt động có chủ đích song ngữ.
- Nếu mới chỉ đối chiếu tên Unit và trang, nội dung đọc/câu hỏi do app tạo phải là `system_generated` + `reference_only` hoặc nhãn bổ trợ tương đương.
- Audio tiếng Anh phải khớp transcript và ngôn ngữ của bài; không fallback sang giọng Việt hoặc giọng của Unit khác.

Các tệp/kiểm tra trọng yếu:

- `src/data/curriculum/english/officialEnglishCatalog.ts` hoặc catalog chính thức hiện hành trong repo
- `test/math-english-official-source-audit.test.mjs`

Nếu tên tệp thay đổi, tìm bằng `rg` theo export/catalog đang được `src/data/curriculum/index.ts` sử dụng; không tạo nguồn dữ liệu song song chỉ vì không tìm thấy đường dẫn cũ.
