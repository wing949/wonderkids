import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { randomBytes } from 'node:crypto';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';

const auditOutputDir = join(tmpdir(), `wonderkids-math-audit-${randomBytes(6).toString('hex')}`);
await build({
  entryPoints: [
    'src/data/curriculum/math/index.ts',
    'src/data/curriculum/math/mathQuestionEngine.ts',
  ],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outdir: auditOutputDir,
  write: true,
  logLevel: 'silent',
});

const curriculum = await import(pathToFileURL(join(auditOutputDir, 'index.js')).href);
const questionEngine = await import(pathToFileURL(join(auditOutputDir, 'mathQuestionEngine.js')).href);

after(async () => {
  await rm(auditOutputDir, { recursive: true, force: true });
});

const allTopics = Object.values(curriculum.MATH_CURRICULUM_BY_GRADE).flat();

function topicById(id) {
  const topic = allTopics.find((item) => item.id === id);
  assert.ok(topic, `Không tìm thấy bài ${id}`);
  return topic;
}

function questionsFor(topic) {
  const grade = Number(topic.id.match(/g(\d)/)?.[1]);
  return topic.defaultQuestions?.length
    ? topic.defaultQuestions
    : questionEngine.generateMathQuestions(topic, grade);
}

test('bài so sánh lớp 1 giữ đúng tên và trang mở đầu theo mục lục', () => {
  const topic = curriculum.MATH_GRADE_1_TOPICS.find((item) => item.id === 'math-g1-b3');
  assert.equal(topic.title, 'Bài 3: Nhiều hơn, ít hơn, bằng nhau');
  assert.deepEqual(topic.sourcePages, [20]);
});

test('không có đáp án bị đánh dấu ngay trong lựa chọn', () => {
  const markedOptions = allTopics.flatMap((topic) => questionsFor(topic).flatMap((question) => (
    question.options ?? []
  )).filter((option) => String(option.label).includes('✨')));

  assert.deepEqual(markedOptions, []);
});

test('câu hỏi sinh tự động bám đúng các mạch kiến thức có nguy cơ bị trộn', () => {
  const expectations = [
    ['math-g1-b8', ['ghép', 'xếp', 'hình']],
    ['math-g1-b15', ['trái', 'phải', 'trên', 'dưới', 'trước', 'sau']],
    ['math-g1-b29', ['hai chữ số', '+']],
    ['math-g1-b31', ['hai chữ số', '-']],
    ['math-g1-b23', ['100', 'bảng số']],
    ['math-g1-b35', ['thứ', 'tuần', 'ngày']],
    ['math-g2-b7', ['cộng', 'qua 10']],
    ['math-g2-b15', ['ki-lô-gam', 'kg']],
    ['math-g2-b25', ['đường gấp khúc', 'cm']],
    ['math-g2-b37', ['nhân', '×']],
    ['math-g2-b52', ['tổng', 'trăm', 'chục', 'đơn vị']],
    ['math-g2-b55', ['mét', 'độ dài']],
    ['math-g2-b64', ['thống kê', 'số liệu', 'kiểm đếm']],
    ['math-g2-b66', ['chắc chắn', 'có thể', 'không thể']],
    ['math-g4-b4', ['chẵn', 'lẻ']],
    ['math-g4-b24', ['giao hoán', 'kết hợp']],
    ['math-g5-b7', ['hỗn số', 'phân số']],
  ];

  for (const [id, cues] of expectations) {
    const topic = topicById(id);
    const text = questionsFor(topic).map((question) => question.questionText).join(' ').toLowerCase();
    assert.ok(
      cues.some((cue) => text.includes(cue)),
      `${id} không có dấu hiệu nội dung phù hợp: ${text}`,
    );
  }
});

test('câu hỏi không chèn tên bài để che việc dùng chung mẫu', () => {
  for (const topic of allTopics) {
    for (const question of questionsFor(topic)) {
      assert.ok(!question.questionText.startsWith(`${topic.title} —`), question.id);
    }
  }
});

