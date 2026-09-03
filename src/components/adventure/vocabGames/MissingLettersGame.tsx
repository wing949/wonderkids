import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Volume2, Star, CheckCircle2, RotateCcw, ArrowRight, Undo2 } from 'lucide-react';
import { GlobalSuccessVocabularyItem } from '../../../data/curriculum/english/vocabularyData';
import { soundManager } from '../../../utils/audio';

interface MissingLettersGameProps {
  words: GlobalSuccessVocabularyItem[];
  onFinish?: (score: number, stars: number) => void;
  onExit?: () => void;
}

interface QuestionState {
  item: GlobalSuccessVocabularyItem;
  letters: string[];
  missingIndices: number[];
  choices: string[];
}

export const MissingLettersGame: React.FC<MissingLettersGameProps> = ({
  words,
  onFinish,
  onExit,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userInputs, setUserInputs] = useState<string[]>([]);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isPlayingWord, setIsPlayingWord] = useState(false);

  // Pool of 10 shuffled words from the provided list
  const gamePool = useMemo(() => {
    const valid = words.filter((w) => w.word.trim().length >= 2);
    const pool = valid.length >= 4 ? valid : words;
    return [...pool].sort(() => 0.5 - Math.random()).slice(0, 10);
  }, [words]);

  // Generate question state for each word in pool
  const generateQuestionState = useCallback((item: GlobalSuccessVocabularyItem): QuestionState => {
    const rawWord = item.word.toLowerCase();
    const letters = rawWord.split('');

    // Determine how many letters to hide
    const hideCount = letters.length <= 4 ? 1 : 2;
    const eligibleIndices = letters
      .map((ch, idx) => ({ ch, idx }))
      .filter((x) => /[a-z]/i.test(x.ch))
      .map((x) => x.idx);

    // Shuffle eligible indices and take hideCount
    const shuffledIndices = [...eligibleIndices].sort(() => 0.5 - Math.random());
    const missingIndices = shuffledIndices.slice(0, hideCount).sort((a, b) => a - b);

    // Required correct letters
    const correctLetters = missingIndices.map((idx) => letters[idx]);

    // Distractor alphabet letters
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').filter((c) => !correctLetters.includes(c));
    const distractors = [...alphabet].sort(() => 0.5 - Math.random()).slice(0, 6 - correctLetters.length);

    // Combine and shuffle choices
    const choices = [...correctLetters, ...distractors].sort(() => 0.5 - Math.random());

    return {
      item,
      letters,
      missingIndices,
      choices,
    };
  }, []);

  const currentQ = useMemo(() => {
    const item = gamePool[currentIdx];
    if (!item) return null;
    return generateQuestionState(item);
  }, [gamePool, currentIdx, generateQuestionState]);

  // Reset inputs when switching question
  useEffect(() => {
    setUserInputs([]);
    setIsAnswerChecked(false);
    setIsCorrect(false);
  }, [currentIdx]);

  const handlePlayAudio = (word: string) => {
    soundManager.stopSpeaking();
    setIsPlayingWord(true);
    soundManager.speakBrowserSpeech(word, 'en-US', () => {
      setIsPlayingWord(false);
    }, 1, 0.9);
  };

  const handleLetterTap = (letter: string) => {
    if (!currentQ || isAnswerChecked) return;
    if (userInputs.length < currentQ.missingIndices.length) {
      soundManager.playPop();
      setUserInputs((prev) => [...prev, letter]);
    }
  };

  const handleUndoLetter = () => {
    soundManager.playPop();
    setUserInputs((prev) => prev.slice(0, -1));
  };

  const handleCheckAnswer = () => {
    if (!currentQ || userInputs.length < currentQ.missingIndices.length) return;

    // Check if the filled letters match the missing indices
    const expected = currentQ.missingIndices.map((idx) => currentQ.letters[idx]);
    const correct = expected.every((val, i) => val === userInputs[i]);

    setIsCorrect(correct);
    setIsAnswerChecked(true);

    if (correct) {
      soundManager.playCorrect();
      setScore((prev) => prev + 10);
      handlePlayAudio(currentQ.item.word);
    } else {
      soundManager.playIncorrect();
    }
  };

  const handleNext = () => {
    soundManager.playPop();
    if (currentIdx < gamePool.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      soundManager.playVictory();
      if (onFinish) {
        const stars = Math.max(1, Math.round((score / (gamePool.length * 10)) * 3));
        onFinish(score, stars);
      }
    }
  };

  const handleRestart = () => {
    soundManager.playPop();
    setCurrentIdx(0);
    setUserInputs([]);
    setIsAnswerChecked(false);
    setIsCorrect(false);
    setScore(0);
    setIsCompleted(false);
  };

  if (!currentQ) return null;

  return (
    <div className="mx-auto max-w-2xl">
      {isCompleted ? (
        /* Victory Screen */
        <div className="rounded-4xl border-3 border-emerald-300 bg-white p-8 sm:p-12 text-center shadow-washi space-y-6">
          <div className="text-6xl sm:text-7xl animate-bounce" aria-hidden="true">🎉</div>
          <h2 className="font-baloo text-3xl sm:text-4xl font-black text-emerald-900">
            Xuất Sắc! Bé Đã Tìm Đủ Chữ Cái!
          </h2>
          <p className="font-vietnam text-base font-semibold text-slate-600">
            Bé có trí nhớ chữ cái và từ vựng Tiếng Anh cực kỳ siêu phàm!
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-3xl bg-amber-50 border-2 border-amber-300 text-amber-950 font-baloo font-black text-2xl shadow-xs">
            <Star size={28} className="text-amber-500 fill-amber-500" />
            <span>Điểm Đạt Được: {score}/{gamePool.length * 10} Điểm</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={handleRestart}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-baloo font-black text-base shadow-pop-md cursor-pointer transition-all"
            >
              <RotateCcw size={18} />
              <span>Chơi Lại Đề Khác</span>
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
        /* Question Card */
        <div className="rounded-4xl border-2 border-sky-200 bg-white p-6 sm:p-8 shadow-washi space-y-6">
          {/* Header Progress */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="font-baloo font-bold text-xs text-sky-800 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              Câu {currentIdx + 1} / {gamePool.length}
            </span>

            <div className="flex items-center gap-1.5 font-baloo font-black text-amber-600 text-sm">
              <Star size={16} className="fill-amber-500 text-amber-500" />
              <span>{score} Điểm</span>
            </div>
          </div>

          {/* Prompt & Hint */}
          <div className="text-center space-y-2">
            {currentQ.item.imageUrl ? (
              <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-pop-sm border-2 border-amber-200 bg-white p-1.5 flex items-center justify-center">
                <img
                  src={currentQ.item.imageUrl}
                  alt={currentQ.item.word}
                  className="max-h-full max-w-full object-contain rounded-xl"
                />
              </div>
            ) : (
              <span className="text-5xl sm:text-6xl block" aria-hidden="true">{currentQ.item.emoji}</span>
            )}
            <div className="inline-block px-4 py-1.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 font-vietnam text-base font-bold">
              {currentQ.item.meaning}
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={() => handlePlayAudio(currentQ.item.word)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border text-xs font-baloo font-bold cursor-pointer transition-all ${
                  isPlayingWord
                    ? 'bg-sky-500 text-white border-sky-600 shadow-sm animate-pulse'
                    : 'bg-sky-50 hover:bg-sky-100 text-sky-800 border-sky-200'
                }`}
              >
                <Volume2 size={15} />
                <span>Nghe phát âm gợi ý 🔊</span>
              </button>
            </div>
          </div>

          {/* Missing Letters Display Slots */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-3">
            {currentQ.letters.map((char, index) => {
              const isMissingSlot = currentQ.missingIndices.includes(index);
              const missingSlotPos = currentQ.missingIndices.indexOf(index);
              const filledChar = isMissingSlot ? userInputs[missingSlotPos] : null;

              if (!isMissingSlot) {
                return (
                  <div
                    key={index}
                    className="flex h-14 w-12 sm:h-16 sm:w-14 items-center justify-center rounded-2xl bg-slate-100 border-2 border-slate-200 font-baloo text-2xl sm:text-3xl font-black text-slate-800 shadow-xs select-none"
                  >
                    {char.toUpperCase()}
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  className={`flex h-14 w-12 sm:h-16 sm:w-14 items-center justify-center rounded-2xl border-3 font-baloo text-2xl sm:text-3xl font-black shadow-pop-sm transition-all select-none ${
                    filledChar
                      ? isAnswerChecked
                        ? isCorrect
                          ? 'bg-emerald-500 border-emerald-600 text-white animate-bounce-subtle'
                          : 'bg-rose-500 border-rose-600 text-white'
                        : 'bg-sky-500 border-sky-600 text-white'
                      : 'border-dashed border-sky-400 bg-sky-50/70 text-sky-400 animate-pulse'
                  }`}
                >
                  {filledChar ? filledChar.toUpperCase() : '?'}
                </div>
              );
            })}
          </div>

          {/* Letter Candidates Keyboard */}
          <div className="space-y-3 pt-2">
            <div className="text-center font-baloo font-bold text-xs text-slate-500">
              Chạm viên kẹo chữ cái để điền vào chỗ trống:
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {currentQ.choices.map((letter, lIdx) => {
                const countInChoices = currentQ.choices.filter((c) => c === letter).length;
                const countFilled = userInputs.filter((c) => c === letter).length;
                const isUsed = countFilled >= countInChoices;

                return (
                  <button
                    key={lIdx}
                    type="button"
                    disabled={isAnswerChecked || isUsed || userInputs.length >= currentQ.missingIndices.length}
                    onClick={() => handleLetterTap(letter)}
                    className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border-2 font-baloo font-black text-xl sm:text-2xl transition-all cursor-pointer ${
                      isUsed
                        ? 'opacity-25 bg-slate-200 border-slate-300 text-slate-400 pointer-events-none'
                        : 'bg-white border-amber-300 text-amber-950 shadow-pop-sm hover:scale-105 active:scale-95 hover:border-amber-400'
                    }`}
                  >
                    {letter.toUpperCase()}
                  </button>
                );
              })}

              {/* Undo Button */}
              {userInputs.length > 0 && !isAnswerChecked && (
                <button
                  type="button"
                  onClick={handleUndoLetter}
                  className="flex h-12 sm:h-14 items-center gap-1.5 px-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-baloo font-bold text-xs sm:text-sm cursor-pointer shadow-xs active:translate-y-0.5"
                  title="Xóa chữ vừa chọn"
                >
                  <Undo2 size={16} />
                  <span>Xóa</span>
                </button>
              )}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-100">
            {!isAnswerChecked ? (
              <button
                type="button"
                disabled={userInputs.length < currentQ.missingIndices.length}
                onClick={handleCheckAnswer}
                className={`w-full py-3.5 rounded-2xl font-baloo font-black text-base transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  userInputs.length >= currentQ.missingIndices.length
                    ? 'bg-sky-500 hover:bg-sky-600 text-white shadow-pop-md active:translate-y-1'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <CheckCircle2 size={18} />
                <span>Kiểm Tra Chữ Cái</span>
              </button>
            ) : (
              <div className="space-y-3">
                <div
                  className={`p-3 rounded-2xl text-center font-baloo font-bold text-sm ${
                    isCorrect ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-900'
                  }`}
                >
                  {isCorrect
                    ? `🎉 Rất giỏi! Từ chính xác là: "${currentQ.item.word.toUpperCase()}"`
                    : `Chưa đúng rồi! Từ đúng là: "${currentQ.item.word.toUpperCase()}"`}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-baloo font-black text-base shadow-pop-md flex items-center justify-center gap-2 cursor-pointer active:translate-y-1"
                >
                  <span>{currentIdx < gamePool.length - 1 ? 'Câu Tiếp Theo' : 'Xem Kết Quả Thử Thách'}</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
