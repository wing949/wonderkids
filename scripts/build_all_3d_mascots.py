from PIL import Image, ImageDraw, ImageFilter
import os

mascots_dir = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning\public\assets\mascots"

# Color themes for each character (gradient top, gradient bottom)
themes = {
    "bunny": ("#FDF2F8", "#FCE7F3", "fluent_rabbit.png"),
    "bear": ("#FFF7ED", "#FFEDD5", "fluent_bear.png"),
    "cat": ("#FFF1F2", "#FFE4E6", "fluent_cat.png"),
    "puppy": ("#FEFCE8", "#FEF08A", "fluent_dog.png"),
    "panda": ("#F8FAFC", "#E2E8F0", "fluent_panda.png"),
    "unicorn": ("#FAF5FF", "#EDE9FE", "fluent_unicorn.png"),
    "penguin": ("#F0F9FF", "#E0F2FE", "fluent_penguin.png"),
    "koala": ("#F9FAFB", "#E5E7EB", "fluent_koala.png"),
    "tiger": ("#FFF7ED", "#FFEDD5", "fluent_tiger.png"),
    "astronaut": ("#FAF5FF", "#E9D5FF", "fluent_rocket.png"),
    "princess": ("#FDF4FF", "#F5D0FE", "fluent_crown.png"),
}

def hex_to_rgb(hex_str):
    hex_str = hex_str.lstrip('#')
    return tuple(int(hex_str[i:i+2], 16) for i in (0, 2, 4))

def make_gradient_bg(size, top_color, bottom_color):
    base = Image.new('RGBA', (size, size), top_color)
    top_rgb = hex_to_rgb(top_color)
    bot_rgb = hex_to_rgb(bottom_color)
    
    for y in range(size):
        ratio = y / float(size)
        r = int(top_rgb[0] * (1 - ratio) + bot_rgb[0] * ratio)
        g = int(top_rgb[1] * (1 - ratio) + bot_rgb[1] * ratio)
        b = int(top_rgb[2] * (1 - ratio) + bot_rgb[2] * ratio)
        for x in range(size):
            base.putpixel((x, y), (r, g, b, 255))
    return base

for mascot_key, (top_c, bot_c, src_file) in themes.items():
    src_path = os.path.join(mascots_dir, src_file)
    if not os.path.exists(src_path):
        print(f"Skipping {mascot_key}, {src_file} not found")
        continue
    
    # Open source 3D render
    img = Image.open(src_path).convert("RGBA")
    
    # Target canvas size 512x512
    CANVAS_SIZE = 512
    bg = make_gradient_bg(CANVAS_SIZE, top_c, bot_c)
    
    # Resize character to fit nicely inside canvas with padding
    char_size = 400
    img.thumbnail((char_size, char_size), Image.Resampling.LANCZOS)
    
    # Soft drop shadow under the 3D character
    shadow_offset = 12
    shadow = Image.new('RGBA', (CANVAS_SIZE, CANVAS_SIZE), (0, 0, 0, 0))
    # Extract alpha mask
    r, g, b, a = img.split()
    shadow_mask = a.filter(ImageFilter.GaussianBlur(15))
    
    # Position centered
    pos_x = (CANVAS_SIZE - img.width) // 2
    pos_y = (CANVAS_SIZE - img.height) // 2 - 10
    
    # Draw subtle shadow on canvas
    bg.paste((0, 0, 0, 45), (pos_x, pos_y + shadow_offset), shadow_mask)
    
    # Paste character
    bg.paste(img, (pos_x, pos_y), img)
    
    # Save output
    out_file = os.path.join(mascots_dir, f"mascot_{mascot_key}.jpg")
    bg.convert("RGB").save(out_file, quality=95)
    print(f"Generated 3D avatar -> {out_file}")

print("All 3D mascots created successfully!")
