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

  // ---------------- UNIT 1: BIRTHDAY PARTY (POPCORN) ----------------
  console.log('4. Testing Unit 1: Birthday Party...');
  const unit1Card = page.locator('h3:has-text("Unit 1: At My Birthday Party")').first();
  await unit1Card.click();
  await page.waitForTimeout(1000);

  const startBtn1 = page.getByRole('button', { name: /Vào Làm Bài Ngay/i });
  await startBtn1.click();
  await page.waitForTimeout(1500);

  await page.screenshot({ path: join(OUT, 'fixed_u1_birthday_popcorn.png'), fullPage: false });

  // Go back
  const backBtn1 = page.locator('button').first();
  await backBtn1.click();
  await page.waitForTimeout(1000);

  // ---------------- UNIT 2: IN THE BACKYARD (YO-YO) ----------------
  console.log('5. Testing Unit 2: In the Backyard...');
  const unit2Card = page.locator('h3:has-text("Unit 2: In the Backyard")').first();
  await unit2Card.click();
  await page.waitForTimeout(1000);

  const startBtn2 = page.getByRole('button', { name: /Vào Làm Bài Ngay/i });
  await startBtn2.click();
  await page.waitForTimeout(1500);

  await page.screenshot({ path: join(OUT, 'fixed_u2_backyard_yoyo.png'), fullPage: false });

  // Go back
  const backBtn2 = page.locator('button').first();
  await backBtn2.click();
  await page.waitForTimeout(1000);

  // ---------------- UNIT 9: IN THE GROCERY STORE (GRAPES) ----------------
  console.log('6. Testing Unit 9: In the Grocery Store...');
  const unit9Card = page.locator('h3:has-text("Unit 9: In the Grocery Store")').first();
  if (await unit9Card.isVisible()) {
    await unit9Card.click();
    await page.waitForTimeout(1000);

    const startBtn9 = page.getByRole('button', { name: /Vào Làm Bài Ngay/i });
    await startBtn9.click();
    await page.waitForTimeout(1500);

    await page.screenshot({ path: join(OUT, 'fixed_u9_grocery_grapes.png'), fullPage: false });
  }

  await browser.close();
  console.log('✅ Done capturing all 3 fixed screens!');
}

main().catch(console.error);
