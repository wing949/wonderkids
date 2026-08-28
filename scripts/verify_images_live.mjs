import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'reports', 'screenshots_english_visuals');

async function main() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 });
  const page = await ctx.newPage();

  // Test 1: Grade 5 Unit 1 Q2
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const grade5Btn = page.locator('header button:has-text("Lớp 5")').first();
  await grade5Btn.click();
  await page.waitForTimeout(1000);

  const mapBtn5 = page.getByRole('button', { name: 'Xem Bản Đồ Đảo' });
  await mapBtn5.click();
  await page.waitForTimeout(1500);

  const engTab5 = page.locator('button:has-text("Tiếng Anh")').first();
  await engTab5.click();
  await page.waitForTimeout(1500);

  const unit5Card = page.locator('h3:has-text("Unit 1: All About Me")').first();
  await unit5Card.click();
  await page.waitForTimeout(1000);

  const start5Btn = page.getByRole('button', { name: /Vào Làm Bài Ngay/i });
  await start5Btn.click();
  await page.waitForTimeout(1500);

  console.log('📸 Capturing Grade 5 Unit 1 Q1...');
  await page.screenshot({ path: join(OUT, 'verified_g5_u1_q1_clean.png'), fullPage: false });

  // Advance to Q2
  const firstOpt = page.locator('button[class*="rounded-3xl"]').first();
  if (await firstOpt.isVisible()) {
    await firstOpt.click();
    await page.waitForTimeout(300);
    const chkBtn = page.getByRole('button', { name: /Kiểm Tra/i });
    if (await chkBtn.isVisible()) {
      await chkBtn.click();
      await page.waitForTimeout(600);
      const nextBtn = page.getByRole('button', { name: /Tiếp Theo/i });
      if (await nextBtn.isVisible()) {
        await nextBtn.click();
        await page.waitForTimeout(600);
      }
    }
  }

  console.log('📸 Capturing Grade 5 Unit 1 Q2 (Clean sentence: I live in a ___)...');
  await page.screenshot({ path: join(OUT, 'verified_g5_u1_q2_clean.png'), fullPage: false });

  // Test 2: Grade 3 Unit 7 (Classroom Instructions)
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const grade3Btn = page.locator('header button:has-text("Lớp 3")').first();
  await grade3Btn.click();
  await page.waitForTimeout(1000);

  const mapBtn3 = page.getByRole('button', { name: 'Xem Bản Đồ Đảo' });
  await mapBtn3.click();
  await page.waitForTimeout(1500);

  const engTab3 = page.locator('button:has-text("Tiếng Anh")').first();
  await engTab3.click();
  await page.waitForTimeout(1500);

  const unit7Card = page.locator('h3:has-text("Unit 7: Classroom Instructions")').first();
  await unit7Card.click();
  await page.waitForTimeout(1000);

  const start3Btn = page.getByRole('button', { name: /Vào Làm Bài Ngay/i });
  await start3Btn.click();
  await page.waitForTimeout(1500);

  console.log('📸 Capturing Grade 3 Unit 7 Q1...');
  await page.screenshot({ path: join(OUT, 'verified_g3_u7_q1_clean.png'), fullPage: false });

  // Advance to Q2
  const firstOpt3 = page.locator('button[class*="rounded-3xl"]').first();
  if (await firstOpt3.isVisible()) {
    await firstOpt3.click();
    await page.waitForTimeout(300);
    const chkBtn = page.getByRole('button', { name: /Kiểm Tra/i });
    if (await chkBtn.isVisible()) {
      await chkBtn.click();
      await page.waitForTimeout(600);
      const nextBtn = page.getByRole('button', { name: /Tiếp Theo/i });
      if (await nextBtn.isVisible()) {
        await nextBtn.click();
        await page.waitForTimeout(600);
      }
    }
  }

  console.log('📸 Capturing Grade 3 Unit 7 Q2 (Natural question: May I ask a question?)...');
  await page.screenshot({ path: join(OUT, 'verified_g3_u7_q2_clean.png'), fullPage: false });

  await browser.close();
  console.log('✅ Visual verification complete!');
}

main().catch(console.error);
