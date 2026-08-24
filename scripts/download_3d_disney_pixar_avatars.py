import urllib.request
import urllib.parse
import os
import time
import random

dest_dir = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning\public\assets\mascots"
os.makedirs(dest_dir, exist_ok=True)

characters = {
    "mascot_bunny.jpg": (
        "Cute 3D Disney Pixar style baby white fluffy bunny rabbit student mascot, big sparkling friendly eyes, "
        "wearing a tiny colorful school backpack, sitting at a colorful wooden school desk with books and crayons, "
        "warm cozy classroom background, volumetric soft lighting, 8k octane render 3D character"
    ),
    "mascot_bear.jpg": (
        "Cute 3D Disney Pixar style fluffy brown baby teddy bear mascot, wearing a cozy knit yellow sweater, "
        "big sparkling happy eyes, holding a giant colorful pencil, sitting in a cheerful playroom with toys and books, "
        "warm soft volumetric lighting, 8k octane render 3D character"
    ),
    "mascot_cat.jpg": (
        "Cute 3D Disney Pixar style fluffy ginger and white kitten cat mascot, big sparkling round blue eyes, "
        "wearing a cute pink collar with small golden bell, cheerful friendly smile, sitting in a sunny classroom, "
        "soft pastel colors, 8k octane render 3D character"
    ),
    "mascot_puppy.jpg": (
        "Cute 3D Disney Pixar style fluffy corgi puppy dog mascot, big expressive sparkling dark eyes, "
        "happy joyful open mouth smile, wearing a cute yellow bandana, sitting in a cozy study room with colorful ABC blocks, "
        "warm volumetric lighting, 8k octane render 3D character"
    ),
    "mascot_panda.jpg": (
        "Cute 3D Disney Pixar style baby giant panda mascot, round fluffy black and white body, big friendly sparkling eyes, "
        "wearing cute round glasses, holding a small book and bamboo pencil, sitting in a bright airy classroom, "
        "soft green pastel lighting, 8k octane render 3D character"
    ),
    "mascot_unicorn.jpg": (
        "Cute 3D Disney Pixar style baby magical unicorn mascot, fluffy white body with glowing pastel rainbow mane and tail, "
        "small golden spiral horn, sparkling violet eyes, standing on fluffy soft white clouds with floating stars and rainbows, "
        "magical dreamy lighting, 8k octane render 3D character"
    ),
    "mascot_penguin.jpg": (
        "Cute 3D Disney Pixar style baby emperor penguin mascot, wearing a cute blue woolen beanie hat and small scarf, "
        "big sparkling cheerful eyes, holding a glowing star, sitting in a cozy winter classroom with books and snow globes, "
        "warm cheerful lighting, 8k octane render 3D character"
    ),
    "mascot_koala.jpg": (
        "Cute 3D Disney Pixar style fluffy baby koala mascot, oversized fluffy ears, gentle sparkling brown eyes, "
        "smiling warmly, holding a small green leaf book, sitting at a cozy desk in a sunny treehouse classroom, "
        "soft golden hour lighting, 8k octane render 3D character"
    ),
    "mascot_tiger.jpg": (
        "Cute 3D Disney Pixar style baby tiger cub mascot, vibrant orange and black fluffy fur, big sparkling golden eyes, "
        "playful energetic smile, wearing a cute red hero cape, sitting in a colorful bright study room with gold stars, "
        "dynamic warm lighting, 8k octane render 3D character"
    ),
    "mascot_astronaut.jpg": (
        "Cute 3D Disney Pixar style little baby astronaut boy mascot, wearing a sleek white and orange space suit with clear bubble helmet, "
        "big sparkling brown eyes, joyful smile, floating weightlessly in a magical spaceship cockpit with colorful glowing stars and planets, "
        "cinematic lighting, 8k octane render 3D character"
    ),
    "mascot_princess.jpg": (
        "Cute 3D Disney Pixar style little princess girl mascot, wearing a sparkling pastel pink royal dress and tiny gold tiara crown, "
        "big sparkling hazel eyes, gentle lovely smile, holding a magical glowing fairytale book, inside a beautiful castle library, "
        "fairytale soft magical lighting, 8k octane render 3D character"
    )
}

user_agents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15'
]

for filename, prompt in characters.items():
    filepath = os.path.join(dest_dir, filename)
    print(f"Generating 3D Pixar render for {filename}...")
    
    encoded_prompt = urllib.parse.quote(prompt)
    seed = random.randint(10000, 999999)
    url = f"https://image.pollinations.ai/prompt/{encoded_prompt}?width=512&height=512&nologo=true&seed={seed}&model=flux"
    
    success = False
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': random.choice(user_agents)})
            with urllib.request.urlopen(req, timeout=60) as resp:
                content = resp.read()
                # Ensure it is a valid JPEG/PNG image (usually > 20KB)
                if len(content) > 15000 and (content.startswith(b'\xff\xd8') or content.startswith(b'\x89PNG')):
                    with open(filepath, 'wb') as f:
                        f.write(content)
                    print(f"  [OK] Saved {filename} ({len(content)} bytes)")
                    success = True
                    break
                else:
                    print(f"  Attempt {attempt+1}: image response too small or invalid ({len(content)} bytes)")
        except Exception as e:
            print(f"  Attempt {attempt+1} failed: {e}")
            time.sleep(3)
        time.sleep(2)
        
    if not success:
        # Fallback to turbo model if flux times out
        try:
            url_fallback = f"https://image.pollinations.ai/prompt/{encoded_prompt}?width=512&height=512&nologo=true&seed={seed}&model=turbo"
            req = urllib.request.Request(url_fallback, headers={'User-Agent': random.choice(user_agents)})
            with urllib.request.urlopen(req, timeout=40) as resp:
                content = resp.read()
                if len(content) > 10000:
                    with open(filepath, 'wb') as f:
                        f.write(content)
                    print(f"  [OK Fallback] Saved {filename} ({len(content)} bytes)")
        except Exception as e2:
            print(f"  Fallback failed: {e2}")

    time.sleep(1)

print("All 11 3D Pixar mascots generated successfully!")
