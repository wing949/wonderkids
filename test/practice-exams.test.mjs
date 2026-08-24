import assert from 'node:assert/strict';
import test from 'node:test';
import { getAppPath, parseAppRoute } from '../src/utils/appRoute.ts';

let practiceModule;
let practiceImportError;
try {
  practiceModule = await import('../src/data/practice/index.ts');
} catch (error) {
  practiceImportError = error;
}

let progressModule;
let progressImportError;
try {
  progressModule = await import('../src/utils/practiceProgress.ts');
} catch (error) {
  progressImportError = error;
}

test('kho luyện đề có đủ 20 tổ hợp, 240 đề và 7.200 hoạt động đã kiểm duyệt', () => {
  assert.ifError(practiceImportError);
  const packs = practiceModule.getPracticePacks();
  assert.equal(packs.length, 20);

  const sets = packs.flatMap((pack) => pack.sets);
  const items = sets.flatMap((set) => set.sections.flatMap((section) => section.items));
  assert.equal(sets.length, 240);
  assert.equal(items.length, 7_200);
  assert.equal(new Set(packs.map((pack) => pack.id)).size, 20);
  assert.equal(new Set(sets.map((set) => set.id)).size, 240);
  assert.equal(new Set(items.map((item) => item.id)).size, 7_200);

  for (const pack of packs) {
    assert.equal(pack.sets.length, 12, pack.id);
    assert.equal(pack.contentOrigin, 'system_generated', pack.id);
    assert.equal(pack.verificationStatus, 'verified', pack.id);
    assert.equal(pack.releaseStatus, 'published', pack.id);
    assert.match(pack.officialDisclaimer, /không phải đề thi Violympic chính thức/iu, pack.id);
    assert.match(pack.sourceLabel, /Nội dung luyện tập tự biên soạn/u, pack.id);
    assert.ok(pack.alignmentSources.length >= 2, pack.id);

    for (const set of pack.sets) {
      assert.equal(set.sections.length, 3, set.id);
      assert.equal(set.totalPoints, 300, set.id);
      assert.equal(set.timeLimitSeconds, set.setNumber >= 11 ? 1_800 : undefined, set.id);
      assert.equal(set.sections.reduce((sum, section) => sum + section.maxPoints, 0), 300, set.id);

      for (const section of set.sections) {
        assert.equal(section.items.length, 10, section.id);
        assert.ok(section.activityTypes.length >= 1, section.id);
        for (const item of section.items) {
          assert.ok(item.prompt.trim().length >= 8, item.id);
          assert.ok(item.topic.trim().length >= 3, item.id);
          assert.ok(item.explanation.trim().length >= 8, item.id);
          assert.notEqual(item.correctAnswer, undefined, item.id);
          assert.equal(item.contentOrigin, 'system_generated', item.id);
          assert.equal(item.verificationStatus, 'verified', item.id);
          assert.match(item.sourceLabel, /tự biên soạn/u, item.id);
          assert.doesNotMatch(item.prompt, /\\\$|\\rightarrow|\\times/u, item.id);
          if (item.audio) {
            assert.equal(item.audio.verificationStatus, 'verified', item.id);
            assert.ok(item.audio.assetPath, item.id);
            assert.ok(item.audio.transcriptHash, item.id);
          }
        }
      }
    }
  }
});

test('cổng phát hành chặn đề chưa duyệt hoặc có câu trùng', () => {
  assert.ifError(practiceImportError);
  const sourceSet = practiceModule.getPracticePack('math', 1).sets[0];
  const draftSet = structuredClone(sourceSet);
  draftSet.sections[0].items[0].verificationStatus = 'draft';
  assert.ok(practiceModule.validatePracticeSetRelease(draftSet).some((issue) => issue.includes('chưa qua cổng kiểm tra')));

  const duplicateSet = structuredClone(sourceSet);
  duplicateSet.sections[0].items[1] = structuredClone(duplicateSet.sections[0].items[0]);
  duplicateSet.sections[0].items[1].id = `${duplicateSet.sections[0].items[0].id}-duplicate`;
  assert.ok(practiceModule.validatePracticeSetRelease(duplicateSet).some((issue) => issue.includes('trùng nguyên văn')));
});

