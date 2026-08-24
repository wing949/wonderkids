import urllib.request
import urllib.parse
import os
import time

dest_dir = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning\public\assets\mascots"
os.makedirs(dest_dir, exist_ok=True)

characters = {
    "mascot_bunny.jpg": "3D Pixar Disney style cute baby fluffy white bunny rabbit mascot with floppy ears, big friendly sparkling eyes, wearing small cute school backpack, holding a book, soft warm pastel background, 8k 3D character render",
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

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for filename, prompt in characters.items():
    filepath = os.path.join(dest_dir, filename)
    url = f"https://image.pollinations.ai/prompt/{urllib.parse.quote(prompt)}?width=512&height=512&nologo=true&seed={hash(filename) % 100000}"
    print(f"Generating {filename}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=40) as resp:
            content = resp.read()
            if len(content) > 5000:
                with open(filepath, 'wb') as f:
                    f.write(content)
                print(f" Saved {filename} ({len(content)} bytes)")
            else:
                print(f" Failed {filename}, response too small ({len(content)} bytes)")
    except Exception as e:
        print(f" Error for {filename}: {e}")
    time.sleep(1)

print("Finished generating all 3D Disney Pixar characters!")
