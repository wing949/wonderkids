import React, { useState, useEffect } from 'react';
import { GradeLevel, ThemeId, PortalView, SubjectType, MascotId, StudentProfile, LessonNode, DailyQuest, StarShopItem } from './types';
import { INITIAL_DAILY_QUESTS } from './data/gamificationData';
import { SAMPLE_LESSONS } from './data/curriculumData';
import { Header } from './components/layout/Header';
import { BottomNav } from './components/layout/BottomNav';
import { StudentDashboard } from './components/dashboard/StudentDashboard';
import { AdventureMap } from './components/adventure/AdventureMap';
import { InteractiveExerciseEngine } from './components/exercise/InteractiveExerciseEngine';
import { VictoryModal } from './components/rewards/VictoryModal';
import { ProfileModal } from './components/profile/ProfileModal';
import { StarShopModal } from './components/profile/StarShopModal';
import { ParentPortal } from './components/parent/ParentPortal';
import { AdminCMS } from './components/admin/AdminCMS';
import { QuizArena } from './components/arena/QuizArena';
import { Modal } from './components/ui/Modal';
import { CuteDoodleBackground } from './components/common/CuteDoodleBackground';

const STORAGE_KEY_PROFILE = 'wonderkids_profile_v1';
const STORAGE_KEY_GRADE = 'wonderkids_grade_v1';
const STORAGE_KEY_THEME = 'wonderkids_theme_v1';

const INITIAL_PROFILE: StudentProfile = {
  name: 'Bé An Nhiên',
  kidCode: 'WK-8829',
  grade: 1,
  selectedMascot: 'bobo',
  avatarId: 'bobo',
  motto: '🌟 Mỗi ngày học một chút, vui là chính!',
  theme: 'ocean',
  stars: 28,
  gems: 15,
  xp: 350,
  level: 4,
  streak: 7,
  streakFrozen: false,
  totalLessonsCompleted: 12,
  accuracyRate: 92,
};

const getInitialProfile = (): StudentProfile => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
    if (saved) {
      return { ...INITIAL_PROFILE, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.error('Failed to load profile from localStorage', e);
  }
  return INITIAL_PROFILE;
};

const getInitialGrade = (): GradeLevel => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_GRADE);
    if (saved) {
      const g = parseInt(saved, 10);
      if ([1, 2, 3, 4, 5].includes(g)) return g as GradeLevel;
    }
  } catch (e) {}
  return 1;
};

const getInitialTheme = (): ThemeId => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_THEME);
    if (saved && ['ocean', 'space', 'jungle', 'candy', 'sunny'].includes(saved)) {
      return saved as ThemeId;
    }
  } catch (e) {}
  return 'ocean';
};

