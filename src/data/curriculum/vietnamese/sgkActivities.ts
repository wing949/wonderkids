import type { Question, QuestionOption } from '../../../types';

type Choice = readonly [label: string, isCorrect: boolean];

function choiceQuestion(
  lessonId: string,
  sourcePage: number,
  sourceSubpart: string,
  questionText: string,
  choices: readonly Choice[],
  hint: string,
): Question {
  return {
    id: `${lessonId}-${sourceSubpart.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`,
    type: 'bubble_choice',
    questionText,
    audioText: questionText,
    instruction: `Hoạt động SGK • Trang ${sourcePage} • ${sourceSubpart}`,
    hint,
    points: 15,
    contentOrigin: 'sgk_reference',
    sourceActivityId: `sgk-${lessonId}-p${sourcePage}-${sourceSubpart}`,
    sourcePage,
    sourceSubpart,
    gradingMode: 'auto',
    options: choices.map(([label, isCorrect], index): QuestionOption => ({
      id: String.fromCharCode(97 + index),
      label,
      isCorrect,
    })),
  };
}

function openQuestion(
  lessonId: string,
  sourcePage: number,
  sourceSubpart: string,
  questionText: string,
  hint: string,
): Question {
  return {
    id: `${lessonId}-${sourceSubpart.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`,
    type: 'open_response',
    questionText,
    audioText: questionText,
    instruction: `Hoạt động SGK • Trang ${sourcePage} • ${sourceSubpart}`,
    hint,
    points: 15,
    contentOrigin: 'sgk_reference',
    sourceActivityId: `sgk-${lessonId}-p${sourcePage}-${sourceSubpart}`,
    sourcePage,
    sourceSubpart,
    gradingMode: 'self_confirm',
  };
}

