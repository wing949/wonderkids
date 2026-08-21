import {
  ADMIN_SESSION_COOKIE,
  clearAdminSessionCookie,
  createAdminSession,
  createAdminSessionCookie,
  getAdminAuthConfig,
  hasValidAdminSession,
  isValidAdminPassword,
  readCookie,
} from './adminAuthCore.js';

const MAX_LOGIN_BODY_BYTES = 2_000;

function createRequestTooLargeError() {
  const error = new Error('Yêu cầu đăng nhập quá dài.');
  error.statusCode = 413;
  return error;
}

function getRequestBody(req) {
  if (typeof req.body === 'string') {
    if (Buffer.byteLength(req.body) > MAX_LOGIN_BODY_BYTES) throw createRequestTooLargeError();
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }

  const body = req.body || {};
  if (Buffer.byteLength(JSON.stringify(body)) > MAX_LOGIN_BODY_BYTES) throw createRequestTooLargeError();
  return body;
}

function isSecureRequestEnvironment() {
  return process.env.NODE_ENV === 'production' || process.env.VERCEL === '1';
}

export default async function handler(req, res) {
  const config = getAdminAuthConfig();
  if (!config) {
    return res.status(503).json({ error: 'Quản trị chưa được cấu hình mật khẩu trên máy chủ.' });
  }

  const secure = isSecureRequestEnvironment();

  if (req.method === 'GET') {
    const session = readCookie(req.headers?.cookie, ADMIN_SESSION_COOKIE);
    if (!hasValidAdminSession(session, config.sessionSecret)) {
      return res.status(401).json({ error: 'Phiên quản trị đã hết hạn.' });
    }
    return res.status(204).end();
  }

  if (req.method === 'POST') {
    let password;
    try {
      ({ password } = getRequestBody(req));
    } catch (error) {
      return res.status(error.statusCode || 400).json({ error: error.message });
    }
    if (!isValidAdminPassword(password, config.password)) {
      return res.status(401).json({ error: 'Mật khẩu chưa đúng.' });
    }

    const session = createAdminSession(config.sessionSecret);
    res.setHeader('Set-Cookie', createAdminSessionCookie(session, secure));
    return res.status(204).end();
  }

  if (req.method === 'DELETE') {
    res.setHeader('Set-Cookie', clearAdminSessionCookie(secure));
    return res.status(204).end();
  }

  res.setHeader('Allow', 'GET, POST, DELETE');
  return res.status(405).json({ error: 'Phương thức không được hỗ trợ.' });
}
