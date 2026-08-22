import sys
import os
from pathlib import Path

AUTO_MEDIA = Path(r"C:\Users\TVCHUONG\Desktop\AI\07_AutoMedia")
sys.path.insert(0, str(AUTO_MEDIA / "src"))

try:
    from vieneu import Vieneu
    tts = Vieneu(mode="v3turbo")
    fallback_voice = tts.get_preset_voice("Mỹ Duyên")
    print("VieNeu initialized successfully. Preset voice 'Mỹ Duyên' loaded:", bool(fallback_voice))
    
    ref_path = AUTO_MEDIA / "storage" / "voices" / "vieneu" / "Cô Giáo Vy.wav"
    print("Cô Giáo Vy ref file exists:", ref_path.exists())
except Exception as e:
    print("VieNeu load error:", e)
