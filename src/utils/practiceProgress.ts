export const PRACTICE_PROGRESS_STORAGE_KEY = 'wonderkids_practice_progress_v1';

export interface PracticeProgress {
  setId: string;
  currentSectionIndex: number;
  currentItemIndex: number;
  answers: Record<string, string | string[]>;
  audioPlayCounts: Record<string, number>;
  startedAt: number;
  updatedAt: number;
  completedAt?: number;
  lastCompletedAt?: number;
  attemptCount?: number;
  elapsedSeconds?: number;
  bestScore?: number;
  bestCorrectCount?: number;
}

export function createPracticeProgress(setId: string, now = Date.now()): PracticeProgress {
  return {
    setId,
    currentSectionIndex: 0,
    currentItemIndex: 0,
    answers: {},
    audioPlayCounts: {},
    startedAt: now,
    updatedAt: now,
  };
}

export function recordPracticeAnswer(
  progress: PracticeProgress,
  itemId: string,
  answer: string | string[],
  now = Date.now(),
): PracticeProgress {
  return {
    ...progress,
    answers: { ...progress.answers, [itemId]: answer },
    updatedAt: Math.max(now, progress.updatedAt),
  };
}

export function canPlayPracticeAudio(progress: PracticeProgress, itemId: string, maxPlays?: number): boolean {
  return maxPlays === undefined || (progress.audioPlayCounts?.[itemId] || 0) < maxPlays;
}

export function recordPracticeAudioPlay(
  progress: PracticeProgress,
  itemId: string,
  now = Date.now(),
): PracticeProgress {
  return {
    ...progress,
    audioPlayCounts: {
      ...(progress.audioPlayCounts || {}),
      [itemId]: (progress.audioPlayCounts?.[itemId] || 0) + 1,
    },
    updatedAt: Math.max(now, progress.updatedAt),
  };
}

export function calculatePracticeResult(correctness: boolean[], maxPoints: number) {
  const correctCount = correctness.filter(Boolean).length;
  const totalCount = correctness.length;
  const score = totalCount === 0 ? 0 : Math.round((correctCount / totalCount) * maxPoints * 100) / 100;
  return { correctCount, totalCount, score };
}

export function shouldGrantFirstCompletionReward(previous?: Pick<PracticeProgress, 'completedAt'>): boolean {
  return !previous?.completedAt;
}

export function calculateRemainingPracticeSeconds(
  timeLimitSeconds: number,
  startedAt: number,
  now = Date.now(),
): number {
  const elapsedSeconds = Math.max(0, Math.floor((now - startedAt) / 1_000));
  return Math.max(0, timeLimitSeconds - elapsedSeconds);
}

export function completePracticeAttempt(
  progress: PracticeProgress,
  result: { score: number; correctCount: number },
  now = Date.now(),
): PracticeProgress {
  return {
    ...progress,
    completedAt: progress.completedAt || now,
    lastCompletedAt: now,
    updatedAt: now,
    attemptCount: (progress.attemptCount || 0) + 1,
    elapsedSeconds: Math.max(0, Math.round((now - progress.startedAt) / 1_000)),
    bestScore: Math.max(progress.bestScore || 0, result.score),
    bestCorrectCount: Math.max(progress.bestCorrectCount || 0, result.correctCount),
  };
}

export function restartPracticeAttempt(progress: PracticeProgress, now = Date.now()): PracticeProgress {
  return {
    ...progress,
    currentSectionIndex: 0,
    currentItemIndex: 0,
    answers: {},
    audioPlayCounts: {},
    startedAt: now,
    updatedAt: now,
    lastCompletedAt: undefined,
    elapsedSeconds: undefined,
  };
}

function normalizeScalar(value: string): string {
  return value.trim().replace(/\s+/gu, ' ').toLocaleLowerCase('vi');
}

function parseNumericShortAnswer(value: string): { value: number; unit?: string } | null {
  const normalized = normalizeScalar(value).replace(',', '.');
  const wholeHour = normalized.match(/^(\d+):00$/u);
  if (wholeHour) return { value: Number(wholeHour[1]), unit: 'hour' };
  const match = normalized.match(/^([-+]?\d+(?:\.\d+)?)\s*(%|cm|km|m|giờ|phút|xăng-ti-mét|ki-lô-mét)?$/u);
  if (!match) return null;
  const unitAliases: Record<string, string> = {
    '%': 'percent',
    cm: 'cm',
    'xăng-ti-mét': 'cm',
    km: 'km',
    'ki-lô-mét': 'km',
    m: 'm',
    giờ: 'hour',
    phút: 'minute',
  };
  return { value: Number(match[1]), unit: match[2] ? unitAliases[match[2]] : undefined };
}

function shortAnswersAreEquivalent(expected: string, actual: string): boolean {
  const expectedNumeric = parseNumericShortAnswer(expected);
  const actualNumeric = parseNumericShortAnswer(actual);
  if (!expectedNumeric || !actualNumeric) return normalizeScalar(expected) === normalizeScalar(actual);
  if (actualNumeric.unit && actualNumeric.unit !== expectedNumeric.unit) return false;
  return expectedNumeric.value === actualNumeric.value;
}

export function isPracticeAnswerCorrect(
  item: { type: 'single_choice' | 'short_answer' | 'ordering' | 'matching' | 'letter_fill' | 'word_fill' | 'true_false' | 'picture_choice' | 'odd_one_out' | 'listening_choice' | 'listening_input'; correctAnswer: string | string[] },
  answer: string | string[] | undefined,
): boolean {
  if (answer === undefined) return false;
  if (['short_answer', 'letter_fill', 'word_fill', 'listening_input'].includes(item.type) && typeof item.correctAnswer === 'string' && typeof answer === 'string') {
    return shortAnswersAreEquivalent(item.correctAnswer, answer);
  }
  const expected = Array.isArray(item.correctAnswer) ? item.correctAnswer.map(normalizeScalar) : normalizeScalar(item.correctAnswer);
  const actual = Array.isArray(answer) ? answer.map(normalizeScalar) : normalizeScalar(answer);
  if (!Array.isArray(expected) || !Array.isArray(actual)) return expected === actual;
  if (expected.length !== actual.length) return false;
  if (item.type === 'matching') {
    return [...expected].sort().every((value, index) => value === [...actual].sort()[index]);
  }
  return expected.every((value, index) => value === actual[index]);
}

export function readPracticeProgress(storage: Pick<Storage, 'getItem'>, setId: string): PracticeProgress | null {
  try {
    const raw = storage.getItem(PRACTICE_PROGRESS_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Record<string, PracticeProgress>;
    const progress = parsed[setId];
    return progress?.setId === setId ? { ...progress, audioPlayCounts: progress.audioPlayCounts || {} } : null;
  } catch {
    return null;
  }
}

export function writePracticeProgress(storage: Pick<Storage, 'getItem' | 'setItem'>, progress: PracticeProgress): void {
  let current: Record<string, PracticeProgress> = {};
  try {
    current = JSON.parse(storage.getItem(PRACTICE_PROGRESS_STORAGE_KEY) || '{}') as Record<string, PracticeProgress>;
  } catch {
    current = {};
  }
  storage.setItem(PRACTICE_PROGRESS_STORAGE_KEY, JSON.stringify({ ...current, [progress.setId]: progress }));
}
