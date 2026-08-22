import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';
import { mkdtemp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const buildDir = await mkdtemp(join(tmpdir(), 'wonderkids-vietnamese-verbatim-gate-'));
await build({
  entryPoints: ['src/data/curriculum/index.ts'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outfile: join(buildDir, 'curriculum.js'),
  logLevel: 'silent',
});

const curriculum = await import(pathToFileURL(join(buildDir, 'curriculum.js')).href);

const OUT_OF_SCOPE_BOOK = 'tv-g1-t1';

test('293 bài chưa vượt đối chiếu nguyên văn không được phát hành thành bài đọc SGK', () => {
  const lessons = Object.entries(curriculum.VIETNAMESE_CURRICULUM_BY_GRADE)
    .flatMap(([grade]) => curriculum.getLessonsForGradeAndSubject(Number(grade), 'vietnamese'))
    .filter((lesson) => !(lesson.grade === 1 && lesson.semester === 1));

  assert.equal(lessons.length, 293, 'Sai phạm vi kiểm tra: phải đúng 293 bài');

  for (const lesson of lessons) {
    assert.equal(lesson.catalogSection, 'sgk_pending', `Bài lỗi vẫn bị phát hành: ${lesson.id}`);
    assert.equal(lesson.provenance?.verificationStatus, 'reference_only', `Sai trạng thái nguồn: ${lesson.id}`);
    assert.equal(lesson.sourceCitation?.verificationStatus, 'draft', `Sai trạng thái trích dẫn: ${lesson.id}`);
    assert.deepEqual(lesson.readingPassage?.content, [], `Bài chưa đối chiếu vẫn hiện văn bản: ${lesson.id}`);
    assert.deepEqual(lesson.questions, [], `Bài chưa đối chiếu vẫn hiện bài tập: ${lesson.id}`);
  }
});
