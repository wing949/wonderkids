import type { Mascot, DailyQuest, Badge, StarShopItem, ParentReport } from '../types/index.ts';

export const MASCOTS: Record<string, Mascot> = {
  bobo: {
    id: 'bobo',
    name: 'Cú BoBo',
    title: 'Thần Toán Học',
    description: 'Thông minh, thích tính nhẩm nhanh và tìm ra mẹo giải đố siêu đỉnh!',
    avatar: '🦉',
    color: '#10B981',
    badge: 'Kính Tri Thức',
    subject: 'math',
    quotes: {
      greeting: 'Chào bạn nhỏ! Hôm nay chúng mình cùng chinh phục những con số kỳ diệu nhé!',
      cheer: 'Cố lên nào, bạn đang làm rất cừ đấy!',
      win: 'Tuyệt vời ông mặt trời! Bạn đã làm đúng hoàn hảo!',
      tryAgain: 'Không sao đâu, thử lại một lần nữa là được ngay mà!',
      rest: 'Bạn học chăm chỉ quá, nhớ chớp mắt và uống nước nghen!',
    }
  },
  miumiu: {
    id: 'miumiu',
    name: 'Cáo MiuMiu',
    title: 'Sứ Giả Tiếng Việt',
    description: 'Yêu đọc thơ, thích kể chuyện cổ tích và dạy chính tả siêu vui nhộn!',
    avatar: '🦊',
    color: '#F59E0B',
    badge: 'Bút Lông Vàng',
    subject: 'vietnamese',
    quotes: {
      greeting: 'Xin chào! Cùng MiuMiu mở ra những trang sách kỳ diệu và câu đố chữ nhé!',
      cheer: 'Chữ của bạn đẹp và đọc trôi chảy lắm!',
      win: 'Hoan hô! Bạn đúng là nhà thông thái ngôn từ!',
      tryAgain: 'Hãy đọc kỹ lại một chút nhé, MiuMiu tin bạn làm được!',
      rest: 'Hãy vươn vai một cái thật sảng khoái nào bạn ơi!',
    }
  },
  pipi: {
    id: 'pipi',
    name: 'Cá Heo PiPi',
    title: 'Nhà Du Ký Tiếng Anh',
    description: 'Phát âm chuẩn bản xứ, yêu ca hát và thích khám phá năm châu bốn biển!',
    avatar: '🐬',
    color: '#0EA5E9',
    badge: 'Tai Nghe Phi Hành',
    subject: 'english',
    quotes: {
      greeting: 'Hello explorer! Ready to speak English and have fun today?',
      cheer: 'Awesome! Keep it up, my friend!',
      win: 'Bingo! Perfect pronunciation and sharp mind!',
      tryAgain: 'Listen to my voice again! You can do it!',
      rest: 'High five! Take a deep breath and smile!',
    }
  },
  bipbip: {
    id: 'bipbip',
    name: 'Robot BipBip',
    title: 'Người Giữ Kho Báu',
    description: 'Chuyên đếm sao, bảo vệ chuỗi Streak và mở rương quà may mắn cho bé!',
    avatar: '🤖',
    color: '#8B5CF6',
    badge: 'Trái Tim Năng Lượng',
    subject: 'all',
    quotes: {
      greeting: 'Bip bip! Hệ thống quà tặng và streak của bạn đã sẵn sàng nạp năng lượng!',
      cheer: 'Tốc độ phản xạ của bạn đạt 100%!',
      win: 'Tích lũy thêm Sao Vàng thành công! Chuẩn bị mở rương báu nào!',
      tryAgain: 'Bip bip! Đang tính toán lại... Hãy chọn phương án khác nhé!',
      rest: 'Pin năng lượng cần sạc: hãy nghỉ ngơi 5 phút nghen!',
    }
  },
  dino: {
    id: 'dino',
    name: 'Khủng Long T-Rex',
    title: 'Dũng Sĩ Thám Hiểm',
    description: 'Dũng cảm, yêu thích thám hiểm và vượt qua mọi thử thách!',
    avatar: '🦖',
    color: '#22C55E',
    badge: 'Móng Vuốt Dũng Sĩ',
    subject: 'all',
    quotes: {
      greeting: 'Gào! Khủng Long T-Rex dũng cảm đã sẵn sàng vượt mọi thử thách cùng bạn!',
      cheer: 'Tiến lên nào! Sức mạnh tri thức của bạn là vô địch!',
      win: 'Tuyệt vời! Một chiến thắng vang dội của dũng sĩ nhí!',
      tryAgain: 'Dũng sĩ không bao giờ bỏ cuộc! Cùng thử lại một lần nữa nào!',
      rest: 'Dừng chân nghỉ ngơi, nạp năng lượng để tiếp tục hành trình nhé!',
    }
  },
  bunny: {
    id: 'bunny',
    name: 'Thỏ Con Miffy',
    title: 'Bạn Nhỏ Nhanh Nhẹn',
    description: 'Nhanh nhẹn, thông minh và cực kỳ đáng yêu!',
    avatar: '🐰',
    color: '#EC4899',
    badge: 'Tai Thỏ Thần Tốc',
    subject: 'all',
    quotes: {
      greeting: 'Nhún nhảy cùng Thỏ Miffy nào! Hôm nay chúng mình sẽ giải bài siêu nhanh!',
      cheer: 'Bạn làm nhanh và chuẩn xác quá đi thôi!',
      win: 'Yêu bạn quá! Điểm 10 xuất sắc cho bạn nhỏ chăm ngoan!',
      tryAgain: 'Cùng Thỏ Miffy đọc kỹ lại đề bài một xíu nghen!',
      rest: 'Mắt xinh nghỉ ngơi một chút rồi chúng mình học tiếp nhé!',
    }
  },
  bear: {
    id: 'bear',
    name: 'Gấu Nâu Teddy',
    title: 'Bạn Gấu Chăm Chỉ',
    description: 'Ấm áp, kiên trì và chăm chỉ học tập mỗi ngày!',
    avatar: '🐻',
    color: '#F97316',
    badge: 'Trái Tim Ấm Áp',
    subject: 'all',
    quotes: {
      greeting: 'Chào bạn! Gấu Teddy chúc bạn có một buổi học thật vui và bổ ích!',
      cheer: 'Bạn học rất chăm chỉ, Gấu Teddy rất tự hào về bạn!',
      win: 'Hoan hô! Thêm một ngôi sao vàng rực rỡ nữa rồi nè!',
      tryAgain: 'Kiên trì là chìa khóa thành công! Cố lên bạn ơi!',
      rest: 'Uống một ly nước ấm và vươn vai cùng Gấu Teddy nhé!',
    }
  },
  lion: {
    id: 'lion',
    name: 'Sư Tử Simba',
    title: 'Thủ Lĩnh Tri Thức',
    description: 'Tự tin, kiêu hãnh và luôn dẫn đầu mọi bảng vàng!',
    avatar: '🦁',
    color: '#D97706',
    badge: 'Vương Miện Thủ Lĩnh',
    subject: 'all',
    quotes: {
      greeting: 'Chào bạn nhỏ! Hãy cùng Sư Tử Simba dẫn đầu mọi bảng xếp hạng hôm nay!',
      cheer: 'Phong độ đỉnh cao của một thủ lĩnh thực thụ!',
      win: 'Chiến thắng oanh liệt! Bạn quá xuất sắc!',
      tryAgain: 'Bản lĩnh thủ lĩnh là không bao giờ chùn bước!',
      rest: 'Thủ lĩnh nghỉ ngơi một lát để tinh thần luôn sắc bén nhé!',
    }
  },
  cat: {
    id: 'cat',
    name: 'Mèo Kitty',
    title: 'Mèo Con Đáng Yêu',
    description: 'Dịu dàng, khéo tay và yêu thích các câu đố vui!',
    avatar: '🐱',
    color: '#F43F5E',
    badge: 'Chuông Vàng May Mắn',
    subject: 'all',
    quotes: {
      greeting: 'Meo meo! Mèo Kitty rất vui được đồng hành cùng bạn học tập hôm nay!',
      cheer: 'Khéo léo và thông minh lắm, tiếp tục phát huy nha!',
      win: 'Xinh xắn và giỏi giang! Thưởng cho bạn ngàn lời khen!',
      tryAgain: 'Meo~ Không sao đâu, thử lại một lần nữa là trúng ngay!',
      rest: 'Chớp mắt và tập thể dục nhẹ nhàng cùng Kitty nhé!',
    }
  },
  puppy: {
    id: 'puppy',
    name: 'Cún Corgi',
    title: 'Bạn Cún Vui Tươi',
    description: 'Trung thành, hoạt bát và luôn mang lại tiếng cười!',
    avatar: '🐶',
    color: '#EAB308',
    badge: 'Vòng Cổ May Mắn',
    subject: 'all',
    quotes: {
      greeting: 'Gâu gâu! Hôm nay chúng mình sẽ có một ngày học siêu vui và ngập tràn năng lượng!',
      cheer: 'Tuyệt đỉnh! Đuôi Corgi đang vẫy mừng bạn nè!',
      win: 'Đỉnh nóc kịch trần! Bạn làm bài chuẩn không cần chỉnh!',
      tryAgain: 'Cùng đánh hơi tìm ra đáp án đúng nào bạn ơi!',
      rest: 'Chạy nhảy một chút rồi mình cùng quay lại học nghen!',
    }
  },
  panda: {
    id: 'panda',
    name: 'Gấu Trúc Panda',
    title: 'Nhà Hiền Triết',
    description: 'Bình tĩnh, sâu sắc và kiên nhẫn giải quyết bài khó!',
    avatar: '🐼',
    color: '#64748B',
    badge: 'Lá Trúc Thông Thái',
    subject: 'all',
    quotes: {
      greeting: 'Bình tĩnh, tự tin và tập trung — Panda sẽ cùng bạn chinh phục mọi bài học!',
      cheer: 'Tư duy rất sâu sắc và mạch lạc!',
      win: 'Trí tuệ tuyệt vời! Kết quả hoàn hảo không tì vết!',
      tryAgain: 'Hít một hơi thật sâu và suy nghĩ chậm rãi lại nhé!',
      rest: 'Thư giãn tâm trí 5 phút cùng rừng trúc xanh mát!',
    }
  },
  unicorn: {
    id: 'unicorn',
    name: 'Kỳ Lân Cầu Vồng',
    title: 'Phép Màu Sáng Tạo',
    description: 'Phép màu trí tuệ, rực rỡ sắc màu và giàu trí tưởng tượng!',
    avatar: '🦄',
    color: '#8B5CF6',
    badge: 'Sừng Phép Màu',
    subject: 'all',
    quotes: {
      greeting: 'Phép màu tri thức đã sẵn sàng! Cùng Kỳ Lân mở ra thế giới sắc màu nhé!',
      cheer: 'Trí tưởng tượng và sự sáng tạo của bạn thật tuyệt vời!',
      win: 'Phép thuật kỳ diệu! Bạn đã giải đố thành công rực rỡ!',
      tryAgain: 'Mỗi lần thử lại là một tia sáng học hỏi mới!',
      rest: 'Ngắm nhìn cầu vồng và nạp lại năng lượng phép màu nghen!',
    }
  },
  penguin: {
    id: 'penguin',
    name: 'Cánh Cụt Nhỏ',
    title: 'Nhà Thám Hiểm Băng',
    description: 'Bền bỉ, can đảm và thích trượt băng vượt thử thách!',
    avatar: '🐧',
    color: '#0284C7',
    badge: 'Bông Tuyết Tri Thức',
    subject: 'all',
    quotes: {
      greeting: 'Chào bạn thám hiểm! Cánh Cụt sẽ cùng bạn trượt băng qua mọi thử thách!',
      cheer: 'Vững vàng và kiên định, bạn làm tốt lắm!',
      win: 'Chạm đỉnh núi băng thành công! Bạn siêu thật đấy!',
      tryAgain: 'Trượt ngã thì đứng dậy trượt tiếp, cùng Cánh Cụt thử lại nhé!',
      rest: 'Nghỉ ngơi một chút cho mát mẻ rồi học tiếp nha!',
    }
  },
  koala: {
    id: 'koala',
    name: 'Gấu Koala',
    title: 'Bạn Nhỏ Hiền Hòa',
    description: 'Hiền hậu, lắng nghe và luôn học tập với tâm thế tích cực!',
    avatar: '🐨',
    color: '#6B7280',
    badge: 'Lá Bạch Đàn Xanh',
    subject: 'all',
    quotes: {
      greeting: 'Xin chào! Hãy cùng Koala học bài một cách nhẹ nhàng và hiệu quả nhé!',
      cheer: 'Bạn lắng nghe và ghi nhớ bài học rất cẩn thận!',
      win: 'Tuyệt lắm! Từng bước nhỏ làm nên thành tích lớn!',
      tryAgain: 'Nhẹ nhàng đọc lại câu hỏi, bạn sẽ thấy ngay lời giải!',
      rest: 'Ngồi thẳng lưng, hít thở đều và mỉm cười nào!',
    }
  },
  tiger: {
    id: 'tiger',
    name: 'Hổ Con Tiger',
    title: 'Chiến Binh Bứt Phá',
    description: 'Năng động, dũng mãnh và bứt phá mọi giới hạn bài tập!',
    avatar: '🐯',
    color: '#EA580C',
    badge: 'Huy Hiệu Mãnh Hổ',
    subject: 'all',
    quotes: {
      greeting: 'Gầm vang trí tuệ! Hôm nay chúng mình sẽ bứt phá mọi giới hạn điểm số!',
      cheer: 'Nhanh nhẹn, chuẩn xác và đầy uy lực!',
      win: 'Chiến thắng vẻ vang! Bạn đúng là chiến binh nhí cừ khôi!',
      tryAgain: 'Tập trung cao độ và tung đòn quyết định nào!',
      rest: 'Nghỉ ngơi lấy lại sức mạnh rồi tiếp tục bứt phá nghen!',
    }
  },
  astronaut: {
    id: 'astronaut',
    name: 'Phi Hành Gia',
    title: 'Nhà Vũ Trụ Tương Lai',
    description: 'Khám phá vũ trụ khoa học, bay cao và vươn xa tri thức!',
    avatar: '🚀',
    color: '#9333EA',
    badge: 'Tên Lửa Siêu Thanh',
    subject: 'all',
    quotes: {
      greeting: '3... 2... 1... Phóng tên lửa! Khám phá dải ngân hà kiến thức cùng Phi Hành Gia nhé!',
      cheer: 'Tín hiệu xuất sắc từ trạm vũ trụ trí tuệ!',
      win: 'Đáp cánh hoàn hảo trên hành tinh điểm 10!',
      tryAgain: 'Điều chỉnh tọa độ và phóng lại lần nữa nào!',
      rest: 'Trạng thái không trọng lực: nghỉ ngơi thư giãn mắt nhé!',
    }
  },
  princess: {
    id: 'princess',
    name: 'Công Chúa Tri Thức',
    title: 'Ngôi Sao Chăm Ngoan',
    description: 'Xinh đẹp, lễ phép và chăm ngoan học giỏi nhất trường!',
    avatar: '👑',
    color: '#C026D3',
    badge: 'Vương Miện Lấp Lánh',
    subject: 'all',
    quotes: {
      greeting: 'Chào bạn yêu quý! Hôm nay vương quốc tri thức đón chào một ngôi sao chăm ngoan!',
      cheer: 'Bạn học rất ngoan và thông minh, vương miện tỏa sáng!',
      win: 'Xứng đáng vương miện danh dự! Chúc mừng bạn!',
      tryAgain: 'Công chúa tri thức luôn kiên trì và tự tin, thử lại nghen!',
      rest: 'Uống một ngụm nước và thưởng thức giờ nghỉ ngắn nhé!',
    }
  }
};

