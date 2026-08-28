import os
import sys
import json
import re
import io
import time
import hashlib
import subprocess
from concurrent.futures import ProcessPoolExecutor, as_completed
import pypdf
from PIL import Image

try:
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')
    if hasattr(sys.stderr, 'reconfigure'):
        sys.stderr.reconfigure(encoding='utf-8')
except Exception:
    pass

TESS_EXE = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
TESSDATA_DIR = r"C:\Users\TVCHUONG\Desktop\AI\06_eLearning\.cache\tessdata"
FILTER_JSON = r"C:\Users\TVCHUONG\Desktop\AI\06_eLearning\reports\violympic_scanned_ocr_filter.json"
CACHE_DIR = r"C:\Users\TVCHUONG\Desktop\AI\06_eLearning\.cache\ocr_violympic"
TEMP_IMG_DIR = r"C:\Users\TVCHUONG\Desktop\AI\06_eLearning\.cache\ocr_temp_imgs"

os.makedirs(CACHE_DIR, exist_ok=True)
os.makedirs(TEMP_IMG_DIR, exist_ok=True)

def safe_str(s):
    return s.encode('ascii', errors='replace').decode('ascii')

def get_file_cache_key(filepath):
    h = hashlib.sha256(filepath.encode('utf-8')).hexdigest()[:16]
    base = re.sub(r'[^a-zA-Z0-9_\-]', '_', os.path.basename(filepath))[:30]
    return f"{base}_{h}.json"

def is_inverted_doc(filepath):
    fn = os.path.basename(filepath).lower()
    return any(k in fn for k in ['l1 gốc', 'l3 gốc', 'l4 gốc', 'l5 gốc', 'lớp 1 sách', 'lớp 3 sách', 'lớp 5 sách'])

def ocr_single_image(img_bytes, worker_id, page_num, rotate_180=False):
    temp_path = os.path.join(TEMP_IMG_DIR, f"w_{worker_id}_p_{page_num}_{os.getpid()}.png")
    try:
        img = Image.open(io.BytesIO(img_bytes))
        if rotate_180:
            img = img.rotate(180, expand=True)
        if img.mode not in ('L', 'RGB'):
            img = img.convert('RGB')
        img.save(temp_path, format='PNG')
        
        cmd = [
            TESS_EXE,
            temp_path,
            "stdout",
            "-l", "vie+eng",
            "--tessdata-dir", TESSDATA_DIR,
            "--psm", "6"
        ]
        res = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8', errors='replace', timeout=40)
        return res.stdout.strip()
    except Exception as e:
        return f"[OCR_ERROR: {e}]"
    finally:
        if os.path.exists(temp_path):
            try:
                os.remove(temp_path)
            except Exception:
                pass

