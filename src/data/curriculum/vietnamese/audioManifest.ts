import rawManifest from './audioManifest.generated.json';

export interface VietnameseAudioAsset {
  lessonId: string;
  primaryPath: string;
  primaryVoice: string;
  transcriptHash: string;
  lessonVersion: number;
  sourcePages: number[];
  genre?: 'poem' | 'story' | 'prose';
  prosodyVersion?: number;
  prosodyHash?: string;
  segmentCount?: number;
  stanzaCount?: number;
  lineCount?: number;
  durationMs?: number;
  effectiveTempo?: number;
  wordsPerMinute?: number;
  audioSha256?: string;
  isExpressive?: boolean;
}

function normalizeLessonId(lessonId: string): string {
  return lessonId.replace('-l', '-b');
}

export const VIETNAMESE_AUDIO_MANIFEST = rawManifest as Record<string, VietnameseAudioAsset>;

export function getVietnameseAudioAsset(lessonId: string): VietnameseAudioAsset | null {
  return VIETNAMESE_AUDIO_MANIFEST[normalizeLessonId(lessonId)] || null;
}
