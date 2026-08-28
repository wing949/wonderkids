import os, sys, json, re

cache_files = {
    'L1': r'.cache/ocr_violympic/L1_g_c_Violympic_pdf_370c9c8c1c3b1f3c.json',
    'L2': r'.cache/ocr_violympic/L2_g_c_Violympic_pdf_890234313fddfa17.json',
    'L3': r'.cache/ocr_violympic/L3_g_c_Violympic_pdf_caf8dd57c5b503c4.json',
    'L4': r'.cache/ocr_violympic/L4_g_c_Violympic_pdf_00080be8d747315a.json',
    'L5': r'.cache/ocr_violympic/L5_g_c_Violympic_pdf_f3c7db08fb6333d0.json',
}

for grade, cpath in cache_files.items():
    with open(cpath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    pages = data.get('pages', [])
    print(f'============================== {grade} (Total pages: {len(pages)}) ==============================')
    for idx, p in enumerate(pages):
        text = p.get('text', '')
        if re.search(r'(?i)(mục\s*lục|muc\s*luc)', text):
            print(f'[{grade}] Found MUC LUC at page index {idx} (PDF page {idx+1}):')
            print(text[:500])
            print('-'*40)
        if re.search(r'(?i)(hướng\s*dẫn\s*giải|đáp\s*án|phần\s*thứ\s*hai)', text):
            # check if title of section
            lines = [l.strip() for l in text.splitlines() if l.strip()]
            for l in lines[:5]:
                if re.search(r'(?i)(hướng\s*dẫn\s*giải|đáp\s*án|phần\s*thứ\s*hai)', l):
                    print(f'[{grade}] Found SECTION at page index {idx} (PDF page {idx+1}): {l}')