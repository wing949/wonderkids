export const CURRICULUM_AUDIO_VOICE = 'vi-VN-HoaiMyNeural';

export interface CurriculumAudioAsset {
  url: string;
  bytes: number;
  textHash?: string;
}

export interface CurriculumAudioManifest {
  version: 1;
  voice: typeof CURRICULUM_AUDIO_VOICE;
  assets: Record<string, CurriculumAudioAsset>;
}

function isAsset(value: unknown): value is CurriculumAudioAsset {
  if (!value || typeof value !== 'object') return false;

  const asset = value as Partial<CurriculumAudioAsset>;
  return (
    typeof asset.url === 'string' &&
    /^\/audio\/curriculum\/[a-z0-9-]+\.mp3$/.test(asset.url) &&
    typeof asset.bytes === 'number' &&
    asset.bytes >= 1024 &&
    typeof asset.textHash === 'string' &&
    /^sha256:[a-f0-9]{64}$/.test(asset.textHash)
  );
}

export function isCurriculumAudioManifest(value: unknown): value is CurriculumAudioManifest {
  if (!value || typeof value !== 'object') return false;

  const manifest = value as Partial<CurriculumAudioManifest>;
  return (
    manifest.version === 1 &&
    manifest.voice === CURRICULUM_AUDIO_VOICE &&
    !!manifest.assets &&
    typeof manifest.assets === 'object' &&
    !Array.isArray(manifest.assets) &&
    Object.values(manifest.assets).every(isAsset)
  );
}

export function getCurriculumAudioAsset(
  manifest: CurriculumAudioManifest | null,
  lessonId: string
): CurriculumAudioAsset | null {
  if (!manifest) return null;
  const asset = manifest.assets[lessonId];
  return asset?.url === `/audio/curriculum/${lessonId}.mp3` ? asset : null;
}

export async function loadCurriculumAudioManifest(
  signal?: AbortSignal
): Promise<CurriculumAudioManifest | null> {
  try {
    const response = await fetch('/audio/curriculum/manifest.json', {
      cache: 'no-store',
      signal,
    });
    if (!response.ok) return null;

    const manifest: unknown = await response.json();
    return isCurriculumAudioManifest(manifest) ? manifest : null;
  } catch {
    return null;
  }
}
