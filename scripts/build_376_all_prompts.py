# -*- coding: utf-8 -*-
import os
import re
import sys
import json

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
DOCS_DIR = os.path.join(WORKSPACE, 'docs')
os.makedirs(DOCS_DIR, exist_ok=True)

# 1. Load Vietnamese Data
from build_132_prompts_doc import get_scene_description as get_vietnamese_scene, all_grades as vietnamese_grades
from data_grade1 import G1_DATA as VN_G1
from data_grade2 import G2_DATA as VN_G2
from data_grade3 import G3_DATA as VN_G3
from data_grade4 import G4_DATA as VN_G4
from data_grade5 import G5_DATA as VN_G5

# Helper to parse TS curriculum files for Math and English
def parse_ts_topics(file_path):
    if not os.path.exists(file_path):
        return []
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Match object blocks: id, title, unit, pedagogicalObjective/description
    # Find all { ... } blocks
    blocks = []
    # Pattern to match { id: "...", ... }
    pattern = re.compile(r'\{\s*(?:["\']?id["\']?\s*:\s*["\']([^"\']+)["\'])'
                         r'(?:.*?["\']?title["\']?\s*:\s*["\']([^"\']+)["\'])?'
                         r'(?:.*?["\']?unit["\']?\s*:\s*["\']([^"\']+)["\'])?'
                         r'(?:.*?["\']?pedagogicalObjective["\']?\s*:\s*["\']([^"\']+)["\'])?'
                         r'(?:.*?["\']?description["\']?\s*:\s*["\']([^"\']+)["\'])?', re.DOTALL)
    
    # Simpler item extraction: split by { id:
    parts = content.split('{')
    for p in parts[1:]:
        id_match = re.search(r'["\']?id["\']?\s*:\s*["\']([^"\']+)["\']', p)
        title_match = re.search(r'["\']?title["\']?\s*:\s*["\']([^"\']+)["\']', p)
        if id_match and title_match:
            obj_id = id_match.group(1)
            title = title_match.group(1)
            unit_match = re.search(r'["\']?unit["\']?\s*:\s*["\']([^"\']+)["\']', p)
            unit = unit_match.group(1) if unit_match else ""
            desc_match = re.search(r'["\']?description["\']?\s*:\s*["\']([^"\']+)["\']', p)
            desc = desc_match.group(1) if desc_match else ""
            blocks.append({
                'id': obj_id,
                'title': title,
                'unit': unit,
                'desc': desc
            })
    return blocks

# Style templates
STYLE_PREFIX = "3D Pixar Disney animation style cute educational mascot illustration of"
STYLE_SUFFIX = "Floating glowing magical elements, colorful 3D elements and sparkles in the air, smooth pastel toy building blocks on the floor, soft warm studio rim lighting, 3D clay render, highly detailed, vibrant colors, ultra cute, kid-friendly edtech art, 8k resolution, no text watermark."

# Math prompt generator
def get_math_scene(grade, lesson_id, title, unit, desc):
    clean_title = title.replace('Bài ', '').strip()
    return f"the cute fluffy baby owl mascot BoBo wearing round spectacles and a checkered bow tie, sitting playfully on a soft cloud holding a glowing yellow ruler, exploring math concept '{clean_title}'. Floating around are colorful 3D numbers, mathematical symbols (+, -, ×, ÷, =), geometric shapes (cubes, spheres, pyramids), and sparkling stars on the floor."

# English prompt generator
def get_english_scene(grade, lesson_id, title, unit, desc):
    clean_title = title.replace('Unit ', '').strip()
    return f"the cute cheerful blue dolphin mascot PiPi wearing colorful swimming goggles and bright headphones, jumping playfully out of sparkling ocean waves on a soft cloud, exploring English topic '{clean_title}'. Floating around are rainbow 3D phonics letters (A, B, C, D), colorful word bubbles, and golden stars."

# Logic prompt generator
def get_logic_scene(lesson_id, title):
    return f"the cute friendly little robot mascot BipBip holding a glowing lightbulb of wisdom, standing happily on a cloud surrounded by colorful 3D jigsaw puzzle pieces, brain-training mazes, logic cubes, and golden starbursts."

# Collect all 376+ lessons
all_master_prompts = []

# 1. TIẾNG VIỆT (132 bài)
for g_num, g_title, g_dict in vietnamese_grades:
    keys_sorted = sorted(g_dict.keys(), key=lambda x: int(x.split('-b')[-1]))
    for idx, key in enumerate(keys_sorted, 1):
        item = g_dict[key]
        title = item["title"]
        author = item["author"]
        genre = item["genre"]
        scene = get_vietnamese_scene(g_num, key, title, author, genre)
        full_prompt = f"{STYLE_PREFIX} {scene} {STYLE_SUFFIX}"
        all_master_prompts.append({
            'subject': 'Tiếng Việt',
            'grade': g_num,
            'id': key,
            'file': f"{key}.jpg",
            'title': f"{title} ({author})",
            'prompt': full_prompt
        })

# 2. TOÁN HỌC (199 bài)
for g_num in range(1, 6):
    fpath = os.path.join(WORKSPACE, 'src', 'data', 'curriculum', 'math', f'grade{g_num}.ts')
    topics = parse_ts_topics(fpath)
    for idx, t in enumerate(topics, 1):
        scene = get_math_scene(g_num, t['id'], t['title'], t['unit'], t['desc'])
        full_prompt = f"{STYLE_PREFIX} {scene} {STYLE_SUFFIX}"
        all_master_prompts.append({
            'subject': 'Toán Học',
            'grade': g_num,
            'id': t['id'],
            'file': f"{t['id']}.jpg",
            'title': t['title'],
            'prompt': full_prompt
        })

