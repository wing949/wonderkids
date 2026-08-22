import { createWorker } from 'tesseract.js';
import path from 'node:path';

const workspace = process.cwd();
const worker = await createWorker('vie');

// Book Page 13 is file p14
const img14 = path.join(workspace, 'tmp_pages', 'g3_t1', 'p14_4698680579-page-14-1775743398396.png');
// Book Page 17 is file p18
const img18 = path.join(workspace, 'tmp_pages', 'g3_t1', 'p18_4698680579-page-18-1775743399747.png');
// Book Page 18 is file p19
const img19 = path.join(workspace, 'tmp_pages', 'g3_t1', 'p19_4698680579-page-19-1775743400051.png');

console.log('=== VỀ THĂM QUÊ (Page 13 / File p14) ===');
const res14 = await worker.recognize(img14);
console.log(res14.data.text);

console.log('=== CÁNH RỪNG TRONG NẮNG (Page 17 / File p18) ===');
const res18 = await worker.recognize(img18);
console.log(res18.data.text);

console.log('=== CÁNH RỪNG TRONG NẮNG (Page 18 / File p19) ===');
const res19 = await worker.recognize(img19);
console.log(res19.data.text);

await worker.terminate();