def process_single_document(doc_item, worker_id=0):
    filepath = doc_item['full_path']
    cache_key = get_file_cache_key(filepath)
    cache_path = os.path.join(CACHE_DIR, cache_key)
    
    should_rotate = is_inverted_doc(filepath)
    
    if os.path.exists(cache_path) and not should_rotate:
        try:
            with open(cache_path, 'r', encoding='utf-8') as f:
                cached_data = json.load(f)
                if cached_data.get('ocr_completed'):
                    return cached_data
        except Exception:
            pass

    t0 = time.time()
    ext = doc_item['ext'].lower()
    pages_results = []
    
    if ext == '.pdf':
        try:
            reader = pypdf.PdfReader(filepath)
            total_pages = len(reader.pages)
            
            for page_idx in range(total_pages):
                page = reader.pages[page_idx]
                page_text = ""
                extracted_txt = (page.extract_text() or "").strip()
                
                images_on_page = []
                try:
                    images_on_page = list(page.images)
                except Exception:
                    pass
                
                if images_on_page:
                    img_texts = []
                    for img_obj in images_on_page:
                        if len(img_obj.data) > 5120:
                            ocr_txt = ocr_single_image(img_obj.data, worker_id, page_idx + 1, rotate_180=should_rotate)
                            if ocr_txt and not ocr_txt.startswith("[OCR_ERROR"):
                                img_texts.append(ocr_txt)
                    
                    combined_ocr = "\n\n".join(img_texts).strip()
                    if len(combined_ocr) > len(extracted_txt):
                        page_text = combined_ocr
                    else:
                        page_text = extracted_txt
                else:
                    page_text = extracted_txt
                    
                pages_results.append({
                    "page_number": page_idx + 1,
                    "character_count": len(page_text),
                    "text": page_text
                })
        except Exception as e:
            pages_results.append({
                "page_number": 1,
                "character_count": 0,
                "text": f"[PDF_READ_ERROR: {str(e)}]"
            })
    elif ext in ['.png', '.jpg', '.jpeg', '.bmp', '.webp', '.tif', '.tiff']:
        try:
            with open(filepath, 'rb') as f:
                img_bytes = f.read()
            ocr_txt = ocr_single_image(img_bytes, worker_id, 1)
            pages_results.append({
                "page_number": 1,
                "character_count": len(ocr_txt),
                "text": ocr_txt
            })
        except Exception as e:
            pages_results.append({
                "page_number": 1,
                "character_count": 0,
                "text": f"[IMAGE_READ_ERROR: {str(e)}]"
            })
            
    total_chars = sum(p['character_count'] for p in pages_results)
    elapsed = round(time.time() - t0, 2)
    
    result_doc = {
        "file_name": doc_item['file_name'],
        "rel_path": doc_item['rel_path'],
        "full_path": filepath,
        "grades": doc_item.get('grades', []),
        "ext": ext,
        "size_mb": doc_item.get('size_mb', 0),
        "total_pages": len(pages_results),
        "total_characters": total_chars,
        "ocr_completed": True,
        "elapsed_seconds": elapsed,
        "pages": pages_results
    }
    
    with open(cache_path, 'w', encoding='utf-8') as f:
        json.dump(result_doc, f, ensure_ascii=False, indent=2)
        
    return result_doc

def worker_task(args):
    doc_item, worker_id = args
    try:
        return process_single_document(doc_item, worker_id)
    except Exception as e:
        return {
            "file_name": doc_item['file_name'],
            "rel_path": doc_item['rel_path'],
            "grades": doc_item.get('grades', []),
            "total_pages": 0,
            "total_characters": 0,
            "ocr_completed": False,
            "error": str(e),
            "pages": []
        }

def categorize_subject(name, path):
    full = (name + " " + path).lower()
    if 'tiếng việt' in full or 'tieng viet' in full or 'ttv' in full:
        return 'Tiếng Việt'
    if 'toán tiếng anh' in full or 'toan tieng anh' in full or 'tta' in full or 'math english' in full:
        return 'Toán Tiếng Anh'
    return 'Toán'

def generate_master_report(results, out_md_path):
    lines = []
    lines.append("# BÁO CÁO TOÀN DIỆN OCR 99 TÀI LIỆU SCAN VIOLYMPIC (LỚP 1 - 5)\n")
    lines.append("- **Hệ thống OCR**: Tesseract OCR v5.x (Vietnamese + English Language Models)")
    lines.append("- **Thư mục nguồn**: `refer/Violympic`")
    lines.append(f"- **Tổng số tài liệu scan đã xử lý**: **{len(results)} tệp**")
    
    total_pages = sum(d.get('total_pages', 0) for d in results)
    total_chars = sum(d.get('total_characters', 0) for d in results)
    lines.append(f"- **Tổng số trang đã OCR**: **{total_pages:,} trang**")
    lines.append(f"- **Tổng số ký tự trích xuất**: **{total_chars:,} ký tự**")
    lines.append(f"- **Thời gian hoàn tất**: `{time.strftime('%Y-%m-%d %H:%M:%S')}`\n")
    lines.append("---\n")
    
    lines.append("## 1. BẢNG DANH MỤC 99 TÀI LIỆU VÀ KẾT QUẢ OCR\n")
    lines.append("| STT | Khối Lớp | Môn Học | Tên Tệp Tài Liệu | Định Dạng | Số Trang | Ký Tự OCR | Trạng Thái |")
    lines.append("| :---: | :---: | :---: | :--- | :---: | :---: | :---: | :---: |")
    
    for idx, d in enumerate(results, 1):
        grades_str = ", ".join(f"Lớp {g}" for g in d.get('grades', []))
        subj = categorize_subject(d['file_name'], d.get('rel_path', ''))
        status = "✅ Hoàn tất" if d.get('ocr_completed') else "❌ Lỗi"
        lines.append(f"| {idx} | **{grades_str}** | {subj} | `{d['file_name']}` | {d['ext']} | {d['total_pages']} | {d['total_characters']:,} | {status} |")
        
    lines.append("\n---\n")
    lines.append("## 2. NỘI DUNG VĂN BẢN TRÍCH XUẤT THEO TỪNG TÀI LIỆU (LỚP 1 - 5)\n")
    
    for idx, d in enumerate(results, 1):
        grades_str = ", ".join(f"Lớp {g}" for g in d.get('grades', []))
        subj = categorize_subject(d['file_name'], d.get('rel_path', ''))
        lines.append(f"### 📂 [{idx}/{len(results)}] {d['file_name']}")
        lines.append(f"- **Khối lớp**: {grades_str} | **Môn học**: {subj}")
        lines.append(f"- **Đường dẫn**: `{d.get('rel_path', '').replace('\\', '/')}`")
        lines.append(f"- **Số trang**: {d['total_pages']} | **Dung lượng**: {d.get('size_mb', 0)} MB | **Tổng ký tự**: {d['total_characters']:,}\n")
        
        pages = d.get('pages', [])
        for p in pages:
            p_num = p.get('page_number', 1)
            p_txt = p.get('text', '').strip()
            if p_txt:
                lines.append(f"#### 📄 Trang {p_num} ({p.get('character_count', 0)} ký tự):")
                lines.append("```text")
                lines.append(p_txt)
                lines.append("```\n")
            else:
                lines.append(f"#### 📄 Trang {p_num}: *(Không phát hiện chữ)*\n")
                
        lines.append("\n---\n")
        
    with open(out_md_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(lines))

