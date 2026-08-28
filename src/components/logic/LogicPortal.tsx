import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { GradeLevel, StudentProfile } from '../../types';
import { LOGIC_GAMES_METADATA } from '../../data/logicGamesData';
import { MissingObjectGame } from './games/MissingObjectGame';
import { MemoryMatchGame } from './games/MemoryMatchGame';
import { PatternSequenceGame } from './games/PatternSequenceGame';
import { MazeGame } from './games/MazeGame';
import { CandyProgressBar } from '../ui/CandyProgressBar';
import { soundManager } from '../../utils/audio';

interface LogicPortalProps {
  profile: StudentProfile;
  currentGrade: GradeLevel;
  onGradeChange: (grade: GradeLevel) => void;
  onBackToStudent: () => void;
  onRewardStars?: (stars: number, xp: number) => void;
  initialGameId?: string;
}

export const LogicPortal: React.FC<LogicPortalProps> = ({
  profile,
  currentGrade,
  onGradeChange,
  onBackToStudent,
  onRewardStars,
  initialGameId,
}) => {
  const [activeGameId, setActiveGameId] = useState<string | null>(initialGameId || null);

  const handleReward = (stars: number, xp: number) => {
    if (onRewardStars) {
      onRewardStars(stars, xp);
    }
  };

  const handleSelectGame = (gameId: string) => {
    soundManager.playPop();
    setActiveGameId(gameId);
  };

  const handleBackToHub = () => {
    soundManager.playPop();
    setActiveGameId(null);
  };

  // Render Active Minigame
  if (activeGameId === 'vat-gi-bien-mat') {
    return (
      <MissingObjectGame
        onBack={handleBackToHub}
        onReward={handleReward}
        currentGrade={currentGrade}
      />
    );
  }

  if (activeGameId === 'lat-the-tim-doi') {
    return (
      <MemoryMatchGame
        onBack={handleBackToHub}
        onReward={handleReward}
        currentGrade={currentGrade}
      />
    );
  }

  if (activeGameId === 'tim-quy-luat') {
    return (
      <PatternSequenceGame
        onBack={handleBackToHub}
        onReward={handleReward}
        currentGrade={currentGrade}
      />
    );
  }

  if (activeGameId === 'me-cung') {
    return (
      <MazeGame
        onBack={handleBackToHub}
        onReward={handleReward}
        currentGrade={currentGrade}
      />
    );
  }

  // Render Logic Hub Home
  return (
    <div className="relative pb-24 pt-6 sm:pt-10 font-baloo">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 left-10 h-72 w-72 rounded-full bg-purple-100/50 blur-3xl" />
        <div className="absolute top-40 right-10 h-80 w-80 rounded-full bg-pink-100/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navigation & Grade Selector Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              soundManager.playPop();
              onBackToStudent();
            }}
            className="flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-2.5 font-baloo font-extrabold text-sm sm:text-base text-slate-700 shadow-sm hover:bg-white hover:scale-105 transition-all border border-slate-200 cursor-pointer"
          >
            <ArrowLeft size={18} />
            <span>Trang Chủ</span>
          </button>

          {/* Grade Selector */}
          <div className="flex items-center gap-1 bg-white/90 p-1 rounded-full border border-slate-200 shadow-2xs">
            {([1, 2, 3, 4, 5] as GradeLevel[]).map((g) => (
              <button
                key={g}
                onClick={() => {
                  soundManager.playPop();
                  onGradeChange(g);
                }}
                className={`px-3 py-1 rounded-full font-baloo font-extrabold text-xs transition-all cursor-pointer ${
                  g === currentGrade
                    ? 'bg-purple-600 text-white shadow-2xs scale-105'
                    : 'text-slate-600 hover:bg-purple-50 hover:text-purple-700'
                }`}
              >
                Lớp {g}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Section: Matching MyKidSpace Logic Standard */}
        <header className="relative text-center py-6 sm:py-8 rounded-4xl border-2 border-white/90 bg-gradient-to-b from-white/95 to-purple-50/70 p-6 shadow-washi">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 font-baloo font-extrabold text-xs sm:text-sm text-purple-900 border border-purple-200 mb-2">
            <span>🦉 BÉ TƯ DUY</span>
          </div>

          <h1 className="font-baloo font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight leading-tight">
            Hôm nay mình chơi gì nào?
          </h1>

          <p className="mt-2 mx-auto max-w-2xl font-vietnam text-sm sm:text-base font-semibold text-slate-600 leading-relaxed">
            Góc tư duy của bé: luyện trí nhớ, chú ý và suy luận qua các trò chơi logic vui nhộn.
          </p>

          {/* Mascot Greeting */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 border border-purple-200/80 shadow-2xs">
            <span className="text-2xl">🦉</span>
            <span className="font-vietnam text-xs sm:text-sm font-bold text-purple-900">
              Bíp Bíp sẵn sàng đồng hành cùng bé {profile?.name || 'yêu'} rèn luyện trí tuệ mỗi ngày! ✨
            </span>
          </div>
        </header>

        {/* 4 Games Grid Cards (Scrapbook Washi Style - 2 Columns Horizontal Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {LOGIC_GAMES_METADATA.map((game) => (
            <motion.div
              key={game.id}
              onClick={() => handleSelectGame(game.id)}
              whileHover={{ scale: 1.02, rotate: 0, translateY: -6 }}
              style={{ rotate: `${game.tilt}deg` }}
              className="group relative flex h-full flex-col sm:grid sm:grid-cols-[40%_1fr] sm:items-stretch rounded-[1.5rem] sm:rounded-[2rem] border-2 border-white/90 bg-[#fffdf9]/95 p-3 sm:p-4 shadow-washi transition-all duration-300 hover:rotate-0 hover:-translate-y-2 hover:shadow-2xl cursor-pointer select-none"
            >
              {/* Washi Tape Strip at Top Center */}
              <span
                aria-hidden="true"
                className="absolute -top-2.5 sm:-top-3.5 left-1/2 h-5 sm:h-6 w-20 sm:w-28 -translate-x-1/2 rotate-[-4deg] rounded-[4px] shadow-2xs z-10 pointer-events-none"
                style={{ backgroundColor: game.washiColor }}
              />

              {/* Left Column: Big Cover Illustration with Mascot */}
              <div className="relative h-44 sm:h-auto sm:min-h-52 overflow-hidden rounded-[1.2rem] sm:rounded-[1.5rem] bg-[#f4efe8] shadow-xs flex items-center justify-center">
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

                {/* Floating Icon Badge on Corner */}
                <span className="absolute top-2.5 left-2.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/90 backdrop-blur text-2xl shadow-xs border border-white">
                  {game.icon}
                </span>
              </div>

              {/* Right Column: Title, Subtitle, Description & Progress */}
              <div className="flex flex-1 flex-col justify-between px-1.5 pt-3 pb-1 sm:px-4 sm:py-2">
                <div>
                  {/* Top Header Row with Badge Pill */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="px-3 py-1 rounded-full font-baloo font-extrabold text-xs shadow-2xs"
                      style={{ backgroundColor: `${game.themeColor}18`, color: game.themeColor }}
                    >
                      {game.badgeText}
                    </span>
                  </div>

                  {/* Game Name & Subtitle */}
                  <h3
                    className="font-baloo text-2xl sm:text-[1.75rem] font-black tracking-tight leading-tight mt-2"
                    style={{ color: game.themeColor }}
                  >
                    {game.title}
                  </h3>
                  <p className="font-baloo font-bold text-sm text-brand-dark mt-0.5">
                    {game.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-2 font-vietnam text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed text-justify line-clamp-3">
                    {game.description}
                  </p>
                </div>

                {/* Bottom Progress Bar & Enter Action Link */}
                <div className="mt-4 pt-3 border-t border-slate-100/90">
                  <div className="mb-2.5">
                    <div className="flex justify-between text-xs font-bold text-slate-500 mb-1 font-baloo">
                      <span>Tiến độ trò chơi:</span>
                      <span>{game.progressPercent}%</span>
                    </div>
                    <CandyProgressBar
                      value={game.progressPercent}
                      max={100}
                      color={game.candyColor}
                      height="sm"
                      showStarIndicator={false}
                    />
                  </div>

                  <div className="flex justify-end pt-1">
                    <span
                      className="inline-flex items-center gap-1.5 font-baloo font-black text-sm sm:text-base group-hover:translate-x-1 transition-transform"
                      style={{ color: game.themeColor }}
                    >
                      <span>Vào chơi ngay</span>
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
