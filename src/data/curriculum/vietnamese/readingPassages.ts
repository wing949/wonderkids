import { ReadingPassage, Question } from '../../../types';

export interface ReadingLessonBundle {
  passage: ReadingPassage;
  questions: Question[];
}

export const VIETNAMESE_READING_PASSAGES: Record<string, ReadingLessonBundle> = {
  // =========================================================================
  // TIẾNG VIỆT LỚP 1 (SGK GDPT 2018 — KẾT NỐI TRI THỨC / CÁNH DIỀU)
  // =========================================================================
  'tv-g1-b1': {
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
  },

  'tv-g1-b2': {
    passage: {
      title: 'Con Cò và Chú Cá Nhỏ',
      author: 'Đồng dao thiếu nhi',
      genre: 'prose',
      content: [
        'Con cò lặn lội bờ ao, bắt tép nuôi con.',
        'Cá nhỏ bơi lượn tung tăng dưới làn nước trong vắt.',
        'Cò đậu trên cành tre nghiêng bóng, khẽ nghiêng đầu ngắm cảnh quê yên bình.'
      ],
      audioNarration: 'Con Cò và Chú Cá Nhỏ. Con cò lặn lội bờ ao, bắt tép nuôi con. Cá nhỏ bơi lượn tung tăng dưới làn nước trong vắt. Cò đậu trên cành tre nghiêng bóng, khẽ nghiêng đầu ngắm cảnh quê yên bình.',
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
  },

  'tv-g1-b3': {
    passage: {
      title: 'Bà Bế Bé',
      author: 'SGK Tiếng Việt 1',
      genre: 'prose',
      content: [
        'Chiều mát, bà bế bé ra hiên ngắm hoa.',
        'Bé cười toe toét chỉ vào chú bướm vàng đang bay.',
        'Bà hát ru êm dịu, gió thoảng đưa hương nhài ngào ngạt.'
      ],
      audioNarration: 'Bà Bế Bé. Chiều mát, bà bế bé ra hiên ngắm hoa. Bé cười toe toét chỉ vào chú bướm vàng đang bay. Bà hát ru êm dịu, gió thoảng đưa hương nhài ngào ngạt.',
      vocabularyNotes: [
        { word: 'Toe toét', meaning: 'Cười mở rộng miệng, vô cùng vui sướng.' },
        { word: 'Ngào ngạt', meaning: 'Mùi hương thơm lan tỏa đậm đà.' }
      ]
    },
    questions: [
      {
        id: 'tv1-b3-q1',
        type: 'bubble_choice',
        questionText: 'Bé cười toe toét khi nhìn thấy con vật gì?',
        audioText: 'Bé cười toe toét khi nhìn thấy con vật gì?',
        points: 15,
        options: [
          { id: 'a', label: 'Chú bướm vàng đang bay 🦋', isCorrect: true },
          { id: 'b', label: 'Chú mèo con' },
          { id: 'c', label: 'Chú cún nhỏ' }
        ]
      }
    ]
  },

  'tv-g1-b4': {
    passage: {
      title: 'Bé Vẽ Quả Lê',
      author: 'SGK Tiếng Việt 1',
      genre: 'prose',
      content: [
        'Bé cầm hộp sáp màu ngồi vẽ vào trang giấy trắng.',
        'Bé vẽ quả lê chín vàng ươm mọng nước.',
        'Bé đem khoe với ông bà, ai nấy đều khen ngợi bé vẽ khéo tay.'
      ],
      audioNarration: 'Bé Vẽ Quả Lê. Bé cầm hộp sáp màu ngồi vẽ vào trang giấy trắng. Bé vẽ quả lê chín vàng ươm mọng nước. Bé đem khoe với ông bà, ai nấy đều khen ngợi bé vẽ khéo tay.',
      vocabularyNotes: [
        { word: 'Vàng ươm', meaning: 'Màu vàng tươi sáng của trái cây đã chín tới.' },
        { word: 'Khéo tay', meaning: 'Làm việc gì cũng cẩn thận, đẹp mắt.' }
      ]
    },
    questions: [
      {
        id: 'tv1-b4-q1',
        type: 'bubble_choice',
        questionText: 'Bé đã dùng sáp màu để vẽ loại quả gì?',
        audioText: 'Bé đã dùng sáp màu để vẽ loại quả gì?',
        points: 15,
        options: [
          { id: 'a', label: 'Quả lê chín vàng 🍐', isCorrect: true },
          { id: 'b', label: 'Quả táo đỏ' },
          { id: 'c', label: 'Quả dưa hấu' }
        ]
      }
    ]
  },

  'tv-g1-b5': {
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
  },

  // =========================================================================
  // TIẾNG VIỆT LỚP 2 (SGK KẾT NỐI TRI THỨC / CHÂN TRỜI SÁNG TẠO)
  // =========================================================================
  'tv-g2-b1': {
    passage: {
      title: 'Tôi là học sinh lớp 2',
      author: 'Phỏng theo SGK Tiếng Việt 2',
      genre: 'prose',
      content: [
        'Sáng sớm ngày khai trường, tôi thức dậy thật sớm. Mẹ âu yếm vuốt tóc tôi và nói: "Chúc mừng con trai yêu đã chính thức trở thành học sinh lớp 2!"',
        'Tôi mặc bộ đồng phục mới tinh, tinh tươm và sạch sẽ. Đứng trước gương, tôi thấy mình lớn hơn hẳn năm ngoái. Không còn rụt rè, bỡ ngỡ như ngày đầu bước vào lớp Một nữa.',
        'Đến trường, sân trường rợp bóng cờ hoa và rộn rã tiếng cười nói. Tôi nhìn thấy thầy cô mến yêu và gặp lại những người bạn thân thiết. Chúng tôi tíu tít kể cho nhau nghe về những chuyến đi chơi mùa hè kỳ thú.',
        'Hồi trống trường giòn giã vang lên: "Tùng! Tùng! Tùng!". Chúng tôi trang nghiêm xếp hàng bước vào lớp học mới. Tôi tự hào thầm nhủ: "Mình đã là học sinh lớp 2, mình sẽ học thật chăm chỉ và yêu thương bạn bè!"'
      ],
      audioNarration: 'Tôi là học sinh lớp hai. Sáng sớm ngày khai trường, tôi thức dậy thật sớm. Mẹ âu yếm vuốt tóc tôi và nói: Chúc mừng con trai yêu đã chính thức trở thành học sinh lớp hai! Tôi mặc bộ đồng phục mới tinh, tinh tươm và sạch sẽ. Đứng trước gương, tôi thấy mình lớn hơn hẳn năm ngoái. Không còn rụt rè, bỡ ngỡ như ngày đầu bước vào lớp Một nữa. Đến trường, sân trường rợp bóng cờ hoa và rộn rã tiếng cười nói. Tôi nhìn thấy thầy cô mến yêu và gặp lại những người bạn thân thiết. Chúng tôi tíu tít kể cho nhau nghe về những chuyến đi chơi mùa hè kỳ thú. Hồi trống trường giòn giã vang lên: Tùng! Tùng! Tùng! Chúng tôi trang nghiêm xếp hàng bước vào lớp học mới. Tôi tự hào thầm nhủ: Mình đã là học sinh lớp hai, mình sẽ học thật chăm chỉ và yêu thương bạn bè!',
      vocabularyNotes: [
        { word: 'Âu yếm', meaning: 'Cử chỉ dịu dàng, thể hiện tình yêu thương trìu mến.' },
        { word: 'Tíu tít', meaning: 'Nói cười rộn ràng, vui vẻ liên tục không ngớt.' },
        { word: 'Bỡ ngỡ', meaning: 'Cảm giác lạ lẫm, chưa quen thuộc với môi trường mới.' }
      ]
    },
    questions: [
      {
        id: 'tv2-b1-q1',
        type: 'bubble_choice',
        questionText: 'Trong bài đọc, khi đứng trước gương, bạn nhỏ cảm thấy bản thân như thế nào?',
        audioText: 'Khi đứng trước gương, bạn nhỏ cảm thấy bản thân như thế nào?',
        points: 15,
        options: [
          { id: 'a', label: 'Thấy mình đã lớn hơn hẳn, không còn bỡ ngỡ như lớp Một 🌟', isCorrect: true },
          { id: 'b', label: 'Cảm thấy rất lo lắng và sợ hãi' },
          { id: 'c', label: 'Cảm thấy còn buồn ngủ và mệt mỏi' }
        ]
      }
    ]
  },

  'tv-g2-b2': {
    passage: {
      title: 'Ngày hôm qua đâu rồi?',
      author: 'Bế Kiến Quốc',
      genre: 'poem',
      content: [
        'Em cầm tờ lịch cũ:\n— Ngày hôm qua đâu rồi?\nRa ngoài sân hỏi nụ\nNụ hồng vừa nở hoa.',
        '— Ngày hôm qua ở lại\nTrong hạt lúa mẹ trồng\nCánh đồng chờ gặt hái\nChín vàng màu ước mong.',
        '— Ngày hôm qua ở lại\nTrên cành hoa trong vườn\nNụ hoa mầm thơm ngát\nĐang tỏa hương ngát lừng.',
        '— Ngày hôm qua ở lại\nTrong vở hồng của con\nCon học hành chăm chỉ\nLà ngày qua vẫn còn.'
      ],
      audioNarration: 'Ngày hôm qua đâu rồi? Tác giả Bế Kiến Quốc. Em cầm tờ lịch cũ: Ngày hôm qua đâu rồi? Ra ngoài sân hỏi nụ, Nụ hồng vừa nở hoa. Ngày hôm qua ở lại, Trong hạt lúa mẹ trồng, Cánh đồng chờ gặt hái, Chín vàng màu ước mong. Ngày hôm qua ở lại, Trên cành hoa trong vườn, Nụ hoa mầm thơm ngát, Đang tỏa hương ngát lừng. Ngày hôm qua ở lại, Trong vở hồng của con, Con học hành chăm chỉ, Là ngày qua vẫn còn.',
      vocabularyNotes: [
        { word: 'Tờ lịch cũ', meaning: 'Tờ lịch của ngày đã trôi qua, được bóc ra.' },
        { word: 'Ước mong', meaning: 'Mong muốn, hy vọng vào một kết quả tốt đẹp phía trước.' }
      ]
    },
    questions: [
      {
        id: 'tv2-b2-q1',
        type: 'bubble_choice',
        questionText: 'Khổ thơ cuối khuyên em làm điều gì để giữ lại ngày hôm qua?',
        audioText: 'Khổ thơ cuối khuyên em làm điều gì?',
        points: 15,
        options: [
          { id: 'a', label: 'Học hành chăm chỉ và đạt nhiều điểm tốt 📚', isCorrect: true },
          { id: 'b', label: 'Chăm sóc vườn hoa hồng' },
          { id: 'c', label: 'Cất giữ tờ lịch cũ' }
        ]
      }
    ]
  },

  'tv-g2-b3': {
    passage: {
      title: 'Bác gà trống thông minh',
      author: 'Truyện cổ tích',
      genre: 'prose',
      content: [
        'Trên cây sồi già, có một bác Gà Trống đang đứng gáy vang báo hiệu trời sáng.',
        'Một con Cáo già đi ngang qua, thấy Gà Trống béo tốt liền nảy ra ý định muốn ăn thịt.',
        'Cáo tiến lại gần và cất giọng ngọt ngào: "Bạn Gà Trống ơi, từ nay muôn loài đã kết bạn hòa bình rồi, bạn hãy xuống đây chúng ta cùng tâm sự nhé!"',
        'Bác Gà Trống nghe vậy liền ngẫm nghĩ, bác vươn cổ nhìn ra xa rồi nói: "Ôi, vui quá! Đằng kia có một đàn Chó Săn cũng đang chạy lại để chia vui này!"',
        'Cáo nghe thấy tiếng Chó Săn thì sợ hãi cụp đuôi, vắt chân lên cổ chạy biến vào rừng sâu.'
      ],
      audioNarration: 'Bác gà trống thông minh. Trên cây sồi già, có một bác Gà Trống đang đứng gáy vang báo hiệu trời sáng. Một con Cáo già đi ngang qua, thấy Gà Trống béo tốt liền nảy ra ý định muốn ăn thịt. Cáo tiến lại gần và cất giọng ngọt ngào: Bạn Gà Trống ơi, từ nay muôn loài đã kết bạn hòa bình rồi, bạn hãy xuống đây chúng ta cùng tâm sự nhé! Bác Gà Trống nghe vậy liền ngẫm nghĩ, bác vươn cổ nhìn ra xa rồi nói: Ôi, vui quá! Đằng kia có một đàn Chó Săn cũng đang chạy lại để chia vui này! Cáo nghe thấy tiếng Chó Săn thì sợ hãi cụp đuôi, vắt chân lên cổ chạy biến vào rừng sâu.',
      vocabularyNotes: [
        { word: 'Ngọt ngào', meaning: 'Lời nói nhẹ nhàng, giả vờ thân thiện để đánh lừa.' },
        { word: 'Vắt chân lên cổ', meaning: 'Chạy tháo thân thật nhanh vì quá sợ hãi.' }
      ]
    },
    questions: [
      {
        id: 'tv2-b3-q1',
        type: 'bubble_choice',
        questionText: 'Bác Gà Trống đã nói gì khiến con Cáo sợ hãi bỏ chạy?',
        audioText: 'Bác Gà Trống đã nói gì khiến con Cáo sợ hãi bỏ chạy?',
        points: 15,
        options: [
          { id: 'a', label: 'Bác nói có đàn Chó Săn đang chạy lại chia vui 🐕', isCorrect: true },
          { id: 'b', label: 'Bác nói bác biết bay rất cao' },
          { id: 'c', label: 'Bác gọi người thợ săn đến' }
        ]
      }
    ]
  },

  // =========================================================================
  // TIẾNG VIỆT LỚP 3 (SGK KẾT NỐI TRI THỨC)
  // =========================================================================
  'tv-g3-b1': {
    passage: {
      title: 'Ngày Gặp Lại',
      author: 'SGK Tiếng Việt 3',
      genre: 'prose',
      content: [
        'Chiếc trống trường vang lên rộn rã đón chào chúng tôi bước vào năm học lớp Ba.',
        'Gặp lại bạn bè sau ba tháng hè, ai nấy đều cao lớn và khỏe khoắn hơn hẳn.',
        'Chúng tôi tíu tít khoe với nhau về những trải nghiệm lý thú: bạn thì được về quê thăm ông bà, bạn thì đi biển lướt sóng.',
        'Cô giáo bước vào lớp với nụ cười hiền từ, ánh mắt chan chứa niềm tin yêu dành cho đàn con nhỏ.'
      ],
      audioNarration: 'Ngày Gặp Lại. Chiếc trống trường vang lên rộn rã đón chào chúng tôi bước vào năm học lớp Ba. Gặp lại bạn bè sau ba tháng hè, ai nấy đều cao lớn và khỏe khoắn hơn hẳn. Chúng tôi tíu tít khoe với nhau về những trải nghiệm lý thú: bạn thì được về quê thăm ông bà, bạn thì đi biển lướt sóng. Cô giáo bước vào lớp với nụ cười hiền từ, ánh mắt chan chứa niềm tin yêu dành cho đàn con nhỏ.',
      vocabularyNotes: [
        { word: 'Khỏe khoắn', meaning: 'Trông mạnh khỏe, tràn đầy sức sống.' },
        { word: 'Trải nghiệm', meaning: 'Những hoạt động thực tế đã trải qua trong cuộc sống.' }
      ]
    },
    questions: [
      {
        id: 'tv3-b1-q1',
        type: 'bubble_choice',
        questionText: 'Sau ba tháng hè gặp lại, các bạn học sinh có sự thay đổi như thế nào?',
        audioText: 'Sau ba tháng hè gặp lại, các bạn học sinh có sự thay đổi như thế nào?',
        points: 15,
        options: [
          { id: 'a', label: 'Ai nấy đều cao lớn và khỏe khoắn hơn hẳn ⭐', isCorrect: true },
          { id: 'b', label: 'Ai nấy đều thấy mệt mỏi' },
          { id: 'c', label: 'Các bạn quên hết tên nhau' }
        ]
      }
    ]
  },

  'tv-g3-b2': {
    passage: {
      title: 'Về Thăm Quê',
      author: 'Trần Đăng Khoa',
      genre: 'poem',
      content: [
        'Nghỉ hè em được về quê\nĐường làng rợp bóng tre che mát lành.\nCánh đồng lúa trĩu bông xanh\nGió đưa thoang thoảng hương chanh thơm lừng.',
        'Chiều về theo bác ra sông\nNgắm đàn vịt lội bềnh bồng dưới hoa\nĐêm về ngồi dưới mái nhà\nNghe bà kể chuyện ngàn xưa diệu kỳ.'
      ],
      audioNarration: 'Về Thăm Quê. Tác giả Trần Đăng Khoa. Nghỉ hè em được về quê, Đường làng rợp bóng tre che mát lành. Cánh đồng lúa trĩu bông xanh, Gió đưa thoang thoảng hương chanh thơm lừng. Chiều về theo bác ra sông, Ngắm đàn vịt lội bềnh bồng dưới hoa, Đêm về ngồi dưới mái nhà, Nghe bà kể chuyện ngàn xưa diệu kỳ.',
      vocabularyNotes: [
        { word: 'Bềnh bồng', meaning: 'Trôi nổi nhẹ nhàng trên mặt nước êm ả.' },
        { word: 'Diệu kỳ', meaning: 'Kỳ lạ và đẹp đẽ như trong truyện cổ tích.' }
      ]
    },
    questions: [
      {
        id: 'tv3-b2-q1',
        type: 'bubble_choice',
        questionText: 'Ban đêm ở quê, bạn nhỏ được làm điều gì thú vị cùng bà?',
        audioText: 'Ban đêm ở quê, bạn nhỏ được làm điều gì thú vị cùng bà?',
        points: 15,
        options: [
          { id: 'a', label: 'Nghe bà kể chuyện ngàn xưa diệu kỳ 🌙', isCorrect: true },
          { id: 'b', label: 'Đi xem phim rạp' },
          { id: 'c', label: 'Chơi trò chơi điện thoại' }
        ]
      }
    ]
  },

  'tv-g3-b3': {
    passage: {
      title: 'Cánh Rừng Trong Nắng',
      author: 'SGK Tiếng Việt 3',
      genre: 'prose',
      content: [
        'Nắng sớm rọi xuống cánh rừng nguyên sinh rực rỡ.',
        'Những vạt nấm khổng lồ nhô lên như những chiếc ô tí hon đủ sắc màu.',
        'Tiếng suối róc rách hòa cùng tiếng chim rừng hót líu lo tạo nên bản hòa ca tuyệt vời của thiên nhiên.'
      ],
      audioNarration: 'Cánh Rừng Trong Nắng. Nắng sớm rọi xuống cánh rừng nguyên sinh rực rỡ. Những vạt nấm khổng lồ nhô lên như những chiếc ô tí hon đủ sắc màu. Tiếng suối róc rách hòa cùng tiếng chim rừng hót líu lo tạo nên bản hòa ca tuyệt vời của thiên nhiên.',
      vocabularyNotes: [
        { word: 'Nguyên sinh', meaning: 'Cánh rừng tự nhiên lâu đời, chưa bị con người khai phá.' },
        { word: 'Hòa ca', meaning: 'Nhiều âm thanh cùng cất lên hài hòa, êm tai.' }
      ]
    },
    questions: [
      {
        id: 'tv3-b3-q1',
        type: 'bubble_choice',
        questionText: 'Trong bài văn, những vạt nấm trong rừng được so sánh với hình ảnh nào?',
        audioText: 'Những vạt nấm trong rừng được so sánh với hình ảnh nào?',
        points: 15,
        options: [
          { id: 'a', label: 'Như những chiếc ô tí hon đủ sắc màu 🍄', isCorrect: true },
          { id: 'b', label: 'Như những hòn đá cuội' },
          { id: 'c', label: 'Như những chiếc lá khô' }
        ]
      }
    ]
  },

  // =========================================================================
  // TIẾNG VIỆT LỚP 4 (SGK KẾT NỐI TRI THỨC)
  // =========================================================================
  'tv-g4-b1': {
    passage: {
      title: 'Điều Kì Diệu',
      author: 'SGK Tiếng Việt 4',
      genre: 'prose',
      content: [
        'Mỗi người sinh ra trên thế giới này đều là một cá thể độc đáo và kỳ diệu.',
        'Bạn có thể có giọng nói trong trẻo, bạn khác lại có đôi bàn tay khéo léo vẽ tranh, có bạn lại sở hữu trái tim nhân hậu biết lắng nghe.',
        'Chính sự đa dạng và khác biệt đó đã tạo nên một thế giới muôn màu rực rỡ và chan chứa tình yêu thương.'
      ],
      audioNarration: 'Điều Kì Diệu. Mỗi người sinh ra trên thế giới này đều là một cá thể độc đáo và kỳ diệu. Bạn có thể có giọng nói trong trẻo, bạn khác lại có đôi bàn tay khéo léo vẽ tranh, có bạn lại sở hữu trái tim nhân hậu biết lắng nghe. Chính sự đa dạng và khác biệt đó đã tạo nên một thế giới muôn màu rực rỡ và chan chứa tình yêu thương.',
      vocabularyNotes: [
        { word: 'Độc đáo', meaning: 'Có nét riêng biệt, đặc sắc không giống ai.' },
        { word: 'Nhân hậu', meaning: 'Hiền lành và giàu lòng thương người.' }
      ]
    },
    questions: [
      {
        id: 'tv4-b1-q1',
        type: 'bubble_choice',
        questionText: 'Bài học muốn gửi gắm thông điệp gì quan trọng nhất đến mỗi chúng ta?',
        audioText: 'Bài học muốn gửi gắm thông điệp gì quan trọng nhất?',
        points: 15,
        options: [
          { id: 'a', label: 'Tôn trọng sự khác biệt và tự hào về bản thân 🌈', isCorrect: true },
          { id: 'b', label: 'Mọi người phải giống hệt nhau' },
          { id: 'c', label: 'Chỉ người vẽ đẹp mới là tài giỏi' }
        ]
      }
    ]
  },

  'tv-g4-b2': {
    passage: {
      title: 'Thi Nhạc',
      author: 'Nguyễn Quang Sáng',
      genre: 'prose',
      content: [
        'Trong khu rừng xanh, ngày hội thi âm nhạc diễn ra vô cùng sôi nổi.',
        'Chú Vàng Anh mang đến bài hát trong trẻo như giọt sương mai.',
        'Bác Ve Sầu kéo đàn vĩ cầm ngân vang rạo rực khúc ca mùa hạ.',
        'Ai nấy đều say mê cống hiến hết tài năng vì tình yêu nghệ thuật cao đẹp.'
      ],
      audioNarration: 'Thi Nhạc. Tác giả Nguyễn Quang Sáng. Trong khu rừng xanh, ngày hội thi âm nhạc diễn ra vô cùng sôi nổi. Chú Vàng Anh mang đến bài hát trong trẻo như giọt sương mai. Bác Ve Sầu kéo đàn vĩ cầm ngân vang rạo rực khúc ca mùa hạ. Ai nấy đều say mê cống hiến hết tài năng vì tình yêu nghệ thuật cao đẹp.',
      vocabularyNotes: [
        { word: 'Rạo rực', meaning: 'Trạng thái phấn khởi, nôn nao trong lòng.' },
        { word: 'Cống hiến', meaning: 'Dốc hết tâm sức để đóng góp cho điều tốt đẹp.' }
      ]
    },
    questions: [
      {
        id: 'tv4-b2-q1',
        type: 'bubble_choice',
        questionText: 'Tiếng hát của chú Vàng Anh được miêu tả giống như điều gì?',
        audioText: 'Tiếng hát của chú Vàng Anh được miêu tả giống như điều gì?',
        points: 15,
        options: [
          { id: 'a', label: 'Trong trẻo như giọt sương mai 🎶', isCorrect: true },
          { id: 'b', label: 'Ầm ầm như tiếng thác đổ' },
          { id: 'c', label: 'Trầm đục như tiếng sấm' }
        ]
      }
    ]
  },

  // =========================================================================
  // TIẾNG VIỆT LỚP 5 (SGK KẾT NỐI TRI THỨC)
  // =========================================================================
  'tv-g5-b1': {
    passage: {
      title: 'Thư Gửi Các Học Sinh',
      author: 'Hồ Chí Minh',
      genre: 'prose',
      content: [
        'Các em học sinh,',
        'Ngày hôm nay là ngày khai trường đầu tiên ở nước Việt Nam Dân chủ Cộng hòa.',
        'Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em.',
        'Bác mong các em hãy cố gắng siêng năng học tập, ngoan ngoãn, vâng lời thầy yêu bạn.'
      ],
      audioNarration: 'Thư Gửi Các Học Sinh. Tác giả Hồ Chí Minh. Các em học sinh, Ngày hôm nay là ngày khai trường đầu tiên ở nước Việt Nam Dân chủ Cộng hòa. Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em. Bác mong các em hãy cố gắng siêng năng học tập, ngoan ngoãn, vâng lời thầy yêu bạn.',
      vocabularyNotes: [
        { word: 'Cường quốc năm châu', meaning: 'Các nước lớn mạnh, phát triển trên toàn thế giới.' },
        { word: 'Đài vinh quang', meaning: 'Nơi tôn vinh những thành tựu vẻ vang, rạng rỡ.' }
      ]
    },
    questions: [
      {
        id: 'tv5-b1-q1',
        type: 'bubble_choice',
        questionText: 'Theo lời dạy của Bác Hồ, để sánh vai cùng các cường quốc năm châu, thiếu nhi cần làm gì?',
        audioText: 'Theo lời dạy của Bác Hồ, để sánh vai cùng các cường quốc năm châu, thiếu nhi cần làm gì?',
        points: 15,
        options: [
          { id: 'a', label: 'Cố gắng siêng năng học tập, rèn luyện đạo đức thật tốt 🇻🇳', isCorrect: true },
          { id: 'b', label: 'Chỉ cần vui chơi giải trí' },
          { id: 'c', label: 'Không cần đến trường học tập' }
        ]
      }
    ]
  },

  'tv-g5-b3': {
    passage: {
      title: 'Quang Cảnh Làng Mạc Ngày Mùa',
      author: 'Tô Hoài',
      genre: 'prose',
      content: [
        'Mùa đông, giữa ngày mùa, làng quê toàn màu vàng — những màu vàng rất khác nhau.',
        'Màu lúa chín dưới đồng vàng xuộm lại. Nắng nhạt ngả màu vàng hoe.',
        'Trong vườn, chùm xoan vàng lịm không trông thấy cuống. Từng chiếc lá mít vàng ối.',
        'Tất cả đượm một màu trù phú, đầm ấm lạ lùng của một làng quê Việt Nam no ấm.'
      ],
      audioNarration: 'Quang Cảnh Làng Mạc Ngày Mùa. Tác giả Tô Hoài. Mùa đông, giữa ngày mùa, làng quê toàn màu vàng — những màu vàng rất khác nhau. Màu lúa chín dưới đồng vàng xuộm lại. Nắng nhạt ngả màu vàng hoe. Trong vườn, chùm xoan vàng lịm không trông thấy cuống. Từng chiếc lá mít vàng ối. Tất cả đượm một màu trù phú, đầm ấm lạ lùng của một làng quê Việt Nam no ấm.',
      vocabularyNotes: [
        { word: 'Vàng xuộm', meaning: 'Màu vàng đậm của lúa chín rộ khắp cánh đồng.' },
        { word: 'Trù phú', meaning: 'Giàu có, dồi dào của cải nông sản.' }
      ]
    },
    questions: [
      {
        id: 'tv5-b3-q1',
        type: 'bubble_choice',
        questionText: 'Bài văn thể hiện vẻ đẹp trù phú của làng quê qua gam màu chủ đạo nào?',
        audioText: 'Bài văn thể hiện vẻ đẹp trù phú của làng quê qua gam màu chủ đạo nào?',
        points: 15,
        options: [
          { id: 'a', label: 'Sắc vàng đa dạng và ấm no của mùa màng 🌾', isCorrect: true },
          { id: 'b', label: 'Màu xanh biếc của rừng cây' },
          { id: 'c', label: 'Màu đỏ rực của hoa phượng' }
        ]
      }
    ]
  }
};
