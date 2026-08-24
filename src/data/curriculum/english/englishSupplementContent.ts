import { CurriculumTopic } from '../types.ts';
import { ENGLISH_GRADE_1_TOPICS as LEGACY_GRADE_1_TOPICS } from './grade1.ts';
import { ENGLISH_GRADE_2_TOPICS as LEGACY_GRADE_2_TOPICS } from './grade2.ts';
import { ENGLISH_GRADE_3_TOPICS as LEGACY_GRADE_3_TOPICS } from './grade3.ts';
import { ENGLISH_GRADE_4_TOPICS as LEGACY_GRADE_4_TOPICS } from './grade4.ts';
import { ENGLISH_GRADE_5_TOPICS as LEGACY_GRADE_5_TOPICS } from './grade5.ts';

export type EnglishSupplementContent = Pick<
  CurriculumTopic,
  'description' | 'summary' | 'keyPoints' | 'mascotTip'
>;

const legacyById = new Map(
  [
    ...LEGACY_GRADE_1_TOPICS,
    ...LEGACY_GRADE_2_TOPICS,
    ...LEGACY_GRADE_3_TOPICS,
    ...LEGACY_GRADE_4_TOPICS,
    ...LEGACY_GRADE_5_TOPICS,
  ].map((topic) => [topic.id, topic]),
);

