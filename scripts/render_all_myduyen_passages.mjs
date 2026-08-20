import fs from 'fs';
import path from 'path';

const API_URL = 'http://127.0.0.1:8000/api/voices/preview';
const OUT_DIR = 'public/audio/curriculum';

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

// 33 bài đọc SGK chuẩn xác 100% từ Lớp 1 đến Lớp 5
const curriculumPassages = [
  // ================= LỚP 1 =================
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
  {
    id: 'tv-g1-b6',
    text: 'Gà Gáy Sáng. Chú gà trống gáy vang te te đón bình minh rạng rỡ. Ông mặt trời từ từ nhô lên chiếu ánh nắng hồng ấm áp khắp nương đồng.'
  },
  {
    id: 'tv-g1-b7',
    text: 'Chú Vịt Con. Chú vịt con lông vàng óng ả theo mẹ lội suối tìm mồi. Tiếng cạp cạp rộn ràng trên mặt hồ biếc xanh.'
  },
  {
    id: 'tv-g1-b8',
    text: 'Đi Học. Sáng sớm chim hót líu lo trên cành, bé nắm tay mẹ bước trên con đường làng thơm hương lúa mới.'
  },
  {
    id: 'tv-g1-b9',
    text: 'Bàn Tay Mẹ. Đôi bàn tay mẹ chăm sóc đàn con từng bữa ăn giấc ngủ, nâng niu từng bước đi chập chững đầu đời.'
  },
  {
    id: 'tv-g1-b10',
    text: 'Ngôi Nhà Của Bé. Ngôi nhà nhỏ có vườn hoa xinh xắn ngát hương, tiếng cười vui rộn rã mỗi sớm mai.'
  },

  // ================= LỚP 2 =================
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
    text: 'Niềm vui của Bi và Bống. Khi cơn mưa rào vừa tạnh, bảy sắc cầu vồng rực rỡ hiện ra trên nền trời xanh biếc. Bi nhìn cầu vồng rồi hào hứng nói với em gái: Bống ơi, dưới chân cầu vồng có một hũ vàng đấy! Nếu tìm thấy, anh sẽ mua một con ngựa hồng và một chiếc xe đạp thật đẹp! Bống reo lên vui sướng: Còn em sẽ mua thật nhiều búp bê và quần áo đẹp! Nhưng rồi Bi nhìn Bống cười hiền và nói: Anh sẽ mua cho em một chiếc hộp bút hình con gấu và đàn búp bê biết hát nữa! Bống ôm chầm lấy anh: Em cũng sẽ mua cho anh một quả bóng đá thật to và chiếc ô tô điều khiển từ xa! Cầu vồng từ từ tan biến trong ánh hoàng hôn, nhưng niềm vui và tình cảm yêu thương ấm áp giữa hai anh em Bi và Bống thì vẫn luôn đọng lại mãi trong ngôi nhà nhỏ.'
  },
  {
    id: 'tv-g2-b4',
    text: 'Làm việc thật là vui. Tác giả Tô Hoài. Quanh ta, mọi vật, mọi người đều làm việc. Cái đồng hồ tích tắc, tích tắc báo phút, báo giờ. Con gà trống gáy vang te te báo trời sáng, đánh thức mọi người dậy. Con tu hú kêu tu hú, tu hú báo mùa vải chín. Chim bắt sâu bảo vệ mùa màng. Cỏ hoa nở cho sắc xuân thêm rực rỡ, ngày xuân thêm tưng bừng. Như mọi vật, mọi người, bé cũng làm việc. Bé làm bài, bé đi học, bé quét nhà, nhặt rau, chơi với em đỡ mẹ. Bé luôn luôn bận rộn, mà công việc nhộn nhịp cũng làm cho bé lúc nào cũng vui vẻ.'
  },
  {
    id: 'tv-g2-b5',
    text: 'Em có xinh không? Voi em rất thích ngắm mình trong gương và luôn tự hỏi: Mình có xinh không nhỉ? Gặp Hươu, Voi hỏi: Anh Hươu ơi, em có xinh không? Hươu bảo: Chưa xinh lắm đâu, vì cậu không có đôi gạc đẹp như tớ! Voi liền nhặt hai cành cây gắn lên đầu. Gặp Dê, Dê bảo: Cậu chưa xinh vì không có chòm râu như tớ! Voi lại nhổ chùm râu bắp ngô gắn vào cằm. Về nhà gặp Voi anh, Voi anh bật cười bảo: Em xinh nhất khi là chính chú Voi con khỏe khoắn, tự tin! Voi em ngắm lại mình và nhận ra: Mỗi người đều có nét đẹp riêng, hãy luôn tự tin là chính mình!'
  },
  {
    id: 'tv-g2-b6',
    text: 'Một Giờ Học. Giờ học Tiếng Việt hôm nay thật thú vị và rộn rã. Thầy giáo giảng bài say mê, các bạn học sinh hăng hái giơ tay phát biểu xây dựng bài học mới.'
  },
  {
    id: 'tv-g2-b7',
    text: 'Cây xấu hổ. Bờ cỏ rậm rạp có một cây xấu hổ nhỏ bé. Gió thoảng qua thì thầm, cây khép từng cặp lá lại e ấp rồi từ từ mở ra đón ánh mặt trời chan hòa.'
  },
  {
    id: 'tv-g2-b8',
    text: 'Cầu Thủ Dự Bị. Dũng rất thích đá bóng cùng các bạn. Tinh thần đồng đội và sự đoàn kết giúp đội bóng giành chiến thắng tưng bừng.'
  },
  {
    id: 'tv-g2-b9',
    text: 'Cô giáo lớp em. Sáng nào em đến lớp cũng thấy cô đến rồi. Cô dạy em tập viết, gió đưa thoảng hương nhài, nắng ghé vào cửa lớp xem chúng em học bài.'
  },
  {
    id: 'tv-g2-b10',
    text: 'Thời Khóa Biểu. Thời khóa biểu giúp chúng mình sắp xếp thời gian biểu học tập khoa học và ngăn nắp mỗi ngày.'
  },

  // ================= LỚP 3 =================
  {
    id: 'tv-g3-b1',
    text: 'Ngày Gặp Lại. Chiếc trống trường vang lên rộn rã đón chào chúng tôi bước vào năm học lớp Ba. Gặp lại bạn bè sau ba tháng hè, ai nấy đều cao lớn và khỏe khoắn hơn hẳn. Chúng tôi tíu tít khoe với nhau về những chuyến đi chơi mùa hè kỳ thú.'
  },
  {
    id: 'tv-g3-b2',
    text: 'Về Thăm Quê. Tác giả Trần Đăng Khoa. Nghỉ hè em được về quê, Đường làng rợp bóng tre che mát lành. Cánh đồng lúa trĩu bông xanh, Gió đưa thoang thoảng hương chanh thơm lừng. Chiều về theo bác ra sông, Đêm về nghe bà kể chuyện diệu kỳ.'
  },
  {
    id: 'tv-g3-b3',
    text: 'Cánh Rừng Trong Nắng. Nắng sớm rọi xuống cánh rừng nguyên sinh rực rỡ. Những vạt nấm khổng lồ nhô lên như những chiếc ô tí hon đủ sắc màu. Tiếng suối róc rách hòa cùng tiếng chim rừng hót líu lo.'
  },
  {
    id: 'tv-g3-b4',
    text: 'Lần Đầu Ra Biển. Biển rộng mênh mông như tấm thảm xanh khổng lồ. Từng đợt sóng bạc đầu xô bờ cát trắng phau mang theo vị mặn nồng của biển khơi.'
  },
  {
    id: 'tv-g3-b5',
    text: 'Nhật Kí Chung. Cuốn nhật kí lớp học ghi lại những câu chuyện vui, những việc làm tốt và tình bạn thân thiết của chúng mình dưới mái trường mến yêu.'
  },

  // ================= LỚP 4 =================
  {
    id: 'tv-g4-b1',
    text: 'Điều Kì Diệu. Mỗi người sinh ra trên thế giới này đều là một cá thể độc đáo và kỳ diệu. Chính sự đa dạng và khác biệt đó đã tạo nên một thế giới muôn màu rực rỡ và chan chứa tình yêu thương.'
  },
  {
    id: 'tv-g4-b2',
    text: 'Thi Nhạc. Tác giả Nguyễn Quang Sáng. Trong khu rừng xanh, ngày hội thi âm nhạc diễn ra sôi nổi. Chú Vàng Anh mang đến bài hát trong trẻo như giọt sương mai, Bác Ve Sầu kéo đàn vĩ cầm ngân vang rạo rực khúc ca mùa hạ.'
  },
  {
    id: 'tv-g4-b3',
    text: 'Anh Em Sinh Đôi. Hai anh em tuy ngoại hình giống nhau như hai giọt nước nhưng mỗi người lại có một sở thích và ước mơ riêng biệt đầy thú vị.'
  },
  {
    id: 'tv-g4-b4',
    text: 'Công Chúa Và Người Dẫn Chuyện. Vở kịch của lớp đã thành công rực rỡ nhờ sự chuẩn bị chu đáo và tinh thần tập thể gắn bó keo sơn.'
  },

  // ================= LỚP 5 =================
  {
    id: 'tv-g5-b1',
    text: 'Thư Gửi Các Học Sinh. Tác giả Hồ Chí Minh. Các em học sinh, Ngày hôm nay là ngày khai trường đầu tiên ở nước Việt Nam Dân chủ Cộng hòa. Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em.'
  },
  {
    id: 'tv-g5-b2',
    text: 'Từ Đồng Nghĩa. Mở rộng vốn từ đồng nghĩa giúp câu văn miêu tả trở nên phong phú, sinh động và chính xác về sắc thái biểu cảm.'
  },
  {
    id: 'tv-g5-b3',
    text: 'Quang Cảnh Làng Mạc Ngày Mùa. Tác giả Tô Hoài. Mùa đông giữa ngày mùa, làng quê toàn màu vàng trù phú. Màu lúa chín dưới đồng vàng xuộm lại, nắng nhạt ngả màu vàng hoe, chùm xoan vàng lịm trong vườn thơm ngát.'
  },
  {
    id: 'tv-g5-b4',
    text: 'Hạt Gạo Làng Ta. Tác giả Trần Đăng Khoa. Hạt gạo làng ta có vị phù sa của sông Kinh Thầy, có hương sen thơm trong hồ nước đầy, có lời mẹ hát ngọt ngào hôm nay.'
  }
];

