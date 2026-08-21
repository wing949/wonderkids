import { ReadingPassage } from '../types';

/**
 * Text that is visible in the reading drawer and therefore must be present in
 * the pre-rendered audio asset. Keeping this in one place prevents the
 * generator and the learner UI from silently drifting apart.
 */
export function buildLessonNarration(passage: ReadingPassage): string {
  if (passage.audioNarration?.trim()) return passage.audioNarration.trim();
  return [
    passage.title,
    ...passage.content,
  ]
    .map((part) => part.trim())
    .filter(Boolean)
    .join('\n');
}
