import os, sys, pymupdf
sys.stdout.reconfigure(encoding='utf-8')

pdf_paths = [
    ('L1', r'refer/Violympic/L1 gốc Violympic.pdf'),
    ('L2', r'refer/Violympic/L2 gốc Violympic.pdf'),
    ('L3', r'refer/Violympic/L3 gốc Violympic.pdf'),
    ('L4', r'refer/Violympic/L4 gốc Violympic.pdf'),
    ('L5', r'refer/Violympic/L5 gốc Violympic.pdf'),
]

for label, p in pdf_paths:
    doc = pymupdf.open(p)
    rot_map = {}
    pages_rot180 = []
    pages_rot0 = []
    for i in range(len(doc)):
        r = doc[i].rotation
        rot_map[r] = rot_map.get(r, 0) + 1
        if r == 180:
            pages_rot180.append(i + 1)
        else:
            pages_rot0.append(i + 1)
    print(f'=== {label}: {p} ===')
    print(f'Total pages: {len(doc)}, Rotation distribution: {rot_map}')
    if pages_rot180:
        print(f'  Pages with rot 180 (first 10): {pages_rot180[:10]} (total: {len(pages_rot180)})')
    if pages_rot0 and pages_rot180:
        print(f'  Pages with rot 0 (first 10): {pages_rot0[:10]} (total: {len(pages_rot0)})')