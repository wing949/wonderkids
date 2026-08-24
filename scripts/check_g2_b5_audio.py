import os
from pathlib import Path

curriculum_audio = Path("public/audio/curriculum")
for p in curriculum_audio.glob("*g2*b5*"):
    print(p, p.stat().st_size)

manifest_file = Path("src/data/curriculum/vietnamese/audioManifest.generated.json")
if manifest_file.exists():
    import json
    with open(manifest_file, "r", encoding="utf-8") as f:
        manifest = json.load(f)
    print("Manifest entry for tv-g2-b5:", manifest.get("tv-g2-b5"))
    print("Manifest entry for tv-g2-t1-b5:", manifest.get("tv-g2-t1-b5"))
