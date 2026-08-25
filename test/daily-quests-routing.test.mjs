import assert from 'node:assert/strict';
import test from 'node:test';
import { INITIAL_DAILY_QUESTS } from '../src/data/gamificationData.ts';

test('nhiệm vụ hàng ngày liên kết đúng ba môn học Toán, Tiếng Việt và Tiếng Anh', () => {
  assert.equal(INITIAL_DAILY_QUESTS.length, 3);

  const questMath = INITIAL_DAILY_QUESTS.find((q) => q.id === 'quest-1');
  const questVietnamese = INITIAL_DAILY_QUESTS.find((q) => q.id === 'quest-2');
  const questEnglish = INITIAL_DAILY_QUESTS.find((q) => q.id === 'quest-3');

  assert.ok(questMath, 'Phải có quest-1');
  assert.equal(questMath.subject, 'math', 'Nhiệm vụ 1 phải trỏ về môn Toán');

  assert.ok(questVietnamese, 'Phải có quest-2');
  assert.equal(questVietnamese.subject, 'vietnamese', 'Nhiệm vụ 2 phải trỏ về môn Tiếng Việt');

  assert.ok(questEnglish, 'Phải có quest-3');
  assert.equal(questEnglish.subject, 'english', 'Nhiệm vụ 3 phải trỏ về môn Tiếng Anh');
});
