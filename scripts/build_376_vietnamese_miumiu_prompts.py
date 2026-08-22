# -*- coding: utf-8 -*-
import os
import sys
import json
import re

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
DOCS_DIR = os.path.join(WORKSPACE, 'docs')
os.makedirs(DOCS_DIR, exist_ok=True)

catalog_file = os.path.join(WORKSPACE, 'scripts', 'all_376_lessons_catalog.json')
with open(catalog_file, 'r', encoding='utf-8') as f:
    lessons_376 = json.load(f)

print(f"Loaded {len(lessons_376)} lessons from all_376_lessons_catalog.json")

STYLE_PREFIX = "3D Pixar Disney animation style cute educational mascot illustration of the cute little orange fox mascot MiuMiu with fluffy fur and tail, wearing a cozy yellow scarf,"
STYLE_SUFFIX = "Floating glowing magical elements, colorful 3D letters and sparkles in the air, smooth pastel toy building blocks on the floor, soft warm honey and peach studio rim lighting, 3D clay render, highly detailed, vibrant colors, ultra cute, kid-friendly edtech art, 8k resolution, no text watermark."

def generate_miumiu_scene(item):
    grade = item.get('grade', 1)
    semester = item.get('semester', 1)
    lesson_num = item.get('lessonNumber', 1)
    title = item.get('title', '')
    source_title = item.get('sourceTitle', title)
    
    clean_title = re.sub(r'^(Bài\s*\d+:\s*)', '', title).strip()
    
    # Grade 1 Sem 1: Phonics & Alphabet Letters
    if grade == 1 and semester == 1:
        # e.g. A a, B b, C c - D d - Đ đ, etc.
        letters_match = re.findall(r'[A-ZĐa-zđÀ-ỹ]+', clean_title)
        letter_str = " ".join(letters_match[:4])
        
        if 'Ôn tập' in title:
            return f"sitting atop a rainbow cloud celebrating with a golden star wand, cheering around a spinning carousel of colorful 3D alphabet letters and open glowing storybooks."
        elif 'kể chuyện' in title.lower():
            return f"sitting on a soft cloud telling a magical fairy tale with an open glowing storybook, surrounded by friendly animal friends and floating 3D vowel cubes."
        else:
            return f"happily sitting on a soft cloud and playing beside giant glowing 3D letters '{clean_title}', exploring phonics with sparkles and floating colorful alphabet cubes."
            
    # Grade 1 Sem 2: First Reading Passages
    elif grade == 1 and semester == 2:
        if 'Tôi là học sinh' in clean_title:
            return f"wearing a tiny school uniform with a red backpack, proudly standing on a soft cloud beside a 6-year-old Vietnamese student reading a glowing storybook."
        elif 'Đôi tai' in clean_title or 'Thỏ' in clean_title:
            return f"sitting on a soft cloud beside a cute white bunny with long expressive ears listening to forest sounds, surrounded by glowing stars and flowers."
        elif 'Gió' in clean_title or 'Bạn của gió' in clean_title:
            return f"flying a colorful diamond kite and watching a toy sailboat ride on soft clouds with gentle swirling breezes."
        elif 'Rửa tay' in clean_title:
            return f"playfully washing paws under a crystal water fountain with fluffy floating soap bubbles and sparkling water drops."
        elif 'Lời chào' in clean_title:
            return f"politely bowing to greet teachers and friends with blooming pink peach blossoms and golden stars."
        elif 'Cây bàng' in clean_title:
            return f"resting under the wide umbrella canopy of a majestic green almond tree (cây bàng) in a sunlit primary schoolyard."
        elif 'Cậu bé thông minh' in clean_title:
            return f"standing in a royal palace court beside a clever boy solving a riddle before the smiling king."
        elif 'Bác Hồ' in clean_title:
            return f"holding a blooming pink lotus blossom beside a glowing golden portrait of Uncle Ho surrounded by cheerful children."
        else:
            return f"sitting on a soft cloud reading an illustrated story of '{clean_title}' with glowing book pages and floating nature elements."

    # Grade 2:
    elif grade == 2:
        if 'Làm việc' in clean_title:
            return f"sitting on a cloud beside a cheerful fluffy rooster with a bright red comb, a smiling pendulum clock, and blooming peach blossom branches."
        elif 'Gọi bạn' in clean_title:
            return f"hugging two baby animal friends, a Golden Calf (Bê Vàng) and a White Goat (Dê Trắng), sitting lovingly by a sparkling crystal stream."
        elif 'Em có xinh' in clean_title:
            return f"admiring a cute baby elephant looking at its reflection in a crystal pond surrounded by wildflowers."
        elif 'Chuyện bốn mùa' in clean_title:
            return f"dancing hand in hand with four seasonal fairy princesses (Spring, Summer, Autumn, Winter) under a glowing rainbow."
        elif 'Bác sĩ Sói' in clean_title or 'Tôm Càng' in clean_title:
            return f"cheering for brave little animal heroes in an illustrated riverbank wonderland with crystal water bubbles."
        else:
            return f"exploring the heartwarming story '{clean_title}', sitting on a soft cloud with floating storybook illustrations and golden stars."

    # Grade 3:
    elif grade == 3:
        if 'Cóc kiện' in clean_title:
            return f"wearing a red warrior headband and striking a golden celestial drum in heaven alongside a brave green toad, with diamond raindrops and thunder sparkles."
        elif 'Hai Bà Trưng' in clean_title:
            return f"riding proudly alongside two heroic warrior queens (Hai Bà Trưng) in golden armor on a giant Asian elephant with waving golden uprising flags."
        elif 'Y-éc-xanh' in clean_title:
            return f"sitting on a sunny beach in Nha Trang beside kind Dr. Alexandre Yersin caring for village children by turquoise ocean waves."
        elif 'Đất nước' in clean_title or 'Bản đồ' in clean_title:
            return f"standing proudly on a cloud holding a glowing 3D S-shaped map of Vietnam with golden rice terraces, rivers, and islands."
        else:
            return f"immersed in the educational adventure '{clean_title}', sitting on a soft cloud with floating cultural and historical elements."

    # Grade 4:
    elif grade == 4:
        if 'Dế Mèn' in clean_title:
            return f"cheering for knightly cricket hero Dế Mèn with shining armor protecting weeping moth girl Nhà Trò, sitting on a soft cloud."
        elif 'Lượm' in clean_title:
            return f"skipping and whistling across golden terraced rice fields alongside brave young courier boy Lượm wearing a jaunty cap and satchel."
        elif 'Trống đồng' in clean_title:
            return f"admiring a giant glowing ancient Đông Sơn bronze drum with intricate sunburst motifs and soaring Lạc birds."
        elif 'Hạ Long' in clean_title:
            return f"sailing on a cute red-sailed junk through emerald waters dotted with limestone karst peaks in Hạ Long Bay."
        elif 'Sơn Đoòng' in clean_title:
            return f"exploring the colossal natural wonder of Sơn Đoòng Cave with crystal subterranean rivers and sunbeams through a sinkhole."
        else:
            return f"journeying through the Vietnamese literary world of '{clean_title}', surrounded by rich cultural artifacts and glowing book pages."

    # Grade 5:
    elif grade == 5:
        if 'Thư gửi các học sinh' in clean_title:
            return f"holding a historical letter scroll 1945 with red wax seal beside a waving national red flag with golden star and pink lotus blossoms."
        elif 'Kì diệu rừng xanh' in clean_title:
            return f"sitting inside a glowing magical crystal sphere in an enchanted forest surrounded by giant mushroom umbrellas and golden autumn leaves."
        elif 'Lòng dân' in clean_title:
            return f"standing beside a brave southern mother in bà ba shirt protecting a revolution soldier in a cozy thatched wooden house."
        elif 'Đền Hùng' in clean_title:
            return f"visiting the sacred ancestral Hung Kings Temple on mountain Nghĩa Lĩnh overlooking three mighty converging rivers."
        elif 'Tranh làng Hồ' in clean_title:
            return f"admiring vibrant folk woodcut prints of lucky pigs with yin-yang swirls and roosters on sparkling seashell paper."
        elif 'Út Vịnh' in clean_title:
            return f"saluting the bravery of schoolboy Út Vịnh on railroad tracks surrounded by golden stars of honor."
        else:
            return f"celebrating Vietnamese literature and heritage in '{clean_title}', sitting on a cloud with golden trophies, scrolls, and glowing wisdom."

    return f"sitting on a soft cloud exploring '{clean_title}' with glowing Vietnamese letters and magical books."

