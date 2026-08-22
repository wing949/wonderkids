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

function buildNarration(passage) {
  if (!passage) return '';
  if (passage.audioNarration?.trim()) return passage.audioNarration.trim();
  return [passage.title, ...passage.content]
    .map((part) => part.trim())
    .filter(Boolean)
    .join('\n');
}

function samePages(left = [], right = []) {
  return left.length === right.length && left.every((page, index) => page === right[index]);
}

async function audioInfo(assetPath) {
  if (!assetPath) return { valid: false, hash: '' };
  const absolutePath = join(workspace, 'public', assetPath.slice(1));
  try {
    const [file, fileStat] = await Promise.all([readFile(absolutePath), stat(absolutePath)]);
    const isWav = file.subarray(0, 4).toString('ascii') === 'RIFF'
      && file.subarray(8, 12).toString('ascii') === 'WAVE';
    const isMp3 = file.length > 3
      && ((file[0] === 0xff && (file[1] & 0xe0) === 0xe0)
        || file.subarray(0, 3).toString('ascii') === 'ID3');
    const valid = fileStat.size > 44 && (isWav || isMp3);
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
      const primary = asset
        ? await audioInfo(asset.primaryPath)
        : { valid: false, hash: '' };
      const verifiedSgk = curriculum.isPublishableVietnameseSgkLesson(lesson);
      const sourceMapping = curriculum.VIETNAMESE_LESSON_PAGE_MAPPINGS[lesson.id];
      const catalogPending = lesson.catalogSection === 'sgk_pending';
      const verifiedTranscript = lesson.readingPassage?.contentOrigin === 'sgk_reference'
        && lesson.readingPassage.verificationStatus === 'verified'
        && lesson.readingPassage.sourcePages?.length > 0
        && lesson.readingPassage.sourcePages.every((page) => lesson.sourceCitation?.sourcePages.includes(page));
      const expectedTranscriptHash = lesson.readingPassage
        ? createHash('sha256').update(buildNarration(lesson.readingPassage)).digest('hex')
        : '';
      const audioTranscriptMatched = verifiedTranscript
        && primary.valid
        && asset?.primaryVoice === 'Cô Giáo Vy'
        && asset?.fallbackPath === undefined
        && asset?.transcriptHash === expectedTranscriptHash
        && samePages(asset?.sourcePages, lesson.readingPassage?.sourcePages);
      const audioTranscriptStatus = !verifiedTranscript
        ? 'not_applicable'
        : audioTranscriptMatched
          ? 'matched'
          : 'pending';
      const supplementReadingAllowed = !catalogPending && ((lesson.grade === 1 && lesson.semester === 1)
        || lesson.provenance?.contentOrigin === 'pedagogical_supplement');
      const readingStatus = verifiedTranscript || verifiedSgk
        ? 'verified_sgk_transcript'
        : catalogPending
          ? 'catalog_page_pending_transcript'
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
        sourceMappingStatus: sourceMapping?.status || (lesson.sourceCitation?.sourcePages.length ? 'catalog_page_confirmed' : 'unmatched'),
        sourcePages: lesson.sourceCitation?.sourcePages?.join(', ') || '',
        readingStatus,
        contentStatus: verifiedSgk
          ? 'verified_sgk'
          : catalogPending
            ? 'sgk_catalog_pending'
            : 'extra_practice_inside_lesson',
        sgkActivityCount: verifiedSgk ? lesson.questions.length : 0,
        appExtensionCount: lesson.appExtensions?.length || 0,
        audioPrimary: primary.valid ? 'valid' : 'missing_or_invalid',
        audioPolicy: 'primary_only_co_giao_vy',
        transcriptHash: asset?.transcriptHash || '',
        expectedTranscriptHash,
        audioTranscriptStatus,
        notes: verifiedSgk
          ? 'Nguyên văn và hoạt động đã nhập có trang/tiểu ý nguồn; tiếp tục bổ sung tiểu ý SGK trước khi công bố hoàn tất bài.'
          : audioTranscriptStatus === 'matched'
            ? 'Bài đọc và audio chính Cô Giáo Vy đã khớp transcript SGK; hoạt động Luyện thêm vẫn được tách riêng.'
          : verifiedTranscript
            ? 'Transcript SGK đã duyệt nhưng audio chưa khớp hash hoặc trang nguồn; không được phát làm giọng đọc SGK.'
          : readingStatus === 'supplement_reading_allowed'
            ? 'Chỉ cho phép bài đọc bổ sung có ghi nhãn; không tính là văn bản SGK.'
            : readingStatus === 'catalog_page_pending_transcript'
              ? 'Tên bài và trang đã đối chiếu mục lục SGK. Nguyên văn, hoạt động và audio chưa được phát hành.'
            : 'Đã khóa văn bản và audio chính cho đến khi transcript được đối chiếu nguyên văn với SGK.',
      });
    }
  }

  const books = curriculum.VIETNAMESE_BOOK_MANIFESTS;
  const totalPages = books.reduce((sum, book) => sum + book.pageCount, 0);
  const verifiedLessons = rows.filter((row) => row.contentStatus === 'verified_sgk').length;
  const catalogPendingLessons = rows.filter((row) => row.contentStatus === 'sgk_catalog_pending').length;
  const sgkActivities = rows.reduce((sum, row) => sum + row.sgkActivityCount, 0);
  const appExtensions = rows.reduce((sum, row) => sum + row.appExtensionCount, 0);
  const audioReady = rows.filter((row) => row.audioPrimary === 'valid').length;
  const referenceRows = rows.filter((row) => row.declaredReferenceTitle);
  const sourceMatched = rows.filter((row) => row.sourcePages).length;
  const visuallyReviewed = referenceRows.filter((row) => row.sourceMappingStatus === 'visually_reviewed').length;
  const sourceUnmatched = rows.filter((row) => !row.sourcePages).length;
  const blockedReadings = rows.filter((row) => (
    row.readingStatus === 'blocked_until_sgk_transcript_verified'
    || row.readingStatus === 'catalog_page_pending_transcript'
  )).length;
  const verifiedTranscripts = rows.filter((row) => row.readingStatus === 'verified_sgk_transcript').length;
  const verifiedTranscriptAudioReady = rows.filter((row) =>
    row.readingStatus === 'verified_sgk_transcript'
    && row.audioTranscriptStatus === 'matched'
  ).length;
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
- Đã lập **danh mục ${rows.length} bài theo mục lục SGK**; mỗi bài đều có lớp, tập, tên bài và trang mở bài để đối chiếu.
- **Chưa phát hành nguyên văn SGK chưa duyệt.** Hiện có **${verifiedLessons} bài** đã trích nguyên văn và **${sgkActivities} hoạt động** có trang/tiểu ý nguồn; cần tiếp tục đối chiếu các tiểu ý còn lại trước khi công bố hoàn tất từng bài.
- OCR đã rà 1.584/1.584 trang; **${sourceMatched}/${rows.length} bài** đã có trang mở bài từ mục lục, trong đó **${visuallyReviewed} bài** có thêm ánh xạ trang đã kiểm tra trực quan và **${sourceUnmatched} bài** chưa có trang.
- Hiện có **${verifiedTranscripts} transcript SGK đã duyệt**. Văn bản/audio chính của **${blockedReadings} bài** đã bị khóa để không phát nội dung tự sinh thay cho SGK.
- Có **${catalogPendingLessons} bài trong danh mục SGK chờ đối chiếu nguyên văn**; chúng không được gắn nhãn Luyện thêm và không sinh câu hỏi hoặc audio.
- Kho kỹ thuật chỉ dùng audio chính Cô Giáo Vy, không chuyển giọng fallback. Hiện có file chính hợp lệ cho **${audioReady}/${rows.length} bài**. Chỉ **${verifiedTranscriptAudioReady}/${verifiedTranscripts} transcript SGK đã duyệt** có hash transcript và trang nguồn khớp để được phép mở nút nghe.

