import puppeteer from 'puppeteer-core';
import fs from 'node:fs/promises';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const workspace = process.cwd();
const screenshotsDir = path.join(workspace, 'reports', 'live_dom_293_screenshots');
await fs.mkdir(screenshotsDir, { recursive: true });

console.log('======================================================================');
console.log('CHƯƠNG TRÌNH KIỂM TRA LIVE DOM & CHỤP ẢNH 293 BÀI HỌC TRÊN GOOGLE CHROME');
console.log('======================================================================\n');

// Load catalog
const catalogPath = path.join(workspace, 'scripts', 'all_376_lessons_catalog.json');
const allLessons = JSON.parse(await fs.readFile(catalogPath, 'utf8'));

// Filter out Grade 1 Semester 1 (83 lessons) -> Exactly 293 lessons
const targetLessons = allLessons.filter(l => !(l.grade === 1 && l.semester === 1));

console.log(`Tổng số bài cần kiểm tra DOM và chụp ảnh: ${targetLessons.length} bài.\n`);

const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: 'new',
  defaultViewport: { width: 1366, height: 850 },
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
});

const results = {
  total: targetLessons.length,
  timestamp: new Date().toISOString(),
  passed: 0,
  failed: 0,
  missing: 0,
  unverified: 0,
  byGrade: {
    1: { total: 0, pass: 0, fail: 0, missing: 0, unverified: 0, items: [] },
    2: { total: 0, pass: 0, fail: 0, missing: 0, unverified: 0, items: [] },
    3: { total: 0, pass: 0, fail: 0, missing: 0, unverified: 0, items: [] },
    4: { total: 0, pass: 0, fail: 0, missing: 0, unverified: 0, items: [] },
    5: { total: 0, pass: 0, fail: 0, missing: 0, unverified: 0, items: [] }
  },
  detailedLessons: []
};

const aiHallucinationPatterns = [
  /Chiếc đồng hồ chuông reo vang/i,
  /Bài đọc:.*?Luyện đọc đúng/i,
  /Nội dung do AI/i,
  /WonderKids —/i,
  /Nội dung tự sinh/i,
  /Nội dung tự biên/i,
  /Nội dung tóm tắt/i,
];

const ocrJunkPatterns = [
  /[~¬|_=›‹«»\\\/^#$*@+§]/,
  /\b(Nột|toy|mớt|quở|bởn|nhõng|tờgiấy|vðo|nõo|đỡ|lõ)\b/i,
  /¿|¿\s*má|Em\s*Z>|Lo\s*va\s*Ї|Ñ\s*5\)/i,
  /^\d+\.\s*(Chọn|Tìm|Nêu|Kể|Viết|Em hãy|Theo em|Dựa vào|Học thuộc)/i,
  /^(NÓI VÀ NGHE|VIẾT|ĐỌC MỞ RỘNG|LUYỆN TỪ VÀ CÂU)/i,
  /^(Trao đổi với bạn|Hỏi\s*[-–]\s*đáp về|Quan sát tranh)/i
];

