import type { GradeLevel } from '../../types/index.ts';
import type {
  PracticeDifficulty,
  PracticeItem,
  PracticeMatchingPair,
  PracticeOption,
  PracticePackManifest,
  PracticeSection,
  PracticeSet,
  PracticeSetLevel,
  PracticeSubject,
} from './types.ts';
import { practiceTopic } from './blueprints.ts';
import { validatePracticePackRelease } from './releaseGate.ts';

const SUBJECT_LABELS: Record<PracticeSubject, string> = {
  math: 'Toán',
  vietnamese: 'Tiếng Việt',
  english: 'Tiếng Anh',
  math_en: 'Toán bằng tiếng Anh',
};

const OFFICIAL_TOPIC_SOURCE = 'https://violympic.vn/news/category/19';
const APP_AUTHORED_SOURCE = 'WonderKids — Nội dung luyện tập tự biên soạn';

const VI_WORDS: Record<GradeLevel, Array<[string, string, string]>> = {
  1: [['bé', 'bée', 'béc'], ['nhà', 'nhàa', 'nhàh'], ['mẹ', 'mẹe', 'mẹq'], ['cá', 'cáa', 'cáz'], ['hoa', 'hoaa', 'hioa'], ['bút', 'bútt', 'búd']],
  2: [['chăm chỉ', 'chăm chĩ', 'châm chỉ'], ['sạch sẽ', 'sạch sẻ', 'sạch xẽ'], ['vui vẻ', 'vui vẽ', 'vui vẽn'], ['trường học', 'chường học', 'trườn học'], ['gia đình', 'da đình', 'gia đìn'], ['thân thiện', 'thâng thiện', 'thân thiệng']],
  3: [['đoàn kết', 'đoàng kết', 'đoàn kéc'], ['dũng cảm', 'dủng cảm', 'dũng cãm'], ['kiên trì', 'kiêng trì', 'kiên chì'], ['sáng tạo', 'sán tạo', 'sáng tảo'], ['trách nhiệm', 'chách nhiệm', 'trách nhiệng'], ['yêu thương', 'iêu thương', 'yêu thươn']],
  4: [['trung thực', 'chung thực', 'trung thựt'], ['khiêm tốn', 'khiêm tốm', 'khiêng tốn'], ['nhân ái', 'nhâng ái', 'nhân áy'], ['bền bỉ', 'bềng bỉ', 'bền bĩ'], ['khám phá', 'khám fá', 'khám phã'], ['cống hiến', 'cốn hiến', 'cống hiếnh']],
  5: [['bao dung', 'bao dun', 'bao dungg'], ['nghị lực', 'ngị lực', 'nghị lựt'], ['hợp tác', 'hợp ták', 'hợp tát'], ['tự hào', 'tự hảo', 'tự hàu'], ['truyền thống', 'chuyền thống', 'truyền thốn'], ['trách nhiệm', 'trách nhiệng', 'chách nhiệm']],
};

const VI_QUALITIES: Record<GradeLevel, string[]> = {
  1: ['chăm chỉ', 'ngoan ngoãn', 'lễ phép', 'thân thiện', 'vui vẻ', 'cẩn thận'],
  2: ['chăm chỉ', 'sạch sẽ', 'vui vẻ', 'thân thiện', 'ngăn nắp', 'lễ phép'],
  3: ['có tinh thần đoàn kết', 'dũng cảm', 'kiên trì', 'sáng tạo', 'có trách nhiệm', 'biết yêu thương mọi người'],
  4: ['trung thực', 'khiêm tốn', 'nhân ái', 'bền bỉ', 'ham khám phá', 'biết giúp đỡ cộng đồng'],
  5: ['bao dung', 'giàu nghị lực', 'biết hợp tác', 'tự hào', 'trân trọng truyền thống', 'có trách nhiệm'],
};

const VI_WORK_STYLES = ['chăm chỉ', 'cẩn thận', 'đoàn kết', 'hăng say', 'nhiệt tình', 'ngăn nắp'];

const VI_SYNONYM_PAIRS: PracticeMatchingPair[] = [
  { id: 'p1', left: 'chăm chỉ', right: 'siêng năng' },
  { id: 'p2', left: 'dũng cảm', right: 'gan dạ' },
  { id: 'p3', left: 'vui vẻ', right: 'hân hoan' },
  { id: 'p4', left: 'nhanh', right: 'mau' },
  { id: 'p5', left: 'bé nhỏ', right: 'nhỏ bé' },
  { id: 'p6', left: 'yêu mến', right: 'quý mến' },
  { id: 'p7', left: 'trung thực', right: 'thật thà' },
  { id: 'p8', left: 'kiên trì', right: 'bền chí' },
  { id: 'p9', left: 'đoàn kết', right: 'gắn bó' },
  { id: 'p10', left: 'cẩn thận', right: 'kĩ lưỡng' },
  { id: 'p11', left: 'bao dung', right: 'độ lượng' },
  { id: 'p12', left: 'sáng tạo', right: 'đổi mới' },
];

const VI_SYNONYM_PAIRS_BY_GRADE: Record<GradeLevel, PracticeMatchingPair[]> = {
  1: [
    { id: 'g1p1', left: 'bé nhỏ', right: 'nhỏ bé' }, { id: 'g1p2', left: 'nhanh', right: 'mau' },
    { id: 'g1p3', left: 'vui', right: 'mừng' }, { id: 'g1p4', left: 'chăm', right: 'siêng' },
    { id: 'g1p5', left: 'yêu', right: 'mến' }, { id: 'g1p6', left: 'to', right: 'lớn' },
    { id: 'g1p7', left: 'xinh', right: 'đẹp' }, { id: 'g1p8', left: 'bố', right: 'cha' },
    { id: 'g1p9', left: 'mẹ', right: 'má' }, { id: 'g1p10', left: 'lạnh', right: 'rét' },
    { id: 'g1p11', left: 'sáng', right: 'tỏ' }, { id: 'g1p12', left: 'bạn bè', right: 'bè bạn' },
  ],
  2: [
    { id: 'g2p1', left: 'chăm chỉ', right: 'siêng năng' }, { id: 'g2p2', left: 'vui vẻ', right: 'hân hoan' },
    { id: 'g2p3', left: 'dũng cảm', right: 'gan dạ' }, { id: 'g2p4', left: 'nhanh chóng', right: 'mau lẹ' },
    { id: 'g2p5', left: 'yêu mến', right: 'quý mến' }, { id: 'g2p6', left: 'hiền lành', right: 'hiền hậu' },
    { id: 'g2p7', left: 'to lớn', right: 'lớn lao' }, { id: 'g2p8', left: 'xinh đẹp', right: 'đẹp xinh' },
    { id: 'g2p9', left: 'cẩn thận', right: 'kĩ càng' }, { id: 'g2p10', left: 'đoàn kết', right: 'gắn bó' },
    { id: 'g2p11', left: 'thật thà', right: 'trung thực' }, { id: 'g2p12', left: 'giúp đỡ', right: 'hỗ trợ' },
  ],
  3: VI_SYNONYM_PAIRS,
  4: VI_SYNONYM_PAIRS,
  5: VI_SYNONYM_PAIRS,
};

