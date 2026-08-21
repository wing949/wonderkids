# -*- coding: utf-8 -*-
import os
import sys
import re

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

WORKSPACE_DIR = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning"

def audit_grade_files():
    print("=================================================================")
    print("🔍 BÁO CÁO RÀ SOÁT NGUỒN GỐC & NỘI DUNG MÔN TOÁN VÀ TIẾNG VIỆT")
    print("=================================================================\n")
    
    subjects = ['math', 'vietnamese']
    grades = [1, 2, 3, 4, 5]
    
    total_lessons = 0
    for subj in subjects:
        print(f"\n--- MÔN: {subj.upper()} ---")
        for g in grades:
            fpath = os.path.join(WORKSPACE_DIR, "src", "data", "curriculum", subj, f"grade{g}.ts")
            if not os.path.exists(fpath):
                print(f"  ❌ Không tìm thấy file {fpath}")
                continue
            with open(fpath, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Count topics
            topics = re.findall(r"id:\s*'([^']+)'", content)
            titles = re.findall(r"title:\s*'([^']+)'", content)
            page_refs = re.findall(r"textbookPageRef:\s*'([^']+)'", content)
            
            print(f"  [Lớp {g}]: {len(topics)} bài học | Đã có trích dẫn trang SGK: {len(page_refs)}/{len(topics)}")
            total_lessons += len(topics)
            
    print(f"\nTổng cộng: {total_lessons} bài học trên toàn hệ sinh thái Toán & Tiếng Việt.")

if __name__ == "__main__":
    audit_grade_files()
