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
  VIETNAMESE_BOOK_COLLECTION,
  VIETNAMESE_BOOK_PUBLISHER,
  getVietnameseBookSource,
} from './vietnamese';
import { ENGLISH_CURRICULUM_BY_GRADE } from './english';

export * from './types';
export * from './math';
export * from './vietnamese';
export * from './english';

const VIETNAMESE_SUPPLEMENT_LESSON_IDS = new Set([
  'tv-g3-b25',
  'tv-g4-b22',
  'tv-g5-b25',
]);

function softenUnverifiedText(text: string): string {
  return text
    .replace(/(?:chuẩn\s+SGK\s+)?Kết\s+nối\s+tri\s+thức(?:\s+với\s+cuộc\s+sống)?/gi, 'do WonderKids biên soạn')
    .replace(/\b(?:trong|theo)\s+SGK(?:\s+Tiếng\s+Việt\s+\d+(?:\s+Tập\s+(?:một|hai))?)?/gi, 'trong nội dung luyện đọc')
    .replace(/chuẩn\s+SGK(?:\s+Tiếng\s+Việt\s+\d+(?:\s+Tập\s+(?:một|hai))?)?/gi, 'do WonderKids biên soạn')
    .replace(/SGK\s+Trang/gi, 'tài liệu tham khảo, trang')
    .replace(/\bSGK\s+Tiếng\s+Việt(?:\s+\d+)?(?:\s+Tập\s+(?:một|hai))?/gi, 'tài liệu tham khảo')
    .replace(/\b(?:NXB|Nhà\s+xuất\s+bản)\s+Giáo\s+Dục\s+Việt\s+Nam\b/gi, 'nguồn sách tham khảo')
    .replace(/tác\s+giả\s*:?[\s-]*SGK/gi, 'nguồn nội dung: WonderKids');
}

function cleanReferenceTitle(title: string): string {
  return title.replace(/^Bài\s+\d+:\s*/i, '').trim();
}

function buildGeneratedReadingTitle(topic: CurriculumTopic): string {
  return `Luyện đọc tự sinh — Chủ đề “${cleanReferenceTitle(topic.title)}”`;
}

function prepareUnverifiedPassage(passage: ReadingPassage, generatedTitle: string): ReadingPassage {
  const content = passage.content.map(softenUnverifiedText);
  return {
    ...passage,
    title: generatedTitle,
    author: 'WonderKids — nội dung tự sinh',
    content,
    audioNarration: `${generatedTitle}. ${content.join(' ')}`,
    vocabularyNotes: passage.vocabularyNotes?.map((item) => ({
      word: softenUnverifiedText(item.word),
      meaning: softenUnverifiedText(item.meaning),
    })),
  };
}

