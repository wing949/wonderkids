import json
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('scripts/crawled_sgk.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for grade_k, grade_v in data.items():
    print(f"\n{grade_k}:")
    for sem_k, sem_v in grade_v.items():
        print(f"   {sem_k}: {len(sem_v)} lessons")
        if sem_v:
            sample = sem_v[0]
            print(f"      sample title: {sample.get('title')}, page: {sample.get('page')}, has_content: {bool(sample.get('content'))}")
