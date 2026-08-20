import { LessonNode, SubjectInfo, GradeLevel } from '../types';

export const SUBJECTS_CONFIG: Record<string, SubjectInfo> = {
  math: {
    id: 'math',
    name: 'Toán Học',
    subtitle: 'Vườn Số Diệu Kỳ',
    description: 'Khám phá các con số, phép tính vui nhộn, hình học và bài toán tư duy logic sinh động chuẩn SGK NXB Giáo Dục Việt Nam (taphuan.nxbgd.vn).',
    color: '#10B981',
    accentColor: '#059669',
    bgColor: '#ECFDF5',
    washiColor: 'rgba(94, 190, 120, 0.45)',
    icon: '📐',
    totalLessons: 45,
    completedLessons: 12,
    badgeName: 'Hiệp Sĩ Số Học',
    mascot: 'bobo',
  },
  vietnamese: {
    id: 'vietnamese',
    name: 'Tiếng Việt',
    subtitle: 'Khu Vườn Ngôn Từ',
    description: 'Luyện đọc âm vần, ghép tiếng, chính tả và tập đọc chuẩn SGK NXB Giáo Dục Việt Nam (Kết Nối Tri Thức & Chân Trời Sáng Tạo).',
    color: '#F59E0B',
    accentColor: '#D97706',
    bgColor: '#FFFBEB',
    washiColor: 'rgba(251, 146, 60, 0.45)',
    icon: '📖',
    totalLessons: 40,
    completedLessons: 10,
    badgeName: 'Sứ Giả Văn Học',
    mascot: 'miumiu',
  },
  english: {
    id: 'english',
    name: 'Tiếng Anh',
    subtitle: 'Vịnh Đảo Đại Dương',
    description: 'Phát âm chuẩn Phonics, từ vựng theo chủ đề, game nghe chạm hình và mẫu câu giao tiếp tự tin.',
    color: '#0EA5E9',
    accentColor: '#0284C7',
    bgColor: '#F0F9FF',
    washiColor: 'rgba(96, 165, 227, 0.45)',
    icon: '🌍',
    totalLessons: 50,
    completedLessons: 15,
    badgeName: 'Nhà Du Ký Nhí',
    mascot: 'pipi',
  },
  logic: {
    id: 'logic',
    name: 'Bé Tư Duy',
    subtitle: 'Mê Cung Trí Tuệ',
    description: 'Rèn luyện trí nhớ, tìm quy luật hình ảnh, mê cung mê hoặc và các câu đố mẹo hấp dẫn.',
    color: '#8B5CF6',
    accentColor: '#7C3AED',
    bgColor: '#F5F3FF',
    washiColor: 'rgba(139, 114, 207, 0.45)',
    icon: '💡',
    totalLessons: 30,
    completedLessons: 8,
    badgeName: 'Siêu Trí Tuệ',
    mascot: 'bipbip',
  },
};

export const GRADE_SUBJECT_DESCRIPTIONS: Record<GradeLevel, Record<string, { subtitle: string; desc: string }>> = {
  1: {
    math: { subtitle: 'Tập 1 & Tập 2: Số 0-100, Cộng trừ & Đo cm', desc: 'Đếm số, so sánh >, <, =, phép cộng trừ phạm vi 10, 20, 100, khối hình và xem đồng hồ (SGK Toán 1).' },
    vietnamese: { subtitle: 'Tập 1 & Tập 2: Âm vần, Đánh vần & Chính tả', desc: 'Ghép tiếng b-e-bé, âm vần e/ê/a/o, quy tắc chính tả c/k, g/gh, ng/ngh và đọc truyện ngụ ngôn (SGK Tiếng Việt 1).' },
    english: { subtitle: 'Phonics A-Z & Colors, Numbers 1-10', desc: 'Làm quen bảng chữ cái, màu sắc, số đếm 1-10 và chào hỏi cơ bản.' },
  },
  2: {
    math: { subtitle: 'Tập 1 & Tập 2: Phép tính có nhớ & Bảng nhân 2, 5', desc: 'Cộng trừ có nhớ đến 100, bảng nhân chia 2 & 5, đơn vị dm, m, km, kg, lít, khối trụ cầu (SGK Toán 2).' },
    vietnamese: { subtitle: 'Tập 1 & Tập 2: Luyện từ & câu: Ai là gì? Ai làm gì?', desc: 'Từ chỉ sự vật, hoạt động, đặc điểm; dấu câu, viết đoạn văn ngắn kể việc tốt (SGK Tiếng Việt 2).' },
    english: { subtitle: 'Family, Body parts & Food', desc: 'Học từ vựng gia đình, bộ phận cơ thể, mẫu câu "This is / That is" và Can/Can\'t.' },
  },
  3: {
    math: { subtitle: 'Tập 1 & Tập 2: Bảng nhân chia 6-9, Chu vi & Diện tích', desc: 'Bảng nhân chia 6, 7, 8, 9; số đến 100.000, chu vi & diện tích hình chữ nhật, hình vuông (SGK Toán 3).' },
    vietnamese: { subtitle: 'Tập 1 & Tập 2: Phép So sánh, Nhân hóa & Viết thư', desc: 'Khám phá phép so sánh, nhân hóa, mở rộng vốn từ quê hương lễ hội, dấu ngoặc kép (SGK Tiếng Việt 3).' },
    english: { subtitle: 'School subjects & Telling time', desc: 'Môn học, sở thích, thì hiện tại tiếp diễn ("I am reading"), hỏi và nói giờ.' },
  },
  4: {
    math: { subtitle: 'Tập 1 & Tập 2: Phân số & Toán Tổng - Hiệu, Tổng - Tỉ', desc: '4 phép tính phân số, dấu hiệu chia hết 2, 3, 5, 9, trung bình cộng, dm², m², km² (SGK Toán 4).' },
    vietnamese: { subtitle: 'Tập 1 & Tập 2: Danh - Động - Tính từ & Trạng ngữ', desc: 'Phân loại từ loại, trạng ngữ chỉ thời gian/nơi chốn, bài văn miêu tả cây cối, con vật (SGK Tiếng Việt 4).' },
    english: { subtitle: 'Daily routines & Past simple', desc: 'Hoạt động hàng ngày, nghề nghiệp, thì quá khứ đơn, so sánh hơn ("taller than").' },
  },
  5: {
    math: { subtitle: 'Tập 1 & Tập 2: Số thập phân, % & Toán Chuyển động đều', desc: 'Cộng trừ nhân chia số thập phân, tỉ số phần trăm, diện tích hình tròn, công thức s = v × t (SGK Toán 5).' },
    vietnamese: { subtitle: 'Tập 1 & Tập 2: Từ đồng nghĩa/trái nghĩa & Câu ghép', desc: 'Đại từ, quan hệ từ hô ứng Tuy...nhưng, bài văn tả cảnh thiên nhiên và người thân (SGK Tiếng Việt 5).' },
    english: { subtitle: 'Travel, Superlatives & Future', desc: 'Chủ đề du lịch, các quốc gia, so sánh nhất ("the fastest"), tương lai với going to.' },
  },
};