function prepareGeneratedQuestion(question: Question, referenceTitle: string, generatedTitle: string): Question {
  const replaceReferenceTitle = (text: string) => softenUnverifiedText(text.split(referenceTitle).join(generatedTitle));
  return {
    ...question,
    contentOrigin: 'system_generated',
    questionText: replaceReferenceTitle(question.questionText),
    audioText: question.audioText ? replaceReferenceTitle(question.audioText) : undefined,
    instruction: question.instruction ? replaceReferenceTitle(question.instruction) : undefined,
    hint: question.hint ? replaceReferenceTitle(question.hint) : undefined,
    templateText: question.templateText ? replaceReferenceTitle(question.templateText) : undefined,
    options: question.options?.map((option) => ({
      ...option,
      label: replaceReferenceTitle(option.label),
      sublabel: option.sublabel ? replaceReferenceTitle(option.sublabel) : undefined,
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
    const bundle = subject === 'vietnamese' ? (VIETNAMESE_READING_PASSAGES[t.id] || VIETNAMESE_READING_PASSAGES[normalizedId]) : undefined;

    let readingPassage: ReadingPassage | undefined = bundle?.passage || t.readingPassage;

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

    const defaultSourceBook = subject === 'math'
      ? `SGK Toán ${grade} — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam`
      : subject === 'vietnamese'
        ? (t.semester === 2
          ? `SGK Tiếng Việt ${grade} Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam`
          : `SGK Tiếng Việt ${grade} Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam`)
        : `SGK Tiếng Anh ${grade} — Global Success, NXB Giáo Dục Việt Nam`;

    const isKnownVietnameseSupplement = subject === 'vietnamese'
      && VIETNAMESE_SUPPLEMENT_LESSON_IDS.has(normalizedId);
    const declaredSourceType = isKnownVietnameseSupplement
      ? 'pedagogical_supplement'
      : bundle?.sourceType || t.sourceType || (t.textbookPageRef ? 'sgk_official' : 'pedagogical_supplement');
    const declaredSourceBook = bundle?.sourceBook || t.sourceBook || defaultSourceBook;
    const declaredSourceDetail = bundle?.sourceDetail || t.sourceDetail || t.textbookPageRef || 'Nội dung bổ trợ và củng cố năng lực';
    const referenceBook = subject === 'vietnamese'
      ? getVietnameseBookSource(grade, t.semester)
      : null;
    const provenance: ContentProvenance = subject !== 'vietnamese'
      ? t.provenance || {
        contentOrigin: declaredSourceType === 'sgk_official' ? 'sgk_reference' : 'pedagogical_supplement',
        verificationStatus: 'verified',
        referenceBook: declaredSourceBook,
        referenceDetail: declaredSourceDetail,
        note: declaredSourceType === 'sgk_official'
          ? 'Giữ nguyên trạng thái nguồn của môn học ngoài phạm vi rà soát Tiếng Việt.'
          : 'Nội dung bổ trợ sư phạm.',
      }
      : bundle?.provenance || t.provenance || (
        declaredSourceType === 'pedagogical_supplement'
          ? {
            contentOrigin: 'pedagogical_supplement',
            verificationStatus: 'declared_supplement',
            note: 'Nội dung bổ trợ do WonderKids biên soạn; không phải bài SGK.',
          }
          : {
            contentOrigin: 'system_generated',
            verificationStatus: 'reference_only',
            referenceBook: referenceBook
              ? `${referenceBook.title} — ${VIETNAMESE_BOOK_COLLECTION} — ${VIETNAMESE_BOOK_PUBLISHER}`
              : declaredSourceBook,
            referenceLessonTitle: t.title,
            referenceDetail: declaredSourceDetail,
            referenceUrl: referenceBook?.readerUrl,
            note: 'Tên chủ đề và link sách chỉ dùng để tham khảo. Văn bản đọc, câu hỏi, hoạt động và transcript audio do hệ thống biên soạn; chưa được đối chiếu nguyên văn với SGK.',
          }
      );
    const isVerifiedSgk = provenance.contentOrigin === 'sgk_reference' && provenance.verificationStatus === 'verified';
    const generatedTitle = buildGeneratedReadingTitle(t);
    const isGenerated = subject === 'vietnamese' && provenance.contentOrigin === 'system_generated';
    const isVietnameseSupplement = subject === 'vietnamese' && provenance.contentOrigin === 'pedagogical_supplement';
    const isUnverifiedVietnamese = subject === 'vietnamese' && !isVerifiedSgk;
    const effectiveSourceBook = isVerifiedSgk
      ? declaredSourceBook
      : isGenerated
        ? 'WonderKids — Nội dung tự sinh'
        : isVietnameseSupplement ? 'WonderKids — Nội dung bổ trợ sư phạm' : declaredSourceBook;
    const effectiveSourceDetail = isVerifiedSgk
      ? declaredSourceDetail
      : isGenerated
        ? 'NỘI DUNG TỰ SINH — tên bài SGK, tập sách và số trang bên dưới chỉ là thông tin tham khảo'
        : 'Nội dung bổ trợ do WonderKids biên soạn';
    const rawQuestions = bundle?.questions || generateQuestionsForTopic(t, subject, grade);
    const questions = subject === 'vietnamese'
      ? rawQuestions.map((question) => prepareGeneratedQuestion(question, t.title, isGenerated ? generatedTitle : t.title))
      : rawQuestions;
    const displayedDescription = isGenerated
      ? `Nội dung luyện đọc tự sinh do WonderKids biên soạn theo chủ đề tham khảo “${t.title}”.`
      : isVietnameseSupplement ? 'Nội dung bổ trợ sư phạm do WonderKids biên soạn; không phải bài SGK.' : t.description;
    const displayedSummary = isGenerated
      ? `Bài luyện đọc tự sinh giúp học sinh rèn đọc hiểu theo chủ đề tham khảo “${t.title}”; không phải nguyên văn SGK.`
      : isVietnameseSupplement ? 'Hoạt động ôn luyện bổ trợ do WonderKids xây dựng; không áp dụng metadata SGK.' : t.summary;
    const displayedMascotTip = isGenerated
      ? `MiuMiu: Cùng luyện đọc nội dung tự sinh theo chủ đề “${cleanReferenceTitle(t.title)}” nhé!`
      : isVietnameseSupplement ? 'MiuMiu: Cùng tham gia hoạt động ôn luyện bổ trợ của WonderKids nhé!' : t.mascotTip;

    return {
      id: t.id,
      title: isGenerated ? generatedTitle : t.title,
      description: displayedDescription,
      subject,
      grade,
      unit: isGenerated
        ? `Luyện đọc tự sinh — Tập ${t.semester}`
        : isVietnameseSupplement ? 'Hoạt động bổ trợ WonderKids' : t.unit,
      textbookPageRef: isVerifiedSgk ? t.textbookPageRef : undefined,
      sourceType: isVerifiedSgk ? 'sgk_official' : 'pedagogical_supplement',
      sourceBook: effectiveSourceBook,
      sourceDetail: effectiveSourceDetail,
      referenceBook: provenance.referenceBook,
      referenceDetail: provenance.referenceDetail,
      referenceUrl: provenance.referenceUrl,
      provenance,
      pedagogicalObjective: isGenerated
        ? softenUnverifiedText(bundle?.pedagogicalObjective || t.pedagogicalObjective || displayedDescription)
        : bundle?.pedagogicalObjective || t.pedagogicalObjective,
      order: idx + 1,
      starsEarned: 0,
      isLocked: false,
      xpReward: 50,
      starReward: 3,
      theoryContent: {
        summary: displayedSummary,
        keyPoints: isUnverifiedVietnamese ? t.keyPoints.map(softenUnverifiedText) : t.keyPoints,
        mascotTip: displayedMascotTip,
      },
      readingPassage: readingPassage && isUnverifiedVietnamese
        ? prepareUnverifiedPassage(readingPassage, isGenerated ? generatedTitle : t.title)
        : readingPassage,
      questions
    };
  });
}
