import { Question, GradeLevel } from '../../../types';
import { CurriculumTopic } from '../types';

/**
 * MATH QUESTION ENGINE CHUẨN SƯ PHẠM SGK GDPT 2018 (NXB GIÁO DỤC VIỆT NAM)
 * - 100% Đề bài và lựa chọn đáp án TRONG SẠCH, không chứa dấu hiệu đáp án đúng (không có ✨, không có lời giải 'vì...')
 * - Gợi ý giải bài tập được lưu trữ trong thuộc tính `hint` và chỉ hiển thị khi bé nhấn nút "Xem gợi ý 💡"
 */

// =========================================================================
// 1. TOÁN LỚP 1: Đếm 0-100, So sánh, Hình phẳng, Cộng trừ không nhớ, Đồng hồ, cm
// =========================================================================
function generateGrade1Math(topic: CurriculumTopic): Question[] {
  const num = topic.lessonNumber;
  const lower = (topic.title + ' ' + topic.description).toLowerCase();

  if (lower.includes('đồng hồ') || lower.includes('giờ')) {
    const hours = (num * 3) % 12 || 8;
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Quan sát mặt đồng hồ: Đồng hồ đang chỉ mấy giờ đúng?`,
        audioText: `Đồng hồ đang chỉ mấy giờ đúng?`,
        hint: `Kim ngắn (màu đỏ) chỉ số giờ, kim dài (màu xanh) chỉ số 12 là giờ đúng tròn trĩnh.`,
        visualType: 'clock',
        visualData: { hours: hours, minutes: 0 },
        points: 10,
        options: [
          { id: 'a', label: `${hours} giờ đúng 🕒`, isCorrect: true },
          { id: 'b', label: `${(hours % 12) + 2} giờ đúng 🕒` },
          { id: 'c', label: `${hours === 1 ? 12 : hours - 1} giờ đúng 🕒` },
        ]
      }
    ];
  }

  if (lower.includes('cm') || lower.includes('xăng-ti-mét') || lower.includes('đo độ dài')) {
    const lengthCm = (num % 5) + 4;
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Quan sát chiếc bút chì trên thước kẻ, chiếc bút chì dài bao nhiêu xăng-ti-mét (cm)?`,
        audioText: `Chiếc bút chì dài bao nhiêu xăng ti mét?`,
        hint: `Nhìn vào đầu ngọn bút chì dóng thẳng xuống vạch số mấy trên thước kẻ nhé!`,
        visualType: 'ruler',
        visualData: { lengthCm: lengthCm },
        points: 10,
        options: [
          { id: 'a', label: `${lengthCm} cm`, isCorrect: true },
          { id: 'b', label: `${lengthCm - 1} cm` },
          { id: 'c', label: `${lengthCm + 2} cm` },
        ]
      }
    ];
  }

  if (lower.includes('hình vuông') || lower.includes('hình tròn') || lower.includes('tam giác') || lower.includes('chữ nhật')) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Khung cửa sổ phòng học thường có dạng hình phẳng nào?`,
        audioText: `Khung cửa sổ có dạng hình phẳng nào?`,
        hint: `Khung cửa sổ có 2 cạnh dài bằng nhau và 2 cạnh ngắn bằng nhau.`,
        visualType: 'geometry',
        visualData: { shape: 'rectangle', dimensions: { length: '60 cm', width: '40 cm' } },
        points: 10,
        options: [
          { id: 'a', label: `Hình chữ nhật 🪟`, isCorrect: true },
          { id: 'b', label: `Hình tròn 🔴` },
          { id: 'c', label: `Hình tam giác 🔺` },
        ]
      }
    ];
  }

  // Đếm hoặc cộng trừ phạm vi 10-20
  const n1 = (num % 6) + 3;
  const n2 = (num % 4) + 2;
  const isSub = lower.includes('trừ') || lower.includes('bớt');
  const ans = isSub ? n1 - n2 : n1 + n2;
  const emoji = ['🍎', '🍓', '🐥', '🎈', '⭐', '🧁'][num % 6];

  return [
    {
      id: `${topic.id}-q1`,
      type: 'bubble_choice',
      questionText: `Bé có ${n1} quả ${emoji}, ${isSub ? 'cho bạn' : 'được tặng thêm'} ${n2} quả ${emoji}. Hỏi bé có tất cả bao nhiêu quả ${emoji}? (${n1} ${isSub ? '-' : '+'} ${n2} = ?)`,
      audioText: `Bé có ${n1} quả, ${isSub ? 'cho bạn' : 'thêm'} ${n2} quả. Hỏi có tất cả bao nhiêu quả?`,
      hint: isSub ? `Lấy ${n1} bớt đi ${n2} để tìm số quả còn lại.` : `Đếm gộp ${n1} và ${n2} lại để tìm tổng số quả.`,
      visualType: 'counting',
      visualData: { itemEmoji: emoji, leftCount: n1, rightCount: n2 },
      points: 10,
      options: [
        { id: 'a', label: `${ans} quả ${emoji}`, isCorrect: true },
        { id: 'b', label: `${ans + 1} quả ${emoji}` },
        { id: 'c', label: `${ans - 1 > 0 ? ans - 1 : ans + 2} quả ${emoji}` },
      ]
    }
  ];
}

// =========================================================================
// 2. TOÁN LỚP 2: Bảng nhân/chia 2 & 5, Cộng trừ có nhớ 100 & 1000, dm, m, kg, lít
// =========================================================================
function generateGrade2Math(topic: CurriculumTopic): Question[] {
  const num = topic.lessonNumber;
  const lower = (topic.title + ' ' + topic.description).toLowerCase();

  // Bảng nhân 2 & 5
  if (lower.includes('bảng nhân 2') || lower.includes('nhân 2')) {
    const factor = (num % 8) + 2;
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Mỗi đôi chim bồ câu có 2 con 🕊️. Hỏi ${factor} đôi chim bồ câu có tất cả bao nhiêu con? (2 × ${factor} = ?)`,
        audioText: `Hai nhân ${factor} bằng bao nhiêu?`,
        hint: `Lấy 2 nhân với ${factor} hoặc đếm thêm 2 liên tiếp ${factor} lần.`,
        visualType: 'array',
        visualData: { rows: 2, cols: factor, itemEmoji: '🕊️' },
        points: 10,
        options: [
          { id: 'a', label: `${2 * factor} con chim`, isCorrect: true },
          { id: 'b', label: `${2 * factor - 2} con chim` },
          { id: 'c', label: `${2 * factor + 2} con chim` },
        ]
      }
    ];
  }

  if (lower.includes('bảng nhân 5') || lower.includes('nhân 5')) {
    const factor = (num % 8) + 2;
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Mỗi bàn tay có 5 ngón tay ✋. Hỏi ${factor} bàn tay có tất cả bao nhiêu ngón tay? (5 × ${factor} = ?)`,
        audioText: `Năm nhân ${factor} bằng bao nhiêu?`,
        hint: `Đếm thêm 5: 5, 10, 15, 20... đủ ${factor} lần.`,
        visualType: 'array',
        visualData: { rows: factor, cols: 5, itemEmoji: '✋' },
        points: 10,
        options: [
          { id: 'a', label: `${5 * factor} ngón tay`, isCorrect: true },
          { id: 'b', label: `${5 * factor - 5} ngón tay` },
          { id: 'c', label: `${5 * factor + 5} ngón tay` },
        ]
      }
    ];
  }

  // Bảng chia 2 & 5
  if (lower.includes('bảng chia 2') || lower.includes('chia 2')) {
    const quotient = (num % 8) + 2;
    const dividend = 2 * quotient;
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Có ${dividend} chiếc kẹo 🍬 chia đều cho 2 bạn. Hỏi mỗi bạn được bao nhiêu chiếc kẹo? (${dividend} : 2 = ?)`,
        audioText: `${dividend} chia hai bằng bao nhiêu?`,
        hint: `Tìm số nào nhân với 2 bằng ${dividend}.`,
        points: 10,
        options: [
          { id: 'a', label: `${quotient} chiếc kẹo`, isCorrect: true },
          { id: 'b', label: `${quotient + 1} chiếc kẹo` },
          { id: 'c', label: `${quotient - 1} chiếc kẹo` },
        ]
      }
    ];
  }

  if (lower.includes('bảng chia 5') || lower.includes('chia 5')) {
    const quotient = (num % 8) + 2;
    const dividend = 5 * quotient;
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Có ${dividend} quả cam 🍊 chia đều vào 5 giỏ. Hỏi mỗi giỏ có bao nhiêu quả cam? (${dividend} : 5 = ?)`,
        audioText: `${dividend} chia năm bằng bao nhiêu?`,
        hint: `Tìm số nào nhân với 5 bằng ${dividend}.`,
        points: 10,
        options: [
          { id: 'a', label: `${quotient} quả cam`, isCorrect: true },
          { id: 'b', label: `${quotient + 2} quả cam` },
          { id: 'c', label: `${quotient - 1} quả cam` },
        ]
      }
    ];
  }

  // Đơn vị đo: kg, lít
  if (lower.includes('ki-lô-gam') || lower.includes('kg') || lower.includes('khối lượng')) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Bao gạo to nặng 35 kg, bao gạo bé nặng 18 kg. Hỏi cả hai bao gạo nặng tất cả bao nhiêu ki-lô-gam?`,
        audioText: `Cả hai bao gạo nặng tất cả bao nhiêu ki-lô-gam?`,
        hint: `Cộng số cân nặng của 2 bao gạo: 35 + 18 = 53 kg.`,
        points: 10,
        options: [
          { id: 'a', label: `53 kg`, isCorrect: true },
          { id: 'b', label: `43 kg` },
          { id: 'c', label: `55 kg` },
        ]
      }
    ];
  }

  if (lower.includes('lít') || lower.includes('dung tích')) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Trong can có 15 lít nước mắm, mẹ đã rót ra chai 7 lít. Hỏi trong can còn lại bao nhiêu lít nước mắm?`,
        audioText: `Trong can còn lại bao nhiêu lít nước mắm?`,
        hint: `Lấy số lít ban đầu trừ đi số lít đã rót ra: 15 - 7 = 8 lít.`,
        points: 10,
        options: [
          { id: 'a', label: `8 lít`, isCorrect: true },
          { id: 'b', label: `9 lít` },
          { id: 'c', label: `7 lít` },
        ]
      }
    ];
  }

  // Hơn kém nhau bao nhiêu
  if (lower.includes('hơn, kém')) {
    const a = 38 + (num % 15);
    const b = 15 + (num % 10);
    const diff = a - b;
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Cửa hàng có ${a} quả bóng bay màu đỏ 🎈 và ${b} quả bóng bay màu xanh 🎈. Hỏi số bóng đỏ nhiều hơn số bóng xanh bao nhiêu quả?`,
        audioText: `Số bóng đỏ nhiều hơn số bóng xanh bao nhiêu quả?`,
        hint: `Lấy số bóng đỏ trừ đi số bóng xanh: ${a} - ${b} = ${diff}.`,
        points: 10,
        options: [
          { id: 'a', label: `${diff} quả bóng`, isCorrect: true },
          { id: 'b', label: `${diff + 4} quả bóng` },
          { id: 'c', label: `${diff - 2} quả bóng` },
        ]
      }
    ];
  }

  // Phép cộng trừ có nhớ trong phạm vi 100/1000
  const val1 = 48 + (num % 20);
  const val2 = 27 + (num % 15);
  const isMinus = lower.includes('trừ');
  const ans = isMinus ? val1 - val2 : val1 + val2;

  return [
    {
      id: `${topic.id}-q1`,
      type: 'bubble_choice',
      questionText: `Đặt tính rồi tính: ${val1} ${isMinus ? '-' : '+'} ${val2} = ?`,
      audioText: `${val1} ${isMinus ? 'trừ' : 'cộng'} ${val2} bằng bao nhiêu?`,
      hint: isMinus ? `Đặt tính thẳng cột đơn vị và chục rồi trừ từ phải sang trái.` : `Cộng đơn vị với đơn vị (nhớ 1 sang hàng chục) rồi cộng hàng chục.`,
      points: 10,
      options: [
        { id: 'a', label: `${ans}`, isCorrect: true },
        { id: 'b', label: `${ans + 10}` },
        { id: 'c', label: `${ans - 2}` },
      ]
    }
  ];
}

