import json
import re

# Load GOLD STANDARDS from build_100_percent_authentic_transcripts
from build_100_percent_authentic_transcripts import GOLD_STANDARDS

# Also add both aliases to GOLD_STANDARDS
aliases = {
    "tv-g2-t1-b27": GOLD_STANDARDS.get("tv-g2-b27"),
    "tv-g3-t1-b17": GOLD_STANDARDS.get("tv-g3-b17"),
    "tv-g3-t1-b16": GOLD_STANDARDS.get("tv-g3-b16"),
    "tv-g3-t1-b13": GOLD_STANDARDS.get("tv-g3-b13"),
    "tv-g3-t1-b10": GOLD_STANDARDS.get("tv-g3-b10"),
    "tv-g3-t1-b9": GOLD_STANDARDS.get("tv-g3-b9"),
    "tv-g3-t1-b8": GOLD_STANDARDS.get("tv-g3-b8"),
    "tv-g3-t1-b7": GOLD_STANDARDS.get("tv-g3-b7"),
    "tv-g3-t1-b6": GOLD_STANDARDS.get("tv-g3-b6"),
    "tv-g3-t1-b5": GOLD_STANDARDS.get("tv-g3-b5"),
    "tv-g3-t1-b4": GOLD_STANDARDS.get("tv-g3-b4"),
    "tv-g3-t1-b3": GOLD_STANDARDS.get("tv-g3-b3"),
    "tv-g3-t1-b2": GOLD_STANDARDS.get("tv-g3-b2"),
    "tv-g3-t1-b1": GOLD_STANDARDS.get("tv-g3-b1"),
}

for k, v in aliases.items():
    if v:
        GOLD_STANDARDS[k] = v

print(f"Total GOLD_STANDARDS with aliases: {len(GOLD_STANDARDS)}")
