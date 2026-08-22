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
  const verified = lessons.filter((lesson) => lesson.catalogSection === 'sgk');
  assert.equal(pending.length + verified.length, 376);
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

  for (const lesson of verified) {
    assert.equal(lesson.readingPassage?.verificationStatus, 'verified', `Thiếu nguyên văn đã duyệt: ${lesson.id}`);
    assert.ok(lesson.readingPassage?.content.length, `Thiếu nguyên văn: ${lesson.id}`);
    assert.ok(lesson.questions.length > 0, `Thiếu hoạt động SGK: ${lesson.id}`);
    assert.equal(lesson.appExtensions.length, 0, `Bài SGK không được trộn Luyện thêm: ${lesson.id}`);
    assert.equal(new Set(lesson.questions.map((question) => question.id)).size, lesson.questions.length, `Trùng mã hoạt động: ${lesson.id}`);
    assert.equal(new Set(lesson.questions.map((question) => question.sourceActivityId)).size, lesson.questions.length, `Trùng ánh xạ tiểu ý SGK: ${lesson.id}`);
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

  const goiBan = verified.find((lesson) => lesson.id === 'tv-g2-b17');
  assert.ok(goiBan, 'Bài 17 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(goiBan.title, 'Bài 17: Gọi bạn');
  assert.deepEqual(goiBan.sourceCitation.sourcePages, [79, 80, 81]);
  assert.deepEqual(goiBan.readingPassage?.content, [
    'Từ xa xưa thuở nào\nTrong rừng xanh sâu thẳm\nĐôi bạn sống bên nhau\nBê vàng và dê trắng.',
    'Một năm, trời hạn hán\nSuối cạn, cỏ héo khô\nLấy gì nuôi đôi bạn\nChờ mưa đến bao giờ?',
    'Bê vàng đi tìm cỏ\nLang thang quên đường về\nDê trắng thương bạn quá\nChạy khắp nẻo tìm bê\nĐến bây giờ dê trắng\nVẫn gọi hoài: “Bê! Bê!”.',
  ]);
  assert.equal(goiBan.questions.length, 14);
  assert.equal(goiBan.readingPassage?.audioNarration, [goiBan.readingPassage?.title, ...goiBan.readingPassage?.content].join('\n'));

  const toNhoCau = verified.find((lesson) => lesson.id === 'tv-g2-b18');
  assert.ok(toNhoCau, 'Bài 18 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(toNhoCau.title, 'Bài 18: Tớ nhớ cậu');
  assert.deepEqual(toNhoCau.sourceCitation.sourcePages, [82, 83, 84, 85]);
  assert.deepEqual(toNhoCau.readingPassage?.content, [
    'Kiến là bạn thân của sóc. Hằng ngày, hai bạn thường rủ nhau đi học. Thế rồi nhà kiến chuyển đến một khu rừng khác. Lúc chia tay, kiến rất buồn. Kiến nói: “Cậu phải thường xuyên nhớ tớ đấy.” Sóc gật đầu nhận lời.',
    'Một buổi sáng, sóc lấy một tờ giấy và viết thư cho kiến. Sóc nắn nót ghi: “Tớ nhớ cậu.” Một cơn gió đi ngang qua mang theo lá thư. Chiều hôm đó, kiến đi dạo trong rừng. Một lá thư nhẹ nhẹ bay xuống. Kiến reo lên: “À, thư của sóc!”.',
    'Hôm sau, kiến ngồi bên thềm và viết thư cho sóc. Kiến không biết làm sao cho sóc biết mình rất nhớ bạn. Cậu viết: “Chào sóc!”. Nhưng kiến không định chào sóc. Cậu bèn viết một lá thư khác: “Sóc thân mến!”. Như thế vẫn không đúng ý của kiến. Lấy một tờ giấy mới, kiến ghi: “Sóc ơi!”. Cứ thế, cậu cặm cụi viết đi viết lại trong nhiều giờ liền.',
    'Không lâu sau, sóc nhận được một lá thư do kiến gửi đến. Thư viết: “Sóc ơi, tớ cũng nhớ cậu!”.',
  ]);
  assert.equal(toNhoCau.questions.length, 21);
  assert.equal(toNhoCau.readingPassage?.audioNarration, [toNhoCau.readingPassage?.title, ...toNhoCau.readingPassage?.content].join('\n'));

  const chuyenBonMua = verified.find((lesson) => lesson.id === 'tv-g2-b19');
  assert.ok(chuyenBonMua, 'Bài 19 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(chuyenBonMua.title, 'Bài 1: Chuyện bốn mùa');
  assert.deepEqual(chuyenBonMua.sourceCitation.sourcePages, [9, 10, 11]);
  assert.deepEqual(chuyenBonMua.readingPassage?.content, [
    'Ngày đầu năm, bốn nàng tiên Xuân, Hạ, Thu, Đông gặp nhau. Đông cầm tay Xuân bảo:\n– Chị là người sung sướng nhất. Ai cũng yêu chị. Chị về, cây nào cũng đâm chồi nảy lộc.',
    'Xuân nói:\n– Nhưng nhờ có em Hạ, cây trong vườn mới đơm trái ngọt, học sinh mới được nghỉ hè.',
    'Nàng Hạ tinh nghịch xen vào:\n– Thế mà thiếu nhi lại thích em Thu nhất. Không có Thu, làm sao có đêm trăng Rằm rước đèn, phá cỗ,...',
    'Giọng buồn buồn, Đông nói:\n– Chỉ có em là chẳng ai yêu.',
    'Thu đặt tay lên vai Đông, thủ thỉ:\n– Có em mới có bập bùng bếp lửa nhà sàn, mọi người mới có giấc ngủ ấm trong chăn.',
    'Bốn nàng tiên mải chuyện trò, không biết bà Đất đã đến từ lúc nào. Bà nói:\n– Xuân làm cho cây lá tươi tốt. Hạ cho trái ngọt, hoa thơm. Thu làm cho trời xanh cao, học sinh nhớ ngày tựu trường. Còn cháu Đông, cháu có công ấp ủ mầm sống để xuân về cây cối đâm chồi nảy lộc. Các cháu đều có ích, đều đáng yêu.',
  ]);
  assert.equal(chuyenBonMua.questions.length, 15);
  assert.equal(chuyenBonMua.readingPassage?.audioNarration, [chuyenBonMua.readingPassage?.title, ...chuyenBonMua.readingPassage?.content].join('\n'));

  const muaNuocNoi = verified.find((lesson) => lesson.id === 'tv-g2-b20');
  assert.ok(muaNuocNoi, 'Bài 20 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(muaNuocNoi.title, 'Bài 2: Mùa nước nổi');
  assert.deepEqual(muaNuocNoi.sourceCitation.sourcePages, [12, 13, 14, 15]);
  assert.deepEqual(muaNuocNoi.readingPassage?.content, [
    'Mùa này, người làng tôi gọi là mùa nước nổi, không gọi là mùa nước lũ, vì nước lên hiền hoà. Nước mỗi ngày một dâng lên. Mưa dầm dề, mưa sướt mướt ngày này qua ngày khác.',
    'Rồi đến Rằm tháng Bảy. “Rằm tháng Bảy nước nhảy lên bờ”. Dòng sông Cửu Long đã no đầy, lại tràn qua bờ. Nước trong ao hồ, trong đồng ruộng của mùa mưa hoà lẫn với nước dòng sông Cửu Long.',
    'Đồng ruộng, vườn tược và cây cỏ như biết giữ lại hạt phù sa ở quanh mình, nước lại trong dần. Ngồi trong nhà, ta thấy cả những đàn cá ròng ròng, từng đàn, từng đàn theo cá mẹ xuôi theo dòng nước, vào tận đồng sâu.',
    'Ngủ một đêm, sáng dậy, nước ngập lên những viên gạch. Phải lấy ván, lấy tre làm cầu từ cửa trước vào đến tận bếp. Vui quá! Có cả một cây cầu lắt lẻo ngay dưới mái nhà.',
  ]);
  assert.equal(muaNuocNoi.questions.length, 22);
  assert.equal(muaNuocNoi.readingPassage?.audioNarration, [muaNuocNoi.readingPassage?.title, ...muaNuocNoi.readingPassage?.content].join('\n'));

  const hoaMiHot = verified.find((lesson) => lesson.id === 'tv-g2-b21');
  assert.ok(hoaMiHot, 'Bài 3 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(hoaMiHot.title, 'Bài 3: Hoa mi hót');
  assert.deepEqual(hoaMiHot.sourceCitation.sourcePages, [16, 17, 18]);
  assert.deepEqual(hoaMiHot.readingPassage?.content, [
    'Mùa xuân! Mỗi khi hoạ mi cất lên những tiếng hót vang lừng, mọi vật như có sự thay đổi kì diệu.',
    'Trời bỗng sáng thêm ra. Những luồng sáng chiếu qua các chùm lộc mới nhú, rực rỡ hơn. Những gợn sóng trên hồ hoà nhịp với tiếng hoạ mi hót, lấp lánh thêm. Da trời bỗng xanh hơn, những làn mây trắng trắng hơn, xốp hơn, trôi nhẹ nhàng hơn. Các loài hoa nghe tiếng hót trong suốt của hoạ mi chợt bừng giấc, xoè những cánh hoa đẹp, bày đủ các màu sắc xanh tươi. Tiếng hót dịu dặt của hoạ mi giục các loài chim dạo lên những khúc nhạc tưng bừng, ngợi ca núi sông đang đổi mới.',
    'Chim, mây, nước và hoa đều cho rằng tiếng hót kì diệu của hoạ mi đã làm cho tất cả bừng tỉnh giấc... Hoạ mi thấy lòng vui sướng, cố hót hay hơn.',
  ]);
  assert.equal(hoaMiHot.questions.length, 17);
  assert.equal(hoaMiHot.readingPassage?.audioNarration, [hoaMiHot.readingPassage?.title, ...hoaMiHot.readingPassage?.content].join('\n'));

  const tetDenRoi = verified.find((lesson) => lesson.id === 'tv-g2-b22');
  assert.ok(tetDenRoi, 'Bài 4 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(tetDenRoi.title, 'Bài 4: Tết đến rồi');
  assert.deepEqual(tetDenRoi.sourceCitation.sourcePages, [19, 20, 21, 22]);
  assert.deepEqual(tetDenRoi.readingPassage?.content, [
    'Tết là khởi đầu cho một năm mới, là dịp lễ được mong chờ nhất trong năm.',
    'Vào dịp Tết, các gia đình thường gói bánh chưng hoặc bánh tét. Bánh chưng hình vuông, gói bằng lá dong. Bánh tét hình trụ, thường gói bằng lá chuối. Cả hai loại bánh đều làm từ gạo nếp, đỗ xanh, thịt lợn.',
    'Mai và đào là những loài hoa đặc trưng cho Tết ở hai miền Nam, Bắc. Hoa mai rực rỡ sắc vàng. Hoa đào thường có màu hồng tươi, xen lẫn lá xanh và nụ hồng chùm chím.',
    'Ngày Tết, người lớn thường tặng trẻ em những bao lì xì xinh xắn, với mong ước các em mạnh khoẻ, giỏi giang. Tết là dịp mọi người quây quần bên nhau và dành cho nhau những lời chúc tốt đẹp.',
  ]);
  assert.equal(tetDenRoi.questions.length, 22);
  assert.equal(tetDenRoi.readingPassage?.audioNarration, [tetDenRoi.readingPassage?.title, ...tetDenRoi.readingPassage?.content].join('\n'));

  const giotNuocVaBienLon = verified.find((lesson) => lesson.id === 'tv-g2-b23');
  assert.ok(giotNuocVaBienLon, 'Bài 5 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(giotNuocVaBienLon.title, 'Bài 5: Giọt nước và biển lớn');
  assert.deepEqual(giotNuocVaBienLon.sourceCitation.sourcePages, [23, 24, 25]);
  assert.deepEqual(giotNuocVaBienLon.readingPassage?.content, [
    'Tí tách tí tách\nTừng giọt\nTừng giọt\nMưa rơi\nRơi rơi.\n\nGóp lại bao ngày\nThành dòng suối nhỏ\nLượn trên bãi cỏ\nChảy xuống chân đồi.',
    'Suối gặp bạn rồi\nGóp thành sông lớn\nSông đi ra biển\nBiển thành mênh mông.',
    'Biển ơi, có biết\nBiển lớn vô cùng\nTừng giọt nước trong\nLàm nên biển đấy!',
  ]);
  assert.equal(giotNuocVaBienLon.questions.length, 15);
  assert.equal(giotNuocVaBienLon.readingPassage?.audioNarration, [giotNuocVaBienLon.readingPassage?.title, ...giotNuocVaBienLon.readingPassage?.content].join('\n'));

  const muaVang = verified.find((lesson) => lesson.id === 'tv-g2-b24');
  assert.ok(muaVang, 'Bài 6 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(muaVang.title, 'Bài 6: Mùa vàng');
  assert.deepEqual(muaVang.sourceCitation.sourcePages, [26, 27, 28, 29, 30]);
  assert.deepEqual(muaVang.readingPassage?.content, [
    'Thu về, những quả hồng đỏ mọng, những hạt dẻ nâu bóng, những quả na mở to mắt, thơm dịu dịu. Biển lúa vàng ươm. Gió nổi lên và sóng lúa vàng dập dờn trải tới chân trời.\n\nMinh ríu rít bên mẹ:\n– Mẹ ơi, con thấy quả trên cây đều chín hết cả rồi. Các bạn ấy đang mong có người đến hái đấy. Nhìn quả chín ngon thế này, chắc các bác nông dân vui lắm mẹ nhỉ?\n– Đúng thế con ạ.\n– Nếu mùa nào cũng được thu hoạch thì thích lắm, phải không mẹ?\nMẹ âu yếm nhìn Minh và bảo:\n– Con nói đúng đấy! Mùa nào thức ấy.',
    'Nhưng để có sản phẩm thu hoạch, trước đó người nông dân phải làm rất nhiều việc. Họ phải cày bừa, gieo hạt và ươm mầm. Rồi mưa nắng, hạn hán, họ phải chăm sóc vườn cây, ruộng đồng. Nhờ thế mà cây lớn dần, ra hoa kết trái và chín rộ đấy.\n– Mẹ ơi, con hiểu rồi. Công việc của các bác nông dân vất vả quá mẹ nhỉ?',
  ]);
  assert.equal(muaVang.questions.length, 22);
  assert.equal(muaVang.readingPassage?.audioNarration, [muaVang.readingPassage?.title, ...muaVang.readingPassage?.content].join('\n'));

  const hatThoc = verified.find((lesson) => lesson.id === 'tv-g2-b25');
  assert.ok(hatThoc, 'Bài 7 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(hatThoc.title, 'Bài 7: Hạt thóc');
  assert.deepEqual(hatThoc.sourceCitation.sourcePages, [31, 32, 33]);
  assert.deepEqual(hatThoc.readingPassage?.content, [
    'Tôi chỉ là hạt thóc\nSinh ra trên cánh đồng\nGiấu trong mình câu chuyện\nMột cuộc đời bão dông.',
    'Tôi ngậm ánh nắng sớm\nTôi uống giọt sương mai\nTôi sống qua bão lũ\nTôi chịu nhiều thiên tai.',
    'Dẫu hình hài bé nhỏ\nTôi trải cả bốn mùa\nDẫu bây giờ bình dị\nTôi có từ ngàn xưa.',
    'Tôi chỉ là hạt thóc\nKhông biết hát biết cười\nNhưng tôi luôn có ích\nVì nuôi sống con người.',
  ]);
  assert.equal(hatThoc.questions.length, 16);
  assert.equal(hatThoc.readingPassage?.audioNarration, [hatThoc.readingPassage?.title, ...hatThoc.readingPassage?.content].join('\n'));

  const luyTre = verified.find((lesson) => lesson.id === 'tv-g2-b26');
  assert.ok(luyTre, 'Bài 8 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(luyTre.title, 'Bài 8: Luỹ tre');
  assert.deepEqual(luyTre.sourceCitation.sourcePages, [34, 35, 36, 37]);
  assert.deepEqual(luyTre.readingPassage?.content, [
    'Mỗi sớm mai thức dậy\nLuỹ tre xanh rì rào\nNgọn tre cong gọng vó\nKéo mặt trời lên cao.',
    'Những trưa đồng đầy nắng\nTrâu nằm nhai bóng râm\nTre bần thần nhớ gió\nChợt về đầy tiếng chim.',
    'Mặt trời xuống núi ngủ\nTre nâng vầng trăng lên\nSao, sao treo đầy cành\nSuốt đêm dài thắp sáng.',
    'Bỗng gà lên tiếng gáy\nXôn xao ngoài luỹ tre\nĐêm chuyển dần về sáng\nMầm măng đợi nắng về.',
  ]);
  assert.equal(luyTre.questions.length, 21);
  assert.equal(luyTre.readingPassage?.audioNarration, [luyTre.readingPassage?.title, ...luyTre.readingPassage?.content].join('\n'));

  const veChim = verified.find((lesson) => lesson.id === 'tv-g2-b27');
  assert.ok(veChim, 'Bài 9 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(veChim.title, 'Bài 9: Vè chim');
  assert.deepEqual(veChim.sourceCitation.sourcePages, [39, 40, 41]);
  assert.deepEqual(veChim.readingPassage?.content, [
    'Hay chạy lon xon\nLà gà mới nở\nVừa đi vừa nhảy\nLà em sáo xinh\nHay nói linh tinh\nLà con liếu điếu\nHay nghịch hay tếu\nLà cậu chìa vôi\nHay chao đớp mồi\nLà chim chèo bẻo\nTính hay mách lẻo\nThím khách trước nhà\nHay nhặt lân la\nLà bà chim sẻ.',
    'Có tình có nghĩa\nLà mẹ chim sâu\nGiục hè đến mau\nLà cô tu hú\nNhấp nhem buồn ngủ\nLà bác cú mèo...',
  ]);
  assert.equal(veChim.questions.length, 16);
  assert.equal(veChim.readingPassage?.audioNarration, [veChim.readingPassage?.title, ...veChim.readingPassage?.content].join('\n'));

  const khungLong = verified.find((lesson) => lesson.id === 'tv-g2-b28');
  assert.ok(khungLong, 'Bài 10 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(khungLong.title, 'Bài 10: Khủng long');
  assert.deepEqual(khungLong.sourceCitation.sourcePages, [42, 43, 44, 45]);
  assert.deepEqual(khungLong.readingPassage?.content, [
    'Khủng long là loài vật thường sống thành bầy đàn ở các vùng đất khô.\n\nTrong suy nghĩ của nhiều người, khủng long là loài vật khổng lồ. Nhưng trên thực tế, có loài khủng long chỉ bằng một chú chó nhỏ. Khủng long thường ăn thịt, cũng có một số loài ăn cỏ.',
    'Chân khủng long thẳng và rất khoẻ. Vì thế chúng có thể đi khắp một vùng rộng lớn để kiếm ăn. Khủng long có khả năng săn mồi tốt nhờ có đôi mắt tinh tường cùng cái mũi và đôi tai thính. Khủng long cũng có khả năng tự vệ tốt nhờ vào cái đầu cứng và cái quất đuôi dũng mãnh.',
    'Trước khi con người xuất hiện, khủng long đã bị tuyệt chủng. Vì thế, chúng ta sẽ không bao giờ có thể nhìn thấy khủng long thật.',
  ]);
  assert.equal(khungLong.questions.length, 18);
  assert.equal(khungLong.readingPassage?.audioNarration, [khungLong.readingPassage?.title, ...khungLong.readingPassage?.content].join('\n'));

  const suTichCayThiLa = verified.find((lesson) => lesson.id === 'tv-g2-b29');
  assert.ok(suTichCayThiLa, 'Bài 11 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(suTichCayThiLa.title, 'Bài 11: Sự tích cây thì là');
  assert.deepEqual(suTichCayThiLa.sourceCitation.sourcePages, [46, 47, 48]);
  assert.deepEqual(suTichCayThiLa.readingPassage?.content, [
    'Ngày xưa, cây cối trên trái đất chưa có tên gọi. Trời bèn gọi chúng lên để đặt tên. Cây cối mừng rỡ kéo nhau lên trời. Trời chỉ tay vào từng cây và đặt tên:\n– Chú thì ta đặt tên cho là cây dừa.\n– Chú thì ta đặt tên cho là cây cau.\n– Chú thì ta đặt tên cho là cây mít...\nTrời đặt tên mãi mà vẫn chưa hết. Về sau, Trời chỉ nói vắn tắt:\n– Chú thì là cây cải.\n– Chú là cây ớt.\n– Chú là cây tỏi...\nKhi các loài cây đều đã có tên, bỗng một cái cây dáng mảnh khảnh, lá nhỏ xíu đến xin đặt tên.\n– Chú bé tí xíu, chú có ích gì để ta đặt tên nào? – Trời hỏi.\nCây nhỏ liền thưa:\n– Thưa Trời, khi nấu canh riêu cá hoặc làm chả cá, chả mực mà không có con thì mất cả ngon ạ.',
    'Trời liền bảo:\n– Ừ, để ta nghĩ cho một cái tên. Tên chú thì... là... thì... là...\nTrời còn đang suy nghĩ, cây nhỏ đã chạy đi xa rồi. Nó mừng rỡ khoe với bạn bè:\n– Trời đặt tên cho tôi là cây “thì là” đấy!',
  ]);
  assert.equal(suTichCayThiLa.questions.length, 15);
  assert.equal(suTichCayThiLa.readingPassage?.audioNarration, [suTichCayThiLa.readingPassage?.title, ...suTichCayThiLa.readingPassage?.content].join('\n'));

  const boTreDonKhach = verified.find((lesson) => lesson.id === 'tv-g2-b30');
  assert.ok(boTreDonKhach, 'Bài 12 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(boTreDonKhach.title, 'Bài 12: Bờ tre đón khách');
  assert.deepEqual(boTreDonKhach.sourceCitation.sourcePages, [49, 50, 51, 52, 53]);
  assert.deepEqual(boTreDonKhach.readingPassage?.content, [
    'Bờ tre quanh hồ\nSuốt ngày đón khách\nMột đàn cò bạch\nHạ cánh reo mừng\nTre chợt tưng bừng\nNở đầy hoa trắng.',
    'Đến chơi im lặng\nCó bác bồ nông\nĐứng nhìn mênh mông\nIm như tượng đá.\nMột chú bói cá\nĐỗ xuống cành mềm\nChú vụt bay lên\nĐậu vào chỗ cũ.',
    'Ghé chơi đông đủ\nCả toán chim cu\nCa hát gật gù:\n“Ồ, tre rất mát!”.',
    'Khách còn chú ếch\nÌ ộp vang lừng\nGọi sao tưng bừng\nLúc ngày vừa tắt.',
  ]);
  assert.equal(boTreDonKhach.questions.length, 19);
  assert.equal(boTreDonKhach.readingPassage?.audioNarration, [boTreDonKhach.readingPassage?.title, ...boTreDonKhach.readingPassage?.content].join('\n'));

  const tiengChoiTre = verified.find((lesson) => lesson.id === 'tv-g2-t2-b13');
  assert.ok(tiengChoiTre, 'Bài 13 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(tiengChoiTre.title, 'Bài 13: Tiếng chổi tre');
  assert.deepEqual(tiengChoiTre.sourceCitation.sourcePages, [54, 55, 56]);
  assert.deepEqual(tiengChoiTre.readingPassage?.content, [
    'Những đêm hè\nKhi ve ve\nĐã ngủ\nTôi lắng nghe\nTrên đường Trần Phú\nTiếng chổi tre\nXao xác\nHàng me\nTiếng chổi tre\nĐêm hè\nQuét rác...',
    'Những đêm đông\nKhi cơn dông\nVừa tắt\nTôi đứng trông\nTrên đường lặng ngắt\nChị lao công\nNhư sắt\nNhư đồng\nChị lao công\nĐêm đông\nQuét rác...',
    'Nhớ em nghe\nTiếng chổi tre\nChị quét\nNhững đêm hè\nĐêm đông gió rét\nTiếng chổi tre\nSớm tối\nĐi về\nGiữ sạch lề\nĐẹp lối\nEm nghe!',
  ]);
  assert.equal(tiengChoiTre.questions.length, 16);
  assert.equal(tiengChoiTre.readingPassage?.audioNarration, [tiengChoiTre.readingPassage?.title, ...tiengChoiTre.readingPassage?.content].join('\n'));

  const coNonCuoiRoi = verified.find((lesson) => lesson.id === 'tv-g2-t2-b14');
  assert.ok(coNonCuoiRoi, 'Bài 14 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(coNonCuoiRoi.title, 'Bài 14: Cỏ non cười rồi');
  assert.deepEqual(coNonCuoiRoi.sourceCitation.sourcePages, [57, 58, 59, 60]);
  assert.deepEqual(coNonCuoiRoi.readingPassage?.content, [
    'Mùa xuân đã đến. Cỏ trong công viên bừng tỉnh sau giấc ngủ đông. Từng đàn én từ phương Nam trở về. Trẻ em chơi đùa dưới ánh mặt trời ấm áp.\n\nMột hôm, chị én nâu đang sửa soạn đi ngủ thì nghe thấy tiếng khóc thút thít. Lần theo tiếng khóc, én nâu tìm đến công viên nhỏ. Thấy một cây cỏ non đang khóc, én nâu hỏi:\n– Em bị ốm à?\nCỏ non khóc nấc lên:\n– Chị ơi, em không đứng thẳng được nữa. Các bạn nhỏ đã đến đây chơi đùa và giẫm lên em.\nÉn nâu lặng đi một phút rồi bỗng reo lên:\n– Đừng khóc nữa! Chị sẽ giúp em.',
    'Thế rồi, én nâu gọi thêm rất nhiều bạn của mình. Suốt đêm, cả đàn én ra sức đi tìm cỏ khô tết thành dòng chữ “Không giẫm chân lên cỏ!” đặt bên cạnh bãi cỏ. Xong việc, én nâu tươi cười bảo cỏ non:\n– Từ nay em yên tâm rồi. Không còn ai giẫm lên em nữa đâu.\nCỏ non nhoẻn miệng cười và cảm ơn chị én nâu.',
  ]);
  assert.equal(coNonCuoiRoi.questions.length, 21);
  assert.equal(coNonCuoiRoi.readingPassage?.audioNarration, [coNonCuoiRoi.readingPassage?.title, ...coNonCuoiRoi.readingPassage?.content].join('\n'));

  const nhungConSaoBien = verified.find((lesson) => lesson.id === 'tv-g2-t2-b15');
  assert.ok(nhungConSaoBien, 'Bài 15 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(nhungConSaoBien.title, 'Bài 15: Những con sao biển');
  assert.deepEqual(nhungConSaoBien.sourceCitation.sourcePages, [61, 62, 63]);
  assert.deepEqual(nhungConSaoBien.readingPassage?.content, [
    'Một người đàn ông đang dạo bộ trên bãi biển khi chiều xuống. Biển đông người, nhưng ông lại chú ý đến một cậu bé cứ liên tục cúi xuống nhặt thứ gì đó lên rồi thả xuống biển.\n\nTiến lại gần hơn, ông thấy cậu bé đang nhặt những con sao biển bị thuỷ triều đánh dạt lên bờ và thả chúng trở về với đại dương.\n\n– Cháu đang làm gì vậy? – Người đàn ông hỏi.\n\nCậu bé trả lời:\n\n– Những con sao biển này sắp chết vì thiếu nước, cháu muốn giúp chúng.\n\n– Có hàng ngàn con sao biển như vậy, liệu cháu có thể giúp được tất cả chúng không?',
    'Cậu bé vẫn tiếp tục nhặt những con sao biển khác thả xuống biển và nói với người đàn ông:\n\n– Cháu cũng biết như vậy, nhưng ít nhất thì cháu cũng cứu được những con sao biển này.\n\nNgười đàn ông trìu mến nhìn cậu bé và cùng cậu cứu những con sao biển.',
  ]);
  assert.equal(nhungConSaoBien.questions.length, 16);
  assert.equal(nhungConSaoBien.readingPassage?.audioNarration, [nhungConSaoBien.readingPassage?.title, ...nhungConSaoBien.readingPassage?.content].join('\n'));

  const tamBietCanhCam = verified.find((lesson) => lesson.id === 'tv-g2-t2-b16');
  assert.ok(tamBietCanhCam, 'Bài 16 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(tamBietCanhCam.title, 'Bài 16: Tạm biệt cánh cam');
  assert.deepEqual(tamBietCanhCam.sourceCitation.sourcePages, [64, 65, 66, 67]);
  assert.deepEqual(tamBietCanhCam.readingPassage?.content, [
    'Chú cánh cam đi lạc vào nhà Bống. Chân chú bị thương, bước đi tập tễnh. Bống thương quá, đặt cánh cam vào một chiếc lọ nhỏ đựng đầy cỏ. Từ ngày đó, cánh cam trở thành người bạn nhỏ xíu của Bống.\n\nCánh cam có đôi cánh xanh biếc, óng ánh dưới ánh nắng mặt trời. Mỗi khi nghe tiếng động, chú khệ nệ ôm cái bụng tròn lẳn, trốn vào đám cỏ rối. Bống chăm sóc cánh cam rất cẩn thận. Hằng ngày, em đều bỏ vào chiếc lọ một chút nước và những ngọn cỏ xanh non.\n\nNhưng Bống cảm thấy cánh cam vẫn có vẻ ngơ ngác không vui, chắc chú nhớ nhà và nhớ bạn bè. Đoán vậy, Bống mang cánh cam thả ra bãi cỏ sau nhà. Tạm biệt cánh cam bé nhỏ, Bống hi vọng chú sẽ tìm được đường về căn nhà thân thương của mình.',
  ]);
  assert.equal(tamBietCanhCam.questions.length, 19);
  assert.equal(tamBietCanhCam.readingPassage?.audioNarration, [tamBietCanhCam.readingPassage?.title, ...tamBietCanhCam.readingPassage?.content].join('\n'));

  const nhungCachChaoDocDao = verified.find((lesson) => lesson.id === 'tv-g2-t2-b17');
  assert.ok(nhungCachChaoDocDao, 'Bài 17 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(nhungCachChaoDocDao.title, 'Bài 17: Những cách chào độc đáo');
  assert.deepEqual(nhungCachChaoDocDao.sourceCitation.sourcePages, [77, 78, 79]);
  assert.deepEqual(nhungCachChaoDocDao.readingPassage?.content, [
    'Trên thế giới có những cách chào phổ biến như bắt tay, vẫy tay và cúi chào. Ngoài ra, người ta còn có những cách chào nhau rất đặc biệt.',
    'Người Ma-ô-ri ở Niu Di-lân chào bằng cách nhẹ nhàng chạm mũi và trán vào nhau. Người Ấn Độ thì chắp hai tay trước ngực, kèm theo một cái cúi đầu. Nhiều người ở Mỹ thì chào bằng cách nắm bàn tay lại và đấm nhẹ vào nắm tay người kia. Còn người Dim-ba-bu-ê lại chào theo cách truyền thống là vỗ tay,... Mỗi cách chào thể hiện một nét riêng trong giao tiếp của người dân ở từng nước.',
    'Còn em, em chào bạn bằng cách nào?',
  ]);
  assert.equal(nhungCachChaoDocDao.questions.length, 16);
  assert.equal(nhungCachChaoDocDao.readingPassage?.audioNarration, [nhungCachChaoDocDao.readingPassage?.title, ...nhungCachChaoDocDao.readingPassage?.content].join('\n'));

  const thuVienBietDi = verified.find((lesson) => lesson.id === 'tv-g2-t2-b18');
  assert.ok(thuVienBietDi, 'Bài 18 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(thuVienBietDi.title, 'Bài 18: Thư viện biết đi');
  assert.deepEqual(thuVienBietDi.sourceCitation.sourcePages, [80, 81, 82, 83]);
  assert.deepEqual(thuVienBietDi.readingPassage?.content, [
    'Thư viện là nơi lưu giữ sách báo, nơi mọi người đến đọc sách hoặc mượn sách về nhà. Nhiều người nghĩ rằng thư viện chỉ nằm im một chỗ. Nhưng trên thế giới, có rất nhiều “thư viện biết đi”.',
    'Thư viện Lô-gô-xơ của Đức là “thư viện nổi” lớn nhất thế giới. Nó nằm trên một con tàu biển khổng lồ, có thể chở được 500 hành khách và đã từng đi qua 45 nước trên thế giới.',
    'Ở Phần Lan, có hàng trăm “thư viện di động” trên những chiếc xe buýt cũ, chạy khắp các thành phố lớn. Ở châu Phi, một người thủ thư đã đặt thư viện trên lưng một con lạc đà. Nhờ thế, những cuốn sách có thể băng qua sa mạc để đến với người đọc.',
  ]);
  assert.equal(thuVienBietDi.questions.length, 23);
  assert.equal(thuVienBietDi.readingPassage?.audioNarration, [thuVienBietDi.readingPassage?.title, ...thuVienBietDi.readingPassage?.content].join('\n'));

  const camOnAnhHaMa = verified.find((lesson) => lesson.id === 'tv-g2-t2-b19');
  assert.ok(camOnAnhHaMa, 'Bài 19 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(camOnAnhHaMa.title, 'Bài 19: Cảm ơn anh hà mã');
  assert.deepEqual(camOnAnhHaMa.sourceCitation.sourcePages, [84, 85, 86]);
  assert.deepEqual(camOnAnhHaMa.readingPassage?.content, [
    'Dê rủ cún vào rừng chơi, khi quay về thì bị lạc đường. Gặp cô hươu, dê hỏi:\n– Cô kia, về làng đi lối nào?\n– Không biết. – Hươu lắc đầu, bỏ đi.\n\nĐi tiếp, tới một con sông, thấy anh hà mã, dê nói to:\n– Bọn tôi muốn về làng, hãy đưa bọn tôi qua sông!\n\nHà mã phật ý, định bỏ đi. Thấy vậy, cún nói:\n– Chào anh hà mã, anh giúp bọn em qua sông được không ạ?',
    '– Được chứ! Em ngoan quá! – Hà mã vui vẻ nói.\n– Cảm ơn anh! – Cún đáp rồi quay sang nói nhỏ với dê:\n– Cậu quên lời cô dặn rồi à? Muốn ai đó giúp, phải hỏi một cách lịch sự, còn khi họ giúp mình, phải nói “cảm ơn”.\n\nDê con hơi xấu hổ. Sang bên kia sông, dê nói với hà mã:\n– Cảm ơn anh đã giúp. Em biết mình sai rồi. Em xin lỗi ạ!\n\nHà mã mỉm cười:\n– Em biết lỗi là tốt rồi. Giờ các em cứ đi theo đường này là về làng thôi.',
  ]);
  assert.equal(camOnAnhHaMa.questions.length, 16);
  assert.equal(camOnAnhHaMa.readingPassage?.audioNarration, [camOnAnhHaMa.readingPassage?.title, ...camOnAnhHaMa.readingPassage?.content].join('\n'));

  const tuChuBoCauDenInternet = verified.find((lesson) => lesson.id === 'tv-g2-t2-b20');
  assert.ok(tuChuBoCauDenInternet, 'Bài 20 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(tuChuBoCauDenInternet.title, 'Bài 20: Từ chú bồ câu đến in-tơ-nét');
  assert.deepEqual(tuChuBoCauDenInternet.sourceCitation.sourcePages, [87, 88, 89, 90]);
  assert.deepEqual(tuChuBoCauDenInternet.readingPassage?.content, [
    'Ngoài trò chuyện trực tiếp, con người còn nghĩ ra rất nhiều cách để trao đổi với nhau khi ở xa.',
    'Từ xa xưa, người ta đã biết huấn luyện bồ câu để đưa thư. Bồ câu nhớ đường rất tốt. Nó có thể bay qua một chặng đường dài hàng nghìn cây số để mang thư đến đúng nơi nhận.',
    'Những người đi biển còn nghĩ ra cách bỏ thư vào trong những chiếc chai thuỷ tinh. Nhờ sóng biển, những chiếc chai này được đẩy vào đất liền. Có những bức thư vài chục năm sau mới được tìm thấy.',
    'Ngày nay, việc trao đổi thông tin dễ dàng hơn rất nhiều. Bạn có thể viết thư, gọi điện cho người khác. Nhờ có in-tơ-nét, bạn cũng có thể nhìn thấy người nói chuyện với mình, dù hai người đang ở cách nhau rất xa.',
  ]);
  assert.equal(tuChuBoCauDenInternet.questions.length, 21);
  assert.equal(tuChuBoCauDenInternet.readingPassage?.audioNarration, [tuChuBoCauDenInternet.readingPassage?.title, ...tuChuBoCauDenInternet.readingPassage?.content].join('\n'));

  const maiAnTiem = verified.find((lesson) => lesson.id === 'tv-g2-t2-b21');
  assert.ok(maiAnTiem, 'Bài 21 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(maiAnTiem.title, 'Bài 21: Mai An Tiêm');
  assert.deepEqual(maiAnTiem.sourceCitation.sourcePages, [92, 93, 94]);
  assert.deepEqual(maiAnTiem.readingPassage?.content, [
    'Ngày xưa, có một người tên là Mai An Tiêm được Vua Hùng yêu mến nhận làm con nuôi. Một lần, vì hiểu lầm lời nói của An Tiêm nên nhà vua nổi giận, đày An Tiêm ra đảo hoang.\n\nỞ đảo hoang, hai vợ chồng An Tiêm dựng nhà bằng tre nứa, lấy cỏ phơi khô kết thành quần áo.\n\nMột hôm, An Tiêm thấy một đàn chim bay qua thả xuống loại hạt đen nhánh. Chàng bèn nhặt và gieo xuống cát, thầm nghĩ: “Thứ quả này chim ăn được thì người cũng ăn được”. Rồi hạt nảy mầm, vươn thành một loại cây dây bò lan rộng. Cây ra hoa rồi ra quả. Quả có vỏ màu xanh thẫm, ruột đỏ, hạt đen nhánh, có vị ngọt và mát. Vợ chồng An Tiêm đem hạt gieo trồng khắp đảo.',
    'Mùa quả chín, nhớ vua cha, An Tiêm khắc tên mình vào quả, thả xuống biển, nhờ sóng đưa vào đất liền. Một người dân vớt được quả lạ đem dâng vua. Vua hối hận cho đón vợ chồng An Tiêm trở về.\n\nThứ quả lạ đó là giống dưa hấu ngày nay.',
  ]);
  assert.equal(maiAnTiem.questions.length, 16);
  assert.equal(maiAnTiem.readingPassage?.audioNarration, [maiAnTiem.readingPassage?.title, ...maiAnTiem.readingPassage?.content].join('\n'));

  const thuGuiBoNgoaiDao = verified.find((lesson) => lesson.id === 'tv-g2-t2-b22');
  assert.ok(thuGuiBoNgoaiDao, 'Bài 22 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(thuGuiBoNgoaiDao.title, 'Bài 22: Thư gửi bố ngoài đảo');
  assert.deepEqual(thuGuiBoNgoaiDao.sourceCitation.sourcePages, [95, 96, 97, 98, 99]);
  assert.deepEqual(thuGuiBoNgoaiDao.readingPassage?.content, [
    'Bây giờ sắp Tết rồi\nCon viết thư gửi bố (...)\n\nTết con muốn gửi bố\nCái bánh chưng cho vui\nNhưng bánh thì to quá\nMà hòm thư nhỏ thôi.',
    'Gửi hoa lại sợ héo\nĐường ra đảo xa xôi\nCon viết thư gửi vậy\nHẳn bố bằng lòng thôi.',
    'Ngoài ấy chắc nhiều gió\nĐảo không có gì che\nNgoài ấy chắc nhiều sóng\nBố lúc nào cũng nghe.',
    'Bà bảo: hàng rào biển\nLà bố đấy, bố ơi\nCùng các chú bạn bố\nGiữ đảo và giữ trời.',
  ]);
  assert.equal(thuGuiBoNgoaiDao.questions.length, 23);
  assert.equal(thuGuiBoNgoaiDao.readingPassage?.audioNarration, [thuGuiBoNgoaiDao.readingPassage?.title, ...thuGuiBoNgoaiDao.readingPassage?.content].join('\n'));

  const bopNatQuaCam = verified.find((lesson) => lesson.id === 'tv-g2-t2-b23');
  assert.ok(bopNatQuaCam, 'Bài 23 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(bopNatQuaCam.title, 'Bài 23: Bóp nát quả cam');
  assert.deepEqual(bopNatQuaCam.sourceCitation.sourcePages, [100, 101, 102, 103]);
  assert.deepEqual(bopNatQuaCam.readingPassage?.content, [
    'Giặc Nguyên cho sứ thần sang giả vờ mượn đường để xâm chiếm nước ta. Thấy sứ giặc ngang ngược, Trần Quốc Toản vô cùng căm giận.\n\nBiết vua họp bàn việc nước dưới thuyền rồng, Quốc Toản muốn được gặp để xin vua quyết đánh. Đợi mãi không gặp được vua, cậu liều chết xô mấy người lính gác, xăm xăm xuống bến.\n\nGặp vua, Quốc Toản quỳ xuống tâu:\n– Cho giặc mượn đường là mất nước. Xin bệ hạ cho đánh!\nNói xong, cậu tự đặt thanh gươm lên gáy, xin chịu tội.',
    'Vua cho Quốc Toản đứng dậy, ôn tồn bảo:\n– Quốc Toản làm trái phép nước, lẽ ra phải trị tội. Nhưng còn trẻ mà đã biết lo việc nước, ta có lời khen.\n\nNói rồi, vua ban cho Quốc Toản một quả cam.\n\nQuốc Toản ấm ức bước lên bờ: “Vua ban cho cam quý nhưng xem ta như trẻ con, không cho dự bàn việc nước.” Nghĩ đến quân giặc ngang ngược, cậu nghiến răng, hai bàn tay bóp chặt.\n\nKhi trở ra, Quốc Toản xoè tay cho mọi người xem cam quý. Nhưng quả cam đã nát từ bao giờ.',
  ]);
  assert.equal(bopNatQuaCam.questions.length, 16);
  assert.equal(bopNatQuaCam.readingPassage?.audioNarration, [bopNatQuaCam.readingPassage?.title, ...bopNatQuaCam.readingPassage?.content].join('\n'));

  const chiecReDaTron = verified.find((lesson) => lesson.id === 'tv-g2-t2-b24');
  assert.ok(chiecReDaTron, 'Bài 24 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(chiecReDaTron.title, 'Bài 24: Chiếc rễ đa tròn');
  assert.deepEqual(chiecReDaTron.sourceCitation.sourcePages, [104, 105, 106, 107, 108]);
  assert.deepEqual(chiecReDaTron.readingPassage?.content, [
    'Một sớm hôm ấy, như thường lệ, Bác Hồ đi dạo trong vườn. Đến gần cây đa, Bác chợt thấy một chiếc rễ đa nhỏ và dài ngoằn ngoèo trên mặt đất. Chắc là trận gió đêm qua đã làm nó rơi xuống. Bác tần ngần một lát, rồi nói với chú cần vụ:\n– Chú cuốn chiếc rễ này lại, rồi trồng cho nó mọc tiếp nhé!\nTheo lời Bác, chú cần vụ xới đất, vùi chiếc rễ xuống. Thấy vậy, Bác ân cần bảo:\n– Chú nên làm thế này.',
    'Nói rồi, Bác cuộn chiếc rễ thành một vòng tròn, cùng chú cần vụ buộc nó tựa vào hai cái cọc, sau đó mới vùi hai đầu rễ xuống đất.\n\nChú cần vụ thắc mắc:\n– Thưa Bác, Bác làm thế để làm gì ạ?\nBác khẽ cười:\n– Rồi chú sẽ biết.\n\nNhiều năm sau, chiếc rễ đã lớn và thành cây đa con có vòng lá tròn. Thiếu nhi vào thăm vườn Bác, em nào cũng thích chơi trò chui qua chui lại vòng lá ấy. Lúc đó, mọi người mới hiểu vì sao Bác cho trồng chiếc rễ đa thành hình tròn như thế.',
  ]);
  assert.equal(chiecReDaTron.questions.length, 22);
  assert.equal(chiecReDaTron.readingPassage?.audioNarration, [chiecReDaTron.readingPassage?.title, ...chiecReDaTron.readingPassage?.content].join('\n'));

  const datNuocChungMinh = verified.find((lesson) => lesson.id === 'tv-g2-t2-b25');
  assert.ok(datNuocChungMinh, 'Bài 25 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(datNuocChungMinh.title, 'Bài 25: Đất nước chúng mình');
  assert.deepEqual(datNuocChungMinh.sourceCitation.sourcePages, [110, 111, 112]);
  assert.deepEqual(datNuocChungMinh.readingPassage?.content, [
    'Việt Nam là đất nước tươi đẹp của chúng mình. Thủ đô nước mình là Hà Nội. Lá cờ Tổ quốc hình chữ nhật, nền đỏ, ở giữa có ngôi sao vàng năm cánh.\n\nViệt Nam có những vị anh hùng có công lớn với đất nước như Hai Bà Trưng, Bà Triệu, Trần Hưng Đạo, Quang Trung, Hồ Chí Minh,... Những con người ấy đã làm rạng danh lịch sử nước nhà.',
    'Đất nước mình có ba miền Bắc, Trung, Nam với khí hậu khác nhau. Miền Bắc một năm có bốn mùa: xuân, hạ, thu, đông. Miền Nam có hai mùa: mùa mưa và mùa khô. Miền Trung có nơi giống miền Bắc, có nơi giống miền Nam.\n\nTrang phục truyền thống của người Việt Nam là áo dài. Áo dài thường được mặc trong dịp Tết hoặc lễ hội.',
  ]);
  assert.equal(datNuocChungMinh.questions.length, 15);
  assert.equal(datNuocChungMinh.readingPassage?.audioNarration, [datNuocChungMinh.readingPassage?.title, ...datNuocChungMinh.readingPassage?.content].join('\n'));

  const trenCacMienDatNuoc = verified.find((lesson) => lesson.id === 'tv-g2-t2-b26');
  assert.ok(trenCacMienDatNuoc, 'Bài 26 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(trenCacMienDatNuoc.title, 'Bài 26: Trên các miền đất nước');
  assert.deepEqual(trenCacMienDatNuoc.sourceCitation.sourcePages, [113, 114, 115, 116, 117, 118]);
  assert.deepEqual(trenCacMienDatNuoc.readingPassage?.content, [
    'Đất nước Việt Nam thật tươi đẹp. Hãy cùng nhau đi thăm các miền đất nước qua những câu ca dao.\n\nĐầu tiên, chúng ta sẽ đến Phú Thọ, miền Bắc nước ta, nơi có đền thờ Vua Hùng, nơi được gọi là “quê cha đất tổ”:\n\nDù ai đi ngược về xuôi\nNhớ ngày Giỗ Tổ mùng Mười tháng Ba.\n\nTiếp đến, chúng ta cùng vào miền Trung:\n\nĐường vô xứ Nghệ quanh quanh\nNon xanh nước biếc như tranh hoạ đồ.',
    'Và chúng ta cùng khám phá miền đất Nam Bộ:\n\nĐồng Tháp Mười cò bay thẳng cánh\nNước Tháp Mười lóng lánh cá tôm.\n\nVậy là chúng ta đã đi qua ba miền Bắc, Trung, Nam của đất nước. Nơi nào cũng để lại biết bao tình cảm mến thương.',
  ]);
  assert.equal(trenCacMienDatNuoc.questions.length, 25);
  assert.equal(trenCacMienDatNuoc.readingPassage?.audioNarration, [trenCacMienDatNuoc.readingPassage?.title, ...trenCacMienDatNuoc.readingPassage?.content].join('\n'));

  const chuyenQuaBau = verified.find((lesson) => lesson.id === 'tv-g2-t2-b27');
  assert.ok(chuyenQuaBau, 'Bài 27 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(chuyenQuaBau.title, 'Bài 27: Chuyện quả bầu');
  assert.deepEqual(chuyenQuaBau.sourceCitation.sourcePages, [119, 120, 121]);
  assert.deepEqual(chuyenQuaBau.readingPassage?.content, [
    'Ngày xưa có vợ chồng nọ đi rừng, bắt được một con dúi. Dúi xin tha, họ thương tình tha cho nó.\n\nĐể trả ơn, dúi báo sắp có lũ lụt rất lớn và chỉ cho họ cách tránh. Họ nói với bà con nhưng chẳng ai tin. Nghe lời dúi, họ khoét rỗng khúc gỗ to, chuẩn bị thức ăn bỏ vào đó. Vừa chuẩn bị xong mọi thứ thì mưa to, gió lớn, nước ngập mênh mông. Muôn loài chim trong rừng chết. Nhờ sống trong khúc gỗ nổi, vợ chồng nhà nọ thoát nạn.',
    'Ít lâu sau, người vợ sinh ra một quả bầu.\n\nMột hôm, đi làm nương về, họ nghe tiếng cười đùa từ góc bếp để quả bầu. Thấy lạ, họ lấy quả bầu xuống, áp tai nghe thì có tiếng lao xao. Người vợ bèn lấy que dùi quả bầu. Lạ thay, từ trong quả bầu, những con người bé nhỏ bước ra. Người Khơ Mú ra trước. Tiếp đến, người Thái, người Mường, người Dao, người Mông, người Ê-đê, người Ba-na, người Kinh,... lần lượt ra theo.\n\nĐó là tổ tiên của các dân tộc anh em trên đất nước ta ngày nay.',
  ]);
  assert.equal(chuyenQuaBau.questions.length, 16);
  assert.equal(chuyenQuaBau.readingPassage?.audioNarration, [chuyenQuaBau.readingPassage?.title, ...chuyenQuaBau.readingPassage?.content].join('\n'));

  const khamPhaDayBien = verified.find((lesson) => lesson.id === 'tv-g2-t2-b28');
  assert.ok(khamPhaDayBien, 'Bài 28 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(khamPhaDayBien.title, 'Bài 28: Khám phá đáy biển ở Trường Sa');
  assert.deepEqual(khamPhaDayBien.sourceCitation.sourcePages, [122, 123, 124, 125]);
  assert.deepEqual(khamPhaDayBien.readingPassage?.content, [
    'Nhắc đến Trường Sa, ngoài các đảo, người ta nhắc đến biển. Mà biển thì có muôn vàn điều kì thú. Thám hiểm đáy biển ở Trường Sa của nước ta sẽ thấy bao điều thú vị.\n\nBiển ở Trường Sa có những loài cá đẹp rực rỡ và lạ mắt. Từng đàn cá đủ màu sắc, dày đặc đến hàng trăm con tạo nên một tấm thảm hoa di động. Những vỉa san hô chạy dài từ chân mỗi đảo xuống sâu dần dưới đáy biển. San hô làm cho đáy biển trông như một bức tranh khổng lồ, đẹp như những toà lâu đài trong truyện cổ tích.\n\nTrường Sa là vùng biển thân yêu của Tổ quốc, có cảnh đẹp kì thú và hàng nghìn loài vật sống dưới biển.',
  ]);
  assert.equal(khamPhaDayBien.questions.length, 22);
  assert.equal(khamPhaDayBien.readingPassage?.audioNarration, [khamPhaDayBien.readingPassage?.title, ...khamPhaDayBien.readingPassage?.content].join('\n'));

  const hoGuom = verified.find((lesson) => lesson.id === 'tv-g2-t2-b29');
  assert.ok(hoGuom, 'Bài 29 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(hoGuom.title, 'Bài 29: Hồ Gươm');
  assert.deepEqual(hoGuom.sourceCitation.sourcePages, [126, 127, 128]);
  assert.deepEqual(hoGuom.readingPassage?.content, [
    'Nhà tôi ở Hà Nội, cách Hồ Gươm không xa. Từ trên cao nhìn xuống, mặt hồ như một chiếc gương bầu dục lớn, sáng long lanh.\n\nCầu Thê Húc màu son, cong cong như con tôm, dẫn vào đền Ngọc Sơn. Mái đền lấp ló bên gốc đa già, rễ lá xum xuê. Xa một chút là Tháp Rùa, tường rêu cổ kính. Tháp xây trên gò đất giữa hồ, cỏ mọc xanh um.\n\nCó buổi, người ta thấy có con rùa lớn, đầu to như trái bưởi, nhô lên khỏi mặt nước. Rùa như lắng nghe tiếng chuông đồng hồ trên tầng cao nhà bưu điện, buông từng tiếng ngân nga trong gió. Tôi thầm nghĩ: không biết có phải rùa đã từng ngậm thanh kiếm của vua Lê thắng giặc đó không?',
  ]);
  assert.equal(hoGuom.questions.length, 12);
  assert.equal(hoGuom.readingPassage?.audioNarration, [hoGuom.readingPassage?.title, ...hoGuom.readingPassage?.content].join('\n'));

  const canhDongQueEm = verified.find((lesson) => lesson.id === 'tv-g2-t2-b30');
  assert.ok(canhDongQueEm, 'Bài 30 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(canhDongQueEm.title, 'Bài 30: Cánh đồng quê em');
  assert.deepEqual(canhDongQueEm.sourceCitation.sourcePages, [129, 130, 131, 132]);
  assert.deepEqual(canhDongQueEm.readingPassage?.content, [
    'Bé theo mẹ ra đồng\nVầng dương lên rực đỏ\nMuôn vàn kim cương nhỏ\nLấp lánh ngọn cỏ hoa.\n\nNắng ban mai hiền hoà\nTung lụa tơ vàng óng\nTrải lên muôn con sóng\nDập dờn đồng lúa xanh.\n\nĐàn chiền chiện bay quanh\nHót tích ri tích rích\nLũ châu chấu tinh nghịch\nĐu cổ uống sương rơi.\n\nSóng xanh cuộn chân trời\nCánh đồng như tranh vẽ\nBé ngân nga hát khẽ\nTrong hương lúa mênh mông.',
  ]);
  assert.equal(canhDongQueEm.questions.length, 21);
  assert.equal(canhDongQueEm.readingPassage?.audioNarration, [canhDongQueEm.readingPassage?.title, ...canhDongQueEm.readingPassage?.content].join('\n'));

  const chuAa = verified.find((lesson) => lesson.id === 'tv-g1-b1');
  assert.ok(chuAa, 'Bài 1 lớp 1 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(chuAa.title, 'Bài 1: A a');
  assert.deepEqual(chuAa.sourceCitation.sourcePages, [14, 15]);
  assert.deepEqual(chuAa.readingPassage?.content, ['Nam và Hà ca hát.', 'a']);
  assert.equal(chuAa.questions.length, 5);
  assert.equal(chuAa.readingPassage?.audioNarration, [chuAa.readingPassage?.title, ...chuAa.readingPassage?.content].join('\n'));

  const chuBb = verified.find((lesson) => lesson.id === 'tv-g1-b2');
  assert.ok(chuBb, 'Bài 2 lớp 1 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(chuBb.title, 'Bài 2: B b');
  assert.deepEqual(chuBb.sourceCitation.sourcePages, [16, 17]);
  assert.deepEqual(chuBb.readingPassage?.content, ['Bà cho bé búp bê.', 'b', 'ba', 'bà', 'ba ba', 'A, bà.']);
  assert.equal(chuBb.questions.length, 5);
  assert.equal(chuBb.readingPassage?.audioNarration, [chuBb.readingPassage?.title, ...chuBb.readingPassage?.content].join('\n'));

  const chuCc = verified.find((lesson) => lesson.id === 'tv-g1-b3');
  assert.ok(chuCc, 'Bài 3 lớp 1 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(chuCc.title, 'Bài 3: C c');
  assert.deepEqual(chuCc.sourceCitation.sourcePages, [18, 19]);
  assert.deepEqual(chuCc.readingPassage?.content, ['Nam và bố câu cá.', 'c', 'ca', 'cà', 'cá', 'A, cá.']);
  assert.equal(chuCc.questions.length, 5);
  assert.equal(chuCc.readingPassage?.audioNarration, [chuCc.readingPassage?.title, ...chuCc.readingPassage?.content].join('\n'));

  const chuEe = verified.find((lesson) => lesson.id === 'tv-g1-b4');
  assert.ok(chuEe, 'Bài 4 lớp 1 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(chuEe.title, 'Bài 4: E e - Ê ê');
  assert.deepEqual(chuEe.sourceCitation.sourcePages, [20, 21]);
  assert.deepEqual(chuEe.readingPassage?.content, ['Bé kể mẹ nghe về bạn bè.', 'e', 'ê', 'be', 'bê', 'bè', 'bé', 'bế', 'Bà bế bé.']);
  assert.equal(chuEe.questions.length, 5);
  assert.equal(chuEe.readingPassage?.audioNarration, [chuEe.readingPassage?.title, ...chuEe.readingPassage?.content].join('\n'));

  const onTapKeChuyen = verified.find((lesson) => lesson.id === 'tv-g1-b5');
  assert.ok(onTapKeChuyen, 'Bài 5 lớp 1 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(onTapKeChuyen.title, 'Bài 5: Ôn tập và kể chuyện');
  assert.deepEqual(onTapKeChuyen.sourceCitation.sourcePages, [22, 23]);
  assert.deepEqual(onTapKeChuyen.readingPassage?.content, ['ba bà, be bé, cá bé, bè cá, bế bé.', 'Bà bế bé.', 'Búp bê và dế mèn']);
  assert.equal(onTapKeChuyen.questions.length, 5);
  assert.equal(onTapKeChuyen.readingPassage?.audioNarration, [onTapKeChuyen.readingPassage?.title, ...onTapKeChuyen.readingPassage?.content].join('\n'));

  const chuOo = verified.find((lesson) => lesson.id === 'tv-g1-b6');
  assert.ok(chuOo, 'Bài 6 lớp 1 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(chuOo.title, 'Bài 6: O o');
  assert.deepEqual(chuOo.sourceCitation.sourcePages, [24, 25]);
  assert.deepEqual(chuOo.readingPassage?.content, ['Đàn bò gặm cỏ.', 'o', 'bò', 'cỏ', 'bò, bố, bỏ, cỏ, có, cỏ.', 'Bê có cỏ.']);
  assert.equal(chuOo.questions.length, 5);
  assert.equal(chuOo.readingPassage?.audioNarration, [chuOo.readingPassage?.title, ...chuOo.readingPassage?.content].join('\n'));

  const chuOoMu = verified.find((lesson) => lesson.id === 'tv-g1-b7');
  assert.ok(chuOoMu, 'Bài 7 lớp 1 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(chuOoMu.title, 'Bài 7: Ô ô');
  assert.deepEqual(chuOoMu.sourceCitation.sourcePages, [26, 27]);
  assert.deepEqual(chuOoMu.readingPassage?.content, ['Bố và Hà đi bộ trên hè phố.', 'ô', 'bố', 'bộ', 'bố, bổ, bộ, cô, cổ, cộ.', 'Bố bê bể cá.']);
  assert.equal(chuOoMu.questions.length, 5);
  assert.equal(chuOoMu.readingPassage?.audioNarration, [chuOoMu.readingPassage?.title, ...chuOoMu.readingPassage?.content].join('\n'));

  const chuDd = verified.find((lesson) => lesson.id === 'tv-g1-b8');
  assert.ok(chuDd, 'Bài 8 lớp 1 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(chuDd.title, 'Bài 8: D d - Đ đ');
  assert.deepEqual(chuDd.sourceCitation.sourcePages, [28, 29]);
  assert.deepEqual(chuDd.readingPassage?.content, ['Dưới gốc đa, các bạn chơi dung dăng dung dẻ.', 'd', 'đ', 'dê', 'đa', 'da, dẻ, dế, đá, đồ, đổ.', 'Bé có ô đỏ.']);
  assert.equal(chuDd.questions.length, 5);
  assert.equal(chuDd.readingPassage?.audioNarration, [chuDd.readingPassage?.title, ...chuDd.readingPassage?.content].join('\n'));

  const chuOoRo = verified.find((lesson) => lesson.id === 'tv-g1-b9');
  assert.ok(chuOoRo, 'Bài 9 lớp 1 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(chuOoRo.title, 'Bài 9: Ơ ơ');
  assert.deepEqual(chuOoRo.sourceCitation.sourcePages, [30, 31]);
  assert.deepEqual(chuOoRo.readingPassage?.content, ['Tàu dỡ hàng ở cảng.', 'ơ', 'bờ', 'dỡ', 'bờ, bở, cờ, cỡ, dỡ, đỡ.', 'bờ đê, cá cờ, đỡ bé.', 'Bố đỡ bé.']);
  assert.equal(chuOoRo.questions.length, 5);
  assert.equal(chuOoRo.readingPassage?.audioNarration, [chuOoRo.readingPassage?.title, ...chuOoRo.readingPassage?.content].join('\n'));

  const onTapO = verified.find((lesson) => lesson.id === 'tv-g1-b10');
  assert.ok(onTapO, 'Bài 10 lớp 1 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(onTapO.title, 'Bài 10: Ôn tập và kể chuyện');
  assert.deepEqual(onTapO.sourceCitation.sourcePages, [32, 33]);
  assert.deepEqual(onTapO.readingPassage?.content, ['o, ô, ơ, d, đ, do.', 'cỏ cờ, bó cỏ, đỡ bà, bờ đê, cờ đỏ, đồ đỏ, đỡ bé.', 'Bờ đê có dê.', 'Bà có đồ đỏ.', 'Đàn kiến con ngoan ngoãn']);
  assert.equal(onTapO.questions.length, 6);
  assert.equal(onTapO.readingPassage?.audioNarration, [onTapO.readingPassage?.title, ...onTapO.readingPassage?.content].join('\n'));

  const chuIiKk = verified.find((lesson) => lesson.id === 'tv-g1-b11');
  assert.ok(chuIiKk, 'Bài 11 lớp 1 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(chuIiKk.title, 'Bài 11: I i - K k');
  assert.deepEqual(chuIiKk.sourceCitation.sourcePages, [34, 35]);
  assert.deepEqual(chuIiKk.readingPassage?.content, ['Nam vẽ kì đà.', 'i', 'k', 'ki', 'kì', 'kè, kẻ, kẹ, kì, kỉ.', 'bí đỏ, kẻ ô, đi đò, kì đà.', 'Kì đà bò ở kẽ đá.']);
  assert.equal(chuIiKk.questions.length, 5);
  assert.equal(chuIiKk.readingPassage?.audioNarration, [chuIiKk.readingPassage?.title, ...chuIiKk.readingPassage?.content].join('\n'));

  const chuHhLl = verified.find((lesson) => lesson.id === 'tv-g1-b12');
  assert.ok(chuHhLl, 'Bài 12 lớp 1 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(chuHhLl.title, 'Bài 12: H h - L l');
  assert.deepEqual(chuHhLl.sourceCitation.sourcePages, [36, 37]);
  assert.deepEqual(chuHhLl.readingPassage?.content, ['Le le bơi trên hồ.', 'h', 'l', 'hồ', 'le', 'hè, họ, hổ, li, lọ, lỡ.', 'lá đỏ, bờ hồ, cá hố, le le.', 'Bé bị ho. Bà đã có lá hẹ.']);
  assert.equal(chuHhLl.questions.length, 5);
  assert.equal(chuHhLl.readingPassage?.audioNarration, [chuHhLl.readingPassage?.title, ...chuHhLl.readingPassage?.content].join('\n'));

  const chuUuUu = verified.find((lesson) => lesson.id === 'tv-g1-b13');
  assert.ok(chuUuUu, 'Bài 13 lớp 1 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(chuUuUu.title, 'Bài 13: U u - Ư ư');
  assert.deepEqual(chuUuUu.sourceCitation.sourcePages, [38, 39]);
  assert.deepEqual(chuUuUu.readingPassage?.content, ['Đu đủ chín ngọt lừ.', 'u', 'ư', 'đủ', 'lữ', 'dù, đủ, hũ, cữ, dự, lữ.', 'dù, đu đủ, hổ dữ.', 'Cá hổ là cá dữ.']);
  assert.equal(chuUuUu.questions.length, 5);
  assert.equal(chuUuUu.readingPassage?.audioNarration, [chuUuUu.readingPassage?.title, ...chuUuUu.readingPassage?.content].join('\n'));

  const chuChchKhkh = verified.find((lesson) => lesson.id === 'tv-g1-b14');
  assert.ok(chuChchKhkh, 'Bài 14 lớp 1 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(chuChchKhkh.title, 'Bài 14: Ch ch - Kh kh');
  assert.deepEqual(chuChchKhkh.sourceCitation.sourcePages, [40, 41]);
  assert.deepEqual(chuChchKhkh.readingPassage?.content, ['Mấy chú khỉ ăn chuối.', 'ch', 'kh', 'chú', 'khỉ', 'chè, chỉ, chợ, khế, kho, khô.', 'lá khô, chú khỉ, chợ cá.', 'Chị có cá kho khế.']);
  assert.equal(chuChchKhkh.questions.length, 5);
  assert.equal(chuChchKhkh.readingPassage?.audioNarration, [chuChchKhkh.readingPassage?.title, ...chuChchKhkh.readingPassage?.content].join('\n'));

  const onTapChKh = verified.find((lesson) => lesson.id === 'tv-g1-b15');
  assert.ok(onTapChKh, 'Bài 15 lớp 1 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(onTapChKh.title, 'Bài 15: Ôn tập và kể chuyện');
  assert.deepEqual(onTapChKh.sourceCitation.sourcePages, [42, 43]);
  assert.deepEqual(onTapChKh.readingPassage?.content, ['e, ê, i, u, ư; k, h, l, ch, kh; ke.', 'chú hề, chợ cá, chè ô, lá khô, bờ hồ, cá dữ, lá hẹ.', 'Chị cho bé cá cờ.', 'Dì Kha cho Hà đi chợ.', 'cá kho khế', 'Con quạ thông minh']);
  assert.equal(onTapChKh.questions.length, 6);
  assert.equal(onTapChKh.readingPassage?.audioNarration, [onTapChKh.readingPassage?.title, ...onTapChKh.readingPassage?.content].join('\n'));

  const chuMmNn = verified.find((lesson) => lesson.id === 'tv-g1-b16');
  assert.ok(chuMmNn, 'Bài 16 lớp 1 chưa được phát hành sau khi đối chiếu trang nguồn');
  assert.equal(chuMmNn.title, 'Bài 16: M m - N n');
  assert.deepEqual(chuMmNn.sourceCitation.sourcePages, [44, 45]);
  assert.deepEqual(chuMmNn.readingPassage?.content, ['Mẹ mua nơ cho Hà.', 'm', 'n', 'mẹ', 'nơ', 'má, mẹ, mỡ, na, nê, nở.', 'cá mè, lá me, nơ đỏ, ca nô.', 'Bố mẹ cho Hà đi ca nô.']);
  assert.equal(chuMmNn.questions.length, 5);
  assert.equal(chuMmNn.readingPassage?.audioNarration, [chuMmNn.readingPassage?.title, ...chuMmNn.readingPassage?.content].join('\n'));
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
