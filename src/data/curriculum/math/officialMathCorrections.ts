import type { CurriculumTopic } from '../types.ts';

type MathTocEntry = readonly [title: string, startPage: number];

const MATH_BOOK_URLS: Record<string, string> = {
  '1-1': 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-1-tap-mot.4698216815',
  '1-2': 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-1-tap-hai.4712748878',
  '2-1': 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-2-tap-mot.4698648594',
  '2-2': 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-2-tap-hai.4713893812',
  '3-1': 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-3-tap-mot.4698702815',
  '3-2': 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-3-tap-hai.4714081721',
  '4-1': 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-4-tap-mot.4714093295',
  '4-2': 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-4-tap-hai.4698870230',
  '5-1': 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-5-tap-mot.4699756373',
  '5-2': 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-5-tap-hai.4714103431',
};

const GRADE_1_TOC: MathTocEntry[] = [
  ['Các số 0, 1, 2, 3, 4, 5', 8], ['Các số 6, 7, 8, 9, 10', 14], ['Nhiều hơn, ít hơn, bằng nhau', 20],
  ['So sánh số', 24], ['Mấy và mấy', 32], ['Luyện tập chung', 38],
  ['Hình vuông, hình tròn, hình tam giác, hình chữ nhật', 46], ['Thực hành lắp ghép, xếp hình', 50], ['Luyện tập chung', 54],
  ['Phép cộng trong phạm vi 10', 56], ['Phép trừ trong phạm vi 10', 68], ['Bảng cộng, bảng trừ trong phạm vi 10', 80],
  ['Luyện tập chung', 86], ['Khối lập phương, khối hộp chữ nhật', 92], ['Vị trí, định hướng trong không gian', 96],
  ['Luyện tập chung', 100], ['Ôn tập các số trong phạm vi 10', 102], ['Ôn tập phép cộng, phép trừ trong phạm vi 10', 106],
  ['Ôn tập hình học', 110], ['Ôn tập chung', 112],
  ['Số có hai chữ số', 4], ['So sánh số có hai chữ số', 16], ['Bảng các số từ 1 đến 100', 22], ['Luyện tập chung', 24],
  ['Dài hơn, ngắn hơn', 28], ['Đơn vị đo độ dài', 32], ['Thực hành ước lượng và đo độ dài', 36], ['Luyện tập chung', 40],
  ['Phép cộng số có hai chữ số với số có một chữ số', 44], ['Phép cộng số có hai chữ số với số có hai chữ số', 48],
  ['Phép trừ số có hai chữ số cho số có một chữ số', 52], ['Phép trừ số có hai chữ số cho số có hai chữ số', 58], ['Luyện tập chung', 64],
  ['Xem giờ đúng trên đồng hồ', 72], ['Các ngày trong tuần', 76], ['Thực hành xem lịch và giờ', 80], ['Luyện tập chung', 84],
  ['Ôn tập các số và phép tính trong phạm vi 10', 88], ['Ôn tập các số và phép tính trong phạm vi 100', 94],
  ['Ôn tập hình học và đo lường', 100], ['Ôn tập chung', 104],
];

