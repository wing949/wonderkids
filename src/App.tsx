import React, { Suspense, useMemo, useRef, useState, useEffect } from 'react';
import { GradeLevel, ThemeId, PortalView, SubjectType, MascotId, StudentProfile, LessonNode, DailyQuest, StarShopItem } from './types';
import { INITIAL_DAILY_QUESTS, MOCK_PARENT_REPORT } from './data/gamificationData';
import { Header } from './components/layout/Header';
import { BottomNav } from './components/layout/BottomNav';
import { StudentDashboard } from './components/dashboard/StudentDashboard';
import { VictoryModal } from './components/rewards/VictoryModal';
import { ProfileModal } from './components/profile/ProfileModal';
import { StarShopModal } from './components/profile/StarShopModal';
import { AdminLogin } from './components/admin/AdminLogin';
import { Modal } from './components/ui/Modal';
import { CuteDoodleBackground } from './components/common/CuteDoodleBackground';
import { checkAdminSession, logoutAdmin } from './utils/adminAccess';
import { createAdminAuthRequestTracker } from './utils/adminAuthRequestTracker';
import { AdminTab, AppRoute, getAppPath, parseAppRoute } from './utils/appRoute';
import { getPortalForRoute } from './utils/portalRoute';
import { isControlPanelRoute } from './utils/controlPanelRoute';
import { loadCurriculumLesson, loadLessonsForGradeAndSubject } from './utils/curriculumLoader';
import {
  addManagedKid,
  createEmptyParentReport,
  createKidScopedStorage,
  getActiveManagedKid,
  loadParentAccount,
  persistParentAccount,
  selectManagedKid,
  updateManagedKidProfile,
  updateManagedKidReport,
  type ParentAccount,
} from './utils/parentAccount';

const AdminCMS = React.lazy(async () => {
  const module = await import('./components/admin/AdminCMS');
  return { default: module.AdminCMS };
});

const AdventureMap = React.lazy(async () => {
  const module = await import('./components/adventure/AdventureMap');
  return { default: module.AdventureMap };
});

const InteractiveExerciseEngine = React.lazy(async () => {
  const module = await import('./components/exercise/InteractiveExerciseEngine');
  return { default: module.InteractiveExerciseEngine };
});

const ParentPortal = React.lazy(async () => {
  const module = await import('./components/parent/ParentPortal');
  return { default: module.ParentPortal };
});

const PracticePortal = React.lazy(async () => {
  const module = await import('./components/practice/PracticePortal');
  return { default: module.PracticePortal };
});

const PortalLoading = () => (
  <div className="mx-auto flex min-h-[50vh] max-w-xl items-center justify-center px-6 text-center font-baloo text-lg font-black text-brand-dark">
    <span className="rounded-3xl bg-white/95 px-6 py-5 shadow-washi">Đang mở góc học tập… ✨</span>
  </div>
);

const PortalLoadFailure: React.FC<{
  message: string;
  onRetry: () => void;
  onBack: () => void;
}> = ({ message, onRetry, onBack }) => (
  <div className="mx-auto flex min-h-[50vh] max-w-xl items-center justify-center px-6 text-center">
    <div className="w-full rounded-3xl bg-white/95 px-6 py-6 shadow-washi">
      <div className="text-4xl" aria-hidden="true">🛟</div>
      <h2 className="mt-2 font-baloo text-xl font-black text-brand-dark">Chưa mở được bài học</h2>
      <p className="mt-2 font-vietnam text-sm font-semibold text-slate-600">{message}</p>
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button onClick={onBack} className="min-h-12 rounded-2xl bg-slate-100 px-4 font-baloo font-black text-slate-700">
          Về danh sách bài
        </button>
        <button onClick={onRetry} className="min-h-12 rounded-2xl bg-emerald-500 px-4 font-baloo font-black text-white shadow-pop-sm">
          Thử mở lại
        </button>
      </div>
    </div>
  </div>
);

