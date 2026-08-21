import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { promisify } from 'node:util';
import { build } from 'esbuild';
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';

const runFile = promisify(execFile);
const workspace = process.cwd();
const lessonIds = process.argv.slice(2).filter((value) => !value.startsWith('--'));
const targets = lessonIds.length > 0 ? lessonIds : ['tv-g2-b1'];
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
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));

  for (const lessonId of targets) {
    const lesson = runtimeLessons.get(lessonId.replace('-l', '-b'));
    const passage = lesson?.readingPassage;
    if (
      !passage
      || passage.contentOrigin !== 'sgk_reference'
      || passage.verificationStatus !== 'verified'
      || !passage.sourcePages?.length
    ) {
      throw new Error(`${lessonId} chưa có transcript SGK đã xác minh`);
    }

    const text = narration.buildLessonNarration(passage);
    const primaryMp3 = join(audioDirectory, `${lessonId}-primary.mp3`);
    const fallbackMp3 = join(audioDirectory, `${lessonId}-fallback.mp3`);
    const primaryWav = join(workspace, 'public', 'audio', 'curriculum', `${lessonId}.wav`);
    const fallbackWav = join(workspace, 'public', 'audio', 'curriculum', 'fallback', `${lessonId}.wav`);

    await synthesize(text, 'vi-VN-HoaiMyNeural', primaryMp3);
    await synthesize(text, 'vi-VN-NamMinhNeural', fallbackMp3);
    await convertToWav(primaryMp3, primaryWav);
    await convertToWav(fallbackMp3, fallbackWav);

    manifest[lessonId] = {
      lessonId,
      primaryPath: `/audio/curriculum/${lessonId}.wav`,
      fallbackPath: `/audio/curriculum/fallback/${lessonId}.wav`,
      primaryVoice: 'Cô Hoài My',
      fallbackVoice: 'Thầy Nam Minh',
      transcriptHash: sha256(text),
      lessonVersion: Math.max(2, Number(manifest[lessonId]?.lessonVersion || 0) + 1),
      sourcePages: passage.sourcePages,
    };
    console.log(`Đã tạo audio SGK đã duyệt: ${lessonId}`);
  }

  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
} finally {
  await rm(buildDirectory, { recursive: true, force: true });
  await rm(audioDirectory, { recursive: true, force: true });
}