test('câu hỏi không trùng nguyên văn trong cùng một đề', () => {
  assert.ifError(practiceImportError);
  for (const pack of practiceModule.getPracticePacks()) {
    for (const set of pack.sets) {
      const signatures = set.sections.flatMap((section) => section.items.map((item) => {
        const correctAnswer = item.type === 'single_choice'
          ? item.options?.find((option) => option.id === item.correctAnswer)?.label
          : item.correctAnswer;
        return JSON.stringify({
          type: item.type,
          prompt: item.prompt.replace(/^\[(?:Thử thách|Challenge)\]\s*/u, '').toLocaleLowerCase('vi').replace(/\s+/gu, ' ').trim(),
          options: item.options?.map((option) => option.label).sort(),
          matchingPairs: item.matchingPairs?.map((pair) => [pair.left, pair.right]).sort(),
          correctAnswer,
        });
      }));
      assert.equal(new Set(signatures).size, signatures.length, set.id);
    }
  }
});

test('đường dẫn luyện đề khôi phục đúng hub, danh sách và đề cụ thể', () => {
  const routes = [
    [{ kind: 'practice-hub' }, '/luyen-de'],
    [{ kind: 'practice-list', subject: 'math', grade: 1 }, '/luyen-de/toan/lop-1'],
    [{ kind: 'practice-set', subject: 'vietnamese', grade: 3, setNumber: 8 }, '/luyen-de/tieng-viet/lop-3/de-08'],
    [{ kind: 'practice-set', subject: 'vietnamese', grade: 3, setNumber: 8, questionNumber: 17 }, '/luyen-de/tieng-viet/lop-3/de-08?cau=17'],
    [{ kind: 'practice-set', subject: 'english', grade: 5, setNumber: 12 }, '/luyen-de/tieng-anh/lop-5/de-12'],
    [{ kind: 'practice-set', subject: 'math_en', grade: 2, setNumber: 4 }, '/luyen-de/toan-tieng-anh/lop-2/de-04'],
  ];

  for (const [route, path] of routes) {
    assert.equal(getAppPath(route), path);
    assert.deepEqual(parseAppRoute(path), route);
  }
  assert.deepEqual(parseAppRoute('/luyen-de/toan/lop-6'), { kind: 'student' });
  assert.deepEqual(parseAppRoute('/luyen-de/toan/lop-2/de-13'), { kind: 'student' });
  assert.deepEqual(parseAppRoute('/luyen-de/toan/lop-2/de-01?cau=31'), { kind: 'practice-set', subject: 'math', grade: 2, setNumber: 1 });
});

test('tiến độ luyện đề được chuẩn hóa, tính điểm và chỉ trao thưởng lần đầu', () => {
  assert.ifError(progressImportError);
  const progress = progressModule.createPracticeProgress('practice-math-g1-s01', 0);
  assert.equal(progress.currentSectionIndex, 0);
  assert.equal(progress.currentItemIndex, 0);
  assert.deepEqual(progress.answers, {});

  const updated = progressModule.recordPracticeAnswer(progress, 'practice-math-g1-s01-p1-q01', '7');
  assert.equal(updated.answers['practice-math-g1-s01-p1-q01'], '7');
  assert.ok(updated.updatedAt >= progress.updatedAt);

  assert.deepEqual(progressModule.calculatePracticeResult([true, false, true], 100), {
    correctCount: 2,
    totalCount: 3,
    score: 66.67,
  });
  assert.equal(progressModule.shouldGrantFirstCompletionReward(undefined), true);
  assert.equal(progressModule.shouldGrantFirstCompletionReward({ completedAt: 1 }), false);
  assert.equal(progressModule.calculateRemainingPracticeSeconds(1_800, 1_000, 61_000), 1_740);
  assert.equal(progressModule.calculateRemainingPracticeSeconds(1_800, 1_000, 2_000_000), 0);

  const completed = progressModule.completePracticeAttempt(updated, { score: 90, correctCount: 27 }, 31_000);
  assert.equal(completed.attemptCount, 1);
  assert.equal(completed.elapsedSeconds, 31);
  assert.equal(completed.bestScore, 90);
  assert.equal(completed.bestCorrectCount, 27);
  const restarted = progressModule.restartPracticeAttempt(completed, 40_000);
  assert.deepEqual(restarted.answers, {});
  assert.equal(restarted.completedAt, completed.completedAt);
  assert.equal(restarted.attemptCount, 1);
  const improved = progressModule.completePracticeAttempt(restarted, { score: 100, correctCount: 30 }, 70_000);
  assert.equal(improved.attemptCount, 2);
  assert.equal(improved.bestScore, 100);
  assert.equal(improved.bestCorrectCount, 30);
});

