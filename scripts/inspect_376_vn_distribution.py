# -*- coding: utf-8 -*-
import os
import sys
import json

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
catalog_file = os.path.join(WORKSPACE, 'scripts', 'all_376_lessons_catalog.json')

with open(catalog_file, 'r', encoding='utf-8') as f:
    lessons = json.load(f)

print(f"Tổng số bài học Tiếng Việt trong all_376_lessons_catalog.json: {len(lessons)}")

by_grade = {}
for item in lessons:
    g = item.get('grade', 1)
    s = item.get('semester', 1)
    key = f"Lớp {g} - Tập {s}"
    by_grade[key] = by_grade.get(key, 0) + 1

for k, v in by_grade.items():
    print(f"- {k}: {v} bài học")
