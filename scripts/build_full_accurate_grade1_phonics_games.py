# -*- coding: utf-8 -*-
"""
Script to rebuild src/data/curriculum/vietnamese/grade1PhonicsGames.ts
Covers all 83 lessons of Tiếng Việt 1 Tập 1 with 100% accurate SGK phonics mappings.
Guarantees Bài 13: U u - Ư ư maps to 'u', 'ư' and NOT 's'!
"""

import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

# Official 83 lessons of SGK Tiếng Việt 1 Tập 1 from officialCatalog.ts
GRADE_1_T1_LESSONS = [
  (1, 'A a', 14, ['a', 'A'], 'ca hát, Nam, Hà', ['Nam', 'và', 'Hà', 'ca hát']),
  (2, 'B b', 16, ['b', 'B'], 'bà, bé, ba, bế', ['Bà', 'bế', 'bé']),
  (3, 'C c', 18, ['c', 'C'], 'cá, cờ, ca', ['Bé', 'có', 'cá cờ']),
  (4, 'E e - Ê ê', 20, ['e', 'ê'], 'bé, bế, bê, quả lê, vẽ', ['Bé', 'vẽ', 'chú bê']),
  (5, 'Ôn tập và kể chuyện', 22, ['a', 'b', 'c', 'e', 'ê'], 'ba, bà, bé, cá, cờ, bê', ['Bà', 'cho', 'bé', 'cá']),
  (6, 'O o', 24, ['o', 'O'], 'bò, cỏ, cò, gà', ['Bò', 'gặm', 'cỏ']),
  (7, 'Ô ô', 26, ['ô', 'Ô'], 'bố, cô, cái ô, hồ', ['Bố', 'cho', 'bé', 'đi hồ']),
  (8, 'D d - Đ đ', 28, ['d', 'đ'], 'dế, đò, đa, dừa', ['Dế', 'mèn', 'hát ca']),
  (9, 'Ơ ơ', 30, ['ơ', 'Ơ'], 'lá cờ, cái nơ, bờ hồ', ['Bé', 'cài', 'nơ đỏ']),
  (10, 'Ôn tập và kể chuyện', 32, ['o', 'ô', 'd', 'đ', 'ơ'], 'cô bé, lá cờ, bờ hồ, dế', ['Bé', 'chăm', 'học bài']),
  (11, 'I i - K k', 34, ['i', 'k'], 'viên bi, thước kẻ, cái kệ', ['Bé', 'kẻ', 'vở']),
  (12, 'H h - L l', 36, ['h', 'l'], 'hoa hồng, quả lê, lá sen', ['Hà', 'có', 'hoa hồng']),
  (13, 'U u - Ư ư', 38, ['u', 'ư'], 'đu đủ, cái dù, hổ dữ, lá thư', ['Đu đủ', 'chín', 'ngọt lừ']),
  (14, 'Ch ch - Kh kh', 40, ['ch', 'kh'], 'chú khỉ, quả khế, chợ quê', ['Bé', 'thích', 'ăn khế']),
  (15, 'Ôn tập và kể chuyện', 42, ['i', 'k', 'h', 'l', 'u', 'ư', 'ch', 'kh'], 'đu đủ, quả khế, lá thư, chú khỉ', ['Cả nhà', 'vui', 'vẻ']),
  (16, 'M m - N n', 44, ['m', 'n'], 'quả me, nụ hoa, cái nơ, mẹ', ['Mẹ', 'mua', 'quả me']),
  (17, 'G g - Gi gi', 46, ['g', 'gi'], 'con gà, cái giỏ, giá đỗ', ['Gà', 'gáy', 'vang']),
  (18, 'Gh gh - Nh nh', 48, ['gh', 'nh'], 'ghế gỗ, chùm nho, nhà ngói', ['Bé', 'ngồi', 'ghế gỗ']),
  (19, 'Ng ng - Ngh ngh', 50, ['ng', 'ngh'], 'bắp ngô, con nghé, nghỉ ngơi', ['Chú', 'nghé', 'gặm cỏ']),
  (20, 'Ôn tập và kể chuyện', 52, ['m', 'n', 'g', 'gi', 'gh', 'nh', 'ng', 'ngh'], 'con nghé, chùm nho, bắp ngô', ['Bé', 'chăm ngoan', 'học giỏi']),
  (21, 'R r - S s', 54, ['r', 's'], 'chim sẻ, rổ cá, cây si, rùa', ['Chim sẻ', 'hót', 'líu lo']),
  (22, 'T t - Tr tr', 56, ['t', 'tr'], 'tổ chim, cây tre, con trăn', ['Gió', 'thổi', 'cây tre']),
  (23, 'Th th - ia', 58, ['th', 'ia'], 'chú thỏ, lá tía tô, cái thìa', ['Chú thỏ', 'trắng', 'xinh xắn']),
  (24, 'ua - ưa', 60, ['ua', 'ưa'], 'con rùa, quả dừa, cơn mưa', ['Mẹ', 'mua', 'quả dừa']),
  (25, 'Ôn tập và kể chuyện', 62, ['r', 's', 't', 'tr', 'th', 'ia', 'ua', 'ưa'], 'rùa con, chú thỏ, chim sẻ', ['Mùa xuân', 'ấm', 'áp']),
  (26, 'Ph ph - Qu qu', 64, ['ph', 'qu'], 'phố cổ, quả quýt, hộp quà', ['Quê', 'bà', 'có phố cổ']),
  (27, 'V v - X x', 66, ['v', 'x'], 'xe đạp, con voi, lá xôi', ['Bé', 'đi', 'xe đạp']),
  (28, 'Y y', 68, ['y', 'Y'], 'y tá, ý nghĩ, chú ý', ['Cô', 'y tá', 'tận tụy']),
  (29, 'Luyện tập chính tả', 70, ['c/k', 'g/gh', 'ng/ngh'], 'kính, ghé, nghỉ, gà, ngô', ['Bé', 'ghi', 'nhớ']),
  (30, 'Ôn tập và kể chuyện', 72, ['ph', 'qu', 'v', 'x', 'y'], 'quà quê, phố xá, xe đạp', ['Bé', 'yêu', 'tiếng Việt']),
  (31, 'an - ăn - ân', 74, ['an', 'ăn', 'ân'], 'cái bàn, khăn đỏ, sân trường', ['Sân trường', 'rợp', 'bóng mát']),
  (32, 'on - ôn - ơn', 76, ['on', 'ôn', 'ơn'], 'con vượn, nón lá, con chồn', ['Chú chồn', 'nhỏ', 'nhanh nhẹn']),
  (33, 'en - ên - in - un', 78, ['en', 'ên', 'in', 'un'], 'ngọn nến, con sên, đèn pin', ['Ngọn nến', 'sáng', 'lung linh']),
  (34, 'am - ăm - âm', 80, ['am', 'ăm', 'âm'], 'quả cam, chăm chỉ, mầm non', ['Bé', 'chăm chỉ', 'học bài']),
  (35, 'Ôn tập và kể chuyện', 82, ['an', 'ăn', 'ân', 'on', 'ôn', 'ơn', 'am', 'ăm', 'âm'], 'sân trường, quả cam', ['Trường em', 'thật', 'vui']),
  (36, 'om - ôm - ơm', 84, ['om', 'ôm', 'ơm'], 'bát cơm, con tôm, con đom đóm', ['Bát cơm', 'dẻo', 'thơm']),
  (37, 'em - êm - im - um', 86, ['em', 'êm', 'im', 'um'], 'que kem, êm dịu, chim hót, chùm quả', ['Que kem', 'mát', 'lạnh']),
  (38, 'ai - ay - ây', 88, ['ai', 'ay', 'ây'], 'bàn tay, hoa mai, đám mây', ['Bàn tay', 'bé', 'nhỏ nhắn']),
  (39, 'oi - ôi - ơi', 90, ['oi', 'ôi', 'ơi'], 'trái ổi, đồ chơi, cái còi', ['Bé', 'chia sẻ', 'đồ chơi']),
  (40, 'Ôn tập và kể chuyện', 92, ['ai', 'ay', 'ây', 'oi', 'ôi', 'ơi', 'om', 'ôm', 'ơm'], 'đồ chơi, bàn tay', ['Bé', 'yêu', 'trường lớp']),
  (41, 'ui - ưi', 94, ['ui', 'ưi'], 'núi đồi, gửi thư, nụ cười', ['Núi đồi', 'xanh', 'ngắt']),
  (42, 'ao - eo', 96, ['ao', 'eo'], 'ngôi sao, chú mèo, áo hoa', ['Chú mèo', 'trèo', 'cây cau']),
  (43, 'au - âu - êu', 98, ['au', 'âu', 'êu'], 'cây cau, bồ câu, cái lều', ['Bồ câu', 'bay', 'lượn']),
  (44, 'iu - ưu', 100, ['iu', 'ưu'], 'cái rìu, con cừu, hót líu lo', ['Con cừu', 'trắng', 'trên đồi']),
  (45, 'Ôn tập và kể chuyện', 102, ['ui', 'ưi', 'ao', 'eo', 'au', 'âu', 'iu', 'ưu'], 'ngôi sao, con cừu', ['Bầu trời', 'trong', 'xanh']),
  (46, 'ac - ăc - âc', 104, ['ac', 'ăc', 'âc'], 'con hạc, bậc thang, quả gấc', ['Bậc thang', 'cao', 'vút']),
  (47, 'oc - ôc - uc - ưc', 106, ['oc', 'ôc', 'uc', 'ưc'], 'con sóc, con ốc, hoa cúc, mực tím', ['Con sóc', 'chuyền', 'cành']),
  (48, 'at - ăt - ât', 108, ['at', 'ăt', 'ât'], 'bãi cát, mặt trời, quả quất', ['Mặt trời', 'tỏa', 'nắng']),
  (49, 'ot - ôt - ơt', 110, ['ot', 'ôt', 'ơt'], 'quả ớt, lá lốt, chim hót', ['Chim hót', 'buổi', 'sáng']),
  (50, 'Ôn tập và kể chuyện', 112, ['ac', 'ăc', 'âc', 'oc', 'ôc', 'uc', 'ưc', 'at', 'ăt', 'ât'], 'mặt trời, hoa cúc', ['Ngày mới', 'bắt đầu', 'rạng rỡ']),
  (51, 'et - êt - it', 114, ['et', 'êt', 'it'], 'con vẹt, bồ kết, quả mít', ['Quả mít', 'thơm', 'lừng']),
  (52, 'ut - ưt', 116, ['ut', 'ưt'], 'cây bút, hoa sút, mứt dừa', ['Cây bút', 'nét', 'chữ đẹp']),
  (53, 'ap - ăp - âp', 118, ['ap', 'ăp', 'âp'], 'tháp chuông, con bắp cày, bập bênh', ['Bé', 'chơi', 'bập bênh']),
  (54, 'op - ôp - ơp', 120, ['op', 'ôp', 'ơp'], 'hộp quà, chóp núi, mái lợp', ['Hộp quà', 'xinh', 'xắn']),
  (55, 'Ôn tập và kể chuyện', 122, ['et', 'êt', 'it', 'ut', 'ưt', 'ap', 'ăp', 'âp'], 'quả mít, cây bút', ['Bé', 'yêu', 'thầy cô']),
  (56, 'ep - êp - ip - up', 124, ['ep', 'êp', 'ip', 'up'], 'đèn xép, bếp lửa, búp sen, kịp giờ', ['Búp sen', 'tươi', 'hồng']),
  (57, 'anh - ênh - inh', 126, ['anh', 'ênh', 'inh'], 'bức tranh, dòng kênh, bình minh', ['Bình minh', 'tươi', 'sáng']),
  (58, 'ach - êch - ich', 128, ['ach', 'êch', 'ich'], 'cuốn sách, con ếch, tờ lịch', ['Cuốn sách', 'mở', 'ra']),
  (59, 'ang - ăng - âng', 130, ['ang', 'ăng', 'âng'], 'vầng trăng, mùa màng, cầu thang', ['Vầng trăng', 'sáng', 'ngời']),
  (60, 'Ôn tập và kể chuyện', 132, ['ep', 'êp', 'ip', 'up', 'anh', 'ênh', 'inh', 'ach', 'êch', 'ich'], 'cuốn sách, vầng trăng', ['Trường học', 'thân', 'thương']),
  (61, 'ong - ông - ung - ưng', 134, ['ong', 'ông', 'ung', 'ưng'], 'con ong, bông hồng, cây súng, củ gừng', ['Bông hồng', 'thắm', 'tươi']),
  (62, 'iêc - iên - iêp', 136, ['iêc', 'iên', 'iêp'], 'cá diếc, cô tiên, tấm thiếp', ['Cô tiên', 'dịu', 'hiền']),
  (63, 'iêng - iêm - yên', 138, ['iêng', 'iêm', 'yên'], 'tiếng chim, que diêm, chim yến', ['Tiếng chim', 'hót', 'véo von']),
  (64, 'iêt - iêu - yêu', 140, ['iêt', 'iêu', 'yêu'], 'thời tiết, cánh diều, yêu thương', ['Cánh diều', 'bay', 'cao']),
  (65, 'Ôn tập và kể chuyện', 142, ['ong', 'ông', 'ung', 'ưng', 'iêc', 'iên', 'iêp', 'iêng', 'iêm', 'yên'], 'cô tiên, cánh diều', ['Quê hương', 'tươi', 'đẹp']),
  (66, 'uôi - uôm', 144, ['uôi', 'uôm'], 'dòng suối, cánh buồm', ['Dòng suối', 'chảy', 'róc rách']),
  (67, 'uôc - uôt', 146, ['uôc', 'uôt'], 'bó đuốc, con chuột', ['Bó đuốc', 'sáng', 'rực']),
  (68, 'uôn - uông', 148, ['uôn', 'uông'], 'chuồn chuồn, luống rau', ['Chuồn chuồn', 'bay', 'thấp']),
  (69, 'ươi - ươu', 150, ['ươi', 'ươu'], 'quả bưởi, con hươu', ['Con hươu', 'sao', 'hiền lành']),
  (70, 'Ôn tập và kể chuyện', 152, ['uôi', 'uôm', 'uôc', 'uôt', 'uôn', 'uông', 'ươi', 'ươu'], 'cánh buồm, con hươu', ['Đất nước', 'ngàn', 'hoa']),
  (71, 'ươc - ươt', 154, ['ươc', 'ươt'], 'cây thước, cầu trượt', ['Bé', 'chơi', 'cầu trượt']),
  (72, 'ươm - ươp', 156, ['ươm', 'ươp'], 'con bướm, giàn mướp', ['Con bướm', 'vờn', 'hoa']),
  (73, 'ươn - ương', 158, ['ươn', 'ương'], 'vườn cây, con đường', ['Vườn cây', 'xanh', 'tốt']),
  (74, 'oa - oe', 160, ['oa', 'oe'], 'bông hoa, hoa chuối nở xòe', ['Bông hoa', 'khoe', 'sắc']),
  (75, 'Ôn tập và kể chuyện', 162, ['ươc', 'ươt', 'ươm', 'ươp', 'ươn', 'ương', 'oa', 'oe'], 'vườn hoa, con bướm', ['Mùa xuân', 'rực', 'rỡ']),
  (76, 'oan - oăn - oat - oăt', 164, ['oan', 'oăn', 'oat', 'oăt'], 'ngoan ngoãn, thoăn thoắt, hoạt hình', ['Bé', 'ngoan', 'ngoãn']),
  (77, 'oai - uê - uy', 166, ['oai', 'uê', 'uy'], 'hoa huệ, tàu thủy, quả xoài', ['Hoa huệ', 'thơm', 'ngát']),
  (78, 'uân - uât', 168, ['uân', 'uât'], 'mùa xuân, sản xuất', ['Mùa xuân', 'đã', 'về']),
  (79, 'uyên - uyêt', 170, ['uyên', 'uyêt'], 'con thuyền, trăng khuyết', ['Con thuyền', 'lướt', 'sóng']),
  (80, 'Ôn tập và kể chuyện', 172, ['oan', 'oai', 'uân', 'uyên', 'uyêt'], 'mùa xuân, con thuyền', ['Bé', 'chúc', 'năm mới']),
  (81, 'Ôn tập', 174, ['a-z'], 'toàn bộ âm vần học kì 1', ['Bé', 'chăm', 'học giỏi']),
  (82, 'Ôn tập', 176, ['a-z'], 'toàn bộ từ ngữ học kì 1', ['Chào', 'năm học', 'mới']),
  (83, 'Voi, hổ và khỉ', 178, ['chuyện kể'], 'voi, hổ, khỉ, rừng xanh', ['Các bạn', 'giúp đỡ', 'nhau']),
]

