import fs from 'node:fs';
import path from 'node:path';

const rawData = JSON.parse(fs.readFileSync('scripts/ocr_raw_g3_t1.json', 'utf8'));

for (const item of rawData) {
  console.log(`\n========================================`);
  console.log(`BÀI ${item.lessonNumber}: ${item.title} (Pages: ${item.startPage} - ${item.endPage})`);
  for (const p of item.rawOcr) {
    console.log(`--- Page ${p.page} ---`);
    console.log(p.text.trim());
  }
}
