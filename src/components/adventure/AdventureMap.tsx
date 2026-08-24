import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  Play,
  Lock,
  Sparkles,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Gift,
  Award
} from 'lucide-react';
import { SubjectType, GradeLevel, LessonNode } from '../../types';
import { SUBJECTS_CONFIG } from '../../data/curriculumData';
import { getLessonsForGradeAndSubject } from '../../data/curriculum';
import { CuteButton } from '../ui/CuteButton';
import { Modal } from '../ui/Modal';
import { soundManager } from '../../utils/audio';
import { getLessonCardContent, getLessonSemester, isLessonInSemester } from '../../utils/lessonCard';
import {
  getNextLessonLimit,
  LESSON_BATCH_SIZE,
  takeLessonGroupsBatch,
} from '../../utils/lessonListPerformance';

interface AdventureMapProps {
  currentGrade: GradeLevel;
  selectedSubject: SubjectType;
  initialViewMode?: 'grid' | 'map';
  onSelectSubject: (subject: SubjectType) => void;
  onStartLesson: (lesson: LessonNode) => void;
  onBackToDashboard: () => void;
}

export const AdventureMap: React.FC<AdventureMapProps> = ({
  currentGrade,
  selectedSubject,
  initialViewMode = 'grid',
  onSelectSubject,
  onStartLesson,
  onBackToDashboard,
}) => {
  const [selectedLessonPreview, setSelectedLessonPreview] = useState<LessonNode | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<0 | 1 | 2>(0); // 0: Cả năm, 1: Tập 1, 2: Tập 2
  const [viewMode, setViewMode] = useState<'grid' | 'map'>(initialViewMode);
  const [activeUnitFilter, setActiveUnitFilter] = useState<string>('all');
  const [visibleLessonLimit, setVisibleLessonLimit] = useState(LESSON_BATCH_SIZE);

  useEffect(() => {
    if (initialViewMode) {
      setViewMode(initialViewMode);
    }
  }, [initialViewMode, selectedSubject, currentGrade]);

  const subject = SUBJECTS_CONFIG[selectedSubject] || SUBJECTS_CONFIG.math;

  // Lấy toàn bộ bài học theo khối lớp và môn
  const allGradeLessons = useMemo(
    () => getLessonsForGradeAndSubject(currentGrade, selectedSubject).filter((lesson) => (
      selectedSubject !== 'vietnamese' || Boolean(lesson.sourceCitation)
    )),
    [currentGrade, selectedSubject]
  );

  // Phân loại theo tập sách (Học kỳ)
  const sem1Lessons = useMemo(
    () => allGradeLessons.filter((lesson) => isLessonInSemester(lesson, 1)),
    [allGradeLessons]
  );
  const sem2Lessons = useMemo(
    () => allGradeLessons.filter((lesson) => isLessonInSemester(lesson, 2)),
    [allGradeLessons]
  );

  // Danh sách bài sau khi lọc theo học kỳ
  const semesterFilteredLessons = useMemo(() => {
    if (selectedSemester === 1) return sem1Lessons;
    if (selectedSemester === 2) return sem2Lessons;
    return allGradeLessons;
  }, [selectedSemester, sem1Lessons, sem2Lessons, allGradeLessons]);

  // Gom nhóm bài học theo từng Chủ Đề / Unit SGK
  const groupedUnits = useMemo(() => {
    const groups: { unitTitle: string; semester: number; lessons: LessonNode[] }[] = [];
    semesterFilteredLessons.forEach((lesson) => {
      let group = groups.find((g) => g.unitTitle === lesson.unit);
      if (!group) {
        group = {
          unitTitle: lesson.unit,
          semester: getLessonSemester(lesson),
          lessons: []
        };
        groups.push(group);
      }
      group.lessons.push(lesson);
    });
    return groups;
  }, [semesterFilteredLessons]);

  // Lọc theo unit nếu người dùng chọn cụ thể từ sidebar
  const displayedUnits = useMemo(() => {
    if (activeUnitFilter === 'all') return groupedUnits;
    return groupedUnits.filter((g) => g.unitTitle === activeUnitFilter);
  }, [groupedUnits, activeUnitFilter]);

  const totalDisplayedLessons = useMemo(
    () => displayedUnits.reduce((total, group) => total + group.lessons.length, 0),
    [displayedUnits]
  );
  const visibleUnits = useMemo(
    () => takeLessonGroupsBatch(displayedUnits, visibleLessonLimit),
    [displayedUnits, visibleLessonLimit]
  );
  const visibleLessonCount = Math.min(visibleLessonLimit, totalDisplayedLessons);
  const hasMoreLessons = visibleLessonCount < totalDisplayedLessons;

  useEffect(() => {
    setVisibleLessonLimit(LESSON_BATCH_SIZE);
  }, [currentGrade, selectedSubject, selectedSemester, activeUnitFilter, viewMode]);

  const handleNodeClick = (lesson: LessonNode) => {
    soundManager.playPop();
    if (!lesson.isLocked) {
      setSelectedLessonPreview(lesson);
    }
  };

  const scrollToUnit = (unitTitle: string) => {
    soundManager.playPop();
    setActiveUnitFilter(unitTitle);
    setTimeout(() => {
      const element = document.getElementById(`unit-section-${unitTitle.replace(/\s+/g, '-')}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  // Mascot avatar asset path
  const mascotImg =
    selectedSubject === 'math'
      ? '/assets/bobo_math.jpg'
      : selectedSubject === 'vietnamese'
        ? '/assets/miumiu_story.jpg'
        : '/assets/pipi_english.jpg';

  const mascotName =
    selectedSubject === 'math' ? 'Cú BoBo' : selectedSubject === 'vietnamese' ? 'Cáo MiuMiu' : 'Cá Heo PiPi';
  const selectedLessonOverviewItems = selectedLessonPreview?.lessonOverview
    ? [
      { label: 'Nội dung', text: selectedLessonPreview.lessonOverview.content },
      { label: 'Mục tiêu', text: selectedLessonPreview.lessonOverview.objective },
      { label: 'Rèn luyện', text: selectedLessonPreview.lessonOverview.practice },
    ]
    : [];

  return (
    <div className="relative min-h-[calc(100vh-5rem)] pb-24 pt-4 sm:pt-6">
      <div className="mx-auto max-w-[1520px] px-3 sm:px-6 lg:px-8">
        {/* ================= TOP NAVIGATION & CONTROLS ================= */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200/80 bg-white/90 backdrop-blur-none p-4 sm:p-5 rounded-3xl shadow-xs xl:bg-white/70 xl:backdrop-blur-md">
          {/* Title & Subject Info */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                soundManager.playPop();
                onBackToDashboard();
              }}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-xs border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Quay lại Trang chủ"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{subject.icon}</span>
                <h1 className="font-baloo text-xl sm:text-2xl md:text-3xl font-black text-brand-dark">
                  {subject.name} (Lớp {currentGrade})
                </h1>
              </div>
              <p className="font-vietnam text-xs sm:text-sm font-semibold text-slate-500">
                Toàn bộ {allGradeLessons.length} bài học theo lộ trình lớp {currentGrade}
              </p>
            </div>
          </div>

          {/* Subject & View Switcher Controls */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            {/* View Mode Toggle: Grid vs Map */}
            <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200 shadow-inner">
              <button
                onClick={() => {
                  soundManager.playPop();
                  setViewMode('grid');
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-baloo font-bold text-xs sm:text-sm transition-all cursor-pointer ${viewMode === 'grid'
                  ? 'bg-white text-brand-dark shadow-xs scale-102 font-extrabold'
                  : 'text-slate-500 hover:text-slate-800'
                  }`}
              >
                <span>📑 Lưới Thẻ Bài</span>
              </button>
              <button
                onClick={() => {
                  soundManager.playPop();
                  setViewMode('map');
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-baloo font-bold text-xs sm:text-sm transition-all cursor-pointer ${viewMode === 'map'
                  ? 'bg-white text-brand-dark shadow-xs scale-102 font-extrabold'
                  : 'text-slate-500 hover:text-slate-800'
                  }`}
              >
                <span>🗺️ Đảo Phiêu Lưu</span>
              </button>
            </div>

            {/* Subject Switcher Tabs */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-slate-200 shadow-xs">
              {(['math', 'vietnamese', 'english'] as SubjectType[]).map((sKey) => {
                const s = SUBJECTS_CONFIG[sKey];
                const isSelected = sKey === selectedSubject;
                return (
                  <button
                    key={sKey}
                    onClick={() => {
                      soundManager.playPop();
                      onSelectSubject(sKey);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-baloo font-bold text-xs sm:text-sm transition-all cursor-pointer ${isSelected
                      ? 'bg-emerald-500 text-white shadow-xs'
                      : 'text-slate-600 hover:text-brand-dark hover:bg-slate-50'
                      }`}
                    style={isSelected ? { backgroundColor: s.accentColor } : {}}
                  >
                    <span>{s.icon}</span>
                    <span className="hidden sm:inline">{s.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= 2-COLUMN MAIN WORKSPACE (EXPANDED CENTER) ================= */}
        <div className="mt-6 flex items-start gap-6">
          {/* ================= LEFT COLUMN: MASCOT, MỤC LỤC, BỘ LỌC & THI ĐUA ================= */}
          <aside className="hidden lg:block w-80 xl:w-[340px] shrink-0 sticky top-20 max-h-[calc(100vh-5.5rem)] overflow-y-auto pr-1 pb-10 space-y-4 custom-scrollbar">
            {/* Mascot Buddy Interaction Box */}
            <div className="rounded-3xl bg-white/95 p-4 sm:p-5 shadow-washi backdrop-blur-none xl:backdrop-blur-md text-center relative overflow-hidden border border-slate-200/70">
              <div className="relative mx-auto h-28 w-28 rounded-3xl p-1 bg-amber-50 shadow-xs mb-3 group">
                <img
                  src={mascotImg}
                  alt={mascotName}
                  className="h-full w-full object-cover rounded-2xl group-hover:scale-105 transition-transform"
                />
                <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 text-sm shadow-xs animate-bounce-subtle">
                  ✨
                </span>
              </div>
              <h4 className="font-baloo font-black text-base sm:text-lg text-brand-dark">{mascotName} Đồng Hành</h4>
              <div className="mt-2.5 rounded-2xl bg-amber-50/90 p-3 text-left shadow-2xs border border-amber-100/80">
                <p className="font-vietnam text-xs font-bold text-amber-950 leading-relaxed text-justify">
                  "Chào bạn nhỏ! Hãy chọn 1 bài học bất kỳ để cùng tớ thu thập trọn bộ 3 ngôi sao nhé! 🌟"
                </p>
              </div>
            </div>

            {/* Semester Filter Pill Card */}
            <div className="rounded-3xl bg-white p-4 sm:p-5 shadow-washi backdrop-blur-none xl:backdrop-blur-md border border-slate-200/70">
              <h3 className="font-baloo font-black text-base text-brand-dark flex items-center gap-2 mb-3">
                <BookOpen size={18} className="text-amber-500" />
                <span>Chọn học kỳ</span>
              </h3>
              <div className="space-y-2">
                {[
                  { id: 0, label: `📚 Cả Năm (${allGradeLessons.length} bài)` },
                  { id: 1, label: `📖 Tập 1 (${sem1Lessons.length} bài)` },
                  { id: 2, label: `📘 Tập 2 (${sem2Lessons.length} bài)` },
                ].map((sem) => (
                  <button
                    key={sem.id}
                    onClick={() => {
                      soundManager.playPop();
                      setSelectedSemester(sem.id as 0 | 1 | 2);
                      setActiveUnitFilter('all');
                    }}
                    className={`w-full text-left px-3.5 py-2.5 rounded-2xl font-baloo font-black text-sm transition-all flex items-center justify-between cursor-pointer ${selectedSemester === sem.id
                      ? 'bg-amber-400 text-amber-950 shadow-sm font-black scale-[1.01] border-b-2 border-amber-600'
                      : 'bg-[#f8f9fa] border border-slate-200/80 text-brand-dark hover:bg-amber-50/70 hover:border-amber-300 shadow-2xs'
                      }`}
                  >
                    <span>{sem.label}</span>
                    {selectedSemester === sem.id && <CheckCircle2 size={18} className="text-amber-950" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Chapter Jump Table of Contents */}
            <div className="rounded-3xl bg-white p-4 sm:p-5 shadow-washi backdrop-blur-none xl:backdrop-blur-md border border-slate-200/70">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                <h3 className="font-baloo font-black text-base text-brand-dark flex items-center gap-2">
                  <Sparkles size={18} className="text-emerald-500" />
                  <span>Mục lục bài học</span>
                </h3>
                <span className="font-baloo text-xs font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                  {groupedUnits.length} Chương
                </span>
              </div>
              <div className="max-h-[320px] overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {groupedUnits.map((group, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToUnit(group.unitTitle)}
                    className="w-full text-left p-2.5 rounded-2xl bg-[#f8f9fa] hover:bg-emerald-50 text-brand-dark transition-all flex items-start gap-2.5 border border-slate-200/70 hover:border-emerald-300 shadow-2xs hover:shadow-xs group cursor-pointer"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-xl bg-amber-200 text-amber-950 font-baloo font-black text-xs shadow-xs group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      {idx + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-baloo font-black text-xs sm:text-sm text-brand-dark leading-snug group-hover:text-emerald-800 transition-colors">
                        {group.unitTitle}
                      </p>
                      <span className="mt-0.5 inline-block font-vietnam text-[11px] font-bold text-slate-500">
                        {group.lessons.length} bài học
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Daily Quest Card */}
            <div className="rounded-3xl bg-white/95 p-4 sm:p-5 shadow-washi backdrop-blur-none xl:backdrop-blur-md border border-slate-200/70">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                <h4 className="font-baloo font-black text-base text-brand-dark flex items-center gap-2">
                  <Gift size={18} className="text-rose-500" />
                  <span>Rương Quà Hôm Nay</span>
                </h4>
                <span className="font-baloo text-xs font-black text-amber-950 bg-amber-200 px-2.5 py-0.5 rounded-full shadow-xs">
                  +50 💎
                </span>
              </div>
              <p className="font-vietnam text-xs font-bold text-slate-700 leading-snug mb-2.5">
                Hoàn thành thêm 2 bài học để mở khóa Rương Báu Hoàng Kim!
              </p>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden p-0.5">
                <div className="bg-emerald-500 h-full rounded-full w-2/3 transition-all" />
              </div>
              <div className="mt-2 flex justify-between text-xs font-baloo font-black text-slate-600">
                <span>Tiến độ: 2/3 bài</span>
                <span className="text-emerald-700">66%</span>
              </div>
            </div>

            {/* Class Leaderboard Widget */}
            <div className="rounded-3xl bg-white/95 p-4 sm:p-5 shadow-washi backdrop-blur-none xl:backdrop-blur-md border border-slate-200/70">
              <h4 className="font-baloo font-black text-base text-brand-dark flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
                <Award size={18} className="text-amber-500" />
                <span>Bảng Vàng Lớp {currentGrade}</span>
              </h4>
              <div className="space-y-2">
                {[
                  { rank: '🥇', name: 'Bé Bảo An', stars: 45, color: 'bg-amber-50 text-amber-950' },
                  { rank: '🥈', name: 'Bé Minh Khang', stars: 38, color: 'bg-slate-50 text-slate-800' },
                  { rank: '🥉', name: 'Bé An Nhiên (Bạn)', stars: 28, color: 'bg-emerald-50 text-emerald-950 font-black' },
                ].map((st, i) => (
                  <div key={i} className={`flex items-center justify-between p-2 rounded-2xl font-baloo font-black text-xs sm:text-sm shadow-2xs ${st.color}`}>
                    <div className="flex items-center gap-2">
                      <span className="text-base">{st.rank}</span>
                      <span>{st.name}</span>
                    </div>
                    <span className="text-amber-600 flex items-center gap-1 text-xs font-black">
                      <Star size={12} fill="currentColor" /> {st.stars} ⭐
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* ================= CENTER MAIN CONTENT (EXPANDED FULL-BREATH WORKSPACE) ================= */}
          <main className="flex-1 min-w-0">
            {/* Mobile Semester Quick Filter Bar */}
            <div className="lg:hidden flex flex-wrap items-center gap-2 pb-4 mb-2 overflow-x-auto">
              {[
                { id: 0, label: `📚 Cả Năm (${allGradeLessons.length})` },
                { id: 1, label: `📖 Tập 1 (${sem1Lessons.length})` },
                { id: 2, label: `📘 Tập 2 (${sem2Lessons.length})` },
              ].map((sem) => (
                <button
                  key={sem.id}
                  onClick={() => {
                    soundManager.playPop();
                    setSelectedSemester(sem.id as 0 | 1 | 2);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl font-baloo font-bold text-xs border transition-all cursor-pointer ${selectedSemester === sem.id
                      ? 'bg-amber-400 text-brand-dark border-amber-500 font-extrabold'
                      : 'bg-white text-slate-600 border-slate-200'
                    }`}
                >
                  {sem.label}
                </button>
              ))}
            </div>

            {/* ================= CHẾ ĐỘ 1: LƯỚI THẺ BÀI HỌC (EXPANDED GRID VIEW) ================= */}
            {viewMode === 'grid' && (
              <div className="space-y-8">
                {visibleUnits.map((group, groupIdx) => (
                  <div
                    key={groupIdx}
                    id={`unit-section-${group.unitTitle.replace(/\s+/g, '-')}`}
                    className="rounded-4xl bg-[#fffdf9]/95 p-5 sm:p-7 shadow-washi backdrop-blur-none xl:backdrop-blur-md border border-amber-100/50 transition-all"
                  >
                    {/* Unit Chapter Header Banner */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-amber-100/60 pb-4 mb-5">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-100 font-baloo font-black text-amber-800 text-lg shadow-xs border border-amber-200/60">
                          {groupIdx + 1}
                        </span>
                        <div>
                          <span className="font-baloo font-extrabold text-xs tracking-wider uppercase" style={{ color: subject.accentColor }}>
                            {group.semester === 1 ? '📖 Học Kỳ 1 (Tập 1)' : '📘 Học Kỳ 2 (Tập 2)'}
                          </span>
                          <h2 className="font-baloo text-lg sm:text-xl font-black text-brand-dark leading-tight">
                            {group.unitTitle}
                          </h2>
                        </div>
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 font-baloo font-bold text-xs text-slate-600 border border-slate-200/60">
                        {displayedUnits.find((item) => item.unitTitle === group.unitTitle)?.lessons.length || group.lessons.length} Bài học
                      </span>
                    </div>

                    {/* Lessons Grid: 1 hàng 2 thẻ trắng, chung thẻ nền vàng phía sau */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                      {group.lessons.map((lesson) => {
                        const isPassed = lesson.starsEarned > 0;
                        const card = getLessonCardContent(lesson);

                        return (
                          <div
                            key={lesson.id}
                            onClick={() => handleNodeClick(lesson)}
                            className={`group relative flex min-h-[286px] flex-col justify-between rounded-3xl p-5 transition-[transform,box-shadow,border-color] duration-200 cursor-pointer select-none hover:-translate-y-1 active:scale-[0.98] [content-visibility:auto] [contain-intrinsic-size:286px] ${isPassed
                                ? 'bg-gradient-to-b from-amber-50/80 via-white to-white border border-amber-300/80 shadow-[0_4px_16px_rgba(245,158,11,0.08)] hover:border-amber-400 hover:shadow-[0_12px_24px_rgba(245,158,11,0.16)]'
                                : 'bg-white border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:border-emerald-400 hover:shadow-[0_12px_24px_rgba(16,185,129,0.14)]'
                              }`}
                          >
                            {/* Top Badge: Textbook Page Reference & Star Reward */}
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-3">
                                <span
                                  className="inline-flex min-w-0 items-center gap-1.5 truncate rounded-xl bg-slate-100 px-3 py-1 font-vietnam text-xs font-bold text-slate-700 whitespace-nowrap border border-slate-200/50"
                                  title={card.badge}
                                >
                                  {card.badge}
                                </span>
                                <div className="inline-flex shrink-0 items-center text-amber-950 bg-amber-50 px-2.5 py-1 rounded-xl text-xs font-baloo font-black whitespace-nowrap border border-amber-200/70 shadow-2xs">
                                  <span>+{lesson.starReward} ⭐</span>
                                </div>
                              </div>

                              {/* Lesson Title & Summary */}
                              <h3 className="line-clamp-2 min-h-[2.75rem] font-baloo font-black text-base sm:text-lg text-brand-dark leading-snug group-hover:text-emerald-700 transition-colors">
                                {card.title}
                              </h3>
                              {card.previewItems.length > 0 ? (
                                <ul className="mt-2 grid gap-1 font-baloo text-sm sm:text-base text-slate-600" aria-label="Tóm tắt bài học">
                                  {card.previewItems.map((item) => (
                                    <li key={item.label} className="flex min-w-0 items-baseline gap-1.5 leading-snug" title={`${item.label}: ${item.text}`}>
                                      <span className="shrink-0 font-black text-slate-700">{item.label}:</span>
                                      <span className="min-w-0 truncate font-bold tracking-[0.01em]">{item.text}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="mt-1.5 line-clamp-3 font-vietnam text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                                  {card.preview}
                                </p>
                              )}
                            </div>

                            {/* Bottom Action Area: Clean Reward Info & Tactile 3D Action Button */}
                            <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-3.5">
                              <span className="font-baloo font-black text-sm sm:text-base text-emerald-600 whitespace-nowrap shrink-0 select-none">
                                +{lesson.xpReward} XP
                              </span>

                              <div
                                className={`flex h-10 px-5 items-center justify-center rounded-2xl font-baloo font-black text-xs sm:text-sm gap-2 whitespace-nowrap transition-all shadow-xs group-hover:scale-105 active:scale-95 ${isPassed
                                    ? 'bg-amber-400 text-amber-950 border-b-2 border-amber-600 hover:bg-amber-500'
                                    : 'bg-emerald-500 text-white border-b-2 border-emerald-700 group-hover:bg-emerald-600'
                                  }`}
                              >
                                <Play size={13} fill="currentColor" />
                                <span className="whitespace-nowrap">{isPassed ? 'Học lại' : 'Vào học'}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ================= CHẾ ĐỘ 2: BẢN ĐỒ ĐẢO PHIÊU LƯU UỐN LƯỢN CHUẨN DUOLINGO / MARIO ISLAND ================= */}
            {viewMode === 'map' && (
              <div className="space-y-12 py-2">
                {visibleUnits.map((group, groupIdx) => {
                  return (
                    <div
                      key={groupIdx}
                      id={`unit-section-${group.unitTitle.replace(/\s+/g, '-')}`}
                      className="relative rounded-4xl border-3 border-white bg-white/95 p-6 sm:p-10 shadow-washi backdrop-blur-none xl:bg-white/80 xl:backdrop-blur-md overflow-hidden"
                    >
                      {/* Chapter Island Header Banner */}
                      <div
                        className="relative mb-10 overflow-hidden rounded-3xl p-5 sm:p-6 text-white shadow-pop-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                        style={{
                          background:
                            groupIdx % 3 === 0
                              ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
                              : groupIdx % 3 === 1
                                ? 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)'
                                : 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                        }}
                      >
                        <div className="flex items-center gap-3.5">
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm font-baloo font-black text-2xl shadow-inner border border-white/30">
                            {groupIdx + 1}
                          </span>
                          <div>
                            <span className="font-baloo font-extrabold text-xs tracking-widest uppercase opacity-90">
                              {group.semester === 1 ? '📖 HỌC KỲ 1 (TẬP 1)' : '📘 HỌC KỲ 2 (TẬP 2)'} • CHỦ ĐỀ {groupIdx + 1}
                            </span>
                            <h2 className="font-baloo text-xl sm:text-2xl font-black leading-tight drop-shadow-xs">
                              {group.unitTitle}
                            </h2>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 bg-black/15 px-4 py-2 rounded-2xl backdrop-blur-xs border border-white/20">
                          <Sparkles size={16} className="text-amber-300" />
                          <span className="font-baloo font-bold text-xs">
                            {group.lessons.length} ải thử thách
                          </span>
                        </div>
                      </div>

                      {/* Floating Stepping Nodes on a Natural Wavy Path with Dynamic Connecting Trails */}
                      <div className="relative mx-auto flex max-w-xl flex-col items-center py-4">
                        {group.lessons.map((lesson, index) => {
                          const isPassed = lesson.starsEarned > 0;
                          const card = getLessonCardContent(lesson);
                          const isCurrentActive =
                            !isPassed && (index === 0 || group.lessons[index - 1]?.starsEarned > 0);

                          // Playful gentle sine-wave offsets (-50px, 0px, 50px, 0px)
                          const offsets = [0, 50, 0, -50];
                          const xOffset = offsets[index % 4];

                          return (
                            <React.Fragment key={lesson.id}>
                              {/* Connecting Trail Between Nodes */}
                              {index > 0 && (
                                <div className="flex flex-col items-center my-1.5 z-0">
                                  {group.lessons[index - 1]?.starsEarned > 0 ? (
                                    <div className="h-8 w-2.5 rounded-full bg-emerald-400 border border-emerald-500/30 shadow-xs flex items-center justify-center">
                                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                                    </div>
                                  ) : (
                                    <div className="h-8 w-0 border-l-3 border-dashed border-slate-300" />
                                  )}
                                </div>
                              )}

                              <div
                                className="relative flex items-center justify-center w-full z-10"
                                style={{ transform: `translateX(${xOffset}px)` }}
                              >
                                {/* Main 3D Tactile Node Button */}
                                <motion.div
                                  whileHover={{ scale: 1.08 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => handleNodeClick(lesson)}
                                  className="relative flex flex-col items-center cursor-pointer group"
                                >
                                  <div
                                    className={`relative flex h-18 w-18 sm:h-20 sm:w-20 items-center justify-center rounded-3xl border-4 transition-all shadow-pop-sm ${isPassed
                                      ? 'border-amber-600 bg-amber-400 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 text-amber-950'
                                      : isCurrentActive
                                        ? 'border-emerald-700 bg-emerald-500 bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600 text-white animate-bounce-subtle'
                                        : 'border-slate-300 bg-slate-100 text-slate-400 hover:bg-slate-200'
                                      }`}
                                  >
                                    {/* Inner Glow / Icon */}
                                    <div className="flex flex-col items-center justify-center">
                                      {isPassed ? (
                                        <Star size={26} fill="#78350F" className="text-amber-900 drop-shadow-xs" />
                                      ) : isCurrentActive ? (
                                        <Play size={24} fill="currentColor" className="ml-1 drop-shadow-xs text-white" />
                                      ) : (
                                        <Lock size={22} className="text-slate-400" />
                                      )}
                                      <span
                                        className={`font-baloo text-xs sm:text-sm font-black mt-0.5 ${isPassed
                                          ? 'text-amber-950'
                                          : isCurrentActive
                                            ? 'text-white drop-shadow-xs'
                                            : 'text-slate-500'
                                          }`}
                                      >
                                        Ải {lesson.order}
                                      </span>
                                    </div>

                                    {/* Star Rating Badge Below Node */}
                                    <div className="absolute -bottom-3 flex items-center gap-0.5 rounded-full bg-brand-dark/90 px-2 py-0.5 shadow-md border border-white/20">
                                      {[1, 2, 3].map((starIdx) => (
                                        <Star
                                          key={starIdx}
                                          size={10}
                                          fill={isPassed && starIdx <= lesson.starsEarned ? '#FBBF24' : '#64748B'}
                                          className={isPassed && starIdx <= lesson.starsEarned ? 'text-amber-400' : 'text-slate-500'}
                                        />
                                      ))}
                                    </div>
                                  </div>

                                  {/* Floating Tooltip Speech Capsule attached to node */}
                                  <div
                                    className={`mt-4 max-w-xs sm:max-w-sm rounded-2xl border-2 px-3.5 py-2 shadow-pop-xs text-center transition-all group-hover:scale-105 ${isPassed
                                      ? 'border-amber-200 bg-amber-50/95 text-amber-950'
                                      : isCurrentActive
                                        ? 'border-emerald-300 bg-white/95 text-brand-dark'
                                        : 'border-slate-200 bg-white/85 text-slate-500'
                                      }`}
                                  >
                                    <div className="mx-auto mb-1 flex min-w-0 max-w-full items-center justify-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800" title={card.badge}>
                                      {card.badge}
                                    </div>
                                    <h4
                                      className={`font-baloo font-extrabold text-xs sm:text-sm line-clamp-2 leading-snug break-words ${isPassed
                                        ? 'text-amber-950'
                                        : isCurrentActive
                                          ? 'text-brand-dark group-hover:text-emerald-700'
                                          : 'text-slate-500'
                                        }`}
                                    >
                                      {card.title}
                                    </h4>
                                  </div>
                                </motion.div>
                              </div>
                            </React.Fragment>
                          );
                        })}

                        {/* Connection to Chapter Treasure Chest */}
                        <div className="flex flex-col items-center my-2">
                          <div className="h-8 w-2.5 rounded-full bg-amber-400 border border-amber-500/30 shadow-xs" />
                        </div>

                        {/* End of Chapter Reward Chest */}
                        <div className="relative z-10 pt-2 flex flex-col items-center">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                            className="flex h-20 w-20 items-center justify-center rounded-3xl border-4 border-amber-500 bg-amber-300 bg-gradient-to-b from-amber-200 to-amber-400 text-3xl shadow-pop-sm cursor-pointer"
                            onClick={() => {
                              soundManager.playVictory();
                            }}
                          >
                            🎁
                          </motion.div>
                          <span className="mt-2 font-baloo font-black text-xs text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300 shadow-xs">
                            Rương Kho Báu Chủ Đề {groupIdx + 1} (+100 XP)
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {hasMoreLessons && (
              <div className="mt-6 flex flex-col items-center gap-2 pb-4 text-center">
                <p className="font-baloo text-sm font-bold text-slate-600" aria-live="polite">
                  Đang hiển thị {visibleLessonCount}/{totalDisplayedLessons} bài
                </p>
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playPop();
                    setVisibleLessonLimit((current) => getNextLessonLimit(current, totalDisplayedLessons));
                  }}
                  className="flex min-h-12 min-w-48 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-emerald-500 px-6 py-3 font-baloo text-base font-black text-white shadow-[0_4px_0_#047857] transition-transform active:translate-y-1 active:shadow-none"
                >
                  <Sparkles size={18} />
                  Xem thêm {Math.min(LESSON_BATCH_SIZE, totalDisplayedLessons - visibleLessonCount)} bài
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* ================= POPUP XEM TRƯỚC BÀI HỌC ================= */}
      {selectedLessonPreview && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedLessonPreview(null)}
          title={selectedLessonPreview.title}
          icon={subject.icon}
          maxWidth="xl"
        >
          <div className="space-y-4">
            {/* Header info without awkward nested white box */}
            {/* Header info with explicit provenance citation */}
            <div className="rounded-2xl bg-amber-50/80 p-4 border border-amber-200 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-amber-200/60">
                <span className="font-baloo font-extrabold text-xs text-amber-800 uppercase tracking-wide">
                  {selectedLessonPreview.unit}
                </span>
              </div>

              {['sgk', 'sgk_pending'].includes(selectedLessonPreview.catalogSection || '') && selectedLessonPreview.referenceBook && (
                <p className="font-vietnam text-xs font-medium text-amber-900/80 italic">
                  Nguồn đối chiếu: {selectedLessonPreview.sourceCitation?.sourceLabel || selectedLessonPreview.referenceBook}
                  {selectedLessonPreview.referenceDetail ? ` — ${selectedLessonPreview.referenceDetail}` : ''}
                  {selectedLessonPreview.referenceUrl && (
                    <> — <a className="underline hover:text-amber-700" href={selectedLessonPreview.referenceUrl} target="_blank" rel="noreferrer">mở SGK</a></>
                  )}
                </p>
              )}

              {selectedLessonOverviewItems.length > 0 ? (
                <ul className="grid gap-2 font-baloo text-sm text-slate-700" aria-label="Ba mục giới thiệu bài học">
                  {selectedLessonOverviewItems.map((item) => (
                    <li key={item.label} className="flex items-start gap-2 leading-snug">
                      <span className="mt-1 text-emerald-600" aria-hidden="true">•</span>
                      <span>
                        <strong className="font-black text-brand-dark">{item.label}:</strong>{' '}
                        <span className="font-bold tracking-[0.01em]">{item.text}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-baloo text-sm font-bold text-slate-700 leading-relaxed">
                  {selectedLessonPreview.description}
                </p>
              )}
            </div>

            {/* Key Theory Points */}
            {selectedLessonPreview.theoryContent && (
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                <div className="flex items-center gap-1.5 font-baloo font-extrabold text-sm text-brand-dark mb-2">
                  <BookOpen size={16} className="text-emerald-600" />
                  <span>Kiến Thức Cần Nhớ:</span>
                </div>
                <ul className="space-y-1.5 font-vietnam text-xs sm:text-sm text-slate-600">
                  {selectedLessonPreview.theoryContent.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Mascot Tip */}
                {selectedLessonPreview.theoryContent.mascotTip && (
                  <div className="mt-3 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2">
                    <span className="text-2xl">💡</span>
                    <p className="font-vietnam text-xs font-bold text-emerald-900">
                      {selectedLessonPreview.theoryContent.mascotTip}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-6 flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <CuteButton
                variant="ghost"
                size="md"
                onClick={() => setSelectedLessonPreview(null)}
              >
                Để sau
              </CuteButton>
              <CuteButton
                variant="primary"
                size="md"
                icon={<Play size={18} fill="currentColor" />}
                onClick={() => {
                  const lessonToStart = selectedLessonPreview;
                  setSelectedLessonPreview(null);
                  onStartLesson(lessonToStart);
                }}
              >
                Vào Làm Bài Ngay! 🚀
              </CuteButton>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
