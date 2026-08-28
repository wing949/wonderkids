import type { GradeLevel } from '../../types/index.ts';
import { getCompetitionPack, getPracticePack } from './index.ts';
import { getViolympicReferenceItems } from './violympicReferenceBank.ts';
import { getViolympicDigitalItems, type ViolympicDigitalSubject } from './violympicDigitalReferenceBank.ts';
import violympicMathG1 from './data/violympicMathGrade1.json' with { type: 'json' };
import violympicMathG2 from './data/violympicMathGrade2.json' with { type: 'json' };
import violympicMathG3 from './data/violympicMathGrade3.json' with { type: 'json' };
import violympicMathG4 from './data/violympicMathGrade4.json' with { type: 'json' };
import violympicMathG5 from './data/violympicMathGrade5.json' with { type: 'json' };
import type {
  PracticeItem,
  PracticeItemType,
  PracticeSection,
  PracticeSet,
  PracticeSetLevel,
  PracticeSubject,
} from './types.ts';

const SUBJECT_NAMES: Record<PracticeSubject, string> = {
  math: 'Toán',
  vietnamese: 'Tiếng Việt',
  english: 'Tiếng Anh',
  math_en: 'Toán Tiếng Anh',
};

const ROUND_COUNT_BY_SUBJECT: Record<PracticeSubject, number> = {
  math: 35,
  vietnamese: 35,
  english: 12,
  math_en: 20,
};

function roundStage(round: number): { label: string; level: PracticeSetLevel; badge: string } {
  if (round === 10) return { label: 'Thi thử Cấp Trường', level: 'advanced', badge: '🏫 Cấp Trường' };
  if (round === 15) return { label: 'Thi thử Cấp Quận / Huyện', level: 'advanced', badge: '🏛️ Cấp Huyện' };
  if (round === 20) return { label: 'Thi thử Cấp Tỉnh / TP', level: 'mock_exam', badge: '⭐ Cấp Tỉnh' };
  if (round >= 30) return { label: 'Chung kết Cấp Quốc Gia', level: 'mock_exam', badge: '🏆 Quốc Gia' };
  if (round < 10) return { label: 'Tự luyện sơ loại', level: 'foundation', badge: '🌱 Khởi động' };
  if (round < 20) return { label: 'Luyện đề nâng cao', level: 'acceleration', badge: '🚀 Tăng tốc' };
  return { label: 'Chinh phục đấu trường', level: 'advanced', badge: '🎯 Về đích' };
}

function stableHash(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i += 1) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

const setsCache = new Map<string, PracticeSet[]>();

function isSafePracticeItem(item: PracticeItem, expectedSubject: PracticeSubject): boolean {
  if (!item.prompt || item.prompt.length < 12) return false;
  if (item.sourceLabel && /(?:dap\s*an|đáp\s*án)/i.test(item.sourceLabel)) return false;
  const p = item.prompt;
  if (/[\[\]\{\}\|\\~«»⁄ˆ`]{1,}/.test(p)) return false;
  if (/[=_]{2,}|[-–—]{2,}/.test(p)) return false;
  if (/\b(?:tìm\s+đường|mê\s+cung|tô\s+màu|vẽ\s+thêm|khoanh\s+vào\s+hình|nối\s+cột|chú\s+khỉ\s+thông\s+minh|bức\s+tranh\s+bí\s+ẩn|cặp\s+ô\s+bằng\s+nhau|đổi\s+chỗ\s+hai\s+ô|nối\s+hình|ghép\s+hình|lối\s+đi|cà\s+rốt|con\s+đường\s+nào)\b/iu.test(p)) return false;
  if (/\b(?:ATISWEIT|AMIS\s+WEE|answef)\b/i.test(p)) return false;
  if (/\b[A-Z]{2,}\s+[A-Z]{2,}\s+[A-Z]{2,}\b/.test(p)) return false;

  // Subject integrity check:
  if (expectedSubject === 'vietnamese') {
    // Tiếng Việt must NOT contain math formulas or math keywords
    if (/[\d\s]+[\+\-\*xX×÷/=]+[\d\s]+/.test(p)) return false;
    if (/\b(?:phép\s+tính|tính\s+kết\s+quả|tính\s*:|tính\s+nhanh|tổng|hiệu|tích|thương|hình\s+tam\s+giác|hình\s+vuông|hình\s+chữ\s+nhật|chu\s+vi|diện\s+tích|số\s+chẵn|số\s+lẻ|số\s+lớn\s+nhất|số\s+bé\s+nhất)\b/i.test(p)) return false;
  } else if (expectedSubject === 'math') {
    // Toán must NOT contain Tiếng Việt grammar keywords
    if (/\b(?:chính\s+tả|âm\s+đầu|vần|dấu\s+thanh|dấu\s+câu|dấu\s+chấm|dấu\s+phẩy|từ\s+đồng\s+nghĩa|từ\s+trái\s+nghĩa|thành\s+ngữ|tục\s+ngữ|bài\s+thơ|bài\s+đọc)\b/i.test(p)) return false;
  }

  if (item.options) {
    for (const opt of item.options) {
      if (/[\[\]\{\}\|\\~«»⁄ˆ`]{1,}/.test(opt.label)) return false;
      if (/[=_]{2,}|[-–—]{2,}/.test(opt.label)) return false;
      if (/\b[A-Z]{2,}\s+[A-Z]{2,}\s+[A-Z]{2,}\b/.test(opt.label)) return false;
    }
  }
  return true;
}

