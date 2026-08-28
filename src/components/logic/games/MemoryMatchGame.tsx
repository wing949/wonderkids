import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, RefreshCw, Sparkles, Star, CheckCircle2 } from 'lucide-react';
import { GradeLevel } from '../../../types';
import { LOGIC_ITEMS_POOL, LogicItem } from '../../../data/logicGamesData';
import { soundManager } from '../../../utils/audio';

interface MemoryMatchGameProps {
  onBack: () => void;
  onReward: (stars: number, xp: number) => void;
  currentGrade: GradeLevel;
}

interface CardState {
  cardId: string;
  itemId: string;
  item: LogicItem;
  isFlipped: boolean;
  isMatched: boolean;
}

type DifficultyMode = 'easy' | 'medium' | 'hard';

export const MemoryMatchGame: React.FC<MemoryMatchGameProps> = ({
  onBack,
  onReward,
  currentGrade,
}) => {
  const [difficulty, setDifficulty] = useState<DifficultyMode>(() => {
    if (currentGrade <= 2) return 'easy';
    if (currentGrade <= 4) return 'medium';
    return 'hard';
  });

  const [cards, setCards] = useState<CardState[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [isBusy, setIsBusy] = useState(false);
  const [moves, setMoves] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [isGameComplete, setIsGameComplete] = useState(false);

  // Number of pairs based on difficulty
  const pairsCount = useMemo(() => {
    switch (difficulty) {
      case 'easy': return 3; // 6 cards (2x3)
      case 'medium': return 6; // 12 cards (3x4)
      case 'hard': return 8; // 16 cards (4x4)
    }
  }, [difficulty]);

  const initGame = (mode: DifficultyMode = difficulty) => {
    setDifficulty(mode);
    setMoves(0);
    setMatchedPairs(0);
    setIsGameComplete(false);
    setFlippedIndices([]);
    setIsBusy(false);

    // Pick distinct items
    const shuffledPool = [...LOGIC_ITEMS_POOL].sort(() => 0.5 - Math.random());
    const count = mode === 'easy' ? 3 : mode === 'medium' ? 6 : 8;
    const selectedItems = shuffledPool.slice(0, count);

    // Duplicate each item to make a pair
    const cardPairs: CardState[] = [];
    selectedItems.forEach((item, idx) => {
      cardPairs.push({
        cardId: `card-${item.id}-a-${idx}`,
        itemId: item.id,
        item,
        isFlipped: false,
        isMatched: false,
      });
      cardPairs.push({
        cardId: `card-${item.id}-b-${idx}`,
        itemId: item.id,
        item,
        isFlipped: false,
        isMatched: false,
      });
    });

    // Shuffle cards
    const shuffledCards = cardPairs.sort(() => 0.5 - Math.random());
    setCards(shuffledCards);
  };

  useEffect(() => {
    initGame(difficulty);
  }, [difficulty]);

  const handleCardClick = (index: number) => {
    if (isBusy) return;
    const card = cards[index];
    if (card.isFlipped || card.isMatched) return;
    if (flippedIndices.includes(index)) return;

    soundManager.playPop();

    // Flip card
    const nextCards = [...cards];
    nextCards[index].isFlipped = true;
    setCards(nextCards);

    const nextFlipped = [...flippedIndices, index];
    setFlippedIndices(nextFlipped);

    // If 2 cards are flipped, check for match
    if (nextFlipped.length === 2) {
      setMoves((prev) => prev + 1);
      setIsBusy(true);

      const [firstIdx, secondIdx] = nextFlipped;
      const firstCard = nextCards[firstIdx];
      const secondCard = nextCards[secondIdx];

      if (firstCard.itemId === secondCard.itemId) {
        // MATCH!
        setTimeout(() => {
          soundManager.playCorrect();
          const matchedCards = [...nextCards];
          matchedCards[firstIdx].isMatched = true;
          matchedCards[secondIdx].isMatched = true;
          setCards(matchedCards);
          setFlippedIndices([]);
          setIsBusy(false);

          const nextPairs = matchedPairs + 1;
          setMatchedPairs(nextPairs);

          if (nextPairs >= pairsCount) {
            // WIN!
            soundManager.playVictory();
            onReward(3, 100);
            setIsGameComplete(true);
          }
        }, 500);
      } else {
        // NO MATCH -> Flip back after 900ms
        setTimeout(() => {
          soundManager.playIncorrect();
          const unFlippedCards = [...nextCards];
          unFlippedCards[firstIdx].isFlipped = false;
          unFlippedCards[secondIdx].isFlipped = false;
          setCards(unFlippedCards);
          setFlippedIndices([]);
          setIsBusy(false);
        }, 900);
      }
    }
  };

  const gridColsClass = useMemo(() => {
    switch (difficulty) {
      case 'easy': return 'grid-cols-3';
      case 'medium': return 'grid-cols-3 sm:grid-cols-4';
      case 'hard': return 'grid-cols-4';
    }
  }, [difficulty]);

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

        {/* Difficulty Selector */}
        <div className="flex items-center gap-1 bg-white/90 p-1 rounded-2xl border border-slate-200 shadow-2xs">
          {(['easy', 'medium', 'hard'] as DifficultyMode[]).map((mode) => (
            <button
              key={mode}
              onClick={() => {
                soundManager.playPop();
                initGame(mode);
              }}
              className={`px-3 py-1.5 rounded-xl font-baloo font-bold text-xs transition-all cursor-pointer ${
                difficulty === mode
                  ? 'bg-pink-500 text-white shadow-2xs font-extrabold'
                  : 'text-slate-600 hover:bg-pink-50 hover:text-pink-700'
              }`}
            >
              {mode === 'easy' ? 'Dễ (6 thẻ)' : mode === 'medium' ? 'Vừa (12 thẻ)' : 'Nâng cao (16 thẻ)'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Game Container */}
      <div className="relative overflow-hidden rounded-4xl border-2 border-white/90 bg-[#fffdfa]/95 p-5 sm:p-8 shadow-washi">
        {/* Title & Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-4 mb-6 border-b border-pink-100">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-pink-50 px-3.5 py-1 text-xs font-extrabold text-pink-700 uppercase tracking-wider font-baloo border border-pink-200 mb-1">
              <span>🃏 Lật Thẻ Tìm Đôi</span>
            </div>
            <h2 className="font-baloo text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Tìm các cặp thẻ hình giống nhau
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-2xl bg-amber-50 px-3.5 py-2 border border-amber-200 font-baloo font-extrabold text-sm text-amber-900 shadow-2xs">
              <Star size={16} className="text-amber-500 fill-amber-400" />
              <span>Đã tìm: {matchedPairs}/{pairsCount} cặp</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-2xl bg-slate-100 px-3.5 py-2 border border-slate-200 font-baloo font-bold text-sm text-slate-700 shadow-2xs">
              <span>Lượt lật: <strong>{moves}</strong></span>
            </div>
          </div>
        </div>

        {/* Win Screen */}
        {isGameComplete ? (
          <div className="text-center py-10 space-y-6">
            <div className="inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-pink-500 text-5xl shadow-pop-md animate-bounce text-white">
              🎉
            </div>
            <div>
              <h3 className="font-baloo text-3xl sm:text-4xl font-black text-brand-dark">
                Tuyệt Vời! Bé Đã Tìm Đủ Tất Cả Cặp Thẻ!
              </h3>
              <p className="mt-2 font-vietnam text-base font-semibold text-slate-600">
                Tổng số lượt lật: <strong>{moves} lượt</strong>. Trí nhớ không gian của bé rất đáng khen! 🌟
              </p>
            </div>
            <div className="flex justify-center gap-4 pt-4 flex-wrap">
              <button
                onClick={() => initGame(difficulty)}
                className="flex items-center gap-2 rounded-2xl bg-pink-500 px-6 py-3 font-baloo font-extrabold text-base text-white shadow-pop-sm hover:bg-pink-600 transition-all cursor-pointer"
              >
                <RefreshCw size={18} />
                <span>Chơi lại màn này</span>
              </button>
              <button
                onClick={onBack}
                className="flex items-center gap-2 rounded-2xl bg-amber-400 px-6 py-3 font-baloo font-extrabold text-base text-amber-950 shadow-pop-sm hover:bg-amber-300 transition-all cursor-pointer"
              >
                <Sparkles size={18} />
                <span>Chọn game khác</span>
              </button>
            </div>
          </div>
        ) : (
          /* Cards Grid */
          <div className={`grid ${gridColsClass} gap-3 sm:gap-4 max-w-2xl mx-auto`}>
            {cards.map((card, idx) => {
              const isVisible = card.isFlipped || card.isMatched;

              return (
                <motion.div
                  key={card.cardId}
                  whileHover={{ scale: card.isMatched ? 1 : 1.03 }}
                  whileTap={{ scale: card.isMatched ? 1 : 0.97 }}
                  onClick={() => handleCardClick(idx)}
                  className={`relative aspect-square rounded-3xl border-2 transition-all cursor-pointer select-none flex items-center justify-center ${
                    card.isMatched
                      ? 'bg-emerald-50 border-emerald-300 shadow-sm opacity-90'
                      : isVisible
                      ? 'bg-white border-pink-400 shadow-md ring-2 ring-pink-200'
                      : 'bg-gradient-to-br from-pink-400 to-purple-500 border-pink-300 shadow-pop-sm hover:from-pink-500 hover:to-purple-600'
                  }`}
                >
                  {isVisible ? (
                    <motion.div
                      initial={{ scale: 0.5, rotateY: 90 }}
                      animate={{ scale: 1, rotateY: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col items-center justify-center p-2 text-center"
                    >
                      <span className="text-4xl sm:text-5xl mb-1">{card.item.emoji}</span>
                      <span className="text-[10px] sm:text-xs font-vietnam font-bold text-slate-700 truncate max-w-[80px]">
                        {card.item.name}
                      </span>
                      {card.isMatched && (
                        <span className="absolute top-2 right-2 text-emerald-600">
                          <CheckCircle2 size={16} />
                        </span>
                      )}
                    </motion.div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-white">
                      <span className="text-3xl sm:text-4xl opacity-90">❓</span>
                      <span className="text-[10px] font-baloo font-bold uppercase tracking-wider opacity-75 mt-1">
                        Lật thẻ
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
