import React, { useEffect, useState } from 'react';
import { ShieldCheck, Clock, CheckCircle2, Award, Plus, ArrowLeft, Eye, TrendingUp, Trash2, Check, Pencil, X } from 'lucide-react';
import { CUTE_ANIMAL_AVATARS } from '../../data/gamificationData';
import { GradeLevel, ParentReport, ParentTask, StudentProfile } from '../../types';
import type { ManagedKid } from '../../utils/parentAccount';
import { CuteButton } from '../ui/CuteButton';
import { CandyProgressBar } from '../ui/CandyProgressBar';
import { soundManager } from '../../utils/audio';
import { MASCOT_3D_IMAGES } from '../profile/ProfileModal';

interface ParentPortalProps {
  kids: ManagedKid[];
  activeKidId: string;
  report: ParentReport;
  onSelectKid: (kidId: string) => void;
  onAddKid: (profile: StudentProfile) => void;
  onUpdateKid: (kidId: string, changes: Partial<StudentProfile>) => void;
  onUpdateReport: (report: ParentReport) => void;
  onBackToStudent: () => void;
  onRewardStars?: (stars: number) => void;
}

const QUICK_CHORE_SUGGESTIONS = [
  { title: 'Gấp chăn gối sau khi ngủ dậy 🛏️', stars: 1 },
  { title: 'Tưới cây hoặc chăm sóc hoa 🪴', stars: 1 },
  { title: 'Đọc sách truyện 15 phút 📚', stars: 2 },
  { title: 'Tự rửa cốc và dọn bàn ăn 🍽️', stars: 2 },
  { title: 'Đánh răng và đi ngủ đúng giờ 🦷', stars: 1 },
  { title: 'Quét và dọn gọn phòng học 🧹', stars: 2 },
];

