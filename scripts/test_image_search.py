import urllib.request
import urllib.parse
import json
import re
import os
from PIL import Image

def get_duckduckgo_image_urls(query, count=5):
    url = f"https://duckduckgo.com/i.js?q={urllib.parse.quote(query)}&o=json"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Referer': 'https://duckduckgo.com/'
    }
    
    # First get the vqd token
    token_url = f"https://duckduckgo.com/?q={urllib.parse.quote(query)}"
    token_req = urllib.request.Request(token_url, headers=headers)
    vqd = ""
    try:
        with urllib.request.urlopen(token_req, timeout=10) as r:
            html = r.read().decode('utf-8', errors='ignore')
            m = re.search(r'vqd=([\d-]+)', html) or re.search(r'vqd=\"([\d-]+)\"', html)
            if m:
                vqd = m.group(1)
    except Exception as e:
        print("Token error:", e)
        
    if not vqd:
        vqd = "4-1234567890"

    api_url = f"https://duckduckgo.com/i.js?q={urllib.parse.quote(query)}&o=json&vqd={vqd}"
    req = urllib.request.Request(api_url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            data = json.loads(r.read().decode('utf-8'))
            results = [item['image'] for item in data.get('results', []) if 'image' in item]
            return results[:count]
    except Exception as e:
        print("API error:", e)
        return []

urls = get_duckduckgo_image_urls("3D Pixar Disney style cute baby cat character illustration")
print("Found URLs:", urls)