// =========================================================================
// 3. TOÁN LỚP 3: Cửu chương 3-9, Tìm x, Số 100.000, Góc vuông ê-ke, Chu vi & Diện tích, mm, g, ml, tiền
// =========================================================================
function generateGrade3Math(topic: CurriculumTopic): Question[] {
  const num = topic.lessonNumber;
  const lower = (topic.title + ' ' + topic.description).toLowerCase();

  // Bảng cửu chương 3, 4, 6, 7, 8, 9
  const matchMult = lower.match(/bảng nhân (\d)/);
  if (matchMult) {
    const k = parseInt(matchMult[1], 10);
    const m = (num % 5) + 5;
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Tính nhẩm theo bảng cửu chương: ${k} × ${m} = ?`,
        audioText: `${k} nhân ${m} bằng bao nhiêu?`,
        hint: `Nhẩm theo bảng nhân ${k} đến số ${m}.`,
        points: 10,
        options: [
          { id: 'a', label: `${k * m}`, isCorrect: true },
          { id: 'b', label: `${k * m - k}` },
          { id: 'c', label: `${k * m + k}` },
        ]
      }
    ];
  }

  // Bảng chia 3, 4, 6, 7, 8, 9
  const matchDiv = lower.match(/bảng chia (\d)/);
  if (matchDiv) {
    const k = parseInt(matchDiv[1], 10);
    const m = (num % 5) + 4;
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Tính nhẩm theo bảng chia: ${k * m} : ${k} = ?`,
        audioText: `${k * m} chia ${k} bằng bao nhiêu?`,
        hint: `Nhẩm xem ${k} nhân mấy bằng ${k * m}.`,
        points: 10,
        options: [
          { id: 'a', label: `${m}`, isCorrect: true },
          { id: 'b', label: `${m - 1}` },
          { id: 'c', label: `${m + 2}` },
        ]
      }
    ];
  }

  // Góc vuông, ê-ke
  if (lower.includes('góc vuông') || lower.includes('góc không vuông') || lower.includes('ê-ke')) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Dụng cụ học tập nào dưới đây dùng để kiểm tra một góc có phải là góc vuông hay không?`,
        audioText: `Dụng cụ nào dùng để kiểm tra góc vuông?`,
        hint: `Thước ê-ke có 1 góc vuông chuẩn để đặt trùng vào góc cần đo.`,
        points: 10,
        options: [
          { id: 'a', label: `Thước ê-ke 📐`, isCorrect: true },
          { id: 'b', label: `Com-pa 🧭` },
          { id: 'c', label: `Kéo cắt giấy ✂️` },
        ]
      }
    ];
  }

  // Chu vi & Diện tích hình vuông / hình chữ nhật
  if (lower.includes('diện tích hình chữ nhật') || lower.includes('chu vi hình chữ nhật')) {
    const d = 12;
    const r = 6;
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Một mảnh bìa hình chữ nhật có chiều dài ${d} cm và chiều rộng ${r} cm. Diện tích của mảnh bìa là: (S = dài × rộng)`,
        audioText: `Mảnh bìa dài ${d} cm, rộng ${r} cm thì diện tích bằng bao nhiêu?`,
        hint: `Diện tích hình chữ nhật bằng chiều dài nhân chiều rộng: ${d} × ${r} = ${d * r} cm².`,
        visualType: 'geometry',
        visualData: { shape: 'rectangle', dimensions: { length: `${d} cm`, width: `${r} cm` } },
        points: 10,
        options: [
          { id: 'a', label: `${d * r} cm²`, isCorrect: true },
          { id: 'b', label: `${(d + r) * 2} cm²` },
          { id: 'c', label: `60 cm²` },
        ]
      }
    ];
  }

  // Tìm x
  if (lower.includes('tìm x') || lower.includes('thành phần chưa biết')) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Tìm số x biết: x + 240 = 600. Giá trị của x là:`,
        audioText: `Tìm x biết x cộng 240 bằng 600:`,
        hint: `Muốn tìm số hạng chưa biết, lấy Tổng trừ đi số hạng đã biết: x = 600 - 240 = 360.`,
        points: 10,
        options: [
          { id: 'a', label: `x = 360`, isCorrect: true },
          { id: 'b', label: `x = 840` },
          { id: 'c', label: `x = 400` },
        ]
      }
    ];
  }

  // Đơn vị đo: gam, ml, mm, tiền
  if (lower.includes('gam') || lower.includes('tiền việt nam') || lower.includes('mi-li-mét')) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Đổi đơn vị đo: 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?`,
        audioText: `Một ki lô gam bằng bao nhiêu gam?`,
        hint: `1 kg = 1000 g.`,
        points: 10,
        options: [
          { id: 'a', label: `1000 g`, isCorrect: true },
          { id: 'b', label: `100 g` },
          { id: 'c', label: `10 g` },
        ]
      }
    ];
  }

  // Số có 4, 5 chữ số trong phạm vi 100.000
  return [
    {
      id: `${topic.id}-q1`,
      type: 'bubble_choice',
      questionText: `Số gồm 4 chục nghìn, 5 nghìn, 6 trăm, 7 chục và 8 đơn vị được viết là:`,
      audioText: `Số gồm bốn chục nghìn năm nghìn sáu trăm bảy chục tám đơn vị viết là gì?`,
      hint: `Viết lần lượt từ hàng chục nghìn, nghìn, trăm, chục đến đơn vị: 45 678.`,
      points: 10,
      options: [
        { id: 'a', label: `45 678`, isCorrect: true },
        { id: 'b', label: `45 768` },
        { id: 'c', label: `54 678` },
      ]
    }
  ];
}

