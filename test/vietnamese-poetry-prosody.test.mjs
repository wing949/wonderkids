import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

import {
  POETRY_PROSODY_VERSION,
  buildVietnameseProsodyPlan,
} from '../scripts/vietnamese_poetry_prosody.mjs';

const tasks = JSON.parse(
  await readFile('scripts/target_293_structured_reading_passages.json', 'utf8'),
);

test('bài thơ dùng thể loại đã đối chiếu và giữ riêng từng khổ, từng dòng', () => {
  const plan = buildVietnameseProsodyPlan({
    title: 'Quạt cho bà ngủ',
    genre: 'poem',
    content: [
      '(1) Ơi chích chòe ơi!\nChim đừng hót nữa,\nBà em ốm rồi,\nLặng cho bà ngủ.',
      '(2) Bàn tay bé nhỏ\nVẫy quạt thật đều\nNgấn nắng thiu thiu\nĐậu trên tường trắng.',
    ],
  });

  assert.equal(plan.version, POETRY_PROSODY_VERSION);
  assert.equal(plan.genre, 'poem');
  assert.equal(plan.tempo, 0.8);
  assert.equal(plan.stanzaCount, 2);
  assert.equal(plan.lineCount, 8);
  assert.equal(plan.segments[0].kind, 'title');
  assert.equal(plan.segments[0].pauseAfterMs, 640);
  assert.equal(plan.segments[1].text, 'Ơi chích chòe ơi!');
  assert.equal(plan.segments[1].pauseAfterMs, 320);
  assert.equal(plan.segments[4].pauseAfterMs, 560);
  assert.equal(plan.segments.at(-1).pauseAfterMs, 0);
  assert.ok(plan.segments.every((segment) => !/^\(\d+\)/u.test(segment.text)));
});

test('văn xuôi không bị áp dụng nhịp thơ', () => {
  const plan = buildVietnameseProsodyPlan({
    title: 'Bữa cơm gia đình',
    genre: 'prose',
    content: [
      'Thấy mẹ đi chợ về, Chi hỏi:',
      '– Sao mẹ mua nhiều đồ ăn thế ạ?',
    ],
  });

  assert.equal(plan.genre, 'prose');
  assert.equal(plan.tempo, 1);
  assert.equal(plan.stanzaCount, 0);
  assert.equal(plan.lineCount, 0);
  assert.equal(plan.segments.length, 1);
  assert.match(plan.segments[0].text, /^Bữa cơm gia đình\n/u);
});

test('293 tác vụ dùng thể loại SGK rõ ràng, không suy đoán theo độ dài dòng', () => {
  assert.equal(tasks.length, 293);
  assert.ok(tasks.every((task) => ['poem', 'story', 'prose'].includes(task.readingPassage?.genre)));

  const poemIds = tasks
    .filter((task) => task.readingPassage.genre === 'poem')
    .map((task) => task.lessonId);
  assert.equal(poemIds.length, 87);
  assert.ok(
    tasks
      .filter((task) => task.readingPassage.genre === 'poem')
      .every((task) => task.readingPassage.stanzaBoundariesVerified === true),
    'Bài thơ phát hành phải có ranh giới khổ đã duyệt, không dùng quy tắc chia bốn dòng ngầm định',
  );
  assert.ok(!poemIds.includes('tv-g1-b30'), 'Bữa cơm gia đình là văn xuôi, không phải thơ');

  for (const lessonId of [
    'tv-g2-b2',
    'tv-g2-b16',
    'tv-g2-t2-b30',
    'tv-g3-t1-b28',
    'tv-g3-b19',
    'tv-g3-b21',
  ]) {
    assert.ok(poemIds.includes(lessonId), `${lessonId} phải được nhận diện là thơ`);
  }

  const quatChoBaNgu = tasks.find((task) => task.lessonId === 'tv-g1-b29');
  assert.equal(quatChoBaNgu.prosodyPlan.stanzaCount, 4, 'Số khổ in trong SGK không được tách thành khổ mới');
  assert.equal(quatChoBaNgu.prosodyPlan.lineCount, 16);

  for (const [lessonId, stanzaCount] of [
    ['tv-g1-b23', 4],
    ['tv-g1-t2-b19', 4],
    ['tv-g2-t2-b13', 3],
    ['tv-g2-t2-b30', 4],
    ['tv-g5-b19', 5],
  ]) {
    const task = tasks.find((item) => item.lessonId === lessonId);
    assert.equal(task.prosodyPlan.stanzaCount, stanzaCount, `${lessonId} phải giữ đúng số khổ đã duyệt`);
  }
});
