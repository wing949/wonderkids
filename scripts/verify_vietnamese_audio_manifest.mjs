import { build } from 'esbuild';
import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import { access, mkdtemp, readFile, rm, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';
import { promisify } from 'node:util';

const workspace = process.cwd();
const outputDir = await mkdtemp(join(tmpdir(), 'wonderkids-vietnamese-audio-'));
const runFile = promisify(execFile);
const tasksPath = join(workspace, 'scripts', 'target_293_structured_reading_passages.json');

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
  const generationTasks = JSON.parse(await readFile(tasksPath, 'utf8'));
  const taskByLessonId = new Map(generationTasks.map((task) => [task.lessonId, task]));
  const runtimeLessons = new Map(
    [1, 2, 3, 4, 5]
      .flatMap((grade) => getLessonsForGradeAndSubject(grade, 'vietnamese'))
      .map((lesson) => [lesson.id.replace('-l', '-b'), lesson]),
  );
  const expectedLessonIds = [...runtimeLessons.entries()]
    .filter(([, lesson]) => lesson.readingPassage?.contentOrigin === 'sgk_reference'
      && lesson.readingPassage.verificationStatus === 'verified'
      && lesson.readingPassage.sourcePages?.length)
    .map(([lessonId]) => lessonId)
    .sort();
  const manifestLessonIds = Object.keys(VIETNAMESE_AUDIO_MANIFEST).sort();
  const manifestLessonIdMismatch = expectedLessonIds.length !== manifestLessonIds.length
    || expectedLessonIds.some((lessonId, index) => lessonId !== manifestLessonIds[index]);
  const missing = [];
  const invalid = [];
  const forbiddenDisclosureDetected = [];
  const manifestInvalid = [];
  const sourcePageMismatches = [];
  const decodeInvalid = [];
  const poetryProsodyInvalid = [];
  const decodeTargets = [];
  let primaryBytes = 0;

  for (const asset of Object.values(VIETNAMESE_AUDIO_MANIFEST)) {
    const lesson = runtimeLessons.get(asset.lessonId);
    const task = taskByLessonId.get(asset.lessonId);
    const runtimeTranscript = lesson?.readingPassage ? buildLessonNarration(lesson.readingPassage) : '';
    const runtimeTranscriptHash = runtimeTranscript ? sha256(runtimeTranscript) : '';
    const runtimeSourcePages = lesson?.readingPassage?.sourcePages || [];
    const sourcePagesMatch = Array.isArray(asset.sourcePages)
      && asset.sourcePages.length > 0
      && asset.sourcePages.length === runtimeSourcePages.length
      && asset.sourcePages.every((page, index) => page === runtimeSourcePages[index]);
    if (
      !/^[a-f0-9]{64}$/.test(asset.transcriptHash)
      || asset.transcriptHash !== runtimeTranscriptHash
      || asset.lessonVersion < 1
      || !Array.isArray(asset.sourcePages)
      || asset.primaryVoice !== 'Cô Giáo Vy'
      || asset.genre !== task?.readingPassage?.genre
      || asset.fallbackPath !== undefined
      || asset.fallbackVoice !== undefined
    ) {
      manifestInvalid.push(asset.lessonId);
    }
    if (!sourcePagesMatch) {
      sourcePageMismatches.push({
        lessonId: asset.lessonId,
        manifest: asset.sourcePages,
        runtime: runtimeSourcePages,
      });
    }
    for (const [kind, assetPath] of [['primary', asset.primaryPath]]) {
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
        if (task?.readingPassage?.genre === 'poem') {
          const plan = task.prosodyPlan;
          if (
            !plan
            || asset.prosodyVersion !== plan.version
            || asset.prosodyHash !== plan.prosodyHash
            || asset.segmentCount !== plan.segments.length
            || asset.stanzaCount !== plan.stanzaCount
            || asset.lineCount !== plan.lineCount
            || asset.audioSha256 !== sha256(file)
            || asset.isExpressive !== true
          ) {
            poetryProsodyInvalid.push(asset.lessonId);
          }
        }
        decodeTargets.push({ lessonId: asset.lessonId, absolutePath });
        primaryBytes += fileStats.size;
      } catch {
        missing.push(`${asset.lessonId}:${kind}`);
      }
    }
  }

  let decodeIndex = 0;
  async function decodeWorker() {
    while (decodeIndex < decodeTargets.length) {
      const target = decodeTargets[decodeIndex];
      decodeIndex += 1;
      try {
        const { stdout } = await runFile('ffprobe', [
          '-v', 'error',
          '-show_entries', 'format=duration',
          '-of', 'default=noprint_wrappers=1:nokey=1',
          target.absolutePath,
        ]);
        const duration = Number(stdout.trim());
        if (!Number.isFinite(duration) || duration <= 0) decodeInvalid.push(target.lessonId);
      } catch {
        decodeInvalid.push(target.lessonId);
      }
    }
  }
  await Promise.all(Array.from({ length: 8 }, () => decodeWorker()));

  const result = {
    lessonCount: Object.keys(VIETNAMESE_AUDIO_MANIFEST).length,
    expectedLessonCount: expectedLessonIds.length,
    manifestLessonIdMismatch,
    primaryFiles: Object.keys(VIETNAMESE_AUDIO_MANIFEST).length - missing.filter((item) => item.endsWith(':primary')).length,
    fallbackFiles: 0,
    fallbackPolicy: 'disabled',
    primaryBytes,
    missing,
    invalid,
    decodeInvalid,
    forbiddenDisclosureDetected,
    manifestInvalid,
    sourcePageMismatches,
    poetryProsodyInvalid,
  };

  console.log(JSON.stringify(result, null, 2));
  if (
    missing.length
    || manifestLessonIdMismatch
    || invalid.length
    || decodeInvalid.length
    || forbiddenDisclosureDetected.length
    || manifestInvalid.length
    || sourcePageMismatches.length
    || poetryProsodyInvalid.length
  ) process.exitCode = 1;
} finally {
  await rm(outputDir, { recursive: true, force: true });
}
