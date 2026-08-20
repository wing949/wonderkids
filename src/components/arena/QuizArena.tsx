import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swords, Timer, ArrowLeft, Check, X, Trophy } from 'lucide-react';
import { CuteButton } from '../ui/CuteButton';
import { soundManager } from '../../utils/audio';
import { triggerConfetti } from '../../utils/confetti';

interface QuizArenaProps {
  onBackToDashboard: () => void;
  onVictory: (xp: number, stars: number) => void;
}

const ARENA_QUESTIONS = [
  {
    id: 'a1',
    subject: 'Toán',
    question: 'Tính nhanh: 9 + 6 = ?',
    options: ['14', '15', '16', '13'],
    correctIndex: 1,
  },
  {
    id: 'a2',
    subject: 'Tiếng Việt',
    question: 'Điền từ đúng: "Em chăm chỉ học ..." ?',
    options: ['hành', 'bài', 'tập', 'đọc'],
    correctIndex: 0,
  },
  {
    id: 'a3',
    subject: 'Tiếng Anh',
    question: 'What color is the sun? ☀️',
    options: ['Blue', 'Yellow', 'Pink', 'Green'],
    correctIndex: 1,
  },
  {
    id: 'a4',
    subject: 'Toán',
    question: '5 x 6 = ?',
    options: ['25', '35', '30', '40'],
    correctIndex: 2,
  },
  {
    id: 'a5',
    subject: 'Tư Duy',
    question: 'Hình nào có 3 cạnh và 3 góc?',
    options: ['Hình vuông', 'Hình tam giác', 'Hình tròn', 'Hình chữ nhật'],
    correctIndex: 1,
  }
];

