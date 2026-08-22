import { createWorker } from 'tesseract.js';
import { resolve } from 'path';

const worker = await createWorker('vie');
const ret = await worker.recognize(resolve('tmp_pages/g3_t1/p11_4698680579-page-11-1775743397489.png'));
console.log('--- OCR OUTPUT ---');
console.log(ret.data.text);
console.log('------------------');
await worker.terminate();