const GRADE_2_TOC: MathTocEntry[] = [
  ['Ôn tập các số đến 100', 6], ['Tia số. Số liền trước, số liền sau', 10], ['Các thành phần của phép cộng, phép trừ', 13],
  ['Hơn, kém nhau bao nhiêu', 16], ['Ôn tập phép cộng, phép trừ (không nhớ) trong phạm vi 100', 19], ['Luyện tập chung', 23],
  ['Phép cộng (qua 10) trong phạm vi 20', 26], ['Bảng cộng (qua 10)', 33], ['Bài toán về thêm, bớt một số đơn vị', 36],
  ['Luyện tập chung', 38], ['Phép trừ (qua 10) trong phạm vi 20', 41], ['Bảng trừ (qua 10)', 47],
  ['Bài toán về nhiều hơn, ít hơn một số đơn vị', 50], ['Luyện tập chung', 53], ['Ki-lô-gam', 57], ['Lít', 62],
  ['Thực hành và trải nghiệm với các đơn vị ki-lô-gam, lít', 66], ['Luyện tập chung', 70],
  ['Phép cộng (có nhớ) số có hai chữ số với số có một chữ số', 72], ['Phép cộng (có nhớ) số có hai chữ số với số có hai chữ số', 76],
  ['Luyện tập chung', 80], ['Phép trừ (có nhớ) số có hai chữ số cho số có một chữ số', 83],
  ['Phép trừ (có nhớ) số có hai chữ số cho số có hai chữ số', 89], ['Luyện tập chung', 95],
  ['Điểm, đoạn thẳng, đường thẳng, đường cong, ba điểm thẳng hàng', 98], ['Đường gấp khúc. Hình tứ giác', 102],
  ['Thực hành gấp, cắt, ghép, xếp hình. Vẽ đoạn thẳng', 106], ['Luyện tập chung', 110],
  ['Ngày – giờ, giờ – phút', 112], ['Ngày – tháng', 116], ['Thực hành và trải nghiệm xem đồng hồ, xem lịch', 119], ['Luyện tập chung', 122],
  ['Ôn tập phép cộng, phép trừ trong phạm vi 20, 100', 124], ['Ôn tập hình phẳng', 129], ['Ôn tập đo lường', 132], ['Ôn tập chung', 135],
  ['Phép nhân', 4], ['Thừa số, tích', 7], ['Bảng nhân 2', 9], ['Bảng nhân 5', 12], ['Phép chia', 15],
  ['Số bị chia, số chia, thương', 18], ['Bảng chia 2', 21], ['Bảng chia 5', 24], ['Luyện tập chung', 27],
  ['Khối trụ, khối cầu', 34], ['Luyện tập chung', 37], ['Đơn vị, chục, trăm, nghìn', 40], ['Các số tròn trăm, tròn chục', 43],
  ['So sánh các số tròn trăm, tròn chục', 47], ['Số có ba chữ số', 50], ['Viết số thành tổng các trăm, chục, đơn vị', 55],
  ['So sánh các số có ba chữ số', 58], ['Luyện tập chung', 61], ['Đề-xi-mét. Mét. Ki-lô-mét', 65],
  ['Giới thiệu tiền Việt Nam', 71], ['Thực hành và trải nghiệm đo độ dài', 73], ['Luyện tập chung', 75],
  ['Phép cộng (không nhớ) trong phạm vi 1 000', 79], ['Phép cộng (có nhớ) trong phạm vi 1 000', 83],
  ['Phép trừ (không nhớ) trong phạm vi 1 000', 87], ['Phép trừ (có nhớ) trong phạm vi 1 000', 91], ['Luyện tập chung', 97],
  ['Thu thập, phân loại, kiểm đếm số liệu', 100], ['Biểu đồ tranh', 102], ['Chắc chắn, có thể, không thể', 106],
  ['Thực hành và trải nghiệm thu thập, phân loại, kiểm đếm số liệu', 108],
  ['Ôn tập các số trong phạm vi 1 000', 110], ['Ôn tập phép cộng, phép trừ trong phạm vi 100', 113],
  ['Ôn tập phép cộng, phép trừ trong phạm vi 1 000', 117], ['Ôn tập phép nhân, phép chia', 122], ['Ôn tập hình học', 127],
  ['Ôn tập đo lường', 131], ['Ôn tập kiểm đếm số liệu và lựa chọn khả năng', 134], ['Ôn tập chung', 136],
];

