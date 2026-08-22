import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, RotateCcw } from 'lucide-react';
import { PhonicsGameStage } from '../../../data/curriculum/vietnamese/grade1PhonicsGames';
import { soundManager } from '../../../utils/audio';
import { triggerStarBurst } from '../../../utils/confetti';

interface OrderSequenceGameProps {
  stage: PhonicsGameStage;
  isHintActive: boolean;
  onCorrectAnswer: () => void;
}

export const OrderSequenceGame: React.FC<OrderSequenceGameProps> = ({
  stage,
  isHintActive: _isHintActive,
  onCorrectAnswer,
}) => {
  const targetWords = stage.sequenceWords || [];
  const [placedWords, setPlacedWords] = useState<string[]>([]);
  const [shuffledChoices, setShuffledChoices] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setPlacedWords([]);
    setIsDone(false);
    // Shuffle words
    const shuffled = [...targetWords].sort(() => Math.random() - 0.5);
    setShuffledChoices(shuffled);
  }, [stage.id]);

  const handlePickWord = (word: string, index: number) => {
    if (isDone) return;

    soundManager.play('tap');
    const nextPlaced = [...placedWords, word];
    setPlacedWords(nextPlaced);

    // Remove from available choices
    const nextChoices = [...shuffledChoices];
    nextChoices.splice(index, 1);
    setShuffledChoices(nextChoices);

    // Check if finished
    if (nextPlaced.length === targetWords.length) {
      const isCorrectOrder = nextPlaced.every((w, i) => w === targetWords[i]);
      if (isCorrectOrder) {
        setIsDone(true);
        soundManager.play('correct');
        triggerStarBurst();
        setTimeout(() => {
          onCorrectAnswer();
        }, 1300);
      } else {
        soundManager.play('tap');
        setTimeout(() => {
          // Reset if incorrect
          setPlacedWords([]);
          setShuffledChoices([...targetWords].sort(() => Math.random() - 0.5));
        }, 800);
      }
    }
  };

  const handleReset = () => {
    soundManager.play('tap');
    setPlacedWords([]);
    setShuffledChoices([...targetWords].sort(() => Math.random() - 0.5));
    setIsDone(false);
  };

  return (
    <div className="flex flex-col items-center justify-center py-6 px-2 sm:px-4 w-full">
      {/* Title */}
      <div className="mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-purple-100 rounded-full border border-purple-300">
          <Sparkles className="w-5 h-5 text-purple-600" />
          <span className="font-baloo text-base sm:text-lg font-black text-purple-950">
            Xếp các từ theo đúng thứ tự câu
          </span>
        </div>
      </div>

      {/* Sentence Drop Zone */}
      <div className="relative w-full max-w-lg p-4 sm:p-6 bg-white rounded-3xl border-3 border-purple-300 shadow-md min-h-[90px] flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {placedWords.length === 0 ? (
          <span className="font-vietnam text-sm font-semibold text-slate-400 italic">
            Chạm vào các từ bên dưới để ghép thành câu hoàn chỉnh...
          </span>
        ) : (
          placedWords.map((w, idx) => (
            <motion.span
              key={idx}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="px-4 py-2 bg-gradient-to-b from-purple-100 to-purple-200 border-2 border-purple-400 rounded-2xl font-baloo text-lg sm:text-2xl font-black text-purple-950 shadow-sm"
            >
              {w}
            </motion.span>
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

      {/* Shuffled Available Words */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 max-w-lg">
        {shuffledChoices.map((w, idx) => (
          <motion.button
            key={idx}
            type="button"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.94, y: 2 }}
            onClick={() => handlePickWord(w, idx)}
            className="px-5 py-2.5 rounded-2xl bg-amber-100 hover:bg-amber-200 border-2 border-amber-300 font-baloo text-lg sm:text-xl font-black text-amber-950 shadow-[0_5px_0_#fcd34d] cursor-pointer"
          >
            {w}
          </motion.button>
        ))}
      </div>

      {/* Reset button */}
      {placedWords.length > 0 && !isDone && (
        <button
          type="button"
          onClick={handleReset}
          className="mt-5 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-baloo text-xs font-bold transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Xếp lại</span>
        </button>
      )}
    </div>
  );
};
