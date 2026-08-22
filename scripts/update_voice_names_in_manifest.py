import json
import os

workspace = os.getcwd()
manifest_path = os.path.join(workspace, 'src', 'data', 'curriculum', 'vietnamese', 'audioManifest.generated.json')

if os.path.exists(manifest_path):
    with open(manifest_path, 'r', encoding='utf-8') as f:
        manifest = json.load(f)
    
    for k, v in manifest.items():
        v['primaryVoice'] = 'Cô Giáo Vy'
        v['fallbackVoice'] = 'Mỹ Duyên'
        
    with open(manifest_path, 'w', encoding='utf-8') as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)
    print(f"Updated {len(manifest)} entries in audioManifest.generated.json.")