const GRADE_3_TOC: MathTocEntry[] = [
  ['Ôn tập các số đến 1 000', 6], ['Ôn tập phép cộng, phép trừ trong phạm vi 1 000', 9], ['Tìm thành phần trong phép cộng, phép trừ', 11],
  ['Ôn tập bảng nhân 2; 5, bảng chia 2; 5', 14], ['Bảng nhân 3, bảng chia 3', 16], ['Bảng nhân 4, bảng chia 4', 19],
  ['Ôn tập hình học và đo lường', 21], ['Luyện tập chung', 24], ['Bảng nhân 6, bảng chia 6', 28], ['Bảng nhân 7, bảng chia 7', 31],
  ['Bảng nhân 8, bảng chia 8', 33], ['Bảng nhân 9, bảng chia 9', 36], ['Tìm thành phần trong phép nhân, phép chia', 39], ['Một phần mấy', 42],
  ['Luyện tập chung', 46], ['Điểm ở giữa, trung điểm của đoạn thẳng', 49], ['Hình tròn. Tâm, bán kính, đường kính của hình tròn', 52],
  ['Góc, góc vuông, góc không vuông', 54], ['Hình tam giác, hình tứ giác. Hình chữ nhật, hình vuông', 56],
  ['Thực hành vẽ góc vuông, vẽ đường tròn, hình vuông, hình chữ nhật và vẽ trang trí', 61], ['Khối lập phương, khối hộp chữ nhật', 63],
  ['Luyện tập chung', 65], ['Nhân số có hai chữ số với số có một chữ số', 67], ['Gấp một số lên một số lần', 70],
  ['Phép chia hết, phép chia có dư', 72], ['Chia số có hai chữ số cho số có một chữ số', 75], ['Giảm một số đi một số lần', 79],
  ['Bài toán giải bằng hai bước tính', 81], ['Luyện tập chung', 83], ['Mi-li-mét', 85], ['Gam', 87], ['Mi-li-lít', 89],
  ['Nhiệt độ. Đơn vị đo nhiệt độ', 91], ['Thực hành và trải nghiệm với các đơn vị mi-li-mét, gam, mi-li-lít, độ C', 93],
  ['Luyện tập chung', 95], ['Nhân số có ba chữ số với số có một chữ số', 97], ['Chia số có ba chữ số cho số có một chữ số', 99],
  ['Biểu thức số. Tính giá trị của biểu thức số', 104], ['So sánh số lớn gấp mấy lần số bé', 109], ['Luyện tập chung', 111],
  ['Ôn tập phép nhân, phép chia trong phạm vi 100, 1 000', 113], ['Ôn tập biểu thức số', 116], ['Ôn tập hình học và đo lường', 118], ['Ôn tập chung', 120],
  ['Các số có bốn chữ số. Số 10 000', 4], ['So sánh các số trong phạm vi 10 000', 9], ['Làm quen với chữ số La Mã', 12],
  ['Làm tròn số đến hàng chục, hàng trăm', 15], ['Luyện tập chung', 17], ['Chu vi hình tam giác, hình tứ giác, hình chữ nhật, hình vuông', 21],
  ['Diện tích của một hình. Xăng-ti-mét vuông', 26], ['Diện tích hình chữ nhật, diện tích hình vuông', 30], ['Luyện tập chung', 35],
  ['Phép cộng trong phạm vi 10 000', 38], ['Phép trừ trong phạm vi 10 000', 41], ['Nhân số có bốn chữ số với số có một chữ số', 43],
  ['Chia số có bốn chữ số cho số có một chữ số', 47], ['Luyện tập chung', 52], ['Các số có năm chữ số. Số 100 000', 56],
  ['So sánh các số trong phạm vi 100 000', 61], ['Làm tròn số đến hàng nghìn, hàng chục nghìn', 64], ['Luyện tập chung', 66],
  ['Phép cộng trong phạm vi 100 000', 70], ['Phép trừ trong phạm vi 100 000', 73], ['Luyện tập chung', 76],
  ['Xem đồng hồ. Tháng – năm', 77], ['Thực hành xem đồng hồ, xem lịch', 81], ['Tiền Việt Nam', 85], ['Luyện tập chung', 88],
  ['Nhân số có năm chữ số với số có một chữ số', 94], ['Chia số có năm chữ số cho số có một chữ số', 97], ['Luyện tập chung', 101],
  ['Thu thập, phân loại, ghi chép số liệu. Bảng số liệu', 103], ['Khả năng xảy ra của một sự kiện', 108],
  ['Thực hành và trải nghiệm thu thập, phân loại, ghi chép số liệu, đọc bảng số liệu', 110],
  ['Ôn tập các số trong phạm vi 10 000, 100 000', 112], ['Ôn tập phép cộng, phép trừ trong phạm vi 100 000', 115],
  ['Ôn tập phép nhân, phép chia trong phạm vi 100 000', 118], ['Ôn tập hình học và đo lường', 121],
  ['Ôn tập bảng số liệu, khả năng xảy ra của một sự kiện', 123], ['Ôn tập chung', 125],
];

