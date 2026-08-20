import React, { useState } from 'react';
import { Trophy, Star, Flame, Shield, CheckCircle2, User, Sparkles, Check, Heart, Edit3 } from 'lucide-react';
import { StudentProfile, GradeLevel } from '../../types';
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
  const [motto, setMotto] = useState(profile.motto || MOTTO_PRESETS[0]);
  const [isSavedRecently, setIsSavedRecently] = useState(false);

  const currentAvatar = CUTE_ANIMAL_AVATARS.find((a) => a.id === selectedAvatarId) || CUTE_ANIMAL_AVATARS[0];
  const unlockedBadgesCount = BADGES_LIST.filter((b) => b.isUnlocked).length;

  const handleSave = () => {
    soundManager.playVictory();
    // Map avatarId back to mascot if it matches
    const mascotKey = ['bobo', 'miumiu', 'pipi', 'bipbip'].includes(selectedAvatarId)
      ? selectedAvatarId
      : profile.selectedMascot;

    onUpdateProfile({
      name: name.trim() || 'Bé An Nhiên',
      grade: selectedGrade,
      avatarId: selectedAvatarId,
      selectedMascot: mascotKey as any,
      motto: motto,
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
      <div className="space-y-5">
        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <button
            onClick={() => {
              soundManager.playPop();
              setActiveTab('edit');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-baloo font-black text-sm transition-all cursor-pointer ${
              activeTab === 'edit'
                ? 'bg-amber-400 text-brand-dark shadow-xs border-2 border-amber-500 scale-102'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <User size={16} />
            <span>🐾 Hồ Sơ & Đổi Avatar</span>
          </button>

          <button
            onClick={() => {
              soundManager.playPop();
              setActiveTab('achievements');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-baloo font-black text-sm transition-all cursor-pointer ${
              activeTab === 'achievements'
                ? 'bg-purple-500 text-white shadow-xs border-2 border-purple-600 scale-102'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Trophy size={16} />
            <span>🏆 Thành Tích & Huy Hiệu</span>
          </button>
        </div>

        {/* TAB 1: EDIT PROFILE & CUTE ANIMAL AVATARS */}
        {activeTab === 'edit' && (
          <div className="space-y-5">
            {/* Live Profile Card Preview */}
            <div className="flex flex-col sm:flex-row items-center gap-4 rounded-3xl border-3 border-amber-300 bg-gradient-to-br from-amber-50/90 via-orange-50/70 to-yellow-50/90 p-4 sm:p-5 shadow-washi">
              {/* Avatar Highlight Preview */}
              <div className="relative group">
                <div
                  className="flex h-24 w-24 items-center justify-center rounded-3xl border-4 border-white text-5xl shadow-pop-sm transition-transform group-hover:scale-105"
                  style={{ backgroundColor: currentAvatar.bgColor, borderColor: currentAvatar.borderColor }}
                >
                  <span className="animate-bounce-subtle">{currentAvatar.emoji}</span>
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
                <label className="font-baloo font-extrabold text-sm text-brand-dark flex items-center gap-1.5">
                  <Edit3 size={15} className="text-amber-500" />
                  <span>Tên / Biệt Danh Của Bé:</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nhập tên của bé..."
                  maxLength={30}
                  className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-2.5 font-baloo font-bold text-base text-brand-dark focus:border-amber-400 focus:outline-none shadow-inner"
                />
              </div>

              {/* Grade Selector */}
              <div className="space-y-1.5">
                <label className="font-baloo font-extrabold text-sm text-brand-dark flex items-center gap-1.5">
                  <span>Khối Lớp Đang Học:</span>
                </label>
                <div className="flex items-center gap-1.5">
                  {([1, 2, 3, 4, 5] as GradeLevel[]).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => {
                        soundManager.playPop();
                        setSelectedGrade(g);
                      }}
                      className={`flex-1 py-2 rounded-xl font-baloo font-black text-xs sm:text-sm transition-all border-2 cursor-pointer ${
                        selectedGrade === g
                          ? 'bg-emerald-500 text-white border-emerald-600 shadow-xs scale-105'
                          : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
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
                  <span>Chọn Avatar Con Vật Ngộ Nghĩnh (16 nhân vật):</span>
                </label>
                <span className="font-baloo text-xs font-bold text-slate-500">
                  Đang chọn: {currentAvatar.name}
                </span>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5 max-h-56 overflow-y-auto p-1 scrollbar-thin">
                {CUTE_ANIMAL_AVATARS.map((item) => {
                  const isSelected = item.id === selectedAvatarId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        soundManager.playPop();
                        setSelectedAvatarId(item.id);
                      }}
                      title={`${item.name} - ${item.description}`}
                      className={`group relative flex flex-col items-center justify-center p-2 rounded-2xl border-2 transition-all cursor-pointer text-center ${
                        isSelected
                          ? 'border-amber-400 ring-3 ring-amber-300 shadow-pop-xs scale-105'
                          : 'border-slate-200 hover:border-slate-300 hover:scale-102 bg-white'
                      }`}
                      style={{ backgroundColor: isSelected ? item.bgColor : undefined }}
                    >
                      <span className="text-3xl transition-transform group-hover:scale-110">
                        {item.emoji}
                      </span>
                      <span className="mt-1 font-baloo font-bold text-[10px] sm:text-[11px] text-slate-700 leading-none truncate w-full">
                        {item.name.split(' ')[0]}
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
                    className={`px-3 py-1 rounded-xl font-vietnam text-xs font-semibold transition-all border text-left cursor-pointer ${
                      motto === m
                        ? 'bg-amber-100 text-amber-900 border-amber-300 font-bold shadow-2xs'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Save Button Action */}
            <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-2xl font-baloo font-bold text-sm text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Đóng
              </button>

              <button
                type="button"
                onClick={handleSave}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl font-baloo font-black text-sm text-amber-950 transition-all shadow-pop-xs cursor-pointer border-2 ${
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
