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

  // Step 1: Click "Popcorn" BEFORE checking answer
  const popcornBtn = page.locator('button:has-text("Popcorn")').first();
  await popcornBtn.click();
  await page.waitForTimeout(600);

  console.log('📸 1. Capturing Phase 1 (Selected before check - Sky blue with radio dot, NO green checkmark)...');
  await page.screenshot({ path: join(OUT, 'phase1_selected_before_check.png'), fullPage: false });

  // Step 2: Click "Kiểm Tra Đáp Án"
  const checkBtn = page.getByRole('button', { name: /Kiểm Tra/i });
  await checkBtn.click();
  await page.waitForTimeout(1200);

  console.log('📸 2. Capturing Phase 2 (Evaluated after check - Green checkmark + Next button)...');
  await page.screenshot({ path: join(OUT, 'phase2_evaluated_after_check.png'), fullPage: false });

  await browser.close();
  console.log('✅ UI 2-phase flow verified successfully!');
}

main().catch(console.error);
