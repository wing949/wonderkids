import type { ReadingPassage } from '../../../types';

export interface VietnameseSgkTranscript extends ReadingPassage {
  contentOrigin: 'sgk_reference';
  verificationStatus: 'verified';
  sourcePages: number[];
  sourceHash: string;
}

const VERIFIED_SGK_TRANSCRIPTS: Record<string, VietnameseSgkTranscript> = {
  'tv-g2-b1': {
    title: 'Tôi là học sinh lớp 2',
    author: 'Văn Giá',
    genre: 'prose',
    content: [
      'Ngày khai trường đã đến.',
      'Sáng sớm, mẹ mới gọi một câu mà tôi đã vùng dậy, khác hẳn mọi ngày. Loáng một cái, tôi đã chuẩn bị xong mọi thứ. Bố ngạc nhiên nhìn tôi, còn mẹ cười tủm tỉm. Tôi rối rít: “Con muốn đến lớp sớm nhất.”',
      'Tôi háo hức tưởng tượng ra cảnh mình đến đầu tiên, cất tiếng chào thật to những bạn đến sau. Nhưng vừa đến cổng trường, tôi đã thấy mấy bạn cùng lớp đang ríu rít nói cười ở trong sân. Thì ra, không chỉ mình tôi muốn đến sớm nhất. Tôi chào mẹ, chạy ào vào cùng các bạn.',
      'Chúng tôi tranh nhau kể về chuyện ngày hè. Ngay cạnh chúng tôi, mấy em lớp 1 đang rụt rè níu chặt tay bố mẹ, thật giống tôi năm ngoái. Trước các em, tôi cảm thấy mình lớn bổng lên. Tôi đã là học sinh lớp 2 rồi cơ mà.',
    ],
    audioNarration: [
      'Tôi là học sinh lớp 2',
      'Ngày khai trường đã đến.',
      'Sáng sớm, mẹ mới gọi một câu mà tôi đã vùng dậy, khác hẳn mọi ngày. Loáng một cái, tôi đã chuẩn bị xong mọi thứ. Bố ngạc nhiên nhìn tôi, còn mẹ cười tủm tỉm. Tôi rối rít: “Con muốn đến lớp sớm nhất.”',
      'Tôi háo hức tưởng tượng ra cảnh mình đến đầu tiên, cất tiếng chào thật to những bạn đến sau. Nhưng vừa đến cổng trường, tôi đã thấy mấy bạn cùng lớp đang ríu rít nói cười ở trong sân. Thì ra, không chỉ mình tôi muốn đến sớm nhất. Tôi chào mẹ, chạy ào vào cùng các bạn.',
      'Chúng tôi tranh nhau kể về chuyện ngày hè. Ngay cạnh chúng tôi, mấy em lớp 1 đang rụt rè níu chặt tay bố mẹ, thật giống tôi năm ngoái. Trước các em, tôi cảm thấy mình lớn bổng lên. Tôi đã là học sinh lớp 2 rồi cơ mà.',
    ].join('\n'),
    contentOrigin: 'sgk_reference',
    verificationStatus: 'verified',
    sourcePages: [10, 11],
    sourceHash: '9da7117db1ebde0ee1eb294bac52e899eafcff004e999b4aef025429c11d3c79',
  },
  'tv-g2-b2': {
    title: 'Ngày hôm qua đâu rồi?',
    author: 'Bế Kiến Quốc',
    genre: 'poem',
    content: [
      'Em cầm tờ lịch cũ:\n– Ngày hôm qua đâu rồi?\nRa ngoài sân hỏi bố\nXoa đầu em, bố cười.',
      '– Ngày hôm qua ở lại\nTrên cành hoa trong vườn\nNụ hồng lớn lên mãi\nĐợi đến ngày toả hương.',
      '– Ngày hôm qua ở lại\nTrong hạt lúa mẹ trồng\nCánh đồng chờ gặt hái\nChín vàng màu ước mong.',
      '– Ngày hôm qua ở lại\nTrong vở hồng của con\nCon học hành chăm chỉ\nLà ngày qua vẫn còn.',
    ],
    audioNarration: [
      'Ngày hôm qua đâu rồi?',
      'Em cầm tờ lịch cũ:',
      'Ngày hôm qua đâu rồi?',
      'Ra ngoài sân hỏi bố.',
      'Xoa đầu em, bố cười.',
      'Ngày hôm qua ở lại.',
      'Trên cành hoa trong vườn.',
      'Nụ hồng lớn lên mãi.',
      'Đợi đến ngày toả hương.',
      'Ngày hôm qua ở lại.',
      'Trong hạt lúa mẹ trồng.',
      'Cánh đồng chờ gặt hái.',
      'Chín vàng màu ước mong.',
      'Ngày hôm qua ở lại.',
      'Trong vở hồng của con.',
      'Con học hành chăm chỉ.',
      'Là ngày qua vẫn còn.',
    ].join('\n'),
    contentOrigin: 'sgk_reference',
    verificationStatus: 'verified',
    sourcePages: [13],
    sourceHash: '5ca5c2292c1dd745e50db436ed4a7c927e65878425d3036b46cca9c6ed3d5bb1',
  },
  'tv-g2-b3': {
    title: 'Niềm vui của Bi và Bống',
    author: 'Theo 108 truyện mẹ kể con nghe',
    genre: 'prose',
    content: [
      'Khi cơn mưa vừa dứt, hai anh em Bi và Bống chợt thấy cầu vồng.\n– Cầu vồng kìa! Em nhìn xem! Đẹp quá!\nBi chỉ lên bầu trời và nói tiếp:\n– Anh nghe nói dưới chân cầu vồng có bảy hũ vàng đấy.\nBống hưởng ứng:\n– Lát nữa, mình sẽ đi lấy về nhé! Có vàng rồi, em sẽ mua nhiều búp bê và quần áo đẹp.\n– Còn anh sẽ mua một con ngựa hồng và một cái ô tô.\nBỗng nhiên, cầu vồng biến mất. Bi cười:\n– Em ơi! Anh đùa đấy! Ở đó không có vàng đâu.',
      'Bống vui vẻ:\n– Thế ạ? Nếu vậy, em sẽ lấy bút màu để vẽ tặng anh ngựa hồng và ô tô.\n– Còn anh sẽ vẽ tặng em nhiều búp bê và quần áo đủ các màu sắc.\nKhông có bảy hũ vàng dưới chân cầu vồng, hai anh em vẫn cười vui vẻ.',
    ],
    audioNarration: [
      'Niềm vui của Bi và Bống',
      'Khi cơn mưa vừa dứt, hai anh em Bi và Bống chợt thấy cầu vồng.',
      'Cầu vồng kìa! Em nhìn xem! Đẹp quá!',
      'Bi chỉ lên bầu trời và nói tiếp:',
      'Anh nghe nói dưới chân cầu vồng có bảy hũ vàng đấy.',
      'Bống hưởng ứng:',
      'Lát nữa, mình sẽ đi lấy về nhé! Có vàng rồi, em sẽ mua nhiều búp bê và quần áo đẹp.',
      'Còn anh sẽ mua một con ngựa hồng và một cái ô tô.',
      'Bỗng nhiên, cầu vồng biến mất. Bi cười:',
      'Em ơi! Anh đùa đấy! Ở đó không có vàng đâu.',
      'Bống vui vẻ:',
      'Thế ạ? Nếu vậy, em sẽ lấy bút màu để vẽ tặng anh ngựa hồng và ô tô.',
      'Còn anh sẽ vẽ tặng em nhiều búp bê và quần áo đủ các màu sắc.',
      'Không có bảy hũ vàng dưới chân cầu vồng, hai anh em vẫn cười vui vẻ.',
    ].join('\n'),
    contentOrigin: 'sgk_reference',
    verificationStatus: 'verified',
    sourcePages: [17, 18],
    sourceHash: '012e742345cdbf6a4c4fc142e483d67a1f17ec7a6e686468cf28305c706c3c32',
  },
  'tv-g2-b4': {
    title: 'Làm việc thật là vui',
    author: 'Theo Tô Hoài',
    genre: 'prose',
    content: [
      'Quanh ta, mọi vật, mọi người đều làm việc.',
      'Cái đồng hồ tích tắc, tích tắc, báo phút, báo giờ. Con gà trống gáy vang ò ó o, báo cho mọi người biết trời sắp sáng, mau mau thức dậy. Con tu hú kêu tu hú, tu hú. Thế là sắp đến mùa vải chín. Chim bắt sâu, bảo vệ mùa màng. Cành đào nở hoa cho sắc xuân thêm rực rỡ, ngày xuân thêm tưng bừng. Chim cú mèo chập tối đứng trong hốc cây rúc cú cu cũng làm việc có ích cho đồng ruộng.',
      'Như mọi vật, mọi người, bé cũng làm việc. Bé làm bài. Bé đi học. Học xong, bé quét nhà, nhặt rau, chơi với em đỡ mẹ. Bé luôn luôn bận rộn, mà lúc nào cũng vui.',
    ],
    audioNarration: [
      'Làm việc thật là vui',
      'Quanh ta, mọi vật, mọi người đều làm việc.',
      'Cái đồng hồ tích tắc, tích tắc, báo phút, báo giờ. Con gà trống gáy vang ò ó o, báo cho mọi người biết trời sắp sáng, mau mau thức dậy. Con tu hú kêu tu hú, tu hú. Thế là sắp đến mùa vải chín. Chim bắt sâu, bảo vệ mùa màng. Cành đào nở hoa cho sắc xuân thêm rực rỡ, ngày xuân thêm tưng bừng. Chim cú mèo chập tối đứng trong hốc cây rúc cú cu cũng làm việc có ích cho đồng ruộng.',
      'Như mọi vật, mọi người, bé cũng làm việc. Bé làm bài. Bé đi học. Học xong, bé quét nhà, nhặt rau, chơi với em đỡ mẹ. Bé luôn luôn bận rộn, mà lúc nào cũng vui.',
    ].join('\n'),
    contentOrigin: 'sgk_reference',
    verificationStatus: 'verified',
    sourcePages: [20],
    sourceHash: '045ab2083965bba36b2fb66406189d10869c4dc66814551fdeff9bfabf9ce2ac',
  },
  'tv-g2-b5': {
    title: 'Em có xinh không?',
    author: 'Theo Âu Phúc, Voi em đi tìm tự tin',
    genre: 'prose',
    content: [
      'Voi em thích mặc đẹp và thích được khen xinh. Ở nhà, voi em luôn hỏi anh: “Em có xinh không?”. Voi anh bao giờ cũng khen: “Em xinh lắm!”.\n\nMột hôm, gặp hươu, voi em hỏi:\n– Em có xinh không?\nHươu ngắm voi rồi lắc đầu:\n– Chưa xinh lắm vì em không có đôi sừng giống anh.\nNghe vậy, voi nhặt vài cành cây khô, gài lên đầu rồi đi tiếp.\nGặp dê, voi hỏi:\n– Em có xinh không?',
      '– Không, vì cậu không có bộ râu giống tôi.\nVoi liền nhổ một khóm cỏ dại bên đường, gắn vào cằm rồi về nhà.\nVề nhà với đôi sừng và bộ râu giả, voi em hớn hở hỏi anh:\n– Em có xinh hơn không?\nVoi anh nói:\n– Trời ơi, sao em lại thêm sừng và râu thế này? Xấu lắm!\nVoi em ngắm mình trong gương và thấy xấu thật. Sau khi bỏ sừng và râu đi, voi em thấy mình xinh đẹp hẳn lên. Giờ đây, voi em hiểu rằng mình chỉ xinh đẹp khi đúng là voi.',
    ],
    audioNarration: [
      'Em có xinh không?',
      'Voi em thích mặc đẹp và thích được khen xinh. Ở nhà, voi em luôn hỏi anh: “Em có xinh không?”. Voi anh bao giờ cũng khen: “Em xinh lắm!”.',
      'Một hôm, gặp hươu, voi em hỏi:',
      'Em có xinh không?',
      'Hươu ngắm voi rồi lắc đầu:',
      'Chưa xinh lắm vì em không có đôi sừng giống anh.',
      'Nghe vậy, voi nhặt vài cành cây khô, gài lên đầu rồi đi tiếp.',
      'Gặp dê, voi hỏi:',
      'Em có xinh không?',
      'Không, vì cậu không có bộ râu giống tôi.',
      'Voi liền nhổ một khóm cỏ dại bên đường, gắn vào cằm rồi về nhà.',
      'Về nhà với đôi sừng và bộ râu giả, voi em hớn hở hỏi anh:',
      'Em có xinh hơn không?',
      'Voi anh nói:',
      'Trời ơi, sao em lại thêm sừng và râu thế này? Xấu lắm!',
      'Voi em ngắm mình trong gương và thấy xấu thật. Sau khi bỏ sừng và râu đi, voi em thấy mình xinh đẹp hẳn lên. Giờ đây, voi em hiểu rằng mình chỉ xinh đẹp khi đúng là voi.',
    ].join('\n'),
    contentOrigin: 'sgk_reference',
    verificationStatus: 'verified',
    sourcePages: [24, 25],
    sourceHash: 'c82f9540133175f86124588538ce2bae53964c927e856aaa59b98cc4e9271709',
  },
  'tv-g2-b6': {
    title: 'Một giờ học',
    author: 'Phỏng theo Tốt-tô-chan, cô bé bên cửa sổ',
    genre: 'prose',
    content: [
      'Thầy giáo nói: “Chúng ta cần học cách giao tiếp tự tin. Vì thế hôm nay chúng ta sẽ tập nói trước lớp về bất cứ điều gì mình thích.”\n\nQuang được mời lên nói đầu tiên. Cậu lúng túng, đỏ mặt. Quang cảm thấy nói với bạn bên cạnh thì dễ, nhưng nói trước cả lớp thì sao mà khó thế. Thầy bảo: “Sáng nay ngủ dậy, em đã làm gì? Em có nhớ xem.”\n\nQuang ngập ngừng, vừa nói vừa gãi đầu: “Em...”\n\nThầy giáo nhắc: “Rồi gì nữa?”\n\nQuang lại gãi đầu: “À... ờ... Em ngủ dậy.” Và cậu nói tiếp: “Rồi... ờ...”\n\nThầy giáo mỉm cười, kiên nhẫn nghe Quang nói. Thầy bảo: “Thế là được rồi đấy!”',
      'Nhưng Quang chưa chịu về chỗ. Bỗng cậu nói to: “Rồi sau đó... ờ... à...”\nQuang thở mạnh một hơi rồi nói tiếp: “Mẹ... ờ... bảo: Con đánh răng đi. Thế là em đánh răng.” Thầy giáo vỗ tay. Cả lớp vỗ tay theo. Cuối cùng, Quang nói với giọng rất tự tin: “Sau đó bố đưa em đi học.”\n\nThầy giáo vỗ tay. Các bạn vỗ tay theo. Quang cũng vỗ tay. Cả lớp tràn ngập tiếng vỗ tay.',
    ],
    contentOrigin: 'sgk_reference',
    verificationStatus: 'verified',
    sourcePages: [27, 28],
    sourceHash: '830203c5f01dfa17fdf379d1f66d7f8f0177028ddf85396f1b9631da424f4bfc',
  },
};

function normalizeLessonId(lessonId: string): string {
  return lessonId.replace('-l', '-b');
}

export function getVerifiedVietnameseSgkTranscript(lessonId: string): VietnameseSgkTranscript | null {
  return VERIFIED_SGK_TRANSCRIPTS[normalizeLessonId(lessonId)] || null;
}

export const VERIFIED_VIETNAMESE_SGK_TRANSCRIPT_COUNT = Object.keys(VERIFIED_SGK_TRANSCRIPTS).length;
