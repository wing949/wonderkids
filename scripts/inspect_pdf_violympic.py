# -*- coding: utf-8 -*-
import sys
import json
from pathlib import Path
import pypdf

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")

pdf_path = Path(r"refer/violympic-toan Lớp 2.pdf")
reader = pypdf.PdfReader(str(pdf_path))

print(f"Total pages: {len(reader.pages)}")

extracted = []
for i, page in enumerate(reader.pages):
    text = page.extract_text() or ""
    extracted.append({
        "page": i + 1,
        "text": text
    })

with open("scripts/violympic_extracted_text.json", "w", encoding="utf-8") as f:
    json.dump(extracted, f, ensure_ascii=False, indent=2)

with open("scripts/violympic_extracted_text.txt", "w", encoding="utf-8") as f:
    for item in extracted:
        f.write(f"\n==================== PAGE {item['page']} ====================\n")
        f.write(item["text"])

print("Successfully extracted 26 pages to scripts/violympic_extracted_text.txt and .json")
