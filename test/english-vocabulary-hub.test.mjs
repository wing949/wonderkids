import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const outputDir = await mkdtemp(join(tmpdir(), 'wonderkids-vocab-test-'));
await build({
  entryPoints: {
    vocab: 'src/data/curriculum/english/vocabularyData.ts',
  },
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outdir: outputDir,
  write: true,
  logLevel: 'silent',
});

const vocabModule = await import(pathToFileURL(join(outputDir, 'vocab.js')).href);
const {
  getAllEnglishVocabulary,
  getEnglishVocabularyByGrade,
  getEnglishVocabularyByUnit,
  searchEnglishVocabulary,
  getVocabularyStats,
  VOCABULARY_CATEGORIES,
} = vocabModule;

test('English Vocabulary Hub — Global Success (Lớp 1-5) Completeness & Integrity', async (t) => {
  t.after(async () => {
    await rm(outputDir, { recursive: true, force: true }).catch(() => {});
  });

  await t.test('Total vocabulary catalog contains 492 words across units & official Flashcards G2', () => {
    const all = getAllEnglishVocabulary();
    assert.equal(all.length, 492, 'Total vocabulary must be 492 words (412 standard SGK + 80 official G2 Flashcards)');
  });

  await t.test('All vocabulary items have valid required fields and textbook reference', () => {
    const all = getAllEnglishVocabulary();
    for (const item of all) {
      assert.ok(item.id, 'Item must have an id');
      assert.ok(item.word && item.word.trim().length > 0, `Item ${item.id} must have a word`);
      assert.ok(item.meaning && item.meaning.trim().length > 0, `Item ${item.id} must have a meaning`);
      assert.ok([1, 2, 3, 4, 5].includes(item.grade), `Item ${item.id} grade must be 1-5`);
      assert.ok([1, 2].includes(item.semester), `Item ${item.id} semester must be 1 or 2`);
      assert.ok(item.unitId && (item.unitId.startsWith('eng-g') || item.unitId.startsWith('g2-')), `Item ${item.id} unitId must be valid`);
      assert.ok(item.unitTitle && (item.unitTitle.startsWith('Unit ') || item.unitTitle.startsWith('Âm ')), `Item ${item.id} unitTitle must be valid`);
      assert.ok(item.textbookRef && (item.textbookRef.includes('Global Success') || item.textbookRef.includes('Phonics 2')), `Item ${item.id} textbookRef must cite source`);
      assert.ok(item.readerUrl && item.readerUrl.startsWith('https://taphuan.nxbgd.vn'), `Item ${item.id} readerUrl must point to taphuan.nxbgd.vn`);
      assert.ok(item.exampleSentence && item.exampleSentence.length > 0, `Item ${item.id} must have an example sentence`);
      assert.ok(item.exampleSentencePhonetic && item.exampleSentencePhonetic.length > 0, `Item ${item.id} must have exampleSentencePhonetic`);
      assert.ok(item.exampleSentenceTranslation && item.exampleSentenceTranslation.length > 0, `Item ${item.id} must have exampleSentenceTranslation`);
      assert.ok(item.category && item.category.length > 0, `Item ${item.id} must have a category`);
      assert.ok(item.emoji && item.emoji.length > 0, `Item ${item.id} must have an emoji`);
    }
  });

  await t.test('Grade breakdown covers all 5 grades correctly', () => {
    const g1 = getEnglishVocabularyByGrade(1);
    const g2 = getEnglishVocabularyByGrade(2);
    const g3 = getEnglishVocabularyByGrade(3);
    const g4 = getEnglishVocabularyByGrade(4);
    const g5 = getEnglishVocabularyByGrade(5);

    assert.equal(g1.length, 64, 'Grade 1 must have 64 words');
    assert.equal(g2.length, 145, 'Grade 2 must have 145 words (65 unit words + 80 official Flashcards G2)');
    assert.equal(g3.length, 98, 'Grade 3 must have 98 words');
    assert.equal(g4.length, 95, 'Grade 4 must have 95 words');
    assert.equal(g5.length, 90, 'Grade 5 must have 90 words');
  });

  await t.test('Unit lookup returns exact words for that unit', () => {
    const u1 = getEnglishVocabularyByUnit('eng-g1-u1');
    assert.equal(u1.length, 4);
    const words = u1.map((w) => w.word);
    assert.deepEqual(words, ['ball', 'bike', 'book', 'boy']);
  });

  await t.test('Search queries work for English words, Vietnamese meanings, and unit titles', () => {
    const searchApple = searchEnglishVocabulary('apple');
    assert.ok(searchApple.length > 0, 'Should find apple by word');
    assert.ok(searchApple.some((w) => w.word === 'apple'));

    const searchTao = searchEnglishVocabulary('quả táo');
    assert.ok(searchTao.length > 0, 'Should find apple by Vietnamese meaning');
    assert.ok(searchTao.some((w) => w.word === 'apple'));

    const searchGradeSpecific = searchEnglishVocabulary('apple', 1);
    assert.equal(searchGradeSpecific.length, 1);
    assert.equal(searchGradeSpecific[0].grade, 1);
  });

  await t.test('Vocabulary statistics reflect full dataset', () => {
    const stats = getVocabularyStats();
    assert.equal(stats.totalWords, 492);
    assert.equal(stats.byGrade[1], 64);
    assert.equal(stats.byGrade[2], 145);
    assert.equal(stats.byGrade[3], 98);
    assert.equal(stats.byGrade[4], 95);
    assert.equal(stats.byGrade[5], 90);
    assert.ok(Object.keys(stats.byCategory).length > 5, 'Must categorize into multiple topics');
  });

  await t.test('Vocabulary categories list has valid labels and icons', () => {
    assert.ok(VOCABULARY_CATEGORIES.length >= 10);
    assert.ok(VOCABULARY_CATEGORIES.some((c) => c.id === 'all'));
    assert.ok(VOCABULARY_CATEGORIES.some((c) => c.id === 'school'));
    assert.ok(VOCABULARY_CATEGORIES.some((c) => c.id === 'family'));
    assert.ok(VOCABULARY_CATEGORIES.some((c) => c.id === 'animals'));
  });
});
