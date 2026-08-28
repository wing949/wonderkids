import type { GradeLevel, SourceVerificationStatus } from '../../../types/index.ts';
import rawManifests from './bookManifests.generated.json';

export type EnglishBookImportStatus = 'source_indexed' | 'ocr_in_progress' | 'review_in_progress' | 'verified';

export interface EnglishSourcePage {
  readerIndex: number;
  imageUrl: string;
  sourceHash: string;
  verificationStatus: SourceVerificationStatus;
}

export interface EnglishBookManifest {
  grade: GradeLevel;
  semester: 1 | 2;
  id: string;
  title: string;
  pageCount: number;
  readerUrl: string;
  publisher: string;
  collection: string;
  importStatus: EnglishBookImportStatus;
  published: boolean;
  manifestHash: string;
  pages: EnglishSourcePage[];
}

export const ENGLISH_BOOK_MANIFESTS = rawManifests as EnglishBookManifest[];

export function getEnglishBookManifest(grade: GradeLevel, semester: 1 | 2): EnglishBookManifest | undefined {
  return ENGLISH_BOOK_MANIFESTS.find((book) => book.grade === grade && book.semester === semester);
}
