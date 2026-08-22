import { createWorker } from 'tesseract.js';
import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const files = readdirSync('tmp_pages/g3_t1');
const p34File = files.find(f => f.startsWith('p35_') || f.startsWith('p34_') || f.includes('-page-35-') || f.includes('-page-34-'));
console.log('Target file for page 34:', p34File);

const worker = await createWorker('vie');
const ret = await worker.recognize(resolve('tmp_pages/g3_t1', p34File));
console.log('=== OCR RESULT FOR G3 T1 PAGE 34 ===');
console.log(ret.data.text);
console.log('====================================');
await worker.terminate();
