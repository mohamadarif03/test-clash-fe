import { useState } from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardHeader } from './DashboardHeader';
import { Link } from 'react-router-dom';


// Types
type MaterialType = 'video' | 'text' | 'quiz';

interface Material {
  id: string;
  title: string;
  type: MaterialType;
  duration?: string; // e.g. "10 min" or "5 hal"
  status: 'published' | 'draft';
}

interface Chapter {
  id: string;
  title: string;
  materials: Material[];
}

interface SubTestContent {
  id: string;
  name: string;
  category: string; // Added category
  chapters: Chapter[];
}

// Mock Data
// Mock Data
const MOCK_DATA: SubTestContent[] = [
  // Tes Potensi Skolastik (TPS)
  {
    id: '1',
    name: 'Penalaran Umum',
    category: 'Tes Potensi Skolastik (TPS)',
    chapters: [
      {
        id: 'c1',
        title: 'Bab 1: Logika Deduktif',
        materials: [
            { id: 'm1', title: 'Pengenalan Logika', type: 'video', duration: '5 min', status: 'published' },
            { id: 'm2', title: 'Silogisme Kategorik', type: 'text', duration: '8 hal', status: 'published' },
            { id: 'm3', title: 'Latihan Soal Dasar', type: 'quiz', duration: '10 soal', status: 'draft' },
        ]
      },
      {
        id: 'c2',
        title: 'Bab 2: Logika Induktif',
        materials: []
      }
    ]
  },
  {
    id: '2',
    name: 'Pengetahuan & Pemahaman Umum',
    category: 'Tes Potensi Skolastik (TPS)',
    chapters: []
  },
  {
    id: '3',
    name: 'Pemahaman Bacaan & Menulis',
    category: 'Tes Potensi Skolastik (TPS)',
    chapters: []
  },
  {
    id: '4',
    name: 'Pengetahuan Kuantitatif',
    category: 'Tes Potensi Skolastik (TPS)',
    chapters: []
  },
  // Tes Literasi
  {
    id: '5',
    name: 'Literasi Bahasa Indonesia',
    category: 'Tes Literasi',
    chapters: []
  },
  {
    id: '6',
    name: 'Literasi Bahasa Inggris',
    category: 'Tes Literasi',
    chapters: []
  },
  {
    id: '7',
    name: 'Penalaran Matematika',
    category: 'Tes Literasi',
    chapters: []
  }
];

