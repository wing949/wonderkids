import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  BookOpenCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Play,
  RotateCcw,
  Sparkles,
  Trophy,
} from 'lucide-react';
import type { GradeLevel } from '../../types';
import {
  getLegacyPracticePacks,
  getPracticePack,
  getPracticeSet,
  PRACTICE_GRADES,
  type PracticeItem,
  type PracticeSet,
  type PracticeSubject,
} from '../../data/practice/index.ts';
import {
  calculatePracticeResult,
  calculateRemainingPracticeSeconds,
  completePracticeAttempt,
  createPracticeProgress,
  isPracticeAnswerCorrect,
  readPracticeProgress,
  recordPracticeAnswer,
  restartPracticeAttempt,
  shouldGrantFirstCompletionReward,
  writePracticeProgress,
  type PracticeProgress,
} from '../../utils/practiceProgress';
import { soundManager } from '../../utils/audio';

export type PracticePortalRoute =
  | { kind: 'practice-hub' }
  | { kind: 'practice-list'; subject: PracticeSubject; grade: GradeLevel }
  | { kind: 'practice-set'; subject: PracticeSubject; grade: GradeLevel; setNumber: number; questionNumber?: number };

interface PracticePortalProps {
  route: PracticePortalRoute;
  onNavigate: (route: PracticePortalRoute) => void;
  onBack: () => void;
  onReward: (xp: number, stars: number) => void;
}

const SUBJECTS: Array<{
  id: PracticeSubject;
  label: string;
  icon: string;
  description: string;
  cardClass: string;
  buttonClass: string;
}> = [
  { id: 'math', label: 'Toán', icon: '📐', description: 'Tính nhanh, hình học, đo lường và giải toán.', cardClass: 'bg-emerald-50/95 border-emerald-200/80', buttonClass: 'bg-emerald-500 shadow-[0_5px_0_#047857]' },
  { id: 'vietnamese', label: 'Tiếng Việt', icon: '📖', description: 'Chính tả, vốn từ, câu và đọc hiểu.', cardClass: 'bg-amber-50/95 border-amber-200/80', buttonClass: 'bg-amber-400 shadow-[0_5px_0_#b45309] text-amber-950' },
  { id: 'english', label: 'Tiếng Anh', icon: '🌍', description: 'Words, phonics, grammar and reading.', cardClass: 'bg-sky-50/95 border-sky-200/80', buttonClass: 'bg-sky-500 shadow-[0_5px_0_#0369a1]' },
  { id: 'math_en', label: 'Toán bằng tiếng Anh', icon: '🔢', description: 'Learn mathematics through natural English.', cardClass: 'bg-violet-50/95 border-violet-200/80', buttonClass: 'bg-violet-500 shadow-[0_5px_0_#6d28d9]' },
];

const LEVEL_LABELS = {
  foundation: 'Củng cố',
  acceleration: 'Tăng tốc',
  advanced: 'Nâng cao',
  mock_exam: 'Thi thử',
};

function subjectInfo(subject: PracticeSubject) {
  return SUBJECTS.find((item) => item.id === subject) || SUBJECTS[0];
}

