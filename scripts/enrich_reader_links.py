import urllib.request
import ssl
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'vi-VN,vi;q=0.9,en;q=0.8'
}

with open('scripts/full_sgk_links.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

def get_reader_link(detail_url):
    try:
        req = urllib.request.Request(detail_url, headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            # Look for doc-sach / sgk link
            doc_links = re.findall(r'href="(https:\/\/taphuan\.nxbgd\.vn\/tap-huan\/doc-sach\/[^"]+)"', html)
            for l in doc_links:
                if 'sgk' in l or 'tieng' in l or 'toan' in l:
                    return l
            if doc_links:
                return doc_links[0]
    except Exception as e:
        print(f"Error fetching reader for {detail_url}: {e}")
    return ""

enriched = {}

for grade_key, subjects in data.items():
    print(f"Enriching {grade_key}...")
    enriched[grade_key] = {}
    for subj_name, books in subjects.items():
        enriched[grade_key][subj_name] = []
        for b in books:
            reader = get_reader_link(b['url'])
            enriched[grade_key][subj_name].append({
                'title': b['title'],
                'detail_url': b['url'],
                'reader_url': reader
            })

with open('scripts/enriched_sgk_links.json', 'w', encoding='utf-8') as f:
    json.dump(enriched, f, ensure_ascii=False, indent=2)

print("\nEnrichment complete! Saved to scripts/enriched_sgk_links.json")
