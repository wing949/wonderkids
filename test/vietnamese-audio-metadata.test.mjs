import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';
import { createHash } from 'node:crypto';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const outputDir = await mkdtemp(join(tmpdir(), 'wonderkids-vietnamese-audio-metadata-'));

await build({
  entryPoints: [
    'src/data/curriculum/index.ts',
    'src/data/curriculum/vietnamese/audioManifest.ts',
    'src/utils/vietnameseReadingPolicy.ts',
  ],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outdir: outputDir,
  write: true,
  logLevel: 'silent',
});

const curriculum = await import(pathToFileURL(join(outputDir, 'data', 'curriculum', 'index.js')).href);
const audioManifest = await import(pathToFileURL(join(outputDir, 'data', 'curriculum', 'vietnamese', 'audioManifest.js')).href);
const readingPolicy = await import(pathToFileURL(join(outputDir, 'utils', 'vietnameseReadingPolicy.js')).href);
const generationTasks = JSON.parse(
  await readFile('scripts/target_293_structured_reading_passages.json', 'utf8'),
);

const lessons = [1, 2, 3, 4, 5]
  .flatMap((grade) => curriculum.getLessonsForGradeAndSubject(grade, 'vietnamese'));
const lessonById = new Map(lessons.map((lesson) => [lesson.id, lesson]));
const manifestAssets = Object.values(audioManifest.VIETNAMESE_AUDIO_MANIFEST);

function expectedPages(lessonId) {
  const lesson = lessonById.get(lessonId);
  assert.ok(lesson, `Không tìm thấy bài runtime: ${lessonId}`);
  assert.ok(lesson.readingPassage?.sourcePages?.length, `Bài không có trang transcript: ${lessonId}`);
  return lesson.readingPassage.sourcePages;
}

test('293 manifest audio dùng đúng trang của transcript đang hiển thị', () => {
  assert.equal(manifestAssets.length, 293);

  const mismatches = manifestAssets
    .map((asset) => ({
      lessonId: asset.lessonId,
      actual: asset.sourcePages,
      expected: expectedPages(asset.lessonId),
    }))
    .filter(({ actual, expected }) => JSON.stringify(actual) !== JSON.stringify(expected));

  assert.deepEqual(mismatches, []);
});

test('293 tác vụ sinh audio dùng đúng trang của transcript đang hiển thị', () => {
  assert.equal(generationTasks.length, 293);
  assert.deepEqual(
    generationTasks.map((task) => task.lessonId).sort(),
    manifestAssets.map((asset) => asset.lessonId).sort(),
  );

  const mismatches = generationTasks
    .map((task) => ({
      lessonId: task.lessonId,
      actual: task.sourcePages,
      expected: expectedPages(task.lessonId),
    }))
    .filter(({ actual, expected }) => JSON.stringify(actual) !== JSON.stringify(expected));

  assert.deepEqual(mismatches, []);
});

test('293 bài có manifest hợp lệ đều mở được nút Nghe toàn bộ', () => {
  const locked = manifestAssets
    .map((asset) => lessonById.get(asset.lessonId))
    .filter((lesson) => !readingPolicy.canPlayVietnameseReadingAudio(lesson))
    .map((lesson) => lesson.id);

  assert.deepEqual(locked, []);
});

test('87 bài thơ đã phát hành có audio chính khớp kế hoạch khổ và dòng', async () => {
  const poems = generationTasks.filter((task) => task.readingPassage.genre === 'poem');
  assert.equal(poems.length, 87);

  const failures = [];
  for (const task of poems) {
    const asset = audioManifest.VIETNAMESE_AUDIO_MANIFEST[task.lessonId];
    const file = await readFile(join('public', asset.primaryPath.slice(1)));
    const audioSha256 = createHash('sha256').update(file).digest('hex');
    const spokenWordCount = task.prosodyPlan.segments
      .flatMap((segment) => segment.text.trim().split(/\s+/u))
      .filter(Boolean).length;
    const expectedWordsPerMinute = Math.round(
      spokenWordCount * 600000 / asset.durationMs,
    ) / 10;
    if (
      asset.primaryVoice !== 'Cô Giáo Vy'
      || asset.genre !== 'poem'
      || asset.prosodyVersion !== task.prosodyPlan.version
      || asset.prosodyHash !== task.prosodyPlan.prosodyHash
      || asset.segmentCount !== task.prosodyPlan.segments.length
      || asset.stanzaCount !== task.prosodyPlan.stanzaCount
      || asset.lineCount !== task.prosodyPlan.lineCount
      || !Number.isFinite(asset.effectiveTempo)
      || asset.effectiveTempo <= 0
      || !Number.isFinite(asset.wordsPerMinute)
      || asset.wordsPerMinute !== expectedWordsPerMinute
      || asset.wordsPerMinute < 100
      || asset.wordsPerMinute > 135
      || asset.audioSha256 !== audioSha256
      || !asset.isExpressive
    ) {
      failures.push(task.lessonId);
    }
  }

  assert.deepEqual(failures, []);
});

test.after(async () => {
  await rm(outputDir, { recursive: true, force: true });
});
