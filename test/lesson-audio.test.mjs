import assert from 'node:assert/strict';
import test from 'node:test';
import { createServer } from 'vite';

let vite;
let soundManager;
let getCurriculumAudioAsset;
const VALID_TEXT_HASH = `sha256:${'a'.repeat(64)}`;

function installTtsFetch(manifest) {
  const originalFetch = globalThis.fetch;
  const requests = [];

  globalThis.fetch = async (input, init = {}) => {
    const url = String(input);
    requests.push({ url, init });

    if (url === '/audio/curriculum/manifest.json') {
      return {
        ok: true,
        json: async () => manifest,
      };
    }

    if (url === '/api/tts') {
      return {
        ok: true,
        blob: async () => new Blob(['lesson-audio']),
      };
    }

    throw new Error(`Unexpected request: ${url}`);
  };

  return {
    requests,
    restore: () => {
      globalThis.fetch = originalFetch;
    },
  };
}

test.before(async () => {
  vite = await createServer({
    configFile: false,
    appType: 'custom',
    optimizeDeps: { noDiscovery: true },
    server: { middlewareMode: true },
  });
  ({ soundManager } = await vite.ssrLoadModule('/src/utils/audio.ts'));
  ({ getCurriculumAudioAsset } = await vite.ssrLoadModule('/src/utils/curriculumAudioManifest.ts'));
});

test.after(async () => {
  await vite?.close();
});

class FailingStaticAudio {
  static createdSources = [];

  currentTime = 0;
  onended = null;
  onerror = null;

  constructor(src) {
    this.src = src;
    FailingStaticAudio.createdSources.push(src);
  }

  pause() {}

  play() {
    if (this.src.startsWith('/audio/curriculum/')) {
      this.onerror?.();
      return Promise.reject(new Error('MP3 unavailable'));
    }

    return Promise.resolve();
  }
}

test('a failed lesson asset starts the single fallback only once', async () => {
  FailingStaticAudio.createdSources = [];
  globalThis.Audio = FailingStaticAudio;
  const fetchMock = installTtsFetch({
    version: 1,
    voice: 'vi-VN-HoaiMyNeural',
    assets: {
      'tv-g1-b20': {
        url: '/audio/curriculum/tv-g1-b20.mp3',
        bytes: 2048,
        textHash: VALID_TEXT_HASH,
      },
    },
  });

  try {
    soundManager.playPassageAudio('tv-g1-b20', 'Nội dung bài đọc đầy đủ.');
    await new Promise((resolve) => setImmediate(resolve));

    const fallbackRequests = fetchMock.requests.filter(({ url }) => url === '/api/tts');
    assert.equal(fallbackRequests.length, 1);
  } finally {
    fetchMock.restore();
  }
});

class ControlledAudio {
  static instances = [];

  currentTime = 0;
  onended = null;
  onerror = null;

  constructor(src) {
    this.src = src;
    ControlledAudio.instances.push(this);
  }

  pause() {}

  play() {
    return Promise.resolve();
  }
}

test('a stale lesson failure cannot interrupt the newer lesson playback', async () => {
  ControlledAudio.instances = [];
  globalThis.Audio = ControlledAudio;
  const fetchMock = installTtsFetch({
    version: 1,
    voice: 'vi-VN-HoaiMyNeural',
    assets: {
      'tv-g1-b1': {
        url: '/audio/curriculum/tv-g1-b1.mp3', bytes: 2048, textHash: VALID_TEXT_HASH,
      },
      'tv-g1-b2': {
        url: '/audio/curriculum/tv-g1-b2.mp3', bytes: 2048, textHash: VALID_TEXT_HASH,
      },
    },
  });

  try {
    soundManager.playPassageAudio('tv-g1-b1', 'Bài cũ.');
    await new Promise((resolve) => setImmediate(resolve));
    const oldAudio = ControlledAudio.instances[0];

    soundManager.playPassageAudio('tv-g1-b2', 'Bài mới.');
    await new Promise((resolve) => setImmediate(resolve));
    oldAudio.onerror?.();
    await new Promise((resolve) => setImmediate(resolve));

    const fallbackRequests = fetchMock.requests.filter(({ url }) => url === '/api/tts');
    assert.equal(fallbackRequests.length, 0);
  } finally {
    fetchMock.restore();
  }
});

test('a passage absent from the manifest uses one fixed-voice fallback without guessing an MP3 path', async () => {
  ControlledAudio.instances = [];
  globalThis.Audio = ControlledAudio;
  const fetchMock = installTtsFetch({
    version: 1,
    voice: 'vi-VN-HoaiMyNeural',
    assets: {},
  });

  try {
    soundManager.playPassageAudio('tv-g1-b99', 'Nội dung chỉ được đọc bởi một giọng.');
    await new Promise((resolve) => setImmediate(resolve));

    assert.equal(
      ControlledAudio.instances.filter((audio) => audio.src.startsWith('/audio/curriculum/')).length,
      0
    );

    const fallbackRequests = fetchMock.requests.filter(({ url }) => url === '/api/tts');
    assert.equal(fallbackRequests.length, 1);
    assert.deepEqual(JSON.parse(fallbackRequests[0].init.body), {
      text: 'Nội dung chỉ được đọc bởi một giọng.',
      lang: 'vi',
      voice: 'vi-VN-HoaiMyNeural',
    });
  } finally {
    fetchMock.restore();
  }
});

