import { TTSSettings } from '../types';
import { getVietnameseAudioAsset } from '../data/curriculum/vietnamese/audioManifest';
import { getQuestionAudioAsset } from '../data/curriculum/questionAudioManifest';
import { retireAudioForFallback } from './audioFallback';

let audioCtx: AudioContext | null = null;

export const STORAGE_KEY_TTS_SETTINGS = 'wonderkids_tts_settings_v2';

export const DEFAULT_TTS_SETTINGS: TTSSettings = {
  voiceVi: 'Cô Giáo Vy', // Cô Giáo Vy (VieNeu TTS Cloned) — Giọng Nữ Miền Nam ngọt ngào, ấm áp ⭐
  voiceEn: 'en-US-JennyNeural',  // Cô Jenny — Chuẩn Mỹ bản xứ
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

export function getBestVoice(lang: 'vi-VN' | 'en-US' = 'vi-VN'): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;

  cachedVoices = window.speechSynthesis.getVoices();
  if (cachedVoices.length === 0) {
    return null;
  }

  const langCode = lang.toLowerCase();
  const shortCode = langCode.split('-')[0];

  // If Vietnamese, filter STRICTLY for Vietnamese voices only
  if (shortCode === 'vi') {
    const viVoices = cachedVoices.filter(
      (v) =>
        v.lang.toLowerCase().includes('vi') ||
        v.name.toLowerCase().includes('vietnam') ||
        v.name.toLowerCase().includes('tiếng việt') ||
        v.name.toLowerCase().includes('hoaimy') ||
        v.name.toLowerCase().includes('namminh')
    );

    if (viVoices.length === 0) return null;

    // Ưu tiên giọng nữ (Cô giáo)
    const femaleVoice = viVoices.find(
      (v) =>
        (v.name.includes('HoaiMy') ||
          v.name.includes('Linh') ||
          v.name.includes('Mai') ||
          v.name.includes('Google') ||
          v.name.includes('Female') ||
          v.name.includes('Nữ') ||
          v.name.includes('nu')) &&
        !v.name.includes('NamMinh') &&
        !v.name.includes('Male') &&
        !v.name.includes('An')
    );
    if (femaleVoice) return femaleVoice;

    // Loại trừ giọng nam nếu có giọng khác
    const nonMale = viVoices.find(
      (v) => !v.name.includes('NamMinh') && !v.name.includes('Male') && !v.name.includes('An')
    );
    return nonMale || viVoices[0];
  }

  // English voices
  const matchingVoices = cachedVoices.filter(
    (v) => v.lang.toLowerCase() === langCode || v.lang.toLowerCase().startsWith(shortCode)
  );

  if (matchingVoices.length === 0) return null;

  const highQuality = matchingVoices.find(
    (v) =>
      v.name.includes('Jenny') ||
      v.name.includes('Google') ||
      v.name.includes('Natural') ||
      v.name.includes('Zira')
  );

  return highQuality || matchingVoices[0];
}

// Initialize voices listener for Web Speech
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
}

let currentAudioElement: HTMLAudioElement | null = null;
let activePassageAudioElement: HTMLAudioElement | null = null;
let audioPlaybackSession = 0;
let activePassageRequest: AbortController | null = null;
let activePassageObjectUrl: string | null = null;

function releasePassageObjectUrl() {
  if (activePassageObjectUrl) {
    URL.revokeObjectURL(activePassageObjectUrl);
    activePassageObjectUrl = null;
  }
}

function stopCurrentAudio() {
  if (!currentAudioElement) return;

  const audio = currentAudioElement;
  audio.onended = null;
  audio.onerror = null;
  audio.pause();
  audio.currentTime = 0;
  if (activePassageAudioElement === audio) activePassageAudioElement = null;
  currentAudioElement = null;
  releasePassageObjectUrl();
}

function applyPlaybackRate(audio: HTMLAudioElement, rate: number): void {
  const safeRate = Number.isFinite(rate) ? Math.min(2, Math.max(0.5, rate)) : 1;
  audio.playbackRate = safeRate;
  audio.preservesPitch = true;
  (audio as HTMLAudioElement & { webkitPreservesPitch?: boolean }).webkitPreservesPitch = true;
}

