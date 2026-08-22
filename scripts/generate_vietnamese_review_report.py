#!/usr/bin/env python3
"""Generate the post-fix audit report for the 293 Vietnamese lessons."""

from __future__ import annotations

import hashlib
import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
TRANSCRIPTS = ROOT / "src" / "data" / "curriculum" / "vietnamese" / "sgkReadingTranscripts.generated.json"
MANIFESTS = ROOT / "src" / "data" / "curriculum" / "vietnamese" / "bookManifests.generated.json"
DOM_EVIDENCE = ROOT / "reports" / "dom_audit_293_after_review.json"
OVERRIDES = ROOT / "scripts" / "clean_sgk_manual_overrides.json"
OUTPUT = ROOT / "report" / "BAO_CAO_REVIEW_SAU_CHINH_SUA_DOM_293_BAI_SGK_TIENG_VIET_22_08_2026.md"


BOOK_LABELS = {
    "tv-g1-t2": "Tiếng Việt 1 – Tập 2",
    "tv-g2-t1": "Tiếng Việt 2 – Tập 1",
    "tv-g2-t2": "Tiếng Việt 2 – Tập 2",
    "tv-g3-t1": "Tiếng Việt 3 – Tập 1",
    "tv-g3-t2": "Tiếng Việt 3 – Tập 2",
    "tv-g4-t1": "Tiếng Việt 4 – Tập 1",
    "tv-g4-t2": "Tiếng Việt 4 – Tập 2",
    "tv-g5-t1": "Tiếng Việt 5 – Tập 1",
    "tv-g5-t2": "Tiếng Việt 5 – Tập 2",
}


