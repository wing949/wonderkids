import { GradeLevel, Question } from '../../../types/index.ts';
import { CurriculumTopic } from '../types.ts';

type QuestionExtra = Pick<Question, 'visualType' | 'visualData' | 'hint'>;

const includesAny = (text: string, cues: string[]) => cues.some((cue) => text.includes(cue));

function bubble(
  topic: CurriculumTopic,
  suffix: string,
  questionText: string,
  correct: string,
  distractors: string[],
  hint: string,
  extra: QuestionExtra = {},
): Question {
  const uniqueLabels = [correct, ...distractors].filter((label, index, labels) => labels.indexOf(label) === index);
  const numericMatch = String(correct).match(/-?\d+(?:[.,]\d+)?/);
  let alternativeOffset = 1;
  while (uniqueLabels.length < 3) {
    if (numericMatch) {
      const decimalSeparator = numericMatch[0].includes(',') ? ',' : '.';
      const numericValue = Number(numericMatch[0].replace(',', '.'));
      const replacement = String(numericValue + alternativeOffset).replace('.', decimalSeparator);
      const candidate = String(correct).replace(numericMatch[0], replacement);
      if (!uniqueLabels.includes(candidate)) uniqueLabels.push(candidate);
      alternativeOffset += 1;
    } else {
      const candidate = uniqueLabels.length === 1 ? 'Chưa đủ dữ kiện' : 'Không thể kết luận';
      if (!uniqueLabels.includes(candidate)) uniqueLabels.push(candidate);
    }
  }
  const options = uniqueLabels.map((label, index) => ({
    id: String.fromCharCode(97 + index),
    label,
    isCorrect: index === 0,
  }));

  return {
    id: `${topic.id}-${suffix}`,
    type: 'bubble_choice',
    questionText,
    audioText: questionText,
    points: 10,
    hint,
    options,
    ...extra,
  };
}

function keypad(
  topic: CurriculumTopic,
  suffix: string,
  questionText: string,
  answer: number | string,
  hint: string,
  extra: QuestionExtra = {},
): Question {
  return {
    id: `${topic.id}-${suffix}`,
    type: 'keypad',
    questionText,
    audioText: questionText,
    points: 10,
    correctAnswer: String(answer),
    hint,
    ...extra,
  };
}

function reviewQuestions(topic: CurriculumTopic, grade: GradeLevel): Question[] {
  const n = topic.lessonNumber;
  if (grade === 1) {
    const left = (n % 5) + 3;
    const right = (n % 3) + 1;
    return [
      bubble(topic, 'q1', `Bài 1 (Khái niệm): Số ${left + right} gồm mấy đơn vị?`, `${left + right} đơn vị`, [`${left + right + 1} đơn vị`, `${left} chục`], 'Đếm số lượng đơn vị.'),
      bubble(topic, 'q2', `Bài 2 (Tính toán): ${left} + ${right} = ?`, String(left + right), [String(left + right - 1), String(left + right + 1)], 'Đếm gộp hai nhóm đồ vật rồi chọn kết quả.'),
      bubble(topic, 'q3', `Bài 3 (So sánh): Điền dấu thích hợp: ${left} ... ${right}`, `${left > right ? '>' : '<'}`, [`${left > right ? '<' : '>'}`, '='], 'So sánh hai số.'),
      bubble(topic, 'q4', `Bài 4 (Vận dụng): Bạn có ${left} quả táo, được tặng thêm ${right} quả. Bạn có tất cả:`, `${left + right} quả táo`, [`${left + right - 1} quả táo`, `${left} quả táo`], 'Thực hiện phép tính cộng.'),
      bubble(topic, 'q5', `Bài 5 (Thử thách): ${left + right} bớt đi ${right} còn lại mấy?`, String(left), [String(left + 1), String(left - 1)], 'Thực hiện phép trừ ngược lại.')
    ];
  }
  if (grade === 2) {
    const left = 20 + (n % 30);
    const right = (n % 2 === 0 ? 12 : 8);
    const op = n % 2 === 0 ? '+' : '-';
    const ans = n % 2 === 0 ? left + right : left - right;
    return [
      bubble(topic, 'q1', `Bài 1 (Cấu tạo số): Số ${left} gồm mấy chục và mấy đơn vị?`, `${Math.floor(left / 10)} chục và ${left % 10} đơn vị`, [`${left % 10} chục và ${Math.floor(left / 10)} đơn vị`, `${left} chục`], 'Chữ số đầu là hàng chục, chữ số sau là hàng đơn vị.'),
      bubble(topic, 'q2', `Bài 2 (Đặt tính): ${left} ${op} ${right} = ?`, String(ans), [String(ans - 2), String(ans + 3)], 'Đặt tính thẳng hàng rồi tính.'),
      bubble(topic, 'q3', `Bài 3 (So sánh): Số liền sau của số ${left} là:`, String(left + 1), [String(left - 1), String(left + 10)], 'Số liền sau hơn số đã cho 1 đơn vị.'),
      bubble(topic, 'q4', `Bài 4 (Toán đố): Có ${left} bông hoa, cắm thêm ${right} bông nữa. Hỏi có tất cả bao nhiêu bông hoa?`, `${left + right} bông hoa`, [`${left + right - 2} bông hoa`, `${left} bông hoa`], 'Lấy số hoa ban đầu cộng số hoa cắm thêm.'),
      bubble(topic, 'q5', `Bài 5 (Thử thách): Tìm x biết: x - ${right} = ${left}. x = ?`, String(left + right), [String(left - right), String(left)], 'Muốn tìm số bị trừ, lấy hiệu cộng số trừ.')
    ];
  }
  if (grade === 3) {
    const hundreds = (n % 7) + 1;
    const tens = ((n + 2) % 7) + 1;
    const ones = ((n + 4) % 7) + 1;
    const val = 1000 + hundreds * 100 + tens * 10 + ones;
    return [
      bubble(topic, 'q1', `Bài 1 (Cấu tạo số): Số ${val.toLocaleString('vi-VN')} có chữ số hàng trăm là:`, String(hundreds), [String(tens), String(ones)], 'Đọc từ phải sang trái: đơn vị, chục, trăm.'),
      bubble(topic, 'q2', `Bài 2 (Tính toán): ${hundreds * 100} + ${tens * 10} + ${ones} = ?`, String(hundreds * 100 + tens * 10 + ones), [String(hundreds * 100 + tens * 10), String(hundreds * 100 + ones)], 'Cộng các hàng lại với nhau.'),
      bubble(topic, 'q3', `Bài 3 (Hình học): Hình vuông có cạnh 5 cm thì chu vi là:`, '20 cm', ['25 cm', '10 cm'], 'Chu vi hình vuông = cạnh × 4.'),
      bubble(topic, 'q4', `Bài 4 (Toán đố): Mua 3 quyển vở hết 15 000 đồng. Mua 1 quyển vở hết:`, '5 000 đồng', ['3 000 đồng', '6 000 đồng'], 'Lấy 15 000 : 3 = 5 000 đồng.'),
      bubble(topic, 'q5', `Bài 5 (Thử thách): Gấp 12 lên 3 lần rồi bớt đi 6 được:`, '30', ['36', '42'], '12 × 3 = 36; 36 - 6 = 30.')
    ];
  }
  if (grade === 4) {
    const a = 120 + (n % 30);
    const b = 4;
    return [
      bubble(topic, 'q1', `Bài 1 (Khái niệm): Số ${a * 1000} có chữ số hàng nghìn là:`, String(a % 10), [String(Math.floor(a / 10) % 10), '0'], 'Xác định hàng nghìn trong số.'),
      bubble(topic, 'q2', `Bài 2 (Tính toán): ${a} × ${b} = ?`, String(a * b), [String(a * b - 10), String(a * b + 20)], 'Nhân lần lượt từ phải sang trái.'),
      bubble(topic, 'q3', `Bài 3 (Tính chất): Phép tính nào bằng 25 × 4 × 2?`, '25 × 8', ['25 + 8', '100 + 2'], 'Sử dụng tính chất kết hợp của phép nhân.'),
      bubble(topic, 'q4', `Bài 4 (Toán đố): Trung bình cộng của hai số 40 và 60 là:`, '50', ['45', '55'], 'Trung bình cộng = (40 + 60) : 2 = 50.'),
      bubble(topic, 'q5', `Bài 5 (Thử thách): Tìm hai số có tổng bằng 30 và hiệu bằng 10. Số lớn là:`, '20', ['15', '25'], 'Số lớn = (30 + 10) : 2 = 20.')
    ];
  }
  return [
    bubble(topic, 'q1', `Bài 1 (Khái niệm): Phân số 3/5 có tử số là:`, '3', ['5', '8'], 'Tử số viết trên gạch ngang.'),
    bubble(topic, 'q2', `Bài 2 (Tính toán): 2,5 + 3,7 = ?`, '6,2', ['5,2', '6,12'], 'Đặt tính thẳng cột dấu phẩy rồi cộng.'),
    bubble(topic, 'q3', `Bài 3 (Hình học): Diện tích hình tam giác có đáy 6 cm, chiều cao 4 cm là:`, '12 cm²', ['24 cm²', '10 cm²'], 'Diện tích = (6 × 4) : 2 = 12 cm².'),
    bubble(topic, 'q4', `Bài 4 (Toán đố): Một xe đi 90 km trong 2 giờ. Vận tốc của xe là:`, '45 km/h', ['40 km/h', '180 km/h'], 'Vận tốc v = s : t = 90 : 2 = 45 km/h.'),
    bubble(topic, 'q5', `Bài 5 (Thử thách): 20% của 200 là bao nhiêu?`, '40', ['20', '50'], '200 × 20 : 100 = 40.')
  ];
}

