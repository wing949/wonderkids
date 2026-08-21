import rawManifest from './audioManifest.generated.json';

export interface VietnameseAudioAsset {
  lessonId: string;
  primaryPath: string;
  fallbackPath: string;
  primaryVoice: 'Cô Giáo Vy';
  fallbackVoice: 'Cô Mỹ Duyên';
  transcriptHash: string;
  lessonVersion: number;
  sourcePages: number[];
}

function normalizeLessonId(lessonId: string): string {
  return lessonId.replace('-l', '-b');
}

export const VIETNAMESE_AUDIO_MANIFEST = rawManifest as Record<string, VietnameseAudioAsset>;

export function getVietnameseAudioAsset(lessonId: string): VietnameseAudioAsset | null {
  return VIETNAMESE_AUDIO_MANIFEST[normalizeLessonId(lessonId)] || null;
}
