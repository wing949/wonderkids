import type { GradeLevel } from '../../../types';
import type { CurriculumTopic } from '../types';

type CatalogRow = readonly [title: string, sourcePage: number];

/**
 * Danh mục được chép từ mục lục của 10 sách do NXB Giáo dục Việt Nam cung cấp.
 * `sourcePage` là trang mở đầu của bài trong trình đọc chính thức. Chỉ mục lục,
 * tên bài và trang được công bố tại đây; phần nguyên văn phải qua bước duyệt riêng.
 */
const LEGACY_T1_COUNTS: Record<GradeLevel, number> = { 1: 20, 2: 18, 3: 14, 4: 11, 5: 16 };
const LEGACY_T2_COUNTS: Record<GradeLevel, number> = { 1: 10, 2: 12, 3: 11, 4: 11, 5: 9 };

function stableLessonId(grade: GradeLevel, semester: 1 | 2, lessonNumber: number): string {
  if (semester === 1 && lessonNumber <= LEGACY_T1_COUNTS[grade]) return `tv-g${grade}-b${lessonNumber}`;
  if (semester === 2 && lessonNumber <= LEGACY_T2_COUNTS[grade]) {
    return `tv-g${grade}-b${LEGACY_T1_COUNTS[grade] + lessonNumber}`;
  }
  return `tv-g${grade}-t${semester}-b${lessonNumber}`;
}

function topicsForBook(grade: GradeLevel, semester: 1 | 2, rows: readonly CatalogRow[]): CurriculumTopic[] {
  const volume = semester === 1 ? 'một' : 'hai';
  const sourceBook = `Tiếng Việt ${grade}, tập ${volume} — Nhà xuất bản Giáo dục Việt Nam`;

  return rows.map(([sourceTitle, sourcePage], index) => {
    const lessonNumber = index + 1;
    const title = `Bài ${lessonNumber}: ${sourceTitle}`;
    return {
      id: stableLessonId(grade, semester, lessonNumber),
      semester,
      lessonNumber,
      title,
      unit: `SGK Tiếng Việt ${grade} tập ${semester}`,
      textbookPageRef: `Tập ${semester} • Trang ${sourcePage}`,
      sourcePages: [sourcePage],
      sourceType: 'sgk_official',
      sourceBook,
      sourceDetail: `Mục lục SGK chính thức — ${title} — Trang ${sourcePage}`,
      provenance: {
        contentOrigin: 'sgk_reference',
        verificationStatus: 'reference_only',
        referenceBook: sourceBook,
        referenceLessonTitle: title,
        referenceDetail: `Mục lục SGK chính thức — Trang ${sourcePage}`,
        note: 'Tên bài và trang đã đối chiếu mục lục SGK. Nguyên văn, hoạt động và audio chờ đối chiếu từng trang.',
      },
      description: `Nội dung: Xem bài “${sourceTitle}” ở trang ${sourcePage} của SGK chính thức.`,
      summary: `Đọc bài “${sourceTitle}” trên trang SGK đã ghi.`,
      keyPoints: [
        'Đọc và quan sát đúng nội dung trên trang SGK.',
        'Thực hiện hoạt động sau khi từng ý trong sách được đối chiếu.',
      ],
      mascotTip: `MiuMiu: Mình cùng mở trang ${sourcePage} để học bài “${sourceTitle}” nhé!`,
    };
  });
}

