import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

for g in range(1, 6):
    with open(f'src/data/curriculum/english/grade{g}.ts', 'r', encoding='utf-8') as f:
        txt = f.read()
    units = re.findall(r'unit:\s*[\'"]([^\'"]+)[\'"]', txt)
    titles = re.findall(r'title:\s*[\'"]([^\'"]+)[\'"]', txt)
    print(f"\nGrade {g} English: Total {len(titles)} lessons")
    unique_units = list(dict.fromkeys(units))
    print(f"Unique units count: {len(unique_units)}")
    for u in unique_units:
        print(f"   {u}")
