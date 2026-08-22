import os
from pathlib import Path

# Search in tmp_pages/g3_t1 for page 11, 12, 13
p = Path("tmp_pages") / "g3_t1"
files = sorted(os.listdir(p))
for f in files:
    if f.startswith("p11_") or f.startswith("p12_") or f.startswith("p13_") or f.startswith("p14_") or f.startswith("p15_") or f.startswith("p16_") or f.startswith("p17_") or f.startswith("p18_") or f.startswith("p19_"):
        print(f)
