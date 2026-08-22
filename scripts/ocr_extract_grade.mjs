import { createWorker } from 'tesseract.js';
import { readdirSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';

const args = process.argv.slice(2);
const gradeArg = Number(args[0] || 3);
const semesterArg = Number(args[1] || 1);

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

const lessons = catalog.filter(l => l.grade === gradeArg && l.semester === semesterArg);
console.log(`Processing ${lessons.length} lessons for Grade ${gradeArg} Semester ${semesterArg}...`);

const worker = await createWorker('vie');
const extractedData = [];

for (const lesson of lessons) {
  const pagesText = [];
  // For each lesson, check its starting page and the next page
  const pagesToScan = [lesson.startPage];
  if (lesson.endPage && lesson.endPage > lesson.startPage) {
    pagesToScan.push(lesson.startPage + 1);
  }
  for (const p of pagesToScan) {
    const imgFile = getPageFile(gradeArg, semesterArg, p);
    if (imgFile) {
      const res = await worker.recognize(imgFile);
      pagesText.push({ page: p, text: res.data.text });
    }
  }
  extractedData.push({
    lessonId: lesson.id,
    lessonNumber: lesson.lessonNumber,
    title: lesson.title,
    startPage: lesson.startPage,
    endPage: lesson.endPage,
    rawOcr: pagesText,
  });
  console.log(`✓ OCR done for Lesson ${lesson.lessonNumber}: ${lesson.title}`);
}

await fs.writeFile(
  path.join(workspace, 'scripts', `ocr_raw_g${gradeArg}_t${semesterArg}.json`),
  JSON.stringify(extractedData, null, 2),
  'utf8'
);

console.log(`Saved Grade ${gradeArg} Semester ${semesterArg} OCR raw data.`);
await worker.terminate();