function BackButton({ onClick, label = 'Quay lại' }: { onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={() => { soundManager.playPop(); onClick(); }}
      className="flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-white px-4 font-baloo font-black text-slate-700 shadow-sm transition-transform active:translate-y-1"
    >
      <ArrowLeft size={20} aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}

function PracticeHub({ onNavigate, onBack }: Pick<PracticePortalProps, 'onNavigate' | 'onBack'>) {
  const [grade, setGrade] = useState<GradeLevel>(1);
  const legacyPack = getLegacyPracticePacks()[0];

  return (
    <div className="relative pb-28 pt-6 sm:pt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 rounded-4xl bg-[#fffdf9]/95 p-5 shadow-washi sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex items-start gap-3">
            <BackButton onClick={onBack} />
            <div>
              <p className="font-baloo text-sm font-black uppercase tracking-wider text-violet-600">Luyện tập theo năng lực</p>
              <h1 className="font-baloo text-3xl font-black leading-tight text-brand-dark sm:text-4xl">Kho Luyện Đề</h1>
              <p className="mt-1 max-w-2xl font-vietnam text-sm font-semibold text-slate-600 sm:text-base">
                240 đề dành cho lớp 1–5. Nội dung luyện tập tự biên soạn, đối chiếu theo chương trình học và chủ điểm ôn luyện.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-2xl bg-violet-100 px-4 py-3 font-baloo font-black text-violet-800">
            <Trophy size={22} aria-hidden="true" />
            <span>12 đề mỗi môn</span>
          </div>
        </div>

        <section className="mt-6 rounded-4xl bg-white/80 p-4 shadow-md sm:p-6" aria-labelledby="practice-grade-heading">
          <h2 id="practice-grade-heading" className="font-baloo text-xl font-black text-brand-dark">Bé đang học lớp nào?</h2>
          <div className="mt-3 grid grid-cols-5 gap-2 sm:flex sm:flex-wrap">
            {PRACTICE_GRADES.map((value) => (
              <button
                type="button"
                key={value}
                onClick={() => { soundManager.playPop(); setGrade(value); }}
                aria-pressed={grade === value}
                className={`min-h-12 rounded-2xl px-3 font-baloo text-sm font-black transition-all active:translate-y-1 sm:min-w-24 ${
                  grade === value ? 'bg-violet-500 text-white shadow-[0_4px_0_#6d28d9]' : 'bg-slate-100 text-slate-600 hover:bg-violet-100'
                }`}
              >
                Lớp {value}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2" aria-label="Chọn môn luyện đề">
          {SUBJECTS.map((subject, index) => (
            <article
              key={subject.id}
              className={`group relative overflow-hidden rounded-4xl border p-6 shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-1 ${subject.cardClass}`}
              style={{ transform: `rotate(${index % 2 === 0 ? '-0.4deg' : '0.4deg'})` }}
            >
              <div className="absolute -top-2 left-1/2 h-5 w-24 -translate-x-1/2 rotate-[-3deg] rounded bg-white/55" aria-hidden="true" />
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-white text-4xl shadow-sm" aria-hidden="true">{subject.icon}</div>
                <div className="min-w-0">
                  <p className="font-baloo text-xs font-black uppercase tracking-wider text-slate-500">Lớp {grade} • 12 đề</p>
                  <h2 className="font-baloo text-2xl font-black leading-snug text-brand-dark">{subject.label}</h2>
                  <p className="mt-1 text-justify font-vietnam text-sm font-semibold leading-relaxed text-slate-600">{subject.description}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => { soundManager.playPop(); onNavigate({ kind: 'practice-list', subject: subject.id, grade }); }}
                className={`mt-5 flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-2xl px-5 font-baloo font-black text-white transition-transform active:translate-y-1 active:shadow-none ${subject.buttonClass}`}
              >
                <Play size={18} fill="currentColor" aria-hidden="true" />
                <span>Mở 12 đề lớp {grade}</span>
              </button>
            </article>
          ))}
        </section>

        <section className="mt-7 rounded-4xl bg-slate-100/90 p-5 shadow-sm sm:p-6" aria-labelledby="legacy-pack-heading">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-baloo text-xs font-black uppercase tracking-wider text-slate-500">Đề tham khảo cũ • không tính trong 240 đề mới</p>
              <h2 id="legacy-pack-heading" className="font-baloo text-xl font-black text-brand-dark">{legacyPack.title}</h2>
              <p className="mt-1 font-vietnam text-sm font-semibold text-slate-600">Nguồn gồm {legacyPack.sourcePageCount} trang; chưa mở làm bài cho đến khi từng câu và đáp án được đối chiếu.</p>
            </div>
            <span className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-slate-200 px-4 font-baloo font-black text-slate-600">
              <Clock3 size={18} aria-hidden="true" /> Chờ kiểm duyệt nguồn
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}

function PracticeList({ route, onNavigate, onBack }: { route: Extract<PracticePortalRoute, { kind: 'practice-list' }>; onNavigate: PracticePortalProps['onNavigate']; onBack: () => void }) {
  const pack = getPracticePack(route.subject, route.grade);
  const info = subjectInfo(route.subject);

  return (
    <div className="pb-28 pt-6 sm:pt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 rounded-4xl bg-[#fffdf9]/95 p-5 shadow-washi sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex items-start gap-3">
            <BackButton onClick={onBack} label="Kho đề" />
            <div>
              <p className="font-baloo text-sm font-black uppercase tracking-wider text-violet-600">{info.icon} {info.label} • Lớp {route.grade}</p>
              <h1 className="font-baloo text-3xl font-black leading-tight text-brand-dark">12 đề luyện tập</h1>
              <p className="mt-1 font-vietnam text-sm font-semibold text-slate-600">Mỗi đề có 3 phần, 30 hoạt động và tối đa 300 điểm.</p>
            </div>
          </div>
          <span className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-emerald-100 px-4 font-baloo font-black text-emerald-800">
            <BookOpenCheck size={20} aria-hidden="true" /> Nội dung tự biên soạn
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {pack.sets.map((set) => (
            <article key={set.id} data-practice-set-card={set.id} className="flex min-h-[230px] flex-col rounded-4xl border border-slate-200/80 bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.05)] sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-full bg-violet-100 px-3 py-1 font-baloo text-xs font-black text-violet-700">{LEVEL_LABELS[set.level]}</span>
                <span className="whitespace-nowrap font-baloo text-sm font-black text-amber-600">300 điểm</span>
              </div>
              <h2 className="mt-3 font-baloo text-xl font-black leading-snug text-brand-dark">{set.title}</h2>
              <p className="mt-2 text-justify font-vietnam text-sm font-semibold leading-relaxed text-slate-600">
                Ba phần luyện tập cân bằng kiến thức, vận dụng và thử thách. {set.timeLimitSeconds ? 'Mô phỏng thi trong 30 phút.' : 'Không giới hạn thời gian.'}
              </p>
              <div className="mt-auto flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
                <span className="whitespace-nowrap font-baloo text-sm font-black text-emerald-600">+60 XP • +3 ⭐</span>
                <button
                  type="button"
                  onClick={() => { soundManager.playPop(); onNavigate({ kind: 'practice-set', subject: route.subject, grade: route.grade, setNumber: set.setNumber }); }}
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

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}

function answerForItem(progress: PracticeProgress, item: PracticeItem) {
  return progress.answers[item.id];
}

function correctAnswerLabel(item: PracticeItem): string {
  if (Array.isArray(item.correctAnswer)) return item.correctAnswer.join(' • ');
  if (item.type === 'single_choice') {
    return item.options?.find((option) => option.id === item.correctAnswer)?.label || item.correctAnswer;
  }
  return item.correctAnswer;
}

function PracticeAnswer({ item, answer, onChange }: { item: PracticeItem; answer: string | string[] | undefined; onChange: (value: string | string[]) => void }) {
  if (item.type === 'short_answer') {
    return (
      <label className="block">
        <span className="mb-2 block font-baloo text-sm font-black text-slate-600">Điền câu trả lời</span>
        <input
          value={typeof answer === 'string' ? answer : ''}
          onChange={(event) => onChange(event.target.value)}
          className="min-h-14 w-full rounded-2xl border-2 border-violet-200 bg-white px-5 font-vietnam text-xl font-bold text-brand-dark outline-none focus:border-violet-500"
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
        return (
          <button
            type="button"
            key={option.id}
            aria-pressed={selected}
            onClick={() => onChange(option.id)}
            className={`min-h-14 rounded-2xl border-2 px-4 text-left font-baloo text-lg font-black transition-all active:translate-y-1 ${selected ? 'border-violet-600 bg-violet-500 text-white shadow-[0_3px_0_#6d28d9]' : 'border-slate-200 bg-white text-brand-dark hover:border-violet-300'}`}
          >
            <span className="mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-sm">{option.id.toUpperCase()}</span>{option.label}
          </button>
        );
      })}
    </div>
  );
}

function PracticeExam({
  set,
  initialQuestionNumber,
  onQuestionChange,
  onBack,
  onReward,
}: {
  set: PracticeSet;
  initialQuestionNumber?: number;
  onQuestionChange: (questionNumber: number) => void;
  onBack: () => void;
  onReward: PracticePortalProps['onReward'];
}) {
  const allItems = useMemo(() => set.sections.flatMap((section) => section.items), [set]);
  const [progress, setProgress] = useState<PracticeProgress>(() => {
    if (typeof window === 'undefined') return createPracticeProgress(set.id, 0);
    return readPracticeProgress(window.localStorage, set.id) || createPracticeProgress(set.id);
  });
  const [currentIndex, setCurrentIndex] = useState(() => (
    initialQuestionNumber && initialQuestionNumber >= 1 && initialQuestionNumber <= 30
      ? initialQuestionNumber - 1
      : progress.currentSectionIndex * 10 + progress.currentItemIndex
  ));
  const [secondsLeft, setSecondsLeft] = useState(() => (
    set.timeLimitSeconds
      ? (typeof window === 'undefined' ? set.timeLimitSeconds : calculateRemainingPracticeSeconds(set.timeLimitSeconds, progress.startedAt))
      : 0
  ));
  const [result, setResult] = useState<{ correctCount: number; totalCount: number; score: number; bestScore: number; elapsedSeconds: number; correctness: boolean[] } | null>(null);
  const submitGuard = useRef(false);
  const routeSyncInitialized = useRef(false);
  const questionFocusInitialized = useRef(false);
  const resultHeadingRef = useRef<HTMLHeadingElement>(null);
  const questionHeadingRef = useRef<HTMLHeadingElement>(null);
  const item = allItems[currentIndex];
  const currentSection = Math.floor(currentIndex / 10);

  useEffect(() => {
    if (typeof window !== 'undefined') writePracticeProgress(window.localStorage, progress);
  }, [progress]);

  useEffect(() => {
    if (!routeSyncInitialized.current) {
      routeSyncInitialized.current = true;
      if (!initialQuestionNumber) return;
    }
    const targetIndex = initialQuestionNumber && initialQuestionNumber >= 1 && initialQuestionNumber <= 30
      ? initialQuestionNumber - 1
      : 0;
    setCurrentIndex(targetIndex);
    setProgress((current) => ({
      ...current,
      currentSectionIndex: Math.floor(targetIndex / 10),
      currentItemIndex: targetIndex % 10,
      updatedAt: Date.now(),
    }));
  }, [initialQuestionNumber]);

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
    const latestSaved = typeof window === 'undefined' ? null : readPracticeProgress(window.localStorage, set.id);
    const isFirstCompletion = shouldGrantFirstCompletionReward(latestSaved || progress);
    const completed = completePracticeAttempt(progress, nextResult, now);
    if (typeof window !== 'undefined') writePracticeProgress(window.localStorage, completed);
    setProgress(completed);
    setResult({
      ...nextResult,
      bestScore: completed.bestScore || nextResult.score,
      elapsedSeconds: completed.elapsedSeconds || 0,
      correctness,
    });
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
    setProgress((current) => ({ ...current, currentSectionIndex: Math.floor(bounded / 10), currentItemIndex: bounded % 10, updatedAt: Date.now() }));
  };

  if (result) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="rounded-4xl bg-[#fffdf9]/95 p-7 text-center shadow-washi sm:p-10">
          <div className="text-6xl" aria-hidden="true">🏆</div>
          <h1 ref={resultHeadingRef} tabIndex={-1} className="mt-3 font-baloo text-3xl font-black text-brand-dark outline-none">Bé đã hoàn thành đề!</h1>
          <p className="mt-2 font-vietnam text-lg font-semibold text-slate-600">Đúng {result.correctCount}/{result.totalCount} hoạt động</p>
          <p className="mt-4 font-baloo text-5xl font-black text-violet-600">{result.score}/300</p>
          <p className="mt-2 font-vietnam text-sm font-bold text-slate-500">
            Điểm cao nhất: {result.bestScore}/300 • Thời gian: {Math.floor(result.elapsedSeconds / 60)} phút {result.elapsedSeconds % 60} giây
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
          <div role={set.timeLimitSeconds ? 'timer' : undefined} aria-live={set.timeLimitSeconds && [60, 30, 10].includes(secondsLeft) ? 'polite' : 'off'} className={`flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-2xl px-4 font-baloo font-black ${set.timeLimitSeconds ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-800'}`}>
            <Clock3 size={20} aria-hidden="true" />
            <span>{set.timeLimitSeconds ? formatTime(secondsLeft) : 'Không giới hạn thời gian'}</span>
          </div>
        </header>

        <nav className="mt-4 grid grid-cols-3 gap-2 rounded-3xl bg-white/85 p-2 shadow-sm" aria-label="Ba phần của đề">
          {set.sections.map((section, index) => (
            <button
              type="button"
              key={section.id}
              onClick={() => goTo(index * 10)}
              aria-current={currentSection === index ? 'step' : undefined}
              className={`min-h-12 rounded-2xl px-2 font-baloo text-sm font-black leading-snug ${currentSection === index ? 'bg-violet-500 text-white shadow-[0_3px_0_#6d28d9]' : 'text-slate-600 hover:bg-violet-50'}`}
            >Phần {index + 1}</button>
          ))}
        </nav>

        <main className="mt-4 rounded-4xl bg-[#fffdf9]/95 p-5 shadow-washi sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-100 pb-4">
            <span className="rounded-full bg-violet-100 px-3 py-1 font-baloo text-sm font-black text-violet-700">Câu {currentIndex + 1}/30</span>
            <span className={`rounded-full px-3 py-1 font-baloo text-xs font-black ${item.difficulty === 'challenge' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'}`}>{item.difficulty === 'challenge' ? '✨ Thử thách' : item.topic}</span>
          </div>
          <h2 ref={questionHeadingRef} tabIndex={-1} className="mt-6 font-vietnam text-xl font-extrabold leading-relaxed text-brand-dark outline-none sm:text-2xl">{item.prompt}</h2>
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
          <p className="mt-7 flex items-center gap-2 border-t border-amber-100 pt-4 font-vietnam text-xs font-semibold text-slate-500">
            <Sparkles size={16} className="shrink-0 text-amber-500" aria-hidden="true" />
            <span>{item.sourceLabel}. Không phải câu hỏi nguyên văn SGK hoặc đề thi chính thức.</span>
          </p>
        </main>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-[1fr_auto_1fr]">
          <button type="button" disabled={currentIndex === 0} onClick={() => goTo(currentIndex - 1)} className="flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-white px-4 font-baloo font-black text-slate-700 shadow-sm disabled:opacity-40"><ChevronLeft size={20} /> Câu trước</button>
          <span className="hidden items-center justify-center font-baloo font-black text-slate-600 sm:flex">Đã trả lời {Object.keys(progress.answers).length}/30</span>
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

export const PracticePortal: React.FC<PracticePortalProps> = ({ route, onNavigate, onBack, onReward }) => {
  if (route.kind === 'practice-hub') return <PracticeHub onNavigate={onNavigate} onBack={onBack} />;
  if (route.kind === 'practice-list') {
    return <PracticeList route={route} onNavigate={onNavigate} onBack={() => onNavigate({ kind: 'practice-hub' })} />;
  }
  const set = getPracticeSet(route.subject, route.grade, route.setNumber);
  if (!set) return <PracticeHub onNavigate={onNavigate} onBack={onBack} />;
  return (
    <PracticeExam
      key={set.id}
      set={set}
      initialQuestionNumber={route.questionNumber}
      onQuestionChange={(questionNumber) => onNavigate({ ...route, questionNumber })}
      onBack={() => onNavigate({ kind: 'practice-list', subject: route.subject, grade: route.grade })}
      onReward={onReward}
    />
  );
};
