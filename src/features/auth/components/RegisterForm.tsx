import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerWithEmailAndPassword } from '../api/auth';
import type { RegisterInput } from '../types';
import axios from 'axios';

export const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterInput>({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id === 'confirm-password' ? 'confirm_password' : e.target.id]: e.target.value,
    });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (formData.password !== formData.confirm_password) {
        setError('Password dan Konfirmasi Password tidak cocok');
        setIsLoading(false);
        return;
    }

    try {
      await registerWithEmailAndPassword(formData);
      navigate('/login');
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.error || 'Terjadi kesalahan saat mendaftar');
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
            <h1 className="text-[#181211] text-xl font-bold tracking-tight">Buat Akun Baru</h1>
            <p className="text-slate-500 text-xs">Mulai perjalanan belajarmu sekarang.</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm mb-4 border border-red-200">
              {error}
            </div>
          )}

          {/* Form */}
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-[#181211] text-xs font-medium leading-normal">Nama Lengkap</label>
              <div className="relative">
                <input 
                  id="name" 
                  type="text" 
                  placeholder="Masukkan nama lengkap" 
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-[#181211] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-slate-200 bg-white focus:border-primary h-9 placeholder:text-slate-400 px-3 text-sm font-normal transition-all shadow-sm"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

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

            {/* Confirm Password Field */}
            <div className="flex flex-col gap-1">
              <label htmlFor="confirm-password" className="text-[#181211] text-xs font-medium leading-normal">Konfirmasi Kata Sandi</label>
              <div className="relative">
                <input 
                  id="confirm-password" 
                  type="password" 
                  placeholder="••••••••" 
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-[#181211] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-slate-200 bg-white focus:border-primary h-9 placeholder:text-slate-400 px-3 text-sm font-normal transition-all shadow-sm"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isLoading}
              className="mt-2 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-md h-9 px-4 bg-primary hover:bg-primary-hover text-white text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-primary/30 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Mendaftar...' : 'Daftar Sekarang'}
            </button>

            {/* Divider */}
            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="flex-shrink-0 mx-4 text-slate-400 text-xs">ATAU</span>
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
              <span className="truncate">Daftar dengan Google</span>
            </button>
          </form>

          {/* Footer Link */}
          <p className="text-center text-xs text-slate-500">
            Sudah punya akun? 
            <Link to="/login" className="font-semibold text-primary hover:underline ml-1">Masuk disini</Link>
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
