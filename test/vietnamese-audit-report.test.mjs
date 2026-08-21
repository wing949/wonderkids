import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import test from 'node:test';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

test('báo cáo tách số hoạt động SGK khỏi Luyện thêm và thống kê đủ 10 sách', async () => {
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
    assert.match(markdown, /Hoạt động SGK đã xác minh\s*\|\s*0/);
    assert.match(markdown, /Luyện thêm trong bài\s*\|\s*135/);
    assert.match(markdown, /Chưa phát hành nội dung SGK chưa duyệt/i);
    assert.equal(csv.trim().split(/\r?\n/).length, 133);
    assert.match(csv.split(/\r?\n/)[0], /sgkActivityCount,appExtensionCount,audioPrimary,audioFallback/);
  } finally {
    await rm(outputDir, { recursive: true, force: true });
  }
});
