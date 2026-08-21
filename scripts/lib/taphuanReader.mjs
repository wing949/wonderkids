import { createHash } from 'node:crypto';

export function extractReaderPageUrls(html) {
  const urls = [];
  const seen = new Set();
  const pattern = /(?:src|data-src)="(https:\/\/[^"\s]+\/storage\/upload\/taphuan\/[^"\s]+\.(?:png|jpe?g))"/gi;
  for (const match of html.matchAll(pattern)) {
    const url = match[1].replaceAll('&amp;', '&');
    if (seen.has(url)) continue;
    seen.add(url);
    urls.push(url);
  }
  return urls;
}

export function sha256Hex(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}
