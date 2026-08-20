export type SubjectType = 'math' | 'vietnamese' | 'english' | 'logic';

export type GradeLevel = 1 | 2 | 3 | 4 | 5;

export type MascotId = 'bobo' | 'miumiu' | 'pipi' | 'bipbip';

export type ThemeId = 'ocean' | 'space' | 'jungle' | 'candy' | 'sunny';

export type PortalView = 'student' | 'parent' | 'admin' | 'adventure' | 'lesson' | 'exercise' | 'arena';

export type QuestionType = 
  | 'bubble_choice' 
  | 'drag_drop' 
  | 'keypad' 
  | 'audio_listen' 
  | 'story_sequence' 
  | 'fill_blank'
  | 'spelling_blend';

export interface QuestionOption {
  id: string;
  label: string;
  sublabel?: string;
  image?: string;
  isCorrect?: boolean;
}

export interface MatchingPair {
  id: string;
  leftText: string;
  leftImage?: string;
  rightText: string;
  rightImage?: string;
}

export interface SequenceItem {
  id: string;
  order: number;
  text: string;
  image?: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  questionText: string;
  audioText?: string;
  instruction?: string;
  hint?: string;
  image?: string;
  points: number;
  options?: QuestionOption[];
  correctAnswer?: string | number | string[];
  pairs?: MatchingPair[];
  sequenceItems?: SequenceItem[];
  templateText?: string; // For fill_blank e.g. "Bông hoa màu [___]"
  spellingData?: {
    initial: string; // Âm đầu (ví dụ: b, c, d)
    vowel: string;   // Âm chính / vần (ví dụ: e, ê, a)
    tone: string;    // Dấu thanh (ví dụ: không dấu, sắc, huyền, hỏi, ngã, nặng)
    result: string;  // Tiếng hoàn chỉnh (ví dụ: bé, bê, bè)
    pronunciation: string; // "bờ - e - be - sắc - BÉ"
  };
}

export interface ReadingPassage {
  title: string;
  author?: string;
  genre?: 'poem' | 'story' | 'prose';
  content: string[]; // Các khổ thơ hoặc đoạn văn
  audioNarration?: string; // Đoạn text chuẩn để phát âm mẫu
  vocabularyNotes?: { word: string; meaning: string }[];
}

export interface LessonNode {
  id: string;
  title: string;
  description: string;
  subject: SubjectType;
  grade: GradeLevel;
  unit: string;
  textbookPageRef?: string; // Ví dụ: "SGK Tiếng Việt 1 Tập 1 — Trang 16, 17"
  order: number;
  starsEarned: number; // 0, 1, 2, 3
  isLocked: boolean;
  isBossLevel?: boolean;
  xpReward: number;
  starReward: number;
  theoryContent?: {
    summary: string;
    keyPoints: string[];
    mascotTip: string;
    examples?: string[];
  };
  readingPassage?: ReadingPassage;
  questions: Question[];
}

export interface SubjectInfo {
  id: SubjectType;
  name: string;
  subtitle: string;
  description: string;
  color: string;
  accentColor: string;
  bgColor: string;
  washiColor: string;
  icon: string;
  totalLessons: number;
  completedLessons: number;
  badgeName: string;
  mascot: MascotId;
}

export interface Mascot {
  id: MascotId;
  name: string;
  title: string;
  description: string;
  avatar: string;
  color: string;
  badge: string;
  subject: SubjectType | 'all';
  quotes: {
    greeting: string;
    cheer: string;
    win: string;
    tryAgain: string;
    rest: string;
  };
}

export interface DailyQuest {
  id: string;
  title: string;
  subtitle: string;
  subject: SubjectType;
  icon: string;
  progress: number;
  maxProgress: number;
  starReward: number;
  xpReward: number;
  isCompleted: boolean;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  subject: SubjectType | 'general';
  isUnlocked: boolean;
  unlockedDate?: string;
}

export interface StarShopItem {
  id: string;
  name: string;
  category: 'avatar' | 'real_gift' | 'powerup';
  costStars: number;
  icon: string;
  description: string;
  isOwned?: boolean;
}

export interface StudentProfile {
  name: string;
  kidCode: string;
  grade: GradeLevel;
  selectedMascot: MascotId;
  avatarId?: string;
  motto?: string;
  theme: ThemeId;
  stars: number;
  gems: number;
  xp: number;
  level: number;
  streak: number;
  streakFrozen: boolean;
  totalLessonsCompleted: number;
  accuracyRate: number;
  avatarAccessory?: string;
}

export interface ParentTask {
  id: string;
  title: string;
  rewardStars: number;
  isCompleted: boolean;
  isApproved: boolean;
}

export interface ParentReport {
  weeklyStudyMinutes: number[];
  days: string[];
  subjectMastery: {
    subject: string;
    score: number; // 0 - 100
    strengths: string[];
    weaknesses: string[];
  }[];
  screenTimeLimitMinutes: number;
  screenTimeUsedMinutes: number;
  parentTasks: ParentTask[];
}

export interface TTSSettings {
  voiceVi: string;        // 'vi-VN-HoaiMyNeural' (Cô Hoài My) | 'vi-VN-NamMinhNeural' (Thầy Nam Minh)
  voiceEn: string;        // 'en-US-JennyNeural' (Cô Jenny) | 'en-US-GuyNeural' (Thầy Guy)
  speechRate: number;     // 0.85 (chậm), 0.95 (chuẩn), 1.05 (nhanh)
  speechPitch: number;    // 1.0
}
