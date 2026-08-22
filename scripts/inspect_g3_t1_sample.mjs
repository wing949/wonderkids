import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('scripts/g3_t1_extracted_lines.json', 'utf8'));

for (let i = 0; i < 10; i++) {
  const item = data[i];
  console.log(`\n========================================`);
  console.log(`BÀI ${item.lessonNumber}: ${item.title}`);
  console.log(item.lines.slice(0, 30).join('\n'));
}
