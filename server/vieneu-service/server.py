"""
WonderKids E-Learning - VieNeu-TTS Self-Hosted Dedicated Microservice
Tự chủ hoàn toàn hạ tầng chuyển văn bản thành giọng nói AI tiếng Việt chuẩn sư phạm
Dựa trên mô hình Deep Learning VieNeu-TTS (pnnbao97/VieNeu-TTS)
"""

import os
import io
import hashlib
from typing import Optional
from fastapi import FastAPI, Query, HTTPException
from fastapi.responses import StreamingResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Initialize FastAPI app
app = FastAPI(
    title="WonderKids VieNeu-TTS Engine",
    description="Dedicated Self-Hosted AI Vietnamese Speech Synthesis for Kids E-Learning",
    version="1.0.0"
)

# Enable CORS for local & production web apps
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Cache directory for instant zero-latency playback
CACHE_DIR = os.path.join(os.path.dirname(__file__), ".audio_cache")
os.makedirs(CACHE_DIR, exist_ok=True)

# Global model instance
tts_engine = None

def get_tts_engine():
    global tts_engine
    if tts_engine is None:
        try:
            from vieneu import Vieneu
            print("🚀 Loading VieNeu-TTS model into memory...")
            tts_engine = Vieneu()
            print("✅ VieNeu-TTS model loaded successfully!")
        except Exception as e:
            print(f"⚠️ Could not load native vieneu library: {e}")
            print("💡 Tip: Run 'pip install vieneu' to install the engine.")
            tts_engine = False
    return tts_engine

class TTSRequest(BaseModel):
    text: str
    voice: Optional[str] = "co_giao_ha_noi"
    speed: Optional[float] = 0.95
    emotion: Optional[str] = None

@app.on_event("startup")
async def startup_event():
    get_tts_engine()

@app.get("/health")
def health_check():
    engine_ready = get_tts_engine() is not False and get_tts_engine() is not None
    return {
        "status": "online" if engine_ready else "degraded",
        "engine": "VieNeu-TTS v3 Turbo",
        "model_loaded": engine_ready,
        "sample_rate": 48000,
        "languages": ["vi", "en"]
    }

def synthesize_audio(text: str, voice: str = "default", speed: float = 0.95) -> bytes:
    clean_text = text.strip()
    if not clean_text:
        raise HTTPException(status_code=400, detail="Text cannot be empty")

    # Check MD5 cache
    cache_key = hashlib.md5(f"{clean_text}_{voice}_{speed}".encode("utf-8")).hexdigest()
    cache_path = os.path.join(CACHE_DIR, f"{cache_key}.wav")

    if os.path.exists(cache_path):
        with open(cache_path, "rb") as f:
            return f.read()

    engine = get_tts_engine()
    if not engine:
        raise HTTPException(
            status_code=503,
            detail="VieNeu-TTS engine is not ready. Please install 'vieneu' package."
        )

    # Perform inference with VieNeu-TTS
    try:
        audio = engine.infer(text=clean_text)
        
        # Save to buffer
        buffer = io.BytesIO()
        engine.save(audio, buffer)
        buffer.seek(0)
        audio_bytes = buffer.read()

        # Cache on disk
        try:
            with open(cache_path, "wb") as f:
                f.write(audio_bytes)
        except Exception:
            pass

        return audio_bytes
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Inference error: {str(e)}")

@app.post("/api/tts")
async def post_tts(req: TTSRequest):
    audio_bytes = synthesize_audio(text=req.text, voice=req.voice or "default", speed=req.speed or 0.95)
    return StreamingResponse(io.BytesIO(audio_bytes), media_type="audio/wav")

@app.get("/api/tts")
async def get_tts(
    text: str = Query(..., description="Văn bản cần đọc"),
    voice: Optional[str] = Query("default", description="Giọng đọc"),
    speed: Optional[float] = Query(0.95, description="Tốc độ đọc (0.85 - 1.1)")
):
    audio_bytes = synthesize_audio(text=text, voice=voice or "default", speed=speed or 0.95)
    return StreamingResponse(io.BytesIO(audio_bytes), media_type="audio/wav")

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    print(f"🎙️ Starting WonderKids VieNeu-TTS Server on http://0.0.0.0:{port}")
    uvicorn.run("server:app", host="0.0.0.0", port=port, reload=False)
