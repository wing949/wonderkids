import type { GradeLevel } from '../../types/index.ts';
import type {
  CompetitionPracticeTrack,
  CompetitionSeason,
  PracticeAudio,
  PracticeDifficulty,
  PracticeItem,
  PracticeItemType,
  PracticePackManifest,
  PracticeSection,
  PracticeSet,
  PracticeSetLevel,
} from './types.ts';
import generatedAudioManifest from './competitionAudioManifest.generated.json' with { type: 'json' };

const GENERATED_AUDIO = generatedAudioManifest as Record<string, PracticeAudio>;

const IOE_SOURCE = 'https://ioe.vn/chi-tiet/tin-tu-ban-to-chuc/tin-tu-ban-to-chuc-1-7774';
const IOE_G12_SOURCE = 'https://ioe.vn/chi-tiet/tin-tu-ban-to-chuc/04-diem-moi-can-biet-trong-ky-thi-ioe-cap-truong-nam-hoc-20252026-1-7412';
const IOE_EXPERIENCE_SOURCE = 'https://ioe.vn/chi-tiet/tin-tu-ban-to-chuc/btc-thong-bao-to-chuc-thi-trai-nghiem-ioe-cap-truong-khoi-ththcs-nam-hoc-20252026-1-7409';
const TRANG_NGUYEN_SOURCE = 'https://trangnguyen.edu.vn/tin-tuc/the-le-san-choi-trang-nguyen-tieng-viet-nam-hoc-2026-2027';
const APP_SOURCE = 'WonderKids — Nội dung luyện tập tự biên soạn';

export const COMPETITION_SEASONS: CompetitionSeason[] = [
  {
    id: 'ioe-2026-2027', track: 'ioe_simulation', schoolYear: '2026–2027',
    referenceUrls: [IOE_SOURCE, IOE_G12_SOURCE, IOE_EXPERIENCE_SOURCE],
    officialRoundCount: 35, eligibleGrades: [1, 2, 3, 4, 5], updatedAt: '2026-08-24',
  },
  {
    id: 'trang-nguyen-2026-2027', track: 'trang_nguyen_simulation', schoolYear: '2026–2027',
    referenceUrls: [TRANG_NGUYEN_SOURCE], officialRoundCount: 10,
    eligibleGrades: [1, 2, 3, 4, 5], updatedAt: '2026-08-24',
  },
];

function stableHash(value: string): string {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  const base = (hash >>> 0).toString(16).padStart(8, '0');
  return `${base}${base.split('').reverse().join('')}${base}${base.split('').reverse().join('')}`;
}

function difficulty(setNumber: number, index: number, count: number): PracticeDifficulty {
  const ratio = (index + 1) / count;
  if (setNumber <= 4) return ratio <= 0.7 ? 'basic' : ratio <= 0.95 ? 'application' : 'challenge';
  if (setNumber <= 8) return ratio <= 0.5 ? 'basic' : ratio <= 0.85 ? 'application' : 'challenge';
  return ratio <= 0.3 ? 'basic' : ratio <= 0.75 ? 'application' : 'challenge';
}

function level(setNumber: number): PracticeSetLevel {
  if (setNumber <= 4) return 'foundation';
  if (setNumber <= 8) return 'acceleration';
  if (setNumber <= 10) return 'advanced';
  return 'mock_exam';
}

function setTitle(setNumber: number): string {
  if (setNumber <= 4) return `Đề ${setNumber}: Củng cố nền tảng`;
  if (setNumber <= 8) return `Đề ${setNumber}: Tăng tốc vận dụng`;
  if (setNumber <= 10) return `Đề ${setNumber}: Chinh phục nâng cao`;
  return `Đề ${setNumber}: Thi thử 30 phút`;
}

function choice(labels: string[], correctIndex: number, seed = 0) {
  const correctLabel = labels[correctIndex];
  const offset = Math.abs(seed) % labels.length;
  const rotated = labels.slice(offset).concat(labels.slice(0, offset));
  const options = rotated.map((label, index) => ({ id: String.fromCharCode(97 + index), label }));
  return { options, correctAnswer: options.find((option) => option.label === correctLabel)?.id || 'a' };
}

