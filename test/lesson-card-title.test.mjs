import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { build } from 'esbuild';
import { randomBytes } from 'node:crypto';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const tempDir = join(tmpdir(), `wonderkids-title-${randomBytes(6).toString('hex')}`);
await build({
  entryPoints: ['src/utils/lessonCard.ts'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outdir: tempDir,
  write: true,
  logLevel: 'silent',
});

const lessonCardModule = await import(pathToFileURL(join(tempDir, 'lessonCard.js')).href);
const { formatLessonDisplayTitle, getLessonCardContent } = lessonCardModule;

describe('Lesson Card Title Prefix "Bài X:" Verification Test', () => {
  it('should format Vietnamese lessons with "Bài X:" prefix matching Math', () => {
    // Tiếng Việt 5 Tập 1 (User reported case)
    const tv5_1 = {
      id: 'tv-g5-b1',
      title: 'Thanh âm của gió',
      subject: 'vietnamese',
      grade: 5,
      semester: 1,
      order: 1,
      sourceCitation: { bookId: 'tv5_1', sourcePages: [8, 9, 10, 11, 12] },
      provenance: { referenceLessonTitle: 'Bài 1: Thanh âm của gió' },
    };
    assert.equal(formatLessonDisplayTitle(tv5_1), 'Bài 1: Thanh âm của gió');
    assert.equal(getLessonCardContent(tv5_1).title, 'Bài 1: Thanh âm của gió');

    const tv5_2 = {
      id: 'tv-g5-b2',
      title: 'Cánh đồng hoa',
      subject: 'vietnamese',
      grade: 5,
      semester: 1,
      order: 2,
      sourceCitation: { bookId: 'tv5_1', sourcePages: [13, 14, 15, 16, 17] },
      provenance: { referenceLessonTitle: 'Bài 2: Cánh đồng hoa' },
    };
    assert.equal(formatLessonDisplayTitle(tv5_2), 'Bài 2: Cánh đồng hoa');
    assert.equal(getLessonCardContent(tv5_2).title, 'Bài 2: Cánh đồng hoa');

    const tv5_3 = {
      id: 'tv-g5-b3',
      title: 'Tuổi Ngựa',
      subject: 'vietnamese',
      grade: 5,
      semester: 1,
      order: 3,
      sourceCitation: { bookId: 'tv5_1', sourcePages: [18, 19, 20, 21, 22] },
      provenance: { referenceLessonTitle: 'Bài 3: Tuổi Ngựa' },
    };
    assert.equal(formatLessonDisplayTitle(tv5_3), 'Bài 3: Tuổi Ngựa');
    assert.equal(getLessonCardContent(tv5_3).title, 'Bài 3: Tuổi Ngựa');
  });

  it('should preserve existing "Bài X:" prefixes for Math and other subjects', () => {
    const math1 = {
      id: 'toan-g1-b1',
      title: 'Bài 1: Các số 0, 1, 2, 3, 4, 5',
      subject: 'math',
      grade: 1,
      semester: 1,
      order: 1,
    };
    assert.equal(formatLessonDisplayTitle(math1), 'Bài 1: Các số 0, 1, 2, 3, 4, 5');
    assert.equal(getLessonCardContent(math1).title, 'Bài 1: Các số 0, 1, 2, 3, 4, 5');
  });
});

await rm(tempDir, { recursive: true, force: true });
