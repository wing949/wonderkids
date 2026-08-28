import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const outputDir = await mkdtemp(join(tmpdir(), 'wonderkids-english-test-'));
await build({
  entryPoints: {
    index: 'src/data/curriculum/index.ts',
    sourcePageViewer: 'src/utils/sourcePageViewer.ts',
  },
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  outdir: outputDir,
  write: true,
  logLevel: 'silent',
});

const curriculum = await import(pathToFileURL(join(outputDir, 'index.js')).href);
const sourceViewer = await import(pathToFileURL(join(outputDir, 'sourcePageViewer.js')).href);
const {
  getLessonsForGradeAndSubject,
  getEnglishBookManifest,
  getEnglishPhonicsGameForLesson,
  getEnglishReadingPassage,
} = curriculum;
const { getSourcePageView } = sourceViewer;

test('English Curriculum 2-Column SGK & Phonics/Reading Architecture Test', async (t) => {
  t.after(async () => {
    await rm(outputDir, { recursive: true, force: true }).catch(() => {});
  });

  await t.test('All 10 English book manifests (Grades 1-5, Semesters 1 & 2) exist and are verified', () => {
    for (let grade = 1; grade <= 5; grade++) {
      for (let sem = 1; sem <= 2; sem++) {
        const manifest = getEnglishBookManifest(grade, sem);
        assert.ok(manifest, `English book manifest for Grade ${grade} Semester ${sem} must exist`);
        assert.equal(manifest.grade, grade);
        assert.equal(manifest.semester, sem);
        assert.ok(manifest.pages.length > 0, `Manifest must contain pages for Grade ${grade} Semester ${sem}`);
        assert.equal(manifest.importStatus, 'verified');
        assert.equal(manifest.published, true);
      }
    }
  });

  await t.test('All English lessons across Grades 1 to 5 have sourceCitation and sourcePageImageUrls for Left Column SGK Viewer', () => {
    for (let grade = 1; grade <= 5; grade++) {
      const lessons = getLessonsForGradeAndSubject(grade, 'english');
      assert.ok(lessons.length > 0, `Grade ${grade} English must have lessons`);

      for (const lesson of lessons) {
        assert.ok(lesson.sourceCitation, `Lesson ${lesson.id} (${lesson.title}) must have sourceCitation`);
        assert.ok(
          lesson.sourcePageImageUrls && lesson.sourcePageImageUrls.length > 0,
          `Lesson ${lesson.id} (${lesson.title}) must have sourcePageImageUrls for Left Column SGK Viewer`
        );
        assert.ok(lesson.readingPassage, `Lesson ${lesson.id} (${lesson.title}) must have readingPassage for Right Column`);
        assert.ok(lesson.lessonOverview, `Lesson ${lesson.id} (${lesson.title}) must have lessonOverview`);

        // Test getSourcePageView integration
        const pageView = getSourcePageView(
          lesson.sourcePageImageUrls,
          lesson.sourceCitation.sourcePages,
          0
        );
        assert.ok(pageView, `Source page view must resolve for ${lesson.id}`);
        assert.ok(pageView.imageUrl.length > 0, `Image URL must not be empty for ${lesson.id}`);
        assert.ok(pageView.pageNumber > 0, `Page number must be positive for ${lesson.id}`);
      }
    }
  });

  await t.test('Grade 1 Term 1 English Lessons (Units 1-8) have rich Phonics Game configurations', () => {
    for (let u = 1; u <= 8; u++) {
      const lessonId = `eng-g1-u${u}`;
      const phonicsGame = getEnglishPhonicsGameForLesson(lessonId);
      assert.ok(phonicsGame, `Phonics game must exist for ${lessonId}`);
      assert.ok(phonicsGame.stages.length >= 4, `${lessonId} must have at least 4 game stages`);

      const stageTypes = phonicsGame.stages.map((s) => s.gameType);
      assert.ok(stageTypes.includes('letter_pick'), `${lessonId} must have letter_pick game`);
      assert.ok(stageTypes.includes('bubble_pop'), `${lessonId} must have bubble_pop game`);
      assert.ok(stageTypes.includes('letter_assemble'), `${lessonId} must have letter_assemble game`);
      assert.ok(stageTypes.includes('picture_match'), `${lessonId} must have picture_match game`);
    }
  });

  await t.test('English Lessons are grouped by semester for AdventureMap overview', () => {
    for (let grade = 1; grade <= 5; grade++) {
      const lessons = getLessonsForGradeAndSubject(grade, 'english');
      for (const lesson of lessons) {
        assert.ok(
          lesson.unit === 'Học kỳ 1' || lesson.unit === 'Học kỳ 2',
          `Lesson ${lesson.id} should be grouped by semester ('Học kỳ 1' or 'Học kỳ 2')`
        );
      }
    }
  });

  await t.test('All English vocabulary notes have valid IPA phonetic notation', () => {
    for (let grade = 1; grade <= 5; grade++) {
      const lessons = getLessonsForGradeAndSubject(grade, 'english');
      for (const lesson of lessons) {
        if (lesson.readingPassage && lesson.readingPassage.vocabularyNotes) {
          for (const vocab of lesson.readingPassage.vocabularyNotes) {
            assert.ok(vocab.word, `Vocab must have word in ${lesson.id}`);
            assert.ok(vocab.meaning, `Vocab must have meaning in ${lesson.id}`);
            assert.ok(vocab.phonetic, `Vocab '${vocab.word}' in ${lesson.id} must have IPA phonetic`);
            assert.match(vocab.phonetic, /^\/.*\/$/, `Vocab '${vocab.word}' in ${lesson.id} phonetic must be enclosed in /.../`);
          }
        }
      }
    }
  });

  await t.test('English SGK page mapping accurately points to unit cover and not book map index', () => {
    const g2Lessons = getLessonsForGradeAndSubject(2, 'english');
    const g2u1 = g2Lessons.find((l) => l.id === 'eng-g2-u1');
    assert.ok(g2u1, 'Grade 2 Unit 1 must exist');
    assert.equal(g2u1.sourceCitation?.sourcePages[0], 6, 'Grade 2 Unit 1 start page in textbook must be 6');
    assert.ok(
      g2u1.sourcePageImageUrls[0].includes('4914084740-page-7'),
      'Grade 2 Unit 1 must point to scan page 7 (printed page 6: Unit 1 At my birthday party) and NOT scan page 6 (Book map 5)'
    );

    const g1Lessons = getLessonsForGradeAndSubject(1, 'english');
    const g1u1 = g1Lessons.find((l) => l.id === 'eng-g1-u1');
    assert.ok(g1u1, 'Grade 1 Unit 1 must exist');
    assert.equal(g1u1.sourceCitation?.sourcePages[0], 6, 'Grade 1 Unit 1 start page in textbook must be 6');
    assert.ok(
      g1u1.sourcePageImageUrls[0].includes('4914061146-page-7'),
      'Grade 1 Unit 1 must point to scan page 7 (printed page 6: Unit 1 In the school playground)'
    );
  });
});
