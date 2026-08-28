import { GradeLevel, Question } from '../../../types/index.ts';
import { CurriculumTopic } from '../types.ts';

// Comprehensive Vocabulary & Visual Dictionary for Primary English (SGK Global Success)
interface VocabItem {
  word: string;
  display: string;
  category: string;
  vietnamese: string;
  imagePath?: string;
}

const SGK_OFFICIAL_IMAGES: Record<string, string> = {
  // Grade 2 Unit 1 (At my birthday party - Popcorn, Pasta, Pizza)
  popcorn: '/images/sgk_english/g2/u1_popcorn_hd.png',
  pasta: '/images/sgk_english/g2/u1_pasta_hd.png',
  pizza: '/images/sgk_english/g2/u1_pizza_hd.png',
  // Grade 2 Unit 2 (In the backyard - Kite, Bike, Kitten)
  kite: '/images/sgk_english/g2/u2_kite_hd.png',
  bike: '/images/sgk_english/g2/u2_bike_hd.png',
  kitten: '/images/sgk_english/g2/u2_kitten_hd.png',
  // Grade 2 Unit 3 (At the seaside - Sail, Sand, Sea)
  sail: '/images/sgk_english/g2/u3_sail_hd.png',
  'sailing boat': '/images/sgk_english/g2/u3_sail_hd.png',
  sand: '/images/sgk_english/g2/u3_sand_hd.png',
  sea: '/images/sgk_english/g2/u3_sea_hd.png',
  // Grade 1 Unit 1 (In the school playground - Ball, Bike)
  ball: '/images/sgk_english/g1/u1_ball_hd.png',
  // Grade 1 Unit 2 (In the dining room - Cake, Car, Cat)
  cake: '/images/sgk_english/g1/u2_cake_hd.png',
  car: '/images/sgk_english/g1/u2_car_hd.png',
  cat: '/images/sgk_english/g1/u2_cat_hd.png',
  // Grade 3 Unit 1 (Hello, Goodbye)
  hello: '/images/sgk_english/g3/u1_hello.png',
  goodbye: '/images/sgk_english/g3/u1_goodbye.png',
  // Grade 3 Unit 4 (Our bodies)
  eye: '/images/sgk_english/g3/u4_eye.png',
  ear: '/images/sgk_english/g3/u4_ear.png',
  nose: '/images/sgk_english/g3/u4_nose.png',
  mouth: '/images/sgk_english/g3/u4_mouth.png',
};

