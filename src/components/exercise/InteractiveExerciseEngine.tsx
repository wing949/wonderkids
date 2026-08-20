import React, { useState, useEffect } from 'react';
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
  Radio
} from 'lucide-react';
import { LessonNode, Question, QuestionOption, MatchingPair } from '../../types';
import { CuteButton } from '../ui/CuteButton';
import { CandyProgressBar } from '../ui/CandyProgressBar';
import { soundManager, voiceManager } from '../../utils/audio';
import { triggerStarBurst } from '../../utils/confetti';
import { buildLessonNarration } from '../../utils/lessonNarration';

interface InteractiveExerciseEngineProps {
  lesson: LessonNode;
  onExit: () => void;
  onComplete: (starsEarned: number, xpEarned: number) => void;
}

export const InteractiveExerciseEngine: React.FC<InteractiveExerciseEngineProps> = ({
  lesson,
  onExit,
  onComplete,
}) => {
  // Determine if lesson starts with a Reading Passage (e.g. Tiếng Việt bài đọc)
  const hasReadingPassage = !!lesson.readingPassage;
  const [engineMode, setEngineMode] = useState<'reading' | 'quiz'>(hasReadingPassage ? 'reading' : 'quiz');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isReadingDrawerOpen, setIsReadingDrawerOpen] = useState(false);

  // STT Voice Reading Practice State
  const [isVoiceRecording, setIsVoiceRecording] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  const [voiceScore, setVoiceScore] = useState<number | null>(null);
  const isSpeechSupported = voiceManager.isSupported();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [keypadInput, setKeypadInput] = useState<string>('');
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  const [selectedLeftPair, setSelectedLeftPair] = useState<MatchingPair | null>(null);
  
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongAttempts, setWrongAttempts] = useState(0);

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
    if (!lesson.readingPassage) return;

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

  // Check user answer with Realtime Mascot Spoken Feedback
  const handleCheckAnswer = () => {
    if (!currentQ) return;
    let correct = false;

    if (currentQ.type === 'bubble_choice' || currentQ.type === 'audio_listen' || currentQ.type === 'fill_blank' || currentQ.type === 'spelling_blend') {
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
      onComplete(stars, totalXp);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setKeypadInput('');
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
    ? (currentQ.type === 'bubble_choice' || currentQ.type === 'audio_listen' || currentQ.type === 'fill_blank' || currentQ.type === 'spelling_blend')
      ? selectedOptionId !== null
      : currentQ.type === 'keypad'
      ? keypadInput.length > 0
      : currentQ.type === 'drag_drop'
      ? Object.keys(matchedPairs).length === (currentQ.pairs?.length || 0)
      : true
    : false;

  // =========================================================================
  // VIEW 1: BÀI ĐỌC SGK TIẾNG VIỆT & NGHE ĐỌC MẪU (READING PASSAGE VIEW)
  // =========================================================================
  if (engineMode === 'reading' && lesson.readingPassage) {
    const passage = lesson.readingPassage;

    return (
      <div className="min-h-[calc(100vh-5rem)] pb-28 pt-4 sm:pt-6">
        <div className="mx-auto max-w-4xl px-3 sm:px-6 space-y-6">
          {/* Header Bar */}
          <div className="flex items-center justify-between gap-4 border-b border-amber-200/80 bg-white/80 backdrop-blur-md p-4 rounded-3xl shadow-xs">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  soundManager.stopSpeaking();
                  voiceManager.stopListening();
                  soundManager.playPop();
                  onExit();
                }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-xs border border-slate-200 text-slate-600 hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer"
                title="Quay lại danh sách bài"
              >
                <ArrowLeft size={20} />
              </button>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">📖</span>
                  <span className="font-baloo font-bold text-xs sm:text-sm text-amber-800 uppercase tracking-wider">
                    {lesson.unit}
                  </span>
                </div>
                <h1 className="font-baloo text-lg sm:text-xl font-extrabold text-brand-dark">
                  {lesson.title}
                </h1>
              </div>
            </div>

            {/* Audio Read Aloud Button */}
            <button
              onClick={handleTogglePassageAudio}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-baloo font-bold text-sm transition-all shadow-xs cursor-pointer ${
                isPlayingAudio
                  ? 'bg-rose-500 text-white animate-pulse'
                  : 'bg-amber-400 hover:bg-amber-300 text-amber-950 shadow-pop-sm'
              }`}
            >
              {isPlayingAudio ? (
                <>
                  <Pause size={18} />
                  <span>Dừng đọc</span>
                </>
              ) : (
                <>
                  <Volume2 size={18} />
                  <span>Nghe cô đọc mẫu 🔊</span>
                </>
              )}
            </button>
          </div>

          {/* Reading Book Card (Scrapbook Style) */}
          <div className="relative rounded-4xl bg-[#fffdfa] p-6 sm:p-10 shadow-washi border border-amber-200/60 overflow-hidden">
            {/* Washi tape header deco */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-36 h-6 bg-amber-400/40 rounded-sm rotate-[-1deg] border border-amber-300/40 shadow-xs pointer-events-none" />

            {/* Textbook Ref Badge */}
            {lesson.textbookPageRef && (
              <div className="mb-4 flex items-center gap-1.5 font-baloo font-bold text-xs text-amber-900 bg-amber-100/90 border border-amber-300/80 px-3.5 py-1 rounded-full w-fit">
                <span>📚</span>
                <span>{lesson.textbookPageRef}</span>
              </div>
            )}

            {/* Passage Header */}
            <div className="text-center border-b border-amber-200/40 pb-6 mb-6">
              <h2 className="font-baloo text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-950 tracking-wide">
                {passage.title}
              </h2>
              {passage.author && (
                <p className="font-vietnam italic text-xs sm:text-sm font-semibold text-amber-800/80 mt-1.5">
                  Tác giả: {passage.author}
                </p>
              )}
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

            {/* ================= STT VOICE READING PRACTICE ================= */}
            {isSpeechSupported && (
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

            {/* Vocabulary Explanations (Góc Chú Giải Từ Ngữ SGK) */}
            {passage.vocabularyNotes && passage.vocabularyNotes.length > 0 && (
              <div className="mt-8 pt-6 border-t-2 border-dashed border-amber-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base">💡</span>
                  <h4 className="font-baloo font-extrabold text-sm sm:text-base text-amber-900">
                    Góc Chú Giải Từ Ngữ (SGK Tiếng Việt):
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
                  Bé đã đọc kỹ bài chưa? Nhấn nút bên cạnh để trả lời các câu hỏi đọc hiểu nhận Sao Vàng nhé!
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
              Con Đã Đọc Xong - Trả Lời Câu Hỏi ⭐
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
            {hasReadingPassage && (
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
            {/* Textbook Page Badge */}
            {lesson.textbookPageRef && (
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

            {/* Spelling Blend Interactive Machine (SGK Tiếng Việt 1) */}
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

            {/* Optional Illustration Image / Emojis */}
            {currentQ.image && (
              <div className="mt-4 flex justify-center py-3 text-4xl sm:text-5xl tracking-widest bg-slate-50 rounded-3xl border border-slate-200">
                {currentQ.image}
              </div>
            )}

            {/* 1. Bubble Multiple Choice & Comprehension Choices */}
            {(currentQ.type === 'bubble_choice' || currentQ.type === 'fill_blank' || currentQ.type === 'spelling_blend') && currentQ.options && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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

                <div className="grid grid-cols-2 gap-4">
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
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 p-4 rounded-3xl bg-amber-50 border-2 border-amber-200 flex items-start gap-2.5 text-amber-900"
                >
                  <HelpCircle size={20} className="shrink-0 text-amber-600 mt-0.5" />
                  <div>
                    <strong className="font-baloo text-sm">Gợi ý từ Mascot:</strong>
                    <p className="font-vietnam text-xs sm:text-sm font-medium mt-0.5">{currentQ.hint}</p>
                  </div>
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
              ) : currentQ?.hint && !showHint ? (
                <button
                  onClick={() => {
                    soundManager.playPop();
                    setShowHint(true);
                    // Realtime voice hint
                    soundManager.speakText(`Gợi ý bài học: ${currentQ.hint}`, 'vi-VN');
                  }}
                  className="flex items-center gap-1.5 font-baloo font-bold text-sm text-slate-500 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  <HelpCircle size={18} />
                  <span>Xem gợi ý 💡</span>
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
                  Kiểm Tra Đáp Án ✨
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
      {hasReadingPassage && isReadingDrawerOpen && lesson.readingPassage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-4xl bg-[#fffdfa] p-6 sm:p-8 shadow-2xl border border-amber-200 space-y-4">
            <div className="flex items-center justify-between border-b border-amber-200/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📖</span>
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
