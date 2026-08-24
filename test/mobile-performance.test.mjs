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
    'src/components/layout/Header.tsx',
    'src/components/profile/ProfileModal.tsx',
    'src/components/exercise/InteractiveExerciseEngine.tsx',
    'src/data/curriculum/index.ts',
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
const { Header } = await import(pathToFileURL(join(tempDir, 'Header.js')).href);
const { ProfileModal } = await import(pathToFileURL(join(tempDir, 'ProfileModal.js')).href);
const { InteractiveExerciseEngine } = await import(pathToFileURL(join(tempDir, 'InteractiveExerciseEngine.js')).href);
const { getLessonsForGradeAndSubject } = await import(pathToFileURL(join(tempDir, 'index.js')).href);

const mobileProfile = {
  name: 'Bé Minh',
  kidCode: 'WK-001',
  grade: 2,
  level: 1,
  xp: 20,
  stars: 15,
  gems: 3,
  streak: 2,
  selectedMascot: 'bobo',
  avatarId: 'bobo',
  theme: 'ocean',
  totalLessonsCompleted: 1,
  accuracyRate: 90,
};

let dom;
let compactQueryMatches = false;
let reducedMotionQueryMatches = false;
const createdAudioElements = [];

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
  globalThis.Audio = class {
    constructor(src) {
      this.src = src;
      this.currentTime = 0;
      this.playbackRate = 1;
      this.preservesPitch = false;
      this.onended = null;
      this.onerror = null;
      createdAudioElements.push(this);
    }

    play() { return Promise.resolve(); }
    pause() {}
  };
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

  it('keeps the kid profile entry visible on phones and opens it from the header', async () => {
    const host = document.createElement('div');
    document.body.append(host);
    const root = createRoot(host);
    let opened = 0;

    await act(async () => {
      root.render(React.createElement(Header, {
        profile: mobileProfile,
        currentGrade: 2,
        onGradeChange() {},
        currentTheme: 'ocean',
        onThemeChange() {},
        currentPortal: 'student',
        onPortalChange() {},
        onOpenShop() {},
        onOpenBadges() { opened += 1; },
      }));
    });

    const profileButton = host.querySelector('button[aria-label="Mở hồ sơ của Bé Minh, đang học lớp 2"]');
    assert.ok(profileButton, 'Header mobile phải có nút mở hồ sơ kèm thông tin lớp hiện tại');
    assert.doesNotMatch(profileButton.className, /(?:^|\s)hidden(?:\s|$)/, 'Nút hồ sơ không được ẩn trên điện thoại');
    assert.match(profileButton.className, /min-h-12/);

    await act(async () => profileButton.click());
    assert.equal(opened, 1);

    await act(async () => root.unmount());
    host.remove();
  });

  it('shows editable name and five large grade choices in the mobile profile dialog', async () => {
    const host = document.createElement('div');
    const trigger = document.createElement('button');
    trigger.textContent = 'Mở hồ sơ';
    document.body.append(trigger);
    document.body.append(host);
    const root = createRoot(host);
    let closed = 0;
    trigger.focus();

    await act(async () => {
      root.render(React.createElement(ProfileModal, {
        isOpen: true,
        onClose() { closed += 1; },
        profile: mobileProfile,
        onUpdateProfile() {},
      }));
    });

    const nameInput = document.querySelector('input[aria-label="Tên hoặc biệt danh của bé"]');
    assert.ok(nameInput, 'Cửa sổ hồ sơ phải có ô đổi tên rõ ràng');
    assert.match(nameInput.className, /min-h-12/);

    const gradeButtons = [...document.querySelectorAll('button[aria-label^="Chọn lớp "]')];
    assert.equal(gradeButtons.length, 5);
    assert.ok(gradeButtons.every((button) => /min-h-12/.test(button.className)));

    const profileTab = [...document.querySelectorAll('button')]
      .find((button) => /Hồ Sơ & Đổi Avatar/u.test(button.textContent || ''));
    const achievementTab = [...document.querySelectorAll('button')]
      .find((button) => /Thành Tích & Huy Hiệu/u.test(button.textContent || ''));
    assert.ok(profileTab && achievementTab);
    assert.match(profileTab.parentElement.className, /grid-cols-2/);
    assert.match(profileTab.className, /min-h-12/);
    assert.match(achievementTab.className, /min-h-12/);

    const previewText = document.querySelector('[data-testid="profile-preview"]');
    assert.ok(previewText, 'Phải tìm thấy thẻ xem trước hồ sơ');
    assert.match(previewText.className, /hidden/);
    assert.match(previewText.className, /sm:flex/);

    const saveButton = [...document.querySelectorAll('button')]
      .find((button) => /Lưu Hồ Sơ & Avatar/u.test(button.textContent || ''));
    assert.ok(saveButton);
    assert.match(saveButton.className, /min-h-12/);

    const modalBox = document.querySelector('[role="dialog"][aria-modal="true"]');
    assert.ok(modalBox);
    assert.match(modalBox.className, /max-h-\[calc\(100dvh-1rem\)\]/);
    assert.match(modalBox.className, /overflow-y-auto/);
    assert.ok(modalBox.contains(document.activeElement), 'Mở modal phải chuyển focus vào hộp thoại');
    assert.equal(document.body.style.overflow, 'hidden');

    const modalControls = [...modalBox.querySelectorAll('button:not([disabled]), input:not([disabled])')];
    const firstControl = modalControls[0];
    const lastControl = modalControls.at(-1);
    lastControl.focus();
    document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Tab', bubbles: true }));
    assert.equal(document.activeElement, firstControl, 'Tab ở nút cuối phải quay về điều khiển đầu tiên');
    firstControl.focus();
    document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true }));
    assert.equal(document.activeElement, lastControl, 'Shift+Tab ở đầu phải quay về điều khiển cuối');

    await act(async () => {
      document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    assert.equal(closed, 1, 'Phím Escape phải đóng hộp thoại');

    await act(async () => {
      root.render(React.createElement(ProfileModal, {
        isOpen: false,
        onClose() { closed += 1; },
        profile: mobileProfile,
        onUpdateProfile() {},
      }));
    });
    assert.equal(document.activeElement, trigger, 'Đóng modal phải trả focus về nút đã mở');
    assert.equal(document.body.style.overflow, '');

    await act(async () => root.unmount());
    host.remove();
    trigger.remove();
  });

  it('keeps narrow-phone navigation compact and provides lazy-load recovery', async () => {
    const [headerSource, bottomNavSource, appSource] = await Promise.all([
      readFile('src/components/layout/Header.tsx', 'utf8'),
      readFile('src/components/layout/BottomNav.tsx', 'utf8'),
      readFile('src/App.tsx', 'utf8'),
    ]);

    assert.match(headerSource, /hidden xl:flex items-center gap-1 bg-slate-100/);
    assert.match(bottomNavSource, /xl:hidden/);
    assert.match(appSource, /class LazyLoadBoundary/);
    assert.match(appSource, /loadCurriculumLesson\(route\.lessonId\)[\s\S]*?\.catch\(/);
    assert.match(appSource, /loadLessonsForGradeAndSubject\([\s\S]*?\.catch\(/);
  });

  it('lets a child change the speed of prerecorded reading audio on mobile', async () => {
    const lesson = getLessonsForGradeAndSubject(2, 'vietnamese')
      .find((item) => item.id === 'tv-g2-b2');
    assert.ok(lesson, 'Cần bài đọc đã phát hành để kiểm tra điều khiển tốc độ');

    const host = document.createElement('div');
    document.body.append(host);
    const root = createRoot(host);

    await act(async () => {
      root.render(React.createElement(InteractiveExerciseEngine, {
        lesson,
        onExit() {},
        onComplete() {},
      }));
    });

    const lessonInfo = host.querySelector('[aria-label="Thông tin bài học"]');
    assert.ok(lessonInfo, 'Thanh đầu phải có vùng thông tin bài học rõ ràng');
    assert.equal(lessonInfo.children.length, 2, 'Thông tin bài học chỉ gồm nguồn/trang và tên bài');
    assert.match(
      lessonInfo.firstElementChild?.textContent || '',
      /SGK Tiếng Việt 2 tập 1\s*•\s*Trang 13, 14, 16/iu,
    );

    const readingCard = host.querySelector('section[aria-label="Nội dung bài đọc"]');
    assert.ok(readingCard, 'Cột nội dung bên phải phải là vùng bài đọc có nhãn rõ ràng');

    const audioControls = host.querySelector('[aria-label="Điều khiển nghe bài đọc"]');
    assert.ok(audioControls, 'Cụm tốc độ và nút loa phải nằm trên thanh đầu trang');
    assert.equal(
      readingCard.querySelector('[aria-label="Điều khiển nghe bài đọc"]'),
      null,
      'Cột bài đọc không được lặp lại cụm điều khiển audio',
    );

    const speedControl = audioControls.querySelector('select[aria-label="Tốc độ đọc audio thu sẵn"]');
    assert.ok(speedControl, 'Bài đọc phải có lựa chọn tốc độ cho audio thu sẵn');
    assert.match(speedControl.className, /min-h-12/);
    assert.equal(speedControl.value, '1', 'Tốc độ mặc định phải là 1.0x');
    assert.deepEqual(
      [...speedControl.options].map((option) => option.value),
      ['0.8', '1', '1.2'],
    );

    const playButton = audioControls.querySelector('button[aria-label="Nghe toàn bài"]');
    assert.ok(playButton, 'Nút nghe phải nằm trong cụm điều khiển trên thanh đầu trang');
    assert.equal((playButton.textContent || '').trim(), '', 'Nút nghe chỉ hiển thị biểu tượng loa');
    assert.match(playButton.className, /h-12/);
    assert.match(playButton.className, /w-12/);
    await act(async () => playButton.click());
    assert.equal(playButton.getAttribute('aria-label'), 'Dừng đọc mẫu');
    assert.match(
      playButton.querySelector('svg')?.getAttribute('class') || '',
      /lucide-square/,
      'Khi đang phát phải hiện biểu tượng dừng, không dùng biểu tượng tạm dừng',
    );
    const passageAudio = createdAudioElements.at(-1);

    speedControl.value = '0.8';
    await act(async () => {
      speedControl.dispatchEvent(new window.Event('change', { bubbles: true }));
    });

    assert.equal(passageAudio.playbackRate, 0.8);
    assert.equal(passageAudio.preservesPitch, true);
    assert.equal(createdAudioElements.at(-1), passageAudio, 'Đổi tốc độ không được khởi động lại audio');

    await act(async () => root.unmount());
    host.remove();
  });

  it('plays an English reading passage with an English browser voice', async () => {
    const lesson = getLessonsForGradeAndSubject(5, 'english')
      .find((item) => item.id === 'eng-g5-u1');
    assert.ok(lesson, 'Cần bài Tiếng Anh có nội dung đọc để kiểm tra nút loa');

    const spokenUtterances = [];
    const englishVoice = { name: 'Microsoft Jenny Online', lang: 'en-US' };
    class TestSpeechSynthesisUtterance {
      constructor(text) {
        this.text = text;
        this.lang = '';
        this.rate = 1;
        this.pitch = 1;
        this.volume = 1;
        this.voice = null;
        this.onend = null;
        this.onerror = null;
      }
    }
    globalThis.SpeechSynthesisUtterance = TestSpeechSynthesisUtterance;
    Object.defineProperty(window, 'speechSynthesis', {
      configurable: true,
      value: {
        getVoices: () => [englishVoice],
        cancel() {},
        speak(utterance) { spokenUtterances.push(utterance); },
      },
    });

    const host = document.createElement('div');
    document.body.append(host);
    const root = createRoot(host);

    await act(async () => {
      root.render(React.createElement(InteractiveExerciseEngine, {
        lesson,
        onExit() {},
        onComplete() {},
      }));
    });

    const playButton = host.querySelector('button[aria-label="Nghe toàn bài"]');
    assert.ok(playButton, 'Bài Tiếng Anh phải có nút nghe toàn bài');

    await act(async () => playButton.click());

    assert.equal(spokenUtterances.length, 1, 'Bấm loa phải thực sự gửi nội dung tới bộ đọc');
    assert.equal(spokenUtterances[0].lang, 'en-US');
    assert.equal(spokenUtterances[0].rate, 1);
    assert.match(spokenUtterances[0].text, /All about me!/u);
    assert.match(spokenUtterances[0].text, /What is your address\?/u);
    assert.equal(playButton.getAttribute('aria-label'), 'Dừng đọc mẫu');

    await act(async () => root.unmount());
    host.remove();
    delete globalThis.SpeechSynthesisUtterance;
    delete window.speechSynthesis;
  });

  it('disables the speed selector when a lesson has no approved prerecorded audio', async () => {
    const publishedLesson = getLessonsForGradeAndSubject(2, 'vietnamese')
      .find((item) => item.id === 'tv-g2-b2');
    assert.ok(publishedLesson);
    const lessonWithoutAudio = { ...publishedLesson, id: 'tv-g2-b2-without-audio' };
    const host = document.createElement('div');
    document.body.append(host);
    const root = createRoot(host);

    await act(async () => {
      root.render(React.createElement(InteractiveExerciseEngine, {
        lesson: lessonWithoutAudio,
        onExit() {},
        onComplete() {},
      }));
    });

    const speedControl = host.querySelector('select[aria-label="Tốc độ đọc audio thu sẵn"]');
    assert.ok(speedControl);
    assert.equal(speedControl.disabled, true);

    await act(async () => root.unmount());
    host.remove();
  });

  it('keeps every verified SGK line break when rendering prose in the right column', async () => {
    const lesson = getLessonsForGradeAndSubject(2, 'vietnamese')
      .find((item) => item.id === 'tv-g2-b5');
    assert.ok(lesson, 'Cần bài Em có xinh không? để kiểm tra dòng lời thoại theo SGK');

    const host = document.createElement('div');
    document.body.append(host);
    const root = createRoot(host);

    await act(async () => {
      root.render(React.createElement(InteractiveExerciseEngine, {
        lesson,
        onExit() {},
        onComplete() {},
      }));
    });

    const readingText = host.querySelector(
      'section[aria-label="Nội dung bài đọc"] [aria-label="Văn bản bài đọc"]',
    );
    assert.ok(readingText, 'Cột phải phải có vùng văn bản bài đọc riêng');
    assert.equal(
      readingText.firstElementChild?.querySelectorAll('br').length,
      8,
      'Tám dấu xuống dòng của trang đầu bài mẫu phải được giữ nguyên trên DOM',
    );

    await act(async () => root.unmount());
    host.remove();
  });
});
