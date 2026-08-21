export interface SourcePageView {
  index: number;
  imageUrl: string;
  pageNumber: number;
  total: number;
  hasPrevious: boolean;
  hasNext: boolean;
}

export function getSourcePageView(
  imageUrls: string[],
  sourcePages: number[] = [],
  requestedIndex: number,
): SourcePageView | null {
  if (imageUrls.length === 0) return null;
  const index = Math.min(Math.max(0, requestedIndex), imageUrls.length - 1);
  return {
    index,
    imageUrl: imageUrls[index],
    pageNumber: sourcePages[index] || index + 1,
    total: imageUrls.length,
    hasPrevious: index > 0,
    hasNext: index < imageUrls.length - 1,
  };
}
