import { GradeLevel, Question } from '../../../types/index.ts';
import { CurriculumTopic } from '../types.ts';

const GENERAL_DISTRACTORS = [
  'I go to school by bus.',
  'It is rainy and cold today.',
  'The elephant is bigger than the cat.',
  'I have Maths on Monday.',
  'The book is under the table.',
];

function bubble(
  topic: CurriculumTopic,
  suffix: string,
  questionText: string,
  correct: string,
  distractors: string[],
  hint: string,
): Question {
  const labels = [correct, ...distractors, ...GENERAL_DISTRACTORS]
    .map((label) => label.trim())
    .filter((label, index, all) => label && all.indexOf(label) === index)
    .slice(0, 3);
  const questionNumber = Number(suffix.replace(/\D/g, '')) || 1;
  const correctPosition = (topic.lessonNumber + questionNumber) % labels.length;
  const arrangedLabels = labels.slice(1);
  arrangedLabels.splice(correctPosition, 0, labels[0]);

  return {
    id: `${topic.id}-${suffix}`,
    type: 'bubble_choice',
    questionText,
    audioText: questionText,
    points: 10,
    hint,
    contentOrigin: 'system_generated',
    options: arrangedLabels.map((label, index) => ({
      id: String.fromCharCode(97 + index),
      label,
      isCorrect: index === correctPosition,
    })),
  };
}

function extractQuestionAnswerPairs(text: string): Array<{ question: string; answer: string }> {
  const pairs: Array<{ question: string; answer: string }> = [];
  const pattern = /([^.!?]+\?)\s*(?:—|-)\s*([^.!?]+(?:[.!?]|$))/g;
  for (const match of text.matchAll(pattern)) {
    pairs.push({ question: match[1].trim(), answer: match[2].trim() });
  }
  return pairs;
}

function firstUsefulSentence(topic: CurriculumTopic): string {
  const pair = extractQuestionAnswerPairs(`${topic.description} ${topic.keyPoints.join(' ')}`)[0];
  if (pair) return `${pair.question} — ${pair.answer}`;
  return topic.keyPoints[0] || topic.description.split(/(?<=[.!?])\s+/)[0] || topic.summary;
}

function generatePhonicsQuestions(topic: CurriculumTopic, match: RegExpMatchArray): Question[] {
  const upper = match[1].toUpperCase();
  const lower = match[2].toLowerCase();
  const words = match[3].split(',').map((word) => word.trim()).filter(Boolean);
  const sound = topic.keyPoints[0].match(/\/[^/]+\//)?.[0] ?? `the ${upper} sound`;
  const sentence = topic.description
    .slice(match[0].length)
    .split(/(?<=[.!?])\s+/)
    .map((item) => item.trim())
    .find(Boolean) ?? topic.keyPoints[1];
  const pair = words.slice(0, 2).join(' and ');
  const letterDistractors = ['A/a', 'B/b', 'M/m', 'S/s', 'T/t', 'P/p']
    .filter((letter) => letter.toLowerCase() !== `${upper}/${lower}`.toLowerCase())
    .slice(0, 2);
  const wordDistractors = ['table', 'rain', 'book', 'dog', 'sun']
    .filter((word) => !words.some((lessonWord) => lessonWord.toLowerCase() === word))
    .slice(0, 2);
  const soundDistractors = ['/b/', '/k/', '/s/', '/t/', '/m/']
    .filter((candidate) => candidate !== sound)
    .slice(0, 2)
    .map((candidate) => `Letter ${upper} makes the ${candidate} sound.`);

  return [
    bubble(topic, 'q1', 'Which letter are we practising in this unit?', `${upper}/${lower}`, letterDistractors, `Look at Letter ${upper}/${lower}.`),
    bubble(topic, 'q2', `Which word is practised with Letter ${upper}/${lower}?`, words[0], wordDistractors, `Say ${words[0]} slowly.`),
    bubble(topic, 'q3', `Which pair includes “${words[0]}” and another word from this unit?`, pair, [`${words[0]} and table`, `${words[0]} and zoo`], `The vocabulary list includes ${pair}.`),
    bubble(topic, 'q4', 'Which sentence do we practise in this unit?', sentence, ['This is a blue pencil.', 'I go to school by bus.'], `Read the model sentence: ${sentence}`),
    bubble(topic, 'q5', `Which statement correctly describes ${sound} in this unit?`, topic.keyPoints[0], soundDistractors, topic.summary),
  ];
}

function generateGeneralQuestions(topic: CurriculumTopic, grade: GradeLevel): Question[] {
  const combined = `${topic.description} ${topic.keyPoints.join(' ')}`;
  const pairs = extractQuestionAnswerPairs(combined);
  const focus = topic.title.replace(/^Unit\s+\d+\s*:\s*/i, '');
  const sentence = firstUsefulSentence(topic);
  const firstPoint = topic.keyPoints[0] || sentence;
  const secondPoint = topic.keyPoints[1] || topic.summary;
  const firstPair = pairs[0];
  const secondPair = pairs[1];

  return [
    firstPair
      ? bubble(topic, 'q1', firstPair.question, firstPair.answer, GENERAL_DISTRACTORS, `Model answer: ${firstPair.answer}`)
      : bubble(topic, 'q1', `Which expression is useful when talking about “${focus}”?`, firstPoint, GENERAL_DISTRACTORS, firstPoint),
    secondPair
      ? bubble(topic, 'q2', secondPair.question, secondPair.answer, GENERAL_DISTRACTORS.slice(1), `Model answer: ${secondPair.answer}`)
      : bubble(topic, 'q2', `Which sentence is another target for Unit ${topic.lessonNumber}?`, secondPoint, GENERAL_DISTRACTORS.slice(1), secondPoint),
    bubble(topic, 'q3', `Choose the model sentence for “${focus}”.`, sentence, GENERAL_DISTRACTORS.slice(2), sentence),
    bubble(topic, 'q4', `Which language point should a Grade ${grade} learner practise here?`, firstPoint, GENERAL_DISTRACTORS.slice(0, 3), topic.summary),
    bubble(topic, 'q5', `Which sentence can you use after practising “${focus}”?`, secondPoint, GENERAL_DISTRACTORS.slice(2), secondPoint),
  ];
}

export function generateEnglishQuestions(topic: CurriculumTopic, grade: GradeLevel): Question[] {
  const phonics = topic.description.match(/^Letter\s+([A-Z])\/([a-z]):\s*([^.]+)\./i);
  return phonics ? generatePhonicsQuestions(topic, phonics) : generateGeneralQuestions(topic, grade);
}