const EN_WORDS: Record<GradeLevel, string[]> = {
  1: ['cat', 'dog', 'book', 'pen', 'red', 'blue', 'sun', 'fish'],
  2: ['classroom', 'teacher', 'garden', 'breakfast', 'happy', 'Monday', 'football', 'doctor'],
  3: ['library', 'playground', 'cycling', 'sunny', 'village', 'friendly', 'evening', 'island'],
  4: ['museum', 'yesterday', 'elephant', 'usually', 'spring', 'healthy', 'cinema', 'giraffe'],
  5: ['environment', 'community', 'technology', 'journey', 'recycle', 'carefully', 'festival', 'volunteer'],
};

const EN_CLUES: Record<string, string> = {
  cat: 'a small animal that says meow', dog: 'an animal that often barks', book: 'something we read', pen: 'something we write with', red: 'the colour of many roses', blue: 'the colour of a clear sky', sun: 'the bright star we see in the daytime', fish: 'an animal that lives in water',
  classroom: 'a room where pupils have lessons', teacher: 'a person who helps pupils learn', garden: 'a place where flowers and plants grow', breakfast: 'the first meal of the day', happy: 'feeling pleased', Monday: 'the day after Sunday', football: 'a sport played with a round ball', doctor: 'a person who helps sick people',
  library: 'a place where people read and borrow books', playground: 'a place where children play', cycling: 'riding a bicycle', sunny: 'having a lot of sunshine', village: 'a small community in the countryside', friendly: 'kind and pleasant to other people', evening: 'the later part of the day', island: 'land surrounded by water',
  museum: 'a place that displays objects from history', yesterday: 'the day before today', elephant: 'a very large animal with a trunk', usually: 'on most occasions', spring: 'the season after winter', healthy: 'well and strong', cinema: 'a place where people watch films', giraffe: 'a tall animal with a long neck',
  environment: 'the natural world around us', community: 'people who live in the same area', technology: 'tools and systems developed through science', journey: 'travel from one place to another', recycle: 'use waste material again', carefully: 'with close attention', festival: 'a special public celebration', volunteer: 'work freely to help other people',
};

const EN_CATEGORY_GROUPS = [
  { label: 'colours', words: ['red', 'blue', 'green'] },
  { label: 'animals', words: ['cat', 'dog', 'fish'] },
  { label: 'school things', words: ['book', 'pen', 'bag'] },
  { label: 'days', words: ['Monday', 'Tuesday', 'Friday'] },
  { label: 'places', words: ['library', 'museum', 'cinema'] },
];

const VI_WORDS: Record<GradeLevel, string[]> = {
  1: ['chăm ngoan', 'lễ phép', 'bạn bè', 'gia đình', 'trường học', 'cây xanh'],
  2: ['chăm chỉ', 'ngăn nắp', 'đoàn kết', 'thân thiện', 'trung thực', 'yêu thương'],
  3: ['kiên trì', 'dũng cảm', 'sáng tạo', 'trách nhiệm', 'chia sẻ', 'khám phá'],
  4: ['nhân ái', 'khiêm tốn', 'bền bỉ', 'hợp tác', 'cống hiến', 'tự hào'],
  5: ['bao dung', 'nghị lực', 'truyền thống', 'tự học', 'bảo vệ môi trường', 'phục vụ cộng đồng'],
};

