import { createWorker } from 'tesseract.js';
import path from 'node:path';

const worker = await createWorker('vie');

const p22 = path.resolve('tmp_pages/g3_t1/p22_4698680579-page-22-1775743401080.png');
const p23 = path.resolve('tmp_pages/g3_t1/p23_4698680579-page-23-1775743401318.png');

console.log('--- OCR P22 (Printed 21) ---');
const r22 = await worker.recognize(p22);
console.log(r22.data.text);

console.log('\n--- OCR P23 (Printed 22) ---');
const r23 = await worker.recognize(p23);
console.log(r23.data.text);

await worker.terminate();
