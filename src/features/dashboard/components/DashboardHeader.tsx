
export const DashboardHeader = () => {
    return (
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 py-4 flex items-center justify-between">
            <div className="flex flex-col">
                <h2 className="text-xl font-bold text-gray-900">Ringkasan Dashboard</h2>
                <p className="text-sm text-gray-500">Selamat datang kembali, berikut ringkasan hari ini.</p>
            </div>
            <div className="flex items-center gap-6">
                {/* Search */}
                <div className="relative hidden md:block w-96">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-[20px]">search</span>
                    <input className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-primary/20 placeholder-gray-400 focus:outline-none" placeholder="Cari pengguna, pertanyaan..." type="text"/>
                </div>
                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button className="relative p-2 text-gray-500 hover:text-primary hover:bg-blue-50 rounded-lg transition-colors cursor-pointer">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-2 right-2 size-2 bg-orange-500 rounded-full border border-white"></span>
                    </button>
                    <button className="p-2 text-gray-500 hover:text-primary hover:bg-blue-50 rounded-lg transition-colors cursor-pointer">
                        <span className="material-symbols-outlined">help</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
