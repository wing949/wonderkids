import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'reports', 'screenshots_english_visuals');

async function main() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 });
  const page = await ctx.newPage();

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Switch to Grade 2
  const grade2Btn = page.locator('header button:has-text("Lớp 2")').first();
  await grade2Btn.click();
  await page.waitForTimeout(1000);

  // Map -> English tab -> Unit 1
  const mapBtn = page.getByRole('button', { name: 'Xem Bản Đồ Đảo' });
  await mapBtn.click();
  await page.waitForTimeout(1500);

  const engTab = page.locator('button:has-text("Tiếng Anh")').first();
  await engTab.click();
  await page.waitForTimeout(1500);

  const unitCard = page.locator('h3:has-text("Unit 1: At My Birthday Party")').first();
  await unitCard.click();
  await page.waitForTimeout(1000);

  const startBtn = page.getByRole('button', { name: /Vào Làm Bài Ngay/i });
  await startBtn.click();
  await page.waitForTimeout(1500);

  // Answer Q1
  const popcornBtn = page.locator('button:has-text("Popcorn")').first();
  await popcornBtn.click();
  await page.waitForTimeout(500);
  const checkBtn = page.getByRole('button', { name: /Kiểm Tra/i });
  await checkBtn.click();
  await page.waitForTimeout(1200);

  // Click Next
  const nextBtn = page.getByRole('button', { name: /Câu Tiếp Theo|Tiếp Tục/i });
  await nextBtn.click();
  await page.waitForTimeout(1500);

  console.log('📸 Capturing Question 2...');
  await page.screenshot({ path: join(OUT, '10q_q2_screen.png'), fullPage: false });

  await browser.close();
  console.log('✅ Done!');
}

main().catch(console.error);