export const QuizArena: React.FC<QuizArenaProps> = ({ onBackToDashboard, onVictory }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = ARENA_QUESTIONS[currentIdx];

  // Timer countdown
  useEffect(() => {
    if (isFinished || isAnswerChecked) return;

    if (timeLeft <= 0) {
      handleTimeout();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isFinished, isAnswerChecked]);

  const handleTimeout = () => {
    setIsAnswerChecked(true);
    soundManager.playIncorrect();
    // AI has 70% chance to score
    if (Math.random() > 0.3) {
      setAiScore((prev) => prev + 10);
    }
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswerChecked) return;
    soundManager.playPop();
    setSelectedOption(idx);
    setIsAnswerChecked(true);

    const isCorrect = idx === currentQ.correctIndex;
    if (isCorrect) {
      soundManager.playCorrect();
      setPlayerScore((prev) => prev + 10);
    } else {
      soundManager.playIncorrect();
    }

    // AI answer simulation
    if (Math.random() > 0.25) {
      setAiScore((prev) => prev + 10);
    }
  };

  const handleNext = () => {
    soundManager.playPop();
    if (currentIdx < ARENA_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setTimeLeft(15);
    } else {
      setIsFinished(true);
      if (playerScore >= aiScore) {
        soundManager.playVictory();
        triggerConfetti();
        onVictory(playerScore * 10, 3);
      }
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] pb-24 pt-6 sm:pt-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-6">
        {/* Arena Header */}
        <div className="flex items-center justify-between border-b border-purple-200 pb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                soundManager.playPop();
                onBackToDashboard();
              }}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm border border-purple-200 text-purple-700"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <div className="flex items-center gap-2 font-baloo text-2xl font-extrabold text-purple-950">
                <Swords size={24} className="text-purple-600" />
                <span>Đấu Trường Trí Tuệ Tốc Độ</span>
              </div>
              <span className="font-vietnam text-xs font-semibold text-purple-700">
                Câu {currentIdx + 1}/{ARENA_QUESTIONS.length} • Đấu với AI BoBo 🦉
              </span>
            </div>
          </div>

          {/* Timer Pill */}
          <div className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full font-baloo font-extrabold text-base border-2 shadow-sm ${
            timeLeft <= 5 ? 'bg-rose-100 text-rose-700 border-rose-300 animate-pulse' : 'bg-purple-100 text-purple-900 border-purple-300'
          }`}>
            <Timer size={18} />
            <span>{timeLeft}s</span>
          </div>
        </div>

        {/* Live Scoreboard */}
        <div className="grid grid-cols-2 gap-4">
          {/* Player Score */}
          <div className="rounded-3xl border-2 border-emerald-300 bg-emerald-50/90 p-4 text-center">
            <div className="text-2xl mb-0.5">🌟 Bé Yêu</div>
            <div className="font-baloo font-extrabold text-3xl text-emerald-900">{playerScore} Điểm</div>
          </div>

          {/* AI Opponent Score */}
          <div className="rounded-3xl border-2 border-purple-300 bg-purple-50/90 p-4 text-center">
            <div className="text-2xl mb-0.5">🦉 AI BoBo</div>
            <div className="font-baloo font-extrabold text-3xl text-purple-900">{aiScore} Điểm</div>
          </div>
        </div>

        {!isFinished ? (
          /* Question Box */
          <motion.div
            key={currentQ.id}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="rounded-4xl border-3 border-white bg-white/90 p-6 sm:p-8 shadow-washi"
          >
            <div className="mb-2">
              <span className="rounded-full bg-purple-100 px-3 py-1 font-baloo text-xs font-bold text-purple-800">
                {currentQ.subject}
              </span>
            </div>
            <h3 className="font-baloo text-2xl sm:text-3xl font-extrabold text-brand-dark leading-tight">
              {currentQ.question}
            </h3>

            {/* 4 Bubble Options */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrectOpt = idx === currentQ.correctIndex;
                let btnStyle = 'border-slate-200 bg-slate-50 hover:border-purple-300 text-brand-dark';

                if (isAnswerChecked) {
                  if (isCorrectOpt) {
                    btnStyle = 'border-emerald-500 bg-emerald-100 text-emerald-900 scale-102';
                  } else if (isSelected && !isCorrectOpt) {
                    btnStyle = 'border-rose-400 bg-rose-100 text-rose-900';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswerChecked}
                    onClick={() => handleSelectOption(idx)}
                    className={`flex items-center justify-between p-4 rounded-3xl border-3 font-baloo font-bold text-xl text-left transition-all min-h-[60px] ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isAnswerChecked && isCorrectOpt && <Check className="text-emerald-600" size={20} />}
                    {isAnswerChecked && isSelected && !isCorrectOpt && <X className="text-rose-600" size={20} />}
                  </button>
                );
              })}
            </div>

            {/* Next Button after answering */}
            {isAnswerChecked && (
              <div className="mt-6 flex justify-end">
                <CuteButton
                  variant="primary"
                  size="lg"
                  onClick={handleNext}
                >
                  {currentIdx === ARENA_QUESTIONS.length - 1 ? 'Xem Kết Quả Chung Cuộc 🏆' : 'Câu Kế Tiếp →'}
                </CuteButton>
              </div>
            )}
          </motion.div>
        ) : (
          /* Arena Victory Screen */
          <div className="rounded-4xl border-3 border-amber-300 bg-gradient-to-b from-amber-50 to-white p-8 text-center shadow-washi">
            <div className="text-6xl mb-3">{playerScore >= aiScore ? '👑' : '👏'}</div>
            <h3 className="font-baloo text-3xl font-extrabold text-brand-dark">
              {playerScore >= aiScore ? 'BẠN ĐÃ CHIẾN THẮNG!' : 'TRẬN ĐẤU CÂN SỨC!'}
            </h3>
            <p className="font-vietnam text-sm font-semibold text-slate-600 mt-1">
              Điểm số chung cuộc: Bé ({playerScore}) - AI BoBo ({aiScore})
            </p>

            <div className="mt-6 flex justify-center gap-3">
              <CuteButton
                variant="primary"
                size="lg"
                icon={<Trophy size={20} />}
                onClick={onBackToDashboard}
              >
                Nhận Thưởng & Về Trang Chủ
              </CuteButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
