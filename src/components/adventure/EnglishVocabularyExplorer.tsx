import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
  Volume2,
  Star,
  Bookmark,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ArrowRight,
  Check,
  Undo2,
} from 'lucide-react';
import { GradeLevel } from '../../types';
import {
  GlobalSuccessVocabularyItem,
  VOCABULARY_CATEGORIES,
  getAllEnglishVocabulary,
  getMasteredWordIds,
  saveMasteredWordIds,
  getReviewWordIds,
  saveReviewWordIds,
} from '../../data/curriculum/english/vocabularyData';
import { soundManager } from '../../utils/audio';
import { MissingLettersGame } from './vocabGames/MissingLettersGame';
import { DisappearingWordGame } from './vocabGames/DisappearingWordGame';
import { WordMemoryMatchGame } from './vocabGames/WordMemoryMatchGame';

interface EnglishVocabularyExplorerProps {
  initialGrade: GradeLevel;
  onBackToMap?: () => void;
  onAwardStars?: (stars: number, xp: number) => void;
}

type StudyMode = 'gallery' | 'flip' | 'games';
type ActiveGame = 'missing_letters' | 'disappearing_word' | 'memory_match' | 'quiz';

interface QuizQuestion {
  id: string;
  type: 'word_to_meaning' | 'meaning_to_word' | 'audio_to_word' | 'spelling';
  prompt: string;
  subprompt?: string;
  audioWord?: string;
  correctAnswer: string;
  options: { id: string; label: string; isCorrect: boolean }[];
  scrambledLetters?: string[];
  vocabItem: GlobalSuccessVocabularyItem;
}

