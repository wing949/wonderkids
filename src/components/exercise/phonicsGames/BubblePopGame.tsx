import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { PhonicsGameStage, PhonicsGameOption } from '../../../data/curriculum/vietnamese/grade1PhonicsGames';
import { soundManager } from '../../../utils/audio';
import { triggerStarBurst } from '../../../utils/confetti';

interface BubblePopGameProps {
  stage: PhonicsGameStage;
  isHintActive: boolean;
  onCorrectAnswer: () => void;
}

export const BubblePopGame: React.FC<BubblePopGameProps> = ({
  stage,
  isHintActive,
  onCorrectAnswer,
}) => {
  const [poppedIds, setPoppedIds] = useState<string[]>([]);
  const correctOptions = stage.options.filter((o) => o.isCorrect);

  useEffect(() => {
    setPoppedIds([]);
  }, [stage.id]);

  const handlePop = (option: PhonicsGameOption) => {
    if (poppedIds.includes(option.id)) return;

    if (option.isCorrect) {
      soundManager.play('pop');
      const newPopped = [...poppedIds, option.id];
      setPoppedIds(newPopped);

      // Check if all correct options are popped
      const remainingCorrect = correctOptions.filter((o) => !newPopped.includes(o.id));
      if (remainingCorrect.length === 0) {
        soundManager.play('correct');
        triggerStarBurst();
        setTimeout(() => {
          onCorrectAnswer();
        }, 1200);
      }
    } else {
      soundManager.play('tap');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-6 px-2 sm:px-4 w-full">
      {/* Target prompt */}
      <div className="mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full border border-pink-300 shadow-sm">
          <Sparkles className="w-5 h-5 text-pink-600 animate-bounce" />
          <span className="font-baloo text-base sm:text-lg font-black text-purple-950">
            Chạm vỡ bong bóng chữ: <span className="text-pink-600 text-2xl font-black">{stage.targetSoundOrLetter}</span>
          </span>
        </div>
      </div>

      {/* Bubbles Arena */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-lg min-h-[220px]">
        {stage.options.map((opt, idx) => {
          const isPopped = poppedIds.includes(opt.id);
          const isHint = isHintActive && opt.isCorrect && !isPopped;

          return (
            <AnimatePresence key={opt.id}>
              {!isPopped ? (
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [-3, 3, -3],
                    scale: isHint ? [1, 1.15, 1] : 1,
                  }}
                  transition={{
                    y: { duration: 2 + (idx % 3) * 0.5, repeat: Infinity, ease: 'easeInOut' },
                    rotate: { duration: 3 + (idx % 2), repeat: Infinity, ease: 'easeInOut' },
                    scale: isHint ? { duration: 1, repeat: Infinity } : {},
                  }}
                  onClick={() => handlePop(opt)}
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center cursor-pointer select-none transition-all shadow-[0_8px_20px_rgba(0,0,0,0.1)] border-3 ${
                    opt.isCorrect
                      ? 'bg-gradient-to-tr from-sky-200 via-pink-100 to-white border-sky-300'
                      : 'bg-gradient-to-tr from-amber-100 via-yellow-50 to-white border-amber-200'
                  } ${isHint ? 'ring-4 ring-pink-400 ring-offset-2' : ''}`}
                >
                  {/* Bubble Shine highlight */}
                  <div className="absolute top-2 left-3 w-4 h-4 bg-white/80 rounded-full blur-[0.5px]" />
                  <span className="font-baloo text-3xl sm:text-4xl font-black text-slate-800">
                    {opt.label}
                  </span>
                </motion.button>
              ) : (
                <motion.div
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center pointer-events-none"
                >
                  <Sparkles className="w-8 h-8 text-amber-400" />
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}
      </div>

      {/* Progress of popped correct bubbles */}
      <div className="mt-6 flex items-center gap-2 font-baloo text-sm font-bold text-slate-600">
        <span>Tiến độ bắt chữ:</span>
        <div className="flex gap-1.5">
          {correctOptions.map((o) => (
            <div
              key={o.id}
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs text-white transition-all ${
                poppedIds.includes(o.id) ? 'bg-emerald-500 scale-110 shadow-sm' : 'bg-slate-200'
              }`}
            >
              ✓
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
