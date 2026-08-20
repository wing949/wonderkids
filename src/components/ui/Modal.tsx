import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { soundManager } from '../../utils/audio';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  icon?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  icon,
  children,
  maxWidth = 'lg',
}) => {
  useEffect(() => {
    if (isOpen) {
      soundManager.playPop();
    }
  }, [isOpen]);

  const maxWidthStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-2xl',
    '2xl': 'max-w-4xl',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className={`relative z-10 w-full ${maxWidthStyles[maxWidth]} overflow-hidden rounded-4xl border-4 border-white bg-white/95 p-6 sm:p-8 shadow-2xl`}
          >
            {/* Header */}
            {(title || icon) && (
              <div className="mb-5 flex items-start justify-between gap-4 border-b border-slate-100 pb-3.5">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  {icon && <span className="text-3xl shrink-0 select-none mt-0.5">{icon}</span>}
                  {title && (
                    <h3 className="font-baloo text-xl sm:text-2xl font-extrabold text-brand-dark leading-snug">
                      {title}
                    </h3>
                  )}
                </div>
                <button
                  onClick={onClose}
                  aria-label="Đóng"
                  className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-rose-100 hover:text-rose-600 active:scale-95 cursor-pointer"
                >
                  <X size={18} strokeWidth={2.5} />
                </button>
              </div>
            )}

            {/* Modal Body */}
            <div>{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
