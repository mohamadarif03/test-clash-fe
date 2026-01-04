import { useState } from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardHeader } from './DashboardHeader';
import { Link } from 'react-router-dom';
import { MathText } from '../../../components/MathText';

// Types
interface Question {
    id: string;
    text: string;
    type: 'Pilihan Ganda' | 'Isian Singkat';
    difficulty: 'Mudah' | 'Sedang' | 'Sulit';
}

interface MaterialWithQuestions {
    id: string;
    title: string;
    type: 'video' | 'text' | 'quiz';
    questions: Question[];
}

interface ChapterWithQuestions {
    id: string;
    title: string;
    materials: MaterialWithQuestions[];
}

interface SubTestWithQuestions {
    id: string;
    name: string;
    category: string;
    chapters: ChapterWithQuestions[];
}

// Mock Data Structure matching Materials page but with Questions
const MOCK_DATA: SubTestWithQuestions[] = [
    {
        id: '1',
        name: 'Penalaran Umum',
        category: 'Tes Potensi Skolastik (TPS)',
        chapters: [
            {
                id: 'c1',
                title: 'Bab 1: Logika Deduktif',
                materials: [
                    {
                        id: 'm1',
                        title: 'Pengenalan Logika',
                        type: 'video',
                        questions: [
                            { id: 'q1', text: 'Apa definisi logika menurut Aristoteles?', type: 'Pilihan Ganda', difficulty: 'Mudah' },
                            { id: 'q2', text: 'Manakah yang bukan termasuk premis?', type: 'Pilihan Ganda', difficulty: 'Sedang' }
                        ]
                    },
                    {
                        id: 'm2',
                        title: 'Silogisme Kategorik',
                        type: 'text',
                        questions: []
                    },
                    {
                        id: 'm3',
                        title: 'Latihan Soal Dasar',
                        type: 'quiz',
                        questions: [
                            { id: 'q3', text: 'Jika $x^2 + 4x + 4 = 0$, maka nilai $x$ adalah...', type: 'Pilihan Ganda', difficulty: 'Sulit' }
                        ]
                    }
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
        id: '5',
        name: 'Literasi Bahasa Indonesia',
        category: 'Tes Literasi',
        chapters: []
    }
];

export const DashboardQuestions = () => {
    const [selectedSubtestId, setSelectedSubtestId] = useState<string>(MOCK_DATA[0].id);
    const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({});
    // Expanded materials state to toggle viewing questions inside a material
    const [expandedMaterials, setExpandedMaterials] = useState<Record<string, boolean>>({});

    const activeContent = MOCK_DATA.find(d => d.id === selectedSubtestId);

    const toggleChapter = (chapterId: string) => {
        setExpandedChapters(prev => ({
            ...prev,
            [chapterId]: !prev[chapterId]
        }));
    };

    const toggleMaterial = (materialId: string) => {
        setExpandedMaterials(prev => ({
            ...prev,
            [materialId]: !prev[materialId]
        }));
    };

    const getDifficultyColor = (diff: string) => {
        switch(diff) {
            case 'Mudah': return 'bg-green-100 text-green-700';
            case 'Sedang': return 'bg-amber-100 text-amber-700';
            case 'Sulit': return 'bg-red-100 text-red-700';
            default: return 'bg-slate-100 text-slate-700';
        }
    };

    const getIconByType = (type: string) => {
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
                    title="Bank Soal" 
                    subtitle="Kelola database soal berdasarkan materi"
                />
                
                <div className="p-8 max-w-7xl mx-auto w-full">
                    
                    {/* Top Actions & SubTest Tabs */}
                    <div className="flex flex-col gap-6 mb-8">
                        {/* Custom Tab Selector */}
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
                                                {chapter.materials.reduce((acc, m) => acc + m.questions.length, 0)} Soal
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                                            <Link 
                                                to="/dashboard/questions/create" 
                                                state={{ 
                                                    subtestId: activeContent.id,
                                                    subtestName: activeContent.name,
                                                    chapterId: chapter.id,
                                                    chapterTitle: chapter.title
                                                }}
                                                className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer flex items-center justify-center" 
                                                title="Buat Soal di Bab ini"
                                            >
                                                <span className="material-symbols-outlined text-[18px]">add_circle</span>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Materials Grouping */}
                                    {expandedChapters[chapter.id] && (
                                        <div className="divide-y divide-slate-100 animate-in slide-in-from-top-2 duration-200">
                                            {chapter.materials.map((material) => (
                                                <div key={material.id} className="bg-white">
                                                    {/* Material Header */}
                                                    <div 
                                                        className="px-6 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
                                                        onClick={() => toggleMaterial(material.id)}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                                                material.type === 'video' ? 'bg-red-50 text-red-500' :
                                                                material.type === 'quiz' ? 'bg-purple-50 text-purple-500' :
                                                                'bg-blue-50 text-blue-500'
                                                            }`}>
                                                                <span className="material-symbols-outlined text-[18px]">{getIconByType(material.type)}</span>
                                                            </div>
                                                            <span className="text-sm font-semibold text-slate-700">{material.title}</span>
                                                            <span className="text-xs text-slate-400">({material.questions.length} Soal)</span>
                                                        </div>
                                                        <span className={`material-symbols-outlined text-slate-400 text-[18px] transition-transform ${expandedMaterials[material.id] ? 'rotate-180' : ''}`}>expand_more</span>
                                                    </div>

                                                    {/* Questions List */}
                                                    {expandedMaterials[material.id] && (
                                                        <div className="bg-slate-50/50 border-t border-slate-100 px-6 py-2">
                                                            {material.questions.length > 0 ? (
                                                                <div className="flex flex-col gap-2">
                                                                    {material.questions.map((q) => (
                                                                        <div key={q.id} className="p-3 bg-white rounded-lg border border-slate-200 flex items-start justify-between group hover:shadow-sm transition-all">
                                                                            <div className="flex-1">
                                                                                <div className="text-sm text-slate-800 line-clamp-2 font-medium">
                                                                                    <MathText text={q.text} />
                                                                                </div>
                                                                                <div className="flex items-center gap-2 mt-1">
                                                                                    <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${getDifficultyColor(q.difficulty)}`}>{q.difficulty}</span>
                                                                                    <span className="text-xs text-slate-400">{q.type}</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex items-center gap-1">
                                                                                <button className="p-1.5 text-slate-400 hover:text-blue-600 rounded cursor-pointer" title="Edit Soal">
                                                                                    <span className="material-symbols-outlined text-[16px]">edit</span>
                                                                                </button>
                                                                                <button className="p-1.5 text-slate-400 hover:text-red-600 rounded cursor-pointer" title="Hapus Soal">
                                                                                    <span className="material-symbols-outlined text-[16px]">delete</span>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                    {/* Add Question to specific material */}
                                                                    <Link
                                                                        to="/dashboard/questions/create"
                                                                        state={{
                                                                            subtestId: activeContent.id,
                                                                            subtestName: activeContent.name,
                                                                            chapterId: chapter.id,
                                                                            chapterTitle: chapter.title,
                                                                            materialId: material.id,
                                                                            materialTitle: material.title
                                                                        }}
                                                                        className="flex items-center justify-center gap-2 py-2 mt-2 text-xs font-semibold text-blue-600 hover:bg-blue-50 rounded-lg border border-dashed border-blue-200 transition-colors cursor-pointer"
                                                                    >
                                                                        <span className="material-symbols-outlined text-[14px]">add</span>
                                                                        Tambah Soal untuk Materi Ini
                                                                    </Link>
                                                                </div>
                                                            ) : (
                                                                <div className="text-center py-4">
                                                                    <p className="text-xs text-slate-400 mb-2">Belum ada soal untuk materi ini.</p>
                                                                    <Link
                                                                        to="/dashboard/questions/create"
                                                                        state={{
                                                                            subtestId: activeContent.id,
                                                                            subtestName: activeContent.name,
                                                                            chapterId: chapter.id,
                                                                            chapterTitle: chapter.title,
                                                                            materialId: material.id,
                                                                            materialTitle: material.title
                                                                        }}
                                                                        className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
                                                                    >
                                                                        Buat Soal Sekarang
                                                                    </Link>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                            {/* Empty State if no materials */}
                                            {chapter.materials.length === 0 && (
                                                 <div className="p-8 text-center text-slate-500">
                                                    <p className="text-sm">Belum ada materi di bab ini. Tambahkan materi terlebih dahulu untuk membuat soal.</p>
                                                </div>
                                            )}
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
                    </div>

                </div>
            </main>
        </div>
    );
}

export default DashboardQuestions;