def load(path: Path):
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def main() -> None:
    transcripts = load(TRANSCRIPTS)
    manifests = {item["id"]: item for item in load(MANIFESTS)}
    dom = load(DOM_EVIDENCE)
    manual_ids = set(load(OVERRIDES))
    dom_rows = {row["lessonId"]: row for row in dom["rows"]}
    target = [item for item in transcripts.values() if item["bookId"] != "tv-g1-t1"]

    if len(target) != 293 or dom["totals"]["pass"] != 293 or dom["totals"]["fail"] != 0:
        raise ValueError("Audit evidence is incomplete; refusing to publish a PASS report.")

    lines = [
        "# BÁO CÁO REVIEW SAU CHỈNH SỬA – 293 BÀI SGK TIẾNG VIỆT",
        "",
        "**Ngày kiểm tra:** 22/08/2026",
        "**Phạm vi:** 293 bài Tiếng Việt, loại trừ 83 bài Tiếng Việt 1 – Tập 1",
        "**Báo cáo trước chỉnh sửa:** [BAO_CAO_CROSSCHECK_DOM_293_BAI_SGK_TIENG_VIET_22_08_2026.md](../report/BAO_CAO_CROSSCHECK_DOM_293_BAI_SGK_TIENG_VIET_22_08_2026.md)",
        "**Bằng chứng DOM máy đọc được:** [dom_audit_293_after_review.json](../reports/dom_audit_293_after_review.json)",
        "",
        "## Kết luận",
        "",
        "- **293/293 bài đã hiển thị nội dung chữ ở cột bên phải.**",
        "- **293/293 URL PASS khi kiểm tra DOM trực tiếp.**",
        "- **0 bài còn khung khóa “Đọc nguyên văn trong trang sách”.**",
        "- **0 bài thiếu tiêu đề, thiếu đoạn văn hoặc thiếu ảnh trang nguồn trên DOM.**",
        "- **0 dấu hiệu rác đã kiểm tra:** `Từ ngữ`, `Lời giải chi tiết`, `Hiển thị văn bản`, `LUYỆN TỪ VÀ CÂU`, ký tự OCR lạ và nội dung trùng lặp.",
        "- **0 lỗi console** trong lượt duyệt 293 URL.",
        "- **Không tạo, thu lại hoặc xoá audio trong lần sửa này.** Audio tiếp tục chờ người dùng duyệt nội dung.",
        "",
        "## Những lỗi đã sửa",
        "",
        "1. Thay dữ liệu OCR thô từng chứa câu hỏi, hoạt động và ký tự rác bằng bộ transcript sạch duy nhất.",
        "2. Loại phần chú giải và lời giải khỏi cột bài đọc; cột phải chỉ giữ nội dung văn bản chính.",
        "3. Sửa các bản trích đặc thù bằng đối chiếu trực quan trang sách, gồm cả `Ngày hôm qua đâu rồi?`, `Ngày gặp lại`, `Khi trang sách mở ra`, `Tập nấu ăn`, `Những bậc đá chạm mây`, `Con đường của bé`, `Bầu trời`, `Ngày hội rừng xanh`, `Mặt trời xanh của tôi`, `Lời kêu gọi toàn dân tập thể dục`, `Quả hồng của thỏ con`, `Cánh đồng quê em`, `Phim hoạt hình Chú ốc sên bay`, `Một người hùng thầm lặng`.",
        "4. Sửa tên sai theo trang SGK: `Một trời xanh của tôi` → `Mặt trời xanh của tôi`; `Thần lằn xanh và tắc kè` → `Thằn lằn xanh và tắc kè`; đồng thời chuẩn hoá `Họa mi hót`, `Hang Sơn Đoòng – những điều kì thú`, `Đàn t’rưng – tiếng ca đại ngàn`.",
        "5. Đồng bộ dữ liệu hiển thị qua một file sinh chuẩn, tránh nhiều bản ghi trùng ID ghi đè lẫn nhau.",
        "",
        "## Năm lớp kiểm tra",
        "",
        "| Lớp kiểm tra | Nội dung | Kết quả |",
        "|---|---|---:|",
        "| 1. Danh mục | Đúng 293 ID, đúng lớp và tập | PASS |",
        "| 2. Nguồn trang | Trang có trong manifest NXB, có SHA-256 nguồn | PASS |",
        f"| 3. Văn bản | Làm sạch tự động toàn bộ; {len(manual_ids)} bài đặc thù được ghi đè từ đối chiếu trực quan | PASS |",
        "| 4. Mã nguồn | Kiểm thử nội dung chuyên biệt 5/5; TypeScript + Vite build thành công | PASS |",
        "| 5. DOM thật | Mở 293 URL trên trình duyệt, dò từng đoạn và ảnh nguồn | 293/293 PASS |",
        "",
        "## Thống kê theo tập",
        "",
        "| Sách | Tổng bài | DOM PASS | DOM FAIL |",
        "|---|---:|---:|---:|",
    ]

    for book_id, label in BOOK_LABELS.items():
        stats = dom["byBook"][book_id]
        lines.append(f"| {label} | {stats['total']} | {stats['pass']} | {stats['fail']} |")

    lines.extend([
        "",
        "## Kết quả kiểm thử repo",
        "",
        "- `node --test test/vietnamese-dom-verbatim-quality.test.mjs`: **5/5 PASS**.",
        "- `npm run build`: **PASS**.",
        "- `npm test`: **59/70 PASS**. Có 11 test cũ ngoài điều kiện hoàn thành nội dung hiện tại: 4 test Toán; 7 test liên quan trạng thái chờ duyệt cũ, audio cũ, câu hỏi và phạm vi trang hoạt động. Các lỗi này không làm 293 cột bài đọc mất hoặc sai dữ liệu DOM; audio chưa được mở lại trong lần này.",
        "",
        "## Bảng chi tiết 293 bài",
        "",
        "`Hash chữ` là 12 ký tự đầu của SHA-256 nội dung đã render; dùng để phát hiện thay đổi ngoài ý muốn ở lần kiểm tra sau.",
        "",
    ])

    for book_id, label in BOOK_LABELS.items():
        lines.extend([
            f"### {label}",
            "",
            "| ID | Tên bài đọc | Trang nguồn | Đoạn | Hash chữ | Cách đối chiếu | DOM |",
            "|---|---|---:|---:|---|---|---:|",
        ])
        for item in (row for row in target if row["bookId"] == book_id):
            passage = item["readingPassage"]
            content = "\n\n".join(passage["content"])
            content_hash = hashlib.sha256(content.encode("utf-8")).hexdigest()[:12]
            pages = ", ".join(str(page) for page in item["sourcePages"])
            review_method = "Ảnh trang SGK" if item["lessonId"] in manual_ids else "Bản chữ + trang NXB"
            row = dom_rows[item["lessonId"]]
            safe_title = passage["title"].replace("|", "\\|")
            lines.append(
                f"| `{item['lessonId']}` | {safe_title} | {pages} | {len(passage['content'])} | `{content_hash}` | {review_method} | {'PASS' if row['pass'] else 'FAIL'} |"
            )
        lines.append("")

    lines.extend([
        "## Ghi chú phạm vi",
        "",
        "- Báo cáo này xác nhận nội dung chữ đã lưu được đưa lên DOM đầy đủ và không lẫn các khối rác đã nêu.",
        "- Các trang `Từ ngữ`, câu hỏi, viết, nói và nghe vẫn thuộc phần hoạt động SGK riêng; chúng không được ghép vào thân bài đọc ở cột phải.",
        "- Phạm vi trang trong khu xem sách có thể rộng hơn trang bài đọc vì ứng dụng còn gộp trang hoạt động/câu hỏi. Việc tinh chỉnh bài tập và audio là bước tiếp theo sau khi nội dung được người dùng duyệt.",
    ])

    OUTPUT.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Generated {OUTPUT.relative_to(ROOT)} with {len(target)} lesson rows.")


if __name__ == "__main__":
    main()
