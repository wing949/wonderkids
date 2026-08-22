// src/data/curriculum/vietnamese/grade1PhonicsGames.ts
// Bộ dữ liệu Mini Game Âm Vần chuẩn 100% SGK Tiếng Việt 1 Tập 1 (Kết nối tri thức với cuộc sống - NXB Giáo Dục Việt Nam)

export type PhonicsGameType =
  | 'letter_pick'       // Nhóm 1: Nhận diện chữ cái
  | 'bubble_pop'        // Nhóm 2 & 7: Tìm chữ trên mây / Đập bong bóng bay
  | 'letter_assemble'   // Nhóm 3: Kéo thả ghép tiếng
  | 'listen_pick'       // Nhóm 4 & 9: Nghe âm chọn chữ
  | 'picture_match'     // Nhóm 5: Nhìn hình chọn tiếng/từ
  | 'order_sequence'    // Nhóm 8: Xếp đúng thứ tự câu SGK
  | 'unit_review';      // Nhóm 10: Đại hội ôn tập tổng hợp

export interface PhonicsGameOption {
  id: string;
  label: string;
  isCorrect: boolean;
  subLabel?: string;
  imageUrl?: string;
  color?: string; // Pastel colors: 'pink' | 'amber' | 'emerald' | 'sky' | 'purple'
}

export interface PhonicsGameStage {
  id: string;
  gameType: PhonicsGameType;
  instruction: string;       // Giọng đọc / hướng dẫn cho bé
  targetSoundOrLetter?: string; // Âm hoặc chữ cần nhận biết
  options: PhonicsGameOption[];
  // Dành cho game ghép tiếng / xếp câu
  assembleTarget?: {
    resultWord: string;      // Tiếng hoàn chỉnh (ví dụ: "bà")
    pieces: string[];        // Các mảnh ghép (ví dụ: ["b", "a", "`"])
  };
  sequenceWords?: string[];  // Danh sách từ cần xếp (ví dụ: ["Nam", "và", "Hà", "ca hát"])
  hintText?: string;         // Gợi ý khi bé bấm nút Gợi ý
}

export interface LessonPhonicsGameConfig {
  lessonId: string;
  lessonTitle: string;
  targetLetters: string[];
  stages: PhonicsGameStage[];
}

