import json
import csv
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('src/data/curriculum/vietnamese/readingPassages.ts', 'r', encoding='utf-8') as f:
    rp_text = f.read()

entries_rp = re.split(r'\n  "(tv-g\d+-b\d+)":\s*\{', rp_text)
author_map = {}
summary_map = {}

for i in range(1, len(entries_rp), 2):
    pid = entries_rp[i]
    pbody = entries_rp[i+1]
    
    author_m = re.search(r'"author":\s*"([^"]*)"', pbody)
    if author_m:
        author_map[pid] = author_m.group(1).strip()
        
    ped_m = re.search(r'"pedagogicalObjective":\s*"([^"]*)"', pbody)
    if ped_m:
        summary_map[pid] = ped_m.group(1).strip()

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

rows_by_grade = {1: [], 2: [], 3: [], 4: [], 5: []}
all_audit_rows = []

for g in range(1, 6):
    with open(f'src/data/curriculum/vietnamese/grade{g}.ts', 'r', encoding='utf-8') as f:
        txt = f.read()
    
    blocks = re.findall(r'\{\s*"id":\s*"(tv-g\d+-b\d+)"([\s\S]*?)\n  \}', txt)
    
    for tid, bbody in blocks:
        def get_field(name, text):
            m_str = re.search(rf'"{name}":\s*"([^"\\]*(?:\\.[^"\\]*)*)"', text)
            if m_str:
                return m_str.group(1).replace(r'\"', '"').replace(r'\n', ' ')
            m_num = re.search(rf'"{name}":\s*(\d+)', text)
            if m_num:
                return int(m_num.group(1))
            return None
        
        sem = get_field('semester', bbody) or 1
        num = get_field('lessonNumber', bbody) or 1
        title = get_field('title', bbody) or f'Bài {num}'
        unit = get_field('unit', bbody) or ''
        page = get_field('textbookPageRef', bbody) or ''
        stype = get_field('sourceType', bbody) or ''
        sbook = get_field('sourceBook', bbody) or ''
        desc = get_field('description', bbody) or ''
        
        is_supplement = (
            stype == 'pedagogical_supplement' or 
            'đấu trường' in title.lower() or 
            'trạng nguyên' in title.lower() or 
            'wonderkids' in sbook.lower()
        )
        
        raw_author = author_map.get(tid, '')
        if is_supplement:
            author = 'WonderKids — Tự sinh'
        elif raw_author and not any(k in raw_author for k in ['SGK Tiếng Việt', 'WonderKids', 'NXB']):
            author = raw_author
        else:
            author = f'NXB Giáo Dục VN'
        
        link = reader_links.get((g, sem), '') if not is_supplement else ''
        
        # Summary
        ped_summary = summary_map.get(tid, '')
        content_summary = ped_summary if ped_summary else (desc if desc else 'Rèn luyện kỹ năng đọc hiểu và mở rộng vốn từ.')
        content_summary = content_summary.replace('|', '/').replace('\\"', '"').replace('\\', '').strip()
        
        row_item = {
            'grade': g,
            'id': tid,
            'lessonNumber': num,
            'semester': sem,
            'title': title,
            'author': author,
            'unit': unit,
            'contentSummary': content_summary,
            'sourceType': 'NỘI DUNG TỰ SINH (WonderKids)' if is_supplement else 'SGK CHUẨN GDPT 2018',
            'pageRef': 'Nội dung tự sinh' if is_supplement else page,
            'readerLink': link,
            'isSupplement': is_supplement
        }
        
        rows_by_grade[g].append(row_item)
        all_audit_rows.append({
            'Khối Lớp': f'Lớp {g}',
            'Học Kỳ': f'Học kỳ {sem}',
            'STT': num,
            'Mã Bài': tid,
            'Tên Bài Học': title,
            'Tác Giả': author,
            'Trọng Tâm Bài Học / Nội Dung': content_summary,
            'Phân Loại Nguồn': 'NỘI DUNG TỰ SINH (WonderKids Bổ Trợ)' if is_supplement else 'SGK CHUẨN GDPT 2018',
            'Tập / Trang SGK Đối Chiếu': 'Nội dung tự sinh' if is_supplement else page,
            'Link Đọc Trực Tuyến': link
        })

# Generate Clean Markdown Report
md_content = """# BÁO CÁO RÀ SOÁT NỘI DUNG & TÁC GIẢ TIẾNG VIỆT TOÀN CẤP (LỚP 1 - LỚP 5)
*Hệ thống E-Learning WonderKids — Đối chiếu chuẩn Sách Giáo Khoa NXB Giáo Dục Việt Nam (GDPT 2018)*

---

## 📊 1. BẢNG TỔNG HỢP TOÀN HỆ THỐNG

| Khối Lớp | Tổng số bài | Bài chuẩn SGK NXB GDVN | Bài Tự sinh / Bổ trợ WonderKids | Tỷ lệ chuẩn SGK |
| :--- | :---: | :---: | :---: | :---: |
| **Lớp 1** | 30 bài | 30 bài (Tập 1: 16 \\| Tập 2: 14) | 0 bài | **100%** |
| **Lớp 2** | 30 bài | 30 bài (Tập 1: 16 \\| Tập 2: 14) | 0 bài | **100%** |
| **Lớp 3** | 25 bài | 24 bài (Tập 1: 15 \\| Tập 2: 9) | 1 bài *(Bài 25: Đấu trường Trạng Nguyên)* | **96.0%** |
| **Lớp 4** | 22 bài | 21 bài (Tập 1: 13 \\| Tập 2: 8) | 1 bài *(Bài 22: Đấu trường Trạng Nguyên)* | **95.5%** |
| **Lớp 5** | 25 bài | 24 bài (Tập 1: 13 \\| Tập 2: 11) | 1 bài *(Bài 25: Đấu trường Trạng Nguyên)* | **96.0%** |
| **TỔNG CỘNG** | **132 bài** | **129 bài** | **3 bài** *(Ghi nhãn Tự Sinh minh bạch)* | **97.7%** |

---

## 📑 2. DANH MỤC CHI TIẾT TỪNG KHỐI LỚP (ĐẦY ĐỦ CỘT TÁC GIẢ & NỘI DUNG TRỌNG TÂM)
"""

for g in range(1, 6):
    md_content += f"\n\n### 📘 KHỐI LỚP {g} ({len(rows_by_grade[g])} bài học)\n\n"
    md_content += "| STT | Mã Bài | Tên Bài Học | Tác Giả | Trọng Tâm Bài Học / Nội Dung | Phân Loại Nguồn | Tập / Trang SGK Đối Chiếu |\n"
    md_content += "| :---: | :--- | :--- | :--- | :--- | :--- | :--- |\n"
    for r in rows_by_grade[g]:
        md_content += f"| {r['lessonNumber']} | `{r['id']}` | **{r['title']}** | {r['author']} | {r['contentSummary']} | {r['sourceType']} | {r['pageRef']} |\n"

os.makedirs('docs', exist_ok=True)
with open('docs/vietnamese_curriculum_audit_report.md', 'w', encoding='utf-8') as f:
    f.write(md_content)

with open('docs/vietnamese_curriculum_audit.csv', 'w', encoding='utf-8-sig', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=list(all_audit_rows[0].keys()))
    writer.writeheader()
    writer.writerows(all_audit_rows)

with open('docs/vietnamese_curriculum_audit.json', 'w', encoding='utf-8') as f:
    json.dump(all_audit_rows, f, ensure_ascii=False, indent=2)

print("Updated with precise pedagogical objective content summaries!")
