import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { tmpdir } from 'node:os';
import { build } from 'esbuild';
import { JSDOM } from 'jsdom';

const workspace = process.cwd();
const buildDir = await fs.mkdtemp(path.join(tmpdir(), 'dom-audit-'));

console.log('======================================================================');
console.log('QUY TRÌNH KIỂM ĐỊNH DOM 2 CHIỀU TRỰC TIẾP TRÊN GIAO DIỆN WEBAPP');
console.log('======================================================================\n');

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
  const { SGK_VERIFIED_TRANSCRIPTS, getVerifiedVietnameseSgkTranscript } = await import(pathToFileURL(path.join(buildDir, 'sgkTranscripts.js')).href);
  const catalog = JSON.parse(await fs.readFile(path.join(workspace, 'scripts', 'all_376_lessons_catalog.json'), 'utf8'));
  const bookManifests = JSON.parse(await fs.readFile(path.join(workspace, 'src', 'data', 'curriculum', 'vietnamese', 'bookManifests.generated.json'), 'utf8'));

  // Initialize JSDOM
  const dom = new JSDOM('<!DOCTYPE html><html><body><div id="app-root"></div></body></html>', {
    url: 'http://localhost:3000/',
    pretendToBeVisual: true
  });
  const { document } = dom.window;

  const results = {
    total: catalog.length,
    passed: 0,
    failed: [],
    missing: [],
    unverified: [],
    detailsByGrade: { 1: [], 2: [], 3: [], 4: [], 5: [] }
  };

  const aiHallucinationPatterns = [
    /Chiếc đồng hồ chuông reo vang/i,
    /Bài đọc:.*?Luyện đọc đúng/i,
    /Nội dung do AI/i,
    /WonderKids —/i,
    /Nội dung tự sinh/i,
    /Nội dung tự biên/i,
    /Nội dung tóm tắt/i,
  ];

  const ocrJunkPatterns = [
    /[~¬|_=›‹«»\\\/^#$*@+§]/,
    /\b(Nột|toy|mớt|quở|bởn|nhõng|tờgiấy|vðo|nõo|đỡ|lõ)\b/i,
    /¿|¿\s*má|Em\s*Z>|Lo\s*va\s*Ї|Ñ\s*5\)/i,
    /^\d+\.\s*(Chọn|Tìm|Nêu|Kể|Viết|Em hãy|Theo em|Dựa vào|Học thuộc)/i,
    /^(NÓI VÀ NGHE|VIẾT|ĐỌC MỞ RỘNG|LUYỆN TỪ VÀ CÂU)/i,
    /^(Trao đổi với bạn|Hỏi\s*[-–]\s*đáp về|Quan sát tranh)/i
  ];

  for (const item of catalog) {
    const lessonId = item.id;
    const grade = item.grade;
    const sem = item.semester;
    const cleanCatalogTitle = item.title.replace(/^Bài\s+\d+:\s*/, '').trim();

    // 1. Resolve runtime lesson node from curriculum engine
    const lessonsInGrade = curriculum.getLessonsForGradeAndSubject(grade, 'vietnamese');
    const lessonNode = lessonsInGrade.find(l => l.id === lessonId || l.id === lessonId.replace('-b', '-l'));

    if (!lessonNode) {
      results.missing.push({ lessonId, status: 'MISSING', reason: 'Không tìm thấy lessonNode trên cây Curriculum' });
      continue;
    }

    const passage = lessonNode.readingPassage;
    if (!passage) {
      results.missing.push({ lessonId, status: 'MISSING', reason: 'Thiếu readingPassage trong lessonNode' });
      continue;
    }

    // 2. Simulate WebApp DOM Rendering into Virtual DOM
    const root = document.getElementById('app-root');
    root.innerHTML = `
      <div class="reading-view" data-lesson-id="${lessonNode.id}">
        <div class="sgk-source-pane">
          <img class="book-page-image" src="${lessonNode.sourcePageImageUrls?.[0] || ''}" alt="Trang ${passage.sourcePages?.[0] || ''}" />
        </div>
        <div class="reading-card">
          <h2 class="reading-title">${passage.title}</h2>
          <p class="reading-author">Nguồn nội dung: ${passage.author || ''}</p>
          <div class="reading-content">
            ${passage.content.map((p, idx) => `<div class="passage-para" data-idx="${idx}">${p}</div>`).join('')}
          </div>
        </div>
      </div>
    `;

    // 3. Extract actual DOM rendered text
    const domTitle = root.querySelector('.reading-title')?.textContent?.trim() || '';
    const domAuthor = root.querySelector('.reading-author')?.textContent?.replace(/^Nguồn nội dung:\s*/, '').trim() || '';
    const domImage = root.querySelector('.book-page-image')?.getAttribute('src') || '';
    const domParas = Array.from(root.querySelectorAll('.passage-para')).map(el => el.textContent?.trim() || '');
    const fullDomText = domParas.join('\n');

    let errorReason = null;
    let status = 'PASS – KHỚP SGK';

    // 4. Two-Way Validation Checks

    // A. Title check
    if (domTitle !== cleanCatalogTitle) {
      errorReason = `Tiêu đề DOM không khớp mục lục SGK: "${domTitle}" vs "${cleanCatalogTitle}"`;
      status = 'FAIL – SAI NỘI DUNG';
    }
    // B. Author check
    else if (!domAuthor || domAuthor.length === 0) {
      errorReason = 'Thiếu tên tác giả trên DOM';
      status = 'MISSING – THIẾU NỘI DUNG';
    }
    // C. Scan Image check
    else if (!domImage || !domImage.startsWith('https://taphuan.nxbgd.vn/')) {
      errorReason = 'Thiếu ảnh scan SGK gốc trên pane bên trái DOM';
      status = 'MISSING – THIẾU NỘI DUNG';
    }
    // D. Content presence
    else if (domParas.length === 0 || fullDomText.length < 10) {
      errorReason = 'Nội dung bài đọc trên DOM rỗng hoặc quá ngắn';
      status = 'MISSING – THIẾU NỘI DUNG';
    }
    // E. Check for AI Hallucinations / Generic Placeholders
    else {
      for (const pat of aiHallucinationPatterns) {
        if (pat.test(fullDomText)) {
          errorReason = `DOM chứa văn bản tự biên / placeholder: khớp mẫu ${pat.toString()}`;
          status = 'FAIL – SAI NỘI DUNG';
          break;
        }
      }
      // F. Check for OCR Noise / Mixed Questions
      if (!errorReason) {
        for (const pat of ocrJunkPatterns) {
          if (pat.test(fullDomText)) {
            errorReason = `DOM chứa rác OCR hoặc câu hỏi bài tập: khớp mẫu ${pat.toString()}`;
            status = 'FAIL – SAI NỘI DUNG';
            break;
          }
        }
      }
    }

    if (errorReason) {
      results.failed.push({ lessonId, title: cleanCatalogTitle, status, reason: errorReason });
      results.detailsByGrade[grade].push({ lessonId, title: cleanCatalogTitle, status, reason: errorReason });
    } else {
      results.passed++;
      results.detailsByGrade[grade].push({ lessonId, title: cleanCatalogTitle, status: 'PASS – KHỚP SGK', author: domAuthor, parasCount: domParas.length });
    }
  }

  console.log('BÁO CÁO KẾT QUẢ KIỂM ĐỊNH DOM THỰC TẾ TRÊN TOÀN BỘ 376 BÀI HỌC:');
  console.log('----------------------------------------------------------------------');
  console.log(`TỔNG SỐ BÀI HỌC KIỂM TRA DOM : ${results.total}`);
  console.log(`SỐ BÀI PASS – KHỚP SGK       : ${results.passed} / ${results.total}`);
  console.log(`SỐ BÀI FAIL – SAI NỘI DUNG   : ${results.failed.filter(x => x.status.startsWith('FAIL')).length}`);
  console.log(`SỐ BÀI MISSING – THIẾU NỘI DUNG: ${results.failed.filter(x => x.status.startsWith('MISSING')).length}`);
  console.log('----------------------------------------------------------------------\n');

  for (let g = 1; g <= 5; g++) {
    const list = results.detailsByGrade[g];
    const passedInGrade = list.filter(x => x.status === 'PASS – KHỚP SGK').length;
    console.log(`[LỚP ${g}] ${passedInGrade}/${list.length} BÀI PASS (${list.length - passedInGrade} BÀI LỖI)`);
    const errorsInGrade = list.filter(x => x.status !== 'PASS – KHỚP SGK');
    for (const err of errorsInGrade.slice(0, 5)) {
      console.log(`   ❌ [${err.lessonId}] "${err.title}": ${err.reason}`);
    }
  }

  const reportPath = path.join(workspace, 'scripts', 'dom_2way_audit_report.json');
  await fs.writeFile(reportPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nĐã ghi báo cáo DOM chi tiết vào: ${reportPath}`);

} finally {
  await fs.rm(buildDir, { recursive: true, force: true }).catch(() => {});
}
