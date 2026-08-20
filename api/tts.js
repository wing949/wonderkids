import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';

const ALLOWED_VOICES = new Set([
  'vi-VN-HoaiMyNeural',
  'vi-VN-NamMinhNeural',
  'en-US-JennyNeural',
  'en-US-GuyNeural',
]);

function getRequestInput(req) {
  if (req.method !== 'POST') return req.query || {};
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return req.body || {};
}

function escapeSsmlText(text) {
  return text.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  })[character]);
}

export default async function handler(req, res) {
  const { text, lang = 'vi', voice } = getRequestInput(req);

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const cleanText = String(text).trim().slice(0, 6000);
    if (!cleanText) return res.status(400).json({ error: 'Text is required' });
    const voiceName = ALLOWED_VOICES.has(voice)
      ? voice
      : (lang === 'en' ? 'en-US-JennyNeural' : 'vi-VN-HoaiMyNeural');

    const tts = new MsEdgeTTS();
    await tts.setMetadata(voiceName, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);

    const { audioStream } = tts.toStream(escapeSsmlText(cleanText));

    const chunks = [];
    let responded = false;
    const fail = (error) => {
      if (responded) return;
      responded = true;
      res.status(500).json({ error: error.message });
    };
    audioStream.on('data', (chunk) => chunks.push(chunk));
    audioStream.once('end', () => {
      if (responded) return;
      responded = true;
      const buffer = Buffer.concat(chunks);
      res.setHeader('Content-Type', 'audio/mpeg');
      res.setHeader('Cache-Control', 'no-store');
      res.send(buffer);
    });
    audioStream.once('error', fail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
