import type { LessonNode } from '../../../types';

export function isPublishableVietnameseSgkLesson(_lesson: LessonNode): boolean {
  const lesson = _lesson;
  if (lesson.catalogSection !== 'sgk') return false;
  if (lesson.provenance?.contentOrigin !== 'sgk_reference') return false;
  if (lesson.provenance.verificationStatus !== 'verified') return false;
  if (lesson.sourceCitation?.verificationStatus !== 'verified') return false;
  if (!lesson.sourceCitation.bookId || lesson.sourceCitation.sourcePages.length === 0) return false;
  if (!/^[a-f0-9]{64}$/.test(lesson.sourceCitation.sourceHash)) return false;
  if (!lesson.cardPreview?.trim() || !lesson.textbookPageRef?.trim()) return false;
  if (lesson.questions.length === 0) return false;

  const activityIds = new Set<string>();
  for (const question of lesson.questions) {
    if (!question.sourceActivityId || activityIds.has(question.sourceActivityId)) return false;
    if (!Number.isInteger(question.sourcePage) || !question.sourceSubpart?.trim()) return false;
    if (question.gradingMode !== 'auto' && question.gradingMode !== 'self_confirm') return false;
    activityIds.add(question.sourceActivityId);
  }
  return true;
}
