import assert from 'node:assert/strict';
import test from 'node:test';

import { synthesizeWithRetry } from '../scripts/lib/verifiedVietnameseAudioRetry.mjs';

test('tạo audio thử lại khi dịch vụ TTS đóng luồng tạm thời', async () => {
  let attempts = 0;
  const synthesize = async () => {
    attempts += 1;
    if (attempts < 3) throw new Error('Stream closed before the synthesis completed');
    return 'complete-audio';
  };

  const result = await synthesizeWithRetry(synthesize, { attempts: 3, retryDelayMs: 0 });

  assert.equal(result, 'complete-audio');
  assert.equal(attempts, 3);
});

test('không chấp nhận audio dở dang khi TTS luôn đóng luồng', async () => {
  let attempts = 0;
  const synthesize = async () => {
    attempts += 1;
    throw new Error('Stream closed before the synthesis completed');
  };

  await assert.rejects(
    synthesizeWithRetry(synthesize, { attempts: 3, retryDelayMs: 0 }),
    /Stream closed before the synthesis completed/,
  );
  assert.equal(attempts, 3);
});