export const EnglishVocabularyExplorer: React.FC<EnglishVocabularyExplorerProps> = ({
  initialGrade,
  onBackToMap,
  onAwardStars,
}) => {
  // Navigation & Filter States
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(initialGrade);
  const [selectedSemester, setSelectedSemester] = useState<0 | 1 | 2>(0);
  const [sourceFilter, setSourceFilter] = useState<'all' | 'flashcards_pdf' | 'sgk_units'>('all');
  const [selectedUnitId, setSelectedUnitId] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [studyMode, setStudyMode] = useState<StudyMode>('gallery');
  const [activeGame, setActiveGame] = useState<ActiveGame>('missing_letters');
  const [playbackSpeed, setPlaybackSpeed] = useState<0.8 | 1.0>(1.0);
  const [playingId, setPlayingId] = useState<string | null>(null);

  // Mastery Tracking (Saved to localStorage)
  const [masteredIds, setMasteredIds] = useState<Set<string>>(() => getMasteredWordIds());
  const [reviewIds, setReviewIds] = useState<Set<string>>(() => getReviewWordIds());
  const [filterMastery, setFilterMastery] = useState<'all' | 'mastered' | 'review'>('all');

  // Study Mode States
  const [flipIndex, setFlipIndex] = useState<number>(0);

  // Quiz Mode States
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuizIdx, setCurrentQuizIdx] = useState<number>(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState<string | null>(null);
  const [spellingTiles, setSpellingTiles] = useState<string[]>([]);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  // Keep selectedGrade in sync if parent changes initialGrade
  useEffect(() => {
    setSelectedGrade(initialGrade);
    setSelectedUnitId('all');
  }, [initialGrade]);

  // Master vocabulary dataset
  const allVocab = useMemo(() => getAllEnglishVocabulary(), []);

  // Distinct units available for selected grade and semester
  const availableUnits = useMemo(() => {
    const unitsMap = new Map<string, { id: string; title: string; textbookRef: string; semester: 1 | 2 }>();
    allVocab
      .filter((v) => {
        if (v.grade !== selectedGrade) return false;
        if (sourceFilter === 'flashcards_pdf' && !v.textbookRef.includes('Flashcards')) return false;
        if (sourceFilter === 'sgk_units' && v.textbookRef.includes('Flashcards')) return false;
        return true;
      })
      .forEach((v) => {
        if (!unitsMap.has(v.unitId)) {
          unitsMap.set(v.unitId, {
            id: v.unitId,
            title: v.unitTitle,
            textbookRef: v.textbookRef,
            semester: v.semester,
          });
        }
      });
    return Array.from(unitsMap.values());
  }, [allVocab, selectedGrade, sourceFilter]);

  // Filtered vocabulary list
  const filteredVocab = useMemo(() => {
    return allVocab.filter((item) => {
      if (item.grade !== selectedGrade) return false;
      if (selectedSemester !== 0 && item.semester !== selectedSemester) return false;
      if (sourceFilter === 'flashcards_pdf' && !item.textbookRef.includes('Flashcards')) return false;
      if (sourceFilter === 'sgk_units' && item.textbookRef.includes('Flashcards')) return false;
      if (selectedUnitId !== 'all' && item.unitId !== selectedUnitId) return false;
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;

      // Mastery filter
      if (filterMastery === 'mastered' && !masteredIds.has(item.id)) return false;
      if (filterMastery === 'review' && !reviewIds.has(item.id)) return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.trim().toLowerCase();
        const matchWord = item.word.toLowerCase().includes(q);
        const matchMeaning = item.meaning.toLowerCase().includes(q);
        const matchUnit = item.unitTitle.toLowerCase().includes(q);
        const matchSentence = item.exampleSentence.toLowerCase().includes(q);
        if (!matchWord && !matchMeaning && !matchUnit && !matchSentence) return false;
      }

      return true;
    });
  }, [
    allVocab,
    selectedGrade,
    selectedSemester,
    sourceFilter,
    selectedUnitId,
    selectedCategory,
    filterMastery,
    masteredIds,
    reviewIds,
    searchQuery,
  ]);

  // Reset flip index when filtered list changes
  useEffect(() => {
    setFlipIndex(0);
  }, [filteredVocab.length, selectedGrade, selectedSemester, selectedUnitId]);

  // Handle Play Voice Pronunciation
  const handlePlayVoice = (text: string, id: string, speedOverride?: 0.8 | 1.0) => {
    soundManager.stopSpeaking();
    setPlayingId(id);
    const speed = speedOverride || playbackSpeed;
    const clean = text.replace(/[*#_~`💡✨⭐🔊🎉🏖️•—]/g, '').trim();
    soundManager.speakBrowserSpeech(
      clean,
      'en-US',
      () => {
        setPlayingId((curr) => (curr === id ? null : curr));
      },
      1,
      speed
    );
  };

  // Toggle Mastered state
  const handleToggleMastered = (id: string) => {
    soundManager.playPop();
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        // If it was in review, remove from review
        setReviewIds((rPrev) => {
          const rNext = new Set(rPrev);
          rNext.delete(id);
          saveReviewWordIds(rNext);
          return rNext;
        });
        soundManager.playCorrect();
      }
      saveMasteredWordIds(next);
      return next;
    });
  };

  // Toggle Review state
  const handleToggleReview = (id: string) => {
    soundManager.playPop();
    setReviewIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        // If it was in mastered, remove from mastered
        setMasteredIds((mPrev) => {
          const mNext = new Set(mPrev);
          mNext.delete(id);
          saveMasteredWordIds(mNext);
          return mNext;
        });
      }
      saveReviewWordIds(next);
      return next;
    });
  };

  // Build Quiz Questions from current filtered list (or grade list if filtered is too small)
  const generateQuizQuestions = useCallback(() => {
    const pool = filteredVocab.length >= 4 ? filteredVocab : allVocab.filter((v) => v.grade === selectedGrade);
    const shuffledPool = [...pool].sort(() => 0.5 - Math.random());
    const count = Math.min(10, Math.max(4, shuffledPool.length));
    const selectedWords = shuffledPool.slice(0, count);

    const questions: QuizQuestion[] = selectedWords.map((item, idx) => {
      const types: QuizQuestion['type'][] = ['word_to_meaning', 'meaning_to_word', 'audio_to_word', 'spelling'];
      const qType = types[idx % types.length];

      // Pick 3 distractors from pool
      const distractors = pool
        .filter((other) => other.id !== item.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      if (qType === 'word_to_meaning') {
        const options = [
          { id: 'correct', label: item.meaning, isCorrect: true },
          ...distractors.map((d, dIdx) => ({ id: `distractor-${dIdx}`, label: d.meaning, isCorrect: false })),
        ].sort(() => 0.5 - Math.random());

        return {
          id: `q-${idx}`,
          type: 'word_to_meaning',
          prompt: `Từ tiếng Anh “${item.word}” có nghĩa là gì?`,
          subprompt: item.phonetic ? `Phiên âm: ${item.phonetic}` : undefined,
          correctAnswer: item.meaning,
          options,
          vocabItem: item,
        };
      }

      if (qType === 'meaning_to_word') {
        const options = [
          { id: 'correct', label: `${item.word} ${item.emoji}`, isCorrect: true },
          ...distractors.map((d, dIdx) => ({ id: `distractor-${dIdx}`, label: `${d.word} ${d.emoji}`, isCorrect: false })),
        ].sort(() => 0.5 - Math.random());

        return {
          id: `q-${idx}`,
          type: 'meaning_to_word',
          prompt: `Từ tiếng Anh nào mang nghĩa: “${item.meaning}”?`,
          correctAnswer: item.word,
          options,
          vocabItem: item,
        };
      }

      if (qType === 'audio_to_word') {
        const options = [
          { id: 'correct', label: `${item.word} ${item.emoji}`, isCorrect: true },
          ...distractors.map((d, dIdx) => ({ id: `distractor-${dIdx}`, label: `${d.word} ${d.emoji}`, isCorrect: false })),
        ].sort(() => 0.5 - Math.random());

        return {
          id: `q-${idx}`,
          type: 'audio_to_word',
          prompt: 'Nghe phát âm và chọn từ vựng tương ứng:',
          audioWord: item.word,
          correctAnswer: item.word,
          options,
          vocabItem: item,
        };
      }

      // Spelling question
      const cleanLetters = item.word.toLowerCase().replace(/[^a-z]/g, '').split('');
      const scrambled = [...cleanLetters].sort(() => 0.5 - Math.random());

      return {
        id: `q-${idx}`,
        type: 'spelling',
        prompt: `Ghép các chữ cái để viết đúng từ: “${item.meaning}”`,
        correctAnswer: cleanLetters.join(''),
        options: [],
        scrambledLetters: scrambled,
        vocabItem: item,
      };
    });

    setQuizQuestions(questions);
    setCurrentQuizIdx(0);
    setSelectedQuizOption(null);
    setSpellingTiles([]);
    setIsAnswerChecked(false);
    setIsAnswerCorrect(false);
    setQuizScore(0);
    setQuizCompleted(false);
  }, [filteredVocab, allVocab, selectedGrade]);

  // Start Quiz Mode
  const handleStartQuiz = () => {
    soundManager.playPop();
    generateQuizQuestions();
    setStudyMode('games');
    setActiveGame('quiz');
  };

  // Check Quiz Answer
  const handleCheckQuizAnswer = () => {
    const q = quizQuestions[currentQuizIdx];
    if (!q) return;

    let correct = false;
    if (q.type === 'spelling') {
      correct = spellingTiles.join('').toLowerCase() === q.correctAnswer.toLowerCase();
    } else {
      correct = selectedQuizOption === 'correct';
    }

    setIsAnswerCorrect(correct);
    setIsAnswerChecked(true);

    if (correct) {
      soundManager.playCorrect();
      setQuizScore((prev) => prev + 10);
      // Auto mark as mastered if answered correctly
      setMasteredIds((prev) => {
        const next = new Set(prev);
        next.add(q.vocabItem.id);
        saveMasteredWordIds(next);
        return next;
      });
    } else {
      soundManager.playIncorrect();
      // Mark as needs review
      setReviewIds((prev) => {
        const next = new Set(prev);
        next.add(q.vocabItem.id);
        saveReviewWordIds(next);
        return next;
      });
    }
  };

  // Next Quiz Question
  const handleNextQuizQuestion = () => {
    soundManager.playPop();
    if (currentQuizIdx < quizQuestions.length - 1) {
      setCurrentQuizIdx((prev) => prev + 1);
      setSelectedQuizOption(null);
      setSpellingTiles([]);
      setIsAnswerChecked(false);
      setIsAnswerCorrect(false);
    } else {
      setQuizCompleted(true);
      soundManager.playVictory();
      if (onAwardStars) {
        const earnedStars = Math.max(1, Math.round((quizScore / (quizQuestions.length * 10)) * 3));
        onAwardStars(earnedStars, quizScore);
      }
    }
  };

  // Total mastered for this grade
  const gradeVocabCount = useMemo(() => {
    return allVocab.filter((v) => v.grade === selectedGrade).length;
  }, [allVocab, selectedGrade]);

  const gradeMasteredCount = useMemo(() => {
    return allVocab.filter((v) => v.grade === selectedGrade && masteredIds.has(v.id)).length;
  }, [allVocab, selectedGrade, masteredIds]);

  const flashcardsPdfCount = useMemo(() => {
    return allVocab.filter((v) => v.grade === selectedGrade && v.textbookRef.includes('Flashcards')).length;
  }, [allVocab, selectedGrade]);

  const sgkUnitsCount = useMemo(() => {
    return allVocab.filter((v) => v.grade === selectedGrade && !v.textbookRef.includes('Flashcards')).length;
  }, [allVocab, selectedGrade]);

  const masteryPercent = gradeVocabCount > 0 ? Math.round((gradeMasteredCount / gradeVocabCount) * 100) : 0;

  return (
    <div className="w-full space-y-4">
        {/* ========================================================================= */}
        {/* WONDERKIDS UNIFIED PILL-STYLE DASHBOARD (ĐỒNG BỘ 100% DESIGN SYSTEM) */}
        {/* ========================================================================= */}
        <div className="relative overflow-hidden rounded-3xl border border-sky-200/70 bg-white/95 backdrop-blur p-3.5 sm:p-4 shadow-sm space-y-3">
          {/* HÀNG 1: COMPACT HEADER */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-2.5 border-b border-slate-100">
            {/* Trái: Mascot & Tiêu đề */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-2xl bg-sky-500 shadow-pop-sm border-2 border-sky-600">
                <img
                  src="/assets/pipi_english.webp"
                  alt="Cá Heo PiPi"
                  className="h-7 w-7 sm:h-8 sm:w-8 object-contain drop-shadow-xs"
                />
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-baloo text-base sm:text-lg md:text-xl font-black text-sky-950 leading-tight">
                  Sổ Tay Từ Vựng Tiếng Anh SGK
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 font-baloo font-bold text-[11px] whitespace-nowrap">
                  🌍 Global Success
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-baloo font-bold text-[11px] whitespace-nowrap">
                  ⭐ GDPT 2018
                </span>
              </div>
            </div>

            {/* Phải: Tiến độ, Giọng đọc & Nút Về bản đồ */}
            <div className="flex items-center gap-2 flex-wrap shrink-0">
              {/* Tiến độ đã thuộc */}
              <div className="flex items-center gap-2 bg-slate-100/90 px-3 py-1.5 rounded-full border border-slate-200 text-xs font-baloo font-bold text-slate-700 whitespace-nowrap">
                <span>🏆 Đã thuộc: <strong className="text-emerald-600 font-black">{gradeMasteredCount}/{gradeVocabCount}</strong></span>
                <div className="w-12 bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${masteryPercent}%` }}
                  />
                </div>
              </div>

              {/* Tốc độ đọc */}
              <div className="flex items-center gap-1 bg-slate-100/90 p-0.5 rounded-full border border-slate-200 text-xs font-baloo font-bold shrink-0">
                <span className="pl-2 pr-1 text-slate-500">🎧</span>
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playPop();
                    setPlaybackSpeed(1.0);
                  }}
                  className={`px-2.5 py-1 rounded-full text-xs font-baloo font-bold cursor-pointer transition-all ${
                    playbackSpeed === 1.0 ? 'bg-sky-500 text-white shadow-xs font-black' : 'text-slate-600 hover:text-brand-dark'
                  }`}
                >
                  1.0x (Chuẩn)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playPop();
                    setPlaybackSpeed(0.8);
                  }}
                  className={`px-2.5 py-1 rounded-full text-xs font-baloo font-bold cursor-pointer transition-all ${
                    playbackSpeed === 0.8 ? 'bg-amber-400 text-amber-950 shadow-xs font-black' : 'text-slate-600 hover:text-brand-dark'
                  }`}
                >
                  0.8x (Chậm)
                </button>
              </div>

              {/* Nút về bản đồ */}
              {onBackToMap && (
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playPop();
                    onBackToMap();
                  }}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-baloo font-bold text-xs sm:text-sm border border-slate-200 shadow-2xs hover:shadow-xs transition-all cursor-pointer whitespace-nowrap"
                >
                  <ArrowLeft size={14} />
                  <span>Về Bản Đồ</span>
                </button>
              )}
            </div>
          </div>

          {/* HÀNG 2: ĐỒNG BỘ STYLE THẺ TAB (PILL TACTILE THEO HEADER & GÓC BÉ) */}
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            {/* 3 Tab chuyển chế độ học tập (Đồng bộ kiểu Góc Bé / Thẻ bài) */}
            <div className="flex items-center gap-1 bg-slate-100/90 p-1 rounded-full border border-slate-200/80 shrink-0">
              <button
                type="button"
                onClick={() => {
                  soundManager.playPop();
                  setStudyMode('gallery');
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-baloo font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                  studyMode === 'gallery'
                    ? 'bg-sky-500 text-white shadow-pop-sm font-black'
                    : 'text-slate-600 hover:text-brand-dark hover:bg-white/60'
                }`}
              >
                <span>📖 Danh Sách Thẻ</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundManager.playPop();
                  setStudyMode('flip');
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-baloo font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                  studyMode === 'flip'
                    ? 'bg-amber-400 text-amber-950 shadow-pop-sm font-black'
                    : 'text-slate-600 hover:text-brand-dark hover:bg-white/60'
                }`}
              >
                <span>🎴 Thẻ Học 2 Cột</span>
                <span className="hidden sm:inline-block px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-950 text-[10px] font-black">
                  Song song
                </span>
              </button>

              <button
                type="button"
                onClick={handleStartQuiz}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-baloo font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                  studyMode === 'games'
                    ? 'bg-emerald-500 text-white shadow-pop-sm font-black'
                    : 'text-slate-600 hover:text-brand-dark hover:bg-white/60'
                }`}
              >
                <span>🎮 Trò Chơi Trí Nhớ</span>
                <span className="hidden sm:inline-block px-1.5 py-0.2 rounded-full bg-emerald-600/30 text-white text-[10px] font-black">
                  4 Game
                </span>
              </button>
            </div>

            {/* Khối Lớp 1-5 & Học Kỳ (Đồng bộ 100% với Thanh chọn Lớp trên Top Header!) */}
            <div className="flex items-center gap-2 flex-wrap shrink-0">
              {/* Khối Lớp */}
              <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/80 shrink-0">
                <span className="font-baloo font-extrabold text-xs text-slate-500 pl-2 pr-1 uppercase hidden sm:inline">
                  Khối:
                </span>
                {([1, 2, 3, 4, 5] as GradeLevel[]).map((grade) => {
                  const isSelected = grade === selectedGrade;
                  return (
                    <button
                      key={grade}
                      type="button"
                      onClick={() => {
                        soundManager.playPop();
                        setSelectedGrade(grade);
                        setSelectedUnitId('all');
                        setSourceFilter('all');
                      }}
                      className={`px-3 py-1 rounded-full font-baloo font-extrabold text-xs transition-all whitespace-nowrap cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-500 text-white shadow-sm scale-105 font-black'
                          : 'text-slate-600 hover:text-brand-dark hover:bg-white/60'
                      }`}
                    >
                      Lớp {grade}
                    </button>
                  );
                })}
              </div>

              {/* Học Kỳ */}
              <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/80 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playPop();
                    setSelectedSemester(0);
                    setSelectedUnitId('all');
                  }}
                  className={`px-3 py-1 rounded-full font-baloo font-extrabold text-xs transition-all whitespace-nowrap cursor-pointer ${
                    selectedSemester === 0
                      ? 'bg-sky-500 text-white shadow-sm font-black'
                      : 'text-slate-600 hover:text-brand-dark hover:bg-white/60'
                  }`}
                >
                  Cả năm
                </button>
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playPop();
                    setSelectedSemester(1);
                    setSelectedUnitId('all');
                  }}
                  className={`px-3 py-1 rounded-full font-baloo font-extrabold text-xs transition-all whitespace-nowrap cursor-pointer ${
                    selectedSemester === 1
                      ? 'bg-sky-500 text-white shadow-sm font-black'
                      : 'text-slate-600 hover:text-brand-dark hover:bg-white/60'
                  }`}
                >
                  HK1
                </button>
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playPop();
                    setSelectedSemester(2);
                    setSelectedUnitId('all');
                  }}
                  className={`px-3 py-1 rounded-full font-baloo font-extrabold text-xs transition-all whitespace-nowrap cursor-pointer ${
                    selectedSemester === 2
                      ? 'bg-sky-500 text-white shadow-sm font-black'
                      : 'text-slate-600 hover:text-brand-dark hover:bg-white/60'
                  }`}
                >
                  HK2
                </button>
              </div>
            </div>
          </div>

          {/* HÀNG 3: BỘ LỌC TÌM KIẾM, UNIT, NGUỒN THẺ & TRẠNG THÁI */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
            <div className="flex flex-wrap items-center gap-2 flex-1 min-w-[260px]">
              {/* Search Bar */}
              <div className="relative flex-1 min-w-[180px] max-w-xs">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm từ tiếng Anh hoặc nghĩa..."
                  className="w-full h-9 pl-8 pr-7 rounded-full border border-slate-200 bg-white font-vietnam text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-2xs"
                />
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-black px-1"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Unit Dropdown */}
              <select
                id="unit-select"
                value={selectedUnitId}
                onChange={(e) => {
                  soundManager.playPop();
                  setSelectedUnitId(e.target.value);
                }}
                className="h-9 px-3 rounded-full border border-slate-200 bg-white text-slate-800 font-baloo font-bold text-xs focus:outline-none focus:ring-2 focus:ring-sky-400 cursor-pointer max-w-[200px] truncate shadow-2xs"
              >
                <option value="all">📚 Tất cả Unit ({availableUnits.length})</option>
                {availableUnits
                  .filter((u) => selectedSemester === 0 || u.semester === selectedSemester)
                  .map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.title}
                    </option>
                  ))}
              </select>

              {/* Category Dropdown */}
              <select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => {
                  soundManager.playPop();
                  setSelectedCategory(e.target.value);
                }}
                className="h-9 px-3 rounded-full border border-slate-200 bg-white text-slate-800 font-baloo font-bold text-xs focus:outline-none focus:ring-2 focus:ring-sky-400 cursor-pointer max-w-[150px] truncate shadow-2xs"
              >
                {VOCABULARY_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.icon} {cat.label}
                  </option>
                ))}
              </select>

              {/* Nguồn thẻ Lớp 2 (Pill style đồng bộ) */}
              {selectedGrade === 2 && (
                <div className="flex items-center gap-1 bg-amber-50 p-1 rounded-full border border-amber-200 shadow-2xs shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playPop();
                      setSourceFilter('all');
                      setSelectedUnitId('all');
                    }}
                    className={`px-3 py-1 rounded-full font-baloo font-bold text-xs whitespace-nowrap cursor-pointer transition-all ${
                      sourceFilter === 'all'
                        ? 'bg-amber-400 text-amber-950 shadow-xs font-black'
                        : 'text-amber-800 hover:bg-amber-100/60'
                    }`}
                  >
                    🌟 Tất cả ({gradeVocabCount})
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playPop();
                      setSourceFilter('flashcards_pdf');
                      setSelectedUnitId('all');
                    }}
                    className={`px-3 py-1 rounded-full font-baloo font-bold text-xs whitespace-nowrap cursor-pointer transition-all ${
                      sourceFilter === 'flashcards_pdf'
                        ? 'bg-amber-400 text-amber-950 shadow-xs font-black'
                        : 'text-amber-800 hover:bg-amber-100/60'
                    }`}
                    title="Xem 80 thẻ tranh Ngữ âm Phonics Lớp 2"
                  >
                    🎴 Thẻ Phonics ({flashcardsPdfCount})
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playPop();
                      setSourceFilter('sgk_units');
                      setSelectedUnitId('all');
                    }}
                    className={`px-3 py-1 rounded-full font-baloo font-bold text-xs whitespace-nowrap cursor-pointer transition-all ${
                      sourceFilter === 'sgk_units'
                        ? 'bg-amber-400 text-amber-950 shadow-xs font-black'
                        : 'text-amber-800 hover:bg-amber-100/60'
                    }`}
                  >
                    📚 SGK ({sgkUnitsCount})
                  </button>
                </div>
              )}
            </div>

            {/* Quick Status Chips & Count */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => {
                  soundManager.playPop();
                  setFilterMastery(filterMastery === 'mastered' ? 'all' : 'mastered');
                }}
                className={`flex items-center gap-1 h-9 px-3 rounded-full font-baloo font-bold text-xs cursor-pointer transition-all whitespace-nowrap ${
                  filterMastery === 'mastered'
                    ? 'bg-amber-400 text-amber-950 shadow-xs font-black'
                    : 'bg-white text-slate-600 border border-slate-200 shadow-2xs hover:bg-slate-50'
                }`}
              >
                <span>⭐ Đã thuộc</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundManager.playPop();
                  setFilterMastery(filterMastery === 'review' ? 'all' : 'review');
                }}
                className={`flex items-center gap-1 h-9 px-3 rounded-full font-baloo font-bold text-xs cursor-pointer transition-all whitespace-nowrap ${
                  filterMastery === 'review'
                    ? 'bg-rose-500 text-white shadow-xs font-black'
                    : 'bg-white text-slate-600 border border-slate-200 shadow-2xs hover:bg-slate-50'
                }`}
              >
                <span>🔖 Cần ôn</span>
              </button>

              <div className="h-9 px-3.5 rounded-full bg-sky-50 border border-sky-200 text-sky-900 font-baloo font-bold text-xs flex items-center gap-1 shadow-2xs whitespace-nowrap">
                <span>Tổng:</span>
                <strong className="font-black text-sky-950">{filteredVocab.length}</strong>
                <span>từ</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VIEW MODE 1: VOCABULARY GALLERY (FLASHCARD GRID) */}
        {/* ========================================================================= */}
        {studyMode === 'gallery' && (
          <div>
            {filteredVocab.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white/80 p-12 text-center">
                <div className="text-5xl" aria-hidden="true">🔍</div>
                <h3 className="font-baloo text-xl font-black text-slate-700 mt-3">Không tìm thấy từ vựng phù hợp</h3>
                <p className="font-vietnam text-sm font-semibold text-slate-500 mt-1">
                  Hãy thử xóa bộ lọc tìm kiếm hoặc chọn Unit khác nhé!
                </p>
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playPop();
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedUnitId('all');
                    setFilterMastery('all');
                  }}
                  className="mt-4 px-5 py-2.5 rounded-2xl bg-sky-500 text-white font-baloo font-bold text-sm shadow-pop-sm cursor-pointer"
                >
                  Xóa toàn bộ bộ lọc
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                {filteredVocab.map((item) => {
                  const isPlayingWord = playingId === item.id;
                  const isPlayingSentence = playingId === `${item.id}-sent`;
                  const isMastered = masteredIds.has(item.id);
                  const isReview = reviewIds.has(item.id);

                  return (
                    <div
                      key={item.id}
                      className={`group relative flex flex-col justify-between rounded-3xl border-2 bg-[#fffdfa] p-4 sm:p-5 shadow-washi transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                        isMastered
                          ? 'border-emerald-300 ring-2 ring-emerald-200/60 bg-emerald-50/20'
                          : isReview
                          ? 'border-rose-300 ring-2 ring-rose-200/60 bg-rose-50/20'
                          : 'border-sky-100 hover:border-sky-300'
                      }`}
                    >
                      {/* Top Row: Unit Reference & Bookmark Actions */}
                      <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-2.5">
                        <span className="font-baloo font-bold text-[11px] text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200/70 truncate max-w-[170px]" title={item.unitTitle}>
                          {item.unitTitle.split(':')[0]} • Lớp {item.grade}
                        </span>

                        <div className="flex items-center gap-1 shrink-0">
                          {/* Mastered Star Button */}
                          <button
                            type="button"
                            onClick={() => handleToggleMastered(item.id)}
                            title={isMastered ? 'Bỏ đánh dấu Đã thuộc' : 'Đánh dấu Đã thuộc từ này ⭐'}
                            className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
                              isMastered
                                ? 'bg-amber-100 border-amber-300 text-amber-600 shadow-2xs'
                                : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-amber-500 hover:bg-amber-50'
                            }`}
                            aria-label={`Đánh dấu đã thuộc từ ${item.word}`}
                          >
                            <Star size={14} className={isMastered ? 'fill-amber-500' : ''} />
                          </button>

                          {/* Review Bookmark Button */}
                          <button
                            type="button"
                            onClick={() => handleToggleReview(item.id)}
                            title={isReview ? 'Bỏ đánh dấu Cần ôn' : 'Cần ôn tập từ này 📌'}
                            className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
                              isReview
                                ? 'bg-rose-100 border-rose-300 text-rose-600 shadow-2xs'
                                : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-rose-500 hover:bg-rose-50'
                            }`}
                            aria-label={`Đánh dấu cần ôn từ ${item.word}`}
                          >
                            <Bookmark size={14} className={isReview ? 'fill-rose-500' : ''} />
                          </button>
                        </div>
                      </div>

                      {/* Flashcard Picture Illustration Frame */}
                      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-sky-50/70 to-amber-50/50 p-2.5 border border-slate-100 my-2 flex items-center justify-center min-h-[120px]">
                        {item.imageUrl ? (
                          <img
                            src={item.imageUrl}
                            alt={item.word}
                            className="max-h-24 sm:max-h-28 w-auto object-contain rounded-xl hover:scale-105 transition-transform duration-200"
                            loading="lazy"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center py-2">
                            <span className="text-5xl drop-shadow-xs" aria-hidden="true">{item.emoji}</span>
                          </div>
                        )}
                      </div>

                      {/* Main Word Header */}
                      <div className="mb-3">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <h3 className="font-baloo text-xl sm:text-2xl font-black text-sky-950 leading-tight">
                              {item.word}
                            </h3>
                            {item.phonetic && (
                              <span className="font-mono text-xs font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200/70 inline-block mt-0.5">
                                {item.phonetic}
                              </span>
                            )}
                          </div>

                          {/* Audio Button for Word */}
                          <button
                            type="button"
                            onClick={() => handlePlayVoice(item.word, item.id)}
                            title={`Nghe phát âm từ "${item.word}"`}
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-all cursor-pointer shadow-xs ${
                              isPlayingWord
                                ? 'bg-sky-500 text-white border-sky-600 animate-pulse scale-105'
                                : 'bg-sky-50 hover:bg-sky-100 text-sky-700 border-sky-200 hover:scale-105 active:scale-95'
                            }`}
                            aria-label={`Nghe phát âm ${item.word}`}
                          >
                            <Volume2 size={20} className={isPlayingWord ? 'animate-bounce' : ''} />
                          </button>
                        </div>

                        {/* Vietnamese Meaning */}
                        <div className="mt-2.5 p-2.5 rounded-2xl bg-amber-50/60 border border-amber-200/70 font-vietnam text-xs sm:text-sm font-semibold text-amber-950 leading-relaxed">
                          {item.meaning}
                        </div>
                      </div>

                      {/* Example Sentence in SGK Context */}
                      {item.exampleSentence && (
                        <div className="mt-2 pt-2.5 border-t border-slate-100">
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0 flex-1">
                              <p className="font-vietnam text-xs text-slate-700 font-semibold italic leading-normal">
                                “{item.exampleSentence}”
                              </p>
                              <span className="text-[11px] font-vietnam text-slate-500 block mt-1">
                                📖 {item.textbookRef}
                              </span>
                            </div>

                            <button
                              type="button"
                              onClick={() => handlePlayVoice(item.exampleSentence, `${item.id}-sent`)}
                              title="Nghe câu ví dụ"
                              className={`p-2 rounded-xl border shrink-0 transition-all cursor-pointer ${
                                isPlayingSentence
                                  ? 'bg-amber-500 text-white border-amber-600 shadow-sm animate-pulse'
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
                              }`}
                              aria-label={`Nghe câu ví dụ của từ ${item.word}`}
                            >
                              <Volume2 size={14} className={isPlayingSentence ? 'animate-bounce' : ''} />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* ========================================================================= */}
        {/* VIEW MODE 2: UNIFIED 2-COLUMN MASTER STUDY CARD (TẤT CẢ TRONG 1 THẺ LỚN) */}
        {/* ========================================================================= */}
        {studyMode === 'flip' && filteredVocab.length > 0 && (
          <div className="w-full">
            {(() => {
              const currentWord = filteredVocab[flipIndex] || filteredVocab[0];
              const isPlayingWord = playingId === currentWord.id;
              const isPlayingSentence = playingId === `${currentWord.id}-sent`;
              const isMastered = masteredIds.has(currentWord.id);
              const isReview = reviewIds.has(currentWord.id);

              return (
                <div className="w-full">
                  {/* =============================================================== */}
                  {/* 1 THẺ LỚN DUY NHẤT (ALL-IN-ONE MASTER FLASHCARD BOARD) */}
                  {/* =============================================================== */}
                  <div className="w-full rounded-3xl sm:rounded-4xl border border-sky-200/80 bg-white/95 backdrop-blur shadow-sm p-5 sm:p-7 md:p-8 flex flex-col justify-between select-none">
                    {/* Top Header of the Big Card */}
                    <div className="flex items-center justify-between gap-3 border-b border-slate-200/80 pb-4">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-baloo font-bold text-xs sm:text-sm text-sky-900 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200 shadow-2xs">
                          🎴 {currentWord.unitTitle.split(':')[0]} • Lớp {currentWord.grade}
                        </span>
                        <span className="hidden sm:inline-block font-vietnam font-semibold text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                          📖 {currentWord.textbookRef}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Mastered Star Button */}
                        <button
                          type="button"
                          onClick={() => handleToggleMastered(currentWord.id)}
                          title={isMastered ? 'Bỏ đánh dấu Đã thuộc' : 'Đánh dấu Đã thuộc từ này ⭐'}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-baloo font-bold transition-all cursor-pointer ${
                            isMastered
                              ? 'bg-amber-400 text-white border-amber-500 shadow-pop-sm'
                              : 'bg-white text-slate-500 border-slate-200 hover:text-amber-500 hover:bg-amber-50'
                          }`}
                          aria-label={`Đánh dấu đã thuộc từ ${currentWord.word}`}
                        >
                          <Star size={15} className={isMastered ? 'fill-white' : ''} />
                          <span className="hidden sm:inline">{isMastered ? 'Đã thuộc' : 'Thuộc'}</span>
                        </button>

                        {/* Review Bookmark Button */}
                        <button
                          type="button"
                          onClick={() => handleToggleReview(currentWord.id)}
                          title={isReview ? 'Bỏ đánh dấu Cần ôn' : 'Cần ôn tập từ này 📌'}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-baloo font-bold transition-all cursor-pointer ${
                            isReview
                              ? 'bg-rose-500 text-white border-rose-600 shadow-pop-sm'
                              : 'bg-white text-slate-500 border-slate-200 hover:text-rose-500 hover:bg-rose-50'
                          }`}
                          aria-label={`Đánh dấu cần ôn từ ${currentWord.word}`}
                        >
                          <Bookmark size={15} className={isReview ? 'fill-white' : ''} />
                          <span className="hidden sm:inline">{isReview ? 'Cần ôn' : 'Ôn tập'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Body: 2 Columns inside the Big Card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 items-stretch my-4 sm:my-6">
                      {/* ============================================================= */}
                      {/* CỘT 1 (TRÁI): TIẾNG ANH & TRANH MINH HỌA */}
                      {/* ============================================================= */}
                      <div className="rounded-3xl border-2 border-sky-100 bg-gradient-to-b from-[#f8fcff] to-[#f0f9ff] p-5 sm:p-6 flex flex-col items-center justify-between text-center">
                        <div className="w-full flex justify-between items-center text-xs font-baloo font-bold text-sky-800 pb-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-white/90 border border-sky-200 shadow-2xs">
                            Mặt Trước • Tiếng Anh
                          </span>
                        </div>

                        {/* Image Frame */}
                        <div className="my-auto py-2">
                          {currentWord.imageUrl ? (
                            <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden shadow-pop-md border-3 border-white bg-white p-2 flex items-center justify-center">
                              <img
                                src={currentWord.imageUrl}
                                alt={currentWord.word}
                                className="max-h-full max-w-full object-contain rounded-2xl hover:scale-105 transition-transform duration-200"
                                loading="eager"
                              />
                            </div>
                          ) : (
                            <div className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-amber-50 border-2 border-amber-200 flex items-center justify-center shadow-xs">
                              <span className="text-6xl sm:text-7xl block animate-bounce" aria-hidden="true">
                                {currentWord.emoji}
                              </span>
                            </div>
                          )}

                          {/* Word & IPA */}
                          <div className="mt-3">
                            <h2 className="font-baloo text-4xl sm:text-5xl font-black text-sky-950 tracking-wide">
                              {currentWord.word}
                            </h2>
                            {currentWord.phonetic && (
                              <span className="font-mono text-base sm:text-lg font-bold text-sky-700 bg-white px-4 py-1 rounded-xl border border-sky-200 shadow-2xs inline-block mt-2">
                                {currentWord.phonetic}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Audio Button */}
                        <div className="w-full pt-2">
                          <button
                            type="button"
                            onClick={() => handlePlayVoice(currentWord.word, currentWord.id)}
                            className="inline-flex items-center justify-center gap-2 w-full max-w-xs px-6 py-3 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-baloo font-bold text-sm sm:text-base shadow-pop-md cursor-pointer transition-all active:translate-y-1"
                            title={`Nghe phát âm từ "${currentWord.word}"`}
                          >
                            <Volume2 size={20} className={isPlayingWord ? 'animate-bounce' : ''} />
                            <span>Nghe Phát Âm Bản Xứ</span>
                          </button>
                        </div>
                      </div>

                      {/* ============================================================= */}
                      {/* CỘT 2 (PHẢI): NGHĨA TIẾNG VIỆT & CÂU VÍ DỤ SGK */}
                      {/* ============================================================= */}
                      <div className="rounded-3xl border-2 border-amber-100 bg-gradient-to-b from-[#fffdf5] to-[#fff8e8] p-5 sm:p-6 flex flex-col justify-between text-left">
                        <div className="w-full flex justify-between items-center text-xs font-baloo font-bold text-amber-900 pb-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-white/90 border border-amber-200 shadow-2xs">
                            Mặt Sau • Nghĩa & Ngữ Cảnh
                          </span>
                        </div>

                        <div className="space-y-4 my-auto py-2">
                          {/* Nghĩa Tiếng Việt */}
                          <div className="rounded-2xl bg-white p-4 sm:p-5 border-2 border-amber-200/90 shadow-xs">
                            <span className="font-baloo font-bold text-xs text-amber-700 uppercase tracking-wider block mb-1">
                              🇻🇳 Nghĩa Tiếng Việt:
                            </span>
                            <p className="font-vietnam text-xl sm:text-2xl font-black text-slate-800 leading-snug">
                              {currentWord.meaning}
                            </p>
                          </div>

                          {/* Câu Ví Dụ Trong SGK */}
                          {currentWord.exampleSentence && (
                            <div className="rounded-2xl bg-white p-4 sm:p-5 border-2 border-amber-200/90 shadow-xs space-y-3">
                              <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
                                <span className="font-baloo font-extrabold text-xs sm:text-sm text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                                  <span>💬 Câu Mẫu Trong SGK</span>
                                </span>

                                <button
                                  type="button"
                                  onClick={() => handlePlayVoice(currentWord.exampleSentence, `${currentWord.id}-sent`)}
                                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-baloo font-bold text-xs cursor-pointer transition-all shadow-2xs ${
                                    isPlayingSentence
                                      ? 'bg-amber-500 text-white border-amber-600 shadow-sm animate-pulse'
                                      : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-200 hover:scale-105 active:scale-95'
                                  }`}
                                  title="Nghe đọc câu mẫu"
                                  aria-label={`Nghe câu ví dụ của từ ${currentWord.word}`}
                                >
                                  <Volume2 size={15} className={isPlayingSentence ? 'animate-bounce' : ''} />
                                  <span>Nghe Câu</span>
                                </button>
                              </div>

                              {/* Câu tiếng Anh */}
                              <p className="font-vietnam text-base sm:text-lg font-bold text-slate-800 italic leading-relaxed">
                                “{currentWord.exampleSentence}”
                              </p>

                              {/* Phiên âm IPA của câu */}
                              {currentWord.exampleSentencePhonetic && (
                                <div className="pt-0.5">
                                  <span className="font-mono text-xs sm:text-sm font-semibold text-sky-800 bg-sky-50 px-3 py-1.5 rounded-xl border border-sky-200/80 inline-block leading-normal">
                                    🗣️ IPA: {currentWord.exampleSentencePhonetic}
                                  </span>
                                </div>
                              )}

                              {/* Bản dịch Tiếng Việt đúng ngữ cảnh */}
                              {currentWord.exampleSentenceTranslation && (
                                <div className="rounded-xl bg-emerald-50/80 p-3 border border-emerald-200/80 font-vietnam text-xs sm:text-sm font-semibold text-emerald-950 leading-relaxed flex items-start gap-2">
                                  <span className="text-emerald-700 font-bold shrink-0">✨ Dịch nghĩa:</span>
                                  <span>“{currentWord.exampleSentenceTranslation}”</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Pedagogic Note */}
                        <div className="pt-2 text-center">
                          <span className="text-xs font-vietnam font-semibold text-amber-900/70">
                            💡 Học cả câu giúp bé ghi nhớ từ vựng và tự tin giao tiếp
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* =============================================================== */}
                    {/* BOTTOM NAVIGATION (GẮN LIỀN TRONG THẺ LỚN DUY NHẤT) */}
                    {/* =============================================================== */}
                    <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                      {/* Nút sang trang trái (< Thẻ Trước) */}
                      <button
                        type="button"
                        onClick={() => {
                          soundManager.playPop();
                          setFlipIndex((prev) => (prev > 0 ? prev - 1 : filteredVocab.length - 1));
                        }}
                        className="flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-slate-100 hover:bg-sky-500 hover:text-white text-slate-700 font-baloo font-extrabold text-xs sm:text-sm cursor-pointer transition-all shadow-2xs hover:shadow-pop-sm active:translate-y-0.5"
                      >
                        <ArrowLeft size={16} />
                        <span>Thẻ Trước</span>
                      </button>

                      {/* Center: Số thứ tự thẻ */}
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="font-baloo font-extrabold text-xs sm:text-sm text-slate-700 bg-slate-100 px-4 py-2 rounded-full border border-slate-200 shadow-2xs">
                          Thẻ <strong className="text-sky-950 font-black">{flipIndex + 1}</strong> / {filteredVocab.length}
                        </span>
                      </div>

                      {/* Nút sang trang phải (Thẻ Tiếp >) */}
                      <button
                        type="button"
                        onClick={() => {
                          soundManager.playPop();
                          setFlipIndex((prev) => (prev < filteredVocab.length - 1 ? prev + 1 : 0));
                        }}
                        className="flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-slate-100 hover:bg-sky-500 hover:text-white text-slate-700 font-baloo font-extrabold text-xs sm:text-sm cursor-pointer transition-all shadow-2xs hover:shadow-pop-sm active:translate-y-0.5"
                      >
                        <span>Thẻ Tiếp</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 3: VOCABULARY MEMORY GAMES ARCADE */}
        {/* ========================================================================= */}
        {studyMode === 'games' && (
          <div className="space-y-6">
            {/* Game Selector Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100/90 rounded-2xl max-w-2xl mx-auto border border-slate-200 shadow-inner">
              <button
                type="button"
                onClick={() => {
                  soundManager.playPop();
                  setActiveGame('missing_letters');
                }}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-baloo font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeGame === 'missing_letters'
                    ? 'bg-sky-500 text-white shadow-pop-sm font-black'
                    : 'text-slate-600 hover:text-sky-900 hover:bg-white/60'
                }`}
              >
                <span>🔤 Điền Chữ Khuyết</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundManager.playPop();
                  setActiveGame('disappearing_word');
                }}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-baloo font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeGame === 'disappearing_word'
                    ? 'bg-amber-500 text-white shadow-pop-sm font-black'
                    : 'text-slate-600 hover:text-amber-900 hover:bg-white/60'
                }`}
              >
                <span>🕵️ Từ Nào Biến Mất?</span>
                <span className="px-1.5 py-0.2 rounded-full bg-rose-500 text-white text-[10px] font-black animate-pulse">
                  Mới 🔥
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundManager.playPop();
                  setActiveGame('memory_match');
                }}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-baloo font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeGame === 'memory_match'
                    ? 'bg-emerald-500 text-white shadow-pop-sm font-black'
                    : 'text-slate-600 hover:text-emerald-900 hover:bg-white/60'
                }`}
              >
                <span>🃏 Lật Thẻ Ghép Đôi</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundManager.playPop();
                  setActiveGame('quiz');
                  generateQuizQuestions();
                }}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-baloo font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeGame === 'quiz'
                    ? 'bg-purple-500 text-white shadow-pop-sm font-black'
                    : 'text-slate-600 hover:text-purple-900 hover:bg-white/60'
                }`}
              >
                <span>⚡ Đố Vui Nhanh</span>
              </button>
            </div>

            {/* Active Game 1: Missing Letters */}
            {activeGame === 'missing_letters' && (
              <MissingLettersGame
                words={filteredVocab.length >= 3 ? filteredVocab : allVocab.filter((v) => v.grade === selectedGrade)}
                onFinish={(score, stars) => onAwardStars?.(stars, score)}
                onExit={() => setStudyMode('gallery')}
              />
            )}

            {/* Active Game 2: Disappearing Word */}
            {activeGame === 'disappearing_word' && (
              <DisappearingWordGame
                words={filteredVocab.length >= 3 ? filteredVocab : allVocab.filter((v) => v.grade === selectedGrade)}
                onFinish={(score, stars) => onAwardStars?.(stars, score)}
                onExit={() => setStudyMode('gallery')}
              />
            )}

            {/* Active Game 3: Memory Match */}
            {activeGame === 'memory_match' && (
              <WordMemoryMatchGame
                words={filteredVocab.length >= 2 ? filteredVocab : allVocab.filter((v) => v.grade === selectedGrade)}
                onFinish={(score, stars) => onAwardStars?.(stars, score)}
                onExit={() => setStudyMode('gallery')}
              />
            )}

            {/* Active Game 4: Mini Quiz Challenge */}
            {activeGame === 'quiz' && (
              <div className="mx-auto max-w-2xl">
            {quizCompleted ? (
              /* Quiz Victory Card */
              <div className="rounded-4xl border-3 border-emerald-300 bg-white p-8 sm:p-12 text-center shadow-washi space-y-6">
                <div className="text-6xl sm:text-7xl animate-bounce" aria-hidden="true">🎉</div>
                <h2 className="font-baloo text-3xl sm:text-4xl font-black text-emerald-900">
                  Chúc Mừng Bé Đã Hoàn Thành Thử Thách!
                </h2>
                <p className="font-vietnam text-base font-semibold text-slate-600">
                  Bé đã xuất sắc trả lời các câu đố từ vựng Global Success Lớp {selectedGrade}!
                </p>

                <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-3xl bg-amber-50 border-2 border-amber-300 text-amber-950 font-baloo font-black text-2xl shadow-xs">
                  <Star size={28} className="text-amber-500 fill-amber-500" />
                  <span>Điểm Đạt Được: {quizScore}/{quizQuestions.length * 10} Điểm</span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <button
                    type="button"
                    onClick={generateQuizQuestions}
                    className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-baloo font-black text-base shadow-pop-md cursor-pointer transition-all"
                  >
                    🔄 Chơi Lại Đề Khác
                  </button>
                  <button
                    type="button"
                    onClick={() => setStudyMode('gallery')}
                    className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-baloo font-bold text-base cursor-pointer transition-all"
                  >
                    📖 Về Sổ Từ Vựng
                  </button>
                </div>
              </div>
            ) : quizQuestions.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center">
                <p className="font-baloo font-bold text-base text-slate-600">Đang chuẩn bị câu hỏi đố vui...</p>
              </div>
            ) : (
              /* Ongoing Quiz Question */
              (() => {
                const q = quizQuestions[currentQuizIdx];
                if (!q) return null;

                return (
                  <div className="rounded-4xl border-2 border-sky-200 bg-white p-6 sm:p-8 shadow-washi space-y-6">
                    {/* Header Progress */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="font-baloo font-bold text-xs text-sky-800 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                        Câu {currentQuizIdx + 1} / {quizQuestions.length}
                      </span>

                      <div className="flex items-center gap-1.5 font-baloo font-black text-amber-600 text-sm">
                        <Star size={16} className="fill-amber-500 text-amber-500" />
                        <span>{quizScore} Điểm</span>
                      </div>
                    </div>

                    {/* Question Prompt */}
                    <div className="text-center space-y-2">
                      <h3 className="font-baloo text-xl sm:text-2xl font-black text-sky-950 leading-snug">
                        {q.prompt}
                      </h3>
                      {q.subprompt && (
                        <p className="font-vietnam text-xs font-semibold text-slate-500">{q.subprompt}</p>
                      )}

                      {/* If audio question, show big speaker button */}
                      {q.type === 'audio_to_word' && q.audioWord && (
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => handlePlayVoice(q.audioWord!, `quiz-${q.id}`)}
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-baloo font-bold text-sm shadow-pop-sm cursor-pointer transition-all active:translate-y-1"
                          >
                            <Volume2 size={20} className={playingId === `quiz-${q.id}` ? 'animate-bounce' : ''} />
                            <span>Bấm Để Nghe Lại Âm Thanh 🔊</span>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Option Choices (For multiple-choice questions) */}
                    {q.type !== 'spelling' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {q.options.map((opt) => {
                          const isSelected = selectedQuizOption === opt.id;
                          let btnClass = 'border-slate-200 bg-slate-50 text-slate-800 hover:border-sky-300 hover:bg-sky-50/50';

                          if (isAnswerChecked) {
                            if (opt.isCorrect) {
                              btnClass = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-300 font-black';
                            } else if (isSelected && !opt.isCorrect) {
                              btnClass = 'border-rose-400 bg-rose-50 text-rose-950 ring-2 ring-rose-300';
                            }
                          } else if (isSelected) {
                            btnClass = 'border-sky-500 bg-sky-50 text-sky-950 ring-2 ring-sky-300 font-black';
                          }

                          return (
                            <button
                              key={opt.id}
                              type="button"
                              disabled={isAnswerChecked}
                              onClick={() => {
                                soundManager.playPop();
                                setSelectedQuizOption(opt.id);
                              }}
                              className={`min-h-14 p-4 rounded-2xl border-2 font-baloo text-base font-bold transition-all text-left flex items-center justify-between gap-2 cursor-pointer ${btnClass}`}
                            >
                              <span>{opt.label}</span>
                              {isAnswerChecked && opt.isCorrect && (
                                <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                              )}
                              {isAnswerChecked && isSelected && !opt.isCorrect && (
                                <XCircle size={20} className="text-rose-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      /* Spelling Tile Scramble Interface */
                      <div className="space-y-4 pt-2">
                        {/* Selected Tiles Slot */}
                        <div className="flex flex-wrap items-center justify-center gap-2 min-h-16 p-3 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-300">
                          {spellingTiles.length === 0 ? (
                            <span className="text-xs font-baloo text-slate-400">Chạm các chữ cái phía dưới để ghép từ</span>
                          ) : (
                            spellingTiles.map((char, cIdx) => (
                              <button
                                key={cIdx}
                                type="button"
                                disabled={isAnswerChecked}
                                onClick={() => {
                                  soundManager.playPop();
                                  setSpellingTiles((prev) => prev.filter((_, idx) => idx !== cIdx));
                                }}
                                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 text-white font-baloo font-black text-xl shadow-pop-sm cursor-pointer hover:bg-rose-500 transition-colors"
                              >
                                {char.toUpperCase()}
                              </button>
                            ))
                          )}
                        </div>

                        {/* Available Scrambled Letters */}
                        {q.scrambledLetters && (
                          <div className="flex flex-wrap items-center justify-center gap-2">
                            {q.scrambledLetters.map((char, lIdx) => {
                              // Check how many of this char are already used
                              const countInWord = q.scrambledLetters!.filter((c) => c === char).length;
                              const countUsed = spellingTiles.filter((c) => c === char).length;
                              const isUsedUp = countUsed >= countInWord;

                              return (
                                <button
                                  key={lIdx}
                                  type="button"
                                  disabled={isAnswerChecked || isUsedUp}
                                  onClick={() => {
                                    soundManager.playPop();
                                    setSpellingTiles((prev) => [...prev, char]);
                                  }}
                                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border-2 font-baloo font-black text-xl transition-all cursor-pointer ${
                                    isUsedUp
                                      ? 'opacity-30 bg-slate-200 border-slate-300 text-slate-400 pointer-events-none'
                                      : 'bg-white border-sky-300 text-sky-900 shadow-pop-sm hover:scale-105 active:scale-95'
                                  }`}
                                >
                                  {char.toUpperCase()}
                                </button>
                              );
                            })}

                            {spellingTiles.length > 0 && !isAnswerChecked && (
                              <button
                                type="button"
                                onClick={() => {
                                  soundManager.playPop();
                                  setSpellingTiles([]);
                                }}
                                className="flex h-12 items-center gap-1.5 px-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-baloo font-bold text-xs cursor-pointer"
                              >
                                <Undo2 size={15} />
                                <span>Xóa Hết</span>
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Check / Next Action Footer */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      {!isAnswerChecked ? (
                        <button
                          type="button"
                          disabled={q.type === 'spelling' ? spellingTiles.length === 0 : !selectedQuizOption}
                          onClick={handleCheckQuizAnswer}
                          className={`w-full py-3.5 rounded-2xl font-baloo font-black text-base transition-all flex items-center justify-center gap-2 cursor-pointer ${
                            (q.type === 'spelling' ? spellingTiles.length > 0 : selectedQuizOption)
                              ? 'bg-sky-500 hover:bg-sky-600 text-white shadow-pop-md active:translate-y-1'
                              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                          }`}
                        >
                          <Check size={18} />
                          <span>Kiểm Tra Đáp Án</span>
                        </button>
                      ) : (
                        <div className="w-full space-y-3">
                          <div
                            className={`p-3 rounded-2xl text-center font-baloo font-bold text-sm ${
                              isAnswerCorrect ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-900'
                            }`}
                          >
                            {isAnswerCorrect
                              ? '🎉 Tuyệt vời! Bé đã trả lời rất chính xác!'
                              : `Chưa chính xác rồi! Đáp án đúng là: ${q.correctAnswer}`}
                          </div>

                          <button
                            type="button"
                            onClick={handleNextQuizQuestion}
                            className="w-full py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-baloo font-black text-base shadow-pop-md flex items-center justify-center gap-2 cursor-pointer active:translate-y-1"
                          >
                            <span>{currentQuizIdx < quizQuestions.length - 1 ? 'Câu Tiếp Theo' : 'Xem Kết Quả Thử Thách'}</span>
                            <ArrowRight size={18} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })()
            )}
              </div>
            )}
          </div>
        )}
      </div>
  );
};
