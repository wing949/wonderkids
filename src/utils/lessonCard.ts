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

function getStudentFacingVietnameseTitle(referenceTitle: string, fallback: string): string {
  const title = referenceTitle || fallback;
  return title.replace(/^\s*Bài\s*(?:học\s*)?\d+\s*:\s*/i, '').trim() || fallback;
}

export function getLessonPreviewItems(preview: string) {
  return PREVIEW_LABELS.map((label, index) => {
    const nextLabel = PREVIEW_LABELS[index + 1];
    const start = preview.indexOf(`${label}:`);
    const end = nextLabel ? preview.indexOf(`${nextLabel}:`, Math.max(0, start)) : preview.length;
    const raw = start >= 0
      ? preview.slice(start + label.length + 1, end >= 0 ? end : preview.length)
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
  const badge = isVietnameseBookLesson
    ? `📖 SGK Tiếng Việt ${lesson.grade} Tập ${vietnameseVolume} — Trang ${formatSourcePages(vietnamesePages)}`
    : lesson.subject === 'vietnamese'
      ? '⏳ Đang đối chiếu trang SGK'
    : lesson.textbookPageRef
      ? `📖 ${lesson.textbookPageRef}`
      : 'Bài học';
  const title = isVietnameseBookLesson
    ? getStudentFacingVietnameseTitle(lesson.provenance?.referenceLessonTitle || '', lesson.title)
    : lesson.title;
  const preview = lesson.cardPreview || lesson.description;
  return {
    badge,
    title,
    preview,
    previewItems: lesson.subject === 'vietnamese' ? getLessonPreviewItems(preview) : [],
  };
}
