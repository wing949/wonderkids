import React from 'react';
import type { GradeLevel } from '../../types';
import { PracticePortal } from '../practice/PracticePortal';

interface QuizArenaProps {
  playerName?: string;
  currentGrade?: GradeLevel;
  onBackToDashboard: () => void;
  onVictory: (xp: number, stars: number) => void;
}

/** Compatibility wrapper: the real arena now lives in the shared practice portal. */
export const QuizArena: React.FC<QuizArenaProps> = ({
  playerName,
  currentGrade,
  onBackToDashboard,
  onVictory,
}) => (
  <PracticePortal
    route={{ kind: 'practice-hub', mode: 'arena' }}
    playerName={playerName}
    currentGrade={currentGrade}
    onNavigate={() => {}}
    onBack={onBackToDashboard}
    onReward={onVictory}
  />
);
