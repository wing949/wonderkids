import { build } from 'esbuild';
import { createHash } from 'node:crypto';
import { access, mkdtemp, readFile, rm, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';

const workspace = process.cwd();
const outputDir = await mkdtemp(join(tmpdir(), 'wonderkids-vietnamese-audio-'));

function wavPcmData(file) {
  let offset = 12;
  while (offset + 8 <= file.length) {
    const chunkId = file.subarray(offset, offset + 4).toString('ascii');
    const chunkSize = file.readUInt32LE(offset + 4);
    if (chunkId === 'data') return file.subarray(offset + 8, offset + 8 + chunkSize);
    offset += 8 + chunkSize + (chunkSize % 2);
  }
  return null;
}

function sha256(data) {
  return createHash('sha256').update(data).digest('hex');
}

try {
  await build({
    entryPoints: [
      'src/data/curriculum/vietnamese/audioManifest.ts',
      'src/data/curriculum/index.ts',
      'src/utils/lessonNarration.ts',
    ],
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'node20',
    outdir: outputDir,
    write: true,
    logLevel: 'silent',
  });

  const { VIETNAMESE_AUDIO_MANIFEST } = await import(pathToFileURL(join(outputDir, 'data', 'curriculum', 'vietnamese', 'audioManifest.js')).href);
  const { getLessonsForGradeAndSubject } = await import(pathToFileURL(join(outputDir, 'data', 'curriculum', 'index.js')).href);
  const { buildLessonNarration } = await import(pathToFileURL(join(outputDir, 'utils', 'lessonNarration.js')).href);
  const runtimeLessons = new Map(
    [1, 2, 3, 4, 5]
      .flatMap((grade) => getLessonsForGradeAndSubject(grade, 'vietnamese'))
      .map((lesson) => [lesson.id, lesson]),
  );
  const missing = [];
  const invalid = [];
  const forbiddenDisclosureDetected = [];
  const manifestInvalid = [];
  const identicalPrimaryAndFallback = [];
  let primaryBytes = 0;
  let fallbackBytes = 0;

  for (const asset of Object.values(VIETNAMESE_AUDIO_MANIFEST)) {
    const lesson = runtimeLessons.get(asset.lessonId);
    const runtimeTranscript = lesson?.readingPassage ? buildLessonNarration(lesson.readingPassage) : '';
    const runtimeTranscriptHash = runtimeTranscript ? sha256(runtimeTranscript) : '';
    if (
      !/^[a-f0-9]{64}$/.test(asset.transcriptHash)
      || asset.transcriptHash !== runtimeTranscriptHash
      || asset.lessonVersion < 1
      || !Array.isArray(asset.sourcePages)
    ) {
      manifestInvalid.push(asset.lessonId);
    }
    const assetHashes = {};
    for (const [kind, assetPath] of [['primary', asset.primaryPath], ['fallback', asset.fallbackPath]]) {
      const absolutePath = join(workspace, 'public', assetPath.slice(1));
      try {
        await access(absolutePath);
        const file = await readFile(absolutePath);
        const fileStats = await stat(absolutePath);
        const isWav = file.subarray(0, 4).toString('ascii') === 'RIFF' && file.subarray(8, 12).toString('ascii') === 'WAVE';
        const isMp3 = file.length > 3 && ((file[0] === 0xff && (file[1] & 0xe0) === 0xe0) || file.subarray(0, 3).toString('ascii') === 'ID3');
        if (fileStats.size === 0 || (!isWav && !isMp3)) {
          invalid.push(`${asset.lessonId}:${kind}`);
        } else if (isWav) {
          const pcm = wavPcmData(file);
          if (!pcm) {
            invalid.push(`${asset.lessonId}:${kind}`);
          } else {
            const legacyBytes = kind === 'primary' ? 552960 : 506880;
            const legacyHash = kind === 'primary'
              ? '7c91d642b467c265cb41aabdb5f9cbca60b9d2ed67f4ccd839884187b0bb8a2e'
              : 'f00942c59dcc1fcaf8da62a279e05709ce2b7eb45fb25fe8c7621201946358a0';
            if (sha256(pcm.subarray(0, legacyBytes)) === legacyHash) {
              forbiddenDisclosureDetected.push(`${asset.lessonId}:${kind}`);
            }
          }
        }
        assetHashes[kind] = sha256(file);
        if (kind === 'primary') primaryBytes += fileStats.size;
        else fallbackBytes += fileStats.size;
      } catch {
        missing.push(`${asset.lessonId}:${kind}`);
      }
    }
    if (asset.fallbackPath && asset.fallbackPath !== asset.primaryPath && assetHashes.primary && assetHashes.primary === assetHashes.fallback) {
      identicalPrimaryAndFallback.push(asset.lessonId);
    }
  }

  const result = {
    lessonCount: Object.keys(VIETNAMESE_AUDIO_MANIFEST).length,
    primaryFiles: Object.keys(VIETNAMESE_AUDIO_MANIFEST).length - missing.filter((item) => item.endsWith(':primary')).length,
    fallbackFiles: Object.keys(VIETNAMESE_AUDIO_MANIFEST).length - missing.filter((item) => item.endsWith(':fallback')).length,
    primaryBytes,
    fallbackBytes,
    missing,
    invalid,
    forbiddenDisclosureDetected,
    manifestInvalid,
    identicalPrimaryAndFallback,
  };

  console.log(JSON.stringify(result, null, 2));
  if (missing.length || invalid.length || forbiddenDisclosureDetected.length || manifestInvalid.length || identicalPrimaryAndFallback.length) process.exitCode = 1;
} finally {
  await rm(outputDir, { recursive: true, force: true });
}
