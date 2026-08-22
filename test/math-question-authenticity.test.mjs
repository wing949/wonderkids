import assert from 'node:assert/strict';
import { after, describe, it } from 'node:test';
import { randomBytes } from 'node:crypto';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';

const tempDir = join(tmpdir(), `wonderkids-math-auth-${randomBytes(6).toString('hex')}`);
await build({
  entryPoints: [
    'src/data/curriculum/math/index.ts',
    'src/data/curriculum/math/mathQuestionEngine.ts',
  ],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outdir: tempDir,
  write: true,
  logLevel: 'silent',
});

const curriculum = await import(pathToFileURL(join(tempDir, 'index.js')).href);
const questionEngine = await import(pathToFileURL(join(tempDir, 'mathQuestionEngine.js')).href);

after(async () => {
  await rm(tempDir, { recursive: true, force: true });
});

const ALL_TOPICS_BY_GRADE = curriculum.MATH_CURRICULUM_BY_GRADE;
const generateMathQuestions = questionEngine.generateMathQuestions;

describe('Math Question Authenticity & Quality Test (342 Lessons - 5 Questions Each)', () => {
  it('should generate exactly 5 authentic mathematical questions with NO placeholders for each of the 342 topics (total 1,710 questions)', () => {
    let totalQuestions = 0;
    const placeholderBlacklist = [
      'kết quả chuẩn xác',
      'phương án nhiễu',
      'đáp án chính xác theo quy tắc',
      'sai lệch hàng chục',
      'sai lệch hàng đơn vị',
      'chưa chính xác a',
      'phương án 1',
    ];

    for (let g = 1; g <= 5; g++) {
      const topics = ALL_TOPICS_BY_GRADE[g];
      assert.ok(topics && topics.length > 0, `Grade ${g} has no topics`);

      for (const topic of topics) {
        const questions = generateMathQuestions(topic, g);
        assert.equal(questions.length, 5, `Topic ${topic.id} must generate exactly 5 questions (got ${questions.length})`);
        totalQuestions += questions.length;

        for (const q of questions) {
          assert.ok(q.questionText && q.questionText.length > 5, `Invalid questionText in ${topic.id}`);
          if (q.options) {
            assert.ok(q.options.length >= 2, `Not enough options in ${topic.id}`);
            const correctCount = q.options.filter((o) => o.isCorrect).length;
            assert.equal(correctCount, 1, `Question in ${topic.id} must have exactly 1 correct option`);

            for (const opt of q.options) {
              const lower = opt.label.toLowerCase();
              for (const banned of placeholderBlacklist) {
                assert.ok(
                  !lower.includes(banned),
                  `Placeholder detected in topic ${topic.id}: "${opt.label}" contains "${banned}"`
                );
              }
            }
          }
        }
      }
    }

    assert.equal(totalQuestions, 342 * 5, `Expected 1,710 questions (342 topics × 5 questions), got ${totalQuestions}`);
  });

  it('should verify specific user reported lessons have accurate 5-question mathematical sets', () => {
    // 1. Grade 4 Lesson 4: Biểu thức chứa chữ
    const g4 = ALL_TOPICS_BY_GRADE[4];
    const g4b4 = g4.find((t) => t.id === 'math-g4-b4');
    assert.ok(g4b4, 'math-g4-b4 must exist');
    const q_g4b4 = generateMathQuestions(g4b4, 4);
    assert.equal(q_g4b4.length, 5);
    assert.ok(q_g4b4[0].questionText.includes('Tính giá trị của biểu thức'));
    assert.equal(q_g4b4[0].options[0].label, '60');

    // 2. Grade 4 Lesson 24: Tính chất giao hoán và kết hợp của phép cộng
    const g4b24 = g4.find((t) => t.id === 'math-g4-b24');
    assert.ok(g4b24, 'math-g4-b24 must exist');
    const q_g4b24 = generateMathQuestions(g4b24, 4);
    assert.equal(q_g4b24.length, 5);
    assert.ok(q_g4b24[0].questionText.includes('Giao hoán phép cộng'));
    assert.equal(q_g4b24[0].options[0].label, 'b + a');

    // 3. Grade 5 Lesson 7: Hỗn số
    const g5 = ALL_TOPICS_BY_GRADE[5];
    const g5b7 = g5.find((t) => t.id === 'math-g5-b7');
    assert.ok(g5b7, 'math-g5-b7 must exist');
    const q_g5b7 = generateMathQuestions(g5b7, 5);
    assert.equal(q_g5b7.length, 5);
    assert.ok(q_g5b7[0].questionText.includes('Chuyển hỗn số'));
    assert.equal(q_g5b7[0].options[0].label, '13/5');
  });
});
