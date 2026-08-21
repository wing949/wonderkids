# -*- coding: utf-8 -*-
import os
import re
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"

subjects = ['vietnamese', 'math', 'english']
total_lessons = 0
all_lessons_by_subject = {}

for subj in subjects:
    all_lessons_by_subject[subj] = {}
    subj_total = 0
    for grade in range(1, 6):
        fpath = os.path.join(WORKSPACE, 'src', 'data', 'curriculum', subj, f'grade{grade}.ts')
        if os.path.exists(fpath):
            with open(fpath, 'r', encoding='utf-8') as f:
                content = f.read()
            # extract objects: id, title, semester, lessonNumber
            # A lesson object typically starts with { id: '...', semester: ..., lessonNumber: ..., title: '...'
            lesson_matches = re.findall(r"id:\s*'([^']+)'(?:,\s*semester:\s*(\d+))?(?:,\s*lessonNumber:\s*(\d+))?(?:,\s*title:\s*'([^']+)')?", content)
            
            # More precise regex: find all objects
            blocks = re.findall(r"\{\s*id:\s*'([^']+)'.*?title:\s*'([^']+)'", content, re.DOTALL)
            all_lessons_by_subject[subj][grade] = blocks
            print(f"  {subj.capitalize()} Grade {grade}: {len(blocks)} lessons")
            subj_total += len(blocks)
    print(f"Total {subj.capitalize()}: {subj_total}\n")
    total_lessons += subj_total

print(f"Grand Total Lessons: {total_lessons}")
