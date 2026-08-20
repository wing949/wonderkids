# 🎙️ WonderKids VieNeu-TTS Dedicated Microservice

Dịch vụ chuyển đổi văn bản thành giọng nói (Text-to-Speech) tiếng Việt AI chuẩn sư phạm dành riêng cho hệ sinh thái WonderKids E-Learning. Tự chủ hoàn toàn 100% hạ tầng máy chủ, không phụ thuộc vào bất kỳ dịch vụ bên thứ ba nào.

---

## 🌟 Tính Năng Nổi Bật
* **Chất lượng âm thanh 48kHz:** Ngữ điệu tự nhiên, luyến láy, ngắt nghỉ câu diễn cảm như cô giáo tiểu học.
* **Tự động Cache:** Sử dụng MD5 hash cache trên đĩa để trả về âm thanh ngay lập tức (0ms độ trễ) cho các câu hỏi thường gặp.
* **Hỗ trợ Voice Cloning:** Nhân bản giọng đọc bất kỳ chỉ từ 3-5 giây file âm thanh mẫu.
* **Tích hợp sẵn Docker:** Chạy 1 lệnh duy nhất trên mọi môi trường (Windows, Linux, macOS, VPS, Cloud).

---

## 🚀 Cách Cài Đặt & Khởi Chạy

### Cách 1: Chạy trực tiếp bằng Python
1. **Cài đặt thư viện:**
   ```bash
   cd server/vieneu-service
   pip install -r requirements.txt
   ```
2. **Khởi chạy Server:**
   ```bash
   python server.py
   ```
   * Server sẽ chạy tại: `http://localhost:8000`
   * Swagger API Docs: `http://localhost:8000/docs`

---

### Cách 2: Chạy bằng Docker Compose (Khuyên dùng cho Production/VPS)
```bash
cd server/vieneu-service
docker compose up -d --build
```

---

## 🛠️ API Endpoints

### 1. Sinh âm thanh (POST `/api/tts`)
```bash
curl -X POST "http://localhost:8000/api/tts" \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Chào các con! Hôm nay chúng ta cùng học bài nhé.",
    "voice": "co_giao_ha_noi",
    "speed": 0.95
  }' --output audio.wav
```

### 2. Sinh âm thanh trực tiếp qua URL (GET `/api/tts`)
```
http://localhost:8000/api/tts?text=Chào+các+bạn+nhỏ&speed=0.95
```

### 3. Kiểm tra trạng thái máy chủ (GET `/health`)
```json
{
  "status": "online",
  "engine": "VieNeu-TTS v3 Turbo",
  "model_loaded": true,
  "sample_rate": 48000
}
```

---

## 📦 Xuất trước toàn bộ file Audio SGK cho Ứng dụng
Để tạo sẵn toàn bộ file audio cho các bài đọc SGK Lớp 1-5 và lưu vào thư mục `public/audio/curriculum/`:
```bash
python generate_curriculum_audio.py
```
Khi chạy xong, học sinh truy cập bài học sẽ nghe âm thanh ngay lập tức với 0ms độ trễ!
