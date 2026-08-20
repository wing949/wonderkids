// Web Audio Synthesizer & Speech Engine for Kids E-Learning

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Voice cache and Neural Voice finder
let cachedVoices: SpeechSynthesisVoice[] = [];

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  cachedVoices = window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
}

function getBestVoice(lang: 'vi-VN' | 'en-US'): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  if (lang === 'vi-VN') {
    // 1. Ưu tiên cao nhất: Giọng Microsoft Natural / Neural (HoaiMy, NamMinh) hoặc Google Tiếng Việt
    const naturalVi = voices.find(
      (v) =>
        v.lang.toLowerCase().includes('vi') &&
        (v.name.includes('Natural') ||
          v.name.includes('Neural') ||
          v.name.includes('HoaiMy') ||
          v.name.includes('Google') ||
          v.name.includes('NamMinh'))
    );
    if (naturalVi) return naturalVi;

    // 2. Tìm bất kỳ giọng tiếng Việt nào
    const anyVi = voices.find(
      (v) => v.lang.toLowerCase().includes('vi') || v.lang.toLowerCase().includes('viet')
    );
    if (anyVi) return anyVi;
  } else {
    const naturalEn = voices.find(
      (v) =>
        v.lang.toLowerCase().includes('en') &&
        (v.name.includes('Natural') ||
          v.name.includes('Neural') ||
          v.name.includes('Jenny') ||
          v.name.includes('Google') ||
          v.name.includes('Guy'))
    );
    if (naturalEn) return naturalEn;
  }

  return null;
}

export const soundManager = {
  // Play subtle bubble pop when clicking buttons/options
  playPop: () => {
    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const now = ctx.currentTime;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch {
      // Audio not supported or blocked
    }
  },

  // Play crystal bell ding when answering correctly
  playCorrect: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

      // Note 1: E5 (659.25Hz)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(659.25, now);
      gain1.gain.setValueAtTime(0.25, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.35);

      // Note 2: A5 (880Hz) with slight delay
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(880, now + 0.1);
      gain2.gain.setValueAtTime(0.3, now + 0.1);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.1);
      osc2.stop(now + 0.55);
    } catch {
      // Audio fallback
    }
  },

  // Play gentle boing when needing retry (encouraging, not harsh)
  playIncorrect: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.25);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    } catch {
      // Audio fallback
    }
  },

  // Play victory fanfare on lesson completion (C5 - E5 - G5 - C6)
  playVictory: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5];

      notes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const noteStart = now + index * 0.12;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, noteStart);

        gain.gain.setValueAtTime(0.25, noteStart);
        gain.gain.exponentialRampToValueAtTime(0.001, noteStart + (index === 3 ? 0.7 : 0.25));

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(noteStart);
        osc.stop(noteStart + (index === 3 ? 0.7 : 0.25));
      });
    } catch {
      // Audio fallback
    }
  },

  // Play sparkling chest reward opening
  playChestOpen: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const sparkles = [784, 987, 1174, 1318, 1567, 1760];

      sparkles.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const noteStart = now + index * 0.07;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, noteStart);

        gain.gain.setValueAtTime(0.18, noteStart);
        gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(noteStart);
        osc.stop(noteStart + 0.2);
      });
    } catch {
      // Audio fallback
    }
  },

  // Read text out loud with Natural Neural human voice (pitch: 1.0 chuẩn thanh điệu)
  speakText: (
    text: string,
    lang: 'vi-VN' | 'en-US' = 'vi-VN',
    onEnd?: () => void,
    pitch: number = 1.0,
    rate: number = 0.95
  ) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // cancel previous speaking

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = rate; // tốc độ 0.95 tự nhiên, rõ từng từ
      utterance.pitch = pitch; // 1.0 chuẩn xác, không bị méo tiếng chipmunk
      utterance.volume = 1.0;

      const bestVoice = getBestVoice(lang);
      if (bestVoice) {
        utterance.voice = bestVoice;
      }

      if (onEnd) {
        utterance.onend = onEnd;
        utterance.onerror = onEnd;
      }
      window.speechSynthesis.speak(utterance);
    }
  },

  // Realtime Mascot spoken feedback on answer check (Correct / Incorrect)
  speakMascotFeedback: (isCorrect: boolean, explanation?: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    let message = '';
    if (isCorrect) {
      const compliments = [
        'Tuyệt vời! Bạn trả lời rất chính xác.',
        'Giỏi quá! Đúng rồi bạn ơi.',
        'Xuất sắc! Bé nhận thêm một ngôi sao may mắn nhé.',
        'Đúng rồi! Cùng tiếp tục phát huy ở câu tiếp theo nhé.'
      ];
      const randomComp = compliments[Math.floor(Math.random() * compliments.length)];
      message = explanation ? `${randomComp} ${explanation}` : randomComp;
    } else {
      const encouragements = [
        'Chưa chính xác rồi bạn nhỏ ơi! ',
        'Tiếc quá, chưa đúng rồi! ',
        'Gần đúng rồi, đừng nản lòng nhé! '
      ];
      const randomEnc = encouragements[Math.floor(Math.random() * encouragements.length)];
      const hintMsg = explanation ? `Gợi ý nè: ${explanation}` : 'Bé hãy đọc kỹ lại câu hỏi và thử lại nhé!';
      message = `${randomEnc} ${hintMsg}`;
    }

    soundManager.speakText(message, 'vi-VN', undefined, 1.0, 0.95);
  },

  // Stop current speech
  stopSpeaking: () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
};

// =========================================================================
// SPEECH-TO-TEXT (STT) - BÉ LUYỆN ĐỌC BẰNG GIỌNG NÓI (VOICE RECOGNITION)
// =========================================================================

interface SpeechRecognitionEvent {
  results: {
    [index: number]: {
      [index: number]: {
        transcript: string;
      };
      isFinal?: boolean;
    };
    length: number;
  };
}

interface SpeechRecognitionInstance extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: any) => void;
  onend: () => void;
}

export class VoiceRecognitionManager {
  private recognition: SpeechRecognitionInstance | null = null;
  private isListening = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const SpeechRecognitionClass =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognitionClass) {
        this.recognition = new SpeechRecognitionClass();
        if (this.recognition) {
          this.recognition.continuous = false;
          this.recognition.interimResults = true;
          this.recognition.lang = 'vi-VN';
        }
      }
    }
  }

  public isSupported(): boolean {
    return this.recognition !== null;
  }

  public startListening(
    onInterim: (text: string) => void,
    onFinal: (text: string) => void,
    onError: (err: string) => void
  ) {
    if (!this.recognition) {
      onError('Trình duyệt không hỗ trợ nhận diện giọng nói (Web Speech STT).');
      return;
    }

    try {
      this.isListening = true;

      this.recognition.onresult = (event: SpeechRecognitionEvent) => {
        let interimText = '';
        let finalText = '';

        for (let i = 0; i < event.results.length; ++i) {
          const res = event.results[i];
          if (res.isFinal) {
            finalText += res[0].transcript;
          } else {
            interimText += res[0].transcript;
          }
        }

        if (interimText) onInterim(interimText);
        if (finalText) onFinal(finalText);
      };

      this.recognition.onerror = (e: any) => {
        this.isListening = false;
        onError(e.error || 'Lỗi nhận diện âm thanh.');
      };

      this.recognition.onend = () => {
        this.isListening = false;
      };

      this.recognition.start();
    } catch (err: any) {
      this.isListening = false;
      onError(err?.message || 'Không thể bật micro.');
    }
  }

  public stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch {}
        this.isListening = false;
    }
  }
}

export const voiceManager = new VoiceRecognitionManager();
