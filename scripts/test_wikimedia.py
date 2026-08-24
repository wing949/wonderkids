import urllib.request
import urllib.parse
import json

def search_wikimedia_images(query):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch={urllib.parse.quote(query)}&gsrlimit=5&prop=imageinfo&iiprop=url|size|mime&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'WonderKids/1.0 (contact@wonderkids.vn)'})
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            data = json.loads(r.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            results = []
            for p in pages.values():
                for info in p.get('imageinfo', []):
                    results.append(info.get('url'))
            return results
    except Exception as e:
        print("Wikimedia error:", e)
        return []

print("Results:", search_wikimedia_images("3D cartoon cute cat"))
