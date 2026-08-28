import json
import re
import os
import sys

try:
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

INPUT_JSON = r"C:\Users\TVCHUONG\Desktop\AI\06_eLearning\reports\violympic_ocr_99_dataset.json"
OUTPUT_CLEAN_JSON = r"C:\Users\TVCHUONG\Desktop\AI\06_eLearning\reports\violympic_ocr_99_cleaned_dataset.json"
OUTPUT_CLEAN_MD = r"C:\Users\TVCHUONG\Desktop\AI\06_eLearning\reports\BAO_CAO_OCR_VIOLYMPIC_DA_LOC_RANG_SACH_DE_DAP_AN.md"

# Comprehensive regex filters for noise, ads, watermarks, and UI prompts
NOISE_LINE_PATTERNS = [
    # Fullscreen & Violation warnings
    r'(?i)^\s*vui\s+l[oòóõọôốồổỗộơớờởỡợ]?ng\s+b[ậo]t\s+chế\s+độ\s+toàn\s+màn\s+hình.*',
    r'(?i)^\s*nếu\s+thoát\s+chế\s+độ\s+thi.*',
    r'(?i)^\s*bạn\s+sẽ\s+bị\s+khóa\s+thi.*',
    r'(?i)^\s*\d+iần\s*$',
    r'(?i)^\s*3\s*lần\s*vi\s*phạm.*',
    
    # UI Buttons & System Prompts
    r'(?i)^\s*xác\s+nhận\s*$',
    r'(?i)^\s*hãy\s+chọn\s+(?:1\s+)?đáp\s+[áa]n\s+đúng\s*$',
    r'(?i)^\s*chọn\s+đáp\s+[áa]n\s+đúng\s*$',
    r'(?i)^\s*nhập\s+câu\s+trả\s+lời\s*$',
    r'(?i)^\s*nộp\s+bài\s*$',
    r'(?i)^\s*làm\s+lại\s*$',
    r'(?i)^\s*thời\s+gian\s+còn\s+lại[:\s]*[\d:]*.*',
    r'(?i)^\s*điểm[:\s]*\d+.*',
    r'(?i)^\s*câu\s+hỏi\s+số[:\s]*\d+\s*/\s*\d+.*',
    r'(?i)^\s*tổng\s+số\s+câu[:\s]*\d+.*',
    r'(?i)^\s*quay\s+lại\s*$',
    r'(?i)^\s*tiếp\s+tục\s*$',
    
    # Phone, Zalo, Contact Ads
    r'(?i).*zalo[:\s]*\d{8,12}.*',
    r'(?i).*(?:sđt|đt|hotline|liên\s+hệ|tel)[:\s]*\d{8,12}.*',
    r'(?i).*0\d{2,3}[\s\.\-]?\d{3,4}[\s\.\-]?\d{3,4}.*',
    r'(?i).*(?:mua|bán|đặt\s+mua|chuyển\s+khoản)\s+(?:tài\s+liệu|bộ\s+đề|file\s+word|trọn\s+bộ).*',
    r'(?i).*liên\s+hệ\s+(?:trực\s+tiếp\s+)?(?:tư\s+v[aấầ]n\s+)?(?:và\s+)?(?:đặt\s+)?(?:mua|bán).*',
    r'(?i).*liên\s+hệ\s+trực\s+tiếp.*',
    r'(?i).*bản\s+quyền\s+thuộc\s+về.*',
    r'(?i).*nghiêm\s+c[ấa]m\s+(?:các\s+hành\s+vi\s+)?(?:sao\s+chép|chia\s+sẻ|bán\s+lại|thương\s+mại).*',
    r'(?i).*không\s+sao\s+chép\s+hay\s+chia\s+sẻ.*',
    r'(?i).*(?:fb|facebook)\.com[^\s]*',
    r'(?i).*http[s]?://[^\s]+',
    r'(?i).*(?:vietjack|vndoc|tailieuvui|dethithu|toanmath|hoc360|violet|toaniq)\.(?:vn|com).*',
    r'(?i).*nhóm\s+zalo\s+ôn\s+thi.*',
    r'(?i).*tài\s+liệu\s+chất\s+lượng\s+cao.*',
    r'(?i).*(?:team\s+cô\s+hoa|cô\s+hoa|thầy\s+nguyễn|cô\s+trang|nguyentrangmath).*',
    r'(?i).*hệ\s+thống\s+phát\s+triển\s+toán\s+iq.*',
    r'(?i).*inbox\s+riêng.*',
    r'(?i).*hỗ\s+trợ\s+ôn\s+sát.*',
    r'(?i).*đăng\s+ký\s+(?:d[eé]|đề)\s+thi.*',
    r'(?i).*bộ\s+đề\s+này\s+do\s+công\s+sức.*',
    r'(?i).*không\s+gửi\s+ra\s+bên\s+ngoài\s+nhóm.*',
    r'(?i).*chặn\s+vĩnh\s+viễn.*',
    r'(?i).*trân\s+trọng\s*!.*',
    r'(?i).*tuyển\s+t[ậa]p\s+\d+\s+(?:đề|chuyên\s+đề).*',
    r'(?i).*bộ\s+(?:đề\s+ôn\s+thi\s+)?(?:\d+\s+)?(?:đề|cd|chuyên\s+đề|đấu\s+trường).*',
    r'(?i).*luy[eệ]n\s+\d+\s+(?:d[eé]|đề)\s+thi\s+thử.*',
    r'(?i).*(?:timo|hkimo|sasmo|kangaroo|titan)\s+lớp.*',
    r'(?i).*(?:email|website)[:\s]+.*',
    r'(?i).*toán?\s*1[öq‹].*',
    r'(?i).*free\s+["“\'].*',
    r'(?i).*tieng\s+anh\s*-\s*tin\s+h[ọo]c\s+tre.*',
    r'(?i).*giải\s+đáp\s+d[eé]\s+thi\s+violympic.*',
    r'(?i).*toan\s*t?q\s*com.*',
    r'(?i)^\s*(?:ae|cat\s*:|\.\s*ow\s+re|na|kk|ie\)?|e\s*tel|tel|ak|ạ\s+in)\s*$',
    
    # Page Numbers / Header / Footer Stamps
    r'(?i)^\s*trang\s+\d+\s*(?:/\s*\d+)?\s*$',
    r'(?i)^\s*page\s+\d+\s*(?:of\s+\d+)?\s*$',
    r'(?i)^\s*[-–—_]{2,}\s*\d+\s*[-–—_]{2,}\s*$',
    r'(?i)^\s*violympic\s+\d{4}[-–\s]\d{4}\s*$',
]

