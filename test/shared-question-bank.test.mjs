import assert from 'node:assert/strict';
import test from 'node:test';
import {
  buildQuestionBankSession,
  getAvailableQuestionCounts,
  getQuestionBankItems,
  getQuestionBankTopics,
} from '../src/data/practice/questionBank.ts';
import { getCompetitionPacks, getPracticePacks } from '../src/data/practice/index.ts';
import { getViolympicDigitalItems } from '../src/data/practice/violympicDigitalReferenceBank.ts';
import { getViolympicReferenceItems } from '../src/data/practice/violympicReferenceBank.ts';
import {
  ARENA_LEADERBOARD_STORAGE_KEY,
  readArenaLeaderboard,
  recordArenaResult,
} from '../src/utils/arenaLeaderboard.ts';
import { getAppPath, parseAppRoute } from '../src/utils/appRoute.ts';

function memoryStorage() {
  const values = new Map();
  return {
    getItem(key) { return values.get(key) ?? null; },
    setItem(key, value) { values.set(key, value); },
  };
}

function questionSignature(item) {
  const normalize = (value) => String(value)
    .normalize('NFKC')
    .toLocaleLowerCase('vi')
    .replace(/[?!.:,;]+/gu, '')
    .replace(/\s+/gu, ' ')
    .trim();
  return `${normalize(item.prompt)}|${normalize(Array.isArray(item.correctAnswer) ? item.correctAnswer.join('|') : item.correctAnswer)}`;
}

test('ba cuộc thi lấy câu trực tiếp từ ngân hàng hiện có và nguồn Violympic đã kiểm duyệt, không tạo bản sao nội dung', () => {
  const generalIds = new Set(getPracticePacks()
    .flatMap((pack) => pack.sets)
    .flatMap((set) => set.sections)
    .flatMap((section) => section.items)
    .map((item) => item.id));
  const competitionIds = new Set(getCompetitionPacks()
    .flatMap((pack) => pack.sets)
    .flatMap((set) => set.sections)
    .flatMap((section) => section.items)
    .map((item) => item.id));
  const violympicDigitalIds = new Set(getViolympicDigitalItems().map((item) => item.id));
  const violympicOcrIds = new Set(getViolympicReferenceItems().map((item) => item.id));

  const violympic = getQuestionBankItems({ competition: 'violympic', grade: 2, subject: 'math' });
  const ioe = getQuestionBankItems({ competition: 'ioe', grade: 2, subject: 'english' });
  const trangNguyen = getQuestionBankItems({ competition: 'trang_nguyen', grade: 2, subject: 'vietnamese' });

  assert.ok(violympic.length >= 30);
  assert.ok(ioe.length >= 30);
  assert.ok(trangNguyen.length >= 30);
  assert.ok(violympic.every((item) => (
    generalIds.has(item.id)
    || violympicDigitalIds.has(item.id)
    || violympicOcrIds.has(item.id)
  )));
  assert.equal(new Set(violympic.map((item) => item.id)).size, violympic.length);
  assert.equal(new Set(violympic.map(questionSignature)).size, violympic.length);
  assert.ok(ioe.every((item) => competitionIds.has(item.id)));
  assert.ok(trangNguyen.every((item) => competitionIds.has(item.id) || violympicOcrIds.has(item.id)));
});

test('Kho luyện đề lọc được chủ đề, mức độ và số lượng câu nhưng không bật đồng hồ', () => {
  const topics = getQuestionBankTopics({ competition: 'violympic', grade: 3, subject: 'math' });
  assert.ok(topics.length > 2);

  const set = buildQuestionBankSession({
    mode: 'practice',
    competition: 'violympic',
    grade: 3,
    subject: 'math',
    topic: topics[0],
    difficulty: 'all',
    questionCount: 10,
  });
  const items = set.sections.flatMap((section) => section.items);

  assert.equal(items.length, 10);
  assert.equal(set.timeLimitSeconds, undefined);
  assert.ok(items.every((item) => item.topic === topics[0]));
  assert.equal(set.sections.length, 3);
});

