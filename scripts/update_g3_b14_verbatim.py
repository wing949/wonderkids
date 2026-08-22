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

REAL_READING_PASSAGES["tv-g3-b14"] = {
    "title": "Cuộc họp của chữ viết",
    "author": "Phỏng theo Trần Ninh Hồ",
    "genre": "prose",
    "content": [
        "Vừa tan học, các chữ cái và dấu câu đã ngồi lại họp. Bác chữ A dõng dạc mở đầu:\n– Thưa các bạn! Hôm nay, chúng ta họp để tìm cách giúp đỡ em Hoàng. Hoàng hoàn toàn không biết chấm câu. Có đoạn văn em viết thế này: \"Chú lính bước vào đầu chú. Đội chiếc mũ sắt dưới chân. Đi đôi giày da trên trán lấm tấm mồ hôi.\".",
        "Có tiếng xì xào:\n– Thế nghĩa là gì nhỉ?\n– Nghĩa là thế này: \"Chú lính bước vào. Đầu chú đội chiếc mũ sắt. Dưới chân đi đôi giày da. Trên trán lấm tấm mồ hôi.\".",
        "Tiếng cười rộ lên. Dấu chấm nói:\n– Theo tôi, tất cả là do cậu này chẳng bao giờ để ý đến dấu câu. Mỏi tay chỗ nào, cậu ta chấm chỗ ấy.\nCả mấy dấu câu đều lắc đầu:\n– Ẩu thế nhỉ!\nBác chữ A đề nghị:\n– Từ nay, mỗi khi em Hoàng định chấm câu, anh dấu chấm cần yêu cầu Hoàng đọc lại nội dung câu văn một lần nữa đã. Được không nào?"
    ]
}
REAL_READING_PASSAGES["tv-g3-t1-b14"] = REAL_READING_PASSAGES["tv-g3-b14"]

with open(WORKSPACE / "scripts" / "build_100_percent_real_reading_texts.py", "w", encoding="utf-8") as f:
    f.write("# -*- coding: utf-8 -*-\nimport sys\n\nREAL_READING_PASSAGES = " + json.dumps(REAL_READING_PASSAGES, ensure_ascii=False, indent=4) + "\n")

print("Saved updated build_100_percent_real_reading_texts.py with tv-g3-b14 Cuoc hop cua chu viet.")
