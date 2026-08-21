import { GradeLevel } from '../../../types';
import { CurriculumTopic } from '../types';
import { VIETNAMESE_GRADE_1_TOPICS } from './grade1';
import { VIETNAMESE_GRADE_2_TOPICS } from './grade2';
import { VIETNAMESE_GRADE_3_TOPICS } from './grade3';
import { VIETNAMESE_GRADE_4_TOPICS } from './grade4';
import { VIETNAMESE_GRADE_5_TOPICS } from './grade5';

export const VIETNAMESE_CURRICULUM_BY_GRADE: Record<GradeLevel, CurriculumTopic[]> = {
  1: VIETNAMESE_GRADE_1_TOPICS,
  2: VIETNAMESE_GRADE_2_TOPICS,
  3: VIETNAMESE_GRADE_3_TOPICS,
  4: VIETNAMESE_GRADE_4_TOPICS,
  5: VIETNAMESE_GRADE_5_TOPICS,
};

export * from './readingPassages';
export * from './sourceBooks';
export * from './audioManifest';
export * from './bookManifests';
export * from './catalogPolicy';
export * from './lessonPageMappings';

export {
  VIETNAMESE_GRADE_1_TOPICS,
  VIETNAMESE_GRADE_2_TOPICS,
  VIETNAMESE_GRADE_3_TOPICS,
  VIETNAMESE_GRADE_4_TOPICS,
  VIETNAMESE_GRADE_5_TOPICS,
};