export const INITIAL_DAILY_QUESTS: DailyQuest[] = [
  {
    id: 'quest-1',
    title: 'Khởi động Số học',
    subtitle: 'Làm đúng 5 câu tính nhẩm Toán',
    subject: 'math',
    icon: '📐',
    progress: 3,
    maxProgress: 5,
    starReward: 1,
    xpReward: 50,
    isCompleted: false,
  },
  {
    id: 'quest-2',
    title: 'Đọc truyện cùng MiuMiu',
    subtitle: 'Hoàn thành 1 bài đọc Tiếng Việt',
    subject: 'vietnamese',
    icon: '📖',
    progress: 1,
    maxProgress: 1,
    starReward: 1,
    xpReward: 60,
    isCompleted: true,
  },
  {
    id: 'quest-3',
    title: 'Luyện tai cùng PiPi',
    subtitle: 'Nghe & chạm đúng 3 từ Tiếng Anh',
    subject: 'english',
    icon: '🌍',
    progress: 2,
    maxProgress: 3,
    starReward: 1,
    xpReward: 50,
    isCompleted: false,
  },
];

export const BADGES_LIST: Badge[] = [
  {
    id: 'badge-1',
    name: 'Tia Chớp Số Học',
    description: 'Hoàn thành 10 câu toán tính nhẩm dưới 2 phút',
    icon: '⚡',
    color: '#10B981',
    subject: 'math',
    isUnlocked: true,
    unlockedDate: 'Hôm qua',
  },
  {
    id: 'badge-2',
    name: 'Vua Chính Tả',
    description: 'Làm đúng 100% bài phân biệt quy tắc chính tả c/k, g/gh',
    icon: '🖋️',
    color: '#F59E0B',
    subject: 'vietnamese',
    isUnlocked: true,
    unlockedDate: '2 ngày trước',
  },
  {
    id: 'badge-3',
    name: 'Bản Ngữ Nhí',
    description: 'Phát âm chuẩn 10 bài Tiếng Anh liên tiếp',
    icon: '🎙️',
    color: '#0EA5E9',
    subject: 'english',
    isUnlocked: false,
  },
  {
    id: 'badge-4',
    name: 'Chiến Binh 7 Ngày',
    description: 'Duy trì chuỗi học tập liên tục suốt 7 ngày',
    icon: '🔥',
    color: '#F43F5E',
    subject: 'general',
    isUnlocked: true,
    unlockedDate: 'Hôm nay',
  },
  {
    id: 'badge-5',
    name: 'Nhà Thám Hiểm Đảo',
    description: 'Chinh phục trọn vẹn 1 hòn đảo môn học',
    icon: '🏝️',
    color: '#8B5CF6',
    subject: 'general',
    isUnlocked: false,
  },
  {
    id: 'badge-6',
    name: 'Kho Báu Vàng',
    description: 'Tích lũy được hơn 50 Ngôi Sao',
    icon: '👑',
    color: '#EAB308',
    subject: 'general',
    isUnlocked: false,
  },
];

