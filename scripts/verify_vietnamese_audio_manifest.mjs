import { build } from 'esbuild';
import { access, mkdtemp, readFile, rm, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';

const workspace = process.cwd();
const outputDir = await mkdtemp(join(tmpdir(), 'wonderkids-vietnamese-audio-'));

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
  let primaryBytes = 0;
  let fallbackBytes = 0;

  for (const asset of Object.values(VIETNAMESE_AUDIO_MANIFEST)) {
    for (const [kind, assetPath] of [['primary', asset.primaryPath], ['fallback', asset.fallbackPath]]) {
      const absolutePath = join(workspace, 'public', assetPath.slice(1));
      try {
        await access(absolutePath);
        const file = await readFile(absolutePath);
        const fileStats = await stat(absolutePath);
        if (fileStats.size === 0 || file.subarray(0, 4).toString('ascii') !== 'RIFF' || file.subarray(8, 12).toString('ascii') !== 'WAVE') {
          invalid.push(`${asset.lessonId}:${kind}`);
        }
        if (kind === 'primary') primaryBytes += fileStats.size;
        else fallbackBytes += fileStats.size;
      } catch {
        missing.push(`${asset.lessonId}:${kind}`);
      }
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
  };

  console.log(JSON.stringify(result, null, 2));
  if (missing.length || invalid.length) process.exitCode = 1;
} finally {
  await rm(outputDir, { recursive: true, force: true });
}