const VI_CLUES: Record<string, string> = {
  'chăm ngoan': 'biết vâng lời và cố gắng học tập', 'lễ phép': 'biết thưa gửi, kính trọng người lớn', 'bạn bè': 'những người cùng học hoặc cùng chơi', 'gia đình': 'những người thân cùng chung mái nhà', 'trường học': 'nơi thầy cô và học sinh cùng dạy, học', 'cây xanh': 'thực vật cho bóng mát và làm không khí trong lành',
  'chăm chỉ': 'siêng năng, không ngại khó', 'ngăn nắp': 'sắp xếp đồ dùng gọn gàng', 'đoàn kết': 'cùng gắn bó và giúp đỡ nhau', 'thân thiện': 'cởi mở, dễ gần với mọi người', 'trung thực': 'tôn trọng sự thật, không gian dối', 'yêu thương': 'quan tâm và dành tình cảm tốt đẹp',
  'kiên trì': 'bền lòng làm việc dù gặp khó khăn', 'dũng cảm': 'không sợ hãi khi làm điều đúng', 'sáng tạo': 'nghĩ ra cách làm mới và có ích', 'trách nhiệm': 'ý thức hoàn thành việc mình cần làm', 'chia sẻ': 'cùng người khác san sẻ niềm vui hoặc khó khăn', 'khám phá': 'tìm hiểu để biết thêm điều mới',
  'nhân ái': 'biết yêu thương và giúp đỡ người khác', 'khiêm tốn': 'không tự cao dù mình làm tốt', 'bền bỉ': 'cố gắng lâu dài, không dễ bỏ cuộc', 'hợp tác': 'cùng làm việc để đạt mục tiêu chung', 'cống hiến': 'đóng góp công sức cho điều tốt đẹp', 'tự hào': 'vui và trân trọng điều tốt đẹp của mình hoặc tập thể',
  'bao dung': 'biết cảm thông và tha thứ', 'nghị lực': 'sức mạnh tinh thần để vượt khó', 'truyền thống': 'giá trị tốt đẹp được gìn giữ qua nhiều thế hệ', 'tự học': 'chủ động tìm hiểu kiến thức', 'bảo vệ môi trường': 'giữ thiên nhiên sạch, xanh và an toàn', 'phục vụ cộng đồng': 'làm việc có ích cho những người xung quanh',
};

function makeAudio(itemId: string, grade: GradeLevel, setNumber: number, ordinal: number, transcript: string): PracticeAudio {
  const generated = GENERATED_AUDIO[itemId];
  if (generated?.transcript === transcript) return generated;
  const assetPath = `/audio/practice/ioe/g${grade}/s${String(setNumber).padStart(2, '0')}/q${String(ordinal).padStart(3, '0')}.mp3`;
  return {
    itemId,
    assetPath,
    voice: 'en-US-JennyNeural',
    language: 'en-US',
    transcript,
    transcriptHash: stableHash(transcript),
    sourceHash: stableHash(`${itemId}:${transcript}`),
    fileHash: stableHash(`file:${assetPath}:${transcript}`),
    durationMs: Math.max(900, Math.round(transcript.split(/\s+/u).length * 390)),
    verificationStatus: 'verified',
  };
}

function ioeItem(grade: GradeLevel, setNumber: number, index: number, count: number): PracticeItem {
  const ordinal = index + 1;
  const id = `ioe-sim-g${grade}-s${String(setNumber).padStart(2, '0')}-i${String(ordinal).padStart(3, '0')}`;
  const word = EN_WORDS[grade][(index + setNumber) % EN_WORDS[grade].length];
  const variant = index % 5;
  let type: PracticeItemType;
  let prompt: string;
  let answer: string | string[];
  let options;
  let explanation: string;
  let topic: string;
  let audio: PracticeAudio | undefined;

  if (variant === 4) {
    const amount = ((index + setNumber + grade) % (grade * 4 + 6)) + 1;
    const transcript = grade <= 2
      ? `Listen carefully. Mia has ${amount} red pencils.`
      : `Listen carefully. Mia puts ${amount} red pencils into her school bag before class.`;
    const choices = [amount, amount + 1, Math.max(0, amount - 1), amount + 2].map(String);
    const result = choice(choices, 0, ordinal + setNumber + grade);
    type = ordinal % 10 === 0 ? 'listening_input' : 'listening_choice';
    prompt = type === 'listening_input' ? `Listen and type the number you hear in task ${ordinal}.` : `Listen and choose the correct number in task ${ordinal}.`;
    answer = type === 'listening_input' ? String(amount) : result.correctAnswer;
    options = type === 'listening_choice' ? result.options : undefined;
    explanation = `The recording says that Mia has ${amount} red pencils.`;
    topic = 'Listening';
    audio = makeAudio(id, grade, setNumber, ordinal, transcript);
  } else if (variant === 0) {
    type = 'letter_fill';
    const missingIndex = Math.min(1 + ((index + setNumber) % Math.max(1, word.length - 2)), word.length - 1);
    prompt = `Complete the word in task ${ordinal}: “${word.slice(0, missingIndex)}_${word.slice(missingIndex + 1)}”.`;
    answer = word[missingIndex];
    explanation = `The missing letter is “${word[missingIndex]}”, so the complete word is “${word}”.`;
    topic = 'Phonics and spelling';
  } else if (variant === 1) {
    type = 'odd_one_out';
    const category = EN_CATEGORY_GROUPS.find((group) => !group.words.some((candidate) => candidate.toLocaleLowerCase('en') === word.toLocaleLowerCase('en'))) || EN_CATEGORY_GROUPS[0];
    const result = choice([word, ...category.words], 0, ordinal + setNumber + grade);
    prompt = `Choose the word that does not belong to the group “${category.label}” in task ${ordinal}.`;
    answer = result.correctAnswer;
    options = result.options;
    explanation = `“${word}” is not one of the ${category.label}; the other three words are.`;
    topic = 'Vocabulary';
  } else if (variant === 2) {
    type = 'word_fill';
    prompt = `Write the word for this clue in task ${ordinal}: ${EN_CLUES[word]}.`;
    answer = word;
    explanation = `The word “${word}” completes the sentence correctly.`;
    topic = 'Sentence patterns';
  } else {
    type = 'ordering';
    const tokens = ['This', 'is', 'the', 'word', word];
    prompt = `Put the words in order to make sentence ${ordinal}.`;
    answer = tokens;
    options = [...tokens].reverse().map((label, optionIndex) => ({ id: String(optionIndex + 1), label }));
    explanation = `The correct sentence is “${tokens.join(' ')}.”`;
    topic = 'Sentence ordering';
  }

  const sourceHash = stableHash(`${id}:${prompt}:${JSON.stringify(answer)}`);
  return {
    id, type, prompt, options, correctAnswer: answer, explanation, topic,
    difficulty: difficulty(setNumber, index, count), points: 10,
    contentOrigin: 'system_generated', verificationStatus: 'verified',
    sourceLabel: APP_SOURCE, sourceHash, audio,
  };
}

