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
  getVietnameseBookManifest,
  getVietnameseLessonPageMapping,
  getVerifiedVietnameseSgkTranscript,
  getVerifiedVietnameseSgkActivities,
  getVerifiedVietnameseSgkActivityPages,
} from './vietnamese';
import { ENGLISH_CURRICULUM_BY_GRADE } from './english';
import { getEnglishVocabularyNote } from './english/englishSupplementContent';
import { generateEnglishQuestions } from './english/englishQuestionEngine';

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

function prepareUnverifiedPassage(passage: ReadingPassage, practiceTitle: string): ReadingPassage {
  const content = passage.content.map(softenUnverifiedText);
  return {
    ...passage,
    title: practiceTitle,
    author: undefined,
    content,
    audioNarration: passage.audioNarration || `${practiceTitle}. ${content.join(' ')}`,
    vocabularyNotes: passage.vocabularyNotes?.map((item) => ({
      word: softenUnverifiedText(item.word),
      meaning: softenUnverifiedText(item.meaning),
    })),
  };
}

function buildLessonOverview(passage: ReadingPassage | undefined, topic: CurriculumTopic) {
  const cleanPart = (value: string) => softenUnverifiedText(value)
    .replace(/^\s*•\s*/, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/[.;:,\s]+$/g, '')
    .trim();
  const content = passage?.content
    .slice(0, 2)
    .map(cleanPart)
    .filter(Boolean)
    .join('; ') || cleanPart(topic.summary || topic.description);
  const objective = softenUnverifiedText(topic.pedagogicalObjective || topic.summary || topic.description)
    .replace(/\b(?:do WonderKids biên soạn|nguồn sách tham khảo|tài liệu tham khảo)\b/gi, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/^\s*[-—:,.;]+\s*|\s*[-—:,.;]+\s*$/g, '')
    .trim();
  const practice = passage?.content.slice(2, 3).map(cleanPart).find(Boolean)
    || 'đọc, quan sát và hoàn thành hoạt động trong bài';
  return { content, objective, practice };
}

function buildSourceOnlyOverview(title: string, hasMatchedPage: boolean) {
  return hasMatchedPage
    ? {
        content: `Đọc nguyên văn bài “${title}” và thực hiện các yêu cầu trên trang sách`,
        objective: 'Đọc đúng, hiểu nội dung và làm đúng yêu cầu của bài học',
        practice: 'Đọc, quan sát và hoàn thành từng hoạt động trên trang sách',
      }
    : {
        content: 'Bài học tạm ẩn nội dung chữ trong khi đối chiếu lại với sách giáo khoa',
        objective: 'Chỉ mở nội dung chính sau khi tên bài và trang sách được xác minh',
        practice: 'Các hoạt động bổ sung được tách riêng và không tính là bài tập sách',
      };
}

