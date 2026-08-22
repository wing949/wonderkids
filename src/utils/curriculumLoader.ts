import type { GradeLevel, LessonNode, SubjectType } from '../types';

export async function loadLessonsForGradeAndSubject(
  grade: GradeLevel,
  subject: SubjectType,
): Promise<LessonNode[]> {
  const curriculum = await import('../data/curriculum');
  return curriculum.getLessonsForGradeAndSubject(grade, subject);
}

export async function loadCurriculumLesson(lessonId: string): Promise<LessonNode | null> {
  const subjects: SubjectType[] = ['math', 'vietnamese', 'english', 'logic'];
  const grades: GradeLevel[] = [1, 2, 3, 4, 5];
  const curriculum = await import('../data/curriculum');

  for (const subject of subjects) {
    for (const grade of grades) {
      const lesson = curriculum
        .getLessonsForGradeAndSubject(grade, subject)
        .find((item) => item.id === lessonId);
      if (lesson) return lesson;
    }
  }

  return null;
}
