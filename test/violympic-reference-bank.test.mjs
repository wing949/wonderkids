import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import {
  getViolympicReferenceItems,
  getViolympicReferenceSources,
  getViolympicReferenceStats,
} from '../src/data/practice/violympicReferenceBank.ts';
import { getQuestionBankItems } from '../src/data/practice/questionBank.ts';
import { getPracticePack } from '../src/data/practice/index.ts';

function contentSignature(item) {
  const normalize = (value) => String(value)
    .normalize('NFKC')
    .toLocaleLowerCase('vi')
    .replace(/[?!.:,;]+/gu, '')
    .replace(/\s+/gu, ' ')
    .trim();
  return `${item.subject || ''}|${item.grade || ''}|${normalize(item.prompt)}|${normalize(Array.isArray(item.correctAnswer) ? item.correctAnswer.join('|') : item.correctAnswer)}`;
}

test('bộ nhập liệu tự kiểm tra đúng lớp từ tên tệp trước tên thư mục', () => {
  const result = spawnSync('python', ['scripts/import_violympic_digital_corpus.py', '--self-test'], {
    encoding: 'utf8',
    windowsHide: true,
  });
  assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`);
  assert.match(result.stdout, /grade inference fixtures: PASS/u);
});

test('thống kê giữ nguyên 207 tệp và tách rõ 99 tệp OCR khỏi 108 tệp không OCR ban đầu', () => {
  const sources = getViolympicReferenceSources();
  const stats = getViolympicReferenceStats();

  assert.ok(stats.totalFiles >= 206 && stats.totalFiles <= 207, `totalFiles = ${stats.totalFiles}`);
  assert.equal(stats.rawNonOcrFiles, 108);
  assert.equal(stats.rawOcrFiles, 99);
  assert.ok(stats.copyableDocumentFiles >= 103);
  assert.ok(stats.unsupportedContainerFiles >= 4 && stats.unsupportedContainerFiles <= 5);
  assert.equal(stats.rawNonOcrFiles, stats.copyableDocumentFiles + stats.unsupportedContainerFiles);
  assert.ok(stats.duplicateFilesRemoved > 0);
  assert.ok(stats.textExtractableDocuments > 0);
  assert.ok(stats.ocrRequiredDocuments > 0);
  assert.ok(sources.every((source) => source.grades.length === 1), 'nguồn phát hành phải có đúng một khối lớp');
  assert.ok(sources.every((source) => source.grades[0] >= 1 && source.grades[0] <= 5));
  assert.equal(new Set(sources.map((source) => source.sha256)).size, sources.length);
  assert.ok(sources.every((source) => !/[A-Z]:\\|refer\//iu.test(source.title)));
});

test('chỉ phát hành câu thực sự trích được, có định vị và dấu vân tay nguồn', () => {
  const items = getViolympicReferenceItems();
  const sourceRecords = getViolympicReferenceSources();
  const sources = new Map(sourceRecords.map((source) => [source.id, source]));
  const stats = getViolympicReferenceStats();

  assert.ok(items.length >= 5000, `Tổng số câu hỏi OCR đạt ${items.length}`);
  assert.ok(items.length > 0, 'phải có câu text-layer đủ điều kiện kiểm chứng để phát hành');
  assert.equal(new Set(items.map((item) => item.id)).size, items.length);
  assert.equal(new Set(items.map(contentSignature)).size, items.length, 'có nội dung trùng trong ngân hàng trích xuất');

  for (const item of items) {
    assert.equal(item.contentOrigin, 'reference_extracted', item.id);
    assert.equal(item.verificationStatus, 'verified', item.id);
    assert.ok(item.prompt.trim(), item.id);
    assert.doesNotMatch(item.prompt, /:\s*-/u, item.id);
    assert.doesNotMatch(item.prompt, /(?:\b3 \+ 42\b|\b8 ÷ 8\b|\b2 \+ 240\b)/u, item.id);
    assert.ok(item.explanation.trim(), item.id);
    assert.ok(item.sourceDocumentIds?.length === 1, item.id);
    assert.ok(item.sourceLocator?.trim(), item.id);
    assert.match(item.sourcePageTextHash, /^[A-F0-9]{64}$/u, item.id);
    assert.match(item.sourceExcerptHash, /^[A-F0-9]{64}$/u, item.id);
    const source = sources.get(item.sourceDocumentIds[0]);
    assert.ok(source, item.id);
    assert.equal(source.extractionStatus, 'text_extractable', item.id);
    assert.deepEqual(source.grades, [item.grade], item.id);
    assert.equal(source.subject, item.subject, item.id);
    if (source.fileType === 'pdf') assert.ok(Number.isInteger(item.sourcePage) && item.sourcePage >= 1, item.id);
    assert.doesNotMatch(
      `${item.prompt}\n${item.explanation}\n${item.sourceLabel}`,
      /(?:zalo|\b0[1-9]\d{8}\b|đặt mua tài liệu|watermark|[A-Z]:\\|refer\/)/iu,
      item.id,
    );
    const authoredTopics = new Set(getPracticePack(item.subject, item.grade).sets
      .flatMap((set) => set.sections)
      .flatMap((section) => section.items)
      .map((authoredItem) => authoredItem.topic));
    assert.ok(authoredTopics.has(item.topic), `${item.id}: chủ đề rời khỏi bộ lọc hiện có`);
  }
});

test('Kho luyện đề nhận câu trích xuất nhưng loại nội dung trùng với ngân hàng có sẵn', () => {
  const pool = getQuestionBankItems({ competition: 'violympic', subject: 'math', grade: 3 });
  const signatures = pool.map(contentSignature);
  assert.equal(new Set(pool.map((item) => item.id)).size, pool.length);
  assert.equal(new Set(signatures).size, signatures.length);
  assert.ok(pool.some((item) => item.contentOrigin === 'reference_extracted'));
});
