import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';
import fs from 'fs';
import path from 'path';

const files = [
  'src/data/curriculum/vietnamese/grade1.ts',
  'src/data/curriculum/vietnamese/grade2.ts',
  'src/data/curriculum/vietnamese/grade3.ts',
  'src/data/curriculum/vietnamese/grade4.ts',
  'src/data/curriculum/vietnamese/grade5.ts'
];

function extractAllLessons() {
  const allLessons = [];
  files.forEach((file) => {
    const code = fs.readFileSync(file, 'utf8');
    const blocks = code.split(/\{\s*id:\s*'/);
    blocks.slice(1).forEach((b) => {
      const id = b.split(/'/)[0];
      const titleMatch = b.match(/title:\s*'([^']+)'/);
      const descMatch = b.match(/description:\s*'([^']+)'/);
      const summaryMatch = b.match(/summary:\s*'([^']+)'/);
      const title = titleMatch ? titleMatch[1] : id;
      const desc = descMatch ? descMatch[1] : '';
      const summary = summaryMatch ? summaryMatch[1] : '';
      
      const cleanText = `${title}. ${desc}. ${summary}`
        .replace(/[*#_~`💡✨⭐🔊🎉🏖️•—]/g, '')
        .replace(/\s+/g, ' ')
        .trim();

      allLessons.push({ id, text: cleanText });
    });
  });
  return allLessons;
}

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
      console.log('✅ Đã xuất audio:', path.basename(targetFilePath), `(${buffer.length} bytes)`);
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

  const allLessons = extractAllLessons();
  console.log(`🚀 Bắt đầu tạo audio cho toàn bộ ${allLessons.length} bài học SGK Lớp 1-5...`);

  let newlyCreated = 0;
  let skipped = 0;

  for (let i = 0; i < allLessons.length; i++) {
    const p = allLessons[i];
    const targetB = path.join(curDir, `${p.id}.mp3`);
    const targetL = path.join(curDir, `${p.id.replace('-b', '-l')}.mp3`);

    // Check if already valid
    if (fs.existsSync(targetB) && fs.statSync(targetB).size > 5000) {
      if (!fs.existsSync(targetL)) {
        fs.copyFileSync(targetB, targetL);
      }
      skipped++;
      continue;
    }

    console.log(`[${i + 1}/${allLessons.length}] 📖 Thu âm bài học: ${p.id}`);
    let success = false;

    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        await generateSingleFile(p.text, targetB);
        fs.copyFileSync(targetB, targetL);
        success = true;
        newlyCreated++;
        break;
      } catch (err) {
        console.warn(`⚠️ Thử lại lần ${attempt} (${p.id}):`, err.message);
        await sleep(1500);
      }
    }

    if (!success) {
      console.error(`❌ Thất bại bài: ${p.id}`);
    }

    await sleep(600);
  }

  console.log(`\n🎉 HOÀN TẤT 100%! Đã có sẵn: ${skipped} bài, vừa tạo mới: ${newlyCreated} bài.`);
  process.exit(0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
