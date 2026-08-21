import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

# ================= GRADE 1 =================
# Units 1-4: Theme 1
# Units 5-8: Theme 2
# Units 9-12: Theme 3
# Units 13-16: Theme 4
with open('src/data/curriculum/english/grade1.ts', 'r', encoding='utf-8') as f:
    c1 = f.read()

def repl_g1(m):
    num = int(m.group(1))
    if num <= 4:
        theme = "Tập 1 - Chủ đề 1: My Friends & Family"
    elif num <= 8:
        theme = "Tập 1 - Chủ đề 2: Food, Classroom & Park"
    elif num <= 12:
        theme = "Tập 2 - Chủ đề 3: Animals, Travel & Toys"
    else:
        theme = "Tập 2 - Chủ đề 4: School, Kitchen & Nature"
    return f"unit: '{theme}',"

c1_new = re.sub(r"unit:\s*'Tập \d+ - Unit \d+: [^']+',", lambda m: repl_g1(re.search(r'Unit (\d+)', m.group(0))), c1)

with open('src/data/curriculum/english/grade1.ts', 'w', encoding='utf-8') as f:
    f.write(c1_new)
print("Updated Grade 1 English units")

# ================= GRADE 2 =================
with open('src/data/curriculum/english/grade2.ts', 'r', encoding='utf-8') as f:
    c2 = f.read()

def repl_g2(m):
    num = int(m.group(1))
    if num <= 4:
        theme = "Tập 1 - Chủ đề 1: Party, Seaside & Countryside"
    elif num <= 8:
        theme = "Tập 1 - Chủ đề 2: Classroom, Farm & Village"
    elif num <= 12:
        theme = "Tập 2 - Chủ đề 3: Grocery, Zoo, Cafe & Playground"
    else:
        theme = "Tập 2 - Chủ đề 4: Maths, Toys, Clothes & Sports"
    return f"unit: '{theme}',"

c2_new = re.sub(r"unit:\s*'Tập \d+ - Unit \d+: [^']+',", lambda m: repl_g2(re.search(r'Unit (\d+)', m.group(0))), c2)

with open('src/data/curriculum/english/grade2.ts', 'w', encoding='utf-8') as f:
    f.write(c2_new)
print("Updated Grade 2 English units")

# ================= GRADE 3 =================
with open('src/data/curriculum/english/grade3.ts', 'r', encoding='utf-8') as f:
    c3 = f.read()

def repl_g3(m):
    num = int(m.group(1))
    if num <= 5:
        theme = "Tập 1 - Chủ đề 1: Me and My Friends"
    elif num <= 10:
        theme = "Tập 1 - Chủ đề 2: Me and My School"
    elif num <= 15:
        theme = "Tập 2 - Chủ đề 3: Me and My Family"
    else:
        theme = "Tập 2 - Chủ đề 4: Me and the World Around"
    return f"unit: '{theme}',"

c3_new = re.sub(r"unit:\s*'Tập \d+ - Unit \d+: [^']+',", lambda m: repl_g3(re.search(r'Unit (\d+)', m.group(0))), c3)

with open('src/data/curriculum/english/grade3.ts', 'w', encoding='utf-8') as f:
    f.write(c3_new)
print("Updated Grade 3 English units")

# ================= GRADE 4 =================
with open('src/data/curriculum/english/grade4.ts', 'r', encoding='utf-8') as f:
    c4 = f.read()

def repl_g4(m):
    num = int(m.group(1))
    if num <= 5:
        theme = "Tập 1 - Chủ đề 1: Me and My Friends"
    elif num <= 10:
        theme = "Tập 1 - Chủ đề 2: Me and My School"
    elif num <= 15:
        theme = "Tập 2 - Chủ đề 3: Me and My Family"
    else:
        theme = "Tập 2 - Chủ đề 4: Me and the World Around"
    return f"unit: '{theme}',"

c4_new = re.sub(r"unit:\s*'Tập \d+ - Unit \d+: [^']+',", lambda m: repl_g4(re.search(r'Unit (\d+)', m.group(0))), c4)

with open('src/data/curriculum/english/grade4.ts', 'w', encoding='utf-8') as f:
    f.write(c4_new)
print("Updated Grade 4 English units")

# ================= GRADE 5 =================
with open('src/data/curriculum/english/grade5.ts', 'r', encoding='utf-8') as f:
    c5 = f.read()

def repl_g5(m):
    num = int(m.group(1))
    if num <= 5:
        theme = "Tập 1 - Chủ đề 1: All About Me & Friends"
    elif num <= 10:
        theme = "Tập 1 - Chủ đề 2: School Life and Trips"
    elif num <= 15:
        theme = "Tập 2 - Chủ đề 3: Family Life, Health & Stories"
    else:
        theme = "Tập 2 - Chủ đề 4: Our City, Weather & Nature"
    return f"unit: '{theme}',"

c5_new = re.sub(r"unit:\s*'Tập \d+ - Unit \d+: [^']+',", lambda m: repl_g5(re.search(r'Unit (\d+)', m.group(0))), c5)

with open('src/data/curriculum/english/grade5.ts', 'w', encoding='utf-8') as f:
    f.write(c5_new)
print("Updated Grade 5 English units")
