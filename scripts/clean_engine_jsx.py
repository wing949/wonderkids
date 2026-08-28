# -*- coding: utf-8 -*-
with open(r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning\src\components\exercise\InteractiveExerciseEngine.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()

# Look for the duplicated block around line 1528
clean_lines = []
skip = False
for i, line in enumerate(lines):
    # Detect the bad line: '                    className="w-full resize-y rounded-2xl border border-emerald-200 bg-white px-3.5 py-2 font-vietnam text-sm text-brand-dark outline-none focus:border-emerald-500"\n'
    if 'className="w-full resize-y rounded-2xl border border-emerald-200 bg-white px-3.5 py-2 font-vietnam text-sm text-brand-dark outline-none focus:border-emerald-500"' in line and i > 1500:
        skip = True
        continue
    if skip:
        if '{/* 2. Audio Listen & Touch Picture Cards */}' in line:
            skip = False
            clean_lines.append('\n')
            clean_lines.append(line)
        continue
    clean_lines.append(line)

with open(r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning\src\components\exercise\InteractiveExerciseEngine.tsx", "w", encoding="utf-8") as f:
    f.writelines(clean_lines)

print("Cleaned InteractiveExerciseEngine.tsx successfully!")
