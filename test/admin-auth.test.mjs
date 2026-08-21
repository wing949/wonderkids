import assert from 'node:assert/strict';
import test from 'node:test';
import {
  createAdminSession,
  hasValidAdminSession,
  isValidAdminPassword,
} from '../api/adminAuthCore.js';
import adminAuthHandler from '../api/admin-auth.js';
import { isControlPanelPath } from '../src/utils/controlPanelRoute.ts';
import { createAdminAuthRequestTracker } from '../src/utils/adminAuthRequestTracker.ts';

function createResponse() {
  return {
    headers: {},
    body: undefined,
    statusCode: 200,
    setHeader(name, value) {
      this.headers[name] = value;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(body) {
      this.body = body;
      return this;
    },
    end() {
      return this;
    },
  };
}

test('only the configured password can unlock the admin area', () => {
  assert.equal(isValidAdminPassword('MatKhau-Dung-2026', 'MatKhau-Dung-2026'), true);
  assert.equal(isValidAdminPassword('matkhau-dung-2026', 'MatKhau-Dung-2026'), false);
  assert.equal(isValidAdminPassword('', 'MatKhau-Dung-2026'), false);
});

test('a signed admin session expires and rejects tampering', () => {
  const issuedAt = 1_700_000_000_000;
  const secret = 'session-secret-very-long-2026-keep-private';
  const session = createAdminSession(secret, issuedAt);

  assert.equal(
    hasValidAdminSession(session, secret, issuedAt + 60_000),
    true
  );
  assert.equal(
    hasValidAdminSession(`${session}tampered`, secret, issuedAt + 60_000),
    false
  );
  assert.equal(
    hasValidAdminSession(session, secret, issuedAt + 9 * 60 * 60 * 1000),
    false
  );
});

test('the admin endpoint creates an HttpOnly session only after a valid password', async () => {
  const originalPassword = process.env.ADMIN_PASSWORD;
  const originalSecret = process.env.ADMIN_SESSION_SECRET;
  process.env.ADMIN_PASSWORD = 'MatKhau-Dung-2026';
  process.env.ADMIN_SESSION_SECRET = 'session-secret-very-long-2026-keep-private';

  try {
    const rejected = createResponse();
    await adminAuthHandler({ method: 'POST', body: { password: 'sai-mat-khau' }, headers: {} }, rejected);
    assert.equal(rejected.statusCode, 401);

    const accepted = createResponse();
    await adminAuthHandler({ method: 'POST', body: { password: 'MatKhau-Dung-2026' }, headers: {} }, accepted);
    assert.equal(accepted.statusCode, 204);
    assert.match(accepted.headers['Set-Cookie'], /HttpOnly/);

    const checked = createResponse();
    await adminAuthHandler({
      method: 'GET',
      headers: { cookie: accepted.headers['Set-Cookie'] },
    }, checked);
    assert.equal(checked.statusCode, 204);
  } finally {
    if (originalPassword === undefined) delete process.env.ADMIN_PASSWORD;
    else process.env.ADMIN_PASSWORD = originalPassword;
    if (originalSecret === undefined) delete process.env.ADMIN_SESSION_SECRET;
    else process.env.ADMIN_SESSION_SECRET = originalSecret;
  }
});

test('the admin endpoint rejects an oversized login request', async () => {
  const originalPassword = process.env.ADMIN_PASSWORD;
  const originalSecret = process.env.ADMIN_SESSION_SECRET;
  process.env.ADMIN_PASSWORD = 'MatKhau-Dung-2026';
  process.env.ADMIN_SESSION_SECRET = 'session-secret-very-long-2026-keep-private';

  try {
    const response = createResponse();
    await adminAuthHandler({
      method: 'POST',
      body: JSON.stringify({ password: 'x'.repeat(2_000) }),
      headers: {},
    }, response);
    assert.equal(response.statusCode, 413);
  } finally {
    if (originalPassword === undefined) delete process.env.ADMIN_PASSWORD;
    else process.env.ADMIN_PASSWORD = originalPassword;
    if (originalSecret === undefined) delete process.env.ADMIN_SESSION_SECRET;
    else process.env.ADMIN_SESSION_SECRET = originalSecret;
  }
});

test('a stale session check cannot overwrite a newer login', () => {
  const tracker = createAdminAuthRequestTracker();
  const initialCheck = tracker.begin();
  tracker.invalidate();

  assert.equal(tracker.isCurrent(initialCheck), false);
});

test('only the dedicated /cp path opens the control panel route', () => {
  assert.equal(isControlPanelPath('/cp'), true);
  assert.equal(isControlPanelPath('/cp/'), true);
  assert.equal(isControlPanelPath('/'), false);
  assert.equal(isControlPanelPath('/admin'), false);
  assert.equal(isControlPanelPath('/cp/anything'), false);
});
