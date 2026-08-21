from __future__ import annotations

import argparse
import json
import os
import subprocess
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE_ROOT = ROOT / ".cache" / "sgk" / "vietnamese"
OUTPUT_ROOT = ROOT / ".cache" / "ocr" / "vietnamese"
TESSDATA = ROOT / ".cache" / "ocr" / "tessdata"
TESSERACT_CANDIDATES = [
    Path(r"C:\Program Files\Tesseract-OCR\tesseract.exe"),
    Path(r"C:\Program Files (x86)\Tesseract-OCR\tesseract.exe"),
]


def find_tesseract() -> Path:
    configured = os.environ.get("WONDERKIDS_TESSERACT")
    candidates = ([Path(configured)] if configured else []) + TESSERACT_CANDIDATES
    for candidate in candidates:
        if candidate.exists():
            return candidate
    raise RuntimeError("Không tìm thấy Tesseract OCR")


def ocr_page(tesseract: Path, source: Path, target: Path) -> str:
    target.parent.mkdir(parents=True, exist_ok=True)
    if target.exists() and target.stat().st_size > 20:
        return "cached"
    result = subprocess.run(
        [
            str(tesseract),
            str(source),
            "stdout",
            "-l",
            "vie",
            "--tessdata-dir",
            str(TESSDATA),
            "--psm",
            "6",
        ],
        check=True,
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
    )
    target.write_text(result.stdout, encoding="utf-8")
    return "created"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--workers", type=int, default=min(8, os.cpu_count() or 4))
    parser.add_argument("--verify", action="store_true")
    args = parser.parse_args()

    pages = sorted(SOURCE_ROOT.glob("tv-g*-t*/reader-*.png"))
    if len(pages) != 1584:
        raise RuntimeError(f"Nguồn OCR phải có 1.584 trang, hiện có {len(pages)}")

    targets = [OUTPUT_ROOT / page.parent.name / f"{page.stem}.txt" for page in pages]
    if args.verify:
        missing = [str(target.relative_to(ROOT)) for target in targets if not target.exists() or target.stat().st_size <= 20]
        print(json.dumps({"pages": len(pages), "missing": missing}, ensure_ascii=False))
        if missing:
            raise SystemExit(1)
        return

    tesseract = find_tesseract()
    counts = {"created": 0, "cached": 0}
    with ThreadPoolExecutor(max_workers=max(1, args.workers)) as pool:
        futures = {
            pool.submit(ocr_page, tesseract, source, target): source
            for source, target in zip(pages, targets)
        }
        for completed, future in enumerate(as_completed(futures), start=1):
            counts[future.result()] += 1
            if completed % 100 == 0:
                print(f"OCR {completed}/{len(pages)}")

    print(json.dumps({"pages": len(pages), **counts}, ensure_ascii=False))


if __name__ == "__main__":
    main()
