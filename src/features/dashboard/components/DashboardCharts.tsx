
export const DashboardCharts = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Line Chart */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-card p-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">Daily Active Users</h3>
                        <p className="text-sm text-gray-500">Engagement performance over last 30 days</p>
                    </div>
                    <button className="flex items-center gap-2 text-sm font-medium text-primary bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                        Last 30 Days
                    </button>
                </div>
                <div className="relative h-64 w-full">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 200">
                        {/* Grid lines */}
                        <line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="800" y1="0" y2="0"></line>
                        <line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="800" y1="50" y2="50"></line>
                        <line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="800" y1="100" y2="100"></line>
                        <line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="800" y1="150" y2="150"></line>
                        <line stroke="#f3f4f6" strokeWidth="1" x1="0" x2="800" y1="200" y2="200"></line>
                        {/* Gradient Area */}
                        <defs>
                            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#1349ec" stopOpacity="0.2"></stop>
                                <stop offset="100%" stopColor="#1349ec" stopOpacity="0"></stop>
                            </linearGradient>
                        </defs>
                        <path d="M0,150 C50,140 100,160 150,120 C200,80 250,100 300,90 C350,80 400,60 450,70 C500,80 550,50 600,40 C650,30 700,45 750,25 L800,20 L800,200 L0,200 Z" fill="url(#gradient)"></path>
                        {/* Line */}
                        <path d="M0,150 C50,140 100,160 150,120 C200,80 250,100 300,90 C350,80 400,60 450,70 C500,80 550,50 600,40 C650,30 700,45 750,25 L800,20" fill="none" stroke="#1349ec" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                        {/* Dots */}
                        <circle cx="150" cy="120" fill="white" r="4" stroke="#1349ec" strokeWidth="2"></circle>
                        <circle cx="450" cy="70" fill="white" r="4" stroke="#1349ec" strokeWidth="2"></circle>
                        <circle cx="750" cy="25" fill="white" r="4" stroke="#1349ec" strokeWidth="2"></circle>
                    </svg>
                    {/* Tooltip mockup */}
                    <div className="absolute top-[10%] right-[10%] bg-gray-900 text-white text-xs py-1 px-2 rounded shadow-lg pointer-events-none">
                        8,204 Users
                    </div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-4 px-2">
                    <span>Nov 1</span>
                    <span>Nov 5</span>
                    <span>Nov 10</span>
                    <span>Nov 15</span>
                    <span>Nov 20</span>
                    <span>Nov 25</span>
                    <span>Nov 30</span>
                </div>
            </div>
            
            {/* Secondary Stats / Breakdown */}
            <div className="bg-white rounded-xl shadow-card p-6 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Device Breakdown</h3>
                <div className="flex-1 flex flex-col justify-center gap-6">
                    {/* Item 1 */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-blue-50 text-primary">
                            <span className="material-symbols-outlined">smartphone</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Mobile App</span>
                                <span className="text-sm font-bold text-gray-900">65%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-[65%] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-orange-50 text-orange-500">
                            <span className="material-symbols-outlined">laptop_mac</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Desktop Web</span>
                                <span className="text-sm font-bold text-gray-900">25%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 w-[25%] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-purple-50 text-purple-600">
                            <span className="material-symbols-outlined">tablet</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Tablet</span>
                                <span className="text-sm font-bold text-gray-900">10%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-600 w-[10%] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
