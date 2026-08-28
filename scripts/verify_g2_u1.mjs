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
  console.log('4. Clicking Unit 1: At my birthday party card...');
  const unitCard = page.locator('h3:has-text("Unit 1: At my birthday party")').first();
  await unitCard.click();
  await page.waitForTimeout(1000);

  // Click "Vào Làm Bài Ngay! 🚀"
  console.log('5. Clicking Vào Làm Bài Ngay! 🚀...');
  const startBtn = page.getByRole('button', { name: /Vào Làm Bài Ngay/i });
  await startBtn.click();
  await page.waitForTimeout(2000);

  // Screenshot English Grade 2 Unit 1 Exercise with 3D Illustration
  console.log('📸 6. Capturing English Grade 2 Unit 1 Exercise Screen...');
  await page.screenshot({ path: join(OUT, '5_english_g2_u1_birthday_party.png'), fullPage: false });

  await browser.close();
  console.log('✅ Done capturing Grade 2 Unit 1 Birthday Party!');
}

main().catch(console.error);
