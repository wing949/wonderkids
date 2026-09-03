import React, { useState, useEffect } from 'react';
import { Star, RotateCcw } from 'lucide-react';
import { GlobalSuccessVocabularyItem } from '../../../data/curriculum/english/vocabularyData';
import { soundManager } from '../../../utils/audio';

interface WordMemoryMatchGameProps {
  words: GlobalSuccessVocabularyItem[];
  onFinish?: (score: number, stars: number) => void;
  onExit?: () => void;
}

interface MemoryCard {
  id: string;
  wordId: string;
  type: 'word' | 'meaning';
  text: string;
  emoji: string;
  imageUrl?: string;
  englishWord: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export const WordMemoryMatchGame: React.FC<WordMemoryMatchGameProps> = ({
  words,
  onFinish,
  onExit,
}) => {
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flippedIds, setFlippedIds] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isBusy, setIsBusy] = useState(false);

  // Take 4 words (8 cards) or 6 words (12 cards) if enough words
  const pairCount = words.length >= 6 ? 6 : Math.min(4, words.length);

  const initGame = () => {
    if (words.length < 2) return;

    const selectedWords = [...words].sort(() => 0.5 - Math.random()).slice(0, pairCount);
    const cardDeck: MemoryCard[] = [];

    selectedWords.forEach((item) => {
      // English card
      cardDeck.push({
        id: `${item.id}-en`,
        wordId: item.id,
        type: 'word',
        text: item.word,
        emoji: item.emoji,
        imageUrl: item.imageUrl,
        englishWord: item.word,
        isFlipped: false,
        isMatched: false,
      });

      // Vietnamese meaning card
      cardDeck.push({
        id: `${item.id}-vi`,
        wordId: item.id,
        type: 'meaning',
        text: item.meaning,
        emoji: item.emoji,
        imageUrl: item.imageUrl,
        englishWord: item.word,
        isFlipped: false,
        isMatched: false,
      });
    });

    // Shuffle the deck
    setCards(cardDeck.sort(() => 0.5 - Math.random()));
    setFlippedIds([]);
    setMoves(0);
    setMatchedPairs(0);
    setIsCompleted(false);
    setIsBusy(false);
  };

  useEffect(() => {
    initGame();
  }, [words, pairCount]);

  const handleCardClick = (card: MemoryCard) => {
    if (isBusy || card.isFlipped || card.isMatched) return;

    soundManager.playPop();

    // If it's an English card, pronounce the word
    if (card.type === 'word') {
      soundManager.speakBrowserSpeech(card.englishWord, 'en-US', undefined, 1, 0.9);
    }

    const nextFlipped = [...flippedIds, card.id];
    setFlippedIds(nextFlipped);

    // Update flipped state in cards
    setCards((prev) =>
      prev.map((c) => (c.id === card.id ? { ...c, isFlipped: true } : c))
    );

    // Check match if 2 cards flipped
    if (nextFlipped.length === 2) {
      setMoves((m) => m + 1);
      setIsBusy(true);

      const [firstId, secondId] = nextFlipped;
      const firstCard = cards.find((c) => c.id === firstId);
      const secondCard = card;

      if (firstCard && firstCard.wordId === secondCard.wordId) {
        // Matched!
        setTimeout(() => {
          soundManager.playCorrect();
          soundManager.speakBrowserSpeech(secondCard.englishWord, 'en-US', undefined, 1, 0.9);

          setCards((prev) =>
            prev.map((c) =>
              c.wordId === secondCard.wordId
                ? { ...c, isFlipped: true, isMatched: true }
                : c
            )
          );

          setMatchedPairs((mp) => {
            const nextMP = mp + 1;
            if (nextMP === pairCount) {
              // Game Won!
              setTimeout(() => {
                setIsCompleted(true);
                soundManager.playVictory();
                if (onFinish) {
                  onFinish(100, 3);
                }
              }, 600);
            }
            return nextMP;
          });

          setFlippedIds([]);
          setIsBusy(false);
        }, 500);
      } else {
        // Not matched: flip back after 1 second
        setTimeout(() => {
          soundManager.playIncorrect();
          setCards((prev) =>
            prev.map((c) =>
              c.id === firstId || c.id === secondId
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setFlippedIds([]);
          setIsBusy(false);
        }, 1100);
      }
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      {isCompleted ? (
        /* Victory Screen */
        <div className="rounded-4xl border-3 border-emerald-300 bg-white p-8 sm:p-12 text-center shadow-washi space-y-6">
          <div className="text-6xl sm:text-7xl animate-bounce" aria-hidden="true">🏆</div>
          <h2 className="font-baloo text-3xl sm:text-4xl font-black text-emerald-950">
            Tuyệt Vời! Đã Ghép Đôi Tất Cả Thẻ!
          </h2>
          <p className="font-vietnam text-base font-semibold text-slate-600">
            Bé đã hoàn thành xuất sắc thử thách trí nhớ từ vựng với {moves} lượt lật!
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-3xl bg-amber-50 border-2 border-amber-300 text-amber-950 font-baloo font-black text-2xl shadow-xs">
            <Star size={28} className="text-amber-500 fill-amber-500" />
            <span>Thưởng: +3 Sao & 100 XP</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={initGame}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-baloo font-black text-base shadow-pop-md cursor-pointer transition-all"
            >
              <RotateCcw size={18} />
              <span>Chơi Lại Ván Mới</span>
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
        <div className="rounded-4xl border-2 border-emerald-200 bg-white p-6 sm:p-8 shadow-washi space-y-6">
          {/* Header Progress & Status */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="font-baloo font-bold text-xs text-emerald-900 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Cặp Đã Ghép: {matchedPairs} / {pairCount}
            </span>

            <div className="text-center font-baloo font-bold text-xs text-slate-500">
              Số lượt lật: <strong className="text-slate-800">{moves}</strong>
            </div>

            <button
              type="button"
              onClick={initGame}
              className="flex items-center gap-1 text-xs font-baloo font-bold text-slate-600 hover:text-brand-dark px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 cursor-pointer transition-all"
            >
              <RotateCcw size={13} />
              <span>Trộn Lại</span>
            </button>
          </div>

          {/* Memory Cards Grid */}
          <div
            className={`grid gap-3 sm:gap-4 py-2 ${
              pairCount <= 4 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-3 sm:grid-cols-4'
            }`}
          >
            {cards.map((card) => {
              const isFaceUp = card.isFlipped || card.isMatched;

              return (
                <button
                  key={card.id}
                  type="button"
                  disabled={card.isMatched || isBusy}
                  onClick={() => handleCardClick(card)}
                  className={`flex flex-col items-center justify-center p-3.5 rounded-3xl border-3 transition-all min-h-[140px] sm:min-h-[160px] cursor-pointer text-center select-none ${
                    card.isMatched
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-950 scale-98 shadow-none opacity-85'
                      : isFaceUp
                      ? 'bg-white border-sky-400 shadow-pop-md scale-102 font-bold'
                      : 'bg-gradient-to-b from-sky-400 to-sky-500 border-sky-600 text-white shadow-pop-sm hover:scale-103 hover:from-sky-300 active:translate-y-1'
                  }`}
                >
                  {isFaceUp ? (
                    <div className="space-y-1.5 animate-pop flex flex-col items-center">
                      {card.imageUrl ? (
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-white p-0.5 flex items-center justify-center border border-slate-100 shadow-2xs">
                          <img src={card.imageUrl} alt={card.englishWord} className="max-h-full max-w-full object-contain" />
                        </div>
                      ) : (
                        <span className="text-3xl sm:text-4xl block" aria-hidden="true">
                          {card.emoji}
                        </span>
                      )}
                      <div
                        className={`font-baloo text-base sm:text-lg font-black leading-tight ${
                          card.type === 'word' ? 'text-sky-900' : 'text-amber-900'
                        }`}
                      >
                        {card.text}
                      </div>
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-baloo font-bold bg-slate-100 text-slate-600">
                        {card.type === 'word' ? 'Tiếng Anh 🇬🇧' : 'Nghĩa Việt 🇻🇳'}
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-white/90">
                      <span className="text-3xl sm:text-4xl mb-1" aria-hidden="true">❓</span>
                      <span className="font-baloo font-black text-xs sm:text-sm tracking-wider">
                        WONDER
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-900 border border-emerald-200 text-center font-baloo font-bold text-xs">
            💡 Lật từng cặp thẻ: Một thẻ Tiếng Anh và một thẻ Nghĩa Việt tương ứng để hoàn thành cặp!
          </div>
        </div>
      )}
    </div>
  );
};
