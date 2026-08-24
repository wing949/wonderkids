import urllib.request
import urllib.parse
import json

def search_lexica(query):
    url = f"https://lexica.art/api/v1/search?q={urllib.parse.quote(query)}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            data = json.loads(r.read().decode('utf-8'))
            images = data.get('images', [])
            return [img['srcSmall'] or img['src'] for img in images[:5]]
    except Exception as e:
        print("Lexica error:", e)
        return []

print("Lexica Cat results:", search_lexica("3D Pixar cute baby kitten cat mascot"))
