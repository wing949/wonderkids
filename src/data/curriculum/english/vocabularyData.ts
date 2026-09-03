import { GradeLevel } from '../../../types';
import { OFFICIAL_ENGLISH_BOOKS } from './officialEnglishCatalog';
import { ENGLISH_READING_PASSAGES } from './readingPassages';
import flashcardImageMap from './flashcardImageMap.json';
import { GRADE_2_OFFICIAL_FLASHCARDS } from './grade2PdfFlashcardsData';
import { getSentenceAnnotation } from './sentenceAnnotations';

export interface GlobalSuccessVocabularyItem {
  id: string;
  word: string;
  phonetic: string;
  meaning: string;
  grade: GradeLevel;
  semester: 1 | 2;
  unitNumber: number;
  unitId: string;
  unitTitle: string;
  textbookRef: string;
  readerUrl: string;
  exampleSentence: string;
  exampleSentencePhonetic?: string;
  exampleSentenceTranslation?: string;
  category: string;
  emoji: string;
  imageUrl?: string;
}

export interface VocabularyCategory {
  id: string;
  label: string;
  icon: string;
}

export const VOCABULARY_CATEGORIES: VocabularyCategory[] = [
  { id: 'all', label: 'Tất cả chủ đề', icon: '🌈' },
  { id: 'school', label: 'Trường học & Đồ dùng', icon: '🎒' },
  { id: 'family', label: 'Gia đình & Con người', icon: '👨‍👩‍👧' },
  { id: 'animals', label: 'Động vật & Thú cưng', icon: '🐾' },
  { id: 'food', label: 'Món ăn & Đồ uống', icon: '🍎' },
  { id: 'toys', label: 'Đồ chơi & Trò chơi', icon: '🧸' },
  { id: 'house', label: 'Ngôi nhà & Phòng ốc', icon: '🏡' },
  { id: 'nature', label: 'Thiên nhiên & Thời tiết', icon: '☀️' },
  { id: 'activities', label: 'Hoạt động & Thể thao', icon: '⚽' },
  { id: 'jobs', label: 'Nghề nghiệp & Ước mơ', icon: '💼' },
  { id: 'transport', label: 'Phương tiện giao thông', icon: '🚗' },
  { id: 'clothes', label: 'Trang phục & Phụ kiện', icon: '👕' },
  { id: 'health', label: 'Cơ thể & Sức khỏe', icon: '💪' },
  { id: 'greetings', label: 'Giao tiếp & Đời sống', icon: '💬' },
];

