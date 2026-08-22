import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

# Read sgkTranscripts.ts
with open('src/data/curriculum/vietnamese/sgkTranscripts.ts', 'r', encoding='utf-8') as f:
    sgk_code = f.read()

verified_ids = re.findall(r"'([a-z0-9-]+)':\s*\{", sgk_code)
print(f"Verified lessons in sgkTranscripts.ts: {len(verified_ids)}")

# Read officialCatalog.ts
with open('src/data/curriculum/vietnamese/officialCatalog.ts', 'r', encoding='utf-8') as f:
    cat_code = f.read()

# Let's inspect by grade
for g in range(1, 6):
    for s in [1, 2]:
        var_name = f"GRADE_{g}_T{s}"
        m = re.search(rf"const {var_name}: CatalogRow\[\] = \[(.*?)\];", cat_code, re.DOTALL)
        if m:
            items = re.findall(r"\['([^']+)',\s*(\d+)\]", m.group(1))
            print(f"Grade {g} T{s}: {len(items)} lessons")
