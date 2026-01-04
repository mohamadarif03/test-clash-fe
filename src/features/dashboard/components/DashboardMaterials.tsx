import { useState } from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardHeader } from './DashboardHeader';

export const DashboardMaterials = () => {
    // Placeholder for Materials specific logic, now that SubTest logic is moved
    return (
        <div className="bg-slate-50 text-slate-900 antialiased min-h-screen flex overflow-hidden font-display">
            <DashboardSidebar />
            <main className="flex-1 lg:ml-72 flex flex-col h-screen overflow-y-auto bg-slate-50 relative">
                <DashboardHeader 
                    title="Manajemen Materi" 
                    subtitle="Kelola kategori dan materi pelajaran"
                />
                
                {/* Content */}
                <div className="p-8">
                     <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                         <div className="flex flex-col items-center justify-center text-center py-12">
                             <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-primary text-3xl">library_books</span>
                             </div>
                             <h3 className="text-lg font-bold text-slate-900 mb-2">Manajemen Materi</h3>
                             <p className="text-slate-500 max-w-md mx-auto">
                                 Halaman ini akan digunakan untuk mengelola materi pelajaran (Subject) seperti Matematika, Bahasa Indonesia, dll.
                             </p>
                             <button className="mt-6 px-6 py-2.5 bg-primary text-white rounded-xl font-medium shadow-lg shadow-primary/30 hover:bg-primary-hover transition-all cursor-pointer">
                                 Tambah Materi
                             </button>
                         </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default DashboardMaterials;