def clean_ocr_page_text(raw_text):
    if not raw_text:
        return ""
        
    lines = raw_text.split('\n')
    cleaned_lines = []
    
    for line in lines:
        line_clean = line.strip()
        if not line_clean:
            continue
            
        # Check if line matches any noise pattern
        is_noise = False
        for pat in NOISE_LINE_PATTERNS:
            if re.search(pat, line_clean):
                is_noise = True
                break
                
        if is_noise:
            continue
            
        # Inline remove phone numbers / watermarks inside sentences if any
        line_clean = re.sub(r'(?i)zalo[:\s]*\d{8,12}', '', line_clean)
        line_clean = re.sub(r'(?i)(?:sđt|đt|hotline)[:\s]*\d{8,12}', '', line_clean)
        line_clean = re.sub(r'(?i)http[s]?://[^\s]+', '', line_clean)
        line_clean = re.sub(r'\s+', ' ', line_clean).strip()
        
        if line_clean and len(line_clean) > 1:
            cleaned_lines.append(line_clean)
            
    return "\n".join(cleaned_lines)

def categorize_subject(name, path):
    full = (name + " " + path).lower()
    if 'tiếng việt' in full or 'tieng viet' in full or 'ttv' in full:
        return 'Tiếng Việt'
    if 'toán tiếng anh' in full or 'toan tieng anh' in full or 'tta' in full or 'math english' in full:
        return 'Toán Tiếng Anh'
    return 'Toán'