test('bốn dạng hoạt động được chấm theo giá trị đã chuẩn hóa', () => {
  assert.ifError(progressImportError);
  assert.equal(progressModule.isPracticeAnswerCorrect({ type: 'single_choice', correctAnswer: 'b' }, 'b'), true);
  assert.equal(progressModule.isPracticeAnswerCorrect({ type: 'short_answer', correctAnswer: '42' }, ' 42 '), true);
  assert.equal(progressModule.isPracticeAnswerCorrect({ type: 'ordering', correctAnswer: ['2', '5', '9'] }, ['2', '5', '9']), true);
  assert.equal(progressModule.isPracticeAnswerCorrect({ type: 'ordering', correctAnswer: ['2', '5', '9'] }, ['2', '9', '5']), false);
  assert.equal(
    progressModule.isPracticeAnswerCorrect(
      { type: 'matching', correctAnswer: ['a::1', 'b::2'] },
      ['b::2', 'a::1'],
    ),
    true,
  );
});

test('câu trả lời số chấp nhận cách viết tương đương và đơn vị tùy chọn', () => {
  assert.equal(progressModule.isPracticeAnswerCorrect({ type: 'short_answer', correctAnswer: '12 giờ' }, '12'), true);
  assert.equal(progressModule.isPracticeAnswerCorrect({ type: 'short_answer', correctAnswer: '12:00' }, '12'), true);
  assert.equal(progressModule.isPracticeAnswerCorrect({ type: 'short_answer', correctAnswer: '25%' }, '25'), true);
  assert.equal(progressModule.isPracticeAnswerCorrect({ type: 'short_answer', correctAnswer: '3,0' }, '3'), true);
  assert.equal(progressModule.isPracticeAnswerCorrect({ type: 'short_answer', correctAnswer: '3,5' }, '3.5'), true);
  assert.equal(progressModule.isPracticeAnswerCorrect({ type: 'short_answer', correctAnswer: '12 giờ' }, '12 km'), false);
  assert.equal(progressModule.isPracticeAnswerCorrect({ type: 'short_answer', correctAnswer: '25%' }, '25 cm'), false);
  assert.equal(progressModule.isPracticeAnswerCorrect({ type: 'short_answer', correctAnswer: '15' }, '16'), false);
});

test('18 vòng PDF cũ nằm riêng và bị chặn phát hành khi chưa kiểm duyệt', () => {
  assert.ifError(practiceImportError);
  const legacy = practiceModule.getLegacyPracticePacks();
  assert.equal(legacy.length, 1);
  assert.equal(legacy[0].subject, 'math');
  assert.equal(legacy[0].grade, 2);
  assert.equal(legacy[0].setCount, 18);
  assert.equal(legacy[0].releaseStatus, 'source_review_pending');
  assert.equal(legacy[0].sourcePageCount, 26);
  assert.equal(legacy[0].sourceSha256, 'B2C305037121A7178AE0CE4606DA31CA858CEA483A1ED6FAD2BE0F87A9443BCA');
  assert.equal(practiceModule.getPracticePacks().some((pack) => pack.id === legacy[0].id), false);
});

