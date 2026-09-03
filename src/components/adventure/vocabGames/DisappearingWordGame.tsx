import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Star, CheckCircle2, RotateCcw, ArrowRight, Eye, HelpCircle, Volume2 } from 'lucide-react';
import { GlobalSuccessVocabularyItem } from '../../../data/curriculum/english/vocabularyData';
import { soundManager } from '../../../utils/audio';

interface DisappearingWordGameProps {
  words: GlobalSuccessVocabularyItem[];
  onFinish?: (score: number, stars: number) => void;
  onExit?: () => void;
}

type GamePhase = 'preview' | 'vanish' | 'guess' | 'result';

interface RoundData {
  displayedWords: GlobalSuccessVocabularyItem[];
  vanishedIndex: number;
  targetWord: GlobalSuccessVocabularyItem;
  options: GlobalSuccessVocabularyItem[];
}

export const DisappearingWordGame: React.FC<DisappearingWordGameProps> = ({
  words,
  onFinish,
  onExit,
}) => {
  const [roundIdx, setRoundIdx] = useState(0);
  const [phase, setPhase] = useState<GamePhase>('preview');
  const [countdown, setCountdown] = useState(4);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Total rounds: 6 rounds or limited by word count
  const totalRounds = Math.min(8, Math.max(3, words.length));

  // Generate round data
  const currentRound: RoundData | null = useMemo(() => {
    if (words.length < 3) return null;

    // Pick 4 words for this round (or 3 if word list is 3)
    const slotCount = Math.min(4, words.length);
    const shuffledPool = [...words].sort(() => 0.5 - Math.random());
    const displayedWords = shuffledPool.slice(0, slotCount);

    // Pick 1 vanished word
    const vanishedIndex = Math.floor(Math.random() * slotCount);
    const targetWord = displayedWords[vanishedIndex];

    // Distractors from other words or from displayedWords
    const otherWords = words.filter((w) => w.id !== targetWord.id);
    const distractors = [...otherWords].sort(() => 0.5 - Math.random()).slice(0, 3);
    const options = [targetWord, ...distractors].sort(() => 0.5 - Math.random());

    return {
      displayedWords,
      vanishedIndex,
      targetWord,
      options,
    };
  }, [words, roundIdx]);

  // Handle countdown during preview phase
  useEffect(() => {
    if (phase === 'preview') {
      setCountdown(4);
      setSelectedOptionId(null);

      timerRef.current = window.setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            // Transition to vanish phase
            setPhase('vanish');
            soundManager.playPop();
            setTimeout(() => {
              setPhase('guess');
            }, 600);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [phase, roundIdx]);

  const handlePlayAudio = (word: string) => {
    soundManager.speakBrowserSpeech(word, 'en-US', undefined, 1, 0.9);
  };

  const handleSelectOption = (option: GlobalSuccessVocabularyItem) => {
    if (phase !== 'guess' || !currentRound || selectedOptionId) return;

    setSelectedOptionId(option.id);
    setPhase('result');

    const isCorrect = option.id === currentRound.targetWord.id;
    if (isCorrect) {
      soundManager.playCorrect();
      setScore((prev) => prev + 15);
      handlePlayAudio(currentRound.targetWord.word);
    } else {
      soundManager.playIncorrect();
    }
  };

  const handleNextRound = () => {
    soundManager.playPop();
    if (roundIdx < totalRounds - 1) {
      setRoundIdx((prev) => prev + 1);
      setPhase('preview');
    } else {
      setIsCompleted(true);
      soundManager.playVictory();
      if (onFinish) {
        const stars = Math.max(1, Math.round((score / (totalRounds * 15)) * 3));
        onFinish(score, stars);
      }
    }
  };

  const handleRestart = () => {
    soundManager.playPop();
    setRoundIdx(0);
    setPhase('preview');
    setScore(0);
    setSelectedOptionId(null);
    setIsCompleted(false);
  };

  if (!currentRound) return null;

  return (
    <div className="mx-auto max-w-3xl">
      {isCompleted ? (
        /* Victory Screen */
        <div className="rounded-4xl border-3 border-amber-300 bg-white p-8 sm:p-12 text-center shadow-washi space-y-6">
          <div className="text-6xl sm:text-7xl animate-bounce" aria-hidden="true">🕵️‍♂️</div>
          <h2 className="font-baloo text-3xl sm:text-4xl font-black text-amber-950">
            Thám Tử Trí Nhớ Siêu Đẳng!
          </h2>
          <p className="font-vietnam text-base font-semibold text-slate-600">
            Bé có đôi mắt tinh tường và trí nhớ từ vựng cực kỳ xuất sắc!
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-3xl bg-amber-50 border-2 border-amber-300 text-amber-950 font-baloo font-black text-2xl shadow-xs">
            <Star size={28} className="text-amber-500 fill-amber-500" />
            <span>Điểm Thám Tử: {score}/{totalRounds * 15} Điểm</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={handleRestart}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-baloo font-black text-base shadow-pop-md cursor-pointer transition-all"
            >
              <RotateCcw size={18} />
              <span>Chơi Lại Vòng Khác</span>
            </button>
            {onExit && (
              <button
                type="button"
                onClick={onExit}
                className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-baloo font-bold text-base cursor-pointer transition-all"
              >
                Về Sổ Từ Vựng
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Game Workspace */
        <div className="rounded-4xl border-2 border-amber-200 bg-white p-6 sm:p-8 shadow-washi space-y-6">
          {/* Header Progress & Status */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="font-baloo font-bold text-xs text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Vòng {roundIdx + 1} / {totalRounds}
            </span>

            {/* Phase Instructions */}
            <div className="flex items-center gap-2">
              {phase === 'preview' && (
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-900 font-baloo font-bold text-xs animate-pulse">
                  <Eye size={15} />
                  <span>Bé hãy ghi nhớ các từ nhé: <strong>{countdown}s</strong></span>
                </span>
              )}
              {phase === 'vanish' && (
                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-900 font-baloo font-bold text-xs animate-bounce">
                  💨 Ùm ba la... Biến mất!
                </span>
              )}
              {(phase === 'guess' || phase === 'result') && (
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 font-baloo font-bold text-xs">
                  <HelpCircle size={15} />
                  <span>Từ nào vừa biến mất?</span>
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 font-baloo font-black text-amber-600 text-sm">
              <Star size={16} className="fill-amber-500 text-amber-500" />
              <span>{score} Điểm</span>
            </div>
          </div>

          {/* Cards Showcase Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 py-2">
            {currentRound.displayedWords.map((item, idx) => {
              const isVanished = (phase === 'guess' || phase === 'result') && idx === currentRound.vanishedIndex;
              const isVanishAnimating = phase === 'vanish' && idx === currentRound.vanishedIndex;

              if (isVanished) {
                return (
                  <div
                    key={idx}
                    className={`flex flex-col items-center justify-center p-4 rounded-3xl border-3 border-dashed transition-all min-h-[160px] text-center ${
                      phase === 'result'
                        ? 'bg-amber-100 border-amber-400 animate-bounce-subtle'
                        : 'bg-amber-50/80 border-amber-400 text-amber-900 animate-pulse'
                    }`}
                  >
                    {phase === 'result' ? (
                      <>
                        {item.imageUrl ? (
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-white p-1 flex items-center justify-center mb-1 shadow-2xs border border-amber-200">
                            <img src={item.imageUrl} alt={item.word} className="max-h-full max-w-full object-contain" />
                          </div>
                        ) : (
                          <span className="text-4xl sm:text-5xl">{item.emoji}</span>
                        )}
                        <h4 className="font-baloo text-lg sm:text-xl font-black text-amber-950 mt-1">
                          {item.word}
                        </h4>
                        <span className="font-vietnam text-xs font-bold text-amber-800">
                          {item.meaning}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-4xl sm:text-5xl" aria-hidden="true">❓</span>
                        <span className="font-baloo font-black text-sm text-amber-800 mt-2">
                          Đã Biến Mất!
                        </span>
                        <span className="font-vietnam text-[11px] font-semibold text-slate-500">
                          Vị trí số {idx + 1}
                        </span>
                      </>
                    )}
                  </div>
                );
              }

              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center justify-center p-4 rounded-3xl border-2 transition-all min-h-[160px] text-center ${
                    isVanishAnimating
                      ? 'scale-90 opacity-40 blur-xs bg-purple-50 border-purple-300'
                      : 'bg-white border-slate-200 shadow-pop-sm hover:scale-102'
                  }`}
                >
                  {item.imageUrl ? (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-white p-1 flex items-center justify-center mb-1 border border-slate-100 shadow-2xs">
                      <img src={item.imageUrl} alt={item.word} className="max-h-full max-w-full object-contain" />
                    </div>
                  ) : (
                    <span className="text-4xl sm:text-5xl" aria-hidden="true">{item.emoji}</span>
                  )}
                  <h4 className="font-baloo text-lg sm:text-xl font-black text-brand-dark mt-1">
                    {item.word}
                  </h4>
                  <span className="font-vietnam text-xs font-bold text-slate-600">
                    {item.meaning}
                  </span>
                  {phase === 'preview' && (
                    <button
                      type="button"
                      onClick={() => handlePlayAudio(item.word)}
                      className="mt-2 p-1.5 rounded-full bg-slate-100 hover:bg-sky-100 text-slate-700 hover:text-sky-800 transition-colors cursor-pointer"
                      title="Nghe phát âm"
                    >
                      <Volume2 size={14} />
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Selection Area (During Guess & Result Phase) */}
          {(phase === 'guess' || phase === 'result') && (
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="text-center font-baloo font-bold text-sm text-slate-700">
                🕵️ Bé hãy chọn từ vựng vừa bị biến mất:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentRound.options.map((opt) => {
                  const isSelected = selectedOptionId === opt.id;
                  const isCorrect = opt.id === currentRound.targetWord.id;

                  let buttonStyle = 'bg-white border-slate-200 hover:border-amber-300 hover:bg-amber-50/50 text-slate-800 shadow-pop-sm';
                  if (phase === 'result') {
                    if (isCorrect) {
                      buttonStyle = 'bg-emerald-500 border-emerald-600 text-white shadow-pop-md font-black';
                    } else if (isSelected) {
                      buttonStyle = 'bg-rose-500 border-rose-600 text-white font-black';
                    } else {
                      buttonStyle = 'opacity-40 bg-slate-100 border-slate-200 text-slate-400';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      disabled={phase === 'result'}
                      onClick={() => handleSelectOption(opt)}
                      className={`flex items-center gap-3 p-3.5 rounded-2xl border-2 transition-all cursor-pointer text-left ${buttonStyle}`}
                    >
                      {opt.imageUrl ? (
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-0.5 shrink-0 flex items-center justify-center border border-slate-100">
                          <img src={opt.imageUrl} alt={opt.word} className="max-h-full max-w-full object-contain" />
                        </div>
                      ) : (
                        <span className="text-3xl shrink-0" aria-hidden="true">{opt.emoji}</span>
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="font-baloo text-base sm:text-lg font-black leading-tight">
                          {opt.word}
                        </div>
                        <div className="font-vietnam text-xs font-semibold opacity-90 truncate">
                          {opt.meaning}
                        </div>
                      </div>
                      {phase === 'result' && isCorrect && (
                        <CheckCircle2 size={20} className="shrink-0 text-white" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Next Round Button in Result Phase */}
              {phase === 'result' && (
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={handleNextRound}
                    className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-baloo font-black text-base shadow-pop-md flex items-center justify-center gap-2 cursor-pointer active:translate-y-1 transition-all"
                  >
                    <span>{roundIdx < totalRounds - 1 ? 'Vòng Tiếp Theo' : 'Xem Kết Quả Thử Thách'}</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Instruction helper during preview */}
          {phase === 'preview' && (
            <div className="p-3.5 rounded-2xl bg-sky-50 text-sky-900 border border-sky-200 text-center font-baloo font-bold text-xs sm:text-sm">
              💡 Chú ý ghi nhớ 4 từ này trong 4 giây. Sau đó PiPi sẽ giấu đi 1 từ bí mật!
            </div>
          )}
        </div>
      )}
    </div>
  );
};
