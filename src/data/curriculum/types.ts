import { Question, ReadingPassage } from '../../types';

export interface CurriculumTopic {
  id: string;
  semester: 1 | 2; // Tập 1 (HK1) hay Tập 2 (HK2)
  lessonNumber: number; // Bài số mấy trong SGK (ví dụ: Bài 1, Bài 7, Bài 38...)
  title: string;
  unit: string;
  textbookPageRef: string;
  description: string;
  summary: string;
  keyPoints: string[];
  mascotTip: string;
  readingPassage?: ReadingPassage;
  defaultQuestions?: Question[];
}
