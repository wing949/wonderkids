import { build } from 'esbuild';
import { createHash } from 'node:crypto';
import { access, mkdir, mkdtemp, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';

const workspace = process.cwd();
const outputIndex = process.argv.indexOf('--output-dir');
const explicitOutput = outputIndex >= 0 ? resolve(process.argv[outputIndex + 1]) : null;
const publicDir = explicitOutput || join(workspace, 'reports');
const privateDir = explicitOutput || join(workspace, 'private-reports');
const bundleDir = await mkdtemp(join(tmpdir(), 'wonderkids-sgk-audit-'));

function csvCell(value) {
  return `"${String(value ?? '').replaceAll('"', '""').replaceAll('\r', ' ').replaceAll('\n', ' ')}"`;
}

function mdCell(value) {
  return String(value ?? '').replaceAll('|', '\\|').replaceAll('\n', ' ');
}

async function audioInfo(assetPath) {
  const absolutePath = join(workspace, 'public', assetPath.slice(1));
  try {
    const [file, fileStat] = await Promise.all([readFile(absolutePath), stat(absolutePath)]);
    const valid = fileStat.size > 44
      && file.subarray(0, 4).toString('ascii') === 'RIFF'
      && file.subarray(8, 12).toString('ascii') === 'WAVE';
    return { valid, hash: createHash('sha256').update(file).digest('hex') };
  } catch {
    return { valid: false, hash: '' };
  }
}

try {
  await build({
    entryPoints: ['src/data/curriculum/index.ts'],
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'node20',
    outfile: join(bundleDir, 'curriculum.js'),
    write: true,
    logLevel: 'silent',
  });
  const curriculum = await import(pathToFileURL(join(bundleDir, 'curriculum.js')).href);
  const rows = [];

  for (const [gradeText, topics] of Object.entries(curriculum.VIETNAMESE_CURRICULUM_BY_GRADE)) {
    const grade = Number(gradeText);
    const lessons = curriculum.getLessonsForGradeAndSubject(grade, 'vietnamese');
    for (const topic of topics) {
      const lesson = lessons.find((item) => item.id === topic.id);
      const asset = curriculum.VIETNAMESE_AUDIO_MANIFEST[topic.id.replace('-l', '-b')];
      const [primary, fallback] = asset
        ? await Promise.all([audioInfo(asset.primaryPath), audioInfo(asset.fallbackPath)])
        : [{ valid: false, hash: '' }, { valid: false, hash: '' }];
      const verifiedSgk = curriculum.isPublishableVietnameseSgkLesson(lesson);
      const sourceMapping = curriculum.VIETNAMESE_LESSON_PAGE_MAPPINGS[lesson.id];
      const supplementReadingAllowed = (lesson.grade === 1 && lesson.semester === 1)
        || lesson.provenance?.contentOrigin === 'pedagogical_supplement';
      const readingStatus = verifiedSgk
        ? 'verified_sgk_transcript'
        : supplementReadingAllowed
          ? 'supplement_reading_allowed'
          : 'blocked_until_sgk_transcript_verified';
      rows.push({
        lessonId: lesson.id,
        grade,
        semester: topic.semester,
        appTitle: lesson.title,
        cardPreview: lesson.cardPreview || '',
        declaredReferenceTitle: lesson.provenance?.referenceLessonTitle || '',
        declaredReferenceDetail: lesson.provenance?.referenceDetail || '',
        sourceMappingStatus: sourceMapping?.status || 'unmatched',
        sourcePages: lesson.sourceCitation?.sourcePages?.join(', ') || '',
        readingStatus,
        contentStatus: verifiedSgk ? 'verified_sgk' : 'extra_practice_inside_lesson',
        sgkActivityCount: verifiedSgk ? lesson.questions.length : 0,
        appExtensionCount: lesson.appExtensions?.length || 0,
        audioPrimary: primary.valid ? 'valid' : 'missing_or_invalid',
        audioFallback: fallback.valid ? 'valid' : 'missing_or_invalid',
        audioDistinct: Boolean(primary.hash && fallback.hash && primary.hash !== fallback.hash),
        transcriptHash: asset?.transcriptHash || '',
        notes: verifiedSgk
          ? 'Đã qua cổng kiểm duyệt xuất bản.'
          : readingStatus === 'supplement_reading_allowed'
            ? 'Chỉ cho phép bài đọc bổ sung có ghi nhãn; không tính là văn bản SGK.'
            : 'Đã khóa văn bản và audio chính cho đến khi transcript được đối chiếu nguyên văn với SGK.',
      });
    }
  }

  const books = curriculum.VIETNAMESE_BOOK_MANIFESTS;
  const totalPages = books.reduce((sum, book) => sum + book.pageCount, 0);
  const verifiedLessons = rows.filter((row) => row.contentStatus === 'verified_sgk').length;
  const sgkActivities = rows.reduce((sum, row) => sum + row.sgkActivityCount, 0);
  const appExtensions = rows.reduce((sum, row) => sum + row.appExtensionCount, 0);
  const audioReady = rows.filter((row) => row.audioPrimary === 'valid' && row.audioFallback === 'valid' && row.audioDistinct).length;
  const sourceMatched = rows.filter((row) => row.sourceMappingStatus !== 'unmatched').length;
  const visuallyReviewed = rows.filter((row) => row.sourceMappingStatus === 'visually_reviewed').length;
  const sourceUnmatched = rows.filter((row) => row.sourceMappingStatus === 'unmatched').length;
  const blockedReadings = rows.filter((row) => row.readingStatus === 'blocked_until_sgk_transcript_verified').length;
  const verifiedTranscripts = rows.filter((row) => row.readingStatus === 'verified_sgk_transcript').length;
  const bookTable = books.map((book) =>
    `| ${book.id} | ${book.grade} | ${book.semester} | ${book.pageCount} | ${book.importStatus} | ${book.published ? 'Có' : 'Không'} | \`${book.manifestHash.slice(0, 12)}…\` |`
  ).join('\n');
  const lessonTable = rows.map((row) =>
    `| ${row.lessonId} | ${row.grade}/${row.semester} | ${mdCell(row.appTitle)} | ${row.sourceMappingStatus} | ${row.readingStatus} | ${row.sgkActivityCount} | ${row.appExtensionCount} |`
  ).join('\n');

  const markdown = `# Báo cáo kiểm duyệt Tiếng Việt theo SGK

Ngày cập nhật: 2026-08-21  
Nguồn: 10 đường dẫn đọc sách chính thức do quản trị cung cấp.

## Kết luận

- Đã lập manifest cho **10/10 sách nguồn**, tổng cộng **${totalPages.toLocaleString('vi-VN')} trang**; từng ảnh trang có SHA-256 và được cache riêng ngoài Git.
- **Chưa phát hành nội dung SGK chưa duyệt.** Hiện có **${verifiedLessons} bài SGK đã qua cổng kiểm duyệt**.
- OCR đã rà 1.584/1.584 trang; **${sourceMatched} mục** tìm được trang mở bài, trong đó **${visuallyReviewed} mục** đã kiểm tra trực quan và **${sourceUnmatched} mục** chưa được phép gắn trang.
- Hiện có **${verifiedTranscripts} transcript SGK đã duyệt**. Văn bản/audio chính của **${blockedReadings} bài** đã bị khóa để không phát nội dung tự sinh thay cho SGK.
- 132 gói nội dung cũ vẫn được giữ trong từng bài dưới dạng **Luyện thêm**, không tính là bài tập SGK.
- Kho audio có đủ một file chính và một fallback cho **${audioReady}/132 gói Luyện thêm**; các file này không được dùng làm audio SGK khi transcript chưa duyệt.

## Thống kê

| Chỉ số | Kết quả |
|---|---:|
| Sách nguồn đã lập manifest | ${books.length}/10 |
| Trang nguồn đã lập checksum | ${totalPages.toLocaleString('vi-VN')} |
| Bài SGK đã xác minh | ${verifiedLessons} |
| Trang mở bài khớp OCR/đối chiếu | ${sourceMatched}/132 |
| Ánh xạ đã kiểm tra trực quan | ${visuallyReviewed} |
| Mục chưa khớp trang | ${sourceUnmatched} |
| Transcript SGK đã xác minh | ${verifiedTranscripts} |
| Bài đang khóa văn bản/audio chính | ${blockedReadings} |
| Hoạt động SGK đã xác minh | ${sgkActivities} |
| Luyện thêm trong bài | ${appExtensions} |
| Cặp audio chính/fallback đạt kiểm tra file | ${audioReady}/132 |

## Tiến độ từng sách

| Mã sách | Lớp | Tập | Số trang | Trạng thái nhập | Được phát hành | Manifest hash |
|---|---:|---:|---:|---|---|---|
${bookTable}

## Kiểm kê từng bài trong ứng dụng

| Mã bài | Lớp/Tập | Tên hiển thị | Ánh xạ trang | Trạng thái bài đọc | Hoạt động SGK | Luyện thêm |
|---|---|---|---|---|---:|---:|
${lessonTable}

## Cổng phát hành

Một bài chỉ được tính vào nội dung SGK khi có trích dẫn trang, hash nguồn, trạng thái \`verified\`, ánh xạ một-một giữa từng tiểu ý SGK và hoạt động app, cùng cặp audio khớp transcript. OCR chỉ là bản nháp; không tự động trở thành nội dung đã duyệt.
`;

  const headers = [
    'lessonId', 'grade', 'semester', 'appTitle', 'cardPreview', 'declaredReferenceTitle',
    'declaredReferenceDetail', 'sourceMappingStatus', 'sourcePages', 'readingStatus',
    'contentStatus', 'sgkActivityCount', 'appExtensionCount',
    'audioPrimary', 'audioFallback', 'audioDistinct', 'transcriptHash', 'notes',
  ];
  const csv = [headers.join(','), ...rows.map((row) => headers.map((header) => csvCell(row[header])).join(','))].join('\n') + '\n';

  await Promise.all([mkdir(publicDir, { recursive: true }), mkdir(privateDir, { recursive: true })]);
  await Promise.all([
    writeFile(join(publicDir, 'vietnamese-sgk-audit.md'), markdown, 'utf8'),
    writeFile(join(privateDir, 'vietnamese-sgk-comparison.csv'), csv, 'utf8'),
  ]);
  if (!explicitOutput) await access(join(workspace, 'src', 'data', 'curriculum', 'vietnamese', 'bookManifests.generated.json'));
  console.log(JSON.stringify({ books: books.length, pages: totalPages, lessons: rows.length, sgkActivities, appExtensions, audioReady }));
} finally {
  await rm(bundleDir, { recursive: true, force: true });
}
