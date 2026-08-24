import os
import math
import random
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

mascots_dir = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning\public\assets\mascots"
CANVAS_SIZE = 512

# Character scene configurations
SCENES = {
    "bunny": {
        "src": "fluent_rabbit.png",
        "bg_top": (255, 240, 248),
        "bg_bot": (253, 222, 238),
        "accent": (244, 114, 182),
        "theme": "room",
        "sparkles": "flowers",
        "title": "Thỏ Con Miffy",
        "badge_color": (236, 72, 153)
    },
    "bear": {
        "src": "fluent_bear.png",
        "bg_top": (255, 247, 237),
        "bg_bot": (254, 215, 170),
        "accent": (249, 115, 22),
        "theme": "forest",
        "sparkles": "stars",
        "title": "Gấu Nâu Teddy",
        "badge_color": (234, 88, 12)
    },
    "cat": {
        "src": "fluent_cat.png",
        "bg_top": (255, 241, 242),
        "bg_bot": (254, 205, 211),
        "accent": (244, 63, 94),
        "theme": "cozy",
        "sparkles": "hearts",
        "title": "Mèo Kitty",
        "badge_color": (225, 29, 72)
    },
    "puppy": {
        "src": "fluent_dog.png",
        "bg_top": (254, 252, 232),
        "bg_bot": (254, 240, 138),
        "accent": (234, 179, 8),
        "theme": "park",
        "sparkles": "bones",
        "title": "Cún Corgi",
        "badge_color": (202, 138, 4)
    },
    "panda": {
        "src": "fluent_panda.png",
        "bg_top": (240, 253, 244),
        "bg_bot": (220, 252, 231),
        "accent": (34, 197, 94),
        "theme": "bamboo",
        "sparkles": "leaves",
        "title": "Gấu Trúc Panda",
        "badge_color": (22, 163, 74)
    },
    "unicorn": {
        "src": "fluent_unicorn.png",
        "bg_top": (250, 245, 255),
        "bg_bot": (233, 213, 255),
        "accent": (168, 85, 247),
        "theme": "rainbow",
        "sparkles": "magic",
        "title": "Kỳ Lân Cầu Vồng",
        "badge_color": (147, 51, 234)
    },
    "penguin": {
        "src": "fluent_penguin.png",
        "bg_top": (240, 249, 255),
        "bg_bot": (224, 242, 254),
        "accent": (14, 165, 233),
        "theme": "ice",
        "sparkles": "snowflakes",
        "title": "Cánh Cụt Nhỏ",
        "badge_color": (2, 132, 199)
    },
    "koala": {
        "src": "fluent_koala.png",
        "bg_top": (248, 250, 252),
        "bg_bot": (226, 232, 240),
        "accent": (100, 116, 139),
        "theme": "eucalyptus",
        "sparkles": "leaves",
        "title": "Gấu Koala",
        "badge_color": (71, 85, 105)
    },
    "tiger": {
        "src": "fluent_tiger.png",
        "bg_top": (255, 247, 237),
        "bg_bot": (254, 215, 170),
        "accent": (249, 115, 22),
        "theme": "safari",
        "sparkles": "fire",
        "title": "Hổ Con Tiger",
        "badge_color": (234, 88, 12)
    },
    "astronaut": {
        "src": "fluent_rocket.png",
        "bg_top": (243, 232, 255),
        "bg_bot": (216, 180, 254),
        "accent": (147, 51, 234),
        "theme": "space",
        "sparkles": "stars",
        "title": "Phi Hành Gia",
        "badge_color": (126, 34, 206)
    },
    "princess": {
        "src": "fluent_crown.png",
        "bg_top": (253, 244, 255),
        "bg_bot": (245, 208, 254),
        "accent": (217, 70, 239),
        "theme": "castle",
        "sparkles": "gems",
        "title": "Công Chúa Tri Thức",
        "badge_color": (192, 38, 211)
    }
}

