import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { promisify } from 'node:util';
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';
import { getCompetitionAudioManifest } from '../src/data/practice/index.ts';

const runFile = promisify(execFile);
const workspace = process.cwd();
const manifestPath = join(workspace, 'src', 'data', 'practice', 'competitionAudioManifest.generated.json');
const verifyOnly = process.argv.includes('--verify');

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

async function durationMs(filePath) {
  const { stdout } = await runFile('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=noprint_wrappers=1:nokey=1', filePath]);
  return Math.round(Number(stdout.trim()) * 1_000);
}

async function synthesize(text, outputPath) {
  const tts = new MsEdgeTTS();
  await tts.setMetadata('en-US-JennyNeural', OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
  const streamResult = tts.toStream(text);
  const chunks = [];
  await new Promise((resolve, reject) => {
    streamResult.audioStream.on('data', (chunk) => chunks.push(chunk));
    streamResult.audioStream.on('end', resolve);
    streamResult.audioStream.on('error', reject);
  });
  const buffer = Buffer.concat(chunks);
  if (buffer.length < 1_000) throw new Error('TTS trả về file quá nhỏ.');
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, buffer);
  return buffer;
}

async function withRetry(action, attempts = 4) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try { return await action(); } catch (error) {
      lastError = error;
      if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, attempt * 500));
    }
  }
  throw lastError;
}

const requested = getCompetitionAudioManifest();
if (requested.length !== 620) throw new Error(`Manifest nguồn phải có 620 mục, hiện có ${requested.length}.`);

let saved = {};
try { saved = JSON.parse(await readFile(manifestPath, 'utf8')); } catch {}

async function verifyEntry(source, entry) {
  if (!entry) throw new Error(`${source.itemId}: thiếu metadata.`);
  const filePath = join(workspace, 'public', source.assetPath.replace(/^\//u, ''));
  const buffer = await readFile(filePath);
  if (sha256(buffer) !== entry.fileHash) throw new Error(`${source.itemId}: fileHash không khớp.`);
  if (sha256(source.transcript) !== entry.transcriptHash) throw new Error(`${source.itemId}: transcriptHash không khớp.`);
  if ((await durationMs(filePath)) <= 0) throw new Error(`${source.itemId}: không giải mã được audio.`);
}

if (verifyOnly) {
  const errors = [];
  for (const source of requested) {
    try { await verifyEntry(source, saved[source.itemId]); } catch (error) { errors.push(error.message); }
  }
  if (errors.length) throw new Error(`Audio IOE chưa đạt (${errors.length} lỗi):\n${errors.slice(0, 20).join('\n')}`);
  console.log('PASS: 620/620 audio IOE tồn tại, giải mã được và khớp hash.');
  process.exit(0);
}

let cursor = 0;
let completed = 0;
const failures = [];

async function worker() {
  while (cursor < requested.length) {
    const source = requested[cursor++];
    const filePath = join(workspace, 'public', source.assetPath.replace(/^\//u, ''));
    try {
      const existing = saved[source.itemId];
      if (existing?.transcriptHash === sha256(source.transcript)) {
        try {
          await verifyEntry(source, existing);
          completed += 1;
          continue;
        } catch {}
      }
      const buffer = await withRetry(() => synthesize(source.transcript, filePath));
      const measuredDuration = await durationMs(filePath);
      saved[source.itemId] = {
        itemId: source.itemId,
        assetPath: source.assetPath,
        voice: 'en-US-JennyNeural',
        language: 'en-US',
        transcript: source.transcript,
        transcriptHash: sha256(source.transcript),
        sourceHash: sha256(`${source.itemId}:${source.transcript}`),
        fileHash: sha256(buffer),
        durationMs: measuredDuration,
        verificationStatus: 'verified',
      };
      completed += 1;
      if (completed % 20 === 0) {
        await writeFile(manifestPath, `${JSON.stringify(saved, null, 2)}\n`, 'utf8');
        console.log(`[${completed}/620] Đã tạo và xác minh audio IOE.`);
      }
    } catch (error) {
      failures.push(`${source.itemId}: ${error.message}`);
    }
  }
}

await Promise.all(Array.from({ length: 5 }, () => worker()));
await writeFile(manifestPath, `${JSON.stringify(saved, null, 2)}\n`, 'utf8');
if (failures.length) throw new Error(`Có ${failures.length} audio lỗi:\n${failures.slice(0, 30).join('\n')}`);
console.log(`Hoàn tất ${completed}/620 audio IOE bằng en-US-JennyNeural.`);