const GRADE_1_T1: CatalogRow[] = [
  ['A a', 14], ['B b', 16], ['C c', 18], ['E e - Ê ê', 20], ['Ôn tập và kể chuyện', 22],
  ['O o', 24], ['Ô ô', 26], ['D d - Đ đ', 28], ['Ơ ơ', 30], ['Ôn tập và kể chuyện', 32],
  ['I i - K k', 34], ['H h - L l', 36], ['U u - Ư ư', 38], ['Ch ch - Kh kh', 40], ['Ôn tập và kể chuyện', 42],
  ['M m - N n', 44], ['G g - Gi gi', 46], ['Gh gh - Nh nh', 48], ['Ng ng - Ngh ngh', 50], ['Ôn tập và kể chuyện', 52],
  ['R r - S s', 54], ['T t - Tr tr', 56], ['Th th - ia', 58], ['ua - ưa', 60], ['Ôn tập và kể chuyện', 62],
  ['Ph ph - Qu qu', 64], ['V v - X x', 66], ['Y y', 68], ['Luyện tập chính tả', 70], ['Ôn tập và kể chuyện', 72],
  ['an - ăn - ân', 74], ['on - ôn - ơn', 76], ['en - ên - in - un', 78], ['am - ăm - âm', 80], ['Ôn tập và kể chuyện', 82],
  ['om - ôm - ơm', 84], ['em - êm - im - um', 86], ['ai - ay - ây', 88], ['oi - ôi - ơi', 90], ['Ôn tập và kể chuyện', 92],
  ['ui - ưi', 94], ['ao - eo', 96], ['au - âu - êu', 98], ['iu - ưu', 100], ['Ôn tập và kể chuyện', 102],
  ['ac - ăc - âc', 104], ['oc - ôc - uc - ưc', 106], ['at - ăt - ât', 108], ['ot - ôt - ơt', 110], ['Ôn tập và kể chuyện', 112],
  ['et - êt - it', 114], ['ut - ưt', 116], ['ap - ăp - âp', 118], ['op - ôp - ơp', 120], ['Ôn tập và kể chuyện', 122],
  ['ep - êp - ip - up', 124], ['anh - ênh - inh', 126], ['ach - êch - ich', 128], ['ang - ăng - âng', 130], ['Ôn tập và kể chuyện', 132],
  ['ong - ông - ung - ưng', 134], ['iêc - iên - iêp', 136], ['iêng - iêm - yên', 138], ['iêt - iêu - yêu', 140], ['Ôn tập và kể chuyện', 142],
  ['uôi - uôm', 144], ['uôc - uôt', 146], ['uôn - uông', 148], ['ươi - ươu', 150], ['Ôn tập và kể chuyện', 152],
  ['ươc - ươt', 154], ['ươm - ươp', 156], ['ươn - ương', 158], ['oa - oe', 160], ['Ôn tập và kể chuyện', 162],
  ['oan - oăn - oat - oăt', 164], ['oai - uê - uy', 166], ['uân - uât', 168], ['uyên - uyêt', 170], ['Ôn tập và kể chuyện', 172],
  ['Ôn tập', 174], ['Ôn tập', 176], ['Voi, hổ và khỉ', 178],
];

const GRADE_1_T2: CatalogRow[] = [
  ['Tôi là học sinh lớp 1', 4], ['Đôi tai xấu xí', 8], ['Bạn của gió', 12], ['Giải thưởng tình bạn', 14], ['Sinh nhật của voi con', 18],
  ['Nụ hôn trên bàn tay', 24], ['Làm anh', 28], ['Cả nhà đi chơi núi', 30], ['Quạt cho bà ngủ', 34], ['Bữa cơm gia đình', 36], ['Ngôi nhà', 40],
  ['Tôi đi học', 44], ['Đi học', 48], ['Hoa yêu thương', 50], ['Cây bàng và lớp học', 54], ['Bác trống trường', 56], ['Giờ ra chơi', 60],
  ['Rửa tay trước khi ăn', 64], ['Lời chào đi trước', 68], ['Khi mẹ vắng nhà', 70], ['Nếu không may bị lạc', 74], ['Đèn giao thông', 78],
  ['Kiến và chim bồ câu', 84], ['Câu chuyện của rễ', 88], ['Câu hỏi của sói', 90], ['Chú bé chăn cừu', 94], ['Tiếng vọng của núi', 98],
  ['Loài chim của biển cả', 104], ['Bảy sắc cầu vồng', 108], ['Chúa tể rừng xanh', 110], ['Cuộc thi tài năng rừng xanh', 114], ['Cây liễu dẻo dai', 118],
  ['Tia nắng đi đâu?', 124], ['Trong giấc mơ buổi sáng', 126], ['Ngày mới bắt đầu', 128], ['Hỏi mẹ', 132], ['Những cánh cò', 134], ['Buổi trưa hè', 138], ['Hoa phượng', 140],
  ['Cậu bé thông minh', 144], ['Lính cứu hoả', 148], ['Lớn lên bạn làm gì?', 152], ['Ruộng bậc thang ở Sa Pa', 154], ['Nhớ ơn', 156], ['Du lịch biển Việt Nam', 158],
];

