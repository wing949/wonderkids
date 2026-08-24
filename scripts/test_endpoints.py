import urllib.request
import urllib.parse
import json

# Test Pixabay open API with key or public endpoints
endpoints = [
    ("Unsplash", "https://source.unsplash.com/512x512/?3d,cute,cat,cartoon"),
    ("Prodia", "https://api.prodia.com/v1/job"),
    ("Kastg", "https://api.kastg.xyz/api/ai/flux?prompt=cute%203d%20cat"),
    ("Airforce", "https://api.airforce/imagine?prompt=cute%203d%20cat"),
    ("DeepAI", "https://api.deepai.org/api/text2img")
]

for name, url in endpoints:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as r:
            print(f"{name}: status {r.status}, content-type: {r.headers.get('content-type')}")
    except Exception as e:
        print(f"{name} error: {e}")
