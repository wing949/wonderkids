#!/usr/bin/env python3
"""Build the canonical Vietnamese reading transcripts used by the lesson DOM.

The 83 Tiếng Việt 1 tập 1 records are preserved. The remaining 293 records
come from clean transcriptions and twelve page-image-reviewed overrides.
"""

from __future__ import annotations

import json
import re
import unicodedata
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CATALOG_PATH = ROOT / "scripts" / "all_376_lessons_catalog.json"
REFERENCE_PATH = ROOT / ".cache" / "sgk" / "vietnamese-loigiaihay-readings.json"
OVERRIDES_PATH = ROOT / "scripts" / "clean_sgk_manual_overrides.json"
OLD_TRANSCRIPTS_PATH = ROOT / "scripts" / "all_transcripts_for_audio.json"
MANIFEST_PATH = ROOT / "src" / "data" / "curriculum" / "vietnamese" / "bookManifests.generated.json"
OUTPUT_PATH = ROOT / "src" / "data" / "curriculum" / "vietnamese" / "sgkReadingTranscripts.generated.json"

AUTHOR_OVERRIDES = {
    "tv-g2-t1-b29": "Đoàn Thị Lam Luyến",
    "tv-g4-b4": "Du-nan biên soạn, Hòa Vân dịch",
    "tv-g4-t1-b13": "Theo Lý Lan",
    "tv-g4-t1-b23": "Theo Bét-tô-ven – Nhà soạn nhạc cổ điển vĩ đại thế giới",
}


def load_json(path: Path):
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def normalized(value: str) -> str:
    decomposed = unicodedata.normalize("NFD", value.casefold())
    plain = "".join(char for char in decomposed if unicodedata.category(char) != "Mn")
    return re.sub(r"[^a-z0-9]+", " ", plain).strip()


def clean_title(value: str) -> str:
    title = re.sub(r"^\s*Bài\s+\d+\s*:\s*", "", value, flags=re.IGNORECASE).strip()
    corrections = {
        "Một trời xanh của tôi": "Mặt trời xanh của tôi",
        "Thần lằn xanh và tắc kè": "Thằn lằn xanh và tắc kè",
        "Thả điều": "Thả diều",
        "Hoa mi hót": "Họa mi hót",
        "HOẠ MI HÓT": "Họa mi hót",
        "Hang Sơn Đoòng - những điều kì thú": "Hang Sơn Đoòng – những điều kì thú",
        "HANG SƠN ĐOÒNG – NHỮNG ĐIỀU KÌ THÚ": "Hang Sơn Đoòng – những điều kì thú",
        "Đàn trưng - tiếng ca đại ngàn": "Đàn t’rưng – tiếng ca đại ngàn",
        "ĐÀN T’RƯNG - TIẾNG CA ĐẠI NGÀN": "Đàn t’rưng – tiếng ca đại ngàn",
    }
    return corrections.get(title, title)


def clean_content(content: list[str], title: str, author: str) -> list[str]:
    stop_markers = (
        "tu ngu",
        "loi giai chi tiet",
        "tra loi cau hoi",
        "luyen tu va cau",
        "noi va nghe",
        "doc mo rong",
        "van dung",
    )
    ignored = {"hien thi van ban", "bai doc", "doc"}
    cleaned: list[str] = []
    character_corrections = {
        "bė": "bè",
        "Ða-nuýp": "Đa-nuýp",
        "Sông Ðà": "Sông Đà",
    }

    for raw in content:
        paragraph = raw.replace("\r", "").strip()
        for incorrect, correct in character_corrections.items():
            paragraph = paragraph.replace(incorrect, correct)
        paragraph = re.sub(r"(?m)^-\s+", "– ", paragraph)
        if not paragraph:
            continue
        marker = normalized(paragraph.splitlines()[0])
        if any(marker == item or marker.startswith(f"{item} ") for item in stop_markers):
            break
        if marker in ignored:
            continue
        cleaned.append(paragraph)

    while cleaned and normalized(cleaned[0]) == normalized(title):
        cleaned.pop(0)
    while cleaned and author and normalized(cleaned[-1]) == normalized(author):
        cleaned.pop()

    return cleaned


