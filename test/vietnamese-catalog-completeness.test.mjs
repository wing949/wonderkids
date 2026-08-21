import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const outputDir = await mkdtemp(join(tmpdir(), 'wonderkids-vietnamese-catalog-'));
await build({
  entryPoints: ['src/data/curriculum/index.ts'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outdir: outputDir,
  write: true,
  logLevel: 'silent',
});

const curriculum = await import(pathToFileURL(join(outputDir, 'index.js')).href);

test('danh mục Tiếng Việt có đủ số bài của từng tập SGK đã đối chiếu mục lục', () => {
  // Đếm trực tiếp từ mục lục 10 sách NXB Giáo dục Việt Nam đã lưu trong manifest nguồn.
  const expected = {
    1: { 1: 83, 2: 45 },
    2: { 1: 32, 2: 30 },
    3: { 1: 32, 2: 30 },
    4: { 1: 32, 2: 30 },
    5: { 1: 32, 2: 30 },
  };

  let total = 0;
  for (const [grade, volumes] of Object.entries(expected)) {
    const lessons = curriculum.getLessonsForGradeAndSubject(Number(grade), 'vietnamese');
    for (const [semester, count] of Object.entries(volumes)) {
      const inBook = lessons.filter((lesson) => lesson.semester === Number(semester));
      assert.equal(inBook.length, count, `Lớp ${grade}, tập ${semester} thiếu hoặc thừa bài`);
      assert.equal(new Set(inBook.map((lesson) => lesson.id)).size, count, `Lớp ${grade}, tập ${semester} có mã bài trùng`);
      total += count;
    }
  }
  assert.equal(total, 376);
});

test('bài có trong mục lục nhưng chưa đối chiếu nguyên văn vẫn giữ đúng nguồn SGK và không bị gọi là Luyện thêm', () => {
  const samples = [
    { grade: 1, semester: 1, title: 'Bài 83: Voi, hổ và khỉ', page: 178, bookId: 'tv-g1-t1' },
    { grade: 1, semester: 2, title: 'Bài 45: Du lịch biển Việt Nam', page: 158, bookId: 'tv-g1-t2' },
    { grade: 3, semester: 1, title: 'Bài 32: Cây bút thần', page: 140, bookId: 'tv-g3-t1' },
    { grade: 5, semester: 2, title: 'Bài 30: Thành phố thông minh Mát-xđa', page: 144, bookId: 'tv-g5-t2' },
  ];

  for (const sample of samples) {
    const lesson = curriculum
      .getLessonsForGradeAndSubject(sample.grade, 'vietnamese')
      .find((item) => item.semester === sample.semester && item.title === sample.title);

    assert.ok(lesson, `Thiếu ${sample.title}`);
    assert.equal(lesson.catalogSection, 'sgk_pending');
    assert.equal(lesson.sourceCitation?.bookId, sample.bookId);
    assert.deepEqual(lesson.sourceCitation?.sourcePages, [sample.page]);
    assert.equal(lesson.sourceCitation?.verificationStatus, 'draft');
  }
});

test('mã bài cũ vẫn trỏ đến bài cùng tập để đường dẫn chia sẻ và F5 không gãy', () => {
  const samples = [
    { grade: 1, id: 'tv-g1-b1', semester: 1, title: 'Bài 1: A a' },
    { grade: 1, id: 'tv-g1-b21', semester: 2, title: 'Bài 1: Tôi là học sinh lớp 1' },
    { grade: 2, id: 'tv-g2-b18', semester: 1, title: 'Bài 18: Tớ nhớ cậu' },
    { grade: 2, id: 'tv-g2-b19', semester: 2, title: 'Bài 1: Chuyện bốn mùa' },
    { grade: 5, id: 'tv-g5-b25', semester: 2, title: 'Bài 9: Hội thổi cơm thi ở Đồng Vân' },
  ];

  for (const sample of samples) {
    const lesson = curriculum
      .getLessonsForGradeAndSubject(sample.grade, 'vietnamese')
      .find((item) => item.id === sample.id);
    assert.ok(lesson, `Đường dẫn cũ bị mất: ${sample.id}`);
    assert.equal(lesson.semester, sample.semester);
    assert.equal(lesson.title, sample.title);
  }
});

test.after(async () => {
  await rm(outputDir, { recursive: true, force: true });
});
