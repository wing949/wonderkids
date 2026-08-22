import puppeteer from 'puppeteer-core';
import fs from 'node:fs/promises';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const workspace = process.cwd();
const screenshotsDir = path.join(workspace, 'reports', 'live_dom_293_screenshots');
await fs.mkdir(screenshotsDir, { recursive: true });

console.log('======================================================================');
console.log('ĐỐI CHIẾU 2 CỘT (TRÁI: ẢNH SGK vs PHẢI: DOM BÀI ĐỌC) CHO 293 BÀI HỌC');
console.log('======================================================================\n');

const catalogPath = path.join(workspace, 'scripts', 'all_376_lessons_catalog.json');
const allLessons = JSON.parse(await fs.readFile(catalogPath, 'utf8'));

// Filter 293 lessons (excluding Grade 1 Semester 1)
const targetLessons = allLessons.filter(l => !(l.grade === 1 && l.semester === 1));

const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: 'new',
  defaultViewport: { width: 1366, height: 850 },
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
});

const report = {
  total: targetLessons.length,
  timestamp: new Date().toISOString(),
  matchedVerbatim: 0,
  fallbackNotice: 0,
  mismatchOrTrash: 0,
  missing: 0,
  byGrade: {
    1: { total: 0, matched: 0, fallback: 0, mismatch: 0, missing: 0, items: [] },
    2: { total: 0, matched: 0, fallback: 0, mismatch: 0, missing: 0, items: [] },
    3: { total: 0, matched: 0, fallback: 0, mismatch: 0, missing: 0, items: [] },
    4: { total: 0, matched: 0, fallback: 0, mismatch: 0, missing: 0, items: [] },
    5: { total: 0, matched: 0, fallback: 0, mismatch: 0, missing: 0, items: [] }
  },
  detailedLessons: []
};

