import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const outputDir = await mkdtemp(join(tmpdir(), 'wonderkids-vietnamese-rollout-'));
await build({
  entryPoints: [
    'src/data/curriculum/index.ts',
    'src/data/curriculum/vietnamese/bookManifests.ts',
    'src/utils/lessonCard.ts',
    'src/utils/lessonNarration.ts',
    'src/utils/audioFallback.ts',
    'src/utils/sourcePageViewer.ts',
    'src/utils/vietnameseReadingPolicy.ts',
  ],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outdir: outputDir,
  write: true,
  logLevel: 'silent',
});

const curriculum = await import(pathToFileURL(join(outputDir, 'data', 'curriculum', 'index.js')).href);
const books = await import(pathToFileURL(join(outputDir, 'data', 'curriculum', 'vietnamese', 'bookManifests.js')).href);
const cards = await import(pathToFileURL(join(outputDir, 'utils', 'lessonCard.js')).href);
const narration = await import(pathToFileURL(join(outputDir, 'utils', 'lessonNarration.js')).href);
const audioFallback = await import(pathToFileURL(join(outputDir, 'utils', 'audioFallback.js')).href);
const sourcePageViewer = await import(pathToFileURL(join(outputDir, 'utils', 'sourcePageViewer.js')).href);
const readingPolicy = await import(pathToFileURL(join(outputDir, 'utils', 'vietnameseReadingPolicy.js')).href);