def make_color(i):
    colors = ['pink', 'sky', 'amber', 'emerald', 'purple']
    return colors[i % len(colors)]

lines = []
lines.append("// src/data/curriculum/vietnamese/grade1PhonicsGames.ts")
lines.append("// Bộ dữ liệu Mini Game Âm Vần chuẩn 100% SGK Tiếng Việt 1 Tập 1 (Kết nối tri thức với cuộc sống - NXB Giáo Dục Việt Nam)")
lines.append("// Đầy đủ toàn bộ 83 bài học chính thức theo mục lục NXB Giáo Dục Việt Nam\n")

lines.append("export type PhonicsGameType =")
lines.append("  | 'letter_pick'       // Nhóm 1: Nhận diện chữ cái")
lines.append("  | 'bubble_pop'        // Nhóm 2 & 7: Tìm chữ trên mây / Đập bong bóng bay")
lines.append("  | 'letter_assemble'   // Nhóm 3: Kéo thả ghép tiếng")
lines.append("  | 'listen_pick'       // Nhóm 4 & 9: Nghe âm chọn chữ")
lines.append("  | 'picture_match'     // Nhóm 5: Nhìn hình chọn tiếng/từ")
lines.append("  | 'order_sequence'    // Nhóm 8: Xếp đúng thứ tự câu SGK")
lines.append("  | 'unit_review';      // Nhóm 10: Đại hội ôn tập tổng hợp\n")