export const STAR_SHOP_ITEMS: StarShopItem[] = [
  {
    id: 'shop-1',
    name: 'Mũ Phù Thủy Học Tập',
    category: 'avatar',
    costStars: 5,
    icon: '🧙‍♂️',
    description: 'Trang bị mũ phù thủy phép thuật cho linh thú của bạn.',
    isOwned: true,
  },
  {
    id: 'shop-2',
    name: 'Kính Phi Hành Gia 3D',
    category: 'avatar',
    costStars: 8,
    icon: '🥽',
    description: 'Kính thực tế ảo giúp thú cưng siêu ngầu!',
    isOwned: false,
  },
  {
    id: 'shop-3',
    name: 'Bình Băng Bảo Vệ Streak',
    category: 'powerup',
    costStars: 10,
    icon: '❄️',
    description: 'Bảo vệ chuỗi ngày học tập nếu bạn bận 1 ngày không vào học.',
    isOwned: true,
  },
  {
    id: 'shop-4',
    name: 'Bộ Bút Màu 24 Sắc Màu',
    category: 'real_gift',
    costStars: 35,
    icon: '🎨',
    description: 'Quà thật: Bộ bút sáp màu cao cấp gửi tặng tận nhà cho bé.',
    isOwned: false,
  },
  {
    id: 'shop-5',
    name: 'Sách Truyện Cổ Tích Song Ngữ',
    category: 'real_gift',
    costStars: 45,
    icon: '📚',
    description: 'Quà thật: Cuốn truyện tranh song ngữ Anh-Việt bìa cứng tuyệt đẹp.',
    isOwned: false,
  },
];

