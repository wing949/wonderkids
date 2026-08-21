import generatedMappings from './lessonPageMappings.generated.json';

export interface VietnameseLessonPageMapping {
  lessonId: string;
  bookId: string;
  sourcePages: number[];
  matchedTitle: string;
  matchedText: string;
  confidence: number;
  status: 'ocr_matched';
}

export const VIETNAMESE_LESSON_PAGE_MAPPINGS = generatedMappings as Record<string, VietnameseLessonPageMapping>;

export function getVietnameseLessonPageMapping(lessonId: string) {
  return VIETNAMESE_LESSON_PAGE_MAPPINGS[lessonId];
}
