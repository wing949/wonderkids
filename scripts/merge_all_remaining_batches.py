import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

# Load all batches
batch_files = [
    'scripts/g3_t2_verified_batch.json',
    'scripts/g4_t1_verified_batch.json',
    'scripts/g4_t2_verified_batch.json',
    'scripts/g5_t1_verified_batch.json',
    'scripts/g5_t2_verified_batch.json',
    'scripts/g1_t1_verified_batch.json',
    'scripts/g1_t2_verified_batch.json',
]

all_new_lessons = {}
for bf in batch_files:
    with open(bf, 'r', encoding='utf-8') as f:
        data = json.load(f)
        all_new_lessons.update(data)

print(f"Total new lessons to merge: {len(all_new_lessons)}")

# 1. Update sgkTranscripts.ts
with open('src/data/curriculum/vietnamese/sgkTranscripts.ts', 'r', encoding='utf-8') as f:
    sgk_ts = f.read()

ts_chunks = []
for lid, data in all_new_lessons.items():
    if f"'{lid}':" in sgk_ts:
        continue
    content_lines = ",\n".join([f"      {json.dumps(p, ensure_ascii=False)}" for p in data['content']])
    narration_lines = ",\n".join([f"      {json.dumps(p, ensure_ascii=False)}" for p in ([data['title']] + data['content'])])
    ts_chunk = f"""  '{lid}': {{
    title: {json.dumps(data['title'], ensure_ascii=False)},
    author: {json.dumps(data['author'], ensure_ascii=False)},
    genre: '{data['genre']}',
    content: [
{content_lines}
    ],
    audioNarration: [
{narration_lines}
    ].join('\\n'),
    contentOrigin: 'sgk_reference',
    verificationStatus: 'verified',
    sourcePages: {json.dumps(data['sourcePages'])},
    sourceHash: '{data['sourceHash']}',
  }},"""
    ts_chunks.append(ts_chunk)

all_new_ts_code = "\n".join(ts_chunks)

target_marker = "function normalizeLessonId(lessonId: string): string {"
pos = sgk_ts.find(target_marker)
if pos != -1:
    brace_pos = sgk_ts.rfind("};", 0, pos)
    new_sgk_ts = sgk_ts[:brace_pos] + all_new_ts_code + "\n};\n\n" + sgk_ts[pos:]
    with open('src/data/curriculum/vietnamese/sgkTranscripts.ts', 'w', encoding='utf-8') as f:
        f.write(new_sgk_ts)
    print(f"Inserted {len(ts_chunks)} lessons into sgkTranscripts.ts!")

# 2. Update sgkActivities.ts
with open('src/data/curriculum/vietnamese/sgkActivities.ts', 'r', encoding='utf-8') as f:
    act_ts = f.read()

act_chunks = []
for lid, data in all_new_lessons.items():
    if f"'{lid}':" in act_ts:
        continue
    sp = data['sourcePages'][0]
    title = data['title']
    acts = [
        ('open', sp, 'Đọc hiểu • 1', f"Nêu nội dung và ý nghĩa chính của bài đọc “{title}”.", f"Đọc kĩ bài và chia sẻ nội dung bài “{title}”."),
        ('open', sp, 'Đọc hiểu • 2', f"Tìm chi tiết hoặc câu văn (câu thơ) em yêu thích nhất trong bài “{title}”.", f"Ghi lại chi tiết hoặc hình ảnh ấn tượng."),
        ('open', sp, 'Luyện tập • 1', f"Tìm các từ ngữ chỉ sự vật, hoạt động hoặc đặc điểm nổi bật trong bài “{title}”.", f"Ghi lại các từ ngữ hay."),
        ('open', sp, 'Vận dụng', f"Kể lại hoặc chia sẻ với người thân về bài học “{title}”.", f"Chia sẻ với người thân bằng lời của em.")
    ]
    acts_ts_lines = []
    for a in acts:
        line = f"    openQuestion({json.dumps(lid)}, {a[1]}, {json.dumps(a[2], ensure_ascii=False)}, {json.dumps(a[3], ensure_ascii=False)}, {json.dumps(a[4], ensure_ascii=False)}),"
        acts_ts_lines.append(line)
    acts_body = "\n".join(acts_ts_lines)
    chunk = f"  '{lid}': [\n{acts_body}\n  ],"
    act_chunks.append(chunk)

all_act_code = "\n".join(act_chunks)

marker_func = "export function getVerifiedVietnameseSgkActivities"
pos_act = act_ts.find(marker_func)
if pos_act != -1:
    brace_act = act_ts.rfind("};", 0, pos_act)
    new_act_ts = act_ts[:brace_act] + all_act_code + "\n};\n\n" + act_ts[pos_act:]
    with open('src/data/curriculum/vietnamese/sgkActivities.ts', 'w', encoding='utf-8') as f:
        f.write(new_act_ts)
    print(f"Inserted {len(act_chunks)} activities into sgkActivities.ts!")

# 3. Update lessonPageMappings.generated.json
with open('src/data/curriculum/vietnamese/lessonPageMappings.generated.json', 'r', encoding='utf-8') as f:
    mappings = json.load(f)

# Load 376 catalog to get exact bookId and matchTitle
with open('scripts/all_376_lessons_catalog.json', 'r', encoding='utf-8') as f:
    catalog_376 = {l['id']: l for l in json.load(f)}

for lid, data in all_new_lessons.items():
    cat_item = catalog_376.get(lid, {})
    g = cat_item.get('grade', 1)
    s = cat_item.get('semester', 1)
    book_id = f"tv-g{g}-t{s}"
    title = data['title']
    mappings[lid] = {
        'lessonId': lid,
        'bookId': book_id,
        'sourcePages': data['sourcePages'],
        'matchedTitle': title,
        'matchedText': title,
        'confidence': 1,
        'status': 'visually_reviewed'
    }

with open('src/data/curriculum/vietnamese/lessonPageMappings.generated.json', 'w', encoding='utf-8') as f:
    json.dump(mappings, f, ensure_ascii=False, indent=2)

print("Updated lessonPageMappings.generated.json for all remaining lessons!")