const GRADE_4_TOC: MathTocEntry[] = [
  ['Ôn tập các số đến 100 000', 6], ['Ôn tập các phép tính trong phạm vi 100 000', 9], ['Số chẵn, số lẻ', 12], ['Biểu thức chứa chữ', 14],
  ['Giải bài toán có ba bước tính', 19], ['Luyện tập chung', 21], ['Đo góc, đơn vị đo góc', 23], ['Góc nhọn, góc tù, góc bẹt', 26],
  ['Luyện tập chung', 31], ['Số có sáu chữ số. Số 1 000 000', 33], ['Hàng và lớp', 37], ['Các số trong phạm vi lớp triệu', 41],
  ['Làm tròn số đến hàng trăm nghìn', 45], ['So sánh các số có nhiều chữ số', 47], ['Làm quen với dãy số tự nhiên', 50], ['Luyện tập chung', 52],
  ['Yến, tạ, tấn', 56], ['Đề-xi-mét vuông, mét vuông, mi-li-mét vuông', 60], ['Giây, thế kỉ', 66],
  ['Thực hành và trải nghiệm sử dụng một số đơn vị đo đại lượng', 69], ['Luyện tập chung', 73],
  ['Phép cộng các số có nhiều chữ số', 76], ['Phép trừ các số có nhiều chữ số', 79], ['Tính chất giao hoán và kết hợp của phép cộng', 82],
  ['Tìm hai số biết tổng và hiệu của hai số đó', 86], ['Luyện tập chung', 88], ['Hai đường thẳng vuông góc', 91],
  ['Thực hành và trải nghiệm vẽ hai đường thẳng vuông góc', 94], ['Hai đường thẳng song song', 98],
  ['Thực hành và trải nghiệm vẽ hai đường thẳng song song', 101], ['Hình bình hành, hình thoi', 105], ['Luyện tập chung', 110],
  ['Ôn tập các số đến lớp triệu', 114], ['Ôn tập phép cộng, phép trừ', 118], ['Ôn tập hình học', 121], ['Ôn tập đo lường', 125], ['Ôn tập chung', 127],
  ['Nhân với số có một chữ số', 4], ['Chia cho số có một chữ số', 6], ['Tính chất giao hoán và kết hợp của phép nhân', 9],
  ['Nhân, chia với 10, 100, 1 000,...', 14], ['Tính chất phân phối của phép nhân đối với phép cộng', 17], ['Nhân với số có hai chữ số', 20],
  ['Chia cho số có hai chữ số', 23], ['Thực hành và trải nghiệm ước lượng trong tính toán', 27], ['Tìm số trung bình cộng', 29],
  ['Bài toán liên quan đến rút về đơn vị', 31], ['Luyện tập chung', 33], ['Dãy số liệu thống kê', 36], ['Biểu đồ cột', 39],
  ['Số lần xuất hiện của một sự kiện', 43], ['Luyện tập chung', 47], ['Khái niệm phân số', 49], ['Phân số và phép chia số tự nhiên', 52],
  ['Tính chất cơ bản của phân số', 56], ['Rút gọn phân số', 59], ['Quy đồng mẫu số các phân số', 62], ['So sánh phân số', 64], ['Luyện tập chung', 69],
  ['Phép cộng phân số', 74], ['Phép trừ phân số', 80], ['Luyện tập chung', 83], ['Phép nhân phân số', 86], ['Phép chia phân số', 91],
  ['Tìm phân số của một số', 95], ['Luyện tập chung', 98], ['Ôn tập số tự nhiên', 102], ['Ôn tập phép tính với số tự nhiên', 105],
  ['Ôn tập phân số', 107], ['Ôn tập phép tính với phân số', 110], ['Ôn tập hình học và đo lường', 112],
  ['Ôn tập một số yếu tố thống kê và xác suất', 114], ['Ôn tập chung', 116],
];

