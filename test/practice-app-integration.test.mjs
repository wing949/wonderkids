import assert from 'node:assert/strict';
import { test } from 'node:test';
import { getPortalForRoute } from '../src/utils/portalRoute.ts';

test('mọi URL luyện đề đều mở đúng cổng luyện đề', () => {
  assert.equal(getPortalForRoute({ kind: 'practice-hub' }), 'practice');
  assert.equal(getPortalForRoute({ kind: 'practice-list', subject: 'math', grade: 1 }), 'practice');
  assert.equal(getPortalForRoute({ kind: 'practice-set', subject: 'english', grade: 5, setNumber: 12 }), 'practice');
});

test('các cổng hiện có không bị đổi luồng', () => {
  assert.equal(getPortalForRoute({ kind: 'student' }), 'student');
  assert.equal(getPortalForRoute({ kind: 'arena' }), 'practice');
  assert.equal(getPortalForRoute({ kind: 'parent' }), 'parent');
  assert.equal(getPortalForRoute({ kind: 'admin', tab: 'curriculum' }), 'admin-login');
});