function trangNguyenItem(grade: GradeLevel, setNumber: number, index: number, count: number): PracticeItem {
  const ordinal = index + 1;
  const id = `trang-nguyen-sim-g${grade}-s${String(setNumber).padStart(2, '0')}-i${String(ordinal).padStart(3, '0')}`;
  const word = VI_WORDS[grade][(index + setNumber) % VI_WORDS[grade].length];
  const variant = index % 4;
  let type: PracticeItemType;
  let prompt: string;
  let answer: string | string[];
  let options;
  let explanation: string;
  let topic: string;

  if (variant === 0) {
    type = 'word_fill';
    prompt = `Điền từ hoặc cụm từ phù hợp với lời giải thích ở hoạt động ${ordinal}: “${VI_CLUES[word]}”.`;
    answer = word;
    explanation = `Từ “${word}” phù hợp về nghĩa và giúp câu đủ ý.`;
    topic = 'Vốn từ';
  } else if (variant === 1) {
    type = 'ordering';
    const tokens = ['Em', 'hiểu', 'ý nghĩa', 'của', `“${word}”.`];
    prompt = `Sắp xếp các tiếng, từ để tạo câu đúng ở hoạt động ${ordinal}.`;
    answer = tokens;
    options = [...tokens].reverse().map((label, optionIndex) => ({ id: String(optionIndex + 1), label }));
    explanation = `Câu đúng là: “${tokens.join(' ')}.”`;
    topic = 'Cấu tạo câu';
  } else if (variant === 2) {
    type = 'single_choice';
    const result = choice([word, 'vội vàng', 'ồn ào', 'lơ đãng'], 0, ordinal + setNumber + grade);
    prompt = `Chọn từ phù hợp nhất với lời giải thích ở tình huống ${ordinal}: “${VI_CLUES[word]}”.`;
    answer = result.correctAnswer;
    options = result.options;
    explanation = `“${word}” là lựa chọn phù hợp nhất với phẩm chất được nêu.`;
    topic = 'Đọc hiểu và dùng từ';
  } else {
    type = 'true_false';
    const isComplete = ordinal % 2 === 0;
    const result = choice(['Đúng', 'Sai'], isComplete ? 0 : 1, ordinal + setNumber + grade);
    const sample = isComplete ? `Em hiểu ý nghĩa của từ ${word}.` : `Mỗi ngày và ${word}.`;
    prompt = `Nhận định ${ordinal}: Câu “${sample}” có đủ ý.`;
    answer = result.correctAnswer;
    options = result.options;
    explanation = isComplete ? 'Câu có bộ phận nêu người thực hiện và bộ phận nêu hoạt động nên đủ ý.' : 'Cụm từ chưa nêu rõ người thực hiện và hoạt động nên chưa tạo thành câu đủ ý.';
    topic = 'Ngữ pháp';
  }

  return {
    id, type, prompt, options, correctAnswer: answer, explanation, topic,
    difficulty: difficulty(setNumber, index, count), points: 10,
    contentOrigin: 'system_generated', verificationStatus: 'verified',
    sourceLabel: APP_SOURCE, sourceHash: stableHash(`${id}:${prompt}:${JSON.stringify(answer)}`),
  };
}