test('toàn bộ hoạt động có đáp án hợp lệ, lựa chọn duy nhất và không chứa dữ liệu rác', () => {
  assert.ifError(practiceImportError);
  for (const pack of practiceModule.getPracticePacks()) {
    for (const set of pack.sets) {
      const counts = { basic: 0, application: 0, challenge: 0 };
      for (const section of set.sections) {
        for (const item of section.items) {
          counts[item.difficulty] += 1;
          assert.ok(item.prompt.trim().length >= 5, item.id);
          assert.ok(item.explanation.trim().length >= 8, item.id);
          assert.doesNotMatch(`${item.prompt} ${item.explanation}`, /undefined|\bNaN\b|null/iu, item.id);

          if (item.options) {
            assert.equal(new Set(item.options.map((option) => option.id)).size, item.options.length, `${item.id}: trùng id lựa chọn`);
            assert.equal(new Set(item.options.map((option) => option.label.toLocaleLowerCase('vi'))).size, item.options.length, `${item.id}: trùng nội dung lựa chọn`);
          }
          if (item.type === 'single_choice') {
            assert.equal(item.options?.filter((option) => option.id === item.correctAnswer).length, 1, `${item.id}: đáp án không tồn tại duy nhất`);
          }
          if (item.type === 'ordering') {
            assert.deepEqual(
              [...(item.options || []).map((option) => option.label)].sort(),
              [...item.correctAnswer].sort(),
              `${item.id}: đáp án sắp xếp không khớp các thẻ`,
            );
          }
          if (item.type === 'matching') {
            const pairs = item.matchingPairs || [];
            assert.equal(new Set(pairs.map((pair) => pair.left)).size, pairs.length, `${item.id}: trùng vế trái`);
            assert.equal(new Set(pairs.map((pair) => pair.right)).size, pairs.length, `${item.id}: trùng vế phải`);
            assert.deepEqual([...item.correctAnswer].sort(), pairs.map((pair) => `${pair.left}::${pair.right}`).sort(), `${item.id}: đáp án ghép sai`);
          }
          assert.ok(['basic', 'application', 'challenge'].includes(item.difficulty), `${item.id}: mức độ không hợp lệ`);
        }
      }

      const expected = set.setNumber <= 4
        ? { basic: 21, application: 8, challenge: 1 }
        : set.setNumber <= 8
          ? { basic: 15, application: 11, challenge: 4 }
          : { basic: 9, application: 14, challenge: 7 };
      assert.deepEqual(counts, expected, `${set.id}: sai phân bố độ khó`);
    }
  }
});

test('câu tiếng Anh dùng danh từ đếm được trong mẫu a/an và đoạn đọc', () => {
  assert.ifError(practiceImportError);
  const invalid = /\b(?:a|an)\s+(?:happy|sad|tired|Monday|Tuesday|Friday|cycling|drawing|swimming|sunny|rainy|cloudy|morning|afternoon|evening|friendly|helpful|careful|yesterday|today|tomorrow|usually|sometimes|never|healthy|strong|active|carefully|quietly|quickly|because|although|therefore|recycle|protect|volunteer|interesting|important|wonderful)\b/iu;
  for (const pack of practiceModule.getPracticePacks().filter((entry) => entry.subject === 'english')) {
    for (const item of pack.sets.flatMap((set) => set.sections.flatMap((section) => section.items))) {
      assert.doesNotMatch(`${item.prompt} ${item.explanation}`, invalid, item.id);
    }
  }
});

test('câu chính tả lớp 1 chỉ có một từ đúng và câu đọc Tiếng Việt diễn đạt tự nhiên', () => {
  assert.ifError(practiceImportError);
  const validGradeOneWords = new Set(['bé', 'nhà', 'mẹ', 'cá', 'hoa', 'bút']);
  const gradeOne = practiceModule.getPracticePack('vietnamese', 1);
  const spellingItems = gradeOne.sets.flatMap((set) => set.sections.flatMap((section) => section.items))
    .filter((item) => item.topic === 'Âm, vần và chính tả');
  for (const item of spellingItems) {
    const validOptions = (item.options || []).filter((option) => validGradeOneWords.has(option.label));
    assert.equal(validOptions.length, 1, item.id);
    assert.equal(validOptions[0].id, item.correctAnswer, item.id);
  }

  const vietnameseText = practiceModule.getPracticePacks()
    .filter((pack) => pack.subject === 'vietnamese')
    .flatMap((pack) => pack.sets.flatMap((set) => set.sections.flatMap((section) => section.items)))
    .map((item) => `${item.prompt} ${item.explanation}`)
    .join('\n');
  assert.doesNotMatch(vietnameseText, /chăm sóc (?:thư viện|sân chơi|góc học tập)|trở nên biết/iu);
});

