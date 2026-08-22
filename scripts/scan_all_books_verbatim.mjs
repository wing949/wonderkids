import { createWorker } from 'tesseract.js';
import { readdirSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';

const workspace = process.cwd();
const catalog = JSON.parse(await fs.readFile(path.join(workspace, 'scripts', 'all_376_lessons_catalog.json'), 'utf8'));

const NUM_WORKERS = 4;
console.log(`🚀 Khởi tạo cụm ${NUM_WORKERS} Tesseract OCR workers song song...`);
const workers = await Promise.all(
  Array.from({ length: NUM_WORKERS }, () => createWorker('vie'))
);
console.log(`✅ Đã sẵn sàng ${NUM_WORKERS} workers!`);

const books = [
  { grade: 1, sem: 2, folderName: 'g1_t2' },
  { grade: 2, sem: 1, folderName: 'g2_t1' },
  { grade: 2, sem: 2, folderName: 'g2_t2' },
  { grade: 3, sem: 1, folderName: 'g3_t1' },
  { grade: 3, sem: 2, folderName: 'g3_t2' },
  { grade: 4, sem: 1, folderName: 'g4_t1' },
  { grade: 4, sem: 2, folderName: 'g4_t2' },
  { grade: 5, sem: 1, folderName: 'g5_t1' },
  { grade: 5, sem: 2, folderName: 'g5_t2' },
];

function getPagePath(folder, pageNum) {
  const targetPrefix = `p${pageNum + 1}_`;
  try {
    const files = readdirSync(folder);
    const match = files.find(f => f.startsWith(targetPrefix));
    if (match) return path.join(folder, match);
    const fallback = files.find(f => f.startsWith(`p${pageNum}_`));
    return fallback ? path.join(folder, fallback) : null;
  } catch (e) {
    return null;
  }
}

for (const b of books) {
  const folder = path.join(workspace, 'tmp_pages', b.folderName);
  const lessons = catalog.filter(l => l.grade === b.grade && l.semester === b.sem);
  console.log(`\n======================================================`);
  console.log(`[Lớp ${b.grade} Tập ${b.sem}] Bắt đầu quét song song ${lessons.length} bài...`);
  console.log(`======================================================`);

  let workerIdx = 0;
  const tasks = lessons.map(async (lesson, i) => {
    const assignedWorker = workers[i % NUM_WORKERS];
    const startP = lesson.startPage;
    const endP = lesson.endPage || lesson.startPage;
    const rawPages = [];

    for (let p = startP; p <= endP; p++) {
      const filePath = getPagePath(folder, p);
      if (filePath) {
        try {
          const res = await assignedWorker.recognize(filePath);
          rawPages.push({
            page: p,
            file: path.basename(filePath),
            ocrText: res.data.text
          });
        } catch (err) {
          console.error(`Lỗi trang ${p} bài ${lesson.id}:`, err.message);
        }
      }
    }

    console.log(`[${i + 1}/${lessons.length}] ✓ Đã quét (${startP}..${endP}): ${lesson.title}`);
    return {
      lessonId: lesson.id,
      title: lesson.title,
      grade: lesson.grade,
      semester: lesson.semester,
      startPage: startP,
      endPage: endP,
      pages: rawPages
    };
  });

  const extracted = await Promise.all(tasks);
  // Sort back by startPage
  extracted.sort((a, b) => a.startPage - b.startPage);

  const outPath = path.join(workspace, 'scripts', `ocr_verbatim_g${b.grade}_t${b.sem}.json`);
  await fs.writeFile(outPath, JSON.stringify(extracted, null, 2), 'utf8');
  console.log(`💾 Đã lưu file OCR chuẩn xác: ${path.basename(outPath)}`);
}

console.log('\n🎉 HOÀN THÀNH QUÉT OCR NGUYÊN VĂN TẤT CẢ CÁC TRANG CỦA 293 BÀI HỌC SGK!');
await Promise.all(workers.map(w => w.terminate()));
