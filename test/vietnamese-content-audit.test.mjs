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

test('toàn bộ 376 bài Tiếng Việt có provenance và trang nguồn để đối chiếu', () => {
  const lessons = Object.entries(curriculum.VIETNAMESE_CURRICULUM_BY_GRADE).flatMap(([grade, topics]) => (
    topics.map((topic) => ({ grade: Number(grade), topic }))
  ));

  assert.equal(lessons.length, 376);
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

test('chỉ bài đã đối chiếu nguyên văn mới mở bài đọc và hoạt động SGK', () => {
  const lessons = Object.entries(curriculum.VIETNAMESE_CURRICULUM_BY_GRADE).flatMap(([grade]) => (
    curriculum.getLessonsForGradeAndSubject(Number(grade), 'vietnamese')
  ));

  const pending = lessons.filter((lesson) => lesson.catalogSection === 'sgk_pending');
  assert.equal(pending.length, 360);
  assert.equal(lessons.filter((lesson) => lesson.provenance.verificationStatus === 'verified').length, 16);
  assert.equal(lessons.filter((lesson) => lesson.provenance.contentOrigin === 'sgk_reference').length, 376);
  for (const lesson of pending) {
    assert.equal(lesson.sourceType, 'sgk_official', `Bài mục lục không có nguồn SGK: ${lesson.id}`);
    assert.ok(lesson.textbookPageRef, `Bài mục lục thiếu trang SGK: ${lesson.id}`);
    assert.ok(lesson.sourceCitation?.sourcePages.length, `Bài mục lục thiếu trích dẫn trang: ${lesson.id}`);
    assert.ok(lesson.sourcePageImageUrls.length, `Bài mục lục thiếu ảnh trang: ${lesson.id}`);
    if (lesson.provenance.verificationStatus !== 'verified') {
      assert.equal(lesson.sourceCitation?.verificationStatus, 'draft', `Nguồn nháp bị gắn đã duyệt: ${lesson.id}`);
      assert.deepEqual(lesson.readingPassage?.content, [], `Bài chưa duyệt còn văn bản đọc: ${lesson.id}`);
    }
  }

  const verified = lessons.filter((lesson) => lesson.catalogSection === 'sgk');
  assert.equal(verified.length, 16);
  for (const lesson of verified) {
    assert.equal(lesson.readingPassage?.verificationStatus, 'verified', `Thiếu nguyên văn đã duyệt: ${lesson.id}`);
    assert.ok(lesson.readingPassage?.content.length, `Thiếu nguyên văn: ${lesson.id}`);
    assert.ok(lesson.questions.length > 0, `Thiếu hoạt động SGK: ${lesson.id}`);
    assert.equal(lesson.appExtensions.length, 0, `Bài SGK không được trộn Luyện thêm: ${lesson.id}`);
    for (const question of lesson.questions) {
      assert.match(question.sourceActivityId || '', /^sgk-/, `Thiếu mã hoạt động: ${question.id}`);
      assert.ok(lesson.sourceCitation.sourcePages.includes(question.sourcePage), `Sai trang hoạt động: ${question.id}`);
      assert.match(question.sourceSubpart || '', /\S/, `Thiếu tiểu ý: ${question.id}`);
      assert.ok(['auto', 'self_confirm'].includes(question.gradingMode), `Thiếu cách chấm: ${question.id}`);
    }
  }

  const coGiaoLopEm = verified.find((lesson) => lesson.id === 'tv-g2-b9');
  assert.ok(coGiaoLopEm, 'Bài 9 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.deepEqual(coGiaoLopEm.sourceCitation.sourcePages, [40, 41]);
  assert.deepEqual(coGiaoLopEm.readingPassage?.content, [
    'Sáng nào em đến lớp\nCũng thấy cô đến rồi.\nĐáp lời “Chào cô ạ!”\nCô mỉm cười thật tươi.',
    'Cô dạy em tập viết\nGió đưa thoảng hương nhài\nNắng ghé vào cửa lớp\nXem chúng em học bài.',
    'Những lời cô giáo giảng\nẤm trang vở thơm tho\nYêu thương em ngắm mãi\nNhững điểm mười cô cho.',
  ]);
  assert.equal(coGiaoLopEm.questions.length, 10);
  assert.equal(coGiaoLopEm.questions.filter((question) => question.sourcePage === 41).length, 10);

  const thoiKhoaBieu = verified.find((lesson) => lesson.id === 'tv-g2-b10');
  assert.ok(thoiKhoaBieu, 'Bài 10 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(thoiKhoaBieu.title, 'Bài 10: Thời khoá biểu');
  assert.deepEqual(thoiKhoaBieu.sourceCitation.sourcePages, [43, 44, 45]);
  assert.deepEqual(thoiKhoaBieu.readingPassage?.content, [
    'Thời khoá biểu cho biết thời gian học các môn của từng ngày trong tuần. Thời khoá biểu gồm nhiều cột dọc và nhiều hàng ngang. Các bạn học sinh thường đọc thời khoá biểu theo trình tự thứ – buổi – tiết – môn.',
  ]);
  assert.equal(thoiKhoaBieu.questions.length, 10);

  const caiTrongTruongEm = verified.find((lesson) => lesson.id === 'tv-g2-b11');
  assert.ok(caiTrongTruongEm, 'Bài 11 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(caiTrongTruongEm.title, 'Bài 11: Cái trống trường em');
  assert.deepEqual(caiTrongTruongEm.sourceCitation.sourcePages, [48, 49, 50]);
  assert.deepEqual(caiTrongTruongEm.readingPassage?.content, [
    'Mùa hè cũng nghỉ\nSuốt ba tháng liền\nTrống nằm ngẫm nghĩ.',
    'Buồn không hả trống\nTrong những ngày hè\nBọn mình đi vắng\nChỉ còn tiếng ve?',
    'Cái trống lặng im\nNghiêng đầu trên giá\nChắc thấy chúng em\nNó mừng vui quá!',
    'Kìa trống đang gọi:\nTùng! Tùng! Tùng! Tùng!\nVào năm học mới\nGiọng vang tưng bừng.',
  ]);
  assert.equal(caiTrongTruongEm.questions.length, 12);
  assert.equal(
    caiTrongTruongEm.readingPassage?.audioNarration,
    [caiTrongTruongEm.readingPassage?.title, ...caiTrongTruongEm.readingPassage?.content].join('\n'),
    'Transcript audio Bài 11 phải là đúng nguyên văn đang hiển thị ở cột bài đọc',
  );

  const danhSachHocSinh = verified.find((lesson) => lesson.id === 'tv-g2-b12');
  assert.ok(danhSachHocSinh, 'Bài 12 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(danhSachHocSinh.title, 'Bài 12: Danh sách học sinh');
  assert.deepEqual(danhSachHocSinh.sourceCitation.sourcePages, [51, 52, 53, 54]);
  assert.deepEqual(danhSachHocSinh.readingPassage?.content, [
    'Hôm nay, chúng tôi được đọc truyện tại lớp. Cô giáo cho chúng tôi đăng kí đọc truyện theo sở thích. Dưới đây là danh sách đăng kí của tổ tôi.',
    'Danh sách học sinh tổ 2 lớp 2C đăng kí đọc truyện\n1. Trần Trường An — Ngày khai trường\n2. Nguyễn Hà Anh — Ếch xanh đi học\n3. Nguyễn Ngọc Bảo — Ếch xanh đi học\n4. Đỗ Duy Bắc — Ngày khai trường\n5. Vũ Tiến Bình — Vì sao gà chẳng giỏi bơi?\n6. Lê Thị Cúc — Ngày khai trường\n7. Lê Gia Hân — Vì sao gà chẳng giỏi bơi?\n8. Phùng Minh Khánh — Ếch xanh đi học',
    'Dựa vào danh sách đăng kí, cô chia lớp thành ba nhóm, mỗi nhóm đọc một truyện. Chúng tôi đọc cho nhau nghe, rồi cùng nhau trao đổi về các nhân vật trong truyện mà nhóm đã chọn.',
  ]);
  assert.equal(danhSachHocSinh.questions.length, 21);
  assert.equal(
    danhSachHocSinh.readingPassage?.audioNarration,
    [danhSachHocSinh.readingPassage?.title, ...danhSachHocSinh.readingPassage?.content].join('\n'),
    'Transcript audio Bài 12 phải là đúng nguyên văn đang hiển thị ở cột bài đọc',
  );

  const yeuLamTruongOi = verified.find((lesson) => lesson.id === 'tv-g2-b13');
  assert.ok(yeuLamTruongOi, 'Bài 13 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(yeuLamTruongOi.title, 'Bài 13: Yêu lắm trường ơi!');
  assert.deepEqual(yeuLamTruongOi.sourceCitation.sourcePages, [55, 56, 57]);
  assert.deepEqual(yeuLamTruongOi.readingPassage?.content, [
    'Em yêu mái trường\nCó hàng cây mát\nXôn xao khúc nhạc\nTiếng chim xanh trời.',
    'Mỗi giờ ra chơi\nSân trường nhộn nhịp\nHồng hào gương mặt\nBạn nào cũng xinh.',
    'Yêu lớp học em\nCó khung cửa sổ\nCó bàn tay lá\nQuạt gió mát vào.',
    'Lời cô ngọt ngào\nThấm từng trang sách\nNgày không đến lớp\nThấy nhớ nhớ ghê!',
    'Có đêm trong mơ\nBỗng cười khúc khích\nNgỡ đang ở lớp\nCùng bạn đùa vui.',
  ]);
  assert.equal(yeuLamTruongOi.questions.length, 14);
  assert.equal(
    yeuLamTruongOi.readingPassage?.audioNarration,
    [yeuLamTruongOi.readingPassage?.title, ...yeuLamTruongOi.readingPassage?.content].join('\n'),
    'Transcript audio Bài 13 phải là đúng nguyên văn đang hiển thị ở cột bài đọc',
  );

  const emHocVe = verified.find((lesson) => lesson.id === 'tv-g2-b14');
  assert.ok(emHocVe, 'Bài 14 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(emHocVe.title, 'Bài 14: Em học vẽ');
  assert.deepEqual(emHocVe.sourceCitation.sourcePages, [58, 59, 60, 61, 62]);
  assert.deepEqual(emHocVe.readingPassage?.content, [
    'Hôm nay trong lớp học\nVới giấy trắng, bút màu\nNắn nót em ngồi vẽ\nLung linh bầu trời sao.',
    'Vẽ ông trăng trên cao\nRải ánh vàng đầy ngõ\nVẽ cánh diều no gió\nVi vu giữa trời xanh.',
    'Vẽ biển cả trong lành\nCó một con thuyền trắng\nGiương cánh buồm đỏ thắm\nĐang rẽ sóng ra khơi.',
    'Vẽ cả ông mặt trời\nVà những chùm phượng đỏ\nTrên sân trường lộng gió\nGọi ve về râm ran.',
  ]);
  assert.equal(emHocVe.questions.length, 23);
  assert.equal(
    emHocVe.readingPassage?.audioNarration,
    [emHocVe.readingPassage?.title, ...emHocVe.readingPassage?.content].join('\n'),
    'Transcript audio Bài 14 phải là đúng nguyên văn đang hiển thị ở cột bài đọc',
  );

  const cuonSachCuaEm = verified.find((lesson) => lesson.id === 'tv-g2-b15');
  assert.ok(cuonSachCuaEm, 'Bài 15 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(cuonSachCuaEm.title, 'Bài 15: Cuốn sách của em');
  assert.deepEqual(cuonSachCuaEm.sourceCitation.sourcePages, [63, 64, 65]);
  assert.deepEqual(cuonSachCuaEm.readingPassage?.content, [
    'Mỗi cuốn sách có một tên gọi. Tên sách là hàng chữ lớn ở khoảng giữa bìa sách, thường chứa đựng rất nhiều ý nghĩa. Qua tên sách, em có thể biết được sách viết về điều gì.',
    'Người viết cuốn sách được gọi là tác giả. Tên tác giả thường được ghi vào phía trên của bìa sách.',
    'Nơi các cuốn sách ra đời được gọi là nhà xuất bản. Tên nhà xuất bản thường được ghi ở phía dưới bìa sách.',
    'Phần lớn các cuốn sách đều có mục lục thể hiện các mục chính và vị trí của chúng trong cuốn sách. Mục lục thường được đặt ở ngay sau trang bìa, cũng có khi được đặt ở cuối sách.',
    'Mỗi lần đọc một cuốn sách mới, đừng quên những điều này em nhé.',
  ]);
  assert.equal(cuonSachCuaEm.questions.length, 14);
  assert.equal(
    cuonSachCuaEm.readingPassage?.audioNarration,
    [cuonSachCuaEm.readingPassage?.title, ...cuonSachCuaEm.readingPassage?.content].join('\n'),
    'Transcript audio Bài 15 phải là đúng nguyên văn đang hiển thị ở cột bài đọc',
  );

  const khiTrangSachMoRa = verified.find((lesson) => lesson.id === 'tv-g2-b16');
  assert.ok(khiTrangSachMoRa, 'Bài 16 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(khiTrangSachMoRa.title, 'Bài 16: Khi trang sách mở ra');
  assert.deepEqual(khiTrangSachMoRa.sourceCitation.sourcePages, [66, 67, 68, 69]);
  assert.deepEqual(khiTrangSachMoRa.readingPassage?.content, [
    'Khi trang sách mở ra\nChân trời xa xích lại\nBắt đầu là cỏ dại\nThứ đến là cánh chim\nSau nữa là trẻ con\nCuối cùng là người lớn.',
    'Trong trang sách có biển\nEm thấy những cánh buồm\nTrong trang sách có rừng\nVới bao nhiêu là gió.',
    'Trang sách còn có lửa\nMà giấy chẳng cháy đâu\nTrang sách có ao sâu\nMà giấy không hề ướt.',
    'Trang sách không nói được\nSao em nghe điều gì\nDạt dào như sóng vỗ\nMột chân trời đang đi.',
  ]);
  assert.equal(khiTrangSachMoRa.questions.length, 19);
  assert.equal(
    khiTrangSachMoRa.readingPassage?.audioNarration,
    [khiTrangSachMoRa.readingPassage?.title, ...khiTrangSachMoRa.readingPassage?.content].join('\n'),
    'Transcript audio Bài 16 phải là đúng nguyên văn đang hiển thị ở cột bài đọc',
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

test('bài chờ đối chiếu không có câu hỏi hoặc hoạt động tự sinh', () => {
  const lessons = Object.entries(curriculum.VIETNAMESE_CURRICULUM_BY_GRADE).flatMap(([grade]) => (
    curriculum.getLessonsForGradeAndSubject(Number(grade), 'vietnamese')
  ));

  for (const lesson of lessons.filter((item) => item.catalogSection === 'sgk_pending')) {
    assert.equal(lesson.questions.length, 0, `Bài chờ duyệt còn câu hỏi: ${lesson.id}`);
    assert.equal(lesson.appExtensions.length, 0, `Bài chờ duyệt còn Luyện thêm: ${lesson.id}`);
  }
});

test('thẻ dùng đúng tên bài trong mục lục và giữ đúng trạng thái đã duyệt', () => {
  const lessons = Object.entries(curriculum.VIETNAMESE_CURRICULUM_BY_GRADE).flatMap(([grade]) => (
    curriculum.getLessonsForGradeAndSubject(Number(grade), 'vietnamese')
  ));

  for (const lesson of lessons) {
    assert.ok(lesson.provenance.referenceLessonTitle, `Thiếu tên bài SGK tham khảo: ${lesson.id}`);
    const declaredTitle = lesson.provenance.referenceLessonTitle;
    assert.equal(lesson.title, declaredTitle, `Sai tên bài hiển thị: ${lesson.id}`);
    assert.ok(['sgk', 'sgk_pending'].includes(lesson.catalogSection), `Bài bị gắn sai khu: ${lesson.id}`);
    if (lesson.provenance.verificationStatus !== 'verified') {
      assert.equal(lesson.catalogSection, 'sgk_pending', `Bài chưa duyệt bị xuất bản: ${lesson.id}`);
      assert.equal(lesson.sourceCitation.verificationStatus, 'draft', `Tên chưa duyệt bị coi là SGK đã duyệt: ${lesson.id}`);
    } else {
      assert.equal(lesson.catalogSection, 'sgk', `Bài đã duyệt chưa được xuất bản: ${lesson.id}`);
    }
    assert.equal(lesson.appExtensions.length, 0, `Bài chờ duyệt lại có Luyện thêm: ${lesson.id}`);
  }

  const voiHoKhi = lessons.find((lesson) => lesson.id === 'tv-g1-t1-b83');
  assert.equal(voiHoKhi.provenance.contentOrigin, 'sgk_reference');
  assert.equal(voiHoKhi.provenance.verificationStatus, 'reference_only');
  assert.equal(voiHoKhi.provenance.referenceLessonTitle, 'Bài 83: Voi, hổ và khỉ');
  assert.deepEqual(voiHoKhi.readingPassage.content, []);
});

test('manifest audio có một file chính, một fallback và không còn câu công bố nguồn', async () => {
  const manifest = curriculum.VIETNAMESE_AUDIO_MANIFEST;
  const verifiedLessonIds = Object.entries(curriculum.VIETNAMESE_CURRICULUM_BY_GRADE)
    .flatMap(([grade]) => curriculum.getLessonsForGradeAndSubject(Number(grade), 'vietnamese'))
    .filter((lesson) => lesson.readingPassage?.contentOrigin === 'sgk_reference'
      && lesson.readingPassage.verificationStatus === 'verified')
    .map((lesson) => lesson.id.replace('-l', '-b'))
    .sort();
  assert.deepEqual(Object.keys(manifest).sort(), verifiedLessonIds);

  for (const [lessonId, asset] of Object.entries(manifest)) {
    assert.equal(asset.lessonId, lessonId);
    assert.equal(asset.primaryPath, `/audio/curriculum/${lessonId}.wav`);
    assert.equal(asset.fallbackPath, `/audio/curriculum/fallback/${lessonId}.wav`);
    assert.ok(asset.primaryVoice?.trim(), `Thiếu tên giọng chính: ${lessonId}`);
    assert.ok(asset.fallbackVoice?.trim(), `Thiếu tên giọng fallback: ${lessonId}`);
    assert.notEqual(asset.primaryVoice, asset.fallbackVoice, `Hai luồng dùng cùng giọng: ${lessonId}`);
    const primaryFile = join(process.cwd(), 'public', asset.primaryPath.slice(1));
    const fallbackFile = join(process.cwd(), 'public', asset.fallbackPath.slice(1));
    await access(primaryFile);
    await access(fallbackFile);
    assert.equal(asset.audibleDisclosureText, undefined);
    assert.match(asset.transcriptHash, /^[a-f0-9]{64}$/);
    assert.ok(asset.lessonVersion >= 1);
    assert.ok(Array.isArray(asset.sourcePages) && asset.sourcePages.length > 0);
    const primaryPcm = wavPcmData(await readFile(primaryFile));
    const fallbackPcm = wavPcmData(await readFile(fallbackFile));
    assert.notEqual(sha256(primaryPcm.subarray(0, 552960)), '7c91d642b467c265cb41aabdb5f9cbca60b9d2ed67f4ccd839884187b0bb8a2e');
    assert.notEqual(sha256(fallbackPcm.subarray(0, 506880)), 'f00942c59dcc1fcaf8da62a279e05709ce2b7eb45fb25fe8c7621201946358a0');
    assert.notEqual(sha256(await readFile(primaryFile)), sha256(await readFile(fallbackFile)));
  }
});

test('danh mục SGK hiện không tái sử dụng ba bài bổ trợ cũ', () => {
  const lessons = Object.entries(curriculum.VIETNAMESE_CURRICULUM_BY_GRADE).flatMap(([grade]) => (
    curriculum.getLessonsForGradeAndSubject(Number(grade), 'vietnamese')
  ));
  const supplements = lessons.filter((lesson) => lesson.provenance.contentOrigin === 'pedagogical_supplement');
  assert.equal(supplements.length, 0);
});

test('thay đổi provenance Tiếng Việt không làm đổi nguồn hoặc phần thưởng môn khác', () => {
  for (const subject of ['math', 'english']) {
    const topicsByGrade = subject === 'math'
      ? curriculum.MATH_CURRICULUM_BY_GRADE
      : curriculum.ENGLISH_CURRICULUM_BY_GRADE;
    for (const grade of [1, 2, 3, 4, 5]) {
      for (const lesson of curriculum.getLessonsForGradeAndSubject(grade, subject)) {
        const topic = topicsByGrade[grade].find((item) => item.id === lesson.id);
        assert.ok(topic, `Thiếu topic gốc ${subject}: ${lesson.id}`);
        assert.notEqual(lesson.provenance.contentOrigin, 'system_generated', `Sai nguồn ${subject}: ${lesson.id}`);
        assert.notEqual(lesson.provenance.verificationStatus, 'reference_only', `Sai xác minh ${subject}: ${lesson.id}`);
        assert.equal(lesson.unit, topic.unit, `Sai unit ${subject}: ${lesson.id}`);
        assert.equal(lesson.textbookPageRef, topic.textbookPageRef, `Sai trang sách ${subject}: ${lesson.id}`);
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
      assert.equal(lesson.referenceUrl, source.readerUrl, `Sai link nguồn bài học: ${topic.id}`);
      assert.equal(
        lesson.provenance.referenceUrl,
        source.readerUrl,
        `Sai link nguồn kiểm toán nội bộ: ${topic.id}`
      );
    }
  }
});

test.after(async () => {
  await rm(auditOutputDir, { recursive: true, force: true });
});