def create_3d_disney_pixar_scene(config, out_path):
    # 1. Base Studio Background with radial depth & bokeh
    img = Image.new("RGBA", (CANVAS_SIZE, CANVAS_SIZE), (255, 255, 255, 255))
    draw = ImageDraw.Draw(img)
    
    top_c = config["bg_top"]
    bot_c = config["bg_bot"]
    accent = config["accent"]
    
    # Smooth vertical gradient
    for y in range(CANVAS_SIZE):
        ratio = y / float(CANVAS_SIZE)
        r = int(top_c[0] * (1 - ratio) + bot_c[0] * ratio)
        g = int(top_c[1] * (1 - ratio) + bot_c[1] * ratio)
        b = int(top_c[2] * (1 - ratio) + bot_c[2] * ratio)
        draw.line([(0, y), (CANVAS_SIZE, y)], fill=(r, g, b, 255))
        
    # Add warm radial spotlight from top-left (Pixar key light)
    spotlight = Image.new("RGBA", (CANVAS_SIZE, CANVAS_SIZE), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(spotlight)
    for radius in range(320, 0, -8):
        alpha = int((1 - radius / 320.0) * 80)
        s_draw.ellipse([80 - radius, 60 - radius, 80 + radius, 60 + radius], fill=(255, 255, 255, alpha))
    spotlight = spotlight.filter(ImageFilter.GaussianBlur(25))
    img = Image.alpha_composite(img, spotlight)
    
    # 2. Add Pixar Studio Bokeh light circles & depth floating spheres
    bokeh = Image.new("RGBA", (CANVAS_SIZE, CANVAS_SIZE), (0, 0, 0, 0))
    b_draw = ImageDraw.Draw(bokeh)
    random.seed(sum(top_c))
    
    # Soft background floating bokeh orbs
    for _ in range(12):
        bx = random.randint(30, CANVAS_SIZE - 30)
        by = random.randint(30, CANVAS_SIZE - 30)
        br = random.randint(18, 55)
        b_color = (
            min(255, accent[0] + random.randint(20, 50)),
            min(255, accent[1] + random.randint(20, 50)),
            min(255, accent[2] + random.randint(20, 50)),
            random.randint(35, 75)
        )
        b_draw.ellipse([bx - br, by - br, bx + br, by + br], fill=b_color)
    bokeh = bokeh.filter(ImageFilter.GaussianBlur(14))
    img = Image.alpha_composite(img, bokeh)
    
    # 3. Add 3D Soft Pedestal / Cloud / Floor Glow
    floor_layer = Image.new("RGBA", (CANVAS_SIZE, CANVAS_SIZE), (0, 0, 0, 0))
    f_draw = ImageDraw.Draw(floor_layer)
    # 3D Soft elliptical platform
    f_draw.ellipse([60, 360, 452, 490], fill=(255, 255, 255, 140))
    f_draw.ellipse([90, 380, 422, 475], fill=(*accent, 45))
    floor_layer = floor_layer.filter(ImageFilter.GaussianBlur(18))
    img = Image.alpha_composite(img, floor_layer)

    # 4. Load 3D Mascot Character
    src_file = os.path.join(mascots_dir, config["src"])
    if not os.path.exists(src_file):
        print(f"Warning: {src_file} not found")
        return
        
    char_raw = Image.open(src_file).convert("RGBA")
    
    # Resize character generously (360x360)
    CHAR_SIZE = 360
    char_raw.thumbnail((CHAR_SIZE, CHAR_SIZE), Image.Resampling.LANCZOS)
    
    # Enhance vibrance & contrast for Pixar 3D look
    enhancer = ImageEnhance.Color(char_raw)
    char_enhanced = enhancer.enhance(1.15)
    bright_enhancer = ImageEnhance.Brightness(char_enhanced)
    char_enhanced = bright_enhancer.enhance(1.05)
    
    # 5. Realistic 3D Soft Contact & Ambient Occlusion Shadow
    shadow_layer = Image.new("RGBA", (CANVAS_SIZE, CANVAS_SIZE), (0, 0, 0, 0))
    sh_draw = ImageDraw.Draw(shadow_layer)
    char_cx = CANVAS_SIZE // 2
    char_cy = 240
    
    # Diffuse ground shadow
    sh_draw.ellipse([char_cx - 130, 385, char_cx + 130, 445], fill=(*config["badge_color"], 70))
    sh_draw.ellipse([char_cx - 90, 395, char_cx + 90, 435], fill=(20, 20, 40, 110))
    shadow_layer = shadow_layer.filter(ImageFilter.GaussianBlur(16))
    img = Image.alpha_composite(img, shadow_layer)
    
    # 6. Subtle Pixar 3D Rim Glow Behind Character
    glow_layer = Image.new("RGBA", (CANVAS_SIZE, CANVAS_SIZE), (0, 0, 0, 0))
    r, g, b, a = char_enhanced.split()
    glow_mask = a.filter(ImageFilter.GaussianBlur(14))
    char_pos = ((CANVAS_SIZE - char_enhanced.width) // 2, (CANVAS_SIZE - char_enhanced.height) // 2 - 25)
    glow_layer.paste((*accent, 140), char_pos, glow_mask)
    img = Image.alpha_composite(img, glow_layer)
    
    # 7. Composite Main 3D Character
    img.paste(char_enhanced, char_pos, char_enhanced)
    
    # 8. Add Sparkling 3D Disney Stars & Magical Dust
    sparkle_layer = Image.new("RGBA", (CANVAS_SIZE, CANVAS_SIZE), (0, 0, 0, 0))
    sp_draw = ImageDraw.Draw(sparkle_layer)
    
    def draw_star(draw_obj, center_x, center_y, size, fill_col):
        # 4-point Disney star
        pts = [
            (center_x, center_y - size),
            (center_x + size * 0.25, center_y - size * 0.25),
            (center_x + size, center_y),
            (center_x + size * 0.25, center_y + size * 0.25),
            (center_x, center_y + size),
            (center_x - size * 0.25, center_y + size * 0.25),
            (center_x - size, center_y),
            (center_x - size * 0.25, center_y - size * 0.25)
        ]
        draw_obj.polygon(pts, fill=fill_col)
        # Center glow dot
        draw_obj.ellipse([center_x - size*0.3, center_y - size*0.3, center_x + size*0.3, center_y + size*0.3], fill=(255, 255, 255, 240))
    
    # Draw magical sparkles around the character
    star_positions = [
        (85, 110, 16),
        (420, 130, 20),
        (65, 310, 12),
        (435, 290, 15),
        (130, 60, 10),
        (380, 75, 12),
    ]
    for sx, sy, s_sz in star_positions:
        draw_star(sp_draw, sx, sy, s_sz, (255, 255, 255, 220))
        
    sparkle_layer = sparkle_layer.filter(ImageFilter.GaussianBlur(1))
    img = Image.alpha_composite(img, sparkle_layer)
    
    # 9. Top-left Studio Rim Highlight on overall canvas
    vignette = Image.new("RGBA", (CANVAS_SIZE, CANVAS_SIZE), (0, 0, 0, 0))
    v_draw = ImageDraw.Draw(vignette)
    v_draw.rounded_rectangle([0, 0, CANVAS_SIZE, CANVAS_SIZE], radius=32, outline=(255, 255, 255, 120), width=4)
    img = Image.alpha_composite(img, vignette)
    
    # 10. Save Output as High Quality JPG
    final_rgb = img.convert("RGB")
    final_rgb.save(out_path, "JPEG", quality=98)
    print(f"Rendered 3D Pixar scene -> {os.path.basename(out_path)}")

for key, cfg in SCENES.items():
    out_file = os.path.join(mascots_dir, f"mascot_{key}.jpg")
    create_3d_disney_pixar_scene(cfg, out_file)

print("All 11 3D Disney Pixar Mascot Scenes rendered successfully!")
