import pytesseract
from PIL import Image
import os

img46 = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning\tmp_pages\g3_t1\p46_4698680579-page-46-1775743408142.png"
img47 = r"c:\Users\TVCHUONG\Desktop\AI\06_eLearning\tmp_pages\g3_t1\p47_4698680579-page-47-1775743408483.png"

print("--- PAGE 46 ---")
print(pytesseract.image_to_string(Image.open(img46), lang='vie'))
print("--- PAGE 47 ---")
print(pytesseract.image_to_string(Image.open(img47), lang='vie'))
