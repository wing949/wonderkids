# -*- coding: utf-8 -*-
import os
import sys
import json
import re

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"

def parse_sgk_math_lessons():
    toc_file = os.path.join(WORKSPACE, 'scripts', 'math_all_tocs_full.json')
    if not os.path.exists(toc_file):
        return {}
    with open(toc_file, 'r', encoding='utf-8') as f:
        toc_data = json.load(f)
    
    parsed_books = {}
    for book_name, raw_text in toc_data.items():
        # Match lines like "Bài 1. Các số 0, 1, 2, 3, 4, 5 ... 6" or "Bài 1: ..."
        lines = raw_text.split('\n')
        lessons = []
        current_chude = ""
        
        for line in lines:
            line_str = line.strip()
            if not line_str:
                continue
            
            # Check if this is a Chủ đề
            if re.search(r'^(?:Chủ\s*đề|\d+[\.\s]+CHỦ\s*ĐỀ|[A-ZĐÀ-Ỹ\s]{4,})', line_str, re.IGNORECASE) and not re.search(r'^Bài\s*\d+', line_str, re.IGNORECASE):
                # Clean up title
                chude_clean = re.sub(r'^\d+[\.\s]+', '', line_str).strip()
                if len(chude_clean) > 3 and not chude_clean.isdigit():
                    current_chude = chude_clean
            
            # Match Bài
            # e.g. Bài 1. Các số 0, 1, 2, 3, 4, 5 6
            # e.g. Bài 38. Nhân với số có một chữ số 4
            match = re.search(r'Bài\s*(\d+)[\.:\s]+([^\d\n]+?)(?:\s+(\d+))?$', line_str, re.IGNORECASE)
            if match:
                b_num = int(match.group(1))
                b_title = match.group(2).strip().rstrip('._- ')
                page = match.group(3) if match.group(3) else ""
                lessons.append({
                    "lessonNumber": b_num,
                    "title": f"Bài {b_num}: {b_title}",
                    "rawTitle": b_title,
                    "chude": current_chude,
                    "page": page
                })
        
        parsed_books[book_name] = lessons
    
    return parsed_books

def parse_app_math_lessons():
    app_data = {}
    for g in range(1, 6):
        fpath = os.path.join(WORKSPACE, 'src', 'data', 'curriculum', 'math', f'grade{g}.ts')
        if not os.path.exists(fpath):
            continue
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Match objects
        blocks = re.findall(r'\{\s*["\']?id["\']?\s*:\s*["\']([^"\']+)["\'].*?["\']?title["\']?\s*:\s*["\']([^"\']+)["\'](?:.*?["\']?unit["\']?\s*:\s*["\']([^"\']+)["\'])?(?:.*?["\']?semester["\']?\s*:\s*(\d+))?', content, re.DOTALL)
        
        app_data[g] = []
        for b in blocks:
            item_id, title, unit, sem = b
            app_data[g].append({
                "id": item_id,
                "title": title,
                "unit": unit,
                "semester": int(sem) if sem else 1
            })
    return app_data

if __name__ == '__main__':
    sgk = parse_sgk_math_lessons()
    app = parse_app_math_lessons()
    
    print("==========================================================")
    print("📊 BẢNG ĐỐI CHIẾU SỐ LƯỢNG BÀI HỌC TOÁN: SGK vs APPS")
    print("==========================================================")
    
    total_sgk = 0
    total_app = 0
    
    for g in range(1, 6):
        t1_key = f"Toán {g} Tập 1"
        t2_key = f"Toán {g} Tập 2"
        
        sgk_t1_count = len(sgk.get(t1_key, []))
        sgk_t2_count = len(sgk.get(t2_key, []))
        sgk_g_total = sgk_t1_count + sgk_t2_count
        total_sgk += sgk_g_total
        
        app_g_count = len(app.get(g, []))
        total_app += app_g_count
        
        print(f"\n📘 TOÁN LỚP {g}:")
        print(f"  • SGK Tập 1 : {sgk_t1_count} bài học")
        print(f"  • SGK Tập 2 : {sgk_t2_count} bài học")
        print(f"  ➡️ TỔNG SGK LỚP {g}: {sgk_g_total} bài học")
        print(f"  📱 ĐANG CÓ TRÊN APPS: {app_g_count} bài học")
        print(f"  ⚠️ Chênh lệch: thiếu {sgk_g_total - app_g_count} bài")

    print("\n----------------------------------------------------------")
    print(f"🏆 TỔNG CỘNG TOÀN CẤP (LỚP 1 - 5):")
    print(f"  • Tổng bài học SGK Toán (10 cuốn): {total_sgk} bài học")
    print(f"  • Tổng bài học hiện có trên Apps  : {total_app} bài học")
    print("==========================================================")
