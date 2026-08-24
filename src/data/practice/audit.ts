import { buildPracticePack } from './generator.ts';
import type { GradeLevel } from '../../types/index.ts';
import type { PracticeItem, PracticeSet, PracticeSubject } from './types.ts';
import { validatePracticeSetRelease } from './releaseGate.ts';

export interface PracticeSetAuditReport {
  setId: string;
  subject: PracticeSubject;
  grade: GradeLevel;
  setNumber: number;
  itemCount: number;
  answerCount: number;
  totalPoints: number;
  coveredTopics: string[];
  difficultyCounts: Record<'basic' | 'application' | 'challenge', number>;
  exactDuplicateCount: number;
  templateReuseGroupCount: number;
  audioItemCount: number;
  verifiedAudioItemCount: number;
  issues: string[];
  status: 'passed' | 'failed';
}

const SUBJECTS: PracticeSubject[] = ['math', 'vietnamese', 'english', 'math_en'];
const GRADES: GradeLevel[] = [1, 2, 3, 4, 5];

function normalizedTemplate(prompt: string): string {
  return prompt
    .replace(/^\[(?:Thử thách|Challenge)\]\s*/u, '')
    .replace(/^(?:Trạm|Mission|Thẻ chữ|Card)\s+\d+\.\d+\.\d+:\s*/u, '')
    .replace(/\d+/gu, '#')
    .replace(/\s+/gu, ' ')
    .trim()
    .toLocaleLowerCase('vi');
}

function exactActivitySignature(item: PracticeItem): string {
  const prompt = item.prompt
    .replace(/^\[(?:Thử thách|Challenge)\]\s*/u, '')
    .replace(/\s+/gu, ' ')
    .trim()
    .toLocaleLowerCase('vi');
  return JSON.stringify({
    type: item.type,
    prompt,
    options: item.options?.map((option) => option.label).sort(),
    matchingPairs: item.matchingPairs?.map((pair) => [pair.left, pair.right]).sort(),
    correctAnswer: item.type === 'single_choice'
      ? item.options?.find((option) => option.id === item.correctAnswer)?.label
      : item.correctAnswer,
  });
}

function hasAnswer(item: PracticeItem): boolean {
  return Array.isArray(item.correctAnswer)
    ? item.correctAnswer.length > 0 && item.correctAnswer.every((value) => value.trim().length > 0)
    : item.correctAnswer.trim().length > 0;
}

function auditSet(set: PracticeSet): PracticeSetAuditReport {
  const items = set.sections.flatMap((section) => section.items);
  const issues: string[] = validatePracticeSetRelease(set);
  if (set.sections.length !== 3) issues.push('Số phần không bằng 3.');
  if (items.length !== 30) issues.push('Số hoạt động không bằng 30.');
  if (set.sections.some((section) => section.items.length !== 10)) issues.push('Có phần không đủ 10 hoạt động.');

  const totalPoints = items.reduce((sum, item) => sum + item.points, 0);
  if (totalPoints !== 300 || set.totalPoints !== 300) issues.push('Tổng điểm không bằng 300.');

  const answerCount = items.filter(hasAnswer).length;
  if (answerCount !== items.length) issues.push('Có hoạt động thiếu đáp án.');

  const promptCounts = new Map<string, number>();
  const templateCounts = new Map<string, number>();
  for (const item of items) {
    const prompt = exactActivitySignature(item);
    promptCounts.set(prompt, (promptCounts.get(prompt) || 0) + 1);
    const template = normalizedTemplate(item.prompt);
    templateCounts.set(template, (templateCounts.get(template) || 0) + 1);
    if (!item.explanation.trim()) issues.push(`${item.id}: thiếu lời giải.`);
    if (!item.topic.trim()) issues.push(`${item.id}: thiếu chủ điểm.`);
    if (item.contentOrigin !== 'system_generated') issues.push(`${item.id}: sai nhãn nguồn.`);
    if (item.verificationStatus !== 'verified') issues.push(`${item.id}: chưa kiểm duyệt.`);
  }

  const exactDuplicateCount = [...promptCounts.values()].reduce((sum, count) => sum + Math.max(0, count - 1), 0);
  if (exactDuplicateCount > 0) issues.push(`Có ${exactDuplicateCount} câu trùng nguyên văn.`);

  const difficultyCounts = { basic: 0, application: 0, challenge: 0 };
  for (const item of items) difficultyCounts[item.difficulty] += 1;
  const audioItems = items.filter((item) => item.audio);

  return {
    setId: set.id,
    subject: set.subject,
    grade: set.grade,
    setNumber: set.setNumber,
    itemCount: items.length,
    answerCount,
    totalPoints,
    coveredTopics: [...new Set(items.map((item) => item.topic))],
    difficultyCounts,
    exactDuplicateCount,
    templateReuseGroupCount: [...templateCounts.values()].filter((count) => count > 1).length,
    audioItemCount: audioItems.length,
    verifiedAudioItemCount: audioItems.filter((item) => item.audio?.verificationStatus === 'verified').length,
    issues,
    status: issues.length === 0 ? 'passed' : 'failed',
  };
}

export function getPracticeSetAuditReports(): PracticeSetAuditReport[] {
  return SUBJECTS.flatMap((subject) =>
    GRADES.flatMap((grade) => buildPracticePack(subject, grade).sets.map(auditSet)),
  );
}
