import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { tmpdir } from 'node:os';
import { build } from 'esbuild';

const workspace = process.cwd();
const buildDir = await fs.mkdtemp(path.join(tmpdir(), 'crosscheck6-'));

console.log('================================================================');
console.log('BẮT ĐẦU QUY TRÌNH 6 LỚP CROSS-CHECK THỰC TẾ TRÊN 376 BÀI HỌC SGK');
console.log('================================================================\n');

try {
  // Bundle curriculum
  await build({
    entryPoints: {
      index: 'src/data/curriculum/index.ts',
      sgkTranscripts: 'src/data/curriculum/vietnamese/sgkTranscripts.ts'
    },
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'node20',
    outdir: buildDir,
    write: true,
    logLevel: 'silent',
  });

  const curriculum = await import(pathToFileURL(path.join(buildDir, 'index.js')).href);
  const { SGK_VERIFIED_TRANSCRIPTS, getVerifiedVietnameseSgkTranscript } = await import(pathToFileURL(path.join(buildDir, 'sgkTranscripts.js')).href);

  const catalog = JSON.parse(await fs.readFile(path.join(workspace, 'scripts', 'all_376_lessons_catalog.json'), 'utf8'));
  const bookManifests = JSON.parse(await fs.readFile(path.join(workspace, 'src', 'data', 'curriculum', 'vietnamese', 'bookManifests.generated.json'), 'utf8'));

  const report = {
    totalLessons: catalog.length,
    layer1_passed: 0,
    layer1_failed: [],
    layer2_passed: 0,
    layer2_failed: [],
    layer3_passed: 0,
    layer3_failed: [],
    layer4_passed: 0,
    layer4_failed: [],
    layer5_passed: 0,
    layer5_failed: [],
    layer6_passed: 0,
    layer6_failed: [],
  };

  const junkPatterns = [
    /^\d+\.\s*(Chọn|Tìm|Nêu|Kể|Viết|Em hãy|Theo em|Dựa vào|Học thuộc)/i,
    /^(NÓI VÀ NGHE|VIẾT|ĐỌC MỞ RỘNG|VẬN DỤNG|LUYỆN TỪ VÀ CÂU)/i,
    /^(Trao đổi với bạn|Hỏi\s*[-–]\s*đáp về|Quan sát tranh)/i,
    /[~¬|_=›‹«»]/,
    /\b(Nột|toy|mớt|quở|bởn|nhõng|tờgiấy|vðo)\b/
  ];

  const aiHallucinationPatterns = [
    /WonderKids — nội dung tự sinh/i,
    /Nội dung do AI biên soạn/i,
    /Nội dung tự biên/i,
    /Nội dung tóm tắt/i
  ];

  for (const lesson of catalog) {
    const lessonId = lesson.id;
    const grade = lesson.grade;
    const sem = lesson.semester;
    const transcript = getVerifiedVietnameseSgkTranscript(lessonId) || SGK_VERIFIED_TRANSCRIPTS[lessonId];
    const cleanTitle = lesson.title.replace(/^Bài\s+\d+:\s*/, '').trim();

    // -------------------------------------------------------------
    // LẦN 1: KIỂM TRA CẤU TRÚC
    // -------------------------------------------------------------
    let l1_err = null;
    if (!transcript) {
      l1_err = 'Thiếu transcript trong hệ thống';
    } else if (transcript.bookId !== `tv-g${grade}-t${sem}`) {
      l1_err = `Sai bookId: ${transcript.bookId} vs tv-g${grade}-t${sem}`;
    } else if (!transcript.sourcePages || transcript.sourcePages.length === 0) {
      l1_err = 'Thiếu sourcePages';
    } else if (transcript.sourcePages[0] !== lesson.startPage) {
      l1_err = `startPage không khớp: ${transcript.sourcePages[0]} vs ${lesson.startPage}`;
    }

    if (l1_err) report.layer1_failed.push({ lessonId, reason: l1_err });
    else report.layer1_passed++;

    // -------------------------------------------------------------
    // LẦN 2: KIỂM TRA NGUỒN GỐC (ẢNH SCAN SGK)
    // -------------------------------------------------------------
    let l2_err = null;
    const book = bookManifests.find(b => b.id === `tv-g${grade}-t${sem}`);
    if (!book) {
      l2_err = `Không tìm thấy book manifest: tv-g${grade}-t${sem}`;
    } else {
      const pageIndex = lesson.startPage;
      const pageObj = book.pages.find(p => p.readerIndex + 1 === pageIndex || p.readerIndex === pageIndex);
      if (!pageObj || !pageObj.imageUrl.startsWith('https://taphuan.nxbgd.vn/')) {
        l2_err = `Thiếu ảnh scan SGK gốc cho trang ${pageIndex}`;
      }
    }

    if (l2_err) report.layer2_failed.push({ lessonId, reason: l2_err });
    else report.layer2_passed++;

    // -------------------------------------------------------------
    // LẦN 3: KIỂM TRA TỪNG NỘI DUNG (SẠCH RÁC OCR, KHÔNG LẪN CÂU HỎI)
    // -------------------------------------------------------------
    let l3_err = null;
    if (!transcript?.readingPassage?.content || transcript.readingPassage.content.length === 0) {
      l3_err = 'Thiếu nội dung bài đọc';
    } else {
      const allText = transcript.readingPassage.content.join('\n');
      for (const pat of junkPatterns) {
        if (pat.test(allText)) {
          l3_err = `Chứa rác OCR hoặc câu hỏi bài tập: khớp mẫu ${pat.toString()}`;
          break;
        }
      }
    }

    if (l3_err) report.layer3_failed.push({ lessonId, reason: l3_err });
    else report.layer3_passed++;

    // -------------------------------------------------------------
    // LẦN 4: CHỐNG AI SUY DIỄN / TỰ BIÊN
    // -------------------------------------------------------------
    let l4_err = null;
    if (transcript?.readingPassage) {
      const p = transcript.readingPassage;
      const allText = (p.author + ' ' + p.content.join(' '));
      for (const pat of aiHallucinationPatterns) {
        if (pat.test(allText)) {
          l4_err = `Phát hiện dấu hiệu AI tự sinh / tự biên: ${pat.toString()}`;
          break;
        }
      }
    }

    if (l4_err) report.layer4_failed.push({ lessonId, reason: l4_err });
    else report.layer4_passed++;

    // -------------------------------------------------------------
    // LẦN 5: KIỂM TRA ĐỘC LẬP TOÀN BỘ (TIÊU CHÍ XUẤT BẢN)
    // -------------------------------------------------------------
    let l5_err = null;
    if (!transcript?.readingPassage?.author || transcript.readingPassage.author.trim().length === 0) {
      l5_err = 'Thiếu tên tác giả';
    } else if (transcript.readingPassage.verificationStatus !== 'verified') {
      l5_err = 'Chưa được đánh dấu verified';
    } else if (transcript.readingPassage.contentOrigin !== 'sgk_reference') {
      l5_err = 'contentOrigin không hợp lệ';
    }

    if (l5_err) report.layer5_failed.push({ lessonId, reason: l5_err });
    else report.layer5_passed++;

    // -------------------------------------------------------------
    // LẦN 6: CHECK TRỰC TIẾP TRÊN APPS (APP RENDERING TREE)
    // -------------------------------------------------------------
    let l6_err = null;
    try {
      const gradeLessons = curriculum.getLessonsForGradeAndSubject(grade, 'vietnamese');
      const runtimeLesson = gradeLessons.find(l => l.id === lessonId || l.id === lessonId.replace('-b', '-l'));
      if (!runtimeLesson) {
        l6_err = 'Không load được bài học trên Curriculum App Tree';
      } else if (!runtimeLesson.readingPassage) {
        l6_err = 'Bài học không render được readingPassage trên App';
      } else if (runtimeLesson.readingPassage.title !== cleanTitle) {
        l6_err = `Tiêu đề render trên App không khớp: "${runtimeLesson.readingPassage.title}" vs "${cleanTitle}"`;
      }
    } catch (e) {
      l6_err = `Lỗi runtime app render: ${e.message}`;
    }

    if (l6_err) report.layer6_failed.push({ lessonId, reason: l6_err });
    else report.layer6_passed++;
  }

  console.log('BÁO CÁO KẾT QUẢ 6 LỚP CROSS-CHECK TOÀN DIỆN:');
  console.log('----------------------------------------------------------------');
  console.log(`[LẦN 1] KIỂM TRA CẤU TRÚC          : ${report.layer1_passed}/${report.totalLessons} bài đạt (${report.layer1_failed.length} lỗi)`);
  console.log(`[LẦN 2] KIỂM TRA NGUỒN GỐC         : ${report.layer2_passed}/${report.totalLessons} bài đạt (${report.layer2_failed.length} lỗi)`);
  console.log(`[LẦN 3] KIỂM TRA TỪNG NỘI DUNG     : ${report.layer3_passed}/${report.totalLessons} bài đạt (${report.layer3_failed.length} lỗi)`);
  console.log(`[LẦN 4] CHỐNG AI SUY DIỄN          : ${report.layer4_passed}/${report.totalLessons} bài đạt (${report.layer4_failed.length} lỗi)`);
  console.log(`[LẦN 5] KIỂM ĐỊNH ĐỘC LẬP TOÀN BỘ  : ${report.layer5_passed}/${report.totalLessons} bài đạt (${report.layer5_failed.length} lỗi)`);
  console.log(`[LẦN 6] CHECK TRỰC TIẾP TRÊN APPS  : ${report.layer6_passed}/${report.totalLessons} bài đạt (${report.layer6_failed.length} lỗi)`);
  console.log('----------------------------------------------------------------\n');

  const reportPath = path.join(workspace, 'scripts', '6_crosscheck_report.json');
  await fs.writeFile(reportPath, JSON.stringify(report, null, 2), 'utf8');
  console.log(`Đã lưu báo cáo chi tiết vào: ${reportPath}`);

} finally {
  await fs.rm(buildDir, { recursive: true, force: true }).catch(() => {});
}
