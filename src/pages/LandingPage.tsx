

import { Link } from 'react-router-dom';

export const LandingNavbar = () => {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-slate-200 bg-white/80 backdrop-blur-md px-4 py-3 md:px-10 lg:px-40">
            <div className="flex items-center gap-4 text-slate-900">
                <div className="size-8 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">sports_esports</span>
                </div>
                <h2 className="text-slate-900 text-xl font-black leading-tight tracking-[-0.015em]">Test-Clash</h2>
            </div>
            <div className="hidden md:flex flex-1 justify-center gap-8">
                <a className="text-slate-700 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#features">Fitur</a>
                <a className="text-slate-700 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#rankings">Peringkat</a>
                <a className="text-slate-700 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#showcase">Aplikasi</a>
            </div>
            <div className="flex gap-3">
                <Link to="/login">
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-transparent hover:bg-slate-100 text-slate-700 text-sm font-bold leading-normal tracking-[0.015em] transition-colors">
                    <span className="truncate">Masuk</span>
                </button>
                </Link>
                <Link to="/register">
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-primary-hover text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/30 transition-all hover:scale-105">
                    <span className="truncate">Daftar Sekarang</span>
                </button>
                </Link>
            </div>
        </header>

    );
}

export const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center px-4 py-12 md:px-10 lg:px-40 lg:py-24 bg-white">
            <div className="max-w-[1200px] w-full">
                <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
                    <div className="flex flex-col gap-6 lg:w-1/2 text-center lg:text-left">
                        <div className="flex flex-col gap-4">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-xs font-bold uppercase tracking-wider w-fit mx-auto lg:mx-0">
                                #1 Gamified Learning Platform
                            </span>
                            <h1 className="text-slate-900 text-4xl font-black leading-[1.1] tracking-[-0.033em] md:text-5xl lg:text-6xl">
                                Stop Belajar Sendirian. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-royal-blue-end">Saatnya Push Rank</span> Menuju PTN!
                            </h1>
                            <h2 className="text-slate-500 text-lg font-normal leading-relaxed md:text-xl">
                                Platform persiapan UTBK gamified pertama untuk Gen Z. Ubah stress belajar jadi seru seperti main game.
                            </h2>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <button className="flex h-12 px-8 cursor-pointer items-center justify-center rounded-full bg-primary hover:bg-primary-hover text-white text-base font-bold tracking-[0.015em] shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
                                <span className="truncate">Mulai Battle Sekarang</span>
                                <span className="material-symbols-outlined ml-2 text-xl">bolt</span>
                            </button>
                            <button className="flex h-12 px-8 cursor-pointer items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-base font-bold tracking-[0.015em] transition-colors">
                                <span className="truncate">Pelajari Cara Main</span>
                            </button>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 pt-2">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center" data-alt="User avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7SacRR_nE_3Lz__Pin_PwY7NL9vrX1BpaH7FBER7xddmrgl-HtGHyLdPDw94tYfDcTjTKulbDaX4m2ALeiJ4l-rvyvNY447qe2vhRt7eu7quR-RCF6tX6NHC7UYkNOOwgu6hEJQwj_qyPT5Fy5Empo89ShUx5l41ZQJkkA0hiHFwFoYDTem2MatUjNXu41x4Ux3XavI7A2ciasdtIpsme05cThRkIX3BH2xjZv3fEx_3_zFBsiCHzGFgKLoiUeYNE4nSXwnvRqlYX")' }}></div>
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center" data-alt="User avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvoMYHmlNlTH3NH13OVEqWVXcEjwuUp6S0L-J5ogaIfSu0W_XOlegXjaE9yzcNX2oJJXWMq2omla49_YlgSw-wnEu2Qk4QCrt2Ucnt4ueLMb2SZXrXA9IkYkJdM3AS-lEdNYPOn2M5EjStQWtjmZAjJNe3QzseLVx17yFIJfGaIm9X8pgn4tP3cFO_agxSP0UW1J4i86eatdRswpLtI9jXIwPkxBrtwH2TxA6X-er_uo_PqcmeGxT3DmzsVvpkt-kOIeVK_LwAe2wq")' }}></div>
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center" data-alt="User avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEZlCFT8AlL19iTwnLCXPwwJVhW9iYFdsQT3648clavAX5d3ttRcUUHm_wzLGmkV9GC-y2w-3Jk6Zt3OliIy6iNZxiBFOGcKwoB4E5gAMlH4Rf3ws0nORsFQNAYmJXrZXpErT_6kudDP7h7AjYJrwRxa8Y5nU3Cszo08Wr_AQ6BUQ9JGIA8WDwqFzac2rI8QUKON-GBDTLq2A7O8WGy188ov2xKKj8hTjGG17of5YNxM7QdoJCXaD1pTBQzSgwsYk4eMpINcjmem0t")' }}></div>
                            </div>
                            <p>Bergabung dengan 10.000+ Pejuang PTN</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-royal-blue-start/20 rounded-full blur-[100px] opacity-60"></div>
                        <div className="relative w-full aspect-square md:aspect-[4/3] bg-center bg-contain bg-no-repeat rounded-2xl animate-float" data-alt="3D illustration of digital learning environment with vibrant colors" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC48buUjJmmH9_XTIaCNbBE7PreBWB6QP7a_2xxeLduzoqlsz2soU0j20_SXgRhcUetkTFELdz0PD4lCDEcQZ54lKjLa7zDWn2oJXX8kb8bx3LXv-N_TD9s4uXz-XZKypACOaNiKQqG3Zl0t8V2Fhk5ibQzCcICC4QWWPY3pAEcWzy86M2PmRiGfDrpUsHfyvZUckIMxjfE1PDC1vwfKyv2nS5Ilamoyfx82zIuqVxombtMkqmPXQY-YuRgHVfkyc0pRnzpL1LirRaU")' }}>
                            {/* Overlay for effect */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50 transform rotate-1 md:bottom-10 md:left-10 md:right-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">emoji_events</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-slate-900">Menang! +500 XP</p>
                                        <div className="w-full bg-slate-200 rounded-full h-1.5 mt-1 w-32">
                                            <div className="bg-primary h-1.5 rounded-full" style={{ width: '70%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export const FeaturesSection = () => {
    return (
        <section className="py-20 px-4 md:px-10 lg:px-40 bg-slate-50" id="features">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
                <div className="text-center max-w-[720px] mx-auto">
                    <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Keunggulan</h2>
                    <h1 className="text-slate-900 text-3xl md:text-4xl font-black leading-tight">
                        Kenapa Harus Kami?
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">local_fire_department</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-slate-900 text-xl font-bold leading-tight">Gamified Learning</h2>
                            <p className="text-slate-500 text-base leading-relaxed">
                                Belajar seru seperti main game RPG. Kumpulkan XP, naik level, dan unlock badge prestasi setiap kali menyelesaikan materi.
                            </p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-indigo-50 text-royal-blue-start flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">swords</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-slate-900 text-xl font-bold leading-tight">1vs1 Real-Time Duel</h2>
                            <p className="text-slate-500 text-base leading-relaxed">
                                Tanding pengetahuan UTBK secara langsung melawan teman atau pemain acak dari seluruh Indonesia. Siapa cepat, dia menang!
                            </p>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">psychology</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-slate-900 text-xl font-bold leading-tight">AI Evaluator</h2>
                            <p className="text-slate-500 text-base leading-relaxed">
                                Evaluasi cerdas berbasis AI yang menganalisis kelemahanmu dan memberikan rekomendasi soal yang tepat untuk progress maksimal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export const ShowcaseSection = () => {
    return (
        <section className="py-20 px-4 md:px-10 lg:px-40 bg-white overflow-hidden" id="showcase">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
                {/* Showcase 1: Leaderboard (Image Left, Text Right) */}
                <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="absolute inset-0 bg-blue-100 rounded-3xl transform -rotate-6 scale-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                            <div className="w-full h-full bg-cover bg-top" data-alt="Dashboard UI showing rankings and data charts" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1VX77-xRGKN6TspG0n_TGV97qh6okKAjH0O2vTT2w3VntMfh5ft71_ZSZrCzJHOSwKVZTvgkG1YrwJSns4y7eDkDbHNtmaPdYTaDmEOutBN3B5eAj4wWJWA2wV8F9Jj-H9kTwxvXlr8EX6Lox-OGlGe974Ak77lmUDI53xjCxRTKAzo9MfeDOuuEmkwWp7Pur221qJIabyWNngEkxjnK0ZoRNrUsSCgDE8ZEuUQLQYCJ7mXnrqME10i093GVgNel6U2aIu6SGvBDa")' }}></div>
                            {/* UI Overlay Mockup */}
                            <div className="absolute top-0 right-0 p-4 w-1/2">
                                <div className="bg-white/90 backdrop-blur rounded-lg shadow-lg p-3 border border-slate-100">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-bold text-slate-400">PERINGKAT KAMU</span>
                                        <span className="text-xs font-bold text-emerald-500">▲ 24</span>
                                    </div>
                                    <div className="text-2xl font-black text-primary">#42</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-2">
                            <span className="material-symbols-outlined">leaderboard</span>
                        </div>
                        <h2 className="text-slate-900 text-3xl md:text-4xl font-black leading-tight">
                            Leaderboard Tier List
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            Buktikan kemampuanmu! Cek peringkat secara global, regional, atau antar sekolah. Sistem Tier dari Bronze hingga Mythic membuatmu termotivasi untuk terus push rank akademik.
                        </p>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-green-500">check_circle</span>
                                <span className="text-slate-900 font-medium">Global Ranking Real-time</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-green-500">check_circle</span>
                                <span className="text-slate-900 font-medium">Sistem Liga Mingguan</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-green-500">check_circle</span>
                                <span className="text-slate-900 font-medium">Hadiah Eksklusif Top Player</span>
                            </div>
                        </div>
                        <button className="mt-4 text-primary font-bold flex items-center hover:gap-2 transition-all">
                            Lihat Ranking Saat Ini <span className="material-symbols-outlined ml-1">arrow_forward</span>
                        </button>
                    </div>
                </div>
                {/* Showcase 2: Pomodoro (Text Left, Image Right) */}
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-20">
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-2">
                            <span className="material-symbols-outlined">timer</span>
                        </div>
                        <h2 className="text-slate-900 text-3xl md:text-4xl font-black leading-tight">
                            Study Material &amp; Pomodoro
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            Materi belajar lengkap yang terintegrasi langsung dengan Pomodoro Timer. Fokus belajar 25 menit, istirahat 5 menit, tanpa gangguan. Dapatkan bonus item game setiap sesi fokus selesai!
                        </p>
                        <ul className="space-y-4 mt-2">
                            <li className="flex items-start gap-3">
                                <div className="mt-1 size-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">1</div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Materi Terupdate</h4>
                                    <p className="text-sm text-slate-500">Sesuai kisi-kisi UTBK SNBT terbaru.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 size-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">2</div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Modus Fokus</h4>
                                    <p className="text-sm text-slate-500">Blokir notifikasi saat timer berjalan.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="absolute inset-0 bg-blue-50 rounded-3xl transform rotate-3 scale-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                            <div className="w-full h-full bg-cover bg-center" data-alt="Student studying with tablet and notes" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGgQEQ0MJLt2ejNB4trwyCzZ_9nvfR_PCCriknwO8rr95Fa2VWaEXOoo-imIXJm3_9ad7nLbv-yKLe2uaHknD9ePubWHTeyI7HNq3mfKtUR7cl7aGo7VRRMbcsrfkU2P3JdDXMtH5jTgDBy1bjVCtTES4HbsTOGG2EPgaxNd7u9UMHKT7ehaIz8faYhBnUlEDIJc7piAQN70CuxykQYxrxQa0QI_Kqar6K8y5MEEvgn-DzU-Cl_6GLpmOIcRqPjfgrBnVx9JzikZir")' }}></div>
                            {/* Timer Overlay */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-slate-900/80 backdrop-blur rounded-xl p-4 flex items-center justify-between text-white">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                                            <span className="material-symbols-outlined text-sm">play_arrow</span>
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-300">WAKTU FOKUS</div>
                                            <div className="font-mono text-xl font-bold">24:59</div>
                                        </div>
                                    </div>
                                    <div className="text-xs px-2 py-1 bg-white/10 rounded">Penalaran Umum</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export const MotivationSection = () => {
    return (
        <section className="py-16 bg-slate-50 border-y border-slate-200">
            <div className="max-w-[1200px] mx-auto px-4 text-center">
                <h3 className="text-slate-900 text-xl font-bold mb-10 opacity-60">Target Kampus Impian Member Kami</h3>
                <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Using text placeholders styled as logos for generic purpose if SVG urls aren't available, but here using font-awesome style structure for visual rep */}
                    <div className="h-12 flex items-center font-serif text-3xl font-bold tracking-tighter text-slate-800">UI<span className="text-yellow-500">.</span></div>
                    <div className="h-12 flex items-center font-sans text-3xl font-black italic text-slate-800">ITB</div>
                    <div className="h-12 flex items-center font-serif text-3xl font-bold text-slate-800">UGM</div>
                    <div className="h-12 flex items-center font-sans text-3xl font-bold tracking-widest border-2 border-current p-1 text-slate-800">ITS</div>
                    <div className="h-12 flex items-center font-serif text-3xl font-bold text-slate-800">UNAIR</div>
                    <div className="h-12 flex items-center font-sans text-3xl font-black text-slate-800">UNDIP</div>
                </div>
            </div>
        </section>
    );
}

export const FooterSection = () => {
    return (
        <>
            <section className="relative py-24 px-4 overflow-hidden bg-primary">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-royal-blue-start to-royal-blue-end"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                <div className="relative z-10 max-w-[800px] mx-auto text-center flex flex-col items-center gap-8">
                    <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                        Siap Jadi Maba Tahun Ini?
                    </h2>
                    <p className="text-blue-100 text-lg md:text-xl max-w-[600px]">
                        Jangan buang waktu dengan metode belajar yang membosankan. Bergabung sekarang dan rasakan sensasi push rank menuju PTN impian!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <button className="flex h-14 px-10 cursor-pointer items-center justify-center rounded-full bg-white hover:bg-slate-50 text-primary text-lg font-bold shadow-2xl shadow-black/20 transition-transform hover:scale-105">
                            Gabung Gratis
                        </button>
                        <button className="flex h-14 px-10 cursor-pointer items-center justify-center rounded-full bg-transparent border-2 border-white/30 hover:bg-white/10 text-white text-lg font-bold transition-colors">
                            Download App
                        </button>
                    </div>
                    <div className="mt-8 text-blue-100 text-sm font-medium">
                        <span className="inline-block mr-2">⭐ 4.9/5 Peringkat</span>
                        <span className="inline-block">50rb+ Unduhan</span>
                    </div>
                </div>
            </section>
            
            <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-white/5">
                <div className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-40">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="size-6 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">sports_esports</span>
                                </div>
                                <h3 className="text-xl font-bold">Test-Clash</h3>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                Platform belajar UTBK #1 di Indonesia dengan konsep gamification. Belajar jadi seru, masuk PTN jadi nyata.
                            </p>
                            <div className="flex gap-4">
                                <a className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors" href="#">
                                    {/* Twitter Icon Placeholder */}
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                </a>
                                <a className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors" href="#">
                                    {/* Instagram Icon Placeholder */}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-white">Produk</h4>
                            <ul className="flex flex-col gap-3 text-sm text-slate-400">
                                <li><a className="hover:text-primary transition-colors" href="#">Fitur Utama</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Harga &amp; Paket</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Leaderboard</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Tryout Online</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-white">Perusahaan</h4>
                            <ul className="flex flex-col gap-3 text-sm text-slate-400">
                                <li><a className="hover:text-primary transition-colors" href="#">Tentang Kami</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Karir</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Partner</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-white">Bantuan</h4>
                            <ul className="flex flex-col gap-3 text-sm text-slate-400">
                                <li><a className="hover:text-primary transition-colors" href="#">FAQ</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Syarat &amp; Ketentuan</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Kebijakan Privasi</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Hubungi Kami</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-slate-500">© 2026 Test-Clash Indonesia. All rights reserved.</p>
                        <div className="flex gap-6 text-sm text-slate-500">
                            <a className="hover:text-white" href="#">Privasi</a>
                            <a className="hover:text-white" href="#">Syarat</a>
                            <a className="hover:text-white" href="#">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

const LandingPage = () => {
    return (
        <div className="font-display bg-white text-slate-900 overflow-x-hidden min-h-screen">
            <LandingNavbar />
            <div className="overflow-y-auto h-[calc(100vh-64px)]">
                <HeroSection />
                <FeaturesSection />
                <ShowcaseSection />
                <MotivationSection />
                <FooterSection />
            </div>
        </div>
    );
};

export default LandingPage;
