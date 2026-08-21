import { createHash } from 'node:crypto';
import { build } from 'esbuild';
import { mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const ocrRoot = join(root, '.cache', 'ocr', 'vietnamese');
const outputPath = join(root, 'src', 'data', 'curriculum', 'vietnamese', 'lessonPageMappings.generated.json');
const reportPath = join(root, 'private-reports', 'vietnamese-page-mapping-audit.csv');
const buildDir = await mkdtemp(join(tmpdir(), 'wonderkids-page-mapping-'));

// Các điểm bắt đầu đã được kiểm tra trực quan trên ảnh trang sách chính thức.
// Chỉ thêm vào đây khi có bằng chứng trang rõ ràng; không suy đoán từ OCR.
const visuallyReviewedPages = new Map([
  ['tv-g2-b1', [10, 11, 12]],
  ['tv-g2-b2', [13]],
  ['tv-g2-b3', [17, 18]],
  ['tv-g2-b4', [20]],
  ['tv-g2-b5', [24, 25, 26]],
  ['tv-g2-b6', [27, 28, 29, 30]],
]);

function normalize(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/gi, 'd')
    .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function levenshtein(a, b) {
  const row = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i += 1) {
    let diagonal = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const above = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, diagonal + (a[i - 1] === b[j - 1] ? 0 : 1));
      diagonal = above;
    }
  }
  return row[b.length];
}

function similarity(a, b) {
  if (!a || !b) return 0;
  const lengthRatio = Math.min(a.length, b.length) / Math.max(a.length, b.length);
  if (lengthRatio < 0.45) return 0;
  if (b.includes(a)) return 1;
  if (a.includes(b) && lengthRatio > 0.72) return 0.9;
  return 1 - (levenshtein(a, b) / Math.max(a.length, b.length));
}

function bestTitleMatch(title, text) {
  const fullTarget = normalize(title);
  const shortTarget = fullTarget.replace(/^bai\s+\d+\s+/, '');
  const targets = shortTarget.length >= 4 ? [fullTarget, shortTarget] : [fullTarget];
  const lines = text.split(/\r?\n/).map(normalize).filter(Boolean);
  let best = { score: 0, line: '', exactHeading: false };
  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const combinedLine = [lines[lineIndex], lines[lineIndex + 1]].filter(Boolean).join(' ');
    const candidates = [lines[lineIndex], combinedLine];
    for (const target of targets) {
      for (const candidate of candidates) {
        const targetTokens = new Set(target.split(' '));
        const sharedTokens = candidate.split(' ').filter((token) => targetTokens.has(token)).length;
        if (sharedTokens === 0 && target.length > 4) continue;
        const exactHeading = lineIndex < 14
          && candidate.includes(target)
          && candidate.length <= target.length + 12;
        const score = Math.min(1, similarity(target, candidate) + (lineIndex < 14 ? 0.04 : 0));
        if (exactHeading && !best.exactHeading) {
          best = { score: 1, line: combinedLine, exactHeading: true };
        } else if (exactHeading === best.exactHeading && score > best.score) {
          best = { score, line: combinedLine, exactHeading };
        }
      }
    }
  }
  return best;
}

function pageNumbers(referenceDetail) {
  const match = String(referenceDetail || '').match(/Trang\s+([\d,\s–—-]+)/i);
  if (!match) return [];
  const pages = [];
  for (const part of match[1].split(',')) {
    const range = part.trim().match(/^(\d+)\s*[–—-]\s*(\d+)$/);
    if (range) {
      for (let page = Number(range[1]); page <= Number(range[2]); page += 1) pages.push(page);
    } else if (/^\d+$/.test(part.trim())) {
      pages.push(Number(part.trim()));
    }
  }
  return [...new Set(pages)];
}

function csvCell(value) {
  return `"${String(value ?? '').replaceAll('"', '""')}"`;
}

async function writeFileWithRetry(path, content, attempts = 6) {
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      await writeFile(path, content, 'utf8');
      return;
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, 200 * (attempt + 1)));
    }
  }
  throw lastError;
}

try {
  await build({
    entryPoints: ['src/data/curriculum/index.ts'], bundle: true, format: 'esm', platform: 'node',
    target: 'node20', outfile: join(buildDir, 'curriculum.js'), write: true, logLevel: 'silent',
  });
  const curriculum = await import(`${pathToFileURL(join(buildDir, 'curriculum.js')).href}?v=${Date.now()}`);
  const lessons = [1, 2, 3, 4, 5].flatMap((grade) => curriculum.getLessonsForGradeAndSubject(grade, 'vietnamese'));
  const books = new Map();
  for (const manifest of curriculum.VIETNAMESE_BOOK_MANIFESTS) {
    const directory = join(ocrRoot, manifest.id);
    const files = (await readdir(directory)).filter((name) => /^reader-\d+\.txt$/.test(name)).sort();
    books.set(manifest.id, await Promise.all(files.map(async (name) => ({
      page: Number(name.match(/\d+/)[0]), text: await readFile(join(directory, name), 'utf8'),
    }))));
  }

  const mappings = {};
  const rows = [];
  for (const lesson of lessons) {
    const title = lesson.provenance?.referenceLessonTitle;
    if (!title || lesson.provenance.contentOrigin === 'pedagogical_supplement') continue;
    const bookId = `tv-g${lesson.grade}-t${lesson.semester}`;
    const oldPages = pageNumbers(lesson.provenance.referenceDetail);
    const candidates = books.get(bookId).filter(({ page }) => page >= 8).map(({ page, text }) => {
      const match = bestTitleMatch(title, text);
      return { page, ...match };
    });
    const exactCandidates = candidates.filter((candidate) => candidate.exactHeading);
    const candidatePool = exactCandidates.length > 0 ? exactCandidates : candidates;
    const highestScore = Math.max(...candidatePool.map((candidate) => candidate.score));
    const best = candidatePool
      .filter((candidate) => candidate.score >= highestScore - 0.04)
      .sort((a, b) => a.page - b.page)[0];
    const accepted = best.score >= 0.72;
    const reviewedPages = visuallyReviewedPages.get(lesson.id);
    const bestPage = reviewedPages?.[0] ?? best.page;
    rows.push({ lessonId: lesson.id, bookId, title, oldPages: oldPages.join(', '), bestPage, score: best.score, matchedText: best.line, accepted });
    if (accepted) mappings[lesson.id] = {
      lessonId: lesson.id, bookId, sourcePages: reviewedPages || [bestPage], matchedTitle: title, matchedText: best.line,
      confidence: Number(best.score.toFixed(4)), status: reviewedPages ? 'visually_reviewed' : 'ocr_matched',
    };
  }

  await mkdir(join(root, 'private-reports'), { recursive: true });
  await writeFileWithRetry(outputPath, `${JSON.stringify(mappings, null, 2)}\n`);
  await writeFileWithRetry(reportPath, [
    ['lessonId', 'bookId', 'title', 'oldPages', 'bestPage', 'score', 'matchedText', 'accepted'].map(csvCell).join(','),
    ...rows.map((row) => Object.values(row).map(csvCell).join(',')),
  ].join('\n'));
  const digest = createHash('sha256').update(JSON.stringify(mappings)).digest('hex');
  const unmatched = rows.filter((row) => !row.accepted).map((row) => row.lessonId);
  console.log(JSON.stringify({
    lessons: lessons.length,
    referenceCandidates: rows.length,
    matched: Object.keys(mappings).length,
    safelyBlocked: unmatched.length,
    unmatched,
    digest,
  }));
} finally {
  await rm(buildDir, { recursive: true, force: true });
}
