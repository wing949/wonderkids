import { createWorker } from 'tesseract.js';
import { readdirSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';

const workspace = process.cwd();
const catalog = JSON.parse(await fs.readFile(path.join(workspace, 'scripts', 'all_376_lessons_catalog.json'), 'utf8'));

console.log(`Total lessons in catalog: ${catalog.length}`);

// Map readerIndex to actual file in tmp_pages/g{grade}_t{semester}
function getPageFile(grade, semester, pageNum) {
  const folder = path.join(workspace, 'tmp_pages', `g${grade}_t${semester}`);
  try {
    const files = readdirSync(folder);
    // Usually cover page is index 1, printed page 1 is index 2, so readerIndex = pageNum + 1
    const targetPrefix = `p${pageNum + 1}_`;
    let match = files.find(f => f.startsWith(targetPrefix));
    if (!match) {
      // Try exact pageNum
      match = files.find(f => f.startsWith(`p${pageNum}_`));
    }
    if (match) return path.join(folder, match);
  } catch (e) {
    console.error(`Folder error for g${grade}_t${semester}:`, e.message);
  }
  return null;
}

const worker = await createWorker('vie');

// Extract all lessons for Grade 3 Semester 1
const g3t1Lessons = catalog.filter(l => l.grade === 3 && l.semester === 1);
console.log(`Processing ${g3t1Lessons.length} lessons for Grade 3 Semester 1...`);

const extractedData = [];

for (const lesson of g3t1Lessons) {
  const pagesText = [];
  for (const p of lesson.sourcePages) {
    const imgFile = getPageFile(3, 1, p);
    if (imgFile) {
      const res = await worker.recognize(imgFile);
      pagesText.push({ page: p, text: res.data.text });
    }
  }
  extractedData.push({
    lessonId: lesson.id,
    lessonNumber: lesson.lessonNumber,
    title: lesson.title,
    sourcePages: lesson.sourcePages,
    rawOcr: pagesText,
  });
  console.log(`✓ OCR done for Lesson ${lesson.lessonNumber}: ${lesson.title} (${lesson.sourcePages.join(', ')})`);
}

await fs.writeFile(
  path.join(workspace, 'scripts', 'g3_t1_ocr_raw.json'),
  JSON.stringify(extractedData, null, 2),
  'utf8'
);

console.log('Saved G3 T1 OCR raw data successfully.');
await worker.terminate();
