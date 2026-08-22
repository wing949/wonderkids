import rawQuestionManifest from './questionAudioManifest.generated.json';

export interface QuestionAudioAsset {
  id: string;
  primaryPath: string;
  fallbackPath?: string;
  primaryVoice: string;
  fallbackVoice?: string;
  textHash: string;
  category: string;
  lessonId: string;
  type: string;
  isExpressive?: boolean;
}

export const QUESTION_AUDIO_MANIFEST = (rawQuestionManifest || {}) as unknown as Record<string, QuestionAudioAsset>;

export function getQuestionAudioAsset(id: string): QuestionAudioAsset | null {
  return QUESTION_AUDIO_MANIFEST[id] || null;
}
