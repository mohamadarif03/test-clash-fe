
import { Link, useLocation } from 'react-router-dom';

interface SidebarLinkProps {
  href: string;
  icon: string;
  label: string;
  isActive?: boolean;
}

const SidebarLink = ({ href, icon, label }: SidebarLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === href;
  
  return (
    <Link 
      to={href} 
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
        isActive 
          ? 'bg-white/10 text-white' 
          : 'text-blue-100 hover:bg-white/5'
      }`}
    >
      <span className="material-symbols-outlined">{icon}</span>
      <span className="font-medium">{label}</span>
    </Link>
  );
};

import { useAuthStore } from '../../../stores/useAuthStore';
import { useNavigate } from 'react-router-dom';

export const DashboardSidebar = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="hidden lg:flex w-72 flex-col bg-primary text-white h-screen fixed left-0 top-0 z-50 shadow-xl">
      <div className="flex items-center gap-3 px-6 py-8">
        <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
          <span className="material-symbols-outlined text-white text-3xl">school</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold tracking-tight">Test Clash</h1>
          <p className="text-blue-200 text-xs font-medium uppercase tracking-wider">Panel Admin</p>
        </div>
      </div>
      
      <nav className="flex-1 px-4 flex flex-col gap-2 mt-4">
        <SidebarLink href="/dashboard" icon="dashboard" label="Dashboard" />
        <SidebarLink href="/dashboard/users" icon="group" label="Manajemen User" />
        
        <div className="my-2 px-2 text-xs font-semibold text-blue-300 uppercase tracking-wider">
          Pembelajaran
        </div>
        <SidebarLink href="/dashboard/materials" icon="library_books" label="Materi" />
        <SidebarLink href="/dashboard/subtests" icon="topic" label="SubTest" />
        
        <div className="my-2 px-2 text-xs font-semibold text-blue-300 uppercase tracking-wider">
          Ujian
        </div>
        <SidebarLink href="/dashboard/questions" icon="inventory_2" label="Bank Soal" />
        <SidebarLink href="/dashboard/tryouts" icon="assignment" label="Tryout" />
        
        <div className="my-2 px-2 text-xs font-semibold text-blue-300 uppercase tracking-wider">
          Sistem
        </div>
        <SidebarLink href="/dashboard/reports" icon="report_problem" label="Laporan Error" />
      </nav>
      
      <div className="p-4 border-t border-white/10">
        <div className="bg-blue-800/50 rounded-xl p-4 flex items-center gap-3">
          <div 
            className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-white/20" 
            data-alt="Admin user profile picture" 
            style={{backgroundImage: `url("${user?.avatar || 'https://ui-avatars.com/api/?name=' + user?.name}")`}}
          ></div>
          <div className="flex flex-col overflow-hidden">
            <p className="text-sm font-semibold truncate">{user?.name}</p>
            <p className="text-blue-200 text-xs truncate capitalize">{user?.role}</p>
          </div>
          <button onClick={handleLogout} className="ml-auto text-blue-200 hover:text-white cursor-pointer">
            <span className="material-symbols-outlined text-[20px]">logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
