import json
with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    bm = json.load(f)
print("Page 0 of book 0:", bm[0]['pages'][0])
