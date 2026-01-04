import { useState } from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardHeader } from './DashboardHeader';

// Types (eventually move to types definition file)
type SubTest = {
  id: string;
  name: string;
  category: string; // Added category
  code: string;
  questionsCount: number;
  iconUrl: string;
  bgColor: string;
};

// Placeholder Data
const MOCK_SUBTESTS: SubTest[] = [
  // Tes Potensi Skolastik (TPS)
  {
    id: '1',
    name: 'Penalaran Umum',
    category: 'Tes Potensi Skolastik (TPS)',
    code: 'PU-01',
    questionsCount: 12,
    iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrVH0BB-3FhFi4R-8SR5xptktXB6391SNf2whKfxtDHyqVNrg7W8FgDA0CzFC5s-GvOm87xamdBM0O3BtxERgn1NxKBTKbRjWRMlKjMClKYe7DIMj6Pl7WHJFq1hYM8fHNNgcRijj5hXx9Ba0qi4fbQ3bUbeQS33V8WvghgaC-OJ_qsqRta1fuepXpFMRlo5JIPfoo72w7Aq5l0cnhKj4zEyAnhHJ3CZsw6A2m-ZXezvkxFK3m9waKNOLusnFLHYoFKMt4yu1VB2ry',
    bgColor: 'bg-blue-50'
  },
  {
    id: '2',
    name: 'Pengetahuan & Pemahaman Umum',
    category: 'Tes Potensi Skolastik (TPS)',
    code: 'PPU-02',
    questionsCount: 15,
    iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVJVupKrx3CC3TnSmFCGA437q2WzGNX68vk091ePpw5lKM4XubdRVzNDijT-4sre5rnIX8sistEyehCWUH00-c5gv6ywhAUN1Bq1I5ctXwxWluEiOjJsPB4_AaVJ15j4l6lCNN6V7rN202AMABVHrT_J5IBcRpg6U0r6TuHvvSOJtnOGmUJCG04R5IhYYadzFBRcLV56nmSLeg6QgbY4N9Kzjf47oRpLoZ7pi6w03mm4-6ifsy3CxEfwAxwANthh-cPcNAxME1c8Cr',
    bgColor: 'bg-green-50'
  },
  {
    id: '3',
    name: 'Pemahaman Bacaan & Menulis',
    category: 'Tes Potensi Skolastik (TPS)',
    code: 'PBM-03',
    questionsCount: 20,
    iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVJVupKrx3CC3TnSmFCGA437q2WzGNX68vk091ePpw5lKM4XubdRVzNDijT-4sre5rnIX8sistEyehCWUH00-c5gv6ywhAUN1Bq1I5ctXwxWluEiOjJsPB4_AaVJ15j4l6lCNN6V7rN202AMABVHrT_J5IBcRpg6U0r6TuHvvSOJtnOGmUJCG04R5IhYYadzFBRcLV56nmSLeg6QgbY4N9Kzjf47oRpLoZ7pi6w03mm4-6ifsy3CxEfwAxwANthh-cPcNAxME1c8Cr', // Placeholder icon
    bgColor: 'bg-purple-50'
  },
  {
    id: '4',
    name: 'Pengetahuan Kuantitatif',
    category: 'Tes Potensi Skolastik (TPS)',
    code: 'PK-04',
    questionsCount: 15,
    iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVJVupKrx3CC3TnSmFCGA437q2WzGNX68vk091ePpw5lKM4XubdRVzNDijT-4sre5rnIX8sistEyehCWUH00-c5gv6ywhAUN1Bq1I5ctXwxWluEiOjJsPB4_AaVJ15j4l6lCNN6V7rN202AMABVHrT_J5IBcRpg6U0r6TuHvvSOJtnOGmUJCG04R5IhYYadzFBRcLV56nmSLeg6QgbY4N9Kzjf47oRpLoZ7pi6w03mm4-6ifsy3CxEfwAxwANthh-cPcNAxME1c8Cr',
    bgColor: 'bg-orange-50'
  },
  // Tes Literasi
  {
    id: '5',
    name: 'Literasi Bahasa Indonesia',
    category: 'Tes Literasi',
    code: 'LBI-05',
    questionsCount: 30,
    iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVJVupKrx3CC3TnSmFCGA437q2WzGNX68vk091ePpw5lKM4XubdRVzNDijT-4sre5rnIX8sistEyehCWUH00-c5gv6ywhAUN1Bq1I5ctXwxWluEiOjJsPB4_AaVJ15j4l6lCNN6V7rN202AMABVHrT_J5IBcRpg6U0r6TuHvvSOJtnOGmUJCG04R5IhYYadzFBRcLV56nmSLeg6QgbY4N9Kzjf47oRpLoZ7pi6w03mm4-6ifsy3CxEfwAxwANthh-cPcNAxME1c8Cr', // Placeholder icon
    bgColor: 'bg-red-50'
  },
  {
    id: '6',
    name: 'Literasi Bahasa Inggris',
    category: 'Tes Literasi',
    code: 'LBI-06',
    questionsCount: 20,
    iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVJVupKrx3CC3TnSmFCGA437q2WzGNX68vk091ePpw5lKM4XubdRVzNDijT-4sre5rnIX8sistEyehCWUH00-c5gv6ywhAUN1Bq1I5ctXwxWluEiOjJsPB4_AaVJ15j4l6lCNN6V7rN202AMABVHrT_J5IBcRpg6U0r6TuHvvSOJtnOGmUJCG04R5IhYYadzFBRcLV56nmSLeg6QgbY4N9Kzjf47oRpLoZ7pi6w03mm4-6ifsy3CxEfwAxwANthh-cPcNAxME1c8Cr', // Placeholder icon
    bgColor: 'bg-indigo-50'
  },
  {
    id: '7',
    name: 'Penalaran Matematika',
    category: 'Tes Literasi',
    code: 'PM-07',
    questionsCount: 20,
    iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVJVupKrx3CC3TnSmFCGA437q2WzGNX68vk091ePpw5lKM4XubdRVzNDijT-4sre5rnIX8sistEyehCWUH00-c5gv6ywhAUN1Bq1I5ctXwxWluEiOjJsPB4_AaVJ15j4l6lCNN6V7rN202AMABVHrT_J5IBcRpg6U0r6TuHvvSOJtnOGmUJCG04R5IhYYadzFBRcLV56nmSLeg6QgbY4N9Kzjf47oRpLoZ7pi6w03mm4-6ifsy3CxEfwAxwANthh-cPcNAxME1c8Cr', // Placeholder icon
    bgColor: 'bg-cyan-50'
  }
];

