"""Import clean reading passages from Loigiaihay as a transcription aid.

The official NXB page images remain the source of truth.  This importer only
provides a clean text candidate that can be compared with those images; it must
never mark a lesson verified by itself.
"""

from __future__ import annotations

import json
import re
import sys
import unicodedata
from concurrent.futures import ThreadPoolExecutor, as_completed
from difflib import SequenceMatcher
from pathlib import Path
from urllib.parse import urljoin

import requests
from lxml import html


ROOT = Path(__file__).resolve().parents[1]
CATALOG_PATH = ROOT / "scripts" / "all_376_lessons_catalog.json"
OUTPUT_PATH = ROOT / ".cache" / "sgk" / "vietnamese-loigiaihay-readings.json"
BASE = "https://loigiaihay.com"

CATEGORY_URLS = {
    (1, 2): [f"{BASE}/sgk-tieng-viet-1-ket-noi-tri-thuc-voi-cuoc-song-c1181.html"],
    (2, 1): [f"{BASE}/tieng-viet-2-tap-1-e22482.html"],
    (2, 2): [f"{BASE}/tieng-viet-2-tap-2-e22514.html"],
    (3, 1): [f"{BASE}/tieng-viet-3-ket-noi-tri-thuc-c847.html"],
    (3, 2): [f"{BASE}/tieng-viet-3-ket-noi-tri-thuc-c847.html"],
    (4, 1): [f"{BASE}/tieng-viet-4-tap-1-ket-noi-tri-thuc-e31181.html"],
    (4, 2): [f"{BASE}/tieng-viet-4-tap-2-ket-noi-tri-thuc-e31200.html"],
    (5, 1): [f"{BASE}/tieng-viet-5-ket-noi-tri-thuc-c1786.html"],
    (5, 2): [f"{BASE}/tieng-viet-5-ket-noi-tri-thuc-c1786.html"],
}

SESSION = requests.Session()
SESSION.headers.update({"User-Agent": "WonderKids SGK audit/1.0"})


def compact(value: str) -> str:
    return re.sub(r"\s+", " ", value.replace("\xa0", " ")).strip()


def plain(value: str) -> str:
    value = unicodedata.normalize("NFD", value.casefold())
    value = "".join(ch for ch in value if unicodedata.category(ch) != "Mn")
    value = value.replace("đ", "d")
    return re.sub(r"[^a-z0-9]+", " ", value).strip()


def lesson_title(value: str) -> str:
    return re.sub(r"^\s*Bài\s+\d+\s*:\s*", "", value, flags=re.I).strip()


def fetch(url: str) -> html.HtmlElement:
    response = SESSION.get(url, timeout=35)
    response.raise_for_status()
    return html.fromstring(response.content)


def category_pages(url: str) -> list[str]:
    pages = [url]
    # The large grade-4 indexes are paginated. Other indexes simply return the
    # first page again; duplicate links are removed below.
    pages.extend(f"{url.removesuffix('.html')}/{index}.html" for index in range(2, 8))
    return pages


def collect_links() -> dict[tuple[int, int], list[dict[str, str]]]:
    result: dict[tuple[int, int], list[dict[str, str]]] = {}
    for key, urls in CATEGORY_URLS.items():
        grade, semester = key
        collected: dict[str, str] = {}
        for category_url in urls:
            for page_url in category_pages(category_url):
                try:
                    document = fetch(page_url)
                except requests.RequestException:
                    continue
                for anchor in document.xpath("//a[@href]"):
                    href = urljoin(page_url, anchor.get("href"))
                    text = compact(anchor.text_content())
                    if not text or not href.endswith(".html"):
                        continue
                    href_plain = plain(href)
                    grade_markers = (f"tieng viet {grade}", f"tieng viet lop {grade}")
                    if not any(marker in href_plain for marker in grade_markers):
                        continue
                    if f"tap {semester}" not in href_plain:
                        continue
                    if "sgk" not in href_plain:
                        continue
                    collected[href] = text
        result[key] = [{"url": url, "text": text} for url, text in collected.items()]
    return result


def candidate_score(lesson: dict, candidate: dict[str, str]) -> float:
    title = plain(lesson_title(lesson["title"]))
    label = plain(re.sub(r"^\s*\d+[.)]\s*", "", candidate["text"]))
    label_without_lesson_number = re.sub(r"^bai\s+\d+\s*", "", label).strip()
    href = plain(candidate["url"])
    score = max(SequenceMatcher(None, title, label).ratio(), SequenceMatcher(None, title, href).ratio())
    if label_without_lesson_number == title:
        score += 3
    if title and title in label:
        score += 2
    if title and title in href:
        score += 1.5
    if re.search(r"\bdoc\b", href):
        score += 0.4
    return score


def choose_url(lesson: dict, links: dict[tuple[int, int], list[dict[str, str]]]) -> tuple[str, float]:
    candidates = links.get((lesson["grade"], lesson["semester"]), [])
    if not candidates:
        return "", 0
    ranked = sorted(((candidate_score(lesson, item), item["url"]) for item in candidates), reverse=True)
    score, url = ranked[0]
    return (url, score) if score >= 1.35 else ("", score)


