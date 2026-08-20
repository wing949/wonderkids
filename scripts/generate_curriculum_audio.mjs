import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { createServer } from 'vite';
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';

const VOICE = 'vi-VN-HoaiMyNeural';
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'audio', 'curriculum');
const MANIFEST_PATH = path.join(OUTPUT_DIR, 'manifest.json');
const MIN_AUDIO_BYTES = 1024;
const VERIFY_ONLY = process.argv.includes('--verify');
const GENERATION_CONCURRENCY = Math.min(
  3,
  Math.max(1, Number.parseInt(process.env.CURRICULUM_AUDIO_CONCURRENCY || '2', 10) || 2)
);

function textHash(text) {
  return `sha256:${createHash('sha256').update(text, 'utf8').digest('hex')}`;
}

function escapeSsmlText(text) {
  return text.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  })[character]);
}

function pause(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loadExpectedPassages() {
  const vite = await createServer({
    configFile: false,
    appType: 'custom',
    optimizeDeps: { noDiscovery: true },
    server: { middlewareMode: true },
  });

  try {
    const { getLessonsForGradeAndSubject } = await vite.ssrLoadModule('/src/data/curriculum/index.ts');
    const { buildLessonNarration } = await vite.ssrLoadModule('/src/utils/lessonNarration.ts');
    const passages = [];

    for (const grade of [1, 2, 3, 4, 5]) {
      for (const lesson of getLessonsForGradeAndSubject(grade, 'vietnamese')) {
        if (!lesson.readingPassage) continue;
        passages.push({ id: lesson.id, text: buildLessonNarration(lesson.readingPassage) });
      }
    }

    const ids = new Set();
    for (const passage of passages) {
      if (ids.has(passage.id)) throw new Error(`Trùng mã bài học: ${passage.id}`);
      if (!passage.text.trim()) throw new Error(`Bài ${passage.id} không có nội dung để thu âm.`);
      ids.add(passage.id);
    }

    return passages;
  } finally {
    await vite.close();
  }
}

async function readManifest() {
  try {
    return JSON.parse(await fs.readFile(MANIFEST_PATH, 'utf8'));
  } catch {
    return null;
  }
}

async function assetMatches(asset, id, expectedHash) {
  if (!asset || asset.url !== `/audio/curriculum/${id}.mp3` || asset.textHash !== expectedHash) {
    return false;
  }

  try {
    const filePath = path.join(OUTPUT_DIR, `${id}.mp3`);
    const stat = await fs.stat(filePath);
    if (!stat.isFile() || stat.size < MIN_AUDIO_BYTES || stat.size !== asset.bytes) return false;

    const file = await fs.open(filePath, 'r');
    try {
      const header = Buffer.alloc(3);
      await file.read(header, 0, header.length, 0);
      const hasId3Header = header[0] === 0x49 && header[1] === 0x44 && header[2] === 0x33;
      const hasMpegFrame = header[0] === 0xff && (header[1] & 0xe0) === 0xe0;
      return hasId3Header || hasMpegFrame;
    } finally {
      await file.close();
    }
  } catch {
    return false;
  }
}

async function renderAudio(text) {
  const tts = new MsEdgeTTS();
  await tts.setMetadata(VOICE, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
  const { audioStream } = tts.toStream(escapeSsmlText(text));

  return new Promise((resolve, reject) => {
    const chunks = [];
    let settled = false;
    const fail = (error) => {
      if (!settled) {
        settled = true;
        reject(error);
      }
    };

    audioStream.on('data', (chunk) => chunks.push(chunk));
    audioStream.once('error', fail);
    audioStream.once('end', () => {
      if (!settled) {
        settled = true;
        resolve(Buffer.concat(chunks));
      }
    });
  });
}

async function writeAtomically(filePath, contents) {
  const temporaryPath = `${filePath}.tmp`;
  await fs.writeFile(temporaryPath, contents);
  await fs.rename(temporaryPath, filePath);
}

async function verify(expectedPassages) {
  const manifest = await readManifest();
  const failures = [];
  const expectedById = new Map(expectedPassages.map((passage) => [passage.id, passage]));

  if (!manifest || manifest.version !== 1 || manifest.voice !== VOICE || !manifest.assets) {
    failures.push('manifest.json thiếu hoặc không đúng phiên bản/giọng đọc chuẩn.');
  }

  for (const passage of expectedPassages) {
    const asset = manifest?.assets?.[passage.id];
    if (!(await assetMatches(asset, passage.id, textHash(passage.text)))) {
      failures.push(`${passage.id}: thiếu file, file không hợp lệ hoặc nội dung đã thay đổi.`);
    }
  }

  for (const id of Object.keys(manifest?.assets || {})) {
    if (!expectedById.has(id)) failures.push(`${id}: có trong manifest nhưng không còn là bài đọc.`);
  }

  if (failures.length) {
    console.error(`Kho audio chưa hợp lệ (${failures.length} lỗi):`);
    for (const failure of failures) console.error(`- ${failure}`);
    process.exitCode = 1;
    return;
  }

  console.log(`Đã kiểm tra ${expectedPassages.length} audio assets và manifest: hợp lệ.`);
}

async function generate(expectedPassages) {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  const previousManifest = await readManifest();
  const assets = {};
  let manifestWrite = Promise.resolve();

  const saveManifest = () => {
    const assetsSnapshot = Object.fromEntries(
      Object.entries(assets).sort(([left], [right]) => left.localeCompare(right))
    );
    manifestWrite = manifestWrite.then(() => writeAtomically(
      MANIFEST_PATH,
      `${JSON.stringify({ version: 1, voice: VOICE, assets: assetsSnapshot }, null, 2)}\n`
    ));
    return manifestWrite;
  };

  console.log(
    `Chuẩn bị ${expectedPassages.length} bài đọc với một giọng ${VOICE} ` +
    `(tối đa ${GENERATION_CONCURRENCY} lượt song song).`
  );
  const generateOne = async (index) => {
    const passage = expectedPassages[index];
    const hash = textHash(passage.text);
    const previousAsset = previousManifest?.assets?.[passage.id];
    const filePath = path.join(OUTPUT_DIR, `${passage.id}.mp3`);

    if (await assetMatches(previousAsset, passage.id, hash)) {
      assets[passage.id] = previousAsset;
      console.log(`[${index + 1}/${expectedPassages.length}] Giữ nguyên ${passage.id}`);
      return;
    }

    let audioBuffer;
    let lastError;
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      try {
        audioBuffer = await renderAudio(passage.text);
        break;
      } catch (error) {
        lastError = error;
        console.warn(`[${index + 1}/${expectedPassages.length}] ${passage.id} lỗi lần ${attempt}: ${error.message}`);
        await pause(1500 * attempt);
      }
    }

    if (!audioBuffer || audioBuffer.length < MIN_AUDIO_BYTES) {
      throw new Error(`Không thể tạo audio hợp lệ cho ${passage.id}: ${lastError?.message || 'file quá nhỏ'}`);
    }

    await writeAtomically(filePath, audioBuffer);
    assets[passage.id] = {
      url: `/audio/curriculum/${passage.id}.mp3`,
      bytes: audioBuffer.length,
      textHash: hash,
    };
    console.log(`[${index + 1}/${expectedPassages.length}] Đã tạo ${passage.id} (${audioBuffer.length} bytes)`);
    await saveManifest();
    await pause(350);
  };

  let nextIndex = 0;
  const worker = async () => {
    while (nextIndex < expectedPassages.length) {
      const index = nextIndex;
      nextIndex += 1;
      await generateOne(index);
    }
  };

  await Promise.all(Array.from({ length: GENERATION_CONCURRENCY }, worker));
  await manifestWrite;

  await saveManifest();
  console.log(`Đã cập nhật manifest cho ${expectedPassages.length} bài đọc.`);
}

const expectedPassages = await loadExpectedPassages();
if (VERIFY_ONLY) {
  await verify(expectedPassages);
} else {
  await generate(expectedPassages);
  await verify(expectedPassages);
}
