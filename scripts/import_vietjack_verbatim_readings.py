from __future__ import annotations

import argparse
import html
import json
import re
import sys
import unicodedata
from difflib import SequenceMatcher
from pathlib import Path
from urllib.parse import urljoin

import requests
from lxml import html as lxml_html


ROOT = Path(__file__).resolve().parents[1]
CATALOG_PATH = ROOT / "scripts" / "all_376_lessons_catalog.json"
OUTPUT_PATH = ROOT / ".cache" / "sgk" / "vietnamese-vietjack-readings.json"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"

BAD_LINK_PARTS = (
    "trac-nghiem",
    "tgtp-",
    "noi-dung-chinh",
    "giao-an",
    "bai-tap",
    "de-kiem-tra",
    "-bsvm",
    "soan-",
)

STOP_PATTERNS = (
    re.compile(r"^(?:\*\s*)?Trả lời câu hỏi", re.I),
    re.compile(r"^Câu\s*1\s+trang\s+\d+", re.I),
    re.compile(r"^(?:Luyện từ và câu|Viết|Nói và nghe|Đọc mở rộng)\s*:", re.I),
    re.compile(r"^Các bài học để học tốt", re.I),
)


def clean_title(value: str) -> str:
    return re.sub(r"^Bài\s+\d+\s*:\s*", "", value, flags=re.I).strip()


def folded(value: str) -> str:
    value = unicodedata.normalize("NFD", value.lower())
    value = "".join(char for char in value if unicodedata.category(char) != "Mn")
    value = value.replace("đ", "d")
    return re.sub(r"[^a-z0-9]+", " ", value).strip()


def normalized_for_similarity(value: str) -> str:
    return " ".join(folded(value).split())


def clean_line(value: str) -> str:
    value = html.unescape(value).replace("\xa0", " ")
    value = re.sub(r"[ \t\r\f\v]+", " ", value)
    return value.strip()


def fetch(session: requests.Session, url: str) -> str:
    response = session.get(url, timeout=45)
    response.raise_for_status()
    response.encoding = response.apparent_encoding or "utf-8"
    return response.text


def index_links(session: requests.Session, grade: int) -> list[tuple[str, str]]:
    base_url = f"https://vietjack.com/tieng-viet-{grade}-kn/index.jsp"
    document = lxml_html.fromstring(fetch(session, base_url))
    links: list[tuple[str, str]] = []
    seen: set[tuple[str, str]] = set()
    for anchor in document.xpath("//a[@href]"):
        label = clean_line(anchor.text_content())
        href = urljoin(base_url, anchor.get("href"))
        if f"/tieng-viet-{grade}-kn/" not in href:
            continue
        key = (label, href)
        if key in seen:
            continue
        seen.add(key)
        links.append(key)
    return links


def candidate_links(links: list[tuple[str, str]], title: str) -> list[tuple[int, str, str]]:
    target = folded(title)
    candidates: list[tuple[int, str, str]] = []
    for label, href in links:
        label_folded = folded(label)
        if target not in label_folded and label_folded not in target:
            continue
        score = 0
        if label_folded.startswith(target):
            score += 30
        if "trang" in label_folded:
            score += 100
        if "/doc-" in href:
            score += 80
        if re.search(r"/bai-\d+-", href):
            score += 45
        if any(part in href for part in BAD_LINK_PARTS):
            score -= 200
        candidates.append((score, label, href))
    return sorted(candidates, reverse=True)


def visible_lines(page_html: str) -> list[str]:
    document = lxml_html.fromstring(page_html)
    for element in document.xpath("//script|//style|//noscript|//svg|//ins|//form"):
        element.drop_tree()
    for br in document.xpath("//br"):
        br.tail = "\n" + (br.tail or "")
    raw = document.xpath("//body")[0].text_content()
    lines: list[str] = []
    for line in raw.splitlines():
        cleaned = clean_line(line)
        if not cleaned or cleaned == "Quảng cáo":
            continue
        if cleaned.startswith("if(window.") or cleaned.startswith("document.write("):
            continue
        if cleaned.startswith("(adsbygoogle"):
            continue
        lines.append(cleaned)
    return lines


def find_passage_start(lines: list[str], title: str) -> int | None:
    target = folded(title)
    markers = (
        f"van ban {target}",
        f"van ban: {target}",
        f"doc van ban {target}",
    )
    for index, line in enumerate(lines):
        value = folded(line)
        if any(value == marker or value.endswith(marker) for marker in markers):
            return index + 1
    return None


