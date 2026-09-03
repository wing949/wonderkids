import { GradeLevel } from '../../../types';
import { CurriculumTopic } from '../types';
import { buildOfficialEnglishCatalog } from './officialEnglishCatalog.ts';

const officialCatalog = buildOfficialEnglishCatalog();

export const ENGLISH_GRADE_1_TOPICS = officialCatalog[1];
export const ENGLISH_GRADE_2_TOPICS = officialCatalog[2];
export const ENGLISH_GRADE_3_TOPICS = officialCatalog[3];
export const ENGLISH_GRADE_4_TOPICS = officialCatalog[4];
export const ENGLISH_GRADE_5_TOPICS = officialCatalog[5];

export const ENGLISH_CURRICULUM_BY_GRADE: Record<GradeLevel, CurriculumTopic[]> = {
  1: ENGLISH_GRADE_1_TOPICS,
  2: ENGLISH_GRADE_2_TOPICS,
  3: ENGLISH_GRADE_3_TOPICS,
  4: ENGLISH_GRADE_4_TOPICS,
  5: ENGLISH_GRADE_5_TOPICS,
};

export * from './officialEnglishCatalog.ts';
export * from './bookManifests.ts';
export * from './grade1PhonicsGames.ts';
export * from './readingPassages.ts';
export * from './englishQuestionEngine.ts';
export * from './englishSupplementContent.ts';
export * from './vocabularyData.ts';
