import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { randomBytes } from 'node:crypto';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import { getAppPath, parseAppRoute } from '../src/utils/appRoute.ts';

const outdir = join(tmpdir(), `wonderkids-source-audit-${randomBytes(6).toString('hex')}`);
await build({
  entryPoints: ['src/data/curriculum/index.ts'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outdir,
  write: true,
  logLevel: 'silent',
});

const curriculum = await import(pathToFileURL(join(outdir, 'index.js')).href);

after(async () => {
  await rm(outdir, { recursive: true, force: true });
});

test('mục lục Toán khớp số bài chính thức và các mốc đã kiểm tra trực quan', () => {
  const expectedCounts = { 1: 41, 2: 75, 3: 81, 4: 73, 5: 75 };
  for (const [grade, expected] of Object.entries(expectedCounts)) {
    const topics = curriculum.MATH_CURRICULUM_BY_GRADE[grade];
    assert.equal(topics.length, expected, `Toán ${grade} phải có ${expected} bài`);
    assert.deepEqual(topics.map((topic) => topic.lessonNumber), Array.from({ length: expected }, (_, i) => i + 1));
  }

  const checks = [
    [1, 1, 'Bài 1: Các số 0, 1, 2, 3, 4, 5', 8],
    [1, 20, 'Bài 20: Ôn tập chung', 112],
    [1, 21, 'Bài 21: Số có hai chữ số', 4],
    [1, 41, 'Bài 41: Ôn tập chung', 104],
    [2, 1, 'Bài 1: Ôn tập các số đến 100', 6],
    [2, 37, 'Bài 37: Phép nhân', 4],
    [2, 74, 'Bài 74: Ôn tập kiểm đếm số liệu và lựa chọn khả năng', 134],
    [2, 75, 'Bài 75: Ôn tập chung', 136],
    [3, 13, 'Bài 13: Tìm thành phần trong phép nhân, phép chia', 39],
    [3, 45, 'Bài 45: Các số có bốn chữ số. Số 10 000', 4],
    [3, 81, 'Bài 81: Ôn tập chung', 125],
    [4, 10, 'Bài 10: Số có sáu chữ số. Số 1 000 000', 33],
    [4, 38, 'Bài 38: Nhân với số có một chữ số', 4],
    [4, 73, 'Bài 73: Ôn tập chung', 116],
    [5, 23, 'Bài 23: Nhân, chia số thập phân với 10; 100; 1 000;... hoặc với 0,1; 0,01; 0,001;...', 83],
    [5, 36, 'Bài 36: Tỉ số. Tỉ số phần trăm', 4],
    [5, 75, 'Bài 75: Ôn tập chung', 128],
  ];
  for (const [grade, lessonNumber, title, page] of checks) {
    const topic = curriculum.MATH_CURRICULUM_BY_GRADE[grade].find((item) => item.lessonNumber === lessonNumber);
    assert.equal(topic?.title, title);
    assert.deepEqual(topic?.sourcePages, [page]);
  }

  assert.equal(curriculum.MATH_CURRICULUM_BY_GRADE[2][0].provenance.referenceUrl,
    'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-2-tap-mot.4698648594');
  assert.equal(curriculum.MATH_CURRICULUM_BY_GRADE[2][74].provenance.referenceUrl,
    'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-2-tap-hai.4713893812');
});

test('mục lục Tiếng Anh có đủ 92 Unit, đúng tên và trang theo book map chính thức', () => {
  const expectedCounts = { 1: 16, 2: 16, 3: 20, 4: 20, 5: 20 };
  for (const [grade, expected] of Object.entries(expectedCounts)) {
    const topics = curriculum.ENGLISH_CURRICULUM_BY_GRADE[grade];
    assert.equal(topics.length, expected, `Tiếng Anh ${grade} phải có ${expected} Unit`);
    assert.deepEqual(topics.map((topic) => topic.lessonNumber), Array.from({ length: expected }, (_, i) => i + 1));
    assert.ok(topics.every((topic) => /^Unit \d+: [^()]+$/.test(topic.title)), `Tên Unit lớp ${grade} không được tự nối nội dung trong ngoặc`);
    assert.ok(topics.every((topic) => topic.sourcePages?.length === 1));
    assert.ok(topics.every((topic) => topic.provenance?.verificationStatus === 'reference_only'));
  }

  const checks = [
    [1, 9, 'Unit 9: In the shop', 40],
    [1, 12, 'Unit 12: At the lake', 51],
    [2, 14, 'Unit 14: At home', 60],
    [3, 12, 'Unit 12: Jobs', 12],
    [4, 10, 'Unit 10: Our summer holidays', 68],
    [5, 7, 'Unit 7: Our favourite school activities', 50],
    [5, 18, 'Unit 18: Means of transport', 52],
  ];
  for (const [grade, lessonNumber, title, page] of checks) {
    const topic = curriculum.ENGLISH_CURRICULUM_BY_GRADE[grade].find((item) => item.lessonNumber === lessonNumber);
    assert.equal(topic?.title, title);
    assert.deepEqual(topic?.sourcePages, [page]);
  }
});

test('nội dung luyện tập không giả là nguyên văn SGK và câu hỏi Tiếng Anh không lẫn đáp án tiếng Việt', () => {
  for (const grade of [1, 2, 3, 4, 5]) {
    const lessons = curriculum.getLessonsForGradeAndSubject(grade, 'english');
    for (const lesson of lessons) {
      assert.notEqual(lesson.readingPassage?.author, 'Global Success English SGK');
      assert.equal(lesson.provenance.contentOrigin, 'system_generated');
      assert.equal(lesson.provenance.verificationStatus, 'reference_only');
      const optionText = lesson.questions.flatMap((question) => question.options ?? []).map((option) => option.label).join(' ');
      assert.doesNotMatch(optionText, /Bài đọc|Chi tiết|chưa chính xác|Ý kiến này/i, lesson.id);
    }
  }
});

test('92 Unit Tiếng Anh có nội dung luyện cụ thể thay vì lặp lại tên chủ đề', () => {
  const lessons = [1, 2, 3, 4, 5]
    .flatMap((grade) => curriculum.getLessonsForGradeAndSubject(grade, 'english'));

  assert.equal(lessons.length, 92);
  for (const lesson of lessons) {
    const content = lesson.readingPassage?.content?.join(' ') ?? '';
    const vocabulary = lesson.readingPassage?.vocabularyNotes ?? [];
    const questionText = lesson.questions.map((question) => question.questionText).join(' ');
    const optionText = lesson.questions
      .flatMap((question) => question.options ?? [])
      .map((option) => option.label)
      .join(' ');

    assert.doesNotMatch(content, /Làm quen chủ đề|Nội dung luyện tập bổ trợ cho Unit/i, lesson.id);
    assert.doesNotMatch(content, /Use words and sentence patterns about/i, lesson.id);
    assert.ok(content.length >= 80, `${lesson.id} chưa có đủ nội dung luyện cụ thể`);
    assert.ok(vocabulary.length > 0, `${lesson.id} thiếu từ hoặc mẫu câu trọng tâm`);
    assert.notEqual(vocabulary[0]?.word, 'Key vocabulary', `${lesson.id} còn chú giải giữ chỗ`);
    assert.equal(lesson.questions.length, 5, `${lesson.id} phải có 5 hoạt động luyện cụ thể`);
    assert.doesNotMatch(questionText, /What is the main topic|Choose the correct statement according to the lesson/i, lesson.id);
    assert.doesNotMatch(optionText, /This detail is not part of the lesson|This statement does not match the lesson/i, lesson.id);
  }

  const fishAndChipShop = lessons.find((lesson) => lesson.id === 'eng-g1-u5');
  const unit5Content = fishAndChipShop.readingPassage.content.join(' ');
  assert.match(unit5Content, /Letter I\/i/i);
  assert.match(unit5Content, /fish/i);
  assert.match(unit5Content, /chips/i);
  assert.match(unit5Content, /I like fish/i);
  assert.match(unit5Content, /\/ɪ\//);

  const unit5Questions = fishAndChipShop.questions.map((question) => question.questionText).join(' ');
  assert.match(unit5Questions, /Letter I\/i/i);
  assert.match(unit5Questions, /fish/i);
  assert.match(unit5Questions, /\/ɪ\//);

  const correctOptionPositions = lessons.flatMap((lesson) => lesson.questions)
    .map((question) => question.options.findIndex((option) => option.isCorrect));
  assert.deepEqual(new Set(correctOptionPositions), new Set([0, 1, 2]), 'Đáp án đúng không được luôn nằm ở cùng một vị trí');
});

test('437 đường dẫn bài Toán và Tiếng Anh giữ đúng mã bài khi chia sẻ hoặc tải lại', () => {
  const lessonIds = [
    ...Object.values(curriculum.MATH_CURRICULUM_BY_GRADE).flat().map((topic) => topic.id),
    ...Object.values(curriculum.ENGLISH_CURRICULUM_BY_GRADE).flat().map((topic) => topic.id),
  ];

  assert.equal(lessonIds.length, 437);
  assert.equal(new Set(lessonIds).size, 437);

  for (const lessonId of lessonIds) {
    const path = getAppPath({ kind: 'exercise', lessonId });
    assert.deepEqual(parseAppRoute(path), { kind: 'exercise', lessonId }, path);
  }
});
