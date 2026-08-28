import type { GradeLevel } from '../../types/index.ts';
import referenceItemsJson from './violympicReferenceItems.generated.json' with { type: 'json' };
import sourceManifestJson from './violympicReferenceSources.generated.json' with { type: 'json' };
import type { PracticeItem, PracticeSubject } from './types.ts';

export type ViolympicReferenceSubject = Exclude<PracticeSubject, 'english'>;
export type ViolympicReferenceExtractionStatus = 'text_extractable' | 'ocr_required' | 'unreadable';

export interface ViolympicReferenceSource {
  id: string;
  title: string;
  subject: ViolympicReferenceSubject;
  grades: GradeLevel[];
  roles: Array<'answer' | 'mixed' | 'question' | 'solution'>;
  fileType: 'pdf' | 'docx';
  pageCount: number;
  sha256: string;
  extractionStatus: ViolympicReferenceExtractionStatus;
  questionMarkerCount: number;
  solutionMarkerCount: number;
  duplicateCopies: number;
}

export interface ViolympicReferenceStats {
  totalFiles: number;
  rawNonOcrFiles: number;
  rawOcrFiles: number;
  copyableDocumentFiles: number;
  unsupportedContainerFiles: number;
  totalPdfFiles: number;
  uniquePdfDocuments: number;
  primaryGradeDocuments: number;
  duplicateFilesRemoved: number;
  excludedOutsidePrimary: number;
  excludedAmbiguousGrade: number;
  textExtractableDocuments: number;
  ocrRequiredDocuments: number;
  unreadableDocuments: number;
  questionMarkers: number;
  solutionMarkers: number;
  extractedVerifiedItems: number;
}

export interface ViolympicReferenceItem extends PracticeItem {
  subject: ViolympicReferenceSubject;
  grade: GradeLevel;
  contentOrigin: 'reference_extracted';
  sourceDocumentIds: [string];
  sourceLocator: string;
  sourcePageTextHash: string;
  sourceExcerptHash: string;
}

interface GeneratedSourceManifest {
  version: string;
  contentPolicy: string;
  stats: ViolympicReferenceStats;
  sources: ViolympicReferenceSource[];
}

const sourceManifest = sourceManifestJson as GeneratedSourceManifest;
const referenceItems = referenceItemsJson as ViolympicReferenceItem[];

export function getViolympicReferenceSources(): ViolympicReferenceSource[] {
  return sourceManifest.sources.map((source) => ({
    ...source,
    grades: [...source.grades],
    roles: [...source.roles],
  }));
}

export function getViolympicReferenceStats(): ViolympicReferenceStats {
  return { ...sourceManifest.stats };
}

export function getViolympicReferenceItems(filter?: {
  subject?: ViolympicReferenceSubject;
  grade?: GradeLevel;
}): ViolympicReferenceItem[] {
  return referenceItems.filter((item) => (
    (!filter?.subject || item.subject === filter.subject)
    && (!filter?.grade || item.grade === filter.grade)
  ));
}