const WORD_EMOJI_MAP: Record<string, { emoji: string; category: string }> = {
  // Common Grade 1-5 words
  ball: { emoji: '⚽', category: 'toys' },
  bike: { emoji: '🚲', category: 'toys' },
  book: { emoji: '📖', category: 'school' },
  boy: { emoji: '👦', category: 'family' },
  cake: { emoji: '🎂', category: 'food' },
  car: { emoji: '🚗', category: 'toys' },
  cat: { emoji: '🐱', category: 'animals' },
  cup: { emoji: '☕', category: 'food' },
  apple: { emoji: '🍎', category: 'food' },
  bag: { emoji: '🎒', category: 'school' },
  can: { emoji: '🥫', category: 'food' },
  hat: { emoji: '👒', category: 'clothes' },
  door: { emoji: '🚪', category: 'house' },
  dog: { emoji: '🐶', category: 'animals' },
  duck: { emoji: '🦆', category: 'animals' },
  desk: { emoji: '🪑', category: 'school' },
  fish: { emoji: '🐟', category: 'animals' },
  chips: { emoji: '🍟', category: 'food' },
  milk: { emoji: '🥛', category: 'food' },
  chicken: { emoji: '🍗', category: 'food' },
  pen: { emoji: '🖊️', category: 'school' },
  pencil: { emoji: '✏️', category: 'school' },
  bell: { emoji: '🔔', category: 'school' },
  red: { emoji: '🔴', category: 'school' },
  girl: { emoji: '👧', category: 'family' },
  garden: { emoji: '🌻', category: 'nature' },
  gate: { emoji: '🚪', category: 'house' },
  park: { emoji: '🌳', category: 'nature' },
  shop: { emoji: '🏪', category: 'greetings' },
  zoo: { emoji: '🦁', category: 'animals' },
  lake: { emoji: '🌊', category: 'nature' },
  boat: { emoji: '⛵', category: 'transport' },
  bus: { emoji: '🚌', category: 'transport' },
  train: { emoji: '🚂', category: 'transport' },
  plane: { emoji: '✈️', category: 'transport' },
  doll: { emoji: '🪆', category: 'toys' },
  kite: { emoji: '🪁', category: 'toys' },
  football: { emoji: '⚽', category: 'activities' },
  home: { emoji: '🏡', category: 'house' },
  popcorn: { emoji: '🍿', category: 'food' },
  pasta: { emoji: '🍝', category: 'food' },
  pizza: { emoji: '🍕', category: 'food' },
  party: { emoji: '🎉', category: 'activities' },
  hello: { emoji: '👋', category: 'greetings' },
  hi: { emoji: '👋', category: 'greetings' },
  friend: { emoji: '🤝', category: 'family' },
  family: { emoji: '👨‍👩‍👧', category: 'family' },
  father: { emoji: '👨', category: 'family' },
  mother: { emoji: '👩', category: 'family' },
  brother: { emoji: '👦', category: 'family' },
  sister: { emoji: '👧', category: 'family' },
  grandfather: { emoji: '👴', category: 'family' },
  grandmother: { emoji: '👵', category: 'family' },
  teacher: { emoji: '👩‍🏫', category: 'jobs' },
  doctor: { emoji: '👨‍⚕️', category: 'jobs' },
  farmer: { emoji: '👨‍🌾', category: 'jobs' },
  cook: { emoji: '👨‍🍳', category: 'jobs' },
  nurse: { emoji: '👩‍⚕️', category: 'jobs' },
  driver: { emoji: '🧑‍✈️', category: 'jobs' },
  room: { emoji: '🛋️', category: 'house' },
  bedroom: { emoji: '🛏️', category: 'house' },
  kitchen: { emoji: '🍳', category: 'house' },
  bathroom: { emoji: '🛁', category: 'house' },
  living_room: { emoji: '🛋️', category: 'house' },
  sun: { emoji: '☀️', category: 'nature' },
  rain: { emoji: '🌧️', category: 'nature' },
  wind: { emoji: '💨', category: 'nature' },
  cloud: { emoji: '☁️', category: 'nature' },
  weather: { emoji: '⛅', category: 'nature' },
  spring: { emoji: '🌸', category: 'nature' },
  summer: { emoji: '🏖️', category: 'nature' },
  autumn: { emoji: '🍂', category: 'nature' },
  winter: { emoji: '❄️', category: 'nature' },
  swim: { emoji: '🏊', category: 'activities' },
  sing: { emoji: '🎤', category: 'activities' },
  dance: { emoji: '💃', category: 'activities' },
  draw: { emoji: '🎨', category: 'activities' },
  read: { emoji: '📚', category: 'activities' },
  eye: { emoji: '👁️', category: 'health' },
  ear: { emoji: '👂', category: 'health' },
  nose: { emoji: '👃', category: 'health' },
  mouth: { emoji: '👄', category: 'health' },
  hand: { emoji: '✋', category: 'health' },
  headache: { emoji: '🤕', category: 'health' },
  toothache: { emoji: '🦷', category: 'health' },
};

