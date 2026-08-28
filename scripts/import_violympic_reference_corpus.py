#!/usr/bin/env python3
"""Import only verifiable text-layer Violympic references for grades 1-5.

The original documents stay in ``refer/`` and are never copied into the web
bundle. Scan/image documents are catalogued as skipped. Published exercises are
created only from arithmetic expressions that occur in an extractable source and
whose answer can be independently evaluated by this importer.
"""

from __future__ import annotations

import ast
import csv
import hashlib
import html
import json
import logging
import re
import sys
import unicodedata
from collections import Counter, defaultdict
from dataclasses import dataclass
from pathlib import Path
from typing import Any
from xml.etree import ElementTree as ET
from zipfile import ZipFile

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
REFERENCE_ROOT = ROOT / "refer" / "Violympic"
SOURCE_OUTPUT = ROOT / "src" / "data" / "practice" / "violympicReferenceSources.generated.json"
ITEM_OUTPUT = ROOT / "src" / "data" / "practice" / "violympicReferenceItems.generated.json"
CSV_OUTPUT = ROOT / "report" / "violympic-document-classification-2026-08-25.csv"
REPORT_OUTPUT = ROOT / "report" / "BAO_CAO_NHAP_TAI_LIEU_VIOLYMPIC_TEXT_25_08_2026.md"
CLASSIFIER_REPORT = ROOT / "reports" / "violympic_scanned_ocr_filter.json"

SUPPORTED_TEXT_EXTENSIONS = {".pdf", ".docx", ".doc"}
DIRECTLY_READABLE_EXTENSIONS = {".pdf", ".docx"}
UNSUPPORTED_CONTAINER_EXTENSIONS = {".rar", ".zip", ".ds_store", ""}
QUESTION_RE = re.compile(r"(?iu)\b(?:Câu(?:\s+hỏi)?|Question)\s*(\d+(?:\.\d+)?)")
EXPRESSION_RE = re.compile(
    r"(?<![\d.])(?P<expr>-?\d{1,9}(?:\s*[+\-−–×xX*:÷/]\s*-?\d{1,9}){1,4})(?![\d.])"
)
QUESTION_MARKER_RE = re.compile(r"(?im)^\s*(?:Câu(?:\s+hỏi)?|Question)\s*\d+")
SOLUTION_MARKER_RE = re.compile(r"(?im)^\s*(?:Bài giải|Lời giải|Hướng dẫn|Solution)\b")
ADS_RE = re.compile(
    r"(?iu)(?:zalo|đặt mua tài liệu|watermark|https?://|www\.|\b0\d{9}\b|\b\+?84\d{9}\b)"
)

logging.getLogger("pypdf").setLevel(logging.ERROR)


def ascii_text(value: str) -> str:
    return unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode().lower()