const GRADE_2_T1: CatalogRow[] = [
  ['Tôi là học sinh lớp 2', 10], ['Ngày hôm qua đâu rồi?', 13], ['Niềm vui của Bi và Bống', 17], ['Làm việc thật là vui', 20], ['Em có xinh không?', 24], ['Một giờ học', 27],
  ['Cây xấu hổ', 31], ['Cầu thủ dự bị', 34], ['Cô giáo lớp em', 40], ['Thời khoá biểu', 43], ['Cái trống trường em', 48], ['Danh sách học sinh', 51],
  ['Yêu lắm trường ơi!', 55], ['Em học vẽ', 58], ['Cuốn sách của em', 63], ['Khi trang sách mở ra', 66], ['Gọi bạn', 79], ['Tớ nhớ cậu', 82],
  ['Chữ A và những người bạn', 86], ['Nhím nâu kết bạn', 89], ['Thả diều', 94], ['Tớ là lê-gô', 97], ['Rồng rắn lên mây', 101], ['Nặn đồ chơi', 104],
  ['Sự tích hoa tỉ muội', 109], ['Em mang về yêu thương', 112], ['Mẹ', 116], ['Trò chơi của bố', 119], ['Cánh cửa nhớ bà', 123], ['Thương ông', 126], ['Ánh sáng của yêu thương', 130], ['Chơi chong chóng', 133],
];

const GRADE_2_T2: CatalogRow[] = [
  ['Chuyện bốn mùa', 9], ['Mùa nước nổi', 12], ['Hoa mi hót', 16], ['Tết đến rồi', 19], ['Giọt nước và biển lớn', 23], ['Mùa vàng', 26],
  ['Hạt thóc', 31], ['Luỹ tre', 34], ['Vè chim', 39], ['Khủng long', 42], ['Sự tích cây thì là', 46], ['Bờ tre đón khách', 49],
  ['Tiếng chổi tre', 54], ['Cỏ non cười rồi', 57], ['Những con sao biển', 61], ['Tạm biệt cánh cam', 64], ['Những cách chào độc đáo', 77], ['Thư viện biết đi', 80],
  ['Cảm ơn anh hà mã', 84], ['Từ chú bồ câu đến in-tơ-nét', 87], ['Mai An Tiêm', 92], ['Thư gửi bố ngoài đảo', 95], ['Bóp nát quả cam', 100], ['Chiếc rễ đa tròn', 104],
  ['Đất nước chúng mình', 110], ['Trên các miền đất nước', 113], ['Chuyện quả bầu', 119], ['Khám phá đáy biển ở Trường Sa', 122], ['Hồ Gươm', 126], ['Cánh đồng quê em', 129],
];

const GRADE_3_T1: CatalogRow[] = [
  ['Ngày gặp lại', 10], ['Về thăm quê', 13], ['Cánh rừng trong nắng', 17], ['Lần đầu ra biển', 21], ['Nhật kí tập bơi', 26], ['Tập nấu ăn', 30],
  ['Mùa hè lấp lánh', 34], ['Tạm biệt mùa hè', 38], ['Đi học vui sao', 43], ['Con đường đến trường', 46], ['Lời giải toán đặc biệt', 50], ['Bài tập làm văn', 54],
  ['Bàn tay cô giáo', 59], ['Cuộc họp của chữ viết', 62], ['Thư viện', 66], ['Ngày em vào Đội', 70], ['Ngưỡng cửa', 82], ['Món quà đặc biệt', 86],
  ['Khi cả nhà bé tí', 90], ['Trò chuyện cùng mẹ', 93], ['Tia nắng bé nhỏ', 97], ['Để cháu nắm tay ông', 100], ['Tôi yêu em tôi', 104], ['Bạn nhỏ trong nhà', 107],
  ['Những bậc đá chạm mây', 112], ['Đi tìm mặt trời', 116], ['Những chiếc áo ấm', 120], ['Con đường của bé', 124], ['Ngôi nhà trong cỏ', 129], ['Những ngọn hải đăng', 133], ['Người làm đồ chơi', 137], ['Cây bút thần', 140],
];

