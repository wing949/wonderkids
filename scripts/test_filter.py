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
}

def fetch_url(url):
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
            return resp.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error {url}: {e}")
        return ""

def extract_books(html):
    pattern = re.compile(r'<a\s+href="(https:\/\/taphuan\.nxbgd\.vn\/tap-huan\/chi-tiet-sach\/[^"]+)"[\s\S]*?<img\s+src="([^"]+)"[\s\S]*?title="([^"]+)"', re.IGNORECASE)
    books = []
    for m in pattern.finditer(html):
        books.append({
            'url': m.group(1),
            'thumbnail': m.group(2),
            'title': m.group(3).strip()
        })
    return books

# Test querying with different parameters
test_urls = [
    "https://taphuan.nxbgd.vn/tap-huan?grade=3&filter_subject[]=2",
    "https://taphuan.nxbgd.vn/tap-huan?grade=3&subject=2",
    "https://taphuan.nxbgd.vn/tap-huan?grade=3&subject_id=2",
    "https://taphuan.nxbgd.vn/tap-huan/cac-bo-sach-khac?grade=3&filter_subject[]=2",
    "https://taphuan.nxbgd.vn/tap-huan?grade=",
    "https://taphuan.nxbgd.vn/tap-huan/cac-bo-sach-khac?grade="
]

for u in test_urls:
    html = fetch_url(u)
    books = extract_books(html)
    print(f"\nURL: {u} -> found {len(books)} books")
    for b in books:
        if 'tiếng anh' in b['title'].lower() or 'english' in b['title'].lower() or 'global' in b['title'].lower():
            print(f"  * {b['title']}: {b['url']}")
