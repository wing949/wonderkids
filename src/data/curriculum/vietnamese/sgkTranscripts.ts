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
};

function normalizeLessonId(lessonId: string): string {
  return lessonId.replace('-l', '-b');
}

export function getVerifiedVietnameseSgkTranscript(lessonId: string): VietnameseSgkTranscript | null {
  return VERIFIED_SGK_TRANSCRIPTS[normalizeLessonId(lessonId)] || null;
}

export const VERIFIED_VIETNAMESE_SGK_TRANSCRIPT_COUNT = Object.keys(VERIFIED_SGK_TRANSCRIPTS).length;
