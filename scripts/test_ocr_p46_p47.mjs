import { createWorker } from 'tesseract.js';
import path from 'node:path';

const workspace = process.cwd();
const worker = await createWorker('vie');

const img46 = path.join(workspace, 'tmp_pages', 'g3_t1', 'p46_4698680579-page-46-1775743408142.png');
const img47 = path.join(workspace, 'tmp_pages', 'g3_t1', 'p47_4698680579-page-47-1775743408483.png');

console.log('=== PAGE 46 ===');
const res46 = await worker.recognize(img46);
console.log(res46.data.text);

console.log('=== PAGE 47 ===');
const res47 = await worker.recognize(img47);
console.log(res47.data.text);

await worker.terminate();
