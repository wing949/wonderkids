import json
import re

# Load mappings
with open("src/data/curriculum/vietnamese/lessonPageMappings.generated.json", "r", encoding="utf-8") as f:
    mappings = json.load(f)

# Load catalog
with open("scripts/all_376_lessons_catalog.json", "r", encoding="utf-8") as f:
    catalog = json.load(f)

for item in catalog:
    lid = item["id"]
    # If G2 T1 Lesson 27 -> Mẹ, startPage 116
    if lid == "tv-g2-b27":
        item["startPage"] = 116
        item["endPage"] = 118
    elif lid == "tv-g3-b17":
        item["startPage"] = 82
        item["endPage"] = 85
    elif lid in mappings:
        m = mappings[lid]
        if m.get("sourcePages"):
            item["startPage"] = m["sourcePages"][0]
            item["endPage"] = m["sourcePages"][-1]

with open("scripts/all_376_lessons_catalog.json", "w", encoding="utf-8") as f:
    json.dump(catalog, f, ensure_ascii=False, indent=2)

print("Synchronized all_376_lessons_catalog.json start/end pages.")
