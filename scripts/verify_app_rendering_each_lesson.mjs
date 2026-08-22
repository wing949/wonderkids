import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { tmpdir } from 'node:os';
import { build } from 'esbuild';

const workspace = process.cwd();
const buildDir = await fs.mkdtemp(path.join(tmpdir(), 'app-verify-'));

try {
  await build({
    entryPoints: {
      index: 'src/data/curriculum/index.ts',
      sgkTranscripts: 'src/data/curriculum/vietnamese/sgkTranscripts.ts'
    },
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'node20',
    outdir: buildDir,
    write: true,
    logLevel: 'silent',
  });

  const curriculum = await import(pathToFileURL(path.join(buildDir, 'index.js')).href);

  const sampleIds = [
    { grade: 5, id: 'tv-g5-b1', expectedTitle: 'Thanh âm của gió', expectedAuthor: 'Văn Thành Lê' },
    { grade: 5, id: 'tv-g5-b2', expectedTitle: 'Cánh đồng hoa', expectedAuthor: 'Lê Huy Trọng' },
    { grade: 5, id: 'tv-g5-b3', expectedTitle: 'Tuổi Ngựa', expectedAuthor: 'Xuân Quỳnh' },
    { grade: 5, id: 'tv-g5-b4', expectedTitle: 'Bến sông tuổi thơ', expectedAuthor: 'Nguyễn Trọng Tạo' },
    { grade: 3, id: 'tv-g3-b13', expectedTitle: 'Bàn tay cô giáo', expectedAuthor: 'Nguyễn Trọng Hoàn' },
    { grade: 3, id: 'tv-g3-t1-b17', expectedTitle: 'Ngưỡng cửa', expectedAuthor: 'Vũ Quần Phương' },
    { grade: 2, id: 'tv-g2-t1-b27', expectedTitle: 'Mẹ', expectedAuthor: 'Trần Quốc Minh' },
    { grade: 3, id: 'tv-g3-b2', expectedTitle: 'Về thăm quê', expectedAuthor: 'Xuân Hoài' },
    { grade: 3, id: 'tv-g3-b3', expectedTitle: 'Cánh rừng trong nắng', expectedAuthor: 'Vũ Hùng' },
    { grade: 3, id: 'tv-g3-b10', expectedTitle: 'Con đường đến trường', expectedAuthor: 'Đỗ Đăng Dương' },
  ];

  console.log('================================================================');
  console.log('KIỂM TRA HIỂN THỊ THỰC TẾ TRÊN APP CHO CÁC BÀI ĐÃ BÁO LỖI');
  console.log('================================================================\n');

  for (const s of sampleIds) {
    const lessons = curriculum.getLessonsForGradeAndSubject(s.grade, 'vietnamese');
    const l = lessons.find(x => x.id === s.id || x.id === s.id.replace('-b', '-l'));
    if (!l || !l.readingPassage) {
      console.error(`❌ [LỖI] Không tìm thấy bài ${s.id} trên App!`);
      continue;
    }
    const p = l.readingPassage;
    console.log(`📌 [${l.id}] Tiêu đề: "${p.title}" | Tác giả: "${p.author}"`);
    console.log(`   - Số đoạn / khổ thơ: ${p.content.length}`);
    console.log(`   - Khổ / đoạn 1: "${p.content[0].slice(0, 80)}..."`);
    console.log(`   - Card preview Description:\n${l.description}`);
    console.log(`   - Trang nguồn SGK: Trang ${p.sourcePages.join(', ')}`);
    console.log(`   - Đối chiếu Title: ${p.title === s.expectedTitle ? '✓ ĐÚNG' : '❌ SAI'}`);
    console.log(`   - Đối chiếu Author: ${p.author === s.expectedAuthor ? '✓ ĐÚNG' : '❌ SAI'}`);
    console.log('----------------------------------------------------------------');
  }

} finally {
  await fs.rm(buildDir, { recursive: true, force: true }).catch(() => {});
}