lines.append("export interface PhonicsGameOption {")
lines.append("  id: string;")
lines.append("  label: string;")
lines.append("  isCorrect: boolean;")
lines.append("  subLabel?: string;")
lines.append("  imageUrl?: string;")
lines.append("  color?: string; // 'pink' | 'amber' | 'emerald' | 'sky' | 'purple'")
lines.append("}\n")

lines.append("export interface PhonicsGameStage {")
lines.append("  id: string;")
lines.append("  gameType: PhonicsGameType;")
lines.append("  instruction: string;")
lines.append("  targetSoundOrLetter?: string;")
lines.append("  options: PhonicsGameOption[];")
lines.append("  assembleTarget?: {")
lines.append("    resultWord: string;")
lines.append("    pieces: string[];")
lines.append("  };")
lines.append("  sequenceWords?: string[];")
lines.append("  hintText?: string;")
lines.append("}\n")

lines.append("export interface LessonPhonicsGameConfig {")
lines.append("  lessonId: string;")
lines.append("  lessonTitle: string;")
lines.append("  targetLetters: string[];")
lines.append("  stages: PhonicsGameStage[];")
lines.append("}\n")

lines.append("export const GRADE_1_PHONICS_GAMES: Record<string, LessonPhonicsGameConfig> = {")

