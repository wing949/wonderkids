# -*- coding: utf-8 -*-
import sys
import os
import re
import json
from pathlib import Path

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
        (r'\bVừa tơn học\b', 'Vừa tan học'),
        (r'\bcóc chữ cái\b', 'các chữ cái'),
        (r'\bdấu cõu đõ ngồi\b', 'dấu câu đã ngồi'),
        (r'\bdõng dọc\b', 'dõng dạc'),
        (r'\bHôm ngy\b', 'Hôm nay'),
        (r'\bchúng tơ\b', 'chúng ta'),
        (r'\bHoõng\b', 'Hoàng'),
        (r'\bHoðng\b', 'Hoàng'),
        (r'\bchấm côu\b', 'chấm câu'),
        (r'\bChú lĩnh\b', 'Chú lính'),
        (r'\bdưới chãn\b', 'dưới chân'),
        (r'\bgiày do\b', 'giày da'),
        (r'\bmô hôi\b', 'mồ hôi'),
        (r'\bnghĩ lờ gì\b', 'nghĩa là gì'),
        (r'\bDưới chôn\b', 'Dưới chân'),
        (r'\btất cỏ\b', 'tất cả'),
        (r'\bcậu nðy chẳng bơo giờ\b', 'cậu này chẳng bao giờ'),
        (r'\bNói tay\b', 'Mỏi tay'),
        (r'\bchỗ nởo\b', 'chỗ nào'),
        (r'\bcậu tơ\b', 'cậu ta'),
        (r'\bCỏ mốy\b', 'Cả mấy'),
        (r'\bTừ ngy\b', 'Từ nay'),
        (r'\bchấm cõu\b', 'chấm câu'),
        (r'\bcồn yêu cầu\b', 'cần yêu cầu'),
        (r'\bcõu văn\b', 'câu văn'),
        (r'\bđố\b', 'đã'),
        (r'\bTrồn Ninh Hồ\b', 'Trần Ninh Hồ'),
    ]
    for p, r in fixes:
        t = re.sub(p, r, t)
    return t

# Extract Lesson 14 specifically
for l in lessons:
    if "Cuộc họp của chữ viết" in l.get("title", ""):
        raw_p1 = l["pages"][0]["ocrText"]
        raw_p2 = l["pages"][1]["ocrText"]
        
        # P1 clean
        p1_text = clean_ocr_typos(raw_p1)
        p2_text = clean_ocr_typos(raw_p2)
        
        print("=== PARSED LESSON 14 CUOC HOP CUA CHU VIET ===")
        print("Page 1:\n", p1_text[p1_text.find("Vừa tan học"):p1_text.rfind("62")])
        print("\nPage 2:\n", p2_text[:p2_text.find("Từ ngữ")])
