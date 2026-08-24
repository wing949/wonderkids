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

const COLOR_CONFIGS = {
  gold: {
    barStyle: { background: 'linear-gradient(90deg, #F59E0B 0%, #FBBF24 50%, #D97706 100%)' },
  },
  math: {
    barStyle: { background: 'linear-gradient(90deg, #34D399 0%, #10B981 100%)' },
  },
  vietnamese: {
    barStyle: { background: 'linear-gradient(90deg, #F59E0B 0%, #EA580C 100%)' },
  },
  english: {
    barStyle: { background: 'linear-gradient(90deg, #38BDF8 0%, #2563EB 100%)' },
  },
  logic: {
    barStyle: { background: 'linear-gradient(90deg, #C084FC 0%, #6366F1 100%)' },
  },
  rainbow: {
    barStyle: { background: 'linear-gradient(90deg, #EC4899 0%, #A855F7 50%, #06B6D4 100%)' },
  },
};

export const CandyProgressBar: React.FC<CandyProgressBarProps> = ({
  value,
  max = 100,
  color = 'gold',
  height = 'md',
  showLabel = false,
  className = '',
  showStarIndicator = true,
}) => {
  const safeMax = max > 0 ? max : 100;
  const percentage = Math.min(100, Math.max(0, (value / safeMax) * 100));
  const colorCfg = COLOR_CONFIGS[color] || COLOR_CONFIGS.gold;

  const heightStyles = {
    sm: 'h-3.5',
    md: 'h-5',
    lg: 'h-7',
  };

  return (
    <div className={`relative flex items-center w-full ${className}`}>
      {/* Outer Track with inset depth */}
      <div className={`relative w-full overflow-hidden rounded-full bg-slate-200/90 p-0.5 shadow-inner border border-slate-300/70 ${heightStyles[height]}`}>
        {/* Animated Filled Progress */}
        <motion.div
          className="relative h-full rounded-full shadow-sm overflow-hidden"
          style={colorCfg.barStyle}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Animated Candy Stripes Overlay */}
          <div className="absolute inset-0 opacity-35 stripe-animated pointer-events-none" />

          {/* Top Glossy Reflection */}
          <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
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
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
};

