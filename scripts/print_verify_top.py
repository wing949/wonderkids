import sys
import subprocess

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

res = subprocess.run(["node", "scripts/verify_app_rendering_each_lesson.mjs"], capture_output=True, text=True, encoding='utf-8')
lines = res.stdout.split('\n')
for l in lines[:45]:
    print(l)
