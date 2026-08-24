import shutil
from pathlib import Path

img1 = Path(r"C:\Users\TVCHUONG\.gemini\antigravity-ide\brain\6469d13b-2e5a-4d56-b82e-7da0baf9bc85\practice_arena_cover_1787556897546.jpg")
dest1 = Path("public/assets/practice_arena_cover.jpg")
shutil.copy2(img1, dest1)

img2 = Path(r"C:\Users\TVCHUONG\.gemini\antigravity-ide\brain\6469d13b-2e5a-4d56-b82e-7da0baf9bc85\adventure_map_cover_1787556923027.jpg")
dest2 = Path("public/assets/adventure_map_cover.jpg")
shutil.copy2(img2, dest2)

print(f"Copied practice_arena_cover.jpg ({dest1.stat().st_size} bytes)")
print(f"Copied adventure_map_cover.jpg ({dest2.stat().st_size} bytes)")
