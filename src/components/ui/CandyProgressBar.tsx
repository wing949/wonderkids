import React from 'react';
import { motion } from 'framer-motion';

interface CandyProgressBarProps {
  value: number; // current
  max?: number; // total
  color?: 'math' | 'vietnamese' | 'english' | 'logic' | 'gold' | 'rainbow';
  height?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
  showStarIndicator?: boolean;
}

export const CandyProgressBar: React.FC<CandyProgressBarProps> = ({
  value,
  max = 100,
  color = 'gold',
  height = 'md',
  showLabel = false,
  className = '',
  showStarIndicator = true,
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const heightStyles = {
    sm: 'h-3',
    md: 'h-5',
    lg: 'h-7',
  };

  const gradientStyles = {
    math: 'from-emerald-400 to-teal-500',
    vietnamese: 'from-amber-400 to-orange-500',
    english: 'from-sky-400 to-blue-500',
    logic: 'from-purple-400 to-indigo-500',
    gold: 'from-yellow-400 to-amber-500',
    rainbow: 'from-pink-400 via-purple-400 to-cyan-400',
  };

  return (
    <div className={`relative flex items-center w-full ${className}`}>
      <div className={`w-full overflow-hidden rounded-full bg-slate-200/80 p-0.5 shadow-inner border border-slate-300/60 ${heightStyles[height]}`}>
        <motion.div
          className={`relative h-full rounded-full bg-gradient-to-r ${gradientStyles[color]} stripe-animated shadow-sm`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Subtle glossy highlight */}
          <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-white/30" />
        </motion.div>
      </div>

      {showStarIndicator && percentage >= 100 && (
        <motion.span
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          className="absolute -right-2 text-xl filter drop-shadow"
        >
          ⭐
        </motion.span>
      )}

      {showLabel && (
        <span className="ml-2.5 shrink-0 font-baloo font-bold text-sm text-brand-dark">
          {value}/{max}
        </span>
      )}
    </div>
  );
};
