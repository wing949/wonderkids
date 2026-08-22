import { createWorker } from 'tesseract.js';
import fs from 'node:fs/promises';
import path from 'node:path';

const worker = await createWorker('vie');

// Test OCR on G3 T1 page 26 & 27 (readerIndex 27 & 28)
const p27 = path.resolve('tmp_pages/g3_t1/p27_4698680579-page-27-1775743402774.png');
const p28 = path.resolve('tmp_pages/g3_t1/p28_4698680579-page-28-1775743403109.png');

console.log('--- OCR P27 (Printed 26) ---');
const r27 = await worker.recognize(p27);
console.log(r27.data.text);

console.log('\n--- OCR P28 (Printed 27) ---');
const r28 = await worker.recognize(p28);
console.log(r28.data.text);

await worker.terminate();
