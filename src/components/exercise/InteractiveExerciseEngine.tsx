import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Volume2,
  ArrowLeft,
  HelpCircle,
  ArrowRight,
  RotateCcw,
  Check,
  Sparkles,
  BookOpen,
  Pause,
  X,
  Mic,
  MicOff,
  Radio,
  Zap
} from 'lucide-react';
import { LessonNode, Question, QuestionOption, MatchingPair, ReadingPassage } from '../../types';
import { CuteButton } from '../ui/CuteButton';
import { CandyProgressBar } from '../ui/CandyProgressBar';
import { soundManager, voiceManager } from '../../utils/audio';
import { triggerStarBurst } from '../../utils/confetti';
import { buildLessonNarration } from '../../utils/lessonNarration';
import { getSourcePageView } from '../../utils/sourcePageViewer';
import { canPlayVietnameseReadingAudio, getVietnameseReadingPolicy } from '../../utils/vietnameseReadingPolicy';
import { MathVisualIllustration } from './MathVisualIllustration';
import { LessonThematicBadge } from './LessonThematicBadge';

interface InteractiveExerciseEngineProps {
  lesson: LessonNode;
  onExit: () => void;
  onComplete: (starsEarned: number, xpEarned: number) => void;
}

interface ShadowingSentenceItem {
  id: string;
  text: string;
  cleanWords: string[];
  paragraphIndex: number;
}

// Helper to segment any reading passage into clean sentences
function parseShadowingSentences(passage: ReadingPassage): ShadowingSentenceItem[] {
  const sentences: ShadowingSentenceItem[] = [];
  passage.content.forEach((paragraph, pIdx) => {
    // Split by sentence ending punctuation (. ! ? ; or newline)
    const rawParts = paragraph.split(/([.!?;\n]+)/).filter(Boolean);
    let accumulator = '';
    for (let i = 0; i < rawParts.length; i++) {
      accumulator += rawParts[i];
      if (/[.!?;\n]/.test(rawParts[i]) || i === rawParts.length - 1) {
        const trimmed = accumulator.trim();
        if (trimmed.length > 2) {
          sentences.push({
            id: `sent-${pIdx}-${sentences.length}`,
            text: trimmed,
            cleanWords: trimmed.split(/\s+/),
            paragraphIndex: pIdx,
          });
        }
        accumulator = '';
      }
    }
  });

  return sentences.length > 0
    ? sentences
    : [
        {
          id: 'sent-0',
          text: passage.content.join(' '),
          cleanWords: passage.content.join(' ').split(/\s+/),
          paragraphIndex: 0,
        },
      ];
}

