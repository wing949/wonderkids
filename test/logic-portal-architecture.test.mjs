import assert from 'node:assert/strict';
import { parseAppRoute, getAppPath } from '../src/utils/appRoute.ts';
import { getPortalForRoute } from '../src/utils/portalRoute.ts';
import { LOGIC_GAMES_METADATA, LOGIC_ITEMS_POOL, PATTERN_QUESTIONS_POOL } from '../src/data/logicGamesData.ts';

console.log('--- Testing Be Tu Duy Logic Portal Architecture ---');

// 1. Test URL Parsing
const hubRoute1 = parseAppRoute('/tu-duy');
assert.deepEqual(hubRoute1, { kind: 'logic-hub' }, 'Should parse /tu-duy to logic-hub');

const hubRoute2 = parseAppRoute('/logic');
assert.deepEqual(hubRoute2, { kind: 'logic-hub' }, 'Should parse /logic to logic-hub');

const gameRoute1 = parseAppRoute('/tu-duy/vat-gi-bien-mat');
assert.deepEqual(gameRoute1, { kind: 'logic-game', gameId: 'vat-gi-bien-mat' }, 'Should parse /tu-duy/vat-gi-bien-mat');

const gameRoute2 = parseAppRoute('/tu-duy/lat-the-tim-doi?cap-do=2');
assert.deepEqual(gameRoute2, { kind: 'logic-game', gameId: 'lat-the-tim-doi', level: 2 }, 'Should parse /tu-duy/lat-the-tim-doi with level');

const gameRoute3 = parseAppRoute('/tu-duy/tim-quy-luat');
assert.deepEqual(gameRoute3, { kind: 'logic-game', gameId: 'tim-quy-luat' }, 'Should parse /tu-duy/tim-quy-luat');

const gameRoute4 = parseAppRoute('/tu-duy/me-cung');
assert.deepEqual(gameRoute4, { kind: 'logic-game', gameId: 'me-cung' }, 'Should parse /tu-duy/me-cung');

console.log('PASS: 1. URL Parsing tests passed');

// 2. Test Path Generation
assert.equal(getAppPath({ kind: 'logic-hub' }), '/tu-duy', 'logic-hub path should be /tu-duy');
assert.equal(getAppPath({ kind: 'logic-game', gameId: 'vat-gi-bien-mat' }), '/tu-duy/vat-gi-bien-mat', 'logic-game path should match');
assert.equal(getAppPath({ kind: 'logic-game', gameId: 'lat-the-tim-doi', level: 3 }), '/tu-duy/lat-the-tim-doi?cap-do=3', 'logic-game with level path should match');

console.log('PASS: 2. Path Generation tests passed');

// 3. Test Portal Mapping
assert.equal(getPortalForRoute({ kind: 'logic-hub' }), 'logic', 'Portal for logic-hub should be logic');
assert.equal(getPortalForRoute({ kind: 'logic-game', gameId: 'vat-gi-bien-mat' }), 'logic', 'Portal for logic-game should be logic');

console.log('PASS: 3. Portal Mapping tests passed');

// 4. Test Data Integrity
assert.equal(LOGIC_GAMES_METADATA.length, 4, 'Must have 4 logic games');
assert.ok(LOGIC_ITEMS_POOL.length >= 20, 'Must have at least 20 items in pool');
assert.ok(PATTERN_QUESTIONS_POOL.length >= 5, 'Must have at least 5 pattern questions');

const gameIds = LOGIC_GAMES_METADATA.map((g) => g.id);
assert.ok(gameIds.includes('vat-gi-bien-mat'));
assert.ok(gameIds.includes('lat-the-tim-doi'));
assert.ok(gameIds.includes('tim-quy-luat'));
assert.ok(gameIds.includes('me-cung'));

console.log('PASS: 4. Data Integrity tests passed');
console.log('SUCCESS: All Logic Portal Architecture Tests Passed Successfully!');
