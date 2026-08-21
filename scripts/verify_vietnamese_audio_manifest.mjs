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
    entryPoints: ['src/data/curriculum/vietnamese/audioManifest.ts'],
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'node20',
    outfile: join(outputDir, 'manifest.js'),
    write: true,
    logLevel: 'silent',
  });

  const { VIETNAMESE_AUDIO_MANIFEST } = await import(pathToFileURL(join(outputDir, 'manifest.js')).href);
  const missing = [];
  const invalid = [];
  const disclosureInvalid = [];
  const identicalPrimaryAndFallback = [];
  let primaryBytes = 0;
  let fallbackBytes = 0;

  for (const asset of Object.values(VIETNAMESE_AUDIO_MANIFEST)) {
    const assetHashes = {};
    for (const [kind, assetPath] of [['primary', asset.primaryPath], ['fallback', asset.fallbackPath]]) {
      const absolutePath = join(workspace, 'public', assetPath.slice(1));
      try {
        await access(absolutePath);
        const file = await readFile(absolutePath);
        const fileStats = await stat(absolutePath);
        const pcm = wavPcmData(file);
        if (fileStats.size === 0 || file.subarray(0, 4).toString('ascii') !== 'RIFF' || file.subarray(8, 12).toString('ascii') !== 'WAVE' || !pcm) {
          invalid.push(`${asset.lessonId}:${kind}`);
        } else {
          const pcmBytes = kind === 'primary' ? asset.primaryDisclosurePcmBytes : asset.fallbackDisclosurePcmBytes;
          const expectedHash = kind === 'primary' ? asset.primaryDisclosurePcmSha256 : asset.fallbackDisclosurePcmSha256;
          if (sha256(pcm.subarray(0, pcmBytes)) !== expectedHash) disclosureInvalid.push(`${asset.lessonId}:${kind}`);
        }
        assetHashes[kind] = sha256(file);
        if (kind === 'primary') primaryBytes += fileStats.size;
        else fallbackBytes += fileStats.size;
      } catch {
        missing.push(`${asset.lessonId}:${kind}`);
      }
    }
    if (assetHashes.primary && assetHashes.primary === assetHashes.fallback) {
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
    disclosureInvalid,
    identicalPrimaryAndFallback,
  };

  console.log(JSON.stringify(result, null, 2));
  if (missing.length || invalid.length || disclosureInvalid.length || identicalPrimaryAndFallback.length) process.exitCode = 1;
} finally {
  await rm(outputDir, { recursive: true, force: true });
}
