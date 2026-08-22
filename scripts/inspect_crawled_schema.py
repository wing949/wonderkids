import json
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('scripts/crawled_sgk.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for grade_k, grade_v in data.items():
    print(f"\n{grade_k}: {type(grade_v)}")
    if isinstance(grade_v, dict):
        for k, v in list(grade_v.items())[:5]:
            print(f"   {k}: {type(v)}")
            if isinstance(v, dict):
                print(f"      keys: {list(v.keys())}")
            elif isinstance(v, list):
                print(f"      len: {len(v)}")
            else:
                print(f"      val: {v}")