test('starting another lesson aborts the previous manifest request before it can play', async () => {
  ControlledAudio.instances = [];
  globalThis.Audio = ControlledAudio;
  const originalFetch = globalThis.fetch;
  let resolveFirstManifest;
  let firstSignal;
  let manifestCalls = 0;

  globalThis.fetch = (input, init = {}) => {
    if (String(input) !== '/audio/curriculum/manifest.json') {
      throw new Error(`Unexpected request: ${input}`);
    }

    manifestCalls += 1;
    if (manifestCalls === 1) {
      firstSignal = init.signal;
      return new Promise((resolve) => {
        resolveFirstManifest = () => resolve({
          ok: true,
          json: async () => ({
            version: 1,
            voice: 'vi-VN-HoaiMyNeural',
            assets: {
              'tv-g1-b1': {
                url: '/audio/curriculum/tv-g1-b1.mp3',
                bytes: 2048,
                textHash: VALID_TEXT_HASH,
              },
            },
          }),
        });
      });
    }

    return Promise.resolve({
      ok: true,
      json: async () => ({
        version: 1,
        voice: 'vi-VN-HoaiMyNeural',
        assets: {
          'tv-g1-b2': {
            url: '/audio/curriculum/tv-g1-b2.mp3',
            bytes: 2048,
            textHash: VALID_TEXT_HASH,
          },
        },
      }),
    });
  };

  try {
    soundManager.playPassageAudio('tv-g1-b1', 'Bài cũ.');
    soundManager.playPassageAudio('tv-g1-b2', 'Bài mới.');
    assert.equal(firstSignal.aborted, true);

    resolveFirstManifest();
    await new Promise((resolve) => setImmediate(resolve));

    assert.deepEqual(ControlledAudio.instances.map((audio) => audio.src), [
      '/audio/curriculum/tv-g1-b2.mp3',
    ]);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('a manifest entry cannot point a lesson at another lesson’s asset', () => {
  const asset = getCurriculumAudioAsset({
    version: 1,
    voice: 'vi-VN-HoaiMyNeural',
    assets: {
      'tv-g1-b1': {
        url: '/audio/curriculum/tv-g1-b2.mp3',
        bytes: 2048,
        textHash: VALID_TEXT_HASH,
      },
    },
  }, 'tv-g1-b1');

  assert.equal(asset, null);
});

class FirstStaticLessonFailsAudio {
  static instances = [];

  currentTime = 0;
  onended = null;
  onerror = null;

  constructor(src) {
    this.src = src;
    FirstStaticLessonFailsAudio.instances.push(this);
  }

  pause() {}

  play() {
    if (this.src.endsWith('tv-g1-b1.mp3')) {
      this.onerror?.();
      return Promise.reject(new Error('MP3 unavailable'));
    }
    return Promise.resolve();
  }
}

test('starting a new lesson aborts a fallback request that is still loading', async () => {
  FirstStaticLessonFailsAudio.instances = [];
  globalThis.Audio = FirstStaticLessonFailsAudio;
  const originalFetch = globalThis.fetch;
  let manifestCalls = 0;
  let fallbackSignal;
  let resolveFallback;

  globalThis.fetch = (input, init = {}) => {
    const url = String(input);
    if (url === '/audio/curriculum/manifest.json') {
      manifestCalls += 1;
      const lessonId = manifestCalls === 1 ? 'tv-g1-b1' : 'tv-g1-b2';
      return Promise.resolve({
        ok: true,
        json: async () => ({
          version: 1,
          voice: 'vi-VN-HoaiMyNeural',
          assets: {
            [lessonId]: {
              url: `/audio/curriculum/${lessonId}.mp3`,
              bytes: 2048,
              textHash: VALID_TEXT_HASH,
            },
          },
        }),
      });
    }

    if (url === '/api/tts') {
      fallbackSignal = init.signal;
      return new Promise((resolve) => {
        resolveFallback = () => resolve({
          ok: true,
          blob: async () => new Blob(['late fallback']),
        });
      });
    }

    throw new Error(`Unexpected request: ${url}`);
  };

  try {
    soundManager.playPassageAudio('tv-g1-b1', 'Bài cũ.');
    await new Promise((resolve) => setImmediate(resolve));
    assert.ok(fallbackSignal);

    soundManager.playPassageAudio('tv-g1-b2', 'Bài mới.');
    assert.equal(fallbackSignal.aborted, true);

    resolveFallback();
    await new Promise((resolve) => setImmediate(resolve));

    assert.deepEqual(FirstStaticLessonFailsAudio.instances.map((audio) => audio.src), [
      '/audio/curriculum/tv-g1-b1.mp3',
      '/audio/curriculum/tv-g1-b2.mp3',
    ]);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
