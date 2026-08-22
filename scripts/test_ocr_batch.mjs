import { createWorker } from 'tesseract.js';
import fs from 'node:fs/promises';
import path from 'node:path';
import { readdirSync } from 'node:fs';

const workspace = process.cwd();
const catalog376 = JSON.parse(await fs.readFile(path.join(workspace, 'scripts', 'all_376_lessons_catalog.json'), 'utf8'));

console.log(`Starting OCR verbatim extraction for ${catalog376.length} lessons...`);

const worker = await createWorker('vie');

// Map to find image files in tmp_pages/g{grade}_t{semester}/
function findPageImage(grade, semester, pageNum) {
  const folder = path.join(workspace, 'tmp_pages', `g${grade}_t${semester}`);
  try {
    const files = readdirSync(folder);
    // Try readerIndex or printed page
    // Usually image filename is p{readerIndex}_{id}-page-{readerIndex}-...
    const match = files.find(f => f.startsWith(`p${pageNum}_`) || f.includes(`-page-${pageNum}-`));
    if (match) return path.join(folder, match);
    // Also try pageNum + 1 (for cover offset)
    const matchOffset = files.find(f => f.startsWith(`p${pageNum+1}_`));
    if (matchOffset) return path.join(folder, matchOffset);
  } catch {}
  return null;
}

// Let's test on first 5 lessons of G3 T1
for (let i = 0; i < 8; i++) {
  const lesson = catalog376.find(l => l.grade === 3 && l.semester === 1 && l.lessonNumber === i + 1);
  if (!lesson) continue;
  const imgPath = findPageImage(3, 1, lesson.startPage + 1); // readerIndex is usually startPage + 1
  if (imgPath) {
    const res = await worker.recognize(imgPath);
    console.log(`\n========================================`);
    console.log(`BÀI ${lesson.lessonNumber}: ${lesson.title} (Page ${lesson.startPage})`);
    console.log(`File: ${imgPath}`);
    console.log(`--- OCR TEXT ---`);
    console.log(res.data.text.slice(0, 500));
  }
}

await worker.terminate();
