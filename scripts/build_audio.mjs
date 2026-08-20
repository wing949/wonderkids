import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';
import fs from 'fs';
import path from 'path';

const passages = [
  {
    id: 'tv-g2-b1',
    text: 'Tôi là học sinh lớp hai. Sáng sớm ngày khai trường, tôi thức dậy thật sớm. Mẹ âu yếm vuốt tóc tôi và nói: Chúc mừng con trai yêu đã chính thức trở thành học sinh lớp hai! Tôi mặc bộ đồng phục mới tinh, tinh tươm và sạch sẽ. Đứng trước gương, tôi thấy mình lớn hơn hẳn năm ngoái. Không còn rụt rè, bỡ ngỡ như ngày đầu bước vào lớp Một nữa. Đến trường, sân trường rợp bóng cờ hoa và rộn rã tiếng cười nói. Tôi nhìn thấy thầy cô mến yêu và gặp lại những người bạn thân thiết. Chúng tôi tíu tít kể cho nhau nghe về những chuyến đi chơi mùa hè kỳ thú. Hồi trống trường giòn giã vang lên: Tùng! Tùng! Tùng! Chúng tôi trang nghiêm xếp hàng bước vào lớp học mới. Tôi tự hào thầm nhủ: Mình đã là học sinh lớp hai, mình sẽ học thật chăm chỉ và yêu thương bạn bè!'
  },
  {
    id: 'tv-g2-b2',
    text: 'Ngày hôm qua đâu rồi? Tác giả Bế Kiến Quốc. Em cầm tờ lịch cũ: Ngày hôm qua đâu rồi? Ra ngoài sân hỏi nụ, Nụ hồng vừa nở hoa. Ngày hôm qua ở lại, Trong hạt lúa mẹ trồng, Cánh đồng chờ gặt hái, Chín vàng màu ước mong. Ngày hôm qua ở lại, Trên cành hoa trong vườn, Nụ hoa mầm thơm ngát, Đang tỏa hương ngát lừng. Ngày hôm qua ở lại, Trong vở hồng của con, Con học hành chăm chỉ, Là ngày qua vẫn còn.'
  },
  {
    id: 'tv-g2-b3',
    text: 'Bác gà trống thông minh. Trên cây sồi già, có một bác Gà Trống đang đứng gáy vang báo hiệu trời sáng. Một con Cáo già đi ngang qua, thấy Gà Trống béo tốt liền nảy ra ý định muốn ăn thịt. Cáo tiến lại gần và cất giọng ngọt ngào: Bạn Gà Trống ơi, từ nay muôn loài đã kết bạn hòa bình rồi, bạn hãy xuống đây chúng ta cùng tâm sự nhé! Bác Gà Trống nghe vậy liền ngẫm nghĩ, bác vươn cổ nhìn ra xa rồi nói: Ôi, vui quá! Đằng kia có một đàn Chó Săn cũng đang chạy lại để chia vui này! Cáo nghe thấy tiếng Chó Săn thì sợ hãi cụp đuôi, vắt chân lên cổ chạy biến vào rừng sâu.'
  },
  {
    id: 'tv-g2-b4',
    text: 'Bữa cơm gia đình ấm áp. Chiều tối, cả nhà quây quần bên mâm cơm nóng hổi. Bố gắp cho mẹ miếng cá ngon nhất, mẹ mỉm cười gắp vào bát tôi một miếng sườn xào chua ngọt. Tôi ríu rít kể cho bố mẹ nghe về điểm mười môn Toán sáng nay. Bố xoa đầu tôi khen ngợi: Con gái bố giỏi lắm, hãy tiếp tục cố gắng nhé! Tiếng cười rộn rã làm xua tan đi bao mệt nhọc sau một ngày dài làm việc.'
  },
  {
    id: 'tv-g2-b5',
    text: 'Cánh đồng quê em. Vào mùa lúa chín, cánh đồng quê em trải rộng mênh mông như một tấm thảm vàng khổng lồ. Từng bông lúa trĩu hạt uốn cong dưới ánh nắng ban mai rực rỡ. Gió thổi nhẹ, sóng lúa nhấp nhô dập dờn đuổi nhau tít tận chân trời. Xa xa, các bác nông dân nón trắng đang thoăn thoắt thu hoạch lúa, gương mặt ai nấy đều rạng rỡ niềm vui được mùa.'
  }
];

const feedbacks = [
  { id: 'dung-roi', text: 'Tuyệt vời! Bạn trả lời rất chính xác.' },
  { id: 'gioi-qua', text: 'Giỏi quá! Đúng rồi bạn ơi.' },
  { id: 'xuat-sac', text: 'Xuất sắc! Bé nhận thêm một ngôi sao may mắn nhé.' },
  { id: 'chua-dung', text: 'Chưa chính xác rồi bạn nhỏ ơi! Gợi ý nè, bé hãy đọc kỹ lại câu hỏi và thử lại nhé.' }
];

async function generateAndSave(text, targetFilePath) {
  const dir = path.dirname(targetFilePath);
  const tts = new MsEdgeTTS();
  await tts.setMetadata('vi-VN-HoaiMyNeural', OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
  const result = await tts.toFile(dir, 'temp_' + Date.now(), text);
  if (result && result.audioFilePath) {
    fs.renameSync(result.audioFilePath, targetFilePath);
    console.log('✅ Generated:', targetFilePath, `(${fs.statSync(targetFilePath).size} bytes)`);
  }
}

async function run() {
  const curDir = path.join(process.cwd(), 'public', 'audio', 'curriculum');
  const fbDir = path.join(process.cwd(), 'public', 'audio', 'feedback');
  if (!fs.existsSync(curDir)) fs.mkdirSync(curDir, { recursive: true });
  if (!fs.existsSync(fbDir)) fs.mkdirSync(fbDir, { recursive: true });

  for (const p of passages) {
    const targetFile = path.join(curDir, `${p.id}.mp3`);
    console.log('🎙️ Generating passage:', p.id);
    await generateAndSave(p.text, targetFile);
  }

  for (const fb of feedbacks) {
    const targetFile = path.join(fbDir, `${fb.id}.mp3`);
    console.log('🎙️ Generating feedback:', fb.id);
    await generateAndSave(fb.text, targetFile);
  }

  console.log('🎉 ALL CURRICULUM AUDIO PRE-GENERATED PERFECTLY!');
}

run().catch(console.error);
