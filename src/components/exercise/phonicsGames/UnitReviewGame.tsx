import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { PhonicsGameStage, PhonicsGameOption } from '../../../data/curriculum/vietnamese/grade1PhonicsGames';
import { soundManager } from '../../../utils/audio';
import { triggerStarBurst } from '../../../utils/confetti';

interface UnitReviewGameProps {
  stage: PhonicsGameStage;
  isHintActive: boolean;
  onCorrectAnswer: () => void;
}

export const UnitReviewGame: React.FC<UnitReviewGameProps> = ({
  stage,
  isHintActive: _isHintActive,
  onCorrectAnswer,
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isDone, setIsDone] = useState(false);

  const handleSelect = (opt: PhonicsGameOption) => {
    if (isDone) return;
    if (opt.isCorrect) {
      setSelectedId(opt.id);
      setIsDone(true);
      soundManager.play('victory');
      triggerStarBurst();
      setTimeout(() => {
        onCorrectAnswer();
      }, 1400);
    } else {
      soundManager.play('tap');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-6 px-2 sm:px-4 w-full">
      {/* Trophy Header */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="mb-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-amber-400 to-yellow-300 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-amber-950"
      >
        <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-amber-900" />
      </motion.div>

      <div className="mb-6 text-center max-w-md">
        <h3 className="font-baloo text-xl sm:text-2xl font-black text-amber-950">
          🏆 ĐẠI HỘI ÔN TẬP NGÔI SAO
        </h3>
        <p className="font-vietnam text-xs sm:text-sm font-semibold text-slate-600 mt-1">
          {stage.instruction}
        </p>
      </div>

      {/* Review Options */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {stage.options.map((opt) => {
          const isSelected = selectedId === opt.id;
          return (
            <motion.button
              key={opt.id}
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelect(opt)}
              disabled={isDone}
              className={`p-4 sm:p-5 rounded-3xl border-3 flex flex-col items-center justify-center text-center transition-all ${
                isSelected
                  ? 'bg-emerald-100 border-emerald-400 ring-4 ring-emerald-300'
                  : 'bg-white border-amber-300 hover:bg-amber-50 shadow-[0_6px_0_#fcd34d]'
              }`}
            >
              <span className="font-baloo text-2xl sm:text-3xl font-black text-amber-950">
                {opt.label}
              </span>
              {opt.subLabel && (
                <span className="font-vietnam text-xs font-semibold text-slate-600 mt-1">
                  {opt.subLabel}
                </span>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