const EN_WORDS: Record<GradeLevel, Array<[string, string, string]>> = {
  1: [['cat', 'dog', 'fish'], ['red', 'blue', 'green'], ['book', 'pen', 'bag'], ['one', 'two', 'three'], ['mum', 'dad', 'sister'], ['sun', 'moon', 'star']],
  2: [['classroom', 'kitchen', 'garden'], ['happy', 'sad', 'tired'], ['Monday', 'Tuesday', 'Friday'], ['football', 'chess', 'music'], ['teacher', 'doctor', 'farmer'], ['breakfast', 'lunch', 'dinner']],
  3: [['library', 'playground', 'computer room'], ['cycling', 'drawing', 'swimming'], ['sunny', 'rainy', 'cloudy'], ['village', 'city', 'island'], ['morning', 'afternoon', 'evening'], ['friendly', 'helpful', 'careful']],
  4: [['museum', 'cinema', 'supermarket'], ['yesterday', 'today', 'tomorrow'], ['elephant', 'giraffe', 'crocodile'], ['usually', 'sometimes', 'never'], ['spring', 'summer', 'winter'], ['healthy', 'strong', 'active']],
  5: [['environment', 'community', 'technology'], ['adventure', 'journey', 'festival'], ['carefully', 'quietly', 'quickly'], ['because', 'although', 'therefore'], ['recycle', 'protect', 'volunteer'], ['interesting', 'important', 'wonderful']],
};

const EN_COUNTABLE_NOUNS: Record<GradeLevel, Array<[string, string, string]>> = {
  1: [['cat', 'dog', 'fish'], ['book', 'pen', 'bag'], ['apple', 'orange', 'banana']],
  2: [['classroom', 'kitchen', 'garden'], ['teacher', 'doctor', 'farmer'], ['kite', 'robot', 'doll']],
  3: [['library', 'playground', 'computer room'], ['village', 'city', 'island'], ['panda', 'parrot', 'rabbit']],
  4: [['museum', 'cinema', 'supermarket'], ['elephant', 'giraffe', 'crocodile'], ['festival', 'market', 'stadium']],
  5: [['community project', 'science club', 'school event'], ['adventure', 'journey', 'festival'], ['robot', 'tablet', 'computer']],
};

const EN_MATCHING_PAIRS_BY_GRADE: Record<GradeLevel, PracticeMatchingPair[]> = {
  1: [
    { id: 'g1p1', left: 'cat', right: 'an animal' }, { id: 'g1p2', left: 'red', right: 'a colour' },
    { id: 'g1p3', left: 'book', right: 'something we read' }, { id: 'g1p4', left: 'pen', right: 'something we write with' },
    { id: 'g1p5', left: 'bag', right: 'something we carry' }, { id: 'g1p6', left: 'mum', right: 'a parent' },
    { id: 'g1p7', left: 'sun', right: 'bright in the sky' }, { id: 'g1p8', left: 'fish', right: 'an animal in water' },
    { id: 'g1p9', left: 'blue', right: 'a colour' }, { id: 'g1p10', left: 'dog', right: 'an animal' },
    { id: 'g1p11', left: 'moon', right: 'seen in the night sky' }, { id: 'g1p12', left: 'star', right: 'a light in the night sky' },
  ],
  2: [
    { id: 'g2p1', left: 'teacher', right: 'helps pupils learn' }, { id: 'g2p2', left: 'doctor', right: 'helps sick people' },
    { id: 'g2p3', left: 'garden', right: 'a place for plants' }, { id: 'g2p4', left: 'kitchen', right: 'a place to cook' },
    { id: 'g2p5', left: 'breakfast', right: 'a morning meal' }, { id: 'g2p6', left: 'Monday', right: 'a day of the week' },
    { id: 'g2p7', left: 'happy', right: 'feeling good' }, { id: 'g2p8', left: 'tired', right: 'needing rest' },
    { id: 'g2p9', left: 'football', right: 'a ball game' }, { id: 'g2p10', left: 'farmer', right: 'works on a farm' },
    { id: 'g2p11', left: 'classroom', right: 'a room for lessons' }, { id: 'g2p12', left: 'dinner', right: 'an evening meal' },
  ],
  3: [
    { id: 'g3p1', left: 'library', right: 'a place with many books' }, { id: 'g3p2', left: 'sunny', right: 'with bright sunshine' },
    { id: 'g3p3', left: 'village', right: 'a small place to live' }, { id: 'g3p4', left: 'island', right: 'land surrounded by water' },
    { id: 'g3p5', left: 'cycling', right: 'riding a bicycle' }, { id: 'g3p6', left: 'helpful', right: 'ready to help' },
    { id: 'g3p7', left: 'playground', right: 'a place to play' }, { id: 'g3p8', left: 'cloudy', right: 'with many clouds' },
    { id: 'g3p9', left: 'evening', right: 'the end of the day' }, { id: 'g3p10', left: 'friendly', right: 'kind and pleasant' },
    { id: 'g3p11', left: 'swimming', right: 'moving through water' }, { id: 'g3p12', left: 'city', right: 'a large town' },
  ],
  4: [
    { id: 'g4p1', left: 'museum', right: 'a place with old objects' }, { id: 'g4p2', left: 'cinema', right: 'a place to watch films' },
    { id: 'g4p3', left: 'yesterday', right: 'the day before today' }, { id: 'g4p4', left: 'tomorrow', right: 'the day after today' },
    { id: 'g4p5', left: 'elephant', right: 'a very large animal' }, { id: 'g4p6', left: 'usually', right: 'on most days' },
    { id: 'g4p7', left: 'never', right: 'not at any time' }, { id: 'g4p8', left: 'spring', right: 'a season of the year' },
    { id: 'g4p9', left: 'healthy', right: 'well and strong' }, { id: 'g4p10', left: 'active', right: 'doing many things' },
    { id: 'g4p11', left: 'supermarket', right: 'a large shop' }, { id: 'g4p12', left: 'giraffe', right: 'a tall animal' },
  ],
  5: [
    { id: 'g5p1', left: 'community', right: 'people living in one area' }, { id: 'g5p2', left: 'technology', right: 'tools made using science' },
    { id: 'g5p3', left: 'journey', right: 'a trip from one place to another' }, { id: 'g5p4', left: 'recycle', right: 'use waste materials again' },
    { id: 'g5p5', left: 'festival', right: 'a special celebration' }, { id: 'g5p6', left: 'protect', right: 'keep something safe' },
    { id: 'g5p7', left: 'volunteer', right: 'work freely to help others' }, { id: 'g5p8', left: 'environment', right: 'the natural world around us' },
    { id: 'g5p9', left: 'adventure', right: 'an exciting experience' }, { id: 'g5p10', left: 'carefully', right: 'with great attention' },
    { id: 'g5p11', left: 'important', right: 'having great value' }, { id: 'g5p12', left: 'quietly', right: 'with little noise' },
  ],
};

const NAMES = ['An', 'Bình', 'Chi', 'Dũng', 'Hà', 'Lan', 'Minh', 'Ngọc', 'Phúc', 'Quân', 'Thảo', 'Vy'];
const OBJECTS = ['quyển vở', 'bông hoa', 'viên bi', 'nhãn vở', 'quả cam', 'chiếc bút'];
const VI_REVIEW_TOPICS = ['khởi động', 'trường em', 'gia đình', 'thiên nhiên', 'bạn bè', 'ngày hội', 'khám phá', 'chăm học', 'tăng tốc', 'về đích', 'thi thử xanh', 'thi thử vàng'];
const EN_REVIEW_TOPICS = ['warm-up', 'school', 'family', 'nature', 'friends', 'festival', 'discovery', 'study time', 'speed-up', 'finish line', 'green mock test', 'gold mock test'];

