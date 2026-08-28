import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, RefreshCw, Sparkles, ArrowUp, ArrowDown, ArrowLeft as ArrowL, ArrowRight as ArrowR } from 'lucide-react';
import { GradeLevel } from '../../../types';
import { soundManager } from '../../../utils/audio';

interface MazeGameProps {
  onBack: () => void;
  onReward: (stars: number, xp: number) => void;
  currentGrade: GradeLevel;
}

// 0: path, 1: wall, 2: start, 3: goal
const MAZE_LEVELS = [
  {
    id: 1,
    name: 'Màn 1: Khu Vườn Xanh',
    grid: [
      [2, 0, 1, 0, 0],
      [1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 1, 3],
    ],
    start: [0, 0],
    goal: [4, 4],
  },
  {
    id: 2,
    name: 'Màn 2: Rừng Nấm Diệu Kỳ',
    grid: [
      [2, 0, 0, 1, 0, 0],
      [1, 1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 1, 0],
      [1, 1, 1, 0, 0, 3],
    ],
    start: [0, 0],
    goal: [5, 5],
  },
  {
    id: 3,
    name: 'Màn 3: Lâu Đài Bí Mật',
    grid: [
      [2, 0, 1, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 1, 0],
      [0, 0, 0, 0, 1, 0, 0],
      [1, 1, 0, 1, 1, 0, 1],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 1, 3],
    ],
    start: [0, 0],
    goal: [6, 6],
  },
];