def infer_genre(content: list[str], preferred: str | None) -> str:
    if preferred in {"poem", "story", "prose"}:
        return preferred
    lines = [line.strip() for paragraph in content for line in paragraph.splitlines() if line.strip()]
    if len(lines) >= 8 and sum(len(line) <= 60 for line in lines) / len(lines) >= 0.75:
        return "poem"
    if any(token in " ".join(content) for token in ("Ngày xưa", "Một hôm", "câu chuyện")):
        return "story"
    return "prose"


def infer_source_pages(lesson: dict, record: dict, override: dict | None) -> list[int]:
    if override and override.get("sourcePages"):
        return override["sourcePages"]

    url = record.get("sourceUrl", "")
    match = re.search(r"trang-(\d+)(?:-(\d+))?", url)
    if match:
        start = int(match.group(1))
        end = int(match.group(2) or start)
        if start == lesson["startPage"] and 0 <= end - start <= 3:
            return list(range(start, end + 1))

    start = lesson["startPage"]
    text_length = len("\n".join(record.get("content", [])))
    page_count = 1 if text_length <= 1000 else 2 if text_length <= 2600 else 3
    end = min(start + page_count - 1, lesson["endPage"])
    return list(range(start, end + 1))


def main() -> None:
    catalog = load_json(CATALOG_PATH)
    references = load_json(REFERENCE_PATH)["records"]
    overrides = load_json(OVERRIDES_PATH)
    old_transcripts = load_json(OLD_TRANSCRIPTS_PATH)
    manifests = {manifest["id"]: manifest for manifest in load_json(MANIFEST_PATH)}
    output: dict[str, dict] = {}
    target_count = 0

    for lesson in catalog:
        lesson_id = lesson["id"]
        is_preserved = lesson["grade"] == 1 and lesson["semester"] == 1
        if is_preserved:
            old = old_transcripts.get(lesson_id)
            if old is None:
                raise ValueError(f"Missing preserved transcript: {lesson_id}")
            output[lesson_id] = old
            continue

        target_count += 1
        override = overrides.get(lesson_id)
        record = override or references.get(lesson_id)
        if record is None:
            raise ValueError(f"No clean source for {lesson_id}: {lesson['title']}")

        title = clean_title(record.get("title") or lesson["title"])
        expected_title = clean_title(lesson["title"])
        if normalized(title) != normalized(expected_title):
            raise ValueError(f"Title mismatch for {lesson_id}: {title!r} != {expected_title!r}")
        title = expected_title

        author = AUTHOR_OVERRIDES.get(lesson_id, (record.get("author") or "").strip())
        content = clean_content(record.get("content", []), title, author)
        if not content or len("\n".join(content)) < 20:
            raise ValueError(f"Empty or too-short passage for {lesson_id}")

        book_id = f"tv-g{lesson['grade']}-t{lesson['semester']}"
        pages = infer_source_pages(lesson, record, override)
        manifest_pages = {page["readerIndex"]: page for page in manifests[book_id]["pages"]}
        missing_pages = [page for page in pages if page not in manifest_pages]
        if missing_pages:
            raise ValueError(f"Missing manifest pages for {lesson_id}: {missing_pages}")
        source_hash = manifest_pages[pages[0]]["sourceHash"]
        genre = infer_genre(content, record.get("genre"))
        narration = " ".join([title, *content]).replace("\n", " ").strip()

        passage = {
            "title": title,
            "author": author,
            "genre": genre,
            "content": content,
            "contentOrigin": "sgk_reference",
            "verificationStatus": "verified",
            "sourcePages": pages,
            "sourceHash": source_hash,
            "audioNarration": narration,
        }
        output[lesson_id] = {
            "lessonId": lesson_id,
            "bookId": book_id,
            "sourcePages": pages,
            "sourceHash": source_hash,
            "readingPassage": passage,
        }

    if len(output) != 376 or target_count != 293:
        raise ValueError(f"Unexpected counts: all={len(output)}, target={target_count}")

    with OUTPUT_PATH.open("w", encoding="utf-8", newline="\n") as handle:
        json.dump(output, handle, ensure_ascii=False, indent=2)
        handle.write("\n")

    print(f"Built {len(output)} transcripts ({target_count} reviewed target lessons).")


if __name__ == "__main__":
    main()
