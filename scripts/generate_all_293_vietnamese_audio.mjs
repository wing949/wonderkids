import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdir, mkdtemp, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { promisify } from 'node:util';
import { build } from 'esbuild';
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';
import { synthesizeWithRetry } from './lib/verifiedVietnameseAudioRetry.mjs';

const runFile = promisify(execFile);
const workspace = process.cwd();
const buildDirectory = await mkdtemp(join(tmpdir(), 'wonderkids-293-audio-build-'));
const audioDirectory = await mkdtemp(join(tmpdir(), 'wonderkids-293-audio-files-'));
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
  console.log('🔄 Đang build curriculum bundle...');
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

  const allLessons = [1, 2, 3, 4, 5]
    .flatMap((grade) => curriculum.getLessonsForGradeAndSubject(grade, 'vietnamese'));

  // Lọc 293 bài Tiếng Việt mục tiêu (loại trừ 83 bài Tập 1 Lớp 1)
  const targetLessons = allLessons
    .filter((lesson) => !(lesson.grade === 1 && lesson.semester === 1))
    .sort((a, b) => a.grade - b.grade || a.semester - b.semester || a.order - b.order);

  console.log(`🎯 Tổng số bài Tiếng Việt cần thu âm: ${targetLessons.length} bài`);

  await Promise.all([
    mkdir(join(workspace, 'public', 'audio', 'curriculum'), { recursive: true }),
    mkdir(join(workspace, 'public', 'audio', 'curriculum', 'fallback'), { recursive: true }),
  ]);

  let manifest = {};
  try {
    manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  } catch {}

  const CONCURRENCY = 6;
  let currentIndex = 0;
  let successCount = 0;
  let skipCount = 0;
  let failCount = 0;

  async function saveManifestSafely() {
    await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  }

  async function worker(workerId) {
    while (currentIndex < targetLessons.length) {
      const idx = currentIndex++;
      const lesson = targetLessons[idx];
      const lessonId = lesson.id.replace('-l', '-b');
      const passage = lesson.readingPassage;

      if (!passage) {
        console.error(`❌ [${idx + 1}/${targetLessons.length}] Bài ${lessonId} không có readingPassage!`);
        failCount++;
        continue;
      }

      const text = narration.buildLessonNarration(passage);
      const textHash = sha256(text);
      const primaryWav = join(workspace, 'public', 'audio', 'curriculum', `${lessonId}.wav`);
      const fallbackWav = join(workspace, 'public', 'audio', 'curriculum', 'fallback', `${lessonId}.wav`);

      // Kiểm tra xem file audio hiện tại đã có và khớp hash chưa
      let alreadyUpToDate = false;
      try {
        const pStat = await stat(primaryWav);
        const fStat = await stat(fallbackWav);
        if (manifest[lessonId]?.transcriptHash === textHash && pStat.size > 1000 && fStat.size > 1000) {
          alreadyUpToDate = true;
        }
      } catch {}

      if (alreadyUpToDate) {
        manifest[lessonId] = {
          lessonId,
          primaryPath: `/audio/curriculum/${lessonId}.wav`,
          fallbackPath: `/audio/curriculum/fallback/${lessonId}.wav`,
          primaryVoice: manifest[lessonId]?.primaryVoice || 'Cô Hoài My',
          fallbackVoice: manifest[lessonId]?.fallbackVoice || 'Thầy Nam Minh',
          transcriptHash: textHash,
          lessonVersion: Math.max(1, Number(manifest[lessonId]?.lessonVersion || 1)),
          sourcePages: passage.sourcePages || lesson.sourcePages || [],
        };
        skipCount++;
        if (skipCount % 20 === 0 || idx === targetLessons.length - 1) {
          console.log(`⏩ [Worker ${workerId}] Đã có sẵn & khớp hash: ${lessonId} (${skipCount} bài bỏ qua)`);
        }
        continue;
      }

      const primaryMp3 = join(audioDirectory, `${lessonId}-primary-w${workerId}.mp3`);
      const fallbackMp3 = join(audioDirectory, `${lessonId}-fallback-w${workerId}.mp3`);

      try {
        // Thu âm giọng chính (Cô Hoài My)
        await synthesizeWithRetry(
          () => synthesize(text, 'vi-VN-HoaiMyNeural', primaryMp3),
          {
            attempts: 4,
            retryDelayMs: 1000,
            onRetry: ({ attempt, attempts, error }) => console.warn(`⚠️ [${lessonId}] Retry giọng chính (${attempt}/${attempts}): ${error?.message || error}`)
          }
        );

        // Thu âm giọng fallback (Thầy Nam Minh)
        await synthesizeWithRetry(
          () => synthesize(text, 'vi-VN-NamMinhNeural', fallbackMp3),
          {
            attempts: 4,
            retryDelayMs: 1000,
            onRetry: ({ attempt, attempts, error }) => console.warn(`⚠️ [${lessonId}] Retry giọng fallback (${attempt}/${attempts}): ${error?.message || error}`)
          }
        );

        // Chuyển đổi sang WAV PCM
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
          sourcePages: passage.sourcePages || lesson.sourcePages || [],
        };

        successCount++;
        console.log(`✅ [${successCount + skipCount}/${targetLessons.length}] [Worker ${workerId}] Đã thu âm xong: ${lessonId} - ${lesson.title}`);

        if (successCount % 5 === 0) {
          await saveManifestSafely();
        }
      } catch (err) {
        failCount++;
        console.error(`❌ [Worker ${workerId}] Thất bại thu âm bài ${lessonId}:`, err.message);
      }
    }
  }

  console.log(`🚀 Bắt đầu quá trình thu âm song song (${CONCURRENCY} workers)...`);
  const startTime = Date.now();
  const workers = Array.from({ length: CONCURRENCY }, (_, i) => worker(i));
  await Promise.all(workers);

  // Lọc manifest chỉ giữ 293 bài hợp lệ
  const finalManifest = {};
  for (const lesson of targetLessons) {
    const lessonId = lesson.id.replace('-l', '-b');
    if (manifest[lessonId]) {
      finalManifest[lessonId] = manifest[lessonId];
    }
  }

  await writeFile(manifestPath, `${JSON.stringify(finalManifest, null, 2)}\n`, 'utf8');
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log('\n======================================================');
  console.log(`🎉 HOÀN TẤT THU ÂM TOÀN BỘ 293 BÀI TIẾNG VIỆT TRONG ${elapsed}s!`);
  console.log(`   - Thu âm mới: ${successCount}`);
  console.log(`   - Khớp sẵn (skip): ${skipCount}`);
  console.log(`   - Thất bại: ${failCount}`);
  console.log(`   - Tổng entries trong manifest: ${Object.keys(finalManifest).length}`);
  console.log('======================================================\n');
} finally {
  await rm(buildDirectory, { recursive: true, force: true });
  await rm(audioDirectory, { recursive: true, force: true });
}
