import { GradeLevel } from '../../../types';
import { CurriculumTopic } from '../types';
import { ENGLISH_GRADE_1_TOPICS } from './grade1';
import { ENGLISH_GRADE_2_TOPICS } from './grade2';
import { ENGLISH_GRADE_3_TOPICS } from './grade3';
import { ENGLISH_GRADE_4_TOPICS } from './grade4';
import { ENGLISH_GRADE_5_TOPICS } from './grade5';

export const ENGLISH_CURRICULUM_BY_GRADE: Record<GradeLevel, CurriculumTopic[]> = {
  1: ENGLISH_GRADE_1_TOPICS,
  2: ENGLISH_GRADE_2_TOPICS,
  3: ENGLISH_GRADE_3_TOPICS,
  4: ENGLISH_GRADE_4_TOPICS,
  5: ENGLISH_GRADE_5_TOPICS,
};

export {
  ENGLISH_GRADE_1_TOPICS,
  ENGLISH_GRADE_2_TOPICS,
  ENGLISH_GRADE_3_TOPICS,
  ENGLISH_GRADE_4_TOPICS,
  ENGLISH_GRADE_5_TOPICS,
};
