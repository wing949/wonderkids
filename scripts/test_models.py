import urllib.request
import urllib.parse
import time

models = ['flux', 'flux-realism', 'flux-cablyai', 'flux-anime', 'flux-3d', 'any-dark', 'turbo']
prompt = "3D Pixar Disney style cute baby cat mascot"

for m in models:
    url = f"https://image.pollinations.ai/prompt/{urllib.parse.quote(prompt)}?model={m}&width=512&height=512&nologo=true&seed=12345"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
            print(f"Model {m}: SUCCESS ({len(data)} bytes)")
            with open(f"test_{m}.jpg", "wb") as f:
                f.write(data)
            break
    except Exception as e:
        print(f"Model {m}: {e}")
    time.sleep(2)
