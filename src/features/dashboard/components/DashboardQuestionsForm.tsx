
import { useState, useEffect } from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { Link, useLocation } from 'react-router-dom';
import { MathText } from '../../../components/MathText';

export const DashboardQuestionsForm = () => {
    const location = useLocation();
    
    // State for linkage
    const [subtest, setSubtest] = useState('');
    const [chapter, setChapter] = useState('');
    const [material, setMaterial] = useState('');

    // State for question content
    const [questionType, setQuestionType] = useState('Pilihan Ganda'); // 'Pilihan Ganda', 'Isian'
    const [difficulty, setDifficulty] = useState('Sedang');
    const [questionText, setQuestionText] = useState('');
    
    // Options for Multiple Choice
    const [options, setOptions] = useState([
        { key: 'A', text: '' },
        { key: 'B', text: '' },
        { key: 'C', text: '' },
        { key: 'D', text: '' },
        { key: 'E', text: '' },
    ]);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [explanation, setExplanation] = useState('');

    useEffect(() => {
        if (location.state) {
            if (location.state.subtestName) setSubtest(location.state.subtestName);
            if (location.state.chapterTitle) setChapter(location.state.chapterTitle);
            if (location.state.materialTitle) setMaterial(location.state.materialTitle);
        }
    }, [location]);

    const handleOptionChange = (index: number, val: string) => {
        const newOptions = [...options];
        newOptions[index].text = val;
        setOptions(newOptions);
    };

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
                                <Link to="/dashboard/questions" className="text-slate-500 hover:text-primary transition-colors font-medium">Bank Soal</Link>
                                <span className="text-slate-300 material-symbols-outlined text-[16px]">chevron_right</span>
                                <span className="text-slate-900 font-semibold">Buat Soal</span>
                            </div>
                            {/* Page Title & Actions */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                                <h1 className="text-slate-900 text-3xl md:text-4xl font-bold tracking-tight">Buat Soal Baru</h1>
                                <div className="flex items-center gap-3">
                                    <Link to="/dashboard/questions" className="hidden sm:flex items-center justify-center px-4 h-10 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer">
                                        Batal
                                    </Link>
                                    <button className="flex items-center justify-center gap-2 px-5 h-10 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98] cursor-pointer">
                                        <span className="material-symbols-outlined text-[18px]">save</span>
                                        Simpan Soal
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Main Grid Layout */}
                        <div className="flex flex-col gap-8">
                            
                            {/* Metadata Card (Linkage) */}
                            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Hubungkan dengan Materi</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* Dropdown Subtest */}
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
                                                {/* Add more options as needed or load dynamically */}
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
                                                {chapter && chapter !== "Bab 1: Logika Deduktif" && (
                                                    <option value={chapter}>{chapter}</option>
                                                )}
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                                                <span className="material-symbols-outlined">expand_more</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Material Dropdown - The Core Request */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-slate-900 text-sm font-semibold">
                                            Materi Pembelajaran
                                        </label>
                                        <div className="relative">
                                            <select 
                                                value={material}
                                                onChange={(e) => setMaterial(e.target.value)}
                                                className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-base text-slate-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-shadow cursor-pointer"
                                            >
                                                <option disabled value="">Pilih Materi...</option>
                                                <option value="Pengenalan Logika">Video: Pengenalan Logika</option>
                                                <option value="Silogisme Kategorik">Teks: Silogisme Kategorik</option>
                                                {material && material !== "Pengenalan Logika" && material !== "Silogisme Kategorik" && (
                                                    <option value={material}>{material}</option>
                                                )}
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                                                <span className="material-symbols-outlined">expand_more</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-slate-500">Soal ini akan muncul di materi yang dipilih.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Question Editor */}
                            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col gap-6">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-1 flex flex-col gap-2">
                                        <label className="text-slate-900 text-sm font-semibold">Tipe Soal</label>
                                        <div className="flex gap-2">
                                            {['Pilihan Ganda', 'Isian Singkat', 'Benar/Salah'].map(t => (
                                                <button 
                                                    key={t}
                                                    onClick={() => setQuestionType(t)}
                                                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
                                                        questionType === t ? 'bg-blue-50 border-blue-200 text-blue-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                                                    }`}
                                                >
                                                    {t}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col gap-2">
                                        <label className="text-slate-900 text-sm font-semibold">Tingkat Kesulitan</label>
                                        <div className="flex gap-2">
                                            {['Mudah', 'Sedang', 'Sulit'].map(d => (
                                                <button 
                                                    key={d}
                                                    onClick={() => setDifficulty(d)}
                                                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
                                                        difficulty === d 
                                                            ? (d === 'Mudah' ? 'bg-green-50 border-green-200 text-green-700' : d === 'Sedang' ? 'bg-amber-50 border-amber-200 text-amber-700' : 'bg-red-50 border-red-200 text-red-700')
                                                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                                                    }`}
                                                >
                                                    {d}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-end">
                                        <label className="text-slate-900 text-sm font-semibold">Pertanyaan</label>
                                        <span className="text-xs text-slate-500">Gunakan <code className="bg-slate-100 px-1 rounded">$...$</code> untuk rumus matematika.</span>
                                    </div>
                                    <div className="border border-slate-200 rounded-xl overflow-hidden min-h-[200px] p-4 bg-slate-50/30">
                                        {/* Simple Textarea for now, replacing WYSIWYG for brevity unless requested */}
                                        <textarea 
                                            value={questionText}
                                            onChange={(e) => setQuestionText(e.target.value)}
                                            className="w-full h-full bg-transparent outline-none resize-y min-h-[140px]"
                                            placeholder="Tulis pertanyaan disini..."
                                        />
                                        {questionText && (
                                            <div className="mt-4 pt-4 border-t border-slate-200">
                                                <p className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Preview:</p>
                                                <MathText text={questionText} className="text-slate-900 text-lg" />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {questionType === 'Pilihan Ganda' && (
                                    <div className="flex flex-col gap-4">
                                        <label className="text-slate-900 text-sm font-semibold">Pilihan Jawaban</label>
                                        <div className="grid grid-cols-1 gap-3">
                                            {options.map((opt, idx) => (
                                                <div key={idx} className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border-2 cursor-pointer transition-colors ${
                                                            correctAnswer === opt.key ? 'bg-green-500 border-green-500 text-white' : 'border-slate-200 text-slate-400 hover:border-slate-300'
                                                        }`} onClick={() => setCorrectAnswer(opt.key)}>
                                                            {opt.key}
                                                        </div>
                                                        <input 
                                                            type="text" 
                                                            value={opt.text}
                                                            onChange={(e) => handleOptionChange(idx, e.target.value)}
                                                            className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-shadow"
                                                            placeholder={`Jawaban ${opt.key}`}
                                                        />
                                                    </div>
                                                    {/* Option Preview */}
                                                    {opt.text && (
                                                        <div className="pl-[52px]">
                                                            <MathText text={opt.text} className="text-slate-700 text-sm" />
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                
                                <div className="flex flex-col gap-2">
                                     <div className="flex justify-between items-end">
                                        <label className="text-slate-900 text-sm font-semibold">Pembahasan / Penjelasan</label>
                                        <span className="text-xs text-slate-500">Mendukung formula matematika</span>
                                    </div>
                                    <div className="border border-slate-200 rounded-xl overflow-hidden p-4">
                                        <textarea 
                                            value={explanation}
                                            onChange={(e) => setExplanation(e.target.value)}
                                            className="w-full bg-transparent outline-none resize-y min-h-[100px]"
                                            placeholder="Tulis penjelasan jawaban disini..."
                                        />
                                        {explanation && (
                                            <div className="mt-4 pt-4 border-t border-slate-200">
                                                <p className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Preview:</p>
                                                <MathText text={explanation} className="text-slate-900" />
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="h-10"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default DashboardQuestionsForm;
