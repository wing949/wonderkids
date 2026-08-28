import type { GradeLevel, SubjectType } from '../types';
import type { CompetitionPracticeTrack, PracticeSubject } from '../data/practice/types';
import type { QuestionBankCompetition, QuestionBankDifficulty } from '../data/practice/questionBank';

export type AdminTab = 'curriculum' | 'question_builder' | 'tts_settings';

export type LogicGameId = 'vat-gi-bien-mat' | 'lat-the-tim-doi' | 'tim-quy-luat' | 'me-cung';

export type AppRoute =
  | { kind: 'student' }
  | { kind: 'profile' }
  | { kind: 'shop' }
  | { kind: 'quests' }
  | { kind: 'parent' }
  | { kind: 'arena' }
  | { kind: 'practice-hub'; mode?: 'practice' | 'arena' }
  | { kind: 'practice-list'; subject: PracticeSubject; grade: GradeLevel }
  | { kind: 'practice-set'; subject: PracticeSubject; grade: GradeLevel; setNumber: number; questionNumber?: number }
  | { kind: 'practice-competition-list'; track: CompetitionPracticeTrack; grade: GradeLevel }
  | { kind: 'practice-competition-set'; track: CompetitionPracticeTrack; grade: GradeLevel; setNumber: number; questionNumber?: number }
  | { kind: 'practice-custom-set'; competition: QuestionBankCompetition; grade: GradeLevel; subject: PracticeSubject; topic?: string; difficulty: QuestionBankDifficulty; questionCount: number; questionNumber?: number }
  | { kind: 'adventure'; subject: SubjectType; grade: GradeLevel; viewMode?: 'grid' | 'map' }
  | { kind: 'exercise'; lessonId: string }
  | { kind: 'logic-hub' }
  | { kind: 'logic-game'; gameId: LogicGameId; level?: number }
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

const COMPETITION_TRACK_SLUGS: Record<string, CompetitionPracticeTrack> = {
  ioe: 'ioe_simulation',
  'trang-nguyen': 'trang_nguyen_simulation',
};

