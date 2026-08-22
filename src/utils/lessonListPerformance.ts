export const LESSON_BATCH_SIZE = 16;

export function takeLessonGroupsBatch<TLesson, TGroup extends { lessons: TLesson[] }>(
  groups: TGroup[],
  limit: number,
): TGroup[] {
  let remaining = Math.max(0, limit);

  return groups.flatMap((group) => {
    if (remaining === 0) return [];
    const lessons = group.lessons.slice(0, remaining);
    remaining -= lessons.length;
    return lessons.length > 0 ? [{ ...group, lessons }] : [];
  });
}

export function getNextLessonLimit(current: number, total: number): number {
  return Math.min(total, current + LESSON_BATCH_SIZE);
}
