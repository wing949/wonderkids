#!/usr/bin/env python3
"""Import only copyable Violympic text into isolated DigitalReference outputs."""

from __future__ import annotations

import json
import sys

import import_violympic_reference_corpus as importer


def main() -> int:
    importer.SOURCE_OUTPUT = importer.ROOT / "src/data/practice/violympicDigitalReferenceSources.generated.json"
    importer.ITEM_OUTPUT = importer.ROOT / "src/data/practice/violympicDigitalReferenceItems.generated.json"
    if "--self-test" in sys.argv:
        return importer.run_self_test()

    manifest, items, rows = importer.build_outputs()
    source_by_id = {source["id"]: source for source in manifest["sources"]}
    if (manifest["stats"]["rawOcrFiles"], manifest["stats"]["rawNonOcrFiles"]) != (99, 108):
        raise RuntimeError("Expected the approved 99 OCR / 108 copyable classification")
    for item in items:
        if not item["id"].startswith("violympic-extracted-"):
            raise RuntimeError(f"Unexpected non-digital item: {item['id']}")
        if any(source_by_id[source_id]["extractionStatus"] != "text_extractable" for source_id in item["sourceDocumentIds"]):
            raise RuntimeError(f"OCR source leaked into digital bank: {item['id']}")

    importer.write_outputs(manifest, items, rows)
    print(json.dumps(manifest["stats"], ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
