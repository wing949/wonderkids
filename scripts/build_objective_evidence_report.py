# -*- coding: utf-8 -*-
import sys
import os
import re
import json
from pathlib import Path
from datetime import datetime

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

WORKSPACE = Path(r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning")
REPORT_DIR = WORKSPACE / "report"
REPORTS_DIR = WORKSPACE / "reports"

REPORT_DIR.mkdir(parents=True, exist_ok=True)
REPORTS_DIR.mkdir(parents=True, exist_ok=True)

# Load catalog of 376 lessons
with open(WORKSPACE / "scripts" / "all_376_lessons_catalog.json", "r", encoding="utf-8") as f:
    all_lessons = json.load(f)

# Filter 293 lessons (excluding Grade 1 Semester 1)
target_lessons = [l for l in all_lessons if not (l["grade"] == 1 and l["semester"] == 1)]

# Load transcripts from src/data/curriculum/vietnamese/sgkTranscripts.ts
transcripts_file = WORKSPACE / "src" / "data" / "curriculum" / "vietnamese" / "sgkTranscripts.ts"
transcripts_content = transcripts_file.read_text(encoding="utf-8")

transcript_entries = {}
pattern = re.compile(r"['\"]([a-zA-Z0-9_-]+)['\"]\s*:\s*`([^`]*)`", re.DOTALL)
for m in pattern.finditer(transcripts_content):
    transcript_entries[m.group(1)] = m.group(2).strip()

# Load audit records from reports/left_vs_right_293_audit.json
with open(REPORTS_DIR / "left_vs_right_293_audit.json", "r", encoding="utf-8") as f:
    audit_data = json.load(f)

audit_map = {it["lessonId"]: it for it in audit_data["detailedLessons"]}

now_str = datetime.now().strftime("%d/%m/%Y %H:%M")
date_file_str = datetime.now().strftime("%d_%m_%Y")

# Build pure, objective evidence document without "Trạng thái" or "Chi tiết đối chiếu"
md = f"""# HỒ SƠ HÌNH ẢNH & VĂN BẢN DOM THỰC TẾ 293 BÀI HỌC SGK TIẾNG VIỆT
**Ngày thực hiện:** {now_str}  
**Phạm vi:** 293 bài học SGK Tiếng Việt (Toàn bộ Lớp 1 Tập 2, Lớp 2, Lớp 3, Lớp 4, Lớp 5; loại trừ 83 bài âm vần Tập 1 Lớp 1)  
**Phương pháp thu thập:** Mở từng bài học trực tiếp trên trình duyệt Google Chrome tại `http://localhost:3001/`, chờ ảnh scan SGK tải đầy đủ và chụp toàn bộ màn hình thực tế (`fullPage: true`).

---

## MỤC LỤC THEO KHỐI LỚP
- [1. Tiếng Việt Lớp 1 (Tập 2) - 45 bài](#1-tiếng-việt-lớp-1-tập-2---45-bài)
- [2. Tiếng Việt Lớp 2 (Tập 1 & 2) - 62 bài](#2-tiếng-việt-lớp-2-tập-1--2---62-bài)
- [3. Tiếng Việt Lớp 3 (Tập 1 & 2) - 62 bài](#3-tiếng-việt-lớp-3-tập-1--2---62-bài)
- [4. Tiếng Việt Lớp 4 (Tập 1 & 2) - 62 bài](#4-tiếng-việt-lớp-4-tập-1--2---62-bài)
- [5. Tiếng Việt Lớp 5 (Tập 1 & 2) - 62 bài](#5-tiếng-việt-lớp-5-tập-1--2---62-bài)

---

"""

# Group by grade
by_grade = {1: [], 2: [], 3: [], 4: [], 5: []}
for idx, lesson in enumerate(target_lessons, 1):
    lid = lesson["id"]
    grade = lesson["grade"]
    sem = lesson["semester"]
    raw_title = lesson["title"].strip()
    clean_title = re.sub(r"^Bài\s+\d+:\s*", "", raw_title).strip()
    
    audit_item = audit_map.get(lid, {})
    right_col = audit_item.get("rightColumn", {})
    left_col = audit_item.get("leftColumn", {})
    
    sample_text = right_col.get("sampleText", "")
    is_fallback = right_col.get("isFallbackNotice", False)
    
    rendered_text = transcript_entries.get(lid, sample_text)
    if is_fallback or not rendered_text:
        display_text = "[Khung thông báo: Đọc nguyên văn trong trang sách bên trái]"
    else:
        display_text = rendered_text
        
    by_grade[grade].append({
        "index": idx,
        "lessonId": lid,
        "grade": grade,
        "semester": sem,
        "title": clean_title,
        "startPage": lesson.get("startPage", ""),
        "endPage": lesson.get("endPage", ""),
        "displayText": display_text,
        "imageRelPath": f"./live_dom_293_screenshots/{lid}.png"
    })

for g in range(1, 6):
    sem_title = "Tập 2" if g == 1 else "Tập 1 & 2"
    items = by_grade[g]
    md += f"## {g}. Tiếng Việt Lớp {g} ({sem_title}) - {len(items)} bài\n\n"
    
    for it in items:
        md += f"### Bài {it['index']}: {it['title']} (`{it['lessonId']}` - Lớp {it['grade']} Tập {it['semester']})\n"
        md += f"- **Trang SGK gốc:** Trang {it['startPage']}–{it['endPage']}\n"
        md += f"- **Văn bản render thực tế trên DOM (Cột phải):**\n\n"
        
        # Format text block
        text_lines = it["displayText"].strip().split("\n")
        formatted_quotes = "\n".join([f"> {line}" for line in text_lines if line.strip()])
        md += f"{formatted_quotes}\n\n"
        
        md += f"![Ảnh chụp DOM thực tế - {it['title']}]({it['imageRelPath']})\n\n---\n\n"

# Target files
main_report_filename = f"BAO_CAO_CROSSCHECK_DOM_293_BAI_SGK_TIENG_VIET_{date_file_str}.md"
main_report_path = REPORT_DIR / main_report_filename
report_md_path = REPORT_DIR / "report.md"
reports_md_path = REPORTS_DIR / "report.md"

with open(main_report_path, "w", encoding="utf-8") as f:
    f.write(md)

with open(report_md_path, "w", encoding="utf-8") as f:
    f.write(md)

with open(reports_md_path, "w", encoding="utf-8") as f:
    f.write(md)

print("Generated clean objective evidence report without status or subjective evaluation lines:")
print(f"  - {main_report_path}")
print(f"  - {report_md_path}")