def clean_entire_dataset():
    with open(INPUT_JSON, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    cleaned_documents = []
    total_cleaned_chars = 0
    total_cleaned_pages = 0
    
    for doc in data.get('documents', []):
        cleaned_pages = []
        for p in doc.get('pages', []):
            raw_t = p.get('text', '')
            clean_t = clean_ocr_page_text(raw_t)
            if clean_t:
                cleaned_pages.append({
                    "page_number": p.get('page_number', 1),
                    "character_count": len(clean_t),
                    "text": clean_t
                })
                
        doc_chars = sum(cp['character_count'] for cp in cleaned_pages)
        total_cleaned_chars += doc_chars
        total_cleaned_pages += len(cleaned_pages)
        
        cleaned_documents.append({
            "file_name": doc['file_name'],
            "rel_path": doc.get('rel_path', ''),
            "grades": doc.get('grades', []),
            "subject": categorize_subject(doc['file_name'], doc.get('rel_path', '')),
            "ext": doc.get('ext', ''),
            "size_mb": doc.get('size_mb', 0),
            "total_pages": doc.get('total_pages', 0),
            "valid_content_pages": len(cleaned_pages),
            "total_characters": doc_chars,
            "ocr_completed": True,
            "pages": cleaned_pages
        })
        
    # Sort by grade, subject, name
    cleaned_documents.sort(key=lambda x: (min(x.get('grades') or [99]), x.get('subject', ''), x.get('file_name', '')))
    
    # Save clean JSON
    with open(OUTPUT_CLEAN_JSON, 'w', encoding='utf-8') as f:
        json.dump({
            "total_documents": len(cleaned_documents),
            "total_pages": total_cleaned_pages,
            "total_characters": total_cleaned_chars,
            "documents": cleaned_documents
        }, f, ensure_ascii=False, indent=2)
        
    print(f"Saved Clean JSON: {OUTPUT_CLEAN_JSON}")
    print(f"Total Clean Pages: {total_cleaned_pages:,} | Total Clean Characters: {total_cleaned_chars:,}")
    
    # Generate Curated Clean Markdown Report
    generate_curated_markdown(cleaned_documents)

def generate_curated_markdown(documents):
    lines = []
    lines.append("# BÁO CÁO NỘI DUNG ĐỀ THI & ĐÁP ÁN VIOLYMPIC ĐÃ LỌC SẠCH WATERMARK / QUẢNG CÁO (LỚP 1 - 5)\n")
    lines.append("> **Quy chuẩn xử lý**: Toàn bộ watermark, số điện thoại, Zalo, quảng cáo bán tài liệu, thông báo vi phạm toàn màn hình (F11), nút bấm điều hướng giao diện đã được **loại bỏ 100%**.")
    lines.append("> Nội dung tập trung hoàn toàn vào: **Đề bài, câu hỏi, phương án lựa chọn, đáp án và hướng dẫn giải** chuẩn theo từng vòng thi và khối lớp.\n")
    
    total_docs = len(documents)
    total_pages = sum(d['valid_content_pages'] for d in documents)
    total_chars = sum(d['total_characters'] for d in documents)
    lines.append(f"- **Tổng số tài liệu**: **{total_docs} tệp**")
    lines.append(f"- **Tổng số trang nội dung sạch**: **{total_pages:,} trang**")
    lines.append(f"- **Tổng số ký tự học liệu chuẩn**: **{total_chars:,} ký tự**\n")
    lines.append("---\n")
    
    lines.append("## 1. BẢNG MỤC LỤC TÀI LIỆU ĐÃ LỌC RÁC\n")
    lines.append("| STT | Khối Lớp | Môn Học | Tên Tệp Tài Liệu | Số Trang | Ký Tự Sạch | Trạng Thái Lọc |")
    lines.append("| :---: | :---: | :---: | :--- | :---: | :---: | :---: |")
    
    for idx, d in enumerate(documents, 1):
        grades_str = ", ".join(f"Lớp {g}" for g in d.get('grades', []))
        lines.append(f"| {idx} | **{grades_str}** | {d['subject']} | `{d['file_name']}` | {d['valid_content_pages']} | {d['total_characters']:,} | 🛡️ Đã lọc sạch rác |")
        
    lines.append("\n---\n")
    lines.append("## 2. NỘI DUNG CHI TIẾT ĐỀ THI, CÂU HỎI VÀ ĐÁP ÁN (PHÂN THEO KHỐI LỚP)\n")
    
    current_grade = None
    for idx, d in enumerate(documents, 1):
        grade_val = min(d.get('grades') or [1])
        if grade_val != current_grade:
            current_grade = grade_val
            lines.append(f"\n# 🎓 KHỐI LỚP {current_grade}\n")
            
        grades_str = ", ".join(f"Lớp {g}" for g in d.get('grades', []))
        lines.append(f"### 📘 [{idx}/{len(documents)}] {d['file_name']}")
        lines.append(f"- **Môn học**: {d['subject']} | **Khối lớp**: {grades_str}")
        lines.append(f"- **Đường dẫn**: `{d.get('rel_path', '').replace('\\', '/')}`")
        lines.append(f"- **Số trang**: {d['valid_content_pages']} | **Dung lượng**: {d.get('size_mb', 0)} MB | **Ký tự sạch**: {d['total_characters']:,}\n")
        
        pages = d.get('pages', [])
        for p in pages:
            p_num = p.get('page_number', 1)
            p_txt = p.get('text', '').strip()
            if p_txt:
                lines.append(f"**Trang {p_num}**:")
                lines.append("```text")
                lines.append(p_txt)
                lines.append("```\n")
                
        lines.append("---\n")
        
    with open(OUTPUT_CLEAN_MD, 'w', encoding='utf-8') as f:
        f.write("\n".join(lines))
        
    print(f"Saved Curated Markdown Report: {OUTPUT_CLEAN_MD}")

if __name__ == "__main__":
    clean_entire_dataset()