prompts_376_list = []
annotated_txt_blocks = []
raw_prompts_list = []

md_lines = []
md_lines.append("# 🦊 BỘ CẨM NANG TOÀN BỘ 376 PROMPT 3D PIXAR TIẾNG VIỆT (LỚP 1 — 5) VỚI MASCOT CÁO MIUMIU\n")
md_lines.append("> **Chuẩn mực đồ họa độc quyền**: $100\\%$ tất cả 376 bài học Tiếng Việt từ Lớp 1 đến Lớp 5 đều có sự hiện diện của **Mascot Cáo MiuMiu** (quàng khăn len vàng, mắt to tròn long lanh, lông cam xù ấm áp) tương tác trực tiếp với các chữ cái 3D, từ ngữ, nhân vật và bối cảnh chuẩn SGK NXB Giáo Dục Việt Nam.\n")

current_grade_sem = ""

for idx, item in enumerate(lessons_376, 1):
    grade = item.get('grade', 1)
    semester = item.get('semester', 1)
    lesson_id = item.get('id', f"tv-g{grade}-t{semester}-b{item.get('lessonNumber', idx)}")
    title = item.get('title', f"Bài {idx}")
    
    scene = generate_miumiu_scene(item)
    full_prompt = f"{STYLE_PREFIX} {scene} {STYLE_SUFFIX}"
    filename = f"{lesson_id}.jpg"
    
    prompts_376_list.append({
        'index': idx,
        'id': lesson_id,
        'grade': grade,
        'semester': semester,
        'title': title,
        'filename': filename,
        'prompt': full_prompt
    })
    
    # Text block with header
    annotated_txt_blocks.append(f"// [{idx}/376] {filename} - Tiếng Việt Lớp {grade} Tập {semester}: {title}\n{full_prompt}")
    raw_prompts_list.append(full_prompt)
    
    # Markdown table grouping
    group_key = f"Lớp {grade} — Tập {semester}"
    if group_key != current_grade_sem:
        current_grade_sem = group_key
        md_lines.append(f"\n---\n\n## 📖 Tiếng Việt {group_key}\n")
        md_lines.append("| STT | Mã Bài | Tên Bài Học | File Ảnh Quy Ước | Prompt 3D Pixar với Cáo MiuMiu (English) |")
        md_lines.append("| :---: | :---: | :--- | :---: | :--- |")
    
    md_lines.append(f"| {idx} | `{lesson_id}` | **{title}** | `{filename}` | `{full_prompt}` |")

