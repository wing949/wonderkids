import sys
import json

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

with open("scripts/ocr_verbatim_g3_t1.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for item in data:
    if "Lời giải toán đặc biệt" in item.get("title", "") or "Bài tập làm văn" in item.get("title", ""):
        print(f"\n==========================================")
        print("LESSON:", item["title"])
        for p in item["pages"][:2]:
            print(f"--- PAGE {p.get('page')} ---")
            print(p["ocrText"])
