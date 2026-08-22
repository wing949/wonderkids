import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';
import fs from 'fs';

async function test() {
  const tts = new MsEdgeTTS();
  await tts.setMetadata('vi-VN-HoaiMyNeural', OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
  const streamResult = tts.toStream('Bài đọc: Ngày gặp lại. Tác giả: Chi Kha. Chi mở tung cửa sổ đón những tia nắng đầu tiên của ngày khai giảng.');

  await new Promise((resolve, reject) => {
    const chunks = [];
    streamResult.audioStream.on('data', (c) => chunks.push(c));
    streamResult.audioStream.on('end', () => {
      const buffer = Buffer.concat(chunks);
      fs.writeFileSync('public/audio/curriculum/test.mp3', buffer);
      console.log('Success! Bytes:', buffer.length);
      resolve();
    });
    streamResult.audioStream.on('error', reject);
  });
}

test().catch(console.error);
