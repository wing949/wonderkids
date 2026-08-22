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

OCR_CORRECTIONS = {
    r'\bNột\b': 'Một',
    r'\bnột\b': 'một',
    r'\btoy\b': 'tay',
    r'\bmớt\b': 'mắt',
    r'\bquở\b': 'quả',
    r'\bbởn\b': 'bàn',
    r'\bvðo\b': 'vào',
    r'\bvở\b': 'và',
    r'\bnhõng\b': 'nhàng',
    r'\btờgiấy\b': 'tờ giấy',
    r'\bquợt\b': 'quạt',
    r'\bmót\b': 'mát',
    r'\bnõo\b': 'nào',
    r'\blõ\b': 'là',
    r'\bđỡ\b': 'đã',
    r'\bnhờ\b': 'nhà',
    r'\bhới\b': 'hái',
    r'\bchôn\b': 'chân',
    r'\bgơn\b': 'gan',
    r'\bmốp mô\b': 'nhấp nhô',
    r'\bphỏng phốt\b': 'thoang thoảng',
    r'\bđug\b': 'đưa',
    r'\bvớt vẻo\b': 'vắt vẻo',
    r'\blúp xúp\b': 'lúp xúp',
    r'\bngõ\b': 'ngõ',
    r'\btrở lài\b': 'trả lời',
    r'\bnhấm nhớp\b': 'nhấm nháp',
    r'\bphỏi\b': 'phải',
    r'\bphõng\b': 'phăng',
    r'\bvẩu\b': 'vầu',
    r'\bnữa\b': 'nứa',
    r'\blỗn\b': 'lẫn',
    r'\bmua rét\b': 'mưa rét',
    r'\bnằm vớt vẻo\b': 'nằm vắt vẻo',
    r'\bthôn thẳng\b': 'thân thẳng',
    r'\btốp\b': 'tắp',
    r'\bthoăn thoát\b': 'thoăn thoắt',
    r'\btình nghịch\b': 'tinh nghịch',
    r'\bđũa\b': 'đứa',
    r'\bróo\b': 'ráo',
    r'\bló cọ\b': 'lá cọ',
    r'\bnóng\b': 'nắng',
    r'\bđôu\b': 'đâu',
    r'\brốt rõ\b': 'rất rõ',
    r'\btơi\b': 'tai',
    r'\bLõng\b': 'Làng',
    r'\bMỏnh\b': 'Mảnh',
    r'\bBờ\b': 'Bà',
    r'\bbờ\b': 'bà',
    r'\bchộp chờn\b': 'chập chờn',
    r'\bmững\b': 'mừng',
    r'\bquở vườn\b': 'quả vườn',
    r'\bnhễ nhợi\b': 'nhễ nhại',
    r'\bhút\b': 'hát',
    r'\bhót líu lo\b': 'hót líu lo',
    r'\bxua\b': 'xưa',
    r'\bđẫm sương long lạnh\b': 'đẫm sương long lanh',
    r'\bhươu nơi\b': 'hươu nai',
    r'\bNơi ấy đỡ đượ tôi\b': 'Nơi ấy đã đưa tôi',
    r'\bBuổi đầu tiên đến lớp Ế\b': 'Buổi đầu tiên đến lớp',
    r'\bNay con đường xơ tắp\b': 'Nay con đường xa tắp',
    r'\bSoi võo trong giấc ngủ\b': 'Soi vào trong giấc ngủ',
    r'\bSóng một vổng trên sân\b': 'Sáng một vầng trên sân',
    r'\bNơi bố mẹ ngày đêm L li@\b': 'Nơi bố mẹ ngày đêm',
    r'\bNơi bạn bè chạy tới . 2 Thường lúc nöo cũng vui\b': 'Nơi bạn bè chạy tới\nThường lúc nào cũng vui.',
    r'\bNggy từ thời tấm bé\b': 'Ngay từ thời tấm bé',
    r'\bCòn dắt vàng đi men\b': 'Còn dắt vòng đi men.'
}

def clean_text_thoroughly(text):
    # Remove noise symbols
    text = re.sub(r'[~¬|_=›‹«»\\\/^#$*@+§]+', ' ', text)
    text = re.sub(r'\s+', ' ', text).strip()
    
    for pattern, replacement in OCR_CORRECTIONS.items():
        text = re.sub(pattern, replacement, text)
        
    return text

print("Deep cleaning module loaded.")