export const ParentPortal: React.FC<ParentPortalProps> = ({
  kids,
  activeKidId,
  report,
  onSelectKid,
  onAddKid,
  onUpdateKid,
  onUpdateReport,
  onBackToStudent,
  onRewardStars,
}) => {
  const [screenLimit, setScreenLimit] = useState(report.screenTimeLimitMinutes);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskStars, setNewTaskStars] = useState(1);
  const [activeTab, setActiveTab] = useState<'overview' | 'tasks'>('overview');
  const [profileFormMode, setProfileFormMode] = useState<'add' | 'edit' | null>(null);
  const [editingKidId, setEditingKidId] = useState<string | null>(null);
  const [kidName, setKidName] = useState('');
  const [kidGrade, setKidGrade] = useState<GradeLevel>(1);
  const [kidAvatarId, setKidAvatarId] = useState(CUTE_ANIMAL_AVATARS[0].id);

  useEffect(() => {
    setScreenLimit(report.screenTimeLimitMinutes);
    setNewTaskTitle('');
  }, [activeKidId, report.screenTimeLimitMinutes]);

  const updateReport = (updater: (current: ParentReport) => ParentReport) => {
    onUpdateReport(updater(report));
  };

  const openAddKidForm = () => {
    soundManager.playPop();
    setProfileFormMode('add');
    setEditingKidId(null);
    setKidName('');
    setKidGrade(1);
    setKidAvatarId(CUTE_ANIMAL_AVATARS[0].id);
  };

  const openEditKidForm = (kid: ManagedKid) => {
    soundManager.playPop();
    setProfileFormMode('edit');
    setEditingKidId(kid.id);
    setKidName(kid.profile.name);
    setKidGrade(kid.profile.grade);
    setKidAvatarId(kid.profile.avatarId || kid.profile.selectedMascot);
  };

  const closeKidForm = () => {
    setProfileFormMode(null);
    setEditingKidId(null);
  };

  const handleSaveKid = (event: React.FormEvent) => {
    event.preventDefault();
    const name = kidName.trim();
    if (!name) return;
    soundManager.playPop();
    if (profileFormMode === 'edit' && editingKidId) {
      onUpdateKid(editingKidId, { name, grade: kidGrade, avatarId: kidAvatarId });
    } else {
      onAddKid({
        name,
        kidCode: `WK-${Date.now().toString(36).slice(-6).toUpperCase()}`,
        grade: kidGrade,
        selectedMascot: ['bobo', 'miumiu', 'pipi', 'bipbip'].includes(kidAvatarId)
          ? kidAvatarId as StudentProfile['selectedMascot']
          : 'bobo',
        avatarId: kidAvatarId,
        motto: '🌟 Mỗi ngày học một chút, vui là chính!',
        theme: 'ocean',
        stars: 0,
        gems: 0,
        xp: 0,
        level: 1,
        streak: 0,
        streakFrozen: false,
        totalLessonsCompleted: 0,
        accuracyRate: 0,
      });
    }
    closeKidForm();
  };

  // Approve a task and grant actual stars to student
  const handleApproveTask = (task: ParentTask) => {
    soundManager.playCorrect();
    onRewardStars?.(task.rewardStars);
    updateReport((prev) => ({
      ...prev,
      parentTasks: prev.parentTasks.map((t) =>
        t.id === task.id ? { ...t, isApproved: true, isCompleted: true } : t
      ),
    }));
  };

  // Toggle completed status (e.g. kid marked finished or parent marked done)
  const handleToggleComplete = (taskId: string) => {
    soundManager.playPop();
    updateReport((prev) => ({
      ...prev,
      parentTasks: prev.parentTasks.map((t) =>
        t.id === taskId ? { ...t, isCompleted: !t.isCompleted } : t
      ),
    }));
  };

  // Delete a task
  const handleDeleteTask = (taskId: string) => {
    soundManager.playPop();
    updateReport((prev) => ({
      ...prev,
      parentTasks: prev.parentTasks.filter((t) => t.id !== taskId),
    }));
  };

  // Add a new parent task
  const handleAddTask = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!newTaskTitle.trim()) return;
    soundManager.playPop();
    const newTask: ParentTask = {
      id: `pt-${Date.now()}`,
      title: newTaskTitle.trim(),
      rewardStars: newTaskStars,
      isCompleted: false,
      isApproved: false,
    };
    updateReport((prev) => ({
      ...prev,
      parentTasks: [newTask, ...prev.parentTasks],
    }));
    setNewTaskTitle('');
  };

  // Quick add a chore from presets
  const handleQuickAdd = (preset: { title: string; stars: number }) => {
    soundManager.playPop();
    const newTask: ParentTask = {
      id: `pt-${Date.now()}`,
      title: preset.title,
      rewardStars: preset.stars,
      isCompleted: false,
      isApproved: false,
    };
    updateReport((prev) => ({
      ...prev,
      parentTasks: [newTask, ...prev.parentTasks],
    }));
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] pb-24 pt-6 sm:pt-8 bg-slate-50/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 space-y-8">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                soundManager.playPop();
                onBackToStudent();
              }}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              title="Quay lại Góc Bé"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-600 text-white">
                  <ShieldCheck size={18} />
                </span>
                <h1 className="font-baloo text-2xl sm:text-3xl font-extrabold text-brand-dark">
                  Khu Vực Dành Cho Phụ Huynh
                </h1>
              </div>
              <p className="font-vietnam text-xs sm:text-sm font-semibold text-slate-500">
                Theo dõi tiến độ, quản lý thời gian màn hình và giao việc nhà rèn luyện tính tự lập cho con.
              </p>
            </div>
          </div>

          <CuteButton
            variant="ghost"
            onClick={onBackToStudent}
            icon={<ArrowLeft size={16} />}
          >
            Về Góc Học Tập
          </CuteButton>
        </div>

        <section className="rounded-4xl border border-purple-100 bg-white/95 p-4 shadow-washi sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-baloo text-xs font-black uppercase tracking-wide text-purple-600">Tài khoản gia đình</p>
              <h2 className="font-baloo text-xl font-black text-brand-dark sm:text-2xl">Quản lý hồ sơ các Bé</h2>
              <p className="font-vietnam text-xs font-semibold text-slate-500">Chọn đúng Bé trước khi xem báo cáo hoặc giao việc.</p>
            </div>
            <button
              type="button"
              onClick={openAddKidForm}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-4 font-baloo text-sm font-black text-white shadow-[0_4px_0_#047857] transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
            >
              <Plus size={18} /> Thêm Bé
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {kids.map((kid) => {
              const avatar = CUTE_ANIMAL_AVATARS.find((item) => item.id === (kid.profile.avatarId || kid.profile.selectedMascot));
              const isActive = kid.id === activeKidId;
              return (
                <div
                  key={kid.id}
                  className={`relative flex min-h-24 items-center gap-3 rounded-3xl border-2 p-3 transition-all ${isActive
                      ? 'border-emerald-400 bg-emerald-50 shadow-[0_4px_0_#a7f3d0]'
                      : 'border-slate-200 bg-slate-50 hover:border-purple-200 hover:bg-purple-50/60'
                    }`}
                >
                  <button
                    type="button"
                    aria-label={`Chuyển sang hồ sơ ${kid.profile.name}`}
                    onClick={() => {
                      soundManager.playPop();
                      onSelectKid(kid.id);
                    }}
                    className="flex min-w-0 flex-1 items-center gap-3 text-left"
                  >
                    {(() => {
                      const avatarId = kid.profile.avatarId || kid.profile.selectedMascot || 'bobo';
                      const avatarImg = MASCOT_3D_IMAGES[avatarId];
                      return (
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm overflow-hidden border border-slate-100" aria-hidden="true">
                          {avatarImg ? (
                            <img src={avatarImg} alt={avatar?.name} className="h-full w-full object-cover" />
                          ) : (
                            avatar?.emoji || '🦉'
                          )}
                        </span>
                      );
                    })()}
                    <span className="min-w-0">
                      <span className="block truncate font-baloo text-lg font-black text-brand-dark">{kid.profile.name}</span>
                      <span className="block font-vietnam text-xs font-bold text-slate-500">Lớp {kid.profile.grade} • {kid.profile.stars} ⭐ • Cấp {kid.profile.level}</span>
                      {isActive && <span className="mt-1 inline-flex rounded-full bg-emerald-500 px-2 py-0.5 font-baloo text-[11px] font-black text-white">Đang xem</span>}
                    </span>
                  </button>
                  <button
                    type="button"
                    aria-label={`Chỉnh sửa hồ sơ ${kid.profile.name}`}
                    onClick={() => openEditKidForm(kid)}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-purple-700 shadow-sm transition-colors hover:bg-purple-100"
                  >
                    <Pencil size={17} />
                  </button>
                </div>
              );
            })}
          </div>

          {profileFormMode && (
            <form onSubmit={handleSaveKid} className="mt-4 rounded-3xl border border-purple-200 bg-purple-50/70 p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-baloo text-lg font-black text-brand-dark">
                  {profileFormMode === 'add' ? 'Thêm hồ sơ Bé mới' : 'Chỉnh sửa hồ sơ Bé'}
                </h3>
                <button type="button" onClick={closeKidForm} className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-500" aria-label="Đóng biểu mẫu">
                  <X size={18} />
                </button>
              </div>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-[1.4fr_0.7fr_1fr_auto] sm:items-end">
                <label className="font-baloo text-xs font-black text-slate-600">
                  Tên của Bé
                  <input
                    aria-label="Tên của Bé"
                    value={kidName}
                    onChange={(event) => setKidName(event.target.value)}
                    required
                    maxLength={40}
                    placeholder="Ví dụ: Bé Minh Anh"
                    className="mt-1 min-h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 font-vietnam text-sm font-semibold outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200"
                  />
                </label>
                <label className="font-baloo text-xs font-black text-slate-600">
                  Lớp của Bé
                  <select
                    aria-label="Lớp của Bé"
                    value={kidGrade}
                    onChange={(event) => setKidGrade(Number(event.target.value) as GradeLevel)}
                    className="mt-1 min-h-12 w-full rounded-2xl border border-slate-200 bg-white px-3 font-baloo text-sm font-black text-brand-dark outline-none focus:border-purple-400"
                  >
                    {[1, 2, 3, 4, 5].map((grade) => <option key={grade} value={grade}>Lớp {grade}</option>)}
                  </select>
                </label>
                <label className="font-baloo text-xs font-black text-slate-600">
                  Bạn đồng hành
                  <select
                    aria-label="Ảnh đại diện của Bé"
                    value={kidAvatarId}
                    onChange={(event) => setKidAvatarId(event.target.value)}
                    className="mt-1 min-h-12 w-full rounded-2xl border border-slate-200 bg-white px-3 font-baloo text-sm font-black text-brand-dark outline-none focus:border-purple-400"
                  >
                    {CUTE_ANIMAL_AVATARS.map((avatar) => <option key={avatar.id} value={avatar.id}>{avatar.emoji} {avatar.name}</option>)}
                  </select>
                </label>
                <button
                  type="submit"
                  className="min-h-12 rounded-2xl bg-purple-600 px-5 font-baloo text-sm font-black text-white shadow-[0_4px_0_#6d28d9] active:translate-y-1 active:shadow-none"
                >
                  {profileFormMode === 'add' ? 'Tạo hồ sơ Bé' : 'Lưu thay đổi'}
                </button>
              </div>
            </form>
          )}
        </section>

        {/* Tab Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
          <button
            type="button"
            onClick={() => {
              soundManager.playPop();
              setActiveTab('overview');
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-baloo font-bold text-sm transition-all cursor-pointer ${activeTab === 'overview'
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
          >
            <TrendingUp size={16} /> Báo Cáo Học Tập & Thời Gian
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playPop();
              setActiveTab('tasks');
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-baloo font-bold text-sm transition-all cursor-pointer ${activeTab === 'tasks'
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
          >
            <Award size={16} /> ⭐ Sổ Việc Tốt ({report.parentTasks.filter((t) => !t.isApproved).length})
          </button>
        </div>

        {/* Tab 1: Overview Stats & Subject Mastery */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Daily Screen Time */}
              <div className="rounded-3xl bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-purple-100">
                <div className="flex items-center justify-between">
                  <span className="font-baloo font-bold text-xs text-purple-700 uppercase">
                    Thời gian học hôm nay
                  </span>
                  <Clock className="h-5 w-5 text-purple-600" />
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-baloo font-extrabold text-3xl text-brand-dark">
                    {report.screenTimeUsedMinutes}
                  </span>
                  <span className="font-vietnam font-semibold text-xs text-slate-500">
                    / {screenLimit} phút (Tối đa)
                  </span>
                </div>
                <div className="mt-3">
                  <CandyProgressBar
                    value={report.screenTimeUsedMinutes}
                    max={screenLimit}
                    color="logic"
                    height="sm"
                    showStarIndicator={false}
                  />
                </div>
              </div>

              {/* Eye Protection & Limit Slider */}
              <div className="rounded-3xl bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-emerald-100 md:col-span-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-baloo font-extrabold text-base text-brand-dark">
                      Cài Đặt Giới Hạn Giờ Học & Bảo Vệ Mắt
                    </h4>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-0.5 font-baloo font-extrabold text-xs text-emerald-800 border border-emerald-200">
                    {screenLimit} Phút / Ngày
                  </span>
                </div>

                <p className="font-vietnam text-xs text-slate-500 font-medium mb-3">
                  Sau thời gian này, ứng dụng sẽ hiện thông báo Mascot nhắc nhở bé nghỉ ngơi và tập thể dục mắt.
                </p>

                <input
                  type="range"
                  min="15"
                  max="60"
                  step="5"
                  value={screenLimit}
                  onChange={(e) => {
                    const nextLimit = Number(e.target.value);
                    setScreenLimit(nextLimit);
                    onUpdateReport({ ...report, screenTimeLimitMinutes: nextLimit });
                  }}
                  className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] font-bold text-slate-400 font-baloo mt-1">
                  <span>15 phút (Bảo vệ mắt)</span>
                  <span>30 phút (Khuyên dùng)</span>
                  <span>60 phút</span>
                </div>
              </div>
            </div>

            {/* Subject Mastery & Strengths / Weaknesses */}
            <section className="rounded-4xl bg-[#fffdf9]/95 p-6 sm:p-8 shadow-washi border border-amber-100/50 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-sky-600" />
                  <h3 className="font-baloo text-xl sm:text-2xl font-extrabold text-brand-dark">
                    Báo Cáo Năng Lực 3 Môn Học
                  </h3>
                </div>
                <span className="font-baloo font-bold text-xs text-slate-400">
                  Đánh giá chuẩn GDPT 2018
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {report.subjectMastery.map((sub) => (
                  <div
                    key={sub.subject}
                    className="rounded-3xl bg-white p-4 space-y-3 shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-slate-200/80 hover:border-emerald-300 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-baloo font-extrabold text-lg text-brand-dark">
                        {sub.subject}
                      </h4>
                      <span className="font-baloo font-extrabold text-base text-emerald-600">
                        {sub.score}/100 điểm
                      </span>
                    </div>

                    <CandyProgressBar
                      value={sub.score}
                      max={100}
                      color={
                        sub.subject === 'Toán Học'
                          ? 'math'
                          : sub.subject === 'Tiếng Việt'
                            ? 'vietnamese'
                            : 'english'
                      }
                      height="sm"
                      showStarIndicator={false}
                    />

                    {/* Strengths */}
                    <div>
                      <span className="font-baloo font-bold text-xs text-emerald-700 block mb-1">
                        ✓ Điểm con làm rất tốt:
                      </span>
                      <ul className="space-y-1 font-vietnam text-xs text-slate-600">
                        {sub.strengths.map((st, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span className="text-emerald-500 font-bold">•</span>
                            <span>{st}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Weaknesses */}
                    {sub.weaknesses.length > 0 && (
                      <div className="pt-2 border-t border-slate-100">
                        <span className="font-baloo font-bold text-xs text-amber-700 block mb-1">
                          ⚠️ Cần phụ huynh cùng con ôn thêm:
                        </span>
                        <ul className="space-y-1 font-vietnam text-xs text-slate-600">
                          {sub.weaknesses.map((wk, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-amber-500 font-bold">•</span>
                              <span>{wk}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Tab 2: Parent Chores & Reward Tasks Section */}
        {activeTab === 'tasks' && (
          <section className="rounded-4xl bg-[#fffbf0] p-6 sm:p-8 shadow-washi border border-amber-200/50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-amber-200/40 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-amber-700" />
                  <h3 className="font-baloo text-xl sm:text-2xl font-extrabold text-amber-950">
                    Sổ Việc Nhà & Khen Thưởng Của Cha Mẹ
                  </h3>
                </div>
                <p className="font-vietnam text-xs sm:text-sm font-semibold text-amber-900/80 mt-0.5">
                  Giao việc tốt hàng ngày cho con. Khi con làm xong, bấm Duyệt để cộng Sao thưởng trực tiếp vào tài khoản của bé! ⭐
                </p>
              </div>
            </div>

            {/* Quick Chore Preset Chips */}
            <div className="mt-4">
              <span className="font-baloo font-bold text-xs text-amber-800/80 block mb-2">
                💡 Gợi ý việc tốt nhanh (Nhấn để thêm ngay):
              </span>
              <div className="flex flex-wrap gap-2">
                {QUICK_CHORE_SUGGESTIONS.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleQuickAdd(preset)}
                    className="rounded-xl bg-white px-3 py-1.5 font-baloo font-bold text-xs text-slate-700 shadow-2xs border border-amber-200/60 hover:bg-amber-100 hover:text-amber-950 transition-all cursor-pointer"
                  >
                    {preset.title} <span className="text-amber-600 font-black">+{preset.stars}⭐</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Add New Task Form */}
            <form onSubmit={handleAddTask} className="mt-5 flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Nhập việc nhà (Ví dụ: Tưới cây, Đọc sách 15 phút, Tự rửa cốc...)"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                className="flex-1 rounded-2xl bg-white px-4 py-2.5 font-vietnam text-sm shadow-xs outline-none border border-amber-200/80 focus:ring-2 focus:ring-amber-400"
              />
              <div className="flex items-center gap-2">
                <select
                  value={newTaskStars}
                  onChange={(e) => setNewTaskStars(Number(e.target.value))}
                  className="rounded-2xl bg-white px-3 py-2.5 font-baloo font-bold text-sm text-brand-dark shadow-xs outline-none border border-amber-200/80 cursor-pointer"
                >
                  <option value={1}>+1 ⭐ Sao</option>
                  <option value={2}>+2 ⭐ Sao</option>
                  <option value={3}>+3 ⭐ Sao</option>
                  <option value={5}>+5 ⭐ Sao</option>
                </select>
                <CuteButton
                  type="submit"
                  variant="amber"
                  size="md"
                  icon={<Plus size={18} />}
                >
                  Thêm Việc
                </CuteButton>
              </div>
            </form>

            {/* Tasks List */}
            <div className="mt-6 space-y-3">
              {report.parentTasks.length === 0 ? (
                <div className="text-center py-8 text-slate-400 font-baloo text-sm">
                  Chưa có việc nhà nào. Hãy thêm việc tốt cho con ở phía trên nhé! 🌟
                </div>
              ) : (
                report.parentTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl bg-white p-4 shadow-xs border border-amber-100 transition-all hover:border-amber-200"
                  >
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleToggleComplete(task.id)}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-colors cursor-pointer ${task.isCompleted || task.isApproved
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                          }`}
                        title={task.isCompleted ? 'Bé đã làm xong' : 'Đánh dấu bé đã làm xong'}
                      >
                        {task.isCompleted || task.isApproved ? <Check size={18} /> : <span className="text-xs">○</span>}
                      </button>
                      <div>
                        <h5 className={`font-baloo font-bold text-base ${task.isApproved ? 'text-slate-500 line-through' : 'text-brand-dark'}`}>
                          {task.title}
                        </h5>
                        <span className="font-baloo text-xs font-bold text-amber-700">
                          Thưởng: +{task.rewardStars} Sao Vàng ⭐
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      {task.isApproved ? (
                        <span className="inline-flex items-center gap-1 font-baloo font-extrabold text-xs text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-full">
                          <CheckCircle2 size={16} /> Đã Thưởng Sao
                        </span>
                      ) : task.isCompleted ? (
                        <button
                          type="button"
                          onClick={() => handleApproveTask(task)}
                          className="inline-flex items-center gap-1 font-baloo font-black text-xs sm:text-sm text-white bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-xl shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer"
                        >
                          Bé Đã Làm Xong - Duyệt Thưởng +{task.rewardStars}⭐
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleToggleComplete(task.id)}
                          className="font-baloo text-xs font-bold text-slate-500 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                        >
                          Đang làm (Nhấn để đánh dấu xong)
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => handleDeleteTask(task.id)}
                        className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
                        title="Xóa việc này"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