def compact(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def sha256_bytes(value: bytes) -> str:
    return hashlib.sha256(value).hexdigest().upper()


def sha256_text(value: str) -> str:
    return sha256_bytes(value.encode("utf-8", errors="replace"))


def sha256_file(path: Path) -> str:
    return sha256_bytes(path.read_bytes())


def collect_grades(haystack: str) -> set[int]:
    text = ascii_text(haystack)
    values: set[int] = set()
    patterns = (
        r"(?:^|\b)(?:lop|grade)[ _.-]*([1-9])(?!\d)",
        r"(?:^|\b)(?:ttv|tta|tv|toan)[ _.-]*([1-9])(?!\d)",
        r"(?:^|\b)(?:ttv|tta|tv)[ _.-]+violympic[ _.-]*([1-9])(?!\d)",
        r"(?:^|\b)[lgk][ _.-]*([1-9])(?!\d)",
        r"\b([1-9])\s*(?:cap tinh|cap huyen|cap quoc gia)\b",
    )
    for pattern in patterns:
        values.update(int(match) for match in re.findall(pattern, text))
    if re.search(r"\b(?:lop|tta|ttv)[ _.-]*12345\b", text):
        values.update(range(1, 6))
    return values


def inferred_grades(relative_paths: list[str], sample: str) -> list[int]:
    """Prefer the basename; parent folders are only a fallback.

    Seller folders frequently contain ``lớp 12345``. They must never turn a
    filename such as ``TTV3-...`` into a five-grade source.
    """
    basename_values: set[int] = set()
    for value in relative_paths:
        basename_values.update(collect_grades(Path(value).name))
    if basename_values:
        return sorted(value for value in basename_values if 1 <= value <= 9)

    path_values: set[int] = set()
    for value in relative_paths:
        parents = list(Path(value).parts[:-1])
        for parent in reversed(parents):
            candidate = collect_grades(parent)
            if candidate:
                path_values.update(candidate)
                break
    if path_values:
        return sorted(value for value in path_values if 1 <= value <= 9)

    return sorted(value for value in collect_grades(sample[:5000]) if 1 <= value <= 9)


def inferred_subject(relative_paths: list[str], sample: str) -> str:
    path_text = ascii_text("\n".join(relative_paths))
    sample_text = ascii_text(sample[:5000])
    if (
        "toan tieng anh" in path_text
        or "toan ta" in path_text
        or "tt anh" in path_text
        or "math grade" in path_text
        or re.search(r"\btta[ _.-]*[1-9]", path_text)
    ):
        return "math_en"
    # TTV means Toán tiếng Việt. TV without the extra T identifies the
    # Vietnamese-language competition documents in this corpus.
    if re.search(r"(?:^|[/ _.-])tv[ _.-]*[1-9]", path_text) and not re.search(
        r"\bttv[ _.-]*[1-9]", path_text
    ):
        return "vietnamese"
    if "tieng viet" in path_text and "toan tieng viet" not in path_text:
        return "vietnamese"
    if "question" in sample_text and re.search(r"\b(?:answer|calculate|find)\b", sample_text):
        return "math_en"
    return "math"


def inferred_roles(relative_paths: list[str]) -> list[str]:
    text = ascii_text("\n".join(relative_paths))
    roles: set[str] = set()
    if re.search(r"phan[ _.-]*(?:dap[ _.-]*an|dapan)|(?:^|[/ _.-])da(?:[/ _.-]|$)|\bdap an\b", text):
        roles.add("answer")
    if "huong dan giai" in text:
        roles.add("solution")
    if re.search(r"phan[ _.-]*de|(?:^|[/ _.-])de(?:[/ _.-]|$)|de thi", text):
        roles.add("question")
    return sorted(roles or {"mixed"})


def source_title(relative_paths: list[str], subject: str, grades: list[int], roles: list[str]) -> str:
    candidates = [Path(path).stem for path in relative_paths]
    candidate = min(candidates, key=lambda value: (len(value), value.casefold()))
    candidate = compact(re.sub(r"\(\d+\)(?:\s*\(\d+\))*$", "", candidate))
    candidate = re.sub(r"\b0\d{9}\b", "", candidate)
    if ADS_RE.search(candidate) or not candidate:
        labels = {"math": "Toán", "math_en": "Toán tiếng Anh", "vietnamese": "Tiếng Việt"}
        candidate = f"Tài liệu {labels[subject]} lớp {', '.join(map(str, grades))} - {', '.join(roles)}"
    return compact(candidate)


def read_docx_text(path: Path) -> str:
    with ZipFile(path) as archive:
        root = ET.fromstring(archive.read("word/document.xml"))
    namespace = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
    paragraphs = []
    for paragraph in root.iter(namespace + "p"):
        text = "".join((node.text or "") for node in paragraph.iter(namespace + "t"))
        if text.strip():
            paragraphs.append(html.unescape(text))
    return "\n".join(paragraphs)


def read_pdf_pages(path: Path) -> list[str]:
    reader = PdfReader(str(path), strict=False)
    return [(page.extract_text() or "") for page in reader.pages]


def safe_calculate(expression: str) -> int | None:
    normalized = expression.translate(str.maketrans({"−": "-", "–": "-", "×": "*", "x": "*", "X": "*", ":": "/", "÷": "/"}))
    normalized = re.sub(r"\s+", "", normalized)
    try:
        tree = ast.parse(normalized, mode="eval")
    except (SyntaxError, ValueError):
        return None

    def evaluate(node: ast.AST) -> int | None:
        if isinstance(node, ast.Expression):
            return evaluate(node.body)
        if isinstance(node, ast.Constant) and isinstance(node.value, int):
            return node.value
        if isinstance(node, ast.UnaryOp) and isinstance(node.op, ast.USub):
            value = evaluate(node.operand)
            return -value if value is not None else None
        if not isinstance(node, ast.BinOp):
            return None
        left = evaluate(node.left)
        right = evaluate(node.right)
        if left is None or right is None:
            return None
        if isinstance(node.op, ast.Add):
            return left + right
        if isinstance(node.op, ast.Sub):
            return left - right
        if isinstance(node.op, ast.Mult):
            return left * right
        if isinstance(node.op, ast.Div):
            if right == 0 or left % right:
                return None
            return left // right
        return None

    result = evaluate(tree)
    if result is None or result < 0 or result > 1_000_000_000:
        return None
    return result


def normalized_expression(expression: str) -> str:
    value = expression.translate(str.maketrans({"−": "-", "–": "-", "×": "×", "x": "×", "X": "×", "*": "×", ":": "÷", "/": "÷"}))
    return re.sub(r"\s*([+\-×÷])\s*", r" \1 ", compact(value))


def expression_is_question(text: str, match: re.Match[str]) -> bool:
    before = text[max(0, match.start() - 140) : match.start()]
    after = text[match.end() : min(len(text), match.end() + 120)]
    context = ascii_text(before + " " + after)
    explicit_blank = bool(re.match(r"\s*=\s*(?:\?|\.{2,}|…+|_{2,})", after))
    keyword = bool(re.search(r"\b(?:tinh|calculate|find the value|ket qua cua phep tinh|result)\b", context))
    has_question = bool(QUESTION_RE.search(before[-100:])) or "?" in after[:50]
    return explicit_blank or keyword or has_question


def expression_is_complete_clause(text: str, match: re.Match[str]) -> bool:
    """Reject numeric fragments embedded in prose, units, variables or answer work.

    Text-layer PDFs often flatten columns and line breaks. A permissive arithmetic
    regex can therefore turn ``Câu 3 ... 42`` or ``8/8 đơn vị`` into a fake
    standalone exercise. Only keep expressions whose local clause is explicitly
    presented as a calculation or ends in an answer blank/question mark.
    """
    line_start = max(text.rfind("\n", 0, match.start()), text.rfind(".", 0, match.start())) + 1
    next_newline = text.find("\n", match.end())
    next_period = text.find(".", match.end())
    endings = [value for value in (next_newline, next_period) if value >= 0]
    line_end = min(endings) if endings else min(len(text), match.end() + 160)
    before = text[line_start : match.start()]
    after = text[match.end() : line_end]
    before_ascii = ascii_text(before)

    explicit_prompt = bool(
        re.search(r"\b(?:tinh|calculate|find the value|ket qua cua phep tinh|result)\s*[:=]?\s*$", before_ascii)
    )
    explicit_answer_blank = bool(re.match(r"\s*=\s*(?:\?|\.{2,}|…+|_{2,})", after))
    explicit_question_end = bool(re.match(r"\s*(?:=\s*)?\?", after))
    if not (explicit_prompt or explicit_answer_blank or explicit_question_end):
        return False

    # OCR/text flattening frequently leaves a variable, unit or another operand
    # immediately beside the captured numbers. Those are not complete questions.
    if re.match(r"\s*[A-Za-zÀ-ỹ]", after):
        return False
    if re.search(r"[A-Za-zÀ-ỹ]\s*$", before) and not explicit_prompt:
        return False
    return True


def expression_has_clean_boundaries(text: str, match: re.Match[str]) -> bool:
    left = text[: match.start()].rstrip()
    right = text[match.end() :].lstrip()
    left_continuation = set("0123456789.,=+-−–×xX*:÷/()")
    right_continuation = set("0123456789.,+-−–×xX*:÷/()")
    return (not left or left[-1] not in left_continuation) and (not right or right[0] not in right_continuation)


def expression_starts_with_question_number(text: str, match: re.Match[str]) -> bool:
    prefix = ascii_text(text[max(0, match.start() - 80) : match.start()])
    return bool(re.search(r"(?:cau(?:\s+hoi)?|question)\s*$", prefix))


def expression_topic(expression: str, subject: str, grade: int) -> str:
    operators = set(re.findall(r"[+\-−–×xX*:÷/]", expression))
    has_multiplication_or_division = bool(operators & {"×", "x", "X", "*", ":", "÷", "/"})
    if not has_multiplication_or_division and "+" in operators:
        if subject == "math_en":
            return {
                1: "Addition to 100",
                2: "Addition with numbers to 1,000",
                3: "Addition with numbers to 100,000",
            }.get(grade, "Whole-number addition")
        return {
            1: "Phép cộng trong phạm vi 100",
            2: "Phép cộng với số đến 1 000",
            3: "Phép cộng với số đến 100 000",
        }.get(grade, "Phép cộng số tự nhiên")
    if not has_multiplication_or_division and operators <= {"-", "−", "–"}:
        if subject == "math_en":
            return {
                1: "Subtraction to 100",
                2: "Subtraction with numbers to 1,000",
                3: "Subtraction with numbers to 100,000",
            }.get(grade, "Whole-number subtraction")
        return {
            1: "Phép trừ trong phạm vi 100",
            2: "Phép trừ với số đến 1 000",
            3: "Phép trừ với số đến 100 000",
        }.get(grade, "Phép trừ số tự nhiên")
    if subject == "math_en":
        return {
            1: "Missing numbers and patterns",
            2: "Multiplication and division facts",
        }.get(grade, "Whole-number multiplication and division")
    return {
        1: "Quy luật và số còn thiếu",
        2: "Bảng nhân và bảng chia",
    }.get(grade, "Nhân và chia số tự nhiên")


def nearest_question(text: str, position: int) -> str | None:
    matches = list(QUESTION_RE.finditer(text[max(0, position - 500) : position]))
    return matches[-1].group(1) if matches else None


@dataclass
class InternalSource:
    record: dict[str, Any]
    relative_paths: list[str]
    pages: list[str]


def extract_items(source: InternalSource) -> list[dict[str, Any]]:
    record = source.record
    if record["subject"] not in {"math", "math_en"} or record["extractionStatus"] != "text_extractable":
        return []
    grade = int(record["grades"][0])
    items: list[dict[str, Any]] = []
    for page_index, page_text in enumerate(source.pages, start=1):
        page_text = unicodedata.normalize("NFKC", page_text)
        page_hash = sha256_text(page_text)
        for match in EXPRESSION_RE.finditer(page_text):
            expression = compact(match.group("expr"))
            if not expression_has_clean_boundaries(page_text, match):
                continue
            if expression_starts_with_question_number(page_text, match):
                continue
            if expression.startswith(("-", "−", "–")):
                continue
            operands = [int(value) for value in re.findall(r"\d+", expression)]
            if len(operands) < 2 or (len(operands) == 2 and min(operands) >= 1900):
                continue
            if not expression_is_question(page_text, match):
                continue
            if not expression_is_complete_clause(page_text, match):
                continue
            answer = safe_calculate(expression)
            if answer is None:
                continue
            excerpt = compact(page_text[max(0, match.start() - 160) : min(len(page_text), match.end() + 160)])
            if ADS_RE.search(excerpt):
                continue
            question_number = nearest_question(page_text, match.start())
            if record["fileType"] == "pdf":
                locator = f"Trang {page_index}" + (f" • Câu {question_number}" if question_number else " • phép tính trong câu hỏi")
                source_page: int | None = page_index
            else:
                locator = f"Câu {question_number}" if question_number else "Đoạn chứa phép tính"
                source_page = None
            rendered = normalized_expression(expression)
            language_prefix = "Calculate" if record["subject"] == "math_en" else "Tính"
            explanation_prefix = "Calculation" if record["subject"] == "math_en" else "Thực hiện phép tính"
            item_hash = sha256_text(f"{record['sha256']}|{page_index}|{question_number}|{rendered}|{answer}")
            item: dict[str, Any] = {
                "id": f"violympic-extracted-{item_hash[:16].lower()}",
                "subject": record["subject"],
                "grade": grade,
                "type": "short_answer",
                "prompt": f"{language_prefix}: {rendered} = ?",
                "correctAnswer": str(answer),
                "explanation": f"{explanation_prefix}: {rendered} = {answer}.",
                "topic": expression_topic(expression, record["subject"], grade),
                "difficulty": "application" if len(operands) >= 3 else "basic",
                "points": 10,
                "contentOrigin": "reference_extracted",
                "verificationStatus": "verified",
                "sourceLabel": "WonderKids — Câu luyện trích và chuẩn hóa từ tài liệu Violympic tham khảo",
                "sourceHash": record["sha256"],
                "sourceDocumentIds": [record["id"]],
                "sourceLocator": locator,
                "sourcePageTextHash": page_hash,
                "sourceExcerptHash": sha256_text(excerpt),
            }
            if source_page is not None:
                item["sourcePage"] = source_page
            if question_number:
                item["sourceQuestion"] = question_number
            items.append(item)
    return items


def classifier_sets() -> tuple[set[str], set[str]]:
    if CLASSIFIER_REPORT.exists():
        report = json.loads(CLASSIFIER_REPORT.read_text(encoding="utf-8"))
        scanned = {entry["rel_path"].replace("\\", "/").casefold() for entry in report.get("scanned_docs", [])}
        digital = {entry["rel_path"].replace("\\", "/").casefold() for entry in report.get("digital_docs", [])}
        return scanned, digital

    # The private classifier report is intentionally ignored. The public CSV
    # keeps only relative paths and classification, allowing a clean checkout to
    # reproduce the same 99/108 split without exposing source files or OCR text.
    if CSV_OUTPUT.exists():
        scanned: set[str] = set()
        digital: set[str] = set()
        with CSV_OUTPUT.open("r", encoding="utf-8-sig", newline="") as handle:
            for row in csv.DictReader(handle):
                relative = row["relativePath"].replace("\\", "/").casefold()
                (scanned if row["initialClass"] == "OCR/scan" else digital).add(relative)
        return scanned, digital
    raise FileNotFoundError("Missing both private classifier report and public classification CSV")


def build_outputs() -> tuple[dict[str, Any], list[dict[str, Any]], list[dict[str, str]]]:
    files = sorted((path for path in REFERENCE_ROOT.rglob("*") if path.is_file()), key=lambda p: p.as_posix().casefold())
    scanned_paths, digital_paths = classifier_sets()
    file_digests = {path: sha256_file(path) for path in files}
    groups: dict[str, list[Path]] = defaultdict(list)
    for path in files:
        if path.suffix.casefold() in DIRECTLY_READABLE_EXTENSIONS:
            groups[file_digests[path]].append(path)

    internal_sources: list[InternalSource] = []
    rows: list[dict[str, str]] = []
    excluded_outside_primary = 0
    excluded_ambiguous_grade = 0
    unreadable = 0

    canonical_by_digest = {
        digest: min(group, key=lambda path: (len(str(path)), str(path).casefold()))
        for digest, group in groups.items()
    }
    source_by_digest: dict[str, InternalSource] = {}

    for digest, group in sorted(groups.items()):
        canonical = canonical_by_digest[digest]
        relative_paths = [path.relative_to(REFERENCE_ROOT).as_posix() for path in group]
        canonical_relative = canonical.relative_to(REFERENCE_ROOT).as_posix()
        extension = canonical.suffix.casefold()
        pages: list[str] = []
        status = "text_extractable"
        try:
            if extension == ".pdf":
                if any(path.casefold() in scanned_paths for path in relative_paths):
                    status = "ocr_required"
                    reader = PdfReader(str(canonical), strict=False)
                    page_count = len(reader.pages)
                else:
                    pages = read_pdf_pages(canonical)
                    page_count = len(pages)
                    if len(compact("\n".join(pages))) < 100:
                        status = "ocr_required"
            else:
                text = read_docx_text(canonical)
                pages = [text]
                page_count = 0
                if len(compact(text)) < 100:
                    status = "unreadable"
        except Exception:
            status = "unreadable"
            page_count = 0
            pages = []
            unreadable += 1

        sample = "\n".join(pages[:3])
        grades = inferred_grades(relative_paths, sample)
        primary_grades = [grade for grade in grades if 1 <= grade <= 5]
        if not primary_grades:
            excluded_outside_primary += 1
            continue
        if len(primary_grades) != 1:
            excluded_ambiguous_grade += 1
            continue
        subject = inferred_subject(relative_paths, sample)
        roles = inferred_roles(relative_paths)
        full_text = "\n".join(pages)
        record = {
            "id": f"vio-ref-{digest[:12].lower()}",
            "title": source_title(relative_paths, subject, primary_grades, roles),
            "subject": subject,
            "grades": primary_grades,
            "roles": roles,
            "fileType": extension.removeprefix("."),
            "pageCount": page_count,
            "sha256": digest,
            "extractionStatus": status,
            "questionMarkerCount": len(QUESTION_MARKER_RE.findall(full_text)),
            "solutionMarkerCount": len(SOLUTION_MARKER_RE.findall(full_text)),
            "duplicateCopies": len(group) - 1,
        }
        internal = InternalSource(record=record, relative_paths=relative_paths, pages=pages)
        internal_sources.append(internal)
        source_by_digest[digest] = internal

    candidate_items = [item for source in internal_sources for item in extract_items(source)]
    deduplicated_items: list[dict[str, Any]] = []
    seen_signatures: set[str] = set()
    source_item_counts: Counter[str] = Counter()
    for item in sorted(candidate_items, key=lambda row: (row["subject"], row["grade"], row["prompt"], row["id"])):
        signature = compact(f"{item['subject']}|{item['grade']}|{item['prompt']}|{item['correctAnswer']}").casefold()
        if signature in seen_signatures:
            continue
        seen_signatures.add(signature)
        deduplicated_items.append(item)
        source_item_counts[item["sourceDocumentIds"][0]] += 1

    sources = [source.record for source in internal_sources]
    sources.sort(key=lambda source: (source["subject"], source["grades"], source["title"]))
    status_counts = Counter(source["extractionStatus"] for source in sources)
    raw_non_ocr = len(digital_paths)
    raw_ocr = len(scanned_paths)
    inventory_paths = scanned_paths | digital_paths
    copyable_document_files = sum(
        Path(path).suffix.casefold() in SUPPORTED_TEXT_EXTENSIONS for path in digital_paths
    )
    unsupported_container_files = raw_non_ocr - copyable_document_files
    pdf_groups = defaultdict(list)
    for path in files:
        if path.suffix.casefold() == ".pdf":
            pdf_groups[file_digests[path]].append(path)
    stats = {
        "totalFiles": len(inventory_paths),
        "rawNonOcrFiles": raw_non_ocr,
        "rawOcrFiles": raw_ocr,
        "copyableDocumentFiles": copyable_document_files,
        "unsupportedContainerFiles": unsupported_container_files,
        "totalPdfFiles": sum(Path(path).suffix.casefold() == ".pdf" for path in inventory_paths),
        "uniquePdfDocuments": len(pdf_groups),
        "primaryGradeDocuments": len(sources),
        "duplicateFilesRemoved": max(0, sum(Path(path).suffix.casefold() == ".pdf" for path in inventory_paths) - len(pdf_groups)),
        "excludedOutsidePrimary": excluded_outside_primary,
        "excludedAmbiguousGrade": excluded_ambiguous_grade,
        "textExtractableDocuments": status_counts["text_extractable"],
        "ocrRequiredDocuments": status_counts["ocr_required"],
        "unreadableDocuments": status_counts["unreadable"],
        "questionMarkers": sum(int(source["questionMarkerCount"]) for source in sources),
        "solutionMarkers": sum(int(source["solutionMarkerCount"]) for source in sources),
        "extractedVerifiedItems": len(deduplicated_items),
    }
    manifest = {
        "version": "2026.08.25",
        "contentPolicy": "verified_text_layer_extraction_only",
        "stats": stats,
        "sources": sources,
    }

    for path in files:
        relative = path.relative_to(REFERENCE_ROOT).as_posix()
        relative_key = relative.casefold()
        extension = path.suffix.casefold()
        digest = file_digests[path]
        initial_class = "OCR/scan" if relative_key in scanned_paths else "non-OCR"
        grades = inferred_grades([relative], "")
        subject = inferred_subject([relative], "")
        if relative_key in scanned_paths:
            decision = "Bỏ qua — cần OCR"
        elif extension in UNSUPPORTED_CONTAINER_EXTENSIONS:
            decision = "Bỏ qua — tệp chứa/không phải tài liệu text"
        elif extension == ".doc":
            decision = "Bỏ qua — định dạng DOC cũ chưa đọc trực tiếp an toàn"
        elif extension not in DIRECTLY_READABLE_EXTENSIONS:
            decision = "Bỏ qua — định dạng chưa hỗ trợ"
        elif canonical_by_digest.get(digest) != path:
            decision = "Bỏ qua — bản sao trùng hash"
        elif digest not in source_by_digest:
            decision = "Bỏ qua — ngoài lớp 1–5 hoặc lớp không xác định duy nhất"
        else:
            source = source_by_digest[digest]
            count = source_item_counts[source.record["id"]]
            decision = f"Đã nhập nguồn — {count} câu kiểm chứng" if count else "Đã lập danh mục — chưa có câu đủ điều kiện phát hành"
            grades = source.record["grades"]
            subject = source.record["subject"]
        rows.append(
            {
                "fileName": path.name,
                "relativePath": relative,
                "extension": extension or "(none)",
                "initialClass": initial_class,
                "inferredGrades": ",".join(map(str, grades)),
                "subject": subject,
                "sha256": digest,
                "decision": decision,
            }
        )
    actual_relative_paths = {
        path.relative_to(REFERENCE_ROOT).as_posix().casefold() for path in files
    }
    for missing_key in sorted(inventory_paths - actual_relative_paths):
        initial_class = "OCR/scan" if missing_key in scanned_paths else "non-OCR"
        rows.append(
            {
                "fileName": Path(missing_key).name,
                "relativePath": missing_key,
                "extension": Path(missing_key).suffix.casefold() or "(none)",
                "initialClass": initial_class,
                "inferredGrades": ",".join(map(str, inferred_grades([missing_key], ""))),
                "subject": inferred_subject([missing_key], ""),
                "sha256": "",
                "decision": "Không còn trong thư mục nguồn tại thời điểm nhập",
            }
        )
    rows.sort(key=lambda row: row["relativePath"].casefold())
    return manifest, deduplicated_items, rows


def write_report(manifest: dict[str, Any], items: list[dict[str, Any]]) -> None:
    stats = manifest["stats"]
    by_subject_grade = Counter((item["subject"], item["grade"]) for item in items)
    subject_labels = {"math": "Toán", "math_en": "Toán tiếng Anh", "vietnamese": "Tiếng Việt"}
    lines = [
        "# Báo cáo nhập tài liệu Violympic có text số hóa — 25/08/2026",
        "",
        "## Kết quả phân loại",
        "",
        f"- Tổng tệp được rà soát: **{stats['totalFiles']}**.",
        f"- Nhóm scan/ảnh cần OCR đã bỏ qua: **{stats['rawOcrFiles']}** tệp.",
        f"- Nhóm ban đầu không cần OCR: **{stats['rawNonOcrFiles']}** tệp, gồm **{stats['copyableDocumentFiles']}** tài liệu PDF/DOCX/DOC và **{stats['unsupportedContainerFiles']}** tệp chứa/không phải tài liệu text.",
        f"- Bản PDF trùng nội dung đã loại bằng SHA-256: **{stats['duplicateFilesRemoved']}** bản.",
        f"- Nguồn text lớp 1–5 xác định được duy nhất và đưa vào danh mục: **{stats['textExtractableDocuments']}**.",
        f"- Hoạt động đã trích, tính đáp án độc lập và phát hành: **{stats['extractedVerifiedItems']}**.",
        "",
        "## Hoạt động đã phát hành",
        "",
        "| Môn | Lớp | Số câu |",
        "|---|---:|---:|",
    ]
    for subject, grade in sorted(by_subject_grade):
        lines.append(f"| {subject_labels[subject]} | {grade} | {by_subject_grade[(subject, grade)]} |")
    lines.extend(
        [
            "",
            "## Nguyên tắc kiểm duyệt",
            "",
            "- Không OCR và không nhập nội dung từ 99 tài liệu scan/ảnh.",
            "- Không gán tên nguồn cho câu sinh tự động. Mỗi câu phát hành có mã nguồn, vị trí trang/câu và hai hash kiểm chứng.",
            "- Chỉ các phép tính xuất hiện trong lớp text và cho đáp án nguyên có thể tính lại độc lập mới được phát hành.",
            "- Câu phụ thuộc hình, thiếu dữ kiện, câu ngôn ngữ chưa có đáp án kiểm chứng và đoạn quảng cáo đều không được phát hành.",
            "- Tệp `.doc` cũ được thống kê nhưng chưa nhập vì môi trường không có bộ đọc bảo đảm giữ đúng cấu trúc; không dùng cách đọc byte thô.",
            "",
            "Chi tiết từng tệp và quyết định nhập/bỏ qua nằm trong `report/violympic-document-classification-2026-08-25.csv`.",
            "",
        ]
    )
    REPORT_OUTPUT.write_text("\n".join(lines), encoding="utf-8")


def write_outputs(manifest: dict[str, Any], items: list[dict[str, Any]], rows: list[dict[str, str]]) -> None:
    SOURCE_OUTPUT.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    ITEM_OUTPUT.write_text(json.dumps(items, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    CSV_OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with CSV_OUTPUT.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=list(rows[0]))
        writer.writeheader()
        writer.writerows(rows)
    write_report(manifest, items)


def run_self_test() -> int:
    fixtures = [
        (["TTV cấp huyện lớp 12345/TTV3-OCH-PHANDE.pdf"], "", [3]),
        (["VIOLYMPIC CẤP QUỐC GIA LỚP 12345/TTV1 FILE 10.docx"], "", [1]),
        (["sách Toán tiếng Anh/Lớp 4/tong-hop-de-thi.pdf"], "", [4]),
        (["Tổng hợp/TTV violympic 3 tỉnh 24-25 ĐỀ.pdf"], "", [3]),
        (["Violympic Toán 6,7,8,9/VIOLYMPIC TOÁN 6.docx"], "", [6]),
    ]
    for paths, sample, expected in fixtures:
        actual = inferred_grades(paths, sample)
        if actual != expected:
            print(f"grade fixture failed: {paths} -> {actual}, expected {expected}", file=sys.stderr)
            return 1
    arithmetic = {"8 - 2": 6, "5 + 3 - 7": 1, "24 ÷ 6": 4, "3 × 7": 21}
    for expression, expected in arithmetic.items():
        if safe_calculate(expression) != expected:
            print(f"arithmetic fixture failed: {expression}", file=sys.stderr)
            return 1
    boundary_text = "Số hạng là: (2014 - 0) : 1 + 1 = 2015 số"
    boundary_matches = list(EXPRESSION_RE.finditer(boundary_text))
    if any(expression_has_clean_boundaries(boundary_text, match) for match in boundary_matches):
        print("expression boundary fixture failed", file=sys.stderr)
        return 1
    equality_chain = "Ta có: 9 = 9 + 0 = 8 + 1 = 7 + 2 = 6 + 3"
    if any(expression_has_clean_boundaries(equality_chain, match) for match in EXPRESSION_RE.finditer(equality_chain)):
        print("equality chain fixture failed", file=sys.stderr)
        return 1
    decimal_expression = "Cho A = 13,4 + 39,8 + 51,3 + 76,7"
    if any(expression_has_clean_boundaries(decimal_expression, match) for match in EXPRESSION_RE.finditer(decimal_expression)):
        print("decimal boundary fixture failed", file=sys.stderr)
        return 1
    question_number_text = "Câu 110: 1 của 36 phút là bao nhiêu phút? 4"
    if any(
        expression_has_clean_boundaries(question_number_text, match)
        and not expression_starts_with_question_number(question_number_text, match)
        for match in EXPRESSION_RE.finditer(question_number_text)
    ):
        print("question-number fixture failed", file=sys.stderr)
        return 1
    fragment_fixtures = (
        "Câu 3 quan sát hình rồi chọn đáp án 42",
        "Có 8/8 đơn vị đã hoàn thành",
        "Bài 2 trang 240 yêu cầu tính diện tích",
    )
    for fragment in fragment_fixtures:
        if any(expression_is_complete_clause(fragment, match) for match in EXPRESSION_RE.finditer(fragment)):
            print(f"embedded-fragment fixture failed: {fragment}", file=sys.stderr)
            return 1
    print("grade inference fixtures: PASS")
    print("safe arithmetic fixtures: PASS")
    return 0


def main() -> int:
    if "--self-test" in sys.argv:
        return run_self_test()
    if not REFERENCE_ROOT.exists():
        print(f"Missing reference directory: {REFERENCE_ROOT}", file=sys.stderr)
        return 2
    manifest, items, rows = build_outputs()
    write_outputs(manifest, items, rows)
    print(json.dumps(manifest["stats"], ensure_ascii=False, indent=2))
    print(f"Wrote {SOURCE_OUTPUT}")
    print(f"Wrote {ITEM_OUTPUT}")
    print(f"Wrote {CSV_OUTPUT}")
    print(f"Wrote {REPORT_OUTPUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
