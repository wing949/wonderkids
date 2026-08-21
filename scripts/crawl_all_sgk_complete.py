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
        with urllib.request.urlopen(req, context=ctx, timeout=20) as resp:
            return resp.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"  [Warning] Fetch failed for {url}: {e}")
        return ""

def extract_books(html):
    books = []
    # Match card patterns
    pattern = re.compile(r'<a\s+href="(https:\/\/taphuan\.nxbgd\.vn\/tap-huan\/chi-tiet-sach\/[^"]+)"[\s\S]*?<img\s+src="([^"]+)"[\s\S]*?title="([^"]+)"', re.IGNORECASE)
    for m in pattern.finditer(html):
        books.append({
            'url': m.group(1),
            'thumbnail': m.group(2),
            'title': m.group(3).strip()
        })
    
    if not books:
        urls = re.findall(r'href="(https:\/\/taphuan\.nxbgd\.vn\/tap-huan\/chi-tiet-sach\/[^"]+)"', html)
        titles = re.findall(r'title="([^"]+)"', html)
        for i, u in enumerate(urls):
            t = titles[i] if i < len(titles) else "Chưa rõ tiêu đề"
            books.append({'url': u, 'thumbnail': '', 'title': t.strip()})
            
    return books

# Map subjects
# Subject ID on taphuan: 1 -> Tiếng Việt, 3 -> Toán, 2 -> Tiếng Anh
SUBJECT_CONFIGS = [
    {'name': 'Tiếng Việt', 'id': 1, 'keywords': ['tiếng việt']},
    {'name': 'Toán', 'id': 3, 'keywords': ['toán']},
    {'name': 'Tiếng Anh', 'id': 2, 'keywords': ['tiếng anh', 'english', 'global success', 'family and friends', 'explore our world', 'macmillan', 'phonics', 'i-learn', 'smart start', 'friends plus']}
]

def crawl():
    full_report = {}
    
    for grade in range(1, 6):
        print(f"\n==================== LỚP {grade} ====================")
        grade_books = {
            'Tiếng Việt': [],
            'Toán': [],
            'Tiếng Anh': []
        }
        
        seen_urls = set()
        
        for subj in SUBJECT_CONFIGS:
            subj_name = subj['name']
            subj_id = subj['id']
            
            # Fetch URLs for this grade and subject
            urls_to_try = [
                f"https://taphuan.nxbgd.vn/tap-huan?grade={grade}&subject={subj_id}",
                f"https://taphuan.nxbgd.vn/tap-huan/cac-bo-sach-khac?grade={grade}&subject={subj_id}",
                f"https://taphuan.nxbgd.vn/tap-huan?grade={grade}",
                f"https://taphuan.nxbgd.vn/tap-huan/cac-bo-sach-khac?grade={grade}"
            ]
            
            for u in urls_to_try:
                html = fetch_url(u)
                books = extract_books(html)
                for b in books:
                    title_lower = b['title'].lower()
                    # Check if matches current subject keywords
                    if any(k in title_lower for k in subj['keywords']):
                        if b['url'] not in seen_urls:
                            seen_urls.add(b['url'])
                            grade_books[subj_name].append(b)
            
            print(f"  [✓] {subj_name}: Tìm thấy {len(grade_books[subj_name])} cuốn sách")
            for b in grade_books[subj_name]:
                print(f"      - {b['title']}: {b['url']}")
        
        full_report[f"Lớp {grade}"] = grade_books

    with open('scripts/full_sgk_links.json', 'w', encoding='utf-8') as f:
        json.dump(full_report, f, ensure_ascii=False, indent=2)
        
    print("\nSaved all book links to scripts/full_sgk_links.json")

if __name__ == '__main__':
    crawl()
