import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';

function ttsDevPlugin(): Plugin {
  return {
    name: 'tts-dev-plugin',
    configureServer(server) {
      server.middlewares.use('/api/tts', async (req, res) => {
        const urlObj = new URL(req.url || '', 'http://localhost:3000');
        const text = urlObj.searchParams.get('text') || '';
        const lang = urlObj.searchParams.get('lang') || 'vi';
        const voice = urlObj.searchParams.get('voice') || '';

        if (!text) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: 'Text required' }));
          return;
        }

        try {
          const cleanText = String(text).slice(0, 1000);
          const voiceName = voice || (lang === 'en' ? 'en-US-JennyNeural' : 'vi-VN-HoaiMyNeural');

          const tts = new MsEdgeTTS();
          await tts.setMetadata(voiceName, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);

          const { audioStream } = tts.toStream(cleanText);

          const chunks: Buffer[] = [];
          audioStream.on('data', (chunk: Buffer) => chunks.push(chunk));
          audioStream.on('end', () => {
            const buffer = Buffer.concat(chunks);
            res.setHeader('Content-Type', 'audio/mpeg');
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
            res.end(buffer);
          });
          audioStream.on('error', (err: any) => {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
          });
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
