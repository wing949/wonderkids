import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, RefreshCw, Sparkles, Star } from 'lucide-react';
import { GradeLevel } from '../../../types';
import { PATTERN_QUESTIONS_POOL, PatternQuestion } from '../../../data/logicGamesData';
import { soundManager } from '../../../utils/audio';

interface PatternSequenceGameProps {
  onBack: () => void;
  onReward: (stars: number, xp: number) => void;
  currentGrade: GradeLevel;
}

export const PatternSequenceGame: React.FC<PatternSequenceGameProps> = ({
  onBack,
  onReward,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isGameComplete, setIsGameComplete] = useState(false);

  const currentQuestion: PatternQuestion = PATTERN_QUESTIONS_POOL[currentIdx];

  const handleSelectOption = (optionId: string) => {
    if (isAnswered) return;

    setSelectedOptionId(optionId);
    setIsAnswered(true);

    const isCorrect = optionId === currentQuestion.correctOptionId;

    if (isCorrect) {
      soundManager.playCorrect();
      setScore((prev) => prev + 1);
    } else {
      soundManager.playIncorrect();
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < PATTERN_QUESTIONS_POOL.length) {
      soundManager.playPop();
      setCurrentIdx((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswered(false);
    } else {
      soundManager.playVictory();
      onReward(3, 100);
      setIsGameComplete(true);
    }
  };

  const restartGame = () => {
    setCurrentIdx(0);
    setScore(0);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setIsGameComplete(false);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:py-10">
      {/* Header Bar */}
      <div className="flex items-center justify-between gap-3 mb-6">
        <button
          onClick={() => {
            soundManager.playPop();
            onBack();
          }}
          className="flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-2.5 font-baloo font-extrabold text-sm sm:text-base text-slate-700 shadow-sm hover:bg-white hover:scale-105 transition-all border border-slate-200 cursor-pointer"
        >
          <ArrowLeft size={18} />
          <span>Bé Tư Duy</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 rounded-full bg-blue-100/90 px-3.5 py-1.5 font-baloo font-black text-sm text-blue-900 shadow-2xs border border-blue-200">
            <span>Câu {currentIdx + 1}/{PATTERN_QUESTIONS_POOL.length}</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-amber-100/90 px-3.5 py-1.5 font-baloo font-black text-sm text-amber-900 shadow-2xs border border-amber-200">
            <Star size={16} className="text-amber-500 fill-amber-400" />
            <span>{score} ⭐</span>
          </div>
        </div>
      </div>

      {/* Main Game Container */}
      <div className="relative overflow-hidden rounded-4xl border-2 border-white/90 bg-[#fffdfa]/95 p-5 sm:p-8 shadow-washi">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-extrabold text-blue-700 uppercase tracking-wider font-baloo border border-blue-200 mb-2">
            <span>🧩 Tìm Quy Luật Hình</span>
          </div>
          <h2 className="font-baloo text-2xl sm:text-3xl font-extrabold text-brand-dark">
            Hình nào thích hợp nhất vào ô có dấu hỏi chấm [ ? ]?
          </h2>
          <p className="mt-1 font-vietnam text-xs sm:text-sm font-semibold text-slate-500">
            {currentQuestion?.ruleDescription}
          </p>
        </div>

        {isGameComplete ? (
          <div className="text-center py-10 space-y-6">
            <div className="inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-500 text-5xl shadow-pop-md animate-bounce text-white">
              🏆
            </div>
            <div>
              <h3 className="font-baloo text-3xl sm:text-4xl font-black text-brand-dark">
                Bé Rất Giỏi: {score}/{PATTERN_QUESTIONS_POOL.length} Điểm!
              </h3>
              <p className="mt-2 font-vietnam text-base font-semibold text-slate-600">
                Tư duy suy luận và nhận diện quy luật của bé rất xuất sắc.
              </p>
            </div>
            <div className="flex justify-center gap-4 pt-4 flex-wrap">
              <button
                onClick={restartGame}
                className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-baloo font-extrabold text-base text-white shadow-pop-sm hover:bg-blue-700 transition-all cursor-pointer"
              >
                <RefreshCw size={18} />
                <span>Luyện lại quy luật</span>
              </button>
              <button
                onClick={onBack}
                className="flex items-center gap-2 rounded-2xl bg-amber-400 px-6 py-3 font-baloo font-extrabold text-base text-amber-950 shadow-pop-sm hover:bg-amber-300 transition-all cursor-pointer"
              >
                <Sparkles size={18} />
                <span>Chọn trò chơi khác</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Pattern Sequence Display Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50/60 via-purple-50/60 to-pink-50/60 border-2 border-blue-200/80 shadow-sm flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
              {currentQuestion.sequence.map((item, sIdx) => {
                if (item.type === 'blank') {
                  const selectedOpt = currentQuestion.options.find((o) => o.id === selectedOptionId);
                  return (
                    <motion.div
                      key={`blank-${sIdx}`}
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{ repeat: Infinity, duration: 1.8 }}
                      className={`h-16 w-16 sm:h-20 sm:w-20 rounded-2xl border-3 border-dashed flex items-center justify-center text-2xl sm:text-3xl font-black ${
                        isAnswered
                          ? selectedOptionId === currentQuestion.correctOptionId
                            ? 'bg-emerald-100 border-emerald-400 text-emerald-800'
                            : 'bg-rose-100 border-rose-400 text-rose-800'
                          : 'bg-amber-100/70 border-amber-400 text-amber-900 shadow-md'
                      }`}
                    >
                      {isAnswered && selectedOpt ? selectedOpt.emoji : '❓'}
                    </motion.div>
                  );
                }

                return (
                  <div
                    key={`item-${sIdx}`}
                    className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-white border border-blue-100 shadow-2xs flex flex-col items-center justify-center p-1"
                  >
                    <span className="text-3xl sm:text-4xl">{item.emoji}</span>
                  </div>
                );
              })}
            </div>

            {/* Answer Options */}
            <div>
              <div className="text-center mb-3">
                <span className="font-baloo font-bold text-xs sm:text-sm text-slate-500 uppercase tracking-wider">
                  Chọn đáp án đúng:
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {currentQuestion.options.map((opt) => {
                  const isSelected = selectedOptionId === opt.id;
                  const isCorrect = opt.id === currentQuestion.correctOptionId;

                  let cardStyle = 'bg-white border-slate-200 hover:border-blue-300 hover:scale-102';
                  if (isAnswered) {
                    if (isCorrect) {
                      cardStyle = 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-300';
                    } else if (isSelected) {
                      cardStyle = 'bg-rose-50 border-rose-400 ring-2 ring-rose-300';
                    } else {
                      cardStyle = 'bg-slate-50 border-slate-200 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(opt.id)}
                      className={`p-4 rounded-3xl border-2 flex flex-col items-center justify-center transition-all cursor-pointer shadow-sm ${cardStyle}`}
                    >
                      <span className="text-4xl mb-2">{opt.emoji}</span>
                      <span className="font-baloo font-extrabold text-sm text-brand-dark text-center">
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Explanation & Next Step Button */}
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 rounded-3xl bg-blue-50/80 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <h4 className="font-baloo font-black text-base text-blue-950">Giải thích quy luật:</h4>
                    <p className="font-vietnam text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="rounded-2xl bg-blue-600 hover:bg-blue-700 px-6 py-3 font-baloo font-extrabold text-sm sm:text-base text-white shadow-pop-sm active:translate-y-1 transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  {currentIdx + 1 < PATTERN_QUESTIONS_POOL.length ? 'Câu tiếp theo →' : 'Xem kết quả 🏆'}
                </button>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
