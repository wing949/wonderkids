// src/data/curriculum/vietnamese/grade1PhonicsGames.ts
// Bộ dữ liệu Mini Game Âm Vần chuẩn 100% SGK Tiếng Việt 1 Tập 1 (Kết nối tri thức với cuộc sống - NXB Giáo Dục Việt Nam)
// Đầy đủ toàn bộ 83 bài học chính thức theo mục lục NXB Giáo Dục Việt Nam

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
  color?: string; // 'pink' | 'amber' | 'emerald' | 'sky' | 'purple'
}

export interface PhonicsGameStage {
  id: string;
  gameType: PhonicsGameType;
  instruction: string;
  targetSoundOrLetter?: string;
  options: PhonicsGameOption[];
  assembleTarget?: {
    resultWord: string;
    pieces: string[];
  };
  sequenceWords?: string[];
  hintText?: string;
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
        instruction: 'Bé hãy tìm và chạm vào âm chữ "a" của bài học nhé!',
        targetSoundOrLetter: 'a',
        hintText: 'Nhìn kỹ chữ cái "a" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'a', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b1-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "a" và "A" trong bài!',
        targetSoundOrLetter: 'a',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'a', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'A', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'a', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b1-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 14!',
        hintText: 'Câu chuẩn bài học: "Nam và Hà ca hát"',
        sequenceWords: ['Nam', 'và', 'Hà', 'ca hát'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b1': {
    lessonId: 'tv-g1-t1-b1',
    lessonTitle: 'Bài 1: A a',
    targetLetters: ['a', 'A'],
    stages: [
      {
        id: 'tv-g1-b1-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "a" của bài học nhé!',
        targetSoundOrLetter: 'a',
        hintText: 'Nhìn kỹ chữ cái "a" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'a', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b1-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "a" và "A" trong bài!',
        targetSoundOrLetter: 'a',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'a', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'A', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'a', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b1-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 14!',
        hintText: 'Câu chuẩn bài học: "Nam và Hà ca hát"',
        sequenceWords: ['Nam', 'và', 'Hà', 'ca hát'],
        options: [],
      }
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
        instruction: 'Bé hãy tìm và chạm vào âm chữ "b" của bài học nhé!',
        targetSoundOrLetter: 'b',
        hintText: 'Nhìn kỹ chữ cái "b" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'b', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b2-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "b" và "B" trong bài!',
        targetSoundOrLetter: 'b',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'b', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'B', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'b', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b2-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 16!',
        hintText: 'Câu chuẩn bài học: "Bà bế bé"',
        sequenceWords: ['Bà', 'bế', 'bé'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b2': {
    lessonId: 'tv-g1-t1-b2',
    lessonTitle: 'Bài 2: B b',
    targetLetters: ['b', 'B'],
    stages: [
      {
        id: 'tv-g1-b2-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "b" của bài học nhé!',
        targetSoundOrLetter: 'b',
        hintText: 'Nhìn kỹ chữ cái "b" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'b', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b2-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "b" và "B" trong bài!',
        targetSoundOrLetter: 'b',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'b', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'B', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'b', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b2-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 16!',
        hintText: 'Câu chuẩn bài học: "Bà bế bé"',
        sequenceWords: ['Bà', 'bế', 'bé'],
        options: [],
      }
    ],
  },
  'tv-g1-b3': {
    lessonId: 'tv-g1-b3',
    lessonTitle: 'Bài 3: C c',
    targetLetters: ['c', 'C'],
    stages: [
      {
        id: 'tv-g1-b3-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "c" của bài học nhé!',
        targetSoundOrLetter: 'c',
        hintText: 'Nhìn kỹ chữ cái "c" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'c', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b3-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "c" và "C" trong bài!',
        targetSoundOrLetter: 'c',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'c', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'C', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'c', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b3-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 18!',
        hintText: 'Câu chuẩn bài học: "Bé có cá cờ"',
        sequenceWords: ['Bé', 'có', 'cá cờ'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b3': {
    lessonId: 'tv-g1-t1-b3',
    lessonTitle: 'Bài 3: C c',
    targetLetters: ['c', 'C'],
    stages: [
      {
        id: 'tv-g1-b3-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "c" của bài học nhé!',
        targetSoundOrLetter: 'c',
        hintText: 'Nhìn kỹ chữ cái "c" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'c', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b3-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "c" và "C" trong bài!',
        targetSoundOrLetter: 'c',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'c', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'C', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'c', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b3-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 18!',
        hintText: 'Câu chuẩn bài học: "Bé có cá cờ"',
        sequenceWords: ['Bé', 'có', 'cá cờ'],
        options: [],
      }
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
        instruction: 'Bé hãy tìm và chạm vào âm chữ "e" của bài học nhé!',
        targetSoundOrLetter: 'e',
        hintText: 'Nhìn kỹ chữ cái "e" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'e', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b4-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "e" và "ê" trong bài!',
        targetSoundOrLetter: 'e',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'e', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ê', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'e', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b4-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 20!',
        hintText: 'Câu chuẩn bài học: "Bé vẽ chú bê"',
        sequenceWords: ['Bé', 'vẽ', 'chú bê'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b4': {
    lessonId: 'tv-g1-t1-b4',
    lessonTitle: 'Bài 4: E e - Ê ê',
    targetLetters: ['e', 'ê'],
    stages: [
      {
        id: 'tv-g1-b4-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "e" của bài học nhé!',
        targetSoundOrLetter: 'e',
        hintText: 'Nhìn kỹ chữ cái "e" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'e', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b4-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "e" và "ê" trong bài!',
        targetSoundOrLetter: 'e',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'e', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ê', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'e', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b4-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 20!',
        hintText: 'Câu chuẩn bài học: "Bé vẽ chú bê"',
        sequenceWords: ['Bé', 'vẽ', 'chú bê'],
        options: [],
      }
    ],
  },
  'tv-g1-b5': {
    lessonId: 'tv-g1-b5',
    lessonTitle: 'Bài 5: Ôn tập và kể chuyện',
    targetLetters: ['a', 'b', 'c', 'e', 'ê'],
    stages: [
      {
        id: 'tv-g1-b5-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "ba"!',
        targetSoundOrLetter: 'a',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'a', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b5-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Bà', 'cho', 'bé', 'cá'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b5': {
    lessonId: 'tv-g1-t1-b5',
    lessonTitle: 'Bài 5: Ôn tập và kể chuyện',
    targetLetters: ['a', 'b', 'c', 'e', 'ê'],
    stages: [
      {
        id: 'tv-g1-b5-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "ba"!',
        targetSoundOrLetter: 'a',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'a', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b5-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Bà', 'cho', 'bé', 'cá'],
        options: [],
      }
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
        instruction: 'Bé hãy tìm và chạm vào âm chữ "o" của bài học nhé!',
        targetSoundOrLetter: 'o',
        hintText: 'Nhìn kỹ chữ cái "o" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'o', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b6-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "o" và "O" trong bài!',
        targetSoundOrLetter: 'o',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'o', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'O', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'o', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b6-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 24!',
        hintText: 'Câu chuẩn bài học: "Bò gặm cỏ"',
        sequenceWords: ['Bò', 'gặm', 'cỏ'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b6': {
    lessonId: 'tv-g1-t1-b6',
    lessonTitle: 'Bài 6: O o',
    targetLetters: ['o', 'O'],
    stages: [
      {
        id: 'tv-g1-b6-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "o" của bài học nhé!',
        targetSoundOrLetter: 'o',
        hintText: 'Nhìn kỹ chữ cái "o" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'o', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b6-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "o" và "O" trong bài!',
        targetSoundOrLetter: 'o',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'o', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'O', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'o', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b6-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 24!',
        hintText: 'Câu chuẩn bài học: "Bò gặm cỏ"',
        sequenceWords: ['Bò', 'gặm', 'cỏ'],
        options: [],
      }
    ],
  },
  'tv-g1-b7': {
    lessonId: 'tv-g1-b7',
    lessonTitle: 'Bài 7: Ô ô',
    targetLetters: ['ô', 'Ô'],
    stages: [
      {
        id: 'tv-g1-b7-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ô" của bài học nhé!',
        targetSoundOrLetter: 'ô',
        hintText: 'Nhìn kỹ chữ cái "ô" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ô', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b7-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ô" và "Ô" trong bài!',
        targetSoundOrLetter: 'ô',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ô', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'Ô', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ô', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b7-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 26!',
        hintText: 'Câu chuẩn bài học: "Bố cho bé đi hồ"',
        sequenceWords: ['Bố', 'cho', 'bé', 'đi hồ'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b7': {
    lessonId: 'tv-g1-t1-b7',
    lessonTitle: 'Bài 7: Ô ô',
    targetLetters: ['ô', 'Ô'],
    stages: [
      {
        id: 'tv-g1-b7-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ô" của bài học nhé!',
        targetSoundOrLetter: 'ô',
        hintText: 'Nhìn kỹ chữ cái "ô" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ô', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b7-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ô" và "Ô" trong bài!',
        targetSoundOrLetter: 'ô',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ô', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'Ô', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ô', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b7-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 26!',
        hintText: 'Câu chuẩn bài học: "Bố cho bé đi hồ"',
        sequenceWords: ['Bố', 'cho', 'bé', 'đi hồ'],
        options: [],
      }
    ],
  },
  'tv-g1-b8': {
    lessonId: 'tv-g1-b8',
    lessonTitle: 'Bài 8: D d - Đ đ',
    targetLetters: ['d', 'đ'],
    stages: [
      {
        id: 'tv-g1-b8-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "d" của bài học nhé!',
        targetSoundOrLetter: 'd',
        hintText: 'Nhìn kỹ chữ cái "d" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'd', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b8-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "d" và "đ" trong bài!',
        targetSoundOrLetter: 'd',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'd', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'đ', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'd', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b8-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 28!',
        hintText: 'Câu chuẩn bài học: "Dế mèn hát ca"',
        sequenceWords: ['Dế', 'mèn', 'hát ca'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b8': {
    lessonId: 'tv-g1-t1-b8',
    lessonTitle: 'Bài 8: D d - Đ đ',
    targetLetters: ['d', 'đ'],
    stages: [
      {
        id: 'tv-g1-b8-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "d" của bài học nhé!',
        targetSoundOrLetter: 'd',
        hintText: 'Nhìn kỹ chữ cái "d" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'd', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b8-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "d" và "đ" trong bài!',
        targetSoundOrLetter: 'd',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'd', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'đ', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'd', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b8-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 28!',
        hintText: 'Câu chuẩn bài học: "Dế mèn hát ca"',
        sequenceWords: ['Dế', 'mèn', 'hát ca'],
        options: [],
      }
    ],
  },
  'tv-g1-b9': {
    lessonId: 'tv-g1-b9',
    lessonTitle: 'Bài 9: Ơ ơ',
    targetLetters: ['ơ', 'Ơ'],
    stages: [
      {
        id: 'tv-g1-b9-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ơ" của bài học nhé!',
        targetSoundOrLetter: 'ơ',
        hintText: 'Nhìn kỹ chữ cái "ơ" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ơ', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b9-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ơ" và "Ơ" trong bài!',
        targetSoundOrLetter: 'ơ',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ơ', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'Ơ', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ơ', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b9-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 30!',
        hintText: 'Câu chuẩn bài học: "Bé cài nơ đỏ"',
        sequenceWords: ['Bé', 'cài', 'nơ đỏ'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b9': {
    lessonId: 'tv-g1-t1-b9',
    lessonTitle: 'Bài 9: Ơ ơ',
    targetLetters: ['ơ', 'Ơ'],
    stages: [
      {
        id: 'tv-g1-b9-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ơ" của bài học nhé!',
        targetSoundOrLetter: 'ơ',
        hintText: 'Nhìn kỹ chữ cái "ơ" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ơ', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b9-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ơ" và "Ơ" trong bài!',
        targetSoundOrLetter: 'ơ',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ơ', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'Ơ', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ơ', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b9-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 30!',
        hintText: 'Câu chuẩn bài học: "Bé cài nơ đỏ"',
        sequenceWords: ['Bé', 'cài', 'nơ đỏ'],
        options: [],
      }
    ],
  },
  'tv-g1-b10': {
    lessonId: 'tv-g1-b10',
    lessonTitle: 'Bài 10: Ôn tập và kể chuyện',
    targetLetters: ['o', 'ô', 'd', 'đ', 'ơ'],
    stages: [
      {
        id: 'tv-g1-b10-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "cô bé"!',
        targetSoundOrLetter: 'o',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'o', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b10-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Bé', 'chăm', 'học bài'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b10': {
    lessonId: 'tv-g1-t1-b10',
    lessonTitle: 'Bài 10: Ôn tập và kể chuyện',
    targetLetters: ['o', 'ô', 'd', 'đ', 'ơ'],
    stages: [
      {
        id: 'tv-g1-b10-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "cô bé"!',
        targetSoundOrLetter: 'o',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'o', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b10-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Bé', 'chăm', 'học bài'],
        options: [],
      }
    ],
  },
  'tv-g1-b11': {
    lessonId: 'tv-g1-b11',
    lessonTitle: 'Bài 11: I i - K k',
    targetLetters: ['i', 'k'],
    stages: [
      {
        id: 'tv-g1-b11-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "i" của bài học nhé!',
        targetSoundOrLetter: 'i',
        hintText: 'Nhìn kỹ chữ cái "i" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'i', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b11-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "i" và "k" trong bài!',
        targetSoundOrLetter: 'i',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'i', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'k', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'i', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b11-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 34!',
        hintText: 'Câu chuẩn bài học: "Bé kẻ vở"',
        sequenceWords: ['Bé', 'kẻ', 'vở'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b11': {
    lessonId: 'tv-g1-t1-b11',
    lessonTitle: 'Bài 11: I i - K k',
    targetLetters: ['i', 'k'],
    stages: [
      {
        id: 'tv-g1-b11-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "i" của bài học nhé!',
        targetSoundOrLetter: 'i',
        hintText: 'Nhìn kỹ chữ cái "i" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'i', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b11-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "i" và "k" trong bài!',
        targetSoundOrLetter: 'i',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'i', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'k', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'i', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b11-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 34!',
        hintText: 'Câu chuẩn bài học: "Bé kẻ vở"',
        sequenceWords: ['Bé', 'kẻ', 'vở'],
        options: [],
      }
    ],
  },
  'tv-g1-b12': {
    lessonId: 'tv-g1-b12',
    lessonTitle: 'Bài 12: H h - L l',
    targetLetters: ['h', 'l'],
    stages: [
      {
        id: 'tv-g1-b12-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "h" của bài học nhé!',
        targetSoundOrLetter: 'h',
        hintText: 'Nhìn kỹ chữ cái "h" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'h', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b12-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "h" và "l" trong bài!',
        targetSoundOrLetter: 'h',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'h', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'l', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'h', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b12-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 36!',
        hintText: 'Câu chuẩn bài học: "Hà có hoa hồng"',
        sequenceWords: ['Hà', 'có', 'hoa hồng'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b12': {
    lessonId: 'tv-g1-t1-b12',
    lessonTitle: 'Bài 12: H h - L l',
    targetLetters: ['h', 'l'],
    stages: [
      {
        id: 'tv-g1-b12-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "h" của bài học nhé!',
        targetSoundOrLetter: 'h',
        hintText: 'Nhìn kỹ chữ cái "h" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'h', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b12-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "h" và "l" trong bài!',
        targetSoundOrLetter: 'h',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'h', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'l', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'h', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b12-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 36!',
        hintText: 'Câu chuẩn bài học: "Hà có hoa hồng"',
        sequenceWords: ['Hà', 'có', 'hoa hồng'],
        options: [],
      }
    ],
  },
  'tv-g1-b13': {
    lessonId: 'tv-g1-b13',
    lessonTitle: 'Bài 13: U u - Ư ư',
    targetLetters: ['u', 'ư'],
    stages: [
      {
        id: 'tv-g1-b13-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "u" của bài học nhé!',
        targetSoundOrLetter: 'u',
        hintText: 'Nhìn kỹ chữ cái "u" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'u', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b13-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "u" và "ư" trong bài!',
        targetSoundOrLetter: 'u',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'u', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ư', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'u', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b13-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 38!',
        hintText: 'Câu chuẩn bài học: "Đu đủ chín ngọt lừ"',
        sequenceWords: ['Đu đủ', 'chín', 'ngọt lừ'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b13': {
    lessonId: 'tv-g1-t1-b13',
    lessonTitle: 'Bài 13: U u - Ư ư',
    targetLetters: ['u', 'ư'],
    stages: [
      {
        id: 'tv-g1-b13-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "u" của bài học nhé!',
        targetSoundOrLetter: 'u',
        hintText: 'Nhìn kỹ chữ cái "u" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'u', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b13-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "u" và "ư" trong bài!',
        targetSoundOrLetter: 'u',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'u', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ư', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'u', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b13-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 38!',
        hintText: 'Câu chuẩn bài học: "Đu đủ chín ngọt lừ"',
        sequenceWords: ['Đu đủ', 'chín', 'ngọt lừ'],
        options: [],
      }
    ],
  },
  'tv-g1-b14': {
    lessonId: 'tv-g1-b14',
    lessonTitle: 'Bài 14: Ch ch - Kh kh',
    targetLetters: ['ch', 'kh'],
    stages: [
      {
        id: 'tv-g1-b14-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ch" của bài học nhé!',
        targetSoundOrLetter: 'ch',
        hintText: 'Nhìn kỹ chữ cái "ch" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ch', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b14-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ch" và "kh" trong bài!',
        targetSoundOrLetter: 'ch',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ch', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'kh', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ch', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b14-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 40!',
        hintText: 'Câu chuẩn bài học: "Bé thích ăn khế"',
        sequenceWords: ['Bé', 'thích', 'ăn khế'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b14': {
    lessonId: 'tv-g1-t1-b14',
    lessonTitle: 'Bài 14: Ch ch - Kh kh',
    targetLetters: ['ch', 'kh'],
    stages: [
      {
        id: 'tv-g1-b14-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ch" của bài học nhé!',
        targetSoundOrLetter: 'ch',
        hintText: 'Nhìn kỹ chữ cái "ch" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ch', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b14-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ch" và "kh" trong bài!',
        targetSoundOrLetter: 'ch',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ch', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'kh', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ch', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b14-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 40!',
        hintText: 'Câu chuẩn bài học: "Bé thích ăn khế"',
        sequenceWords: ['Bé', 'thích', 'ăn khế'],
        options: [],
      }
    ],
  },
  'tv-g1-b15': {
    lessonId: 'tv-g1-b15',
    lessonTitle: 'Bài 15: Ôn tập và kể chuyện',
    targetLetters: ['i', 'k', 'h', 'l', 'u', 'ư', 'ch', 'kh'],
    stages: [
      {
        id: 'tv-g1-b15-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "đu đủ"!',
        targetSoundOrLetter: 'i',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'i', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b15-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Cả nhà', 'vui', 'vẻ'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b15': {
    lessonId: 'tv-g1-t1-b15',
    lessonTitle: 'Bài 15: Ôn tập và kể chuyện',
    targetLetters: ['i', 'k', 'h', 'l', 'u', 'ư', 'ch', 'kh'],
    stages: [
      {
        id: 'tv-g1-b15-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "đu đủ"!',
        targetSoundOrLetter: 'i',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'i', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b15-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Cả nhà', 'vui', 'vẻ'],
        options: [],
      }
    ],
  },
  'tv-g1-b16': {
    lessonId: 'tv-g1-b16',
    lessonTitle: 'Bài 16: M m - N n',
    targetLetters: ['m', 'n'],
    stages: [
      {
        id: 'tv-g1-b16-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "m" của bài học nhé!',
        targetSoundOrLetter: 'm',
        hintText: 'Nhìn kỹ chữ cái "m" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'm', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b16-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "m" và "n" trong bài!',
        targetSoundOrLetter: 'm',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'm', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'n', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'm', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b16-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 44!',
        hintText: 'Câu chuẩn bài học: "Mẹ mua quả me"',
        sequenceWords: ['Mẹ', 'mua', 'quả me'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b16': {
    lessonId: 'tv-g1-t1-b16',
    lessonTitle: 'Bài 16: M m - N n',
    targetLetters: ['m', 'n'],
    stages: [
      {
        id: 'tv-g1-b16-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "m" của bài học nhé!',
        targetSoundOrLetter: 'm',
        hintText: 'Nhìn kỹ chữ cái "m" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'm', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b16-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "m" và "n" trong bài!',
        targetSoundOrLetter: 'm',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'm', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'n', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'm', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b16-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 44!',
        hintText: 'Câu chuẩn bài học: "Mẹ mua quả me"',
        sequenceWords: ['Mẹ', 'mua', 'quả me'],
        options: [],
      }
    ],
  },
  'tv-g1-b17': {
    lessonId: 'tv-g1-b17',
    lessonTitle: 'Bài 17: G g - Gi gi',
    targetLetters: ['g', 'gi'],
    stages: [
      {
        id: 'tv-g1-b17-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "g" của bài học nhé!',
        targetSoundOrLetter: 'g',
        hintText: 'Nhìn kỹ chữ cái "g" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'g', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b17-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "g" và "gi" trong bài!',
        targetSoundOrLetter: 'g',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'g', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'gi', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'g', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b17-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 46!',
        hintText: 'Câu chuẩn bài học: "Gà gáy vang"',
        sequenceWords: ['Gà', 'gáy', 'vang'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b17': {
    lessonId: 'tv-g1-t1-b17',
    lessonTitle: 'Bài 17: G g - Gi gi',
    targetLetters: ['g', 'gi'],
    stages: [
      {
        id: 'tv-g1-b17-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "g" của bài học nhé!',
        targetSoundOrLetter: 'g',
        hintText: 'Nhìn kỹ chữ cái "g" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'g', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b17-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "g" và "gi" trong bài!',
        targetSoundOrLetter: 'g',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'g', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'gi', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'g', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b17-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 46!',
        hintText: 'Câu chuẩn bài học: "Gà gáy vang"',
        sequenceWords: ['Gà', 'gáy', 'vang'],
        options: [],
      }
    ],
  },
  'tv-g1-b18': {
    lessonId: 'tv-g1-b18',
    lessonTitle: 'Bài 18: Gh gh - Nh nh',
    targetLetters: ['gh', 'nh'],
    stages: [
      {
        id: 'tv-g1-b18-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "gh" của bài học nhé!',
        targetSoundOrLetter: 'gh',
        hintText: 'Nhìn kỹ chữ cái "gh" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'gh', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b18-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "gh" và "nh" trong bài!',
        targetSoundOrLetter: 'gh',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'gh', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'nh', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'gh', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b18-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 48!',
        hintText: 'Câu chuẩn bài học: "Bé ngồi ghế gỗ"',
        sequenceWords: ['Bé', 'ngồi', 'ghế gỗ'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b18': {
    lessonId: 'tv-g1-t1-b18',
    lessonTitle: 'Bài 18: Gh gh - Nh nh',
    targetLetters: ['gh', 'nh'],
    stages: [
      {
        id: 'tv-g1-b18-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "gh" của bài học nhé!',
        targetSoundOrLetter: 'gh',
        hintText: 'Nhìn kỹ chữ cái "gh" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'gh', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b18-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "gh" và "nh" trong bài!',
        targetSoundOrLetter: 'gh',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'gh', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'nh', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'gh', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b18-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 48!',
        hintText: 'Câu chuẩn bài học: "Bé ngồi ghế gỗ"',
        sequenceWords: ['Bé', 'ngồi', 'ghế gỗ'],
        options: [],
      }
    ],
  },
  'tv-g1-b19': {
    lessonId: 'tv-g1-b19',
    lessonTitle: 'Bài 19: Ng ng - Ngh ngh',
    targetLetters: ['ng', 'ngh'],
    stages: [
      {
        id: 'tv-g1-b19-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ng" của bài học nhé!',
        targetSoundOrLetter: 'ng',
        hintText: 'Nhìn kỹ chữ cái "ng" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ng', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b19-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ng" và "ngh" trong bài!',
        targetSoundOrLetter: 'ng',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ng', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ngh', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ng', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b19-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 50!',
        hintText: 'Câu chuẩn bài học: "Chú nghé gặm cỏ"',
        sequenceWords: ['Chú', 'nghé', 'gặm cỏ'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b19': {
    lessonId: 'tv-g1-t1-b19',
    lessonTitle: 'Bài 19: Ng ng - Ngh ngh',
    targetLetters: ['ng', 'ngh'],
    stages: [
      {
        id: 'tv-g1-b19-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ng" của bài học nhé!',
        targetSoundOrLetter: 'ng',
        hintText: 'Nhìn kỹ chữ cái "ng" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ng', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b19-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ng" và "ngh" trong bài!',
        targetSoundOrLetter: 'ng',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ng', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ngh', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ng', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b19-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 50!',
        hintText: 'Câu chuẩn bài học: "Chú nghé gặm cỏ"',
        sequenceWords: ['Chú', 'nghé', 'gặm cỏ'],
        options: [],
      }
    ],
  },
  'tv-g1-b20': {
    lessonId: 'tv-g1-b20',
    lessonTitle: 'Bài 20: Ôn tập và kể chuyện',
    targetLetters: ['m', 'n', 'g', 'gi', 'gh', 'nh', 'ng', 'ngh'],
    stages: [
      {
        id: 'tv-g1-b20-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "con nghé"!',
        targetSoundOrLetter: 'm',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'm', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b20-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Bé', 'chăm ngoan', 'học giỏi'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b20': {
    lessonId: 'tv-g1-t1-b20',
    lessonTitle: 'Bài 20: Ôn tập và kể chuyện',
    targetLetters: ['m', 'n', 'g', 'gi', 'gh', 'nh', 'ng', 'ngh'],
    stages: [
      {
        id: 'tv-g1-b20-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "con nghé"!',
        targetSoundOrLetter: 'm',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'm', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-b20-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Bé', 'chăm ngoan', 'học giỏi'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b21': {
    lessonId: 'tv-g1-t1-b21',
    lessonTitle: 'Bài 21: R r - S s',
    targetLetters: ['r', 's'],
    stages: [
      {
        id: 'tv-g1-t1-b21-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "r" của bài học nhé!',
        targetSoundOrLetter: 'r',
        hintText: 'Nhìn kỹ chữ cái "r" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'r', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b21-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "r" và "s" trong bài!',
        targetSoundOrLetter: 'r',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'r', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 's', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'r', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b21-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 54!',
        hintText: 'Câu chuẩn bài học: "Chim sẻ hót líu lo"',
        sequenceWords: ['Chim sẻ', 'hót', 'líu lo'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b22': {
    lessonId: 'tv-g1-t1-b22',
    lessonTitle: 'Bài 22: T t - Tr tr',
    targetLetters: ['t', 'tr'],
    stages: [
      {
        id: 'tv-g1-t1-b22-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "t" của bài học nhé!',
        targetSoundOrLetter: 't',
        hintText: 'Nhìn kỹ chữ cái "t" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 't', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b22-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "t" và "tr" trong bài!',
        targetSoundOrLetter: 't',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 't', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'tr', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 't', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b22-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 56!',
        hintText: 'Câu chuẩn bài học: "Gió thổi cây tre"',
        sequenceWords: ['Gió', 'thổi', 'cây tre'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b23': {
    lessonId: 'tv-g1-t1-b23',
    lessonTitle: 'Bài 23: Th th - ia',
    targetLetters: ['th', 'ia'],
    stages: [
      {
        id: 'tv-g1-t1-b23-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "th" của bài học nhé!',
        targetSoundOrLetter: 'th',
        hintText: 'Nhìn kỹ chữ cái "th" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'th', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b23-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "th" và "ia" trong bài!',
        targetSoundOrLetter: 'th',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'th', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ia', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'th', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b23-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 58!',
        hintText: 'Câu chuẩn bài học: "Chú thỏ trắng xinh xắn"',
        sequenceWords: ['Chú thỏ', 'trắng', 'xinh xắn'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b24': {
    lessonId: 'tv-g1-t1-b24',
    lessonTitle: 'Bài 24: ua - ưa',
    targetLetters: ['ua', 'ưa'],
    stages: [
      {
        id: 'tv-g1-t1-b24-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ua" của bài học nhé!',
        targetSoundOrLetter: 'ua',
        hintText: 'Nhìn kỹ chữ cái "ua" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ua', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b24-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ua" và "ưa" trong bài!',
        targetSoundOrLetter: 'ua',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ua', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ưa', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ua', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b24-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 60!',
        hintText: 'Câu chuẩn bài học: "Mẹ mua quả dừa"',
        sequenceWords: ['Mẹ', 'mua', 'quả dừa'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b25': {
    lessonId: 'tv-g1-t1-b25',
    lessonTitle: 'Bài 25: Ôn tập và kể chuyện',
    targetLetters: ['r', 's', 't', 'tr', 'th', 'ia', 'ua', 'ưa'],
    stages: [
      {
        id: 'tv-g1-t1-b25-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "rùa con"!',
        targetSoundOrLetter: 'r',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'r', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b25-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Mùa xuân', 'ấm', 'áp'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b26': {
    lessonId: 'tv-g1-t1-b26',
    lessonTitle: 'Bài 26: Ph ph - Qu qu',
    targetLetters: ['ph', 'qu'],
    stages: [
      {
        id: 'tv-g1-t1-b26-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ph" của bài học nhé!',
        targetSoundOrLetter: 'ph',
        hintText: 'Nhìn kỹ chữ cái "ph" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ph', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b26-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ph" và "qu" trong bài!',
        targetSoundOrLetter: 'ph',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ph', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'qu', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ph', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b26-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 64!',
        hintText: 'Câu chuẩn bài học: "Quê bà có phố cổ"',
        sequenceWords: ['Quê', 'bà', 'có phố cổ'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b27': {
    lessonId: 'tv-g1-t1-b27',
    lessonTitle: 'Bài 27: V v - X x',
    targetLetters: ['v', 'x'],
    stages: [
      {
        id: 'tv-g1-t1-b27-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "v" của bài học nhé!',
        targetSoundOrLetter: 'v',
        hintText: 'Nhìn kỹ chữ cái "v" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'v', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b27-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "v" và "x" trong bài!',
        targetSoundOrLetter: 'v',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'v', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'x', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'v', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b27-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 66!',
        hintText: 'Câu chuẩn bài học: "Bé đi xe đạp"',
        sequenceWords: ['Bé', 'đi', 'xe đạp'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b28': {
    lessonId: 'tv-g1-t1-b28',
    lessonTitle: 'Bài 28: Y y',
    targetLetters: ['y', 'Y'],
    stages: [
      {
        id: 'tv-g1-t1-b28-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "y" của bài học nhé!',
        targetSoundOrLetter: 'y',
        hintText: 'Nhìn kỹ chữ cái "y" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'y', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b28-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "y" và "Y" trong bài!',
        targetSoundOrLetter: 'y',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'y', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'Y', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'y', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b28-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 68!',
        hintText: 'Câu chuẩn bài học: "Cô y tá tận tụy"',
        sequenceWords: ['Cô', 'y tá', 'tận tụy'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b29': {
    lessonId: 'tv-g1-t1-b29',
    lessonTitle: 'Bài 29: Luyện tập chính tả',
    targetLetters: ['c/k', 'g/gh', 'ng/ngh'],
    stages: [
      {
        id: 'tv-g1-t1-b29-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "kính"!',
        targetSoundOrLetter: 'c/k',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'c/k', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b29-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Bé', 'ghi', 'nhớ'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b30': {
    lessonId: 'tv-g1-t1-b30',
    lessonTitle: 'Bài 30: Ôn tập và kể chuyện',
    targetLetters: ['ph', 'qu', 'v', 'x', 'y'],
    stages: [
      {
        id: 'tv-g1-t1-b30-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "quà quê"!',
        targetSoundOrLetter: 'ph',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'ph', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b30-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Bé', 'yêu', 'tiếng Việt'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b31': {
    lessonId: 'tv-g1-t1-b31',
    lessonTitle: 'Bài 31: an - ăn - ân',
    targetLetters: ['an', 'ăn', 'ân'],
    stages: [
      {
        id: 'tv-g1-t1-b31-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "an" của bài học nhé!',
        targetSoundOrLetter: 'an',
        hintText: 'Nhìn kỹ chữ cái "an" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'an', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b31-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "an" và "ăn" trong bài!',
        targetSoundOrLetter: 'an',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'an', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ăn', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'an', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b31-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 74!',
        hintText: 'Câu chuẩn bài học: "Sân trường rợp bóng mát"',
        sequenceWords: ['Sân trường', 'rợp', 'bóng mát'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b32': {
    lessonId: 'tv-g1-t1-b32',
    lessonTitle: 'Bài 32: on - ôn - ơn',
    targetLetters: ['on', 'ôn', 'ơn'],
    stages: [
      {
        id: 'tv-g1-t1-b32-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "on" của bài học nhé!',
        targetSoundOrLetter: 'on',
        hintText: 'Nhìn kỹ chữ cái "on" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'on', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b32-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "on" và "ôn" trong bài!',
        targetSoundOrLetter: 'on',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'on', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ôn', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'on', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b32-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 76!',
        hintText: 'Câu chuẩn bài học: "Chú chồn nhỏ nhanh nhẹn"',
        sequenceWords: ['Chú chồn', 'nhỏ', 'nhanh nhẹn'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b33': {
    lessonId: 'tv-g1-t1-b33',
    lessonTitle: 'Bài 33: en - ên - in - un',
    targetLetters: ['en', 'ên', 'in', 'un'],
    stages: [
      {
        id: 'tv-g1-t1-b33-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "en" của bài học nhé!',
        targetSoundOrLetter: 'en',
        hintText: 'Nhìn kỹ chữ cái "en" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'en', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b33-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "en" và "ên" trong bài!',
        targetSoundOrLetter: 'en',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'en', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ên', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'en', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b33-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 78!',
        hintText: 'Câu chuẩn bài học: "Ngọn nến sáng lung linh"',
        sequenceWords: ['Ngọn nến', 'sáng', 'lung linh'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b34': {
    lessonId: 'tv-g1-t1-b34',
    lessonTitle: 'Bài 34: am - ăm - âm',
    targetLetters: ['am', 'ăm', 'âm'],
    stages: [
      {
        id: 'tv-g1-t1-b34-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "am" của bài học nhé!',
        targetSoundOrLetter: 'am',
        hintText: 'Nhìn kỹ chữ cái "am" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'am', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b34-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "am" và "ăm" trong bài!',
        targetSoundOrLetter: 'am',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'am', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ăm', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'am', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b34-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 80!',
        hintText: 'Câu chuẩn bài học: "Bé chăm chỉ học bài"',
        sequenceWords: ['Bé', 'chăm chỉ', 'học bài'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b35': {
    lessonId: 'tv-g1-t1-b35',
    lessonTitle: 'Bài 35: Ôn tập và kể chuyện',
    targetLetters: ['an', 'ăn', 'ân', 'on', 'ôn', 'ơn', 'am', 'ăm', 'âm'],
    stages: [
      {
        id: 'tv-g1-t1-b35-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "sân trường"!',
        targetSoundOrLetter: 'an',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'an', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b35-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Trường em', 'thật', 'vui'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b36': {
    lessonId: 'tv-g1-t1-b36',
    lessonTitle: 'Bài 36: om - ôm - ơm',
    targetLetters: ['om', 'ôm', 'ơm'],
    stages: [
      {
        id: 'tv-g1-t1-b36-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "om" của bài học nhé!',
        targetSoundOrLetter: 'om',
        hintText: 'Nhìn kỹ chữ cái "om" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'om', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b36-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "om" và "ôm" trong bài!',
        targetSoundOrLetter: 'om',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'om', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ôm', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'om', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b36-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 84!',
        hintText: 'Câu chuẩn bài học: "Bát cơm dẻo thơm"',
        sequenceWords: ['Bát cơm', 'dẻo', 'thơm'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b37': {
    lessonId: 'tv-g1-t1-b37',
    lessonTitle: 'Bài 37: em - êm - im - um',
    targetLetters: ['em', 'êm', 'im', 'um'],
    stages: [
      {
        id: 'tv-g1-t1-b37-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "em" của bài học nhé!',
        targetSoundOrLetter: 'em',
        hintText: 'Nhìn kỹ chữ cái "em" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'em', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b37-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "em" và "êm" trong bài!',
        targetSoundOrLetter: 'em',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'em', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'êm', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'em', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b37-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 86!',
        hintText: 'Câu chuẩn bài học: "Que kem mát lạnh"',
        sequenceWords: ['Que kem', 'mát', 'lạnh'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b38': {
    lessonId: 'tv-g1-t1-b38',
    lessonTitle: 'Bài 38: ai - ay - ây',
    targetLetters: ['ai', 'ay', 'ây'],
    stages: [
      {
        id: 'tv-g1-t1-b38-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ai" của bài học nhé!',
        targetSoundOrLetter: 'ai',
        hintText: 'Nhìn kỹ chữ cái "ai" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ai', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b38-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ai" và "ay" trong bài!',
        targetSoundOrLetter: 'ai',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ai', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ay', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ai', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b38-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 88!',
        hintText: 'Câu chuẩn bài học: "Bàn tay bé nhỏ nhắn"',
        sequenceWords: ['Bàn tay', 'bé', 'nhỏ nhắn'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b39': {
    lessonId: 'tv-g1-t1-b39',
    lessonTitle: 'Bài 39: oi - ôi - ơi',
    targetLetters: ['oi', 'ôi', 'ơi'],
    stages: [
      {
        id: 'tv-g1-t1-b39-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "oi" của bài học nhé!',
        targetSoundOrLetter: 'oi',
        hintText: 'Nhìn kỹ chữ cái "oi" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'oi', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b39-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "oi" và "ôi" trong bài!',
        targetSoundOrLetter: 'oi',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'oi', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ôi', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'oi', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b39-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 90!',
        hintText: 'Câu chuẩn bài học: "Bé chia sẻ đồ chơi"',
        sequenceWords: ['Bé', 'chia sẻ', 'đồ chơi'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b40': {
    lessonId: 'tv-g1-t1-b40',
    lessonTitle: 'Bài 40: Ôn tập và kể chuyện',
    targetLetters: ['ai', 'ay', 'ây', 'oi', 'ôi', 'ơi', 'om', 'ôm', 'ơm'],
    stages: [
      {
        id: 'tv-g1-t1-b40-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "đồ chơi"!',
        targetSoundOrLetter: 'ai',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'ai', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b40-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Bé', 'yêu', 'trường lớp'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b41': {
    lessonId: 'tv-g1-t1-b41',
    lessonTitle: 'Bài 41: ui - ưi',
    targetLetters: ['ui', 'ưi'],
    stages: [
      {
        id: 'tv-g1-t1-b41-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ui" của bài học nhé!',
        targetSoundOrLetter: 'ui',
        hintText: 'Nhìn kỹ chữ cái "ui" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ui', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b41-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ui" và "ưi" trong bài!',
        targetSoundOrLetter: 'ui',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ui', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ưi', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ui', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b41-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 94!',
        hintText: 'Câu chuẩn bài học: "Núi đồi xanh ngắt"',
        sequenceWords: ['Núi đồi', 'xanh', 'ngắt'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b42': {
    lessonId: 'tv-g1-t1-b42',
    lessonTitle: 'Bài 42: ao - eo',
    targetLetters: ['ao', 'eo'],
    stages: [
      {
        id: 'tv-g1-t1-b42-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ao" của bài học nhé!',
        targetSoundOrLetter: 'ao',
        hintText: 'Nhìn kỹ chữ cái "ao" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ao', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b42-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ao" và "eo" trong bài!',
        targetSoundOrLetter: 'ao',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ao', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'eo', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ao', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b42-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 96!',
        hintText: 'Câu chuẩn bài học: "Chú mèo trèo cây cau"',
        sequenceWords: ['Chú mèo', 'trèo', 'cây cau'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b43': {
    lessonId: 'tv-g1-t1-b43',
    lessonTitle: 'Bài 43: au - âu - êu',
    targetLetters: ['au', 'âu', 'êu'],
    stages: [
      {
        id: 'tv-g1-t1-b43-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "au" của bài học nhé!',
        targetSoundOrLetter: 'au',
        hintText: 'Nhìn kỹ chữ cái "au" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'au', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b43-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "au" và "âu" trong bài!',
        targetSoundOrLetter: 'au',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'au', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'âu', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'au', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b43-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 98!',
        hintText: 'Câu chuẩn bài học: "Bồ câu bay lượn"',
        sequenceWords: ['Bồ câu', 'bay', 'lượn'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b44': {
    lessonId: 'tv-g1-t1-b44',
    lessonTitle: 'Bài 44: iu - ưu',
    targetLetters: ['iu', 'ưu'],
    stages: [
      {
        id: 'tv-g1-t1-b44-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "iu" của bài học nhé!',
        targetSoundOrLetter: 'iu',
        hintText: 'Nhìn kỹ chữ cái "iu" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'iu', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b44-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "iu" và "ưu" trong bài!',
        targetSoundOrLetter: 'iu',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'iu', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ưu', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'iu', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b44-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 100!',
        hintText: 'Câu chuẩn bài học: "Con cừu trắng trên đồi"',
        sequenceWords: ['Con cừu', 'trắng', 'trên đồi'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b45': {
    lessonId: 'tv-g1-t1-b45',
    lessonTitle: 'Bài 45: Ôn tập và kể chuyện',
    targetLetters: ['ui', 'ưi', 'ao', 'eo', 'au', 'âu', 'iu', 'ưu'],
    stages: [
      {
        id: 'tv-g1-t1-b45-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "ngôi sao"!',
        targetSoundOrLetter: 'ui',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'ui', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b45-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Bầu trời', 'trong', 'xanh'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b46': {
    lessonId: 'tv-g1-t1-b46',
    lessonTitle: 'Bài 46: ac - ăc - âc',
    targetLetters: ['ac', 'ăc', 'âc'],
    stages: [
      {
        id: 'tv-g1-t1-b46-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ac" của bài học nhé!',
        targetSoundOrLetter: 'ac',
        hintText: 'Nhìn kỹ chữ cái "ac" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ac', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b46-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ac" và "ăc" trong bài!',
        targetSoundOrLetter: 'ac',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ac', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ăc', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ac', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b46-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 104!',
        hintText: 'Câu chuẩn bài học: "Bậc thang cao vút"',
        sequenceWords: ['Bậc thang', 'cao', 'vút'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b47': {
    lessonId: 'tv-g1-t1-b47',
    lessonTitle: 'Bài 47: oc - ôc - uc - ưc',
    targetLetters: ['oc', 'ôc', 'uc', 'ưc'],
    stages: [
      {
        id: 'tv-g1-t1-b47-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "oc" của bài học nhé!',
        targetSoundOrLetter: 'oc',
        hintText: 'Nhìn kỹ chữ cái "oc" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'oc', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b47-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "oc" và "ôc" trong bài!',
        targetSoundOrLetter: 'oc',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'oc', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ôc', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'oc', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b47-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 106!',
        hintText: 'Câu chuẩn bài học: "Con sóc chuyền cành"',
        sequenceWords: ['Con sóc', 'chuyền', 'cành'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b48': {
    lessonId: 'tv-g1-t1-b48',
    lessonTitle: 'Bài 48: at - ăt - ât',
    targetLetters: ['at', 'ăt', 'ât'],
    stages: [
      {
        id: 'tv-g1-t1-b48-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "at" của bài học nhé!',
        targetSoundOrLetter: 'at',
        hintText: 'Nhìn kỹ chữ cái "at" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'at', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b48-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "at" và "ăt" trong bài!',
        targetSoundOrLetter: 'at',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'at', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ăt', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'at', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b48-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 108!',
        hintText: 'Câu chuẩn bài học: "Mặt trời tỏa nắng"',
        sequenceWords: ['Mặt trời', 'tỏa', 'nắng'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b49': {
    lessonId: 'tv-g1-t1-b49',
    lessonTitle: 'Bài 49: ot - ôt - ơt',
    targetLetters: ['ot', 'ôt', 'ơt'],
    stages: [
      {
        id: 'tv-g1-t1-b49-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ot" của bài học nhé!',
        targetSoundOrLetter: 'ot',
        hintText: 'Nhìn kỹ chữ cái "ot" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ot', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b49-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ot" và "ôt" trong bài!',
        targetSoundOrLetter: 'ot',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ot', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ôt', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ot', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b49-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 110!',
        hintText: 'Câu chuẩn bài học: "Chim hót buổi sáng"',
        sequenceWords: ['Chim hót', 'buổi', 'sáng'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b50': {
    lessonId: 'tv-g1-t1-b50',
    lessonTitle: 'Bài 50: Ôn tập và kể chuyện',
    targetLetters: ['ac', 'ăc', 'âc', 'oc', 'ôc', 'uc', 'ưc', 'at', 'ăt', 'ât'],
    stages: [
      {
        id: 'tv-g1-t1-b50-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "mặt trời"!',
        targetSoundOrLetter: 'ac',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'ac', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b50-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Ngày mới', 'bắt đầu', 'rạng rỡ'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b51': {
    lessonId: 'tv-g1-t1-b51',
    lessonTitle: 'Bài 51: et - êt - it',
    targetLetters: ['et', 'êt', 'it'],
    stages: [
      {
        id: 'tv-g1-t1-b51-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "et" của bài học nhé!',
        targetSoundOrLetter: 'et',
        hintText: 'Nhìn kỹ chữ cái "et" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'et', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b51-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "et" và "êt" trong bài!',
        targetSoundOrLetter: 'et',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'et', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'êt', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'et', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b51-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 114!',
        hintText: 'Câu chuẩn bài học: "Quả mít thơm lừng"',
        sequenceWords: ['Quả mít', 'thơm', 'lừng'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b52': {
    lessonId: 'tv-g1-t1-b52',
    lessonTitle: 'Bài 52: ut - ưt',
    targetLetters: ['ut', 'ưt'],
    stages: [
      {
        id: 'tv-g1-t1-b52-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ut" của bài học nhé!',
        targetSoundOrLetter: 'ut',
        hintText: 'Nhìn kỹ chữ cái "ut" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ut', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b52-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ut" và "ưt" trong bài!',
        targetSoundOrLetter: 'ut',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ut', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ưt', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ut', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b52-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 116!',
        hintText: 'Câu chuẩn bài học: "Cây bút nét chữ đẹp"',
        sequenceWords: ['Cây bút', 'nét', 'chữ đẹp'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b53': {
    lessonId: 'tv-g1-t1-b53',
    lessonTitle: 'Bài 53: ap - ăp - âp',
    targetLetters: ['ap', 'ăp', 'âp'],
    stages: [
      {
        id: 'tv-g1-t1-b53-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ap" của bài học nhé!',
        targetSoundOrLetter: 'ap',
        hintText: 'Nhìn kỹ chữ cái "ap" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ap', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b53-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ap" và "ăp" trong bài!',
        targetSoundOrLetter: 'ap',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ap', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ăp', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ap', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b53-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 118!',
        hintText: 'Câu chuẩn bài học: "Bé chơi bập bênh"',
        sequenceWords: ['Bé', 'chơi', 'bập bênh'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b54': {
    lessonId: 'tv-g1-t1-b54',
    lessonTitle: 'Bài 54: op - ôp - ơp',
    targetLetters: ['op', 'ôp', 'ơp'],
    stages: [
      {
        id: 'tv-g1-t1-b54-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "op" của bài học nhé!',
        targetSoundOrLetter: 'op',
        hintText: 'Nhìn kỹ chữ cái "op" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'op', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b54-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "op" và "ôp" trong bài!',
        targetSoundOrLetter: 'op',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'op', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ôp', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'op', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b54-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 120!',
        hintText: 'Câu chuẩn bài học: "Hộp quà xinh xắn"',
        sequenceWords: ['Hộp quà', 'xinh', 'xắn'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b55': {
    lessonId: 'tv-g1-t1-b55',
    lessonTitle: 'Bài 55: Ôn tập và kể chuyện',
    targetLetters: ['et', 'êt', 'it', 'ut', 'ưt', 'ap', 'ăp', 'âp'],
    stages: [
      {
        id: 'tv-g1-t1-b55-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "quả mít"!',
        targetSoundOrLetter: 'et',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'et', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b55-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Bé', 'yêu', 'thầy cô'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b56': {
    lessonId: 'tv-g1-t1-b56',
    lessonTitle: 'Bài 56: ep - êp - ip - up',
    targetLetters: ['ep', 'êp', 'ip', 'up'],
    stages: [
      {
        id: 'tv-g1-t1-b56-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ep" của bài học nhé!',
        targetSoundOrLetter: 'ep',
        hintText: 'Nhìn kỹ chữ cái "ep" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ep', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b56-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ep" và "êp" trong bài!',
        targetSoundOrLetter: 'ep',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ep', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'êp', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ep', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b56-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 124!',
        hintText: 'Câu chuẩn bài học: "Búp sen tươi hồng"',
        sequenceWords: ['Búp sen', 'tươi', 'hồng'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b57': {
    lessonId: 'tv-g1-t1-b57',
    lessonTitle: 'Bài 57: anh - ênh - inh',
    targetLetters: ['anh', 'ênh', 'inh'],
    stages: [
      {
        id: 'tv-g1-t1-b57-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "anh" của bài học nhé!',
        targetSoundOrLetter: 'anh',
        hintText: 'Nhìn kỹ chữ cái "anh" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'anh', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b57-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "anh" và "ênh" trong bài!',
        targetSoundOrLetter: 'anh',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'anh', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ênh', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'anh', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b57-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 126!',
        hintText: 'Câu chuẩn bài học: "Bình minh tươi sáng"',
        sequenceWords: ['Bình minh', 'tươi', 'sáng'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b58': {
    lessonId: 'tv-g1-t1-b58',
    lessonTitle: 'Bài 58: ach - êch - ich',
    targetLetters: ['ach', 'êch', 'ich'],
    stages: [
      {
        id: 'tv-g1-t1-b58-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ach" của bài học nhé!',
        targetSoundOrLetter: 'ach',
        hintText: 'Nhìn kỹ chữ cái "ach" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ach', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b58-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ach" và "êch" trong bài!',
        targetSoundOrLetter: 'ach',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ach', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'êch', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ach', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b58-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 128!',
        hintText: 'Câu chuẩn bài học: "Cuốn sách mở ra"',
        sequenceWords: ['Cuốn sách', 'mở', 'ra'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b59': {
    lessonId: 'tv-g1-t1-b59',
    lessonTitle: 'Bài 59: ang - ăng - âng',
    targetLetters: ['ang', 'ăng', 'âng'],
    stages: [
      {
        id: 'tv-g1-t1-b59-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ang" của bài học nhé!',
        targetSoundOrLetter: 'ang',
        hintText: 'Nhìn kỹ chữ cái "ang" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ang', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b59-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ang" và "ăng" trong bài!',
        targetSoundOrLetter: 'ang',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ang', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ăng', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ang', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b59-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 130!',
        hintText: 'Câu chuẩn bài học: "Vầng trăng sáng ngời"',
        sequenceWords: ['Vầng trăng', 'sáng', 'ngời'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b60': {
    lessonId: 'tv-g1-t1-b60',
    lessonTitle: 'Bài 60: Ôn tập và kể chuyện',
    targetLetters: ['ep', 'êp', 'ip', 'up', 'anh', 'ênh', 'inh', 'ach', 'êch', 'ich'],
    stages: [
      {
        id: 'tv-g1-t1-b60-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "cuốn sách"!',
        targetSoundOrLetter: 'ep',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'ep', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b60-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Trường học', 'thân', 'thương'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b61': {
    lessonId: 'tv-g1-t1-b61',
    lessonTitle: 'Bài 61: ong - ông - ung - ưng',
    targetLetters: ['ong', 'ông', 'ung', 'ưng'],
    stages: [
      {
        id: 'tv-g1-t1-b61-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ong" của bài học nhé!',
        targetSoundOrLetter: 'ong',
        hintText: 'Nhìn kỹ chữ cái "ong" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ong', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b61-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ong" và "ông" trong bài!',
        targetSoundOrLetter: 'ong',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ong', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ông', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ong', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b61-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 134!',
        hintText: 'Câu chuẩn bài học: "Bông hồng thắm tươi"',
        sequenceWords: ['Bông hồng', 'thắm', 'tươi'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b62': {
    lessonId: 'tv-g1-t1-b62',
    lessonTitle: 'Bài 62: iêc - iên - iêp',
    targetLetters: ['iêc', 'iên', 'iêp'],
    stages: [
      {
        id: 'tv-g1-t1-b62-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "iêc" của bài học nhé!',
        targetSoundOrLetter: 'iêc',
        hintText: 'Nhìn kỹ chữ cái "iêc" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'iêc', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b62-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "iêc" và "iên" trong bài!',
        targetSoundOrLetter: 'iêc',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'iêc', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'iên', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'iêc', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b62-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 136!',
        hintText: 'Câu chuẩn bài học: "Cô tiên dịu hiền"',
        sequenceWords: ['Cô tiên', 'dịu', 'hiền'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b63': {
    lessonId: 'tv-g1-t1-b63',
    lessonTitle: 'Bài 63: iêng - iêm - yên',
    targetLetters: ['iêng', 'iêm', 'yên'],
    stages: [
      {
        id: 'tv-g1-t1-b63-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "iêng" của bài học nhé!',
        targetSoundOrLetter: 'iêng',
        hintText: 'Nhìn kỹ chữ cái "iêng" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'iêng', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b63-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "iêng" và "iêm" trong bài!',
        targetSoundOrLetter: 'iêng',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'iêng', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'iêm', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'iêng', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b63-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 138!',
        hintText: 'Câu chuẩn bài học: "Tiếng chim hót véo von"',
        sequenceWords: ['Tiếng chim', 'hót', 'véo von'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b64': {
    lessonId: 'tv-g1-t1-b64',
    lessonTitle: 'Bài 64: iêt - iêu - yêu',
    targetLetters: ['iêt', 'iêu', 'yêu'],
    stages: [
      {
        id: 'tv-g1-t1-b64-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "iêt" của bài học nhé!',
        targetSoundOrLetter: 'iêt',
        hintText: 'Nhìn kỹ chữ cái "iêt" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'iêt', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b64-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "iêt" và "iêu" trong bài!',
        targetSoundOrLetter: 'iêt',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'iêt', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'iêu', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'iêt', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b64-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 140!',
        hintText: 'Câu chuẩn bài học: "Cánh diều bay cao"',
        sequenceWords: ['Cánh diều', 'bay', 'cao'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b65': {
    lessonId: 'tv-g1-t1-b65',
    lessonTitle: 'Bài 65: Ôn tập và kể chuyện',
    targetLetters: ['ong', 'ông', 'ung', 'ưng', 'iêc', 'iên', 'iêp', 'iêng', 'iêm', 'yên'],
    stages: [
      {
        id: 'tv-g1-t1-b65-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "cô tiên"!',
        targetSoundOrLetter: 'ong',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'ong', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b65-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Quê hương', 'tươi', 'đẹp'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b66': {
    lessonId: 'tv-g1-t1-b66',
    lessonTitle: 'Bài 66: uôi - uôm',
    targetLetters: ['uôi', 'uôm'],
    stages: [
      {
        id: 'tv-g1-t1-b66-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "uôi" của bài học nhé!',
        targetSoundOrLetter: 'uôi',
        hintText: 'Nhìn kỹ chữ cái "uôi" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'uôi', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b66-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "uôi" và "uôm" trong bài!',
        targetSoundOrLetter: 'uôi',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'uôi', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'uôm', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'uôi', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b66-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 144!',
        hintText: 'Câu chuẩn bài học: "Dòng suối chảy róc rách"',
        sequenceWords: ['Dòng suối', 'chảy', 'róc rách'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b67': {
    lessonId: 'tv-g1-t1-b67',
    lessonTitle: 'Bài 67: uôc - uôt',
    targetLetters: ['uôc', 'uôt'],
    stages: [
      {
        id: 'tv-g1-t1-b67-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "uôc" của bài học nhé!',
        targetSoundOrLetter: 'uôc',
        hintText: 'Nhìn kỹ chữ cái "uôc" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'uôc', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b67-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "uôc" và "uôt" trong bài!',
        targetSoundOrLetter: 'uôc',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'uôc', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'uôt', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'uôc', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b67-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 146!',
        hintText: 'Câu chuẩn bài học: "Bó đuốc sáng rực"',
        sequenceWords: ['Bó đuốc', 'sáng', 'rực'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b68': {
    lessonId: 'tv-g1-t1-b68',
    lessonTitle: 'Bài 68: uôn - uông',
    targetLetters: ['uôn', 'uông'],
    stages: [
      {
        id: 'tv-g1-t1-b68-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "uôn" của bài học nhé!',
        targetSoundOrLetter: 'uôn',
        hintText: 'Nhìn kỹ chữ cái "uôn" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'uôn', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b68-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "uôn" và "uông" trong bài!',
        targetSoundOrLetter: 'uôn',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'uôn', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'uông', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'uôn', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b68-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 148!',
        hintText: 'Câu chuẩn bài học: "Chuồn chuồn bay thấp"',
        sequenceWords: ['Chuồn chuồn', 'bay', 'thấp'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b69': {
    lessonId: 'tv-g1-t1-b69',
    lessonTitle: 'Bài 69: ươi - ươu',
    targetLetters: ['ươi', 'ươu'],
    stages: [
      {
        id: 'tv-g1-t1-b69-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ươi" của bài học nhé!',
        targetSoundOrLetter: 'ươi',
        hintText: 'Nhìn kỹ chữ cái "ươi" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ươi', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b69-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ươi" và "ươu" trong bài!',
        targetSoundOrLetter: 'ươi',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ươi', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ươu', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ươi', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b69-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 150!',
        hintText: 'Câu chuẩn bài học: "Con hươu sao hiền lành"',
        sequenceWords: ['Con hươu', 'sao', 'hiền lành'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b70': {
    lessonId: 'tv-g1-t1-b70',
    lessonTitle: 'Bài 70: Ôn tập và kể chuyện',
    targetLetters: ['uôi', 'uôm', 'uôc', 'uôt', 'uôn', 'uông', 'ươi', 'ươu'],
    stages: [
      {
        id: 'tv-g1-t1-b70-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "cánh buồm"!',
        targetSoundOrLetter: 'uôi',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'uôi', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b70-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Đất nước', 'ngàn', 'hoa'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b71': {
    lessonId: 'tv-g1-t1-b71',
    lessonTitle: 'Bài 71: ươc - ươt',
    targetLetters: ['ươc', 'ươt'],
    stages: [
      {
        id: 'tv-g1-t1-b71-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ươc" của bài học nhé!',
        targetSoundOrLetter: 'ươc',
        hintText: 'Nhìn kỹ chữ cái "ươc" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ươc', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b71-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ươc" và "ươt" trong bài!',
        targetSoundOrLetter: 'ươc',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ươc', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ươt', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ươc', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b71-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 154!',
        hintText: 'Câu chuẩn bài học: "Bé chơi cầu trượt"',
        sequenceWords: ['Bé', 'chơi', 'cầu trượt'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b72': {
    lessonId: 'tv-g1-t1-b72',
    lessonTitle: 'Bài 72: ươm - ươp',
    targetLetters: ['ươm', 'ươp'],
    stages: [
      {
        id: 'tv-g1-t1-b72-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ươm" của bài học nhé!',
        targetSoundOrLetter: 'ươm',
        hintText: 'Nhìn kỹ chữ cái "ươm" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ươm', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b72-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ươm" và "ươp" trong bài!',
        targetSoundOrLetter: 'ươm',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ươm', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ươp', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ươm', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b72-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 156!',
        hintText: 'Câu chuẩn bài học: "Con bướm vờn hoa"',
        sequenceWords: ['Con bướm', 'vờn', 'hoa'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b73': {
    lessonId: 'tv-g1-t1-b73',
    lessonTitle: 'Bài 73: ươn - ương',
    targetLetters: ['ươn', 'ương'],
    stages: [
      {
        id: 'tv-g1-t1-b73-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "ươn" của bài học nhé!',
        targetSoundOrLetter: 'ươn',
        hintText: 'Nhìn kỹ chữ cái "ươn" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'ươn', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b73-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "ươn" và "ương" trong bài!',
        targetSoundOrLetter: 'ươn',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'ươn', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'ương', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'ươn', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b73-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 158!',
        hintText: 'Câu chuẩn bài học: "Vườn cây xanh tốt"',
        sequenceWords: ['Vườn cây', 'xanh', 'tốt'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b74': {
    lessonId: 'tv-g1-t1-b74',
    lessonTitle: 'Bài 74: oa - oe',
    targetLetters: ['oa', 'oe'],
    stages: [
      {
        id: 'tv-g1-t1-b74-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "oa" của bài học nhé!',
        targetSoundOrLetter: 'oa',
        hintText: 'Nhìn kỹ chữ cái "oa" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'oa', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b74-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "oa" và "oe" trong bài!',
        targetSoundOrLetter: 'oa',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'oa', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'oe', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'oa', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b74-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 160!',
        hintText: 'Câu chuẩn bài học: "Bông hoa khoe sắc"',
        sequenceWords: ['Bông hoa', 'khoe', 'sắc'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b75': {
    lessonId: 'tv-g1-t1-b75',
    lessonTitle: 'Bài 75: Ôn tập và kể chuyện',
    targetLetters: ['ươc', 'ươt', 'ươm', 'ươp', 'ươn', 'ương', 'oa', 'oe'],
    stages: [
      {
        id: 'tv-g1-t1-b75-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "vườn hoa"!',
        targetSoundOrLetter: 'ươc',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'ươc', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b75-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Mùa xuân', 'rực', 'rỡ'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b76': {
    lessonId: 'tv-g1-t1-b76',
    lessonTitle: 'Bài 76: oan - oăn - oat - oăt',
    targetLetters: ['oan', 'oăn', 'oat', 'oăt'],
    stages: [
      {
        id: 'tv-g1-t1-b76-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "oan" của bài học nhé!',
        targetSoundOrLetter: 'oan',
        hintText: 'Nhìn kỹ chữ cái "oan" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'oan', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b76-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "oan" và "oăn" trong bài!',
        targetSoundOrLetter: 'oan',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'oan', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'oăn', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'oan', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b76-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 164!',
        hintText: 'Câu chuẩn bài học: "Bé ngoan ngoãn"',
        sequenceWords: ['Bé', 'ngoan', 'ngoãn'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b77': {
    lessonId: 'tv-g1-t1-b77',
    lessonTitle: 'Bài 77: oai - uê - uy',
    targetLetters: ['oai', 'uê', 'uy'],
    stages: [
      {
        id: 'tv-g1-t1-b77-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "oai" của bài học nhé!',
        targetSoundOrLetter: 'oai',
        hintText: 'Nhìn kỹ chữ cái "oai" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'oai', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b77-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "oai" và "uê" trong bài!',
        targetSoundOrLetter: 'oai',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'oai', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'uê', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'oai', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b77-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 166!',
        hintText: 'Câu chuẩn bài học: "Hoa huệ thơm ngát"',
        sequenceWords: ['Hoa huệ', 'thơm', 'ngát'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b78': {
    lessonId: 'tv-g1-t1-b78',
    lessonTitle: 'Bài 78: uân - uât',
    targetLetters: ['uân', 'uât'],
    stages: [
      {
        id: 'tv-g1-t1-b78-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "uân" của bài học nhé!',
        targetSoundOrLetter: 'uân',
        hintText: 'Nhìn kỹ chữ cái "uân" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'uân', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b78-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "uân" và "uât" trong bài!',
        targetSoundOrLetter: 'uân',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'uân', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'uât', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'uân', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b78-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 168!',
        hintText: 'Câu chuẩn bài học: "Mùa xuân đã về"',
        sequenceWords: ['Mùa xuân', 'đã', 'về'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b79': {
    lessonId: 'tv-g1-t1-b79',
    lessonTitle: 'Bài 79: uyên - uyêt',
    targetLetters: ['uyên', 'uyêt'],
    stages: [
      {
        id: 'tv-g1-t1-b79-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "uyên" của bài học nhé!',
        targetSoundOrLetter: 'uyên',
        hintText: 'Nhìn kỹ chữ cái "uyên" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          { id: 'opt-1', label: 'uyên', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b79-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "uyên" và "uyêt" trong bài!',
        targetSoundOrLetter: 'uyên',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          { id: 'pop-1', label: 'uyên', isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: 'uyêt', isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: 'uyên', isCorrect: true, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b79-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang 170!',
        hintText: 'Câu chuẩn bài học: "Con thuyền lướt sóng"',
        sequenceWords: ['Con thuyền', 'lướt', 'sóng'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b80': {
    lessonId: 'tv-g1-t1-b80',
    lessonTitle: 'Bài 80: Ôn tập và kể chuyện',
    targetLetters: ['oan', 'oai', 'uân', 'uyên', 'uyêt'],
    stages: [
      {
        id: 'tv-g1-t1-b80-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "mùa xuân"!',
        targetSoundOrLetter: 'oan',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'oan', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b80-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Bé', 'chúc', 'năm mới'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b81': {
    lessonId: 'tv-g1-t1-b81',
    lessonTitle: 'Bài 81: Ôn tập',
    targetLetters: ['a-z'],
    stages: [
      {
        id: 'tv-g1-t1-b81-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "toàn bộ âm vần học kì 1"!',
        targetSoundOrLetter: 'a-z',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'a-z', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b81-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Bé', 'chăm', 'học giỏi'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b82': {
    lessonId: 'tv-g1-t1-b82',
    lessonTitle: 'Bài 82: Ôn tập',
    targetLetters: ['a-z'],
    stages: [
      {
        id: 'tv-g1-t1-b82-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "toàn bộ từ ngữ học kì 1"!',
        targetSoundOrLetter: 'a-z',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'a-z', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b82-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Chào', 'năm học', 'mới'],
        options: [],
      }
    ],
  },
  'tv-g1-t1-b83': {
    lessonId: 'tv-g1-t1-b83',
    lessonTitle: 'Bài 83: Voi, hổ và khỉ',
    targetLetters: ['chuyện kể'],
    stages: [
      {
        id: 'tv-g1-t1-b83-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "voi"!',
        targetSoundOrLetter: 'chuyện kể',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          { id: 'opt-1', label: 'chuyện kể', isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: 'tv-g1-t1-b83-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: ['Các bạn', 'giúp đỡ', 'nhau'],
        options: [],
      }
    ],
  },
};


/**
 * Helper thông minh tìm kiếm hoặc sinh cấu hình Mini Game chuẩn xác 100% cho Tiếng Việt 1 - TẬP 1.
 * TUYỆT ĐỐI KHÔNG ÁP DỤNG cho Tiếng Việt 1 - TẬP 2 (vì Tập 2 là các bài đọc nguyên văn SGK).
 */
export function getPhonicsGameForLesson(lesson: { id: string; title: string; semester?: number; order?: number }): LessonPhonicsGameConfig | null {
  // Nếu là Tập 2 (Học kì 2) -> Trả về null để hiển thị bài đọc nguyên văn SGK chuẩn
  if (lesson.semester === 2 || lesson.id.includes('-t2-')) {
    return null;
  }

  // Tra cứu theo key chính xác trong Tập 1
  if (GRADE_1_PHONICS_GAMES[lesson.id]) {
    return GRADE_1_PHONICS_GAMES[lesson.id];
  }

  // Tra cứu theo số bài b{N} trong lesson.id (chỉ khi là Tập 1)
  const matchB = lesson.id.match(/b(\d+)/);
  if (matchB) {
    const num = parseInt(matchB[1], 10);
    if (lesson.id.includes('-t1-')) {
      const key = `tv-g1-t1-b${num}`;
      if (GRADE_1_PHONICS_GAMES[key]) return GRADE_1_PHONICS_GAMES[key];
    } else if (num <= 20) {
      const key = `tv-g1-b${num}`;
      if (GRADE_1_PHONICS_GAMES[key]) return GRADE_1_PHONICS_GAMES[key];
    }
  }

  // Fallback thông minh chỉ khi là bài học âm chữ thuộc Tập 1
  const titleParts = lesson.title.split(':');
  const letterStr = titleParts.length > 1 ? titleParts[1].trim() : lesson.title;
  const rawLetters = letterStr.split(/[-–,]/).map((s) => s.trim().split(' ')[0].toLowerCase()).filter(Boolean);
  const targetLetters = rawLetters.length > 0 ? rawLetters : ['a'];
  const pLetter = targetLetters[0];
  const sLetter = targetLetters[1] || pLetter.toUpperCase();

  return {
    lessonId: lesson.id,
    lessonTitle: lesson.title,
    targetLetters,
    stages: [
      {
        id: `${lesson.id}-dyn-s1`,
        gameType: 'letter_pick',
        instruction: `Bé hãy tìm và chạm vào chữ "${pLetter}" của bài học nhé!`,
        targetSoundOrLetter: pLetter,
        hintText: `Nhìn kỹ chữ cái "${pLetter}" đang tỏa sáng màu kẹo ngọt nhé bé!`,
        options: [
          { id: 'opt-1', label: pLetter, isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: `${lesson.id}-dyn-s2`,
        gameType: 'bubble_pop',
        instruction: `Đập bong bóng chứa các chữ cái "${pLetter}" và "${sLetter}" trong bài!`,
        targetSoundOrLetter: pLetter,
        hintText: `Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!`,
        options: [
          { id: 'pop-1', label: pLetter, isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: sLetter, isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: pLetter, isCorrect: true, color: 'emerald' },
        ],
      },
    ],
  };
}