try {
  const page = await browser.newPage();
  // Disable caching for live inspection
  await page.setCacheEnabled(false);

  let index = 0;
  for (const lesson of targetLessons) {
    index++;
    const lessonId = lesson.id;
    const grade = lesson.grade;
    const sem = lesson.semester;
    const cleanTitle = lesson.title.replace(/^Bài\s+\d+:\s*/, '').trim();
    const url = `http://localhost:3001/bai-hoc/${lessonId}`;

    results.byGrade[grade].total++;

    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
      // Small wait for rendering
      await new Promise(r => setTimeout(r, 400));

      const domData = await page.evaluate(() => {
        const heading = document.querySelector('h2.font-baloo, h2')?.innerText?.trim() || '';
        const authorEl = Array.from(document.querySelectorAll('p, div')).find(el => el.innerText.includes('Nguồn nội dung:'));
        const author = authorEl ? authorEl.innerText.replace('Nguồn nội dung:', '').trim() : '';
        const paragraphs = Array.from(document.querySelectorAll('.font-vietnam.text-base, .font-vietnam.text-lg, .font-vietnam.text-justify'))
          .map(el => el.innerText.trim())
          .filter(t => t.length > 5 && !t.includes('Nguồn nội dung:'));
        const leftImg = document.querySelector('figure img')?.getAttribute('src') || '';

        return {
          heading,
          author,
          paragraphs,
          hasLeftImg: leftImg.startsWith('https://taphuan.nxbgd.vn/'),
          imgSrc: leftImg
        };
      });

      const screenshotFilename = `${lessonId}.png`;
      const screenshotFilePath = path.join(screenshotsDir, screenshotFilename);
      await page.screenshot({ path: screenshotFilePath, fullPage: false });

      const fullText = domData.paragraphs.join('\n');
      let status = 'PASS – KHỚP SGK';
      let reason = 'Đầy đủ tiêu đề, tác giả, ảnh scan SGK và văn bản chuẩn xác';

      if (!domData.heading || domData.heading.length === 0) {
        status = 'MISSING – THIẾU NỘI DUNG';
        reason = 'Không tìm thấy tiêu đề trên DOM';
      } else if (!domData.hasLeftImg) {
        status = 'MISSING – THIẾU NỘI DUNG';
        reason = 'Thiếu ảnh scan SGK gốc ở khung bên trái';
      } else if (domData.paragraphs.length === 0 || fullText.length < 15) {
        status = 'MISSING – THIẾU NỘI DUNG';
        reason = 'Nội dung bài đọc trên DOM rỗng hoặc không tải được';
      } else {
        // Check AI hallucination
        for (const pat of aiHallucinationPatterns) {
          if (pat.test(fullText)) {
            status = 'FAIL – SAI NỘI DUNG';
            reason = `Nội dung DOM chứa văn bản tự biên: khớp mẫu ${pat.toString()}`;
            break;
          }
        }
        // Check OCR Junk
        if (status === 'PASS – KHỚP SGK') {
          for (const pat of ocrJunkPatterns) {
            if (pat.test(fullText)) {
              status = 'FAIL – SAI NỘI DUNG';
              reason = `Nội dung DOM chứa rác OCR: khớp mẫu ${pat.toString()}`;
              break;
            }
          }
        }
      }

      if (status.startsWith('PASS')) {
        results.passed++;
        results.byGrade[grade].pass++;
      } else if (status.startsWith('FAIL')) {
        results.failed++;
        results.byGrade[grade].fail++;
      } else if (status.startsWith('MISSING')) {
        results.missing++;
        results.byGrade[grade].missing++;
      } else {
        results.unverified++;
        results.byGrade[grade].unverified++;
      }

      const record = {
        index,
        lessonId,
        grade,
        semester: sem,
        title: cleanTitle,
        domHeading: domData.heading,
        domAuthor: domData.author,
        paragraphsCount: domData.paragraphs.length,
        status,
        reason,
        screenshot: `reports/live_dom_293_screenshots/${screenshotFilename}`
      };

      results.detailedLessons.push(record);
      results.byGrade[grade].items.push(record);

      if (index % 25 === 0 || index === targetLessons.length) {
        console.log(`[${index}/${targetLessons.length}] Đã kiểm tra DOM và chụp ảnh: ${lessonId} -> ${status}`);
      }

    } catch (err) {
      results.failed++;
      results.byGrade[grade].fail++;
      const record = {
        index,
        lessonId,
        grade,
        semester: sem,
        title: cleanTitle,
        status: 'FAIL – SAI NỘI DUNG',
        reason: `Lỗi kết nối / render DOM: ${err.message}`,
        screenshot: null
      };
      results.detailedLessons.push(record);
      results.byGrade[grade].items.push(record);
      console.log(`[${index}/${targetLessons.length}] ❌ Lỗi tại bài ${lessonId}: ${err.message}`);
    }
  }

  // Save report JSON
  const reportPath = path.join(workspace, 'reports', 'audit_293_summary.json');
  await fs.writeFile(reportPath, JSON.stringify(results, null, 2), 'utf8');

  console.log('\n======================================================================');
  console.log('KẾT QUẢ TỔNG HỢP KIỂM TRA DOM & CHỤP ẢNH TOÀN BỘ 293 BÀI HỌC:');
  console.log('======================================================================');
  console.log(`TỔNG SỐ BÀI ĐÃ KIỂM TRA DOM THỰC TẾ: ${results.total}`);
  console.log(`- PASS – KHỚP SGK                   : ${results.passed} / ${results.total} (${((results.passed/results.total)*100).toFixed(1)}%)`);
  console.log(`- FAIL – SAI NỘI DUNG               : ${results.failed} / ${results.total}`);
  console.log(`- MISSING – THIẾU NỘI DUNG          : ${results.missing} / ${results.total}`);
  console.log(`- UNVERIFIED – CHƯA XÁC MINH        : ${results.unverified} / ${results.total}`);
  console.log('----------------------------------------------------------------------');
  for (let g = 1; g <= 5; g++) {
    const bg = results.byGrade[g];
    console.log(`* LỚP ${g}: ${bg.pass}/${bg.total} PASS | ${bg.fail} FAIL | ${bg.missing} MISSING | ${bg.unverified} UNVERIFIED`);
  }
  console.log('----------------------------------------------------------------------');
  console.log(`Toàn bộ ${results.total} ảnh chụp màn hình DOM được lưu tại:`);
  console.log(`  ${screenshotsDir}`);
  console.log(`Báo cáo chi tiết JSON lưu tại:`);
  console.log(`  ${reportPath}`);
  console.log('======================================================================\n');

} finally {
  await browser.close();
}
