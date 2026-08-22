import json
with open('scripts/6_crosscheck_report.json', 'r', encoding='utf-8') as f:
    rep = json.load(f)

print(f"Layer 1 failed: {len(rep['layer1_failed'])}")
for x in rep['layer1_failed']:
    print("  ", json.dumps(x, ensure_ascii=True))

print(f"\nLayer 3 failed count: {len(rep['layer3_failed'])}")
print("Sample 10 layer 3 errors:")
for x in rep['layer3_failed'][:10]:
    print("  ", json.dumps(x, ensure_ascii=True))
