import { VIETNAMESE_GRADE_1_TOPICS } from './grade1';
import { VIETNAMESE_GRADE_2_TOPICS } from './grade2';
import { VIETNAMESE_GRADE_3_TOPICS } from './grade3';
import { VIETNAMESE_GRADE_4_TOPICS } from './grade4';
import { VIETNAMESE_GRADE_5_TOPICS } from './grade5';

export interface VietnameseAudioAsset {
  lessonId: string;
  primaryPath: string;
  fallbackPath: string;
  primaryVoice: 'Cô Giáo Vy';
  fallbackVoice: 'Cô Mỹ Duyên';
}

function normalizeLessonId(lessonId: string): string {
  return lessonId.replace('-l', '-b');
}

const lessonIds = [
  ...VIETNAMESE_GRADE_1_TOPICS,
  ...VIETNAMESE_GRADE_2_TOPICS,
  ...VIETNAMESE_GRADE_3_TOPICS,
  ...VIETNAMESE_GRADE_4_TOPICS,
  ...VIETNAMESE_GRADE_5_TOPICS,
]
  .map((topic) => normalizeLessonId(topic.id));

export const VIETNAMESE_AUDIO_MANIFEST: Record<string, VietnameseAudioAsset> = Object.fromEntries(
  lessonIds.map((lessonId) => [
    lessonId,
    {
      lessonId,
      primaryPath: `/audio/curriculum/${lessonId}.wav`,
      fallbackPath: `/audio/curriculum/fallback/${lessonId}.wav`,
      primaryVoice: 'Cô Giáo Vy',
      fallbackVoice: 'Cô Mỹ Duyên',
    },
  ])
);

export function getVietnameseAudioAsset(lessonId: string): VietnameseAudioAsset | null {
  return VIETNAMESE_AUDIO_MANIFEST[normalizeLessonId(lessonId)] || null;
}
