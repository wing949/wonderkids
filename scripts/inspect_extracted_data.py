import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

for fname in ['scripts/all_passages_detailed_list.json', 'scripts/crawled_sgk.json', 'scripts/parsed_passages_summary.json', 'scripts/audit_classified_lessons.json']:
    if os.path.exists(fname):
        with open(fname, 'r', encoding='utf-8') as f:
            data = json.load(f)
        if isinstance(data, list):
            print(f"{fname}: list of {len(data)} items")
            if data:
                print(f"   sample keys: {list(data[0].keys()) if isinstance(data[0], dict) else type(data[0])}")
        elif isinstance(data, dict):
            print(f"{fname}: dict with {len(data)} keys")
            print(f"   sample keys: {list(data.keys())[:5]}")
