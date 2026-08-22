import { createWorker } from 'tesseract.js';
import { readdirSync } from 'node:fs';
import path from 'node:path';

const workspace = process.cwd();
const worker = await createWorker('vie');

const books = [
  'g1_t1', 'g1_t2',
  'g2_t1', 'g2_t2',
  'g3_t1', 'g3_t2',
  'g4_t1', 'g4_t2',
  'g5_t1', 'g5_t2'
];

for (const b of books) {
  const folder = path.join(workspace, 'tmp_pages', b);
  const files = readdirSync(folder).filter(f => f.endsWith('.png'));
  
  // Find file p10 or p11 to see what printed page number is at the bottom
  const sampleFile = files.find(f => f.startsWith('p10_')) || files.find(f => f.startsWith('p11_'));
  if (sampleFile) {
    const res = await worker.recognize(path.join(folder, sampleFile));
    const lines = res.data.text.trim().split('\n').filter(l => l.trim().length > 0);
    const bottomLines = lines.slice(-3).join(' | ');
    const topLines = lines.slice(0, 3).join(' | ');
    console.log(`[${b}] File ${sampleFile}: \n   Top: ${topLines}\n   Bottom: ${bottomLines}\n`);
  }
}

await worker.terminate();
