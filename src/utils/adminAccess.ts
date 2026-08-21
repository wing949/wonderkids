type AdminLoginResult = { ok: true } | { ok: false; error: string };

async function getErrorMessage(response: Response) {
  try {
    const body = await response.json();
    if (typeof body?.error === 'string') return body.error;
  } catch {}
  return 'Không thể xác thực quản trị. Vui lòng thử lại.';
}

export async function checkAdminSession(): Promise<boolean> {
  try {
    const response = await fetch('/api/admin-auth', { credentials: 'same-origin' });
    return response.ok;
  } catch {
    return false;
  }
}

export async function loginAdmin(password: string): Promise<AdminLoginResult> {
  try {
    const response = await fetch('/api/admin-auth', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    return response.ok ? { ok: true } : { ok: false, error: await getErrorMessage(response) };
  } catch {
    return { ok: false, error: 'Không kết nối được máy chủ. Vui lòng thử lại.' };
  }
}

export async function logoutAdmin(): Promise<boolean> {
  try {
    const response = await fetch('/api/admin-auth', { method: 'DELETE', credentials: 'same-origin' });
    return response.ok;
  } catch {
    return false;
  }
}
