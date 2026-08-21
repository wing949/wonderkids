# -*- coding: utf-8 -*-
import os
import re
import sys
import json

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"

# Let's inspect all files in src/data/
for root, dirs, files in os.walk(os.path.join(WORKSPACE, 'src', 'data')):
    for file in files:
        if file.endswith('.ts') or file.endswith('.json'):
            fpath = os.path.join(root, file)
            with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            # count id: "..."
            ids = set(re.findall(r'["\']?id["\']?\s*:\s*["\']([a-zA-Z0-9_-]+)["\']', content))
            if len(ids) > 5:
                print(f"File: {os.path.relpath(fpath, WORKSPACE)} -> {len(ids)} unique ids")
