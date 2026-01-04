
import { useState } from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardHeader } from './DashboardHeader';

// Types
interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'student';
    status: 'active' | 'inactive' | 'suspended';
    joinDate: string;
    avatar?: string;
}

// Mock Data
const MOCK_USERS: User[] = [
    {
        id: '1',
        name: 'Arif Muhammad',
        email: 'arif@example.com',
        role: 'admin',
        status: 'active',
        joinDate: '2023-01-15',
    },
    {
        id: '2',
        name: 'Budi Santoso',
        email: 'budi@student.com',
        role: 'student',
        status: 'active',
        joinDate: '2023-03-20',
    },
    {
        id: '3',
        name: 'Siti Aminah',
        email: 'siti@student.com',
        role: 'student',
        status: 'inactive',
        joinDate: '2023-04-10',
    },
    // Changed role from teacher to admin or student as requested
    {
        id: '4',
        name: 'Pak Guru',
        email: 'guru@school.com',
        role: 'admin', 
        status: 'active',
        joinDate: '2023-02-01',
    },
    {
        id: '5',
        name: 'Andi Wijaya',
        email: 'andi@student.com',
        role: 'student',
        status: 'suspended',
        joinDate: '2023-05-12',
    },
];

export const DashboardUsers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState('');
    const [filterStatus, setFilterStatus] = useState('');

    const filteredUsers = MOCK_USERS.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = filterRole ? user.role === filterRole : true;
        const matchesStatus = filterStatus ? user.status === filterStatus : true;
        return matchesSearch && matchesRole && matchesStatus;
    });

    const getRoleBadgeColor = (role: string) => {
        switch(role) {
            case 'admin': return 'bg-purple-100 text-purple-700 border-purple-200';
            case 'student': return 'bg-blue-100 text-blue-700 border-blue-200';
            default: return 'bg-slate-100 text-slate-700 border-slate-200';
        }
    };

    const getStatusBadgeColor = (status: string) => {
        switch(status) {
            case 'active': return 'bg-green-100 text-green-700';
            case 'inactive': return 'bg-slate-100 text-slate-500';
            case 'suspended': return 'bg-red-100 text-red-700';
            default: return 'bg-slate-100 text-slate-700';
        }
    };

    return (
        <div className="bg-slate-50 text-slate-900 antialiased min-h-screen flex overflow-hidden font-display">
            <DashboardSidebar />
            <main className="flex-1 lg:ml-72 flex flex-col h-screen overflow-y-auto bg-slate-50 relative">
                <DashboardHeader 
                    title="Manajemen User" 
                    subtitle="Kelola data pengguna, role, dan hak akses aplikasi"
                />
                
                <div className="p-8 max-w-7xl mx-auto w-full flex flex-col gap-6">
                    
                  

                    {/* Actions & Filters */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2">
                        {/* Search & Select */}
                        <div className="flex flex-col sm:flex-row gap-3 flex-1">
                            <div className="relative flex-1 max-w-md">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">search</span>
                                <input 
                                    type="text" 
                                    placeholder="Cari user (nama, email)..." 
                                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-white focus:ring-1 focus:ring-primary focus:border-primary outline-none text-sm transition-shadow"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            
                            <select 
                                className="px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-600 focus:ring-1 focus:ring-primary focus:border-primary outline-none cursor-pointer"
                                value={filterRole}
                                onChange={(e) => setFilterRole(e.target.value)}
                            >
                                <option value="">Semua Role</option>
                                <option value="student">Siswa</option>
                                <option value="admin">Admin</option>
                            </select>

                            <select 
                                className="px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-600 focus:ring-1 focus:ring-primary focus:border-primary outline-none cursor-pointer"
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                            >
                                <option value="">Semua Status</option>
                                <option value="active">Aktif</option>
                                <option value="inactive">Tidak Aktif</option>
                                <option value="suspended">Ditangguhkan</option>
                            </select>
                        </div>

                        {/* Add Button */}
                        <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white font-semibold shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98] cursor-pointer">
                            <span className="material-symbols-outlined text-[20px]">person_add</span>
                            Tambah User
                        </button>
                    </div>

                    {/* Users Table */}
                    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-100 text-xs text-slate-500 uppercase tracking-wider font-semibold">
                                        <th className="px-6 py-4">User</th>
                                        <th className="px-6 py-4">Role</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4">Tanggal Gabung</th>
                                        <th className="px-6 py-4 text-right">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {filteredUsers.length > 0 ? (
                                        filteredUsers.map((user) => (
                                            <tr key={user.id} className="hover:bg-slate-50 transition-colors group">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div 
                                                            className="w-10 h-10 rounded-full bg-slate-200 bg-cover bg-center border border-slate-100"
                                                            style={{backgroundImage: `url("https://ui-avatars.com/api/?name=${user.name}&background=random")`}}
                                                        ></div>
                                                        <div className="flex flex-col">
                                                            <span className="text-sm font-semibold text-slate-900">{user.name}</span>
                                                            <span className="text-xs text-slate-500">{user.email}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    {user.role === 'admin' ? (
                                                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold capitalize border bg-purple-100 text-purple-700 border-purple-200">
                                                            Admin
                                                        </span>
                                                    ) : (
                                                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold capitalize border bg-blue-100 text-blue-700 border-blue-200">
                                                            Student
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <span className={`w-2 h-2 rounded-full ${
                                                            user.status === 'active' ? 'bg-green-500' : 
                                                            user.status === 'inactive' ? 'bg-slate-400' : 'bg-red-500'
                                                        }`}></span>
                                                        <span className={`text-sm font-medium capitalize ${
                                                            user.status === 'active' ? 'text-green-700' : 
                                                            user.status === 'inactive' ? 'text-slate-500' : 'text-red-700'
                                                        }`}>
                                                            {user.status === 'suspended' ? 'Diblokir' : user.status}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="text-sm text-slate-600">{new Date(user.joinDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-1">
                                                        {user.status === 'suspended' ? (
                                                            <button 
                                                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 border border-green-200 transition-colors cursor-pointer" 
                                                                title="Buka Blokir Akses"
                                                            >
                                                                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                                                                <span className="text-xs font-bold">Buka Blokir</span>
                                                            </button>
                                                        ) : (
                                                            <button 
                                                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 transition-colors cursor-pointer" 
                                                                title="Blokir User Ini"
                                                            >
                                                                <span className="material-symbols-outlined text-[18px]">block</span>
                                                                <span className="text-xs font-bold">Blokir</span>
                                                            </button>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                                                <div className="flex justify-center mb-2">
                                                    <span className="material-symbols-outlined text-4xl text-slate-300">person_off</span>
                                                </div>
                                                <p>Tidak ada user yang ditemukan.</p>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        {/* Pagination (Simple) */}
                        <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500">
                            <span>Menampilkan {filteredUsers.length} dari {MOCK_USERS.length} user</span>
                            <div className="flex items-center gap-2">
                                <button className="p-1 rounded hover:bg-slate-200 disabled:opacity-50 cursor-pointer" disabled>
                                    <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                                </button>
                                <button className="p-1 rounded hover:bg-slate-200 cursor-pointer">
                                    <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default DashboardUsers;
