import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, Sparkles, RefreshCw } from 'lucide-react';
import { MascotId } from '../../types';
import { MASCOTS } from '../../data/gamificationData';
import { soundManager } from '../../utils/audio';

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
  const mascot = MASCOTS[mascotId] || MASCOTS.bobo;
  const currentQuote = customMessage || mascot.quotes[mood];

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundManager.speakText(currentQuote, mascotId === 'pipi' ? 'en-US' : 'vi-VN');
  };

  const sizeDimensions = {
    sm: 'w-12 h-12 text-2xl',
    md: 'w-16 h-16 sm:w-20 sm:h-20 text-4xl sm:text-5xl',
    lg: 'w-24 h-24 sm:w-28 sm:h-28 text-6xl sm:text-7xl',
  };

  const mascotImages: Record<string, string> = {
    bobo: '/assets/bobo_math.jpg',
    miumiu: '/assets/miumiu_story.jpg',
    pipi: '/assets/pipi_english.jpg',
  };

  return (
    <div className="relative inline-flex items-center gap-3">
      {/* Mascot Avatar with Animation */}
      <div className="relative group">
        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: mood === 'win' ? [0, -8, 8, 0] : [0, -2, 2, 0],
          }}
          transition={{
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
            className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md text-slate-600 hover:text-brand-dark transition-colors"
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
          className="relative max-w-xs sm:max-w-sm rounded-3xl border-2 border-white/90 bg-white/95 p-3.5 sm:p-4 shadow-bubble"
        >
          {/* Bubble Pointer Arrow */}
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white border-b-8 border-b-transparent" />

          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-1.5 font-baloo font-bold text-xs" style={{ color: mascot.color }}>
                <Sparkles size={12} />
                <span>{mascot.name} • {mascot.title}</span>
              </div>
              <p className="mt-1 font-vietnam text-xs sm:text-sm font-semibold text-brand-dark leading-relaxed">
                {currentQuote}
              </p>
            </div>

            {/* Read aloud button */}
            <button
              onClick={handleSpeak}
              className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-emerald-100 hover:text-emerald-700 transition-colors"
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
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute left-0 top-full mt-3 z-30 w-72 rounded-3xl border-3 border-white bg-white/95 p-4 shadow-2xl backdrop-blur-md"
          >
            <h4 className="font-baloo font-bold text-sm text-brand-dark mb-2">
              Chọn Bạn Đồng Hành Yêu Thích:
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(MASCOTS) as MascotId[]).map((mId) => {
                const m = MASCOTS[mId];
                const isSelected = mId === mascotId;
                return (
                  <button
                    key={mId}
                    onClick={() => {
                      soundManager.playPop();
                      onMascotChange(mId);
                      setShowSelector(false);
                    }}
                    className={`flex items-center gap-2 p-2.5 rounded-2xl border-2 transition-all ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-50 shadow-sm'
                        : 'border-slate-100 hover:border-slate-300 bg-slate-50/50'
                    }`}
                  >
                    <span className="text-2xl">{m.avatar}</span>
                    <div className="text-left">
                      <div className="font-baloo font-bold text-xs text-brand-dark">{m.name}</div>
                      <div className="text-[10px] text-slate-500">{m.badge}</div>
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
