#!/usr/bin/env python3
"""Catalog user-provided Violympic references without copying the source files.

The generated manifest is intentionally metadata-only. Question text is adapted by
the application generator and source PDFs remain outside Git and the web bundle.
"""

from __future__ import annotations

import hashlib
import json
import re
import sys
import unicodedata
from collections import defaultdict
from pathlib import Path

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
REFERENCE_ROOT = ROOT / "refer" / "Violympic"
OUTPUT = ROOT / "src" / "data" / "practice" / "violympicReferenceSources.generated.json"


def ascii_text(value: str) -> str:
    return unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode().lower()


def compact(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def inferred_grades(paths: list[str], sample: str) -> list[int]:
    haystack = ascii_text("\n".join(paths) + "\n" + sample[:5000])
    values: set[int] = set()
    patterns = (
        r"(?:lop|grade)[ _.-]*([1-9])(?!\d)",
        r"(?:ttv|tta|tv|toan)[ _.-]*([1-9])(?!\d)",
        r"violympic[ _.-]*([1-9])(?!\d)",
        r"\bk([1-9])\b",
        r"\bl([1-9])\b",
        r"\b([1-9])\s*(?:cap tinh|cap huyen|cap quoc gia|nam hoc)",
    )
    for pattern in patterns:
        values.update(int(match) for match in re.findall(pattern, haystack))
    if "lop 12345" in haystack or "lop12345" in haystack:
        values.update(range(1, 6))
    return sorted(value for value in values if 1 <= value <= 9)


def inferred_subject(paths: list[str], sample: str) -> str:
    path_text = ascii_text("\n".join(paths))
    sample_text = ascii_text(sample[:5000])
    if (
        "toan tieng anh" in path_text
        or "tt anh" in path_text
        or "math grade" in path_text
        or re.search(r"\btta[ _.-]*[1-9]", path_text)
    ):
        return "math_en"
    if (
        re.search(r"(?:^|[/ _.-])tv[ _.-]*[1-9]", path_text)
        and not re.search(r"\bttv[ _.-]*[1-9]", path_text)
    ):
        return "vietnamese"
    if "tieng viet" in path_text and "toan tieng viet" not in path_text:
        return "vietnamese"
    if "question" in sample_text and re.search(r"\b(?:answer|calculate|find)\b", sample_text):
        return "math_en"
    return "math"


def inferred_roles(paths: list[str]) -> list[str]:
    text = ascii_text("\n".join(paths))
    roles: set[str] = set()
    if re.search(r"phan[ _.-]*(?:dap[ _.-]*an|dapan)|(?:^|[/ _.-])da(?:[/ _.-]|$)|\bdap an\b", text):
        roles.add("answer")
    if "huong dan giai" in text:
        roles.add("solution")
    if re.search(r"phan[ _.-]*de|(?:^|[/ _.-])de(?:[/ _.-]|$)|de thi", text):
        roles.add("question")
    if not roles:
        roles.add("mixed")
    return sorted(roles)


def source_title(paths: list[str], subject: str, grades: list[int], roles: list[str]) -> str:
    candidates = [Path(path).stem for path in paths]
    candidate = min(candidates, key=lambda value: (len(value), value.casefold()))
    candidate = compact(re.sub(r"\(\d+\)(?:\s*\(\d+\))*$", "", candidate))
    candidate = re.sub(r"\b0\d{9}\b", "", candidate)
    if not candidate:
        subject_label = {"math": "Toán", "math_en": "Toán tiếng Anh", "vietnamese": "Tiếng Việt"}[subject]
        grade_label = ", ".join(str(grade) for grade in grades)
        role_label = ", ".join(roles)
        candidate = f"Tài liệu {subject_label} lớp {grade_label} - {role_label}"
    return compact(candidate)


def read_pdf_metadata(path: Path) -> tuple[int, str, str, int, int]:
    try:
        reader = PdfReader(str(path), strict=False)
        page_count = len(reader.pages)
        first_pages = "\n".join((page.extract_text() or "") for page in reader.pages[: min(3, page_count)])
        if len(first_pages.strip()) < 100:
            return page_count, first_pages, "ocr_required", 0, 0
        full_text = "\n".join((page.extract_text() or "") for page in reader.pages)
        question_count = len(re.findall(r"(?im)^\s*(?:Câu|Question)\s*\d+", full_text))
        solution_count = len(re.findall(r"(?im)^\s*(?:Bài giải|Lời giải|Solution)\s*:", full_text))
        return page_count, first_pages, "text_extractable", question_count, solution_count
    except Exception:
        return 0, "", "unreadable", 0, 0


def build_manifest() -> dict[str, object]:
    files = [path for path in REFERENCE_ROOT.rglob("*") if path.is_file()]
    pdf_groups: dict[str, list[Path]] = defaultdict(list)
    for path in files:
        if path.suffix.casefold() != ".pdf":
            continue
        digest = hashlib.sha256(path.read_bytes()).hexdigest().upper()
        pdf_groups[digest].append(path)

    sources: list[dict[str, object]] = []
    excluded_outside_primary = 0
    for digest, group in sorted(pdf_groups.items()):
        canonical = min(group, key=lambda path: (len(str(path)), str(path).casefold()))
        relative_paths = [path.relative_to(REFERENCE_ROOT).as_posix() for path in group]
        page_count, sample, extraction_status, question_count, solution_count = read_pdf_metadata(canonical)
        grades = inferred_grades(relative_paths, sample)
        primary_grades = [grade for grade in grades if 1 <= grade <= 5]
        if not primary_grades:
            excluded_outside_primary += 1
            continue
        subject = inferred_subject(relative_paths, sample)
        roles = inferred_roles(relative_paths)
        sources.append(
            {
                "id": f"vio-ref-{digest[:12].lower()}",
                "title": source_title(relative_paths, subject, primary_grades, roles),
                "subject": subject,
                "grades": primary_grades,
                "roles": roles,
                "pageCount": page_count,
                "sha256": digest,
                "extractionStatus": extraction_status,
                "questionMarkerCount": question_count,
                "solutionMarkerCount": solution_count,
                "duplicateCopies": len(group) - 1,
            }
        )

    sources.sort(key=lambda source: (source["subject"], source["grades"], source["title"]))
    status_counts = defaultdict(int)
    for source in sources:
        status_counts[str(source["extractionStatus"])] += 1
    return {
        "version": "2026.08.25",
        "contentPolicy": "metadata_only_reference_adaptation",
        "stats": {
            "totalFiles": len(files),
            "totalPdfFiles": sum(1 for path in files if path.suffix.casefold() == ".pdf"),
            "uniquePdfDocuments": len(pdf_groups),
            "primaryGradeDocuments": len(sources),
            "duplicateFilesRemoved": sum(max(0, len(group) - 1) for group in pdf_groups.values()),
            "excludedOutsidePrimary": excluded_outside_primary,
            "textExtractableDocuments": status_counts["text_extractable"],
            "ocrRequiredDocuments": status_counts["ocr_required"],
            "unreadableDocuments": status_counts["unreadable"],
            "questionMarkers": sum(int(source["questionMarkerCount"]) for source in sources),
            "solutionMarkers": sum(int(source["solutionMarkerCount"]) for source in sources),
        },
        "sources": sources,
    }


def main() -> int:
    if not REFERENCE_ROOT.exists():
        print(f"Missing reference directory: {REFERENCE_ROOT}", file=sys.stderr)
        return 2
    manifest = build_manifest()
    OUTPUT.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(manifest["stats"], ensure_ascii=False, indent=2))
    print(f"Wrote {OUTPUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
