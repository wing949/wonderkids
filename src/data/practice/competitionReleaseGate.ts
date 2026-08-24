import type { PracticeItem, PracticePackManifest, PracticeSet } from './types.ts';

function signature(item: PracticeItem): string {
  return JSON.stringify({
    type: item.type,
    prompt: item.prompt.replace(/\s+/gu, ' ').trim().toLocaleLowerCase('vi'),
    options: item.options?.map((option) => option.label),
    answer: item.correctAnswer,
  });
}

export function validateCompetitionSetRelease(set: PracticeSet): string[] {
  const issues: string[] = [];
  const items = set.sections.flatMap((section) => section.items);
  const expectedCount = set.track === 'ioe_simulation' && set.setNumber >= 11
    ? (set.grade <= 2 ? 100 : 200)
    : 30;
  if (set.sections.length !== 3) issues.push(`${set.id}: phải có đúng 3 phần.`);
  if (items.length !== expectedCount) issues.push(`${set.id}: sai số hoạt động (${items.length}/${expectedCount}).`);
  if (set.totalPoints !== expectedCount * 10 || items.reduce((sum, item) => sum + item.points, 0) !== set.totalPoints) {
    issues.push(`${set.id}: sai tổng điểm.`);
  }
  if (items.some((item) => item.verificationStatus !== 'verified')) issues.push(`${set.id}: còn câu chưa duyệt.`);
  if (items.some((item) => !item.prompt.trim() || !item.explanation.trim() || !item.topic.trim())) issues.push(`${set.id}: có câu thiếu dữ liệu.`);
  if (new Set(items.map(signature)).size !== items.length) issues.push(`${set.id}: có câu trùng nguyên văn.`);

  if (set.track === 'ioe_simulation') {
    const audioItems = items.filter((item) => item.audio);
    if (audioItems.length !== expectedCount * 0.2) issues.push(`${set.id}: sai số câu audio.`);
    for (const item of audioItems) {
      const audio = item.audio;
      if (!audio?.assetPath || !audio.transcript || !audio.transcriptHash || !audio.sourceHash || !audio.fileHash || !audio.durationMs) {
        issues.push(`${item.id}: audio thiếu file, transcript hoặc hash.`);
      } else if (audio.verificationStatus !== 'verified' || audio.voice !== 'en-US-JennyNeural' || audio.language !== 'en-US') {
        issues.push(`${item.id}: audio chưa được xác minh đúng giọng Jenny.`);
      }
    }
    if (set.setNumber >= 11 && (set.maxAudioPlays !== 2 || set.allowedAudioRates?.join(',') !== '1')) {
      issues.push(`${set.id}: sai giới hạn nghe của đề thi thử.`);
    }
  } else if (items.some((item) => item.audio)) {
    issues.push(`${set.id}: Trạng Nguyên không thuộc phạm vi audio.`);
  }
  return issues;
}

export function validateCompetitionPackRelease(pack: PracticePackManifest): string[] {
  const issues = pack.sets.flatMap(validateCompetitionSetRelease);
  if (pack.sets.length !== 12 || new Set(pack.sets.map((set) => set.id)).size !== 12) {
    issues.push(`${pack.id}: thiếu hoặc trùng đề.`);
  }
  if (pack.releaseStatus !== 'published' || pack.verificationStatus !== 'verified') {
    issues.push(`${pack.id}: gói chưa đạt trạng thái phát hành.`);
  }
  return issues;
}