const GRADE_3_T2: CatalogRow[] = [
  ['Bầu trời', 8], ['Mưa', 11], ['Cóc kiện Trời', 15], ['Những cái tên đáng yêu', 19], ['Ngày hội rừng xanh', 23], ['Cây gạo', 27],
  ['Một trời xanh của tôi', 32], ['Bầy voi rừng Trường Sơn', 35], ['Lời kêu gọi toàn dân tập thể dục', 40], ['Quả hồng của thỏ con', 44], ['Chuyện bên cửa sổ', 48], ['Tay trái và tay phải', 51],
  ['Mèo đi câu cá', 55], ['Học nghề', 58], ['Ngày như thế nào là đẹp?', 62], ['A lô, tớ đây', 66], ['Đất nước là gì?', 80], ['Núi quê tôi', 83],
  ['Sông Hương', 87], ['Tiếng nước mình', 91], ['Nhà rông', 95], ['Sự tích ông Đùng, bà Đùng', 98], ['Hai Bà Trưng', 102], ['Cùng Bác qua suối', 106],
  ['Ngọn lửa Ô-lim-pích', 111], ['Rô-bốt ở quanh ta', 114], ['Thư của ông Trái Đất gửi các bạn nhỏ', 118], ['Những điều nhỏ tớ làm cho Trái Đất', 122], ['Bác sĩ Y-éc-xanh', 126], ['Một mái nhà chung', 130],
];

const GRADE_4_T1: CatalogRow[] = [
  ['Điều kì diệu', 8], ['Thi nhạc', 12], ['Anh em sinh đôi', 16], ['Công chúa và người dẫn chuyện', 20], ['Thần lằn xanh và tắc kè', 23], ['Nghệ sĩ trống', 26],
  ['Những bức chân dung', 30], ['Đò ngang', 34], ['Bầu trời trong quả trứng', 39], ['Tiếng nói của cỏ cây', 44], ['Tập làm văn', 48], ['Nhà phát minh 6 tuổi', 51],
  ['Con vẹt xanh', 55], ['Chân trời cuối phố', 59], ['Gặt chữ trên non', 63], ['Trước ngày xa quê', 66], ['Vẽ màu', 77], ['Đồng cỏ nở hoa', 81],
  ['Thanh âm của núi', 85], ['Bầu trời mùa thu', 89], ['Làm thỏ con bằng giấy', 93], ['Bức tường có nhiều phép lạ', 97], ['Bét-tô-ven và bản xô-nát Ánh trăng', 101], ['Người tìm đường lên các vì sao', 105],
  ['Bay cùng ước mơ', 109], ['Con trai người làm vườn', 114], ['Nếu em có một khu vườn', 118], ['Bốn mùa mơ ước', 122], ['Ở Vương quốc Tương Lai', 125], ['Cánh chim nhỏ', 129], ['Nếu chúng mình có phép lạ', 132], ['Anh Ba', 135],
];

const GRADE_4_T2: CatalogRow[] = [
  ['Hải Thượng Lãn Ông', 8], ['Vệt phấn trên mặt bàn', 12], ['Ông Bụt đã đến', 16], ['Quả ngọt cuối mùa', 20], ['Tờ báo tường của tôi', 24], ['Tiếng ru', 28],
  ['Con muốn làm một cái cây', 31], ['Trên khóm tre đầu ngõ', 35], ['Sự tích con Rồng cháu Tiên', 40], ['Cảm xúc Trường Sa', 44], ['Sáng tháng Năm', 48], ['Chàng trai làng Phù Ủng', 51],
  ['Vườn của ông tôi', 55], ['Trong lời mẹ hát', 59], ['Người thầy đầu tiên của bố tôi', 63], ['Ngựa biên phòng', 67], ['Cây đa quê hương', 80], ['Bước mùa xuân', 85],
  ['Đi hội chùa Hương', 89], ['Chiều ngoại ô', 93], ['Những cánh buồm', 98], ['Cái cầu', 102], ['Đường đi Sa Pa', 106], ['Quê ngoại', 109],
  ['Khu bảo tồn động vật hoang dã Ngô-rông-gô-rô', 113], ['Ngôi nhà của yêu thương', 117], ['Băng tan', 120], ['Chuyến du lịch thú vị', 123], ['Lễ hội ở Nhật Bản', 127], ['Ngày hội', 131],
];

