import test from 'node:test';
import assert from 'node:assert/strict';
import { getViolympicExamSets, getViolympicExamSet } from '../src/data/practice/violympicExamSets.ts';

test('Violympic Math Official Books (TS. Pham Van Cong) Integration', async (t) => {
  const EXPECTED_ROUNDS = {
    1: 35,
    2: 10,
    3: 10,
    4: 10,
    5: 39
  };

  for (const grade of [1, 2, 3, 4, 5]) {
    await t.test(`Grade ${grade} Math Exam Sets Integrity`, () => {
      const sets = getViolympicExamSets('math', grade);
      const expectedCount = EXPECTED_ROUNDS[grade];

      assert.equal(sets.length, expectedCount, `Grade ${grade} must have exactly ${expectedCount} rounds`);

      for (let r = 1; r <= expectedCount; r++) {
        const set = sets[r - 1];
        assert.equal(set.subject, 'math');
        assert.equal(set.grade, grade);
        assert.equal(set.setNumber, r);
        assert.equal(set.totalPoints, 300);
        assert.equal(set.sections.length, 3, `Round ${r} must have exactly 3 sections`);

        let totalQuestions = 0;
        for (let sIdx = 0; sIdx < 3; sIdx++) {
          const section = set.sections[sIdx];
          assert.equal(section.items.length, 10, `Round ${r} Section ${sIdx + 1} must have 10 items`);
          assert.equal(section.maxPoints, 100);

          for (const item of section.items) {
            totalQuestions++;
            assert.ok(item.prompt && item.prompt.length > 5, 'Item must have a valid prompt');
            assert.ok(item.correctAnswer, 'Item must have correctAnswer');
            assert.ok(item.explanation, 'Item must have explanation');
            assert.equal(item.points, 10);
            assert.equal(item.contentOrigin, 'reference_extracted');
            assert.equal(item.verificationStatus, 'verified');
            assert.equal(item.sourceLabel, 'TS. Phạm Văn Công');
            assert.ok(item.sourceCitation.includes('TS.Phạm Văn Công'), 'Citation must cite TS. Pham Van Cong');
          }
        }

        assert.equal(totalQuestions, 30, `Round ${r} must have exactly 30 questions`);
      }
    });
  }
});
