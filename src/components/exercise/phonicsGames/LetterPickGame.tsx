import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, HelpCircle } from 'lucide-react';
import { PhonicsGameStage, PhonicsGameOption } from '../../../data/curriculum/vietnamese/grade1PhonicsGames';
import { soundManager } from '../../../utils/audio';
import { triggerStarBurst } from '../../../utils/confetti';

interface LetterPickGameProps {
  stage: PhonicsGameStage;
  isHintActive: boolean;
  onCorrectAnswer: () => void;
}

const COLOR_MAP: Record<string, { bg: string; border: string; text: string; shadow: string }> = {
  pink: {
    bg: 'bg-gradient-to-b from-pink-100 to-pink-200',
    border: 'border-pink-300',
    text: 'text-pink-900',
    shadow: 'shadow-[0_8px_0_#f472b6]',
  },
  amber: {
    bg: 'bg-gradient-to-b from-amber-100 to-amber-200',
    border: 'border-amber-300',
    text: 'text-amber-900',
    shadow: 'shadow-[0_8px_0_#fbbf24]',
  },
  emerald: {
    bg: 'bg-gradient-to-b from-emerald-100 to-emerald-200',
    border: 'border-emerald-300',
    text: 'text-emerald-900',
    shadow: 'shadow-[0_8px_0_#34d399]',
  },
  sky: {
    bg: 'bg-gradient-to-b from-sky-100 to-sky-200',
    border: 'border-sky-300',
    text: 'text-sky-900',
    shadow: 'shadow-[0_8px_0_#38bdf8]',
  },
  purple: {
    bg: 'bg-gradient-to-b from-purple-100 to-purple-200',
    border: 'border-purple-300',
    text: 'text-purple-900',
    shadow: 'shadow-[0_8px_0_#c084fc]',
  },
};

export const LetterPickGame: React.FC<LetterPickGameProps> = ({
  stage,
  isHintActive,
  onCorrectAnswer,
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [wrongId, setWrongId] = useState<string | null>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setSelectedId(null);
    setWrongId(null);
    setIsDone(false);
  }, [stage.id]);

  const handleSelect = (option: PhonicsGameOption) => {
    if (isDone) return;

    if (option.isCorrect) {
      setSelectedId(option.id);
      setIsDone(true);
      soundManager.play('correct');
      triggerStarBurst();
      setTimeout(() => {
        onCorrectAnswer();
      }, 1200);
    } else {
      setWrongId(option.id);
      soundManager.play('tap');
      setTimeout(() => {
        setWrongId(null);
      }, 700);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-6 px-2 sm:px-4 w-full">
      {/* Cloud Decoration */}
      <div className="relative w-full max-w-lg mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/90 rounded-full border border-amber-300 shadow-sm">
          <Sparkles className="w-5 h-5 text-amber-600 animate-spin" />
          <span className="font-baloo text-sm sm:text-base font-bold text-amber-900">
            {stage.gameType === 'picture_match'
              ? '🖼️ Nhìn hình đoán tiếng SGK'
              : stage.gameType === 'listen_pick'
              ? '🎧 Nghe phát âm và chọn đúng'
              : '✨ Chạm vào chữ cái đúng'}
          </span>
        </div>
      </div>

      {/* 3D Tactile Option Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-xl">
        <AnimatePresence>
          {stage.options.map((opt) => {
            const colorTheme = COLOR_MAP[opt.color || 'pink'] || COLOR_MAP.pink;
            const isSelected = selectedId === opt.id;
            const isWrong = wrongId === opt.id;
            const isHint = isHintActive && opt.isCorrect;

            return (
              <motion.button
                key={opt.id}
                type="button"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95, y: 4 }}
                animate={
                  isWrong
                    ? { x: [-8, 8, -6, 6, -3, 3, 0] }
                    : isHint
                    ? { scale: [1, 1.08, 1], rotate: [-2, 2, -2, 0] }
                    : {}
                }
                transition={{ duration: isWrong ? 0.4 : isHint ? 1.5 : 0.2, repeat: isHint ? Infinity : 0 }}
                onClick={() => handleSelect(opt)}
                disabled={isDone}
                className={`relative flex flex-col items-center justify-center p-4 sm:p-6 min-h-[110px] sm:min-h-[130px] rounded-3xl border-3 transition-all cursor-pointer select-none ${
                  colorTheme.bg
                } ${colorTheme.border} ${colorTheme.shadow} ${
                  isSelected ? 'ring-4 ring-emerald-400 bg-emerald-100' : ''
                } ${isWrong ? 'ring-4 ring-rose-400 bg-rose-100' : ''}`}
              >
                {/* Visual Label (chữ to rõ ràng) */}
                <span className={`font-baloo text-3xl sm:text-4xl md:text-5xl font-black ${colorTheme.text}`}>
                  {opt.label}
                </span>

                {/* Sub-label (nếu có, ví dụ: tên hình minh họa) */}
                {opt.subLabel && (
                  <span className="font-vietnam text-xs sm:text-sm font-bold text-slate-700 mt-2 text-center">
                    {opt.subLabel}
                  </span>
                )}

                {/* Success Check Badge */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg"
                  >
                    <Check className="w-5 h-5 stroke-[3]" />
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Hint Alert if Active */}
      {isHintActive && stage.hintText && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-3 bg-amber-50 rounded-2xl border border-amber-200 flex items-center gap-2 text-amber-900 font-vietnam text-sm font-semibold max-w-md text-center"
        >
          <HelpCircle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>{stage.hintText}</span>
        </motion.div>
      )}
    </div>
  );
};
