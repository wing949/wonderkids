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

url = "https://taphuan.nxbgd.vn/tap-huan/chi-tiet-sach/tieng-viet-1-tap-mot-940092412.940092412"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req, context=ctx) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

# Search for read online / pdf / viewer links
links = re.findall(r'href="([^"]+)"', html)
print(f"Book page title/resources:")
for l in links:
    if 'read' in l or 'pdf' in l or 'view' in l or 'sach' in l or 'flip' in l or 'doc' in l:
        print("  -", l)
