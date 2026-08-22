import os
from pathlib import Path

p = Path("reports/live_dom_293_screenshots")
if p.exists():
    files = list(p.glob("*.png"))
    print(f"Screenshots saved so far: {len(files)} / 293")
    if files:
        print("Sample:", [f.name for f in files[-5:]])
else:
    print("Directory not created yet.")
