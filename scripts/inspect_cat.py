import json
with open('scripts/all_376_lessons_catalog.json', 'r', encoding='utf-8') as f:
    cat = json.load(f)
print("Keys of first item:", list(cat[0].keys()))
print("First item:", cat[0])