test('mỗi đề Tiếng Anh không lặp lại cùng một bài a/an', () => {
  assert.ifError(practiceImportError);
  for (const pack of practiceModule.getPracticePacks().filter((candidate) => candidate.subject === 'english')) {
    for (const set of pack.sets) {
      const nounPrompts = set.sections.flatMap((section) => section.items)
        .filter((item) => /___\s+[^”]+”/u.test(item.prompt))
        .map((item) => item.prompt.match(/___\s+([^”]+)”/u)?.[1].toLocaleLowerCase('en'));
      assert.equal(new Set(nounPrompts).size, nounPrompts.length, set.id);
    }
  }
});

test('câu ngôn ngữ tạo thành câu tự nhiên và đáp án trắc nghiệm được đảo vị trí', () => {
  assert.ifError(practiceImportError);
  const packs = practiceModule.getPracticePacks();
  const vietnameseText = packs
    .filter((pack) => pack.subject === 'vietnamese')
    .flatMap((pack) => pack.sets.flatMap((set) => set.sections.flatMap((section) => section.items)))
    .map((item) => `${item.prompt} ${item.explanation}`).join('\n');
  assert.doesNotMatch(vietnameseText, /(?:luôn|rất|vui vẻ và)\s+(?:bé|nhà|mẹ|cá|hoa|bút|trường học|gia đình)\b/iu);

  const englishText = packs
    .filter((pack) => pack.subject === 'english')
    .flatMap((pack) => pack.sets.flatMap((set) => set.sections.flatMap((section) => section.items)))
    .map((item) => `${item.prompt} ${item.explanation}`).join('\n');
  assert.doesNotMatch(englishText, /\bI see a [aeiou]/iu);

  const counts = { a: 0, b: 0, c: 0, d: 0 };
  for (const item of packs.flatMap((pack) => pack.sets.flatMap((set) => set.sections.flatMap((section) => section.items)))) {
    if (item.type === 'single_choice') counts[item.correctAnswer] += 1;
  }
  const choiceCount = Object.values(counts).reduce((sum, count) => sum + count, 0);
  assert.ok(choiceCount >= 3_000, JSON.stringify(counts));
  assert.ok(counts.a / choiceCount < 0.4, JSON.stringify(counts));
  assert.ok(counts.b / choiceCount > 0.25 && counts.c / choiceCount > 0.25 && counts.d / choiceCount > 0.05, JSON.stringify(counts));
});

