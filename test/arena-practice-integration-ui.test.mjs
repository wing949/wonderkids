import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { randomBytes } from 'node:crypto';
import { join } from 'node:path';
import { rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import React from 'react';
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { renderToStaticMarkup } from 'react-dom/server';
import { JSDOM } from 'jsdom';
import { build } from 'esbuild';

const outdir = join(process.cwd(), '.cache', `wonderkids-shared-arena-${randomBytes(6).toString('hex')}`);
let modules;
let buildError;
try {
  await build({
    entryPoints: [
      'src/components/practice/PracticePortal.tsx',
    ],
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
  modules = {
    practice: await import(pathToFileURL(join(outdir, 'PracticePortal.js')).href),
  };
} catch (error) {
  buildError = error;
}

after(async () => rm(outdir, { recursive: true, force: true }));

test('Kho luyện đề có đủ bộ lọc cuộc thi, lớp, môn, chủ đề, mức độ và số câu', () => {
  assert.ifError(buildError);
  const html = renderToStaticMarkup(React.createElement(modules.practice.PracticePortal, {
    route: { kind: 'practice-hub' }, onNavigate() {}, onBack() {}, onReward() {},
  }));
  for (const label of ['Cuộc thi', 'Khối lớp', 'Môn học', 'Chủ đề', 'Mức độ', 'Số câu']) {
    assert.match(html, new RegExp(label, 'u'));
  }
  assert.match(html, /Violympic/u);
  assert.match(html, /IOE/u);
  assert.match(html, /Trạng Nguyên/u);
  assert.match(html, /Bắt đầu luyện/u);
  assert.match(html, /Luyện tập/u);
  assert.match(html, /Thi thử \/ Thi đấu/u);
  assert.doesNotMatch(html, /Tạo lượt luyện riêng cho bé/u);
  assert.doesNotMatch(html, /Bộ lọc Kho luyện đề/u);
  const document = new JSDOM(html).window.document;
  const modeNavigation = document.querySelector('nav[aria-label="Chọn chế độ luyện đề hoặc thi đấu"]');
  const sharedSection = modeNavigation?.closest('section');
  assert.ok(sharedSection, 'Thanh chuyển chế độ phải nằm trong cùng section với bộ lọc');
  assert.ok(sharedSection.querySelector('select[aria-label="Môn học"]'));
  assert.doesNotMatch(sharedSection.textContent, /Chọn nội dung cần luyện/u);
  assert.doesNotMatch(sharedSection.textContent, /câu phù hợp với bộ lọc hiện tại/u);
  const startButton = [...sharedSection.querySelectorAll('button')].find((button) => button.textContent.includes('Bắt đầu luyện'));
  assert.ok(startButton, 'Phải có nút Bắt đầu luyện');
  assert.equal(startButton.parentElement.querySelectorAll('select').length, 4, 'Nút bắt đầu phải cùng hàng với bốn bộ lọc');
  for (const control of [...startButton.parentElement.querySelectorAll('select'), startButton]) {
    assert.ok(control.classList.contains('h-12'), 'Bốn ô lọc và nút bắt đầu phải có cùng chiều cao 48px');
  }
  const trangNguyenButton = [...sharedSection.querySelectorAll('button')].find((button) => button.textContent.includes('Trạng Nguyên'));
  assert.ok(trangNguyenButton?.classList.contains('whitespace-nowrap'), 'Tên Trạng Nguyên phải luôn nằm trên một hàng');
});

test('nút quay lại của Luyện tập và Thi đấu dùng cùng một kiểu icon', () => {
  assert.ifError(buildError);
  const renderHub = (route) => renderToStaticMarkup(React.createElement(modules.practice.PracticePortal, {
    route, playerName: 'Bé An', currentGrade: 2, onNavigate() {}, onBack() {}, onReward() {},
  }));
  const practiceDocument = new JSDOM(renderHub({ kind: 'practice-hub' })).window.document;
  const arenaDocument = new JSDOM(renderHub({ kind: 'practice-hub', mode: 'arena' })).window.document;
  const practiceBack = practiceDocument.querySelector('button[aria-label="Về trang chủ"]');
  const arenaBack = arenaDocument.querySelector('button[aria-label="Về trang chủ"]');
  assert.ok(practiceBack);
  assert.ok(arenaBack);
  assert.equal(practiceBack.className, arenaBack.className);
  assert.equal(practiceBack.textContent.trim(), '');
  assert.equal(arenaBack.textContent.trim(), '');
});

test('chọn cuộc thi cập nhật môn học và chỉ hiển thị thẻ đề thuộc cuộc thi đó', async () => {
  assert.ifError(buildError);
  const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
    url: 'http://localhost/luyen-de',
    pretendToBeVisual: true,
  });
  const previousGlobals = {
    window: globalThis.window,
    document: globalThis.document,
    navigator: globalThis.navigator,
    HTMLElement: globalThis.HTMLElement,
    SVGElement: globalThis.SVGElement,
    Audio: globalThis.Audio,
    actEnvironment: globalThis.IS_REACT_ACT_ENVIRONMENT,
  };

  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  Object.defineProperty(globalThis, 'navigator', { configurable: true, value: dom.window.navigator });
  globalThis.HTMLElement = dom.window.HTMLElement;
  globalThis.SVGElement = dom.window.SVGElement;
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  globalThis.Audio = class {
    play() { return Promise.resolve(); }
    pause() {}
  };

  const host = document.querySelector('#root');
  const root = createRoot(host);
  try {
    await act(async () => {
      root.render(React.createElement(modules.practice.PracticePortal, {
        route: { kind: 'practice-hub' }, onNavigate() {}, onBack() {}, onReward() {},
      }));
    });

    const suggestionGrid = host.querySelector('section[aria-label="Bộ đề phù hợp với bộ lọc"]');
    assert.ok(suggestionGrid, 'Phải có vùng thẻ phản ánh bộ lọc cuộc thi');
    assert.equal(suggestionGrid.querySelectorAll('article').length, 4, 'Violympic phải hiện bốn môn');

    const ioeButton = [...host.querySelectorAll('button')]
      .find((button) => button.textContent.trim() === '🌍IOE');
    assert.ok(ioeButton);
    await act(async () => ioeButton.click());

    assert.equal(host.querySelector('select[aria-label="Môn học"]').value, 'english');
    assert.equal(suggestionGrid.querySelectorAll('article').length, 1, 'IOE chỉ hiện thẻ Tiếng Anh IOE');
    assert.match(suggestionGrid.textContent, /IOE \| Tiếng Anh/u);
    assert.doesNotMatch(suggestionGrid.textContent, /Toán Học/u);

    const trangNguyenButton = [...host.querySelectorAll('button')]
      .find((button) => button.textContent.includes('Trạng Nguyên'));
    assert.ok(trangNguyenButton);
    await act(async () => trangNguyenButton.click());

    assert.equal(host.querySelector('select[aria-label="Môn học"]').value, 'vietnamese');
    assert.equal(suggestionGrid.querySelectorAll('article').length, 1, 'Trạng Nguyên chỉ hiện thẻ Tiếng Việt Trạng Nguyên');
    assert.match(suggestionGrid.textContent, /Trạng Nguyên Tiếng Việt/u);
    assert.doesNotMatch(suggestionGrid.textContent, /IOE \| Tiếng Anh/u);
  } finally {
    await act(async () => root.unmount());
    dom.window.close();
    globalThis.window = previousGlobals.window;
    globalThis.document = previousGlobals.document;
    Object.defineProperty(globalThis, 'navigator', { configurable: true, value: previousGlobals.navigator });
    globalThis.HTMLElement = previousGlobals.HTMLElement;
    globalThis.SVGElement = previousGlobals.SVGElement;
    globalThis.Audio = previousGlobals.Audio;
    globalThis.IS_REACT_ACT_ENVIRONMENT = previousGlobals.actEnvironment;
  }
});

test('chế độ Đấu trường nằm trong cùng cổng Luyện đề và không còn màn 5 câu viết cứng', () => {
  assert.ifError(buildError);
  const html = renderToStaticMarkup(React.createElement(modules.practice.PracticePortal, {
    route: { kind: 'practice-hub', mode: 'arena' },
    playerName: 'Bé An', currentGrade: 2, onNavigate() {}, onBack() {}, onReward() {},
  }));
  assert.match(html, /Luyện tập/u);
  assert.match(html, /Thi thử \/ Thi đấu/u);
  assert.match(html, /Đấu Trường Trí Tuệ/u);
  assert.match(html, /Violympic/u);
  assert.match(html, /IOE/u);
  assert.match(html, /Trạng Nguyên/u);
  assert.match(html, /30 phút/u);
  assert.match(html, /30 câu/u);
  assert.match(html, /Bảng xếp hạng/u);
  assert.doesNotMatch(html, /1\. Chọn cuộc thi mô phỏng/u);
  assert.doesNotMatch(html, /2\. Chọn cấu hình lượt thi/u);
  assert.doesNotMatch(html, /Câu 1\/5/u);
  assert.doesNotMatch(html, /ARENA_QUESTIONS/u);
  const document = new JSDOM(html).window.document;
  const modeNavigation = document.querySelector('nav[aria-label="Chọn chế độ luyện đề hoặc thi đấu"]');
  const sharedSection = modeNavigation?.closest('section');
  assert.ok(sharedSection, 'Thanh chuyển chế độ phải nằm trong cùng section với cấu hình thi đấu');
  assert.ok(sharedSection.querySelector('select[aria-label="Khối lớp thi"]'));
});