const GRADE_5_TOC: MathTocEntry[] = [
  ['Ôn tập số tự nhiên', 6], ['Ôn tập các phép tính với số tự nhiên', 9], ['Ôn tập phân số', 11], ['Phân số thập phân', 14],
  ['Ôn tập các phép tính với phân số', 16], ['Cộng, trừ hai phân số khác mẫu số', 20], ['Hỗn số', 23], ['Ôn tập hình học và đo lường', 26],
  ['Luyện tập chung', 29], ['Khái niệm số thập phân', 32], ['So sánh các số thập phân', 38],
  ['Viết số đo đại lượng dưới dạng số thập phân', 42], ['Làm tròn số thập phân', 47], ['Luyện tập chung', 51],
  ['Ki-lô-mét vuông. Héc-ta', 53], ['Các đơn vị đo diện tích', 56], ['Thực hành và trải nghiệm với một số đơn vị đo đại lượng', 60], ['Luyện tập chung', 62],
  ['Phép cộng số thập phân', 65], ['Phép trừ số thập phân', 68], ['Phép nhân số thập phân', 71], ['Phép chia số thập phân', 76],
  ['Nhân, chia số thập phân với 10; 100; 1 000;... hoặc với 0,1; 0,01; 0,001;...', 83], ['Luyện tập chung', 88],
  ['Hình tam giác. Diện tích hình tam giác', 91], ['Hình thang. Diện tích hình thang', 98],
  ['Đường tròn. Chu vi và diện tích hình tròn', 105], ['Thực hành và trải nghiệm đo, vẽ, lắp ghép, tạo hình', 113], ['Luyện tập chung', 116],
  ['Ôn tập số thập phân', 120], ['Ôn tập các phép tính với số thập phân', 123], ['Ôn tập một số hình phẳng', 127],
  ['Ôn tập diện tích, chu vi một số hình phẳng', 130], ['Ôn tập đo lường', 133], ['Ôn tập chung', 135],
  ['Tỉ số. Tỉ số phần trăm', 4], ['Tỉ lệ bản đồ và ứng dụng', 8], ['Tìm hai số khi biết tổng và tỉ số của hai số đó', 12],
  ['Tìm hai số khi biết hiệu và tỉ số của hai số đó', 15], ['Tìm tỉ số phần trăm của hai số', 18], ['Tìm giá trị phần trăm của một số', 21],
  ['Máy tính cầm tay', 23], ['Thực hành và trải nghiệm sử dụng máy tính cầm tay', 27], ['Luyện tập chung', 28],
  ['Thể tích của một hình', 30], ['Xăng-ti-mét khối. Đề-xi-mét khối', 33], ['Mét khối', 35], ['Luyện tập chung', 38],
  ['Hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ', 40], ['Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật', 44],
  ['Diện tích xung quanh và diện tích toàn phần của hình lập phương', 48], ['Thể tích của hình hộp chữ nhật', 51], ['Thể tích của hình lập phương', 54],
  ['Thực hành tính toán và ước lượng thể tích một số hình khối', 58], ['Luyện tập chung', 60], ['Các đơn vị đo thời gian', 64],
  ['Cộng, trừ số đo thời gian', 67], ['Nhân, chia số đo thời gian với một số', 71], ['Vận tốc của một chuyển động đều', 76],
  ['Quãng đường, thời gian của một chuyển động đều', 78], ['Thực hành tính toán và ước lượng về vận tốc, quãng đường, thời gian trong chuyển động đều', 82],
  ['Luyện tập chung', 84], ['Thu thập, phân loại, sắp xếp các số liệu', 87], ['Biểu đồ hình quạt tròn', 90],
  ['Tỉ số của số lần lặp lại một sự kiện so với tổng số lần thực hiện', 94],
  ['Thực hành và trải nghiệm thu thập, phân tích, biểu diễn các số liệu thống kê', 96], ['Luyện tập chung', 100],
  ['Ôn tập số tự nhiên, phân số, số thập phân', 103], ['Ôn tập các phép tính với số tự nhiên, phân số, số thập phân', 107],
  ['Ôn tập tỉ số, tỉ số phần trăm', 111], ['Ôn tập hình học', 113], ['Ôn tập đo lường', 119], ['Ôn tập toán chuyển động đều', 121],
  ['Ôn tập một số yếu tố thống kê và xác suất', 123], ['Ôn tập chung', 128],
];

