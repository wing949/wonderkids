import json
import os

with open(r'reports/violympic_scanned_ocr_filter.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

scanned = data['scanned_docs']
digital = data['digital_docs']

# Organize by Grade and Subject
def categorize_subject(name, path):
    full = (name + " " + path).lower()
    if 'tiếng việt' in full or 'tieng viet' in full or 'tv' in full:
        return 'Tiếng Việt'
    if 'toán tiếng anh' in full or 'toan tieng anh' in full or 'tta' in full or 'math english' in full:
        return 'Toán Tiếng Anh'
    return 'Toán'

report_lines = []
report_lines.append("# BÁO CÁO PHÂN LOẠI TÀI LIỆU VIOLYMPIC CẦN OCR (LỚP 1 - 5)")
report_lines.append(f"\n- **Thư mục nguồn**: `C:\\Users\\TVCHUONG\\Desktop\\AI\\06_eLearning\\refer\\Violympic`")
report_lines.append(f"- **Tổng số tài liệu quét được (Lớp 1 - 5)**: {len(scanned) + len(digital)} tệp")
report_lines.append(f"- **Tài liệu dạng SCAN / ẢNH (Bắt buộc OCR)**: **{len(scanned)} tệp**")
report_lines.append(f"- **Tài liệu đã có Text số hóa trực tiếp (Copyable/Không cần OCR)**: **{len(digital)} tệp**\n")

report_lines.append("## 1. BẢNG TỔNG HỢP TÀI LIỆU SCAN CẦN OCR THEO KHỐI LỚP\n")
report_lines.append("| Khối Lớp | Môn Học | Tên Tệp / Tài Liệu | Định Dạng | Số Trang | Dung Lượng | Đường Dẫn Tương Đối |")
report_lines.append("| :--- | :--- | :--- | :---: | :---: | :---: | :--- |")

for doc in scanned:
    grades_str = ", ".join(f"Lớp {g}" for g in doc.get('grades', []))
    subj = categorize_subject(doc['file_name'], doc['rel_path'])
    pinfo = doc.get('pdf_info')
    pages = pinfo.get('total_pages', 1) if pinfo else 1
    ext = doc['ext']
    size = f"{doc['size_mb']} MB"
    name = doc['file_name']
    rel = doc['rel_path'].replace('\\', '/')
    report_lines.append(f"| **{grades_str}** | {subj} | `{name}` | {ext} | {pages} | {size} | `{rel}` |")

report_lines.append("\n---\n")
report_lines.append("## 2. PHÂN NHÓM CHI TIẾT TÀI LIỆU SCAN CẦN OCR\n")

grade_groups = {1: [], 2: [], 3: [], 4: [], 5: []}
for doc in scanned:
    for g in doc.get('grades', []):
        if g in grade_groups:
            grade_groups[g].append(doc)

for g in range(1, 6):
    docs = grade_groups[g]
    report_lines.append(f"### 📘 KHỐI LỚP {g} ({len(docs)} tài liệu scan/ảnh)")
    if not docs:
        report_lines.append("*Không có tài liệu scan riêng cho khối lớp này.*\n")
        continue
        
    for i, d in enumerate(docs, 1):
        subj = categorize_subject(d['file_name'], d['rel_path'])
        pinfo = d.get('pdf_info')
        pages = pinfo.get('total_pages', 1) if pinfo else 1
        report_lines.append(f"{i}. **[{subj}]** `{d['file_name']}` ({pages} trang, {d['size_mb']} MB) — Đường dẫn: `{d['rel_path'].replace('\\', '/')}`")
    report_lines.append("")

report_lines.append("\n---\n")
report_lines.append("## 3. DANH SÁCH TÀI LIỆU ĐÃ CÓ VĂN BẢN TRỰC TIẾP (KHÔNG CẦN OCR)\n")
report_lines.append("| Khối Lớp | Tên Tệp | Số Trang | Dung Lượng |")
report_lines.append("| :--- | :--- | :---: | :---: |")
for doc in digital:
    grades_str = ", ".join(f"Lớp {g}" for g in doc.get('grades', []))
    pinfo = doc.get('pdf_info')
    pages = pinfo.get('total_pages', 1) if pinfo else 1
    report_lines.append(f"| {grades_str} | `{doc['file_name']}` | {pages} | {doc['size_mb']} MB |")

report_content = "\n".join(report_lines)
report_path = r"C:\Users\TVCHUONG\Desktop\AI\06_eLearning\reports\bao_cao_tai_lieu_violympic_can_ocr.md"
with open(report_path, "w", encoding="utf-8") as f:
    f.write(report_content)

print("Generated report:", report_path)
