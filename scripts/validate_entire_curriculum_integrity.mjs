import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { tmpdir } from 'node:os';
import { build } from 'esbuild';

const workspace = process.cwd();
const buildDir = await fs.mkdtemp(path.join(tmpdir(), 'curriculum-audit-'));

console.log('================================================================');
console.log('TIẾN HÀNH KIỂM ĐỊNH TOÀN DIỆN 376 BÀI HỌC TRÊN CURRICULUM ENGINE');
console.log('================================================================\n');

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
  const bookManifests = JSON.parse(await fs.readFile(path.join(workspace, 'src', 'data', 'curriculum', 'vietnamese', 'bookManifests.generated.json'), 'utf8'));

  const resultsByGrade = { 1: [], 2: [], 3: [], 4: [], 5: [] };
  let totalChecked = 0;
  let totalErrors = 0;

  const forbiddenTokens = [
    /[~¬|_=›‹«»\\\/^#$*@+§]/,
    /\b(Nột|toy|mớt|quở|bởn|nhõng|tờgiấy|vðo|nõo|đỡ|lõ)\b/i,
    /^\d+\.\s*(Chọn|Tìm|Nêu|Kể|Viết|Em hãy|Theo em|Dựa vào|Học thuộc)/i,
    /^(NÓI VÀ NGHE|VIẾT|ĐỌC MỞ RỘNG|LUYỆN TỪ VÀ CÂU)/i,
    /^(Trao đổi với bạn|Hỏi\s*[-–]\s*đáp về|Quan sát tranh)/i
  ];

  for (let grade = 1; grade <= 5; grade++) {
    const lessons = curriculum.getLessonsForGradeAndSubject(grade, 'vietnamese');
    for (const l of lessons) {
      totalChecked++;
      const errors = [];

      // 1. Check title & ID
      if (!l.id || !l.title) errors.push('Thiếu id hoặc title');

      // 2. Check reading passage
      const rp = l.readingPassage;
      if (!rp) {
        errors.push('Không có readingPassage');
      } else {
        if (!rp.title || rp.title.trim().length === 0) errors.push('Thiếu readingPassage.title');
        if (!rp.author || rp.author.trim().length === 0) errors.push('Thiếu readingPassage.author');
        if (!rp.content || rp.content.length === 0) {
          errors.push('Nội dung readingPassage.content rỗng');
        } else {
          // Check for forbidden tokens / OCR junk
          const fullText = rp.content.join('\n');
          for (const pat of forbiddenTokens) {
            if (pat.test(fullText)) {
              errors.push(`Nội dung chứa ký tự rác / câu hỏi: ${pat.toString()}`);
              break;
            }
          }
        }
        if (!rp.sourcePages || rp.sourcePages.length === 0) {
          errors.push('Thiếu sourcePages');
        }
      }

      // 3. Check page image in book manifest
      const sem = l.semester || 1;
      const book = bookManifests.find(b => b.id === `tv-g${grade}-t${sem}`);
      if (!book) {
        errors.push(`Không tìm thấy book manifest tv-g${grade}-t${sem}`);
      } else if (rp && rp.sourcePages && rp.sourcePages.length > 0) {
        const startP = rp.sourcePages[0];
        const pageObj = book.pages.find(p => p.readerIndex + 1 === startP || p.readerIndex === startP);
        if (!pageObj || !pageObj.imageUrl.startsWith('https://taphuan.nxbgd.vn/')) {
          errors.push(`Thiếu ảnh scan SGK gốc cho trang ${startP}`);
        }
      }

      if (errors.length > 0) {
        totalErrors++;
        resultsByGrade[grade].push({ id: l.id, title: l.title, errors });
      }
    }
  }

  console.log(`Đã kiểm tra tổng cộng: ${totalChecked} bài học trên 5 khối lớp.`);
  console.log(`Số bài đạt chuẩn 100%: ${totalChecked - totalErrors}/${totalChecked}`);
  console.log(`Số bài còn lỗi       : ${totalErrors}\n`);

  for (let g = 1; g <= 5; g++) {
    const errs = resultsByGrade[g];
    console.log(`[Lớp ${g}] ${errs.length === 0 ? '✓ ĐẠT 100%' : `❌ CÓ ${errs.length} BÀI LỖI:`}`);
    for (const e of errs.slice(0, 5)) {
      console.log(`   - [${e.id}] ${e.title}: ${e.errors.join('; ')}`);
    }
  }

} finally {
  await fs.rm(buildDir, { recursive: true, force: true }).catch(() => {});
}
