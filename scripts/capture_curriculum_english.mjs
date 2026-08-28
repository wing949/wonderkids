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
  console.log('1. Going to Map...');
  const mapBtn = page.getByRole('button', { name: 'Xem Bản Đồ Đảo' });
  await mapBtn.click();
  await page.waitForTimeout(1500);

  // Click English Tab
  console.log('2. Clicking English tab...');
  const engTab = page.locator('button:has-text("Tiếng Anh")').first();
  await engTab.click();
  await page.waitForTimeout(1500);

  // Click on Unit 1 card
  console.log('3. Clicking Unit 1 card...');
  const unitCard = page.locator('h3:has-text("Unit 1")').first();
  await unitCard.click();
  await page.waitForTimeout(1000);

  // Click "Vào Làm Bài Ngay! 🚀"
  console.log('4. Clicking Vào Làm Bài Ngay! 🚀...');
  const startBtn = page.getByRole('button', { name: /Vào Làm Bài Ngay/i });
  await startBtn.click();
  await page.waitForTimeout(2000);

  // Click "Con Đã Đọc Xong - Trả Lời Câu Hỏi ⭐"
  console.log('5. Clicking Trả lời câu hỏi / Vào phần luyện tập...');
  const quizBtn = page.locator('button:has-text("Trả Lời Câu Hỏi"), button:has-text("Vào Phần Luyện Tập")').first();
  if (await quizBtn.isVisible()) {
    await quizBtn.click();
    await page.waitForTimeout(2000);
  }

  // Screenshot English Curriculum Lesson Exercise with 3D Illustration
  console.log('📸 6. Capturing English Curriculum Exercise Screen with 3D Image...');
  await page.screenshot({ path: join(OUT, '3_curriculum_english_exercise.png'), fullPage: false });

  await browser.close();
  console.log('✅ Done capturing English Curriculum Visual Exercise!');
}

main().catch(console.error);
