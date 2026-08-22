import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import test from 'node:test';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

test('báo cáo ghi đủ danh mục SGK, không nhầm bài chờ duyệt thành Luyện thêm', async () => {
  const outputDir = await mkdtemp(join(tmpdir(), 'wonderkids-sgk-report-'));
  try {
    execFileSync(process.execPath, ['scripts/audit_vietnamese_sgk_rollout.mjs', '--output-dir', outputDir], {
      cwd: process.cwd(),
      stdio: 'pipe',
    });
    const markdown = await readFile(join(outputDir, 'vietnamese-sgk-audit.md'), 'utf8');
    const csv = await readFile(join(outputDir, 'vietnamese-sgk-comparison.csv'), 'utf8');

    assert.match(markdown, /10\/10 sách nguồn/);
    assert.match(markdown, /1\.584 trang/);
    assert.match(markdown, /Danh mục bài theo mục lục SGK\s*\|\s*376/);
    assert.match(markdown, /Bài SGK đã xác minh\s*\|\s*\d+/);
    assert.match(markdown, /Hoạt động SGK đã xác minh\s*\|\s*\d+/);
    assert.match(markdown, /Danh mục SGK chờ đối chiếu nguyên văn\s*\|\s*\d+/);
    assert.match(markdown, /Bài đang khóa văn bản\/audio chính\s*\|\s*\d+/);
    assert.match(markdown, /Luyện thêm trong bài\s*\|\s*0/);
    assert.match(markdown, /Chưa phát hành nguyên văn SGK chưa duyệt/i);
    assert.match(
      markdown,
      /Transcript SGK có audio khớp transcript\s*\|\s*\d+\/\d+/,
      'Mỗi transcript đã duyệt phải có audio chính Cô Giáo Vy khớp hash và trang nguồn',
    );
    assert.match(
      markdown,
      /Audio chính Cô Giáo Vy đạt kiểm tra file\s*\|\s*\d+\/376/,
      'Không được coi các file audio cũ của bài chưa duyệt là còn sẵn sàng',
    );
    assert.equal(csv.trim().split(/\r?\n/).length, 377);
    assert.match(csv.split(/\r?\n/)[0], /audioPolicy,transcriptHash,expectedTranscriptHash,audioTranscriptStatus,notes/);
  } finally {
    await rm(outputDir, { recursive: true, force: true });
  }
});

test('audit DOM chỉ PASS khi văn bản render khớp transcript SGK đã duyệt', async () => {
  const source = await readFile('scripts/audit_293_lessons_live_browser.mjs', 'utf8');
  assert.doesNotMatch(source, /let status = 'PASS – KHỚP SGK'/);
  assert.match(source, /let status = 'UNVERIFIED – CHƯA XÁC MINH'/);
  assert.match(source, /renderedText === expectedText/);
  assert.match(source, /target_293_structured_reading_passages\.json/);
});
