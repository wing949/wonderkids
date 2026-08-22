import json

with open("reports/left_vs_right_293_audit.json", "r", encoding="utf-8") as f:
    data = json.load(f)

print("10 failed lessons in Grade 1 Tap 2:")
for it in data["byGrade"]["1"]["items"]:
    if it["status"].startswith("FAIL"):
        print(f"  - [{it['lessonId']}] {it['title']} ({it['statusDesc']})")
