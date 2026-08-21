import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { access } from 'node:fs/promises';

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
  assert.ok(unverified.length > 0);
  assert.deepEqual(
    unverified.filter((lesson) => lesson.sourceType === 'sgk_official').map((lesson) => lesson.id),
    [],
    'Bài chưa đối chiếu vẫn đang bị gắn sourceType sgk_official'
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
    assert.equal(displayedContent.includes('chuẩn sgk'), false, `Còn claim SGK trong ${lesson.id}`);
  }
});

test('câu hỏi và hoạt động Tiếng Việt được đánh dấu là nội dung tự sinh cho đến khi có đối chiếu riêng', () => {
  const lessons = Object.entries(curriculum.VIETNAMESE_CURRICULUM_BY_GRADE).flatMap(([grade]) => (
    curriculum.getLessonsForGradeAndSubject(Number(grade), 'vietnamese')
  ));

  const questions = lessons.flatMap((lesson) => lesson.questions);
  assert.ok(questions.length >= lessons.length, 'Mỗi bài phải có ít nhất một câu hỏi/hoạt động');
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
    await access(join(process.cwd(), 'public', asset.primaryPath.slice(1)));
    await access(join(process.cwd(), 'public', asset.fallbackPath.slice(1)));
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
      assert.equal(lesson.referenceUrl, source.readerUrl, `Sai link nguồn: ${topic.id}`);
    }
  }
});

test.after(async () => {
  await rm(auditOutputDir, { recursive: true, force: true });
});
