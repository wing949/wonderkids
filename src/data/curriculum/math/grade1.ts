import { CurriculumTopic } from '../types';

export const MATH_GRADE_1_TOPICS: CurriculumTopic[] = [
  // ================= TẬP 1 (BÀI 1 ĐẾN BÀI 18) =================
  {
    id: 'math-g1-b1', semester: 1, lessonNumber: 1,
    title: 'Bài 1: Các số 0, 1, 2, 3, 4, 5',
    unit: 'Tập 1 - Chủ đề 1: Các số từ 0 đến 10',
    textbookPageRef: 'SGK Toán 1 Tập một — Trang 6, 7',
    description: 'Nhận biết, đọc, đếm và viết các số từ 0 đến 5 qua các đồ vật gần gũi xung quanh bé.',
    summary: 'Các số 0, 1, 2, 3, 4, 5 dùng để đếm và chỉ số lượng đồ vật.',
    keyPoints: ['Đếm xuôi: 0, 1, 2, 3, 4, 5.', 'Số 0 biểu thị không có vật nào.', 'Mỗi số tương ứng với một số lượng ngón tay hoặc đồ chơi.'],
    mascotTip: 'BoBo: Đếm từ từ từng quả táo bằng ngón tay trỏ nhé bạn nhỏ!',
    defaultQuestions: [
      {
        id: 'math-g1-b1-q1',
        type: 'bubble_choice',
        questionText: 'Bé hãy đếm xem trong tranh có tất cả bao nhiêu quả táo đỏ nhé?',
        audioText: 'Bé hãy đếm xem có tất cả bao nhiêu quả táo đỏ?',
        points: 10,
        visualType: 'counting',
        visualData: { itemEmoji: '🍎', itemCount: 4 },
        options: [
          { id: 'a', label: '4 quả táo 🍎', isCorrect: true },
          { id: 'b', label: '3 quả táo 🍎' },
          { id: 'c', label: '5 quả táo 🍎' },
        ]
      },
      {
        id: 'math-g1-b1-q2',
        type: 'bubble_choice',
        questionText: 'Số nào sau đây đứng ngay liền sau số 2?',
        audioText: 'Số nào đứng liền sau số 2?',
        points: 10,
        options: [
          { id: 'a', label: 'Số 3', isCorrect: true },
          { id: 'b', label: 'Số 1' },
          { id: 'c', label: 'Số 4' },
        ]
      }
    ]
  },
  {
    id: 'math-g1-b2', semester: 1, lessonNumber: 2,
    title: 'Bài 2: Các số 6, 7, 8, 9, 10',
    unit: 'Tập 1 - Chủ đề 1: Các số từ 0 đến 10',
    textbookPageRef: 'SGK Toán 1 Tập một — Trang 14, 15',
    description: 'Đếm, đọc, viết và hoàn thiện dãy số tự nhiên từ 6 đến 10.',
    summary: 'Các số 6, 7, 8, 9, 10 hoàn thiện dãy 10 số tự nhiên đầu tiên.',
    keyPoints: ['Đếm tiếp sau 5 là: 6, 7, 8, 9, 10.', '10 là số có hai chữ số nhỏ nhất.'],
    mascotTip: 'BoBo: Hai bàn tay của chúng mình xòe ra có tất cả đúng 10 ngón tay đấy!',
    defaultQuestions: [
      {
        id: 'math-g1-b2-q1',
        type: 'bubble_choice',
        questionText: 'Bé đếm xem đàn vịt bơi dưới hồ có tất cả bao nhiêu chú vịt vàng?',
        audioText: 'Đàn vịt có tất cả bao nhiêu chú vịt vàng?',
        points: 10,
        visualType: 'counting',
        visualData: { itemEmoji: '🐥', itemCount: 7 },
        options: [
          { id: 'a', label: '7 chú vịt 🐥', isCorrect: true },
          { id: 'b', label: '6 chú vịt 🐥' },
          { id: 'c', label: '8 chú vịt 🐥' },
        ]
      }
    ]
  },
  {
    id: 'math-g1-b3', semester: 1, lessonNumber: 3,
    title: 'Bài 3: Nhiều hơn, ít hơn, bằng nhau',
    unit: 'Tập 1 - Chủ đề 1: Các số từ 0 đến 10',
    textbookPageRef: 'SGK Toán 1 Tập một — Trang 20, 21',
    description: 'Nối đôi 1-1 để so sánh nhóm đồ vật nhiều hơn, ít hơn hoặc bằng nhau.',
    summary: 'So sánh số lượng: nhóm nhiều hơn, nhóm ít hơn, hoặc bằng nhau.',
    keyPoints: ['Ghép đôi từng vật của hai nhóm với nhau.', 'Nhóm nào còn thừa là nhóm đó nhiều hơn.'],
    mascotTip: 'BoBo: Thừa ra là nhiều hơn, thiếu là ít hơn bạn nha!',
    defaultQuestions: [
      {
        id: 'math-g1-b3-q1',
        type: 'bubble_choice',
        questionText: 'Quan sát hai nhóm quả dưới đây: Nhóm Dâu Tây (5 quả) và Nhóm Chuối (3 quả). Nhóm nào nhiều hơn?',
        audioText: 'Nhóm dâu tây và nhóm chuối, nhóm nào nhiều hơn?',
        points: 10,
        visualType: 'counting',
        visualData: { itemEmoji: '🍓', leftCount: 5, rightCount: 3 },
        options: [
          { id: 'a', label: 'Nhóm Dâu Tây nhiều hơn 🍓', isCorrect: true },
          { id: 'b', label: 'Nhóm Chuối nhiều hơn 🍌' },
          { id: 'c', label: 'Hai nhóm bằng nhau' },
        ]
      }
    ]
  },
  {
    id: 'math-g1-b4', semester: 1, lessonNumber: 4,
    title: 'Bài 4: So sánh số (Dấu >, <, =)',
    unit: 'Tập 1 - Chủ đề 1: Các số từ 0 đến 10',
    textbookPageRef: 'SGK Toán 1 Tập một — Trang 26, 27',
    description: 'Quy tắc dùng dấu lớn hơn (>), bé hơn (<) và bằng nhau (=).',
    summary: 'Dấu > (lớn hơn), dấu < (bé hơn), dấu = (bằng nhau).',
    keyPoints: ['Đầu nhọn của dấu luôn quay về phía số BÉ hơn.', 'Miệng há to luôn quay về phía số LỚN hơn.'],
    mascotTip: 'BoBo: Miệng cá sấu há to luôn đớp số lớn hơn bạn nhé!',
    defaultQuestions: [
      {
        id: 'math-g1-b4-q1',
        type: 'bubble_choice',
        questionText: 'Điền dấu thích hợp vào chỗ chấm: 7 ... 4',
        audioText: 'Bảy so với bốn điền dấu gì?',
        points: 10,
        options: [
          { id: 'a', label: '7 > 4 (Dấu lớn hơn)', isCorrect: true },
          { id: 'b', label: '7 < 4 (Dấu bé hơn)' },
          { id: 'c', label: '7 = 4 (Dấu bằng)' },
        ]
      }
    ]
  },
  {
    id: 'math-g1-b5', semester: 1, lessonNumber: 5,
    title: 'Bài 5: Mấy và mấy (Tách - gộp số)',
    unit: 'Tập 1 - Chủ đề 1: Các số từ 0 đến 10',
    textbookPageRef: 'SGK Toán 1 Tập một — Trang 32, 33',
    description: 'Sơ đồ tách - gộp số nền tảng cho phép tính cộng và phép trừ.',
    summary: 'Gộp 2 và 3 được 5; 5 gồm 4 và 1, hoặc 3 và 2.',
    keyPoints: ['Gộp lại để tìm số tổng.', 'Tách ra để tìm các thành phần.'],
    mascotTip: 'BoBo: Tách gộp số là bí kíp để sau này tính nhẩm siêu tốc!',
  },
  {
    id: 'math-g1-b6', semester: 1, lessonNumber: 6,
    title: 'Bài 6: Luyện tập chung Chủ đề 1',
    unit: 'Tập 1 - Chủ đề 1: Các số từ 0 đến 10',
    textbookPageRef: 'SGK Toán 1 Tập một — Trang 36, 37',
    description: 'Củng cố đếm, so sánh và sắp xếp thứ tự dãy số từ 0 đến 10.',
    summary: 'Thành thạo đếm xuôi, đếm ngược và so sánh trong phạm vi 10.',
    keyPoints: ['Sắp xếp thứ tự từ bé đến lớn và ngược lại.', 'Nhận biết vị trí các số.'],
    mascotTip: 'BoBo: Hoàn thành bài 6 là bạn đã nắm chắc các số từ 0 đến 10 rồi!',
  },
  {
    id: 'math-g1-b7', semester: 1, lessonNumber: 7,
    title: 'Bài 7: Hình vuông, hình tròn, hình tam giác, hình chữ nhật',
    unit: 'Tập 1 - Chủ đề 2: Làm quen với một số hình phẳng',
    textbookPageRef: 'SGK Toán 1 Tập một — Trang 40, 41',
    description: 'Nhận biết 4 hình phẳng cơ bản trong sách giáo khoa và đời sống.',
    summary: 'Hình vuông (4 cạnh bằng nhau), hình tròn (đường cong tròn), hình tam giác (3 cạnh), hình chữ nhật.',
    keyPoints: ['Biển báo giao thông hình tam giác, cái đĩa hình tròn, cánh cửa hình chữ nhật.'],
    mascotTip: 'BoBo: Ông mặt trời hình tròn, cánh buồm hình tam giác!',
    defaultQuestions: [
      {
        id: 'math-g1-b7-q1',
        type: 'bubble_choice',
        questionText: 'Chiếc bánh chưng ngày Tết của Việt Nam có dạng hình phẳng nào?',
        audioText: 'Bánh chưng có dạng hình phẳng nào?',
        points: 10,
        options: [
          { id: 'a', label: 'Hình vuông 🟩', isCorrect: true },
          { id: 'b', label: 'Hình tròn 🔵' },
          { id: 'c', label: 'Hình tam giác 🔺' },
        ]
      }
    ]
  },
  {
    id: 'math-g1-b8', semester: 1, lessonNumber: 8,
    title: 'Bài 8: Thực hành lắp ghép, xếp hình phẳng',
    unit: 'Tập 1 - Chủ đề 2: Làm quen với một số hình phẳng',
    textbookPageRef: 'SGK Toán 1 Tập một — Trang 44, 45',
    description: 'Dùng que tính và các mảnh ghép để tạo thành hình ngôi nhà, con thuyền.',
    summary: 'Ghép các hình phẳng đơn giản thành các bức tranh sinh động.',
    keyPoints: ['Ghép 2 hình tam giác tạo thành 1 hình vuông.', 'Xếp que tính tạo khung chữ nhật.'],
    mascotTip: 'BoBo: Cùng ghép mái nhà tam giác lên thân nhà vuông vắn nhé!',
  },
  {
    id: 'math-g1-b9', semester: 1, lessonNumber: 9,
    title: 'Bài 9: Khối lập phương, khối hộp chữ nhật',
    unit: 'Tập 1 - Chủ đề 3: Làm quen với một số hình khối',
    textbookPageRef: 'SGK Toán 1 Tập một — Trang 48, 49',
    description: 'Nhận biết các khối hình 3D trong thực tế (hộp quà, viên gạch, con xúc xắc).',
    summary: 'Khối lập phương có các mặt hình vuông; khối hộp chữ nhật có các mặt hình chữ nhật.',
    keyPoints: ['Con xúc xắc là khối lập phương.', 'Hộp sữa là khối hộp chữ nhật.'],
    mascotTip: 'BoBo: Khối hộp chữ nhật có thể xếp chồng lên nhau thành tòa tháp vững chãi!',
  },
  {
    id: 'math-g1-b10', semester: 1, lessonNumber: 10,
    title: 'Bài 10: Vị trí và định hướng trong không gian',
    unit: 'Tập 1 - Chủ đề 3: Làm quen với một số hình khối',
    textbookPageRef: 'SGK Toán 1 Tập một — Trang 52, 53',
    description: 'Phân biệt chính xác: Trên - Dưới, Trước - Sau, Trái - Phải, Ở giữa.',
    summary: 'Xác định vị trí các vật thể so với bản thân và không gian xung quanh.',
    keyPoints: ['Tay phải cầm bút, tay trái giữ vở.', 'Đèn trần ở trên, thảm trải ở dưới.'],
    mascotTip: 'BoBo: Đứng thẳng người, giơ tay phải lên vẫy chào BoBo nào!',
  },
  {
    id: 'math-g1-b11', semester: 1, lessonNumber: 11,
    title: 'Bài 11: Phép cộng trong phạm vi 10',
    unit: 'Tập 1 - Chủ đề 4: Phép cộng, phép trừ trong phạm vi 10',
    textbookPageRef: 'SGK Toán 1 Tập một — Trang 56, 57',
    description: 'Làm quen với dấu cộng (+) và ý nghĩa của việc gộp thêm vào.',
    summary: 'Phép cộng thể hiện hành động thêm vào, gộp chung lại.',
    keyPoints: ['Có 3 quả bóng, thêm 2 quả bóng nữa: 3 + 2 = 5.', 'Số nào cộng với 0 cũng bằng chính nó.'],
    mascotTip: 'BoBo: Thêm vào là cộng lại, đếm tất cả xem có bao nhiêu!',
    defaultQuestions: [
      {
        id: 'math-g1-b11-q1',
        type: 'keypad',
        questionText: 'Tính: 3 + 2 = ?',
        audioText: 'Ba cộng hai bằng mấy?',
        points: 10,
        visualType: 'counting',
        visualData: { itemEmoji: '🎈', leftCount: 3, rightCount: 2 },
        correctAnswer: '5'
      }
    ]
  },
  {
    id: 'math-g1-b12', semester: 1, lessonNumber: 12,
    title: 'Bài 12: Bảng cộng trong phạm vi 10',
    unit: 'Tập 1 - Chủ đề 4: Phép cộng, phép trừ trong phạm vi 10',
    textbookPageRef: 'SGK Toán 1 Tập một — Trang 64, 65',
    description: 'Ghi nhớ bảng cộng các số từ 1 đến 10 để tính nhẩm nhanh.',
    summary: 'Học thuộc lòng bảng cộng phạm vi 10.',
    keyPoints: ['4 + 3 = 7, 5 + 5 = 10, 6 + 4 = 10.', 'Đổi chỗ hai số hạng thì kết quả không đổi: 2 + 3 = 3 + 2 = 5.'],
    mascotTip: 'BoBo: Cặp số bạn thân có tổng bằng 10: 1+9, 2+8, 3+7, 4+6, 5+5!',
  },
  {
    id: 'math-g1-b13', semester: 1, lessonNumber: 13,
    title: 'Bài 13: Luyện tập chung Phép cộng',
    unit: 'Tập 1 - Chủ đề 4: Phép cộng, phép trừ trong phạm vi 10',
    textbookPageRef: 'SGK Toán 1 Tập một — Trang 72, 73',
    description: 'Rèn luyện tính nhẩm nhanh và giải bài toán có lời văn dạng thêm vào.',
    summary: 'Củng cố thành thạo kỹ năng cộng trong phạm vi 10.',
    keyPoints: ['Giải bài toán nhìn tranh viết phép tính cộng.'],
    mascotTip: 'BoBo: Nhìn kỹ tranh vẽ để tìm số ban đầu và số thêm vào nhé!',
  },
  {
    id: 'math-g1-b14', semester: 1, lessonNumber: 14,
    title: 'Bài 14: Phép trừ trong phạm vi 10',
    unit: 'Tập 1 - Chủ đề 4: Phép cộng, phép trừ trong phạm vi 10',
    textbookPageRef: 'SGK Toán 1 Tập một — Trang 76, 77',
    description: 'Làm quen với dấu trừ (-) và ý nghĩa của việc bớt đi, bay đi, ăn mất.',
    summary: 'Phép trừ thể hiện hành động bớt đi, tách rời.',
    keyPoints: ['Có 5 chú chim, 2 chú bay đi còn: 5 - 2 = 3.', 'Số nào trừ đi 0 cũng bằng chính nó; số nào trừ đi chính nó bằng 0.'],
    mascotTip: 'BoBo: Bớt đi, bay đi, cho bạn là làm phép trừ!',
    defaultQuestions: [
      {
        id: 'math-g1-b14-q1',
        type: 'keypad',
        questionText: 'Tính: 6 - 2 = ?',
        audioText: 'Sáu trừ hai bằng mấy?',
        points: 10,
        correctAnswer: '4'
      }
    ]
  },
  {
    id: 'math-g1-b15', semester: 1, lessonNumber: 15,
    title: 'Bài 15: Bảng trừ trong phạm vi 10',
    unit: 'Tập 1 - Chủ đề 4: Phép cộng, phép trừ trong phạm vi 10',
    textbookPageRef: 'SGK Toán 1 Tập một — Trang 84, 85',
    description: 'Ghi nhớ bảng trừ trong phạm vi 10 để tính nhẩm tốc độ.',
    summary: 'Học thuộc lòng bảng trừ trong phạm vi 10.',
    keyPoints: ['10 - 4 = 6; 10 - 7 = 3; 8 - 5 = 3.'],
    mascotTip: 'BoBo: Nhớ bảng cộng là suy ra bảng trừ siêu dễ dàng!',
  },
  {
    id: 'math-g1-b16', semester: 1, lessonNumber: 16,
    title: 'Bài 16: Luyện tập chung Phép cộng & Phép trừ',
    unit: 'Tập 1 - Chủ đề 4: Phép cộng, phép trừ trong phạm vi 10',
    textbookPageRef: 'SGK Toán 1 Tập một — Trang 92, 93',
    description: 'Kết hợp thành thạo phép tính cộng và trừ trong phạm vi 10.',
    summary: 'Tính giá trị biểu thức có 2 dấu phép tính: 5 + 3 - 2 = 6.',
    keyPoints: ['Thực hiện tính lần lượt từ trái sang phải.'],
    mascotTip: 'BoBo: Làm từ trái sang phải từng bước một để không nhầm nhé!',
  },
  {
    id: 'math-g1-b17', semester: 1, lessonNumber: 17,
    title: 'Bài 17: Ôn tập học kì 1',
    unit: 'Tập 1 - Chủ đề 5: Ôn tập học kì 1',
    textbookPageRef: 'SGK Toán 1 Tập một — Trang 96, 97',
    description: 'Tổng kết toàn bộ kiến thức số học, hình phẳng và phép tính nửa đầu năm.',
    summary: 'Ôn tập chắc chắn các số từ 0 đến 10 và các hình học cơ bản.',
    keyPoints: ['Thành thạo đếm, so sánh và cộng trừ trong phạm vi 10.'],
    mascotTip: 'BoBo: Sắp hoàn thành trọn vẹn Học Kỳ 1 rồi, cố lên bạn ơi!',
  },
  {
    id: 'math-g1-b18', semester: 1, lessonNumber: 18,
    title: 'Bài 18: Luyện tập chung học kì 1',
    unit: 'Tập 1 - Chủ đề 5: Ôn tập học kì 1',
    textbookPageRef: 'SGK Toán 1 Tập một — Trang 100, 101',
    description: 'Thử sức với bài kiểm tra tổng hợp cuối Học kỳ 1 nhận Cúp Ngôi Sao!',
    summary: 'Đánh giá năng lực toàn diện Học kỳ 1 môn Toán Lớp 1.',
    keyPoints: ['Tự tin làm bài và kiểm tra lại kết quả trước khi nộp.'],
    mascotTip: 'BoBo: Mở khóa Rương Báu Học Kỳ 1 nhận 100 XP ngay nào! 🎁',
  },

  // ================= TẬP 2 (BÀI 19 ĐẾN BÀI 40) =================
  {
    id: 'math-g1-b19', semester: 2, lessonNumber: 19,
    title: 'Bài 19: Các số có hai chữ số (từ 11 đến 20)',
    unit: 'Tập 2 - Chủ đề 6: Các số trong phạm vi 20',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 6, 7',
    description: 'Đếm, đọc, viết các số từ 11 đến 20 và hiểu cấu tạo số gồm 1 chục và các đơn vị.',
    summary: 'Số 14 gồm 1 chục và 4 đơn vị; số 20 gồm 2 chục.',
    keyPoints: ['Đếm tiếp sau 10: 11, 12, 13, 14, 15, 16, 17, 18, 19, 20.'],
    mascotTip: 'BoBo: 1 bó 10 que tính gọi là 1 chục que tính!',
    defaultQuestions: [
      {
        id: 'math-g1-b19-q1',
        type: 'bubble_choice',
        questionText: 'Số 16 gồm mấy chục và mấy đơn vị?',
        audioText: 'Số mười sáu gồm mấy chục và mấy đơn vị?',
        points: 10,
        options: [
          { id: 'a', label: '1 chục và 6 đơn vị ✨', isCorrect: true },
          { id: 'b', label: '6 chục và 1 đơn vị' },
          { id: 'c', label: '16 chục' },
        ]
      }
    ]
  },
  {
    id: 'math-g1-b20', semester: 2, lessonNumber: 20,
    title: 'Bài 20: Phép cộng (không nhớ) trong phạm vi 20',
    unit: 'Tập 2 - Chủ đề 6: Các số trong phạm vi 20',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 12, 13',
    description: 'Cộng số có hai chữ số với số có một chữ số dạng 12 + 3 = 15.',
    summary: 'Cộng hàng đơn vị với nhau rồi giữ nguyên chữ số hàng chục.',
    keyPoints: ['14 + 3 = 17 (lấy 4 + 3 = 7, viết 1 chục thành 17).'],
    mascotTip: 'BoBo: Lấy hàng đơn vị cộng với nhau trước nhé!',
    defaultQuestions: [
      {
        id: 'math-g1-b20-q1',
        type: 'keypad',
        questionText: 'Tính: 13 + 4 = ?',
        audioText: 'Mười ba cộng bốn bằng mấy?',
        points: 10,
        correctAnswer: '17'
      }
    ]
  },
  {
    id: 'math-g1-b21', semester: 2, lessonNumber: 21,
    title: 'Bài 21: Phép trừ (không nhớ) trong phạm vi 20',
    unit: 'Tập 2 - Chủ đề 6: Các số trong phạm vi 20',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 18, 19',
    description: 'Trừ số có hai chữ số cho số có một chữ số dạng 17 - 4 = 13.',
    summary: 'Trừ hàng đơn vị cho nhau rồi giữ nguyên chữ số 1 ở hàng chục.',
    keyPoints: ['18 - 5 = 13 (lấy 8 - 5 = 3, thêm 1 chục thành 13).'],
    mascotTip: 'BoBo: Trừ đơn vị trước: 8 trừ 5 bằng 3, ghép 1 chục là 13!',
  },
  {
    id: 'math-g1-b22', semester: 2, lessonNumber: 22,
    title: 'Bài 22: Luyện tập chung Phép tính phạm vi 20',
    unit: 'Tập 2 - Chủ đề 6: Các số trong phạm vi 20',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 24, 25',
    description: 'Rèn luyện thành thạo cộng trừ không nhớ trong phạm vi 20.',
    summary: 'Tính nhẩm nhanh các phép tính trong phạm vi 20.',
    keyPoints: ['Tính nhẩm dạng: 10 + 6 = 16, 16 - 6 = 10, 16 - 10 = 6.'],
    mascotTip: 'BoBo: Mối liên hệ diệu kỳ giữa phép cộng và phép trừ!',
  },
  {
    id: 'math-g1-b23', semester: 2, lessonNumber: 23,
    title: 'Bài 23: Bảng các số từ 1 đến 100',
    unit: 'Tập 2 - Chủ đề 7: Các số đến 100',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 28, 29',
    description: 'Làm quen bảng 100 số tự nhiên, các số tròn chục (10, 20, 30... 100).',
    summary: 'Bảng 100 ô gồm 10 hàng, mỗi hàng có 10 số liên tiếp.',
    keyPoints: ['Các số tròn chục: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100.', '100 là số có ba chữ số.'],
    mascotTip: 'BoBo: 10 chục chính là 1 trăm (100) đấy!',
  },
  {
    id: 'math-g1-b24', semester: 2, lessonNumber: 24,
    title: 'Bài 24: So sánh các số có hai chữ số',
    unit: 'Tập 2 - Chủ đề 7: Các số đến 100',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 36, 37',
    description: 'Quy tắc so sánh: So sánh chữ số hàng chục trước, nếu bằng nhau so sánh hàng đơn vị.',
    summary: 'Số nào có hàng chục lớn hơn thì số đó lớn hơn: 42 > 38.',
    keyPoints: ['35 < 53 (vì 3 chục bé hơn 5 chục).', '47 > 42 (vì cùng 4 chục nhưng 7 đơn vị lớn hơn 2 đơn vị).'],
    mascotTip: 'BoBo: So sánh hàng chục trước tiên bạn nha!',
  },
  {
    id: 'math-g1-b25', semester: 2, lessonNumber: 25,
    title: 'Bài 25: Dài hơn, ngắn hơn',
    unit: 'Tập 2 - Chủ đề 8: Đo độ dài',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 40, 41',
    description: 'So sánh trực tiếp chiều dài của hai hoặc ba đồ vật bằng mắt và đặt cạnh nhau.',
    summary: 'Nhận biết vật dài nhất, vật ngắn nhất trong nhóm.',
    keyPoints: ['Đặt một đầu của hai vật thẳng bằng nhau rồi so sánh đầu còn lại.'],
    mascotTip: 'BoBo: Đặt bằng mép đáy rồi mới so ngọn xem cái nào dài hơn nhé!',
  },
  {
    id: 'math-g1-b26', semester: 2, lessonNumber: 26,
    title: 'Bài 26: Đơn vị đo độ dài xăng-ti-mét (cm)',
    unit: 'Tập 2 - Chủ đề 8: Đo độ dài',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 44, 45',
    description: 'Làm quen thước kẻ có vạch chia xăng-ti-mét (cm) và cách đo vật.',
    summary: 'Xăng-ti-mét là đơn vị đo độ dài, viết tắt là cm.',
    keyPoints: ['Đặt vạch 0 cm trùng với một đầu của vật thể.', 'Đọc số ở vạch trùng với đầu kia.'],
    mascotTip: 'BoBo: Luôn bắt đầu đặt từ vạch số 0 trên thước kẻ nhé!',
    defaultQuestions: [
      {
        id: 'math-g1-b26-q1',
        type: 'bubble_choice',
        questionText: 'Xăng-ti-mét được viết tắt bằng chữ gì?',
        audioText: 'Xăng ti mét được viết tắt bằng chữ gì?',
        points: 10,
        options: [
          { id: 'a', label: 'cm ✨', isCorrect: true },
          { id: 'b', label: 'kg' },
          { id: 'c', label: 'km' },
        ]
      },
      {
        id: 'math-g1-b26-q2',
        type: 'bubble_choice',
        questionText: 'Quan sát cây bút chì trên thước kẻ, chiếc bút chì dài bao nhiêu xăng-ti-mét?',
        audioText: 'Chiếc bút chì dài bao nhiêu xăng ti mét?',
        points: 10,
        visualType: 'ruler',
        visualData: { lengthCm: 6 },
        options: [
          { id: 'a', label: '6 cm ✨', isCorrect: true },
          { id: 'b', label: '5 cm' },
          { id: 'c', label: '7 cm' },
        ]
      }
    ]
  },
  {
    id: 'math-g1-b27', semester: 2, lessonNumber: 27,
    title: 'Bài 27: Thực hành đo độ dài',
    unit: 'Tập 2 - Chủ đề 8: Đo độ dài',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 48, 49',
    description: 'Thực hành đo chiều dài hộp bút, quyển sách, gang tay của bé bằng thước cm.',
    summary: 'Vận dụng đo độ dài thực tế trong đời sống hàng ngày.',
    keyPoints: ['Ước lượng trước khi đo bằng thước.'],
    mascotTip: 'BoBo: Thử đo xem quyển SGK Toán 1 của bạn dài bao nhiêu cm nào!',
  },
  {
    id: 'math-g1-b28', semester: 2, lessonNumber: 28,
    title: 'Bài 28: Luyện tập chung Đo độ dài',
    unit: 'Tập 2 - Chủ đề 8: Đo độ dài',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 52, 53',
    description: 'Thực hiện phép tính với đơn vị đo cm: 5 cm + 3 cm = 8 cm.',
    summary: 'Cộng trừ các số đo độ dài kèm theo đơn vị cm.',
    keyPoints: ['Khi viết kết quả bắt buộc phải ghi kèm tên đơn vị cm.'],
    mascotTip: 'BoBo: 12 cm - 2 cm = 10 cm, nhớ ghi chữ cm ở kết quả nhé!',
  },
  {
    id: 'math-g1-b29', semester: 2, lessonNumber: 29,
    title: 'Bài 29: Phép cộng số có hai chữ số với số có một chữ số',
    unit: 'Tập 2 - Chủ đề 9: Phép cộng, phép trừ (không nhớ) trong phạm vi 100',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 56, 57',
    description: 'Đặt tính và tính dạng: 32 + 5 = 37.',
    summary: 'Cộng hàng đơn vị với nhau, hạ hàng chục xuống.',
    keyPoints: ['Đặt tính thẳng cột: đơn vị thẳng đơn vị, chục thẳng chục.'],
    mascotTip: 'BoBo: Đặt tính thẳng hàng dọc từ phải sang trái!',
  },
  {
    id: 'math-g1-b30', semester: 2, lessonNumber: 30,
    title: 'Bài 30: Phép cộng số có hai chữ số với số có hai chữ số',
    unit: 'Tập 2 - Chủ đề 9: Phép cộng, phép trừ (không nhớ) trong phạm vi 100',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 62, 63',
    description: 'Đặt tính và tính dạng: 24 + 35 = 59.',
    summary: 'Cộng đơn vị với đơn vị (4+5=9), cộng chục với chục (2+3=5).',
    keyPoints: ['24 + 35 = 59.'],
    mascotTip: 'BoBo: Cộng đơn vị trước, cộng chục sau!',
    defaultQuestions: [
      {
        id: 'math-g1-b30-q1',
        type: 'keypad',
        questionText: 'Đặt tính rồi tính: 23 + 14 = ?',
        audioText: 'Hai mươi ba cộng mười bốn bằng bao nhiêu?',
        points: 10,
        correctAnswer: '37'
      }
    ]
  },
  {
    id: 'math-g1-b31', semester: 2, lessonNumber: 31,
    title: 'Bài 31: Phép trừ số có hai chữ số cho số có một chữ số',
    unit: 'Tập 2 - Chủ đề 9: Phép cộng, phép trừ (không nhớ) trong phạm vi 100',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 68, 69',
    description: 'Đặt tính và tính dạng: 48 - 5 = 43.',
    summary: 'Trừ đơn vị cho đơn vị, giữ nguyên hàng chục.',
    keyPoints: ['48 - 5 = 43 (lấy 8 - 5 = 3, hạ 4 chục).'],
    mascotTip: 'BoBo: Trừ từ phải sang trái cực kỳ chính xác!',
  },
  {
    id: 'math-g1-b32', semester: 2, lessonNumber: 32,
    title: 'Bài 32: Phép trừ số có hai chữ số cho số có hai chữ số',
    unit: 'Tập 2 - Chủ đề 9: Phép cộng, phép trừ (không nhớ) trong phạm vi 100',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 74, 75',
    description: 'Đặt tính và tính dạng: 67 - 25 = 42.',
    summary: 'Trừ đơn vị cho đơn vị (7-5=2), trừ chục cho chục (6-2=4).',
    keyPoints: ['67 - 25 = 42.'],
    mascotTip: 'BoBo: Thành thạo phép trừ là bạn đã là cao thủ tính toán rồi!',
  },
  {
    id: 'math-g1-b33', semester: 2, lessonNumber: 33,
    title: 'Bài 33: Luyện tập chung Phép cộng trừ phạm vi 100',
    unit: 'Tập 2 - Chủ đề 9: Phép cộng, phép trừ (không nhớ) trong phạm vi 100',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 80, 81',
    description: 'Giải các bài toán có lời văn thực tế với phép cộng và phép trừ phạm vi 100.',
    summary: 'Vận dụng giải toán có lời văn một phép tính.',
    keyPoints: ['Đọc kỹ đề bài: "hỏi tất cả có bao nhiêu" là phép cộng, "hỏi còn lại bao nhiêu" là phép trừ.'],
    mascotTip: 'BoBo: Đọc kỹ từ khóa "tất cả" hay "còn lại" nhé!',
  },
  {
    id: 'math-g1-b34', semester: 2, lessonNumber: 34,
    title: 'Bài 34: Xem đồng hồ',
    unit: 'Tập 2 - Chủ đề 10: Thời gian, giờ và lịch',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 84, 85',
    description: 'Nhận biết kim ngắn (chỉ giờ), kim dài (chỉ phút) và cách xem giờ đúng (3 giờ, 8 giờ).',
    summary: 'Khi kim dài chỉ số 12, kim ngắn chỉ vào số nào thì đồng hồ chỉ đúng giờ đó.',
    keyPoints: ['Kim ngắn chỉ số 8, kim dài chỉ số 12 là đúng 8 giờ đúng.'],
    mascotTip: 'BoBo: Kim dài đứng số 12 là giờ đúng tròn trĩnh!',
    defaultQuestions: [
      {
        id: 'math-g1-b34-q1',
        type: 'bubble_choice',
        questionText: 'Quan sát mặt đồng hồ: Đồng hồ đang chỉ mấy giờ đúng?',
        audioText: 'Đồng hồ đang chỉ mấy giờ đúng?',
        points: 10,
        visualType: 'clock',
        visualData: { hours: 3, minutes: 0 },
        options: [
          { id: 'a', label: '3 giờ đúng 🕒', isCorrect: true },
          { id: 'b', label: '12 giờ đúng 🕛' },
          { id: 'c', label: '6 giờ đúng 🕕' },
        ]
      }
    ]
  },
  {
    id: 'math-g1-b35', semester: 2, lessonNumber: 35,
    title: 'Bài 35: Các ngày trong tuần',
    unit: 'Tập 2 - Chủ đề 10: Thời gian, giờ và lịch',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 88, 89',
    description: 'Nhận biết 7 ngày trong một tuần lễ: Thứ Hai, Thứ Ba, Thứ Tư, Thứ Năm, Thứ Sáu, Thứ Bảy, Chủ Nhật.',
    summary: 'Một tuần lễ có đúng 7 ngày.',
    keyPoints: ['Bé đi học từ Thứ Hai đến Thứ Sáu; Thứ Bảy và Chủ Nhật được nghỉ ở nhà với gia đình.'],
    mascotTip: 'BoBo: Hôm nay là thứ mấy? Mai là thứ mấy nhỉ bạn ơi?',
  },
  {
    id: 'math-g1-b36', semester: 2, lessonNumber: 36,
    title: 'Bài 36: Thực hành xem lịch và giờ',
    unit: 'Tập 2 - Chủ đề 10: Thời gian, giờ và lịch',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 92, 93',
    description: 'Thực hành xem tờ lịch bloc hàng ngày và lên thời gian biểu sinh hoạt.',
    summary: 'Tập thói quen đi học đúng giờ và ngủ đúng giờ.',
    keyPoints: ['Tờ lịch cho biết Thứ và Ngày trong tháng.'],
    mascotTip: 'BoBo: Sinh nhật của bạn rơi vào thứ mấy trong tuần?',
  },
  {
    id: 'math-g1-b37', semester: 2, lessonNumber: 37,
    title: 'Bài 37: Ôn tập các số trong phạm vi 100',
    unit: 'Tập 2 - Chủ đề 11: Ôn tập cuối năm',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 96, 97',
    description: 'Ôn tập toàn bộ đọc, viết, đếm và so sánh các số từ 0 đến 100.',
    summary: 'Thành thạo cấu tạo số chục và đơn vị trong phạm vi 100.',
    keyPoints: ['Số lớn nhất có hai chữ số là 99, số bé nhất có hai chữ số là 10.'],
    mascotTip: 'BoBo: Bạn đã nắm trọn vẹn 100 số tự nhiên kỳ diệu!',
  },
  {
    id: 'math-g1-b38', semester: 2, lessonNumber: 38,
    title: 'Bài 38: Ôn tập phép cộng, phép trừ trong phạm vi 100',
    unit: 'Tập 2 - Chủ đề 11: Ôn tập cuối năm',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 100, 101',
    description: 'Ôn tập tính nhẩm, đặt tính và giải toán có lời văn cả năm.',
    summary: 'Tổng kết các kỹ năng tính toán cộng trừ đã học trong chương trình Lớp 1.',
    keyPoints: ['Thực hiện tính cẩn thận không để sót phép tính.'],
    mascotTip: 'BoBo: Làm bài cẩn thận từng phép tính để rinh điểm 10 tròn trĩnh!',
  },
  {
    id: 'math-g1-b39', semester: 2, lessonNumber: 39,
    title: 'Bài 39: Ôn tập hình học và đo lường',
    unit: 'Tập 2 - Chủ đề 11: Ôn tập cuối năm',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 104, 105',
    description: 'Ôn tập các hình phẳng, khối lập phương, khối hộp chữ nhật, đo độ dài cm và xem đồng hồ.',
    summary: 'Hệ thống toàn bộ kiến thức hình học và đo lường thực tế Lớp 1.',
    keyPoints: ['Nhận biết hình dạng, đo cm và xem giờ đúng.'],
    mascotTip: 'BoBo: Hình học và thời gian giúp cuộc sống quanh ta thật ngăn nắp!',
  },
  {
    id: 'math-g1-b40', semester: 2, lessonNumber: 40,
    title: 'Bài 40: Ôn tập chung cuối năm',
    unit: 'Tập 2 - Chủ đề 11: Ôn tập cuối năm',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 108, 109',
    description: 'Chinh phục bài kiểm tra tổng kết môn Toán Lớp 1 chuẩn NXB Giáo Dục Việt Nam để nhận Cúp Vàng Lớp 1!',
    summary: 'Vinh danh hoàn thành xuất sắc toàn bộ 40 bài học môn Toán Lớp 1.',
    keyPoints: ['Mở khóa Cúp Vàng Hiệp Sĩ Số Học Lớp 1 và sẵn sàng bước vào Lớp 2!'],
    mascotTip: 'BoBo: Hoan hô! Bạn là Siêu Sao Toán Học Lớp 1! 🏆🎉',
  },
];
