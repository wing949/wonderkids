import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, Sparkles, RefreshCw, X } from 'lucide-react';
import { MascotId } from '../../types';
import { MASCOTS } from '../../data/gamificationData';
import { soundManager } from '../../utils/audio';
import { useCalmMotion } from '../../hooks/useCalmMotion';

interface MascotCompanionProps {
  mascotId: MascotId;
  mood?: 'greeting' | 'cheer' | 'win' | 'tryAgain' | 'rest';
  customMessage?: string;
  onMascotChange?: (id: MascotId) => void;
  size?: 'sm' | 'md' | 'lg';
  showSpeechBubble?: boolean;
}

export const MascotCompanion: React.FC<MascotCompanionProps> = ({
  mascotId,
  mood = 'greeting',
  customMessage,
  onMascotChange,
  size = 'md',
  showSpeechBubble = true,
}) => {
  const [showSelector, setShowSelector] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldCalmMotion = useCalmMotion();
  const mascot = MASCOTS[mascotId] || MASCOTS.bobo;
  const currentQuote = customMessage || mascot.quotes[mood];

  useEffect(() => {
    if (!showSelector) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowSelector(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSelector]);

  const sizeDimensions = {
    sm: 'w-12 h-12 text-2xl',
    md: 'w-16 h-16 sm:w-20 sm:h-20 text-4xl sm:text-5xl',
    lg: 'w-24 h-24 sm:w-28 sm:h-28 text-6xl sm:text-7xl',
  };

  const mascotImages: Record<string, string> = {
    bobo: '/assets/bobo_math.jpg',
    miumiu: '/assets/miumiu_story.jpg',
    pipi: '/assets/pipi_english.jpg',
    bipbip: '/assets/bipbip_logic.jpg',
    lion: '/assets/mascots/mascot_lion.jpg',
    dino: '/assets/mascots/mascot_dino.jpg',
    bunny: '/assets/mascots/mascot_bunny.jpg',
    bear: '/assets/mascots/mascot_bear.jpg',
    cat: '/assets/mascots/mascot_cat.jpg',
    puppy: '/assets/mascots/mascot_puppy.jpg',
    panda: '/assets/mascots/mascot_panda.jpg',
    unicorn: '/assets/mascots/mascot_unicorn.jpg',
    penguin: '/assets/mascots/mascot_penguin.jpg',
    koala: '/assets/mascots/mascot_koala.jpg',
    tiger: '/assets/mascots/mascot_tiger.jpg',
    astronaut: '/assets/mascots/mascot_astronaut.jpg',
    princess: '/assets/mascots/mascot_princess.jpg',
  };

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundManager.speakText(currentQuote, mascotId === 'pipi' ? 'en-US' : 'vi-VN');
  };

  return (
    <div ref={containerRef} className="relative inline-flex items-center gap-3">
      {/* Mascot Avatar with Animation */}
      <div className="relative group">
        <motion.div
          animate={shouldCalmMotion ? undefined : {
            y: [0, -6, 0],
            rotate: mood === 'win' ? [0, -8, 8, 0] : [0, -2, 2, 0],
          }}
          transition={shouldCalmMotion ? undefined : {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          onClick={() => {
            soundManager.playPop();
            if (onMascotChange) setShowSelector(!showSelector);
          }}
          className={`flex items-center justify-center rounded-3xl border-3 border-white shadow-lg cursor-pointer transition-transform hover:scale-105 active:scale-95 overflow-hidden ${sizeDimensions[size]}`}
          style={{ backgroundColor: `${mascot.color}25` }}
          title={`Bạn đồng hành: ${mascot.name} (${mascot.title}) - Nhấn để đổi bạn khác`}
        >
          {mascotImages[mascotId] ? (
            <img
              src={mascotImages[mascotId]}
              alt={mascot.name}
              className="h-full w-full object-cover rounded-3xl"
            />
          ) : (
            <span>{mascot.avatar}</span>
          )}

          {/* Online Glowing Dot */}
          <span className="absolute bottom-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
          </span>
        </motion.div>

        {/* Change Mascot Tooltip / Badge */}
        {onMascotChange && (
          <button
            onClick={() => setShowSelector(!showSelector)}
            className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md text-slate-600 hover:text-brand-dark transition-colors cursor-pointer"
            title="Đổi bạn đồng hành"
          >
            <RefreshCw size={12} />
          </button>
        )}
      </div>

      {/* Speech Bubble */}
      {showSpeechBubble && (
        <motion.div
          initial={{ opacity: 0, x: -10, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          key={currentQuote}
          className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-slate-50/90 rounded-3xl p-3.5 sm:p-4.5"
        >
          {/* Bubble Pointer Arrow */}
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-6 border-t-transparent border-r-8 border-r-slate-50/90 border-b-6 border-b-transparent" />

          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 font-baloo font-extrabold text-xs sm:text-sm" style={{ color: mascot.color }}>
                <Sparkles size={14} className="shrink-0" />
                <span className="truncate">{mascot.name} • {mascot.title}</span>
              </div>
              <p className="mt-1 font-vietnam font-semibold text-brand-dark text-xs sm:text-sm md:text-base leading-relaxed">
                {currentQuote}
              </p>
            </div>

            {/* Read aloud button */}
            <button
              onClick={handleSpeak}
              className="shrink-0 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-emerald-100 hover:text-emerald-700 transition-colors cursor-pointer"
              title="Nghe giọng nói của Mascot"
            >
              <Volume2 size={16} />
            </button>
          </div>
        </motion.div>
      )}

      {/* Mascot Selection Dropdown / Floating Dialog */}
      <AnimatePresence>
        {showSelector && onMascotChange && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 top-full mt-3 z-50 w-84 sm:w-[420px] max-h-[440px] overflow-y-auto rounded-3xl border-3 border-amber-300 bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.25)] custom-scrollbar"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
              <h4 className="font-baloo font-bold text-sm text-brand-dark flex items-center gap-1.5">
                <Sparkles size={16} className="text-amber-500" />
                <span>Chọn Bạn Đồng Hành 3D Disney:</span>
              </h4>
              <button
                onClick={() => setShowSelector(false)}
                className="h-7 w-7 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {(Object.keys(MASCOTS) as MascotId[]).map((mId) => {
                const m = MASCOTS[mId];
                const isSelected = mId === mascotId;
                const img = mascotImages[mId];
                return (
                  <button
                    key={mId}
                    onClick={() => {
                      soundManager.playPop();
                      onMascotChange(mId);
                      setShowSelector(false);
                    }}
                    className={`flex items-center gap-2.5 p-2 rounded-2xl border-2 transition-all cursor-pointer text-left ${
                      isSelected
                        ? 'border-amber-400 bg-amber-50/90 shadow-sm font-extrabold ring-2 ring-amber-300'
                        : 'border-slate-100 hover:border-amber-200 bg-slate-50/80 hover:bg-white hover:shadow-xs'
                    }`}
                  >
                    <div className="h-12 w-12 shrink-0 rounded-xl overflow-hidden flex items-center justify-center bg-white shadow-2xs border border-slate-200">
                      {img ? (
                        <img src={img} alt={m.name} className="h-full w-full object-cover" />
                      ) : (
                        <span className="text-2xl">{m.avatar}</span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-baloo font-bold text-xs text-brand-dark truncate">{m.name}</div>
                      <div className="text-[10px] text-slate-500 truncate">{m.badge || m.title}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
