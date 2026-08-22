import { createWorker } from 'tesseract.js';
import path from 'node:path';

const worker = await createWorker('vie');

const p31 = path.resolve('tmp_pages/g3_t1/p31_4698680579-page-31-1775743403947.png');
const p32 = path.resolve('tmp_pages/g3_t1/p32_4698680579-page-32-1775743404199.png');

console.log('--- OCR P31 (Printed 30) ---');
const r31 = await worker.recognize(p31);
console.log(r31.data.text);

console.log('\n--- OCR P32 (Printed 31) ---');
const r32 = await worker.recognize(p32);
console.log(r32.data.text);

await worker.terminate();
