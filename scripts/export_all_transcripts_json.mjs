import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { tmpdir } from 'node:os';
import { build } from 'esbuild';

const workspace = process.cwd();
const buildDir = await fs.mkdtemp(path.join(tmpdir(), 'transcripts-export-'));

try {
  await build({
    entryPoints: ['src/data/curriculum/vietnamese/sgkTranscripts.ts'],
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'node20',
    outdir: buildDir,
    write: true,
    logLevel: 'silent',
  });

  const { SGK_VERIFIED_TRANSCRIPTS } = await import(pathToFileURL(path.join(buildDir, 'sgkTranscripts.js')).href);

  await fs.writeFile(
    path.join(workspace, 'scripts', 'all_transcripts_for_audio.json'),
    JSON.stringify(SGK_VERIFIED_TRANSCRIPTS, null, 2),
    'utf8'
  );

  console.log(`Exported ${Object.keys(SGK_VERIFIED_TRANSCRIPTS).length} verified transcripts to all_transcripts_for_audio.json`);
} finally {
  await fs.rm(buildDir, { recursive: true, force: true }).catch(() => {});
}
