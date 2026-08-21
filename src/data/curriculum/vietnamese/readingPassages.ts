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
      "author": "SGK Tiếng Việt 1 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Khám phá tranh: Nam và Hà ca hát.",
        "• Âm chữ cái: A a",
        "• Tiếng ứng dụng: ca, hát, Hà, ba, gà, lá",
        "• Nói và nghe: Chào hỏi lễ phép khi đến trường."
      ],
      "audioNarration": "Bài 1: A a. • Khám phá tranh: Nam và Hà ca hát. • Âm chữ cái: A a • Tiếng ứng dụng: ca, hát, Hà, ba, gà, lá • Nói và nghe: Chào hỏi lễ phép khi đến trường.",
      "vocabularyNotes": [
        {
          "word": "ca hát",
          "meaning": "Cùng nhau cất tiếng hát tươi vui, rộn ràng."
        },
        {
          "word": "chào hỏi",
          "meaning": "Lời chào lễ phép thể hiện sự kính trọng và thân thiện."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập một — Trang 14, 15 (Chủ điểm 1: Em là học sinh)",
    "pedagogicalObjective": "Nhận biết âm A, đọc đúng câu 'Nam và Hà ca hát', chào hỏi lễ phép.",
    "questions": [
      {
        "id": "tv-g1-b1-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Trong tranh nhận biết bài 1, Nam và Hà đang làm gì?",
        "audioText": "Trong tranh nhận biết bài 1, Nam và Hà đang làm gì?",
        "options": [
          {
            "id": "a",
            "label": "Nam và Hà ca hát 🎤",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nam và Hà đá bóng"
          },
          {
            "id": "c",
            "label": "Nam và Hà tập vẽ"
          }
        ]
      }
    ]
  },
  "tv-g1-b2": {
    "passage": {
      "title": "Bài 2: B b",
      "author": "SGK Tiếng Việt 1 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Khám phá tranh: Bé và bà bế bé.",
        "• Âm chữ cái: B b",
        "• Ghép tiếng: b - a -> ba; b - e -> be; b - ê -> bê",
        "• Từ ngữ ứng dụng: ba, bà, bé, bế, bể, con bê"
      ],
      "audioNarration": "Bài 2: B b. • Khám phá tranh: Bé và bà bế bé. • Âm chữ cái: B b • Ghép tiếng: b - a -> ba; b - e -> be; b - ê -> bê • Từ ngữ ứng dụng: ba, bà, bé, bế, bể, con bê",
      "vocabularyNotes": [
        {
          "word": "bế",
          "meaning": "Nâng đỡ và ẵm bé bằng hai tay yêu thương."
        },
        {
          "word": "con bê",
          "meaning": "Con của con bò khi còn non, nhỏ nhắn dễ thương."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập một — Trang 16, 17",
    "pedagogicalObjective": "Nhận biết âm B, ghép tiếng ba, be, bê và đọc từ ngữ ứng dụng.",
    "questions": [
      {
        "id": "tv-g1-b2-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Trong câu nhận biết của bài 2, ai bế bé?",
        "audioText": "Trong câu nhận biết của bài 2, ai bế bé?",
        "options": [
          {
            "id": "a",
            "label": "Bà bế bé 👵",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Bạn nhỏ"
          },
          {
            "id": "c",
            "label": "Bác thợ mộc"
          }
        ]
      }
    ]
  },
  "tv-g1-b3": {
    "passage": {
      "title": "Bài 3: C c - D d - Đ đ",
      "author": "SGK Tiếng Việt 1 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Khám phá tranh: Cò, đỗ, dế, cá cờ.",
        "• Âm chữ cái: C c, D d, Đ đ",
        "• Tiếng ứng dụng: ca, cá, cà, da, dẻ, đò, đỏ, đỗ",
        "• Câu ứng dụng: Bà có cá cờ. Ba có quả dâu."
      ],
      "audioNarration": "Bài 3: C c - D d - Đ đ. • Khám phá tranh: Cò, đỗ, dế, cá cờ. • Âm chữ cái: C c, D d, Đ đ • Tiếng ứng dụng: ca, cá, cà, da, dẻ, đò, đỏ, đỗ • Câu ứng dụng: Bà có cá cờ. Ba có quả dâu.",
      "vocabularyNotes": [
        {
          "word": "cá cờ",
          "meaning": "Loài cá nhỏ có vây xòe đẹp mắt như lá cờ."
        },
        {
          "word": "con dế",
          "meaning": "Con côn trùng nhỏ có chân nhảy khỏe, tiếng kêu ri ri."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập một — Trang 18, 19",
    "pedagogicalObjective": "Phân biệt âm C, D, Đ, ghép tiếng và đọc câu ứng dụng chuẩn SGK.",
    "questions": [
      {
        "id": "tv-g1-b3-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Tiếng nào sau đây có chứa âm Đ?",
        "audioText": "Tiếng nào sau đây có chứa âm Đ?",
        "options": [
          {
            "id": "a",
            "label": "Đò, đỏ, đỗ ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Cá, ca"
          },
          {
            "id": "c",
            "label": "Da, dẻ"
          }
        ]
      }
    ]
  },
  "tv-g1-b4": {
    "passage": {
      "title": "Bài 4: E e - Ê ê",
      "author": "SGK Tiếng Việt 1 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Khám phá tranh: Bé vẽ quả lê.",
        "• Âm chữ cái: E e, Ê ê",
        "• Ghép tiếng: b - e -> be, b - e - sắc -> bé; b - ê -> bê, b - ê - sắc -> bế",
        "• Câu ứng dụng: Bà bế bé. Bé xem con bê."
      ],
      "audioNarration": "Bài 4: E e - Ê ê. • Khám phá tranh: Bé vẽ quả lê. • Âm chữ cái: E e, Ê ê • Ghép tiếng: b - e -> be, b - e - sắc -> bé; b - ê -> bê, b - ê - sắc -> bế • Câu ứng dụng: Bà bế bé. Bé xem con bê.",
      "vocabularyNotes": [
        {
          "word": "quả lê",
          "meaning": "Loại quả ngọt thanh, mọng nước, vỏ màu xanh vàng."
        },
        {
          "word": "vẽ",
          "meaning": "Dùng bút màu thể hiện hình ảnh lên trang giấy trắng."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập một — Trang 20, 21",
    "pedagogicalObjective": "Nhận biết âm E, Ê, quy tắc đánh vần có dấu thanh bé/bế.",
    "questions": [
      {
        "id": "tv-g1-b4-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Trong câu nhận biết của bài 4, bé đang vẽ quả gì?",
        "audioText": "Trong câu nhận biết của bài 4, bé đang vẽ quả gì?",
        "options": [
          {
            "id": "a",
            "label": "Bé vẽ quả lê 🍐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Bé vẽ quả dừa"
          },
          {
            "id": "c",
            "label": "Bé vẽ quả na"
          }
        ]
      }
    ]
  },
  "tv-g1-b5": {
    "passage": {
      "title": "Bài 5: Ôn tập và kể chuyện",
      "author": "SGK Tiếng Việt 1 Tập một — NXB Giáo Dục Việt Nam",
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
          "meaning": "Đọc và rèn luyện lại để ghi nhớ vững vàng các âm chữ đã học."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập một — Trang 22, 23",
    "pedagogicalObjective": "Tổng hợp và củng cố các âm chữ cái tuần 1, luyện đọc trôi chảy câu ngắn.",
    "questions": [
      {
        "id": "tv-g1-b5-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Bài học số 5 giúp các bạn nhỏ làm điều gì?",
        "audioText": "Bài học số 5 giúp các bạn nhỏ làm điều gì?",
        "options": [
          {
            "id": "a",
            "label": "Ôn tập chắc chắn các âm chữ cái đầu tiên và nghe kể chuyện 📖",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học múa"
          },
          {
            "id": "c",
            "label": "Học vẽ tranh"
          }
        ]
      }
    ]
  },
  "tv-g1-b6": {
    "passage": {
      "title": "Bài 6: O o",
      "author": "SGK Tiếng Việt 1 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Khám phá tranh: Bò bê có cỏ, bò bê no nê.",
        "• Âm: O o",
        "• Tiếng ứng dụng: bo, bò, bó, bọ, cọ, cỏ, cờ",
        "• Nói: Các con vật nuôi trong gia đình."
      ],
      "audioNarration": "Bài 6: O o. • Khám phá tranh: Bò bê có cỏ, bò bê no nê. • Âm: O o • Tiếng ứng dụng: bo, bò, bó, bọ, cọ, cỏ, cờ • Nói: Các con vật nuôi trong gia đình.",
      "vocabularyNotes": [
        {
          "word": "no nê",
          "meaning": "Ăn uống đầy đủ, no bụng."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập một — Trang 24, 25",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo chương trình GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b6-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nội dung trọng tâm của bài học Bài 6: O o là gì?",
        "audioText": "Nội dung trọng tâm của bài học Bài 6: O o là gì?",
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa"
          },
          {
            "id": "c",
            "label": "Chơi trò chơi điện tử"
          }
        ]
      }
    ]
  },
  "tv-g1-b7": {
    "passage": {
      "title": "Bài 7: Ô ô - Ơ ơ",
      "author": "SGK Tiếng Việt 1 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Khám phá tranh: Bố mẹ cho bé đi ca nô.",
        "• Âm: Ô ô, Ơ ơ",
        "• Tiếng ứng dụng: cô, cỗ, bơ, nơ, cờ, mỡ",
        "• Câu ứng dụng: Bé có nơ đỏ. Bố có ca nô."
      ],
      "audioNarration": "Bài 7: Ô ô - Ơ ơ. • Khám phá tranh: Bố mẹ cho bé đi ca nô. • Âm: Ô ô, Ơ ơ • Tiếng ứng dụng: cô, cỗ, bơ, nơ, cờ, mỡ • Câu ứng dụng: Bé có nơ đỏ. Bố có ca nô.",
      "vocabularyNotes": [
        {
          "word": "ca nô",
          "meaning": "Thuyền máy cỡ nhỏ chạy lướt nhanh trên mặt nước."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập một — Trang 26, 27",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo chương trình GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b7-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nội dung trọng tâm của bài học Bài 7: Ô ô - Ơ ơ là gì?",
        "audioText": "Nội dung trọng tâm của bài học Bài 7: Ô ô - Ơ ơ là gì?",
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa"
          },
          {
            "id": "c",
            "label": "Chơi trò chơi điện tử"
          }
        ]
      }
    ]
  },
  "tv-g1-b8": {
    "passage": {
      "title": "Bài 8: I i - K k",
      "author": "SGK Tiếng Việt 1 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Khám phá tranh: Bé kể chuyện cổ tích cho bà nghe.",
        "• Âm: I i, K k (luật k đi với i, e, ê)",
        "• Tiếng ứng dụng: bi, bí, bì, kè, kẻ, kẽ",
        "• Câu ứng dụng: Bé bi bô kể chuyện."
      ],
      "audioNarration": "Bài 8: I i - K k. • Khám phá tranh: Bé kể chuyện cổ tích cho bà nghe. • Âm: I i, K k (luật k đi với i, e, ê) • Tiếng ứng dụng: bi, bí, bì, kè, kẻ, kẽ • Câu ứng dụng: Bé bi bô kể chuyện.",
      "vocabularyNotes": [
        {
          "word": "bi bô",
          "meaning": "Giọng nói ngây thơ, đáng yêu của trẻ nhỏ."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập một — Trang 28, 29",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo chương trình GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b8-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nội dung trọng tâm của bài học Bài 8: I i - K k là gì?",
        "audioText": "Nội dung trọng tâm của bài học Bài 8: I i - K k là gì?",
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa"
          },
          {
            "id": "c",
            "label": "Chơi trò chơi điện tử"
          }
        ]
      }
    ]
  },
  "tv-g1-b9": {
    "passage": {
      "title": "Bài 9: U u - Ư ư",
      "author": "SGK Tiếng Việt 1 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Khám phá tranh: Bà cho bé quả đu đủ chín vàng.",
        "• Âm: U u, Ư ư",
        "• Tiếng ứng dụng: đu, đủ, cừ, thư, nụ, củ",
        "• Câu ứng dụng: Bé có củ từ. Bà có đu đủ chín."
      ],
      "audioNarration": "Bài 9: U u - Ư ư. • Khám phá tranh: Bà cho bé quả đu đủ chín vàng. • Âm: U u, Ư ư • Tiếng ứng dụng: đu, đủ, cừ, thư, nụ, củ • Câu ứng dụng: Bé có củ từ. Bà có đu đủ chín.",
      "vocabularyNotes": [
        {
          "word": "đu đủ",
          "meaning": "Quả chín có màu vàng cam, ruột mềm ngọt."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập một — Trang 30, 31",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo chương trình GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b9-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nội dung trọng tâm của bài học Bài 9: U u - Ư ư là gì?",
        "audioText": "Nội dung trọng tâm của bài học Bài 9: U u - Ư ư là gì?",
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa"
          },
          {
            "id": "c",
            "label": "Chơi trò chơi điện tử"
          }
        ]
      }
    ]
  },
  "tv-g1-b10": {
    "passage": {
      "title": "Bài 10: Ôn tập âm chữ cái",
      "author": "SGK Tiếng Việt 1 Tập một — NXB Giáo Dục Việt Nam",
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
          "meaning": "Vẻ mặt rạng rỡ, tươi vui lộ rõ ra ngoài."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập một — Trang 32, 33",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo chương trình GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b10-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nội dung trọng tâm của bài học Bài 10: Ôn tập âm chữ cái là gì?",
        "audioText": "Nội dung trọng tâm của bài học Bài 10: Ôn tập âm chữ cái là gì?",
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa"
          },
          {
            "id": "c",
            "label": "Chơi trò chơi điện tử"
          }
        ]
      }
    ]
  },
  "tv-g1-b11": {
    "passage": {
      "title": "Bài 11: L l - M m",
      "author": "SGK Tiếng Việt 1 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Khám phá tranh: Mẹ mua lê và mận thơm ngon cho bé.",
        "• Âm: L l, M m",
        "• Tiếng ứng dụng: la, lá, me, mẹ, mỏ, mơ",
        "• Câu ứng dụng: Mẹ bế bé ra vườn ngắm hoa mai."
      ],
      "audioNarration": "Bài 11: L l - M m. • Khám phá tranh: Mẹ mua lê và mận thơm ngon cho bé. • Âm: L l, M m • Tiếng ứng dụng: la, lá, me, mẹ, mỏ, mơ • Câu ứng dụng: Mẹ bế bé ra vườn ngắm hoa mai.",
      "vocabularyNotes": [
        {
          "word": "quả mận",
          "meaning": "Quả nhỏ vỏ đỏ tím, vị giòn ngọt thanh mát."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập một — Trang 34, 35",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo chương trình GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b11-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nội dung trọng tâm của bài học Bài 11: L l - M m là gì?",
        "audioText": "Nội dung trọng tâm của bài học Bài 11: L l - M m là gì?",
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa"
          },
          {
            "id": "c",
            "label": "Chơi trò chơi điện tử"
          }
        ]
      }
    ]
  },
  "tv-g1-b12": {
    "passage": {
      "title": "Bài 12: N n - P p",
      "author": "SGK Tiếng Việt 1 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Khám phá tranh: Nụ hoa hồng nở rộ đón nắng mai.",
        "• Âm: N n, P p",
        "• Tiếng ứng dụng: nơ, nụ, nẻ, pa-nô, pin",
        "• Câu ứng dụng: Bé chỉ vào pa-nô rực rỡ cờ hoa."
      ],
      "audioNarration": "Bài 12: N n - P p. • Khám phá tranh: Nụ hoa hồng nở rộ đón nắng mai. • Âm: N n, P p • Tiếng ứng dụng: nơ, nụ, nẻ, pa-nô, pin • Câu ứng dụng: Bé chỉ vào pa-nô rực rỡ cờ hoa.",
      "vocabularyNotes": [
        {
          "word": "pa-nô",
          "meaning": "Tấm bảng lớn vẽ tranh hoặc khẩu hiệu trang trí."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập một — Trang 36, 37",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo chương trình GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b12-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nội dung trọng tâm của bài học Bài 12: N n - P p là gì?",
        "audioText": "Nội dung trọng tâm của bài học Bài 12: N n - P p là gì?",
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa"
          },
          {
            "id": "c",
            "label": "Chơi trò chơi điện tử"
          }
        ]
      }
    ]
  },
  "tv-g1-b13": {
    "passage": {
      "title": "Bài 13: R r - S s",
      "author": "SGK Tiếng Việt 1 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Khám phá tranh: Rùa và sáo là đôi bạn thân thiết.",
        "• Âm: R r, S s",
        "• Tiếng ứng dụng: rổ, rá, rễ, sẻ, sa, sơ",
        "• Câu ứng dụng: Mẹ có rổ cá rô tươi ngon."
      ],
      "audioNarration": "Bài 13: R r - S s. • Khám phá tranh: Rùa và sáo là đôi bạn thân thiết. • Âm: R r, S s • Tiếng ứng dụng: rổ, rá, rễ, sẻ, sa, sơ • Câu ứng dụng: Mẹ có rổ cá rô tươi ngon.",
      "vocabularyNotes": [
        {
          "word": "cá rô",
          "meaning": "Loài cá nước ngọt vây sắc, thịt thơm ngon."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập một — Trang 38, 39",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo chương trình GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b13-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nội dung trọng tâm của bài học Bài 13: R r - S s là gì?",
        "audioText": "Nội dung trọng tâm của bài học Bài 13: R r - S s là gì?",
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa"
          },
          {
            "id": "c",
            "label": "Chơi trò chơi điện tử"
          }
        ]
      }
    ]
  },
  "tv-g1-b14": {
    "passage": {
      "title": "Bài 14: T t - Th th",
      "author": "SGK Tiếng Việt 1 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Khám phá tranh: Thỏ con nhảy nhót bên bụi tre.",
        "• Âm: T t, Th th",
        "• Tiếng ứng dụng: tơ, tư, tổ, thỏ, thìa, thủ",
        "• Câu ứng dụng: Bé tô chữ t, thỏ con ăn củ cà rốt."
      ],
      "audioNarration": "Bài 14: T t - Th th. • Khám phá tranh: Thỏ con nhảy nhót bên bụi tre. • Âm: T t, Th th • Tiếng ứng dụng: tơ, tư, tổ, thỏ, thìa, thủ • Câu ứng dụng: Bé tô chữ t, thỏ con ăn củ cà rốt.",
      "vocabularyNotes": [
        {
          "word": "thìa",
          "meaning": "Dụng cụ múc thức ăn bằng inox hoặc nhựa."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập một — Trang 40, 41",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo chương trình GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b14-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nội dung trọng tâm của bài học Bài 14: T t - Th th là gì?",
        "audioText": "Nội dung trọng tâm của bài học Bài 14: T t - Th th là gì?",
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa"
          },
          {
            "id": "c",
            "label": "Chơi trò chơi điện tử"
          }
        ]
      }
    ]
  },
  "tv-g1-b15": {
    "passage": {
      "title": "Bài 15: V v - X x",
      "author": "SGK Tiếng Việt 1 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Khám phá tranh: Vườn cây xum xuê trĩu quả ngọt.",
        "• Âm: V v, X x",
        "• Tiếng ứng dụng: ve, vú sữa, xe, xôi, xả",
        "• Câu ứng dụng: Bé đi xe đạp trong vườn hoa xanh mát."
      ],
      "audioNarration": "Bài 15: V v - X x. • Khám phá tranh: Vườn cây xum xuê trĩu quả ngọt. • Âm: V v, X x • Tiếng ứng dụng: ve, vú sữa, xe, xôi, xả • Câu ứng dụng: Bé đi xe đạp trong vườn hoa xanh mát.",
      "vocabularyNotes": [
        {
          "word": "xum xuê",
          "meaning": "Cây cối cành lá rậm rạp, nhiều hoa quả tốt tươi."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập một — Trang 42, 43",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo chương trình GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b15-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nội dung trọng tâm của bài học Bài 15: V v - X x là gì?",
        "audioText": "Nội dung trọng tâm của bài học Bài 15: V v - X x là gì?",
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa"
          },
          {
            "id": "c",
            "label": "Chơi trò chơi điện tử"
          }
        ]
      }
    ]
  },
  "tv-g1-b16": {
    "passage": {
      "title": "Bài 16: Ch ch - Kh kh",
      "author": "SGK Tiếng Việt 1 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Khám phá tranh: Chú khỉ trèo cây hái quả khế chua.",
        "• Âm: Ch ch, Kh kh",
        "• Tiếng ứng dụng: chó, chè, khỉ, khế, kho",
        "• Câu ứng dụng: Mẹ kho cá với khế chua thơm lừng."
      ],
      "audioNarration": "Bài 16: Ch ch - Kh kh. • Khám phá tranh: Chú khỉ trèo cây hái quả khế chua. • Âm: Ch ch, Kh kh • Tiếng ứng dụng: chó, chè, khỉ, khế, kho • Câu ứng dụng: Mẹ kho cá với khế chua thơm lừng.",
      "vocabularyNotes": [
        {
          "word": "quả khế",
          "meaning": "Quả có 5 múi hình ngôi sao, vị chua thanh mát."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập một — Trang 44, 45",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo chương trình GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b16-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nội dung trọng tâm của bài học Bài 16: Ch ch - Kh kh là gì?",
        "audioText": "Nội dung trọng tâm của bài học Bài 16: Ch ch - Kh kh là gì?",
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa"
          },
          {
            "id": "c",
            "label": "Chơi trò chơi điện tử"
          }
        ]
      }
    ]
  },
  "tv-g1-b17": {
    "passage": {
      "title": "Bài 17: Nh nh - Ng ng",
      "author": "SGK Tiếng Việt 1 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Khám phá tranh: Nhà bà có đàn gà con kêu chiêm chiếp.",
        "• Âm: Nh nh, Ng ng",
        "• Tiếng ứng dụng: nho, nhà, ngô, ngỗng, ngủ",
        "• Câu ứng dụng: Bà cho bé chùm nho tím ngọt ngào."
      ],
      "audioNarration": "Bài 17: Nh nh - Ng ng. • Khám phá tranh: Nhà bà có đàn gà con kêu chiêm chiếp. • Âm: Nh nh, Ng ng • Tiếng ứng dụng: nho, nhà, ngô, ngỗng, ngủ • Câu ứng dụng: Bà cho bé chùm nho tím ngọt ngào.",
      "vocabularyNotes": [
        {
          "word": "chùm nho",
          "meaning": "Nhiều quả nho tròn mọc kết thành từng chùm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập một — Trang 46, 47",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo chương trình GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b17-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nội dung trọng tâm của bài học Bài 17: Nh nh - Ng ng là gì?",
        "audioText": "Nội dung trọng tâm của bài học Bài 17: Nh nh - Ng ng là gì?",
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa"
          },
          {
            "id": "c",
            "label": "Chơi trò chơi điện tử"
          }
        ]
      }
    ]
  },
  "tv-g1-b18": {
    "passage": {
      "title": "Bài 18: Ngh ngh - Gh gh",
      "author": "SGK Tiếng Việt 1 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Khám phá tranh: Nghé con đứng dưới gốc cây gạo.",
        "• Âm: Ngh ngh, Gh gh (luật đi với e, ê, i)",
        "• Tiếng ứng dụng: nghé, nghỉ, nghe, ghế, ghi, gỗ",
        "• Câu ứng dụng: Bé ngồi trên ghế gỗ lắng nghe bà kể chuyện."
      ],
      "audioNarration": "Bài 18: Ngh ngh - Gh gh. • Khám phá tranh: Nghé con đứng dưới gốc cây gạo. • Âm: Ngh ngh, Gh gh (luật đi với e, ê, i) • Tiếng ứng dụng: nghé, nghỉ, nghe, ghế, ghi, gỗ • Câu ứng dụng: Bé ngồi trên ghế gỗ lắng nghe bà kể chuyện.",
      "vocabularyNotes": [
        {
          "word": "nghé con",
          "meaning": "Con của con trâu khi còn non."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập một — Trang 48, 49",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo chương trình GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b18-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nội dung trọng tâm của bài học Bài 18: Ngh ngh - Gh gh là gì?",
        "audioText": "Nội dung trọng tâm của bài học Bài 18: Ngh ngh - Gh gh là gì?",
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa"
          },
          {
            "id": "c",
            "label": "Chơi trò chơi điện tử"
          }
        ]
      }
    ]
  },
  "tv-g1-b19": {
    "passage": {
      "title": "Bài 19: An an - At at",
      "author": "SGK Tiếng Việt 1 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "• Khám phá tranh: Các bạn nhỏ tan học vui vẻ bước ra cổng trường.",
        "• Vần: An an, At at",
        "• Tiếng ứng dụng: bạn, bàn, đàn, bát, hạt, cát",
        "• Câu ứng dụng: Đàn chim én bay lượn trên bãi cát vàng."
      ],
      "audioNarration": "Bài 19: An an - At at. • Khám phá tranh: Các bạn nhỏ tan học vui vẻ bước ra cổng trường. • Vần: An an, At at • Tiếng ứng dụng: bạn, bàn, đàn, bát, hạt, cát • Câu ứng dụng: Đàn chim én bay lượn trên bãi cát vàng.",
      "vocabularyNotes": [
        {
          "word": "tan học",
          "meaning": "Hết giờ học, học sinh được ra về."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập một — Trang 52, 53",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo chương trình GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b19-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nội dung trọng tâm của bài học Bài 19: An an - At at là gì?",
        "audioText": "Nội dung trọng tâm của bài học Bài 19: An an - At at là gì?",
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa"
          },
          {
            "id": "c",
            "label": "Chơi trò chơi điện tử"
          }
        ]
      }
    ]
  },
  "tv-g1-b20": {
    "passage": {
      "title": "Bài 20: Ôn tập cuối Học kì 1",
      "author": "SGK Tiếng Việt 1 Tập một — NXB Giáo Dục Việt Nam",
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
    "sourceBook": "SGK Tiếng Việt 1 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập một — Trang 88, 89",
    "pedagogicalObjective": "Chuẩn hóa kiến thức âm vần Lớp 1 theo chương trình GDPT 2018.",
    "questions": [
      {
        "id": "tv-g1-b20-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nội dung trọng tâm của bài học Bài 20: Ôn tập cuối Học kì 1 là gì?",
        "audioText": "Nội dung trọng tâm của bài học Bài 20: Ôn tập cuối Học kì 1 là gì?",
        "options": [
          {
            "id": "a",
            "label": "Học âm vần và câu ứng dụng chuẩn SGK Kết nối tri thức 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học nhảy múa"
          },
          {
            "id": "c",
            "label": "Chơi trò chơi điện tử"
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
    "sourceDetail": "SGK Tiếng Việt 1 Tập hai — Trang 10, 11 (Chủ điểm 1: Tôi và các bạn)",
    "pedagogicalObjective": "Đọc trôi chảy toàn bài, hiểu niềm tự hào và sự trưởng thành của học sinh lớp 1 khi mang đồng phục trường Lê Quý Đôn.",
    "questions": [
      {
        "id": "tv-g1-b21-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Trong bài đọc, bạn Nam học lớp mấy, trường nào?",
        "audioText": "Trong bài đọc, bạn Nam học lớp mấy, trường nào?",
        "options": [
          {
            "id": "a",
            "label": "Lớp 1A, Trường Tiểu học Lê Quý Đôn 🏫",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Lớp 2B, Trường Tiểu học Kim Đồng"
          },
          {
            "id": "c",
            "label": "Lớp 3C, Trường Tiểu học Chu Văn An"
          }
        ]
      },
      {
        "id": "tv-g1-b21-q2",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Ngày đầu đi học, mặc bộ đồng phục của trường, Nam cảm thấy thế nào?",
        "audioText": "Ngày đầu đi học, mặc bộ đồng phục của trường, Nam cảm thấy thế nào?",
        "options": [
          {
            "id": "a",
            "label": "Nam thấy hãnh diện lắm ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nam thấy sợ hãi"
          },
          {
            "id": "c",
            "label": "Nam khóc nhè"
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
        "Thỏ con có đôi tai vừa dài vừa to. Bạn bè thường trêu: \"Đôi tai cậu xấu xí quá!\". Thỏ con buồn lắm, liền về hỏi bố mẹ.",
        "Bố âu yếm bảo: \"Đôi tai dài giúp con nghe rõ mọi âm thanh từ xa đấy!\". Thỏ con vẫn chưa tin.",
        "Một hôm, các bạn mải chơi trong rừng. Bỗng thỏ con vểnh tai nghe ngóng rồi hét to: \"Có tiếng chân chó sói, chạy mau!\". Thế là cả đàn chạy thoát vào bụi cây rậm an toàn.",
        "Từ đó, không ai trêu đôi tai của thỏ con nữa. Các bạn đều khen đôi tai thỏ thật tuyệt vời."
      ],
      "audioNarration": "Bài 2: Đôi tai xấu xí. Thỏ con có đôi tai vừa dài vừa to. Bạn bè thường trêu: \"Đôi tai cậu xấu xí quá!\". Thỏ con buồn lắm, liền về hỏi bố mẹ. Bố âu yếm bảo: \"Đôi tai dài giúp con nghe rõ mọi âm thanh từ xa đấy!\". Thỏ con vẫn chưa tin. Một hôm, các bạn mải chơi trong rừng. Bỗng thỏ con vểnh tai nghe ngóng rồi hét to: \"Có tiếng chân chó sói, chạy mau!\". Thế là cả đàn chạy thoát vào bụi cây rậm an toàn. Từ đó, không ai trêu đôi tai của thỏ con nữa. Các bạn đều khen đôi tai thỏ thật tuyệt vời.",
      "vocabularyNotes": [
        {
          "word": "vểnh tai",
          "meaning": "Đưa tai hướng về phía có âm thanh để lắng nghe rõ hơn."
        },
        {
          "word": "nghe ngóng",
          "meaning": "Chú ý lắng nghe xem có điều gì lạ xảy ra xung quanh."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập hai — Trang 14, 15 (Chủ điểm 1: Tôi và các bạn)",
    "pedagogicalObjective": "Hiểu được mỗi bạn đều có đặc điểm riêng đáng quý, tự tin vào bản thân.",
    "questions": [
      {
        "id": "tv-g1-b22-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nhờ điều gì mà thỏ con đã cứu cả đàn bạn thoát khỏi chó sói?",
        "audioText": "Nhờ điều gì mà thỏ con đã cứu cả đàn bạn thoát khỏi chó sói?",
        "options": [
          {
            "id": "a",
            "label": "Nhờ đôi tai dài thính nhạy nghe thấy tiếng sói từ xa 🐰",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nhờ chạy nhanh nhất rừng"
          },
          {
            "id": "c",
            "label": "Nhờ biết bay lên cây"
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
      "audioNarration": "Bài 3: Bạn của gió. Ai là bạn của gió? Cánh buồm no gió khơi Đẩy con thuyền lướt sóng Đi khắp bốn phương trời. Ai là bạn của gió? Cánh diều biếc trời mây Bay bổng cùng tiếng sáo Trong nắng mai ngập tràn. Gió mang hương của lúa Gió quạt mát trưa hè Gió thổi bừng ngọn lửa Sưởi ấm đêm mùa đông.",
      "vocabularyNotes": [
        {
          "word": "no gió",
          "meaning": "Căng tròn vì đón đầy sức gió thổi vào."
        },
        {
          "word": "bay bổng",
          "meaning": "Bay lượn nhẹ nhàng và vút lên cao giữa bầu trời."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập hai — Trang 18, 19 (Chủ điểm 2: Thế giới quanh em)",
    "pedagogicalObjective": "Đọc diễn cảm bài thơ, cảm nhận vẻ đẹp và sự hữu ích của gió trong thiên nhiên.",
    "questions": [
      {
        "id": "tv-g1-b23-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Theo bài thơ, những sự vật nào là bạn thân thiết của gió?",
        "audioText": "Theo bài thơ, những sự vật nào là bạn thân thiết của gió?",
        "options": [
          {
            "id": "a",
            "label": "Cánh buồm và cánh diều biếc trời mây ⛵🪁",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Hòn đá dưới suối"
          },
          {
            "id": "c",
            "label": "Chiếc xe đạp"
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
          "meaning": "Giữ gìn sạch sẽ để bảo vệ sức khỏe phòng tránh bệnh tật."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập hai — Trang 22, 23 (Chủ điểm 3: Giữ gìn vệ sinh thân thể)",
    "pedagogicalObjective": "Rèn luyện thói quen giữ gìn vệ sinh thân thể, bảo vệ sức khỏe cho học sinh lớp 1.",
    "questions": [
      {
        "id": "tv-g1-b24-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Em cần rửa tay bằng xà phòng vào những lúc nào?",
        "audioText": "Em cần rửa tay bằng xà phòng vào những lúc nào?",
        "options": [
          {
            "id": "a",
            "label": "Trước khi ăn cơm và sau khi đi vệ sinh 🧼",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Chỉ khi nào tay dính mực"
          },
          {
            "id": "c",
            "label": "Không cần rửa tay"
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
      "audioNarration": "Bài 5: Lời chào. Đi về con chào mẹ Ra vườn chào cụ ông Đến trường chào cô giáo Lễ phép nở trong lòng. Lời chào như đóa hoa Nở trên môi em nhỏ Lời chào mang niềm vui Cho mọi người yêu quý. Ai cũng khen em ngoan Biết vâng lời, lễ phép Lời chào theo em mãi Suốt những tháng ngày vui.",
      "vocabularyNotes": [
        {
          "word": "lễ phép",
          "meaning": "Có thái độ và lời nói kính trọng đúng mực với người lớn."
        },
        {
          "word": "đóa hoa",
          "meaning": "Bông hoa tươi đẹp, ngát hương thơm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập hai — Trang 26, 27 (Chủ điểm 4: Lễ phép và văn minh)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, hình thành thói quen chào hỏi lễ phép mọi lúc mọi nơi.",
    "questions": [
      {
        "id": "tv-g1-b25-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Trong bài thơ của tác giả Phạm Cúc, lời chào được ví như gì?",
        "audioText": "Trong bài thơ của tác giả Phạm Cúc, lời chào được ví như gì?",
        "options": [
          {
            "id": "a",
            "label": "Lời chào như đóa hoa nở trên môi em nhỏ 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Như viên sỏi"
          },
          {
            "id": "c",
            "label": "Như ngọn gió"
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
      "audioNarration": "Bài 6: Mẹ và cô. Buổi sáng bé chào mẹ Chạy đến ôm cổ cô Buổi chiều bé chào cô Rồi sà vào lòng mẹ. Mặt trời mọc rồi lặn Trên đôi chân lon ton Hai chân trời của con Là mẹ và cô giáo.",
      "vocabularyNotes": [
        {
          "word": "sà vào",
          "meaning": "Chạy thật nhanh và ngả mình vào vòng tay yêu thương."
        },
        {
          "word": "lon ton",
          "meaning": "Dáng chạy bước ngắn, nhanh nhẹn, đáng yêu của trẻ nhỏ."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập hai — Trang 34, 35 (Chủ điểm 5: Mái trường mến yêu)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, cảm nhận tình cảm yêu thương của mẹ và cô giáo.",
    "questions": [
      {
        "id": "tv-g1-b26-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Theo bài thơ, 'hai chân trời của con' là những ai?",
        "audioText": "Theo bài thơ, 'hai chân trời của con' là những ai?",
        "options": [
          {
            "id": "a",
            "label": "Là Mẹ và Cô giáo 👩‍👧",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Là Búp bê và Gấu bông"
          },
          {
            "id": "c",
            "label": "Là Bạn bè cùng lớp"
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
          "meaning": "Tươi non, mượt mà và tràn đầy sức sống."
        },
        {
          "word": "khẳng khiu",
          "meaning": "Gầy gò, trơ cành lá nhưng vững vàng, cứng cáp."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập hai — Trang 42, 43 (Chủ điểm 5: Mái trường mến yêu)",
    "pedagogicalObjective": "Đọc hiểu đoạn văn miêu tả vẻ đẹp của cây bàng bốn mùa trong sân trường.",
    "questions": [
      {
        "id": "tv-g1-b27-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Vào mùa hè, tán bàng được nhà thơ Xuân Quỳnh so sánh với hình ảnh gì?",
        "audioText": "Vào mùa hè, tán bàng được nhà thơ Xuân Quỳnh so sánh với hình ảnh gì?",
        "options": [
          {
            "id": "a",
            "label": "Chiếc ô khổng lồ che bóng mát 🌳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Ngọn đuốc rực sáng"
          },
          {
            "id": "c",
            "label": "Tòa lâu đài nguy nga"
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
          "meaning": "Tài giỏi xuất chúng, vượt trội hơn người."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập hai — Trang 50, 51 (Chủ điểm 6: Truyện cổ tích)",
    "pedagogicalObjective": "Đọc hiểu truyện cổ tích, ca ngợi sự nhanh trí, bình tĩnh và thông minh của cậu bé.",
    "questions": [
      {
        "id": "tv-g1-b28-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Cậu bé đã dùng cách gì để giúp dân làng không bị phạt?",
        "audioText": "Cậu bé đã dùng cách gì để giúp dân làng không bị phạt?",
        "options": [
          {
            "id": "a",
            "label": "Đưa ra câu chuyện bố không đẻ được để vua nhận ra điều phi lý 💡",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Mua gà mái nộp thay"
          },
          {
            "id": "c",
            "label": "Bỏ trốn khỏi làng"
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
      "audioNarration": "Bài 9: Quê hương tươi đẹp. Quê hương em biết bao tươi đẹp Đồng lúa xanh dạt dào sóng lượn Con sông dài uốn quanh xóm nhỏ Thuyền xuôi ngược trong ánh bình minh. Nghe tiếng sáo diều vi vút bay Nghe câu hát ru ngọt ngào của mẹ Em yêu tha thiết đất nước mình Yêu từ mái nhà, rặng tre xanh biếc.",
      "vocabularyNotes": [
        {
          "word": "dạt dào",
          "meaning": "Tràn đầy, chuyển động nhịp nhàng, dâng trào cảm xúc."
        },
        {
          "word": "vi vút",
          "meaning": "Âm thanh tiếng sáo diều trong trẻo, vang xa trên tầng cao."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập hai — Trang 62, 63 (Chủ điểm 7: Quê hương đất nước)",
    "pedagogicalObjective": "Đọc diễn cảm bài đồng dao, bồi dưỡng tình yêu quê hương đất nước thiết tha.",
    "questions": [
      {
        "id": "tv-g1-b29-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Bài đồng dao miêu tả những cảnh đẹp nào của quê hương?",
        "audioText": "Bài đồng dao miêu tả những cảnh đẹp nào của quê hương?",
        "options": [
          {
            "id": "a",
            "label": "Đồng lúa xanh, dòng sông uốn quanh và tiếng sáo diều 🌾",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Thành phố cao ốc"
          },
          {
            "id": "c",
            "label": "Khu công nghiệp"
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
      "audioNarration": "Bài 10: Bác Hồ kính yêu. Tháp Mười đẹp nhất bông sen Việt Nam đẹp nhất có tên Bác Hồ. Bác Hồ là vị lãnh tụ muôn vàn kính yêu của dân tộc Việt Nam. Cả cuộc đời Bác luôn dành trọn tình yêu thương bao la cho các cháu thiếu niên nhi đồng. Bác dạy thiếu nhi năm điều quý báu: Yêu Tổ quốc, yêu đồng bào; Học tập tốt, lao động tốt; Đoàn kết tốt, kỷ luật tốt; Giữ gìn vệ sinh thật tốt; Khiêm tốn, thật thà, dũng cảm. Thiếu nhi Việt Nam luôn khắc ghi lời Bác dạy, chăm ngoan học giỏi để xứng đáng là cháu ngoan Bác Hồ.",
      "vocabularyNotes": [
        {
          "word": "lãnh tụ",
          "meaning": "Người đứng đầu tài ba, dẫn dắt dân tộc và đất nước."
        },
        {
          "word": "khắc ghi",
          "meaning": "Ghi nhớ sâu sắc trong lòng không bao giờ quên."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 1 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 1 Tập hai — Trang 74, 75 (Chủ điểm 7: Quê hương đất nước)",
    "pedagogicalObjective": "Hiểu tình yêu thương của Bác Hồ với thiếu nhi, học tập và rèn luyện theo 5 điều Bác dạy.",
    "questions": [
      {
        "id": "tv-g1-b30-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Câu thơ nổi tiếng nào ca ngợi Bác Hồ trong bài học?",
        "audioText": "Câu thơ nổi tiếng nào ca ngợi Bác Hồ trong bài học?",
        "options": [
          {
            "id": "a",
            "label": "Tháp Mười đẹp nhất bông sen / Việt Nam đẹp nhất có tên Bác Hồ 🌺",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Công cha như núi Thái Sơn"
          },
          {
            "id": "c",
            "label": "Bầu ơi thương lấy bí cùng"
          }
        ]
      }
    ]
  },
  "tv-g2-b1": {
    "passage": {
      "title": "Bài 1: Tôi là học sinh lớp 2",
      "author": "Phỏng theo SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Sáng sớm ngày khai trường, tôi thức dậy thật sớm. Mẹ âu yếm vuốt tóc tôi và nói: \"Chúc mừng con trai yêu đã chính thức trở thành học sinh lớp 2!\".",
        "Tôi mặc bộ đồng phục mới tinh, tinh tươm và sạch sẽ. Đứng trước gương, tôi thấy mình lớn hơn hẳn năm ngoái. Không còn rụt rè, bỡ ngỡ như ngày đầu bước vào lớp Một nữa.",
        "Đến trường, sân trường rợp bóng cờ hoa và rộn rã tiếng cười nói. Tôi nhìn thấy thầy cô mến yêu và gặp lại những người bạn thân thiết. Chúng tôi tíu tít kể cho nhau nghe về những chuyến đi chơi mùa hè kỳ thú.",
        "Hồi trống trường giòn giã vang lên: \"Tùng! Tùng! Tùng!\". Chúng tôi trang nghiêm xếp hàng bước vào lớp học mới. Tôi tự hào thầm nhủ: \"Mình đã là học sinh lớp 2, mình sẽ học thật chăm chỉ và yêu thương bạn bè!\"."
      ],
      "audioNarration": "Bài 1: Tôi là học sinh lớp 2. Sáng sớm ngày khai trường, tôi thức dậy thật sớm. Mẹ âu yếm vuốt tóc tôi và nói: \"Chúc mừng con trai yêu đã chính thức trở thành học sinh lớp 2!\". Tôi mặc bộ đồng phục mới tinh, tinh tươm và sạch sẽ. Đứng trước gương, tôi thấy mình lớn hơn hẳn năm ngoái. Không còn rụt rè, bỡ ngỡ như ngày đầu bước vào lớp Một nữa. Đến trường, sân trường rợp bóng cờ hoa và rộn rã tiếng cười nói. Tôi nhìn thấy thầy cô mến yêu và gặp lại những người bạn thân thiết. Chúng tôi tíu tít kể cho nhau nghe về những chuyến đi chơi mùa hè kỳ thú. Hồi trống trường giòn giã vang lên: \"Tùng! Tùng! Tùng!\". Chúng tôi trang nghiêm xếp hàng bước vào lớp học mới. Tôi tự hào thầm nhủ: \"Mình đã là học sinh lớp 2, mình sẽ học thật chăm chỉ và yêu thương bạn bè!\".",
      "vocabularyNotes": [
        {
          "word": "tinh tươm",
          "meaning": "Gọn gàng, sạch sẽ, tươm tất."
        },
        {
          "word": "bỡ ngỡ",
          "meaning": "Cảm giác lạ lẫm, chưa quen thuộc trong lần đầu tiên."
        },
        {
          "word": "tíu tít",
          "meaning": "Nói cười ríu rít, vui vẻ liên hồi."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập một — Trang 10, 11 (Chủ điểm 1: Em lớn lên từng ngày)",
    "pedagogicalObjective": "Đọc diễn cảm bài đọc ngày khai trường, cảm nhận niềm vui và sự tự tin khi bước vào lớp 2.",
    "questions": [
      {
        "id": "tv-g2-b1-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Đứng trước gương trong ngày khai trường, bạn nhỏ cảm thấy mình như thế nào?",
        "audioText": "Đứng trước gương trong ngày khai trường, bạn nhỏ cảm thấy mình như thế nào?",
        "options": [
          {
            "id": "a",
            "label": "Thấy mình lớn hơn hẳn năm ngoái, không còn rụt rè bỡ ngỡ ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Thấy mình vẫn bé bỏng như xưa"
          },
          {
            "id": "c",
            "label": "Thấy sợ hãi không muốn đến trường"
          }
        ]
      }
    ]
  },
  "tv-g2-b2": {
    "passage": {
      "title": "Bài 2: Ngày hôm qua đâu rồi?",
      "author": "Bế Kiến Quốc",
      "genre": "poem",
      "content": [
        "Em cầm tờ lịch cũ\n- Ngày hôm qua đâu rồi?\nRa ngoài sân hỏi nụ\nNụ vừa xòe sắc hoa.",
        "Nụ tỏa hương thì thào:\n- Ngày hôm qua ở lại\nTrên cành hoa trong vườn\nNụ mầm lớn lên mãi.",
        "Em vào bàn học tập\n- Ngày hôm qua đâu rồi?\nQuyển vở hồng trang mở\nTrang nghiêm nét chữ tươi.",
        "Mẹ mỉm cười âu yếm:\n- Ngày hôm qua ở lại\nTrong hạt lúa mẹ trồng\nCánh đồng chờ gặt hái.",
        "- Ngày hôm qua ở lại\nTrong vở hồng của con\nCon học hành chăm chỉ\nLà ngày qua vẫn còn."
      ],
      "audioNarration": "Bài 2: Ngày hôm qua đâu rồi?. Em cầm tờ lịch cũ - Ngày hôm qua đâu rồi? Ra ngoài sân hỏi nụ Nụ vừa xòe sắc hoa. Nụ tỏa hương thì thào: - Ngày hôm qua ở lại Trên cành hoa trong vườn Nụ mầm lớn lên mãi. Em vào bàn học tập - Ngày hôm qua đâu rồi? Quyển vở hồng trang mở Trang nghiêm nét chữ tươi. Mẹ mỉm cười âu yếm: - Ngày hôm qua ở lại Trong hạt lúa mẹ trồng Cánh đồng chờ gặt hái. - Ngày hôm qua ở lại Trong vở hồng của con Con học hành chăm chỉ Là ngày qua vẫn còn.",
      "vocabularyNotes": [
        {
          "word": "tỏa hương",
          "meaning": "Bay lan tỏa mùi thơm ngát ra xung quanh."
        },
        {
          "word": "gặt hái",
          "meaning": "Thu hoạch lúa chín trên cánh đồng."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập một — Trang 14, 15 (Chủ điểm 1: Em lớn lên từng ngày)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, hiểu được giá trị của thời gian và ý nghĩa của việc chăm chỉ học tập mỗi ngày.",
    "questions": [
      {
        "id": "tv-g2-b2-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Theo lời mẹ, 'ngày hôm qua' ở lại trong những điều gì?",
        "audioText": "Theo lời mẹ, 'ngày hôm qua' ở lại trong những điều gì?",
        "options": [
          {
            "id": "a",
            "label": "Trong hạt lúa mẹ trồng và trong vở hồng chăm ngoan của con 🌾📖",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Trong chiếc tivi"
          },
          {
            "id": "c",
            "label": "Đã biến mất không còn dấu vết"
          }
        ]
      }
    ]
  },
  "tv-g2-b3": {
    "passage": {
      "title": "Bài 3: Niềm vui của Bi và Bống",
      "author": "SGK Tiếng Việt 2 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "story",
      "content": [
        "Khi cơn mưa rào vừa dứt, một chiếc cầu vồng bảy sắc rực rỡ hiện ra trên bầu trời trong xanh.",
        "Bi hào hứng bảo Bống: \"Em nhìn kìa, dưới chân cầu vồng có một hũ vàng to lắm! Anh sẽ đi lấy hũ vàng về mua cho em búp bê biết hát và hộp bút màu rực rỡ!\".",
        "Bống cười tít mắt: \"Còn em sẽ mua cho anh Bi một quả bóng đá thật xịn và chiếc xe ô tô điều khiển từ xa!\".",
        "Hai anh em ngước nhìn cầu vồng lung linh, nụ cười rạng rỡ trên môi. Tình cảm yêu thương và sẻ chia giữa hai anh em chính là món quà quý giá nhất."
      ],
      "audioNarration": "Bài 3: Niềm vui của Bi và Bống. Khi cơn mưa rào vừa dứt, một chiếc cầu vồng bảy sắc rực rỡ hiện ra trên bầu trời trong xanh. Bi hào hứng bảo Bống: \"Em nhìn kìa, dưới chân cầu vồng có một hũ vàng to lắm! Anh sẽ đi lấy hũ vàng về mua cho em búp bê biết hát và hộp bút màu rực rỡ!\". Bống cười tít mắt: \"Còn em sẽ mua cho anh Bi một quả bóng đá thật xịn và chiếc xe ô tô điều khiển từ xa!\". Hai anh em ngước nhìn cầu vồng lung linh, nụ cười rạng rỡ trên môi. Tình cảm yêu thương và sẻ chia giữa hai anh em chính là món quà quý giá nhất.",
      "vocabularyNotes": [
        {
          "word": "cầu vồng",
          "meaning": "Vòng cung bảy màu tuyệt đẹp xuất hiện trên trời sau cơn mưa."
        },
        {
          "word": "hào hứng",
          "meaning": "Hăng hái, phấn khởi và tràn đầy nhiệt huyết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập một — Trang 18, 19 (Chủ điểm 1: Em lớn lên từng ngày)",
    "pedagogicalObjective": "Đọc hiểu câu chuyện, cảm nhận tình cảm anh em yêu thương, luôn nghĩ và ước mơ quà tặng cho nhau.",
    "questions": [
      {
        "id": "tv-g2-b3-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nếu có hũ vàng dưới chân cầu vồng, anh Bi ước mua gì cho bé Bống?",
        "audioText": "Nếu có hũ vàng dưới chân cầu vồng, anh Bi ước mua gì cho bé Bống?",
        "options": [
          {
            "id": "a",
            "label": "Búp bê biết hát và hộp bút màu rực rỡ 🎨",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Chiếc xe đạp đua"
          },
          {
            "id": "c",
            "label": "Cây kẹo mút khổng lồ"
          }
        ]
      }
    ]
  },
  "tv-g2-b4": {
    "passage": {
      "title": "Bài 4: Làm việc thật là vui",
      "author": "Tô Hoài",
      "genre": "prose",
      "content": [
        "Quanh ta, mọi vật, mọi người đều làm việc. Cái đồng hồ tích tắc, tích tắc báo phút, báo giờ. Con gà trống gáy vang ò... ó... o, báo cho mọi người biết trời sắp sáng, mau mau thức dậy. Con chim bắt sâu, bảo vệ mùa màng. Cỏ non xanh mướt cho đàn bò gặm. Cành đào nở hoa cho sắc xuân thêm rực rỡ, ngày xuân thêm tưng bừng.",
        "Như mọi vật, mọi người, bé cũng làm việc. Bé làm bài, bé đi học. Học xong, bé quét nhà, nhặt rau, chơi với em đỡ mẹ. Bé luôn luôn bận rộn, nhưng lúc nào cũng vui vẻ."
      ],
      "audioNarration": "Bài 4: Làm việc thật là vui. Quanh ta, mọi vật, mọi người đều làm việc. Cái đồng hồ tích tắc, tích tắc báo phút, báo giờ. Con gà trống gáy vang ò... ó... o, báo cho mọi người biết trời sắp sáng, mau mau thức dậy. Con chim bắt sâu, bảo vệ mùa màng. Cỏ non xanh mướt cho đàn bò gặm. Cành đào nở hoa cho sắc xuân thêm rực rỡ, ngày xuân thêm tưng bừng. Như mọi vật, mọi người, bé cũng làm việc. Bé làm bài, bé đi học. Học xong, bé quét nhà, nhặt rau, chơi với em đỡ mẹ. Bé luôn luôn bận rộn, nhưng lúc nào cũng vui vẻ.",
      "vocabularyNotes": [
        {
          "word": "sắc xuân",
          "meaning": "Cảnh sắc, không khí tươi vui, rạng rỡ của mùa xuân."
        },
        {
          "word": "tưng bừng",
          "meaning": "Nhộn nhịp, rộn rã và tràn ngập niềm vui tươi."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập một — Trang 22, 23 (Chủ điểm 1: Em lớn lên từng ngày)",
    "pedagogicalObjective": "Đọc trôi chảy toàn bài, hiểu được lao động và làm việc có ích mang lại niềm vui cho bản thân và mọi người.",
    "questions": [
      {
        "id": "tv-g2-b4-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Bé làm những công việc gì để giúp đỡ gia đình?",
        "audioText": "Bé làm những công việc gì để giúp đỡ gia đình?",
        "options": [
          {
            "id": "a",
            "label": "Học bài, quét nhà, nhặt rau và chơi với em đỡ mẹ 🧹",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Chỉ nằm xem tivi"
          },
          {
            "id": "c",
            "label": "Chơi game cả ngày"
          }
        ]
      }
    ]
  },
  "tv-g2-b5": {
    "passage": {
      "title": "Bài 5: Em có xinh không?",
      "author": "SGK Tiếng Việt 2 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "story",
      "content": [
        "Voi con thích làm đẹp và luôn băn khoăn tự hỏi: \"Em có xinh không?\".",
        "Gặp hươu, hươu bảo: \"Cậu mà có đôi gạc như tớ thì xinh lắm!\". Voi con liền bẻ hai cành cây gài lên đầu. Gặp dê, dê bảo: \"Cậu mà có chòm râu như tớ thì đẹp tuyệt!\". Voi con lại nhổ đám cỏ gắn vào cằm.",
        "Về đến nhà với đôi cành cây và chòm râu cỏ lòa xòa, voi mẹ bật cười: \"Voi con của mẹ chỉ xinh đẹp và đáng yêu nhất khi là chính mình thôi!\". Voi con ngắm mình trong gương, bỏ cành cây và đám cỏ đi. Chú thấy mình thật đẹp với chiếc vòi dài và đôi tai to xòe như quạt."
      ],
      "audioNarration": "Bài 5: Em có xinh không?. Voi con thích làm đẹp và luôn băn khoăn tự hỏi: \"Em có xinh không?\". Gặp hươu, hươu bảo: \"Cậu mà có đôi gạc như tớ thì xinh lắm!\". Voi con liền bẻ hai cành cây gài lên đầu. Gặp dê, dê bảo: \"Cậu mà có chòm râu như tớ thì đẹp tuyệt!\". Voi con lại nhổ đám cỏ gắn vào cằm. Về đến nhà với đôi cành cây và chòm râu cỏ lòa xòa, voi mẹ bật cười: \"Voi con của mẹ chỉ xinh đẹp và đáng yêu nhất khi là chính mình thôi!\". Voi con ngắm mình trong gương, bỏ cành cây và đám cỏ đi. Chú thấy mình thật đẹp với chiếc vòi dài và đôi tai to xòe như quạt.",
      "vocabularyNotes": [
        {
          "word": "gạc",
          "meaning": "Sừng phân nhánh của các loài hươu, nai."
        },
        {
          "word": "lòa xòa",
          "meaning": "Rủ xuống lộn xộn, che khuất tầm nhìn."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập một — Trang 26, 27 (Chủ điểm 2: Đi học vui sao)",
    "pedagogicalObjective": "Hiểu bài học về sự tự tin vào nét đẹp riêng biệt và phẩm chất của bản thân.",
    "questions": [
      {
        "id": "tv-g2-b5-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Lời khuyên của voi mẹ giúp voi con nhận ra điều gì?",
        "audioText": "Lời khuyên của voi mẹ giúp voi con nhận ra điều gì?",
        "options": [
          {
            "id": "a",
            "label": "Voi con đẹp và đáng yêu nhất khi là chính mình 🐘",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Phải gắn thêm sừng hươu mới đẹp"
          },
          {
            "id": "c",
            "label": "Phải nhuộm màu lông mới xinh"
          }
        ]
      }
    ]
  },
  "tv-g2-b6": {
    "passage": {
      "title": "Bài 6: Một giờ học",
      "author": "SGK Tiếng Việt 2 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "story",
      "content": [
        "Trong giờ Tập làm văn, thầy giáo yêu cầu các bạn tự giới thiệu bản thân.",
        "Quang vốn rụt rè, nghe thầy gọi tên thì mặt đỏ bừng, ấp úng mãi không nói nên lời. Thầy giáo mỉm cười khích lệ: \"Quang cứ tự tin nói những gì em thích nhé!\". Các bạn dưới lớp cũng vỗ tay cổ vũ nhiệt tình.",
        "Quang hít một hơi thật sâu, ngẩng cao đầu nói to: \"Chào thầy và các bạn! Tớ tên là Quang. Tớ thích đá bóng và nuôi chú chó bông nhỏ ở nhà!\".",
        "Cả lớp reo hò tán thưởng. Quang thấy lòng nhẹ nhõm và vô cùng hạnh phúc vì đã chiến thắng sự nhút nhát của chính mình."
      ],
      "audioNarration": "Bài 6: Một giờ học. Trong giờ Tập làm văn, thầy giáo yêu cầu các bạn tự giới thiệu bản thân. Quang vốn rụt rè, nghe thầy gọi tên thì mặt đỏ bừng, ấp úng mãi không nói nên lời. Thầy giáo mỉm cười khích lệ: \"Quang cứ tự tin nói những gì em thích nhé!\". Các bạn dưới lớp cũng vỗ tay cổ vũ nhiệt tình. Quang hít một hơi thật sâu, ngẩng cao đầu nói to: \"Chào thầy và các bạn! Tớ tên là Quang. Tớ thích đá bóng và nuôi chú chó bông nhỏ ở nhà!\". Cả lớp reo hò tán thưởng. Quang thấy lòng nhẹ nhõm và vô cùng hạnh phúc vì đã chiến thắng sự nhút nhát của chính mình.",
      "vocabularyNotes": [
        {
          "word": "rụt rè",
          "meaning": "E ngại, thiếu tự tin khi đứng trước đám đông."
        },
        {
          "word": "khích lệ",
          "meaning": "Động viên, cổ vũ tinh thần giúp người khác tự tin hơn."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập một — Trang 30, 31 (Chủ điểm 2: Đi học vui sao)",
    "pedagogicalObjective": "Rèn luyện sự tự tin phát biểu trước đám đông và tinh thần khích lệ bạn bè.",
    "questions": [
      {
        "id": "tv-g2-b6-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Điều gì đã giúp bạn Quang vượt qua sự rụt rè trong giờ học?",
        "audioText": "Điều gì đã giúp bạn Quang vượt qua sự rụt rè trong giờ học?",
        "options": [
          {
            "id": "a",
            "label": "Sự khích lệ dịu dàng của thầy giáo và tiếng vỗ tay của cả lớp 👏",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Thầy giáo phạt đứng góc lớp"
          },
          {
            "id": "c",
            "label": "Quang bỏ chạy ra ngoài sân trường"
          }
        ]
      }
    ]
  },
  "tv-g2-b7": {
    "passage": {
      "title": "Bài 7: Cây xấu hổ",
      "author": "Trần Hoài Dương",
      "genre": "prose",
      "content": [
        "Bờ cỏ ven đường có một cây xấu hổ xanh non mơn mởn. Bỗng một cơn gió ào tới, cây xấu hổ vội vã khép chặt những tán lá nhỏ lại, rụt rè co mình e thẹn.",
        "Có một chú chim sâu xinh đẹp bay đến, đậu trên cành cây cất tiếng hót véo von: \"Chào bạn cây xấu hổ! Hãy xòe lá ra đón ánh nắng vàng ấm áp đi nào!\".",
        "Nghe tiếng hót ngọt ngào, cây xấu hổ từ từ hé mở từng phiến lá biếc. Cây nhận ra thế giới xung quanh thật bao la, chan hòa tình bạn và tràn ngập ánh sáng diệu kỳ."
      ],
      "audioNarration": "Bài 7: Cây xấu hổ. Bờ cỏ ven đường có một cây xấu hổ xanh non mơn mởn. Bỗng một cơn gió ào tới, cây xấu hổ vội vã khép chặt những tán lá nhỏ lại, rụt rè co mình e thẹn. Có một chú chim sâu xinh đẹp bay đến, đậu trên cành cây cất tiếng hót véo von: \"Chào bạn cây xấu hổ! Hãy xòe lá ra đón ánh nắng vàng ấm áp đi nào!\". Nghe tiếng hót ngọt ngào, cây xấu hổ từ từ hé mở từng phiến lá biếc. Cây nhận ra thế giới xung quanh thật bao la, chan hòa tình bạn và tràn ngập ánh sáng diệu kỳ.",
      "vocabularyNotes": [
        {
          "word": "e thẹn",
          "meaning": "Ngượng ngùng, rụt rè, bẽn lẽn."
        },
        {
          "word": "véo von",
          "meaning": "Âm thanh tiếng hót cao, trong trẻo và êm tai."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập một — Trang 34, 35 (Chủ điểm 2: Đi học vui sao)",
    "pedagogicalObjective": "Cảm nhận vẻ đẹp thiên nhiên và sự hòa nhập cởi mở với bạn bè qua câu chuyện cây xấu hổ.",
    "questions": [
      {
        "id": "tv-g2-b7-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Khi nghe chú chim sâu hót véo von, cây xấu hổ đã làm gì?",
        "audioText": "Khi nghe chú chim sâu hót véo von, cây xấu hổ đã làm gì?",
        "options": [
          {
            "id": "a",
            "label": "Từ từ hé mở từng phiến lá biếc đón ánh nắng vàng 🌿",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khép chặt lá hơn"
          },
          {
            "id": "c",
            "label": "Bỏ chạy đi nơi khác"
          }
        ]
      }
    ]
  },
  "tv-g2-b8": {
    "passage": {
      "title": "Bài 8: Cầu thủ dự bị",
      "author": "Minh Chính",
      "genre": "story",
      "content": [
        "Dũng rất mê bóng đá. Mỗi buổi chiều, các anh lớn trong xóm rủ nhau đá bóng, Dũng đều chạy theo xin chơi cùng. Nhưng vì còn nhỏ tuổi, Dũng chỉ được phân công làm cầu thủ dự bị nhặt bóng ở ngoài đường biên.",
        "Dũng không hề nản lòng. Chú chăm chỉ quan sát từng đường chuyền, nhặt bóng thật nhanh và tự tập sút bóng vào lưới trống.",
        "Trong một trận đấu gay cấn, một anh tiền đạo bị đau chân. Đội trưởng liền gọi to: \"Dũng ơi, vào sân thay người nhé!\".",
        "Dũng nhanh nhẹn lao vào sân. Nhận đường chuyền quyết định, Dũng tung cú sút sấm sét đưa bóng bay thẳng vào lưới trong sự reo hò vang dội của cả xóm. Từ hôm đó, Dũng đã trở thành cầu thủ chính thức được mọi người yêu mến."
      ],
      "audioNarration": "Bài 8: Cầu thủ dự bị. Dũng rất mê bóng đá. Mỗi buổi chiều, các anh lớn trong xóm rủ nhau đá bóng, Dũng đều chạy theo xin chơi cùng. Nhưng vì còn nhỏ tuổi, Dũng chỉ được phân công làm cầu thủ dự bị nhặt bóng ở ngoài đường biên. Dũng không hề nản lòng. Chú chăm chỉ quan sát từng đường chuyền, nhặt bóng thật nhanh và tự tập sút bóng vào lưới trống. Trong một trận đấu gay cấn, một anh tiền đạo bị đau chân. Đội trưởng liền gọi to: \"Dũng ơi, vào sân thay người nhé!\". Dũng nhanh nhẹn lao vào sân. Nhận đường chuyền quyết định, Dũng tung cú sút sấm sét đưa bóng bay thẳng vào lưới trong sự reo hò vang dội của cả xóm. Từ hôm đó, Dũng đã trở thành cầu thủ chính thức được mọi người yêu mến.",
      "vocabularyNotes": [
        {
          "word": "dự bị",
          "meaning": "Sẵn sàng thay thế cầu thủ chính thức khi có yêu cầu."
        },
        {
          "word": "gay cấn",
          "meaning": "Căng thẳng, hồi hộp và quyết liệt đến phút cuối."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập một — Trang 38, 39 (Chủ điểm 2: Đi học vui sao)",
    "pedagogicalObjective": "Đọc hiểu câu chuyện, học tập tinh thần kiên trì, không nản chí và nỗ lực hết mình.",
    "questions": [
      {
        "id": "tv-g2-b8-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Vì sao Dũng được trở thành cầu thủ chính thức trong đội bóng?",
        "audioText": "Vì sao Dũng được trở thành cầu thủ chính thức trong đội bóng?",
        "options": [
          {
            "id": "a",
            "label": "Vì Dũng kiên trì rèn luyện và ghi bàn thắng quyết định ⚽",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Vì Dũng mua bóng cho cả đội"
          },
          {
            "id": "c",
            "label": "Vì không có ai chơi nữa"
          }
        ]
      }
    ]
  },
  "tv-g2-b9": {
    "passage": {
      "title": "Bài 9: Cô giáo lớp em",
      "author": "Nguyễn Xuân Sanh",
      "genre": "poem",
      "content": [
        "Sáng nào em đến lớp\nCũng thấy cô đến rồi\nĐáp lời \"Chào cô ạ!\"\nCô mỉm cười thật tươi.",
        "Cô dạy em tập viết\nGió đưa thoảng hương nhài\nNắng ghé vào cửa lớp\nXem chúng em học bài.",
        "Những lời cô giáo giảng\nẤm trang vở thơm tho\nYêu thương từng nét chữ\nEm nhớ mãi ơn cô."
      ],
      "audioNarration": "Bài 9: Cô giáo lớp em. Sáng nào em đến lớp Cũng thấy cô đến rồi Đáp lời \"Chào cô ạ!\" Cô mỉm cười thật tươi. Cô dạy em tập viết Gió đưa thoảng hương nhài Nắng ghé vào cửa lớp Xem chúng em học bài. Những lời cô giáo giảng Ấm trang vở thơm tho Yêu thương từng nét chữ Em nhớ mãi ơn cô.",
      "vocabularyNotes": [
        {
          "word": "hương nhài",
          "meaning": "Mùi thơm dịu nhẹ, thanh khiết của hoa nhài trắng."
        },
        {
          "word": "ghé vào",
          "meaning": "Nghiêng mình nhìn vào một cách nhẹ nhàng, kín đáo."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập một — Trang 42, 43 (Chủ điểm 3: Niềm vui tuổi thơ)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, cảm nhận tình yêu thương bao la và sự tận tụy của cô giáo.",
    "questions": [
      {
        "id": "tv-g2-b9-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Khi học sinh cất tiếng chào, cô giáo đón nhận với thái độ thế nào?",
        "audioText": "Khi học sinh cất tiếng chào, cô giáo đón nhận với thái độ thế nào?",
        "options": [
          {
            "id": "a",
            "label": "Cô mỉm cười thật tươi và ân cần đáp lại 😊",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Cô nghiêm nghị không cười"
          },
          {
            "id": "c",
            "label": "Cô vội vã bước qua"
          }
        ]
      }
    ]
  },
  "tv-g2-b10": {
    "passage": {
      "title": "Bài 10: Thời khóa biểu",
      "author": "SGK Tiếng Việt 2 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Thời khóa biểu là bảng lịch học được sắp xếp khoa học theo từng ngày trong tuần từ thứ Hai đến thứ Sáu.",
        "Nhìn vào thời khóa biểu, em biết rõ sáng nay học môn gì: Toán, Tiếng Việt, Tự nhiên và Xã hội, Âm nhạc hay Mỹ thuật. Nhờ đó, tối hôm trước em có thể tự giác soạn đầy đủ sách vở và đồ dùng học tập vào cặp.",
        "Thời khóa biểu giúp em rèn luyện thói quen ngăn nắp, kỷ luật và chủ động trong học tập mỗi ngày."
      ],
      "audioNarration": "Bài 10: Thời khóa biểu. Thời khóa biểu là bảng lịch học được sắp xếp khoa học theo từng ngày trong tuần từ thứ Hai đến thứ Sáu. Nhìn vào thời khóa biểu, em biết rõ sáng nay học môn gì: Toán, Tiếng Việt, Tự nhiên và Xã hội, Âm nhạc hay Mỹ thuật. Nhờ đó, tối hôm trước em có thể tự giác soạn đầy đủ sách vở và đồ dùng học tập vào cặp. Thời khóa biểu giúp em rèn luyện thói quen ngăn nắp, kỷ luật và chủ động trong học tập mỗi ngày.",
      "vocabularyNotes": [
        {
          "word": "thời khóa biểu",
          "meaning": "Bảng ghi lịch các môn học theo từng tiết, từng ngày trong tuần."
        },
        {
          "word": "khoa học",
          "meaning": "Sắp xếp hợp lý, có trật tự và hiệu quả cao."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập một — Trang 46, 47 (Chủ điểm 3: Niềm vui tuổi thơ)",
    "pedagogicalObjective": "Đọc hiểu thời khóa biểu, rèn luyện kỹ năng tự lập và chuẩn bị sách vở khoa học.",
    "questions": [
      {
        "id": "tv-g2-b10-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Thời khóa biểu giúp ích gì cho việc học tập của học sinh?",
        "audioText": "Thời khóa biểu giúp ích gì cho việc học tập của học sinh?",
        "options": [
          {
            "id": "a",
            "label": "Giúp em biết trước các môn học và chủ động chuẩn bị sách vở 📅",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Để trang trí cho đẹp"
          },
          {
            "id": "c",
            "label": "Để chơi trò chơi"
          }
        ]
      }
    ]
  },
  "tv-g2-b11": {
    "passage": {
      "title": "Bài 11: Cái bàn học của em",
      "author": "SGK Tiếng Việt 2 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Bố đóng tặng em một chiếc bàn học bằng gỗ xoan đào sáng bóng nhân dịp em bước vào năm học lớp 2.",
        "Mặt bàn nhẵn bóng, rộng rãi. Phía trên có giá sách hai tầng xinh xắn để em xếp ngay ngắn sách giáo khoa, truyện tranh và hộp bút chì màu. Ngăn kéo bàn là nơi em cất giữ sổ tay bí mật và đồ dùng thủ công.",
        "Mỗi ngày ngồi vào bàn học, em luôn giữ tư thế ngồi ngay ngắn, giữ gìn mặt bàn sạch đẹp không bôi bẩn, vẽ bậy."
      ],
      "audioNarration": "Bài 11: Cái bàn học của em. Bố đóng tặng em một chiếc bàn học bằng gỗ xoan đào sáng bóng nhân dịp em bước vào năm học lớp 2. Mặt bàn nhẵn bóng, rộng rãi. Phía trên có giá sách hai tầng xinh xắn để em xếp ngay ngắn sách giáo khoa, truyện tranh và hộp bút chì màu. Ngăn kéo bàn là nơi em cất giữ sổ tay bí mật và đồ dùng thủ công. Mỗi ngày ngồi vào bàn học, em luôn giữ tư thế ngồi ngay ngắn, giữ gìn mặt bàn sạch đẹp không bôi bẩn, vẽ bậy.",
      "vocabularyNotes": [
        {
          "word": "xoan đào",
          "meaning": "Loại cây lấy gỗ có màu hồng đào đẹp và bền chắc."
        },
        {
          "word": "ngay ngắn",
          "meaning": "Thẳng hàng, trật tự và gọn gàng."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập một — Trang 50, 51 (Chủ điểm 3: Niềm vui tuổi thơ)",
    "pedagogicalObjective": "Đọc hiểu đoạn văn miêu tả đồ vật thân quen, giáo dục ý thức giữ gìn bàn học sạch đẹp.",
    "questions": [
      {
        "id": "tv-g2-b11-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Bạn nhỏ giữ gìn chiếc bàn học của mình như thế nào?",
        "audioText": "Bạn nhỏ giữ gìn chiếc bàn học của mình như thế nào?",
        "options": [
          {
            "id": "a",
            "label": "Ngồi học ngay ngắn, giữ mặt bàn sạch sẽ không vẽ bậy ✨",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Dán hình vẽ lên khắp mặt bàn"
          },
          {
            "id": "c",
            "label": "Vứt rác bừa bãi vào ngăn kéo"
          }
        ]
      }
    ]
  },
  "tv-g2-b12": {
    "passage": {
      "title": "Bài 12: Danh sách học sinh tổ 1",
      "author": "SGK Tiếng Việt 2 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Bảng danh sách học sinh tổ 1 lớp 2A được lập theo thứ tự bảng chữ cái:",
        "1. Nguyễn Mai Anh - Nữ - Ngày sinh: 15/03/2018 - Nhiệm vụ: Tổ trưởng\n2. Lê Tuấn Bảo - Nam - Ngày sinh: 20/05/2018 - Nhiệm vụ: Phụ trách thể thao\n3. Đỗ Thùy Chi - Nữ - Ngày sinh: 10/08/2018 - Nhiệm vụ: Quản ca\n4. Trần Văn Dũng - Nam - Ngày sinh: 02/11/2018 - Nhiệm vụ: Phụ trách vệ sinh",
        "Mỗi bạn trong tổ đều có nhiệm vụ riêng và luôn đoàn kết giúp đỡ nhau cùng tiến bộ trong học tập."
      ],
      "audioNarration": "Bài 12: Danh sách học sinh tổ 1. Bảng danh sách học sinh tổ 1 lớp 2A được lập theo thứ tự bảng chữ cái: 1. Nguyễn Mai Anh - Nữ - Ngày sinh: 15/03/2018 - Nhiệm vụ: Tổ trưởng 2. Lê Tuấn Bảo - Nam - Ngày sinh: 20/05/2018 - Nhiệm vụ: Phụ trách thể thao 3. Đỗ Thùy Chi - Nữ - Ngày sinh: 10/08/2018 - Nhiệm vụ: Quản ca 4. Trần Văn Dũng - Nam - Ngày sinh: 02/11/2018 - Nhiệm vụ: Phụ trách vệ sinh Mỗi bạn trong tổ đều có nhiệm vụ riêng và luôn đoàn kết giúp đỡ nhau cùng tiến bộ trong học tập.",
      "vocabularyNotes": [
        {
          "word": "danh sách",
          "meaning": "Bản ghi tên nhiều người hoặc sự vật theo một trật tự nhất định."
        },
        {
          "word": "quản ca",
          "meaning": "Người phụ trách bắt nhịp và dạy hát cho lớp."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập một — Trang 54, 55 (Chủ điểm 3: Niềm vui tuổi thơ)",
    "pedagogicalObjective": "Tập đọc văn bản thông tin dạng bảng danh sách, tra cứu thông tin theo thứ tự bảng chữ cái.",
    "questions": [
      {
        "id": "tv-g2-b12-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Danh sách học sinh được sắp xếp theo trật tự nào?",
        "audioText": "Danh sách học sinh được sắp xếp theo trật tự nào?",
        "options": [
          {
            "id": "a",
            "label": "Sắp xếp theo thứ tự bảng chữ cái A, B, C... 🔤",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Sắp xếp theo chiều cao"
          },
          {
            "id": "c",
            "label": "Sắp xếp ngẫu nhiên"
          }
        ]
      }
    ]
  },
  "tv-g2-b13": {
    "passage": {
      "title": "Bài 13: Yêu lắm trường ơi!",
      "author": "Nguyễn Trọng Hoàn",
      "genre": "poem",
      "content": [
        "Em bước vào lớp\nVừa sớm mai hồng\nNắng ghé vào song\nXem em học chữ.",
        "Hàng cây râm mát\nChim hót đầu cành\nTiếng cô trầm ấm\nVang trong lành sương.",
        "Trường ơi yêu lắm\nBạn bè thân thương\nBao trang sách mở\nChắp cánh ước mơ."
      ],
      "audioNarration": "Bài 13: Yêu lắm trường ơi!. Em bước vào lớp Vừa sớm mai hồng Nắng ghé vào song Xem em học chữ. Hàng cây râm mát Chim hót đầu cành Tiếng cô trầm ấm Vang trong lành sương. Trường ơi yêu lắm Bạn bè thân thương Bao trang sách mở Chắp cánh ước mơ.",
      "vocabularyNotes": [
        {
          "word": "song",
          "meaning": "Chấn song cửa sổ lớp học."
        },
        {
          "word": "chắp cánh",
          "meaning": "Nâng đỡ và giúp ước mơ bay cao, bay xa."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập một — Trang 58, 59 (Chủ điểm 4: Mái trường thân yêu)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, bồi dưỡng tình yêu trường lớp, thầy cô và bạn bè thân thương.",
    "questions": [
      {
        "id": "tv-g2-b13-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Những hình ảnh nào trong bài thơ thể hiện vẻ đẹp của ngôi trường?",
        "audioText": "Những hình ảnh nào trong bài thơ thể hiện vẻ đẹp của ngôi trường?",
        "options": [
          {
            "id": "a",
            "label": "Nắng sớm ghé song, hàng cây râm mát và tiếng cô trầm ấm 🏫",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Mưa bão mịt mù"
          },
          {
            "id": "c",
            "label": "Xe cộ ồn ào"
          }
        ]
      }
    ]
  },
  "tv-g2-b14": {
    "passage": {
      "title": "Bài 14: Em học vẽ",
      "author": "Phan Thị Thanh Nhàn",
      "genre": "poem",
      "content": [
        "Hôm nay trong lớp học\nEm cầm bút màu vẽ\nVẽ ông mặt trời đỏ\nTỏa muôn tia nắng vàng.",
        "Vẽ dòng sông uốn lượn\nThuyền buồm căng gió khơi\nVẽ mái trường ngói đỏ\nNấp dưới rặng tre xanh.",
        "Bức tranh em vẽ xong\nThầy cô khen ngợi mãi\nEm mang về tặng mẹ\nMẹ mỉm cười rạng ngời."
      ],
      "audioNarration": "Bài 14: Em học vẽ. Hôm nay trong lớp học Em cầm bút màu vẽ Vẽ ông mặt trời đỏ Tỏa muôn tia nắng vàng. Vẽ dòng sông uốn lượn Thuyền buồm căng gió khơi Vẽ mái trường ngói đỏ Nấp dưới rặng tre xanh. Bức tranh em vẽ xong Thầy cô khen ngợi mãi Em mang về tặng mẹ Mẹ mỉm cười rạng ngời.",
      "vocabularyNotes": [
        {
          "word": "uốn lượn",
          "meaning": "Chuyển động vòng vèo, mềm mại và uốn khúc."
        },
        {
          "word": "rạng ngời",
          "meaning": "Khuôn mặt rạng rỡ, tràn ngập ánh sáng niềm vui."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập một — Trang 62, 63 (Chủ điểm 4: Mái trường thân yêu)",
    "pedagogicalObjective": "Đọc diễn cảm bài thơ, phát huy trí tưởng tượng và tình cảm hiếu thảo với cha mẹ.",
    "questions": [
      {
        "id": "tv-g2-b14-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Bức tranh của bạn nhỏ vẽ những cảnh vật nào?",
        "audioText": "Bức tranh của bạn nhỏ vẽ những cảnh vật nào?",
        "options": [
          {
            "id": "a",
            "label": "Mặt trời đỏ, dòng sông uốn lượn, thuyền buồm và mái trường ngói đỏ 🎨",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Tòa nhà bê tông cao tầng"
          },
          {
            "id": "c",
            "label": "Đoàn tàu hỏa dài"
          }
        ]
      }
    ]
  },
  "tv-g2-b15": {
    "passage": {
      "title": "Bài 15: Cuốn sách của em",
      "author": "SGK Tiếng Việt 2 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Mỗi cuốn sách là một thế giới kỳ diệu mở ra trước mắt em.",
        "Bìa sách in tên sách rực rỡ, tên tác giả và nhà xuất bản cùng bức tranh minh họa bắt mắt. Mở trang sách ra là mục lục hướng dẫn các bài học theo từng tuần.",
        "Trong từng trang sách, những câu chuyện cảm động, những bài thơ ngọt ngào dạy em biết yêu gia đình, thầy cô, bạn bè và quê hương đất nước. Em luôn nâng niu, giữ gìn cuốn sách phẳng phiu, không gấp mép hay làm rách bìa."
      ],
      "audioNarration": "Bài 15: Cuốn sách của em. Mỗi cuốn sách là một thế giới kỳ diệu mở ra trước mắt em. Bìa sách in tên sách rực rỡ, tên tác giả và nhà xuất bản cùng bức tranh minh họa bắt mắt. Mở trang sách ra là mục lục hướng dẫn các bài học theo từng tuần. Trong từng trang sách, những câu chuyện cảm động, những bài thơ ngọt ngào dạy em biết yêu gia đình, thầy cô, bạn bè và quê hương đất nước. Em luôn nâng niu, giữ gìn cuốn sách phẳng phiu, không gấp mép hay làm rách bìa.",
      "vocabularyNotes": [
        {
          "word": "mục lục",
          "meaning": "Bảng ghi tên các phần, các bài và số trang trong cuốn sách."
        },
        {
          "word": "phẳng phiu",
          "meaning": "Mịn màng, ngay ngắn, không bị nhăn nhúm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập một — Trang 66, 67 (Chủ điểm 4: Mái trường thân yêu)",
    "pedagogicalObjective": "Hiểu cấu tạo của một cuốn sách và hình thành ý thức giữ gìn, trân trọng sách vở.",
    "questions": [
      {
        "id": "tv-g2-b15-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Phần mục lục trong cuốn sách giúp ích gì cho người đọc?",
        "audioText": "Phần mục lục trong cuốn sách giúp ích gì cho người đọc?",
        "options": [
          {
            "id": "a",
            "label": "Giúp tìm nhanh tên bài học và số trang cần đọc 📖",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Để vẽ tranh vào đó"
          },
          {
            "id": "c",
            "label": "Để ghi số điện thoại"
          }
        ]
      }
    ]
  },
  "tv-g2-b16": {
    "passage": {
      "title": "Bài 16: Khi trang sách mở ra",
      "author": "Nguyễn Nhật Ánh",
      "genre": "poem",
      "content": [
        "Khi trang sách mở ra\nKhoảng trời xa xích lại\nBao điều lạ điều hay\nĐang chờ em khám phá.",
        "Biển rộng với sóng biếc\nCánh buồm trắng bay bay\nRừng sâu bao bí ẩn\nMuông thú sống sum vầy.",
        "Khi trang sách mở ra\nEm thấy mình lớn dậy\nYêu thêm từng con chữ\nChắp cánh bay vào đời."
      ],
      "audioNarration": "Bài 16: Khi trang sách mở ra. Khi trang sách mở ra Khoảng trời xa xích lại Bao điều lạ điều hay Đang chờ em khám phá. Biển rộng với sóng biếc Cánh buồm trắng bay bay Rừng sâu bao bí ẩn Muông thú sống sum vầy. Khi trang sách mở ra Em thấy mình lớn dậy Yêu thêm từng con chữ Chắp cánh bay vào đời.",
      "vocabularyNotes": [
        {
          "word": "xích lại",
          "meaning": "Tiến lại gần hơn, trở nên thân thuộc hơn."
        },
        {
          "word": "muông thú",
          "meaning": "Tất cả các loài thú rừng nói chung."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập một — Trang 70, 71 (Chủ điểm 4: Mái trường thân yêu)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, cảm nhận niềm đam mê đọc sách và mở rộng tri thức qua từng trang sách.",
    "questions": [
      {
        "id": "tv-g2-b16-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Theo nhà văn Nguyễn Nhật Ánh, khi trang sách mở ra điều gì sẽ xuất hiện?",
        "audioText": "Theo nhà văn Nguyễn Nhật Ánh, khi trang sách mở ra điều gì sẽ xuất hiện?",
        "options": [
          {
            "id": "a",
            "label": "Khoảng trời xa xích lại cùng bao điều lạ điều hay chờ đón ✨",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Bóng đêm tối mịt"
          },
          {
            "id": "c",
            "label": "Cơn buồn ngủ"
          }
        ]
      }
    ]
  },
  "tv-g2-b17": {
    "passage": {
      "title": "Bài 17: Gọi bạn",
      "author": "Định Hải",
      "genre": "poem",
      "content": [
        "Tự xa xưa thuở nào\nTrong rừng xanh sâu thẳm\nĐôi bạn Bê Vàng - Dê Trắng\nSống bên nhau êm đềm.",
        "Một năm trời hạn hán\nCỏ héo khô cạn nguồn\nBê Vàng đi tìm cỏ\nLạc bước giữa rừng sâu.",
        "Dê Trắng thương bạn quá\nChạy khắp nẻo tìm hoài\nĐến nay còn gọi mãi:\n- Bê! Bê!... tìm bạn hiền."
      ],
      "audioNarration": "Bài 17: Gọi bạn. Tự xa xưa thuở nào Trong rừng xanh sâu thẳm Đôi bạn Bê Vàng - Dê Trắng Sống bên nhau êm đềm. Một năm trời hạn hán Cỏ héo khô cạn nguồn Bê Vàng đi tìm cỏ Lạc bước giữa rừng sâu. Dê Trắng thương bạn quá Chạy khắp nẻo tìm hoài Đến nay còn gọi mãi: - Bê! Bê!... tìm bạn hiền.",
      "vocabularyNotes": [
        {
          "word": "sâu thẳm",
          "meaning": "Rất sâu, hun hút vào tận bên trong rừng già."
        },
        {
          "word": "hạn hán",
          "meaning": "Tình trạng khô hạn kéo dài do không có mưa."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập một — Trang 74, 75 (Chủ điểm 4: Mái trường thân yêu)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, cảm nhận tình bạn thủy chung, son sắt giữa Bê Vàng và Dê Trắng.",
    "questions": [
      {
        "id": "tv-g2-b17-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Vì sao Dê Trắng đến nay vẫn cất tiếng gọi 'Bê! Bê!' khắp rừng?",
        "audioText": "Vì sao Dê Trắng đến nay vẫn cất tiếng gọi 'Bê! Bê!' khắp rừng?",
        "options": [
          {
            "id": "a",
            "label": "Vì thương nhớ và luôn tha thiết tìm lại người bạn thân Bê Vàng 🐐💛",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Vì bị đau chân"
          },
          {
            "id": "c",
            "label": "Vì muốn dọa muông thú"
          }
        ]
      }
    ]
  },
  "tv-g2-b18": {
    "passage": {
      "title": "Bài 18: Nhím nâu kết bạn",
      "author": "SGK Tiếng Việt 2 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "story",
      "content": [
        "Nhím nâu vốn tính nhút nhát, suốt ngày chỉ lủi thủi một mình trong bụi cây rậm rạp.",
        "Một buổi sáng mùa thu, nhím nâu tình cờ gặp nhím trắng đang vui vẻ đi hái nấm. Nhím trắng cất tiếng chào thân thiện: \"Chào bạn! Cùng tớ đi nhặt quả sồi chín thơm nhé!\".",
        "Nhím nâu e thẹn gật đầu. Cả hai cùng nhau chia sẻ những chiếc nấm hương tươi ngon và quả sồi bùi béo. Nhím nâu nhận ra có bạn bè sẻ chia, cuộc sống trở nên tươi vui và ấm áp hơn biết bao nhiêu."
      ],
      "audioNarration": "Bài 18: Nhím nâu kết bạn. Nhím nâu vốn tính nhút nhát, suốt ngày chỉ lủi thủi một mình trong bụi cây rậm rạp. Một buổi sáng mùa thu, nhím nâu tình cờ gặp nhím trắng đang vui vẻ đi hái nấm. Nhím trắng cất tiếng chào thân thiện: \"Chào bạn! Cùng tớ đi nhặt quả sồi chín thơm nhé!\". Nhím nâu e thẹn gật đầu. Cả hai cùng nhau chia sẻ những chiếc nấm hương tươi ngon và quả sồi bùi béo. Nhím nâu nhận ra có bạn bè sẻ chia, cuộc sống trở nên tươi vui và ấm áp hơn biết bao nhiêu.",
      "vocabularyNotes": [
        {
          "word": "lủi thủi",
          "meaning": "Một mình cô đơn, lặng lẽ không có ai bên cạnh."
        },
        {
          "word": "sẻ chia",
          "meaning": "Cùng san sẻ niềm vui, nỗi buồn và đồ dùng với nhau."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập một — Trang 78, 79 (Chủ điểm 4: Mái trường thân yêu)",
    "pedagogicalObjective": "Đọc hiểu câu chuyện, học cách mở lòng kết bạn và chia sẻ niềm vui với mọi người xung quanh.",
    "questions": [
      {
        "id": "tv-g2-b18-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Khi kết bạn với nhím trắng, nhím nâu cảm thấy thế nào?",
        "audioText": "Khi kết bạn với nhím trắng, nhím nâu cảm thấy thế nào?",
        "options": [
          {
            "id": "a",
            "label": "Thấy cuộc sống trở nên tươi vui, ấm áp và không còn cô đơn nữa 🦔",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Thấy phiền phức"
          },
          {
            "id": "c",
            "label": "Muốn quay về ở một mình"
          }
        ]
      }
    ]
  },
  "tv-g2-b19": {
    "passage": {
      "title": "Bài 19: Chuyện bốn mùa",
      "author": "Hoàng Như Mai",
      "genre": "story",
      "content": [
        "Bốn nàng tiên Xuân, Hạ, Thu, Đông gặp nhau trong đêm giao thừa ấm áp.",
        "Nàng Đông trầm trồ: \"Chị Xuân đi đến đâu là cây cối đâm chồi nảy lộc, muôn hoa khoe sắc rực rỡ đến đấy!\". Nàng Xuân mỉm cười: \"Nhưng phải có nắng hè rực rỡ của em Hạ thì cây trái mới chín ngọt ngào chứ!\".",
        "Nàng Hạ bảo: \"Em thích nhất chị Thu! Mùa thu có đêm trăng rằm rước đèn phá cỗ, các bạn nhỏ ríu rít tựu trường!\". Nàng Thu lại nắm tay nàng Đông: \"Còn có em Đông ấp ủ mầm sống trong lòng đất mẹ, để mùa xuân lại bừng nở tốt tươi!\".",
        "Bà Đất mỉm cười hiền từ: \"Cả bốn chị em đều có ích, đều đáng yêu và đem lại vẻ đẹp diệu kỳ cho muôn loài!\"."
      ],
      "audioNarration": "Bài 19: Chuyện bốn mùa. Bốn nàng tiên Xuân, Hạ, Thu, Đông gặp nhau trong đêm giao thừa ấm áp. Nàng Đông trầm trồ: \"Chị Xuân đi đến đâu là cây cối đâm chồi nảy lộc, muôn hoa khoe sắc rực rỡ đến đấy!\". Nàng Xuân mỉm cười: \"Nhưng phải có nắng hè rực rỡ của em Hạ thì cây trái mới chín ngọt ngào chứ!\". Nàng Hạ bảo: \"Em thích nhất chị Thu! Mùa thu có đêm trăng rằm rước đèn phá cỗ, các bạn nhỏ ríu rít tựu trường!\". Nàng Thu lại nắm tay nàng Đông: \"Còn có em Đông ấp ủ mầm sống trong lòng đất mẹ, để mùa xuân lại bừng nở tốt tươi!\". Bà Đất mỉm cười hiền từ: \"Cả bốn chị em đều có ích, đều đáng yêu và đem lại vẻ đẹp diệu kỳ cho muôn loài!\".",
      "vocabularyNotes": [
        {
          "word": "đâm chồi",
          "meaning": "Nhú ra những mầm cây non xanh tươi biếc."
        },
        {
          "word": "tựu trường",
          "meaning": "Ngày học sinh tề tựu đông đủ về trường bắt đầu năm học mới."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập hai — Trang 10, 11 (Chủ điểm 5: Vẻ đẹp bốn mùa)",
    "pedagogicalObjective": "Đọc hiểu câu chuyện bốn mùa, nhận biết đặc điểm và vẻ đẹp riêng của từng mùa trong năm.",
    "questions": [
      {
        "id": "tv-g2-b19-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Bà Đất đã nhận xét gì về bốn nàng tiên Xuân, Hạ, Thu, Đông?",
        "audioText": "Bà Đất đã nhận xét gì về bốn nàng tiên Xuân, Hạ, Thu, Đông?",
        "options": [
          {
            "id": "a",
            "label": "Cả bốn chị em đều có ích và đem lại vẻ đẹp diệu kỳ cho muôn loài 🌸☀️🍂❄️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Chỉ có nàng Xuân là đáng yêu"
          },
          {
            "id": "c",
            "label": "Nàng Đông quá lạnh lùng"
          }
        ]
      }
    ]
  },
  "tv-g2-b20": {
    "passage": {
      "title": "Bài 20: Mùa vàng",
      "author": "Nguyễn Viết Bình",
      "genre": "poem",
      "content": [
        "Thu về trên cánh đồng\nSóng lúa vàng mênh mông\nHạt thóc tròn mây mẩy\nNặng trĩu cành uốn cong.",
        "Bác nông dân gặt lúa\nTiếng cười vang rộn ràng\nMùi rơm thơm ngào ngạt\nBay khắp lối thôn trang.",
        "Mùa vàng mang no ấm\nCho làng xóm yên vui\nBát cơm thơm dẻo hạt\nNhớ công người vun trồng."
      ],
      "audioNarration": "Bài 20: Mùa vàng. Thu về trên cánh đồng Sóng lúa vàng mênh mông Hạt thóc tròn mây mẩy Nặng trĩu cành uốn cong. Bác nông dân gặt lúa Tiếng cười vang rộn ràng Mùi rơm thơm ngào ngạt Bay khắp lối thôn trang. Mùa vàng mang no ấm Cho làng xóm yên vui Bát cơm thơm dẻo hạt Nhớ công người vun trồng.",
      "vocabularyNotes": [
        {
          "word": "mây mẩy",
          "meaning": "Căng tròn, mập mạp và chắc nịch."
        },
        {
          "word": "thôn trang",
          "meaning": "Làng quê thôn xóm thanh bình."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập hai — Trang 18, 19 (Chủ điểm 5: Vẻ đẹp bốn mùa)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, cảm nhận vẻ đẹp mùa gặt và biết ơn công sức của bác nông dân.",
    "questions": [
      {
        "id": "tv-g2-b20-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Bài thơ khuyên các bạn nhỏ điều gì khi ăn bát cơm thơm dẻo?",
        "audioText": "Bài thơ khuyên các bạn nhỏ điều gì khi ăn bát cơm thơm dẻo?",
        "options": [
          {
            "id": "a",
            "label": "Biết ơn và trân trọng công sức vất vả của người nông dân 🌾",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Ăn thật nhanh rồi đi chơi"
          },
          {
            "id": "c",
            "label": "Bỏ mứa thức ăn"
          }
        ]
      }
    ]
  },
  "tv-g2-b21": {
    "passage": {
      "title": "Bài 21: Mưa mùa hạ",
      "author": "SGK Tiếng Việt 2 Tập hai — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Buổi trưa hè oi nồng, mây đen cuồn cuộn kéo đến phủ kín bầu trời. Gió thổi ào ào làm cây cối ngả nghiêng.",
        "Mưa bắt đầu rơi lộp độp, lộp độp trên mái tôn rồi ào ào trút nước như thác đổ. Nước mưa gột rửa sạch bong lớp bụi bặm trên tán lá, tưới mát cho vạn vật đang khát khao.",
        "Cơn mưa tạnh nhanh như lúc đến. Bầu trời trong xanh trở lại, vòm cầu vồng lung linh hiện ra và tiếng ve sầu lại râm ran cất khúc ca mùa hạ."
      ],
      "audioNarration": "Bài 21: Mưa mùa hạ. Buổi trưa hè oi nồng, mây đen cuồn cuộn kéo đến phủ kín bầu trời. Gió thổi ào ào làm cây cối ngả nghiêng. Mưa bắt đầu rơi lộp độp, lộp độp trên mái tôn rồi ào ào trút nước như thác đổ. Nước mưa gột rửa sạch bong lớp bụi bặm trên tán lá, tưới mát cho vạn vật đang khát khao. Cơn mưa tạnh nhanh như lúc đến. Bầu trời trong xanh trở lại, vòm cầu vồng lung linh hiện ra và tiếng ve sầu lại râm ran cất khúc ca mùa hạ.",
      "vocabularyNotes": [
        {
          "word": "lộp độp",
          "meaning": "Từ mô phỏng tiếng những giọt mưa to rơi liên tiếp lên mặt phẳng."
        },
        {
          "word": "gột rửa",
          "meaning": "Rửa sạch hết bụi bẩn để trở nên tươi mới."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập hai — Trang 22, 23 (Chủ điểm 5: Vẻ đẹp bốn mùa)",
    "pedagogicalObjective": "Đọc diễn cảm bài văn miêu tả cơn mưa rào mùa hạ, cảm nhận sức sống hồi sinh của thiên nhiên.",
    "questions": [
      {
        "id": "tv-g2-b21-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Sau cơn mưa mùa hạ, cảnh vật xung quanh thay đổi như thế nào?",
        "audioText": "Sau cơn mưa mùa hạ, cảnh vật xung quanh thay đổi như thế nào?",
        "options": [
          {
            "id": "a",
            "label": "Bầu trời trong xanh, cầu vồng hiện ra và cây cối xanh tươi mát rượi 🌈🌿",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Cây cối héo úa hết"
          },
          {
            "id": "c",
            "label": "Trời tối đen không thấy đường"
          }
        ]
      }
    ]
  },
  "tv-g2-b22": {
    "passage": {
      "title": "Bài 22: Chim rừng Tây Nguyên",
      "author": "Thi Sảnh",
      "genre": "prose",
      "content": [
        "Rừng đại ngàn Tây Nguyên là vương quốc của muôn loài chim xinh đẹp.",
        "Những chú công xòe đuôi múa lượn rực rỡ như chiếc quạt hoa khổng lồ dưới nắng vàng. Chim khướu cất tiếng hót véo von, lảnh lót như chuông ngân giữa vòm cây đại thụ.",
        "Đàn vẹt sặc sỡ sắc màu chao lượn rộn rã trên tán lá kơ-nia, tạo nên bức tranh thiên nhiên Tây Nguyên kỳ vĩ, tràn đầy âm thanh sống động."
      ],
      "audioNarration": "Bài 22: Chim rừng Tây Nguyên. Rừng đại ngàn Tây Nguyên là vương quốc của muôn loài chim xinh đẹp. Những chú công xòe đuôi múa lượn rực rỡ như chiếc quạt hoa khổng lồ dưới nắng vàng. Chim khướu cất tiếng hót véo von, lảnh lót như chuông ngân giữa vòm cây đại thụ. Đàn vẹt sặc sỡ sắc màu chao lượn rộn rã trên tán lá kơ-nia, tạo nên bức tranh thiên nhiên Tây Nguyên kỳ vĩ, tràn đầy âm thanh sống động.",
      "vocabularyNotes": [
        {
          "word": "đại ngàn",
          "meaning": "Khu rừng nguyên sinh bạt ngàn, rộng lớn và hùng vĩ."
        },
        {
          "word": "lảnh lót",
          "meaning": "Âm thanh tiếng hót cao, vang xa và rất trong trẻo."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập hai — Trang 26, 27 (Chủ điểm 6: Thế giới loài vật)",
    "pedagogicalObjective": "Cảm nhận vẻ đẹp phong phú của thế giới loài chim và cảnh sắc hùng vĩ của núi rừng Tây Nguyên.",
    "questions": [
      {
        "id": "tv-g2-b22-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Đuôi của chú chim công được tác giả so sánh với hình ảnh gì?",
        "audioText": "Đuôi của chú chim công được tác giả so sánh với hình ảnh gì?",
        "options": [
          {
            "id": "a",
            "label": "Chiếc quạt hoa khổng lồ rực rỡ dưới nắng 🦚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Cành cây khô"
          },
          {
            "id": "c",
            "label": "Chiếc ô màu đen"
          }
        ]
      }
    ]
  },
  "tv-g2-b23": {
    "passage": {
      "title": "Bài 23: Bác sĩ Sói",
      "author": "Truyện ngụ ngôn",
      "genre": "story",
      "content": [
        "Thấy Ngựa đang thong dong gặm cỏ non, Sói thèm rỏ dãi nhưng không dám xông vào bắt vì sợ Ngựa đá.",
        "Sói liền giả dạng làm bác sĩ, khoác áo trắng, đeo kính và ống nghe, bước lại gần bảo: \"Ta là bác sĩ đây, ta nghe nói chân bác bị đau nên đến khám giúp!\".",
        "Ngựa biết tỏng mưu mô của Sói bèn giả vờ rên rỉ: \"Chân sau của tôi đau quá, nhờ bác sĩ xem giúp!\". Sói hí hửng mon men lại gần chân sau của Ngựa định cắn trộm. Nhanh như chớp, Ngựa tung một cú đá sấm sét trúng thẳng mõm Sói, làm Sói văng kính, ngã ngửa ra đất rồi cụp đuôi chạy thục mạng."
      ],
      "audioNarration": "Bài 23: Bác sĩ Sói. Thấy Ngựa đang thong dong gặm cỏ non, Sói thèm rỏ dãi nhưng không dám xông vào bắt vì sợ Ngựa đá. Sói liền giả dạng làm bác sĩ, khoác áo trắng, đeo kính và ống nghe, bước lại gần bảo: \"Ta là bác sĩ đây, ta nghe nói chân bác bị đau nên đến khám giúp!\". Ngựa biết tỏng mưu mô của Sói bèn giả vờ rên rỉ: \"Chân sau của tôi đau quá, nhờ bác sĩ xem giúp!\". Sói hí hửng mon men lại gần chân sau của Ngựa định cắn trộm. Nhanh như chớp, Ngựa tung một cú đá sấm sét trúng thẳng mõm Sói, làm Sói văng kính, ngã ngửa ra đất rồi cụp đuôi chạy thục mạng.",
      "vocabularyNotes": [
        {
          "word": "thong dong",
          "meaning": "Thong thả, khoan thai, không vội vã."
        },
        {
          "word": "mưu mô",
          "meaning": "Ý đồ xấu xa, toan tính lừa gạt người khác."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập hai — Trang 30, 31 (Chủ điểm 6: Thế giới loài vật)",
    "pedagogicalObjective": "Đọc hiểu truyện ngụ ngôn, ca ngợi sự bình tĩnh, thông minh của Ngựa trước kẻ gian xảo.",
    "questions": [
      {
        "id": "tv-g2-b23-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Ngựa đã làm cách nào để trừng trị tên Sói gian ác?",
        "audioText": "Ngựa đã làm cách nào để trừng trị tên Sói gian ác?",
        "options": [
          {
            "id": "a",
            "label": "Bình tĩnh lừa Sói xem chân sau rồi tung cú đá trời giáng trúng mõm Sói 🐴💥",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Ngồi khóc xin tha"
          },
          {
            "id": "c",
            "label": "Chạy trốn thật nhanh"
          }
        ]
      }
    ]
  },
  "tv-g2-b24": {
    "passage": {
      "title": "Bài 24: Tôm Càng và Cá Con",
      "author": "SGK Tiếng Việt 2 Tập hai — NXB Giáo Dục Việt Nam",
      "genre": "story",
      "content": [
        "Dưới đáy sông trong vắt, Tôm Càng đang tập búng càng thì gặp Cá Con bơi tới. Cá Con có thân hình óng ánh và cái đuôi mềm mại như dải lụa.",
        "Cá Con trổ tài bơi lượn uốn khúc thoăn thoắt làm Tôm Càng vô cùng thán phục. Hai bạn nhanh chóng kết thân cùng nhau bơi dạo chơi.",
        "Bỗng Tôm Càng phát hiện một con cá mắt đỏ ngầu đang lao tới định đớp Cá Con. Không một giây chần chừ, Tôm Càng co mình búng một cú thật mạnh, xô Cá Con nép vào hốc đá an toàn. Con cá dữ đâm sầm vào vách đá đau điếng rồi bơi mất.",
        "Từ đó, Tôm Càng và Cá Con càng thêm yêu quý và gắn bó khăng khít bên nhau."
      ],
      "audioNarration": "Bài 24: Tôm Càng và Cá Con. Dưới đáy sông trong vắt, Tôm Càng đang tập búng càng thì gặp Cá Con bơi tới. Cá Con có thân hình óng ánh và cái đuôi mềm mại như dải lụa. Cá Con trổ tài bơi lượn uốn khúc thoăn thoắt làm Tôm Càng vô cùng thán phục. Hai bạn nhanh chóng kết thân cùng nhau bơi dạo chơi. Bỗng Tôm Càng phát hiện một con cá mắt đỏ ngầu đang lao tới định đớp Cá Con. Không một giây chần chừ, Tôm Càng co mình búng một cú thật mạnh, xô Cá Con nép vào hốc đá an toàn. Con cá dữ đâm sầm vào vách đá đau điếng rồi bơi mất. Từ đó, Tôm Càng và Cá Con càng thêm yêu quý và gắn bó khăng khít bên nhau.",
      "vocabularyNotes": [
        {
          "word": "búng càng",
          "meaning": "Co mình lại rồi bật mạnh hai chiếc càng để di chuyển nhanh."
        },
        {
          "word": "thoăn thoắt",
          "meaning": "Nhanh nhẹn và liên tục, không hề ngắt quãng."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập hai — Trang 34, 35 (Chủ điểm 6: Thế giới loài vật)",
    "pedagogicalObjective": "Đọc hiểu câu chuyện, học tập lòng dũng cảm, nhanh trí cứu bạn trong lúc hiểm nguy.",
    "questions": [
      {
        "id": "tv-g2-b24-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Tôm Càng đã cứu Cá Con thoát khỏi con cá dữ bằng cách nào?",
        "audioText": "Tôm Càng đã cứu Cá Con thoát khỏi con cá dữ bằng cách nào?",
        "options": [
          {
            "id": "a",
            "label": "Co mình búng thật mạnh, xô Cá Con nép vào hốc đá an toàn 🦐🐟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Bơi trốn một mình"
          },
          {
            "id": "c",
            "label": "Kêu cứu người đánh cá"
          }
        ]
      }
    ]
  },
  "tv-g2-b25": {
    "passage": {
      "title": "Bài 25: Bác Hồ rèn luyện thân thể",
      "author": "SGK Tiếng Việt 2 Tập hai — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Bác Hồ kính yêu luôn là tấm gương sáng ngời về tinh thần tự giác rèn luyện sức khỏe.",
        "Những năm tháng sống và làm việc tại chiến khu Việt Bắc, dù bận trăm công nghìn việc nước, sáng nào Bác cũng dậy thật sớm để tập thể dục, leo núi, tắm suối nước lạnh và đánh bóng chuyền cùng các chú chiến sĩ.",
        "Bác dạy: \"Mỗi một người dân yếu ớt tức là làm cho cả nước yếu ớt một phần; mỗi một người dân khỏe mạnh tức là góp phần làm cho cả nước mạnh khỏe\". Học sinh chúng em luôn noi gương Bác, tích cực tập thể dục thể thao mỗi ngày."
      ],
      "audioNarration": "Bài 25: Bác Hồ rèn luyện thân thể. Bác Hồ kính yêu luôn là tấm gương sáng ngời về tinh thần tự giác rèn luyện sức khỏe. Những năm tháng sống và làm việc tại chiến khu Việt Bắc, dù bận trăm công nghìn việc nước, sáng nào Bác cũng dậy thật sớm để tập thể dục, leo núi, tắm suối nước lạnh và đánh bóng chuyền cùng các chú chiến sĩ. Bác dạy: \"Mỗi một người dân yếu ớt tức là làm cho cả nước yếu ớt một phần; mỗi một người dân khỏe mạnh tức là góp phần làm cho cả nước mạnh khỏe\". Học sinh chúng em luôn noi gương Bác, tích cực tập thể dục thể thao mỗi ngày.",
      "vocabularyNotes": [
        {
          "word": "chiến khu",
          "meaning": "Vùng căn cứ địa an toàn của phong trào kháng chiến."
        },
        {
          "word": "thân thể",
          "meaning": "Cơ thể con người, sức khỏe thể chất."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập hai — Trang 44, 45 (Chủ điểm 7: Bác Hồ kính yêu)",
    "pedagogicalObjective": "Noi gương Bác Hồ rèn luyện thân thể, nâng cao ý thức tập thể dục bảo vệ sức khỏe.",
    "questions": [
      {
        "id": "tv-g2-b25-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Bác Hồ thường rèn luyện thân thể bằng những hoạt động nào?",
        "audioText": "Bác Hồ thường rèn luyện thân thể bằng những hoạt động nào?",
        "options": [
          {
            "id": "a",
            "label": "Dậy sớm tập thể dục, leo núi, tắm suối và đánh bóng chuyền 🏃‍♂️🏐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Chỉ ngồi đọc sách"
          },
          {
            "id": "c",
            "label": "Ngủ nướng đến trưa"
          }
        ]
      }
    ]
  },
  "tv-g2-b26": {
    "passage": {
      "title": "Bài 26: Ai ngoan sẽ được thưởng",
      "author": "SGK Tiếng Việt 2 Tập hai — NXB Giáo Dục Việt Nam",
      "genre": "story",
      "content": [
        "Một buổi sáng đẹp trời, Bác Hồ đến thăm một trại nhi đồng. Các cháu nhỏ vui sướng reo hò ùa ra đón Bác.",
        "Bác dắt tay hai cháu nhỏ nhất, đi thăm khắp phòng ăn, phòng ngủ và nhà tắm của các cháu. Khi trở lại sân, Bác chia kẹo cho từng bạn. Đến lượt Tộ, Tộ rụt rè thưa: \"Thưa Bác, hôm nay cháu chưa vâng lời cô giáo, cháu không dám nhận kẹo của Bác ạ!\".",
        "Bác Hồ mỉm cười hiền từ, xoa đầu Tộ và âu yếm nói: \"Cháu biết nhận lỗi thế là rất ngoan. Người dũng cảm nhận lỗi cũng xứng đáng được thưởng kẹo!\". Tộ mừng rỡ nhận lấy chiếc kẹo hồng thơm ngọt từ tay Bác."
      ],
      "audioNarration": "Bài 26: Ai ngoan sẽ được thưởng. Một buổi sáng đẹp trời, Bác Hồ đến thăm một trại nhi đồng. Các cháu nhỏ vui sướng reo hò ùa ra đón Bác. Bác dắt tay hai cháu nhỏ nhất, đi thăm khắp phòng ăn, phòng ngủ và nhà tắm của các cháu. Khi trở lại sân, Bác chia kẹo cho từng bạn. Đến lượt Tộ, Tộ rụt rè thưa: \"Thưa Bác, hôm nay cháu chưa vâng lời cô giáo, cháu không dám nhận kẹo của Bác ạ!\". Bác Hồ mỉm cười hiền từ, xoa đầu Tộ và âu yếm nói: \"Cháu biết nhận lỗi thế là rất ngoan. Người dũng cảm nhận lỗi cũng xứng đáng được thưởng kẹo!\". Tộ mừng rỡ nhận lấy chiếc kẹo hồng thơm ngọt từ tay Bác.",
      "vocabularyNotes": [
        {
          "word": "nhi đồng",
          "meaning": "Trẻ em ở độ tuổi thiếu nhi từ 4 đến 9 tuổi."
        },
        {
          "word": "dũng cảm",
          "meaning": "Dám đối mặt với sự thật và thẳng thắn nhận lỗi lầm của mình."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập hai — Trang 48, 49 (Chủ điểm 7: Bác Hồ kính yêu)",
    "pedagogicalObjective": "Đọc hiểu câu chuyện, học tập đức tính thật thà, dũng cảm nhận lỗi của bạn Tộ.",
    "questions": [
      {
        "id": "tv-g2-b26-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Vì sao bạn Tộ vẫn được Bác Hồ thưởng kẹo?",
        "audioText": "Vì sao bạn Tộ vẫn được Bác Hồ thưởng kẹo?",
        "options": [
          {
            "id": "a",
            "label": "Vì bạn Tộ đã thật thà, dũng cảm nhận lỗi lầm của mình 🍬",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Vì bạn Tộ khóc nhè đòi kẹo"
          },
          {
            "id": "c",
            "label": "Vì kẹo còn thừa nhiều"
          }
        ]
      }
    ]
  },
  "tv-g2-b27": {
    "passage": {
      "title": "Bài 27: Cờ đỏ sao vàng",
      "author": "SGK Tiếng Việt 2 Tập hai — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Lá cờ đỏ sao vàng là Quốc kỳ thiêng liêng và niềm tự hào vô bờ của dân tộc Việt Nam.",
        "Nền cờ màu đỏ tươi tượng trưng cho nhiệt huyết và dòng máu yêu nước nồng nàn. Ngôi sao vàng năm cánh tỏa sáng ở chính giữa tượng trưng cho linh hồn dân tộc và sự đoàn kết muôn người như một của các tầng lớp nhân dân.",
        "Mỗi sáng thứ Hai trong lễ chào cờ đầu tuần, chúng em trang nghiêm đứng thẳng, hướng mắt nhìn lên lá cờ Tổ quốc tung bay trong gió và cất vang bài Quốc ca hùng tráng."
      ],
      "audioNarration": "Bài 27: Cờ đỏ sao vàng. Lá cờ đỏ sao vàng là Quốc kỳ thiêng liêng và niềm tự hào vô bờ của dân tộc Việt Nam. Nền cờ màu đỏ tươi tượng trưng cho nhiệt huyết và dòng máu yêu nước nồng nàn. Ngôi sao vàng năm cánh tỏa sáng ở chính giữa tượng trưng cho linh hồn dân tộc và sự đoàn kết muôn người như một của các tầng lớp nhân dân. Mỗi sáng thứ Hai trong lễ chào cờ đầu tuần, chúng em trang nghiêm đứng thẳng, hướng mắt nhìn lên lá cờ Tổ quốc tung bay trong gió và cất vang bài Quốc ca hùng tráng.",
      "vocabularyNotes": [
        {
          "word": "Quốc kỳ",
          "meaning": "Lá cờ biểu tượng thiêng liêng của một quốc gia."
        },
        {
          "word": "thiêng liêng",
          "meaning": "Cao quý, đáng tôn kính và tự hào nhất."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập hai — Trang 56, 57 (Chủ điểm 8: Đất nước và con người)",
    "pedagogicalObjective": "Hiểu ý nghĩa thiêng liêng của lá Quốc kỳ Việt Nam và bồi dưỡng lòng yêu nước cho học sinh.",
    "questions": [
      {
        "id": "tv-g2-b27-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Ngôi sao vàng năm cánh ở giữa lá cờ tượng trưng cho điều gì?",
        "audioText": "Ngôi sao vàng năm cánh ở giữa lá cờ tượng trưng cho điều gì?",
        "options": [
          {
            "id": "a",
            "label": "Linh hồn dân tộc và sự đoàn kết vững bền của các tầng lớp nhân dân ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Năm mùa trong năm"
          },
          {
            "id": "c",
            "label": "Năm ngọn núi cao"
          }
        ]
      }
    ]
  },
  "tv-g2-b28": {
    "passage": {
      "title": "Bài 28: Em yêu biển đảo quê hương",
      "author": "Đoàn Minh Tuấn",
      "genre": "poem",
      "content": [
        "Biển quê mình rộng lớn\nSóng vỗ suốt ngày đêm\nBãi cát vàng mịn màng\nNắng trải dài dịu êm.",
        "Ngoài khơi xa lộng gió\nHoàng Sa và Trường Sa\nCác chú bộ đội đứng\nCanh giữ trời quê nhà.",
        "Em yêu từng hòn đảo\nYêu ngọn hải đăng soi\nGửi muôn ngàn tình cảm\nĐến biển trời xa xôi."
      ],
      "audioNarration": "Bài 28: Em yêu biển đảo quê hương. Biển quê mình rộng lớn Sóng vỗ suốt ngày đêm Bãi cát vàng mịn màng Nắng trải dài dịu êm. Ngoài khơi xa lộng gió Hoàng Sa và Trường Sa Các chú bộ đội đứng Canh giữ trời quê nhà. Em yêu từng hòn đảo Yêu ngọn hải đăng soi Gửi muôn ngàn tình cảm Đến biển trời xa xôi.",
      "vocabularyNotes": [
        {
          "word": "hải đăng",
          "meaning": "Tháp đèn biển cao rọi ánh sáng dẫn đường cho tàu thuyền qua lại trong đêm."
        },
        {
          "word": "lộng gió",
          "meaning": "Đón gió to và khoáng đạt từ biển khơi."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập hai — Trang 60, 61 (Chủ điểm 8: Đất nước và con người)",
    "pedagogicalObjective": "Đọc diễn cảm bài thơ, bồi dưỡng tình yêu biển đảo quê hương và sự biết ơn các chú bộ đội hải quân.",
    "questions": [
      {
        "id": "tv-g2-b28-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Các chú bộ đội ở đảo xa ngày đêm làm nhiệm vụ gì?",
        "audioText": "Các chú bộ đội ở đảo xa ngày đêm làm nhiệm vụ gì?",
        "options": [
          {
            "id": "a",
            "label": "Vững tay súng canh giữ biển trời thiêng liêng của Tổ quốc ⚓🌊",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi câu cá giải trí"
          },
          {
            "id": "c",
            "label": "Đi tắm biển"
          }
        ]
      }
    ]
  },
  "tv-g2-b29": {
    "passage": {
      "title": "Bài 29: Lượm hạt thóc vàng",
      "author": "Đồng dao Việt Nam",
      "genre": "poem",
      "content": [
        "Hạt thóc vàng mẩy tròn\nNằm phơi bên sân phơi\nNhặt từng hạt rơi vãi\nThương công bác nông dân.",
        "Một hạt thóc rơi xuống\nLà bao giọt mồ hôi\nTrưa hè nắng cháy lưng\nMới nên mùa thóc ngọt.",
        "Em nâng niu hạt vàng\nCất vào bồ no ấm\nBát cơm ăn mỗi ngày\nThơm lừng tình quê hương."
      ],
      "audioNarration": "Bài 29: Lượm hạt thóc vàng. Hạt thóc vàng mẩy tròn Nằm phơi bên sân phơi Nhặt từng hạt rơi vãi Thương công bác nông dân. Một hạt thóc rơi xuống Là bao giọt mồ hôi Trưa hè nắng cháy lưng Mới nên mùa thóc ngọt. Em nâng niu hạt vàng Cất vào bồ no ấm Bát cơm ăn mỗi ngày Thơm lừng tình quê hương.",
      "vocabularyNotes": [
        {
          "word": "mồ hôi",
          "meaning": "Chất lỏng toát ra từ cơ thể khi lao động vất vả."
        },
        {
          "word": "nâng niu",
          "meaning": "Giữ gìn cẩn thận và trân trọng bằng tất cả tình cảm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập hai — Trang 68, 69 (Chủ điểm 8: Đất nước và con người)",
    "pedagogicalObjective": "Đọc hiểu bài đồng dao, giáo dục đức tính tiết kiệm và trân quý từng hạt ngọc của đất trời.",
    "questions": [
      {
        "id": "tv-g2-b29-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Vì sao chúng ta cần trân quý và nâng niu từng hạt thóc vàng?",
        "audioText": "Vì sao chúng ta cần trân quý và nâng niu từng hạt thóc vàng?",
        "options": [
          {
            "id": "a",
            "label": "Vì mỗi hạt thóc đều đong đầy mồ hôi và công sức nhọc nhằn của bác nông dân 🌾",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Vì hạt thóc có thể bán lấy tiền mua đồ chơi"
          },
          {
            "id": "c",
            "label": "Vì hạt thóc rất nặng"
          }
        ]
      }
    ]
  },
  "tv-g2-b30": {
    "passage": {
      "title": "Bài 30: Chuyến phiêu lưu của Giọt Nước",
      "author": "SGK Tiếng Việt 2 Tập hai — NXB Giáo Dục Việt Nam",
      "genre": "story",
      "content": [
        "Giọt Nước Tí Xíu vốn nằm êm đềm trong lòng biển mẹ bao la.",
        "Một buổi sáng rực rỡ, ông Mặt Trời chiếu những tia nắng ấm áp xuống làm Giọt Nước biến thành hơi, bay bổng lên cao kết thành những đám mây trắng bồng bềnh.",
        "Gặp gió lạnh phương Bắc, các hạt nước li ti ngưng tụ lại thành cơn mưa rào tưới mát ruộng đồng, làng mạc rồi chảy theo dòng suối nhỏ quay trở về biển cả mênh mông.",
        "Chuyến phiêu lưu tuần hoàn của Giọt Nước đem lại màu xanh tươi tốt và sự sống diệu kỳ cho cả Trái Đất."
      ],
      "audioNarration": "Bài 30: Chuyến phiêu lưu của Giọt Nước. Giọt Nước Tí Xíu vốn nằm êm đềm trong lòng biển mẹ bao la. Một buổi sáng rực rỡ, ông Mặt Trời chiếu những tia nắng ấm áp xuống làm Giọt Nước biến thành hơi, bay bổng lên cao kết thành những đám mây trắng bồng bềnh. Gặp gió lạnh phương Bắc, các hạt nước li ti ngưng tụ lại thành cơn mưa rào tưới mát ruộng đồng, làng mạc rồi chảy theo dòng suối nhỏ quay trở về biển cả mênh mông. Chuyến phiêu lưu tuần hoàn của Giọt Nước đem lại màu xanh tươi tốt và sự sống diệu kỳ cho cả Trái Đất.",
      "vocabularyNotes": [
        {
          "word": "tuần hoàn",
          "meaning": "Chuyển động liên tục theo một vòng khép kín và lặp đi lặp lại."
        },
        {
          "word": "ngưng tụ",
          "meaning": "Hơi nước gặp lạnh đọng lại thành những giọt nước."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 2 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 2 Tập hai — Trang 74, 75 (Chủ điểm 8: Đất nước và con người)",
    "pedagogicalObjective": "Đọc hiểu câu chuyện vòng tuần hoàn của nước trong tự nhiên, nâng cao ý thức bảo vệ nguồn nước sạch.",
    "questions": [
      {
        "id": "tv-g2-b30-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nhờ đâu Giọt Nước Tí Xíu từ biển cả có thể bay lên bầu trời?",
        "audioText": "Nhờ đâu Giọt Nước Tí Xíu từ biển cả có thể bay lên bầu trời?",
        "options": [
          {
            "id": "a",
            "label": "Nhờ ánh nắng ấm áp của ông Mặt Trời chiếu xuống làm nước bốc hơi ☀️💧",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nhờ đàn chim chở đi"
          },
          {
            "id": "c",
            "label": "Nhờ có đôi cánh thần kỳ"
          }
        ]
      }
    ]
  },
  "tv-g3-b1": {
    "passage": {
      "title": "Bài 1: Chiếc nhãn vở đặc biệt",
      "author": "Nguyễn Thị Kim Hòa",
      "genre": "prose",
      "content": [
        "Mùa hè qua thật nhanh. Hôm nay là ngày đầu tiên tôi chuẩn bị sách vở để bước vào năm học lớp 3.",
        "Buổi chiều, chị Hai rủ tôi bọc sách vở và dán nhãn. Chị nắn nót viết tên tôi lên từng chiếc nhãn vở xinh xắn: \"Trần Mai Ly, Lớp 3A, Trường Tiểu học Lê Lợi\".",
        "Đến quyển vở bài tập Tiếng Việt, chị bảo: \"Năm nay Ly đã lên lớp 3 rồi, em hãy tự viết nhãn vở cho mình nhé!\". Tôi hồi hộp cầm bút, nắn nót từng chữ thật cẩn thận. Dù nét chữ chưa được thẳng tắp như của chị Hai nhưng tôi ngắm mãi không chán.",
        "Đó chính là chiếc nhãn vở đặc biệt nhất của tôi, đánh dấu ngày tôi thực sự lớn khôn và tự tin bước vào năm học mới."
      ],
      "audioNarration": "Bài 1: Chiếc nhãn vở đặc biệt. Mùa hè qua thật nhanh. Hôm nay là ngày đầu tiên tôi chuẩn bị sách vở để bước vào năm học lớp 3. Buổi chiều, chị Hai rủ tôi bọc sách vở và dán nhãn. Chị nắn nót viết tên tôi lên từng chiếc nhãn vở xinh xắn: \"Trần Mai Ly, Lớp 3A, Trường Tiểu học Lê Lợi\". Đến quyển vở bài tập Tiếng Việt, chị bảo: \"Năm nay Ly đã lên lớp 3 rồi, em hãy tự viết nhãn vở cho mình nhé!\". Tôi hồi hộp cầm bút, nắn nót từng chữ thật cẩn thận. Dù nét chữ chưa được thẳng tắp như của chị Hai nhưng tôi ngắm mãi không chán. Đó chính là chiếc nhãn vở đặc biệt nhất của tôi, đánh dấu ngày tôi thực sự lớn khôn và tự tin bước vào năm học mới.",
      "vocabularyNotes": [
        {
          "word": "nắn nót",
          "meaning": "Viết từng nét chữ cẩn thận, tỉ mỉ cho thật đẹp."
        },
        {
          "word": "ngay ngắn",
          "meaning": "Xếp đặt gọn gàng, thẳng thớm, trật tự."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập một — Trang 10, 11 (Chủ điểm 1: Những búp măng non)",
    "pedagogicalObjective": "Đọc trôi chảy toàn bài, hiểu được niềm vui và sự tự lập của bạn nhỏ khi tự tay viết chiếc nhãn vở đầu tiên.",
    "questions": [
      {
        "id": "tv-g3-b1-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Vì sao chiếc nhãn vở môn Tiếng Việt lại trở nên đặc biệt đối với bạn nhỏ?",
        "audioText": "Vì sao chiếc nhãn vở môn Tiếng Việt lại trở nên đặc biệt đối với bạn nhỏ?",
        "options": [
          {
            "id": "a",
            "label": "Vì đó là chiếc nhãn vở do chính tay bạn nhỏ tự nắn nót viết tên mình 🏷️✨",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Vì nhãn vở được mạ vàng"
          },
          {
            "id": "c",
            "label": "Vì nhãn vở phát ra âm thanh"
          }
        ]
      }
    ]
  },
  "tv-g3-b2": {
    "passage": {
      "title": "Bài 2: Lắng nghe những ước mơ",
      "author": "SGK Tiếng Việt 3 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Mỗi bạn nhỏ trong lớp đều ấp ủ những ước mơ tươi đẹp cho tương lai.",
        "Bạn An ước mơ trở thành bác sĩ tài giỏi để chữa lành bệnh cho mọi người. Bạn Bình thích làm chú phi công dũng cảm lái máy bay lướt qua những đám mây trắng trên bầu trời xanh.",
        "Bạn Chi lại mong ước trở thành cô giáo dịu dàng dạy chữ cho các em nhỏ vùng cao xa xôi.",
        "Thầy giáo lắng nghe và mỉm cười bảo: \"Ước mơ nào cũng đáng quý và đẹp đẽ. Chỉ cần các em chăm chỉ học tập và không ngừng nỗ lực, mọi ước mơ đều sẽ trở thành hiện thực!\"."
      ],
      "audioNarration": "Bài 2: Lắng nghe những ước mơ. Mỗi bạn nhỏ trong lớp đều ấp ủ những ước mơ tươi đẹp cho tương lai. Bạn An ước mơ trở thành bác sĩ tài giỏi để chữa lành bệnh cho mọi người. Bạn Bình thích làm chú phi công dũng cảm lái máy bay lướt qua những đám mây trắng trên bầu trời xanh. Bạn Chi lại mong ước trở thành cô giáo dịu dàng dạy chữ cho các em nhỏ vùng cao xa xôi. Thầy giáo lắng nghe và mỉm cười bảo: \"Ước mơ nào cũng đáng quý và đẹp đẽ. Chỉ cần các em chăm chỉ học tập và không ngừng nỗ lực, mọi ước mơ đều sẽ trở thành hiện thực!\".",
      "vocabularyNotes": [
        {
          "word": "ấp ủ",
          "meaning": "Gìn giữ và nuôi dưỡng niềm hy vọng trong lòng."
        },
        {
          "word": "nỗ lực",
          "meaning": "Cố gắng hết sức mình để vượt qua khó khăn, đạt mục tiêu."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập một — Trang 14, 15 (Chủ điểm 1: Những búp măng non)",
    "pedagogicalObjective": "Tự tin chia sẻ ước mơ nghề nghiệp và có ý thức rèn luyện bản thân để biến ước mơ thành hiện thực.",
    "questions": [
      {
        "id": "tv-g3-b2-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Thầy giáo đã khuyên các bạn nhỏ điều gì để đạt được ước mơ?",
        "audioText": "Thầy giáo đã khuyên các bạn nhỏ điều gì để đạt được ước mơ?",
        "options": [
          {
            "id": "a",
            "label": "Chăm chỉ học tập, rèn luyện và không ngừng nỗ lực mỗi ngày 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Chỉ cần ngồi chờ đợi"
          },
          {
            "id": "c",
            "label": "Bỏ cuộc khi gặp bài toán khó"
          }
        ]
      }
    ]
  },
  "tv-g3-b3": {
    "passage": {
      "title": "Bài 3: Em vui đến trường",
      "author": "Nguyễn Lãm Thắng",
      "genre": "poem",
      "content": [
        "Bình minh vừa hé rạng\nNắng rải nhẹ trên đường\nEm cắp sách tới trường\nLòng rộn ràng phấn khởi.",
        "Chim ca trên cành bưởi\nGió thổi mát ngàn cây\nBao bạn bè sum vầy\nTiếng cười vang góc lớp.",
        "Từng trang sách mở rộng\nBao bài học diệu kỳ\nThầy cô luôn nâng bước\nEm vững vàng bước đi."
      ],
      "audioNarration": "Bài 3: Em vui đến trường. Bình minh vừa hé rạng Nắng rải nhẹ trên đường Em cắp sách tới trường Lòng rộn ràng phấn khởi. Chim ca trên cành bưởi Gió thổi mát ngàn cây Bao bạn bè sum vầy Tiếng cười vang góc lớp. Từng trang sách mở rộng Bao bài học diệu kỳ Thầy cô luôn nâng bước Em vững vàng bước đi.",
      "vocabularyNotes": [
        {
          "word": "hé rạng",
          "meaning": "Bắt đầu xuất hiện những vệt sáng đầu tiên của ngày mới."
        },
        {
          "word": "sum vầy",
          "meaning": "Tụ họp đông vui, đầm ấm bên nhau."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập một — Trang 18, 19 (Chủ điểm 1: Những búp măng non)",
    "pedagogicalObjective": "Đọc diễn cảm bài thơ, cảm nhận niềm vui rộn rã khi mỗi ngày được đến trường học chữ.",
    "questions": [
      {
        "id": "tv-g3-b3-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Tâm trạng của bạn nhỏ khi đến trường được miêu tả như thế nào?",
        "audioText": "Tâm trạng của bạn nhỏ khi đến trường được miêu tả như thế nào?",
        "options": [
          {
            "id": "a",
            "label": "Lòng rộn ràng phấn khởi, vui tươi đón chào ngày mới 🏫🎒",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Buồn bã, chán nản"
          },
          {
            "id": "c",
            "label": "Lo lắng sợ sệt"
          }
        ]
      }
    ]
  },
  "tv-g3-b4": {
    "passage": {
      "title": "Bài 4: Cậu học sinh mới",
      "author": "Theo Đức Hoài",
      "genre": "story",
      "content": [
        "Gia đình cậu bé Lu-i Pa-xtơ chuyển về thị trấn Ác-boa để cậu được đi học ở ngôi trường tốt hơn.",
        "Ngôi trường mới nằm bên bờ sông Quy-dăng thơ mộng. Ngày đầu đến lớp, Pa-xtơ nhìn quanh với ánh mắt vừa bỡ ngỡ vừa tò mò. Thầy giáo ân cần dắt tay cậu vào lớp, giới thiệu cậu với các bạn.",
        "Pa-xtơ vốn là cậu bé trầm tính, chăm chỉ và đặc biệt say mê môn vẽ tranh và quan sát thiên nhiên. Sau này, nhờ lòng kiên trì và tinh thần say mê khoa học, Pa-xtơ đã trở thành nhà bác học lừng danh thế giới, phát minh ra nhiều loại vắc-xin cứu sống hàng triệu người."
      ],
      "audioNarration": "Bài 4: Cậu học sinh mới. Gia đình cậu bé Lu-i Pa-xtơ chuyển về thị trấn Ác-boa để cậu được đi học ở ngôi trường tốt hơn. Ngôi trường mới nằm bên bờ sông Quy-dăng thơ mộng. Ngày đầu đến lớp, Pa-xtơ nhìn quanh với ánh mắt vừa bỡ ngỡ vừa tò mò. Thầy giáo ân cần dắt tay cậu vào lớp, giới thiệu cậu với các bạn. Pa-xtơ vốn là cậu bé trầm tính, chăm chỉ và đặc biệt say mê môn vẽ tranh và quan sát thiên nhiên. Sau này, nhờ lòng kiên trì và tinh thần say mê khoa học, Pa-xtơ đã trở thành nhà bác học lừng danh thế giới, phát minh ra nhiều loại vắc-xin cứu sống hàng triệu người.",
      "vocabularyNotes": [
        {
          "word": "thơ mộng",
          "meaning": "Đẹp một cách êm đềm, gợi nhiều cảm xúc lãng mạn."
        },
        {
          "word": "vắc-xin",
          "meaning": "Chế phẩm sinh học giúp cơ thể phòng tránh các bệnh truyền nhiễm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập một — Trang 22, 23 (Chủ điểm 1: Những búp măng non)",
    "pedagogicalObjective": "Đọc hiểu câu chuyện về tuổi thơ của nhà bác học Lu-i Pa-xtơ, bồi dưỡng niềm say mê học tập và khám phá khoa học.",
    "questions": [
      {
        "id": "tv-g3-b4-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nhờ những đức tính nào mà cậu bé Pa-xtơ sau này trở thành nhà bác học lừng danh?",
        "audioText": "Nhờ những đức tính nào mà cậu bé Pa-xtơ sau này trở thành nhà bác học lừng danh?",
        "options": [
          {
            "id": "a",
            "label": "Lòng kiên trì, chăm chỉ và niềm say mê nghiên cứu khoa học 🔬👨‍🔬",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Chỉ nhờ may mắn"
          },
          {
            "id": "c",
            "label": "Nhờ gia đình giàu có"
          }
        ]
      }
    ]
  },
  "tv-g3-b5": {
    "passage": {
      "title": "Bài 5: Mùa hè lấp lánh",
      "author": "Nguyễn Minh Nguyên",
      "genre": "poem",
      "content": [
        "Sớm mai thức giấc\nNắng ngập tràn hiên\nTiếng ve rộn rã\nKhúc ca đầu hè.",
        "Dưới vòm lá biếc\nChùm phượng đỏ au\nCánh diều no gió\nBay vút trời cao.",
        "Mùa hè lấp lánh\nBao chuyến đi xa\nBiển xanh sóng vỗ\nCát vàng bao la."
      ],
      "audioNarration": "Bài 5: Mùa hè lấp lánh. Sớm mai thức giấc Nắng ngập tràn hiên Tiếng ve rộn rã Khúc ca đầu hè. Dưới vòm lá biếc Chùm phượng đỏ au Cánh diều no gió Bay vút trời cao. Mùa hè lấp lánh Bao chuyến đi xa Biển xanh sóng vỗ Cát vàng bao la.",
      "vocabularyNotes": [
        {
          "word": "đỏ au",
          "meaning": "Màu đỏ tươi và rực rỡ, bóng đẹp dưới ánh nắng."
        },
        {
          "word": "lấp lánh",
          "meaning": "Ánh sáng phản chiếu lung linh, tỏa sáng liên hồi."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập một — Trang 26, 27 (Chủ điểm 2: Mùa hè kỳ thú)",
    "pedagogicalObjective": "Cảm nhận vẻ đẹp rực rỡ, âm thanh náo nức và những trải nghiệm thú vị của mùa hè tuổi thơ.",
    "questions": [
      {
        "id": "tv-g3-b5-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Những hình ảnh và âm thanh nào báo hiệu mùa hè đã về?",
        "audioText": "Những hình ảnh và âm thanh nào báo hiệu mùa hè đã về?",
        "options": [
          {
            "id": "a",
            "label": "Tiếng ve rộn rã, hoa phượng đỏ au và cánh diều no gió 🪁🌺",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Gió mùa đông bắc lạnh buốt"
          },
          {
            "id": "c",
            "label": "Cây cối rụng hết lá"
          }
        ]
      }
    ]
  },
  "tv-g3-b6": {
    "passage": {
      "title": "Bài 6: Cánh đồng tuổi thơ",
      "author": "Nguyễn Trọng Tạo",
      "genre": "prose",
      "content": [
        "Cánh đồng làng tôi trải rộng mênh mông như một tấm thảm nhung xanh biếc khổng lồ.",
        "Những buổi chiều hè lộng gió, đám trẻ con chúng tôi rủ nhau thả diều, bắt cào cào và đắm mình trong làn hương lúa ngọt ngào. Tiếng sáo diều vi vút ngân vang giữa tầng không, hòa cùng tiếng cười giòn tan của chúng tôi.",
        "Cánh đồng chính là chiếc nôi nuôi dưỡng tâm hồn, ghi dấu bao kỷ niệm tuổi thơ êm đềm không thể nào quên."
      ],
      "audioNarration": "Bài 6: Cánh đồng tuổi thơ. Cánh đồng làng tôi trải rộng mênh mông như một tấm thảm nhung xanh biếc khổng lồ. Những buổi chiều hè lộng gió, đám trẻ con chúng tôi rủ nhau thả diều, bắt cào cào và đắm mình trong làn hương lúa ngọt ngào. Tiếng sáo diều vi vút ngân vang giữa tầng không, hòa cùng tiếng cười giòn tan của chúng tôi. Cánh đồng chính là chiếc nôi nuôi dưỡng tâm hồn, ghi dấu bao kỷ niệm tuổi thơ êm đềm không thể nào quên.",
      "vocabularyNotes": [
        {
          "word": "thảm nhung",
          "meaning": "Tấm thảm dày, mượt mà và êm ái."
        },
        {
          "word": "chiếc nôi",
          "meaning": "Nơi sinh ra, nuôi dưỡng và che chở tuổi thơ lớn khôn."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập một — Trang 30, 31 (Chủ điểm 2: Mùa hè kỳ thú)",
    "pedagogicalObjective": "Đọc hiểu vẻ đẹp thanh bình của cánh đồng quê hương và tình cảm gắn bó với quê hương xứ sở.",
    "questions": [
      {
        "id": "tv-g3-b6-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Những hoạt động nào của các bạn nhỏ gắn liền với cánh đồng tuổi thơ?",
        "audioText": "Những hoạt động nào của các bạn nhỏ gắn liền với cánh đồng tuổi thơ?",
        "options": [
          {
            "id": "a",
            "label": "Thả diều, bắt cào cào và vui chơi trong hương lúa ngát thơm 🌾🪁",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi trung tâm thương mại"
          },
          {
            "id": "c",
            "label": "Chơi trò chơi điện tử trong phòng kín"
          }
        ]
      }
    ]
  },
  "tv-g3-b7": {
    "passage": {
      "title": "Bài 7: Con đường đến trường",
      "author": "Đỗ Bích Thúy",
      "genre": "prose",
      "content": [
        "Con đường đến trường của các bạn nhỏ vùng cao ngoằn ngoèo uốn lượn qua những sườn núi dốc đứng.",
        "Sáng sớm, sương mù còn giăng mờ ảo trên những ngọn cây sa mộc. Các bạn nhỏ trong bộ trang phục thổ cẩm rực rỡ, vai đeo gùi sách, tay cầm đèn pin tíu tít rủ nhau vượt qua con suối trong vắt.",
        "Dù đường đi xa xôi hiểm trở, bước chân của các em vẫn thoăn thoắt, rộn rã tiếng cười vang cả thung lũng, bởi nơi trường lớp có thầy cô yêu thương và con chữ mở ra tương lai tươi sáng."
      ],
      "audioNarration": "Bài 7: Con đường đến trường. Con đường đến trường của các bạn nhỏ vùng cao ngoằn ngoèo uốn lượn qua những sườn núi dốc đứng. Sáng sớm, sương mù còn giăng mờ ảo trên những ngọn cây sa mộc. Các bạn nhỏ trong bộ trang phục thổ cẩm rực rỡ, vai đeo gùi sách, tay cầm đèn pin tíu tít rủ nhau vượt qua con suối trong vắt. Dù đường đi xa xôi hiểm trở, bước chân của các em vẫn thoăn thoắt, rộn rã tiếng cười vang cả thung lũng, bởi nơi trường lớp có thầy cô yêu thương và con chữ mở ra tương lai tươi sáng.",
      "vocabularyNotes": [
        {
          "word": "thổ cẩm",
          "meaning": "Vải dệt thủ công với hoa văn sặc sỡ của đồng bào dân tộc thiểu số."
        },
        {
          "word": "sa mộc",
          "meaning": "Loại cây thân gỗ cao vút, mọc thẳng trên các sườn núi cao."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập một — Trang 34, 35 (Chủ điểm 2: Mùa hè kỳ thú)",
    "pedagogicalObjective": "Đọc hiểu câu chuyện vượt khó đến trường của học sinh vùng cao, khâm phục tinh thần hiếu học của các bạn.",
    "questions": [
      {
        "id": "tv-g3-b7-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Hình ảnh các bạn nhỏ vùng cao đến trường thể hiện điều gì?",
        "audioText": "Hình ảnh các bạn nhỏ vùng cao đến trường thể hiện điều gì?",
        "options": [
          {
            "id": "a",
            "label": "Tinh thần vượt khó, hiếu học và niềm yêu thích đến trường tìm con chữ 🎒🏔️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Các bạn đi dạo chơi"
          },
          {
            "id": "c",
            "label": "Các bạn bị bắt ép đi học"
          }
        ]
      }
    ]
  },
  "tv-g3-b8": {
    "passage": {
      "title": "Bài 8: Lời giải toán đặc biệt",
      "author": "Theo Bồi dưỡng Toán tiểu học",
      "genre": "story",
      "content": [
        "Trong một kỳ thi học sinh giỏi toán thời niên thiếu tại Pháp, cậu học trò Vích-to Huy-gô đã khiến ban giám khảo vô cùng kinh ngạc.",
        "Sau khi hoàn thành xuất sắc lời giải của bài toán hóc búa, Huy-gô còn ngẫu hứng trình bày toàn bộ bài giải toán phức tạp ấy bằng một bài thơ lục bát dài bằng tiếng Pháp vô cùng trôi chảy và chuẩn xác.",
        "Thầy giáo chấm thi thốt lên: \"Cậu bé này không chỉ là một tài năng toán học xuất sắc mà chắc chắn sẽ trở thành một nhà thơ vĩ đại!\". Lời tiên tri ấy đã thành sự thật khi Huy-gô trở thành đại văn hào thế giới."
      ],
      "audioNarration": "Bài 8: Lời giải toán đặc biệt. Trong một kỳ thi học sinh giỏi toán thời niên thiếu tại Pháp, cậu học trò Vích-to Huy-gô đã khiến ban giám khảo vô cùng kinh ngạc. Sau khi hoàn thành xuất sắc lời giải của bài toán hóc búa, Huy-gô còn ngẫu hứng trình bày toàn bộ bài giải toán phức tạp ấy bằng một bài thơ lục bát dài bằng tiếng Pháp vô cùng trôi chảy và chuẩn xác. Thầy giáo chấm thi thốt lên: \"Cậu bé này không chỉ là một tài năng toán học xuất sắc mà chắc chắn sẽ trở thành một nhà thơ vĩ đại!\". Lời tiên tri ấy đã thành sự thật khi Huy-gô trở thành đại văn hào thế giới.",
      "vocabularyNotes": [
        {
          "word": "ngẫu hứng",
          "meaning": "Nảy ra ý nghĩ và sáng tác tức thời đầy cảm xúc."
        },
        {
          "word": "đại văn hào",
          "meaning": "Nhà văn kiệt xuất, có tầm vóc và danh tiếng lớn trên toàn thế giới."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập một — Trang 38, 39 (Chủ điểm 3: Khám phá tri thức)",
    "pedagogicalObjective": "Đọc hiểu câu chuyện về danh nhân Vích-to Huy-gô, ca ngợi tài năng sáng tạo và sự kết hợp kỳ diệu giữa Toán học và Văn học.",
    "questions": [
      {
        "id": "tv-g3-b8-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Cậu bé Huy-gô đã làm gì khiến ban giám khảo kỳ thi toán kinh ngạc?",
        "audioText": "Cậu bé Huy-gô đã làm gì khiến ban giám khảo kỳ thi toán kinh ngạc?",
        "options": [
          {
            "id": "a",
            "label": "Trình bày toàn bộ lời giải bài toán hóc búa bằng một bài thơ tuyệt đẹp 📐✍️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Làm bài trong 1 giây"
          },
          {
            "id": "c",
            "label": "Vẽ hình biếm họa giám khảo"
          }
        ]
      }
    ]
  },
  "tv-g3-b9": {
    "passage": {
      "title": "Bài 9: Bàn tay cô giáo",
      "author": "Định Hải",
      "genre": "poem",
      "content": [
        "Một tờ giấy trắng\nCô gấp cong cong\nThoắt cái thành xong\nChiếc thuyền xinh xắn.",
        "Một tờ giấy đỏ\nMềm mại đôi tay\nCô cắt liền tay\nÔng mặt trời tỏa.",
        "Thêm tờ xanh nữa\nCô lượn sóng xô\nBiển rộng nhấp nhô\nThuyền trôi êm ả.",
        "Bàn tay cô giáo\nKhéo léo diệu kỳ\nBao điều kỳ lạ\nHiện ra trước em."
      ],
      "audioNarration": "Bài 9: Bàn tay cô giáo. Một tờ giấy trắng Cô gấp cong cong Thoắt cái thành xong Chiếc thuyền xinh xắn. Một tờ giấy đỏ Mềm mại đôi tay Cô cắt liền tay Ông mặt trời tỏa. Thêm tờ xanh nữa Cô lượn sóng xô Biển rộng nhấp nhô Thuyền trôi êm ả. Bàn tay cô giáo Khéo léo diệu kỳ Bao điều kỳ lạ Hiện ra trước em.",
      "vocabularyNotes": [
        {
          "word": "thoắt cái",
          "meaning": "Rất nhanh, chỉ trong chớp mắt."
        },
        {
          "word": "khéo léo",
          "meaning": "Làm việc bằng tay một cách thuần thục, tinh xảo và đẹp mắt."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập một — Trang 42, 43 (Chủ điểm 3: Khám phá tri thức)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, khâm phục đôi bàn tay khéo léo và tình yêu thương của cô giáo.",
    "questions": [
      {
        "id": "tv-g3-b9-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Từ những tờ giấy màu, đôi bàn tay cô giáo đã tạo ra bức tranh gì?",
        "audioText": "Từ những tờ giấy màu, đôi bàn tay cô giáo đã tạo ra bức tranh gì?",
        "options": [
          {
            "id": "a",
            "label": "Chiếc thuyền xinh xắn, ông mặt trời rực rỡ và sóng biển nhấp nhô ⛵☀️🌊",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Tòa lâu đài tuyết"
          },
          {
            "id": "c",
            "label": "Chiếc xe tăng bọc thép"
          }
        ]
      }
    ]
  },
  "tv-g3-b10": {
    "passage": {
      "title": "Bài 10: Nhà rông ở Tây Nguyên",
      "author": "Nguyễn Văn Huy",
      "genre": "prose",
      "content": [
        "Nhà rông là ngôi nhà chung cao lớn và uy nghiêm nhất của buôn làng Tây Nguyên.",
        "Mái nhà rông cao vút hình lưỡi búa vươn thẳng lên bầu trời xanh lộng gió. Toàn bộ ngôi nhà được dựng bằng những thân gỗ lim, gỗ căm xe to lớn, vững chãi, sàn nhà lát nứa sạch bóng.",
        "Nhà rông là nơi già làng họp bàn việc chung, nơi tổ chức các lễ hội đâm trâu, đánh cồng chiêng rộn rã và là nơi các thế hệ đồng bào truyền dạy lại những bài sử thi hào hùng cho con cháu."
      ],
      "audioNarration": "Bài 10: Nhà rông ở Tây Nguyên. Nhà rông là ngôi nhà chung cao lớn và uy nghiêm nhất của buôn làng Tây Nguyên. Mái nhà rông cao vút hình lưỡi búa vươn thẳng lên bầu trời xanh lộng gió. Toàn bộ ngôi nhà được dựng bằng những thân gỗ lim, gỗ căm xe to lớn, vững chãi, sàn nhà lát nứa sạch bóng. Nhà rông là nơi già làng họp bàn việc chung, nơi tổ chức các lễ hội đâm trâu, đánh cồng chiêng rộn rã và là nơi các thế hệ đồng bào truyền dạy lại những bài sử thi hào hùng cho con cháu.",
      "vocabularyNotes": [
        {
          "word": "nhà rông",
          "meaning": "Kiểu nhà sàn đặc trưng của các dân tộc thiểu số ở Tây Nguyên, dùng làm nơi sinh hoạt cộng đồng."
        },
        {
          "word": "sử thi",
          "meaning": "Tác phẩm văn học dân gian truyền miệng quy mô lớn kể về các anh hùng kỳ vĩ."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập một — Trang 46, 47 (Chủ điểm 3: Khám phá tri thức)",
    "pedagogicalObjective": "Hiểu kiến trúc độc đáo và ý nghĩa văn hóa thiêng liêng của nhà rông đối với đồng bào Tây Nguyên.",
    "questions": [
      {
        "id": "tv-g3-b10-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nhà rông có vai trò gì quan trọng trong đời sống của buôn làng Tây Nguyên?",
        "audioText": "Nhà rông có vai trò gì quan trọng trong đời sống của buôn làng Tây Nguyên?",
        "options": [
          {
            "id": "a",
            "label": "Là nơi họp bàn việc làng, tổ chức lễ hội và sinh hoạt văn hóa cộng đồng 🏛️🔥",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Chỉ dùng để chứa thóc lúa"
          },
          {
            "id": "c",
            "label": "Là nơi ở riêng của một gia đình"
          }
        ]
      }
    ]
  },
  "tv-g3-b11": {
    "passage": {
      "title": "Bài 11: Tiếng chim hót trong vườn",
      "author": "Võ Quảng",
      "genre": "prose",
      "content": [
        "Khu vườn nhà em rộn rã tiếng chim ca mỗi khi bình minh ló rạng.",
        "Chú chim chích chòe nhảy nhót thoăn thoắt trên cành ổi, cất tiếng hót líu lo chào ngày mới. Bác chim gõ kiến cần mẫn dùng chiếc mỏ cứng như thép gõ lách cách vào thân cây để bắt sâu hại.",
        "Đôi chim bồ câu trắng muốt rù rì âu yếm bên mái hiên. Tiếng chim hòa cùng hương hoa bưởi nồng nàn tạo nên bản giao hưởng thiên nhiên trong trẻo, đánh thức mọi vật thức giấc đón ngày tươi vui."
      ],
      "audioNarration": "Bài 11: Tiếng chim hót trong vườn. Khu vườn nhà em rộn rã tiếng chim ca mỗi khi bình minh ló rạng. Chú chim chích chòe nhảy nhót thoăn thoắt trên cành ổi, cất tiếng hót líu lo chào ngày mới. Bác chim gõ kiến cần mẫn dùng chiếc mỏ cứng như thép gõ lách cách vào thân cây để bắt sâu hại. Đôi chim bồ câu trắng muốt rù rì âu yếm bên mái hiên. Tiếng chim hòa cùng hương hoa bưởi nồng nàn tạo nên bản giao hưởng thiên nhiên trong trẻo, đánh thức mọi vật thức giấc đón ngày tươi vui.",
      "vocabularyNotes": [
        {
          "word": "bản giao hưởng",
          "meaning": "Tác phẩm âm nhạc phong phú được hòa tấu bởi nhiều âm thanh khác nhau."
        },
        {
          "word": "cần mẫn",
          "meaning": "Chăm chỉ, siêng năng và kiên trì làm việc không ngừng nghỉ."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập một — Trang 50, 51 (Chủ điểm 4: Thiên nhiên kỳ thú)",
    "pedagogicalObjective": "Cảm nhận âm thanh rộn rã và vẻ đẹp tươi mới của thiên nhiên qua tiếng hót của các loài chim.",
    "questions": [
      {
        "id": "tv-g3-b11-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Bác chim gõ kiến làm công việc có ích gì cho khu vườn?",
        "audioText": "Bác chim gõ kiến làm công việc có ích gì cho khu vườn?",
        "options": [
          {
            "id": "a",
            "label": "Cần mẫn gõ vào thân cây để bắt sâu hại bảo vệ cây xanh 🪵🐦",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Phá hoại cành cây"
          },
          {
            "id": "c",
            "label": "Hái trộm quả ngọt"
          }
        ]
      }
    ]
  },
  "tv-g3-b12": {
    "passage": {
      "title": "Bài 12: Thư viện trường em",
      "author": "SGK Tiếng Việt 3 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Thư viện trường em là một căn phòng rộng rãi, thoáng mát và tràn ngập ánh sáng tự nhiên.",
        "Những dãy giá sách cao tầng được xếp đặt ngăn nắp theo từng chủ đề: truyện cổ tích, sách khoa học, danh nhân lịch sử, báo Khăn Quàng Đỏ và tạp chí Toán Tuổi Thơ.",
        "Giờ ra chơi, chúng em rủ nhau đến thư viện, nhẹ nhàng chọn những cuốn sách yêu thích, ngồi đọc chăm chú và giữ trật tự chung. Thư viện như một kho tàng tri thức vô tận giúp chúng em mở rộng hiểu biết mỗi ngày."
      ],
      "audioNarration": "Bài 12: Thư viện trường em. Thư viện trường em là một căn phòng rộng rãi, thoáng mát và tràn ngập ánh sáng tự nhiên. Những dãy giá sách cao tầng được xếp đặt ngăn nắp theo từng chủ đề: truyện cổ tích, sách khoa học, danh nhân lịch sử, báo Khăn Quàng Đỏ và tạp chí Toán Tuổi Thơ. Giờ ra chơi, chúng em rủ nhau đến thư viện, nhẹ nhàng chọn những cuốn sách yêu thích, ngồi đọc chăm chú và giữ trật tự chung. Thư viện như một kho tàng tri thức vô tận giúp chúng em mở rộng hiểu biết mỗi ngày.",
      "vocabularyNotes": [
        {
          "word": "kho tàng",
          "meaning": "Nơi chứa đựng số lượng lớn những thứ vô cùng quý giá."
        },
        {
          "word": "ngăn nắp",
          "meaning": "Gọn gàng, đâu vào đấy, đúng vị trí quy định."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập một — Trang 54, 55 (Chủ điểm 4: Thiên nhiên kỳ thú)",
    "pedagogicalObjective": "Hiểu ý nghĩa của thư viện trường học, nâng cao văn hóa đọc và ý thức giữ trật tự nơi công cộng.",
    "questions": [
      {
        "id": "tv-g3-b12-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Khi đọc sách trong thư viện, học sinh cần giữ ý thức như thế nào?",
        "audioText": "Khi đọc sách trong thư viện, học sinh cần giữ ý thức như thế nào?",
        "options": [
          {
            "id": "a",
            "label": "Giữ trật tự yên tĩnh, nhẹ nhàng lật trang sách và xếp sách lại đúng chỗ 📚🤫",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Chạy nhảy nô đùa"
          },
          {
            "id": "c",
            "label": "Nói chuyện to tiếng"
          }
        ]
      }
    ]
  },
  "tv-g3-b13": {
    "passage": {
      "title": "Bài 13: Bầu trời mùa thu",
      "author": "Theo Xô-khôm-lin-xki",
      "genre": "prose",
      "content": [
        "Thầy giáo dẫn chúng tôi ra cánh đồng làng để cùng ngắm nhìn và cảm nhận bầu trời mùa thu.",
        "Thầy bảo: \"Các em hãy nhìn lên cao và nói cho thầy biết bầu trời hôm nay có gì đặc biệt?\". Một bạn reo lên: \"Bầu trời xanh trong vắt như một tấm gương soi!\". Bạn khác hào hứng: \"Bầu trời dịu dàng với những đám mây trắng xốp như bông gòn!\".",
        "Mỗi bạn đều tìm thấy một nét đẹp riêng của mùa thu. Thầy giáo mỉm cười gật đầu: \"Bầu trời mùa thu không chỉ đẹp ở màu sắc mà còn mở rộng tâm hồn và dạy chúng ta biết yêu thiên nhiên tha thiết\"."
      ],
      "audioNarration": "Bài 13: Bầu trời mùa thu. Thầy giáo dẫn chúng tôi ra cánh đồng làng để cùng ngắm nhìn và cảm nhận bầu trời mùa thu. Thầy bảo: \"Các em hãy nhìn lên cao và nói cho thầy biết bầu trời hôm nay có gì đặc biệt?\". Một bạn reo lên: \"Bầu trời xanh trong vắt như một tấm gương soi!\". Bạn khác hào hứng: \"Bầu trời dịu dàng với những đám mây trắng xốp như bông gòn!\". Mỗi bạn đều tìm thấy một nét đẹp riêng của mùa thu. Thầy giáo mỉm cười gật đầu: \"Bầu trời mùa thu không chỉ đẹp ở màu sắc mà còn mở rộng tâm hồn và dạy chúng ta biết yêu thiên nhiên tha thiết\".",
      "vocabularyNotes": [
        {
          "word": "trong vắt",
          "meaning": "Trong suốt, không một chút gợn đục, nhìn thấu suốt."
        },
        {
          "word": "bông gòn",
          "meaning": "Chất xơ mềm mại, trắng muốt lấy từ quả cây gòn."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập một — Trang 58, 59 (Chủ điểm 4: Thiên nhiên kỳ thú)",
    "pedagogicalObjective": "Đọc hiểu bài văn, rèn luyện năng lực quan sát tinh tế và cảm nhận vẻ đẹp của bầu trời mùa thu.",
    "questions": [
      {
        "id": "tv-g3-b13-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Các bạn nhỏ cảm nhận bầu trời mùa thu như thế nào?",
        "audioText": "Các bạn nhỏ cảm nhận bầu trời mùa thu như thế nào?",
        "options": [
          {
            "id": "a",
            "label": "Xanh trong vắt như tấm gương và dịu dàng với mây trắng bồng bềnh ☁️✨",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Xám xịt u ám"
          },
          {
            "id": "c",
            "label": "Đỏ rực như lửa"
          }
        ]
      }
    ]
  },
  "tv-g3-b14": {
    "passage": {
      "title": "Bài 14: Quạt cho bà ngủ",
      "author": "Thạch Quỳ",
      "genre": "poem",
      "content": [
        "Ơi chích chòe ơi!\nChim đừng hót nữa,\nBà em ốm rồi,\nLặng nghe bà ngủ.",
        "Bàn tay bé nhỏ\nVẫy quạt thật đều\nNgấn nắng thiu thiu\nĐậu trên tường trắng.",
        "Căn nhà đã vắng\nCốc chén nằm im\nĐôi mắt lim dim\nBà ngon giấc ngủ.",
        "Hoa cam, hoa khế\nChín lặng trong vườn,\nBà mơ tay cháu\nQuạt đầy hương thơm."
      ],
      "audioNarration": "Bài 14: Quạt cho bà ngủ. Ơi chích chòe ơi! Chim đừng hót nữa, Bà em ốm rồi, Lặng nghe bà ngủ. Bàn tay bé nhỏ Vẫy quạt thật đều Ngấn nắng thiu thiu Đậu trên tường trắng. Căn nhà đã vắng Cốc chén nằm im Đôi mắt lim dim Bà ngon giấc ngủ. Hoa cam, hoa khế Chín lặng trong vườn, Bà mơ tay cháu Quạt đầy hương thơm.",
      "vocabularyNotes": [
        {
          "word": "thiu thiu",
          "meaning": "Trạng thái đang bắt đầu chìm dần vào giấc ngủ êm đềm."
        },
        {
          "word": "lim dim",
          "meaning": "Mắt khép hờ, hé mở nhè nhẹ khi sắp ngủ."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập một — Trang 62, 63 (Chủ điểm 4: Thiên nhiên kỳ thú)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, cảm nhận lòng hiếu thảo, tình yêu thương chăm sóc bà ân cần của bạn nhỏ.",
    "questions": [
      {
        "id": "tv-g3-b14-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Vì sao bạn nhỏ nhắc chú chim chích chòe đừng hót to nữa?",
        "audioText": "Vì sao bạn nhỏ nhắc chú chim chích chòe đừng hót to nữa?",
        "options": [
          {
            "id": "a",
            "label": "Vì bà đang bị ốm, bạn nhỏ muốn giữ không gian yên tĩnh để bà ngủ ngon 👵❤️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Vì bạn không thích tiếng chim"
          },
          {
            "id": "c",
            "label": "Vì chim hót dở"
          }
        ]
      }
    ]
  },
  "tv-g3-b15": {
    "passage": {
      "title": "Bài 15: Cóc kiện Trời",
      "author": "Truyện cổ tích Việt Nam",
      "genre": "story",
      "content": [
        "Ngày xưa, có một năm trời hạn hán dữ dội kéo dài. Ruộng đồng nứt nẻ, sông suối cạn khô, cây cỏ héo úa và muôn loài đứng trước nguy cơ chết khát.",
        "Cóc dũng cảm đứng lên, quyết tâm lên thiên đình kiện Trời đòi mưa. Trên đường đi, Cóc gặp Cua, Gấu, Cọp, Ong và Cáo cùng xin đi theo giúp sức.",
        "Đến cửa nhà Trời, Cóc khéo léo bố trí đội hình: Cua nấp trong lu nước, Ong núp sau cánh cửa, Cọp và Gấu mai phục hai bên. Xong xuôi, Cóc nhảy lên bậc thềm đánh một hồi trống vang dội.",
        "Ngọc Hoàng tức giận sai Thiên Lôi ra đánh. Thiên Lôi vừa bước ra liền bị Ong đốt túi bụi, nhảy vào lu nước thì bị Cua kẹp đau điếng, chạy ra ngoài lại bị Cọp và Gấu quật ngã. Thấy nguy khốn, Ngọc Hoàng đành phải thương lượng với Cóc.",
        "Cóc dõng dạc tâu bày nỗi khổ của trần gian. Ngọc Hoàng nhận ra lỗi lầm, lập tức truyền lệnh làm mưa cứu sống muôn loài và căn dặn: \"Hễ trần gian hạn hán, Cóc chỉ cần nghiến răng báo hiệu, ta sẽ lập tức cho mưa xuống!\"."
      ],
      "audioNarration": "Bài 15: Cóc kiện Trời. Ngày xưa, có một năm trời hạn hán dữ dội kéo dài. Ruộng đồng nứt nẻ, sông suối cạn khô, cây cỏ héo úa và muôn loài đứng trước nguy cơ chết khát. Cóc dũng cảm đứng lên, quyết tâm lên thiên đình kiện Trời đòi mưa. Trên đường đi, Cóc gặp Cua, Gấu, Cọp, Ong và Cáo cùng xin đi theo giúp sức. Đến cửa nhà Trời, Cóc khéo léo bố trí đội hình: Cua nấp trong lu nước, Ong núp sau cánh cửa, Cọp và Gấu mai phục hai bên. Xong xuôi, Cóc nhảy lên bậc thềm đánh một hồi trống vang dội. Ngọc Hoàng tức giận sai Thiên Lôi ra đánh. Thiên Lôi vừa bước ra liền bị Ong đốt túi bụi, nhảy vào lu nước thì bị Cua kẹp đau điếng, chạy ra ngoài lại bị Cọp và Gấu quật ngã. Thấy nguy khốn, Ngọc Hoàng đành phải thương lượng với Cóc. Cóc dõng dạc tâu bày nỗi khổ của trần gian. Ngọc Hoàng nhận ra lỗi lầm, lập tức truyền lệnh làm mưa cứu sống muôn loài và căn dặn: \"Hễ trần gian hạn hán, Cóc chỉ cần nghiến răng báo hiệu, ta sẽ lập tức cho mưa xuống!\".",
      "vocabularyNotes": [
        {
          "word": "hạn hán",
          "meaning": "Thời tiết khô ráo kéo dài không có mưa làm thiếu nước nghiêm trọng."
        },
        {
          "word": "dõng dạc",
          "meaning": "Nói to, rõ ràng, dứt khoát và đầy tự tin."
        },
        {
          "word": "mai phục",
          "meaning": "Nấp kín ở nơi hiểm yếu chờ thời cơ xông ra bất ngờ."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập hai — Trang 10, 11 (Chủ điểm 5: Đất nước ngàn năm)",
    "pedagogicalObjective": "Đọc hiểu truyện cổ tích, ca ngợi lòng dũng cảm, sự thông minh và tinh thần đoàn kết cứu muôn loài của chú Cóc tía.",
    "questions": [
      {
        "id": "tv-g3-b15-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nhờ đâu chú Cóc nhỏ bé lại chiến thắng được Thiên Lôi và buộc Ngọc Hoàng phải làm mưa?",
        "audioText": "Nhờ đâu chú Cóc nhỏ bé lại chiến thắng được Thiên Lôi và buộc Ngọc Hoàng phải làm mưa?",
        "options": [
          {
            "id": "a",
            "label": "Nhờ lòng dũng cảm, tài mưu trí và tinh thần đoàn kết của các bạn thú 🐸🦀🐻",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nhờ phép thuật biến hóa khổng lồ"
          },
          {
            "id": "c",
            "label": "Nhờ Cóc có nhiều tiền vàng"
          }
        ]
      }
    ]
  },
  "tv-g3-b16": {
    "passage": {
      "title": "Bài 16: Hai Bà Trưng",
      "author": "Theo Lịch sử Việt Nam",
      "genre": "story",
      "content": [
        "Thuở xưa, đất nước ta bị giặc ngoại xâm phương Bắc đô hộ. Quân giặc tàn bạo bóc lột của cải, giết hại dân lành và bắt dân ta lặn biển mò ngọc trai, lên rừng tìm ngà voi vô cùng khổ cực.",
        "Trước cảnh nước mất nhà tan, tại vùng Mê Linh, hai chị em Trưng Trắc và Trưng Nhị - những người phụ nữ tài giỏi, giỏi võ nghệ - đã phất cờ khởi nghĩa.",
        "Lời hịch cứu nước vang dội khắp non sông. Nhân dân khắp nơi nô nức kéo về tụ nghĩa dưới ngọn cờ của Hai Bà. Hai Bà Trưng uy phong cưỡi trên lưng voi chiến, dẫn đầu đoàn quân xông thẳng vào thành Luy Lâu.",
        "Quân giặc khiếp sợ bỏ chạy tan tác. Cuộc khởi nghĩa toàn thắng, nền độc lập của non sông được khôi phục trong niềm hân hoan rực rỡ của muôn dân."
      ],
      "audioNarration": "Bài 16: Hai Bà Trưng. Thuở xưa, đất nước ta bị giặc ngoại xâm phương Bắc đô hộ. Quân giặc tàn bạo bóc lột của cải, giết hại dân lành và bắt dân ta lặn biển mò ngọc trai, lên rừng tìm ngà voi vô cùng khổ cực. Trước cảnh nước mất nhà tan, tại vùng Mê Linh, hai chị em Trưng Trắc và Trưng Nhị - những người phụ nữ tài giỏi, giỏi võ nghệ - đã phất cờ khởi nghĩa. Lời hịch cứu nước vang dội khắp non sông. Nhân dân khắp nơi nô nức kéo về tụ nghĩa dưới ngọn cờ của Hai Bà. Hai Bà Trưng uy phong cưỡi trên lưng voi chiến, dẫn đầu đoàn quân xông thẳng vào thành Luy Lâu. Quân giặc khiếp sợ bỏ chạy tan tác. Cuộc khởi nghĩa toàn thắng, nền độc lập của non sông được khôi phục trong niềm hân hoan rực rỡ của muôn dân.",
      "vocabularyNotes": [
        {
          "word": "đô hộ",
          "meaning": "Thống trị và áp bức nhân dân một nước bị xâm lược."
        },
        {
          "word": "khởi nghĩa",
          "meaning": "Đứng lên cầm vũ khí chiến đấu giành lại độc lập tự do."
        },
        {
          "word": "uy phong",
          "meaning": "Dáng vẻ oai nghiêm, dũng mãnh khiến người khác kính phục."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập hai — Trang 16, 17 (Chủ điểm 5: Đất nước ngàn năm)",
    "pedagogicalObjective": "Tự hào về truyền thống yêu nước chống ngoại xâm oanh liệt của Hai Bà Trưng và phụ nữ Việt Nam.",
    "questions": [
      {
        "id": "tv-g3-b16-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Hình ảnh Hai Bà Trưng khi ra trận khởi nghĩa được miêu tả như thế nào?",
        "audioText": "Hình ảnh Hai Bà Trưng khi ra trận khởi nghĩa được miêu tả như thế nào?",
        "options": [
          {
            "id": "a",
            "label": "Uy phong lẫm liệt cưỡi voi chiến dẫn đầu đoàn quân xông pha trận mạc 🐘⚔️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi xe ngựa kéo"
          },
          {
            "id": "c",
            "label": "Đứng chỉ huy từ xa"
          }
        ]
      }
    ]
  },
  "tv-g3-b17": {
    "passage": {
      "title": "Bài 17: Đất nước tươi đẹp",
      "author": "Trần Đăng Khoa",
      "genre": "poem",
      "content": [
        "Đất nước em tươi đẹp\nTrải dài hình chữ S\nTừ ải Bắc Nam Quan\nĐến mũi Cà Mau xanh.",
        "Rừng vàng và biển bạc\nRuộng lúa chín mênh mông\nSông Cửu Long sóng cuộn\nĐắp bồi phù sa hồng.",
        "Em yêu từng tấc đất\nYêu ngọn gió quê hương\nNguyện chăm ngoan học giỏi\nXây non sông đẹp giàu."
      ],
      "audioNarration": "Bài 17: Đất nước tươi đẹp. Đất nước em tươi đẹp Trải dài hình chữ S Từ ải Bắc Nam Quan Đến mũi Cà Mau xanh. Rừng vàng và biển bạc Ruộng lúa chín mênh mông Sông Cửu Long sóng cuộn Đắp bồi phù sa hồng. Em yêu từng tấc đất Yêu ngọn gió quê hương Nguyện chăm ngoan học giỏi Xây non sông đẹp giàu.",
      "vocabularyNotes": [
        {
          "word": "phù sa",
          "meaning": "Đất cát màu mỡ do dòng nước sông cuốn trôi và bồi đắp."
        },
        {
          "word": "tấc đất",
          "meaning": "Một mảnh đất nhỏ, biểu tượng cho lãnh thổ thiêng liêng của Tổ quốc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập hai — Trang 22, 23 (Chủ điểm 5: Đất nước ngàn năm)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, cảm nhận sự giàu đẹp của dải đất hình chữ S và ý thức xây dựng quê hương.",
    "questions": [
      {
        "id": "tv-g3-b17-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Đất nước Việt Nam được tác giả miêu tả trải dài từ đâu đến đâu?",
        "audioText": "Đất nước Việt Nam được tác giả miêu tả trải dài từ đâu đến đâu?",
        "options": [
          {
            "id": "a",
            "label": "Từ ải Bắc Nam Quan đến mũi Cà Mau tận cùng phương Nam 🇻🇳🗺️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Chỉ ở vùng đồng bằng"
          },
          {
            "id": "c",
            "label": "Chỉ ở vùng đồi núi"
          }
        ]
      }
    ]
  },
  "tv-g3-b18": {
    "passage": {
      "title": "Bài 18: Bức thư gửi chú hải quân",
      "author": "SGK Tiếng Việt 3 Tập hai — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "\"Hà Nội, ngày 22 tháng 12 năm 2026",
        "Kính gửi chú hải quân nơi đảo xa!",
        "Cháu là Nguyễn Minh Anh, học sinh lớp 3A. Hôm nay, nhân ngày thành lập Quân đội nhân dân Việt Nam, cháu nắn nót viết bức thư này gửi tới chú.",
        "Ở đất liền, chúng cháu luôn được học hành dưới mái trường hòa bình, ấm no. Cháu biết rằng nơi đầu sóng ngọn gió, các chú phải chịu bao vất vả, dầm mưa dãi nắng để canh giữ từng tấc đảo thiêng liêng của Tổ quốc.",
        "Cháu xin hứa sẽ luôn chăm ngoan, học giỏi để mai sau lớn lên tiếp bước các chú xây dựng và bảo vệ đất nước! Cháu chúc chú luôn mạnh khỏe và vững tay súng!\"."
      ],
      "audioNarration": "Bài 18: Bức thư gửi chú hải quân. \"Hà Nội, ngày 22 tháng 12 năm 2026 Kính gửi chú hải quân nơi đảo xa! Cháu là Nguyễn Minh Anh, học sinh lớp 3A. Hôm nay, nhân ngày thành lập Quân đội nhân dân Việt Nam, cháu nắn nót viết bức thư này gửi tới chú. Ở đất liền, chúng cháu luôn được học hành dưới mái trường hòa bình, ấm no. Cháu biết rằng nơi đầu sóng ngọn gió, các chú phải chịu bao vất vả, dầm mưa dãi nắng để canh giữ từng tấc đảo thiêng liêng của Tổ quốc. Cháu xin hứa sẽ luôn chăm ngoan, học giỏi để mai sau lớn lên tiếp bước các chú xây dựng và bảo vệ đất nước! Cháu chúc chú luôn mạnh khỏe và vững tay súng!\".",
      "vocabularyNotes": [
        {
          "word": "đầu sóng ngọn gió",
          "meaning": "Nơi nguy hiểm, gian nan và đối mặt trực tiếp với sóng gió biển khơi."
        },
        {
          "word": "vững tay súng",
          "meaning": "Kiên định, cảnh giác cao độ trong nhiệm vụ bảo vệ Tổ quốc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập hai — Trang 28, 29 (Chủ điểm 6: Biển đảo quê hương)",
    "pedagogicalObjective": "Tập đọc và hiểu hình thức bức thư thăm hỏi, bồi dưỡng tình cảm gắn bó giữa đất liền và hải đảo.",
    "questions": [
      {
        "id": "tv-g3-b18-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Bức thư của bạn nhỏ thể hiện tình cảm gì đối với các chú bộ đội hải quân?",
        "audioText": "Bức thư của bạn nhỏ thể hiện tình cảm gì đối với các chú bộ đội hải quân?",
        "options": [
          {
            "id": "a",
            "label": "Lòng biết ơn sâu sắc, sự khâm phục và lời hứa chăm ngoan học giỏi 💌⚓",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Xin quà bánh từ đảo xa"
          },
          {
            "id": "c",
            "label": "Mời chú về đất liền chơi game"
          }
        ]
      }
    ]
  },
  "tv-g3-b19": {
    "passage": {
      "title": "Bài 19: Chú hải quân canh giữ đảo xa",
      "author": "Định Hải",
      "genre": "poem",
      "content": [
        "Gió gầm trên ngọn sóng\nĐảo chìm trong màn sương\nChú hải quân đứng gác\nVững vàng nơi biên cương.",
        "Áo chú màu biển cả\nNgôi sao vàng trên mũ\nĐôi mắt sáng tinh anh\nCanh giữ trời quê hương.",
        "Cho em vui đến lớp\nCho câu hát rộn ràng\nĐảo xa luôn có chú\nĐất liền mãi bình yên."
      ],
      "audioNarration": "Bài 19: Chú hải quân canh giữ đảo xa. Gió gầm trên ngọn sóng Đảo chìm trong màn sương Chú hải quân đứng gác Vững vàng nơi biên cương. Áo chú màu biển cả Ngôi sao vàng trên mũ Đôi mắt sáng tinh anh Canh giữ trời quê hương. Cho em vui đến lớp Cho câu hát rộn ràng Đảo xa luôn có chú Đất liền mãi bình yên.",
      "vocabularyNotes": [
        {
          "word": "tinh anh",
          "meaning": "Sáng sủa, thông minh và nhanh nhạy."
        },
        {
          "word": "biên cương",
          "meaning": "Vùng ranh giới bờ cõi thiêng liêng của đất nước."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập hai — Trang 34, 35 (Chủ điểm 6: Biển đảo quê hương)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, ca ngợi tinh thần quả cảm, kiên trung của các chiến sĩ hải quân.",
    "questions": [
      {
        "id": "tv-g3-b19-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Hình ảnh chú hải quân đứng gác nơi đảo xa đem lại điều gì cho đất liền?",
        "audioText": "Hình ảnh chú hải quân đứng gác nơi đảo xa đem lại điều gì cho đất liền?",
        "options": [
          {
            "id": "a",
            "label": "Đem lại cuộc sống hòa bình, yên vui cho các bạn nhỏ học hành 🕊️📖",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đem lại nhiều tôm cá"
          },
          {
            "id": "c",
            "label": "Đem lại cơn gió mát"
          }
        ]
      }
    ]
  },
  "tv-g3-b20": {
    "passage": {
      "title": "Bài 20: Bác sĩ Y-éc-xanh",
      "author": "Theo Đức Hoài",
      "genre": "story",
      "content": [
        "Bác sĩ A-lếch-xăng Y-éc-xanh là một nhà khoa học vĩ đại người Pháp gốc Thụy Sĩ nhưng đã dành trọn cả cuộc đời mình để cống hiến cho đất nước và nhân dân Việt Nam.",
        "Ông đã tìm ra vi khuẩn dịch hạch và bào chế thành công vắc-xin cứu sống hàng triệu người. Ông chọn mảnh đất Nha Trang hiền hòa làm quê hương thứ hai của mình.",
        "Hằng ngày, ông tận tình khám chữa bệnh miễn phí cho người nghèo, chia sẻ đồ chơi và sách vở cho trẻ em xóm chài. Khi được hỏi vì sao ông không về sống ở những đô thị tráng lệ ở Pháp, ông mỉm cười đáp: \"Tổ quốc của tôi là nơi tôi có thể làm việc và giúp đỡ những con người cần tôi nhất!\"."
      ],
      "audioNarration": "Bài 20: Bác sĩ Y-éc-xanh. Bác sĩ A-lếch-xăng Y-éc-xanh là một nhà khoa học vĩ đại người Pháp gốc Thụy Sĩ nhưng đã dành trọn cả cuộc đời mình để cống hiến cho đất nước và nhân dân Việt Nam. Ông đã tìm ra vi khuẩn dịch hạch và bào chế thành công vắc-xin cứu sống hàng triệu người. Ông chọn mảnh đất Nha Trang hiền hòa làm quê hương thứ hai của mình. Hằng ngày, ông tận tình khám chữa bệnh miễn phí cho người nghèo, chia sẻ đồ chơi và sách vở cho trẻ em xóm chài. Khi được hỏi vì sao ông không về sống ở những đô thị tráng lệ ở Pháp, ông mỉm cười đáp: \"Tổ quốc của tôi là nơi tôi có thể làm việc và giúp đỡ những con người cần tôi nhất!\".",
      "vocabularyNotes": [
        {
          "word": "cống hiến",
          "meaning": "Đóng góp toàn bộ tâm sức và trí tuệ cho sự nghiệp chung cao đẹp."
        },
        {
          "word": "dịch hạch",
          "meaning": "Bệnh truyền nhiễm nguy hiểm từng gây đại dịch trong lịch sử."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập hai — Trang 40, 41 (Chủ điểm 7: Những người bạn quốc tế)",
    "pedagogicalObjective": "Khâm phục nhân cách cao cả, lòng nhân ái bao la và cống hiến vĩ đại của bác sĩ Y-éc-xanh cho nhân dân Việt Nam.",
    "questions": [
      {
        "id": "tv-g3-b20-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Vì sao bác sĩ Y-éc-xanh quyết định gắn bó cả cuộc đời mình tại Nha Trang - Việt Nam?",
        "audioText": "Vì sao bác sĩ Y-éc-xanh quyết định gắn bó cả cuộc đời mình tại Nha Trang - Việt Nam?",
        "options": [
          {
            "id": "a",
            "label": "Vì tấm lòng nhân ái muốn nghiên cứu y học và tận tụy chữa bệnh giúp đỡ người dân nghèo 👨‍⚕️❤️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Vì ông thích đi tắm biển"
          },
          {
            "id": "c",
            "label": "Vì ông không thể về nước"
          }
        ]
      }
    ]
  },
  "tv-g3-b21": {
    "passage": {
      "title": "Bài 21: Người trí thức yêu nước",
      "author": "Theo Bác sĩ Đặng Văn Ngữ",
      "genre": "story",
      "content": [
        "Giáo sư, Bác sĩ Đặng Văn Ngữ là một nhà khoa học tài năng từng học tập và nghiên cứu y khoa xuất sắc tại Nhật Bản.",
        "Năm 1950, nghe theo lời kêu gọi thiêng liêng của Bác Hồ, ông đã từ bỏ cuộc sống giàu sang và tiện nghi ở nước ngoài để vượt hàng ngàn cây số băng rừng lội suối trở về chiến khu Việt Bắc tham gia kháng chiến.",
        "Trong điều kiện thiếu thốn trăm bề của núi rừng, ông đã sáng chế thành công thuốc kháng sinh Pê-ni-xi-lin quý giá ngay tại lán nứa, cứu sống hàng vạn thương bệnh binh ngoài mặt trận. Tấm gương yêu nước của ông mãi mãi là niềm tự hào của trí thức Việt Nam."
      ],
      "audioNarration": "Bài 21: Người trí thức yêu nước. Giáo sư, Bác sĩ Đặng Văn Ngữ là một nhà khoa học tài năng từng học tập và nghiên cứu y khoa xuất sắc tại Nhật Bản. Năm 1950, nghe theo lời kêu gọi thiêng liêng của Bác Hồ, ông đã từ bỏ cuộc sống giàu sang và tiện nghi ở nước ngoài để vượt hàng ngàn cây số băng rừng lội suối trở về chiến khu Việt Bắc tham gia kháng chiến. Trong điều kiện thiếu thốn trăm bề của núi rừng, ông đã sáng chế thành công thuốc kháng sinh Pê-ni-xi-lin quý giá ngay tại lán nứa, cứu sống hàng vạn thương bệnh binh ngoài mặt trận. Tấm gương yêu nước của ông mãi mãi là niềm tự hào của trí thức Việt Nam.",
      "vocabularyNotes": [
        {
          "word": "trí thức",
          "meaning": "Người có trình độ học vấn cao, làm việc bằng trí óc."
        },
        {
          "word": "kháng sinh",
          "meaning": "Thuốc có tác dụng tiêu diệt vi khuẩn gây bệnh trong cơ thể."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập hai — Trang 46, 47 (Chủ điểm 7: Những người bạn quốc tế)",
    "pedagogicalObjective": "Tự hào và noi gương tấm lòng yêu nước nồng nàn, sẵn sàng hy sinh cống hiến của Giáo sư Đặng Văn Ngữ.",
    "questions": [
      {
        "id": "tv-g3-b21-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Giáo sư Đặng Văn Ngữ đã có đóng góp vĩ đại gì trong cuộc kháng chiến?",
        "audioText": "Giáo sư Đặng Văn Ngữ đã có đóng góp vĩ đại gì trong cuộc kháng chiến?",
        "options": [
          {
            "id": "a",
            "label": "Nghiên cứu sản xuất thuốc kháng sinh cứu sống hàng vạn thương bệnh binh 💊🎖️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Chế tạo súng đạn"
          },
          {
            "id": "c",
            "label": "Làm kinh doanh"
          }
        ]
      }
    ]
  },
  "tv-g3-b22": {
    "passage": {
      "title": "Bài 22: Trái Đất xanh của chúng mình",
      "author": "Định Hải",
      "genre": "poem",
      "content": [
        "Trái Đất là quả bóng xanh\nBay giữa tầng không bao la\nCó rừng cây ngát hương thơm\nCó đại dương xanh dạt dào.",
        "Cùng nhau chung tay góp sức\nTrồng thêm muôn ngàn cây xanh\nGiữ cho dòng sông trong biếc\nBầu trời luôn mãi trong lành.",
        "Trái Đất ngôi nhà chung đẹp\nCủa tất cả bạn nhỏ chúng mình\nHãy cùng cất cao tiếng hát\nVì một hành tinh tươi xinh."
      ],
      "audioNarration": "Bài 22: Trái Đất xanh của chúng mình. Trái Đất là quả bóng xanh Bay giữa tầng không bao la Có rừng cây ngát hương thơm Có đại dương xanh dạt dào. Cùng nhau chung tay góp sức Trồng thêm muôn ngàn cây xanh Giữ cho dòng sông trong biếc Bầu trời luôn mãi trong lành. Trái Đất ngôi nhà chung đẹp Của tất cả bạn nhỏ chúng mình Hãy cùng cất cao tiếng hát Vì một hành tinh tươi xinh.",
      "vocabularyNotes": [
        {
          "word": "ngôi nhà chung",
          "meaning": "Môi trường sống bao la che chở cho toàn thể nhân loại trên Trái Đất."
        },
        {
          "word": "hành tinh",
          "meaning": "Thiên thể quay quanh mặt trời, ở đây chỉ Trái Đất."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập hai — Trang 52, 53 (Chủ điểm 8: Ngôi nhà chung Trái Đất)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, nâng cao ý thức giữ gìn vệ sinh môi trường và bảo vệ hành tinh xanh.",
    "questions": [
      {
        "id": "tv-g3-b22-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Bài thơ kêu gọi các bạn nhỏ làm những việc gì để bảo vệ Trái Đất?",
        "audioText": "Bài thơ kêu gọi các bạn nhỏ làm những việc gì để bảo vệ Trái Đất?",
        "options": [
          {
            "id": "a",
            "label": "Trồng thêm cây xanh, giữ gìn nguồn nước và bảo vệ bầu không khí trong lành 🌍🌱",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Xả rác bừa bãi"
          },
          {
            "id": "c",
            "label": "Chặt phá cây xanh"
          }
        ]
      }
    ]
  },
  "tv-g3-b23": {
    "passage": {
      "title": "Bài 23: Cùng vui chơi trong nắng mới",
      "author": "Võ Quảng",
      "genre": "poem",
      "content": [
        "Nắng vàng trải khắp sân trường\nTiếng cười rộn rã muôn phương vang lừng\nNhảy dây, đá cầu tưng bừng\nĐôi chân thoăn thoắt nhịp cùng niềm vui.",
        "Bóng bay rực rỡ sắc màu\nBạn bè đoàn kết bên nhau chan hòa\nGiờ chơi trôi thật là nhanh\nTiếng chuông lại giục chúng mình vào lớp."
      ],
      "audioNarration": "Bài 23: Cùng vui chơi trong nắng mới. Nắng vàng trải khắp sân trường Tiếng cười rộn rã muôn phương vang lừng Nhảy dây, đá cầu tưng bừng Đôi chân thoăn thoắt nhịp cùng niềm vui. Bóng bay rực rỡ sắc màu Bạn bè đoàn kết bên nhau chan hòa Giờ chơi trôi thật là nhanh Tiếng chuông lại giục chúng mình vào lớp.",
      "vocabularyNotes": [
        {
          "word": "chan hòa",
          "meaning": "Hòa đồng, thân thiện và tràn ngập tình cảm ấm áp."
        },
        {
          "word": "thoăn thoắt",
          "meaning": "Nhanh nhẹn và liên tục, không ngừng nghỉ."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập hai — Trang 58, 59 (Chủ điểm 8: Ngôi nhà chung Trái Đất)",
    "pedagogicalObjective": "Cảm nhận niềm vui tươi lành mạnh của các trò chơi vận động trong giờ ra chơi tại trường.",
    "questions": [
      {
        "id": "tv-g3-b23-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Những trò chơi nào mang lại niềm vui rộn rã trong giờ ra chơi?",
        "audioText": "Những trò chơi nào mang lại niềm vui rộn rã trong giờ ra chơi?",
        "options": [
          {
            "id": "a",
            "label": "Nhảy dây, đá cầu và chơi đùa cùng bạn bè dưới nắng vàng ⚽🤸‍♀️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nằm ngủ gục trên bàn"
          },
          {
            "id": "c",
            "label": "Tranh giành đồ chơi"
          }
        ]
      }
    ]
  },
  "tv-g3-b24": {
    "passage": {
      "title": "Bài 24: Hương lúa chín đầu mùa",
      "author": "Thạch Lam",
      "genre": "prose",
      "content": [
        "Cơn gió mùa thu thoảng qua mang theo hương vị tinh khiết và ngọt ngào của những bông lúa nếp non đầu mùa.",
        "Trên cánh đồng, từng hạt thóc ngậm sữa trắng ngần đang căng tròn dưới ánh nắng dịu dàng. Bác nông dân đi giữa bờ ruộng, ánh mắt ngập tràn niềm vui sướng khi ngắm nhìn thành quả bao tháng ngày dãi nắng dầm sương.",
        "Hương cốm mới thơm thoang thoảng như gói trọn tình yêu thương của đất trời và tấm lòng thơm thảo của con người quê hương."
      ],
      "audioNarration": "Bài 24: Hương lúa chín đầu mùa. Cơn gió mùa thu thoảng qua mang theo hương vị tinh khiết và ngọt ngào của những bông lúa nếp non đầu mùa. Trên cánh đồng, từng hạt thóc ngậm sữa trắng ngần đang căng tròn dưới ánh nắng dịu dàng. Bác nông dân đi giữa bờ ruộng, ánh mắt ngập tràn niềm vui sướng khi ngắm nhìn thành quả bao tháng ngày dãi nắng dầm sương. Hương cốm mới thơm thoang thoảng như gói trọn tình yêu thương của đất trời và tấm lòng thơm thảo của con người quê hương.",
      "vocabularyNotes": [
        {
          "word": "tinh khiết",
          "meaning": "Hoàn toàn sạch sẽ, trong lành, không lẫn bất kỳ tạp chất nào."
        },
        {
          "word": "thơm thảo",
          "meaning": "Tốt bụng, giàu lòng thơm thảo và biết quan tâm đến người khác."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập hai — Trang 64, 65 (Chủ điểm 8: Ngôi nhà chung Trái Đất)",
    "pedagogicalObjective": "Cảm nhận hương vị ngọt ngào của lúa nếp mùa thu và tình cảm gắn bó với quê hương qua áng văn của Thạch Lam.",
    "questions": [
      {
        "id": "tv-g3-b24-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Hương vị của bông lúa nếp non được nhà văn Thạch Lam miêu tả như thế nào?",
        "audioText": "Hương vị của bông lúa nếp non được nhà văn Thạch Lam miêu tả như thế nào?",
        "options": [
          {
            "id": "a",
            "label": "Tinh khiết, ngọt ngào và ngậm sữa thơm lừng hương cốm mới 🌾✨",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Cay nồng"
          },
          {
            "id": "c",
            "label": "Không có mùi vị"
          }
        ]
      }
    ]
  },
  "tv-g3-b25": {
    "passage": {
      "title": "Bài 25: Đấu trường Trạng Nguyên nhí Lớp 3",
      "author": "SGK Tiếng Việt 3 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Đấu trường Trạng Nguyên nhí là ngày hội đua tài kiến thức Tiếng Việt tổng kết toàn diện năm học Lớp 3.",
        "Các bạn học sinh cùng nhau ôn luyện kỹ năng đọc hiểu văn bản, nhận biết biện pháp tu từ so sánh, mở rộng vốn từ vựng về thiên nhiên, gia đình, nhà trường và đất nước.",
        "Chúc các sĩ tử nhí luôn tự tin, thông minh, phát huy tối đa năng lực ngôn ngữ để chinh phục đỉnh cao tri thức!"
      ],
      "audioNarration": "Bài 25: Đấu trường Trạng Nguyên nhí Lớp 3. Đấu trường Trạng Nguyên nhí là ngày hội đua tài kiến thức Tiếng Việt tổng kết toàn diện năm học Lớp 3. Các bạn học sinh cùng nhau ôn luyện kỹ năng đọc hiểu văn bản, nhận biết biện pháp tu từ so sánh, mở rộng vốn từ vựng về thiên nhiên, gia đình, nhà trường và đất nước. Chúc các sĩ tử nhí luôn tự tin, thông minh, phát huy tối đa năng lực ngôn ngữ để chinh phục đỉnh cao tri thức!",
      "vocabularyNotes": [
        {
          "word": "Trạng Nguyên",
          "meaning": "Danh hiệu cao quý nhất dành cho người đỗ đầu trong các kỳ thi thời xưa."
        },
        {
          "word": "sĩ tử",
          "meaning": "Người đi thi, thí sinh tham dự kỳ thi đua tài."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 3 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 3 Tập hai — Trang 70, 71 (Chủ điểm 8: Ngôi nhà chung Trái Đất)",
    "pedagogicalObjective": "Tổng kết kiến thức kỹ năng Tiếng Việt Lớp 3 và bồi dưỡng lòng tự tin chinh phục tri thức.",
    "questions": [
      {
        "id": "tv-g3-b25-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Đấu trường Trạng Nguyên nhí giúp học sinh rèn luyện những năng lực gì?",
        "audioText": "Đấu trường Trạng Nguyên nhí giúp học sinh rèn luyện những năng lực gì?",
        "options": [
          {
            "id": "a",
            "label": "Kỹ năng đọc hiểu, sử dụng từ ngữ và vận dụng biện pháp so sánh sáng tạo 🏆📖",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Chơi game điện tử"
          },
          {
            "id": "c",
            "label": "Học nhảy hiện đại"
          }
        ]
      }
    ]
  },
  "tv-g4-b1": {
    "passage": {
      "title": "Bài 1: Dế Mèn bênh vực kẻ yếu (Phần 1)",
      "author": "Tô Hoài",
      "genre": "story",
      "content": [
        "Một hôm, qua một vùng cỏ xước xanh dài, tôi chợt nghe tiếng khóc tỉ tê. Đi vài bước nữa, tôi gặp chị Nhà Trò ngồi gục đầu bên tảng đá cuội.",
        "Chị Nhà Trò đã nhỏ lại gầy yếu quá, người bự những phấn, như mới lột. Chị mặc áo thâm dài, đôi chỗ chấm điểm vàng, hai cánh mỏng như cánh bướm non, lại ngắn chùn chùn. Hình như cánh yếu quá, chưa quen mở, mà cho dù có khỏe cũng chẳng bay được xa. Tôi đến gần, chị Nhà Trò vẫn khóc nức nở.",
        "Gặng hỏi mãi, chị mới kể: \"Năm trước, gặp khi trời làm đói kém, mẹ em phải vay lương ăn của bọn nhện. Sau đấy, không may mẹ em mất đi, còn lại thui thủi có mình em. Mà em ốm yếu, kiếm bữa cũng chẳng đủ. Lâm vào cảnh nghèo túng, mấy bận bọn nhện đã đánh em. Hôm nay chúng chăng tơ ngang đường đe bắt em, vặt chân, vặt cánh ăn thịt!\".",
        "Tôi xòe cả hai càng ra, bảo Nhà Trò: \"Em đừng sợ. Hãy trở về cùng với tôi đây. Đứa độc ác không thể cậy khỏe ăn hiếp kẻ yếu được!\". Rồi tôi dắt Nhà Trò đi tới chỗ mai phục của bọn nhện."
      ],
      "audioNarration": "Bài 1: Dế Mèn bênh vực kẻ yếu (Phần 1). Một hôm, qua một vùng cỏ xước xanh dài, tôi chợt nghe tiếng khóc tỉ tê. Đi vài bước nữa, tôi gặp chị Nhà Trò ngồi gục đầu bên tảng đá cuội. Chị Nhà Trò đã nhỏ lại gầy yếu quá, người bự những phấn, như mới lột. Chị mặc áo thâm dài, đôi chỗ chấm điểm vàng, hai cánh mỏng như cánh bướm non, lại ngắn chùn chùn. Hình như cánh yếu quá, chưa quen mở, mà cho dù có khỏe cũng chẳng bay được xa. Tôi đến gần, chị Nhà Trò vẫn khóc nức nở. Gặng hỏi mãi, chị mới kể: \"Năm trước, gặp khi trời làm đói kém, mẹ em phải vay lương ăn của bọn nhện. Sau đấy, không may mẹ em mất đi, còn lại thui thủi có mình em. Mà em ốm yếu, kiếm bữa cũng chẳng đủ. Lâm vào cảnh nghèo túng, mấy bận bọn nhện đã đánh em. Hôm nay chúng chăng tơ ngang đường đe bắt em, vặt chân, vặt cánh ăn thịt!\". Tôi xòe cả hai càng ra, bảo Nhà Trò: \"Em đừng sợ. Hãy trở về cùng với tôi đây. Đứa độc ác không thể cậy khỏe ăn hiếp kẻ yếu được!\". Rồi tôi dắt Nhà Trò đi tới chỗ mai phục của bọn nhện.",
      "vocabularyNotes": [
        {
          "word": "cỏ xước",
          "meaning": "Loại cỏ thân mảnh, quả có gai nhọn dễ bám vào quần áo."
        },
        {
          "word": "áo thâm",
          "meaning": "Áo màu đen hoặc màu tối sẫm."
        },
        {
          "word": "bự",
          "meaning": "Rất nhiều, phủ đầy dày đặc trên bề mặt."
        },
        {
          "word": "lương ăn",
          "meaning": "Lương thực dùng để ăn hằng ngày."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập một — Trang 10, 11 (Chủ điểm 1: Thương người như thể thương thân)",
    "pedagogicalObjective": "Đọc diễn cảm trích đoạn truyện kinh điển của Tô Hoài, cảm nhận tấm lòng hiệp nghĩa, bênh vực kẻ yếu của Dế Mèn.",
    "questions": [
      {
        "id": "tv-g4-b1-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Hình dáng chị Nhà Trò được nhà văn Tô Hoài miêu tả như thế nào?",
        "audioText": "Hình dáng chị Nhà Trò được nhà văn Tô Hoài miêu tả như thế nào?",
        "options": [
          {
            "id": "a",
            "label": "Nhỏ bé gầy yếu, người bự phấn, cánh mỏng ngắn chùn chùn như bướm non 🦋",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "To lớn, khỏe mạnh và hung dữ"
          },
          {
            "id": "c",
            "label": "Có đôi cánh bằng sắt"
          }
        ]
      },
      {
        "id": "tv-g4-b1-q2",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Lời nói và hành động nào của Dế Mèn thể hiện tinh thần hào hiệp?",
        "audioText": "Lời nói và hành động nào của Dế Mèn thể hiện tinh thần hào hiệp?",
        "options": [
          {
            "id": "a",
            "label": "Xòe hai càng bảo vệ Nhà Trò và tuyên bố kẻ ác không thể cậy khỏe ăn hiếp kẻ yếu 🦗✨",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Bỏ chạy trốn bọn nhện"
          },
          {
            "id": "c",
            "label": "Bắt Nhà Trò nộp tiền cho mình"
          }
        ]
      }
    ]
  },
  "tv-g4-b2": {
    "passage": {
      "title": "Bài 2: Truyện cổ nước mình",
      "author": "Lâm Thị Mỹ Dạ",
      "genre": "poem",
      "content": [
        "Tôi yêu truyện cổ nước tôi\nVừa nhân hậu lại tuyệt vời sâu xa\nThương người rồi mới thương ta\nYêu nhau dù mấy cách xa cũng tìm.",
        "Ở hiền thì lại gặp hiền\nNgười ngay thì gặp người tiên độ trì\nMang theo truyện cổ tôi đi\nNghe trong cuộc sống thầm thì tiếng xưa.",
        "Vàng cơn nắng, trắng cơn mưa\nCon sông chảy có rặng dừa nghiêng soi\nĐời cha ông với đời tôi\nNhư con sông với chân trời đã xa\nChỉ còn truyện cổ thiết tha\nCho tôi nhận mặt ông cha của mình."
      ],
      "audioNarration": "Bài 2: Truyện cổ nước mình. Tôi yêu truyện cổ nước tôi Vừa nhân hậu lại tuyệt vời sâu xa Thương người rồi mới thương ta Yêu nhau dù mấy cách xa cũng tìm. Ở hiền thì lại gặp hiền Người ngay thì gặp người tiên độ trì Mang theo truyện cổ tôi đi Nghe trong cuộc sống thầm thì tiếng xưa. Vàng cơn nắng, trắng cơn mưa Con sông chảy có rặng dừa nghiêng soi Đời cha ông với đời tôi Như con sông với chân trời đã xa Chỉ còn truyện cổ thiết tha Cho tôi nhận mặt ông cha của mình.",
      "vocabularyNotes": [
        {
          "word": "độ trì",
          "meaning": "Thần tiên, Phật theo dõi giúp đỡ và bảo vệ người hiền lành."
        },
        {
          "word": "ông cha",
          "meaning": "Các thế hệ tổ tiên đi trước để lại truyền thống tốt đẹp."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập một — Trang 14, 15 (Chủ điểm 1: Thương người như thể thương thân)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, hiểu ý nghĩa nhân văn sâu sắc của truyện cổ tích nước nhà.",
    "questions": [
      {
        "id": "tv-g4-b2-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Vì sao nhà thơ Lâm Thị Mỹ Dạ lại yêu tha thiết truyện cổ nước mình?",
        "audioText": "Vì sao nhà thơ Lâm Thị Mỹ Dạ lại yêu tha thiết truyện cổ nước mình?",
        "options": [
          {
            "id": "a",
            "label": "Vì truyện cổ vừa nhân hậu, sâu xa lại dạy ta đạo lý ở hiền gặp lành 📜❤️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Vì truyện ngắn dễ đọc"
          },
          {
            "id": "c",
            "label": "Vì trong truyện có nhiều phép lạ vui nhộn"
          }
        ]
      }
    ]
  },
  "tv-g4-b3": {
    "passage": {
      "title": "Bài 3: Thư thăm bạn",
      "author": "Lương Ngọc Mạch",
      "genre": "prose",
      "content": [
        "\"Hòa Bình, ngày 5 tháng 8 năm 2026",
        "Bạn Hồng thân mến!",
        "Mình là Quách Tuấn Lương, học sinh lớp 4B Trường Tiểu học Kim Đồng. Mình biết tin qua đài truyền hình rằng đợt bão lũ vừa qua đã làm ngập lụt quê bạn, và ba của bạn - người chiến sĩ công an dũng cảm - đã hy sinh khi cứu giúp dân làng vượt qua dòng nước xiết.",
        "Mình viết thư này gửi lời chia buồn sâu sắc nhất tới bạn và gia đình. Mình rất khâm phục sự hy sinh anh dũng của ba bạn. Trường mình đang tổ chức quyên góp sách vở, đồ dùng học tập gửi tặng các bạn vùng lũ. Mình gửi tặng bạn một bộ sách giáo khoa và chiếc hộp bút màu.",
        "Chúc bạn luôn kiên cường, sớm vượt qua nỗi đau để học tập thật tốt! Bạn của Hồng: Quách Tuấn Lương\"."
      ],
      "audioNarration": "Bài 3: Thư thăm bạn. \"Hòa Bình, ngày 5 tháng 8 năm 2026 Bạn Hồng thân mến! Mình là Quách Tuấn Lương, học sinh lớp 4B Trường Tiểu học Kim Đồng. Mình biết tin qua đài truyền hình rằng đợt bão lũ vừa qua đã làm ngập lụt quê bạn, và ba của bạn - người chiến sĩ công an dũng cảm - đã hy sinh khi cứu giúp dân làng vượt qua dòng nước xiết. Mình viết thư này gửi lời chia buồn sâu sắc nhất tới bạn và gia đình. Mình rất khâm phục sự hy sinh anh dũng của ba bạn. Trường mình đang tổ chức quyên góp sách vở, đồ dùng học tập gửi tặng các bạn vùng lũ. Mình gửi tặng bạn một bộ sách giáo khoa và chiếc hộp bút màu. Chúc bạn luôn kiên cường, sớm vượt qua nỗi đau để học tập thật tốt! Bạn của Hồng: Quách Tuấn Lương\".",
      "vocabularyNotes": [
        {
          "word": "nước xiết",
          "meaning": "Dòng nước chảy rất mạnh và cuồn cuộn xiết nguy hiểm."
        },
        {
          "word": "quyên góp",
          "meaning": "Vận động đóng góp tiền của, vật chất để làm việc nghĩa từ thiện."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập một — Trang 18, 19 (Chủ điểm 1: Thương người như thể thương thân)",
    "pedagogicalObjective": "Tập đọc và viết thư thăm hỏi, bồi dưỡng tình cảm sẻ chia với những hoàn cảnh khó khăn.",
    "questions": [
      {
        "id": "tv-g4-b3-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Bức thư của bạn Quách Tuấn Lương gửi gắm điều gì tới bạn Hồng?",
        "audioText": "Bức thư của bạn Quách Tuấn Lương gửi gắm điều gì tới bạn Hồng?",
        "options": [
          {
            "id": "a",
            "label": "Sự cảm thông, sẻ chia nỗi đau và động viên bạn vượt lên hoàn cảnh 💌🤝",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Rủ bạn đi chơi xa"
          },
          {
            "id": "c",
            "label": "Khoe thành tích học tập"
          }
        ]
      }
    ]
  },
  "tv-g4-b4": {
    "passage": {
      "title": "Bài 4: Dế Mèn bênh vực kẻ yếu (Phần 2)",
      "author": "Tô Hoài",
      "genre": "story",
      "content": [
        "Bọn nhện chăng tơ kín mít từ bên nọ sang bên kia khe núi. Giữa lối đi lù lù một con nhện cái to sụ, mắt vằn đỏ hung ác, xung quanh là lũ nhện con đứng gườm gườm.",
        "Tôi bước tới, cất tiếng hỏi lớn: \"Ai đứng chóp bu bọn mày? Ra đây ta nói chuyện!\". Một con nhện già lóp ngóp bò ra. Tôi quát: \"Các ngươi có của ăn của để, béo múp béo míp, mà lại đi đòi nợ một mớ cỏ rác của kẻ nghèo hèn, lại còn đe vặt chân vặt cánh ăn thịt người ta! Thật hèn hạ!\".",
        "Nói rồi, tôi co cẳng đạp phanh phách vào thành đá, rung chuyển cả mạng nhện. Lũ nhện sợ chết khiếp, đồng thanh van lạy: \"Xin tha mạng! Chúng tôi xin đốt hết văn tự nợ và phá bỏ mạng nhện ngay ạ!\".",
        "Tôi bảo Nhà Trò: \"Từ nay em cứ yên tâm mà làm ăn, không ai dám ức hiếp em nữa đâu!\". Cả vùng cỏ xước lại rộn rã tiếng hát ca thanh bình."
      ],
      "audioNarration": "Bài 4: Dế Mèn bênh vực kẻ yếu (Phần 2). Bọn nhện chăng tơ kín mít từ bên nọ sang bên kia khe núi. Giữa lối đi lù lù một con nhện cái to sụ, mắt vằn đỏ hung ác, xung quanh là lũ nhện con đứng gườm gườm. Tôi bước tới, cất tiếng hỏi lớn: \"Ai đứng chóp bu bọn mày? Ra đây ta nói chuyện!\". Một con nhện già lóp ngóp bò ra. Tôi quát: \"Các ngươi có của ăn của để, béo múp béo míp, mà lại đi đòi nợ một mớ cỏ rác của kẻ nghèo hèn, lại còn đe vặt chân vặt cánh ăn thịt người ta! Thật hèn hạ!\". Nói rồi, tôi co cẳng đạp phanh phách vào thành đá, rung chuyển cả mạng nhện. Lũ nhện sợ chết khiếp, đồng thanh van lạy: \"Xin tha mạng! Chúng tôi xin đốt hết văn tự nợ và phá bỏ mạng nhện ngay ạ!\". Tôi bảo Nhà Trò: \"Từ nay em cứ yên tâm mà làm ăn, không ai dám ức hiếp em nữa đâu!\". Cả vùng cỏ xước lại rộn rã tiếng hát ca thanh bình.",
      "vocabularyNotes": [
        {
          "word": "chóp bu",
          "meaning": "Người đứng đầu cầm đầu một phe nhóm."
        },
        {
          "word": "béo múp",
          "meaning": "Béo tròn trịa, đẫy đà thịt mỡ."
        },
        {
          "word": "văn tự nợ",
          "meaning": "Giấy tờ ghi nhận việc vay nợ thời xưa."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập một — Trang 22, 23 (Chủ điểm 1: Thương người như thể thương thân)",
    "pedagogicalObjective": "Hiểu sức mạnh của lẽ phải, sự dũng cảm và tinh thần thượng võ bảo vệ công lý của Dế Mèn.",
    "questions": [
      {
        "id": "tv-g4-b4-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Dế Mèn đã dùng lẽ phải và hành động gì để khuất phục bọn nhện độc ác?",
        "audioText": "Dế Mèn đã dùng lẽ phải và hành động gì để khuất phục bọn nhện độc ác?",
        "options": [
          {
            "id": "a",
            "label": "Vạch trần sự bất công hèn hạ và đạp gãy mạng nhện thị uy sức mạnh 🦗⚖️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đưa tiền trả nợ thay"
          },
          {
            "id": "c",
            "label": "Bắt Nhà Trò làm nô lệ cho nhện"
          }
        ]
      }
    ]
  },
  "tv-g4-b5": {
    "passage": {
      "title": "Bài 5: Mười năm cõng bạn đi học",
      "author": "Theo Báo Tiền Phong",
      "genre": "story",
      "content": [
        "Ở xã Vinh Quang, huyện Chiêm Hóa, tỉnh Tuyên Quang, ai cũng khâm phục tình bạn cảm động của hai bạn Đoàn Trường Sinh và Hanh.",
        "Hanh bị tật nguyền bẩm sinh ở đôi chân, không thể tự đi lại được. Thấy bạn khao khát được đến trường học chữ, Sinh đã tự nguyện ngày ngày cõng bạn vượt qua những con đường đèo dốc gập ghềnh lầy lội để tới lớp.",
        "Ròng rã suốt mười năm trời, dù ngày nắng gắt hay mùa đông mưa phùn gió bấc, Sinh vẫn kiên trì cõng Hanh đi học. Tình bạn cao đẹp và đức hy sinh vô tư của Sinh đã trở thành tấm gương sáng ngời cho thiếu nhi cả nước noi theo."
      ],
      "audioNarration": "Bài 5: Mười năm cõng bạn đi học. Ở xã Vinh Quang, huyện Chiêm Hóa, tỉnh Tuyên Quang, ai cũng khâm phục tình bạn cảm động của hai bạn Đoàn Trường Sinh và Hanh. Hanh bị tật nguyền bẩm sinh ở đôi chân, không thể tự đi lại được. Thấy bạn khao khát được đến trường học chữ, Sinh đã tự nguyện ngày ngày cõng bạn vượt qua những con đường đèo dốc gập ghềnh lầy lội để tới lớp. Ròng rã suốt mười năm trời, dù ngày nắng gắt hay mùa đông mưa phùn gió bấc, Sinh vẫn kiên trì cõng Hanh đi học. Tình bạn cao đẹp và đức hy sinh vô tư của Sinh đã trở thành tấm gương sáng ngời cho thiếu nhi cả nước noi theo.",
      "vocabularyNotes": [
        {
          "word": "tật nguyền",
          "meaning": "Bị khiếm khuyết một phần cơ thể do bẩm sinh hoặc tai nạn."
        },
        {
          "word": "gập ghềnh",
          "meaning": "Đường đi mấp mô, không bằng phẳng, khó đi lại."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập một — Trang 26, 27 (Chủ điểm 1: Thương người như thể thương thân)",
    "pedagogicalObjective": "Khâm phục và noi gương tình bạn cao cả, sự tận tụy cõng bạn suốt 10 năm của bạn Đoàn Trường Sinh.",
    "questions": [
      {
        "id": "tv-g4-b5-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Hành động cõng bạn đi học suốt 10 năm của bạn Sinh thể hiện điều gì?",
        "audioText": "Hành động cõng bạn đi học suốt 10 năm của bạn Sinh thể hiện điều gì?",
        "options": [
          {
            "id": "a",
            "label": "Tình bạn thủy chung, lòng nhân ái và sự kiên trì vượt khó phi thường 🎒👬",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Muốn được nổi tiếng trên báo"
          },
          {
            "id": "c",
            "label": "Bị bắt buộc phải làm"
          }
        ]
      }
    ]
  },
  "tv-g4-b6": {
    "passage": {
      "title": "Bài 6: Bài ca Trái Đất",
      "author": "Định Hải",
      "genre": "poem",
      "content": [
        "Trái Đất trẻ của bạn trẻ chúng mình\nQuả bóng xanh bay giữa trời xanh\nBồ câu ơi, tiếng chim gù thương mến\nHải âu ơi, cánh chim vờn sóng biển\nCùng bay nào, cho Trái Đất quay!\nCùng bay nào, cho Trái Đất quay!",
        "Trái Đất này là của chúng mình\nQuả bóng xanh bay giữa trời xanh\nKhói bom độc hại làm cay mắt\nKhói than bẩn thỉu làm nghẹt thở\nHãy giữ cho Trái Đất bình yên\nCho nụ cười rạng ngời trên môi trẻ thơ."
      ],
      "audioNarration": "Bài 6: Bài ca Trái Đất. Trái Đất trẻ của bạn trẻ chúng mình Quả bóng xanh bay giữa trời xanh Bồ câu ơi, tiếng chim gù thương mến Hải âu ơi, cánh chim vờn sóng biển Cùng bay nào, cho Trái Đất quay! Cùng bay nào, cho Trái Đất quay! Trái Đất này là của chúng mình Quả bóng xanh bay giữa trời xanh Khói bom độc hại làm cay mắt Khói than bẩn thỉu làm nghẹt thở Hãy giữ cho Trái Đất bình yên Cho nụ cười rạng ngời trên môi trẻ thơ.",
      "vocabularyNotes": [
        {
          "word": "hải âu",
          "meaning": "Loài chim biển cánh dài, bay lượn khỏe trên những con sóng lớn."
        },
        {
          "word": "bình yên",
          "meaning": "Yên lành, không có chiến tranh hay ô nhiễm tai họa."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập một — Trang 30, 31 (Chủ điểm 2: Giữ lấy màu xanh)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, cảm nhận thông điệp hòa bình và chung tay bảo vệ hành tinh xanh.",
    "questions": [
      {
        "id": "tv-g4-b6-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Hình ảnh chim bồ câu và hải âu trong bài thơ biểu tượng cho điều gì?",
        "audioText": "Hình ảnh chim bồ câu và hải âu trong bài thơ biểu tượng cho điều gì?",
        "options": [
          {
            "id": "a",
            "label": "Biểu tượng của hòa bình, tình hữu nghị và khát vọng tự do 🕊️🌊",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Báo hiệu mùa đông"
          },
          {
            "id": "c",
            "label": "Đồ chơi của trẻ em"
          }
        ]
      }
    ]
  },
  "tv-g4-b7": {
    "passage": {
      "title": "Bài 7: Những hạt thóc giống",
      "author": "Truyện dân gian Campuchia",
      "genre": "story",
      "content": [
        "Ngày xưa có một ông vua tuổi đã cao, muốn tìm người trung thực để truyền ngôi bèn phát cho mỗi người dân một thúng thóc giống đã được luộc chín kĩ và giao hẹn: \"Ai nộp được nhiều thóc nhất sẽ được nối ngôi!\".",
        "Mùa thu hoạch đến, mọi người nô nức chở những bao thóc đầy ắp về kinh thành. Duy chỉ có cậu bé Chôm đến trước vua quỳ lạy thú nhận: \"Muôn tâu Bệ hạ, con không làm sao cho thóc của Bệ hạ nảy mầm được ạ!\".",
        "Mọi người kinh sợ chờ lệnh phạt, nhưng nhà vua bèn đỡ Chôm dậy và dõng dạc tuyên bố: \"Thóc của ta đã luộc chín, làm sao nảy mầm được? Những kẻ nộp thóc đều là gian dối. Chỉ có cậu bé Chôm là người dũng cảm và trung thực nhất!\". Nhà vua liền truyền ngôi báu cho Chôm."
      ],
      "audioNarration": "Bài 7: Những hạt thóc giống. Ngày xưa có một ông vua tuổi đã cao, muốn tìm người trung thực để truyền ngôi bèn phát cho mỗi người dân một thúng thóc giống đã được luộc chín kĩ và giao hẹn: \"Ai nộp được nhiều thóc nhất sẽ được nối ngôi!\". Mùa thu hoạch đến, mọi người nô nức chở những bao thóc đầy ắp về kinh thành. Duy chỉ có cậu bé Chôm đến trước vua quỳ lạy thú nhận: \"Muôn tâu Bệ hạ, con không làm sao cho thóc của Bệ hạ nảy mầm được ạ!\". Mọi người kinh sợ chờ lệnh phạt, nhưng nhà vua bèn đỡ Chôm dậy và dõng dạc tuyên bố: \"Thóc của ta đã luộc chín, làm sao nảy mầm được? Những kẻ nộp thóc đều là gian dối. Chỉ có cậu bé Chôm là người dũng cảm và trung thực nhất!\". Nhà vua liền truyền ngôi báu cho Chôm.",
      "vocabularyNotes": [
        {
          "word": "trung thực",
          "meaning": "Thật thà, ngay thẳng, luôn tôn trọng sự thật không gian dối."
        },
        {
          "word": "ngôi báu",
          "meaning": "Vị trí cai quản đất nước của bậc vua chúa."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập một — Trang 34, 35 (Chủ điểm 3: Trung thực - Tự trọng)",
    "pedagogicalObjective": "Đọc hiểu câu chuyện, ca ngợi đức tính trung thực là phẩm chất quý giá nhất của con người.",
    "questions": [
      {
        "id": "tv-g4-b7-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Vì sao nhà vua lại chọn cậu bé Chôm để truyền ngôi báu?",
        "audioText": "Vì sao nhà vua lại chọn cậu bé Chôm để truyền ngôi báu?",
        "options": [
          {
            "id": "a",
            "label": "Vì Chôm dũng cảm, trung thực dám nói sự thật thóc luộc không nảy mầm 🌾👑",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Vì Chôm có nhiều thóc nhất"
          },
          {
            "id": "c",
            "label": "Vì Chôm là con quan lại"
          }
        ]
      }
    ]
  },
  "tv-g4-b8": {
    "passage": {
      "title": "Bài 8: Nếu chúng mình có phép lạ",
      "author": "Định Hải",
      "genre": "poem",
      "content": [
        "Nếu chúng mình có phép lạ\nBắt hạt giống nảy mầm nhanh\nChớp mắt thành cây đầy quả\nTha hồ hái chén ngọt lành.",
        "Nếu chúng mình có phép lạ\nHóa trái bom thành trái ngon\nTrong ruột không còn thuốc nổ\nChỉ toàn kẹo với bi tròn.",
        "Nếu chúng mình có phép lạ\nCho các bạn không còn đói rét\nTrẻ em khắp nơi vui sướng\nTrái Đất mãi ngập nụ cười."
      ],
      "audioNarration": "Bài 8: Nếu chúng mình có phép lạ. Nếu chúng mình có phép lạ Bắt hạt giống nảy mầm nhanh Chớp mắt thành cây đầy quả Tha hồ hái chén ngọt lành. Nếu chúng mình có phép lạ Hóa trái bom thành trái ngon Trong ruột không còn thuốc nổ Chỉ toàn kẹo với bi tròn. Nếu chúng mình có phép lạ Cho các bạn không còn đói rét Trẻ em khắp nơi vui sướng Trái Đất mãi ngập nụ cười.",
      "vocabularyNotes": [
        {
          "word": "phép lạ",
          "meaning": "Khả năng kỳ diệu siêu phàm có thể biến ước mơ thành hiện thực."
        },
        {
          "word": "tha hồ",
          "meaning": "Thỏa thích, tự do làm điều mình muốn mà không bị giới hạn."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập một — Trang 38, 39 (Chủ điểm 4: Ước mơ tuổi thơ)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, cảm nhận những ước mơ ngây thơ, nhân đạo và cao đẹp của thiếu nhi.",
    "questions": [
      {
        "id": "tv-g4-b8-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Ước mơ 'hóa trái bom thành trái ngon' thể hiện khát vọng gì của các bạn nhỏ?",
        "audioText": "Ước mơ 'hóa trái bom thành trái ngon' thể hiện khát vọng gì của các bạn nhỏ?",
        "options": [
          {
            "id": "a",
            "label": "Khát vọng hòa bình, chấm dứt chiến tranh để trẻ em luôn được sống hạnh phúc 🕊️🍬",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Muốn ăn kẹo ngọt"
          },
          {
            "id": "c",
            "label": "Thích chơi trò ném bom"
          }
        ]
      }
    ]
  },
  "tv-g4-b9": {
    "passage": {
      "title": "Bài 9: Về thăm bà",
      "author": "Thạch Lam",
      "genre": "prose",
      "content": [
        "Thanh bước lên thềm nhà, nhìn vào trong bóng tối mát rượi của căn nhà gỗ lim cổ kính. Mọi đồ vật vẫn nằm nguyên chỗ cũ: chiếc giường tre, tấm phản gỗ bóng loáng và giàn hoa thiên lý nở rộ ngoài hiên.",
        "Thanh cất tiếng gọi khẽ: \"Bà ơi!\". Từ ngoài vườn, một bà cụ tóc bạc trắng như cước, lưng còng chống gậy chậm rãi bước vào. Nhìn thấy Thanh, đôi mắt mờ đục của bà bỗng sáng ngời lên vì sung sướng.",
        "Bà âu yếm xoa đầu Thanh: \"Cháu đã về đấy ư? Đi đường xa có mệt không con?\". Thanh cảm thấy một sự bình yên kỳ lạ bao bọc lấy tâm hồn mình. Ở bên bà, mọi lo toan, mệt mỏi của cuộc sống phố thị dường như tan biến hết."
      ],
      "audioNarration": "Bài 9: Về thăm bà. Thanh bước lên thềm nhà, nhìn vào trong bóng tối mát rượi của căn nhà gỗ lim cổ kính. Mọi đồ vật vẫn nằm nguyên chỗ cũ: chiếc giường tre, tấm phản gỗ bóng loáng và giàn hoa thiên lý nở rộ ngoài hiên. Thanh cất tiếng gọi khẽ: \"Bà ơi!\". Từ ngoài vườn, một bà cụ tóc bạc trắng như cước, lưng còng chống gậy chậm rãi bước vào. Nhìn thấy Thanh, đôi mắt mờ đục của bà bỗng sáng ngời lên vì sung sướng. Bà âu yếm xoa đầu Thanh: \"Cháu đã về đấy ư? Đi đường xa có mệt không con?\". Thanh cảm thấy một sự bình yên kỳ lạ bao bọc lấy tâm hồn mình. Ở bên bà, mọi lo toan, mệt mỏi của cuộc sống phố thị dường như tan biến hết.",
      "vocabularyNotes": [
        {
          "word": "cổ kính",
          "meaning": "Có vẻ đẹp xưa cũ, trang nghiêm và mang dấu ấn thời gian."
        },
        {
          "word": "như cước",
          "meaning": "Trắng muốt và bóng bẩy như sợi cước."
        },
        {
          "word": "bình yên",
          "meaning": "Cảm giác thanh thản, yên ả trong lòng."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập một — Trang 42, 43 (Chủ điểm 5: Tình cảm gia đình)",
    "pedagogicalObjective": "Cảm nhận tình cảm bà cháu sâu nặng, ấm áp và không gian thanh bình của chốn quê hương qua ngòi bút Thạch Lam.",
    "questions": [
      {
        "id": "tv-g4-b9-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Khi được trở về bên bà, nhân vật Thanh có cảm xúc gì đặc biệt?",
        "audioText": "Khi được trở về bên bà, nhân vật Thanh có cảm xúc gì đặc biệt?",
        "options": [
          {
            "id": "a",
            "label": "Cảm thấy tâm hồn bình yên kỳ lạ, mọi mệt mỏi đều tan biến 👵🏡",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Cảm thấy buồn chán"
          },
          {
            "id": "c",
            "label": "Muốn quay lại thành phố ngay"
          }
        ]
      }
    ]
  },
  "tv-g4-b10": {
    "passage": {
      "title": "Bài 10: Cây đa quê hương",
      "author": "Nguyễn Khắc Viện",
      "genre": "prose",
      "content": [
        "Cây đa nghìn năm tuổi đứng sừng sững ở đầu làng như một người khổng lồ canh giữ bình yên cho quê hương.",
        "Thân cây to mười người ôm không xuể, rễ đa buông rủ từ cành cao cắm sâu vào lòng đất như những chiếc cột chống vững chãi. Tán đa xòe rộng rợp bóng mát cả một vùng đất rộng, là nơi trú ngụ của hàng ngàn chú chim ríu rít ca hát.",
        "Dưới bóng đa, các bác nông dân ngồi nghỉ ngơi sau buổi cày cấy nhọc nhằn, đám trẻ con chúng tôi tụ tập chơi trốn tìm. Cây đa đã trở thành biểu tượng thiêng liêng, gắn bó máu thịt với biết bao thế hệ người con xa quê."
      ],
      "audioNarration": "Bài 10: Cây đa quê hương. Cây đa nghìn năm tuổi đứng sừng sững ở đầu làng như một người khổng lồ canh giữ bình yên cho quê hương. Thân cây to mười người ôm không xuể, rễ đa buông rủ từ cành cao cắm sâu vào lòng đất như những chiếc cột chống vững chãi. Tán đa xòe rộng rợp bóng mát cả một vùng đất rộng, là nơi trú ngụ của hàng ngàn chú chim ríu rít ca hát. Dưới bóng đa, các bác nông dân ngồi nghỉ ngơi sau buổi cày cấy nhọc nhằn, đám trẻ con chúng tôi tụ tập chơi trốn tìm. Cây đa đã trở thành biểu tượng thiêng liêng, gắn bó máu thịt với biết bao thế hệ người con xa quê.",
      "vocabularyNotes": [
        {
          "word": "sừng sững",
          "meaning": "Dáng đồ sộ, cao lớn hiên ngang đứng vững giữa trời."
        },
        {
          "word": "trú ngụ",
          "meaning": "Ở lại, sinh sống nương náu tại một nơi an toàn."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập một — Trang 46, 47 (Chủ điểm 5: Tình cảm gia đình)",
    "pedagogicalObjective": "Đọc hiểu vẻ đẹp cổ kính của cây đa làng và tình yêu tha thiết với cội nguồn quê hương.",
    "questions": [
      {
        "id": "tv-g4-b10-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Cây đa nghìn năm tuổi có ý nghĩa như thế nào đối với dân làng?",
        "audioText": "Cây đa nghìn năm tuổi có ý nghĩa như thế nào đối với dân làng?",
        "options": [
          {
            "id": "a",
            "label": "Là nơi râm mát chở che kỷ niệm và là biểu tượng thiêng liêng gắn bó với quê hương 🌳🏘️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Chỉ để lấy củi đun"
          },
          {
            "id": "c",
            "label": "Làm cản trở giao thông"
          }
        ]
      }
    ]
  },
  "tv-g4-b11": {
    "passage": {
      "title": "Bài 11: Bông hoa niềm vui",
      "author": "SGK Tiếng Việt 4 Tập một — NXB Giáo Dục Việt Nam",
      "genre": "story",
      "content": [
        "Sáng sớm, Chi vào vườn hoa của trường để tìm bông hoa cúc màu xanh tím - loài hoa được mệnh danh là Bông hoa Niềm Vui.",
        "Bố Chi đang bị ốm nặng nằm trong bệnh viện. Chi muốn hái một bông hoa tặng bố để làm bố vui và nhanh khỏi bệnh. Nhưng vườn hoa là của chung nhà trường, Chi đứng ngập ngừng không dám ngắt.",
        "Cô giáo bước đến, nghe Chi nghẹn ngào kể chuyện liền mỉm cười ân cần, tự tay cắt hai bông hoa cúc đẹp nhất trao cho Chi và bảo: \"Em là một cô bé hiếu thảo. Lòng hiếu thảo của em chính là liều thuốc quý giá nhất giúp bố em mau bình phục!\".",
        "Cầm bông hoa trên tay, nước mắt Chi lăn dài trên má vì cảm động và biết ơn cô giáo."
      ],
      "audioNarration": "Bài 11: Bông hoa niềm vui. Sáng sớm, Chi vào vườn hoa của trường để tìm bông hoa cúc màu xanh tím - loài hoa được mệnh danh là Bông hoa Niềm Vui. Bố Chi đang bị ốm nặng nằm trong bệnh viện. Chi muốn hái một bông hoa tặng bố để làm bố vui và nhanh khỏi bệnh. Nhưng vườn hoa là của chung nhà trường, Chi đứng ngập ngừng không dám ngắt. Cô giáo bước đến, nghe Chi nghẹn ngào kể chuyện liền mỉm cười ân cần, tự tay cắt hai bông hoa cúc đẹp nhất trao cho Chi và bảo: \"Em là một cô bé hiếu thảo. Lòng hiếu thảo của em chính là liều thuốc quý giá nhất giúp bố em mau bình phục!\". Cầm bông hoa trên tay, nước mắt Chi lăn dài trên má vì cảm động và biết ơn cô giáo.",
      "vocabularyNotes": [
        {
          "word": "hiếu thảo",
          "meaning": "Hết lòng kính trọng, yêu thương và chăm sóc cha mẹ."
        },
        {
          "word": "bình phục",
          "meaning": "Hồi phục sức khỏe trở lại sau cơn bệnh nặng."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập một — Trang 50, 51 (Chủ điểm 5: Tình cảm gia đình)",
    "pedagogicalObjective": "Đọc hiểu câu chuyện, bồi dưỡng lòng hiếu thảo với cha mẹ và tinh thần tôn trọng kỷ luật tập thể.",
    "questions": [
      {
        "id": "tv-g4-b11-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Vì sao cô giáo lại vui vẻ hái tặng bạn Chi hai bông hoa cúc đẹp nhất?",
        "audioText": "Vì sao cô giáo lại vui vẻ hái tặng bạn Chi hai bông hoa cúc đẹp nhất?",
        "options": [
          {
            "id": "a",
            "label": "Vì cô xúc động trước tấm lòng hiếu thảo và ý thức tự giác của bạn Chi 🌸❤️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Vì hoa sắp tàn"
          },
          {
            "id": "c",
            "label": "Vì Chi nài nỉ xin hoa"
          }
        ]
      }
    ]
  },
  "tv-g4-b12": {
    "passage": {
      "title": "Bài 12: Bốn anh tài (Phần 1)",
      "author": "Truyện dân gian dân tộc Tày",
      "genre": "story",
      "content": [
        "Ngày xưa, ở một bản người Tày có cậu bé Cẩu Khây (nghĩa là Chín Chõ Xôi) mới mười tuổi nhưng đã ăn một lúc hết chín chõ xôi và sức khỏe bằng mười trâu mộng gộp lại.",
        "Nghe tin trong vùng có con Yêu Tinh hung bạo chuyên bắt người ăn thịt, Cẩu Khây quyết chí lên đường trừ diệt ác thú.",
        "Dọc đường đi, Cẩu Khây lần lượt kết nghĩa anh em với ba chàng trai có tài năng phi thường: Nắm Tay Đóng Cọc có thể dùng tay đấm cọc sắt lút sâu xuống đất; Lấy Tai Tát Nước có đôi tai khổng lồ quạt nước tưới cả cánh đồng; và Móng Tay Đục Máng có thể dùng móng tay đục thân cây làm máng dẫn nước.",
        "Bốn anh tài cùng chí hướng, hăng hái tiến thẳng về hang ổ của Yêu Tinh để cứu giúp dân làng."
      ],
      "audioNarration": "Bài 12: Bốn anh tài (Phần 1). Ngày xưa, ở một bản người Tày có cậu bé Cẩu Khây (nghĩa là Chín Chõ Xôi) mới mười tuổi nhưng đã ăn một lúc hết chín chõ xôi và sức khỏe bằng mười trâu mộng gộp lại. Nghe tin trong vùng có con Yêu Tinh hung bạo chuyên bắt người ăn thịt, Cẩu Khây quyết chí lên đường trừ diệt ác thú. Dọc đường đi, Cẩu Khây lần lượt kết nghĩa anh em với ba chàng trai có tài năng phi thường: Nắm Tay Đóng Cọc có thể dùng tay đấm cọc sắt lút sâu xuống đất; Lấy Tai Tát Nước có đôi tai khổng lồ quạt nước tưới cả cánh đồng; và Móng Tay Đục Máng có thể dùng móng tay đục thân cây làm máng dẫn nước. Bốn anh tài cùng chí hướng, hăng hái tiến thẳng về hang ổ của Yêu Tinh để cứu giúp dân làng.",
      "vocabularyNotes": [
        {
          "word": "chõ xôi",
          "meaning": "Dụng cụ bằng gỗ hoặc nhôm dùng để đồ xôi."
        },
        {
          "word": "phi thường",
          "meaning": "Đặc biệt tài giỏi, vượt xa mức bình thường của người phàm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập hai — Trang 10, 11 (Chủ điểm 6: Người ta là hoa đất)",
    "pedagogicalObjective": "Đọc hiểu truyện dân gian dân tộc Tày, ca ngợi sức mạnh đoàn kết và tài năng phi thường của các anh hùng.",
    "questions": [
      {
        "id": "tv-g4-b12-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Bốn anh em Cẩu Khây lên đường với mục đích cao đẹp gì?",
        "audioText": "Bốn anh em Cẩu Khây lên đường với mục đích cao đẹp gì?",
        "options": [
          {
            "id": "a",
            "label": "Đoàn kết diệt trừ Yêu Tinh hung ác để bảo vệ cuộc sống yên bình cho dân bản ⚔️🛡️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi tìm kho báu vàng bạc"
          },
          {
            "id": "c",
            "label": "Đi thi đấu sức mạnh"
          }
        ]
      }
    ]
  },
  "tv-g4-b13": {
    "passage": {
      "title": "Bài 13: Bốn anh tài (Phần 2)",
      "author": "Truyện dân gian dân tộc Tày",
      "genre": "story",
      "content": [
        "Bốn anh em tìm đến tận hang ổ hiểm trở của Yêu Tinh. Con Yêu Tinh gầm thét dữ dội, phun nước ra như lũ quét làm ngập cả thung lũng.",
        "Không hề nao núng, Lấy Tai Tát Nước lập tức nghiêng tai tát nước cuồn cuộn ngược lại hang Yêu Tinh. Móng Tay Đục Máng nhanh thoăn thoắt xẻ núi khơi dòng cho nước lũ thoát ra ngoài.",
        "Nắm Tay Đóng Cọc đấm gãy những khối đá sắc nhọn cản đường để Cẩu Khây xông vào vung chày sắt giáng những đòn sấm sét trừng trị con Yêu Tinh.",
        "Yêu Tinh bị tiêu diệt hoàn toàn. Dân bản khắp nơi reo hò ca vang mừng chiến thắng và tôn vinh bốn người anh hùng tài ba của quê hương."
      ],
      "audioNarration": "Bài 13: Bốn anh tài (Phần 2). Bốn anh em tìm đến tận hang ổ hiểm trở của Yêu Tinh. Con Yêu Tinh gầm thét dữ dội, phun nước ra như lũ quét làm ngập cả thung lũng. Không hề nao núng, Lấy Tai Tát Nước lập tức nghiêng tai tát nước cuồn cuộn ngược lại hang Yêu Tinh. Móng Tay Đục Máng nhanh thoăn thoắt xẻ núi khơi dòng cho nước lũ thoát ra ngoài. Nắm Tay Đóng Cọc đấm gãy những khối đá sắc nhọn cản đường để Cẩu Khây xông vào vung chày sắt giáng những đòn sấm sét trừng trị con Yêu Tinh. Yêu Tinh bị tiêu diệt hoàn toàn. Dân bản khắp nơi reo hò ca vang mừng chiến thắng và tôn vinh bốn người anh hùng tài ba của quê hương.",
      "vocabularyNotes": [
        {
          "word": "nao núng",
          "meaning": "Lung lay ý chí, tỏ ra sợ hãi lùi bước."
        },
        {
          "word": "thị uy",
          "meaning": "Phô trương sức mạnh để khiến đối phương khiếp sợ."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập hai — Trang 16, 17 (Chủ điểm 6: Người ta là hoa đất)",
    "pedagogicalObjective": "Khẳng định sức mạnh vô địch của tinh thần đồng đội và trí dũng song toàn trong việc trừ gian diệt bạo.",
    "questions": [
      {
        "id": "tv-g4-b13-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Yếu tố quyết định giúp bốn anh tài đánh thắng con Yêu Tinh hung tợn là gì?",
        "audioText": "Yếu tố quyết định giúp bốn anh tài đánh thắng con Yêu Tinh hung tợn là gì?",
        "options": [
          {
            "id": "a",
            "label": "Sự phối hợp ăn ý, tinh thần dũng cảm và tài năng độc đáo của từng người 🤝💪",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nhờ Yêu Tinh tự bỏ đi"
          },
          {
            "id": "c",
            "label": "Nhờ trời đổ mưa lớn"
          }
        ]
      }
    ]
  },
  "tv-g4-b14": {
    "passage": {
      "title": "Bài 14: Trống đồng Đông Sơn",
      "author": "Nguyễn Văn Huyên",
      "genre": "prose",
      "content": [
        "Trống đồng Đông Sơn là bảo vật vô giá, đỉnh cao của nền văn hóa rực rỡ thời các vua Hùng dựng nước.",
        "Giữa mặt trống đồng là hình ngôi sao nhiều cánh tượng trưng cho mặt trời tỏa rạng nguồn sống. Xung quanh là những vòng hoa văn tinh xảo khắc họa sinh động đời sống của người Việt cổ: hình người giã gạo, đoàn thuyền đánh cá lướt sóng, các dũng sĩ múa vũ khí và đàn chim lạc bay lượn.",
        "Âm vang tiếng trống đồng trầm hùng là biểu tượng của tinh thần quật cường, lòng tự hào và bản sắc ngàn năm của dân tộc Việt Nam."
      ],
      "audioNarration": "Bài 14: Trống đồng Đông Sơn. Trống đồng Đông Sơn là bảo vật vô giá, đỉnh cao của nền văn hóa rực rỡ thời các vua Hùng dựng nước. Giữa mặt trống đồng là hình ngôi sao nhiều cánh tượng trưng cho mặt trời tỏa rạng nguồn sống. Xung quanh là những vòng hoa văn tinh xảo khắc họa sinh động đời sống của người Việt cổ: hình người giã gạo, đoàn thuyền đánh cá lướt sóng, các dũng sĩ múa vũ khí và đàn chim lạc bay lượn. Âm vang tiếng trống đồng trầm hùng là biểu tượng của tinh thần quật cường, lòng tự hào và bản sắc ngàn năm của dân tộc Việt Nam.",
      "vocabularyNotes": [
        {
          "word": "bảo vật",
          "meaning": "Đồ vật quý giá, có giá trị lịch sử và văn hóa đặc biệt."
        },
        {
          "word": "chim lạc",
          "meaning": "Loài chim nước huyền thoại, biểu tượng trên trống đồng Đông Sơn."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập hai — Trang 22, 23 (Chủ điểm 7: Vẻ đẹp non sông)",
    "pedagogicalObjective": "Tự hào về nền văn minh Đông Sơn cổ đại và di sản văn hóa thiêng liêng của dân tộc.",
    "questions": [
      {
        "id": "tv-g4-b14-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Hoa văn trên mặt trống đồng Đông Sơn phản ánh điều gì?",
        "audioText": "Hoa văn trên mặt trống đồng Đông Sơn phản ánh điều gì?",
        "options": [
          {
            "id": "a",
            "label": "Đời sống lao động, chiến đấu và tín ngưỡng phong phú của người Việt cổ 🥁✨",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Hình ảnh thế giới tương lai"
          },
          {
            "id": "c",
            "label": "Bản đồ các nước phương Tây"
          }
        ]
      }
    ]
  },
  "tv-g4-b15": {
    "passage": {
      "title": "Bài 15: Vịnh Hạ Long",
      "author": "Thi Sảnh",
      "genre": "prose",
      "content": [
        "Vịnh Hạ Long là một thắng cảnh kỳ vĩ bậc nhất thế giới, niềm tự hào rạng ngời của non sông Việt Nam.",
        "Trên mặt nước xanh ngắt như ngọc bích nổi lên hàng nghìn hòn đảo đá vôi muôn hình vạn trạng: Hòn Trống Mái sừng sững thủy chung giữa sóng gió, Hòn Đỉnh Hương uy nghiêm như chiếc lư hương khổng lồ giữa biển trời, Hòn Rồng uốn lượn bay bổng.",
        "Vào sâu trong lòng đảo là những hang động kỳ ảo như Động Thiên Cung, Hang Đầu Gỗ lung linh thạch nhũ muôn màu sắc. Vẻ đẹp biến hóa diệu kỳ của Hạ Long qua bốn mùa khiến bất kỳ du khách nào đặt chân đến cũng phải ngỡ ngàng, say đắm."
      ],
      "audioNarration": "Bài 15: Vịnh Hạ Long. Vịnh Hạ Long là một thắng cảnh kỳ vĩ bậc nhất thế giới, niềm tự hào rạng ngời của non sông Việt Nam. Trên mặt nước xanh ngắt như ngọc bích nổi lên hàng nghìn hòn đảo đá vôi muôn hình vạn trạng: Hòn Trống Mái sừng sững thủy chung giữa sóng gió, Hòn Đỉnh Hương uy nghiêm như chiếc lư hương khổng lồ giữa biển trời, Hòn Rồng uốn lượn bay bổng. Vào sâu trong lòng đảo là những hang động kỳ ảo như Động Thiên Cung, Hang Đầu Gỗ lung linh thạch nhũ muôn màu sắc. Vẻ đẹp biến hóa diệu kỳ của Hạ Long qua bốn mùa khiến bất kỳ du khách nào đặt chân đến cũng phải ngỡ ngàng, say đắm.",
      "vocabularyNotes": [
        {
          "word": "thắng cảnh",
          "meaning": "Cảnh quan thiên nhiên tươi đẹp, nổi tiếng."
        },
        {
          "word": "thạch nhũ",
          "meaning": "Nhũ đá hình thành do nước nhỏ giọt lắng đọng vôi trong hang động qua hàng triệu năm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập hai — Trang 28, 29 (Chủ điểm 7: Vẻ đẹp non sông)",
    "pedagogicalObjective": "Đọc hiểu áng văn miêu tả kiệt tác Vịnh Hạ Long, bồi dưỡng tình yêu và ý thức giữ gìn danh lam thắng cảnh đất nước.",
    "questions": [
      {
        "id": "tv-g4-b15-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Vẻ đẹp độc đáo nổi bật nhất của Vịnh Hạ Long là gì?",
        "audioText": "Vẻ đẹp độc đáo nổi bật nhất của Vịnh Hạ Long là gì?",
        "options": [
          {
            "id": "a",
            "label": "Hàng nghìn đảo đá kỳ vĩ trên nền nước ngọc bích và các hang động lung linh thạch nhũ 🌊⛰️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Rừng dừa bạt ngàn"
          },
          {
            "id": "c",
            "label": "Những cồn cát vàng sa mạc"
          }
        ]
      }
    ]
  },
  "tv-g4-b16": {
    "passage": {
      "title": "Bài 16: Kỳ quan Hang Sơn Đoòng",
      "author": "Theo Báo Khoa học và Đời sống",
      "genre": "prose",
      "content": [
        "Hang Sơn Đoòng nằm ẩn mình giữa lòng Vườn quốc gia Phong Nha - Kẻ Bàng (Quảng Bình), được thế giới công nhận là hang động tự nhiên lớn nhất hành tinh.",
        "Trong lòng hang rộng lớn đến mức có thể chứa vừa cả một khu phố cao ốc chọc trời của thành phố Niu Oóc. Nơi đây có dòng sông ngầm chảy xiết, những khối măng đá cao sừng sững hơn 70 mét và cả một khu rừng nguyên sinh nhiệt đới tươi tốt mọc ngay dưới hố sụt khổng lồ.",
        "Hang Sơn Đoòng thực sự là một kỳ quan thiên nhiên kỳ vĩ, thu hút sự thám hiểm và ngưỡng mộ của các nhà khoa học trên toàn thế giới."
      ],
      "audioNarration": "Bài 16: Kỳ quan Hang Sơn Đoòng. Hang Sơn Đoòng nằm ẩn mình giữa lòng Vườn quốc gia Phong Nha - Kẻ Bàng (Quảng Bình), được thế giới công nhận là hang động tự nhiên lớn nhất hành tinh. Trong lòng hang rộng lớn đến mức có thể chứa vừa cả một khu phố cao ốc chọc trời của thành phố Niu Oóc. Nơi đây có dòng sông ngầm chảy xiết, những khối măng đá cao sừng sững hơn 70 mét và cả một khu rừng nguyên sinh nhiệt đới tươi tốt mọc ngay dưới hố sụt khổng lồ. Hang Sơn Đoòng thực sự là một kỳ quan thiên nhiên kỳ vĩ, thu hút sự thám hiểm và ngưỡng mộ của các nhà khoa học trên toàn thế giới.",
      "vocabularyNotes": [
        {
          "word": "kỳ quan",
          "meaning": "Công trình hoặc cảnh sắc thiên nhiên đẹp đẽ kỳ lạ, hiếm có trên đời."
        },
        {
          "word": "hố sụt",
          "meaning": "Vùng đất đá bị sụp đổ tạo thành hố sâu khổng lồ cho ánh sáng chiếu vào hang."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập hai — Trang 34, 35 (Chủ điểm 7: Vẻ đẹp non sông)",
    "pedagogicalObjective": "Tự hào về kỳ quan thiên nhiên vô giá của Việt Nam, khơi dậy niềm đam mê khám phá thế giới tự nhiên.",
    "questions": [
      {
        "id": "tv-g4-b16-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Điều kỳ diệu khác biệt nào tồn tại ngay bên trong lòng Hang Sơn Đoòng?",
        "audioText": "Điều kỳ diệu khác biệt nào tồn tại ngay bên trong lòng Hang Sơn Đoòng?",
        "options": [
          {
            "id": "a",
            "label": "Có cả dòng sông ngầm, măng đá khổng lồ và khu rừng nguyên sinh tươi tốt 🌿🏞️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Có đường hầm tàu điện ngầm"
          },
          {
            "id": "c",
            "label": "Có tuyết trắng phủ quanh năm"
          }
        ]
      }
    ]
  },
  "tv-g4-b17": {
    "passage": {
      "title": "Bài 17: Nhà bác học của đồng ruộng",
      "author": "Hàm Châu",
      "genre": "story",
      "content": [
        "Giáo sư Lương Định Của là một nhà nông học lỗi lạc, người đã dành trọn cả cuộc đời để nghiên cứu và lai tạo ra những giống lúa mới năng suất cao cho nông dân Việt Nam.",
        "Một lần, một người bạn nước ngoài gửi tặng ông mười hạt thóc giống quý hiếm. Đúng lúc ấy, đợt rét đậm ùa về, nhiệt độ hạ thấp kỷ lục có nguy cơ làm chết hạt mầm. Ông đã chia mười hạt thóc làm hai phần: năm hạt đem ngâm trong nước ấm rồi ủ vào chăn ấm, năm hạt còn lại ông bọc cẩn thận trong túi vải rồi buộc vào người, dùng chính hơi ấm của cơ thể mình ngày đêm ấp ủ hạt mầm.",
        "Nhờ tấm lòng tha thiết với hạt gạo quê hương, tất cả mười hạt giống đều nảy mầm khỏe mạnh, mở ra giống lúa mới mùa màng bội thu. Tấm gương lao động cần mẫn của Giáo sư Lương Định Của mãi in đậm trong lòng nhân dân."
      ],
      "audioNarration": "Bài 17: Nhà bác học của đồng ruộng. Giáo sư Lương Định Của là một nhà nông học lỗi lạc, người đã dành trọn cả cuộc đời để nghiên cứu và lai tạo ra những giống lúa mới năng suất cao cho nông dân Việt Nam. Một lần, một người bạn nước ngoài gửi tặng ông mười hạt thóc giống quý hiếm. Đúng lúc ấy, đợt rét đậm ùa về, nhiệt độ hạ thấp kỷ lục có nguy cơ làm chết hạt mầm. Ông đã chia mười hạt thóc làm hai phần: năm hạt đem ngâm trong nước ấm rồi ủ vào chăn ấm, năm hạt còn lại ông bọc cẩn thận trong túi vải rồi buộc vào người, dùng chính hơi ấm của cơ thể mình ngày đêm ấp ủ hạt mầm. Nhờ tấm lòng tha thiết với hạt gạo quê hương, tất cả mười hạt giống đều nảy mầm khỏe mạnh, mở ra giống lúa mới mùa màng bội thu. Tấm gương lao động cần mẫn của Giáo sư Lương Định Của mãi in đậm trong lòng nhân dân.",
      "vocabularyNotes": [
        {
          "word": "nông học",
          "meaning": "Ngành khoa học chuyên nghiên cứu về trồng trọt và cây trồng nông nghiệp."
        },
        {
          "word": "bội thu",
          "meaning": "Thu hoạch được mùa lớn, sản lượng vượt xa mức bình thường."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập hai — Trang 40, 41 (Chủ điểm 8: Những người quả cảm)",
    "pedagogicalObjective": "Khâm phục tinh thần say mê nghiên cứu khoa học và tấm lòng tận tụy vì nông dân của Giáo sư Lương Định Của.",
    "questions": [
      {
        "id": "tv-g4-b17-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Giáo sư Lương Định Của đã làm gì để bảo vệ mười hạt thóc giống quý trong đợt rét buốt?",
        "audioText": "Giáo sư Lương Định Của đã làm gì để bảo vệ mười hạt thóc giống quý trong đợt rét buốt?",
        "options": [
          {
            "id": "a",
            "label": "Ủ nước ấm và buộc túi thóc vào người dùng hơi ấm cơ thể để ấp mầm 🌾❤️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đem phơi ngoài trời mưa rét"
          },
          {
            "id": "c",
            "label": "Bỏ vào tủ lạnh"
          }
        ]
      }
    ]
  },
  "tv-g4-b18": {
    "passage": {
      "title": "Bài 18: Chiếc lá",
      "author": "Khái Hưng",
      "genre": "story",
      "content": [
        "Chim sâu ríu rít hỏi bông hoa: \"Bạn hoa xinh đẹp ơi, nhờ đâu mà bạn có được hương thơm ngát và sắc màu rực rỡ đến thế?\".",
        "Bông hoa mỉm cười dịu dàng đáp: \"Nhờ chị Lá đấy bạn ạ! Chị Lá ngày đêm cần mẫn đón ánh nắng mặt trời, hứng sương mai và hút nhựa sống để nuôi dưỡng tôi nở hoa!\".",
        "Chim sâu quay sang nhìn chiếc lá xanh giản dị. Chiếc lá không khoe sắc, không tỏa hương nhưng thầm lặng cống hiến trọn vẹn sự sống của mình cho cây xanh tốt tươi và hoa thơm trái ngọt.",
        "Cuộc sống luôn có những con người âm thầm cống hiến như chiếc lá kia, không màng danh lợi mà mang lại vẻ đẹp và sự bình yên cho xã hội."
      ],
      "audioNarration": "Bài 18: Chiếc lá. Chim sâu ríu rít hỏi bông hoa: \"Bạn hoa xinh đẹp ơi, nhờ đâu mà bạn có được hương thơm ngát và sắc màu rực rỡ đến thế?\". Bông hoa mỉm cười dịu dàng đáp: \"Nhờ chị Lá đấy bạn ạ! Chị Lá ngày đêm cần mẫn đón ánh nắng mặt trời, hứng sương mai và hút nhựa sống để nuôi dưỡng tôi nở hoa!\". Chim sâu quay sang nhìn chiếc lá xanh giản dị. Chiếc lá không khoe sắc, không tỏa hương nhưng thầm lặng cống hiến trọn vẹn sự sống của mình cho cây xanh tốt tươi và hoa thơm trái ngọt. Cuộc sống luôn có những con người âm thầm cống hiến như chiếc lá kia, không màng danh lợi mà mang lại vẻ đẹp và sự bình yên cho xã hội.",
      "vocabularyNotes": [
        {
          "word": "thầm lặng",
          "meaning": "Lặng lẽ, không ồn ào phô trương hay đòi hỏi khen ngợi."
        },
        {
          "word": "nhựa sống",
          "meaning": "Dòng chất lỏng tinh túy nuôi dưỡng cây cối sinh sôi nảy nở."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập hai — Trang 46, 47 (Chủ điểm 8: Những người quả cảm)",
    "pedagogicalObjective": "Hiểu ý nghĩa triết lý sâu sắc về lối sống cống hiến thầm lặng, khiêm tốn vì cộng đồng.",
    "questions": [
      {
        "id": "tv-g4-b18-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Hình tượng chiếc lá xanh trong câu chuyện tượng trưng cho điều gì trong cuộc sống?",
        "audioText": "Hình tượng chiếc lá xanh trong câu chuyện tượng trưng cho điều gì trong cuộc sống?",
        "options": [
          {
            "id": "a",
            "label": "Những con người lao động thầm lặng, khiêm nhường cống hiến cho đời 🍃✨",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Kẻ lười biếng không làm gì"
          },
          {
            "id": "c",
            "label": "Người thích khoe khoang"
          }
        ]
      }
    ]
  },
  "tv-g4-b19": {
    "passage": {
      "title": "Bài 19: Chú bé Lượm",
      "author": "Tố Hữu",
      "genre": "poem",
      "content": [
        "Chú bé loắt choắt\nCái xắc xinh xinh\nCái chân thoăn thoắt\nCái đầu nghênh nghênh.",
        "Ca lô đội lệch\nMồm huýt sáo vang\nNhư con chim chích\nNhảy trên đường vàng...",
        "Cháu đi liên lạc\nVui hơn ở nhà\nĐạn bay vèo vèo\nThư đề \"Thượng khẩn\"\nSợ chi hiểm nghèo!",
        "Đường quê lúa trổ\nLúa thơm mùi sữa\nHồn bay giữa đồng\nLượm ơi, còn không?..."
      ],
      "audioNarration": "Bài 19: Chú bé Lượm. Chú bé loắt choắt Cái xắc xinh xinh Cái chân thoăn thoắt Cái đầu nghênh nghênh. Ca lô đội lệch Mồm huýt sáo vang Như con chim chích Nhảy trên đường vàng... Cháu đi liên lạc Vui hơn ở nhà Đạn bay vèo vèo Thư đề \"Thượng khẩn\" Sợ chi hiểm nghèo! Đường quê lúa trổ Lúa thơm mùi sữa Hồn bay giữa đồng Lượm ơi, còn không?...",
      "vocabularyNotes": [
        {
          "word": "loắt choắt",
          "meaning": "Dáng người bé nhỏ nhưng rất nhanh nhẹn, hoạt bát."
        },
        {
          "word": "thượng khẩn",
          "meaning": "Thư từ, mệnh lệnh quân sự cực kỳ khẩn cấp cần chuyển giao ngay."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập hai — Trang 52, 53 (Chủ điểm 8: Những người quả cảm)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, cảm phục tinh thần yêu nước quả cảm, sự hồn nhiên và hy sinh anh dũng của chú bé Lượm.",
    "questions": [
      {
        "id": "tv-g4-b19-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Hình ảnh chú bé Lượm đi làm nhiệm vụ liên lạc được nhà thơ miêu tả như thế nào?",
        "audioText": "Hình ảnh chú bé Lượm đi làm nhiệm vụ liên lạc được nhà thơ miêu tả như thế nào?",
        "options": [
          {
            "id": "a",
            "label": "Nhanh nhẹn, hồn nhiên, dũng cảm vượt qua bom đạn bảo vệ lá thư thượng khẩn 🕊️🎖️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Sợ sệt khóc lóc"
          },
          {
            "id": "c",
            "label": "Bỏ nhiệm vụ đi chơi"
          }
        ]
      }
    ]
  },
  "tv-g4-b20": {
    "passage": {
      "title": "Bài 20: Khúc hát ru những em bé lớn trên lưng mẹ",
      "author": "Nguyễn Khoa Điềm",
      "genre": "poem",
      "content": [
        "Em cu Tai ngủ trên lưng mẹ ơi\nEm ngủ cho ngoan, đừng rời lưng mẹ\nMẹ giã gạo mẹ nuôi bộ đội\nNhịp chày nghiêng, giấc ngủ em nghiêng.",
        "Mồ hôi mẹ rơi má em nóng hổi\nVai mẹ gầy nhấp nhô làm gối\nLưng đưa nôi và tim hát thành lời:\n- Ngủ ngoan a-kay ơi, ngủ ngoan a-kay hỡi\nMẹ thương a-kay, mẹ thương bộ đội\nCon mơ cho mẹ hạt gạo trắng ngần\nMai sau con lớn vung chày lún sân...",
        "Mẹ đi tỉa bắp trên núi Ka-lưi\nLưng núi thì to mà lưng mẹ nhỏ\nEm ngủ ngoan em đừng làm mẹ mỏi\nMặt trời của bắp thì nằm trên đồi\nMặt trời của mẹ, em nằm trên lưng."
      ],
      "audioNarration": "Bài 20: Khúc hát ru những em bé lớn trên lưng mẹ. Em cu Tai ngủ trên lưng mẹ ơi Em ngủ cho ngoan, đừng rời lưng mẹ Mẹ giã gạo mẹ nuôi bộ đội Nhịp chày nghiêng, giấc ngủ em nghiêng. Mồ hôi mẹ rơi má em nóng hổi Vai mẹ gầy nhấp nhô làm gối Lưng đưa nôi và tim hát thành lời: - Ngủ ngoan a-kay ơi, ngủ ngoan a-kay hỡi Mẹ thương a-kay, mẹ thương bộ đội Con mơ cho mẹ hạt gạo trắng ngần Mai sau con lớn vung chày lún sân... Mẹ đi tỉa bắp trên núi Ka-lưi Lưng núi thì to mà lưng mẹ nhỏ Em ngủ ngoan em đừng làm mẹ mỏi Mặt trời của bắp thì nằm trên đồi Mặt trời của mẹ, em nằm trên lưng.",
      "vocabularyNotes": [
        {
          "word": "a-kay",
          "meaning": "Từ tiếng dân tộc Tà-ôi có nghĩa là 'con yêu'."
        },
        {
          "word": "núi Ka-lưi",
          "meaning": "Tên một ngọn núi hùng vĩ ở miền tây tỉnh Thừa Thiên Huế."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập hai — Trang 58, 59 (Chủ điểm 8: Những người quả cảm)",
    "pedagogicalObjective": "Đọc diễn cảm bài thơ, cảm nhận tình yêu thương con tha thiết hòa quyện cùng tình yêu quê hương đất nước của người mẹ Tà-ôi.",
    "questions": [
      {
        "id": "tv-g4-b20-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Hình ảnh ẩn dụ 'Mặt trời của mẹ, em nằm trên lưng' thể hiện điều gì?",
        "audioText": "Hình ảnh ẩn dụ 'Mặt trời của mẹ, em nằm trên lưng' thể hiện điều gì?",
        "options": [
          {
            "id": "a",
            "label": "Em bé là nguồn sống, niềm tin và niềm hy vọng ấm áp thiêng liêng nhất của người mẹ ☀️❤️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Em bé rất nóng"
          },
          {
            "id": "c",
            "label": "Em bé tỏa ra ánh sáng chói lọi"
          }
        ]
      }
    ]
  },
  "tv-g4-b21": {
    "passage": {
      "title": "Bài 21: Vương quốc nụ cười",
      "author": "Theo Truyện ngụ ngôn thế giới",
      "genre": "story",
      "content": [
        "Ngày xưa, có một vương quốc u sầu và ảm đạm vì cả triều đình từ vua đến quan lại không một ai biết cười.",
        "Nhà vua cử các vị đại thần đi khắp bốn phương tìm kiếm bí quyết mang lại tiếng cười. Đi đến đâu các vị quan cũng chỉ nghe thấy những lời than thở, cho đến khi họ gặp một cậu bé bán bánh ngoài chợ đang vừa nhảy múa vừa cười giòn tan vì một trò đùa hóm hỉnh.",
        "Cậu bé được đưa vào hoàng cung. Bằng sự hồn nhiên, dí dỏm và những câu chuyện cười vui tươi, cậu bé đã khiến nhà vua bật cười sảng khoái. Tiếng cười lan tỏa khắp kinh đô như làn gió xuân ấm áp, xua tan mọi u buồn và mang lại sức sống rạng ngời cho toàn thể vương quốc."
      ],
      "audioNarration": "Bài 21: Vương quốc nụ cười. Ngày xưa, có một vương quốc u sầu và ảm đạm vì cả triều đình từ vua đến quan lại không một ai biết cười. Nhà vua cử các vị đại thần đi khắp bốn phương tìm kiếm bí quyết mang lại tiếng cười. Đi đến đâu các vị quan cũng chỉ nghe thấy những lời than thở, cho đến khi họ gặp một cậu bé bán bánh ngoài chợ đang vừa nhảy múa vừa cười giòn tan vì một trò đùa hóm hỉnh. Cậu bé được đưa vào hoàng cung. Bằng sự hồn nhiên, dí dỏm và những câu chuyện cười vui tươi, cậu bé đã khiến nhà vua bật cười sảng khoái. Tiếng cười lan tỏa khắp kinh đô như làn gió xuân ấm áp, xua tan mọi u buồn và mang lại sức sống rạng ngời cho toàn thể vương quốc.",
      "vocabularyNotes": [
        {
          "word": "u sầu",
          "meaning": "Buồn bã, ủ rũ, nặng trĩu tâm tư."
        },
        {
          "word": "hóm hỉnh",
          "meaning": "Hài hước, dí dỏm một cách thông minh và duyên dáng."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập hai — Trang 64, 65 (Chủ điểm 8: Những người quả cảm)",
    "pedagogicalObjective": "Đọc hiểu câu chuyện ngụ ngôn, nhận thức giá trị to lớn của tiếng cười và tinh thần lạc quan yêu đời.",
    "questions": [
      {
        "id": "tv-g4-b21-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Tiếng cười và sự lạc quan đem lại điều kỳ diệu gì cho vương quốc?",
        "audioText": "Tiếng cười và sự lạc quan đem lại điều kỳ diệu gì cho vương quốc?",
        "options": [
          {
            "id": "a",
            "label": "Xua tan u buồn, gắn kết mọi người và đem lại sức sống tươi vui hạnh phúc 😄🌈",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Làm mọi người mệt mỏi"
          },
          {
            "id": "c",
            "label": "Làm mất trật tự xã hội"
          }
        ]
      }
    ]
  },
  "tv-g4-b22": {
    "passage": {
      "title": "Bài 22: Đại hội Trạng Nguyên Tiếng Việt 4",
      "author": "SGK Tiếng Việt 4 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Đại hội Trạng Nguyên Tiếng Việt 4 là sân chơi trí tuệ đỉnh cao tổng kết toàn bộ chương trình Tiếng Việt Lớp 4.",
        "Các sĩ tử cùng thử tài qua các dạng câu hỏi: Phân tích thành phần câu Chủ ngữ - Vị ngữ - Trạng ngữ, nhận diện danh từ - động từ - tính từ, vận dụng biện pháp nhân hóa - so sánh và rèn luyện kỹ năng viết văn miêu tả cây cối, con vật.",
        "Chúc các em học sinh luôn tự tin, xuất sắc chinh phục ngôi vị Trạng Nguyên Tiếng Việt để vững bước bước vào lớp 5!"
      ],
      "audioNarration": "Bài 22: Đại hội Trạng Nguyên Tiếng Việt 4. Đại hội Trạng Nguyên Tiếng Việt 4 là sân chơi trí tuệ đỉnh cao tổng kết toàn bộ chương trình Tiếng Việt Lớp 4. Các sĩ tử cùng thử tài qua các dạng câu hỏi: Phân tích thành phần câu Chủ ngữ - Vị ngữ - Trạng ngữ, nhận diện danh từ - động từ - tính từ, vận dụng biện pháp nhân hóa - so sánh và rèn luyện kỹ năng viết văn miêu tả cây cối, con vật. Chúc các em học sinh luôn tự tin, xuất sắc chinh phục ngôi vị Trạng Nguyên Tiếng Việt để vững bước bước vào lớp 5!",
      "vocabularyNotes": [
        {
          "word": "sĩ tử",
          "meaning": "Thí sinh tham dự kỳ thi đua tài học vấn."
        },
        {
          "word": "trạng ngữ",
          "meaning": "Thành phần phụ của câu bổ sung ý nghĩa về thời gian, nơi chốn, mục đích, phương tiện."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 4 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 4 Tập hai — Trang 70, 71 (Chủ điểm 8: Những người quả cảm)",
    "pedagogicalObjective": "Tổng kết kiến thức ngữ pháp và văn học Lớp 4, nâng cao kỹ năng thực hành ngôn ngữ chuẩn mực.",
    "questions": [
      {
        "id": "tv-g4-b22-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Đại hội Trạng Nguyên Tiếng Việt 4 giúp học sinh củng cố những kiến thức cốt lõi nào?",
        "audioText": "Đại hội Trạng Nguyên Tiếng Việt 4 giúp học sinh củng cố những kiến thức cốt lõi nào?",
        "options": [
          {
            "id": "a",
            "label": "Ngữ pháp câu (Chủ vị trạng), từ loại và nghệ thuật miêu tả sinh động 🏆📝",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Chơi game trên máy tính"
          },
          {
            "id": "c",
            "label": "Hát múa tự do"
          }
        ]
      }
    ]
  },
  "tv-g5-b1": {
    "passage": {
      "title": "Bài 1: Thư gửi các học sinh",
      "author": "Hồ Chí Minh",
      "genre": "prose",
      "content": [
        "Các em học sinh,",
        "Ngày hôm nay là ngày khai trường đầu tiên ở nước Việt Nam Dân chủ Cộng hòa. Tôi đã tưởng tượng thấy trước mắt cái cảnh nhộn nhịp tưng bừng của ngày tựu trường ở khắp các đô thị và thôn xóm. Các em hết thảy đều vui vẻ vì sau mấy tháng nghỉ hè, lại được gặp thầy gặp bạn.",
        "Nhưng sung sướng hơn nữa là từ giờ phút này giở đi, các em bắt đầu được nhận một nền giáo dục hoàn toàn Việt Nam. Ngày nay, các em được hưởng sự may mắn đó là nhờ sự hy sinh của biết bao nhiêu đồng bào các em. Vậy các em nghĩ sao? Các em phải cố gắng, siêng năng học tập, ngoan ngoãn, thầy yêu bạn mến.",
        "Sau 80 năm giời nô lệ làm cho nước nhà bị yếu hèn, ngày nay chúng ta cần phải xây dựng lại cơ đồ mà tổ tiên đã để lại cho chúng ta, làm sao cho chúng ta theo kịp các nước khác trên toàn cầu. Trong công cuộc kiến thiết đó, nước nhà trông mong chờ đợi ở các em rất nhiều.",
        "Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em."
      ],
      "audioNarration": "Bài 1: Thư gửi các học sinh. Các em học sinh, Ngày hôm nay là ngày khai trường đầu tiên ở nước Việt Nam Dân chủ Cộng hòa. Tôi đã tưởng tượng thấy trước mắt cái cảnh nhộn nhịp tưng bừng của ngày tựu trường ở khắp các đô thị và thôn xóm. Các em hết thảy đều vui vẻ vì sau mấy tháng nghỉ hè, lại được gặp thầy gặp bạn. Nhưng sung sướng hơn nữa là từ giờ phút này giở đi, các em bắt đầu được nhận một nền giáo dục hoàn toàn Việt Nam. Ngày nay, các em được hưởng sự may mắn đó là nhờ sự hy sinh của biết bao nhiêu đồng bào các em. Vậy các em nghĩ sao? Các em phải cố gắng, siêng năng học tập, ngoan ngoãn, thầy yêu bạn mến. Sau 80 năm giời nô lệ làm cho nước nhà bị yếu hèn, ngày nay chúng ta cần phải xây dựng lại cơ đồ mà tổ tiên đã để lại cho chúng ta, làm sao cho chúng ta theo kịp các nước khác trên toàn cầu. Trong công cuộc kiến thiết đó, nước nhà trông mong chờ đợi ở các em rất nhiều. Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em.",
      "vocabularyNotes": [
        {
          "word": "tựu trường",
          "meaning": "Ngày học sinh tập trung đến trường để bắt đầu năm học mới."
        },
        {
          "word": "cơ đồ",
          "meaning": "Sự nghiệp lớn lao, đất nước và non sông do tổ tiên gầy dựng."
        },
        {
          "word": "kiến thiết",
          "meaning": "Xây dựng lại đất nước theo quy mô lớn."
        },
        {
          "word": "cường quốc năm châu",
          "meaning": "Các quốc gia giàu mạnh hàng đầu trên khắp năm châu lục trên thế giới."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập một — Trang 10, 11 (Chủ điểm 1: Việt Nam - Tổ quốc em)",
    "pedagogicalObjective": "Đọc diễn cảm bức thư lịch sử của Bác Hồ nhân ngày khai trường đầu tiên của nước Việt Nam độc lập, thấu hiểu trách nhiệm của học sinh với tương lai đất nước.",
    "questions": [
      {
        "id": "tv-g5-b1-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Bác Hồ nhấn mạnh ngày khai trường tháng 9 năm 1945 có ý nghĩa lịch sử đặc biệt gì?",
        "audioText": "Bác Hồ nhấn mạnh ngày khai trường tháng 9 năm 1945 có ý nghĩa lịch sử đặc biệt gì?",
        "options": [
          {
            "id": "a",
            "label": "Là ngày khai trường đầu tiên của nước Việt Nam độc lập, học sinh được hưởng nền giáo dục hoàn toàn Việt Nam 🇻🇳🏫",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Là ngày bãi trường nghỉ hè"
          },
          {
            "id": "c",
            "label": "Là ngày hội thể thao toàn quốc"
          }
        ]
      },
      {
        "id": "tv-g5-b1-q2",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Theo lời Bác Hồ, điều gì quyết định giúp dân tộc Việt Nam bước tới đài vinh quang sánh vai với các cường quốc năm châu?",
        "audioText": "Theo lời Bác Hồ, điều gì quyết định giúp dân tộc Việt Nam bước tới đài vinh quang sánh vai với các cường quốc năm châu?",
        "options": [
          {
            "id": "a",
            "label": "Chính là nhờ một phần lớn ở công lao học tập, rèn luyện của các thế hệ học sinh ⭐📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nhờ vào tài nguyên thiên nhiên có sẵn"
          },
          {
            "id": "c",
            "label": "Nhờ vào sự giúp đỡ của nước ngoài"
          }
        ]
      }
    ]
  },
  "tv-g5-b2": {
    "passage": {
      "title": "Bài 2: Quang cảnh làng mạc ngày mùa",
      "author": "Tô Hoài",
      "genre": "prose",
      "content": [
        "Mùa đông, giữa ngày mùa, làng quê toàn màu vàng - những màu vàng rất khác nhau.",
        "Có màu vàng xuộm của lúa chín trải rộng mênh mông. Nắng nhẹ có màu vàng hoe. Quả xoan chín có màu vàng lịm. Tàu lá chuối ngả màu vàng ối. Bụi mía đung đưa sắc vàng xọng. Rơm và thóc phơi đầy sân có màu vàng giòn. Dưới bóng râm, chú chó nằm sưởi nắng khoác bộ lông vàng mượt.",
        "Tất cả đượm một màu trù phú, đầm ấm lạ lùng. Không có cảm giác héo tàn, hanh hao lúc sắp bước vào mùa đông. Ai nấy đều mải miết, say mê gặt hái, gánh thóc, đập lúa. Quang cảnh ngày mùa tràn ngập sức sống và niềm vui no ấm của người nông dân."
      ],
      "audioNarration": "Bài 2: Quang cảnh làng mạc ngày mùa. Mùa đông, giữa ngày mùa, làng quê toàn màu vàng - những màu vàng rất khác nhau. Có màu vàng xuộm của lúa chín trải rộng mênh mông. Nắng nhẹ có màu vàng hoe. Quả xoan chín có màu vàng lịm. Tàu lá chuối ngả màu vàng ối. Bụi mía đung đưa sắc vàng xọng. Rơm và thóc phơi đầy sân có màu vàng giòn. Dưới bóng râm, chú chó nằm sưởi nắng khoác bộ lông vàng mượt. Tất cả đượm một màu trù phú, đầm ấm lạ lùng. Không có cảm giác héo tàn, hanh hao lúc sắp bước vào mùa đông. Ai nấy đều mải miết, say mê gặt hái, gánh thóc, đập lúa. Quang cảnh ngày mùa tràn ngập sức sống và niềm vui no ấm của người nông dân.",
      "vocabularyNotes": [
        {
          "word": "vàng xuộm",
          "meaning": "Màu vàng đậm và đều của lúa chín rộ khắp cánh đồng."
        },
        {
          "word": "vàng giòn",
          "meaning": "Màu vàng của rơm thóc phơi được nắng to, khô ráo giòn rụm."
        },
        {
          "word": "trù phú",
          "meaning": "Giàu có, dồi dào của cải và sản vật thiên nhiên."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập một — Trang 14, 15 (Chủ điểm 1: Việt Nam - Tổ quốc em)",
    "pedagogicalObjective": "Cảm nhận bức tranh phong cảnh làng quê ngày mùa trù phú qua nghệ thuật miêu tả sắc thái màu vàng tinh tế của nhà văn Tô Hoài.",
    "questions": [
      {
        "id": "tv-g5-b2-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nghệ thuật nổi bật nhất được Tô Hoài sử dụng trong bài văn là gì?",
        "audioText": "Nghệ thuật nổi bật nhất được Tô Hoài sử dụng trong bài văn là gì?",
        "options": [
          {
            "id": "a",
            "label": "Sử dụng hệ thống từ ngữ chỉ các sắc thái màu vàng phong phú, gợi tả sự trù phú no ấm 🌾✨",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Chỉ dùng màu đen trắng"
          },
          {
            "id": "c",
            "label": "Kể chuyện phiêu lưu viễn tưởng"
          }
        ]
      }
    ]
  },
  "tv-g5-b3": {
    "passage": {
      "title": "Bài 3: Sắc màu em yêu",
      "author": "Phạm Đình Ân",
      "genre": "poem",
      "content": [
        "Em yêu màu đỏ:\nNhư máu trong tim,\nLá cờ Tổ quốc,\nKhăn quàng đội viên.",
        "Em yêu màu xanh:\nĐồng bằng, rừng núi,\nBiển đầy sóng xô,\nBầu trời cao vợi.",
        "Em yêu màu vàng:\nLúa đồng chín rộ,\nHoa cúc mùa thu,\nNắng trời rực rỡ.",
        "Em yêu màu trắng:\nTrang giấy học trò,\nHoa hồng bạch nở,\nMái tóc của bà.",
        "Trăm nghìn cảnh đẹp\nDành trọn cho em\nEm yêu tất cả\nSắc màu non sông."
      ],
      "audioNarration": "Bài 3: Sắc màu em yêu. Em yêu màu đỏ: Như máu trong tim, Lá cờ Tổ quốc, Khăn quàng đội viên. Em yêu màu xanh: Đồng bằng, rừng núi, Biển đầy sóng xô, Bầu trời cao vợi. Em yêu màu vàng: Lúa đồng chín rộ, Hoa cúc mùa thu, Nắng trời rực rỡ. Em yêu màu trắng: Trang giấy học trò, Hoa hồng bạch nở, Mái tóc của bà. Trăm nghìn cảnh đẹp Dành trọn cho em Em yêu tất cả Sắc màu non sông.",
      "vocabularyNotes": [
        {
          "word": "cao vợi",
          "meaning": "Rất cao, hun hút và mênh mông không cùng."
        },
        {
          "word": "sắc màu non sông",
          "meaning": "Vẻ đẹp muôn màu của đất nước gấm vóc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập một — Trang 18, 19 (Chủ điểm 1: Việt Nam - Tổ quốc em)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, cảm nhận tình yêu thiết tha đối với từng sắc màu gắn liền với Tổ quốc và quê hương.",
    "questions": [
      {
        "id": "tv-g5-b3-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Màu đỏ trong bài thơ gắn liền với những hình ảnh thiêng liêng nào?",
        "audioText": "Màu đỏ trong bài thơ gắn liền với những hình ảnh thiêng liêng nào?",
        "options": [
          {
            "id": "a",
            "label": "Máu trong tim, lá cờ Tổ quốc và khăn quàng đội viên 🚩❤️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Quả ớt chín cay"
          },
          {
            "id": "c",
            "label": "Màu sơn cánh cửa"
          }
        ]
      }
    ]
  },
  "tv-g5-b4": {
    "passage": {
      "title": "Bài 4: Lòng dân (Phần 1)",
      "author": "Nguyễn Văn Xe",
      "genre": "story",
      "content": [
        "• Nhân vật: Má (45 tuổi), Chú cán bộ cách mạng, Thằng An (con má), Cai, Lính.",
        "• Cảnh trí: Một ngôi nhà lá nghèo ở miền Nam Bộ. Trong nhà có chiếc chõng tre, bàn trà.",
        "• Diễn biến: Chú cán bộ bị giặc rượt đuổi, chạy hớt hải vào nhà má. Má vội bảo: \"Chú ngồi xuống chõng ăn cơm mau lên!\". Chú cán bộ vừa ngồi xuống bưng bát cơm thì tên Cai và tốp lính sầm sập xông vào.",
        "Cai hất hàm quát: \"Có thấy một tên cộng sản chạy vào đây không?\". Má bình thản đáp: \"Tui ở trong nhà nấu cơm, có thấy ai đâu!\". Cai chỉ tay vào Chú cán bộ: \"Thằng kia là ai?\". Má dõng dạc trả lời: \"Dạ, nó là thằng rể tui, ở xóm trên ghé qua ăn cơm!\". Tên Cai trừng mắt nghi ngờ, liền bắt thằng An lại tra hỏi hòng dọa dẫm đứa trẻ."
      ],
      "audioNarration": "Bài 4: Lòng dân (Phần 1). • Nhân vật: Má (45 tuổi), Chú cán bộ cách mạng, Thằng An (con má), Cai, Lính. • Cảnh trí: Một ngôi nhà lá nghèo ở miền Nam Bộ. Trong nhà có chiếc chõng tre, bàn trà. • Diễn biến: Chú cán bộ bị giặc rượt đuổi, chạy hớt hải vào nhà má. Má vội bảo: \"Chú ngồi xuống chõng ăn cơm mau lên!\". Chú cán bộ vừa ngồi xuống bưng bát cơm thì tên Cai và tốp lính sầm sập xông vào. Cai hất hàm quát: \"Có thấy một tên cộng sản chạy vào đây không?\". Má bình thản đáp: \"Tui ở trong nhà nấu cơm, có thấy ai đâu!\". Cai chỉ tay vào Chú cán bộ: \"Thằng kia là ai?\". Má dõng dạc trả lời: \"Dạ, nó là thằng rể tui, ở xóm trên ghé qua ăn cơm!\". Tên Cai trừng mắt nghi ngờ, liền bắt thằng An lại tra hỏi hòng dọa dẫm đứa trẻ.",
      "vocabularyNotes": [
        {
          "word": "chõng tre",
          "meaning": "Loại giường nhỏ hẹp đóng bằng tre phổ biến ở vùng quê."
        },
        {
          "word": "hất hàm",
          "meaning": "Cất cằm lên tỏ vẻ hống hách, coi thường người đối thoại."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập một — Trang 22, 23 (Chủ điểm 2: Cánh chim hòa bình)",
    "pedagogicalObjective": "Đọc phân vai trích đoạn kịch, cảm phục sự bình tĩnh, mưu trí và lòng trung kiên của má Nam Bộ bảo vệ cán bộ cách mạng.",
    "questions": [
      {
        "id": "tv-g5-b4-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Má đã dùng mưu trí gì để che mắt tên Cai và tốp lính giặc?",
        "audioText": "Má đã dùng mưu trí gì để che mắt tên Cai và tốp lính giặc?",
        "options": [
          {
            "id": "a",
            "label": "Bảo chú cán bộ ngồi ăn cơm giả làm con rể ghé thăm nhà 🍚🌾",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Giấu cán bộ vào bồ thóc"
          },
          {
            "id": "c",
            "label": "Chỉ đường cho giặc đuổi theo"
          }
        ]
      }
    ]
  },
  "tv-g5-b5": {
    "passage": {
      "title": "Bài 5: Lòng dân (Phần 2)",
      "author": "Nguyễn Văn Xe",
      "genre": "story",
      "content": [
        "Tên Cai lôi thằng An ra dọa nạt: \"Mầy có biết thằng ngồi ăn cơm kia là ai không? Nói thật tao cho kẹo, nói láo tao bắn!\". Thằng An khóc òa nhưng nhanh trí bảo: \"Dạ, anh rể con!\".",
        "Cai quay sang ép má phải đưa giấy tờ căn cước. Má bình tĩnh đi vào buồng trong, tay lần giở chiếc tráp gỗ vờ tìm giấy tờ rồi bất ngờ bước ra dõng dạc nói: \"Tui là dân làm ăn lương thiện, mấy ông đừng có làm càn!\". Đúng lúc đó, tiếng súng của đội du kích nổ vang phía đầu làng khiến tên Cai và toán lính khiếp vía, vội vã tháo chạy thục mạng.",
        "Chú cán bộ nắm chặt tay má nghẹn ngào: \"Má đã cứu mạng con!\". Má mỉm cười hiền hậu: \"Lòng dân thương cán bộ như con đẻ, có sá chi hiểm nguy!\". Vở kịch là bản anh hùng ca ngợi ca tấm lòng thủy chung của nhân dân với cách mạng."
      ],
      "audioNarration": "Bài 5: Lòng dân (Phần 2). Tên Cai lôi thằng An ra dọa nạt: \"Mầy có biết thằng ngồi ăn cơm kia là ai không? Nói thật tao cho kẹo, nói láo tao bắn!\". Thằng An khóc òa nhưng nhanh trí bảo: \"Dạ, anh rể con!\". Cai quay sang ép má phải đưa giấy tờ căn cước. Má bình tĩnh đi vào buồng trong, tay lần giở chiếc tráp gỗ vờ tìm giấy tờ rồi bất ngờ bước ra dõng dạc nói: \"Tui là dân làm ăn lương thiện, mấy ông đừng có làm càn!\". Đúng lúc đó, tiếng súng của đội du kích nổ vang phía đầu làng khiến tên Cai và toán lính khiếp vía, vội vã tháo chạy thục mạng. Chú cán bộ nắm chặt tay má nghẹn ngào: \"Má đã cứu mạng con!\". Má mỉm cười hiền hậu: \"Lòng dân thương cán bộ như con đẻ, có sá chi hiểm nguy!\". Vở kịch là bản anh hùng ca ngợi ca tấm lòng thủy chung của nhân dân với cách mạng.",
      "vocabularyNotes": [
        {
          "word": "căn cước",
          "meaning": "Giấy tờ tùy thân chứng minh lý lịch nhân thân thời trước."
        },
        {
          "word": "làm càn",
          "meaning": "Hành động ngang ngược, bất chấp lý lẽ và luật pháp."
        },
        {
          "word": "sá chi",
          "meaning": "Không tiếc, không màng tới gian khổ hy sinh."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập một — Trang 26, 27 (Chủ điểm 2: Cánh chim hòa bình)",
    "pedagogicalObjective": "Hiểu sâu sắc chân lý: Lòng dân là chỗ dựa vững chắc và thành trì kiên cố nhất của cách mạng.",
    "questions": [
      {
        "id": "tv-g5-b5-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Chi tiết nào thể hiện rõ nhất tình cảm keo sơn giữa nhân dân và cán bộ cách mạng?",
        "audioText": "Chi tiết nào thể hiện rõ nhất tình cảm keo sơn giữa nhân dân và cán bộ cách mạng?",
        "options": [
          {
            "id": "a",
            "label": "Má coi cán bộ như con đẻ, dũng cảm nhận hiểm nguy về mình để che chở cán bộ ❤️🕊️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Toán lính giặc bỏ chạy"
          },
          {
            "id": "c",
            "label": "Thằng An được thưởng kẹo"
          }
        ]
      }
    ]
  },
  "tv-g5-b6": {
    "passage": {
      "title": "Bài 6: Bài ca về trái đất",
      "author": "Định Hải",
      "genre": "poem",
      "content": [
        "Trái Đất này là của chúng mình\nQuả bóng xanh bay giữa trời xanh\nBồ câu ơi, tiếng chim gù thương mến\nHải âu ơi, cánh chim vờn sóng biển\nCùng bay nào, cho Trái Đất quay!\nCùng bay nào, cho Trái Đất quay!",
        "Trái Đất trẻ của bạn trẻ năm châu\nVàng, trắng, đen... tuy khác màu da\nBạn yêu ơi, chúng ta là hoa quý\nĐầy hương thơm khoe sắc giữa đất trời\nHoa nào cũng quý, cũng thơm ngát nồng nàn.",
        "Khói hình nấm là tai họa khôn lường\nBom hạt nhân làm tan nát muôn loài\nHãy giữ lấy Trái Đất bình yên\nCho nụ cười mãi nở trên môi trẻ thơ."
      ],
      "audioNarration": "Bài 6: Bài ca về trái đất. Trái Đất này là của chúng mình Quả bóng xanh bay giữa trời xanh Bồ câu ơi, tiếng chim gù thương mến Hải âu ơi, cánh chim vờn sóng biển Cùng bay nào, cho Trái Đất quay! Cùng bay nào, cho Trái Đất quay! Trái Đất trẻ của bạn trẻ năm châu Vàng, trắng, đen... tuy khác màu da Bạn yêu ơi, chúng ta là hoa quý Đầy hương thơm khoe sắc giữa đất trời Hoa nào cũng quý, cũng thơm ngát nồng nàn. Khói hình nấm là tai họa khôn lường Bom hạt nhân làm tan nát muôn loài Hãy giữ lấy Trái Đất bình yên Cho nụ cười mãi nở trên môi trẻ thơ.",
      "vocabularyNotes": [
        {
          "word": "khói hình nấm",
          "meaning": "Cột khói khổng lồ bốc lên sau vụ nổ bom nguyên tử, biểu tượng của hủy diệt chiến tranh."
        },
        {
          "word": "năm châu",
          "meaning": "Châu Á, Châu Âu, Châu Phi, Châu Mỹ và Châu Đại Dương."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập một — Trang 30, 31 (Chủ điểm 2: Cánh chim hòa bình)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, khát khao hòa bình, bình đẳng màu da và quyết tâm ngăn chặn chiến tranh hạt nhân.",
    "questions": [
      {
        "id": "tv-g5-b6-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nhà thơ khẳng định điều gì về giá trị của trẻ em thuộc các màu da khác nhau trên thế giới?",
        "audioText": "Nhà thơ khẳng định điều gì về giá trị của trẻ em thuộc các màu da khác nhau trên thế giới?",
        "options": [
          {
            "id": "a",
            "label": "Tất cả trẻ em đều là những bông hoa quý báu, bình đẳng và tỏa ngát hương thơm 🌍🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Chỉ có một màu da là đẹp nhất"
          },
          {
            "id": "c",
            "label": "Màu da quyết định trí thông minh"
          }
        ]
      }
    ]
  },
  "tv-g5-b7": {
    "passage": {
      "title": "Bài 7: Một chuyên gia máy xúc",
      "author": "Hồng Thủy",
      "genre": "prose",
      "content": [
        "Đó là một buổi sáng đầu xuân trong trẻo trên công trường xây dựng thủy điện.",
        "Tôi đang điều khiển chiếc máy xúc gầu ngoạm xúc từng tảng đá lớn thì bỗng nhìn thấy một người ngoại quốc cao lớn, mái tóc vàng óng bước lại gần. Đó là A-lếch-xây - chuyên gia máy xúc người Liên Xô sang giúp Việt Nam xây dựng công trình.",
        "A-lếch-xây nhìn tôi mỉm cười thân thiện, đưa bàn tay to lớn, ấm áp nắm chặt lấy bàn tay rám nắng đầy dầu mỡ của tôi và nói bằng tiếng Việt lơ lớ: \"Chào đồng chí!\". Cái bắt tay nồng hậu ấy đã thắt chặt tình hữu nghị thắm thiết giữa hai người thợ máy của hai đất nước anh em."
      ],
      "audioNarration": "Bài 7: Một chuyên gia máy xúc. Đó là một buổi sáng đầu xuân trong trẻo trên công trường xây dựng thủy điện. Tôi đang điều khiển chiếc máy xúc gầu ngoạm xúc từng tảng đá lớn thì bỗng nhìn thấy một người ngoại quốc cao lớn, mái tóc vàng óng bước lại gần. Đó là A-lếch-xây - chuyên gia máy xúc người Liên Xô sang giúp Việt Nam xây dựng công trình. A-lếch-xây nhìn tôi mỉm cười thân thiện, đưa bàn tay to lớn, ấm áp nắm chặt lấy bàn tay rám nắng đầy dầu mỡ của tôi và nói bằng tiếng Việt lơ lớ: \"Chào đồng chí!\". Cái bắt tay nồng hậu ấy đã thắt chặt tình hữu nghị thắm thiết giữa hai người thợ máy của hai đất nước anh em.",
      "vocabularyNotes": [
        {
          "word": "công trường",
          "meaning": "Nơi đang tiến hành xây dựng các công trình lớn."
        },
        {
          "word": "nồng hậu",
          "meaning": "Chân thành, ấm áp và dạt dào tình cảm quý mến."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập một — Trang 34, 35 (Chủ điểm 2: Cánh chim hòa bình)",
    "pedagogicalObjective": "Cảm nhận tình cảm quốc tế trong sáng, tình bạn lao động gắn bó giữa chuyên gia nước ngoài và công nhân Việt Nam.",
    "questions": [
      {
        "id": "tv-g5-b7-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Cái bắt tay giữa anh thợ máy xúc Việt Nam và chuyên gia A-lếch-xây thể hiện điều gì?",
        "audioText": "Cái bắt tay giữa anh thợ máy xúc Việt Nam và chuyên gia A-lếch-xây thể hiện điều gì?",
        "options": [
          {
            "id": "a",
            "label": "Tình bạn lao động chân thành và tình hữu nghị quốc tế cao đẹp 🤝🌍",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Sự chào hỏi xã giao thông thường"
          },
          {
            "id": "c",
            "label": "Sự tranh chấp trên công trường"
          }
        ]
      }
    ]
  },
  "tv-g5-b8": {
    "passage": {
      "title": "Bài 8: Kì diệu rừng xanh",
      "author": "Nguyễn Phan Hách",
      "genre": "prose",
      "content": [
        "Loanh quanh trong rừng, chúng tôi bắt gặp một lối đi đầy nấm dại. Những chiếc nấm to bằng cái ấm tích, màu hạt dẻ, mọc san sát nhau như một vương quốc nấm tí hon. Mỗi chiếc nấm là một tòa lâu đài có mái vòm xòe rộng, dưới chân là lớp thảm lá mục êm ái.",
        "Đi sâu vào nữa, vòm rừng khộp hiện ra với muôn vàn sắc vàng rực rỡ. Nắng vàng đổ tràn qua kẽ lá như ánh sáng pha lê. Những con vượn bạc má vắt vẻo chuyền cành, chốc chốc lại nghiêng đầu ngơ ngác nhìn lũ chúng tôi.",
        "Rừng khộp mùa thu như một bức tranh kỳ vĩ, tràn ngập hương thơm của lá cây và nhựa sống diệu kỳ của muôn loài."
      ],
      "audioNarration": "Bài 8: Kì diệu rừng xanh. Loanh quanh trong rừng, chúng tôi bắt gặp một lối đi đầy nấm dại. Những chiếc nấm to bằng cái ấm tích, màu hạt dẻ, mọc san sát nhau như một vương quốc nấm tí hon. Mỗi chiếc nấm là một tòa lâu đài có mái vòm xòe rộng, dưới chân là lớp thảm lá mục êm ái. Đi sâu vào nữa, vòm rừng khộp hiện ra với muôn vàn sắc vàng rực rỡ. Nắng vàng đổ tràn qua kẽ lá như ánh sáng pha lê. Những con vượn bạc má vắt vẻo chuyền cành, chốc chốc lại nghiêng đầu ngơ ngác nhìn lũ chúng tôi. Rừng khộp mùa thu như một bức tranh kỳ vĩ, tràn ngập hương thơm của lá cây và nhựa sống diệu kỳ của muôn loài.",
      "vocabularyNotes": [
        {
          "word": "ấm tích",
          "meaning": "Ấm sành sứ cỡ lớn có bao giữ nhiệt dùng để pha và ủ nước chè tươi."
        },
        {
          "word": "rừng khộp",
          "meaning": "Loại rừng cây họ dầu rụng lá vào mùa khô đặc trưng ở Tây Nguyên."
        },
        {
          "word": "vắt vẻo",
          "meaning": "Ở trên cao, đu đưa nhẹ nhàng và không vững chắc."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập một — Trang 40, 41 (Chủ điểm 3: Con người với thiên nhiên)",
    "pedagogicalObjective": "Đọc diễn cảm bài văn tả cảnh rừng nguyên sinh tuyệt mỹ của Nguyễn Phan Hách, bồi dưỡng tình yêu và ý thức bảo tồn thiên nhiên.",
    "questions": [
      {
        "id": "tv-g5-b8-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Tác giả đã dùng những hình ảnh so sánh độc đáo nào để miêu tả vương quốc nấm dại?",
        "audioText": "Tác giả đã dùng những hình ảnh so sánh độc đáo nào để miêu tả vương quốc nấm dại?",
        "options": [
          {
            "id": "a",
            "label": "To bằng ấm tích như vương quốc nấm tí hon, mỗi chiếc nấm là một tòa lâu đài mái vòm 🍄🏰",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nhỏ như hạt cát"
          },
          {
            "id": "c",
            "label": "Trông như hòn đá tảng"
          }
        ]
      }
    ]
  },
  "tv-g5-b9": {
    "passage": {
      "title": "Bài 9: Trước cổng trời",
      "author": "Nguyễn Đình Thi",
      "genre": "poem",
      "content": [
        "Giữa hai vách đá dựng thành\nMở ra một khoảng trời xanh mênh mông\nCổng trời lộng gió ngàn phương\nSương mù giăng mắc dặm trường bồng bềnh.",
        "Nhìn ra xa tít trùng khơi\nNương ngô xanh mướt lưng trời chênh vênh\nKhói lam bản vắng nhẹ tênh\nThác nguồn đổ xuống trắng tinh dải ngàn.",
        "Người Tày, người Dao, người Mông\nVáy hoa rực rỡ gùi ngô đi về\nCổng trời mở rộng sơn khê\nĐón tương lai sáng tràn trề niềm tin."
      ],
      "audioNarration": "Bài 9: Trước cổng trời. Giữa hai vách đá dựng thành Mở ra một khoảng trời xanh mênh mông Cổng trời lộng gió ngàn phương Sương mù giăng mắc dặm trường bồng bềnh. Nhìn ra xa tít trùng khơi Nương ngô xanh mướt lưng trời chênh vênh Khói lam bản vắng nhẹ tênh Thác nguồn đổ xuống trắng tinh dải ngàn. Người Tày, người Dao, người Mông Váy hoa rực rỡ gùi ngô đi về Cổng trời mở rộng sơn khê Đón tương lai sáng tràn trề niềm tin.",
      "vocabularyNotes": [
        {
          "word": "cổng trời",
          "meaning": "Đèo cao giữa hai vách núi đá dựng đứng nhìn ra khoảng không bao la."
        },
        {
          "word": "chênh vênh",
          "meaning": "Ở vị trí trên sườn dốc cheo leo, không bằng phẳng."
        },
        {
          "word": "sơn khê",
          "meaning": "Vùng núi non sông suối hiểm trở."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập một — Trang 46, 47 (Chủ điểm 3: Con người với thiên nhiên)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, cảm nhận vẻ đẹp hùng vĩ, thơ mộng của vùng cao Tây Bắc và cuộc sống lao động tươi vui của đồng bào các dân tộc.",
    "questions": [
      {
        "id": "tv-g5-b9-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Cảnh vật vùng cổng trời được nhà thơ Nguyễn Đình Thi khắc họa với nét đẹp gì nổi bật?",
        "audioText": "Cảnh vật vùng cổng trời được nhà thơ Nguyễn Đình Thi khắc họa với nét đẹp gì nổi bật?",
        "options": [
          {
            "id": "a",
            "label": "Vẻ đẹp kỳ vĩ, khoáng đạt giữa mây trời hòa cùng sắc màu thổ cẩm ấm áp của đồng bào 🏔️🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Cảnh hoang vắng lạnh lẽo không bóng người"
          },
          {
            "id": "c",
            "label": "Đô thị sầm uất nhà cao tầng"
          }
        ]
      }
    ]
  },
  "tv-g5-b10": {
    "passage": {
      "title": "Bài 10: Đất Cà Mau",
      "author": "Mai Văn Tạo",
      "genre": "prose",
      "content": [
        "Cà Mau là đất mưa dông. Mưa ở Cà Mau đến rất nhanh: đang nắng gay gắt bỗng mây đen ùn ùn kéo tới, mưa như trút nước rồi lại tạnh ngay lập tức.",
        "Đất Cà Mau là đất phù sa mới bồi đắp, bùn lầy màu mỡ. Cây đước mọc san sát nhau thành rừng bạt ngàn. Rễ đước chằng chịt cắm sâu xuống bùn lầy như hàng triệu chiếc nạng vững chắc giữ đất, lấn biển.",
        "Sống giữa thiên nhiên khắc nghiệt, người Cà Mau mang tính cách phóng khoáng, dũng cảm, cần cù và mộc mạc. Họ cùng nhau đoàn kết khai phá rừng hoang, lập nên những xóm làng trù phú nơi địa đầu cực Nam của Tổ quốc."
      ],
      "audioNarration": "Bài 10: Đất Cà Mau. Cà Mau là đất mưa dông. Mưa ở Cà Mau đến rất nhanh: đang nắng gay gắt bỗng mây đen ùn ùn kéo tới, mưa như trút nước rồi lại tạnh ngay lập tức. Đất Cà Mau là đất phù sa mới bồi đắp, bùn lầy màu mỡ. Cây đước mọc san sát nhau thành rừng bạt ngàn. Rễ đước chằng chịt cắm sâu xuống bùn lầy như hàng triệu chiếc nạng vững chắc giữ đất, lấn biển. Sống giữa thiên nhiên khắc nghiệt, người Cà Mau mang tính cách phóng khoáng, dũng cảm, cần cù và mộc mạc. Họ cùng nhau đoàn kết khai phá rừng hoang, lập nên những xóm làng trù phú nơi địa đầu cực Nam của Tổ quốc.",
      "vocabularyNotes": [
        {
          "word": "rễ đước",
          "meaning": "Hệ thống rễ cọc và rễ chống dày đặc giúp cây đước đứng vững trong bùn lầy ngập mặn."
        },
        {
          "word": "phóng khoáng",
          "meaning": "Rộng rãi, cởi mở, không hẹp hòi câu nệ tiểu tiết."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập một — Trang 52, 53 (Chủ điểm 3: Con người với thiên nhiên)",
    "pedagogicalObjective": "Đọc hiểu đặc điểm địa lý, thiên nhiên kỳ thú của rừng đước Cà Mau và phẩm chất kiên cường của con người Nam Bộ.",
    "questions": [
      {
        "id": "tv-g5-b10-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Cây đước có vai trò quan trọng như thế nào đối với vùng đất mũi Cà Mau?",
        "audioText": "Cây đước có vai trò quan trọng như thế nào đối với vùng đất mũi Cà Mau?",
        "options": [
          {
            "id": "a",
            "label": "Rễ đước cắm sâu vào bùn giữ đất phù sa, chắn sóng và lấn biển mở rộng bờ cõi 🌲🌊",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Làm cản trở thuyền bè qua lại"
          },
          {
            "id": "c",
            "label": "Làm đất bị xói mòn trôi ra biển"
          }
        ]
      }
    ]
  },
  "tv-g5-b11": {
    "passage": {
      "title": "Bài 11: Mùa thảo quả",
      "author": "Ma Văn Kháng",
      "genre": "prose",
      "content": [
        "Thảo quả trên rừng Đản Khao đã vào mùa chín rộ.",
        "Gió tây lướt thướt bay qua rừng quyến hương thảo quả đi rải khắp thung lũng. Mùi hương ngây ngất, nồng nàn, thơm sực nức như có ai vừa mở chiếc hộp nước hoa khổng lồ giữa núi rừng.",
        "Dưới gốc cây râm mát, thảo quả đỏ au như những đốm lửa bập bùng nấp sau từng phiến lá xanh biếc. Rừng thảo quả ngập tràn sắc đỏ và hương thơm quyến rũ, báo hiệu một vụ thu hoạch ấm no, bội thu của đồng bào vùng cao."
      ],
      "audioNarration": "Bài 11: Mùa thảo quả. Thảo quả trên rừng Đản Khao đã vào mùa chín rộ. Gió tây lướt thướt bay qua rừng quyến hương thảo quả đi rải khắp thung lũng. Mùi hương ngây ngất, nồng nàn, thơm sực nức như có ai vừa mở chiếc hộp nước hoa khổng lồ giữa núi rừng. Dưới gốc cây râm mát, thảo quả đỏ au như những đốm lửa bập bùng nấp sau từng phiến lá xanh biếc. Rừng thảo quả ngập tràn sắc đỏ và hương thơm quyến rũ, báo hiệu một vụ thu hoạch ấm no, bội thu của đồng bào vùng cao.",
      "vocabularyNotes": [
        {
          "word": "thảo quả",
          "meaning": "Cây thân thảo mọc dưới tán rừng già, quả chín đỏ thơm nồng dùng làm gia vị và vị thuốc quý."
        },
        {
          "word": "sực nức",
          "meaning": "Mùi thơm bốc lên rất mạnh, lan tỏa đậm đà khắp không gian."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập một — Trang 58, 59 (Chủ điểm 3: Con người với thiên nhiên)",
    "pedagogicalObjective": "Cảm nhận nghệ thuật miêu tả hương thơm và sắc màu tuyệt mỹ của mùa thảo quả chín qua ngòi bút Ma Văn Kháng.",
    "questions": [
      {
        "id": "tv-g5-b11-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Hương thơm nồng nàn của thảo quả chín được nhà văn miêu tả như thế nào?",
        "audioText": "Hương thơm nồng nàn của thảo quả chín được nhà văn miêu tả như thế nào?",
        "options": [
          {
            "id": "a",
            "label": "Thơm ngây ngất, sực nức, gió rải hương bay khắp thung lũng đại ngàn 🌿✨",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Chỉ thoang thoảng nhẹ"
          },
          {
            "id": "c",
            "label": "Không có mùi thơm"
          }
        ]
      }
    ]
  },
  "tv-g5-b12": {
    "passage": {
      "title": "Bài 12: Hành trình của bầy ong",
      "author": "Nguyễn Đức Mậu",
      "genre": "poem",
      "content": [
        "Với đôi cánh đẫm nắng trời\nBầy ong bay đến muôn nơi xa vời\nTìm hoa từ khắp nẻo đường\nChắt chiu từng giọt mật thơm ngọt ngào.",
        "Vượt qua ngàn suối vạn đèo\nOng mang hương vị của ngàn loài hoa\nBiển xanh, đảo vắng phong ba\nĐến đâu ong cũng nở hoa mật lành.",
        "Bầy ong giữ hộ cho đời\nNhững mùa hoa đã tàn phai tháng ngày\nChắt chiu giọt mật đắm say\nCho trần gian mãi ngọt ngào niềm vui."
      ],
      "audioNarration": "Bài 12: Hành trình của bầy ong. Với đôi cánh đẫm nắng trời Bầy ong bay đến muôn nơi xa vời Tìm hoa từ khắp nẻo đường Chắt chiu từng giọt mật thơm ngọt ngào. Vượt qua ngàn suối vạn đèo Ong mang hương vị của ngàn loài hoa Biển xanh, đảo vắng phong ba Đến đâu ong cũng nở hoa mật lành. Bầy ong giữ hộ cho đời Những mùa hoa đã tàn phai tháng ngày Chắt chiu giọt mật đắm say Cho trần gian mãi ngọt ngào niềm vui.",
      "vocabularyNotes": [
        {
          "word": "chắt chiu",
          "meaning": "Gom góp, tích lũy từng chút một cách cẩn trọng và kiên trì."
        },
        {
          "word": "phong ba",
          "meaning": "Gió to sóng lớn, những gian nan thử thách ngoài biển khơi."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập một — Trang 64, 65 (Chủ điểm 3: Con người với thiên nhiên)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, ca ngợi đức tính cần cù, kiên trì và lối sống cống hiến ngọt ngào cho đời của loài ong.",
    "questions": [
      {
        "id": "tv-g5-b12-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Câu thơ 'Bầy ong giữ hộ cho đời / Những mùa hoa đã tàn phai tháng ngày' mang ý nghĩa gì?",
        "audioText": "Câu thơ 'Bầy ong giữ hộ cho đời / Những mùa hoa đã tàn phai tháng ngày' mang ý nghĩa gì?",
        "options": [
          {
            "id": "a",
            "label": "Ong lưu giữ hương sắc tinh túy của mùa hoa trong những giọt mật ngọt nuôi đời 🐝🍯",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Ong làm hoa không tàn"
          },
          {
            "id": "c",
            "label": "Ong cất giữ cánh hoa khô"
          }
        ]
      }
    ]
  },
  "tv-g5-b13": {
    "passage": {
      "title": "Bài 13: Người gác rừng tí hon",
      "author": "Theo Báo Khăn Quàng Đỏ",
      "genre": "story",
      "content": [
        "Cậu bé là con trai của một bác kiểm lâm dũng cảm. Cậu rất yêu khu rừng nguyên sinh với những cây gỗ lim, gỗ táu nghìn năm tuổi.",
        "Một buổi chiều đi dạo trong rừng, cậu phát hiện dấu chân lạ và những cành cây bị bẻ gãy. Đi theo dấu vết, cậu thấy hai tên lâm tặc đang dùng cưa máy lén lút đốn hạ cây gỗ quý. Cậu liền nhanh trí nấp kín sau bụi rậm, ghi nhớ hướng đi của chúng rồi tức tốc chạy về đồn công an báo tin.",
        "Nhờ sự thông minh, dũng cảm và kịp thời của cậu bé, lực lượng công an và kiểm lâm đã bắt gọn toán lâm tặc cùng toàn bộ tang vật. Cậu bé được Ủy ban nhân dân khen thưởng và tôn vinh là \"Người gác rừng tí hon\" dũng cảm."
      ],
      "audioNarration": "Bài 13: Người gác rừng tí hon. Cậu bé là con trai của một bác kiểm lâm dũng cảm. Cậu rất yêu khu rừng nguyên sinh với những cây gỗ lim, gỗ táu nghìn năm tuổi. Một buổi chiều đi dạo trong rừng, cậu phát hiện dấu chân lạ và những cành cây bị bẻ gãy. Đi theo dấu vết, cậu thấy hai tên lâm tặc đang dùng cưa máy lén lút đốn hạ cây gỗ quý. Cậu liền nhanh trí nấp kín sau bụi rậm, ghi nhớ hướng đi của chúng rồi tức tốc chạy về đồn công an báo tin. Nhờ sự thông minh, dũng cảm và kịp thời của cậu bé, lực lượng công an và kiểm lâm đã bắt gọn toán lâm tặc cùng toàn bộ tang vật. Cậu bé được Ủy ban nhân dân khen thưởng và tôn vinh là \"Người gác rừng tí hon\" dũng cảm.",
      "vocabularyNotes": [
        {
          "word": "lâm tặc",
          "meaning": "Kẻ trộm gỗ, phá hoại rừng trái phép."
        },
        {
          "word": "tang vật",
          "meaning": "Hiện vật liên quan trực tiếp đến hành vi vi phạm pháp luật."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập một — Trang 70, 71 (Chủ điểm 4: Giữ gìn màu xanh)",
    "pedagogicalObjective": "Ca ngợi lòng dũng cảm, tinh thần cảnh giác và ý thức trách nhiệm bảo vệ rừng của bạn nhỏ.",
    "questions": [
      {
        "id": "tv-g5-b13-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Hành động nào của cậu bé giúp công an bắt trọn ổ lâm tặc?",
        "audioText": "Hành động nào của cậu bé giúp công an bắt trọn ổ lâm tặc?",
        "options": [
          {
            "id": "a",
            "label": "Bình tĩnh quan sát dấu vết, không manh động và kịp thời báo công an 🌲👮‍♂️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Một mình xông vào đánh lâm tặc"
          },
          {
            "id": "c",
            "label": "Bỏ chạy về nhà đóng cửa lại"
          }
        ]
      }
    ]
  },
  "tv-g5-b14": {
    "passage": {
      "title": "Bài 14: Trồng rừng ngập mặn",
      "author": "Theo Phan Nguyên Hồng",
      "genre": "prose",
      "content": [
        "Trước đây, do chiến tranh tàn phá và việc quai đê phá rừng làm đầm nuôi tôm không hợp lý, dải rừng ngập mặn ven biển nước ta bị suy giảm nghiêm trọng, khiến đê biển liên tục bị sóng dữ sạt lở.",
        "Nhận rõ tầm quan trọng sống còn của rừng phòng hộ, nhân dân các tỉnh ven biển từ Quảng Ninh đến Cà Mau đã tích cực tham gia các phong trào trồng rừng ngập mặn.",
        "Những cánh rừng đước, rừng sú, vẹt xanh tốt mọc lên san sát đã trở thành bức tường xanh vững chắc chắn sóng, chắn gió bão, bảo vệ đê điều và phục hồi môi trường sinh thái trù phú cho các loài thủy hải sản sinh sôi."
      ],
      "audioNarration": "Bài 14: Trồng rừng ngập mặn. Trước đây, do chiến tranh tàn phá và việc quai đê phá rừng làm đầm nuôi tôm không hợp lý, dải rừng ngập mặn ven biển nước ta bị suy giảm nghiêm trọng, khiến đê biển liên tục bị sóng dữ sạt lở. Nhận rõ tầm quan trọng sống còn của rừng phòng hộ, nhân dân các tỉnh ven biển từ Quảng Ninh đến Cà Mau đã tích cực tham gia các phong trào trồng rừng ngập mặn. Những cánh rừng đước, rừng sú, vẹt xanh tốt mọc lên san sát đã trở thành bức tường xanh vững chắc chắn sóng, chắn gió bão, bảo vệ đê điều và phục hồi môi trường sinh thái trù phú cho các loài thủy hải sản sinh sôi.",
      "vocabularyNotes": [
        {
          "word": "rừng ngập mặn",
          "meaning": "Rừng cây mọc ở vùng bờ biển lầy lội có nước mặn ngập theo thủy triều."
        },
        {
          "word": "sinh thái",
          "meaning": "Mối quan hệ tương tác hữu cơ giữa sinh vật với môi trường sống."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập một — Trang 76, 77 (Chủ điểm 4: Giữ gìn màu xanh)",
    "pedagogicalObjective": "Hiểu giá trị to lớn của rừng ngập mặn trong việc chắn sóng bão, bảo vệ môi trường và bờ cõi đất nước.",
    "questions": [
      {
        "id": "tv-g5-b14-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Rừng ngập mặn ven biển mang lại lợi ích thiết thực gì?",
        "audioText": "Rừng ngập mặn ven biển mang lại lợi ích thiết thực gì?",
        "options": [
          {
            "id": "a",
            "label": "Làm bức tường xanh chắn sóng gió bão, bảo vệ đê điều và phát triển thủy hải sản 🌊🛡️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Làm ô nhiễm bờ biển"
          },
          {
            "id": "c",
            "label": "Gây cản trở đường giao thông thủy"
          }
        ]
      }
    ]
  },
  "tv-g5-b15": {
    "passage": {
      "title": "Bài 15: Hạt gạo làng ta",
      "author": "Trần Đăng Khoa",
      "genre": "poem",
      "content": [
        "Hạt gạo làng ta\nCó vị phù sa\nCủa sông Kinh Thầy\nCó hương sen thơm\nTrong hồ nước đầy\nCó lời mẹ hát\nNgọt bùi đắng cay...",
        "Hạt gạo làng ta\nCó bão tháng bảy\nCó mưa tháng ba\nGiọt mồ hôi sa\nNhững trưa tháng sáu\nNước như ai nấu\nChết cả cá cờ\nCua ngoi lên bờ\nMẹ em xuống cấy...",
        "Hạt gạo làng ta\nGửi ra tiền tuyến\nGửi về phương xa\nEm vui hát ca\nHạt vàng làng ta..."
      ],
      "audioNarration": "Bài 15: Hạt gạo làng ta. Hạt gạo làng ta Có vị phù sa Của sông Kinh Thầy Có hương sen thơm Trong hồ nước đầy Có lời mẹ hát Ngọt bùi đắng cay... Hạt gạo làng ta Có bão tháng bảy Có mưa tháng ba Giọt mồ hôi sa Những trưa tháng sáu Nước như ai nấu Chết cả cá cờ Cua ngoi lên bờ Mẹ em xuống cấy... Hạt gạo làng ta Gửi ra tiền tuyến Gửi về phương xa Em vui hát ca Hạt vàng làng ta...",
      "vocabularyNotes": [
        {
          "word": "sông Kinh Thầy",
          "meaning": "Nhánh sông thuộc hệ thống sông Thái Bình chảy qua tỉnh Hải Dương quê hương tác giả."
        },
        {
          "word": "tiền tuyến",
          "meaning": "Nơi trực tiếp chiến đấu chống quân xâm lược ngoài mặt trận."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập một — Trang 82, 83 (Chủ điểm 4: Giữ gìn màu xanh)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ, cảm nhận công lao nhọc nhằn của người mẹ nông dân làm ra hạt gạo chi viện cho tiền tuyến.",
    "questions": [
      {
        "id": "tv-g5-b15-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Hình ảnh tương phản 'Cua ngoi lên bờ / Mẹ em xuống cấy' làm nổi bật điều gì?",
        "audioText": "Hình ảnh tương phản 'Cua ngoi lên bờ / Mẹ em xuống cấy' làm nổi bật điều gì?",
        "options": [
          {
            "id": "a",
            "label": "Sự nhọc nhằn, đức hy sinh và tinh thần lao động quả cảm phi thường của người mẹ 🌾☀️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Thời tiết mùa hè mát mẻ"
          },
          {
            "id": "c",
            "label": "Mẹ thích đi bắt cua"
          }
        ]
      }
    ]
  },
  "tv-g5-b16": {
    "passage": {
      "title": "Bài 16: Chuỗi ngọc lam",
      "author": "Theo Truyện nước ngoài",
      "genre": "story",
      "content": [
        "Chiều giáng sinh, Pi-e đang ngồi trong tiệm kim hoàn thì có một cô bé mắt xanh biếc bước vào, ngắm nghía chuỗi ngọc lam tuyệt đẹp.",
        "Cô bé dốc hết những đồng xu lẻ tiết kiệm trong túi lên bàn và thì thầm: \"Cháu muốn mua chuỗi ngọc này tặng chị gái cháu. Từ khi mẹ mất, chị đã thay mẹ chăm sóc cháu, cháu muốn chị được vui!\".",
        "Nhìn những đồng tiền xu ít ỏi không thấm vào đâu so với giá trị món đồ, Pi-e vô cùng xúc động trước tình cảm ngây thơ của cô bé. Anh liền lau sạch chuỗi ngọc, gói cẩn thận vào hộp nhung đỏ trao cho em.",
        "Tối hôm đó, người chị gái tìm đến trả lại vì biết món đồ quá đắt tiền. Pi-e mỉm cười ân cần đáp: \"Cô bé đã trả bằng giá cao nhất có thể: em ấy đã gom toàn bộ số tiền tiết kiệm và trao trọn cả tấm lòng hiếu nghĩa yêu thương!\". Tình người ấm áp đã xua tan cái giá lạnh của đêm đông."
      ],
      "audioNarration": "Bài 16: Chuỗi ngọc lam. Chiều giáng sinh, Pi-e đang ngồi trong tiệm kim hoàn thì có một cô bé mắt xanh biếc bước vào, ngắm nghía chuỗi ngọc lam tuyệt đẹp. Cô bé dốc hết những đồng xu lẻ tiết kiệm trong túi lên bàn và thì thầm: \"Cháu muốn mua chuỗi ngọc này tặng chị gái cháu. Từ khi mẹ mất, chị đã thay mẹ chăm sóc cháu, cháu muốn chị được vui!\". Nhìn những đồng tiền xu ít ỏi không thấm vào đâu so với giá trị món đồ, Pi-e vô cùng xúc động trước tình cảm ngây thơ của cô bé. Anh liền lau sạch chuỗi ngọc, gói cẩn thận vào hộp nhung đỏ trao cho em. Tối hôm đó, người chị gái tìm đến trả lại vì biết món đồ quá đắt tiền. Pi-e mỉm cười ân cần đáp: \"Cô bé đã trả bằng giá cao nhất có thể: em ấy đã gom toàn bộ số tiền tiết kiệm và trao trọn cả tấm lòng hiếu nghĩa yêu thương!\". Tình người ấm áp đã xua tan cái giá lạnh của đêm đông.",
      "vocabularyNotes": [
        {
          "word": "kim hoàn",
          "meaning": "Nghề chế tác và kinh doanh đồ trang sức bằng vàng bạc, đá quý."
        },
        {
          "word": "chuỗi ngọc lam",
          "meaning": "Vòng đeo cổ kết bằng những viên ngọc màu xanh lam quý giá."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập một — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập một — Trang 88, 89 (Chủ điểm 4: Giữ gìn màu xanh)",
    "pedagogicalObjective": "Đọc hiểu câu chuyện nhân văn sâu sắc, ngợi ca tình yêu thương gia đình và tấm lòng nhân hậu sẻ chia giữa con người.",
    "questions": [
      {
        "id": "tv-g5-b16-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Vì sao Pi-e khẳng định cô bé đã trả 'giá cao nhất' cho chuỗi ngọc lam?",
        "audioText": "Vì sao Pi-e khẳng định cô bé đã trả 'giá cao nhất' cho chuỗi ngọc lam?",
        "options": [
          {
            "id": "a",
            "label": "Vì cô bé đã dâng trọn toàn bộ số tiền mình có cùng tình yêu thương vô giá dành cho chị 💎❤️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Vì cô bé đưa tiền đô la"
          },
          {
            "id": "c",
            "label": "Vì Pi-e muốn bán tống khứ món đồ"
          }
        ]
      }
    ]
  },
  "tv-g5-b17": {
    "passage": {
      "title": "Bài 17: Người công dân số Một (Phần 1)",
      "author": "Hà Văn Cầu",
      "genre": "story",
      "content": [
        "• Nhân vật: Nguyễn Tất Thành (sau này là Bác Hồ), Anh Lê.",
        "• Cảnh trí: Một căn phòng trọ nhỏ hẹp ở Sài Gòn năm 1911. Đèn dầu leo lét.",
        "• Diễn biến: Anh Lê đang lo lắng bàn chuyện xin việc làm ổn định để kiếm sống qua ngày. Nhưng Nguyễn Tất Thành với ánh mắt kiên định, sáng ngời lại đau đáu trăn trở về vận mệnh non sông.",
        "Thành nói: \"Anh Lê! Chúng ta là người dân của một nước độc lập hay là người nô lệ mất nước? Tôi muốn sang phương Tây, sang nước Pháp và các nước khác để xem họ làm thế nào, rồi trở về giúp đồng bào ta cởi bỏ ách xích xiềng nô lệ!\".",
        "Anh Lê kinh ngạc hỏi: \"Tiền đâu mà đi?\". Nguyễn Tất Thành giơ hai bàn tay chai sạn lên và dõng dạc khẳng định: \"Đây! Tiền ở đây! Chúng ta sẽ làm bất cứ việc gì để sống và để đi!\". Ý chí quật cường của Người đã mở đầu cho con đường cứu nước vĩ đại."
      ],
      "audioNarration": "Bài 17: Người công dân số Một (Phần 1). • Nhân vật: Nguyễn Tất Thành (sau này là Bác Hồ), Anh Lê. • Cảnh trí: Một căn phòng trọ nhỏ hẹp ở Sài Gòn năm 1911. Đèn dầu leo lét. • Diễn biến: Anh Lê đang lo lắng bàn chuyện xin việc làm ổn định để kiếm sống qua ngày. Nhưng Nguyễn Tất Thành với ánh mắt kiên định, sáng ngời lại đau đáu trăn trở về vận mệnh non sông. Thành nói: \"Anh Lê! Chúng ta là người dân của một nước độc lập hay là người nô lệ mất nước? Tôi muốn sang phương Tây, sang nước Pháp và các nước khác để xem họ làm thế nào, rồi trở về giúp đồng bào ta cởi bỏ ách xích xiềng nô lệ!\". Anh Lê kinh ngạc hỏi: \"Tiền đâu mà đi?\". Nguyễn Tất Thành giơ hai bàn tay chai sạn lên và dõng dạc khẳng định: \"Đây! Tiền ở đây! Chúng ta sẽ làm bất cứ việc gì để sống và để đi!\". Ý chí quật cường của Người đã mở đầu cho con đường cứu nước vĩ đại.",
      "vocabularyNotes": [
        {
          "word": "nô lệ",
          "meaning": "Người bị tước đoạt tự do, bị kẻ thống trị bóc lột và coi thường."
        },
        {
          "word": "xích xiềng",
          "meaning": "Ách áp bức thống trị tàn bạo của thực dân phong kiến."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập hai — Trang 10, 11 (Chủ điểm 5: Người công dân)",
    "pedagogicalObjective": "Đọc phân vai trích đoạn kịch lịch sử, khâm phục lòng yêu nước cháy bỏng và ý chí ra đi tìm đường cứu nước của người thanh niên Nguyễn Tất Thành.",
    "questions": [
      {
        "id": "tv-g5-b17-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Nguyễn Tất Thành trả lời anh Lê 'Tiền ở đâu để đi nước ngoài' bằng cách nào?",
        "audioText": "Nguyễn Tất Thành trả lời anh Lê 'Tiền ở đâu để đi nước ngoài' bằng cách nào?",
        "options": [
          {
            "id": "a",
            "label": "Giơ hai bàn tay lên và khẳng định sẽ lao động bằng đôi bàn tay của chính mình ✋✨",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi vay mượn người thân"
          },
          {
            "id": "c",
            "label": "Chờ đợi trúng số"
          }
        ]
      }
    ]
  },
  "tv-g5-b18": {
    "passage": {
      "title": "Bài 18: Người công dân số Một (Phần 2)",
      "author": "Hà Văn Cầu",
      "genre": "story",
      "content": [
        "Anh Lê vẫn e ngại trước muôn vàn sóng gió biển khơi và nỗi gian nan nơi đất khách quê người.",
        "Nguyễn Tất Thành tha thiết thuyết phục: \"Đồng bào ta đang quằn quại dưới gót giày thực dân. Nếu chỉ nghĩ đến miếng cơm manh áo của riêng mình thì bao giờ dân tộc mới được tự do?\".",
        "Ngọn lửa yêu nước nồng nàn và lý tưởng cao cả của Thành đã lay động tâm can anh Lê. Ngày 5 tháng 6 năm 1911, từ Bến cảng Nhà Rồng lịch sử, người thanh niên Nguyễn Tất Thành với tên gọi Văn Ba đã bước lên con tàu Đô đốc La-tu-sơ Tơ-rê-vin, bắt đầu cuộc hành trình 30 năm bôn ba tìm đường cứu nước, đem lại độc lập tự do cho Tổ quốc."
      ],
      "audioNarration": "Bài 18: Người công dân số Một (Phần 2). Anh Lê vẫn e ngại trước muôn vàn sóng gió biển khơi và nỗi gian nan nơi đất khách quê người. Nguyễn Tất Thành tha thiết thuyết phục: \"Đồng bào ta đang quằn quại dưới gót giày thực dân. Nếu chỉ nghĩ đến miếng cơm manh áo của riêng mình thì bao giờ dân tộc mới được tự do?\". Ngọn lửa yêu nước nồng nàn và lý tưởng cao cả của Thành đã lay động tâm can anh Lê. Ngày 5 tháng 6 năm 1911, từ Bến cảng Nhà Rồng lịch sử, người thanh niên Nguyễn Tất Thành với tên gọi Văn Ba đã bước lên con tàu Đô đốc La-tu-sơ Tơ-rê-vin, bắt đầu cuộc hành trình 30 năm bôn ba tìm đường cứu nước, đem lại độc lập tự do cho Tổ quốc.",
      "vocabularyNotes": [
        {
          "word": "bôn ba",
          "meaning": "Đi khắp nơi xa xôi, trải qua nhiều gian nan vất vả vì mục đích lớn."
        },
        {
          "word": "lý tưởng",
          "meaning": "Mục đích sống cao đẹp và thiêng liêng nhất mà con người hướng tới."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập hai — Trang 16, 17 (Chủ điểm 5: Người công dân)",
    "pedagogicalObjective": "Khắc sâu mốc son lịch sử ngày Bác Hồ ra đi tìm đường cứu nước từ Bến cảng Nhà Rồng năm 1911.",
    "questions": [
      {
        "id": "tv-g5-b18-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Người thanh niên Nguyễn Tất Thành ra đi tìm đường cứu nước từ bến cảng nào, vào thời gian nào?",
        "audioText": "Người thanh niên Nguyễn Tất Thành ra đi tìm đường cứu nước từ bến cảng nào, vào thời gian nào?",
        "options": [
          {
            "id": "a",
            "label": "Bến cảng Nhà Rồng (Sài Gòn) ngày 5 tháng 6 năm 1911 🚢⚓",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Bến cảng Hải Phòng năm 1920"
          },
          {
            "id": "c",
            "label": "Bến cảng Đà Nẵng năm 1930"
          }
        ]
      }
    ]
  },
  "tv-g5-b19": {
    "passage": {
      "title": "Bài 19: Thái sư Trần Thủ Độ",
      "author": "Theo Đại Việt sử ký toàn thư",
      "genre": "story",
      "content": [
        "Thái sư Trần Thủ Độ là người có công lao to lớn gầy dựng và bảo vệ vương triều nhà Trần.",
        "Có lần, người vợ của ông là Linh Từ Quốc Mẫu ngồi kiệu đi qua thềm cấm bị một người lính gác chặn lại. Bà tức giận về mách với chồng. Trần Thủ Độ liền cho gọi người lính gác đến. Người lính run sợ tưởng sẽ bị xử tội chết. Nhưng sau khi nghe đầu đuôi câu chuyện, Trần Thủ Độ ôn tồn bảo: \"Ngươi ở chức thấp mà giữ nghiêm phép nước như thế, ta còn trách phạt gì nữa!\". Rồi ông thưởng cho người lính vàng lụa.",
        "Lần khác, có người thân cậy nhờ vợ ông xin một chức câu đương. Trần Thủ Độ bảo: \"Ngươi được làm câu đương vì có người gửi gắm, vậy phải chặt một ngón chân để phân biệt với người khác!\". Kẻ kia sợ hãi van lạy xin thôi. Tấm gương chí công vô tư, tôn trọng kỷ cương phép nước của Trần Thủ Độ mãi sáng ngời sử sách."
      ],
      "audioNarration": "Bài 19: Thái sư Trần Thủ Độ. Thái sư Trần Thủ Độ là người có công lao to lớn gầy dựng và bảo vệ vương triều nhà Trần. Có lần, người vợ của ông là Linh Từ Quốc Mẫu ngồi kiệu đi qua thềm cấm bị một người lính gác chặn lại. Bà tức giận về mách với chồng. Trần Thủ Độ liền cho gọi người lính gác đến. Người lính run sợ tưởng sẽ bị xử tội chết. Nhưng sau khi nghe đầu đuôi câu chuyện, Trần Thủ Độ ôn tồn bảo: \"Ngươi ở chức thấp mà giữ nghiêm phép nước như thế, ta còn trách phạt gì nữa!\". Rồi ông thưởng cho người lính vàng lụa. Lần khác, có người thân cậy nhờ vợ ông xin một chức câu đương. Trần Thủ Độ bảo: \"Ngươi được làm câu đương vì có người gửi gắm, vậy phải chặt một ngón chân để phân biệt với người khác!\". Kẻ kia sợ hãi van lạy xin thôi. Tấm gương chí công vô tư, tôn trọng kỷ cương phép nước của Trần Thủ Độ mãi sáng ngời sử sách.",
      "vocabularyNotes": [
        {
          "word": "thái sư",
          "meaning": "Chức quan đầu triều, cố vấn cao nhất cho nhà vua thời phong kiến."
        },
        {
          "word": "câu đương",
          "meaning": "Chức dịch nhỏ trong làng thời xưa phụ trách việc bắt bớ, canh giữ."
        },
        {
          "word": "chí công vô tư",
          "meaning": "Hết lòng vì việc công, hoàn toàn công bằng, không thiên vị tình riêng."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập hai — Trang 22, 23 (Chủ điểm 6: Nhớ nguồn)",
    "pedagogicalObjective": "Đọc hiểu câu chuyện lịch sử, khâm phục đức tính chí công vô tư và sự nghiêm minh giữ gìn phép nước của Thái sư Trần Thủ Độ.",
    "questions": [
      {
        "id": "tv-g5-b19-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Vì sao Thái sư Trần Thủ Độ lại ban thưởng cho người lính gác cổng?",
        "audioText": "Vì sao Thái sư Trần Thủ Độ lại ban thưởng cho người lính gác cổng?",
        "options": [
          {
            "id": "a",
            "label": "Vì người lính dũng cảm, giữ nghiêm phép nước không nể sợ quyền quý ⚖️🎖️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Vì người lính nịnh nọt khéo léo"
          },
          {
            "id": "c",
            "label": "Vì người lính xin tiền thưởng"
          }
        ]
      }
    ]
  },
  "tv-g5-b20": {
    "passage": {
      "title": "Bài 20: Phong cảnh đền Hùng",
      "author": "Đoàn Minh Tuấn",
      "genre": "prose",
      "content": [
        "Đền Hùng tọa lạc trang nghiêm trên đỉnh núi Nghĩa Lĩnh hùng vĩ, giữa ngút ngàn rừng cây cổ thụ đất Phong Châu.",
        "Trước đền Thượng, cây đại cổ thụ cành lá xum xuê tỏa bóng mát rượi. Đứng từ đỉnh núi nhìn ra xa, cảnh sắc đất trời hiện lên tráng lệ: bên trái là ngọn núi Ba Vì xanh ngắt sừng sững, bên phải là dãy Tam Đảo uy nghi như bức bình phong che chắn. Phía trước là ngã ba Hạc nơi ba dòng sông Thao, sông Đà, sông Lô hòa dòng cuộn sóng.",
        "Nơi đây lưu dấu truyền thống dựng nước hào hùng của các vua Hùng. Câu ca dao ngàn đời mãi nhắc nhở mỗi người con đất Việt: \"Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ba\"."
      ],
      "audioNarration": "Bài 20: Phong cảnh đền Hùng. Đền Hùng tọa lạc trang nghiêm trên đỉnh núi Nghĩa Lĩnh hùng vĩ, giữa ngút ngàn rừng cây cổ thụ đất Phong Châu. Trước đền Thượng, cây đại cổ thụ cành lá xum xuê tỏa bóng mát rượi. Đứng từ đỉnh núi nhìn ra xa, cảnh sắc đất trời hiện lên tráng lệ: bên trái là ngọn núi Ba Vì xanh ngắt sừng sững, bên phải là dãy Tam Đảo uy nghi như bức bình phong che chắn. Phía trước là ngã ba Hạc nơi ba dòng sông Thao, sông Đà, sông Lô hòa dòng cuộn sóng. Nơi đây lưu dấu truyền thống dựng nước hào hùng của các vua Hùng. Câu ca dao ngàn đời mãi nhắc nhở mỗi người con đất Việt: \"Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ba\".",
      "vocabularyNotes": [
        {
          "word": "tọa lạc",
          "meaning": "Nằm ở một vị trí cao ráo, trang nghiêm và đẹp đẽ."
        },
        {
          "word": "bình phong",
          "meaning": "Vật che chắn gió bão, ở đây ẩn dụ cho dãy núi cao che chở đất đai."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập hai — Trang 28, 29 (Chủ điểm 6: Nhớ nguồn)",
    "pedagogicalObjective": "Đọc hiểu áng văn tả cảnh Đền Hùng tráng lệ, bồi dưỡng đạo lý truyền thống \"Uống nước nhớ nguồn\".",
    "questions": [
      {
        "id": "tv-g5-b20-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Câu ca dao bất hủ nào nhắc nhở đạo lý uống nước nhớ nguồn hướng về ngày Giỗ Tổ Hùng Vương?",
        "audioText": "Câu ca dao bất hủ nào nhắc nhở đạo lý uống nước nhớ nguồn hướng về ngày Giỗ Tổ Hùng Vương?",
        "options": [
          {
            "id": "a",
            "label": "Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ba 🏛️🌺",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Ăn quả nhớ kẻ trồng cây"
          },
          {
            "id": "c",
            "label": "Lá lành đùm lá rách"
          }
        ]
      }
    ]
  },
  "tv-g5-b21": {
    "passage": {
      "title": "Bài 21: Đất nước",
      "author": "Nguyễn Đình Thi",
      "genre": "poem",
      "content": [
        "Mùa thu nay khác rồi\nTôi đứng vui nghe giữa núi đồi\nGió thổi rừng tre phấp phới\nTrời thu thay áo mới\nTrong biếc nói cười thiết tha.",
        "Trời xanh đây là của chúng ta\nNúi rừng đây là của chúng ta\nNhững cánh đồng thơm mát\nNhững ngả đường bát ngát\nNhững dòng sông đỏ nặng phù sa.",
        "Nước chúng ta\nNước những người chưa bao giờ khuất\nĐêm đêm rì rầm trong tiếng đất\nNhững buổi ngày xưa vọng nói về..."
      ],
      "audioNarration": "Bài 21: Đất nước. Mùa thu nay khác rồi Tôi đứng vui nghe giữa núi đồi Gió thổi rừng tre phấp phới Trời thu thay áo mới Trong biếc nói cười thiết tha. Trời xanh đây là của chúng ta Núi rừng đây là của chúng ta Những cánh đồng thơm mát Những ngả đường bát ngát Những dòng sông đỏ nặng phù sa. Nước chúng ta Nước những người chưa bao giờ khuất Đêm đêm rì rầm trong tiếng đất Những buổi ngày xưa vọng nói về...",
      "vocabularyNotes": [
        {
          "word": "phấp phới",
          "meaning": "Bay lượn nhẹ nhàng, rung rinh theo làn gió mát."
        },
        {
          "word": "chưa bao giờ khuất",
          "meaning": "Chưa từng cúi đầu khuất phục trước bất kỳ kẻ thù xâm lược nào."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập hai — Trang 34, 35 (Chủ điểm 6: Nhớ nguồn)",
    "pedagogicalObjective": "Học thuộc lòng bài thơ Đất nước, cảm nhận niềm tự hào làm chủ giang sơn và truyền thống bất khuất của dân tộc Việt Nam.",
    "questions": [
      {
        "id": "tv-g5-b21-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Niềm tự hào làm chủ đất nước độc lập được thể hiện qua những câu thơ nào?",
        "audioText": "Niềm tự hào làm chủ đất nước độc lập được thể hiện qua những câu thơ nào?",
        "options": [
          {
            "id": "a",
            "label": "Trời xanh đây là của chúng ta / Núi rừng đây là của chúng ta 🇻🇳🌾",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Mùa đông lạnh buốt"
          },
          {
            "id": "c",
            "label": "Đêm tối mịt mù"
          }
        ]
      }
    ]
  },
  "tv-g5-b22": {
    "passage": {
      "title": "Bài 22: Nghĩa thầy trò",
      "author": "Hà Ân",
      "genre": "story",
      "content": [
        "Sáng sớm tinh mơ ngày mừng thọ thầy giáo Chu Văn An tròn 70 tuổi, các môn sinh từ khắp nơi nô nức tề tựu đông đủ về chúc thọ thầy.",
        "Nhiều người trong số họ đã làm quan to trong triều đình như quan Thượng thư, quan Tham tri... nhưng khi bước vào sân nhà thầy, ai nấy đều cung kính cúi đầu, chắp tay thưa gửi lễ phép như thuở còn là chú học trò nhỏ.",
        "Sau khi nhận lời chúc mừng của học trò, thầy Chu Văn An mỉm cười bảo: \"Hôm nay thầy mừng vì các anh thành đạt, nhưng thầy trò ta phải cùng nhau đến tạ ơn một người thầy nữa!\". Thầy liền dẫn toàn bộ học trò đi bộ đến xóm bên để bái chào cụ đồ già - người thầy đầu tiên đã dạy thầy từng nét chữ thuở vỡ lòng. Tấm gương tôn sư trọng đạo của cụ Chu Văn An mãi là bài học sáng ngời cho muôn đời con cháu noi theo."
      ],
      "audioNarration": "Bài 22: Nghĩa thầy trò. Sáng sớm tinh mơ ngày mừng thọ thầy giáo Chu Văn An tròn 70 tuổi, các môn sinh từ khắp nơi nô nức tề tựu đông đủ về chúc thọ thầy. Nhiều người trong số họ đã làm quan to trong triều đình như quan Thượng thư, quan Tham tri... nhưng khi bước vào sân nhà thầy, ai nấy đều cung kính cúi đầu, chắp tay thưa gửi lễ phép như thuở còn là chú học trò nhỏ. Sau khi nhận lời chúc mừng của học trò, thầy Chu Văn An mỉm cười bảo: \"Hôm nay thầy mừng vì các anh thành đạt, nhưng thầy trò ta phải cùng nhau đến tạ ơn một người thầy nữa!\". Thầy liền dẫn toàn bộ học trò đi bộ đến xóm bên để bái chào cụ đồ già - người thầy đầu tiên đã dạy thầy từng nét chữ thuở vỡ lòng. Tấm gương tôn sư trọng đạo của cụ Chu Văn An mãi là bài học sáng ngời cho muôn đời con cháu noi theo.",
      "vocabularyNotes": [
        {
          "word": "môn sinh",
          "meaning": "Học trò cùng theo học một thầy giáo thời xưa."
        },
        {
          "word": "tôn sư trọng đạo",
          "meaning": "Kính trọng thầy giáo và quý trọng đạo lý học vấn làm người."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập hai — Trang 40, 41 (Chủ điểm 7: Nghĩa sư đệ)",
    "pedagogicalObjective": "Đọc hiểu câu chuyện lịch sử về người thầy lỗi lạc Chu Văn An, bồi dưỡng truyền thống \"Tôn sư trọng đạo\" thiêng liêng.",
    "questions": [
      {
        "id": "tv-g5-b22-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Hành động nào của thầy Chu Văn An thể hiện sâu sắc truyền thống Tôn sư trọng đạo?",
        "audioText": "Hành động nào của thầy Chu Văn An thể hiện sâu sắc truyền thống Tôn sư trọng đạo?",
        "options": [
          {
            "id": "a",
            "label": "Dẫn toàn bộ học trò đã làm quan to đến bái tạ cụ đồ già từng dạy chữ thuở vỡ lòng 👨‍🏫🙏",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nhận quà biếu đắt tiền"
          },
          {
            "id": "c",
            "label": "Tổ chức yến tiệc linh đình"
          }
        ]
      }
    ]
  },
  "tv-g5-b23": {
    "passage": {
      "title": "Bài 23: Tranh làng Hồ",
      "author": "Nguyễn Tuân",
      "genre": "prose",
      "content": [
        "Từ ngày còn ít tuổi, tôi đã thích những tranh lợn, gà, chuột, ếch, tranh cây dừa, tranh Tố nữ của làng Hồ.",
        "Mỗi lần Tết đến, đứng trước những bức tranh dân gian treo trên vách lá, lòng tôi lại thấm thía một nỗi vui mừng và biết ơn sâu sắc những người nghệ sĩ dân gian đã đem vào cuộc sống những sắc màu tươi vui, đằm thắm.",
        "Kĩ thuật in tranh làng Hồ đạt đến độ tinh xảo tuyệt vời: màu đen óng ánh lấy từ than rơm nếp hoặc than lá tre khô; màu trắng điệp lấp lánh như dát bạc lấy từ vỏ sò điệp nghiền mịn; màu đỏ son lấy từ đất chu sa; màu vàng lấy từ hoa hòe tươi tắn. Những bức tranh ấy gói trọn tâm hồn thuần hậu, tình yêu cuộc sống và bản sắc văn hóa dân gian Việt Nam."
      ],
      "audioNarration": "Bài 23: Tranh làng Hồ. Từ ngày còn ít tuổi, tôi đã thích những tranh lợn, gà, chuột, ếch, tranh cây dừa, tranh Tố nữ của làng Hồ. Mỗi lần Tết đến, đứng trước những bức tranh dân gian treo trên vách lá, lòng tôi lại thấm thía một nỗi vui mừng và biết ơn sâu sắc những người nghệ sĩ dân gian đã đem vào cuộc sống những sắc màu tươi vui, đằm thắm. Kĩ thuật in tranh làng Hồ đạt đến độ tinh xảo tuyệt vời: màu đen óng ánh lấy từ than rơm nếp hoặc than lá tre khô; màu trắng điệp lấp lánh như dát bạc lấy từ vỏ sò điệp nghiền mịn; màu đỏ son lấy từ đất chu sa; màu vàng lấy từ hoa hòe tươi tắn. Những bức tranh ấy gói trọn tâm hồn thuần hậu, tình yêu cuộc sống và bản sắc văn hóa dân gian Việt Nam.",
      "vocabularyNotes": [
        {
          "word": "tranh làng Hồ",
          "meaning": "Tranh khắc gỗ dân gian truyền thống sản xuất tại làng Đông Hồ (Thuận Thành, Bắc Ninh)."
        },
        {
          "word": "trắng điệp",
          "meaning": "Màu trắng lấp lánh óng ánh làm từ vỏ con sò điệp nghiền mịn trộn hồ nếp."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập hai — Trang 46, 47 (Chủ điểm 7: Nghĩa sư đệ)",
    "pedagogicalObjective": "Cảm nhận tình yêu và niềm tự hào về nghệ thuật tranh khắc gỗ dân gian Đông Hồ qua áng văn tinh tế của Nguyễn Tuân.",
    "questions": [
      {
        "id": "tv-g5-b23-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Màu trắng điệp óng ánh độc đáo trong tranh Đông Hồ được tạo nên từ nguyên liệu gì?",
        "audioText": "Màu trắng điệp óng ánh độc đáo trong tranh Đông Hồ được tạo nên từ nguyên liệu gì?",
        "options": [
          {
            "id": "a",
            "label": "Vỏ con sò điệp nghiền mịn trộn lẫn với hồ nếp dẻo thơm 🐚✨",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Bột vôi quét tường"
          },
          {
            "id": "c",
            "label": "Màu hóa học nhập khẩu"
          }
        ]
      }
    ]
  },
  "tv-g5-b24": {
    "passage": {
      "title": "Bài 24: Út Vịnh",
      "author": "Theo Báo Thiếu niên Tiền phong",
      "genre": "story",
      "content": [
        "Nhà Út Vịnh ở ngay sát bên đường sắt Bắc - Nam. Vịnh luôn gương mẫu tham gia phong trào \"Em yêu đường sắt quê em\", thường xuyên nhắc nhở các bạn không ném đá lên tàu và không chơi đùa gần đường ray nguy hiểm.",
        "Một buổi chiều, Vịnh nghe tiếng còi tàu hỏa rú lên từng hồi khẩn thiết. Nhìn ra đường ray, Vịnh bàng hoàng thấy hai em nhỏ Lan và Hoa đang mải mê chơi chuyền thẻ ngay giữa hai thanh ray, không hề hay biết đoàn tàu hỏa đang lao vun vút tới sát nút.",
        "Không một giây ngần ngại, Út Vịnh lao vụt ra như tên bắn, dùng hết sức bình sinh xô văng hai em nhỏ ngã lăn xuống vệ cỏ an toàn, còn mình thì bị mép gạt gió của đầu tàu húc trúng vai ngã nhào. Nhờ hành động dũng cảm phi thường ấy, hai em nhỏ đã được cứu sống trong gang tấc. Tấm gương hy sinh quên mình của Út Vịnh được thiếu nhi cả nước khâm phục và noi theo."
      ],
      "audioNarration": "Bài 24: Út Vịnh. Nhà Út Vịnh ở ngay sát bên đường sắt Bắc - Nam. Vịnh luôn gương mẫu tham gia phong trào \"Em yêu đường sắt quê em\", thường xuyên nhắc nhở các bạn không ném đá lên tàu và không chơi đùa gần đường ray nguy hiểm. Một buổi chiều, Vịnh nghe tiếng còi tàu hỏa rú lên từng hồi khẩn thiết. Nhìn ra đường ray, Vịnh bàng hoàng thấy hai em nhỏ Lan và Hoa đang mải mê chơi chuyền thẻ ngay giữa hai thanh ray, không hề hay biết đoàn tàu hỏa đang lao vun vút tới sát nút. Không một giây ngần ngại, Út Vịnh lao vụt ra như tên bắn, dùng hết sức bình sinh xô văng hai em nhỏ ngã lăn xuống vệ cỏ an toàn, còn mình thì bị mép gạt gió của đầu tàu húc trúng vai ngã nhào. Nhờ hành động dũng cảm phi thường ấy, hai em nhỏ đã được cứu sống trong gang tấc. Tấm gương hy sinh quên mình của Út Vịnh được thiếu nhi cả nước khâm phục và noi theo.",
      "vocabularyNotes": [
        {
          "word": "thanh ray",
          "meaning": "Thanh thép song song tạo thành đường cho bánh tàu hỏa chạy."
        },
        {
          "word": "trong gang tấc",
          "meaning": "Khoảng cách rất gần, thời gian cực kỳ khẩn cấp, cận kề nguy hiểm."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập hai — Trang 52, 53 (Chủ điểm 8: Những chủ nhân tương lai)",
    "pedagogicalObjective": "Ca ngợi hành động dũng cảm quên mình cứu người và ý thức bảo vệ an toàn giao thông đường sắt của bạn Út Vịnh.",
    "questions": [
      {
        "id": "tv-g5-b24-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Hành động nào của bạn Út Vịnh thể hiện lòng dũng cảm quên mình cứu người?",
        "audioText": "Hành động nào của bạn Út Vịnh thể hiện lòng dũng cảm quên mình cứu người?",
        "options": [
          {
            "id": "a",
            "label": "Lao mình vào đường ray xô hai em nhỏ thoát khỏi đầu tàu hỏa đang lao tới 🚂🏃‍♂️",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đứng nhìn và la hét"
          },
          {
            "id": "c",
            "label": "Bỏ chạy trốn vào nhà"
          }
        ]
      }
    ]
  },
  "tv-g5-b25": {
    "passage": {
      "title": "Bài 25: Đại hội Trạng Nguyên Tiếng Việt 5 Toàn Quốc",
      "author": "SGK Tiếng Việt 5 — NXB Giáo Dục Việt Nam",
      "genre": "prose",
      "content": [
        "Đại hội Trạng Nguyên Tiếng Việt 5 Toàn Quốc là đỉnh cao hội tụ tinh hoa tri thức và năng lực ngôn ngữ của học sinh Tiểu học.",
        "Các sĩ tử nhí cùng tranh tài qua các chuyên đề nâng cao: Phân tích cấu trúc ngữ pháp câu ghép, các cặp từ hô ứng và quan hệ từ phức hợp; cảm thụ cái hay cái đẹp của các biện pháp nghệ thuật so sánh, nhân hóa, ẩn dụ, hoán dụ; và rèn luyện kỹ năng viết văn miêu tả người, tả cảnh, viết đơn từ và bài cảm nghĩ sâu sắc.",
        "Chúc các Trạng Nguyên nhí luôn tự tin, giữ vững tình yêu tiếng mẹ đẻ và sẵn sàng bước vào bậc Trung học Cơ sở với hành trang ngôn ngữ vững vàng!"
      ],
      "audioNarration": "Bài 25: Đại hội Trạng Nguyên Tiếng Việt 5 Toàn Quốc. Đại hội Trạng Nguyên Tiếng Việt 5 Toàn Quốc là đỉnh cao hội tụ tinh hoa tri thức và năng lực ngôn ngữ của học sinh Tiểu học. Các sĩ tử nhí cùng tranh tài qua các chuyên đề nâng cao: Phân tích cấu trúc ngữ pháp câu ghép, các cặp từ hô ứng và quan hệ từ phức hợp; cảm thụ cái hay cái đẹp của các biện pháp nghệ thuật so sánh, nhân hóa, ẩn dụ, hoán dụ; và rèn luyện kỹ năng viết văn miêu tả người, tả cảnh, viết đơn từ và bài cảm nghĩ sâu sắc. Chúc các Trạng Nguyên nhí luôn tự tin, giữ vững tình yêu tiếng mẹ đẻ và sẵn sàng bước vào bậc Trung học Cơ sở với hành trang ngôn ngữ vững vàng!",
      "vocabularyNotes": [
        {
          "word": "câu ghép",
          "meaning": "Câu do nhiều vế câu ghép lại, mỗi vế có cấu tạo như một câu đơn đầy đủ chủ ngữ - vị ngữ."
        },
        {
          "word": "quan hệ từ",
          "meaning": "Từ dùng để nối các từ ngữ hoặc các câu nhằm thể hiện mối quan hệ ngữ nghĩa."
        }
      ]
    },
    "sourceType": "sgk_official",
    "sourceBook": "SGK Tiếng Việt 5 Tập hai — Bộ Kết nối tri thức với cuộc sống, NXB Giáo Dục Việt Nam",
    "sourceDetail": "SGK Tiếng Việt 5 Tập hai — Trang 60, 61 (Chủ điểm 8: Những chủ nhân tương lai)",
    "pedagogicalObjective": "Tổng kết toàn diện kiến thức Ngữ pháp - Văn học cấp Tiểu học, sẵn sàng chuyển cấp vào Lớp 6 với nền tảng Tiếng Việt vững chắc.",
    "questions": [
      {
        "id": "tv-g5-b25-q1",
        "type": "bubble_choice",
        "points": 15,
        "questionText": "Đại hội Trạng Nguyên Tiếng Việt 5 Toàn Quốc giúp học sinh tổng kết những kiến thức nào?",
        "audioText": "Đại hội Trạng Nguyên Tiếng Việt 5 Toàn Quốc giúp học sinh tổng kết những kiến thức nào?",
        "options": [
          {
            "id": "a",
            "label": "Ngữ pháp câu ghép, quan hệ từ, biện pháp nghệ thuật và kỹ năng làm văn toàn diện 🏆🎓",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Học tin học cơ bản"
          },
          {
            "id": "c",
            "label": "Học vẽ hình học"
          }
        ]
      }
    ]
  }
};
