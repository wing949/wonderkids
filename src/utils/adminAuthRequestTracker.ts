export interface AdminAuthRequestTracker {
  begin: () => number;
  invalidate: () => void;
  isCurrent: (requestId: number) => boolean;
}

export function createAdminAuthRequestTracker(): AdminAuthRequestTracker {
  let latestRequestId = 0;

  return {
    begin: () => {
      latestRequestId += 1;
      return latestRequestId;
    },
    invalidate: () => {
      latestRequestId += 1;
    },
    isCurrent: (requestId) => requestId === latestRequestId,
  };
}
