import type { GradeLevel } from '../../types/index.ts';
import { PRACTICE_TOPIC_MATRIX } from './blueprints.ts';
import type { PracticeItem, PracticeSet, PracticeSubject } from './types.ts';

function correctAnswerValue(item: PracticeItem): string | string[] | undefined {
  if (item.type !== 'single_choice') return item.correctAnswer;
  return item.options?.find((option) => option.id === item.correctAnswer)?.label;
}

function exactItemSignature(item: PracticeItem): string {
  return JSON.stringify({
    type: item.type,
    prompt: item.prompt.replace(/\s+/gu, ' ').trim().toLocaleLowerCase('vi'),
    options: item.options?.map((option) => option.label).sort(),
    matchingPairs: item.matchingPairs?.map((pair) => [pair.left, pair.right]).sort(),
    correctAnswer: correctAnswerValue(item),
  });
}

export function validatePracticeSetRelease(set: PracticeSet): string[] {
  const issues: string[] = [];
  const items = set.sections.flatMap((section) => section.items);
  if (set.sections.length !== 3) issues.push(`${set.id}: phải có đúng 3 phần.`);
  if (items.length !== 30 || set.sections.some((section) => section.items.length !== 10)) issues.push(`${set.id}: phải có đúng 30 hoạt động, mỗi phần 10 hoạt động.`);
  if (set.totalPoints !== 300 || items.reduce((sum, item) => sum + item.points, 0) !== 300) issues.push(`${set.id}: tổng điểm không bằng 300.`);
  if (items.some((item) => item.verificationStatus !== 'verified')) issues.push(`${set.id}: còn hoạt động chưa qua cổng kiểm tra.`);
  if (items.some((item) => !item.prompt.trim() || !item.explanation.trim() || !item.topic.trim())) issues.push(`${set.id}: có hoạt động thiếu nội dung, lời giải hoặc chủ điểm.`);
  if (new Set(items.map(exactItemSignature)).size !== items.length) issues.push(`${set.id}: có hoạt động trùng nguyên văn.`);

  const expectedDifficulty = set.setNumber <= 4
    ? { basic: 21, application: 8, challenge: 1 }
    : set.setNumber <= 8
      ? { basic: 15, application: 11, challenge: 4 }
      : { basic: 9, application: 14, challenge: 7 };
  const actualDifficulty = { basic: 0, application: 0, challenge: 0 };
  for (const item of items) actualDifficulty[item.difficulty] += 1;
  if (Object.keys(expectedDifficulty).some((key) => actualDifficulty[key as keyof typeof actualDifficulty] !== expectedDifficulty[key as keyof typeof expectedDifficulty])) {
    issues.push(`${set.id}: sai phân bố độ khó.`);
  }
  return issues;
}

export function validatePracticePackRelease(
  subject: PracticeSubject,
  grade: GradeLevel,
  sets: PracticeSet[],
): string[] {
  const issues = sets.flatMap(validatePracticeSetRelease);
  if (sets.length !== 12 || new Set(sets.map((set) => set.id)).size !== 12) issues.push(`practice-${subject}-g${grade}: thiếu hoặc trùng đề.`);
  const actualTopics = new Set(sets.flatMap((set) => set.sections.flatMap((section) => section.items.map((item) => item.topic))));
  const expectedTopics = PRACTICE_TOPIC_MATRIX[subject][grade];
  if (expectedTopics.some((topic) => !actualTopics.has(topic)) || actualTopics.size !== expectedTopics.length) issues.push(`practice-${subject}-g${grade}: sai độ phủ chủ điểm.`);

  if ((subject === 'math' || subject === 'math_en') && grade >= 2) {
    const hasDivision = sets.some((set) => set.sections.some((section) => section.items.some((item) => /(?:÷|\s:\s)/u.test(item.prompt))));
    if (!hasDivision) issues.push(`practice-${subject}-g${grade}: thiếu phép chia.`);
  }
  if ((subject === 'math' || subject === 'math_en') && (grade === 1 || grade === 2)) {
    const limit = grade === 1 ? 100 : 1_000;
    const calculationValues = sets.flatMap((set) => set.sections.flatMap((section) => section.items))
      .filter((item) => /Phép cộng|Phép trừ|Addition|Subtraction/u.test(item.topic))
      .flatMap((item) => [...item.prompt.matchAll(/\d+/gu)].map((match) => Number(match[0])));
    if (calculationValues.some((value) => value > limit) || !calculationValues.some((value) => value >= limit * 0.7)) {
      issues.push(`practice-${subject}-g${grade}: phạm vi số không đúng giới hạn ${limit}.`);
    }
  }
  return issues;
}
