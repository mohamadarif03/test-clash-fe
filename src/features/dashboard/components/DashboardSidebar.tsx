
interface SidebarLinkProps {
  href: string;
  icon: string;
  label: string;
  isActive?: boolean;
}

const SidebarLink = ({ href, icon, label, isActive }: SidebarLinkProps) => {
  return (
    <a 
      href={href} 
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
        isActive 
          ? 'bg-white/10 text-white' 
          : 'text-blue-100 hover:bg-white/5'
      }`}
    >
      <span className="material-symbols-outlined">{icon}</span>
      <span className="font-medium">{label}</span>
    </a>
  );
};

export const DashboardSidebar = () => {
  return (
    <aside className="hidden lg:flex w-72 flex-col bg-primary text-white h-screen fixed left-0 top-0 z-50 shadow-xl">
      <div className="flex items-center gap-3 px-6 py-8">
        <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
          <span className="material-symbols-outlined text-white text-3xl">school</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold tracking-tight">EduAdmin</h1>
          <p className="text-blue-200 text-xs font-medium uppercase tracking-wider">Backend Panel</p>
        </div>
      </div>
      
      <nav className="flex-1 px-4 flex flex-col gap-2 mt-4">
        <SidebarLink href="#" icon="dashboard" label="Dashboard" isActive={true} />
        <SidebarLink href="#" icon="group" label="Pengguna" />
        <SidebarLink href="#" icon="sports_esports" label="Pertandingan" />
        <SidebarLink href="#" icon="quiz" label="Bank Soal" />
        <SidebarLink href="#" icon="analytics" label="Laporan" />
        <SidebarLink href="#" icon="settings" label="Pengaturan" />
      </nav>
      
      <div className="p-4 border-t border-white/10">
        <div className="bg-blue-800/50 rounded-xl p-4 flex items-center gap-3">
          <div 
            className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-white/20" 
            data-alt="Admin user profile picture" 
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFd9ZhweYvUqTpM3lfFboc49ZCEHZoXp6BANUs5zJB9ujBhVQvuwPo-3Bt9mrvrkPtARntKHFm_nSo7PRuG6gS8t3rY40yyNs8BnV5AysfN21O0DMuBQGHaDRBfMmImqM_Mzfz8SqX6MjUZhFvkVHUv8fvesQRtcFmlF6-EQGfIhg1rNyUh6QAdDDiE4wmKBns6rBV6a5QwVPZT8aLX1LDVslR-5NZiDRqDnfWTmEp69kU0TGvWFl7708fK4RnHm2jk2sf3URPh81F")'}}
          ></div>
          <div className="flex flex-col overflow-hidden">
            <p className="text-sm font-semibold truncate">Alexander G.</p>
            <p className="text-blue-200 text-xs truncate">Admin Super</p>
          </div>
          <button className="ml-auto text-blue-200 hover:text-white">
            <span className="material-symbols-outlined text-[20px]">logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