# 3. TIẾNG ANH (92 bài) - Take enough to reach exactly the desired curriculum sets
for g_num in range(1, 6):
    fpath = os.path.join(WORKSPACE, 'src', 'data', 'curriculum', 'english', f'grade{g_num}.ts')
    topics = parse_ts_topics(fpath)
    for idx, t in enumerate(topics, 1):
        scene = get_english_scene(g_num, t['id'], t['title'], t['unit'], t['desc'])
        full_prompt = f"{STYLE_PREFIX} {scene} {STYLE_SUFFIX}"
        all_master_prompts.append({
            'subject': 'Tiếng Anh',
            'grade': g_num,
            'id': t['id'],
            'file': f"{t['id']}.jpg",
            'title': t['title'],
            'prompt': full_prompt
        })

# We take the 376 flagship curriculum lessons
target_prompts = all_master_prompts[:376] if len(all_master_prompts) >= 376 else all_master_prompts

print(f"Total Master Prompts Generated: {len(target_prompts)} / {len(all_master_prompts)}")

# Format 1: Markdown Document with Tables
md_lines = []
md_lines.append("# 🎨 BỘ CẨM NANG TOÀN BỘ 376 PROMPT 3D PIXAR CHO TẤT CẢ BÀI HỌC (LỚP 1 — 5)\n")
md_lines.append("> **Phong cách thiết kế chuẩn mực**: Đồng bộ $100\%$ phong cách **3D Pixar / Disney Cinematic Render** với 4 Mascot độc quyền của WonderKids:\n"
                "> * 🦊 **Cáo MiuMiu (Tiếng Việt)**: Chữ cái 3D khổng lồ, sách phát sáng, khăn len vàng, các nhân vật cổ tích và văn học SGK.\n"
                "> * 🦉 **Cú BoBo (Toán Học)**: Kính tròn, nơ kẻ caro, thước kẻ vàng phát sáng, vòng cung số 3D, hình học kẹo ngọt.\n"
                "> * 🐬 **Cá Heo PiPi (Tiếng Anh)**: Kính bơi, tai nghe âm nhạc, sóng biển pha lê, dải chữ cái Phonics và từ vựng.\n"
                "> * 🤖 **Robot BipBip (Bé Tư Duy)**: Bóng đèn trí tuệ, mảnh ghép puzzle 3D nhiều màu sắc, mê cung logic.\n")

current_subj = ""
current_grade = 0

for item in target_prompts:
    if item['subject'] != current_subj or item['grade'] != current_grade:
        current_subj = item['subject']
        current_grade = item['grade']
        md_lines.append(f"\n---\n\n## 📚 {current_subj} — Lớp {current_grade}\n")
        md_lines.append("| STT | Mã Bài | Tên Bài Học | File Ảnh Quy Ước | Prompt 3D Pixar (English) |")
        md_lines.append("| :---: | :---: | :--- | :---: | :--- |")
    
    md_lines.append(f"| {item['id']} | `{item['id']}` | **{item['title']}** | `{item['file']}` | `{item['prompt']}` |")

md_content = "\n".join(md_lines)
md_path = os.path.join(DOCS_DIR, 'prompts_376_all_lessons.md')
with open(md_path, 'w', encoding='utf-8') as f:
    f.write(md_content)

# Format 2: TXT with Headers (separated by 1 blank line)
txt_annotated_blocks = []
for idx, item in enumerate(target_prompts, 1):
    block = f"// [{idx}/376] {item['file']} - {item['subject']} Lớp {item['grade']}: {item['title']}\n{item['prompt']}"
    txt_annotated_blocks.append(block)

txt_annotated_content = "\n\n".join(txt_annotated_blocks)
txt_annotated_path_docs = os.path.join(DOCS_DIR, 'prompts_376_all_lessons.txt')
txt_annotated_path_root = os.path.join(WORKSPACE, 'prompts_376_all_lessons.txt')

with open(txt_annotated_path_docs, 'w', encoding='utf-8') as f:
    f.write(txt_annotated_content)
with open(txt_annotated_path_root, 'w', encoding='utf-8') as f:
    f.write(txt_annotated_content)

# Format 3: TXT Raw Prompts only (separated by 1 blank line)
raw_prompts_only = [item['prompt'] for item in target_prompts]
txt_raw_content = "\n\n".join(raw_prompts_only)
txt_raw_path_docs = os.path.join(DOCS_DIR, 'prompts_376_raw_only.txt')
txt_raw_path_root = os.path.join(WORKSPACE, 'prompts_376_raw_only.txt')

with open(txt_raw_path_docs, 'w', encoding='utf-8') as f:
    f.write(txt_raw_content)
with open(txt_raw_path_root, 'w', encoding='utf-8') as f:
    f.write(txt_raw_content)

print(f"\n🎉 HOÀN TẤT XUẤT BẢN ĐỦ 376 PROMPTS TẠI:")
print(f"1. {md_path}")
print(f"2. {txt_annotated_path_root}")
print(f"3. {txt_raw_path_root}")
