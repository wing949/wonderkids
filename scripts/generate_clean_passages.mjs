import fs from 'fs';
import path from 'path';

const passages = {};

// =========================================================================
// HELPER TO ADD PASSAGE
// =========================================================================
function addPassage(id, data) {
  passages[id] = data;
}

// =========================================================================
// LỚP 1 (30 BÀI HỌC)
// =========================================================================
addPassage('tv-g1-b1', {
  passage: {
    title: 'Bé Na Đi Học',
    author: 'SGK Tiếng Việt 1',
    genre: 'prose',
    content: [
      'Hôm nay là ngày đầu tiên bé Na đi học lớp Một.',
      'Mẹ mua cho Na cặp sách mới, vở mới và bút chì xinh.',
      'Na ríu rít chào ba mẹ rồi tự tin bước vào lớp cùng cô giáo và các bạn.'
    ],
    audioNarration: 'Bé Na Đi Học. Hôm nay là ngày đầu tiên bé Na đi học lớp Một. Mẹ mua cho Na cặp sách mới, vở mới và bút chì xinh. Na ríu rít chào ba mẹ rồi tự tin bước vào lớp cùng cô giáo và các bạn.',
    vocabularyNotes: [
      { word: 'Ríu rít', meaning: 'Nói cười tíu tít, vui vẻ liên hồi.' },
      { word: 'Tự tin', meaning: 'Mạnh dạn, không rụt rè lo lắng.' }
    ]
  },
  questions: [
    {
      id: 'tv1-b1-q1',
      type: 'bubble_choice',
      questionText: 'Hôm nay là ngày đầu tiên bé Na bước vào lớp mấy?',
      audioText: 'Hôm nay là ngày đầu tiên bé Na bước vào lớp mấy?',
      points: 15,
      options: [
        { id: 'a', label: 'Lớp Một ⭐', isCorrect: true },
        { id: 'b', label: 'Lớp Hai' },
        { id: 'c', label: 'Lớp Ba' }
      ]
    },
    {
      id: 'tv1-b1-q2',
      type: 'bubble_choice',
      questionText: 'Mẹ đã chuẩn bị cho bé Na những đồ dùng học tập gì?',
      audioText: 'Mẹ đã chuẩn bị cho bé Na những đồ dùng học tập gì?',
      points: 15,
      options: [
        { id: 'a', label: 'Cặp sách mới, vở mới và bút chì xinh 🎒', isCorrect: true },
        { id: 'b', label: 'Đồ chơi điện tử' },
        { id: 'c', label: 'Bánh kẹo' }
      ]
    }
  ]
});

addPassage('tv-g1-b2', {
  passage: {
    title: 'Con Cò và Chú Cá Nhỏ',
    author: 'Đồng dao thiếu nhi',
    genre: 'prose',
    content: [
      'Con cò lặn lội bờ ao, chăm chỉ bắt tép nuôi con.',
      'Cá nhỏ bơi lượn tung tăng dưới làn nước trong vắt.',
      'Cò đậu trên cành tre nghiêng bóng, khẽ nghiêng đầu ngắm cảnh quê yên bình.'
    ],
    audioNarration: 'Con Cò và Chú Cá Nhỏ. Con cò lặn lội bờ ao, chăm chỉ bắt tép nuôi con. Cá nhỏ bơi lượn tung tăng dưới làn nước trong vắt. Cò đậu trên cành tre nghiêng bóng, khẽ nghiêng đầu ngắm cảnh quê yên bình.',
    vocabularyNotes: [
      { word: 'Lặn lội', meaning: 'Chăm chỉ vượt qua khó khăn để kiếm ăn.' },
      { word: 'Trong vắt', meaning: 'Rất trong, có thể nhìn thấu tận đáy.' }
    ]
  },
  questions: [
    {
      id: 'tv1-b2-q1',
      type: 'bubble_choice',
      questionText: 'Con cò lặn lội bờ ao để làm công việc gì?',
      audioText: 'Con cò lặn lội bờ ao để làm công việc gì?',
      points: 15,
      options: [
        { id: 'a', label: 'Bắt tép nuôi con 🐟', isCorrect: true },
        { id: 'b', label: 'Đi dạo chơi' },
        { id: 'c', label: 'Tập bơi lội' }
      ]
    }
  ]
});