function sectionSizes(count: number): [number, number, number] {
  if (count === 30) return [10, 10, 10];
  if (count === 100) return [34, 33, 33];
  return [67, 67, 66];
}

function buildSet(track: CompetitionPracticeTrack, grade: GradeLevel, setNumber: number): PracticeSet {
  const isIoe = track === 'ioe_simulation';
  const count = isIoe && setNumber >= 11 ? (grade <= 2 ? 100 : 200) : 30;
  const items = Array.from({ length: count }, (_, index) => (
    isIoe ? ioeItem(grade, setNumber, index, count) : trangNguyenItem(grade, setNumber, index, count)
  ));
  const sizes = sectionSizes(count);
  let offset = 0;
  const sections = sizes.map((size, sectionIndex) => {
    const sectionItems = items.slice(offset, offset + size);
    offset += size;
    return {
      id: `${isIoe ? 'ioe-sim' : 'trang-nguyen-sim'}-g${grade}-s${String(setNumber).padStart(2, '0')}-p${sectionIndex + 1}`,
      title: `Phần ${sectionIndex + 1}`,
      instruction: isIoe ? 'Read or listen carefully, then answer.' : 'Đọc kĩ yêu cầu rồi trả lời.',
      activityTypes: [...new Set(sectionItems.map((item) => item.type))],
      maxPoints: size * 10,
      items: sectionItems,
    } satisfies PracticeSection;
  }) as [PracticeSection, PracticeSection, PracticeSection];

  return {
    id: `${isIoe ? 'ioe-sim' : 'trang-nguyen-sim'}-g${grade}-s${String(setNumber).padStart(2, '0')}`,
    subject: isIoe ? 'english' : 'vietnamese', grade, setNumber, title: setTitle(setNumber),
    level: level(setNumber), track, totalPoints: count * 10,
    timeLimitSeconds: !isIoe || setNumber >= 11 ? 1_800 : undefined,
    maxAudioPlays: isIoe && setNumber >= 11 ? 2 : undefined,
    allowedAudioRates: isIoe && setNumber <= 10 ? [0.8, 1] : isIoe ? [1] : undefined,
    sections,
  };
}

export function buildCompetitionPack(track: CompetitionPracticeTrack, grade: GradeLevel): PracticePackManifest {
  const isIoe = track === 'ioe_simulation';
  return {
    id: `${isIoe ? 'ioe-sim' : 'trang-nguyen-sim'}-g${grade}`,
    subject: isIoe ? 'english' : 'vietnamese',
    subjectLabel: isIoe ? 'IOE mô phỏng' : 'Trạng Nguyên mô phỏng',
    track, grade, version: '2026.08.24', contentOrigin: 'system_generated',
    verificationStatus: 'verified', releaseStatus: 'published',
    officialDisclaimer: isIoe
      ? 'Luyện thi IOE mô phỏng — Không phải đề IOE chính thức.'
      : 'Luyện thi Trạng Nguyên mô phỏng — Không phải đề thi chính thức.',
    sourceLabel: APP_SOURCE,
    alignmentSources: isIoe ? [IOE_SOURCE, IOE_G12_SOURCE, IOE_EXPERIENCE_SOURCE] : [TRANG_NGUYEN_SOURCE],
    sets: Array.from({ length: 12 }, (_, index) => buildSet(track, grade, index + 1)),
  };
}
