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

  // Capture Unit 1 Q1 (Popcorn HD SGK)
  console.log('📸 1. Capturing Unit 1 Q1 (Popcorn SGK)...');
  await page.screenshot({ path: join(OUT, 'sgk_u1_q1_popcorn.png'), fullPage: false });

  // Answer Q1
  const popcornBtn = page.locator('button:has-text("Popcorn")').first();
  await popcornBtn.click();
  await page.waitForTimeout(400);
  const checkBtn = page.getByRole('button', { name: /Kiểm Tra/i });
  await checkBtn.click();
  await page.waitForTimeout(1000);

  // Click Next -> Q2 (Pasta SGK)
  const nextBtn = page.getByRole('button', { name: /Câu Tiếp Theo|Tiếp Tục/i });
  await nextBtn.click();
  await page.waitForTimeout(1500);

  console.log('📸 2. Capturing Unit 1 Q2 (Pasta SGK)...');
  await page.screenshot({ path: join(OUT, 'sgk_u1_q2_pasta.png'), fullPage: false });

  await browser.close();
  console.log('✅ Done capturing SGK cropped illustrations in UI!');
}

main().catch(console.error);