def extract_author(lines: list[str]) -> tuple[list[str], str]:
    if not lines:
        return lines, "NXB Giáo dục Việt Nam"
    tail = lines[-6:]
    joined_tail = " ".join(tail)
    author_match = re.search(r"\(([^()]{2,100})\)\s*$", joined_tail)
    if not author_match:
        return lines, "NXB Giáo dục Việt Nam"
    author = clean_line(author_match.group(1))
    author_folded = folded(author)
    if author_folded.startswith("theo "):
        author = "Theo " + author[5:].strip()
    consumed = len(tail)
    prefix = lines[:-consumed]
    before_author = joined_tail[: author_match.start()].strip()
    if before_author:
        prefix.append(before_author)
    return prefix, author


def extract_passage(page_html: str, title: str) -> dict | None:
    lines = visible_lines(page_html)
    start = find_passage_start(lines, title)
    if start is None:
        return None

    passage_lines: list[str] = []
    for line in lines[start:]:
        if any(pattern.search(line) for pattern in STOP_PATTERNS):
            break
        passage_lines.append(line)

    passage_lines, author = extract_author(passage_lines)
    passage_lines = [line for line in passage_lines if clean_line(line)]
    if not passage_lines:
        return None

    # The source pages use a separate paragraph element for prose paragraphs and
    # a separate line for each verse. Keeping those boundaries avoids inventing
    # punctuation or wording while still rendering cleanly in the app.
    content = passage_lines
    return {"author": author, "content": content}


def load_official_ocr() -> dict[str, str]:
    combined: dict[str, str] = {}
    for path in sorted((ROOT / "scripts").glob("ocr_verbatim_g*_t*.json")):
        data = json.loads(path.read_text(encoding="utf-8"))
        for lesson in data:
            combined[lesson["lessonId"]] = "\n".join(
                page.get("ocrText", "") for page in lesson.get("pages", [])[:2]
            )
    return combined


def official_similarity(candidate: str, official_ocr: str) -> float:
    left = normalized_for_similarity(candidate)
    right = normalized_for_similarity(official_ocr)
    if not left or not right:
        return 0.0
    return round(SequenceMatcher(None, left, right, autojunk=False).ratio(), 4)


def crawl(grades: set[int]) -> dict[str, dict]:
    catalog = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))
    official_ocr = load_official_ocr()
    session = requests.Session()
    session.headers.update({"User-Agent": USER_AGENT, "Accept-Language": "vi-VN,vi;q=0.9"})
    links_by_grade = {grade: index_links(session, grade) for grade in grades}

    output: dict[str, dict] = {}
    targets = [lesson for lesson in catalog if lesson["grade"] in grades]
    for position, lesson in enumerate(targets, start=1):
        lesson_id = lesson["id"]
        title = clean_title(lesson["title"])
        candidates = candidate_links(links_by_grade[lesson["grade"]], title)
        selected = None
        errors: list[str] = []
        for _, label, url in candidates[:8]:
            try:
                passage = extract_passage(fetch(session, url), title)
            except Exception as error:  # pragma: no cover - network diagnostics
                errors.append(f"{url}: {error}")
                continue
            if not passage:
                continue
            text = "\n".join(passage["content"])
            if len(text) < 20:
                continue
            selected = {
                "lessonId": lesson_id,
                "title": title,
                "author": passage["author"],
                "genre": "poetry" if sum(line.endswith((".", "!", "?", ":")) for line in passage["content"]) < len(passage["content"]) / 2 else "prose",
                "content": passage["content"],
                "sourcePages": list(range(lesson["startPage"], lesson["endPage"] + 1)),
                "referenceUrl": url,
                "referenceLabel": label,
                "officialOcrSimilarity": official_similarity(text, official_ocr.get(lesson_id, "")),
            }
            break

        if selected:
            output[lesson_id] = selected
        else:
            output[lesson_id] = {
                "lessonId": lesson_id,
                "title": title,
                "error": "Không trích được văn bản",
                "candidates": [url for _, _, url in candidates[:8]],
                "details": errors,
            }
        if position % 25 == 0 or position == len(targets):
            print(f"[{position}/{len(targets)}] {lesson_id}")
    return output


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--grades", default="2,3,4,5")
    parser.add_argument("--output", type=Path, default=OUTPUT_PATH)
    args = parser.parse_args()
    grades = {int(value) for value in args.grades.split(",") if value.strip()}
    result = crawl(grades)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
    good = sum("content" in item for item in result.values())
    print(json.dumps({"total": len(result), "extracted": good, "failed": len(result) - good}, ensure_ascii=False))


if __name__ == "__main__":
    if sys.platform == "win32":
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    main()
