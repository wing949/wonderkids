import urllib.request
import json
import re

urls = {
    "ioe": "https://ioe.vn/",
    "violympic": "https://violympic.vn/",
    "trangnguyen": "https://trangnguyen.edu.vn/"
}

headers = {'User-Agent': 'Mozilla/5.0'}

for name, url in urls.items():
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as response:
            html = response.read().decode('utf-8', errors='ignore')
            # Look for logo images in html
            logos = re.findall(r'<img[^>]+src=["\']([^"\']*(?:logo|icon|brand)[^"\']*)["\']', html, re.IGNORECASE)
            print(f"=== {name.upper()} LOGOS FOUND ===")
            for l in logos[:5]:
                print(l)
    except Exception as e:
        print(f"Error fetching {name}:", e)
