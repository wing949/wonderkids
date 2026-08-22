import json
with open('src/data/curriculum/vietnamese/lessonPageMappings.generated.json', 'r', encoding='utf-8') as f:
    m = json.load(f)
print("tv-g2-b27:", m.get('tv-g2-b27'))
print("tv-g3-b17:", m.get('tv-g3-b17'))
