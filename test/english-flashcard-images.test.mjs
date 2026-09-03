import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('English Flashcard Images Integration Test', async (t) => {
  const mapPath = path.resolve('src/data/curriculum/english/flashcardImageMap.json');
  assert.ok(fs.existsSync(mapPath), 'flashcardImageMap.json must exist');

  const imageMap = JSON.parse(fs.readFileSync(mapPath, 'utf-8'));
  assert.ok(imageMap.g1, 'imageMap must contain g1 keys');
  assert.ok(imageMap.g2, 'imageMap must contain g2 keys');

  await t.test('Grade 1 extracted flashcard images exist in public directory', () => {
    const g1Keys = Object.keys(imageMap.g1);
    assert.ok(g1Keys.length >= 60, `G1 should have at least 60 flashcard images, got ${g1Keys.length}`);

    // Check sample files exist
    ['ball', 'bike', 'book', 'cake', 'apple'].forEach((word) => {
      const relPath = imageMap.g1[word];
      assert.ok(relPath, `G1 map should contain '${word}'`);
      const diskPath = path.resolve('public', relPath.replace(/^\//, ''));
      assert.ok(fs.existsSync(diskPath), `Disk file should exist: ${diskPath}`);
    });
  });

  await t.test('Grade 2 flashcard images exist in public directory', () => {
    const g2Keys = Object.keys(imageMap.g2);
    assert.ok(g2Keys.length >= 70, `G2 should have at least 70 flashcard images, got ${g2Keys.length}`);

    // Check sample files exist
    ['popcorn', 'pizza', 'pasta', 'party', 'kite', 'gloves', 'honey'].forEach((word) => {
      const relPath = imageMap.g2[word];
      assert.ok(relPath, `G2 map should contain '${word}'`);
      const diskPath = path.resolve('public', relPath.replace(/^\//, ''));
      assert.ok(fs.existsSync(diskPath), `Disk file should exist: ${diskPath}`);
    });
  });

  await t.test('Flashcard image URLs have valid format', () => {
    const allUrls = [...Object.values(imageMap.g1), ...Object.values(imageMap.g2)];
    allUrls.forEach((url) => {
      assert.match(url, /^\/images\/flashcards\/(?:g1|g2)\/[^/]+\.(?:jpeg|jpg|png|svg)$/);
    });
  });
});
