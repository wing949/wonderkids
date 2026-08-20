import { LessonNode, SubjectType, GradeLevel, Question } from '../../types';
import { CurriculumTopic } from './types';
import { MATH_CURRICULUM_BY_GRADE } from './math';
import { VIETNAMESE_CURRICULUM_BY_GRADE, VIETNAMESE_READING_PASSAGES } from './vietnamese';
import { ENGLISH_CURRICULUM_BY_GRADE } from './english';

export * from './types';
export * from './math';
export * from './vietnamese';
export * from './english';

// =========================================================================
// MỤC LỤC TỔNG HỢP TOÀN BỘ CÁC MÔN VÀ CÁC LỚP
// =========================================================================

export const FULL_SYLLABUS_CATALOG: Record<SubjectType, Record<GradeLevel, CurriculumTopic[]>> = {
  math: MATH_CURRICULUM_BY_GRADE,
  vietnamese: VIETNAMESE_CURRICULUM_BY_GRADE,
  english: ENGLISH_CURRICULUM_BY_GRADE,
  logic: {
    1: [], 2: [], 3: [], 4: [], 5: []
  }
};

// =========================================================================
// QUESTION BANK GENERATOR TỰ ĐỘNG THEO TỪNG DẠNG BÀI SGK
// =========================================================================

