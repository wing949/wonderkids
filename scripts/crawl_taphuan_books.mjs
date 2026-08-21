import fs from 'fs';

async function fetchPage(url) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'vi-VN,vi;q=0.9,en;q=0.8'
      }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } catch (err) {
    console.error(`Error fetching ${url}:`, err.message);
    return null;
  }
}

function extractBooks(html) {
  const books = [];
  // Regex to find all book cards: <a href="https://taphuan.nxbgd.vn/tap-huan/chi-tiet-sach/..." ... title="..."
  // or <span ... title="Tiếng Việt 1, tập một">...
  const cardRegex = /<a\s+href="(https:\/\/taphuan\.nxbgd\.vn\/tap-huan\/chi-tiet-sach\/[^"]+)"[\s\S]*?<img\s+src="([^"]+)"[\s\S]*?title="([^"]+)"/g;
  let match;
  while ((match = cardRegex.exec(html)) !== null) {
    books.push({
      url: match[1],
      thumbnail: match[2],
      title: match[3].trim()
    });
  }

  // Fallback regex if card structure differs slightly
  if (books.length === 0) {
    const linkRegex = /href="(https:\/\/taphuan\.nxbgd\.vn\/tap-huan\/chi-tiet-sach\/[^"]+)"/g;
    const titleRegex = /title="([^"]+)"/g;
    const urls = [...html.matchAll(linkRegex)].map(m => m[1]);
    const titles = [...html.matchAll(titleRegex)].map(m => m[1]);
    for (let i = 0; i < urls.length; i++) {
      books.push({
        url: urls[i],
        title: titles[i] || 'Chưa rõ tiêu đề'
      });
    }
  }

  return books;
}

async function main() {
  const results = {};

  for (let grade = 1; grade <= 5; grade++) {
    console.log(`\n=== Crawling Grade ${grade} ===`);
    const urlMain = `https://taphuan.nxbgd.vn/tap-huan?grade=${grade}`;
    const htmlMain = await fetchPage(urlMain);
    const booksMain = htmlMain ? extractBooks(htmlMain) : [];

    const urlOther = `https://taphuan.nxbgd.vn/tap-huan/cac-bo-sach-khac?grade=${grade}`;
    const htmlOther = await fetchPage(urlOther);
    const booksOther = htmlOther ? extractBooks(htmlOther) : [];

    // Filter for Tiếng Việt, Toán, Tiếng Anh
    const isTargetSubject = (title) => {
      const lower = title.toLowerCase();
      return (
        lower.includes('tiếng việt') ||
        lower.includes('toán') ||
        lower.includes('tiếng anh') ||
        lower.includes('english') ||
        lower.includes('global success') ||
        lower.includes('family and friends') ||
        lower.includes('explore our world') ||
        lower.includes('macmillan') ||
        lower.includes('phonics')
      );
    };

    results[`Lớp ${grade}`] = {
      main: booksMain,
      other: booksOther,
      filtered: {
        tiengViet: [...booksMain, ...booksOther].filter(b => b.title.toLowerCase().includes('tiếng việt')),
        toan: [...booksMain, ...booksOther].filter(b => b.title.toLowerCase().includes('toán')),
        tiengAnh: [...booksMain, ...booksOther].filter(b => {
          const t = b.title.toLowerCase();
          return t.includes('tiếng anh') || t.includes('english') || t.includes('global success') || t.includes('family and friends') || t.includes('explore our world');
        })
      }
    };
  }

  fs.writeFileSync('scripts/crawled_books.json', JSON.stringify(results, null, 2), 'utf-8');
  console.log('\nSaved results to scripts/crawled_books.json');
}

main();