const VERIFIED_SGK_ACTIVITIES: Record<string, Question[]> = {
  'tv-g2-b1': [
    openQuestion('tv-g2-b1', 10, 'Đọc • 1', 'Em đã chuẩn bị những gì để đón ngày khai trường?', 'Nhìn tranh và kể những điều em đã chuẩn bị.'),
    openQuestion('tv-g2-b1', 12, 'Nói và nghe • 1', 'Kể về điều đáng nhớ nhất trong kì nghỉ hè của em.', 'Em có thể kể nơi em đã đi, hoạt động em tham gia và điều em nhớ nhất.'),
    openQuestion('tv-g2-b1', 12, 'Nói và nghe • 2', 'Em cảm thấy thế nào khi trở lại trường sau kì nghỉ hè?', 'Viết hoặc nói cảm xúc của em bằng câu trọn ý.'),
    openQuestion('tv-g2-b1', 12, 'Viết • vận dụng', 'Viết 2 – 3 câu về những ngày hè của em.', 'Viết đủ ý; sau đó em tự đọc lại câu của mình.'),
  ],
  'tv-g2-b2': [
    choiceQuestion('tv-g2-b2', 14, 'Đọc hiểu • 1', 'Bạn nhỏ đã hỏi bố điều gì?', [
      ['Ngày hôm qua đâu rồi?', true],
      ['Ngày mai là ngày gì?', false],
      ['Hoa trong vườn nở chưa?', false],
    ], 'Tìm câu hỏi của bạn nhỏ ở khổ thơ đầu.'),
    choiceQuestion('tv-g2-b2', 14, 'Đọc hiểu • 2', 'Theo lời bố, ngày hôm qua ở lại những đâu?', [
      ['Trên cành hoa, trong hạt lúa mẹ trồng và trong vở hồng của con.', true],
      ['Ở sân trường và trong cuốn lịch cũ.', false],
      ['Ở trên bầu trời và trong dòng sông.', false],
    ], 'Đọc lại ba khổ thơ sau của bài.'),
    choiceQuestion('tv-g2-b2', 14, 'Đọc hiểu • 3', 'Trong khổ thơ cuối, bố dặn bạn nhỏ làm gì để “ngày qua vẫn còn”?', [
      ['Học hành chăm chỉ.', true],
      ['Ra ngoài sân chơi.', false],
      ['Ngủ thêm một giấc.', false],
    ], 'Đọc dòng cuối của khổ thơ cuối.'),
    openQuestion('tv-g2-b2', 16, 'Viết • 2', 'Viết 2 – 3 câu tự giới thiệu về bản thân.', 'Có thể nêu họ tên, lớp hoặc trường và sở thích của em.'),
  ],
  'tv-g2-b3': [
    choiceQuestion('tv-g2-b3', 18, 'Đọc hiểu • 1', 'Nếu có bảy hũ vàng, Bi và Bống sẽ làm gì?', [
      ['Bống mua búp bê, quần áo; Bi mua ngựa hồng và ô tô.', true],
      ['Cả hai mang vàng về cất trong nhà.', false],
      ['Cả hai mua thật nhiều sách.', false],
    ], 'Tìm lời của Bi và Bống khi nhìn thấy cầu vồng.'),
    choiceQuestion('tv-g2-b3', 18, 'Đọc hiểu • 2', 'Không có bảy hũ vàng, hai anh em làm gì?', [
      ['Vẽ tặng nhau những món quà.', true],
      ['Bỏ về nhà và buồn bã.', false],
      ['Đi tìm cầu vồng khác.', false],
    ], 'Đọc phần cuối bài và quan sát tranh.'),
    openQuestion('tv-g2-b3', 19, 'Nói và nghe • 2', 'Kể cho người thân nghe câu chuyện Niềm vui của Bi và Bống.', 'Chọn 1 – 2 đoạn theo tranh rồi kể bằng lời của em.'),
  ],
  'tv-g2-b4': [
    choiceQuestion('tv-g2-b4', 21, 'Đọc hiểu • 1', 'Những con vật nào được nói đến trong bài?', [
      ['Con gà trống, con tu hú và chim cú mèo.', true],
      ['Con mèo, con chó và con thỏ.', false],
      ['Con voi, con hươu và con dê.', false],
    ], 'Đọc đoạn nói về các con vật đang làm việc.'),
    choiceQuestion('tv-g2-b4', 21, 'Luyện từ và câu • 1', 'Ghép đúng để tạo câu nêu hoạt động.', [
      ['Cái đồng hồ tích tắc, tích tắc báo phút, báo giờ.', true],
      ['Cái đồng hồ nở hoa cho sắc xuân thêm rực rỡ.', false],
      ['Cái đồng hồ gáy vang báo trời sắp sáng.', false],
    ], 'Đọc hai cột A và B trên trang sách.'),
    openQuestion('tv-g2-b4', 21, 'Đọc hiểu • 4', 'Theo em, mọi người, mọi vật làm việc như thế nào?', 'Nói ý kiến của em bằng một hoặc hai câu.'),
  ],
  'tv-g2-b5': [
    choiceQuestion('tv-g2-b5', 25, 'Đọc hiểu • 1', 'Voi em đã hỏi voi anh, hươu và dê điều gì?', [
      ['Em có xinh không?', true],
      ['Em có chạy nhanh không?', false],
      ['Em có khỏe không?', false],
    ], 'Câu hỏi này được lặp lại trong bài đọc.'),
    choiceQuestion('tv-g2-b5', 25, 'Đọc hiểu • 2', 'Sau khi nghe hươu và dê nói, voi em đã làm gì?', [
      ['Gài cành cây lên đầu và gắn cỏ dại vào cằm.', true],
      ['Đi tìm một chiếc gương mới.', false],
      ['Nhờ voi anh mua quần áo mới.', false],
    ], 'Đọc đoạn voi em gặp hươu và dê.'),
    openQuestion('tv-g2-b5', 25, 'Đọc hiểu • 4', 'Em học được điều gì từ câu chuyện của voi em?', 'Viết điều em hiểu bằng lời của mình.'),
    openQuestion('tv-g2-b5', 26, 'Nói và nghe • 2', 'Kể cho người thân về nhân vật voi em trong câu chuyện.', 'Quan sát tranh để kể theo trình tự.'),
  ],
  'tv-g2-b6': [
    choiceQuestion('tv-g2-b6', 28, 'Đọc hiểu • 1', 'Trong giờ học, thầy giáo yêu cầu cả lớp làm gì?', [
      ['Tập nói trước lớp về bất cứ điều gì mình thích.', true],
      ['Làm một bài kiểm tra viết.', false],
      ['Ra sân chơi thể thao.', false],
    ], 'Đọc lời thầy giáo ở đầu bài.'),
    choiceQuestion('tv-g2-b6', 28, 'Đọc hiểu • 3', 'Điều gì khiến Quang trở nên tự tin?', [
      ['Thầy giáo và các bạn động viên Quang.', true],
      ['Quang được về nhà sớm.', false],
      ['Quang tìm được một quyển sách.', false],
    ], 'Đọc đoạn cuối bài.'),
    openQuestion('tv-g2-b6', 28, 'Đọc hiểu • 4', 'Khi nói trước lớp, em cảm thấy thế nào?', 'Viết hoặc nói cảm xúc thật của em.'),
    openQuestion('tv-g2-b6', 29, 'Luyện tập • 3', 'Đặt một câu nêu đặc điểm ngoại hình của một bạn trong lớp em.', 'Chọn từ ngữ phù hợp, lịch sự và thân thiện.'),
  ],
  'tv-g2-b7': [
    choiceQuestion('tv-g2-b7', 32, 'Đọc hiểu • 1', 'Nghe tiếng động lạ, cây xấu hổ đã làm gì?', [
      ['Co rúm mình lại.', true],
      ['Bay lên cùng chim xanh.', false],
      ['Nở hoa thật đẹp.', false],
    ], 'Tìm câu đầu của bài đọc.'),
    choiceQuestion('tv-g2-b7', 32, 'Đọc hiểu • 2', 'Cây cỏ xung quanh xôn xao về chuyện gì?', [
      ['Một con chim xanh biếc, toàn thân lóng lánh bay tới.', true],
      ['Một cơn mưa lớn sắp đến.', false],
      ['Một bạn nhỏ đi qua khu vườn.', false],
    ], 'Đọc đoạn nói về con chim xanh.'),
    openQuestion('tv-g2-b7', 32, 'Đọc hiểu • 4', 'Câu văn nào cho biết cây xấu hổ rất mong con chim xanh quay trở lại?', 'Chép lại đúng câu văn trong bài.'),
  ],
  'tv-g2-b8': [
    choiceQuestion('tv-g2-b8', 35, 'Đọc hiểu • 1', 'Câu chuyện kể về ai?', [
      ['Gấu con làm cầu thủ dự bị.', true],
      ['Khỉ con đi tìm bạn.', false],
      ['Hươu con học đá bóng.', false],
    ], 'Đọc tên bài và nhân vật chính trong bài đọc.'),
    choiceQuestion('tv-g2-b8', 35, 'Đọc hiểu • 2', 'Vì sao lúc đầu chưa đội nào muốn nhận gấu con?', [
      ['Gấu con có vẻ chậm chạp và đá bóng không tốt.', true],
      ['Gấu con không muốn chơi bóng.', false],
      ['Gấu con đến sân quá muộn.', false],
    ], 'Tìm câu đầu của bài đọc.'),
    choiceQuestion('tv-g2-b8', 35, 'Đọc hiểu • 3', 'Là cầu thủ dự bị, gấu con đã làm gì?', [
      ['Nhặt bóng cho các bạn và chăm chỉ luyện tập.', true],
      ['Chỉ ngồi xem các bạn đá bóng.', false],
      ['Bỏ về nhà vì buồn.', false],
    ], 'Đọc đoạn nói về việc gấu con chờ được vào sân.'),
    openQuestion('tv-g2-b8', 35, 'Luyện nói • 2', 'Nếu là bạn của gấu con, em sẽ nói lời chúc mừng gấu con như thế nào?', 'Viết lời chúc mừng ngắn, tích cực và chân thành.'),
  ],
};

export function getVerifiedVietnameseSgkActivities(lessonId: string): Question[] {
  return VERIFIED_SGK_ACTIVITIES[lessonId.replace('-l', '-b')] || [];
}

export function getVerifiedVietnameseSgkActivityPages(lessonId: string): number[] {
  return [...new Set(getVerifiedVietnameseSgkActivities(lessonId).map((question) => question.sourcePage).filter((page): page is number => Number.isInteger(page)))];
}
