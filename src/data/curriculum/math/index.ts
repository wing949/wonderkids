import { GradeLevel } from '../../../types/index.ts';
import { CurriculumTopic } from '../types.ts';
import { MATH_GRADE_1_TOPICS } from './grade1.ts';
import { MATH_GRADE_2_TOPICS } from './grade2.ts';
import { MATH_GRADE_3_TOPICS } from './grade3.ts';
import { MATH_GRADE_4_TOPICS } from './grade4.ts';
import { MATH_GRADE_5_TOPICS } from './grade5.ts';

export const MATH_CURRICULUM_BY_GRADE: Record<GradeLevel, CurriculumTopic[]> = {
  1: MATH_GRADE_1_TOPICS,
  2: MATH_GRADE_2_TOPICS,
  3: MATH_GRADE_3_TOPICS,
  4: MATH_GRADE_4_TOPICS,
  5: MATH_GRADE_5_TOPICS,
};

export {
  MATH_GRADE_1_TOPICS,
  MATH_GRADE_2_TOPICS,
  MATH_GRADE_3_TOPICS,
  MATH_GRADE_4_TOPICS,
  MATH_GRADE_5_TOPICS,
};
