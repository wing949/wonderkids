import sys
import json

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")

with open("scripts/target_293_structured_reading_passages.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for item in data:
    if "xinh" in item.get("title", "").lower() or "xinh" in item.get("rawTranscript", "").lower() or item.get("lessonId") in ["tv-g2-b5", "tv-g2-t1-b5"]:
        print("Found:", item["lessonId"], item["title"])
        print("Content:", item.get("readingPassage", {}).get("content"))
        print("Text:", repr(item.get("text")))
        print("Genre:", item.get("readingPassage", {}).get("genre"))