function normalizeGrade(raw: CurriculumTopic[], grade: 1 | 2 | 3 | 4 | 5, semesterOneCount: number, toc: MathTocEntry[]): CurriculumTopic[] {
  return toc.map(([officialTitle, startPage], index) => {
    const lessonNumber = index + 1;
    const semester: 1 | 2 = lessonNumber <= semesterOneCount ? 1 : 2;
    const rawTopic = raw.find((topic) => topic.lessonNumber === lessonNumber);
    const title = `Bài ${lessonNumber}: ${officialTitle}`;
    const sourceBook = `Toán ${grade} - Tập ${semester}`;
    const referenceUrl = MATH_BOOK_URLS[`${grade}-${semester}`];
    return {
      ...(rawTopic || {}),
      id: `math-g${grade}-b${lessonNumber}`,
      semester,
      lessonNumber,
      title,
      unit: semester === 1 ? 'Học kỳ 1' : 'Học kỳ 2',
      textbookPageRef: `SGK Toán ${grade} Tập ${semester === 1 ? 'một' : 'hai'} — Trang ${startPage}`,
      sourcePages: [startPage],
      sourceType: 'sgk_official',
      sourceBook: `${sourceBook}, NXB Giáo Dục Việt Nam`,
      sourceDetail: `${title} — trang mở đầu ${startPage}`,
      provenance: {
        contentOrigin: 'system_generated',
        verificationStatus: 'reference_only',
        referenceBook: `${sourceBook}, NXB Giáo Dục Việt Nam`,
        referenceLessonTitle: title,
        referenceDetail: 'Tên bài và trang mở đầu đã đối chiếu trực quan với mục lục SGK; câu hỏi trong ứng dụng là bài luyện bổ trợ.',
        referenceUrl,
        note: 'Không trình bày câu hỏi do ứng dụng tạo như nguyên văn bài tập SGK.',
      },
      pedagogicalObjective: `Luyện kiến thức và kĩ năng thuộc bài “${officialTitle}”.`,
      description: `Ôn và thực hành nội dung “${officialTitle}” qua các hoạt động phù hợp với học sinh lớp ${grade}.`,
      summary: `Nội dung luyện tập bổ trợ cho ${title}.`,
      keyPoints: [
        `Nhận biết kiến thức trọng tâm của bài “${officialTitle}”.`,
        'Thực hành từng bước và kiểm tra lại kết quả.',
      ],
      mascotTip: 'Cú BoBo: Đọc kĩ đề và kiểm tra lại kết quả nhé!',
    };
  });
}

export function normalizeVerifiedMathToc(rawByGrade: Record<number, CurriculumTopic[]>): Record<number, CurriculumTopic[]> {
  return {
    ...rawByGrade,
    1: normalizeGrade(rawByGrade[1] || [], 1, 20, GRADE_1_TOC),
    2: normalizeGrade(rawByGrade[2] || [], 2, 36, GRADE_2_TOC),
    3: normalizeGrade(rawByGrade[3] || [], 3, 44, GRADE_3_TOC),
    4: normalizeGrade(rawByGrade[4] || [], 4, 37, GRADE_4_TOC),
    5: normalizeGrade(rawByGrade[5] || [], 5, 35, GRADE_5_TOC),
  };
}

export const VERIFIED_MATH_TOC_COUNTS = { 1: 41, 2: 75, 3: 81, 4: 73, 5: 75 } as const;