const ENGLISH_VOCAB_DICT: Record<string, VocabItem> = {
  // Food & Drinks & Fruits
  popcorn: { word: 'popcorn', display: 'Popcorn', category: 'food', vietnamese: 'bắp rang bơ' },
  pasta: { word: 'pasta', display: 'Pasta', category: 'food', vietnamese: 'mì Ý' },
  pizza: { word: 'pizza', display: 'Pizza', category: 'food', vietnamese: 'bánh pizza' },
  cake: { word: 'cake', display: 'Cake', category: 'food', vietnamese: 'bánh ngọt' },
  chips: { word: 'chips', display: 'Chips', category: 'food', vietnamese: 'khoai tây chiên' },
  fish: { word: 'fish', display: 'Fish', category: 'food', vietnamese: 'cá' },
  milk: { word: 'milk', display: 'Milk', category: 'drink', vietnamese: 'sữa tươi' },
  chicken: { word: 'chicken', display: 'Chicken', category: 'food', vietnamese: 'thịt gà' },
  apple: { word: 'apple', display: 'Apple', category: 'fruit', vietnamese: 'quả táo' },
  banana: { word: 'banana', display: 'Banana', category: 'fruit', vietnamese: 'quả chuối' },
  orange: { word: 'orange', display: 'Orange', category: 'fruit', vietnamese: 'quả cam' },
  lemon: { word: 'lemon', display: 'Lemon', category: 'fruit', vietnamese: 'quả chanh' },
  mango: { word: 'mango', display: 'Mango', category: 'fruit', vietnamese: 'quả xoài' },
  grapes: { word: 'grapes', display: 'Grapes', category: 'fruit', vietnamese: 'chùm nho' },
  bread: { word: 'bread', display: 'Bread', category: 'food', vietnamese: 'bánh mì' },
  rice: { word: 'rice', display: 'Rice', category: 'food', vietnamese: 'cơm' },
  water: { word: 'water', display: 'Water', category: 'drink', vietnamese: 'nước uống' },
  watermelon: { word: 'watermelon', display: 'Watermelon', category: 'fruit', vietnamese: 'dưa hấu' },
  'water spinach': { word: 'water spinach', display: 'Water spinach', category: 'food', vietnamese: 'rau muống' },
  juice: { word: 'juice', display: 'Juice', category: 'drink', vietnamese: 'nước ép hoa quả' },
  jelly: { word: 'jelly', display: 'Jelly', category: 'food', vietnamese: 'thạch dẻo' },
  jam: { word: 'jam', display: 'Jam', category: 'food', vietnamese: 'mứt dâu' },
  yogurt: { word: 'yogurt', display: 'Yogurt', category: 'food', vietnamese: 'sữa chua' },
  coffee: { word: 'coffee', display: 'Coffee', category: 'drink', vietnamese: 'cà phê' },
  tea: { word: 'tea', display: 'Tea', category: 'drink', vietnamese: 'trà' },

  // Toys & Hobbies & Vehicles
  'yo-yo': { word: 'yo-yo', display: 'Yo-yo', category: 'toy', vietnamese: 'đồ chơi yo-yo' },
  yoyo: { word: 'yoyo', display: 'Yo-yo', category: 'toy', vietnamese: 'đồ chơi yo-yo' },
  ball: { word: 'ball', display: 'Ball', category: 'toy', vietnamese: 'quả bóng' },
  football: { word: 'football', display: 'Football', category: 'sport', vietnamese: 'bóng đá' },
  volleyball: { word: 'volleyball', display: 'Volleyball', category: 'sport', vietnamese: 'bóng chuyền' },
  basketball: { word: 'basketball', display: 'Basketball', category: 'sport', vietnamese: 'bóng rổ' },
  badminton: { word: 'badminton', display: 'Badminton', category: 'sport', vietnamese: 'cầu lông' },
  swimming: { word: 'swimming', display: 'Swimming', category: 'sport', vietnamese: 'bơi lội' },
  singing: { word: 'singing', display: 'Singing', category: 'hobby', vietnamese: 'ca hát' },
  dancing: { word: 'dancing', display: 'Dancing', category: 'hobby', vietnamese: 'nhảy múa' },
  drawing: { word: 'drawing', display: 'Drawing', category: 'hobby', vietnamese: 'vẽ tranh' },
  reading: { word: 'reading', display: 'Reading books', category: 'hobby', vietnamese: 'đọc sách' },
  kite: { word: 'kite', display: 'Kite', category: 'toy', vietnamese: 'con diều' },
  robot: { word: 'robot', display: 'Robot', category: 'toy', vietnamese: 'người máy' },
  doll: { word: 'doll', display: 'Doll', category: 'toy', vietnamese: 'búp bê' },
  box: { word: 'box', display: 'Box', category: 'toy', vietnamese: 'chiếc hộp' },
  car: { word: 'car', display: 'Car', category: 'vehicle', vietnamese: 'xe ô tô' },
  bus: { word: 'bus', display: 'Bus', category: 'vehicle', vietnamese: 'xe buýt' },
  bike: { word: 'bike', display: 'Bike', category: 'vehicle', vietnamese: 'xe đạp' },
  bicycle: { word: 'bicycle', display: 'Bicycle', category: 'vehicle', vietnamese: 'xe đạp' },
  boat: { word: 'boat', display: 'Boat', category: 'vehicle', vietnamese: 'thuyền' },
  'sailing boat': { word: 'sailing boat', display: 'Sailing boat', category: 'vehicle', vietnamese: 'thuyền buồm' },
  sail: { word: 'sail', display: 'Sail', category: 'vehicle', vietnamese: 'cánh buồm' },
  yacht: { word: 'yacht', display: 'Yacht', category: 'vehicle', vietnamese: 'du thuyền' },
  van: { word: 'van', display: 'Van', category: 'vehicle', vietnamese: 'xe tải nhỏ' },
  taxi: { word: 'taxi', display: 'Taxi', category: 'vehicle', vietnamese: 'xe tắc xi' },
  plane: { word: 'plane', display: 'Plane', category: 'vehicle', vietnamese: 'máy bay' },
  train: { word: 'train', display: 'Train', category: 'vehicle', vietnamese: 'tàu hỏa' },

  // Animals & Pets
  cat: { word: 'cat', display: 'Cat', category: 'animal', vietnamese: 'con mèo' },
  kitten: { word: 'kitten', display: 'Kitten', category: 'animal', vietnamese: 'mèo con' },
  dog: { word: 'dog', display: 'Dog', category: 'animal', vietnamese: 'chú cún' },
  puppy: { word: 'puppy', display: 'Puppy', category: 'animal', vietnamese: 'cún con' },
  duck: { word: 'duck', display: 'Duck', category: 'animal', vietnamese: 'con vịt' },
  goat: { word: 'goat', display: 'Goat', category: 'animal', vietnamese: 'con dê' },
  pony: { word: 'pony', display: 'Pony', category: 'animal', vietnamese: 'ngựa con' },
  horse: { word: 'horse', display: 'Horse', category: 'animal', vietnamese: 'con ngựa' },
  cow: { word: 'cow', display: 'Cow', category: 'animal', vietnamese: 'con bò sữa' },
  ox: { word: 'ox', display: 'Ox', category: 'animal', vietnamese: 'con bò đực' },
  fox: { word: 'fox', display: 'Fox', category: 'animal', vietnamese: 'con cáo' },
  frog: { word: 'frog', display: 'Frog', category: 'animal', vietnamese: 'chú ếch' },
  bird: { word: 'bird', display: 'Bird', category: 'animal', vietnamese: 'chú chim' },
  parrot: { word: 'parrot', display: 'Parrot', category: 'animal', vietnamese: 'con vẹt' },
  rabbit: { word: 'rabbit', display: 'Rabbit', category: 'animal', vietnamese: 'chú thỏ' },
  mouse: { word: 'mouse', display: 'Mouse', category: 'animal', vietnamese: 'chú chuột' },
  monkey: { word: 'monkey', display: 'Monkey', category: 'animal', vietnamese: 'chú khỉ' },
  tiger: { word: 'tiger', display: 'Tiger', category: 'animal', vietnamese: 'con hổ' },
  lion: { word: 'lion', display: 'Lion', category: 'animal', vietnamese: 'sư tử' },
  elephant: { word: 'elephant', display: 'Elephant', category: 'animal', vietnamese: 'chú voi' },
  giraffe: { word: 'giraffe', display: 'Giraffe', category: 'animal', vietnamese: 'hươu cao cổ' },
  zebra: { word: 'zebra', display: 'Zebra', category: 'animal', vietnamese: 'ngựa vằn' },
  bear: { word: 'bear', display: 'Bear', category: 'animal', vietnamese: 'chú gấu' },
  turtle: { word: 'turtle', display: 'Turtle', category: 'animal', vietnamese: 'con rùa' },
  yak: { word: 'yak', display: 'Yak', category: 'animal', vietnamese: 'bò Tây Tạng' },

  // School & Classroom & Concepts
  book: { word: 'book', display: 'Book', category: 'school', vietnamese: 'quyển sách' },
  pen: { word: 'pen', display: 'Pen', category: 'school', vietnamese: 'bút mực' },
  pencil: { word: 'pencil', display: 'Pencil', category: 'school', vietnamese: 'bút chì' },
  ruler: { word: 'ruler', display: 'Ruler', category: 'school', vietnamese: 'thước kẻ' },
  eraser: { word: 'eraser', display: 'Eraser', category: 'school', vietnamese: 'cục tẩy' },
  bag: { word: 'bag', display: 'Bag', category: 'school', vietnamese: 'cặp sách' },
  schoolbag: { word: 'schoolbag', display: 'Schoolbag', category: 'school', vietnamese: 'cặp đi học' },
  desk: { word: 'desk', display: 'Desk', category: 'school', vietnamese: 'bàn học' },
  door: { word: 'door', display: 'Door', category: 'home', vietnamese: 'cửa ra vào' },
  window: { word: 'window', display: 'Window', category: 'home', vietnamese: 'cửa sổ' },
  bell: { word: 'bell', display: 'Bell', category: 'school', vietnamese: 'chuông' },
  clock: { word: 'clock', display: 'Clock', category: 'time', vietnamese: 'đồng hồ' },
  classroom: { word: 'classroom', display: 'Classroom', category: 'school', vietnamese: 'lớp học' },
  library: { word: 'library', display: 'Library', category: 'school', vietnamese: 'thư viện' },
  playground: { word: 'playground', display: 'Playground', category: 'school', vietnamese: 'sân chơi' },
  gym: { word: 'gym', display: 'Gym', category: 'school', vietnamese: 'phòng thể dục' },
  question: { word: 'question', display: 'Question', category: 'school', vietnamese: 'câu hỏi' },
  queen: { word: 'queen', display: 'Queen', category: 'people', vietnamese: 'nữ hoàng' },
  quilt: { word: 'quilt', display: 'Quilt', category: 'home', vietnamese: 'chăn bông' },
  quiet: { word: 'quiet', display: 'Quiet', category: 'action', vietnamese: 'yên tĩnh' },

  // Body Parts
  eye: { word: 'eye', display: 'Eye', category: 'body', vietnamese: 'con mắt' },
  ear: { word: 'ear', display: 'Ear', category: 'body', vietnamese: 'cái tai' },
  nose: { word: 'nose', display: 'Nose', category: 'body', vietnamese: 'chiếc mũi' },
  mouth: { word: 'mouth', display: 'Mouth', category: 'body', vietnamese: 'cái miệng' },
  face: { word: 'face', display: 'Face', category: 'body', vietnamese: 'khuôn mặt' },
  hand: { word: 'hand', display: 'Hand', category: 'body', vietnamese: 'bàn tay' },
  arm: { word: 'arm', display: 'Arm', category: 'body', vietnamese: 'cánh tay' },
  leg: { word: 'leg', display: 'Leg', category: 'body', vietnamese: 'cẳng chân' },
  foot: { word: 'foot', display: 'Foot', category: 'body', vietnamese: 'bàn chân' },
  hair: { word: 'hair', display: 'Hair', category: 'body', vietnamese: 'mái tóc' },

  // Places & Living Environments (Grade 4 & 5)
  flat: { word: 'flat', display: 'Flat', category: 'place', vietnamese: 'căn hộ' },
  floor: { word: 'floor', display: 'Floor', category: 'place', vietnamese: 'tầng lầu' },
  tower: { word: 'tower', display: 'Tower', category: 'place', vietnamese: 'tòa tháp' },
  lane: { word: 'lane', display: 'Lane', category: 'place', vietnamese: 'ngõ / hẻm' },
  street: { word: 'street', display: 'Street', category: 'place', vietnamese: 'con phố' },
  avenue: { word: 'avenue', display: 'Avenue', category: 'place', vietnamese: 'đại lộ' },
  address: { word: 'address', display: 'Address', category: 'place', vietnamese: 'địa chỉ' },
  hometown: { word: 'hometown', display: 'Hometown', category: 'place', vietnamese: 'quê hương' },
  city: { word: 'city', display: 'City', category: 'place', vietnamese: 'thành phố' },
  town: { word: 'town', display: 'Town', category: 'place', vietnamese: 'thị trấn' },
  village: { word: 'village', display: 'Village', category: 'place', vietnamese: 'ngôi làng' },
  countryside: { word: 'countryside', display: 'Countryside', category: 'place', vietnamese: 'vùng quê' },

  // Countries & Nationalities
  vietnam: { word: 'vietnam', display: 'Viet Nam', category: 'country', vietnamese: 'nước Việt Nam' },
  america: { word: 'america', display: 'America', category: 'country', vietnamese: 'nước Mỹ' },
  england: { word: 'england', display: 'England', category: 'country', vietnamese: 'nước Anh' },
  japan: { word: 'japan', display: 'Japan', category: 'country', vietnamese: 'nước Nhật Bản' },
  australia: { word: 'australia', display: 'Australia', category: 'country', vietnamese: 'nước Úc' },

  // Jobs
  doctor: { word: 'doctor', display: 'Doctor', category: 'job', vietnamese: 'bác sĩ' },
  teacher: { word: 'teacher', display: 'Teacher', category: 'job', vietnamese: 'giáo viên' },
  farmer: { word: 'farmer', display: 'Farmer', category: 'job', vietnamese: 'bác nông dân' },
  cook: { word: 'cook', display: 'Cook', category: 'job', vietnamese: 'đầu bếp' },
  pilot: { word: 'pilot', display: 'Pilot', category: 'job', vietnamese: 'phi công' },
  nurse: { word: 'nurse', display: 'Nurse', category: 'job', vietnamese: 'y tá' },
  architect: { word: 'architect', display: 'Architect', category: 'job', vietnamese: 'kiến trúc sư' },
  writer: { word: 'writer', display: 'Writer', category: 'job', vietnamese: 'nhà văn' },
  astronaut: { word: 'astronaut', display: 'Astronaut', category: 'job', vietnamese: 'phi hành gia' },
  scientist: { word: 'scientist', display: 'Scientist', category: 'job', vietnamese: 'nhà khoa học' },

  // Greetings
  hello: { word: 'hello', display: 'Hello', category: 'greeting', vietnamese: 'xin chào' },
  goodbye: { word: 'goodbye', display: 'Goodbye', category: 'greeting', vietnamese: 'tạm biệt' },
};

