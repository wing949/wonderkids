import { createHash } from 'node:crypto';

export const POETRY_PROSODY_VERSION = 4;

// VieNeu output is slowed to 0.8× after assembly. These raw gaps therefore
// become 800 ms after the title, 400 ms after a line and 700 ms after a stanza.
const TITLE_PAUSE_MS = 640;
const LINE_PAUSE_MS = 320;
const STANZA_PAUSE_MS = 560;

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

function cleanStructuralPrefix(line) {
  return line
    .replace(/^\s*\(\d+\)\s*/u, '')
    .replace(/^\s*[•●▪]\s*/u, '')
    .trim();
}

function groupLoosePoetryLines(content) {
  const stanzas = [];
  let current = [];
  const hasNumberedStanzas = content.some((item) => /^\s*\(\d+\)/u.test(String(item || '')));

  const flush = () => {
    if (current.length > 0) stanzas.push(current);
    current = [];
  };

  for (const rawItem of content) {
    const item = String(rawItem || '').trim();
    if (!item) continue;
    if (item.includes('\n')) {
      flush();
      const blocks = item.split(/\r?\n\s*\r?\n/u);
      for (const block of blocks) {
        const lines = block.split(/\r?\n/u).map((line) => line.trim()).filter(Boolean);
        if (lines.length > 0) stanzas.push(lines);
      }
      continue;
    }

    if (hasNumberedStanzas && /^\s*\(\d+\)/u.test(item) && current.length > 0) flush();
    current.push(item);
    if (!hasNumberedStanzas && /[.!?…][”"']?$/u.test(item)) flush();
  }
  flush();
  return stanzas;
}

function synthesisTextForLine(text, isStanzaEnd) {
  if (/[.!?…,:;][”"']?$/u.test(text)) return text;
  return `${text}${isStanzaEnd ? '.' : ','}`;
}

function finalizePlan(plan) {
  const hashInput = JSON.stringify({
    version: plan.version,
    genre: plan.genre,
    tempo: plan.tempo,
    segments: plan.segments.map(({ kind, synthesisText, pauseAfterMs }) => ({
      kind,
      synthesisText,
      pauseAfterMs,
    })),
  });
  return { ...plan, prosodyHash: sha256(hashInput) };
}

export function buildVietnameseProsodyPlan(passage) {
  const title = String(passage?.title || '').trim();
  const content = Array.isArray(passage?.content)
    ? passage.content.map((item) => String(item || '').trim()).filter(Boolean)
    : [];
  const genre = passage?.genre === 'poem'
    ? 'poem'
    : passage?.genre === 'story' ? 'story' : 'prose';

  if (genre !== 'poem') {
    const text = [title, ...content].filter(Boolean).join('\n');
    return finalizePlan({
      version: POETRY_PROSODY_VERSION,
      genre,
      tempo: 1,
      stanzaCount: 0,
      lineCount: 0,
      segments: text ? [{
        kind: 'passage',
        text,
        synthesisText: text,
        pauseAfterMs: 0,
      }] : [],
    });
  }

  const stanzas = groupLoosePoetryLines(content);
  const segments = [];
  if (title) {
    segments.push({
      kind: 'title',
      text: title,
      synthesisText: /[.!?]$/u.test(title) ? title : `${title}.`,
      pauseAfterMs: TITLE_PAUSE_MS,
    });
  }

  stanzas.forEach((stanza, stanzaIndex) => {
    const spokenLines = stanza.map(cleanStructuralPrefix).filter(Boolean);
    spokenLines.forEach((text, lineIndex) => {
      const isStanzaEnd = lineIndex === spokenLines.length - 1;
      const isFinalLine = isStanzaEnd && stanzaIndex === stanzas.length - 1;
      segments.push({
        kind: 'poetry-line',
        stanzaIndex,
        lineIndex,
        text,
        synthesisText: synthesisTextForLine(text, isStanzaEnd),
        pauseAfterMs: isFinalLine ? 0 : (isStanzaEnd ? STANZA_PAUSE_MS : LINE_PAUSE_MS),
      });
    });
  });

  return finalizePlan({
    version: POETRY_PROSODY_VERSION,
    genre,
    tempo: 0.8,
    stanzaCount: stanzas.length,
    lineCount: segments.filter((segment) => segment.kind === 'poetry-line').length,
    segments,
  });
}
