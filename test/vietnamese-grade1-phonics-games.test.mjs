import assert from 'node:assert/strict';
import { after, describe, it } from 'node:test';
import { randomBytes } from 'node:crypto';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';

const tempDir = join(tmpdir(), `wonderkids-phonics-${randomBytes(6).toString('hex')}`);
await build({
  entryPoints: [
    'src/data/curriculum/vietnamese/grade1PhonicsGames.ts',
  ],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outdir: tempDir,
  write: true,
  logLevel: 'silent',
});

const phonicsData = await import(pathToFileURL(join(tempDir, 'grade1PhonicsGames.js')).href);

after(async () => {
  await rm(tempDir, { recursive: true, force: true });
});

const GRADE_1_PHONICS_GAMES = phonicsData.GRADE_1_PHONICS_GAMES;

describe('Tiếng Việt 1 Tập 1 - Phonics Mini-Game Verification Test', () => {
  it('should have rich phonics game configurations for Grade 1 Term 1 lessons', () => {
    const lessonKeys = Object.keys(GRADE_1_PHONICS_GAMES);
    assert.ok(lessonKeys.length >= 20, `Expected at least 20 lessons with phonics games, found ${lessonKeys.length}`);

    for (const key of lessonKeys) {
      const config = GRADE_1_PHONICS_GAMES[key];
      assert.ok(config.lessonTitle, `${key} missing lessonTitle`);
      assert.ok(config.stages && config.stages.length >= 2, `${key} must have at least 2 game stages`);

      for (const stage of config.stages) {
        assert.ok(stage.id, `${key} stage missing id`);
        assert.ok(stage.instruction && stage.instruction.length > 5, `${key} stage missing instruction`);
        assert.ok(stage.gameType, `${key} stage missing gameType`);

        if (stage.options && stage.options.length > 0) {
          const correct = stage.options.filter((o) => o.isCorrect);
          assert.ok(correct.length >= 1, `${key} stage ${stage.id} must have at least 1 correct option`);
        } else if (stage.gameType === 'order_sequence') {
          assert.ok(stage.sequenceWords && stage.sequenceWords.length >= 2, `${key} stage ${stage.id} missing sequenceWords`);
        } else if (stage.gameType === 'letter_assemble') {
          assert.ok(stage.assembleTarget && stage.assembleTarget.pieces.length >= 2, `${key} stage ${stage.id} missing assembleTarget`);
        }
      }
    }
  });

  it('should verify specific lessons (Bài 1 A a, Bài 2 B b, Bài 5 Ôn tập) have accurate phonics games', () => {
    // 1. Bài 1: A a
    const b1 = GRADE_1_PHONICS_GAMES['tv-g1-b1'];
    assert.ok(b1);
    assert.equal(b1.targetLetters[0], 'a');
    assert.equal(b1.stages[0].gameType, 'letter_pick');
    assert.equal(b1.stages[1].gameType, 'bubble_pop');
    assert.equal(b1.stages[2].gameType, 'order_sequence');

    // 2. Bài 2: B b
    const b2 = GRADE_1_PHONICS_GAMES['tv-g1-b2'];
    assert.ok(b2);
    assert.equal(b2.targetLetters[0], 'b');
    assert.equal(b2.stages[0].gameType, 'letter_pick');
    assert.equal(b2.stages[1].gameType, 'letter_assemble');

    // 3. Bài 5: Ôn tập & Kể chuyện
    const b5 = GRADE_1_PHONICS_GAMES['tv-g1-b5'];
    assert.ok(b5);
    assert.equal(b5.stages[0].gameType, 'unit_review');
  });
});