export const MazeGame: React.FC<MazeGameProps> = ({
  onBack,
  onReward,
}) => {
  const [levelIdx, setLevelIdx] = useState(0);
  const [playerPos, setPlayerPos] = useState<[number, number]>([0, 0]);
  const [steps, setSteps] = useState(0);
  const [isLevelComplete, setIsLevelComplete] = useState(false);
  const [isAllComplete, setIsAllComplete] = useState(false);

  const currentLevel = MAZE_LEVELS[levelIdx];

  const initLevel = (idx: number) => {
    setLevelIdx(idx);
    setPlayerPos(MAZE_LEVELS[idx].start as [number, number]);
    setSteps(0);
    setIsLevelComplete(false);
  };

  useEffect(() => {
    initLevel(0);
  }, []);

  const movePlayer = (dr: number, dc: number) => {
    if (isLevelComplete || isAllComplete) return;

    const [r, c] = playerPos;
    const nr = r + dr;
    const nc = c + dc;
    const grid = currentLevel.grid;

    // Check bounds
    if (nr < 0 || nr >= grid.length || nc < 0 || nc >= grid[0].length) {
      soundManager.playIncorrect();
      return;
    }

    // Check wall
    if (grid[nr][nc] === 1) {
      soundManager.playIncorrect();
      return;
    }

    // Valid move
    soundManager.playPop();
    setPlayerPos([nr, nc]);
    setSteps((prev) => prev + 1);

    // Check goal
    if (nr === currentLevel.goal[0] && nc === currentLevel.goal[1]) {
      soundManager.playCorrect();
      setIsLevelComplete(true);

      setTimeout(() => {
        if (levelIdx + 1 < MAZE_LEVELS.length) {
          initLevel(levelIdx + 1);
        } else {
          soundManager.playVictory();
          onReward(3, 100);
          setIsAllComplete(true);
        }
      }, 1200);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp', 'KeyW'].includes(e.code)) movePlayer(-1, 0);
      if (['ArrowDown', 'KeyS'].includes(e.code)) movePlayer(1, 0);
      if (['ArrowLeft', 'KeyA'].includes(e.code)) movePlayer(0, -1);
      if (['ArrowRight', 'KeyD'].includes(e.code)) movePlayer(0, 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playerPos, isLevelComplete, isAllComplete]);

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

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-100/90 px-3.5 py-1.5 font-baloo font-black text-sm text-emerald-900 shadow-2xs border border-emerald-200">
            <span>{currentLevel.name}</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-amber-100/90 px-3.5 py-1.5 font-baloo font-black text-sm text-amber-900 shadow-2xs border border-amber-200">
            <span>Bước đi: <strong>{steps}</strong></span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative overflow-hidden rounded-4xl border-2 border-white/90 bg-[#fffdfa]/95 p-5 sm:p-8 shadow-washi">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-extrabold text-emerald-700 uppercase tracking-wider font-baloo border border-emerald-200 mb-2">
            <span>🌀 Mê Cung Diệu Kỳ</span>
          </div>
          <h2 className="font-baloo text-2xl sm:text-3xl font-extrabold text-brand-dark">
            Dẫn bạn Thỏ 🐰 vượt mê cung đến Ngôi sao vàng ⭐
          </h2>
        </div>

        {isAllComplete ? (
          <div className="text-center py-10 space-y-6">
            <div className="inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-emerald-500 text-5xl shadow-pop-md animate-bounce text-white">
              🌟
            </div>
            <div>
              <h3 className="font-baloo text-3xl sm:text-4xl font-black text-brand-dark">
                Tuyệt Đỉnh! Bé Đã Phá Đảo Mê Cung!
              </h3>
              <p className="mt-2 font-vietnam text-base font-semibold text-slate-600">
                Khả năng quan sát và định hướng không gian của bé cực kỳ sắc bén!
              </p>
            </div>
            <div className="flex justify-center gap-4 pt-4 flex-wrap">
              <button
                onClick={() => initLevel(0)}
                className="flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 font-baloo font-extrabold text-base text-white shadow-pop-sm hover:bg-emerald-700 transition-all cursor-pointer"
              >
                <RefreshCw size={18} />
                <span>Chơi lại từ đầu</span>
              </button>
              <button
                onClick={onBack}
                className="flex items-center gap-2 rounded-2xl bg-amber-400 px-6 py-3 font-baloo font-extrabold text-base text-amber-950 shadow-pop-sm hover:bg-amber-300 transition-all cursor-pointer"
              >
                <Sparkles size={18} />
                <span>Chọn trò chơi khác</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Maze Grid */}
            <div className="p-4 sm:p-6 rounded-3xl bg-emerald-50/70 border-4 border-emerald-200 shadow-inner">
              <div
                className="grid gap-1 sm:gap-2"
                style={{
                  gridTemplateColumns: `repeat(${currentLevel.grid[0].length}, minmax(0, 1fr))`,
                }}
              >
                {currentLevel.grid.map((row, rIdx) =>
                  row.map((cell, cIdx) => {
                    const isPlayerHere = playerPos[0] === rIdx && playerPos[1] === cIdx;
                    const isGoal = cell === 3;
                    const isWall = cell === 1;

                    return (
                      <div
                        key={`${rIdx}-${cIdx}`}
                        onClick={() => {
                          // Click adjacent cell to move
                          const dr = rIdx - playerPos[0];
                          const dc = cIdx - playerPos[1];
                          if (Math.abs(dr) + Math.abs(dc) === 1) {
                            movePlayer(dr, dc);
                          }
                        }}
                        className={`h-12 w-12 sm:h-14 sm:w-14 rounded-2xl flex items-center justify-center font-bold text-2xl transition-all select-none ${
                          isWall
                            ? 'bg-emerald-800 border-2 border-emerald-900 shadow-sm'
                            : isGoal
                            ? 'bg-amber-100 border-2 border-amber-300 shadow-sm animate-pulse'
                            : 'bg-white border border-emerald-100 hover:bg-emerald-100/50 cursor-pointer'
                        }`}
                      >
                        {isPlayerHere ? (
                          <motion.span
                            layoutId="player-mascot"
                            className="text-3xl filter drop-shadow-sm"
                          >
                            🐰
                          </motion.span>
                        ) : isGoal ? (
                          <span className="text-3xl">⭐</span>
                        ) : isWall ? (
                          <span className="text-sm opacity-50">🌳</span>
                        ) : null}
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* D-Pad Navigation Controls */}
            <div className="flex flex-col items-center gap-2">
              <span className="font-baloo font-bold text-xs text-slate-500 mb-1">
                Phím điều khiển:
              </span>
              <button
                onClick={() => movePlayer(-1, 0)}
                className="h-14 w-14 rounded-2xl bg-white hover:bg-emerald-50 border-2 border-slate-200 hover:border-emerald-300 shadow-pop-sm flex items-center justify-center text-slate-700 active:translate-y-1 transition-all cursor-pointer"
                title="Đi lên (Mũi tên lên)"
                aria-label="Đi lên"
              >
                <ArrowUp size={24} />
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => movePlayer(0, -1)}
                  className="h-14 w-14 rounded-2xl bg-white hover:bg-emerald-50 border-2 border-slate-200 hover:border-emerald-300 shadow-pop-sm flex items-center justify-center text-slate-700 active:translate-y-1 transition-all cursor-pointer"
                  title="Sang trái (Mũi tên trái)"
                  aria-label="Sang trái"
                >
                  <ArrowL size={24} />
                </button>
                <button
                  onClick={() => movePlayer(1, 0)}
                  className="h-14 w-14 rounded-2xl bg-white hover:bg-emerald-50 border-2 border-slate-200 hover:border-emerald-300 shadow-pop-sm flex items-center justify-center text-slate-700 active:translate-y-1 transition-all cursor-pointer"
                  title="Đi xuống (Mũi tên xuống)"
                  aria-label="Đi xuống"
                >
                  <ArrowDown size={24} />
                </button>
                <button
                  onClick={() => movePlayer(0, 1)}
                  className="h-14 w-14 rounded-2xl bg-white hover:bg-emerald-50 border-2 border-slate-200 hover:border-emerald-300 shadow-pop-sm flex items-center justify-center text-slate-700 active:translate-y-1 transition-all cursor-pointer"
                  title="Sang phải (Mũi tên phải)"
                  aria-label="Sang phải"
                >
                  <ArrowR size={24} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
