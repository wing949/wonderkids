import type { LessonNode } from '../types';
import { getVietnameseAudioAsset } from '../data/curriculum/vietnamese/audioManifest';

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

  // Các bài đã có tên và trang trong mục lục SGK nhưng chưa duyệt nguyên văn
  // chỉ được xem trang sách; không dùng bài luyện cũ thay cho nội dung SGK.
  if (lesson.catalogSection === 'sgk_pending') return 'source_only';

  const isGradeOnePhonics = lesson.grade === 1 && lesson.semester === 1;
  const isDeclaredSupplement = lesson.provenance?.contentOrigin === 'pedagogical_supplement';
  if (isGradeOnePhonics || isDeclaredSupplement) return 'supplement';

  return 'source_only';
}

export function canPlayVietnameseReadingAudio(lesson: LessonNode): boolean {
  if (lesson.subject !== 'vietnamese') return true;

  const policy = getVietnameseReadingPolicy(lesson);
  if (policy === 'supplement') return true;
  if (policy !== 'verified_sgk') return false;

  const asset = getVietnameseAudioAsset(lesson.id);
  const transcriptPages = lesson.readingPassage?.sourcePages || [];
  return Boolean(
    asset
      && transcriptPages.length > 0
      && asset.sourcePages.length === transcriptPages.length
      && asset.sourcePages.every((page, index) => page === transcriptPages[index]),
  );
}
