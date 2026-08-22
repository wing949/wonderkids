import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeId } from '../../types';
import { useCalmMotion } from '../../hooks/useCalmMotion';

interface CuteDoodleBackgroundProps {
  theme?: ThemeId;
}

interface ThemeVisualConfig {
  meshBlobs: { color: string; pos: string }[];
  doodles: { text: string; pos: string; delay: number; duration: number }[];
}

const THEME_VISUALS: Record<ThemeId, ThemeVisualConfig> = {
  ocean: {
    meshBlobs: [
      { color: 'bg-sky-300/35', pos: '-top-32 -left-32' },
      { color: 'bg-blue-300/30', pos: 'top-1/4 -right-32' },
      { color: 'bg-cyan-200/35', pos: 'top-2/3 -left-32' },
      { color: 'bg-indigo-200/30', pos: '-bottom-32 right-1/4' },
    ],
    doodles: [
      { text: '🐬 🌊', pos: 'top-28 left-[16%]', delay: 0, duration: 8 },
      { text: '🫧 🐠', pos: 'top-72 left-[6%]', delay: 1, duration: 9 },
      { text: '🏝️ ⛵', pos: 'top-1/3 right-[8%]', delay: 2, duration: 10 },
      { text: '🪸 🐚', pos: 'top-[58%] left-[10%]', delay: 1.5, duration: 11 },
      { text: '🦀 🐙', pos: 'top-[75%] right-[12%]', delay: 3, duration: 12 },
      { text: '🌟 🫧', pos: 'bottom-20 left-[22%]', delay: 2.5, duration: 7 },
    ],
  },
  space: {
    meshBlobs: [
      { color: 'bg-purple-300/35', pos: '-top-32 -left-32' },
      { color: 'bg-violet-300/30', pos: 'top-1/4 -right-32' },
      { color: 'bg-fuchsia-200/35', pos: 'top-2/3 -left-32' },
      { color: 'bg-indigo-300/30', pos: '-bottom-32 right-1/4' },
    ],
    doodles: [
      { text: '🚀 ✨', pos: 'top-28 left-[16%]', delay: 0, duration: 7 },
      { text: '🪐 ⭐', pos: 'top-72 left-[6%]', delay: 1, duration: 9 },
      { text: '🛸 🌠', pos: 'top-1/3 right-[8%]', delay: 2, duration: 8 },
      { text: '👨‍🚀 🛰️', pos: 'top-[58%] left-[10%]', delay: 1.5, duration: 10 },
      { text: '🌌 🔭', pos: 'top-[75%] right-[12%]', delay: 3, duration: 11 },
      { text: '✨ 🪐', pos: 'bottom-20 left-[22%]', delay: 2.5, duration: 8 },
    ],
  },
  jungle: {
    meshBlobs: [
      { color: 'bg-emerald-300/35', pos: '-top-32 -left-32' },
      { color: 'bg-green-300/30', pos: 'top-1/4 -right-32' },
      { color: 'bg-lime-200/35', pos: 'top-2/3 -left-32' },
      { color: 'bg-teal-200/30', pos: '-bottom-32 right-1/4' },
    ],
    doodles: [
      { text: '🌴 🌿', pos: 'top-28 left-[16%]', delay: 0, duration: 8 },
      { text: '🦖 🍃', pos: 'top-72 left-[6%]', delay: 1, duration: 10 },
      { text: '🐵 🍌', pos: 'top-1/3 right-[8%]', delay: 2, duration: 9 },
      { text: '🦋 🌸', pos: 'top-[58%] left-[10%]', delay: 1.5, duration: 8 },
      { text: '🦜 🏕️', pos: 'top-[75%] right-[12%]', delay: 3, duration: 11 },
      { text: '🌳 🍄', pos: 'bottom-20 left-[22%]', delay: 2.5, duration: 9 },
    ],
  },
  candy: {
    meshBlobs: [
      { color: 'bg-pink-300/35', pos: '-top-32 -left-32' },
      { color: 'bg-rose-300/30', pos: 'top-1/4 -right-32' },
      { color: 'bg-fuchsia-200/35', pos: 'top-2/3 -left-32' },
      { color: 'bg-amber-200/30', pos: '-bottom-32 right-1/4' },
    ],
    doodles: [
      { text: '🍭 🍬', pos: 'top-28 left-[16%]', delay: 0, duration: 7 },
      { text: '🧁 🍓', pos: 'top-72 left-[6%]', delay: 1, duration: 8 },
      { text: '🍩 🍦', pos: 'top-1/3 right-[8%]', delay: 2, duration: 9 },
      { text: '🌈 🍰', pos: 'top-[58%] left-[10%]', delay: 1.5, duration: 10 },
      { text: '🍫 🍧', pos: 'top-[75%] right-[12%]', delay: 3, duration: 11 },
      { text: '🍪 🍬', pos: 'bottom-20 left-[22%]', delay: 2.5, duration: 8 },
    ],
  },
  sunny: {
    meshBlobs: [
      { color: 'bg-amber-300/35', pos: '-top-32 -left-32' },
      { color: 'bg-yellow-300/30', pos: 'top-1/4 -right-32' },
      { color: 'bg-orange-200/35', pos: 'top-2/3 -left-32' },
      { color: 'bg-amber-200/30', pos: '-bottom-32 right-1/4' },
    ],
    doodles: [
      { text: '☀️ 🌻', pos: 'top-28 left-[16%]', delay: 0, duration: 8 },
      { text: '🎈 🐝', pos: 'top-72 left-[6%]', delay: 1, duration: 9 },
      { text: '🌼 🏕️', pos: 'top-1/3 right-[8%]', delay: 2, duration: 10 },
      { text: '🪁 🌞', pos: 'top-[58%] left-[10%]', delay: 1.5, duration: 9 },
      { text: '⛺ 🌻', pos: 'top-[75%] right-[12%]', delay: 3, duration: 12 },
      { text: '✨ ☀️', pos: 'bottom-20 left-[22%]', delay: 2.5, duration: 8 },
    ],
  },
};

