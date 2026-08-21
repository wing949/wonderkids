import { GradeLevel, Question } from '../../../types';
import { CurriculumTopic } from '../types';

type QuestionExtra = Pick<Question, 'visualType' | 'visualData' | 'hint'>;

const includesAny = (text: string, cues: string[]) => cues.some((cue) => text.includes(cue));
const hasWord = (text: string, word: string) => new RegExp(`(^|[^\\p{L}])${word}(?!\\p{L})`, 'u').test(text);

function bubble(
  topic: CurriculumTopic,
  suffix: string,
  questionText: string,
  correct: string,
  distractors: string[],
  hint: string,
  extra: QuestionExtra = {},
): Question {
  const options = [correct, ...distractors].map((label, index) => ({
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

function reviewQuestion(topic: CurriculumTopic, grade: GradeLevel): Question {
  const n = topic.lessonNumber;
  if (grade === 1) {
    const left = (n % 5) + 3;
    const right = (n % 3) + 1;
    return bubble(topic, 'q1', `Ôn tập: ${left} + ${right} = ?`, String(left + right), [String(left + right - 1), String(left + right + 1)], 'Đếm gộp hai nhóm đồ vật rồi chọn kết quả.');
  }
  if (grade === 2) {
    const left = 20 + n;
    const right = n % 2 === 0 ? 12 : 8;
    return bubble(topic, 'q1', `Ôn tập: ${left} ${n % 2 === 0 ? '+' : '-'} ${right} = ?`, String(n % 2 === 0 ? left + right : left - right), [String(left), String(left + right + 1)], 'Đặt tính thẳng cột rồi tính từ hàng đơn vị.');
  }
  if (grade === 3) {
    const hundreds = (n % 7) + 1;
    const tens = ((n + 2) % 7) + 1;
    const ones = ((n + 4) % 7) + 1;
    const value = 1000 + hundreds * 100 + tens * 10 + ones;
    return bubble(topic, 'q1', `Ôn tập: Số ${value.toLocaleString('vi-VN')} có chữ số hàng trăm là:`, String(hundreds), [String(tens), String(ones)], 'Nhìn từ phải sang trái: đơn vị, chục, trăm.');
  }
  if (grade === 4) {
    const tenThousands = ((n + 4) % 7) + 1;
    const thousands = (n % 7) + 1;
    const hundreds = ((n + 2) % 7) + 1;
    const value = 100000 + tenThousands * 10000 + thousands * 1000 + hundreds * 100 + 64;
    return bubble(topic, 'q1', `Ôn tập: Số ${value.toLocaleString('vi-VN')} có chữ số hàng nghìn là:`, String(thousands), [String(hundreds), String(tenThousands)], 'Xác định vị trí của hàng nghìn từ phải sang trái.');
  }
  const left = 20 + n / 10;
  const right = 4.5;
  const answer = (left + right).toFixed(1).replace('.', ',');
  return bubble(topic, 'q1', `Ôn tập: ${left.toFixed(1).replace('.', ',')} + ${right.toString().replace('.', ',')} = ?`, answer, [(left + right - 1).toFixed(1).replace('.', ','), (left + right + 1).toFixed(1).replace('.', ',')], 'Đặt thẳng hàng các chữ số cùng hàng rồi cộng.');
}

function generateGrade1Math(topic: CurriculumTopic): Question[] {
  const text = `${topic.title} ${topic.description}`.toLowerCase();
  const n = topic.lessonNumber;

  if (includesAny(text, ['ôn tập']) && !includesAny(text, ['hình học', 'đo lường', 'phép cộng', 'phép trừ', 'các số'])) return [reviewQuestion(topic, 1)];
  if (includesAny(text, ['vị trí', 'định hướng'])) return [bubble(topic, 'q1', 'Quả bóng ở bên trái bạn Gấu. Quả bóng ở phía nào của bạn Gấu?', 'Bên trái', ['Bên phải', 'Ở trên'], 'Quan sát vị trí của quả bóng so với bạn Gấu.')];
  if (includesAny(text, ['khối lập phương', 'khối hộp'])) return [bubble(topic, 'q1', 'Hộp quà có 6 mặt đều là hình vuông. Hộp quà có dạng khối lập phương hay khối hộp chữ nhật?', 'Khối lập phương', ['Khối hộp chữ nhật', 'Hình tròn'], 'Khối lập phương có các mặt hình vuông.')];
  if (includesAny(text, ['lắp ghép', 'xếp hình'])) return [bubble(topic, 'q1', 'Dùng các mảnh hình phẳng để tạo thành một ngôi nhà là hoạt động gì?', 'Lắp ghép, xếp hình', ['Đo độ dài', 'Xem lịch'], 'Quan sát cách các mảnh hình được ghép lại thành một hình mới.')];
  if (includesAny(text, ['hình phẳng', 'hình vuông', 'hình tròn', 'hình tam giác', 'hình chữ nhật'])) return [bubble(topic, 'q1', 'Một chiếc đĩa tròn thường có dạng hình gì?', 'Hình tròn', ['Hình tam giác', 'Hình vuông'], 'Nhận biết hình dạng của đồ vật quen thuộc.')];
  if (includesAny(text, ['ngày trong tuần', 'tuần'])) return [bubble(topic, 'q1', 'Một tuần lễ có bao nhiêu ngày?', '7 ngày', ['5 ngày', '10 ngày'], 'Đọc đủ các ngày từ Thứ Hai đến Chủ Nhật.')];
  if (includesAny(text, ['đồng hồ', 'xem lịch', 'giờ'])) {
    const hours = (n % 8) + 1;
    return [bubble(topic, 'q1', `Kim dài chỉ số 12, kim ngắn chỉ số ${hours}. Đồng hồ chỉ mấy giờ?`, `${hours} giờ đúng`, [`${hours + 1} giờ đúng`, `${hours === 1 ? 12 : hours - 1} giờ đúng`], 'Kim dài ở số 12 là giờ đúng; kim ngắn chỉ số nào thì đọc giờ đó.', { visualType: 'clock', visualData: { hours, minutes: 0 } })];
  }
  if (includesAny(text, ['xăng-ti-mét', 'đo độ dài', 'dài hơn', 'ngắn hơn'])) {
    const lengthCm = (n % 5) + 4;
    return [bubble(topic, 'q1', 'Chiếc bút chì dài bao nhiêu xăng-ti-mét?', `${lengthCm} cm`, [`${lengthCm - 1} cm`, `${lengthCm + 1} cm`], 'Đặt một đầu vật trùng vạch 0 rồi đọc vạch ở đầu kia.', { visualType: 'ruler', visualData: { lengthCm } })];
  }
  if (includesAny(text, ['so sánh số', 'nhiều hơn', 'ít hơn', 'bằng nhau'])) return [bubble(topic, 'q1', 'Điền dấu thích hợp: 8 ... 5', '8 > 5', ['8 < 5', '8 = 5'], 'Số 8 lớn hơn số 5 nên dùng dấu lớn hơn.')];
  if (includesAny(text, ['tách', 'gộp'])) return [bubble(topic, 'q1', 'Số 7 có thể tách thành 5 và mấy?', '2', ['1', '3'], 'Tìm số còn thiếu để 5 gộp với số đó được 7.')];
  if (text.includes('phép tính') && text.includes('phạm vi 20')) return [keypad(topic, 'q1', 'Luyện tập phép cộng và phép trừ trong phạm vi 20: 8 + 7 = ?', 15, 'Tính lần lượt các phép cộng, phép trừ trong phạm vi 20.')];
  if (text.includes('phạm vi 100') && includesAny(text, ['phép cộng', 'phép trừ'])) return [keypad(topic, 'q1', 'Luyện tập phép cộng và phép trừ trong phạm vi 100: 46 - 18 = ?', 28, 'Đặt tính thẳng cột rồi tính.')];
  if (includesAny(text, ['phép trừ', 'bảng trừ'])) {
    if (text.includes('hai chữ số')) {
      const minuend = text.includes('cho số có hai chữ số') ? 63 : 42;
      const subtrahend = text.includes('cho số có hai chữ số') ? 21 : 7;
      return [keypad(topic, 'q1', `Tính: ${minuend} - ${subtrahend} = ?`, minuend - subtrahend, 'Đặt tính thẳng cột rồi trừ từ hàng đơn vị.')];
    }
    const minuend = (n % 4) + 6;
    const subtrahend = (n % 3) + 1;
    return [keypad(topic, 'q1', `Tính: ${minuend} - ${subtrahend} = ?`, minuend - subtrahend, 'Bớt đi số ở sau dấu trừ rồi đếm số còn lại.')];
  }
  if (includesAny(text, ['phép cộng', 'bảng cộng'])) {
    if (text.includes('hai chữ số')) {
      const left = text.includes('với số có hai chữ số') ? 23 : 24;
      const right = text.includes('với số có hai chữ số') ? 14 : 5;
      return [keypad(topic, 'q1', `Tính: ${left} + ${right} = ?`, left + right, 'Đặt tính thẳng cột rồi cộng từ hàng đơn vị.')];
    }
    const left = (n % 4) + 3;
    const right = (n % 3) + 1;
    return [keypad(topic, 'q1', `Tính: ${left} + ${right} = ?`, left + right, 'Gộp hai nhóm rồi đếm tất cả.')];
  }
  if (includesAny(text, ['hai chữ số', '11 đến 20'])) return [bubble(topic, 'q1', 'Số 16 gồm mấy chục và mấy đơn vị?', '1 chục và 6 đơn vị', ['6 chục và 1 đơn vị', '16 chục'], 'Chữ số bên trái chỉ chục, chữ số bên phải chỉ đơn vị.')];
  if (includesAny(text, ['bảng các số', 'số đến 100', 'phạm vi 100'])) return [bubble(topic, 'q1', 'Trong bảng các số từ 1 đến 100, số đứng ngay sau 49 là:', '50', ['48', '59'], 'Đếm tiếp một số sau 49.')];
  if (includesAny(text, ['các số', 'phạm vi 10', 'phạm vi 20'])) return [bubble(topic, 'q1', 'Số nào đứng ngay sau số 4?', '5', ['3', '6'], 'Đếm tiến từng bước một.')];
  return [reviewQuestion(topic, 1)];
}

function generateGrade2Math(topic: CurriculumTopic): Question[] {
  const text = `${topic.title} ${topic.description}`.toLowerCase();
  const n = topic.lessonNumber;

  if (includesAny(text, ['chắc chắn', 'có thể', 'không thể'])) return [bubble(topic, 'q1', 'Mặt Trời mọc ở phía nào là điều chắc chắn, có thể hay không thể?', 'Điều chắc chắn', ['Điều không thể', 'Điều có thể nhưng chưa biết'], 'Điều chắc chắn là điều luôn xảy ra.')];
  if (text.includes('biểu đồ tranh')) return [bubble(topic, 'q1', 'Quan sát biểu đồ tranh: nhóm nào có nhiều biểu tượng hơn?', 'Nhóm A', ['Nhóm B', 'Hai nhóm bằng nhau'], 'Đọc chú giải rồi so sánh số biểu tượng trong từng nhóm.')];
  if (includesAny(text, ['biểu đồ tranh', 'thống kê', 'phân loại', 'kiểm đếm', 'số liệu'])) return [bubble(topic, 'q1', 'Việc thu thập và ghi chép số liệu về số bạn chọn từng loại quả là hoạt động gì?', 'Thu thập và ghi chép số liệu', ['Đo độ dài', 'Tính chu vi'], 'Đếm và ghi lại thông tin là thu thập số liệu.')];
  if (text.includes('ngày - tháng')) return [bubble(topic, 'q1', 'Tháng 4 có bao nhiêu ngày?', '30 ngày', ['28 ngày', '31 ngày'], 'Tháng 4 thuộc nhóm tháng có 30 ngày.')];
  if (includesAny(text, ['ngày', 'giờ', 'tháng', 'thời gian'])) return [bubble(topic, 'q1', '1 giờ có bao nhiêu phút?', '60 phút', ['30 phút', '100 phút'], 'Nhớ mối quan hệ giữa giờ và phút.')];
  if (includesAny(text, ['khối trụ', 'khối cầu', 'hình khối'])) return [bubble(topic, 'q1', 'Quả bóng có dạng khối cầu hay khối trụ?', 'Khối cầu', ['Khối trụ', 'Khối lập phương'], 'Khối cầu tròn đều như một quả bóng.')];
  if (includesAny(text, ['ki-lô-gam', 'lít', 'cân đo', 'khối lượng', 'dung tích'])) {
    if (text.includes('lít') || text.includes('dung tích')) return [bubble(topic, 'q1', 'Một can có 8 lít nước, rót ra 3 lít. Còn lại bao nhiêu lít?', '5 lít', ['11 lít', '3 lít'], 'Lấy số lít ban đầu trừ số lít đã rót ra.')];
    return [bubble(topic, 'q1', 'Một túi gạo nặng 3 kg, túi thứ hai nặng 2 kg. Cả hai túi nặng bao nhiêu ki-lô-gam?', '5 kg', ['1 kg', '6 kg'], 'Cộng khối lượng của hai túi.')];
  }
  if (includesAny(text, ['đề-xi-mét', 'mét', 'ki-lô-mét', 'độ dài', 'đo khoảng cách'])) {
    if (text.includes('ki-lô-mét')) return [bubble(topic, 'q1', '1 ki-lô-mét bằng bao nhiêu mét?', '1000 m', ['100 m', '10 m'], 'Ki-lô-mét là đơn vị đo khoảng cách lớn.')];
    if (text.includes('đề-xi-mét')) return [bubble(topic, 'q1', '1 đề-xi-mét bằng bao nhiêu xăng-ti-mét?', '10 cm', ['100 cm', '1 cm'], 'Một dm gồm 10 cm.')];
    if (text.includes('đơn vị mét')) return [bubble(topic, 'q1', '1 mét bằng bao nhiêu xăng-ti-mét?', '100 cm', ['10 cm', '1000 cm'], 'Một mét gồm 100 xăng-ti-mét.')];
    const distance = (n % 4) + 2;
    return [bubble(topic, 'q1', `Đoạn đường từ nhà đến trường dài ${distance} km. Đơn vị km dùng để đo:`, 'Khoảng cách dài', ['Cân nặng', 'Dung tích'], 'Km dùng cho những khoảng cách lớn.')];
  }
  if (text.includes('thêm') && text.includes('bớt')) return [bubble(topic, 'q1', 'Bài toán thêm, bớt: Có 8 quả bóng, thêm 3 quả rồi bớt 2 quả. Còn lại bao nhiêu quả?', '9 quả', ['7 quả', '11 quả'], 'Thực hiện lần lượt phép cộng rồi phép trừ.')];
  if (text.includes('nhiều hơn') || text.includes('ít hơn')) return [bubble(topic, 'q1', 'Lan có 8 nhãn vở, Mai có nhiều hơn Lan 3 nhãn vở. Mai có bao nhiêu nhãn vở?', '11 nhãn vở', ['5 nhãn vở', '24 nhãn vở'], 'Nhiều hơn nghĩa là lấy số đã biết cộng phần nhiều hơn.')];
  if (includesAny(text, ['điểm', 'đoạn thẳng', 'đường thẳng', 'đường cong', 'đường gấp khúc'])) return [bubble(topic, 'q1', 'Đường gấp khúc gồm các đoạn thẳng nối tiếp nhau. Phát biểu này đúng hay sai?', 'Đúng', ['Sai', 'Không thể biết'], 'Quan sát các đoạn thẳng nối tiếp tạo thành đường gấp khúc.')];
  if (text.includes('bảng chia') && text.includes('luyện tập chung')) {
    return [bubble(topic, 'q1', 'Luyện tập bảng chia: 20 : 5 = ?', '4', ['3', '5'], 'Nhớ số nào nhân với 5 được 20.')];
  }
  if (includesAny(text, ['bảng nhân', 'phép nhân', 'thừa số'])) {
    const factor = text.includes('bảng nhân 5') ? 5 : 2;
    const other = (n % 5) + 2;
    return [bubble(topic, 'q1', `${factor} × ${other} = ?`, String(factor * other), [String(factor * other - factor), String(factor * other + factor)], 'Nhân là lấy số đó lặp lại nhiều lần.')];
  }
  if (text.includes('qua 10')) {
    if (text.includes('trừ')) return [keypad(topic, 'q1', 'Phép trừ qua 10: 15 - 8 = ?', 7, 'Tách 15 thành 10 và 5 rồi trừ 8.')];
    return [keypad(topic, 'q1', 'Phép cộng qua 10: 8 + 7 = ?', 15, 'Tách 7 thành 2 và 5 để làm tròn 10 trước.')];
  }
  if (includesAny(text, ['bảng chia', 'phép chia', 'số bị chia', 'số chia', 'thương'])) {
    const divisor = text.includes('bảng chia 5') ? 5 : 2;
    const quotient = (n % 5) + 2;
    return [bubble(topic, 'q1', `${divisor * quotient} : ${divisor} = ?`, String(quotient), [String(quotient - 1), String(quotient + 1)], 'Tìm số nhân với số chia để được số bị chia.')];
  }
  if (includesAny(text, ['so sánh', 'liền trước', 'liền sau', 'tia số'])) {
    const base = 300 + n;
    return [bubble(topic, 'q1', `Số liền sau của ${base} là:`, String(base + 1), [String(base - 1), String(base + 10)], 'Số liền sau lớn hơn số đã cho 1 đơn vị.')];
  }
  if (text.includes('phạm vi 1000') && text.includes('phép tính')) return [keypad(topic, 'q1', 'Luyện tập phép cộng và phép trừ trong phạm vi 1000: 324 + 143 = ?', 467, 'Đặt tính thẳng cột rồi tính từng hàng.')];
  if (text.includes('phạm vi 1000') && text.includes('phép cộng')) return [keypad(topic, 'q1', 'Đặt tính rồi tính phép cộng trong phạm vi 1000: 324 + 143 = ?', 467, 'Cộng từ hàng đơn vị sang hàng trăm, nhớ nếu cần.')];
  if (text.includes('phạm vi 1000') && text.includes('phép trừ')) return [keypad(topic, 'q1', 'Đặt tính rồi tính phép trừ trong phạm vi 1000: 576 - 231 = ?', 345, 'Trừ từ hàng đơn vị sang hàng trăm.')];
  if (text.includes('luyện tập chung') && text.includes('đo lường')) return [bubble(topic, 'q1', 'Ôn tập đo lường: 1 kg bằng bao nhiêu gam?', '1000 g', ['100 g', '10 g'], 'Đổi đơn vị khối lượng theo mối quan hệ đã học.')];
  if (text.includes('ôn tập phép cộng') && text.includes('phép trừ')) return [keypad(topic, 'q1', 'Ôn tập phép cộng và phép trừ: 324 + 143 = ?', 467, 'Đặt tính thẳng cột rồi tính cẩn thận.')];
  if (text.includes('viết số thành tổng')) return [bubble(topic, 'q1', 'Viết số 358 thành tổng các trăm, chục, đơn vị:', '300 + 50 + 8', ['300 + 5 + 8', '30 + 50 + 8'], 'Tách số theo đúng giá trị của từng hàng.')];
  if (includesAny(text, ['trăm', 'chục', 'đơn vị', 'ba chữ số', '1000'])) {
    const number = 400 + n;
    return [bubble(topic, 'q1', `Số ${number} gồm mấy trăm, mấy chục và mấy đơn vị?`, `${Math.floor(number / 100)} trăm, ${Math.floor(number / 10) % 10} chục, ${number % 10} đơn vị`, [`${Math.floor(number / 100)} trăm, ${number % 10} chục`, `${Math.floor(number / 10)} trăm, ${number % 10} đơn vị`], 'Đọc từng chữ số theo vị trí hàng trăm, chục, đơn vị.')];
  }
  if (includesAny(text, ['phép trừ', 'ít hơn', 'bớt'])) {
    const left = 32 + (n % 8);
    const right = 7 + (n % 4);
    return [keypad(topic, 'q1', `Tính: ${left} - ${right} = ?`, left - right, 'Đặt tính thẳng cột rồi trừ từ hàng đơn vị.')];
  }
  if (includesAny(text, ['phép cộng', 'hơn', 'thêm'])) {
    const left = 36 + (n % 8);
    const right = 7 + (n % 4);
    return [keypad(topic, 'q1', `Tính: ${left} + ${right} = ?`, left + right, 'Đặt tính thẳng cột rồi cộng từ hàng đơn vị.')];
  }
  return [reviewQuestion(topic, 2)];
}

function generateGrade3Math(topic: CurriculumTopic): Question[] {
  const text = `${topic.title} ${topic.description}`.toLowerCase();

  if (includesAny(text, ['bảng nhân'])) {
    const match = text.match(/bảng nhân\s+(\d)/);
    const factor = match ? Number(match[1]) : 3;
    return [
      bubble(topic, 'q1', `${factor} × 6 = ?`, String(factor * 6), [String(factor * 5), String(factor * 7)], `Đọc bảng nhân ${factor}.`),
      bubble(topic, 'q2', `${factor * 6} : ${factor} = ?`, '6', ['5', '7'], `Phép chia là phép tính ngược của phép nhân ${factor}.`),
    ];
  }
  if (includesAny(text, ['gấp một số', 'giảm đi'])) return [bubble(topic, 'q1', 'Gấp 6 lên 3 lần được số nào?', '18', ['9', '3'], 'Gấp một số lên một số lần là lấy số đó nhân với số lần.')];
  if (includesAny(text, ['phân số', 'một phần'])) return [bubble(topic, 'q1', 'Một hình được chia thành 4 phần bằng nhau, tô màu 1 phần. Phần tô màu là:', '1/4', ['1/3', '3/4'], 'Tử số là số phần đã lấy, mẫu số là tổng số phần bằng nhau.', { visualType: 'fraction', visualData: { numerator: 1, denominator: 4 } })];
  if (includesAny(text, ['hình tròn', 'bán kính', 'đường kính'])) return [bubble(topic, 'q1', 'Trong hình tròn, đoạn thẳng đi qua tâm và có hai đầu nằm trên đường tròn gọi là đường kính hay bán kính?', 'Đường kính', ['Bán kính', 'Cạnh'], 'Đường kính đi qua tâm và dài gấp hai lần bán kính.')];
  if (includesAny(text, ['góc vuông', 'góc không vuông', 'ê-ke'])) return [bubble(topic, 'q1', 'Dụng cụ nào dùng để kiểm tra một góc có phải góc vuông?', 'Thước ê-ke', ['Com-pa', 'Thước dây'], 'Thước ê-ke có một góc vuông chuẩn.')];
  if (includesAny(text, ['nhân số'])) return [keypad(topic, 'q1', 'Tính: 234 × 3 = ?', 702, 'Nhân lần lượt từ hàng đơn vị, chục rồi đến trăm.')];
  if (includesAny(text, ['chia số'])) return [bubble(topic, 'q1', 'Tính: 648 : 3 = ?', '216', ['206', '226'], 'Chia lần lượt theo các hàng của số bị chia.')];
  if (text.includes('gam')) return [bubble(topic, 'q1', '1 ki-lô-gam bằng bao nhiêu gam?', '1000 g', ['100 g', '10 g'], 'Nhớ mối quan hệ giữa kg và g.')];
  if (text.includes('mi-li-lít') || text.includes('mi-li-mét')) return [bubble(topic, 'q1', '1 xăng-ti-mét bằng bao nhiêu mi-li-mét?', '10 mm', ['100 mm', '1 mm'], 'Một cm được chia thành 10 mm.')];
  if (includesAny(text, ['nhiệt độ', 'nhiệt kế'])) return [bubble(topic, 'q1', 'Nhiệt kế dùng để đo đại lượng nào?', 'Nhiệt độ', ['Khối lượng', 'Độ dài'], 'Nhiệt kế cho biết vật nóng hay lạnh đến mức nào.')];
  if (text.includes('la mã')) return [bubble(topic, 'q1', 'Số 14 được viết bằng chữ số La Mã là:', 'XIV', ['XVI', 'IX'], 'X là 10, IV là 4.')];
  if (text.includes('tiền việt nam')) return [bubble(topic, 'q1', 'Một tờ 10 000 đồng và một tờ 5 000 đồng có tất cả:', '15 000 đồng', ['5 000 đồng', '20 000 đồng'], 'Cộng giá trị của hai tờ tiền.')];
  if (text.includes('chu vi')) return [bubble(topic, 'q1', 'Hình chữ nhật dài 8 cm, rộng 5 cm có chu vi là:', '26 cm', ['13 cm', '40 cm'], 'Chu vi hình chữ nhật bằng (dài + rộng) × 2.')];
  if (includesAny(text, ['diện tích', 'cm²'])) return [bubble(topic, 'q1', 'Hình chữ nhật dài 6 cm, rộng 4 cm có diện tích là:', '24 cm²', ['20 cm²', '10 cm²'], 'Diện tích bằng chiều dài nhân chiều rộng.')];
  if (includesAny(text, ['thống kê', 'số liệu'])) return [bubble(topic, 'q1', 'Trong bài thống kê, bảng ghi số liệu về số bạn thích từng loại quả là bảng gì?', 'Bảng số liệu', ['Bảng nhân', 'Bảng đơn vị đo'], 'Số liệu được thu thập và ghi thành bảng.')];
  if (text.includes('hai bước')) return [bubble(topic, 'q1', 'Bài toán cần thực hiện hai phép tính để tìm đáp số được gọi là bài toán bằng hai bước tính hay một bước tính?', 'Bài toán bằng hai bước tính', ['Bài toán một bước tính', 'Bài toán đo độ dài'], 'Đọc đề và xác định hai việc cần làm theo thứ tự.')];
  if (includesAny(text, ['phép cộng', 'phép trừ'])) return [keypad(topic, 'q1', 'Tính: 345 + 278 = ?', 623, 'Đặt thẳng cột các hàng rồi tính từ phải sang trái.')];
  if (includesAny(text, ['số có', 'phạm vi 1000', '10.000', '100.000'])) {
    const thousands = (topic.lessonNumber % 7) + 1;
    const hundreds = ((topic.lessonNumber + 2) % 7) + 1;
    const tenThousands = ((topic.lessonNumber + 4) % 7) + 1;
    const number = tenThousands * 10000 + thousands * 1000 + hundreds * 100 + 64;
    return [bubble(topic, 'q1', `Số ${number.toLocaleString('vi-VN')} có chữ số hàng nghìn là:`, String(thousands), [String(hundreds), String(tenThousands)], 'Đọc vị trí từng chữ số từ phải sang trái.')];
  }
  return [reviewQuestion(topic, 3)];
}

function generateGrade4Math(topic: CurriculumTopic): Question[] {
  const text = `${topic.title} ${topic.description}`.toLowerCase();

  if (includesAny(text, ['giây', 'thế kỉ'])) return [bubble(topic, 'q1', '1 thế kỉ bằng bao nhiêu năm?', '100 năm', ['10 năm', '1000 năm'], 'Một thế kỉ có 100 năm.')];
  if (hasWord(text, 'yến') || hasWord(text, 'tạ') || hasWord(text, 'tấn')) {
    const tons = (topic.lessonNumber % 3) + 2;
    const ta = (topic.lessonNumber % 4) + 1;
    const answer = tons * 1000 + ta * 100;
    return [bubble(topic, 'q1', `${tons} tấn ${ta} tạ bằng bao nhiêu ki-lô-gam?`, `${answer} kg`, [`${answer / 10} kg`, `${answer - 50} kg`], `${tons} tấn = ${tons * 1000} kg và ${ta} tạ = ${ta * 100} kg.`)];
  }
  if (includesAny(text, ['vuông góc', 'song song'])) return [bubble(topic, 'q1', 'Hai đường thẳng không bao giờ cắt nhau được gọi là:', 'Hai đường thẳng song song', ['Hai đường thẳng vuông góc', 'Hai đường thẳng cắt nhau'], 'Đường thẳng song song luôn cách đều nhau.')];
  if (includesAny(text, ['góc nhọn', 'góc tù', 'góc bẹt'])) return [bubble(topic, 'q1', 'Góc lớn hơn góc vuông và bé hơn góc bẹt là góc gì?', 'Góc tù', ['Góc nhọn', 'Góc vuông'], 'Góc tù lớn hơn 90° và bé hơn 180°.')];
  if (includesAny(text, ['biểu thức', 'chứa chữ'])) return [bubble(topic, 'q1', 'Tính 45 + a × 3 khi a = 5:', '60', ['150', '53'], 'Thay a bằng 5, nhân trước rồi cộng.')];
  if (text.includes('trung bình cộng')) return [bubble(topic, 'q1', 'Trung bình cộng của 25, 35 và 45 là:', '35', ['30', '40'], 'Cộng ba số rồi chia cho 3.')];
  if (text.includes('tổng và hiệu')) return [bubble(topic, 'q1', 'Tổng hai số là 48, hiệu hai số là 12. Số lớn là:', '30', ['18', '24'], 'Số lớn = (Tổng + Hiệu) : 2.')];
  if (text.includes('tổng và tỉ số')) return [bubble(topic, 'q1', 'Hai số có tổng 48 và tỉ số 3 : 5. Số bé là:', '18', ['12', '30'], 'Tổng số phần bằng nhau là 8; mỗi phần bằng 6.')];
  if (text.includes('hiệu và tỉ số')) return [bubble(topic, 'q1', 'Hai số có hiệu 12 và tỉ số 3 : 1. Số bé là:', '6', ['4', '18'], 'Hiệu ứng với 2 phần nên mỗi phần bằng 6.')];
  if (text.includes('phân số')) {
    if (text.includes('rút gọn')) return [bubble(topic, 'q1', 'Rút gọn phân số 18/24 được:', '3/4', ['9/12', '2/3'], 'Chia cả tử và mẫu cho ước chung lớn nhất là 6.')];
    if (includesAny(text, ['cộng', 'trừ'])) return [bubble(topic, 'q1', 'Tính: 3/5 + 4/5 = ?', '7/5', ['7/10', '12/25'], 'Hai phân số cùng mẫu: cộng tử số và giữ nguyên mẫu số.')];
    if (text.includes('so sánh')) return [bubble(topic, 'q1', 'Phân số nào lớn hơn: 3/4 hay 2/3?', '3/4', ['2/3', 'Hai phân số bằng nhau'], 'Quy đồng hoặc so sánh bằng phép nhân chéo.')];
    return [bubble(topic, 'q1', 'Trong phân số 3/4, số 3 được gọi là gì?', 'Tử số', ['Mẫu số', 'Thương'], 'Tử số nằm ở trên gạch phân số.')];
  }
  if (text.includes('chia hết')) return [bubble(topic, 'q1', 'Số nào sau đây chia hết cho cả 2, 3 và 5?', '30', ['25', '27'], 'Số chia hết cho 2 và 5 phải tận cùng bằng 0; tổng chữ số của 30 chia hết cho 3.')];
  if (includesAny(text, ['hình bình hành', 'hình thoi'])) return [bubble(topic, 'q1', 'Hình bình hành có đáy 8 cm và chiều cao 5 cm. Diện tích là:', '40 cm²', ['26 cm²', '13 cm²'], 'Diện tích hình bình hành bằng đáy nhân chiều cao.')];
  if (includesAny(text, ['m²', 'dm²', 'mm²'])) return [bubble(topic, 'q1', '1 m² bằng bao nhiêu dm²?', '100 dm²', ['10 dm²', '1000 dm²'], 'Mỗi chiều dài gấp 10 lần nên diện tích gấp 100 lần.')];
  if (includesAny(text, ['tỉ lệ bản đồ', 'bản đồ'])) return [bubble(topic, 'q1', 'Trên bản đồ, 1 cm ứng với 1 km ngoài thực tế. 5 cm trên bản đồ ứng với:', '5 km', ['1 km', '10 km'], 'Nhân độ dài trên bản đồ với số km ứng với 1 cm.')];
  if (text.includes('nhân')) return [keypad(topic, 'q1', 'Phép nhân với số có hai chữ số: 24 × 12 = ?', 288, 'Nhân với hàng đơn vị rồi hàng chục và cộng các tích riêng. Nhân một số với 10 là thêm một chữ số 0 vào bên phải.')];
  if (text.includes('chia')) return [bubble(topic, 'q1', 'Tính: 864 : 24 = ?', '36', ['34', '42'], 'Tìm thương bằng cách kiểm tra 24 × 36.')];
  if (includesAny(text, ['phép cộng', 'phép trừ'])) return [keypad(topic, 'q1', 'Tính: 345 678 + 124 321 = ?', 469999, 'Đặt thẳng cột các hàng rồi cộng từ phải sang trái.')];
  if (includesAny(text, ['số chẵn', 'số lẻ', 'nhiều chữ số', 'lớp triệu', '100.000'])) return [bubble(topic, 'q1', 'Trong số 345 678 912, chữ số 4 thuộc hàng nào?', 'Hàng chục triệu', ['Hàng triệu', 'Hàng trăm nghìn'], 'Đọc giá trị vị trí của chữ số 4 trong số đã cho.')];
  return [reviewQuestion(topic, 4)];
}

function generateGrade5Math(topic: CurriculumTopic): Question[] {
  const text = `${topic.title} ${topic.description}`.toLowerCase();

  if (includesAny(text, ['chuyển động', 'vận tốc', 'quãng đường'])) {
    if (text.includes('ngược chiều')) return [bubble(topic, 'q1', 'Hai xe cách nhau 180 km, đi ngược chiều với vận tốc 50 km/h và 40 km/h. Sau bao lâu gặp nhau?', '2 giờ', ['3 giờ', '1,5 giờ'], 'Cộng hai vận tốc rồi lấy quãng đường chia cho tổng vận tốc.')];
    if (text.includes('vận tốc')) return [bubble(topic, 'q1', 'Một xe đi 150 km trong 3 giờ. Vận tốc của xe là:', '50 km/h', ['45 km/h', '153 km/h'], 'Vận tốc = quãng đường : thời gian.')];
    if (text.includes('thời gian')) return [bubble(topic, 'q1', 'Một xe đi 120 km với vận tốc 40 km/h. Thời gian đi là:', '3 giờ', ['80 giờ', '160 giờ'], 'Thời gian = quãng đường : vận tốc.')];
    return [bubble(topic, 'q1', 'Xe đi với vận tốc 42 km/h trong 2,5 giờ. Quãng đường đi được là:', '105 km', ['84 km', '95 km'], 'Quãng đường = vận tốc × thời gian.')];
  }
  if (text.includes('thời gian')) return [bubble(topic, 'q1', '1 giờ 30 phút cộng 45 phút bằng:', '2 giờ 15 phút', ['1 giờ 75 phút', '2 giờ 45 phút'], 'Đổi 1 giờ 30 phút thành 90 phút rồi cộng 45 phút.')];
  if (includesAny(text, ['biểu đồ', 'thống kê', 'số liệu'])) return [bubble(topic, 'q1', 'Biểu đồ hình quạt tròn dùng để biểu diễn:', 'Tỉ lệ các phần trong một toàn thể', ['Độ dài đoạn thẳng', 'Khối lượng một vật'], 'Các phần của hình quạt tròn biểu diễn tỉ lệ của từng nhóm.')];
  if (includesAny(text, ['hình tam giác', 'hình thang'])) {
    if (text.includes('hình thang')) return [bubble(topic, 'q1', 'Hình thang có hai đáy 6 cm và 10 cm, chiều cao 5 cm. Diện tích là:', '40 cm²', ['80 cm²', '30 cm²'], 'Diện tích = (đáy lớn + đáy bé) × chiều cao : 2.')];
    return [bubble(topic, 'q1', 'Hình tam giác có đáy 12 cm và chiều cao 8 cm. Diện tích là:', '48 cm²', ['96 cm²', '20 cm²'], 'Diện tích = đáy × chiều cao : 2.')];
  }
  if (text.includes('hình tròn')) return [bubble(topic, 'q1', 'Hình tròn bán kính 5 cm có diện tích khoảng:', '78,5 cm²', ['31,4 cm²', '15,7 cm²'], 'Diện tích hình tròn = bán kính × bán kính × 3,14.')];
  if (includesAny(text, ['diện tích xung quanh', 'diện tích toàn phần'])) return [bubble(topic, 'q1', 'Hình hộp chữ nhật dài 8 cm, rộng 5 cm, cao 4 cm có diện tích xung quanh là:', '104 cm²', ['160 cm²', '52 cm²'], 'Diện tích xung quanh = chu vi đáy × chiều cao = (8 + 5) × 2 × 4.')];
  if (includesAny(text, ['thể tích', 'hình hộp chữ nhật', 'hình lập phương'])) return [bubble(topic, 'q1', 'Hình hộp chữ nhật dài 8 cm, rộng 5 cm, cao 4 cm có thể tích là:', '160 cm³', ['160 cm²', '17 cm³'], 'Thể tích = dài × rộng × cao.')];
  if (includesAny(text, ['phần trăm', 'tỉ số'])) return [bubble(topic, 'q1', 'Lớp có 40 học sinh, 24 bạn nữ. Tỉ số phần trăm số bạn nữ là:', '60%', ['40%', '24%'], 'Lấy 24 chia 40 rồi nhân 100%.')];
  if (includesAny(text, ['héc-ta', 'km²'])) return [bubble(topic, 'q1', 'Đơn vị diện tích ha (héc-ta): 1 ha bằng bao nhiêu mét vuông?', '10 000 m²', ['100 m²', '1000 m²'], 'Đây là mối quan hệ cơ bản của đơn vị diện tích.')];
  if (text.includes('hỗn số')) return [bubble(topic, 'q1', 'Hỗn số 2 1/3 đổi thành phân số là:', '7/3', ['5/3', '6/3'], 'Lấy phần nguyên nhân mẫu rồi cộng tử số.')];
  if (text.includes('phân số thập phân')) return [bubble(topic, 'q1', 'Phân số 7/10 viết dưới dạng số thập phân là:', '0,7', ['7,0', '0,07'], 'Mẫu 10 tạo ra một chữ số ở phần thập phân.')];
  if (text.includes('phân số')) return [bubble(topic, 'q1', 'Phân số nào bằng 1/2?', '3/6', ['2/5', '3/5'], 'Nhân cả tử và mẫu của 1/2 với 3.')];
  if (text.includes('nhân số thập phân')) return [bubble(topic, 'q1', 'Tính: 4,5 × 2,4 = ?', '10,8', ['108', '9,9'], 'Nhân như số tự nhiên rồi đặt dấu phẩy đúng số chữ số.')];
  if (text.includes('chia số thập phân')) return [bubble(topic, 'q1', 'Chia số thập phân: 12,6 : 3 = ?', '4,2', ['42', '3,2'], 'Chia phần nguyên và phần thập phân theo đúng vị trí.')];
  if (includesAny(text, ['cộng', 'trừ']) && text.includes('số thập phân')) return [keypad(topic, 'q1', 'Tính: 35,68 + 24,75 = ?', '60,43', 'Đặt thẳng hàng các dấu phẩy rồi cộng.')];
  if (text.includes('số thập phân')) {
    if (text.includes('so sánh')) return [bubble(topic, 'q1', 'So sánh số thập phân: số nào lớn hơn, 3,45 hay 3,405?', '3,45', ['3,405', 'Hai số bằng nhau'], 'Viết 3,45 thành 3,450 rồi so sánh.')];
    return [bubble(topic, 'q1', 'Trong số 12,345, chữ số 4 thuộc hàng nào?', 'Hàng phần trăm', ['Hàng phần mười', 'Hàng phần nghìn'], 'Sau dấu phẩy: phần mười, phần trăm, phần nghìn.')];
  }
  return [reviewQuestion(topic, 5)];
}

export function generateMathQuestions(topic: CurriculumTopic, grade: GradeLevel): Question[] {
  switch (grade) {
    case 1: return generateGrade1Math(topic);
    case 2: return generateGrade2Math(topic);
    case 3: return generateGrade3Math(topic);
    case 4: return generateGrade4Math(topic);
    case 5: return generateGrade5Math(topic);
    default: return generateGrade1Math(topic);
  }
}
