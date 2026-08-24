import type { GradeLevel } from '../../types/index.ts';
import { getCompetitionPack, getPracticePack } from './index.ts';
import type {
  PracticeDifficulty,
  PracticeItem,
  PracticeItemType,
  PracticeSection,
  PracticeSet,
  PracticeSubject,
} from './types.ts';

export type QuestionBankCompetition = 'violympic' | 'ioe' | 'trang_nguyen';
export type QuestionBankMode = 'practice' | 'arena';
export type QuestionBankDifficulty = PracticeDifficulty | 'all';

export interface QuestionBankFilter {
  competition: QuestionBankCompetition;
  grade: GradeLevel;
  subject: PracticeSubject;
  topic?: string;
  difficulty?: QuestionBankDifficulty;
}

export interface QuestionBankSessionConfig extends QuestionBankFilter {
  mode: QuestionBankMode;
  questionCount: number;
}

export const QUESTION_BANK_COMPETITIONS: Array<{
  id: QuestionBankCompetition;
  label: string;
  icon: string;
  subjects: PracticeSubject[];
}> = [
  { id: 'violympic', label: 'Violympic', icon: '⚡', subjects: ['math', 'vietnamese', 'english', 'math_en'] },
  { id: 'ioe', label: 'IOE', icon: '🌍', subjects: ['english'] },
  { id: 'trang_nguyen', label: 'Trạng Nguyên', icon: '🏮', subjects: ['vietnamese'] },
];

export const QUESTION_COUNT_CHOICES = [10, 20, 30] as const;
export const ARENA_QUESTION_COUNT_CHOICES = [30, 50, 100] as const;

export function subjectsForCompetition(competition: QuestionBankCompetition): PracticeSubject[] {
  return QUESTION_BANK_COMPETITIONS.find((entry) => entry.id === competition)?.subjects || ['math'];
}

function sourceItems(filter: QuestionBankFilter): PracticeItem[] {
  if (filter.competition === 'ioe') {
    return getCompetitionPack('ioe_simulation', filter.grade).sets
      .flatMap((set) => set.sections)
      .flatMap((section) => section.items);
  }
  if (filter.competition === 'trang_nguyen') {
    return getCompetitionPack('trang_nguyen_simulation', filter.grade).sets
      .flatMap((set) => set.sections)
      .flatMap((section) => section.items);
  }
  return getPracticePack(filter.subject, filter.grade).sets
    .flatMap((set) => set.sections)
    .flatMap((section) => section.items);
}

export function getQuestionBankItems(filter: QuestionBankFilter): PracticeItem[] {
  const allowedSubjects = subjectsForCompetition(filter.competition);
  if (!allowedSubjects.includes(filter.subject)) return [];
  const difficulty = filter.difficulty || 'all';
  return sourceItems(filter).filter((item) => (
    (!filter.topic || item.topic === filter.topic)
    && (difficulty === 'all' || item.difficulty === difficulty)
  ));
}

export function getAvailableQuestionCounts(filter: QuestionBankFilter): number[] {
  const availableItems = getQuestionBankItems(filter).length;
  return QUESTION_COUNT_CHOICES.filter((count) => count <= availableItems);
}

export function getQuestionBankTopics(filter: Omit<QuestionBankFilter, 'topic' | 'difficulty'>): string[] {
  return [...new Set(sourceItems(filter).map((item) => item.topic))]
    .sort((left, right) => left.localeCompare(right, 'vi'));
}

function stableNumber(value: string): number {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function sessionId(config: QuestionBankSessionConfig): string {
  const topicKey = config.topic ? stableNumber(config.topic).toString(36) : 'all';
  return `bank-${config.mode}-${config.competition}-${config.subject}-g${config.grade}-${config.difficulty || 'all'}-${topicKey}-q${config.questionCount}`;
}

function selectDistributed(items: PracticeItem[], count: number, seed: number): PracticeItem[] {
  if (items.length <= count) return items.slice();
  const selected: PracticeItem[] = [];
  const start = seed % items.length;
  const step = Math.max(1, Math.floor(items.length / count));
  const used = new Set<number>();
  let cursor = start;
  while (selected.length < count) {
    if (!used.has(cursor)) {
      used.add(cursor);
      selected.push(items[cursor]);
    }
    cursor = (cursor + step) % items.length;
    if (used.size === items.length && selected.length < count) break;
  }
  if (selected.length < count) {
    for (let index = 0; index < items.length && selected.length < count; index += 1) {
      if (!used.has(index)) selected.push(items[index]);
    }
  }
  return selected;
}

function makeSection(id: string, index: number, items: PracticeItem[]): PracticeSection {
  return {
    id: `${id}-p${index + 1}`,
    title: `Phần ${index + 1}`,
    instruction: index === 0 ? 'Khởi động' : index === 1 ? 'Tăng tốc' : 'Về đích',
    activityTypes: [...new Set(items.map((item) => item.type))] as PracticeItemType[],
    maxPoints: items.reduce((total, item) => total + item.points, 0),
    items,
  };
}

export function buildQuestionBankSession(config: QuestionBankSessionConfig): PracticeSet {
  const requestedCount = Math.max(1, Math.floor(config.questionCount));
  const pool = getQuestionBankItems(config);
  if (pool.length < requestedCount) {
    throw new Error(`Ngân hàng chỉ có ${pool.length} câu phù hợp, không đủ ${requestedCount} câu.`);
  }

  const id = sessionId({ ...config, questionCount: requestedCount });
  const items = selectDistributed(pool, requestedCount, stableNumber(id));
  const firstEnd = Math.ceil(items.length / 3);
  const secondEnd = firstEnd + Math.ceil((items.length - firstEnd) / 2);
  const sections = [
    makeSection(id, 0, items.slice(0, firstEnd)),
    makeSection(id, 1, items.slice(firstEnd, secondEnd)),
    makeSection(id, 2, items.slice(secondEnd)),
  ] as [PracticeSection, PracticeSection, PracticeSection];
  const competitionLabel = QUESTION_BANK_COMPETITIONS.find((entry) => entry.id === config.competition)?.label || 'Violympic';

  return {
    id,
    subject: config.subject,
    grade: config.grade,
    setNumber: 1,
    title: config.mode === 'arena'
      ? `Thi thử ${competitionLabel} • ${requestedCount} câu`
      : `Luyện ${competitionLabel} • ${requestedCount} câu`,
    level: config.mode === 'arena' ? 'mock_exam' : 'foundation',
    track: config.competition === 'ioe'
      ? 'ioe_simulation'
      : config.competition === 'trang_nguyen'
        ? 'trang_nguyen_simulation'
        : 'general',
    totalPoints: requestedCount * 10,
    timeLimitSeconds: config.mode === 'arena' ? 1_800 : undefined,
    maxAudioPlays: config.mode === 'arena' && config.competition === 'ioe' ? 2 : undefined,
    allowedAudioRates: config.mode === 'arena' ? [1] : [0.8, 1],
    sections,
  };
}