// Helper to build natural English sentence for each vocabulary category
function buildNaturalSentence(item: VocabItem, topic: CurriculumTopic): string {
  const w = item.word.toLowerCase();
  const desc = topic.description.toLowerCase();

  // If topic has explicit sentence template, adapt to it
  if (desc.includes('i have a') || desc.includes('i have')) {
    return `I have a ${w}.`;
  }
  if (desc.includes('i like')) {
    if (item.category === 'food' || item.category === 'fruit' || item.category === 'drink' || item.category === 'sport' || item.category === 'hobby') {
      return `I like ${w}.`;
    }
  }

  // Categorical natural sentence construction
  switch (item.category) {
    case 'food':
    case 'fruit':
    case 'drink':
      return `I like ${w}.`;
    case 'toy':
    case 'animal':
      return `I have a ${w}.`;
    case 'clothes':
      return `I am wearing a ${w}.`;
    case 'school':
      if (['classroom', 'library', 'playground', 'gym', 'school'].includes(w)) {
        return `This is our ${w}.`;
      }
      if (w === 'question') {
        return `May I ask a question?`;
      }
      return `I have a ${w}.`;
    case 'vehicle':
      return `Look at the ${w}.`;
    case 'body':
      return `Touch your ${w}.`;
    case 'place':
      if (['flat', 'tower', 'house', 'village', 'city', 'town'].includes(w)) {
        return `I live in a ${w}.`;
      }
      return `Look at the ${w}.`;
    case 'job':
      return `He is a ${w}.`;
    case 'country':
      return `She is from ${item.display}.`;
    case 'greeting':
      return `Say ${w} to your friend.`;
    default:
      return `Look at the ${w}.`;
  }
}