test('10 manifest sách ghi đúng tổng 1.584 trang và chưa tự nhận đã kiểm duyệt', () => {
  const expectedPageCounts = [186, 178, 146, 146, 154, 146, 150, 146, 170, 162];
  assert.equal(books.VIETNAMESE_BOOK_MANIFESTS.length, 10);
  assert.deepEqual(books.VIETNAMESE_BOOK_MANIFESTS.map((book) => book.pageCount), expectedPageCounts);
  assert.equal(books.VIETNAMESE_BOOK_MANIFESTS.reduce((sum, book) => sum + book.pageCount, 0), 1584);
  for (const book of books.VIETNAMESE_BOOK_MANIFESTS) {
    assert.match(book.readerUrl, /^https:\/\/taphuan\.nxbgd\.vn\/tap-huan\/doc-sach\//);
    assert.equal(book.importStatus, 'source_indexed');
    assert.equal(book.published, false);
    assert.equal(book.pages.length, book.pageCount);
    for (const page of book.pages) {
      assert.ok(Number.isInteger(page.readerIndex));
      assert.match(page.imageUrl, /^https:\/\//);
      assert.match(page.sourceHash, /^[a-f0-9]{64}$/);
      assert.equal(page.verificationStatus, 'draft');
    }
  }
});

test('nội dung cũ được gắn làm Luyện thêm bên trong từng bài và không mang metadata SGK', () => {
  const lessons = [1, 2, 3, 4, 5].flatMap((grade) =>
    curriculum.getLessonsForGradeAndSubject(grade, 'vietnamese')
  );

  assert.equal(lessons.length, 132);
  assert.equal(lessons.filter((lesson) => lesson.catalogSection === 'sgk').length, 0);
  assert.equal(lessons.filter((lesson) => lesson.catalogSection === 'extra_practice').length, 132);

  for (const lesson of lessons) {
    assert.ok(lesson.cardPreview?.trim(), `Thiếu preview: ${lesson.id}`);
    assert.equal(lesson.textbookPageRef, undefined, `Luyện thêm còn trang SGK: ${lesson.id}`);
    assert.equal(lesson.referenceBook, undefined, `Luyện thêm còn sách tham khảo: ${lesson.id}`);
    assert.equal(lesson.referenceDetail, undefined, `Luyện thêm còn chi tiết SGK: ${lesson.id}`);
    assert.equal(lesson.referenceUrl, undefined, `Luyện thêm còn link SGK: ${lesson.id}`);
    assert.equal(lesson.appExtensions.length, lesson.questions.length, `Thiếu hoạt động Luyện thêm trong bài: ${lesson.id}`);
    if (lesson.sourceCitation) {
      assert.equal(lesson.sourceCitation.verificationStatus, 'draft', `Nguồn chưa duyệt bị nâng trạng thái: ${lesson.id}`);
      assert.ok(Array.isArray(lesson.sourcePageImageUrls), `Thiếu danh sách ảnh nguồn: ${lesson.id}`);
      assert.ok(lesson.sourcePageImageUrls.length > 0, `Thiếu ảnh trang SGK để hiển thị trong bài: ${lesson.id}`);
    } else {
      assert.equal(lesson.sourcePageImageUrls.length, 0, `Bài chưa khớp lại mang ảnh SGK: ${lesson.id}`);
    }
  }
});

test('thẻ bài chỉ dùng nội dung học, không dùng ghi chú provenance', () => {
  const lesson = curriculum.getLessonsForGradeAndSubject(2, 'vietnamese')[0];
  const card = cards.getLessonCardContent(lesson);

  assert.equal(card.badge, '📖 SGK Tiếng Việt 2 Tập một — Trang 10, 11, 12');
  assert.equal(card.title, 'Bài 1: Tôi là học sinh lớp 2');
  assert.equal(card.title, lesson.provenance.referenceLessonTitle);
  assert.equal(card.preview, lesson.cardPreview);
  assert.match(card.preview, /Nội dung:/);
  assert.match(card.preview, /Mục tiêu:/);
  assert.match(card.preview, /Rèn luyện:/);
  assert.deepEqual(card.previewItems.map((item) => item.label), ['Nội dung', 'Mục tiêu', 'Rèn luyện']);
  assert.equal(card.previewItems.length, 3);
  for (const item of card.previewItems) {
    assert.ok(item.text.length > 0, `Thiếu mô tả ${item.label}`);
    assert.ok(item.text.length <= 88, `${item.label} vượt giới hạn 88 ký tự`);
  }
  assert.doesNotMatch(JSON.stringify(card), /chưa xác minh|nội dung tự sinh|wonderkids biên soạn|provenance/i);
});

test('mọi thẻ Tiếng Việt có đúng ba dòng mô tả ngắn để giữ cùng chiều cao', () => {
  const lessons = [1, 2, 3, 4, 5].flatMap((grade) =>
    curriculum.getLessonsForGradeAndSubject(grade, 'vietnamese')
  );

  for (const lesson of lessons) {
    const card = cards.getLessonCardContent(lesson);
    assert.equal(card.previewItems.length, 3, `Sai số dòng mô tả: ${lesson.id}`);
    assert.deepEqual(card.previewItems.map((item) => item.label), ['Nội dung', 'Mục tiêu', 'Rèn luyện']);
    assert.ok(card.previewItems.every((item) => item.text.length <= 88), `Mô tả quá dài: ${lesson.id}`);
  }
});

test('popup giữ đủ ba mục không cắt dấu ba chấm như thẻ', () => {
  const lesson = curriculum.getLessonsForGradeAndSubject(2, 'vietnamese')[0];
  assert.ok(lesson.lessonOverview);
  assert.ok(cards.getLessonCardContent(lesson).previewItems[0].text.length > 0);
  assert.doesNotMatch(lesson.lessonOverview.content, /…$/);
  assert.doesNotMatch(lesson.lessonOverview.objective, /…$/);
  assert.doesNotMatch(lesson.lessonOverview.practice, /…$/);
});

test('bộ lọc học kỳ dùng trường tập sách thay vì dò chuỗi tên chương', () => {
  const lessons = curriculum.getLessonsForGradeAndSubject(1, 'vietnamese');
  assert.equal(lessons.filter((lesson) => cards.isLessonInSemester(lesson, 1)).length, 20);
  assert.equal(lessons.filter((lesson) => cards.isLessonInSemester(lesson, 2)).length, 10);
});

test('bài học nối tới đúng ảnh trang sách chính thức để hiển thị khi vào học', () => {
  const lesson = curriculum.getLessonsForGradeAndSubject(2, 'vietnamese')[0];
  assert.ok(lesson.sourceCitation);
  assert.equal(lesson.sourceCitation.bookId, 'tv-g2-t1');
  assert.deepEqual(lesson.sourceCitation.sourcePages, [10, 11, 12]);
  assert.equal(lesson.sourcePageImageUrls.length, 3);
  assert.match(lesson.sourcePageImageUrls[0], /4698590737-page-11-/);
});

test('trình xem SGK chỉ chọn một trang và chặn lật quá đầu hoặc cuối sách', () => {
  const urls = ['page-14.png', 'page-15.png'];
  const pages = [14, 15];
  assert.deepEqual(sourcePageViewer.getSourcePageView(urls, pages, -1), {
    index: 0,
    imageUrl: 'page-14.png',
    pageNumber: 14,
    total: 2,
    hasPrevious: false,
    hasNext: true,
  });
  assert.deepEqual(sourcePageViewer.getSourcePageView(urls, pages, 99), {
    index: 1,
    imageUrl: 'page-15.png',
    pageNumber: 15,
    total: 2,
    hasPrevious: true,
    hasNext: false,
  });
});

test('chỉ mở đọc mẫu khi transcript đã đối chiếu đúng trang SGK', () => {
  const verifiedTranscript = curriculum.getLessonsForGradeAndSubject(2, 'vietnamese')[0];
  assert.equal(readingPolicy.getVietnameseReadingPolicy(verifiedTranscript), 'verified_sgk');
  assert.equal(readingPolicy.canPlayVietnameseReadingAudio(verifiedTranscript), false);
  assert.deepEqual(verifiedTranscript.readingPassage.sourcePages, [10, 11]);
  assert.equal(verifiedTranscript.readingPassage.verificationStatus, 'verified');
  assert.match(verifiedTranscript.readingPassage.content.join(' '), /Chúng tôi tranh nhau kể về chuyện ngày hè/);

  const ngayHomQua = curriculum.getLessonsForGradeAndSubject(2, 'vietnamese')[1];
  assert.equal(readingPolicy.getVietnameseReadingPolicy(ngayHomQua), 'verified_sgk');
  assert.equal(readingPolicy.canPlayVietnameseReadingAudio(ngayHomQua), false);
  assert.equal(ngayHomQua.readingPassage.author, 'Bế Kiến Quốc');
  assert.deepEqual(ngayHomQua.readingPassage.sourcePages, [13]);
  assert.deepEqual(ngayHomQua.readingPassage.content, [
    'Em cầm tờ lịch cũ:\n– Ngày hôm qua đâu rồi?\nRa ngoài sân hỏi bố\nXoa đầu em, bố cười.',
    '– Ngày hôm qua ở lại\nTrên cành hoa trong vườn\nNụ hồng lớn lên mãi\nĐợi đến ngày toả hương.',
    '– Ngày hôm qua ở lại\nTrong hạt lúa mẹ trồng\nCánh đồng chờ gặt hái\nChín vàng màu ước mong.',
    '– Ngày hôm qua ở lại\nTrong vở hồng của con\nCon học hành chăm chỉ\nLà ngày qua vẫn còn.',
  ]);

  const niemVuiCuaBiVaBong = curriculum.getLessonsForGradeAndSubject(2, 'vietnamese')[2];
  assert.equal(readingPolicy.getVietnameseReadingPolicy(niemVuiCuaBiVaBong), 'verified_sgk');
  assert.equal(readingPolicy.canPlayVietnameseReadingAudio(niemVuiCuaBiVaBong), false);
  assert.equal(niemVuiCuaBiVaBong.readingPassage.author, 'Theo 108 truyện mẹ kể con nghe');
  assert.deepEqual(niemVuiCuaBiVaBong.readingPassage.sourcePages, [17, 18]);
  assert.deepEqual(niemVuiCuaBiVaBong.readingPassage.content, [
    'Khi cơn mưa vừa dứt, hai anh em Bi và Bống chợt thấy cầu vồng.\n– Cầu vồng kìa! Em nhìn xem! Đẹp quá!\nBi chỉ lên bầu trời và nói tiếp:\n– Anh nghe nói dưới chân cầu vồng có bảy hũ vàng đấy.\nBống hưởng ứng:\n– Lát nữa, mình sẽ đi lấy về nhé! Có vàng rồi, em sẽ mua nhiều búp bê và quần áo đẹp.\n– Còn anh sẽ mua một con ngựa hồng và một cái ô tô.\nBỗng nhiên, cầu vồng biến mất. Bi cười:\n– Em ơi! Anh đùa đấy! Ở đó không có vàng đâu.',
    'Bống vui vẻ:\n– Thế ạ? Nếu vậy, em sẽ lấy bút màu để vẽ tặng anh ngựa hồng và ô tô.\n– Còn anh sẽ vẽ tặng em nhiều búp bê và quần áo đủ các màu sắc.\nKhông có bảy hũ vàng dưới chân cầu vồng, hai anh em vẫn cười vui vẻ.',
  ]);

  const lamViecThatLaVui = curriculum.getLessonsForGradeAndSubject(2, 'vietnamese')[3];
  assert.equal(readingPolicy.getVietnameseReadingPolicy(lamViecThatLaVui), 'verified_sgk');
  assert.equal(readingPolicy.canPlayVietnameseReadingAudio(lamViecThatLaVui), false);
  assert.equal(lamViecThatLaVui.readingPassage.author, 'Theo Tô Hoài');
  assert.deepEqual(lamViecThatLaVui.readingPassage.sourcePages, [20]);
  assert.deepEqual(lamViecThatLaVui.readingPassage.content, [
    'Quanh ta, mọi vật, mọi người đều làm việc.',
    'Cái đồng hồ tích tắc, tích tắc, báo phút, báo giờ. Con gà trống gáy vang ò ó o, báo cho mọi người biết trời sắp sáng, mau mau thức dậy. Con tu hú kêu tu hú, tu hú. Thế là sắp đến mùa vải chín. Chim bắt sâu, bảo vệ mùa màng. Cành đào nở hoa cho sắc xuân thêm rực rỡ, ngày xuân thêm tưng bừng. Chim cú mèo chập tối đứng trong hốc cây rúc cú cu cũng làm việc có ích cho đồng ruộng.',
    'Như mọi vật, mọi người, bé cũng làm việc. Bé làm bài. Bé đi học. Học xong, bé quét nhà, nhặt rau, chơi với em đỡ mẹ. Bé luôn luôn bận rộn, mà lúc nào cũng vui.',
  ]);

  const emCoXinhKhong = curriculum.getLessonsForGradeAndSubject(2, 'vietnamese')[4];
  assert.equal(readingPolicy.getVietnameseReadingPolicy(emCoXinhKhong), 'verified_sgk');
  assert.equal(readingPolicy.canPlayVietnameseReadingAudio(emCoXinhKhong), false);
  assert.equal(emCoXinhKhong.readingPassage.author, 'Theo Âu Phúc, Voi em đi tìm tự tin');
  assert.deepEqual(emCoXinhKhong.readingPassage.sourcePages, [24, 25]);
  assert.deepEqual(emCoXinhKhong.readingPassage.content, [
    'Voi em thích mặc đẹp và thích được khen xinh. Ở nhà, voi em luôn hỏi anh: “Em có xinh không?”. Voi anh bao giờ cũng khen: “Em xinh lắm!”.\n\nMột hôm, gặp hươu, voi em hỏi:\n– Em có xinh không?\nHươu ngắm voi rồi lắc đầu:\n– Chưa xinh lắm vì em không có đôi sừng giống anh.\nNghe vậy, voi nhặt vài cành cây khô, gài lên đầu rồi đi tiếp.\nGặp dê, voi hỏi:\n– Em có xinh không?',
    '– Không, vì cậu không có bộ râu giống tôi.\nVoi liền nhổ một khóm cỏ dại bên đường, gắn vào cằm rồi về nhà.\nVề nhà với đôi sừng và bộ râu giả, voi em hớn hở hỏi anh:\n– Em có xinh hơn không?\nVoi anh nói:\n– Trời ơi, sao em lại thêm sừng và râu thế này? Xấu lắm!\nVoi em ngắm mình trong gương và thấy xấu thật. Sau khi bỏ sừng và râu đi, voi em thấy mình xinh đẹp hẳn lên. Giờ đây, voi em hiểu rằng mình chỉ xinh đẹp khi đúng là voi.',
  ]);

  const motGioHoc = curriculum.getLessonsForGradeAndSubject(2, 'vietnamese')[5];
  assert.equal(readingPolicy.getVietnameseReadingPolicy(motGioHoc), 'verified_sgk');
  assert.equal(readingPolicy.canPlayVietnameseReadingAudio(motGioHoc), false);
  assert.equal(motGioHoc.readingPassage.author, 'Phỏng theo Tốt-tô-chan, cô bé bên cửa sổ');
  assert.deepEqual(motGioHoc.readingPassage.sourcePages, [27, 28]);
  assert.equal(motGioHoc.readingPassage.sourceHash, '830203c5f01dfa17fdf379d1f66d7f8f0177028ddf85396f1b9631da424f4bfc');
  assert.deepEqual(motGioHoc.readingPassage.content, [
    'Thầy giáo nói: “Chúng ta cần học cách giao tiếp tự tin. Vì thế hôm nay chúng ta sẽ tập nói trước lớp về bất cứ điều gì mình thích.”\n\nQuang được mời lên nói đầu tiên. Cậu lúng túng, đỏ mặt. Quang cảm thấy nói với bạn bên cạnh thì dễ, nhưng nói trước cả lớp thì sao mà khó thế. Thầy bảo: “Sáng nay ngủ dậy, em đã làm gì? Em có nhớ xem.”\n\nQuang ngập ngừng, vừa nói vừa gãi đầu: “Em...”\n\nThầy giáo nhắc: “Rồi gì nữa?”\n\nQuang lại gãi đầu: “À... ờ... Em ngủ dậy.” Và cậu nói tiếp: “Rồi... ờ...”\n\nThầy giáo mỉm cười, kiên nhẫn nghe Quang nói. Thầy bảo: “Thế là được rồi đấy!”',
    'Nhưng Quang chưa chịu về chỗ. Bỗng cậu nói to: “Rồi sau đó... ờ... à...”\nQuang thở mạnh một hơi rồi nói tiếp: “Mẹ... ờ... bảo: Con đánh răng đi. Thế là em đánh răng.” Thầy giáo vỗ tay. Cả lớp vỗ tay theo. Cuối cùng, Quang nói với giọng rất tự tin: “Sau đó bố đưa em đi học.”\n\nThầy giáo vỗ tay. Các bạn vỗ tay theo. Quang cũng vỗ tay. Cả lớp tràn ngập tiếng vỗ tay.',
  ]);

  const unverifiedTranscript = curriculum.getLessonsForGradeAndSubject(2, 'vietnamese')[6];
  assert.equal(readingPolicy.getVietnameseReadingPolicy(unverifiedTranscript), 'source_only');
  assert.equal(readingPolicy.canPlayVietnameseReadingAudio(unverifiedTranscript), false);

  const gradeOneSemesterOne = curriculum.getLessonsForGradeAndSubject(1, 'vietnamese')[0];
  assert.equal(readingPolicy.getVietnameseReadingPolicy(gradeOneSemesterOne), 'supplement');
  assert.equal(readingPolicy.canPlayVietnameseReadingAudio(gradeOneSemesterOne), true);

  const verified = {
    ...unverifiedTranscript,
    catalogSection: 'sgk',
    provenance: { contentOrigin: 'sgk_reference', verificationStatus: 'verified' },
    sourceCitation: { ...unverifiedTranscript.sourceCitation, verificationStatus: 'verified' },
  };
  assert.equal(readingPolicy.getVietnameseReadingPolicy(verified), 'verified_sgk');
  assert.equal(readingPolicy.canPlayVietnameseReadingAudio(verified), false);
});

test('ranh giới Em có xinh không và Một giờ học không chồng trang', () => {
  const emCoXinhKhong = curriculum.getLessonsForGradeAndSubject(2, 'vietnamese')[4];
  const motGioHoc = curriculum.getLessonsForGradeAndSubject(2, 'vietnamese')[5];
  assert.deepEqual(emCoXinhKhong.sourceCitation?.sourcePages, [24, 25, 26]);
  assert.equal(motGioHoc.sourceCitation?.sourcePages[0], 27);
});

test('khu Theo SGK chỉ nhận bài verified và có ánh xạ hoạt động duy nhất', () => {
  const sample = {
    ...curriculum.getLessonsForGradeAndSubject(1, 'vietnamese')[0],
    id: 'verified-sample',
    catalogSection: 'sgk',
    textbookPageRef: 'Tập 1 • Trang 18–19',
    sourceCitation: {
      bookId: 'tv-g1-t1',
      sourcePages: [18, 19],
      sourceLabel: 'Tiếng Việt 1, tập một — Bài 3',
      sourceHash: 'a'.repeat(64),
      verificationStatus: 'verified',
    },
    provenance: { contentOrigin: 'sgk_reference', verificationStatus: 'verified' },
    questions: [
      { id: 'q-a', type: 'bubble_choice', questionText: 'a', points: 1, sourceActivityId: 'act-1', sourcePage: 18, sourceSubpart: 'a', gradingMode: 'auto' },
      { id: 'q-b', type: 'bubble_choice', questionText: 'b', points: 1, sourceActivityId: 'act-2', sourcePage: 18, sourceSubpart: 'b', gradingMode: 'self_confirm' },
    ],
  };
  assert.equal(curriculum.isPublishableVietnameseSgkLesson(sample), true);

  const duplicate = {
    ...sample,
    questions: sample.questions.map((question) => ({ ...question, sourceActivityId: 'act-1' })),
  };
  assert.equal(curriculum.isPublishableVietnameseSgkLesson(duplicate), false);
  assert.equal(curriculum.isPublishableVietnameseSgkLesson({ ...sample, sourceCitation: { ...sample.sourceCitation, verificationStatus: 'ocr_reviewed' } }), false);
});

test('lời đọc bắt đầu bằng tên bài và không đọc nhãn tác giả hay công bố nguồn', () => {
  const text = narration.buildLessonNarration({
    title: 'Luyện âm và chữ: C c - D d - Đ đ',
    author: 'WonderKids — nội dung tự sinh',
    content: ['Nhận biết c, d, đ.', 'Luyện ghép tiếng.'],
  });
  assert.equal(text, 'Luyện âm và chữ: C c - D d - Đ đ\nNhận biết c, d, đ.\nLuyện ghép tiếng.');
  assert.doesNotMatch(text, /tác giả|không phải nguyên văn|nội dung tự sinh/i);
});

test('hủy sạch file audio lỗi trước khi chuyển sang fallback duy nhất', () => {
  let pauseCalls = 0;
  const audio = {
    currentTime: 12,
    onended: () => {},
    onerror: () => {},
    pause: () => { pauseCalls += 1; },
  };
  audioFallback.retireAudioForFallback(audio);
  assert.equal(pauseCalls, 1);
  assert.equal(audio.currentTime, 0);
  assert.equal(audio.onended, null);
  assert.equal(audio.onerror, null);
});

test.after(async () => {
  await rm(outputDir, { recursive: true, force: true });
});
