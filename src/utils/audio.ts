import { TTSSettings } from '../types';

let audioCtx: AudioContext | null = null;

export const STORAGE_KEY_TTS_SETTINGS = 'wonderkids_tts_settings_v1';

export const DEFAULT_TTS_SETTINGS: TTSSettings = {
  provider: 'edge', // 'edge' (Cô Hoài My) hoặc 'vieneu' (Mô hình VieNeu-TTS)
  vieneuEndpoint: 'http://localhost:8000/api/tts',
  vieneuVoiceId: 'co_giao_ha_noi',
  vieneuApiKey: '',
  edgeVoiceVi: 'vi-VN-HoaiMyNeural',
  edgeVoiceEn: 'en-US-JennyNeural',
  speechRate: 0.95,
  speechPitch: 1.0,
};

export function getTTSSettings(): TTSSettings {
  if (typeof window === 'undefined') return DEFAULT_TTS_SETTINGS;
  try {
    const saved = localStorage.getItem(STORAGE_KEY_TTS_SETTINGS);
    if (saved) {
      return { ...DEFAULT_TTS_SETTINGS, ...JSON.parse(saved) };
    }
  } catch {}
  return DEFAULT_TTS_SETTINGS;
}

export function saveTTSSettings(settings: TTSSettings): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_TTS_SETTINGS, JSON.stringify(settings));
  } catch {}
}

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
let currentAudioElement: HTMLAudioElement | null = null;

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

  // Helper: Play single audio clip from stream with fallback (supports VieNeu-TTS & Edge Neural Voice)
  playAudioClip: async (
    text: string,
    langCode: string,
    rate: number,
    onFinish: () => void,
    onFail: () => void
  ) => {
    const settings = getTTSSettings();

    // 1. Nếu cấu hình chọn VieNeu-TTS (Hugging Face Cloud hoặc FastAPI Server)
    if (settings.provider === 'vieneu') {
      try {
        const endpoint = (settings.vieneuEndpoint || '').trim();

        // 1A. HUGGING FACE CLOUD GRADIO SPACE (https://pnnbao-ump-vieneu-tts.hf.space)
        if (!endpoint || endpoint.includes('hf.space') || endpoint.includes('huggingface.co')) {
          const hfBase = 'https://pnnbao-ump-vieneu-tts.hf.space';
          const headers: Record<string, string> = { 'Content-Type': 'application/json' };
          if (settings.vieneuApiKey) {
            headers['Authorization'] = `Bearer ${settings.vieneuApiKey.trim()}`;
          }

          // Voice mapping for HF Space
          const voiceName = settings.vieneuVoiceId || 'Ngọc (nữ miền Bắc)';

          const callRes = await fetch(`${hfBase}/gradio_api/call/synthesize_speech`, {
            method: 'POST',
            headers,
            body: JSON.stringify({
              data: [text, voiceName, null, '', 'preset'],
            }),
          });

          if (callRes.ok) {
            const callJson = await callRes.json();
            const eventId = callJson.event_id;

            if (eventId) {
              const streamRes = await fetch(`${hfBase}/gradio_api/call/synthesize_speech/${eventId}`, {
                headers,
              });
              const sseText = await streamRes.text();
              const urlMatch = sseText.match(/"url":\s*"([^"]+)"/);

              if (urlMatch && urlMatch[1]) {
                const audioUrl = urlMatch[1];
                const audio = new Audio(audioUrl);
                currentAudioElement = audio;
                audio.playbackRate = rate || settings.speechRate;

                audio.onended = () => {
                  currentAudioElement = null;
                  onFinish();
                };
                audio.onerror = () => {
                  currentAudioElement = null;
                  onFail();
                };
                audio.play().catch(() => {
                  currentAudioElement = null;
                  onFail();
                });
                return;
              }
            }
          }
        } else {
          // 1B. STANDARD REST API / FASTAPI BACKEND
          const payload = {
            text: text,
            voice: settings.vieneuVoiceId || 'default',
            speed: rate || settings.speechRate,
            lang: langCode,
          };

          const res = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              ...(settings.vieneuApiKey ? { Authorization: `Bearer ${settings.vieneuApiKey}` } : {}),
            },
            body: JSON.stringify(payload),
          });

          if (res.ok) {
            const contentType = res.headers.get('content-type') || '';
            let audioUrl = '';

            if (contentType.includes('audio') || contentType.includes('octet-stream')) {
              const blob = await res.blob();
              audioUrl = URL.createObjectURL(blob);
            } else {
              const data = await res.json();
              audioUrl =
                data.audio_url ||
                data.url ||
                (data.audio_base64 ? `data:audio/wav;base64,${data.audio_base64}` : '');
            }

            if (audioUrl) {
              const audio = new Audio(audioUrl);
              currentAudioElement = audio;
              audio.playbackRate = rate || settings.speechRate;

              audio.onended = () => {
                currentAudioElement = null;
                onFinish();
              };
              audio.onerror = () => {
                currentAudioElement = null;
                onFail();
              };
              audio.play().catch(() => {
                currentAudioElement = null;
                onFail();
              });
              return;
            }
          }
        }
      } catch (err) {
        console.warn('VieNeu-TTS server error, falling back to Edge Neural:', err);
      }
    }

    // 2. Mặc định: Microsoft Edge Neural Voice API /api/tts
    try {
      const encoded = encodeURIComponent(text.slice(0, 400));
      const voice = langCode === 'en' ? settings.edgeVoiceEn : settings.edgeVoiceVi;
      const streamUrl = `/api/tts?lang=${langCode}&voice=${voice}&text=${encoded}`;

      const audio = new Audio(streamUrl);
      currentAudioElement = audio;
      audio.playbackRate = rate || settings.speechRate;

      audio.onended = () => {
        currentAudioElement = null;
        onFinish();
      };

      audio.onerror = () => {
        currentAudioElement = null;
        onFail();
      };

      audio.play().catch(() => {
        currentAudioElement = null;
        onFail();
      });
    } catch {
      onFail();
    }
  },

  // Read text out loud with Natural Neural Human Voice Studio stream (fallback to Web Speech)
  speakText: (
    text: string,
    lang: 'vi-VN' | 'en-US' = 'vi-VN',
    onEnd?: () => void,
    pitch: number = 1.0,
    rate: number = 0.95
  ) => {
    // 1. Dừng mọi audio / speech đang phát trước đó
    soundManager.stopSpeaking();

    const cleanText = text.replace(/[*#_~`💡✨⭐🔊🎉🏖️•—]/g, '').trim();
    if (!cleanText) {
      if (onEnd) onEnd();
      return;
    }

    const langCode = lang === 'vi-VN' ? 'vi' : 'en';

    // 2. Chẻ văn bản thành các câu tự nhiên để phát qua Studio Audio Stream
    const rawSentences = cleanText.split(/([.?!;\n]+)/);
    const sentences: string[] = [];
    for (let i = 0; i < rawSentences.length; i += 2) {
      const s = ((rawSentences[i] || '') + (rawSentences[i + 1] || '')).trim();
      if (s && s.length > 1) sentences.push(s);
    }

    if (sentences.length === 0) {
      sentences.push(cleanText);
    }

    // 3. Phát tuần tự từng câu bằng Studio Audio Stream chất lượng cao
    let currentIdx = 0;

    const playNext = () => {
      if (currentIdx >= sentences.length) {
        if (onEnd) onEnd();
        return;
      }

      const sentenceToPlay = sentences[currentIdx];
      currentIdx++;

      soundManager.playAudioClip(
        sentenceToPlay,
        langCode,
        rate,
        () => {
          // Delay nhỏ 120ms giữa các câu để nhịp điệu tự nhiên như cô giáo đọc
          setTimeout(playNext, 120);
        },
        () => {
          // Nếu gặp lỗi mạng thì chuyển sang Web Speech Synthesis
          const remainingText = sentences.slice(currentIdx - 1).join(' ');
          soundManager.speakBrowserSpeech(remainingText, lang, onEnd, pitch, rate);
        }
      );
    };

    playNext();
  },

  // Play SGK Passage audio with 0ms instant static pre-rendered file and fallback
  playPassageAudio: (lessonId: string, fallbackText: string, onEnd?: () => void) => {
    soundManager.stopSpeaking();
    const staticUrl = `/audio/curriculum/${lessonId}.mp3`;
    const audio = new Audio(staticUrl);
    currentAudioElement = audio;

    let hasEnded = false;
    const handleFinish = () => {
      if (!hasEnded) {
        hasEnded = true;
        currentAudioElement = null;
        if (onEnd) onEnd();
      }
    };

    audio.onended = handleFinish;
    audio.onerror = () => {
      currentAudioElement = null;
      soundManager.speakText(fallbackText, 'vi-VN', onEnd);
    };

    audio.play().catch(() => {
      currentAudioElement = null;
      soundManager.speakText(fallbackText, 'vi-VN', onEnd);
    });
  },

  // Fallback Web Speech Synthesis
  speakBrowserSpeech: (
    text: string,
    lang: 'vi-VN' | 'en-US' = 'vi-VN',
    onEnd?: () => void,
    pitch: number = 1.0,
    rate: number = 0.95
  ) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = rate;
      utterance.pitch = pitch;
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
    } else if (onEnd) {
      onEnd();
    }
  },

  // Realtime Mascot spoken feedback on answer check (Correct / Incorrect)
  speakMascotFeedback: (isCorrect: boolean, explanation?: string) => {
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

  // Stop current speech & audio
  stopSpeaking: () => {
    if (currentAudioElement) {
      try {
        currentAudioElement.pause();
        currentAudioElement.currentTime = 0;
      } catch {}
      currentAudioElement = null;
    }
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