# Write Markdown
md_content = "\n".join(md_lines)
md_path = os.path.join(DOCS_DIR, 'prompts_376_vietnamese_lessons.md')
with open(md_path, 'w', encoding='utf-8') as f:
    f.write(md_content)

# Write Annotated TXT (each separated by 1 blank line)
txt_annotated_content = "\n\n".join(annotated_txt_blocks)
txt_annotated_docs = os.path.join(DOCS_DIR, 'prompts_376_vietnamese_lessons.txt')
txt_annotated_root = os.path.join(WORKSPACE, 'prompts_376_vietnamese_lessons.txt')
with open(txt_annotated_docs, 'w', encoding='utf-8') as f:
    f.write(txt_annotated_content)
with open(txt_annotated_root, 'w', encoding='utf-8') as f:
    f.write(txt_annotated_content)

# Write Raw TXT (each separated by 1 blank line)
txt_raw_content = "\n\n".join(raw_prompts_list)
txt_raw_docs = os.path.join(DOCS_DIR, 'prompts_376_raw_only.txt')
txt_raw_root = os.path.join(WORKSPACE, 'prompts_376_raw_only.txt')
with open(txt_raw_docs, 'w', encoding='utf-8') as f:
    f.write(txt_raw_content)
with open(txt_raw_root, 'w', encoding='utf-8') as f:
    f.write(txt_raw_content)

print(f"\n🎉 HOÀN THÀNH XUẤT BẢN ĐỦ 376 PROMPT TIẾNG VIỆT VỚI MASCOT CÁO MIUMIU TẠI:")
print(f"1. {md_path}")
print(f"2. {txt_annotated_root}")
print(f"3. {txt_raw_root}")
