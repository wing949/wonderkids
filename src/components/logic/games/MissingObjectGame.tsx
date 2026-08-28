import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, RefreshCw, Volume2, Sparkles, Star, Eye } from 'lucide-react';
import { GradeLevel } from '../../../types';
import { LOGIC_ITEMS_POOL, LogicItem } from '../../../data/logicGamesData';
import { soundManager } from '../../../utils/audio';

interface MissingObjectGameProps {
  onBack: () => void;
  onReward: (stars: number, xp: number) => void;
  currentGrade: GradeLevel;
}

type GameStage = 'memorize' | 'shutter' | 'guess' | 'round_success' | 'game_complete';

export const MissingObjectGame: React.FC<MissingObjectGameProps> = ({
  onBack,
  onReward,
  currentGrade,
}) => {
  const TOTAL_ROUNDS = 5;
  const [currentRound, setCurrentRound] = useState(1);
  const [score, setScore] = useState(0);
  const [stage, setStage] = useState<GameStage>('memorize');
  const [countdown, setCountdown] = useState(5);

  // Game state for current round
  const [shelfItems, setShelfItems] = useState<LogicItem[]>([]);
  const [missingItem, setMissingItem] = useState<LogicItem | null>(null);
  const [options, setOptions] = useState<LogicItem[]>([]);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isWrongSelected, setIsWrongSelected] = useState<string | null>(null);

  // Number of items based on grade & round
  const itemsCount = useMemo(() => {
    const base = currentGrade <= 2 ? 3 : 4;
    return Math.min(6, base + Math.floor((currentRound - 1) / 2));
  }, [currentGrade, currentRound]);

  // Setup round
  const startRound = (roundNum: number) => {
    setCurrentRound(roundNum);
    setStage('memorize');
    setCountdown(5);
    setSelectedOptionId(null);
    setIsWrongSelected(null);

    // Pick random items from pool
    const shuffled = [...LOGIC_ITEMS_POOL].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, itemsCount);
    setShelfItems(selected);

    // Pick one item that will disappear
    const targetIdx = Math.floor(Math.random() * selected.length);
    const target = selected[targetIdx];
    setMissingItem(target);

    // Options: target + 3 distractors from pool
    const poolWithoutSelected = shuffled.slice(itemsCount);
    const distractors = poolWithoutSelected.slice(0, 3);
    const roundOptions = [target, ...distractors].sort(() => 0.5 - Math.random());
    setOptions(roundOptions);
  };

  useEffect(() => {
    startRound(1);
  }, [currentGrade]);

  // Memorize countdown timer
  useEffect(() => {
    if (stage !== 'memorize') return;
    if (countdown <= 0) {
      triggerShutter();
      return;
    }
    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [stage, countdown]);

  const triggerShutter = () => {
    setStage('shutter');
    soundManager.playPop();
    setTimeout(() => {
      setStage('guess');
    }, 1200);
  };

  const handleSelectOption = (option: LogicItem) => {
    if (stage !== 'guess' || selectedOptionId) return;

    setSelectedOptionId(option.id);

    if (missingItem && option.id === missingItem.id) {
      // Correct!
      soundManager.playCorrect();
      setScore((prev) => prev + 1);
      setStage('round_success');

      setTimeout(() => {
        if (currentRound >= TOTAL_ROUNDS) {
          soundManager.playVictory();
          onReward(3, 100);
          setStage('game_complete');
        } else {
          startRound(currentRound + 1);
        }
      }, 1600);
    } else {
      // Incorrect
      soundManager.playIncorrect();
      setIsWrongSelected(option.id);
      setTimeout(() => {
        setIsWrongSelected(null);
        setSelectedOptionId(null);
      }, 1000);
    }
  };

  const speakGuidance = (text: string) => {
    soundManager.speakBrowserSpeech(text, 'vi-VN');
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:py-10">
      {/* Top Header Bar */}
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
          <div className="flex items-center gap-1.5 rounded-full bg-purple-100/90 px-3.5 py-1.5 font-baloo font-black text-sm text-purple-900 shadow-2xs border border-purple-200">
            <span>Vòng {currentRound}/{TOTAL_ROUNDS}</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-amber-100/90 px-3.5 py-1.5 font-baloo font-black text-sm text-amber-900 shadow-2xs border border-amber-200">
            <Star size={16} className="text-amber-500 fill-amber-400" />
            <span>{score} ⭐</span>
          </div>
        </div>
      </div>

      {/* Main Game Screen */}
      <div className="relative overflow-hidden rounded-4xl border-2 border-white/90 bg-[#fffdfa]/95 p-5 sm:p-8 shadow-washi">
        {/* Game Title & Instruction */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-3.5 py-1 text-xs font-extrabold text-purple-700 uppercase tracking-wider font-baloo border border-purple-200 mb-2">
            <span>🔍 Vật Gì Biến Mất?</span>
          </div>
          <h2 className="font-baloo text-2xl sm:text-3xl font-extrabold text-brand-dark flex items-center justify-center gap-2 flex-wrap">
            {stage === 'memorize' && (
              <>
                <span>Bé hãy quan sát và nhớ các đồ vật trên kệ nhé! 👀</span>
                <button
                  onClick={() => speakGuidance('Bé hãy quan sát và nhớ các đồ vật trên kệ nhé!')}
                  className="p-1 rounded-full text-purple-600 hover:bg-purple-100 cursor-pointer"
                  title="Nghe hướng dẫn"
                  aria-label="Nghe hướng dẫn"
                >
                  <Volume2 size={20} />
                </button>
              </>
            )}
            {stage === 'shutter' && <span>Úm ba la... Đồ vật biến mất! 🪄</span>}
            {stage === 'guess' && (
              <>
                <span>Đố bé biết: Vật nào vừa biến mất? 🤔</span>
                <button
                  onClick={() => speakGuidance('Đố bé biết, vật nào vừa biến mất?')}
                  className="p-1 rounded-full text-purple-600 hover:bg-purple-100 cursor-pointer"
                  title="Nghe câu hỏi"
                  aria-label="Nghe câu hỏi"
                >
                  <Volume2 size={20} />
                </button>
              </>
            )}
            {stage === 'round_success' && <span>🎉 Giỏi quá! Bé chọn hoàn toàn chính xác!</span>}
            {stage === 'game_complete' && <span>🏆 Chúc mừng bé đã hoàn thành xuất sắc!</span>}
          </h2>
        </div>

        {/* Game Complete Screen */}
        {stage === 'game_complete' ? (
          <div className="text-center py-10 space-y-6">
            <div className="inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-amber-400 text-5xl shadow-pop-md animate-bounce">
              🎖️
            </div>
            <div>
              <h3 className="font-baloo text-3xl font-black text-brand-dark">
                Siêu Trí Nhớ: {score}/{TOTAL_ROUNDS} Điểm!
              </h3>
              <p className="mt-2 font-vietnam text-base font-semibold text-slate-600">
                Bé đã ghi nhớ rất xuất sắc và tìm ra tất cả đồ vật biến mất.
              </p>
            </div>
            <div className="flex justify-center gap-4 pt-4 flex-wrap">
              <button
                onClick={() => startRound(1)}
                className="flex items-center gap-2 rounded-2xl bg-purple-600 px-6 py-3 font-baloo font-extrabold text-base text-white shadow-pop-sm hover:bg-purple-700 transition-all cursor-pointer"
              >
                <RefreshCw size={18} />
                <span>Chơi lại màn này</span>
              </button>
              <button
                onClick={onBack}
                className="flex items-center gap-2 rounded-2xl bg-amber-400 px-6 py-3 font-baloo font-extrabold text-base text-amber-950 shadow-pop-sm hover:bg-amber-300 transition-all cursor-pointer"
              >
                <Sparkles size={18} />
                <span>Khám phá game khác</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Wooden Shelf Showcase with Cloud Shutter */}
            <div className="relative mx-auto max-w-3xl min-h-[250px] sm:min-h-[280px] rounded-4xl bg-gradient-to-b from-amber-50/95 via-amber-100/80 to-amber-200/90 p-5 sm:p-7 border-4 border-amber-300 shadow-washi flex flex-col justify-between overflow-hidden">
              {/* Cloud Shutter Overlay when Disappearing */}
              <AnimatePresence>
                {stage === 'shutter' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 z-30 flex flex-col items-center justify-center rounded-3xl bg-purple-600/95 backdrop-blur text-white font-baloo text-center p-6"
                  >
                    <div className="text-6xl mb-2 animate-spin-slow">✨</div>
                    <h3 className="text-3xl sm:text-4xl font-black">Úm ba la hô biến! 🪄</h3>
                    <p className="text-purple-200 text-sm sm:text-base font-vietnam font-semibold mt-1">
                      Kệ đang được che lại trong chốc lát...
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Items on Shelf - Centered and evenly spaced */}
              <div className="flex flex-wrap items-end justify-center gap-4 sm:gap-6 z-10 my-auto py-2">
                {stage === 'memorize' ? (
                  shelfItems.map((item, idx) => (
                    <motion.div
                      key={`${item.id}-${idx}`}
                      initial={{ scale: 0.8, opacity: 0, y: 15 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: idx * 0.08 }}
                      className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-3xl bg-white/95 border-2 border-amber-200 shadow-pop-sm hover:-translate-y-2 transition-all w-28 sm:w-36 min-h-[125px] sm:min-h-[145px]"
                    >
                      <span className="text-5xl sm:text-6xl mb-2 filter drop-shadow-sm select-none">{item.emoji}</span>
                      <span className="font-baloo font-black text-xs sm:text-sm text-brand-dark text-center leading-snug break-words max-w-full">
                        {item.name}
                      </span>
                    </motion.div>
                  ))
                ) : (
                  shelfItems.map((item, idx) => {
                    const isTheMissingOne = missingItem && item.id === missingItem.id;
                    if (isTheMissingOne) {
                      return (
                        <motion.div
                          key={`missing-slot-${idx}`}
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-3xl bg-purple-100/80 border-3 border-dashed border-purple-400 shadow-inner w-28 sm:w-36 min-h-[125px] sm:min-h-[145px]"
                        >
                          <span className="text-4xl sm:text-5xl mb-1">❓</span>
                          <span className="font-baloo font-extrabold text-[11px] sm:text-xs text-purple-700 text-center uppercase tracking-wider">
                            Vật gì ở đây?
                          </span>
                        </motion.div>
                      );
                    }

                    return (
                      <motion.div
                        key={`${item.id}-${idx}`}
                        className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-3xl bg-white/95 border-2 border-amber-200 shadow-pop-sm w-28 sm:w-36 min-h-[125px] sm:min-h-[145px]"
                      >
                        <span className="text-5xl sm:text-6xl mb-2 filter drop-shadow-sm select-none">{item.emoji}</span>
                        <span className="font-baloo font-black text-xs sm:text-sm text-brand-dark text-center leading-snug break-words max-w-full">
                          {item.name}
                        </span>
                      </motion.div>
                    );
                  })
                )}
              </div>

              {/* Wooden Shelf Base Planks */}
              <div className="mt-2 h-5 sm:h-6 w-full rounded-2xl bg-gradient-to-r from-[#92400E] via-[#B45309] to-[#92400E] shadow-md border-t-2 border-amber-300 flex items-center justify-center">
                <span className="h-1.5 w-1/3 rounded-full bg-amber-400/40" />
              </div>
            </div>

            {/* Countdown / Ready Button during Memorize Stage */}
            {stage === 'memorize' && (
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-2 font-baloo text-base font-extrabold text-purple-900 bg-purple-100 px-5 py-2.5 rounded-2xl border border-purple-200 shadow-2xs">
                  <Eye size={20} className="animate-pulse text-purple-600" />
                  <span>Thời gian quan sát: {countdown}s</span>
                </div>
                <button
                  onClick={triggerShutter}
                  className="rounded-2xl bg-purple-600 hover:bg-purple-700 px-7 py-2.5 font-baloo font-extrabold text-base text-white shadow-pop-sm active:translate-y-1 transition-all cursor-pointer"
                >
                  Bé đã nhớ xong! ✨
                </button>
              </div>
            )}

            {/* Guessing Options during Guess Stage */}
            {(stage === 'guess' || stage === 'round_success') && (
              <div className="mt-8 space-y-4">
                <div className="text-center">
                  <span className="font-baloo font-black text-sm sm:text-base text-purple-950 uppercase tracking-wide">
                    Chọn 1 món đồ đã biến mất:
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
                  {options.map((opt) => {
                    const isSelected = selectedOptionId === opt.id;
                    const isCorrect = missingItem && opt.id === missingItem.id;
                    const isWrong = isWrongSelected === opt.id;

                    return (
                      <button
                        key={opt.id}
                        disabled={stage === 'round_success'}
                        onClick={() => handleSelectOption(opt)}
                        className={`flex flex-col items-center justify-center p-4 sm:p-5 rounded-3xl border-2 transition-all cursor-pointer shadow-pop-sm active:translate-y-1 ${
                          isSelected && isCorrect
                            ? 'bg-emerald-50 border-emerald-400 ring-4 ring-emerald-200 scale-105 shadow-md'
                            : isWrong
                            ? 'bg-rose-50 border-rose-400 ring-4 ring-rose-200'
                            : 'bg-white hover:bg-purple-50/60 border-slate-200 hover:border-purple-300 hover:scale-103'
                        }`}
                      >
                        <span className="text-5xl sm:text-6xl mb-2 filter drop-shadow-sm">{opt.emoji}</span>
                        <span className="font-baloo font-black text-sm sm:text-base text-brand-dark text-center leading-snug">
                          {opt.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