// Helper for vocabulary retrieval
function getVocabVisual(rawWord: string): VocabItem {
  const clean = rawWord.toLowerCase().trim().replace(/[^a-z0-9 -]/g, '');
  let item = ENGLISH_VOCAB_DICT[clean];
  if (!item) {
    for (const [key, val] of Object.entries(ENGLISH_VOCAB_DICT)) {
      if (clean.includes(key) || key.includes(clean)) {
        item = { ...val, word: rawWord, display: rawWord };
        break;
      }
    }
  }
  if (!item) {
    const formattedDisplay = rawWord.charAt(0).toUpperCase() + rawWord.slice(1);
    item = {
      word: clean || rawWord.toLowerCase(),
      display: formattedDisplay,
      category: 'general',
      vietnamese: formattedDisplay,
    };
  }
  const officialImg = SGK_OFFICIAL_IMAGES[clean] || SGK_OFFICIAL_IMAGES[item.word.toLowerCase()];
  if (officialImg) {
    return {
      ...item,
      imagePath: officialImg,
    };
  }
  return item;
}

// Extract target vocabulary list from topic description
function extractLessonVocab(topic: CurriculumTopic): VocabItem[] {
  const items: VocabItem[] = [];

  // 1. Match "Letter X/x: Word1, Word2, Word3"
  const phonicsMatch = topic.description.match(/^Letter\s+[A-Za-z]\/[A-Za-z]:\s*([^.]+)\./i);
  if (phonicsMatch) {
    const words = phonicsMatch[1].split(',').map((w) => w.trim().replace(/[.]/g, '')).filter(Boolean);
    words.forEach((w) => items.push(getVocabVisual(w)));
  }

  // 2. Match "Vocabulary: Word1, Word2, Word3"
  const vocabMatch = topic.description.match(/Vocabulary:\s*([^.]+)\./i);
  if (vocabMatch) {
    const words = vocabMatch[1].split(',').map((w) => w.trim().replace(/[.]/g, '')).filter(Boolean);
    words.forEach((w) => items.push(getVocabVisual(w)));
  }

  // 3. Scan recognized words in title, summary, description, keyPoints
  const fullText = `${topic.title} ${topic.summary} ${topic.description} ${topic.keyPoints.join(' ')}`;
  for (const [key, item] of Object.entries(ENGLISH_VOCAB_DICT)) {
    const regex = new RegExp(`\\b${key}\\b`, 'i');
    if (regex.test(fullText)) {
      items.push(item);
    }
  }

  // Deduplicate
  const seen = new Set<string>();
  const unique = items.filter((it) => {
    const k = it.word.toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });

  if (unique.length >= 2) {
    return unique;
  }

  // Parse words from title tokens
  const titleTokens = topic.title
    .replace(/^Unit\s+\d+\s*:\s*/i, '')
    .replace(/\(.*?\)/g, '')
    .split(/[,&/\s]+/)
    .map((w) => w.trim().toLowerCase())
    .filter((w) => w.length > 2);

  for (const tok of titleTokens) {
    unique.push(getVocabVisual(tok));
  }

  return unique.length >= 2 ? unique : [
    getVocabVisual('hello'),
    getVocabVisual('book'),
    getVocabVisual('friend'),
  ];
}

