import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import test from 'node:test';
import { build } from 'esbuild';
import { access, mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

function wavPcmData(file) {
  let offset = 12;
  while (offset + 8 <= file.length) {
    const chunkId = file.subarray(offset, offset + 4).toString('ascii');
    const chunkSize = file.readUInt32LE(offset + 4);
    if (chunkId === 'data') return file.subarray(offset + 8, offset + 8 + chunkSize);
    offset += 8 + chunkSize + (chunkSize % 2);
  }
  throw new Error('WAV không có data chunk');
}

function sha256(data) {
  return createHash('sha256').update(data).digest('hex');
}

const auditOutputDir = await mkdtemp(join(tmpdir(), 'wonderkids-vietnamese-audit-'));
await build({
  entryPoints: ['src/data/curriculum/index.ts'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outfile: join(auditOutputDir, 'curriculum.js'),
  write: true,
  logLevel: 'silent',
});

const curriculum = await import(pathToFileURL(join(auditOutputDir, 'curriculum.js')).href);

test('toàn bộ 132 bài Tiếng Việt có provenance tách riêng nội dung và tài liệu tham khảo', () => {
  const lessons = Object.entries(curriculum.VIETNAMESE_CURRICULUM_BY_GRADE).flatMap(([grade, topics]) => (
    topics.map((topic) => ({ grade: Number(grade), topic }))
  ));

  assert.equal(lessons.length, 132);
  for (const { grade, topic } of lessons) {
    const lesson = curriculum.getLessonsForGradeAndSubject(grade, 'vietnamese')
      .find((item) => item.id === topic.id);

    assert.ok(lesson, `Thiếu bài đã lắp ráp: ${topic.id}`);
    assert.ok(lesson.provenance, `Thiếu provenance: ${topic.id}`);
    assert.ok(
      ['sgk_reference', 'system_generated', 'pedagogical_supplement'].includes(lesson.provenance.contentOrigin),
      `Origin không hợp lệ: ${topic.id}`
    );
    assert.ok(
      ['verified', 'reference_only', 'declared_supplement'].includes(lesson.provenance.verificationStatus),
      `Trạng thái nguồn không hợp lệ: ${topic.id}`
    );
  }
});

test('nội dung chưa đối chiếu nguyên văn không được phát ra như SGK chính thức', () => {
  const lessons = Object.entries(curriculum.VIETNAMESE_CURRICULUM_BY_GRADE).flatMap(([grade]) => (
    curriculum.getLessonsForGradeAndSubject(Number(grade), 'vietnamese')
  ));

  const unverified = lessons.filter((lesson) => lesson.provenance.verificationStatus !== 'verified');
  assert.equal(lessons.filter((lesson) => lesson.provenance.verificationStatus === 'verified').length, 0);
  assert.equal(lessons.filter((lesson) => lesson.provenance.contentOrigin === 'system_generated').length, 129);
  assert.equal(lessons.filter((lesson) => lesson.provenance.contentOrigin === 'pedagogical_supplement').length, 3);
  assert.deepEqual(
    unverified.filter((lesson) => lesson.sourceType === 'sgk_official').map((lesson) => lesson.id),
    [],
    'Bài chưa đối chiếu vẫn đang bị gắn sourceType sgk_official'
  );
  assert.deepEqual(
    unverified.filter((lesson) => lesson.textbookPageRef).map((lesson) => lesson.id),
    [],
    'Bài chưa đối chiếu vẫn hiện badge trang SGK ở đầu bài'
  );
  assert.deepEqual(
    unverified.filter((lesson) => /\b(?:trang|sgk|chủ điểm)\b/i.test(lesson.unit)).map((lesson) => lesson.id),
    [],
    'Nhãn đơn vị của bài chưa đối chiếu vẫn giả dạng metadata SGK'
  );
});

test('văn bản hiển thị của nội dung tự sinh không tự nhận là chuẩn SGK', () => {
  const lessons = Object.entries(curriculum.VIETNAMESE_CURRICULUM_BY_GRADE).flatMap(([grade]) => (
    curriculum.getLessonsForGradeAndSubject(Number(grade), 'vietnamese')
  ));

  for (const lesson of lessons) {
    if (lesson.provenance.verificationStatus === 'verified') continue;
    const displayedContent = JSON.stringify({
      description: lesson.description,
      theoryContent: lesson.theoryContent,
      readingPassage: lesson.readingPassage,
      questions: lesson.questions,
    }).toLowerCase();
    const forbiddenClaims = [
      /chuẩn sgk/i,
      /(?:trong|theo) sgk/i,
      /kết nối tri thức/i,
      /(?:nxb|nhà xuất bản) giáo dục/i,
      /tác giả\s*:?[\s-]*sgk/i,
    ];
    for (const claim of forbiddenClaims) {
      assert.equal(claim.test(displayedContent), false, `Còn claim ${claim} trong ${lesson.id}`);
    }
  }
});

test('câu hỏi và hoạt động Tiếng Việt được đánh dấu là nội dung tự sinh cho đến khi có đối chiếu riêng', () => {
  const lessons = Object.entries(curriculum.VIETNAMESE_CURRICULUM_BY_GRADE).flatMap(([grade]) => (
    curriculum.getLessonsForGradeAndSubject(Number(grade), 'vietnamese')
  ));

  const questions = lessons.flatMap((lesson) => lesson.questions);
  for (const lesson of lessons) {
    assert.ok(lesson.questions.length >= 1, `Bài không có câu hỏi/hoạt động: ${lesson.id}`);
  }
  assert.equal(questions.filter((question) => question.contentOrigin !== 'system_generated').length, 0);
});

test('nội dung tự sinh không dùng nguyên tên bài SGK như thể là cùng một văn bản', () => {
  const lessons = Object.entries(curriculum.VIETNAMESE_CURRICULUM_BY_GRADE).flatMap(([grade]) => (
    curriculum.getLessonsForGradeAndSubject(Number(grade), 'vietnamese')
  ));

  for (const lesson of lessons) {
    if (lesson.provenance.contentOrigin !== 'system_generated') continue;
    assert.ok(lesson.provenance.referenceLessonTitle, `Thiếu tên bài SGK tham khảo: ${lesson.id}`);
    assert.match(lesson.title, /^Luyện đọc tự sinh\b/i, `Tên bài trong app chưa tách nguồn: ${lesson.id}`);
    assert.match(lesson.readingPassage.title, /^Luyện đọc tự sinh\b/i, `Tên gói đọc chưa tách nguồn: ${lesson.id}`);
    assert.notEqual(lesson.title, lesson.provenance.referenceLessonTitle, `Tên app trùng tên SGK: ${lesson.id}`);
    assert.notEqual(lesson.readingPassage.title, lesson.provenance.referenceLessonTitle, `Tên gói đọc trùng tên SGK: ${lesson.id}`);
  }

  const doiTai = lessons.find((lesson) => lesson.id === 'tv-g1-b22');
  assert.equal(doiTai.provenance.contentOrigin, 'system_generated');
  assert.equal(doiTai.provenance.verificationStatus, 'reference_only');
  assert.equal(doiTai.provenance.referenceLessonTitle, 'Bài 2: Đôi tai xấu xí');
  assert.equal(doiTai.readingPassage.author, 'WonderKids — nội dung tự sinh');
});

test('manifest audio có đúng một file chính và một fallback cho từng bài', async () => {
  const manifest = curriculum.VIETNAMESE_AUDIO_MANIFEST;
  assert.equal(Object.keys(manifest).length, 132);

  for (const [lessonId, asset] of Object.entries(manifest)) {
    assert.equal(asset.lessonId, lessonId);
    assert.equal(asset.primaryPath, `/audio/curriculum/${lessonId}.wav`);
    assert.equal(asset.fallbackPath, `/audio/curriculum/fallback/${lessonId}.wav`);
    assert.equal(asset.primaryVoice, 'Cô Giáo Vy');
    assert.equal(asset.fallbackVoice, 'Cô Mỹ Duyên');
    const primaryFile = join(process.cwd(), 'public', asset.primaryPath.slice(1));
    const fallbackFile = join(process.cwd(), 'public', asset.fallbackPath.slice(1));
    await access(primaryFile);
    await access(fallbackFile);
    assert.equal(asset.audibleDisclosureText, 'Đây là nội dung do WonderKids biên soạn, không phải nguyên văn sách giáo khoa.');
    assert.ok(asset.primaryDisclosurePcmBytes > 0);
    assert.ok(asset.fallbackDisclosurePcmBytes > 0);
    const primaryPcm = wavPcmData(await readFile(primaryFile));
    const fallbackPcm = wavPcmData(await readFile(fallbackFile));
    assert.equal(sha256(primaryPcm.subarray(0, asset.primaryDisclosurePcmBytes)), asset.primaryDisclosurePcmSha256);
    assert.equal(sha256(fallbackPcm.subarray(0, asset.fallbackDisclosurePcmBytes)), asset.fallbackDisclosurePcmSha256);
  }
});

test('ba bài bổ trợ không bị gán tên bài, trang hoặc link SGK', () => {
  const lessons = Object.entries(curriculum.VIETNAMESE_CURRICULUM_BY_GRADE).flatMap(([grade]) => (
    curriculum.getLessonsForGradeAndSubject(Number(grade), 'vietnamese')
  ));
  const supplements = lessons.filter((lesson) => lesson.provenance.contentOrigin === 'pedagogical_supplement');
  assert.equal(supplements.length, 3);
  for (const lesson of supplements) {
    assert.equal(lesson.provenance.referenceLessonTitle, undefined, `Bổ trợ có tên SGK: ${lesson.id}`);
    assert.equal(lesson.referenceBook, undefined, `Bổ trợ có sách SGK: ${lesson.id}`);
    assert.equal(lesson.referenceDetail, undefined, `Bổ trợ có trang SGK: ${lesson.id}`);
    assert.equal(lesson.referenceUrl, undefined, `Bổ trợ có link SGK: ${lesson.id}`);
    assert.equal(lesson.textbookPageRef, undefined, `Bổ trợ còn badge trang SGK: ${lesson.id}`);
  }
});

test('thay đổi provenance Tiếng Việt không làm đổi nguồn hoặc phần thưởng môn khác', () => {
  for (const subject of ['math', 'english']) {
    for (const grade of [1, 2, 3, 4, 5]) {
      for (const lesson of curriculum.getLessonsForGradeAndSubject(grade, subject)) {
        assert.notEqual(lesson.provenance.contentOrigin, 'system_generated', `Sai nguồn ${subject}: ${lesson.id}`);
        assert.notEqual(lesson.provenance.verificationStatus, 'reference_only', `Sai xác minh ${subject}: ${lesson.id}`);
        assert.equal(lesson.starsEarned, 0, `Sai sao đã nhận: ${lesson.id}`);
        assert.equal(lesson.xpReward, 50, `Sai XP: ${lesson.id}`);
        assert.equal(lesson.starReward, 3, `Sai thưởng sao: ${lesson.id}`);
      }
    }
  }
});

test('mỗi bài được nối đúng lớp, tập và nguồn SGK do người quản trị cung cấp', () => {
  const sources = curriculum.VIETNAMESE_BOOK_SOURCES;
  assert.equal(sources.length, 10);

  for (const [grade, topics] of Object.entries(curriculum.VIETNAMESE_CURRICULUM_BY_GRADE)) {
    const lessons = curriculum.getLessonsForGradeAndSubject(Number(grade), 'vietnamese');
    for (const topic of topics) {
      const lesson = lessons.find((item) => item.id === topic.id);
      const source = sources.find((item) => item.grade === Number(grade) && item.semester === topic.semester);
      assert.ok(source, `Thiếu nguồn lớp ${grade}, tập ${topic.semester}`);
      if (lesson.provenance.contentOrigin === 'pedagogical_supplement') {
        assert.equal(lesson.referenceUrl, undefined, `Bài bổ trợ không được nối SGK: ${topic.id}`);
        continue;
      }
      assert.equal(lesson.referenceUrl, source.readerUrl, `Sai link nguồn: ${topic.id}`);
    }
  }
});

test.after(async () => {
  await rm(auditOutputDir, { recursive: true, force: true });
});
