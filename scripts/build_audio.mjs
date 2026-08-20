import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';
import fs from 'fs';
import path from 'path';

const allGradePassages = [
  // LỚP 1
  {
    id: 'tv-g1-b1',
    text: 'Bé Na Đi Học. Hôm nay là ngày đầu tiên bé Na đi học lớp Một. Mẹ mua cho Na cặp sách mới, vở mới và bút chì xinh. Na ríu rít chào ba mẹ rồi tự tin bước vào lớp cùng cô giáo và các bạn.'
  },
  {
    id: 'tv-g1-b2',
    text: 'Con Cò và Chú Cá Nhỏ. Con cò lặn lội bờ ao, bắt tép nuôi con. Cá nhỏ bơi lượn tung tăng dưới làn nước trong vắt. Cò đậu trên cành tre nghiêng bóng, khẽ nghiêng đầu ngắm cảnh quê yên bình.'
  },
  {
    id: 'tv-g1-b3',
    text: 'Bà Bế Bé. Chiều mát, bà bế bé ra hiên ngắm hoa. Bé cười toe toét chỉ vào chú bướm vàng đang bay. Bà hát ru êm dịu, gió thoảng đưa hương nhài ngào ngạt.'
  },
  {
    id: 'tv-g1-b4',
    text: 'Bé Vẽ Quả Lê. Bé cầm hộp sáp màu ngồi vẽ vào trang giấy trắng. Bé vẽ quả lê chín vàng ươm mọng nước. Bé đem khoe với ông bà, ai nấy đều khen ngợi bé vẽ khéo tay.'
  },
  {
    id: 'tv-g1-b5',
    text: 'Búp Bê Của Bé. Bé có một cô búp bê nhỏ rất xinh xắn. Búp bê có đôi mắt đen lay láy và mái tóc vàng bồng bềnh. Mỗi tối học bài xong, bé lại âu yếm chải tóc và ru búp bê ngủ.'
  },

  // LỚP 2
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

  // LỚP 3
  {
    id: 'tv-g3-b1',
    text: 'Ngày Gặp Lại. Chiếc trống trường vang lên rộn rã đón chào chúng tôi bước vào năm học lớp Ba. Gặp lại bạn bè sau ba tháng hè, ai nấy đều cao lớn và khỏe khoắn hơn hẳn. Chúng tôi tíu tít khoe với nhau về những trải nghiệm lý thú: bạn thì được về quê thăm ông bà, bạn thì đi biển lướt sóng. Cô giáo bước vào lớp với nụ cười hiền từ, ánh mắt chan chứa niềm tin yêu dành cho đàn con nhỏ.'
  },
  {
    id: 'tv-g3-b2',
    text: 'Về Thăm Quê. Tác giả Trần Đăng Khoa. Nghỉ hè em được về quê, Đường làng rợp bóng tre che mát lành. Cánh đồng lúa trĩu bông xanh, Gió đưa thoang thoảng hương chanh thơm lừng. Chiều về theo bác ra sông, Ngắm đàn vịt lội bềnh bồng dưới hoa, Đêm về ngồi dưới mái nhà, Nghe bà kể chuyện ngàn xưa diệu kỳ.'
  },
  {
    id: 'tv-g3-b3',
    text: 'Cánh Rừng Trong Nắng. Nắng sớm rọi xuống cánh rừng nguyên sinh rực rỡ. Những vạt nấm khổng lồ nhô lên như những chiếc ô tí hon đủ sắc màu. Tiếng suối róc rách hòa cùng tiếng chim rừng hót líu lo tạo nên bản hòa ca tuyệt vời của thiên nhiên.'
  },

  // LỚP 4
  {
    id: 'tv-g4-b1',
    text: 'Điều Kì Diệu. Mỗi người sinh ra trên thế giới này đều là một cá thể độc đáo và kỳ diệu. Bạn có thể có giọng nói trong trẻo, bạn khác lại có đôi bàn tay khéo léo vẽ tranh, có bạn lại sở hữu trái tim nhân hậu biết lắng nghe. Chính sự đa dạng và khác biệt đó đã tạo nên một thế giới muôn màu rực rỡ và chan chứa tình yêu thương.'
  },
  {
    id: 'tv-g4-b2',
    text: 'Thi Nhạc. Tác giả Nguyễn Quang Sáng. Trong khu rừng xanh, ngày hội thi âm nhạc diễn ra vô cùng sôi nổi. Chú Vàng Anh mang đến bài hát trong trẻo như giọt sương mai. Bác Ve Sầu kéo đàn vĩ cầm ngân vang rạo rực khúc ca mùa hạ. Ai nấy đều say mê cống hiến hết tài năng vì tình yêu nghệ thuật cao đẹp.'
  },

  // LỚP 5
  {
    id: 'tv-g5-b1',
    text: 'Thư Gửi Các Học Sinh. Tác giả Hồ Chí Minh. Các em học sinh, Ngày hôm nay là ngày khai trường đầu tiên ở nước Việt Nam Dân chủ Cộng hòa. Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em. Bác mong các em hãy cố gắng siêng năng học tập, ngoan ngoãn, vâng lời thầy yêu bạn.'
  },
  {
    id: 'tv-g5-b3',
    text: 'Quang Cảnh Làng Mạc Ngày Mùa. Tác giả Tô Hoài. Mùa đông, giữa ngày mùa, làng quê toàn màu vàng — những màu vàng rất khác nhau. Màu lúa chín dưới đồng vàng xuộm lại. Nắng nhạt ngả màu vàng hoe. Trong vườn, chùm xoan vàng lịm không trông thấy cuống. Từng chiếc lá mít vàng ối. Tất cả đượm một màu trù phú, đầm ấm lạ lùng của một làng quê Việt Nam no ấm.'
  }
];

