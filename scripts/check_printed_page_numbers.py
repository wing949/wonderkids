import glob
import os
import re

files = glob.glob('tmp_check_pages/*.png')
print(f"Total downloaded files: {len(files)}")
for f in sorted(files):
    fname = os.path.basename(f)
    print(fname)
