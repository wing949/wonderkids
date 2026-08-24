import type { GradeLevel, SubjectType } from '../types';
import type { PracticeSubject } from '../data/practice/types';

export type AdminTab = 'curriculum' | 'question_builder' | 'tts_settings';

export type AppRoute =
  | { kind: 'student' }
  | { kind: 'profile' }
  | { kind: 'shop' }
  | { kind: 'quests' }
  | { kind: 'parent' }
  | { kind: 'arena' }
  | { kind: 'practice-hub' }
  | { kind: 'practice-list'; subject: PracticeSubject; grade: GradeLevel }
  | { kind: 'practice-set'; subject: PracticeSubject; grade: GradeLevel; setNumber: number; questionNumber?: number }
  | { kind: 'adventure'; subject: SubjectType; grade: GradeLevel }
  | { kind: 'exercise'; lessonId: string }
  | { kind: 'admin'; tab: AdminTab };

const SUBJECT_SLUGS: Record<string, SubjectType> = {
  toan: 'math',
  'tieng-viet': 'vietnamese',
  'tieng-anh': 'english',
  'tu-duy': 'logic',
};

const SUBJECT_PATHS: Record<SubjectType, string> = {
  math: 'toan',
  vietnamese: 'tieng-viet',
  english: 'tieng-anh',
  logic: 'tu-duy',
};

const PRACTICE_SUBJECT_SLUGS: Record<string, PracticeSubject> = {
  toan: 'math',
  'tieng-viet': 'vietnamese',
  'tieng-anh': 'english',
  'toan-tieng-anh': 'math_en',
};

const PRACTICE_SUBJECT_PATHS: Record<PracticeSubject, string> = {
  math: 'toan',
  vietnamese: 'tieng-viet',
  english: 'tieng-anh',
  math_en: 'toan-tieng-anh',
};

const ADMIN_TAB_PATHS: Record<AdminTab, string> = {
  curriculum: '',
  question_builder: 'questions',
  tts_settings: 'audio',
};

const ADMIN_TABS: Record<string, AdminTab> = {
  '': 'curriculum',
  questions: 'question_builder',
  audio: 'tts_settings',
};

function normalizePathname(pathname: string): string {
  const withoutQuery = pathname.split(/[?#]/, 1)[0] || '/';
  const normalized = withoutQuery.replace(/\/+$/, '');
  return normalized || '/';
}

function toGrade(value: string | undefined): GradeLevel | null {
  const grade = Number(value);
  return [1, 2, 3, 4, 5].includes(grade) ? grade as GradeLevel : null;
}

export function parseAppRoute(pathname: string): AppRoute {
  const queryStart = pathname.indexOf('?');
  const queryEnd = pathname.indexOf('#', queryStart + 1);
  const query = queryStart >= 0
    ? new URLSearchParams(pathname.slice(queryStart + 1, queryEnd >= 0 ? queryEnd : undefined))
    : new URLSearchParams();
  const segments = normalizePathname(pathname).split('/').filter(Boolean);

  if (segments.length === 0) return { kind: 'student' };
  if (segments.length === 1 && segments[0] === 'ho-so') return { kind: 'profile' };
  if (segments.length === 1 && segments[0] === 'doi-qua') return { kind: 'shop' };
  if (segments.length === 1 && segments[0] === 'nhiem-vu') return { kind: 'quests' };
  if (segments.length === 1 && segments[0] === 'phu-huynh') return { kind: 'parent' };
  if (segments.length === 1 && segments[0] === 'dau-truong') return { kind: 'arena' };
  if (segments.length === 1 && segments[0] === 'luyen-de') return { kind: 'practice-hub' };

  if (segments[0] === 'luyen-de' && (segments.length === 3 || segments.length === 4)) {
    const subject = PRACTICE_SUBJECT_SLUGS[segments[1]];
    const grade = toGrade(segments[2]?.replace(/^lop-/, ''));
    if (!subject || !grade) return { kind: 'student' };
    if (segments.length === 3) return { kind: 'practice-list', subject, grade };
    const match = segments[3]?.match(/^de-(\d{2})$/);
    const setNumber = match ? Number(match[1]) : 0;
    if (setNumber >= 1 && setNumber <= 12) {
      const questionNumber = Number(query.get('cau'));
      return questionNumber >= 1 && questionNumber <= 30
        ? { kind: 'practice-set', subject, grade, setNumber, questionNumber }
        : { kind: 'practice-set', subject, grade, setNumber };
    }
    return { kind: 'student' };
  }

  if (segments[0] === 'hoc' && segments.length === 3) {
    const subject = SUBJECT_SLUGS[segments[1]];
    const grade = toGrade(segments[2].replace(/^lop-/, ''));
    if (subject && grade) return { kind: 'adventure', subject, grade };
  }

  if (segments[0] === 'bai-hoc' && segments.length === 2 && segments[1]) {
    return { kind: 'exercise', lessonId: decodeURIComponent(segments[1]) };
  }

  if (segments[0] === 'cp' && segments.length <= 2) {
    const tab = ADMIN_TABS[segments[1] || ''];
    if (tab) return { kind: 'admin', tab };
  }

  return { kind: 'student' };
}

export function getAppPath(route: AppRoute): string {
  switch (route.kind) {
    case 'student': return '/';
    case 'profile': return '/ho-so';
    case 'shop': return '/doi-qua';
    case 'quests': return '/nhiem-vu';
    case 'parent': return '/phu-huynh';
    case 'arena': return '/dau-truong';
    case 'practice-hub': return '/luyen-de';
    case 'practice-list': return `/luyen-de/${PRACTICE_SUBJECT_PATHS[route.subject]}/lop-${route.grade}`;
    case 'practice-set': {
      const base = `/luyen-de/${PRACTICE_SUBJECT_PATHS[route.subject]}/lop-${route.grade}/de-${String(route.setNumber).padStart(2, '0')}`;
      return route.questionNumber && route.questionNumber >= 1 && route.questionNumber <= 30
        ? `${base}?cau=${route.questionNumber}`
        : base;
    }
    case 'adventure': return `/hoc/${SUBJECT_PATHS[route.subject]}/lop-${route.grade}`;
    case 'exercise': return `/bai-hoc/${encodeURIComponent(route.lessonId)}`;
    case 'admin': {
      const tabPath = ADMIN_TAB_PATHS[route.tab];
      return tabPath ? `/cp/${tabPath}` : '/cp';
    }
  }
}

export function findLessonById<T extends { id: string }>(lessons: T[], lessonId: string): T | null {
  return lessons.find((lesson) => lesson.id === lessonId) || null;
}
