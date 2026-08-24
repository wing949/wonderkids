import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { randomBytes } from 'node:crypto';
import { join } from 'node:path';
import { rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { build } from 'esbuild';
import { getPracticePacks } from '../src/data/practice/index.ts';

const outdir = join(process.cwd(), '.cache', `wonderkids-practice-ui-${randomBytes(6).toString('hex')}`);
let uiModule;
let dashboardModule;
let buildError;
try {
  await build({
    entryPoints: [
      'src/components/practice/PracticePortal.tsx',
      'src/components/dashboard/StudentDashboard.tsx',
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
  uiModule = await import(pathToFileURL(join(outdir, 'PracticePortal.js')).href);
  dashboardModule = await import(pathToFileURL(join(outdir, 'StudentDashboard.js')).href);
} catch (error) {
  buildError = error;
}

after(async () => {
  await rm(outdir, { recursive: true, force: true });
});

function render(route) {
  assert.ifError(buildError);
  return renderToStaticMarkup(React.createElement(uiModule.PracticePortal, {
    route,
    onNavigate() {},
    onBack() {},
    onReward() {},
  }));
}

test('hub luyện đề mặc định hiển thị bốn môn Violympic, năm lớp và nhãn tự biên soạn', () => {
  const html = render({ kind: 'practice-hub' });
  assert.match(html, /Kho Luyện Đề/u);
  assert.match(html, /Toán bằng tiếng Anh/u);
  assert.match(html, /Tiếng Việt/u);
  assert.match(html, /Tiếng Anh/u);
  assert.match(html, /Nội dung luyện tập tự biên soạn/u);
  for (let grade = 1; grade <= 5; grade += 1) assert.match(html, new RegExp(`Lớp ${grade}`));
  assert.doesNotMatch(html, /18 vòng Toán lớp 2/u);
  assert.doesNotMatch(html, /Chờ kiểm duyệt nguồn/u);
  assert.match(html, /violympic_logo\.png/u);
  assert.doesNotMatch(html, /trangnguyen_logo\.svg/u);
  assert.doesNotMatch(html, /ioe_logo\.png/u);
  assert.match(html, /https:\/\/violympic\.vn\//u);
  assert.doesNotMatch(html, /https:\/\/trangnguyen\.edu\.vn\//u);
  assert.doesNotMatch(html, /https:\/\/ioe\.vn\//u);
});

test('danh sách một tổ hợp hiển thị đủ 12 đề và phân biệt thi thử 30 phút', () => {
  const html = render({ kind: 'practice-list', subject: 'math', grade: 1 });
  assert.equal((html.match(/data-practice-set-card=/gu) || []).length, 12);
  assert.match(html, /Đề 1: Củng cố nền tảng/u);
  assert.match(html, /Đề 12: Thi thử tổng hợp 30 phút/u);
  assert.equal((html.match(/Vào làm đề/gu) || []).length, 12);
});

test('màn hình làm đề có điều hướng ba phần, câu hỏi lớn và nguồn minh bạch', () => {
  const html = render({ kind: 'practice-set', subject: 'vietnamese', grade: 3, setNumber: 8 });
  assert.match(html, /Phần 1/u);
  assert.match(html, /Phần 2/u);
  assert.match(html, /Phần 3/u);
  assert.match(html, /Câu 1\/30/u);
  assert.match(html, /Nội dung luyện tập tự biên soạn/u);
  assert.match(html, /min-h-12/u);
});

test('đề 11 hiển thị đồng hồ mô phỏng 30 phút còn đề 1 không khóa thời gian', () => {
  const mockHtml = render({ kind: 'practice-set', subject: 'english', grade: 5, setNumber: 11 });
  const practiceHtml = render({ kind: 'practice-set', subject: 'english', grade: 5, setNumber: 1 });
  assert.match(mockHtml, /30:00/u);
  assert.doesNotMatch(practiceHtml, /30:00/u);
  assert.match(practiceHtml, /Không giới hạn thời gian/u);
});

test('Dashboard chỉ còn một thẻ chung cho Kho luyện đề và Đấu trường', () => {
  assert.ifError(buildError);
  const html = renderToStaticMarkup(React.createElement(dashboardModule.StudentDashboard, {
    profile: {
      name: 'Bé An', grade: 1, selectedMascot: 'bobo', avatarId: 'bobo', stars: 10, gems: 2,
      xp: 100, level: 2, streak: 3, streakFrozen: false, totalLessonsCompleted: 1, accuracyRate: 90,
      kidCode: 'WK-TEST', motto: 'Học vui', theme: 'ocean',
    },
    currentGrade: 1,
    onSelectSubject() {},
    onOpenAdventure() {},
    onOpenPractice() {},
    onOpenShop() {},
    onOpenQuests() {},
    onMascotChange() {},
    dailyQuests: [],
  }));
  assert.match(html, /Kho Luyện Đề/u);
  assert.match(html, /240 đề/u);
  assert.match(html, /Đấu Trường Trí Tuệ/u);
  assert.equal((html.match(/data-practice-arena-entry/gu) || []).length, 1);
});

test('DOM của đủ 240 đề hiển thị đúng tiêu đề, điều hướng và không có dữ liệu rác', () => {
  let rendered = 0;
  for (const pack of getPracticePacks()) {
    for (const set of pack.sets) {
      const html = render({ kind: 'practice-set', subject: pack.subject, grade: pack.grade, setNumber: set.setNumber });
      assert.match(html, new RegExp(set.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'u'), set.id);
      assert.match(html, /Câu 1\/30/u, set.id);
      assert.equal((html.match(/>Phần [123]</gu) || []).length, 3, set.id);
      assert.doesNotMatch(html, /undefined|\bNaN\b|null/iu, set.id);
      rendered += 1;
    }
  }
  assert.equal(rendered, 240);
});
