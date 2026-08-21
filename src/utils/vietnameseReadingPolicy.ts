import type { LessonNode } from '../types';

export type VietnameseReadingPolicy = 'verified_sgk' | 'supplement' | 'source_only';

export function getVietnameseReadingPolicy(lesson: LessonNode): VietnameseReadingPolicy {
  if (lesson.subject !== 'vietnamese') return 'verified_sgk';

  const verifiedTranscript = lesson.readingPassage;
  const transcriptMatchesSource = verifiedTranscript?.contentOrigin === 'sgk_reference'
    && verifiedTranscript.verificationStatus === 'verified'
    && Array.isArray(verifiedTranscript.sourcePages)
    && verifiedTranscript.sourcePages.length > 0
    && lesson.sourceCitation
    && verifiedTranscript.sourcePages.every((page) => lesson.sourceCitation?.sourcePages.includes(page))
    && /^[a-f0-9]{64}$/.test(verifiedTranscript.sourceHash || '');
  if (transcriptMatchesSource) return 'verified_sgk';

  const isVerifiedSgk = lesson.catalogSection === 'sgk'
    && lesson.provenance?.contentOrigin === 'sgk_reference'
    && lesson.provenance.verificationStatus === 'verified'
    && lesson.sourceCitation?.verificationStatus === 'verified';
  if (isVerifiedSgk) return 'verified_sgk';

  const isGradeOnePhonics = lesson.grade === 1 && lesson.semester === 1;
  const isDeclaredSupplement = lesson.provenance?.contentOrigin === 'pedagogical_supplement';
  if (isGradeOnePhonics || isDeclaredSupplement) return 'supplement';

  return 'source_only';
}

export function canPlayVietnameseReadingAudio(lesson: LessonNode): boolean {
  if (lesson.subject !== 'vietnamese') return true;

  // Trong đợt rà soát nội dung, bản đọc SGK chỉ được hiển thị bằng chữ và trang nguồn.
  // Audio/Shadowing được mở ở đợt nghiệm thu audio riêng để không phát file cũ lệch transcript.
  return getVietnameseReadingPolicy(lesson) === 'supplement';
}
