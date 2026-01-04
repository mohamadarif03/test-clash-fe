
import { useState, useEffect } from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { Link, useLocation } from 'react-router-dom';

export const DashboardMaterialsForm = () => {
    const location = useLocation();
    const [subtest, setSubtest] = useState('');
    const [chapter, setChapter] = useState('');
    const [materialType, setMaterialType] = useState('text'); // 'text', 'youtube', 'pdf', 'quiz'
    const [title, setTitle] = useState('');


    useEffect(() => {
        if (location.state) {
            if (location.state.subtestName) setSubtest(location.state.subtestName);
            // We might need to split ID or Title depending on how we want to match, but here we use exact title match for simplicity
            if (location.state.chapterTitle) setChapter(location.state.chapterTitle);
        }
    }, [location]);
    return (
        <div className="bg-slate-50 text-slate-900 antialiased min-h-screen flex overflow-hidden font-display">
            {/* Sidebar */}
            <DashboardSidebar />

            <main className="flex-1 lg:ml-72 flex flex-col h-screen overflow-y-auto bg-slate-50 relative">
                
                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto no-scrollbar p-4 lg:p-10">
                    <div className="max-w-7xl mx-auto flex flex-col gap-8">
                        {/* Header Section */}
                        <div className="flex flex-col gap-2">
                            {/* Breadcrumbs */}
                            <div className="flex flex-wrap items-center gap-2 text-sm">
                                <Link to="/dashboard" className="text-slate-500 hover:text-primary transition-colors font-medium">Dashboard</Link>
                                <span className="text-slate-300 material-symbols-outlined text-[16px]">chevron_right</span>
                                <Link to="/dashboard/materials" className="text-slate-500 hover:text-primary transition-colors font-medium">Materials</Link>
                                <span className="text-slate-300 material-symbols-outlined text-[16px]">chevron_right</span>
                                <span className="text-slate-900 font-semibold">Tambah Baru</span>
                            </div>
                            {/* Page Title & Actions */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                                <h1 className="text-slate-900 text-3xl md:text-4xl font-bold tracking-tight">Tambah Materi Baru</h1>

                            </div>
                        </div>

                        {/* Main Layout - Full Width */}
                        <div className="flex flex-col gap-8">
                            {/* Editor Section */}
                            <div className="flex flex-col gap-6">
                                {/* Metadata Card */}
                                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                                    <div className="flex flex-col gap-6">
                                        {/* Dropdown */}
                                        <div className="flex flex-col gap-2">
                                            <label className="text-slate-900 text-sm font-semibold">
                                                Kategori Subtest
                                            </label>
                                            <div className="relative">
                                                <select 
                                                    value={subtest}
                                                    onChange={(e) => setSubtest(e.target.value)}
                                                    className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-base text-slate-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-shadow cursor-pointer"
                                                >
                                                    <option disabled value="">Pilih Subtest...</option>
                                                    <option value="Penalaran Umum">Penalaran Umum</option>
                                                    <option value="Pengetahuan & Pemahaman Umum">Pengetahuan & Pemahaman Umum</option>
                                                    <option value="Pemahaman Bacaan & Menulis">Pemahaman Bacaan & Menulis</option>
                                                    <option value="Pengetahuan Kuantitatif">Pengetahuan Kuantitatif</option>
                                                    <option value="Literasi Bahasa Indonesia">Literasi Bahasa Indonesia</option>
                                                    <option value="Literasi Bahasa Inggris">Literasi Bahasa Inggris</option>
                                                    <option value="Penalaran Matematika">Penalaran Matematika</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                                                    <span className="material-symbols-outlined">expand_more</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Chapter Dropdown */}
                                        <div className="flex flex-col gap-2">
                                            <label className="text-slate-900 text-sm font-semibold">
                                                Bab / Chapter
                                            </label>
                                            <div className="relative">
                                                <select 
                                                    value={chapter}
                                                    onChange={(e) => setChapter(e.target.value)}
                                                    className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-base text-slate-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-shadow cursor-pointer"
                                                >
                                                    <option disabled value="">Pilih Bab...</option>
                                                    <option value="Bab 1: Logika Deduktif">Bab 1: Logika Deduktif</option>
                                                    <option value="Bab 2: Logika Induktif">Bab 2: Logika Induktif</option>
                                                    {/* Dynamically add option if it's not in the list but passed in state, or better yet, just show it */}
                                                    {chapter && chapter !== "Bab 1: Logika Deduktif" && chapter !== "Bab 2: Logika Induktif" && (
                                                        <option value={chapter}>{chapter}</option>
                                                    )}
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                                                    <span className="material-symbols-outlined">expand_more</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Title Input */}
                                        <div className="flex flex-col gap-2">
                                            <label className="text-slate-900 text-sm font-semibold">
                                                Judul Materi
                                            </label>
                                            <input 
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-lg font-medium text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-shadow" 
                                                placeholder="Masukkan judul materi disini..." 
                                                type="text"
                                            />
                                        </div>
                                        
                                        {/* Visibility Toggle (Moved from Sidebar) */}
                                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium text-slate-900">Visibilitas</span>
                                                <span className="text-xs text-slate-500">Tampilkan materi ini ke siswa segera</span>
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input defaultChecked className="sr-only peer" type="checkbox" value=""/>
                                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Material Content Section */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-2 border-b border-slate-200">
                                        {[
                                            { id: 'text', label: 'Teks & Artikel', icon: 'article' },
                                            { id: 'youtube', label: 'Video YouTube', icon: 'smart_display' },
                                            { id: 'pdf', label: 'Dokumen PDF', icon: 'picture_as_pdf' },
                                            { id: 'quiz', label: 'Latihan Soal', icon: 'quiz' },
                                        ].map((type) => (
                                            <button
                                                key={type.id}
                                                onClick={() => setMaterialType(type.id)}
                                                className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
                                                    materialType === type.id
                                                    ? 'border-primary text-primary'
                                                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                                                }`}
                                            >
                                                <span className="material-symbols-outlined text-[20px]">{type.icon}</span>
                                                {type.label}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Conditional Content Rendering */}
                                    {materialType === 'text' && (
                                        <div className="flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden min-h-[500px]">
                                            {/* Editor Toolbar */}
                                            <div className="flex flex-wrap items-center gap-1 border-b border-slate-100 p-2 bg-slate-50/50 sticky top-0 z-10">
                                                <div className="flex items-center gap-1 pr-2 border-r border-slate-200 mr-1">
                                                    <button className="p-2 rounded hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer" title="Paragraf">
                                                        <span className="material-symbols-outlined text-[20px]">format_paragraph</span>
                                                    </button>
                                                    <button className="p-2 rounded hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer" title="Judul 1">
                                                        <span className="material-symbols-outlined text-[20px]">format_h1</span>
                                                    </button>
                                                    <button className="p-2 rounded hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer" title="Judul 2">
                                                        <span className="material-symbols-outlined text-[20px]">format_h2</span>
                                                    </button>
                                                </div>
                                                <div className="flex items-center gap-1 pr-2 border-r border-slate-200 mr-1">
                                                    <button className="p-2 rounded hover:bg-slate-200 text-slate-800 font-bold bg-white shadow-sm transition-all cursor-pointer" title="Tebal">
                                                        <span className="material-symbols-outlined text-[20px]">format_bold</span>
                                                    </button>
                                                    <button className="p-2 rounded hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer" title="Miring">
                                                        <span className="material-symbols-outlined text-[20px]">format_italic</span>
                                                    </button>
                                                    <button className="p-2 rounded hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer" title="Garis Bawah">
                                                        <span className="material-symbols-outlined text-[20px]">format_underlined</span>
                                                    </button>
                                                </div>
                                                <div className="flex items-center gap-1 pr-2 border-r border-slate-200 mr-1">
                                                    <button className="p-2 rounded hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer" title="Daftar Poin">
                                                        <span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
                                                    </button>
                                                    <button className="p-2 rounded hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer" title="Daftar Angka">
                                                        <span className="material-symbols-outlined text-[20px]">format_list_numbered</span>
                                                    </button>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <button className="p-2 rounded hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer" title="Sisipkan Gambar">
                                                        <span className="material-symbols-outlined text-[20px]">image</span>
                                                    </button>
                                                    <button className="p-2 rounded hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer" title="Sisipkan Video">
                                                        <span className="material-symbols-outlined text-[20px]">movie</span>
                                                    </button>
                                                    <button className="p-2 rounded hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer" title="Sisipkan Tautan">
                                                        <span className="material-symbols-outlined text-[20px]">link</span>
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Editor Content */}
                                            <div className="flex-1 p-6 lg:p-8 cursor-text">
                                                <div className="prose prose-lg max-w-none focus:outline-none min-h-[400px]" contentEditable="true">
                                                    <p className="text-slate-400">Mulai ketik materi belajar Anda di sini... Anda dapat menggunakan pintasan keyboard standar.</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {materialType === 'youtube' && (
                                        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm flex flex-col gap-6 items-center justify-center min-h-[300px]">
                                            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-600 mb-2">
                                                <span className="material-symbols-outlined text-4xl">smart_display</span>
                                            </div>
                                            <div className="w-full max-w-lg space-y-4">
                                                <div className="text-center">
                                                    <h3 className="text-lg font-bold text-slate-900">Sematkan Video YouTube</h3>
                                                    <p className="text-sm text-slate-500">Masukkan link video YouTube untuk materi pembelajaran.</p>
                                                </div>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined">link</span>
                                                    <input 
                                                        type="text" 
                                                        placeholder="https://www.youtube.com/watch?v=..." 
                                                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                                                    />
                                                </div>
                                                <button className="w-full py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition-colors cursor-pointer">
                                                    Cek Video
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {materialType === 'pdf' && (
                                        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm flex flex-col gap-6 items-center justify-center min-h-[300px]">
                                            <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 mb-2">
                                                <span className="material-symbols-outlined text-4xl">picture_as_pdf</span>
                                            </div>
                                            <div className="text-center max-w-md">
                                                <h3 className="text-lg font-bold text-slate-900">Upload Dokumen PDF</h3>
                                                <p className="text-sm text-slate-500 mb-6">Upload file materi dalam format PDF untuk dibaca siswa.</p>
                                                
                                                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-slate-300 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-all group">
                                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                        <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-orange-500 mb-2 transition-colors">cloud_upload</span>
                                                        <p className="mb-1 text-sm text-slate-500"><span className="font-semibold">Klik untuk unggah</span> atau seret dan lepas</p>
                                                        <p className="text-xs text-slate-400">PDF (MAX. 10MB)</p>
                                                    </div>
                                                    <input type="file" className="hidden" accept=".pdf" />
                                                </label>
                                            </div>
                                        </div>
                                    )}

                                    {materialType === 'quiz' && (
                                        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm flex flex-col gap-6 min-h-[400px]">
                                            <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                                                <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                                                    <span className="material-symbols-outlined text-2xl">quiz</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-slate-900">Buat Latihan Soal</h3>
                                                    <p className="text-sm text-slate-500">Tambahkan pertanyaan untuk menguji pemahaman.</p>
                                                </div>
                                            </div>
                                            
                                            <div className="space-y-4">
                                                <button className="flex items-center justify-center gap-2 w-full py-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 font-bold hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-all cursor-pointer">
                                                    <span className="material-symbols-outlined">add_circle</span>
                                                    Tambah Pertanyaan Baru
                                                </button>
                                                
                                                <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-200">
                                                    <p className="text-slate-500">Belum ada pertanyaan yang ditambahkan.</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            </div>
                            {/* Action Buttons (Bottom) */}
                            <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-200">
                                <Link to="/dashboard/materials" className="hidden sm:flex items-center justify-center px-6 h-12 rounded-xl text-base font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer">
                                    Batal
                                </Link>
                                <button className="flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-white border border-slate-200 text-slate-900 text-base font-semibold shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer">
                                    <span className="material-symbols-outlined text-[20px]">save</span>
                                    Simpan Draft
                                </button>
                                <button className="flex items-center justify-center gap-2 px-8 h-12 rounded-xl bg-primary hover:bg-primary-hover text-white text-base font-bold shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98] cursor-pointer">
                                    <span className="material-symbols-outlined text-[20px]">send</span>
                                    Terbitkan
                                </button>
                            </div>
                        </div>
                        <div className="h-10"></div> {/* Spacer for bottom scrolling */}
                    </div>
            </main>
        </div>
    );
}

export default DashboardMaterialsForm;
