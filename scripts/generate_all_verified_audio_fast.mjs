import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { promisify } from 'node:util';
import { build } from 'esbuild';
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';
import { synthesizeWithRetry } from './lib/verifiedVietnameseAudioRetry.mjs';

const runFile = promisify(execFile);
const workspace = process.cwd();
const buildDirectory = await mkdtemp(join(tmpdir(), 'wonderkids-verified-audio-build-'));
const audioDirectory = await mkdtemp(join(tmpdir(), 'wonderkids-verified-audio-files-'));
const manifestPath = join(workspace, 'src', 'data', 'curriculum', 'vietnamese', 'audioManifest.generated.json');

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

async function synthesize(text, voice, outputPath) {
  const tts = new MsEdgeTTS();
  await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
  const streamResult = tts.toStream(text);
  const chunks = [];
  await new Promise((resolve, reject) => {
    streamResult.audioStream.on('data', (chunk) => chunks.push(chunk));
    streamResult.audioStream.on('end', resolve);
    streamResult.audioStream.on('error', reject);
  });
  await writeFile(outputPath, Buffer.concat(chunks));
}

async function convertToWav(inputPath, outputPath) {
  await runFile('ffmpeg', [
    '-hide_banner', '-loglevel', 'error', '-y', '-i', inputPath,
    '-ac', '1', '-ar', '24000', '-c:a', 'pcm_s16le', outputPath,
  ]);
}

try {
  await build({
    entryPoints: ['src/data/curriculum/index.ts', 'src/utils/lessonNarration.ts'],
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'node20',
    outdir: buildDirectory,
    write: true,
    logLevel: 'silent',
  });

  const curriculum = await import(pathToFileURL(join(buildDirectory, 'data', 'curriculum', 'index.js')).href);
  const narration = await import(pathToFileURL(join(buildDirectory, 'utils', 'lessonNarration.js')).href);
  const runtimeLessons = new Map(
    [1, 2, 3, 4, 5]
      .flatMap((grade) => curriculum.getLessonsForGradeAndSubject(grade, 'vietnamese'))
      .map((lesson) => [lesson.id.replace('-l', '-b'), lesson]),
  );

  const verifiedLessonIds = [...runtimeLessons.values()]
    .filter((lesson) => lesson.readingPassage?.contentOrigin === 'sgk_reference'
      && lesson.readingPassage.verificationStatus === 'verified'
      && lesson.readingPassage.sourcePages?.length)
    .map((lesson) => lesson.id.replace('-l', '-b'))
    .sort();

  await Promise.all([
    mkdir(join(workspace, 'public', 'audio', 'curriculum'), { recursive: true }),
    mkdir(join(workspace, 'public', 'audio', 'curriculum', 'fallback'), { recursive: true }),
  ]);

  let manifest = {};
  try {
    manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  } catch {}

  console.log(`Bắt đầu tạo audio cho ${verifiedLessonIds.length} bài học verified...`);

  // Process with concurrency pool of 4
  const CONCURRENCY = 4;
  let currentIndex = 0;
  let completedCount = 0;

  async function worker(workerId) {
    while (currentIndex < verifiedLessonIds.length) {
      const idx = currentIndex++;
      const lessonId = verifiedLessonIds[idx];
      const lesson = runtimeLessons.get(lessonId);
      const passage = lesson?.readingPassage;
      if (!passage) continue;

      const text = narration.buildLessonNarration(passage);
      const textHash = sha256(text);
      const primaryWav = join(workspace, 'public', 'audio', 'curriculum', `${lessonId}.wav`);
      const fallbackWav = join(workspace, 'public', 'audio', 'curriculum', 'fallback', `${lessonId}.wav`);

      try {
        const pStat = await readFile(primaryWav);
        const fStat = await readFile(fallbackWav);
        if (manifest[lessonId]?.transcriptHash === textHash && pStat.length > 0 && fStat.length > 0) {
          completedCount++;
          continue;
        }
      } catch {}

      const primaryMp3 = join(audioDirectory, `${lessonId}-primary-${workerId}.mp3`);
      const fallbackMp3 = join(audioDirectory, `${lessonId}-fallback-${workerId}.mp3`);

      try {
        await synthesizeWithRetry(
          () => synthesize(text, 'vi-VN-HoaiMyNeural', primaryMp3),
          { onRetry: ({ attempt, attempts }) => console.warn(`TTS chính (${lessonId}) thử lại (${attempt}/${attempts}).`) },
        );
        await synthesizeWithRetry(
          () => synthesize(text, 'vi-VN-NamMinhNeural', fallbackMp3),
          { onRetry: ({ attempt, attempts }) => console.warn(`TTS fallback (${lessonId}) thử lại (${attempt}/${attempts}).`) },
        );
        await convertToWav(primaryMp3, primaryWav);
        await convertToWav(fallbackMp3, fallbackWav);

        manifest[lessonId] = {
          lessonId,
          primaryPath: `/audio/curriculum/${lessonId}.wav`,
          fallbackPath: `/audio/curriculum/fallback/${lessonId}.wav`,
          primaryVoice: 'Cô Hoài My',
          fallbackVoice: 'Thầy Nam Minh',
          transcriptHash: textHash,
          lessonVersion: Math.max(2, Number(manifest[lessonId]?.lessonVersion || 0) + 1),
          sourcePages: passage.sourcePages,
        };

        completedCount++;
        console.log(`[${completedCount}/${verifiedLessonIds.length}] Đã tạo audio SGK: ${lessonId}`);
        await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
      } catch (err) {
        console.error(`Lỗi khi tạo audio bài ${lessonId}:`, err.message);
      }
    }
  }

  // Run workers
  const workers = Array.from({ length: CONCURRENCY }, (_, i) => worker(i));
  await Promise.all(workers);

  // Write final manifest with all verified lessons
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  console.log(`Hoàn tất tạo audio cho toàn bộ ${Object.keys(manifest).length} bài học SGK!`);
} finally {
  await rm(buildDirectory, { recursive: true, force: true });
  await rm(audioDirectory, { recursive: true, force: true });
}