addPassage('tv-g1-b3', {
  passage: {
    title: 'Bà Bế Bé',
    author: 'SGK Tiếng Việt 1',
    genre: 'prose',
    content: [
      'Chiều mát, bà bế bé ra hiên ngắm hoa.',
      'Bé cười toe toét chỉ vào chú bướm vàng đang bay.',
      'Bà hát ru êm dịu, gió thoảng đưa hương nhài ngào ngạt khắp sân.'
    ],
    audioNarration: 'Bà Bế Bé. Chiều mát, bà bế bé ra hiên ngắm hoa. Bé cười toe toét chỉ vào chú bướm vàng đang bay. Bà hát ru êm dịu, gió thoảng đưa hương nhài ngào ngạt khắp sân.',
    vocabularyNotes: [
      { word: 'Toe toét', meaning: 'Cười mở rộng miệng, vô cùng vui sướng.' },
      { word: 'Ngào ngạt', meaning: 'Mùi hương thơm đậm đà, lan tỏa xa.' }
    ]
  },
  questions: [
    {
      id: 'tv1-b3-q1',
      type: 'bubble_choice',
      questionText: 'Bà bế bé ra hiên để làm gì?',
      audioText: 'Bà bế bé ra hiên để làm gì?',
      points: 15,
      options: [
        { id: 'a', label: 'Ngắm hoa và hóng mát 🌸', isCorrect: true },
        { id: 'b', label: 'Đi ngủ' },
        { id: 'c', label: 'Ăn cơm' }
      ]
    }
  ]
});

addPassage('tv-g1-b4', {
  passage: {
    title: 'Gà Gáy Sáng',
    author: 'SGK Tiếng Việt 1',
    genre: 'prose',
    content: [
      'Sáng sớm tinh mơ, chú gà trống cất tiếng gáy vang: "Ò... ó... o...".',
      'Ông mặt trời từ từ nhô lên sau rặng tre làng, tỏa ánh nắng vàng rực rỡ.',
      'Bé Hà thức dậy, rửa mặt sạch sẽ rồi vui vẻ cùng mẹ chuẩn bị tới trường.'
    ],
    audioNarration: 'Gà Gáy Sáng. Sáng sớm tinh mơ, chú gà trống cất tiếng gáy vang: Ò ó o. Ông mặt trời từ từ nhô lên sau rặng tre làng, tỏa ánh nắng vàng rực rỡ. Bé Hà thức dậy, rửa mặt sạch sẽ rồi vui vẻ cùng mẹ chuẩn bị tới trường.',
    vocabularyNotes: [
      { word: 'Tinh mơ', meaning: 'Trời mới bắt đầu sáng sớm.' },
      { word: 'Rực rỡ', meaning: 'Ánh sáng chói lọi, tươi đẹp nổi bật.' }
    ]
  },
  questions: [
    {
      id: 'tv1-b4-q1',
      type: 'bubble_choice',
      questionText: 'Chú gà trống gáy vang vào thời điểm nào?',
      audioText: 'Chú gà trống gáy vang vào thời điểm nào?',
      points: 15,
      options: [
        { id: 'a', label: 'Sáng sớm tinh mơ 🌅', isCorrect: true },
        { id: 'b', label: 'Buổi trưa' },
        { id: 'c', label: 'Buổi tối' }
      ]
    }
  ]
});

addPassage('tv-g1-b5', {
  passage: {
    title: 'Búp Bê Của Bé',
    author: 'SGK Tiếng Việt 1',
    genre: 'prose',
    content: [
      'Bé có một cô búp bê nhỏ rất xinh xắn.',
      'Búp bê có đôi mắt đen lay láy và mái tóc vàng bồng bềnh.',
      'Mỗi tối học bài xong, bé lại âu yếm chải tóc và ru búp bê ngủ.'
    ],
    audioNarration: 'Búp Bê Của Bé. Bé có một cô búp bê nhỏ rất xinh xắn. Búp bê có đôi mắt đen lay láy và mái tóc vàng bồng bềnh. Mỗi tối học bài xong, bé lại âu yếm chải tóc và ru búp bê ngủ.',
    vocabularyNotes: [
      { word: 'Đen lay láy', meaning: 'Màu đen bóng, sáng ngời tinh anh.' },
      { word: 'Bồng bềnh', meaning: 'Mềm mại uốn lượn nhẹ nhàng.' }
    ]
  },
  questions: [
    {
      id: 'tv1-b5-q1',
      type: 'bubble_choice',
      questionText: 'Mỗi tối sau khi học bài xong, bé thường làm gì?',
      audioText: 'Mỗi tối sau khi học bài xong, bé thường làm gì?',
      points: 15,
      options: [
        { id: 'a', label: 'Âu yếm chải tóc và ru búp bê ngủ 🧸', isCorrect: true },
        { id: 'b', label: 'Xem tivi khuya' },
        { id: 'c', label: 'Chạy ra ngoài chơi' }
      ]
    }
  ]
});

// Write to file
const outContent = `import { ReadingPassage, Question } from '../../../types';

export interface ReadingLessonBundle {
  passage: ReadingPassage;
  questions: Question[];
}

export const VIETNAMESE_READING_PASSAGES: Record<string, ReadingLessonBundle> = ${JSON.stringify(passages, null, 2)};
`;

fs.writeFileSync('src/data/curriculum/vietnamese/readingPassages.ts', outContent, 'utf8');
console.log('Done writing initial clean reading passages!');
