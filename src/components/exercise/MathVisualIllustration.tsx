import React from 'react';
import { motion } from 'framer-motion';

interface MathVisualIllustrationProps {
  visualType?: 'counting' | 'clock' | 'ruler' | 'fraction' | 'geometry' | 'balance' | 'speed' | 'blocks' | 'array' | 'number_line';
  visualData?: {
    itemEmoji?: string;
    leftItemEmoji?: string;
    rightItemEmoji?: string;
    itemCount?: number;
    leftCount?: number;
    rightCount?: number;
    hours?: number;
    minutes?: number;
    lengthCm?: number;
    numerator?: number;
    denominator?: number;
    shape?: 'triangle' | 'trapezoid' | 'circle' | 'rectangle' | 'square' | 'cube' | 'cuboid';
    dimensions?: {
      base?: number | string;
      topBase?: number | string;
      height?: number | string;
      radius?: number | string;
      length?: number | string;
      width?: number | string;
    };
    leftWeight?: string | number;
    rightWeight?: string | number;
    speed?: number | string;
    time?: number | string;
    distance?: number | string;
    rows?: number;
    cols?: number;
    numberLineRange?: [number, number];
    markedNumber?: number;
  };
  rawImage?: string;
}

export const MathVisualIllustration: React.FC<MathVisualIllustrationProps> = ({
  visualType,
  visualData,
  rawImage,
}) => {
  // If raw image URL or emoji string is passed without specific visualType
  if (!visualType && rawImage) {
    const isUrl = rawImage.startsWith('/') || rawImage.startsWith('http') || rawImage.startsWith('data:');
    if (isUrl) {
      return (
        <div className="my-4 flex justify-center">
          <img
            src={rawImage}
            alt="Minh họa bài tập"
            className="max-h-56 rounded-3xl object-contain shadow-xs border border-amber-200 bg-white p-2"
          />
        </div>
      );
    }
    return (
      <div className="my-4 flex flex-wrap justify-center items-center gap-3 py-3 text-4xl sm:text-5xl tracking-widest bg-amber-50/70 rounded-3xl border border-amber-200 shadow-2xs">
        {rawImage}
      </div>
    );
  }

  if (!visualType && !visualData) return null;

  // 1. COUNTING & COMPARING ITEMS
  if (visualType === 'counting') {
    const emoji = visualData?.itemEmoji || '🍎';
    const leftEmoji = visualData?.leftItemEmoji || emoji;
    const rightEmoji = visualData?.rightItemEmoji || emoji;
    const leftCount = visualData?.leftCount;
    const rightCount = visualData?.rightCount;
    const singleCount = visualData?.itemCount ?? 5;

    // Comparing two groups
    if (leftCount !== undefined && rightCount !== undefined) {
      return (
        <div className="my-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 p-4 sm:p-6 bg-gradient-to-r from-amber-50/90 via-orange-50/70 to-yellow-50/90 rounded-3xl border-2 border-amber-200/80 shadow-washi">
          {/* Left Group */}
          <div className="flex flex-col items-center bg-white/95 p-3.5 rounded-2xl border border-amber-300 shadow-xs min-w-[130px]">
            <span className="font-baloo font-bold text-xs text-amber-800 mb-2 bg-amber-100 px-2.5 py-0.5 rounded-full">
              Nhóm A ({leftCount})
            </span>
            <div className="flex flex-wrap justify-center gap-2 max-w-[160px]">
              {Array.from({ length: leftCount }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-2xl sm:text-3xl filter drop-shadow-xs"
                >
                  {leftEmoji}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Center VS Box */}
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-amber-400 font-baloo font-black text-amber-950 text-base shadow-pop-xs border-2 border-amber-500">
            ?
          </div>

          {/* Right Group */}
          <div className="flex flex-col items-center bg-white/95 p-3.5 rounded-2xl border border-amber-300 shadow-xs min-w-[130px]">
            <span className="font-baloo font-bold text-xs text-amber-800 mb-2 bg-amber-100 px-2.5 py-0.5 rounded-full">
              Nhóm B ({rightCount})
            </span>
            <div className="flex flex-wrap justify-center gap-2 max-w-[160px]">
              {Array.from({ length: rightCount }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-2xl sm:text-3xl filter drop-shadow-xs"
                >
                  {rightEmoji}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Single counting group
    return (
      <div className="my-4 p-4 sm:p-6 bg-gradient-to-br from-emerald-50/90 via-teal-50/70 to-emerald-50/90 rounded-3xl border-2 border-emerald-200/80 shadow-washi text-center">
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 py-2">
          {Array.from({ length: Math.min(singleCount, 30) }).map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.25, rotate: [0, -10, 10, 0] }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.04 }}
              className="relative flex items-center justify-center p-2 rounded-2xl bg-white shadow-xs border border-emerald-200 cursor-pointer"
            >
              <span className="text-3xl sm:text-4xl">{emoji}</span>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-emerald-500 font-baloo font-black text-[10px] text-white shadow-xs">
                {i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // 2. ANALOG CLOCK (FULL SVG IMPLEMENTATION)
  if (visualType === 'clock') {
    const hours = visualData?.hours ?? 3;
    const minutes = visualData?.minutes ?? 0;
    const hourDeg = ((hours % 12) + minutes / 60) * 30; // 30 deg per hour
    const minuteDeg = minutes * 6; // 6 deg per minute

    // Compute hand tip coordinates in 200x200 SVG canvas
    const center = 100;
    const hRad = (hourDeg - 90) * (Math.PI / 180);
    const mRad = (minuteDeg - 90) * (Math.PI / 180);

    const hLen = 45; // hour hand length
    const mLen = 65; // minute hand length

    const hx = center + hLen * Math.cos(hRad);
    const hy = center + hLen * Math.sin(hRad);

    const mx = center + mLen * Math.cos(mRad);
    const my = center + mLen * Math.sin(mRad);

    // Tail coordinates (extension behind center)
    const hTailX = center - 10 * Math.cos(hRad);
    const hTailY = center - 10 * Math.sin(hRad);

    const mTailX = center - 14 * Math.cos(mRad);
    const mTailY = center - 14 * Math.sin(mRad);

    return (
      <div className="my-4 flex flex-col items-center justify-center p-5 bg-gradient-to-b from-sky-50 to-blue-50/80 rounded-3xl border-2 border-sky-200/80 shadow-washi space-y-3">
        <div className="relative flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-52 h-52 sm:w-60 sm:h-60 drop-shadow-md">
            {/* Outer Rim Shadow & Bezel */}
            <circle cx="100" cy="100" r="96" fill="#F59E0B" stroke="#D97706" strokeWidth="4" />
            <circle cx="100" cy="100" r="88" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="2" />
            <circle cx="100" cy="100" r="84" fill="#FFFFFF" />

            {/* 60 Minute Tick Marks */}
            {Array.from({ length: 60 }).map((_, i) => {
              const rad = (i * 6 - 90) * (Math.PI / 180);
              const isHourTick = i % 5 === 0;
              const r1 = isHourTick ? 76 : 80;
              const r2 = 84;
              return (
                <line
                  key={i}
                  x1={100 + r1 * Math.cos(rad)}
                  y1={100 + r1 * Math.sin(rad)}
                  x2={100 + r2 * Math.cos(rad)}
                  y2={100 + r2 * Math.sin(rad)}
                  stroke={isHourTick ? '#78350F' : '#CBD5E1'}
                  strokeWidth={isHourTick ? 2.5 : 1}
                  strokeLinecap="round"
                />
              );
            })}

            {/* Clock Numbers 1 to 12 */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => {
              const rad = (num * 30 - 90) * (Math.PI / 180);
              const numRadius = 66;
              const nx = 100 + numRadius * Math.cos(rad);
              const ny = 100 + numRadius * Math.sin(rad) + 4.5; // slight vertical optical center
              return (
                <text
                  key={num}
                  x={nx}
                  y={ny}
                  textAnchor="middle"
                  fill="#1E293B"
                  fontSize="14"
                  fontWeight="900"
                  fontFamily="Baloo 2, system-ui, sans-serif"
                >
                  {num}
                </text>
              );
            })}

            {/* Minute Hand (Kim dài màu xanh) */}
            <line
              x1={mTailX}
              y1={mTailY}
              x2={mx}
              y2={my}
              stroke="#2563EB"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            {/* Arrow/Pip on Minute Hand */}
            <circle cx={mx} cy={my} r="3" fill="#1D4ED8" />

            {/* Hour Hand (Kim ngắn màu đỏ) */}
            <line
              x1={hTailX}
              y1={hTailY}
              x2={hx}
              y2={hy}
              stroke="#DC2626"
              strokeWidth="6.5"
              strokeLinecap="round"
            />
            {/* Arrow/Pip on Hour Hand */}
            <circle cx={hx} cy={hy} r="4" fill="#B91C1C" />

            {/* Center Pivot Pin */}
            <circle cx="100" cy="100" r="7" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2.5" />
            <circle cx="100" cy="100" r="2.5" fill="#78350F" />
          </svg>
        </div>

        {/* Legend Pills for Kids */}
        <div className="flex items-center gap-4 text-xs font-baloo font-bold">
          <span className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 px-3 py-1 rounded-full border border-rose-300">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-600" />
            Kim ngắn: Giờ ({hours} giờ)
          </span>
          <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 px-3 py-1 rounded-full border border-blue-300">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
            Kim dài: Phút ({minutes === 0 ? 'đúng' : `${minutes} phút`})
          </span>
        </div>
      </div>
    );
  }

  // 3. RULER MEASUREMENT
  if (visualType === 'ruler') {
    const lengthCm = visualData?.lengthCm ?? 6;
    const totalCm = 10;

    return (
      <div className="my-4 flex flex-col items-center p-5 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 rounded-3xl border-2 border-amber-200/80 shadow-washi space-y-4">
        {/* Object to measure (e.g. Crayon / Pencil) */}
        <div className="w-full max-w-md flex items-center justify-start pl-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(lengthCm / totalCm) * 85}%` }}
            transition={{ duration: 0.8 }}
            className="h-8 rounded-r-2xl bg-gradient-to-r from-rose-400 via-pink-500 to-rose-600 flex items-center justify-between px-3 text-white font-baloo font-bold text-xs shadow-xs border border-rose-700"
          >
            <span>✏️ Bút Chì Màu</span>
            <span className="bg-white/30 px-2 py-0.5 rounded-full text-[10px]">{lengthCm} cm</span>
          </motion.div>
        </div>

        {/* Realistic SVG Ruler */}
        <div className="w-full max-w-md h-14 bg-amber-200/90 rounded-2xl border-2 border-amber-400 shadow-inner px-8 relative flex items-start pt-1">
          <div className="w-full flex justify-between relative">
            {Array.from({ length: totalCm + 1 }).map((_, cm) => (
              <div key={cm} className="flex flex-col items-center relative">
                <div className="w-0.5 h-4 bg-amber-900" />
                <span className="font-baloo font-bold text-[10px] text-amber-950 mt-0.5">{cm}</span>
                {cm < totalCm && (
                  <div className="absolute left-1/2 top-0 w-0.5 h-2 bg-amber-700" style={{ transform: 'translateX(100%)' }} />
                )}
              </div>
            ))}
          </div>
          <span className="absolute right-3 bottom-1.5 font-baloo font-black text-xs text-amber-900">cm</span>
        </div>
      </div>
    );
  }

  // 4. FRACTIONS (PIE / BAR)
  if (visualType === 'fraction') {
    const num = visualData?.numerator ?? 3;
    const den = visualData?.denominator ?? 4;

    return (
      <div className="my-4 flex flex-col sm:flex-row items-center justify-center gap-6 p-5 bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 rounded-3xl border-2 border-purple-200/80 shadow-washi">
        {/* Fraction Bar Representation */}
        <div className="flex flex-col items-center">
          <span className="font-baloo font-bold text-xs text-purple-900 mb-2">Thanh phân số:</span>
          <div className="flex h-12 w-48 sm:w-60 rounded-2xl border-2 border-purple-400 bg-white overflow-hidden shadow-xs">
            {Array.from({ length: den }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 flex items-center justify-center border-r last:border-r-0 border-purple-300 font-baloo font-bold text-xs transition-colors ${
                  i < num ? 'bg-gradient-to-b from-purple-400 to-purple-600 text-white font-black' : 'bg-slate-50 text-slate-400'
                }`}
              >
                1/{den}
              </div>
            ))}
          </div>
        </div>

        {/* Big Fraction Badge */}
        <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl border-2 border-purple-300 shadow-pop-xs font-baloo font-black text-2xl text-purple-950">
          <div className="flex flex-col items-center">
            <span>{num}</span>
            <div className="h-0.5 w-8 bg-purple-950 my-0.5" />
            <span>{den}</span>
          </div>
          <span className="text-sm font-vietnam font-bold text-purple-700 ml-2">
            ({num} phần {den})
          </span>
        </div>
      </div>
    );
  }

  // 5. GEOMETRY 2D (TRIANGLE, TRAPEZOID, CIRCLE, RECTANGLE)
  if (visualType === 'geometry') {
    const shape = visualData?.shape || 'triangle';
    const dim = visualData?.dimensions || {};

    return (
      <div className="my-4 flex flex-col items-center p-5 bg-gradient-to-br from-emerald-50/90 via-teal-50/70 to-emerald-50/90 rounded-3xl border-2 border-emerald-200/80 shadow-washi">
        {shape === 'triangle' && (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 120" className="w-52 h-32 overflow-visible">
              <polygon points="100,15 20,105 180,105" fill="#A7F3D0" stroke="#059669" strokeWidth="3" />
              {/* Height dashed line */}
              <line x1="100" y1="15" x2="100" y2="105" stroke="#DC2626" strokeWidth="2" strokeDasharray="4,4" />
              <rect x="100" y="95" width="10" height="10" fill="none" stroke="#DC2626" strokeWidth="1.5" />
              {/* Labels */}
              <text x="105" y="65" fill="#DC2626" fontSize="12" fontWeight="bold">h = {dim.height || '6 cm'}</text>
              <text x="90" y="120" fill="#047857" fontSize="12" fontWeight="bold">a = {dim.base || '8 cm'}</text>
            </svg>
          </div>
        )}

        {shape === 'trapezoid' && (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 220 130" className="w-56 h-36 overflow-visible">
              <polygon points="60,20 160,20 200,105 20,105" fill="#FDE68A" stroke="#D97706" strokeWidth="3" />
              {/* Height line */}
              <line x1="60" y1="20" x2="60" y2="105" stroke="#DC2626" strokeWidth="2" strokeDasharray="4,4" />
              {/* Labels */}
              <text x="95" y="14" fill="#B45309" fontSize="12" fontWeight="bold">a = {dim.topBase || '4 cm'}</text>
              <text x="95" y="122" fill="#B45309" fontSize="12" fontWeight="bold">b = {dim.base || '8 cm'}</text>
              <text x="25" y="65" fill="#DC2626" fontSize="12" fontWeight="bold">h = {dim.height || '5 cm'}</text>
            </svg>
          </div>
        )}

        {shape === 'circle' && (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 160 160" className="w-44 h-44 overflow-visible">
              <circle cx="80" cy="80" r="60" fill="#BAE6FD" stroke="#0284C7" strokeWidth="3" />
              <circle cx="80" cy="80" r="4" fill="#0369A1" />
              <line x1="80" y1="80" x2="140" y2="80" stroke="#DC2626" strokeWidth="2.5" />
              <text x="75" y="75" fill="#0369A1" fontSize="12" fontWeight="bold">O</text>
              <text x="95" y="75" fill="#DC2626" fontSize="12" fontWeight="bold">r = {dim.radius || '5 cm'}</text>
            </svg>
          </div>
        )}

        {shape === 'rectangle' && (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 110" className="w-52 h-32 overflow-visible">
              <rect x="20" y="20" width="160" height="70" fill="#E9D5FF" stroke="#7C3AED" strokeWidth="3" rx="4" />
              <text x="80" y="14" fill="#6D28D9" fontSize="12" fontWeight="bold">Dài = {dim.length || '12 cm'}</text>
              <text x="185" y="60" fill="#6D28D9" fontSize="12" fontWeight="bold">Rộng = {dim.width || '6 cm'}</text>
            </svg>
          </div>
        )}
      </div>
    );
  }

  // 6. SPEED - DISTANCE - TIME (s = v * t)
  if (visualType === 'speed') {
    const s = visualData?.distance || '120 km';
    const v = visualData?.speed || '40 km/h';
    const t = visualData?.time || '3 giờ';

    return (
      <div className="my-4 p-5 bg-gradient-to-r from-sky-50 via-teal-50 to-emerald-50 rounded-3xl border-2 border-sky-200/80 shadow-washi space-y-4">
        {/* Road Track with Moving Car */}
        <div className="relative h-16 bg-slate-200 rounded-2xl border-2 border-slate-300 overflow-hidden flex items-center px-4">
          <div className="w-full h-1 border-t-2 border-dashed border-white" />
          <motion.div
            animate={{ x: [0, 200, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute text-4xl select-none"
          >
            🚗
          </motion.div>
        </div>

        {/* Formulas & Specs Tri-Cards */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
          <div className="p-2.5 rounded-2xl bg-white border border-sky-200 shadow-2xs">
            <span className="font-baloo font-bold text-[11px] text-sky-700 block">Quãng đường (s)</span>
            <span className="font-baloo font-black text-sm sm:text-base text-sky-950">{s}</span>
          </div>
          <div className="p-2.5 rounded-2xl bg-white border border-emerald-200 shadow-2xs">
            <span className="font-baloo font-bold text-[11px] text-emerald-700 block">Vận tốc (v)</span>
            <span className="font-baloo font-black text-sm sm:text-base text-emerald-950">{v}</span>
          </div>
          <div className="p-2.5 rounded-2xl bg-white border border-purple-200 shadow-2xs">
            <span className="font-baloo font-bold text-[11px] text-purple-700 block">Thời gian (t)</span>
            <span className="font-baloo font-black text-sm sm:text-base text-purple-950">{t}</span>
          </div>
        </div>
      </div>
    );
  }

  // 7. ARRAY / MULTIPLICATION MATRIX
  if (visualType === 'array') {
    const rows = visualData?.rows || 3;
    const cols = visualData?.cols || 4;
    const emoji = visualData?.itemEmoji || '🧁';

    return (
      <div className="my-4 flex flex-col items-center p-5 bg-gradient-to-br from-pink-50 via-amber-50 to-yellow-50 rounded-3xl border-2 border-pink-200/80 shadow-washi">
        <div className="space-y-2">
          {Array.from({ length: rows }).map((_, r) => (
            <div key={r} className="flex gap-2 sm:gap-3">
              {Array.from({ length: cols }).map((_, c) => (
                <motion.span
                  key={c}
                  whileHover={{ scale: 1.3 }}
                  className="text-2xl sm:text-3xl filter drop-shadow-xs cursor-pointer"
                >
                  {emoji}
                </motion.span>
              ))}
            </div>
          ))}
        </div>
        <span className="mt-3 font-baloo font-extrabold text-xs text-amber-900 bg-white/90 px-3 py-1 rounded-full border border-amber-200 shadow-2xs">
          {rows} hàng × {cols} cột = {rows * cols} {emoji}
        </span>
      </div>
    );
  }

  return null;
};
