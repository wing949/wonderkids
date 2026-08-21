# -*- coding: utf-8 -*-
import json
import re
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

WORKSPACE_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"
REPORT_PATH = r"C:\Users\TVCHUONG\.gemini\antigravity\brain\5459c139-ea01-454d-8f01-8b2b7e516ce3\comprehensive_132_audit_report.md"

with open(os.path.join(WORKSPACE_DIR, 'src', 'data', 'curriculum', 'vietnamese', 'readingPassages.ts'), 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'export const VIETNAMESE_READING_PASSAGES:\s*Record<string,\s*ReadingLessonBundle>\s*=\s*(\{[\s\S]*?\n\};)', text)
data = json.loads(m.group(1).rstrip(';'))

results = {
    'g1': {'grade': 'Tiếng Việt Lớp 1 (30 bài)', 'items': []},
    'g2': {'grade': 'Tiếng Việt Lớp 2 (30 bài)', 'items': []},
    'g3': {'grade': 'Tiếng Việt Lớp 3 (25 bài)', 'items': []},
    'g4': {'grade': 'Tiếng Việt Lớp 4 (22 bài)', 'items': []},
    'g5': {'grade': 'Tiếng Việt Lớp 5 (25 bài)', 'items': []}
}

for k, v in data.items():
    g = k.split('-')[1]
    p = v['passage']
    title = p['title']
    author = p.get('author', 'Không rõ')
    content = p.get('content', [])
    full_text = " ".join(content)
    word_count = len(full_text.split())
    vocab = [item['word'] for item in p.get('vocabularyNotes', [])]
    source_detail = v.get('sourceDetail', '')
    
    # Analyze authenticity
    # Grade 1: 1-20 are phonetic syllabus bundles; 21-30 are semester 2 reading texts
    if g == 'g1':
        num = int(k.split('-b')[-1])
        if num <= 20:
            status_code = 'FORMAT_PHONETIC'
            status_label = '⚠️ Mô hình Âm - Vần (Rút gọn)'
            details = 'Bài học tổng hợp âm/vần và câu nhận biết ngắn. Không phải bài đọc văn bản dài của SGK.'
        elif num == 21: # Tôi là học sinh lớp 1
            status_code = 'AUTHENTIC'
            status_label = '✅ Nguyên văn 100% SGK'
            details = 'Đã khôi phục 100% nguyên văn bài đọc của tác giả Trung Sơn (Tr. 10, 11 SGK Tập hai).'
        else:
            status_code = 'AI_GENERATED'
            status_label = '❌ AI Tự sinh / Tóm tắt sai nguyên văn'
            details = f'Bài đọc {title} (Tác giả: {author}) hiện đang là đoạn văn do AI tự tóm tắt/tự sáng tác, chưa chép đúng nguyên văn từng câu chữ trong bản in SGK.'
    else:
        # Grade 2-5 checks
        # Let's see if the content is short/summarized or full authentic
        # In primary school:
        # Grade 2 prose is 100-150 words.
        # Grade 3 prose is 150-200 words.
        # Grade 4 prose is 250-350 words.
        # Grade 5 prose is 300-450 words.
        # Poems have specific stanzas.
        is_generic_author = author in ['Không rõ', 'Sách Giáo Khoa GDPT 2018', 'WonderKids', 'Đồng dao Việt Nam', 'Truyện dân gian Việt Nam', 'Truyện ngụ ngôn']
        is_short_prose = p.get('genre') in ['prose', 'story'] and word_count < 100 and g in ['g3', 'g4', 'g5']
        
        if is_generic_author or is_short_prose:
            status_code = 'AI_GENERATED_OR_PARAPHRASED'
            status_label = '❌ AI Tự tóm tắt / Tự sinh'
            details = f'Nội dung đang ở dạng đoạn văn tóm tắt ngắn ({word_count} từ), chưa chép đủ toàn văn các đoạn đọc/hội thoại của SGK.'
        elif p.get('genre') == 'poem':
            status_code = 'POEM_PARTIAL'
            status_label = '⚠️ Thơ trích đoạn (Cần check đủ khổ)'
            details = f'Đã có thơ của tác giả {author} ({len(content)} khổ), cần đối chiếu số khổ thơ với bản in SGK.'
        else:
            status_code = 'NEEDS_FULL_VERIFICATION'
            status_label = '⚠️ Cần đối chiếu nguyên văn PDF'
            details = f'Có tác giả {author}, độ dài {word_count} từ, cần rà soát lại từng từ ngữ và lời thoại.'
            
    results[g]['items'].append({
        'id': k,
        'title': title,
        'author': author,
        'genre': p.get('genre', 'prose'),
        'word_count': word_count,
        'vocab': ", ".join(vocab),
        'status_label': status_label,
        'status_code': status_code,
        'details': details,
        'sample': content[0] if content else ''
    })

# Output markdown artifact
md = ["# 📊 BẢNG RÀ SOÁT TÍNH NGUYÊN VĂN & NGUỒN GỐC TOÀN BỘ 132 BÀI ĐỌC TIẾNG VIỆT (LỚP 1 - 5)\n"]
md.append("> **Mục tiêu**: Báo cáo trung thực, chi tiết từng bài trong số 132 bài đọc xem bài nào là **Nguyên văn SGK**, bài nào đang bị **AI tự sinh / tóm tắt / viết lại** mà không đúng với bản in `taphuan.nxbgd.vn`.\n")

for g, gdata in results.items():
    md.append(f"\n## 📖 {gdata['grade']}\n")
    md.append("| STT | Mã Bài | Tên Bài Học | Tác Giả Ghi Nhận | Thể Loại & Độ Dài | Tình Trạng Hiện Tại | Đánh Giá Chi Tiết |")
    md.append("| :---: | :---: | :--- | :--- | :---: | :---: | :--- |")
    for idx, it in enumerate(gdata['items'], 1):
        md.append(f"| {idx} | `{it['id']}` | **{it['title']}** | {it['author']} | {it['genre']} ({it['word_count']} từ) | {it['status_label']} | {it['details']} |")

with open(REPORT_PATH, 'w', encoding='utf-8') as f:
    f.write("\n".join(md))

print(f"✅ Đã xuất báo cáo chi tiết ra: {REPORT_PATH}")

# Print summary stats to console
print("\n=== THỐNG KÊ TỔNG HỢP TOÀN BỘ 132 BÀI ĐỌC ===")
total = sum(len(x['items']) for x in results.values())
for g, gdata in results.items():
    items = gdata['items']
    c_auth = sum(1 for x in items if '✅' in x['status_label'])
    c_gen = sum(1 for x in items if '❌' in x['status_label'])
    c_part = sum(1 for x in items if '⚠️' in x['status_label'])
    print(f"• {gdata['grade']}: Tổng {len(items)} bài -> [Nguyên văn chuẩn: {c_auth}] | [AI Tự sinh/Tóm tắt: {c_gen}] | [Trích đoạn/Cần rà soát: {c_part}]")
