import type { GradeLevel } from '../../types/index.ts';
import { buildPracticePack } from './generator.ts';
import type { PracticePackManifest, PracticeSet, PracticeSubject } from './types.ts';

export * from './types.ts';
export * from './blueprints.ts';
export * from './audit.ts';
export * from './releaseGate.ts';

export const PRACTICE_SUBJECTS: PracticeSubject[] = ['math', 'vietnamese', 'english', 'math_en'];
export const PRACTICE_GRADES: GradeLevel[] = [1, 2, 3, 4, 5];

const packCache = new Map<string, PracticePackManifest>();

export function getPracticePack(subject: PracticeSubject, grade: GradeLevel): PracticePackManifest {
  const key = `${subject}-${grade}`;
  const cached = packCache.get(key);
  if (cached) return cached;
  const pack = buildPracticePack(subject, grade);
  packCache.set(key, pack);
  return pack;
}

export function getPracticePacks(): PracticePackManifest[] {
  return PRACTICE_SUBJECTS.flatMap((subject) =>
    PRACTICE_GRADES.map((grade) => getPracticePack(subject, grade))
  );
}

export function getPracticeSet(subject: PracticeSubject, grade: GradeLevel, setNumber: number): PracticeSet | null {
  if (!Number.isInteger(setNumber) || setNumber < 1 || setNumber > 12) return null;
  return getPracticePack(subject, grade).sets[setNumber - 1] || null;
}

export interface LegacyPracticePack {
  id: string;
  subject: 'math';
  grade: 2;
  title: string;
  setCount: 18;
  sourcePageCount: 26;
  sourceSha256: string;
  releaseStatus: 'source_review_pending';
}

const LEGACY_PRACTICE_PACKS: LegacyPracticePack[] = [{
  id: 'legacy-violympic-math-g2',
  subject: 'math',
  grade: 2,
  title: '18 vòng Toán lớp 2 — tài liệu tham khảo cũ',
  setCount: 18,
  sourcePageCount: 26,
  sourceSha256: 'B2C305037121A7178AE0CE4606DA31CA858CEA483A1ED6FAD2BE0F87A9443BCA',
  releaseStatus: 'source_review_pending',
}];

export function getLegacyPracticePacks(): LegacyPracticePack[] {
  return LEGACY_PRACTICE_PACKS.map((pack) => ({ ...pack }));
}
