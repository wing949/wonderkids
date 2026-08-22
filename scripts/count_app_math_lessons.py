# -*- coding: utf-8 -*-
import os
import sys
import re

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"

total = 0
for g in range(1, 6):
    fpath = os.path.join(WORKSPACE, 'src', 'data', 'curriculum', 'math', f'grade{g}.ts')
    with open(fpath, 'r', encoding='utf-8') as f:
        c = f.read()
    matches = re.findall(r'"id":\s*"(math-g\d+-b\d+)"', c)
    print(f"📘 Toán Lớp {g}: {len(matches)} bài học ({matches[0]} -> {matches[-1]})")
    total += len(matches)

print("--------------------------------------------------")
print(f"🏆 TỔNG CỘNG MÔN TOÁN TRÊN APPS: {total} BÀI HỌC!")
