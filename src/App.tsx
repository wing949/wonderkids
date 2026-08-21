import React, { Suspense, useRef, useState, useEffect } from 'react';
import { GradeLevel, ThemeId, PortalView, SubjectType, MascotId, StudentProfile, LessonNode, DailyQuest, StarShopItem } from './types';
import { INITIAL_DAILY_QUESTS } from './data/gamificationData';
import { getLessonsForGradeAndSubject } from './data/curriculum';
import { Header } from './components/layout/Header';
import { BottomNav } from './components/layout/BottomNav';
import { StudentDashboard } from './components/dashboard/StudentDashboard';
import { AdventureMap } from './components/adventure/AdventureMap';
import { InteractiveExerciseEngine } from './components/exercise/InteractiveExerciseEngine';
import { VictoryModal } from './components/rewards/VictoryModal';
import { ProfileModal } from './components/profile/ProfileModal';
import { StarShopModal } from './components/profile/StarShopModal';
import { ParentPortal } from './components/parent/ParentPortal';
import { AdminLogin } from './components/admin/AdminLogin';
import { QuizArena } from './components/arena/QuizArena';
import { Modal } from './components/ui/Modal';
import { CuteDoodleBackground } from './components/common/CuteDoodleBackground';
import { checkAdminSession, logoutAdmin } from './utils/adminAccess';
import { createAdminAuthRequestTracker } from './utils/adminAuthRequestTracker';
import { AdminTab, AppRoute, findLessonById, getAppPath, parseAppRoute } from './utils/appRoute';
import { isControlPanelRoute } from './utils/controlPanelRoute';

const AdminCMS = React.lazy(async () => {
  const module = await import('./components/admin/AdminCMS');
  return { default: module.AdminCMS };
});

const STORAGE_KEY_PROFILE = 'wonderkids_profile_v1';
const STORAGE_KEY_GRADE = 'wonderkids_grade_v1';
const STORAGE_KEY_THEME = 'wonderkids_theme_v1';
const ROUTEABLE_SUBJECTS: SubjectType[] = ['math', 'vietnamese', 'english', 'logic'];
const ROUTEABLE_GRADES: GradeLevel[] = [1, 2, 3, 4, 5];

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

const getInitialAppRoute = (): AppRoute => (
  typeof window === 'undefined' ? { kind: 'student' } : parseAppRoute(window.location.pathname)
);

const getPortalForRoute = (route: AppRoute): PortalView => {
  switch (route.kind) {
    case 'adventure': return 'adventure';
    case 'exercise': return 'exercise';
    case 'parent': return 'parent';
    case 'arena': return 'arena';
    case 'admin': return 'admin-login';
    default: return 'student';
  }
};

const findCurriculumLesson = (lessonId: string): LessonNode | null => {
  for (const subject of ROUTEABLE_SUBJECTS) {
    for (const grade of ROUTEABLE_GRADES) {
      const lesson = findLessonById(getLessonsForGradeAndSubject(grade, subject), lessonId);
      if (lesson) return lesson;
    }
  }
  return null;
};

