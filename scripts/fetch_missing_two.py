import urllib.request
import urllib.parse
import os
import time

dest_dir = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning\public\assets\mascots"

missing = {
    "mascot_tiger.jpg": "3D Pixar Disney style cute baby tiger cub mascot, vibrant orange and black fluffy fur, big sparkling amber eyes, cheerful playful smile, soft pastel studio background, 8k 3D character render",
    "mascot_astronaut.jpg": "3D Pixar Disney style cute baby astronaut mascot in a sleek white space suit with gold visor, holding a small toy rocket, floating among colorful soft pastel planets and stars, 8k 3D character render"
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'}

for fname, prompt in missing.items():
    fpath = os.path.join(dest_dir, fname)
    url = f"https://image.pollinations.ai/prompt/{urllib.parse.quote(prompt)}?width=512&height=512&nologo=true&seed=8888"
    print(f"Fetching {fname}...")
    for attempt in range(5):
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=45) as resp:
                data = resp.read()
                if len(data) > 10000:
                    with open(fpath, 'wb') as f:
                        f.write(data)
                    print(f"SUCCESS: {fname} saved ({len(data)} bytes)")
                    break
        except Exception as e:
            print(f"Attempt {attempt+1} error: {e}")
            time.sleep(5)
        time.sleep(3)

print("Done missing downloads!")