test('câu hỏi bổ trợ không có phương án rác và bài ôn số tự nhiên không bị trộn chủ đề', () => {
  const optionText = allTopics.flatMap((topic) => questionsFor(topic))
    .flatMap((question) => question.options ?? [])
    .map((option) => option.label)
    .join('\n');
  assert.doesNotMatch(optionText, /Kết quả khác/i);

  const grade5Lesson1 = questionsFor(topicById('math-g5-b1'))
    .map((question) => question.questionText)
    .join(' ');
  assert.doesNotMatch(grade5Lesson1, /phân số|số thập phân|tam giác|vận tốc|phần trăm/i);
});

test('bài học mới không bị rơi về câu ôn tập chung ngoài các bài luyện tập', () => {
  const accidentalFallbacks = allTopics.filter((topic) => {
    if (topic.defaultQuestions?.length) return false;
    const grade = Number(topic.id.match(/g([1-5])/)[1]);
    const questions = questionEngine.generateMathQuestions(topic, grade);
    const isReviewLesson = /ôn tập|luyện tập|đấu trường|đánh giá cuối/i.test(topic.title);
    return !isReviewLesson && questions.every((question) => question.questionText.startsWith('Ôn tập:'));
  }).map((topic) => topic.id);

  assert.deepEqual(accidentalFallbacks, []);
});

test('đủ 345 bài, mã bài và số bài liên tục theo từng khối', () => {
  const expectedCounts = { 1: 41, 2: 75, 3: 81, 4: 73, 5: 75 };

  for (const [grade, topics] of Object.entries(curriculum.MATH_CURRICULUM_BY_GRADE)) {
    assert.equal(topics.length, expectedCounts[grade], `Sai số lượng bài Toán lớp ${grade}`);
    assert.deepEqual(
      topics.map((topic) => topic.lessonNumber),
      Array.from({ length: topics.length }, (_, index) => index + 1),
      `Số bài lớp ${grade} bị thiếu hoặc trùng`,
    );
    assert.equal(new Set(topics.map((topic) => topic.id)).size, topics.length, `Mã bài lớp ${grade} bị trùng`);
  }

  assert.equal(allTopics.length, 345);
});

test('mọi bài Toán có metadata và câu hỏi hợp lệ để học sinh làm được', () => {
  for (const topic of allTopics) {
    assert.ok(topic.title.trim(), `${topic.id} thiếu tên bài`);
    assert.ok(topic.description.trim(), `${topic.id} thiếu mô tả`);
    assert.ok(topic.summary.trim(), `${topic.id} thiếu tóm tắt`);
    assert.ok(topic.keyPoints.length > 0, `${topic.id} thiếu điểm kiến thức`);

    const questions = questionsFor(topic);
    assert.ok(questions.length > 0, `${topic.id} không có câu hỏi`);
    assert.equal(new Set(questions.map((question) => question.id)).size, questions.length, `${topic.id} trùng mã câu hỏi`);

    for (const question of questions) {
      assert.ok(question.questionText.trim(), `${question.id} thiếu nội dung câu hỏi`);
      assert.ok(question.points > 0, `${question.id} thiếu điểm`);

      if (question.type === 'bubble_choice') {
        assert.ok((question.options?.length ?? 0) >= 3, `${question.id} chưa đủ lựa chọn`);
        assert.equal(
          question.options.filter((option) => option.isCorrect).length,
          1,
          `${question.id} phải có đúng một đáp án đúng`,
        );
        assert.equal(
          new Set(question.options.map((option) => option.label)).size,
          question.options.length,
          `${question.id} có lựa chọn trùng nhau`,
        );
      }

      if (question.type === 'keypad') {
        assert.notEqual(question.correctAnswer, undefined, `${question.id} thiếu đáp án nhập số`);
        assert.notEqual(String(question.correctAnswer).trim(), '', `${question.id} có đáp án nhập số rỗng`);
      }
    }
  }
});

test('nội dung Toán không còn ký hiệu LaTeX thô gây lỗi hiển thị', () => {
  const text = allTopics.map((topic) => JSON.stringify(topic)).join('\n');
  assert.doesNotMatch(text, /\$\\(?:rightarrow|leftrightarrow)\$/);
});
