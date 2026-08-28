export type SubjectType = 'math' | 'vietnamese' | 'english' | 'logic';

export type GradeLevel = 1 | 2 | 3 | 4 | 5;

export type MascotId =
  | 'bobo'
  | 'miumiu'
  | 'pipi'
  | 'bipbip'
  | 'dino'
  | 'bunny'
  | 'bear'
  | 'lion'
  | 'cat'
  | 'puppy'
  | 'panda'
  | 'unicorn'
  | 'penguin'
  | 'koala'
  | 'tiger'
  | 'astronaut'
  | 'princess'
  | (string & {});

export type ThemeId = 'ocean' | 'space' | 'jungle' | 'candy' | 'sunny';

export type PortalView = 'student' | 'parent' | 'admin' | 'admin-login' | 'adventure' | 'lesson' | 'exercise' | 'arena' | 'practice' | 'logic';

export type QuestionType = 
  | 'bubble_choice' 
  | 'drag_drop' 
  | 'keypad' 
  | 'audio_listen' 
  | 'story_sequence' 
  | 'fill_blank'
  | 'spelling_blend'
  | 'open_response';

export type ContentOrigin = 'sgk_reference' | 'system_generated' | 'pedagogical_supplement';

export type ProvenanceVerification = 'verified' | 'reference_only' | 'declared_supplement';

export type CatalogSection = 'sgk' | 'sgk_pending' | 'extra_practice';

export type SourceVerificationStatus = 'draft' | 'ocr_reviewed' | 'verified';

export type GradingMode = 'auto' | 'self_confirm';

export interface SourceCitation {
  bookId: string;
  sourcePages: number[];
  sourceLabel: string;
  sourceHash: string;
  verificationStatus: SourceVerificationStatus;
}

export interface ContentProvenance {
  contentOrigin: ContentOrigin;
  verificationStatus: ProvenanceVerification;
  referenceBook?: string;
  referenceLessonTitle?: string;
  referenceDetail?: string;
  referenceUrl?: string;
  note?: string;
}

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
  contentOrigin?: ContentOrigin;
  sourceActivityId?: string;
  sourcePage?: number;
  sourceSubpart?: string;
  gradingMode?: GradingMode;
  options?: QuestionOption[];
  correctAnswer?: string | number | string[];
  pairs?: MatchingPair[];
  sequenceItems?: SequenceItem[];
  templateText?: string; // For fill_blank e.g. "Bông hoa màu [___]"
  visualType?: 'counting' | 'clock' | 'ruler' | 'fraction' | 'geometry' | 'balance' | 'speed' | 'blocks' | 'array' | 'number_line';
  visualData?: {
    itemEmoji?: string;
    leftItemEmoji?: string;
    rightItemEmoji?: string;
    itemCount?: number;
    leftCount?: number;
    rightCount?: number;
    hours?: number;
    minutes?: number;
    lengthCm?: number;
    numerator?: number;
    denominator?: number;
    shape?: 'triangle' | 'trapezoid' | 'circle' | 'rectangle' | 'square' | 'cube' | 'cuboid';
    dimensions?: {
      base?: number | string;
      topBase?: number | string;
      height?: number | string;
      radius?: number | string;
      length?: number | string;
      width?: number | string;
    };
    leftWeight?: string | number;
    rightWeight?: string | number;
    speed?: number | string;
    time?: number | string;
    distance?: number | string;
    rows?: number;
    cols?: number;
    numberLineRange?: [number, number];
    markedNumber?: number;
  };
  spellingData?: {
    initial: string; // Âm đầu (ví dụ: b, c, d)
    vowel: string;   // Âm chính / vần (ví dụ: e, ê, a)
    tone: string;    // Dấu thanh (ví dụ: không dấu, sắc, huyền, hỏi, ngã, nặng)
    result: string;  // Tiếng hoàn chỉnh (ví dụ: bé, bê, bè)
    pronunciation: string; // "bờ - e - be - sắc - BÉ"
  };
}

export interface VocabularyNote {
  word: string;
  meaning: string;
  phonetic?: string;
}

export interface ReadingPassage {
  title: string;
  author?: string;
  genre?: 'poem' | 'story' | 'prose';
  content: string[]; // Các khổ thơ hoặc đoạn văn
  audioNarration?: string; // Đoạn text chuẩn để phát âm mẫu
  vocabularyNotes?: VocabularyNote[];
  contentOrigin?: ContentOrigin;
  verificationStatus?: SourceVerificationStatus;
  sourcePages?: number[];
  sourceHash?: string;
}

export interface LessonNode {
  id: string;
  title: string;
  description: string;
  catalogSection?: CatalogSection;
  cardPreview?: string;
  lessonOverview?: {
    content: string;
    objective: string;
    practice: string;
  };
  sourceCitation?: SourceCitation;
  sourcePageImageUrls?: string[];
  subject: SubjectType;
  grade: GradeLevel;
  semester?: 1 | 2;
  unit: string;
  textbookPageRef?: string; // Ví dụ: "SGK Tiếng Việt 1 Tập 1 — Trang 14, 15"
  sourceType?: 'sgk_official' | 'pedagogical_supplement';
  sourceBook?: string; // Tên bộ sách chuẩn (Bộ Kết nối tri thức với cuộc sống / Cánh Diều / Chân trời sáng tạo, NXB GDVN)
  sourceDetail?: string; // Chi tiết số trang, mục trong sách giáo khoa
  referenceBook?: string;
  referenceDetail?: string;
  referenceUrl?: string;
  provenance?: ContentProvenance;
  pedagogicalObjective?: string; // Mục tiêu kiến thức chuẩn GDPT 2018
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
  appExtensions?: Question[];
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
  voiceVi: string;        // 'Cô Giáo Vy' (VieNeu TTS Cloned) | 'Mỹ Duyên'
  voiceEn: string;        // 'en-US-JennyNeural' (Cô Jenny) | 'en-US-GuyNeural' (Thầy Guy)
  speechRate: number;     // 0.85 (chậm), 0.95 (chuẩn), 1.05 (nhanh)
  speechPitch: number;    // 1.0
}
