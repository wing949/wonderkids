import { createWorker } from 'tesseract.js';
import { readdirSync } from 'node:fs';
import path from 'node:path';

const files = readdirSync('tmp_pages/g3_t1');
const p39File = files.find(f => f.startsWith('p39_'));
const p40File = files.find(f => f.startsWith('p40_'));

console.log('p39File:', p39File);
console.log('p40File:', p40File);

const worker = await createWorker('vie');

console.log('--- OCR P39 (Printed 38) ---');
const r39 = await worker.recognize(path.resolve('tmp_pages/g3_t1', p39File));
console.log(r39.data.text);

console.log('\n--- OCR P40 (Printed 39) ---');
const r40 = await worker.recognize(path.resolve('tmp_pages/g3_t1', p40File));
console.log(r40.data.text);

await worker.terminate();
