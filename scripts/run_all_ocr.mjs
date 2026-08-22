import { createWorker } from 'tesseract.js';
import { readdirSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';

const workspace = process.cwd();
const catalog = JSON.parse(await fs.readFile(path.join(workspace, 'scripts', 'all_376_lessons_catalog.json'), 'utf8'));

function getPageFile(grade, semester, pageNum) {
  const folder = path.join(workspace, 'tmp_pages', `g${grade}_t${semester}`);
  try {
    const files = readdirSync(folder);
    const targetPrefix = `p${pageNum + 1}_`;
    let match = files.find(f => f.startsWith(targetPrefix));
    if (!match) {
      match = files.find(f => f.startsWith(`p${pageNum}_`));
    }
    if (match) return path.join(folder, match);
  } catch (e) {
    console.error(`Folder error for g${grade}_t${semester}:`, e.message);
  }
  return null;
}

const targets = [
  { grade: 3, semester: 2 },
  { grade: 4, semester: 1 },
  { grade: 4, semester: 2 },
  { grade: 5, semester: 1 },
  { grade: 5, semester: 2 },
  { grade: 2, semester: 1 },
  { grade: 2, semester: 2 },
  { grade: 1, semester: 1 },
  { grade: 1, semester: 2 },
];

const worker = await createWorker('vie');

for (const target of targets) {
  const { grade, semester } = target;
  const lessons = catalog.filter(l => l.grade === grade && l.semester === semester);
  console.log(`\nStarting OCR for Grade ${grade} Semester ${semester} (${lessons.length} lessons)...`);

  const extractedData = [];
  for (const lesson of lessons) {
    const pagesText = [];
    const pagesToScan = [lesson.startPage];
    if (lesson.endPage && lesson.endPage > lesson.startPage) {
      pagesToScan.push(lesson.startPage + 1);
    }
    for (const p of pagesToScan) {
      const imgFile = getPageFile(grade, semester, p);
      if (imgFile) {
        try {
          const res = await worker.recognize(imgFile);
          pagesText.push({ page: p, text: res.data.text });
        } catch (err) {
          console.error(`OCR error on page ${p} (G${grade} T${semester}):`, err.message);
        }
      }
    }
    extractedData.push({
      lessonId: lesson.id,
      lessonNumber: lesson.lessonNumber,
      title: lesson.title,
      startPage: lesson.startPage,
      endPage: lesson.endPage,
      sourcePages: lesson.sourcePages,
      rawOcr: pagesText,
    });
    console.log(`[G${grade} T${semester}] OCR done for: ${lesson.title}`);
  }

  await fs.writeFile(
    path.join(workspace, 'scripts', `ocr_raw_g${grade}_t${semester}.json`),
    JSON.stringify(extractedData, null, 2),
    'utf8'
  );
  console.log(`✓ Saved Grade ${grade} Semester ${semester} OCR raw data.`);
}

await worker.terminate();
console.log('ALL OCR EXTRACTION COMPLETED.');
