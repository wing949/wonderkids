import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';

const ALLOWED_TTS_VOICES = new Set([
  'vi-VN-HoaiMyNeural',
  'vi-VN-NamMinhNeural',
  'en-US-JennyNeural',
  'en-US-GuyNeural',
]);

async function getTtsRequestInput(req: import('node:http').IncomingMessage) {
  const urlObj = new URL(req.url || '', 'http://localhost:3000');
  if (req.method !== 'POST') {
    return {
      text: urlObj.searchParams.get('text') || '',
      lang: urlObj.searchParams.get('lang') || 'vi',
      voice: urlObj.searchParams.get('voice') || '',
    };
  }

  let body = '';
  for await (const chunk of req) {
    body += chunk;
    if (body.length > 7000) throw new Error('Nội dung yêu cầu quá dài.');
  }

  try {
    const parsed = JSON.parse(body || '{}');
    return {
      text: typeof parsed.text === 'string' ? parsed.text : '',
      lang: typeof parsed.lang === 'string' ? parsed.lang : 'vi',
      voice: typeof parsed.voice === 'string' ? parsed.voice : '',
    };
  } catch {
    return { text: '', lang: 'vi', voice: '' };
  }
}

function escapeSsmlText(text: string) {
  return text.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  })[character]);
}

function ttsDevPlugin(): Plugin {
  return {
    name: 'tts-dev-plugin',
    configureServer(server) {
      server.middlewares.use('/api/tts', async (req, res) => {
        let input;
        try {
          input = await getTtsRequestInput(req);
        } catch (err: any) {
          res.statusCode = 413;
          res.end(JSON.stringify({ error: err.message }));
          return;
        }
        const { text, lang, voice } = input;

        if (!text) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: 'Text required' }));
          return;
        }

        try {
          const cleanText = String(text).trim().slice(0, 6000);
          if (!cleanText) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Text required' }));
            return;
          }
          const voiceName = ALLOWED_TTS_VOICES.has(voice)
            ? voice
            : (lang === 'en' ? 'en-US-JennyNeural' : 'vi-VN-HoaiMyNeural');

          const tts = new MsEdgeTTS();
          await tts.setMetadata(voiceName, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);

          const { audioStream } = tts.toStream(escapeSsmlText(cleanText));

          const chunks: Buffer[] = [];
          let responded = false;
          const fail = (err: Error) => {
            if (responded) return;
            responded = true;
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
          };
          audioStream.on('data', (chunk: Buffer) => chunks.push(chunk));
          audioStream.once('end', () => {
            if (responded) return;
            responded = true;
            const buffer = Buffer.concat(chunks);
            res.setHeader('Content-Type', 'audio/mpeg');
            res.setHeader('Cache-Control', 'no-store');
            res.end(buffer);
          });
          audioStream.once('error', fail);
        } catch (err: any) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
        }
      });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ttsDevPlugin()],
  server: {
    port: 3000,
    open: false
  }
});