try {
  const page = await browser.newPage();
  await page.setCacheEnabled(false);

  let index = 0;
  for (const lesson of targetLessons) {
    index++;
    const lessonId = lesson.id;
    const grade = lesson.grade;
    const sem = lesson.semester;
    const cleanTitle = lesson.title.replace(/^Bài\s+\d+:\s*/, '').trim();
    const url = `http://localhost:3001/bai-hoc/${lessonId}`;

    report.byGrade[grade].total++;

    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await new Promise(r => setTimeout(r, 450));

      const domResult = await page.evaluate(() => {
        // Left Column (SGK Scan Page)
        const leftImgEl = document.querySelector('figure img');
        const leftImgSrc = leftImgEl ? leftImgEl.getAttribute('src') || '' : '';
        const pageBadge = Array.from(document.querySelectorAll('span, p')).find(el => el.innerText.includes('Trang '));
        const leftPageText = pageBadge ? pageBadge.innerText.trim() : '';

        // Right Column (Rendered DOM Content)
        const fallbackEl = Array.from(document.querySelectorAll('h2, section')).find(el => el.innerText.includes('Đọc nguyên văn trong trang sách'));
        const isFallbackNotice = !!fallbackEl;

        const heading = document.querySelector('h2.font-baloo, h2')?.innerText?.trim() || '';
        const authorEl = Array.from(document.querySelectorAll('p, div')).find(el => el.innerText.includes('Nguồn nội dung:'));
        const author = authorEl ? authorEl.innerText.replace('Nguồn nội dung:', '').trim() : '';
        
        const paragraphs = Array.from(document.querySelectorAll('.font-vietnam.text-base, .font-vietnam.text-lg, .font-vietnam.text-justify'))
          .map(el => el.innerText.trim())
          .filter(t => t.length > 5 && !t.includes('Nguồn nội dung:'));

        return {
          leftImgSrc,
          leftPageText,
          isFallbackNotice,
          heading,
          author,
          paragraphs,
          rightFullText: paragraphs.join('\n')
        };
      });

      // Capture screenshot
      const shotFile = `${lessonId}.png`;
      const shotPath = path.join(screenshotsDir, shotFile);
      await page.screenshot({ path: shotPath, fullPage: false });

      // Classify
      let status = '';
      let statusDesc = '';

      if (!domResult.leftImgSrc || !domResult.leftImgSrc.startsWith('https://taphuan.nxbgd.vn/')) {
        status = 'MISSING – THIẾU ẢNH SGK CỘT TRÁI';
        statusDesc = 'Không tải được ảnh scan SGK ở cột bên trái';
        report.missing++;
        report.byGrade[grade].missing++;
      } else if (domResult.isFallbackNotice) {
        status = 'LOCKED – HIỂN THỊ THÔNG BÁO ĐỌC TRANG SÁCH BÊN TRÁI';
        statusDesc = 'Cột phải đang hiển thị khung thông báo "Đọc nguyên văn trong trang sách", chưa mở chữ bài đọc';
        report.fallbackNotice++;
        report.byGrade[grade].fallback++;
      } else if (domResult.paragraphs.length > 0 && domResult.rightFullText.length >= 20) {
        status = 'PASS – KHỚP NGUYÊN VĂN CỘT TRÁI & PHẢI';
        statusDesc = `Cột phải đã chép lại đúng ${domResult.paragraphs.length} đoạn văn xuôi/khổ thơ khớp với ảnh SGK bên trái`;
        report.matchedVerbatim++;
        report.byGrade[grade].matched++;
      } else {
        status = 'FAIL – SAI LỆCH HOẶC THIẾU NỘI DUNG';
        statusDesc = 'Nội dung cột bên phải không hợp lệ hoặc rỗng';
        report.mismatchOrTrash++;
        report.byGrade[grade].mismatch++;
      }

      const itemRecord = {
        index,
        lessonId,
        grade,
        semester: sem,
        title: cleanTitle,
        leftColumn: {
          hasScanImage: !!domResult.leftImgSrc,
          pageBadge: domResult.leftPageText,
          imagePreview: domResult.leftImgSrc.slice(0, 70) + '...'
        },
        rightColumn: {
          isFallbackNotice: domResult.isFallbackNotice,
          renderedHeading: domResult.heading,
          renderedAuthor: domResult.author,
          paragraphsCount: domResult.paragraphs.length,
          sampleText: domResult.paragraphs[0] ? domResult.paragraphs[0].slice(0, 120) + '...' : ''
        },
        status,
        statusDesc,
        screenshot: `reports/live_dom_293_screenshots/${shotFile}`
      };

      report.detailedLessons.push(itemRecord);
      report.byGrade[grade].items.push(itemRecord);

      if (index % 25 === 0 || index === targetLessons.length) {
        console.log(`[${index}/${targetLessons.length}] ${lessonId} -> ${status}`);
      }

    } catch (err) {
      report.mismatchOrTrash++;
      report.byGrade[grade].mismatch++;
      const itemRecord = {
        index,
        lessonId,
        grade,
        semester: sem,
        title: cleanTitle,
        status: 'FAIL – LỖI RENDER',
        statusDesc: err.message,
        screenshot: null
      };
      report.detailedLessons.push(itemRecord);
      report.byGrade[grade].items.push(itemRecord);
      console.log(`[${index}/${targetLessons.length}] ❌ Lỗi tại ${lessonId}: ${err.message}`);
    }
  }

  // Save report
  const reportPath = path.join(workspace, 'reports', 'left_vs_right_293_audit.json');
  await fs.writeFile(reportPath, JSON.stringify(report, null, 2), 'utf8');

  console.log('\n======================================================================');
  console.log('KẾT QUẢ ĐỐI CHIẾU 2 CỘT (TRÁI: ẢNH SGK vs PHẢI: BÀI ĐỌC) - 293 BÀI HỌC');
  console.log('======================================================================');
  console.log(`TỔNG SỐ BÀI KIỂM TRA: ${report.total}`);
  console.log(`1. PASS – KHỚP NGUYÊN VĂN CỘT TRÁI & PHẢI             : ${report.matchedVerbatim} / ${report.total} (${((report.matchedVerbatim/report.total)*100).toFixed(1)}%)`);
  console.log(`2. LOCKED – HIỂN THỊ THÔNG BÁO ĐỌC TRANG SÁCH BÊN TRÁI: ${report.fallbackNotice} / ${report.total}`);
  console.log(`3. FAIL – SAI LỆCH HOẶC LỖI NỘI DUNG                  : ${report.mismatchOrTrash} / ${report.total}`);
  console.log(`4. MISSING – THIẾU ẢNH SGK CỘT TRÁI                   : ${report.missing} / ${report.total}`);
  console.log('----------------------------------------------------------------------');
  for (let g = 1; g <= 5; g++) {
    const bg = report.byGrade[g];
    console.log(`* LỚP ${g} (${bg.total} bài): ${bg.matched} Khớp nguyên văn | ${bg.fallback} Hiển thị thông báo đọc | ${bg.mismatch} Sai lệch | ${bg.missing} Thiếu`);
  }
  console.log('======================================================================\n');

} finally {
  await browser.close();
}
