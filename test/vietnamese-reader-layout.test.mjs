import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

const readerSource = await readFile('src/components/exercise/InteractiveExerciseEngine.tsx', 'utf8');

test('trình đọc SGK ưu tiên diện tích cho cột nội dung và không làm rộng ảnh trang', () => {
  assert.match(
    readerSource,
    /xl:grid-cols-\[minmax\(0,0\.8fr\)_minmax\(0,1\.2fr\)\]/,
    'Cột trang SGK phải hẹp hơn để cột văn bản rộng hơn',
  );
  assert.match(
    readerSource,
    /className="h-full w-auto max-w-full object-contain"/,
    'Ảnh trang phải theo đúng tỷ lệ giấy, không kéo giãn hết chiều ngang',
  );
});

test('hai cột SGK thẳng mép trên, không chèn băng giấy trang trí trên cột bài đọc', () => {
  const fullReadingSection = readerSource
    .split('/* TAB 1: ĐỌC TOÀN BÀI (FULL READING SCRAPBOOK CARD) */')[1]
    .split('/* TAB 2: CHẾ ĐỘ SHADOWING (LUYỆN NGHE & ĐỌC NHẠI TỪNG CÂU) */')[0];

  assert.match(
    fullReadingSection,
    /rounded-4xl bg-\[#fffdfa\] p-6 sm:p-10 shadow-washi border border-amber-200\/70">/,
    'Khung bài đọc không được có khoảng đẩy riêng ở phía trên',
  );
  assert.doesNotMatch(fullReadingSection, /Washi tape header deco/);
});

test('khi đang duyệt nội dung SGK vẫn hiện khu Đọc và Shadowing nhưng khóa audio cũ', () => {
  assert.match(readerSource, /canUseReadingPassage && <button/);
  assert.match(readerSource, /disabled=\{!canPlayReadingAudio\}/);
  assert.match(
    readerSource,
    /canUseReadingPassage && <div className="order-3 flex w-full sm:order-2 sm:w-auto sm:flex-1 sm:justify-center/,
  );
  assert.match(readerSource, /canPlayReadingAudio && isSpeechSupported && \(/);
});

test('bài đọc SGK không lặp nhãn nội dung ở đầu cột chữ', () => {
  const fullReadingSection = readerSource
    .split('/* TAB 1: ĐỌC TOÀN BÀI (FULL READING SCRAPBOOK CARD) */')[1]
    .split('/* TAB 2: CHẾ ĐỘ SHADOWING (LUYỆN NGHE & ĐỌC NHẠI TỪNG CÂU) */')[0];

  assert.doesNotMatch(fullReadingSection, /Nội dung bài đọc SGK/);
});

test('Shadowing xếp câu thành hai hàng, bỏ băng trang trí và viền nút thao tác', () => {
  const shadowingSection = readerSource
    .split('/* TAB 2: CHẾ ĐỘ SHADOWING (LUYỆN NGHE & ĐỌC NHẠI TỪNG CÂU) */')[1]
    .split('/* Bottom Call to Action: Start Comprehension Quiz */')[0];

  assert.doesNotMatch(shadowingSection, /Washi tape header deco/);
  assert.match(shadowingSection, /grid w-full grid-cols-4 gap-1\.5 sm:grid-cols-8/);
  assert.doesNotMatch(shadowingSection, /overflow-x-auto/);
  assert.doesNotMatch(shadowingSection, /min-w-\[200px\] border-2/);
  assert.doesNotMatch(shadowingSection, /border-2 border-purple-700 text-white/);
  assert.doesNotMatch(shadowingSection, /border-2 border-rose-700 text-white/);
});

test('nút Đọc và Shadowing nằm giữa thanh đầu trang, không chiếm một hàng riêng', () => {
  assert.match(
    readerSource,
    /order-3 flex w-full sm:order-2 sm:w-auto sm:flex-1 sm:justify-center/,
  );
  assert.doesNotMatch(readerSource, /Mode Switcher Tabs \(Đọc Toàn Bài vs Luyện Shadowing Từng Câu\)/);
});

test('nhãn Shadowing ở thanh đầu trang không bị ngắt thành hai dòng', () => {
  assert.match(readerSource, /<span className="whitespace-nowrap">Luyện Shadowing<\/span>/);
});
