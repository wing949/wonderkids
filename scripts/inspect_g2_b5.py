import sys
import json

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")

with open("scripts/target_293_structured_reading_passages.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for item in data:
    if item.get("grade") == 2 and item.get("semester") == 1 and item.get("lessonId") in ["tv-g2-b5", "tv-g2-t1-b5"]:
        print("LessonId:", item["lessonId"])
        print("Title:", item["title"])
        print("Text:\n" + item.get("text", ""))
        print("ProsodyPlan:", json.dumps(item.get("prosodyPlan"), ensure_ascii=False, indent=2))
