import { CurriculumTopic } from '../types.ts';
import { getEnglishSupplementContent } from './englishSupplementContent.ts';

type OfficialEnglishBook = {
  grade: number;
  semester: 1 | 2;
  sourceBook: string;
  readerUrl: string;
  units: ReadonlyArray<readonly [title: string, startPage: number]>;
};

const BOOKS: OfficialEnglishBook[] = [
  {
    grade: 1,
    semester: 1,
    sourceBook: 'Tiếng Anh 1 — Global Success',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-anh-1-global-success.4914061146',
    units: [
      ['In the school playground', 6], ['In the dining room', 9], ['At the street market', 14], ['In the bedroom', 17],
      ['At the fish and chip shop', 23], ['In the classroom', 26], ['In the garden', 31], ['In the park', 34],
    ],
  },
  {
    grade: 1,
    semester: 2,
    sourceBook: 'Tiếng Anh 1 — Global Success',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-anh-1-global-success.4914061146',
    units: [
      ['In the shop', 40], ['At the zoo', 43], ['At the bus stop', 48], ['At the lake', 51],
      ['In the school canteen', 57], ['In the toy shop', 60], ['At the football match', 65], ['At home', 68],
    ],
  },
  {
    grade: 2,
    semester: 1,
    sourceBook: 'Tiếng Anh 2 — Global Success',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/tieng-anh-2-global-success.4914084740',
    units: [
      ['At my birthday party', 6], ['In the backyard', 9], ['At the seaside', 14], ['In the countryside', 17],
      ['In the classroom', 23], ['On the farm', 26], ['In the kitchen', 31], ['In the village', 34],
    ],
  },
  {
    grade: 2,
    semester: 2,
    sourceBook: 'Tiếng Anh 2 — Global Success',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/tieng-anh-2-global-success.4914084740',
    units: [
      ['In the grocery store', 40], ['At the zoo', 43], ['In the playground', 48], ['At the café', 51],
      ['In the maths class', 57], ['At home', 60], ['In the clothes shop', 65], ['At the campsite', 68],
    ],
  },
  {
    grade: 3,
    semester: 1,
    sourceBook: 'Tiếng Anh 3 Tập một — Global Success',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/shs-tieng-anh-3-tap-1-global-success.4537411435',
    units: [
      ['Hello', 10], ['Our names', 16], ['Our friends', 22], ['Our bodies', 28], ['My hobbies', 34],
      ['Our school', 44], ['Classroom instructions', 50], ['My school things', 56], ['Colours', 62], ['Break time activities', 68],
    ],
  },
  {
    grade: 3,
    semester: 2,
    sourceBook: 'Tiếng Anh 3 Tập hai — Global Success',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-anh-3-tap-2-global-success.4914101275',
    units: [
      ['My family', 6], ['Jobs', 12], ['My house', 18], ['My bedroom', 24], ['At the dining table', 30],
      ['My pets', 40], ['Our toys', 46], ['Playing and doing', 52], ['Outdoor activities', 58], ['At the zoo', 64],
    ],
  },
  {
    grade: 4,
    semester: 1,
    sourceBook: 'Tiếng Anh 4 Tập một — Global Success',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-anh-4-global-success-tap-mot.4914111660',
    units: [
      ['My friends', 10], ['Time and daily routines', 16], ['My week', 22], ['My birthday party', 28], ['Things we can do', 34],
      ['Our school facilities', 44], ['Our timetables', 50], ['My favourite subjects', 56], ['Our sports day', 62], ['Our summer holidays', 68],
    ],
  },
  {
    grade: 4,
    semester: 2,
    sourceBook: 'Tiếng Anh 4 Tập hai — Global Success',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-anh-4-global-success-tap-hai.4914832178',
    units: [
      ['My home', 6], ['Jobs', 12], ['Appearance', 18], ['Daily activities', 24], ['My family\'s weekends', 30],
      ['Weather', 40], ['In the city', 46], ['At the shopping centre', 52], ['The animal world', 58], ['At summer camp', 64],
    ],
  },
  {
    grade: 5,
    semester: 1,
    sourceBook: 'Tiếng Anh 5 Tập một — Global Success',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-anh-5-global-success-tap-mot.4914842460',
    units: [
      ['All about me!', 10], ['Our homes', 16], ['My foreign friends', 22], ['Our free-time activities', 28], ['My future job', 34],
      ['Our school rooms', 44], ['Our favourite school activities', 50], ['In our classroom', 56], ['Our outdoor activities', 62], ['Our school trip', 68],
    ],
  },
  {
    grade: 5,
    semester: 2,
    sourceBook: 'Tiếng Anh 5 Tập hai — Global Success',
    readerUrl: 'https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-anh-5-global-success-tap-hai.4914843136',
    units: [
      ['Family time', 6], ['Our Tet holiday', 12], ['Our special days', 18], ['Staying healthy', 24], ['Our health', 30],
      ['Seasons and the weather', 40], ['Stories for children', 46], ['Means of transport', 52], ['Places of interest', 58], ['Our summer holidays', 64],
    ],
  },
];

export const OFFICIAL_ENGLISH_BOOKS = BOOKS;

export function buildOfficialEnglishCatalog(): Record<number, CurriculumTopic[]> {
  const result: Record<number, CurriculumTopic[]> = { 1: [], 2: [], 3: [], 4: [], 5: [] };

  for (const book of BOOKS) {
    const firstLessonNumber = book.grade <= 2
      ? (book.semester === 1 ? 1 : 9)
      : (book.semester === 1 ? 1 : 11);

    book.units.forEach(([unitTitle, startPage], index) => {
      const lessonNumber = firstLessonNumber + index;
      const title = `Unit ${lessonNumber}: ${unitTitle}`;
      const lessonId = `eng-g${book.grade}-u${lessonNumber}`;
      const supplement = getEnglishSupplementContent(lessonId);
      result[book.grade].push({
        id: lessonId,
        semester: book.semester,
        lessonNumber,
        title,
        unit: `Học kỳ ${book.semester}`,
        textbookPageRef: `${book.sourceBook} — Trang ${startPage}`,
        sourcePages: [startPage],
        sourceType: 'sgk_official',
        sourceBook: `${book.sourceBook}, NXB Giáo Dục Việt Nam`,
        sourceDetail: `${title} — trang mở đầu ${startPage}`,
        provenance: {
          contentOrigin: 'system_generated',
          verificationStatus: 'reference_only',
          referenceBook: `${book.sourceBook}, NXB Giáo Dục Việt Nam`,
          referenceLessonTitle: title,
          referenceDetail: `Tên Unit và trang mở đầu đã đối chiếu book map; phần luyện tập do WonderKids biên soạn.`,
          referenceUrl: book.readerUrl,
          note: 'Không trình bày phần mô tả, bài đọc hoặc câu hỏi do ứng dụng tạo như nguyên văn SGK.',
        },
        pedagogicalObjective: `Luyện từ vựng, mẫu câu, nghe, nói, đọc và viết theo chủ đề “${unitTitle}”.`,
        description: supplement.description,
        summary: supplement.summary,
        keyPoints: supplement.keyPoints,
        mascotTip: supplement.mascotTip,
      });
    });
  }

  return result;
}
