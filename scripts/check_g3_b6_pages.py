import json
with open('src/data/curriculum/vietnamese/lessonPageMappings.generated.json', 'r', encoding='utf-8') as f:
    m = json.load(f)
item = m.get('tv-g3-b6')
print("sourcePages:", item.get('sourcePages'))