function stableHash(value: string): string {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return `app-${(hash >>> 0).toString(16).padStart(8, '0')}`;
}

function itemDifficulty(setNumber: number, globalItemIndex: number): PracticeDifficulty {
  const position = globalItemIndex + 1;
  if (setNumber <= 4) return position <= 21 ? 'basic' : position <= 29 ? 'application' : 'challenge';
  if (setNumber <= 8) return position <= 15 ? 'basic' : position <= 26 ? 'application' : 'challenge';
  return position <= 9 ? 'basic' : position <= 23 ? 'application' : 'challenge';
}

function setLevel(setNumber: number): PracticeSetLevel {
  if (setNumber <= 4) return 'foundation';
  if (setNumber <= 8) return 'acceleration';
  if (setNumber <= 10) return 'advanced';
  return 'mock_exam';
}

function setTitle(setNumber: number): string {
  if (setNumber <= 4) return `Đề ${setNumber}: Củng cố nền tảng`;
  if (setNumber <= 8) return `Đề ${setNumber}: Tăng tốc vận dụng`;
  if (setNumber <= 10) return `Đề ${setNumber}: Chinh phục nâng cao`;
  return `Đề ${setNumber}: Thi thử tổng hợp 30 phút`;
}

function optionOffset(id: string, length: number): number {
  return Number.parseInt(stableHash(id).slice(-4), 16) % length;
}

function choiceOptions(id: string, labels: string[], correctLabel: string): { options: PracticeOption[]; correctAnswer: string } {
  const offset = optionOffset(id, labels.length);
  const rotated = labels.slice(offset).concat(labels.slice(0, offset));
  const options = rotated.map((label, index) => ({ id: String.fromCharCode(97 + index), label }));
  return { options, correctAnswer: options.find((option) => option.label === correctLabel)?.id || 'a' };
}

function optionsForNumber(id: string, answer: number, seed: number): PracticeOption[] {
  const values = [answer, answer + 1 + (seed % 3), Math.max(0, answer - 1 - (seed % 2)), answer + 3 + (seed % 4)];
  const unique = [...new Set(values)];
  while (unique.length < 4) unique.push(answer + unique.length + 4);
  const labels = unique.slice(0, 4).map(String);
  return choiceOptions(id, labels, String(answer)).options;
}

function generatedItemPassesReleaseGate(item: Omit<PracticeItem, 'verificationStatus'>): boolean {
  const answerPresent = Array.isArray(item.correctAnswer)
    ? item.correctAnswer.length > 0 && item.correctAnswer.every((answer) => answer.trim().length > 0)
    : item.correctAnswer.trim().length > 0;
  if (!answerPresent || item.prompt.trim().length < 5 || item.explanation.trim().length < 8) return false;
  if (/undefined|\bNaN\b|null|•\s*(?:Nhận biết|Vận dụng|Quan sát)/iu.test(`${item.prompt} ${item.explanation}`)) return false;
  if (item.options && new Set(item.options.map((option) => option.label.toLocaleLowerCase('vi'))).size !== item.options.length) return false;
  if (item.type === 'single_choice' && item.options?.filter((option) => option.id === item.correctAnswer).length !== 1) return false;
  if (item.type === 'ordering' && (!Array.isArray(item.correctAnswer) || item.correctAnswer.length !== item.options?.length)) return false;
  if (item.type === 'matching' && (!Array.isArray(item.correctAnswer) || item.correctAnswer.length !== item.matchingPairs?.length)) return false;
  return true;
}

function makeItem(
  id: string,
  input: Omit<PracticeItem, 'id' | 'points' | 'contentOrigin' | 'verificationStatus' | 'sourceLabel' | 'sourceHash'>,
): PracticeItem {
  const prompt = input.prompt;
  const candidate: Omit<PracticeItem, 'verificationStatus'> = {
    id,
    ...input,
    prompt,
    points: 10,
    contentOrigin: 'system_generated',
    sourceLabel: APP_AUTHORED_SOURCE,
    sourceHash: stableHash(`${id}|${prompt}|${JSON.stringify(input.correctAnswer)}`),
  };
  return {
    ...candidate,
    verificationStatus: generatedItemPassesReleaseGate(candidate) ? 'verified' : 'draft',
  };
}