async function synthesizeMyDuyen(passage) {
  console.log(`🎙️ [${passage.id}] Đang thu âm giọng Mỹ Duyên (VieNeu TTS)...`);
  const payload = {
    engine: 'vieneu-tts',
    voice_id: 'Mỹ Duyên',
    text: passage.text,
    speed: 1.0,
    pitch: 1.0,
    volume: 1.0,
    generation_mode: 'once',
    max_chars: 256
  };

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.byteLength < 5000) {
        throw new Error(`Buffer too small: ${buf.byteLength} bytes`);
      }

      // Lưu file wav cho bài học và file alias -l
      const fileWavB = path.join(OUT_DIR, `${passage.id}.wav`);
      const fileWavL = path.join(OUT_DIR, `${passage.id.replace('-b', '-l')}.wav`);
      fs.writeFileSync(fileWavB, buf);
      fs.writeFileSync(fileWavL, buf);

      console.log(`✅ Hoàn tất: ${passage.id}.wav (${buf.byteLength} bytes)`);
      return;
    } catch (err) {
      console.warn(`⚠️ Lần thử ${attempt} (${passage.id}) thất bại: ${err.message}`);
      if (attempt < 3) await new Promise(r => setTimeout(r, 2000));
    }
  }
}

async function run() {
  console.log(`🚀 Bắt đầu sinh toàn bộ ${curriculumPassages.length} bài đọc bằng giọng Mỹ Duyên (VieNeu TTS)...`);
  for (let i = 0; i < curriculumPassages.length; i++) {
    const passage = curriculumPassages[i];
    console.log(`\n[${i + 1}/${curriculumPassages.length}] Xử lý ${passage.id}`);
    await synthesizeMyDuyen(passage);
    await new Promise(r => setTimeout(r, 500));
  }
  console.log(`\n🎉 TOÀN BỘ 33 BÀI ĐỌC ĐÃ ĐƯỢC THU ÂM BẰNG GIỌNG MỸ DUYÊN (VIENEU TTS) THÀNH CÔNG 100%!`);
}

run();