export const DashboardSubtests = () => {
    const [isFormatModalOpen, setIsFormatModalOpen] = useState(false);
    
    return (
        <div className="bg-slate-50 text-slate-900 antialiased min-h-screen flex overflow-hidden font-display">
            {/* Sidebar Reuse */}
            <DashboardSidebar />

            <main className="flex-1 lg:ml-72 flex flex-col h-screen overflow-y-auto bg-slate-50 relative">
                {/* Header Reuse with custom title potentially, but keeping consistent for now */}
                <DashboardHeader 
                    title="Manajemen SubTest" 
                    subtitle="Kelola sub-kategori pengujian dan alokasi waktu"
                />

                {/* Content */}
                <div className="p-8">
                    <div className="flex justify-end mb-6">
                        <button 
                            onClick={() => setIsFormatModalOpen(true)}
                            className="bg-primary text-white px-5 py-2.5 rounded-xl font-medium shadow-lg shadow-primary/30 hover:bg-primary-hover transition-all flex items-center gap-2 cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            <span>Tambah SubTest</span>
                        </button>
                    </div>

                    <div className="flex flex-col gap-10">
                        {['Tes Potensi Skolastik (TPS)', 'Tes Literasi'].map((category) => (
                            <div key={category} className="flex flex-col gap-4">
                                <h2 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">{category}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {MOCK_SUBTESTS.filter(st => st.category === category).map((subtest) => (
                                        <div key={subtest.id} className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary/30 hover:shadow-soft transition-all duration-300 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-4 flex gap-2">
                                                <button className="w-8 h-8 rounded-lg bg-slate-50 text-slate-600 hover:bg-primary hover:text-white flex items-center justify-center transition-colors cursor-pointer">
                                                    <span className="material-symbols-outlined text-[18px]">edit</span>
                                                </button>
                                                <button className="w-8 h-8 rounded-lg bg-slate-50 text-slate-600 hover:bg-red-50 hover:text-red-500 flex items-center justify-center transition-colors cursor-pointer">
                                                    <span className="material-symbols-outlined text-[18px]">delete</span>
                                                </button>
                                            </div>
                                            <div className={`w-16 h-16 mb-4 rounded-2xl ${subtest.bgColor} flex items-center justify-center shadow-inner`}>
                                                <img className="w-10 h-10 object-contain drop-shadow-md" src={subtest.iconUrl} alt={subtest.name} />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-1">{subtest.name}</h3>
                                            <div className="flex items-center justify-between mt-2">
                                                <span className="px-3 py-1 rounded-full bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wide">{subtest.code}</span>
                                                <span className="text-xs text-slate-500">{subtest.questionsCount} Soal</span>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Add New Placeholder Card (Only show in TPS section or handle logic generically, but typically handled separate or at bottom. Placing at bottom of each category for now if relevant, or just once. Let's place it at the end of the last category or in a specific way. For now, let's just list cards.) */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal Overlay */}
                {isFormatModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/20 backdrop-blur-sm animate-in fade-in duration-200">
                         <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[480px] max-h-[90vh] flex flex-col overflow-hidden transform transition-all animate-in zoom-out-95 duration-200">
                            {/* Modal Header */}
                            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-white shrink-0">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Tambah SubTest Baru</h3>
                                    <p className="text-sm text-slate-500 mt-1">Buat sub-kategori pengujian baru.</p>
                                </div>
                                <button 
                                    onClick={() => setIsFormatModalOpen(false)}
                                    className="text-slate-500 hover:text-slate-900 hover:bg-slate-50 p-2 rounded-full transition-colors cursor-pointer"
                                >
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 flex flex-col gap-5 overflow-y-auto">
                                <div className="space-y-5">
                                    <label className="block">
                                        <span className="text-sm font-semibold text-slate-900 mb-2 block">Kategori</span>
                                        <div className="relative">
                                            <select className="w-full h-10 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-medium appearance-none cursor-pointer">
                                                <option value="" disabled selected>Pilih Kategori...</option>
                                                <option value="tps">Tes Potensi Skolastik (TPS)</option>
                                                <option value="literasi">Tes Literasi</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                                <span className="material-symbols-outlined">expand_more</span>
                                            </div>
                                        </div>
                                    </label>
                                    <label className="block">
                                        <span className="text-sm font-semibold text-slate-900 mb-2 block">Nama SubTest</span>
                                        <input className="w-full h-10 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-medium" placeholder="Contoh: Penalaran Umum" type="text"/>
                                    </label>
                                    <label className="block">
                                        <span className="text-sm font-semibold text-slate-900 mb-2 block">Kode / Slug</span>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 material-symbols-outlined text-[20px]">tag</span>
                                            <input className="w-full h-10 pl-12 pr-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-medium uppercase tracking-wide" placeholder="Contoh: PU-01" type="text"/>
                                        </div>
                                    </label>
                                </div>
                                
                                <div>
                                    <span className="text-sm font-semibold text-slate-900 mb-2 block">Icon / Gambar</span>
                                    <div className="relative group cursor-pointer">
                                        <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" type="file"/>
                                        <div className="w-full h-28 border-2 border-dashed border-slate-200 group-hover:border-primary/50 group-hover:bg-primary/5 rounded-xl flex flex-col items-center justify-center text-center transition-all bg-slate-50">
                                            <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                                <span className="material-symbols-outlined text-primary">cloud_upload</span>
                                            </div>
                                            <p className="text-sm font-medium text-slate-900">Klik untuk unggah atau drag and drop</p>
                                            <p className="text-xs text-slate-500 mt-1">SVG, PNG, JPG (Maks 2MB)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                             {/* Modal Footer */}
                            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-3 shrink-0">
                                <button 
                                    onClick={() => setIsFormatModalOpen(false)}
                                    className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-500 hover:text-slate-900 hover:bg-white border border-transparent hover:border-slate-200 transition-all cursor-pointer"
                                >
                                    Batal
                                </button>
                                <button className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-primary shadow-lg shadow-primary/20 hover:bg-primary-hover active:translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer">
                                    <span className="material-symbols-outlined text-[18px]">check</span>
                                    <span>Simpan SubTest</span>
                                </button>
                            </div>
                         </div>
                    </div>
                )}
            </main>
        </div>
    );
}

// Export for routing
export default DashboardSubtests;