function mathItem(id: string, grade: GradeLevel, setNumber: number, sectionIndex: number, itemIndex: number, english: boolean): PracticeItem {
  const seed = grade * 10_000 + setNumber * 300 + sectionIndex * 100 + itemIndex * 7;
  const hashedSeed = Number.parseInt(stableHash(id).slice(-8), 16);
  const family = (sectionIndex * 10 + itemIndex) % 10;
  const maxBase = [0, 100, 1_000, 100_000, 1_000_000, 1_000_000][grade];
  const a = 2 + (hashedSeed % Math.max(8, Math.floor(maxBase * 0.55)));
  const b = 1 + (Math.floor(hashedSeed / 97) % Math.max(6, Math.floor(maxBase * 0.3)));
  const difficulty = itemDifficulty(setNumber, sectionIndex * 10 + itemIndex);

  if (family === 0) {
    const answer = a + b;
    const options = optionsForNumber(id, answer, seed);
    const viPrompts = [`Tính ${a} + ${b}.`, `Tìm kết quả của phép tính ${a} + ${b}.`, `Chọn kết quả đúng của ${a} + ${b}.`];
    const enPrompts = [`What is ${a} + ${b}?`, `Find the result of ${a} + ${b}.`, `Choose the correct result of ${a} + ${b}.`];
    return makeItem(id, {
      type: 'single_choice',
      prompt: english ? enPrompts[sectionIndex] : viPrompts[sectionIndex],
      options,
      correctAnswer: options.find((option) => option.label === String(answer))?.id || 'a',
      explanation: english ? `${a} plus ${b} equals ${answer}.` : `Cộng ${a} với ${b} được ${answer}.`,
      topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
      difficulty,
    });
  }

  if (family === 1) {
    const larger = a + b;
    const answer = larger - b;
    const viPrompts = [`Điền số thích hợp: ${larger} − ${b} = ___.`, `Hoàn thành phép tính ${larger} − ${b} = ___.`, `Tìm số còn thiếu trong ${larger} − ${b} = ___.`];
    const enPrompts = [`Complete ${larger} − ${b} = ___.`, `Fill in the missing number: ${larger} − ${b} = ___.`, `Find the missing number in ${larger} − ${b} = ___.`];
    return makeItem(id, {
      type: 'short_answer',
      prompt: english ? enPrompts[sectionIndex] : viPrompts[sectionIndex],
      correctAnswer: String(answer),
      explanation: english ? `${larger} minus ${b} equals ${answer}.` : `Lấy ${larger} trừ ${b} được ${answer}.`,
      topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
      difficulty,
    });
  }

  if (family === 2 && grade >= 2) {
    const factor = 2 + (hashedSeed % Math.min(8, grade + 3));
    const multiplier = 2 + (Math.floor(hashedSeed / 89) % 9);
    if (sectionIndex === 1) {
      const dividend = factor * multiplier;
      return makeItem(id, {
        type: 'short_answer',
        prompt: english ? `Calculate ${dividend} ÷ ${factor}.` : `Tính ${dividend} : ${factor}.`,
        correctAnswer: String(multiplier),
        explanation: english ? `Because ${factor} × ${multiplier} = ${dividend}, ${dividend} ÷ ${factor} = ${multiplier}.` : `Vì ${factor} × ${multiplier} = ${dividend} nên ${dividend} : ${factor} = ${multiplier}.`,
        topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
        difficulty,
      });
    }
    const answer = factor * multiplier;
    const options = optionsForNumber(id, answer, seed);
    return makeItem(id, {
      type: 'single_choice',
      prompt: english
        ? `${NAMES[hashedSeed % NAMES.length]} arranges ${multiplier} groups of ${factor} counters. Choose the product of ${factor} and ${multiplier}.`
        : `${NAMES[hashedSeed % NAMES.length]} xếp ${multiplier} nhóm, mỗi nhóm ${factor} thẻ. Chọn tích của ${factor} và ${multiplier}.`,
      options,
      correctAnswer: options.find((option) => option.label === String(answer))?.id || 'a',
      explanation: english ? `${factor} × ${multiplier} = ${answer}.` : `${factor} × ${multiplier} = ${answer}.`,
      topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
      difficulty,
    });
  }

  if (family === 2) {
    const start = (hashedSeed % Math.max(20, maxBase - 8)) + 1;
    const step = (b % 3) + 1;
    const answer = start + step * 2;
    return makeItem(id, {
      type: 'short_answer',
      prompt: english
        ? [`Complete the pattern: ${start}, ${start + step}, ___.`, `Continue the number pattern: ${start}, ${start + step}, ___.`, `Find the missing number: ${start}, ${start + step}, ___.`][sectionIndex]
        : [`Điền số còn thiếu trong quy luật: ${start}, ${start + step}, ___.`, `Viết tiếp dãy số: ${start}, ${start + step}, ___.`, `Tìm số còn thiếu: ${start}, ${start + step}, ___.`][sectionIndex],
      correctAnswer: String(answer),
      explanation: english
        ? `The numbers increase by ${step}, so the missing number is ${answer}.`
        : `Mỗi số tăng thêm ${step}, nên số còn thiếu là ${answer}.`,
      topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
      difficulty,
    });
  }

  if (family === 3) {
    const values = [a + 2 + b, a, a + 1, a + 4 + b];
    const ordered = [...values].sort((left, right) => left - right).map(String);
    return makeItem(id, {
      type: 'ordering',
      prompt: english
        ? [`Put ${values.join(', ')} in ascending order.`, `Order ${values.join(', ')} from smallest to greatest.`, `Arrange ${values.join(', ')} in increasing order.`][sectionIndex]
        : [`Sắp xếp các số ${values.join(', ')} theo thứ tự tăng dần.`, `Xếp các số ${values.join(', ')} từ bé đến lớn.`, `Viết các số ${values.join(', ')} theo thứ tự tăng dần.`][sectionIndex],
      options: values.map((value, index) => ({ id: `${index}`, label: String(value) })),
      correctAnswer: ordered,
      explanation: english ? `From smallest to greatest: ${ordered.join(', ')}.` : `Từ bé đến lớn: ${ordered.join(', ')}.`,
      topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
      difficulty,
    });
  }

  if (family === 4) {
    const name = NAMES[hashedSeed % NAMES.length];
    const object = OBJECTS[Math.floor(hashedSeed / 61) % OBJECTS.length];
    const first = Math.max(2, (a % 30) + grade);
    const added = Math.max(1, (b % 12) + 1);
    const answer = first + added;
    const viQuestions = [
      `${name} có ${first} ${object}, được tặng thêm ${added} ${object}. Hỏi ${name} có tất cả bao nhiêu ${object}?`,
      `${name} có ${first} ${object} rồi nhận thêm ${added} ${object}. Số ${object} của ${name} lúc này là bao nhiêu?`,
      `Ban đầu ${name} có ${first} ${object}; sau đó được tặng ${added} ${object}. Tính tổng số ${object} của ${name}.`,
    ];
    const enQuestions = [
      `${name} has ${first} stickers and gets ${added} more. How many stickers does ${name} have now?`,
      `${name} has ${first} stickers, then receives ${added} more. How many stickers are there altogether?`,
      `${name} starts with ${first} stickers and is given ${added} more. Find the total number of stickers.`,
    ];
    return makeItem(id, {
      type: 'short_answer',
      prompt: english ? enQuestions[sectionIndex] : viQuestions[sectionIndex],
      correctAnswer: String(answer),
      explanation: english ? `Add the two amounts: ${first} + ${added} = ${answer}.` : `Ta tính ${first} + ${added} = ${answer}.`,
      topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
      difficulty,
    });
  }

  if (family === 6) {
    if (grade <= 2) {
      const startHour = 6 + (hashedSeed % 6);
      const durationHours = 1 + (Math.floor(hashedSeed / 43) % 3);
      const endHour = startHour + durationHours;
      return makeItem(id, {
        type: 'short_answer',
        prompt: english
          ? [
            `A lesson starts at ${startHour}:00 and lasts ${durationHours} hour${durationHours > 1 ? 's' : ''}. At what time does it end?`,
            `An activity begins at ${startHour}:00 and lasts ${durationHours} hour${durationHours > 1 ? 's' : ''}. Find its ending time.`,
            `School work starts at ${startHour}:00 and lasts ${durationHours} hour${durationHours > 1 ? 's' : ''}. When does it finish?`,
          ][sectionIndex]
          : [
            `Một buổi học bắt đầu lúc ${startHour} giờ và kéo dài ${durationHours} giờ. Buổi học kết thúc lúc mấy giờ?`,
            `Hoạt động bắt đầu lúc ${startHour} giờ và kéo dài ${durationHours} giờ. Hãy tìm giờ kết thúc.`,
            `Giờ học bắt đầu lúc ${startHour} giờ và kéo dài ${durationHours} giờ. Giờ học kết thúc khi nào?`,
          ][sectionIndex],
        correctAnswer: english ? `${endHour}:00` : `${endHour} giờ`,
        explanation: english ? `${startHour}:00 + ${durationHours} hour${durationHours > 1 ? 's' : ''} = ${endHour}:00.` : `${startHour} giờ + ${durationHours} giờ = ${endHour} giờ.`,
        topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
        difficulty,
      });
    }
    if (grade === 5) {
      const speed = 30 + (hashedSeed % 41);
      const hours = 2 + (Math.floor(hashedSeed / 47) % 4);
      const distance = speed * hours;
      return makeItem(id, {
        type: 'short_answer',
        prompt: english
          ? `A vehicle travels at ${speed} km/h for ${hours} hours. How far does it travel?`
          : `Một xe đi với vận tốc ${speed} km/giờ trong ${hours} giờ. Xe đi được bao nhiêu ki-lô-mét?`,
        correctAnswer: String(distance),
        explanation: english ? `Distance = ${speed} × ${hours} = ${distance} km.` : `Quãng đường là ${speed} × ${hours} = ${distance} km.`,
        topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
        difficulty,
      });
    }
    const startHour = 7 + (hashedSeed % 4);
    const minutes = [15, 20, 30, 45][Math.floor(hashedSeed / 53) % 4];
    return makeItem(id, {
      type: 'short_answer',
      prompt: english
        ? `An activity starts at ${startHour}:00 and ends at ${startHour}:${String(minutes).padStart(2, '0')}. How many minutes does it last?`
        : `Một hoạt động bắt đầu lúc ${startHour} giờ và kết thúc lúc ${startHour} giờ ${minutes} phút. Hoạt động kéo dài bao nhiêu phút?`,
      correctAnswer: String(minutes),
      explanation: english ? `It lasts ${minutes} minutes.` : `Hoạt động kéo dài ${minutes} phút.`,
      topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
      difficulty,
    });
  }

  if (family === 7) {
    if (grade === 5) {
      const total = 100 + (hashedSeed % 9) * 100;
      const percent = [10, 20, 25, 50][Math.floor(hashedSeed / 59) % 4];
      const part = (total * percent) / 100;
      return makeItem(id, {
        type: 'short_answer',
        prompt: english
          ? [
            `${part} out of ${total} pupils join a club. What percentage of the pupils join?`,
            `A club has ${part} participants from a group of ${total} pupils. Find the participation percentage.`,
            `Of ${total} pupils, ${part} take part in an activity. What percent take part?`,
          ][sectionIndex]
          : [
            `Có ${part} trong tổng số ${total} học sinh tham gia câu lạc bộ. Tỉ lệ học sinh tham gia là bao nhiêu phần trăm?`,
            `Một nhóm có ${total} học sinh, trong đó ${part} bạn tham gia câu lạc bộ. Hãy tìm tỉ lệ phần trăm số bạn tham gia.`,
            `Trong ${total} học sinh có ${part} bạn tham gia hoạt động. Bao nhiêu phần trăm học sinh đã tham gia?`,
          ][sectionIndex],
        correctAnswer: `${percent}%`,
        explanation: english ? `${part} ÷ ${total} × 100% = ${percent}%.` : `${part} : ${total} × 100% = ${percent}%.`,
        topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
        difficulty,
      });
    }
    const first = 2 + (hashedSeed % 12);
    const second = 1 + (Math.floor(hashedSeed / 61) % 10);
    const third = 1 + (Math.floor(hashedSeed / 97) % 9);
    const total = first + second + third;
    return makeItem(id, {
      type: 'short_answer',
      prompt: english
        ? `A class chart shows ${first} red cards, ${second} blue cards and ${third} green cards. How many cards are shown altogether?`
        : `Bảng thống kê có ${first} thẻ đỏ, ${second} thẻ xanh và ${third} thẻ vàng. Có tất cả bao nhiêu thẻ?`,
      correctAnswer: String(total),
      explanation: `${first} + ${second} + ${third} = ${total}.`,
      topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
      difficulty,
    });
  }

  if (family === 8) {
    if (grade <= 2) {
      const left = 1 + (hashedSeed % (grade === 1 ? 99 : 999));
      const right = 1 + (Math.floor(hashedSeed / 71) % (grade === 1 ? 99 : 999));
      const sign = left === right ? '=' : left > right ? '>' : '<';
      const choice = choiceOptions(id, ['>', '<', '='], sign);
      return makeItem(id, {
        type: 'single_choice',
        prompt: english ? `Choose the correct sign: ${left} ___ ${right}.` : `Chọn dấu thích hợp: ${left} ___ ${right}.`,
        options: choice.options,
        correctAnswer: choice.correctAnswer,
        explanation: english ? `The correct comparison is ${left} ${sign} ${right}.` : `So sánh hai số, ta có ${left} ${sign} ${right}.`,
        topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
        difficulty,
      });
    }
    if (grade === 3) {
      const denominator = 2 + (hashedSeed % 8);
      const unitFraction = `1/${denominator}`;
      const labels = [unitFraction, `2/${denominator}`, `1/${denominator + 1}`];
      const choice = choiceOptions(id, labels, unitFraction);
      return makeItem(id, {
        type: 'single_choice',
        prompt: english ? `Which unit fraction represents one of ${denominator} equal parts?` : `Phân số đơn vị nào biểu thị một trong ${denominator} phần bằng nhau?`,
        options: choice.options,
        correctAnswer: choice.correctAnswer,
        explanation: english ? `One of ${denominator} equal parts is written as ${unitFraction}.` : `Một trong ${denominator} phần bằng nhau được viết là ${unitFraction}.`,
        topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
        difficulty,
      });
    }
    if (grade === 4) {
      const denominator = 2 + (hashedSeed % 8);
      const numerator = 1 + (Math.floor(hashedSeed / 79) % (denominator - 1));
      const factor = 2 + (Math.floor(hashedSeed / 101) % 3);
      const equivalent = `${numerator * factor}/${denominator * factor}`;
      const labels = [equivalent, `${numerator * factor + 1}/${denominator * factor}`, `${numerator * factor + 2}/${denominator * factor}`];
      const choice = choiceOptions(id, labels, equivalent);
      return makeItem(id, {
        type: 'single_choice',
        prompt: english ? `Which fraction is equivalent to ${numerator}/${denominator}?` : `Phân số nào bằng ${numerator}/${denominator}?`,
        options: choice.options,
        correctAnswer: choice.correctAnswer,
        explanation: english ? `Multiply both terms by ${factor}: ${numerator}/${denominator} = ${equivalent}.` : `Nhân cả tử số và mẫu số với ${factor}: ${numerator}/${denominator} = ${equivalent}.`,
        topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
        difficulty,
      });
    }
    if (sectionIndex === 1) {
      const denominator = 3 + (hashedSeed % 8);
      const firstNumerator = 1 + (Math.floor(hashedSeed / 73) % Math.max(1, denominator - 2));
      const secondNumerator = 1;
      const sumNumerator = firstNumerator + secondNumerator;
      const answer = `${sumNumerator}/${denominator}`;
      const labels = [answer, `${sumNumerator + 1}/${denominator}`, `${sumNumerator}/${denominator + 1}`];
      const choice = choiceOptions(id, labels, answer);
      return makeItem(id, {
        type: 'single_choice',
        prompt: english ? `Calculate ${firstNumerator}/${denominator} + ${secondNumerator}/${denominator}.` : `Tính ${firstNumerator}/${denominator} + ${secondNumerator}/${denominator}.`,
        options: choice.options,
        correctAnswer: choice.correctAnswer,
        explanation: english ? `Add the numerators: ${firstNumerator} + ${secondNumerator} = ${sumNumerator}, so the sum is ${answer}.` : `Cộng hai tử số: ${firstNumerator} + ${secondNumerator} = ${sumNumerator}, nên tổng là ${answer}.`,
        topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
        difficulty,
      });
    }
    const leftTenths = 10 + (hashedSeed % 80);
    const rightTenths = 1 + (Math.floor(hashedSeed / 83) % 9);
    const sumTenths = leftTenths + rightTenths;
    const decimal = (value: number) => (value / 10).toFixed(1);
    return makeItem(id, {
      type: 'short_answer',
      prompt: english ? `Calculate ${decimal(leftTenths)} + ${decimal(rightTenths)}.` : `Tính ${decimal(leftTenths).replace('.', ',')} + ${decimal(rightTenths).replace('.', ',')}.`,
      correctAnswer: english ? decimal(sumTenths) : decimal(sumTenths).replace('.', ','),
      explanation: english ? `${decimal(leftTenths)} + ${decimal(rightTenths)} = ${decimal(sumTenths)}.` : `${decimal(leftTenths).replace('.', ',')} + ${decimal(rightTenths).replace('.', ',')} = ${decimal(sumTenths).replace('.', ',')}.`,
      topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
      difficulty,
    });
  }

  if (family === 9) {
    if (grade === 1) {
      const sides = [3, 4, 0][hashedSeed % 3];
      const shape = sides === 3 ? (english ? 'triangle' : 'hình tam giác') : sides === 4 ? (english ? 'square' : 'hình vuông') : (english ? 'circle' : 'hình tròn');
      const choice = choiceOptions(id, ['0', '3', '4'], String(sides));
      return makeItem(id, {
        type: 'single_choice',
        prompt: english
          ? [
            `How many straight sides does a ${shape} have?`,
            `Count the straight sides of a ${shape}.`,
            `Choose the number of straight sides in a ${shape}.`,
          ][sectionIndex]
          : [
            `${shape[0].toLocaleUpperCase('vi')}${shape.slice(1)} có bao nhiêu cạnh thẳng?`,
            `Đếm số cạnh thẳng của ${shape}.`,
            `Chọn số cạnh thẳng có trong ${shape}.`,
          ][sectionIndex],
        options: choice.options,
        correctAnswer: choice.correctAnswer,
        explanation: english ? `A ${shape} has ${sides} straight sides.` : `${shape[0].toLocaleUpperCase('vi')}${shape.slice(1)} có ${sides} cạnh thẳng.`,
        topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
        difficulty,
      });
    }
    if (grade === 2) {
      const longLength = 20 + (hashedSeed % 60);
      const shortLength = 2 + (Math.floor(hashedSeed / 73) % 18);
      const difference = longLength - shortLength;
      return makeItem(id, {
        type: 'short_answer',
        prompt: english ? `One ribbon is ${longLength} cm long and another is ${shortLength} cm long. How many centimetres longer is the first ribbon?` : `Một đoạn dây dài ${longLength} cm, đoạn kia dài ${shortLength} cm. Đoạn thứ nhất dài hơn đoạn thứ hai bao nhiêu xăng-ti-mét?`,
        correctAnswer: String(difference),
        explanation: `${longLength} − ${shortLength} = ${difference} cm.`,
        topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
        difficulty,
      });
    }
    const rectLength = 3 + (hashedSeed % 12);
    const rectWidth = 2 + (Math.floor(hashedSeed / 89) % 9);
    if (grade <= 4) {
      const area = rectLength * rectWidth;
      return makeItem(id, {
        type: 'short_answer',
        prompt: english ? `A rectangle is ${rectLength} cm long and ${rectWidth} cm wide. What is its area?` : `Hình chữ nhật dài ${rectLength} cm, rộng ${rectWidth} cm. Diện tích hình đó là bao nhiêu xăng-ti-mét vuông?`,
        correctAnswer: String(area),
        explanation: `${rectLength} × ${rectWidth} = ${area} cm².`,
        topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
        difficulty,
      });
    }
    const height = 2 + (Math.floor(hashedSeed / 107) % 7);
    const volume = rectLength * rectWidth * height;
    return makeItem(id, {
      type: 'short_answer',
      prompt: english ? `A rectangular prism is ${rectLength} cm long, ${rectWidth} cm wide and ${height} cm high. What is its volume?` : `Hình hộp chữ nhật dài ${rectLength} cm, rộng ${rectWidth} cm, cao ${height} cm. Thể tích hình hộp là bao nhiêu xăng-ti-mét khối?`,
      correctAnswer: String(volume),
      explanation: `${rectLength} × ${rectWidth} × ${height} = ${volume} cm³.`,
      topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
      difficulty,
    });
  }

  const length = Math.max(2, (hashedSeed % 18) + grade);
  const width = Math.max(1, (Math.floor(hashedSeed / 83) % 12) + 1);
  if (grade >= 3) {
    const answer = 2 * (length + width);
    const options = optionsForNumber(id, answer, seed);
    return makeItem(id, {
      type: 'single_choice',
      prompt: english
        ? [
          `A rectangle is ${length} cm long and ${width} cm wide. What is its perimeter?`,
          `Find the perimeter of a rectangle with length ${length} cm and width ${width} cm.`,
          `A rectangle has a length of ${length} cm and a width of ${width} cm. Calculate its perimeter.`,
        ][sectionIndex]
        : [
          `Hình chữ nhật dài ${length} cm, rộng ${width} cm. Chu vi hình đó là bao nhiêu?`,
          `Tính chu vi hình chữ nhật có chiều dài ${length} cm và chiều rộng ${width} cm.`,
          `Một hình chữ nhật dài ${length} cm, rộng ${width} cm. Hãy tìm chu vi của hình.`,
        ][sectionIndex],
      options: options.map((option) => ({ ...option, label: `${option.label} cm` })),
      correctAnswer: options.find((option) => option.label === String(answer))?.id || 'a',
      explanation: english ? `Perimeter = (${length} + ${width}) × 2 = ${answer} cm.` : `Chu vi là (${length} + ${width}) × 2 = ${answer} cm.`,
      topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
      difficulty,
    });
  }

  const answer = length + width;
  return makeItem(id, {
    type: 'short_answer',
    prompt: english
      ? [
        `A ${length} cm ribbon joins a ${width} cm ribbon. How long are they altogether?`,
        `Join a ${length} cm ribbon to a ${width} cm ribbon. Find the total length.`,
        `Two ribbons are ${length} cm and ${width} cm long. What is their combined length?`,
      ][sectionIndex]
      : [
        `Ghép đoạn dây dài ${length} cm với đoạn dây dài ${width} cm. Cả hai dài bao nhiêu xăng-ti-mét?`,
        `Nối đoạn dây ${length} cm với đoạn dây ${width} cm. Tìm tổng chiều dài của hai đoạn dây.`,
        `Hai đoạn dây dài ${length} cm và ${width} cm. Khi ghép lại, chúng dài tất cả bao nhiêu xăng-ti-mét?`,
      ][sectionIndex],
    correctAnswer: String(answer),
    explanation: english ? `${length} + ${width} = ${answer} cm.` : `${length} + ${width} = ${answer} cm.`,
    topic: practiceTopic(english ? 'math_en' : 'math', grade, family),
    difficulty,
  });
}

