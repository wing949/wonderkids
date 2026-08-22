import puppeteer from 'puppeteer-core';
import fs from 'node:fs/promises';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const workspace = process.cwd();
const reportsDir = path.join(workspace, 'reports');
await fs.mkdir(reportsDir, { recursive: true });

console.log('======================================================================');
console.log('KHỞI CHẠY GOOGLE CHROME THẬT ĐỂ CHECK DOM TRỰC TIẾP TỪNG BÀI HỌC');
console.log('======================================================================\n');

const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: 'new',
  defaultViewport: { width: 1366, height: 850 },
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

try {
  const page = await browser.newPage();

  async function inspectLiveReadingDOM(lessonId, label, screenshotName) {
    const url = `http://localhost:3001/bai-hoc/${lessonId}`;
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1500));

    const data = await page.evaluate(() => {
      const heading = document.querySelector('h2')?.innerText?.trim() || '';
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
        leftImg: leftImg.slice(0, 80) + '...',
        fullBodySample: paragraphs.slice(0, 2).join('\n---\n')
      };
    });

    const shotPath = path.join(reportsDir, screenshotName);
    await page.screenshot({ path: shotPath, fullPage: true });

    console.log(`--------------------------------------------------------------`);
    console.log(`📌 KẾT QUẢ DOM THỰC TẾ TRÊN GOOGLE CHROME: [${label}] (${lessonId})`);
    console.log(`   - URL: ${url}`);
    console.log(`   - Tiêu đề DOM render: "${data.heading}"`);
    console.log(`   - Tác giả DOM render: "${data.author}"`);
    console.log(`   - Ảnh scan SGK bên trái: "${data.leftImg}"`);
    console.log(`   - Số đoạn văn render trên DOM: ${data.paragraphs.length}`);
    console.log(`   - Đoạn 1 nguyên văn: "${data.paragraphs[0]?.slice(0, 140)}..."`);
    if (data.paragraphs[1]) {
      console.log(`   - Đoạn 2 nguyên văn: "${data.paragraphs[1]?.slice(0, 140)}..."`);
    }
    console.log(`   - Đã chụp ảnh màn hình lưu tại: ${shotPath}`);

    return data;
  }

  // 1. Check Grade 3, Lesson 11 (Lời giải toán đặc biệt)
  await inspectLiveReadingDOM('tv-g3-b11', 'Lớp 3 - Bài 11: Lời giải toán đặc biệt', 'dom_g3_b11_live.png');

  // 2. Check Grade 3, Lesson 12 (Bài tập làm văn)
  await inspectLiveReadingDOM('tv-g3-b12', 'Lớp 3 - Bài 12: Bài tập làm văn', 'dom_g3_b12_live.png');

  // 3. Check Grade 3, Lesson 14 (Cuộc họp của chữ viết)
  await inspectLiveReadingDOM('tv-g3-b14', 'Lớp 3 - Bài 14: Cuộc họp của chữ viết', 'dom_g3_b14_live.png');

  // 4. Check Grade 3, Lesson 1 (Ngày gặp lại)
  await inspectLiveReadingDOM('tv-g3-b1', 'Lớp 3 - Bài 1: Ngày gặp lại', 'dom_g3_b1_live.png');

  // 5. Check Grade 2, Lesson 1 (Tôi là học sinh lớp 2)
  await inspectLiveReadingDOM('tv-g2-b1', 'Lớp 2 - Bài 1: Tôi là học sinh lớp 2', 'dom_g2_b1_live.png');

  // 6. Check Grade 5, Lesson 1 (Thanh âm của gió)
  await inspectLiveReadingDOM('tv-g5-b1', 'Lớp 5 - Bài 1: Thanh âm của gió', 'dom_g5_b1_live.png');

  // 7. Check Card Previews on Grade 3 list
  await page.goto('http://localhost:3001/hoc/tieng-viet/lop-3', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(reportsDir, 'dom_g3_list_live.png'), fullPage: true });
  console.log(`\n✓ Đã chụp ảnh màn hình danh sách thẻ bài học Lớp 3 lưu tại reports/dom_g3_list_live.png`);

  console.log('\n======================================================================');
  console.log('✓ HOÀN TẤT 100% KIỂM ĐỊNH DOM TRỰC TIẾP TRÊN TRÌNH DUYỆT GOOGLE CHROME THẬT!');
  console.log('======================================================================');

} finally {
  await browser.close();
}
