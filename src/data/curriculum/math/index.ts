import { GradeLevel } from '../../../types/index.ts';
import { CurriculumTopic } from '../types.ts';
import { MATH_GRADE_1_TOPICS as RAW_MATH_GRADE_1_TOPICS } from './grade1.ts';
import { MATH_GRADE_2_TOPICS as RAW_MATH_GRADE_2_TOPICS } from './grade2.ts';
import { MATH_GRADE_3_TOPICS as RAW_MATH_GRADE_3_TOPICS } from './grade3.ts';
import { MATH_GRADE_4_TOPICS as RAW_MATH_GRADE_4_TOPICS } from './grade4.ts';
import { MATH_GRADE_5_TOPICS as RAW_MATH_GRADE_5_TOPICS } from './grade5.ts';
import { normalizeVerifiedMathToc } from './officialMathCorrections.ts';

const normalizedMathCatalog = normalizeVerifiedMathToc({
  1: RAW_MATH_GRADE_1_TOPICS,
  2: RAW_MATH_GRADE_2_TOPICS,
  3: RAW_MATH_GRADE_3_TOPICS,
  4: RAW_MATH_GRADE_4_TOPICS,
  5: RAW_MATH_GRADE_5_TOPICS,
});

export const MATH_CURRICULUM_BY_GRADE: Record<GradeLevel, CurriculumTopic[]> = normalizedMathCatalog as Record<GradeLevel, CurriculumTopic[]>;

export const MATH_GRADE_1_TOPICS = MATH_CURRICULUM_BY_GRADE[1];
export const MATH_GRADE_2_TOPICS = MATH_CURRICULUM_BY_GRADE[2];
export const MATH_GRADE_3_TOPICS = MATH_CURRICULUM_BY_GRADE[3];
export const MATH_GRADE_4_TOPICS = MATH_CURRICULUM_BY_GRADE[4];
export const MATH_GRADE_5_TOPICS = MATH_CURRICULUM_BY_GRADE[5];

export * from './officialMathCorrections.ts';
