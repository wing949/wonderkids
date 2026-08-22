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

test('bài so sánh hai nhóm dùng đúng vật thể cho từng nhóm', () => {
  const topic = curriculum.MATH_GRADE_1_TOPICS.find((item) => item.id === 'math-g1-b3');
  const question = topic.defaultQuestions.find((item) => item.id === 'math-g1-b3-q1');

  assert.equal(question.visualData.leftItemEmoji, '🍓');
  assert.equal(question.visualData.rightItemEmoji, '🍌');
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
    ['math-g1-b9', ['khối lập phương', 'khối hộp', 'hình khối']],
    ['math-g1-b10', ['trái', 'phải', 'trên', 'dưới', 'trước', 'sau']],
    ['math-g1-b16', ['cộng', 'trừ']],
    ['math-g1-b22', ['cộng', 'trừ']],
    ['math-g1-b29', ['hai chữ số', '+']],
    ['math-g1-b31', ['hai chữ số', '-']],
    ['math-g1-b23', ['100', 'bảng số']],
    ['math-g1-b35', ['thứ', 'tuần', 'ngày']],
    ['math-g2-b7', ['cộng', 'qua 10']],
    ['math-g2-b1', ['hai chữ số', 'phạm vi 100']],
    ['math-g2-b9', ['thêm', 'bớt']],
    ['math-g2-b13', ['nhiều hơn', 'ít hơn']],
    ['math-g2-b21', ['đường gấp khúc', 'cm']],
    ['math-g2-b34', ['ngày', 'tháng']],
    ['math-g2-b47', ['chia', ':']],
    ['math-g2-b52', ['tổng', 'trăm', 'chục', 'đơn vị']],
    ['math-g2-b55', ['mét', 'độ dài']],
    ['math-g2-b58', ['cộng']],
    ['math-g2-b59', ['trừ']],
    ['math-g2-b64', ['biểu đồ tranh']],
    ['math-g2-b67', ['cộng', 'trừ']],
    ['math-g2-b53', ['so sánh', 'lớn hơn']],
    ['math-g2-b31', ['khối trụ', 'khối cầu']],
    ['math-g2-b63', ['số liệu', 'phân loại', 'kiểm đếm']],
    ['math-g2-b65', ['chắc chắn', 'có thể', 'không thể']],
    ['math-g3-b10', ['gấp', 'giảm']],
    ['math-g3-b3', ['tìm x', 'chưa biết']],
    ['math-g3-b1', ['ba chữ số', '358']],
    ['math-g3-b21', ['bốn chữ số', '10.000']],
    ['math-g3-b12', ['trung điểm', 'đoạn thẳng']],
    ['math-g3-b13', ['hình tròn', 'bán kính', 'đường kính']],
    ['math-g3-b23', ['la mã', 'i', 'v', 'x']],
    ['math-g3-b30', ['thống kê', 'số liệu']],
    ['math-g3-b31', ['hai bước', 'bước']],
    ['math-g3-b32', ['nhân', 'chia']],
    ['math-g3-b29', ['năm chữ số', 'chia']],
    ['math-g4-b8', ['vuông góc', 'song song', 'đường thẳng']],
    ['math-g4-b1', ['năm chữ số', '100.000']],
    ['math-g4-b4', ['chẵn', 'lẻ']],
    ['math-g4-b17', ['phân số', 'so sánh']],
    ['math-g4-b19', ['nhân', 'chia', 'phân số']],
    ['math-g4-b20', ['phân số', 'số']],
    ['math-g4-b27', ['phân số']],
    ['math-g4-b12', ['nhân', '10']],
    ['math-g4-b24', ['tỉ số', 'tổng']],
    ['math-g4-b25', ['tỉ số', 'hiệu']],
    ['math-g4-b26', ['bản đồ']],
    ['math-g5-b2', ['hỗn số', 'phân số']],
    ['math-g5-b4', ['ha', 'km²', 'diện tích']],
    ['math-g5-b7', ['số đo', 'thập phân']],
    ['math-g5-b6', ['số thập phân', 'so sánh']],
    ['math-g5-b10', ['chia', 'số thập phân']],
    ['math-g5-b17', ['thời gian', 'giờ', 'phút']],
    ['math-g5-b21', ['biểu đồ', 'số liệu', 'quạt']],
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

test('không dùng cùng một câu hỏi mặc định cho quá nhiều bài khác nhau', () => {
  const questionOwners = new Map();
  for (const topic of allTopics) {
    for (const question of questionsFor(topic)) {
      const owners = questionOwners.get(question.questionText) ?? [];
      owners.push(topic.id);
      questionOwners.set(question.questionText, owners);
    }
  }

  const repeatedQuestions = [...questionOwners.entries()]
    .filter(([, owners]) => owners.length > 3);

  assert.deepEqual(repeatedQuestions, []);
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

test('đủ 342 bài, mã bài và số bài liên tục theo từng khối', () => {
  const expectedCounts = { 1: 40, 2: 73, 3: 81, 4: 73, 5: 75 };

  for (const [grade, topics] of Object.entries(curriculum.MATH_CURRICULUM_BY_GRADE)) {
    assert.equal(topics.length, expectedCounts[grade], `Sai số lượng bài Toán lớp ${grade}`);
    assert.deepEqual(
      topics.map((topic) => topic.lessonNumber),
      Array.from({ length: topics.length }, (_, index) => index + 1),
      `Số bài lớp ${grade} bị thiếu hoặc trùng`,
    );
    assert.equal(new Set(topics.map((topic) => topic.id)).size, topics.length, `Mã bài lớp ${grade} bị trùng`);
  }

  assert.equal(allTopics.length, 342);
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