function inferCategoryAndEmoji(word: string, meaning: string): { category: string; emoji: string } {
  const cleanWord = word.trim().toLowerCase();
  if (WORD_EMOJI_MAP[cleanWord]) {
    return WORD_EMOJI_MAP[cleanWord];
  }

  const m = meaning.toLowerCase();

  if (m.includes('con ') || m.includes('động vật') || m.includes('thú') || m.includes('chim') || m.includes('cá ') || m.includes('chó') || m.includes('mèo') || m.includes('hổ') || m.includes('voi')) {
    return { category: 'animals', emoji: '🐾' };
  }
  if (m.includes('bánh') || m.includes('ăn') || m.includes('uống') || m.includes('trái cây') || m.includes('hoa quả') || m.includes('món') || m.includes('thịt') || m.includes('cơm')) {
    return { category: 'food', emoji: '🍎' };
  }
  if (m.includes('học') || m.includes('trường') || m.includes('sách') || m.includes('bút') || m.includes('thước') || m.includes('bảng') || m.includes('lớp') || m.includes('môn')) {
    return { category: 'school', emoji: '🎒' };
  }
  if (m.includes('bố') || m.includes('mẹ') || m.includes('anh') || m.includes('chị') || m.includes('em') || m.includes('ông') || m.includes('bà') || m.includes('bạn') || m.includes('người')) {
    return { category: 'family', emoji: '👨‍👩‍👧' };
  }
  if (m.includes('xe') || m.includes('tàu') || m.includes('máy bay') || m.includes('thuyền') || m.includes('chuyến') || m.includes('đi lại')) {
    return { category: 'transport', emoji: '🚗' };
  }
  if (m.includes('bác sĩ') || m.includes('giáo viên') || m.includes('nông dân') || m.includes('công an') || m.includes('nghề') || m.includes('thợ')) {
    return { category: 'jobs', emoji: '💼' };
  }
  if (m.includes('nhà') || m.includes('phòng') || m.includes('cửa') || m.includes('bàn') || m.includes('ghế') || m.includes('giường')) {
    return { category: 'house', emoji: '🏡' };
  }
  if (m.includes('chơi') || m.includes('bóng') || m.includes('búp bê') || m.includes('diều') || m.includes('đồ chơi')) {
    return { category: 'toys', emoji: '🧸' };
  }
  if (m.includes('áo') || m.includes('quần') || m.includes('mũ') || m.includes('giày') || m.includes('tất') || m.includes('váy')) {
    return { category: 'clothes', emoji: '👕' };
  }
  if (m.includes('mưa') || m.includes('nắng') || m.includes('gió') || m.includes('mùa') || m.includes('thời tiết') || m.includes('biển') || m.includes('núi') || m.includes('hoa') || m.includes('cây')) {
    return { category: 'nature', emoji: '☀️' };
  }
  if (m.includes('hát') || m.includes('múa') || m.includes('bơi') || m.includes('chạy') || m.includes('vẽ') || m.includes('đá bóng') || m.includes('thể thao')) {
    return { category: 'activities', emoji: '⚽' };
  }
  if (m.includes('đau') || m.includes('mắt') || m.includes('tai') || m.includes('mũi') || m.includes('miệng') || m.includes('tay') || m.includes('chân') || m.includes('khỏe') || m.includes('bệnh')) {
    return { category: 'health', emoji: '💪' };
  }

  return { category: 'greetings', emoji: '✨' };
}

function buildMasterVocabularyList(): GlobalSuccessVocabularyItem[] {
  const list: GlobalSuccessVocabularyItem[] = [];

  for (const book of OFFICIAL_ENGLISH_BOOKS) {
    const firstLessonNumber =
      book.grade <= 2
        ? book.semester === 1
          ? 1
          : 9
        : book.semester === 1
        ? 1
        : 11;

    book.units.forEach(([unitTitle, startPage], index) => {
      const lessonNumber = firstLessonNumber + index;
      const lessonId = `eng-g${book.grade}-u${lessonNumber}`;
      const passage = ENGLISH_READING_PASSAGES[lessonId];

      if (!passage || !passage.vocabularyNotes || passage.vocabularyNotes.length === 0) {
        return;
      }

      passage.vocabularyNotes.forEach((v, vIdx) => {
        const cleanWord = v.word.trim().toLowerCase();
        const foundSentence = (passage.content || []).find((line) =>
          line.toLowerCase().includes(cleanWord)
        );

        const exampleSentence =
          foundSentence ||
          (passage.content && passage.content.length > 0 ? passage.content[0] : `${v.word} is a useful English word.`);

        const { category, emoji } = inferCategoryAndEmoji(v.word, v.meaning);

        const norm = v.word.toLowerCase().trim();
        const normUnderscore = norm.replace(/\s+/g, '_');
        const normDash = norm.replace(/\s+/g, '-');
        const gMap = (flashcardImageMap as Record<string, Record<string, string>>)[`g${book.grade}`] || {};
        const g1Map = flashcardImageMap.g1 as Record<string, string>;
        const g2Map = flashcardImageMap.g2 as Record<string, string>;

        const imageUrl =
          gMap[norm] ||
          gMap[normUnderscore] ||
          gMap[normDash] ||
          g2Map[norm] ||
          g1Map[norm] ||
          g2Map[normUnderscore] ||
          g1Map[normUnderscore] ||
          undefined;

        const annot = getSentenceAnnotation(exampleSentence, v.word, v.meaning);

        list.push({
          id: `${lessonId}-w${vIdx + 1}`,
          word: v.word,
          phonetic: v.phonetic || '',
          meaning: v.meaning,
          grade: book.grade as GradeLevel,
          semester: book.semester,
          unitNumber: lessonNumber,
          unitId: lessonId,
          unitTitle: `Unit ${lessonNumber}: ${unitTitle}`,
          textbookRef: `${book.sourceBook} — Trang ${startPage}`,
          readerUrl: book.readerUrl,
          exampleSentence,
          exampleSentencePhonetic: annot.ipa,
          exampleSentenceTranslation: annot.vi,
          category,
          emoji,
          imageUrl,
        });
      });
    });
  }

  // Prepend Grade 2 Phonics flashcards (80 items) so they appear prominently
  return [...GRADE_2_OFFICIAL_FLASHCARDS, ...list];
}

