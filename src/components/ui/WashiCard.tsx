import React from 'react';
import { motion } from 'framer-motion';

interface WashiCardProps {
  children: React.ReactNode;
  tiltDegree?: number; // e.g. -1.5, 1.2, 0
  washiColor?: string;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export const WashiCard: React.FC<WashiCardProps> = ({
  children,
  tiltDegree = 0,
  washiColor = 'rgba(255, 178, 66, 0.45)',
  className = '',
  onClick,
  hoverEffect = true,
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { rotate: 0, y: -6, transition: { duration: 0.25, ease: 'easeOut' } } : undefined}
      whileTap={onClick ? { scale: 0.98, transition: { duration: 0.1 } } : undefined}
      style={{ rotate: `${tiltDegree}deg` }}
      onClick={onClick}
      className={`group relative rounded-3xl border-2 border-white/90 bg-white/95 p-5 sm:p-6 shadow-washi transition-shadow duration-300 hover:shadow-washi-hover ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Washi Tape Strip on Top */}
      {washiColor && (
        <span
          aria-hidden="true"
          className="washi-tape"
          style={{ backgroundColor: washiColor }}
        />
      )}
      
      {/* Card Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
