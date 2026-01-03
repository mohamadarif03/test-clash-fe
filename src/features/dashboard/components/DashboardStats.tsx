
interface StatCardProps {
    icon: string;
    variant: 'blue' | 'orange' | 'red' | 'emerald';
    trend: 'up' | 'down' | 'check';
    trendValue: string;
    label: string;
    value: string;
}

const StatCard = ({ icon, variant, trend, trendValue, label, value }: StatCardProps) => {
    // Define explicit style maps so Tailwind scans them correctly
    const variants = {
        blue: {
            border: 'border-primary',
            iconBg: 'bg-blue-50 text-primary',
        },
        orange: {
            border: 'border-orange-500',
            iconBg: 'bg-orange-50 text-orange-600',
        },
        red: {
            border: 'border-red-500',
            iconBg: 'bg-red-50 text-red-600',
        },
        emerald: {
            border: 'border-emerald-500',
            iconBg: 'bg-emerald-50 text-emerald-600',
        }
    };

    const trends = {
        up: { icon: 'trending_up', style: 'text-green-600 bg-green-50' },
        down: { icon: 'trending_down', style: 'text-red-600 bg-red-50' },
        check: { icon: 'check_circle', style: 'text-emerald-600 bg-emerald-50' }
    };

    const style = variants[variant];
    const trendStyle = trends[trend];

    return (
        <div className={`bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow border-l-4 ${style.border}`}>
            <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-lg ${style.iconBg}`}>
                     <span className="material-symbols-outlined">{icon}</span>
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold ${trendStyle.style}`}>
                    <span className="material-symbols-outlined text-[16px]">{trendStyle.icon}</span>
                    {trendValue}
                </div>
            </div>
            <p className="text-gray-500 text-sm font-medium">{label}</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
        </div>
    );
};

export const DashboardStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatCard 
                icon="group" 
                variant="blue"
                trend="up" 
                trendValue="12%" 
                label="Total Pengguna" 
                value="12,450" 
            />
             <StatCard 
                icon="swords" 
                variant="orange"
                trend="up" 
                trendValue="5%" 
                label="Pertandingan Aktif" 
                value="843" 
            />
             <StatCard 
                icon="report_problem" 
                variant="red"
                trend="down" 
                trendValue="2%" 
                label="Laporan Baru" 
                value="24" 
            />
             <StatCard 
                icon="dns" 
                variant="emerald"
                trend="check" 
                trendValue="Stabil" 
                label="Status Server" 
                value="99.9%" 
            />
        </div>
    );
}
