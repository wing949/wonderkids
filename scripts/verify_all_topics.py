# -*- coding: utf-8 -*-
import os
import re
import sys
import json

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"

def parse_topics(file_path):
    if not os.path.exists(file_path):
        return []
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # regex to find all object blocks with id, title, and description/unit
    # Match both "id" and id
    ids = re.findall(r'["\']?id["\']?\s*:\s*["\']([^"\']+)["\']', content)
    titles = re.findall(r'["\']?title["\']?\s*:\s*["\']([^"\']+)["\']', content)
    
    # Let's extract full object chunks
    # Split by { and find properties
    items = []
    # match each object inside the array
    raw_objs = re.findall(r'\{\s*["\']?id["\']?\s*:\s*["\']([^"\']+)["\'].*?["\']?title["\']?\s*:\s*["\']([^"\']+)["\']', content, re.DOTALL)
    for obj_id, title in raw_objs:
        items.append({
            'id': obj_id,
            'title': title
        })
    return items

subjects = ['vietnamese', 'math', 'english']
all_data = {}

for subj in subjects:
    all_data[subj] = {}
    print(f"=== {subj.upper()} ===")
    subj_total = 0
    for grade in range(1, 6):
        fpath = os.path.join(WORKSPACE, 'src', 'data', 'curriculum', subj, f'grade{grade}.ts')
        topics = parse_topics(fpath)
        all_data[subj][grade] = topics
        print(f"  Grade {grade}: {len(topics)} topics")
        subj_total += len(topics)
    print(f"Subtotal {subj.upper()}: {subj_total}\n")

# Check if there are other files
print("Summary:")
for s in subjects:
    print(f"- {s}: {sum(len(all_data[s][g]) for g in range(1,6))} topics")