function vietnameseItem(id: string, grade: GradeLevel, setNumber: number, sectionIndex: number, itemIndex: number): PracticeItem {
  const seed = grade * 10_000 + setNumber * 300 + sectionIndex * 100 + itemIndex * 11;
  const words = VI_WORDS[grade];
  const [correct, wrongOne, wrongTwo] = words[seed % words.length];
  const qualities = VI_QUALITIES[grade];
  const family = (sectionIndex * 10 + itemIndex) % 5;
  const reviewTopic = VI_REVIEW_TOPICS[setNumber - 1];
  const hashedSeed = Number.parseInt(stableHash(id).slice(-8), 16);
  const difficulty = itemDifficulty(setNumber, sectionIndex * 10 + itemIndex);

  if (family === 0) {
    const choice = choiceOptions(id, [correct, wrongOne, wrongTwo], correct);
    return makeItem(id, {
      type: 'single_choice',
      prompt: `Trong phiếu ôn tập chủ đề “${reviewTopic}”, từ nào được viết đúng chính tả?`,
      options: choice.options,
      correctAnswer: choice.correctAnswer,
      explanation: `“${correct}” là cách viết đúng chính tả.`,
      topic: practiceTopic('vietnamese', grade, family),
      difficulty,
    });
  }

  if (family === 1) {
    const name = NAMES[hashedSeed % NAMES.length];
    const selectedQuality = qualities[Math.floor(hashedSeed / 79) % qualities.length];
    const sentence = grade <= 2
      ? `Bạn ${name} rất ${selectedQuality}`
      : `${name} được mọi người quý mến vì ${selectedQuality}`;
    const choice = choiceOptions(id, ['.', '?', '!'], '.');
    return makeItem(id, {
      type: 'single_choice',
      prompt: [
        `Chọn dấu câu thích hợp ở cuối câu “${sentence}”`,
        `Câu “${sentence}” cần dấu câu nào ở cuối?`,
        `Điền dấu câu phù hợp để hoàn thành câu “${sentence}”`,
      ][sectionIndex],
      options: choice.options,
      correctAnswer: choice.correctAnswer,
      explanation: 'Đây là câu kể nên kết thúc bằng dấu chấm.',
      topic: practiceTopic('vietnamese', grade, family),
      difficulty,
    });
  }

  if (family === 2) {
    const name = NAMES[hashedSeed % NAMES.length];
    const selectedQuality = qualities[Math.floor(hashedSeed / 73) % qualities.length];
    const sentence = grade === 1 ? `${name} luôn ${selectedQuality}.` : `${name} cùng các bạn luôn ${selectedQuality}.`;
    return makeItem(id, {
      type: 'ordering',
      prompt: [
        `Sắp xếp các tiếng để tạo thành câu đúng về bạn ${name}.`,
        `Ghép các tiếng theo đúng thứ tự để viết câu về bạn ${name}.`,
        `Xếp lại các tiếng thành một câu hoàn chỉnh về bạn ${name}.`,
      ][sectionIndex],
      options: sentence.replace(/[.]/gu, '').split(' ').reverse().map((word, index) => ({ id: `${index}`, label: word })),
      correctAnswer: sentence.replace(/[.]/gu, '').split(' '),
      explanation: `Câu đúng là: “${sentence}”`,
      topic: practiceTopic('vietnamese', grade, family),
      difficulty,
    });
  }

  if (family === 3) {
    const name = NAMES[hashedSeed % NAMES.length];
    const activity = [
      { action: 'chăm sóc cây ở vườn trường' },
      { action: 'sắp xếp sách trong thư viện' },
      { action: 'nhặt rác ở sân chơi' },
      { action: 'sắp xếp đồ dùng ở góc học tập' },
    ][Math.floor(hashedSeed / 71) % 4];
    const selectedWorkStyle = VI_WORK_STYLES[Math.floor(hashedSeed / 101) % VI_WORK_STYLES.length];
    const passage = `${name} cùng các bạn ${activity.action}. Mọi người làm việc ${selectedWorkStyle} và luôn giúp đỡ nhau.`;
    const nameIndex = NAMES.indexOf(name);
    const answerNames = [name, NAMES[(nameIndex + 1) % NAMES.length], NAMES[(nameIndex + 2) % NAMES.length]];
    const choice = choiceOptions(id, answerNames, name);
    return makeItem(id, {
      type: 'single_choice',
      prompt: [
        `Đọc đoạn văn: “${passage}” Ai cùng các bạn ${activity.action}?`,
        `Dựa vào đoạn văn “${passage}”, em hãy cho biết ai cùng các bạn ${activity.action}.`,
        `Sau khi đọc “${passage}”, chọn tên người cùng các bạn ${activity.action}.`,
      ][sectionIndex],
      options: choice.options,
      correctAnswer: choice.correctAnswer,
      explanation: `Đoạn văn cho biết ${name} cùng các bạn ${activity.action}.`,
      topic: practiceTopic('vietnamese', grade, family),
      difficulty,
    });
  }

  const pairBank = VI_SYNONYM_PAIRS_BY_GRADE[grade];
  const offset = optionOffset(id, pairBank.length);
  const rotated = pairBank.slice(offset).concat(pairBank.slice(0, offset)).slice(0, 3);
  const matchingPlace = ['lớp học', 'thư viện', 'vườn trường', 'sân chơi'][Math.floor(hashedSeed / 67) % 4];
  const matchingName = NAMES[hashedSeed % NAMES.length];
  const matchingWords = `“${rotated.map((pair) => pair.left).join(', ')}”`;
  return makeItem(id, {
    type: 'matching',
    prompt: [
      `Sau hoạt động ở ${matchingPlace}, ${matchingName} cần ghép các từ ${matchingWords} với từ gần nghĩa.`,
      `Trong giờ học tại ${matchingPlace}, hãy giúp ${matchingName} nối các từ ${matchingWords} với từ gần nghĩa.`,
      `${matchingName} đang hoàn thành phiếu từ ngữ ở ${matchingPlace}. Hãy ghép ${matchingWords} với từ gần nghĩa.`,
    ][sectionIndex],
    matchingPairs: rotated,
    correctAnswer: rotated.map((pair) => `${pair.left}::${pair.right}`),
    explanation: 'Các cặp đã ghép có nghĩa giống hoặc gần giống nhau.',
    topic: practiceTopic('vietnamese', grade, family),
    difficulty,
  });
}

