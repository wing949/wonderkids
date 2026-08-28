import os, sys, json, re

sys.stdout.reconfigure(encoding='utf-8')

ROOT_DIR = r'c:\Users\TVCHUONG\Desktop\AI\06_eLearning'
CACHE_DIR = os.path.join(ROOT_DIR, '.cache', 'ocr_violympic')
OUT_DIR = os.path.join(ROOT_DIR, 'src', 'data', 'practice', 'data')
os.makedirs(OUT_DIR, exist_ok=True)

GRADE_CONFIGS = {
    1: {
        'cache': 'L1_g_c_Violympic_pdf_370c9c8c1c3b1f3c.json',
        'title': 'Hướng dẫn giải Violympic Toán 1',
        'total_rounds': 35,
        'prefix': 'Vòng',
        'round_names': [f'Vòng {i}' for i in range(1, 36)]
    },
    2: {
        'cache': 'L2_g_c_Violympic_pdf_890234313fddfa17.json',
        'title': 'Hướng dẫn giải Violympic Toán 2',
        'total_rounds': 10,
        'prefix': 'Vòng',
        'round_names': [f'Vòng {i}' for i in range(1, 11)]
    },
    3: {
        'cache': 'L3_g_c_Violympic_pdf_caf8dd57c5b503c4.json',
        'title': 'Hướng dẫn giải Violympic Toán 3',
        'total_rounds': 10,
        'prefix': 'Bộ đề số',
        'round_names': [f'Bộ đề số {i}' for i in range(1, 11)]
    },
    4: {
        'cache': 'L4_g_c_Violympic_pdf_00080be8d747315a.json',
        'title': 'Hướng dẫn giải Violympic Toán 4',
        'total_rounds': 10,
        'prefix': 'Bộ đề số',
        'round_names': [f'Bộ đề số {i}' for i in range(1, 11)]
    },
    5: {
        'cache': 'L5_g_c_Violympic_pdf_f3c7db08fb6333d0.json',
        'title': 'Hướng dẫn giải Violympic Toán 5',
        'total_rounds': 39,
        'prefix': 'Vòng',
        'round_names': [f'Vòng {i}' for i in range(1, 36)] + [
            'Đề luyện thi Cấp Trường',
            'Đề luyện thi Cấp Huyện',
            'Đề luyện thi Cấp Tỉnh',
            'Đề luyện thi Cấp Quốc Gia'
        ]
    }
}

def round_stage(round_num, total_rounds):
    if round_num == total_rounds:
        return {'label': 'Chung kết Cấp Quốc Gia', 'level': 'mock_exam', 'badge': '🏆 Quốc Gia'}
    if round_num >= total_rounds - 1:
        return {'label': 'Thi thử Cấp Tỉnh / TP', 'level': 'mock_exam', 'badge': '⭐ Cấp Tỉnh'}
    if round_num >= total_rounds - 3:
        return {'label': 'Thi thử Cấp Quận / Huyện', 'level': 'advanced', 'badge': '🏛️ Cấp Huyện'}
    if round_num >= total_rounds - 5:
        return {'label': 'Thi thử Cấp Trường', 'level': 'advanced', 'badge': '🏫 Cấp Trường'}
    if round_num <= 5:
        return {'label': 'Tự luyện sơ loại', 'level': 'foundation', 'badge': '🌱 Khởi động'}
    return {'label': 'Luyện đề nâng cao', 'level': 'acceleration', 'badge': '🚀 Tăng tốc'}

def clean_ocr(text):
    if not text:
        return ''
    t = text.replace('\r\n', '\n').replace('\r', '\n')
    t = re.sub(r'[|][\s|]*', ' ', t)
    t = re.sub(r'[~^_]{2,}', '', t)
    t = re.sub(r'[ ]{2,}', ' ', t)
    return t.strip()

print('Starting extraction...')
