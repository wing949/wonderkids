import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const outputDir = await mkdtemp(join(tmpdir(), 'wonderkids-audio-speed-'));

await build({
  entryPoints: ['src/utils/audio.ts'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outfile: join(outputDir, 'audio.js'),
  logLevel: 'silent',
});

class TestAudio {
  static instances = [];

  constructor(src) {
    this.src = src;
    this.currentTime = 0;
    this.playbackRate = 1;
    this.preservesPitch = false;
    this.webkitPreservesPitch = false;
    this.onended = null;
    this.onerror = null;
    TestAudio.instances.push(this);
  }

  play() {
    return Promise.resolve();
  }

  pause() {}
}

globalThis.Audio = TestAudio;
const { soundManager } = await import(pathToFileURL(join(outputDir, 'audio.js')).href);

test('audio thu sẵn bắt đầu ở tốc độ bé đã chọn và giữ nguyên cao độ giọng', () => {
  soundManager.playPassageAudio('tv-g2-b2', '', undefined, 0.8);

  const audio = TestAudio.instances.at(-1);
  assert.equal(audio.playbackRate, 0.8);
  assert.equal(audio.preservesPitch, true);
  assert.equal(audio.webkitPreservesPitch, true);

  soundManager.stopSpeaking();
});

test('đổi tốc độ khi đang nghe áp dụng ngay, không cần phát lại bài', () => {
  soundManager.playPassageAudio('tv-g2-b2', '', undefined, 1);
  const audio = TestAudio.instances.at(-1);

  soundManager.setPassagePlaybackRate(1.2);

  assert.equal(audio.playbackRate, 1.2);
  assert.equal(TestAudio.instances.at(-1), audio);

  soundManager.stopSpeaking();
});

test('điều khiển toàn bài không thay đổi tốc độ audio Shadowing hoặc phản hồi', async () => {
  soundManager.playAudioClip('Bé đọc rất tốt.', 'vi', 1, () => {}, () => {});
  const otherAudio = TestAudio.instances.at(-1);

  soundManager.setPassagePlaybackRate(0.8);

  assert.equal(otherAudio.playbackRate, 1);

  soundManager.stopSpeaking();
});

test.after(async () => {
  delete globalThis.Audio;
  await rm(outputDir, { recursive: true, force: true });
});
