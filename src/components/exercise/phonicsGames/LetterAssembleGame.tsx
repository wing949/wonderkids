import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, RotateCcw } from 'lucide-react';
import { PhonicsGameStage } from '../../../data/curriculum/vietnamese/grade1PhonicsGames';
import { soundManager } from '../../../utils/audio';
import { triggerStarBurst } from '../../../utils/confetti';

interface LetterAssembleGameProps {
  stage: PhonicsGameStage;
  isHintActive: boolean;
  onCorrectAnswer: () => void;
}

export const LetterAssembleGame: React.FC<LetterAssembleGameProps> = ({
  stage,
  isHintActive,
  onCorrectAnswer,
}) => {
  const target = stage.assembleTarget;
  const [assembledPieces, setAssembledPieces] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setAssembledPieces([]);
    setIsDone(false);
  }, [stage.id]);

  if (!target) return null;

  const handleAddPiece = (piece: string) => {
    if (isDone) return;
    if (assembledPieces.includes(piece)) return;

    soundManager.play('tap');
    const nextPieces = [...assembledPieces, piece];
    setAssembledPieces(nextPieces);

    // Check if target pieces are all collected
    const allCollected = target.pieces.every((p) => nextPieces.includes(p));
    if (allCollected) {
      setIsDone(true);
      soundManager.play('correct');
      triggerStarBurst();
      setTimeout(() => {
        onCorrectAnswer();
      }, 1300);
    }
  };

  const handleReset = () => {
    soundManager.play('tap');
    setAssembledPieces([]);
    setIsDone(false);
  };

  return (
    <div className="flex flex-col items-center justify-center py-6 px-2 sm:px-4 w-full">
      {/* Target Word Display Goal */}
      <div className="mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-100 rounded-full border border-amber-300">
          <Sparkles className="w-5 h-5 text-amber-600" />
          <span className="font-baloo text-base sm:text-lg font-black text-amber-950">
            Ghép thành tiếng: <span className="text-amber-700 text-2xl font-black">{target.resultWord}</span>
          </span>
        </div>
      </div>

      {/* Assembly Tray (Khay gỗ ghép chữ) */}
      <div className="relative w-full max-w-md p-4 sm:p-6 bg-gradient-to-b from-amber-50 to-amber-100 rounded-3xl border-3 border-amber-300 shadow-inner flex items-center justify-center min-h-[100px] gap-3">
        {assembledPieces.length === 0 ? (
          <span className="font-vietnam text-sm font-semibold text-amber-700/60 italic">
            Chạm vào các mảnh chữ bên dưới để xếp vào khay...
          </span>
        ) : (
          assembledPieces.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl border-2 border-amber-400 shadow-md flex items-center justify-center font-baloo text-2xl sm:text-3xl font-black text-amber-950"
            >
              {p}
            </motion.div>
          ))
        )}

        {isDone && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-3 -right-3 w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg"
          >
            <Check className="w-6 h-6 stroke-[3]" />
          </motion.div>
        )}
      </div>

      {/* Available Letter Pieces to click */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-md">
        {stage.options.map((opt) => {
          const isUsed = assembledPieces.includes(opt.label);
          const isHint = isHintActive && target.pieces.includes(opt.label) && !isUsed;

          return (
            <motion.button
              key={opt.id}
              type="button"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.92, y: 2 }}
              animate={isHint ? { scale: [1, 1.15, 1], rotate: [-3, 3, 0] } : {}}
              transition={{ repeat: isHint ? Infinity : 0, duration: 1 }}
              onClick={() => handleAddPiece(opt.label)}
              disabled={isUsed || isDone}
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-3 flex items-center justify-center font-baloo text-2xl sm:text-3xl font-black shadow-[0_6px_0_#cbd5e1] transition-all ${
                isUsed
                  ? 'opacity-30 cursor-not-allowed bg-slate-100 border-slate-300'
                  : 'bg-white border-sky-300 text-sky-950 shadow-[0_6px_0_#38bdf8] hover:bg-sky-50'
              } ${isHint ? 'ring-4 ring-amber-400 ring-offset-2' : ''}`}
            >
              {opt.label}
            </motion.button>
          );
        })}
      </div>

      {/* Reset Tray Button */}
      {assembledPieces.length > 0 && !isDone && (
        <button
          type="button"
          onClick={handleReset}
          className="mt-5 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-baloo text-xs font-bold transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Xếp lại từ đầu</span>
        </button>
      )}
    </div>
  );
};
