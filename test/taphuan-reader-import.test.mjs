import assert from 'node:assert/strict';
import test from 'node:test';
import { extractReaderPageUrls, sha256Hex } from '../scripts/lib/taphuanReader.mjs';

test('tách ảnh bìa và trang đọc theo đúng thứ tự, bỏ ảnh giao diện và URL trùng', () => {
  const html = `
    <img src="/training/images/backgrounds/background-reader-blue.png">
    <img src="https://taphuan.nxbgd.vn/storage/upload/taphuan/book-page-1.png" alt="cover-first">
    <img data-src="https://taphuan.nxbgd.vn/storage/upload/taphuan/book-page-2.png" data-page="1">
    <img data-src="https://taphuan.nxbgd.vn/storage/upload/taphuan/book-page-2.png" data-page="1">
    <img data-src="https://taphuan.nxbgd.vn/storage/upload/taphuan/book-page-3.png" data-page="2">
  `;
  assert.deepEqual(extractReaderPageUrls(html), [
    'https://taphuan.nxbgd.vn/storage/upload/taphuan/book-page-1.png',
    'https://taphuan.nxbgd.vn/storage/upload/taphuan/book-page-2.png',
    'https://taphuan.nxbgd.vn/storage/upload/taphuan/book-page-3.png',
  ]);
});

test('checksum nguồn dùng SHA-256 ổn định', () => {
  assert.equal(
    sha256Hex(Buffer.from('WonderKids')),
    '0d4a347c2755e6c53e247d4117a3ef72d62ac55e4d7834ba8fceb5870b06b68b'
  );
});
