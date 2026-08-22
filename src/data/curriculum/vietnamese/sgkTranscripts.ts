import generatedTranscripts from './sgkReadingTranscripts.generated.json';

export interface SgkReadingTranscript {
  lessonId: string;
  bookId: string;
  sourcePages: number[];
  sourceHash: string;
  readingPassage: {
    title: string;
    author: string;
    genre: 'poem' | 'story' | 'prose';
    content: string[];
    contentOrigin: 'sgk_reference';
    verificationStatus: 'verified';
    sourcePages: number[];
    sourceHash: string;
    audioNarration: string;
  };
}

function groupPoemLinesIntoStanzas(content: string[]): string[] {
  const stanzas: string[] = [];
  let currentLines: string[] = [];

  const flush = () => {
    if (currentLines.length > 0) stanzas.push(currentLines.join('\n'));
    currentLines = [];
  };

  for (const item of content) {
    if (item.includes('\n')) {
      flush();
      stanzas.push(item);
      continue;
    }

    currentLines.push(item);
    if (/[.!?…][”"']?$/.test(item.trim())) flush();
  }
  flush();
  return stanzas;
}

function normalizeTranscript(transcript: SgkReadingTranscript): SgkReadingTranscript {
  const content = transcript.readingPassage.genre === 'poem'
    ? groupPoemLinesIntoStanzas(transcript.readingPassage.content)
    : transcript.readingPassage.content;
  const readingPassage = {
    ...transcript.readingPassage,
    content,
    // Một dòng riêng sau tiêu đề tạo khoảng nghỉ tự nhiên và bảo đảm phần
    // đọc mẫu luôn dùng đúng chính văn đang hiển thị.
    audioNarration: [transcript.readingPassage.title, ...content].join('\n'),
  };
  return { ...transcript, readingPassage };
}

const rawVerifiedTranscripts = generatedTranscripts as Record<string, SgkReadingTranscript>;

export const SGK_VERIFIED_TRANSCRIPTS = Object.fromEntries(
  Object.entries(rawVerifiedTranscripts).map(([lessonId, transcript]) => [
    lessonId,
    normalizeTranscript(transcript),
  ]),
) as Record<string, SgkReadingTranscript>;

export function getVerifiedVietnameseSgkTranscript(
  lessonId: string,
): SgkReadingTranscript | undefined {
  const normalizedId = lessonId.replace('-l', '-b');
  const transcript = SGK_VERIFIED_TRANSCRIPTS[normalizedId] || SGK_VERIFIED_TRANSCRIPTS[lessonId];

  // Đợt duyệt hiện tại chỉ phát hành 293 bài, không gồm 83 bài âm-vần
  // Tiếng Việt 1 Tập 1. Các bản ghi OCR/tự dựng của nhóm này vẫn được giữ
  // làm dữ liệu làm việc, nhưng không được coi là nguyên văn SGK đã duyệt.
  if (transcript?.bookId === 'tv-g1-t1') {
    return undefined;
  }

  return transcript;
}
