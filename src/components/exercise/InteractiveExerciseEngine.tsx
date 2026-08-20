import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, ArrowLeft, HelpCircle, ArrowRight, RotateCcw, Check, Sparkles } from 'lucide-react';
import { LessonNode, Question, QuestionOption, MatchingPair } from '../../types';
import { CuteButton } from '../ui/CuteButton';
import { CandyProgressBar } from '../ui/CandyProgressBar';
import { soundManager } from '../../utils/audio';
import { triggerStarBurst } from '../../utils/confetti';

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

  const currentQ: Question = lesson.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === lesson.questions.length - 1;

  // Speak question aloud
  const handleReadQuestion = () => {
    const textToRead = currentQ.audioText || currentQ.questionText;
    const lang = lesson.subject === 'english' ? 'en-US' : 'vi-VN';
    soundManager.speakText(textToRead, lang);
  };

  // Check user answer
  const handleCheckAnswer = () => {
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
      correct = true; // Auto success after sequence review
    }

    setIsCorrect(correct);
    setIsAnswerChecked(true);

    if (correct) {
      soundManager.playCorrect();
      triggerStarBurst();
      setScore((prev) => prev + currentQ.points);
    } else {
      soundManager.playIncorrect();
      setWrongAttempts((prev) => prev + 1);
    }
  };

  // Move to next question or complete lesson
  const handleNext = () => {
    soundManager.playPop();
    if (isLastQuestion) {
      // Calculate stars earned (1-3 stars)
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
      // Correct match
      soundManager.playCorrect();
      setMatchedPairs((prev) => ({ ...prev, [selectedLeftPair.id]: rightPair.id }));
      setSelectedLeftPair(null);
    } else {
      soundManager.playIncorrect();
      setSelectedLeftPair(null);
    }
  };

  const hasSelectedAnswer =
    (currentQ.type === 'bubble_choice' || currentQ.type === 'audio_listen' || currentQ.type === 'fill_blank' || currentQ.type === 'spelling_blend')
      ? selectedOptionId !== null
      : currentQ.type === 'keypad'
      ? keypadInput.length > 0
      : currentQ.type === 'drag_drop'
      ? Object.keys(matchedPairs).length === (currentQ.pairs?.length || 0)
      : true;

  return (
    <div className="min-h-[calc(100vh-5rem)] pb-28 pt-4 sm:pt-6">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Exercise Header */}
        <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
          {/* Back button */}
          <button
            onClick={() => {
              soundManager.playPop();
              onExit();
            }}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-200 text-slate-600 hover:bg-rose-50 hover:text-rose-600 transition-colors"
            title="Thoát bài học"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Progress Bar & Counter */}
          <div className="flex-1 max-w-md">
            <div className="flex justify-between text-xs font-baloo font-bold text-slate-500 mb-1">
              <span>Câu hỏi {currentQuestionIndex + 1} / {lesson.questions.length}</span>
              <span className="text-emerald-700">Điểm: {score} XP</span>
            </div>
            <CandyProgressBar
              value={currentQuestionIndex + 1}
              max={lesson.questions.length}
              color={lesson.subject as 'math' | 'vietnamese' | 'english'}
              height="md"
              showStarIndicator={false}
            />
          </div>

          {/* Read aloud button */}
          <button
            onClick={handleReadQuestion}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 border-2 border-emerald-200 shadow-sm hover:bg-emerald-100 transition-colors"
            title="Đọc to câu hỏi (Nhấn để nghe giọng đọc)"
          >
            <Volume2 size={22} />
          </button>
        </div>

        {/* Question Container Card */}
        <motion.div
          key={currentQ.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="mt-6 rounded-4xl border-3 border-white/90 bg-white/85 p-6 sm:p-8 shadow-washi backdrop-blur-md"
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
                <span className="inline-block rounded-full bg-slate-100 px-3 py-1 font-baloo text-xs font-bold text-slate-500 mb-2">
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
            <div className="mt-5 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 border-3 border-amber-200 text-center space-y-4">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-baloo text-2xl sm:text-4xl font-extrabold text-amber-950">
                {/* Initial block */}
                <div className="flex flex-col items-center bg-white px-4 py-2.5 rounded-2xl border-2 border-amber-300 shadow-sm">
                  <span>{currentQ.spellingData.initial}</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-vietnam font-semibold">Âm đầu</span>
                </div>

                <span>+</span>

                {/* Vowel block */}
                <div className="flex flex-col items-center bg-white px-4 py-2.5 rounded-2xl border-2 border-amber-300 shadow-sm text-amber-600">
                  <span>{currentQ.spellingData.vowel}</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-vietnam font-semibold">Âm chính</span>
                </div>

                <span>+</span>

                {/* Tone block */}
                <div className="flex flex-col items-center bg-white px-3 sm:px-4 py-2.5 rounded-2xl border-2 border-amber-300 shadow-sm text-orange-600">
                  <span className="text-xl sm:text-2xl">{currentQ.spellingData.tone}</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-vietnam font-semibold">Dấu thanh</span>
                </div>

                <span>=</span>

                {/* Result block */}
                <div className="flex flex-col items-center bg-amber-400 text-amber-950 px-5 py-2.5 rounded-2xl border-2 border-amber-500 shadow-pop-sm animate-bounce-subtle">
                  <span>{currentQ.spellingData.result}</span>
                  <span className="text-[10px] sm:text-xs text-amber-900 font-vietnam font-bold">Tiếng tạo thành</span>
                </div>
              </div>

              {/* Sound spelling model button */}
              <div className="flex justify-center pt-2">
                <button
                  onClick={() => soundManager.speakText(currentQ.spellingData?.pronunciation || '', 'vi-VN')}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-300 font-baloo font-bold text-xs sm:text-sm text-amber-900 shadow-xs hover:bg-amber-100 transition-colors"
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

          {/* ================= QUESTION RENDERERS ================= */}

          {/* 1. Bubble Multiple Choice & Spelling Blend Choices */}
          {(currentQ.type === 'bubble_choice' || currentQ.type === 'fill_blank' || currentQ.type === 'spelling_blend') && currentQ.options && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {currentQ.options.map((opt: QuestionOption) => {
                const isSelected = selectedOptionId === opt.id;
                let optionStyle = 'border-slate-200 bg-slate-50/80 hover:border-slate-400 text-brand-dark';

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
                    className={`flex items-center justify-between p-4 sm:p-5 rounded-3xl border-3 font-baloo font-bold text-lg sm:text-xl text-left transition-all min-h-[64px] ${optionStyle}`}
                  >
                    <div>
                      <div>{opt.label}</div>
                      {opt.sublabel && (
                        <div className="font-vietnam text-xs text-slate-500 font-semibold">{opt.sublabel}</div>
                      )}
                    </div>
                    {isSelected && (
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white text-xs">
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
              {/* Big Wave Audio Replay Button */}
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

              {/* Picture Options */}
              <div className="grid grid-cols-2 gap-4">
                {currentQ.options.map((opt: QuestionOption) => {
                  const isSelected = selectedOptionId === opt.id;
                  let cardStyle = 'border-slate-200 bg-white hover:border-sky-400';

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
                        }
                      }}
                      className={`cursor-pointer rounded-3xl border-3 p-5 text-center transition-all ${cardStyle}`}
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
              {/* Output Display */}
              <div className="flex h-16 w-60 items-center justify-center rounded-3xl border-3 border-emerald-300 bg-emerald-50/90 font-baloo text-3xl font-extrabold text-emerald-900 shadow-inner">
                {keypadInput || <span className="text-slate-300">Nhập số...</span>}
              </div>

              {/* Number Buttons Grid */}
              <div className="grid grid-cols-3 gap-2.5 w-64">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '⌫'].map((btn) => (
                  <button
                    key={btn}
                    onClick={() => handleKeypadPress(btn)}
                    disabled={isAnswerChecked}
                    className="flex h-13 w-full items-center justify-center rounded-2xl border-2 border-slate-200 bg-white font-baloo text-xl font-extrabold text-brand-dark shadow-pop-sm active:translate-y-0.5 active:shadow-none hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
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
              {/* Left Column (English words / Questions) */}
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
                      className={`w-full p-3.5 rounded-2xl border-3 font-baloo font-bold text-base text-left transition-all ${
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

              {/* Right Column (Vietnamese meanings / Answers) */}
              <div className="space-y-3">
                <div className="font-baloo font-bold text-sm text-slate-500 mb-1">Cột B:</div>
                {currentQ.pairs.map((pair) => {
                  const isMatched = Object.values(matchedPairs).includes(pair.id);

                  return (
                    <button
                      key={pair.id}
                      onClick={() => handleRightPairClick(pair)}
                      disabled={isMatched || isAnswerChecked}
                      className={`w-full p-3.5 rounded-2xl border-3 font-baloo font-bold text-base text-left transition-all ${
                        isMatched
                          ? 'border-emerald-400 bg-emerald-100 text-emerald-900 opacity-80'
                          : selectedLeftPair
                          ? 'border-sky-300 bg-sky-50 hover:bg-sky-100 text-sky-900'
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

          {/* 5. Story Sequencing */}
          {currentQ.type === 'story_sequence' && currentQ.sequenceItems && (
            <div className="mt-6 space-y-3">
              {currentQ.sequenceItems.map((seq) => (
                <div
                  key={seq.id}
                  className="flex items-center gap-3 p-3.5 rounded-2xl border-2 border-slate-200 bg-slate-50 font-vietnam font-semibold text-sm text-slate-700"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-400 font-baloo font-bold text-xs text-amber-950">
                    {seq.order}
                  </span>
                  <span>{seq.text}</span>
                </div>
              ))}
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

        {/* Footer Action Bar */}
        <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-slate-200/80 px-4 sm:px-8 py-3.5 shadow-lg">
          <div className="mx-auto max-w-4xl flex items-center justify-between gap-4">
            {/* Left: Hint or Retry button */}
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
              ) : currentQ.hint && !showHint ? (
                <button
                  onClick={() => {
                    soundManager.playPop();
                    setShowHint(true);
                  }}
                  className="flex items-center gap-1.5 font-baloo font-bold text-sm text-slate-500 hover:text-amber-700 transition-colors"
                >
                  <HelpCircle size={18} />
                  <span>Xem gợi ý</span>
                </button>
              ) : null}
            </div>

            {/* Right: Check Answer or Next button */}
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
    </div>
  );
};