def direct_paragraphs(box: html.HtmlElement) -> list[str]:
    paragraphs = []
    # Poems are commonly laid out in a two-column table.  Keep descendant
    # paragraphs in document order, but exclude rating/advertising widgets.
    for node in box.xpath(
        ".//p[not(ancestor::div[contains(concat(' ', normalize-space(@class), ' '), ' rating-section ')])]"
    ):
        text = compact(node.text_content())
        if text:
            paragraphs.append(text)
    return paragraphs


def looks_like_author(line: str) -> bool:
    stripped = compact(line).strip()
    return bool(
        re.fullmatch(r"\([^()]{2,120}\)", stripped)
        or re.match(r"^(Theo|Tác giả:|Phỏng theo|Dịch:|Người dịch:)", stripped, flags=re.I)
    )


def extract_reading(lesson: dict, url: str) -> dict:
    title = lesson_title(lesson["title"])
    title_plain = plain(title)
    document = fetch(url)
    boxes = document.xpath("//*[contains(concat(' ', normalize-space(@class), ' '), ' box-question ')]")
    ranked: list[tuple[float, html.HtmlElement, list[str]]] = []

    for box in boxes:
        paragraphs = direct_paragraphs(box)
        if not paragraphs:
            continue
        joined_plain = plain(" ".join(paragraphs))
        score = SequenceMatcher(None, title_plain, joined_plain[: max(120, len(title_plain) * 3)]).ratio()
        if title_plain in joined_plain:
            score += 2
        if any(plain(line) in {"bai doc", "doc"} for line in paragraphs[:4]):
            score += 1
        if len(" ".join(paragraphs)) >= 80:
            score += 0.3
        ranked.append((score, box, paragraphs))

    if not ranked:
        raise ValueError("Không tìm thấy khối văn bản")
    score, _, paragraphs = max(ranked, key=lambda item: item[0])
    if score < 1.6:
        raise ValueError(f"Khối văn bản không khớp tiêu đề (score={score:.2f})")

    cleaned: list[str] = []
    author = ""
    detected_title = title
    started = False
    saw_reading_marker = False
    for raw in paragraphs:
        line = compact(raw)
        normalized = plain(line)
        if not started:
            if normalized in {"bai doc", "doc", "doc bai"}:
                saw_reading_marker = True
                continue
            title_similarity = SequenceMatcher(None, title_plain, normalized).ratio()
            if normalized == title_plain or title_plain in normalized or (saw_reading_marker and title_similarity >= 0.48):
                detected_title = line.strip(" :")
                started = True
                continue
            # Grade 1 uses a "Đọc:" marker immediately before the title.
            if normalized.startswith("doc"):
                saw_reading_marker = True
                continue
            if saw_reading_marker and normalized in {"trich", "doan trich"}:
                continue
            if saw_reading_marker and not re.match(r"^(Từ ngữ|Từ khó)\s*:?,?", line, flags=re.I):
                started = True
                cleaned.append(line)
            continue

        if re.match(r"^(Từ ngữ|Từ khó|Câu hỏi|Trả lời)s*:", line, flags=re.I):
            break
        if looks_like_author(line):
            author = line.strip(" ()")
            continue
        if normalized in {"xem them", "quang cao"}:
            break
        cleaned.append(line)

    if not cleaned:
        raise ValueError("Không tách được nội dung sau tiêu đề")
    content_length = len(" ".join(cleaned))
    if content_length < 20:
        raise ValueError("Nội dung quá ngắn")

    return {
        "lessonId": lesson["id"],
        "grade": lesson["grade"],
        "semester": lesson["semester"],
        "title": detected_title,
        "author": author,
        "content": cleaned,
        "sourceUrl": url,
        "candidateScore": round(score, 3),
        "status": "candidate_needs_official_scan_review",
    }


def main() -> int:
    catalog = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))
    lessons = [item for item in catalog if not (item["grade"] == 1 and item["semester"] == 1)]
    links = collect_links()
    selected = []
    for lesson in lessons:
        url, score = choose_url(lesson, links)
        selected.append((lesson, url, score))

    records: dict[str, dict] = {}
    failures: list[dict] = []
    with ThreadPoolExecutor(max_workers=12) as pool:
        jobs = {
            pool.submit(extract_reading, lesson, url): (lesson, url, score)
            for lesson, url, score in selected
            if url
        }
        for future in as_completed(jobs):
            lesson, url, score = jobs[future]
            try:
                records[lesson["id"]] = future.result()
            except Exception as error:  # noqa: BLE001 - preserve per-page failure evidence
                failures.append({"lessonId": lesson["id"], "title": lesson["title"], "url": url, "error": str(error)})

    for lesson, url, score in selected:
        if not url:
            failures.append({
                "lessonId": lesson["id"],
                "title": lesson["title"],
                "url": "",
                "error": f"Không tìm thấy trang phù hợp (score={score:.2f})",
            })

    payload = {
        "notice": "Văn bản tham chiếu để sửa OCR; ảnh trang NXB mới là nguồn chính thức.",
        "total": len(lessons),
        "extracted": len(records),
        "failed": len(failures),
        "records": dict(sorted(records.items())),
        "failures": sorted(failures, key=lambda item: item["lessonId"]),
    }
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps({key: payload[key] for key in ("total", "extracted", "failed")}, ensure_ascii=False))
    if failures:
        print("Ví dụ lỗi:")
        for item in failures[:20]:
            print(f"- {item['lessonId']}: {item['error']}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