export const App: React.FC = () => {
  const [profile, setProfile] = useState<StudentProfile>(getInitialProfile);
  const [currentGrade, setCurrentGrade] = useState<GradeLevel>(() => {
    const p = getInitialProfile();
    return p.grade || getInitialGrade();
  });
  const [currentTheme, setCurrentTheme] = useState<ThemeId>(getInitialTheme);
  const [currentPortal, setCurrentPortal] = useState<PortalView>('student');
  const [selectedSubject, setSelectedSubject] = useState<SubjectType>('math');
  
  const [activeLesson, setActiveLesson] = useState<LessonNode | null>(null);
  const [dailyQuests] = useState<DailyQuest[]>(INITIAL_DAILY_QUESTS);

  // Modals state
  const [isVictoryModalOpen, setIsVictoryModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isShopModalOpen, setIsShopModalOpen] = useState(false);
  const [isQuestsModalOpen, setIsQuestsModalOpen] = useState(false);

  const [lastEarnedStars, setLastEarnedStars] = useState(3);
  const [lastEarnedXp, setLastEarnedXp] = useState(100);

  // Persist profile to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));
    } catch (e) {}
  }, [profile]);

  // Persist grade to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_GRADE, currentGrade.toString());
    } catch (e) {}
  }, [currentGrade]);

  // Persist theme to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_THEME, currentTheme);
    } catch (e) {}
  }, [currentTheme]);

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  // Handler: Start a lesson
  const handleStartLesson = (lesson: LessonNode) => {
    setActiveLesson(lesson);
    setCurrentPortal('exercise');
  };

  // Handler: Select subject from Dashboard
  const handleSelectSubject = (subject: SubjectType) => {
    setSelectedSubject(subject);
    setCurrentPortal('adventure');
  };

  // Handler: Lesson Completed
  const handleCompleteLesson = (starsEarned: number, xpEarned: number) => {
    setLastEarnedStars(starsEarned);
    setLastEarnedXp(xpEarned);

    // Update student profile
    setProfile((prev) => ({
      ...prev,
      stars: prev.stars + starsEarned,
      xp: prev.xp + xpEarned,
      totalLessonsCompleted: prev.totalLessonsCompleted + 1,
    }));

    setIsVictoryModalOpen(true);
  };

  // Handler: Buy item from Star Shop
  const handleBuyShopItem = (item: StarShopItem) => {
    setProfile((prev) => ({
      ...prev,
      stars: Math.max(0, prev.stars - item.costStars),
    }));
  };

  // Handler: Change Mascot
  const handleMascotChange = (id: MascotId) => {
    setProfile((prev) => ({
      ...prev,
      selectedMascot: id,
    }));
  };

  // Handler: Change Grade
  const handleGradeChange = (grade: GradeLevel) => {
    setCurrentGrade(grade);
    setProfile((prev) => ({ ...prev, grade }));
  };

  return (
    <div className="min-h-screen bg-brand-bg transition-colors relative">
      {/* Background Animated Doodles & Soft Clouds (mykidspace.online style) */}
      <CuteDoodleBackground />

      {/* Universal Header (Hidden inside exercise mode to prevent distractions) */}
      {currentPortal !== 'exercise' && (
        <Header
          profile={profile}
          currentGrade={currentGrade}
          onGradeChange={handleGradeChange}
          currentTheme={currentTheme}
          onThemeChange={setCurrentTheme}
          currentPortal={currentPortal}
          onPortalChange={setCurrentPortal}
          onOpenShop={() => setIsShopModalOpen(true)}
          onOpenBadges={() => setIsProfileModalOpen(true)}
        />
      )}

      {/* Main Portals Router */}
      <main className="min-h-[calc(100vh-5rem)]">
        {currentPortal === 'student' && (
          <StudentDashboard
            profile={profile}
            currentGrade={currentGrade}
            onSelectSubject={handleSelectSubject}
            onOpenAdventure={() => setCurrentPortal('adventure')}
            onOpenArena={() => setCurrentPortal('arena')}
            onOpenShop={() => setIsShopModalOpen(true)}
            onOpenQuests={() => setIsQuestsModalOpen(true)}
            onMascotChange={handleMascotChange}
            dailyQuests={dailyQuests}
          />
        )}

        {currentPortal === 'adventure' && (
          <AdventureMap
            currentGrade={currentGrade}
            selectedSubject={selectedSubject}
            onSelectSubject={setSelectedSubject}
            onStartLesson={handleStartLesson}
            onBackToDashboard={() => setCurrentPortal('student')}
          />
        )}

        {currentPortal === 'exercise' && activeLesson && (
          <InteractiveExerciseEngine
            lesson={activeLesson}
            onExit={() => setCurrentPortal('adventure')}
            onComplete={handleCompleteLesson}
          />
        )}

        {currentPortal === 'arena' && (
          <QuizArena
            onBackToDashboard={() => setCurrentPortal('student')}
            onVictory={(xp, stars) => {
              setProfile((prev) => ({
                ...prev,
                xp: prev.xp + xp,
                stars: prev.stars + stars,
              }));
            }}
          />
        )}

        {currentPortal === 'parent' && (
          <ParentPortal onBackToStudent={() => setCurrentPortal('student')} />
        )}

        {currentPortal === 'admin' && (
          <AdminCMS onBackToStudent={() => setCurrentPortal('student')} />
        )}
      </main>

      {/* Mobile Bottom Dock (Hidden in exercise mode) */}
      {currentPortal !== 'exercise' && currentPortal !== 'admin' && (
        <BottomNav
          currentPortal={currentPortal}
          onPortalChange={setCurrentPortal}
          onOpenShop={() => setIsShopModalOpen(true)}
          onOpenQuests={() => setIsQuestsModalOpen(true)}
        />
      )}

      {/* ================= MODALS ================= */}

      {/* Victory & Rewards Celebration Modal */}
      <VictoryModal
        isOpen={isVictoryModalOpen}
        starsEarned={lastEarnedStars}
        xpEarned={lastEarnedXp}
        onContinue={() => {
          setIsVictoryModalOpen(false);
          // Auto advance to next sample lesson if available
          const nextLesson = SAMPLE_LESSONS.find(
            (l) => l.subject === selectedSubject && l.id !== activeLesson?.id
          );
          if (nextLesson) {
            setActiveLesson(nextLesson);
          } else {
            setCurrentPortal('adventure');
          }
        }}
        onBackToDashboard={() => {
          setIsVictoryModalOpen(false);
          setCurrentPortal('student');
        }}
        onRetry={() => {
          setIsVictoryModalOpen(false);
        }}
      />

      {/* Profile & Badges Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profile={profile}
        onUpdateProfile={(updated) => {
          setProfile((prev) => ({ ...prev, ...updated }));
          if (updated.grade) {
            setCurrentGrade(updated.grade);
          }
        }}
      />

      {/* Star Rewards Shop Modal */}
      <StarShopModal
        isOpen={isShopModalOpen}
        onClose={() => setIsShopModalOpen(false)}
        userStars={profile.stars}
        onBuyItem={handleBuyShopItem}
      />

      {/* Daily Quests Popup Modal */}
      <Modal
        isOpen={isQuestsModalOpen}
        onClose={() => setIsQuestsModalOpen(false)}
        title="Nhiệm Vụ Việc Tốt Mỗi Ngày"
        icon="📋"
        maxWidth="md"
      >
        <div className="space-y-4">
          <p className="font-vietnam text-xs sm:text-sm font-semibold text-slate-600">
            Hoàn thành 3 việc tốt mỗi ngày để giữ thói quen tự học và mở Rương Quà Báu 🎁!
          </p>

          <div className="space-y-3">
            {dailyQuests.map((quest) => (
              <div
                key={quest.id}
                className={`p-3.5 rounded-2xl border-2 flex items-center justify-between ${
                  quest.isCompleted ? 'border-emerald-300 bg-emerald-50' : 'border-slate-200 bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{quest.icon}</span>
                  <div>
                    <h5 className="font-baloo font-bold text-sm text-brand-dark">{quest.title}</h5>
                    <p className="font-vietnam text-xs text-slate-500 font-medium">{quest.subtitle}</p>
                  </div>
                </div>
                <span className="font-baloo font-bold text-xs bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">
                  {quest.isCompleted ? '✓ Xong' : `${quest.progress}/${quest.maxProgress}`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default App;
