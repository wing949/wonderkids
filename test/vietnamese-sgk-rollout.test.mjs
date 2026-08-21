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
  assert.equal(readingPolicy.canPlayVietnameseReadingAudio(verifiedTranscript), true);
  assert.deepEqual(verifiedTranscript.readingPassage.sourcePages, [10, 11]);
  assert.equal(verifiedTranscript.readingPassage.verificationStatus, 'verified');
  assert.match(verifiedTranscript.readingPassage.content.join(' '), /Chúng tôi tranh nhau kể về chuyện ngày hè/);

  const unverifiedTranscript = curriculum.getLessonsForGradeAndSubject(2, 'vietnamese')[1];
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
  assert.equal(readingPolicy.canPlayVietnameseReadingAudio(verified), true);
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
