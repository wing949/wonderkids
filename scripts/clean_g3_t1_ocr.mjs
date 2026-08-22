import fs from 'node:fs';
import path from 'node:path';

const rawData = JSON.parse(fs.readFileSync('scripts/ocr_raw_g3_t1.json', 'utf8'));

// Clean OCR text helper
function cleanOcrLines(text) {
  return text
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);
}

const lessonsCleaned = [];

for (const item of rawData) {
  const allLines = [];
  for (const page of item.rawOcr) {
    allLines.push(...cleanOcrLines(page.text));
  }
  lessonsCleaned.push({
    id: item.lessonId,
    lessonNumber: item.lessonNumber,
    title: item.title,
    startPage: item.startPage,
    endPage: item.endPage,
    lines: allLines,
  });
}

fs.writeFileSync('scripts/g3_t1_extracted_lines.json', JSON.stringify(lessonsCleaned, null, 2), 'utf8');
console.log(`Cleaned ${lessonsCleaned.length} lessons for G3 T1.`);
