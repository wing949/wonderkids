import urllib.request
import urllib.parse
import json

# Test various working image generation APIs
def test_apikeys():
    # Test pollinations with different query structure
    urls = [
        "https://image.pollinations.ai/prompt/cute%203d%20cat%20disney%20pixar?width=512&height=512&seed=999&nologo=true",
        "https://api.kastg.xyz/api/ai/flux?prompt=cute%203d%20cat",
        "https://ai.generative.design/image?prompt=cute%203d%20cat",
        "https://image.pollinations.ai/prompt/3d%20pixar%20cat"
    ]
    for u in urls:
        try:
            req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = resp.read()
                print(f"URL: {u[:45]} -> SUCCESS ({len(data)} bytes, type: {resp.headers.get('content-type')})")
        except Exception as e:
            print(f"URL: {u[:45]} -> Error: {e}")

test_apikeys()
