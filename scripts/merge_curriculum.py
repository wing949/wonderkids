# -*- coding: utf-8 -*-
import json
import re
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

WORKSPACE_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"

# Load existing readingPassages.ts
passages_file = os.path.join(WORKSPACE_DIR, 'src', 'data', 'curriculum', 'vietnamese', 'readingPassages.ts')
with open(passages_file, 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'export const VIETNAMESE_READING_PASSAGES:\s*Record<string,\s*ReadingLessonBundle>\s*=\s*(\{[\s\S]*?\n\};)', text)
full_data = json.loads(m.group(1).rstrip(';'))

# Import G1_DATA
from data_grade1 import G1_DATA
from data_grade2 import G2_DATA

# Apply Grade 1 and Grade 2
for k, v in G1_DATA.items():
    full_data[k] = {
        "passage": {
            "title": v["title"],
            "author": v["author"],
            "genre": v["genre"],
            "content": v["content"],
            "audioNarration": f"{v['title']}. " + " ".join(v["content"]),
            "vocabularyNotes": v["vocabularyNotes"]
        },
        "sourceType": v.get("sourceType", "sgk_official"),
        "sourceBook": v.get("sourceBook"),
        "sourceDetail": v.get("sourceDetail"),
        "pedagogicalObjective": v.get("pedagogicalObjective"),
        "questions": v["questions"]
    }

for k, v in G2_DATA.items():
    full_data[k] = {
        "passage": {
            "title": v["title"],
            "author": v["author"],
            "genre": v["genre"],
            "content": v["content"],
            "audioNarration": f"{v['title']}. " + " ".join(v["content"]),
            "vocabularyNotes": v["vocabularyNotes"]
        },
        "sourceType": v.get("sourceType", "sgk_official"),
        "sourceBook": v.get("sourceBook"),
        "sourceDetail": v.get("sourceDetail"),
        "pedagogicalObjective": v.get("pedagogicalObjective"),
        "questions": v["questions"]
    }

# Save updated readingPassages.ts
with open(passages_file, 'w', encoding='utf-8') as f:
    f.write(f"import {{ ContentProvenance, ReadingPassage, Question }} from '../../../types';\n\nexport interface ReadingLessonBundle {{\n  passage: ReadingPassage;\n  sourceType?: 'sgk_official' | 'pedagogical_supplement';\n  sourceBook?: string;\n  sourceDetail?: string;\n  provenance?: ContentProvenance;\n  pedagogicalObjective?: string;\n  questions: Question[];\n}}\n\nexport const VIETNAMESE_READING_PASSAGES: Record<string, ReadingLessonBundle> = {json.dumps(full_data, ensure_ascii=False, indent=2)};\n")

print(f"✅ Đã cập nhật thành công readingPassages.ts! Tổng bài: {len(full_data)}")
