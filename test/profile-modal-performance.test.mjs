import assert from 'node:assert/strict';
import { after, before, describe, it } from 'node:test';
import { randomBytes } from 'node:crypto';
import { rm } from 'node:fs/promises';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import { JSDOM } from 'jsdom';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';

const tempDir = join(process.cwd(), `.tmp-profile-modal-${randomBytes(6).toString('hex')}`);

await build({
  entryPoints: ['src/components/profile/ProfileModal.tsx'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  external: ['react', 'react-dom', 'framer-motion'],
  outdir: tempDir,
  entryNames: '[name]',
  write: true,
  logLevel: 'silent',
});

const { ProfileModal } = await import(
  pathToFileURL(join(tempDir, 'ProfileModal.js')).href
);

const profile = {
  name: 'Bé Minh',
  kidCode: 'WK-1001',
  selectedGrade: 2,
  avatarId: 'bobo',
  theme: 'ocean',
  motto: 'Mỗi ngày học một chút, vui là chính!',
  streak: 7,
  stars: 24,
  totalLessonsCompleted: 18,
  accuracyRate: 92,
  level: 3,
  xp: 640,
};

let dom;

before(() => {
  dom = new JSDOM('<!doctype html><html><body></body></html>', {
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
  dom.window.matchMedia = () => ({
    matches: false,
    media: '',
    addEventListener() {},
    removeEventListener() {},
  });
});

after(async () => {
  dom.window.close();
  await rm(tempDir, { recursive: true, force: true });
});

async function renderProfileModal() {
  const host = document.createElement('div');
  document.body.append(host);
  const root = createRoot(host);
  await act(async () => {
    root.render(React.createElement(ProfileModal, {
      isOpen: true,
      onClose() {},
      profile,
      onUpdateProfile() {},
    }));
  });
  return { host, root };
}

describe('Profile dialog rendering safeguards', () => {
  it('does not decode every full-resolution avatar when opened', async () => {
    const { host, root } = await renderProfileModal();
    const dialog = document.querySelector('[role="dialog"][aria-label="Hồ Sơ & Avatar Của Bé"]');
    assert.ok(dialog);

    const avatarChoices = [...dialog.querySelectorAll('button[title*=" - "]')];
    assert.equal(avatarChoices.length, 16);
    assert.ok(dialog.querySelectorAll('img[src^="/assets/"]').length <= 2);

    const foxChoice = avatarChoices.find((button) => button.title.startsWith('Cáo MiuMiu -'));
    assert.ok(foxChoice);
    await act(async () => foxChoice.click());

    assert.ok(dialog.querySelector('img[alt="Cáo MiuMiu"]'));
    assert.ok(dialog.querySelectorAll('img[src^="/assets/"]').length <= 2);

    await act(async () => root.unmount());
    host.remove();
  });

  it('uses colored choices without heavy nested card borders', async () => {
    const { host, root } = await renderProfileModal();
    const dialog = document.querySelector('[role="dialog"][aria-label="Hồ Sơ & Avatar Của Bé"]');
    assert.ok(dialog);

    const avatarChoices = [...dialog.querySelectorAll('button[title*=" - "]')];
    assert.equal(avatarChoices.length, 16);
    assert.ok(avatarChoices.every((button) => button.style.backgroundColor));
    assert.ok(new Set(avatarChoices.map((button) => button.style.backgroundColor)).size >= 8);
    assert.ok(avatarChoices.every((button) => !/(?:^|\s)border-2(?:\s|$)/.test(button.className)));

    const themeLabels = ['Biển Xanh', 'Vũ Trụ', 'Rừng Xanh', 'Kẹo Ngọt', 'Nắng Ấm'];
    const themeChoices = [...dialog.querySelectorAll('button')]
      .filter((button) => themeLabels.some((label) => (button.textContent || '').includes(label)));
    assert.equal(themeChoices.length, 5);
    assert.ok(themeChoices.every((button) => button.style.backgroundColor));
    assert.ok(themeChoices.every((button) => !/(?:^|\s)border-2(?:\s|$)/.test(button.className)));

    await act(async () => root.unmount());
    host.remove();
  });
});
