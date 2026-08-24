import React, { useState } from 'react';
import { Trophy, Star, Flame, Shield, CheckCircle2, User, Sparkles, Check, Heart, Edit3 } from 'lucide-react';
import { StudentProfile, GradeLevel, ThemeId } from '../../types';
import { BADGES_LIST, CUTE_ANIMAL_AVATARS } from '../../data/gamificationData';
import { Modal } from '../ui/Modal';
import { CandyProgressBar } from '../ui/CandyProgressBar';
import { soundManager } from '../../utils/audio';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: StudentProfile;
  onUpdateProfile: (updated: Partial<StudentProfile>) => void;
}

const MOTTO_PRESETS = [
  '🌟 Mỗi ngày học một chút, vui là chính!',
  '🚀 Tự tin khám phá thế giới tri thức!',
  '🦁 Chăm chỉ luyện tập, rinh quà rương báu!',
  '💖 Yêu toán học, thích đọc truyện tranh!',
  '🎨 Bé thông minh, nhanh nhẹn và sáng tạo!'
];

const PROFILE_THEME_OPTIONS = [
  { id: 'ocean', label: 'Biển Xanh', icon: '🌊', surface: '#E0F2FE', textClass: 'text-sky-950', ringClass: 'ring-sky-400' },
  { id: 'space', label: 'Vũ Trụ', icon: '🚀', surface: '#EDE9FE', textClass: 'text-purple-950', ringClass: 'ring-purple-400' },
  { id: 'jungle', label: 'Rừng Xanh', icon: '🌴', surface: '#D1FAE5', textClass: 'text-emerald-950', ringClass: 'ring-emerald-400' },
  { id: 'candy', label: 'Kẹo Ngọt', icon: '🍬', surface: '#FCE7F3', textClass: 'text-pink-950', ringClass: 'ring-pink-400' },
  { id: 'sunny', label: 'Nắng Ấm', icon: '☀️', surface: '#FEF3C7', textClass: 'text-amber-950', ringClass: 'ring-amber-400' },
] as const;

