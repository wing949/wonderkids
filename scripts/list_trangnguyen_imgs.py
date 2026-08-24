import urllib.request
import re

headers = {'User-Agent': 'Mozilla/5.0'}
req = urllib.request.Request("https://trangnguyen.edu.vn/", headers=headers)
with urllib.request.urlopen(req, timeout=10) as r:
    html = r.read().decode('utf-8', errors='ignore')
    imgs = re.findall(r'src=["\']([^"\']+\.(?:png|svg|jpg|webp))[^"\']*["\']', html)
    for img in set(imgs):
        print(img)
