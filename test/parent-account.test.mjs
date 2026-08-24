import assert from 'node:assert/strict';
import test from 'node:test';
import {
  PARENT_ACCOUNT_STORAGE_KEY,
  addManagedKid,
  createEmptyParentReport,
  createKidScopedStorage,
  getActiveManagedKid,
  loadParentAccount,
  selectManagedKid,
  updateManagedKidProfile,
  updateManagedKidReport,
} from '../src/utils/parentAccount.ts';

function memoryStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem(key) { return values.get(key) ?? null; },
    setItem(key, value) { values.set(key, String(value)); },
    removeItem(key) { values.delete(key); },
    dump() { return Object.fromEntries(values); },
  };
}

const firstProfile = {
  name: 'Bé An', kidCode: 'WK-001', grade: 1, selectedMascot: 'bobo', avatarId: 'bobo',
  motto: 'Học vui', theme: 'ocean', stars: 12, gems: 3, xp: 90, level: 2, streak: 4,
  streakFrozen: false, totalLessonsCompleted: 5, accuracyRate: 88,
};

const secondProfile = {
  name: 'Bé Bình', kidCode: 'WK-002', grade: 3, selectedMascot: 'pipi', avatarId: 'pipi',
  motto: 'Mỗi ngày tiến bộ', theme: 'space', stars: 4, gems: 1, xp: 30, level: 1, streak: 1,
  streakFrozen: false, totalLessonsCompleted: 2, accuracyRate: 75,
};

const firstReport = {
  weeklyStudyMinutes: [10, 20], days: ['T2', 'T3'], subjectMastery: [],
  screenTimeLimitMinutes: 30, screenTimeUsedMinutes: 12,
  parentTasks: [{ id: 'task-a', title: 'Đọc sách', rewardStars: 1, isCompleted: false, isApproved: false }],
};

const secondReport = {
  weeklyStudyMinutes: [5, 8], days: ['T2', 'T3'], subjectMastery: [],
  screenTimeLimitMinutes: 20, screenTimeUsedMinutes: 5,
  parentTasks: [{ id: 'task-b', title: 'Tưới cây', rewardStars: 2, isCompleted: true, isApproved: false }],
};

test('dữ liệu một Bé hiện có được chuyển sang tài khoản phụ huynh mà không mất tiến độ', () => {
  const storage = memoryStorage({
    wonderkids_profile_v1: JSON.stringify(firstProfile),
    wonderkids_parent_report_v1: JSON.stringify(firstReport),
    wonderkids_practice_progress_v1: JSON.stringify({ 'set-1': { setId: 'set-1', bestScore: 90 } }),
    wonderkids_arena_leaderboard_v1: JSON.stringify({ arena: [{ playerName: 'Bé An', score: 250 }] }),
  });

  const account = loadParentAccount(storage, secondProfile, secondReport, 100);
  const activeKid = getActiveManagedKid(account);

  assert.equal(account.kids.length, 1);
  assert.equal(activeKid.profile.name, 'Bé An');
  assert.equal(activeKid.profile.stars, 12);
  assert.equal(activeKid.report.parentTasks[0].id, 'task-a');
  assert.ok(storage.getItem(PARENT_ACCOUNT_STORAGE_KEY));

  const scoped = createKidScopedStorage(storage, activeKid.id);
  assert.match(scoped.getItem('wonderkids_practice_progress_v1'), /"bestScore":90/u);
  assert.match(scoped.getItem('wonderkids_arena_leaderboard_v1'), /"score":250/u);
});

test('thêm, sửa và chuyển Bé chỉ thay đổi đúng hồ sơ được chọn', () => {
  const storage = memoryStorage();
  const original = loadParentAccount(storage, firstProfile, firstReport, 100);
  const withSecond = addManagedKid(original, secondProfile, secondReport, { id: 'kid-b', now: 200 });
  const selectedSecond = selectManagedKid(withSecond, 'kid-b', 210);
  const renamedSecond = updateManagedKidProfile(selectedSecond, 'kid-b', { name: 'Bé Bình An', stars: 99 }, 220);
  const updatedReport = updateManagedKidReport(renamedSecond, 'kid-b', secondReport, 230);

  assert.equal(updatedReport.kids.length, 2);
  assert.equal(getActiveManagedKid(updatedReport).profile.name, 'Bé Bình An');
  assert.equal(getActiveManagedKid(updatedReport).report.parentTasks[0].id, 'task-b');
  assert.equal(updatedReport.kids.find((kid) => kid.id !== 'kid-b').profile.name, 'Bé An');
  assert.equal(updatedReport.kids.find((kid) => kid.id !== 'kid-b').profile.stars, 12);
  assert.equal(updatedReport.kids.find((kid) => kid.id !== 'kid-b').report.parentTasks[0].id, 'task-a');
});

test('hai Bé dùng cùng tên khóa tiến độ nhưng dữ liệu lưu trữ hoàn toàn tách biệt', () => {
  const storage = memoryStorage();
  const kidA = createKidScopedStorage(storage, 'kid-a');
  const kidB = createKidScopedStorage(storage, 'kid-b');

  kidA.setItem('wonderkids_practice_progress_v1', JSON.stringify({ score: 100 }));
  kidB.setItem('wonderkids_practice_progress_v1', JSON.stringify({ score: 30 }));

  assert.equal(JSON.parse(kidA.getItem('wonderkids_practice_progress_v1')).score, 100);
  assert.equal(JSON.parse(kidB.getItem('wonderkids_practice_progress_v1')).score, 30);
  assert.notEqual(
    storage.dump()['wonderkids_kid_kid-a__wonderkids_practice_progress_v1'],
    storage.dump()['wonderkids_kid_kid-b__wonderkids_practice_progress_v1'],
  );
});

test('hồ sơ Bé mới bắt đầu với báo cáo trống nhưng giữ đủ cấu trúc môn học', () => {
  const empty = createEmptyParentReport(firstReport);

  assert.deepEqual(empty.weeklyStudyMinutes, [0, 0]);
  assert.equal(empty.screenTimeUsedMinutes, 0);
  assert.equal(empty.screenTimeLimitMinutes, 30);
  assert.deepEqual(empty.parentTasks, []);
  assert.notEqual(empty, firstReport);
});