export function getViolympicExamSets(subject: PracticeSubject, grade: GradeLevel): PracticeSet[] {
  const cacheKey = `${subject}-${grade}`;
  const cached = setsCache.get(cacheKey);
  if (cached) return cached;

  // 100% Verified Math Sets directly from TS. Pham Van Cong's official books
  if (subject === 'math') {
    const mathSetsByGrade: Record<GradeLevel, PracticeSet[]> = {
      1: violympicMathG1 as unknown as PracticeSet[],
      2: violympicMathG2 as unknown as PracticeSet[],
      3: violympicMathG3 as unknown as PracticeSet[],
      4: violympicMathG4 as unknown as PracticeSet[],
      5: violympicMathG5 as unknown as PracticeSet[],
    };
    const mathSets = mathSetsByGrade[grade] || [];
    setsCache.set(cacheKey, mathSets);
    return mathSets;
  }

  const ocrItems = getViolympicReferenceItems({ subject: subject as any, grade });
  const digItems = subject !== 'english'
    ? getViolympicDigitalItems({ subject: subject as ViolympicDigitalSubject, grade })
    : [];

  let authoredItems: PracticeItem[] = [];
  if (subject === 'vietnamese') {
    const tnPack = getCompetitionPack('trang_nguyen_simulation', grade);
    const pracPack = getPracticePack('vietnamese', grade);
    authoredItems = [
      ...tnPack.sets.flatMap((s) => s.sections).flatMap((s) => s.items),
      ...pracPack.sets.flatMap((s) => s.sections).flatMap((s) => s.items),
    ];
  } else if (subject === 'english') {
    const ioePack = getCompetitionPack('ioe_simulation', grade);
    const pracPack = getPracticePack('english', grade);
    authoredItems = [
      ...ioePack.sets.flatMap((s) => s.sections).flatMap((s) => s.items),
      ...pracPack.sets.flatMap((s) => s.sections).flatMap((s) => s.items),
    ];
  } else if (subject === 'math_en') {
    const pracPack = getPracticePack('math_en', grade);
    authoredItems = pracPack.sets.flatMap((s) => s.sections).flatMap((s) => s.items);
  }

  const pool: PracticeItem[] = [...ocrItems, ...digItems, ...authoredItems].filter((it) => isSafePracticeItem(it, subject));

  const totalRounds = ROUND_COUNT_BY_SUBJECT[subject] || 12;
  const sets: PracticeSet[] = [];

  if (pool.length === 0) {
    setsCache.set(cacheKey, []);
    return [];
  }

  for (let r = 1; r <= totalRounds; r += 1) {
    const stage = roundStage(r);
    const setId = `violympic-exam-${subject.replace('_', '-')}-g${grade}-v${String(r).padStart(2, '0')}`;
    
    // Pick 30 items for this round with deterministic seed
    const roundSeed = stableHash(`${subject}-${grade}-round-${r}`);
    const selectedItems: PracticeItem[] = [];
    const step = Math.max(1, Math.floor(pool.length / 30));
    const startIdx = (roundSeed + (r - 1) * 7) % pool.length;

    for (let i = 0; i < 30; i += 1) {
      const itemIdx = (startIdx + i * step) % pool.length;
      const baseItem = pool[itemIdx];
      const sectionIndex = Math.floor(i / 10);
      const questionIndex = i % 10;
      const sectionId = `${setId}-p${sectionIndex + 1}`;
      const itemId = `${sectionId}-q${String(questionIndex + 1).padStart(2, '0')}`;

      selectedItems.push({
        ...baseItem,
        id: itemId,
        difficulty: sectionIndex === 0 ? 'basic' : sectionIndex === 1 ? 'application' : 'challenge',
        points: 10,
      });
    }

    const sections: [PracticeSection, PracticeSection, PracticeSection] = [0, 1, 2].map((sIndex) => {
      const sectionItems = selectedItems.slice(sIndex * 10, (sIndex + 1) * 10);
      const sId = `${setId}-p${sIndex + 1}`;
      const sectionTitles = ['Khởi động tính nhanh', 'Vận dụng thông minh', 'Chinh phục đỉnh cao'];
      return {
        id: sId,
        title: `Phần ${sIndex + 1}: ${sectionTitles[sIndex]}`,
        instruction: 'Hoàn thành đủ 10 hoạt động. Bé có thể xem lại trước khi nộp bài.',
        activityTypes: [...new Set(sectionItems.map((it) => it.type))] as PracticeItemType[],
        maxPoints: 100,
        items: sectionItems,
      };
    }) as [PracticeSection, PracticeSection, PracticeSection];

    sets.push({
      id: setId,
      subject,
      grade,
      setNumber: r,
      title: `Vòng ${r}: ${stage.label} — ${SUBJECT_NAMES[subject]} Lớp ${grade}`,
      level: stage.level,
      totalPoints: 300,
      timeLimitSeconds: r >= 10 ? 1800 : undefined,
      sections,
    });
  }

  setsCache.set(cacheKey, sets);
  return sets;
}

export function getViolympicExamSet(subject: PracticeSubject, grade: GradeLevel, roundNumber: number): PracticeSet | null {
  const sets = getViolympicExamSets(subject, grade);
  return sets.find((s) => s.setNumber === roundNumber) || null;
}