class LazyLoadBoundary extends React.Component<React.PropsWithChildren, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error('Failed to load a learning screen', error);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="mx-auto flex min-h-[50vh] max-w-xl items-center justify-center px-6 text-center">
        <div className="w-full rounded-3xl bg-white/95 px-6 py-6 shadow-washi">
          <div className="text-4xl" aria-hidden="true">🔄</div>
          <h2 className="mt-2 font-baloo text-xl font-black text-brand-dark">Mạng đang hơi chậm</h2>
          <p className="mt-2 font-vietnam text-sm font-semibold text-slate-600">
            Bé thử tải lại màn hình nhé. Kết quả học trước đó vẫn được giữ nguyên.
          </p>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a href="/" className="flex min-h-12 items-center justify-center rounded-2xl bg-slate-100 px-4 font-baloo font-black text-slate-700">
              Về trang chủ
            </a>
            <button onClick={() => window.location.reload()} className="min-h-12 rounded-2xl bg-emerald-500 px-4 font-baloo font-black text-white shadow-pop-sm">
              Tải lại
            </button>
          </div>
        </div>
      </div>
    );
  }
}

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

const createFallbackParentAccount = (): ParentAccount => ({
  version: 1,
  activeKidId: 'kid-wk-8829',
  kids: [{
    id: 'kid-wk-8829',
    profile: { ...INITIAL_PROFILE },
    report: MOCK_PARENT_REPORT,
    createdAt: 0,
    updatedAt: 0,
  }],
  updatedAt: 0,
});

const getInitialParentAccount = (): ParentAccount => {
  if (typeof window === 'undefined') return createFallbackParentAccount();
  return loadParentAccount(window.localStorage, INITIAL_PROFILE, MOCK_PARENT_REPORT);
};

const getInitialAppRoute = (): AppRoute => (
  typeof window === 'undefined' ? { kind: 'student' } : parseAppRoute(`${window.location.pathname}${window.location.search}`)
);

type PracticeAppRoute = Extract<AppRoute, { kind: 'practice-hub' | 'practice-list' | 'practice-set' | 'practice-competition-list' | 'practice-competition-set' | 'practice-custom-set' }>;

