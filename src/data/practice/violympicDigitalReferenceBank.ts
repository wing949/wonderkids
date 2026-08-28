import type { GradeLevel } from '../../types/index.ts';
import itemsJson from './violympicDigitalReferenceItems.generated.json' with { type: 'json' };
import manifestJson from './violympicDigitalReferenceSources.generated.json' with { type: 'json' };
import type { PracticeItem, PracticeSubject } from './types.ts';

export type ViolympicDigitalSubject = Exclude<PracticeSubject, 'english'>;

export interface ViolympicDigitalSource {
  id: string;
  title: string;
  subject: ViolympicDigitalSubject;
  grades: GradeLevel[];
  roles: Array<'answer' | 'mixed' | 'question' | 'solution'>;
  fileType: 'pdf' | 'docx';
  pageCount: number;
  sha256: string;
  extractionStatus: 'text_extractable' | 'ocr_required' | 'unreadable';
  questionMarkerCount: number;
  solutionMarkerCount: number;
  duplicateCopies: number;
}

export interface ViolympicDigitalStats {
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

export interface ViolympicDigitalItem extends PracticeItem {
  subject: ViolympicDigitalSubject;
  grade: GradeLevel;
  contentOrigin: 'reference_extracted';
  sourceDocumentIds: [string];
  sourceLocator: string;
  sourcePageTextHash: string;
  sourceExcerptHash: string;
}

const manifest = manifestJson as {
  version: string;
  contentPolicy: 'verified_text_layer_extraction_only';
  stats: ViolympicDigitalStats;
  sources: ViolympicDigitalSource[];
};
const items = itemsJson as ViolympicDigitalItem[];

export const getViolympicDigitalStats = (): ViolympicDigitalStats => ({ ...manifest.stats });
export const getViolympicDigitalSources = (): ViolympicDigitalSource[] => manifest.sources.map((source) => ({
  ...source,
  grades: [...source.grades],
  roles: [...source.roles],
}));
export const getViolympicDigitalItems = (filter?: {
  subject?: ViolympicDigitalSubject;
  grade?: GradeLevel;
}): ViolympicDigitalItem[] => items.filter((item) => (
  (!filter?.subject || item.subject === filter.subject)
  && (!filter?.grade || item.grade === filter.grade)
));