// =========================================================================
// 4. TOÁN LỚP 4: Lớp Triệu, Biểu thức có chữ, Yến/Tạ/Tấn, Giây/Thế kỉ, Góc nhọn/tù/bẹt, Trung bình cộng, Phân số, Hình bình hành/thoi
// =========================================================================
function generateGrade4Math(topic: CurriculumTopic): Question[] {
  const lower = (topic.title + ' ' + topic.description).toLowerCase();

  // 1. Giây & Thế kỉ
  if (lower.includes('thế kỉ') || lower.includes('giây')) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Bác Hồ đọc Tuyên ngôn Độc lập khai sinh ra nước Việt Nam Dân chủ Cộng hòa vào năm 1945. Năm 1945 thuộc thế kỉ nào?`,
        audioText: `Năm 1945 thuộc thế kỉ nào?`,
        hint: `Từ năm 1901 đến năm 2000 là thế kỉ XX (thế kỉ 20).`,
        points: 10,
        options: [
          { id: 'a', label: `Thế kỉ XX (Thế kỉ 20)`, isCorrect: true },
          { id: 'b', label: `Thế kỉ XIX (Thế kỉ 19)` },
          { id: 'c', label: `Thế kỉ XXI (Thế kỉ 21)` },
        ]
      },
      {
        id: `${topic.id}-q2`,
        type: 'bubble_choice',
        questionText: `1 thế kỉ bằng bao nhiêu năm?`,
        audioText: `Một thế kỉ bằng bao nhiêu năm?`,
        hint: `1 thế kỉ = 100 năm.`,
        points: 10,
        options: [
          { id: 'a', label: `100 năm`, isCorrect: true },
          { id: 'b', label: `10 năm` },
          { id: 'c', label: `1000 năm` },
        ]
      }
    ];
  }

  // 2. Yến, Tạ, Tấn
  if (lower.includes('tấn') || lower.includes('tạ') || lower.includes('yến')) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Một con voi nặng 3 tấn 5 tạ. Đổi sang ki-lô-gam (kg) là: (1 tấn = 1000 kg, 1 tạ = 100 kg)`,
        audioText: `Ba tấn năm tạ bằng bao nhiêu ki lô gam?`,
        hint: `3 tấn = 3000 kg; 5 tạ = 500 kg. Tổng là 3000 + 500 = 3500 kg.`,
        points: 10,
        options: [
          { id: 'a', label: `3500 kg`, isCorrect: true },
          { id: 'b', label: `350 kg` },
          { id: 'c', label: `3050 kg` },
        ]
      }
    ];
  }

  // 3. Góc nhọn, góc tù, góc bẹt
  if (lower.includes('góc nhọn') || lower.includes('góc tù') || lower.includes('góc bẹt')) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Góc có số đo lớn hơn góc vuông nhưng bé hơn góc bẹt được gọi là góc gì?`,
        audioText: `Góc lớn hơn góc vuông và bé hơn góc bẹt là góc gì?`,
        hint: `Góc nhọn < 90°, Góc vuông = 90°, Góc tù > 90° và < 180°, Góc bẹt = 180°.`,
        points: 10,
        options: [
          { id: 'a', label: `Góc tù`, isCorrect: true },
          { id: 'b', label: `Góc nhọn` },
          { id: 'c', label: `Góc bẹt` },
        ]
      }
    ];
  }

  // 4. Biểu thức có chứa chữ
  if (lower.includes('biểu thức') || lower.includes('chứa chữ') || lower.includes('chứa một chữ')) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Tính giá trị của biểu thức: 45 + a × 3 khi a = 5:`,
        audioText: `Tính giá trị biểu thức 45 cộng a nhân 3 khi a bằng 5:`,
        hint: `Thay a = 5 vào biểu thức: 45 + 5 × 3 = 45 + 15 = 60 (thực hiện nhân trước, cộng sau).`,
        points: 10,
        options: [
          { id: 'a', label: `60`, isCorrect: true },
          { id: 'b', label: `150` },
          { id: 'c', label: `53` },
        ]
      }
    ];
  }

  // 5. Tìm số trung bình cộng
  if (lower.includes('trung bình cộng')) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Tìm số trung bình cộng của 3 số: 25, 35 và 45: (Trung bình cộng = Tổng : 3)`,
        audioText: `Tìm số trung bình cộng của hai mươi lăm, ba mươi lăm và bốn mươi lăm:`,
        hint: `Tính tổng 3 số: 25 + 35 + 45 = 105. Lấy tổng chia cho 3: 105 : 3 = 35.`,
        points: 10,
        options: [
          { id: 'a', label: `35`, isCorrect: true },
          { id: 'b', label: `30` },
          { id: 'c', label: `40` },
        ]
      }
    ];
  }

  // 6. Tìm hai số khi biết Tổng và Hiệu
  if (lower.includes('tổng và hiệu') || lower.includes('tìm hai số')) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Hai bạn An và Bình có tất cả 48 viên bi. An nhiều hơn Bình 12 viên bi. Số bi của bạn An là: (Số lớn = (Tổng + Hiệu) : 2)`,
        audioText: `An nhiều hơn Bình mười hai viên bi, tổng là bốn mươi tám viên. Số bi của An là bao nhiêu?`,
        hint: `Áp dụng công thức tìm số lớn: (Tổng + Hiệu) : 2 = (48 + 12) : 2 = 60 : 2 = 30 viên bi.`,
        points: 10,
        options: [
          { id: 'a', label: `30 viên bi`, isCorrect: true },
          { id: 'b', label: `18 viên bi` },
          { id: 'c', label: `24 viên bi` },
        ]
      }
    ];
  }

  // 7. Phân số (Rút gọn, quy đồng, cộng trừ nhân chia)
  if (lower.includes('phân số') || lower.includes('rút gọn') || lower.includes('quy đồng')) {
    if (lower.includes('rút gọn')) {
      return [
        {
          id: `${topic.id}-q1`,
          type: 'bubble_choice',
          questionText: `Rút gọn phân số 18/24 về phân số tối giản ta được:`,
          audioText: `Rút gọn phân số mười tám phần hai mươi tư về tối giản ta được:`,
          hint: `Chia cả tử số và mẫu số cho ước chung lớn nhất là 6: 18:6 = 3, 24:6 = 4.`,
          points: 10,
          options: [
            { id: 'a', label: `3/4`, isCorrect: true },
            { id: 'b', label: `9/12` },
            { id: 'c', label: `2/3` },
          ]
        }
      ];
    }

    if (lower.includes('cộng') || lower.includes('trừ')) {
      return [
        {
          id: `${topic.id}-q1`,
          type: 'bubble_choice',
          questionText: `Thực hiện phép tính: 3/5 + 4/5 = ?`,
          audioText: `Ba phần năm cộng bốn phần năm bằng bao nhiêu?`,
          hint: `Cộng hai phân số cùng mẫu số: Lấy tử số cộng tử số, giữ nguyên mẫu số: (3 + 4)/5 = 7/5.`,
          visualType: 'fraction',
          visualData: { numerator: 7, denominator: 5 },
          points: 10,
          options: [
            { id: 'a', label: `7/5`, isCorrect: true },
            { id: 'b', label: `7/10` },
            { id: 'c', label: `12/25` },
          ]
        }
      ];
    }

    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Quan sát thanh phân số dưới đây: Phân số chỉ phần tô màu tím là:`,
        audioText: `Phân số chỉ phần tô màu là bao nhiêu?`,
        hint: `Thanh được chia thành 4 phần bằng nhau, trong đó có 3 phần được tô màu tím.`,
        visualType: 'fraction',
        visualData: { numerator: 3, denominator: 4 },
        points: 10,
        options: [
          { id: 'a', label: `3/4`, isCorrect: true },
          { id: 'b', label: `1/4` },
          { id: 'c', label: `3/1` },
        ]
      }
    ];
  }

  // 8. Lớp Triệu & Lớp Nghìn
  return [
    {
      id: `${topic.id}-q1`,
      type: 'bubble_choice',
      questionText: `Trong số 345 678 912, chữ số 4 thuộc hàng nào, lớp nào?`,
      audioText: `Trong số 345 678 912 chữ số 4 thuộc hàng nào lớp nào?`,
      hint: `Lớp Triệu gồm các hàng: Triệu (5), Chục triệu (4), Trăm triệu (3).`,
      points: 10,
      options: [
        { id: 'a', label: `Hàng chục triệu, Lớp triệu`, isCorrect: true },
        { id: 'b', label: `Hàng trăm nghìn, Lớp nghìn` },
        { id: 'c', label: `Hàng triệu, Lớp triệu` },
      ]
    }
  ];
}

// =========================================================================
// 5. TOÁN LỚP 5: Số thập phân, Tỉ số %, Diện tích tam giác/thang/tròn, Thể tích, Toán chuyển động s=v*t
// =========================================================================
function generateGrade5Math(topic: CurriculumTopic): Question[] {
  const lower = (topic.title + ' ' + topic.description).toLowerCase();

  // 1. Toán chuyển động đều: Vận tốc, Quãng đường, Thời gian
  if (lower.includes('vận tốc') || lower.includes('quãng đường') || lower.includes('chuyển động') || lower.includes('s = v')) {
    if (lower.includes('ngược chiều') || lower.includes('cùng chiều')) {
      return [
        {
          id: `${topic.id}-q1`,
          type: 'bubble_choice',
          questionText: `Hai ô tô xuất phát cùng một lúc từ hai tỉnh A và B cách nhau 180 km đi NGƯỢC CHIỀU nhau. Vận tốc xe 1 là 50 km/h, xe 2 là 40 km/h. Sau bao lâu hai xe gặp nhau? (t = s : (v1 + v2))`,
          audioText: `Sau bao lâu hai xe gặp nhau?`,
          hint: `Tính tổng vận tốc của 2 xe: 50 + 40 = 90 km/h. Thời gian gặp nhau: t = 180 : 90 = 2 giờ.`,
          visualType: 'speed',
          visualData: { speed: `50 + 40 = 90 km/h`, distance: `180 km`, time: `2 giờ` },
          points: 10,
          options: [
            { id: 'a', label: `2 giờ`, isCorrect: true },
            { id: 'b', label: `3 giờ` },
            { id: 'c', label: `1,5 giờ` },
          ]
        }
      ];
    }

    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Một xe máy đi với vận tốc v = 42 km/h trong thời gian t = 2,5 giờ. Quãng đường s xe máy đi được là: (s = v × t)`,
        audioText: `Xe máy đi vận tốc 42 km/h trong 2,5 giờ thì quãng đường là bao nhiêu km?`,
        hint: `Áp dụng công thức tính quãng đường: s = v × t = 42 × 2,5 = 105 km.`,
        visualType: 'speed',
        visualData: { speed: `42 km/h`, time: `2,5 giờ`, distance: `105 km` },
        points: 10,
        options: [
          { id: 'a', label: `105 km`, isCorrect: true },
          { id: 'b', label: `84 km` },
          { id: 'c', label: `95 km` },
        ]
      }
    ];
  }

  // 2. Hình tam giác, hình thang, hình tròn
  if (lower.includes('tam giác') || lower.includes('diện tích hình tam giác')) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Tính diện tích hình tam giác có độ dài đáy a = 12 cm và chiều cao h = 8 cm: (S = a × h : 2)`,
        audioText: `Tính diện tích hình tam giác đáy 12 cm, chiều cao 8 cm:`,
        hint: `Diện tích hình tam giác bằng đáy nhân chiều cao chia cho 2: S = (12 × 8) : 2 = 96 : 2 = 48 cm².`,
        visualType: 'geometry',
        visualData: { shape: 'triangle', dimensions: { base: '12 cm', height: '8 cm' } },
        points: 10,
        options: [
          { id: 'a', label: `48 cm²`, isCorrect: true },
          { id: 'b', label: `96 cm²` },
          { id: 'c', label: `20 cm²` },
        ]
      }
    ];
  }

  if (lower.includes('hình thang') || lower.includes('diện tích hình thang')) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Tính diện tích hình thang có đáy bé a = 6 cm, đáy lớn b = 10 cm và chiều cao h = 5 cm: (S = (a + b) × h : 2)`,
        audioText: `Tính diện tích hình thang đáy bé 6 cm, đáy lớn 10 cm, chiều cao 5 cm:`,
        hint: `Diện tích hình thang: S = (6 + 10) × 5 : 2 = 16 × 5 : 2 = 80 : 2 = 40 cm².`,
        visualType: 'geometry',
        visualData: { shape: 'trapezoid', dimensions: { topBase: '6 cm', base: '10 cm', height: '5 cm' } },
        points: 10,
        options: [
          { id: 'a', label: `40 cm²`, isCorrect: true },
          { id: 'b', label: `80 cm²` },
          { id: 'c', label: `30 cm²` },
        ]
      }
    ];
  }

  if (lower.includes('hình tròn') || lower.includes('chu vi hình tròn') || lower.includes('diện tích hình tròn')) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Tính diện tích hình tròn có bán kính r = 5 cm: (S = r × r × 3,14)`,
        audioText: `Tính diện tích hình tròn có bán kính 5 cm:`,
        hint: `Diện tích hình tròn: S = r × r × 3,14 = 5 × 5 × 3,14 = 25 × 3,14 = 78,5 cm².`,
        visualType: 'geometry',
        visualData: { shape: 'circle', dimensions: { radius: '5 cm' } },
        points: 10,
        options: [
          { id: 'a', label: `78,5 cm²`, isCorrect: true },
          { id: 'b', label: `31,4 cm²` },
          { id: 'c', label: `15,7 cm²` },
        ]
      }
    ];
  }

  // 3. Hình hộp chữ nhật, hình lập phương, thể tích
  if (lower.includes('thể tích') || lower.includes('hình hộp chữ nhật') || lower.includes('hình lập phương')) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Tính thể tích hình hộp chữ nhật có chiều dài 8 cm, chiều rộng 5 cm và chiều cao 4 cm: (V = a × b × c)`,
        audioText: `Tính thể tích hình hộp chữ nhật dài 8 cm, rộng 5 cm, cao 4 cm:`,
        hint: `Thể tích hình hộp chữ nhật bằng tích 3 kích thước: V = 8 × 5 × 4 = 160 cm³.`,
        points: 10,
        options: [
          { id: 'a', label: `160 cm³`, isCorrect: true },
          { id: 'b', label: `160 cm²` },
          { id: 'c', label: `17 cm³` },
        ]
      }
    ];
  }

  // 4. Tỉ số phần trăm
  if (lower.includes('phần trăm') || lower.includes('tỉ số')) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Lớp 5A có 40 học sinh, trong đó có 24 bạn nữ. Tỉ số phần trăm của số bạn nữ so với cả lớp là:`,
        audioText: `Tỉ số phần trăm bạn nữ so với cả lớp là bao nhiêu?`,
        hint: `Lấy số bạn nữ chia cho tổng số học sinh rồi nhân với 100%: (24 : 40) × 100% = 0,6 × 100% = 60%.`,
        points: 10,
        options: [
          { id: 'a', label: `60%`, isCorrect: true },
          { id: 'b', label: `40%` },
          { id: 'c', label: `24%` },
        ]
      }
    ];
  }

  // 5. Số thập phân (Cộng trừ nhân chia số thập phân)
  if (lower.includes('nhân số thập phân') || lower.includes('chia số thập phân')) {
    return [
      {
        id: `${topic.id}-q1`,
        type: 'bubble_choice',
        questionText: `Thực hiện phép tính: 4,5 × 2,4 = ?`,
        audioText: `Bốn phẩy năm nhân hai phẩy bốn bằng bao nhiêu?`,
        hint: `Nhân 45 × 24 = 1080, sau đó tách 2 chữ số ở phần thập phân từ phải sang trái được 10,8.`,
        points: 10,
        options: [
          { id: 'a', label: `10,8`, isCorrect: true },
          { id: 'b', label: `108` },
          { id: 'c', label: `9,9` },
        ]
      }
    ];
  }

  return [
    {
      id: `${topic.id}-q1`,
      type: 'bubble_choice',
      questionText: `Đặt tính rồi tính: 35,68 + 24,75 = ?`,
      audioText: `Ba mươi lăm phẩy sáu mươi tám cộng hai mươi tư phẩy bảy mươi lăm bằng bao nhiêu?`,
      hint: `Đặt tính thẳng cột các chữ số và dấu phẩy, cộng từ phải sang trái: 35,68 + 24,75 = 60,43.`,
      points: 10,
      options: [
        { id: 'a', label: `60,43`, isCorrect: true },
        { id: 'b', label: `59,33` },
        { id: 'c', label: `60,33` },
      ]
    }
  ];
}

// =========================================================================
// ROUTER CHÍNH ĐIỀU HƯỚNG THEO LỚP 1 ĐẾN 5
// =========================================================================
export function generateMathQuestions(topic: CurriculumTopic, grade: GradeLevel): Question[] {
  switch (grade) {
    case 1:
      return generateGrade1Math(topic);
    case 2:
      return generateGrade2Math(topic);
    case 3:
      return generateGrade3Math(topic);
    case 4:
      return generateGrade4Math(topic);
    case 5:
      return generateGrade5Math(topic);
    default:
      return generateGrade1Math(topic);
  }
}
