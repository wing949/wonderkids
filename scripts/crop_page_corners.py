import glob
import os
from PIL import Image
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

files = sorted(glob.glob('tmp_check_pages/*.png'))

for f in files:
    fname = os.path.basename(f)
    try:
        im = Image.open(f)
        w, h = im.size
        # Crop bottom 12% (where page numbers are printed)
        bot_left = im.crop((0, int(h * 0.88), int(w * 0.25), h))
        bot_right = im.crop((int(w * 0.75), int(h * 0.88), w, h))
        
        # Save crops
        crop_dir = "tmp_check_pages/crops"
        os.makedirs(crop_dir, exist_ok=True)
        bot_left.save(f"{crop_dir}/left_{fname}")
        bot_right.save(f"{crop_dir}/right_{fname}")
        
        print(f"Cropped {fname} ({w}x{h})")
    except Exception as e:
        print(f"Error {fname}: {e}")
