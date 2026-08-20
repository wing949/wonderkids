import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Gift, ArrowRight, Home, RotateCcw } from 'lucide-react';
import { CuteButton } from '../ui/CuteButton';
import { soundManager } from '../../utils/audio';
import { triggerConfetti } from '../../utils/confetti';

interface VictoryModalProps {
  isOpen: boolean;
  starsEarned: number;
  xpEarned: number;
  onContinue: () => void;
  onBackToDashboard: () => void;
  onRetry: () => void;
}

export const VictoryModal: React.FC<VictoryModalProps> = ({
  isOpen,
  starsEarned,
  xpEarned,
  onContinue,
  onBackToDashboard,
  onRetry,
}) => {
  const [chestOpened, setChestOpened] = useState(false);
  const [bonusStars, setBonusStars] = useState(0);

  useEffect(() => {
    if (isOpen) {
      soundManager.playVictory();
      triggerConfetti();
    }
  }, [isOpen]);

  const handleOpenChest = () => {
    if (!chestOpened) {
      soundManager.playChestOpen();
      setChestOpened(true);
      setBonusStars(2);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-brand-dark/50 backdrop-blur-md"
      />

      {/* Victory Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-4xl border-4 border-amber-300 bg-gradient-to-b from-amber-50 via-white to-orange-50 p-6 sm:p-8 text-center shadow-2xl"
      >
        {/* Celebration Title */}
        <div className="text-5xl sm:text-6xl animate-bounce-subtle mb-2">🎉</div>
        <h2 className="font-baloo text-3xl sm:text-4xl font-extrabold text-amber-950">
          HOÀN THÀNH XUẤT SẮC!
        </h2>
        <p className="font-vietnam text-xs sm:text-sm font-semibold text-amber-800/80 mt-1">
          Bạn đã chinh phục trọn vẹn ải thử thách hôm nay!
        </p>

        {/* 3 Stars Animation */}
        <div className="my-6 flex justify-center items-center gap-3">
          {[1, 2, 3].map((starIndex) => {
            const isEarned = starIndex <= starsEarned;
            return (
              <motion.div
                key={starIndex}
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2 + starIndex * 0.15, type: 'spring' }}
                className={`flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-3xl border-3 shadow-lg ${
                  isEarned
                    ? 'border-amber-300 bg-gradient-to-tr from-amber-400 to-yellow-300 shadow-amber-200 scale-105'
                    : 'border-slate-200 bg-slate-100 text-slate-300'
                }`}
              >
                <Star
                  size={36}
                  className={isEarned ? 'fill-white text-white drop-shadow' : 'text-slate-300'}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Rewards Box (XP & Star Coins) */}
        <div className="rounded-3xl border-2 border-amber-200/90 bg-white/90 p-4 shadow-sm">
          <div className="grid grid-cols-2 gap-3 text-center divide-x divide-slate-100">
            <div>
              <span className="font-baloo font-bold text-xs text-slate-400 uppercase">Kinh nghiệm</span>
              <div className="font-baloo font-extrabold text-2xl text-emerald-600">
                +{xpEarned} XP
              </div>
            </div>
            <div>
              <span className="font-baloo font-bold text-xs text-slate-400 uppercase">Ngôi sao</span>
              <div className="font-baloo font-extrabold text-2xl text-amber-500">
                +{starsEarned + bonusStars} ⭐
              </div>
            </div>
          </div>
        </div>

        {/* Mystery Chest Bonus */}
        <div className="mt-4 rounded-3xl border-2 border-purple-200 bg-purple-50/80 p-3.5">
          {!chestOpened ? (
            <button
              onClick={handleOpenChest}
              className="flex w-full items-center justify-center gap-2 font-baloo font-bold text-sm text-purple-900 hover:scale-102 transition-transform cursor-pointer"
            >
              <Gift size={20} className="text-purple-600 animate-bounce" />
              <span>Chạm để mở Rương Quà May Mắn 🎁</span>
            </button>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="font-baloo font-extrabold text-sm text-purple-900"
            >
              ✨ Chúc mừng! Bạn nhận thêm <strong>+2 Ngôi Sao May Mắn</strong>! 🌟
            </motion.div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col gap-2.5">
          <CuteButton
            variant="primary"
            size="lg"
            icon={<ArrowRight size={20} />}
            iconPosition="right"
            onClick={onContinue}
          >
            Tiếp Tục Chinh Phục 🚀
          </CuteButton>

          <div className="flex gap-2">
            <CuteButton
              variant="white"
              size="md"
              className="flex-1"
              icon={<RotateCcw size={16} />}
              onClick={onRetry}
            >
              Làm lại
            </CuteButton>

            <CuteButton
              variant="white"
              size="md"
              className="flex-1"
              icon={<Home size={16} />}
              onClick={onBackToDashboard}
            >
              Trang Chủ
            </CuteButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
