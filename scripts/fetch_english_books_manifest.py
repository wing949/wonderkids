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
ENGLISH_BOOKS = [
    { "grade": 1, "name": "Tiếng Anh 1 Global Success", "url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-anh-1-global-success.4914061146" },
    { "grade": 2, "name": "Tiếng Anh 2 Global Success", "url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/tieng-anh-2-global-success.4914084740" },
    { "grade": 3, "semester": 1, "name": "Tiếng Anh 3 Tập 1 Global Success", "url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/shs-tieng-anh-3-tap-1-global-success.4537411435" },
    { "grade": 3, "semester": 2, "name": "Tiếng Anh 3 Tập 2 Global Success", "url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-anh-3-tap-2-global-success.4914101275" },
    { "grade": 4, "semester": 1, "name": "Tiếng Anh 4 Tập 1 Global Success", "url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-anh-4-global-success-tap-mot.4914111660" },
    { "grade": 4, "semester": 2, "name": "Tiếng Anh 4 Tập 2 Global Success", "url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-anh-4-global-success-tap-hai.4914832178" },
    { "grade": 5, "semester": 1, "name": "Tiếng Anh 5 Tập 1 Global Success", "url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-anh-5-global-success-tap-mot.4914842460" },
    { "grade": 5, "semester": 2, "name": "Tiếng Anh 5 Tập 2 Global Success", "url": "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-anh-5-global-success-tap-hai.4914843136" }
]

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

all_manifest = []

for b in ENGLISH_BOOKS:
    print(f"\n📖 Đang quét: {b['name']} -> {b['url']}")
    try:
        req = urllib.request.Request(b['url'], headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=20) as resp:
            html = resp.read().decode('utf-8')

        images = re.findall(r'https://taphuan\.nxbgd\.vn/storage/upload/[^\s"\'<>]+\.(?:png|jpg|jpeg)', html)
        if not images:
            images = re.findall(r'/storage/upload/[^\s"\'<>]+\.(?:png|jpg|jpeg)', html)
            images = [f"https://taphuan.nxbgd.vn{img}" for img in images]

        seen = set()
        unique_images = []
        for img in images:
            if img not in seen:
                seen.add(img)
                unique_images.append(img)

        print(f"  -> Tìm thấy {len(unique_images)} trang ảnh")
        if unique_images:
            print(f"  -> Sample: {unique_images[0]}")

        all_manifest.append({
            "name": b['name'],
            "grade": b['grade'],
            "url": b['url'],
            "totalPages": len(unique_images),
            "pages": unique_images
        })
    except Exception as e:
        print(f"❌ Lỗi: {e}")

out_path = os.path.join(WORKSPACE, 'scripts', 'english_books_manifest.json')
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(all_manifest, f, ensure_ascii=False, indent=2)

print(f"\n✅ Đã lưu manifest tại {out_path}")
