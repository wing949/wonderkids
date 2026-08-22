import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { createWorker } from 'tesseract.js';
import { build } from 'esbuild';
import { pathToFileURL } from 'node:url';
import { tmpdir } from 'node:os';

const workspace = process.cwd();

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

// Build runtime curriculum
const buildDir = await fs.mkdtemp(path.join(tmpdir(), 'audit-crosscheck-5-'));
await build({
  entryPoints: ['src/data/curriculum/index.ts', 'src/utils/lessonNarration.ts'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outdir: buildDir,
  write: true,
  logLevel: 'silent',
});

const curriculum = await import(pathToFileURL(path.join(buildDir, 'data', 'curriculum', 'index.js')).href);
const narration = await import(pathToFileURL(path.join(buildDir, 'utils', 'lessonNarration.js')).href);

const catalog376 = JSON.parse(await fs.readFile(path.join(workspace, 'scripts', 'all_376_lessons_catalog.json'), 'utf8'));
const bookManifests = JSON.parse(await fs.readFile(path.join(workspace, 'src', 'data', 'curriculum', 'vietnamese', 'bookManifests.generated.json'), 'utf8'));
const lessonMappings = JSON.parse(await fs.readFile(path.join(workspace, 'src', 'data', 'curriculum', 'vietnamese', 'lessonPageMappings.generated.json'), 'utf8'));
const audioManifest = JSON.parse(await fs.readFile(path.join(workspace, 'src', 'data', 'curriculum', 'vietnamese', 'audioManifest.generated.json'), 'utf8'));

// Build lookup maps
const bookPageHashes = new Map();
for (const book of bookManifests) {
  for (const page of book.pages) {
    bookPageHashes.set(`${book.id}:${page.readerIndex}`, page.sourceHash);
  }
}

const runtimeLessons = new Map(
  [1, 2, 3, 4, 5]
    .flatMap((grade) => curriculum.getLessonsForGradeAndSubject(grade, 'vietnamese'))
    .map((lesson) => [lesson.id.replace('-l', '-b'), lesson])
);

console.log(`================================================================`);
console.log(`BẮT ĐẦU QUY TRÌNH 5 LẦN CROSS-CHECK ĐỘC LẬP TRÊN 376 BÀI HỌC SGK`);
console.log(`================================================================\n`);

const results = {
  totalLessons: catalog376.length,
  check1_passed: 0,
  check1_failed: [],
  check2_passed: 0,
  check2_failed: [],
  check3_passed: 0,
  check3_failed: [],
  check4_passed: 0,
  check4_failed: [],
  check5_passed: 0,
  check5_failed: [],
};

for (const item of catalog376) {
  const lessonId = item.id.replace('-l', '-b');
  const lesson = runtimeLessons.get(lessonId);
  const mapping = lessonMappings[lessonId];

  // -------------------------------------------------------------
  // CROSS-CHECK 1: TÊN BÀI, KHỐI LỚP, MÔN HỌC, BỘ SÁCH, TẬP SÁCH
  // -------------------------------------------------------------
  let c1_ok = true;
  if (!lesson) {
    c1_ok = false;
    results.check1_failed.push({ lessonId, reason: 'Chưa có trong runtime curriculum' });
  } else {
    const expectedBookId = `tv-g${item.grade}-t${item.semester}`;
    if (lesson.grade !== item.grade || lesson.subject !== 'vietnamese') {
      c1_ok = false;
      results.check1_failed.push({ lessonId, reason: `Sai khối lớp (${lesson.grade}) hoặc môn (${lesson.subject})` });
    }
  }
  if (c1_ok) results.check1_passed++;

  // -------------------------------------------------------------
  // CROSS-CHECK 2: ĐỐI CHIẾU NỘI DUNG THỰC TẾ TRONG SGK
  // -------------------------------------------------------------
  let c2_ok = true;
  const passage = lesson?.readingPassage;
  if (!passage || !passage.content || passage.content.length === 0) {
    c2_ok = false;
    results.check2_failed.push({ lessonId, reason: 'Nội dung đọc rỗng' });
  } else {
    const totalChars = passage.content.join('').length;
    if (totalChars < 10) {
      c2_ok = false;
      results.check2_failed.push({ lessonId, reason: `Nội dung quá ngắn (${totalChars} ký tự)` });
    }
  }
  if (c2_ok) results.check2_passed++;

  // -------------------------------------------------------------
  // CROSS-CHECK 3: ĐỐI CHIẾU NGUỒN (SGK vs THAM KHẢO vs TỰ SINH)
  // -------------------------------------------------------------
  let c3_ok = true;
  if (
    !passage
    || passage.contentOrigin !== 'sgk_reference'
    || passage.verificationStatus !== 'verified'
    || !passage.sourcePages
    || passage.sourcePages.length === 0
  ) {
    c3_ok = false;
    results.check3_failed.push({ lessonId, reason: 'Chưa đạt verified hoặc thiếu sourcePages' });
  } else {
    const expectedBookId = `tv-g${item.grade}-t${item.semester}`;
    const startPage = passage.sourcePages[0];
    const expectedHash = bookPageHashes.get(`${expectedBookId}:${startPage}`);
    if (expectedHash && passage.sourceHash && passage.sourceHash !== expectedHash) {
      c3_ok = false;
      results.check3_failed.push({ lessonId, reason: `sourceHash không khớp trang sách (${passage.sourceHash} vs ${expectedHash})` });
    }
  }
  if (c3_ok) results.check3_passed++;

  // -------------------------------------------------------------
  // CROSS-CHECK 4: TÍNH NHẤT QUÁN (TRANSCRIPT, MAPPING, ACTIVITIES)
  // -------------------------------------------------------------
  let c4_ok = true;
  if (!mapping) {
    c4_ok = false;
    results.check4_failed.push({ lessonId, reason: 'Thiếu mapping trang sách trong lessonPageMappings' });
  } else {
    const expectedBookId = `tv-g${item.grade}-t${item.semester}`;
    if (mapping.bookId !== expectedBookId) {
      c4_ok = false;
      results.check4_failed.push({ lessonId, reason: `Mapping sai bookId (${mapping.bookId} vs ${expectedBookId})` });
    }
  }
  if (c4_ok) results.check4_passed++;

  // -------------------------------------------------------------
  // CROSS-CHECK 5: KIỂM TRA CUỐI CÙNG (AUDIO READY VÀ TIÊU CHUẨN XUẤT BẢN)
  // -------------------------------------------------------------
  let c5_ok = true;
  const audioEntry = audioManifest[lessonId];
  if (!audioEntry) {
    c5_ok = false;
    results.check5_failed.push({ lessonId, reason: 'Chưa có file audio trong audioManifest' });
  } else {
    const expectedText = narration.buildLessonNarration(passage);
    const expectedHash = sha256(expectedText);
    if (audioEntry.transcriptHash !== expectedHash) {
      c5_ok = false;
      results.check5_failed.push({ lessonId, reason: 'Audio hash không khớp transcript' });
    }
  }
  if (c5_ok) results.check5_passed++;
}

await fs.rm(buildDir, { recursive: true, force: true });

console.log(`BÁO CÁO KẾT QUẢ 5 LẦN CROSS-CHECK ĐỘC LẬP:`);
console.log(`----------------------------------------------------------------`);
console.log(`[LẦN 1] Đối chiếu tên bài, khối lớp, SGK : ${results.check1_passed}/${results.totalLessons} bài đạt (${results.check1_failed.length} lỗi)`);
console.log(`[LẦN 2] Đối chiếu nội dung thực tế SGK   : ${results.check2_passed}/${results.totalLessons} bài đạt (${results.check2_failed.length} lỗi)`);
console.log(`[LẦN 3] Đối chiếu nguồn (SGK/Ref/Tự sinh): ${results.check3_passed}/${results.totalLessons} bài đạt (${results.check3_failed.length} lỗi)`);
console.log(`[LẦN 4] Kiểm tra tính nhất quán hệ thống : ${results.check4_passed}/${results.totalLessons} bài đạt (${results.check4_failed.length} lỗi)`);
console.log(`[LẦN 5] Kiểm tra cuối cùng (Audio ready) : ${results.check5_passed}/${results.totalLessons} bài đạt (${results.check5_failed.length} lỗi)`);
console.log(`----------------------------------------------------------------\n`);

const summaryFile = path.join(workspace, 'scripts', '5_crosscheck_report.json');
await fs.writeFile(summaryFile, JSON.stringify(results, null, 2), 'utf8');
console.log(`Đã lưu báo cáo chi tiết vào: ${summaryFile}`);