function englishItem(id: string, grade: GradeLevel, setNumber: number, sectionIndex: number, itemIndex: number): PracticeItem {
  const seed = grade * 10_000 + setNumber * 300 + sectionIndex * 100 + itemIndex * 13;
  const words = EN_WORDS[grade];
  const [word, distractorOne] = words[seed % words.length];
  const nounBank = EN_COUNTABLE_NOUNS[grade].flat();
  const nounIndex = (setNumber * 5 + sectionIndex * 3 + itemIndex) % nounBank.length;
  const noun = nounBank[nounIndex];
  const nounDistractorOne = nounBank[(nounIndex + 1) % nounBank.length];
  const nounDistractorTwo = nounBank[(nounIndex + 2) % nounBank.length];
  const family = (sectionIndex * 10 + itemIndex) % 5;
  const reviewTopic = EN_REVIEW_TOPICS[setNumber - 1];
  const hashedSeed = Number.parseInt(stableHash(id).slice(-8), 16);
  const difficulty = itemDifficulty(setNumber, sectionIndex * 10 + itemIndex);

  if (family === 0) {
    const spellingLabels = [word, `${word}e`, word.slice(0, -1) || distractorOne];
    const choice = choiceOptions(id, [...new Set(spellingLabels)], word);
    return makeItem(id, {
      type: 'single_choice',
      prompt: [
        `For the “${reviewTopic}” word list, choose the word that is spelled correctly.`,
        `Look at the “${reviewTopic}” word list and select the correctly spelled word.`,
        `Which word is spelled correctly in the “${reviewTopic}” review?`,
      ][sectionIndex],
      options: choice.options,
      correctAnswer: choice.correctAnswer,
      explanation: `“${word}” is the correctly spelled word.`,
      topic: practiceTopic('english', grade, family),
      difficulty,
    });
  }

  if (family === 1) {
    const article = /^[aeiou]/iu.test(noun) ? 'an' : 'a';
    const choice = choiceOptions(id, [article, article === 'a' ? 'an' : 'a', 'are'], article);
    const name = NAMES[hashedSeed % NAMES.length];
    return makeItem(id, {
      type: 'single_choice',
      prompt: [
        `${name} points to the picture. Complete the phrase: “___ ${noun}”.`,
        `${name} is naming the picture. Choose the correct word for “___ ${noun}”.`,
        `Help ${name} complete this noun phrase: “___ ${noun}”.`,
      ][sectionIndex],
      options: choice.options,
      correctAnswer: choice.correctAnswer,
      explanation: `We say “${article} ${noun}”.`,
      topic: practiceTopic('english', grade, family),
      difficulty,
    });
  }

  if (family === 2) {
    const article = /^[aeiou]/iu.test(noun) ? 'an' : 'a';
    const sentenceWords = grade <= 2 ? ['I', 'see', article, noun] : ['We', 'learn', 'about', 'the', noun, 'today'];
    return makeItem(id, {
      type: 'ordering',
      prompt: [
        `Put the words in the correct order to write ${NAMES[hashedSeed % NAMES.length]}'s sentence.`,
        `Arrange the words to complete ${NAMES[hashedSeed % NAMES.length]}'s sentence.`,
        `Reorder the words to make a complete sentence for ${NAMES[hashedSeed % NAMES.length]}.`,
      ][sectionIndex],
      options: [...sentenceWords].reverse().map((value, index) => ({ id: `${index}`, label: value })),
      correctAnswer: sentenceWords,
      explanation: `The correct sentence is “${sentenceWords.join(' ')}.”`,
      topic: practiceTopic('english', grade, family),
      difficulty,
    });
  }

  if (family === 3) {
    const name = NAMES[hashedSeed % NAMES.length];
    const article = /^[aeiou]/iu.test(noun) ? 'an' : 'a';
    const passage = `${name} sees ${article} ${noun} after school. ${name} tells a friend about it.`;
    const choice = choiceOptions(id, [noun, nounDistractorOne, nounDistractorTwo], noun);
    return makeItem(id, {
      type: 'single_choice',
      prompt: [
        `Read: “${passage}” What does ${name} see?`,
        `Read the short text “${passage}” Then choose what ${name} sees.`,
        `After reading “${passage}”, answer the question: What does ${name} see?`,
      ][sectionIndex],
      options: choice.options,
      correctAnswer: choice.correctAnswer,
      explanation: `The passage says that ${name} sees ${article} ${noun}.`,
      topic: practiceTopic('english', grade, family),
      difficulty,
    });
  }

  const pairBank = EN_MATCHING_PAIRS_BY_GRADE[grade];
  const offset = optionOffset(id, pairBank.length);
  const rotated = pairBank.slice(offset).concat(pairBank.slice(0, offset)).slice(0, 3);
  const matchingName = NAMES[hashedSeed % NAMES.length];
  const matchingWords = `“${rotated.map((pair) => pair.left).join(', ')}”`;
  return makeItem(id, {
    type: 'matching',
    prompt: [
      `In ${matchingName}'s “${reviewTopic}” word notebook, match ${matchingWords} with their meanings.`,
      `Help ${matchingName} complete the “${reviewTopic}” list by matching ${matchingWords} with their meanings.`,
      `${matchingName} is reviewing the “${reviewTopic}” word list. Connect ${matchingWords} to their meanings.`,
    ][sectionIndex],
    matchingPairs: rotated,
    correctAnswer: rotated.map((pair) => `${pair.left}::${pair.right}`),
    explanation: 'Each word is matched with its correct meaning.',
    topic: practiceTopic('english', grade, family),
    difficulty,
  });
}

