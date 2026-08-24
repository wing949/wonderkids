import type { GradeLevel } from '../../types/index.ts';

export type PracticeSubject = 'math' | 'vietnamese' | 'english' | 'math_en';
export type PracticeDifficulty = 'basic' | 'application' | 'challenge';
export type PracticeItemType = 'single_choice' | 'short_answer' | 'ordering' | 'matching';
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
  assetPath: string;
  transcript: string;
  transcriptHash: string;
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
  maxPoints: 100;
  items: PracticeItem[];
}

export interface PracticeSet {
  id: string;
  subject: PracticeSubject;
  grade: GradeLevel;
  setNumber: number;
  title: string;
  level: PracticeSetLevel;
  totalPoints: 300;
  timeLimitSeconds?: 1800;
  sections: [PracticeSection, PracticeSection, PracticeSection];
}

export interface PracticePackManifest {
  id: string;
  subject: PracticeSubject;
  subjectLabel: string;
  grade: GradeLevel;
  version: string;
  contentOrigin: 'system_generated';
  verificationStatus: 'draft' | 'verified';
  releaseStatus: 'review_required' | 'published';
  officialDisclaimer: string;
  sourceLabel: string;
  alignmentSources: string[];
  sets: PracticeSet[];
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
