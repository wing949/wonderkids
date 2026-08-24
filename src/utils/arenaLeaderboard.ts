export const ARENA_LEADERBOARD_STORAGE_KEY = 'wonderkids_arena_leaderboard_v1';

export interface ArenaLeaderboardEntry {
  sessionId: string;
  playerName: string;
  score: number;
  totalPoints: number;
  correctCount: number;
  totalCount: number;
  elapsedSeconds: number;
  completedAt: number;
}

type ArenaLeaderboardStore = Record<string, ArenaLeaderboardEntry[]>;

function readStore(storage: Pick<Storage, 'getItem'>): ArenaLeaderboardStore {
  try {
    const parsed = JSON.parse(storage.getItem(ARENA_LEADERBOARD_STORAGE_KEY) || '{}');
    return parsed && typeof parsed === 'object' ? parsed as ArenaLeaderboardStore : {};
  } catch {
    return {};
  }
}

function sortEntries(entries: ArenaLeaderboardEntry[]): ArenaLeaderboardEntry[] {
  return [...entries].sort((left, right) => (
    right.score - left.score
    || left.elapsedSeconds - right.elapsedSeconds
    || left.completedAt - right.completedAt
  ));
}

export function readArenaLeaderboard(
  storage: Pick<Storage, 'getItem'>,
  sessionId: string,
): ArenaLeaderboardEntry[] {
  return sortEntries(readStore(storage)[sessionId] || []);
}

export function recordArenaResult(
  storage: Pick<Storage, 'getItem' | 'setItem'>,
  entry: ArenaLeaderboardEntry,
): ArenaLeaderboardEntry[] {
  const store = readStore(storage);
  const current = store[entry.sessionId] || [];
  const previous = current.find((candidate) => candidate.playerName === entry.playerName);
  const isBetter = !previous
    || entry.score > previous.score
    || (entry.score === previous.score && entry.elapsedSeconds < previous.elapsedSeconds);
  const nextEntries = isBetter
    ? [...current.filter((candidate) => candidate.playerName !== entry.playerName), entry]
    : current;
  const ranking = sortEntries(nextEntries).slice(0, 20);
  storage.setItem(ARENA_LEADERBOARD_STORAGE_KEY, JSON.stringify({ ...store, [entry.sessionId]: ranking }));
  return ranking;
}