export const InteractiveExerciseEngine: React.FC<InteractiveExerciseEngineProps> = ({
  lesson,
  onExit,
  onComplete,
}) => {
  // Determine if lesson starts with a Reading Passage (e.g. Tiếng Việt & Tiếng Anh bài đọc)
  const hasReadingPassage = !!lesson.readingPassage;
  const vietnameseReadingPolicy = getVietnameseReadingPolicy(lesson);
  const canUseReadingPassage = vietnameseReadingPolicy !== 'source_only';
  const canPlayReadingAudio = canPlayVietnameseReadingAudio(lesson);
  const [engineMode, setEngineMode] = useState<'reading' | 'quiz'>(hasReadingPassage ? 'reading' : 'quiz');
  const [readingTab, setReadingTab] = useState<'full' | 'shadowing'>('full');
  const [sourcePageIndex, setSourcePageIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isReadingDrawerOpen, setIsReadingDrawerOpen] = useState(false);

  // Shadowing Engine State
  const shadowingSentences = useMemo(() => {
    return lesson.readingPassage ? parseShadowingSentences(lesson.readingPassage) : [];
  }, [lesson.readingPassage]);

  const [shadowingIndex, setShadowingIndex] = useState(0);
  const [shadowingSpeed, setShadowingSpeed] = useState<0.8 | 1.0>(1.0);
  const [isAutoAdvance, setIsAutoAdvance] = useState(true);
  const [isPlayingSentenceAudio, setIsPlayingSentenceAudio] = useState(false);
  const [isShadowingRecording, setIsShadowingRecording] = useState(false);
  const [shadowingTranscript, setShadowingTranscript] = useState('');
  const [sentenceScores, setSentenceScores] = useState<Record<string, number>>({});
  const [completedSentences, setCompletedSentences] = useState<string[]>([]);
  const [activeSpokenWord, setActiveSpokenWord] = useState<string | null>(null);

  // STT Voice Reading Practice State (Full passage mode)
  const [isVoiceRecording, setIsVoiceRecording] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  const [voiceScore, setVoiceScore] = useState<number | null>(null);
  const isSpeechSupported = voiceManager.isSupported();

  useEffect(() => {
    setSourcePageIndex(0);
  }, [lesson.id]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [keypadInput, setKeypadInput] = useState<string>('');
  const [writtenResponse, setWrittenResponse] = useState<string>('');
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  const [selectedLeftPair, setSelectedLeftPair] = useState<MatchingPair | null>(null);
  
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongAttempts, setWrongAttempts] = useState(0);

  // Clean reset all states when lesson changes
  useEffect(() => {
    setEngineMode(lesson.readingPassage ? 'reading' : 'quiz');
    setReadingTab('full');
    setIsPlayingAudio(false);
    setIsReadingDrawerOpen(false);
    setShadowingIndex(0);
    setIsPlayingSentenceAudio(false);
    setIsShadowingRecording(false);
    setShadowingTranscript('');
    setSentenceScores({});
    setCompletedSentences([]);
    setActiveSpokenWord(null);
    setIsVoiceRecording(false);
    setVoiceTranscript('');
    setVoiceScore(null);
    setCurrentQuestionIndex(0);
    setSelectedOptionId(null);
    setKeypadInput('');
    setWrittenResponse('');
    setMatchedPairs({});
    setSelectedLeftPair(null);
    setIsAnswerChecked(false);
    setIsCorrect(false);
    setShowHint(false);
    setScore(0);
    setWrongAttempts(0);
    soundManager.stopSpeaking();
    voiceManager.stopListening();
  }, [lesson.id]);

  // Stop speech when unmounting or exiting
  useEffect(() => {
    return () => {
      soundManager.stopSpeaking();
      voiceManager.stopListening();
    };
  }, []);

  const currentQ: Question = lesson.questions[currentQuestionIndex] || lesson.questions[0];
  const isLastQuestion = currentQuestionIndex === lesson.questions.length - 1;

  // Speak question aloud
  const handleReadQuestion = () => {
    if (!currentQ) return;
    const textToRead = currentQ.audioText || currentQ.questionText;
    const lang = lesson.subject === 'english' ? 'en-US' : 'vi-VN';
    soundManager.speakText(textToRead, lang);
  };

  // Play entire Reading Passage audio narration
  const handleTogglePassageAudio = () => {
    if (!lesson.readingPassage || !canPlayVietnameseReadingAudio(lesson)) return;

    if (isPlayingAudio) {
      soundManager.stopSpeaking();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      const narration = buildLessonNarration(lesson.readingPassage);
      soundManager.playPassageAudio(lesson.id, narration, () => {
        setIsPlayingAudio(false);
      });
    }
  };

  // STT Voice Reading Handlers
  const handleStartVoiceReading = () => {
    soundManager.playPop();
    soundManager.stopSpeaking();
    setIsPlayingAudio(false);
    setIsVoiceRecording(true);
    setVoiceTranscript('');
    setVoiceScore(null);

    voiceManager.startListening(
      (interim) => {
        setVoiceTranscript(interim);
      },
      (final) => {
        setVoiceTranscript(final);
        setIsVoiceRecording(false);

        if (lesson.readingPassage) {
          const passageAllWords = lesson.readingPassage.content.join(' ').toLowerCase().split(/\s+/);
          const spokeWords = final.toLowerCase().split(/\s+/);
          const matchCount = spokeWords.filter((w) => passageAllWords.includes(w)).length;
          const calculatedScore = Math.min(100, Math.max(50, Math.round((matchCount / Math.max(1, spokeWords.length)) * 100)));
          setVoiceScore(calculatedScore);

          if (calculatedScore >= 60) {
            soundManager.playCorrect();
            triggerStarBurst();
            soundManager.speakText(`Bé đọc to, rõ ràng và rất chuẩn xác! Cáo MiuMiu tặng bé ${calculatedScore} điểm!`, 'vi-VN');
          } else {
            soundManager.speakText('Bé đọc rất cố gắng! Hãy thử đọc lại to và rõ ràng hơn một chút nhé!', 'vi-VN');
          }
        }
      },
      (err) => {
        setIsVoiceRecording(false);
        console.warn('Voice recognition notice:', err);
      }
    );
  };

  const handleStopVoiceReading = () => {
    soundManager.playPop();
    voiceManager.stopListening();
    setIsVoiceRecording(false);
  };

  // =========================================================================
  // SHADOWING HANDLERS (SENTENCE BY SENTENCE)
  // =========================================================================
  const handlePlayCurrentSentence = (text: string) => {
    soundManager.playPop();
    setIsPlayingSentenceAudio(true);
    const lang = lesson.subject === 'english' ? 'en-US' : 'vi-VN';
    soundManager.speakText(
      text,
      lang,
      () => {
        setIsPlayingSentenceAudio(false);
      },
      1.0,
      shadowingSpeed
    );
  };

  const handleSpeakWord = (word: string) => {
    soundManager.playPop();
    setActiveSpokenWord(word);
    const clean = word.replace(/[.,/#!$%^&*;:{}=\-_`~()?"'“”—–]/g, '');
    const lang = lesson.subject === 'english' ? 'en-US' : 'vi-VN';
    soundManager.speakText(
      clean,
      lang,
      () => {
        setTimeout(() => setActiveSpokenWord(null), 400);
      },
      1.0,
      0.85
    );
  };

  const handleStartShadowing = (currentSent: ShadowingSentenceItem) => {
    soundManager.playPop();
    soundManager.stopSpeaking();
    setIsPlayingSentenceAudio(false);
    setIsShadowingRecording(true);
    setShadowingTranscript('');

    const lang = lesson.subject === 'english' ? 'en-US' : 'vi-VN';

    voiceManager.startListening(
      (interim) => {
        setShadowingTranscript(interim);
      },
      (final) => {
        setShadowingTranscript(final);
        setIsShadowingRecording(false);

        // Word-level matching calculation
        const targetWords = currentSent.cleanWords.map((w) =>
          w.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()?"'“”—–]/g, '')
        );
        const spokeWords = final
          .toLowerCase()
          .split(/\s+/)
          .map((w) => w.replace(/[.,/#!$%^&*;:{}=\-_`~()?"'“”—–]/g, ''));

        const matchCount = spokeWords.filter((w) => targetWords.includes(w)).length;
        const accuracy = Math.min(
          100,
          Math.max(45, Math.round((matchCount / Math.max(1, targetWords.length)) * 100))
        );

        setSentenceScores((prev) => ({ ...prev, [currentSent.id]: accuracy }));

        if (accuracy >= 60) {
          soundManager.playCorrect();
          triggerStarBurst();
          setCompletedSentences((prev) =>
            prev.includes(currentSent.id) ? prev : [...prev, currentSent.id]
          );

          const mascotPraise =
            lesson.subject === 'english'
              ? `Awesome! PiPi awards you ${accuracy}% score!`
              : `Bé đọc rất chuẩn! Cáo MiuMiu tặng bé ${accuracy} điểm!`;
          soundManager.speakText(mascotPraise, lang);

          if (isAutoAdvance && shadowingIndex < shadowingSentences.length - 1) {
            setTimeout(() => {
              setShadowingIndex((prev) => prev + 1);
              setShadowingTranscript('');
            }, 2300);
          }
        } else {
          const encouragement =
            lesson.subject === 'english'
              ? 'Good try! Listen to the native voice and try once more!'
              : 'Bé đọc rất cố gắng! Hãy nghe lại câu mẫu và đọc to rõ hơn chút xíu nhé!';
          soundManager.speakText(encouragement, lang);
        }
      },
      (err) => {
        setIsShadowingRecording(false);
        console.warn('Shadowing STT error/notice:', err);
      }
    );
  };

  const handleStopShadowing = () => {
    soundManager.playPop();
    voiceManager.stopListening();
    setIsShadowingRecording(false);
  };

  // Check user answer with Realtime Mascot Spoken Feedback
  const handleCheckAnswer = () => {
    if (!currentQ) return;
    let correct = false;

    if (currentQ.gradingMode === 'self_confirm') {
      correct = writtenResponse.trim().length > 0;
    } else if (currentQ.type === 'bubble_choice' || currentQ.type === 'audio_listen' || currentQ.type === 'fill_blank' || currentQ.type === 'spelling_blend') {
      const selectedOpt = currentQ.options?.find((opt) => opt.id === selectedOptionId);
      correct = !!selectedOpt?.isCorrect;
    } else if (currentQ.type === 'keypad') {
      correct = keypadInput.trim() === String(currentQ.correctAnswer).trim();
    } else if (currentQ.type === 'drag_drop') {
      const allPairsCount = currentQ.pairs?.length || 0;
      const matchedCount = Object.keys(matchedPairs).length;
      correct = matchedCount === allPairsCount;
    } else if (currentQ.type === 'story_sequence') {
      correct = true;
    }

    setIsCorrect(correct);
    setIsAnswerChecked(true);

    if (correct) {
      soundManager.playCorrect();
      triggerStarBurst();
      setScore((prev) => prev + currentQ.points);
      // Realtime spoken feedback
      soundManager.speakMascotFeedback(true, currentQ.hint);
    } else {
      soundManager.playIncorrect();
      setWrongAttempts((prev) => prev + 1);
      // Realtime spoken encouragement & hint
      soundManager.speakMascotFeedback(false, currentQ.hint);
    }
  };

  // Move to next question or complete lesson
  const handleNext = () => {
    soundManager.stopSpeaking();
    soundManager.playPop();
    if (isLastQuestion) {
      const stars = wrongAttempts === 0 ? 3 : wrongAttempts <= 2 ? 2 : 1;
      const totalXp = score + lesson.xpReward;
      // Reset state so that nothing is pre-selected
      setSelectedOptionId(null);
      setKeypadInput('');
      setWrittenResponse('');
      setMatchedPairs({});
      setSelectedLeftPair(null);
      setIsAnswerChecked(false);
      setIsCorrect(false);
      setShowHint(false);
      onComplete(stars, totalXp);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setKeypadInput('');
      setWrittenResponse('');
      setMatchedPairs({});
      setSelectedLeftPair(null);
      setIsAnswerChecked(false);
      setIsCorrect(false);
      setShowHint(false);
    }
  };

  // Retry same question
  const handleRetry = () => {
    soundManager.stopSpeaking();
    soundManager.playPop();
    setIsAnswerChecked(false);
    setIsCorrect(false);
    setSelectedOptionId(null);
    setKeypadInput('');
    setWrittenResponse('');
    setMatchedPairs({});
    setSelectedLeftPair(null);
    setShowHint(false);
  };

  // Keypad button click
  const handleKeypadPress = (val: string) => {
    soundManager.playPop();
    if (val === 'C') {
      setKeypadInput('');
    } else if (val === '⌫') {
      setKeypadInput((prev) => prev.slice(0, -1));
    } else if (keypadInput.length < 5) {
      setKeypadInput((prev) => prev + val);
    }
  };

  // Pair matching click
  const handleLeftPairClick = (pair: MatchingPair) => {
    soundManager.playPop();
    if (matchedPairs[pair.id]) return;
    setSelectedLeftPair(pair);
  };

  const handleRightPairClick = (rightPair: MatchingPair) => {
    soundManager.playPop();
    if (!selectedLeftPair) return;
    if (selectedLeftPair.id === rightPair.id) {
      soundManager.playCorrect();
      setMatchedPairs((prev) => ({ ...prev, [selectedLeftPair.id]: rightPair.id }));
      setSelectedLeftPair(null);
    } else {
      soundManager.playIncorrect();
      setSelectedLeftPair(null);
    }
  };

  const hasSelectedAnswer = currentQ
    ? currentQ.gradingMode === 'self_confirm'
      ? writtenResponse.trim().length > 0
      : (currentQ.type === 'bubble_choice' || currentQ.type === 'audio_listen' || currentQ.type === 'fill_blank' || currentQ.type === 'spelling_blend')
      ? selectedOptionId !== null
      : currentQ.type === 'keypad'
      ? keypadInput.length > 0
      : currentQ.type === 'drag_drop'
      ? Object.keys(matchedPairs).length === (currentQ.pairs?.length || 0)
      : true
    : false;

  // =========================================================================
  // VIEW 1: BÀI ĐỌC TIẾNG VIỆT & NGHE ĐỌC MẪU (READING PASSAGE VIEW)
  // =========================================================================
  if (engineMode === 'reading' && lesson.readingPassage) {
    const passage = lesson.readingPassage;
    const hasVerifiedSgkReading = vietnameseReadingPolicy === 'verified_sgk'
      && passage.contentOrigin === 'sgk_reference'
      && passage.verificationStatus === 'verified';
    const isVerifiedSgk = lesson.provenance?.contentOrigin === 'sgk_reference'
      && lesson.provenance.verificationStatus === 'verified';
    const isExtraPractice = lesson.catalogSection === 'extra_practice';
    const currentShadowingSentence = shadowingSentences[shadowingIndex] || shadowingSentences[0];
    const currentScore = currentShadowingSentence ? sentenceScores[currentShadowingSentence.id] : undefined;
    const sourcePageView = getSourcePageView(
      lesson.sourcePageImageUrls || [],
      lesson.sourceCitation?.sourcePages,
      sourcePageIndex,
    );

    return (
      <div className="min-h-[calc(100vh-5rem)] pb-28 pt-4 sm:pt-6">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 space-y-6">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-200/80 bg-white/85 p-4 shadow-xs backdrop-blur-md rounded-3xl">
            <div className="order-1 flex items-center gap-3">
              <button
                onClick={() => {
                  soundManager.stopSpeaking();
                  voiceManager.stopListening();
                  soundManager.playPop();
                  onExit();
                }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-xs border border-slate-200 text-slate-600 hover:bg-amber-50 hover:text-amber-700 transition-colors cursor-pointer shrink-0"
                title="Quay lại danh sách bài"
              >
                <ArrowLeft size={20} />
              </button>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base">📖</span>
                  <span className="font-baloo font-bold text-xs sm:text-sm text-amber-800 uppercase tracking-wider">
                    {lesson.unit}
                  </span>
                </div>
                <div className="font-baloo text-sm sm:text-base font-extrabold text-slate-600">
                  {lesson.title}
                </div>
              </div>
            </div>

            {canUseReadingPassage && <div className="order-3 flex w-full sm:order-2 sm:w-auto sm:flex-1 sm:justify-center">
              <div className="flex max-w-md items-center justify-center gap-2 rounded-3xl bg-amber-50/80 p-1.5">
                <button
                  onClick={() => {
                    soundManager.playPop();
                    soundManager.stopSpeaking();
                    voiceManager.stopListening();
                    setIsPlayingAudio(false);
                    setIsPlayingSentenceAudio(false);
                    setIsShadowingRecording(false);
                    setReadingTab('full');
                  }}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-2xl px-4 py-2 font-baloo text-xs font-extrabold transition-all cursor-pointer sm:text-sm ${
                    readingTab === 'full'
                      ? 'bg-amber-400 text-amber-950 shadow-pop-xs scale-102 border-2 border-amber-500'
                      : 'text-slate-600 hover:text-brand-dark hover:bg-white/70'
                  }`}
                >
                  <span>📖</span>
                  <span className="whitespace-nowrap">Đọc Toàn Bài</span>
                </button>

                <button
                  onClick={() => {
                    soundManager.playPop();
                    soundManager.stopSpeaking();
                    voiceManager.stopListening();
                    setIsPlayingAudio(false);
                    setIsPlayingSentenceAudio(false);
                    setIsVoiceRecording(false);
                    setReadingTab('shadowing');
                  }}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-2xl px-4 py-2 font-baloo text-xs font-extrabold transition-all cursor-pointer sm:text-sm ${
                    readingTab === 'shadowing'
                      ? 'bg-purple-600 text-white shadow-pop-xs scale-102 border-2 border-purple-700'
                      : 'text-slate-600 hover:text-purple-900 hover:bg-white/70'
                  }`}
                >
                  <span>🎙️</span>
                  <span className="whitespace-nowrap">Luyện Shadowing</span>
                  <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-ping" />
                </button>
              </div>
            </div>}

            {/* Audio Read Aloud Button: khóa trong thời gian duyệt transcript SGK. */}
            {canUseReadingPassage && <button
              onClick={handleTogglePassageAudio}
              disabled={!canPlayReadingAudio}
              title={canPlayReadingAudio ? 'Nghe toàn bộ bài đọc' : 'Audio mẫu sẽ được bổ sung sau khi duyệt nội dung'}
              className={`order-2 flex shrink-0 items-center gap-2 rounded-2xl px-4 py-2.5 font-baloo text-sm font-bold whitespace-nowrap transition-all shadow-xs sm:order-3 ${
                isPlayingAudio
                  ? 'bg-rose-500 text-white animate-pulse shadow-pop-sm'
                  : 'bg-amber-400 text-amber-950 shadow-pop-sm hover:bg-amber-300'
              } disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:bg-amber-400`}
            >
              {isPlayingAudio ? (
                <>
                  <Pause size={18} />
                  <span>Dừng đọc mẫu</span>
                </>
              ) : (
                <>
                  <Volume2 size={18} />
                  <span>Nghe toàn bài</span>
                </>
              )}
            </button>}
          </div>

          <div className={`grid items-start gap-6 ${sourcePageView ? 'xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]' : ''}`}>
            {sourcePageView && (
              <section
                className="relative overflow-hidden rounded-4xl border border-amber-200/70 bg-[#fffdfa] p-4 shadow-washi sm:p-6 xl:sticky xl:top-4"
                aria-labelledby="sgk-source-heading"
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="font-baloo text-xs font-black uppercase tracking-wider text-amber-700">
                      {isVerifiedSgk || hasVerifiedSgkReading ? 'Nội dung bài học' : 'Tài liệu để đối chiếu'}
                    </p>
                    <h2 id="sgk-source-heading" className="font-baloo text-xl font-black text-brand-dark sm:text-2xl">
                      {isVerifiedSgk || hasVerifiedSgkReading ? 'Nội dung SGK' : 'Trang sách tham khảo'}
                    </h2>
                  </div>
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    {!isVerifiedSgk && !hasVerifiedSgkReading && (
                      <span className="rounded-full bg-slate-100 px-3 py-1 font-baloo text-xs font-bold text-slate-600">
                        Chờ duyệt đối chiếu
                      </span>
                    )}
                    <span className="rounded-full bg-amber-100 px-3 py-1 font-baloo text-xs font-bold text-amber-900">
                      Trang {sourcePageView.pageNumber}
                    </span>
                  </div>
                </div>

                <figure className="flex h-[58vh] min-h-[430px] max-h-[760px] items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] sm:h-[66vh]">
                  <img
                    src={sourcePageView.imageUrl}
                    alt={`Trang ${sourcePageView.pageNumber} - ${lesson.title}`}
                    loading="eager"
                    className="h-full w-auto max-w-full object-contain"
                  />
                </figure>

                <nav className="mt-4 flex items-center justify-between gap-3" aria-label="Lật trang SGK">
                  <button
                    type="button"
                    disabled={!sourcePageView.hasPrevious}
                    onClick={() => setSourcePageIndex((current) => Math.max(0, current - 1))}
                    className="flex min-h-11 items-center gap-1.5 rounded-2xl bg-slate-100 px-4 py-2 font-baloo text-sm font-bold text-slate-700 transition-colors hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ArrowLeft size={17} />
                    Trang trước
                  </button>
                  <span className="font-baloo text-sm font-black text-amber-900">
                    {sourcePageView.index + 1} / {sourcePageView.total}
                  </span>
                  <button
                    type="button"
                    disabled={!sourcePageView.hasNext}
                    onClick={() => setSourcePageIndex((current) => Math.min(sourcePageView.total - 1, current + 1))}
                    className="flex min-h-11 items-center gap-1.5 rounded-2xl bg-amber-400 px-4 py-2 font-baloo text-sm font-bold text-amber-950 transition-colors hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Trang sau
                    <ArrowRight size={17} />
                  </button>
                </nav>
              </section>
            )}

            <div className="min-w-0">
          {!canUseReadingPassage && (
            <section className="relative rounded-4xl border border-sky-200 bg-white p-6 shadow-washi sm:p-8" aria-labelledby="source-only-heading">
              <div className="absolute -top-3 left-1/2 h-6 w-40 -translate-x-1/2 -rotate-1 rounded-sm border border-sky-300/50 bg-sky-200/70" />
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-2xl">📖</span>
                <div className="space-y-3">
                  <h2 id="source-only-heading" className="font-baloo text-xl font-black text-brand-dark sm:text-2xl">
                    Đọc nguyên văn trong trang sách
                  </h2>
                  <p className="font-vietnam text-base font-semibold leading-relaxed text-slate-700">
                    {sourcePageView
                      ? 'Bài đọc và hoạt động chính nằm ở trang SGK bên trái. Phần chữ và giọng đọc mẫu chỉ mở khi đã được đối chiếu chính xác với sách.'
                      : 'Bài này đang được rà soát lại tên bài và trang sách. Nội dung chữ và giọng đọc mẫu tạm thời được khóa để tránh học sai.'}
                  </p>
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 font-baloo text-sm font-bold text-emerald-900">
                    🌱 Bé vẫn có thể làm phần luyện tập bổ sung ở bước tiếp theo.
                  </div>
                </div>
              </div>
            </section>
          )}
          {/* ================================================================= */}
          {/* TAB 1: ĐỌC TOÀN BÀI (FULL READING SCRAPBOOK CARD) */}
          {/* ================================================================= */}
          {canUseReadingPassage && readingTab === 'full' && (
            <div className="rounded-4xl bg-[#fffdfa] p-6 sm:p-10 shadow-washi border border-amber-200/70">

              {isExtraPractice && !hasVerifiedSgkReading && (
                <div className="mb-5 flex items-center gap-2 font-baloo text-sm font-black text-emerald-800">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100">🌱</span>
                  <span>{vietnameseReadingPolicy === 'supplement' ? 'Luyện đọc bổ sung' : 'Tóm tắt, nghe đọc và rèn luyện'}</span>
                </div>
              )}

              {/* Passage Header Block (Centered, Balanced & Symmetrical) */}
              <div className="text-center border-b border-amber-200/50 pb-6 mb-6 space-y-2">
                {/* Main Reading Title with Cute Thematic Sticker Badge */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 pt-1">
                  <LessonThematicBadge
                    lessonId={lesson.id}
                    lessonNumber={lesson.order || (lesson.id.match(/b(\d+)/) ? parseInt(lesson.id.match(/b(\d+)/)![1]) : 2)}
                    lessonTitle={passage.title}
                    subject={lesson.subject}
                    grade={lesson.grade}
                    size="md"
                  />
                  <div className="text-center sm:text-left">
                    <h2 className="font-baloo text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-950 tracking-wide">
                      {passage.title}
                    </h2>
                    {passage.author && (
                      <p className="font-vietnam italic text-xs sm:text-sm font-semibold text-amber-800/80 mt-1">
                        Nguồn nội dung: {passage.author}
                      </p>
                    )}
                  </div>
                </div>

                {/* Decorative warm accent line */}
                <div className="w-20 sm:w-28 h-1 bg-amber-300/70 rounded-full mx-auto mt-3" />
              </div>

              {/* Passage Body Paragraphs / Verses */}
              <div className="space-y-6">
                {passage.content.map((paragraph, pIdx) => (
                  <div
                    key={pIdx}
                    className={`font-vietnam text-base sm:text-lg md:text-xl text-slate-800 leading-relaxed sm:leading-loose ${
                      passage.genre === 'poem'
                        ? 'text-center font-medium space-y-1.5 whitespace-pre-line'
                        : 'text-justify indent-6 sm:indent-8'
                    }`}
                  >
                    {paragraph}
                  </div>
                ))}
              </div>

              {/* Audio Wave Animated Bar */}
              {isPlayingAudio && (
                <div className="mt-8 p-3 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center gap-3 font-baloo text-xs font-bold text-amber-900 animate-pulse">
                  <Radio className="h-4 w-4 animate-spin text-amber-600" />
                  <span>Đang phát giọng đọc mẫu diễn cảm... Bé hãy lắng nghe và đọc nhẩm theo nhé!</span>
                </div>
              )}

              {/* STT Voice Reading Practice */}
              {canPlayReadingAudio && isSpeechSupported && (
                <div className="mt-8 p-5 rounded-3xl bg-gradient-to-r from-purple-50 via-pink-50 to-amber-50 border-2 border-purple-200/80 space-y-3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-600 text-white shadow-xs">
                        <Mic size={20} />
                      </div>
                      <div>
                        <h4 className="font-baloo font-extrabold text-base sm:text-lg text-purple-950">
                          Góc Bé Luyện Đọc Bằng Giọng Nói (STT) 🎙️
                        </h4>
                        <p className="font-vietnam text-xs font-semibold text-purple-800/80">
                          Nhấn Micro và đọc to bài đọc cho Cáo MiuMiu chấm điểm nhé!
                        </p>
                      </div>
                    </div>

                    <div>
                      {!isVoiceRecording ? (
                        <button
                          type="button"
                          onClick={handleStartVoiceReading}
                          className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-baloo font-bold text-sm shadow-pop-sm cursor-pointer"
                        >
                          <Mic size={18} />
                          <span>Bé Bắt Đầu Đọc</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleStopVoiceReading}
                          className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-baloo font-bold text-sm shadow-pop-sm animate-pulse cursor-pointer"
                        >
                          <MicOff size={18} />
                          <span>Đang Lắng Nghe... (Dừng)</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Realtime voice transcript display */}
                  {isVoiceRecording && (
                    <div className="p-3.5 rounded-2xl bg-white/90 border border-purple-200 font-vietnam text-sm text-slate-700 flex items-center gap-2 animate-fade-in">
                      <span className="flex h-2.5 w-2.5 rounded-full bg-rose-500 animate-ping shrink-0" />
                      <span className="italic">
                        {voiceTranscript || 'Đang lắng nghe giọng đọc của bé...'}
                      </span>
                    </div>
                  )}

                  {voiceScore !== null && (
                    <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between font-baloo font-bold text-sm text-emerald-900 animate-fade-in">
                      <span>🎉 Giọng đọc của bé đạt: <strong>{voiceScore}/100 Điểm</strong></span>
                      <span className="text-amber-500 font-extrabold text-base">+{Math.round(voiceScore / 30)} ⭐</span>
                    </div>
                  )}
                </div>
              )}

              {/* Vocabulary Explanations */}
              {passage.vocabularyNotes && passage.vocabularyNotes.length > 0 && (
                <div className="mt-8 pt-6 border-t-2 border-dashed border-amber-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-base">💡</span>
                    <h4 className="font-baloo font-extrabold text-sm sm:text-base text-amber-900">
                      Góc Chú Giải Từ Ngữ:
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {passage.vocabularyNotes.map((vocab, vIdx) => (
                      <div
                        key={vIdx}
                        className="p-3 rounded-2xl bg-white border border-amber-100 shadow-2xs font-vietnam text-xs text-slate-700"
                      >
                        <strong className="font-baloo text-amber-900 text-sm font-extrabold mr-1">
                          • {vocab.word}:
                        </strong>
                        <span>{vocab.meaning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(isVerifiedSgk || hasVerifiedSgkReading) && lesson.sourceCitation && (
                <footer className="mt-8 border-t border-amber-200/70 pt-4 font-vietnam text-xs font-semibold leading-relaxed text-slate-600">
                  <span className="font-bold text-amber-900">Nguồn đối chiếu:</span>{' '}
                  {lesson.sourceCitation.sourceLabel}
                  {lesson.referenceUrl && (
                    <> — <a className="underline hover:text-amber-700" href={lesson.referenceUrl} target="_blank" rel="noreferrer">mở sách nguồn</a></>
                  )}
                </footer>
              )}
            </div>
          )}

          {/* ================================================================= */}
          {/* TAB 2: CHẾ ĐỘ SHADOWING (LUYỆN NGHE & ĐỌC NHẠI TỪNG CÂU) */}
          {/* ================================================================= */}
          {canUseReadingPassage && readingTab === 'shadowing' && (
            <div className="rounded-4xl bg-[#fffdfa] p-5 sm:p-8 md:p-10 shadow-washi border border-purple-200/80 space-y-6">
              {/* Top Shadowing Bar: Sentence Selector Bubbles + Speed + Auto-advance */}
              <div className="border-b border-purple-100 pb-5">
                {/* Sentence Progress Pills */}
                <div className="grid w-full grid-cols-4 gap-1.5 sm:grid-cols-8">
                  {shadowingSentences.map((sent, sIdx) => {
                    const isCurrent = sIdx === shadowingIndex;
                    const isDone = completedSentences.includes(sent.id);
                    return (
                      <button
                        key={sent.id}
                        onClick={() => {
                          soundManager.playPop();
                          setShadowingIndex(sIdx);
                          setShadowingTranscript('');
                          soundManager.stopSpeaking();
                          voiceManager.stopListening();
                          setIsPlayingSentenceAudio(false);
                          setIsShadowingRecording(false);
                        }}
                        className={`flex h-10 w-full items-center justify-center rounded-full font-baloo text-xs font-extrabold transition-all cursor-pointer sm:h-11 sm:text-sm ${
                          isCurrent
                            ? 'bg-purple-600 text-white shadow-pop-xs scale-105 ring-2 ring-purple-300'
                            : isDone
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-slate-100 text-slate-600 hover:bg-purple-50'
                        }`}
                        title={`Câu ${sIdx + 1}${isDone ? ' (Đã hoàn thành)' : ''}`}
                      >
                        {isDone ? `✓ ${sIdx + 1}` : sIdx + 1}
                      </button>
                    );
                  })}
                </div>

                {/* Speed Controls & Auto-advance */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                  {/* Speed Toggle (0.8x / 1.0x) */}
                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-full border border-slate-200 text-xs font-baloo font-bold">
                    <button
                      onClick={() => {
                        soundManager.playPop();
                        setShadowingSpeed(0.8);
                      }}
                      className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                        shadowingSpeed === 0.8
                          ? 'bg-purple-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-brand-dark'
                      }`}
                    >
                      0.8x Chậm
                    </button>
                    <button
                      onClick={() => {
                        soundManager.playPop();
                        setShadowingSpeed(1.0);
                      }}
                      className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                        shadowingSpeed === 1.0
                          ? 'bg-purple-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-brand-dark'
                      }`}
                    >
                      1.0x Chuẩn
                    </button>
                  </div>

                  {/* Auto-Advance Switch */}
                  <button
                    onClick={() => {
                      soundManager.playPop();
                      setIsAutoAdvance(!isAutoAdvance);
                    }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-baloo font-bold text-xs border transition-all cursor-pointer ${
                      isAutoAdvance
                        ? 'bg-amber-100 text-amber-900 border-amber-300 shadow-2xs'
                        : 'bg-slate-100 text-slate-500 border-slate-200'
                    }`}
                    title="Tự động chuyển câu tiếp theo sau khi đọc đạt chuẩn"
                  >
                    <Zap size={13} className={isAutoAdvance ? 'text-amber-600 fill-amber-500' : 'text-slate-400'} />
                    <span>Tự động chuyển</span>
                  </button>
                </div>
              </div>

              {/* Active Sentence Hero Display */}
              {currentShadowingSentence && (
                <div className="space-y-6">
                  <div className="text-center space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/90 text-purple-900 border border-purple-200 font-baloo font-extrabold text-xs">
                      <span>🎧 Câu {shadowingIndex + 1} / {shadowingSentences.length}</span>
                      {completedSentences.includes(currentShadowingSentence.id) && (
                        <span className="text-emerald-700">★ Đã hoàn thành</span>
                      )}
                    </div>

                    {/* Interactive Word Chips (Click-to-speak) */}
                    <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                      {currentShadowingSentence.cleanWords.map((word, wIdx) => {
                        const isWordActive = activeSpokenWord === word;
                        return (
                          <button
                            key={wIdx}
                            type="button"
                            onClick={() => handleSpeakWord(word)}
                            className={`px-2.5 py-1.5 rounded-xl font-vietnam text-xl sm:text-2xl md:text-3xl font-extrabold transition-all cursor-pointer ${
                              isWordActive
                                ? 'bg-purple-600 text-white scale-110 shadow-pop-xs'
                                : 'text-brand-dark hover:text-purple-700 hover:bg-purple-100/60 hover:scale-105 active:scale-95'
                            }`}
                            title={`Bấm để nghe phát âm riêng từ: "${word}"`}
                          >
                            {word}
                          </button>
                        );
                      })}
                    </div>

                    <p className="font-vietnam text-xs sm:text-sm font-semibold text-slate-500 italic">
                      💡 Bé có thể chạm vào bất kỳ từ nào ở trên để nghe phát âm riêng từng từ nhé!
                    </p>
                  </div>

                  {/* Audio & Shadowing Action Controls (3D Tactile Buttons) */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                    {/* 1. Play Sentence Audio */}
                    <button
                      type="button"
                      onClick={() => handlePlayCurrentSentence(currentShadowingSentence.text)}
                      className={`flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-3xl font-baloo font-black text-sm sm:text-base transition-all shadow-pop-sm cursor-pointer min-w-[200px] ${
                        isPlayingSentenceAudio
                          ? 'bg-rose-500 text-white animate-pulse'
                          : 'bg-gradient-to-tr from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 text-amber-950 hover:scale-102'
                      }`}
                    >
                      {isPlayingSentenceAudio ? (
                        <>
                          <Radio className="h-5 w-5 animate-spin" />
                          <span>Đang Đọc Mẫu...</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="h-5 w-5" />
                          <span>1. Nghe Câu Mẫu ({shadowingSpeed}x)</span>
                        </>
                      )}
                    </button>

                    {/* 2. Record Shadowing (Speak & AI Evaluation) */}
                    {!isShadowingRecording ? (
                      <button
                        type="button"
                        onClick={() => handleStartShadowing(currentShadowingSentence)}
                        className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-3xl bg-gradient-to-tr from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-baloo font-black text-sm sm:text-base shadow-pop-sm hover:scale-102 transition-all cursor-pointer min-w-[200px]"
                      >
                        <Mic className="h-5 w-5" />
                        <span>2. Bé Bấm Đọc Theo (Shadowing)</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleStopShadowing}
                        className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-3xl bg-rose-500 hover:bg-rose-600 text-white font-baloo font-black text-sm sm:text-base shadow-pop-sm animate-pulse transition-all cursor-pointer min-w-[200px]"
                      >
                        <MicOff className="h-5 w-5 animate-bounce" />
                        <span>Đang Lắng Nghe... (Bấm Xong)</span>
                      </button>
                    )}
                  </div>

                  {/* Live Transcript & Realtime Speech Matching Box */}
                  {isShadowingRecording && (
                    <div className="p-4 rounded-2xl bg-purple-50 border-2 border-purple-200 font-vietnam text-sm text-purple-950 flex items-center justify-center gap-2.5 animate-fade-in text-center">
                      <span className="flex h-3 w-3 rounded-full bg-rose-500 animate-ping shrink-0" />
                      <span className="italic font-medium">
                        {shadowingTranscript || 'Đang lắng nghe bé đọc theo câu mẫu... Hãy đọc to và rõ ràng nhé! 🎙️'}
                      </span>
                    </div>
                  )}

                  {/* AI Evaluation Score & Matched Words Display */}
                  {currentScore !== undefined && !isShadowingRecording && (
                    <div
                      className={`p-4 sm:p-5 rounded-3xl border-2 space-y-2 animate-fade-in ${
                        currentScore >= 60
                          ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
                          : 'bg-amber-50/90 border-amber-300 text-amber-950'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{currentScore >= 60 ? '🎉' : '💪'}</span>
                          <h5 className="font-baloo font-extrabold text-base sm:text-lg">
                            {currentScore >= 60
                              ? 'Bé Phát Âm Rất Chuẩn Xác!'
                              : 'Bé Rất Cố Gắng! Hãy Thử Lại Một Lần Nữa Nhé!'}
                          </h5>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white font-baloo font-black text-sm shadow-2xs">
                          <span className={currentScore >= 60 ? 'text-emerald-700' : 'text-amber-700'}>
                            {currentScore}%
                          </span>
                          {currentScore >= 60 && <span className="text-amber-500">⭐ +5 XP</span>}
                        </div>
                      </div>

                      {shadowingTranscript && (
                        <p className="font-vietnam text-xs sm:text-sm text-slate-700">
                          <strong>Bé vừa đọc:</strong> &ldquo;{shadowingTranscript}&rdquo;
                        </p>
                      )}
                    </div>
                  )}

                  {/* Navigation Controls: Previous / Next Sentence */}
                  <div className="flex items-center justify-between pt-4 border-t border-purple-100">
                    <button
                      type="button"
                      disabled={shadowingIndex === 0}
                      onClick={() => {
                        soundManager.playPop();
                        setShadowingIndex((prev) => Math.max(0, prev - 1));
                        setShadowingTranscript('');
                      }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-2xl font-baloo font-bold text-xs sm:text-sm bg-slate-100 text-slate-700 hover:bg-purple-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                    >
                      <ArrowLeft size={16} />
                      <span>Câu Trước</span>
                    </button>

                    <span className="font-baloo font-extrabold text-xs sm:text-sm text-slate-500">
                      {shadowingIndex + 1} / {shadowingSentences.length}
                    </span>

                    <button
                      type="button"
                      disabled={shadowingIndex === shadowingSentences.length - 1}
                      onClick={() => {
                        soundManager.playPop();
                        setShadowingIndex((prev) => Math.min(shadowingSentences.length - 1, prev + 1));
                        setShadowingTranscript('');
                      }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-2xl font-baloo font-bold text-xs sm:text-sm bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-pop-xs"
                    >
                      <span>Câu Tiếp Theo</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
            </div>
          </div>

          {/* Bottom Call to Action: Start Comprehension Quiz */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-3xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100 border-2 border-amber-200/80 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🦊</span>
              <div>
                <h4 className="font-baloo font-extrabold text-base text-amber-950">
                  Cáo MiuMiu đồng hành:
                </h4>
                <p className="font-vietnam text-xs font-semibold text-amber-900/80">
                  {canUseReadingPassage
                    ? 'Bé đã đọc kỹ bài chưa? Nhấn nút bên cạnh để trả lời các câu hỏi đọc hiểu nhận Sao Vàng nhé!'
                    : 'Sau khi xem trang sách, bé có thể chuyển sang các hoạt động luyện tập bổ sung.'}
                </p>
              </div>
            </div>

            <CuteButton
              variant="vietnamese"
              size="lg"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              onClick={() => {
                soundManager.stopSpeaking();
                voiceManager.stopListening();
                setIsPlayingAudio(false);
                soundManager.playPop();
                setEngineMode('quiz');
              }}
            >
              {canUseReadingPassage ? 'Con Đã Đọc Xong - Trả Lời Câu Hỏi ⭐' : 'Vào Phần Luyện Tập ⭐'}
            </CuteButton>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: TRẢ LỜI CÂU HỎI ĐỌC HIỂU & LUYỆN TẬP (COMPREHENSION QUIZ VIEW)
  // =========================================================================
  return (
    <div className="min-h-[calc(100vh-5rem)] pb-28 pt-4 sm:pt-6">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Exercise Header */}
        <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
          {/* Back button */}
          <button
            onClick={() => {
              soundManager.stopSpeaking();
              soundManager.playPop();
              if (hasReadingPassage && engineMode === 'quiz') {
                setEngineMode('reading');
              } else {
                onExit();
              }
            }}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-xs border border-slate-200 text-slate-600 hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer"
            title={hasReadingPassage ? 'Xem lại bài đọc' : 'Thoát bài học'}
          >
            <ArrowLeft size={20} />
          </button>

          {/* Progress Bar & Counter */}
          <div className="flex-1 max-w-md">
            <div className="flex justify-between text-xs font-baloo font-bold text-slate-500 mb-1">
              <span>Câu hỏi {currentQuestionIndex + 1} / {lesson.questions.length}</span>
              <span className="text-emerald-700 font-extrabold">Điểm: {score} XP ⭐</span>
            </div>
            <CandyProgressBar
              value={currentQuestionIndex + 1}
              max={lesson.questions.length}
              color={lesson.subject as 'math' | 'vietnamese' | 'english'}
              height="md"
              showStarIndicator={false}
            />
          </div>

          <div className="flex items-center gap-2">
            {/* View Reading Passage Drawer Toggle */}
            {hasReadingPassage && canUseReadingPassage && (
              <button
                onClick={() => {
                  soundManager.playPop();
                  setIsReadingDrawerOpen(true);
                }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-amber-100 text-amber-900 border border-amber-300 font-baloo font-bold text-xs hover:bg-amber-200 transition-colors shadow-2xs cursor-pointer"
                title="Mở xem lại bài đọc"
              >
                <BookOpen size={16} />
                <span className="hidden sm:inline">Xem bài đọc</span>
              </button>
            )}

            {/* Read aloud button */}
            <button
              onClick={handleReadQuestion}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 border-2 border-emerald-200 shadow-xs hover:bg-emerald-100 transition-colors cursor-pointer"
              title="Đọc to câu hỏi (Nhấn để nghe giọng đọc)"
            >
              <Volume2 size={20} />
            </button>
          </div>
        </div>

        {/* Question Container Card */}
        {currentQ && (
          <motion.div
            key={currentQ.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mt-6 rounded-4xl border border-amber-100/60 bg-[#fffdfa] p-6 sm:p-8 shadow-washi backdrop-blur-md"
          >
            {/* Provenance Badge */}
            {lesson.subject === 'vietnamese' && lesson.catalogSection === 'extra_practice' ? (
              <div className="mb-3 flex flex-wrap items-center gap-1.5 font-baloo font-bold text-xs text-emerald-950 bg-emerald-100/90 border border-emerald-300/80 px-3.5 py-1 rounded-full w-fit">
                <span>🌱</span>
                <span className="font-extrabold">Hoạt động Luyện thêm</span>
              </div>
            ) : lesson.textbookPageRef && (
              <div className="mb-3 flex items-center gap-1.5 font-baloo font-bold text-xs text-amber-900 bg-amber-100/90 border border-amber-300/80 px-3.5 py-1 rounded-full w-fit">
                <span>📖</span>
                <span>{lesson.textbookPageRef}</span>
              </div>
            )}

            {/* Question Text with Speaker Badge */}
            <div className="flex items-start justify-between gap-4">
              <div>
                {currentQ.instruction && (
                  <span className="inline-block rounded-full bg-amber-100/70 border border-amber-200 px-3 py-1 font-baloo text-xs font-bold text-amber-900 mb-2">
                    {currentQ.instruction}
                  </span>
                )}
                <h2 className="font-baloo text-xl sm:text-2xl lg:text-3xl font-extrabold text-brand-dark leading-relaxed">
                  {currentQ.questionText}
                </h2>
              </div>
            </div>

            {currentQ.gradingMode === 'self_confirm' && (
              <div className="mt-6 rounded-3xl bg-emerald-50/70 p-4 sm:p-5 border border-emerald-200">
                <label htmlFor={`response-${currentQ.id}`} className="block font-baloo font-black text-base sm:text-lg text-emerald-900">
                  Viết câu trả lời của em
                </label>
                <textarea
                  id={`response-${currentQ.id}`}
                  value={writtenResponse}
                  onChange={(event) => setWrittenResponse(event.target.value)}
                  disabled={isAnswerChecked}
                  rows={4}
                  placeholder="Em viết câu trả lời ở đây nhé..."
                  className="mt-3 min-h-[112px] w-full resize-y rounded-2xl border-2 border-emerald-200 bg-white px-4 py-3 font-vietnam text-base sm:text-lg font-medium text-brand-dark outline-none transition-colors placeholder:text-slate-400 focus:border-emerald-500 disabled:cursor-not-allowed disabled:bg-slate-50"
                />
                <p className="mt-2 font-vietnam text-sm font-semibold text-emerald-800">
                  Hoạt động nói hoặc viết được bé tự xác nhận sau khi hoàn thành.
                </p>
              </div>
            )}

            {/* Spelling Blend Interactive Machine */}
            {currentQ.type === 'spelling_blend' && currentQ.spellingData && (
              <div className="mt-5 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 border-2 border-amber-200 text-center space-y-4">
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-baloo text-2xl sm:text-4xl font-extrabold text-amber-950">
                  <div className="flex flex-col items-center bg-white px-4 py-2.5 rounded-2xl border-2 border-amber-300 shadow-xs">
                    <span>{currentQ.spellingData.initial}</span>
                    <span className="text-[10px] sm:text-xs text-slate-400 font-vietnam font-semibold">Âm đầu</span>
                  </div>
                  <span>+</span>
                  <div className="flex flex-col items-center bg-white px-4 py-2.5 rounded-2xl border-2 border-amber-300 shadow-xs text-amber-600">
                    <span>{currentQ.spellingData.vowel}</span>
                    <span className="text-[10px] sm:text-xs text-slate-400 font-vietnam font-semibold">Âm chính</span>
                  </div>
                  <span>+</span>
                  <div className="flex flex-col items-center bg-white px-3 sm:px-4 py-2.5 rounded-2xl border-2 border-amber-300 shadow-xs text-orange-600">
                    <span className="text-xl sm:text-2xl">{currentQ.spellingData.tone}</span>
                    <span className="text-[10px] sm:text-xs text-slate-400 font-vietnam font-semibold">Dấu thanh</span>
                  </div>
                  <span>=</span>
                  <div className="flex flex-col items-center bg-amber-400 text-amber-950 px-5 py-2.5 rounded-2xl border-2 border-amber-500 shadow-pop-sm animate-bounce-subtle">
                    <span>{currentQ.spellingData.result}</span>
                    <span className="text-[10px] sm:text-xs text-amber-900 font-vietnam font-bold">Tiếng tạo thành</span>
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    onClick={() => soundManager.speakText(currentQ.spellingData?.pronunciation || '', 'vi-VN')}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-300 font-baloo font-bold text-xs sm:text-sm text-amber-900 shadow-2xs hover:bg-amber-100 transition-colors cursor-pointer"
                  >
                    <Volume2 size={16} className="text-amber-700" />
                    <span>Nghe Đánh Vần: <strong>"{currentQ.spellingData.pronunciation}"</strong> 🔊</span>
                  </button>
                </div>
              </div>
            )}

            {/* Fill-in-the-blank text banner */}
            {currentQ.type === 'fill_blank' && currentQ.templateText && (
              <div className="mt-4 p-4 rounded-3xl bg-amber-50 border-2 border-amber-200 text-center font-baloo text-2xl font-bold text-amber-900">
                {currentQ.templateText}
              </div>
            )}

            {/* Dynamic Math / English Visual Illustration Component */}
            <MathVisualIllustration
              visualType={currentQ.visualType}
              visualData={currentQ.visualData}
              rawImage={currentQ.image}
            />

            {/* 1. Bubble Multiple Choice & Comprehension Choices */}
            {(currentQ.type === 'bubble_choice' || currentQ.type === 'fill_blank' || currentQ.type === 'spelling_blend') && currentQ.options && (
              <div className={`mt-6 grid gap-3 sm:gap-4 ${
                currentQ.options.length === 3
                  ? 'grid-cols-1 sm:grid-cols-3'
                  : currentQ.options.length === 4
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                  : 'grid-cols-1 sm:grid-cols-2'
              }`}>
                {currentQ.options.map((opt: QuestionOption) => {
                  const isSelected = selectedOptionId === opt.id;
                  let optionStyle = 'border-slate-200 bg-white hover:border-amber-300 text-brand-dark shadow-xs';

                  if (isAnswerChecked) {
                    if (opt.isCorrect) {
                      optionStyle = 'border-emerald-500 bg-emerald-100 text-emerald-900 shadow-pop-sm scale-102';
                    } else if (isSelected && !opt.isCorrect) {
                      optionStyle = 'border-rose-400 bg-rose-100 text-rose-900';
                    }
                  } else if (isSelected) {
                    optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 shadow-pop-sm scale-102';
                  }

                  return (
                    <motion.button
                      key={opt.id}
                      whileTap={!isAnswerChecked ? { scale: 0.97 } : undefined}
                      onClick={() => {
                        if (!isAnswerChecked) {
                          soundManager.playPop();
                          setSelectedOptionId(opt.id);
                        }
                      }}
                      className={`flex items-center justify-between p-4 sm:p-5 rounded-3xl border-2 font-baloo font-bold text-base sm:text-lg text-left transition-all min-h-[64px] cursor-pointer ${optionStyle}`}
                    >
                      <div>
                        <div>{opt.label}</div>
                        {opt.sublabel && (
                          <div className="font-vietnam text-xs text-slate-500 font-semibold mt-0.5">{opt.sublabel}</div>
                        )}
                      </div>
                      {isSelected && (
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-xs">
                          <Check size={16} strokeWidth={3} />
                        </span>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            )}

            {/* 2. Audio Listen & Touch Picture Cards */}
            {currentQ.type === 'audio_listen' && currentQ.options && (
              <div className="mt-6 space-y-6">
                <div className="flex justify-center">
                  <CuteButton
                    variant="english"
                    size="lg"
                    icon={<Volume2 size={24} />}
                    onClick={handleReadQuestion}
                  >
                    Bấm Nghe Lại Âm Thanh 🔊
                  </CuteButton>
                </div>

                <div className={`grid gap-4 ${
                  currentQ.options.length === 3
                    ? 'grid-cols-1 sm:grid-cols-3'
                    : currentQ.options.length === 4
                    ? 'grid-cols-2 lg:grid-cols-4'
                    : 'grid-cols-2'
                }`}>
                  {currentQ.options.map((opt: QuestionOption) => {
                    const isSelected = selectedOptionId === opt.id;
                    let cardStyle = 'border-slate-200 bg-white hover:border-sky-400 shadow-xs';

                    if (isAnswerChecked) {
                      if (opt.isCorrect) {
                        cardStyle = 'border-emerald-500 bg-emerald-50 shadow-md';
                      } else if (isSelected && !opt.isCorrect) {
                        cardStyle = 'border-rose-400 bg-rose-50';
                      }
                    } else if (isSelected) {
                      cardStyle = 'border-sky-500 bg-sky-50 shadow-md';
                    }

                    return (
                      <motion.div
                        key={opt.id}
                        whileTap={!isAnswerChecked ? { scale: 0.96 } : undefined}
                        onClick={() => {
                          if (!isAnswerChecked) {
                            soundManager.playPop();
                            setSelectedOptionId(opt.id);
                            soundManager.speakText(opt.label, 'vi-VN');
                          }
                        }}
                        className={`cursor-pointer rounded-3xl border-2 p-5 text-center transition-all ${cardStyle}`}
                      >
                        <div className="font-baloo font-extrabold text-2xl sm:text-3xl text-brand-dark">
                          {opt.label}
                        </div>
                        {opt.sublabel && (
                          <div className="font-vietnam text-xs font-semibold text-slate-500 mt-1">
                            {opt.sublabel}
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 3. Virtual Candy Keypad (For Math Input) */}
            {currentQ.type === 'keypad' && (
              <div className="mt-6 flex flex-col items-center space-y-4">
                <div className="flex h-16 w-60 items-center justify-center rounded-3xl border-3 border-emerald-300 bg-emerald-50/90 font-baloo text-3xl font-extrabold text-emerald-900 shadow-inner">
                  {keypadInput || <span className="text-slate-300">Nhập số...</span>}
                </div>

                <div className="grid grid-cols-3 gap-2.5 w-64">
                  {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '⌫'].map((btn) => (
                    <button
                      key={btn}
                      onClick={() => handleKeypadPress(btn)}
                      disabled={isAnswerChecked}
                      className="flex h-13 w-full items-center justify-center rounded-2xl border-2 border-slate-200 bg-white font-baloo text-xl font-extrabold text-brand-dark shadow-pop-sm active:translate-y-0.5 active:shadow-none hover:bg-emerald-50 hover:border-emerald-300 transition-colors cursor-pointer"
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Drag & Drop Matching Pairs */}
            {currentQ.type === 'drag_drop' && currentQ.pairs && (
              <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3">
                  <div className="font-baloo font-bold text-sm text-slate-500 mb-1">Cột A:</div>
                  {currentQ.pairs.map((pair) => {
                    const isMatched = !!matchedPairs[pair.id];
                    const isSelected = selectedLeftPair?.id === pair.id;

                    return (
                      <button
                        key={pair.id}
                        onClick={() => handleLeftPairClick(pair)}
                        disabled={isMatched || isAnswerChecked}
                        className={`w-full p-3.5 rounded-2xl border-2 font-baloo font-bold text-base text-left transition-all cursor-pointer ${
                          isMatched
                            ? 'border-emerald-400 bg-emerald-100 text-emerald-900 opacity-80'
                            : isSelected
                            ? 'border-amber-500 bg-amber-100 text-amber-900 shadow-md scale-102'
                            : 'border-slate-200 bg-slate-50 hover:border-slate-300 text-brand-dark'
                        }`}
                      >
                        {pair.leftText} {isMatched && '✓'}
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-3">
                  <div className="font-baloo font-bold text-sm text-slate-500 mb-1">Cột B:</div>
                  {currentQ.pairs.map((pair) => {
                    const isMatched = Object.values(matchedPairs).includes(pair.id);

                    return (
                      <button
                        key={pair.id}
                        onClick={() => handleRightPairClick(pair)}
                        disabled={isMatched || isAnswerChecked}
                        className={`w-full p-3.5 rounded-2xl border-2 font-baloo font-bold text-base text-left transition-all ${
                          isMatched
                            ? 'border-emerald-400 bg-emerald-100 text-emerald-900 opacity-80'
                            : selectedLeftPair
                            ? 'border-sky-300 bg-sky-50 hover:bg-sky-100 text-sky-900 cursor-pointer'
                            : 'border-slate-200 bg-slate-50 text-slate-500 cursor-default'
                        }`}
                      >
                        {pair.rightText} {isMatched && '✓'}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Hint Section */}
            <AnimatePresence>
              {showHint && currentQ.hint && (
                <motion.div
                  initial={{ opacity: 0, y: 10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 p-4 sm:p-5 rounded-3xl bg-amber-50/90 border-2 border-amber-300/80 flex items-start gap-3 text-amber-900 shadow-sm"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-amber-200 text-lg">
                    💡
                  </div>
                  <div className="flex-1">
                    <strong className="font-baloo text-sm sm:text-base text-amber-950">Gợi ý từ Mascot:</strong>
                    <p className="font-vietnam text-xs sm:text-sm font-semibold text-amber-900 mt-1 leading-relaxed">{currentQ.hint}</p>
                  </div>
                  <button
                    onClick={() => setShowHint(false)}
                    className="text-xs font-baloo font-bold text-amber-600 hover:text-amber-800 p-1 cursor-pointer"
                  >
                    Đóng ✕
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Footer Action Bar */}
        <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-slate-200/80 px-4 sm:px-8 py-3.5 shadow-lg">
          <div className="mx-auto max-w-4xl flex items-center justify-between gap-4">
            <div>
              {isAnswerChecked && !isCorrect ? (
                <CuteButton
                  variant="amber"
                  size="md"
                  icon={<RotateCcw size={18} />}
                  onClick={handleRetry}
                >
                  Thử lại nhé!
                </CuteButton>
              ) : currentQ?.hint ? (
                <button
                  onClick={() => {
                    soundManager.playPop();
                    const nextState = !showHint;
                    setShowHint(nextState);
                    if (nextState) {
                      soundManager.speakText(`Gợi ý bài học: ${currentQ.hint}`, 'vi-VN');
                    }
                  }}
                  className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-2xl font-baloo font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                    showHint
                      ? 'bg-amber-200 text-amber-950 border border-amber-300 shadow-xs'
                      : 'bg-slate-100 hover:bg-amber-50 text-slate-600 hover:text-amber-800 border border-slate-200 shadow-2xs hover:scale-102'
                  }`}
                  title="Nhấn để xem gợi ý phương pháp giải từ Mascot"
                >
                  <HelpCircle size={17} className="text-amber-500 shrink-0" />
                  <span>{showHint ? 'Đóng gợi ý ✕' : 'Xem gợi ý 💡'}</span>
                </button>
              ) : null}
            </div>

            <div>
              {!isAnswerChecked ? (
                <CuteButton
                  variant="primary"
                  size="lg"
                  disabled={!hasSelectedAnswer}
                  onClick={handleCheckAnswer}
                >
                  {currentQ?.gradingMode === 'self_confirm' ? 'Em đã trả lời ✨' : 'Kiểm Tra Đáp Án ✨'}
                </CuteButton>
              ) : (
                <CuteButton
                  variant={isCorrect ? 'primary' : 'amber'}
                  size="lg"
                  icon={isLastQuestion ? <Sparkles size={20} /> : <ArrowRight size={20} />}
                  iconPosition="right"
                  onClick={handleNext}
                >
                  {isLastQuestion ? 'Hoàn Thành Bài! 🏆' : 'Câu Tiếp Theo →'}
                </CuteButton>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= READING PASSAGE POPUP DRAWER ================= */}
      {hasReadingPassage && canUseReadingPassage && isReadingDrawerOpen && lesson.readingPassage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-4xl bg-[#fffdfa] p-6 sm:p-8 shadow-2xl border border-amber-200 space-y-4">
            <div className="flex items-center justify-between border-b border-amber-200/60 pb-3">
              <div className="flex items-center gap-3">
                <LessonThematicBadge
                  lessonId={lesson.id}
                  lessonNumber={lesson.order || (lesson.id.match(/b(\d+)/) ? parseInt(lesson.id.match(/b(\d+)/)![1]) : 2)}
                  lessonTitle={lesson.readingPassage.title}
                  subject={lesson.subject}
                  grade={lesson.grade}
                  size="sm"
                />
                <div>
                  <h3 className="font-baloo font-extrabold text-lg sm:text-xl text-amber-950">
                    {lesson.readingPassage.title}
                  </h3>
                  {lesson.readingPassage.author && (
                    <span className="font-vietnam italic text-xs text-amber-800/80">
                      Tác giả: {lesson.readingPassage.author}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleTogglePassageAudio}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-baloo font-bold text-xs transition-colors cursor-pointer ${
                    isPlayingAudio ? 'bg-rose-500 text-white animate-pulse' : 'bg-amber-200 text-amber-950 hover:bg-amber-300'
                  }`}
                >
                  <Volume2 size={16} />
                  <span>{isPlayingAudio ? 'Dừng' : 'Nghe đọc'}</span>
                </button>

                <button
                  onClick={() => {
                    soundManager.stopSpeaking();
                    setIsPlayingAudio(false);
                    setIsReadingDrawerOpen(false);
                  }}
                  className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                  title="Đóng"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Passage Text */}
            <div className="space-y-4 py-2">
              {lesson.readingPassage.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={`font-vietnam text-sm sm:text-base text-slate-800 leading-relaxed ${
                    lesson.readingPassage?.genre === 'poem'
                      ? 'text-center whitespace-pre-line font-medium'
                      : 'text-justify indent-6'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="text-center pt-2">
              <CuteButton
                variant="primary"
                size="md"
                onClick={() => {
                  soundManager.stopSpeaking();
                  setIsPlayingAudio(false);
                  setIsReadingDrawerOpen(false);
                }}
              >
                Quay Lại Làm Bài Tập
              </CuteButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
