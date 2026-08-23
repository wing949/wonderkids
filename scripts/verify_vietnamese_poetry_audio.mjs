import { execFile } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { devNull } from 'node:os';
import { join } from 'node:path';
import { promisify } from 'node:util';

const runFile = promisify(execFile);
const tasks = JSON.parse(await readFile('scripts/target_293_structured_reading_passages.json', 'utf8'));
const manifest = JSON.parse(await readFile(
  'src/data/curriculum/vietnamese/audioManifest.generated.json',
  'utf8',
));
const poems = tasks.filter((task) => task.readingPassage.genre === 'poem');
const failures = [];
const results = [];
let nextIndex = 0;

function spokenWordCount(plan) {
  return plan.segments
    .flatMap((segment) => segment.text.trim().split(/\s+/u))
    .filter(Boolean).length;
}

async function inspect(task) {
  const asset = manifest[task.lessonId];
  const absolutePath = join(process.cwd(), 'public', asset.primaryPath.slice(1));
  const [{ stdout: durationOutput }, silenceResult] = await Promise.all([
    runFile('ffprobe', [
      '-v', 'error', '-show_entries', 'format=duration',
      '-of', 'default=noprint_wrappers=1:nokey=1', absolutePath,
    ]),
    runFile('ffmpeg', [
      '-hide_banner', '-i', absolutePath,
      '-af', 'silencedetect=noise=-35dB:d=0.30', '-f', 'null', devNull,
    ]).catch((error) => error),
  ]);
  const durationSeconds = Number(durationOutput.trim());
  const silenceLog = `${silenceResult.stdout || ''}\n${silenceResult.stderr || ''}`;
  const silenceDurations = [...silenceLog.matchAll(/silence_duration:\s*([0-9.]+)/gu)]
    .map((match) => Number(match[1]));
  const longPauses = silenceDurations.filter((duration) => duration >= 0.65).length;
  const wordsPerMinute = spokenWordCount(task.prosodyPlan) * 60 / durationSeconds;
  const reasons = [];

  if (!Number.isFinite(durationSeconds) || durationSeconds <= 0) reasons.push('duration');
  if (Math.abs(durationSeconds * 1000 - asset.durationMs) > 1000) reasons.push('manifest-duration');
  if (wordsPerMinute < 100 || wordsPerMinute > 135) reasons.push(`wpm:${wordsPerMinute.toFixed(1)}`);
  if (silenceDurations.length < task.prosodyPlan.lineCount - 1) {
    reasons.push(`line-pauses:${silenceDurations.length}/${task.prosodyPlan.lineCount - 1}`);
  }
  if (longPauses < task.prosodyPlan.stanzaCount) {
    reasons.push(`stanza-pauses:${longPauses}/${task.prosodyPlan.stanzaCount}`);
  }

  const row = {
    lessonId: task.lessonId,
    durationSeconds: Number(durationSeconds.toFixed(2)),
    wordsPerMinute: Number(wordsPerMinute.toFixed(1)),
    detectedPauses: silenceDurations.length,
    detectedLongPauses: longPauses,
    stanzaCount: task.prosodyPlan.stanzaCount,
    lineCount: task.prosodyPlan.lineCount,
    reasons,
  };
  results.push(row);
  if (reasons.length > 0) failures.push(row);
}

async function worker() {
  while (nextIndex < poems.length) {
    const task = poems[nextIndex];
    nextIndex += 1;
    await inspect(task);
  }
}

await Promise.all(Array.from({ length: 6 }, () => worker()));
results.sort((left, right) => left.lessonId.localeCompare(right.lessonId));
failures.sort((left, right) => left.lessonId.localeCompare(right.lessonId));

const summary = {
  poemCount: poems.length,
  passed: poems.length - failures.length,
  failed: failures.length,
  speedRange: results.length ? {
    min: Math.min(...results.map((row) => row.wordsPerMinute)),
    max: Math.max(...results.map((row) => row.wordsPerMinute)),
  } : null,
  failures,
};
console.log(JSON.stringify(summary, null, 2));
if (failures.length > 0) process.exitCode = 1;
