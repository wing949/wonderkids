import urllib.request
import ssl
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'vi-VN,vi;q=0.9,en;q=0.8'
}

def fetch_url(url):
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
            return resp.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def extract_books(html):
    books = []
    # Match card patterns:
    # <div class="tw-relative card-document swiper-slide">
    # <a href="(https://taphuan.nxbgd.vn/tap-huan/chi-tiet-sach/[^"]+)">
    # ... title="([^"]+)"
    pattern = re.compile(r'<a\s+href="(https:\/\/taphuan\.nxbgd\.vn\/tap-huan\/chi-tiet-sach\/[^"]+)"[\s\S]*?<img\s+src="([^"]+)"[\s\S]*?title="([^"]+)"', re.IGNORECASE)
    for m in pattern.finditer(html):
        books.append({
            'url': m.group(1),
            'thumbnail': m.group(2),
            'title': m.group(3).strip()
        })
    
    if not books:
        # Fallback regex
        urls = re.findall(r'href="(https:\/\/taphuan\.nxbgd\.vn\/tap-huan\/chi-tiet-sach\/[^"]+)"', html)
        titles = re.findall(r'title="([^"]+)"', html)
        for i, u in enumerate(urls):
            t = titles[i] if i < len(titles) else "Chưa rõ tiêu đề"
            books.append({'url': u, 'title': t.strip()})
            
    # Deduplicate by url
    seen = set()
    dedup = []
    for b in books:
        if b['url'] not in seen:
            seen.add(b['url'])
            dedup.append(b)
    return dedup

def main():
    all_data = {}
    
    for grade in range(1, 6):
        print(f"=== Crawling Grade {grade} ===")
        # 1. Bộ SGK Thống Nhất
        url_main = f"https://taphuan.nxbgd.vn/tap-huan?grade={grade}"
        html_main = fetch_url(url_main) or ""
        books_main = extract_books(html_main)
        
        # 2. Các bộ sách khác (Kết nối tri thức, Chân trời sáng tạo, Cùng học, etc.)
        url_other = f"https://taphuan.nxbgd.vn/tap-huan/cac-bo-sach-khac?grade={grade}"
        html_other = fetch_url(url_other) or ""
        books_other = extract_books(html_other)
        
        all_books = books_main + books_other
        
        # Filter Tiếng Việt, Toán, Tiếng Anh
        def is_tieng_viet(title):
            t = title.lower()
            return 'tiếng việt' in t
            
        def is_toan(title):
            t = title.lower()
            return 'toán' in t
            
        def is_tieng_anh(title):
            t = title.lower()
            return any(k in t for k in ['tiếng anh', 'english', 'global success', 'family and friends', 'explore our world', 'macmillan', 'phonics', 'i-learn', 'smart start'])

        grade_res = {
            'grade': grade,
            'tong_so_sach_tim_thay': len(all_books),
            'tieng_viet': [b for b in all_books if is_tieng_viet(b['title'])],
            'toan': [b for b in all_books if is_toan(b['title'])],
            'tieng_anh': [b for b in all_books if is_tieng_anh(b['title'])],
            'tat_ca_sach_chinh': books_main,
            'tat_ca_sach_khac': books_other
        }
        all_data[f"Lớp {grade}"] = grade_res
        print(f"  -> Tiếng Việt: {len(grade_res['tieng_viet'])} cuốn")
        print(f"  -> Toán: {len(grade_res['toan'])} cuốn")
        print(f"  -> Tiếng Anh: {len(grade_res['tieng_anh'])} cuốn")

    with open('scripts/crawled_sgk.json', 'w', encoding='utf-8') as f:
        json.dump(all_data, f, ensure_ascii=False, indent=2)
    print("\nSaved to scripts/crawled_sgk.json")

if __name__ == '__main__':
    main()