// Các Unit dưới đây đã đổi chủ đề hoặc thứ tự so với bộ dữ liệu luyện cũ.
// Nội dung thay thế là bài luyện WonderKids, chỉ tham chiếu tên Unit chính thức.
const correctedContent: Record<string, EnglishSupplementContent> = {
  'eng-g1-u12': {
    description: 'Vocabulary: lake, boat, duck, fish. Look at the blue lake. I can see a duck and a small boat.',
    summary: 'Practise naming things at a lake and using “I can see ...” in a short sentence.',
    keyPoints: ['I can see a duck on the lake.', 'Look at the small boat.'],
    mascotTip: 'PiPi: Point, say and listen to the words about the lake.',
  },
  'eng-g1-u14': {
    description: 'Vocabulary: ball, car, doll, kite. I want a red ball, please. Here you are. Thank you.',
    summary: 'Practise toy words and a short, polite exchange in a toy shop.',
    keyPoints: ['I want a red ball, please.', 'Here you are. Thank you.'],
    mascotTip: 'PiPi: Choose a toy and ask for it politely.',
  },
  'eng-g1-u15': {
    description: 'Vocabulary: football, player, team, goal. Look at the players. I like football. What a great goal!',
    summary: 'Practise words and short sentences used at a football match.',
    keyPoints: ['I like football.', 'Look at the players.'],
    mascotTip: 'PiPi: Cheer for the team and say the football words clearly.',
  },
  'eng-g1-u16': {
    description: 'Vocabulary: home, family, room, door. This is my home. My family is at home. Open the door, please.',
    summary: 'Practise simple words and sentences about home and family.',
    keyPoints: ['This is my home.', 'My family is at home.'],
    mascotTip: 'PiPi: Point to a room or family member and say a short sentence.',
  },
  'eng-g2-u14': {
    description: 'Vocabulary: living room, bedroom, kitchen, bathroom. Where is Mum? She is in the kitchen.',
    summary: 'Practise rooms in a home and ask where a family member is.',
    keyPoints: ['Where is Mum? — She is in the kitchen.', 'This is my bedroom.'],
    mascotTip: 'PiPi: Look around your home and name each room.',
  },
  'eng-g2-u16': {
    description: 'Vocabulary: tent, campfire, backpack, tree. This is our tent. We have a backpack. Let’s go camping!',
    summary: 'Practise campsite words and short sentences about things we have.',
    keyPoints: ['This is our tent.', 'We have a backpack.'],
    mascotTip: 'PiPi: Pack your bag and name the things at the campsite.',
  },
  'eng-g3-u12': {
    description: 'Vocabulary: teacher, doctor, farmer, cook. What does your father do? — He is a doctor.',
    summary: 'Ask and answer about familiar jobs using “What does ... do?”.',
    keyPoints: ['What does your mother do? — She is a teacher.', 'A farmer works on a farm.'],
    mascotTip: 'PiPi: Match each job with the right workplace.',
  },
  'eng-g3-u13': {
    description: 'Vocabulary: living room, bedroom, kitchen, bathroom. This is my house. The kitchen is next to the living room.',
    summary: 'Name rooms and describe a simple location in a house.',
    keyPoints: ['This is my house.', 'Where is the kitchen? — It is next to the living room.'],
    mascotTip: 'PiPi: Draw your house and label the rooms in English.',
  },
  'eng-g4-u10': {
    description: 'Where did you go last summer? — I went to the beach. What did you do there? — I swam and played volleyball.',
    summary: 'Talk about a summer holiday using familiar past-tense questions and answers.',
    keyPoints: ['Where did you go? — I went to the beach.', 'I swam and played volleyball.'],
    mascotTip: 'PiPi: Tell a friend two things you did during your holiday.',
  },
  'eng-g5-u7': {
    description: 'What is your favourite school activity? — I like doing science experiments. Why do you like it? — Because it is exciting.',
    summary: 'Talk about favourite school activities and give a simple reason.',
    keyPoints: ['I like doing science experiments.', 'Because it is exciting.'],
    mascotTip: 'PiPi: Name your favourite activity and explain why you like it.',
  },
  'eng-g5-u8': {
    description: 'Please work in pairs. May I borrow your ruler? — Yes, you may. Remember to keep the classroom tidy.',
    summary: 'Practise polite classroom language, instructions and requests.',
    keyPoints: ['May I borrow your ruler? — Yes, you may.', 'Please work in pairs.'],
    mascotTip: 'PiPi: Use one polite English request with a classmate.',
  },
  'eng-g5-u9': {
    description: 'We play badminton, plant trees and clean the school garden. What are they doing? — They are planting trees.',
    summary: 'Describe outdoor school activities using the present continuous.',
    keyPoints: ['They are planting trees.', 'We play badminton after school.'],
    mascotTip: 'PiPi: Act out an outdoor activity and let a friend name it.',
  },
  'eng-g5-u12': {
    description: 'Before Tet, we clean and decorate our home. At Tet, we visit our grandparents and receive lucky money.',
    summary: 'Talk about familiar Tet preparations and family activities.',
    keyPoints: ['We decorate our home before Tet.', 'We visit our grandparents at Tet.'],
    mascotTip: 'PiPi: Put the Tet activities in the order your family does them.',
  },
  'eng-g5-u13': {
    description: 'When is Teachers’ Day? — It is on the twentieth of November. We give cards and flowers to our teachers.',
    summary: 'Ask about dates and describe activities on special days.',
    keyPoints: ['When is Teachers’ Day?', 'We give cards and flowers to our teachers.'],
    mascotTip: 'PiPi: Say the date of a special day that you remember.',
  },
  'eng-g5-u14': {
    description: 'To stay healthy, I eat vegetables, drink enough water and exercise every day. I do not stay up late.',
    summary: 'Give simple advice about healthy food, exercise, water and sleep.',
    keyPoints: ['You should exercise every day.', 'You should not stay up late.'],
    mascotTip: 'PiPi: Choose one healthy habit to practise today.',
  },
  'eng-g5-u15': {
    description: 'What is the matter with you? — I have a headache. You should rest and drink some water.',
    summary: 'Name common health problems and give suitable advice with “should”.',
    keyPoints: ['I have a headache.', 'You should rest and drink some water.'],
    mascotTip: 'PiPi: Match each health problem with safe, simple advice.',
  },
  'eng-g5-u17': {
    description: 'First, the little bird found a seed. Then, it planted the seed. In the end, a beautiful flower grew.',
    summary: 'Retell a short children’s story using sequencing words.',
    keyPoints: ['First — Then — Next — In the end', 'In the end, a beautiful flower grew.'],
    mascotTip: 'PiPi: Put four story events in the correct order.',
  },
  'eng-g5-u18': {
    description: 'How do you go to school? — I go by bus. We can travel by bike, train, coach, ship or plane.',
    summary: 'Name means of transport and ask how someone travels.',
    keyPoints: ['How do you go to school? — I go by bus.', 'We travelled there by train.'],
    mascotTip: 'PiPi: Choose the best transport for a short and a long journey.',
  },
  'eng-g5-u19': {
    description: 'Ha Long Bay is a beautiful place of interest in Viet Nam. What can visitors do there? — They can take a boat trip.',
    summary: 'Describe a place of interest and activities visitors can do there.',
    keyPoints: ['Ha Long Bay is in Viet Nam.', 'Visitors can take a boat trip.'],
    mascotTip: 'PiPi: Introduce one place you would like to visit.',
  },
};

export function getEnglishSupplementContent(topicId: string): EnglishSupplementContent {
  const source = correctedContent[topicId] ?? legacyById.get(topicId);
  if (!source) {
    throw new Error(`Missing English supplementary content for ${topicId}`);
  }
  return {
    description: source.description,
    summary: source.summary,
    keyPoints: [...source.keyPoints],
    mascotTip: source.mascotTip,
  };
}

export function getEnglishVocabularyNote(topic: CurriculumTopic): { word: string; meaning: string } {
  const labelledList = topic.description.match(/^(?:Vocabulary|Letter [^:]+|Name [^:]+|Action verbs):\s*([^.]+)/i)?.[1];
  if (labelledList) {
    return {
      word: labelledList.replace(/\s*,\s*/g, ' • '),
      meaning: topic.summary,
    };
  }

  return {
    word: topic.title.replace(/^Unit\s+\d+\s*:\s*/i, ''),
    meaning: topic.keyPoints[0] || topic.summary,
  };
}
