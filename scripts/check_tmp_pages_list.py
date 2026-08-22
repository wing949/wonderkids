import os
from pathlib import Path

# Inspect page files in g2_t1 and g3_t1
for grade_dir in ["g2_t1", "g3_t1", "g5_t1"]:
    p = Path("tmp_pages") / grade_dir
    if p.exists():
        files = sorted(os.listdir(p))
        print(f"{grade_dir}: {len(files)} page images.")
        # Print sample filenames
        for f in files[:5]:
            print(f"  {f}")
