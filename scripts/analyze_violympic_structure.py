import json
import re

with open("scripts/violympic_extracted_text.json", "r", encoding="utf-8") as f:
    pages = json.load(f)

full_text = "\n".join([p["text"] for p in pages])

# Find all rounds
rounds = re.findall(r"ĐỀ THI VIOLYMPIC TOÁN 2\s*:\s*Vòng\s*(\d+)", full_text, re.IGNORECASE)
print("Detected Rounds:", rounds)

# Let's see unique sections
sections = re.findall(r"(Bài \d+:.*?)(?=(Bài \d+:|ĐỀ THI|\Z))", full_text, re.DOTALL)
print(f"Total sections detected: {len(sections)}")

for i, (sec, _) in enumerate(sections[:10]):
    first_line = sec.strip().split("\n")[0]
    print(f"Section {i+1}: {first_line[:80]}")