function buildCardPreview(overview: { content: string; objective: string; practice: string }): string {
  const MAX_PREVIEW_CHARACTERS = 88;
  const shorten = (value: string) => {
    if (value.length <= MAX_PREVIEW_CHARACTERS) return value;
    const clipped = value.slice(0, MAX_PREVIEW_CHARACTERS - 1);
    const lastSpace = clipped.lastIndexOf(' ');
    return `${(lastSpace >= 48 ? clipped.slice(0, lastSpace) : clipped).trimEnd()}…`;
  };
  return [
    `Nội dung: ${shorten(overview.content)}`,
    `Mục tiêu: ${shorten(overview.objective)}`,
    `Rèn luyện: ${shorten(overview.practice)}`,
  ].join('\n');
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

  if (subject === 'english') {
    return generateEnglishQuestions(topic, grade);
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

  // Default pedagogical question generator for Vietnamese reading comprehension.
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
        { id: 'b', label: subject === 'vietnamese' ? 'Bài đọc không nhắc đến chi tiết này.' : 'This detail is not part of the lesson.' },
        { id: 'c', label: subject === 'vietnamese' ? 'Ý kiến này trái ngược với nội dung bài học.' : 'This statement does not match the lesson topic.' },
      ]
    },
    {
      id: `${topic.id}-q2`,
      type: 'bubble_choice',
      questionText: subject === 'vietnamese'
        ? `Theo bài học, câu nào dưới đây nêu đúng chi tiết hoặc cách làm đẹp nhất?`
        : `Choose the correct statement according to the lesson:`,
      audioText: subject === 'vietnamese' ? 'Em hãy chọn câu trả lời đúng nhất:' : 'Choose the best answer.',
      hint: topic.keyPoints[1] || topic.summary,
      points: 15,
      options: [
        { id: 'a', label: secondPoint, isCorrect: true },
        { id: 'b', label: subject === 'vietnamese' ? 'Chi tiết này chưa chính xác theo bài học.' : 'This statement does not match the lesson.' },
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
    const verifiedSgkTranscript = subject === 'vietnamese'
      ? getVerifiedVietnameseSgkTranscript(normalizedId)
      : null;
    const isPendingSgkCatalog = subject === 'vietnamese'
      && t.sourceType === 'sgk_official'
      && Array.isArray(t.sourcePages)
      && t.sourcePages.length > 0
      && !verifiedSgkTranscript;

    // Không cho phần đọc/câu hỏi cũ chen vào một bài SGK mới chỉ mới đối chiếu mục lục.
    // Bài chưa duyệt chỉ mở trang sách; transcript đã duyệt là ngoại lệ duy nhất.
    let readingPassage: ReadingPassage | undefined = verifiedSgkTranscript?.readingPassage
      || (isPendingSgkCatalog ? undefined : bundle?.passage || t.readingPassage);

    // Đảm bảo 100% tất cả bài học Tiếng Việt & Tiếng Anh mọi cấp học (Lớp 1-5) đều có Bài Đọc & Shadowing phong phú
    if (!readingPassage && subject === 'vietnamese' && !isPendingSgkCatalog) {
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
      const practiceContent = [
        t.description,
        `Learning goal: ${t.summary}`,
        `Practice: ${t.keyPoints.join(' ')}`,
      ];
      readingPassage = {
        title: t.title.replace(/^Unit \d+:\s*/i, ''),
        author: 'WonderKids — supplementary practice',
        genre: 'story',
        content: practiceContent,
        audioNarration: `${t.title.replace(/^Unit \d+:\s*/i, '')}. ${practiceContent.join(' ')}`,
        contentOrigin: 'system_generated',
        verificationStatus: 'draft',
        sourcePages: t.sourcePages,
        vocabularyNotes: [getEnglishVocabularyNote(t)],
      };
    }

    if (!readingPassage && isPendingSgkCatalog) {
      readingPassage = {
        title: cleanReferenceTitle(t.title),
        genre: 'prose',
        content: [],
        contentOrigin: 'sgk_reference',
        verificationStatus: 'draft',
        sourcePages: t.sourcePages,
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
    const declaredSourceType = isPendingSgkCatalog
      ? 'sgk_official'
      : isKnownVietnameseSupplement
      ? 'pedagogical_supplement'
      : bundle?.sourceType || t.sourceType || (t.textbookPageRef ? 'sgk_official' : 'pedagogical_supplement');
    const declaredSourceBook = isPendingSgkCatalog
      ? t.sourceBook || defaultSourceBook
      : bundle?.sourceBook || t.sourceBook || defaultSourceBook;
    const declaredSourceDetail = isPendingSgkCatalog
      ? t.sourceDetail || t.textbookPageRef || 'Mục lục SGK chính thức'
      : bundle?.sourceDetail || t.sourceDetail || t.textbookPageRef || 'Nội dung bổ trợ và củng cố năng lực';
    const referenceBook = subject === 'vietnamese'
      ? getVietnameseBookSource(grade, t.semester)
      : null;
    let provenance: ContentProvenance = subject !== 'vietnamese'
      ? t.provenance || {
        contentOrigin: declaredSourceType === 'sgk_official' ? 'system_generated' : 'pedagogical_supplement',
        verificationStatus: declaredSourceType === 'sgk_official' ? 'reference_only' : 'declared_supplement',
        referenceBook: declaredSourceBook,
        referenceDetail: declaredSourceDetail,
        note: declaredSourceType === 'sgk_official'
          ? 'Tên bài và trang dùng để tham chiếu SGK; phần mô tả, bài đọc và câu hỏi do ứng dụng biên soạn, chưa phải nguyên văn SGK.'
          : 'Nội dung bổ trợ sư phạm.',
      }
      : verifiedSgkTranscript
        ? {
          contentOrigin: 'sgk_reference',
          verificationStatus: 'verified',
          referenceBook: referenceBook
            ? `${referenceBook.title} — ${VIETNAMESE_BOOK_COLLECTION} — ${VIETNAMESE_BOOK_PUBLISHER}`
            : declaredSourceBook,
          referenceLessonTitle: t.title,
          referenceDetail: declaredSourceDetail,
          referenceUrl: referenceBook?.readerUrl,
          note: 'Nguyên văn bài đọc đã đối chiếu với trang SGK ghi trong transcript.',
        }
        : t.provenance || bundle?.provenance || (
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
    if (subject === 'vietnamese' && isPendingSgkCatalog && referenceBook && !provenance.referenceUrl) {
      provenance = { ...provenance, referenceUrl: referenceBook.readerUrl };
    }
    const isVerifiedSgk = provenance.contentOrigin === 'sgk_reference' && provenance.verificationStatus === 'verified';
    const isReferenceOnly = provenance.verificationStatus === 'reference_only';
    const isGenerated = provenance.contentOrigin === 'system_generated';
    const isUnverifiedVietnamese = subject === 'vietnamese' && !isVerifiedSgk;
    const displayedTitle = isUnverifiedVietnamese && !isPendingSgkCatalog ? cleanReferenceTitle(t.title) : t.title;
    const mappedSourcePages = subject === 'vietnamese'
      ? getVietnameseLessonPageMapping(normalizedId)?.sourcePages
      : undefined;
    const sourcePages = provenance.contentOrigin !== 'pedagogical_supplement'
      ? [...new Set([
          ...(verifiedSgkTranscript?.sourcePages || []),
          ...(subject === 'vietnamese' ? getVerifiedVietnameseSgkActivityPages(normalizedId) : []),
          ...(!verifiedSgkTranscript ? (t.sourcePages || mappedSourcePages || []) : []),
        ])]
      : [];
    const allowSupplementReading = subject === 'vietnamese'
      && !isPendingSgkCatalog
      && ((grade === 1 && t.semester === 1) || provenance.contentOrigin === 'pedagogical_supplement');
    const effectiveSourceBook = (isVerifiedSgk || isPendingSgkCatalog || isReferenceOnly) ? declaredSourceBook : 'WonderKids';
    const effectiveSourceDetail = (isVerifiedSgk || isPendingSgkCatalog || isReferenceOnly) ? declaredSourceDetail : 'Nội dung luyện thêm';
    const verifiedSgkActivities = subject === 'vietnamese' && verifiedSgkTranscript
      ? getVerifiedVietnameseSgkActivities(normalizedId)
      : [];
    const rawQuestions = isPendingSgkCatalog
      ? []
      : verifiedSgkActivities.length > 0
        ? verifiedSgkActivities
        : bundle?.questions || generateQuestionsForTopic(t, subject, grade);
    const questions = subject === 'vietnamese'
      ? (verifiedSgkActivities.length > 0
          ? rawQuestions
          : rawQuestions.map((question) => prepareGeneratedQuestion(question, t.title, displayedTitle)))
      : rawQuestions;
    const lessonOverview = subject === 'vietnamese' && (isUnverifiedVietnamese || Boolean(verifiedSgkTranscript))
      ? (verifiedSgkTranscript
          ? buildLessonOverview(verifiedSgkTranscript.readingPassage, t)
          : allowSupplementReading
            ? buildLessonOverview(readingPassage, t)
            : buildSourceOnlyOverview(displayedTitle, sourcePages.length > 0))
      : undefined;
    const cardPreview = lessonOverview
      ? buildCardPreview(lessonOverview)
      : t.description;
    const displayedDescription = lessonOverview
      ? `Nội dung: ${lessonOverview.content}\nMục tiêu: ${lessonOverview.objective}\nRèn luyện: ${lessonOverview.practice}`
      : t.description;
    const displayedSummary = lessonOverview ? lessonOverview.content : t.summary;
    const displayedMascotTip = isUnverifiedVietnamese
      ? `MiuMiu: Cùng luyện tập “${cleanReferenceTitle(t.title)}” nhé!`
      : t.mascotTip;
    const bookManifest = subject === 'vietnamese' && sourcePages.length > 0
      ? getVietnameseBookManifest(grade, t.semester)
      : undefined;
    const sourcePageImageUrls = bookManifest
      ? sourcePages.map((page) => bookManifest.pages.find((item) => item.readerIndex === page)?.imageUrl).filter((url): url is string => Boolean(url))
      : [];

    return {
      id: t.id,
      title: displayedTitle,
      description: displayedDescription,
      catalogSection: subject === 'vietnamese'
        ? (isPendingSgkCatalog ? 'sgk_pending' : isVerifiedSgk ? 'sgk' : 'extra_practice')
        : undefined,
      cardPreview,
      lessonOverview,
      sourceCitation: bookManifest ? {
        bookId: bookManifest.id,
        sourcePages,
        sourceLabel: `${bookManifest.title} — ${t.title} — Trang ${sourcePages.join(', ')}`,
        sourceHash: bookManifest.manifestHash,
        verificationStatus: isVerifiedSgk ? 'verified' : 'draft',
      } : undefined,
      sourcePageImageUrls,
      subject,
      grade,
      semester: t.semester,
      unit: isUnverifiedVietnamese ? `SGK Tiếng Việt tập ${t.semester}` : t.unit,
      textbookPageRef: (isVerifiedSgk || isPendingSgkCatalog || isReferenceOnly) ? t.textbookPageRef : undefined,
      sourceType: (isVerifiedSgk || isPendingSgkCatalog) ? 'sgk_official' : 'pedagogical_supplement',
      sourceBook: effectiveSourceBook,
      sourceDetail: effectiveSourceDetail,
      referenceBook: (isVerifiedSgk || isPendingSgkCatalog || isReferenceOnly) ? provenance.referenceBook : undefined,
      referenceDetail: (isVerifiedSgk || isPendingSgkCatalog || isReferenceOnly) ? provenance.referenceDetail : undefined,
      referenceUrl: (isVerifiedSgk || isPendingSgkCatalog || isReferenceOnly) ? provenance.referenceUrl : undefined,
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
        keyPoints: isGenerated && subject === 'vietnamese'
          ? [
            'Đọc to, rõ ràng, trôi chảy và diễn cảm nội dung bài học.',
            'Hiểu nội dung, từ ngữ và hoàn thành các hoạt động rèn luyện.',
          ]
          : isUnverifiedVietnamese ? t.keyPoints.map(softenUnverifiedText) : t.keyPoints,
        mascotTip: displayedMascotTip,
      },
      readingPassage: verifiedSgkTranscript?.readingPassage
        || (readingPassage && isUnverifiedVietnamese && !isPendingSgkCatalog
          ? prepareUnverifiedPassage(readingPassage, displayedTitle)
          : readingPassage),
      questions,
      appExtensions: isUnverifiedVietnamese && !isPendingSgkCatalog ? questions : [],
    };
  });
}
