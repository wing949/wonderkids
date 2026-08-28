import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import {
  getViolympicDigitalItems,
  getViolympicDigitalSources,
  getViolympicDigitalStats,
} from '../src/data/practice/violympicDigitalReferenceBank.ts';
import { getQuestionBankItems } from '../src/data/practice/questionBank.ts';

test('pipeline text số hóa tự kiểm tra bộ lọc mảnh công thức', () => {
  const result = spawnSync('python', ['scripts/import_violympic_digital_corpus.py', '--self-test'], {
    encoding: 'utf8',
    windowsHide: true,
  });
  assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`);
  assert.match(result.stdout, /safe arithmetic fixtures: PASS/u);
});

test('ngân hàng Digital giữ đúng thống kê và không nạp nguồn OCR', () => {
  const stats = getViolympicDigitalStats();
  const sources = getViolympicDigitalSources();
  const items = getViolympicDigitalItems();
  const sourcesById = new Map(sources.map((source) => [source.id, source]));

  assert.equal(stats.totalFiles, 207);
  assert.equal(stats.rawOcrFiles, 99);
  assert.equal(stats.rawNonOcrFiles, 108);
  assert.equal(stats.copyableDocumentFiles, 104);
  assert.equal(stats.unsupportedContainerFiles, 4);
  assert.equal(stats.duplicateFilesRemoved, 17);
  assert.equal(items.length, stats.extractedVerifiedItems);
  assert.ok(items.length > 0);
  assert.equal(new Set(items.map((item) => `${item.subject}|${item.grade}|${item.prompt}|${item.correctAnswer}`)).size, items.length);

  for (const item of items) {
    assert.equal(item.contentOrigin, 'reference_extracted');
    assert.equal(item.verificationStatus, 'verified');
    assert.match(item.sourceHash, /^[A-F0-9]{64}$/u);
    assert.match(item.sourcePageTextHash, /^[A-F0-9]{64}$/u);
    assert.match(item.sourceExcerptHash, /^[A-F0-9]{64}$/u);
    assert.doesNotMatch(item.prompt, /(?:3 \+ 42|8 ÷ 8|2 \+ 240)/u);
    assert.equal(sourcesById.get(item.sourceDocumentIds[0])?.extractionStatus, 'text_extractable');
  }
});

test('Kho luyện đề nhận thêm hoạt động Digital và vẫn loại câu trùng', () => {
  const items = getQuestionBankItems({ competition: 'violympic', subject: 'math', grade: 3 });
  const signatures = items.map((item) => `${item.prompt}|${item.correctAnswer}`);
  assert.equal(new Set(signatures).size, signatures.length);
  assert.ok(items.some((item) => item.id.startsWith('v-ocr-') || item.id.startsWith('violympic-extracted-')));
});
