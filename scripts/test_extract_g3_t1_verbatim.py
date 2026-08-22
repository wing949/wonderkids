# -*- coding: utf-8 -*-
import sys
import os
import re
import json

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

with open("scripts/ocr_verbatim_g3_t1.json", "r", encoding="utf-8") as f:
    lessons = json.load(f)

print(f"Loaded {len(lessons)} lessons from Grade 3 Tap 1.")

def clean_ocr_typos(t):
    fixes = [
        (r'\bChỉ\b', 'Chi'),
        (r'\bđều thu\b', 'đầu thu'),
        (r'\bđều năm\b', 'đầu năm'),
        (r'\bNgày mơi\b', 'Ngày mai'),
        (r'\bhơi bạn\b', 'hai bạn'),
        (r'\bbơo nhiêu\b', 'bao nhiêu'),
        (r'\bcộu\b', 'cậu'),
        (r'\bcôu có\b', 'câu cá'),
        (r'\bthỏ diều\b', 'thả diều'),
        (r'\bnồm lăn rơ bối cỏ\b', 'nằm lăn ra bãi cỏ'),
        (r'\bxe đợp\b', 'xe đạp'),
        (r'\bđợp xe\b', 'đạp xe'),
        (r'\bnhũ tập xe\b', 'nhà tập xe'),
        (r'\bnơi mờ\b', 'nơi mà'),
        (r'\bCứ nhu vậy\b', 'Cứ như vậy'),
        (r'\btrỏi nghiệm\b', 'trải nghiệm'),
        (r'\bmùug hè\b', 'mùa hè'),
        (r'\bmùg hề\b', 'mùa hè'),
        (r'\bmùa hề\b', 'mùa hè'),
        (r'\bchốc sẽ theo cóc bạn vöo\b', 'chắc sẽ theo các bạn vào'),
        (r'\bvöo\b', 'vào'),
        (r'\bvðo\b', 'vào'),
        (r'\bcóc bạn\b', 'các bạn'),
        (r'\bNinh Dương\b', 'Minh Dương'),
    ]
    for p, r in fixes:
        t = re.sub(p, r, t)
    return t

for l in lessons[:5]:
    lid = l["lessonId"]
    title = l["title"]
    print(f"\n==========================================")
    print(f"LESSON: {title} ({lid})")
    
    # Process pages
    extracted_text = []
    author = "NXB Giáo Dục Việt Nam"
    for p in l["pages"]:
        raw = p["ocrText"]
        # Look for author
        m_auth = re.search(r'\(([A-ZÀ-Ỹa-zà-ỹ\s\.\,–\-]+)\)', raw)
        if m_auth:
            cand = m_auth.group(1).strip()
            if len(cand.split()) >= 2 and not any(w in cand.lower() for w in ['trích', 'tiếp theo', 'trang', 'sgk']):
                author = cand
                
    print(f"Extracted Author: {author}")
