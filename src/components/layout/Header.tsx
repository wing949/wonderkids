import React from 'react';
import { Flame, Star, Gem, ShieldCheck, UserCheck, BookOpen, Trophy, ShoppingBag } from 'lucide-react';
import { GradeLevel, ThemeId, PortalView, StudentProfile } from '../../types';
import { CUTE_ANIMAL_AVATARS } from '../../data/gamificationData';
import { soundManager } from '../../utils/audio';

interface HeaderProps {
  profile: StudentProfile;
  currentGrade: GradeLevel;
  onGradeChange: (grade: GradeLevel) => void;
  currentTheme: ThemeId;
  onThemeChange: (theme: ThemeId) => void;
  currentPortal: PortalView;
  onPortalChange: (portal: PortalView) => void;
  onOpenShop: () => void;
  onOpenBadges: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  profile,
  currentGrade,
  onGradeChange,
  currentTheme,
  onThemeChange,
  currentPortal,
  onPortalChange,
  onOpenShop,
  onOpenBadges,
}) => {
  const currentAvatarEmoji = CUTE_ANIMAL_AVATARS.find((a) => a.id === (profile.avatarId || profile.selectedMascot))?.emoji || '🦉';

  const themes: { id: ThemeId; label: string; icon: string }[] = [
    { id: 'ocean', label: 'Biển Xanh', icon: '🌊' },
    { id: 'space', label: 'Vũ Trụ', icon: '🚀' },
    { id: 'jungle', label: 'Rừng Xanh', icon: '🌴' },
    { id: 'candy', label: 'Kẹo Ngọt', icon: '🍬' },
    { id: 'sunny', label: 'Nắng Ấm', icon: '☀️' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/80 bg-white/85 backdrop-blur-md shadow-sm transition-colors">
      <div className="mx-auto flex h-16 sm:h-20 max-w-[1520px] items-center justify-between gap-2 px-3 sm:px-6 lg:px-8">
        {/* Left: Logo & Portal Badges */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => {
              soundManager.playPop();
              onPortalChange('student');
            }}
            className="flex items-center gap-2 text-left group"
          >
            <div className="flex h-11 w-11 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-2xl shadow-pop-sm group-hover:scale-105 transition-transform">
              🌟
            </div>
            <div className="shrink-0">
              <div className="flex items-center gap-1.5 font-baloo font-extrabold text-lg sm:text-2xl text-brand-dark tracking-tight leading-none whitespace-nowrap">
                <span>WonderKids</span>
                <span className="text-amber-500 font-extrabold text-sm sm:text-base">VN</span>
              </div>
              <p className="text-[11px] sm:text-xs font-bold text-slate-500 font-vietnam hidden sm:block whitespace-nowrap">
                Vương Quốc Tri Thức Tiểu Học
              </p>
            </div>
          </button>

          {/* Grade Selector Pills */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/80 shrink-0">
            {([1, 2, 3, 4, 5] as GradeLevel[]).map((g) => {
              const isSelected = g === currentGrade;
              return (
                <button
                  key={g}
                  onClick={() => {
                    soundManager.playPop();
                    onGradeChange(g);
                  }}
                  className={`px-3 py-1 rounded-full font-baloo font-extrabold text-xs transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-emerald-500 text-white shadow-sm scale-105'
                      : 'text-slate-600 hover:text-brand-dark hover:bg-white/60'
                  }`}
                >
                  Lớp {g}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Gamification Badges & Portals */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Kid Profile / Avatar Button (Opens ProfileModal) */}
          <button
            onClick={() => {
              soundManager.playPop();
              onOpenBadges();
            }}
            className="flex items-center gap-1.5 sm:gap-2 rounded-full border-2 border-amber-300 bg-gradient-to-r from-amber-100 to-yellow-100 px-2.5 sm:px-3 py-1 shadow-sm hover:scale-105 transition-transform shrink-0 cursor-pointer"
            title="Hồ sơ & Avatar của bé (Nhấn để chọn 16 con vật ngộ nghĩnh)"
          >
            <span className="text-lg sm:text-xl leading-none">{currentAvatarEmoji}</span>
            <span className="font-baloo font-black text-xs sm:text-sm text-brand-dark hidden md:inline truncate max-w-[90px]">
              {profile.name}
            </span>
          </button>

          {/* Streak Badge */}
          <div
            className="flex items-center gap-1 sm:gap-1.5 rounded-full border-2 border-orange-200 bg-orange-50/90 px-2.5 sm:px-3 py-1 text-orange-700 shadow-sm shrink-0 whitespace-nowrap"
            title={`Chuỗi học tập liên tục: ${profile.streak} ngày`}
          >
            <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 fill-orange-500 animate-bounce-subtle shrink-0" />
            <span className="font-baloo font-extrabold text-xs sm:text-sm">{profile.streak}</span>
            <span className="text-[10px] font-bold hidden xl:inline">ngày</span>
          </div>

          {/* Star Coins */}
          <button
            onClick={() => {
              soundManager.playPop();
              onOpenShop();
            }}
            className="flex items-center gap-1 sm:gap-1.5 rounded-full border-2 border-amber-200 bg-amber-50/90 px-2.5 sm:px-3 py-1 text-amber-800 shadow-sm hover:scale-105 transition-transform shrink-0 whitespace-nowrap"
            title="Ngôi sao tích lũy (Nhấn để mở Cửa hàng đổi quà)"
          >
            <Star className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 fill-amber-400 shrink-0" />
            <span className="font-baloo font-extrabold text-xs sm:text-sm">{profile.stars}</span>
          </button>

          {/* Gems */}
          <div
            className="hidden sm:flex items-center gap-1 sm:gap-1.5 rounded-full border-2 border-sky-200 bg-sky-50/90 px-2.5 sm:px-3 py-1 text-sky-800 shadow-sm shrink-0 whitespace-nowrap"
            title="Kim cương năng lượng"
          >
            <Gem className="h-4 w-4 text-sky-500 fill-sky-400 shrink-0" />
            <span className="font-baloo font-extrabold text-xs sm:text-sm">{profile.gems}</span>
          </div>

          {/* Badges / Trophy Button */}
          <button
            onClick={() => {
              soundManager.playPop();
              onOpenBadges();
            }}
            className="hidden sm:flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-purple-100 hover:text-purple-700 transition-colors"
            title="Bộ sưu tập Huy hiệu"
          >
            <Trophy size={18} />
          </button>

          {/* Shop Button */}
          <button
            onClick={() => {
              soundManager.playPop();
              onOpenShop();
            }}
            className="hidden sm:flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-amber-100 hover:text-amber-700 transition-colors"
            title="Cửa hàng đổi quà"
          >
            <ShoppingBag size={18} />
          </button>

          {/* Theme Selector Pill */}
          <div className="relative group hidden md:block shrink-0">
            <button
              className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 shadow-2xs hover:scale-105 transition-transform text-lg cursor-pointer"
              title={`Đổi chủ đề giao diện (Đang chọn: ${themes.find((t) => t.id === currentTheme)?.label || 'Biển Xanh'})`}
            >
              <span>{themes.find((t) => t.id === currentTheme)?.icon || '🌊'}</span>
            </button>
            <div className="absolute right-0 top-full mt-2 hidden group-hover:flex flex-col gap-1 rounded-2xl border-2 border-white bg-white/95 p-2 shadow-xl backdrop-blur z-50 w-40 animate-fade-in">
              <div className="px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-baloo">
                Chủ đề thế giới:
              </div>
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    soundManager.playPop();
                    onThemeChange(t.id);
                  }}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all text-left whitespace-nowrap cursor-pointer ${
                    currentTheme === t.id
                      ? 'bg-amber-100/90 text-amber-900 border border-amber-300/80 shadow-2xs font-extrabold'
                      : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{t.icon}</span>
                    <span>{t.label}</span>
                  </div>
                  {currentTheme === t.id && <span className="text-amber-600 font-black text-xs">✓</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Portal Switcher (Góc Bé / Phụ Huynh / Quản Trị) - Desktop Only */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1 rounded-full border border-slate-200 shrink-0">
            <button
              onClick={() => {
                soundManager.playPop();
                onPortalChange('student');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-baloo font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                currentPortal === 'student' || currentPortal === 'adventure' || currentPortal === 'exercise'
                  ? 'bg-amber-400 text-brand-dark shadow-sm'
                  : 'text-slate-600 hover:text-brand-dark hover:bg-white/50'
              }`}
            >
              <BookOpen size={15} className="shrink-0" />
              <span className="whitespace-nowrap">Góc Bé</span>
            </button>

            <button
              onClick={() => {
                soundManager.playPop();
                onPortalChange('parent');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-baloo font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                currentPortal === 'parent'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-brand-dark hover:bg-white/50'
              }`}
            >
              <UserCheck size={15} className="shrink-0" />
              <span className="whitespace-nowrap">Phụ Huynh</span>
            </button>

            <button
              onClick={() => {
                soundManager.playPop();
                onPortalChange('admin');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-baloo font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
                currentPortal === 'admin'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-600 hover:text-brand-dark hover:bg-white/50'
              }`}
            >
              <ShieldCheck size={15} className="shrink-0" />
              <span className="whitespace-nowrap">Quản Trị</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
