import { chromium } from 'playwright';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'reports', 'screenshots_english_visuals');

async function main() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 430, height: 932 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();

  // 1. Open English Curriculum on Map or direct route
  console.log('Navigating to English Grade 1 Unit 1...');
  await page.goto('http://localhost:3000/ban-do?subject=english&grade=1', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Click on the first lesson node on the map
  const firstNode = page.locator('button:has-text("Bài 1"), button:has-text("Unit 1"), [data-lesson-id]').first();
  if (await firstNode.isVisible()) {
    await firstNode.click();
    await page.waitForTimeout(1500);
    // Click "Vào Học Ngay" or "Luyện tập"
    const startBtn = page.getByRole('button', { name: /Vào Học Ngay|Bắt đầu|Học Ngay/i });
    if (await startBtn.isVisible()) {
      await startBtn.click();
      await page.waitForTimeout(2000);
    }
  }

  // Screenshot English Lesson Question with 3D Visual
  console.log('📸 Capturing English Unit 1 Question with 3D Illustration...');
  await page.screenshot({ path: join(OUT, '1_english_unit1_visual_exercise.png'), fullPage: false });

  // 2. Open Practice Portal - English Practice Pack
  console.log('Navigating to Practice Portal English Pack...');
  await page.goto('http://localhost:3000/luyen-de', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  // Select "Tiếng Anh" in subject dropdown or button
  const subjectSelect = page.locator('select').first();
  if (await subjectSelect.isVisible()) {
    await subjectSelect.selectOption({ label: 'Tiếng Anh' }).catch(() => {});
  }

  // Click "Bắt đầu luyện"
  const practiceBtn = page.getByRole('button', { name: /Bắt đầu luyện/i });
  if (await practiceBtn.isVisible()) {
    await practiceBtn.click();
    await page.waitForTimeout(2000);
  }

  console.log('📸 Capturing English Practice Question with 3D Visual...');
  await page.screenshot({ path: join(OUT, '2_english_practice_visual.png'), fullPage: false });

  await browser.close();
  console.log('✅ Hoàn tất chụp ảnh minh họa Tiếng Anh!');
}

main().catch(console.error);