// Extract phonics sound or letter
function extractPhonicsInfo(topic: CurriculumTopic): { letter: string; sound: string } | null {
  const match = topic.title.match(/Letter\s+([A-Za-z])(?:\s*-\s*([A-Za-z]))?/i)
    || topic.description.match(/Letter\s+([A-Za-z])\/([A-Za-z])/i);
  
  if (match) {
    const letter = match[1].toUpperCase();
    const sounds: Record<string, string> = {
      A: '/æ/', B: '/b/', C: '/k/', D: '/d/', E: '/e/', F: '/f/', G: '/g/',
      H: '/h/', I: '/ɪ/', J: '/dʒ/', K: '/k/', L: '/l/', M: '/m/', N: '/n/',
      O: '/ɒ/', P: '/p/', Q: '/kw/', R: '/r/', S: '/s/', T: '/t/', U: '/ʌ/',
      V: '/v/', W: '/w/', X: '/ks/', Y: '/j/', Z: '/z/',
    };
    return { letter, sound: sounds[letter] || `/${letter.toLowerCase()}/` };
  }
  return null;
}

export function generateEnglishQuestions(topic: CurriculumTopic, _grade: GradeLevel): Question[] {
  const vocabList = extractLessonVocab(topic);
  const phonics = extractPhonicsInfo(topic);

  const w1 = vocabList[0];
  const w2 = vocabList[1] || vocabList[0];
  const w3 = vocabList[2] || vocabList[0];
  const w4 = vocabList[3] || vocabList[0];

  // Helper to shuffle deterministic options
  const makeOptions = (correct: string, distractors: string[], seedOffset = 0) => {
    const cleanDistractors = distractors
      .filter((d) => d.toLowerCase().trim() !== correct.toLowerCase().trim())
      .slice(0, 2);

    const rawOptions = [correct, ...cleanDistractors];
    const shift = (topic.lessonNumber + seedOffset) % rawOptions.length;
    const rotated = [...rawOptions.slice(shift), ...rawOptions.slice(0, shift)];

    return rotated.map((label, index) => ({
      id: String.fromCharCode(97 + index),
      label,
      isCorrect: label === correct,
    }));
  };

  // -------------------------------------------------------------
  // QUESTION 1: Look at picture (if official image exists) or Identify vocabulary
  // -------------------------------------------------------------
  const q1Distractors = vocabList.length >= 3
    ? [vocabList[1].display, vocabList[2].display]
    : ['Book', 'Apple'];

  const q1HasOfficialImage = Boolean(w1.imagePath);
  const q1Prompt = q1HasOfficialImage
    ? `Look at the picture. What is this?`
    : `Which word means “${w1.vietnamese}” in English?`;

  const q1: Question = {
    id: `${topic.id}-q1`,
    type: 'bubble_choice',
    questionText: q1Prompt,
    audioText: q1Prompt,
    image: w1.imagePath, // ONLY verified SGK illustration! No confusing emojis.
    hint: `Từ tiếng Anh đúng: ${w1.vietnamese} (${w1.display}).`,
    points: 10,
    contentOrigin: 'sgk_reference',
    options: makeOptions(w1.display, q1Distractors, 0),
  };

  // -------------------------------------------------------------
  // QUESTION 2: Complete the Natural Sentence (Grammatically pristine!)
  // -------------------------------------------------------------
  const sentence2 = buildNaturalSentence(w2, topic);
  const promptSentence2 = sentence2.replace(new RegExp(`\\b${w2.word}\\b`, 'i'), '___');
  const q2Distractors = vocabList.length >= 3
    ? [w1.word, w3.word]
    : ['pencil', 'book'];

  const q2HasOfficialImage = Boolean(w2.imagePath);
  const q2Prompt = q2HasOfficialImage
    ? `Look at the picture. Complete the sentence:\n“${promptSentence2}”`
    : `Complete the sentence:\n“${promptSentence2}”`;

  const q2: Question = {
    id: `${topic.id}-q2`,
    type: 'bubble_choice',
    questionText: q2Prompt,
    audioText: q2Prompt.replace('\n', ' '),
    image: w2.imagePath, // ONLY verified SGK illustration!
    hint: `Hoàn thành câu: “${sentence2}”`,
    points: 10,
    contentOrigin: 'sgk_reference',
    options: makeOptions(w2.word, q2Distractors, 1),
  };

  // -------------------------------------------------------------
  // QUESTION 3: Phonics Sound / Spelling
  // -------------------------------------------------------------
  let q3QuestionText: string;
  let q3CorrectAnswer: string;
  let q3Distractors: string[];
  let q3Hint: string;

  if (phonics) {
    const targetWord = topic.id === 'eng-g1-u5' ? 'fish' : w3.display;
    q3QuestionText = `Which sound (${phonics.sound}) and Letter ${phonics.letter}/${phonics.letter.toLowerCase()} does the word “${targetWord}” have?`;
    q3CorrectAnswer = `Letter ${phonics.letter}/${phonics.letter.toLowerCase()} (${phonics.sound})`;
    const otherLetters = ['B', 'C', 'D', 'P', 'S', 'M', 'T', 'G'].filter((l) => l !== phonics.letter);
    q3Distractors = [
      `Letter ${otherLetters[0]}/${otherLetters[0].toLowerCase()} (/${otherLetters[0].toLowerCase()}/)`,
      `Letter ${otherLetters[1]}/${otherLetters[1].toLowerCase()} (/${otherLetters[1].toLowerCase()}/)`,
    ];
    q3Hint = `Từ “${targetWord}” chứa chữ cái ${phonics.letter}/${phonics.letter.toLowerCase()}, phát âm là ${phonics.sound}!`;
  } else {
    q3QuestionText = `Which word is spelled correctly for “${w3.vietnamese}”?`;
    q3CorrectAnswer = w3.display;
    q3Distractors = [
      w3.display.slice(0, -1) + 'e',
      w3.display + 's',
    ];
    q3Hint = `Từ đúng chính tả là “${w3.display}”.`;
  }

  const q3: Question = {
    id: `${topic.id}-q3`,
    type: 'bubble_choice',
    questionText: q3QuestionText,
    audioText: q3QuestionText,
    image: w3.imagePath, // ONLY verified SGK illustration!
    hint: q3Hint,
    points: 10,
    contentOrigin: 'sgk_reference',
    options: makeOptions(q3CorrectAnswer, q3Distractors, 2),
  };

  // -------------------------------------------------------------
  // QUESTION 4: Picture Description or Sentence Choice
  // -------------------------------------------------------------
  const sentence4 = buildNaturalSentence(w4, topic);
  const q4Distractors = [
    `I see a robot in the room.`,
    `We are playing in the park.`,
  ].filter((s) => !s.toLowerCase().includes(w4.word.toLowerCase()));

  const q4HasOfficialImage = Boolean(w4.imagePath);
  const q4Prompt = q4HasOfficialImage
    ? `Look at the picture. Which sentence describes it best?`
    : `Choose the correct sentence about “${w4.display}”:`;

  const q4: Question = {
    id: `${topic.id}-q4`,
    type: 'bubble_choice',
    questionText: q4Prompt,
    audioText: q4Prompt,
    image: w4.imagePath, // ONLY verified SGK illustration!
    hint: `Câu đúng: “${sentence4}”`,
    points: 10,
    contentOrigin: 'sgk_reference',
    options: makeOptions(sentence4, q4Distractors, 0),
  };

  // -------------------------------------------------------------
  // QUESTION 5: Vietnamese to English Vocabulary Meaning
  // -------------------------------------------------------------
  const q5Distractors = vocabList.length >= 3
    ? [vocabList[1].display, vocabList[2].display]
    : ['Desk', 'Ruler'];

  const q5: Question = {
    id: `${topic.id}-q5`,
    type: 'bubble_choice',
    questionText: `How do you say “${w1.vietnamese}” in English?`,
    audioText: `How do you say ${w1.vietnamese} in English?`,
    image: w1.imagePath,
    hint: `“${w1.vietnamese}” trong tiếng Anh đọc là “${w1.display}”.`,
    points: 10,
    contentOrigin: 'sgk_reference',
    options: makeOptions(w1.display, q5Distractors, 1),
  };

  return [q1, q2, q3, q4, q5];
}
