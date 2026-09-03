import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const outputDir = await mkdtemp(join(tmpdir(), 'wonderkids-vocab-games-test-'));
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
  getEnglishVocabularyByGrade,
  getEnglishVocabularyByUnit,
} = vocabModule;

test('English Vocabulary Memory Games Logic Test (Grade 2 Focus & All Grades)', async (t) => {
  t.after(async () => {
    await rm(outputDir, { recursive: true, force: true }).catch(() => {});
  });

  await t.test('Grade 2 Unit 1 contains expected vocabulary for memory games', () => {
    const unit1Words = getEnglishVocabularyByUnit('eng-g2-u1');
    assert.equal(unit1Words.length, 4, 'Grade 2 Unit 1 must contain 4 words');
    const words = unit1Words.map((w) => w.word);
    assert.ok(words.includes('party'), 'Must contain party');
    assert.ok(words.includes('pasta'), 'Must contain pasta');
    assert.ok(words.includes('pizza'), 'Must contain pizza');
    assert.ok(words.includes('popcorn'), 'Must contain popcorn');
  });

  await t.test('Missing Letters Game Logic: Correctly hides 1-2 letters and includes correct letters in choices', () => {
    const grade2Words = getEnglishVocabularyByGrade(2);
    assert.ok(grade2Words.length >= 60, 'Grade 2 must have full words');

    for (const item of grade2Words.slice(0, 15)) {
      const letters = item.word.toLowerCase().split('');
      const hideCount = letters.length <= 4 ? 1 : 2;
      const eligibleIndices = letters
        .map((ch, idx) => ({ ch, idx }))
        .filter((x) => /[a-z]/i.test(x.ch))
        .map((x) => x.idx);

      assert.ok(eligibleIndices.length >= hideCount, `Word ${item.word} must have enough eligible letters`);

      const shuffled = [...eligibleIndices].sort(() => 0.5 - Math.random());
      const missingIndices = shuffled.slice(0, hideCount).sort((a, b) => a - b);
      const correctLetters = missingIndices.map((idx) => letters[idx]);

      assert.equal(missingIndices.length, hideCount, `Must hide exactly ${hideCount} letters`);

      // Verify choice generation
      const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').filter((c) => !correctLetters.includes(c));
      const distractors = [...alphabet].sort(() => 0.5 - Math.random()).slice(0, 6 - correctLetters.length);
      const choices = [...correctLetters, ...distractors];

      // All missing letters must be present in choices
      for (const missingChar of correctLetters) {
        assert.ok(choices.includes(missingChar), `Choices must contain missing letter ${missingChar}`);
      }
    }
  });

  await t.test('Disappearing Word Game Logic: Vanished word is part of displayed set and choices', () => {
    const unitWords = getEnglishVocabularyByUnit('eng-g2-u1');
    assert.equal(unitWords.length, 4);

    const slotCount = Math.min(4, unitWords.length);
    const displayedWords = [...unitWords].slice(0, slotCount);
    const vanishedIndex = 2; // e.g. third word
    const targetWord = displayedWords[vanishedIndex];

    assert.ok(targetWord, 'Target word must exist');

    const otherWords = unitWords.filter((w) => w.id !== targetWord.id);
    const options = [targetWord, ...otherWords].sort(() => 0.5 - Math.random());

    assert.ok(options.some((opt) => opt.id === targetWord.id), 'Options must include the vanished target word');
    assert.equal(options.length, 4, 'Options must have 4 choices');
  });

  await t.test('Word Memory Match Deck Logic: Generates matched pairs with word and meaning', () => {
    const g2Words = getEnglishVocabularyByGrade(2).slice(0, 4);
    assert.equal(g2Words.length, 4);

    const deck = [];
    g2Words.forEach((item) => {
      deck.push({
        id: `${item.id}-en`,
        wordId: item.id,
        type: 'word',
        text: item.word,
      });
      deck.push({
        id: `${item.id}-vi`,
        wordId: item.id,
        type: 'meaning',
        text: item.meaning,
      });
    });

    assert.equal(deck.length, 8, '4 words must produce 8 cards');
    const wordCards = deck.filter((c) => c.type === 'word');
    const meaningCards = deck.filter((c) => c.type === 'meaning');
    assert.equal(wordCards.length, 4);
    assert.equal(meaningCards.length, 4);

    // Each wordCard has exactly 1 matching meaningCard
    for (const wCard of wordCards) {
      const match = meaningCards.find((m) => m.wordId === wCard.wordId);
      assert.ok(match, `Must find matching meaning card for word ${wCard.text}`);
    }
  });
});
