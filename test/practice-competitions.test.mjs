import assert from 'node:assert/strict';
import test from 'node:test';
import { getAppPath, parseAppRoute } from '../src/utils/appRoute.ts';
import {
  getCompetitionAudioManifest,
  getCompetitionPack,
  getCompetitionPacks,
  getCompetitionSet,
  validateCompetitionPackRelease,
} from '../src/data/practice/index.ts';
import {
  canPlayPracticeAudio,
  createPracticeProgress,
  recordPracticeAudioPlay,
} from '../src/utils/practiceProgress.ts';

test('kho mô phỏng có đủ 120 đề và 4.900 hoạt động tự biên soạn', () => {
  const packs = getCompetitionPacks();
  assert.equal(packs.length, 10);

  const sets = packs.flatMap((pack) => pack.sets);
  const items = sets.flatMap((set) => set.sections.flatMap((section) => section.items));
  assert.equal(sets.length, 120);
  assert.equal(items.length, 4_900);
  assert.equal(new Set(sets.map((set) => set.id)).size, 120);
  assert.equal(new Set(items.map((item) => item.id)).size, 4_900);

  for (const pack of packs) {
    assert.equal(pack.sets.length, 12, pack.id);
    assert.equal(pack.contentOrigin, 'system_generated', pack.id);
    assert.equal(pack.verificationStatus, 'verified', pack.id);
    assert.equal(pack.releaseStatus, 'published', pack.id);
    assert.match(pack.officialDisclaimer, /mô phỏng.+không phải.+chính thức/iu, pack.id);
  }
});