function buildSection(subject: PracticeSubject, grade: GradeLevel, setNumber: number, sectionIndex: number): PracticeSection {
  const setId = `practice-${subject.replace('_', '-')}-g${grade}-s${String(setNumber).padStart(2, '0')}`;
  const sectionId = `${setId}-p${sectionIndex + 1}`;
  const items = Array.from({ length: 10 }, (_, itemIndex) => {
    const id = `${sectionId}-q${String(itemIndex + 1).padStart(2, '0')}`;
    if (subject === 'math') return mathItem(id, grade, setNumber, sectionIndex, itemIndex, false);
    if (subject === 'math_en') return mathItem(id, grade, setNumber, sectionIndex, itemIndex, true);
    if (subject === 'vietnamese') return vietnameseItem(id, grade, setNumber, sectionIndex, itemIndex);
    return englishItem(id, grade, setNumber, sectionIndex, itemIndex);
  });

  const titles: Record<PracticeSubject, string[]> = {
    math: ['Khởi động tính nhanh', 'Vận dụng thông minh', 'Chinh phục thử thách'],
    vietnamese: ['Từ ngữ trong sáng', 'Câu văn linh hoạt', 'Đọc hiểu và vận dụng'],
    english: ['Words and sounds', 'Sentences and grammar', 'Read and think'],
    math_en: ['Quick calculations', 'Math in context', 'Challenge zone'],
  };

  return {
    id: sectionId,
    title: `Phần ${sectionIndex + 1}: ${titles[subject][sectionIndex]}`,
    instruction: subject === 'english' || subject === 'math_en'
      ? 'Complete all ten activities. You can review your answers before submitting.'
      : 'Hoàn thành đủ 10 hoạt động. Bé có thể xem lại trước khi nộp bài.',
    activityTypes: [...new Set(items.map((item) => item.type))],
    maxPoints: 100,
    items,
  };
}

