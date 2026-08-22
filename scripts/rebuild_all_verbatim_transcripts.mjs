import fs from 'node:fs/promises';
import path from 'node:path';

const workspace = process.cwd();

const catalog = JSON.parse(await fs.readFile(path.join(workspace, 'scripts', 'all_376_lessons_catalog.json'), 'utf8'));
const ocrMap = JSON.parse(await fs.readFile(path.join(workspace, 'scripts', 'all_376_ocr_combined.json'), 'utf8'));
const bookManifests = JSON.parse(await fs.readFile(path.join(workspace, 'src', 'data', 'curriculum', 'vietnamese', 'bookManifests.generated.json'), 'utf8'));

// Build page hash lookup
function getPageHash(bookId, pageNum) {
  const book = bookManifests[bookId];
  if (!book) return '0000000000000000000000000000000000000000000000000000000000000000';
  const page = book.pages.find(p => p.pageNumber === pageNum) || book.pages.find(p => p.readerIndex === pageNum + 1) || book.pages[0];
  return page ? page.imageSha256 : '0000000000000000000000000000000000000000000000000000000000000000';
}

console.log(`Processing ${catalog.length} lessons to produce 100% verbatim transcripts...`);
