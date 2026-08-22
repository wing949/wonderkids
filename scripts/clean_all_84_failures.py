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

from deep_clean_and_verify_all_293 import clean_text_thoroughly

# Load DOM audit report
with open(WORKSPACE / "scripts" / "dom_2way_audit_report.json", "r", encoding="utf-8") as f:
    report = json.load(f)

failed_items = report["failed"]
print(f"Processing {len(failed_items)} failed lessons from DOM audit...")

with open(WORKSPACE / "src" / "data" / "curriculum" / "vietnamese" / "sgkTranscripts.ts", "r", encoding="utf-8") as f:
    ts_code = f.read()

# Pattern for OCR junk tokens
JUNK_REGEX = re.compile(r'[~¬|_=›‹«»\\\/^#$*@+§¿]+|\bEm\s*Z>\b|\bLo\s*va\s*Ї\b|\bÑ\s*5\)\b|\b¿\s*má\b', re.I)

def clean_paragraph_completely(p):
    p = clean_text_thoroughly(p)
    p = JUNK_REGEX.sub('', p)
    p = re.sub(r'\s+', ' ', p).strip()
    return p

# Load OCR verbatim database
ocr_db = {}
for g in [1, 2, 3, 4, 5]:
    for s in [1, 2]:
        p = WORKSPACE / "scripts" / f"ocr_verbatim_g{g}_t{s}.json"
        if p.exists():
            with open(p, "r", encoding="utf-8") as f:
                data = json.load(f)
                for item in data:
                    ocr_db[item["lessonId"]] = item

# Load REAL_READING_PASSAGES
from build_100_percent_real_reading_texts import REAL_READING_PASSAGES

for item in failed_items:
    lid = item["lessonId"]
    title = item["title"]
    
    # Check if already in REAL_READING_PASSAGES
    if lid in REAL_READING_PASSAGES:
        entry = REAL_READING_PASSAGES[lid]
        cleaned_paras = [clean_paragraph_completely(p) for p in entry["content"]]
        cleaned_paras = [p for p in cleaned_paras if len(p) > 5]
        REAL_READING_PASSAGES[lid]["content"] = cleaned_paras
    else:
        ocr_item = ocr_db.get(lid) or ocr_db.get(lid.replace('-t1-', '-').replace('-t2-', '-'))
        if ocr_item and ocr_item.get("pages"):
            clean_paras = []
            for page in ocr_item["pages"]:
                raw = page.get("ocrText", "")
                for line in raw.split("\n"):
                    l = clean_paragraph_completely(line)
                    if not l or len(l) < 5:
                        continue
                    if re.match(r'^(ĐỌC|Tuần \d+|Bài \d+|Tiết \d+|Hỏi\s*[-–]|Trao đổi|Quan sát|Từ ngữ|Câu hỏi|Luyện tập|NÓI VÀ NGHE|VIẾT|Vận dụng|\d+\.|\d+\s*[\)\/])', l, re.I):
                        continue
                    if re.match(r'^(Chọn|Tìm|Nêu|Kể|Viết|Em hãy|Theo em|Dựa vào|Đọc kĩ|Học thuộc lòng)', l, re.I):
                        continue
                    if re.match(r'^\([A-ZÀ-Ỹa-zà-ỹ\s\.\,–\-]+\)$', l):
                        continue
                    if "NXB Giáo Dục" in l or "KẾT NỐI TRI THỨC" in l:
                        continue
                    clean_paras.append(l)
                    
            # Group into paragraphs
            grouped = []
            cur = []
            for l in clean_paras:
                cur.append(l)
                if len(cur) >= 4:
                    grouped.append(" ".join(cur))
                    cur = []
            if cur:
                grouped.append(" ".join(cur))
                
            if grouped:
                REAL_READING_PASSAGES[lid] = {
                    "title": title,
                    "author": "NXB Giáo Dục Việt Nam",
                    "genre": "poem" if any(kw in title.lower() for kw in ['thơ', 'hát', 'sao', 'vè', 'cầu vồng', 'đồng dao', 'mùa hè', 'đi học', 'làm anh', 'ngôi nhà', 'mẹ', 'mưa', 'núi', 'cây', 'bến sông']) else "prose",
                    "content": grouped
                }

print(f"Updated REAL_READING_PASSAGES count: {len(REAL_READING_PASSAGES)}")

# Save updated REAL_READING_PASSAGES to file
with open(WORKSPACE / "scripts" / "build_100_percent_real_reading_texts.py", "w", encoding="utf-8") as f:
    f.write("# -*- coding: utf-8 -*-\nimport sys\n\nREAL_READING_PASSAGES = " + json.dumps(REAL_READING_PASSAGES, ensure_ascii=False, indent=4) + "\n")

print("Saved updated build_100_percent_real_reading_texts.py.")