export const App: React.FC = () => {
  const [initialRoute] = useState<AppRoute>(getInitialAppRoute);
  const [initialLesson] = useState<LessonNode | null>(() => (
    initialRoute.kind === 'exercise' ? findCurriculumLesson(initialRoute.lessonId) : null
  ));
  const [profile, setProfile] = useState<StudentProfile>(getInitialProfile);
  const [currentGrade, setCurrentGrade] = useState<GradeLevel>(() => {
    if (initialRoute.kind === 'adventure') return initialRoute.grade;
    if (initialLesson) return initialLesson.grade;
    const p = getInitialProfile();
    return p.grade || getInitialGrade();
  });
  const [currentTheme, setCurrentTheme] = useState<ThemeId>(getInitialTheme);
  const [currentPortal, setCurrentPortal] = useState<PortalView>(() => (
    initialRoute.kind === 'exercise' && !initialLesson ? 'student' : getPortalForRoute(initialRoute)
  ));
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const adminAuthRequestTracker = useRef(createAdminAuthRequestTracker());
  const [selectedSubject, setSelectedSubject] = useState<SubjectType>(() => {
    if (initialRoute.kind === 'adventure') return initialRoute.subject;
    return initialLesson?.subject || 'math';
  });
  const [adminTab, setAdminTab] = useState<AdminTab>(() => (
    initialRoute.kind === 'admin' ? initialRoute.tab : 'curriculum'
  ));
  
  const [activeLesson, setActiveLesson] = useState<LessonNode | null>(initialLesson);
  const [lessonSessionKey, setLessonSessionKey] = useState(0);
  const [dailyQuests] = useState<DailyQuest[]>(INITIAL_DAILY_QUESTS);

  // Modals state
  const [isVictoryModalOpen, setIsVictoryModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(initialRoute.kind === 'profile');
  const [isShopModalOpen, setIsShopModalOpen] = useState(initialRoute.kind === 'shop');
  const [isQuestsModalOpen, setIsQuestsModalOpen] = useState(initialRoute.kind === 'quests');

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

  const applyAppRoute = (route: AppRoute) => {
    setIsProfileModalOpen(false);
    setIsShopModalOpen(false);
    setIsQuestsModalOpen(false);

    switch (route.kind) {
      case 'profile':
        setCurrentPortal('student');
        setIsProfileModalOpen(true);
        return;
      case 'shop':
        setCurrentPortal('student');
        setIsShopModalOpen(true);
        return;
      case 'quests':
        setCurrentPortal('student');
        setIsQuestsModalOpen(true);
        return;
      case 'adventure':
        setCurrentGrade(route.grade);
        setSelectedSubject(route.subject);
        setCurrentPortal('adventure');
        return;
      case 'exercise': {
        const lesson = findCurriculumLesson(route.lessonId);
        if (!lesson) {
          setCurrentPortal('student');
          return;
        }
        setCurrentGrade(lesson.grade);
        setSelectedSubject(lesson.subject);
        setActiveLesson(lesson);
        setLessonSessionKey((prev) => prev + 1);
        setCurrentPortal('exercise');
        return;
      }
      case 'parent':
        setCurrentPortal('parent');
        return;
      case 'arena':
        setCurrentPortal('arena');
        return;
      case 'admin':
        setAdminTab(route.tab);
        setCurrentPortal(isAdminAuthenticated ? 'admin' : 'admin-login');
        return;
      default:
        setCurrentPortal('student');
    }
  };

  const navigateTo = (route: AppRoute) => {
    const path = getAppPath(route);
    if (typeof window !== 'undefined' && window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    applyAppRoute(route);
  };

  useEffect(() => {
    let isCurrent = true;
    const requestId = adminAuthRequestTracker.current.begin();
    void checkAdminSession().then((hasSession) => {
      if (!isCurrent || !adminAuthRequestTracker.current.isCurrent(requestId)) return;
      setIsAdminAuthenticated(hasSession);
      if (hasSession && isControlPanelRoute(window.location.pathname)) {
        setCurrentPortal('admin');
      }
    });
    return () => {
      isCurrent = false;
    };
  }, []);

  useEffect(() => {
    const syncPortalWithPath = () => applyAppRoute(parseAppRoute(window.location.pathname));

    window.addEventListener('popstate', syncPortalWithPath);
    return () => window.removeEventListener('popstate', syncPortalWithPath);
  }, [isAdminAuthenticated]);

  const handlePortalChange = (portal: PortalView) => {
    if (portal === 'student') {
      navigateTo({ kind: 'student' });
    } else if (portal === 'adventure') {
      navigateTo({ kind: 'adventure', subject: selectedSubject, grade: currentGrade });
    } else if (portal === 'parent') {
      navigateTo({ kind: 'parent' });
    } else if (portal === 'arena') {
      navigateTo({ kind: 'arena' });
    }
  };

  const returnToStudentPortal = () => navigateTo({ kind: 'student' });

  const handleAdminLogout = async () => {
    const hasLoggedOut = await logoutAdmin();
    if (!hasLoggedOut) return false;
    adminAuthRequestTracker.current.invalidate();
    setIsAdminAuthenticated(false);
    returnToStudentPortal();
    return true;
  };

  // Handler: Start a lesson
  const handleStartLesson = (lesson: LessonNode) => {
    navigateTo({ kind: 'exercise', lessonId: lesson.id });
  };

  // Handler: Select subject from Dashboard
  const handleSelectSubject = (subject: SubjectType) => {
    navigateTo({ kind: 'adventure', subject, grade: currentGrade });
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
    if (currentPortal === 'adventure') {
      navigateTo({ kind: 'adventure', subject: selectedSubject, grade });
    }
  };

  // Handler: Change Theme
  const handleThemeChange = (theme: ThemeId) => {
    setCurrentTheme(theme);
    setProfile((prev) => ({ ...prev, theme }));
  };

  return (
    <div
      className="min-h-screen transition-colors duration-500 relative"
      style={{ background: 'var(--theme-gradient, linear-gradient(180deg, #E0F2FE 0%, #BAE6FD 100%))' }}
    >
      {/* Background Animated Doodles & Soft Clouds (mykidspace.online style) */}
      <CuteDoodleBackground theme={currentTheme} />

      {/* Universal Header (Hidden inside exercise mode to prevent distractions) */}
      {currentPortal !== 'exercise' && currentPortal !== 'admin' && currentPortal !== 'admin-login' && (
        <Header
          profile={profile}
          currentGrade={currentGrade}
          onGradeChange={handleGradeChange}
          currentTheme={currentTheme}
          onThemeChange={handleThemeChange}
          currentPortal={currentPortal}
          onPortalChange={handlePortalChange}
          onOpenShop={() => navigateTo({ kind: 'shop' })}
          onOpenBadges={() => navigateTo({ kind: 'profile' })}
        />
      )}

      {/* Main Portals Router */}
      <main className="min-h-[calc(100vh-5rem)]">
        {currentPortal === 'student' && (
          <StudentDashboard
            profile={profile}
            currentGrade={currentGrade}
            onSelectSubject={handleSelectSubject}
            onOpenAdventure={() => navigateTo({ kind: 'adventure', subject: selectedSubject, grade: currentGrade })}
            onOpenArena={() => navigateTo({ kind: 'arena' })}
            onOpenShop={() => navigateTo({ kind: 'shop' })}
            onOpenQuests={() => navigateTo({ kind: 'quests' })}
            onMascotChange={handleMascotChange}
            dailyQuests={dailyQuests}
          />
        )}

        {currentPortal === 'adventure' && (
          <AdventureMap
            currentGrade={currentGrade}
            selectedSubject={selectedSubject}
            onSelectSubject={handleSelectSubject}
            onStartLesson={handleStartLesson}
            onBackToDashboard={returnToStudentPortal}
          />
        )}

        {currentPortal === 'exercise' && activeLesson && (
          <InteractiveExerciseEngine
            key={`${activeLesson.id}-${lessonSessionKey}`}
            lesson={activeLesson}
            onExit={() => navigateTo({ kind: 'adventure', subject: selectedSubject, grade: currentGrade })}
            onComplete={handleCompleteLesson}
          />
        )}

        {currentPortal === 'arena' && (
          <QuizArena
            onBackToDashboard={returnToStudentPortal}
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
          <ParentPortal
            onBackToStudent={returnToStudentPortal}
            onRewardStars={(stars) => {
              setProfile((prev) => ({
                ...prev,
                stars: prev.stars + stars,
              }));
            }}
          />
        )}

        {currentPortal === 'admin' && isAdminAuthenticated && (
          <Suspense fallback={<div className="p-10 text-center font-baloo text-lg font-bold text-slate-600">Đang mở khu vực quản trị…</div>}>
            <AdminCMS
              activeTab={adminTab}
              onBackToStudent={returnToStudentPortal}
              onLogout={handleAdminLogout}
              onTabChange={(tab) => navigateTo({ kind: 'admin', tab })}
            />
          </Suspense>
        )}

        {(currentPortal === 'admin-login' || (currentPortal === 'admin' && !isAdminAuthenticated)) && (
          <AdminLogin
            onAuthenticated={() => {
              adminAuthRequestTracker.current.invalidate();
              setIsAdminAuthenticated(true);
              setCurrentPortal('admin');
            }}
            onBackToStudent={returnToStudentPortal}
          />
        )}
      </main>

      {/* Mobile Bottom Dock (Hidden in exercise mode) */}
      {currentPortal !== 'exercise' && currentPortal !== 'admin' && currentPortal !== 'admin-login' && (
        <BottomNav
          currentPortal={currentPortal}
          onPortalChange={handlePortalChange}
          onOpenShop={() => navigateTo({ kind: 'shop' })}
          onOpenQuests={() => navigateTo({ kind: 'quests' })}
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
          // Auto advance to next lesson in full SGK curriculum
          const currentLessons = getLessonsForGradeAndSubject(currentGrade, selectedSubject);
          const currentIdx = currentLessons.findIndex((l) => l.id === activeLesson?.id);
          if (currentIdx !== -1 && currentIdx + 1 < currentLessons.length) {
            handleStartLesson(currentLessons[currentIdx + 1]);
          } else {
            navigateTo({ kind: 'adventure', subject: selectedSubject, grade: currentGrade });
          }
        }}
        onBackToDashboard={() => {
          setIsVictoryModalOpen(false);
          returnToStudentPortal();
        }}
        onRetry={() => {
          setIsVictoryModalOpen(false);
          setLessonSessionKey((prev) => prev + 1);
          setCurrentPortal('exercise');
        }}
      />

      {/* Profile & Badges Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={returnToStudentPortal}
        profile={profile}
        onUpdateProfile={(updated) => {
          setProfile((prev) => ({ ...prev, ...updated }));
          if (updated.grade) {
            setCurrentGrade(updated.grade);
          }
          if (updated.theme) {
            setCurrentTheme(updated.theme);
          }
        }}
      />

      {/* Star Rewards Shop Modal */}
      <StarShopModal
        isOpen={isShopModalOpen}
        onClose={returnToStudentPortal}
        userStars={profile.stars}
        onBuyItem={handleBuyShopItem}
      />

      {/* Daily Quests Popup Modal */}
      <Modal
        isOpen={isQuestsModalOpen}
        onClose={returnToStudentPortal}
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
