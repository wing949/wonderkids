import React from 'react';
import { motion } from 'framer-motion';
import { soundManager } from '../../utils/audio';

interface LessonThematicBadgeProps {
  lessonId?: string;
  lessonNumber?: number;
  lessonTitle?: string;
  subject?: string;
  grade?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

interface BadgeConfig {
  emoji: string;
  secondaryEmoji?: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  label: string;
  animationType?: 'bounce' | 'pulse' | 'wiggle';
}

export const getLessonBadgeConfig = (
  title: string = '',
  lessonNumber?: number,
  subject: string = 'vietnamese',
  lessonId: string = '',
  _grade: number = 2
): BadgeConfig => {
  const lower = title.toLowerCase();
  const num = lessonNumber || (lessonId.match(/b(\d+)/) ? parseInt(lessonId.match(/b(\d+)/)![1]) : 1);

  // Specific check for Lesson 2 (Ngày hôm qua đâu rồi? / Time / Calendar theme)
  if (lower.includes('ngày hôm qua') || lower.includes('tờ lịch') || lower.includes('thời gian') || num === 2 && lower.includes('bài 2')) {
    return {
      emoji: '📅',
      secondaryEmoji: '⏰',
      bgColor: 'from-amber-100 via-orange-100 to-yellow-200',
      borderColor: 'border-amber-300',
      textColor: 'text-amber-900',
      label: 'Thời Gian',
      animationType: 'wiggle',
    };
  }

  // Vietnamese Grade 1 Phonics & Letters
  if (lower.includes('a a') || lower.includes('b b') || lower.includes('c c') || lower.includes('âm chữ')) {
    return {
      emoji: '🔤',
      secondaryEmoji: '🎈',
      bgColor: 'from-pink-100 via-rose-100 to-purple-200',
      borderColor: 'border-pink-300',
      textColor: 'text-pink-900',
      label: 'Âm Chữ',
      animationType: 'bounce',
    };
  }

  // School, Reading & Student life
  if (lower.includes('học sinh') || lower.includes('trường') || lower.includes('nhãn vở') || lower.includes('sách') || lower.includes('giờ học')) {
    return {
      emoji: '🎒',
      secondaryEmoji: '📚',
      bgColor: 'from-blue-100 via-sky-100 to-indigo-200',
      borderColor: 'border-sky-300',
      textColor: 'text-sky-900',
      label: 'Trường Lớp',
      animationType: 'bounce',
    };
  }

  // Nature, Seasons, Weather, Plants
  if (lower.includes('mùa') || lower.includes('hoa') || lower.includes('cây') || lower.includes('mưa') || lower.includes('gió') || lower.includes('rừng') || lower.includes('trái đất') || lower.includes('biển')) {
    return {
      emoji: '🌱',
      secondaryEmoji: '🌈',
      bgColor: 'from-emerald-100 via-teal-100 to-green-200',
      borderColor: 'border-emerald-300',
      textColor: 'text-emerald-900',
      label: 'Thiên Nhiên',
      animationType: 'pulse',
    };
  }

  // Animals & Fairy tales / Fables
  if (lower.includes('dế mèn') || lower.includes('nhím') || lower.includes('ong') || lower.includes('voi') || lower.includes('sói') || lower.includes('cá') || lower.includes('chim') || lower.includes('cậu bé thông minh') || lower.includes('cổ tích')) {
    return {
      emoji: '🦊',
      secondaryEmoji: '✨',
      bgColor: 'from-orange-100 via-amber-100 to-amber-200',
      borderColor: 'border-orange-300',
      textColor: 'text-orange-900',
      label: 'Truyện Hay',
      animationType: 'wiggle',
    };
  }

  // Family, Love, Morals, Health
  if (lower.includes('bà') || lower.includes('mẹ') || lower.includes('bác hồ') || lower.includes('lời chào') || lower.includes('rửa tay') || lower.includes('yêu thương') || lower.includes('thầy')) {
    return {
      emoji: '❤️',
      secondaryEmoji: '🌟',
      bgColor: 'from-rose-100 via-pink-100 to-red-200',
      borderColor: 'border-rose-300',
      textColor: 'text-rose-900',
      label: 'Yêu Thương',
      animationType: 'pulse',
    };
  }

  // History, Homeland, Country
  if (lower.includes('quê hương') || lower.includes('tổ quốc') || lower.includes('đất nước') || lower.includes('đền hùng') || lower.includes('cờ đỏ') || lower.includes('hải quân')) {
    return {
      emoji: '🇻🇳',
      secondaryEmoji: '⭐',
      bgColor: 'from-red-100 via-amber-100 to-yellow-200',
      borderColor: 'border-red-300',
      textColor: 'text-red-900',
      label: 'Quê Hương',
      animationType: 'bounce',
    };
  }

  // WonderKids Arena / Supplement
  if (lower.includes('đấu trường') || lower.includes('trạng nguyên') || lower.includes('bổ trợ') || lower.includes('ôn tập')) {
    return {
      emoji: '👑',
      secondaryEmoji: '🏆',
      bgColor: 'from-purple-100 via-violet-100 to-fuchsia-200',
      borderColor: 'border-purple-300',
      textColor: 'text-purple-900',
      label: 'Trạng Nguyên',
      animationType: 'wiggle',
    };
  }

  // Math subject
  if (subject === 'math') {
    return {
      emoji: '🧮',
      secondaryEmoji: '⚡',
      bgColor: 'from-cyan-100 via-blue-100 to-indigo-200',
      borderColor: 'border-cyan-300',
      textColor: 'text-cyan-900',
      label: 'Toán Học',
      animationType: 'bounce',
    };
  }

  // English subject
  if (subject === 'english') {
    return {
      emoji: '🇬🇧',
      secondaryEmoji: '💬',
      bgColor: 'from-violet-100 via-purple-100 to-pink-200',
      borderColor: 'border-violet-300',
      textColor: 'text-violet-900',
      label: 'Tiếng Anh',
      animationType: 'bounce',
    };
  }

  // Default lesson badge
  return {
    emoji: '📖',
    secondaryEmoji: '⭐',
    bgColor: 'from-amber-100 via-orange-100 to-yellow-100',
    borderColor: 'border-amber-300',
    textColor: 'text-amber-900',
    label: `Bài ${num}`,
    animationType: 'wiggle',
  };
};

export const LessonThematicBadge: React.FC<LessonThematicBadgeProps> = ({
  lessonId = '',
  lessonNumber,
  lessonTitle = '',
  subject = 'vietnamese',
  grade = 2,
  size = 'md',
  className = '',
}) => {
  const config = getLessonBadgeConfig(lessonTitle, lessonNumber, subject, lessonId, grade);
  const num = lessonNumber || (lessonId.match(/b(\d+)/) ? parseInt(lessonId.match(/b(\d+)/)![1]) : 2);

  const sizeClasses = {
    sm: 'w-12 h-12 text-xl',
    md: 'w-16 h-16 sm:w-20 sm:h-20 text-3xl sm:text-4xl',
    lg: 'w-20 h-20 sm:w-24 sm:h-24 text-4xl sm:text-5xl',
  };

  const handleTap = () => {
    soundManager.playPop();
  };

  return (
    <div
      onClick={handleTap}
      className={`relative inline-flex items-center justify-center select-none cursor-pointer group ${className}`}
      title={`${lessonTitle} — ${config.label}`}
    >
      {/* Outer Glowing Pulsing Ring */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute inset-0 rounded-full bg-gradient-to-tr ${config.bgColor} blur-sm -z-10`}
      />

      {/* Main 3D Tactile Sticker Container */}
      <motion.div
        whileHover={{ scale: 1.12, rotate: [-2, 2, -2] }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={`relative ${sizeClasses[size]} rounded-3xl bg-gradient-to-br ${config.bgColor} border-4 border-white shadow-pop-md flex flex-col items-center justify-center transform -rotate-3 transition-transform duration-300`}
      >
        {/* Main Thematic Emoji */}
        <span className="leading-none filter drop-shadow-xs transform group-hover:scale-110 transition-transform">
          {config.emoji}
        </span>

        {/* Secondary Corner Sticker Accent */}
        {config.secondaryEmoji && (
          <motion.span
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-1.5 -right-1.5 text-xs sm:text-sm bg-white/95 rounded-full p-0.5 shadow-xs border border-amber-200/60 leading-none"
          >
            {config.secondaryEmoji}
          </motion.span>
        )}

        {/* Lesson Number Tag at Bottom */}
        <div className="absolute -bottom-2 bg-white/95 border border-amber-200 px-2 py-0.5 rounded-full shadow-2xs">
          <span className="font-baloo font-black text-[10px] sm:text-xs text-amber-900 tracking-tight whitespace-nowrap">
            Bài {num}
          </span>
        </div>
      </motion.div>
    </div>
  );
};
