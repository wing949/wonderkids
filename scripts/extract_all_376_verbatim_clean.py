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

# Specific clean verbatim passages for lessons reported:
VERBATIM_UPDATES = {
    "tv-g3-b11": {
        "title": "Lời giải toán đặc biệt",
        "author": "Theo Kể chuyện danh nhân thế giới",
        "genre": "prose",
        "content": [
            "Vích-to Huy-gô bộc lộ tài năng thơ ca của mình từ rất sớm. Hồi còn là học sinh tiểu học, cậu học chăm, thông minh, giỏi đều các môn.",
            "Một lần, vào giờ kiểm tra Toán cuối năm, trong khi các bạn khác mải miết làm bài thì không hiểu sao Huy-gô lại ngồi cắn bút từ đầu giờ. Thầy giáo cũng sốt ruột thay cho học trò của mình. Chỉ còn hai mươi phút nữa là phải nộp bài. Các bạn xung quanh đã có người làm xong, thế mà Huy-gô vẫn ngồi cắn bút, hai tai đỏ nhừ. Thầy giáo lại giơ đồng hồ ra xem và nhìn Huy-gô. Còn mười lăm phút nữa. Lúc này, Huy-gô bắt đầu đặt bút viết. Thầy giáo thở phào. Nhưng liệu có kịp không nhỉ? Ông lo lắng thay cho Huy-gô.",
            "Huy-gô mải miết viết và may thay, khi tiếng trống báo hết giờ vang lên thì cậu cũng viết xong đáp số và mang bài lên nộp. Thầy giáo liếc nhìn bài của Huy-gô. Đáp số đúng rồi! Chợt thầy reo lên:\n– Lời giải bài toán được viết bằng thơ! À, ra thế!\nSau này, Vích-to Huy-gô đã trở thành nhà văn, nhà thơ, nhà viết kịch nổi tiếng thế giới."
        ]
    },
    "tv-g3-t1-b11": {
        "title": "Lời giải toán đặc biệt",
        "author": "Theo Kể chuyện danh nhân thế giới",
        "genre": "prose",
        "content": [
            "Vích-to Huy-gô bộc lộ tài năng thơ ca của mình từ rất sớm. Hồi còn là học sinh tiểu học, cậu học chăm, thông minh, giỏi đều các môn.",
            "Một lần, vào giờ kiểm tra Toán cuối năm, trong khi các bạn khác mải miết làm bài thì không hiểu sao Huy-gô lại ngồi cắn bút từ đầu giờ. Thầy giáo cũng sốt ruột thay cho học trò của mình. Chỉ còn hai mươi phút nữa là phải nộp bài. Các bạn xung quanh đã có người làm xong, thế mà Huy-gô vẫn ngồi cắn bút, hai tai đỏ nhừ. Thầy giáo lại giơ đồng hồ ra xem và nhìn Huy-gô. Còn mười lăm phút nữa. Lúc này, Huy-gô bắt đầu đặt bút viết. Thầy giáo thở phào. Nhưng liệu có kịp không nhỉ? Ông lo lắng thay cho Huy-gô.",
            "Huy-gô mải miết viết và may thay, khi tiếng trống báo hết giờ vang lên thì cậu cũng viết xong đáp số và mang bài lên nộp. Thầy giáo liếc nhìn bài của Huy-gô. Đáp số đúng rồi! Chợt thầy reo lên:\n– Lời giải bài toán được viết bằng thơ! À, ra thế!\nSau này, Vích-to Huy-gô đã trở thành nhà văn, nhà thơ, nhà viết kịch nổi tiếng thế giới."
        ]
    },
    "tv-g3-b12": {
        "title": "Bài tập làm văn",
        "author": "Theo Pi-vô-va-rô-va",
        "genre": "prose",
        "content": [
            "Có lần, cô giáo ra cho chúng tôi một đề văn ở lớp: \"Em đã làm gì để giúp đỡ mẹ?\".\nTôi loay hoay mất một lúc, rồi cầm bút và bắt đầu viết: \"Em đã nhiều lần giúp đỡ mẹ. Em quét nhà và rửa bát đĩa. Đôi khi, em giặt khăn mùi soa.\".\nĐến đây, tôi bỗng thấy bí. Quả thật, ở nhà, mẹ thường làm mọi việc. Thỉnh thoảng, mẹ bận, định bảo tôi giúp việc này việc kia, nhưng thấy tôi đang học, mẹ lại thôi.",
            "Tôi nhìn sang Liu-xi-a, thấy bạn ấy đang viết lia lịa. Thế là tôi bỗng nhớ có lần tôi giặt bít tất của mình, bèn viết thêm: \"Em còn giặt bít tất.\".\nNhưng chẳng lẽ lại nộp một bài văn ngắn ngủn như thế này? Tôi nhìn xung quanh, mọi người vẫn viết. Lạ thật, các bạn viết gì mà nhiều thế?\nTôi cố nghĩ, rồi viết tiếp: \"Em giặt cả áo lót, áo sơ mi và quần.\". Cuối cùng, tôi kết thúc bài văn của mình: \"Em muốn giúp mẹ nhiều việc hơn, để mẹ đỡ vất vả.\".",
            "Mấy hôm sau, sáng Chủ nhật, mẹ bảo tôi:\n– Cô-li-a này! Hôm nay con giặt áo sơ mi và quần áo lót đi nhé!\nTôi tròn xoe mắt. Nhưng rồi tôi vui vẻ nhận lời, vì đó là việc làm mà tôi đã nói trong bài tập làm văn."
        ]
    },
    "tv-g3-t1-b12": {
        "title": "Bài tập làm văn",
        "author": "Theo Pi-vô-va-rô-va",
        "genre": "prose",
        "content": [
            "Có lần, cô giáo ra cho chúng tôi một đề văn ở lớp: \"Em đã làm gì để giúp đỡ mẹ?\".\nTôi loay hoay mất một lúc, rồi cầm bút và bắt đầu viết: \"Em đã nhiều lần giúp đỡ mẹ. Em quét nhà và rửa bát đĩa. Đôi khi, em giặt khăn mùi soa.\".\nĐến đây, tôi bỗng thấy bí. Quả thật, ở nhà, mẹ thường làm mọi việc. Thỉnh thoảng, mẹ bận, định bảo tôi giúp việc này việc kia, nhưng thấy tôi đang học, mẹ lại thôi.",
            "Tôi nhìn sang Liu-xi-a, thấy bạn ấy đang viết lia lịa. Thế là tôi bỗng nhớ có lần tôi giặt bít tất của mình, bèn viết thêm: \"Em còn giặt bít tất.\".\nNhưng chẳng lẽ lại nộp một bài văn ngắn ngủn như thế này? Tôi nhìn xung quanh, mọi người vẫn viết. Lạ thật, các bạn viết gì mà nhiều thế?\nTôi cố nghĩ, rồi viết tiếp: \"Em giặt cả áo lót, áo sơ mi và quần.\". Cuối cùng, tôi kết thúc bài văn của mình: \"Em muốn giúp mẹ nhiều việc hơn, để mẹ đỡ vất vả.\".",
            "Mấy hôm sau, sáng Chủ nhật, mẹ bảo tôi:\n– Cô-li-a này! Hôm nay con giặt áo sơ mi và quần áo lót đi nhé!\nTôi tròn xoe mắt. Nhưng rồi tôi vui vẻ nhận lời, vì đó là việc làm mà tôi đã nói trong bài tập làm văn."
        ]
    }
}

for k, v in VERBATIM_UPDATES.items():
    REAL_READING_PASSAGES[k] = v

with open(WORKSPACE / "scripts" / "build_100_percent_real_reading_texts.py", "w", encoding="utf-8") as f:
    f.write("# -*- coding: utf-8 -*-\nimport sys\n\nREAL_READING_PASSAGES = " + json.dumps(REAL_READING_PASSAGES, ensure_ascii=False, indent=4) + "\n")

print("Saved updated build_100_percent_real_reading_texts.py with verbatim texts for Lesson 11 and 12.")
