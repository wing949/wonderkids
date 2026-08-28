import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  BookOpenCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Eye,
  Lightbulb,
  Play,
  RotateCcw,
  Sparkles,
  Trophy,
  Volume2,
  Pause,
} from 'lucide-react';
import type { GradeLevel } from '../../types';
import {
  getPracticePack,
  getPracticeSet,
  getViolympicExamSets,
  getCompetitionPack,
  getCompetitionSet,
  PRACTICE_GRADES,
  type PracticeItem,
  type PracticeSet,
  type PracticeSubject,
  type CompetitionPracticeTrack,
} from '../../data/practice/index.ts';
import {
  buildQuestionBankSession,
  ARENA_QUESTION_COUNT_CHOICES,
  getAvailableQuestionCounts,
  getQuestionBankItems,
  getQuestionBankTopics,
  QUESTION_BANK_COMPETITIONS,
  QUESTION_COUNT_CHOICES,
  subjectsForCompetition,
  type QuestionBankCompetition,
  type QuestionBankDifficulty,
} from '../../data/practice/questionBank';
import {
  readArenaLeaderboard,
  recordArenaResult,
  type ArenaLeaderboardEntry,
} from '../../utils/arenaLeaderboard';
import {
  calculatePracticeResult,
  calculateRemainingPracticeSeconds,
  completePracticeAttempt,
  createPracticeProgress,
  isPracticeAnswerCorrect,
  readPracticeProgress,
  recordPracticeAnswer,
  recordPracticeAudioPlay,
  canPlayPracticeAudio,
  restartPracticeAttempt,
  shouldGrantFirstCompletionReward,
  writePracticeProgress,
  type PracticeProgress,
} from '../../utils/practiceProgress';
import { soundManager } from '../../utils/audio';

export type PracticePortalRoute =
  | { kind: 'practice-hub'; mode?: 'practice' | 'arena' }
  | { kind: 'practice-list'; subject: PracticeSubject; grade: GradeLevel; tab?: 'violympic' | 'authored' }
  | { kind: 'practice-set'; subject: PracticeSubject; grade: GradeLevel; setNumber: number; setSource?: 'authored' | 'violympic'; questionNumber?: number }
  | { kind: 'practice-competition-list'; track: CompetitionPracticeTrack; grade: GradeLevel }
  | { kind: 'practice-competition-set'; track: CompetitionPracticeTrack; grade: GradeLevel; setNumber: number; questionNumber?: number }
  | { kind: 'practice-custom-set'; competition: QuestionBankCompetition; grade: GradeLevel; subject: PracticeSubject; topic?: string; difficulty: QuestionBankDifficulty; questionCount: number; questionNumber?: number };

interface PracticePortalProps {
  route: PracticePortalRoute;
  onNavigate: (route: PracticePortalRoute) => void;
  onBack: () => void;
  onReward: (xp: number, stars: number) => void;
  playerName?: string;
  currentGrade?: GradeLevel;
  storage?: Pick<Storage, 'getItem' | 'setItem'>;
}

const SUBJECTS: Array<{
  id: PracticeSubject;
  label: string;
  subtitle: string;
  icon: string;
  description: string;
  thumbnail: string;
  accentColor: string;
  washiColor: string;
  badgeBg: string;
  buttonClass: string;
  tilt: number;
  competition: {
    name: string;
    url: string;
    logo: string;
    borderClass: string;
  };
}> = [
  {
    id: 'math',
    label: 'Toán Học',
    subtitle: 'Đấu trường Violympic & Ôn luyện SGK',
    icon: '📐',
    description: 'Tính nhanh, hình học, đo lường và giải toán có lời văn chuẩn SGK.',
    thumbnail: '/assets/competitions/violympic_math.webp',
    accentColor: '#059669',
    washiColor: 'rgba(244, 63, 94, 0.45)',
    badgeBg: '#d1fae5',
    buttonClass: 'bg-emerald-500 shadow-[0_5px_0_#047857]',
    tilt: -1.2,
    competition: {
      name: 'Violympic',
      url: 'https://violympic.vn/',
      logo: '/assets/competitions/logos/violympic_logo.webp',
      borderClass: 'border-2 border-red-500 hover:border-red-600',
    },
  },
  {
    id: 'vietnamese',
    label: 'Tiếng Việt',
    subtitle: 'Đấu trường Violympic Tiếng Việt & SGK',
    icon: '📖',
    description: 'Chính tả, mở rộng vốn từ, câu, ca dao tục ngữ và đọc hiểu.',
    thumbnail: '/assets/competitions/violympic_vietnamese.webp',
    accentColor: '#d97706',
    washiColor: 'rgba(244, 63, 94, 0.45)',
    badgeBg: '#fef3c7',
    buttonClass: 'bg-amber-400 shadow-[0_5px_0_#b45309] text-amber-950',
    tilt: 1.4,
    competition: {
      name: 'Violympic',
      url: 'https://violympic.vn/',
      logo: '/assets/competitions/logos/violympic_logo.webp',
      borderClass: 'border-2 border-red-500 hover:border-red-600',
    },
  },
  {
    id: 'english',
    label: 'Tiếng Anh',
    subtitle: 'Đấu trường Violympic Tiếng Anh & SGK',
    icon: '🌍',
    description: 'Words, phonics, grammar, reading comprehension and listening.',
    thumbnail: '/assets/competitions/violympic_english.webp',
    accentColor: '#0284c7',
    washiColor: 'rgba(244, 63, 94, 0.45)',
    badgeBg: '#e0f2fe',
    buttonClass: 'bg-sky-500 shadow-[0_5px_0_#0369a1]',
    tilt: -1.5,
    competition: {
      name: 'Violympic',
      url: 'https://violympic.vn/',
      logo: '/assets/competitions/logos/violympic_logo.webp',
      borderClass: 'border-2 border-red-500 hover:border-red-600',
    },
  },
  {
    id: 'math_en',
    label: 'Toán bằng tiếng Anh',
    subtitle: 'Violympic Math in English',
    icon: '🔢',
    description: 'Learn mathematics through natural English with numbers and shapes.',
    thumbnail: '/assets/competitions/math_en_competition.webp',
    accentColor: '#7c3aed',
    washiColor: 'rgba(244, 63, 94, 0.45)',
    badgeBg: '#ede9fe',
    buttonClass: 'bg-violet-500 shadow-[0_5px_0_#6d28d9]',
    tilt: 1.2,
    competition: {
      name: 'Violympic',
      url: 'https://violympic.vn/',
      logo: '/assets/competitions/logos/violympic_logo.webp',
      borderClass: 'border-2 border-red-500 hover:border-red-600',
    },
  },
];

const LEVEL_LABELS = {
  foundation: 'Củng cố',
  acceleration: 'Tăng tốc',
  advanced: 'Nâng cao',
  mock_exam: 'Thi thử',
};

const ARENA_SUBJECT_LABELS: Record<PracticeSubject, string> = {
  math: 'Toán',
  vietnamese: 'Tiếng Việt',
  english: 'Tiếng Anh',
  math_en: 'Toán bằng tiếng Anh',
};

const ARENA_STYLES: Record<QuestionBankCompetition, { className: string; shadow: string; description: string }> = {
  violympic: {
    className: 'bg-emerald-100 text-emerald-900',
    shadow: 'shadow-[0_5px_0_#047857]',
    description: 'Toán, Tiếng Việt, Tiếng Anh và Toán bằng tiếng Anh.',
  },
  ioe: {
    className: 'bg-sky-100 text-sky-900',
    shadow: 'shadow-[0_5px_0_#0369a1]',
    description: 'Nghe, từ vựng, phonics, mẫu câu và đọc hiểu Tiếng Anh.',
  },
  trang_nguyen: {
    className: 'bg-amber-100 text-amber-950',
    shadow: 'shadow-[0_5px_0_#b45309]',
    description: 'Chính tả, vốn từ, câu, đọc hiểu và văn học dân gian.',
  },
};

function subjectInfo(subject: PracticeSubject) {
  return SUBJECTS.find((item) => item.id === subject) || SUBJECTS[0];
}

function BackButton({ onClick, label = 'Quay lại', iconOnly = false }: { onClick: () => void; label?: string; iconOnly?: boolean }) {
  return (
    <button
      type="button"
      aria-label={iconOnly ? label : undefined}
      onClick={() => { soundManager.playPop(); onClick(); }}
      className={iconOnly
        ? 'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/95 text-violet-700 shadow-[0_4px_0_#c4b5fd] transition-transform active:translate-y-1 active:shadow-none'
        : 'flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-white px-4 font-baloo font-black text-slate-700 shadow-sm transition-transform active:translate-y-1'}
    >
      <ArrowLeft size={20} aria-hidden="true" />
      {!iconOnly && <span>{label}</span>}
    </button>
  );
}

