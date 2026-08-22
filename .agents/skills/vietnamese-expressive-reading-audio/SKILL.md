---
name: vietnamese-expressive-reading-audio
description: Tiêu chuẩn và quy trình xử lý ngữ điệu, ngắt nghỉ câu, đọc diễn cảm bài thơ/văn bản SGK Tiếng Việt và xuất bản âm thanh chất lượng cao chuẩn sư phạm cho WonderKids (VieNeu-TTS Cô Giáo Vy, MP3 128kbps, master WAV backup).
---

# Tiêu Chuẩn Thu Âm & Đọc Diễn Cảm Bài Đọc Tiếng Việt SGK

Kỹ năng này quy định toàn bộ tiêu chuẩn sư phạm, kỹ thuật tiền xử lý ngữ điệu (prosody engineering), cấu hình engine giọng đọc Cô Giáo Vy và quy trình xuất bản file âm thanh cho các bài đọc SGK Tiếng Việt (Lớp 1 đến Lớp 5) cùng hệ thống câu hỏi/mini game trong WonderKids.

---

## 1. Nguyên Tắc Sư Phạm Cốt Lõi

1. **Không đọc dồn dập, liền mạch một hơi:**
   - Học sinh tiểu học (đặc biệt Lớp 1 - 3) cần thời gian xử lý và liên kết từ ngữ với hình ảnh/mặt chữ.
   - Luôn có khoảng dừng thở tự nhiên (250ms - 500ms) giữa các câu hoàn chỉnh và sau dấu chấm câu.
2. **Tách biệt rõ Tiêu đề bài / Tác giả với Nội dung bài:**
   - Đọc tiêu đề xong phải có khoảng nghỉ rõ ràng (~600ms - 800ms) trước khi bước vào đoạn đầu tiên.
   - Tên tác giả ở cuối bài cũng được ngắt nghỉ trang trọng.
3. **Đọc diễn cảm bài thơ & câu vần:**
   - Mỗi dòng thơ là một nhịp điệu riêng: ngắt nhịp cuối mỗi dòng thơ (~300ms - 400ms).
   - Giữa các khổ thơ có khoảng nghỉ dài hơn (~500ms - 700ms).
   - Thể hiện âm hưởng ngọt ngào, giọng điệu du dương, đúng thanh điệu và trọng âm tiếng Việt.
4. **Giọng đọc chuẩn sư phạm:**
   - Sử dụng giọng **Cô Giáo Vy** (giọng nữ miền Nam ấm áp, truyền cảm, phát âm tròn vành rõ chữ).
   - Tốc độ đọc vừa phải (khoảng 110 - 130 từ/phút), không quá nhanh khiến trẻ khó theo dõi.

---

## 2. Kỹ Thuật Tiền Xử Lý Ngữ Điệu (Prosody Preprocessing)

Trước khi truyền văn bản vào mô hình VieNeu-TTS, bắt buộc chạy qua hàm chuẩn hóa ngữ điệu `enrich_reading_passage_prosody(passage)`:

```python
import re

def enrich_reading_passage_prosody(title: str, content_lines: list[str], author: str = "") -> str:
    parts = []
    
    # 1. Tiêu đề bài đọc: chèn khoảng nghỉ dài sau tiêu đề
    clean_title = re.sub(r'[*#_~`💡✨⭐🔊🎉🏖️•—]', '', title).strip()
    if clean_title:
        parts.append(f"{clean_title}:... ")
    
    # 2. Xử lý từng dòng nội dung (đặc biệt phát hiện thơ hoặc văn xuôi)
    is_poem = len(content_lines) >= 4 and any(len(line.split()) <= 8 for line in content_lines[:4])
    
    for line in content_lines:
        l = line.strip()
        if not l:
            continue
        
        # Loại bỏ ký tự thừa
        l = re.sub(r'[*#_~`💡✨⭐🔊🎉🏖️•—]', '', l).strip()
        
        if is_poem:
            # Ngắt nhịp cuối mỗi dòng thơ
            if not l.endswith(('.', '!', '?', '...', ':', ',')):
                l += '...'
            elif l.endswith(','):
                l = l[:-1] + '... '
            parts.append(l)
        else:
            # Văn xuôi: tạo khoảng nghỉ tự nhiên giữa các câu
            l = re.sub(r'([.!?])\s+([A-ZÀ-Ỹ0-9])', r'\1... \2', l)
            l = re.sub(r':\s*', r':... ', l)
            l = re.sub(r';\s*', r';... ', l)
            parts.append(l)
            
    # 3. Tên tác giả (nếu có)
    if author:
        clean_author = re.sub(r'[*#_~`💡✨⭐🔊🎉🏖️•—()Theo\s+]', '', author).strip()
        if clean_author:
            parts.append(f"... Tác giả: {clean_author}.")
            
    # Kết hợp và chuẩn hóa dấu chấm lửng
    full_text = ' '.join(parts)
    full_text = re.sub(r'\.{4,}', '...', full_text)
    full_text = re.sub(r'\s+', ' ', full_text).strip()
    return full_text
```

---

## 3. Cấu Hình Engine Thu Âm (VieNeu-TTS trên GPU)

- **Mô hình:** `Vieneu(mode="v3turbo")` trên CUDA.
- **Reference Voice:** Profile Cô Giáo Vy (`storage/voices/vieneu/Cô Giáo Vy.wav`).
- **Tham số sinh:**
  - `temperature = 0.38 - 0.40` (giúp ngữ điệu du dương, sống động, tránh monotone robot).
- **Chuẩn hóa Audio:**
  - Định dạng master WAV PCM: 24kHz / 44.1kHz float32.
  - Chuyển đổi sang MP3: 128 kbps stereo, 44.1kHz thông qua ffmpeg.

---

## 4. Quy Chuẩn Xuất Bản & Đồng Bộ Dữ Liệu

1. **Lưu trữ MP3 Production:**
   - Bài đọc SGK: `public/audio/curriculum/{lessonId}.mp3`
   - Câu hỏi & Game: `public/audio/questions/{questionId}.mp3`
2. **Lưu trữ Master WAV Backup tại Local:**
   - Thư mục: `backup_audio_wav/` (Đã ignore trong `.gitignore`, không push lên Git).
3. **Cập nhật Manifest:**
   - Tự động ghi nhận mã băm `transcriptHash` (SHA-256) và đường dẫn file MP3 vào `audioManifest.generated.json`.
4. **Kiểm tra bắt buộc trước khi commit:**
   - Chạy lệnh kiểm thử: `npm run verify:vietnamese-audio`
   - Chạy lệnh build: `npm run build`
   - Đảm bảo 100% bài đọc đều có file MP3 hợp lệ, không lỗi cú pháp hoặc mất file.
