'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { signIn } from 'next-auth/react';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError('Email atau password salah. Silakan coba lagi.');
      } else if (res?.ok) {
        router.push('/admin/dashboard');
        router.refresh();
      }
    } catch (err) {
      setError('Terjadi kesalahan sistem. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Dynamic Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-950/40 via-slate-950 to-black pointer-events-none" />

      <div className="w-full max-w-md bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950/40 border border-teal-500/20 rounded-3xl p-8 shadow-[inset_0_2px_4px_rgba(255,255,255,0.03),0_25px_50px_rgba(0,0,0,0.9)] backdrop-blur-2xl relative z-10">
        <div className="flex flex-col items-center text-center gap-3 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 to-black border border-teal-500/30 flex items-center justify-center text-orange-400 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_8px_16px_rgba(0,0,0,0.6)]">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-extrabold text-white">
            Admin <span className="bg-gradient-to-r from-teal-400 to-orange-500 bg-clip-text text-transparent">Authentication</span>
          </h1>
          <p className="text-xs text-teal-300/80">Masuk untuk mengelola portfolio, sertifikat Google Drive & social links.</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          {error && (
            <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-teal-300/80 mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@ilham.dev"
                required
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-950 border border-teal-900/40 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-teal-300/80 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-950 border border-teal-900/40 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 disabled:opacity-50 text-white font-bold text-xs shadow-[0_8px_20px_rgba(249,115,22,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:shadow-[0_12px_28px_rgba(249,115,22,0.6)] transition-all active:scale-95 cursor-pointer border border-orange-400/50"
          >
            {loading ? 'Memproses...' : 'Access Dashboard'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </main>
  );
}
