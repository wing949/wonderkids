import json

with open("src/data/curriculum/vietnamese/lessonPageMappings.generated.json", "r", encoding="utf-8") as f:
    mappings = json.load(f)

mappings["tv-g2-b27"] = {
    "lessonId": "tv-g2-b27",
    "bookId": "tv-g2-t1",
    "sourcePages": [116, 117, 118],
    "matchedTitle": "Bài 27: Mẹ",
    "matchedText": "Mẹ",
    "confidence": 1,
    "status": "visually_reviewed"
}

mappings["tv-g3-b16"] = {
    "lessonId": "tv-g3-b16",
    "bookId": "tv-g3-t1",
    "sourcePages": [70, 71, 72, 73],
    "matchedTitle": "Bài 16: Ngày em vào Đội",
    "matchedText": "Ngày em vào Đội",
    "confidence": 1,
    "status": "visually_reviewed"
}

mappings["tv-g3-b17"] = {
    "lessonId": "tv-g3-b17",
    "bookId": "tv-g3-t1",
    "sourcePages": [82, 83, 84, 85],
    "matchedTitle": "Bài 17: Ngưỡng cửa",
    "matchedText": "Ngưỡng cửa",
    "confidence": 1,
    "status": "visually_reviewed"
}

with open("src/data/curriculum/vietnamese/lessonPageMappings.generated.json", "w", encoding="utf-8") as f:
    json.dump(mappings, f, ensure_ascii=False, indent=2)

print("Updated mappings for tv-g2-b27, tv-g3-b16, tv-g3-b17.")
