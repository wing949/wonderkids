import { createWorker } from 'tesseract.js';
import path from 'node:path';

const workspace = process.cwd();
const worker = await createWorker('vie');

const img48 = path.join(workspace, 'tmp_pages', 'g3_t1', 'p48_4698680579-page-48-1775743408749.png');

console.log('=== PAGE 48 (Book Page 47) ===');
const res48 = await worker.recognize(img48);
console.log(res48.data.text);

await worker.terminate();
