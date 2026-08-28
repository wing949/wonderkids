import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Gift, Map, CheckCircle2, ChevronRight, BookOpenCheck } from 'lucide-react';
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
  onOpenPractice: () => void;
  onOpenLogic?: () => void;
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
  onOpenPractice,
  onOpenLogic,
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
        {/* Hero Section: Spacious Mascot Greeting & Habit Loop */}
        <section className="relative z-30 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-8 rounded-3xl border-2 border-white/80 bg-white/95 p-5 sm:p-6 shadow-washi backdrop-blur-none xl:bg-white/85 xl:backdrop-blur-md">
          {/* Mascot Companion Interaction */}
          <div className="flex-1 w-full min-w-0">
            <h1 className="font-baloo text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
              Hôm nay con muốn học gì?
            </h1>

            <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-500 font-vietnam">
              Chọn một góc học nhé — mỗi ngày một chút, vừa giỏi vừa vui! 🌟
            </p>

            {/* Mascot Active Greeting Bubble */}
            <div className="mt-3.5">
              <MascotCompanion
                mascotId={profile.avatarId || profile.selectedMascot}
                mood="greeting"
                onMascotChange={onMascotChange}
                size="md"
              />
            </div>
          </div>

          {/* Level & XP Box - Expanded & Borderless */}
          {(() => {
            const XP_PER_LEVEL = 500;
            const currentLevelXp = profile.xp % XP_PER_LEVEL;
            const levelPercentage = Math.round((currentLevelXp / XP_PER_LEVEL) * 100);
            return (
              <div className="w-full md:w-80 lg:w-88 xl:w-96 shrink-0 rounded-3xl bg-amber-50/70 p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-baloo font-extrabold text-xs text-amber-800 uppercase tracking-wide">
                      Cấp độ {profile.level}
                    </span>
                    <h4 className="font-baloo font-black text-lg sm:text-xl text-brand-dark leading-tight">
                      Tập Sự Tri Thức
                    </h4>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400 text-2xl shadow-pop-xs">
                    🎖️
                  </div>
                </div>

                <div className="mt-3">
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1 font-baloo">
                    <span>Tiến độ lên Cấp {profile.level + 1}:</span>
                    <span className="text-amber-900 font-extrabold">{currentLevelXp} / {XP_PER_LEVEL} XP ({levelPercentage}%)</span>
                  </div>
                  <CandyProgressBar value={currentLevelXp} max={XP_PER_LEVEL} color="gold" height="md" showStarIndicator={false} />
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-600 font-vietnam font-bold pt-2.5 border-t border-amber-200/80">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span>Đã xong: <strong className="text-brand-dark text-sm">{profile.totalLessonsCompleted} bài</strong></span>
                    <span className="text-slate-300">•</span>
                    <span>Tổng: <strong className="text-amber-900 text-sm">{profile.xp} XP</strong></span>
                  </div>
                  <button
                    onClick={() => {
                      soundManager.playPop();
                      onOpenShop();
                    }}
                    className="text-amber-800 font-baloo font-extrabold text-xs sm:text-sm hover:underline hover:text-amber-950 cursor-pointer bg-amber-200/70 px-2.5 py-1 rounded-xl shadow-2xs transition-all hover:scale-105 shrink-0"
                  >
                    Đổi quà ⭐
                  </button>
                </div>
              </div>
            );
          })()}
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
                math: '/assets/bobo_math.webp',
                vietnamese: '/assets/miumiu_story.webp',
                english: '/assets/pipi_english.webp',
                logic: '/assets/bipbip_logic.webp',
              };

              const handleClick = () => {
                soundManager.playPop();
                if (subjKey === 'logic') {
                  if (onOpenLogic) {
                    onOpenLogic();
                  } else {
                    onSelectSubject('logic');
                  }
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

        {/* Quick Action Cards (Kho Luyện Đề & Đảo Tri Thức) - Style Scrapbook đồng bộ với các thẻ trên */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Kho Luyện Đề & Đấu Trường Trí Tuệ */}
          <article
            data-practice-arena-entry
            onClick={() => {
              soundManager.playPop();
              onOpenPractice();
            }}
            style={{ transform: 'rotate(-1deg)' }}
            className="group relative flex h-full flex-col lg:grid lg:grid-cols-[40%_1fr] lg:items-stretch rounded-[1.5rem] sm:rounded-[2rem] border-2 border-white/90 bg-[#fffdf9]/95 p-3 sm:p-4 shadow-washi transition-all duration-300 hover:rotate-0 hover:-translate-y-2 hover:shadow-2xl cursor-pointer select-none"
          >
            {/* Washi Tape Strip at Top Center */}
            <span
              aria-hidden="true"
              className="absolute -top-2.5 sm:-top-3.5 left-1/2 h-5 sm:h-6 w-20 sm:w-28 -translate-x-1/2 rotate-[-4deg] rounded-[4px] shadow-2xs z-10 pointer-events-none bg-amber-400/60"
            />

            {/* Left Column: Big Cover Illustration */}
            <div className="relative h-44 sm:h-52 lg:h-full lg:min-h-48 overflow-hidden rounded-[1.2rem] sm:rounded-[1.5rem] bg-[#fffbeb] shadow-xs">
              <img
                src="/assets/practice_arena_cover.webp"
                alt="Kho Luyện Đề & Đấu Trường Trí Tuệ"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

              {/* Floating Icon Badge */}
              <span className="absolute top-2.5 left-2.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/90 backdrop-blur text-2xl shadow-xs border border-white">
                🏆
              </span>
            </div>

            {/* Right Column: Title, Subtitle, Description & Button */}
            <div className="flex flex-1 flex-col justify-between px-1.5 pt-3 pb-1 sm:px-4 sm:py-2">
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full font-baloo font-extrabold text-xs bg-amber-100 text-amber-800 shadow-2xs">
                    Luyện tập • Thi thử • Xếp hạng
                  </span>
                </div>

                {/* Subject Name & Subtitle */}
                <h3 className="font-baloo text-2xl sm:text-[1.75rem] font-black tracking-tight leading-tight mt-2 text-amber-600">
                  Kho Luyện Đề &amp; Đấu Trường
                </h3>
                <p className="font-baloo font-bold text-sm text-brand-dark mt-0.5">
                  Đấu trường Violympic, IOE, Trạng Nguyên
                </p>

                {/* Description */}
                <p className="mt-2 font-vietnam text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed text-justify line-clamp-3">
                  240 đề và ngân hàng câu hỏi chung: luyện theo năng lực hoặc thi thử Violympic, IOE, Trạng Nguyên.
                </p>
              </div>

              {/* Bottom Action Button */}
              <div className="mt-4 pt-3 border-t border-slate-100/90">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    soundManager.playPop();
                    onOpenPractice();
                  }}
                  className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-amber-500 px-5 font-baloo font-black text-white shadow-[0_5px_0_#b45309] transition-transform active:translate-y-1 active:shadow-none"
                >
                  <BookOpenCheck size={18} aria-hidden="true" />
                  <span>Mở góc luyện &amp; thi</span>
                </button>
              </div>
            </div>
          </article>

          {/* Card 2: Đảo Tri Thức Diệu Kỳ */}
          <article
            onClick={() => {
              soundManager.playPop();
              onOpenAdventure();
            }}
            style={{ transform: 'rotate(1.2deg)' }}
            className="group relative flex h-full flex-col lg:grid lg:grid-cols-[40%_1fr] lg:items-stretch rounded-[1.5rem] sm:rounded-[2rem] border-2 border-white/90 bg-[#fffdf9]/95 p-3 sm:p-4 shadow-washi transition-all duration-300 hover:rotate-0 hover:-translate-y-2 hover:shadow-2xl cursor-pointer select-none"
          >
            {/* Washi Tape Strip at Top Center */}
            <span
              aria-hidden="true"
              className="absolute -top-2.5 sm:-top-3.5 left-1/2 h-5 sm:h-6 w-20 sm:w-28 -translate-x-1/2 rotate-[-4deg] rounded-[4px] shadow-2xs z-10 pointer-events-none bg-teal-400/60"
            />

            {/* Left Column: Big Cover Illustration */}
            <div className="relative h-44 sm:h-52 lg:h-full lg:min-h-48 overflow-hidden rounded-[1.2rem] sm:rounded-[1.5rem] bg-[#f0fdfa] shadow-xs">
              <img
                src="/assets/adventure_map_cover.webp"
                alt="Đảo Tri Thức Diệu Kỳ"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

              {/* Floating Icon Badge */}
              <span className="absolute top-2.5 left-2.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/90 backdrop-blur text-2xl shadow-xs border border-white">
                🗺️
              </span>
            </div>

            {/* Right Column: Title, Subtitle, Description & Button */}
            <div className="flex flex-1 flex-col justify-between px-1.5 pt-3 pb-1 sm:px-4 sm:py-2">
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full font-baloo font-extrabold text-xs bg-teal-100 text-teal-800 shadow-2xs">
                    Lộ Trình Học Tập GDPT 2018
                  </span>
                </div>

                {/* Subject Name & Subtitle */}
                <h3 className="font-baloo text-2xl sm:text-[1.75rem] font-black tracking-tight leading-tight mt-2 text-teal-700">
                  Đảo Tri Thức Diệu Kỳ 🏝️
                </h3>
                <p className="font-baloo font-bold text-sm text-brand-dark mt-0.5">
                  Hành trình phiêu lưu cùng 4 Mascot
                </p>

                {/* Description */}
                <p className="mt-2 font-vietnam text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed text-justify line-clamp-3">
                  Chinh phục từng ải bài học Toán, Tiếng Việt, Tiếng Anh theo chuẩn SGK, mở khóa rương báu bí mật!
                </p>
              </div>

              {/* Bottom Action Button */}
              <div className="mt-4 pt-3 border-t border-slate-100/90">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    soundManager.playPop();
                    onOpenAdventure();
                  }}
                  className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-teal-500 px-5 font-baloo font-black text-white shadow-[0_5px_0_#0f766e] transition-transform active:translate-y-1 active:shadow-none"
                >
                  <Map size={18} aria-hidden="true" />
                  <span>Khám phá bản đồ</span>
                </button>
              </div>
            </div>
          </article>
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
              // Map quest directly to its corresponding subject
              const targetSubject: SubjectType = quest.subject || (
                quest.id.includes('math') ? 'math' : quest.id.includes('vietnamese') ? 'vietnamese' : 'english'
              );

              return (
                <motion.div
                  key={quest.id}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    soundManager.playPop();
                    onSelectSubject(targetSubject);
                  }}
                  className={`group relative rounded-3xl p-4 transition-all cursor-pointer select-none ${quest.isCompleted
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
      </div>
    </div>
  );
};
