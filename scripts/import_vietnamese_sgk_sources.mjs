import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, extname, join } from 'node:path';
import { extractReaderPageUrls, sha256Hex } from './lib/taphuanReader.mjs';

const workspace = process.cwd();
const cacheRoot = join(workspace, '.cache', 'sgk', 'vietnamese');
const outputPath = join(workspace, 'src', 'data', 'curriculum', 'vietnamese', 'bookManifests.generated.json');
const verifyOnly = process.argv.includes('--verify');

const books = [
  [1, 1, 'tv-g1-t1', 'Tiếng Việt 1, tập một', 186, 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-1-tap-mot.4695822132'],
  [1, 2, 'tv-g1-t2', 'Tiếng Việt 1, tập hai', 178, 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-1-tap-hai.4698214319'],
  [2, 1, 'tv-g2-t1', 'Tiếng Việt 2, tập một', 146, 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-2-tap-mot.4698590737'],
  [2, 2, 'tv-g2-t2', 'Tiếng Việt 2, tập hai', 146, 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-2-tap-hai.4698600732'],
  [3, 1, 'tv-g3-t1', 'Tiếng Việt 3, tập một', 154, 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-3-tap-mot.4698680579'],
  [3, 2, 'tv-g3-t2', 'Tiếng Việt 3, tập hai', 146, 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-3-tap-hai.4698697436'],
  [4, 1, 'tv-g4-t1', 'Tiếng Việt 4, tập một', 150, 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-4-tap-mot.4698846675'],
  [4, 2, 'tv-g4-t2', 'Tiếng Việt 4, tập hai', 146, 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-4-tap-hai.4698852686'],
  [5, 1, 'tv-g5-t1', 'Tiếng Việt 5, tập một', 170, 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-5-tap-mot.4699740998'],
  [5, 2, 'tv-g5-t2', 'Tiếng Việt 5, tập hai', 162, 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-5-tap-hai.4699750731'],
].map(([grade, semester, id, title, pageCount, readerUrl]) => ({ grade, semester, id, title, pageCount, readerUrl }));

async function fetchBytes(url, attempts = 3) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 WonderKids SGK verifier' } });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return Buffer.from(await response.arrayBuffer());
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}

async function mapWithConcurrency(items, limit, worker) {
  const results = new Array(items.length);
  let cursor = 0;
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await worker(items[index], index);
    }
  }));
  return results;
}

async function cachedPage(book, imageUrl, readerIndex) {
  const extension = extname(new URL(imageUrl).pathname) || '.png';
  const filePath = join(cacheRoot, book.id, `reader-${String(readerIndex).padStart(3, '0')}${extension}`);
  let bytes;
  try {
    bytes = await readFile(filePath);
  } catch {
    if (verifyOnly) throw new Error(`Thiếu cache nguồn: ${filePath}`);
    bytes = await fetchBytes(imageUrl);
    await mkdir(dirname(filePath), { recursive: true });
    await writeFile(filePath, bytes);
  }
  return { readerIndex, imageUrl, sourceHash: sha256Hex(bytes), verificationStatus: 'draft' };
}

async function importBook(book) {
  const htmlCachePath = join(cacheRoot, book.id, 'reader.html');
  let html;
  try {
    html = await readFile(htmlCachePath, 'utf8');
  } catch {
    if (verifyOnly) throw new Error(`Thiếu HTML nguồn: ${htmlCachePath}`);
    const response = await fetch(book.readerUrl, { headers: { 'User-Agent': 'Mozilla/5.0 WonderKids SGK verifier' } });
    if (!response.ok) throw new Error(`${book.id}: HTTP ${response.status}`);
    html = await response.text();
    await mkdir(dirname(htmlCachePath), { recursive: true });
    await writeFile(htmlCachePath, html, 'utf8');
  }

  const imageUrls = extractReaderPageUrls(html);
  if (imageUrls.length !== book.pageCount) throw new Error(`${book.id}: mong đợi ${book.pageCount} ảnh, nhận ${imageUrls.length}`);
  const pages = await mapWithConcurrency(imageUrls, 6, (url, index) => cachedPage(book, url, index));
  const manifestHash = sha256Hex(Buffer.from(pages.map((page) => page.sourceHash).join('\n')));
  console.log(`${book.id}: ${pages.length} trang`);
  return {
    ...book,
    publisher: 'Nhà xuất bản Giáo dục Việt Nam',
    collection: 'Bộ SGK thống nhất',
    importStatus: 'source_indexed',
    published: false,
    manifestHash,
    pages,
  };
}

if (verifyOnly) await access(outputPath);
const manifests = [];
for (const book of books) manifests.push(await importBook(book));
const totalPages = manifests.reduce((sum, book) => sum + book.pages.length, 0);
if (totalPages !== 1584) throw new Error(`Sai tổng số trang: ${totalPages}`);
if (!verifyOnly) await writeFile(outputPath, `${JSON.stringify(manifests, null, 2)}\n`, 'utf8');
console.log(JSON.stringify({ books: manifests.length, pages: totalPages, mode: verifyOnly ? 'verify' : 'import' }));