export const App: React.FC = () => {
  const [initialRoute] = useState<AppRoute>(getInitialAppRoute);
  const [parentAccount, setParentAccount] = useState<ParentAccount>(getInitialParentAccount);
  const activeKid = getActiveManagedKid(parentAccount);
  const profile = activeKid.profile;
  const [currentGrade, setCurrentGrade] = useState<GradeLevel>(() => {
    if (initialRoute.kind === 'adventure') return initialRoute.grade;
    return activeKid.profile.grade;
  });
  const [currentTheme, setCurrentTheme] = useState<ThemeId>(activeKid.profile.theme);
  const [currentPortal, setCurrentPortal] = useState<PortalView>(() => (
    getPortalForRoute(initialRoute)
  ));
  const [practiceRoute, setPracticeRoute] = useState<PracticeAppRoute>(() => (
    initialRoute.kind === 'practice-hub' || initialRoute.kind === 'practice-list' || initialRoute.kind === 'practice-set' || initialRoute.kind === 'practice-competition-list' || initialRoute.kind === 'practice-competition-set' || initialRoute.kind === 'practice-custom-set'
      ? initialRoute
      : { kind: 'practice-hub' }
  ));
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const adminAuthRequestTracker = useRef(createAdminAuthRequestTracker());
  const [selectedSubject, setSelectedSubject] = useState<SubjectType>(() => {
    if (initialRoute.kind === 'adventure') return initialRoute.subject;
    return 'math';
  });
  const [adminTab, setAdminTab] = useState<AdminTab>(() => (
    initialRoute.kind === 'admin' ? initialRoute.tab : 'curriculum'
  ));

  const [activeLesson, setActiveLesson] = useState<LessonNode | null>(null);
  const [isLessonLoading, setIsLessonLoading] = useState(initialRoute.kind === 'exercise');
  const [lessonLoadError, setLessonLoadError] = useState<string | null>(null);
  const lessonLoadRequest = useRef(0);
  const [lessonSessionKey, setLessonSessionKey] = useState(0);
  const [dailyQuests] = useState<DailyQuest[]>(INITIAL_DAILY_QUESTS);

  // Modals state
  const [isVictoryModalOpen, setIsVictoryModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(initialRoute.kind === 'profile');
  const [isShopModalOpen, setIsShopModalOpen] = useState(initialRoute.kind === 'shop');
  const [isQuestsModalOpen, setIsQuestsModalOpen] = useState(initialRoute.kind === 'quests');

  const [lastEarnedStars, setLastEarnedStars] = useState(3);
  const [lastEarnedXp, setLastEarnedXp] = useState(100);
  const previousActiveKidId = useRef(activeKid.id);

  const updateActiveProfile = (updater: Partial<StudentProfile> | ((current: StudentProfile) => StudentProfile)) => {
    setParentAccount((currentAccount) => {
      const currentKid = getActiveManagedKid(currentAccount);
      const nextProfile = typeof updater === 'function' ? updater(currentKid.profile) : { ...currentKid.profile, ...updater };
      return updateManagedKidProfile(currentAccount, currentKid.id, nextProfile);
    });
  };

  const activeKidStorage = useMemo(() => (
    typeof window === 'undefined' ? undefined : createKidScopedStorage(window.localStorage, activeKid.id)
  ), [activeKid.id]);

  // Persist the complete family account. The legacy single-profile keys are only
  // read once by loadParentAccount during migration and are no longer authoritative.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    persistParentAccount(window.localStorage, parentAccount);
  }, [parentAccount]);

  useEffect(() => {
    if (previousActiveKidId.current === activeKid.id) return;
    previousActiveKidId.current = activeKid.id;
    setCurrentGrade(activeKid.profile.grade);
    setCurrentTheme(activeKid.profile.theme);
  }, [activeKid.id, activeKid.profile.grade, activeKid.profile.theme]);

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  const applyAppRoute = (route: AppRoute) => {
    setIsProfileModalOpen(false);
    setIsShopModalOpen(false);
    setIsQuestsModalOpen(false);
    if (route.kind !== 'exercise') {
      lessonLoadRequest.current += 1;
      setIsLessonLoading(false);
      setLessonLoadError(null);
    }

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
        const requestId = ++lessonLoadRequest.current;
        setActiveLesson(null);
        setIsLessonLoading(true);
        setLessonLoadError(null);
        setCurrentPortal('exercise');
        void loadCurriculumLesson(route.lessonId).then((lesson) => {
          if (requestId !== lessonLoadRequest.current) return;
          if (!lesson) {
            setLessonLoadError('Không tìm thấy bài học này. Bé có thể quay lại danh sách và chọn bài khác.');
            return;
          }
          setCurrentGrade(lesson.grade);
          setSelectedSubject(lesson.subject);
          setActiveLesson(lesson);
          setLessonSessionKey((prev) => prev + 1);
        }).catch((error) => {
          if (requestId !== lessonLoadRequest.current) return;
          console.error('Failed to load lesson data', error);
          setLessonLoadError('Kết nối chưa ổn định nên dữ liệu bài học chưa tải xong.');
        }).finally(() => {
          if (requestId === lessonLoadRequest.current) setIsLessonLoading(false);
        });
        return;
      }
      case 'parent':
        setCurrentPortal('parent');
        return;
      case 'arena':
        setPracticeRoute({ kind: 'practice-hub', mode: 'arena' });
        setCurrentPortal('practice');
        return;
      case 'practice-hub':
      case 'practice-list':
      case 'practice-set':
      case 'practice-competition-list':
      case 'practice-competition-set':
      case 'practice-custom-set':
        setPracticeRoute(route);
        if (route.kind !== 'practice-hub') setCurrentGrade(route.grade);
        setCurrentPortal('practice');
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
    if (typeof window !== 'undefined' && `${window.location.pathname}${window.location.search}` !== path) {
      window.history.pushState({}, '', path);
    }
    applyAppRoute(route);
  };

  useEffect(() => {
    if (initialRoute.kind === 'exercise') applyAppRoute(initialRoute);
  }, []);

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
    const syncPortalWithPath = () => applyAppRoute(parseAppRoute(`${window.location.pathname}${window.location.search}`));

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
    } else if (portal === 'practice') {
      navigateTo({ kind: 'practice-hub' });
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
    const path = getAppPath({ kind: 'exercise', lessonId: lesson.id });
    if (window.location.pathname !== path) window.history.pushState({}, '', path);
    lessonLoadRequest.current += 1;
    setIsLessonLoading(false);
    setLessonLoadError(null);
    setCurrentGrade(lesson.grade);
    setSelectedSubject(lesson.subject);
    setActiveLesson(lesson);
    setLessonSessionKey((prev) => prev + 1);
    setCurrentPortal('exercise');
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
    updateActiveProfile((prev) => ({
      ...prev,
      stars: prev.stars + starsEarned,
      xp: prev.xp + xpEarned,
      totalLessonsCompleted: prev.totalLessonsCompleted + 1,
    }));

    setIsVictoryModalOpen(true);
  };

  // Handler: Buy item from Star Shop
  const handleBuyShopItem = (item: StarShopItem) => {
    updateActiveProfile((prev) => ({
      ...prev,
      stars: Math.max(0, prev.stars - item.costStars),
    }));
  };

  // Handler: Change Mascot
  const handleMascotChange = (id: MascotId) => {
    updateActiveProfile((prev) => ({
      ...prev,
      selectedMascot: id,
      avatarId: id,
    }));
  };

  // Handler: Change Grade
  const handleGradeChange = (grade: GradeLevel) => {
    setCurrentGrade(grade);
    updateActiveProfile({ grade });
    if (currentPortal === 'adventure') {
      navigateTo({ kind: 'adventure', subject: selectedSubject, grade });
    }
  };

  // Handler: Change Theme
  const handleThemeChange = (theme: ThemeId) => {
    setCurrentTheme(theme);
    updateActiveProfile({ theme });
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
      <LazyLoadBoundary key={currentPortal}>
        <main className="min-h-[calc(100vh-5rem)]">
          {currentPortal === 'student' && (
            <StudentDashboard
              profile={profile}
              currentGrade={currentGrade}
              onSelectSubject={handleSelectSubject}
              onOpenAdventure={() => navigateTo({ kind: 'adventure', subject: selectedSubject, grade: currentGrade })}
              onOpenPractice={() => navigateTo({ kind: 'practice-hub' })}
              onOpenShop={() => navigateTo({ kind: 'shop' })}
              onOpenQuests={() => navigateTo({ kind: 'quests' })}
              onMascotChange={handleMascotChange}
              dailyQuests={dailyQuests}
            />
          )}

          {currentPortal === 'adventure' && (
            <Suspense fallback={<PortalLoading />}>
              <AdventureMap
                currentGrade={currentGrade}
                selectedSubject={selectedSubject}
                onSelectSubject={handleSelectSubject}
                onStartLesson={handleStartLesson}
                onBackToDashboard={returnToStudentPortal}
              />
            </Suspense>
          )}

          {currentPortal === 'exercise' && activeLesson && (
            <Suspense fallback={<PortalLoading />}>
              <InteractiveExerciseEngine
                key={`${activeLesson.id}-${lessonSessionKey}`}
                lesson={activeLesson}
                onExit={() => navigateTo({ kind: 'adventure', subject: selectedSubject, grade: currentGrade })}
                onComplete={handleCompleteLesson}
              />
            </Suspense>
          )}

          {currentPortal === 'exercise' && isLessonLoading && <PortalLoading />}

          {currentPortal === 'exercise' && lessonLoadError && !isLessonLoading && (
            <PortalLoadFailure
              message={lessonLoadError}
              onRetry={() => applyAppRoute(parseAppRoute(window.location.pathname))}
              onBack={() => navigateTo({ kind: 'adventure', subject: selectedSubject, grade: currentGrade })}
            />
          )}

          {currentPortal === 'practice' && (
            <Suspense fallback={<PortalLoading />}>
              <PracticePortal
                route={practiceRoute}
                playerName={profile.name}
                currentGrade={currentGrade}
                storage={activeKidStorage}
                onNavigate={navigateTo}
                onBack={returnToStudentPortal}
                onReward={(xp, stars) => {
                  updateActiveProfile((prev) => ({
                    ...prev,
                    xp: prev.xp + xp,
                    stars: prev.stars + stars,
                  }));
                }}
              />
            </Suspense>
          )}

          {currentPortal === 'parent' && (
            <Suspense fallback={<PortalLoading />}>
              <ParentPortal
                kids={parentAccount.kids}
                activeKidId={activeKid.id}
                report={activeKid.report}
                onSelectKid={(kidId) => setParentAccount((current) => selectManagedKid(current, kidId))}
                onAddKid={(newProfile) => setParentAccount((current) => (
                  addManagedKid(current, newProfile, createEmptyParentReport(MOCK_PARENT_REPORT))
                ))}
                onUpdateKid={(kidId, changes) => {
                  if (kidId === activeKid.id && changes.grade) setCurrentGrade(changes.grade);
                  if (kidId === activeKid.id && changes.theme) setCurrentTheme(changes.theme);
                  setParentAccount((current) => updateManagedKidProfile(current, kidId, changes));
                }}
                onUpdateReport={(nextReport) => setParentAccount((current) => (
                  updateManagedKidReport(current, current.activeKidId, nextReport)
                ))}
                onBackToStudent={returnToStudentPortal}
                onRewardStars={(stars) => {
                  updateActiveProfile((prev) => ({
                    ...prev,
                    stars: prev.stars + stars,
                  }));
                }}
              />
            </Suspense>
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
      </LazyLoadBoundary>

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
          void loadLessonsForGradeAndSubject(currentGrade, selectedSubject).then((currentLessons) => {
            const currentIdx = currentLessons.findIndex((lesson) => lesson.id === activeLesson?.id);
            if (currentIdx !== -1 && currentIdx + 1 < currentLessons.length) {
              handleStartLesson(currentLessons[currentIdx + 1]);
            } else {
              navigateTo({ kind: 'adventure', subject: selectedSubject, grade: currentGrade });
            }
          }).catch((error) => {
            console.error('Failed to load the next lesson', error);
            navigateTo({ kind: 'adventure', subject: selectedSubject, grade: currentGrade });
          });
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
          updateActiveProfile(updated);
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
                onClick={() => {
                  setIsQuestsModalOpen(false);
                  handleSelectSubject(quest.subject || 'math');
                }}
                className={`p-3.5 rounded-2xl flex items-center justify-between transition-all cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.01] ${
                  quest.isCompleted ? 'bg-emerald-50/90' : 'bg-white hover:bg-amber-50/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{quest.icon}</span>
                  <div>
                    <h5 className="font-baloo font-bold text-sm text-brand-dark">{quest.title}</h5>
                    <p className="font-vietnam text-xs text-slate-500 font-medium">{quest.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-baloo font-bold text-xs bg-amber-100 text-amber-900 px-2.5 py-1 rounded-full shadow-2xs">
                    {quest.isCompleted ? '✓ Đã xong' : `${quest.progress}/${quest.maxProgress}`}
                  </span>
                  <span className="font-baloo font-bold text-xs text-amber-700">➔</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default App;
