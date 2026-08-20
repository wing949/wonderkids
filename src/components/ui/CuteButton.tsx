import React from 'react';
import { soundManager } from '../../utils/audio';

interface CuteButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'math' | 'vietnamese' | 'english' | 'logic' | 'amber' | 'danger' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  noSound?: boolean;
}

export const CuteButton: React.FC<CuteButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  noSound = false,
  className = '',
  onClick,
  disabled,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !noSound) {
      soundManager.playPop();
    }
    onClick?.(e);
  };

  // Base styles: 3D bounce tactile feel
  const baseStyles = "inline-flex flex-row items-center justify-center font-baloo font-bold whitespace-nowrap select-none cursor-pointer transition-all duration-150 active:translate-y-1 rounded-full outline-none focus-visible:ring-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-y-0 disabled:shadow-none";

  // Size variations (minimum 48px height on touch for child accessibility)
  const sizeStyles = {
    sm: "px-4 py-1.5 text-sm min-h-[38px] gap-1.5 shadow-pop-sm",
    md: "px-6 py-2.5 text-base sm:text-lg min-h-[48px] gap-2 shadow-pop-md",
    lg: "px-8 py-3 text-lg sm:text-xl min-h-[56px] gap-2.5 shadow-pop-lg",
    xl: "px-10 py-4 text-xl sm:text-2xl min-h-[64px] gap-3 shadow-pop-lg",
  };

  // Color & 3D Extrusion Variants
  const variantStyles = {
    primary: "bg-emerald-500 hover:bg-emerald-400 text-white shadow-[#047857] active:shadow-none focus-visible:ring-emerald-300",
    math: "bg-math hover:bg-math-dark text-white shadow-pop-math active:shadow-none focus-visible:ring-emerald-300",
    vietnamese: "bg-vietnamese hover:bg-vietnamese-dark text-white shadow-pop-vietnamese active:shadow-none focus-visible:ring-amber-300",
    english: "bg-english hover:bg-english-dark text-white shadow-pop-english active:shadow-none focus-visible:ring-sky-300",
    logic: "bg-logic hover:bg-logic-dark text-white shadow-pop-logic active:shadow-none focus-visible:ring-purple-300",
    amber: "bg-amber-400 hover:bg-amber-300 text-brand-dark shadow-[#B45309] active:shadow-none focus-visible:ring-amber-200",
    danger: "bg-rose-500 hover:bg-rose-400 text-white shadow-[#BE123C] active:shadow-none focus-visible:ring-rose-300",
    white: "bg-white hover:bg-slate-50 text-brand-dark border-2 border-slate-200 shadow-slate-300 active:shadow-none focus-visible:ring-slate-200",
    ghost: "bg-transparent hover:bg-black/5 text-brand-dark shadow-none active:translate-y-0 focus-visible:ring-slate-300",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0 flex items-center">{icon}</span>}
      <span className="inline-flex flex-row items-center gap-1.5 whitespace-nowrap">{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0 flex items-center">{icon}</span>}
    </button>
  );
};
