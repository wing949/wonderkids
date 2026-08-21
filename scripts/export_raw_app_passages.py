import json
import re
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('src/data/curriculum/vietnamese/readingPassages.ts', 'r', encoding='utf-8') as f:
    rp_text = f.read()

entries = re.split(r'\n  "(tv-g\d+-b\d+)":\s*\{', rp_text)

lessons = []
for i in range(1, len(entries), 2):
    pid = entries[i]
    pbody = entries[i+1]
    
    title_m = re.search(r'"title":\s*"([^"]*)"', pbody)
    author_m = re.search(r'"author":\s*"([^"]*)"', pbody)
    source_detail_m = re.search(r'"sourceDetail":\s*"([^"]*)"', pbody)
    
    # Extract content array lines
    content_match = re.search(r'"content":\s*\[([\s\S]*?)\]', pbody)
    paras = []
    if content_match:
        paras = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', content_match.group(1))
        paras = [p.replace('\\"', '"').replace('\\n', ' ') for p in paras]
    
    lessons.append({
        'id': pid,
        'title': title_m.group(1) if title_m else '',
        'author': author_m.group(1) if author_m else '',
        'sourceDetail': source_detail_m.group(1) if source_detail_m else '',
        'content': paras
    })

# Write to plain text file for direct manual inspection
output_file = 'docs/noi_dung_bai_doc_thuc_te_trong_app.txt'
with open(output_file, 'w', encoding='utf-8') as f:
    f.write("================================================================================\n")
    f.write("BẢNG TRÍCH XUẤT TOÀN BỘ NGỮ LIỆU BÀI ĐỌC THỰC TẾ ĐANG LƯU TRONG MÃ NGUỒN APP\n")
    f.write("Dùng để rà soát, đối chiếu thực tế từng bài với Sách Giáo Khoa\n")
    f.write("Tệp mã nguồn gốc: src/data/curriculum/vietnamese/readingPassages.ts\n")
    f.write("================================================================================\n\n")
    
    for l in lessons:
        f.write(f"--------------------------------------------------------------------------------\n")
        f.write(f"MÃ BÀI: {l['id']}\n")
        f.write(f"TÊN BÀI: {l['title']}\n")
        f.write(f"TÁC GIẢ GHI TRONG APP: {l['author']}\n")
        f.write(f"NGUỒN ĐỐI CHIẾU: {l['sourceDetail']}\n")
        f.write(f"NỘI DUNG VĂN BẢN THỰC TẾ TRONG APP:\n")
        for idx, p in enumerate(l['content'], 1):
            f.write(f"  [Đoạn {idx}] {p}\n")
        f.write("\n")

print(f"Exported {len(lessons)} lessons to {output_file}")