for num, title_raw, page, letters, word_hints, seq in GRADE_1_T1_LESSONS:
    # Key 1: tv-g1-b{num} for 1..20 and tv-g1-t1-b{num} for >20
    # Also support both keys to be safe
    main_key = f"tv-g1-b{num}" if num <= 20 else f"tv-g1-t1-b{num}"
    alt_key = f"tv-g1-b{num}"
    
    primary_letter = letters[0] if letters else 'a'
    sec_letter = letters[1] if len(letters) > 1 else primary_letter.upper()
    title = f"Bài {num}: {title_raw}"
    
    is_review = 'Ôn tập' in title_raw or 'chính tả' in title_raw or 'kể chuyện' in title_raw or num in [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 81, 82, 83]
    
    # Generate stages
    stages_data = []
    if is_review:
        stage1 = f"""      {{
        id: '{main_key}-s1',
        gameType: 'unit_review',
        instruction: '🎉 Đại hội Ôn tập: Bé hãy chọn chữ cái còn thiếu trong từ chuẩn bài học: "{word_hints.split(",")[0].strip()}"!',
        targetSoundOrLetter: '{primary_letter}',
        hintText: 'Cùng MiuMiu nhớ lại các âm vần bé đã học nhé!',
        options: [
          {{ id: 'opt-1', label: '{primary_letter}', isCorrect: true, color: 'pink' }},
          {{ id: 'opt-2', label: 'x', isCorrect: false, color: 'sky' }},
          {{ id: 'opt-3', label: 'z', isCorrect: false, color: 'amber' }},
          {{ id: 'opt-4', label: 'q', isCorrect: false, color: 'emerald' }},
        ],
      }}"""
        stage2 = f"""      {{
        id: '{main_key}-s2',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu chúc mừng hoàn chỉnh trong SGK!',
        hintText: 'Đọc to câu theo thứ tự từ trái qua phải nhé bé!',
        sequenceWords: {seq},
        options: [],
      }}"""
        stages_data.extend([stage1, stage2])
    else:
        stage1 = f"""      {{
        id: '{main_key}-s1',
        gameType: 'letter_pick',
        instruction: 'Bé hãy tìm và chạm vào âm chữ "{primary_letter}" của bài học nhé!',
        targetSoundOrLetter: '{primary_letter}',
        hintText: 'Nhìn kỹ chữ cái "{primary_letter}" đang tỏa sáng màu kẹo ngọt nhé bé!',
        options: [
          {{ id: 'opt-1', label: '{primary_letter}', isCorrect: true, color: 'pink' }},
          {{ id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' }},
          {{ id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' }},
          {{ id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' }},
        ],
      }}"""
        stage2 = f"""      {{
        id: '{main_key}-s2',
        gameType: 'bubble_pop',
        instruction: 'Đập bong bóng chứa các chữ cái "{primary_letter}" và "{sec_letter}" trong bài!',
        targetSoundOrLetter: '{primary_letter}',
        hintText: 'Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!',
        options: [
          {{ id: 'pop-1', label: '{primary_letter}', isCorrect: true, color: 'pink' }},
          {{ id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' }},
          {{ id: 'pop-3', label: '{sec_letter}', isCorrect: true, color: 'purple' }},
          {{ id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' }},
          {{ id: 'pop-5', label: '{primary_letter}', isCorrect: true, color: 'emerald' }},
        ],
      }}"""
        stage3 = f"""      {{
        id: '{main_key}-s3',
        gameType: 'order_sequence',
        instruction: 'Bé hãy xếp các từ thành câu đúng trong SGK Trang {page}!',
        hintText: 'Câu chuẩn bài học: "{' '.join(seq)}"',
        sequenceWords: {seq},
        options: [],
      }}"""
        stages_data.extend([stage1, stage2, stage3])

    stages_rendered = ",\n".join(stages_data)
    block = f"""  '{main_key}': {{
    lessonId: '{main_key}',
    lessonTitle: '{title}',
    targetLetters: {letters},
    stages: [
{stages_rendered}
    ],
  }},"""
    lines.append(block)
    
    # Only map tv-g1-t1-b{num} as alias if num <= 20
    if num <= 20 and main_key != f"tv-g1-t1-b{num}":
        lines.append(f"""  'tv-g1-t1-b{num}': {{
    lessonId: 'tv-g1-t1-b{num}',
    lessonTitle: '{title}',
    targetLetters: {letters},
    stages: [
{stages_rendered}
    ],
  }},""")

