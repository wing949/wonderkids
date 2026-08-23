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
    stanzaBoundariesVerified?: boolean;
  };
}

const REVIEWED_POETRY_STANZA_BREAKS: Record<string, number[]> = {
  'tv-g1-t2-b42': [3, 7, 11, 15],
  'tv-g1-t2-b44': [2, 4, 6, 8, 10, 12, 14],
  'tv-g2-b17': [4, 8, 14],
  'tv-g2-t1-b26': [6, 10, 14, 18],
  'tv-g2-t1-b27': [2, 4, 6, 8, 10],
  'tv-g2-b23': [5, 9, 13, 17],
  'tv-g2-b30': [6, 10, 14, 18, 22],
  'tv-g2-t2-b13': [11, 22, 33],
  'tv-g3-b2': [4, 8, 12, 14, 18],
  'tv-g3-b13': [4, 8, 12, 16, 18],
  'tv-g3-t1-b23': [3, 7, 11, 15, 19, 23],
  'tv-g3-t2-b30': [4, 8, 12, 16, 20, 24, 26],
  'tv-g4-b9': [8, 16, 24],
  'tv-g4-t1-b31': [3, 7, 11, 15, 17],
  'tv-g4-b15': [4, 10, 14],
  'tv-g4-b22': [4, 10, 14],
  'tv-g5-b3': [4, 12, 20, 26],
  'tv-g5-b13': [4, 8, 12, 16, 22, 26],
  'tv-g5-b18': [11, 19],
  'tv-g5-b19': [6, 15, 23, 31, 36],
  'tv-g5-t1-b25': [3, 8, 13, 19, 24],
  'tv-g5-t2-b22': [6, 13, 17, 22],
  'tv-g5-t2-b23': [6, 10, 12, 16, 18, 20],
  'tv-g5-t2-b25': [6, 12, 18],
};

// Những bài này đã được đối chiếu là có khổ đều bốn dòng trong SGK.
// Danh sách tường minh giúp bài thơ mới không bị tự động chia khổ theo phỏng đoán.
const REVIEWED_FOUR_LINE_POETRY_IDS = new Set([
  'tv-g1-b23',
  'tv-g1-b27',
  'tv-g1-b29',
  'tv-g1-t2-b11',
  'tv-g1-t2-b13',
  'tv-g1-t2-b15',
  'tv-g1-t2-b17',
  'tv-g1-t2-b19',
  'tv-g1-t2-b24',
  'tv-g1-t2-b29',
  'tv-g1-t2-b33',
  'tv-g1-t2-b34',
  'tv-g1-t2-b36',
  'tv-g1-t2-b38',
  'tv-g1-t2-b39',
  'tv-g2-b2',
  'tv-g2-b9',
  'tv-g2-b11',
  'tv-g2-b13',
  'tv-g2-b14',
  'tv-g2-b16',
  'tv-g2-t1-b21',
  'tv-g2-t1-b24',
  'tv-g2-t1-b29',
  'tv-g2-t1-b30',
  'tv-g2-b25',
  'tv-g2-b26',
  'tv-g2-b27',
  'tv-g2-t2-b22',
  'tv-g2-t2-b30',
  'tv-g3-b7',
  'tv-g3-b9',
  'tv-g3-t1-b16',
  'tv-g3-t1-b17',
  'tv-g3-t1-b19',
  'tv-g3-t1-b28',
  'tv-g3-b16',
  'tv-g3-b19',
  'tv-g3-b21',
  'tv-g3-t2-b13',
  'tv-g3-t2-b17',
  'tv-g3-t2-b20',
  'tv-g4-b1',
  'tv-g4-t1-b15',
  'tv-g4-t1-b17',
  'tv-g4-t1-b28',
  'tv-g4-b17',
  'tv-g4-b21',
  'tv-g4-t2-b14',
  'tv-g4-t2-b16',
  'tv-g4-t2-b18',
  'tv-g4-t2-b19',
  'tv-g4-t2-b22',
  'tv-g4-t2-b30',
  'tv-g5-b5',
  'tv-g5-b9',
  'tv-g5-t1-b21',
  'tv-g5-b22',
  'tv-g5-b23',
  'tv-g5-t2-b11',
  'tv-g5-t2-b14',
  'tv-g5-t2-b16',
  'tv-g5-t2-b24',
]);

function groupPoemLinesIntoStanzas(content: string[], lessonId: string): string[] {
  const stanzas: string[] = [];
  let currentLines: string[] = [];
  const hasNumberedStanzas = content.some((item) => /^\s*\(\d+\)/u.test(item));
  const reviewedBreaks = REVIEWED_POETRY_STANZA_BREAKS[lessonId];
  const reviewedBreakSet = reviewedBreaks ? new Set(reviewedBreaks) : null;
  const hasReviewedFourLineStanzas = REVIEWED_FOUR_LINE_POETRY_IDS.has(lessonId);

  if (!hasNumberedStanzas && !reviewedBreakSet && !hasReviewedFourLineStanzas) {
    throw new Error(`Bài thơ ${lessonId} chưa có ranh giới khổ đã đối chiếu SGK.`);
  }

  const flush = () => {
    if (currentLines.length > 0) stanzas.push(currentLines.join('\n'));
    currentLines = [];
  };

  for (const [index, item] of content.entries()) {
    if (item.includes('\n')) {
      flush();
      stanzas.push(
        ...item
          .split(/\r?\n\s*\r?\n/u)
          .map((block) => block.trim())
          .filter(Boolean),
      );
      continue;
    }

    if (hasNumberedStanzas && /^\s*\(\d+\)/u.test(item) && currentLines.length > 0) flush();
    currentLines.push(item);
    if (!hasNumberedStanzas) {
      const lineNumber = index + 1;
      if (reviewedBreakSet?.has(lineNumber) || (hasReviewedFourLineStanzas && currentLines.length === 4)) flush();
    }
  }
  flush();
  return stanzas;
}

function normalizeTranscript(transcript: SgkReadingTranscript): SgkReadingTranscript {
  const content = transcript.readingPassage.genre === 'poem'
    ? groupPoemLinesIntoStanzas(transcript.readingPassage.content, transcript.lessonId)
    : transcript.readingPassage.content;
  const readingPassage = {
    ...transcript.readingPassage,
    content,
    ...(transcript.readingPassage.genre === 'poem'
      ? { stanzaBoundariesVerified: true as const }
      : {}),
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