function generateGrade1Math(topic: CurriculumTopic): Question[] {
  const text = `${topic.title} ${topic.description}`.toLowerCase();
  const n = topic.lessonNumber;

  if (includesAny(text, ['nhiều hơn', 'ít hơn', 'bằng nhau', 'so sánh số'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (So sánh): Nhóm A có 6 quả bóng, nhóm B có 4 quả bóng. Nhóm nào có nhiều bóng hơn?', 'Nhóm A', ['Nhóm B', 'Hai nhóm bằng nhau'], 'So sánh 6 với 4.'),
      bubble(topic, 'q2', 'Bài 2 (So sánh): Điền dấu thích hợp: 7 ... 5', '>', ['<', '='], '7 lớn hơn 5.'),
      bubble(topic, 'q3', 'Bài 3 (So sánh): Điền dấu thích hợp: 3 ... 3', '=', ['>', '<'], 'Hai số cùng bằng 3.'),
      bubble(topic, 'q4', 'Bài 4 (Nhiều hơn): Lan có 8 bông hoa, Mai có 6 bông hoa. Lan nhiều hơn Mai mấy bông hoa?', '2 bông hoa', ['14 bông hoa', '1 bông hoa'], 'Lấy 8 - 6 = 2.'),
      bubble(topic, 'q5', 'Bài 5 (Ít hơn): Trong các số 9, 2, 6, số bé nhất là số nào?', '2', ['6', '9'], 'So sánh lần lượt ba số.')
    ];
  }

  if (includesAny(text, ['vị trí', 'định hướng', 'trên, dưới', 'trái, phải'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Vị trí): Quả bóng ở bên trái chú gấu. Quả bóng ở phía nào của chú gấu?', 'Bên trái', ['Bên phải', 'Ở trên'], 'Quan sát vị trí của quả bóng so với chú gấu.'),
      bubble(topic, 'q2', 'Bài 2 (Định hướng): Chú chim đang đậu ở cành cây phía trên hay phía dưới chú sóc?', 'Phía trên', ['Phía dưới', 'Bên trái'], 'Quan sát hình ảnh trên dưới.'),
      bubble(topic, 'q3', 'Bài 3 (Phân biệt): Tay cầm bút thường là tay phải hay tay trái của bé?', 'Tay phải', ['Tay trái', 'Cả hai tay'], 'Nhận biết bên phải và bên trái cơ thể.'),
      bubble(topic, 'q4', 'Bài 4 (Tình huống): Xe ô tô đi ở phía trước xe đạp. Xe đạp ở phía nào so với ô tô?', 'Phía sau', ['Phía trước', 'Ở giữa'], 'Nhận biết trước và sau.'),
      bubble(topic, 'q5', 'Bài 5 (Thử thách): Đồ vật nằm ở giữa hai chiếc hộp là đồ vật số mấy?', 'Đồ vật ở giữa', ['Đồ vật bên ngoài', 'Không có đồ vật'], 'Nhận biết vị trí ở giữa hai vật.')
    ];
  }
  if (includesAny(text, ['khối lập phương', 'khối hộp chữ nhật'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Nhận biết): Hộp quà có 6 mặt đều là hình vuông. Đó là khối gì?', 'Khối lập phương', ['Khối hộp chữ nhật', 'Hình tròn'], 'Khối lập phương có 6 mặt hình vuông.'),
      bubble(topic, 'q2', 'Bài 2 (Hình khối): Bao diêm hoặc hộp sữa tươi thường có dạng khối gì?', 'Khối hộp chữ nhật', ['Khối lập phương', 'Khối cầu'], 'Hộp sữa có các mặt hình chữ nhật.'),
      bubble(topic, 'q3', 'Bài 3 (Đếm mặt): Khối lập phương có tất cả bao nhiêu mặt?', '6 mặt', ['4 mặt', '8 mặt'], 'Đếm 6 mặt của khối lập phương.'),
      bubble(topic, 'q4', 'Bài 4 (Thực tế): Viên xúc xắc chơi cá ngựa có dạng khối nào?', 'Khối lập phương', ['Khối hộp chữ nhật', 'Hình trụ'], 'Viên xúc xắc là khối lập phương hoàn hảo.'),
      bubble(topic, 'q5', 'Bài 5 (Thử thách): Khối lập phương và khối hộp chữ nhật có điểm nào giống nhau?', 'Đều có 6 mặt', ['Mặt nào cũng là hình tròn', 'Chỉ có 4 mặt'], 'Cả hai khối đều có 6 mặt phẳng.')
    ];
  }
  if (includesAny(text, ['hình vuông', 'hình tròn', 'hình tam giác', 'hình chữ nhật', 'lắp ghép', 'xếp hình'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Nhận biết): Chiếc đĩa tròn ăn cơm có dạng hình học nào?', 'Hình tròn', ['Hình tam giác', 'Hình vuông'], 'Đĩa tròn có dạng hình tròn.'),
      bubble(topic, 'q2', 'Bài 2 (Nhận biết): Biển báo giao thông hình tam giác có mấy cạnh?', '3 cạnh', ['4 cạnh', '2 cạnh'], 'Hình tam giác có đúng 3 cạnh.'),
      bubble(topic, 'q3', 'Bài 3 (So sánh): Khung cửa sổ lớp học thường có dạng hình gì?', 'Hình chữ nhật', ['Hình tròn', 'Hình tam giác'], 'Khung cửa sổ có 2 chiều dài bằng nhau, 2 chiều rộng bằng nhau.'),
      bubble(topic, 'q4', 'Bài 4 (Lắp ghép): Ghép 2 hình tam giác vuông giống nhau ta có thể được hình gì?', 'Hình vuông', ['Hình tròn', 'Hình trụ'], 'Ghép 2 tam giác vuông tạo thành hình vuông.'),
      bubble(topic, 'q5', 'Bài 5 (Thử thách): Hình nào sau đây không có góc và cạnh thẳng?', 'Hình tròn', ['Hình vuông', 'Hình chữ nhật'], 'Hình tròn được tạo bởi đường cong tròn khép kín.')
    ];
  }
  if (includesAny(text, ['ngày trong tuần', 'tuần', 'đồng hồ', 'xem lịch', 'giờ đúng'])) {
    const hours = (n % 8) + 1;
    return [
      bubble(topic, 'q1', 'Bài 1 (Thời gian): Một tuần lễ có bao nhiêu ngày?', '7 ngày', ['5 ngày', '10 ngày'], 'Từ Thứ Hai đến Chủ Nhật là 7 ngày.'),
      bubble(topic, 'q2', `Bài 2 (Xem giờ): Kim dài chỉ số 12, kim ngắn chỉ số ${hours}. Đồng hồ chỉ mấy giờ?`, `${hours} giờ đúng`, [`${hours + 1} giờ đúng`, `${hours === 1 ? 12 : hours - 1} giờ đúng`], 'Kim dài chỉ 12 là giờ đúng.', { visualType: 'clock', visualData: { hours, minutes: 0 } }),
      bubble(topic, 'q3', 'Bài 3 (Lịch biểu): Ngày đầu tiên trong tuần lễ đi học là ngày thứ mấy?', 'Thứ Hai', ['Thứ Bảy', 'Chủ Nhật'], 'Thứ Hai là ngày bắt đầu tuần học.'),
      bubble(topic, 'q4', 'Bài 4 (Đồng hồ): Buổi sáng bé thức dậy lúc mấy giờ?', '6 giờ đúng', ['12 giờ đêm', '2 giờ chiều'], '6 giờ sáng là giờ thức dậy hợp lý.'),
      bubble(topic, 'q5', 'Bài 5 (Thử thách): Hôm nay là Thứ Ba, ngày mai sẽ là thứ mấy?', 'Thứ Tư', ['Thứ Hai', 'Thứ Năm'], 'Thứ Tư liền sau Thứ Ba.')
    ];
  }
  if (includesAny(text, ['xăng-ti-mét', 'đo độ dài', 'dài hơn', 'ngắn hơn', 'thực hành đo'])) {
    const len = (n % 5) + 4;
    return [
      bubble(topic, 'q1', 'Bài 1 (Đơn vị): Kí hiệu của xăng-ti-mét viết tắt là gì?', 'cm', ['m', 'kg'], 'Xăng-ti-mét viết tắt là cm.'),
      bubble(topic, 'q2', `Bài 2 (Đo đạc): Chiếc bút chì trong hình dài bao nhiêu cm?`, `${len} cm`, [`${len - 1} cm`, `${len + 1} cm`], 'Đọc vạch thước từ số 0.', { visualType: 'ruler', visualData: { lengthCm: len } }),
      bubble(topic, 'q3', 'Bài 3 (So sánh): Cây bút chì dài 10 cm, cục tẩy dài 4 cm. Bút chì dài hơn cục tẩy mấy cm?', '6 cm', ['14 cm', '4 cm'], '10 - 4 = 6 cm.'),
      bubble(topic, 'q4', 'Bài 4 (Đo độ dài): Đoạn thẳng AB dài 5 cm, đoạn BC dài 3 cm. Cả hai đoạn dài:', '8 cm', ['2 cm', '15 cm'], '5 + 3 = 8 cm.'),
      bubble(topic, 'q5', 'Bài 5 (Thử thách): Khi đo độ dài một vật bằng thước, đầu vật phải đặt trùng vạch số mấy?', 'Vạch số 0', ['Vạch số 1', 'Vạch cuối thước'], 'Phải đặt một đầu ở vạch 0.')
    ];
  }
  if (includesAny(text, ['tách', 'gộp', 'mấy và mấy'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Tách gộp): Số 5 gồm 3 và mấy?', '2', ['1', '3'], '5 tách thành 3 và 2.'),
      bubble(topic, 'q2', 'Bài 2 (Tách gộp): 4 gộp với 2 được mấy?', '6', ['5', '7'], '4 + 2 = 6.'),
      bubble(topic, 'q3', 'Bài 3 (Tách số): Số 8 có thể tách thành 4 và mấy?', '4', ['3', '5'], '8 tách thành 4 và 4.'),
      bubble(topic, 'q4', 'Bài 4 (Toán đố): Có 7 quả bóng, chia cho An 3 quả. Còn lại mấy quả?', '4 quả', ['5 quả', '3 quả'], '7 - 3 = 4 quả.'),
      bubble(topic, 'q5', 'Bài 5 (Thử thách): Số nào gộp với 5 để được số 10?', '5', ['4', '6'], '5 + 5 = 10.')
    ];
  }
  if (includesAny(text, ['phép trừ', 'bảng trừ'])) {
    const min = (n % 4) + 6;
    const sub = (n % 3) + 1;
    return [
      keypad(topic, 'q1', `Bài 1 (Tính nhẩm): ${min} - ${sub} = ?`, min - sub, 'Bớt đi số ở sau dấu trừ.'),
      bubble(topic, 'q2', `Bài 2 (Tìm số): 9 - ? = 4. Số cần điền là:`, '5', ['4', '6'], '9 - 5 = 4.'),
      bubble(topic, 'q3', `Bài 3 (So sánh): Điền dấu thích hợp: 8 - 3 ... 4`, '>', ['<', '='], '8 - 3 = 5, mà 5 > 4.'),
      bubble(topic, 'q4', `Bài 4 (Toán đố): Cành cây có 8 chú chim, 3 chú bay đi. Còn lại mấy chú chim?`, '5 chú chim', ['6 chú chim', '11 chú chim'], '8 - 3 = 5 chú chim.'),
      keypad(topic, 'q5', `Bài 5 (Thử thách): 10 - 2 - 3 = ?`, 5, '10 - 2 = 8, 8 - 3 = 5.')
    ];
  }
  if (includesAny(text, ['phép cộng', 'bảng cộng'])) {
    const left = (n % 4) + 3;
    const right = (n % 3) + 2;
    return [
      keypad(topic, 'q1', `Bài 1 (Tính nhẩm): ${left} + ${right} = ?`, left + right, 'Gộp hai nhóm lại và đếm tổng.'),
      bubble(topic, 'q2', `Bài 2 (Tìm số): 4 + ? = 9. Số cần điền là:`, '5', ['4', '6'], '4 + 5 = 9.'),
      bubble(topic, 'q3', `Bài 3 (So sánh): Điền dấu thích hợp: 3 + 4 ... 8`, '<', ['>', '='], '3 + 4 = 7, mà 7 < 8.'),
      bubble(topic, 'q4', `Bài 4 (Toán đố): Bạn Hoa có 4 bút chì, bạn Minh có 3 bút chì. Cả hai bạn có:`, '7 bút chì', ['8 bút chì', '1 bút chì'], '4 + 3 = 7 bút chì.'),
      keypad(topic, 'q5', `Bài 5 (Thử thách): 2 + 3 + 4 = ?`, 9, '2 + 3 = 5, 5 + 4 = 9.')
    ];
  }
  if (includesAny(text, ['hai chữ số', '11 đến 20', 'bảng các số', 'số đến 100', 'phạm vi 100', 'các số'])) {
    const val = 10 + ((n * 3) % 40);
    return [
      bubble(topic, 'q1', `${text.includes('bảng các số') ? 'Bảng số đến 100' : 'Bài 1 (Cấu tạo số)'}: Số ${val} gồm mấy chục và mấy đơn vị?`, `${Math.floor(val / 10)} chục và ${val % 10} đơn vị`, [`${val % 10} chục và ${Math.floor(val / 10)} đơn vị`, `${val} chục`], 'Chữ số trước chỉ chục, sau chỉ đơn vị.'),
      bubble(topic, 'q2', `Bài 2 (Thứ tự): Số liền sau của số ${val} là:`, `${val + 1}`, [`${val - 1}`, `${val + 10}`], 'Số liền sau hơn số đã cho 1 đơn vị.'),
      bubble(topic, 'q3', `Bài 3 (Thứ tự): Số liền trước của số ${val} là:`, `${val - 1}`, [`${val + 1}`, `${val - 10}`], 'Số liền trước kém số đã cho 1 đơn vị.'),
      bubble(topic, 'q4', `Bài 4 (So sánh): Trong các số ${val}, ${val + 5}, ${val - 2}, số lớn nhất là:`, `${val + 5}`, [`${val}`, `${val - 2}`], 'So sánh các số.'),
      bubble(topic, 'q5', `Bài 5 (Thử thách): Số tròn chục liền sau số 20 là số nào?`, '30', ['21', '40'], 'Số tròn chục có chữ số tận cùng là 0.')
    ];
  }
  return reviewQuestions(topic, 1);
}

function generateGrade2Math(topic: CurriculumTopic): Question[] {
  const text = `${topic.title} ${topic.description}`.toLowerCase();
  const n = topic.lessonNumber;

  if (includesAny(text, ['thành phần của phép cộng', 'thành phần của phép trừ'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Số hạng): Trong phép tính 27 + 15 = 42, số 27 và số 15 được gọi là gì?', 'Số hạng', ['Tổng', 'Hiệu'], 'Các số được cộng với nhau gọi là số hạng.'),
      bubble(topic, 'q2', 'Bài 2 (Tổng): Trong phép tính 27 + 15 = 42, số 42 được gọi là gì?', 'Tổng', ['Số hạng', 'Số trừ'], 'Kết quả của phép cộng gọi là tổng.'),
      bubble(topic, 'q3', 'Bài 3 (Số bị trừ): Trong phép tính 63 - 21 = 42, số 63 được gọi là gì?', 'Số bị trừ', ['Số trừ', 'Hiệu'], 'Số đứng trước dấu trừ là số bị trừ.'),
      bubble(topic, 'q4', 'Bài 4 (Số trừ): Trong phép tính 63 - 21 = 42, số 21 được gọi là gì?', 'Số trừ', ['Số bị trừ', 'Tổng'], 'Số được bớt đi gọi là số trừ.'),
      bubble(topic, 'q5', 'Bài 5 (Hiệu): Trong phép tính 63 - 21 = 42, số 42 được gọi là gì?', 'Hiệu', ['Tổng', 'Số hạng'], 'Kết quả của phép trừ gọi là hiệu.')
    ];
  }

  if (includesAny(text, ['chắc chắn', 'có thể', 'không thể', 'thống kê', 'biểu đồ tranh', 'kiểm đếm'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Xác suất): Mặt Trời mọc ở hướng Đông là điều chắc chắn, có thể hay không thể?', 'Điều chắc chắn', ['Điều không thể', 'Điều có thể nhưng chưa biết'], 'Quy luật tự nhiên luôn chắc chắn xảy ra.'),
      bubble(topic, 'q2', 'Bài 2 (Xác suất): Gieo một đồng xu, mặt sấp xuất hiện là điều gì?', 'Có thể xảy ra', ['Chắc chắn xảy ra', 'Không thể xảy ra'], 'Có thể là mặt sấp hoặc mặt ngửa.'),
      bubble(topic, 'q3', 'Bài 3 (Xác suất): Con voi biết bay trên trời là điều gì?', 'Không thể xảy ra', ['Chắc chắn', 'Có thể'], 'Voi không có cánh nên không thể bay.'),
      bubble(topic, 'q4', 'Bài 4 (Biểu đồ tranh): Mỗi bông hoa ⭐ tương ứng 1 điểm. Bạn Mai có 4 bông hoa là được mấy điểm?', '4 điểm', ['3 điểm', '5 điểm'], 'Đọc quy ước của biểu đồ tranh.'),
      bubble(topic, 'q5', 'Bài 5 (Thống kê): Kiểm đếm số bạn thích ăn cam, táo, chuối là hoạt động gì?', 'Thu thập và xử lý số liệu', ['Đo độ dài', 'Tính chu vi'], 'Đếm và ghi lại số lượng.')
    ];
  }
  if (includesAny(text, ['ki-lô-gam', 'lít', 'cân đo', 'cân, đo', 'khối lượng', 'dung tích'])) {
    const w1 = (n % 4) + 3;
    const w2 = (n % 3) + 2;
    return [
      bubble(topic, 'q1', 'Bài 1 (Đơn vị): Đơn vị nào dùng để đo khối lượng (cân nặng)?', 'Ki-lô-gam (kg)', ['Lít (l)', 'Xăng-ti-mét (cm)'], 'Ki-lô-gam dùng đo cân nặng.'),
      bubble(topic, 'q2', 'Bài 2 (Đơn vị): Đơn vị nào dùng để đo dung tích chất lỏng (nước, sữa)?', 'Lít (l)', ['Ki-lô-gam (kg)', 'Mét (m)'], 'Lít dùng đo thể tích chất lỏng.'),
      bubble(topic, 'q3', `Bài 3 (Tính toán): Túi gạo nặng ${w1} kg, túi ngô nặng ${w2} kg. Cả hai túi nặng:`, `${w1 + w2} kg`, [`${w1 + w2 + 1} kg`, `${Math.abs(w1 - w2)} kg`], `${w1} + ${w2} = ${w1 + w2} kg.`),
      bubble(topic, 'q4', `Bài 4 (Toán đố): Can nước có 10 lít, rót ra 4 lít. Trong can còn lại:`, '6 lít', ['14 lít', '5 lít'], '10 - 4 = 6 lít.'),
      bubble(topic, 'q5', `Bài 5 (Thử thách): Con gà nặng 2 kg, con ngỗng nặng gấp 3 lần con gà. Con ngỗng nặng:`, '6 kg', ['5 kg', '8 kg'], '2 × 3 = 6 kg.')
    ];
  }
  if (includesAny(text, ['đề-xi-mét', 'mét', 'ki-lô-mét', 'mi-li-mét', 'đo độ dài'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Đổi đơn vị): 1 đề-xi-mét (dm) bằng bao nhiêu xăng-ti-mét (cm)?', '10 cm', ['100 cm', '1 cm'], '1 dm = 10 cm.'),
      bubble(topic, 'q2', 'Bài 2 (Đổi đơn vị): 1 mét (m) bằng bao nhiêu xăng-ti-mét (cm)?', '100 cm', ['10 cm', '1000 cm'], '1 m = 100 cm.'),
      bubble(topic, 'q3', 'Bài 3 (Đổi đơn vị): 1 ki-lô-mét (km) bằng bao nhiêu mét (m)?', '1000 m', ['100 m', '10 m'], '1 km = 1000 m.'),
      bubble(topic, 'q4', 'Bài 4 (Tính toán): Cây gậy dài 8 dm, cắt bớt 3 dm. Cây gậy còn lại dài:', '5 dm', ['11 dm', '4 dm'], '8 - 3 = 5 dm.'),
      bubble(topic, 'q5', 'Bài 5 (Thử thách): Quãng đường từ nhà đến trường thường đo bằng đơn vị nào?', 'Ki-lô-mét (km) hoặc Mét (m)', ['Xăng-ti-mét (cm)', 'Mi-li-mét (mm)'], 'Khoảng cách dài dùng km hoặc m.')
    ];
  }
  if (includesAny(text, ['bảng nhân 2', 'bảng nhân 5', 'bảng chia 2', 'bảng chia 5', 'phép nhân', 'phép chia', 'thừa số', 'thương'])) {
    const f = text.includes('5') ? 5 : 2;
    const m = (n % 6) + 3;
    return [
      bubble(topic, 'q1', `Bài 1 (Bảng tính): ${f} × ${m} = ?`, String(f * m), [String(f * m - f), String(f * m + f)], `Đọc bảng nhân ${f}.`),
      bubble(topic, 'q2', `Bài 2 (Phép chia): ${f * m} : ${f} = ?`, String(m), [String(m - 1), String(m + 1)], `Phép chia ngược với phép nhân ${f}.`),
      bubble(topic, 'q3', 'Bài 3 (Tên gọi): Trong phép tính 2 × 6 = 12, số 12 được gọi là gì?', 'Tích', ['Thừa số', 'Thương'], 'Kết quả phép nhân là Tích.'),
      bubble(topic, 'q4', `Bài 4 (Toán đố): Mỗi bàn có ${f} bạn học sinh. Có ${m} bàn như thế. Có tất cả:`, `${f * m} bạn`, [`${f + m} bạn`, `${f * m + 2} bạn`], `${f} × ${m} = ${f * m} bạn.`),
      bubble(topic, 'q5', `Bài 5 (Thử thách): Có ${f * 4} cái kẹo chia đều cho ${f} bạn. Mỗi bạn được:`, '4 cái kẹo', ['3 cái kẹo', '5 cái kẹo'], `${f * 4} : ${f} = 4 cái.`)
    ];
  }
  if (includesAny(text, ['điểm, đoạn thẳng', 'ba điểm thẳng hàng', 'đường gấp khúc', 'hình tứ giác', 'khối trụ', 'khối cầu'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Hình học): Hình tứ giác là hình có mấy cạnh và mấy đỉnh?', '4 cạnh và 4 đỉnh', ['3 cạnh và 3 đỉnh', '5 cạnh và 5 đỉnh'], 'Tứ giác có 4 cạnh.'),
      bubble(topic, 'q2', 'Bài 2 (Đường gấp khúc): Đường gấp khúc gồm 3 đoạn dài 3 cm, 4 cm, 5 cm có độ dài là:', '12 cm', ['10 cm', '15 cm'], '3 + 4 + 5 = 12 cm.'),
      bubble(topic, 'q3', 'Bài 3 (Hình khối): Quả bóng đá có dạng hình khối nào?', 'Khối cầu', ['Khối trụ', 'Khối lập phương'], 'Quả bóng tròn đều là khối cầu.'),
      bubble(topic, 'q4', 'Bài 4 (Hình khối): Lon sữa đặc hoặc ống bơ có dạng hình khối nào?', 'Khối trụ', ['Khối cầu', 'Hình tam giác'], 'Ống bơ là khối trụ.'),
      bubble(topic, 'q5', 'Bài 5 (Thử thách): Ba điểm thẳng hàng là ba điểm như thế nào?', 'Cùng nằm trên một đường thẳng', ['Nằm tạo thành hình tam giác', 'Nằm ở 3 góc khác nhau'], 'Ba điểm cùng thuộc 1 đường thẳng.')
    ];
  }
  if (includesAny(text, ['có nhớ', 'qua 10', '1000', 'ba chữ số'])) {
    const l = 35 + (n % 30);
    const r = 27 + (n % 8);
    return [
      keypad(topic, 'q1', `Bài 1 (Cộng có nhớ): ${l} + ${r} = ?`, l + r, 'Cộng từ hàng đơn vị, nhớ 1 sang hàng chục.'),
      keypad(topic, 'q2', `Bài 2 (Trừ có nhớ): ${l + r} - ${r} = ?`, l, 'Trừ từ hàng đơn vị, mượn 1 chục nếu cần.'),
      bubble(topic, 'q3', `Bài 3 (Cấu tạo số): Số 458 gồm mấy trăm, mấy chục và mấy đơn vị?`, '4 trăm, 5 chục và 8 đơn vị', ['4 trăm, 8 chục và 5 đơn vị', '45 trăm và 8 đơn vị'], 'Đọc theo hàng trăm, chục, đơn vị.'),
      bubble(topic, 'q4', `Bài 4 (So sánh): Số lớn nhất trong các số 356, 365, 563 là:`, '563', ['365', '356'], 'So sánh chữ số hàng trăm trước.'),
      bubble(topic, 'q5', `Bài 5 (Thử thách): Số tròn trăm liền trước số 500 là:`, '400', ['499', '600'], 'Số tròn trăm cách nhau 100 đơn vị.')
    ];
  }
  return reviewQuestions(topic, 2);
}

function generateGrade3Math(topic: CurriculumTopic): Question[] {
  const text = `${topic.title} ${topic.description}`.toLowerCase();
  const n = topic.lessonNumber;

  if (includesAny(text, ['bảng nhân', 'bảng chia', 'gấp một số', 'giảm đi'])) {
    const f = (n % 7) + 3;
    return [
      bubble(topic, 'q1', `Bài 1 (Bảng tính): ${f} × 7 = ?`, String(f * 7), [String(f * 6), String(f * 8)], `Đọc bảng nhân ${f}.`),
      bubble(topic, 'q2', `Bài 2 (Bảng chia): ${f * 8} : ${f} = ?`, '8', ['7', '9'], `Đọc bảng chia ${f}.`),
      bubble(topic, 'q3', `Bài 3 (Gấp số): Gấp 9 lên 4 lần được số nào?`, '36', ['13', '27'], '9 × 4 = 36.'),
      bubble(topic, 'q4', `Bài 4 (Giảm số): Giảm 48 đi 6 lần được số nào?`, '8', ['42', '6'], '48 : 6 = 8.'),
      bubble(topic, 'q5', `Bài 5 (Toán đố): Đoạn dây thứ nhất dài 6 m, đoạn thứ hai dài gấp 3 lần đoạn thứ nhất. Cả hai đoạn dài:`, '24 m', ['18 m', '9 m'], 'Đoạn 2: 6 × 3 = 18 m. Cả 2: 6 + 18 = 24 m.')
    ];
  }
  if (includesAny(text, ['góc vuông', 'hình tròn', 'la mã', 'chu vi', 'diện tích', 'cm²'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Góc vuông): Dụng cụ nào dùng để kiểm tra và vẽ góc vuông chuẩn xác?', 'Thước ê-ke', ['Com-pa', 'Nhiệt kế'], 'Thước ê-ke có góc 90° chuẩn.'),
      bubble(topic, 'q2', 'Bài 2 (Hình tròn): Hình tròn bán kính r = 5 cm thì đường kính dài bao nhiêu?', '10 cm', ['5 cm', '25 cm'], 'Đường kính d = r × 2 = 10 cm.'),
      bubble(topic, 'q3', 'Bài 3 (Số La Mã): Chữ số La Mã XIV biểu thị số nào?', '14', ['16', '9'], 'X = 10, IV = 4 => XIV = 14.'),
      bubble(topic, 'q4', 'Bài 4 (Chu vi): Hình vuông cạnh 6 cm có chu vi là:', '24 cm', ['36 cm', '12 cm'], 'Chu vi = 6 × 4 = 24 cm.'),
      bubble(topic, 'q5', 'Bài 5 (Diện tích): Hình chữ nhật dài 8 cm, rộng 5 cm có diện tích là:', '40 cm²', ['26 cm²', '13 cm²'], 'Diện tích = 8 × 5 = 40 cm².')
    ];
  }
  if (includesAny(text, ['gam', 'mi-li-lít', 'nhiệt độ', 'tiền việt nam', 'hai bước tính'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Khối lượng): 1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?', '1000 g', ['100 g', '10 g'], '1 kg = 1000 g.'),
      bubble(topic, 'q2', 'Bài 2 (Dung tích): 1 lít (l) bằng bao nhiêu mi-li-lít (ml)?', '1000 ml', ['100 ml', '10 ml'], '1 l = 1000 ml.'),
      bubble(topic, 'q3', 'Bài 3 (Nhiệt độ): Nhiệt kế dùng để đo đại lượng nào?', 'Nhiệt độ', ['Khối lượng', 'Độ dài'], 'Đo độ nóng lạnh theo độ C.'),
      bubble(topic, 'q4', 'Bài 4 (Tiền tệ): Có tờ 50 000 đồng, mua sách hết 35 000 đồng. Còn lại:', '15 000 đồng', ['25 000 đồng', '10 000 đồng'], '50 000 - 35 000 = 15 000 đ.'),
      bubble(topic, 'q5', 'Bài 5 (Toán 2 bước): Thùng 1 có 20 l dầu, thùng 2 có gấp đôi thùng 1. Cả hai thùng có:', '60 lít', ['40 lít', '50 lít'], 'Thùng 2: 40 l. Tổng: 20 + 40 = 60 l.')
    ];
  }
  if (includesAny(text, ['biểu thức số', 'giá trị của biểu thức', 'tìm x', 'tìm thành phần'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Biểu thức): Trong biểu thức có cả phép cộng và phép nhân, ta thực hiện thế nào?', 'Nhân trước, cộng sau', ['Cộng trước, nhân sau', 'Tính từ phải sang trái'], 'Thứ tự ưu tiên: nhân chia trước, cộng trừ sau.'),
      keypad(topic, 'q2', 'Bài 2 (Tính giá trị): Tính: 25 + 5 × 4 = ?', 45, '5 × 4 = 20, 25 + 20 = 45.'),
      keypad(topic, 'q3', 'Bài 3 (Trong ngoặc): Tính: (30 - 10) × 3 = ?', 60, 'Trong ngoặc trước: 20 × 3 = 60.'),
      keypad(topic, 'q4', 'Bài 4 (Tìm x): Tìm x biết x + 25 = 70. x = ?', 45, '70 - 25 = 45.'),
      keypad(topic, 'q5', 'Bài 5 (Tìm x): Tìm x biết x × 4 = 36. x = ?', 9, '36 : 4 = 9.')
    ];
  }
  return reviewQuestions(topic, 3);
}

function generateGrade4Math(topic: CurriculumTopic): Question[] {
  const text = `${topic.title} ${topic.description}`.toLowerCase();

  if (includesAny(text, ['biểu thức', 'chứa chữ', 'số chẵn, số lẻ'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Biểu thức chứa chữ): Tính giá trị của biểu thức 45 + a × 3 khi a = 5:', '60', ['150', '53'], 'Thay a = 5: 45 + 5 × 3 = 45 + 15 = 60.'),
      bubble(topic, 'q2', 'Bài 2 (Biểu thức hai chữ): Tính a + b khi a = 20, b = 35:', '55', ['50', '65'], '20 + 35 = 55.'),
      bubble(topic, 'q3', 'Bài 3 (Số chẵn số lẻ): Số nào sau đây là số chẵn?', '148', ['145', '149'], 'Số chẵn tận cùng là 0, 2, 4, 6, 8.'),
      bubble(topic, 'q4', 'Bài 4 (Số chẵn số lẻ): Tổng của hai số chẵn luôn là số gì?', 'Số chẵn', ['Số lẻ', 'Không xác định'], 'Chẵn + Chẵn = Chẵn.'),
      bubble(topic, 'q5', 'Bài 5 (Thử thách): Với m = 8, biểu thức 100 - m × 10 có giá trị là:', '20', ['80', '92'], '100 - 8 × 10 = 100 - 80 = 20.')
    ];
  }
  if (includesAny(text, ['giao hoán', 'kết hợp', 'phân phối'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Giao hoán phép cộng): Với hai số a và b, biểu thức nào bằng a + b?', 'b + a', ['a - b', 'a × b'], 'Tính chất giao hoán của phép cộng.'),
      bubble(topic, 'q2', 'Bài 2 (Giao hoán phép nhân): Với hai số a và b, biểu thức nào bằng a × b?', 'b × a', ['a + b', 'a : b'], 'Tính chất giao hoán của phép nhân.'),
      bubble(topic, 'q3', 'Bài 3 (Kết hợp): Biểu thức (a + b) + c bằng biểu thức nào sau đây?', 'a + (b + c)', ['a × (b + c)', 'a - b + c'], 'Tính chất kết hợp của phép cộng.'),
      bubble(topic, 'q4', 'Bài 4 (Phân phối): Biểu thức (a + b) × c bằng biểu thức nào?', 'a × c + b × c', ['a × c + b', 'a + b × c'], 'Nhân một tổng với một số.'),
      bubble(topic, 'q5', 'Bài 5 (Tính nhanh): Tính thuận tiện: 25 × 7 × 4 = ?', '700', ['280', '600'], '(25 × 4) × 7 = 100 × 7 = 700.')
    ];
  }
  if (includesAny(text, ['tổng và hiệu', 'tổng và tỉ', 'hiệu và tỉ', 'trung bình cộng', 'rút về đơn vị'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Tổng - Hiệu): Tổng hai số là 50, hiệu hai số là 10. Số lớn là:', '30', ['20', '40'], 'Số lớn = (50 + 10) : 2 = 30.'),
      bubble(topic, 'q2', 'Bài 2 (Tổng - Hiệu): Tổng hai số là 50, hiệu hai số là 10. Số bé là:', '20', ['30', '15'], 'Số bé = (50 - 10) : 2 = 20.'),
      bubble(topic, 'q3', 'Bài 3 (Trung bình cộng): Tìm số trung bình cộng của 20, 30 và 40:', '30', ['25', '35'], '(20 + 30 + 40) : 3 = 30.'),
      bubble(topic, 'q4', 'Bài 4 (Rút về đơn vị): Mua 4 quyển vở hết 32 000 đ. Mua 6 quyển như thế hết:', '48 000 đồng', ['40 000 đồng', '56 000 đồng'], '1 quyển: 8 000 đ. 6 quyển: 48 000 đ.'),
      bubble(topic, 'q5', 'Bài 5 (Tổng - Tỉ): Hai số có tổng là 45, tỉ số là 2/3. Số bé là:', '18', ['27', '15'], '45 : (2 + 3) × 2 = 18.')
    ];
  }
  if (includesAny(text, ['phân số'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Khái niệm): Trong phân số 5/8, số 5 được gọi là gì?', 'Tử số', ['Mẫu số', 'Thương'], 'Tử số nằm trên gạch ngang.'),
      bubble(topic, 'q2', 'Bài 2 (Rút gọn): Rút gọn phân số 18/24 về phân số tối giản được:', '3/4', ['9/12', '2/3'], 'Chia cả tử và mẫu cho 6: 18:6 / 24:6 = 3/4.'),
      bubble(topic, 'q3', 'Bài 3 (Quy đồng & So sánh): So sánh hai phân số 3/5 và 4/5:', '4/5 lớn hơn', ['3/5 lớn hơn', 'Bằng nhau'], 'Cùng mẫu: tử lớn hơn thì phân số lớn hơn.'),
      bubble(topic, 'q4', 'Bài 4 (Cộng trừ): Tính: 1/4 + 2/4 = ?', '3/4', ['3/8', '2/16'], '(1+2)/4 = 3/4.'),
      bubble(topic, 'q5', 'Bài 5 (Nhân chia): Tính: 2/3 × 3/4 = ?', '1/2', ['5/7', '2/7'], '(2×3)/(3×4) = 6/12 = 1/2.')
    ];
  }
  if (includesAny(text, ['vuông góc', 'song song', 'góc nhọn', 'góc tù', 'góc bẹt', 'm²', 'yến, tạ, tấn', 'giây, thế kỉ'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Hình học): Hai đường thẳng không bao giờ cắt nhau dù kéo dài mãi là:', 'Hai đường thẳng song song', ['Hai đường thẳng vuông góc', 'Cắt nhau'], 'Đường thẳng song song cách đều nhau.'),
      bubble(topic, 'q2', 'Bài 2 (Góc): Góc lớn hơn góc vuông và nhỏ hơn góc bẹt là góc gì?', 'Góc tù', ['Góc nhọn', 'Góc vuông'], 'Góc tù lớn hơn 90° và nhỏ hơn 180°.'),
      bubble(topic, 'q3', 'Bài 3 (Khối lượng): 3 tấn 5 tạ bằng bao nhiêu ki-lô-gam?', '3500 kg', ['3050 kg', '350 kg'], '3 tấn = 3000 kg, 5 tạ = 500 kg => 3500 kg.'),
      bubble(topic, 'q4', 'Bài 4 (Thời gian): 1 thế kỉ bằng bao nhiêu năm?', '100 năm', ['10 năm', '1000 năm'], '1 thế kỉ = 100 năm.'),
      bubble(topic, 'q5', 'Bài 5 (Diện tích): 1 mét vuông (m²) bằng bao nhiêu đề-xi-mét vuông (dm²)?', '100 dm²', ['10 dm²', '1000 dm²'], '1 m² = 100 dm².')
    ];
  }
  return reviewQuestions(topic, 4);
}

function generateGrade5Math(topic: CurriculumTopic): Question[] {
  const text = `${topic.title} ${topic.description}`.toLowerCase();

  if (includesAny(text, ['số tự nhiên'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Giá trị chữ số): Trong số 4 582 731, chữ số 8 có giá trị là:', '80 000', ['8 000', '800 000'], 'Chữ số 8 đứng ở hàng chục nghìn.'),
      bubble(topic, 'q2', 'Bài 2 (So sánh): Số lớn nhất trong các số 45 678; 45 687; 45 768 là:', '45 768', ['45 687', '45 678'], 'So sánh lần lượt từ hàng cao nhất.'),
      bubble(topic, 'q3', 'Bài 3 (Tính toán): 12 450 + 7 550 = ?', '20 000', ['19 000', '20 100'], 'Đặt tính thẳng hàng rồi cộng.'),
      bubble(topic, 'q4', 'Bài 4 (Tính toán): 36 000 : 9 = ?', '4 000', ['400', '40 000'], '36 : 9 = 4, giữ ba chữ số 0.'),
      bubble(topic, 'q5', 'Bài 5 (Thứ tự thực hiện): 125 × 8 - 250 = ?', '750', ['1 000', '500'], 'Tính phép nhân trước: 125 × 8 = 1 000; rồi trừ 250.')
    ];
  }

  if (includesAny(text, ['hỗn số', 'phân số thập phân'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Hỗn số): Chuyển hỗn số 2 3/5 thành phân số được:', '13/5', ['11/5', '6/5'], '(2 × 5 + 3) / 5 = 13/5.'),
      bubble(topic, 'q2', 'Bài 2 (Hỗn số): Hỗn số gồm có mấy phần?', 'Phần nguyên và phần phân số', ['Hai phần nguyên', 'Chỉ có phần phân số'], 'Hỗn số gồm phần nguyên và phần phân số.'),
      bubble(topic, 'q3', 'Bài 3 (Phân số thập phân): Phân số nào là phân số thập phân?', '7/10', ['3/4', '5/6'], 'Phân số có mẫu 10, 100, 1000... là phân số thập phân.'),
      bubble(topic, 'q4', 'Bài 4 (Đổi số): Phân số 3/10 viết dưới dạng số thập phân là:', '0,3', ['3,0', '0,03'], '3/10 = 0,3.'),
      bubble(topic, 'q5', 'Bài 5 (Thử thách): Chuyển phân số 17/5 thành hỗn số được:', '3 2/5', ['2 3/5', '3 1/5'], '17 : 5 = 3 dư 2 => 3 2/5.')
    ];
  }
  if (includesAny(text, ['số thập phân'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Khái niệm): Trong số thập phân 12,345, chữ số 4 thuộc hàng nào?', 'Hàng phần trăm', ['Hàng phần mười', 'Hàng phần nghìn'], 'Sau dấu phẩy: phần mười, phần trăm, phần nghìn.'),
      bubble(topic, 'q2', 'Bài 2 (So sánh): So sánh hai số thập phân 4,5 và 4,49:', '4,5 lớn hơn', ['4,49 lớn hơn', 'Bằng nhau'], 'So sánh hàng phần mười: 5 > 4 nên 4,5 > 4,49.'),
      keypad(topic, 'q3', 'Bài 3 (Cộng trừ): Tính: 12,5 + 7,8 = ?', '20,3', 'Đặt thẳng cột dấu phẩy rồi cộng.'),
      bubble(topic, 'q4', 'Bài 4 (Nhân chia): Tính: 4,5 × 2 = ?', '9', ['8,5', '90'], '4,5 × 2 = 9.'),
      bubble(topic, 'q5', 'Bài 5 (Nhân 10): Khi nhân một số thập phân với 10, ta dịch dấu phẩy thế nào?', 'Sang phải 1 chữ số', ['Sang trái 1 chữ số', 'Bỏ dấu phẩy'], 'Nhân với 10 dịch dấu phẩy sang phải 1 chữ số.')
    ];
  }
  if (includesAny(text, ['hình tam giác', 'hình thang', 'hình tròn', 'chu vi', 'đường tròn'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Hình tam giác): Diện tích hình tam giác có đáy 10 cm, chiều cao 8 cm là:', '40 cm²', ['80 cm²', '18 cm²'], 'Diện tích = (10 × 8) : 2 = 40 cm².'),
      bubble(topic, 'q2', 'Bài 2 (Hình thang): Diện tích hình thang có 2 đáy 12 cm và 8 cm, chiều cao 6 cm là:', '60 cm²', ['120 cm²', '48 cm²'], 'Diện tích = (12 + 8) × 6 : 2 = 60 cm².'),
      bubble(topic, 'q3', 'Bài 3 (Chu vi hình tròn): Hình tròn có đường kính d = 10 cm thì chu vi là:', '31,4 cm', ['62,8 cm', '78,5 cm'], 'Chu vi = 10 × 3,14 = 31,4 cm.'),
      bubble(topic, 'q4', 'Bài 4 (Diện tích hình tròn): Hình tròn bán kính r = 5 cm có diện tích là:', '78,5 cm²', ['31,4 cm²', '15,7 cm²'], 'Diện tích = 5 × 5 × 3,14 = 78,5 cm².'),
      bubble(topic, 'q5', 'Bài 5 (Thử thách): Bán kính hình tròn tăng gấp đôi thì chu vi tăng gấp mấy lần?', 'Gấp 2 lần', ['Gấp 4 lần', 'Không đổi'], 'Chu vi tỉ lệ thuận với bán kính.')
    ];
  }
  if (includesAny(text, ['thể tích', 'hình hộp chữ nhật', 'hình lập phương', 'diện tích xung quanh'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Thể tích hộp): Hình hộp chữ nhật dài 8 cm, rộng 5 cm, cao 4 cm có thể tích là:', '160 cm³', ['104 cm³', '17 cm³'], 'Thể tích = 8 × 5 × 4 = 160 cm³.'),
      bubble(topic, 'q2', 'Bài 2 (Thể tích lập phương): Hình lập phương cạnh 4 cm có thể tích là:', '64 cm³', ['16 cm³', '48 cm³'], 'Thể tích = 4 × 4 × 4 = 64 cm³.'),
      bubble(topic, 'q3', 'Bài 3 (Diện tích toàn phần): Hình lập phương cạnh 5 cm có diện tích toàn phần là:', '150 cm²', ['100 cm²', '125 cm²'], 'Stp = (5 × 5) × 6 = 150 cm².'),
      bubble(topic, 'q4', 'Bài 4 (Đổi thể tích): 1 mét khối (m³) bằng bao nhiêu đề-xi-mét khối (dm³)?', '1000 dm³', ['100 dm³', '10 000 dm³'], '1 m³ = 1000 dm³ = 1000 lít.'),
      bubble(topic, 'q5', 'Bài 5 (Thực tế): Một bể cá hình hộp chữ nhật chứa đầy nước được 500 dm³. Thể tích nước là:', '500 lít', ['50 lít', '5000 lít'], '1 dm³ = 1 lít.')
    ];
  }
  if (includesAny(text, ['chuyển động', 'vận tốc', 'quãng đường', 'thời gian', 'tỉ số phần trăm', '%'])) {
    return [
      bubble(topic, 'q1', 'Bài 1 (Vận tốc): Một người đi được 12 km trong 3 giờ. Vận tốc của người đó là:', '4 km/h', ['36 km/h', '15 km/h'], 'v = s : t = 12 : 3 = 4 km/h.'),
      bubble(topic, 'q2', 'Bài 2 (Quãng đường): Xe máy đi với vận tốc 40 km/h trong 2,5 giờ. Quãng đường đi được là:', '100 km', ['90 km', '80 km'], 's = v × t = 40 × 2,5 = 100 km.'),
      bubble(topic, 'q3', 'Bài 3 (Ngược chiều): Hai xe cách nhau 150 km, đi ngược chiều với vận tốc 40 km/h và 35 km/h. Sau bao lâu gặp nhau?', '2 giờ', ['3 giờ', '1,5 giờ'], '150 : (40 + 35) = 2 giờ.'),
      bubble(topic, 'q4', 'Bài 4 (Phần trăm): Lớp 5A có 40 học sinh, trong đó có 20 bạn nữ. Tỉ số phần trăm số bạn nữ là:', '50%', ['40%', '20%'], '20 : 40 × 100% = 50%.'),
      bubble(topic, 'q5', 'Bài 5 (Giá trị phần trăm): Tìm 20% của 150 kg:', '30 kg', ['20 kg', '45 kg'], '150 × 20 : 100 = 30 kg.')
    ];
  }
  return reviewQuestions(topic, 5);
}

export function generateMathQuestions(topic: CurriculumTopic, grade: GradeLevel): Question[] {
  const generated = (() => {
    switch (grade) {
      case 1: return generateGrade1Math(topic);
      case 2: return generateGrade2Math(topic);
      case 3: return generateGrade3Math(topic);
      case 4: return generateGrade4Math(topic);
      case 5: return generateGrade5Math(topic);
      default: return generateGrade1Math(topic);
    }
  })();
  return generated.map((question) => ({
    ...question,
    contentOrigin: 'system_generated',
    audioText: question.audioText || question.questionText,
  }));
}
