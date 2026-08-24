import urllib.request
import re
from pathlib import Path

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
req = urllib.request.Request("https://trangnguyen.edu.vn/", headers=headers)
try:
    with urllib.request.urlopen(req, timeout=10) as r:
        html = r.read().decode('utf-8', errors='ignore')
        imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html)
        print("Total images found:", len(imgs))
        for img in imgs:
            if any(k in img.lower() for k in ['logo', 'brand', 'trang-nguyen', 'icon', 'header']):
                print(img)
except Exception as e:
    print("Error:", e)
