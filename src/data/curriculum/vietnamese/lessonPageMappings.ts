import generatedMappings from './lessonPageMappings.generated.json';

export interface VietnameseLessonPageMapping {
  lessonId: string;
  bookId: string;
  sourcePages: number[];
  matchedTitle: string;
  matchedText: string;
  confidence: number;
  status: 'ocr_matched' | 'visually_reviewed';
}

export const VIETNAMESE_LESSON_PAGE_MAPPINGS = generatedMappings as Record<string, VietnameseLessonPageMapping>;

export function getVietnameseLessonPageMapping(lessonId: string) {
  const mapping = VIETNAMESE_LESSON_PAGE_MAPPINGS[lessonId];
  if (!mapping) return undefined;
  return mapping.status === 'visually_reviewed'
    ? mapping
    : { ...mapping, sourcePages: mapping.sourcePages.slice(0, 1) };
}
