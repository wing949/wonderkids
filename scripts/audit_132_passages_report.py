# -*- coding: utf-8 -*-
import json
import re
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

WORKSPACE_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"

with open(os.path.join(WORKSPACE_DIR, 'src', 'data', 'curriculum', 'vietnamese', 'readingPassages.ts'), 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'export const VIETNAMESE_READING_PASSAGES:\s*Record<string,\s*ReadingLessonBundle>\s*=\s*(\{[\s\S]*?\n\};)', text)
data = json.loads(m.group(1).rstrip(';'))

grades = {
    'g1': {'name': 'Lớp 1', 'items': []},
    'g2': {'name': 'Lớp 2', 'items': []},
    'g3': {'name': 'Lớp 3', 'items': []},
    'g4': {'name': 'Lớp 4', 'items': []},
    'g5': {'name': 'Lớp 5', 'items': []}
}

for k, v in data.items():
    g = k.split('-')[1]
    passage = v['passage']
    title = passage['title']
    author = passage.get('author', 'Không rõ')
    content = passage.get('content', [])
    first_sentence = content[0][:80] if content else ''
    vocab = [item['word'] for item in passage.get('vocabularyNotes', [])]
    source_detail = v.get('sourceDetail', '')
    
    # Check compliance type
    has_custom_slogan = any('GDPT 2018' in p or 'bồi dưỡng tâm hồn' in p or 'rèn luyện' in p for p in content)
    is_paraphrased = has_custom_slogan or author in ['Không rõ', 'Sách Giáo Khoa GDPT 2018', 'WonderKids']
    
    status = "⚠️ Tự biên soạn / Tóm tắt" if is_paraphrased else "📖 Trích dẫn tác phẩm chuẩn"
    
    grades[g]['items'].append({
        'id': k,
        'title': title,
        'author': author,
        'sourceDetail': source_detail,
        'vocab': vocab,
        'status': status,
        'preview': first_sentence,
        'is_paraphrased': is_paraphrased
    })

print(f"Tổng số bài đọc trong hệ thống: {len(data)}")
for g, info in grades.items():
    paraphrased_count = sum(1 for x in info['items'] if x['is_paraphrased'])
    print(f"  • {info['name']}: {len(info['items'])} bài (Đang bị tự biên soạn/tóm tắt: {paraphrased_count}/{len(info['items'])})")
