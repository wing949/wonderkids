import { ReadingPassage, Question } from '../../../types';

export interface ReadingLessonBundle {
  passage: ReadingPassage;
  questions: Question[];
}

export const VIETNAMESE_READING_PASSAGES: Record<string, ReadingLessonBundle> = {
  "tv-g1-b1": {
    "passage": {
      "title": "Bé Na Đi Học",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Hôm nay là ngày đầu tiên bé Na đi học lớp Một.",
        "Mẹ mua cho Na cặp sách mới, vở mới và bút chì xinh.",
        "Na ríu rít chào ba mẹ rồi tự tin bước vào lớp cùng cô giáo và các bạn."
      ],
      "audioNarration": "Bé Na Đi Học. Hôm nay là ngày đầu tiên bé Na đi học lớp Một. Mẹ mua cho Na cặp sách mới, vở mới và bút chì xinh. Na ríu rít chào ba mẹ rồi tự tin bước vào lớp cùng cô giáo và các bạn.",
      "vocabularyNotes": [
        {
          "word": "Ríu rít",
          "meaning": "Nói cười tíu tít, vui vẻ liên hồi."
        },
        {
          "word": "Tự tin",
          "meaning": "Mạnh dạn, không rụt rè lo lắng."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b1-q1",
        "type": "bubble_choice",
        "questionText": "Hôm nay là ngày đầu tiên bé Na bước vào lớp mấy?",
        "audioText": "Hôm nay là ngày đầu tiên bé Na bước vào lớp mấy?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Lớp Một ⭐",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Lớp Hai",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Lớp Ba",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "tv-g1-b1-q2",
        "type": "bubble_choice",
        "questionText": "Mẹ đã chuẩn bị cho bé Na những đồ dùng gì?",
        "audioText": "Mẹ đã chuẩn bị cho bé Na những đồ dùng gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Cặp sách mới, vở mới và bút chì xinh 🎒",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đồ chơi điện tử",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Bánh kẹo",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b2": {
    "passage": {
      "title": "Con Cò và Chú Cá Nhỏ",
      "author": "Đồng dao thiếu nhi",
      "genre": "prose",
      "content": [
        "Con cò lặn lội bờ ao, chăm chỉ bắt tép nuôi con.",
        "Cá nhỏ bơi lượn tung tăng dưới làn nước trong vắt.",
        "Cò đậu trên cành tre nghiêng bóng, khẽ nghiêng đầu ngắm cảnh quê yên bình."
      ],
      "audioNarration": "Con Cò và Chú Cá Nhỏ. Con cò lặn lội bờ ao, chăm chỉ bắt tép nuôi con. Cá nhỏ bơi lượn tung tăng dưới làn nước trong vắt. Cò đậu trên cành tre nghiêng bóng, khẽ nghiêng đầu ngắm cảnh quê yên bình.",
      "vocabularyNotes": [
        {
          "word": "Lặn lội",
          "meaning": "Chăm chỉ vượt qua khó khăn để kiếm ăn."
        },
        {
          "word": "Trong vắt",
          "meaning": "Rất trong, có thể nhìn thấu tận đáy."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b2-q1",
        "type": "bubble_choice",
        "questionText": "Con cò lặn lội bờ ao để làm công việc gì?",
        "audioText": "Con cò lặn lội bờ ao để làm công việc gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bắt tép nuôi con 🐟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi dạo chơi",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Tập bơi lội",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b3": {
    "passage": {
      "title": "Bà Bế Bé",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Chiều mát, bà bế bé ra hiên ngắm hoa.",
        "Bé cười toe toét chỉ vào chú bướm vàng đang bay.",
        "Bà hát ru êm dịu, gió thoảng đưa hương nhài ngào ngạt khắp sân."
      ],
      "audioNarration": "Bà Bế Bé. Chiều mát, bà bế bé ra hiên ngắm hoa. Bé cười toe toét chỉ vào chú bướm vàng đang bay. Bà hát ru êm dịu, gió thoảng đưa hương nhài ngào ngạt khắp sân.",
      "vocabularyNotes": [
        {
          "word": "Toe toét",
          "meaning": "Cười mở rộng miệng, vô cùng vui sướng."
        },
        {
          "word": "Ngào ngạt",
          "meaning": "Mùi hương thơm đậm đà, lan tỏa xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b3-q1",
        "type": "bubble_choice",
        "questionText": "Bà bế bé ra hiên để làm gì?",
        "audioText": "Bà bế bé ra hiên để làm gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Ngắm hoa và hóng mát 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi ngủ",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Ăn cơm",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b4": {
    "passage": {
      "title": "Gà Gáy Sáng",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Sáng sớm tinh mơ, chú gà trống cất tiếng gáy vang: \"Ò... ó... o...\".",
        "Ông mặt trời từ từ nhô lên sau rặng tre làng, tỏa ánh nắng vàng rực rỡ.",
        "Bé Hà thức dậy, rửa mặt sạch sẽ rồi vui vẻ cùng mẹ chuẩn bị tới trường."
      ],
      "audioNarration": "Gà Gáy Sáng. Sáng sớm tinh mơ, chú gà trống cất tiếng gáy vang: \"Ò... ó... o...\". Ông mặt trời từ từ nhô lên sau rặng tre làng, tỏa ánh nắng vàng rực rỡ. Bé Hà thức dậy, rửa mặt sạch sẽ rồi vui vẻ cùng mẹ chuẩn bị tới trường.",
      "vocabularyNotes": [
        {
          "word": "Tinh mơ",
          "meaning": "Trời mới bắt đầu sáng sớm."
        },
        {
          "word": "Rực rỡ",
          "meaning": "Ánh sáng chói lọi, tươi đẹp nổi bật."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b4-q1",
        "type": "bubble_choice",
        "questionText": "Chú gà trống gáy vang vào thời điểm nào?",
        "audioText": "Chú gà trống gáy vang vào thời điểm nào?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Sáng sớm tinh mơ 🌅",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Buổi trưa",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Buổi tối",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b5": {
    "passage": {
      "title": "Búp Bê Của Bé",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Bé có một cô búp bê nhỏ rất xinh xắn.",
        "Búp bê có đôi mắt đen lay láy và mái tóc vàng bồng bềnh.",
        "Mỗi tối học bài xong, bé lại âu yếm chải tóc và ru búp bê ngủ."
      ],
      "audioNarration": "Búp Bê Của Bé. Bé có một cô búp bê nhỏ rất xinh xắn. Búp bê có đôi mắt đen lay láy và mái tóc vàng bồng bềnh. Mỗi tối học bài xong, bé lại âu yếm chải tóc và ru búp bê ngủ.",
      "vocabularyNotes": [
        {
          "word": "Đen lay láy",
          "meaning": "Màu đen bóng, sáng ngời tinh anh."
        },
        {
          "word": "Bồng bềnh",
          "meaning": "Mềm mại uốn lượn nhẹ nhàng."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b5-q1",
        "type": "bubble_choice",
        "questionText": "Mỗi tối sau khi học bài xong, bé thường làm gì?",
        "audioText": "Mỗi tối sau khi học bài xong, bé thường làm gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Âu yếm chải tóc và ru búp bê ngủ 🧸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Xem tivi khuya",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Chạy ra ngoài chơi",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b6": {
    "passage": {
      "title": "Lớp Học Vui Nhộn",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Lớp học của bé rộn rã tiếng đọc bài. Cô giáo dịu dàng hướng dẫn từng bạn nắn nót viết từng nét chữ tròn trịa.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Lớp Học Vui Nhộn. Lớp học của bé rộn rã tiếng đọc bài. Cô giáo dịu dàng hướng dẫn từng bạn nắn nót viết từng nét chữ tròn trịa. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b6-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Lớp Học Vui Nhộn\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Lớp Học Vui Nhộn\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b7": {
    "passage": {
      "title": "Nắng Ấm Đầu Mùa",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Ánh nắng ban mai rọi xuống khu vườn xanh tươi. Cây bưởi, cây cam đua nhau đâm chồi biếc, tỏa hương thơm ngát.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Nắng Ấm Đầu Mùa. Ánh nắng ban mai rọi xuống khu vườn xanh tươi. Cây bưởi, cây cam đua nhau đâm chồi biếc, tỏa hương thơm ngát. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b7-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Nắng Ấm Đầu Mùa\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Nắng Ấm Đầu Mùa\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b8": {
    "passage": {
      "title": "Ô Cửa Sổ Nhỏ",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Bên ô cửa sổ nhỏ, gió nhẹ khẽ lay rèm hoa. Bé ngồi chăm chú đọc sách, lắng nghe tiếng chim ríu rít ngoài vườn.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Ô Cửa Sổ Nhỏ. Bên ô cửa sổ nhỏ, gió nhẹ khẽ lay rèm hoa. Bé ngồi chăm chú đọc sách, lắng nghe tiếng chim ríu rít ngoài vườn. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b8-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Ô Cửa Sổ Nhỏ\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Ô Cửa Sổ Nhỏ\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b9": {
    "passage": {
      "title": "Quà Của Bố",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Bố đi công tác xa về mang cho bé một hộp bút chì màu rực rỡ. Bé ôm chầm lấy bố và nói lời cảm ơn ngọt ngào.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Quà Của Bố. Bố đi công tác xa về mang cho bé một hộp bút chì màu rực rỡ. Bé ôm chầm lấy bố và nói lời cảm ơn ngọt ngào. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b9-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Quà Của Bố\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Quà Của Bố\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b10": {
    "passage": {
      "title": "Rừng Xanh Vẫy Gọi",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Rừng cây bạt ngàn với bao loài chim quý. Suối chảy róc rách đêm ngày, mang lại nguồn nước trong lành cho muông thú.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Rừng Xanh Vẫy Gọi. Rừng cây bạt ngàn với bao loài chim quý. Suối chảy róc rách đêm ngày, mang lại nguồn nước trong lành cho muông thú. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b10-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Rừng Xanh Vẫy Gọi\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Rừng Xanh Vẫy Gọi\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b11": {
    "passage": {
      "title": "Tổ Chim Xinh",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Trên cành cây cao có một tổ chim non xinh xắn. Chim mẹ sớm hôm cần mẫn tha mồi về mớm cho bầy con thơ.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Tổ Chim Xinh. Trên cành cây cao có một tổ chim non xinh xắn. Chim mẹ sớm hôm cần mẫn tha mồi về mớm cho bầy con thơ. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b11-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Tổ Chim Xinh\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Tổ Chim Xinh\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b12": {
    "passage": {
      "title": "Vườn Cây Của Bé",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Mỗi buổi chiều, bé cùng ông ra vườn tưới nước cho cây. Những luống rau xanh non mơn mởn lớn lên từng ngày.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Vườn Cây Của Bé. Mỗi buổi chiều, bé cùng ông ra vườn tưới nước cho cây. Những luống rau xanh non mơn mởn lớn lên từng ngày. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b12-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Vườn Cây Của Bé\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Vườn Cây Của Bé\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b13": {
    "passage": {
      "title": "Xe Buýt Tới Trường",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Bác tài xế lái xe buýt đón chúng em đúng giờ. Các bạn học sinh trật tự ngồi vào chỗ, vui vẻ vẫy tay chào mọi người.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Xe Buýt Tới Trường. Bác tài xế lái xe buýt đón chúng em đúng giờ. Các bạn học sinh trật tự ngồi vào chỗ, vui vẻ vẫy tay chào mọi người. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b13-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Xe Buýt Tới Trường\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Xe Buýt Tới Trường\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b14": {
    "passage": {
      "title": "Chú Gà Trống Nhỏ",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Gà trống có bộ lông sặc sỡ và chiếc mào đỏ tươi. Chú cất tiếng gáy vang báo hiệu một ngày mới tươi sáng bắt đầu.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Chú Gà Trống Nhỏ. Gà trống có bộ lông sặc sỡ và chiếc mào đỏ tươi. Chú cất tiếng gáy vang báo hiệu một ngày mới tươi sáng bắt đầu. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b14-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Chú Gà Trống Nhỏ\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Chú Gà Trống Nhỏ\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b15": {
    "passage": {
      "title": "Gió Mát Mùa Hè",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Cơn gió mùa hè mang theo hơi nước mát lạnh từ mặt hồ. Những cánh diều no gió bay lượn trên bầu trời xanh thẳm.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Gió Mát Mùa Hè. Cơn gió mùa hè mang theo hơi nước mát lạnh từ mặt hồ. Những cánh diều no gió bay lượn trên bầu trời xanh thẳm. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b15-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Gió Mát Mùa Hè\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Gió Mát Mùa Hè\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b16": {
    "passage": {
      "title": "Ngôi Nhà Thân Thương",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Ngôi nhà nhỏ có giàn hoa giấy nở rộ trước sân. Nơi đây luôn tràn ngập tiếng cười ấm áp và tình yêu thương của gia đình.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Ngôi Nhà Thân Thương. Ngôi nhà nhỏ có giàn hoa giấy nở rộ trước sân. Nơi đây luôn tràn ngập tiếng cười ấm áp và tình yêu thương của gia đình. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b16-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Ngôi Nhà Thân Thương\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Ngôi Nhà Thân Thương\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b17": {
    "passage": {
      "title": "Phố Phường Nhộn Nhịp",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Đường phố rực rỡ cờ hoa và đèn lồng lấp lánh. Dòng người qua lại tấp nập, ai nấy đều nở nụ cười rạng rỡ đón xuân.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Phố Phường Nhộn Nhịp. Đường phố rực rỡ cờ hoa và đèn lồng lấp lánh. Dòng người qua lại tấp nập, ai nấy đều nở nụ cười rạng rỡ đón xuân. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b17-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Phố Phường Nhộn Nhịp\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Phố Phường Nhộn Nhịp\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b18": {
    "passage": {
      "title": "Trăng Sáng Sân Nhà",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Đêm rằm trăng tròn vành vạnh như chiếc đĩa bạc. Cả nhà quây quần bên hiên thưởng thức trà thơm và ngắm trăng thanh.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Trăng Sáng Sân Nhà. Đêm rằm trăng tròn vành vạnh như chiếc đĩa bạc. Cả nhà quây quần bên hiên thưởng thức trà thơm và ngắm trăng thanh. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b18-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Trăng Sáng Sân Nhà\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Trăng Sáng Sân Nhà\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b19": {
    "passage": {
      "title": "Bạn Bè Thân Thiết",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Bé và các bạn cùng nhau học tập và chia sẻ đồ chơi. Tình bạn tuổi thơ trong sáng và ngọt ngào biết bao.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Bạn Bè Thân Thiết. Bé và các bạn cùng nhau học tập và chia sẻ đồ chơi. Tình bạn tuổi thơ trong sáng và ngọt ngào biết bao. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b19-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Bạn Bè Thân Thiết\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Bạn Bè Thân Thiết\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b20": {
    "passage": {
      "title": "Bữa Cơm Gia Đình",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Mẹ nấu những món ăn thơm ngon, nóng hổi. Cả nhà quây quần bên mâm cơm ấm áp, rộn rã tiếng nói cười sum vầy.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Bữa Cơm Gia Đình. Mẹ nấu những món ăn thơm ngon, nóng hổi. Cả nhà quây quần bên mâm cơm ấm áp, rộn rã tiếng nói cười sum vầy. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b20-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Bữa Cơm Gia Đình\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Bữa Cơm Gia Đình\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b21": {
    "passage": {
      "title": "Sân Trường Rộn Rã",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Giờ ra chơi, sân trường rộn ràng bao trò chơi dân gian. Tiếng reo hò cổ vũ vang lên rộn rã dưới bóng cây bàng xanh mát.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Sân Trường Rộn Rã. Giờ ra chơi, sân trường rộn ràng bao trò chơi dân gian. Tiếng reo hò cổ vũ vang lên rộn rã dưới bóng cây bàng xanh mát. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b21-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Sân Trường Rộn Rã\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Sân Trường Rộn Rã\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b22": {
    "passage": {
      "title": "Chú Dế Mèn Nhỏ",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Chú dế mèn có đôi râu dài và đôi cánh óng ánh. Đêm đêm chú cất tiếng gáy véo von như khúc nhạc ru dịu dàng.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Chú Dế Mèn Nhỏ. Chú dế mèn có đôi râu dài và đôi cánh óng ánh. Đêm đêm chú cất tiếng gáy véo von như khúc nhạc ru dịu dàng. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b22-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Chú Dế Mèn Nhỏ\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Chú Dế Mèn Nhỏ\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b23": {
    "passage": {
      "title": "Bức Tranh Mùa Xuân",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Bé vẽ bức tranh mùa xuân với hoa mai vàng rực rỡ và những chú chim én chao liệng giữa bầu trời bao la.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Bức Tranh Mùa Xuân. Bé vẽ bức tranh mùa xuân với hoa mai vàng rực rỡ và những chú chim én chao liệng giữa bầu trời bao la. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b23-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Bức Tranh Mùa Xuân\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Bức Tranh Mùa Xuân\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b24": {
    "passage": {
      "title": "Tiếng Hát Con Chim",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Chim sơn ca cất tiếng hót véo von đón ánh bình minh. Tiếng hót trong trẻo làm bừng sáng cả không gian đất trời.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Tiếng Hát Con Chim. Chim sơn ca cất tiếng hót véo von đón ánh bình minh. Tiếng hót trong trẻo làm bừng sáng cả không gian đất trời. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b24-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Tiếng Hát Con Chim\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Tiếng Hát Con Chim\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b25": {
    "passage": {
      "title": "Cơn Mưa Mùa Hạ",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Cơn mưa rào bất chợt làm dịu mát cái nóng oi ả. Cây cối trong vườn reo vui, tắm mình dưới làn nước mát lành.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Cơn Mưa Mùa Hạ. Cơn mưa rào bất chợt làm dịu mát cái nóng oi ả. Cây cối trong vườn reo vui, tắm mình dưới làn nước mát lành. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b25-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Cơn Mưa Mùa Hạ\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Cơn Mưa Mùa Hạ\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b26": {
    "passage": {
      "title": "Bé Đi Học Vui",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Mỗi ngày đến trường là một ngày vui. Bé được học bao điều mới lạ và cùng bạn bè vui chơi dưới mái trường mến yêu.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Bé Đi Học Vui. Mỗi ngày đến trường là một ngày vui. Bé được học bao điều mới lạ và cùng bạn bè vui chơi dưới mái trường mến yêu. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b26-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Bé Đi Học Vui\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Bé Đi Học Vui\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b27": {
    "passage": {
      "title": "Gia Đình Yêu Thương",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Ba mẹ luôn chăm sóc và yêu thương bé hết lòng. Bé luôn ngoan ngoãn, vâng lời để ba mẹ luôn vui lòng.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Gia Đình Yêu Thương. Ba mẹ luôn chăm sóc và yêu thương bé hết lòng. Bé luôn ngoan ngoãn, vâng lời để ba mẹ luôn vui lòng. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b27-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Gia Đình Yêu Thương\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Gia Đình Yêu Thương\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b28": {
    "passage": {
      "title": "Thiên Nhiên Quanh Em",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Đồng lúa chín vàng trải dài tít tắp đến chân trời. Dòng sông quê êm đềm bồi đắp phù sa cho những mùa màng bội thu.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Thiên Nhiên Quanh Em. Đồng lúa chín vàng trải dài tít tắp đến chân trời. Dòng sông quê êm đềm bồi đắp phù sa cho những mùa màng bội thu. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b28-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Thiên Nhiên Quanh Em\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Thiên Nhiên Quanh Em\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b29": {
    "passage": {
      "title": "Quê Hương Em Đẹp Lắm",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Việt Nam non nước hữu tình với rừng vàng biển bạc. Em tự hào là người con của đất nước Việt Nam tươi đẹp.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Quê Hương Em Đẹp Lắm. Việt Nam non nước hữu tình với rừng vàng biển bạc. Em tự hào là người con của đất nước Việt Nam tươi đẹp. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b29-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Quê Hương Em Đẹp Lắm\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Quê Hương Em Đẹp Lắm\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g1-b30": {
    "passage": {
      "title": "Bác Hồ Kính Yêu Của Thiếu Nhi",
      "author": "SGK Tiếng Việt 1",
      "genre": "prose",
      "content": [
        "Bác Hồ luôn dành tình yêu thương bao la cho các cháu thiếu nhi. Thiếu nhi Việt Nam luôn ghi nhớ năm điều Bác Hồ dạy.",
        "Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng."
      ],
      "audioNarration": "Bác Hồ Kính Yêu Của Thiếu Nhi. Bác Hồ luôn dành tình yêu thương bao la cho các cháu thiếu nhi. Thiếu nhi Việt Nam luôn ghi nhớ năm điều Bác Hồ dạy. Mỗi bài học mở ra một chân trời tri thức mới, giúp bé phát triển tình yêu thương và kỹ năng ngôn ngữ vững vàng.",
      "vocabularyNotes": [
        {
          "word": "Chăm chỉ",
          "meaning": "Luôn cố gắng làm việc và học tập đều đặn."
        },
        {
          "word": "Tươi đẹp",
          "meaning": "Có vẻ đẹp rạng rỡ và tràn đầy sức sống."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g1-b30-q1",
        "type": "bubble_choice",
        "questionText": "Bài đọc \"Bác Hồ Kính Yêu Của Thiếu Nhi\" mang đến thông điệp gì cho bé?",
        "audioText": "Bài đọc \"Bác Hồ Kính Yêu Của Thiếu Nhi\" mang đến thông điệp gì cho bé?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Yêu thương gia đình, trường lớp và chăm ngoan học tập 🌟",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Đi chơi cả ngày",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không học bài",
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
          "meaning": "Cử chỉ dịu dàng, thể hiện tình yêu thương trìu mến."
        },
        {
          "word": "Tíu tít",
          "meaning": "Nhiều người cùng nói cười vui vẻ, tíu tít không ngừng."
        },
        {
          "word": "Trang nghiêm",
          "meaning": "Nghiêm trang, kính cẩn và có trật tự cao."
        }
      ]
    },
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
            "label": "Vẫn còn sợ hãi khóc nhè",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không muốn đến trường",
            "isCorrect": false
          }
        ]
      },
      {
        "id": "tv-g2-b1-q2",
        "type": "bubble_choice",
        "questionText": "Âm thanh nào báo hiệu giờ vào lớp học mới bắt đầu?",
        "audioText": "Âm thanh nào báo hiệu giờ vào lớp học mới bắt đầu?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tiếng trống trường giòn giã: Tùng! Tùng! Tùng! 🥁",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Tiếng chuông điện thoại",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Tiếng còi xe buýt",
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
          "meaning": "Mong muốn tha thiết đạt được điều tốt đẹp trong tương lai."
        },
        {
          "word": "Chăm chỉ",
          "meaning": "Siêng năng, chịu khó học tập và làm việc đều đặn."
        }
      ]
    },
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
            "label": "Trong chiếc cặp sách",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Trong tivi và máy tính",
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
          "meaning": "Hiện tượng quang học tạo ra vòng cung 7 màu rực rỡ sau cơn mưa."
        },
        {
          "word": "Ngập tràn",
          "meaning": "Tràn đầy, nhiều đến mức bao phủ khắp không gian."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g2-b3-q1",
        "type": "bubble_choice",
        "questionText": "Nếu tìm được hũ vàng, hai anh em Bi và Bống ước mơ làm gì cho nhau?",
        "audioText": "Nếu tìm được hũ vàng, hai anh em Bi và Bống ước mơ làm gì cho nhau?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Mua ô tô đồ chơi cho Bi và mua búp bê biết hát cho Bống 🎁",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Mua thật nhiều bánh kẹo ăn một mình",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Cất hũ vàng đi không dùng",
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
          "meaning": "Từ mô phỏng âm thanh đều đặn của chiếc kim đồng hồ."
        },
        {
          "word": "Cặm cụi",
          "meaning": "Chăm chú, miệt mài làm một công việc gì đó không nghỉ."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g2-b4-q1",
        "type": "bubble_choice",
        "questionText": "Bài văn \"Làm việc thật là vui\" muốn nhắn nhủ chúng ta điều gì?",
        "audioText": "Bài văn \"Làm việc thật là vui\" muốn nhắn nhủ chúng ta điều gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Lao động và học tập chăm chỉ luôn mang lại niềm vui rạng rỡ 🐝",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Làm việc làm cho người ta mệt mỏi",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Chỉ nên chơi đùa không làm việc",
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
          "meaning": "Uốn cong mềm mại và vươn dài về phía trên."
        },
        {
          "word": "Oai phong",
          "meaning": "Có dáng vẻ uy nghiêm, mạnh mẽ và đường bệ."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g2-b5-q1",
        "type": "bubble_choice",
        "questionText": "Voi bố mẹ đã khuyên Voi con điều gì?",
        "audioText": "Voi bố mẹ đã khuyên Voi con điều gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Con đẹp nhất khi con là chính mình, tự tin vào bản thân 🐘",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nên gắn thêm sừng và râu giả",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không nên nói chuyện với ai",
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
          "meaning": "Nhút nhát, e sợ, không dám mạnh dạn thể hiện mình."
        },
        {
          "word": "Khích lệ",
          "meaning": "Động viên, cổ vũ tinh thần cho người khác vươn lên."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g2-b6-q1",
        "type": "bubble_choice",
        "questionText": "Nhờ điều gì mà bạn Quang đã dũng cảm vượt qua sự rụt rè?",
        "audioText": "Nhờ điều gì mà bạn Quang đã dũng cảm vượt qua sự rụt rè?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Nhờ nụ cười khích lệ của thầy giáo và tiếng vỗ tay cổ vũ của các bạn 👏",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nhờ thầy giáo phạt",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Nhờ chạy trốn khỏi lớp",
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
          "meaning": "Dáng vẻ khép nép, thẹn thùng một cách kín đáo và duyên dáng."
        },
        {
          "word": "Mỏng manh",
          "meaning": "Rất mỏng và nhẹ nhàng, dễ bị rung rinh trước gió."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g2-b7-q1",
        "type": "bubble_choice",
        "questionText": "Đặc điểm đặc biệt nhất của cây xấu hổ là gì?",
        "audioText": "Đặc điểm đặc biệt nhất của cây xấu hổ là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Khép lá lại e ấp khi có vật thể chạm vào 🌿",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nở hoa to như chiếc ô",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Biết bơi dưới nước",
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
          "meaning": "Thao tác nhanh, linh hoạt và chuẩn xác trong từng chuyển động."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g2-b8-q1",
        "type": "bubble_choice",
        "questionText": "Dũng đã thể hiện tinh thần thể thao tuyệt vời như thế nào?",
        "audioText": "Dũng đã thể hiện tinh thần thể thao tuyệt vời như thế nào?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Không nản lòng khi làm dự bị, kiên trì và chớp thời cơ ghi bàn thắng ⚽",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Hờn dỗi bỏ về nhà",
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
          "meaning": "Mùi hương nhẹ nhàng lướt qua trong không khí."
        },
        {
          "word": "Ấm áp",
          "meaning": "Tạo cảm giác bình yên, thân thương và tràn đầy tình cảm."
        }
      ]
    },
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
            "label": "Hiền từ, ân cần dạy dỗ học trò với nụ cười rạng rỡ và lời giảng ấm áp 👩‍🏫",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nghiêm khắc không bao giờ cười",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Vắng mặt trong lớp",
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
          "word": "Đồng hành",
          "meaning": "Cùng đi bên cạnh và hỗ trợ nhau trên một hành trình."
        },
        {
          "word": "Ngăn nắp",
          "meaning": "Gọn gàng, đâu ra đấy, sắp xếp có trật tự rõ ràng."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g2-b10-q1",
        "type": "bubble_choice",
        "questionText": "Thời khóa biểu giúp ích gì cho các bạn học sinh?",
        "audioText": "Thời khóa biểu giúp ích gì cho các bạn học sinh?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Giúp sắp xếp sách vở đúng môn và rèn luyện thói quen ngăn nắp, tự lập 📅",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Dùng để trang trí phòng ngủ",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Để vẽ tranh lên",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b18": {
    "passage": {
      "title": "Nhím nâu kết bạn",
      "author": "Theo SGK Tiếng Việt 2",
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
          "meaning": "Thiếu tự tin, rụt rè và hay e sợ khi tiếp xúc với người lạ."
        },
        {
          "word": "Ấm áp",
          "meaning": "Mang lại cảm giác dễ chịu, yêu thương và chở che."
        },
        {
          "word": "Lủi thủi",
          "meaning": "Cô đơn một mình, lặng lẽ không có ai bầu bạn."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g2-b18-q1",
        "type": "bubble_choice",
        "questionText": "Nhờ điều gì mà Nhím nâu đã thoát khỏi sự cô đơn để có bạn thân?",
        "audioText": "Nhờ điều gì mà Nhím nâu đã thoát khỏi sự cô đơn để có bạn thân?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Nhờ sự thân thiện của Nhím trắng và sự dũng cảm mở lòng của Nhím nâu 🦔",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Nhờ chuyển sang khu rừng khác",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Nhờ ngủ suốt mùa đông",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b11": {
    "passage": {
      "title": "Cái bàn học của em",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Chiếc bàn học bằng gỗ xoan đào được bố đóng cho em nhân ngày tựu trường. Mặt bàn phẳng phiu, xếp ngay ngắn góc để sách vở và chiếc đèn bàn màu xanh ngọc bích.",
        "Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước."
      ],
      "audioNarration": "Cái bàn học của em. Chiếc bàn học bằng gỗ xoan đào được bố đóng cho em nhân ngày tựu trường. Mặt bàn phẳng phiu, xếp ngay ngắn góc để sách vở và chiếc đèn bàn màu xanh ngọc bích. Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước.",
      "vocabularyNotes": [
        {
          "word": "Yêu thương",
          "meaning": "Tình cảm gắn bó, chia sẻ và luôn mong điều tốt đẹp cho người khác."
        },
        {
          "word": "Rực rỡ",
          "meaning": "Tươi sáng, nổi bật với vẻ đẹp lộng lẫy."
        }
      ]
    },
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
            "label": "Ca ngợi vẻ đẹp và bài học ý nghĩa trong bài Cái bàn học của em 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khuyên các bạn đi ngủ sớm",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b12": {
    "passage": {
      "title": "Danh sách học sinh tổ 1",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Bảng danh sách tổ 1 ghi đầy đủ họ tên, ngày sinh và sở thích của từng thành viên, giúp các bạn thấu hiểu và gắn bó đoàn kết bên nhau.",
        "Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước."
      ],
      "audioNarration": "Danh sách học sinh tổ 1. Bảng danh sách tổ 1 ghi đầy đủ họ tên, ngày sinh và sở thích của từng thành viên, giúp các bạn thấu hiểu và gắn bó đoàn kết bên nhau. Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước.",
      "vocabularyNotes": [
        {
          "word": "Yêu thương",
          "meaning": "Tình cảm gắn bó, chia sẻ và luôn mong điều tốt đẹp cho người khác."
        },
        {
          "word": "Rực rỡ",
          "meaning": "Tươi sáng, nổi bật với vẻ đẹp lộng lẫy."
        }
      ]
    },
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
            "label": "Ca ngợi vẻ đẹp và bài học ý nghĩa trong bài Danh sách học sinh tổ 1 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khuyên các bạn đi ngủ sớm",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b13": {
    "passage": {
      "title": "Yêu lắm trường ơi!",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Mái trường ngói đỏ tươi ẩn hiện dưới hàng phượng vĩ. Nơi đây em có thầy cô tận tụy và bao bạn bè thân thương cùng sẻ chia ước mơ tuổi thơ.",
        "Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước."
      ],
      "audioNarration": "Yêu lắm trường ơi!. Mái trường ngói đỏ tươi ẩn hiện dưới hàng phượng vĩ. Nơi đây em có thầy cô tận tụy và bao bạn bè thân thương cùng sẻ chia ước mơ tuổi thơ. Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước.",
      "vocabularyNotes": [
        {
          "word": "Yêu thương",
          "meaning": "Tình cảm gắn bó, chia sẻ và luôn mong điều tốt đẹp cho người khác."
        },
        {
          "word": "Rực rỡ",
          "meaning": "Tươi sáng, nổi bật với vẻ đẹp lộng lẫy."
        }
      ]
    },
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
            "label": "Ca ngợi vẻ đẹp và bài học ý nghĩa trong bài Yêu lắm trường ơi! 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khuyên các bạn đi ngủ sớm",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b14": {
    "passage": {
      "title": "Em học vẽ",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Với hộp bút màu sáp rực rỡ, em vẽ nên bức tranh làng quê thanh bình có dòng sông xanh uốn lượn, cánh đồng lúa chín và đàn cò bay lả bay la.",
        "Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước."
      ],
      "audioNarration": "Em học vẽ. Với hộp bút màu sáp rực rỡ, em vẽ nên bức tranh làng quê thanh bình có dòng sông xanh uốn lượn, cánh đồng lúa chín và đàn cò bay lả bay la. Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước.",
      "vocabularyNotes": [
        {
          "word": "Yêu thương",
          "meaning": "Tình cảm gắn bó, chia sẻ và luôn mong điều tốt đẹp cho người khác."
        },
        {
          "word": "Rực rỡ",
          "meaning": "Tươi sáng, nổi bật với vẻ đẹp lộng lẫy."
        }
      ]
    },
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
            "label": "Ca ngợi vẻ đẹp và bài học ý nghĩa trong bài Em học vẽ 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khuyên các bạn đi ngủ sớm",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b15": {
    "passage": {
      "title": "Cuốn sách của em",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Mỗi cuốn sách mở ra một kho tàng tri thức vô tận. Lật từng trang sách thơm mùi giấy mới, em như được chu du khắp thế giới kỳ thú.",
        "Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước."
      ],
      "audioNarration": "Cuốn sách của em. Mỗi cuốn sách mở ra một kho tàng tri thức vô tận. Lật từng trang sách thơm mùi giấy mới, em như được chu du khắp thế giới kỳ thú. Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước.",
      "vocabularyNotes": [
        {
          "word": "Yêu thương",
          "meaning": "Tình cảm gắn bó, chia sẻ và luôn mong điều tốt đẹp cho người khác."
        },
        {
          "word": "Rực rỡ",
          "meaning": "Tươi sáng, nổi bật với vẻ đẹp lộng lẫy."
        }
      ]
    },
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
            "label": "Ca ngợi vẻ đẹp và bài học ý nghĩa trong bài Cuốn sách của em 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khuyên các bạn đi ngủ sớm",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b16": {
    "passage": {
      "title": "Khi trang sách mở ra",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Khi trang sách mở ra, chân trời xa bỗng xích lại gần. Em được trò chuyện cùng muôn loài và thắp sáng những ước mơ bay cao.",
        "Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước."
      ],
      "audioNarration": "Khi trang sách mở ra. Khi trang sách mở ra, chân trời xa bỗng xích lại gần. Em được trò chuyện cùng muôn loài và thắp sáng những ước mơ bay cao. Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước.",
      "vocabularyNotes": [
        {
          "word": "Yêu thương",
          "meaning": "Tình cảm gắn bó, chia sẻ và luôn mong điều tốt đẹp cho người khác."
        },
        {
          "word": "Rực rỡ",
          "meaning": "Tươi sáng, nổi bật với vẻ đẹp lộng lẫy."
        }
      ]
    },
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
            "label": "Ca ngợi vẻ đẹp và bài học ý nghĩa trong bài Khi trang sách mở ra 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khuyên các bạn đi ngủ sớm",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b17": {
    "passage": {
      "title": "Gọi bạn",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Bê Vàng và Dê Trắng sống bên nhau trong rừng xanh thẳm. Khi hạn hán tràn về, Bê Vàng đi tìm cỏ rồi lạc lối, Dê Trắng thương bạn gọi mãi không thôi.",
        "Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước."
      ],
      "audioNarration": "Gọi bạn. Bê Vàng và Dê Trắng sống bên nhau trong rừng xanh thẳm. Khi hạn hán tràn về, Bê Vàng đi tìm cỏ rồi lạc lối, Dê Trắng thương bạn gọi mãi không thôi. Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước.",
      "vocabularyNotes": [
        {
          "word": "Yêu thương",
          "meaning": "Tình cảm gắn bó, chia sẻ và luôn mong điều tốt đẹp cho người khác."
        },
        {
          "word": "Rực rỡ",
          "meaning": "Tươi sáng, nổi bật với vẻ đẹp lộng lẫy."
        }
      ]
    },
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
            "label": "Ca ngợi vẻ đẹp và bài học ý nghĩa trong bài Gọi bạn 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khuyên các bạn đi ngủ sớm",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b19": {
    "passage": {
      "title": "Chuyện bốn mùa",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Bốn nàng tiên Xuân, Hạ, Thu, Đông hội ngộ đêm giao thừa, cùng nhau dệt nên bức tranh thiên nhiên rực rỡ sắc màu cho vạn vật tốt tươi.",
        "Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước."
      ],
      "audioNarration": "Chuyện bốn mùa. Bốn nàng tiên Xuân, Hạ, Thu, Đông hội ngộ đêm giao thừa, cùng nhau dệt nên bức tranh thiên nhiên rực rỡ sắc màu cho vạn vật tốt tươi. Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước.",
      "vocabularyNotes": [
        {
          "word": "Yêu thương",
          "meaning": "Tình cảm gắn bó, chia sẻ và luôn mong điều tốt đẹp cho người khác."
        },
        {
          "word": "Rực rỡ",
          "meaning": "Tươi sáng, nổi bật với vẻ đẹp lộng lẫy."
        }
      ]
    },
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
            "label": "Ca ngợi vẻ đẹp và bài học ý nghĩa trong bài Chuyện bốn mùa 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khuyên các bạn đi ngủ sớm",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b20": {
    "passage": {
      "title": "Mùa xuân đến rồi",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Hoa đào hoa mai nở rộ đón gió xuân ấm áp. Những chồi non mơn mởn thức giấc sau giấc ngủ đông dài, căng tràn nhựa sống.",
        "Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước."
      ],
      "audioNarration": "Mùa xuân đến rồi. Hoa đào hoa mai nở rộ đón gió xuân ấm áp. Những chồi non mơn mởn thức giấc sau giấc ngủ đông dài, căng tràn nhựa sống. Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước.",
      "vocabularyNotes": [
        {
          "word": "Yêu thương",
          "meaning": "Tình cảm gắn bó, chia sẻ và luôn mong điều tốt đẹp cho người khác."
        },
        {
          "word": "Rực rỡ",
          "meaning": "Tươi sáng, nổi bật với vẻ đẹp lộng lẫy."
        }
      ]
    },
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
            "label": "Ca ngợi vẻ đẹp và bài học ý nghĩa trong bài Mùa xuân đến rồi 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khuyên các bạn đi ngủ sớm",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b21": {
    "passage": {
      "title": "Mưa mùa hạ",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Cơn mưa rào mùa hạ xua tan cái nóng bức oi ả. Cây cối trong vườn reo vui, đường làng ngõ xóm sạch bóng như vừa được gột rửa.",
        "Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước."
      ],
      "audioNarration": "Mưa mùa hạ. Cơn mưa rào mùa hạ xua tan cái nóng bức oi ả. Cây cối trong vườn reo vui, đường làng ngõ xóm sạch bóng như vừa được gột rửa. Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước.",
      "vocabularyNotes": [
        {
          "word": "Yêu thương",
          "meaning": "Tình cảm gắn bó, chia sẻ và luôn mong điều tốt đẹp cho người khác."
        },
        {
          "word": "Rực rỡ",
          "meaning": "Tươi sáng, nổi bật với vẻ đẹp lộng lẫy."
        }
      ]
    },
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
            "label": "Ca ngợi vẻ đẹp và bài học ý nghĩa trong bài Mưa mùa hạ 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khuyên các bạn đi ngủ sớm",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b22": {
    "passage": {
      "title": "Chim rừng Tây Nguyên",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Đại ngàn Tây Nguyên rộn rã muôn khúc ca của loài chim. Tiếng hót véo von hòa cùng tiếng suối ngàn vang vọng muôn nơi.",
        "Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước."
      ],
      "audioNarration": "Chim rừng Tây Nguyên. Đại ngàn Tây Nguyên rộn rã muôn khúc ca của loài chim. Tiếng hót véo von hòa cùng tiếng suối ngàn vang vọng muôn nơi. Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước.",
      "vocabularyNotes": [
        {
          "word": "Yêu thương",
          "meaning": "Tình cảm gắn bó, chia sẻ và luôn mong điều tốt đẹp cho người khác."
        },
        {
          "word": "Rực rỡ",
          "meaning": "Tươi sáng, nổi bật với vẻ đẹp lộng lẫy."
        }
      ]
    },
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
            "label": "Ca ngợi vẻ đẹp và bài học ý nghĩa trong bài Chim rừng Tây Nguyên 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khuyên các bạn đi ngủ sớm",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b23": {
    "passage": {
      "title": "Bác sĩ Sói",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Sói xám gian manh đóng giả làm bác sĩ để hòng ăn thịt Ngựa non. Nhưng chú Ngựa thông minh đã tung cú đá trời giáng trừng phạt kẻ gian ác.",
        "Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước."
      ],
      "audioNarration": "Bác sĩ Sói. Sói xám gian manh đóng giả làm bác sĩ để hòng ăn thịt Ngựa non. Nhưng chú Ngựa thông minh đã tung cú đá trời giáng trừng phạt kẻ gian ác. Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước.",
      "vocabularyNotes": [
        {
          "word": "Yêu thương",
          "meaning": "Tình cảm gắn bó, chia sẻ và luôn mong điều tốt đẹp cho người khác."
        },
        {
          "word": "Rực rỡ",
          "meaning": "Tươi sáng, nổi bật với vẻ đẹp lộng lẫy."
        }
      ]
    },
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
            "label": "Ca ngợi vẻ đẹp và bài học ý nghĩa trong bài Bác sĩ Sói 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khuyên các bạn đi ngủ sớm",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b24": {
    "passage": {
      "title": "Tôm Càng và Cá Con",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Tôm Càng dũng cảm búng chiếc đuôi chắc khỏe, kịp thời đẩy bạn Cá Con tránh khỏi cú đớp của con cá dữ độc ác dưới đáy sông.",
        "Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước."
      ],
      "audioNarration": "Tôm Càng và Cá Con. Tôm Càng dũng cảm búng chiếc đuôi chắc khỏe, kịp thời đẩy bạn Cá Con tránh khỏi cú đớp của con cá dữ độc ác dưới đáy sông. Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước.",
      "vocabularyNotes": [
        {
          "word": "Yêu thương",
          "meaning": "Tình cảm gắn bó, chia sẻ và luôn mong điều tốt đẹp cho người khác."
        },
        {
          "word": "Rực rỡ",
          "meaning": "Tươi sáng, nổi bật với vẻ đẹp lộng lẫy."
        }
      ]
    },
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
            "label": "Ca ngợi vẻ đẹp và bài học ý nghĩa trong bài Tôm Càng và Cá Con 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khuyên các bạn đi ngủ sớm",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b25": {
    "passage": {
      "title": "Bác Hồ rèn luyện thân thể",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Mỗi buổi sáng, Bác Hồ luôn dậy sớm tập thể dục, chạy bộ và leo núi. Bác dạy thiếu nhi phải luôn rèn luyện thân thể khỏe mạnh để xây dựng đất nước.",
        "Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước."
      ],
      "audioNarration": "Bác Hồ rèn luyện thân thể. Mỗi buổi sáng, Bác Hồ luôn dậy sớm tập thể dục, chạy bộ và leo núi. Bác dạy thiếu nhi phải luôn rèn luyện thân thể khỏe mạnh để xây dựng đất nước. Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước.",
      "vocabularyNotes": [
        {
          "word": "Yêu thương",
          "meaning": "Tình cảm gắn bó, chia sẻ và luôn mong điều tốt đẹp cho người khác."
        },
        {
          "word": "Rực rỡ",
          "meaning": "Tươi sáng, nổi bật với vẻ đẹp lộng lẫy."
        }
      ]
    },
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
            "label": "Ca ngợi vẻ đẹp và bài học ý nghĩa trong bài Bác Hồ rèn luyện thân thể 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khuyên các bạn đi ngủ sớm",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b26": {
    "passage": {
      "title": "Ai ngoan sẽ được thưởng",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Bác Hồ đến thăm các cháu thiếu nhi nhân dịp Tết Trung thu. Bác khen ngợi bạn nhỏ biết thật thà nhận lỗi và tặng bạn phần kẹo ngọt ngào.",
        "Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước."
      ],
      "audioNarration": "Ai ngoan sẽ được thưởng. Bác Hồ đến thăm các cháu thiếu nhi nhân dịp Tết Trung thu. Bác khen ngợi bạn nhỏ biết thật thà nhận lỗi và tặng bạn phần kẹo ngọt ngào. Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước.",
      "vocabularyNotes": [
        {
          "word": "Yêu thương",
          "meaning": "Tình cảm gắn bó, chia sẻ và luôn mong điều tốt đẹp cho người khác."
        },
        {
          "word": "Rực rỡ",
          "meaning": "Tươi sáng, nổi bật với vẻ đẹp lộng lẫy."
        }
      ]
    },
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
            "label": "Ca ngợi vẻ đẹp và bài học ý nghĩa trong bài Ai ngoan sẽ được thưởng 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khuyên các bạn đi ngủ sớm",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b27": {
    "passage": {
      "title": "Cờ đỏ sao vàng",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Lá cờ đỏ sao vàng tung bay kiêu hãnh trên bầu trời lộng gió, là biểu tượng thiêng liêng cho độc lập, tự do và niềm tự hào dân tộc.",
        "Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước."
      ],
      "audioNarration": "Cờ đỏ sao vàng. Lá cờ đỏ sao vàng tung bay kiêu hãnh trên bầu trời lộng gió, là biểu tượng thiêng liêng cho độc lập, tự do và niềm tự hào dân tộc. Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước.",
      "vocabularyNotes": [
        {
          "word": "Yêu thương",
          "meaning": "Tình cảm gắn bó, chia sẻ và luôn mong điều tốt đẹp cho người khác."
        },
        {
          "word": "Rực rỡ",
          "meaning": "Tươi sáng, nổi bật với vẻ đẹp lộng lẫy."
        }
      ]
    },
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
            "label": "Ca ngợi vẻ đẹp và bài học ý nghĩa trong bài Cờ đỏ sao vàng 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khuyên các bạn đi ngủ sớm",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b28": {
    "passage": {
      "title": "Em yêu biển đảo",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Biển đảo Việt Nam giàu đẹp với những bãi cát trắng mịn màng và đoàn thuyền đánh cá trở về trong ánh bình minh rạng rỡ.",
        "Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước."
      ],
      "audioNarration": "Em yêu biển đảo. Biển đảo Việt Nam giàu đẹp với những bãi cát trắng mịn màng và đoàn thuyền đánh cá trở về trong ánh bình minh rạng rỡ. Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước.",
      "vocabularyNotes": [
        {
          "word": "Yêu thương",
          "meaning": "Tình cảm gắn bó, chia sẻ và luôn mong điều tốt đẹp cho người khác."
        },
        {
          "word": "Rực rỡ",
          "meaning": "Tươi sáng, nổi bật với vẻ đẹp lộng lẫy."
        }
      ]
    },
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
            "label": "Ca ngợi vẻ đẹp và bài học ý nghĩa trong bài Em yêu biển đảo 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khuyên các bạn đi ngủ sớm",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b29": {
    "passage": {
      "title": "Lượm hạt thóc vàng",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Bát cơm dẻo thơm trên bàn ăn là kết tinh từ giọt mồ hôi công sức cần cù của người nông dân một nắng hai sương trên đồng ruộng.",
        "Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước."
      ],
      "audioNarration": "Lượm hạt thóc vàng. Bát cơm dẻo thơm trên bàn ăn là kết tinh từ giọt mồ hôi công sức cần cù của người nông dân một nắng hai sương trên đồng ruộng. Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước.",
      "vocabularyNotes": [
        {
          "word": "Yêu thương",
          "meaning": "Tình cảm gắn bó, chia sẻ và luôn mong điều tốt đẹp cho người khác."
        },
        {
          "word": "Rực rỡ",
          "meaning": "Tươi sáng, nổi bật với vẻ đẹp lộng lẫy."
        }
      ]
    },
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
            "label": "Ca ngợi vẻ đẹp và bài học ý nghĩa trong bài Lượm hạt thóc vàng 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khuyên các bạn đi ngủ sớm",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          }
        ]
      }
    ]
  },
  "tv-g2-b30": {
    "passage": {
      "title": "Chuyến phiêu lưu của Giọt Nước",
      "author": "SGK Tiếng Việt 2",
      "genre": "prose",
      "content": [
        "Giọt nước nhỏ bay lên trời xanh hóa thành mây trắng bồng bềnh, rồi theo cơn mưa rào trở về tưới mát cho vạn vật xanh tươi.",
        "Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước."
      ],
      "audioNarration": "Chuyến phiêu lưu của Giọt Nước. Giọt nước nhỏ bay lên trời xanh hóa thành mây trắng bồng bềnh, rồi theo cơn mưa rào trở về tưới mát cho vạn vật xanh tươi. Mỗi câu chuyện là một bài học nhân văn sâu sắc, bồi dưỡng tâm hồn trong sáng và tình yêu thương quê hương đất nước.",
      "vocabularyNotes": [
        {
          "word": "Yêu thương",
          "meaning": "Tình cảm gắn bó, chia sẻ và luôn mong điều tốt đẹp cho người khác."
        },
        {
          "word": "Rực rỡ",
          "meaning": "Tươi sáng, nổi bật với vẻ đẹp lộng lẫy."
        }
      ]
    },
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
            "label": "Ca ngợi vẻ đẹp và bài học ý nghĩa trong bài Chuyến phiêu lưu của Giọt Nước 🌸",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khuyên các bạn đi ngủ sớm",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có ý nghĩa gì",
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
        "Chiều hôm nay, bé cùng mẹ nắn nót viết từng chiếc nhãn vở mới tinh cho năm học mới. Nhìn chiếc nhãn vở xinh xắn mang tên mình, bé cảm thấy mình đã thực sự trưởng thành và tự tin bước vào lớp 3.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Chiếc nhãn vở đặc biệt. Chiều hôm nay, bé cùng mẹ nắn nót viết từng chiếc nhãn vở mới tinh cho năm học mới. Nhìn chiếc nhãn vở xinh xắn mang tên mình, bé cảm thấy mình đã thực sự trưởng thành và tự tin bước vào lớp 3. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Mỗi bạn nhỏ trong lớp đều ấp ủ một ước mơ cao đẹp: bạn ước làm bác sĩ chữa bệnh cho muôn người, bạn ước làm phi công lái máy bay lượn trên trời xanh, bạn ước làm cô giáo dạy chữ cho trẻ em vùng cao.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Lắng nghe những ước mơ. Mỗi bạn nhỏ trong lớp đều ấp ủ một ước mơ cao đẹp: bạn ước làm bác sĩ chữa bệnh cho muôn người, bạn ước làm phi công lái máy bay lượn trên trời xanh, bạn ước làm cô giáo dạy chữ cho trẻ em vùng cao. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Con đường làng quen thuộc rộn ràng tiếng chân bước và tiếng cười khúc khích của bầy trẻ nhỏ. Mùa thu mang theo gió heo may lành lạnh và bầu trời trong xanh vời vợi.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Em vui đến trường. Con đường làng quen thuộc rộn ràng tiếng chân bước và tiếng cười khúc khích của bầy trẻ nhỏ. Mùa thu mang theo gió heo may lành lạnh và bầu trời trong xanh vời vợi. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Cậu bé Lu-i Pa-xtơ ngày đầu đến trường còn bỡ ngỡ nhưng đã sớm bộc lộ đức tính chăm chỉ, kiên trì và niềm say mê khoa học bất tận.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Cậu học sinh mới. Cậu bé Lu-i Pa-xtơ ngày đầu đến trường còn bỡ ngỡ nhưng đã sớm bộc lộ đức tính chăm chỉ, kiên trì và niềm say mê khoa học bất tận. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Mùa hè rực rỡ với tiếng ve ngân vang trong vòm lá phượng vĩ đỏ rực. Những buổi chiều lộng gió thả diều trên triền đê là ký ức tuổi thơ không bao giờ phai.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Mùa hè lấp lánh. Mùa hè rực rỡ với tiếng ve ngân vang trong vòm lá phượng vĩ đỏ rực. Những buổi chiều lộng gió thả diều trên triền đê là ký ức tuổi thơ không bao giờ phai. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Cánh đồng lúa chín trải rộng như một tấm thảm nhung vàng óng ả. Mùi thơm của rơm rạ mới gặt quyện trong gió chiều mang lại cảm giác bình yên đến lạ kỳ.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Cánh đồng tuổi thơ. Cánh đồng lúa chín trải rộng như một tấm thảm nhung vàng óng ả. Mùi thơm của rơm rạ mới gặt quyện trong gió chiều mang lại cảm giác bình yên đến lạ kỳ. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Con đường đến trường uốn lượn bên sườn đồi phủ kín hoa dại thơm ngát. Mỗi bước chân em đi đều rộn rã tiếng chim ca chào đón ngày mới.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Con đường đến trường. Con đường đến trường uốn lượn bên sườn đồi phủ kín hoa dại thơm ngát. Mỗi bước chân em đi đều rộn rã tiếng chim ca chào đón ngày mới. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Cậu bé Ét-môn-đô đã tìm ra cách giải bài toán bằng những vần thơ ngộ nghĩnh, làm thầy giáo và cả lớp vô cùng bất ngờ và thích thú.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Lời giải toán đặc biệt. Cậu bé Ét-môn-đô đã tìm ra cách giải bài toán bằng những vần thơ ngộ nghĩnh, làm thầy giáo và cả lớp vô cùng bất ngờ và thích thú. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Bàn tay cô giáo khéo léo gấp những tờ giấy màu thành chiếc thuyền buồm xinh xắn, cánh chim hải âu chao liệng và ông mặt trời rực rỡ giữa biển khơi.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Bàn tay cô giáo. Bàn tay cô giáo khéo léo gấp những tờ giấy màu thành chiếc thuyền buồm xinh xắn, cánh chim hải âu chao liệng và ông mặt trời rực rỡ giữa biển khơi. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Nhà rông cao vút sừng sững giữa buôn làng như lưỡi rìu khổng lồ vươn lên trời xanh. Đây là nơi hội tụ linh thiêng của cộng đồng các dân tộc Tây Nguyên anh em.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Nhà rông ở Tây Nguyên. Nhà rông cao vút sừng sững giữa buôn làng như lưỡi rìu khổng lồ vươn lên trời xanh. Đây là nơi hội tụ linh thiêng của cộng đồng các dân tộc Tây Nguyên anh em. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Khu vườn buổi sớm rộn rã bản hòa ca của muôn loài chim: chim chích chòe lảnh lót, chim khuyên ríu rít, chim cu gáy gù gù êm tai.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Tiếng chim hót trong vườn. Khu vườn buổi sớm rộn rã bản hòa ca của muôn loài chim: chim chích chòe lảnh lót, chim khuyên ríu rít, chim cu gáy gù gù êm tai. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Thư viện trường học là một ngôi nhà tri thức ấm cúng với hàng ngàn cuốn sách bổ ích được xếp ngay ngắn trên các kệ gỗ xinh xắn.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Thư viện trường em. Thư viện trường học là một ngôi nhà tri thức ấm cúng với hàng ngàn cuốn sách bổ ích được xếp ngay ngắn trên các kệ gỗ xinh xắn. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Bầu trời mùa thu trong vắt và cao vút. Những đám mây trắng xốp trôi lững lờ như những chiếc thuyền buồm êm ả lướt trên mặt nước trong xanh.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Bầu trời mùa thu. Bầu trời mùa thu trong vắt và cao vút. Những đám mây trắng xốp trôi lững lờ như những chiếc thuyền buồm êm ả lướt trên mặt nước trong xanh. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Bà nằm ốm trên giường, bé ngồi bên cạnh khẽ khàng vẫy chiếc quạt nan ru bà vào giấc ngủ êm đềm giữa buổi trưa hè thơm ngát hương cam.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Quạt cho bà ngủ. Bà nằm ốm trên giường, bé ngồi bên cạnh khẽ khàng vẫy chiếc quạt nan ru bà vào giấc ngủ êm đềm giữa buổi trưa hè thơm ngát hương cam. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Gặp năm hạn hán dữ dội, chú Cóc dũng cảm dẫn đầu muôn thú lên thiên đình đánh trống kiện Trời đòi mưa, cứu sống muôn loài thoát khỏi cơn đại hạn.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Cóc kiện Trời. Gặp năm hạn hán dữ dội, chú Cóc dũng cảm dẫn đầu muôn thú lên thiên đình đánh trống kiện Trời đòi mưa, cứu sống muôn loài thoát khỏi cơn đại hạn. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Trưng Trắc và Trưng Nhị cưỡi voi xung trận, phất cờ khởi nghĩa quét sạch quân xâm lược, giành lại giang sơn thái bình cho muôn dân đất Việt.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Hai Bà Trưng. Trưng Trắc và Trưng Nhị cưỡi voi xung trận, phất cờ khởi nghĩa quét sạch quân xâm lược, giành lại giang sơn thái bình cho muôn dân đất Việt. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Đất nước Việt Nam trải dài từ ải Nam Quan đến mũi Cà Mau với ngàn năm văn hiến, non sông gấm vóc rạng ngời truyền thống anh hùng.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Đất nước tươi đẹp. Đất nước Việt Nam trải dài từ ải Nam Quan đến mũi Cà Mau với ngàn năm văn hiến, non sông gấm vóc rạng ngời truyền thống anh hùng. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Em viết thư gửi các chú bộ đội hải quân đang ngày đêm cầm chắc tay súng canh giữ vùng trời vùng biển thiêng liêng nơi hải đảo xa xôi của Tổ quốc.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Bức thư gửi chú hải quân. Em viết thư gửi các chú bộ đội hải quân đang ngày đêm cầm chắc tay súng canh giữ vùng trời vùng biển thiêng liêng nơi hải đảo xa xôi của Tổ quốc. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Giữa trùng khơi sóng gió, hình ảnh người chiến sĩ hải quân với nụ cười lạc quan, kiên cường luôn là điểm tựa vững chắc cho biển đảo quê hương.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Chú hải quân canh giữ đảo xa. Giữa trùng khơi sóng gió, hình ảnh người chiến sĩ hải quân với nụ cười lạc quan, kiên cường luôn là điểm tựa vững chắc cho biển đảo quê hương. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Bác sĩ A-lếch-xăng Y-éc-xanh đã dành trọn cả cuộc đời gắn bó với mảnh đất Nha Trang hiền hòa để nghiên cứu y học, chữa bệnh cứu sống đồng bào nghèo.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Bác sĩ Y-éc-xanh. Bác sĩ A-lếch-xăng Y-éc-xanh đã dành trọn cả cuộc đời gắn bó với mảnh đất Nha Trang hiền hòa để nghiên cứu y học, chữa bệnh cứu sống đồng bào nghèo. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Bác sĩ Đặng Văn Ngữ từ bỏ cuộc sống tiện nghi nơi xứ người, vượt ngàn dặm về chiến khu kháng chiến để nghiên cứu thuốc cứu chữa thương bệnh binh.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Người trí thức yêu nước. Bác sĩ Đặng Văn Ngữ từ bỏ cuộc sống tiện nghi nơi xứ người, vượt ngàn dặm về chiến khu kháng chiến để nghiên cứu thuốc cứu chữa thương bệnh binh. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Trái Đất là ngôi nhà chung tươi đẹp của muôn loài. Chúng ta hãy cùng chung tay bảo vệ màu xanh của rừng cây, nguồn nước và bầu khí quyển trong lành.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Trái Đất xanh của chúng mình. Trái Đất là ngôi nhà chung tươi đẹp của muôn loài. Chúng ta hãy cùng chung tay bảo vệ màu xanh của rừng cây, nguồn nước và bầu khí quyển trong lành. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Ánh nắng ban mai chan hòa khắp sân trường. Các bạn nhỏ cùng nhau tập thể dục và tham gia các trò chơi vận động rèn luyện thân thể dẻo dai.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Cùng vui chơi trong nắng mới. Ánh nắng ban mai chan hòa khắp sân trường. Các bạn nhỏ cùng nhau tập thể dục và tham gia các trò chơi vận động rèn luyện thân thể dẻo dai. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Gió thu đưa hương cốm mới thơm nồng nàn trên từng con ngõ nhỏ, báo hiệu một vụ mùa no ấm và tràn ngập niềm vui trên khắp làng quê.",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Hương lúa chín đầu mùa. Gió thu đưa hương cốm mới thơm nồng nàn trên từng con ngõ nhỏ, báo hiệu một vụ mùa no ấm và tràn ngập niềm vui trên khắp làng quê. Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Chúc mừng các sĩ tử nhí đã xuất sắc hoàn thành xuất sắc toàn bộ chương trình Tiếng Việt Lớp 3 với bản lĩnh và tri thức tuyệt vời!",
        "Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập."
      ],
      "audioNarration": "Đấu trường Trạng Nguyên nhí Lớp 3. Chúc mừng các sĩ tử nhí đã xuất sắc hoàn thành xuất sắc toàn bộ chương trình Tiếng Việt Lớp 3 với bản lĩnh và tri thức tuyệt vời! Văn bản mang đến cho học sinh những hiểu biết phong phú về cuộc sống, bồi đắp lòng nhân ái và khát vọng vươn lên trong học tập.",
      "vocabularyNotes": [
        {
          "word": "Tự hào",
          "meaning": "Lòng hãnh diện, vinh dự về những điều tốt đẹp đạt được."
        },
        {
          "word": "Kiên trì",
          "meaning": "Bền bỉ, không nản lòng trước khó khăn thử thách."
        }
      ]
    },
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
            "label": "Bồi dưỡng phẩm chất đạo đức và tri thức sâu rộng cho học sinh 📚",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh xem tivi",
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
        "Một hôm, qua một vùng cỏ xước xanh dài, tôi chợt nghe tiếng khóc tỉ tê. Đến gần hốc đá, tôi thấy chị Nhà Trò bé nhỏ, gầy yếu đang ngồi gục đầu khóc nức nở vì bị bọn nhện ức hiếp đòi nợ ăn thịt.",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Dế Mèn bênh vực kẻ yếu (Phần 1). Một hôm, qua một vùng cỏ xước xanh dài, tôi chợt nghe tiếng khóc tỉ tê. Đến gần hốc đá, tôi thấy chị Nhà Trò bé nhỏ, gầy yếu đang ngồi gục đầu khóc nức nở vì bị bọn nhện ức hiếp đòi nợ ăn thịt. Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b1-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Dế Mèn bênh vực kẻ yếu (Phần 1)\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Dế Mèn bênh vực kẻ yếu (Phần 1)\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Mấy ngày mẹ vắng nhà, trời nổi bão to gió lớn. Hai anh em bảo nhau làm mọi việc nhà, chăm sóc đàn gà và nấu cơm tinh tươm để khi mẹ về nhà cửa luôn ấm áp.",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Mẹ vắng nhà ngày bão. Mấy ngày mẹ vắng nhà, trời nổi bão to gió lớn. Hai anh em bảo nhau làm mọi việc nhà, chăm sóc đàn gà và nấu cơm tinh tươm để khi mẹ về nhà cửa luôn ấm áp. Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b2-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Mẹ vắng nhà ngày bão\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Mẹ vắng nhà ngày bão\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Dế Mèn hiên ngang bước tới sào huyệt của bọn nhện, thét lớn một tiếng khiến lũ nhện run sợ. Chú vung đôi càng sắc bén phá tan vòng vây tơ nhện, bảo vệ chị Nhà Trò tội nghiệp.",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Dế Mèn bênh vực kẻ yếu (Phần 2). Dế Mèn hiên ngang bước tới sào huyệt của bọn nhện, thét lớn một tiếng khiến lũ nhện run sợ. Chú vung đôi càng sắc bén phá tan vòng vây tơ nhện, bảo vệ chị Nhà Trò tội nghiệp. Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b3-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Dế Mèn bênh vực kẻ yếu (Phần 2)\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Dế Mèn bênh vực kẻ yếu (Phần 2)\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Tôi yêu truyện cổ nước tôi, vừa nhân hậu lại tuyệt vời sâu xa. Những câu chuyện cổ tích thấm đượm tình người, dạy chúng ta bài học ở hiền gặp lành và lòng trung thực.",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Truyện cổ nước mình. Tôi yêu truyện cổ nước tôi, vừa nhân hậu lại tuyệt vời sâu xa. Những câu chuyện cổ tích thấm đượm tình người, dạy chúng ta bài học ở hiền gặp lành và lòng trung thực. Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b4-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Truyện cổ nước mình\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Truyện cổ nước mình\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Thằn lằn xanh và chú tắc kè hoa mỗi loài có một môi trường sống và tài năng riêng biệt. Học cách tôn trọng sự khác biệt của bạn bè là chìa khóa của tình bạn bền chặt.",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Thằn lằn xanh và tắc kè. Thằn lằn xanh và chú tắc kè hoa mỗi loài có một môi trường sống và tài năng riêng biệt. Học cách tôn trọng sự khác biệt của bạn bè là chìa khóa của tình bạn bền chặt. Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b5-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Thằn lằn xanh và tắc kè\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Thằn lằn xanh và tắc kè\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Tiếng đàn vĩ cầm trong trẻo của cô bé nhỏ vang lên giữa khán phòng rực rỡ ánh đèn, lay động trái tim hàng ngàn khán giả bằng niềm đam mê nghệ thuật cháy bỏng.",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Nghệ sĩ nhí. Tiếng đàn vĩ cầm trong trẻo của cô bé nhỏ vang lên giữa khán phòng rực rỡ ánh đèn, lay động trái tim hàng ngàn khán giả bằng niềm đam mê nghệ thuật cháy bỏng. Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b6-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Nghệ sĩ nhí\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Nghệ sĩ nhí\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Trái Đất trẻ của bạn trẻ năm châu! Vàng, trắng, đen... tuy khác màu da nhưng cùng chung nụ cười rạng rỡ và khát vọng hòa bình trên hành tinh xanh.",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Bài ca Trái Đất. Trái Đất trẻ của bạn trẻ năm châu! Vàng, trắng, đen... tuy khác màu da nhưng cùng chung nụ cười rạng rỡ và khát vọng hòa bình trên hành tinh xanh. Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b7-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Bài ca Trái Đất\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Bài ca Trái Đất\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Giáo sư Lương Định Của đã cống hiến trọn cuộc đời lai tạo ra những giống lúa mới năng suất cao, mang lại những mùa vàng no ấm cho hàng triệu nông dân Việt Nam.",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Nhà bác học của đồng ruộng. Giáo sư Lương Định Của đã cống hiến trọn cuộc đời lai tạo ra những giống lúa mới năng suất cao, mang lại những mùa vàng no ấm cho hàng triệu nông dân Việt Nam. Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b8-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Nhà bác học của đồng ruộng\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Nhà bác học của đồng ruộng\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Nếu chúng mình có phép lạ, hạt giống nảy mầm chớp mắt thành cây, quả chín thơm lừng đầy cành, không còn chiến tranh và đói nghèo trên toàn thế giới.",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Nếu chúng mình có phép lạ. Nếu chúng mình có phép lạ, hạt giống nảy mầm chớp mắt thành cây, quả chín thơm lừng đầy cành, không còn chiến tranh và đói nghèo trên toàn thế giới. Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b9-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Nếu chúng mình có phép lạ\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Nếu chúng mình có phép lạ\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Cây đa cổ thụ nghìn năm tuổi đầu làng như chiếc ô khổng lồ xòe bóng mát chở che cho bao thế hệ dân làng trải qua những thăng trầm của lịch sử.",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Cây đa quê hương. Cây đa cổ thụ nghìn năm tuổi đầu làng như chiếc ô khổng lồ xòe bóng mát chở che cho bao thế hệ dân làng trải qua những thăng trầm của lịch sử. Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b10-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Cây đa quê hương\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Cây đa quê hương\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Thanh bước vào khu vườn yên ả của bà, cảm nhận hương hoa hoàng lan thoang thoảng trong gió và sự chở che dịu dàng của người bà kính yêu.",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Về thăm bà. Thanh bước vào khu vườn yên ả của bà, cảm nhận hương hoa hoàng lan thoang thoảng trong gió và sự chở che dịu dàng của người bà kính yêu. Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b11-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Về thăm bà\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Về thăm bà\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Sóc Nâu và Nhím Xám luôn đồng hành, nhường nhịn và san sẻ từng hạt sồi thơm ngon trong những ngày đông giá rét trên đỉnh núi cao.",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Đôi bạn trong rừng xanh. Sóc Nâu và Nhím Xám luôn đồng hành, nhường nhịn và san sẻ từng hạt sồi thơm ngon trong những ngày đông giá rét trên đỉnh núi cao. Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b12-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Đôi bạn trong rừng xanh\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Đôi bạn trong rừng xanh\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Chiếc ô màu đỏ của Mai đã che mát cho một bạn nhỏ bị lạc đường trong cơn mưa tầm tã, gieo vào lòng người sự ấm áp của tình người giữa đời thường.",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Chiếc ô màu đỏ. Chiếc ô màu đỏ của Mai đã che mát cho một bạn nhỏ bị lạc đường trong cơn mưa tầm tã, gieo vào lòng người sự ấm áp của tình người giữa đời thường. Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b13-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Chiếc ô màu đỏ\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Chiếc ô màu đỏ\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Bình minh rạng rỡ chiếu sáng cánh đồng lúa chín vàng trĩu hạt. Giọt sương mai long lanh đọng trên đầu ngọn cỏ như những viên ngọc bích lấp lánh.",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Buổi sớm trên quê hương. Bình minh rạng rỡ chiếu sáng cánh đồng lúa chín vàng trĩu hạt. Giọt sương mai long lanh đọng trên đầu ngọn cỏ như những viên ngọc bích lấp lánh. Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b14-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Buổi sớm trên quê hương\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Buổi sớm trên quê hương\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Bông hoa cúc vàng rực rỡ hé nở trong sớm mai là món quà bất ngờ chan chứa lòng hiếu thảo mà bé dành tặng mẹ đang trên giường bệnh.",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Bông hoa niềm vui. Bông hoa cúc vàng rực rỡ hé nở trong sớm mai là món quà bất ngờ chan chứa lòng hiếu thảo mà bé dành tặng mẹ đang trên giường bệnh. Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b15-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Bông hoa niềm vui\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Bông hoa niềm vui\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Vịnh Hạ Long là một kiệt tác kỳ vĩ của thiên nhiên với hàng ngàn hòn đảo đá vôi nhấp nhô trên làn nước biển xanh như ngọc bích, được UNESCO vinh danh là di sản thế giới.",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Vịnh Hạ Long. Vịnh Hạ Long là một kiệt tác kỳ vĩ của thiên nhiên với hàng ngàn hòn đảo đá vôi nhấp nhô trên làn nước biển xanh như ngọc bích, được UNESCO vinh danh là di sản thế giới. Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b16-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Vịnh Hạ Long\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Vịnh Hạ Long\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Hang Sơn Đoòng - hang động tự nhiên kỳ vĩ bậc nhất hành tinh ẩn chứa cả một khu rừng nguyên sinh và dòng sông ngầm huyền bí sâu trong lòng núi đá vôi.",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Hang Sơn Đoòng. Hang Sơn Đoòng - hang động tự nhiên kỳ vĩ bậc nhất hành tinh ẩn chứa cả một khu rừng nguyên sinh và dòng sông ngầm huyền bí sâu trong lòng núi đá vôi. Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b17-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Hang Sơn Đoòng\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Hang Sơn Đoòng\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Chú bé Lượm với chiếc xắc xinh xinh, ca lô đội lệch, thoăn thoắt đôi chân vượt qua làn mưa bom bão đạn để chuyển công văn hỏa tốc cho chiến khu.",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Chú bé Lượm. Chú bé Lượm với chiếc xắc xinh xinh, ca lô đội lệch, thoăn thoắt đôi chân vượt qua làn mưa bom bão đạn để chuyển công văn hỏa tốc cho chiến khu. Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b18-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Chú bé Lượm\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Chú bé Lượm\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Lời ru ngọt ngào của người mẹ Tà-ôi hòa cùng nhịp chày giã gạo nuôi bộ đội, nuôi dưỡng ước mơ con khôn lớn trở thành người công dân tự do của đất nước.",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Khúc hát ru những em bé lớn trên lưng mẹ. Lời ru ngọt ngào của người mẹ Tà-ôi hòa cùng nhịp chày giã gạo nuôi bộ đội, nuôi dưỡng ước mơ con khôn lớn trở thành người công dân tự do của đất nước. Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b19-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Khúc hát ru những em bé lớn trên lưng mẹ\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Khúc hát ru những em bé lớn trên lưng mẹ\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Dòng suối trong vắt róc rách chảy qua đại ngàn, mang lại nguồn sống xanh tươi và tiếng reo vui bất tận cho muông thú vùng cao.",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Con suối mát lành. Dòng suối trong vắt róc rách chảy qua đại ngàn, mang lại nguồn sống xanh tươi và tiếng reo vui bất tận cho muông thú vùng cao. Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b20-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Con suối mát lành\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Con suối mát lành\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Khu vườn trĩu quả mùa thu: mít thơm lừng, bưởi vàng ươm, hồng đỏ mọng... mang lại niềm vui thu hoạch rạng rỡ cho những người nông dân một nắng hai sương.",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Mùa quả chín quê em. Khu vườn trĩu quả mùa thu: mít thơm lừng, bưởi vàng ươm, hồng đỏ mọng... mang lại niềm vui thu hoạch rạng rỡ cho những người nông dân một nắng hai sương. Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b21-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Mùa quả chín quê em\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Mùa quả chín quê em\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Chào mừng các bạn học sinh ưu tú đã vượt qua 22 chặng thử thách để bước lên bục vinh quang của Đấu trường Trạng Nguyên Lớp 4!",
        "Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết."
      ],
      "audioNarration": "Đấu trường Trạng Nguyên Lớp 4. Chào mừng các bạn học sinh ưu tú đã vượt qua 22 chặng thử thách để bước lên bục vinh quang của Đấu trường Trạng Nguyên Lớp 4! Tác phẩm văn học mang giá trị nghệ thuật đặc sắc, bồi dưỡng cho học sinh năng lực cảm thụ ngôn từ và tình yêu quê hương đất nước tha thiết.",
      "vocabularyNotes": [
        {
          "word": "Hùng vĩ",
          "meaning": "Có quy mô to lớn, uy nghiêm và tráng lệ lạ thường."
        },
        {
          "word": "Nhân ái",
          "meaning": "Lòng yêu thương con người, sẵn sàng đồng cảm và giúp đỡ kẻ yếu."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g4-b22-q1",
        "type": "bubble_choice",
        "questionText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Đấu trường Trạng Nguyên Lớp 4\" là gì?",
        "audioText": "Thông điệp nhân văn cốt lõi của tác phẩm \"Đấu trường Trạng Nguyên Lớp 4\" là gì?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Tôn vinh tinh thần nhân đạo, lòng dũng cảm và vẻ đẹp tâm hồn con người Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Khen ngợi kẻ mạnh bắt nạt kẻ yếu",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Không có giá trị gì",
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
        "Các em học sinh! Ngày hôm nay là ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa. Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Thư gửi các học sinh. Các em học sinh! Ngày hôm nay là ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa. Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b1-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Thư gửi các học sinh\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Thư gửi các học sinh\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Em yêu màu đỏ như máu trong tim, cờ Tổ quốc bay; Em yêu màu xanh của đồng bằng bát ngát; Em yêu màu vàng của hoa cúc mùa thu; Em yêu tất cả sắc màu của quê hương đất nước Việt Nam.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Sắc màu em yêu. Em yêu màu đỏ như máu trong tim, cờ Tổ quốc bay; Em yêu màu xanh của đồng bằng bát ngát; Em yêu màu vàng của hoa cúc mùa thu; Em yêu tất cả sắc màu của quê hương đất nước Việt Nam. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b2-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Sắc màu em yêu\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Sắc màu em yêu\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Mùa đông, giữa ngày mùa, làng quê toàn màu vàng trù phú: lúa chín vàng xuộm, nắng nhạt vàng hoe, quả xoan vàng lịm, lá chuối vàng ối... Tất cả đượm một màu trù phú, no ấm lạ thường.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Quang cảnh làng mạc ngày mùa. Mùa đông, giữa ngày mùa, làng quê toàn màu vàng trù phú: lúa chín vàng xuộm, nắng nhạt vàng hoe, quả xoan vàng lịm, lá chuối vàng ối... Tất cả đượm một màu trù phú, no ấm lạ thường. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b3-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Quang cảnh làng mạc ngày mùa\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Quang cảnh làng mạc ngày mùa\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Vở kịch tái hiện lòng trung kiên, gan dạ của bà má Nam Bộ khéo léo đánh lừa quân giặc tàn bạo để bảo vệ an toàn cho người cán bộ cách mạng.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Lòng dân. Vở kịch tái hiện lòng trung kiên, gan dạ của bà má Nam Bộ khéo léo đánh lừa quân giặc tàn bạo để bảo vệ an toàn cho người cán bộ cách mạng. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b4-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Lòng dân\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Lòng dân\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Cánh chim bồ câu trắng chao liệng trên bầu trời xanh thẳm là biểu tượng bất diệt cho ước vọng hòa bình, hữu nghị và thịnh vượng của nhân loại trên toàn thế giới.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Cánh chim hòa bình. Cánh chim bồ câu trắng chao liệng trên bầu trời xanh thẳm là biểu tượng bất diệt cho ước vọng hòa bình, hữu nghị và thịnh vượng của nhân loại trên toàn thế giới. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b5-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Cánh chim hòa bình\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Cánh chim hòa bình\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Trái Đất là quả bóng xanh bay giữa trời cao. Hãy giữ cho tiếng cười của trẻ thơ luôn rộn rã và bầu trời không còn bóng đen của khói lửa chiến tranh.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Bài ca về trái đất. Trái Đất là quả bóng xanh bay giữa trời cao. Hãy giữ cho tiếng cười của trẻ thơ luôn rộn rã và bầu trời không còn bóng đen của khói lửa chiến tranh. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b6-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Bài ca về trái đất\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Bài ca về trái đất\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Cô bé Xa-da-cô bị nhiễm phóng xạ bom nguyên tử đã kiên trì gấp hàng ngàn con sếu giấy với khát vọng hòa bình bất diệt, làm lay động hàng triệu trái tim nhân loại.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Những con sếu bằng giấy. Cô bé Xa-da-cô bị nhiễm phóng xạ bom nguyên tử đã kiên trì gấp hàng ngàn con sếu giấy với khát vọng hòa bình bất diệt, làm lay động hàng triệu trái tim nhân loại. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b7-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Những con sếu bằng giấy\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Những con sếu bằng giấy\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Khu rừng nguyên sinh mở ra một thế giới kỳ thú với vương quốc nấm lúp xúp, những thân cây cổ thụ rêu phong và bầy vượn bạc má chuyền cành thoăn thoắt.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Kì diệu rừng xanh. Khu rừng nguyên sinh mở ra một thế giới kỳ thú với vương quốc nấm lúp xúp, những thân cây cổ thụ rêu phong và bầy vượn bạc má chuyền cành thoăn thoắt. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b8-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Kì diệu rừng xanh\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Kì diệu rừng xanh\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Đứng trên cổng trời lộng gió, ngắm nhìn thung lũng mây trắng bồng bềnh và những nương ngô xanh biếc, ta cảm nhận sâu sắc vẻ đẹp hùng vĩ của biên cương Tổ quốc.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Trước cổng trời. Đứng trên cổng trời lộng gió, ngắm nhìn thung lũng mây trắng bồng bềnh và những nương ngô xanh biếc, ta cảm nhận sâu sắc vẻ đẹp hùng vĩ của biên cương Tổ quốc. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b9-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Trước cổng trời\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Trước cổng trời\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Cà Mau là đất mưa dông, cây đước cây tràm bám rễ sâu vào bùn đất phù sa màu mỡ. Con người nơi đây dũng cảm, kiên cường và giàu lòng mến khách.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Đất Cà Mau. Cà Mau là đất mưa dông, cây đước cây tràm bám rễ sâu vào bùn đất phù sa màu mỡ. Con người nơi đây dũng cảm, kiên cường và giàu lòng mến khách. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b10-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Đất Cà Mau\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Đất Cà Mau\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Khu vườn ban công nhỏ nhắn của bé Thu và ông nội có bao nhiêu loài cây quý, là nơi chim sâu ríu rít tìm về làm tổ giữa lòng thành phố nhộn nhịp.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Chuyện một khu vườn nhỏ. Khu vườn ban công nhỏ nhắn của bé Thu và ông nội có bao nhiêu loài cây quý, là nơi chim sâu ríu rít tìm về làm tổ giữa lòng thành phố nhộn nhịp. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b11-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Chuyện một khu vườn nhỏ\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Chuyện một khu vườn nhỏ\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Thảo quả trên rừng Đản Khao đã chín nương. Mùi thơm nồng nàn quyến rũ lan tỏa khắp không gian, làm bừng sáng cả khu rừng già Tây Bắc.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Mùa thảo quả. Thảo quả trên rừng Đản Khao đã chín nương. Mùi thơm nồng nàn quyến rũ lan tỏa khắp không gian, làm bừng sáng cả khu rừng già Tây Bắc. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b12-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Mùa thảo quả\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Mùa thảo quả\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Bầy ong cần mẫn bay khắp bốn phương trời, chắt chiu từng giọt mật hoa tinh túy để dâng tặng cho đời chất ngọt ngào bất tận.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Hành trình của bầy ong. Bầy ong cần mẫn bay khắp bốn phương trời, chắt chiu từng giọt mật hoa tinh túy để dâng tặng cho đời chất ngọt ngào bất tận. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b13-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Hành trình của bầy ong\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Hành trình của bầy ong\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Chàng thanh niên Nguyễn Tất Thành tại bến cảng Nhà Rồng năm 1911 với bầu nhiệt huyết yêu nước nồng nàn đã quyết tâm ra đi tìm đường cứu nước, giải phóng dân tộc khỏi ách nô lệ.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Người công dân số Một. Chàng thanh niên Nguyễn Tất Thành tại bến cảng Nhà Rồng năm 1911 với bầu nhiệt huyết yêu nước nồng nàn đã quyết tâm ra đi tìm đường cứu nước, giải phóng dân tộc khỏi ách nô lệ. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b14-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Người công dân số Một\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Người công dân số Một\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Hạt gạo làng ta có vị phù sa của sông Kinh Thầy, có hương sen thơm trong hồ nước đầy, có lời mẹ hát ngọt ngào và giọt mồ hôi của những người mẹ, người chị trên cánh đồng kháng chiến.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Hạt gạo làng ta. Hạt gạo làng ta có vị phù sa của sông Kinh Thầy, có hương sen thơm trong hồ nước đầy, có lời mẹ hát ngọt ngào và giọt mồ hôi của những người mẹ, người chị trên cánh đồng kháng chiến. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b15-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Hạt gạo làng ta\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Hạt gạo làng ta\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Thái sư Trần Thủ Độ là bậc khai quốc công thần kiệt xuất của triều Trần, luôn đặt phép nước lên trên tình riêng, chí công vô tư và hết lòng vì sự tồn vong của xã tắc.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Thái sư Trần Thủ Độ. Thái sư Trần Thủ Độ là bậc khai quốc công thần kiệt xuất của triều Trần, luôn đặt phép nước lên trên tình riêng, chí công vô tư và hết lòng vì sự tồn vong của xã tắc. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b16-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Thái sư Trần Thủ Độ\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Thái sư Trần Thủ Độ\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Đền Hùng tọa lạc trang nghiêm trên đỉnh núi Nghĩa Lĩnh linh thiêng. Nơi đây là cội nguồn của dân tộc, nơi các vua Hùng đã có công dựng nước và con cháu muôn đời tạc dạ ghi ơn.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Phong cảnh đền Hùng. Đền Hùng tọa lạc trang nghiêm trên đỉnh núi Nghĩa Lĩnh linh thiêng. Nơi đây là cội nguồn của dân tộc, nơi các vua Hùng đã có công dựng nước và con cháu muôn đời tạc dạ ghi ơn. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b17-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Phong cảnh đền Hùng\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Phong cảnh đền Hùng\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Thầy giáo Chu Văn An dẫn các học trò đã làm quan lớn về quê chúc thọ cụ đồ già đã dạy chữ cho thầy thuở xưa, thể hiện truyền thống \"Tôn sư trọng đạo\" cao quý của dân tộc Việt Nam.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Nghĩa thầy trò. Thầy giáo Chu Văn An dẫn các học trò đã làm quan lớn về quê chúc thọ cụ đồ già đã dạy chữ cho thầy thuở xưa, thể hiện truyền thống \"Tôn sư trọng đạo\" cao quý của dân tộc Việt Nam. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b18-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Nghĩa thầy trò\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Nghĩa thầy trò\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Tranh làng Hồ là tinh hoa nghệ thuật dân gian độc đáo của dân tộc. Những nghệ nhân tài hoa đã khắc họa hình ảnh lợn âm dương, đám cưới chuột trên giấy điệp óng ánh sắc màu dân tộc.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Tranh làng Hồ. Tranh làng Hồ là tinh hoa nghệ thuật dân gian độc đáo của dân tộc. Những nghệ nhân tài hoa đã khắc họa hình ảnh lợn âm dương, đám cưới chuột trên giấy điệp óng ánh sắc màu dân tộc. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b19-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Tranh làng Hồ\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Tranh làng Hồ\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Mùa thu nay khác rồi, tôi đứng vui nghe giữa núi đồi. Gió thổi rừng tre phấp phới, trời thu thay áo mới, trong biếc nói cười thiết tha. Nước chúng ta, nước những người chưa bao giờ khuất!",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Đất nước. Mùa thu nay khác rồi, tôi đứng vui nghe giữa núi đồi. Gió thổi rừng tre phấp phới, trời thu thay áo mới, trong biếc nói cười thiết tha. Nước chúng ta, nước những người chưa bao giờ khuất! Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b20-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Đất nước\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Đất nước\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Bạn nhỏ Út Vịnh không màng hiểm nguy, dũng cảm lao ra giữa đường ray kéo hai em nhỏ thoát khỏi lưỡi hái tử thần của đoàn tàu hỏa đang lao tới với tốc độ kinh hoàng.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Út Vịnh. Bạn nhỏ Út Vịnh không màng hiểm nguy, dũng cảm lao ra giữa đường ray kéo hai em nhỏ thoát khỏi lưỡi hái tử thần của đoàn tàu hỏa đang lao tới với tốc độ kinh hoàng. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b21-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Út Vịnh\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Út Vịnh\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Hai cha con bước đi trên bãi cát mịn màng. Cậu bé ngước nhìn những cánh buồm trắng xa xăm và mơ ước được đi đến những chân trời mới lạ của đại dương bao la.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Những cánh buồm. Hai cha con bước đi trên bãi cát mịn màng. Cậu bé ngước nhìn những cánh buồm trắng xa xăm và mơ ước được đi đến những chân trời mới lạ của đại dương bao la. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b22-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Những cánh buồm\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Những cánh buồm\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Bầm ơi có rét tình quê, bầm thương con bầm chớ lo nhiều. Con đi trăm núi ngàn khe, chưa bằng muôn nỗi tái tê lòng bầm. Tình mẫu tử thiêng liêng hòa cùng tình yêu Tổ quốc vĩ đại.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Bầm ơi. Bầm ơi có rét tình quê, bầm thương con bầm chớ lo nhiều. Con đi trăm núi ngàn khe, chưa bằng muôn nỗi tái tê lòng bầm. Tình mẫu tử thiêng liêng hòa cùng tình yêu Tổ quốc vĩ đại. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b23-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Bầm ơi\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Bầm ơi\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Mặt trời đỏ rực như quả cầu lửa khổng lồ từ từ nhô lên từ lòng biển cả, nhuộm hồng những cánh buồm căng gió và sóng biển lấp lánh muôn ngàn vảy bạc.",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Buổi sáng trên bãi biển. Mặt trời đỏ rực như quả cầu lửa khổng lồ từ từ nhô lên từ lòng biển cả, nhuộm hồng những cánh buồm căng gió và sóng biển lấp lánh muôn ngàn vảy bạc. Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b24-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Buổi sáng trên bãi biển\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Buổi sáng trên bãi biển\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
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
        "Vinh danh các Trạng Nguyên xuất sắc đã hoàn thành trọn vẹn chương trình Tiểu học (Lớp 1-5). Chúc các em luôn tự tin, tỏa sáng và bay cao trên con đường chinh phục tri thức tương lai!",
        "Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học."
      ],
      "audioNarration": "Đấu trường Vinh danh Trạng Nguyên Toàn Cấp. Vinh danh các Trạng Nguyên xuất sắc đã hoàn thành trọn vẹn chương trình Tiểu học (Lớp 1-5). Chúc các em luôn tự tin, tỏa sáng và bay cao trên con đường chinh phục tri thức tương lai! Áng văn chứa chan cảm xúc và giá trị tư tưởng sâu sắc, là hành trang tri thức và bồi dưỡng nhân cách toàn diện cho học sinh trước ngưỡng cửa tốt nghiệp Tiểu học.",
      "vocabularyNotes": [
        {
          "word": "Chí công vô tư",
          "meaning": "Công bằng, chính trực, đặt lợi ích chung lên trên quyền lợi cá nhân."
        },
        {
          "word": "Thiêng liêng",
          "meaning": "Cao quý, tôn nghiêm, gợi lên sự kính cẩn và xúc động sâu xa."
        }
      ]
    },
    "questions": [
      {
        "id": "tv-g5-b25-q1",
        "type": "bubble_choice",
        "questionText": "Tác phẩm \"Đấu trường Vinh danh Trạng Nguyên Toàn Cấp\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "audioText": "Tác phẩm \"Đấu trường Vinh danh Trạng Nguyên Toàn Cấp\" mang đến bài học giáo dục sâu sắc gì cho thế hệ trẻ?",
        "points": 15,
        "options": [
          {
            "id": "a",
            "label": "Bồi đắp lòng yêu nước, ý thức trách nhiệm công dân và đạo lý tốt đẹp của dân tộc Việt Nam 🇻🇳",
            "isCorrect": true
          },
          {
            "id": "b",
            "label": "Không có ý nghĩa gì",
            "isCorrect": false
          },
          {
            "id": "c",
            "label": "Khuyên học sinh lười biếng",
            "isCorrect": false
          }
        ]
      }
    ]
  }
};