export { GRADE_2_OFFICIAL_FLASHCARDS };

export const GLOBAL_SUCCESS_VOCABULARY: GlobalSuccessVocabularyItem[] = buildMasterVocabularyList();

export function getAllEnglishVocabulary(): GlobalSuccessVocabularyItem[] {
  return GLOBAL_SUCCESS_VOCABULARY;
}

export function getEnglishVocabularyByGrade(grade: GradeLevel): GlobalSuccessVocabularyItem[] {
  return GLOBAL_SUCCESS_VOCABULARY.filter((item) => item.grade === grade);
}

export function getEnglishVocabularyByUnit(unitId: string): GlobalSuccessVocabularyItem[] {
  return GLOBAL_SUCCESS_VOCABULARY.filter((item) => item.unitId === unitId);
}

export function searchEnglishVocabulary(
  query: string,
  grade?: GradeLevel,
  category?: string
): GlobalSuccessVocabularyItem[] {
  const q = query.trim().toLowerCase();
  return GLOBAL_SUCCESS_VOCABULARY.filter((item) => {
    if (grade && item.grade !== grade) return false;
    if (category && category !== 'all' && item.category !== category) return false;
    if (!q) return true;
    return (
      item.word.toLowerCase().includes(q) ||
      item.meaning.toLowerCase().includes(q) ||
      item.unitTitle.toLowerCase().includes(q) ||
      item.exampleSentence.toLowerCase().includes(q)
    );
  });
}

export function getVocabularyStats(): {
  totalWords: number;
  byGrade: Record<GradeLevel, number>;
  byCategory: Record<string, number>;
} {
  const byGrade: Record<GradeLevel, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  const byCategory: Record<string, number> = {};

  for (const item of GLOBAL_SUCCESS_VOCABULARY) {
    byGrade[item.grade] = (byGrade[item.grade] || 0) + 1;
    byCategory[item.category] = (byCategory[item.category] || 0) + 1;
  }

  return {
    totalWords: GLOBAL_SUCCESS_VOCABULARY.length,
    byGrade,
    byCategory,
  };
}

const STORAGE_KEY_VOCAB_MASTERED = 'wonderkids_vocab_mastered_v1';
const STORAGE_KEY_VOCAB_REVIEW = 'wonderkids_vocab_review_v1';

export function getMasteredWordIds(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(STORAGE_KEY_VOCAB_MASTERED);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

export function saveMasteredWordIds(ids: Set<string>): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_VOCAB_MASTERED, JSON.stringify(Array.from(ids)));
  } catch {}
}

export function getReviewWordIds(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(STORAGE_KEY_VOCAB_REVIEW);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

export function saveReviewWordIds(ids: Set<string>): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_VOCAB_REVIEW, JSON.stringify(Array.from(ids)));
  } catch {}
}