export const MOCK_PARENT_REPORT: ParentReport = {
  weeklyStudyMinutes: [25, 30, 20, 35, 28, 40, 30],
  days: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'],
  subjectMastery: [
    {
      subject: 'Toán Học',
      score: 92,
      strengths: ['Đếm và so sánh số', 'Tính nhẩm cộng trừ phạm vi 10', 'Nhận diện hình học'],
      weaknesses: ['Bài toán có lời văn 2 bước tính (Cần ôn thêm)']
    },
    {
      subject: 'Tiếng Việt',
      score: 88,
      strengths: ['Quy tắc chính tả c/k, g/gh', 'Mẫu câu Ai là gì', 'Tập đọc diễn cảm'],
      weaknesses: ['Dấu câu chấm hỏi / chấm than']
    },
    {
      subject: 'Tiếng Anh',
      score: 95,
      strengths: ['Từ vựng màu sắc & đồ vật', 'Nghe nhận diện tranh', 'Phát âm Phonics'],
      weaknesses: ['Mẫu câu hỏi tuổi và đồ vật']
    }
  ],
  screenTimeLimitMinutes: 30,
  screenTimeUsedMinutes: 18,
  parentTasks: [
    {
      id: 'pt-1',
      title: 'Tự giác gấp chăn gối sau khi ngủ dậy 🛏️',
      rewardStars: 1,
      isCompleted: true,
      isApproved: true,
    },
    {
      id: 'pt-2',
      title: 'Ăn hết phần rau trong bữa tối 🥦',
      rewardStars: 1,
      isCompleted: true,
      isApproved: false,
    },
    {
      id: 'pt-3',
      title: 'Xếp đồ chơi gọn gàng vào giỏ 🧸',
      rewardStars: 1,
      isCompleted: false,
      isApproved: false,
    }
  ]
};

