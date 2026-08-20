import React from 'react';
import { Home, Map, CheckCircle2, ShoppingBag, UserCheck } from 'lucide-react';
import { PortalView } from '../../types';
import { soundManager } from '../../utils/audio';

interface BottomNavProps {
  currentPortal: PortalView;
  onPortalChange: (portal: PortalView) => void;
  onOpenShop: () => void;
  onOpenQuests: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentPortal,
  onPortalChange,
  onOpenShop,
  onOpenQuests,
}) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200/80 px-4 py-2 shadow-lg">
      <div className="flex items-center justify-around">
        <button
          onClick={() => {
            soundManager.playPop();
            onPortalChange('student');
          }}
          className={`flex flex-col items-center gap-1 p-1 font-baloo font-bold text-xs ${
            currentPortal === 'student' ? 'text-emerald-600 scale-105' : 'text-slate-500'
          }`}
        >
          <Home size={20} />
          <span>Trang Chủ</span>
        </button>

        <button
          onClick={() => {
            soundManager.playPop();
            onPortalChange('adventure');
          }}
          className={`flex flex-col items-center gap-1 p-1 font-baloo font-bold text-xs ${
            currentPortal === 'adventure' ? 'text-sky-600 scale-105' : 'text-slate-500'
          }`}
        >
          <Map size={20} />
          <span>Bản Đồ</span>
        </button>

        <button
          onClick={() => {
            soundManager.playPop();
            onOpenQuests();
          }}
          className="flex flex-col items-center gap-1 p-1 font-baloo font-bold text-xs text-slate-500 hover:text-amber-600"
        >
          <CheckCircle2 size={20} />
          <span>Nhiệm Vụ</span>
        </button>

        <button
          onClick={() => {
            soundManager.playPop();
            onOpenShop();
          }}
          className="flex flex-col items-center gap-1 p-1 font-baloo font-bold text-xs text-slate-500 hover:text-purple-600"
        >
          <ShoppingBag size={20} />
          <span>Đổi Quà</span>
        </button>

        <button
          onClick={() => {
            soundManager.playPop();
            onPortalChange('parent');
          }}
          className={`flex flex-col items-center gap-1 p-1 font-baloo font-bold text-xs ${
            currentPortal === 'parent' ? 'text-purple-600 scale-105' : 'text-slate-500'
          }`}
        >
          <UserCheck size={20} />
          <span>Cha Mẹ</span>
        </button>
      </div>
    </div>
  );
};
