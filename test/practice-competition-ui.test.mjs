import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { randomBytes } from 'node:crypto';
import { join } from 'node:path';
import { rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { build } from 'esbuild';
import { getCompetitionPacks } from '../src/data/practice/index.ts';

const outdir = join(process.cwd(), '.cache', `wonderkids-competition-ui-${randomBytes(6).toString('hex')}`);
let uiModule;
let buildError;
try {
  await build({
    entryPoints: ['src/components/practice/PracticePortal.tsx'],
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'node20',
    outdir,
    entryNames: '[name]',
    write: true,
    packages: 'external',
    logLevel: 'silent',
  });
  uiModule = await import(pathToFileURL(join(outdir, 'PracticePortal.js')).href);
} catch (error) {
  buildError = error;
}

after(async () => rm(outdir, { recursive: true, force: true }));

function render(route) {
  assert.ifError(buildError);
  return renderToStaticMarkup(React.createElement(uiModule.PracticePortal, {
    route,
    onNavigate() {},
    onBack() {},
    onReward() {},
  }));
}

test('hub có bộ lọc IOE và Trạng Nguyên nhưng chưa trộn thẻ vào Violympic mặc định', () => {
  const html = render({ kind: 'practice-hub' });
  assert.match(html, />IOE</u);
  assert.match(html, />Trạng Nguyên</u);
  assert.doesNotMatch(html, /IOE \| Tiếng Anh/u);
  assert.doesNotMatch(html, /Trạng Nguyên Tiếng Việt/u);
});

test('danh sách IOE một lớp có đủ 12 đề và cảnh báo mô phỏng', () => {
  const html = render({ kind: 'practice-competition-list', track: 'ioe_simulation', grade: 2 });
  assert.equal((html.match(/data-practice-set-card=/gu) || []).length, 12);
  assert.match(html, /IOE/u);
  assert.match(html, /100 câu/u);
});

test('câu nghe IOE có nút loa, tốc độ và không lộ transcript trước khi nộp', () => {
  const html = render({ kind: 'practice-competition-set', track: 'ioe_simulation', grade: 1, setNumber: 1, questionNumber: 5 });
  assert.match(html, /data-practice-audio-player/u);
  assert.match(html, /Nghe câu hỏi/u);
  assert.match(html, /0.8x/u);
  assert.doesNotMatch(html, /data-audio-transcript/u);
  assert.match(html, /Câu 5\/30/u);
});

test('đề IOE thi thử hiện giới hạn hai lượt và tổng 200 câu ở lớp 5', () => {
  const html = render({ kind: 'practice-competition-set', track: 'ioe_simulation', grade: 5, setNumber: 12, questionNumber: 5 });
  assert.match(html, /Tối đa 2 lượt nghe/u);
  assert.match(html, /Câu 5\/200/u);
  assert.doesNotMatch(html, /0.8x/u);
});

test('Trạng Nguyên không render trình phát audio và có 30 phút', () => {
  const html = render({ kind: 'practice-competition-set', track: 'trang_nguyen_simulation', grade: 3, setNumber: 1 });
  assert.doesNotMatch(html, /data-practice-audio-player/u);
  assert.match(html, /30:00/u);
  assert.match(html, /Nội dung luyện tập tự biên soạn/u);
});

test('DOM của toàn bộ 4.900 hoạt động khôi phục đúng câu và không có dữ liệu rác', () => {
  let checked = 0;
  for (const pack of getCompetitionPacks()) {
    for (const set of pack.sets) {
      const items = set.sections.flatMap((section) => section.items);
      for (let index = 0; index < items.length; index += 1) {
        const html = render({
          kind: 'practice-competition-set', track: pack.track, grade: pack.grade,
          setNumber: set.setNumber, questionNumber: index + 1,
        });
        assert.match(html, new RegExp(`data-practice-item-id="${items[index].id}"`), items[index].id);
        assert.match(html, new RegExp(`Câu ${index + 1}/${items.length}`), items[index].id);
        assert.doesNotMatch(html, /undefined|\bNaN\b|\[object Object\]/u, items[index].id);
        checked += 1;
      }
    }
  }
  assert.equal(checked, 4_900);
});
