# -*- coding: utf-8 -*-
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
DOCS_DIR = os.path.join(WORKSPACE_DIR, 'docs')

from data_grade1 import G1_DATA
from data_grade2 import G2_DATA
from data_grade3 import G3_DATA
from data_grade4 import G4_DATA
from data_grade5 import G5_DATA

from build_132_prompts_doc import get_scene_description, STYLE_PREFIX, STYLE_SUFFIX, all_grades

raw_prompts_list = []

for g_num, g_title, g_dict in all_grades:
    keys_sorted = sorted(g_dict.keys(), key=lambda x: int(x.split('-b')[-1]))
    for idx, key in enumerate(keys_sorted, 1):
        item = g_dict[key]
        title = item["title"]
        author = item["author"]
        genre = item["genre"]
        scene = get_scene_description(g_num, key, title, author, genre)
        full_prompt = f"{STYLE_PREFIX} {scene} {STYLE_SUFFIX}"
        raw_prompts_list.append(full_prompt)

output_raw = "\n\n".join(raw_prompts_list)

raw_txt_docs = os.path.join(DOCS_DIR, 'prompts_132_raw_only.txt')
raw_txt_root = os.path.join(WORKSPACE_DIR, 'prompts_132_raw_only.txt')

with open(raw_txt_docs, 'w', encoding='utf-8') as f:
    f.write(output_raw)

with open(raw_txt_root, 'w', encoding='utf-8') as f:
    f.write(output_raw)

print(f"✅ Đã tạo thành công file Raw TXT (chỉ chứa thuần prompt, mỗi prompt cách nhau 1 dòng trắng) tại:\n- {raw_txt_docs}\n- {raw_txt_root}")
