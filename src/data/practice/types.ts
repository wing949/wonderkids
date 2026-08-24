import type { GradeLevel } from '../../types/index.ts';

export type PracticeSubject = 'math' | 'vietnamese' | 'english' | 'math_en';
export type PracticeTrack = 'general' | 'ioe_simulation' | 'trang_nguyen_simulation';
export type CompetitionPracticeTrack = Exclude<PracticeTrack, 'general'>;
export type PracticeDifficulty = 'basic' | 'application' | 'challenge';
export type PracticeItemType =
  | 'single_choice'
  | 'short_answer'
  | 'ordering'
  | 'matching'
  | 'letter_fill'
  | 'word_fill'
  | 'true_false'
  | 'picture_choice'
  | 'odd_one_out'
  | 'listening_choice'
  | 'listening_input';
export type PracticeSetLevel = 'foundation' | 'acceleration' | 'advanced' | 'mock_exam';

export interface PracticeOption {
  id: string;
  label: string;
}

export interface PracticeMatchingPair {
  id: string;
  left: string;
  right: string;
}

export interface PracticeAudio {
  itemId?: string;
  assetPath: string;
  voice?: string;
  language?: string;
  transcript: string;
  transcriptHash: string;
  sourceHash?: string;
  fileHash?: string;
  durationMs?: number;
  verificationStatus: 'draft' | 'verified';
}

export interface PracticeItem {
  id: string;
  type: PracticeItemType;
  prompt: string;
  options?: PracticeOption[];
  matchingPairs?: PracticeMatchingPair[];
  correctAnswer: string | string[];
  explanation: string;
  topic: string;
  difficulty: PracticeDifficulty;
  points: number;
  contentOrigin: 'system_generated';
  verificationStatus: 'draft' | 'verified';
  sourceLabel: string;
  sourceHash: string;
  audio?: PracticeAudio;
}

export interface PracticeSection {
  id: string;
  title: string;
  instruction: string;
  activityTypes: PracticeItemType[];
  maxPoints: number;
  items: PracticeItem[];
}

export interface PracticeSet {
  id: string;
  subject: PracticeSubject;
  grade: GradeLevel;
  setNumber: number;
  title: string;
  level: PracticeSetLevel;
  track?: PracticeTrack;
  totalPoints: number;
  timeLimitSeconds?: number;
  maxAudioPlays?: number;
  allowedAudioRates?: number[];
  sections: [PracticeSection, PracticeSection, PracticeSection];
}

export interface PracticePackManifest {
  id: string;
  subject: PracticeSubject;
  subjectLabel: string;
  track?: PracticeTrack;
  grade: GradeLevel;
  version: string;
  contentOrigin: 'system_generated';
  verificationStatus: 'draft' | 'verified';
  releaseStatus: 'draft' | 'review_required' | 'pending_audio' | 'published';
  officialDisclaimer: string;
  sourceLabel: string;
  alignmentSources: string[];
  sets: PracticeSet[];
}

export interface CompetitionSeason {
  id: string;
  track: CompetitionPracticeTrack;
  schoolYear: string;
  referenceUrls: string[];
  officialRoundCount: number;
  eligibleGrades: GradeLevel[];
  updatedAt: string;
}

export interface PracticeCorrectionLog {
  itemId: string;
  detectedIssue: string;
  before: string;
  after: string;
  reason: string;
  reviewedAt: string;
  reviewer: string;
}