test('IOE có đúng 3.100 hoạt động, 620 câu nghe và cấu hình thi thử theo lớp', () => {
  const packs = getCompetitionPacks().filter((pack) => pack.track === 'ioe_simulation');
  assert.equal(packs.length, 5);
  const sets = packs.flatMap((pack) => pack.sets);
  const items = sets.flatMap((set) => set.sections.flatMap((section) => section.items));
  assert.equal(items.length, 3_100);
  assert.equal(items.filter((item) => item.audio).length, 620);

  for (const pack of packs) {
    for (const set of pack.sets) {
      const setItems = set.sections.flatMap((section) => section.items);
      const expectedCount = set.setNumber <= 10 ? 30 : pack.grade <= 2 ? 100 : 200;
      assert.equal(setItems.length, expectedCount, set.id);
      assert.equal(set.totalPoints, expectedCount * 10, set.id);
      assert.equal(set.timeLimitSeconds, set.setNumber <= 10 ? undefined : 1_800, set.id);
      assert.equal(setItems.filter((item) => item.audio).length, expectedCount * 0.2, set.id);
    }
  }

  const manifest = getCompetitionAudioManifest();
  assert.equal(manifest.length, 620);
  assert.equal(new Set(manifest.map((entry) => entry.itemId)).size, 620);
  assert.equal(new Set(manifest.map((entry) => entry.assetPath)).size, 620);
  for (const entry of manifest) {
    assert.equal(entry.voice, 'en-US-JennyNeural', entry.itemId);
    assert.equal(entry.language, 'en-US', entry.itemId);
    assert.equal(entry.verificationStatus, 'verified', entry.itemId);
    assert.match(entry.assetPath, /^\/audio\/practice\/ioe\/g[1-5]\/s\d{2}\//u, entry.itemId);
    assert.ok(entry.transcriptHash.length >= 32, entry.itemId);
    assert.ok(entry.sourceHash.length >= 32, entry.itemId);
    assert.ok(entry.fileHash.length >= 32, entry.itemId);
    assert.ok(entry.durationMs > 0, entry.itemId);
    assert.equal('fallbackAssetPath' in entry, false, entry.itemId);
  }
});

test('Trạng Nguyên có đúng 1.800 hoạt động, 30 phút và không có audio', () => {
  const packs = getCompetitionPacks().filter((pack) => pack.track === 'trang_nguyen_simulation');
  assert.equal(packs.length, 5);
  const items = packs.flatMap((pack) => pack.sets.flatMap((set) => set.sections.flatMap((section) => section.items)));
  assert.equal(items.length, 1_800);
  assert.equal(items.filter((item) => item.audio).length, 0);
  for (const pack of packs) {
    for (const set of pack.sets) {
      assert.equal(set.totalPoints, 300, set.id);
      assert.equal(set.timeLimitSeconds, 1_800, set.id);
      assert.equal(set.sections.flatMap((section) => section.items).length, 30, set.id);
    }
  }
});

test('route mô phỏng giữ đúng lớp, đề và câu đến 200 khi chia sẻ hoặc F5', () => {
  const ioe = { kind: 'practice-competition-set', track: 'ioe_simulation', grade: 5, setNumber: 12, questionNumber: 200 };
  const trangNguyen = { kind: 'practice-competition-set', track: 'trang_nguyen_simulation', grade: 4, setNumber: 8, questionNumber: 7 };
  assert.equal(getAppPath(ioe), '/luyen-de/ioe/lop-5/de-12?cau=200');
  assert.deepEqual(parseAppRoute(getAppPath(ioe)), ioe);
  assert.equal(getAppPath(trangNguyen), '/luyen-de/trang-nguyen/lop-4/de-08?cau=7');
  assert.deepEqual(parseAppRoute(getAppPath(trangNguyen)), trangNguyen);
  assert.deepEqual(parseAppRoute('/luyen-de/ioe/lop-2'), {
    kind: 'practice-competition-list', track: 'ioe_simulation', grade: 2,
  });
});

test('số lượt nghe được lưu và đề thi thử chặn từ lần thứ ba', () => {
  const itemId = 'ioe-sim-g1-s11-i001';
  let progress = createPracticeProgress('ioe-sim-g1-s11', 1_000);
  assert.equal(canPlayPracticeAudio(progress, itemId, 2), true);
  progress = recordPracticeAudioPlay(progress, itemId, 1_100);
  progress = recordPracticeAudioPlay(progress, itemId, 1_200);
  assert.equal(progress.audioPlayCounts[itemId], 2);
  assert.equal(canPlayPracticeAudio(progress, itemId, 2), false);
});

test('cổng phát hành IOE khóa cả gói khi thiếu hoặc sai một audio', () => {
  const source = getCompetitionPack('ioe_simulation', 1);
  assert.deepEqual(validateCompetitionPackRelease(source), []);
  const broken = structuredClone(source);
  const audioItem = broken.sets.flatMap((set) => set.sections.flatMap((section) => section.items)).find((item) => item.audio);
  audioItem.audio.fileHash = '';
  assert.ok(validateCompetitionPackRelease(broken).some((issue) => /audio|hash/iu.test(issue)));
  assert.equal(getCompetitionSet('ioe_simulation', 2, 1)?.id, 'ioe-sim-g2-s01');
  assert.equal(getCompetitionSet('trang_nguyen_simulation', 4, 8)?.id, 'trang-nguyen-sim-g4-s08');
});

test('câu điền từ không để lộ nguyên đáp án trong chính đề bài', () => {
  for (const pack of getCompetitionPacks()) {
    const items = pack.sets.flatMap((set) => set.sections.flatMap((section) => section.items));
    for (const item of items.filter((candidate) => candidate.type === 'word_fill')) {
      assert.equal(typeof item.correctAnswer, 'string', item.id);
      const normalizedPrompt = item.prompt.toLocaleLowerCase('vi').replace(/[“”"'.:,;!?]/gu, ' ');
      const normalizedAnswer = item.correctAnswer.toLocaleLowerCase('vi').trim();
      assert.equal(normalizedPrompt.split(/\s+/u).join(' ').includes(normalizedAnswer), false, item.id);
    }
  }
});

test('đáp án trắc nghiệm được đảo vị trí, không thể đoán bằng cách luôn chọn A', () => {
  for (const pack of getCompetitionPacks()) {
    const choices = pack.sets.flatMap((set) => set.sections.flatMap((section) => section.items))
      .filter((item) => item.options && !Array.isArray(item.correctAnswer));
    const positions = new Set(choices.map((item) => item.correctAnswer));
    assert.ok(positions.size >= 3, `${pack.id}: đáp án chỉ xuất hiện ở ${[...positions].join(', ')}`);
  }
});
