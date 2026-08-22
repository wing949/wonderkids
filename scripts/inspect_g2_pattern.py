import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

with open('src/data/curriculum/vietnamese/sgkTranscripts.ts', 'r', encoding='utf-8') as f:
    sgk = f.read()

# Find Grade 2 Sem 2 lessons (tv-g2-b19 to tv-g2-b30 or tv-g2-t2-...)
matches = re.findall(r"'tv-g2-b19':\s*\{(.*?)\n  \},", sgk, re.DOTALL)
if matches:
    print("Sample G2 Sem 2 transcript (tv-g2-b19):")
    print(matches[0][:500])

with open('src/data/curriculum/vietnamese/sgkActivities.ts', 'r', encoding='utf-8') as f:
    act = f.read()

m_act = re.findall(r"'tv-g2-b19':\s*\[(.*?)\]\n", act, re.DOTALL)
if m_act:
    print("\nSample G2 Sem 2 activities (tv-g2-b19):")
    print(m_act[0][:500])
