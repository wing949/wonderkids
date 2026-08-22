import type { LessonNode } from '../types';

const PREVIEW_LABELS = ['Nội dung', 'Mục tiêu', 'Rèn luyện'] as const;
const MAX_PREVIEW_CHARACTERS = 88;

export function getLessonSemester(lesson: LessonNode): 1 | 2 {
  if (lesson.semester === 1 || lesson.semester === 2) return lesson.semester;
  return lesson.unit.includes('Tập 1') ? 1 : 2;
}

export function isLessonInSemester(lesson: LessonNode, semester: 1 | 2): boolean {
  return getLessonSemester(lesson) === semester;
}

function truncatePreviewText(value: string): string {
  const clean = value.replace(/\s+/g, ' ').replace(/[.;\s]+$/g, '').trim();
  if (clean.length <= MAX_PREVIEW_CHARACTERS) return clean;
  const clipped = clean.slice(0, MAX_PREVIEW_CHARACTERS - 1);
  const lastSpace = clipped.lastIndexOf(' ');
  return `${(lastSpace >= 48 ? clipped.slice(0, lastSpace) : clipped).trimEnd()}…`;
}

function formatSourcePages(pages: number[]): string {
  if (pages.length === 0) return '';
  const isConsecutive = pages.every((page, index) => index === 0 || page === pages[index - 1] + 1);
  if (isConsecutive && pages.length > 1) return `${pages[0]}–${pages[pages.length - 1]}`;
  return pages.join(', ');
}

function formatCompactPageReference(reference: string): string {
  const pageMatch = reference.match(/\bTrang\s+(.+)$/i);
  return pageMatch ? `Trang ${pageMatch[1].trim()}` : '';
}

/**
 * Hiển thị số bài phía trước cho môn Tiếng Việt tương tự môn Toán (ví dụ: "Bài 1: Thanh âm của gió")
 */
export function formatLessonDisplayTitle(lesson: LessonNode): string {
  const rawTitle = (lesson.provenance?.referenceLessonTitle || lesson.title || '').trim();

  if (lesson.subject === 'english' && /^Unit\s+\d+\s*:/i.test(rawTitle)) {
    return rawTitle;
  }

  // Nếu đã có sẵn tiền tố "Bài X:" hoặc "Bài học X:", trả về nguyên văn
  if (/^\s*Bài\s*(?:học\s*)?\d+\s*:/i.test(rawTitle)) {
    return rawTitle;
  }

  // Trích xuất số bài từ lessonNumber, lesson.id hoặc order
  const matchB = lesson.id.match(/b(\d+)/);
  const lessonNumber =
    (lesson as any).lessonNumber ||
    (matchB ? parseInt(matchB[1], 10) : null) ||
    lesson.order;

  if (lessonNumber) {
    return `Bài ${lessonNumber}: ${rawTitle}`;
  }

  return rawTitle;
}

export function getLessonPreviewItems(preview: string = '') {
  const safePreview = preview || '';
  return PREVIEW_LABELS.map((label, index) => {
    const nextLabel = PREVIEW_LABELS[index + 1];
    const start = safePreview.indexOf(`${label}:`);
    const end = nextLabel ? safePreview.indexOf(`${nextLabel}:`, Math.max(0, start)) : safePreview.length;
    const raw = start >= 0
      ? safePreview.slice(start + label.length + 1, end >= 0 ? end : safePreview.length)
      : '';
    return {
      label,
      text: truncatePreviewText(raw) || 'Hoàn thành hoạt động trong bài',
    };
  });
}

export function getLessonCardContent(lesson: LessonNode) {
  const vietnamesePages = lesson.sourceCitation?.sourcePages || [];
  const vietnameseVolume = lesson.semester === 2 ? 'hai' : 'một';
  const isVietnameseBookLesson = lesson.subject === 'vietnamese' && vietnamesePages.length > 0;
  const compactPageReference = lesson.textbookPageRef
    ? formatCompactPageReference(lesson.textbookPageRef)
    : '';
  const badge = isVietnameseBookLesson
    ? `📖 SGK Tiếng Việt ${lesson.grade} Tập ${vietnameseVolume} — Trang ${formatSourcePages(vietnamesePages)}`
    : lesson.subject === 'vietnamese'
      ? '⏳ Đang đối chiếu trang SGK'
    : lesson.textbookPageRef
      ? lesson.provenance?.verificationStatus === 'reference_only'
        ? `🧩 Luyện bổ trợ${compactPageReference ? ` • ${compactPageReference}` : ''}`
        : `📖 ${lesson.textbookPageRef}`
      : 'Bài học';
  const title = formatLessonDisplayTitle(lesson);
  const preview = lesson.cardPreview || lesson.description;
  return {
    badge,
    title,
    preview,
    previewItems: lesson.subject === 'vietnamese' ? getLessonPreviewItems(preview) : [],
  };
}
