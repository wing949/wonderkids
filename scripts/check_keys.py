with open('src/data/curriculum/vietnamese/sgkTranscripts.ts', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m1 = re.search(r"'tv-g3-t1-b17':\s*({[\s\S]*?^  },)", text, re.M)
if m1:
    print("Found tv-g3-t1-b17:")
    print(m1.group(1)[:300])
else:
    print("NOT FOUND tv-g3-t1-b17")

m2 = re.search(r"'tv-g2-t1-b27':\s*({[\s\S]*?^  },)", text, re.M)
if m2:
    print("Found tv-g2-t1-b27:")
    print(m2.group(1)[:300])
else:
    print("NOT FOUND tv-g2-t1-b27")
