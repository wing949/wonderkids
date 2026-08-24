import urllib.request
from pathlib import Path

dest_dir = Path("public/assets/competitions/logos")
dest_dir.mkdir(parents=True, exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0'}

# 1. IOE Logo (Màu xanh dương)
try:
    req = urllib.request.Request("https://ioe.vn/images/logo_ioe.png", headers=headers)
    with urllib.request.urlopen(req, timeout=10) as r:
        with open(dest_dir / "ioe_logo.png", "wb") as f:
            f.write(r.read())
    print("Downloaded IOE logo successfully!")
except Exception as e:
    print("Error downloading IOE logo:", e)

# 2. Violympic Logo (Màu đỏ)
try:
    req = urllib.request.Request("https://images1.violympic.vn/violympic/images/upload/logo.png", headers=headers)
    with urllib.request.urlopen(req, timeout=10) as r:
        with open(dest_dir / "violympic_logo.png", "wb") as f:
            f.write(r.read())
    print("Downloaded Violympic logo successfully!")
except Exception as e:
    print("Error downloading Violympic logo:", e)
