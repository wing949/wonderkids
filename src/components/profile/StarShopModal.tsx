import React, { useState } from 'react';
import { Star, Check } from 'lucide-react';
import { StarShopItem } from '../../types';
import { STAR_SHOP_ITEMS } from '../../data/gamificationData';
import { Modal } from '../ui/Modal';
import { CuteButton } from '../ui/CuteButton';
import { soundManager } from '../../utils/audio';

interface StarShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  userStars: number;
  onBuyItem: (item: StarShopItem) => void;
}

export const StarShopModal: React.FC<StarShopModalProps> = ({
  isOpen,
  onClose,
  userStars,
  onBuyItem,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'avatar' | 'powerup' | 'real_gift'>('all');
  const [purchasedIds, setPurchasedIds] = useState<string[]>(['shop-1', 'shop-3']);

  const categories = [
    { id: 'all', label: 'Tất Cả' },
    { id: 'avatar', label: 'Trang Phục Avatar 🧙‍♂️' },
    { id: 'powerup', label: 'Bảo Vệ Streak ❄️' },
    { id: 'real_gift', label: 'Quà Thật Về Nhà 🎨' },
  ];

  const filteredItems = activeCategory === 'all'
    ? STAR_SHOP_ITEMS
    : STAR_SHOP_ITEMS.filter((item) => item.category === activeCategory);

  const handlePurchase = (item: StarShopItem) => {
    if (userStars >= item.costStars && !purchasedIds.includes(item.id)) {
      soundManager.playChestOpen();
      setPurchasedIds((prev) => [...prev, item.id]);
      onBuyItem(item);
    } else {
      soundManager.playIncorrect();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Cửa Hàng Đổi Ngôi Sao"
      icon="🛍️"
      maxWidth="xl"
    >
      <div className="space-y-6">
        {/* User Balance Banner */}
        <div className="flex items-center justify-between rounded-3xl border-2 border-amber-200 bg-gradient-to-r from-amber-100 to-yellow-50 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-3xl shadow-sm">
              ⭐
            </div>
            <div>
              <span className="font-baloo font-bold text-xs text-amber-800 uppercase">
                Ngôi sao hiện có của bạn:
              </span>
              <div className="font-baloo font-extrabold text-2xl text-amber-950">
                {userStars} Ngôi Sao Vàng
              </div>
            </div>
          </div>
          <p className="font-vietnam text-xs font-semibold text-amber-900/80 max-w-xs text-right hidden sm:block">
            Chăm chỉ hoàn thành bài tập và việc tốt mỗi ngày để đổi quà nhé!
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundManager.playPop();
                setActiveCategory(cat.id as typeof activeCategory);
              }}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full font-baloo font-bold text-xs transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-white shadow-sm scale-102'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Shop Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[420px] overflow-y-auto pr-1">
          {filteredItems.map((item) => {
            const isOwned = purchasedIds.includes(item.id);
            const canAfford = userStars >= item.costStars;

            return (
              <div
                key={item.id}
                className={`flex flex-col justify-between rounded-3xl border-2 p-4 transition-all ${
                  isOwned
                    ? 'border-emerald-300 bg-emerald-50/70'
                    : canAfford
                    ? 'border-amber-200 bg-white hover:border-amber-400 shadow-xs'
                    : 'border-slate-200 bg-slate-50/70 opacity-75'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white border border-slate-200 text-3xl shadow-xs">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-baloo font-extrabold text-base text-brand-dark">
                      {item.name}
                    </h4>
                    <p className="font-vietnam text-xs text-slate-500 font-medium mt-0.5 leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-1 font-baloo font-extrabold text-base text-amber-700">
                    <Star size={16} className="fill-amber-400 text-amber-400" />
                    <span>{item.costStars} Sao</span>
                  </div>

                  {isOwned ? (
                    <span className="inline-flex items-center gap-1 font-baloo font-extrabold text-xs text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                      <Check size={14} /> Đã Sở Hữu
                    </span>
                  ) : (
                    <CuteButton
                      variant={canAfford ? 'amber' : 'white'}
                      size="sm"
                      disabled={!canAfford}
                      onClick={() => handlePurchase(item)}
                    >
                      {canAfford ? 'Đổi Quà ✨' : 'Chưa Đủ Sao'}
                    </CuteButton>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};