function buildSet(subject: PracticeSubject, grade: GradeLevel, setNumber: number): PracticeSet {
  return {
    id: `practice-${subject.replace('_', '-')}-g${grade}-s${String(setNumber).padStart(2, '0')}`,
    subject,
    grade,
    setNumber,
    title: setTitle(setNumber),
    level: setLevel(setNumber),
    totalPoints: 300,
    timeLimitSeconds: setNumber >= 11 ? 1800 : undefined,
    sections: [0, 1, 2].map((sectionIndex) => buildSection(subject, grade, setNumber, sectionIndex)) as [PracticeSection, PracticeSection, PracticeSection],
  };
}

export function buildPracticePack(subject: PracticeSubject, grade: GradeLevel): PracticePackManifest {
  const sets = Array.from({ length: 12 }, (_, index) => buildSet(subject, grade, index + 1));
  const isVerified = validatePracticePackRelease(subject, grade, sets).length === 0;
  return {
    id: `practice-${subject.replace('_', '-')}-g${grade}`,
    subject,
    subjectLabel: SUBJECT_LABELS[subject],
    grade,
    version: '2026.1',
    contentOrigin: 'system_generated',
    verificationStatus: isVerified ? 'verified' : 'draft',
    releaseStatus: isVerified ? 'published' : 'review_required',
    officialDisclaimer: 'Nội dung WonderKids tự biên soạn; không phải đề thi Violympic chính thức.',
    sourceLabel: APP_AUTHORED_SOURCE,
    alignmentSources: [
      OFFICIAL_TOPIC_SOURCE,
      `Chương trình GDPT 2018 — ${SUBJECT_LABELS[subject]} lớp ${grade}`,
    ],
    sets,
  };
}