function ExamCenterModeTabs({ mode, onChange }: { mode: 'practice' | 'arena'; onChange: (mode: 'practice' | 'arena') => void }) {
  return (
    <nav aria-label="Chọn chế độ luyện đề hoặc thi đấu" className="mb-4 grid grid-cols-2 gap-2 rounded-2xl bg-violet-50/70 p-1.5">
      <button
        type="button"
        aria-pressed={mode === 'practice'}
        onClick={() => { soundManager.playPop(); onChange('practice'); }}
        className={`flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-3 font-baloo text-sm font-black transition-all active:translate-y-1 sm:text-base ${mode === 'practice' ? 'bg-emerald-500 text-white shadow-[0_3px_0_#047857]' : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'}`}
      >
        <BookOpenCheck size={20} aria-hidden="true" /> Luyện tập
      </button>
      <button
        type="button"
        aria-pressed={mode === 'arena'}
        onClick={() => { soundManager.playPop(); onChange('arena'); }}
        className={`flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-3 font-baloo text-sm font-black transition-all active:translate-y-1 sm:text-base ${mode === 'arena' ? 'bg-violet-600 text-white shadow-[0_3px_0_#4c1d95]' : 'bg-violet-50 text-violet-800 hover:bg-violet-100'}`}
      >
        <Trophy size={20} aria-hidden="true" /> Thi thử / Thi đấu
      </button>
    </nav>
  );
}

