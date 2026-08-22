import assert from 'node:assert/strict';
import { after, before, describe, it } from 'node:test';
import { build } from 'esbuild';
import { randomBytes } from 'node:crypto';
import { join } from 'node:path';
import { readFile, rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { JSDOM } from 'jsdom';

const tempDir = join(process.cwd(), `.tmp-mobile-performance-${randomBytes(6).toString('hex')}`);

await build({
  entryPoints: [
    'src/components/adventure/AdventureMap.tsx',
    'src/components/common/CuteDoodleBackground.tsx',
  ],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outdir: tempDir,
  entryNames: '[name]',
  external: ['react', 'react-dom', 'framer-motion'],
  write: true,
  logLevel: 'silent',
});

const { AdventureMap } = await import(pathToFileURL(join(tempDir, 'AdventureMap.js')).href);
const { CuteDoodleBackground } = await import(pathToFileURL(join(tempDir, 'CuteDoodleBackground.js')).href);

let dom;
let compactQueryMatches = false;
let reducedMotionQueryMatches = false;

before(() => {
  dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
    url: 'http://localhost/',
    pretendToBeVisual: true,
  });
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  Object.defineProperty(globalThis, 'navigator', {
    configurable: true,
    value: dom.window.navigator,
  });
  globalThis.HTMLElement = dom.window.HTMLElement;
  globalThis.SVGElement = dom.window.SVGElement;
  globalThis.getComputedStyle = dom.window.getComputedStyle;
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  dom.window.matchMedia = (query) => ({
    matches: query.includes('max-width') ? compactQueryMatches : reducedMotionQueryMatches,
    media: query,
    onchange: null,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
    dispatchEvent() { return true; },
  });
});

after(async () => {
  dom?.window.close();
  await rm(tempDir, { recursive: true, force: true });
});

describe('Mobile and iPad performance safeguards', () => {
  it('renders only the first 16 lesson cards and offers a large load-more control', async () => {
    const host = document.createElement('div');
    document.body.append(host);
    const root = createRoot(host);

    await act(async () => {
      root.render(React.createElement(AdventureMap, {
        currentGrade: 2,
        selectedSubject: 'vietnamese',
        onSelectSubject() {},
        onStartLesson() {},
        onBackToDashboard() {},
      }));
    });

    const lessonHeadings = [...host.querySelectorAll('main h3')]
      .filter((heading) => /^Bài\s+\d+:/u.test(heading.textContent || ''));
    assert.equal(lessonHeadings.length, 16);

    const loadMore = [...host.querySelectorAll('button')]
      .find((button) => /Xem thêm/u.test(button.textContent || ''));
    assert.ok(loadMore, 'Danh sách dài phải có nút Xem thêm');
    assert.match(loadMore.className, /min-h-12/);

    await act(async () => loadMore.click());
    const expandedHeadings = [...host.querySelectorAll('main h3')]
      .filter((heading) => /^Bài\s+\d+:/u.test(heading.textContent || ''));
    assert.equal(expandedHeadings.length, 32);

    const semesterOne = [...host.querySelectorAll('button')]
      .find((button) => /Tập 1 \(/u.test(button.textContent || ''));
    assert.ok(semesterOne);
    await act(async () => semesterOne.click());
    const resetHeadings = [...host.querySelectorAll('main h3')]
      .filter((heading) => /^Bài\s+\d+:/u.test(heading.textContent || ''));
    assert.equal(resetHeadings.length, 16, 'Đổi bộ lọc phải đưa danh sách về lô đầu tiên');

    await act(async () => root.unmount());
    host.remove();
  });

  it('uses the static ambient background when reduced motion is requested', async () => {
    compactQueryMatches = false;
    reducedMotionQueryMatches = true;
    const host = document.createElement('div');
    document.body.append(host);
    const root = createRoot(host);

    await act(async () => {
      root.render(React.createElement(CuteDoodleBackground, { theme: 'ocean' }));
    });

    await act(async () => Promise.resolve());
    assert.ok(host.querySelector('[data-ambient-motion="static"]'));
    assert.equal(host.querySelectorAll('[data-ambient-motion="animated"]').length, 0);

    await act(async () => root.unmount());
    host.remove();
  });

  it('uses the static ambient background on compact mobile and iPad screens', async () => {
    compactQueryMatches = true;
    reducedMotionQueryMatches = false;
    const host = document.createElement('div');
    document.body.append(host);
    const root = createRoot(host);

    await act(async () => {
      root.render(React.createElement(CuteDoodleBackground, { theme: 'ocean' }));
    });
    await act(async () => Promise.resolve());

    assert.ok(host.querySelector('[data-ambient-motion="static"]'));
    assert.equal(host.querySelectorAll('[data-ambient-motion="animated"]').length, 0);

    await act(async () => root.unmount());
    host.remove();
  });

  it('keeps narrow-phone navigation compact and provides lazy-load recovery', async () => {
    const [headerSource, bottomNavSource, appSource] = await Promise.all([
      readFile('src/components/layout/Header.tsx', 'utf8'),
      readFile('src/components/layout/BottomNav.tsx', 'utf8'),
      readFile('src/App.tsx', 'utf8'),
    ]);

    assert.match(headerSource, /hidden sm:flex items-center gap-1\.5 sm:gap-2/);
    assert.match(headerSource, /hidden xl:flex items-center gap-1 bg-slate-100/);
    assert.match(bottomNavSource, /xl:hidden/);
    assert.match(appSource, /class LazyLoadBoundary/);
    assert.match(appSource, /loadCurriculumLesson\(route\.lessonId\)[\s\S]*?\.catch\(/);
    assert.match(appSource, /loadLessonsForGradeAndSubject\([\s\S]*?\.catch\(/);
  });
});
