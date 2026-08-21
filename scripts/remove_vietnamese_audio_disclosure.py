# -*- coding: utf-8 -*-
"""Remove the legacy spoken disclosure and rebuild the audio manifest.

The operation is idempotent: a WAV is changed only when its PCM begins with
the exact, previously recorded disclosure fingerprint.
"""

import hashlib
import io
import json
import re
import sys
import wave
from pathlib import Path

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")

WORKSPACE = Path(__file__).resolve().parents[1]
PRIMARY_DIR = WORKSPACE / "public" / "audio" / "curriculum"
FALLBACK_DIR = PRIMARY_DIR / "fallback"
PASSAGES_PATH = WORKSPACE / "src" / "data" / "curriculum" / "vietnamese" / "readingPassages.ts"
MANIFEST_PATH = WORKSPACE / "src" / "data" / "curriculum" / "vietnamese" / "audioManifest.generated.json"

LEGACY = {
    "primary": {
        "bytes": 552960,
        "hash": "7c91d642b467c265cb41aabdb5f9cbca60b9d2ed67f4ccd839884187b0bb8a2e",
    },
    "fallback": {
        "bytes": 506880,
        "hash": "f00942c59dcc1fcaf8da62a279e05709ce2b7eb45fb25fe8c7621201946358a0",
    },
}


def read_wav(path: Path):
    with wave.open(str(path), "rb") as reader:
        params = reader.getparams()
        frames = reader.readframes(reader.getnframes())
    return params, frames


def write_wav(path: Path, params, frames: bytes):
    output = io.BytesIO()
    with wave.open(output, "wb") as writer:
        writer.setparams(params)
        writer.writeframes(frames)
    path.write_bytes(output.getvalue())


def strip_legacy_prefix(path: Path, kind: str):
    params, frames = read_wav(path)
    marker = LEGACY[kind]
    prefix = frames[: marker["bytes"]]
    if hashlib.sha256(prefix).hexdigest() != marker["hash"]:
        return False
    silence_bytes = round(0.25 * params.framerate) * params.nchannels * params.sampwidth
    body = frames[marker["bytes"] + silence_bytes :]
    if not body:
        raise RuntimeError(f"Audio không còn thân bài sau khi cắt: {path}")
    write_wav(path, params, body)
    return True


def load_passages():
    source = PASSAGES_PATH.read_text(encoding="utf-8")
    match = re.search(
        r"export const VIETNAMESE_READING_PASSAGES:\s*Record<string,\s*ReadingLessonBundle>\s*=\s*(\{[\s\S]*?\n\};)",
        source,
    )
    if not match:
        raise RuntimeError("Không đọc được readingPassages.ts")
    return json.loads(match.group(1).rstrip(";"))


def main():
    passages = load_passages()
    records = {}
    changed = {"primary": 0, "fallback": 0}

    for raw_id, bundle in passages.items():
        lesson_id = raw_id.replace("-l", "-b")
        if lesson_id in records:
            continue
        primary = PRIMARY_DIR / f"{lesson_id}.wav"
        fallback = FALLBACK_DIR / f"{lesson_id}.wav"
        if not primary.exists() or not fallback.exists():
            raise RuntimeError(f"Thiếu cặp audio: {lesson_id}")
        changed["primary"] += int(strip_legacy_prefix(primary, "primary"))
        changed["fallback"] += int(strip_legacy_prefix(fallback, "fallback"))

        passage = bundle["passage"]
        transcript = passage.get("audioNarration") or f'{passage["title"]}. {" ".join(passage["content"])}'
        transcript_hash = hashlib.sha256(transcript.strip().encode("utf-8")).hexdigest()
        records[lesson_id] = {
            "lessonId": lesson_id,
            "primaryPath": f"/audio/curriculum/{lesson_id}.wav",
            "fallbackPath": f"/audio/curriculum/fallback/{lesson_id}.wav",
            "primaryVoice": "Cô Giáo Vy",
            "fallbackVoice": "Cô Mỹ Duyên",
            "transcriptHash": transcript_hash,
            "lessonVersion": 1,
            "sourcePages": [],
        }

    if len(records) != 132:
        raise RuntimeError(f"Manifest phải có 132 bài, nhận {len(records)}")
    MANIFEST_PATH.write_text(json.dumps(records, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({"lessons": len(records), "changed": changed}, ensure_ascii=False))


if __name__ == "__main__":
    main()
