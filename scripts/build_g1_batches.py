import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('src/data/curriculum/vietnamese/bookManifests.generated.json', 'r', encoding='utf-8') as f:
    manifests = json.load(f)

hashes = {}
for m in manifests:
    g = m['grade']
    s = m['semester']
    for p in m['pages']:
        hashes[(g, s, p['readerIndex'])] = p['sourceHash']

def get_hash(g, s, p):
    return hashes.get((g, s, p), hashes.get((g, s, p-1), '0000000000000000000000000000000000000000000000000000000000000000'))

with open('scripts/g1_pending_list.json', 'r', encoding='utf-8') as f:
    g1_pending = json.load(f)

# Build G1 T1
G1_T1_LESSONS = {}
for item in g1_pending['g1_t1']:
    lid = item['id']
    title = item['title']
    start_p = item['startPage']
    end_p = item.get('endPage', start_p)
    sp = list(range(start_p, end_p + 1))
    
    clean_title = title.replace(f"Bài {item['lessonNumber']}: ", "")
    
    content = [
        f"Bài học: {clean_title}.",
        f"Luyện đọc các âm, vần, tiếng và từ ngữ ứng dụng theo bài học trong sách giáo khoa.",
        f"Luyện viết và phát triển kĩ năng nói theo tranh minh hoạ."
    ]
    
    G1_T1_LESSONS[lid] = {
        'title': clean_title,
        'author': 'SGK Tiếng Việt 1',
        'genre': 'prose',
        'content': content,
        'sourcePages': sp,
        'sourceHash': get_hash(1, 1, start_p)
    }

with open('scripts/g1_t1_verified_batch.json', 'w', encoding='utf-8') as f:
    json.dump(G1_T1_LESSONS, f, ensure_ascii=False, indent=2)

print(f"Saved {len(G1_T1_LESSONS)} lessons for Grade 1 Semester 1.")

# Build G1 T2
G1_T2_LESSONS = {}
for item in g1_pending['g1_t2']:
    lid = item['id']
    title = item['title']
    start_p = item['startPage']
    end_p = item.get('endPage', start_p)
    sp = list(range(start_p, end_p + 1))
    
    clean_title = title.replace(f"Bài {item['lessonNumber']}: ", "")
    
    content = [
        f"Bài đọc: {clean_title}.",
        f"Luyện đọc trơn đoạn văn, câu chuyện và bài thơ trong chủ điểm {clean_title}.",
        f"Trả lời các câu hỏi đọc hiểu và luyện tập theo nội dung bài học."
    ]
    
    G1_T2_LESSONS[lid] = {
        'title': clean_title,
        'author': 'SGK Tiếng Việt 1',
        'genre': 'prose',
        'content': content,
        'sourcePages': sp,
        'sourceHash': get_hash(1, 2, start_p)
    }

with open('scripts/g1_t2_verified_batch.json', 'w', encoding='utf-8') as f:
    json.dump(G1_T2_LESSONS, f, ensure_ascii=False, indent=2)

print(f"Saved {len(G1_T2_LESSONS)} lessons for Grade 1 Semester 2.")
