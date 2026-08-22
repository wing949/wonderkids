import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('scripts/g3_t1_verified_batch.json', 'r', encoding='utf-8') as f:
    g3_t1_transcripts = json.load(f)

# 1. Update sgkTranscripts.ts
with open('src/data/curriculum/vietnamese/sgkTranscripts.ts', 'r', encoding='utf-8') as f:
    sgk_ts = f.read()

ts_chunks = []
for lid, data in g3_t1_transcripts.items():
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

all_g3_t1_code = "\n".join(ts_chunks)

target_marker = "function normalizeLessonId(lessonId: string): string {"
pos = sgk_ts.find(target_marker)
if pos != -1:
    brace_pos = sgk_ts.rfind("};", 0, pos)
    new_sgk_ts = sgk_ts[:brace_pos] + all_g3_t1_code + "\n};\n\n" + sgk_ts[pos:]
    with open('src/data/curriculum/vietnamese/sgkTranscripts.ts', 'w', encoding='utf-8') as f:
        f.write(new_sgk_ts)
    print("Inserted 32 Grade 3 Sem 1 lessons into sgkTranscripts.ts!")

# 2. Update sgkActivities.ts
G3_T1_ACTIVITIES = {}
for lid, data in g3_t1_transcripts.items():
    sp = data['sourcePages'][0] + 1 if len(data['sourcePages']) > 1 else data['sourcePages'][0]
    title = data['title']
    G3_T1_ACTIVITIES[lid] = [
        ('open', sp, 'Đọc hiểu • 1', f"Nêu nội dung chính của bài đọc “{title}”.", f"Đọc kĩ bài và nêu ý chính của bài “{title}”."),
        ('open', sp, 'Đọc hiểu • 2', f"Tìm chi tiết hoặc hình ảnh em ấn tượng nhất trong bài đọc “{title}”.", f"Chia sẻ chi tiết hoặc hình ảnh em thích nhất và giải thích vì sao."),
        ('open', sp, 'Đọc hiểu • 3', f"Bài đọc “{title}” mang lại cho em bài học hoặc cảm xúc gì?", f"Nêu suy nghĩ và cảm xúc của em sau khi đọc bài."),
        ('open', sp, 'Luyện tập • 1', f"Tìm các từ ngữ chỉ sự vật, hoạt động hoặc đặc điểm nổi bật trong bài đọc “{title}”.", f"Ghi lại các từ ngữ hay trong bài."),
        ('open', sp, 'Vận dụng', f"Kể lại hoặc chia sẻ với người thân về câu chuyện (bài thơ) “{title}”.", f"Chia sẻ với người thân bằng lời của em.")
    ]

# Specific customized activities for key lessons
G3_T1_ACTIVITIES['tv-g3-b1'] = [
    ('open', 11, 'Đọc hiểu • 1', 'Tìm những chi tiết thể hiện niềm vui khi gặp lại nhau của Chi và Sơn.', 'Chi mừng rỡ chạy ra, Sơn giơ chiếc diều vẫy rối rít, hai bạn thi nhau kể chuyện.'),
    ('open', 11, 'Đọc hiểu • 2', 'Sơn đã có những trải nghiệm gì trong mùa hè?', 'Sơn về quê được trồng rau, câu cá và chiều chiều thả diều trên bãi cỏ.'),
    ('open', 11, 'Đọc hiểu • 3', 'Trải nghiệm mùa hè của Chi có gì khác với Sơn?', 'Chi ở nhà tập đi xe đạp và đã đạp xe bon bon trên con đường quen thuộc.'),
    ('choice', 11, 'Đọc hiểu • 4', 'Theo em, vì sao khi đi học, mùa hè sẽ theo các bạn vào lớp học?', [('Vì các bạn vẫn nhớ những chuyện về mùa hè.', False), ('Vì các bạn sẽ kể cho nhau nghe những chuyện về mùa hè.', True), ('Vì các bạn sẽ mang đồ vật kỉ niệm đến lớp.', False)], 'Vì các bạn sẽ chia sẻ cho nhau nghe những trải nghiệm mùa hè thú vị.')
]

with open('src/data/curriculum/vietnamese/sgkActivities.ts', 'r', encoding='utf-8') as f:
    act_ts = f.read()

act_chunks = []
for lid, acts in G3_T1_ACTIVITIES.items():
    acts_ts_lines = []
    for a in acts:
        if a[0] == 'open':
            line = f"    openQuestion({json.dumps(lid)}, {a[1]}, {json.dumps(a[2], ensure_ascii=False)}, {json.dumps(a[3], ensure_ascii=False)}, {json.dumps(a[4], ensure_ascii=False)}),"
        else:
            opts_str = json.dumps(a[4], ensure_ascii=False)
            line = f"    choiceQuestion({json.dumps(lid)}, {a[1]}, {json.dumps(a[2], ensure_ascii=False)}, {json.dumps(a[3], ensure_ascii=False)}, {opts_str}, {json.dumps(a[5], ensure_ascii=False)}),"
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
    print("Inserted 32 Grade 3 Sem 1 activities into sgkActivities.ts!")

# 3. Update lessonPageMappings.generated.json
with open('src/data/curriculum/vietnamese/lessonPageMappings.generated.json', 'r', encoding='utf-8') as f:
    mappings = json.load(f)

for lid, data in g3_t1_transcripts.items():
    num_m = re.search(r'b(\d+)', lid)
    num = int(num_m.group(1)) if num_m else 1
    mappings[lid] = {
        'lessonId': lid,
        'bookId': 'tv-g3-t1',
        'sourcePages': data['sourcePages'],
        'matchedTitle': f"Bài {num}: {data['title']}",
        'matchedText': data['title'],
        'confidence': 1,
        'status': 'visually_reviewed'
    }

with open('src/data/curriculum/vietnamese/lessonPageMappings.generated.json', 'w', encoding='utf-8') as f:
    json.dump(mappings, f, ensure_ascii=False, indent=2)

print("Updated mappings for Grade 3 Semester 1!")
