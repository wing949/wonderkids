import json

with open('scripts/enriched_sgk_links.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

lines = []
lines.append("=" * 80)
lines.append("BỘ SÁCH GIÁO KHOA THỐNG NHẤT (NXB GIÁO DỤC VIỆT NAM) - LỚP 1 ĐẾN LỚP 5")
lines.append("Môn: Tiếng Việt, Toán, Tiếng Anh (Global Success)")
lines.append("Nguồn: https://taphuan.nxbgd.vn/tap-huan?grade=")
lines.append("=" * 80)
lines.append("")

# Filter definitions for Bộ Thống Nhất
for grade in range(1, 6):
    grade_key = f"Lớp {grade}"
    g_data = data.get(grade_key, {})
    
    lines.append(f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    lines.append(f"📘 {grade_key.upper()}")
    lines.append(f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    lines.append("")
    
    # 1. Tiếng Việt
    lines.append("--- 1. MÔN TIẾNG VIỆT ---")
    tv_books = g_data.get("Tiếng Việt", [])
    # Filter only bộ thống nhất (Bộ chính, không lấy sách VBT / bản Chân trời)
    tv_thong_nhat = [b for b in tv_books if "vbt" not in b.get("reader_url", "") and "shs" not in b.get("reader_url", "")][:2]
    for b in tv_thong_nhat:
        lines.append(f"• {b['title']}")
        lines.append(f"  + Link Chi tiết sách : {b['detail_url']}")
        lines.append(f"  + Link Đọc trực tuyến: {b['reader_url']}")
    lines.append("")
    
    # 2. Toán
    lines.append("--- 2. MÔN TOÁN ---")
    toan_books = g_data.get("Toán", [])
    toan_thong_nhat = [b for b in toan_books if "vbt" not in b.get("reader_url", "") and "shs" not in b.get("reader_url", "")][:2]
    for b in toan_thong_nhat:
        lines.append(f"• {b['title']}")
        lines.append(f"  + Link Chi tiết sách : {b['detail_url']}")
        lines.append(f"  + Link Đọc trực tuyến: {b['reader_url']}")
    lines.append("")
    
    # 3. Tiếng Anh (Global Success)
    lines.append("--- 3. MÔN TIẾNG ANH (GLOBAL SUCCESS) ---")
    ta_books = g_data.get("Tiếng Anh", [])
    ta_thong_nhat = [b for b in ta_books if "global" in b['title'].lower() or "global" in b.get("detail_url", "").lower()]
    for b in ta_thong_nhat:
        lines.append(f"• {b['title']}")
        lines.append(f"  + Link Chi tiết sách : {b['detail_url']}")
        lines.append(f"  + Link Đọc trực tuyến: {b['reader_url']}")
    lines.append("")
    lines.append("")

output_text = "\n".join(lines)

with open('sgk_bo_thong_nhat_lop_1_den_5.txt', 'w', encoding='utf-8') as f:
    f.write(output_text)

print("Generated sgk_bo_thong_nhat_lop_1_den_5.txt successfully!")
