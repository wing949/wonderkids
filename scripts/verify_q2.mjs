import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'reports', 'screenshots_english_visuals');

async function main() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1024, height: 900 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();

  // Navigate to Dashboard
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Click on "Xem Bản Đồ Đảo"
  const mapBtn = page.getByRole('button', { name: 'Xem Bản Đồ Đảo' });
  await mapBtn.click();
  await page.waitForTimeout(1500);

  // Click English Tab
  const engTab = page.locator('button:has-text("Tiếng Anh")').first();
  await engTab.click();
  await page.waitForTimeout(1500);

  // Click on Unit 1 card
  const unitCard = page.locator('h3:has-text("Unit 1")').first();
  await unitCard.click();
  await page.waitForTimeout(1000);

  // Click "Vào Làm Bài Ngay! 🚀"
  const startBtn = page.getByRole('button', { name: /Vào Làm Bài Ngay/i });
  await startBtn.click();
  await page.waitForTimeout(2000);

  // Click "Con Đã Đọc Xong - Trả Lời Câu Hỏi ⭐"
  const quizBtn = page.locator('button:has-text("Trả Lời Câu Hỏi"), button:has-text("Vào Phần Luyện Tập")').first();
  if (await quizBtn.isVisible()) {
    await quizBtn.click();
    await page.waitForTimeout(2000);
  }

  // Choose option "Bill"
  const opt = page.locator('button:has-text("Bill"), div:has-text("Bill")').last();
  await opt.click();
  await page.waitForTimeout(500);

  // Click "Kiểm Tra Đáp Án ✨"
  const checkBtn = page.locator('button:has-text("Kiểm Tra Đáp Án")').first();
  await checkBtn.click();
  await page.waitForTimeout(1000);

  // Click "Câu Tiếp Theo" / "Tiếp Tục"
  const nextBtn = page.locator('button:has-text("Tiếp"), button:has-text("Câu tiếp theo")').first();
  if (await nextBtn.isVisible()) {
    await nextBtn.click();
    await page.waitForTimeout(1500);
  }

  // Screenshot Question 2
  console.log('📸 Capturing Question 2 of English Curriculum...');
  await page.screenshot({ path: join(OUT, '4_curriculum_english_q2.png'), fullPage: false });

  await browser.close();
  console.log('Done!');
}

main().catch(console.error);
