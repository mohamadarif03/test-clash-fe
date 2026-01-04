import React from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardHeader } from './DashboardHeader';

export const DashboardTryouts = () => {
    return (
        <div className="bg-slate-50 text-slate-900 antialiased min-h-screen flex overflow-hidden font-display">
            <DashboardSidebar />
            <main className="flex-1 lg:ml-72 flex flex-col h-screen overflow-y-auto bg-slate-50 relative">
                <DashboardHeader 
                    title="Manajemen Tryout" 
                    subtitle="Kelola jadwal dan konfigurasi tryout"
                />
                <div className="p-8">
                    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                         <h3 className="text-lg font-bold text-slate-900 mb-2">Manajemen Tryout</h3>
                         <p className="text-slate-500">Halaman ini sedang dalam pengembangan.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default DashboardTryouts;
