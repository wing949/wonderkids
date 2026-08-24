import urllib.request
import urllib.parse
import json

# Test Hugging Face public endpoint without token
url = "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell"
payload = json.dumps({"inputs": "3D Pixar Disney style cute baby cat character"}).encode('utf-8')
req = urllib.request.Request(url, data=payload, headers={'Content-Type': 'application/json'})
try:
    with urllib.request.urlopen(req, timeout=30) as resp:
        content = resp.read()
        print("HF response:", len(content), "bytes")
except Exception as e:
    print("HF error:", e)
