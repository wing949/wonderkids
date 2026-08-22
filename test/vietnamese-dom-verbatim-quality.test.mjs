import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const outputDir = await mkdtemp(join(tmpdir(), 'wonderkids-vietnamese-dom-quality-'));
await build({
  entryPoints: ['src/data/curriculum/index.ts'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outfile: join(outputDir, 'curriculum.js'),
  write: true,
  logLevel: 'silent',
});

const curriculum = await import(pathToFileURL(join(outputDir, 'curriculum.js')).href);
const lessons = Object.keys(curriculum.VIETNAMESE_CURRICULUM_BY_GRADE)
  .flatMap((grade) => curriculum.getLessonsForGradeAndSubject(Number(grade), 'vietnamese'))
  .filter((lesson) => !(lesson.grade === 1 && lesson.semester === 1));

function normalizedText(content) {
  return (content || []).join('\n').replace(/\s+/gu, ' ').trim();
}

test('293 bài ngoài Tiếng Việt 1 Tập 1 có nội dung cột phải sạch', () => {
  assert.equal(lessons.length, 293);

  const forbidden = [
    /[¬_›‹ėÐ]/u,
    /[ÑƯ]{2,}/u,
    /(?:LUYỆN TỪ VÀ CÂU|NÓI VÀ NGHE|ĐỌC MỞ RỘNG|VẬN DỤNG)/iu,
    /(?:^|\n)\s*(?:Từ ngữ|Lời giải chi tiết|Hiển thị văn bản)\s*:?(?:\n|$)/iu,
    /(?:Bài đọc:|Tác giả:)/iu,
    /(?:KẾT NỐI TRI THỨC|VỚI CUỘC SỐNG)/iu,
  ];

  for (const lesson of lessons) {
    const text = lesson.readingPassage?.content.join('\n') || '';
    assert.ok(text.length >= 20, `Thiếu nội dung cột phải: ${lesson.id}`);
    for (const pattern of forbidden) {
      assert.equal(pattern.test(text), false, `Còn rác ${pattern} trong ${lesson.id}`);
    }
  }
});

test('293 bài không trùng nội dung và chỉ để trống tác giả ở văn bản chức năng', () => {
  const seen = new Map();
  const blankAuthors = [];

  for (const lesson of lessons) {
    const content = normalizedText(lesson.readingPassage?.content).toLocaleLowerCase('vi');
    assert.equal(seen.has(content), false, `Trùng nội dung ${lesson.id} với ${seen.get(content)}`);
    seen.set(content, lesson.id);
    if (!lesson.readingPassage?.author) blankAuthors.push(lesson.id);
  }

  assert.deepEqual(blankAuthors.sort(), ['tv-g2-b10', 'tv-g2-b12']);
});

test('Bài 2 lớp 2 hiển thị đúng nguyên văn trang 13', () => {
  const lesson = lessons.find((item) => item.id === 'tv-g2-b2');
  assert.deepEqual(lesson?.readingPassage?.content, [
    'Em cầm tờ lịch cũ:\n– Ngày hôm qua đâu rồi?\nRa ngoài sân hỏi bố\nXoa đầu em, bố cười.',
    '– Ngày hôm qua ở lại\nTrên cành hoa trong vườn\nNụ hồng lớn lên mãi\nĐợi đến ngày toả hương.',
    '– Ngày hôm qua ở lại\nTrong hạt lúa mẹ trồng\nCánh đồng chờ gặt hái\nChín vàng màu ước mong.',
    '– Ngày hôm qua ở lại\nTrong vở hồng của con\nCon học hành chăm chỉ\nLà ngày qua vẫn còn.',
  ]);
});

test('Bài 1 lớp 3 hiển thị đúng nguyên văn trang 10–11', () => {
  const lesson = lessons.find((item) => item.id === 'tv-g3-b1');
  const expected = [
    'Chi mở tung cửa sổ đón những tia nắng đầu thu. Thế là hết hè rồi. Ngày mai bắt đầu năm học mới.',
    'Có tiếng gọi ngoài cổng. Chi nhìn ra, thấy Sơn giơ chiếc diều rất xinh, vẫy rối rít:\n– Cho cậu này.',
    'Chi mừng rỡ chạy ra. Sơn về quê từ đầu hè, giờ gặp lại, hai bạn có bao nhiêu chuyện. Sơn kể ở quê, cậu được theo ông bà đi trồng rau, câu cá. Chiều chiều, cậu thường cùng bạn thả diều. Khi diều lên cao, cậu nằm lăn ra bãi cỏ ngắm trời. Cánh diều đứng im như ngủ thiếp đi trên bầu trời xanh.',
    'Nhìn Sơn đen nhẻm, mắt lấp lánh khi kể chuyện, Chi chợt thấy buồn:\n– Tớ chẳng được đi đâu.\n– Nhưng mẹ tớ bảo cậu biết đi xe đạp rồi.\n– Ừ, tớ ở nhà tập xe thôi.\n– Thế cậu được đạp xe đi khắp nơi mà.',
    'Chi cười:\n– Ừ nhỉ.\nThế là Chi kể bố dạy Chi đi xe đạp. Bây giờ, Chi đã đạp xe bon bon. Con đường quen thuộc bỗng trở nên mới mẻ.',
    'Cứ như vậy, hai bạn thi nhau kể những trải nghiệm mùa hè.\nNgày mai đi học rồi, nhưng mùa hè chắc sẽ theo các bạn vào lớp học.',
  ];
  assert.equal(normalizedText(lesson?.readingPassage?.content), normalizedText(expected));
});

test('tên bài được sửa đúng theo trang SGK', () => {
  assert.equal(
    lessons.find((item) => item.id === 'tv-g3-b21')?.readingPassage?.title,
    'Mặt trời xanh của tôi',
  );
  assert.equal(
    lessons.find((item) => item.id === 'tv-g4-b5')?.readingPassage?.title,
    'Thằn lằn xanh và tắc kè',
  );
});

test.after(async () => {
  await rm(outputDir, { recursive: true, force: true });
});
