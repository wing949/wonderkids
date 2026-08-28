import os, sys, json
sys.stdout.reconfigure(encoding='utf-8')

cache_files = {
    'L1': r'.cache/ocr_violympic/L1_g_c_Violympic_pdf_370c9c8c1c3b1f3c.json',
    'L2': r'.cache/ocr_violympic/L2_g_c_Violympic_pdf_890234313fddfa17.json',
    'L3': r'.cache/ocr_violympic/L3_g_c_Violympic_pdf_caf8dd57c5b503c4.json',
    'L4': r'.cache/ocr_violympic/L4_g_c_Violympic_pdf_00080be8d747315a.json',
    'L5': r'.cache/ocr_violympic/L5_g_c_Violympic_pdf_f3c7db08fb6333d0.json',
}

for grade, cpath in cache_files.items():
    if not os.path.exists(cpath):
        print(grade, 'missing')
        continue
    with open(cpath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    pages = data.get('pages', [])
    print(f'=== {grade} ===: pages={len(pages)}')
    for p in pages[:4]:
        pnum = p.get('page_num')
        t = ' '.join(p.get('text', '').split())[:100]
        print(f'  P{pnum}: {t}')