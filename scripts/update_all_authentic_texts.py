# -*- coding: utf-8 -*-
import sys
import os
import re
import json

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')

# Update build_100_percent_real_reading_texts.py with 100% authentic SGK text for tv-g3-b1
with open("scripts/build_100_percent_real_reading_texts.py", "r", encoding="utf-8") as f:
    code = f.read()

# Replace tv-g3-b1 entry
old_g3_b1 = """    "tv-g3-b1": {
        "title": "Ngày gặp lại",
        "author": "Hải Nam",
        "genre": "prose",
        "content": [
            "Chiếc đồng hồ chuông reo vang. Chi bừng tỉnh giấc. Hôm nay là ngày tựu trường! Chi vùng dậy, đánh răng rửa mặt thật nhanh rồi mặc bộ đồng phục mới tinh. Vừa đến cổng trường, Chi đã nhìn thấy các bạn tíu tít gọi nhau.",
            "– Chi ơi! – Tiếng Sơn reo to.\\nChi quay lại, Sơn đang hớn hở chạy tới. Hai bạn nắm tay nhau nhảy chân sáo. Sơn kể cho Chi nghe về chuyến về quê thăm ông bà, được đi thả diều và bắt cá dưới mương.",
            "Vào lớp, cô giáo tươi cười đón các em. Cô hỏi thăm kì nghỉ hè của cả lớp. Bạn nào cũng muốn kể thật nhiều điều thú vị. Chi thấy vui sướng khi được gặp lại cô giáo và các bạn thân yêu."
        ]
    },"""

new_g3_b1 = """    "tv-g3-b1": {
        "title": "Ngày gặp lại",
        "author": "Minh Dương",
        "genre": "prose",
        "content": [
            "Chi mở tung cửa sổ đón những tia nắng đầu thu. Thế là hết hè rồi. Ngày mai bắt đầu năm học mới.",
            "Có tiếng gọi ngoài cổng. Chi nhìn ra, thấy Sơn giơ chiếc diều rất xinh, vẫy rối rít:\\n– Cho cậu này.\\nChi mừng rỡ chạy ra. Sơn về quê từ đầu hè, giờ gặp lại, hai bạn có bao nhiêu chuyện. Sơn kể ở quê, cậu được theo ông bà đi trồng rau, câu cá. Chiều chiều, cậu thường cùng bạn thả diều. Khi diều lên cao, cậu nằm lăn ra bãi cỏ ngắm trời. Cánh diều đứng im như ngủ thiếp đi trên bầu trời xanh.",
            "Nhìn Sơn đen nhẻm, mắt lấp lánh khi kể chuyện, Chi chợt thấy buồn:\\n– Tớ chẳng được đi đâu.\\n– Nhưng mẹ tớ bảo cậu biết đi xe đạp rồi.\\n– Ừ, tớ ở nhà tập xe thôi.\\n– Thế cậu được đạp xe đi khắp nơi mà.\\nChi cười:\\n– Ừ nhỉ.",
            "Thế là Chi kể bố dạy Chi đi xe đạp. Bây giờ, Chi đã đạp xe bon bon. Con đường quen thuộc bỗng trở nên mới mẻ.\\nCứ như vậy, hai bạn thi nhau kể những trải nghiệm mùa hè. Ngày mai đi học rồi, nhưng mùa hè chắc sẽ theo các bạn vào lớp học."
        ]
    },"""

if old_g3_b1 in code:
    code = code.replace(old_g3_b1, new_g3_b1)
    with open("scripts/build_100_percent_real_reading_texts.py", "w", encoding="utf-8") as f:
        f.write(code)
    print("Updated tv-g3-b1 to authentic textbook text (Minh Dương).")
else:
    print("old_g3_b1 not found in code, checking regex...")
