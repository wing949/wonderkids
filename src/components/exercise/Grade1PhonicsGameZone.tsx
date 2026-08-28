import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Volume2,
  HelpCircle,
  RotateCcw,
  Sparkles,
  Star,
  Trophy,
  ArrowRight
} from 'lucide-react';
import { LessonNode } from '../../types';
import { PhonicsGameStage, getPhonicsGameForLesson } from '../../data/curriculum/vietnamese/grade1PhonicsGames';
import { getEnglishPhonicsGameForLesson } from '../../data/curriculum/english/grade1PhonicsGames';
import { LetterPickGame } from './phonicsGames/LetterPickGame';
import { BubblePopGame } from './phonicsGames/BubblePopGame';
import { LetterAssembleGame } from './phonicsGames/LetterAssembleGame';
import { OrderSequenceGame } from './phonicsGames/OrderSequenceGame';
import { UnitReviewGame } from './phonicsGames/UnitReviewGame';
import { soundManager } from '../../utils/audio';
import { triggerStarBurst } from '../../utils/confetti';

interface Grade1PhonicsGameZoneProps {
  lesson: LessonNode;
  onFinishGames?: () => void;
}

export const Grade1PhonicsGameZone: React.FC<Grade1PhonicsGameZoneProps> = ({
  lesson,
  onFinishGames,
}) => {
  const gameConfig = lesson.subject === 'english'
    ? getEnglishPhonicsGameForLesson(lesson.id)
    : getPhonicsGameForLesson(lesson);
  const stages: PhonicsGameStage[] = gameConfig?.stages || [];

  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const [isHintActive, setIsHintActive] = useState(false);
  const [starsCollected, setStarsCollected] = useState(0);
  const [isAllCompleted, setIsAllCompleted] = useState(false);

  const mascotEmoji = lesson.subject === 'english' ? '🐬' : '🦊';
  const mascotZoneTitle = lesson.subject === 'english' ? 'Phonics Fun Zone • Grade 1' : 'Khu Vui Học Âm Vần • Lớp 1';

  const currentStage = stages[currentStageIdx] || stages[0];

  if (!gameConfig || stages.length === 0) {
    return null;
  }

  const lang = lesson.subject === 'english' ? 'en-US' : 'vi-VN';

  // Speech helper for instruction using pre-recorded audio or natural TTS
  const speakInstruction = (text: string, stageId?: string) => {
    soundManager.play('tap');
    if (stageId && lesson.subject !== 'english') {
      soundManager.playQuestionAudio(stageId, text, lang);
    } else {
      soundManager.speakText(text, lang);
    }
  };

  useEffect(() => {
    setCurrentStageIdx(0);
    setStarsCollected(0);
    setIsAllCompleted(false);
    setIsHintActive(false);

    // Speak initial instruction
    if (stages[0]) {
      speakInstruction(stages[0].instruction, stages[0].id);
    }
  }, [lesson.id]);

  const handleStageSuccess = () => {
    const nextStars = starsCollected + 1;
    setStarsCollected(nextStars);
    setIsHintActive(false);

    if (currentStageIdx + 1 < stages.length) {
      setTimeout(() => {
        const nextIdx = currentStageIdx + 1;
        setCurrentStageIdx(nextIdx);
        speakInstruction(stages[nextIdx].instruction, stages[nextIdx].id);
      }, 600);
    } else {
      setIsAllCompleted(true);
      soundManager.play('victory');
      triggerStarBurst();
    }
  };

  const handleReplayCurrent = () => {
    soundManager.play('tap');
    setIsHintActive(false);
    // Trigger reset by re-speaking
    speakInstruction(currentStage.instruction, currentStage.id);
  };

  const handleToggleHint = () => {
    soundManager.play('tap');
    setIsHintActive((prev) => !prev);
    if (!isHintActive && currentStage.hintText) {
      speakInstruction(currentStage.hintText, `${currentStage.id}-hint`);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-4xl bg-gradient-to-b from-[#fffdf9] via-[#fffbf3] to-[#fef8eb] p-4 sm:p-7 shadow-washi border-2 border-amber-200/90 flex flex-col justify-between min-h-[580px]">
      {/* Decorative Washi Tape on top */}
      <div className="absolute -top-3 left-1/2 h-6 w-36 -translate-x-1/2 -rotate-1 rounded-sm border border-amber-300/60 bg-amber-200/80 shadow-sm" />

      {/* Top Bar: Mascot Header & Stars */}
      <div className="flex items-center justify-between gap-3 border-b border-amber-200/60 pb-4 mb-4">
        {/* Mascot & Title */}
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: [-5, 5, -5, 0] }}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-400 p-1 shadow-pop-sm flex items-center justify-center shrink-0"
          >
            <span className="text-2xl sm:text-3xl">{mascotEmoji}</span>
          </motion.div>
          <div>
            <div className="flex items-center gap-1.5 font-baloo text-xs font-black tracking-wider text-amber-800 uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin" />
              <span>{mascotZoneTitle}</span>
            </div>
            <h2 className="font-baloo text-lg sm:text-2xl font-black text-amber-950">
              {lesson.title}
            </h2>
          </div>
        </div>

        {/* Star Progress Counter */}
        <div className="flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-100/90 rounded-full border border-amber-300 shadow-sm">
          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 fill-amber-400" />
          <span className="font-baloo text-sm sm:text-base font-black text-amber-900">
            {starsCollected} / {stages.length}
          </span>
        </div>
      </div>

      {/* Main Game Stage Area */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {!isAllCompleted ? (
          <div className="w-full">
            {/* Mascot Instruction Speech Bubble */}
            <div className="relative mb-4 p-3.5 sm:p-4 bg-white rounded-2xl border-2 border-amber-300 shadow-sm flex items-center justify-between gap-3">
              <p className="font-vietnam text-sm sm:text-base font-bold text-slate-800 leading-relaxed">
                {mascotEmoji} {currentStage.instruction}
              </p>
              <button
                type="button"
                onClick={() => speakInstruction(currentStage.instruction)}
                className="w-10 h-10 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 flex items-center justify-center shrink-0 shadow-sm transition-transform active:scale-90 cursor-pointer"
                title="Nghe lại giọng đọc"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            {/* Dynamic Stage Rendering */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStage.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {currentStage.gameType === 'bubble_pop' ? (
                  <BubblePopGame
                    stage={currentStage}
                    isHintActive={isHintActive}
                    onCorrectAnswer={handleStageSuccess}
                  />
                ) : currentStage.gameType === 'letter_assemble' ? (
                  <LetterAssembleGame
                    stage={currentStage}
                    isHintActive={isHintActive}
                    onCorrectAnswer={handleStageSuccess}
                  />
                ) : currentStage.gameType === 'order_sequence' ? (
                  <OrderSequenceGame
                    stage={currentStage}
                    isHintActive={isHintActive}
                    onCorrectAnswer={handleStageSuccess}
                  />
                ) : currentStage.gameType === 'unit_review' ? (
                  <UnitReviewGame
                    stage={currentStage}
                    isHintActive={isHintActive}
                    onCorrectAnswer={handleStageSuccess}
                  />
                ) : (
                  <LetterPickGame
                    stage={currentStage}
                    isHintActive={isHintActive}
                    onCorrectAnswer={handleStageSuccess}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          /* Victory Completion Card */
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center justify-center p-6 text-center max-w-md my-auto"
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-tr from-amber-400 to-yellow-300 rounded-full border-4 border-white shadow-xl flex items-center justify-center mb-4 animate-bounce">
              <Trophy className="w-12 h-12 sm:w-14 sm:h-14 text-amber-900" />
              <div className="absolute -top-1 -right-1 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-base">
                ⭐
              </div>
            </div>

            <h3 className="font-baloo text-2xl sm:text-3xl font-black text-amber-950">
              BÉ HOÀN THÀNH XUẤT SẮC!
            </h3>
            <p className="font-vietnam text-sm sm:text-base font-semibold text-slate-700 mt-2 mb-6">
              Bé đã nhận biết và làm chủ hoàn toàn các âm chữ trong bài <strong>{lesson.title}</strong>!
            </p>

            <button
              type="button"
              onClick={() => {
                if (onFinishGames) onFinishGames();
                else {
                  setCurrentStageIdx(0);
                  setStarsCollected(0);
                  setIsAllCompleted(false);
                }
              }}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-baloo text-lg font-black shadow-pop-sm flex items-center gap-2 transition-transform active:scale-95 cursor-pointer"
            >
              <span>{lesson.subject === 'english' ? 'Làm Bài Luyện Tập Tiếp Theo ⭐' : 'Vào Làm Bài Luyện Tập Thêm'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Bottom Control Bar: 🔊 Nghe Lại | 💡 Gợi Ý | 🔄 Chơi Lại */}
      {!isAllCompleted && (
        <div className="mt-4 pt-4 border-t border-amber-200/60 flex items-center justify-between gap-2 sm:gap-4">
          <button
            type="button"
            onClick={() => speakInstruction(currentStage.instruction)}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-baloo text-xs sm:text-sm font-bold transition-all cursor-pointer"
          >
            <Volume2 className="w-4 h-4" />
            <span>Nghe lại</span>
          </button>

          <button
            type="button"
            onClick={handleToggleHint}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-2xl font-baloo text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              isHintActive
                ? 'bg-amber-400 text-amber-950 shadow-sm'
                : 'bg-amber-100 hover:bg-amber-200 text-amber-900'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Gợi ý</span>
          </button>

          <button
            type="button"
            onClick={handleReplayCurrent}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-baloo text-xs sm:text-sm font-bold transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Chơi lại</span>
          </button>
        </div>
      )}
    </div>
  );
};
