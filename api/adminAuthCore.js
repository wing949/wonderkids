import { createHash, createHmac, timingSafeEqual } from 'node:crypto';

export const ADMIN_SESSION_COOKIE = 'wonderkids_admin_session';
const SESSION_LIFETIME_MS = 8 * 60 * 60 * 1000;

function hash(value) {
  return createHash('sha256').update(value).digest();
}

function signature(payload, secret) {
  return createHmac('sha256', secret).update(payload).digest('base64url');
}

function constantTimeEquals(left, right) {
  return timingSafeEqual(hash(left), hash(right));
}

export function isValidAdminPassword(password, configuredPassword) {
  return (
    typeof password === 'string' &&
    typeof configuredPassword === 'string' &&
    password.length > 0 &&
    configuredPassword.length > 0 &&
    constantTimeEquals(password, configuredPassword)
  );
}

export function createAdminSession(sessionSecret, issuedAt = Date.now()) {
  if (typeof sessionSecret !== 'string' || sessionSecret.length < 32) return '';

  const payload = Buffer.from(JSON.stringify({ exp: issuedAt + SESSION_LIFETIME_MS, v: 1 })).toString('base64url');
  return `${payload}.${signature(payload, sessionSecret)}`;
}

export function hasValidAdminSession(session, sessionSecret, now = Date.now()) {
  if (typeof session !== 'string' || typeof sessionSecret !== 'string' || sessionSecret.length < 32) {
    return false;
  }

  const [payload, receivedSignature, ...extraParts] = session.split('.');
  if (!payload || !receivedSignature || extraParts.length > 0) return false;
  if (!constantTimeEquals(receivedSignature, signature(payload, sessionSecret))) return false;

  try {
    const decoded = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    return decoded?.v === 1 && Number.isFinite(decoded.exp) && decoded.exp > now;
  } catch {
    return false;
  }
}

export function getAdminAuthConfig(env = process.env) {
  const password = env.ADMIN_PASSWORD;
  const sessionSecret = env.ADMIN_SESSION_SECRET;
  if (typeof password !== 'string' || !password || typeof sessionSecret !== 'string' || sessionSecret.length < 32) {
    return null;
  }
  return { password, sessionSecret };
}

export function readCookie(cookieHeader, name) {
  if (!cookieHeader) return '';
  const entry = cookieHeader.split(';').map((part) => part.trim()).find((part) => part.startsWith(`${name}=`));
  return entry ? decodeURIComponent(entry.slice(name.length + 1)) : '';
}

export function createAdminSessionCookie(session, secure = false) {
  return [
    `${ADMIN_SESSION_COOKIE}=${encodeURIComponent(session)}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Strict',
    `Max-Age=${SESSION_LIFETIME_MS / 1000}`,
    ...(secure ? ['Secure'] : []),
  ].join('; ');
}

export function clearAdminSessionCookie(secure = false) {
  return [
    `${ADMIN_SESSION_COOKIE}=`,
    'Path=/',
    'HttpOnly',
    'SameSite=Strict',
    'Max-Age=0',
    ...(secure ? ['Secure'] : []),
  ].join('; ');
}
