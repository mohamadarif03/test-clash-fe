import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginWithEmailAndPassword } from '../api/auth';
import type { LoginInput } from '../types';
import axios from 'axios';

export const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginInput>({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await loginWithEmailAndPassword(formData);
      localStorage.setItem('token', response.token);
      navigate('/dashboard');
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.error || 'Email atau kata sandi salah');
      } else {
        setError('Terjadi kesalahan yang tidak terduga');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full lg:w-1/2 flex-col bg-white overflow-y-auto h-full">
      <div className="flex-1 flex flex-col justify-center items-center px-4 py-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="w-full max-w-[320px] sm:max-w-[360px] flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 mb-0.5 text-primary">
              <span className="material-symbols-outlined text-2xl">verified</span>
              <span className="text-lg font-black tracking-tighter text-[#181211]">Test Clash</span>
            </div>
            <h1 className="text-[#181211] text-xl font-bold tracking-tight">Selamat Datang Kembali</h1>
            <p className="text-slate-500 text-xs">Silakan masukkan detail Anda untuk masuk.</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm border border-red-200">
              {error}
            </div>
          )}

          {/* Form */}
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-[#181211] text-xs font-medium leading-normal">Email</label>
              <div className="relative">
                <input 
                  id="email" 
                  type="email" 
                  placeholder="Masukkan email Anda" 
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-[#181211] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-slate-200 bg-white focus:border-primary h-9 placeholder:text-slate-400 px-3 text-sm font-normal transition-all shadow-sm"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-[#181211] text-xs font-medium leading-normal">Kata Sandi</label>
              <div className="relative">
                <input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-[#181211] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-slate-200 bg-white focus:border-primary h-9 placeholder:text-slate-400 px-3 text-sm font-normal transition-all shadow-sm"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Forgot Password & Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded border-slate-300 text-primary focus:ring-primary w-3.5 h-3.5"
                />
                <span className="text-xs text-slate-600">Ingat saya</span>
              </label>
              <a href="#" className="text-xs font-semibold text-primary hover:text-primary-hover transition-colors">Lupa Kata Sandi?</a>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isLoading}
              className="mt-1 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-md h-9 px-4 bg-primary hover:bg-primary-hover text-white text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-primary/30 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Masuk...' : 'Masuk'}
            </button>

            {/* Divider */}
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="flex-shrink-0 mx-4 text-slate-400 text-sm">ATAU</span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>

            {/* Google Sign In */}
            <button 
              type="button" 
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md h-9 px-4 border border-slate-200 bg-white hover:bg-slate-50 text-[#181211] text-xs font-semibold transition-all shadow-sm"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.0003 20.45c4.6667 0 8.45-3.7833 8.45-8.45 0-.6667-.0667-1.3-.1833-1.9H12.0003v3.75h4.6333c-.35 1.8833-2.0333 3.3-4.6333 3.3-2.7333 0-4.9666-2.2333-4.9666-4.9667s2.2333-4.9667 4.9666-4.9667c1.2667 0 2.4167.4667 3.3 1.2333l2.6667-2.6666C16.3669 4.3167 14.3003 3.55 12.0003 3.55c-4.6667 0-8.45 3.7833-8.45 8.45s3.7833 8.45 8.45 8.45z" fill="#4285F4"></path>
              </svg>
              <span className="truncate">Masuk dengan Google</span>
            </button>
          </form>

          {/* Footer Link */}
          <p className="text-center text-xs text-slate-500">
            Belum punya akun? 
            <Link to="/register" className="font-semibold text-primary hover:underline ml-1">Daftar sekarang</Link>
          </p>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="py-2 text-center">
        <p className="text-xs text-slate-400">© 2026 Test Clash. All rights reserved.</p>
      </div>
    </div>
  );
};
