import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdir, mkdtemp, readFile, rm, writeFile, existsSync } from 'node:fs';
import { promises as fs } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { promisify } from 'node:util';
import { build } from 'esbuild';
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';

const runFile = promisify(execFile);
const workspace = process.cwd();
const buildDirectory = await fs.mkdtemp(join(tmpdir(), 'wonderkids-audio-seq-build-'));
const tempAudioDir = await fs.mkdtemp(join(tmpdir(), 'wonderkids-audio-seq-files-'));
const manifestPath = join(workspace, 'src', 'data', 'curriculum', 'vietnamese', 'audioManifest.generated.json');

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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
  await fs.writeFile(outputPath, Buffer.concat(chunks));
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

  const catalog376 = JSON.parse(await fs.readFile(join(workspace, 'scripts', 'all_376_lessons_catalog.json'), 'utf8'));

  await Promise.all([
    fs.mkdir(join(workspace, 'public', 'audio', 'curriculum'), { recursive: true }),
    fs.mkdir(join(workspace, 'public', 'audio', 'curriculum', 'fallback'), { recursive: true }),
  ]);

  let manifest = {};
  try {
    manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
  } catch {}

  console.log(`Bắt đầu thu âm tuần tự cho ${catalog376.length} bài học SGK chuẩn xác 100%...`);

  let count = 0;
  let skipped = 0;

  for (let i = 0; i < catalog376.length; i++) {
    const item = catalog376[i];
    const lessonId = item.id.replace('-l', '-b');
    const lesson = runtimeLessons.get(lessonId);
    const passage = lesson?.readingPassage;

    if (!passage) {
      console.warn(`[${i + 1}/${catalog376.length}] Bỏ qua bài ${lessonId} vì không có passage.`);
      continue;
    }

    const text = narration.buildLessonNarration(passage);
    const textHash = sha256(text);
    const primaryWav = join(workspace, 'public', 'audio', 'curriculum', `${lessonId}.wav`);
    const fallbackWav = join(workspace, 'public', 'audio', 'curriculum', 'fallback', `${lessonId}.wav`);

    // Check if already synthesized with identical transcript hash
    try {
      const pStat = await fs.stat(primaryWav);
      const fStat = await fs.stat(fallbackWav);
      if (manifest[lessonId]?.transcriptHash === textHash && pStat.size > 1000 && fStat.size > 1000) {
        skipped++;
        count++;
        continue;
      }
    } catch {}

    const primaryMp3 = join(tempAudioDir, `${lessonId}-pri.mp3`);
    const fallbackMp3 = join(tempAudioDir, `${lessonId}-fb.mp3`);

    let success = false;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        await synthesize(text, 'vi-VN-HoaiMyNeural', primaryMp3);
        await sleep(200);
        await synthesize(text, 'vi-VN-NamMinhNeural', fallbackMp3);
        await convertToWav(primaryMp3, primaryWav);
        await convertToWav(fallbackMp3, fallbackWav);

        manifest[lessonId] = {
          lessonId,
          primaryPath: `/audio/curriculum/${lessonId}.wav`,
          fallbackPath: `/audio/curriculum/fallback/${lessonId}.wav`,
          primaryVoice: 'Cô Giáo Vy',
          fallbackVoice: 'Mỹ Duyên',
          transcriptHash: textHash,
          lessonVersion: Math.max(2, Number(manifest[lessonId]?.lessonVersion || 0) + 1),
          sourcePages: passage.sourcePages,
        };

        await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
        count++;
        console.log(`[${count}/${catalog376.length}] ✓ Đã thu âm chuẩn SGK: ${lessonId} (${passage.title})`);
        success = true;
        break;
      } catch (err) {
        console.warn(`⚠️ [Thử lại ${attempt}/3] Bài ${lessonId}: ${err.message}`);
        await sleep(1500 * attempt);
      }
    }

    if (!success) {
      console.error(`❌ Không thể thu âm bài ${lessonId}`);
    }

    await sleep(300);
  }

  console.log(`\n🎉 HOÀN TẤT THU ÂM! Tổng: ${count}/${catalog376.length} bài (Bỏ qua đã có sẵn: ${skipped}).`);
} finally {
  await fs.rm(buildDirectory, { recursive: true, force: true }).catch(() => {});
  await fs.rm(tempAudioDir, { recursive: true, force: true }).catch(() => {});
}