export function generateQuestionsForTopic(topic: CurriculumTopic, subject: SubjectType, grade: GradeLevel): Question[] {
  // If specific reading passage bundle exists for Vietnamese
  if (subject === 'vietnamese' && VIETNAMESE_READING_PASSAGES[topic.id]) {
    return VIETNAMESE_READING_PASSAGES[topic.id].questions;
  }

  // If specific questions already defined
  if (topic.defaultQuestions && topic.defaultQuestions.length > 0) {
    return topic.defaultQuestions;
  }

  // Tiếng Việt Lớp 1 bài ghép tiếng
  if (subject === 'vietnamese' && grade === 1 && topic.lessonNumber === 4) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'spelling_blend',
        questionText: 'Cùng ghép tiếng theo mô hình SGK Trang 16: "b" + "e" + dấu "sắc ( / )"',
        audioText: 'Bờ - e - be - sắc - BÉ',
        instruction: 'Chạm để lắng nghe và hoàn thành mô hình ghép tiếng',
        points: 15,
        spellingData: {
          initial: 'b',
          vowel: 'e',
          tone: 'sắc ( / )',
          result: 'bé',
          pronunciation: 'bờ - e - be - sắc - BÉ'
        },
        options: [
          { id: 'a', label: 'bé 👶', sublabel: 'Em bé, bé nhỏ', isCorrect: true },
          { id: 'b', label: 'bè 🪵', sublabel: 'Cái bè gỗ' },
          { id: 'c', label: 'bê 🐮', sublabel: 'Con bê' },
        ]
      },
      {
        id: `${topic.id}-q2`,
        type: 'bubble_choice',
        questionText: 'Quan sát SGK Trang 17: Trong các từ sau, từ nào có chứa âm "ê"?',
        audioText: 'Từ nào có chứa âm ê?',
        points: 10,
        options: [
          { id: 'a', label: 'Quả lê 🍐', sublabel: 'Có âm ê', isCorrect: true },
          { id: 'b', label: 'Con ve 🪰', sublabel: 'Có âm e' },
          { id: 'c', label: 'Cái ca 🥛', sublabel: 'Có âm a' }
        ]
      }
    ];
  }

  // Tiếng Việt Lớp 1 chính tả c/k
  if (subject === 'vietnamese' && grade === 1 && topic.lessonNumber === 12) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: 'Chọn từ viết ĐÚNG quy tắc chính tả theo SGK Trang 34:',
        audioText: 'Chọn từ viết đúng chính tả:',
        points: 10,
        options: [
          { id: 'a', label: 'cái ghế 🪑', isCorrect: true },
          { id: 'b', label: 'cái gế 🪑' },
          { id: 'c', label: 'cái gối 🛏️' },
        ]
      },
      {
        id: `${topic.id}-q2`,
        type: 'fill_blank',
        questionText: 'Điền chữ "c" hoặc "k" thích hợp vào ô trống:',
        templateText: 'Bé vẽ con [___]ua và chùm [___]hế ngọt.',
        points: 15,
        options: [
          { id: 'a', label: 'c - k', isCorrect: true },
          { id: 'b', label: 'k - c' },
        ]
      }
    ];
  }

  // Toán Lớp 2 Bảng nhân 2 & 5
  if (subject === 'math' && grade === 2 && topic.lessonNumber === 38) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'keypad',
        questionText: 'Mỗi bạn có 2 chiếc bánh 🧁, 6 bạn có tất cả bao nhiêu chiếc bánh? (2 x 6 = ?)',
        audioText: 'Hai nhân sáu bằng bao nhiêu?',
        points: 10,
        correctAnswer: '12'
      },
      {
        id: `${topic.id}-q2`,
        type: 'bubble_choice',
        questionText: 'Tính nhẩm nhanh: 2 x 9 = ?',
        audioText: 'Hai nhân chín bằng bao nhiêu?',
        points: 10,
        options: [
          { id: 'a', label: '18', isCorrect: true },
          { id: 'b', label: '16' },
          { id: 'c', label: '20' }
        ]
      }
    ];
  }

  // Toán Lớp 2 Phép chia 2 & 5
  if (subject === 'math' && grade === 2 && topic.lessonNumber === 45) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'keypad',
        questionText: 'Có 15 quả cam 🍊 chia đều cho 5 bạn. Mỗi bạn được mấy quả cam? (15 : 5 = ?)',
        audioText: 'Mười lăm chia năm bằng bao nhiêu?',
        points: 10,
        correctAnswer: '3'
      },
      {
        id: `${topic.id}-q2`,
        type: 'bubble_choice',
        questionText: 'Tính: 18 : 2 = ?',
        audioText: 'Mười tám chia hai bằng bao nhiêu?',
        points: 10,
        options: [
          { id: 'a', label: '9', isCorrect: true },
          { id: 'b', label: '8' },
          { id: 'c', label: '7' }
        ]
      }
    ];
  }

  // Tiếng Việt Lớp 2 mẫu câu
  if (subject === 'vietnamese' && grade === 2 && topic.lessonNumber === 14) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: 'Câu: "Mẹ em là bác sĩ tận tâm." thuộc mẫu câu nào?',
        audioText: 'Câu Mẹ em là bác sĩ tận tâm thuộc mẫu câu nào?',
        points: 10,
        options: [
          { id: 'a', label: 'Ai là gì?', isCorrect: true },
          { id: 'b', label: 'Ai làm gì?' },
          { id: 'c', label: 'Ai thế nào?' },
        ]
      }
    ];
  }

  // Default smart pedagogical question generator for primary students
  const mainPoint = topic.keyPoints[0] || topic.summary;
  const secondPoint = topic.keyPoints[1] || topic.summary;

  return [
    {
      id: `${topic.id}-q1`,
      type: 'bubble_choice',
      questionText: subject === 'vietnamese'
        ? `Qua bài học "${topic.title}", em hiểu được điều gì quan trọng nhất?`
        : `Kiến thức trọng tâm bài học "${topic.title}" là:`,
      audioText: `Qua bài học, em hiểu được điều gì quan trọng nhất?`,
      hint: topic.summary,
      points: 15,
      options: [
        { id: 'a', label: `${mainPoint} ✨`, isCorrect: true },
        { id: 'b', label: 'Bài học không khuyên làm điều này.' },
        { id: 'c', label: 'Ý kiến này chưa đúng theo bài học.' },
      ]
    },
    {
      id: `${topic.id}-q2`,
      type: 'bubble_choice',
      questionText: subject === 'vietnamese'
        ? `Em hãy chọn việc làm hoặc cách hiểu đúng theo bài học:`
        : `Em hãy chọn đáp án chính xác nhất theo SGK:`,
      audioText: `Em hãy chọn đáp án chính xác nhất:`,
      hint: topic.keyPoints[1] || topic.summary,
      points: 15,
      options: [
        { id: 'a', label: `${secondPoint} 🌟`, isCorrect: true },
        { id: 'b', label: 'Chưa thực hiện đúng theo bài học.' },
      ]
    }
  ];
}

// Convert all curriculum topics to LessonNodes
export function getLessonsForGradeAndSubject(grade: GradeLevel, subject: SubjectType): LessonNode[] {
  const topics = FULL_SYLLABUS_CATALOG[subject]?.[grade] || [];
  
  return topics.map((t, idx) => {
    const readingPassage = (subject === 'vietnamese' && VIETNAMESE_READING_PASSAGES[t.id]?.passage) || t.readingPassage;

    return {
      id: t.id,
      title: t.title,
      description: t.description,
      subject: subject,
      grade: grade,
      unit: t.unit,
      textbookPageRef: t.textbookPageRef,
      order: idx + 1,
      starsEarned: idx === 0 ? 3 : 0,
      isLocked: false,
      xpReward: 100 + (idx * 15),
      starReward: idx === 0 ? 2 : 3,
      theoryContent: {
        summary: t.summary,
        keyPoints: t.keyPoints,
        mascotTip: t.mascotTip,
      },
      readingPassage: readingPassage,
      questions: generateQuestionsForTopic(t, subject, grade)
    };
  });
}
