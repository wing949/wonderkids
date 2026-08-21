import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

app_lessons = {}
for g in range(1, 6):
    with open(f'src/data/curriculum/vietnamese/grade{g}.ts', 'r', encoding='utf-8') as f:
        txt = f.read()
    
    blocks = re.findall(r'\{\s*"id":\s*"(tv-g\d+-b\d+)"([\s\S]*?)\n  \}', txt)
    app_lessons[g] = {1: [], 2: []}
    for tid, bbody in blocks:
        def get_field(name, text):
            m_str = re.search(rf'"{name}":\s*"([^"\\]*(?:\\.[^"\\]*)*)"', text)
            if m_str: return m_str.group(1).replace(r'\"', '"').replace(r'\n', ' ')
            m_num = re.search(rf'"{name}":\s*(\d+)', text)
            if m_num: return int(m_num.group(1))
            return None
        
        sem = get_field('semester', bbody) or 1
        num = get_field('lessonNumber', bbody) or 1
        title = get_field('title', bbody) or ''
        page = get_field('textbookPageRef', bbody) or ''
        unit = get_field('unit', bbody) or ''
        
        app_lessons[g][sem].append({
            'id': tid,
            'num': num,
            'title': title,
            'page': page,
            'unit': unit
        })

print(json.dumps({g: {1: len(app_lessons[g][1]), 2: len(app_lessons[g][2])} for g in range(1, 6)}, indent=2))
