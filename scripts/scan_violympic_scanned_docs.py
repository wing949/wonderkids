import os
import re
import json
import pypdf
from pathlib import Path

ROOT_DIR = r"C:\Users\TVCHUONG\Desktop\AI\06_eLearning\refer\Violympic"

def detect_grade(filename, filepath):
    full_str = (filename + " " + filepath).lower()
    
    # Check for excluded grades first (6 to 12)
    excluded_matches = re.findall(r'(?:l[oớ]p|kh[oố]i|grade|g)[_\s\-]*(6|7|8|9|10|11|12)\b', full_str)
    # Check for primary grades (1 to 5)
    primary_matches = re.findall(r'(?:l[oớ]p|kh[oố]i|grade|g)[_\s\-]*(1|2|3|4|5)\b', full_str)
    
    # Also check standalone keywords
    if not primary_matches and not excluded_matches:
        if 'tiểu học' in full_str or 'tieu hoc' in full_str:
            primary_matches = ['1', '2', '3', '4', '5']
    
    grades = sorted(list(set(int(g) for g in primary_matches if 1 <= int(g) <= 5)))
    excluded = sorted(list(set(int(g) for g in excluded_matches if int(g) >= 6)))
    
    return grades, excluded

def analyze_pdf(pdf_path):
    try:
        reader = pypdf.PdfReader(pdf_path)
        total_pages = len(reader.pages)
        if total_pages == 0:
            return {"error": "No pages", "pages": 0, "is_scan": True, "avg_chars": 0}
        
        total_chars = 0
        pages_with_text = 0
        pages_with_images = 0
        sample_text = []
        
        # Check first up to 15 pages (or all if <= 15)
        check_count = min(total_pages, 15)
        for i in range(check_count):
            try:
                page = reader.pages[i]
                txt = page.extract_text() or ""
                clean_txt = re.sub(r'\s+', ' ', txt).strip()
                chars = len(clean_txt)
                total_chars += chars
                if chars > 30:
                    pages_with_text += 1
                    if len(sample_text) < 3:
                        sample_text.append(clean_txt[:100])
                
                # Check images
                try:
                    if len(page.images) > 0:
                        pages_with_images += 1
                except Exception:
                    pass
            except Exception as e:
                pass
        
        avg_chars = total_chars / max(1, check_count)
        
        # If average characters per page is very low (< 40) or 0, it's definitely a scanned image PDF
        is_scan = avg_chars < 40 or (pages_with_text == 0 and check_count > 0)
        is_hybrid = not is_scan and (pages_with_images > check_count * 0.7 and avg_chars < 150)
        
        return {
            "total_pages": total_pages,
            "checked_pages": check_count,
            "total_chars_checked": total_chars,
            "avg_chars_per_page": round(avg_chars, 1),
            "pages_with_text": pages_with_text,
            "pages_with_images": pages_with_images,
            "is_scan": is_scan,
            "is_hybrid": is_hybrid,
            "sample_snippet": sample_text[0] if sample_text else ""
        }
    except Exception as e:
        return {
            "error": str(e),
            "is_scan": True,
            "total_pages": 0,
            "avg_chars_per_page": 0
        }

def scan_directory():
    results = []
    
    for root, dirs, files in os.walk(ROOT_DIR):
        for file in files:
            filepath = os.path.join(root, file)
            rel_path = os.path.relpath(filepath, ROOT_DIR)
            ext = os.path.splitext(file)[1].lower()
            file_size_mb = round(os.path.getsize(filepath) / (1024 * 1024), 2)
            
            grades, excluded_grades = detect_grade(file, rel_path)
            
            # Skip if explicitly only secondary / high school (grades 6-12 without 1-5)
            if excluded_grades and not grades:
                continue
                
            # If no grade detected from filename, let's see if we can detect from pdf content or if it's general
            is_scan = False
            pdf_info = None
            
            if ext == '.pdf':
                pdf_info = analyze_pdf(filepath)
                is_scan = pdf_info.get("is_scan", False)
                # If no grade detected from filename, check sample snippet
                if not grades and pdf_info.get("sample_snippet"):
                    snippet = pdf_info["sample_snippet"]
                    g_found, _ = detect_grade(snippet, "")
                    if g_found:
                        grades = g_found
            elif ext in ['.png', '.jpg', '.jpeg', '.bmp', '.webp', '.tif', '.tiff']:
                is_scan = True
            elif ext in ['.docx', '.doc']:
                # word docs
                is_scan = False
            
            # Default to grade 1-5 if in a general primary violympic folder
            if not grades and not excluded_grades:
                grades = [1, 2, 3, 4, 5]
                
            results.append({
                "file_name": file,
                "rel_path": rel_path,
                "full_path": filepath,
                "ext": ext,
                "size_mb": file_size_mb,
                "grades": grades,
                "is_scan": is_scan,
                "pdf_info": pdf_info
            })
            
    return results

if __name__ == "__main__":
    items = scan_directory()
    
    # Separate scanned docs
    scanned_primary_docs = [it for it in items if it["is_scan"] and it["grades"]]
    digital_primary_docs = [it for it in items if not it["is_scan"] and it["grades"]]
    
    output = {
        "root_dir": ROOT_DIR,
        "total_scanned_primary_docs": len(scanned_primary_docs),
        "total_digital_primary_docs": len(digital_primary_docs),
        "scanned_docs": scanned_primary_docs,
        "digital_docs": digital_primary_docs
    }
    
    out_file = r"C:\Users\TVCHUONG\Desktop\AI\06_eLearning\reports\violympic_scanned_ocr_filter.json"
    os.makedirs(os.path.dirname(out_file), exist_ok=True)
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
        
    print(f"DONE! Total scanned primary docs requiring OCR: {len(scanned_primary_docs)}")
    print(f"Total digital text primary docs (copyable): {len(digital_primary_docs)}")
