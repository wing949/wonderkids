# -*- coding: utf-8 -*-
import json
import sys
import os

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

transcript_full = r'C:\Users\TVCHUONG\.gemini\antigravity\brain\5459c139-ea01-454d-8f01-8b2b7e516ce3\.system_generated\logs\transcript_full.jsonl'
with open(transcript_full, 'r', encoding='utf-8') as f:
    for line in f:
        data = json.loads(line)
        if data.get('step_index') == 4722:
            tool_calls = data.get('tool_calls', [])
            for tc in tool_calls:
                args = tc.get('args', {})
                code = args.get('CodeContent', '')
                if code:
                    out_path = r'c:\Users\TVCHUONG\Desktop\AI\06_eLearning\docs\plans\plan_game_hoa_cot_phai_tieng_viet_1_tap_1.md'
                    os.makedirs(os.path.dirname(out_path), exist_ok=True)
                    with open(out_path, 'w', encoding='utf-8') as out_f:
                        out_f.write(code)
                    print(f"✅ Đã trích xuất và lưu Kế hoạch Game Hóa Tiếng Việt 1 vào {out_path}")
                    print(f"Tổng số kí tự: {len(code)}")
