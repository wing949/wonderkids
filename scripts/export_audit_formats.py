import json
import csv
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('docs/vietnamese_curriculum_audit_report.md', 'r', encoding='utf-8') as f:
    txt = f.read()

# Generate CSV
with open('scripts/all_passages_detailed_list.json', 'r', encoding='utf-8') as f:
    passages = json.load(f)
p_map = {p['id']: p for p in passages}

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

all_rows = []
for g in range(1, 6):
    with open(f'src/data/curriculum/vietnamese/grade{g}.ts', 'r', encoding='utf-8') as f:
        txt = f.read()
    
    entries = txt.split('{\n    "id": "')
    for e in entries[1:]:
        tid = "tv-g" + e.split('"', 1)[0]
        
        import re
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
        
        is_supplement = (
            stype == 'pedagogical_supplement' or 
            'đấu trường' in title.lower() or 
            'trạng nguyên' in title.lower() or 
            'wonderkids' in sbook.lower()
        )
        
        link = reader_links.get((g, sem), '') if not is_supplement else ''
        
        all_rows.append({
            'Khoi_Lop': f'Lớp {g}',
            'Hoc_Ky': f'Học kỳ {sem}',
            'Ma_Bai': tid,
            'STT': num,
            'Ten_Bai_Hoc': title,
            'Chu_De_Unit': unit,
            'Phan_Loai_Nguon': 'NỘI DUNG TỰ SINH (WonderKids Bổ Trợ)' if is_supplement else 'SGK CHUẨN GDPT 2018',
            'Bo_Sach': 'WonderKids' if is_supplement else 'SGK Tiếng Việt — NXB Giáo Dục Việt Nam',
            'Tap_Trang_Doi_Chieu': 'Nội dung tự sinh' if is_supplement else page,
            'Link_Doc_Truc_Tuyen': link
        })

# Write CSV
with open('docs/vietnamese_curriculum_audit.csv', 'w', encoding='utf-8-sig', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=list(all_rows[0].keys()))
    writer.writeheader()
    writer.writerows(all_rows)

# Write JSON
with open('docs/vietnamese_curriculum_audit.json', 'w', encoding='utf-8') as f:
    json.dump(all_rows, f, ensure_ascii=False, indent=2)

print("Exported CSV & JSON to docs/!")
