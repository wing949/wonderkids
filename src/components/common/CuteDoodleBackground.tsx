import React from 'react';
import { motion } from 'framer-motion';

export const CuteDoodleBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Soft Pastel Mesh Gradients */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-200/35 blur-3xl" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="absolute top-2/3 -left-32 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-pink-200/35 blur-3xl" />

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

      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -8, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        className="absolute top-2/3 right-1/3 text-white/60 drop-shadow-sm opacity-60 hidden lg:block"
      >
        <svg width="90" height="50" viewBox="0 0 120 70" fill="currentColor">
          <path d="M25,55 a20,20 0 0,1 0,-40 a25,25 0 0,1 45,-10 a28,28 0 0,1 40,20 a18,18 0 0,1 -5,30 z" />
        </svg>
      </motion.div>

      {/* Cute Floating Math & Learning Doodles */}
      {/* 1. Sparkle Star Top Left */}
      <motion.div
        animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-28 left-[18%] text-amber-400/40 text-3xl font-baloo font-black"
      >
        ✨
      </motion.div>

      {/* 2. Number 1 2 3 Bubble */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-72 left-[6%] text-sky-400/30 text-2xl font-baloo font-extrabold"
      >
        1 + 2 = 3 ✏️
      </motion.div>

      {/* 3. Planet / Rainbow */}
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute top-1/3 right-[8%] text-purple-400/35 text-3xl font-baloo"
      >
        🪐 ⭐
      </motion.div>

      {/* 4. Alphabet A B C */}
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-[58%] left-[10%] text-emerald-500/30 text-2xl font-baloo font-extrabold hidden md:block"
      >
        A B C 📖
      </motion.div>

      {/* 5. Paper Airplane */}
      <motion.div
        animate={{ x: [0, 25, 0], y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute top-[75%] right-[12%] text-rose-400/35 text-3xl hidden md:block"
      >
        ✈️ 🎨
      </motion.div>

      {/* 6. Math Pi and Star */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-20 left-[22%] text-amber-500/35 text-2xl font-baloo font-black"
      >
        🌟 🎈
      </motion.div>

      {/* Dotted Grid Overlay */}
      <div className="absolute inset-0 bg-dots opacity-40" />
    </div>
  );
};
