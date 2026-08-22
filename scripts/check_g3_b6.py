import json
with open('src/data/curriculum/vietnamese/lessonPageMappings.generated.json', 'r', encoding='utf-8') as f:
    m = json.load(f)
print("tv-g3-b6 mapping:", m.get('tv-g3-b6'))
