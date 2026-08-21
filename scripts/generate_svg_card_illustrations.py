# -*- coding: utf-8 -*-
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
ASSET_DIR = os.path.join(WORKSPACE_DIR, 'public', 'assets', 'curriculum')
os.makedirs(ASSET_DIR, exist_ok=True)

# Generate rich, colorful, 3D-styled SVG illustrations for key Vietnamese lessons

svgs = {
    "tv_g1_b21_nam_lop1.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFF7ED"/>
      <stop offset="50%" stop-color="#FFEDD5"/>
      <stop offset="100%" stop-color="#FED7AA"/>
    </linearGradient>
    <linearGradient id="sunGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FDE047"/>
      <stop offset="100%" stop-color="#F59E0B"/>
    </linearGradient>
    <linearGradient id="schoolGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#F43F5E"/>
      <stop offset="100%" stop-color="#BE123C"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#B45309" flood-opacity="0.15"/>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="400" height="400" rx="32" fill="url(#bgGrad1)"/>
  
  <!-- Sun & Rays -->
  <circle cx="80" cy="80" r="45" fill="url(#sunGrad)" opacity="0.85" filter="url(#shadow)"/>
  <circle cx="80" cy="80" r="58" fill="none" stroke="#FDE047" stroke-width="3" stroke-dasharray="8 8" opacity="0.6"/>
  
  <!-- School Gate / Building in Background -->
  <rect x="220" y="120" width="140" height="180" rx="12" fill="#E2E8F0" opacity="0.9" filter="url(#shadow)"/>
  <polygon points="210,120 290,60 370,120" fill="url(#schoolGrad)" filter="url(#shadow)"/>
  <rect x="260" y="220" width="60" height="80" rx="30" fill="#3B82F6"/>
  <circle cx="290" cy="95" r="14" fill="#FEF08A"/>
  
  <!-- Green Lawn -->
  <path d="M0,320 Q200,280 400,320 L400,400 L0,400 Z" fill="#34D399"/>
  <path d="M0,340 Q200,310 400,340 L400,400 L0,400 Z" fill="#10B981"/>

  <!-- Character: Nam (Lớp 1A) -->
  <g transform="translate(100, 140)" filter="url(#shadow)">
    <!-- Backpack -->
    <rect x="-25" y="65" width="40" height="60" rx="12" fill="#EF4444"/>
    <rect x="-20" y="75" width="10" height="30" rx="4" fill="#FCA5A5"/>
    
    <!-- Body / School Uniform -->
    <rect x="0" y="60" width="60" height="75" rx="16" fill="#FFFFFF"/>
    <!-- Navy Blue Tie / Collar -->
    <polygon points="30,60 20,95 30,110 40,95" fill="#1E40AF"/>
    <rect x="10" y="130" width="40" height="50" rx="8" fill="#1E3A8A"/>
    
    <!-- Head & Face -->
    <circle cx="30" cy="30" r="32" fill="#FED7AA"/>
    <!-- Black Hair -->
    <path d="M-2,25 C-5,-5 20,-12 40,-8 C60,-4 65,15 62,25 C55,10 45,5 30,5 C15,5 5,12 -2,25 Z" fill="#1E293B"/>
    <!-- Big Cute Eyes -->
    <circle cx="18" cy="28" r="6" fill="#0F172A"/>
    <circle cx="20" cy="26" r="2" fill="#FFFFFF"/>
    <circle cx="42" cy="28" r="6" fill="#0F172A"/>
    <circle cx="44" cy="26" r="2" fill="#FFFFFF"/>
    <!-- Rosy Cheeks -->
    <circle cx="10" cy="36" r="5" fill="#FDA4AF" opacity="0.6"/>
    <circle cx="50" cy="36" r="5" fill="#FDA4AF" opacity="0.6"/>
    <!-- Happy Smile -->
    <path d="M22,38 Q30,48 38,38" fill="none" stroke="#E11D48" stroke-width="3" stroke-linecap="round"/>
    
    <!-- Waving Hand -->
    <circle cx="70" cy="70" r="10" fill="#FED7AA"/>
    <circle cx="-15" cy="95" r="10" fill="#FED7AA"/>
  </g>
  
  <!-- Floating 3D Letters & Star Badges -->
  <g transform="translate(40, 200)" filter="url(#shadow)">
    <rect width="42" height="42" rx="12" fill="#3B82F6"/>
    <text x="21" y="29" font-family="Baloo 2, sans-serif" font-weight="900" font-size="24" fill="#FFFFFF" text-anchor="middle">A</text>
  </g>
  <g transform="translate(180, 70)" filter="url(#shadow)">
    <rect width="36" height="36" rx="10" fill="#EC4899"/>
    <text x="18" y="25" font-family="Baloo 2, sans-serif" font-weight="900" font-size="20" fill="#FFFFFF" text-anchor="middle">Ă</text>
  </g>
  
  <!-- Title Ribbon -->
  <g transform="translate(30, 340)" filter="url(#shadow)">
    <rect width="340" height="42" rx="21" fill="#FFFFFF" opacity="0.95"/>
    <text x="170" y="27" font-family="Baloo 2, sans-serif" font-weight="900" font-size="16" fill="#B45309" text-anchor="middle">🏫 BÀI 1: TÔI LÀ HỌC SINH LỚP 1</text>
  </g>
</svg>""",

    "tv_g2_b4_lam_viec.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FEF3C7"/>
      <stop offset="100%" stop-color="#FDE68A"/>
    </linearGradient>
    <linearGradient id="roosterGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#EF4444"/>
      <stop offset="100%" stop-color="#B91C1C"/>
    </linearGradient>
    <filter id="shadow2" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#78350F" flood-opacity="0.15"/>
    </filter>
  </defs>
  
  <rect width="400" height="400" rx="32" fill="url(#bgGrad2)"/>
  
  <!-- Peach Blossom Branch -->
  <path d="M-20,80 Q100,120 220,50" fill="none" stroke="#78350F" stroke-width="8" stroke-linecap="round"/>
  <!-- Pink Blossoms -->
  <circle cx="60" cy="85" r="14" fill="#FB7185"/>
  <circle cx="120" cy="100" r="16" fill="#F43F5E"/>
  <circle cx="180" cy="65" r="12" fill="#FDA4AF"/>
  
  <!-- Clock (Đồng hồ tích tắc) -->
  <g transform="translate(260, 60)" filter="url(#shadow2)">
    <circle cx="50" cy="50" r="45" fill="#FFFFFF" stroke="#F59E0B" stroke-width="6"/>
    <!-- Pendulum -->
    <line x1="50" y1="95" x2="50" y2="140" stroke="#F59E0B" stroke-width="4"/>
    <circle cx="50" cy="140" r="12" fill="#D97706"/>
    <!-- Clock Face -->
    <circle cx="50" cy="50" r="4" fill="#1E293B"/>
    <line x1="50" y1="50" x2="50" y2="25" stroke="#1E293B" stroke-width="3" stroke-linecap="round"/>
    <line x1="50" y1="50" x2="70" y2="50" stroke="#EF4444" stroke-width="3" stroke-linecap="round"/>
    <!-- Happy Eyes on Clock -->
    <circle cx="35" cy="40" r="3" fill="#3B82F6"/>
    <circle cx="65" cy="40" r="3" fill="#3B82F6"/>
    <path d="M42,60 Q50,68 58,60" fill="none" stroke="#EA580C" stroke-width="2" stroke-linecap="round"/>
  </g>
  
  <!-- Rooster (Gà trống gáy vang Ò ó o) -->
  <g transform="translate(70, 160)" filter="url(#shadow2)">
    <!-- Body -->
    <ellipse cx="70" cy="90" rx="45" ry="40" fill="#F59E0B"/>
    <!-- Wing -->
    <ellipse cx="60" cy="90" rx="25" ry="20" fill="#D97706"/>
    <!-- Tail Feathers -->
    <path d="M25,80 Q-20,40 10,20 Q-15,60 25,95 Z" fill="#047857"/>
    <path d="M30,85 Q-10,60 20,40 Q-5,80 30,100 Z" fill="#1D4ED8"/>
    <!-- Head -->
    <circle cx="105" cy="55" r="24" fill="#F59E0B"/>
    <!-- Red Comb -->
    <path d="M95,35 Q100,10 110,35 Q118,15 125,40" fill="url(#roosterGrad)"/>
    <!-- Beak (Open Crowing) -->
    <polygon points="125,50 145,55 125,65" fill="#EF4444"/>
    <!-- Wattle -->
    <ellipse cx="120" cy="70" rx="6" ry="10" fill="#EF4444"/>
    <!-- Eye -->
    <circle cx="112" cy="50" r="4" fill="#1E293B"/>
    <circle cx="113" cy="48" r="1.5" fill="#FFFFFF"/>
    <!-- Feet -->
    <line x1="60" y1="130" x2="60" y2="160" stroke="#D97706" stroke-width="4"/>
    <line x1="80" y1="130" x2="80" y2="160" stroke="#D97706" stroke-width="4"/>
  </g>

  <!-- Title Ribbon -->
  <g transform="translate(30, 340)" filter="url(#shadow2)">
    <rect width="340" height="42" rx="21" fill="#FFFFFF" opacity="0.95"/>
    <text x="170" y="27" font-family="Baloo 2, sans-serif" font-weight="900" font-size="16" fill="#D97706" text-anchor="middle">⏰ BÀI 4: LÀM VIỆC THẬT LÀ VUI</text>
  </g>
</svg>""",

    "tv_g3_b15_coc_kien_troi.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#E0F2FE"/>
      <stop offset="100%" stop-color="#BAE6FD"/>
    </linearGradient>
    <linearGradient id="cloudGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#E2E8F0"/>
    </linearGradient>
    <filter id="shadow3" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#0369A1" flood-opacity="0.2"/>
    </filter>
  </defs>
  
  <rect width="400" height="400" rx="32" fill="url(#bgGrad3)"/>
  
  <!-- Heavenly Gate & Clouds -->
  <path d="M0,260 Q100,220 200,250 T400,240 L400,400 L0,400 Z" fill="url(#cloudGrad)" filter="url(#shadow3)"/>
  <circle cx="100" cy="240" r="50" fill="#FFFFFF"/>
  <circle cx="200" cy="230" r="60" fill="#FFFFFF"/>
  <circle cx="300" cy="240" r="55" fill="#FFFFFF"/>
  
  <!-- Rain Drops & Lightning in Sky -->
  <polygon points="280,40 265,80 285,80 270,120" fill="#FBBF24" filter="url(#shadow3)"/>
  <ellipse cx="320" cy="110" rx="4" ry="12" fill="#38BDF8" transform="rotate(15 320 110)"/>
  <ellipse cx="350" cy="140" rx="4" ry="12" fill="#38BDF8" transform="rotate(15 350 140)"/>
  <ellipse cx="230" cy="100" rx="4" ry="12" fill="#38BDF8" transform="rotate(15 230 100)"/>

  <!-- Golden Drum (Trống đồng thiên đình) -->
  <g transform="translate(210, 160)" filter="url(#shadow3)">
    <ellipse cx="60" cy="40" rx="50" ry="20" fill="#F59E0B" stroke="#B45309" stroke-width="4"/>
    <rect x="10" y="40" width="100" height="60" fill="#D97706"/>
    <ellipse cx="60" cy="100" rx="50" ry="20" fill="#B45309"/>
    <!-- Drum Pattern -->
    <circle cx="60" cy="40" r="15" fill="#FDE68A"/>
  </g>

  <!-- Hero: Chú Cóc Tía Dũng Cảm -->
  <g transform="translate(80, 150)" filter="url(#shadow3)">
    <!-- Body -->
    <ellipse cx="60" cy="90" rx="42" ry="36" fill="#15803D"/>
    <!-- Yellow Belly -->
    <ellipse cx="60" cy="98" rx="28" ry="22" fill="#86EFAC"/>
    <!-- Head -->
    <circle cx="60" cy="55" r="30" fill="#16A34A"/>
    <!-- Big Heroic Eyes -->
    <circle cx="45" cy="40" r="14" fill="#FFFFFF"/>
    <circle cx="45" cy="40" r="8" fill="#0F172A"/>
    <circle cx="47" cy="38" r="3" fill="#FFFFFF"/>
    <circle cx="75" cy="40" r="14" fill="#FFFFFF"/>
    <circle cx="75" cy="40" r="8" fill="#0F172A"/>
    <circle cx="77" cy="38" r="3" fill="#FFFFFF"/>
    <!-- Smile / Gritted Teeth -->
    <path d="M48,68 Q60,76 72,68" fill="none" stroke="#052E16" stroke-width="3" stroke-linecap="round"/>
    <!-- Red Hero Headband -->
    <rect x="25" y="32" width="70" height="10" rx="5" fill="#EF4444"/>
    <polygon points="90,32 115,25 105,45" fill="#DC2626"/>
    <!-- Drum Stick in Hand -->
    <line x1="85" y1="75" x2="135" y2="50" stroke="#78350F" stroke-width="6" stroke-linecap="round"/>
    <circle cx="135" cy="50" r="10" fill="#F59E0B"/>
  </g>

  <!-- Title Ribbon -->
  <g transform="translate(30, 340)" filter="url(#shadow3)">
    <rect width="340" height="42" rx="21" fill="#FFFFFF" opacity="0.95"/>
    <text x="170" y="27" font-family="Baloo 2, sans-serif" font-weight="900" font-size="16" fill="#0369A1" text-anchor="middle">🐸 BÀI 15: CÓC KIỆN TRỜI</text>
  </g>
</svg>""",

    "tv_g4_b1_de_men.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ECFDF5"/>
      <stop offset="100%" stop-color="#D1FAE5"/>
    </linearGradient>
    <filter id="shadow4" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#064E3B" flood-opacity="0.15"/>
    </filter>
  </defs>
  
  <rect width="400" height="400" rx="32" fill="url(#bgGrad4)"/>
  
  <!-- Grass Blades & River Stones -->
  <path d="M0,280 Q80,180 60,80 Q100,200 120,320" fill="#10B981" opacity="0.8"/>
  <path d="M340,320 Q320,150 380,60 Q360,200 400,320" fill="#059669" opacity="0.7"/>
  <!-- Big River Rock (Tảng đá cuội) -->
  <ellipse cx="260" cy="270" rx="75" ry="45" fill="#94A3B8" filter="url(#shadow4)"/>
  
  <!-- Fragile Little Moth (Chị Nhà Trò bé nhỏ đang ngồi khóc) -->
  <g transform="translate(230, 190)" filter="url(#shadow4)">
    <!-- Wings -->
    <ellipse cx="15" cy="30" rx="20" ry="30" fill="#FEF08A" opacity="0.8" transform="rotate(-20 15 30)"/>
    <ellipse cx="45" cy="30" rx="20" ry="30" fill="#FEF08A" opacity="0.8" transform="rotate(20 45 30)"/>
    <!-- Body & Brown Dress -->
    <ellipse cx="30" cy="40" rx="12" ry="22" fill="#78350F"/>
    <!-- Head with Teardrops -->
    <circle cx="30" cy="20" r="12" fill="#FED7AA"/>
    <!-- Tear -->
    <circle cx="38" cy="28" r="3" fill="#38BDF8"/>
  </g>

  <!-- Hero: Dế Mèn Hiệp Sĩ Cường Tráng -->
  <g transform="translate(60, 130)" filter="url(#shadow4)">
    <!-- Shiny Armor Body -->
    <ellipse cx="70" cy="110" rx="35" ry="50" fill="#15803D"/>
    <!-- Golden Wing Cover -->
    <path d="M45,70 Q70,90 95,70 L85,150 Q70,160 55,150 Z" fill="#B45309"/>
    <!-- Head -->
    <circle cx="70" cy="55" r="26" fill="#16A34A"/>
    <!-- Long Curved Antennae -->
    <path d="M60,35 Q30,-15 10,-30" fill="none" stroke="#15803D" stroke-width="4" stroke-linecap="round"/>
    <path d="M80,35 Q110,-15 130,-30" fill="none" stroke="#15803D" stroke-width="4" stroke-linecap="round"/>
    <!-- Eyes -->
    <circle cx="58" cy="50" r="8" fill="#0F172A"/>
    <circle cx="60" cy="48" r="2.5" fill="#FFFFFF"/>
    <circle cx="82" cy="50" r="8" fill="#0F172A"/>
    <circle cx="84" cy="48" r="2.5" fill="#FFFFFF"/>
    <!-- Strong Pincer Arms (Xòe hai càng che chở) -->
    <path d="M35,90 Q-5,80 10,130" fill="none" stroke="#B45309" stroke-width="8" stroke-linecap="round"/>
    <path d="M105,90 Q155,85 135,130" fill="none" stroke="#B45309" stroke-width="8" stroke-linecap="round"/>
  </g>

  <!-- Title Ribbon -->
  <g transform="translate(30, 340)" filter="url(#shadow4)">
    <rect width="340" height="42" rx="21" fill="#FFFFFF" opacity="0.95"/>
    <text x="170" y="27" font-family="Baloo 2, sans-serif" font-weight="900" font-size="16" fill="#065F46" text-anchor="middle">🦗 BÀI 1: DẾ MÈN BÊNH VỰC KẺ YẾU</text>
  </g>
</svg>""",

    "tv_g5_b1_thu_bac_ho.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFBEB"/>
      <stop offset="100%" stop-color="#FEF3C7"/>
    </linearGradient>
    <linearGradient id="redFlag" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#EF4444"/>
      <stop offset="100%" stop-color="#DC2626"/>
    </linearGradient>
    <filter id="shadow5" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#92400E" flood-opacity="0.15"/>
    </filter>
  </defs>
  
  <rect width="400" height="400" rx="32" fill="url(#bgGrad5)"/>
  
  <!-- National Flag (Lá cờ đỏ sao vàng tung bay) -->
  <g transform="translate(220, 50)" filter="url(#shadow5)">
    <rect x="0" y="0" width="140" height="90" rx="8" fill="url(#redFlag)"/>
    <!-- Yellow Star -->
    <polygon points="70,20 76,38 95,38 80,50 86,68 70,56 54,68 60,50 45,38 64,38" fill="#FDE047"/>
    <line x1="0" y1="0" x2="0" y2="180" stroke="#78350F" stroke-width="6" stroke-linecap="round"/>
  </g>
  
  <!-- Historic Letter Scroll (Bức thư ngày khai trường 1945) -->
  <g transform="translate(50, 110)" filter="url(#shadow5)">
    <!-- Scroll Paper -->
    <rect x="0" y="0" width="180" height="200" rx="14" fill="#FFFFFF" stroke="#FDE68A" stroke-width="4"/>
    <!-- Golden Quill -->
    <path d="M140,20 Q180,-10 190,-30 Q170,10 150,40 Z" fill="#F59E0B"/>
    <!-- Text Lines -->
    <line x1="25" y1="35" x2="135" y2="35" stroke="#B45309" stroke-width="4" stroke-linecap="round"/>
    <line x1="25" y1="60" x2="155" y2="60" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round"/>
    <line x1="25" y1="80" x2="155" y2="80" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round"/>
    <line x1="25" y1="100" x2="155" y2="100" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round"/>
    <line x1="25" y1="120" x2="130" y2="120" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round"/>
    
    <!-- Red Seal Stamp -->
    <circle cx="130" cy="160" r="18" fill="#EF4444" opacity="0.85"/>
    <circle cx="130" cy="160" r="14" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
    <text x="130" y="164" font-family="Baloo 2, sans-serif" font-weight="900" font-size="9" fill="#FFFFFF" text-anchor="middle">1945</text>
  </g>
  
  <!-- Lotus Flower (Bông sen ngát hương) -->
  <g transform="translate(260, 220)" filter="url(#shadow5)">
    <path d="M40,60 Q10,20 40,0 Q70,20 40,60 Z" fill="#F43F5E"/>
    <path d="M20,60 Q-10,30 15,15 Q35,35 20,60 Z" fill="#FB7185"/>
    <path d="M60,60 Q85,35 65,15 Q90,30 60,60 Z" fill="#FB7185"/>
    <ellipse cx="40" cy="70" rx="35" ry="10" fill="#10B981"/>
  </g>

  <!-- Title Ribbon -->
  <g transform="translate(30, 340)" filter="url(#shadow5)">
    <rect width="340" height="42" rx="21" fill="#FFFFFF" opacity="0.95"/>
    <text x="170" y="27" font-family="Baloo 2, sans-serif" font-weight="900" font-size="16" fill="#991B1B" text-anchor="middle">📜 BÀI 1: THƯ GỬI CÁC HỌC SINH</text>
  </g>
</svg>"""
}

for fname, content in svgs.items():
    fpath = os.path.join(ASSET_DIR, fname)
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"✅ Đã tạo ảnh minh họa bài học: {fpath}")

print("\n🎉 HOÀN TẤT TẠO BỘ ẢNH MINH HỌA DEMO CHO CÁC BÀI HỌC TIẾNG VIỆT!")