export const soundManager = {
  play: (type: string) => {
    if (type === 'correct') soundManager.playCorrect();
    else if (type === 'wrong' || type === 'incorrect') soundManager.playIncorrect();
    else if (type === 'pop' || type === 'tap') soundManager.playPop();
    else if (type === 'star') soundManager.playStar();
    else if (type === 'victory') soundManager.playVictory();
    else soundManager.playPop();
  },
  // Play short cute game sound effects (Synthesized Web Audio API)
  playCorrect: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

      // Note 1 (E5)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(659.25, now);
      gain1.gain.setValueAtTime(0.15, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.15);

      // Note 2 (G#5)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(830.61, now + 0.08);
      gain2.gain.setValueAtTime(0.15, now + 0.08);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.25);

      // Note 3 (B5)
      const osc3 = ctx.createOscillator();
      const gain3 = ctx.createGain();
      osc3.type = 'triangle';
      osc3.frequency.setValueAtTime(987.77, now + 0.16);
      gain3.gain.setValueAtTime(0.2, now + 0.16);
      gain3.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc3.connect(gain3);
      gain3.connect(ctx.destination);
      osc3.start(now + 0.16);
      osc3.stop(now + 0.45);
    } catch {}
  },

  playIncorrect: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(329.63, now);
      gain1.gain.setValueAtTime(0.15, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.2);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(261.63, now + 0.15);
      gain2.gain.setValueAtTime(0.15, now + 0.15);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.15);
      osc2.stop(now + 0.45);
    } catch {}
  },

  playPop: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.05);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch {}
  },

  playStar: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5];

      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.06);

        gain.gain.setValueAtTime(0.12, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.25);
      });
    } catch {}
  },

  playLevelUp: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const notes = [440, 554.37, 659.25, 880];

      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);

        gain.gain.setValueAtTime(0.15, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.35);
      });
    } catch {}
  },

  playVictory: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];

      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.09);

        gain.gain.setValueAtTime(0.16, now + i * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.09 + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.09);
        osc.stop(now + i * 0.09 + 0.4);
      });
    } catch {}
  },

  playChestOpen: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const notes = [392.0, 523.25, 659.25, 783.99];

      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.07);

        gain.gain.setValueAtTime(0.14, now + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.3);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.07);
        osc.stop(now + i * 0.07 + 0.3);
      });
    } catch {}
  },

  stopSpeaking: () => {
    audioPlaybackSession += 1;
    activePassageRequest?.abort();
    activePassageRequest = null;
    stopCurrentAudio();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  },

  setPassagePlaybackRate: (rate: number) => {
    if (activePassageAudioElement && currentAudioElement === activePassageAudioElement) {
      applyPlaybackRate(activePassageAudioElement, rate);
    }
  },

  // Helper: Play single audio clip from stream with Google Cloud / Neural Voice endpoint
  playAudioClip: async (
    text: string,
    langCode: string,
    rate: number,
    onFinish: () => void,
    onFail: () => void
  ) => {
    const clean = text.replace(/[*#_~`💡✨⭐🔊🎉🏖️•—]/g, '').trim();
    if (!clean) {
      onFinish();
      return;
    }

    const ttsLang = langCode === 'vi' || langCode === 'vi-VN' ? 'vi' : 'en';

    try {
      const encoded = encodeURIComponent(clean.slice(0, 250));
      const streamUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${ttsLang}&client=tw-ob&q=${encoded}`;

      const audio = new Audio(streamUrl);
      currentAudioElement = audio;
      audio.playbackRate = rate || 1.0;

      audio.onended = () => {
        currentAudioElement = null;
        onFinish();
      };

      audio.onerror = () => {
        currentAudioElement = null;
        onFail();
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          currentAudioElement = null;
          onFail();
        });
      }
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

    // Tự động nhận diện ngôn ngữ thông minh:
    // Nếu câu có dấu tiếng Việt -> dùng giọng Tiếng Việt (Cô Hoài My)
    // Nếu câu thuần tiếng Anh -> dùng giọng Tiếng Anh (Cô Jenny)
    const viRegex = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ]/i;
    const resolvedLang = viRegex.test(cleanText) ? 'vi-VN' : lang;
    const langCode = resolvedLang === 'vi-VN' ? 'vi' : 'en';

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
          setTimeout(playNext, 100);
        },
        () => {
          const remainingText = sentences.slice(currentIdx - 1).join(' ');
          soundManager.speakBrowserSpeech(remainingText, lang, onEnd, pitch, rate);
        }
      );
    };

    playNext();
  },

  // Play exactly one approved Cô Giáo Vy asset. Vietnamese lesson audio does
  // not switch to another file or browser voice when the primary file fails.
  playPassageAudio: (
    lessonId: string,
    _fallbackText: string,
    onEnd?: () => void,
    playbackRate: number = 1,
  ) => {
    soundManager.stopSpeaking();

    const requestSession = audioPlaybackSession;
    const asset = getVietnameseAudioAsset(lessonId);
    const sources = asset ? [asset.primaryPath] : [];

    let currentSourceIdx = 0;
    let hasSettled = false;

    const isCurrentRequest = () => audioPlaybackSession === requestSession;
    const finish = () => {
      if (!isCurrentRequest() || hasSettled) return;
      hasSettled = true;
      activePassageAudioElement = null;
      currentAudioElement = null;
      if (onEnd) onEnd();
    };

    const tryPlayNext = () => {
      if (!isCurrentRequest() || hasSettled) return;
      if (currentSourceIdx >= sources.length) {
        finish();
        return;
      }

      const url = sources[currentSourceIdx];
      currentSourceIdx++;

      const audio = new Audio(url);
      currentAudioElement = audio;
      activePassageAudioElement = audio;
      applyPlaybackRate(audio, playbackRate);

      audio.onended = finish;

      audio.onerror = () => {
        if (!isCurrentRequest() || currentAudioElement !== audio) return;
        retireAudioForFallback(audio);
        if (activePassageAudioElement === audio) activePassageAudioElement = null;
        currentAudioElement = null;
        tryPlayNext();
      };

      audio.play().catch(() => {
        if (!isCurrentRequest() || currentAudioElement !== audio) return;
        retireAudioForFallback(audio);
        if (activePassageAudioElement === audio) activePassageAudioElement = null;
        currentAudioElement = null;
        tryPlayNext();
      });
    };

    tryPlayNext();
  },

  // Play pre-recorded question / game audio if available, with graceful fallback to speakText
  playQuestionAudio: (
    questionId: string,
    fallbackText: string,
    lang: 'vi-VN' | 'en-US' = 'vi-VN',
    onEnd?: () => void
  ) => {
    soundManager.stopSpeaking();

    const requestSession = audioPlaybackSession;
    const asset = getQuestionAudioAsset(questionId);
    const sources = asset ? [asset.primaryPath, asset.fallbackPath].filter(Boolean) as string[] : [];

    let currentSourceIdx = 0;
    let hasSettled = false;

    const isCurrentRequest = () => audioPlaybackSession === requestSession;
    const finish = () => {
      if (!isCurrentRequest() || hasSettled) return;
      hasSettled = true;
      currentAudioElement = null;
      if (onEnd) onEnd();
    };

    const tryPlayNext = () => {
      if (!isCurrentRequest() || hasSettled) return;
      if (currentSourceIdx >= sources.length) {
        soundManager.speakText(fallbackText, lang, onEnd);
        return;
      }

      const url = sources[currentSourceIdx];
      currentSourceIdx++;

      const audio = new Audio(url);
      currentAudioElement = audio;
      audio.onended = finish;
      audio.onerror = () => {
        if (!isCurrentRequest() || currentAudioElement !== audio) return;
        currentAudioElement = null;
        tryPlayNext();
      };
      audio.play().catch(() => {
        if (!isCurrentRequest() || currentAudioElement !== audio) return;
        currentAudioElement = null;
        tryPlayNext();
      });
    };

    if (sources.length > 0) {
      tryPlayNext();
    } else {
      soundManager.speakText(fallbackText, lang, onEnd);
    }
  },

  // Fallback Web Speech Synthesis (NEVER speaks English male voice for Vietnamese)
  speakBrowserSpeech: (
    text: string,
    lang: 'vi-VN' | 'en-US' = 'vi-VN',
    onEnd?: () => void,
    pitch: number = 1.0,
    rate: number = 0.95
  ) => {
    if (typeof window === 'undefined') {
      if (onEnd) onEnd();
      return;
    }

    const clean = text.replace(/[*#_~`💡✨⭐🔊🎉🏖️•—]/g, '').trim();
    if (!clean) {
      if (onEnd) onEnd();
      return;
    }

    const isVietnamese = lang === 'vi-VN';
    const bestVoice = getBestVoice(lang);

    // CRITICAL: If Vietnamese requested, but NO Vietnamese voice is installed in the OS,
    // NEVER pass to window.speechSynthesis.speak because Windows/Chrome will default to Microsoft David (English male)!
    // Instead, play Google Cloud TTS stream directly or end cleanly without playing an English male voice!
    if (isVietnamese && !bestVoice) {
      try {
        const encoded = encodeURIComponent(clean.slice(0, 250));
        const streamUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encoded}`;
        const audio = new Audio(streamUrl);
        currentAudioElement = audio;
        audio.playbackRate = rate || 1.0;
        audio.onended = () => {
          currentAudioElement = null;
          if (onEnd) onEnd();
        };
        audio.onerror = () => {
          currentAudioElement = null;
          if (onEnd) onEnd();
        };
        audio.play().catch(() => {
          currentAudioElement = null;
          if (onEnd) onEnd();
        });
        return;
      } catch {
        if (onEnd) onEnd();
        return;
      }
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(clean);
      utterance.lang = lang;
      utterance.rate = rate;
      utterance.pitch = pitch;
      utterance.volume = 1.0;

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
    soundManager.stopSpeaking();

    if (!explanation) {
      const correctClips = ['dung-roi', 'gioi-qua', 'chinh-xac', 'xuat-sac', 'be-gioi-qua', 'tuyet-voi'];
      const incorrectClips = ['co-len-nao', 'thu-lai-nhe'];

      const clips = isCorrect ? correctClips : incorrectClips;
      const selectedClip = clips[Math.floor(Math.random() * clips.length)];
      const audioUrl = `/audio/feedback/${selectedClip}.wav`;

      const audio = new Audio(audioUrl);
      currentAudioElement = audio;
      audio.play().catch(() => {
        // Fallback to TTS if audio file fails to load
        const fallbackMsg = isCorrect ? 'Đúng rồi! Bé giỏi quá!' : 'Chưa chính xác rồi, bé thử lại nhé!';
        soundManager.speakText(fallbackMsg, 'vi-VN');
      });
      return;
    }

    let message = '';
    if (isCorrect) {
      const compliments = [
        'Tuyệt vời! Bạn trả lời rất chính xác.',
        'Giỏi quá! Đúng rồi bạn ơi.',
        'Xuất sắc! Bé nhận thêm một ngôi sao may mắn nhé.',
        'Đúng rồi! Cùng tiếp tục phát huy ở câu tiếp theo nhé.'
      ];
      const randomComp = compliments[Math.floor(Math.random() * compliments.length)];
      message = `${randomComp} ${explanation}`;
    } else {
      const encourages = [
        'Chưa chính xác rồi bạn nhỏ ơi! Cùng thử lại nhé.',
        'Không sao cả, bé hãy suy nghĩ thêm một chút nào.',
        'Gần đúng rồi! Bé thử chọn lại một lần nữa nhé.'
      ];
      const randomEnc = encourages[Math.floor(Math.random() * encourages.length)];
      message = `${randomEnc} Gợi ý: ${explanation}`;
    }

    soundManager.speakText(message, 'vi-VN');
  }
};

let activeRecognition: any = null;

export const voiceManager = {
  isSupported: () => {
    return (
      typeof window !== 'undefined' &&
      ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)
    );
  },

  startListening: (
    onInterim: (text: string) => void,
    onFinal: (text: string) => void,
    onError: (err: any) => void,
    lang: 'vi-VN' | 'en-US' = 'vi-VN'
  ) => {
    if (typeof window === 'undefined') return;

    const SpeechRecClass =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecClass) {
      onError(new Error('Trình duyệt không hỗ trợ nhận diện giọng nói.'));
      return;
    }

    try {
      if (activeRecognition) {
        activeRecognition.abort();
      }

      const recognition = new SpeechRecClass();
      activeRecognition = recognition;
      recognition.lang = lang;
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event: any) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }

        if (interimTranscript) onInterim(interimTranscript);
        if (finalTranscript) onFinal(finalTranscript);
      };

      recognition.onerror = (event: any) => {
        onError(event);
      };

      recognition.start();
    } catch (e) {
      onError(e);
    }
  },

  stopListening: () => {
    if (activeRecognition) {
      try {
        activeRecognition.stop();
      } catch {}
      activeRecognition = null;
    }
  }
};