const COMPETITION_TRACK_PATHS: Record<CompetitionPracticeTrack, string> = {
  ioe_simulation: 'ioe',
  trang_nguyen_simulation: 'trang-nguyen',
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
  if (segments.length === 1 && (segments[0] === 'tu-duy' || segments[0] === 'logic')) return { kind: 'logic-hub' };
  if (segments.length === 2 && (segments[0] === 'tu-duy' || segments[0] === 'logic')) {
    const gameSlug = segments[1];
    const level = Number(query.get('cap-do') || query.get('level')) || undefined;
    const validGames: LogicGameId[] = ['vat-gi-bien-mat', 'lat-the-tim-doi', 'tim-quy-luat', 'me-cung'];
    if (validGames.includes(gameSlug as LogicGameId)) {
      return { kind: 'logic-game', gameId: gameSlug as LogicGameId, ...(level ? { level } : {}) };
    }
    return { kind: 'logic-hub' };
  }
  if (segments.length === 1 && segments[0] === 'dau-truong') return { kind: 'practice-hub', mode: 'arena' };
  if (segments.length === 1 && segments[0] === 'luyen-de') {
    return query.get('che-do') === 'thi-thu'
      ? { kind: 'practice-hub', mode: 'arena' }
      : { kind: 'practice-hub' };
  }

  if (segments.length === 2 && segments[0] === 'luyen-de' && segments[1] === 'tu-chon') {
    const competition = query.get('cuoc-thi');
    const grade = toGrade(query.get('lop') || undefined);
    const subject = query.get('mon') as PracticeSubject | null;
    const difficulty = (query.get('muc-do') || 'all') as QuestionBankDifficulty;
    const questionCount = Number(query.get('so-cau'));
    const questionNumber = Number(query.get('cau'));
    const topic = query.get('chu-de') || undefined;
    const competitions: QuestionBankCompetition[] = ['violympic', 'ioe', 'trang_nguyen'];
    const subjects: PracticeSubject[] = ['math', 'vietnamese', 'english', 'math_en'];
    const difficulties: QuestionBankDifficulty[] = ['all', 'basic', 'application', 'challenge'];
    if (competitions.includes(competition as QuestionBankCompetition)
      && grade
      && subject
      && subjects.includes(subject)
      && difficulties.includes(difficulty)
      && [10, 20, 30].includes(questionCount)) {
      const route = {
        kind: 'practice-custom-set' as const,
        competition: competition as QuestionBankCompetition,
        grade,
        subject,
        ...(topic ? { topic } : {}),
        difficulty,
        questionCount,
      };
      return questionNumber >= 1 && questionNumber <= questionCount
        ? { ...route, questionNumber }
        : route;
    }
    return { kind: 'practice-hub' };
  }

  if (segments[0] === 'luyen-de' && (segments.length === 3 || segments.length === 4)) {
    const track = COMPETITION_TRACK_SLUGS[segments[1]];
    const grade = toGrade(segments[2]?.replace(/^lop-/, ''));
    if (track && grade) {
      if (segments.length === 3) return { kind: 'practice-competition-list', track, grade };
      const match = segments[3]?.match(/^de-(\d{2})$/);
      const setNumber = match ? Number(match[1]) : 0;
      if (setNumber >= 1 && setNumber <= 12) {
        const questionNumber = Number(query.get('cau'));
        return questionNumber >= 1 && questionNumber <= 200
          ? { kind: 'practice-competition-set', track, grade, setNumber, questionNumber }
          : { kind: 'practice-competition-set', track, grade, setNumber };
      }
      return { kind: 'student' };
    }
  }

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
    const view = query.get('che-do') || query.get('view');
    const viewMode = view === 'map' || view === 'ban-do' ? 'map' : view === 'grid' || view === 'luoi' ? 'grid' : undefined;
    if (subject && grade) return { kind: 'adventure', subject, grade, ...(viewMode ? { viewMode } : {}) };
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
    case 'arena': return '/luyen-de?che-do=thi-thu';
    case 'practice-hub': return route.mode === 'arena' ? '/luyen-de?che-do=thi-thu' : '/luyen-de';
    case 'adventure': {
      const base = `/hoc/${SUBJECT_PATHS[route.subject]}/lop-${route.grade}`;
      return route.viewMode === 'map' ? `${base}?view=map` : base;
    }
    case 'practice-list': return `/luyen-de/${PRACTICE_SUBJECT_PATHS[route.subject]}/lop-${route.grade}`;
    case 'practice-set': {
      const base = `/luyen-de/${PRACTICE_SUBJECT_PATHS[route.subject]}/lop-${route.grade}/de-${String(route.setNumber).padStart(2, '0')}`;
      return route.questionNumber && route.questionNumber >= 1 && route.questionNumber <= 30
        ? `${base}?cau=${route.questionNumber}`
        : base;
    }
    case 'practice-competition-list': return `/luyen-de/${COMPETITION_TRACK_PATHS[route.track]}/lop-${route.grade}`;
    case 'practice-competition-set': {
      const base = `/luyen-de/${COMPETITION_TRACK_PATHS[route.track]}/lop-${route.grade}/de-${String(route.setNumber).padStart(2, '0')}`;
      return route.questionNumber && route.questionNumber >= 1 && route.questionNumber <= 200
        ? `${base}?cau=${route.questionNumber}`
        : base;
    }
    case 'practice-custom-set': {
      const query = new URLSearchParams({
        'cuoc-thi': route.competition,
        lop: String(route.grade),
        mon: route.subject,
        'muc-do': route.difficulty,
        'so-cau': String(route.questionCount),
      });
      if (route.topic) query.set('chu-de', route.topic);
      if (route.questionNumber) query.set('cau', String(route.questionNumber));
      return `/luyen-de/tu-chon?${query.toString()}`;
    }
    case 'exercise': return `/bai-hoc/${encodeURIComponent(route.lessonId)}`;
    case 'logic-hub': return '/tu-duy';
    case 'logic-game': {
      const base = `/tu-duy/${route.gameId}`;
      return route.level ? `${base}?cap-do=${route.level}` : base;
    }
    case 'admin': {
      const tabPath = ADMIN_TAB_PATHS[route.tab];
      return tabPath ? `/cp/${tabPath}` : '/cp';
    }
  }
}

export function findLessonById<T extends { id: string }>(lessons: T[], lessonId: string): T | null {
  return lessons.find((lesson) => lesson.id === lessonId) || null;
}