export const MASCOT_3D_IMAGES: Record<string, string> = {
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

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
}) => {
  const [activeTab, setActiveTab] = useState<'edit' | 'achievements'>('edit');
  const [name, setName] = useState(profile.name);
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(profile.grade);
  const [selectedAvatarId, setSelectedAvatarId] = useState<string>(profile.avatarId || profile.selectedMascot || 'bobo');
  const [selectedTheme, setSelectedTheme] = useState<ThemeId>(profile.theme || 'ocean');
  const [motto, setMotto] = useState(profile.motto || MOTTO_PRESETS[0]);
  const [isSavedRecently, setIsSavedRecently] = useState(false);

  const currentAvatar = CUTE_ANIMAL_AVATARS.find((a) => a.id === selectedAvatarId) || CUTE_ANIMAL_AVATARS[0];
  const unlockedBadgesCount = BADGES_LIST.filter((b) => b.isUnlocked).length;

  const handleSave = () => {
    soundManager.playVictory();
    const mascotKey = selectedAvatarId;

    onUpdateProfile({
      name: name.trim() || 'Bé An Nhiên',
      grade: selectedGrade,
      avatarId: selectedAvatarId,
      selectedMascot: mascotKey as any,
      motto: motto,
      theme: selectedTheme,
    });

    setIsSavedRecently(true);
    setTimeout(() => {
      setIsSavedRecently(false);
      onClose();
    }, 800);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Hồ Sơ & Avatar Của Bé"
      icon="🐾"
      maxWidth="2xl"
    >
      <div className="space-y-4 sm:space-y-5">
        {/* Tab Navigation */}
        <div className="grid grid-cols-2 gap-2 pb-2">
          <button
            onClick={() => {
              soundManager.playPop();
              setActiveTab('edit');
            }}
            className={`flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-2xl px-2 py-2 font-baloo text-sm font-black transition-all cursor-pointer sm:px-4 ${
              activeTab === 'edit'
                ? 'bg-amber-400 text-brand-dark shadow-xs scale-102'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <User size={16} />
            <span className="sm:hidden">Hồ sơ</span>
            <span className="hidden sm:inline">Hồ Sơ & Đổi Avatar</span>
          </button>

          <button
            onClick={() => {
              soundManager.playPop();
              setActiveTab('achievements');
            }}
            className={`flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-2xl px-2 py-2 font-baloo text-sm font-black transition-all cursor-pointer sm:px-4 ${
              activeTab === 'achievements'
                ? 'bg-purple-500 text-white shadow-xs scale-102'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Trophy size={16} />
            <span className="sm:hidden">Thành tích</span>
            <span className="hidden sm:inline">Thành Tích & Huy Hiệu</span>
          </button>
        </div>

        {/* TAB 1: EDIT PROFILE & CUTE ANIMAL AVATARS */}
        {activeTab === 'edit' && (
          <div className="space-y-5">
            {/* Live Profile Card Preview */}
            <div data-testid="profile-preview" className="hidden items-center gap-4 rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100/80 p-4 shadow-[0_10px_30px_rgba(180,83,9,0.10)] sm:flex sm:flex-row sm:p-5">
              {/* Avatar Highlight Preview */}
              <div className="relative group">
                <div
                  className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl text-5xl shadow-md transition-transform group-hover:scale-105"
                  style={{ backgroundColor: currentAvatar.bgColor }}
                >
                  {MASCOT_3D_IMAGES[selectedAvatarId] ? (
                    <img
                      src={MASCOT_3D_IMAGES[selectedAvatarId]}
                      alt={currentAvatar.name}
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="animate-bounce-subtle">{currentAvatar.emoji}</span>
                  )}
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 font-baloo font-black text-xs text-white border-2 border-white shadow-xs">
                  L{selectedGrade}
                </span>
              </div>

              {/* Editable Name & Info */}
              <div className="flex-1 text-center sm:text-left space-y-1.5">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h3 className="font-baloo text-2xl font-black text-brand-dark">
                    {name || 'Bé An Nhiên'}
                  </h3>
                  <span className="rounded-full bg-amber-200/90 px-3 py-0.5 font-baloo text-xs font-black text-amber-950">
                    Mã Bé: {profile.kidCode}
                  </span>
                </div>

                <p className="font-vietnam text-xs font-bold text-slate-600">
                  {currentAvatar.name} • {currentAvatar.description}
                </p>

                <p className="font-vietnam text-xs font-semibold text-amber-900/90 italic bg-amber-100/70 px-3 py-1 rounded-xl inline-block">
                  "{motto}"
                </p>
              </div>
            </div>

            {/* Form: Name & Grade */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Input Name */}
              <div className="space-y-1.5">
                <label htmlFor="kid-profile-name" className="font-baloo font-extrabold text-sm text-brand-dark flex items-center gap-1.5">
                  <Edit3 size={15} className="text-amber-500" />
                  <span>Tên / Biệt Danh Của Bé:</span>
                </label>
                <input
                  id="kid-profile-name"
                  aria-label="Tên hoặc biệt danh của bé"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nhập tên của bé..."
                  maxLength={30}
                  className="min-h-12 w-full rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-2.5 font-baloo font-bold text-base text-brand-dark shadow-inner focus:border-amber-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-200"
                />
              </div>

              {/* Grade Selector */}
              <div className="space-y-1.5">
                <label className="font-baloo font-extrabold text-sm text-brand-dark flex items-center gap-1.5">
                  <span>Khối Lớp Đang Học:</span>
                </label>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                  {([1, 2, 3, 4, 5] as GradeLevel[]).map((g) => (
                    <button
                      key={g}
                      type="button"
                      aria-label={`Chọn lớp ${g}`}
                      aria-pressed={selectedGrade === g}
                      onClick={() => {
                        soundManager.playPop();
                        setSelectedGrade(g);
                      }}
                      className={`min-h-12 whitespace-nowrap rounded-xl px-2 py-2 font-baloo text-xs font-black transition-all cursor-pointer sm:text-sm ${
                        selectedGrade === g
                          ? 'bg-emerald-500 text-white shadow-xs scale-105'
                          : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100'
                      }`}
                    >
                      Lớp {g}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mascot / Cute Animal Avatars Grid (16 Avatars inspired by mykidspace.online) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="font-baloo font-extrabold text-sm text-brand-dark flex items-center gap-1.5">
                  <Sparkles size={15} className="text-amber-500" />
                  <span>Chọn Avatar Con Vật 3D Disney (16 nhân vật):</span>
                </label>
                <span className="font-baloo text-xs font-bold text-slate-500">
                  Đang chọn: {currentAvatar.name}
                </span>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5 max-h-56 overflow-y-auto p-1 scrollbar-thin">
                {CUTE_ANIMAL_AVATARS.map((item) => {
                  const isSelected = item.id === selectedAvatarId;
                  const img = MASCOT_3D_IMAGES[item.id];
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        soundManager.playPop();
                        setSelectedAvatarId(item.id);
                      }}
                      aria-pressed={isSelected}
                      title={`${item.name} - ${item.description}`}
                      className={`group relative flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-2xl transition-all cursor-pointer text-center ${
                        isSelected
                          ? 'ring-2 ring-amber-400 shadow-[0_5px_14px_rgba(245,158,11,0.18)] scale-105'
                          : 'shadow-[0_3px_10px_rgba(46,41,78,0.06)] hover:scale-102 hover:shadow-md'
                      }`}
                      style={{ backgroundColor: item.bgColor }}
                    >
                      <div className="mb-1 flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/70 shadow-2xs sm:h-12 sm:w-12">
                        {img ? (
                          <img
                            src={img}
                            alt={item.name}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition-transform group-hover:scale-110"
                          />
                        ) : (
                          <span className="text-3xl transition-transform group-hover:scale-110">
                            {item.emoji}
                          </span>
                        )}
                      </div>
                      <span className="font-baloo font-bold text-[10px] sm:text-[11px] text-slate-700 leading-tight truncate w-full px-0.5">
                        {item.shortName || item.name}
                      </span>
                      {isSelected && (
                        <div className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-white text-[10px] font-black shadow-xs">
                          ✓
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* World Theme Selection */}
            <div className="space-y-1.5">
              <label className="font-baloo font-extrabold text-sm text-brand-dark flex items-center gap-1.5">
                <span>🎨</span>
                <span>Chủ Đề Thế Giới Học Tập:</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {PROFILE_THEME_OPTIONS.map((t) => {
                  const isThemeSelected = selectedTheme === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      aria-pressed={isThemeSelected}
                      onClick={() => {
                        soundManager.playPop();
                        setSelectedTheme(t.id as ThemeId);
                      }}
                      style={{ backgroundColor: t.surface }}
                      className={`flex min-h-12 items-center justify-center gap-1.5 rounded-2xl p-2 font-baloo text-xs font-bold transition-all cursor-pointer ${t.textClass} ${
                        isThemeSelected
                          ? `shadow-[0_4px_12px_rgba(46,41,78,0.10)] scale-102 font-extrabold ring-2 ${t.ringClass}`
                          : 'shadow-[0_2px_8px_rgba(46,41,78,0.05)] hover:brightness-95 hover:shadow-sm'
                      }`}
                    >
                      <span className="text-base">{t.icon}</span>
                      <span>{t.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Learning Motto Quick Pick */}
            <div className="space-y-1.5">
              <label className="font-baloo font-extrabold text-sm text-brand-dark flex items-center gap-1.5">
                <Heart size={15} className="text-rose-500" />
                <span>Khẩu Hiệu Học Tập Yêu Thích:</span>
              </label>
              <div className="flex flex-wrap gap-1.5">
                {MOTTO_PRESETS.map((m, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      soundManager.playPop();
                      setMotto(m);
                    }}
                    className={`px-3 py-1 rounded-xl font-vietnam text-xs font-semibold transition-all text-left cursor-pointer ${
                      motto === m
                        ? 'bg-amber-100 text-amber-900 font-bold shadow-2xs ring-1 ring-amber-300'
                        : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/80'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Save Button Action */}
            <div className="sticky bottom-0 z-10 -mx-1 flex items-center justify-end gap-2 border-t border-slate-100 bg-white/95 px-1 pb-1 pt-3 sm:gap-3">
              <button
                type="button"
                onClick={onClose}
                className="min-h-12 whitespace-nowrap rounded-2xl px-4 py-2.5 font-baloo text-sm font-bold text-slate-600 transition-colors hover:bg-slate-100 sm:px-5"
              >
                Đóng
              </button>

              <button
                type="button"
                onClick={handleSave}
                className={`flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-2xl border-2 px-4 py-2.5 font-baloo text-sm font-black text-amber-950 transition-all shadow-pop-xs cursor-pointer sm:px-6 ${
                  isSavedRecently
                    ? 'bg-emerald-400 border-emerald-500 text-white'
                    : 'bg-amber-400 hover:bg-amber-500 border-amber-500 active:scale-95'
                }`}
              >
                {isSavedRecently ? (
                  <>
                    <Check size={18} />
                    <span>Đã Lưu Thành Công! 🎉</span>
                  </>
                ) : (
                  <>
                    <span>💾 Lưu Hồ Sơ & Avatar</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: ACHIEVEMENTS & BADGES */}
        {activeTab === 'achievements' && (
          <div className="space-y-5">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-2xl border-2 border-orange-200 bg-orange-50/80 p-3.5 text-center">
                <Flame className="mx-auto h-6 w-6 text-orange-500" />
                <div className="font-baloo font-black text-2xl text-brand-dark mt-1">{profile.streak} ngày</div>
                <span className="font-vietnam text-xs font-bold text-slate-500">Chuỗi Streak 🔥</span>
              </div>

              <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/80 p-3.5 text-center">
                <Star className="mx-auto h-6 w-6 text-amber-500 fill-amber-400" />
                <div className="font-baloo font-black text-2xl text-brand-dark mt-1">{profile.stars} ⭐</div>
                <span className="font-vietnam text-xs font-bold text-slate-500">Ngôi Sao Vàng</span>
              </div>

              <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/80 p-3.5 text-center">
                <CheckCircle2 className="mx-auto h-6 w-6 text-emerald-500" />
                <div className="font-baloo font-black text-2xl text-brand-dark mt-1">{profile.totalLessonsCompleted} bài</div>
                <span className="font-vietnam text-xs font-bold text-slate-500">Đã Hoàn Thành</span>
              </div>

              <div className="rounded-2xl border-2 border-purple-200 bg-purple-50/80 p-3.5 text-center">
                <Shield className="mx-auto h-6 w-6 text-purple-500" />
                <div className="font-baloo font-black text-2xl text-brand-dark mt-1">{profile.accuracyRate}%</div>
                <span className="font-vietnam text-xs font-bold text-slate-500">Độ Chính Xác</span>
              </div>
            </div>

            {/* Level & XP Progress Card */}
            <div className="rounded-3xl border-2 border-amber-200 bg-amber-50/60 p-4 space-y-2">
              <div className="flex justify-between items-center text-xs sm:text-sm font-baloo font-black text-brand-dark">
                <span>⚡ Cấp độ {profile.level}: Tập Sự Tri Thức</span>
                <span className="text-emerald-700">{profile.xp}/500 XP</span>
              </div>
              <CandyProgressBar value={profile.xp} max={500} color="gold" height="md" showStarIndicator={true} />
            </div>

            {/* Badges Collection Hall */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-baloo font-black text-lg text-brand-dark flex items-center gap-2">
                  <Trophy size={20} className="text-amber-500" />
                  <span>Bộ Sưu Tập Huy Hiệu Danh Dự ({unlockedBadgesCount}/{BADGES_LIST.length})</span>
                </h4>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {BADGES_LIST.map((badge) => (
                  <div
                    key={badge.id}
                    className={`rounded-2xl border-2 p-3.5 text-center transition-all ${
                      badge.isUnlocked
                        ? 'border-amber-300 bg-gradient-to-b from-amber-50 to-white shadow-xs'
                        : 'border-slate-200 bg-slate-50/50 opacity-50'
                    }`}
                  >
                    <div className="text-3xl mb-1">{badge.isUnlocked ? badge.icon : '🔒'}</div>
                    <h5 className="font-baloo font-black text-sm text-brand-dark">{badge.name}</h5>
                    <p className="font-vietnam text-xs font-medium text-slate-600 mt-1 line-clamp-2 text-justify">
                      {badge.description}
                    </p>
                    {badge.isUnlocked && badge.unlockedDate && (
                      <span className="inline-block mt-2 font-baloo text-[11px] text-amber-900 font-bold bg-amber-100 px-2 py-0.5 rounded-md">
                        Đạt: {badge.unlockedDate}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};