export const DashboardMaterials = () => {
    const [selectedSubtestId, setSelectedSubtestId] = useState<string>(MOCK_DATA[0].id);
    const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({});

    const activeContent = MOCK_DATA.find(d => d.id === selectedSubtestId);

    const toggleChapter = (chapterId: string) => {
        setExpandedChapters(prev => ({
            ...prev,
            [chapterId]: !prev[chapterId] // Toggle boolean (undefined -> true)
        }));
    };

    const getIconByType = (type: MaterialType) => {
        switch(type) {
            case 'video': return 'play_circle';
            case 'text': return 'article';
            case 'quiz': return 'quiz';
            default: return 'description';
        }
    };

    return (
        <div className="bg-slate-50 text-slate-900 antialiased min-h-screen flex overflow-hidden font-display">
            <DashboardSidebar />
            <main className="flex-1 lg:ml-72 flex flex-col h-screen overflow-y-auto bg-slate-50 relative">
                <DashboardHeader 
                    title="Manajemen Materi" 
                    subtitle="Kelola materi, bab, dan sub-bab pelajaran"
                />
                
                <div className="p-8 max-w-7xl mx-auto w-full">
                    
                    {/* Top Actions & SubTest Tabs */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                        {/* Subtest Selector (Tabs) */}
                        {/* Subtest Selector (Tabs) - Grouped by Category */}
                        <div className="flex flex-col gap-4 w-full">
                            {['Tes Potensi Skolastik (TPS)', 'Tes Literasi'].map((category) => (
                                <div key={category} className="flex flex-col gap-2">
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{category}</h3>
                                    <div className="flex flex-wrap items-center gap-2">
                                        {MOCK_DATA.filter(st => st.category === category).map((subtest) => (
                                            <button
                                                key={subtest.id}
                                                onClick={() => setSelectedSubtestId(subtest.id)}
                                                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                                                    selectedSubtestId === subtest.id 
                                                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                                                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                                                }`}
                                            >
                                                {subtest.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            
                            <div className="mt-2">
                                <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-primary transition-colors cursor-pointer w-fit" title="Tambah SubTest">
                                    <span className="material-symbols-outlined text-[18px]">add</span>
                                    <span className="text-xs font-semibold">Tambah SubTest Baru</span>
                                </button>
                            </div>
                        </div>
                        




                    </div>


                    {/* Chapters List */}
                    <div className="flex flex-col gap-6">
                        {activeContent ? (
                            activeContent.chapters.map((chapter) => (
                                <div key={chapter.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                                    {/* Chapter Header */}
                                    <div 
                                        className="bg-slate-50/50 px-6 py-4 border-b border-slate-100 flex items-center justify-between cursor-pointer hover:bg-slate-100/50 transition-colors"
                                        onClick={() => toggleChapter(chapter.id)}
                                    >
                                        <div className="flex items-center gap-3">
                                            <button 
                                                className={`p-1 text-slate-400 hover:text-slate-600 rounded-lg transition-all cursor-pointer ${expandedChapters[chapter.id] ? 'rotate-180' : ''}`}
                                            >
                                                <span className="material-symbols-outlined">expand_more</span>
                                            </button>
                                            <span className="material-symbols-outlined text-slate-400">folder_open</span>
                                            <h3 className="font-bold text-slate-800">{chapter.title}</h3>
                                            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-xs font-medium text-slate-500">
                                                {chapter.materials.length} Materi
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                                            <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer" title="Edit Bab">
                                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                            </button>
                                            <Link 
                                                to="/dashboard/materials/create" 
                                                state={{ 
                                                    subtestId: activeContent.id,
                                                    subtestName: activeContent.name,
                                                    chapterId: chapter.id,
                                                    chapterTitle: chapter.title
                                                }}
                                                className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer flex items-center justify-center" 
                                                title="Tambah Materi di Bab ini"
                                            >
                                                <span className="material-symbols-outlined text-[18px]">add_circle</span>
                                            </Link>
                                        </div>
                                    </div>

                                    {expandedChapters[chapter.id] && (
                                    <div className="divide-y divide-slate-50 animate-in slide-in-from-top-2 duration-200">
                                        {chapter.materials.map((material) => (
                                            <div key={material.id} className="px-6 py-4 flex items-center group hover:bg-slate-50 transition-colors">
                                                <div className="mr-4 text-slate-300 cursor-move">
                                                    <span className="material-symbols-outlined">drag_indicator</span>
                                                </div>

                                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${
                                                    material.type === 'video' ? 'bg-red-50 text-red-500' :
                                                    material.type === 'quiz' ? 'bg-purple-50 text-purple-500' :
                                                    'bg-blue-50 text-blue-500'
                                                }`}>
                                                    <span className="material-symbols-outlined text-[20px]">{getIconByType(material.type)}</span>
                                                </div>

                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-slate-900 text-sm mb-0.5">{material.title}</h4>
                                                    <div className="flex items-center gap-3 text-xs text-slate-500">
                                                        <span className="capitalize">{material.type}</span>
                                                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                                        <span>{material.duration}</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-4">
                                                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                                                        material.status === 'published' 
                                                        ? 'bg-green-50 text-green-700' 
                                                        : 'bg-amber-50 text-amber-700'
                                                    }`}>
                                                        {material.status === 'published' ? 'Published' : 'Draft'}
                                                    </span>
                                                    
                                                    <div className="flex items-center gap-1">
                                                        <button className="p-1.5 text-slate-400 hover:text-blue-600 rounded-md transition-colors cursor-pointer">
                                                            <span className="material-symbols-outlined text-[18px]">visibility</span>
                                                        </button>
                                                        <button className="p-1.5 text-slate-400 hover:text-amber-600 rounded-md transition-colors cursor-pointer">
                                                            <span className="material-symbols-outlined text-[18px]">edit</span>
                                                        </button>
                                                        <button className="p-1.5 text-slate-400 hover:text-red-600 rounded-md transition-colors cursor-pointer">
                                                            <span className="material-symbols-outlined text-[18px]">delete</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    )}

                                    {expandedChapters[chapter.id] && chapter.materials.length === 0 && (
                                        <div className="p-8 text-center text-slate-500">
                                            <p className="text-sm">Belum ada materi di bab ini.</p>
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-20">
                                <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                                    <span className="material-symbols-outlined text-3xl text-slate-400">folder_off</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">SubTest Tidak Ditemukan</h3>
                                <p className="text-slate-500">Pilih SubTest lain dari tab di atas.</p>
                            </div>
                        )}

                        {/* Add New Bab Button */}
                        {activeContent && (
                            <button className="w-full py-4 rounded-2xl border-2 border-dashed border-slate-200 text-slate-500 hover:text-primary hover:border-primary hover:bg-slate-50 transition-all font-semibold flex items-center justify-center gap-2 cursor-pointer">
                                <span className="material-symbols-outlined">add</span>
                                <span>Tambah Bab</span>
                            </button>
                        )}
                    </div>

                </div>
            </main>
        </div>
    );
}

export default DashboardMaterials;
