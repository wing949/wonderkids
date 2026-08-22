# -*- coding: utf-8 -*-
import sys
import os
import re
import json
from pathlib import Path

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

WORKSPACE = Path(r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning")

def clean_ocr_line(line):
    line = line.strip()
    # Remove OCR noise
    line = re.sub(r'^[|\-—_¬~=›‹«»\s\.\,\:\;]+', '', line)
    line = re.sub(r'[|\-—_¬~=›‹«»\s\.\,\:\;]+$', '', line)
    return line

def extract_author(text):
    # Match (Tên Tác Giả) or (Theo Tác Giả) or (Phỏng theo...) at the end of reading section
    matches = re.findall(r'\(\s*(?:Theo|Phỏng theo|Theo truyện|Truyện dân gian|Đồng dao|Ca dao)?\s*([A-ZÀ-Ỹa-zà-ỹ\s\.\,–\-]+)\)', text)
    if matches:
        # Pick the last match that looks like a person's name or collection
        for m in reversed(matches):
            author_str = m.strip()
            # Filter out non-author parentheses like (1), (Trích), (tiếp theo)
            if re.match(r'^(Trích|tiếp theo|\d+|trang \d+|SGK)$', author_str, re.I):
                continue
            if len(author_str.split()) >= 2 or any(kw in author_str.lower() for kw in ['dân gian', 'truyện', 'ngụ ngôn', 'ca dao', 'đồng dao']):
                return f"Theo {author_str}" if "theo" in m.lower() and not author_str.lower().startswith("theo") else author_str
    return "NXB Giáo Dục Việt Nam"

def parse_lesson_pages(lesson_data):
    title = re.sub(r'^Bài\s+\d+:\s*', '', lesson_data['title']).strip()
    pages = lesson_data['pages']
    
    all_text = "\n".join(p['ocrText'] for p in pages)
    author = extract_author(all_text)
    
    # Extract reading passage text
    # In SGK, reading passage starts after ĐỌC or title and ends before "Từ ngữ" or "Câu hỏi" / "1." / "2."
    reading_lines = []
    
    for p in pages:
        p_text = p['ocrText']
        lines = p_text.split('\n')
        in_reading = False
        
        for l in lines:
            cleaned = clean_ocr_line(l)
            if not cleaned:
                continue
                
            # Ignore header / navigation lines
            if re.match(r'^(ĐỌC|Tuần \d+|Bài \d+|Tiết \d+|\d+\s*\))', cleaned, re.I):
                in_reading = True
                continue
                
            # Stop if reached vocabulary / questions section
            if re.match(r'^(Từ ngữ|Câu hỏi|Luyện tập|Trao đổi|Vận dụng|1\.|2\.|3\.|4\.|5\.)', cleaned, re.I):
                break
                
            # Stop if reached author line
            if re.match(r'^\([A-ZÀ-Ỹa-zà-ỹ\s\.\,–\-]+\)$', cleaned):
                break
                
            # Check if line looks like text
            if len(cleaned) > 3 and not re.match(r'^\d+$', cleaned):
                reading_lines.append(cleaned)
                
    return {
        'title': title,
        'author': author,
        'readingLines': reading_lines
    }

print("Loaded parser helper.")