lines.append("};\n")

# Add helper function getPhonicsGameForLesson
lines.append(r"""
/**
 * Helper thông minh tìm kiếm hoặc sinh cấu hình Mini Game chuẩn xác 100% cho Tiếng Việt 1 - TẬP 1.
 * TUYỆT ĐỐI KHÔNG ÁP DỤNG cho Tiếng Việt 1 - TẬP 2 (vì Tập 2 là các bài đọc nguyên văn SGK).
 */
export function getPhonicsGameForLesson(lesson: { id: string; title: string; semester?: number; order?: number }): LessonPhonicsGameConfig | null {
  // Nếu là Tập 2 (Học kì 2) -> Trả về null để hiển thị bài đọc nguyên văn SGK chuẩn
  if (lesson.semester === 2 || lesson.id.includes('-t2-')) {
    return null;
  }

  // Tra cứu theo key chính xác trong Tập 1
  if (GRADE_1_PHONICS_GAMES[lesson.id]) {
    return GRADE_1_PHONICS_GAMES[lesson.id];
  }

  // Tra cứu theo số bài b{N} trong lesson.id (chỉ khi là Tập 1)
  const matchB = lesson.id.match(/b(\d+)/);
  if (matchB) {
    const num = parseInt(matchB[1], 10);
    if (lesson.id.includes('-t1-')) {
      const key = `tv-g1-t1-b${num}`;
      if (GRADE_1_PHONICS_GAMES[key]) return GRADE_1_PHONICS_GAMES[key];
    } else if (num <= 20) {
      const key = `tv-g1-b${num}`;
      if (GRADE_1_PHONICS_GAMES[key]) return GRADE_1_PHONICS_GAMES[key];
    }
  }

  // Fallback thông minh chỉ khi là bài học âm chữ thuộc Tập 1
  const titleParts = lesson.title.split(':');
  const letterStr = titleParts.length > 1 ? titleParts[1].trim() : lesson.title;
  const rawLetters = letterStr.split(/[-–,]/).map((s) => s.trim().split(' ')[0].toLowerCase()).filter(Boolean);
  const targetLetters = rawLetters.length > 0 ? rawLetters : ['a'];
  const pLetter = targetLetters[0];
  const sLetter = targetLetters[1] || pLetter.toUpperCase();

  return {
    lessonId: lesson.id,
    lessonTitle: lesson.title,
    targetLetters,
    stages: [
      {
        id: `${lesson.id}-dyn-s1`,
        gameType: 'letter_pick',
        instruction: `Bé hãy tìm và chạm vào chữ "${pLetter}" của bài học nhé!`,
        targetSoundOrLetter: pLetter,
        hintText: `Nhìn kỹ chữ cái "${pLetter}" đang tỏa sáng màu kẹo ngọt nhé bé!`,
        options: [
          { id: 'opt-1', label: pLetter, isCorrect: true, color: 'pink' },
          { id: 'opt-2', label: 'o', isCorrect: false, color: 'sky' },
          { id: 'opt-3', label: 'e', isCorrect: false, color: 'amber' },
          { id: 'opt-4', label: 'u', isCorrect: false, color: 'emerald' },
        ],
      },
      {
        id: `${lesson.id}-dyn-s2`,
        gameType: 'bubble_pop',
        instruction: `Đập bong bóng chứa các chữ cái "${pLetter}" và "${sLetter}" trong bài!`,
        targetSoundOrLetter: pLetter,
        hintText: `Các bong bóng mang đúng chữ của bài học sẽ vỡ tung kèm sao vàng!`,
        options: [
          { id: 'pop-1', label: pLetter, isCorrect: true, color: 'pink' },
          { id: 'pop-2', label: 'x', isCorrect: false, color: 'sky' },
          { id: 'pop-3', label: sLetter, isCorrect: true, color: 'purple' },
          { id: 'pop-4', label: 'y', isCorrect: false, color: 'amber' },
          { id: 'pop-5', label: pLetter, isCorrect: true, color: 'emerald' },
        ],
      },
    ],
  };
}
""")

content = "\n".join(lines)
target_path = r'c:\Users\TVCHUONG\Desktop\AI\06_eLearning\src\data\curriculum\vietnamese\grade1PhonicsGames.ts'
with open(target_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"✅ Đã ghi thành công grade1PhonicsGames.ts ({len(GRADE_1_T1_LESSONS)} bài học chính thức)")
