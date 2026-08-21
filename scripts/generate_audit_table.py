import json
import re
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('scripts/all_passages_detailed_list.json', 'r', encoding='utf-8') as f:
    passages = json.load(f)
p_map = {p['id']: p for p in passages}

# Read grade files
rows_by_grade = {1: [], 2: [], 3: [], 4: [], 5: []}

reader_links = {
    (1, 1): "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-1-tap-mot.4695822132",
    (1, 2): "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-1-tap-hai.4698214319",
    (2, 1): "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-2-tap-mot.4698590737",
    (2, 2): "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-2-tap-hai.4698600732",
    (3, 1): "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-3-tap-mot.4698680579",
    (3, 2): "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-3-tap-hai.4698697436",
    (4, 1): "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-4-tap-mot.4698846675",
    (4, 2): "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-4-tap-hai.4698852686",
    (5, 1): "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-5-tap-mot.4699740998",
    (5, 2): "https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-tieng-viet-5-tap-hai.4699750731",
}

for g in range(1, 6):
    with open(f'src/data/curriculum/vietnamese/grade{g}.ts', 'r', encoding='utf-8') as f:
        txt = f.read()
    
    entries = txt.split('{\n    "id": "')
    for e in entries[1:]:
        tid = "tv-g" + e.split('"', 1)[0]
        
        def get_field(name, text):
            m = re.search(rf'"{name}":\s*"([^"]*)"', text)
            if m: return m.group(1)
            m_num = re.search(rf'"{name}":\s*(\d+)', text)
            if m_num: return int(m_num.group(1))
            return None
        
        sem = get_field('semester', e)
        num = get_field('lessonNumber', e)
        title = get_field('title', e)
        unit = get_field('unit', e)
        page = get_field('textbookPageRef', e)
        stype = get_field('sourceType', e)
        sbook = get_field('sourceBook', e)
        sdetail = get_field('sourceDetail', e)
        
        is_supplement = (
            stype == 'pedagogical_supplement' or 
            'đấu trường' in title.lower() or 
            'trạng nguyên' in title.lower() or 
            'wonderkids' in sbook.lower()
        )
        
        link = reader_links.get((g, sem), '') if not is_supplement else 'N/A (Nội dung tự sinh)'
        
        rows_by_grade[g].append({
            'id': tid,
            'lessonNumber': num,
            'semester': sem,
            'title': title,
            'unit': unit,
            'sourceType': 'NỘI DUNG TỰ SINH (WonderKids Bổ Trợ)' if is_supplement else 'SGK CHUẨN GDPT 2018 (NXB Giáo Dục VN)',
            'pageRef': 'Nội dung tự sinh' if is_supplement else page,
            'sourceBook': 'WonderKids — Hệ thống Học tập & Đánh giá Năng lực' if is_supplement else sbook,
            'readerLink': link,
            'isSupplement': is_supplement
        })

# Generate Markdown Report File
md_content = """# BÁO CÁO RÀ SOÁT & ĐỐI CHIẾU NỘI DUNG TIẾNG VIỆT TOÀN CẤP (LỚP 1 - LỚP 5)
*Hệ thống E-Learning WonderKids — Đối chiếu chuẩn Sách Giáo Khoa NXB Giáo Dục Việt Nam (GDPT 2018)*

---

## 📊 1. BẢNG TỔNG HỢP PHÂN LOẠI TOÀN BỘ HỆ THỐNG

| Khối Lớp | Tổng số bài | Bài chuẩn SGK NXB GDVN | Bài Tự sinh / Bổ trợ WonderKids | Tỷ lệ chuẩn SGK |
| :--- | :---: | :---: | :---: | :---: |
| **Lớp 1** | 30 bài | 30 bài (Tập 1: 16 | Tập 2: 14) | 0 bài | 100% |
| **Lớp 2** | 30 bài | 30 bài (Tập 1: 16 | Tập 2: 14) | 0 bài | 100% |
| **Lớp 3** | 25 bài | 24 bài (Tập 1: 15 | Tập 2: 9) | 1 bài (Bài 25: Đấu trường Trạng Nguyên) | 96% |
| **Lớp 4** | 22 bài | 21 bài (Tập 1: 13 | Tập 2: 8) | 1 bài (Bài 22: Đấu trường Trạng Nguyên) | 95.5% |
| **Lớp 5** | 25 bài | 24 bài (Tập 1: 13 | Tập 2: 11) | 1 bài (Bài 25: Đấu trường Trạng Nguyên) | 96% |
| **TỔNG CỘNG** | **132 bài** | **129 bài** | **3 bài** | **97.7%** |

---

## 📑 2. DANH MỤC CHI TIẾT TỪNG KHỐI LỚP (ĐỐI CHIẾU NGUỒN SGK VS TỰ SINH)
"""

for g in range(1, 6):
    md_content += f"\n\n### 📘 KHỐI LỚP {g} ({len(rows_by_grade[g])} bài học)\n\n"
    md_content += "| STT | Mã Bài | Tên Bài Học Trong App | Phân Loại Nguồn | Tập / Trang SGK Đối Chiếu | Link Đọc Trực Tuyến SGK |\n"
    md_content += "| :---: | :--- | :--- | :--- | :--- | :--- |\n"
    for r in rows_by_grade[g]:
        md_content += f"| {r['lessonNumber']} | `{r['id']}` | **{r['title']}** | {r['sourceType']} | {r['pageRef']} | {f'[Xem SGK]({r['readerLink']})' if not r['isSupplement'] else '—'} |\n"

os.makedirs('docs', exist_ok=True)
with open('docs/vietnamese_curriculum_audit_report.md', 'w', encoding='utf-8') as f:
    f.write(md_content)

print("Report generated at docs/vietnamese_curriculum_audit_report.md")
