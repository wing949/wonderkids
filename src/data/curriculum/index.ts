import {
  ContentProvenance,
  LessonNode,
  SubjectType,
  GradeLevel,
  Question,
  ReadingPassage,
} from '../../types';
import { CurriculumTopic } from './types';
import { MATH_CURRICULUM_BY_GRADE } from './math';
import { generateMathQuestions } from './math/mathQuestionEngine';
import {
  VIETNAMESE_CURRICULUM_BY_GRADE,
  VIETNAMESE_READING_PASSAGES,
  getVietnameseBookSource,
} from './vietnamese';
import { ENGLISH_CURRICULUM_BY_GRADE } from './english';

export * from './types';
export * from './math';
export * from './vietnamese';
export * from './english';

function softenUnverifiedText(text: string): string {
  return text
    .replace(/chuẩn\s+SGK/gi, 'theo chủ đề tham khảo')
    .replace(/theo\s+SGK/gi, 'theo tài liệu tham khảo')
    .replace(/SGK\s+Trang/gi, 'tài liệu tham khảo, trang');
}

function softenUnverifiedPassage(passage: ReadingPassage): ReadingPassage {
  return {
    ...passage,
    author: passage.author ? 'WonderKids — nội dung tự sinh' : undefined,
    content: passage.content.map(softenUnverifiedText),
    audioNarration: passage.audioNarration ? softenUnverifiedText(passage.audioNarration) : undefined,
    vocabularyNotes: passage.vocabularyNotes?.map((item) => ({
      word: softenUnverifiedText(item.word),
      meaning: softenUnverifiedText(item.meaning),
    })),
  };
}

function softenUnverifiedQuestion(question: Question): Question {
  return {
    ...question,
    questionText: softenUnverifiedText(question.questionText),
    audioText: question.audioText ? softenUnverifiedText(question.audioText) : undefined,
    instruction: question.instruction ? softenUnverifiedText(question.instruction) : undefined,
    hint: question.hint ? softenUnverifiedText(question.hint) : undefined,
    templateText: question.templateText ? softenUnverifiedText(question.templateText) : undefined,
    options: question.options?.map((option) => ({
      ...option,
      label: softenUnverifiedText(option.label),
      sublabel: option.sublabel ? softenUnverifiedText(option.sublabel) : undefined,
    })),
  };
}

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
  // 1. If specific defaultQuestions already defined in topic (e.g. Lesson 1, 26, 34 of Grade 1)
  if (topic.defaultQuestions && topic.defaultQuestions.length > 0) {
    return topic.defaultQuestions;
  }

  // 2. 100% Toán học các cấp lớp (Lớp 1 đến 5) sinh bài tập thực tế chuẩn SGK
  if (subject === 'math') {
    return generateMathQuestions(topic, grade);
  }

  // 3. If specific reading passage bundle exists for Vietnamese
  if (subject === 'vietnamese' && VIETNAMESE_READING_PASSAGES[topic.id]) {
    return VIETNAMESE_READING_PASSAGES[topic.id].questions;
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

  // Default pedagogical question generator for reading comprehension & concepts (Tiếng Việt & Tiếng Anh)
  const mainPoint = topic.keyPoints[0] || topic.summary;
  const secondPoint = topic.keyPoints[1] || topic.summary;

  return [
    {
      id: `${topic.id}-q1`,
      type: 'bubble_choice',
      questionText: subject === 'vietnamese'
        ? `Qua bài đọc "${topic.title}", nội dung chính hoặc bài học rút ra là gì?`
        : `What is the main topic of "${topic.title}"?`,
      audioText: subject === 'vietnamese' ? 'Nội dung chính của bài đọc là gì?' : 'What is the main topic?',
      hint: topic.summary,
      points: 15,
      options: [
        { id: 'a', label: mainPoint, isCorrect: true },
        { id: 'b', label: 'Bài đọc không nhắc đến chi tiết này.' },
        { id: 'c', label: 'Ý kiến này trái ngược với nội dung bài học.' },
      ]
    },
    {
      id: `${topic.id}-q2`,
      type: 'bubble_choice',
      questionText: subject === 'vietnamese'
        ? `Theo bài học, câu nào dưới đây nêu đúng chi tiết hoặc cách làm đẹp nhất?`
        : `Choose the correct statement according to the lesson:`,
      audioText: `Em hãy chọn câu trả lời đúng nhất:`,
      hint: topic.keyPoints[1] || topic.summary,
      points: 15,
      options: [
        { id: 'a', label: secondPoint, isCorrect: true },
        { id: 'b', label: 'Chi tiết này chưa chính xác theo bài học.' },
      ]
    }
  ];
}

