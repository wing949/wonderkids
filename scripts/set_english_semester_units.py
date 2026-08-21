import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

for g in range(1, 6):
    file_path = f'src/data/curriculum/english/grade{g}.ts'
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split by topic object blocks
    # Replace unit based on semester in that block
    lines = content.split('\n')
    new_lines = []
    current_sem = 1
    for line in lines:
        if 'semester: 1' in line:
            current_sem = 1
        elif 'semester: 2' in line:
            current_sem = 2
        
        if line.strip().startswith('unit:'):
            if current_sem == 1:
                new_lines.append("    unit: 'Học kỳ 1 (Tập 1)',")
            else:
                new_lines.append("    unit: 'Học kỳ 2 (Tập 2)',")
        else:
            new_lines.append(line)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_lines))
    print(f"Updated Grade {g} English units to 2 semester sections (Học kỳ 1 & Học kỳ 2)")
