# -*- coding: utf-8 -*-
import os
import sys
import json
import re
import urllib.request
import ssl

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
MATH_BOOKS = [
    { "grade": 1, "semester": 1, "name": "Toán 1 - Tập 1", "url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-1-tap-mot.4698216815" },
    { "grade": 1, "semester": 2, "name": "Toán 1 - Tập 2", "url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-1-tap-hai.4712748878" },
    { "grade": 2, "semester": 1, "name": "Toán 2 - Tập 1", "url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-2-tap-mot.4698648594" },
    { "grade": 2, "semester": 2, "name": "Toán 2 - Tập 2", "url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-2-tap-hai.4713893812" },
    { "grade": 3, "semester": 1, "name": "Toán 3 - Tập 1", "url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-3-tap-mot.4698702815" },
    { "grade": 3, "semester": 2, "name": "Toán 3 - Tập 2", "url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-3-tap-hai.4714081721" },
    { "grade": 4, "semester": 1, "name": "Toán 4 - Tập 1", "url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-4-tap-mot.4714093295" },
    { "grade": 4, "semester": 2, "name": "Toán 4 - Tập 2", "url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-4-tap-hai.4698870230" },
    { "grade": 5, "semester": 1, "name": "Toán 5 - Tập 1", "url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-5-tap-mot.4699756373" },
    { "grade": 5, "semester": 2, "name": "Toán 5 - Tập 2", "url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-5-tap-hai.4714103431" }
]

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

all_books_manifest = []

for b in MATH_BOOKS:
    print(f"\n==================================================")
    print(f"📖 Đang tải thông tin sách: {b['name']} ({b['url']})")
    try:
        req = urllib.request.Request(b['url'], headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=20) as resp:
            html = resp.read().decode('utf-8')
        
        # Extract image URLs from HTML:
        # Looking for storage/upload/taphuan/...
        images = re.findall(r'https://taphuan\.nxbgd\.vn/storage/upload/[^\s"\'<>]+\.(?:png|jpg|jpeg)', html)
        if not images:
            images = re.findall(r'/storage/upload/[^\s"\'<>]+\.(?:png|jpg|jpeg)', html)
            images = [f"https://taphuan.nxbgd.vn{img}" for img in images]
        
        # Remove duplicates while preserving order
        seen = set()
        unique_images = []
        for img in images:
            if img not in seen:
                seen.add(img)
                unique_images.append(img)
        
        print(f"  -> Tìm thấy {len(unique_images)} trang ảnh!")
        if unique_images:
            print(f"  -> Trang 1: {unique_images[0]}")
            print(f"  -> Trang cuối ({len(unique_images)}): {unique_images[-1]}")
        
        b_info = {
            "grade": b['grade'],
            "semester": b['semester'],
            "name": b['name'],
            "url": b['url'],
            "totalPages": len(unique_images),
            "pages": unique_images
        }
        all_books_manifest.append(b_info)
        
    except Exception as e:
        print(f"❌ Lỗi khi tải {b['name']}: {e}")

out_manifest_file = os.path.join(WORKSPACE, 'scripts', 'math_books_manifest.json')
with open(out_manifest_file, 'w', encoding='utf-8') as f:
    json.dump(all_books_manifest, f, ensure_ascii=False, indent=2)

print(f"\n✅ Đã lưu manifest 10 sách Toán tại: {out_manifest_file}")
