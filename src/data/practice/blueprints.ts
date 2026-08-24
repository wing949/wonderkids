import type { GradeLevel } from '../../types/index.ts';
import type { PracticeSubject } from './types.ts';

type GradeTopicMatrix = Record<GradeLevel, readonly string[]>;

export const PRACTICE_TOPIC_MATRIX: Record<PracticeSubject, GradeTopicMatrix> = {
  math: {
    1: ['Phép cộng trong phạm vi 100', 'Phép trừ trong phạm vi 100', 'Quy luật và số còn thiếu', 'So sánh và sắp xếp số', 'Toán có lời văn một bước', 'Độ dài trực quan', 'Xem giờ đúng', 'Đọc bảng số liệu đơn giản', 'So sánh số', 'Nhận biết hình phẳng'],
    2: ['Phép cộng với số đến 1 000', 'Phép trừ với số đến 1 000', 'Bảng nhân và bảng chia', 'So sánh và sắp xếp số', 'Toán có lời văn một bước', 'Độ dài và hình học', 'Thời gian', 'Bảng số liệu đơn giản', 'So sánh số', 'Độ dài và hiệu'],
    3: ['Phép cộng với số đến 100 000', 'Phép trừ với số đến 100 000', 'Nhân và chia số tự nhiên', 'So sánh và sắp xếp số', 'Toán có lời văn một bước', 'Chu vi và đo lường', 'Thời gian và tiền', 'Bảng số liệu', 'Làm quen phân số đơn vị', 'Diện tích hình chữ nhật'],
    4: ['Phép cộng số tự nhiên', 'Phép trừ số tự nhiên', 'Nhân và chia số tự nhiên', 'So sánh và sắp xếp số', 'Toán có lời văn', 'Chu vi và đo lường', 'Thời gian và tiền', 'Bảng số liệu', 'Phân số và phân số bằng nhau', 'Diện tích hình chữ nhật'],
    5: ['Phép cộng số tự nhiên', 'Phép trừ số tự nhiên', 'Nhân và chia số tự nhiên', 'So sánh và sắp xếp số', 'Toán có lời văn', 'Chu vi và đo lường', 'Chuyển động đều', 'Tỉ số phần trăm', 'Phân số và số thập phân', 'Thể tích hình hộp chữ nhật'],
  },
  vietnamese: {
    1: ['Âm, vần và chính tả', 'Câu kể và dấu câu', 'Ghép tiếng và tạo câu', 'Đọc hiểu đoạn ngắn tự biên soạn', 'Mở rộng vốn từ gần nghĩa'],
    2: ['Chính tả âm đầu và vần', 'Câu kể và dấu chấm', 'Sắp xếp từ thành câu', 'Đọc hiểu văn bản tự biên soạn', 'Từ gần nghĩa'],
    3: ['Chính tả và từ dễ lẫn', 'Câu kể và dấu chấm', 'Sắp xếp từ thành câu', 'Đọc hiểu văn bản tự biên soạn', 'Từ gần nghĩa'],
    4: ['Chính tả và nghĩa của từ', 'Câu kể và dấu chấm', 'Sắp xếp từ thành câu', 'Đọc hiểu văn bản tự biên soạn', 'Từ gần nghĩa'],
    5: ['Chính tả và sử dụng từ', 'Câu kể và dấu chấm', 'Sắp xếp từ thành câu', 'Đọc hiểu văn bản tự biên soạn', 'Từ gần nghĩa'],
  },
  english: {
    1: ['Phonics and spelling', 'A/an and classroom words', 'Simple sentence building', 'Very short reading', 'Everyday vocabulary'],
    2: ['Phonics and spelling', 'Articles and singular nouns', 'Present simple sentences', 'Short reading', 'People, places and routines'],
    3: ['Phonics and spelling', 'Noun phrases and articles', 'Sentence order and patterns', 'Reading for details', 'School, hobbies and weather'],
    4: ['Word forms and spelling', 'Articles and noun phrases', 'Sentence building and time words', 'Reading comprehension', 'Places, animals and habits'],
    5: ['Word forms and spelling', 'Noun phrases in context', 'Sentence building', 'Reading comprehension', 'Community, technology and environment'],
  },
  math_en: {
    1: ['Addition to 100', 'Subtraction to 100', 'Missing numbers and patterns', 'Number ordering', 'One-step word problems', 'Simple length', 'Reading o’clock times', 'Simple data tables', 'Comparing numbers', 'Recognising flat shapes'],
    2: ['Addition with numbers to 1,000', 'Subtraction with numbers to 1,000', 'Multiplication and division facts', 'Number ordering', 'One-step word problems', 'Length and geometry', 'Time', 'Simple data tables', 'Comparing numbers', 'Length differences'],
    3: ['Addition with numbers to 100,000', 'Subtraction with numbers to 100,000', 'Whole-number multiplication and division', 'Number ordering', 'One-step word problems', 'Perimeter and measurement', 'Time and money', 'Data tables', 'Unit fractions', 'Rectangle area'],
    4: ['Whole-number addition', 'Whole-number subtraction', 'Whole-number multiplication and division', 'Number ordering', 'Word problems', 'Perimeter and measurement', 'Time and money', 'Data tables', 'Equivalent fractions', 'Rectangle area'],
    5: ['Whole-number addition', 'Whole-number subtraction', 'Whole-number multiplication and division', 'Number ordering', 'Word problems', 'Perimeter and measurement', 'Speed, time and distance', 'Percentages', 'Fractions and decimals', 'Rectangular-prism volume'],
  },
};

export function practiceTopic(subject: PracticeSubject, grade: GradeLevel, family: number): string {
  const topics = PRACTICE_TOPIC_MATRIX[subject][grade];
  return topics[family % topics.length];
}
