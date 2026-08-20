import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';

export default async function handler(req, res) {
  const { text, lang = 'vi', voice } = req.query;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const cleanText = String(text).slice(0, 1000);
    const voiceName = voice || (lang === 'en' ? 'en-US-JennyNeural' : 'vi-VN-HoaiMyNeural');

    const tts = new MsEdgeTTS();
    await tts.setMetadata(voiceName, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);

    const { audioStream } = tts.toStream(cleanText);

    const chunks = [];
    audioStream.on('data', (chunk) => chunks.push(chunk));
    audioStream.on('end', () => {
      const buffer = Buffer.concat(chunks);
      res.setHeader('Content-Type', 'audio/mpeg');
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      res.send(buffer);
    });
    audioStream.on('error', (err) => {
      res.status(500).json({ error: err.message });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