export const GRADE_1_PHONICS_GAMES: Record<string, LessonPhonicsGameConfig> = {
  'tv-g1-b1': {
    lessonId: 'tv-g1-b1',
    lessonTitle: 'Bài 1: A a',
    targetLetters: ['a', 'A'],
    stages: [
      {
        id: 'tv-g1-b1-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào chữ "a" nhé!',
        targetSoundOrLetter: 'a',
        hintText: 'Chữ "a" có một nét cong tròn và một nét móc nhỏ bên phải đó bé!',
        options: [
          { id: 'opt-1', label: 'a', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'c', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'o', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'e', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b1-s2',
        gameType: 'bubble_pop',
        instruction: 'Hãy đập vỡ các bong bóng chứa chữ "A" in hoa và "a" in thường!',
        targetSoundOrLetter: 'A',
        hintText: 'Chữ A in hoa trông giống như một ngọn tháp cao!',
        options: [
          { id: 'pop-1', label: 'A', isCorrect: true, color: 'purple' },
          { id: 'pop-2', label: 'b', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'a', isCorrect: true, color: 'pink' },
          { id: 'pop-4', label: 'd', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'A', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b1-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong bài: "Nam và Hà ca hát"',
        hintText: 'Câu bắt đầu bằng tên bạn "Nam", sau đó là "và Hà", cuối cùng là "ca hát".',
        sequenceWords: ['Nam', 'và', 'Hà', 'ca hát'],
        options: [],
      },
    ],
  },

  'tv-g1-b2': {
    lessonId: 'tv-g1-b2',
    lessonTitle: 'Bài 2: B b',
    targetLetters: ['b', 'B'],
    stages: [
      {
        id: 'tv-g1-b2-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy chọn đúng chữ "b" màu kẹo ngọt nhé!',
        targetSoundOrLetter: 'b',
        hintText: 'Chữ "b" có nét sổ thẳng bên trái và bụng tròn ở bên phải phía dưới!',
        options: [
          { id: 'opt-1', label: 'd', isCorrect: false, color: 'sky' },
          { id: 'opt-2', label: 'b', isCorrect: true, color: 'amber' },
          { id: 'opt-3', label: 'p', isCorrect: false, color: 'emerald' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'purple' },
        ],
      },
      {
        id: 'tv-g1-b2-s2',
        gameType: 'letter_assemble',
        instruction: 'Bé hãy ghép chữ "b", chữ "a" và dấu huyền để được tiếng "bà" nhé!',
        hintText: 'Ghép âm đầu "b" với âm chính "a", thêm dấu huyền trên đầu chữ a tạo thành tiếng "bà".',
        assembleTarget: {
          resultWord: 'bà',
          pieces: ['b', 'a', '`'],
        },
        options: [
          { id: 'p-1', label: 'b', isCorrect: true, color: 'pink' },
          { id: 'p-2', label: 'a', isCorrect: true, color: 'amber' },
          { id: 'p-3', label: '` (huyền)', isCorrect: true, color: 'sky' },
          { id: 'p-4', label: 'c', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b2-s3',
        gameType: 'listen_pick',
        instruction: 'Nghe và chọn đúng tiếng: "bà bế bé"',
        targetSoundOrLetter: 'bà bế bé',
        hintText: 'Lắng nghe kỹ giọng đọc của Cáo MiuMiu nhé!',
        options: [
          { id: 'opt-1', label: 'bà bế bé', isCorrect: true, color: 'emerald' },
          { id: 'opt-2', label: 'bé bế ba', isCorrect: false, color: 'amber' },
          { id: 'opt-3', label: 'ba bế bé', isCorrect: false, color: 'sky' },
        ],
      },
    ],
  },

  'tv-g1-b3': {
    lessonId: 'tv-g1-b3',
    lessonTitle: 'Bài 3: C c - D d - Đ đ',
    targetLetters: ['c', 'd', 'đ'],
    stages: [
      {
        id: 'tv-g1-b3-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm chữ "đ" có nét gạch ngang trên đầu nhé!',
        targetSoundOrLetter: 'đ',
        hintText: 'Chữ "đ" khác chữ "d" ở chỗ có thêm nét gạch ngang nhỏ!',
        options: [
          { id: 'opt-1', label: 'd', isCorrect: false, color: 'sky' },
          { id: 'opt-2', label: 'đ', isCorrect: true, color: 'pink' },
          { id: 'opt-3', label: 'c', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'b', isCorrect: false, color: 'purple' },
        ],
      },
      {
        id: 'tv-g1-b3-s2',
        gameType: 'picture_match',
        instruction: 'Bé hãy chọn đúng tiếng tương ứng với hình "Cá cờ" nhé!',
        targetSoundOrLetter: 'cá cờ',
        hintText: 'Chú cá bơi lội có vây sặc sỡ trong bài học gọi là "cá cờ".',
        options: [
          { id: 'opt-1', label: 'cá cờ', isCorrect: true, subLabel: '🐟 Cá cờ', color: 'sky' },
          { id: 'opt-2', label: 'dế mèn', isCorrect: false, subLabel: '🦗 Dế mèn', color: 'emerald' },
          { id: 'opt-3', label: 'con đò', isCorrect: false, subLabel: '🛶 Con đò', color: 'amber' },
        ],
      },
      {
        id: 'tv-g1-b3-s3',
        gameType: 'bubble_pop',
        instruction: 'Chạm vỡ các bong bóng chứa chữ "c", "d", "đ"!',
        targetSoundOrLetter: 'c, d, đ',
        options: [
          { id: 'p-1', label: 'c', isCorrect: true, color: 'emerald' },
          { id: 'p-2', label: 'x', isCorrect: false, color: 'purple' },
          { id: 'p-3', label: 'd', isCorrect: true, color: 'sky' },
          { id: 'p-4', label: 'đ', isCorrect: true, color: 'pink' },
          { id: 'p-5', label: 'm', isCorrect: false, color: 'amber' },
        ],
      },
    ],
  },

  'tv-g1-b4': {
    lessonId: 'tv-g1-b4',
    lessonTitle: 'Bài 4: E e - Ê ê',
    targetLetters: ['e', 'ê'],
    stages: [
      {
        id: 'tv-g1-b4-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm chữ "ê" có chiếc mũ nhỏ xinh trên đầu!',
        targetSoundOrLetter: 'ê',
        hintText: 'Chữ "ê" là chữ "e" đội thêm chiếc nón chóp xinh xắn!',
        options: [
          { id: 'opt-1', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-2', label: 'ê', isCorrect: true, color: 'emerald' },
          { id: 'opt-3', label: 'c', isCorrect: false, color: 'sky' },
          { id: 'opt-4', label: 'o', isCorrect: false, color: 'pink' },
        ],
      },
      {
        id: 'tv-g1-b4-s2',
        gameType: 'picture_match',
        instruction: 'Bé nhìn xem hình vẽ quả gì và chọn đúng từ nhé!',
        targetSoundOrLetter: 'quả lê',
        hintText: 'Quả màu vàng ngọt mát trong bài là "quả lê".',
        options: [
          { id: 'opt-1', label: 'quả lê', isCorrect: true, subLabel: '🍐 Quả lê', color: 'amber' },
          { id: 'opt-2', label: 'chú bê', isCorrect: false, subLabel: '🐂 Chú bê', color: 'emerald' },
          { id: 'opt-3', label: 'bé vẽ', isCorrect: false, subLabel: '🎨 Bé vẽ', color: 'pink' },
        ],
      },
      {
        id: 'tv-g1-b4-s3',
        gameType: 'letter_assemble',
        instruction: 'Ghép chữ "b" và "ê" để được tiếng "bê" (chú bò con)!',
        assembleTarget: {
          resultWord: 'bê',
          pieces: ['b', 'ê'],
        },
        options: [
          { id: 'p-1', label: 'b', isCorrect: true, color: 'sky' },
          { id: 'p-2', label: 'ê', isCorrect: true, color: 'emerald' },
          { id: 'p-3', label: 'd', isCorrect: false, color: 'amber' },
        ],
      },
    ],
  },

  'tv-g1-b5': {
    lessonId: 'tv-g1-b5',
    lessonTitle: 'Bài 5: Ôn tập và kể chuyện',
    targetLetters: ['a', 'b', 'c', 'd', 'đ', 'e', 'ê'],
    stages: [
      {
        id: 'tv-g1-b5-s1',
        gameType: 'unit_review',
        instruction: 'Đại hội Ôn tập Chặng 1: Bé hãy chọn đúng chữ cái mà Cáo MiuMiu đọc nhé!',
        targetSoundOrLetter: 'đ',
        options: [
          { id: 'r-1', label: 'a', isCorrect: false, color: 'pink' },
          { id: 'r-2', label: 'b', isCorrect: false, color: 'amber' },
          { id: 'r-3', label: 'đ', isCorrect: true, color: 'emerald' },
          { id: 'r-4', label: 'ê', isCorrect: false, color: 'sky' },
        ],
      },
      {
        id: 'tv-g1-b5-s2',
        gameType: 'picture_match',
        instruction: 'Bé hãy chọn đúng tên nhân vật trong câu chuyện: "Chú dê con đeo chuông vàng"',
        targetSoundOrLetter: 'dê con',
        options: [
          { id: 'opt-1', label: 'dê con', isCorrect: true, subLabel: '🐐 Dê con đeo chuông', color: 'emerald' },
          { id: 'opt-2', label: 'cá cờ', isCorrect: false, subLabel: '🐟 Cá cờ', color: 'sky' },
          { id: 'opt-3', label: 'dế mèn', isCorrect: false, subLabel: '🦗 Dế mèn', color: 'amber' },
        ],
      },
    ],
  },

  'tv-g1-b6': {
    lessonId: 'tv-g1-b6',
    lessonTitle: 'Bài 6: O o',
    targetLetters: ['o', 'O'],
    stages: [
      {
        id: 'tv-g1-b6-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm chữ "o" tròn như quả trứng gà!',
        targetSoundOrLetter: 'o',
        options: [
          { id: 'opt-1', label: 'o', isCorrect: true, color: 'amber' },
          { id: 'opt-2', label: 'c', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'a', isCorrect: false, color: 'pink' },
          { id: 'opt-4', label: 'e', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b6-s2',
        gameType: 'picture_match',
        instruction: 'Hình ảnh chú bò đang làm gì bên bãi cỏ xanh?',
        targetSoundOrLetter: 'bò gặm cỏ',
        options: [
          { id: 'opt-1', label: 'bò gặm cỏ', isCorrect: true, subLabel: '🐄 Bò gặm cỏ', color: 'emerald' },
          { id: 'opt-2', label: 'con cò bay', isCorrect: false, subLabel: '🕊️ Con cò', color: 'sky' },
          { id: 'opt-3', label: 'gà gáy', isCorrect: false, subLabel: '🐓 Gà gáy', color: 'amber' },
        ],
      },
    ],
  },

  'tv-g1-b7': {
    lessonId: 'tv-g1-b7',
    lessonTitle: 'Bài 7: Ô ô - Ơ ơ',
    targetLetters: ['ô', 'ơ'],
    stages: [
      {
        id: 'tv-g1-b7-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm chữ "ơ" có chiếc râu cong nhỏ xinh nhé!',
        targetSoundOrLetter: 'ơ',
        options: [
          { id: 'opt-1', label: 'ô', isCorrect: false, color: 'amber' },
          { id: 'opt-2', label: 'ơ', isCorrect: true, color: 'pink' },
          { id: 'opt-3', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'purple' },
        ],
      },
      {
        id: 'tv-g1-b7-s2',
        gameType: 'picture_match',
        instruction: 'Bé hãy chọn đúng tiếng tương ứng với cảnh "Bờ hồ"!',
        targetSoundOrLetter: 'bờ hồ',
        options: [
          { id: 'opt-1', label: 'bờ hồ', isCorrect: true, subLabel: '🏞️ Bờ hồ', color: 'sky' },
          { id: 'opt-2', label: 'cái nơ', isCorrect: false, subLabel: '🎀 Cái nơ', color: 'pink' },
          { id: 'opt-3', label: 'bố mẹ', isCorrect: false, subLabel: '👨‍👩‍👧 Bố mẹ', color: 'amber' },
        ],
      },
    ],
  },

  'tv-g1-b8': {
    lessonId: 'tv-g1-b8',
    lessonTitle: 'Bài 8: I i - K k',
    targetLetters: ['i', 'k'],
    stages: [
      {
        id: 'tv-g1-b8-s1',
        gameType: 'letter_pick',
        instruction: 'Tìm chữ "k" cao kều có hai nhánh tay mở rộng!',
        targetSoundOrLetter: 'k',
        options: [
          { id: 'opt-1', label: 'h', isCorrect: false, color: 'sky' },
          { id: 'opt-2', label: 'k', isCorrect: true, color: 'purple' },
          { id: 'opt-3', label: 'l', isCorrect: false, color: 'emerald' },
          { id: 'opt-4', label: 'i', isCorrect: false, color: 'amber' },
        ],
      },
      {
        id: 'tv-g1-b8-s2',
        gameType: 'listen_pick',
        instruction: 'Nghe quy tắc chính tả: Chữ K ghép với i, e, ê. Chọn tiếng: "thước kẻ"',
        targetSoundOrLetter: 'thước kẻ',
        options: [
          { id: 'opt-1', label: 'thước kẻ', isCorrect: true, color: 'amber' },
          { id: 'opt-2', label: 'viên bi', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'cái kệ', isCorrect: false, color: 'emerald' },
        ],
      },
    ],
  },

  'tv-g1-b9': {
    lessonId: 'tv-g1-b9',
    lessonTitle: 'Bài 9: U u - Ư ư',
    targetLetters: ['u', 'ư'],
    stages: [
      {
        id: 'tv-g1-b9-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm chữ "ư" có chiếc râu xinh xắn ở góc trên!',
        targetSoundOrLetter: 'ư',
        options: [
          { id: 'opt-1', label: 'u', isCorrect: false, color: 'sky' },
          { id: 'opt-2', label: 'ư', isCorrect: true, color: 'emerald' },
          { id: 'opt-3', label: 'n', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'm', isCorrect: false, color: 'pink' },
        ],
      },
      {
        id: 'tv-g1-b9-s2',
        gameType: 'picture_match',
        instruction: 'Bé nhìn xem đây là chùm quả gì chín vàng trên cây?',
        targetSoundOrLetter: 'đu đủ',
        options: [
          { id: 'opt-1', label: 'đu đủ', isCorrect: true, subLabel: '🍈 Quả đu đủ', color: 'amber' },
          { id: 'opt-2', label: 'lá thư', isCorrect: false, subLabel: '✉️ Lá thư', color: 'sky' },
          { id: 'opt-3', label: 'củ cải', isCorrect: false, subLabel: '🥕 Củ cải', color: 'emerald' },
        ],
      },
    ],
  },

  'tv-g1-b10': {
    lessonId: 'tv-g1-b10',
    lessonTitle: 'Bài 10: Ôn tập âm chữ cái',
    targetLetters: ['o', 'ô', 'ơ', 'i', 'k', 'u', 'ư'],
    stages: [
      {
        id: 'tv-g1-b10-s1',
        gameType: 'unit_review',
        instruction: 'Đại hội Ôn tập Chặng 2: Tìm chữ cái còn thiếu trong tiếng "đu ...ủ" (quả đu đủ)',
        targetSoundOrLetter: 'đ',
        options: [
          { id: 'opt-1', label: 'đ', isCorrect: true, color: 'emerald' },
          { id: 'opt-2', label: 'b', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'c', isCorrect: false, color: 'pink' },
          { id: 'opt-4', label: 'k', isCorrect: false, color: 'amber' },
        ],
      },
    ],
  },

  'tv-g1-b11': {
    lessonId: 'tv-g1-b11',
    lessonTitle: 'Bài 11: L l - M m',
    targetLetters: ['l', 'm'],
    stages: [
      {
        id: 'tv-g1-b11-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm chữ "m" có hai chiếc cổng vòm tròn xinh!',
        targetSoundOrLetter: 'm',
        options: [
          { id: 'opt-1', label: 'n', isCorrect: false, color: 'sky' },
          { id: 'opt-2', label: 'm', isCorrect: true, color: 'pink' },
          { id: 'opt-3', label: 'l', isCorrect: false, color: 'emerald' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'amber' },
        ],
      },
      {
        id: 'tv-g1-b11-s2',
        gameType: 'picture_match',
        instruction: 'Chọn đúng loại quả có vị chua ngọt trong bài: "quả me"',
        targetSoundOrLetter: 'quả me',
        options: [
          { id: 'opt-1', label: 'quả me', isCorrect: true, subLabel: '🌱 Quả me', color: 'emerald' },
          { id: 'opt-2', label: 'quả lê', isCorrect: false, subLabel: '🍐 Quả lê', color: 'amber' },
          { id: 'opt-3', label: 'quả mận', isCorrect: false, subLabel: '🍎 Quả mận', color: 'pink' },
        ],
      },
    ],
  },

  'tv-g1-b12': {
    lessonId: 'tv-g1-b12',
    lessonTitle: 'Bài 12: N n - P p',
    targetLetters: ['n', 'p'],
    stages: [
      {
        id: 'tv-g1-b12-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy phân biệt và chọn đúng chữ "n" có một vòm cong nhé!',
        targetSoundOrLetter: 'n',
        options: [
          { id: 'opt-1', label: 'm', isCorrect: false, color: 'purple' },
          { id: 'opt-2', label: 'n', isCorrect: true, color: 'sky' },
          { id: 'opt-3', label: 'u', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'p', isCorrect: false, color: 'pink' },
        ],
      },
      {
        id: 'tv-g1-b12-s2',
        gameType: 'picture_match',
        instruction: 'Bé chọn đúng hình đóa hoa đang hé nở: "nụ hoa"',
        targetSoundOrLetter: 'nụ hoa',
        options: [
          { id: 'opt-1', label: 'nụ hoa', isCorrect: true, subLabel: '🌸 Nụ hoa', color: 'pink' },
          { id: 'opt-2', label: 'cái nơ', isCorrect: false, subLabel: '🎀 Cái nơ', color: 'amber' },
          { id: 'opt-3', label: 'lá sen', isCorrect: false, subLabel: '🍃 Lá sen', color: 'emerald' },
        ],
      },
    ],
  },

  'tv-g1-b13': {
    lessonId: 'tv-g1-b13',
    lessonTitle: 'Bài 13: R r - S s',
    targetLetters: ['r', 's'],
    stages: [
      {
        id: 'tv-g1-b13-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm chữ "s" uốn cong như chú rắn nhỏ!',
        targetSoundOrLetter: 's',
        options: [
          { id: 'opt-1', label: 'r', isCorrect: false, color: 'sky' },
          { id: 'opt-2', label: 's', isCorrect: true, color: 'emerald' },
          { id: 'opt-3', label: 'c', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'x', isCorrect: false, color: 'purple' },
        ],
      },
      {
        id: 'tv-g1-b13-s2',
        gameType: 'picture_match',
        instruction: 'Bé hãy chọn đúng chú chim hót líu lo trên cành: "chim sẻ"',
        targetSoundOrLetter: 'chim sẻ',
        options: [
          { id: 'opt-1', label: 'chim sẻ', isCorrect: true, subLabel: '🐦 Chim sẻ', color: 'amber' },
          { id: 'opt-2', label: 'chim sáo', isCorrect: false, subLabel: '🦜 Chim sáo', color: 'sky' },
          { id: 'opt-3', label: 'cây si', isCorrect: false, subLabel: '🌳 Cây si', color: 'emerald' },
        ],
      },
    ],
  },

  'tv-g1-b14': {
    lessonId: 'tv-g1-b14',
    lessonTitle: 'Bài 14: T t - Th th',
    targetLetters: ['t', 'th'],
    stages: [
      {
        id: 'tv-g1-b14-s1',
        gameType: 'letter_pick',
        instruction: 'Tìm âm ghép "th" gồm chữ "t" đứng trước chữ "h" đứng sau!',
        targetSoundOrLetter: 'th',
        options: [
          { id: 'opt-1', label: 't', isCorrect: false, color: 'sky' },
          { id: 'opt-2', label: 'th', isCorrect: true, color: 'purple' },
          { id: 'opt-3', label: 'ch', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'kh', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b14-s2',
        gameType: 'picture_match',
        instruction: 'Hình chú thỏ trắng tai dài tương ứng với từ nào?',
        targetSoundOrLetter: 'chú thỏ',
        options: [
          { id: 'opt-1', label: 'chú thỏ', isCorrect: true, subLabel: '🐇 Chú thỏ', color: 'pink' },
          { id: 'opt-2', label: 'tổ chim', isCorrect: false, subLabel: '🪺 Tổ chim', color: 'amber' },
          { id: 'opt-3', label: 'cái thìa', isCorrect: false, subLabel: '🥄 Cái thìa', color: 'sky' },
        ],
      },
    ],
  },

  'tv-g1-b15': {
    lessonId: 'tv-g1-b15',
    lessonTitle: 'Bài 15: V v - X x',
    targetLetters: ['v', 'x'],
    stages: [
      {
        id: 'tv-g1-b15-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm chữ "v" có hình chữ V chiến thắng!',
        targetSoundOrLetter: 'v',
        options: [
          { id: 'opt-1', label: 'u', isCorrect: false, color: 'sky' },
          { id: 'opt-2', label: 'v', isCorrect: true, color: 'emerald' },
          { id: 'opt-3', label: 'x', isCorrect: false, color: 'pink' },
          { id: 'opt-4', label: 'y', isCorrect: false, color: 'amber' },
        ],
      },
      {
        id: 'tv-g1-b15-s2',
        gameType: 'picture_match',
        instruction: 'Phương tiện hai bánh bé thích đạp dạo chơi là gì?',
        targetSoundOrLetter: 'xe đạp',
        options: [
          { id: 'opt-1', label: 'xe đạp', isCorrect: true, subLabel: '🚲 Xe đạp', color: 'sky' },
          { id: 'opt-2', label: 'quả vú sữa', isCorrect: false, subLabel: '🍏 Quả vú sữa', color: 'emerald' },
          { id: 'opt-3', label: 'cuốn vở', isCorrect: false, subLabel: '📓 Cuốn vở', color: 'amber' },
        ],
      },
    ],
  },

  'tv-g1-b16': {
    lessonId: 'tv-g1-b16',
    lessonTitle: 'Bài 16: Ch ch - Kh kh',
    targetLetters: ['ch', 'kh'],
    stages: [
      {
        id: 'tv-g1-b16-s1',
        gameType: 'listen_pick',
        instruction: 'Lắng nghe âm thanh và chọn đúng âm ghép: "kh"',
        targetSoundOrLetter: 'kh',
        options: [
          { id: 'opt-1', label: 'ch', isCorrect: false, color: 'sky' },
          { id: 'opt-2', label: 'kh', isCorrect: true, color: 'amber' },
          { id: 'opt-3', label: 'nh', isCorrect: false, color: 'emerald' },
          { id: 'opt-4', label: 'th', isCorrect: false, color: 'purple' },
        ],
      },
      {
        id: 'tv-g1-b16-s2',
        gameType: 'picture_match',
        instruction: 'Quả có năm cánh hình ngôi sao vàng là quả gì?',
        targetSoundOrLetter: 'quả khế',
        options: [
          { id: 'opt-1', label: 'quả khế', isCorrect: true, subLabel: '⭐ Quả khế', color: 'amber' },
          { id: 'opt-2', label: 'chú khỉ', isCorrect: false, subLabel: '🐒 Chú khỉ', color: 'emerald' },
          { id: 'opt-3', label: 'chợ quê', isCorrect: false, subLabel: '🏪 Chợ quê', color: 'sky' },
        ],
      },
    ],
  },

  'tv-g1-b17': {
    lessonId: 'tv-g1-b17',
    lessonTitle: 'Bài 17: Nh nh - Ng ng',
    targetLetters: ['nh', 'ng'],
    stages: [
      {
        id: 'tv-g1-b17-s1',
        gameType: 'listen_pick',
        instruction: 'Nghe phát âm và chọn đúng âm ghép: "ng" (ngờ đơn)',
        targetSoundOrLetter: 'ng',
        options: [
          { id: 'opt-1', label: 'nh', isCorrect: false, color: 'pink' },
          { id: 'opt-2', label: 'ng', isCorrect: true, color: 'emerald' },
          { id: 'opt-3', label: 'ngh', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'gh', isCorrect: false, color: 'sky' },
        ],
      },
      {
        id: 'tv-g1-b17-s2',
        gameType: 'picture_match',
        instruction: 'Chùm quả mọng màu tím ngọt ngào là gì?',
        targetSoundOrLetter: 'chùm nho',
        options: [
          { id: 'opt-1', label: 'chùm nho', isCorrect: true, subLabel: '🍇 Chùm nho', color: 'purple' },
          { id: 'opt-2', label: 'bắp ngô', isCorrect: false, subLabel: '🌽 Bắp ngô', color: 'amber' },
          { id: 'opt-3', label: 'ngôi nhà', isCorrect: false, subLabel: '🏡 Ngôi nhà', color: 'sky' },
        ],
      },
    ],
  },

  'tv-g1-b18': {
    lessonId: 'tv-g1-b18',
    lessonTitle: 'Bài 18: Ngh ngh - Gh gh',
    targetLetters: ['ngh', 'gh'],
    stages: [
      {
        id: 'tv-g1-b18-s1',
        gameType: 'listen_pick',
        instruction: 'Quy tắc: Ngh, Gh chỉ đi với i, e, ê. Nghe và chọn đúng tiếng: "con nghé"',
        targetSoundOrLetter: 'con nghé',
        options: [
          { id: 'opt-1', label: 'con nghé', isCorrect: true, subLabel: '🐃 Chú trâu nhỏ', color: 'emerald' },
          { id: 'opt-2', label: 'ghế gỗ', isCorrect: false, subLabel: '🪑 Ghế ngồi', color: 'amber' },
          { id: 'opt-3', label: 'ghi nhớ', isCorrect: false, subLabel: '📝 Ghi nhớ', color: 'sky' },
        ],
      },
      {
        id: 'tv-g1-b18-s2',
        gameType: 'letter_assemble',
        instruction: 'Ghép âm "gh", âm "ê" và dấu sắc để tạo tiếng "ghế"!',
        assembleTarget: {
          resultWord: 'ghế',
          pieces: ['gh', 'ê', '/'],
        },
        options: [
          { id: 'p-1', label: 'gh', isCorrect: true, color: 'sky' },
          { id: 'p-2', label: 'ê', isCorrect: true, color: 'emerald' },
          { id: 'p-3', label: '/ (sắc)', isCorrect: true, color: 'amber' },
          { id: 'p-4', label: 'ngh', isCorrect: false, color: 'pink' },
        ],
      },
    ],
  },

  'tv-g1-b19': {
    lessonId: 'tv-g1-b19',
    lessonTitle: 'Bài 19: An an - At at',
    targetLetters: ['an', 'at'],
    stages: [
      {
        id: 'tv-g1-b19-s1',
        gameType: 'listen_pick',
        instruction: 'Nghe phát âm vần và chọn đúng: Vần "an"',
        targetSoundOrLetter: 'an',
        options: [
          { id: 'opt-1', label: 'an', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'at', isCorrect: false, color: 'amber' },
          { id: 'opt-3', label: 'am', isCorrect: false, color: 'sky' },
          { id: 'opt-4', label: 'ap', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b19-s2',
        gameType: 'order_sequence',
        instruction: 'Xếp các từ thành câu đúng trong SGK: "Bé tan học"',
        sequenceWords: ['Bé', 'tan', 'học'],
        options: [],
      },
    ],
  },

  'tv-g1-b20': {
    lessonId: 'tv-g1-b20',
    lessonTitle: 'Bài 20: Ôn tập cuối Học kì 1',
    targetLetters: ['a-z'],
    stages: [
      {
        id: 'tv-g1-b20-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại tiệc Tổng kết Học kì 1: Chinh phục vương quốc Chữ Cái cùng Cáo MiuMiu!',
        targetSoundOrLetter: 'vui học',
        options: [
          { id: 'opt-1', label: 'Bé chăm ngoan', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'Bé học giỏi', isCorrect: true, color: 'emerald' },
          { id: 'opt-3', label: 'Yêu tiếng Việt', isCorrect: true, color: 'sky' },
          { id: 'opt-4', label: 'Chào học kì 2', isCorrect: true, color: 'amber' },
        ],
      },
    ],
  },
};
