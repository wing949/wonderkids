import sys
import json

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

with open("scripts/ocr_verbatim_g3_t1.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for item in data:
    if "Cuộc họp của chữ viết" in item.get("title", ""):
        print("Found:", item["title"])
        for p in item["pages"]:
            print(f"\n=== PAGE {p.get('page')} ===")
            print(p["ocrText"])
