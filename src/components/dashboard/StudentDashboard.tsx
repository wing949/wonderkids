import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Swords, Gift, Map, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { SubjectType, GradeLevel, MascotId, StudentProfile, DailyQuest } from '../../types';
import { SUBJECTS_CONFIG, GRADE_SUBJECT_DESCRIPTIONS } from '../../data/curriculumData';
import { CuteButton } from '../ui/CuteButton';
import { CandyProgressBar } from '../ui/CandyProgressBar';
import { MascotCompanion } from '../mascot/MascotCompanion';
import { soundManager } from '../../utils/audio';

interface StudentDashboardProps {
  profile: StudentProfile;
  currentGrade: GradeLevel;
  onSelectSubject: (subject: SubjectType) => void;
  onOpenAdventure: () => void;
  onOpenArena: () => void;
  onOpenShop: () => void;
  onOpenQuests: () => void;
  onMascotChange: (id: MascotId) => void;
  dailyQuests: DailyQuest[];
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  profile,
  currentGrade,
  onSelectSubject,
  onOpenAdventure,
  onOpenArena,
  onOpenShop,
  onOpenQuests,
  onMascotChange,
  dailyQuests,
}) => {
  const completedQuestsCount = dailyQuests.filter((q) => q.isCompleted).length;
  const isAllQuestsDone = completedQuestsCount === dailyQuests.length;

  const subjectTiltConfig: Record<string, { tilt: number; washiColor: string }> = {
    math: { tilt: -1.5, washiColor: 'rgba(94, 190, 120, 0.45)' },
    vietnamese: { tilt: 1.2, washiColor: 'rgba(251, 146, 60, 0.45)' },
    english: { tilt: -1.4, washiColor: 'rgba(96, 165, 227, 0.45)' },
    logic: { tilt: 1.5, washiColor: 'rgba(139, 114, 207, 0.45)' },
  };

  return (
    <div className="relative pb-24 pt-6 sm:pt-10">
      {/* Background Decorative Cloud Circles */}
      <div className="absolute inset-0 -z-10 hidden overflow-hidden pointer-events-none xl:block">
        <div className="absolute -top-10 left-10 h-72 w-72 rounded-full bg-amber-100/50 blur-3xl" />
        <div className="absolute top-40 right-10 h-80 w-80 rounded-full bg-sky-100/60 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Hero Section: Mascot Greeting & Daily Habit Loop */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-4xl border-2 border-white/80 bg-white/95 p-5 sm:p-8 shadow-washi backdrop-blur-none xl:bg-white/75 xl:backdrop-blur-md">
          {/* Mascot Companion Interaction */}
          <div className="flex-1 w-full">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-400 font-baloo">
              <Sparkles size={14} className="text-amber-500" />
              <span>Góc Học Tập Lớp {currentGrade}</span>
            </div>

            <h1 className="mt-1 font-baloo text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
              Hôm nay con muốn học gì?
            </h1>

            <p className="mt-1.5 text-sm sm:text-base font-semibold text-slate-600 font-vietnam max-w-xl">
              Chọn một góc học nhé — mỗi ngày một chút, vừa giỏi vừa vui! 🌟
            </p>

            {/* Mascot Active Greeting Bubble */}
            <div className="mt-4">
              <MascotCompanion
                mascotId={profile.selectedMascot}
                mood="greeting"
                onMascotChange={onMascotChange}
                size="md"
              />
            </div>
          </div>

          {/* Level & XP Box */}
          <div className="w-full md:w-80 shrink-0 rounded-3xl border-2 border-amber-200/80 bg-gradient-to-br from-amber-50 to-orange-50/80 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-baloo font-extrabold text-xs text-amber-800 uppercase">
                  Cấp độ {profile.level}
                </span>
                <h4 className="font-baloo font-extrabold text-lg text-brand-dark">
                  Tập Sự Tri Thức
                </h4>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-2xl shadow-pop-sm">
                🎖️
              </div>
            </div>

            <div className="mt-3">
              <div className="flex justify-between text-xs font-bold text-slate-600 mb-1 font-baloo">
                <span>Tiến độ Level:</span>
                <span>{profile.xp} / 500 XP</span>
              </div>
              <CandyProgressBar value={profile.xp} max={500} color="gold" height="md" showStarIndicator={false} />
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-slate-500 font-vietnam font-semibold pt-2 border-t border-amber-200/60">
              <span>Đã xong: <strong className="text-brand-dark">{profile.totalLessonsCompleted} bài</strong></span>
              <button
                onClick={() => {
                  soundManager.playPop();
                  onOpenShop();
                }}
                className="text-amber-700 font-baloo font-bold hover:underline"
              >
                Đổi quà ⭐
              </button>
            </div>
          </div>
        </section>

        {/* 3 Core Subjects Cards (Scrapbook Washi Cards) */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-baloo text-2xl sm:text-3xl font-extrabold text-brand-dark flex items-center gap-2">
              <span>📚</span>
              <span>Các Môn Học Khối Lớp {currentGrade}</span>
            </h2>
            <button
              onClick={() => {
                soundManager.playPop();
                onOpenAdventure();
              }}
              className="font-baloo font-bold text-sm sm:text-base text-emerald-700 hover:text-emerald-800 flex items-center gap-1 group"
            >
              <span>Xem Bản Đồ Đảo</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {(['math', 'vietnamese', 'english', 'logic'] as SubjectType[]).map((subjKey) => {
              const subj = SUBJECTS_CONFIG[subjKey];
              const { tilt, washiColor } = subjectTiltConfig[subjKey] || { tilt: 1, washiColor: 'rgba(139, 114, 207, 0.45)' };
              const subjectThumbnails: Record<string, string> = {
                math: '/assets/bobo_math.jpg',
                vietnamese: '/assets/miumiu_story.jpg',
                english: '/assets/pipi_english.jpg',
                logic: '/assets/bipbip_logic.jpg',
              };

              const handleClick = () => {
                soundManager.playPop();
                if (subjKey === 'logic') {
                  onOpenArena();
                } else {
                  onSelectSubject(subjKey);
                }
              };

              return (
                <div
                  key={subjKey}
                  onClick={handleClick}
                  style={{ transform: `rotate(${tilt}deg)` }}
                  className="group relative flex h-full flex-col lg:grid lg:grid-cols-[42%_1fr] lg:items-stretch rounded-[1.5rem] sm:rounded-[2rem] border-2 border-white/90 bg-[#fffdf9]/95 p-3 sm:p-4 shadow-washi transition-all duration-300 hover:rotate-0 hover:-translate-y-2 hover:shadow-2xl cursor-pointer select-none"
                >
                  {/* Washi Tape Strip at Top Center */}
                  <span
                    aria-hidden="true"
                    className="absolute -top-2.5 sm:-top-3.5 left-1/2 h-5 sm:h-6 w-20 sm:w-28 -translate-x-1/2 rotate-[-4deg] rounded-[4px] shadow-2xs z-10 pointer-events-none"
                    style={{ backgroundColor: washiColor }}
                  />

                  {/* Left Column: Big Cover Illustration */}
                  <div className="relative h-44 sm:h-56 lg:h-full lg:min-h-52 overflow-hidden rounded-[1.2rem] sm:rounded-[1.5rem] bg-[#f4efe8] shadow-xs">
                    <img
                      src={subjectThumbnails[subjKey]}
                      alt={subj.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Icon Badge on Corner */}
                    <span className="absolute top-2.5 left-2.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/90 backdrop-blur text-2xl shadow-xs border border-white">
                      {subj.icon}
                    </span>
                  </div>

                  {/* Right Column: Title, Subtitle, Description & Progress */}
                  <div className="flex flex-1 flex-col justify-between px-1.5 pt-3 pb-1 sm:px-4 sm:py-2">
                    <div>
                      {/* Top Header Row with Lessons Count */}
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className="px-3 py-1 rounded-full font-baloo font-extrabold text-xs shadow-2xs"
                          style={{ backgroundColor: `${subj.color}20`, color: subj.accentColor }}
                        >
                          {subj.completedLessons}/{subj.totalLessons} bài đã học
                        </span>
                      </div>

                      {/* Subject Name & Subtitle */}
                      <h3
                        className="font-baloo text-2xl sm:text-[1.75rem] font-black tracking-tight leading-tight mt-2"
                        style={{ color: subj.accentColor }}
                      >
                        {subj.name}
                      </h3>
                      <p className="font-baloo font-bold text-sm text-brand-dark mt-0.5">
                        {GRADE_SUBJECT_DESCRIPTIONS[currentGrade]?.[subjKey]?.subtitle || subj.subtitle}
                      </p>

                      {/* Description */}
                      <p className="mt-2 font-vietnam text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed text-justify line-clamp-3">
                        {GRADE_SUBJECT_DESCRIPTIONS[currentGrade]?.[subjKey]?.desc || subj.description}
                      </p>
                    </div>

                    {/* Bottom Progress Bar & Enter Action Link */}
                    <div className="mt-4 pt-3 border-t border-slate-100/90">
                      <div className="mb-2.5">
                        <div className="flex justify-between text-xs font-bold text-slate-500 mb-1 font-baloo">
                          <span>Tiến độ môn:</span>
                          <span>{Math.round((subj.completedLessons / subj.totalLessons) * 100)}%</span>
                        </div>
                        <CandyProgressBar
                          value={subj.completedLessons}
                          max={subj.totalLessons}
                          color={subjKey === 'logic' ? 'gold' : (subjKey as 'math' | 'vietnamese' | 'english')}
                          height="sm"
                          showStarIndicator={false}
                        />
                      </div>

                      <div className="flex justify-end pt-1">
                        <span
                          className="inline-flex items-center gap-1.5 font-baloo font-black text-sm sm:text-base transition-transform duration-300 group-hover:translate-x-1.5"
                          style={{ color: subj.accentColor }}
                        >
                          Vào chơi ngay <ArrowRight size={18} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Daily Quests Section: Việc Tốt Mỗi Ngày */}
        <section className="rounded-4xl bg-gradient-to-br from-orange-50/95 via-amber-50/90 to-yellow-50/95 p-6 sm:p-8 shadow-washi backdrop-blur-none xl:from-orange-50/85 xl:via-amber-50/60 xl:to-yellow-50/75 xl:backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-amber-200/40 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📋</span>
                <h3 className="font-baloo text-2xl sm:text-3xl font-extrabold text-amber-900">
                  Nhiệm Vụ Hôm Nay — Việc Tốt Mỗi Ngày
                </h3>
              </div>
              <p className="font-vietnam text-xs sm:text-sm font-semibold text-amber-800/80 mt-1">
                Làm xong mỗi việc được nhận 1 Ngôi Sao ⭐. Hoàn thành cả 3 việc để mở Rương Quà Báu! 🎁
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-baloo font-extrabold text-sm sm:text-base text-amber-900">
                Tiến độ: {completedQuestsCount}/3
              </span>
              <CuteButton
                variant={isAllQuestsDone ? 'amber' : 'white'}
                size="sm"
                icon={<Gift size={16} />}
                onClick={() => {
                  soundManager.playChestOpen();
                  onOpenQuests();
                }}
              >
                {isAllQuestsDone ? 'Mở Rương Báu 🎁' : 'Xem Rương Quà'}
              </CuteButton>
            </div>
          </div>

          {/* 3 Quests Grid with Interactive Click to Action */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {dailyQuests.map((quest) => {
              // Map quest ID to corresponding subject
              const targetSubject: SubjectType = quest.id.includes('math')
                ? 'math'
                : quest.id.includes('vietnamese')
                ? 'vietnamese'
                : 'english';

              return (
                <motion.div
                  key={quest.id}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    soundManager.playPop();
                    onSelectSubject(targetSubject);
                  }}
                  className={`group relative rounded-3xl p-4 transition-all cursor-pointer select-none ${
                    quest.isCompleted
                      ? 'bg-emerald-50/95 shadow-sm hover:shadow-md'
                      : 'bg-white shadow-xs hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-3xl group-hover:scale-110 transition-transform">{quest.icon}</span>
                      <div>
                        <h4 className="font-baloo font-extrabold text-base text-brand-dark group-hover:text-emerald-700 transition-colors">
                          {quest.title}
                        </h4>
                        <p className="font-vietnam text-xs text-slate-500 font-semibold">
                          {quest.subtitle}
                        </p>
                      </div>
                    </div>
                    {quest.isCompleted ? (
                      <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0 fill-emerald-100" />
                    ) : (
                      <span className="font-baloo font-bold text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full shrink-0">
                        +{quest.starReward} ⭐
                      </span>
                    )}
                  </div>

                  <div className="mt-3">
                    <div className="flex justify-between text-[11px] font-bold text-slate-500 mb-1 font-baloo">
                      <span>{quest.isCompleted ? '✓ Đã hoàn thành!' : 'Tiến độ làm bài:'}</span>
                      <span>{quest.progress}/{quest.maxProgress}</span>
                    </div>
                    <CandyProgressBar
                      value={quest.progress}
                      max={quest.maxProgress}
                      color={quest.isCompleted ? 'math' : 'gold'}
                      height="sm"
                      showStarIndicator={false}
                    />
                  </div>

                  {/* Quick Action Hint */}
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-baloo font-bold">
                    <span className={quest.isCompleted ? 'text-emerald-600' : 'text-amber-700'}>
                      {quest.isCompleted ? '🌟 Tuyệt vời!' : '👉 Nhấn để vào làm ngay'}
                    </span>
                    <span className="text-slate-400 group-hover:translate-x-1 transition-transform">➔</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Quick Action Banners (Quiz Arena & Star Shop) */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Arena Banner */}
          <div
            onClick={() => {
              soundManager.playPop();
              onOpenArena();
            }}
            className="group relative overflow-hidden rounded-4xl bg-gradient-to-r from-purple-500 to-indigo-600 p-6 text-white shadow-md hover:shadow-xl cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.99]"
          >
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 font-baloo text-xs font-extrabold backdrop-blur">
                  <Swords size={14} /> Thách Đấu Nhanh
                </span>
                <h3 className="mt-2 font-baloo text-2xl sm:text-3xl font-extrabold">
                  Đấu Trường Trí Tuệ ⚔️
                </h3>
                <p className="mt-1 font-vietnam text-xs sm:text-sm font-semibold text-purple-100 max-w-xs">
                  Thử thách 10 câu hỏi tốc độ cùng AI Mascot và bạn bè!
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-1.5 font-baloo font-extrabold text-sm text-purple-700 shadow-sm group-hover:bg-amber-300 group-hover:text-purple-900 transition-colors">
                    Vào đấu trường <ArrowRight size={16} />
                  </span>
                </div>
              </div>
              <div className="text-6xl sm:text-7xl shrink-0 animate-bounce-subtle">
                🏆
              </div>
            </div>
          </div>

          {/* Adventure Map Banner */}
          <div
            onClick={() => {
              soundManager.playPop();
              onOpenAdventure();
            }}
            className="group relative overflow-hidden rounded-4xl bg-gradient-to-r from-sky-500 to-teal-500 p-6 text-white shadow-md hover:shadow-xl cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.99]"
          >
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 font-baloo text-xs font-extrabold backdrop-blur">
                  <Map size={14} /> Lộ Trình Học Tập
                </span>
                <h3 className="mt-2 font-baloo text-2xl sm:text-3xl font-extrabold">
                  Đảo Tri Thức Diệu Kỳ 🏝️
                </h3>
                <p className="mt-1 font-vietnam text-xs sm:text-sm font-semibold text-sky-100 max-w-xs">
                  Chinh phục từng ải bài học, mở khóa rương báu bí mật!
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-1.5 font-baloo font-extrabold text-sm text-sky-700 shadow-sm group-hover:bg-yellow-300 group-hover:text-sky-900 transition-colors">
                    Khám phá bản đồ <ArrowRight size={16} />
                  </span>
                </div>
              </div>
              <div className="text-6xl sm:text-7xl shrink-0 animate-bounce-subtle">
                🗺️
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
