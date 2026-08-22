import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { OFFICIAL_MATH_342_CATALOG } from '../src/data/curriculum/math/officialMathCatalog.ts';

describe('Math Official 342 Catalog Completeness & Verification Test', () => {
  it('should contain exactly 342 official lessons across Grades 1 to 5', () => {
    assert.equal(OFFICIAL_MATH_342_CATALOG.length, 342);
  });

  it('should have correct lesson distribution per grade', () => {
    const g1 = OFFICIAL_MATH_342_CATALOG.filter((t) => t.grade === 1);
    const g2 = OFFICIAL_MATH_342_CATALOG.filter((t) => t.grade === 2);
    const g3 = OFFICIAL_MATH_342_CATALOG.filter((t) => t.grade === 3);
    const g4 = OFFICIAL_MATH_342_CATALOG.filter((t) => t.grade === 4);
    const g5 = OFFICIAL_MATH_342_CATALOG.filter((t) => t.grade === 5);

    assert.equal(g1.length, 40, 'Toán 1 must have 40 lessons');
    assert.equal(g2.length, 73, 'Toán 2 must have 73 lessons');
    assert.equal(g3.length, 81, 'Toán 3 must have 81 lessons');
    assert.equal(g4.length, 73, 'Toán 4 must have 73 lessons');
    assert.equal(g5.length, 75, 'Toán 5 must have 75 lessons');
  });

  it('should have unique IDs and continuous lesson numbers for all grades', () => {
    const idSet = new Set();
    OFFICIAL_MATH_342_CATALOG.forEach((t) => {
      assert.ok(!idSet.has(t.id), `Duplicate ID detected: ${t.id}`);
      idSet.add(t.id);
      assert.ok(t.title && t.title.length > 3, `Invalid title for ${t.id}`);
      assert.ok(t.unit && t.unit.length > 2, `Invalid unit for ${t.id}`);
      assert.ok(t.textbookPageRef, `Missing textbookPageRef for ${t.id}`);
    });
  });
});
