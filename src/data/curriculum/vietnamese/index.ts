import { GradeLevel } from '../../../types';
import { CurriculumTopic } from '../types';
import { OFFICIAL_VIETNAMESE_CURRICULUM_BY_GRADE } from './officialCatalog';

export const VIETNAMESE_CURRICULUM_BY_GRADE: Record<GradeLevel, CurriculumTopic[]> = {
  1: OFFICIAL_VIETNAMESE_CURRICULUM_BY_GRADE[1],
  2: OFFICIAL_VIETNAMESE_CURRICULUM_BY_GRADE[2],
  3: OFFICIAL_VIETNAMESE_CURRICULUM_BY_GRADE[3],
  4: OFFICIAL_VIETNAMESE_CURRICULUM_BY_GRADE[4],
  5: OFFICIAL_VIETNAMESE_CURRICULUM_BY_GRADE[5],
};

export * from './readingPassages';
export * from './sourceBooks';
export * from './audioManifest';
export * from './bookManifests';
export * from './catalogPolicy';
export * from './lessonPageMappings';
export * from './sgkTranscripts';
export * from './officialCatalog';
