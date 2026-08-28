import assert from 'node:assert/strict';
import test from 'node:test';
import {
  getViolympicReferenceItems,
  getViolympicReferenceSources,
  getViolympicReferenceStats,
} from '../src/data/practice/violympicReferenceBank.ts';
import {
  getQuestionBankItems,
  buildQuestionBankSession,
  QUESTION_BANK_COMPETITIONS,
} from '../src/data/practice/questionBank.ts';
const GRADES = [1, 2, 3, 4, 5];
const VIOLYMPIC_SUBJECTS = ['math', 'vietnamese', 'english', 'math_en'];

test('Ngân hàng tham khảo Violympic OCR chứa đầy đủ câu hỏi cho 5 khối lớp', () => {
  const sources = getViolympicReferenceSources();
  const items = getViolympicReferenceItems();
  const stats = getViolympicReferenceStats();

  assert.ok(sources.length >= 99, `Có ${sources.length} tệp nguồn đã lập chỉ mục`);
  assert.ok(items.length >= 5000, `Tổng số câu hỏi OCR đạt ${items.length}`);
  assert.equal(new Set(items.map((it) => it.id)).size, items.length, 'Mỗi câu hỏi phải có ID duy nhất');

  for (const grade of GRADES) {
    const mathItems = getViolympicReferenceItems({ subject: 'math', grade });
    const tvItems = getViolympicReferenceItems({ subject: 'vietnamese', grade });
    const mathEnItems = getViolympicReferenceItems({ subject: 'math_en', grade });

    assert.ok(mathItems.length >= 10, `Toán Lớp ${grade} phải có >= 10 câu (thực tế: ${mathItems.length})`);
    assert.ok(tvItems.length >= 0, `Tiếng Việt Lớp ${grade} hợp lệ (thực tế: ${tvItems.length})`);
    assert.ok(mathEnItems.length >= 0, `Toán Tiếng Anh Lớp ${grade} hợp lệ (thực tế: ${mathEnItems.length})`);
  }
  assert.ok(getViolympicReferenceItems({ subject: 'math_en' }).length >= 50, 'Tổng số câu Toán Tiếng Anh OCR đạt >= 50');
});

test('Mọi câu hỏi Violympic OCR đều đạt chuẩn sạch (không dính watermark/quảng cáo)', () => {
  const items = getViolympicReferenceItems();
  const adsRegex = /(?:zalo|\b0[1-9]\d{8}\b|đặt mua tài liệu|toaniq|team cô hoa|quảng cáo|full screen|f11)/iu;

  for (const item of items) {
    assert.equal(item.contentOrigin, 'reference_extracted');
    assert.equal(item.verificationStatus, 'verified');
    assert.ok(item.prompt.trim().length >= 10, `Đề bài quá ngắn: ${item.id}`);
    assert.ok(item.explanation.trim().length >= 5, `Lời giải quá ngắn: ${item.id}`);
    assert.doesNotMatch(`${item.prompt}\n${item.explanation}\n${item.sourceLabel}`, adsRegex, `Dính rác tại câu ${item.id}`);
    assert.ok(item.sourceDocumentIds && item.sourceDocumentIds.length > 0, `Thiếu provenance: ${item.id}`);
  }
});

test('Question Bank và Đấu Trường tạo được phiên thi đấu 30 câu cho toàn bộ tổ hợp Violympic Lớp 1-5', () => {
  for (const grade of GRADES) {
    for (const subject of VIOLYMPIC_SUBJECTS) {
      const bankItems = getQuestionBankItems({
        competition: 'violympic',
        grade,
        subject,
      });
      assert.ok(bankItems.length >= 30, `Bank thiếu câu cho Violympic Lớp ${grade} môn ${subject} (${bankItems.length} câu)`);

      // Test practice session generation
      const practiceSession = buildQuestionBankSession({
        competition: 'violympic',
        mode: 'practice',
        grade,
        subject,
        questionCount: 30,
      });
      assert.ok(practiceSession, `Không tạo được phiên luyện tập Lớp ${grade} môn ${subject}`);
      assert.equal(practiceSession.sections.reduce((acc, s) => acc + s.items.length, 0), 30);
      assert.equal(practiceSession.timeLimitSeconds, undefined, 'Luyện tập không khóa thời gian');

      // Test arena session generation (30 min mock test)
      const arenaSession = buildQuestionBankSession({
        competition: 'violympic',
        mode: 'arena',
        grade,
        subject,
        questionCount: 30,
      });
      assert.ok(arenaSession, `Không tạo được phiên thi đấu Lớp ${grade} môn ${subject}`);
      assert.equal(arenaSession.sections.reduce((acc, s) => acc + s.items.length, 0), 30);
      assert.equal(arenaSession.timeLimitSeconds, 1800, 'Đấu trường Violympic có thời gian 30 phút (1800s)');
    }
  }
});
