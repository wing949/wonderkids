import { build } from 'esbuild';
import { mkdir, mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const workspace = process.cwd();
const outputDirArg = process.argv.find((argument) => argument.startsWith('--output-dir='));
const outputDir = outputDirArg
  ? resolve(workspace, outputDirArg.slice('--output-dir='.length))
  : join(workspace, 'reports');
const privateOutput = join(workspace, 'private-reports', 'vietnamese-verbatim-crosscheck.csv');
const scopeExcludedBook = 'tv-g1-t1';
const ocrArtifact = /[ˆ⁄�]|(?:<<\?|WPUUL|Cì vẬ|Ậ m :|chgy nhanh)/u;
const activityLeak = /(?:Quan sát tranh|Trả lời câu hỏi|Viết vào vở|Nghe viết|Tìm trong hoặc ngoài bài đọc)/u;
const narrationDisclosure = /(?:Bài đọc:|Tác giả:)/u;

function escapeCsv(value) {
  return `"${String(value ?? '').replaceAll('"', '""')}"`;
}

const buildDir = await mkdtemp(join(tmpdir(), 'wonderkids-vietnamese-verbatim-audit-'));
await build({
  entryPoints: ['src/data/curriculum/vietnamese/sgkTranscripts.ts'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outfile: join(buildDir, 'sgkTranscripts.js'),
  logLevel: 'silent',
});

const { SGK_VERIFIED_TRANSCRIPTS } = await import(pathToFileURL(join(buildDir, 'sgkTranscripts.js')).href);
const manifests = JSON.parse(await readFile(
  join(workspace, 'src/data/curriculum/vietnamese/bookManifests.generated.json'),
  'utf8',
));
const pagesByBook = new Map(manifests.map((book) => [
  book.id,
  new Map(book.pages.map((page) => [page.readerIndex, page])),
]));

const allEntries = Object.entries(SGK_VERIFIED_TRANSCRIPTS)
  .filter(([, transcript]) => transcript.bookId !== scopeExcludedBook);
const duplicateCountByLessonId = new Map();
for (const [, transcript] of allEntries) {
  duplicateCountByLessonId.set(
    transcript.lessonId,
    (duplicateCountByLessonId.get(transcript.lessonId) ?? 0) + 1,
  );
}

// Đây là đúng bản ghi runtime tra bằng lessonId, không phải alias bổ sung.
const rows = allEntries
  .filter(([key, transcript]) => key === transcript.lessonId)
  .map(([, transcript]) => {
    const body = transcript.readingPassage.content.join('\n');
    const firstSourcePage = transcript.sourcePages[0];
    const renderedPage = pagesByBook.get(transcript.bookId)?.get(firstSourcePage);
    const issues = [];

    if ((duplicateCountByLessonId.get(transcript.lessonId) ?? 0) !== 1) issues.push('duplicate_transcript');
    if (!renderedPage) issues.push('missing_rendered_source_page');
    else if (renderedPage.sourceHash !== transcript.sourceHash) issues.push('source_hash_mismatch');
    if (ocrArtifact.test(body)) issues.push('ocr_artifact');
    if (activityLeak.test(body)) issues.push('activity_leaked_into_reading');
    if (narrationDisclosure.test(transcript.readingPassage.audioNarration)) issues.push('audio_disclosure');

    return {
      lessonId: transcript.lessonId,
      bookId: transcript.bookId,
      title: transcript.readingPassage.title,
      sourcePages: transcript.sourcePages.join(', '),
      sourceHash: transcript.sourceHash,
      renderedPageHash: renderedPage?.sourceHash ?? '',
      issues,
      status: issues.length === 0 ? 'PASS' : 'FAIL',
    };
  });

const counts = {
  total: rows.length,
  pass: rows.filter((row) => row.status === 'PASS').length,
  fail: rows.filter((row) => row.status === 'FAIL').length,
  duplicateTranscript: rows.filter((row) => row.issues.includes('duplicate_transcript')).length,
  sourceHashMismatch: rows.filter((row) => row.issues.includes('source_hash_mismatch')).length,
  ocrArtifact: rows.filter((row) => row.issues.includes('ocr_artifact')).length,
  activityLeak: rows.filter((row) => row.issues.includes('activity_leaked_into_reading')).length,
  audioDisclosure: rows.filter((row) => row.issues.includes('audio_disclosure')).length,
};
const byBook = Object.entries(Object.groupBy(rows, (row) => row.bookId)).map(([bookId, bookRows]) => ({
  bookId,
  total: bookRows.length,
  pass: bookRows.filter((row) => row.status === 'PASS').length,
  fail: bookRows.filter((row) => row.status === 'FAIL').length,
}));

const markdown = [
  '# Báo cáo đối chiếu nguyên văn SGK Tiếng Việt',
  '',
  'Phạm vi: 293 bài, không gồm Tiếng Việt 1 Tập 1. Mỗi bài được so với đúng trang ảnh mà giao diện sẽ hiển thị.',
  '',
  '## Kết quả',
  '',
  `- PASS: ${counts.pass}/${counts.total}`,
  `- FAIL: ${counts.fail}/${counts.total}`,
  `- Trùng transcript: ${counts.duplicateTranscript}`,
  `- Hash không khớp trang đang hiển thị: ${counts.sourceHashMismatch}`,
  `- Lẫn ký tự OCR: ${counts.ocrArtifact}`,
  `- Lẫn hoạt động SGK vào bài đọc: ${counts.activityLeak}`,
  `- Lời dẫn audio không phải nguyên văn: ${counts.audioDisclosure}`,
  '',
  '## Theo từng tập',
  '',
  '| Tập | Tổng | PASS | FAIL |',
  '| --- | ---: | ---: | ---: |',
  ...byBook.map((row) => `| ${row.bookId} | ${row.total} | ${row.pass} | ${row.fail} |`),
  '',
  'Một bài chỉ được gắn “verified” sau khi hết toàn bộ lỗi trên và có lần đối chiếu trực quan với trang SGK lưu trong manifest.',
  '',
].join('\n');
const csv = [
  ['lessonId', 'bookId', 'title', 'sourcePages', 'sourceHash', 'renderedPageHash', 'status', 'issues'],
  ...rows.map((row) => [
    row.lessonId,
    row.bookId,
    row.title,
    row.sourcePages,
    row.sourceHash,
    row.renderedPageHash,
    row.status,
    row.issues.join(';'),
  ]),
].map((record) => record.map(escapeCsv).join(',')).join('\n');

await mkdir(outputDir, { recursive: true });
await mkdir(dirname(privateOutput), { recursive: true });
await Promise.all([
  writeFile(join(outputDir, 'vietnamese-verbatim-crosscheck.md'), markdown, 'utf8'),
  writeFile(privateOutput, csv, 'utf8'),
]);

console.log(JSON.stringify({ counts, report: join(outputDir, 'vietnamese-verbatim-crosscheck.md'), csv: privateOutput }, null, 2));
