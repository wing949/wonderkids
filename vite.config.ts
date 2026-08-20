import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function ttsDevPlugin(): Plugin {
  return {
    name: 'tts-dev-plugin',
    configureServer(server) {
      server.middlewares.use('/api/tts', async (req, res) => {
        const urlObj = new URL(req.url || '', 'http://localhost:3000');
        const text = urlObj.searchParams.get('text') || '';
        const lang = urlObj.searchParams.get('lang') || 'vi';

        if (!text) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: 'Text required' }));
          return;
        }

        try {
          const encoded = encodeURIComponent(text.slice(0, 500));
          const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang}&client=tw-ob&q=${encoded}`;

          const fetchRes = await fetch(ttsUrl, {
            headers: {
              'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
              Referer: 'https://translate.google.com/'
            }
          });

          if (!fetchRes.ok) {
            res.statusCode = fetchRes.status;
            res.end(JSON.stringify({ error: 'TTS request failed' }));
            return;
          }

          const arrayBuffer = await fetchRes.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);

          res.setHeader('Content-Type', 'audio/mpeg');
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
          res.end(buffer);
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
