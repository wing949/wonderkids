import json
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    manifests = json.load(f)

print(f"Book 0 keys: {list(manifests[0].keys())}")
print(f"Book 0 page 0 keys: {list(manifests[0]['pages'][0].keys())}")
print(f"Book 0 page 0 sample: {manifests[0]['pages'][0]}")
