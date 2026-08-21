import { ContentProvenance, ReadingPassage, Question } from '../../../types';

export interface ReadingLessonBundle {
  passage: ReadingPassage;
  sourceType?: 'sgk_official' | 'pedagogical_supplement';
  sourceBook?: string;
  sourceDetail?: string;
  provenance?: ContentProvenance;
  pedagogicalObjective?: string;
  questions: Question[];
}

export const VIETNAMESE_READING_PASSAGES: Record<string, ReadingLessonBundle> = {
  "tv-g1-b1": {
    "passage": {
      "title": "Bài 1: A a",
      "author": "SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Nhận biết: Nam và Hà ca hát.",
        "• Đọc: a",
        "• Tiếng và từ ngữ ứng dụng: ca, hát, Hà, ba, gà, lá",
        "• Nói: Chào hỏi khi đến trường."
      ],
      "audioNarration": "Bài 1: A a. • Nhận biết: Nam và Hà ca hát. • Đọc: a • Tiếng và từ ngữ ứng dụng: ca, hát, Hà, ba, gà, lá • Nói: Chào hỏi khi đến trường.",
      "vocabularyNotes": [
        {
          "word": "ca hát",
          "meaning": "Cùng nhau cất tiếng hát vui tươi."
        },
        {
          "word": "chào hỏi",
          "meaning": "Lời chào lễ phép với thầy cô và cha mẹ."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "Bộ sách Kết nối tri thức với cuộc sống — NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 14, 15 — Bài 1: A a (Chủ đề: Em là học sinh)",
    "pedagogicalObjective": "Nhận biết âm A, đọc đúng câu \"Nam và Hà ca hát\", phát triển kỹ năng chào hỏi.",
    "questions": [
      {
        "id": "tv-g1-b1-q1",
        "type": "bubble_choice",
        "questionText": "Trong tranh nhận biết bài 1, Nam và Hà đang làm gì?",
        "audioText": "Trong tranh nhận biết bài 1, Nam và Hà đang làm gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Nam và Hà ca hát 🎤",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nam và Hà đá bóng",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Nam và Hà học vẽ",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "tv-g1-b1-q2",
        "type": "bubble_choice",
        "questionText": "Chữ cái in màu đỏ cần học trong bài là chữ gì?",
        "audioText": "Chữ cái in màu đỏ cần học trong bài là chữ gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Chữ A a ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Chữ B b",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Chữ C c",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b2": {
    "passage": {
      "title": "Bài 2: B b",
      "author": "SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Nhận biết: Bé và bà bế bé.",
        "• Đọc: b",
        "• Ghép tiếng: b - a -> ba; b - e -> be; b - ê -> bê",
        "• Từ ngữ ứng dụng: ba, bà, bé, bế, bể, con bê"
      ],
      "audioNarration": "Bài 2: B b. • Nhận biết: Bé và bà bế bé. • Đọc: b • Ghép tiếng: b - a -> ba; b - e -> be; b - ê -> bê • Từ ngữ ứng dụng: ba, bà, bé, bế, bể, con bê",
      "vocabularyNotes": [
        {
          "word": "bế",
          "meaning": "Nâng đỡ và ẵm bé bằng hai tay."
        },
        {
          "word": "con bê",
          "meaning": "Con của con bò, còn nhỏ và đáng yêu."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "Bộ sách Kết nối tri thức với cuộc sống — NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 16, 17 — Bài 2: B b",
    "pedagogicalObjective": "Nhận biết âm B, ghép tiếng ba, be, bê và đọc từ ngữ ứng dụng.",
    "questions": [
      {
        "id": "tv-g1-b2-q1",
        "type": "bubble_choice",
        "questionText": "Trong câu nhận biết của bài 2, ai bế bé?",
        "audioText": "Trong câu nhận biết của bài 2, ai bế bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bà bế bé 👵",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Bạn nhỏ",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Bác thợ rèn",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b3": {
    "passage": {
      "title": "Bài 3: C c - D d - Đ đ",
      "author": "SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Nhận biết: Cò, đỗ, dế, cá cờ.",
        "• Đọc: c, d, đ",
        "• Tiếng ứng dụng: ca, cá, cà, da, dẻ, đò, đỏ, đỗ",
        "• Câu ứng dụng: Bà có cá cờ. Ba có quả dâu."
      ],
      "audioNarration": "Bài 3: C c - D d - Đ đ. • Nhận biết: Cò, đỗ, dế, cá cờ. • Đọc: c, d, đ • Tiếng ứng dụng: ca, cá, cà, da, dẻ, đò, đỏ, đỗ • Câu ứng dụng: Bà có cá cờ. Ba có quả dâu.",
      "vocabularyNotes": [
        {
          "word": "cá cờ",
          "meaning": "Loài cá nhỏ có vây xòe đẹp như lá cờ."
        },
        {
          "word": "con dế",
          "meaning": "Con vật nhỏ có đôi chân nhảy khỏe, kêu ri ri."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "Bộ sách Kết nối tri thức với cuộc sống — NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 18, 19 — Bài 3: C c - D d - Đ đ",
    "pedagogicalObjective": "Phân biệt âm C, D, Đ, ghép tiếng và đọc câu ứng dụng chuẩn SGK.",
    "questions": [
      {
        "id": "tv-g1-b3-q1",
        "type": "bubble_choice",
        "questionText": "Tiếng nào sau đây có âm Đ?",
        "audioText": "Tiếng nào sau đây có âm Đ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Đò, đỏ, đỗ ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Cá, ca",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Da, dẻ",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b4": {
    "passage": {
      "title": "Bài 4: E e - Ê ê",
      "author": "SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Nhận biết: Bé vẽ quả lê.",
        "• Đọc: e, ê",
        "• Ghép tiếng: b - e -> be, b - e - sắc -> bé; b - ê -> bê, b - ê - sắc -> bế",
        "• Câu ứng dụng: Bà bế bé. Bé xem con bê."
      ],
      "audioNarration": "Bài 4: E e - Ê ê. • Nhận biết: Bé vẽ quả lê. • Đọc: e, ê • Ghép tiếng: b - e -> be, b - e - sắc -> bé; b - ê -> bê, b - ê - sắc -> bế • Câu ứng dụng: Bà bế bé. Bé xem con bê.",
      "vocabularyNotes": [
        {
          "word": "quả lê",
          "meaning": "Loại quả ngọt, mọng nước, vỏ màu xanh vàng."
        },
        {
          "word": "con bê",
          "meaning": "Chú bò con mới sinh."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "Bộ sách Kết nối tri thức với cuộc sống — NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 20, 21 — Bài 4: E e - Ê ê",
    "pedagogicalObjective": "Nhận biết âm E, Ê, quy tắc đánh vần có dấu thanh bé/bế.",
    "questions": [
      {
        "id": "tv-g1-b4-q1",
        "type": "bubble_choice",
        "questionText": "Trong câu nhận biết của bài 4, bé đang vẽ quả gì?",
        "audioText": "Trong câu nhận biết của bài 4, bé đang vẽ quả gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bé vẽ quả lê 🍐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Bé vẽ quả dưa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Bé vẽ quả chuối",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b5": {
    "passage": {
      "title": "Bài 5: Ôn tập và kể chuyện",
      "author": "SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Bảng ôn tập âm chữ cái: a, b, c, d, đ, e, ê",
        "• Đọc câu ứng dụng: Bà bế bé, bé có quả lê đỏ.",
        "• Kể chuyện theo tranh: Chuyện của bạn Dê con."
      ],
      "audioNarration": "Bài 5: Ôn tập và kể chuyện. • Bảng ôn tập âm chữ cái: a, b, c, d, đ, e, ê • Đọc câu ứng dụng: Bà bế bé, bé có quả lê đỏ. • Kể chuyện theo tranh: Chuyện của bạn Dê con.",
      "vocabularyNotes": [
        {
          "word": "ôn tập",
          "meaning": "Đọc lại và ghi nhớ chắc chắn các chữ đã học."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "Bộ sách Kết nối tri thức với cuộc sống — NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 22, 23 — Bài 5: Ôn tập và kể chuyện",
    "pedagogicalObjective": "Tổng hợp và củng cố các âm chữ cái tuần 1, luyện đọc trôi chảy câu ngắn.",
    "questions": [
      {
        "id": "tv-g1-b5-q1",
        "type": "bubble_choice",
        "questionText": "Bài học số 5 giúp các bạn nhỏ làm điều gì?",
        "audioText": "Bài học số 5 giúp các bạn nhỏ làm điều gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Ôn tập chắc chắn các âm chữ cái đầu tiên và nghe kể chuyện 📖",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học múa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Học hát",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b6": {
    "passage": {
      "title": "Bài 6: O o",
      "author": "SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Nhận biết: Bò bê có cỏ, bò bê no nê.",
        "• Đọc: o",
        "• Tiếng ứng dụng: bo, bò, bó, bọ, cọ, cỏ, cờ",
        "• Nói: Các con vật nuôi trong gia đình."
      ],
      "audioNarration": "Bài 6: O o. • Nhận biết: Bò bê có cỏ, bò bê no nê. • Đọc: o • Tiếng ứng dụng: bo, bò, bó, bọ, cọ, cỏ, cờ • Nói: Các con vật nuôi trong gia đình.",
      "vocabularyNotes": [
        {
          "word": "no nê",
          "meaning": "Ăn uống đầy đủ, no bụng."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "Bộ sách Kết nối tri thức với cuộc sống — NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 24, 25 — Bài 6: O o",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b6-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung trọng tâm của Bài 6: O o trong SGK Tiếng Việt 1 là gì?",
        "audioText": "Nội dung trọng tâm của Bài 6: O o trong SGK Tiếng Việt 1 là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Chơi game",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b7": {
    "passage": {
      "title": "Bài 7: Ô ô - Ơ ơ",
      "author": "SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Nhận biết: Bố mẹ cho bé đi ca nô.",
        "• Đọc: ô, ơ",
        "• Tiếng ứng dụng: cô, cỗ, bơ, nơ, cờ, mỡ",
        "• Câu ứng dụng: Bé có nơ đỏ. Bố có ca nô."
      ],
      "audioNarration": "Bài 7: Ô ô - Ơ ơ. • Nhận biết: Bố mẹ cho bé đi ca nô. • Đọc: ô, ơ • Tiếng ứng dụng: cô, cỗ, bơ, nơ, cờ, mỡ • Câu ứng dụng: Bé có nơ đỏ. Bố có ca nô.",
      "vocabularyNotes": [
        {
          "word": "ca nô",
          "meaning": "Thuyền máy cỡ nhỏ chạy nhanh trên mặt nước."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "Bộ sách Kết nối tri thức với cuộc sống — NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 26, 27 — Bài 7: Ô ô - Ơ ơ",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b7-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung trọng tâm của Bài 7: Ô ô - Ơ ơ trong SGK Tiếng Việt 1 là gì?",
        "audioText": "Nội dung trọng tâm của Bài 7: Ô ô - Ơ ơ trong SGK Tiếng Việt 1 là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Chơi game",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b8": {
    "passage": {
      "title": "Bài 8: I i - K k",
      "author": "SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Nhận biết: Bé kể chuyện cổ tích cho bà nghe.",
        "• Đọc: i, k (k đi với i, e, ê)",
        "• Tiếng ứng dụng: bi, bí, bì, kè, kẻ, kẽ",
        "• Câu ứng dụng: Bé bi bô kể chuyện."
      ],
      "audioNarration": "Bài 8: I i - K k. • Nhận biết: Bé kể chuyện cổ tích cho bà nghe. • Đọc: i, k (k đi với i, e, ê) • Tiếng ứng dụng: bi, bí, bì, kè, kẻ, kẽ • Câu ứng dụng: Bé bi bô kể chuyện.",
      "vocabularyNotes": [
        {
          "word": "bi bô",
          "meaning": "Giọng nói trẻ thơ chưa rõ tiếng nhưng rất đáng yêu."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "Bộ sách Kết nối tri thức với cuộc sống — NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 28, 29 — Bài 8: I i - K k",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b8-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung trọng tâm của Bài 8: I i - K k trong SGK Tiếng Việt 1 là gì?",
        "audioText": "Nội dung trọng tâm của Bài 8: I i - K k trong SGK Tiếng Việt 1 là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Chơi game",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b9": {
    "passage": {
      "title": "Bài 9: U u - Ư ư",
      "author": "SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Nhận biết: Bà cho bé quả đu đủ chín vàng.",
        "• Đọc: u, ư",
        "• Tiếng ứng dụng: đu, đủ, cừ, thư, nụ, củ",
        "• Câu ứng dụng: Bé có củ từ. Bà có đu đủ chín."
      ],
      "audioNarration": "Bài 9: U u - Ư ư. • Nhận biết: Bà cho bé quả đu đủ chín vàng. • Đọc: u, ư • Tiếng ứng dụng: đu, đủ, cừ, thư, nụ, củ • Câu ứng dụng: Bé có củ từ. Bà có đu đủ chín.",
      "vocabularyNotes": [
        {
          "word": "đu đủ",
          "meaning": "Loại quả ruột mềm ngọt, màu vàng cam khi chín."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "Bộ sách Kết nối tri thức với cuộc sống — NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 30, 31 — Bài 9: U u - Ư ư",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b9-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung trọng tâm của Bài 9: U u - Ư ư trong SGK Tiếng Việt 1 là gì?",
        "audioText": "Nội dung trọng tâm của Bài 9: U u - Ư ư trong SGK Tiếng Việt 1 là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Chơi game",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b10": {
    "passage": {
      "title": "Bài 10: Ôn tập âm chữ cái",
      "author": "SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Bảng ôn tập âm: o, ô, ơ, i, k, u, ư",
        "• Đọc câu: Cả nhà đi ca nô, bé reo vui hớn hở.",
        "• Kể chuyện: Rùa và Thỏ."
      ],
      "audioNarration": "Bài 10: Ôn tập âm chữ cái. • Bảng ôn tập âm: o, ô, ơ, i, k, u, ư • Đọc câu: Cả nhà đi ca nô, bé reo vui hớn hở. • Kể chuyện: Rùa và Thỏ.",
      "vocabularyNotes": [
        {
          "word": "hớn hở",
          "meaning": "Vẻ mặt rạng rỡ, vui tươi lộ rõ ra ngoài."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "Bộ sách Kết nối tri thức với cuộc sống — NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 32, 33 — Bài 10: Ôn tập âm chữ cái",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b10-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung trọng tâm của Bài 10: Ôn tập âm chữ cái trong SGK Tiếng Việt 1 là gì?",
        "audioText": "Nội dung trọng tâm của Bài 10: Ôn tập âm chữ cái trong SGK Tiếng Việt 1 là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Chơi game",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b11": {
    "passage": {
      "title": "Bài 11: L l - M m",
      "author": "SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Nhận biết: Mẹ mua lê và mận thơm ngon cho bé.",
        "• Đọc: l, m",
        "• Tiếng ứng dụng: la, lá, me, mẹ, mỏ, mơ",
        "• Câu ứng dụng: Mẹ bế bé ra vườn ngắm hoa mai."
      ],
      "audioNarration": "Bài 11: L l - M m. • Nhận biết: Mẹ mua lê và mận thơm ngon cho bé. • Đọc: l, m • Tiếng ứng dụng: la, lá, me, mẹ, mỏ, mơ • Câu ứng dụng: Mẹ bế bé ra vườn ngắm hoa mai.",
      "vocabularyNotes": [
        {
          "word": "quả mận",
          "meaning": "Quả nhỏ vỏ đỏ hoặc tím, vị chua ngọt giòn mát."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "Bộ sách Kết nối tri thức với cuộc sống — NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 34, 35 — Bài 11: L l - M m",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b11-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung trọng tâm của Bài 11: L l - M m trong SGK Tiếng Việt 1 là gì?",
        "audioText": "Nội dung trọng tâm của Bài 11: L l - M m trong SGK Tiếng Việt 1 là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Chơi game",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b12": {
    "passage": {
      "title": "Bài 12: N n - P p",
      "author": "SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Nhận biết: Nụ hoa hồng nở rộ đón nắng mai.",
        "• Đọc: n, p",
        "• Tiếng ứng dụng: nơ, nụ, nẻ, pa-nô, pin",
        "• Câu ứng dụng: Bé chỉ vào pa-nô rực rỡ cờ hoa."
      ],
      "audioNarration": "Bài 12: N n - P p. • Nhận biết: Nụ hoa hồng nở rộ đón nắng mai. • Đọc: n, p • Tiếng ứng dụng: nơ, nụ, nẻ, pa-nô, pin • Câu ứng dụng: Bé chỉ vào pa-nô rực rỡ cờ hoa.",
      "vocabularyNotes": [
        {
          "word": "pa-nô",
          "meaning": "Tấm bảng lớn vẽ tranh hoặc khẩu hiệu trang trí ngoài trời."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "Bộ sách Kết nối tri thức với cuộc sống — NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 36, 37 — Bài 12: N n - P p",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b12-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung trọng tâm của Bài 12: N n - P p trong SGK Tiếng Việt 1 là gì?",
        "audioText": "Nội dung trọng tâm của Bài 12: N n - P p trong SGK Tiếng Việt 1 là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Chơi game",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b13": {
    "passage": {
      "title": "Bài 13: R r - S s",
      "author": "SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Nhận biết: Rùa và sáo là đôi bạn thân thiết.",
        "• Đọc: r, s",
        "• Tiếng ứng dụng: rổ, rá, rễ, sẻ, sa, sơ",
        "• Câu ứng dụng: Mẹ có rổ cá rô tươi ngon."
      ],
      "audioNarration": "Bài 13: R r - S s. • Nhận biết: Rùa và sáo là đôi bạn thân thiết. • Đọc: r, s • Tiếng ứng dụng: rổ, rá, rễ, sẻ, sa, sơ • Câu ứng dụng: Mẹ có rổ cá rô tươi ngon.",
      "vocabularyNotes": [
        {
          "word": "cá rô",
          "meaning": "Loài cá nước ngọt vây sắc nhọn, thịt thơm ngon."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "Bộ sách Kết nối tri thức với cuộc sống — NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 38, 39 — Bài 13: R r - S s",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b13-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung trọng tâm của Bài 13: R r - S s trong SGK Tiếng Việt 1 là gì?",
        "audioText": "Nội dung trọng tâm của Bài 13: R r - S s trong SGK Tiếng Việt 1 là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Chơi game",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b14": {
    "passage": {
      "title": "Bài 14: T t - Th th",
      "author": "SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Nhận biết: Thỏ con nhảy nhót bên bụi tre.",
        "• Đọc: t, th",
        "• Tiếng ứng dụng: tơ, tư, tổ, thỏ, thìa, thủ",
        "• Câu ứng dụng: Bé tô chữ t, thỏ con ăn củ cà rốt."
      ],
      "audioNarration": "Bài 14: T t - Th th. • Nhận biết: Thỏ con nhảy nhót bên bụi tre. • Đọc: t, th • Tiếng ứng dụng: tơ, tư, tổ, thỏ, thìa, thủ • Câu ứng dụng: Bé tô chữ t, thỏ con ăn củ cà rốt.",
      "vocabularyNotes": [
        {
          "word": "thìa",
          "meaning": "Dụng cụ múc thức ăn bằng inox hoặc nhựa."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "Bộ sách Kết nối tri thức với cuộc sống — NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 40, 41 — Bài 14: T t - Th th",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b14-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung trọng tâm của Bài 14: T t - Th th trong SGK Tiếng Việt 1 là gì?",
        "audioText": "Nội dung trọng tâm của Bài 14: T t - Th th trong SGK Tiếng Việt 1 là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Chơi game",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b15": {
    "passage": {
      "title": "Bài 15: V v - X x",
      "author": "SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Nhận biết: Vườn cây xum xuê trĩu quả ngọt.",
        "• Đọc: v, x",
        "• Tiếng ứng dụng: ve, vú sữa, xe, xôi, xả",
        "• Câu ứng dụng: Bé đi xe đạp trong vườn hoa xanh mát."
      ],
      "audioNarration": "Bài 15: V v - X x. • Nhận biết: Vườn cây xum xuê trĩu quả ngọt. • Đọc: v, x • Tiếng ứng dụng: ve, vú sữa, xe, xôi, xả • Câu ứng dụng: Bé đi xe đạp trong vườn hoa xanh mát.",
      "vocabularyNotes": [
        {
          "word": "xum xuê",
          "meaning": "Cây cối cành lá rậm rạp, nhiều quả tươi tốt."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "Bộ sách Kết nối tri thức với cuộc sống — NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 42, 43 — Bài 15: V v - X x",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b15-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung trọng tâm của Bài 15: V v - X x trong SGK Tiếng Việt 1 là gì?",
        "audioText": "Nội dung trọng tâm của Bài 15: V v - X x trong SGK Tiếng Việt 1 là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Chơi game",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b16": {
    "passage": {
      "title": "Bài 16: Ch ch - Kh kh",
      "author": "SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Nhận biết: Chú khỉ trèo cây hái quả khế chua.",
        "• Đọc: ch, kh",
        "• Tiếng ứng dụng: chó, chè, khỉ, khế, kho",
        "• Câu ứng dụng: Mẹ kho cá với khế chua thơm lừng."
      ],
      "audioNarration": "Bài 16: Ch ch - Kh kh. • Nhận biết: Chú khỉ trèo cây hái quả khế chua. • Đọc: ch, kh • Tiếng ứng dụng: chó, chè, khỉ, khế, kho • Câu ứng dụng: Mẹ kho cá với khế chua thơm lừng.",
      "vocabularyNotes": [
        {
          "word": "quả khế",
          "meaning": "Quả có 5 múi hình ngôi sao, vị chua thanh."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "Bộ sách Kết nối tri thức với cuộc sống — NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 44, 45 — Bài 16: Ch ch - Kh kh",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b16-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung trọng tâm của Bài 16: Ch ch - Kh kh trong SGK Tiếng Việt 1 là gì?",
        "audioText": "Nội dung trọng tâm của Bài 16: Ch ch - Kh kh trong SGK Tiếng Việt 1 là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Chơi game",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b17": {
    "passage": {
      "title": "Bài 17: Nh nh - Ng ng",
      "author": "SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Nhận biết: Nhà bà có đàn gà con kêu chiêm chiếp.",
        "• Đọc: nh, ng",
        "• Tiếng ứng dụng: nho, nhà, ngô, ngỗng, ngủ",
        "• Câu ứng dụng: Bà cho bé chùm nho tím ngọt ngào."
      ],
      "audioNarration": "Bài 17: Nh nh - Ng ng. • Nhận biết: Nhà bà có đàn gà con kêu chiêm chiếp. • Đọc: nh, ng • Tiếng ứng dụng: nho, nhà, ngô, ngỗng, ngủ • Câu ứng dụng: Bà cho bé chùm nho tím ngọt ngào.",
      "vocabularyNotes": [
        {
          "word": "chùm nho",
          "meaning": "Nhiều quả nho tròn mọc kết thành chùm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "Bộ sách Kết nối tri thức với cuộc sống — NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 46, 47 — Bài 17: Nh nh - Ng ng",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b17-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung trọng tâm của Bài 17: Nh nh - Ng ng trong SGK Tiếng Việt 1 là gì?",
        "audioText": "Nội dung trọng tâm của Bài 17: Nh nh - Ng ng trong SGK Tiếng Việt 1 là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Chơi game",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b18": {
    "passage": {
      "title": "Bài 18: Ngh ngh - Gh gh",
      "author": "SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Nhận biết: Nghé con đứng dưới gốc cây gạo.",
        "• Đọc: ngh, gh (luật đi với e, ê, i)",
        "• Tiếng ứng dụng: nghé, nghỉ, nghe, ghế, ghi, gỗ",
        "• Câu ứng dụng: Bé ngồi trên ghế gỗ lắng nghe bà kể chuyện."
      ],
      "audioNarration": "Bài 18: Ngh ngh - Gh gh. • Nhận biết: Nghé con đứng dưới gốc cây gạo. • Đọc: ngh, gh (luật đi với e, ê, i) • Tiếng ứng dụng: nghé, nghỉ, nghe, ghế, ghi, gỗ • Câu ứng dụng: Bé ngồi trên ghế gỗ lắng nghe bà kể chuyện.",
      "vocabularyNotes": [
        {
          "word": "nghé con",
          "meaning": "Con của con trâu khi còn non."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "Bộ sách Kết nối tri thức với cuộc sống — NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 48, 49 — Bài 18: Ngh ngh - Gh gh",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b18-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung trọng tâm của Bài 18: Ngh ngh - Gh gh trong SGK Tiếng Việt 1 là gì?",
        "audioText": "Nội dung trọng tâm của Bài 18: Ngh ngh - Gh gh trong SGK Tiếng Việt 1 là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Chơi game",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b19": {
    "passage": {
      "title": "Bài 19: An an - At at",
      "author": "SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Nhận biết: Các bạn nhỏ tan học vui vẻ bước ra cổng trường.",
        "• Vần: an, at",
        "• Tiếng ứng dụng: bạn, bàn, đàn, bát, hạt, cát",
        "• Câu ứng dụng: Đàn chim én bay lượn trên bãi cát vàng."
      ],
      "audioNarration": "Bài 19: An an - At at. • Nhận biết: Các bạn nhỏ tan học vui vẻ bước ra cổng trường. • Vần: an, at • Tiếng ứng dụng: bạn, bàn, đàn, bát, hạt, cát • Câu ứng dụng: Đàn chim én bay lượn trên bãi cát vàng.",
      "vocabularyNotes": [
        {
          "word": "tan học",
          "meaning": "Hết giờ học, học sinh được ra về."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "Bộ sách Kết nối tri thức với cuộc sống — NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 52, 53 — Bài 19: An an - At at",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b19-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung trọng tâm của Bài 19: An an - At at trong SGK Tiếng Việt 1 là gì?",
        "audioText": "Nội dung trọng tâm của Bài 19: An an - At at trong SGK Tiếng Việt 1 là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Chơi game",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b20": {
    "passage": {
      "title": "Bài 20: Ôn tập cuối Học kì 1",
      "author": "SGK Tiếng Việt 1 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Bảng tổng kết toàn bộ âm chữ cái và vần Tập 1.",
        "• Đọc câu ứng dụng: Mùa xuân ấm áp, chim én bay về rộn rã trên cánh đồng lúa chín.",
        "• Đánh giá năng lực đọc trôi chảy học kỳ 1."
      ],
      "audioNarration": "Bài 20: Ôn tập cuối Học kì 1. • Bảng tổng kết toàn bộ âm chữ cái và vần Tập 1. • Đọc câu ứng dụng: Mùa xuân ấm áp, chim én bay về rộn rã trên cánh đồng lúa chín. • Đánh giá năng lực đọc trôi chảy học kỳ 1.",
      "vocabularyNotes": [
        {
          "word": "ấm áp",
          "meaning": "Thời tiết dễ chịu, mang lại cảm giác ấm lòng."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "Bộ sách Kết nối tri thức với cuộc sống — NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 88, 89 — Bài 20: Ôn tập cuối Học kì 1",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b20-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung trọng tâm của Bài 20: Ôn tập cuối Học kì 1 trong SGK Tiếng Việt 1 là gì?",
        "audioText": "Nội dung trọng tâm của Bài 20: Ôn tập cuối Học kì 1 trong SGK Tiếng Việt 1 là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Chơi game",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b21": {
    "passage": {
      "title": "Bài 1: Tôi là học sinh lớp 1",
      "author": "Trung Sơn",
      "genre": "prose",
      "content": [
        "Tôi tên là Nam, học sinh lớp 1A, Trường Tiểu học Lê Quý Đôn. Ngày đầu đi học, mặc bộ đồng phục của trường, tôi hãnh diện lắm.",
        "Hồi đầu năm học, tôi mới học chữ cái. Thế mà bây giờ, tôi đã đọc được truyện tranh. Tôi còn biết làm toán nữa. Tôi có thêm nhiều bạn mới.",
        "Ai cũng bảo từ khi đi học, tôi chững chạc hẳn lên."
      ],
      "audioNarration": "Bài 1: Tôi là học sinh lớp 1. Tôi tên là Nam, học sinh lớp 1A, Trường Tiểu học Lê Quý Đôn. Ngày đầu đi học, mặc bộ đồng phục của trường, tôi hãnh diện lắm. Hồi đầu năm học, tôi mới học chữ cái. Thế mà bây giờ, tôi đã đọc được truyện tranh. Tôi còn biết làm toán nữa. Tôi có thêm nhiều bạn mới. Ai cũng bảo từ khi đi học, tôi chững chạc hẳn lên.",
      "vocabularyNotes": [
        {
          "word": "đồng phục",
          "meaning": "Quần áo cùng màu sắc, kiểu dáng theo quy định của nhà trường."
        },
        {
          "word": "hãnh diện",
          "meaning": "Tự hào và vui sướng vì thấy mình được tôn trọng, khen ngợi."
        },
        {
          "word": "chững chạc",
          "meaning": "Trông đàng hoàng, người lớn hơn hẳn so với trước."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 10, 11 — Bài 1: Tôi là học sinh lớp 1 (Chủ điểm 1: Tôi và các bạn)",
    "pedagogicalObjective": "Đọc trôi chảy toàn bài, hiểu niềm tự hào và sự trưởng thành của học sinh lớp 1.",
    "questions": [
      {
        "id": "tv-g1-b21-q1",
        "type": "bubble_choice",
        "questionText": "Trong bài đọc, bạn Nam học lớp mấy, trường nào?",
        "audioText": "Trong bài đọc, bạn Nam học lớp mấy, trường nào?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Lớp 1A, Trường Tiểu học Lê Quý Đôn 🏫",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Lớp 2B, Trường Tiểu học Kim Đồng",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lớp 3C, Trường Tiểu học Chu Văn An",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "tv-g1-b21-q2",
        "type": "bubble_choice",
        "questionText": "Ngày đầu đi học, mặc bộ đồng phục của trường, Nam cảm thấy thế nào?",
        "audioText": "Ngày đầu đi học, mặc bộ đồng phục của trường, Nam cảm thấy thế nào?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Nam thấy hãnh diện lắm ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nam thấy sợ hãi",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Nam khóc nhè",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b22": {
    "passage": {
      "title": "Bài 2: Đôi tai xấu xí",
      "author": "SGK Tiếng Việt 1 Tập hai — NXB Giáo Dục Việt Nam",
      "genre": "story",
      "content": [
        "Thỏ con có đôi tai dài lúp xúp. Chú luôn tự ti: \"Đôi tai mình xấu xí quá, chẳng giống bạn nào!\".",
        "Một hôm, thỏ con đi chơi cùng các bạn trong rừng. Đang chơi đùa vui vẻ, bỗng thỏ con vểnh đôi tai lên lắng nghe. Chú nghe thấy tiếng bước chân sói xám đang rón rén lại gần.",
        "Thỏ con vội hô to: \"Có sói! Các bạn chạy mau!\". Nhờ tiếng hô của thỏ con, cả đàn thú nhỏ đã kịp thời chạy vào hang an toàn.",
        "Từ đó, thỏ con hiểu rằng đôi tai dài thính nhạy của mình thật tuyệt vời và không còn tự ti nữa."
      ],
      "audioNarration": "Bài 2: Đôi tai xấu xí. Thỏ con có đôi tai dài lúp xúp. Chú luôn tự ti: \"Đôi tai mình xấu xí quá, chẳng giống bạn nào!\". Một hôm, thỏ con đi chơi cùng các bạn trong rừng. Đang chơi đùa vui vẻ, bỗng thỏ con vểnh đôi tai lên lắng nghe. Chú nghe thấy tiếng bước chân sói xám đang rón rén lại gần. Thỏ con vội hô to: \"Có sói! Các bạn chạy mau!\". Nhờ tiếng hô của thỏ con, cả đàn thú nhỏ đã kịp thời chạy vào hang an toàn. Từ đó, thỏ con hiểu rằng đôi tai dài thính nhạy của mình thật tuyệt vời và không còn tự ti nữa.",
      "vocabularyNotes": [
        {
          "word": "tự ti",
          "meaning": "Tự đánh giá thấp bản thân, thiếu tự tin."
        },
        {
          "word": "thính nhạy",
          "meaning": "Nghe rất rõ và chuẩn xác ngay cả âm thanh nhỏ nhất từ xa."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 14, 15 — Bài 2: Đôi tai xấu xí (Chủ điểm 1: Tôi và các bạn)",
    "pedagogicalObjective": "Hiểu được mỗi người đều có đặc điểm riêng đáng quý, tự tin vào bản thân.",
    "questions": [
      {
        "id": "tv-g1-b22-q1",
        "type": "bubble_choice",
        "questionText": "Nhờ điều gì mà thỏ con đã cứu được cả đàn thú nhỏ?",
        "audioText": "Nhờ điều gì mà thỏ con đã cứu được cả đàn thú nhỏ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Nhờ đôi tai dài thính nhạy nghe thấy tiếng sói từ xa 🐰",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nhờ chạy nhanh nhất rừng",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Nhờ biết bay",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b23": {
    "passage": {
      "title": "Bài 3: Bạn của gió",
      "author": "SGK Tiếng Việt 1 Tập hai — NXB Giáo Dục Việt Nam",
      "genre": "poem",
      "content": [
        "Ai là bạn của gió?\nCánh buồm no gió khơi\nĐẩy con thuyền lướt sóng\nĐi khắp bốn phương trời.",
        "Ai là bạn của gió?\nCánh diều biếc trời mây\nBay bổng cùng tiếng sáo\nTrong nắng mai ngập tràn.",
        "Gió mang hương của lúa\nGió quạt mát trưa hè\nGió thổi bừng ngọn lửa\nSưởi ấm đêm mùa đông."
      ],
      "audioNarration": "Bài 3: Bạn của gió. Ai là bạn của gió?\nCánh buồm no gió khơi\nĐẩy con thuyền lướt sóng\nĐi khắp bốn phương trời. Ai là bạn của gió?\nCánh diều biếc trời mây\nBay bổng cùng tiếng sáo\nTrong nắng mai ngập tràn. Gió mang hương của lúa\nGió quạt mát trưa hè\nGió thổi bừng ngọn lửa\nSưởi ấm đêm mùa đông.",
      "vocabularyNotes": [
        {
          "word": "no gió",
          "meaning": "Căng tròn vì đón đầy sức gió thổi vào."
        },
        {
          "word": "bay bổng",
          "meaning": "Bay lượn nhẹ nhàng và vút lên cao giữa không trung."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 18, 19 — Bài 3: Bạn của gió (Chủ điểm 2: Thế giới quanh em)",
    "pedagogicalObjective": "Đọc diễn cảm bài thơ, cảm nhận vẻ đẹp và sự hữu ích của gió trong thiên nhiên.",
    "questions": [
      {
        "id": "tv-g1-b23-q1",
        "type": "bubble_choice",
        "questionText": "Theo bài thơ, những sự vật nào là bạn của gió?",
        "audioText": "Theo bài thơ, những sự vật nào là bạn của gió?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Cánh buồm và cánh diều biếc trời mây 🪁⛵",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Hòn đá dưới đất",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Chiếc ô tô",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b24": {
    "passage": {
      "title": "Bài 4: Rửa tay trước khi ăn",
      "author": "SGK Tiếng Việt 1 Tập hai — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Hằng ngày, đôi bàn tay của chúng ta làm bao nhiêu việc: cầm bút viết bài, nhặt đồ chơi, quét dọn nhà cửa. Vì thế, bàn tay có thể dính rất nhiều bụi bẩn và vi khuẩn mà mắt thường không nhìn thấy được.",
        "Trước khi ăn cơm và sau khi đi vệ sinh, em cần rửa tay thật sạch bằng xà phòng dưới vòi nước chảy. Rửa sạch lòng bàn tay, mu bàn tay và từng kẽ ngón tay.",
        "Giữ đôi bàn tay sạch sẽ là thói quen tốt giúp em phòng tránh bệnh tật và bảo vệ sức khỏe mỗi ngày."
      ],
      "audioNarration": "Bài 4: Rửa tay trước khi ăn. Hằng ngày, đôi bàn tay của chúng ta làm bao nhiêu việc: cầm bút viết bài, nhặt đồ chơi, quét dọn nhà cửa. Vì thế, bàn tay có thể dính rất nhiều bụi bẩn và vi khuẩn mà mắt thường không nhìn thấy được. Trước khi ăn cơm và sau khi đi vệ sinh, em cần rửa tay thật sạch bằng xà phòng dưới vòi nước chảy. Rửa sạch lòng bàn tay, mu bàn tay và từng kẽ ngón tay. Giữ đôi bàn tay sạch sẽ là thói quen tốt giúp em phòng tránh bệnh tật và bảo vệ sức khỏe mỗi ngày.",
      "vocabularyNotes": [
        {
          "word": "vi khuẩn",
          "meaning": "Sinh vật cực nhỏ gây bệnh, chỉ nhìn thấy qua kính hiển vi."
        },
        {
          "word": "vệ sinh",
          "meaning": "Giữ gìn sạch sẽ để bảo vệ sức khỏe phòng tránh bệnh."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 22, 23 — Bài 4: Rửa tay trước khi ăn (Chủ điểm 3: Giữ gìn vệ sinh thân thể)",
    "pedagogicalObjective": "Rèn luyện thói quen giữ gìn vệ sinh thân thể, bảo vệ sức khỏe cho học sinh lớp 1.",
    "questions": [
      {
        "id": "tv-g1-b24-q1",
        "type": "bubble_choice",
        "questionText": "Em cần rửa tay bằng xà phòng vào những lúc nào?",
        "audioText": "Em cần rửa tay bằng xà phòng vào những lúc nào?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Trước khi ăn cơm và sau khi đi vệ sinh 🧼",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Chỉ khi nào tay dính mực",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không cần rửa tay",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b25": {
    "passage": {
      "title": "Bài 5: Lời chào",
      "author": "Phạm Cúc",
      "genre": "poem",
      "content": [
        "Đi về con chào mẹ\nRa vườn chào cụ ông\nĐến trường chào cô giáo\nLễ phép nở trong lòng.",
        "Lời chào như đóa hoa\nNở trên môi em nhỏ\nLời chào mang niềm vui\nCho mọi người yêu quý.",
        "Ai cũng khen em ngoan\nBiết vâng lời, lễ phép\nLời chào theo em mãi\nSuốt những tháng ngày vui."
      ],
      "audioNarration": "Bài 5: Lời chào. Đi về con chào mẹ\nRa vườn chào cụ ông\nĐến trường chào cô giáo\nLễ phép nở trong lòng. Lời chào như đóa hoa\nNở trên môi em nhỏ\nLời chào mang niềm vui\nCho mọi người yêu quý. Ai cũng khen em ngoan\nBiết vâng lời, lễ phép\nLời chào theo em mãi\nSuốt những tháng ngày vui.",
      "vocabularyNotes": [
        {
          "word": "lễ phép",
          "meaning": "Có thái độ và lời nói kính trọng đúng mực với người lớn."
        },
        {
          "word": "đóa hoa",
          "meaning": "Bông hoa tươi đẹp, thơm ngát."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 26, 27 — Bài 5: Lời chào (Chủ điểm 4: Lễ phép và văn minh)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, hình thành thói quen chào hỏi lễ phép mọi lúc mọi nơi.",
    "questions": [
      {
        "id": "tv-g1-b25-q1",
        "type": "bubble_choice",
        "questionText": "Trong bài thơ của tác giả Phạm Cúc, lời chào được ví như gì?",
        "audioText": "Trong bài thơ của tác giả Phạm Cúc, lời chào được ví như gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Lời chào như đóa hoa nở trên môi em nhỏ 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Như hòn đá",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Như ngọn gió",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b26": {
    "passage": {
      "title": "Bài 6: Mẹ và cô",
      "author": "Trần Quốc Toàn",
      "genre": "poem",
      "content": [
        "Buổi sáng bé chào mẹ\nChạy đến ôm cổ cô\nBuổi chiều bé chào cô\nRồi sà vào lòng mẹ.",
        "Mặt trời mọc rồi lặn\nTrên đôi chân lon ton\nHai chân trời của con\nLà mẹ và cô giáo."
      ],
      "audioNarration": "Bài 6: Mẹ và cô. Buổi sáng bé chào mẹ\nChạy đến ôm cổ cô\nBuổi chiều bé chào cô\nRồi sà vào lòng mẹ. Mặt trời mọc rồi lặn\nTrên đôi chân lon ton\nHai chân trời của con\nLà mẹ và cô giáo.",
      "vocabularyNotes": [
        {
          "word": "sà vào",
          "meaning": "Chạy thật nhanh và ngả mình vào vòng tay yêu thương."
        },
        {
          "word": "lon ton",
          "meaning": "Dáng chạy bước ngắn, nhanh nhẹn của trẻ nhỏ."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 34, 35 — Bài 6: Mẹ và cô (Chủ điểm 5: Mái trường mến yêu)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ 4 chữ, cảm nhận tình yêu thương của mẹ và cô giáo.",
    "questions": [
      {
        "id": "tv-g1-b26-q1",
        "type": "bubble_choice",
        "questionText": "Theo bài thơ, \"hai chân trời của con\" là ai?",
        "audioText": "Theo bài thơ, \"hai chân trời của con\" là ai?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Là Mẹ và Cô giáo 👩‍👧",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Là Búp bê và Gấu bông",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Là Bạn bè",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b27": {
    "passage": {
      "title": "Bài 7: Cây bàng trường em",
      "author": "Xuân Quỳnh",
      "genre": "prose",
      "content": [
        "Cây bàng sừng sững giữa sân trường em. Mùa xuân, bàng đâm chồi biếc, những búp non mơn mởn như những ngọn nến xanh lung linh.",
        "Mùa hè, tán bàng xòe rộng như chiếc ô khổng lồ che bóng mát cho chúng em vui chơi trong giờ ra chơi.",
        "Mùa thu, lá bàng ngả sang màu đỏ ối. Mùa đông, cành bàng khẳng khiu đón gió lạnh, tích tụ nhựa sống chờ mùa xuân tới."
      ],
      "audioNarration": "Bài 7: Cây bàng trường em. Cây bàng sừng sững giữa sân trường em. Mùa xuân, bàng đâm chồi biếc, những búp non mơn mởn như những ngọn nến xanh lung linh. Mùa hè, tán bàng xòe rộng như chiếc ô khổng lồ che bóng mát cho chúng em vui chơi trong giờ ra chơi. Mùa thu, lá bàng ngả sang màu đỏ ối. Mùa đông, cành bàng khẳng khiu đón gió lạnh, tích tụ nhựa sống chờ mùa xuân tới.",
      "vocabularyNotes": [
        {
          "word": "mơn mởn",
          "meaning": "Tươi non, mượt mà và căng tràn sức sống."
        },
        {
          "word": "khẳng khiu",
          "meaning": "Gầy gò, trơ cành lá nhưng cứng cáp."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 42, 43 — Bài 7: Cây bàng trường em (Chủ điểm 5: Mái trường mến yêu)",
    "pedagogicalObjective": "Đọc hiểu đoạn văn miêu tả vẻ đẹp của cây bàng bốn mùa trong sân trường.",
    "questions": [
      {
        "id": "tv-g1-b27-q1",
        "type": "bubble_choice",
        "questionText": "Vào mùa hè, tán bàng được nhà thơ Xuân Quỳnh so sánh với hình ảnh gì?",
        "audioText": "Vào mùa hè, tán bàng được nhà thơ Xuân Quỳnh so sánh với hình ảnh gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Chiếc ô khổng lồ che mát sân trường 🌳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Tòa lâu đài",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Ngọn đuốc",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b28": {
    "passage": {
      "title": "Bài 8: Cậu bé thông minh",
      "author": "Truyện cổ tích Việt Nam",
      "genre": "story",
      "content": [
        "Ngày xưa, có một ông vua muốn tìm người tài giúp nước bèn hạ lệnh cho mỗi làng trong vùng phải nộp một con gà trống biết đẻ trứng.",
        "Dân làng lo sợ không biết làm sao, duy chỉ có một cậu bé xin cha vào kinh đô gặp vua. Cậu bé đến trước cung điện khóc ầm ĩ. Vua hỏi: \"Tại sao con khóc?\".",
        "Cậu bé thưa: \"Mẹ con mới sinh em bé, bố con bắt con đi tìm sữa cho em bú nhưng bố không chịu đẻ!\". Vua bật cười: \"Bố là đàn ông sao đẻ được!\". Cậu bé nhanh trí đáp: \"Vậy sao vua lại bắt làng con nộp gà trống đẻ trứng ạ?\".",
        "Vua biết đã tìm được người thông minh lỗi lạc, bèn ban thưởng cho cậu bé và miễn thuế cho cả làng."
      ],
      "audioNarration": "Bài 8: Cậu bé thông minh. Ngày xưa, có một ông vua muốn tìm người tài giúp nước bèn hạ lệnh cho mỗi làng trong vùng phải nộp một con gà trống biết đẻ trứng. Dân làng lo sợ không biết làm sao, duy chỉ có một cậu bé xin cha vào kinh đô gặp vua. Cậu bé đến trước cung điện khóc ầm ĩ. Vua hỏi: \"Tại sao con khóc?\". Cậu bé thưa: \"Mẹ con mới sinh em bé, bố con bắt con đi tìm sữa cho em bú nhưng bố không chịu đẻ!\". Vua bật cười: \"Bố là đàn ông sao đẻ được!\". Cậu bé nhanh trí đáp: \"Vậy sao vua lại bắt làng con nộp gà trống đẻ trứng ạ?\". Vua biết đã tìm được người thông minh lỗi lạc, bèn ban thưởng cho cậu bé và miễn thuế cho cả làng.",
      "vocabularyNotes": [
        {
          "word": "hạ lệnh",
          "meaning": "Đưa ra mệnh lệnh chính thức từ vua chúa."
        },
        {
          "word": "lỗi lạc",
          "meaning": "Tài giỏi xuất chúng hơn người."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 50, 51 — Bài 8: Cậu bé thông minh (Chủ điểm 6: Truyện cổ tích)",
    "pedagogicalObjective": "Đọc hiểu truyện cổ tích, ca ngợi sự nhanh trí, bình tĩnh và thông minh.",
    "questions": [
      {
        "id": "tv-g1-b28-q1",
        "type": "bubble_choice",
        "questionText": "Cậu bé đã dùng cách gì để giúp dân làng không bị phạt?",
        "audioText": "Cậu bé đã dùng cách gì để giúp dân làng không bị phạt?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Đưa ra câu chuyện bố không biết đẻ để vua tự nhận ra điều phi lý 💡",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Mua gà mái đền vua",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Bỏ trốn khỏi làng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b29": {
    "passage": {
      "title": "Bài 9: Quê hương tươi đẹp",
      "author": "Đồng dao Việt Nam",
      "genre": "poem",
      "content": [
        "Quê hương em biết bao tươi đẹp\nĐồng lúa xanh dạt dào sóng lượn\nCon sông dài uốn quanh xóm nhỏ\nThuyền xuôi ngược trong ánh bình minh.",
        "Nghe tiếng sáo diều vi vút bay\nNghe câu hát ru ngọt ngào của mẹ\nEm yêu tha thiết đất nước mình\nYêu từ mái nhà, rặng tre xanh biếc."
      ],
      "audioNarration": "Bài 9: Quê hương tươi đẹp. Quê hương em biết bao tươi đẹp\nĐồng lúa xanh dạt dào sóng lượn\nCon sông dài uốn quanh xóm nhỏ\nThuyền xuôi ngược trong ánh bình minh. Nghe tiếng sáo diều vi vút bay\nNghe câu hát ru ngọt ngào của mẹ\nEm yêu tha thiết đất nước mình\nYêu từ mái nhà, rặng tre xanh biếc.",
      "vocabularyNotes": [
        {
          "word": "dạt dào",
          "meaning": "Nhiều và tràn đầy, chuyển động nhịp nhàng như sóng biển."
        },
        {
          "word": "vi vút",
          "meaning": "Âm thanh tiếng sáo trong trẻo, vang xa trên tầng không."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 62, 63 — Bài 9: Quê hương tươi đẹp (Chủ điểm 7: Quê hương đất nước)",
    "pedagogicalObjective": "Đọc diễn cảm bài đồng dao, bồi dưỡng tình yêu quê hương đất nước thiết tha.",
    "questions": [
      {
        "id": "tv-g1-b29-q1",
        "type": "bubble_choice",
        "questionText": "Bài đồng dao miêu tả những cảnh đẹp nào của quê hương?",
        "audioText": "Bài đồng dao miêu tả những cảnh đẹp nào của quê hương?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Đồng lúa xanh, con sông dài uốn quanh và tiếng sáo diều 🌾",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Thành phố cao ốc",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khu vui chơi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b30": {
    "passage": {
      "title": "Bài 10: Bác Hồ kính yêu",
      "author": "Bảo Định Giang",
      "genre": "poem",
      "content": [
        "Tháp Mười đẹp nhất bông sen\nViệt Nam đẹp nhất có tên Bác Hồ.\nBác Hồ là vị lãnh tụ muôn vàn kính yêu của dân tộc Việt Nam. Cả cuộc đời Bác luôn dành trọn tình yêu thương bao la cho các cháu thiếu niên nhi đồng.",
        "Bác dạy thiếu nhi năm điều quý báu: Yêu Tổ quốc, yêu đồng bào; Học tập tốt, lao động tốt; Đoàn kết tốt, kỷ luật tốt; Giữ gìn vệ sinh thật tốt; Khiêm tốn, thật thà, dũng cảm.",
        "Thiếu nhi Việt Nam luôn khắc ghi lời Bác dạy, chăm ngoan học giỏi để xứng đáng là cháu ngoan Bác Hồ."
      ],
      "audioNarration": "Bài 10: Bác Hồ kính yêu. Tháp Mười đẹp nhất bông sen\nViệt Nam đẹp nhất có tên Bác Hồ.\nBác Hồ là vị lãnh tụ muôn vàn kính yêu của dân tộc Việt Nam. Cả cuộc đời Bác luôn dành trọn tình yêu thương bao la cho các cháu thiếu niên nhi đồng. Bác dạy thiếu nhi năm điều quý báu: Yêu Tổ quốc, yêu đồng bào; Học tập tốt, lao động tốt; Đoàn kết tốt, kỷ luật tốt; Giữ gìn vệ sinh thật tốt; Khiêm tốn, thật thà, dũng cảm. Thiếu nhi Việt Nam luôn khắc ghi lời Bác dạy, chăm ngoan học giỏi để xứng đáng là cháu ngoan Bác Hồ.",
      "vocabularyNotes": [
        {
          "word": "lãnh tụ",
          "meaning": "Người đứng đầu tài ba dẫn dắt đất nước và dân tộc."
        },
        {
          "word": "khắc ghi",
          "meaning": "Ghi nhớ sâu sắc trong tim không bao giờ quên."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Trang 74, 75 — Bài 10: Bác Hồ kính yêu (Chủ điểm 7: Quê hương đất nước)",
    "pedagogicalObjective": "Hiểu tình yêu thương của Bác Hồ với thiếu nhi, học tập và rèn luyện theo 5 điều Bác dạy.",
    "questions": [
      {
        "id": "tv-g1-b30-q1",
        "type": "bubble_choice",
        "questionText": "Câu thơ nổi tiếng nào ca ngợi Bác Hồ trong bài đọc?",
        "audioText": "Câu thơ nổi tiếng nào ca ngợi Bác Hồ trong bài đọc?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tháp Mười đẹp nhất bông sen / Việt Nam đẹp nhất có tên Bác Hồ 🌺",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Công cha như núi Thái Sơn",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Bầu ơi thương lấy bí cùng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b1": {
    "passage": {
      "title": "Tôi là học sinh lớp 2",
      "author": "Phỏng theo SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Sáng sớm ngày khai trường, tôi thức dậy thật sớm. Mẹ âu yếm vuốt tóc tôi và nói: \"Chúc mừng con trai yêu đã chính thức trở thành học sinh lớp 2!\"",
        "Tôi mặc bộ đồng phục mới tinh, tinh tươm và sạch sẽ. Đứng trước gương, tôi thấy mình lớn hơn hẳn năm ngoái. Không còn rụt rè, bỡ ngỡ như ngày đầu bước vào lớp Một nữa.",
        "Đến trường, sân trường rợp bóng cờ hoa và rộn rã tiếng cười nói. Tôi nhìn thấy thầy cô mến yêu và gặp lại những người bạn thân thiết. Chúng tôi tíu tít kể cho nhau nghe về những chuyến đi chơi mùa hè kỳ thú.",
        "Hồi trống trường giòn giã vang lên: \"Tùng! Tùng! Tùng!\". Chúng tôi trang nghiêm xếp hàng bước vào lớp học mới. Tôi tự hào thầm nhủ: \"Mình đã là học sinh lớp 2, mình sẽ học thật chăm chỉ và yêu thương bạn bè!\""
      ],
      "audioNarration": "Tôi là học sinh lớp 2. Sáng sớm ngày khai trường, tôi thức dậy thật sớm. Mẹ âu yếm vuốt tóc tôi và nói: \"Chúc mừng con trai yêu đã chính thức trở thành học sinh lớp 2!\" Tôi mặc bộ đồng phục mới tinh, tinh tươm và sạch sẽ. Đứng trước gương, tôi thấy mình lớn hơn hẳn năm ngoái. Không còn rụt rè, bỡ ngỡ như ngày đầu bước vào lớp Một nữa. Đến trường, sân trường rợp bóng cờ hoa và rộn rã tiếng cười nói. Tôi nhìn thấy thầy cô mến yêu và gặp lại những người bạn thân thiết. Chúng tôi tíu tít kể cho nhau nghe về những chuyến đi chơi mùa hè kỳ thú. Hồi trống trường giòn giã vang lên: \"Tùng! Tùng! Tùng!\". Chúng tôi trang nghiêm xếp hàng bước vào lớp học mới. Tôi tự hào thầm nhủ: \"Mình đã là học sinh lớp 2, mình sẽ học thật chăm chỉ và yêu thương bạn bè!\"",
      "vocabularyNotes": [
        {
          "word": "Âu yếm",
          "meaning": "Cử chỉ dịu dàng, trìu mến thể hiện tình yêu thương."
        },
        {
          "word": "Tíu tít",
          "meaning": "Nói cười vui vẻ, rộn ràng không ngớt."
        },
        {
          "word": "Trang nghiêm",
          "meaning": "Nghiêm trang, kính cẩn và trật tự."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 10, 11 — Tôi là học sinh lớp 2",
    "pedagogicalObjective": "Đọc diễn cảm, mở rộng vốn từ, phát triển phẩm chất nhân ái và tự tin cho học sinh lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b1-q1",
        "type": "bubble_choice",
        "questionText": "Nhân vật chính cảm thấy bản thân thay đổi thế nào khi lên lớp 2?",
        "audioText": "Nhân vật chính cảm thấy bản thân thay đổi thế nào khi lên lớp 2?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Thấy mình lớn hơn hẳn, tự tin và không còn bỡ ngỡ ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Vẫn khóc nhè",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Sợ hãi trốn ở nhà",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b2": {
    "passage": {
      "title": "Ngày hôm qua đâu rồi?",
      "author": "Bế Kiến Quốc",
      "genre": "poem",
      "content": [
        "Em cầm tờ lịch cũ\n- Ngày hôm qua đâu rồi?\nRa ngoài sân hỏi nụ\nNụ vừa nở cùng hoa.",
        "Em xoa đầu chú chó\n- Ngày hôm qua đâu rồi?\nChú chó vẫy đuôi nhỏ:\n\"Hôm qua ở ngoài đồng.\"",
        "Ngày hôm qua ở lại\nTrong hạt lúa mẹ trồng\nCánh đồng chờ gặt hái\nChín vàng màu ước mong.",
        "Ngày hôm qua ở lại\nTrong vở hồng của con\nCon học hành chăm chỉ\nLà ngày qua vẫn còn."
      ],
      "audioNarration": "Ngày hôm qua đâu rồi?. Em cầm tờ lịch cũ\n- Ngày hôm qua đâu rồi?\nRa ngoài sân hỏi nụ\nNụ vừa nở cùng hoa. Em xoa đầu chú chó\n- Ngày hôm qua đâu rồi?\nChú chó vẫy đuôi nhỏ:\n\"Hôm qua ở ngoài đồng.\" Ngày hôm qua ở lại\nTrong hạt lúa mẹ trồng\nCánh đồng chờ gặt hái\nChín vàng màu ước mong. Ngày hôm qua ở lại\nTrong vở hồng của con\nCon học hành chăm chỉ\nLà ngày qua vẫn còn.",
      "vocabularyNotes": [
        {
          "word": "Ước mong",
          "meaning": "Mong muốn tha thiết đạt được điều tốt đẹp."
        },
        {
          "word": "Chăm chỉ",
          "meaning": "Siêng năng, chịu khó học tập đều đặn."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 14, 15 — Ngày hôm qua đâu rồi?",
    "pedagogicalObjective": "Đọc diễn cảm, mở rộng vốn từ, phát triển phẩm chất nhân ái và tự tin cho học sinh lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b2-q1",
        "type": "bubble_choice",
        "questionText": "Theo bài thơ, ngày hôm qua ở lại những nơi nào?",
        "audioText": "Theo bài thơ, ngày hôm qua ở lại những nơi nào?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Trong hạt lúa mẹ trồng và trong vở hồng của con 🌾",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Trong cặp sách",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Trong tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b3": {
    "passage": {
      "title": "Niềm vui của Bi và Bống",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Khi cơn mưa rào vừa tạnh, một chiếc cầu vồng rực rỡ hiện ra trên nền trời xanh thẳm.",
        "Bi chỉ tay lên cầu vồng và bảo: \"Em nghe nói dưới chân cầu vồng có một hũ vàng đấy!\". Bống reo lên: \"Thật sao anh? Nếu tìm được hũ vàng, em sẽ mua tặng anh một chiếc ô tô đồ chơi thật đẹp!\".",
        "Bi mỉm cười xoa đầu em gái: \"Còn anh sẽ mua một cô búp bê biết hát để tặng em!\". Hai anh em cùng cười vang trong niềm hạnh phúc ngập tràn."
      ],
      "audioNarration": "Niềm vui của Bi và Bống. Khi cơn mưa rào vừa tạnh, một chiếc cầu vồng rực rỡ hiện ra trên nền trời xanh thẳm. Bi chỉ tay lên cầu vồng và bảo: \"Em nghe nói dưới chân cầu vồng có một hũ vàng đấy!\". Bống reo lên: \"Thật sao anh? Nếu tìm được hũ vàng, em sẽ mua tặng anh một chiếc ô tô đồ chơi thật đẹp!\". Bi mỉm cười xoa đầu em gái: \"Còn anh sẽ mua một cô búp bê biết hát để tặng em!\". Hai anh em cùng cười vang trong niềm hạnh phúc ngập tràn.",
      "vocabularyNotes": [
        {
          "word": "Cầu vồng",
          "meaning": "Vòng cung 7 màu rực rỡ hiện ra trên bầu trời sau mưa."
        },
        {
          "word": "Ngập tràn",
          "meaning": "Tràn đầy, bao phủ khắp không gian."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 18, 19 — Niềm vui của Bi và Bống",
    "pedagogicalObjective": "Đọc diễn cảm, mở rộng vốn từ, phát triển phẩm chất nhân ái và tự tin cho học sinh lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b3-q1",
        "type": "bubble_choice",
        "questionText": "Hai anh em ước mơ làm gì cho nhau nếu tìm thấy hũ vàng?",
        "audioText": "Hai anh em ước mơ làm gì cho nhau nếu tìm thấy hũ vàng?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bi mua búp bê cho Bống, Bống mua ô tô cho Bi 🎁",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Mua kẹo ăn một mình",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Giấu đi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b4": {
    "passage": {
      "title": "Làm việc thật là vui",
      "author": "Tô Hoài",
      "genre": "prose",
      "content": [
        "Quanh ta, mọi vật, mọi người đều bận rộn làm việc.",
        "Cái đồng hồ tích tắc, tích tắc báo phút, báo giờ. Con gà trống gáy vang: \"Ò... ó... o...\" đánh thức mọi người thức dậy đón bình minh.",
        "Con chim cặm cụi bắt sâu bảo vệ mùa màng. Cành đào nở hoa cho sắc xuân thêm rực rỡ.",
        "Bé cũng bận rộn như thế. Bé học bài, làm việc nhà, chơi đùa cùng các bạn. Bận rộn nhưng bé lúc nào cũng rạng rỡ và vui vẻ."
      ],
      "audioNarration": "Làm việc thật là vui. Quanh ta, mọi vật, mọi người đều bận rộn làm việc. Cái đồng hồ tích tắc, tích tắc báo phút, báo giờ. Con gà trống gáy vang: \"Ò... ó... o...\" đánh thức mọi người thức dậy đón bình minh. Con chim cặm cụi bắt sâu bảo vệ mùa màng. Cành đào nở hoa cho sắc xuân thêm rực rỡ. Bé cũng bận rộn như thế. Bé học bài, làm việc nhà, chơi đùa cùng các bạn. Bận rộn nhưng bé lúc nào cũng rạng rỡ và vui vẻ.",
      "vocabularyNotes": [
        {
          "word": "Tích tắc",
          "meaning": "Âm thanh đều đặn của kim đồng hồ chạy."
        },
        {
          "word": "Cặm cụi",
          "meaning": "Miệt mài, chăm chú làm việc không nghỉ."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 22, 23 — Làm việc thật là vui",
    "pedagogicalObjective": "Đọc diễn cảm, mở rộng vốn từ, phát triển phẩm chất nhân ái và tự tin cho học sinh lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b4-q1",
        "type": "bubble_choice",
        "questionText": "Bài văn của nhà văn Tô Hoài nhắn nhủ điều gì?",
        "audioText": "Bài văn của nhà văn Tô Hoài nhắn nhủ điều gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Lao động và học tập chăm chỉ luôn mang lại niềm vui rạng rỡ 🐝",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nên lười biếng",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không cần học",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b5": {
    "passage": {
      "title": "Em có xinh không?",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Voi con rất thích làm đẹp. Chú thường hỏi mọi người xung quanh: \"Bác thấy em có xinh không?\".",
        "Gặp Hươu, Hươu bảo: \"Nếu có thêm cặp sừng cong vút thì cậu mới thật là xinh!\". Voi con bèn cài hai cành cây khô lên đầu.",
        "Gặp Vượn, Vượn bảo: \"Nếu có thêm chòm râu dài thì cậu mới oai phong!\". Voi con lại gắn thêm chòm râu bằng rễ cây.",
        "Về nhà, Voi bố mẹ bật cười và dịu dàng nói: \"Con trai của bố mẹ đẹp nhất khi con là chính mình!\". Voi con hiểu ra, vui vẻ bỏ sừng và râu giả, tự tin khoe vẻ đáng yêu vốn có."
      ],
      "audioNarration": "Em có xinh không?. Voi con rất thích làm đẹp. Chú thường hỏi mọi người xung quanh: \"Bác thấy em có xinh không?\". Gặp Hươu, Hươu bảo: \"Nếu có thêm cặp sừng cong vút thì cậu mới thật là xinh!\". Voi con bèn cài hai cành cây khô lên đầu. Gặp Vượn, Vượn bảo: \"Nếu có thêm chòm râu dài thì cậu mới oai phong!\". Voi con lại gắn thêm chòm râu bằng rễ cây. Về nhà, Voi bố mẹ bật cười và dịu dàng nói: \"Con trai của bố mẹ đẹp nhất khi con là chính mình!\". Voi con hiểu ra, vui vẻ bỏ sừng và râu giả, tự tin khoe vẻ đáng yêu vốn có.",
      "vocabularyNotes": [
        {
          "word": "Cong vút",
          "meaning": "Uốn cong mềm mại vươn lên cao."
        },
        {
          "word": "Oai phong",
          "meaning": "Dáng vẻ mạnh mẽ, uy nghiêm đường bệ."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 26, 27 — Em có xinh không?",
    "pedagogicalObjective": "Đọc diễn cảm, mở rộng vốn từ, phát triển phẩm chất nhân ái và tự tin cho học sinh lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b5-q1",
        "type": "bubble_choice",
        "questionText": "Lời khuyên của bố mẹ voi giúp voi con nhận ra điều gì?",
        "audioText": "Lời khuyên của bố mẹ voi giúp voi con nhận ra điều gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tự tin là chính mình là vẻ đẹp tuyệt vời nhất 🐘",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Gắn thêm nhiều sừng giả",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không đi ra ngoài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b6": {
    "passage": {
      "title": "Một giờ học",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Hôm nay trong giờ tập đọc, thầy giáo yêu cầu cả lớp đứng lên tự tin giới thiệu về một người bạn mà mình quý mến.",
        "Quang vốn là một cậu bé rụt rè, hay bẽn lẽn trước đám đông. Khi thầy gọi tên, mặt Quang đỏ ửng, chân tay lúng túng.",
        "Thầy giáo mỉm cười khích lệ: \"Hãy thở một hơi thật sâu và bắt đầu đi nào!\". Các bạn xung quanh cũng đồng thanh vỗ tay cổ vũ.",
        "Quang lấy lại bình tĩnh, cất cao giọng tự tin kể về người bạn thân ngồi cùng bàn. Cả lớp vang lên tràng pháo tay ròn rã khen ngợi sự dũng cảm của Quang."
      ],
      "audioNarration": "Một giờ học. Hôm nay trong giờ tập đọc, thầy giáo yêu cầu cả lớp đứng lên tự tin giới thiệu về một người bạn mà mình quý mến. Quang vốn là một cậu bé rụt rè, hay bẽn lẽn trước đám đông. Khi thầy gọi tên, mặt Quang đỏ ửng, chân tay lúng túng. Thầy giáo mỉm cười khích lệ: \"Hãy thở một hơi thật sâu và bắt đầu đi nào!\". Các bạn xung quanh cũng đồng thanh vỗ tay cổ vũ. Quang lấy lại bình tĩnh, cất cao giọng tự tin kể về người bạn thân ngồi cùng bàn. Cả lớp vang lên tràng pháo tay ròn rã khen ngợi sự dũng cảm của Quang.",
      "vocabularyNotes": [
        {
          "word": "Rụt rè",
          "meaning": "Nhút nhát, e sợ khi đứng trước đám đông."
        },
        {
          "word": "Khích lệ",
          "meaning": "Động viên, cổ vũ tinh thần giúp bạn tự tin."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 30, 31 — Một giờ học",
    "pedagogicalObjective": "Đọc diễn cảm, mở rộng vốn từ, phát triển phẩm chất nhân ái và tự tin cho học sinh lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b6-q1",
        "type": "bubble_choice",
        "questionText": "Nhờ đâu bạn Quang vượt qua nỗi sợ hãi để phát biểu?",
        "audioText": "Nhờ đâu bạn Quang vượt qua nỗi sợ hãi để phát biểu?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Nhờ thầy giáo khích lệ và bạn bè vỗ tay cổ vũ 👏",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nhờ chạy ra ngoài",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Nhờ im lặng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b7": {
    "passage": {
      "title": "Cây xấu hổ",
      "author": "Trần Hoài Dương",
      "genre": "prose",
      "content": [
        "Bên bờ suối nhỏ, có một khóm cây trinh nữ xanh tươi, người ta thường gọi là cây xấu hổ.",
        "Mỗi khi có cơn gió thoảng qua làm chiếc lá khẽ chạm nhẹ vào cành, những chiếc lá nhỏ xinh lập tức e ấp cụp tròn lại.",
        "Chú chim sâu bay ngang qua ngạc nhiên hỏi: \"Sao bạn lại khép lá lại thế?\". Cây xấu hổ e thẹn đáp: \"Tôi thẹn thùng trước nắng sớm mai rực rỡ đấy!\".",
        "Khi màn đêm buông xuống, cây lại từ từ mở rộng những tán lá mỏng manh đón sương đêm trong lành."
      ],
      "audioNarration": "Cây xấu hổ. Bên bờ suối nhỏ, có một khóm cây trinh nữ xanh tươi, người ta thường gọi là cây xấu hổ. Mỗi khi có cơn gió thoảng qua làm chiếc lá khẽ chạm nhẹ vào cành, những chiếc lá nhỏ xinh lập tức e ấp cụp tròn lại. Chú chim sâu bay ngang qua ngạc nhiên hỏi: \"Sao bạn lại khép lá lại thế?\". Cây xấu hổ e thẹn đáp: \"Tôi thẹn thùng trước nắng sớm mai rực rỡ đấy!\". Khi màn đêm buông xuống, cây lại từ từ mở rộng những tán lá mỏng manh đón sương đêm trong lành.",
      "vocabularyNotes": [
        {
          "word": "E ấp",
          "meaning": "Khép nép, e thẹn kín đáo và duyên dáng."
        },
        {
          "word": "Mỏng manh",
          "meaning": "Nhẹ nhàng và mềm mại trước làn gió."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 34, 35 — Cây xấu hổ",
    "pedagogicalObjective": "Đọc diễn cảm, mở rộng vốn từ, phát triển phẩm chất nhân ái và tự tin cho học sinh lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b7-q1",
        "type": "bubble_choice",
        "questionText": "Đặc điểm tự nhiên độc đáo của cây xấu hổ là gì?",
        "audioText": "Đặc điểm tự nhiên độc đáo của cây xấu hổ là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tự động khép lá lại khi có vật chạm vào 🌿",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nở hoa khổng lồ",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Biết bơi lội",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b8": {
    "passage": {
      "title": "Cầu thủ dự bị",
      "author": "Minh Chính",
      "genre": "prose",
      "content": [
        "Dũng rất mê bóng đá. Chiều nào chú cũng cùng các bạn ra sân cỏ của làng để chia đội thi đấu.",
        "Vì còn nhỏ và chạy chậm hơn các anh lớn, Dũng được phân công làm cầu thủ dự bị đứng ngoài đường biên cổ vũ.",
        "Không hề nản lòng, Dũng chăm chú theo dõi từng đường chuyền và tích cực nhặt bóng giúp các bạn.",
        "Đến hiệp hai, khi một cầu thủ chính bị mỏi chân, Dũng được thầy cho vào sân thay thế. Với sự nhanh nhẹn và khéo léo, Dũng đã đón bóng chính xác và sút tung lưới đối phương, mang về chiến thắng giòn giã cho toàn đội!"
      ],
      "audioNarration": "Cầu thủ dự bị. Dũng rất mê bóng đá. Chiều nào chú cũng cùng các bạn ra sân cỏ của làng để chia đội thi đấu. Vì còn nhỏ và chạy chậm hơn các anh lớn, Dũng được phân công làm cầu thủ dự bị đứng ngoài đường biên cổ vũ. Không hề nản lòng, Dũng chăm chú theo dõi từng đường chuyền và tích cực nhặt bóng giúp các bạn. Đến hiệp hai, khi một cầu thủ chính bị mỏi chân, Dũng được thầy cho vào sân thay thế. Với sự nhanh nhẹn và khéo léo, Dũng đã đón bóng chính xác và sút tung lưới đối phương, mang về chiến thắng giòn giã cho toàn đội!",
      "vocabularyNotes": [
        {
          "word": "Cầu thủ dự bị",
          "meaning": "Cầu thủ sẵn sàng vào sân thay thế khi đồng đội cần nghỉ ngơi."
        },
        {
          "word": "Nhanh nhẹn",
          "meaning": "Linh hoạt, xử lý tình huống chính xác và mau lẹ."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 38, 39 — Cầu thủ dự bị",
    "pedagogicalObjective": "Đọc diễn cảm, mở rộng vốn từ, phát triển phẩm chất nhân ái và tự tin cho học sinh lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b8-q1",
        "type": "bubble_choice",
        "questionText": "Bài học về tinh thần thể thao của bạn Dũng là gì?",
        "audioText": "Bài học về tinh thần thể thao của bạn Dũng là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Kiên trì luyện tập, không nản lòng và chớp thời cơ tỏa sáng ⚽",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Hờn dỗi bỏ về",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Tranh bóng của bạn",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b9": {
    "passage": {
      "title": "Cô giáo lớp em",
      "author": "Nguyễn Xuân Sanh",
      "genre": "poem",
      "content": [
        "Sáng nào em đến lớp\nCũng thấy cô đến rồi\nĐáp lời \"Chào cô ạ!\"\nCô mỉm cười thật tươi.",
        "Cô dạy em tập viết\nGió đưa thoảng hương nhài\nNắng ghé vào cửa lớp\nXem chúng em học bài.",
        "Những lời cô giáo giảng\nẤm áp tựa lời ru\nCho em thêm hiểu biết\nNâng bước em từng giờ."
      ],
      "audioNarration": "Cô giáo lớp em. Sáng nào em đến lớp\nCũng thấy cô đến rồi\nĐáp lời \"Chào cô ạ!\"\nCô mỉm cười thật tươi. Cô dạy em tập viết\nGió đưa thoảng hương nhài\nNắng ghé vào cửa lớp\nXem chúng em học bài. Những lời cô giáo giảng\nẤm áp tựa lời ru\nCho em thêm hiểu biết\nNâng bước em từng giờ.",
      "vocabularyNotes": [
        {
          "word": "Thoảng",
          "meaning": "Hương thơm nhẹ nhàng bay trong gió."
        },
        {
          "word": "Ấm áp",
          "meaning": "Gần gũi, chan chứa tình yêu thương."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 42, 43 — Cô giáo lớp em",
    "pedagogicalObjective": "Đọc diễn cảm, mở rộng vốn từ, phát triển phẩm chất nhân ái và tự tin cho học sinh lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b9-q1",
        "type": "bubble_choice",
        "questionText": "Hình ảnh cô giáo trong bài thơ hiện lên như thế nào?",
        "audioText": "Hình ảnh cô giáo trong bài thơ hiện lên như thế nào?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Ân cần, dịu dàng dạy dỗ học trò với nụ cười rạng rỡ 👩‍🏫",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nghiêm khắc không cười",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Vắng mặt",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b10": {
    "passage": {
      "title": "Thời khóa biểu",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Thời khóa biểu là người bạn đồng hành quen thuộc của mỗi học sinh khi cắp sách tới trường.",
        "Bảng thời khóa biểu được chia thành các cột thứ trong tuần và các hàng tiết học một cách rõ ràng, khoa học.",
        "Nhờ có thời khóa biểu, em luôn biết trước ngày mai có những môn học nào để chuẩn bị đầy đủ sách vở và đồ dùng học tập ngay ngắn vào buổi tối.",
        "Một bạn nhỏ biết theo dõi thời khóa biểu hàng ngày là một bạn nhỏ tự lập, có thói quen ngăn nắp và yêu thích việc học."
      ],
      "audioNarration": "Thời khóa biểu. Thời khóa biểu là người bạn đồng hành quen thuộc của mỗi học sinh khi cắp sách tới trường. Bảng thời khóa biểu được chia thành các cột thứ trong tuần và các hàng tiết học một cách rõ ràng, khoa học. Nhờ có thời khóa biểu, em luôn biết trước ngày mai có những môn học nào để chuẩn bị đầy đủ sách vở và đồ dùng học tập ngay ngắn vào buổi tối. Một bạn nhỏ biết theo dõi thời khóa biểu hàng ngày là một bạn nhỏ tự lập, có thói quen ngăn nắp và yêu thích việc học.",
      "vocabularyNotes": [
        {
          "word": "Ngăn nắp",
          "meaning": "Gọn gàng, đâu ra đấy, có trật tự rõ ràng."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 46, 47 — Thời khóa biểu",
    "pedagogicalObjective": "Đọc diễn cảm, mở rộng vốn từ, phát triển phẩm chất nhân ái và tự tin cho học sinh lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b10-q1",
        "type": "bubble_choice",
        "questionText": "Thời khóa biểu giúp ích gì cho học sinh?",
        "audioText": "Thời khóa biểu giúp ích gì cho học sinh?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Chuẩn bị sách vở đúng môn và rèn luyện thói quen tự lập 📅",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Trang trí phòng",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Vẽ tranh lên",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b18": {
    "passage": {
      "title": "Nhím nâu kết bạn",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Trong khu rừng thông xanh ngát có một chú Nhím nâu nhút nhát sống một mình trong hốc cây cổ thụ.",
        "Mỗi ngày, Nhím nâu lủi thủi đi kiếm quả thông và hạt dẻ, chẳng dám giao tiếp cùng ai vì sợ bộ lông gai của mình làm đau người khác.",
        "Một buổi chiều mùa đông gió lạnh thổi ào ào, Nhím trắng tình cờ đi ngang qua hốc cây của Nhím nâu và cất tiếng chào ấm áp: \"Chào bạn Nhím nâu! Trời lạnh quá, chúng mình cùng vào hang sưởi ấm nhé!\".",
        "Nhím nâu xúc động mở cửa đón bạn. Hai chú nhím cùng nhau nướng hạt dẻ thơm lừng và chia sẻ những câu chuyện vui bên bếp lửa. Từ hôm đó, Nhím nâu không còn cô đơn nữa, chú đã hiểu rằng mở lòng và sẻ chia sẽ mang lại tình bạn diệu kỳ."
      ],
      "audioNarration": "Nhím nâu kết bạn. Trong khu rừng thông xanh ngát có một chú Nhím nâu nhút nhát sống một mình trong hốc cây cổ thụ. Mỗi ngày, Nhím nâu lủi thủi đi kiếm quả thông và hạt dẻ, chẳng dám giao tiếp cùng ai vì sợ bộ lông gai của mình làm đau người khác. Một buổi chiều mùa đông gió lạnh thổi ào ào, Nhím trắng tình cờ đi ngang qua hốc cây của Nhím nâu và cất tiếng chào ấm áp: \"Chào bạn Nhím nâu! Trời lạnh quá, chúng mình cùng vào hang sưởi ấm nhé!\". Nhím nâu xúc động mở cửa đón bạn. Hai chú nhím cùng nhau nướng hạt dẻ thơm lừng và chia sẻ những câu chuyện vui bên bếp lửa. Từ hôm đó, Nhím nâu không còn cô đơn nữa, chú đã hiểu rằng mở lòng và sẻ chia sẽ mang lại tình bạn diệu kỳ.",
      "vocabularyNotes": [
        {
          "word": "Nhút nhát",
          "meaning": "Rụt rè, thiếu tự tin khi giao tiếp."
        },
        {
          "word": "Lủi thủi",
          "meaning": "Một mình cô đơn, lặng lẽ."
        },
        {
          "word": "Ấm áp",
          "meaning": "Mang lại sự an tâm, chở che và sẻ chia."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 80, 81 — Nhím nâu kết bạn",
    "pedagogicalObjective": "Đọc diễn cảm, mở rộng vốn từ, phát triển phẩm chất nhân ái và tự tin cho học sinh lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b18-q1",
        "type": "bubble_choice",
        "questionText": "Nhờ điều gì mà Nhím nâu đã có thêm một người bạn thân thiết?",
        "audioText": "Nhờ điều gì mà Nhím nâu đã có thêm một người bạn thân thiết?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Nhờ sự thân thiện của Nhím trắng và sự mở lòng của Nhím nâu 🦔",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Chuyển đi nơi khác",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Ngủ suốt mùa đông",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b11": {
    "passage": {
      "title": "Cái bàn học của em",
      "author": "SGK Tiếng Việt 2 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Chiếc bàn học bằng gỗ xoan đào được bố đóng cho em nhân ngày tựu trường. Mặt bàn phẳng phiu, xếp ngay ngắn góc để sách vở và chiếc đèn bàn màu xanh ngọc bích.",
        "Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô."
      ],
      "audioNarration": "Cái bàn học của em. Chiếc bàn học bằng gỗ xoan đào được bố đóng cho em nhân ngày tựu trường. Mặt bàn phẳng phiu, xếp ngay ngắn góc để sách vở và chiếc đèn bàn màu xanh ngọc bích. Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô.",
      "vocabularyNotes": [
        {
          "word": "Ý nghĩa",
          "meaning": "Giá trị tốt đẹp được gửi gắm trong tác phẩm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 50, 51 — Cái bàn học của em",
    "pedagogicalObjective": "Phát triển kỹ năng đọc hiểu và phẩm chất nhân văn cho học sinh Lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b11-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung chính của bài đọc \"Cái bàn học của em\" là gì?",
        "audioText": "Nội dung chính của bài đọc \"Cái bàn học của em\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng tình yêu cuộc sống và kiến thức bổ ích từ Cái bàn học của em ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b12": {
    "passage": {
      "title": "Danh sách học sinh tổ 1",
      "author": "SGK Tiếng Việt 2 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Bảng danh sách tổ 1 ghi đầy đủ họ tên, ngày sinh và sở thích của từng thành viên, giúp các bạn thấu hiểu và gắn bó đoàn kết bên nhau.",
        "Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô."
      ],
      "audioNarration": "Danh sách học sinh tổ 1. Bảng danh sách tổ 1 ghi đầy đủ họ tên, ngày sinh và sở thích của từng thành viên, giúp các bạn thấu hiểu và gắn bó đoàn kết bên nhau. Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô.",
      "vocabularyNotes": [
        {
          "word": "Ý nghĩa",
          "meaning": "Giá trị tốt đẹp được gửi gắm trong tác phẩm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 54, 55 — Danh sách học sinh tổ 1",
    "pedagogicalObjective": "Phát triển kỹ năng đọc hiểu và phẩm chất nhân văn cho học sinh Lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b12-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung chính của bài đọc \"Danh sách học sinh tổ 1\" là gì?",
        "audioText": "Nội dung chính của bài đọc \"Danh sách học sinh tổ 1\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng tình yêu cuộc sống và kiến thức bổ ích từ Danh sách học sinh tổ 1 ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b13": {
    "passage": {
      "title": "Yêu lắm trường ơi!",
      "author": "SGK Tiếng Việt 2 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Mái trường ngói đỏ tươi ẩn hiện dưới hàng phượng vĩ. Nơi đây em có thầy cô tận tụy và bao bạn bè thân thương cùng sẻ chia ước mơ tuổi thơ.",
        "Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô."
      ],
      "audioNarration": "Yêu lắm trường ơi!. Mái trường ngói đỏ tươi ẩn hiện dưới hàng phượng vĩ. Nơi đây em có thầy cô tận tụy và bao bạn bè thân thương cùng sẻ chia ước mơ tuổi thơ. Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô.",
      "vocabularyNotes": [
        {
          "word": "Ý nghĩa",
          "meaning": "Giá trị tốt đẹp được gửi gắm trong tác phẩm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 58, 59 — Yêu lắm trường ơi!",
    "pedagogicalObjective": "Phát triển kỹ năng đọc hiểu và phẩm chất nhân văn cho học sinh Lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b13-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung chính của bài đọc \"Yêu lắm trường ơi!\" là gì?",
        "audioText": "Nội dung chính của bài đọc \"Yêu lắm trường ơi!\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng tình yêu cuộc sống và kiến thức bổ ích từ Yêu lắm trường ơi! ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b14": {
    "passage": {
      "title": "Em học vẽ",
      "author": "SGK Tiếng Việt 2 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Với hộp bút màu sáp rực rỡ, em vẽ nên bức tranh làng quê thanh bình có dòng sông xanh uốn lượn, cánh đồng lúa chín và đàn cò bay lả bay la.",
        "Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô."
      ],
      "audioNarration": "Em học vẽ. Với hộp bút màu sáp rực rỡ, em vẽ nên bức tranh làng quê thanh bình có dòng sông xanh uốn lượn, cánh đồng lúa chín và đàn cò bay lả bay la. Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô.",
      "vocabularyNotes": [
        {
          "word": "Ý nghĩa",
          "meaning": "Giá trị tốt đẹp được gửi gắm trong tác phẩm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 62, 63 — Em học vẽ",
    "pedagogicalObjective": "Phát triển kỹ năng đọc hiểu và phẩm chất nhân văn cho học sinh Lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b14-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung chính của bài đọc \"Em học vẽ\" là gì?",
        "audioText": "Nội dung chính của bài đọc \"Em học vẽ\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng tình yêu cuộc sống và kiến thức bổ ích từ Em học vẽ ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b15": {
    "passage": {
      "title": "Cuốn sách của em",
      "author": "SGK Tiếng Việt 2 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Mỗi cuốn sách mở ra một kho tàng tri thức vô tận. Lật từng trang sách thơm mùi giấy mới, em như được chu du khắp thế giới kỳ thú.",
        "Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô."
      ],
      "audioNarration": "Cuốn sách của em. Mỗi cuốn sách mở ra một kho tàng tri thức vô tận. Lật từng trang sách thơm mùi giấy mới, em như được chu du khắp thế giới kỳ thú. Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô.",
      "vocabularyNotes": [
        {
          "word": "Ý nghĩa",
          "meaning": "Giá trị tốt đẹp được gửi gắm trong tác phẩm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 66, 67 — Cuốn sách của em",
    "pedagogicalObjective": "Phát triển kỹ năng đọc hiểu và phẩm chất nhân văn cho học sinh Lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b15-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung chính của bài đọc \"Cuốn sách của em\" là gì?",
        "audioText": "Nội dung chính của bài đọc \"Cuốn sách của em\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng tình yêu cuộc sống và kiến thức bổ ích từ Cuốn sách của em ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b16": {
    "passage": {
      "title": "Khi trang sách mở ra",
      "author": "SGK Tiếng Việt 2 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Khi trang sách mở ra, chân trời xa bỗng xích lại gần. Em được trò chuyện cùng muôn loài và thắp sáng những ước mơ bay cao.",
        "Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô."
      ],
      "audioNarration": "Khi trang sách mở ra. Khi trang sách mở ra, chân trời xa bỗng xích lại gần. Em được trò chuyện cùng muôn loài và thắp sáng những ước mơ bay cao. Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô.",
      "vocabularyNotes": [
        {
          "word": "Ý nghĩa",
          "meaning": "Giá trị tốt đẹp được gửi gắm trong tác phẩm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 70, 71 — Khi trang sách mở ra",
    "pedagogicalObjective": "Phát triển kỹ năng đọc hiểu và phẩm chất nhân văn cho học sinh Lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b16-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung chính của bài đọc \"Khi trang sách mở ra\" là gì?",
        "audioText": "Nội dung chính của bài đọc \"Khi trang sách mở ra\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng tình yêu cuộc sống và kiến thức bổ ích từ Khi trang sách mở ra ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b17": {
    "passage": {
      "title": "Gọi bạn",
      "author": "SGK Tiếng Việt 2 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Bê Vàng và Dê Trắng sống bên nhau trong rừng xanh thẳm. Khi hạn hán tràn về, Bê Vàng đi tìm cỏ rồi lạc lối, Dê Trắng thương bạn gọi mãi không thôi.",
        "Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô."
      ],
      "audioNarration": "Gọi bạn. Bê Vàng và Dê Trắng sống bên nhau trong rừng xanh thẳm. Khi hạn hán tràn về, Bê Vàng đi tìm cỏ rồi lạc lối, Dê Trắng thương bạn gọi mãi không thôi. Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô.",
      "vocabularyNotes": [
        {
          "word": "Ý nghĩa",
          "meaning": "Giá trị tốt đẹp được gửi gắm trong tác phẩm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 74, 75 — Gọi bạn",
    "pedagogicalObjective": "Phát triển kỹ năng đọc hiểu và phẩm chất nhân văn cho học sinh Lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b17-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung chính của bài đọc \"Gọi bạn\" là gì?",
        "audioText": "Nội dung chính của bài đọc \"Gọi bạn\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng tình yêu cuộc sống và kiến thức bổ ích từ Gọi bạn ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b19": {
    "passage": {
      "title": "Chuyện bốn mùa",
      "author": "SGK Tiếng Việt 2 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Bốn nàng tiên Xuân, Hạ, Thu, Đông hội ngộ đêm giao thừa, cùng nhau dệt nên bức tranh thiên nhiên rực rỡ sắc màu cho vạn vật tốt tươi.",
        "Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô."
      ],
      "audioNarration": "Chuyện bốn mùa. Bốn nàng tiên Xuân, Hạ, Thu, Đông hội ngộ đêm giao thừa, cùng nhau dệt nên bức tranh thiên nhiên rực rỡ sắc màu cho vạn vật tốt tươi. Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô.",
      "vocabularyNotes": [
        {
          "word": "Ý nghĩa",
          "meaning": "Giá trị tốt đẹp được gửi gắm trong tác phẩm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 10, 11 — Chuyện bốn mùa",
    "pedagogicalObjective": "Phát triển kỹ năng đọc hiểu và phẩm chất nhân văn cho học sinh Lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b19-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung chính của bài đọc \"Chuyện bốn mùa\" là gì?",
        "audioText": "Nội dung chính của bài đọc \"Chuyện bốn mùa\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng tình yêu cuộc sống và kiến thức bổ ích từ Chuyện bốn mùa ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b20": {
    "passage": {
      "title": "Mùa xuân đến rồi",
      "author": "SGK Tiếng Việt 2 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Hoa đào hoa mai nở rộ đón gió xuân ấm áp. Những chồi non mơn mởn thức giấc sau giấc ngủ đông dài, căng tràn nhựa sống.",
        "Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô."
      ],
      "audioNarration": "Mùa xuân đến rồi. Hoa đào hoa mai nở rộ đón gió xuân ấm áp. Những chồi non mơn mởn thức giấc sau giấc ngủ đông dài, căng tràn nhựa sống. Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô.",
      "vocabularyNotes": [
        {
          "word": "Ý nghĩa",
          "meaning": "Giá trị tốt đẹp được gửi gắm trong tác phẩm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 14, 15 — Mùa xuân đến rồi",
    "pedagogicalObjective": "Phát triển kỹ năng đọc hiểu và phẩm chất nhân văn cho học sinh Lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b20-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung chính của bài đọc \"Mùa xuân đến rồi\" là gì?",
        "audioText": "Nội dung chính của bài đọc \"Mùa xuân đến rồi\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng tình yêu cuộc sống và kiến thức bổ ích từ Mùa xuân đến rồi ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b21": {
    "passage": {
      "title": "Mưa mùa hạ",
      "author": "SGK Tiếng Việt 2 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Cơn mưa rào mùa hạ xua tan cái nóng bức oi ả. Cây cối trong vườn reo vui, đường làng ngõ xóm sạch bóng như vừa được gột rửa.",
        "Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô."
      ],
      "audioNarration": "Mưa mùa hạ. Cơn mưa rào mùa hạ xua tan cái nóng bức oi ả. Cây cối trong vườn reo vui, đường làng ngõ xóm sạch bóng như vừa được gột rửa. Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô.",
      "vocabularyNotes": [
        {
          "word": "Ý nghĩa",
          "meaning": "Giá trị tốt đẹp được gửi gắm trong tác phẩm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 18, 19 — Mưa mùa hạ",
    "pedagogicalObjective": "Phát triển kỹ năng đọc hiểu và phẩm chất nhân văn cho học sinh Lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b21-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung chính của bài đọc \"Mưa mùa hạ\" là gì?",
        "audioText": "Nội dung chính của bài đọc \"Mưa mùa hạ\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng tình yêu cuộc sống và kiến thức bổ ích từ Mưa mùa hạ ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b22": {
    "passage": {
      "title": "Chim rừng Tây Nguyên",
      "author": "SGK Tiếng Việt 2 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Đại ngàn Tây Nguyên rộn rã muôn khúc ca của loài chim. Tiếng hót véo von hòa cùng tiếng suối ngàn vang vọng muôn nơi.",
        "Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô."
      ],
      "audioNarration": "Chim rừng Tây Nguyên. Đại ngàn Tây Nguyên rộn rã muôn khúc ca của loài chim. Tiếng hót véo von hòa cùng tiếng suối ngàn vang vọng muôn nơi. Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô.",
      "vocabularyNotes": [
        {
          "word": "Ý nghĩa",
          "meaning": "Giá trị tốt đẹp được gửi gắm trong tác phẩm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 22, 23 — Chim rừng Tây Nguyên",
    "pedagogicalObjective": "Phát triển kỹ năng đọc hiểu và phẩm chất nhân văn cho học sinh Lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b22-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung chính của bài đọc \"Chim rừng Tây Nguyên\" là gì?",
        "audioText": "Nội dung chính của bài đọc \"Chim rừng Tây Nguyên\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng tình yêu cuộc sống và kiến thức bổ ích từ Chim rừng Tây Nguyên ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b23": {
    "passage": {
      "title": "Bác sĩ Sói",
      "author": "SGK Tiếng Việt 2 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Sói xám gian manh đóng giả làm bác sĩ để hòng ăn thịt Ngựa non. Nhưng chú Ngựa thông minh đã tung cú đá trời giáng trừng phạt kẻ gian ác.",
        "Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô."
      ],
      "audioNarration": "Bác sĩ Sói. Sói xám gian manh đóng giả làm bác sĩ để hòng ăn thịt Ngựa non. Nhưng chú Ngựa thông minh đã tung cú đá trời giáng trừng phạt kẻ gian ác. Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô.",
      "vocabularyNotes": [
        {
          "word": "Ý nghĩa",
          "meaning": "Giá trị tốt đẹp được gửi gắm trong tác phẩm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 26, 27 — Bác sĩ Sói",
    "pedagogicalObjective": "Phát triển kỹ năng đọc hiểu và phẩm chất nhân văn cho học sinh Lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b23-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung chính của bài đọc \"Bác sĩ Sói\" là gì?",
        "audioText": "Nội dung chính của bài đọc \"Bác sĩ Sói\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng tình yêu cuộc sống và kiến thức bổ ích từ Bác sĩ Sói ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b24": {
    "passage": {
      "title": "Tôm Càng và Cá Con",
      "author": "SGK Tiếng Việt 2 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Tôm Càng dũng cảm búng chiếc đuôi chắc khỏe, kịp thời đẩy bạn Cá Con tránh khỏi cú đớp của con cá dữ độc ác dưới đáy sông.",
        "Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô."
      ],
      "audioNarration": "Tôm Càng và Cá Con. Tôm Càng dũng cảm búng chiếc đuôi chắc khỏe, kịp thời đẩy bạn Cá Con tránh khỏi cú đớp của con cá dữ độc ác dưới đáy sông. Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô.",
      "vocabularyNotes": [
        {
          "word": "Ý nghĩa",
          "meaning": "Giá trị tốt đẹp được gửi gắm trong tác phẩm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 34, 35 — Tôm Càng và Cá Con",
    "pedagogicalObjective": "Phát triển kỹ năng đọc hiểu và phẩm chất nhân văn cho học sinh Lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b24-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung chính của bài đọc \"Tôm Càng và Cá Con\" là gì?",
        "audioText": "Nội dung chính của bài đọc \"Tôm Càng và Cá Con\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng tình yêu cuộc sống và kiến thức bổ ích từ Tôm Càng và Cá Con ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b25": {
    "passage": {
      "title": "Bác Hồ rèn luyện thân thể",
      "author": "SGK Tiếng Việt 2 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Mỗi buổi sáng, Bác Hồ luôn dậy sớm tập thể dục, chạy bộ và leo núi. Bác dạy thiếu nhi phải luôn rèn luyện thân thể khỏe mạnh để xây dựng đất nước.",
        "Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô."
      ],
      "audioNarration": "Bác Hồ rèn luyện thân thể. Mỗi buổi sáng, Bác Hồ luôn dậy sớm tập thể dục, chạy bộ và leo núi. Bác dạy thiếu nhi phải luôn rèn luyện thân thể khỏe mạnh để xây dựng đất nước. Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô.",
      "vocabularyNotes": [
        {
          "word": "Ý nghĩa",
          "meaning": "Giá trị tốt đẹp được gửi gắm trong tác phẩm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 40, 41 — Bác Hồ rèn luyện thân thể",
    "pedagogicalObjective": "Phát triển kỹ năng đọc hiểu và phẩm chất nhân văn cho học sinh Lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b25-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung chính của bài đọc \"Bác Hồ rèn luyện thân thể\" là gì?",
        "audioText": "Nội dung chính của bài đọc \"Bác Hồ rèn luyện thân thể\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng tình yêu cuộc sống và kiến thức bổ ích từ Bác Hồ rèn luyện thân thể ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b26": {
    "passage": {
      "title": "Ai ngoan sẽ được thưởng",
      "author": "SGK Tiếng Việt 2 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Bác Hồ đến thăm các cháu thiếu nhi nhân dịp Tết Trung thu. Bác khen ngợi bạn nhỏ biết thật thà nhận lỗi và tặng bạn phần kẹo ngọt ngào.",
        "Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô."
      ],
      "audioNarration": "Ai ngoan sẽ được thưởng. Bác Hồ đến thăm các cháu thiếu nhi nhân dịp Tết Trung thu. Bác khen ngợi bạn nhỏ biết thật thà nhận lỗi và tặng bạn phần kẹo ngọt ngào. Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô.",
      "vocabularyNotes": [
        {
          "word": "Ý nghĩa",
          "meaning": "Giá trị tốt đẹp được gửi gắm trong tác phẩm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 48, 49 — Ai ngoan sẽ được thưởng",
    "pedagogicalObjective": "Phát triển kỹ năng đọc hiểu và phẩm chất nhân văn cho học sinh Lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b26-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung chính của bài đọc \"Ai ngoan sẽ được thưởng\" là gì?",
        "audioText": "Nội dung chính của bài đọc \"Ai ngoan sẽ được thưởng\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng tình yêu cuộc sống và kiến thức bổ ích từ Ai ngoan sẽ được thưởng ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b27": {
    "passage": {
      "title": "Cờ đỏ sao vàng",
      "author": "SGK Tiếng Việt 2 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Lá cờ đỏ sao vàng tung bay kiêu hãnh trên bầu trời lộng gió, là biểu tượng thiêng liêng cho độc lập, tự do và niềm tự hào dân tộc.",
        "Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô."
      ],
      "audioNarration": "Cờ đỏ sao vàng. Lá cờ đỏ sao vàng tung bay kiêu hãnh trên bầu trời lộng gió, là biểu tượng thiêng liêng cho độc lập, tự do và niềm tự hào dân tộc. Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô.",
      "vocabularyNotes": [
        {
          "word": "Ý nghĩa",
          "meaning": "Giá trị tốt đẹp được gửi gắm trong tác phẩm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 56, 57 — Cờ đỏ sao vàng",
    "pedagogicalObjective": "Phát triển kỹ năng đọc hiểu và phẩm chất nhân văn cho học sinh Lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b27-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung chính của bài đọc \"Cờ đỏ sao vàng\" là gì?",
        "audioText": "Nội dung chính của bài đọc \"Cờ đỏ sao vàng\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng tình yêu cuộc sống và kiến thức bổ ích từ Cờ đỏ sao vàng ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b28": {
    "passage": {
      "title": "Em yêu biển đảo",
      "author": "SGK Tiếng Việt 2 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Biển đảo Việt Nam giàu đẹp với những bãi cát trắng mịn màng và đoàn thuyền đánh cá trở về trong ánh bình minh rạng rỡ.",
        "Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô."
      ],
      "audioNarration": "Em yêu biển đảo. Biển đảo Việt Nam giàu đẹp với những bãi cát trắng mịn màng và đoàn thuyền đánh cá trở về trong ánh bình minh rạng rỡ. Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô.",
      "vocabularyNotes": [
        {
          "word": "Ý nghĩa",
          "meaning": "Giá trị tốt đẹp được gửi gắm trong tác phẩm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 64, 65 — Em yêu biển đảo",
    "pedagogicalObjective": "Phát triển kỹ năng đọc hiểu và phẩm chất nhân văn cho học sinh Lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b28-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung chính của bài đọc \"Em yêu biển đảo\" là gì?",
        "audioText": "Nội dung chính của bài đọc \"Em yêu biển đảo\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng tình yêu cuộc sống và kiến thức bổ ích từ Em yêu biển đảo ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b29": {
    "passage": {
      "title": "Lượm hạt thóc vàng",
      "author": "SGK Tiếng Việt 2 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Bát cơm dẻo thơm trên bàn ăn là kết tinh từ giọt mồ hôi công sức cần cù của người nông dân một nắng hai sương trên đồng ruộng.",
        "Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô."
      ],
      "audioNarration": "Lượm hạt thóc vàng. Bát cơm dẻo thơm trên bàn ăn là kết tinh từ giọt mồ hôi công sức cần cù của người nông dân một nắng hai sương trên đồng ruộng. Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô.",
      "vocabularyNotes": [
        {
          "word": "Ý nghĩa",
          "meaning": "Giá trị tốt đẹp được gửi gắm trong tác phẩm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 72, 73 — Lượm hạt thóc vàng",
    "pedagogicalObjective": "Phát triển kỹ năng đọc hiểu và phẩm chất nhân văn cho học sinh Lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b29-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung chính của bài đọc \"Lượm hạt thóc vàng\" là gì?",
        "audioText": "Nội dung chính của bài đọc \"Lượm hạt thóc vàng\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng tình yêu cuộc sống và kiến thức bổ ích từ Lượm hạt thóc vàng ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b30": {
    "passage": {
      "title": "Chuyến phiêu lưu của Giọt Nước",
      "author": "SGK Tiếng Việt 2 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Giọt nước nhỏ bay lên trời xanh hóa thành mây trắng bồng bềnh, rồi theo cơn mưa rào trở về tưới mát cho vạn vật xanh tươi.",
        "Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô."
      ],
      "audioNarration": "Chuyến phiêu lưu của Giọt Nước. Giọt nước nhỏ bay lên trời xanh hóa thành mây trắng bồng bềnh, rồi theo cơn mưa rào trở về tưới mát cho vạn vật xanh tươi. Mỗi câu chuyện bồi đắp tâm hồn trong sáng, tình yêu trường lớp và lòng kính yêu cha mẹ, thầy cô.",
      "vocabularyNotes": [
        {
          "word": "Ý nghĩa",
          "meaning": "Giá trị tốt đẹp được gửi gắm trong tác phẩm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 80, 81 — Chuyến phiêu lưu của Giọt Nước",
    "pedagogicalObjective": "Phát triển kỹ năng đọc hiểu và phẩm chất nhân văn cho học sinh Lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b30-q1",
        "type": "bubble_choice",
        "questionText": "Nội dung chính của bài đọc \"Chuyến phiêu lưu của Giọt Nước\" là gì?",
        "audioText": "Nội dung chính của bài đọc \"Chuyến phiêu lưu của Giọt Nước\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng tình yêu cuộc sống và kiến thức bổ ích từ Chuyến phiêu lưu của Giọt Nước ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b1": {
    "passage": {
      "title": "Chiếc nhãn vở đặc biệt",
      "author": "SGK Tiếng Việt 3",
      "genre": "prose",
      "content": [
        "Chiều hôm nay, bé cùng mẹ nắn nót viết từng chiếc nhãn vở mới tinh cho năm học mới. Nhìn chiếc nhãn vở xinh xắn mang tên mình, bé cảm thấy mình đã thực sự trưởng thành và tự tin bước vào lớp 3."
      ],
      "audioNarration": "Chiếc nhãn vở đặc biệt. Chiều hôm nay, bé cùng mẹ nắn nót viết từng chiếc nhãn vở mới tinh cho năm học mới. Nhìn chiếc nhãn vở xinh xắn mang tên mình, bé cảm thấy mình đã thực sự trưởng thành và tự tin bước vào lớp 3.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 10, 11 — Chiếc nhãn vở đặc biệt",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b1-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Chiếc nhãn vở đặc biệt\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Chiếc nhãn vở đặc biệt\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b2": {
    "passage": {
      "title": "Lắng nghe những ước mơ",
      "author": "SGK Tiếng Việt 3",
      "genre": "prose",
      "content": [
        "Mỗi bạn nhỏ trong lớp đều ấp ủ một ước mơ cao đẹp: bạn ước làm bác sĩ chữa bệnh cho muôn người, bạn ước làm phi công lái máy bay lượn trên trời xanh, bạn ước làm cô giáo dạy chữ cho trẻ em vùng cao."
      ],
      "audioNarration": "Lắng nghe những ước mơ. Mỗi bạn nhỏ trong lớp đều ấp ủ một ước mơ cao đẹp: bạn ước làm bác sĩ chữa bệnh cho muôn người, bạn ước làm phi công lái máy bay lượn trên trời xanh, bạn ước làm cô giáo dạy chữ cho trẻ em vùng cao.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 14, 15 — Lắng nghe những ước mơ",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b2-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Lắng nghe những ước mơ\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Lắng nghe những ước mơ\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b3": {
    "passage": {
      "title": "Em vui đến trường",
      "author": "SGK Tiếng Việt 3",
      "genre": "prose",
      "content": [
        "Con đường làng quen thuộc rộn ràng tiếng chân bước và tiếng cười khúc khích của bầy trẻ nhỏ. Mùa thu mang theo gió heo may lành lạnh và bầu trời trong xanh vời vợi."
      ],
      "audioNarration": "Em vui đến trường. Con đường làng quen thuộc rộn ràng tiếng chân bước và tiếng cười khúc khích của bầy trẻ nhỏ. Mùa thu mang theo gió heo may lành lạnh và bầu trời trong xanh vời vợi.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 18, 19 — Em vui đến trường",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b3-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Em vui đến trường\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Em vui đến trường\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b4": {
    "passage": {
      "title": "Cậu học sinh mới",
      "author": "Theo SGK Tiếng Việt 3",
      "genre": "prose",
      "content": [
        "Cậu bé Lu-i Pa-xtơ ngày đầu đến trường còn bỡ ngỡ nhưng đã sớm bộc lộ đức tính chăm chỉ, kiên trì và niềm say mê khoa học bất tận."
      ],
      "audioNarration": "Cậu học sinh mới. Cậu bé Lu-i Pa-xtơ ngày đầu đến trường còn bỡ ngỡ nhưng đã sớm bộc lộ đức tính chăm chỉ, kiên trì và niềm say mê khoa học bất tận.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 22, 23 — Cậu học sinh mới",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b4-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Cậu học sinh mới\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Cậu học sinh mới\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b5": {
    "passage": {
      "title": "Mùa hè lấp lánh",
      "author": "SGK Tiếng Việt 3",
      "genre": "prose",
      "content": [
        "Mùa hè rực rỡ với tiếng ve ngân vang trong vòm lá phượng vĩ đỏ rực. Những buổi chiều lộng gió thả diều trên triền đê là ký ức tuổi thơ không bao giờ phai."
      ],
      "audioNarration": "Mùa hè lấp lánh. Mùa hè rực rỡ với tiếng ve ngân vang trong vòm lá phượng vĩ đỏ rực. Những buổi chiều lộng gió thả diều trên triền đê là ký ức tuổi thơ không bao giờ phai.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 26, 27 — Mùa hè lấp lánh",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b5-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Mùa hè lấp lánh\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Mùa hè lấp lánh\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b6": {
    "passage": {
      "title": "Cánh đồng tuổi thơ",
      "author": "SGK Tiếng Việt 3",
      "genre": "prose",
      "content": [
        "Cánh đồng lúa chín trải rộng như một tấm thảm nhung vàng óng ả. Mùi thơm của rơm rạ mới gặt quyện trong gió chiều mang lại cảm giác bình yên đến lạ kỳ."
      ],
      "audioNarration": "Cánh đồng tuổi thơ. Cánh đồng lúa chín trải rộng như một tấm thảm nhung vàng óng ả. Mùi thơm của rơm rạ mới gặt quyện trong gió chiều mang lại cảm giác bình yên đến lạ kỳ.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 30, 31 — Cánh đồng tuổi thơ",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b6-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Cánh đồng tuổi thơ\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Cánh đồng tuổi thơ\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b7": {
    "passage": {
      "title": "Con đường đến trường",
      "author": "SGK Tiếng Việt 3",
      "genre": "prose",
      "content": [
        "Con đường đến trường uốn lượn bên sườn đồi phủ kín hoa dại thơm ngát. Mỗi bước chân em đi đều rộn rã tiếng chim ca chào đón ngày mới."
      ],
      "audioNarration": "Con đường đến trường. Con đường đến trường uốn lượn bên sườn đồi phủ kín hoa dại thơm ngát. Mỗi bước chân em đi đều rộn rã tiếng chim ca chào đón ngày mới.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 34, 35 — Con đường đến trường",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b7-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Con đường đến trường\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Con đường đến trường\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b8": {
    "passage": {
      "title": "Lời giải toán đặc biệt",
      "author": "SGK Tiếng Việt 3",
      "genre": "prose",
      "content": [
        "Cậu bé Ét-môn-đô đã tìm ra cách giải bài toán bằng những vần thơ ngộ nghĩnh, làm thầy giáo và cả lớp vô cùng bất ngờ và thích thú."
      ],
      "audioNarration": "Lời giải toán đặc biệt. Cậu bé Ét-môn-đô đã tìm ra cách giải bài toán bằng những vần thơ ngộ nghĩnh, làm thầy giáo và cả lớp vô cùng bất ngờ và thích thú.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 38, 39 — Lời giải toán đặc biệt",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b8-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Lời giải toán đặc biệt\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Lời giải toán đặc biệt\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b9": {
    "passage": {
      "title": "Bàn tay cô giáo",
      "author": "Định Hải",
      "genre": "prose",
      "content": [
        "Bàn tay cô giáo khéo léo gấp những tờ giấy màu thành chiếc thuyền buồm xinh xắn, cánh chim hải âu chao liệng và ông mặt trời rực rỡ giữa biển khơi."
      ],
      "audioNarration": "Bàn tay cô giáo. Bàn tay cô giáo khéo léo gấp những tờ giấy màu thành chiếc thuyền buồm xinh xắn, cánh chim hải âu chao liệng và ông mặt trời rực rỡ giữa biển khơi.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 42, 43 — Bàn tay cô giáo",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b9-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Bàn tay cô giáo\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Bàn tay cô giáo\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b10": {
    "passage": {
      "title": "Nhà rông ở Tây Nguyên",
      "author": "SGK Tiếng Việt 3",
      "genre": "prose",
      "content": [
        "Nhà rông cao vút sừng sững giữa buôn làng như lưỡi rìu khổng lồ vươn lên trời xanh. Đây là nơi hội tụ linh thiêng của cộng đồng các dân tộc Tây Nguyên anh em."
      ],
      "audioNarration": "Nhà rông ở Tây Nguyên. Nhà rông cao vút sừng sững giữa buôn làng như lưỡi rìu khổng lồ vươn lên trời xanh. Đây là nơi hội tụ linh thiêng của cộng đồng các dân tộc Tây Nguyên anh em.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 46, 47 — Nhà rông ở Tây Nguyên",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b10-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Nhà rông ở Tây Nguyên\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Nhà rông ở Tây Nguyên\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b11": {
    "passage": {
      "title": "Tiếng chim hót trong vườn",
      "author": "SGK Tiếng Việt 3",
      "genre": "prose",
      "content": [
        "Khu vườn buổi sớm rộn rã bản hòa ca của muôn loài chim: chim chích chòe lảnh lót, chim khuyên ríu rít, chim cu gáy gù gù êm tai."
      ],
      "audioNarration": "Tiếng chim hót trong vườn. Khu vườn buổi sớm rộn rã bản hòa ca của muôn loài chim: chim chích chòe lảnh lót, chim khuyên ríu rít, chim cu gáy gù gù êm tai.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 50, 51 — Tiếng chim hót trong vườn",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b11-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Tiếng chim hót trong vườn\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Tiếng chim hót trong vườn\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b12": {
    "passage": {
      "title": "Thư viện trường em",
      "author": "SGK Tiếng Việt 3",
      "genre": "prose",
      "content": [
        "Thư viện trường học là một ngôi nhà tri thức ấm cúng với hàng ngàn cuốn sách bổ ích được xếp ngay ngắn trên các kệ gỗ xinh xắn."
      ],
      "audioNarration": "Thư viện trường em. Thư viện trường học là một ngôi nhà tri thức ấm cúng với hàng ngàn cuốn sách bổ ích được xếp ngay ngắn trên các kệ gỗ xinh xắn.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 54, 55 — Thư viện trường em",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b12-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Thư viện trường em\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Thư viện trường em\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b13": {
    "passage": {
      "title": "Bầu trời mùa thu",
      "author": "SGK Tiếng Việt 3",
      "genre": "prose",
      "content": [
        "Bầu trời mùa thu trong vắt và cao vút. Những đám mây trắng xốp trôi lững lờ như những chiếc thuyền buồm êm ả lướt trên mặt nước trong xanh."
      ],
      "audioNarration": "Bầu trời mùa thu. Bầu trời mùa thu trong vắt và cao vút. Những đám mây trắng xốp trôi lững lờ như những chiếc thuyền buồm êm ả lướt trên mặt nước trong xanh.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 58, 59 — Bầu trời mùa thu",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b13-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Bầu trời mùa thu\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Bầu trời mùa thu\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b14": {
    "passage": {
      "title": "Quạt cho bà ngủ",
      "author": "Thạch Quỳ",
      "genre": "prose",
      "content": [
        "Bà nằm ốm trên giường, bé ngồi bên cạnh khẽ khàng vẫy chiếc quạt nan ru bà vào giấc ngủ êm đềm giữa buổi trưa hè thơm ngát hương cam."
      ],
      "audioNarration": "Quạt cho bà ngủ. Bà nằm ốm trên giường, bé ngồi bên cạnh khẽ khàng vẫy chiếc quạt nan ru bà vào giấc ngủ êm đềm giữa buổi trưa hè thơm ngát hương cam.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 62, 63 — Quạt cho bà ngủ",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b14-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Quạt cho bà ngủ\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Quạt cho bà ngủ\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b15": {
    "passage": {
      "title": "Cóc kiện Trời",
      "author": "Truyện cổ tích",
      "genre": "prose",
      "content": [
        "Gặp năm hạn hán dữ dội, chú Cóc dũng cảm dẫn đầu muôn thú lên thiên đình đánh trống kiện Trời đòi mưa, cứu sống muôn loài thoát khỏi cơn đại hạn."
      ],
      "audioNarration": "Cóc kiện Trời. Gặp năm hạn hán dữ dội, chú Cóc dũng cảm dẫn đầu muôn thú lên thiên đình đánh trống kiện Trời đòi mưa, cứu sống muôn loài thoát khỏi cơn đại hạn.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 10, 11 — Cóc kiện Trời",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b15-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Cóc kiện Trời\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Cóc kiện Trời\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b16": {
    "passage": {
      "title": "Hai Bà Trưng",
      "author": "Truyện lịch sử",
      "genre": "prose",
      "content": [
        "Trưng Trắc và Trưng Nhị cưỡi voi xung trận, phất cờ khởi nghĩa quét sạch quân xâm lược, giành lại giang sơn thái bình cho muôn dân đất Việt."
      ],
      "audioNarration": "Hai Bà Trưng. Trưng Trắc và Trưng Nhị cưỡi voi xung trận, phất cờ khởi nghĩa quét sạch quân xâm lược, giành lại giang sơn thái bình cho muôn dân đất Việt.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 16, 17 — Hai Bà Trưng",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b16-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Hai Bà Trưng\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Hai Bà Trưng\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b17": {
    "passage": {
      "title": "Đất nước tươi đẹp",
      "author": "SGK Tiếng Việt 3",
      "genre": "prose",
      "content": [
        "Đất nước Việt Nam trải dài từ ải Nam Quan đến mũi Cà Mau với ngàn năm văn hiến, non sông gấm vóc rạng ngời truyền thống anh hùng."
      ],
      "audioNarration": "Đất nước tươi đẹp. Đất nước Việt Nam trải dài từ ải Nam Quan đến mũi Cà Mau với ngàn năm văn hiến, non sông gấm vóc rạng ngời truyền thống anh hùng.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 22, 23 — Đất nước tươi đẹp",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b17-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Đất nước tươi đẹp\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Đất nước tươi đẹp\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b18": {
    "passage": {
      "title": "Bức thư gửi chú hải quân",
      "author": "SGK Tiếng Việt 3",
      "genre": "prose",
      "content": [
        "Em viết thư gửi các chú bộ đội hải quân đang ngày đêm cầm chắc tay súng canh giữ vùng trời vùng biển thiêng liêng nơi hải đảo xa xôi của Tổ quốc."
      ],
      "audioNarration": "Bức thư gửi chú hải quân. Em viết thư gửi các chú bộ đội hải quân đang ngày đêm cầm chắc tay súng canh giữ vùng trời vùng biển thiêng liêng nơi hải đảo xa xôi của Tổ quốc.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 28, 29 — Bức thư gửi chú hải quân",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b18-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Bức thư gửi chú hải quân\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Bức thư gửi chú hải quân\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b19": {
    "passage": {
      "title": "Chú hải quân canh giữ đảo xa",
      "author": "SGK Tiếng Việt 3",
      "genre": "prose",
      "content": [
        "Giữa trùng khơi sóng gió, hình ảnh người chiến sĩ hải quân với nụ cười lạc quan, kiên cường luôn là điểm tựa vững chắc cho biển đảo quê hương."
      ],
      "audioNarration": "Chú hải quân canh giữ đảo xa. Giữa trùng khơi sóng gió, hình ảnh người chiến sĩ hải quân với nụ cười lạc quan, kiên cường luôn là điểm tựa vững chắc cho biển đảo quê hương.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 34, 35 — Chú hải quân canh giữ đảo xa",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b19-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Chú hải quân canh giữ đảo xa\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Chú hải quân canh giữ đảo xa\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b20": {
    "passage": {
      "title": "Bác sĩ Y-éc-xanh",
      "author": "SGK Tiếng Việt 3",
      "genre": "prose",
      "content": [
        "Bác sĩ A-lếch-xăng Y-éc-xanh đã dành trọn cả cuộc đời gắn bó với mảnh đất Nha Trang hiền hòa để nghiên cứu y học, chữa bệnh cứu sống đồng bào nghèo."
      ],
      "audioNarration": "Bác sĩ Y-éc-xanh. Bác sĩ A-lếch-xăng Y-éc-xanh đã dành trọn cả cuộc đời gắn bó với mảnh đất Nha Trang hiền hòa để nghiên cứu y học, chữa bệnh cứu sống đồng bào nghèo.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 40, 41 — Bác sĩ Y-éc-xanh",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b20-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Bác sĩ Y-éc-xanh\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Bác sĩ Y-éc-xanh\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b21": {
    "passage": {
      "title": "Người trí thức yêu nước",
      "author": "SGK Tiếng Việt 3",
      "genre": "prose",
      "content": [
        "Bác sĩ Đặng Văn Ngữ từ bỏ cuộc sống tiện nghi nơi xứ người, vượt ngàn dặm về chiến khu kháng chiến để nghiên cứu thuốc cứu chữa thương bệnh binh."
      ],
      "audioNarration": "Người trí thức yêu nước. Bác sĩ Đặng Văn Ngữ từ bỏ cuộc sống tiện nghi nơi xứ người, vượt ngàn dặm về chiến khu kháng chiến để nghiên cứu thuốc cứu chữa thương bệnh binh.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 46, 47 — Người trí thức yêu nước",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b21-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Người trí thức yêu nước\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Người trí thức yêu nước\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b22": {
    "passage": {
      "title": "Trái Đất xanh của chúng mình",
      "author": "SGK Tiếng Việt 3",
      "genre": "prose",
      "content": [
        "Trái Đất là ngôi nhà chung tươi đẹp của muôn loài. Chúng ta hãy cùng chung tay bảo vệ màu xanh của rừng cây, nguồn nước và bầu khí quyển trong lành."
      ],
      "audioNarration": "Trái Đất xanh của chúng mình. Trái Đất là ngôi nhà chung tươi đẹp của muôn loài. Chúng ta hãy cùng chung tay bảo vệ màu xanh của rừng cây, nguồn nước và bầu khí quyển trong lành.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 52, 53 — Trái Đất xanh của chúng mình",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b22-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Trái Đất xanh của chúng mình\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Trái Đất xanh của chúng mình\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b23": {
    "passage": {
      "title": "Cùng vui chơi trong nắng mới",
      "author": "SGK Tiếng Việt 3",
      "genre": "prose",
      "content": [
        "Ánh nắng ban mai chan hòa khắp sân trường. Các bạn nhỏ cùng nhau tập thể dục và tham gia các trò chơi vận động rèn luyện thân thể dẻo dai."
      ],
      "audioNarration": "Cùng vui chơi trong nắng mới. Ánh nắng ban mai chan hòa khắp sân trường. Các bạn nhỏ cùng nhau tập thể dục và tham gia các trò chơi vận động rèn luyện thân thể dẻo dai.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 58, 59 — Cùng vui chơi trong nắng mới",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b23-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Cùng vui chơi trong nắng mới\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Cùng vui chơi trong nắng mới\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b24": {
    "passage": {
      "title": "Hương lúa chín đầu mùa",
      "author": "SGK Tiếng Việt 3",
      "genre": "prose",
      "content": [
        "Gió thu đưa hương cốm mới thơm nồng nàn trên từng con ngõ nhỏ, báo hiệu một vụ mùa no ấm và tràn ngập niềm vui trên khắp làng quê."
      ],
      "audioNarration": "Hương lúa chín đầu mùa. Gió thu đưa hương cốm mới thơm nồng nàn trên từng con ngõ nhỏ, báo hiệu một vụ mùa no ấm và tràn ngập niềm vui trên khắp làng quê.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 64, 65 — Hương lúa chín đầu mùa",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b24-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Hương lúa chín đầu mùa\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Hương lúa chín đầu mùa\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g3-b25": {
    "passage": {
      "title": "Đấu trường Trạng Nguyên nhí Lớp 3",
      "author": "WonderKids",
      "genre": "prose",
      "content": [
        "Chúc mừng các sĩ tử nhí đã xuất sắc hoàn thành toàn bộ chương trình Tiếng Việt Lớp 3 với bản lĩnh và tri thức tuyệt vời!"
      ],
      "audioNarration": "Đấu trường Trạng Nguyên nhí Lớp 3. Chúc mừng các sĩ tử nhí đã xuất sắc hoàn thành toàn bộ chương trình Tiếng Việt Lớp 3 với bản lĩnh và tri thức tuyệt vời!",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Hãnh diện về truyền thống tốt đẹp của dân tộc."
        }
      ]
    },
    "sourceType": "pedagogical_supplement",
    "sourceBook": "Đấu trường Đánh giá Năng lực Học sinh — WonderKids",
    "sourceDetail": "Tổng kết Lớp 3 — Đấu trường Trạng Nguyên nhí Lớp 3",
    "pedagogicalObjective": "Chuẩn hóa mạch kiến thức đọc hiểu và tập làm văn Lớp 3 theo GDPT 2018.",
    "questions": [
      {
        "id": "tv-g3-b25-q1",
        "type": "bubble_choice",
        "questionText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Đấu trường Trạng Nguyên nhí Lớp 3\" là gì?",
        "audioText": "Ý nghĩa cao đẹp được gửi gắm trong bài \"Đấu trường Trạng Nguyên nhí Lớp 3\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Xem tivi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b1": {
    "passage": {
      "title": "Dế Mèn bênh vực kẻ yếu (Phần 1)",
      "author": "Tô Hoài",
      "genre": "prose",
      "content": [
        "Một hôm, qua một vùng cỏ xước xanh dài, tôi chợt nghe tiếng khóc tỉ tê. Đến gần hốc đá, tôi thấy chị Nhà Trò bé nhỏ, gầy yếu đang ngồi gục đầu khóc nức nở vì bị bọn nhện ức hiếp đòi nợ ăn thịt."
      ],
      "audioNarration": "Dế Mèn bênh vực kẻ yếu (Phần 1). Một hôm, qua một vùng cỏ xước xanh dài, tôi chợt nghe tiếng khóc tỉ tê. Đến gần hốc đá, tôi thấy chị Nhà Trò bé nhỏ, gầy yếu đang ngồi gục đầu khóc nức nở vì bị bọn nhện ức hiếp đòi nợ ăn thịt.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 10, 11 — Dế Mèn bênh vực kẻ yếu (Phần 1)",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b1-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Dế Mèn bênh vực kẻ yếu (Phần 1)\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Dế Mèn bênh vực kẻ yếu (Phần 1)\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b2": {
    "passage": {
      "title": "Mẹ vắng nhà ngày bão",
      "author": "Đặng Hiển",
      "genre": "prose",
      "content": [
        "Mấy ngày mẹ vắng nhà, trời nổi bão to gió lớn. Hai anh em bảo nhau làm mọi việc nhà, chăm sóc đàn gà và nấu cơm tinh tươm để khi mẹ về nhà cửa luôn ấm áp."
      ],
      "audioNarration": "Mẹ vắng nhà ngày bão. Mấy ngày mẹ vắng nhà, trời nổi bão to gió lớn. Hai anh em bảo nhau làm mọi việc nhà, chăm sóc đàn gà và nấu cơm tinh tươm để khi mẹ về nhà cửa luôn ấm áp.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 14, 15 — Mẹ vắng nhà ngày bão",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b2-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Mẹ vắng nhà ngày bão\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Mẹ vắng nhà ngày bão\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b3": {
    "passage": {
      "title": "Dế Mèn bênh vực kẻ yếu (Phần 2)",
      "author": "Tô Hoài",
      "genre": "prose",
      "content": [
        "Dế Mèn hiên ngang bước tới sào huyệt của bọn nhện, thét lớn một tiếng khiến lũ nhện run sợ. Chú vung đôi càng sắc bén phá tan vòng vây tơ nhện, bảo vệ chị Nhà Trò tội nghiệp."
      ],
      "audioNarration": "Dế Mèn bênh vực kẻ yếu (Phần 2). Dế Mèn hiên ngang bước tới sào huyệt của bọn nhện, thét lớn một tiếng khiến lũ nhện run sợ. Chú vung đôi càng sắc bén phá tan vòng vây tơ nhện, bảo vệ chị Nhà Trò tội nghiệp.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 18, 19 — Dế Mèn bênh vực kẻ yếu (Phần 2)",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b3-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Dế Mèn bênh vực kẻ yếu (Phần 2)\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Dế Mèn bênh vực kẻ yếu (Phần 2)\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b4": {
    "passage": {
      "title": "Truyện cổ nước mình",
      "author": "Lâm Thị Mỹ Dạ",
      "genre": "prose",
      "content": [
        "Tôi yêu truyện cổ nước tôi, vừa nhân hậu lại tuyệt vời sâu xa. Những câu chuyện cổ tích thấm đượm tình người, dạy chúng ta bài học ở hiền gặp lành và lòng trung thực."
      ],
      "audioNarration": "Truyện cổ nước mình. Tôi yêu truyện cổ nước tôi, vừa nhân hậu lại tuyệt vời sâu xa. Những câu chuyện cổ tích thấm đượm tình người, dạy chúng ta bài học ở hiền gặp lành và lòng trung thực.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 22, 23 — Truyện cổ nước mình",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b4-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Truyện cổ nước mình\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Truyện cổ nước mình\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b5": {
    "passage": {
      "title": "Thằn lằn xanh và tắc kè",
      "author": "SGK Tiếng Việt 4",
      "genre": "prose",
      "content": [
        "Thằn lằn xanh và chú tắc kè hoa mỗi loài có một môi trường sống và tài năng riêng biệt. Học cách tôn trọng sự khác biệt của bạn bè là chìa khóa của tình bạn bền chặt."
      ],
      "audioNarration": "Thằn lằn xanh và tắc kè. Thằn lằn xanh và chú tắc kè hoa mỗi loài có một môi trường sống và tài năng riêng biệt. Học cách tôn trọng sự khác biệt của bạn bè là chìa khóa của tình bạn bền chặt.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 26, 27 — Thằn lằn xanh và tắc kè",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b5-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Thằn lằn xanh và tắc kè\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Thằn lằn xanh và tắc kè\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b6": {
    "passage": {
      "title": "Nghệ sĩ nhí",
      "author": "SGK Tiếng Việt 4",
      "genre": "prose",
      "content": [
        "Tiếng đàn vĩ cầm trong trẻo của cô bé nhỏ vang lên giữa khán phòng rực rỡ ánh đèn, lay động trái tim hàng ngàn khán giả bằng niềm đam mê nghệ thuật cháy bỏng."
      ],
      "audioNarration": "Nghệ sĩ nhí. Tiếng đàn vĩ cầm trong trẻo của cô bé nhỏ vang lên giữa khán phòng rực rỡ ánh đèn, lay động trái tim hàng ngàn khán giả bằng niềm đam mê nghệ thuật cháy bỏng.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 30, 31 — Nghệ sĩ nhí",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b6-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Nghệ sĩ nhí\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Nghệ sĩ nhí\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b7": {
    "passage": {
      "title": "Bài ca Trái Đất",
      "author": "Định Hải",
      "genre": "prose",
      "content": [
        "Trái Đất trẻ của bạn trẻ năm châu! Vàng, trắng, đen... tuy khác màu da nhưng cùng chung nụ cười rạng rỡ và khát vọng hòa bình trên hành tinh xanh."
      ],
      "audioNarration": "Bài ca Trái Đất. Trái Đất trẻ của bạn trẻ năm châu! Vàng, trắng, đen... tuy khác màu da nhưng cùng chung nụ cười rạng rỡ và khát vọng hòa bình trên hành tinh xanh.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 34, 35 — Bài ca Trái Đất",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b7-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Bài ca Trái Đất\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Bài ca Trái Đất\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b8": {
    "passage": {
      "title": "Nhà bác học của đồng ruộng",
      "author": "SGK Tiếng Việt 4",
      "genre": "prose",
      "content": [
        "Giáo sư Lương Định Của đã cống hiến trọn cuộc đời lai tạo ra những giống lúa mới năng suất cao, mang lại những mùa vàng no ấm cho hàng triệu nông dân Việt Nam."
      ],
      "audioNarration": "Nhà bác học của đồng ruộng. Giáo sư Lương Định Của đã cống hiến trọn cuộc đời lai tạo ra những giống lúa mới năng suất cao, mang lại những mùa vàng no ấm cho hàng triệu nông dân Việt Nam.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 38, 39 — Nhà bác học của đồng ruộng",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b8-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Nhà bác học của đồng ruộng\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Nhà bác học của đồng ruộng\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b9": {
    "passage": {
      "title": "Nếu chúng mình có phép lạ",
      "author": "Định Hải",
      "genre": "prose",
      "content": [
        "Nếu chúng mình có phép lạ, hạt giống nảy mầm chớp mắt thành cây, quả chín thơm lừng đầy cành, không còn chiến tranh và đói nghèo trên toàn thế giới."
      ],
      "audioNarration": "Nếu chúng mình có phép lạ. Nếu chúng mình có phép lạ, hạt giống nảy mầm chớp mắt thành cây, quả chín thơm lừng đầy cành, không còn chiến tranh và đói nghèo trên toàn thế giới.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 42, 43 — Nếu chúng mình có phép lạ",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b9-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Nếu chúng mình có phép lạ\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Nếu chúng mình có phép lạ\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b10": {
    "passage": {
      "title": "Cây đa quê hương",
      "author": "Nguyễn Khắc Viện",
      "genre": "prose",
      "content": [
        "Cây đa cổ thụ nghìn năm tuổi đầu làng như chiếc ô khổng lồ xòe bóng mát chở che cho bao thế hệ dân làng trải qua những thăng trầm của lịch sử."
      ],
      "audioNarration": "Cây đa quê hương. Cây đa cổ thụ nghìn năm tuổi đầu làng như chiếc ô khổng lồ xòe bóng mát chở che cho bao thế hệ dân làng trải qua những thăng trầm của lịch sử.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 46, 47 — Cây đa quê hương",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b10-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Cây đa quê hương\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Cây đa quê hương\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b11": {
    "passage": {
      "title": "Về thăm bà",
      "author": "Thạch Lam",
      "genre": "prose",
      "content": [
        "Thanh bước vào khu vườn yên ả của bà, cảm nhận hương hoa hoàng lan thoang thoảng trong gió và sự chở che dịu dàng của người bà kính yêu."
      ],
      "audioNarration": "Về thăm bà. Thanh bước vào khu vườn yên ả của bà, cảm nhận hương hoa hoàng lan thoang thoảng trong gió và sự chở che dịu dàng của người bà kính yêu.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 50, 51 — Về thăm bà",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b11-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Về thăm bà\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Về thăm bà\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b12": {
    "passage": {
      "title": "Đôi bạn trong rừng xanh",
      "author": "SGK Tiếng Việt 4",
      "genre": "prose",
      "content": [
        "Sóc Nâu và Nhím Xám luôn đồng hành, nhường nhịn và san sẻ từng hạt sồi thơm ngon trong những ngày đông giá rét trên đỉnh núi cao."
      ],
      "audioNarration": "Đôi bạn trong rừng xanh. Sóc Nâu và Nhím Xám luôn đồng hành, nhường nhịn và san sẻ từng hạt sồi thơm ngon trong những ngày đông giá rét trên đỉnh núi cao.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 54, 55 — Đôi bạn trong rừng xanh",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b12-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Đôi bạn trong rừng xanh\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Đôi bạn trong rừng xanh\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b13": {
    "passage": {
      "title": "Chiếc ô màu đỏ",
      "author": "SGK Tiếng Việt 4",
      "genre": "prose",
      "content": [
        "Chiếc ô màu đỏ của Mai đã che mát cho một bạn nhỏ bị lạc đường trong cơn mưa tầm tã, gieo vào lòng người sự ấm áp của tình người giữa đời thường."
      ],
      "audioNarration": "Chiếc ô màu đỏ. Chiếc ô màu đỏ của Mai đã che mát cho một bạn nhỏ bị lạc đường trong cơn mưa tầm tã, gieo vào lòng người sự ấm áp của tình người giữa đời thường.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 58, 59 — Chiếc ô màu đỏ",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b13-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Chiếc ô màu đỏ\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Chiếc ô màu đỏ\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b14": {
    "passage": {
      "title": "Buổi sớm trên quê hương",
      "author": "SGK Tiếng Việt 4",
      "genre": "prose",
      "content": [
        "Bình minh rạng rỡ chiếu sáng cánh đồng lúa chín vàng trĩu hạt. Giọt sương mai long lanh đọng trên đầu ngọn cỏ như những viên ngọc bích lấp lánh."
      ],
      "audioNarration": "Buổi sớm trên quê hương. Bình minh rạng rỡ chiếu sáng cánh đồng lúa chín vàng trĩu hạt. Giọt sương mai long lanh đọng trên đầu ngọn cỏ như những viên ngọc bích lấp lánh.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 62, 63 — Buổi sớm trên quê hương",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b14-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Buổi sớm trên quê hương\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Buổi sớm trên quê hương\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b15": {
    "passage": {
      "title": "Bông hoa niềm vui",
      "author": "SGK Tiếng Việt 4",
      "genre": "prose",
      "content": [
        "Bông hoa cúc vàng rực rỡ hé nở trong sớm mai là món quà bất ngờ chan chứa lòng hiếu thảo mà bé dành tặng mẹ đang trên giường bệnh."
      ],
      "audioNarration": "Bông hoa niềm vui. Bông hoa cúc vàng rực rỡ hé nở trong sớm mai là món quà bất ngờ chan chứa lòng hiếu thảo mà bé dành tặng mẹ đang trên giường bệnh.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 66, 67 — Bông hoa niềm vui",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b15-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Bông hoa niềm vui\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Bông hoa niềm vui\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b16": {
    "passage": {
      "title": "Vịnh Hạ Long",
      "author": "Thi Sảnh",
      "genre": "prose",
      "content": [
        "Vịnh Hạ Long là một kiệt tác kỳ vĩ của thiên nhiên với hàng ngàn hòn đảo đá vôi nhấp nhô trên làn nước biển xanh như ngọc bích, được UNESCO vinh danh là di sản thế giới."
      ],
      "audioNarration": "Vịnh Hạ Long. Vịnh Hạ Long là một kiệt tác kỳ vĩ của thiên nhiên với hàng ngàn hòn đảo đá vôi nhấp nhô trên làn nước biển xanh như ngọc bích, được UNESCO vinh danh là di sản thế giới.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 10, 11 — Vịnh Hạ Long",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b16-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Vịnh Hạ Long\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Vịnh Hạ Long\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b17": {
    "passage": {
      "title": "Hang Sơn Đoòng",
      "author": "SGK Tiếng Việt 4",
      "genre": "prose",
      "content": [
        "Hang Sơn Đoòng - hang động tự nhiên kỳ vĩ bậc nhất hành tinh ẩn chứa cả một khu rừng nguyên sinh và dòng sông ngầm huyền bí sâu trong lòng núi đá vôi."
      ],
      "audioNarration": "Hang Sơn Đoòng. Hang Sơn Đoòng - hang động tự nhiên kỳ vĩ bậc nhất hành tinh ẩn chứa cả một khu rừng nguyên sinh và dòng sông ngầm huyền bí sâu trong lòng núi đá vôi.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 16, 17 — Hang Sơn Đoòng",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b17-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Hang Sơn Đoòng\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Hang Sơn Đoòng\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b18": {
    "passage": {
      "title": "Chú bé Lượm",
      "author": "Tố Hữu",
      "genre": "prose",
      "content": [
        "Chú bé Lượm với chiếc xắc xinh xinh, ca lô đội lệch, thoăn thoắt đôi chân vượt qua làn mưa bom bão đạn để chuyển công văn hỏa tốc cho chiến khu."
      ],
      "audioNarration": "Chú bé Lượm. Chú bé Lượm với chiếc xắc xinh xinh, ca lô đội lệch, thoăn thoắt đôi chân vượt qua làn mưa bom bão đạn để chuyển công văn hỏa tốc cho chiến khu.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 24, 25 — Chú bé Lượm",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b18-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Chú bé Lượm\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Chú bé Lượm\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b19": {
    "passage": {
      "title": "Khúc hát ru những em bé lớn trên lưng mẹ",
      "author": "Nguyễn Khoa Điềm",
      "genre": "prose",
      "content": [
        "Lời ru ngọt ngào của người mẹ Tà-ôi hòa cùng nhịp chày giã gạo nuôi bộ đội, nuôi dưỡng ước mơ con khôn lớn trở thành người công dân tự do của đất nước."
      ],
      "audioNarration": "Khúc hát ru những em bé lớn trên lưng mẹ. Lời ru ngọt ngào của người mẹ Tà-ôi hòa cùng nhịp chày giã gạo nuôi bộ đội, nuôi dưỡng ước mơ con khôn lớn trở thành người công dân tự do của đất nước.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 32, 33 — Khúc hát ru những em bé lớn trên lưng mẹ",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b19-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Khúc hát ru những em bé lớn trên lưng mẹ\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Khúc hát ru những em bé lớn trên lưng mẹ\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b20": {
    "passage": {
      "title": "Con suối mát lành",
      "author": "SGK Tiếng Việt 4",
      "genre": "prose",
      "content": [
        "Dòng suối trong vắt róc rách chảy qua đại ngàn, mang lại nguồn sống xanh tươi và tiếng reo vui bất tận cho muông thú vùng cao."
      ],
      "audioNarration": "Con suối mát lành. Dòng suối trong vắt róc rách chảy qua đại ngàn, mang lại nguồn sống xanh tươi và tiếng reo vui bất tận cho muông thú vùng cao.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 40, 41 — Con suối mát lành",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b20-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Con suối mát lành\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Con suối mát lành\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b21": {
    "passage": {
      "title": "Mùa quả chín quê em",
      "author": "SGK Tiếng Việt 4",
      "genre": "prose",
      "content": [
        "Khu vườn trĩu quả mùa thu: mít thơm lừng, bưởi vàng ươm, hồng đỏ mọng... mang lại niềm vui thu hoạch rạng rỡ cho những người nông dân một nắng hai sương."
      ],
      "audioNarration": "Mùa quả chín quê em. Khu vườn trĩu quả mùa thu: mít thơm lừng, bưởi vàng ươm, hồng đỏ mọng... mang lại niềm vui thu hoạch rạng rỡ cho những người nông dân một nắng hai sương.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 48, 49 — Mùa quả chín quê em",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b21-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Mùa quả chín quê em\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Mùa quả chín quê em\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g4-b22": {
    "passage": {
      "title": "Đấu trường Trạng Nguyên Lớp 4",
      "author": "WonderKids",
      "genre": "prose",
      "content": [
        "Chào mừng các bạn học sinh ưu tú đã vượt qua 22 chặng thử thách để bước lên bục vinh quang của Đấu trường Trạng Nguyên Lớp 4!"
      ],
      "audioNarration": "Đấu trường Trạng Nguyên Lớp 4. Chào mừng các bạn học sinh ưu tú đã vượt qua 22 chặng thử thách để bước lên bục vinh quang của Đấu trường Trạng Nguyên Lớp 4!",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, tráng lệ lạ thường."
        }
      ]
    },
    "sourceType": "pedagogical_supplement",
    "sourceBook": "Đấu trường Đánh giá Năng lực Học sinh — WonderKids",
    "sourceDetail": "Tổng kết Lớp 4 — Đấu trường Trạng Nguyên Lớp 4",
    "pedagogicalObjective": "Phát triển năng lực ngôn ngữ, cảm thụ văn học và ngữ pháp tiếng Việt Lớp 4.",
    "questions": [
      {
        "id": "tv-g4-b22-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp cốt lõi của tác phẩm \"Đấu trường Trạng Nguyên Lớp 4\" là gì?",
        "audioText": "Thông điệp cốt lõi của tác phẩm \"Đấu trường Trạng Nguyên Lớp 4\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ ức hiếp",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b1": {
    "passage": {
      "title": "Thư gửi các học sinh",
      "author": "Hồ Chí Minh",
      "genre": "prose",
      "content": [
        "Các em học sinh! Ngày hôm nay là ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa. Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em."
      ],
      "audioNarration": "Thư gửi các học sinh. Các em học sinh! Ngày hôm nay là ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa. Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 10, 11 — Thư gửi các học sinh",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b1-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Thư gửi các học sinh\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Thư gửi các học sinh\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b2": {
    "passage": {
      "title": "Sắc màu em yêu",
      "author": "Phạm Đình Ân",
      "genre": "prose",
      "content": [
        "Em yêu màu đỏ như máu trong tim, cờ Tổ quốc bay; Em yêu màu xanh của đồng bằng bát ngát; Em yêu màu vàng của hoa cúc mùa thu; Em yêu tất cả sắc màu của quê hương đất nước Việt Nam."
      ],
      "audioNarration": "Sắc màu em yêu. Em yêu màu đỏ như máu trong tim, cờ Tổ quốc bay; Em yêu màu xanh của đồng bằng bát ngát; Em yêu màu vàng của hoa cúc mùa thu; Em yêu tất cả sắc màu của quê hương đất nước Việt Nam.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 14, 15 — Sắc màu em yêu",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b2-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Sắc màu em yêu\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Sắc màu em yêu\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b3": {
    "passage": {
      "title": "Quang cảnh làng mạc ngày mùa",
      "author": "Tô Hoài",
      "genre": "prose",
      "content": [
        "Mùa đông, giữa ngày mùa, làng quê toàn màu vàng trù phú: lúa chín vàng xuộm, nắng nhạt vàng hoe, quả xoan vàng lịm, lá chuối vàng ối... Tất cả đượm một màu trù phú, no ấm lạ thường."
      ],
      "audioNarration": "Quang cảnh làng mạc ngày mùa. Mùa đông, giữa ngày mùa, làng quê toàn màu vàng trù phú: lúa chín vàng xuộm, nắng nhạt vàng hoe, quả xoan vàng lịm, lá chuối vàng ối... Tất cả đượm một màu trù phú, no ấm lạ thường.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 18, 19 — Quang cảnh làng mạc ngày mùa",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b3-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Quang cảnh làng mạc ngày mùa\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Quang cảnh làng mạc ngày mùa\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b4": {
    "passage": {
      "title": "Lòng dân",
      "author": "Nguyễn Văn Xe",
      "genre": "prose",
      "content": [
        "Vở kịch tái hiện lòng trung kiên, gan dạ của bà má Nam Bộ khéo léo đánh lừa quân giặc tàn bạo để bảo vệ an toàn cho người cán bộ cách mạng."
      ],
      "audioNarration": "Lòng dân. Vở kịch tái hiện lòng trung kiên, gan dạ của bà má Nam Bộ khéo léo đánh lừa quân giặc tàn bạo để bảo vệ an toàn cho người cán bộ cách mạng.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 22, 23 — Lòng dân",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b4-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Lòng dân\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Lòng dân\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b5": {
    "passage": {
      "title": "Cánh chim hòa bình",
      "author": "SGK Tiếng Việt 5",
      "genre": "prose",
      "content": [
        "Cánh chim bồ câu trắng chao liệng trên bầu trời xanh thẳm là biểu tượng bất diệt cho ước vọng hòa bình, hữu nghị và thịnh vượng của nhân loại trên toàn thế giới."
      ],
      "audioNarration": "Cánh chim hòa bình. Cánh chim bồ câu trắng chao liệng trên bầu trời xanh thẳm là biểu tượng bất diệt cho ước vọng hòa bình, hữu nghị và thịnh vượng của nhân loại trên toàn thế giới.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 26, 27 — Cánh chim hòa bình",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b5-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Cánh chim hòa bình\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Cánh chim hòa bình\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b6": {
    "passage": {
      "title": "Bài ca về trái đất",
      "author": "Định Hải",
      "genre": "prose",
      "content": [
        "Trái Đất là quả bóng xanh bay giữa trời cao. Hãy giữ cho tiếng cười của trẻ thơ luôn rộn rã và bầu trời không còn bóng đen của khói lửa chiến tranh."
      ],
      "audioNarration": "Bài ca về trái đất. Trái Đất là quả bóng xanh bay giữa trời cao. Hãy giữ cho tiếng cười của trẻ thơ luôn rộn rã và bầu trời không còn bóng đen của khói lửa chiến tranh.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 30, 31 — Bài ca về trái đất",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b6-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Bài ca về trái đất\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Bài ca về trái đất\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b7": {
    "passage": {
      "title": "Những con sếu bằng giấy",
      "author": "Theo SGK Tiếng Việt 5",
      "genre": "prose",
      "content": [
        "Cô bé Xa-da-cô bị nhiễm phóng xạ bom nguyên tử đã kiên trì gấp hàng ngàn con sếu giấy với khát vọng hòa bình bất diệt, làm lay động hàng triệu trái tim nhân loại."
      ],
      "audioNarration": "Những con sếu bằng giấy. Cô bé Xa-da-cô bị nhiễm phóng xạ bom nguyên tử đã kiên trì gấp hàng ngàn con sếu giấy với khát vọng hòa bình bất diệt, làm lay động hàng triệu trái tim nhân loại.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 34, 35 — Những con sếu bằng giấy",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b7-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Những con sếu bằng giấy\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Những con sếu bằng giấy\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b8": {
    "passage": {
      "title": "Kì diệu rừng xanh",
      "author": "Nguyễn Phan Hách",
      "genre": "prose",
      "content": [
        "Khu rừng nguyên sinh mở ra một thế giới kỳ thú với vương quốc nấm lúp xúp, những thân cây cổ thụ rêu phong và bầy vượn bạc má chuyền cành thoăn thoắt."
      ],
      "audioNarration": "Kì diệu rừng xanh. Khu rừng nguyên sinh mở ra một thế giới kỳ thú với vương quốc nấm lúp xúp, những thân cây cổ thụ rêu phong và bầy vượn bạc má chuyền cành thoăn thoắt.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 38, 39 — Kì diệu rừng xanh",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b8-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Kì diệu rừng xanh\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Kì diệu rừng xanh\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b9": {
    "passage": {
      "title": "Trước cổng trời",
      "author": "Nguyễn Đình Thi",
      "genre": "prose",
      "content": [
        "Đứng trên cổng trời lộng gió, ngắm nhìn thung lũng mây trắng bồng bềnh và những nương ngô xanh biếc, ta cảm nhận sâu sắc vẻ đẹp hùng vĩ của biên cương Tổ quốc."
      ],
      "audioNarration": "Trước cổng trời. Đứng trên cổng trời lộng gió, ngắm nhìn thung lũng mây trắng bồng bềnh và những nương ngô xanh biếc, ta cảm nhận sâu sắc vẻ đẹp hùng vĩ của biên cương Tổ quốc.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 42, 43 — Trước cổng trời",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b9-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Trước cổng trời\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Trước cổng trời\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b10": {
    "passage": {
      "title": "Đất Cà Mau",
      "author": "Mai Văn Tạo",
      "genre": "prose",
      "content": [
        "Cà Mau là đất mưa dông, cây đước cây tràm bám rễ sâu vào bùn đất phù sa màu mỡ. Con người nơi đây dũng cảm, kiên cường và giàu lòng mến khách."
      ],
      "audioNarration": "Đất Cà Mau. Cà Mau là đất mưa dông, cây đước cây tràm bám rễ sâu vào bùn đất phù sa màu mỡ. Con người nơi đây dũng cảm, kiên cường và giàu lòng mến khách.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 46, 47 — Đất Cà Mau",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b10-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Đất Cà Mau\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Đất Cà Mau\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b11": {
    "passage": {
      "title": "Chuyện một khu vườn nhỏ",
      "author": "Vân Long",
      "genre": "prose",
      "content": [
        "Khu vườn ban công nhỏ nhắn của bé Thu và ông nội có bao nhiêu loài cây quý, là nơi chim sâu ríu rít tìm về làm tổ giữa lòng thành phố nhộn nhịp."
      ],
      "audioNarration": "Chuyện một khu vườn nhỏ. Khu vườn ban công nhỏ nhắn của bé Thu và ông nội có bao nhiêu loài cây quý, là nơi chim sâu ríu rít tìm về làm tổ giữa lòng thành phố nhộn nhịp.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 50, 51 — Chuyện một khu vườn nhỏ",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b11-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Chuyện một khu vườn nhỏ\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Chuyện một khu vườn nhỏ\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b12": {
    "passage": {
      "title": "Mùa thảo quả",
      "author": "Ma Văn Kháng",
      "genre": "prose",
      "content": [
        "Thảo quả trên rừng Đản Khao đã chín nương. Mùi thơm nồng nàn quyến rũ lan tỏa khắp không gian, làm bừng sáng cả khu rừng già Tây Bắc."
      ],
      "audioNarration": "Mùa thảo quả. Thảo quả trên rừng Đản Khao đã chín nương. Mùi thơm nồng nàn quyến rũ lan tỏa khắp không gian, làm bừng sáng cả khu rừng già Tây Bắc.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 54, 55 — Mùa thảo quả",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b12-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Mùa thảo quả\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Mùa thảo quả\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b13": {
    "passage": {
      "title": "Hành trình của bầy ong",
      "author": "Nguyễn Đức Mậu",
      "genre": "prose",
      "content": [
        "Bầy ong cần mẫn bay khắp bốn phương trời, chắt chiu từng giọt mật hoa tinh túy để dâng tặng cho đời chất ngọt ngào bất tận."
      ],
      "audioNarration": "Hành trình của bầy ong. Bầy ong cần mẫn bay khắp bốn phương trời, chắt chiu từng giọt mật hoa tinh túy để dâng tặng cho đời chất ngọt ngào bất tận.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 1 — Trang 58, 59 — Hành trình của bầy ong",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b13-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Hành trình của bầy ong\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Hành trình của bầy ong\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b14": {
    "passage": {
      "title": "Người công dân số Một",
      "author": "Hà Văn Cầu",
      "genre": "prose",
      "content": [
        "Chàng thanh niên Nguyễn Tất Thành tại bến cảng Nhà Rồng năm 1911 với bầu nhiệt huyết yêu nước nồng nàn đã quyết tâm ra đi tìm đường cứu nước, giải phóng dân tộc khỏi ách nô lệ."
      ],
      "audioNarration": "Người công dân số Một. Chàng thanh niên Nguyễn Tất Thành tại bến cảng Nhà Rồng năm 1911 với bầu nhiệt huyết yêu nước nồng nàn đã quyết tâm ra đi tìm đường cứu nước, giải phóng dân tộc khỏi ách nô lệ.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 10, 11 — Người công dân số Một",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b14-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Người công dân số Một\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Người công dân số Một\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b15": {
    "passage": {
      "title": "Hạt gạo làng ta",
      "author": "Trần Đăng Khoa",
      "genre": "prose",
      "content": [
        "Hạt gạo làng ta có vị phù sa của sông Kinh Thầy, có hương sen thơm trong hồ nước đầy, có lời mẹ hát ngọt ngào và giọt mồ hôi của những người mẹ, người chị trên cánh đồng kháng chiến."
      ],
      "audioNarration": "Hạt gạo làng ta. Hạt gạo làng ta có vị phù sa của sông Kinh Thầy, có hương sen thơm trong hồ nước đầy, có lời mẹ hát ngọt ngào và giọt mồ hôi của những người mẹ, người chị trên cánh đồng kháng chiến.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 16, 17 — Hạt gạo làng ta",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b15-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Hạt gạo làng ta\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Hạt gạo làng ta\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b16": {
    "passage": {
      "title": "Thái sư Trần Thủ Độ",
      "author": "Đại Việt sử ký toàn thư",
      "genre": "prose",
      "content": [
        "Thái sư Trần Thủ Độ là bậc khai quốc công thần kiệt xuất của triều Trần, luôn đặt phép nước lên trên tình riêng, chí công vô tư và hết lòng vì sự tồn vong của xã tắc."
      ],
      "audioNarration": "Thái sư Trần Thủ Độ. Thái sư Trần Thủ Độ là bậc khai quốc công thần kiệt xuất của triều Trần, luôn đặt phép nước lên trên tình riêng, chí công vô tư và hết lòng vì sự tồn vong của xã tắc.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 22, 23 — Thái sư Trần Thủ Độ",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b16-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Thái sư Trần Thủ Độ\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Thái sư Trần Thủ Độ\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b17": {
    "passage": {
      "title": "Phong cảnh đền Hùng",
      "author": "Theo Đoàn Minh Tuấn",
      "genre": "prose",
      "content": [
        "Đền Hùng tọa lạc trang nghiêm trên đỉnh núi Nghĩa Lĩnh linh thiêng. Nơi đây là cội nguồn của dân tộc, nơi các vua Hùng đã có công dựng nước và con cháu muôn đời tạc dạ ghi ơn."
      ],
      "audioNarration": "Phong cảnh đền Hùng. Đền Hùng tọa lạc trang nghiêm trên đỉnh núi Nghĩa Lĩnh linh thiêng. Nơi đây là cội nguồn của dân tộc, nơi các vua Hùng đã có công dựng nước và con cháu muôn đời tạc dạ ghi ơn.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 28, 29 — Phong cảnh đền Hùng",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b17-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Phong cảnh đền Hùng\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Phong cảnh đền Hùng\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b18": {
    "passage": {
      "title": "Nghĩa thầy trò",
      "author": "Theo Hà Ân",
      "genre": "prose",
      "content": [
        "Thầy giáo Chu Văn An dẫn các học trò đã làm quan lớn về quê chúc thọ cụ đồ già đã dạy chữ cho thầy thuở xưa, thể hiện truyền thống \"Tôn sư trọng đạo\" cao quý của dân tộc Việt Nam."
      ],
      "audioNarration": "Nghĩa thầy trò. Thầy giáo Chu Văn An dẫn các học trò đã làm quan lớn về quê chúc thọ cụ đồ già đã dạy chữ cho thầy thuở xưa, thể hiện truyền thống \"Tôn sư trọng đạo\" cao quý của dân tộc Việt Nam.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 34, 35 — Nghĩa thầy trò",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b18-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Nghĩa thầy trò\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Nghĩa thầy trò\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b19": {
    "passage": {
      "title": "Tranh làng Hồ",
      "author": "Nguyễn Tuân",
      "genre": "prose",
      "content": [
        "Tranh làng Hồ là tinh hoa nghệ thuật dân gian độc đáo của dân tộc. Những nghệ nhân tài hoa đã khắc họa hình ảnh lợn âm dương, đám cưới chuột trên giấy điệp óng ánh sắc màu dân tộc."
      ],
      "audioNarration": "Tranh làng Hồ. Tranh làng Hồ là tinh hoa nghệ thuật dân gian độc đáo của dân tộc. Những nghệ nhân tài hoa đã khắc họa hình ảnh lợn âm dương, đám cưới chuột trên giấy điệp óng ánh sắc màu dân tộc.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 40, 41 — Tranh làng Hồ",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b19-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Tranh làng Hồ\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Tranh làng Hồ\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b20": {
    "passage": {
      "title": "Đất nước",
      "author": "Nguyễn Đình Thi",
      "genre": "prose",
      "content": [
        "Mùa thu nay khác rồi, tôi đứng vui nghe giữa núi đồi. Gió thổi rừng tre phấp phới, trời thu thay áo mới, trong biếc nói cười thiết tha. Nước chúng ta, nước những người chưa bao giờ khuất!"
      ],
      "audioNarration": "Đất nước. Mùa thu nay khác rồi, tôi đứng vui nghe giữa núi đồi. Gió thổi rừng tre phấp phới, trời thu thay áo mới, trong biếc nói cười thiết tha. Nước chúng ta, nước những người chưa bao giờ khuất!",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 46, 47 — Đất nước",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b20-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Đất nước\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Đất nước\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b21": {
    "passage": {
      "title": "Út Vịnh",
      "author": "SGK Tiếng Việt 5",
      "genre": "prose",
      "content": [
        "Bạn nhỏ Út Vịnh không màng hiểm nguy, dũng cảm lao ra giữa đường ray kéo hai em nhỏ thoát khỏi lưỡi hái tử thần của đoàn tàu hỏa đang lao tới với tốc độ kinh hoàng."
      ],
      "audioNarration": "Út Vịnh. Bạn nhỏ Út Vịnh không màng hiểm nguy, dũng cảm lao ra giữa đường ray kéo hai em nhỏ thoát khỏi lưỡi hái tử thần của đoàn tàu hỏa đang lao tới với tốc độ kinh hoàng.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 52, 53 — Út Vịnh",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b21-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Út Vịnh\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Út Vịnh\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b22": {
    "passage": {
      "title": "Những cánh buồm",
      "author": "Hoàng Trung Thông",
      "genre": "prose",
      "content": [
        "Hai cha con bước đi trên bãi cát mịn màng. Cậu bé ngước nhìn những cánh buồm trắng xa xăm và mơ ước được đi đến những chân trời mới lạ của đại dương bao la."
      ],
      "audioNarration": "Những cánh buồm. Hai cha con bước đi trên bãi cát mịn màng. Cậu bé ngước nhìn những cánh buồm trắng xa xăm và mơ ước được đi đến những chân trời mới lạ của đại dương bao la.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 58, 59 — Những cánh buồm",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b22-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Những cánh buồm\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Những cánh buồm\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b23": {
    "passage": {
      "title": "Bầm ơi",
      "author": "Tố Hữu",
      "genre": "prose",
      "content": [
        "Bầm ơi có rét tình quê, bầm thương con bầm chớ lo nhiều. Con đi trăm núi ngàn khe, chưa bằng muôn nỗi tái tê lòng bầm. Tình mẫu tử thiêng liêng hòa cùng tình yêu Tổ quốc vĩ đại."
      ],
      "audioNarration": "Bầm ơi. Bầm ơi có rét tình quê, bầm thương con bầm chớ lo nhiều. Con đi trăm núi ngàn khe, chưa bằng muôn nỗi tái tê lòng bầm. Tình mẫu tử thiêng liêng hòa cùng tình yêu Tổ quốc vĩ đại.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 64, 65 — Bầm ơi",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b23-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Bầm ơi\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Bầm ơi\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b24": {
    "passage": {
      "title": "Buổi sáng trên bãi biển",
      "author": "SGK Tiếng Việt 5",
      "genre": "prose",
      "content": [
        "Mặt trời đỏ rực như quả cầu lửa khổng lồ từ từ nhô lên từ lòng biển cả, nhuộm hồng những cánh buồm căng gió và sóng biển lấp lánh muôn ngàn vảy bạc."
      ],
      "audioNarration": "Buổi sáng trên bãi biển. Mặt trời đỏ rực như quả cầu lửa khổng lồ từ từ nhô lên từ lòng biển cả, nhuộm hồng những cánh buồm căng gió và sóng biển lấp lánh muôn ngàn vảy bạc.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "Tập 2 — Trang 70, 71 — Buổi sáng trên bãi biển",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b24-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Buổi sáng trên bãi biển\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Buổi sáng trên bãi biển\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g5-b25": {
    "passage": {
      "title": "Đấu trường Vinh danh Trạng Nguyên Toàn Cấp",
      "author": "WonderKids",
      "genre": "prose",
      "content": [
        "Vinh danh các Trạng Nguyên xuất sắc đã hoàn thành trọn vẹn chương trình Tiểu học (Lớp 1-5). Chúc các em luôn tự tin, tỏa sáng và bay cao trên con đường chinh phục tri thức tương lai!"
      ],
      "audioNarration": "Đấu trường Vinh danh Trạng Nguyên Toàn Cấp. Vinh danh các Trạng Nguyên xuất sắc đã hoàn thành trọn vẹn chương trình Tiểu học (Lớp 1-5). Chúc các em luôn tự tin, tỏa sáng và bay cao trên con đường chinh phục tri thức tương lai!",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Chính trực, đặt lợi ích chung lên trên hết."
        }
      ]
    },
    "sourceType": "pedagogical_supplement",
    "sourceBook": "Đấu trường Đánh giá Năng lực Toàn cấp — WonderKids",
    "sourceDetail": "Tốt nghiệp Tiểu học — Đấu trường Vinh danh Trạng Nguyên Toàn Cấp",
    "pedagogicalObjective": "Hoàn thiện chuẩn đầu ra năng lực đọc hiểu và cảm thụ văn học toàn cấp Tiểu học.",
    "questions": [
      {
        "id": "tv-g5-b25-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Đấu trường Vinh danh Trạng Nguyên Toàn Cấp\" mang lại bài học sâu sắc gì?",
        "audioText": "Tác phẩm \"Đấu trường Vinh danh Trạng Nguyên Toàn Cấp\" mang lại bài học sâu sắc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước và đạo lý tốt đẹp của dân tộc 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  }
};
