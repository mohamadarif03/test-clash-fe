export const LoginIllustration = () => {
  return (
    <div className="hidden lg:flex w-1/2 relative flex-col items-center justify-center bg-gradient-to-br from-royal-blue-start to-royal-blue-end overflow-hidden p-6">
      {/* Decorative background elements */}
      <div 
        className="absolute inset-0 bg-[url('https://placeholder.pics/svg/1000/000000/000000')] opacity-10 mix-blend-overlay" 
        data-alt="Subtle geometric pattern background overlay"
      ></div>
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Illustration Placeholder */}
        <div className="mb-10 relative">
          {/* Glowing effect behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-400 rounded-full blur-[100px] opacity-40"></div>
          <img 
            alt="Student with headphones studying with floating educational icons" 
            className="relative w-full max-w-[280px] h-auto object-contain drop-shadow-2xl rounded-2xl border-4 border-white/10" 
            data-alt="Stylized student character with headphones and glowing books" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHHDnQbX9jId8q_CsdSioMceQm5ZQPkYdO67gUOp6zKVGvOnOvAv43J6bl0G1_OAsNB4FiONAdsrNikyOWQ0-AHruaSMETBdC9LhEBXuTdszX5HMD_pwvMRYf-NB66OSqfb3t6jY7bjh7hOAJTCAm21ftA1bhZBpEVksNjpchbYup0Ru_f4yl3HGggI5q4PVN4SpPf1mmkkRxZWGRa2UAsrwJLe7CWKuOtSpt1dltGHP0jxYH-Bok9qphTQYZrijQq_LY53fNZIGo2"
          />
        </div>
        
        <h2 className="text-white text-2xl font-black tracking-tight mb-2 drop-shadow-lg">
          Tingkatkan Cara Belajarmu
        </h2>
        <p className="text-blue-100 text-sm font-light leading-relaxed max-w-xs">
          Bergabunglah dengan ribuan siswa di platform belajar gamifikasi paling seru. Belajar cerdas, menang banyak.
        </p>
      </div>

      {/* Floating Icons (Simulated with Material Symbols) */}
      <span className="material-symbols-outlined absolute top-20 left-20 text-white/20 text-6xl animate-pulse">sports_esports</span>
      <span className="material-symbols-outlined absolute bottom-32 right-20 text-white/20 text-7xl">school</span>
      <span className="material-symbols-outlined absolute top-1/2 right-10 text-white/10 text-5xl">menu_book</span>
      <span className="material-symbols-outlined absolute bottom-20 left-32 text-white/10 text-6xl">emoji_events</span>
    </div>
  );
};
