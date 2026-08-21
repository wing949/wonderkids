import rawManifests from './bookManifests.generated.json';
import type { GradeLevel } from '../../../types';

export type SourceVerificationStatus = 'draft' | 'ocr_reviewed' | 'verified';
export type BookImportStatus = 'source_indexed' | 'ocr_in_progress' | 'review_in_progress' | 'verified';

export interface VietnameseSourcePage {
  readerIndex: number;
  imageUrl: string;
  sourceHash: string;
  verificationStatus: SourceVerificationStatus;
}

export interface VietnameseBookManifest {
  grade: GradeLevel;
  semester: 1 | 2;
  id: string;
  title: string;
  pageCount: number;
  readerUrl: string;
  publisher: string;
  collection: string;
  importStatus: BookImportStatus;
  published: boolean;
  manifestHash: string;
  pages: VietnameseSourcePage[];
}

export const VIETNAMESE_BOOK_MANIFESTS = rawManifests as VietnameseBookManifest[];

export function getVietnameseBookManifest(grade: GradeLevel, semester: 1 | 2): VietnameseBookManifest {
  const manifest = VIETNAMESE_BOOK_MANIFESTS.find((book) => book.grade === grade && book.semester === semester);
  if (!manifest) throw new Error(`Thiếu manifest Tiếng Việt lớp ${grade}, tập ${semester}.`);
  return manifest;
}
