export interface RetirableAudio {
  currentTime: number;
  onended: unknown;
  onerror: unknown;
  pause: () => void;
}

export function retireAudioForFallback(audio: RetirableAudio): void {
  audio.onended = null;
  audio.onerror = null;
  audio.pause();
  audio.currentTime = 0;
}
