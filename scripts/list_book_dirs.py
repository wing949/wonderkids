import os
from pathlib import Path

p = Path("tmp_pages")
dirs = [d for d in os.listdir(p) if (p / d).is_dir()]
print("Available book page directories in tmp_pages:")
for d in sorted(dirs):
    count = len(os.listdir(p / d))
    print(f"  {d}: {count} pages")
