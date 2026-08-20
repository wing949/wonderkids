import fs from 'fs';
import path from 'path';

const API_URL = 'http://127.0.0.1:8000/api/voices/preview';
const OUT_DIR = 'public/audio/curriculum';

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const grades = [1, 2, 3, 4, 5];
const missingLessons = [];

grades.forEach(g => {
  const file = `src/data/curriculum/vietnamese/grade${g}.ts`;
  if (!fs.existsSync(file)) return;
  const code = fs.readFileSync(file, 'utf8');
  
  const topicBlocks = code.split(/\{\s*id:\s*'/).slice(1);
  topicBlocks.forEach(b => {
    const idMatch = b.match(/^(tv-g\d+-[bl]\d+)'/);
    if (!idMatch) return;
    const id = idMatch[1];
    
    const titleMatch = b.match(/title:\s*'([^']+)'/);
    const descMatch = b.match(/description:\s*'([^']+)'/);
    const sumMatch = b.match(/summary:\s*'([^']+)'/);
    
    const title = titleMatch ? titleMatch[1] : id;
    const desc = descMatch ? descMatch[1] : '';
    const sum = sumMatch ? sumMatch[1] : '';
    
    const normalizedB = id.replace('-l', '-b');
    const wavB = path.join(OUT_DIR, `${normalizedB}.wav`);
    
    if (!fs.existsSync(wavB)) {
      const cleanTitle = title.replace(/^Bài \d+:\s*/, '');
      const fullText = `${cleanTitle}. ${desc} ${sum ? sum : ''}`.trim();
      missingLessons.push({
        grade: g,
        id: normalizedB,
        title,
        text: fullText
      });
    }
  });
});

console.log(`📋 Tìm thấy tổng cộng ${missingLessons.length} bài học cần thu âm giọng Mỹ Duyên (VieNeu TTS)...`);

async function synthesizeMyDuyen(lesson) {
  const payload = {
    engine: 'vieneu-tts',
    voice_id: 'Mỹ Duyên',
    text: lesson.text,
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
        throw new Error(`Buffer quá nhỏ: ${buf.byteLength} bytes`);
      }

      const fileWavB = path.join(OUT_DIR, `${lesson.id}.wav`);
      const fileWavL = path.join(OUT_DIR, `${lesson.id.replace('-b', '-l')}.wav`);
      fs.writeFileSync(fileWavB, buf);
      fs.writeFileSync(fileWavL, buf);

      console.log(`✅ [Lớp ${lesson.grade}] Thu âm xong: ${lesson.id}.wav (${buf.byteLength} bytes) — ${lesson.title}`);
      return true;
    } catch (err) {
      console.warn(`⚠️ Lần thử ${attempt} (${lesson.id}) thất bại: ${err.message}`);
      if (attempt < 3) await new Promise(r => setTimeout(r, 2000));
    }
  }
  return false;
}

async function run() {
  console.log(`🚀 Bắt đầu tiến trình thu âm toàn bộ ${missingLessons.length} bài học...`);
  let successCount = 0;

  for (let i = 0; i < missingLessons.length; i++) {
    const lesson = missingLessons[i];
    console.log(`\n[${i + 1}/${missingLessons.length}] Đang xử lý: ${lesson.id} (Lớp ${lesson.grade})`);
    const ok = await synthesizeMyDuyen(lesson);
    if (ok) successCount++;
    await new Promise(r => setTimeout(r, 300));
  }

  console.log(`\n🎉 HOÀN TẤT: ${successCount}/${missingLessons.length} BÀI HỌC ĐÃ ĐƯỢC THU ÂM XONG 100% VỚI GIỌNG MỸ DUYÊN!`);
}

run();
