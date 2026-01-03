import { DashboardSidebar } from "../features/dashboard/components/DashboardSidebar";
import { DashboardHeader } from "../features/dashboard/components/DashboardHeader";
import { DashboardStats } from "../features/dashboard/components/DashboardStats";
import { DashboardCharts } from "../features/dashboard/components/DashboardCharts";
import { DashboardRecentReports } from "../features/dashboard/components/DashboardRecentReports";

const DashboardPage = () => {
    return (
        <div className="bg-slate-50 text-slate-900 antialiased min-h-screen flex overflow-hidden font-display">
            {/* Sidebar */}
            <DashboardSidebar />

            {/* Main Content */}
            <main className="flex-1 lg:ml-72 flex flex-col h-screen overflow-y-auto bg-slate-50">
                {/* Header */}
                <DashboardHeader />

                {/* Content Body */}
                <div className="p-8 flex flex-col gap-8 max-w-[1600px] mx-auto w-full">
                    {/* Summary Stats */}
                    <DashboardStats />

                    {/* Charts Section */}
                    <DashboardCharts />

                    {/* Recent Table Section */}
                    <DashboardRecentReports />
                </div>
            </main>
        </div>
    );
}

export default DashboardPage;
