# -*- coding: utf-8 -*-
code = '''import { GradeLevel, Question } from '../../../types/index.ts';
import { CurriculumTopic } from '../types.ts';

// Comprehensive Vocabulary & Visual Dictionary for Primary English (SGK Global Success)
interface VocabItem {
  word: string;
  display: string;
  emoji: string;
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
  // Grade 1 Unit 1 (In the school playground - Ball, Bike, Book)
  ball: '/images/sgk_english/g1/u1_ball_hd.png',
  // Grade 1 Unit 2 (In the dining room - Cake, Car, Cat)
  cake: '/images/sgk_english/g1/u2_cake_hd.png',
  car: '/images/sgk_english/g1/u2_car_hd.png',
  cat: '/images/sgk_english/g1/u2_cat_hd.png',
  // Grade 3 Unit 1 (Hello)
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
  popcorn: { word: 'popcorn', display: 'Popcorn', emoji: '🍿', category: 'food', vietnamese: 'bắp rang bơ' },
  pasta: { word: 'pasta', display: 'Pasta', emoji: '🍝', category: 'food', vietnamese: 'mì Ý' },
  pizza: { word: 'pizza', display: 'Pizza', emoji: '🍕', category: 'food', vietnamese: 'bánh pizza' },
  cake: { word: 'cake', display: 'Cake', emoji: '🎂', category: 'food', vietnamese: 'bánh ngọt' },
  chips: { word: 'chips', display: 'Chips', emoji: '🍟', category: 'food', vietnamese: 'khoai tây chiên' },
  fish: { word: 'fish', display: 'Fish', emoji: '🐟', category: 'food', vietnamese: 'cá' },
  milk: { word: 'milk', display: 'Milk', emoji: '🥛', category: 'drink', vietnamese: 'sữa tươi' },
  chicken: { word: 'chicken', display: 'Chicken', emoji: '🍗', category: 'food', vietnamese: 'thịt gà' },
  apple: { word: 'apple', display: 'Apple', emoji: '🍎', category: 'fruit', vietnamese: 'quả táo' },
  banana: { word: 'banana', display: 'Banana', emoji: '🍌', category: 'fruit', vietnamese: 'quả chuối' },
  orange: { word: 'orange', display: 'Orange', emoji: '🍊', category: 'fruit', vietnamese: 'quả cam' },
  lemon: { word: 'lemon', display: 'Lemon', emoji: '🍋', category: 'fruit', vietnamese: 'quả chanh' },
  mango: { word: 'mango', display: 'Mango', emoji: '🥭', category: 'fruit', vietnamese: 'quả xoài' },
  grapes: { word: 'grapes', display: 'Grapes', emoji: '🍇', category: 'fruit', vietnamese: 'chùm nho' },
  bread: { word: 'bread', display: 'Bread', emoji: '🍞', category: 'food', vietnamese: 'bánh mì' },
  rice: { word: 'rice', display: 'Rice', emoji: '🍚', category: 'food', vietnamese: 'cơm' },
  water: { word: 'water', display: 'Water', emoji: '💧', category: 'drink', vietnamese: 'nước uống' },
  watermelon: { word: 'watermelon', display: 'Watermelon', emoji: '🍉', category: 'fruit', vietnamese: 'dưa hấu' },
  'water spinach': { word: 'water spinach', display: 'Water spinach', emoji: '🥬', category: 'food', vietnamese: 'rau muống' },
  juice: { word: 'juice', display: 'Juice', emoji: '🧃', category: 'drink', vietnamese: 'nước ép hoa quả' },
  jelly: { word: 'jelly', display: 'Jelly', emoji: '🍮', category: 'food', vietnamese: 'thạch dẻo' },
  jam: { word: 'jam', display: 'Jam', emoji: '🍯', category: 'food', vietnamese: 'mứt dâu' },
  yogurt: { word: 'yogurt', display: 'Yogurt', emoji: '🥣', category: 'food', vietnamese: 'sữa chua' },
  coffee: { word: 'coffee', display: 'Coffee', emoji: '☕', category: 'drink', vietnamese: 'cà phê' },
  tea: { word: 'tea', display: 'Tea', emoji: '🍵', category: 'drink', vietnamese: 'trà' },

  // Toys & Hobbies & Vehicles
  'yo-yo': { word: 'yo-yo', display: 'Yo-yo', emoji: '🪀', category: 'toy', vietnamese: 'đồ chơi yo-yo' },
  yoyo: { word: 'yoyo', display: 'Yo-yo', emoji: '🪀', category: 'toy', vietnamese: 'đồ chơi yo-yo' },
  ball: { word: 'ball', display: 'Ball', emoji: '⚽', category: 'toy', vietnamese: 'quả bóng' },
  football: { word: 'football', display: 'Football', emoji: '⚽', category: 'sport', vietnamese: 'bóng đá' },
  volleyball: { word: 'volleyball', display: 'Volleyball', emoji: '🏐', category: 'sport', vietnamese: 'bóng chuyền' },
  basketball: { word: 'basketball', display: 'Basketball', emoji: '🏀', category: 'sport', vietnamese: 'bóng rổ' },
  badminton: { word: 'badminton', display: 'Badminton', emoji: '🏸', category: 'sport', vietnamese: 'cầu lông' },
  swimming: { word: 'swimming', display: 'Swimming', emoji: '🏊', category: 'sport', vietnamese: 'bơi lội' },
  singing: { word: 'singing', display: 'Singing', emoji: '🎤', category: 'hobby', vietnamese: 'ca hát' },
  dancing: { word: 'dancing', display: 'Dancing', emoji: '💃', category: 'hobby', vietnamese: 'nhảy múa' },
  drawing: { word: 'drawing', display: 'Drawing', emoji: '🎨', category: 'hobby', vietnamese: 'vẽ tranh' },
  reading: { word: 'reading', display: 'Reading books', emoji: '📖', category: 'hobby', vietnamese: 'đọc sách' },
  kite: { word: 'kite', display: 'Kite', emoji: '🪁', category: 'toy', vietnamese: 'con diều' },
  robot: { word: 'robot', display: 'Robot', emoji: '🤖', category: 'toy', vietnamese: 'người máy' },
  doll: { word: 'doll', display: 'Doll', emoji: '🪆', category: 'toy', vietnamese: 'búp bê' },
  box: { word: 'box', display: 'Box', emoji: '📦', category: 'toy', vietnamese: 'chiếc hộp' },
  car: { word: 'car', display: 'Car', emoji: '🚗', category: 'vehicle', vietnamese: 'xe ô tô' },
  bus: { word: 'bus', display: 'Bus', emoji: '🚌', category: 'vehicle', vietnamese: 'xe buýt' },
  bike: { word: 'bike', display: 'Bike', emoji: '🚲', category: 'vehicle', vietnamese: 'xe đạp' },
  bicycle: { word: 'bicycle', display: 'Bicycle', emoji: '🚲', category: 'vehicle', vietnamese: 'xe đạp' },
  boat: { word: 'boat', display: 'Boat', emoji: '⛵', category: 'vehicle', vietnamese: 'thuyền' },
  'sailing boat': { word: 'sailing boat', display: 'Sailing boat', emoji: '⛵', category: 'vehicle', vietnamese: 'thuyền buồm' },
  sail: { word: 'sail', display: 'Sail', emoji: '⛵', category: 'vehicle', vietnamese: 'cánh buồm' },
  yacht: { word: 'yacht', display: 'Yacht', emoji: '🛥️', category: 'vehicle', vietnamese: 'du thuyền' },
  van: { word: 'van', display: 'Van', emoji: '🚐', category: 'vehicle', vietnamese: 'xe tải nhỏ' },
  taxi: { word: 'taxi', display: 'Taxi', emoji: '🚕', category: 'vehicle', vietnamese: 'xe tắc xi' },
  plane: { word: 'plane', display: 'Plane', emoji: '✈️', category: 'vehicle', vietnamese: 'máy bay' },
  train: { word: 'train', display: 'Train', emoji: '🚆', category: 'vehicle', vietnamese: 'tàu hỏa' },

  // Animals & Pets
  cat: { word: 'cat', display: 'Cat', emoji: '🐱', category: 'animal', vietnamese: 'con mèo' },
  kitten: { word: 'kitten', display: 'Kitten', emoji: '🐱', category: 'animal', vietnamese: 'mèo con' },
  dog: { word: 'dog', display: 'Dog', emoji: '🐶', category: 'animal', vietnamese: 'chú cún' },
  puppy: { word: 'puppy', display: 'Puppy', emoji: '🐶', category: 'animal', vietnamese: 'cún con' },
  duck: { word: 'duck', display: 'Duck', emoji: '🦆', category: 'animal', vietnamese: 'con vịt' },
  goat: { word: 'goat', display: 'Goat', emoji: '🐐', category: 'animal', vietnamese: 'con dê' },
  pony: { word: 'pony', display: 'Pony', emoji: '🐴', category: 'animal', vietnamese: 'ngựa con' },
  horse: { word: 'horse', display: 'Horse', emoji: '🐎', category: 'animal', vietnamese: 'con ngựa' },
  cow: { word: 'cow', display: 'Cow', emoji: '🐮', category: 'animal', vietnamese: 'con bò sữa' },
  ox: { word: 'ox', display: 'Ox', emoji: '🐂', category: 'animal', vietnamese: 'con bò đực' },
  fox: { word: 'fox', display: 'Fox', emoji: '🦊', category: 'animal', vietnamese: 'con cáo' },
  frog: { word: 'frog', display: 'Frog', emoji: '🐸', category: 'animal', vietnamese: 'chú ếch' },
  bird: { word: 'bird', display: 'Bird', emoji: '🐦', category: 'animal', vietnamese: 'chú chim' },
  parrot: { word: 'parrot', display: 'Parrot', emoji: '🦜', category: 'animal', vietnamese: 'con vẹt' },
  rabbit: { word: 'rabbit', display: 'Rabbit', emoji: '🐰', category: 'animal', vietnamese: 'chú thỏ' },
  mouse: { word: 'mouse', display: 'Mouse', emoji: '🐭', category: 'animal', vietnamese: 'chú chuột' },
  monkey: { word: 'monkey', display: 'Monkey', emoji: '🐒', category: 'animal', vietnamese: 'chú khỉ' },
  tiger: { word: 'tiger', display: 'Tiger', emoji: '🐯', category: 'animal', vietnamese: 'con hổ' },
  lion: { word: 'lion', display: 'Lion', emoji: '🦁', category: 'animal', vietnamese: 'sư tử' },
  elephant: { word: 'elephant', display: 'Elephant', emoji: '🐘', category: 'animal', vietnamese: 'chú voi' },
  giraffe: { word: 'giraffe', display: 'Giraffe', emoji: '🦒', category: 'animal', vietnamese: 'hươu cao cổ' },
  zebra: { word: 'zebra', display: 'Zebra', emoji: '🦓', category: 'animal', vietnamese: 'ngựa vằn' },
  bear: { word: 'bear', display: 'Bear', emoji: '🐻', category: 'animal', vietnamese: 'chú gấu' },
  turtle: { word: 'turtle', display: 'Turtle', emoji: '🐢', category: 'animal', vietnamese: 'con rùa' },
  yak: { word: 'yak', display: 'Yak', emoji: '🐂', category: 'animal', vietnamese: 'bò Tây Tạng' },

  // School & Classroom & Concepts
  book: { word: 'book', display: 'Book', emoji: '📚', category: 'school', vietnamese: 'quyển sách' },
  pen: { word: 'pen', display: 'Pen', emoji: '🖊️', category: 'school', vietnamese: 'bút mực' },
  pencil: { word: 'pencil', display: 'Pencil', emoji: '✏️', category: 'school', vietnamese: 'bút chì' },
  ruler: { word: 'ruler', display: 'Ruler', emoji: '📏', category: 'school', vietnamese: 'thước kẻ' },
  eraser: { word: 'eraser', display: 'Eraser', emoji: '🧹', category: 'school', vietnamese: 'cục tẩy' },
  bag: { word: 'bag', display: 'Bag', emoji: '🎒', category: 'school', vietnamese: 'cặp sách' },
  schoolbag: { word: 'schoolbag', display: 'Schoolbag', emoji: '🎒', category: 'school', vietnamese: 'cặp đi học' },
  desk: { word: 'desk', display: 'Desk', emoji: '🪑', category: 'school', vietnamese: 'bàn học' },
  door: { word: 'door', display: 'Door', emoji: '🚪', category: 'home', vietnamese: 'cửa ra vào' },
  window: { word: 'window', display: 'Window', emoji: '🪟', category: 'home', vietnamese: 'cửa sổ' },
  bell: { word: 'bell', display: 'Bell', emoji: '🔔', category: 'school', vietnamese: 'chuông' },
  clock: { word: 'clock', display: 'Clock', emoji: '⏰', category: 'time', vietnamese: 'đồng hồ' },
  classroom: { word: 'classroom', display: 'Classroom', emoji: '🏫', category: 'school', vietnamese: 'lớp học' },
  library: { word: 'library', display: 'Library', emoji: '🏛️', category: 'school', vietnamese: 'thư viện' },
  playground: { word: 'playground', display: 'Playground', emoji: '🛝', category: 'school', vietnamese: 'sân chơi' },
  question: { word: 'question', display: 'Question', emoji: '❓', category: 'school', vietnamese: 'câu hỏi' },
  queen: { word: 'queen', display: 'Queen', emoji: '👑', category: 'people', vietnamese: 'nữ hoàng' },
  quilt: { word: 'quilt', display: 'Quilt', emoji: '🛏️', category: 'home', vietnamese: 'chăn bông' },
  quiet: { word: 'quiet', display: 'Quiet', emoji: '🤫', category: 'action', vietnamese: 'yên tĩnh' },
  six: { word: 'six', display: 'Six', emoji: '6️⃣', category: 'number', vietnamese: 'số sáu' },

  // Body Parts
  eye: { word: 'eye', display: 'Eye', emoji: '👁️', category: 'body', vietnamese: 'con mắt' },
  ear: { word: 'ear', display: 'Ear', emoji: '👂', category: 'body', vietnamese: 'cái tai' },
  nose: { word: 'nose', display: 'Nose', emoji: '👃', category: 'body', vietnamese: 'chiếc mũi' },
  mouth: { word: 'mouth', display: 'Mouth', emoji: '👄', category: 'body', vietnamese: 'cái miệng' },
  face: { word: 'face', display: 'Face', emoji: '😀', category: 'body', vietnamese: 'khuôn mặt' },
  hand: { word: 'hand', display: 'Hand', emoji: '✋', category: 'body', vietnamese: 'bàn tay' },
  arm: { word: 'arm', display: 'Arm', emoji: '💪', category: 'body', vietnamese: 'cánh tay' },
  leg: { word: 'leg', display: 'Leg', emoji: '🦵', category: 'body', vietnamese: 'cẳng chân' },
  foot: { word: 'foot', display: 'Foot', emoji: '🦶', category: 'body', vietnamese: 'bàn chân' },
  hair: { word: 'hair', display: 'Hair', emoji: '💇', category: 'body', vietnamese: 'mái tóc' },

  // Places & Living Environments (Grade 4 & 5)
  flat: { word: 'flat', display: 'Flat', emoji: '🏢', category: 'place', vietnamese: 'căn hộ' },
  floor: { word: 'floor', display: 'Floor', emoji: '🏢', category: 'place', vietnamese: 'tầng lầu' },
  tower: { word: 'tower', display: 'Tower', emoji: '🏙️', category: 'place', vietnamese: 'tòa tháp' },
  lane: { word: 'lane', display: 'Lane', emoji: '🛣️', category: 'place', vietnamese: 'ngõ / hẻm' },
  street: { word: 'street', display: 'Street', emoji: '🛣️', category: 'place', vietnamese: 'con phố' },
  avenue: { word: 'avenue', display: 'Avenue', emoji: '🛣️', category: 'place', vietnamese: 'đại lộ' },
  address: { word: 'address', display: 'Address', emoji: '📍', category: 'place', vietnamese: 'địa chỉ' },
  hometown: { word: 'hometown', display: 'Hometown', emoji: '🏡', category: 'place', vietnamese: 'quê hương' },
  city: { word: 'city', display: 'City', emoji: '🏙️', category: 'place', vietnamese: 'thành phố' },
  town: { word: 'town', display: 'Town', emoji: '🏘️', category: 'place', vietnamese: 'thị trấn' },
  village: { word: 'village', display: 'Village', emoji: '🏘️', category: 'place', vietnamese: 'ngôi làng' },
  countryside: { word: 'countryside', display: 'Countryside', emoji: '🌾', category: 'place', vietnamese: 'vùng quê' },
  sun: { word: 'sun', display: 'Sun', emoji: '☀️', category: 'nature', vietnamese: 'mặt trời' },
  sunny: { word: 'sunny', display: 'Sunny', emoji: '☀️', category: 'weather', vietnamese: 'nắng ấm' },
  rain: { word: 'rain', display: 'Rain', emoji: '🌧️', category: 'weather', vietnamese: 'mưa' },
  rainy: { word: 'rainy', display: 'Rainy', emoji: '🌧️', category: 'weather', vietnamese: 'trời mưa' },
  sea: { word: 'sea', display: 'Sea', emoji: '🌊', category: 'nature', vietnamese: 'biển cả' },
  sand: { word: 'sand', display: 'Sand', emoji: '🏖️', category: 'nature', vietnamese: 'bãi cát' },
  beach: { word: 'beach', display: 'Beach', emoji: '🏖️', category: 'nature', vietnamese: 'bãi biển' },
  tent: { word: 'tent', display: 'Tent', emoji: '⛺', category: 'nature', vietnamese: 'lều cắm trại' },
  garden: { word: 'garden', display: 'Garden', emoji: '🏡', category: 'nature', vietnamese: 'khu vườn' },

  // Countries & Nationalities
  vietnam: { word: 'vietnam', display: 'Viet Nam', emoji: '🇻🇳', category: 'country', vietnamese: 'nước Việt Nam' },
  america: { word: 'america', display: 'America', emoji: '🇺🇸', category: 'country', vietnamese: 'nước Mỹ' },
  england: { word: 'england', display: 'England', emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', category: 'country', vietnamese: 'nước Anh' },
  japan: { word: 'japan', display: 'Japan', emoji: '🇯🇵', category: 'country', vietnamese: 'nước Nhật Bản' },
  australia: { word: 'australia', display: 'Australia', emoji: '🇦🇺', category: 'country', vietnamese: 'nước Úc' },
  singapore: { word: 'singapore', display: 'Singapore', emoji: '🇸🇬', category: 'country', vietnamese: 'nước Singapore' },
  malaysia: { word: 'malaysia', display: 'Malaysia', emoji: '🇲🇾', category: 'country', vietnamese: 'nước Malaysia' },

  // People & Family & Jobs
  girl: { word: 'girl', display: 'Girl', emoji: '👧', category: 'people', vietnamese: 'bé gái' },
  boy: { word: 'boy', display: 'Boy', emoji: '👦', category: 'people', vietnamese: 'bé trai' },
  father: { word: 'father', display: 'Father', emoji: '👨', category: 'family', vietnamese: 'bố' },
  mother: { word: 'mother', display: 'Mother', emoji: '👩', category: 'family', vietnamese: 'mẹ' },
  brother: { word: 'brother', display: 'Brother', emoji: '👦', category: 'family', vietnamese: 'anh/em trai' },
  sister: { word: 'sister', display: 'Sister', emoji: '👧', category: 'family', vietnamese: 'chị/em gái' },
  baby: { word: 'baby', display: 'Baby', emoji: '👶', category: 'family', vietnamese: 'em bé' },
  doctor: { word: 'doctor', display: 'Doctor', emoji: '🩺', category: 'job', vietnamese: 'bác sĩ' },
  teacher: { word: 'teacher', display: 'Teacher', emoji: '👩‍🏫', category: 'job', vietnamese: 'giáo viên' },
  farmer: { word: 'farmer', display: 'Farmer', emoji: '👨‍🌾', category: 'job', vietnamese: 'bác nông dân' },
  cook: { word: 'cook', display: 'Cook', emoji: '👨‍🍳', category: 'job', vietnamese: 'đầu bếp' },
  pilot: { word: 'pilot', display: 'Pilot', emoji: '👨‍✈️', category: 'job', vietnamese: 'phi công' },
  nurse: { word: 'nurse', display: 'Nurse', emoji: '👩‍⚕️', category: 'job', vietnamese: 'y tá' },
  architect: { word: 'architect', display: 'Architect', emoji: '📐', category: 'job', vietnamese: 'kiến trúc sư' },
  writer: { word: 'writer', display: 'Writer', emoji: '✍️', category: 'job', vietnamese: 'nhà văn' },
  astronaut: { word: 'astronaut', display: 'Astronaut', emoji: '👨‍🚀', category: 'job', vietnamese: 'phi hành gia' },
  scientist: { word: 'scientist', display: 'Scientist', emoji: '🔬', category: 'job', vietnamese: 'nhà khoa học' },

  // Greetings & Social Expressions
  hello: { word: 'hello', display: 'Hello', emoji: '👋', category: 'greeting', vietnamese: 'xin chào' },
  goodbye: { word: 'goodbye', display: 'Goodbye', emoji: '👋', category: 'greeting', vietnamese: 'tạm biệt' },
};

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
      emoji: '🌟',
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
    const regex = new RegExp(`\\\\b${key}\\\\b`, 'i');
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
    .replace(/^Unit\\s+\\d+\\s*:\\s*/i, '')
    .replace(/\\(.*?\\)/g, '')
    .split(/[,&/\\s]+/)
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
  const match = topic.title.match(/Letter\\s+([A-Za-z])(?:\\s*-\\s*([A-Za-z]))?/i)
    || topic.description.match(/Letter\\s+([A-Za-z])\\/([A-Za-z])/i);
  
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

// Extract authentic Q&A dialogue from topic
function extractDialogue(topic: CurriculumTopic): { question: string; answer: string } | null {
  const text = `${topic.description} ${topic.keyPoints.join(' ')}`;
  const match = text.match(/([^.!?\\n]+(?:\\?))\\s*(?:—|-|–)\\s*([^.!?\\n]+(?:[.!?]|$))/);
  if (match) {
    return { question: match[1].trim(), answer: match[2].trim() };
  }
  return null;
}

export function generateEnglishQuestions(topic: CurriculumTopic, _grade: GradeLevel): Question[] {
  const vocabList = extractLessonVocab(topic);
  const phonics = extractPhonicsInfo(topic);
  const dialogue = extractDialogue(topic);
  const focusTitle = topic.title.replace(/^Unit\\s+\\d+\\s*:\\s*/i, '').replace(/\\s*\\(Letter[^)]*\\)/i, '').trim();

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
  // QUESTION 1: Look at visual item 1 -> Name what it is
  // -------------------------------------------------------------
  const q1Distractors = vocabList.length >= 3
    ? [vocabList[1].display, vocabList[2].display]
    : ['Book', 'Apple'];

  const q1: Question = {
    id: `${topic.id}-q1`,
    type: 'bubble_choice',
    questionText: `Look at the picture. What is this?`,
    audioText: `Look at the picture. What is this?`,
    image: w1.imagePath || w1.emoji,
    hint: `Nhìn hình và chọn từ tiếng Anh đúng: ${w1.vietnamese} (${w1.display}).`,
    points: 10,
    contentOrigin: 'sgk_reference',
    options: makeOptions(w1.display, q1Distractors, 0),
  };

  // -------------------------------------------------------------
  // QUESTION 2: Look at visual item 2 -> Complete SGK sentence
  // -------------------------------------------------------------
  let sentenceTemplate = `I like ${w2.word}.`;
  if (topic.description.includes('I have a') || topic.description.includes('I have')) {
    sentenceTemplate = `I have a ${w2.word}.`;
  } else if (topic.description.includes('There is a') || topic.description.includes('Look at the')) {
    sentenceTemplate = `Look at the ${w2.word}.`;
  } else if (topic.description.includes('This is my') || topic.description.includes('This is')) {
    sentenceTemplate = `This is a ${w2.word}.`;
  }

  const promptSentence = sentenceTemplate.replace(new RegExp(`\\\\b${w2.word}\\\\b`, 'i'), '___');
  const q2Distractors = vocabList.length >= 3
    ? [w1.word, w3.word]
    : ['cat', 'pencil'];

  const q2: Question = {
    id: `${topic.id}-q2`,
    type: 'bubble_choice',
    questionText: `Look at the picture. Complete the sentence:\\n“${promptSentence}”`,
    audioText: `Look at the picture. Complete the sentence: ${promptSentence}`,
    image: w2.imagePath || w2.emoji,
    hint: `Nhìn hình và hoàn thành câu: “${sentenceTemplate}”`,
    points: 10,
    contentOrigin: 'sgk_reference',
    options: makeOptions(w2.word, q2Distractors, 1),
  };

  // -------------------------------------------------------------
  // QUESTION 3: Phonics Sound & Letter Recognition / Spelling
  // -------------------------------------------------------------
  let q3QuestionText: string;
  let q3CorrectAnswer: string;
  let q3Distractors: string[];
  let q3Hint: string;

  if (phonics) {
    q3QuestionText = `Which letter and sound does the word “${w3.display}” start with?`;
    q3CorrectAnswer = `Letter ${phonics.letter} (${phonics.sound})`;
    const otherLetters = ['B', 'C', 'D', 'P', 'S', 'M', 'T', 'G'].filter((l) => l !== phonics.letter);
    q3Distractors = [
      `Letter ${otherLetters[0]} (/${otherLetters[0].toLowerCase()}/)`,
      `Letter ${otherLetters[1]} (/${otherLetters[1].toLowerCase()}/)`,
    ];
    q3Hint = `Từ “${w3.display}” bắt đầu bằng chữ cái ${phonics.letter}, phát âm là ${phonics.sound}!`;
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
    image: w3.imagePath || w3.emoji,
    hint: q3Hint,
    points: 10,
    contentOrigin: 'sgk_reference',
    options: makeOptions(q3CorrectAnswer, q3Distractors, 2),
  };

  // -------------------------------------------------------------
  // QUESTION 4: Picture Description with Visual Item 4
  // -------------------------------------------------------------
  const q4TargetSentence = `I see a ${w4.word}.`;
  const q4Distractors = [
    `I see a robot.`,
    `I see an airplane.`,
  ].filter((s) => !s.toLowerCase().includes(w4.word.toLowerCase()));

  const q4: Question = {
    id: `${topic.id}-q4`,
    type: 'bubble_choice',
    questionText: `Look at the picture. Which sentence describes it best?`,
    audioText: `Look at the picture. Which sentence describes it best?`,
    image: w4.imagePath || w4.emoji,
    hint: `Hình ảnh thể hiện: ${w4.vietnamese} (${w4.display}).`,
    points: 10,
    contentOrigin: 'sgk_reference',
    options: makeOptions(q4TargetSentence, q4Distractors, 0),
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
    image: w1.imagePath || w1.emoji,
    hint: `“${w1.vietnamese}” trong tiếng Anh đọc là “${w1.display}”.`,
    points: 10,
    contentOrigin: 'sgk_reference',
    options: makeOptions(w1.display, q5Distractors, 1),
  };

  // -------------------------------------------------------------
  // QUESTION 6: Dialogue Q&A — Answering (NO unrelated image!)
  // -------------------------------------------------------------
  let q6QuestionText: string;
  let q6CorrectAnswer: string;
  let q6Distractors: string[];
  let q6Hint: string;

  if (dialogue) {
    q6QuestionText = `Read the question. Choose the best reply:\\n— “${dialogue.question}”`;
    q6CorrectAnswer = dialogue.answer;
    q6Distractors = [
      'I am eight years old.',
      'It is on the table.',
    ];
    q6Hint = `Mẫu câu đối thoại chuẩn SGK: “${dialogue.question} — ${dialogue.answer}”`;
  } else {
    q6QuestionText = `Choose the correct English expression for “${focusTitle}”:`;
    q6CorrectAnswer = topic.keyPoints[0] || `I like learning English.`;
    q6Distractors = [
      'Good night, see you tomorrow.',
      'Open your backpack, please.',
    ];
    q6Hint = `Đáp án chuẩn: “${q6CorrectAnswer}”`;
  }

  const q6: Question = {
    id: `${topic.id}-q6`,
    type: 'bubble_choice',
    questionText: q6QuestionText,
    audioText: q6QuestionText.replace('\\n', ' '),
    image: undefined, // Pure dialogue reading! No unrelated vocabulary image.
    hint: q6Hint,
    points: 10,
    contentOrigin: 'sgk_reference',
    options: makeOptions(q6CorrectAnswer, q6Distractors, 2),
  };

  // -------------------------------------------------------------
  // QUESTION 7: Dialogue Q&A — Asking the Question (NO unrelated image!)
  // -------------------------------------------------------------
  let q7QuestionText: string;
  let q7CorrectAnswer: string;
  let q7Distractors: string[];

  if (dialogue) {
    q7QuestionText = `Choose the correct question for this answer:\\n— “${dialogue.answer}”`;
    q7CorrectAnswer = dialogue.question;
    q7Distractors = [
      'What time is it?',
      'How are you today?',
    ].filter((q) => q.toLowerCase() !== dialogue.question.toLowerCase());
  } else {
    q7QuestionText = `How do you politely ask a friend about ${focusTitle}?`;
    q7CorrectAnswer = `What do you like?`;
    q7Distractors = [
      'What is your name?',
      'How old are you?',
    ];
  }

  const q7: Question = {
    id: `${topic.id}-q7`,
    type: 'bubble_choice',
    questionText: q7QuestionText,
    audioText: q7QuestionText.replace('\\n', ' '),
    image: undefined, // Pure dialogue reading! No unrelated vocabulary image.
    hint: `Câu hỏi phù hợp để nhận được câu trả lời này: “${q7CorrectAnswer}”`,
    points: 10,
    contentOrigin: 'sgk_reference',
    options: makeOptions(q7CorrectAnswer, q7Distractors, 0),
  };

  // -------------------------------------------------------------
  // QUESTION 8: Sentence Word Order / Unscramble (Strict 1-to-1 Match with w2!)
  // -------------------------------------------------------------
  const unscrambleTarget = sentenceTemplate;
  const wordsInSentence = unscrambleTarget.replace(/[.]/g, '').split(' ');
  const jumbledWords = [...wordsInSentence].reverse().join(' / ');

  const incorrectOrder1 = wordsInSentence.length >= 3
    ? `${wordsInSentence[1]} ${wordsInSentence[0]} ${wordsInSentence.slice(2).join(' ')}.`
    : `${wordsInSentence.join(' ')} not.`;
  const incorrectOrder2 = wordsInSentence.length >= 3
    ? `${wordsInSentence.slice(2).join(' ')} ${wordsInSentence[0]} ${wordsInSentence[1]}.`
    : `Not ${wordsInSentence.join(' ')}.`;

  const q8: Question = {
    id: `${topic.id}-q8`,
    type: 'bubble_choice',
    questionText: `Put the words in the correct order to make a sentence:\\n[ ${jumbledWords} ]`,
    audioText: `Put the words in the correct order to make a sentence.`,
    image: w2.imagePath || w2.emoji, // STRICT MATCH WITH w2 (the word in the sentence!)
    hint: `Trật tự câu đúng chuẩn ngữ pháp: “${unscrambleTarget}”`,
    points: 10,
    contentOrigin: 'sgk_reference',
    options: makeOptions(unscrambleTarget, [incorrectOrder1, incorrectOrder2], 1),
  };

  // -------------------------------------------------------------
  // QUESTION 9: Odd One Out / Category Discrimination (Clean UI)
  // -------------------------------------------------------------
  const oddWord = w1.category === 'food' || w1.category === 'fruit' || w1.category === 'drink'
    ? 'Notebook'
    : w1.category === 'animal'
    ? 'Juice'
    : w1.category === 'school'
    ? 'Tiger'
    : 'Elephant';

  const q9: Question = {
    id: `${topic.id}-q9`,
    type: 'bubble_choice',
    questionText: `Which word does NOT belong to the same topic as the other two?`,
    audioText: `Which word does not belong to the same topic as the other two?`,
    image: undefined, // Pure logic / text question
    hint: `“${w1.display}” và “${w2.display}” thuộc bài học này, còn “${oddWord}” thuộc nhóm khác!`,
    points: 10,
    contentOrigin: 'sgk_reference',
    options: makeOptions(oddWord, [w1.display, w2.display], 2),
  };

  // -------------------------------------------------------------
  // QUESTION 10: Key Takeaway Sentence / Communicative Goal
  // -------------------------------------------------------------
  const q10Sentence = topic.keyPoints[1] || topic.keyPoints[0] || topic.summary || `Practise speaking English daily!`;
  const q10Distractors = [
    'The dog is running in the park.',
    'There are four seasons in a year.',
  ];

  const q10: Question = {
    id: `${topic.id}-q10`,
    type: 'bubble_choice',
    questionText: `Which sentence is the main learning goal of “${focusTitle}”?`,
    audioText: `Which sentence is the main learning goal of this lesson?`,
    image: undefined, // Pure communicative goal focus
    hint: `Trọng tâm bài học: “${q10Sentence}”`,
    points: 10,
    contentOrigin: 'sgk_reference',
    options: makeOptions(q10Sentence, q10Distractors, 0),
  };

  return [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
}
'''

with open(r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning\src\data\curriculum\english\englishQuestionEngine.ts", "w", encoding="utf-8") as f:
    f.write(code)

print("Updated englishQuestionEngine.ts cleanly!")
