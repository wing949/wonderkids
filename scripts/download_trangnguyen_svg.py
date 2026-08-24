import urllib.request
from pathlib import Path

dest_dir = Path("public/assets/competitions/logos")
dest_dir.mkdir(parents=True, exist_ok=True)
headers = {'User-Agent': 'Mozilla/5.0'}

urls = {
    "trangnguyen_logo.svg": "https://tn-cdn.trangnguyen.edu.vn/assets/tntv-v-BPX3Cyn_.svg",
    "trangnguyen_hat.svg": "https://tn-cdn.trangnguyen.edu.vn/assets/mutrang-tntv-v-CgtCVLVx.svg",
}

for filename, url in urls.items():
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as r:
            with open(dest_dir / filename, "wb") as f:
                f.write(r.read())
        print(f"Downloaded {filename} successfully! Size: {(dest_dir / filename).stat().st_size} bytes")
    except Exception as e:
        print(f"Error downloading {filename}:", e)
