import urllib.request
import urllib.parse
import os
import time
import random

dest_dir = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning\public\assets\mascots"
os.makedirs(dest_dir, exist_ok=True)

characters = {
    "mascot_bear.jpg": "3D Pixar Disney style cute fluffy brown teddy bear mascot, wearing a cozy yellow scarf, big sparkling friendly eyes, smiling cheerfully, holding a pencil, cozy pastel room background, 8k 3D character render",
    "mascot_cat.jpg": "3D Pixar Disney style cute fluffy ginger kitten cat mascot, big sparkling green eyes, wearing a pink bowtie with a small gold bell, cheerful smiling expression, soft pastel background, 8k 3D character render",
    "mascot_puppy.jpg": "3D Pixar Disney style cute fluffy corgi puppy dog mascot, big sparkling dark eyes, happy smiling open mouth, wearing a cute blue bandana, soft cheerful pastel background, 8k 3D character render",
    "mascot_panda.jpg": "3D Pixar Disney style cute baby giant panda mascot, holding a fresh green bamboo leaf, big round friendly sparkling eyes, fluffy black and white fur, smiling warmly, soft green pastel background, 8k 3D character render",
    "mascot_unicorn.jpg": "3D Pixar Disney style cute baby magical unicorn mascot, glowing pastel rainbow mane and tail, golden spiral horn, sparkling violet eyes, standing on soft clouds with rainbows and stars, 8k 3D character render",
    "mascot_penguin.jpg": "3D Pixar Disney style cute baby emperor penguin mascot, wearing a fluffy blue winter beanie hat and scarf, big sparkling blue eyes, smiling cheerfully, standing on soft snow, 8k 3D character render",
    "mascot_koala.jpg": "3D Pixar Disney style cute fluffy baby koala mascot, big fluffy round ears, sparkling friendly brown eyes, holding a eucalyptus leaf, smiling gently, soft warm pastel background, 8k 3D character render",
    "mascot_tiger.jpg": "3D Pixar Disney style cute baby tiger cub mascot, vibrant orange and black fluffy stripes, big sparkling amber eyes, playful cheerful smile, wearing a small cape, soft pastel background, 8k 3D character render",
    "mascot_astronaut.jpg": "3D Pixar Disney style cute baby astronaut mascot in a sleek white space suit with gold visor, holding a small toy rocket, floating among colorful soft pastel planets and stars, 8k 3D character render",
    "mascot_princess.jpg": "3D Pixar Disney style cute little princess girl mascot, sparkling golden crown with colorful gems, holding a magical glowing storybook, wearing a cute pastel pink dress, soft fairytale background, 8k 3D character render"
}

user_agents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36'
]

for filename, prompt in characters.items():
    filepath = os.path.join(dest_dir, filename)
    
    # Check if existing file is already large (> 50KB means full 3D render)
    if os.path.exists(filepath) and os.path.getsize(filepath) > 50000:
        print(f"Already high-res: {filename} ({os.path.getsize(filepath)} bytes)")
        continue

    encoded_prompt = urllib.parse.quote(prompt)
    seed = random.randint(1000, 999999)
    url = f"https://image.pollinations.ai/prompt/{encoded_prompt}?width=512&height=512&nologo=true&seed={seed}"
    
    print(f"Generating {filename}...")
    success = False
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': random.choice(user_agents)})
            with urllib.request.urlopen(req, timeout=60) as resp:
                content = resp.read()
                if len(content) > 10000:
                    with open(filepath, 'wb') as f:
                        f.write(content)
                    print(f" SUCCESS: Saved {filename} ({len(content)} bytes)")
                    success = True
                    break
                else:
                    print(f" Attempt {attempt+1}: response too small ({len(content)} bytes)")
        except Exception as e:
            print(f" Attempt {attempt+1} error for {filename}: {e}")
            time.sleep(3)
        time.sleep(2)
        
    time.sleep(4)

print("Batch generation complete!")
