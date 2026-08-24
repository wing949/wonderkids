import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { randomBytes } from 'node:crypto';
import { join } from 'node:path';
import { rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { Simulate } from 'react-dom/test-utils';
import { JSDOM } from 'jsdom';
import { build } from 'esbuild';

const outdir = join(process.cwd(), '.cache', `parent-multi-kid-${randomBytes(6).toString('hex')}`);
let parentModule;
let buildError;
try {
  await build({ entryPoints: ['src/components/parent/ParentPortal.tsx'], bundle: true, format: 'esm', platform: 'node', target: 'node20', outdir, entryNames: '[name]', packages: 'external', logLevel: 'silent' });
  parentModule = await import(pathToFileURL(join(outdir, 'ParentPortal.js')).href);
} catch (error) { buildError = error; }
after(async () => rm(outdir, { recursive: true, force: true }));

const report = { weeklyStudyMinutes: [10], days: ['T2'], subjectMastery: [], screenTimeLimitMinutes: 30, screenTimeUsedMinutes: 12, parentTasks: [] };
const profile = (name, grade, code) => ({ name, kidCode: code, grade, selectedMascot: 'bobo', avatarId: 'bobo', motto: 'Học vui', theme: 'ocean', stars: 12, gems: 3, xp: 90, level: 2, streak: 4, streakFrozen: false, totalLessonsCompleted: 5, accuracyRate: 88 });
const kids = [
  { id: 'kid-a', createdAt: 1, updatedAt: 1, report, profile: profile('Bé An', 1, 'WK-A') },
  { id: 'kid-b', createdAt: 2, updatedAt: 2, report, profile: profile('Bé Bình', 3, 'WK-B') },
];

test('Góc Phụ Huynh cho phép chuyển, thêm và chỉnh sửa nhiều hồ sơ Bé', async () => {
  assert.ifError(buildError);
  const dom = new JSDOM('<div id="root"></div>', { url: 'http://localhost/phu-huynh', pretendToBeVisual: true });
  const previous = { window: globalThis.window, document: globalThis.document, navigator: globalThis.navigator, HTMLElement: globalThis.HTMLElement, SVGElement: globalThis.SVGElement, Audio: globalThis.Audio, act: globalThis.IS_REACT_ACT_ENVIRONMENT };
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  Object.defineProperty(globalThis, 'navigator', { configurable: true, value: dom.window.navigator });
  globalThis.HTMLElement = dom.window.HTMLElement;
  globalThis.SVGElement = dom.window.SVGElement;
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  globalThis.Audio = class { play() { return Promise.resolve(); } pause() {} };
  const selected = [], added = [], updated = [];
  const host = document.querySelector('#root');
  const root = createRoot(host);
  try {
    await act(async () => root.render(React.createElement(parentModule.ParentPortal, {
      kids, activeKidId: 'kid-a', report,
      onSelectKid: (id) => selected.push(id), onAddKid: (value) => added.push(value),
      onUpdateKid: (id, changes) => updated.push([id, changes]), onUpdateReport() {},
      onBackToStudent() {}, onRewardStars() {},
    })));
    assert.match(host.textContent, /Quản lý hồ sơ các Bé/u);
    const switchButton = host.querySelector('button[aria-label="Chuyển sang hồ sơ Bé Bình"]');
    assert.ok(switchButton);
    await act(async () => switchButton.click());
    assert.deepEqual(selected, ['kid-b']);

    const button = (text) => [...host.querySelectorAll('button')].find((item) => item.textContent.includes(text));
    await act(async () => button('Thêm Bé').click());
    const nameInput = host.querySelector('input[aria-label="Tên của Bé"]');
    const gradeSelect = host.querySelector('select[aria-label="Lớp của Bé"]');
    await act(async () => {
      Simulate.change(nameInput, { target: { value: 'Bé Chi' } });
      Simulate.change(gradeSelect, { target: { value: '4' } });
    });
    await act(async () => button('Tạo hồ sơ Bé').click());
    assert.equal(added[0].name, 'Bé Chi');
    assert.equal(added[0].grade, 4);
    assert.equal(added[0].stars, 0);

    await act(async () => host.querySelector('button[aria-label="Chỉnh sửa hồ sơ Bé An"]').click());
    const editInput = host.querySelector('input[aria-label="Tên của Bé"]');
    await act(async () => {
      Simulate.change(editInput, { target: { value: 'Bé An Nhiên' } });
    });
    await act(async () => button('Lưu thay đổi').click());
    assert.deepEqual(updated[0], ['kid-a', { name: 'Bé An Nhiên', grade: 1, avatarId: 'bobo' }]);
  } finally {
    await act(async () => root.unmount());
    dom.window.close();
    globalThis.window = previous.window;
    globalThis.document = previous.document;
    Object.defineProperty(globalThis, 'navigator', { configurable: true, value: previous.navigator });
    globalThis.HTMLElement = previous.HTMLElement;
    globalThis.SVGElement = previous.SVGElement;
    globalThis.Audio = previous.Audio;
    globalThis.IS_REACT_ACT_ENVIRONMENT = previous.act;
  }
});
