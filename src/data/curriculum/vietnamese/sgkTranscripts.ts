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

export const SGK_VERIFIED_TRANSCRIPTS = generatedTranscripts as Record<
  string,
  SgkReadingTranscript
>;

export function getVerifiedVietnameseSgkTranscript(
  lessonId: string,
): SgkReadingTranscript | undefined {
  const normalizedId = lessonId.replace('-l', '-b');
  return SGK_VERIFIED_TRANSCRIPTS[normalizedId] || SGK_VERIFIED_TRANSCRIPTS[lessonId];
}
