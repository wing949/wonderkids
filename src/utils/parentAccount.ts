import type { ParentReport, StudentProfile } from '../types/index.ts';

export const PARENT_ACCOUNT_STORAGE_KEY = 'wonderkids_parent_account_v1';
export const LEGACY_PROFILE_STORAGE_KEY = 'wonderkids_profile_v1';
export const LEGACY_GRADE_STORAGE_KEY = 'wonderkids_grade_v1';
export const LEGACY_THEME_STORAGE_KEY = 'wonderkids_theme_v1';
export const LEGACY_PARENT_REPORT_STORAGE_KEY = 'wonderkids_parent_report_v1';

const LEGACY_KID_DATA_KEYS = [
  'wonderkids_practice_progress_v1',
  'wonderkids_arena_leaderboard_v1',
] as const;

export type KidScopedStorage = Pick<Storage, 'getItem' | 'setItem'>;

export interface ManagedKid {
  id: string;
  profile: StudentProfile;
  report: ParentReport;
  createdAt: number;
  updatedAt: number;
}

export interface ParentAccount {
  version: 1;
  activeKidId: string;
  kids: ManagedKid[];
  updatedAt: number;
}

function cloneReport(report: ParentReport): ParentReport {
  return {
    ...report,
    weeklyStudyMinutes: [...report.weeklyStudyMinutes],
    days: [...report.days],
    subjectMastery: report.subjectMastery.map((subject) => ({
      ...subject,
      strengths: [...subject.strengths],
      weaknesses: [...subject.weaknesses],
    })),
    parentTasks: report.parentTasks.map((task) => ({ ...task })),
  };
}

export function createEmptyParentReport(template: ParentReport): ParentReport {
  return {
    weeklyStudyMinutes: template.weeklyStudyMinutes.map(() => 0),
    days: [...template.days],
    subjectMastery: template.subjectMastery.map((subject) => ({
      ...subject,
      score: 0,
      strengths: [],
      weaknesses: [],
    })),
    screenTimeLimitMinutes: template.screenTimeLimitMinutes,
    screenTimeUsedMinutes: 0,
    parentTasks: [],
  };
}

function safeObject<T>(raw: string | null): Partial<T> | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed as Partial<T> : null;
  } catch {
    return null;
  }
}

function idPart(value: string): string {
  return value.toLocaleLowerCase('vi').normalize('NFD').replace(/[\u0300-\u036f]/gu, '').replace(/[^a-z0-9]+/gu, '-').replace(/^-|-$/gu, '');
}

function createKidId(profile: StudentProfile, now: number): string {
  const stableCode = idPart(profile.kidCode || profile.name);
  return `kid-${stableCode || now.toString(36)}`;
}

function uniqueKidId(account: ParentAccount, desiredId: string): string {
  if (!account.kids.some((kid) => kid.id === desiredId)) return desiredId;
  let suffix = 2;
  while (account.kids.some((kid) => kid.id === `${desiredId}-${suffix}`)) suffix += 1;
  return `${desiredId}-${suffix}`;
}

export function kidScopedStorageKey(kidId: string, key: string): string {
  return `wonderkids_kid_${kidId}__${key}`;
}

export function createKidScopedStorage(storage: KidScopedStorage, kidId: string): KidScopedStorage {
  return {
    getItem(key) {
      return storage.getItem(kidScopedStorageKey(kidId, key));
    },
    setItem(key, value) {
      storage.setItem(kidScopedStorageKey(kidId, key), value);
    },
  };
}

function migrateLegacyKidData(storage: KidScopedStorage, kidId: string): void {
  const scoped = createKidScopedStorage(storage, kidId);
  for (const key of LEGACY_KID_DATA_KEYS) {
    if (scoped.getItem(key) !== null) continue;
    const legacyValue = storage.getItem(key);
    if (legacyValue !== null) scoped.setItem(key, legacyValue);
  }
}

export function persistParentAccount(storage: Pick<Storage, 'setItem'>, account: ParentAccount): void {
  storage.setItem(PARENT_ACCOUNT_STORAGE_KEY, JSON.stringify(account));
}

