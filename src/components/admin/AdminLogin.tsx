import React, { useState } from 'react';
import { ArrowLeft, KeyRound, LoaderCircle, LockKeyhole, ShieldCheck } from 'lucide-react';
import { loginAdmin } from '../../utils/adminAccess';
import { soundManager } from '../../utils/audio';

interface AdminLoginProps {
  onAuthenticated: () => void;
  onBackToStudent: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onAuthenticated, onBackToStudent }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!password.trim()) {
      setError('Vui lòng nhập mật khẩu quản trị.');
      return;
    }

    setError('');
    setIsSubmitting(true);
    const result = await loginAdmin(password);
    setIsSubmitting(false);

    if (!result.ok) {
      soundManager.playIncorrect();
      setError(result.error);
      return;
    }

    soundManager.playCorrect();
    setPassword('');
    onAuthenticated();
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] px-4 py-10 sm:py-16">
      <section className="mx-auto w-full max-w-md rounded-[2rem] border border-amber-100 bg-[#fffdf9]/95 p-6 shadow-washi sm:p-8">
        <button
          type="button"
          onClick={onBackToStudent}
          className="mb-7 flex min-h-12 items-center gap-2 rounded-2xl px-3 font-baloo text-sm font-bold text-slate-600 transition hover:bg-amber-50 active:translate-y-0.5"
        >
          <ArrowLeft size={18} /> Về Góc Bé
        </button>

        <div className="mb-7 text-center">
          <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-400 text-amber-950 shadow-pop-sm">
            <ShieldCheck size={32} />
          </span>
          <h1 className="font-baloo text-3xl font-extrabold text-brand-dark">Đăng nhập quản trị</h1>
          <p className="mt-2 font-vietnam text-sm font-medium leading-relaxed text-slate-600">
            Khu vực này dành cho giáo viên và người quản lý WonderKids.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block" htmlFor="admin-password">
            <span className="mb-2 flex items-center gap-2 font-baloo text-sm font-bold text-slate-700">
              <KeyRound size={17} /> Mật khẩu quản trị
            </span>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              autoFocus
              className="min-h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 font-vietnam text-base text-brand-dark outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
              placeholder="Nhập mật khẩu"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? 'admin-password-error' : undefined}
            />
          </label>

          {error && (
            <p id="admin-password-error" role="alert" className="rounded-2xl bg-rose-50 px-4 py-3 font-vietnam text-sm font-semibold text-rose-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex min-h-14 w-full items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-amber-400 px-5 font-baloo text-base font-extrabold text-amber-950 shadow-pop-sm transition hover:bg-amber-300 active:translate-y-1 active:shadow-none disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? <LoaderCircle className="animate-spin" size={20} /> : <LockKeyhole size={20} />}
            {isSubmitting ? 'Đang kiểm tra…' : 'Mở khu vực quản trị'}
          </button>
        </form>
      </section>
    </div>
  );
};