test('3.600 hoạt động Toán được giải lại độc lập từ dữ kiện trong câu', () => {
  assert.ifError(practiceImportError);
  const mathPacks = practiceModule.getPracticePacks().filter((pack) => pack.subject === 'math' || pack.subject === 'math_en');
  let checked = 0;
  for (const item of mathPacks.flatMap((pack) => pack.sets.flatMap((set) => set.sections.flatMap((section) => section.items)))) {
    const answerText = item.type === 'single_choice'
      ? item.options?.find((option) => option.id === item.correctAnswer)?.label || ''
      : String(item.correctAnswer);
    if (item.type === 'ordering') {
      const expected = (item.options || []).map((option) => Number(option.label)).sort((a, b) => a - b).map(String);
      assert.deepEqual(item.correctAnswer, expected, item.id);
      checked += 1;
      continue;
    }

    const prompt = item.prompt;
    if (/Xem giờ đúng|Reading o’clock times|Thời gian|Time(?: and money)?$/u.test(item.topic)) {
      const durationGiven = prompt.match(/(?:lúc|at)\s*(\d+)(?::00|\s*giờ)[\s\S]+?(?:kéo dài|lasts)\s*(\d+)\s*(?:giờ|hour)/iu);
      if (durationGiven) {
        assert.equal(Number.parseInt(answerText, 10), Number(durationGiven[1]) + Number(durationGiven[2]), item.id);
      } else {
        const endMinute = prompt.match(/(?:ends at \d+:|kết thúc lúc \d+ giờ\s+)(\d+)/iu);
        assert.ok(endMinute, `${item.id}: chưa nhận diện được thời gian kết thúc`);
        assert.equal(Number(answerText), Number(endMinute[1]), item.id);
      }
      checked += 1;
      continue;
    }
    if (/Chuyển động đều|Speed, time and distance/u.test(item.topic)) {
      const values = [...prompt.matchAll(/\d+/gu)].map((match) => Number(match[0]));
      assert.equal(Number(answerText), values[0] * values[1], item.id);
      checked += 1;
      continue;
    }
    if (/Bảng số liệu|data tables/iu.test(item.topic)) {
      const values = [...prompt.matchAll(/\d+/gu)].map((match) => Number(match[0]));
      assert.equal(Number(answerText), values[0] + values[1] + values[2], item.id);
      checked += 1;
      continue;
    }
    if (/Tỉ số phần trăm|Percentages/u.test(item.topic)) {
      const values = [...prompt.matchAll(/\d+/gu)].map((match) => Number(match[0]));
      assert.equal(Number.parseFloat(answerText), Math.min(...values) / Math.max(...values) * 100, item.id);
      checked += 1;
      continue;
    }
    if (/So sánh số|Comparing numbers/u.test(item.topic)) {
      const values = [...prompt.matchAll(/\d+/gu)].map((match) => Number(match[0]));
      const expected = values[0] === values[1] ? '=' : values[0] > values[1] ? '>' : '<';
      assert.equal(answerText, expected, item.id);
      checked += 1;
      continue;
    }
    if (/Phân số|fractions/iu.test(item.topic) && prompt.includes('/')) {
      const addition = prompt.match(/(\d+)\/(\d+)\s*\+\s*(\d+)\/(\d+)/u);
      const selected = answerText.match(/(\d+)\/(\d+)/u);
      assert.ok(selected, `${item.id}: chưa nhận diện được đáp án phân số`);
      if (addition) {
        assert.equal(Number(addition[2]), Number(addition[4]), item.id);
        assert.equal(Number(selected[1]) * Number(addition[2]), (Number(addition[1]) + Number(addition[3])) * Number(selected[2]), item.id);
      } else {
        const base = prompt.match(/(\d+)\/(\d+)/u);
        assert.ok(base, `${item.id}: chưa nhận diện được phân số`);
        assert.equal(Number(base[1]) * Number(selected[2]), Number(base[2]) * Number(selected[1]), item.id);
      }
      checked += 1;
      continue;
    }
    if (/Phân số|fractions/iu.test(item.topic) && /(?:one of|một trong)\s+\d+/iu.test(prompt)) {
      const denominator = Number(prompt.match(/(?:one of|một trong)\s+(\d+)/iu)?.[1]);
      const selected = answerText.match(/(\d+)\/(\d+)/u);
      assert.ok(selected, `${item.id}: chưa nhận diện được phân số đơn vị`);
      assert.equal(Number(selected[1]), 1, item.id);
      assert.equal(Number(selected[2]), denominator, item.id);
      checked += 1;
      continue;
    }
    if (/Số thập phân|Decimals|Phân số và số thập phân|Fractions and decimals/u.test(item.topic)) {
      const values = [...prompt.replace(/,/gu, '.').matchAll(/\d+\.\d+/gu)].map((match) => Number(match[0]));
      assert.equal(Number(answerText.replace(',', '.')), Number((values[0] + values[1]).toFixed(1)), item.id);
      checked += 1;
      continue;
    }
    if (/Nhận biết hình phẳng|Recognising flat shapes/u.test(item.topic)) {
      const expected = /tròn|circle/iu.test(prompt) ? 0 : /tam giác|triangle/iu.test(prompt) ? 3 : 4;
      assert.equal(Number(answerText), expected, item.id);
      checked += 1;
      continue;
    }
    if (/Độ dài và hiệu|Length differences/u.test(item.topic)) {
      const values = [...prompt.matchAll(/\d+/gu)].map((match) => Number(match[0]));
      assert.equal(Number(answerText), values[0] - values[1], item.id);
      checked += 1;
      continue;
    }
    if (/Diện tích hình chữ nhật|Rectangle area/u.test(item.topic)) {
      const values = [...prompt.matchAll(/\d+/gu)].map((match) => Number(match[0]));
      assert.equal(Number(answerText), values[0] * values[1], item.id);
      checked += 1;
      continue;
    }
    if (/Thể tích hình hộp chữ nhật|Rectangular-prism volume/u.test(item.topic)) {
      const values = [...prompt.matchAll(/\d+/gu)].map((match) => Number(match[0]));
      assert.equal(Number(answerText), values[0] * values[1] * values[2], item.id);
      checked += 1;
      continue;
    }
    const product = prompt.match(/(?:tích của|product of)\s+(\d+)\s+(?:và|and)\s+(\d+)/iu);
    const division = prompt.match(/(?:Tính|Calculate)\s+(\d+)\s*(?:÷|:)\s*(\d+)/iu);
    const subtraction = prompt.match(/(\d+)\s*[−-]\s*(\d+)\s*=/u);
    const perimeter = prompt.match(/dài\s+(\d+)\s*cm[^\d]+rộng\s+(\d+)\s*cm/iu)
      || prompt.match(/chiều dài\s+(\d+)\s*cm[^\d]+chiều rộng\s+(\d+)\s*cm/iu)
      || prompt.match(/is\s+(\d+)\s*cm\s+long[^\d]+(\d+)\s*cm\s+wide/iu)
      || prompt.match(/length(?:\s+of)?\s+(\d+)\s*cm[^\d]+width(?:\s+of)?\s+(\d+)\s*cm/iu);
    const wordProblem = prompt.match(/(?:có|has|with)\s+(\d+)[\s\S]+?(?:thêm|gets|receives|given|tặng)\s+(\d+)/iu);
    const ribbon = /(?:ribbon|dây)/iu.test(prompt) ? prompt.match(/(\d+)\s*cm[\s\S]+?(\d+)\s*cm/iu) : null;
    const addition = prompt.match(/(\d+)\s*\+\s*(\d+)/u);
    const pattern = prompt.match(/(?:quy luật|pattern|dãy số|missing number|số còn thiếu):\s*(\d+),\s*(\d+),/iu);
    const match = product || division || subtraction || perimeter || wordProblem || ribbon || addition || pattern;
    assert.ok(match, `${item.id}: chưa nhận diện được phép tính`);
    const left = Number(match[1]);
    const right = Number(match[2]);
    const expected = product ? left * right : division ? left / right : subtraction ? left - right : perimeter ? 2 * (left + right) : pattern ? right + (right - left) : left + right;
    const actual = Number(answerText.replace(/\s*cm$/u, ''));
    assert.equal(actual, expected, item.id);
    checked += 1;
  }
  assert.equal(checked, 3_600);
});

