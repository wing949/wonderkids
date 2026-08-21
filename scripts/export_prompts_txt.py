# -*- coding: utf-8 -*-
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
DOCS_DIR = os.path.join(WORKSPACE_DIR, 'docs')
os.makedirs(DOCS_DIR, exist_ok=True)

from data_grade1 import G1_DATA
from data_grade2 import G2_DATA
from data_grade3 import G3_DATA
from data_grade4 import G4_DATA
from data_grade5 import G5_DATA

from build_132_prompts_doc import get_scene_description, STYLE_PREFIX, STYLE_SUFFIX, all_grades

prompts_list = []

for g_num, g_title, g_dict in all_grades:
    keys_sorted = sorted(g_dict.keys(), key=lambda x: int(x.split('-b')[-1]))
    for idx, key in enumerate(keys_sorted, 1):
        item = g_dict[key]
        title = item["title"]
        author = item["author"]
        genre = item["genre"]
        scene = get_scene_description(g_num, key, title, author, genre)
        full_prompt = f"{STYLE_PREFIX} {scene} {STYLE_SUFFIX}"
        
        # Each prompt block
        block = f"// {key}.jpg - Lớp {g_num} - Bài {idx}: {title} ({author})\n{full_prompt}"
        prompts_list.append(block)

# Join blocks with one blank line in between
output_content = "\n\n".join(prompts_list)

txt_file_docs = os.path.join(DOCS_DIR, 'prompts_132_vietnamese_lessons.txt')
txt_file_root = os.path.join(WORKSPACE_DIR, 'prompts_132_vietnamese_lessons.txt')

with open(txt_file_docs, 'w', encoding='utf-8') as f:
    f.write(output_content)

with open(txt_file_root, 'w', encoding='utf-8') as f:
    f.write(output_content)

print(f"✅ Đã tạo thành công file TXT chứa 132 prompts tại:\n- {txt_file_docs}\n- {txt_file_root}")
