import { createWorker } from 'tesseract.js';
import { readdirSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';

const workspace = process.cwd();
const catalog = JSON.parse(await fs.readFile(path.join(workspace, 'scripts', 'all_376_lessons_catalog.json'), 'utf8'));

const worker = await createWorker('vie');

function getPagePath(folder, pageNum) {
  // In tmp_pages, page N is file p{N+1}_
  const targetPrefix = `p${pageNum + 1}_`;
  const files = readdirSync(folder);
  const match = files.find(f => f.startsWith(targetPrefix));
  if (match) return path.join(folder, match);
  // fallback to p{pageNum}_
  const fallback = files.find(f => f.startsWith(`p${pageNum}_`));
  return fallback ? path.join(folder, fallback) : null;
}

const g3t1Lessons = catalog.filter(l => l.grade === 3 && l.semester === 1);
const folder = path.join(workspace, 'tmp_pages', 'g3_t1');

const results = [];

for (const lesson of g3t1Lessons) {
  const startP = lesson.startPage;
  const endP = lesson.endPage || lesson.startPage;
  const rawPages = [];
  
  for (let p = startP; p <= endP; p++) {
    const filePath = getPagePath(folder, p);
    if (filePath) {
      const res = await worker.recognize(filePath);
      rawPages.push({ page: p, file: path.basename(filePath), text: res.data.text });
    }
  }
  
  results.push({
    id: lesson.id,
    title: lesson.title,
    startPage: startP,
    endPage: endP,
    pages: rawPages
  });
  console.log(`✓ Scanned full pages (${startP}..${endP}) for: ${lesson.title}`);
}

await fs.writeFile(
  path.join(workspace, 'scripts', 'g3_t1_full_pages_ocr.json'),
  JSON.stringify(results, null, 2),
  'utf8'
);

console.log('Done scanning all Grade 3 Semester 1 full pages!');
await worker.terminate();