function PracticeHub({ onNavigate, onBack }: Pick<PracticePortalProps, 'onNavigate' | 'onBack'>) {
  const [grade, setGrade] = useState<GradeLevel>(1);
  const [competition, setCompetition] = useState<QuestionBankCompetition>('violympic');
  const [subject, setSubject] = useState<PracticeSubject>('math');
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState<QuestionBankDifficulty>('all');
  const [questionCount, setQuestionCount] = useState<number>(20);
  const availableSubjects = subjectsForCompetition(competition);
  const topics = useMemo(() => getQuestionBankTopics({ competition, grade, subject }), [competition, grade, subject]);
  const activeFilter = useMemo(() => ({
    competition,
    grade,
    subject,
    ...(topic ? { topic } : {}),
    difficulty,
  }), [competition, difficulty, grade, subject, topic]);
  const matchingQuestionCount = useMemo(() => getQuestionBankItems(activeFilter).length, [activeFilter]);
  const availableQuestionCounts = useMemo(() => getAvailableQuestionCounts(activeFilter), [activeFilter]);

  useEffect(() => {
    if (!availableSubjects.includes(subject)) setSubject(availableSubjects[0]);
  }, [availableSubjects, subject]);

  useEffect(() => {
    if (topic && !topics.includes(topic)) setTopic('');
  }, [topic, topics]);

  useEffect(() => {
    if (availableQuestionCounts.length > 0 && !availableQuestionCounts.includes(questionCount)) {
      setQuestionCount(availableQuestionCounts[availableQuestionCounts.length - 1]);
    }
  }, [availableQuestionCounts, questionCount]);

  return (
    <div className="relative pb-24 pt-3 sm:pt-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 rounded-3xl bg-[#fffdf9]/95 p-4 shadow-washi sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <BackButton onClick={onBack} label="Về trang chủ" iconOnly />
            <div>
              <p className="font-baloo text-xs font-black uppercase tracking-wider text-violet-600">Luyện tập theo năng lực</p>
              <h1 className="font-baloo text-2xl font-black leading-tight text-brand-dark sm:text-3xl">Kho Luyện Đề</h1>
              <p className="mt-0.5 max-w-2xl font-vietnam text-sm font-semibold leading-snug text-slate-600 sm:line-clamp-1">
                240 đề dành cho lớp 1–5. Nội dung luyện tập tự biên soạn, đối chiếu theo chương trình học và chủ điểm ôn luyện.
              </p>
            </div>
          </div>
          <div className="hidden min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-violet-100 px-3 font-baloo font-black text-violet-800 sm:flex">
            <Trophy size={20} aria-hidden="true" />
            <span>12 đề mỗi môn</span>
          </div>
        </div>

        <section className="relative mt-3 rounded-3xl bg-[#fffdf9]/95 p-4 shadow-washi" aria-labelledby="practice-builder-heading">
          <ExamCenterModeTabs mode="practice" onChange={(mode) => onNavigate({ kind: 'practice-hub', mode })} />
          <h2 id="practice-builder-heading" className="sr-only">Chọn cấu hình lượt luyện</h2>

          <div className="grid gap-3 lg:grid-cols-[5fr_6fr]">
          <fieldset>
            <legend className="font-baloo text-sm font-black text-brand-dark">Cuộc thi</legend>
            <div className="mt-1.5 grid grid-cols-3 gap-2">
              {QUESTION_BANK_COMPETITIONS.map((entry) => (
                <button
                  type="button"
                  key={entry.id}
                  onClick={() => {
                    soundManager.playPop();
                    setCompetition(entry.id);
                    setSubject(entry.subjects[0]);
                    setTopic('');
                  }}
                  aria-pressed={competition === entry.id}
                  className={`flex min-h-12 items-center justify-center gap-1.5 whitespace-nowrap rounded-2xl px-2 font-baloo text-sm font-black leading-snug transition-all active:translate-y-1 ${competition === entry.id ? 'bg-violet-500 text-white shadow-[0_4px_0_#6d28d9]' : 'bg-violet-50 text-violet-800 hover:bg-violet-100'}`}
                >
                  <span aria-hidden="true">{entry.icon}</span><span>{entry.label}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-baloo text-sm font-black text-brand-dark">Khối lớp</legend>
            <div className="mt-1.5 grid grid-cols-5 gap-2">
            {PRACTICE_GRADES.map((value) => (
              <button
                type="button"
                key={value}
                onClick={() => { soundManager.playPop(); setGrade(value); }}
                aria-pressed={grade === value}
                className={`min-h-12 rounded-2xl px-2 font-baloo text-sm font-black transition-all active:translate-y-1 ${
                  grade === value ? 'bg-violet-500 text-white shadow-[0_4px_0_#6d28d9]' : 'bg-slate-100 text-slate-600 hover:bg-violet-100'
                }`}
              >
                Lớp {value}
              </button>
            ))}
            </div>
          </fieldset>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto]">
            <label className="font-baloo text-sm font-black text-brand-dark">Môn học
              <select aria-label="Môn học" value={subject} onChange={(event) => { setSubject(event.target.value as PracticeSubject); setTopic(''); }} className="mt-1 h-12 w-full rounded-2xl border border-slate-200 bg-white px-3 font-vietnam text-sm font-bold text-brand-dark">
                {availableSubjects.map((value) => <option key={value} value={value}>{subjectInfo(value).label}</option>)}
              </select>
            </label>
            <label className="font-baloo text-sm font-black text-brand-dark">Chủ đề
              <select aria-label="Chủ đề" value={topic} onChange={(event) => setTopic(event.target.value)} className="mt-1 h-12 w-full rounded-2xl border border-slate-200 bg-white px-3 font-vietnam text-sm font-bold text-brand-dark">
                <option value="">Tất cả chủ đề</option>
                {topics.map((value) => <option key={value} value={value}>{value}</option>)}
              </select>
            </label>
            <label className="font-baloo text-sm font-black text-brand-dark">Mức độ
              <select aria-label="Mức độ" value={difficulty} onChange={(event) => setDifficulty(event.target.value as QuestionBankDifficulty)} className="mt-1 h-12 w-full rounded-2xl border border-slate-200 bg-white px-3 font-vietnam text-sm font-bold text-brand-dark">
                <option value="all">Tất cả mức độ</option>
                <option value="basic">Cơ bản</option>
                <option value="application">Vận dụng</option>
                <option value="challenge">Thử thách</option>
              </select>
            </label>
            <label className="font-baloo text-sm font-black text-brand-dark">Số câu
              <select aria-label="Số câu" value={questionCount} onChange={(event) => setQuestionCount(Number(event.target.value))} className="mt-1 h-12 w-full rounded-2xl border border-slate-200 bg-white px-3 font-vietnam text-sm font-bold text-brand-dark">
                {QUESTION_COUNT_CHOICES.map((value) => <option key={value} value={value} disabled={!availableQuestionCounts.includes(value)}>{value} câu</option>)}
              </select>
            </label>
            <button
              type="button"
              disabled={matchingQuestionCount < questionCount}
              onClick={() => {
                soundManager.playPop();
                onNavigate({ kind: 'practice-custom-set', competition, grade, subject, ...(topic ? { topic } : {}), difficulty, questionCount });
              }}
              className="flex h-12 w-full self-end items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-emerald-500 px-5 pb-1 font-baloo font-black text-white shadow-[inset_0_-4px_0_#047857] active:translate-y-0.5 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none lg:w-auto"
            >
              <Play size={18} fill="currentColor" aria-hidden="true" /> Bắt đầu luyện
            </button>
          </div>
        </section>

        {/* Danh sách môn học - Style Hình 2 với hình đại diện cuộc thi */}
        <section className="mt-6 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2" aria-label="Bộ đề phù hợp với bộ lọc">
          {competition === 'violympic' && SUBJECTS.map((subject) => (
            <article
              key={subject.id}
              style={{ transform: `rotate(${subject.tilt}deg)` }}
              className="group relative flex h-full flex-col lg:grid lg:grid-cols-[40%_1fr] lg:items-stretch rounded-[1.5rem] sm:rounded-[2rem] border-2 border-white/90 bg-[#fffdf9]/95 p-3 sm:p-4 shadow-washi transition-all duration-300 hover:rotate-0 hover:-translate-y-2 hover:shadow-2xl select-none"
            >
              {/* Washi Tape Strip at Top Center */}
              <span
                aria-hidden="true"
                className="absolute -top-2.5 sm:-top-3.5 left-1/2 h-5 sm:h-6 w-20 sm:w-28 -translate-x-1/2 rotate-[-4deg] rounded-[4px] shadow-2xs z-10 pointer-events-none"
                style={{ backgroundColor: subject.washiColor }}
              />

              {/* Left Column: Big Mascot Cover Illustration */}
              <div className="relative h-44 sm:h-52 lg:h-full lg:min-h-48 overflow-hidden rounded-[1.2rem] sm:rounded-[1.5rem] bg-[#f4efe8] shadow-xs">
                <img
                  src={subject.thumbnail}
                  alt={subject.label}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Right Column: Title, Subtitle, Description & Button */}
              <div className="flex flex-1 flex-col justify-between px-1.5 pt-3 pb-1 sm:px-4 sm:py-2">
                <div>
                  {/* Top Badge & Official Competition Logo */}
                  <div className="flex items-center justify-between gap-2">
                    {(() => {
                      const violympicSets = getViolympicExamSets(subject.id, grade);
                      const totalExamCount = violympicSets.length > 0 ? violympicSets.length : 12;
                      const totalQCount = getQuestionBankItems({ competition: 'violympic', grade, subject: subject.id }).length;
                      return (
                        <span
                          className="px-3 py-1 rounded-full font-baloo font-extrabold text-xs shadow-2xs"
                          style={{ backgroundColor: subject.badgeBg, color: subject.accentColor }}
                        >
                          LỚP {grade} • {totalExamCount} VÒNG THI • {totalQCount.toLocaleString('vi')} CÂU
                        </span>
                      );
                    })()}

                    <a
                      href={subject.competition.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title={`Kỳ thi ${subject.competition.name} (${subject.competition.url})`}
                      className={`group/logo flex items-center justify-center px-2.5 py-1 rounded-xl bg-white ${subject.competition.borderClass} shadow-xs transition-all hover:scale-105 hover:shadow-md cursor-pointer select-none`}
                    >
                      <img
                        src={subject.competition.logo}
                        alt={subject.competition.name}
                        className="h-6 sm:h-7 w-auto object-contain max-w-[85px]"
                      />
                    </a>
                  </div>

                  {/* Subject Name & Subtitle */}
                  <h3
                    className="font-baloo text-2xl sm:text-[1.75rem] font-black tracking-tight leading-tight mt-2"
                    style={{ color: subject.accentColor }}
                  >
                    {subject.label}
                  </h3>
                  <p className="font-baloo font-bold text-sm text-brand-dark mt-0.5">
                    {subject.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-2 font-vietnam text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed text-justify line-clamp-3">
                    {subject.description}
                  </p>
                </div>

                {/* Bottom Action Button */}
                <div className="mt-4 pt-3 border-t border-slate-100/90">
                  <button
                    type="button"
                    onClick={() => { soundManager.playPop(); onNavigate({ kind: 'practice-list', subject: subject.id, grade }); }}
                    className={`flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl px-5 font-baloo font-black text-white transition-transform active:translate-y-1 active:shadow-none ${subject.buttonClass}`}
                  >
                    <Play size={18} fill="currentColor" aria-hidden="true" />
                    <span>Mở {getViolympicExamSets(subject.id, grade).length || 12} vòng lớp {grade}</span>
                  </button>
                </div>
              </div>
            </article>
          ))}

          {/* Card IOE Mô Phỏng */}
          {competition === 'ioe' && <article
            style={{ transform: 'rotate(-1deg)' }}
            className="group relative flex h-full flex-col lg:grid lg:grid-cols-[40%_1fr] lg:items-stretch rounded-[1.5rem] sm:rounded-[2rem] border-2 border-white/90 bg-[#fffdf9]/95 p-3 sm:p-4 shadow-washi transition-all duration-300 hover:rotate-0 hover:-translate-y-2 hover:shadow-2xl select-none"
          >
            <span
              aria-hidden="true"
              className="absolute -top-2.5 sm:-top-3.5 left-1/2 h-5 sm:h-6 w-20 sm:w-28 -translate-x-1/2 rotate-[-4deg] rounded-[4px] shadow-2xs z-10 pointer-events-none bg-sky-400/60"
            />

            <div className="relative h-44 sm:h-52 lg:h-full lg:min-h-48 overflow-hidden rounded-[1.2rem] sm:rounded-[1.5rem] bg-[#f0f9ff] shadow-xs">
              <img
                src="/assets/competitions/ioe_competition.webp"
                alt="IOE | Tiếng Anh"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="flex flex-1 flex-col justify-between px-1.5 pt-3 pb-1 sm:px-4 sm:py-2">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full font-baloo font-extrabold text-xs bg-sky-100 text-sky-800 shadow-2xs">
                    LỚP {grade} • 12 ĐỀ
                  </span>

                  <a
                    href="https://ioe.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    title="Kỳ thi Olympic Tiếng Anh trên Internet IOE (https://ioe.vn/)"
                    className="group/logo flex items-center justify-center px-2.5 py-1 rounded-xl bg-white border-2 border-sky-500 hover:border-sky-600 shadow-xs transition-all hover:scale-105 hover:shadow-md cursor-pointer select-none"
                  >
                    <img
                      src="/assets/competitions/logos/ioe_logo.webp"
                      alt="IOE"
                      className="h-6 sm:h-7 w-auto object-contain max-w-[85px]"
                    />
                  </a>
                </div>

                <h3 className="font-baloo text-2xl sm:text-[1.75rem] font-black tracking-tight leading-tight mt-2 text-sky-600">
                  IOE | Tiếng Anh
                </h3>
                <p className="font-baloo font-bold text-sm text-brand-dark mt-0.5">
                  Olympic Tiếng Anh trên Internet
                </p>

                <p className="mt-2 font-vietnam text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed text-justify line-clamp-3">
                  Luyện nghe audio bản ngữ, từ vựng, phonics, mẫu câu và đọc hiểu mô phỏng đề thi IOE 2000 điểm.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100/90">
                <button
                  type="button"
                  onClick={() => { soundManager.playPop(); onNavigate({ kind: 'practice-competition-list', track: 'ioe_simulation', grade }); }}
                  className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-sky-500 px-5 font-baloo font-black text-white shadow-[0_5px_0_#0369a1] transition-transform active:translate-y-1 active:shadow-none"
                >
                  <Play size={18} fill="currentColor" aria-hidden="true" />
                  <span>Mở 12 đề lớp {grade}</span>
                </button>
              </div>
            </div>
          </article>}

          {/* Card Trạng Nguyên Mô Phỏng */}
          {competition === 'trang_nguyen' && <article
            style={{ transform: 'rotate(1.2deg)' }}
            className="group relative flex h-full flex-col lg:grid lg:grid-cols-[40%_1fr] lg:items-stretch rounded-[1.5rem] sm:rounded-[2rem] border-2 border-white/90 bg-[#fffdf9]/95 p-3 sm:p-4 shadow-washi transition-all duration-300 hover:rotate-0 hover:-translate-y-2 hover:shadow-2xl select-none"
          >
            <span
              aria-hidden="true"
              className="absolute -top-2.5 sm:-top-3.5 left-1/2 h-5 sm:h-6 w-20 sm:w-28 -translate-x-1/2 rotate-[-4deg] rounded-[4px] shadow-2xs z-10 pointer-events-none bg-emerald-400/60"
            />

            <div className="relative h-44 sm:h-52 lg:h-full lg:min-h-48 overflow-hidden rounded-[1.2rem] sm:rounded-[1.5rem] bg-[#f0fdf4] shadow-xs">
              <img
                src="/assets/competitions/trangnguyen_competition.webp"
                alt="Trạng Nguyên Tiếng Việt"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="flex flex-1 flex-col justify-between px-1.5 pt-3 pb-1 sm:px-4 sm:py-2">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full font-baloo font-extrabold text-xs bg-emerald-100 text-emerald-800 shadow-2xs">
                    LỚP {grade} • 12 ĐỀ
                  </span>

                  <a
                    href="https://trangnguyen.edu.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    title="Kỳ thi Trạng Nguyên Tiếng Việt (https://trangnguyen.edu.vn/)"
                    className="group/logo flex items-center justify-center px-2.5 py-1 rounded-xl bg-white border-2 border-emerald-500 hover:border-emerald-600 shadow-xs transition-all hover:scale-105 hover:shadow-md cursor-pointer select-none"
                  >
                    <img
                      src="/assets/competitions/logos/trangnguyen_logo.svg"
                      alt="Trạng Nguyên"
                      className="h-6 sm:h-7 w-auto object-contain max-w-[85px]"
                    />
                  </a>
                </div>

                <h3 className="font-baloo text-xl sm:text-2xl xl:text-[1.65rem] font-black tracking-tight leading-tight mt-2 text-emerald-700 whitespace-nowrap">
                  Trạng Nguyên Tiếng Việt
                </h3>
                <p className="font-baloo font-bold text-sm text-brand-dark mt-0.5">
                  Đấu trường Trạng Nguyên Nhí
                </p>

                <p className="mt-2 font-vietnam text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed text-justify line-clamp-3">
                  Luyện chính tả, vốn từ, câu, đọc hiểu và văn học dân gian theo cấp lớp mô phỏng hội thi 300 điểm.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100/90">
                <button
                  type="button"
                  onClick={() => { soundManager.playPop(); onNavigate({ kind: 'practice-competition-list', track: 'trang_nguyen_simulation', grade }); }}
                  className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 font-baloo font-black text-white shadow-[0_5px_0_#047857] transition-transform active:translate-y-1 active:shadow-none"
                >
                  <Play size={18} fill="currentColor" aria-hidden="true" />
                  <span>Mở 12 đề lớp {grade}</span>
                </button>
              </div>
            </div>
          </article>}
        </section>

      </div>
    </div>
  );
}

function ArenaHub({
  playerName,
  currentGrade,
  onNavigate,
  onBack,
  onReward,
  storage,
}: {
  playerName: string;
  currentGrade: GradeLevel;
  onNavigate: PracticePortalProps['onNavigate'];
  onBack: () => void;
  onReward: PracticePortalProps['onReward'];
  storage?: PracticePortalProps['storage'];
}) {
  const [competition, setCompetition] = useState<QuestionBankCompetition>('violympic');
  const [grade, setGrade] = useState<GradeLevel>(currentGrade);
  const [subject, setSubject] = useState<PracticeSubject>('math');
  const [questionCount, setQuestionCount] = useState<number>(30);
  const [session, setSession] = useState<PracticeSet | null>(null);
  const [leaderboard, setLeaderboard] = useState<ArenaLeaderboardEntry[]>([]);

  const availableSubjects = subjectsForCompetition(competition);
  const previewSession = useMemo(() => buildQuestionBankSession({
    mode: 'arena', competition, grade, subject, difficulty: 'all', questionCount,
  }), [competition, grade, questionCount, subject]);

  const startArena = () => {
    soundManager.playPop();
    setSession(previewSession);
    const progressStorage = storage || (typeof window === 'undefined' ? undefined : window.localStorage);
    setLeaderboard(progressStorage ? readArenaLeaderboard(progressStorage, previewSession.id) : []);
  };

  const handleComplete = (result: PracticeExamResult) => {
    const progressStorage = storage || (typeof window === 'undefined' ? undefined : window.localStorage);
    if (!session || !progressStorage) return;
    setLeaderboard(recordArenaResult(progressStorage, {
      sessionId: session.id,
      playerName,
      score: result.score,
      totalPoints: session.totalPoints,
      correctCount: result.correctCount,
      totalCount: result.totalCount,
      elapsedSeconds: result.elapsedSeconds,
      completedAt: Date.now(),
    }));
  };

  if (session) {
    return (
      <PracticeExam
        key={session.id}
        set={session}
        mode="arena"
        leaderboard={leaderboard}
        onAttemptComplete={handleComplete}
        onQuestionChange={() => {}}
        onBack={() => setSession(null)}
        onReward={onReward}
        storage={storage}
      />
    );
  }

  return (
    <div className="min-h-[calc(100vh-5rem)] pb-24 pt-3 sm:pt-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 p-4 text-white shadow-washi">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <BackButton onClick={onBack} label="Về trang chủ" iconOnly />
              <div>
                <p className="font-baloo text-xs font-black uppercase tracking-wider text-violet-100">Thi thử và thi đấu</p>
                <h1 className="font-baloo text-2xl font-black leading-tight sm:text-3xl">Đấu Trường Trí Tuệ ⚔️</h1>
                <p className="mt-0.5 max-w-2xl font-vietnam text-sm font-semibold leading-snug text-violet-100 sm:line-clamp-1">Có đồng hồ, điểm số, kết quả và xếp hạng.</p>
              </div>
            </div>
          </div>
          <span aria-hidden="true" className="absolute -bottom-5 -right-2 text-7xl opacity-15">🏆</span>
        </header>

        <section className="relative mt-3 rounded-3xl bg-[#fffdf9]/95 p-4 shadow-washi" aria-labelledby="arena-config-heading">
          <ExamCenterModeTabs mode="arena" onChange={(mode) => onNavigate({ kind: 'practice-hub', mode })} />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h2 id="arena-config-heading" className="font-baloo text-xl font-black text-brand-dark sm:text-2xl">Chọn cuộc thi và cấu hình lượt thi</h2>
            <p className="font-vietnam text-xs font-bold text-slate-500">Nội dung mô phỏng, không phải đề thi chính thức.</p>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {QUESTION_BANK_COMPETITIONS.map((entry, index) => {
              const style = ARENA_STYLES[entry.id];
              const selected = competition === entry.id;
              return (
                <button
                  type="button"
                  key={entry.id}
                  aria-pressed={selected}
                  onClick={() => {
                    soundManager.playPop();
                    setCompetition(entry.id);
                    setSubject(entry.subjects[0]);
                  }}
                  style={{ transform: `rotate(${[-1.2, 1.1, -0.7][index]}deg)` }}
                  className={`relative flex min-h-20 flex-col items-center justify-center gap-1 rounded-2xl p-2 text-center transition-all hover:rotate-0 hover:-translate-y-1 sm:flex-row sm:justify-start sm:gap-3 sm:p-3 sm:text-left ${style.className} ${selected ? `${style.shadow} ring-2 ring-white` : 'shadow-sm opacity-85'}`}
                >
                  <span className="shrink-0 text-2xl sm:text-3xl" aria-hidden="true">{entry.icon}</span>
                  <span className="min-w-0">
                    <span className="block font-baloo text-sm font-black leading-tight sm:text-xl">{entry.label}</span>
                    <span className="mt-0.5 hidden font-vietnam text-xs font-semibold leading-snug lg:line-clamp-1">{style.description}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 border-t border-violet-100 pt-3 sm:grid-cols-3">
            <label className="font-baloo text-sm font-black text-brand-dark">Khối lớp
              <select aria-label="Khối lớp thi" value={grade} onChange={(event) => setGrade(Number(event.target.value) as GradeLevel)} className="mt-1 min-h-12 w-full rounded-2xl border border-slate-200 bg-white px-3 font-vietnam font-bold text-brand-dark">
                {PRACTICE_GRADES.map((value) => <option key={value} value={value}>Lớp {value}</option>)}
              </select>
            </label>
            <label className="font-baloo text-sm font-black text-brand-dark">Môn thi
              <select aria-label="Môn thi" value={subject} onChange={(event) => setSubject(event.target.value as PracticeSubject)} className="mt-1 min-h-12 w-full rounded-2xl border border-slate-200 bg-white px-3 font-vietnam font-bold text-brand-dark">
                {availableSubjects.map((value) => <option key={value} value={value}>{ARENA_SUBJECT_LABELS[value]}</option>)}
              </select>
            </label>
            <label className="font-baloo text-sm font-black text-brand-dark">Số câu
              <select aria-label="Số câu thi" value={questionCount} onChange={(event) => setQuestionCount(Number(event.target.value))} className="mt-1 min-h-12 w-full rounded-2xl border border-slate-200 bg-white px-3 font-vietnam font-bold text-brand-dark">
                {ARENA_QUESTION_COUNT_CHOICES.map((value) => <option key={value} value={value}>{value} câu</option>)}
              </select>
            </label>
          </div>

          <div className="mt-3 grid gap-3 rounded-2xl bg-violet-50 p-3 sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="font-vietnam text-sm font-semibold text-slate-700"><strong className="font-baloo text-base text-violet-900">Thể lệ mô phỏng:</strong> {questionCount} câu • 30 phút • {questionCount * 10} điểm • tự nộp khi hết giờ.</div>
            <button type="button" onClick={startArena} className="flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-violet-600 px-6 font-baloo text-base font-black text-white shadow-[0_4px_0_#4c1d95] active:translate-y-1 active:shadow-none"><Play size={19} fill="currentColor" aria-hidden="true" /> Bắt đầu thi thử</button>
          </div>
        </section>

        <section className="mt-4 rounded-3xl bg-white/85 p-4 shadow-md" aria-labelledby="arena-ranking-preview">
          <div className="flex items-center gap-3"><Trophy className="text-amber-500" size={28} aria-hidden="true" /><div><h2 id="arena-ranking-preview" className="font-baloo text-2xl font-black text-brand-dark">Bảng xếp hạng</h2><p className="font-vietnam text-sm font-semibold text-slate-600">Xếp theo điểm cao trước; bằng điểm thì bé làm nhanh hơn đứng trên.</p></div></div>
          <p className="mt-4 rounded-2xl bg-amber-50 px-4 py-3 font-vietnam text-sm font-semibold text-amber-900">Hoàn thành lượt thi để ghi tên vào bảng xếp hạng của đúng cuộc thi, lớp, môn và số câu đã chọn.</p>
        </section>
      </div>
    </div>
  );
}

function PracticeList({ route, onNavigate, onBack }: { route: Extract<PracticePortalRoute, { kind: 'practice-list' }>; onNavigate: PracticePortalProps['onNavigate']; onBack: () => void }) {
  const pack = getPracticePack(route.subject, route.grade);
  const violympicSets = useMemo(() => getViolympicExamSets(route.subject, route.grade), [route.grade, route.subject]);
  const [activeTab, setActiveTab] = useState<'violympic' | 'authored'>(
    route.tab || (violympicSets.length > 0 ? 'violympic' : 'authored')
  );
  const info = subjectInfo(route.subject);

  const displaySets = activeTab === 'violympic' && violympicSets.length > 0 ? violympicSets : pack.sets;

  return (
    <div className="pb-28 pt-6 sm:pt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 rounded-4xl bg-[#fffdf9]/95 p-5 shadow-washi sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex items-start gap-3">
            <BackButton onClick={onBack} label="Kho đề" />
            <div>
              <p className="font-baloo text-sm font-black uppercase tracking-wider text-violet-600">{info.icon} {info.label} • Lớp {route.grade}</p>
              <h1 className="font-baloo text-3xl font-black leading-tight text-brand-dark">
                {activeTab === 'violympic' ? `${violympicSets.length} Vòng thi Violympic chuẩn` : '12 đề luyện tập theo chủ điểm SGK'}
              </h1>
              <p className="mt-1 font-vietnam text-sm font-semibold text-slate-600">
                {activeTab === 'violympic'
                  ? `Bộ ${violympicSets.length} vòng thi thực tế bóc tách từ 99 tài liệu Violympic scan chính thức. Mỗi đề 30 câu, 300 điểm.`
                  : 'Mỗi đề có 3 phần, 30 hoạt động và tối đa 300 điểm.'}
              </p>
            </div>
          </div>
          <span className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-emerald-100 px-4 font-baloo font-black text-emerald-800">
            {activeTab === 'violympic' ? (
              <><Trophy size={20} aria-hidden="true" /> Đề thi Violympic thực tế</>
            ) : (
              <><BookOpenCheck size={20} aria-hidden="true" /> Nội dung tự biên soạn</>
            )}
          </span>
        </div>

        {/* Tab Switcher */}
        {violympicSets.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => { soundManager.playPop(); setActiveTab('violympic'); }}
              aria-pressed={activeTab === 'violympic'}
              className={`flex min-h-12 items-center gap-2 rounded-2xl px-5 font-baloo text-sm font-black transition-all active:translate-y-0.5 ${
                activeTab === 'violympic'
                  ? 'bg-violet-600 text-white shadow-[0_4px_0_#4c1d95]'
                  : 'bg-white/90 text-slate-700 hover:bg-violet-50'
              }`}
            >
              <Trophy size={18} aria-hidden="true" /> Bộ đề Violympic Vòng 1 – {violympicSets.length} ({violympicSets.length} vòng thi)
            </button>
            <button
              type="button"
              onClick={() => { soundManager.playPop(); setActiveTab('authored'); }}
              aria-pressed={activeTab === 'authored'}
              className={`flex min-h-12 items-center gap-2 rounded-2xl px-5 font-baloo text-sm font-black transition-all active:translate-y-0.5 ${
                activeTab === 'authored'
                  ? 'bg-violet-600 text-white shadow-[0_4px_0_#4c1d95]'
                  : 'bg-white/90 text-slate-700 hover:bg-violet-50'
              }`}
            >
              <BookOpenCheck size={18} aria-hidden="true" /> 12 đề ôn luyện SGK
            </button>
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {displaySets.map((set) => (
            <article key={set.id} data-practice-set-card={set.id} className="flex min-h-[230px] flex-col rounded-4xl border border-slate-200/80 bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.05)] sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-full bg-violet-100 px-3 py-1 font-baloo text-xs font-black text-violet-700">{LEVEL_LABELS[set.level]}</span>
                <span className="whitespace-nowrap font-baloo text-sm font-black text-amber-600">300 điểm</span>
              </div>
              <h2 className="mt-3 font-baloo text-xl font-black leading-snug text-brand-dark">{set.title}</h2>
              <p className="mt-2 text-justify font-vietnam text-sm font-semibold leading-relaxed text-slate-600">
                {activeTab === 'violympic'
                  ? 'Ba phần thi: Khởi động, Vận dụng và Về đích. 30 câu hỏi thực tế bóc tách từ tài liệu scan Violympic.'
                  : 'Ba phần luyện tập cân bằng kiến thức, vận dụng và thử thách.'} {set.timeLimitSeconds ? 'Mô phỏng thi trong 30 phút.' : 'Không giới hạn thời gian.'}
              </p>
              <div className="mt-auto flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
                <span className="whitespace-nowrap font-baloo text-sm font-black text-emerald-600">+60 XP • +3 ⭐</span>
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playPop();
                    onNavigate({
                      kind: 'practice-set',
                      subject: route.subject,
                      grade: route.grade,
                      setNumber: set.setNumber,
                      setSource: activeTab,
                    });
                  }}
                  className="flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-emerald-500 px-5 font-baloo font-black text-white shadow-[0_4px_0_#047857] transition-transform active:translate-y-1 active:shadow-none"
                >
                  <Play size={17} fill="currentColor" aria-hidden="true" /> Vào làm đề
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function CompetitionList({ route, onNavigate, onBack }: { route: Extract<PracticePortalRoute, { kind: 'practice-competition-list' }>; onNavigate: PracticePortalProps['onNavigate']; onBack: () => void }) {
  const pack = getCompetitionPack(route.track, route.grade);
  const isIoe = route.track === 'ioe_simulation';
  const title = isIoe ? 'Luyện thi IOE mô phỏng' : 'Luyện thi Trạng Nguyên mô phỏng';
  return (
    <div className="pb-28 pt-6 sm:pt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="rounded-4xl bg-[#fffdf9]/95 p-5 shadow-washi sm:p-7">
          <div className="flex items-start gap-3"><BackButton onClick={onBack} label="Kho đề" /><div>
            <p className="font-baloo text-sm font-black uppercase tracking-wider text-violet-600">Lớp {route.grade} • 12 đề tự biên soạn</p>
            <h1 className="font-baloo text-3xl font-black text-brand-dark">{title}</h1>
            <p className="mt-2 font-vietnam text-sm font-bold text-slate-600">{pack.officialDisclaimer}</p>
          </div></div>
        </header>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {pack.sets.map((set) => {
            const count = set.sections.flatMap((section) => section.items).length;
            const audioCount = set.sections.flatMap((section) => section.items).filter((item) => item.audio).length;
            return (
              <article key={set.id} data-practice-set-card={set.id} className="flex min-h-[230px] flex-col rounded-4xl border border-slate-200/80 bg-white p-5 shadow-md sm:p-6">
                <div className="flex items-start justify-between gap-3"><span className="rounded-full bg-violet-100 px-3 py-1 font-baloo text-xs font-black text-violet-700">{LEVEL_LABELS[set.level]}</span><span className="font-baloo text-sm font-black text-amber-600">{set.totalPoints} điểm</span></div>
                <h2 className="mt-3 font-baloo text-xl font-black text-brand-dark">{set.title}</h2>
                <p className="mt-2 font-vietnam text-sm font-semibold leading-relaxed text-slate-600">{count} câu{isIoe ? ` • ${audioCount} câu nghe` : ''} • {set.timeLimitSeconds ? '30 phút' : 'không giới hạn thời gian'}.</p>
                <div className="mt-auto flex items-end justify-between gap-3 border-t border-slate-100 pt-4"><span className="font-baloo text-sm font-black text-emerald-600">+60 XP • +3 ⭐</span><button type="button" onClick={() => onNavigate({ kind: 'practice-competition-set', track: route.track, grade: route.grade, setNumber: set.setNumber })} className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 font-baloo font-black text-white shadow-[0_4px_0_#047857] active:translate-y-1 active:shadow-none"><Play size={17} fill="currentColor" /> Vào làm đề</button></div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}

function answerForItem(progress: PracticeProgress, item: PracticeItem) {
  return progress.answers[item.id];
}

function correctAnswerLabel(item: PracticeItem): string {
  if (Array.isArray(item.correctAnswer)) return item.correctAnswer.join(' • ');
  if (['single_choice', 'true_false', 'picture_choice', 'odd_one_out', 'listening_choice'].includes(item.type)) {
    return item.options?.find((option) => option.id === item.correctAnswer)?.label || item.correctAnswer;
  }
  return item.correctAnswer;
}

function PracticeAnswer({ item, answer, onChange }: { item: PracticeItem; answer: string | string[] | undefined; onChange: (value: string | string[]) => void }) {
  if (['short_answer', 'letter_fill', 'word_fill', 'listening_input'].includes(item.type)) {
    return (
      <label className="block">
        <span className="mb-2 block font-baloo text-sm font-black text-slate-600">Điền câu trả lời</span>
        <input
          value={typeof answer === 'string' ? answer : ''}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Nhập câu trả lời của bé..."
          className="min-h-14 w-full rounded-2xl border-2 border-violet-200 bg-white px-5 font-vietnam text-xl font-bold text-brand-dark outline-none focus:border-violet-500 placeholder:text-slate-300 placeholder:font-normal"
          inputMode={typeof item.correctAnswer === 'string' && /^-?\d+(?:[.,]\d+)?$/u.test(item.correctAnswer) ? 'decimal' : 'text'}
          autoComplete="off"
        />
      </label>
    );
  }

  if (item.type === 'ordering') {
    const selected = Array.isArray(answer) ? answer : [];
    return (
      <div>
        <div className="mb-4 flex min-h-14 flex-wrap items-center gap-2 rounded-2xl bg-violet-50 px-4 py-3" aria-live="polite">
          {selected.length > 0 ? selected.map((value, index) => <span key={`${value}-${index}`} className="rounded-xl bg-violet-500 px-3 py-2 font-baloo font-black text-white">{index + 1}. {value}</span>) : <span className="font-vietnam font-semibold text-slate-500">Chạm lần lượt theo đúng thứ tự.</span>}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {item.options?.map((option) => (
            <button
              type="button"
              key={option.id}
              disabled={selected.includes(option.label)}
              onClick={() => onChange([...selected, option.label])}
              className="min-h-14 rounded-2xl bg-white px-3 font-baloo text-lg font-black text-brand-dark shadow-[0_3px_0_#cbd5e1] disabled:opacity-35"
            >{option.label}</button>
          ))}
        </div>
        <button type="button" onClick={() => onChange([])} className="mt-4 flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-slate-100 px-4 font-baloo font-black text-slate-600"><RotateCcw size={17} /> Làm lại thứ tự</button>
      </div>
    );
  }

  if (item.type === 'matching') {
    const selected = Array.isArray(answer) ? answer : [];
    const rights = item.matchingPairs?.map((pair) => pair.right) || [];
    return (
      <div className="space-y-3">
        {item.matchingPairs?.map((pair) => {
          const current = selected.find((value) => value.startsWith(`${pair.left}::`))?.split('::')[1] || '';
          return (
            <label key={pair.id} className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1.4fr)] items-center gap-2 rounded-2xl bg-white p-3 shadow-sm">
              <span className="font-baloo font-black text-brand-dark">{pair.left}</span>
              <span aria-hidden="true">→</span>
              <select
                value={current}
                onChange={(event) => {
                  const next = selected.filter((value) => !value.startsWith(`${pair.left}::`));
                  if (event.target.value) next.push(`${pair.left}::${event.target.value}`);
                  onChange(next);
                }}
                className="min-h-12 min-w-0 rounded-xl border border-violet-200 bg-violet-50 px-2 font-vietnam text-sm font-bold text-brand-dark"
              >
                <option value="">Chọn nghĩa</option>
                {rights.map((right) => (
                  <option
                    key={right}
                    value={right}
                    disabled={selected.some((value) => value.endsWith(`::${right}`) && value !== `${pair.left}::${right}`)}
                  >{right}</option>
                ))}
              </select>
            </label>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {item.options?.map((option) => {
        const selected = answer === option.id;
        const letter = option.id.replace(/^opt-/i, '').toUpperCase();
        const cleanText = option.label.replace(/^[A-D][.:)-]\s*/i, '').trim() || option.label;
        return (
          <button
            type="button"
            key={option.id}
            aria-pressed={selected}
            onClick={() => onChange(option.id)}
            className={`flex min-h-14 items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left font-baloo text-base sm:text-lg font-black transition-all active:translate-y-0.5 ${
              selected
                ? 'border-violet-600 bg-violet-500 text-white shadow-[0_3px_0_#6d28d9]'
                : 'border-slate-200 bg-white text-brand-dark hover:border-violet-300 shadow-sm'
            }`}
          >
            <span
              className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-black text-sm ${
                selected ? 'bg-white/25 text-white' : 'bg-violet-100 text-violet-700'
              }`}
            >
              {letter}
            </span>
            <span className="min-w-0 flex-1 leading-snug">{cleanText}</span>
          </button>
        );
      })}
    </div>
  );
}

function PracticeAudioPlayer({ item, set, progress, onProgress }: { item: PracticeItem; set: PracticeSet; progress: PracticeProgress; onProgress: (progress: PracticeProgress) => void }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [state, setState] = useState<'idle' | 'loading' | 'playing' | 'paused' | 'error'>('idle');
  const [rate, setRate] = useState(set.allowedAudioRates?.includes(1) ? 1 : (set.allowedAudioRates?.[0] || 1));
  const count = progress.audioPlayCounts?.[item.id] || 0;
  const canPlay = canPlayPracticeAudio(progress, item.id, set.maxAudioPlays);

  useEffect(() => () => {
    audioRef.current?.pause();
    if (audioRef.current) audioRef.current.src = '';
    audioRef.current = null;
  }, [item.id]);

  if (!item.audio) return null;
  const audioAsset = item.audio;

  const toggle = () => {
    if (state === 'playing') {
      audioRef.current?.pause();
      setState('paused');
      return;
    }
    if (!canPlay && state !== 'paused') return;
    const isResume = state === 'paused';
    let audio = audioRef.current;
    if (!audio) {
      audio = new Audio(audioAsset.assetPath);
      audio.preload = 'metadata';
      audio.onended = () => setState('idle');
      audio.onerror = () => setState('error');
      audioRef.current = audio;
    }
    audio.playbackRate = rate;
    setState('loading');
    void audio.play().then(() => {
      setState('playing');
      if (!isResume) onProgress(recordPracticeAudioPlay(progress, item.id));
    }).catch(() => setState('error'));
  };

  return (
    <section data-practice-audio-player className="mt-5 flex flex-col gap-3 rounded-3xl bg-sky-50 p-4 sm:flex-row sm:items-center sm:justify-between" aria-label="Trình phát câu nghe">
      <div><p className="font-baloo font-black text-sky-900">Nghe câu hỏi</p><p className="font-vietnam text-xs font-bold text-sky-700">{set.maxAudioPlays ? `Đã nghe ${count}/${set.maxAudioPlays} • Tối đa 2 lượt nghe` : 'Có thể nghe lại không giới hạn'}</p>{state === 'error' && <p className="mt-1 font-vietnam text-xs font-bold text-rose-600">Không mở được file audio.</p>}</div>
      <div className="flex items-center gap-2">
        {(set.allowedAudioRates?.length || 0) > 1 && <select aria-label="Tốc độ audio" value={rate} onChange={(event) => { const next = Number(event.target.value); setRate(next); if (audioRef.current) audioRef.current.playbackRate = next; }} className="min-h-12 rounded-2xl border border-sky-200 bg-white px-3 font-baloo font-black text-sky-900"><option value={0.8}>0.8x</option><option value={1}>1.0x</option></select>}
        <button type="button" onClick={toggle} disabled={!canPlay && state !== 'playing' && state !== 'paused'} aria-label={state === 'playing' ? 'Tạm dừng câu nghe' : 'Nghe câu hỏi'} className="flex min-h-12 min-w-12 items-center justify-center rounded-2xl bg-sky-500 px-4 font-baloo font-black text-white shadow-[0_4px_0_#0369a1] disabled:opacity-45">{state === 'playing' ? <Pause size={22} fill="currentColor" /> : <Volume2 size={22} />}</button>
      </div>
    </section>
  );
}

function sectionIndexFor(starts: number[], itemIndex: number): number {
  let result = 0;
  starts.forEach((start, index) => { if (start <= itemIndex) result = index; });
  return result;
}

export interface PracticeExamResult {
  correctCount: number;
  totalCount: number;
  score: number;
  bestScore: number;
  elapsedSeconds: number;
  correctness: boolean[];
}

export function PracticeExam({
  set,
  initialQuestionNumber,
  onQuestionChange,
  onBack,
  onReward,
  mode = 'practice',
  leaderboard = [],
  onAttemptComplete,
  storage,
}: {
  set: PracticeSet;
  initialQuestionNumber?: number;
  onQuestionChange: (questionNumber: number) => void;
  onBack: () => void;
  onReward: PracticePortalProps['onReward'];
  mode?: 'practice' | 'arena';
  leaderboard?: Array<{ playerName: string; score: number; totalPoints: number; elapsedSeconds: number }>;
  onAttemptComplete?: (result: PracticeExamResult) => void;
  storage?: PracticePortalProps['storage'];
}) {
  const allItems = useMemo(() => set.sections.flatMap((section) => section.items), [set]);
  const sectionStarts = useMemo(() => set.sections.map((_, sectionIndex) => set.sections.slice(0, sectionIndex).reduce((sum, section) => sum + section.items.length, 0)), [set]);
  const [progress, setProgress] = useState<PracticeProgress>(() => createPracticeProgress(set.id));
  const [currentIndex, setCurrentIndex] = useState(() => (
    initialQuestionNumber && initialQuestionNumber >= 1 && initialQuestionNumber <= allItems.length
      ? initialQuestionNumber - 1
      : (sectionStarts[progress.currentSectionIndex] || 0) + progress.currentItemIndex
  ));
  const [secondsLeft, setSecondsLeft] = useState(() => (
    set.timeLimitSeconds
      ? (typeof window === 'undefined' ? set.timeLimitSeconds : calculateRemainingPracticeSeconds(set.timeLimitSeconds, progress.startedAt))
      : 0
  ));
  const [result, setResult] = useState<PracticeExamResult | null>(null);
  const submitGuard = useRef(false);
  const routeSyncInitialized = useRef(false);
  const questionFocusInitialized = useRef(false);
  const resultHeadingRef = useRef<HTMLHeadingElement>(null);
  const questionHeadingRef = useRef<HTMLHeadingElement>(null);
  const item = allItems[currentIndex];
  const currentSection = sectionIndexFor(sectionStarts, currentIndex);

  useEffect(() => {
    const progressStorage = storage || (typeof window === 'undefined' ? undefined : window.localStorage);
    if (progressStorage) writePracticeProgress(progressStorage, progress);
  }, [progress, storage]);

  useEffect(() => {
    if (!routeSyncInitialized.current) {
      routeSyncInitialized.current = true;
      if (!initialQuestionNumber) return;
    }
    const targetIndex = initialQuestionNumber && initialQuestionNumber >= 1 && initialQuestionNumber <= allItems.length
      ? initialQuestionNumber - 1
      : 0;
    const targetSection = sectionIndexFor(sectionStarts, targetIndex);
    setCurrentIndex(targetIndex);
    setProgress((current) => ({
      ...current,
      currentSectionIndex: targetSection,
      currentItemIndex: targetIndex - sectionStarts[targetSection],
      updatedAt: Date.now(),
    }));
  }, [allItems.length, initialQuestionNumber, sectionStarts]);

  useEffect(() => {
    if (!questionFocusInitialized.current) {
      questionFocusInitialized.current = true;
      return;
    }
    questionHeadingRef.current?.focus();
  }, [currentIndex]);

  useEffect(() => {
    if (result) resultHeadingRef.current?.focus();
  }, [result]);

  const submit = () => {
    if (submitGuard.current || result) return;
    submitGuard.current = true;
    const correctness = allItems.map((candidate) => isPracticeAnswerCorrect(candidate, progress.answers[candidate.id]));
    const nextResult = calculatePracticeResult(correctness, set.totalPoints);
    const now = Date.now();
    const progressStorage = storage || (typeof window === 'undefined' ? undefined : window.localStorage);
    const latestSaved = progressStorage ? readPracticeProgress(progressStorage, set.id) : null;
    const isFirstCompletion = shouldGrantFirstCompletionReward(latestSaved || progress);
    const completed = completePracticeAttempt(progress, nextResult, now);
    if (progressStorage) writePracticeProgress(progressStorage, completed);
    setProgress(completed);
    const completedResult: PracticeExamResult = {
      ...nextResult,
      bestScore: completed.bestScore || nextResult.score,
      elapsedSeconds: completed.elapsedSeconds || 0,
      correctness,
    };
    setResult(completedResult);
    onAttemptComplete?.(completedResult);
    if (isFirstCompletion) onReward(60, 3);
    soundManager.playVictory();
  };

  useEffect(() => {
    if (!set.timeLimitSeconds || result) return;
    const updateTimer = () => {
      const remaining = calculateRemainingPracticeSeconds(set.timeLimitSeconds as number, progress.startedAt);
      setSecondsLeft(remaining);
      if (remaining === 0) submit();
    };
    updateTimer();
    const timer = window.setInterval(updateTimer, 1_000);
    return () => window.clearInterval(timer);
  }, [progress, result, set.timeLimitSeconds]);

  const goTo = (index: number) => {
    const bounded = Math.max(0, Math.min(allItems.length - 1, index));
    setCurrentIndex(bounded);
    onQuestionChange(bounded + 1);
    const boundedSection = sectionIndexFor(sectionStarts, bounded);
    setProgress((current) => ({ ...current, currentSectionIndex: boundedSection, currentItemIndex: bounded - sectionStarts[boundedSection], updatedAt: Date.now() }));
  };

  if (result) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="rounded-4xl bg-[#fffdf9]/95 p-7 text-center shadow-washi sm:p-10">
          <div className="text-6xl" aria-hidden="true">🏆</div>
          <h1 ref={resultHeadingRef} tabIndex={-1} className="mt-3 font-baloo text-3xl font-black text-brand-dark outline-none">{mode === 'arena' ? 'Bé đã hoàn thành lượt thi!' : 'Bé đã hoàn thành đề!'}</h1>
          <p className="mt-2 font-vietnam text-lg font-semibold text-slate-600">Đúng {result.correctCount}/{result.totalCount} hoạt động</p>
          <p className="mt-4 font-baloo text-5xl font-black text-violet-600">{result.score}/{set.totalPoints}</p>
          <p className="mt-2 font-vietnam text-sm font-bold text-slate-500">
            Điểm cao nhất: {result.bestScore}/{set.totalPoints} • Thời gian: {Math.floor(result.elapsedSeconds / 60)} phút {result.elapsedSeconds % 60} giây
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                const restarted = restartPracticeAttempt(progress);
                setProgress(restarted);
                setResult(null);
                submitGuard.current = false;
                setCurrentIndex(0);
                onQuestionChange(1);
                setSecondsLeft(set.timeLimitSeconds || 0);
              }}
              className="flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-violet-100 px-5 font-baloo font-black text-violet-800"
            ><RotateCcw size={18} /> Làm lại đề</button>
            <button type="button" onClick={onBack} className="flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-emerald-500 px-5 font-baloo font-black text-white shadow-[0_4px_0_#047857]"><CheckCircle2 size={18} /> Về danh sách đề</button>
          </div>
          {mode === 'arena' && (
            <section className="mt-8 rounded-3xl bg-violet-50 p-5 text-left" aria-labelledby="arena-result-ranking">
              <h2 id="arena-result-ranking" className="font-baloo text-2xl font-black text-violet-950">🏆 Bảng xếp hạng</h2>
              <div className="mt-3 space-y-2">
                {leaderboard.length > 0 ? leaderboard.slice(0, 10).map((entry, index) => (
                  <div key={`${entry.playerName}-${index}`} className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-sm">
                    <span className="font-baloo text-lg font-black text-violet-700">#{index + 1}</span>
                    <span className="font-vietnam font-bold text-brand-dark">{entry.playerName}</span>
                    <span className="text-right font-baloo text-sm font-black text-emerald-700">{entry.score}/{entry.totalPoints}<small className="block text-xs text-slate-500">{Math.floor(entry.elapsedSeconds / 60)}p {entry.elapsedSeconds % 60}s</small></span>
                  </div>
                )) : <p className="font-vietnam text-sm font-semibold text-slate-600">Kết quả đầu tiên sẽ mở bảng xếp hạng của lượt thi này.</p>}
              </div>
            </section>
          )}
          <section className="mt-8 border-t border-amber-100 pt-6 text-left" aria-labelledby="practice-review-heading">
            <h2 id="practice-review-heading" className="font-baloo text-2xl font-black text-brand-dark">Đáp án và lời giải</h2>
            <div className="mt-4 space-y-3">
              {allItems.map((candidate, index) => (
                <details key={candidate.id} className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                  <summary className={`cursor-pointer font-baloo font-black ${result.correctness[index] ? 'text-emerald-700' : 'text-rose-700'}`}>
                    Câu {index + 1}: {result.correctness[index] ? 'Đúng' : 'Chưa đúng'}
                  </summary>
                  <p className="mt-3 font-vietnam text-sm font-bold text-slate-700">Đáp án: {correctAnswerLabel(candidate)}</p>
                  <p className="mt-1 font-vietnam text-sm font-semibold leading-relaxed text-slate-600">{candidate.explanation}</p>
                  {candidate.audio && <p data-audio-transcript className="mt-2 rounded-xl bg-sky-50 px-3 py-2 font-vietnam text-sm font-semibold text-sky-800">Transcript: {candidate.audio.transcript}</p>}
                </details>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-28 pt-4 sm:pt-7">
      <div className="mx-auto max-w-5xl px-3 sm:px-6">
        <header className="flex flex-col gap-4 rounded-4xl bg-white/95 p-4 shadow-md sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="flex items-start gap-3">
            <BackButton onClick={onBack} label="Danh sách" />
            <div>
              <p className="font-baloo text-xs font-black uppercase tracking-wider text-violet-600">{subjectInfo(set.subject).label} lớp {set.grade}</p>
              <h1 className="font-baloo text-xl font-black leading-snug text-brand-dark sm:text-2xl">{set.title}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                const restarted = restartPracticeAttempt(progress);
                setProgress(restarted);
                setCurrentIndex(0);
                onQuestionChange(1);
                setSecondsLeft(set.timeLimitSeconds || 0);
              }}
              title="Xóa câu trả lời đã lưu và làm lại từ đầu"
              className="flex min-h-12 items-center justify-center gap-1.5 whitespace-nowrap rounded-2xl bg-slate-100 px-3 font-baloo text-xs font-black text-slate-600 transition-colors hover:bg-slate-200"
            >
              <RotateCcw size={16} /> Làm lại từ đầu
            </button>
            <div role={set.timeLimitSeconds ? 'timer' : undefined} aria-live={set.timeLimitSeconds && [60, 30, 10].includes(secondsLeft) ? 'polite' : 'off'} className={`flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-2xl px-4 font-baloo font-black ${set.timeLimitSeconds ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-800'}`}>
              <Clock3 size={20} aria-hidden="true" />
              <span>{set.timeLimitSeconds ? formatTime(secondsLeft) : 'Không giới hạn thời gian'}</span>
            </div>
          </div>
        </header>

        {set.sections.length > 1 && (
          <nav className="mt-4 grid grid-cols-3 gap-2 rounded-3xl bg-white/85 p-2 shadow-sm" aria-label="Ba phần của đề">
            {set.sections.map((section, index) => (
              <button
                type="button"
                key={section.id}
                onClick={() => goTo(sectionStarts[index])}
                aria-current={currentSection === index ? 'step' : undefined}
                className={`min-h-12 rounded-2xl px-2 font-baloo text-sm font-black leading-snug ${currentSection === index ? 'bg-violet-500 text-white shadow-[0_3px_0_#6d28d9]' : 'text-slate-600 hover:bg-violet-50'}`}
              >Phần {index + 1}</button>
            ))}
          </nav>
        )}

        <main data-practice-item-id={item.id} className="mt-4 rounded-4xl bg-[#fffdf9]/95 p-5 shadow-washi sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-100 pb-4">
            <span className="rounded-full bg-violet-100 px-3 py-1 font-baloo text-sm font-black text-violet-700">Câu {currentIndex + 1}/{allItems.length}</span>
            <span className={`rounded-full px-3 py-1 font-baloo text-xs font-black ${item.difficulty === 'challenge' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'}`}>{item.difficulty === 'challenge' ? '✨ Thử thách' : item.topic}</span>
          </div>
          <h2 ref={questionHeadingRef} tabIndex={-1} className="mt-6 font-vietnam text-xl font-extrabold leading-relaxed text-brand-dark outline-none sm:text-2xl">{item.prompt}</h2>
          {item.imageUrl && (
            <div className="my-5 flex justify-center">
              <div className="relative overflow-hidden rounded-3xl border-2 border-amber-200/80 bg-gradient-to-b from-amber-50/60 to-orange-50/40 p-2 shadow-washi">
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt || "Minh họa câu hỏi"}
                  className="max-h-60 sm:max-h-72 w-auto rounded-2xl object-contain shadow-xs bg-white"
                  loading="eager"
                />
              </div>
            </div>
          )}
          <PracticeAudioPlayer key={item.id} item={item} set={set} progress={progress} onProgress={setProgress} />
          <div className="mt-6">
            <PracticeAnswer
              item={item}
              answer={answerForItem(progress, item)}
              onChange={(answer) => {
                soundManager.playPop();
                setProgress((current) => recordPracticeAnswer(current, item.id, answer));
              }}
            />
          </div>
          {!set.timeLimitSeconds && item.explanation && (
            <details className="group mt-6 rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50/80 to-orange-50/60 shadow-sm transition-all open:shadow-md">
              <summary className="flex cursor-pointer select-none items-center gap-2.5 rounded-2xl px-4 py-3 font-baloo font-black text-amber-800 transition-colors hover:bg-amber-100/50 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-amber-400/20 text-amber-600 transition-transform group-open:rotate-12">
                  <Lightbulb size={18} />
                </span>
                <span className="text-sm">💡 Gợi ý và hướng dẫn làm bài</span>
                <Eye size={16} className="ml-auto text-amber-500/70 transition-transform group-open:rotate-180" />
              </summary>
              <div className="border-t border-amber-200/40 px-4 pb-4 pt-3">
                <div className="flex items-start gap-2 rounded-xl bg-emerald-50/80 px-3 py-2.5">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                  <p className="font-vietnam text-sm font-bold text-emerald-800">Đáp án đúng: {correctAnswerLabel(item)}</p>
                </div>
                <p className="mt-3 font-vietnam text-sm font-semibold leading-relaxed text-slate-700">{item.explanation}</p>
              </div>
            </details>
          )}
          <p className="mt-7 flex items-center gap-2 border-t border-amber-100 pt-4 font-vietnam text-xs font-semibold text-slate-500">
            <Sparkles size={16} className="shrink-0 text-amber-500" aria-hidden="true" />
            <span>{item.sourceCitation || `${item.sourceLabel || 'WonderKids'}.`}</span>
          </p>
        </main>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-[1fr_auto_1fr]">
          <button type="button" disabled={currentIndex === 0} onClick={() => goTo(currentIndex - 1)} className="flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-white px-4 font-baloo font-black text-slate-700 shadow-sm disabled:opacity-40"><ChevronLeft size={20} /> Câu trước</button>
          <span className="hidden items-center justify-center font-baloo font-black text-slate-600 sm:flex">Đã trả lời {Object.keys(progress.answers).length}/{allItems.length}</span>
          {currentIndex < allItems.length - 1 ? (
            <button type="button" onClick={() => goTo(currentIndex + 1)} className="flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-violet-500 px-4 font-baloo font-black text-white shadow-[0_4px_0_#6d28d9] active:translate-y-1 active:shadow-none">Câu tiếp <ChevronRight size={20} /></button>
          ) : (
            <button type="button" onClick={submit} className="flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-emerald-500 px-4 font-baloo font-black text-white shadow-[0_4px_0_#047857] active:translate-y-1 active:shadow-none"><CheckCircle2 size={20} /> Nộp bài</button>
          )}
        </div>
      </div>
    </div>
  );
}

export const PracticePortal: React.FC<PracticePortalProps> = ({
  route,
  onNavigate,
  onBack,
  onReward,
  playerName = 'Bé Yêu',
  currentGrade = 1,
  storage,
}) => {
  if (route.kind === 'practice-hub') {
    return route.mode === 'arena'
      ? <ArenaHub playerName={playerName} currentGrade={currentGrade} onNavigate={onNavigate} onBack={onBack} onReward={onReward} storage={storage} />
      : <PracticeHub onNavigate={onNavigate} onBack={onBack} />;
  }
  if (route.kind === 'practice-list') {
    return <PracticeList route={route} onNavigate={onNavigate} onBack={() => onNavigate({ kind: 'practice-hub' })} />;
  }
  if (route.kind === 'practice-competition-list') {
    return <CompetitionList route={route} onNavigate={onNavigate} onBack={() => onNavigate({ kind: 'practice-hub' })} />;
  }
  if (route.kind === 'practice-custom-set') {
    if (getQuestionBankItems(route).length < route.questionCount) {
      return <PracticeHub onNavigate={onNavigate} onBack={onBack} />;
    }
    const set = buildQuestionBankSession({
      mode: 'practice',
      competition: route.competition,
      grade: route.grade,
      subject: route.subject,
      topic: route.topic,
      difficulty: route.difficulty,
      questionCount: route.questionCount,
    });
    return (
      <PracticeExam
        key={set.id}
        set={set}
        initialQuestionNumber={route.questionNumber}
        onQuestionChange={(questionNumber) => onNavigate({ ...route, questionNumber })}
        onBack={() => onNavigate({ kind: 'practice-hub' })}
        onReward={onReward}
        storage={storage}
      />
    );
  }
  const set = route.kind === 'practice-competition-set'
    ? getCompetitionSet(route.track, route.grade, route.setNumber)
    : getPracticeSet(route.subject, route.grade, route.setNumber, route.setSource);
  if (!set) return <PracticeHub onNavigate={onNavigate} onBack={onBack} />;
  return (
    <PracticeExam
      key={set.id}
      set={set}
      initialQuestionNumber={route.questionNumber}
      onQuestionChange={(questionNumber) => onNavigate({ ...route, questionNumber })}
      onBack={() => route.kind === 'practice-competition-set'
        ? onNavigate({ kind: 'practice-competition-list', track: route.track, grade: route.grade })
        : onNavigate({ kind: 'practice-list', subject: route.subject, grade: route.grade })}
      onReward={onReward}
      storage={storage}
    />
  );
};
