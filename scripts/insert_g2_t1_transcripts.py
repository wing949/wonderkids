import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('scripts/g2_t1_verified_batch.json', 'r', encoding='utf-8') as f:
    g2_t1_transcripts = json.load(f)

with open('src/data/curriculum/vietnamese/sgkTranscripts.ts', 'r', encoding='utf-8') as f:
    sgk_ts = f.read()

ts_chunks = []
for lid, data in g2_t1_transcripts.items():
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

all_g2_t1_code = "\n".join(ts_chunks)

# Target line 1140: '};' right before 'function normalizeLessonId'
target_marker = "function normalizeLessonId(lessonId: string): string {"
pos = sgk_ts.find(target_marker)
if pos != -1:
    # find the '};' before target_marker
    brace_pos = sgk_ts.rfind("};", 0, pos)
    new_sgk_ts = sgk_ts[:brace_pos] + all_g2_t1_code + "\n};\n\n" + sgk_ts[pos:]
    with open('src/data/curriculum/vietnamese/sgkTranscripts.ts', 'w', encoding='utf-8') as f:
        f.write(new_sgk_ts)
    print("Successfully inserted 14 Grade 2 Sem 1 lessons into sgkTranscripts.ts!")
