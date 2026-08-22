# -*- coding: utf-8 -*-
import json
import sys
import os

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

transcript_path = r'C:\Users\TVCHUONG\.gemini\antigravity\brain\5459c139-ea01-454d-8f01-8b2b7e516ce3\.system_generated\logs\transcript.jsonl'
with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        data = json.loads(line)
        step = data.get('step_index')
        content = str(data.get('content', ''))
        if step and 4705 <= step <= 4740:
            print(f"=== Step {step} ({data.get('type')}) ===")
            print(content[:1000])
            print()