export const SAMPLE_LESSONS: LessonNode[] = [
  // =========================================================================
  // ===================== TIẾNG VIỆT (CHUẨN SGK NXBGD VN) ===================
  // =========================================================================

  // ------------------- TIẾNG VIỆT LỚP 1 (TẬP 1 + TẬP 2) -------------------
  {
    id: 'tv-g1-l1',
    title: 'Bài 4: E, e — Ê, ê (Âm, Vần & Ghép Tiếng)',
    description: 'Nhận biết âm e, ê, mô hình ghép tiếng "b - e - bè", "b - ê - bê" và đọc câu ứng dụng.',
    subject: 'vietnamese',
    grade: 1,
    unit: 'Tập 1: Âm & Chữ cái Tiếng Việt',
    textbookPageRef: 'SGK Tiếng Việt 1 Tập một — Trang 16, 17',
    order: 1,
    starsEarned: 3,
    isLocked: false,
    xpReward: 100,
    starReward: 2,
    theoryContent: {
      summary: 'Làm quen với âm e, chữ e và âm ê, chữ ê. Ghép âm đầu b với âm e, ê tạo thành tiếng có nghĩa.',
      keyPoints: [
        '1. Khám phá tranh: "Bé vẽ quả lê." (e trong bé/vẽ, ê trong lê).',
        '2. Mô hình ghép: b - e $\\rightarrow$ be; b - e - sắc $\\rightarrow$ bé; b - e - huyền $\\rightarrow$ bè.',
        '3. Tiếng có âm ê: b - ê $\\rightarrow$ bê; b - ê - sắc $\\rightarrow$ bế.',
        '4. Câu ứng dụng: "Bà bế bé. Bé xem con bê."'
      ],
      mascotTip: 'MiuMiu: Chữ "ê" giống hệt chữ "e" nhưng được đội thêm chiếc nón xinh trên đầu!'
    },
    questions: [
      {
        id: 'q-tv1-1-1',
        type: 'spelling_blend',
        questionText: 'Cùng ghép tiếng theo mô hình SGK Trang 16: "b" + "e" + dấu "sắc ( / )"',
        audioText: 'Bờ - e - be - sắc - BÉ',
        instruction: 'Chạm để lắng nghe và hoàn thành mô hình ghép tiếng',
        points: 15,
        spellingData: {
          initial: 'b',
          vowel: 'e',
          tone: 'sắc ( / )',
          result: 'bé',
          pronunciation: 'bờ - e - be - sắc - BÉ'
        },
        options: [
          { id: 'a', label: 'bé 👶', sublabel: 'Em bé, bé nhỏ', isCorrect: true },
          { id: 'b', label: 'bè 🪵', sublabel: 'Cái bè gỗ' },
          { id: 'c', label: 'bê 🐮', sublabel: 'Con bê' },
        ]
      },
      {
        id: 'q-tv1-1-2',
        type: 'bubble_choice',
        questionText: 'Quan sát SGK Trang 17: Trong các từ sau, từ nào có chứa âm "ê"?',
        audioText: 'Từ nào có chứa âm ê?',
        points: 10,
        options: [
          { id: 'a', label: 'Quả lê 🍐', sublabel: 'Có âm ê', isCorrect: true },
          { id: 'b', label: 'Con ve 🪰', sublabel: 'Có âm e' },
          { id: 'c', label: 'Cái ca 🥛', sublabel: 'Có âm a' },
          { id: 'd', label: 'Lá cờ 🚩', sublabel: 'Có âm ơ' }
        ]
      },
      {
        id: 'q-tv1-1-3',
        type: 'bubble_choice',
        questionText: 'Đọc câu ứng dụng SGK Trang 17: "Bà ... bé. Bé xem con bê."',
        audioText: 'Bà bế bé hay bà bê bé?',
        points: 10,
        options: [
          { id: 'a', label: 'bế', sublabel: 'Bà bế bé', isCorrect: true },
          { id: 'b', label: 'bè', sublabel: 'Bà bè bé' },
          { id: 'c', label: 'bê', sublabel: 'Bà bê bé' },
        ]
      }
    ]
  },
  {
    id: 'tv-g1-l2',
    title: 'Bài 12: Quy tắc chính tả C/K, G/GH, NG/NGH',
    description: 'Quy tắc vàng: K, GH, NGH luôn đứng trước các âm e, ê, i.',
    subject: 'vietnamese',
    grade: 1,
    unit: 'Tập 1: Quy tắc chính tả thông thái',
    textbookPageRef: 'SGK Tiếng Việt 1 Tập một — Trang 34, 35',
    order: 2,
    starsEarned: 2,
    isLocked: false,
    xpReward: 120,
    starReward: 2,
    questions: [
      {
        id: 'q-tv1-2-1',
        type: 'bubble_choice',
        questionText: 'Chọn từ viết ĐÚNG chính tả theo SGK Trang 34:',
        audioText: 'Chọn từ viết đúng chính tả:',
        points: 10,
        options: [
          { id: 'a', label: 'cái gế 🪑' },
          { id: 'b', label: 'cái ghế 🪑', isCorrect: true },
          { id: 'c', label: 'cái gối 🛏️' },
        ]
      },
      {
        id: 'q-tv1-2-2',
        type: 'fill_blank',
        questionText: 'Điền chữ "c" hoặc "k" thích hợp vào ô trống:',
        templateText: 'Bé vẽ con [___]ua và chùm [___]hế ngọt.',
        points: 15,
        options: [
          { id: 'a', label: 'c - k', isCorrect: true },
          { id: 'b', label: 'k - c' },
        ]
      }
    ]
  },
  {
    id: 'tv-g1-l3',
    title: 'Bài 25: Vần AN, AT, ĂN, ĂT & Đọc truyện ngụ ngôn',
    description: 'Ghép vần có âm cuối n, t và đọc câu chuyện Rùa và Thỏ.',
    subject: 'vietnamese',
    grade: 1,
    unit: 'Tập 1: Vần có âm cuối n, t',
    textbookPageRef: 'SGK Tiếng Việt 1 Tập một — Trang 62, 63',
    order: 3,
    starsEarned: 0,
    isLocked: false,
    xpReward: 130,
    starReward: 2,
    questions: [
      {
        id: 'q-tv1-3-1',
        type: 'story_sequence',
        questionText: 'Xếp các bức tranh sau theo đúng thứ tự câu chuyện "Rùa và Thỏ":',
        audioText: 'Hãy xếp các bức tranh theo đúng thứ tự câu chuyện nhé!',
        points: 15,
        sequenceItems: [
          { id: 'seq-1', order: 1, text: '1. Thỏ kiêu ngạo thách Rùa chạy thi 🐰' },
          { id: 'seq-2', order: 2, text: '2. Thỏ ngủ quên dưới gốc cây râm mát 🌳' },
          { id: 'seq-3', order: 3, text: '3. Rùa kiên trì bò từng bước đến đích 🐢' },
          { id: 'seq-4', order: 4, text: '4. Rùa giành chiến thắng vẻ vang 🏆' },
        ]
      }
    ]
  },
  {
    id: 'tv-g1-l4',
    title: 'Bài 38: Vần UÔNG, UÔC & Đọc thơ Quê hương',
    description: 'Khám phá vần đôi uông, uôc trong tranh mùa lúa chín.',
    subject: 'vietnamese',
    grade: 1,
    unit: 'Tập 2: Vần đôi uông, uôc, ương, ươc',
    textbookPageRef: 'SGK Tiếng Việt 1 Tập hai — Trang 18, 19',
    order: 4,
    starsEarned: 0,
    isLocked: false,
    xpReward: 140,
    starReward: 2,
    questions: [
      {
        id: 'q-tv1-4-1',
        type: 'bubble_choice',
        questionText: 'Từ nào sau đây chứa vần "uông"?',
        audioText: 'Từ nào sau đây chứa vần uông?',
        points: 10,
        options: [
          { id: 'a', label: 'Quả chuông 🔔', isCorrect: true },
          { id: 'b', label: 'Cây cuốc ⛏️' },
          { id: 'c', label: 'Con ốc 🐚' }
        ]
      }
    ]
  },

  // ------------------- TIẾNG VIỆT LỚP 2 (TẬP 1 + TẬP 2) -------------------
  {
    id: 'tv-g2-l1',
    title: 'Bài 8: Từ chỉ sự vật, hoạt động, đặc điểm',
    description: 'Nhận diện danh xưng, cử chỉ và tính chất xung quanh em.',
    subject: 'vietnamese',
    grade: 2,
    unit: 'Tập 1: Em yêu trường lớp',
    textbookPageRef: 'SGK Tiếng Việt 2 Tập một — Trang 28, 29',
    order: 1,
    starsEarned: 0,
    isLocked: false,
    xpReward: 120,
    starReward: 2,
    questions: [
      {
        id: 'q-tv2-1-1',
        type: 'bubble_choice',
        questionText: 'Từ nào sau đây là TỪ CHỈ HOẠT ĐỘNG?',
        audioText: 'Từ nào sau đây là từ chỉ hoạt động?',
        points: 10,
        options: [
          { id: 'a', label: 'Tưới cây 🌱', isCorrect: true },
          { id: 'b', label: 'Bàn học 🪑' },
          { id: 'c', label: 'Xinh xắn 🌸' }
        ]
      }
    ]
  },
  {
    id: 'tv-g2-l2',
    title: 'Bài 14: Câu kiểu Ai là gì? Ai làm gì? Ai thế nào?',
    description: '3 mẫu câu thần kỳ để biểu đạt suy nghĩ chuẩn SGK Tiếng Việt 2.',
    subject: 'vietnamese',
    grade: 2,
    unit: 'Tập 1: Mái ấm gia đình',
    textbookPageRef: 'SGK Tiếng Việt 2 Tập một — Trang 52, 53',
    order: 2,
    starsEarned: 0,
    isLocked: false,
    xpReward: 130,
    starReward: 2,
    questions: [
      {
        id: 'q-tv2-2-1',
        type: 'bubble_choice',
        questionText: 'Câu: "Mẹ em là cô giáo dịu hiền." thuộc mẫu câu nào?',
        audioText: 'Câu Mẹ em là cô giáo dịu hiền thuộc mẫu câu nào?',
        points: 10,
        options: [
          { id: 'a', label: 'Ai là gì?', isCorrect: true },
          { id: 'b', label: 'Ai làm gì?' },
          { id: 'c', label: 'Ai thế nào?' }
        ]
      },
      {
        id: 'q-tv2-2-2',
        type: 'bubble_choice',
        questionText: 'Câu: "Đàn cá tung tăng bơi lội dưới hồ." thuộc mẫu câu nào?',
        audioText: 'Đàn cá tung tăng bơi lội thuộc mẫu câu nào?',
        points: 10,
        options: [
          { id: 'a', label: 'Ai làm gì?', isCorrect: true },
          { id: 'b', label: 'Ai là gì?' },
          { id: 'c', label: 'Ai thế nào?' }
        ]
      }
    ]
  },
  {
    id: 'tv-g2-l3',
    title: 'Bài 48: Viết đoạn văn 4-5 câu kể về một việc tốt',
    description: 'Kể lại việc em giúp đỡ bố mẹ, thầy cô hoặc bạn bè.',
    subject: 'vietnamese',
    grade: 2,
    unit: 'Tập 2: Hành tinh xanh của em',
    textbookPageRef: 'SGK Tiếng Việt 2 Tập hai — Trang 42, 43',
    order: 3,
    starsEarned: 0,
    isLocked: false,
    xpReward: 140,
    starReward: 3,
    questions: [
      {
        id: 'q-tv2-3-1',
        type: 'bubble_choice',
        questionText: 'Khi viết hết một câu hoàn chỉnh, em cần dùng dấu câu nào?',
        audioText: 'Khi viết hết một câu hoàn chỉnh, dùng dấu nào?',
        points: 10,
        options: [
          { id: 'a', label: 'Dấu chấm (.)', isCorrect: true },
          { id: 'b', label: 'Dấu phẩy (,)' },
          { id: 'c', label: 'Dấu hỏi (?)' }
        ]
      }
    ]
  },

  // ------------------- TIẾNG VIỆT LỚP 3 (TẬP 1 + TẬP 2) -------------------
  {
    id: 'tv-g3-l1',
    title: 'Bài 6: Biện pháp nghệ thuật Phép So sánh',
    description: 'Nhận biết các hình ảnh so sánh độc đáo và từ so sánh (như, là, tựa).',
    subject: 'vietnamese',
    grade: 3,
    unit: 'Tập 1: Mái nhà yêu thương',
    textbookPageRef: 'SGK Tiếng Việt 3 Tập một — Trang 22, 23',
    order: 1,
    starsEarned: 0,
    isLocked: false,
    xpReward: 150,
    starReward: 3,
    questions: [
      {
        id: 'q-tv3-1-1',
        type: 'bubble_choice',
        questionText: 'Trong câu: "Mặt trời như quả cầu lửa khổng lồ", từ so sánh là:',
        audioText: 'Từ so sánh là từ nào?',
        points: 15,
        options: [
          { id: 'a', label: 'như', isCorrect: true },
          { id: 'b', label: 'mặt trời' },
          { id: 'c', label: 'quả cầu' }
        ]
      }
    ]
  },
  {
    id: 'tv-g3-l2',
    title: 'Bài 16: Biện pháp nghệ thuật Phép Nhân hóa',
    description: 'Cách biến các đồ vật, cỏ cây thành những người bạn trò chuyện.',
    subject: 'vietnamese',
    grade: 3,
    unit: 'Tập 1: Vòng tay bạn bè',
    textbookPageRef: 'SGK Tiếng Việt 3 Tập một — Trang 50, 51',
    order: 2,
    starsEarned: 0,
    isLocked: false,
    xpReward: 160,
    starReward: 3,
    questions: [
      {
        id: 'q-tv3-2-1',
        type: 'bubble_choice',
        questionText: 'Câu nào sau đây sử dụng biện pháp NHÂN HÓA?',
        audioText: 'Câu nào sau đây dùng biện pháp nhân hóa?',
        points: 15,
        options: [
          { id: 'a', label: 'Bác Đồng Hồ chăm chỉ gõ nhịp tích tắc. ⏰', isCorrect: true },
          { id: 'b', label: 'Cái đồng hồ chạy rất đúng giờ.' },
          { id: 'c', label: 'Đồng hồ có màu xanh nước biển.' }
        ]
      }
    ]
  },
  {
    id: 'tv-g3-l3',
    title: 'Bài 40: Mở rộng vốn từ Quê hương & Lễ hội',
    description: 'Tìm hiểu các phong tục cổ truyền và tình yêu quê hương đất nước.',
    subject: 'vietnamese',
    grade: 3,
    unit: 'Tập 2: Đất nước ngàn năm',
    textbookPageRef: 'SGK Tiếng Việt 3 Tập hai — Trang 18, 19',
    order: 3,
    starsEarned: 0,
    isLocked: false,
    xpReward: 170,
    starReward: 3,
    questions: [
      {
        id: 'q-tv3-3-1',
        type: 'bubble_choice',
        questionText: 'Từ nào sau đây thuộc chủ đề "Lễ Hội Quê Hương"?',
        audioText: 'Từ nào thuộc chủ đề lễ hội?',
        points: 15,
        options: [
          { id: 'a', label: 'Đua thuyền rồng 🚣', isCorrect: true },
          { id: 'b', label: 'Máy tính bảng 📱' },
          { id: 'c', label: 'Tủ lạnh 🧊' }
        ]
      }
    ]
  },

  // ------------------- TIẾNG VIỆT LỚP 4 (TẬP 1 + TẬP 2) -------------------
  {
    id: 'tv-g4-l1',
    title: 'Bài 8: Luyện từ và câu: Danh từ (Chung & Riêng)',
    description: 'Quy tắc phân biệt và viết hoa tên người, tên địa lý Việt Nam.',
    subject: 'vietnamese',
    grade: 4,
    unit: 'Tập 1: Thế giới tuổi thơ',
    textbookPageRef: 'SGK Tiếng Việt 4 Tập một — Trang 26, 27',
    order: 1,
    starsEarned: 0,
    isLocked: false,
    xpReward: 160,
    starReward: 3,
    questions: [
      {
        id: 'q-tv4-1-1',
        type: 'bubble_choice',
        questionText: 'Từ nào sau đây là DANH TỪ RIÊNG chỉ địa danh phải viết hoa?',
        audioText: 'Từ nào là danh từ riêng chỉ địa danh?',
        points: 15,
        options: [
          { id: 'a', label: 'Hà Nội 🏙️', isCorrect: true },
          { id: 'b', label: 'dòng sông 🌊' },
          { id: 'c', label: 'ngọn núi ⛰️' }
        ]
      }
    ]
  },
  {
    id: 'tv-g4-l2',
    title: 'Bài 18: Luyện từ và câu: Động từ & Tính từ',
    description: 'Phân biệt từ chỉ hoạt động và từ chỉ màu sắc, hình dáng, tính chất.',
    subject: 'vietnamese',
    grade: 4,
    unit: 'Tập 1: Đôi cánh ước mơ',
    textbookPageRef: 'SGK Tiếng Việt 4 Tập một — Trang 54, 55',
    order: 2,
    starsEarned: 0,
    isLocked: false,
    xpReward: 170,
    starReward: 3,
    questions: [
      {
        id: 'q-tv4-2-1',
        type: 'bubble_choice',
        questionText: 'Trong câu: "Dòng sông êm đềm trôi nhẹ nhàng", từ "êm đềm" là:',
        audioText: 'Từ êm đềm là từ loại gì?',
        points: 15,
        options: [
          { id: 'a', label: 'Tính từ', isCorrect: true },
          { id: 'b', label: 'Động từ' },
          { id: 'c', label: 'Danh từ' }
        ]
      }
    ]
  },
  {
    id: 'tv-g4-l3',
    title: 'Bài 58: Trạng ngữ chỉ Nơi chốn & Thời gian',
    description: 'Bổ sung thông tin hoàn cảnh cho câu văn sinh động chuẩn SGK Tiếng Việt 4.',
    subject: 'vietnamese',
    grade: 4,
    unit: 'Tập 2: Khám phá thế giới',
    textbookPageRef: 'SGK Tiếng Việt 4 Tập hai — Trang 44, 45',
    order: 3,
    starsEarned: 0,
    isLocked: false,
    xpReward: 180,
    starReward: 3,
    questions: [
      {
        id: 'q-tv4-3-1',
        type: 'bubble_choice',
        questionText: 'Trong câu: "Trên cành cây cao, đàn chim hót líu lo.", bộ phận "Trên cành cây cao" là:',
        audioText: 'Trên cành cây cao là trạng ngữ gì?',
        points: 15,
        options: [
          { id: 'a', label: 'Trạng ngữ chỉ nơi chốn', isCorrect: true },
          { id: 'b', label: 'Trạng ngữ chỉ thời gian' },
          { id: 'c', label: 'Chủ ngữ' }
        ]
      }
    ]
  },

  // ------------------- TIẾNG VIỆT LỚP 5 (TẬP 1 + TẬP 2) -------------------
  {
    id: 'tv-g5-l1',
    title: 'Bài 2: Từ đồng nghĩa & Phân biệt sắc thái nghĩa',
    description: 'Vốn từ chỉ màu xanh, màu đỏ, tình yêu thương và sự dũng cảm.',
    subject: 'vietnamese',
    grade: 5,
    unit: 'Tập 1: Việt Nam quê hương em',
    textbookPageRef: 'SGK Tiếng Việt 5 Tập một — Trang 12, 13',
    order: 1,
    starsEarned: 0,
    isLocked: false,
    xpReward: 180,
    starReward: 3,
    questions: [
      {
        id: 'q-tv5-1-1',
        type: 'bubble_choice',
        questionText: 'Từ nào sau đây ĐỒNG NGHĨA với từ "chăm chỉ"?',
        audioText: 'Từ nào đồng nghĩa với chăm chỉ?',
        points: 15,
        options: [
          { id: 'a', label: 'Cần cù 🐝', isCorrect: true },
          { id: 'b', label: 'Lười biếng 🦥' },
          { id: 'c', label: 'Thật thà 🤝' }
        ]
      }
    ]
  },
  {
    id: 'tv-g5-l2',
    title: 'Bài 28: Câu ghép & Cặp quan hệ từ hô ứng',
    description: 'Nối các vế câu biểu thị quan hệ Nguyên nhân - Kết quả, Tương phản, Điều kiện.',
    subject: 'vietnamese',
    grade: 5,
    unit: 'Tập 1: Giữ lấy màu xanh',
    textbookPageRef: 'SGK Tiếng Việt 5 Tập một — Trang 76, 77',
    order: 2,
    starsEarned: 0,
    isLocked: false,
    xpReward: 200,
    starReward: 3,
    questions: [
      {
        id: 'q-tv5-2-1',
        type: 'bubble_choice',
        questionText: 'Chọn cặp từ hô ứng thể hiện quan hệ TƯƠNG PHẢN: "... trời mưa to ... chúng em vẫn đến lớp đúng giờ."',
        audioText: 'Chọn cặp quan hệ từ tương phản:',
        points: 20,
        options: [
          { id: 'a', label: 'Tuy ... nhưng ...', isCorrect: true },
          { id: 'b', label: 'Vì ... nên ...' },
          { id: 'c', label: 'Nhờ ... mà ...' }
        ]
      }
    ]
  },
  {
    id: 'tv-g5-l3',
    title: 'Bài 42: Bài văn miêu tả cảnh thiên nhiên bốn mùa',
    description: 'Cấu trúc 3 phần (Mở - Thân - Kết) và nghệ thuật chọn lọc chi tiết tiêu biểu.',
    subject: 'vietnamese',
    grade: 5,
    unit: 'Tập 2: Vẻ đẹp muôn màu',
    textbookPageRef: 'SGK Tiếng Việt 5 Tập hai — Trang 16, 17',
    order: 3,
    starsEarned: 0,
    isLocked: false,
    xpReward: 210,
    starReward: 3,
    questions: [
      {
        id: 'q-tv5-3-1',
        type: 'bubble_choice',
        questionText: 'Phần nào trong bài văn miêu tả cảnh có nhiệm vụ giới thiệu bao quát về cảnh định tả?',
        audioText: 'Phần nào giới thiệu bao quát cảnh định tả?',
        points: 15,
        options: [
          { id: 'a', label: 'Mở bài', isCorrect: true },
          { id: 'b', label: 'Thân bài' },
          { id: 'c', label: 'Kết bài' }
        ]
      }
    ]
  },

  // =========================================================================
  // ===================== TOÁN HỌC (CHUẨN SGK NXBGD VN) =====================
  // =========================================================================

  // ------------------- TOÁN LỚP 1 (TẬP 1 + TẬP 2) -------------------
  {
    id: 'math-g1-l1',
    title: 'Bài 1: Các số 0 đến 10 & So sánh số',
    description: 'Cùng Cú BoBo đếm số lượng quả táo, ngón tay và so sánh số lớn hơn, bé hơn.',
    subject: 'math',
    grade: 1,
    unit: 'Tập 1: Các số từ 0 đến 10',
    textbookPageRef: 'SGK Toán 1 Tập một — Trang 6, 7, 8',
    order: 1,
    starsEarned: 3,
    isLocked: false,
    xpReward: 100,
    starReward: 2,
    questions: [
      {
        id: 'q-m1-1-1',
        type: 'bubble_choice',
        questionText: 'Có bao nhiêu chú vịt con đang bơi trong hồ? (SGK Toán 1 Trang 7)',
        audioText: 'Có bao nhiêu chú vịt con đang bơi trong hồ?',
        image: '🦆🦆🦆🦆🦆',
        points: 10,
        options: [
          { id: 'a', label: '4 chú vịt' },
          { id: 'b', label: '5 chú vịt', isCorrect: true },
          { id: 'c', label: '6 chú vịt' },
        ]
      },
      {
        id: 'q-m1-1-2',
        type: 'bubble_choice',
        questionText: 'Chọn dấu thích hợp điền vào chỗ chấm: 7 ... 4',
        audioText: 'Bảy lớn hơn bốn hay bé hơn bốn?',
        points: 10,
        options: [
          { id: 'a', label: '>', sublabel: 'Lớn hơn', isCorrect: true },
          { id: 'b', label: '<', sublabel: 'Bé hơn' },
          { id: 'c', label: '=', sublabel: 'Bằng nhau' },
        ]
      }
    ]
  },
  {
    id: 'math-g1-l2',
    title: 'Bài 6: Phép cộng và phép trừ trong phạm vi 10',
    description: 'Mô hình gộp thêm và bớt đi chuẩn SGK Toán 1.',
    subject: 'math',
    grade: 1,
    unit: 'Tập 1: Phép cộng trừ cơ bản',
    textbookPageRef: 'SGK Toán 1 Tập một — Trang 38, 39',
    order: 2,
    starsEarned: 2,
    isLocked: false,
    xpReward: 120,
    starReward: 2,
    questions: [
      {
        id: 'q-m1-2-1',
        type: 'keypad',
        questionText: 'Tính nhẩm nhanh: 6 + 4 = ?',
        audioText: 'Sáu cộng bốn bằng bao nhiêu?',
        points: 10,
        correctAnswer: '10'
      },
      {
        id: 'q-m1-2-2',
        type: 'keypad',
        questionText: 'Tính nhẩm: 9 - 5 = ?',
        audioText: 'Chín trừ năm bằng bao nhiêu?',
        points: 10,
        correctAnswer: '4'
      }
    ]
  },
  {
    id: 'math-g1-l3',
    title: 'Bài 15: Khối Lập Phương & Khối Hộp Chữ Nhật',
    description: 'Nhận biết các hình khối 3D quen thuộc trong đời sống.',
    subject: 'math',
    grade: 1,
    unit: 'Tập 1: Làm quen với hình khối',
    textbookPageRef: 'SGK Toán 1 Tập một — Trang 70, 71',
    order: 3,
    starsEarned: 0,
    isLocked: false,
    xpReward: 130,
    starReward: 2,
    questions: [
      {
        id: 'q-m1-3-1',
        type: 'bubble_choice',
        questionText: 'Con xúc xắc 🎲 có dạng hình khối gì?',
        audioText: 'Con xúc xắc có dạng hình khối gì?',
        points: 10,
        options: [
          { id: 'a', label: 'Khối lập phương 🧊', isCorrect: true },
          { id: 'b', label: 'Khối hộp chữ nhật 📦' },
          { id: 'c', label: 'Hình tròn ⭕' }
        ]
      }
    ]
  },
  {
    id: 'math-g1-l4',
    title: 'Bài 28: Đơn vị Xăng-ti-mét (cm) & Xem Đồng Hồ',
    description: 'Học cách dùng thước kẻ đo độ dài và xem giờ đúng.',
    subject: 'math',
    grade: 1,
    unit: 'Tập 2: Đo lường và thời gian',
    textbookPageRef: 'SGK Toán 1 Tập hai — Trang 44, 45',
    order: 4,
    starsEarned: 0,
    isLocked: false,
    xpReward: 140,
    starReward: 2,
    questions: [
      {
        id: 'q-m1-4-1',
        type: 'bubble_choice',
        questionText: 'Khi kim ngắn chỉ số 8 và kim dài chỉ số 12, đồng hồ chỉ mấy giờ?',
        audioText: 'Đồng hồ chỉ mấy giờ?',
        points: 10,
        options: [
          { id: 'a', label: '8 giờ đúng 🕗', isCorrect: true },
          { id: 'b', label: '12 giờ đúng 🕛' },
          { id: 'c', label: '6 giờ đúng 🕕' }
        ]
      }
    ]
  },

  // ------------------- TOÁN LỚP 2 (TẬP 1 + TẬP 2) -------------------
  {
    id: 'math-g2-l1',
    title: 'Bài 7: Phép cộng có nhớ trong phạm vi 20 & 100',
    description: 'Quy tắc tách số cộng tròn chục siêu nhanh chuẩn SGK Toán 2.',
    subject: 'math',
    grade: 2,
    unit: 'Tập 1: Phép cộng có nhớ',
    textbookPageRef: 'SGK Toán 2 Tập một — Trang 26, 27',
    order: 1,
    starsEarned: 0,
    isLocked: false,
    xpReward: 130,
    starReward: 2,
    questions: [
      {
        id: 'q-m2-1-1',
        type: 'keypad',
        questionText: 'Tính: 9 + 5 = ?',
        audioText: 'Chín cộng năm bằng bao nhiêu?',
        points: 10,
        correctAnswer: '14'
      }
    ]
  },
  {
    id: 'math-g2-l2',
    title: 'Bài 38: Bảng nhân 2 và Bảng nhân 5',
    description: 'Thám hiểm vườn quả nhân đôi và nhân năm kỳ thú.',
    subject: 'math',
    grade: 2,
    unit: 'Tập 2: Phép nhân diệu kỳ',
    textbookPageRef: 'SGK Toán 2 Tập hai — Trang 12, 13',
    order: 2,
    starsEarned: 0,
    isLocked: false,
    xpReward: 140,
    starReward: 3,
    questions: [
      {
        id: 'q-m2-2-1',
        type: 'keypad',
        questionText: 'Mỗi bạn có 2 chiếc bánh 🧁, 6 bạn có tất cả bao nhiêu chiếc bánh? (2 x 6 = ?)',
        audioText: 'Hai nhân sáu bằng bao nhiêu?',
        points: 10,
        correctAnswer: '12'
      },
      {
        id: 'q-m2-2-2',
        type: 'bubble_choice',
        questionText: 'Tính: 5 x 8 = ?',
        audioText: 'Năm nhân tám bằng bao nhiêu?',
        points: 10,
        options: [
          { id: 'a', label: '40', isCorrect: true },
          { id: 'b', label: '35' },
          { id: 'c', label: '45' }
        ]
      }
    ]
  },
  {
    id: 'math-g2-l3',
    title: 'Bài 45: Bảng chia 2 và Bảng chia 5',
    description: 'Chia đều số kẹo và đồ chơi cho các bạn nhỏ.',
    subject: 'math',
    grade: 2,
    unit: 'Tập 2: Phép chia công bằng',
    textbookPageRef: 'SGK Toán 2 Tập hai — Trang 36, 37',
    order: 3,
    starsEarned: 0,
    isLocked: false,
    xpReward: 150,
    starReward: 3,
    questions: [
      {
        id: 'q-m2-3-1',
        type: 'keypad',
        questionText: 'Có 15 quả cam 🍊 chia đều cho 5 bạn. Mỗi bạn được mấy quả cam? (15 : 5 = ?)',
        audioText: 'Mười lăm chia năm bằng bao nhiêu?',
        points: 10,
        correctAnswer: '3'
      }
    ]
  },

  // ------------------- TOÁN LỚP 3 (TẬP 1 + TẬP 2) -------------------
  {
    id: 'math-g3-l1',
    title: 'Bài 5: Bảng nhân 7, 8, 9 & Tính nhẩm nhanh',
    description: 'Chinh phục toàn bộ các bảng cửu chương chuẩn SGK Toán 3.',
    subject: 'math',
    grade: 3,
    unit: 'Tập 1: Bảng nhân nâng cao',
    textbookPageRef: 'SGK Toán 3 Tập một — Trang 18, 19',
    order: 1,
    starsEarned: 0,
    isLocked: false,
    xpReward: 150,
    starReward: 3,
    questions: [
      {
        id: 'q-m3-1-1',
        type: 'keypad',
        questionText: 'Tính: 7 x 8 = ?',
        audioText: 'Bảy nhân tám bằng bao nhiêu?',
        points: 10,
        correctAnswer: '56'
      },
      {
        id: 'q-m3-1-2',
        type: 'keypad',
        questionText: 'Tính: 9 x 6 = ?',
        audioText: 'Chín nhân sáu bằng bao nhiêu?',
        points: 10,
        correctAnswer: '54'
      }
    ]
  },
  {
    id: 'math-g3-l2',
    title: 'Bài 52: Chu vi & Diện tích Hình chữ nhật, Hình vuông',
    description: 'Công thức vàng tính chu vi và diện tích các hình học cơ bản.',
    subject: 'math',
    grade: 3,
    unit: 'Tập 2: Hình học và đo lường',
    textbookPageRef: 'SGK Toán 3 Tập hai — Trang 34, 35',
    order: 2,
    starsEarned: 0,
    isLocked: false,
    xpReward: 160,
    starReward: 3,
    questions: [
      {
        id: 'q-m3-2-1',
        type: 'bubble_choice',
        questionText: 'Một hình vuông có cạnh dài 5cm. Chu vi của hình vuông đó là:',
        audioText: 'Một hình vuông có cạnh 5cm, chu vi là bao nhiêu?',
        points: 15,
        options: [
          { id: 'a', label: '20 cm (5 x 4)', isCorrect: true },
          { id: 'b', label: '25 cm' },
          { id: 'c', label: '15 cm' }
        ]
      },
      {
        id: 'q-m3-2-2',
        type: 'keypad',
        questionText: 'Hình chữ nhật có chiều dài 8cm, chiều rộng 4cm. Diện tích là bao nhiêu cm²? (8 x 4 = ?)',
        audioText: 'Tám nhân bốn bằng bao nhiêu?',
        points: 15,
        correctAnswer: '32'
      }
    ]
  },
  {
    id: 'math-g3-l3',
    title: 'Bài 60: Giải bài toán bằng hai bước tính',
    description: 'Các bài toán thực tế có lời văn cần thực hiện 2 phép tính liên tiếp.',
    subject: 'math',
    grade: 3,
    unit: 'Tập 2: Bài toán thực tế',
    textbookPageRef: 'SGK Toán 3 Tập hai — Trang 62, 63',
    order: 3,
    starsEarned: 0,
    isLocked: false,
    xpReward: 170,
    starReward: 3,
    questions: [
      {
        id: 'q-m3-3-1',
        type: 'keypad',
        questionText: 'Thùng thứ nhất có 12 lít dầu, thùng thứ hai có nhiều hơn thùng thứ nhất 4 lít. Hỏi cả hai thùng có bao nhiêu lít dầu?',
        audioText: 'Hỏi cả hai thùng có tất cả bao nhiêu lít dầu?',
        points: 20,
        correctAnswer: '28',
        hint: 'Bước 1: Thùng 2 = 12 + 4 = 16l. Bước 2: Cả 2 thùng = 12 + 16 = ?'
      }
    ]
  },

  // ------------------- TOÁN LỚP 4 (TẬP 1 + TẬP 2) -------------------
  {
    id: 'math-g4-l1',
    title: 'Bài 22: Tìm hai số khi biết Tổng và Hiệu',
    description: 'Công thức: Số lớn = (Tổng + Hiệu) : 2 ; Số bé = (Tổng - Hiệu) : 2.',
    subject: 'math',
    grade: 4,
    unit: 'Tập 1: Các dạng toán điển hình',
    textbookPageRef: 'SGK Toán 4 Tập một — Trang 58, 59',
    order: 1,
    starsEarned: 0,
    isLocked: false,
    xpReward: 170,
    starReward: 3,
    questions: [
      {
        id: 'q-m4-1-1',
        type: 'bubble_choice',
        questionText: 'Tìm hai số biết Tổng là 10 và Hiệu là 2. Hai số đó là:',
        audioText: 'Tìm hai số biết tổng là mười và hiệu là hai:',
        points: 20,
        options: [
          { id: 'a', label: 'Số lớn: 6, Số bé: 4', isCorrect: true },
          { id: 'b', label: 'Số lớn: 7, Số bé: 3' },
          { id: 'c', label: 'Số lớn: 8, Số bé: 2' }
        ]
      }
    ]
  },
  {
    id: 'math-g4-l2',
    title: 'Bài 31: Dấu hiệu chia hết cho 2, 3, 5, 9',
    description: 'Mẹo nhận biết số chia hết chỉ trong 1 giây chuẩn SGK Toán 4.',
    subject: 'math',
    grade: 4,
    unit: 'Tập 1: Dấu hiệu chia hết',
    textbookPageRef: 'SGK Toán 4 Tập một — Trang 84, 85',
    order: 2,
    starsEarned: 0,
    isLocked: false,
    xpReward: 180,
    starReward: 3,
    questions: [
      {
        id: 'q-m4-2-1',
        type: 'bubble_choice',
        questionText: 'Trong các số sau, số nào vừa chia hết cho 2, vừa chia hết cho 5?',
        audioText: 'Số nào vừa chia hết cho 2 vừa chia hết cho 5?',
        points: 15,
        options: [
          { id: 'a', label: '150 (Tận cùng là 0)', isCorrect: true },
          { id: 'b', label: '125' },
          { id: 'c', label: '142' }
        ]
      }
    ]
  },
  {
    id: 'math-g4-l3',
    title: 'Bài 53: Phân số & Phép cộng trừ phân số',
    description: 'Khái niệm tử số, mẫu số và cộng trừ phân số cùng mẫu, khác mẫu.',
    subject: 'math',
    grade: 4,
    unit: 'Tập 2: Thế giới phân số',
    textbookPageRef: 'SGK Toán 4 Tập hai — Trang 10, 11',
    order: 3,
    starsEarned: 0,
    isLocked: false,
    xpReward: 190,
    starReward: 3,
    questions: [
      {
        id: 'q-m4-3-1',
        type: 'bubble_choice',
        questionText: 'Tính: 3/7 + 2/7 = ?',
        audioText: 'Ba phần bảy cộng hai phần bảy bằng bao nhiêu?',
        points: 15,
        options: [
          { id: 'a', label: '5/7', isCorrect: true },
          { id: 'b', label: '5/14' },
          { id: 'c', label: '1/7' }
        ]
      }
    ]
  },

  // ------------------- TOÁN LỚP 5 (TẬP 1 + TẬP 2) -------------------
  {
    id: 'math-g5-l1',
    title: 'Bài 24: Khái niệm & Phép tính Số Thập Phân',
    description: 'Cộng, trừ, nhân, chia số thập phân chuẩn xác từng hàng.',
    subject: 'math',
    grade: 5,
    unit: 'Tập 1: Số thập phân',
    textbookPageRef: 'SGK Toán 5 Tập một — Trang 50, 51',
    order: 1,
    starsEarned: 0,
    isLocked: false,
    xpReward: 190,
    starReward: 3,
    questions: [
      {
        id: 'q-m5-1-1',
        type: 'keypad',
        questionText: 'Tính: 12.5 + 7.5 = ?',
        audioText: 'Mười hai phẩy năm cộng bảy phẩy năm bằng bao nhiêu?',
        points: 15,
        correctAnswer: '20'
      }
    ]
  },
  {
    id: 'math-g5-l2',
    title: 'Bài 45: Tỉ số phần trăm & Ứng dụng thực tế',
    description: 'Tính phần trăm giảm giá mua sắm, lãi suất và biểu đồ hình quạt tròn.',
    subject: 'math',
    grade: 5,
    unit: 'Tập 1: Tỉ số phần trăm',
    textbookPageRef: 'SGK Toán 5 Tập một — Trang 98, 99',
    order: 2,
    starsEarned: 0,
    isLocked: false,
    xpReward: 200,
    starReward: 3,
    questions: [
      {
        id: 'q-m5-2-1',
        type: 'bubble_choice',
        questionText: 'Một lớp học có 40 học sinh, trong đó có 20 bạn nữ. Tỉ số phần trăm của số bạn nữ là:',
        audioText: 'Tỉ số phần trăm bạn nữ là bao nhiêu?',
        points: 20,
        options: [
          { id: 'a', label: '50% (20 : 40 x 100)', isCorrect: true },
          { id: 'b', label: '20%' },
          { id: 'c', label: '40%' }
        ]
      }
    ]
  },
  {
    id: 'math-g5-l3',
    title: 'Bài 72: Toán Chuyển Động Đều: s = v x t',
    description: 'Công thức tính quãng đường, vận tốc, thời gian và chuyển động ngược chiều.',
    subject: 'math',
    grade: 5,
    unit: 'Tập 2: Chuyển động đều',
    textbookPageRef: 'SGK Toán 5 Tập hai — Trang 52, 53',
    order: 3,
    starsEarned: 0,
    isLocked: false,
    xpReward: 220,
    starReward: 3,
    questions: [
      {
        id: 'q-m5-3-1',
        type: 'bubble_choice',
        questionText: 'Một người đi xe máy với vận tốc 40 km/giờ trong 2.5 giờ. Quãng đường đi được là:',
        audioText: 'Quãng đường người đó đi được là bao nhiêu?',
        points: 20,
        options: [
          { id: 'a', label: '100 km (40 x 2.5)', isCorrect: true },
          { id: 'b', label: '80 km' },
          { id: 'c', label: '90 km' }
        ]
      }
    ]
  },

  // =========================================================================
  // ===================== TIẾNG ANH (CAMBRIDGE PRE-A1 -> A1) =================
  // =========================================================================
  {
    id: 'eng-g1-l1',
    title: 'Unit 1: Colors & Magic Animals',
    description: 'Luyện nghe phát âm chuẩn Phonics và chạm màu sắc rực rỡ.',
    subject: 'english',
    grade: 1,
    unit: 'Unit 1: Colors around us',
    order: 1,
    starsEarned: 3,
    isLocked: false,
    xpReward: 100,
    starReward: 2,
    questions: [
      {
        id: 'q-en1-1',
        type: 'audio_listen',
        questionText: 'Listen and choose the correct color:',
        audioText: 'Yellow',
        points: 10,
        options: [
          { id: 'a', label: '🔴 Red' },
          { id: 'b', label: '🟡 Yellow', isCorrect: true },
          { id: 'c', label: '🔵 Blue' },
        ]
      }
    ]
  },
  {
    id: 'eng-g2-l1',
    title: 'Unit 2: Family & Numbers to 20',
    description: 'Giới thiệu về người thân và số đếm trong gia đình.',
    subject: 'english',
    grade: 2,
    unit: 'Unit 2: Happy family',
    order: 1,
    starsEarned: 0,
    isLocked: false,
    xpReward: 120,
    starReward: 2,
    questions: [
      {
        id: 'q-en2-1',
        type: 'bubble_choice',
        questionText: '"This is my father." — Từ "father" nghĩa là gì?',
        audioText: 'This is my father.',
        points: 10,
        options: [
          { id: 'a', label: 'Bố 👨', isCorrect: true },
          { id: 'b', label: 'Mẹ 👩' },
          { id: 'c', label: 'Chị gái 👧' }
        ]
      }
    ]
  },
  {
    id: 'eng-g3-l1',
    title: 'Unit 3: School Subjects & Present Continuous',
    description: 'Tên các môn học và thì hiện tại tiếp diễn ("I am reading").',
    subject: 'english',
    grade: 3,
    unit: 'Unit 3: My favourite subjects',
    order: 1,
    starsEarned: 0,
    isLocked: false,
    xpReward: 150,
    starReward: 3,
    questions: [
      {
        id: 'q-en3-1',
        type: 'bubble_choice',
        questionText: 'What is she doing? — She ... reading a book.',
        audioText: 'She is reading a book.',
        points: 15,
        options: [
          { id: 'a', label: 'is', isCorrect: true },
          { id: 'b', label: 'are' },
          { id: 'c', label: 'am' }
        ]
      }
    ]
  },
  {
    id: 'eng-g4-l1',
    title: 'Unit 4: Daily Routines & Past Simple',
    description: 'Hoạt động hàng ngày và thì quá khứ đơn ("Where were you yesterday?").',
    subject: 'english',
    grade: 4,
    unit: 'Unit 4: A busy day',
    order: 1,
    starsEarned: 0,
    isLocked: false,
    xpReward: 170,
    starReward: 3,
    questions: [
      {
        id: 'q-en4-1',
        type: 'bubble_choice',
        questionText: 'Where were you yesterday? — I ... at the zoo.',
        audioText: 'Where were you yesterday? I was at the zoo.',
        points: 15,
        options: [
          { id: 'a', label: 'was', isCorrect: true },
          { id: 'b', label: 'were' },
          { id: 'c', label: 'is' }
        ]
      }
    ]
  },
  {
    id: 'eng-g5-l1',
    title: 'Unit 5: Travel & Superlatives',
    description: 'Chủ đề du lịch thế giới và so sánh nhất ("the fastest animal").',
    subject: 'english',
    grade: 5,
    unit: 'Unit 5: Exploring our world',
    order: 1,
    starsEarned: 0,
    isLocked: false,
    xpReward: 200,
    starReward: 3,
    questions: [
      {
        id: 'q-en5-1',
        type: 'bubble_choice',
        questionText: 'The blue whale is ... animal in the world.',
        audioText: 'The blue whale is the biggest animal in the world.',
        points: 20,
        options: [
          { id: 'a', label: 'the biggest 🐋', isCorrect: true },
          { id: 'b', label: 'bigger' },
          { id: 'c', label: 'big' }
        ]
      }
    ]
  }
];
