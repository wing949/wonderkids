import { GradeLevel } from '../types';

export interface LogicGameMetadata {
  id: 'vat-gi-bien-mat' | 'lat-the-tim-doi' | 'tim-quy-luat' | 'me-cung';
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  thumbnail: string;
  washiColor: string;
  themeColor: string;
  badge: string;
  badgeText: string;
  progressPercent: number;
  candyColor: 'logic' | 'vietnamese' | 'english' | 'math' | 'gold' | 'rainbow';
  tilt: number;
  gradeLevels: GradeLevel[];
  levelsCount: number;
}

export interface LogicItem {
  id: string;
  name: string;
  emoji: string;
  category: 'fruit' | 'toy' | 'animal' | 'vehicle' | 'special';
  bgColor: string;
}

export const LOGIC_ITEMS_POOL: LogicItem[] = [
  { id: 'apple', name: 'Quả táo đỏ', emoji: '🍎', category: 'fruit', bgColor: 'bg-red-50 border-red-200 text-red-700' },
  { id: 'banana', name: 'Nải chuối vàng', emoji: '🍌', category: 'fruit', bgColor: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
  { id: 'strawberry', name: 'Quả dâu tây', emoji: '🍓', category: 'fruit', bgColor: 'bg-rose-50 border-rose-200 text-rose-700' },
  { id: 'watermelon', name: 'Miếng dưa hấu', emoji: '🍉', category: 'fruit', bgColor: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
  { id: 'grape', name: 'Chùm nho tím', emoji: '🍇', category: 'fruit', bgColor: 'bg-purple-50 border-purple-200 text-purple-700' },
  { id: 'car', name: 'Xe ô tô đỏ', emoji: '🚗', category: 'vehicle', bgColor: 'bg-red-50 border-red-200 text-red-700' },
  { id: 'rocket', name: 'Tên lửa vũ trụ', emoji: '🚀', category: 'vehicle', bgColor: 'bg-sky-50 border-sky-200 text-sky-700' },
  { id: 'plane', name: 'Máy bay vút bay', emoji: '✈️', category: 'vehicle', bgColor: 'bg-blue-50 border-blue-200 text-blue-700' },
  { id: 'train', name: 'Tàu hỏa xe lửa', emoji: '🚂', category: 'vehicle', bgColor: 'bg-amber-50 border-amber-200 text-amber-700' },
  { id: 'bicycle', name: 'Xe đạp thể thao', emoji: '🚲', category: 'vehicle', bgColor: 'bg-teal-50 border-teal-200 text-teal-700' },
  { id: 'cat', name: 'Mèo con tam thể', emoji: '🐱', category: 'animal', bgColor: 'bg-amber-50 border-amber-200 text-amber-700' },
  { id: 'puppy', name: 'Cún con đáng yêu', emoji: '🐶', category: 'animal', bgColor: 'bg-orange-50 border-orange-200 text-orange-700' },
  { id: 'chick', name: 'Gà con lông vàng', emoji: '🐥', category: 'animal', bgColor: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
  { id: 'penguin', name: 'Chim cánh cụt', emoji: '🐧', category: 'animal', bgColor: 'bg-slate-50 border-slate-200 text-slate-700' },
  { id: 'bunny', name: 'Thỏ trắng mắt tròn', emoji: '🐰', category: 'animal', bgColor: 'bg-pink-50 border-pink-200 text-pink-700' },
  { id: 'teddy', name: 'Gấu bông ấm áp', emoji: '🧸', category: 'toy', bgColor: 'bg-amber-50 border-amber-200 text-amber-700' },
  { id: 'football', name: 'Quả bóng đá', emoji: '⚽', category: 'toy', bgColor: 'bg-slate-50 border-slate-200 text-slate-700' },
  { id: 'balloon', name: 'Bong bóng sắc màu', emoji: '🎈', category: 'toy', bgColor: 'bg-red-50 border-red-200 text-red-700' },
  { id: 'robot', name: 'Người máy thông minh', emoji: '🤖', category: 'toy', bgColor: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
  { id: 'gift', name: 'Hộp quà thắt nơ', emoji: '🎁', category: 'special', bgColor: 'bg-pink-50 border-pink-200 text-pink-700' },
  { id: 'star', name: 'Ngôi sao lấp lánh', emoji: '⭐', category: 'special', bgColor: 'bg-amber-50 border-amber-200 text-amber-700' },
  { id: 'cake', name: 'Bánh kem sinh nhật', emoji: '🎂', category: 'special', bgColor: 'bg-rose-50 border-rose-200 text-rose-700' },
  { id: 'crown', name: 'Vương miện công chúa', emoji: '👑', category: 'special', bgColor: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
  { id: 'sun', name: 'Mặt trời rạng rỡ', emoji: '☀️', category: 'special', bgColor: 'bg-amber-50 border-amber-200 text-amber-700' },
];

export const LOGIC_GAMES_METADATA: LogicGameMetadata[] = [
  {
    id: 'vat-gi-bien-mat',
    title: 'Vật gì biến mất?',
    subtitle: 'Màn 1 — 5: Luyện trí nhớ ngắn hạn & quan sát',
    description: 'Bé quan sát một nhóm đồ vật trên kệ, sau đó kệ được che lại trong chốc lát và tìm ra món đồ đã biến mất.',
    icon: '🔍',
    thumbnail: '/assets/mascots/mascot_bear.webp',
    washiColor: 'rgba(139, 114, 207, 0.45)',
    themeColor: '#7C3AED',
    badge: 'Luyện Trí Nhớ',
    badgeText: '5/5 vòng thử thách',
    progressPercent: 80,
    candyColor: 'logic',
    tilt: -1.2,
    gradeLevels: [1, 2, 3, 4, 5],
    levelsCount: 5,
  },
  {
    id: 'lat-the-tim-doi',
    title: 'Lật thẻ tìm đôi',
    subtitle: 'Cấp độ Dễ — Vừa — Nâng cao: Trí nhớ không gian',
    description: 'Bé lật từng thẻ bài, ghi nhớ vị trí và ghép nối chính xác các cặp hình giống nhau. Không giới hạn thời gian.',
    icon: '🃏',
    thumbnail: '/assets/mascots/mascot_cat.webp',
    washiColor: 'rgba(236, 72, 153, 0.45)',
    themeColor: '#DB2777',
    badge: 'Trí Nhớ Không Gian',
    badgeText: '3 mức độ thử thách',
    progressPercent: 60,
    candyColor: 'rainbow',
    tilt: 0.9,
    gradeLevels: [1, 2, 3, 4, 5],
    levelsCount: 4,
  },
  {
    id: 'tim-quy-luat',
    title: 'Tìm quy luật hình',
    subtitle: 'Chuỗi quy luật: Màu sắc, hình học & số học',
    description: 'Bé phân tích chuỗi quy luật biến đổi và tìm ra hình hoặc số học thích hợp nhất điền vào ô trống [ ? ].',
    icon: '🧩',
    thumbnail: '/assets/mascots/mascot_unicorn.webp',
    washiColor: 'rgba(59, 130, 246, 0.45)',
    themeColor: '#2563EB',
    badge: 'Tư Duy Suy Luận',
    badgeText: '5/5 câu đố tư duy',
    progressPercent: 100,
    candyColor: 'english',
    tilt: -0.8,
    gradeLevels: [1, 2, 3, 4, 5],
    levelsCount: 5,
  },
  {
    id: 'me-cung',
    title: 'Mê cung diệu kỳ',
    subtitle: 'Màn 1 — 3: Định hướng không gian & kiên trì',
    description: 'Dẫn bạn Thỏ vượt qua các cung đường zíc zắc trong mê cung để thu thập Ngôi sao vàng và rương kho báu.',
    icon: '🌀',
    thumbnail: '/assets/mascots/mascot_bunny.webp',
    washiColor: 'rgba(16, 185, 129, 0.45)',
    themeColor: '#059669',
    badge: 'Định Hướng Không Gian',
    badgeText: '3 bản đồ mê cung',
    progressPercent: 70,
    candyColor: 'math',
    tilt: 1.1,
    gradeLevels: [1, 2, 3, 4, 5],
    levelsCount: 4,
  },
];

export interface PatternQuestion {
  id: string;
  sequence: { type: 'item' | 'blank'; emoji?: string; label?: string }[];
  options: { id: string; emoji: string; label: string }[];
  correctOptionId: string;
  explanation: string;
  ruleDescription: string;
}

export const PATTERN_QUESTIONS_POOL: PatternQuestion[] = [
  {
    id: 'pat-1',
    sequence: [
      { type: 'item', emoji: '🔴', label: 'Đỏ' },
      { type: 'item', emoji: '🔵', label: 'Xanh' },
      { type: 'item', emoji: '🔴', label: 'Đỏ' },
      { type: 'item', emoji: '🔵', label: 'Xanh' },
      { type: 'blank' },
    ],
    options: [
      { id: 'opt-red', emoji: '🔴', label: 'Hình tròn Đỏ' },
      { id: 'opt-blue', emoji: '🔵', label: 'Hình tròn Xanh' },
      { id: 'opt-green', emoji: '🟢', label: 'Hình tròn Xanh lá' },
      { id: 'opt-yellow', emoji: '🟡', label: 'Hình tròn Vàng' },
    ],
    correctOptionId: 'opt-red',
    explanation: 'Quy luật xen kẽ: Đỏ rồi đến Xanh, nên sau hình Xanh sẽ tiếp tục là hình Đỏ 🔴!',
    ruleDescription: 'Quy luật màu xen kẽ: Đỏ - Xanh - Đỏ - Xanh',
  },
  {
    id: 'pat-2',
    sequence: [
      { type: 'item', emoji: '🔺', label: 'Tam giác' },
      { type: 'item', emoji: '🟦', label: 'Hình vuông' },
      { type: 'item', emoji: '🔺', label: 'Tam giác' },
      { type: 'item', emoji: '🟦', label: 'Hình vuông' },
      { type: 'blank' },
    ],
    options: [
      { id: 'opt-tri', emoji: '🔺', label: 'Tam giác đỏ' },
      { id: 'opt-sq', emoji: '🟦', label: 'Hình vuông xanh' },
      { id: 'opt-cir', emoji: '🟡', label: 'Hình tròn vàng' },
      { id: 'opt-star', emoji: '⭐', label: 'Ngôi sao' },
    ],
    correctOptionId: 'opt-tri',
    explanation: 'Quy luật hình xen kẽ: Tam giác 🔺 rồi đến Hình vuông 🟦, nên tiếp theo là Tam giác 🔺!',
    ruleDescription: 'Quy luật hình xen kẽ: Tam giác - Vuông - Tam giác - Vuông',
  },
  {
    id: 'pat-3',
    sequence: [
      { type: 'item', emoji: '🍎', label: 'Táo' },
      { type: 'item', emoji: '🍎', label: 'Táo' },
      { type: 'item', emoji: '🍌', label: 'Chuối' },
      { type: 'item', emoji: '🍎', label: 'Táo' },
      { type: 'item', emoji: '🍎', label: 'Táo' },
      { type: 'blank' },
    ],
    options: [
      { id: 'opt-banana', emoji: '🍌', label: 'Nải chuối' },
      { id: 'opt-apple', emoji: '🍎', label: 'Quả táo' },
      { id: 'opt-grape', emoji: '🍇', label: 'Chùm nho' },
      { id: 'opt-orange', emoji: '🍊', label: 'Quả cam' },
    ],
    correctOptionId: 'opt-banana',
    explanation: 'Quy luật nhóm: Cứ 2 quả Táo 🍎🍎 thì đến 1 quả Chuối 🍌, nên vị trí tiếp theo là Chuối 🍌!',
    ruleDescription: 'Quy luật nhóm: 2 Táo - 1 Chuối',
  },
  {
    id: 'pat-4',
    sequence: [
      { type: 'item', emoji: '1️⃣', label: '1' },
      { type: 'item', emoji: '3️⃣', label: '3' },
      { type: 'item', emoji: '5️⃣', label: '5' },
      { type: 'item', emoji: '7️⃣', label: '7' },
      { type: 'blank' },
    ],
    options: [
      { id: 'opt-9', emoji: '9️⃣', label: 'Số 9' },
      { id: 'opt-8', emoji: '8️⃣', label: 'Số 8' },
      { id: 'opt-10', emoji: '🔟', label: 'Số 10' },
      { id: 'opt-6', emoji: '6️⃣', label: 'Số 6' },
    ],
    correctOptionId: 'opt-9',
    explanation: 'Dãy số lẻ tăng dần: mỗi số cộng thêm 2 (1, 3, 5, 7, 9). Số tiếp theo là 9!',
    ruleDescription: 'Dãy số cách đều (+2)',
  },
  {
    id: 'pat-5',
    sequence: [
      { type: 'item', emoji: '☀️', label: 'Mặt trời' },
      { type: 'item', emoji: '🌤️', label: 'Mây nắng' },
      { type: 'item', emoji: '🌧️', label: 'Mây mưa' },
      { type: 'item', emoji: '☀️', label: 'Mặt trời' },
      { type: 'item', emoji: '🌤️', label: 'Mây nắng' },
      { type: 'blank' },
    ],
    options: [
      { id: 'opt-rain', emoji: '🌧️', label: 'Mây mưa' },
      { id: 'opt-sun', emoji: '☀️', label: 'Mặt trời' },
      { id: 'opt-snow', emoji: '❄️', label: 'Bông tuyết' },
      { id: 'opt-rainbow', emoji: '🌈', label: 'Cầu vồng' },
    ],
    correctOptionId: 'opt-rain',
    explanation: 'Quy luật chu kỳ thời tiết: Nắng ☀️ - Mây 🌤️ - Mưa 🌧️. Vị trí tiếp theo là Mưa 🌧️!',
    ruleDescription: 'Quy luật chu kỳ 3 bước',
  },
];
