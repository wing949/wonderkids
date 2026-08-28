import os, sys, pymupdf, io
from PIL import Image
sys.stdout.reconfigure(encoding='utf-8')

# Check page 1, 2, 3 of L3, L4, L5
for label, p in [('L3', r'refer/Violympic/L3 gốc Violympic.pdf'), ('L4', r'refer/Violympic/L4 gốc Violympic.pdf'), ('L5', r'refer/Violympic/L5 gốc Violympic.pdf')]:
    doc = pymupdf.open(p)
    print(f'=== Checking {label} ===')
    for pno in [0, 1, 2]: # 0-based
        page = doc[pno]
        print(f'Page {pno+1}: rotation={page.rotation}, rect={page.rect}')
        # Pixmap renders according to page rotation
        pix = page.get_pixmap(dpi=150)
        print(f'  Rendered pixmap size: {pix.width}x{pix.height}')