const GRADE_5_T1: CatalogRow[] = [
  ['Thanh âm của gió', 8], ['Cánh đồng hoa', 13], ['Tuổi Ngựa', 18], ['Bến sông tuổi thơ', 23], ['Tiếng hạt nảy mầm', 28], ['Ngôi sao sân cỏ', 31],
  ['Bộ sưu tập độc đáo', 36], ['Hành tinh kì lạ', 41], ['Trước cổng trời', 46], ['Kì diệu rừng xanh', 51], ['Hang Sơn Đoòng - những điều kì thú', 56], ['Những hòn đảo trên vịnh Hạ Long', 60],
  ['Mầm non', 64], ['Những ngọn núi nóng rẫy', 68], ['Bài ca về mặt trời', 72], ['Xin chào, Xa-ha-ra', 76], ['Thư gửi các học sinh', 89], ['Tấm gương tự học', 94],
  ['Trải nghiệm để sáng tạo', 98], ['Khổ luyện thành tài', 102], ['Thế giới trong trang sách', 105], ['Từ những câu chuyện ấu thơ', 110], ['Giới thiệu sách Dế Mèn phiêu lưu kí', 114], ['Tinh thần học tập của nhà Phi-lít', 117],
  ['Tiếng đàn ba-la-lai-ca trên sông Đà', 122], ['Trí tưởng tượng phong phú', 127], ['Tranh làng Hồ', 132], ['Tập hát quan họ', 136], ['Phim hoạt hình Chú ốc sên bay', 140], ['Nghệ thuật múa ba lê', 145], ['Một ngôi chùa độc đáo', 149], ['Sự tích chú Tễu', 153],
];

const GRADE_5_T2: CatalogRow[] = [
  ['Tiếng hát của người đá', 8], ['Khúc hát ru những em bé lớn trên lưng mẹ', 13], ['Hạt gạo làng ta', 17], ['Hộp quà màu thiên thanh', 22], ['Giỏ hoa tháng Năm', 26], ['Thư của bố', 30],
  ['Đoàn thuyền đánh cá', 34], ['Khu rừng của Mát', 38], ['Hội thổi cơm thi ở Đồng Vân', 43], ['Những búp chè trên cây cổ thụ', 48], ['Hương cốm mùa thu', 53], ['Vũ điệu trên nền thổ cẩm', 57],
  ['Đàn trưng - tiếng ca đại ngàn', 61], ['Đường quê Đồng Tháp Mười', 66], ['Xuồng ba lá quê tôi', 70], ['Về thăm Đất Mũi', 73], ['Nghìn năm văn hiến', 88], ['Người thầy của muôn đời', 93],
  ['Danh y Tuệ Tĩnh', 97], ['Cụ Đồ Chiểu', 101], ['Anh hùng Lao động Trần Đại Nghĩa', 106], ['Bộ đội về làng', 109], ['Về ngôi nhà đang xây', 113], ['Việt Nam quê hương ta', 117],
  ['Bài ca trái đất', 122], ['Những con hạc giấy', 126], ['Một người hùng thầm lặng', 130], ['Giờ Trái Đất', 135], ['Điện thoại di động', 140], ['Thành phố thông minh Mát-xđa', 144],
];

export const OFFICIAL_VIETNAMESE_CURRICULUM_BY_GRADE: Record<GradeLevel, CurriculumTopic[]> = {
  1: [...topicsForBook(1, 1, GRADE_1_T1), ...topicsForBook(1, 2, GRADE_1_T2)],
  2: [...topicsForBook(2, 1, GRADE_2_T1), ...topicsForBook(2, 2, GRADE_2_T2)],
  3: [...topicsForBook(3, 1, GRADE_3_T1), ...topicsForBook(3, 2, GRADE_3_T2)],
  4: [...topicsForBook(4, 1, GRADE_4_T1), ...topicsForBook(4, 2, GRADE_4_T2)],
  5: [...topicsForBook(5, 1, GRADE_5_T1), ...topicsForBook(5, 2, GRADE_5_T2)],
};

export const OFFICIAL_VIETNAMESE_CATALOG_TOTAL = Object.values(OFFICIAL_VIETNAMESE_CURRICULUM_BY_GRADE)
  .reduce((total, lessons) => total + lessons.length, 0);
