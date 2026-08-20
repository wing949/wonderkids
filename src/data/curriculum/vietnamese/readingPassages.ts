import { ReadingPassage, Question } from '../../../types';

export interface ReadingLessonBundle {
  passage: ReadingPassage;
  questions: Question[];
}

export const VIETNAMESE_READING_PASSAGES: Record<string, ReadingLessonBundle> = {
  // =========================================================================
  // TIẾNG VIỆT LỚP 2 (SGK KẾT NỐI TRI THỨC / CHÂN TRỜI SÁNG TẠO)
  // =========================================================================

  // Bài 1: Tôi là học sinh lớp 2
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
          { id: 'c', label: 'Cảm thấy còn buồn ngủ và mệt mỏi' },
        ]
      },
      {
        id: 'tv2-b1-q2',
        type: 'bubble_choice',
        questionText: 'Đến trường, các bạn học sinh tíu tít kể cho nhau nghe về điều gì?',
        audioText: 'Các bạn học sinh tíu tít kể cho nhau nghe về điều gì?',
        points: 15,
        options: [
          { id: 'a', label: 'Kể về những chuyến đi chơi mùa hè kỳ thú 🏖️', isCorrect: true },
          { id: 'b', label: 'Kể về những bài toán khó' },
          { id: 'c', label: 'Kể về đồ chơi mới mua' },
        ]
      },
      {
        id: 'tv2-b1-q3',
        type: 'fill_blank',
        questionText: 'Điền từ ngữ thích hợp trong bài đọc vào chỗ trống:',
        templateText: 'Khi hồi trống trường vang lên, bạn nhỏ tự hào thầm nhủ: "Mình sẽ học thật [___] và yêu thương bạn bè!"',
        points: 20,
        options: [
          { id: 'a', label: 'chăm chỉ ✨', isCorrect: true },
          { id: 'b', label: 'nhanh nhẹn' },
          { id: 'c', label: 'vui vẻ' },
        ]
      }
    ]
  },

  // Bài 2: Ngày hôm qua đâu rồi?
  'tv-g2-b2': {
    passage: {
      title: 'Ngày hôm qua đâu rồi?',
      author: 'Bế Kiến Quốc',
      genre: 'poem',
      content: [
        'Em cầm tờ lịch cũ:\n— Ngày hôm qua đâu rồi?\nRa ngoài sân hỏi nụ\nNụ hồng vừa nở hoa.\n\n— Ngày hôm qua ở lại\nTrong hạt lúa mẹ trồng\nCánh đồng chờ gặt hái\nChín vàng màu ước mong.',
        '— Ngày hôm qua ở lại\nTrên cành hoa trong vườn\nNụ hoa mầm thơm ngát\nĐang tỏa hương ngát lừng.',
        '— Ngày hôm qua ở lại\nTrong vở hồng của con\nCon học hành chăm chỉ\nLà ngày qua vẫn còn.'
      ],
      audioNarration: 'Ngày hôm qua đâu rồi? Tác giả Bế Kiến Quốc. Em cầm tờ lịch cũ: Ngày hôm qua đâu rồi? Ra ngoài sân hỏi nụ, Nụ hồng vừa nở hoa. Ngày hôm qua ở lại, Trong hạt lúa mẹ trồng, Cánh đồng chờ gặt hái, Chín vàng màu ước mong. Ngày hôm qua ở lại, Trên cành hoa trong vườn, Nụ hoa mầm thơm ngát, Đang tỏa hương ngát lừng. Ngày hôm qua ở lại, Trong vở hồng của con, Con học hành chăm chỉ, Là ngày qua vẫn còn.',
      vocabularyNotes: [
        { word: 'Tờ lịch cũ', meaning: 'Tờ lịch của ngày đã trôi qua, được bóc ra.' },
        { word: 'Ước mong', meaning: 'Mong muốn, hy vọng vào một kết quả tốt đẹp phía trước.' },
        { word: 'Vở hồng', meaning: 'Ý chỉ cuốn vở học sinh sạch đẹp, ghi điểm tốt và chữ viết nắn nót.' }
      ]
    },
    questions: [
      {
        id: 'tv2-b2-q1',
        type: 'bubble_choice',
        questionText: 'Bạn nhỏ trong bài thơ đã hỏi ai câu hỏi "Ngày hôm qua đâu rồi?"?',
        audioText: 'Bạn nhỏ trong bài thơ đã hỏi ai?',
        points: 15,
        options: [
          { id: 'a', label: 'Hỏi nụ hồng ngoài sân 🌹', isCorrect: true },
          { id: 'b', label: 'Hỏi bác bảo vệ trường' },
          { id: 'c', label: 'Hỏi chiếc đồng hồ treo tường' }
        ]
      },
      {
        id: 'tv2-b2-q2',
        type: 'bubble_choice',
        questionText: 'Theo bài thơ, "Ngày hôm qua" ở lại trong những điều gì?',
        audioText: 'Ngày hôm qua ở lại trong những điều gì?',
        points: 15,
        options: [
          { id: 'a', label: 'Trong hạt lúa mẹ trồng, nụ hoa nở và vở hồng của con 🌾', isCorrect: true },
          { id: 'b', label: 'Trong giấc ngủ say của bé' },
          { id: 'c', label: 'Trong chiếc cặp sách mới' }
        ]
      },
      {
        id: 'tv2-b2-q3',
        type: 'bubble_choice',
        questionText: 'Khổ thơ cuối khuyên các bạn học sinh điều gì ý nghĩa nhất?',
        audioText: 'Khổ thơ cuối khuyên em điều gì?',
        points: 20,
        options: [
          { id: 'a', label: 'Chăm chỉ học tập mỗi ngày để thời gian không trôi qua lãng phí ⭐', isCorrect: true },
          { id: 'b', label: 'Phải đi ngủ thật sớm' },
          { id: 'c', label: 'Phải giữ gìn tờ lịch cũ cẩn thận' }
        ]
      }
    ]
  },

  // Bài 3: Niềm vui của Bi và Bống
  'tv-g2-b3': {
    passage: {
      title: 'Niềm vui của Bi và Bống',
      author: 'Theo SGK Tiếng Việt 2',
      genre: 'story',
      content: [
        'Khi cơn mưa rào vừa tạnh, mặt trời hé rạng và một chiếc cầu vồng bảy sắc lung linh hiện ra trên nền trời xanh biếc.',
        'Bi thích thú chỉ tay lên trời reo to: "Bống ơi nhìn kìa! Cầu vồng đẹp quá! Anh nghe người ta bảo dưới chân cầu vồng có chôn giấu một hũ vàng to lắm đấy!"',
        'Bống chớp chớp mắt hỏi: "Thế nếu tìm được hũ vàng ấy, anh Bi sẽ làm gì?". Bi mỉm cười hào hứng: "Anh sẽ mua cho em một búp bê thật đẹp và một chiếc váy hồng công chúa lộng lẫy!"',
        'Bống nghe vậy ôm chầm lấy anh Bi và vui vẻ nói: "Em cũng sẽ mua tặng anh Bi một chiếc ô tô đồ chơi điều khiển từ xa và một bộ cờ vua thật xịn!". Hai anh em cùng cười vang rộn rã dưới ánh cầu vồng ấm áp.'
      ],
      audioNarration: 'Niềm vui của Bi và Bống. Khi cơn mưa rào vừa tạnh, mặt trời hé rạng và một chiếc cầu vồng bảy sắc lung linh hiện ra trên nền trời xanh biếc. Bi thích thú chỉ tay lên trời reo to: Bống ơi nhìn kìa! Cầu vồng đẹp quá! Anh nghe người ta bảo dưới chân cầu vồng có chôn giấu một hũ vàng to lắm đấy! Bống chớp chớp mắt hỏi: Thế nếu tìm được hũ vàng ấy, anh Bi sẽ làm gì? Bi mỉm cười hào hứng: Anh sẽ mua cho em một búp bê thật đẹp và một chiếc váy hồng công chúa lộng lẫy! Bống nghe vậy ôm chầm lấy anh Bi và vui vẻ nói: Em cũng sẽ mua tặng anh Bi một chiếc ô tô đồ chơi điều khiển từ xa và một bộ cờ vua thật xịn! Hai anh em cùng cười vang rộn rã dưới ánh cầu vồng ấm áp.',
      vocabularyNotes: [
        { word: 'Cầu vồng', meaning: 'Hiện tượng quang học thiên nhiên có 7 dải màu rực rỡ xuất hiện sau cơn mưa.' },
        { word: 'Hũ vàng', meaning: 'Vật báu trong câu chuyện tưởng tượng của hai bạn nhỏ.' }
      ]
    },
    questions: [
      {
        id: 'tv2-b3-q1',
        type: 'bubble_choice',
        questionText: 'Nếu tìm được hũ vàng dưới chân cầu vồng, anh Bi ước muốn mua gì cho em Bống?',
        audioText: 'Anh Bi ước muốn mua gì cho em Bống?',
        points: 15,
        options: [
          { id: 'a', label: 'Mua búp bê xinh đẹp và váy hồng công chúa 👗', isCorrect: true },
          { id: 'b', label: 'Mua bánh kẹo và truyện tranh' },
          { id: 'c', label: 'Mua xe đạp mới' }
        ]
      },
      {
        id: 'tv2-b3-q2',
        type: 'bubble_choice',
        questionText: 'Câu chuyện thể hiện tình cảm gì đáng quý giữa hai anh em Bi và Bống?',
        audioText: 'Câu chuyện thể hiện tình cảm gì?',
        points: 20,
        options: [
          { id: 'a', label: 'Tình cảm anh em yêu thương, luôn nghĩ và nhường nhịn cho nhau ❤️', isCorrect: true },
          { id: 'b', label: 'Tranh giành đồ chơi với nhau' },
          { id: 'c', label: 'Sợ sấm sét sau cơn mưa' }
        ]
      }
    ]
  },

  // Bài 4: Làm việc thật là vui
  'tv-g2-b4': {
    passage: {
      title: 'Làm việc thật là vui',
      author: 'Tô Hoài',
      genre: 'prose',
      content: [
        'Quanh ta, mọi vật, mọi người đều làm việc.',
        'Cái đồng hồ tích tắc, tích tắc báo phút, báo giờ. Con gà trống gáy vang te te te, gọi mọi người mau thức dậy đón bình minh rực rỡ. Con tu hú kêu tu hú, tu hú báo mùa vải chín thơm lừng.',
        'Chim bắt sâu bảo vệ mùa màng tươi tốt. Cỏ hoa tỏa hương khoe sắc, làm cho cuộc đời thêm rực rỡ và ngát hương.',
        'Như mọi vật, mọi người, bé cũng làm việc. Bé làm bài, bé đi học, bé quét nhà, nhặt rau giúp mẹ. Bé bận rộn suốt cả ngày, nhưng bé lúc nào cũng rạng rỡ và vui vẻ.'
      ],
      audioNarration: 'Làm việc thật là vui. Tác giả Tô Hoài. Quanh ta, mọi vật, mọi người đều làm việc. Cái đồng hồ tích tắc, tích tắc báo phút, báo giờ. Con gà trống gáy vang te te te, gọi mọi người mau thức dậy đón bình minh rực rỡ. Con tu hú kêu tu hú, tu hú báo mùa vải chín thơm lừng. Chim bắt sâu bảo vệ mùa màng tươi tốt. Cỏ hoa tỏa hương khoe sắc, làm cho cuộc đời thêm rực rỡ và ngát hương. Như mọi vật, mọi người, bé cũng làm việc. Bé làm bài, bé đi học, bé quét nhà, nhặt rau giúp mẹ. Bé bận rộn suốt cả ngày, nhưng bé lúc nào cũng rạng rỡ và vui vẻ.',
      vocabularyNotes: [
        { word: 'Tích tắc', meaning: 'Tiếng kêu nhịp nhàng, đều đặn của chiếc đồng hồ kim.' },
        { word: 'Bình minh', meaning: 'Khoảng thời gian mặt trời bắt đầu mọc buổi sáng sớm.' }
      ]
    },
    questions: [
      {
        id: 'tv2-b4-q1',
        type: 'bubble_choice',
        questionText: 'Trong bài đọc, chiếc đồng hồ làm công việc gì?',
        audioText: 'Chiếc đồng hồ làm công việc gì?',
        points: 15,
        options: [
          { id: 'a', label: 'Tích tắc báo phút, báo giờ ⏰', isCorrect: true },
          { id: 'b', label: 'Kêu tu hú báo mùa vải chín' },
          { id: 'c', label: 'Gáy vang gọi mọi người thức dậy' }
        ]
      },
      {
        id: 'tv2-b4-q2',
        type: 'bubble_choice',
        questionText: 'Mặc dù bận rộn làm bài và giúp mẹ việc nhà, tâm trạng của bé như thế nào?',
        audioText: 'Tâm trạng của bé như thế nào?',
        points: 15,
        options: [
          { id: 'a', label: 'Lúc nào cũng rạng rỡ và vui vẻ 😄', isCorrect: true },
          { id: 'b', label: 'Cảm thấy mệt mỏi và chán nản' },
          { id: 'c', label: 'Chỉ muốn nằm xem ti vi' }
        ]
      }
    ]
  },

  // Bài 7: Cây xấu hổ
  'tv-g2-b7': {
    passage: {
      title: 'Cây xấu hổ',
      author: 'Theo Trần Hoài Dương',
      genre: 'story',
      content: [
        'Bờ suối có một bụi cây xấu hổ nhỏ nhắn, lá biếc xanh mềm mại.',
        'Bỗng một cơn gió lạ thổi qua làm bụi cây xào xạc. Cây xấu hổ giật mình, vội vàng khép cụp những hàng lá nhỏ li ti lại và nằm im e ấp.',
        'Một chú chim xanh biếc với bộ lông óng ánh tuyệt đẹp sà xuống đậu trên cành cây gần đó. Chú cất tiếng hót véo von, lảnh lót làm xao động cả khu rừng yên tĩnh.',
        'Các loài cây xung quanh đều xôn xao khen ngợi chú chim xinh đẹp. Cây xấu hổ lúc này mới he hé mở dần những tán lá ra thì chú chim đã vỗ cánh bay mất. Cây xấu hổ tiếc nuối tự nhủ: "Lần sau mình sẽ dũng cảm hơn, không e dè nhút nhát nữa!"'
      ],
      audioNarration: 'Cây xấu hổ. Tác giả Trần Hoài Dương. Bờ suối có một bụi cây xấu hổ nhỏ nhắn, lá biếc xanh mềm mại. Bỗng một cơn gió lạ thổi qua làm bụi cây xào xạc. Cây xấu hổ giật mình, vội vàng khép cụp những hàng lá nhỏ li ti lại và nằm im e ấp. Một chú chim xanh biếc với bộ lông óng ánh tuyệt đẹp sà xuống đậu trên cành cây gần đó. Chú cất tiếng hót véo von, lảnh lót làm xao động cả khu rừng yên tĩnh. Các loài cây xung quanh đều xôn xao khen ngợi chú chim xinh đẹp. Cây xấu hổ lúc này mới he hé mở dần những tán lá ra thì chú chim đã vỗ cánh bay mất. Cây xấu hổ tiếc nuối tự nhủ: Lần sau mình sẽ dũng cảm hơn, không e dè nhút nhát nữa!',
      vocabularyNotes: [
        { word: 'Cây xấu hổ', meaning: 'Còn gọi là cây trinh nữ, khi chạm vào thì lá tự động khép cụp lại.' },
        { word: 'E ấp', meaning: 'Dáng vẻ khép nép, e lệ, rụt rè đáng yêu.' },
        { word: 'Lảnh lót', meaning: 'Âm thanh tiếng hót trong trẻo, cao và vang xa.' }
      ]
    },
    questions: [
      {
        id: 'tv2-b7-q1',
        type: 'bubble_choice',
        questionText: 'Khi có tiếng gió xào xạc thổi qua, cây xấu hổ đã làm gì?',
        audioText: 'Cây xấu hổ đã làm gì?',
        points: 15,
        options: [
          { id: 'a', label: 'Vội vàng khép cụp những hàng lá li ti lại 🌿', isCorrect: true },
          { id: 'b', label: 'Vươn cao cành đón gió' },
          { id: 'c', label: 'Rung rinh nhảy múa' }
        ]
      },
      {
        id: 'tv2-b7-q2',
        type: 'bubble_choice',
        questionText: 'Vì sao cây xấu hổ cảm thấy tiếc nuối khi chú chim xanh bay đi?',
        audioText: 'Vì sao cây xấu hổ cảm thấy tiếc nuối?',
        points: 20,
        options: [
          { id: 'a', label: 'Vì nhút nhát khép lá nên không kịp ngắm nhìn chú chim tuyệt đẹp 🐦', isCorrect: true },
          { id: 'b', label: 'Vì chim làm gãy cành cây' },
          { id: 'c', label: 'Vì chim không chịu hát' }
        ]
      }
    ]
  },

  // Bài 9: Cô giáo lớp em
  'tv-g2-b9': {
    passage: {
      title: 'Cô giáo lớp em',
      author: 'Nguyễn Xuân Sanh',
      genre: 'poem',
      content: [
        'Sáng nào em đến lớp\nCũng thấy cô đến rồi\nĐáp lời "Chào cô ạ!"\nCô mỉm cười thật tươi.',
        'Cô dạy em tập viết\nGió đưa thoảng hương nhài\nNắng ghé vào cửa lớp\nXem chúng em học bài.',
        'Những lời cô giáo giảng\nẤm trang vở thơm tho\nYêu thương em ngắm mãi\nNụ cười cô hiền hòa.'
      ],
      audioNarration: 'Cô giáo lớp em. Tác giả Nguyễn Xuân Sanh. Sáng nào em đến lớp, Cũng thấy cô đến rồi. Đáp lời Chào cô ạ! Cô mỉm cười thật tươi. Cô dạy em tập viết, Gió đưa thoảng hương nhài, Nắng ghé vào cửa lớp, Xem chúng em học bài. Những lời cô giáo giảng, Ấm trang vở thơm tho, Yêu thương em ngắm mãi, Nụ cười cô hiền hòa.',
      vocabularyNotes: [
        { word: 'Hương nhài', meaning: 'Mùi hương thơm ngát, dịu nhẹ của hoa nhài trắng.' },
        { word: 'Hiền hòa', meaning: 'Hiền từ, dịu dàng, tạo cảm giác thân thương, ấm áp.' }
      ]
    },
    questions: [
      {
        id: 'tv2-b9-q1',
        type: 'bubble_choice',
        questionText: 'Mỗi sáng khi học sinh chào cô giáo, cô đáp lại như thế nào?',
        audioText: 'Cô đáp lại như thế nào?',
        points: 15,
        options: [
          { id: 'a', label: 'Cô mỉm cười thật tươi và hiền hòa 😊', isCorrect: true },
          { id: 'b', label: 'Cô vẫy tay từ xa' },
          { id: 'c', label: 'Cô nghiêm nghị nhắc nhở' }
        ]
      },
      {
        id: 'tv2-b9-q2',
        type: 'bubble_choice',
        questionText: 'Hình ảnh nào trong bài thơ được nhân hóa như một người bạn ghé vào xem các em học bài?',
        audioText: 'Hình ảnh nào ghé vào xem các em học bài?',
        points: 20,
        options: [
          { id: 'a', label: 'Ánh nắng ấm áp ghé vào cửa lớp ☀️', isCorrect: true },
          { id: 'b', label: 'Chú bướm vàng' },
          { id: 'c', label: 'Cơn mưa rào' }
        ]
      }
    ]
  },

  // Bài 17: Gọi bạn
  'tv-g2-b17': {
    passage: {
      title: 'Gọi bạn',
      author: 'Định Hải',
      genre: 'poem',
      content: [
        'Tự xa xưa thuở nào\nTrong rừng xanh sâu thẳm\nĐôi bạn sống cùng nhau\nBê Vàng và Dê Trắng.',
        'Một năm, trời hạn hán\nSuối cạn, cỏ héo khô\nLấy gì nuôi đôi bạn\nChờ mưa đến bao giờ?',
        'Bê Vàng đi tìm cỏ\nLang thang quên đường về\nDê Trắng thương bạn quá\nChạy khắp nẻo tìm Bê.',
        'Đến bây giờ Dê Trắng\nVẫn gọi hoài: "Bê! Bê!"'
      ],
      audioNarration: 'Gọi bạn. Tác giả Định Hải. Tự xa xưa thuở nào, Trong rừng xanh sâu thẳm, Đôi bạn sống cùng nhau: Bê Vàng và Dê Trắng. Một năm, trời hạn hán, Suối cạn, cỏ héo khô, Lấy gì nuôi đôi bạn, Chờ mưa đến bao giờ? Bê Vàng đi tìm cỏ, Lang thang quên đường về, Dê Trắng thương bạn quá, Chạy khắp nẻo tìm Bê. Đến bây giờ Dê Trắng, Vẫn gọi hoài: Bê! Bê!',
      vocabularyNotes: [
        { word: 'Hạn hán', meaning: 'Hiện tượng thời tiết nắng nóng kéo dài, không có mưa làm đồng ruộng khô nứt.' },
        { word: 'Khắp nẻo', meaning: 'Đi khắp mọi nơi, mọi ngả đường tìm kiếm.' }
      ]
    },
    questions: [
      {
        id: 'tv2-b17-q1',
        type: 'bubble_choice',
        questionText: 'Vì sao Bê Vàng phải rời xa rừng xanh đi tìm cỏ?',
        audioText: 'Vì sao Bê Vàng phải rời xa rừng xanh?',
        points: 15,
        options: [
          { id: 'a', label: 'Vì trời hạn hán, suối cạn khô và hết cỏ ăn 🌾', isCorrect: true },
          { id: 'b', label: 'Vì muốn đi khám phá thế giới' },
          { id: 'c', label: 'Vì giận dỗi bạn Dê Trắng' }
        ]
      },
      {
        id: 'tv2-b17-q2',
        type: 'bubble_choice',
        questionText: 'Tiếng kêu "Bê! Bê!" của Dê Trắng thể hiện tình cảm gì?',
        audioText: 'Tiếng kêu Bê! Bê! thể hiện điều gì?',
        points: 20,
        options: [
          { id: 'a', label: 'Tình bạn thủy chung, son sắt, thương nhớ khôn nguôi ❤️', isCorrect: true },
          { id: 'b', label: 'Tiếng kêu khi đói bụng' },
          { id: 'c', label: 'Tiếng cười vui đùa' }
        ]
      }
    ]
  },

  // Bài 27: Chuyện bốn mùa
  'tv-g2-b27': {
    passage: {
      title: 'Chuyện bốn mùa',
      author: 'Theo Từ Nguyên Tĩnh',
      genre: 'story',
      content: [
        'Một ngày đầu năm, bốn nàng tiên Xuân, Hạ, Thu, Đông gặp nhau trên đỉnh núi mây phủ.',
        'Đông cầm tay Xuân bảo: "Chị là người sung sướng nhất trần gian, ai cũng yêu quý chị vì chị về làm cây cối đâm chồi nảy lộc tươi tốt."',
        'Xuân dịu dàng nói: "Nhờ có nàng Hạ sưởi ấm thì hoa trái mới chín mọng ngọt lành, các bạn học sinh mới được nghỉ hè thỏa thích!". Nàng Hạ lại vui vẻ ngợi ca nàng Thu: "Có Thu mới có vầng trăng rằm sáng trong, có đêm hội Trung thu rước đèn phá cỗ rộn rã!"',
        'Bà Đất mỉm cười hiền từ bước đến: "Cả bốn nàng tiên đều có ích và đáng yêu! Xuân làm lộc biếc, Hạ cho trái ngọt, Thu mang trăng sáng, Đông ấp ủ mầm non chờ ngày thức giấc. Mùa nào cũng mang lại vẻ đẹp diệu kỳ cho thế gian!"'
      ],
      audioNarration: 'Chuyện bốn mùa. Tác giả Từ Nguyên Tĩnh. Một ngày đầu năm, bốn nàng tiên Xuân, Hạ, Thu, Đông gặp nhau trên đỉnh núi mây phủ. Đông cầm tay Xuân bảo: Chị là người sung sướng nhất trần gian, ai cũng yêu quý chị vì chị về làm cây cối đâm chồi nảy lộc tươi tốt. Xuân dịu dàng nói: Nhờ có nàng Hạ sưởi ấm thì hoa trái mới chín mọng ngọt lành, các bạn học sinh mới được nghỉ hè thỏa thích! Nàng Hạ lại vui vẻ ngợi ca nàng Thu: Có Thu mới có vầng trăng rằm sáng trong, có đêm hội Trung thu rước đèn phá cỗ rộn rã! Bà Đất mỉm cười hiền từ bước đến: Cả bốn nàng tiên đều có ích và đáng yêu! Xuân làm lộc biếc, Hạ cho trái ngọt, Thu mang trăng sáng, Đông ấp ủ mầm non chờ ngày thức giấc. Mùa nào cũng mang lại vẻ đẹp diệu kỳ cho thế gian!',
      vocabularyNotes: [
        { word: 'Đâm chồi nảy lộc', meaning: 'Cây cối bắt đầu mọc ra những mầm lá xanh non vào mùa xuân.' },
        { word: 'Ấp ủ', meaning: 'Giữ ấm, nuôi dưỡng và che chở chuẩn bị cho sự nảy mầm.' }
      ]
    },
    questions: [
      {
        id: 'tv2-b27-q1',
        type: 'bubble_choice',
        questionText: 'Theo lời Bà Đất, mỗi nàng tiên mang lại điều gì tuyệt vời cho cuộc sống?',
        audioText: 'Theo lời Bà Đất, mỗi mùa mang lại điều gì?',
        points: 20,
        options: [
          { id: 'a', label: 'Xuân cho lộc biếc, Hạ cho trái ngọt, Thu mang trăng rằm, Đông ấp ủ mầm xanh 🌸', isCorrect: true },
          { id: 'b', label: 'Chỉ có mùa Xuân là có ích' },
          { id: 'c', label: 'Mùa Đông không mang lại niềm vui nào' }
        ]
      }
    ]
  }
};