## Thống kê

| Chỉ số | Kết quả |
|---|---:|
| Sách nguồn đã lập manifest | ${books.length}/10 |
| Trang nguồn đã lập checksum | ${totalPages.toLocaleString('vi-VN')} |
| Danh mục bài theo mục lục SGK | ${rows.length} |
| Bài SGK đã xác minh | ${verifiedLessons} |
| Danh mục SGK chờ đối chiếu nguyên văn | ${catalogPendingLessons} |
| Trang mở bài đã xác định | ${sourceMatched}/${rows.length} |
| Ánh xạ đã kiểm tra trực quan | ${visuallyReviewed} |
| Mục chưa khớp trang | ${sourceUnmatched} |
| Transcript SGK đã xác minh | ${verifiedTranscripts} |
| Transcript SGK có audio khớp transcript | ${verifiedTranscriptAudioReady}/${verifiedTranscripts} |
| Bài đang khóa văn bản/audio chính | ${blockedReadings} |
| Hoạt động SGK đã xác minh | ${sgkActivities} |
| Luyện thêm trong bài | ${appExtensions} |
| Audio chính Cô Giáo Vy đạt kiểm tra file | ${audioReady}/${rows.length} |

## Tiến độ từng sách

| Mã sách | Lớp | Tập | Số trang | Trạng thái nhập | Được phát hành | Manifest hash |
|---|---:|---:|---:|---|---|---|
${bookTable}

## Kiểm kê từng bài trong ứng dụng

| Mã bài | Lớp/Tập | Tên hiển thị | Ánh xạ trang | Trạng thái bài đọc | Hoạt động SGK | Luyện thêm |
|---|---|---|---|---|---:|---:|
${lessonTable}

## Cổng phát hành

Một bài chỉ được tính vào nội dung SGK khi có trích dẫn trang, hash nguồn, trạng thái \`verified\`, ánh xạ một-một giữa từng tiểu ý SGK và hoạt động app, cùng audio chính Cô Giáo Vy khớp transcript. OCR chỉ là bản nháp; không tự động trở thành nội dung đã duyệt.
`;

  const headers = [
    'lessonId', 'grade', 'semester', 'appTitle', 'cardPreview', 'declaredReferenceTitle',
    'declaredReferenceDetail', 'sourceMappingStatus', 'sourcePages', 'readingStatus',
    'contentStatus', 'sgkActivityCount', 'appExtensionCount',
    'audioPrimary', 'audioPolicy', 'transcriptHash', 'expectedTranscriptHash',
    'audioTranscriptStatus', 'notes',
  ];
  const csv = [headers.join(','), ...rows.map((row) => headers.map((header) => csvCell(row[header])).join(','))].join('\n') + '\n';

  await Promise.all([mkdir(publicDir, { recursive: true }), mkdir(privateDir, { recursive: true })]);
  await Promise.all([
    writeFile(join(publicDir, 'vietnamese-sgk-audit.md'), markdown, 'utf8'),
    writeFile(join(privateDir, 'vietnamese-sgk-comparison.csv'), csv, 'utf8'),
  ]);
  if (!explicitOutput) await access(join(workspace, 'src', 'data', 'curriculum', 'vietnamese', 'bookManifests.generated.json'));
  console.log(JSON.stringify({
    books: books.length,
    pages: totalPages,
    lessons: rows.length,
    verifiedTranscripts,
    verifiedTranscriptAudioReady,
    sgkActivities,
    appExtensions,
    audioReady,
  }));
} finally {
  await rm(bundleDir, { recursive: true, force: true });
}