def run_all():
    with open(FILTER_JSON, 'r', encoding='utf-8') as f:
        filter_data = json.load(f)
        
    scanned_docs = filter_data['scanned_docs']
    total_docs = len(scanned_docs)
    print(f"Loaded {total_docs} scanned documents requiring OCR.")
    
    num_workers = min(os.cpu_count() or 4, 8)
    print(f"Starting OCR with {num_workers} parallel workers...")
    
    tasks = [(doc, idx % num_workers) for idx, doc in enumerate(scanned_docs)]
    
    results = []
    completed_count = 0
    total_chars_all = 0
    total_pages_all = 0
    start_time = time.time()
    
    with ProcessPoolExecutor(max_workers=num_workers) as executor:
        futures = {executor.submit(worker_task, task): task[0] for task in tasks}
        
        for future in as_completed(futures):
            res = future.result()
            results.append(res)
            completed_count += 1
            chars = res.get('total_characters', 0)
            pages = res.get('total_pages', 0)
            total_chars_all += chars
            total_pages_all += pages
            
            pct = round(completed_count / total_docs * 100, 1)
            elapsed_all = round(time.time() - start_time, 1)
            clean_name = safe_str(res['file_name'])
            print(f"[{completed_count}/{total_docs} - {pct}%] ({elapsed_all}s) OCR: {clean_name} -> {pages} pages, {chars} chars")
            
    # Sort results by grade and filename
    results.sort(key=lambda x: (min(x.get('grades') or [99]), x.get('file_name', '')))
    
    # Save full JSON dataset
    out_json = r"C:\Users\TVCHUONG\Desktop\AI\06_eLearning\reports\violympic_ocr_99_dataset.json"
    with open(out_json, 'w', encoding='utf-8') as f:
        json.dump({
            "total_documents": len(results),
            "total_pages": total_pages_all,
            "total_characters": total_chars_all,
            "processed_at": time.strftime("%Y-%m-%d %H:%M:%S"),
            "documents": results
        }, f, ensure_ascii=False, indent=2)
        
    print(f"\nSaved JSON dataset: {out_json}")
    
    # Generate Master Markdown Report
    out_md = r"C:\Users\TVCHUONG\Desktop\AI\06_eLearning\reports\BAO_CAO_OCR_TOAN_BO_99_TAI_LIEU_VIOLYMPIC.md"
    generate_master_report(results, out_md)
    print(f"Saved Master Report: {out_md}")
    print(f"Total Pages OCRed: {total_pages_all:,} | Total Characters Extracted: {total_chars_all:,}")

if __name__ == "__main__":
    run_all()

