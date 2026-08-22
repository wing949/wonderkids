import sys
import json

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

with open("scripts/ocr_verbatim_g3_t1.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for item in data:
    if item["lessonId"] == "tv-g3-b1" or "Ngày gặp lại" in item.get("title", ""):
        print("Found lesson 1:", item["title"])
        for p in item["pages"]:
            print(f"--- PAGE {p.get('page')} ({p.get('image')}) ---")
            print(p["ocrText"])