test('Kho luyện đề chỉ cho chọn số câu mà bộ lọc hiện tại có thể đáp ứng', () => {
  assert.deepEqual(getAvailableQuestionCounts({
    competition: 'violympic',
    grade: 1,
    subject: 'math',
    topic: 'Phép cộng trong phạm vi 100',
    difficulty: 'challenge',
  }), []);

  assert.deepEqual(getAvailableQuestionCounts({
    competition: 'violympic',
    grade: 1,
    subject: 'math',
    difficulty: 'all',
  }), [10, 20, 30]);
});

test('Đấu trường dùng cùng bộ tạo phiên, có 30 câu, 30 phút và không còn giới hạn 5 câu', () => {
  const set = buildQuestionBankSession({
    mode: 'arena',
    competition: 'ioe',
    grade: 5,
    subject: 'english',
    difficulty: 'all',
    questionCount: 30,
  });
  const items = set.sections.flatMap((section) => section.items);

  assert.equal(items.length, 30);
  assert.equal(set.timeLimitSeconds, 1_800);
  assert.equal(set.totalPoints, 300);
  assert.ok(items.some((item) => item.audio));
});

test('bảng xếp hạng ưu tiên điểm cao, sau đó thời gian nhanh và giữ kết quả tốt nhất của mỗi bé', () => {
  const storage = memoryStorage();
  recordArenaResult(storage, { sessionId: 'ioe-g2', playerName: 'Bé A', score: 250, totalPoints: 300, correctCount: 25, totalCount: 30, elapsedSeconds: 500, completedAt: 1 });
  recordArenaResult(storage, { sessionId: 'ioe-g2', playerName: 'Bé B', score: 250, totalPoints: 300, correctCount: 25, totalCount: 30, elapsedSeconds: 420, completedAt: 2 });
  recordArenaResult(storage, { sessionId: 'ioe-g2', playerName: 'Bé A', score: 200, totalPoints: 300, correctCount: 20, totalCount: 30, elapsedSeconds: 300, completedAt: 3 });
  recordArenaResult(storage, { sessionId: 'ioe-g2', playerName: 'Bé C', score: 280, totalPoints: 300, correctCount: 28, totalCount: 30, elapsedSeconds: 600, completedAt: 4 });

  const ranking = readArenaLeaderboard(storage, 'ioe-g2');
  assert.deepEqual(ranking.map((entry) => entry.playerName), ['Bé C', 'Bé B', 'Bé A']);
  assert.equal(ranking[2].score, 250);
  assert.ok(storage.getItem(ARENA_LEADERBOARD_STORAGE_KEY));
});

test('URL đề luyện tự chọn giữ nguyên bộ lọc và câu hiện tại khi chia sẻ hoặc F5', () => {
  const route = {
    kind: 'practice-custom-set',
    competition: 'violympic',
    grade: 3,
    subject: 'math',
    topic: 'Chu vi và đo lường',
    difficulty: 'application',
    questionCount: 20,
    questionNumber: 7,
  };
  const path = getAppPath(route);
  assert.match(path, /^\/luyen-de\/tu-chon\?/u);
  assert.deepEqual(parseAppRoute(path), route);
});

test('Kho luyện đề và Đấu trường dùng một URL gốc với hai chế độ, đồng thời giữ tương thích link cũ', () => {
  assert.equal(getAppPath({ kind: 'practice-hub' }), '/luyen-de');
  assert.equal(getAppPath({ kind: 'practice-hub', mode: 'arena' }), '/luyen-de?che-do=thi-thu');
  assert.deepEqual(parseAppRoute('/luyen-de?che-do=thi-thu'), { kind: 'practice-hub', mode: 'arena' });
  assert.deepEqual(parseAppRoute('/dau-truong'), { kind: 'practice-hub', mode: 'arena' });
});
