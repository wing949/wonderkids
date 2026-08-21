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
  const isSgk = lesson.catalogSection === 'sgk';
  const vietnamesePages = lesson.sourceCitation?.sourcePages || [];
  const vietnameseVolume = lesson.semester === 2 ? 'hai' : 'một';
  const isVietnameseBookLesson = lesson.subject === 'vietnamese' && vietnamesePages.length > 0;
  const badge = isVietnameseBookLesson
    ? `📖 SGK Tiếng Việt ${lesson.grade} Tập ${vietnameseVolume} — Trang ${vietnamesePages.join(', ')}`
    : lesson.subject === 'vietnamese'
      ? 'Luyện thêm • Tiếng Việt'
    : lesson.textbookPageRef
      ? `📖 ${lesson.textbookPageRef}`
      : 'Bài học';
  const title = isVietnameseBookLesson
    ? lesson.provenance?.referenceLessonTitle || `Bài ${lesson.order}: ${lesson.title}`
    : lesson.title;
  const preview = lesson.cardPreview || lesson.description;
  return {
    badge: isSgk && lesson.textbookPageRef && lesson.subject === 'vietnamese'
      ? `📖 SGK Tiếng Việt ${lesson.grade} Tập ${vietnameseVolume} — ${lesson.textbookPageRef}`
      : badge,
    title,
    preview,
    previewItems: lesson.subject === 'vietnamese' ? getLessonPreviewItems(preview) : [],
  };
}