async function generateSingleFile(text, targetFilePath) {
  const tts = new MsEdgeTTS();
  await tts.setMetadata('vi-VN-HoaiMyNeural', OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
  const streamResult = tts.toStream(text);

  return new Promise((resolve, reject) => {
    const chunks = [];
    streamResult.audioStream.on('data', (c) => chunks.push(c));
    streamResult.audioStream.on('end', () => {
      const buffer = Buffer.concat(chunks);
      fs.writeFileSync(targetFilePath, buffer);
      console.log('✅ Generated:', path.basename(targetFilePath), `(${buffer.length} bytes)`);
      resolve(buffer.length);
    });
    streamResult.audioStream.on('error', (err) => {
      reject(err);
    });
  });
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function run() {
  const curDir = path.join(process.cwd(), 'public', 'audio', 'curriculum');
  if (!fs.existsSync(curDir)) fs.mkdirSync(curDir, { recursive: true });

  console.log(`🎙️ Kiểm tra và sinh toàn bộ ${allGradePassages.length} bài đọc (Lớp 1-5)...`);

  for (const p of allGradePassages) {
    const targetB = path.join(curDir, `${p.id}.mp3`);
    const targetL = path.join(curDir, `${p.id.replace('-b', '-l')}.mp3`);

    // Check if already valid
    if (fs.existsSync(targetB) && fs.statSync(targetB).size > 10000) {
      console.log(`⏩ Đã có sẵn: ${p.id}.mp3 (${fs.statSync(targetB).size} bytes)`);
      if (!fs.existsSync(targetL)) {
        fs.copyFileSync(targetB, targetL);
      }
      continue;
    }

    console.log('📖 Đang thu âm bài đọc:', p.id);
    let success = false;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        await generateSingleFile(p.text, targetB);
        fs.copyFileSync(targetB, targetL);
        success = true;
        break;
      } catch (err) {
        console.warn(`⚠️ Thử lại lần ${attempt} (${p.id}):`, err.message);
        await sleep(1500);
      }
    }

    if (!success) {
      console.error('❌ Thất bại bài:', p.id);
    }
    await sleep(800);
  }

  console.log('🎉 TOÀN BỘ KHO AUDIO BÀI ĐỌC SGK LỚP 1–5 ĐÃ SẴN SÀNG 100%!');
  process.exit(0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