export interface CuteAvatarOption {
  id: string;
  name: string;
  shortName: string;
  emoji: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  description: string;
  tag: string;
}

export const CUTE_ANIMAL_AVATARS: CuteAvatarOption[] = [
  { id: 'bobo', name: 'Cú BoBo', shortName: 'Cú BoBo', emoji: '🦉', bgColor: '#ECFDF5', borderColor: '#10B981', textColor: '#065F46', description: 'Thông thái, tính nhẩm thần tốc', tag: 'Toán học' },
  { id: 'miumiu', name: 'Cáo MiuMiu', shortName: 'Cáo MiuMiu', emoji: '🦊', bgColor: '#FFFBEB', borderColor: '#F59E0B', textColor: '#92400E', description: 'Kể chuyện hay, văn thơ bay bổng', tag: 'Tiếng Việt' },
  { id: 'pipi', name: 'Cá Heo PiPi', shortName: 'Cá Heo', emoji: '🐬', bgColor: '#F0F9FF', borderColor: '#0EA5E9', textColor: '#075985', description: 'Ngoại ngữ siêu đỉnh, thích bơi lội', tag: 'Tiếng Anh' },
  { id: 'dino', name: 'Khủng Long T-Rex', shortName: 'Khủng Long', emoji: '🦖', bgColor: '#F0FDF4', borderColor: '#22C55E', textColor: '#166534', description: 'Dũng cảm, yêu thích thám hiểm', tag: 'Dũng sĩ' },
  { id: 'bunny', name: 'Thỏ Con Miffy', shortName: 'Thỏ Con', emoji: '🐰', bgColor: '#FDF2F8', borderColor: '#EC4899', textColor: '#9D174D', description: 'Nhanh nhẹn, đáng yêu', tag: 'Nhanh nhẹn' },
  { id: 'bear', name: 'Gấu Nâu Teddy', shortName: 'Gấu Nâu', emoji: '🐻', bgColor: '#FFF7ED', borderColor: '#F97316', textColor: '#9A3412', description: 'Ấm áp, chăm chỉ học tập', tag: 'Chăm chỉ' },
  { id: 'lion', name: 'Sư Tử Simba', shortName: 'Sư Tử', emoji: '🦁', bgColor: '#FEF3C7', borderColor: '#D97706', textColor: '#78350F', description: 'Tự tin, thủ lĩnh tri thức', tag: 'Thủ lĩnh' },
  { id: 'cat', name: 'Mèo Kitty', shortName: 'Mèo Con', emoji: '🐱', bgColor: '#FCE7F3', borderColor: '#F43F5E', textColor: '#881337', description: 'Dịu dàng, khéo tay hay làm', tag: 'Dễ thương' },
  { id: 'puppy', name: 'Cún Corgi', shortName: 'Cún Corgi', emoji: '🐶', bgColor: '#FEF08A', borderColor: '#EAB308', textColor: '#713F12', description: 'Trung thành, luôn vui vẻ', tag: 'Vui tươi' },
  { id: 'panda', name: 'Gấu Trúc Panda', shortName: 'Gấu Trúc', emoji: '🐼', bgColor: '#F1F5F9', borderColor: '#64748B', textColor: '#0F172A', description: 'Bình tĩnh, kiên nhẫn giải đố', tag: 'Kiên nhẫn' },
  { id: 'unicorn', name: 'Kỳ Lân Cầu Vồng', shortName: 'Kỳ Lân', emoji: '🦄', bgColor: '#F5F3FF', borderColor: '#8B5CF6', textColor: '#5B21B6', description: 'Phép màu trí tuệ, sáng tạo', tag: 'Sáng tạo' },
  { id: 'penguin', name: 'Cánh Cụt Nhỏ', shortName: 'Cánh Cụt', emoji: '🐧', bgColor: '#E0F2FE', borderColor: '#38BDF8', textColor: '#0369A1', description: 'Bền bỉ, thích phiêu lưu băng tuyết', tag: 'Thám hiểm' },
  { id: 'koala', name: 'Gấu Koala', shortName: 'Gấu Koala', emoji: '🐨', bgColor: '#F3F4F6', borderColor: '#9CA3AF', textColor: '#374151', description: 'Hiền hậu, tập trung lắng nghe', tag: 'Tập trung' },
  { id: 'tiger', name: 'Hổ Con Tiger', shortName: 'Hổ Con', emoji: '🐯', bgColor: '#FFEDD5', borderColor: '#FB923C', textColor: '#9A3412', description: 'Năng động, bứt phá mọi bài tập', tag: 'Bứt phá' },
  { id: 'astronaut', name: 'Phi Hành Gia', shortName: 'Phi Hành Gia', emoji: '🚀', bgColor: '#EDE9FE', borderColor: '#A855F7', textColor: '#6B21A8', description: 'Khám phá vũ trụ khoa học', tag: 'Khoa học' },
  { id: 'princess', name: 'Công Chúa Tri Thức', shortName: 'Công Chúa', emoji: '👑', bgColor: '#FDF4FF', borderColor: '#E879F9', textColor: '#86198F', description: 'Xinh đẹp, chăm ngoan học giỏi', tag: 'Chăm ngoan' },
];