// Convert all curriculum topics to LessonNodes
export function getLessonsForGradeAndSubject(grade: GradeLevel, subject: SubjectType): LessonNode[] {
  const topics = FULL_SYLLABUS_CATALOG[subject]?.[grade] || [];
  
  return topics.map((t, idx) => {
    const normalizedId = t.id.replace('-l', '-b');
    let readingPassage = (subject === 'vietnamese' && (VIETNAMESE_READING_PASSAGES[t.id]?.passage || VIETNAMESE_READING_PASSAGES[normalizedId]?.passage)) || t.readingPassage;

    // Đảm bảo 100% tất cả bài học Tiếng Việt & Tiếng Anh mọi cấp học (Lớp 1-5) đều có Bài Đọc & Shadowing phong phú
    if (!readingPassage && subject === 'vietnamese') {
      readingPassage = {
        title: t.title.replace(/^Bài \d+:\s*/, ''),
        author: 'WonderKids — nội dung tự sinh',
        genre: 'prose',
        content: [
          t.description,
          t.summary
        ],
        audioNarration: `${t.title.replace(/^Bài \d+:\s*/, '')}. ${t.description}. ${t.summary}`,
        vocabularyNotes: [
          { word: 'Trọng tâm', meaning: 'Nội dung cốt lõi và quan trọng nhất cần nắm vững.' }
        ]
      };
    } else if (!readingPassage && subject === 'english') {
      readingPassage = {
        title: t.title.replace(/^Unit \d+:\s*/i, ''),
        author: 'Global Success English SGK',
        genre: 'story',
        content: [
          t.description,
          t.summary
        ],
        audioNarration: `${t.title.replace(/^Unit \d+:\s*/i, '')}. ${t.description}. ${t.summary}`,
        vocabularyNotes: [
          { word: 'Key vocabulary', meaning: 'Important words and expressions in this lesson.' }
        ]
      };
    }

    const bundle = subject === 'vietnamese' ? (VIETNAMESE_READING_PASSAGES[t.id] || VIETNAMESE_READING_PASSAGES[normalizedId]) : undefined;
    const defaultSourceBook = subject === 'math'
      ? `SGK Toán ${grade} — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam`
      : subject === 'vietnamese'
        ? `SGK Tiếng Việt ${grade} — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam`
        : `SGK Tiếng Anh ${grade} — Global Success, NXB Giáo Dục Việt Nam`;

    const declaredSourceType = bundle?.sourceType || t.sourceType || (t.textbookPageRef ? 'sgk_official' : 'pedagogical_supplement');
    const declaredSourceBook = bundle?.sourceBook || t.sourceBook || defaultSourceBook;
    const declaredSourceDetail = bundle?.sourceDetail || t.sourceDetail || t.textbookPageRef || 'Nội dung bổ trợ & củng cố năng lực chuẩn GDPT 2018';
    const referenceBook = subject === 'vietnamese'
      ? getVietnameseBookSource(grade, t.semester)
      : null;
    const provenance: ContentProvenance = bundle?.provenance || t.provenance || (
      declaredSourceType === 'pedagogical_supplement'
        ? {
            contentOrigin: 'pedagogical_supplement',
            verificationStatus: 'declared_supplement',
            referenceBook: referenceBook?.title,
            referenceDetail: declaredSourceDetail,
            referenceUrl: referenceBook?.readerUrl,
            note: 'Nội dung bổ trợ do WonderKids biên soạn.',
          }
        : {
            contentOrigin: 'system_generated',
            verificationStatus: 'reference_only',
            referenceBook: referenceBook?.title || declaredSourceBook,
            referenceDetail: declaredSourceDetail,
            referenceUrl: referenceBook?.readerUrl,
            note: 'Bản tóm tắt, câu hỏi và audio hiện do hệ thống biên soạn; chưa được đối chiếu nguyên văn với SGK.',
          }
    );
    const isVerifiedSgk = provenance.contentOrigin === 'sgk_reference' && provenance.verificationStatus === 'verified';
    const effectiveSourceBook = isVerifiedSgk
      ? declaredSourceBook
      : provenance.contentOrigin === 'system_generated'
        ? 'WonderKids — Nội dung tự sinh'
        : declaredSourceBook;
    const effectiveSourceDetail = isVerifiedSgk
      ? declaredSourceDetail
      : provenance.contentOrigin === 'system_generated'
        ? 'NỘI DUNG TỰ SINH — có tham khảo chủ đề, sách và trang được ghi bên dưới'
        : 'Nội dung bổ trợ do WonderKids biên soạn';
    const questions = generateQuestionsForTopic(t, subject, grade).map((question) => {
      if (subject !== 'vietnamese') return question;
      const withOrigin = question.contentOrigin
        ? question
        : { ...question, contentOrigin: 'system_generated' as const };
      return isVerifiedSgk ? withOrigin : softenUnverifiedQuestion(withOrigin);
    });

    return {
      id: t.id,
      title: t.title,
      description: isVerifiedSgk ? t.description : softenUnverifiedText(t.description),
      subject: subject,
      grade: grade,
      unit: t.unit,
      textbookPageRef: t.textbookPageRef,
      sourceType: isVerifiedSgk ? 'sgk_official' : 'pedagogical_supplement',
      sourceBook: effectiveSourceBook,
      sourceDetail: effectiveSourceDetail,
      referenceBook: provenance.referenceBook,
      referenceDetail: provenance.referenceDetail,
      referenceUrl: provenance.referenceUrl,
      provenance,
      pedagogicalObjective: isVerifiedSgk
        ? bundle?.pedagogicalObjective || t.pedagogicalObjective || t.description
        : softenUnverifiedText(bundle?.pedagogicalObjective || t.pedagogicalObjective || t.description),
      order: idx + 1,
      starsEarned: idx === 0 ? 3 : 0,
      isLocked: false,
      xpReward: 100 + (idx * 15),
      starReward: idx === 0 ? 2 : 3,
      theoryContent: {
        summary: isVerifiedSgk ? t.summary : softenUnverifiedText(t.summary),
        keyPoints: isVerifiedSgk ? t.keyPoints : t.keyPoints.map(softenUnverifiedText),
        mascotTip: isVerifiedSgk ? t.mascotTip : softenUnverifiedText(t.mascotTip),
      },
      readingPassage: readingPassage && !isVerifiedSgk
        ? softenUnverifiedPassage(readingPassage)
        : readingPassage,
      questions
    };
  });
}
