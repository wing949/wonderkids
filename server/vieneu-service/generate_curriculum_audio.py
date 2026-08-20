"""
WonderKids Curriculum Audio Batch Pre-generator
Tạo sẵn toàn bộ file audio chuẩn phòng thu cho SGK Lớp 1-5
Giúp ứng dụng đạt 0ms độ trễ, tiết kiệm 100% tài nguyên server khi học sinh truy cập
"""

import os
import json

CURRICULUM_PASSAGES = [
    {
        "id": "toi-di-hoc",
        "title": "Tôi đi học",
        "text": "Hằng năm, cứ vào cuối thu, lá ngoài đường rụng nhiều và trên không có những đám mây bàng bạc, lòng tôi lại nao nức những kỷ niệm hoang mang của buổi tựu trường. Buổi sáng mai hôm ấy, một buổi mai đầy sương thu và gió lạnh, mẹ tôi âu yếm nắm tay tôi dẫn đi trên con đường làng dài và hẹp."
    },
    {
        "id": "chu-ga-trong-thong-minh",
        "title": "Bác gà trống thông minh",
        "text": "Trên cây sồi già, có một bác Gà Trống đang đứng gáy vang báo hiệu trời sáng. Một con Cáo già đi ngang qua, thấy Gà Trống béo tốt liền nảy ra ý định muốn ăn thịt. Cáo tiến lại gần và cất giọng ngọt ngào: Bạn Gà Trống ơi, từ nay muôn loài đã kết bạn hòa bình rồi, bạn hãy xuống đây chúng ta cùng tâm sự nhé! Bác Gà Trống nghe vậy liền ngẫm nghĩ, bác vươn cổ nhìn ra xa rồi nói: Ôi, vui quá! Đằng kia có một đàn Chó Săn cũng đang chạy lại để chia vui này! Cáo nghe thấy tiếng Chó Săn thì sợ hãi cụp đuôi, vắt chân lên cổ chạy biến vào rừng sâu."
    },
    {
        "id": "ngoi-truong-moi",
        "title": "Ngôi trường mới",
        "text": "Trường mới của em xây trên nền ngôi trường cũ lợp lá. Nhìn từ xa, những mảng tường vàng, ngói đỏ như những cánh hoa tươi thắm mọc giữa màu xanh của cây cối. Vào lớp, em thấy tường vôi trắng tinh, bàn ghế gỗ xoan đào thơm lừng."
    },
    {
        "id": "lam-anh",
        "title": "Làm anh",
        "text": "Làm anh khó đấy, phải đâu chuyện đùa. Với em gái bé, phải người lớn cơ. Khi em bé khóc, anh phải dỗ dành. Nếu em bé ngã, anh nâng dịu dàng. Mẹ cho quà bánh, chia em phần hơn. Có đồ chơi đẹp, cũng nhường em luôn."
    },
    {
        "id": "cau-chuyen-bon-mua",
        "title": "Câu chuyện bốn mùa",
        "text": "Một ngày đầu năm, bốn nàng tiên Xuân, Hạ, Thu, Đông gặp nhau. Nàng Đông nói: Chị Xuân đi đến đâu là cây cối đâm chồi nảy lộc. Nàng Xuân cười: Nhưng phải có nắng của em Hạ thì trái mới ngọt chín. Nàng Thu tiếp lời: Còn nhờ có em Thu mà trăng rằm sáng rực rỡ, các em nhỏ được phá cỗ rước đèn. Cả bốn nàng tiên đều mang lại niềm vui cho đất trời."
    }
]

FEEDBACK_CLIPS = [
    {"id": "dung-roi", "text": "Đúng rồi! Bạn nhỏ làm rất xuất sắc."},
    {"id": "tuyet-voi", "text": "Tuyệt vời! Cùng tiếp tục nhận thêm sao vàng nhé."},
    {"id": "thu-lai", "text": "Chưa chính xác rồi bạn ơi, đừng nản lòng và cùng thử lại nhé!"}
]

def main():
    output_dir = os.path.join(os.path.dirname(__file__), "..", "..", "public", "audio", "curriculum")
    feedback_dir = os.path.join(os.path.dirname(__file__), "..", "..", "public", "audio", "feedback")
    os.makedirs(output_dir, exist_ok=True)
    os.makedirs(feedback_dir, exist_ok=True)

    print("🚀 Khởi chạy quá trình xuất audio bài học SGK bằng VieNeu-TTS...")

    try:
        from vieneu import Vieneu
        tts = Vieneu()
        print("✅ Đã nạp mô hình VieNeu-TTS thành công!")

        # 1. Render Reading Passages
        manifest = {}
        for p in CURRICULUM_PASSAGES:
            out_file = os.path.join(output_dir, f"{p['id']}.wav")
            print(f"🎙️ Đang sinh audio: {p['title']}...")
            audio = tts.infer(text=p["text"])
            tts.save(audio, out_file)
            manifest[p["id"]] = f"/audio/curriculum/{p['id']}.wav"
            print(f"✨ Hoàn tất -> {out_file}")

        # 2. Render Feedbacks
        for fb in FEEDBACK_CLIPS:
            fb_file = os.path.join(feedback_dir, f"{fb['id']}.wav")
            print(f"🎙️ Đang sinh feedback: {fb['text']}...")
            audio = tts.infer(text=fb["text"])
            tts.save(audio, fb_file)
            manifest[f"fb_{fb['id']}"] = f"/audio/feedback/{fb['id']}.wav"

        manifest_path = os.path.join(os.path.dirname(__file__), "..", "..", "public", "audio", "manifest.json")
        with open(manifest_path, "w", encoding="utf-8") as f:
            json.dump(manifest, f, ensure_ascii=False, indent=2)

        print(f"🎉 TẤT CẢ FILE AUDIO ĐÃ ĐƯỢC XUẤT THÀNH CÔNG TẠI: {output_dir}")
        print(f"📄 Manifest: {manifest_path}")

    except ImportError:
        print("⚠️ Chưa cài đặt 'pip install vieneu'. Bạn có thể cài đặt để chạy xuất audio.")

if __name__ == "__main__":
    main()