test('phạm vi số của Toán lớp 1 và lớp 2 đúng chuẩn cuối năm', () => {
  assert.ifError(practiceImportError);
  for (const [grade, limit] of [[1, 100], [2, 1_000]]) {
    const pack = practiceModule.getPracticePack('math', grade);
    const calculationItems = pack.sets.flatMap((set) => set.sections.flatMap((section) => section.items))
      .filter((item) => item.topic.startsWith('Phép cộng') || item.topic.startsWith('Phép trừ'));
    const values = calculationItems.flatMap((item) => [...item.prompt.matchAll(/\d+/gu)].map((match) => Number(match[0])));
    assert.ok(values.some((value) => value >= limit * 0.7), `Toán lớp ${grade} chưa khai thác phạm vi đến ${limit}`);
    assert.ok(values.every((value) => value <= limit), `Toán lớp ${grade} có số vượt ${limit}`);
  }
});

test('20 tổ hợp bám đúng ma trận chủ điểm riêng của từng môn và lớp', () => {
  assert.ifError(practiceImportError);
  const matrix = practiceModule.PRACTICE_TOPIC_MATRIX;
  assert.ok(matrix);
  for (const pack of practiceModule.getPracticePacks()) {
    const expectedTopics = matrix[pack.subject][pack.grade];
    const actualTopics = new Set(pack.sets.flatMap((set) => set.sections.flatMap((section) => section.items.map((item) => item.topic))));
    assert.deepEqual([...actualTopics].sort(), [...expectedTopics].sort(), pack.id);
  }
});

test('có đủ 240 báo cáo đề và mọi báo cáo đều đạt điều kiện dữ liệu phát hành', () => {
  assert.ifError(practiceImportError);
  const reports = practiceModule.getPracticeSetAuditReports();
  assert.equal(reports.length, 240);
  for (const report of reports) {
    assert.equal(report.itemCount, 30, report.setId);
    assert.equal(report.answerCount, 30, report.setId);
    assert.equal(report.totalPoints, 300, report.setId);
    assert.equal(report.exactDuplicateCount, 0, report.setId);
    assert.equal(report.issues.length, 0, report.setId);
    assert.equal(report.status, 'passed', report.setId);
    assert.ok(report.coveredTopics.length >= 5, report.setId);
  }
});