export const CuteDoodleBackground: React.FC<CuteDoodleBackgroundProps> = ({ theme = 'ocean' }) => {
  const currentConfig = THEME_VISUALS[theme] || THEME_VISUALS.ocean;
  const shouldCalmMotion = useCalmMotion();

  if (shouldCalmMotion) {
    return (
      <div
        data-ambient-motion="static"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        {currentConfig.doodles.slice(0, 3).map((doodle, idx) => (
          <span
            key={`${theme}-${idx}`}
            className={`absolute ${doodle.pos} text-2xl opacity-35 sm:text-3xl`}
          >
            {doodle.text}
          </span>
        ))}
        <div className="absolute inset-0 bg-dots opacity-30" />
      </div>
    );
  }

  return (
    <div
      data-ambient-motion="animated"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transition-colors duration-500"
      aria-hidden="true"
    >
      {/* Soft Pastel Mesh Gradients */}
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          {currentConfig.meshBlobs.map((blob, idx) => (
            <div
              key={idx}
              className={`absolute w-96 h-96 rounded-full blur-3xl transition-all duration-700 ${blob.color} ${blob.pos}`}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Floating Clouds */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-10 text-white/75 drop-shadow-sm opacity-80"
      >
        <svg width="120" height="70" viewBox="0 0 120 70" fill="currentColor">
          <path d="M25,55 a20,20 0 0,1 0,-40 a25,25 0 0,1 45,-10 a28,28 0 0,1 40,20 a18,18 0 0,1 -5,30 z" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 15, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-36 right-16 text-white/80 drop-shadow-sm opacity-70 hidden md:block"
      >
        <svg width="150" height="85" viewBox="0 0 120 70" fill="currentColor">
          <path d="M25,55 a20,20 0 0,1 0,-40 a25,25 0 0,1 45,-10 a28,28 0 0,1 40,20 a18,18 0 0,1 -5,30 z" />
        </svg>
      </motion.div>

      {/* Cute Themed Floating Doodles */}
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          {currentConfig.doodles.map((doodle, idx) => (
            <motion.div
              key={idx}
              animate={{
                y: [0, -15, 0],
                rotate: [0, (idx % 2 === 0 ? 8 : -8), 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: doodle.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: doodle.delay,
              }}
              className={`absolute ${doodle.pos} text-3xl sm:text-4xl select-none filter drop-shadow-xs opacity-75`}
            >
              {doodle.text}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Dotted Grid Overlay */}
      <div className="absolute inset-0 bg-dots opacity-40" />
    </div>
  );
};
