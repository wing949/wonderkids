import { createWorker } from 'tesseract.js';
import { resolve } from 'node:path';

const worker = await createWorker('vie');
const ret = await worker.recognize(resolve('tmp_pages/g3_t1/p35_4698680579-page-35-1775743405059.png'));
console.log('=== OCR RESULT FOR G3 T1 PAGE 35 (Printed Page 34) ===');
console.log(ret.data.text);
console.log('======================================================');
await worker.terminate();
