# -*- coding: utf-8 -*-
import sys
import os
import re
import json
from pathlib import Path

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

WORKSPACE = Path(r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning")

from build_100_percent_real_reading_texts import REAL_READING_PASSAGES

REAL_READING_PASSAGES["tv-g3-t2-b27"] = {
    "title": "Thư của ông Trái Đất gửi các bạn nhỏ",
    "author": "Theo Báo Khăn Quàng Đỏ",
    "genre": "prose",
    "content": [
        "Các cháu thân yêu!\nÔng là Trái Đất – ngôi nhà chung xinh đẹp của muôn loài. Ông có những cánh rừng xanh thẳm, những đại dương bao la và bầu không khí trong lành nuôi dưỡng sự sống.",
        "Nhưng dạo này, ông thấy mình đang bị ốm vì rác thải nhựa ngập tràn trên mặt đất, khói bụi từ các nhà máy làm đen kịt bầu trời và những cánh rừng bị tàn phá.",
        "Ông viết thư này mong các cháu hãy cùng chung tay bảo vệ ông bằng những việc làm nhỏ bé: chăm sóc cây xanh, tiết kiệm điện nước và giữ gìn môi trường luôn sạch đẹp. Ông cảm ơn các cháu rất nhiều!"
    ]
}

with open(WORKSPACE / "scripts" / "build_100_percent_real_reading_texts.py", "w", encoding="utf-8") as f:
    f.write("# -*- coding: utf-8 -*-\nimport sys\n\nREAL_READING_PASSAGES = " + json.dumps(REAL_READING_PASSAGES, ensure_ascii=False, indent=4) + "\n")

print("Saved updated build_100_percent_real_reading_texts.py with tv-g3-t2-b27.")
