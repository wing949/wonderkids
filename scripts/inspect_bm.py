import json
with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    bm = json.load(f)
print("Type of bm:", type(bm))
if isinstance(bm, list):
    print("First item id:", bm[0].get('bookId') or bm[0].get('id'))
    print("First item keys:", list(bm[0].keys()))