function isParentAccount(value: Partial<ParentAccount> | null): value is ParentAccount {
  return value?.version === 1
    && typeof value.activeKidId === 'string'
    && Array.isArray(value.kids)
    && value.kids.length > 0;
}

export function loadParentAccount(
  storage: KidScopedStorage,
  fallbackProfile: StudentProfile,
  fallbackReport: ParentReport,
  now = Date.now(),
): ParentAccount {
  const savedAccount = safeObject<ParentAccount>(storage.getItem(PARENT_ACCOUNT_STORAGE_KEY));
  if (isParentAccount(savedAccount)) {
    const activeKidId = savedAccount.kids.some((kid) => kid.id === savedAccount.activeKidId)
      ? savedAccount.activeKidId
      : savedAccount.kids[0].id;
    return { ...savedAccount, activeKidId };
  }

  const legacyProfile = safeObject<StudentProfile>(storage.getItem(LEGACY_PROFILE_STORAGE_KEY));
  const legacyReport = safeObject<ParentReport>(storage.getItem(LEGACY_PARENT_REPORT_STORAGE_KEY));
  const savedGrade = Number(storage.getItem(LEGACY_GRADE_STORAGE_KEY));
  const savedTheme = storage.getItem(LEGACY_THEME_STORAGE_KEY);
  const profile: StudentProfile = {
    ...fallbackProfile,
    ...(legacyProfile || {}),
    ...([1, 2, 3, 4, 5].includes(savedGrade) ? { grade: savedGrade as StudentProfile['grade'] } : {}),
    ...(['ocean', 'space', 'jungle', 'candy', 'sunny'].includes(savedTheme || '') ? { theme: savedTheme as StudentProfile['theme'] } : {}),
  };
  const report = cloneReport({ ...fallbackReport, ...(legacyReport || {}) } as ParentReport);
  const kidId = createKidId(profile, now);
  const account: ParentAccount = {
    version: 1,
    activeKidId: kidId,
    kids: [{ id: kidId, profile, report, createdAt: now, updatedAt: now }],
    updatedAt: now,
  };
  persistParentAccount(storage, account);
  migrateLegacyKidData(storage, kidId);
  return account;
}

export function getActiveManagedKid(account: ParentAccount): ManagedKid {
  return account.kids.find((kid) => kid.id === account.activeKidId) || account.kids[0];
}

export function addManagedKid(
  account: ParentAccount,
  profile: StudentProfile,
  report: ParentReport,
  options: { id?: string; now?: number } = {},
): ParentAccount {
  const now = options.now ?? Date.now();
  const id = uniqueKidId(account, options.id || createKidId(profile, now));
  return {
    ...account,
    activeKidId: id,
    kids: [...account.kids, { id, profile: { ...profile }, report: cloneReport(report), createdAt: now, updatedAt: now }],
    updatedAt: now,
  };
}

export function selectManagedKid(account: ParentAccount, kidId: string, now = Date.now()): ParentAccount {
  if (!account.kids.some((kid) => kid.id === kidId) || account.activeKidId === kidId) return account;
  return { ...account, activeKidId: kidId, updatedAt: now };
}

export function updateManagedKidProfile(
  account: ParentAccount,
  kidId: string,
  changes: Partial<StudentProfile>,
  now = Date.now(),
): ParentAccount {
  if (!account.kids.some((kid) => kid.id === kidId)) return account;
  return {
    ...account,
    kids: account.kids.map((kid) => kid.id === kidId
      ? { ...kid, profile: { ...kid.profile, ...changes }, updatedAt: now }
      : kid),
    updatedAt: now,
  };
}

export function updateManagedKidReport(
  account: ParentAccount,
  kidId: string,
  report: ParentReport,
  now = Date.now(),
): ParentAccount {
  if (!account.kids.some((kid) => kid.id === kidId)) return account;
  return {
    ...account,
    kids: account.kids.map((kid) => kid.id === kidId
      ? { ...kid, report: cloneReport(report), updatedAt: now }
      : kid),
    updatedAt: now,
  };
}
