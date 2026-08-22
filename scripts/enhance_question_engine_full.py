# -*- coding: utf-8 -*-
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
target_file = os.path.join(WORKSPACE, 'src', 'data', 'curriculum', 'math', 'mathQuestionEngine.ts')

code = '''import { GradeLevel, Question } from '../../../types/index.ts';
import { CurriculumTopic } from '../types.ts';

type QuestionExtra = Pick<Question, 'visualType' | 'visualData' | 'hint'>;

const includesAny = (text: string, cues: string[]) => cues.some((cue) => text.includes(cue));
const hasWord = (text: string, word: string) => new RegExp(`(^|[^\\\\p{L}])${word}(?!\\\\p{L})`, 'u').test(text);

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
    const left = 20 + (n % 30);
    const right = (n % 2 === 0 ? 12 : 8);
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

  if (includesAny(text, ['vị trí', 'định hướng', 'trên, dưới', 'trái, phải'])) {
    return [bubble(topic, 'q1', 'Quả bóng ở bên trái bạn Gấu. Quả bóng ở phía nào của bạn Gấu?', 'Bên trái', ['Bên phải', 'Ở trên'], 'Quan sát vị trí của quả bóng so với bạn Gấu.')];
  }
  if (includesAny(text, ['khối lập phương', 'khối hộp chữ nhật'])) {
    return [bubble(topic, 'q1', 'Hộp quà có 6 mặt đều là hình vuông. Hộp quà có dạng khối gì?', 'Khối lập phương', ['Khối hộp chữ nhật', 'Hình tròn'], 'Khối lập phương có tất cả 6 mặt hình vuông.')];
  }
  if (includesAny(text, ['lắp ghép', 'xếp hình'])) {
    return [bubble(topic, 'q1', 'Dùng 2 hình tam giác ghép lại ta có thể tạo thành hình gì?', 'Hình vuông', ['Hình tròn', 'Hình trụ'], 'Ghép 2 hình tam giác vuông cân tạo thành hình vuông.')];
  }
  if (includesAny(text, ['hình vuông', 'hình tròn', 'hình tam giác', 'hình chữ nhật'])) {
    return [bubble(topic, 'q1', 'Chiếc đĩa tròn ăn cơm thường có dạng hình học nào?', 'Hình tròn', ['Hình tam giác', 'Hình vuông'], 'Nhận biết hình dạng của đồ vật quen thuộc trong gia đình.')];
  }
  if (includesAny(text, ['ngày trong tuần', 'tuần'])) {
    return [bubble(topic, 'q1', 'Một tuần lễ có bao nhiêu ngày?', '7 ngày', ['5 ngày', '10 ngày'], 'Đọc đủ các ngày từ Thứ Hai đến Chủ Nhật: gồm 7 ngày.')];
  }
  if (includesAny(text, ['đồng hồ', 'xem lịch', 'giờ đúng'])) {
    const hours = (n % 8) + 1;
    return [bubble(topic, 'q1', `Kim dài chỉ số 12, kim ngắn chỉ số ${hours}. Đồng hồ chỉ mấy giờ?`, `${hours} giờ đúng`, [`${hours + 1} giờ đúng`, `${hours === 1 ? 12 : hours - 1} giờ đúng`], 'Kim dài ở số 12 là giờ đúng; kim ngắn chỉ số nào thì đọc giờ đó.', { visualType: 'clock', visualData: { hours, minutes: 0 } })];
  }
  if (includesAny(text, ['xăng-ti-mét', 'đo độ dài', 'dài hơn', 'ngắn hơn', 'thực hành đo'])) {
    const lengthCm = (n % 5) + 4;
    return [bubble(topic, 'q1', `Chiếc bút chì trong hình dài bao nhiêu xăng-ti-mét?`, `${lengthCm} cm`, [`${lengthCm - 1} cm`, `${lengthCm + 1} cm`], 'Đặt một đầu vật trùng vạch 0 rồi đọc vạch ở đầu kia.', { visualType: 'ruler', visualData: { lengthCm } })];
  }
  if (includesAny(text, ['so sánh số', 'nhiều hơn', 'ít hơn', 'bằng nhau'])) {
    const left = (n % 6) + 3;
    const right = (n % 4) + 1;
    const sign = left > right ? '>' : (left < right ? '<' : '=');
    return [bubble(topic, 'q1', `Điền dấu thích hợp: ${left} ... ${right}`, `${left} ${sign} ${right}`, [`${left} ${sign === '>' ? '<' : '>'} ${right}`, `${left} = ${right + 2}`], `Số ${left} ${left > right ? 'lớn hơn' : 'bé hơn'} số ${right}.`)];
  }
  if (includesAny(text, ['tách', 'gộp', 'mấy và mấy'])) {
    const total = (n % 5) + 5;
    const part = (n % 3) + 2;
    return [bubble(topic, 'q1', `Số ${total} có thể tách thành ${part} và mấy?`, `${total - part}`, [`${total - part + 1}`, `${total - part - 1}`], `Tìm số còn thiếu để ${part} gộp với số đó được ${total}.`)];
  }
  if (includesAny(text, ['phép trừ', 'bảng trừ'])) {
    if (text.includes('hai chữ số')) {
      const minuend = 40 + (n % 40);
      const subtrahend = (n % 8) + 1;
      return [keypad(topic, 'q1', `Tính: ${minuend} - ${subtrahend} = ?`, minuend - subtrahend, 'Đặt tính thẳng cột rồi trừ từ hàng đơn vị.')];
    }
    const minuend = (n % 4) + 6;
    const subtrahend = (n % 3) + 1;
    return [keypad(topic, 'q1', `Tính: ${minuend} - ${subtrahend} = ?`, minuend - subtrahend, 'Bớt đi số ở sau dấu trừ rồi đếm số còn lại.')];
  }
  if (includesAny(text, ['phép cộng', 'bảng cộng'])) {
    if (text.includes('hai chữ số')) {
      const left = 30 + (n % 40);
      const right = (n % 8) + 1;
      return [keypad(topic, 'q1', `Tính: ${left} + ${right} = ?`, left + right, 'Đặt tính thẳng cột rồi cộng từ hàng đơn vị.')];
    }
    const left = (n % 4) + 3;
    const right = (n % 3) + 1;
    return [keypad(topic, 'q1', `Tính: ${left} + ${right} = ?`, left + right, 'Gộp hai nhóm rồi đếm tất cả.')];
  }
  if (includesAny(text, ['hai chữ số', '11 đến 20'])) {
    const tensVal = 1;
    const unitVal = (n % 9) + 1;
    const totalVal = 10 + unitVal;
    return [bubble(topic, 'q1', `Số ${totalVal} gồm mấy chục và mấy đơn vị?`, `${tensVal} chục và ${unitVal} đơn vị`, [`${unitVal} chục và ${tensVal} đơn vị`, `${totalVal} chục`], 'Chữ số bên trái chỉ hàng chục, bên phải chỉ hàng đơn vị.')];
  }
  if (includesAny(text, ['bảng các số', 'số đến 100', 'phạm vi 100'])) {
    const num = 30 + (n % 60);
    return [bubble(topic, 'q1', `Trong bảng các số từ 1 đến 100, số đứng liền sau ${num} là:`, `${num + 1}`, [`${num - 1}`, `${num + 10}`], `Số liền sau hơn số đã cho 1 đơn vị: ${num} + 1 = ${num + 1}.`)];
  }
  if (includesAny(text, ['các số', '0, 1, 2, 3, 4, 5', '6, 7, 8, 9, 10'])) {
    const count = (n % 5) + 3;
    return [bubble(topic, 'q1', `Bé đếm xem có bao nhiêu ngôi sao ⭐ trong tranh?`, `${count} ngôi sao`, [`${count - 1} ngôi sao`, `${count + 1} ngôi sao`], 'Đếm lần lượt từng hình từ trái sang phải.', { visualType: 'counting', visualData: { itemEmoji: '⭐', itemCount: count } })];
  }
  return [reviewQuestion(topic, 1)];
}

function generateGrade2Math(topic: CurriculumTopic): Question[] {
  const text = `${topic.title} ${topic.description}`.toLowerCase();
  const n = topic.lessonNumber;

  if (includesAny(text, ['chắc chắn', 'có thể', 'không thể'])) {
    return [bubble(topic, 'q1', 'Mặt Trời mọc ở hướng Đông là điều chắc chắn, có thể hay không thể?', 'Điều chắc chắn', ['Điều không thể', 'Điều có thể nhưng chưa biết'], 'Điều chắc chắn là quy luật tự nhiên luôn xảy ra.')];
  }
  if (text.includes('biểu đồ tranh')) {
    const stars = (n % 4) + 3;
    return [bubble(topic, 'q1', `Quan sát biểu đồ tranh: mỗi biểu tượng ⭐ tương ứng 1 điểm. Nhóm có ${stars} ngôi sao đạt mấy điểm?`, `${stars} điểm`, [`${stars - 1} điểm`, `${stars + 1} điểm`], 'Đọc kĩ chú giải của biểu đồ tranh.')];
  }
  if (includesAny(text, ['thống kê', 'phân loại', 'kiểm đếm', 'số liệu'])) {
    return [bubble(topic, 'q1', 'Đếm và phân loại số bạn nam và số bạn nữ trong lớp là hoạt động gì?', 'Thu thập và kiểm đếm số liệu', ['Đo độ dài', 'Tính chu vi'], 'Đếm và ghi chép số lượng là thu thập số liệu.')];
  }
  if (text.includes('ngày - tháng') || text.includes('ngày, tháng')) {
    return [bubble(topic, 'q1', 'Tháng 4 có bao nhiêu ngày?', '30 ngày', ['28 ngày', '31 ngày'], 'Tháng 4 thuộc nhóm tháng có 30 ngày.')];
  }
  if (text.includes('giờ - phút') || text.includes('thời gian') || text.includes('xem đồng hồ')) {
    return [bubble(topic, 'q1', '1 giờ có bao nhiêu phút?', '60 phút', ['30 phút', '100 phút'], 'Nhớ mối quan hệ cơ bản: 1 giờ = 60 phút.')];
  }
  if (includesAny(text, ['khối trụ', 'khối cầu', 'hình khối'])) {
    return [bubble(topic, 'q1', 'Lon nước ngọt thông thường có dạng khối hình học nào?', 'Khối trụ', ['Khối cầu', 'Khối lập phương'], 'Khối trụ có 2 mặt đáy tròn phẳng và thân uốn cong.')];
  }
  if (includesAny(text, ['ki-lô-gam', 'lít', 'cân đo', 'cân, đo', 'khối lượng', 'dung tích'])) {
    if (text.includes('lít')) {
      const initL = (n % 5) + 8;
      const pourL = (n % 3) + 2;
      return [bubble(topic, 'q1', `Một can có ${initL} lít nước, rót ra ${pourL} lít. Trong can còn lại:`, `${initL - pourL} lít`, [`${initL + pourL} lít`, `${initL - pourL - 1} lít`], `Lấy số lít ban đầu trừ số lít đã rót ra: ${initL} - ${pourL} = ${initL - pourL} l.`)];
    }
    const w1 = (n % 4) + 3;
    const w2 = (n % 3) + 2;
    return [bubble(topic, 'q1', `Túi thứ nhất nặng ${w1} kg, túi thứ hai nặng ${w2} kg. Cả hai túi nặng:`, `${w1 + w2} kg`, [`${w1 + w2 + 2} kg`, `${Math.abs(w1 - w2)} kg`], `Cộng khối lượng của hai túi: ${w1} + ${w2} = ${w1 + w2} kg.`)];
  }
  if (includesAny(text, ['đề-xi-mét', 'mét', 'ki-lô-mét', 'mi-li-mét', 'đo độ dài'])) {
    if (text.includes('ki-lô-mét') || text.includes('km')) return [bubble(topic, 'q1', '1 ki-lô-mét (km) bằng bao nhiêu mét (m)?', '1000 m', ['100 m', '10 m'], '1 km = 1000 m.')];
    if (text.includes('đề-xi-mét') || text.includes('dm')) return [bubble(topic, 'q1', '1 đề-xi-mét (dm) bằng bao nhiêu xăng-ti-mét (cm)?', '10 cm', ['100 cm', '1 cm'], '1 dm = 10 cm.')];
    if (text.includes('mi-li-mét') || text.includes('mm')) return [bubble(topic, 'q1', '1 xăng-ti-mét (cm) bằng bao nhiêu mi-li-mét (mm)?', '10 mm', ['100 mm', '1 mm'], '1 cm = 10 mm.')];
    return [bubble(topic, 'q1', '1 mét (m) bằng bao nhiêu xăng-ti-mét (cm)?', '100 cm', ['10 cm', '1000 cm'], '1 m = 100 cm.')];
  }
  if (includesAny(text, ['bảng nhân 2', 'bảng nhân 5', 'phép nhân', 'thừa số'])) {
    const factor = text.includes('5') ? 5 : 2;
    const other = (n % 6) + 3;
    return [bubble(topic, 'q1', `Tính: ${factor} × ${other} = ?`, String(factor * other), [String(factor * other - factor), String(factor * other + factor)], 'Nhân là phép cộng các số hạng bằng nhau.')];
  }
  if (includesAny(text, ['bảng chia 2', 'bảng chia 5', 'phép chia', 'thương'])) {
    const divisor = text.includes('5') ? 5 : 2;
    const quotient = (n % 6) + 2;
    return [bubble(topic, 'q1', `Tính: ${divisor * quotient} : ${divisor} = ?`, String(quotient), [String(quotient - 1), String(quotient + 1)], 'Tìm thừa số chưa biết trong phép nhân tương ứng.')];
  }
  if (includesAny(text, ['đường gấp khúc', 'độ dài đường gấp khúc'])) {
    const s1 = (n % 3) + 3;
    const s2 = (n % 3) + 4;
    const s3 = (n % 3) + 5;
    return [bubble(topic, 'q1', `Đường gấp khúc gồm 3 đoạn dài ${s1} cm, ${s2} cm và ${s3} cm. Độ dài đường gấp khúc là:`, `${s1 + s2 + s3} cm`, [`${s1 + s2 + s3 - 2} cm`, `${s1 + s2 + s3 + 3} cm`], `Tính tổng độ dài các đoạn thẳng: ${s1} + ${s2} + ${s3} = ${s1 + s2 + s3} cm.`)];
  }
  if (includesAny(text, ['hình tứ giác', 'điểm, đoạn thẳng', 'ba điểm thẳng hàng', 'cắt, ghép hình'])) {
    return [bubble(topic, 'q1', 'Hình tứ giác là hình phẳng khép kín có mấy cạnh?', '4 cạnh', ['3 cạnh', '5 cạnh'], 'Tứ giác là hình có 4 cạnh và 4 đỉnh.')];
  }
  if (includesAny(text, ['hơn, kém', 'thêm, bớt', 'nhiều hơn', 'ít hơn'])) {
    const a = (n % 10) + 15;
    const diff = (n % 5) + 3;
    return [bubble(topic, 'q1', `Bạn An có ${a} viên bi, bạn Bình có nhiều hơn An ${diff} viên. Bình có:`, `${a + diff} viên bi`, [`${a - diff} viên bi`, `${a + diff + 2} viên bi`], `Lấy số bi của An cộng phần nhiều hơn: ${a} + ${diff} = ${a + diff}.`)];
  }
  if (includesAny(text, ['tia số', 'số liền trước', 'số liền sau'])) {
    const base = 50 + (n % 40);
    return [bubble(topic, 'q1', `Số liền sau của số ${base} là:`, `${base + 1}`, [`${base - 1}`, `${base + 10}`], `Số liền sau lớn hơn số đã cho 1 đơn vị: ${base} + 1 = ${base + 1}.`)];
  }
  if (includesAny(text, ['thành phần của phép cộng', 'thành phần của phép trừ'])) {
    return [bubble(topic, 'q1', 'Trong phép tính 35 + 14 = 49, số 49 được gọi là gì?', 'Tổng', ['Số hạng', 'Hiệu'], 'Kết quả của phép cộng gọi là Tổng.')];
  }
  if (includesAny(text, ['có nhớ', 'qua 10'])) {
    if (text.includes('trừ')) {
      const min = 50 + (n % 40);
      const sub = 15 + (n % 8);
      return [keypad(topic, 'q1', `Tính: ${min} - ${sub} = ?`, min - sub, 'Đặt tính thẳng hàng, mượn 1 chục ở hàng chục rồi trừ.')];
    }
    const left = 35 + (n % 30);
    const right = 27 + (n % 8);
    return [keypad(topic, 'q1', `Tính: ${left} + ${right} = ?`, left + right, 'Cộng hàng đơn vị có nhớ sang hàng chục.')];
  }
  if (text.includes('1000') || text.includes('ba chữ số') || text.includes('tổng các trăm')) {
    const hundreds = (n % 7) + 2;
    const tens = (n % 8) + 1;
    const ones = (n % 9) + 1;
    const totalNum = hundreds * 100 + tens * 10 + ones;
    return [bubble(topic, 'q1', `Số ${totalNum} gồm mấy trăm, mấy chục và mấy đơn vị?`, `${hundreds} trăm, ${tens} chục và ${ones} đơn vị`, [`${hundreds} trăm, ${ones} chục và ${tens} đơn vị`, `${hundreds * 10 + tens} trăm và ${ones} đơn vị`], 'Đọc theo vị trí các hàng từ trái sang phải: trăm, chục, đơn vị.')];
  }
  return [reviewQuestion(topic, 2)];
}

function generateGrade3Math(topic: CurriculumTopic): Question[] {
  const text = `${topic.title} ${topic.description}`.toLowerCase();
  const n = topic.lessonNumber;

  if (text.includes('tìm thành phần') || text.includes('tìm x')) {
    const xVal = 20 + (n % 30);
    const addVal = 15 + (n % 10);
    const total = xVal + addVal;
    return [keypad(topic, 'q1', `Tìm x: x + ${addVal} = ${total}. x = ?`, xVal, `Muốn tìm số hạng chưa biết, lấy tổng trừ số hạng đã biết: ${total} - ${addVal} = ${xVal}.`)];
  }
  if (includesAny(text, ['bảng nhân', 'bảng chia'])) {
    const factor = (n % 7) + 3;
    const mul = (n % 6) + 4;
    return [bubble(topic, 'q1', `Tính: ${factor} × ${mul} = ?`, String(factor * mul), [String(factor * mul - factor), String(factor * mul + factor)], `Đọc thuộc bảng nhân ${factor}.`)];
  }
  if (includesAny(text, ['gấp một số', 'giảm đi'])) {
    if (text.includes('giảm')) {
      const num = 24 + (n % 4) * 6;
      return [bubble(topic, 'q1', `Giảm số ${num} đi 6 lần được số nào?`, `${num / 6}`, [`${num / 6 + 2}`, `${num - 6}`], `Giảm đi một số lần là làm phép chia: ${num} : 6 = ${num / 6}.`)];
    }
    const base = (n % 5) + 4;
    const times = 3;
    return [bubble(topic, 'q1', `Gấp ${base} lên ${times} lần được số nào?`, `${base * times}`, [`${base + times}`, `${base * times + 2}`], `Gấp một số lên nhiều lần là lấy số đó nhân với số lần: ${base} × ${times} = ${base * times}.`)];
  }
  if (includesAny(text, ['phân số', 'một phần'])) {
    const part = (n % 4) + 2;
    return [bubble(topic, 'q1', `Một hình được chia thành ${part} phần bằng nhau, tô màu 1 phần. Đã tô màu mấy phần hình?`, `1/${part}`, [`1/${part + 1}`, `${part}/1`], `Tử số là số phần tô màu (1), mẫu số là tổng số phần (${part}).`, { visualType: 'fraction', visualData: { numerator: 1, denominator: part } })];
  }
  if (includesAny(text, ['hình tròn', 'bán kính', 'đường kính'])) {
    const r = (n % 5) + 3;
    return [bubble(topic, 'q1', `Hình tròn có bán kính r = ${r} cm. Đường kính của hình tròn dài:`, `${r * 2} cm`, [`${r} cm`, `${r * 4} cm`], `Đường kính dài gấp 2 lần bán kính: d = ${r} × 2 = ${r * 2} cm.`)];
  }
  if (includesAny(text, ['góc vuông', 'góc không vuông', 'ê-ke'])) {
    return [bubble(topic, 'q1', 'Dụng cụ nào dùng để kiểm tra và vẽ góc vuông chuẩn xác nhất?', 'Thước ê-ke', ['Com-pa', 'Nhiệt kế'], 'Thước ê-ke có góc 90° chuẩn để kiểm tra góc vuông.')];
  }
  if (includesAny(text, ['la mã'])) {
    return [bubble(topic, 'q1', 'Chữ số La Mã XIV biểu thị số nào trong hệ thập phân?', '14', ['16', '9'], 'X = 10, IV = 4 => XIV = 10 + 4 = 14.')];
  }
  if (includesAny(text, ['chu vi'])) {
    const side = (n % 5) + 4;
    return [bubble(topic, 'q1', `Một hình vuông có cạnh dài ${side} cm. Chu vi của hình vuông đó là:`, `${side * 4} cm`, [`${side * side} cm`, `${side * 2} cm`], `Chu vi hình vuông = cạnh × 4 = ${side} × 4 = ${side * 4} cm.`)];
  }
  if (includesAny(text, ['diện tích', 'cm²'])) {
    const w = (n % 4) + 3;
    const l = w + 4;
    return [bubble(topic, 'q1', `Hình chữ nhật có chiều dài ${l} cm, chiều rộng ${w} cm. Diện tích là:`, `${l * w} cm²`, [`${(l + w) * 2} cm²`, `${l * w + 5} cm²`], `Diện tích hình chữ nhật = dài × rộng = ${l} × ${w} = ${l * w} cm².`)];
  }
  if (includesAny(text, ['gam', 'g'])) {
    return [bubble(topic, 'q1', '1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?', '1000 g', ['100 g', '10 g'], '1 kg = 1000 g.')];
  }
  if (includesAny(text, ['mi-li-lít', 'ml'])) {
    return [bubble(topic, 'q1', '1 lít (l) bằng bao nhiêu mi-li-lít (ml)?', '1000 ml', ['100 ml', '10 ml'], '1 l = 1000 ml.')];
  }
  if (includesAny(text, ['nhiệt độ', 'đo nhiệt độ'])) {
    return [bubble(topic, 'q1', 'Nhiệt kế dùng để đo đại lượng nào?', 'Nhiệt độ', ['Khối lượng', 'Độ dài'], 'Nhiệt kế đo độ nóng lạnh (nhiệt độ theo độ C).')];
  }
  if (includesAny(text, ['tiền việt nam'])) {
    return [bubble(topic, 'q1', 'Bạn Nam có tờ 20 000 đồng, mua kem hết 12 000 đồng. Nam còn lại:', '8 000 đồng', ['6 000 đồng', '10 000 đồng'], 'Lấy 20 000 - 12 000 = 8 000 đồng.')];
  }
  if (includesAny(text, ['hai bước tính', 'giải bằng hai bước'])) {
    return [bubble(topic, 'q1', 'Thùng 1 có 15 lít dầu, thùng 2 có nhiều hơn 5 lít. Cả hai thùng có tất cả:', '35 lít', ['20 lít', '25 lít'], 'Bước 1: Thùng 2 có 15 + 5 = 20 l. Bước 2: Cả 2 thùng có 15 + 20 = 35 l.')];
  }
  if (includesAny(text, ['biểu thức số', 'giá trị của biểu thức'])) {
    const a = (n % 5) + 10;
    const b = (n % 4) + 2;
    return [bubble(topic, 'q1', `Tính giá trị của biểu thức: ${a} + ${b} × 3 = ?`, `${a + b * 3}`, [`${(a + b) * 3}`, `${a + b * 3 - 2}`], 'Thực hiện phép nhân trước, phép cộng sau.')];
  }
  if (includesAny(text, ['năm chữ số', '100 000', '100.000', '10 000', '10.000', 'bốn chữ số'])) {
    const left = 20000 + (n % 40) * 1000;
    const right = 12300;
    return [keypad(topic, 'q1', `Tính: ${left} + ${right} = ?`, left + right, 'Đặt tính thẳng cột từ hàng đơn vị sang hàng chục nghìn.')];
  }
  if (includesAny(text, ['chia số có', 'nhân số có'])) {
    if (text.includes('chia')) {
      const q = 120 + (n % 30);
      const d = 3;
      return [bubble(topic, 'q1', `Tính: ${q * d} : ${d} = ?`, `${q}`, [`${q - 5}`, `${q + 10}`], 'Chia lần lượt từ hàng cao nhất đến hàng thấp nhất.')];
    }
    const num = 120 + (n % 30);
    const factor = 3;
    return [keypad(topic, 'q1', `Tính: ${num} × ${factor} = ?`, num * factor, 'Nhân lần lượt từ hàng đơn vị sang hàng trăm.')];
  }
  return [reviewQuestion(topic, 3)];
}

function generateGrade4Math(topic: CurriculumTopic): Question[] {
  const text = `${topic.title} ${topic.description}`.toLowerCase();
  const n = topic.lessonNumber;

  if (includesAny(text, ['giây', 'thế kỉ'])) {
    return [bubble(topic, 'q1', '1 thế kỉ bằng bao nhiêu năm?', '100 năm', ['10 năm', '1000 năm'], 'Một thế kỉ có 100 năm.')];
  }
  if (hasWord(text, 'yến') || hasWord(text, 'tạ') || hasWord(text, 'tấn')) {
    const tons = (n % 4) + 2;
    const ta = (n % 5) + 3;
    return [bubble(topic, 'q1', `${tons} tấn ${ta} tạ bằng bao nhiêu ki-lô-gam?`, `${tons * 1000 + ta * 100} kg`, [`${tons * 100 + ta * 10} kg`, `${tons * 1000 + ta} kg`], `${tons} tấn = ${tons * 1000} kg, ${ta} tạ = ${ta * 100} kg.`)];
  }
  if (includesAny(text, ['số chẵn', 'số lẻ'])) {
    return [bubble(topic, 'q1', 'Số nào sau đây là số chẵn?', '148', ['145', '149'], 'Số chẵn có chữ số tận cùng là 0, 2, 4, 6, 8.')];
  }
  if (includesAny(text, ['biểu thức', 'chứa chữ'])) {
    return [bubble(topic, 'q1', 'Tính giá trị của biểu thức 45 + a × 3 khi a = 5:', '60', ['150', '53'], 'Thay a = 5 vào biểu thức: 45 + 5 × 3 = 45 + 15 = 60.')];
  }
  if (includesAny(text, ['giao hoán', 'kết hợp', 'phân phối'])) {
    if (text.includes('phép nhân') && text.includes('phép cộng')) {
      return [bubble(topic, 'q1', 'Tính chất phân phối: (a + b) × c bằng biểu thức nào?', 'a × c + b × c', ['a × c + b', 'a + b × c'], 'Nhân một tổng với một số: (a + b) × c = a × c + b × c.')];
    }
    if (text.includes('phép nhân')) {
      return [bubble(topic, 'q1', 'Tính chất giao hoán của phép nhân: a × b = ?', 'b × a', ['a + b', 'a : b'], 'Khi đổi chỗ các thừa số trong một tích thì tích không thay đổi.')];
    }
    return [bubble(topic, 'q1', 'Tính chất giao hoán của phép cộng: a + b = ?', 'b + a', ['a - b', 'a × b'], 'Khi đổi chỗ các số hạng trong một tổng thì tổng không thay đổi.')];
  }
  if (includesAny(text, ['trung bình cộng'])) {
    return [bubble(topic, 'q1', 'Tìm số trung bình cộng của 20, 30 và 40:', '30', ['25', '35'], 'Trung bình cộng = (20 + 30 + 40) : 3 = 90 : 3 = 30.')];
  }
  if (includesAny(text, ['rút về đơn vị'])) {
    return [bubble(topic, 'q1', 'Mua 4 quyển vở hết 32 000 đồng. Mua 6 quyển vở như thế hết:', '48 000 đồng', ['40 000 đồng', '56 000 đồng'], 'Giá 1 quyển là 32 000 : 4 = 8 000 đ. Giá 6 quyển là 8 000 × 6 = 48 000 đ.')];
  }
  if (includesAny(text, ['tổng và hiệu'])) {
    return [bubble(topic, 'q1', 'Tổng hai số là 50, hiệu hai số là 10. Số lớn là:', '30', ['20', '40'], 'Số lớn = (Tổng + Hiệu) : 2 = (50 + 10) : 2 = 30.')];
  }
  if (includesAny(text, ['tổng và tỉ'])) {
    return [bubble(topic, 'q1', 'Tổng hai số là 45, tỉ số là 2/3. Số bé là:', '18', ['27', '15'], 'Tổng số phần: 2 + 3 = 5 phần. Số bé: (45 : 5) × 2 = 18.')];
  }
  if (includesAny(text, ['hiệu và tỉ'])) {
    return [bubble(topic, 'q1', 'Hiệu hai số là 24, tỉ số là 5/2. Số bé là:', '16', ['40', '12'], 'Hiệu số phần: 5 - 2 = 3 phần. Số bé: (24 : 3) × 2 = 16.')];
  }
  if (includesAny(text, ['vuông góc', 'song song'])) {
    return [bubble(topic, 'q1', 'Hai đường thẳng không bao giờ cắt nhau dù kéo dài mãi gọi là:', 'Hai đường thẳng song song', ['Hai đường thẳng vuông góc', 'Hai đường thẳng cắt nhau'], 'Hai đường thẳng song song luôn cách đều nhau.')];
  }
  if (includesAny(text, ['góc nhọn', 'góc tù', 'góc bẹt', 'đo góc'])) {
    return [bubble(topic, 'q1', 'Góc lớn hơn góc vuông và nhỏ hơn góc bẹt là góc gì?', 'Góc tù', ['Góc nhọn', 'Góc vuông'], 'Góc tù có số đo lớn hơn 90° và nhỏ hơn 180°.')];
  }
  if (includesAny(text, ['phân số'])) {
    if (text.includes('rút gọn')) return [bubble(topic, 'q1', 'Rút gọn phân số 18/24 thành phân số tối giản được:', '3/4', ['9/12', '2/3'], 'Chia cả tử và mẫu cho 6: 18:6 / 24:6 = 3/4.')];
    if (text.includes('quy đồng') || text.includes('so sánh')) return [bubble(topic, 'q1', 'So sánh hai phân số 3/5 và 4/5: phân số nào lớn hơn?', '4/5', ['3/5', 'Bằng nhau'], 'Hai phân số cùng mẫu dương, phân số nào có tử lớn hơn thì lớn hơn.')];
    if (text.includes('nhân') || text.includes('chia')) return [bubble(topic, 'q1', 'Tính: 2/3 × 3/4 = ?', '1/2', ['5/7', '2/7'], 'Nhân tử với tử, mẫu với mẫu: (2×3)/(3×4) = 6/12 = 1/2.')];
    if (text.includes('cộng') || text.includes('trừ')) return [bubble(topic, 'q1', 'Tính: 1/4 + 2/4 = ?', '3/4', ['3/8', '2/16'], 'Cộng tử số và giữ nguyên mẫu số: (1+2)/4 = 3/4.')];
    if (text.includes('tìm phân số của một số')) return [bubble(topic, 'q1', 'Tìm 3/5 của 30 là:', '18', ['15', '20'], 'Lấy 30 × 3/5 = 18.')];
    return [bubble(topic, 'q1', 'Trong phân số 5/8, số 5 được gọi là gì?', 'Tử số', ['Mẫu số', 'Thương số'], 'Tử số viết trên gạch ngang, mẫu số viết dưới gạch ngang.')];
  }
  if (includesAny(text, ['m²', 'dm²', 'mm²', 'diện tích'])) {
    return [bubble(topic, 'q1', '1 mét vuông (m²) bằng bao nhiêu đề-xi-mét vuông (dm²)?', '100 dm²', ['10 dm²', '1000 dm²'], '1 m = 10 dm => 1 m² = 100 dm².')];
  }
  if (includesAny(text, ['thống kê', 'biểu đồ cột', 'dãy số liệu'])) {
    return [bubble(topic, 'q1', 'Trong biểu đồ cột, chiều cao của cột biểu thị điều gì?', 'Số lượng của đối tượng', ['Tên đối tượng', 'Thứ tự trong ngày'], 'Cột càng cao thì số lượng biểu diễn càng lớn.')];
  }
  if (includesAny(text, ['lớp triệu', 'nhiều chữ số', 'hàng và lớp', 'hàng trăm nghìn'])) {
    return [bubble(topic, 'q1', 'Trong số 345 678 900, chữ số 4 thuộc hàng nào?', 'Hàng chục triệu', ['Hàng triệu', 'Hàng trăm nghìn'], 'Số 345 678 900 có lớp triệu là 345, trong đó chữ số 4 thuộc hàng chục triệu.')];
  }
  if (includesAny(text, ['nhân với 10', 'chia cho 10', '10, 100, 1000'])) {
    return [bubble(topic, 'q1', 'Khi nhân một số tự nhiên với 100, ta làm thế nào?', 'Thêm hai chữ số 0 vào bên phải số đó', ['Bỏ hai chữ số 0', 'Thêm một chữ số 0'], 'Nhân với 100 là viết thêm hai chữ số 0 vào bên phải.')];
  }
  if (includesAny(text, ['ba bước tính', 'giải bài toán có ba bước'])) {
    return [bubble(topic, 'q1', 'Một tổ may ngày 1 may 20 áo, ngày 2 may gấp đôi ngày 1, ngày 3 may bằng nửa ngày 2. Cả 3 ngày may được:', '80 cái áo', ['70 cái áo', '90 cái áo'], 'Ngày 1: 20, Ngày 2: 40, Ngày 3: 20 => Tổng: 20 + 40 + 20 = 80 cái áo.')];
  }
  if (includesAny(text, ['nhân', 'chia'])) {
    return [keypad(topic, 'q1', 'Tính: 125 × 8 = ?', 1000, 'Nhân lần lượt các hàng: 125 × 8 = 1000.')];
  }
  return [reviewQuestion(topic, 4)];
}

function generateGrade5Math(topic: CurriculumTopic): Question[] {
  const text = `${topic.title} ${topic.description}`.toLowerCase();
  const n = topic.lessonNumber;

  if (includesAny(text, ['chuyển động', 'vận tốc', 'quãng đường'])) {
    if (text.includes('ngược chiều')) {
      return [bubble(topic, 'q1', 'Hai xe cách nhau 150 km, đi ngược chiều với vận tốc 40 km/h và 35 km/h. Sau bao lâu gặp nhau?', '2 giờ', ['3 giờ', '1,5 giờ'], 'Thời gian gặp nhau = Quãng đường : (Vận tốc 1 + Vận tốc 2) = 150 : 75 = 2 giờ.')];
    }
    if (text.includes('vận tốc')) {
      return [bubble(topic, 'q1', 'Một người đi bộ được 12 km trong 3 giờ. Vận tốc của người đó là:', '4 km/h', ['36 km/h', '15 km/h'], 'Vận tốc v = s : t = 12 : 3 = 4 km/h.')];
    }
    if (text.includes('thời gian')) {
      return [bubble(topic, 'q1', 'Một ô tô đi quãng đường 180 km với vận tốc 60 km/h. Thời gian ô tô đi là:', '3 giờ', ['2 giờ', '4 giờ'], 'Thời gian t = s : v = 180 : 60 = 3 giờ.')];
    }
    return [bubble(topic, 'q1', 'Xe máy đi với vận tốc 40 km/h trong 2,5 giờ. Quãng đường đi được là:', '100 km', ['90 km', '80 km'], 'Quãng đường s = v × t = 40 × 2,5 = 100 km.')];
  }
  if (includesAny(text, ['hỗn số'])) {
    return [bubble(topic, 'q1', 'Chuyển hỗn số 2 3/5 thành phân số được:', '13/5', ['11/5', '6/5'], 'Lấy phần nguyên nhân mẫu rồi cộng tử: (2 × 5 + 3) / 5 = 13/5.')];
  }
  if (includesAny(text, ['tỉ số phần trăm', 'phần trăm', '%'])) {
    if (text.includes('giá trị phần trăm')) {
      return [bubble(topic, 'q1', 'Tìm 20% của 150 kg:', '30 kg', ['20 kg', '45 kg'], 'Lấy 150 × 20 : 100 = 30 kg.')];
    }
    return [bubble(topic, 'q1', 'Lớp 5A có 40 học sinh, trong đó có 20 bạn nữ. Tỉ số phần trăm của số bạn nữ là:', '50%', ['40%', '20%'], 'Lấy 20 : 40 × 100% = 50%.')];
  }
  if (includesAny(text, ['tỉ lệ bản đồ'])) {
    return [bubble(topic, 'q1', 'Trên bản đồ tỉ lệ 1 : 1000, độ dài 2 cm tương ứng độ dài thực tế là:', '20 m', ['200 m', '2 m'], '2 cm × 1000 = 2000 cm = 20 m.')];
  }
  if (includesAny(text, ['hình tam giác', 'hình thang'])) {
    if (text.includes('hình thang')) {
      return [bubble(topic, 'q1', 'Hình thang có đáy lớn 12 cm, đáy bé 8 cm và chiều cao 6 cm. Diện tích là:', '60 cm²', ['120 cm²', '48 cm²'], 'Diện tích = (đáy lớn + đáy bé) × chiều cao : 2 = (12 + 8) × 6 : 2 = 60 cm².')];
    }
    return [bubble(topic, 'q1', 'Hình tam giác có độ dài đáy 10 cm và chiều cao 8 cm. Diện tích là:', '40 cm²', ['80 cm²', '18 cm²'], 'Diện tích tam giác = (đáy × chiều cao) : 2 = (10 × 8) : 2 = 40 cm².')];
  }
  if (includesAny(text, ['hình tròn', 'chu vi', 'đường tròn'])) {
    if (text.includes('diện tích')) {
      return [bubble(topic, 'q1', 'Hình tròn có bán kính r = 5 cm. Diện tích là:', '78,5 cm²', ['31,4 cm²', '15,7 cm²'], 'Diện tích = r × r × 3,14 = 5 × 5 × 3,14 = 78,5 cm².')];
    }
    return [bubble(topic, 'q1', 'Hình tròn có đường kính d = 10 cm. Chu vi là:', '31,4 cm', ['62,8 cm', '78,5 cm'], 'Chu vi = d × 3,14 = 10 × 3,14 = 31,4 cm.')];
  }
  if (includesAny(text, ['thể tích', 'hình hộp chữ nhật', 'hình lập phương', 'mét khối', 'đề-xi-mét khối', 'xăng-ti-mét khối'])) {
    if (text.includes('hình lập phương')) {
      return [bubble(topic, 'q1', 'Hình lập phương có cạnh 4 cm. Thể tích là:', '64 cm³', ['16 cm³', '48 cm³'], 'Thể tích = cạnh × cạnh × cạnh = 4 × 4 × 4 = 64 cm³.')];
    }
    return [bubble(topic, 'q1', 'Hình hộp chữ nhật có chiều dài 8 cm, rộng 5 cm, cao 4 cm. Thể tích là:', '160 cm³', ['104 cm³', '17 cm³'], 'Thể tích = dài × rộng × cao = 8 × 5 × 4 = 160 cm³.')];
  }
  if (includesAny(text, ['diện tích xung quanh', 'diện tích toàn phần'])) {
    return [bubble(topic, 'q1', 'Hình lập phương có cạnh 5 cm. Diện tích toàn phần là:', '150 cm²', ['100 cm²', '125 cm²'], 'Diện tích toàn phần hình lập phương = (cạnh × cạnh) × 6 = (5 × 5) × 6 = 150 cm².')];
  }
  if (includesAny(text, ['số thập phân'])) {
    if (text.includes('nhân') || text.includes('chia')) return [bubble(topic, 'q1', 'Tính: 4,5 × 2 = ?', '9', ['8,5', '90'], '4,5 × 2 = 9.')];
    if (text.includes('cộng') || text.includes('trừ')) return [keypad(topic, 'q1', 'Tính: 12,5 + 7,8 = ?', '20,3', 'Đặt thẳng cột dấu phẩy rồi cộng.')];
    if (text.includes('so sánh')) return [bubble(topic, 'q1', 'So sánh hai số thập phân 4,5 và 4,49: số nào lớn hơn?', '4,5', ['4,49', 'Bằng nhau'], 'So sánh hàng phần mười: 5 > 4 nên 4,5 > 4,49.')];
    return [bubble(topic, 'q1', 'Trong số thập phân 12,345, chữ số 4 thuộc hàng nào?', 'Hàng phần trăm', ['Hàng phần mười', 'Hàng phần nghìn'], 'Chữ số 4 đứng thứ hai sau dấu phẩy nên thuộc hàng phần trăm.')];
  }
  if (includesAny(text, ['héc-ta', 'ha', 'km²'])) {
    return [bubble(topic, 'q1', '1 héc-ta (ha) bằng bao nhiêu mét vuông?', '10 000 m²', ['1000 m²', '100 m²'], '1 ha = 10 000 m².')];
  }
  if (includesAny(text, ['biểu đồ hình quạt', 'quạt tròn'])) {
    return [bubble(topic, 'q1', 'Biểu đồ hình quạt tròn biểu diễn điều gì?', 'Tỉ lệ phần trăm của các thành phần trong toàn thể', ['Độ dài đoạn thẳng', 'Nhiệt độ các ngày'], 'Tổng các phần trong hình quạt tròn tương ứng 100%.')];
  }
  if (includesAny(text, ['máy tính cầm tay'])) {
    return [bubble(topic, 'q1', 'Phím nào trên máy tính cầm tay dùng để bật máy và xóa kết quả?', 'Phím ON/C (hoặc AC)', ['Phím OFF', 'Phím ='], 'Phím ON/C dùng để khởi động và xóa màn hình.')];
  }
  if (includesAny(text, ['thời gian', 'số đo thời gian'])) {
    return [bubble(topic, 'q1', 'Tính: 2 giờ 30 phút + 1 giờ 45 phút = ?', '4 giờ 15 phút', ['3 giờ 75 phút', '4 giờ 30 phút'], '2 giờ 30 phút + 1 giờ 45 phút = 3 giờ 75 phút = 4 giờ 15 phút.')];
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
'''

with open(target_file, 'w', encoding='utf-8') as f:
    f.write(code)

print("✅ Đã cập nhật hoàn chỉnh mathQuestionEngine.ts!")
