import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'reports', 'screenshots_english_visuals');

async function main() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 });
  const page = await ctx.newPage();

  // Navigate to Dashboard
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Click "Lớp 2" pill in Header
  console.log('1. Switching to Lớp 2...');
  const grade2Btn = page.locator('header button:has-text("Lớp 2")').first();
  await grade2Btn.click();
  await page.waitForTimeout(1000);

  // Click on "Xem Bản Đồ Đảo"
  console.log('2. Going to Map...');
  const mapBtn = page.getByRole('button', { name: 'Xem Bản Đồ Đảo' });
  await mapBtn.click();
  await page.waitForTimeout(1500);

  // Click English Tab
  console.log('3. Clicking English tab...');
  const engTab = page.locator('button:has-text("Tiếng Anh")').first();
  await engTab.click();
  await page.waitForTimeout(1500);

  // Click on Unit 1: "At my birthday party"
  console.log('4. Clicking Unit 1: Birthday Party...');
  const unitCard = page.locator('h3:has-text("Unit 1: At My Birthday Party")').first();
  await unitCard.click();
  await page.waitForTimeout(1000);

  // Click "Vào Làm Bài Ngay! 🚀"
  console.log('5. Clicking Vào Làm Bài Ngay! 🚀...');
  const startBtn = page.getByRole('button', { name: /Vào Làm Bài Ngay/i });
  await startBtn.click();
  await page.waitForTimeout(1500);

  // Check Question 1 (1 / 10)
  console.log('📸 6. Capturing Question 1 of 10...');
  await page.screenshot({ path: join(OUT, '10q_step1.png'), fullPage: false });

  // Answer Q1 correctly (Popcorn)
  const popcornBtn = page.locator('button:has-text("Popcorn")').first();
  if (await popcornBtn.isVisible()) {
    await popcornBtn.click();
    await page.waitForTimeout(500);
    const checkBtn = page.getByRole('button', { name: /Kiểm Tra/i });
    await checkBtn.click();
    await page.waitForTimeout(1000);
    const nextBtn = page.getByRole('button', { name: /Tiếp Tục/i });
    if (await nextBtn.isVisible()) {
      await nextBtn.click();
      await page.waitForTimeout(1500);
    }
  }

  // Check Question 2 (2 / 10)
  console.log('📸 7. Capturing Question 2 of 10...');
  await page.screenshot({ path: join(OUT, '10q_step2.png'), fullPage: false });

  await browser.close();
  console.log('✅ Done testing 10 questions progression!');
}

main().catch(console.error);
