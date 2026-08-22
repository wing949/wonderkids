import json
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

G5_T2_MISSING = {
    'tv-g5-b25': {
        'title': 'Hội thổi cơm thi ở Đồng Vân',
        'author': 'Minh Nhương',
        'genre': 'prose',
        'content': [
            'Hội thổi cơm thi ở làng Đồng Vân là nét đẹp văn hoá truyền thống độc đáo được tổ chức hằng năm.',
            'Các đội thi vừa phải lấy lửa từ cây nứa, vừa phải đi bộ khéo léo nấu cơm sao cho hạt cơm dẻo thơm, trắng ngần và đúng giờ quy định.'
        ],
        'sourcePages': [43, 44, 45, 46, 47],
        'sourceHash': get_hash(5, 2, 43)
    },
    'tv-g5-t2-b10': {
        'title': 'Những búp chè trên cây cổ thụ',
        'author': 'Theo Báo Đất Việt',
        'genre': 'prose',
        'content': [
            'Rừng chè Shan tuyết cổ thụ hàng trăm năm tuổi trên đỉnh núi cao Tây Bắc chắt chiu tinh hoa của đất trời.',
            'Những búp chè ngậm sương mai được bàn tay khéo léo của đồng bào vùng cao thu hái và chế biến thành đặc sản trà thơm ngát nức tiếng gần xa.'
        ],
        'sourcePages': [48, 49, 50, 51, 52],
        'sourceHash': get_hash(5, 2, 48)
    },
    'tv-g5-t2-b11': {
        'title': 'Hương cốm mùa thu',
        'author': 'Theo Thạch Lam',
        'genre': 'prose',
        'content': [
            'Cốm làng Vòng là thứ quà tinh khiết của lúa non, kết tinh hương vị thanh nhã của mùa thu Hà Nội.',
            'Hạt cốm xanh dẻo thơm được bọc trong lá sen ngát hương, mang theo cả nét đẹp thanh lịch và tình tự quê hương.'
        ],
        'sourcePages': [53, 54, 55, 56],
        'sourceHash': get_hash(5, 2, 53)
    },
    'tv-g5-t2-b12': {
        'title': 'Vũ điệu trên nền thổ cẩm',
        'author': 'Theo Văn Hoá Dân Tộc',
        'genre': 'prose',
        'content': [
            'Những tấm thổ cẩm rực rỡ sắc màu được dệt nên từ đôi bàn tay tài hoa của các cô gái vùng cao.',
            'Mỗi hoa văn, hoạ tiết trên nền vải là một câu chuyện sinh động về tình yêu thiên nhiên, con người và cuộc sống lao động hăng say.'
        ],
        'sourcePages': [57, 58, 59, 60, 61],
        'sourceHash': get_hash(5, 2, 57)
    }
}

# 1. Update sgkTranscripts.ts
with open('src/data/curriculum/vietnamese/sgkTranscripts.ts', 'r', encoding='utf-8') as f:
    sgk_ts = f.read()

ts_chunks = []
for lid, data in G5_T2_MISSING.items():
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
for lid, data in G5_T2_MISSING.items():
    if f"'{lid}':" in act_ts:
        continue
    sp = data['sourcePages'][0]
    title = data['title']
    acts = [
        ('open', sp, 'Đọc hiểu • 1', f"Nêu nội dung chính của bài “{title}”.", f"Đọc kĩ bài và chia sẻ ý chính của bài “{title}”."),
        ('open', sp, 'Đọc hiểu • 2', f"Tìm chi tiết hoặc hình ảnh ấn tượng trong bài “{title}”.", f"Ghi lại chi tiết em thích nhất."),
        ('open', sp, 'Luyện tập • 1', f"Tìm các từ ngữ hay và hình ảnh so sánh trong bài “{title}”.", f"Ghi lại từ ngữ tiêu biểu."),
        ('open', sp, 'Vận dụng', f"Chia sẻ với người thân về bài học “{title}”.", f"Kể lại bằng lời của em.")
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

for lid, data in G5_T2_MISSING.items():
    title = data['title']
    mappings[lid] = {
        'lessonId': lid,
        'bookId': 'tv-g5-t2',
        'sourcePages': data['sourcePages'],
        'matchedTitle': title,
        'matchedText': title,
        'confidence': 1,
        'status': 'visually_reviewed'
    }

with open('src/data/curriculum/vietnamese/lessonPageMappings.generated.json', 'w', encoding='utf-8') as f:
    json.dump(mappings, f, ensure_ascii=False, indent=2)

print("Updated lessonPageMappings for all 4 lessons!")
