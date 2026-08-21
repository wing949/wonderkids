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
  audibleDisclosureText: 'Đây là nội dung do WonderKids biên soạn, không phải nguyên văn sách giáo khoa.';
  primaryDisclosurePcmBytes: number;
  primaryDisclosurePcmSha256: string;
  fallbackDisclosurePcmBytes: number;
  fallbackDisclosurePcmSha256: string;
}

export const VIETNAMESE_AUDIO_DISCLOSURE = {
  text: 'Đây là nội dung do WonderKids biên soạn, không phải nguyên văn sách giáo khoa.',
  primaryPcmBytes: 552960,
  primaryPcmSha256: '7c91d642b467c265cb41aabdb5f9cbca60b9d2ed67f4ccd839884187b0bb8a2e',
  fallbackPcmBytes: 506880,
  fallbackPcmSha256: 'f00942c59dcc1fcaf8da62a279e05709ce2b7eb45fb25fe8c7621201946358a0',
} as const;

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
      audibleDisclosureText: VIETNAMESE_AUDIO_DISCLOSURE.text,
      primaryDisclosurePcmBytes: VIETNAMESE_AUDIO_DISCLOSURE.primaryPcmBytes,
      primaryDisclosurePcmSha256: VIETNAMESE_AUDIO_DISCLOSURE.primaryPcmSha256,
      fallbackDisclosurePcmBytes: VIETNAMESE_AUDIO_DISCLOSURE.fallbackPcmBytes,
      fallbackDisclosurePcmSha256: VIETNAMESE_AUDIO_DISCLOSURE.fallbackPcmSha256,
    },
  ])
);

export function getVietnameseAudioAsset(lessonId: string): VietnameseAudioAsset | null {
  return VIETNAMESE_AUDIO_MANIFEST[normalizeLessonId(lessonId)] || null;
}
