import { ContentProvenance, Question, ReadingPassage } from '../../types/index.ts';

export interface CurriculumTopic {
  id: string;
  semester: 1 | 2; // Tập 1 (HK1) hay Tập 2 (HK2)
  lessonNumber: number; // Bài số mấy trong SGK (ví dụ: Bài 1, Bài 7, Bài 38...)
  title: string;
  unit: string;
  textbookPageRef: string;
  /** Trang mở đầu của bài theo mục lục SGK chính thức. */
  sourcePages?: number[];
  sourceType?: 'sgk_official' | 'pedagogical_supplement';
  sourceBook?: string; // Tên bộ sách chuẩn (Bộ Kết nối tri thức với cuộc sống / Cánh Diều / Chân trời sáng tạo, NXB GDVN)
  sourceDetail?: string; // Chi tiết số trang, mục bài học
  provenance?: ContentProvenance;
  pedagogicalObjective?: string; // Mục tiêu chuẩn kiến thức kỹ năng GDPT 2018
  description: string;
  summary: string;
  keyPoints: string[];
  mascotTip: string;
  readingPassage?: ReadingPassage;
  defaultQuestions?: Question[];
}
